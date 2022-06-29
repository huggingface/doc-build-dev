import{S as tl,i as ol,s as rl,e as r,k as m,w as v,t as i,M as al,c as a,d as o,m as h,a as s,x as b,h as l,b as p,G as e,g as T,y as $,q as w,o as M,B as y,v as sl,L as Ce}from"../../chunks/vendor-hf-doc-builder.js";import{T as wo}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Te}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nl(k){let n,_,d,f,C;return f=new ve({props:{code:`from transformers import MCTCTModel, MCTCTConfig

# Initializing a M-CTC-T mctct-large style configuration
configuration = MCTCTConfig()

# Initializing a model from the mctct-large style configuration
model = MCTCTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MCTCTModel, MCTCTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a M-CTC-T mctct-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MCTCTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the mctct-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MCTCTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){n=r("p"),_=i("Example:"),d=m(),v(f.$$.fragment)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Example:"),u.forEach(o),d=h(c),b(f.$$.fragment,c)},m(c,u){T(c,n,u),e(n,_),T(c,d,u),$(f,c,u),C=!0},p:Ce,i(c){C||(w(f.$$.fragment,c),C=!0)},o(c){M(f.$$.fragment,c),C=!1},d(c){c&&o(n),c&&o(d),y(f,c)}}}function il(k){let n,_,d,f,C,c,u,x;return{c(){n=r("p"),_=i(`This class method is simply calling the feature extractor
`),d=r("a"),f=i("from_pretrained()"),C=i(` and the tokenizer
`),c=r("code"),u=i("from_pretrained"),x=i(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(P){n=a(P,"P",{});var E=s(n);_=l(E,`This class method is simply calling the feature extractor
`),d=a(E,"A",{href:!0});var z=s(d);f=l(z,"from_pretrained()"),z.forEach(o),C=l(E,` and the tokenizer
`),c=a(E,"CODE",{});var A=s(c);u=l(A,"from_pretrained"),A.forEach(o),x=l(E,` methods. Please refer to the docstrings of the
methods above for more information.`),E.forEach(o),this.h()},h(){p(d,"href","/docs/transformers/pr_17671/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(P,E){T(P,n,E),e(n,_),e(n,d),e(d,f),e(n,C),e(n,c),e(c,u),e(n,x)},d(P){P&&o(n)}}}function ll(k){let n,_,d,f,C,c,u,x;return{c(){n=r("p"),_=i("This class method is simply calling "),d=r("a"),f=i("save_pretrained()"),C=i(` and
`),c=r("code"),u=i("save_pretrained"),x=i(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(P){n=a(P,"P",{});var E=s(n);_=l(E,"This class method is simply calling "),d=a(E,"A",{href:!0});var z=s(d);f=l(z,"save_pretrained()"),z.forEach(o),C=l(E,` and
`),c=a(E,"CODE",{});var A=s(c);u=l(A,"save_pretrained"),A.forEach(o),x=l(E,`. Please refer to the docstrings of the methods
above for more information.`),E.forEach(o),this.h()},h(){p(d,"href","/docs/transformers/pr_17671/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(P,E){T(P,n,E),e(n,_),e(n,d),e(d,f),e(n,C),e(n,c),e(c,u),e(n,x)},d(P){P&&o(n)}}}function cl(k){let n,_,d,f,C;return{c(){n=r("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),f=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(u,"CODE",{});var x=s(d);f=l(x,"Module"),x.forEach(o),C=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(c,u){T(c,n,u),e(n,_),e(n,d),e(d,f),e(n,C)},d(c){c&&o(n)}}}function dl(k){let n,_,d,f,C;return f=new ve({props:{code:`from transformers import MCTCTProcessor, MCTCTModel
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = MCTCTProcessor.from_pretrained("speechbrain/m-ctc-t-large")
model = MCTCTModel.from_pretrained("speechbrain/m-ctc-t-large")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MCTCTProcessor, MCTCTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MCTCTProcessor.from_pretrained(<span class="hljs-string">&quot;speechbrain/m-ctc-t-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MCTCTModel.from_pretrained(<span class="hljs-string">&quot;speechbrain/m-ctc-t-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
[<span class="hljs-number">1</span>, <span class="hljs-number">195</span>, <span class="hljs-number">1536</span>]`}}),{c(){n=r("p"),_=i("Example:"),d=m(),v(f.$$.fragment)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Example:"),u.forEach(o),d=h(c),b(f.$$.fragment,c)},m(c,u){T(c,n,u),e(n,_),T(c,d,u),$(f,c,u),C=!0},p:Ce,i(c){C||(w(f.$$.fragment,c),C=!0)},o(c){M(f.$$.fragment,c),C=!1},d(c){c&&o(n),c&&o(d),y(f,c)}}}function pl(k){let n,_;return n=new ve({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(n.$$.fragment)},l(d){b(n.$$.fragment,d)},m(d,f){$(n,d,f),_=!0},p:Ce,i(d){_||(w(n.$$.fragment,d),_=!0)},o(d){M(n.$$.fragment,d),_=!1},d(d){y(n,d)}}}function ml(k){let n,_,d,f,C;return{c(){n=r("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),f=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(u,"CODE",{});var x=s(d);f=l(x,"Module"),x.forEach(o),C=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(c,u){T(c,n,u),e(n,_),e(n,d),e(d,f),e(n,C)},d(c){c&&o(n)}}}function hl(k){let n,_,d,f,C;return f=new ve({props:{code:`from transformers import MCTCTProcessor, MCTCTForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = MCTCTProcessor.from_pretrained("speechbrain/m-ctc-t-large")
model = MCTCTForCTC.from_pretrained("speechbrain/m-ctc-t-large")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MCTCTProcessor, MCTCTForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MCTCTProcessor.from_pretrained(<span class="hljs-string">&quot;speechbrain/m-ctc-t-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MCTCTForCTC.from_pretrained(<span class="hljs-string">&quot;speechbrain/m-ctc-t-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Mr. Quilter is the apostle of the middle classes, and we&#x27;re glad to welcome his gospel.&quot;</span>`}}),{c(){n=r("p"),_=i("Example:"),d=m(),v(f.$$.fragment)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Example:"),u.forEach(o),d=h(c),b(f.$$.fragment,c)},m(c,u){T(c,n,u),e(n,_),T(c,d,u),$(f,c,u),C=!0},p:Ce,i(c){C||(w(f.$$.fragment,c),C=!0)},o(c){M(f.$$.fragment,c),C=!1},d(c){c&&o(n),c&&o(d),y(f,c)}}}function fl(k){let n,_;return n=new ve({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1885.65</span>`}}),{c(){v(n.$$.fragment)},l(d){b(n.$$.fragment,d)},m(d,f){$(n,d,f),_=!0},p:Ce,i(d){_||(w(n.$$.fragment,d),_=!0)},o(d){M(n.$$.fragment,d),_=!1},d(d){y(n,d)}}}function ul(k){let n,_,d,f,C;return{c(){n=r("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),f=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(u,"CODE",{});var x=s(d);f=l(x,"Module"),x.forEach(o),C=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(c,u){T(c,n,u),e(n,_),e(n,d),e(d,f),e(n,C)},d(c){c&&o(n)}}}function gl(k){let n,_,d,f,C;return f=new ve({props:{code:`from transformers import MCTCTFeatureExtractor, MCTCTForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = MCTCTFeatureExtractor.from_pretrained("cwkeam/m-ctc-t-large-frame-lid")
model = MCTCTForAudioFrameClassification.from_pretrained("cwkeam/m-ctc-t-large-frame-lid")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MCTCTFeatureExtractor, MCTCTForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MCTCTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;cwkeam/m-ctc-t-large-frame-lid&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MCTCTForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;cwkeam/m-ctc-t-large-frame-lid&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
[<span class="hljs-number">12</span>, <span class="hljs-number">12</span>]`}}),{c(){n=r("p"),_=i("Example:"),d=m(),v(f.$$.fragment)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Example:"),u.forEach(o),d=h(c),b(f.$$.fragment,c)},m(c,u){T(c,n,u),e(n,_),T(c,d,u),$(f,c,u),C=!0},p:Ce,i(c){C||(w(f.$$.fragment,c),C=!0)},o(c){M(f.$$.fragment,c),C=!1},d(c){c&&o(n),c&&o(d),y(f,c)}}}function _l(k){let n,_;return n=new ve({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(n.$$.fragment)},l(d){b(n.$$.fragment,d)},m(d,f){$(n,d,f),_=!0},p:Ce,i(d){_||(w(n.$$.fragment,d),_=!0)},o(d){M(n.$$.fragment,d),_=!1},d(d){y(n,d)}}}function Tl(k){let n,_,d,f,C;return{c(){n=r("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),f=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(u,"CODE",{});var x=s(d);f=l(x,"Module"),x.forEach(o),C=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(c,u){T(c,n,u),e(n,_),e(n,d),e(d,f),e(n,C)},d(c){c&&o(n)}}}function Cl(k){let n,_,d,f,C;return f=new ve({props:{code:`from transformers import MCTCTFeatureExtractor, MCTCTForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = MCTCTFeatureExtractor.from_pretrained("cwkeam/m-ctc-t-large-sequence-lid")
model = MCTCTForSequenceClassification.from_pretrained("cwkeam/m-ctc-t-large-sequence-lid")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MCTCTFeatureExtractor, MCTCTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = MCTCTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;cwkeam/m-ctc-t-large-sequence-lid&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MCTCTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cwkeam/m-ctc-t-large-sequence-lid&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
en`}}),{c(){n=r("p"),_=i("Example:"),d=m(),v(f.$$.fragment)},l(c){n=a(c,"P",{});var u=s(n);_=l(u,"Example:"),u.forEach(o),d=h(c),b(f.$$.fragment,c)},m(c,u){T(c,n,u),e(n,_),T(c,d,u),$(f,c,u),C=!0},p:Ce,i(c){C||(w(f.$$.fragment,c),C=!0)},o(c){M(f.$$.fragment,c),C=!1},d(c){c&&o(n),c&&o(d),y(f,c)}}}function vl(k){let n,_;return n=new ve({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">6.54</span>`}}),{c(){v(n.$$.fragment)},l(d){b(n.$$.fragment,d)},m(d,f){$(n,d,f),_=!0},p:Ce,i(d){_||(w(n.$$.fragment,d),_=!0)},o(d){M(n.$$.fragment,d),_=!1},d(d){y(n,d)}}}function bl(k){let n,_,d,f,C,c,u,x,P,E,z,A,Mo,et,Qr,yo,Xr,hr,be,Yr,tt,Zr,ea,fr,Rt,ta,ur,Gt,ko,oa,gr,J,ra,ot,aa,sa,rt,na,ia,_r,te,$e,xo,at,la,Fo,ca,Tr,O,st,da,oe,pa,Jt,ma,ha,nt,fa,ua,ga,re,_a,Kt,Ta,Ca,Qt,va,ba,$a,we,Cr,ae,Me,Eo,it,wa,jo,Ma,vr,V,lt,ya,qo,ka,xa,se,Fa,Xt,Ea,ja,ct,qa,Pa,za,ye,dt,Aa,Po,Sa,br,ne,ke,zo,pt,Ia,Ao,Da,$r,F,mt,La,So,Na,Oa,S,Yt,Va,Wa,Zt,Ba,Ua,eo,Ha,Ra,ht,Io,Ga,Ja,Ka,to,Qa,Xa,Ya,xe,ft,Za,U,es,ut,Do,ts,os,rs,oo,as,ss,Lo,ns,is,ls,K,gt,cs,No,ds,ps,Fe,ms,Q,_t,hs,Tt,fs,ro,us,gs,_s,Ee,Ts,je,Ct,Cs,vt,vs,ao,bs,$s,ws,qe,bt,Ms,$t,ys,so,ks,xs,Fs,Pe,wt,Es,Oo,js,wr,ie,ze,Vo,Mt,qs,Wo,Ps,Mr,H,yt,zs,kt,As,xt,Ss,Is,Ds,I,Ft,Ls,le,Ns,no,Os,Vs,Bo,Ws,Bs,Us,Ae,Hs,Se,Rs,Ie,yr,ce,De,Uo,Et,Gs,Ho,Js,kr,R,jt,Ks,de,Qs,Ro,Xs,Ys,qt,Zs,en,tn,D,Pt,on,pe,rn,io,an,sn,Go,nn,ln,cn,Le,dn,Ne,pn,Oe,xr,me,Ve,Jo,zt,mn,Ko,hn,Fr,W,At,fn,Qo,un,gn,St,_n,It,Tn,Cn,vn,L,Dt,bn,he,$n,lo,wn,Mn,Xo,yn,kn,xn,We,Fn,Be,En,Ue,Er,fe,He,Yo,Lt,jn,Zo,qn,jr,B,Nt,Pn,er,zn,An,Ot,Sn,Vt,In,Dn,Ln,N,Wt,Nn,ue,On,co,Vn,Wn,tr,Bn,Un,Hn,Re,Rn,Ge,Gn,Je,qr;return c=new _e({}),et=new _e({}),at=new _e({}),st=new q({props:{name:"class transformers.MCTCTConfig",anchor:"transformers.MCTCTConfig",parameters:[{name:"vocab_size",val:" = 8065"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 36"},{name:"intermediate_size",val:" = 6144"},{name:"num_attention_heads",val:" = 4"},{name:"attention_head_dim",val:" = 384"},{name:"max_position_embeddings",val:" = 920"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"layerdrop",val:" = 0.3"},{name:"hidden_act",val:" = 'relu'"},{name:"initializer_range",val:" = 0.02"},{name:"hidden_dropout_prob",val:" = 0.3"},{name:"attention_probs_dropout_prob",val:" = 0.3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"conv_glu_dim",val:" = 1"},{name:"conv_dropout",val:" = 0.3"},{name:"num_conv_layers",val:" = 1"},{name:"conv_kernel",val:" = (7,)"},{name:"conv_stride",val:" = (3,)"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"conv_channels",val:" = None"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MCTCTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8065) &#x2014;
Vocabulary size of the M-CTC-T model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTModel">MCTCTModel</a>.`,name:"vocab_size"},{anchor:"transformers.MCTCTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MCTCTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 36) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MCTCTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MCTCTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MCTCTConfig.attention_head_dim",description:`<strong>attention_head_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Dimensions of each attention head for each attention layer in the Transformer encoder.`,name:"attention_head_dim"},{anchor:"transformers.MCTCTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 920) &#x2014;
The maximum sequence length that this model might ever be used with (after log-mel spectrogram extraction).`,name:"max_position_embeddings"},{anchor:"transformers.MCTCTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MCTCTConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.3) &#x2014;
The probability of dropping an encoder layer during training. The default 0.3 value is used in the original
implementation.`,name:"layerdrop"},{anchor:"transformers.MCTCTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MCTCTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MCTCTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MCTCTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MCTCTConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The tokenizer index of the pad token.`,name:"pad_token_id"},{anchor:"transformers.MCTCTConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The tokenizer index of the bos token.`,name:"bos_token_id"},{anchor:"transformers.MCTCTConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The tokenizer index of the eos token.`,name:"eos_token_id"},{anchor:"transformers.MCTCTConfig.conv_glu_dim",description:`<strong>conv_glu_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The dimension of the output of the <code>Conv1dSubsampler</code> layer in which GLU is applied on. Though the original
Flashlight code uses the value of 2, here it&#x2019;s adapted to 1 due to transposition differences.`,name:"conv_glu_dim"},{anchor:"transformers.MCTCTConfig.conv_dropout",description:`<strong>conv_dropout</strong> (<code>int</code>, <em>optional</em>, defaults to 0.3) &#x2014;
The probability of randomly dropping the <code>Conv1dSubsampler</code> layer during training.`,name:"conv_dropout"},{anchor:"transformers.MCTCTConfig.num_conv_layers",description:`<strong>num_conv_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of convolution layers before applying transformer encoder layers.`,name:"num_conv_layers"},{anchor:"transformers.MCTCTConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[7]</code>) &#x2014;
The kernel size of the 1D convolution applied before transformer layers. <code>len(conv_kernel)</code> must be equal
to <code>num_conv_layers</code>.`,name:"conv_kernel"},{anchor:"transformers.MCTCTConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3]</code>) &#x2014;
The stride length of the 1D convolution applied before transformer layers. <code>len(conv_stride)</code> must be equal
to <code>num_conv_layers</code>.`,name:"conv_stride"},{anchor:"transformers.MCTCTConfig.input_feat_per_channel",description:`<strong>input_feat_per_channel</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
Feature dimensions of the channels of the input to the Conv1D layer.`,name:"input_feat_per_channel"},{anchor:"transformers.MCTCTConfig.input_channels",description:`<strong>input_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of input channels of the input to the Conv1D layer.`,name:"input_channels"},{anchor:"transformers.MCTCTConfig.conv_channels",description:`<strong>conv_channels</strong> (<code>List[int]</code>, <em>optional</em>, defaults to None) &#x2014;
Channel sizes of intermediate Conv1D layers.`,name:"conv_channels"},{anchor:"transformers.MCTCTConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTForCTC">MCTCTForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.MCTCTConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTForCTC">MCTCTForCTC</a>.`,name:"ctc_zero_infinity"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/configuration_mctct.py#L29"}}),we=new Te({props:{anchor:"transformers.MCTCTConfig.example",$$slots:{default:[nl]},$$scope:{ctx:k}}}),it=new _e({}),lt=new q({props:{name:"class transformers.MCTCTFeatureExtractor",anchor:"transformers.MCTCTFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"padding_value",val:" = 0.0"},{name:"hop_length",val:" = 10"},{name:"win_length",val:" = 25"},{name:"win_function",val:" = 'hamming_window'"},{name:"frame_signal_scale",val:" = 32768.0"},{name:"preemphasis_coeff",val:" = 0.97"},{name:"mel_floor",val:" = 1.0"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"return_attention_mask",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MCTCTFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features. This is the number of mel_frequency`,name:"feature_size"},{anchor:"transformers.MCTCTFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.MCTCTFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"},{anchor:"transformers.MCTCTFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 10) &#x2014;
Number of audio samples between windows. Otherwise referred to as &#x201C;shift&#x201D; in many papers.`,name:"hop_length"},{anchor:"transformers.MCTCTFeatureExtractor.win_length",description:`<strong>win_length</strong> (<code>int</code>, defaults to 25) &#x2014;
Number of ms per window`,name:"win_length"},{anchor:"transformers.MCTCTFeatureExtractor.win_function",description:`<strong>win_function</strong> (<code>str</code>, defaults to <code>&quot;hamming_window&quot;</code>) &#x2014;
Name for the window function used for windowing, must be accessible via <code>torch.{win_function}</code>`,name:"win_function"},{anchor:"transformers.MCTCTFeatureExtractor.frame_signal_scale",description:`<strong>frame_signal_scale</strong> (<code>float</code>, defaults to 32768.0) &#x2014;
Constant multiplied in creating the frames before applying DFT.`,name:"frame_signal_scale"},{anchor:"transformers.MCTCTFeatureExtractor.preemphasis_coeff",description:`<strong>preemphasis_coeff</strong> (<code>float</code>, defaults to 0.97) &#x2014;
Constant multiplied in applying Pre-emphasis before DFT.`,name:"preemphasis_coeff"},{anchor:"transformers.MCTCTFeatureExtractor.mel_floor",description:`<strong>mel_floor</strong> (<code>float</code> defaults to 1.0) &#x2014;
Minimum value of mel frequency banks.`,name:"mel_floor"},{anchor:"transformers.MCTCTFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.MCTCTFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/feature_extraction_mctct.py#L34"}}),dt=new q({props:{name:"__call__",anchor:"transformers.MCTCTFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MCTCTFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>torch.Tensor</code>, <code>np.ndarray</code>, <code>List[float]</code>, <code>List[torch.Tensor]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a tensor, a numpy array, a list
of float values, a list of tensors, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17671/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17671/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.MCTCTFeatureExtractor.__call__.padding_value",description:"<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;",name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/feature_extraction_mctct.py#L232"}}),pt=new _e({}),mt=new q({props:{name:"class transformers.MCTCTProcessor",anchor:"transformers.MCTCTProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.MCTCTProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>MCTCTFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTFeatureExtractor">MCTCTFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.MCTCTProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>AutoTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17671/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/processing_mctct.py#L23"}}),ft=new q({props:{name:"__call__",anchor:"transformers.MCTCTProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/processing_mctct.py#L43"}}),gt=new q({props:{name:"from_pretrained",anchor:"transformers.MCTCTProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MCTCTProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_17671/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/pr_17671/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/processing_utils.py#L156"}}),Fe=new wo({props:{$$slots:{default:[il]},$$scope:{ctx:k}}}),_t=new q({props:{name:"save_pretrained",anchor:"transformers.MCTCTProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MCTCTProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.MCTCTProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/processing_utils.py#L94"}}),Ee=new wo({props:{$$slots:{default:[ll]},$$scope:{ctx:k}}}),Ct=new q({props:{name:"batch_decode",anchor:"transformers.MCTCTProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/processing_mctct.py#L52"}}),bt=new q({props:{name:"decode",anchor:"transformers.MCTCTProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/processing_mctct.py#L68"}}),wt=new q({props:{name:"as_target_processor",anchor:"transformers.MCTCTProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/processing_mctct.py#L75"}}),Mt=new _e({}),yt=new q({props:{name:"class transformers.MCTCTModel",anchor:"transformers.MCTCTModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MCTCTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig">MCTCTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17671/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L675"}}),Ft=new q({props:{name:"forward",anchor:"transformers.MCTCTModel.forward",parameters:[{name:"input_features",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MCTCTModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17671/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. See <a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_features"},{anchor:"transformers.MCTCTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MCTCTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MCTCTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MCTCTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MCTCTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17671/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L685",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig"
>MCTCTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new wo({props:{$$slots:{default:[cl]},$$scope:{ctx:k}}}),Se=new Te({props:{anchor:"transformers.MCTCTModel.forward.example",$$slots:{default:[dl]},$$scope:{ctx:k}}}),Ie=new Te({props:{anchor:"transformers.MCTCTModel.forward.example-2",$$slots:{default:[pl]},$$scope:{ctx:k}}}),Et=new _e({}),jt=new q({props:{name:"class transformers.MCTCTForCTC",anchor:"transformers.MCTCTForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MCTCTForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig">MCTCTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17671/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L736"}}),Pt=new q({props:{name:"forward",anchor:"transformers.MCTCTForCTC.forward",parameters:[{name:"input_features",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.MCTCTForCTC.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17671/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. See <a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_features"},{anchor:"transformers.MCTCTForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MCTCTForCTC.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MCTCTForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MCTCTForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MCTCTForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17671/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MCTCTForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L756",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig"
>MCTCTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new wo({props:{$$slots:{default:[ml]},$$scope:{ctx:k}}}),Ne=new Te({props:{anchor:"transformers.MCTCTForCTC.forward.example",$$slots:{default:[hl]},$$scope:{ctx:k}}}),Oe=new Te({props:{anchor:"transformers.MCTCTForCTC.forward.example-2",$$slots:{default:[fl]},$$scope:{ctx:k}}}),zt=new _e({}),At=new q({props:{name:"class transformers.MCTCTForAudioFrameClassification",anchor:"transformers.MCTCTForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MCTCTForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig">MCTCTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17671/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L846"}}),Dt=new q({props:{name:"forward",anchor:"transformers.MCTCTForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.MCTCTForAudioFrameClassification.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17671/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. See <a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_features"},{anchor:"transformers.MCTCTForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MCTCTForAudioFrameClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MCTCTForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MCTCTForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MCTCTForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17671/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MCTCTForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig"
>MCTCTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new wo({props:{$$slots:{default:[ul]},$$scope:{ctx:k}}}),Be=new Te({props:{anchor:"transformers.MCTCTForAudioFrameClassification.forward.example",$$slots:{default:[gl]},$$scope:{ctx:k}}}),Ue=new Te({props:{anchor:"transformers.MCTCTForAudioFrameClassification.forward.example-2",$$slots:{default:[_l]},$$scope:{ctx:k}}}),Lt=new _e({}),Nt=new q({props:{name:"class transformers.MCTCTForSequenceClassification",anchor:"transformers.MCTCTForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MCTCTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig">MCTCTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17671/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L947"}}),Wt=new q({props:{name:"forward",anchor:"transformers.MCTCTForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.MCTCTForSequenceClassification.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17671/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. See <a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_features"},{anchor:"transformers.MCTCTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MCTCTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MCTCTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MCTCTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MCTCTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17671/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MCTCTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17671/src/transformers/models/mctct/modeling_mctct.py#L985",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTConfig"
>MCTCTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17671/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new wo({props:{$$slots:{default:[Tl]},$$scope:{ctx:k}}}),Ge=new Te({props:{anchor:"transformers.MCTCTForSequenceClassification.forward.example",$$slots:{default:[Cl]},$$scope:{ctx:k}}}),Je=new Te({props:{anchor:"transformers.MCTCTForSequenceClassification.forward.example-2",$$slots:{default:[vl]},$$scope:{ctx:k}}}),{c(){n=r("meta"),_=m(),d=r("h1"),f=r("a"),C=r("span"),v(c.$$.fragment),u=m(),x=r("span"),P=i("M-CTC-T"),E=m(),z=r("h2"),A=r("a"),Mo=r("span"),v(et.$$.fragment),Qr=m(),yo=r("span"),Xr=i("Overview"),hr=m(),be=r("p"),Yr=i("The M-CTC-T model was proposed in "),tt=r("a"),Zr=i("Pseudo-Labeling For Massively Multilingual Speech Recognition"),ea=i(" by Loren Lugosch, Tatiana Likhomanenko, Gabriel Synnaeve, and Ronan Collobert. The model is a 1B-param transformer encoder, with a CTC head over 8065 character labels and a language identification head over 60 language ID labels. It is trained on Common Voice (version 6.1, December 2020 release) and VoxPopuli. After training on Common Voice and VoxPopuli, the model is trained on Common Voice only. The labels are unnormalized character-level transcripts (punctuation and capitalization are not removed). The model takes as input Mel filterbank features from a 16Khz audio signal."),fr=m(),Rt=r("p"),ta=i("The abstract from the paper is the following:"),ur=m(),Gt=r("p"),ko=r("em"),oa=i(`Semi-supervised learning through pseudo-labeling has become a staple of state-of-the-art monolingual
speech recognition systems. In this work, we extend pseudo-labeling to massively multilingual speech
recognition with 60 languages. We propose a simple pseudo-labeling recipe that works well even
with low-resource languages: train a supervised multilingual model, fine-tune it with semi-supervised
learning on a target language, generate pseudo-labels for that language, and train a final model using
pseudo-labels for all languages, either from scratch or by fine-tuning. Experiments on the labeled
Common Voice and unlabeled VoxPopuli datasets show that our recipe can yield a model with better
performance for many languages that also transfers well to LibriSpeech.`),gr=m(),J=r("p"),ra=i("This model was contributed by "),ot=r("a"),aa=i("cwkeam"),sa=i(". The original code can be found "),rt=r("a"),na=i("here"),ia=i("."),_r=m(),te=r("h2"),$e=r("a"),xo=r("span"),v(at.$$.fragment),la=m(),Fo=r("span"),ca=i("MCTCTConfig"),Tr=m(),O=r("div"),v(st.$$.fragment),da=m(),oe=r("p"),pa=i("This is the configuration class to store the configuration of a "),Jt=r("a"),ma=i("MCTCTModel"),ha=i(`. It is used to instantiate an
M-CTC-T model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M-CTC-T
`),nt=r("a"),fa=i("speechbrain/m-ctc-t-large"),ua=i(" architecture."),ga=m(),re=r("p"),_a=i("Configuration objects inherit from "),Kt=r("a"),Ta=i("PretrainedConfig"),Ca=i(` and can be used to control the model outputs. Read the
documentation from `),Qt=r("a"),va=i("PretrainedConfig"),ba=i(" for more information."),$a=m(),v(we.$$.fragment),Cr=m(),ae=r("h2"),Me=r("a"),Eo=r("span"),v(it.$$.fragment),wa=m(),jo=r("span"),Ma=i("MCTCTFeatureExtractor"),vr=m(),V=r("div"),v(lt.$$.fragment),ya=m(),qo=r("p"),ka=i("Constructs a M-CTC-T feature extractor."),xa=m(),se=r("p"),Fa=i("This feature extractor inherits from "),Xt=r("a"),Ea=i("SequenceFeatureExtractor"),ja=i(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods. This
code has been adapted from Flashlight\u2019s C++ code. For more information about the implementation, one can refer to
this `),ct=r("a"),qa=i("notebook"),Pa=i(`
that takes the user step-by-step in the implementation.`),za=m(),ye=r("div"),v(dt.$$.fragment),Aa=m(),Po=r("p"),Sa=i(`Main method to featurize and prepare for the model one or several sequence(s). sequences. It returns the
log-mel spectrogram of the input audio, as implemented in the original Flashlight MFSC feature extraction code.`),br=m(),ne=r("h2"),ke=r("a"),zo=r("span"),v(pt.$$.fragment),Ia=m(),Ao=r("span"),Da=i("MCTCTProcessor"),$r=m(),F=r("div"),v(mt.$$.fragment),La=m(),So=r("p"),Na=i("Constructs a MCTCT processor which wraps a MCTCT feature extractor and a MCTCT tokenizer into a single processor."),Oa=m(),S=r("p"),Yt=r("a"),Va=i("MCTCTProcessor"),Wa=i(" offers all the functionalities of "),Zt=r("a"),Ba=i("MCTCTFeatureExtractor"),Ua=i(" and "),eo=r("a"),Ha=i("AutoTokenizer"),Ra=i(`. See the
`),ht=r("a"),Io=r("strong"),Ga=i("call"),Ja=i("()"),Ka=i(" and "),to=r("a"),Qa=i("decode()"),Xa=i(" for more information."),Ya=m(),xe=r("div"),v(ft.$$.fragment),Za=m(),U=r("p"),es=i(`When used in normal mode, this method forwards all its arguments to MCTCTFeatureExtractor\u2019s
`),ut=r("a"),Do=r("strong"),ts=i("call"),os=i("()"),rs=i(` and returns its output. If used in the context
`),oo=r("a"),as=i("as_target_processor()"),ss=i(` this method forwards all its arguments to AutoTokenizer\u2019s
`),Lo=r("code"),ns=i("__call__()"),is=i(". Please refer to the doctsring of the above two methods for more information."),ls=m(),K=r("div"),v(gt.$$.fragment),cs=m(),No=r("p"),ds=i("Instantiate a processor associated with a pretrained model."),ps=m(),v(Fe.$$.fragment),ms=m(),Q=r("div"),v(_t.$$.fragment),hs=m(),Tt=r("p"),fs=i(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),ro=r("a"),us=i("from_pretrained()"),gs=i(" method."),_s=m(),v(Ee.$$.fragment),Ts=m(),je=r("div"),v(Ct.$$.fragment),Cs=m(),vt=r("p"),vs=i("This method forwards all its arguments to AutoTokenizer\u2019s "),ao=r("a"),bs=i("batch_decode()"),$s=i(`. Please refer
to the docstring of this method for more information.`),ws=m(),qe=r("div"),v(bt.$$.fragment),Ms=m(),$t=r("p"),ys=i("This method forwards all its arguments to AutoTokenizer\u2019s "),so=r("a"),ks=i("decode()"),xs=i(`. Please refer to the
docstring of this method for more information.`),Fs=m(),Pe=r("div"),v(wt.$$.fragment),Es=m(),Oo=r("p"),js=i("Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning MCTCT."),wr=m(),ie=r("h2"),ze=r("a"),Vo=r("span"),v(Mt.$$.fragment),qs=m(),Wo=r("span"),Ps=i("MCTCTModel"),Mr=m(),H=r("div"),v(yt.$$.fragment),zs=m(),kt=r("p"),As=i(`The bare M-CTC-T Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xt=r("a"),Ss=i("torch.nn.Module"),Is=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds=m(),I=r("div"),v(Ft.$$.fragment),Ls=m(),le=r("p"),Ns=i("The "),no=r("a"),Os=i("MCTCTModel"),Vs=i(" forward method, overrides the "),Bo=r("code"),Ws=i("__call__"),Bs=i(" special method."),Us=m(),v(Ae.$$.fragment),Hs=m(),v(Se.$$.fragment),Rs=m(),v(Ie.$$.fragment),yr=m(),ce=r("h2"),De=r("a"),Uo=r("span"),v(Et.$$.fragment),Gs=m(),Ho=r("span"),Js=i("MCTCTForCTC"),kr=m(),R=r("div"),v(jt.$$.fragment),Ks=m(),de=r("p"),Qs=i("MCTCT Model with a "),Ro=r("code"),Xs=i("language modeling"),Ys=i(` head on top for Connectionist Temporal Classification (CTC).
This model is a PyTorch `),qt=r("a"),Zs=i("torch.nn.Module"),en=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tn=m(),D=r("div"),v(Pt.$$.fragment),on=m(),pe=r("p"),rn=i("The "),io=r("a"),an=i("MCTCTForCTC"),sn=i(" forward method, overrides the "),Go=r("code"),nn=i("__call__"),ln=i(" special method."),cn=m(),v(Le.$$.fragment),dn=m(),v(Ne.$$.fragment),pn=m(),v(Oe.$$.fragment),xr=m(),me=r("h2"),Ve=r("a"),Jo=r("span"),v(zt.$$.fragment),mn=m(),Ko=r("span"),hn=i("MCTCTForAudioFrameClassification"),Fr=m(),W=r("div"),v(At.$$.fragment),fn=m(),Qo=r("p"),un=i(`MCTCT Model with a frame classification head on top (a linear layer over the pooled output) for tasks like Language
Identification (LID). It outputs the language prediction for each audio frame.`),gn=m(),St=r("p"),_n=i("This model is a PyTorch "),It=r("a"),Tn=i("torch.nn.Module"),Cn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vn=m(),L=r("div"),v(Dt.$$.fragment),bn=m(),he=r("p"),$n=i("The "),lo=r("a"),wn=i("MCTCTForAudioFrameClassification"),Mn=i(" forward method, overrides the "),Xo=r("code"),yn=i("__call__"),kn=i(" special method."),xn=m(),v(We.$$.fragment),Fn=m(),v(Be.$$.fragment),En=m(),v(Ue.$$.fragment),Er=m(),fe=r("h2"),He=r("a"),Yo=r("span"),v(Lt.$$.fragment),jn=m(),Zo=r("span"),qn=i("MCTCTForSequenceClassification"),jr=m(),B=r("div"),v(Nt.$$.fragment),Pn=m(),er=r("p"),zn=i(`MCTCT Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
Language Identification (LID). It creates a single prediction for the full sequence.`),An=m(),Ot=r("p"),Sn=i("This model is a PyTorch "),Vt=r("a"),In=i("torch.nn.Module"),Dn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ln=m(),N=r("div"),v(Wt.$$.fragment),Nn=m(),ue=r("p"),On=i("The "),co=r("a"),Vn=i("MCTCTForSequenceClassification"),Wn=i(" forward method, overrides the "),tr=r("code"),Bn=i("__call__"),Un=i(" special method."),Hn=m(),v(Re.$$.fragment),Rn=m(),v(Ge.$$.fragment),Gn=m(),v(Je.$$.fragment),this.h()},l(t){const g=al('[data-svelte="svelte-1phssyn"]',document.head);n=a(g,"META",{name:!0,content:!0}),g.forEach(o),_=h(t),d=a(t,"H1",{class:!0});var Bt=s(d);f=a(Bt,"A",{id:!0,class:!0,href:!0});var or=s(f);C=a(or,"SPAN",{});var rr=s(C);b(c.$$.fragment,rr),rr.forEach(o),or.forEach(o),u=h(Bt),x=a(Bt,"SPAN",{});var ar=s(x);P=l(ar,"M-CTC-T"),ar.forEach(o),Bt.forEach(o),E=h(t),z=a(t,"H2",{class:!0});var Ut=s(z);A=a(Ut,"A",{id:!0,class:!0,href:!0});var sr=s(A);Mo=a(sr,"SPAN",{});var nr=s(Mo);b(et.$$.fragment,nr),nr.forEach(o),sr.forEach(o),Qr=h(Ut),yo=a(Ut,"SPAN",{});var ir=s(yo);Xr=l(ir,"Overview"),ir.forEach(o),Ut.forEach(o),hr=h(t),be=a(t,"P",{});var Ht=s(be);Yr=l(Ht,"The M-CTC-T model was proposed in "),tt=a(Ht,"A",{href:!0,rel:!0});var lr=s(tt);Zr=l(lr,"Pseudo-Labeling For Massively Multilingual Speech Recognition"),lr.forEach(o),ea=l(Ht," by Loren Lugosch, Tatiana Likhomanenko, Gabriel Synnaeve, and Ronan Collobert. The model is a 1B-param transformer encoder, with a CTC head over 8065 character labels and a language identification head over 60 language ID labels. It is trained on Common Voice (version 6.1, December 2020 release) and VoxPopuli. After training on Common Voice and VoxPopuli, the model is trained on Common Voice only. The labels are unnormalized character-level transcripts (punctuation and capitalization are not removed). The model takes as input Mel filterbank features from a 16Khz audio signal."),Ht.forEach(o),fr=h(t),Rt=a(t,"P",{});var cr=s(Rt);ta=l(cr,"The abstract from the paper is the following:"),cr.forEach(o),ur=h(t),Gt=a(t,"P",{});var dr=s(Gt);ko=a(dr,"EM",{});var pr=s(ko);oa=l(pr,`Semi-supervised learning through pseudo-labeling has become a staple of state-of-the-art monolingual
speech recognition systems. In this work, we extend pseudo-labeling to massively multilingual speech
recognition with 60 languages. We propose a simple pseudo-labeling recipe that works well even
with low-resource languages: train a supervised multilingual model, fine-tune it with semi-supervised
learning on a target language, generate pseudo-labels for that language, and train a final model using
pseudo-labels for all languages, either from scratch or by fine-tuning. Experiments on the labeled
Common Voice and unlabeled VoxPopuli datasets show that our recipe can yield a model with better
performance for many languages that also transfers well to LibriSpeech.`),pr.forEach(o),dr.forEach(o),gr=h(t),J=a(t,"P",{});var ge=s(J);ra=l(ge,"This model was contributed by "),ot=a(ge,"A",{href:!0,rel:!0});var mr=s(ot);aa=l(mr,"cwkeam"),mr.forEach(o),sa=l(ge,". The original code can be found "),rt=a(ge,"A",{href:!0,rel:!0});var Qn=s(rt);na=l(Qn,"here"),Qn.forEach(o),ia=l(ge,"."),ge.forEach(o),_r=h(t),te=a(t,"H2",{class:!0});var Pr=s(te);$e=a(Pr,"A",{id:!0,class:!0,href:!0});var Xn=s($e);xo=a(Xn,"SPAN",{});var Yn=s(xo);b(at.$$.fragment,Yn),Yn.forEach(o),Xn.forEach(o),la=h(Pr),Fo=a(Pr,"SPAN",{});var Zn=s(Fo);ca=l(Zn,"MCTCTConfig"),Zn.forEach(o),Pr.forEach(o),Tr=h(t),O=a(t,"DIV",{class:!0});var Ke=s(O);b(st.$$.fragment,Ke),da=h(Ke),oe=a(Ke,"P",{});var po=s(oe);pa=l(po,"This is the configuration class to store the configuration of a "),Jt=a(po,"A",{href:!0});var ei=s(Jt);ma=l(ei,"MCTCTModel"),ei.forEach(o),ha=l(po,`. It is used to instantiate an
M-CTC-T model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M-CTC-T
`),nt=a(po,"A",{href:!0,rel:!0});var ti=s(nt);fa=l(ti,"speechbrain/m-ctc-t-large"),ti.forEach(o),ua=l(po," architecture."),po.forEach(o),ga=h(Ke),re=a(Ke,"P",{});var mo=s(re);_a=l(mo,"Configuration objects inherit from "),Kt=a(mo,"A",{href:!0});var oi=s(Kt);Ta=l(oi,"PretrainedConfig"),oi.forEach(o),Ca=l(mo,` and can be used to control the model outputs. Read the
documentation from `),Qt=a(mo,"A",{href:!0});var ri=s(Qt);va=l(ri,"PretrainedConfig"),ri.forEach(o),ba=l(mo," for more information."),mo.forEach(o),$a=h(Ke),b(we.$$.fragment,Ke),Ke.forEach(o),Cr=h(t),ae=a(t,"H2",{class:!0});var zr=s(ae);Me=a(zr,"A",{id:!0,class:!0,href:!0});var ai=s(Me);Eo=a(ai,"SPAN",{});var si=s(Eo);b(it.$$.fragment,si),si.forEach(o),ai.forEach(o),wa=h(zr),jo=a(zr,"SPAN",{});var ni=s(jo);Ma=l(ni,"MCTCTFeatureExtractor"),ni.forEach(o),zr.forEach(o),vr=h(t),V=a(t,"DIV",{class:!0});var Qe=s(V);b(lt.$$.fragment,Qe),ya=h(Qe),qo=a(Qe,"P",{});var ii=s(qo);ka=l(ii,"Constructs a M-CTC-T feature extractor."),ii.forEach(o),xa=h(Qe),se=a(Qe,"P",{});var ho=s(se);Fa=l(ho,"This feature extractor inherits from "),Xt=a(ho,"A",{href:!0});var li=s(Xt);Ea=l(li,"SequenceFeatureExtractor"),li.forEach(o),ja=l(ho,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods. This
code has been adapted from Flashlight\u2019s C++ code. For more information about the implementation, one can refer to
this `),ct=a(ho,"A",{href:!0,rel:!0});var ci=s(ct);qa=l(ci,"notebook"),ci.forEach(o),Pa=l(ho,`
that takes the user step-by-step in the implementation.`),ho.forEach(o),za=h(Qe),ye=a(Qe,"DIV",{class:!0});var Ar=s(ye);b(dt.$$.fragment,Ar),Aa=h(Ar),Po=a(Ar,"P",{});var di=s(Po);Sa=l(di,`Main method to featurize and prepare for the model one or several sequence(s). sequences. It returns the
log-mel spectrogram of the input audio, as implemented in the original Flashlight MFSC feature extraction code.`),di.forEach(o),Ar.forEach(o),Qe.forEach(o),br=h(t),ne=a(t,"H2",{class:!0});var Sr=s(ne);ke=a(Sr,"A",{id:!0,class:!0,href:!0});var pi=s(ke);zo=a(pi,"SPAN",{});var mi=s(zo);b(pt.$$.fragment,mi),mi.forEach(o),pi.forEach(o),Ia=h(Sr),Ao=a(Sr,"SPAN",{});var hi=s(Ao);Da=l(hi,"MCTCTProcessor"),hi.forEach(o),Sr.forEach(o),$r=h(t),F=a(t,"DIV",{class:!0});var j=s(F);b(mt.$$.fragment,j),La=h(j),So=a(j,"P",{});var fi=s(So);Na=l(fi,"Constructs a MCTCT processor which wraps a MCTCT feature extractor and a MCTCT tokenizer into a single processor."),fi.forEach(o),Oa=h(j),S=a(j,"P",{});var G=s(S);Yt=a(G,"A",{href:!0});var ui=s(Yt);Va=l(ui,"MCTCTProcessor"),ui.forEach(o),Wa=l(G," offers all the functionalities of "),Zt=a(G,"A",{href:!0});var gi=s(Zt);Ba=l(gi,"MCTCTFeatureExtractor"),gi.forEach(o),Ua=l(G," and "),eo=a(G,"A",{href:!0});var _i=s(eo);Ha=l(_i,"AutoTokenizer"),_i.forEach(o),Ra=l(G,`. See the
`),ht=a(G,"A",{href:!0});var Jn=s(ht);Io=a(Jn,"STRONG",{});var Ti=s(Io);Ga=l(Ti,"call"),Ti.forEach(o),Ja=l(Jn,"()"),Jn.forEach(o),Ka=l(G," and "),to=a(G,"A",{href:!0});var Ci=s(to);Qa=l(Ci,"decode()"),Ci.forEach(o),Xa=l(G," for more information."),G.forEach(o),Ya=h(j),xe=a(j,"DIV",{class:!0});var Ir=s(xe);b(ft.$$.fragment,Ir),Za=h(Ir),U=a(Ir,"P",{});var Xe=s(U);es=l(Xe,`When used in normal mode, this method forwards all its arguments to MCTCTFeatureExtractor\u2019s
`),ut=a(Xe,"A",{href:!0});var Kn=s(ut);Do=a(Kn,"STRONG",{});var vi=s(Do);ts=l(vi,"call"),vi.forEach(o),os=l(Kn,"()"),Kn.forEach(o),rs=l(Xe,` and returns its output. If used in the context
`),oo=a(Xe,"A",{href:!0});var bi=s(oo);as=l(bi,"as_target_processor()"),bi.forEach(o),ss=l(Xe,` this method forwards all its arguments to AutoTokenizer\u2019s
`),Lo=a(Xe,"CODE",{});var $i=s(Lo);ns=l($i,"__call__()"),$i.forEach(o),is=l(Xe,". Please refer to the doctsring of the above two methods for more information."),Xe.forEach(o),Ir.forEach(o),ls=h(j),K=a(j,"DIV",{class:!0});var fo=s(K);b(gt.$$.fragment,fo),cs=h(fo),No=a(fo,"P",{});var wi=s(No);ds=l(wi,"Instantiate a processor associated with a pretrained model."),wi.forEach(o),ps=h(fo),b(Fe.$$.fragment,fo),fo.forEach(o),ms=h(j),Q=a(j,"DIV",{class:!0});var uo=s(Q);b(_t.$$.fragment,uo),hs=h(uo),Tt=a(uo,"P",{});var Dr=s(Tt);fs=l(Dr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),ro=a(Dr,"A",{href:!0});var Mi=s(ro);us=l(Mi,"from_pretrained()"),Mi.forEach(o),gs=l(Dr," method."),Dr.forEach(o),_s=h(uo),b(Ee.$$.fragment,uo),uo.forEach(o),Ts=h(j),je=a(j,"DIV",{class:!0});var Lr=s(je);b(Ct.$$.fragment,Lr),Cs=h(Lr),vt=a(Lr,"P",{});var Nr=s(vt);vs=l(Nr,"This method forwards all its arguments to AutoTokenizer\u2019s "),ao=a(Nr,"A",{href:!0});var yi=s(ao);bs=l(yi,"batch_decode()"),yi.forEach(o),$s=l(Nr,`. Please refer
to the docstring of this method for more information.`),Nr.forEach(o),Lr.forEach(o),ws=h(j),qe=a(j,"DIV",{class:!0});var Or=s(qe);b(bt.$$.fragment,Or),Ms=h(Or),$t=a(Or,"P",{});var Vr=s($t);ys=l(Vr,"This method forwards all its arguments to AutoTokenizer\u2019s "),so=a(Vr,"A",{href:!0});var ki=s(so);ks=l(ki,"decode()"),ki.forEach(o),xs=l(Vr,`. Please refer to the
docstring of this method for more information.`),Vr.forEach(o),Or.forEach(o),Fs=h(j),Pe=a(j,"DIV",{class:!0});var Wr=s(Pe);b(wt.$$.fragment,Wr),Es=h(Wr),Oo=a(Wr,"P",{});var xi=s(Oo);js=l(xi,"Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning MCTCT."),xi.forEach(o),Wr.forEach(o),j.forEach(o),wr=h(t),ie=a(t,"H2",{class:!0});var Br=s(ie);ze=a(Br,"A",{id:!0,class:!0,href:!0});var Fi=s(ze);Vo=a(Fi,"SPAN",{});var Ei=s(Vo);b(Mt.$$.fragment,Ei),Ei.forEach(o),Fi.forEach(o),qs=h(Br),Wo=a(Br,"SPAN",{});var ji=s(Wo);Ps=l(ji,"MCTCTModel"),ji.forEach(o),Br.forEach(o),Mr=h(t),H=a(t,"DIV",{class:!0});var go=s(H);b(yt.$$.fragment,go),zs=h(go),kt=a(go,"P",{});var Ur=s(kt);As=l(Ur,`The bare M-CTC-T Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xt=a(Ur,"A",{href:!0,rel:!0});var qi=s(xt);Ss=l(qi,"torch.nn.Module"),qi.forEach(o),Is=l(Ur,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ur.forEach(o),Ds=h(go),I=a(go,"DIV",{class:!0});var X=s(I);b(Ft.$$.fragment,X),Ls=h(X),le=a(X,"P",{});var _o=s(le);Ns=l(_o,"The "),no=a(_o,"A",{href:!0});var Pi=s(no);Os=l(Pi,"MCTCTModel"),Pi.forEach(o),Vs=l(_o," forward method, overrides the "),Bo=a(_o,"CODE",{});var zi=s(Bo);Ws=l(zi,"__call__"),zi.forEach(o),Bs=l(_o," special method."),_o.forEach(o),Us=h(X),b(Ae.$$.fragment,X),Hs=h(X),b(Se.$$.fragment,X),Rs=h(X),b(Ie.$$.fragment,X),X.forEach(o),go.forEach(o),yr=h(t),ce=a(t,"H2",{class:!0});var Hr=s(ce);De=a(Hr,"A",{id:!0,class:!0,href:!0});var Ai=s(De);Uo=a(Ai,"SPAN",{});var Si=s(Uo);b(Et.$$.fragment,Si),Si.forEach(o),Ai.forEach(o),Gs=h(Hr),Ho=a(Hr,"SPAN",{});var Ii=s(Ho);Js=l(Ii,"MCTCTForCTC"),Ii.forEach(o),Hr.forEach(o),kr=h(t),R=a(t,"DIV",{class:!0});var To=s(R);b(jt.$$.fragment,To),Ks=h(To),de=a(To,"P",{});var Co=s(de);Qs=l(Co,"MCTCT Model with a "),Ro=a(Co,"CODE",{});var Di=s(Ro);Xs=l(Di,"language modeling"),Di.forEach(o),Ys=l(Co,` head on top for Connectionist Temporal Classification (CTC).
This model is a PyTorch `),qt=a(Co,"A",{href:!0,rel:!0});var Li=s(qt);Zs=l(Li,"torch.nn.Module"),Li.forEach(o),en=l(Co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Co.forEach(o),tn=h(To),D=a(To,"DIV",{class:!0});var Y=s(D);b(Pt.$$.fragment,Y),on=h(Y),pe=a(Y,"P",{});var vo=s(pe);rn=l(vo,"The "),io=a(vo,"A",{href:!0});var Ni=s(io);an=l(Ni,"MCTCTForCTC"),Ni.forEach(o),sn=l(vo," forward method, overrides the "),Go=a(vo,"CODE",{});var Oi=s(Go);nn=l(Oi,"__call__"),Oi.forEach(o),ln=l(vo," special method."),vo.forEach(o),cn=h(Y),b(Le.$$.fragment,Y),dn=h(Y),b(Ne.$$.fragment,Y),pn=h(Y),b(Oe.$$.fragment,Y),Y.forEach(o),To.forEach(o),xr=h(t),me=a(t,"H2",{class:!0});var Rr=s(me);Ve=a(Rr,"A",{id:!0,class:!0,href:!0});var Vi=s(Ve);Jo=a(Vi,"SPAN",{});var Wi=s(Jo);b(zt.$$.fragment,Wi),Wi.forEach(o),Vi.forEach(o),mn=h(Rr),Ko=a(Rr,"SPAN",{});var Bi=s(Ko);hn=l(Bi,"MCTCTForAudioFrameClassification"),Bi.forEach(o),Rr.forEach(o),Fr=h(t),W=a(t,"DIV",{class:!0});var Ye=s(W);b(At.$$.fragment,Ye),fn=h(Ye),Qo=a(Ye,"P",{});var Ui=s(Qo);un=l(Ui,`MCTCT Model with a frame classification head on top (a linear layer over the pooled output) for tasks like Language
Identification (LID). It outputs the language prediction for each audio frame.`),Ui.forEach(o),gn=h(Ye),St=a(Ye,"P",{});var Gr=s(St);_n=l(Gr,"This model is a PyTorch "),It=a(Gr,"A",{href:!0,rel:!0});var Hi=s(It);Tn=l(Hi,"torch.nn.Module"),Hi.forEach(o),Cn=l(Gr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gr.forEach(o),vn=h(Ye),L=a(Ye,"DIV",{class:!0});var Z=s(L);b(Dt.$$.fragment,Z),bn=h(Z),he=a(Z,"P",{});var bo=s(he);$n=l(bo,"The "),lo=a(bo,"A",{href:!0});var Ri=s(lo);wn=l(Ri,"MCTCTForAudioFrameClassification"),Ri.forEach(o),Mn=l(bo," forward method, overrides the "),Xo=a(bo,"CODE",{});var Gi=s(Xo);yn=l(Gi,"__call__"),Gi.forEach(o),kn=l(bo," special method."),bo.forEach(o),xn=h(Z),b(We.$$.fragment,Z),Fn=h(Z),b(Be.$$.fragment,Z),En=h(Z),b(Ue.$$.fragment,Z),Z.forEach(o),Ye.forEach(o),Er=h(t),fe=a(t,"H2",{class:!0});var Jr=s(fe);He=a(Jr,"A",{id:!0,class:!0,href:!0});var Ji=s(He);Yo=a(Ji,"SPAN",{});var Ki=s(Yo);b(Lt.$$.fragment,Ki),Ki.forEach(o),Ji.forEach(o),jn=h(Jr),Zo=a(Jr,"SPAN",{});var Qi=s(Zo);qn=l(Qi,"MCTCTForSequenceClassification"),Qi.forEach(o),Jr.forEach(o),jr=h(t),B=a(t,"DIV",{class:!0});var Ze=s(B);b(Nt.$$.fragment,Ze),Pn=h(Ze),er=a(Ze,"P",{});var Xi=s(er);zn=l(Xi,`MCTCT Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
Language Identification (LID). It creates a single prediction for the full sequence.`),Xi.forEach(o),An=h(Ze),Ot=a(Ze,"P",{});var Kr=s(Ot);Sn=l(Kr,"This model is a PyTorch "),Vt=a(Kr,"A",{href:!0,rel:!0});var Yi=s(Vt);In=l(Yi,"torch.nn.Module"),Yi.forEach(o),Dn=l(Kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kr.forEach(o),Ln=h(Ze),N=a(Ze,"DIV",{class:!0});var ee=s(N);b(Wt.$$.fragment,ee),Nn=h(ee),ue=a(ee,"P",{});var $o=s(ue);On=l($o,"The "),co=a($o,"A",{href:!0});var Zi=s(co);Vn=l(Zi,"MCTCTForSequenceClassification"),Zi.forEach(o),Wn=l($o," forward method, overrides the "),tr=a($o,"CODE",{});var el=s(tr);Bn=l(el,"__call__"),el.forEach(o),Un=l($o," special method."),$o.forEach(o),Hn=h(ee),b(Re.$$.fragment,ee),Rn=h(ee),b(Ge.$$.fragment,ee),Gn=h(ee),b(Je.$$.fragment,ee),ee.forEach(o),Ze.forEach(o),this.h()},h(){p(n,"name","hf:doc:metadata"),p(n,"content",JSON.stringify($l)),p(f,"id","mctct"),p(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(f,"href","#mctct"),p(d,"class","relative group"),p(A,"id","overview"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#overview"),p(z,"class","relative group"),p(tt,"href","https://arxiv.org/abs/2111.00161"),p(tt,"rel","nofollow"),p(ot,"href","https://huggingface.co/cwkeam"),p(ot,"rel","nofollow"),p(rt,"href","https://github.com/flashlight/wav2letter/tree/main/recipes/mling_pl"),p(rt,"rel","nofollow"),p($e,"id","transformers.MCTCTConfig"),p($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($e,"href","#transformers.MCTCTConfig"),p(te,"class","relative group"),p(Jt,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTModel"),p(nt,"href","https://huggingface.co/speechbrain/m-ctc-t-large"),p(nt,"rel","nofollow"),p(Kt,"href","/docs/transformers/pr_17671/en/main_classes/configuration#transformers.PretrainedConfig"),p(Qt,"href","/docs/transformers/pr_17671/en/main_classes/configuration#transformers.PretrainedConfig"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Me,"id","transformers.MCTCTFeatureExtractor"),p(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Me,"href","#transformers.MCTCTFeatureExtractor"),p(ae,"class","relative group"),p(Xt,"href","/docs/transformers/pr_17671/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),p(ct,"href","https://colab.research.google.com/drive/1GLtINkkhzms-IsdcGy_-tVCkv0qNF-Gt#scrollTo=pMCRGMmUC_an"),p(ct,"rel","nofollow"),p(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ke,"id","transformers.MCTCTProcessor"),p(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ke,"href","#transformers.MCTCTProcessor"),p(ne,"class","relative group"),p(Yt,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTProcessor"),p(Zt,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTFeatureExtractor"),p(eo,"href","/docs/transformers/pr_17671/en/model_doc/auto#transformers.AutoTokenizer"),p(ht,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTProcessor.__call__"),p(to,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTProcessor.decode"),p(ut,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTFeatureExtractor.__call__"),p(oo,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTProcessor.as_target_processor"),p(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ro,"href","/docs/transformers/pr_17671/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ao,"href","/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),p(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(so,"href","/docs/transformers/pr_17671/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),p(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ze,"id","transformers.MCTCTModel"),p(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ze,"href","#transformers.MCTCTModel"),p(ie,"class","relative group"),p(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(xt,"rel","nofollow"),p(no,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTModel"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(De,"id","transformers.MCTCTForCTC"),p(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(De,"href","#transformers.MCTCTForCTC"),p(ce,"class","relative group"),p(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(qt,"rel","nofollow"),p(io,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTForCTC"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ve,"id","transformers.MCTCTForAudioFrameClassification"),p(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ve,"href","#transformers.MCTCTForAudioFrameClassification"),p(me,"class","relative group"),p(It,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(It,"rel","nofollow"),p(lo,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTForAudioFrameClassification"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(He,"id","transformers.MCTCTForSequenceClassification"),p(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(He,"href","#transformers.MCTCTForSequenceClassification"),p(fe,"class","relative group"),p(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Vt,"rel","nofollow"),p(co,"href","/docs/transformers/pr_17671/en/model_doc/mctct#transformers.MCTCTForSequenceClassification"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,n),T(t,_,g),T(t,d,g),e(d,f),e(f,C),$(c,C,null),e(d,u),e(d,x),e(x,P),T(t,E,g),T(t,z,g),e(z,A),e(A,Mo),$(et,Mo,null),e(z,Qr),e(z,yo),e(yo,Xr),T(t,hr,g),T(t,be,g),e(be,Yr),e(be,tt),e(tt,Zr),e(be,ea),T(t,fr,g),T(t,Rt,g),e(Rt,ta),T(t,ur,g),T(t,Gt,g),e(Gt,ko),e(ko,oa),T(t,gr,g),T(t,J,g),e(J,ra),e(J,ot),e(ot,aa),e(J,sa),e(J,rt),e(rt,na),e(J,ia),T(t,_r,g),T(t,te,g),e(te,$e),e($e,xo),$(at,xo,null),e(te,la),e(te,Fo),e(Fo,ca),T(t,Tr,g),T(t,O,g),$(st,O,null),e(O,da),e(O,oe),e(oe,pa),e(oe,Jt),e(Jt,ma),e(oe,ha),e(oe,nt),e(nt,fa),e(oe,ua),e(O,ga),e(O,re),e(re,_a),e(re,Kt),e(Kt,Ta),e(re,Ca),e(re,Qt),e(Qt,va),e(re,ba),e(O,$a),$(we,O,null),T(t,Cr,g),T(t,ae,g),e(ae,Me),e(Me,Eo),$(it,Eo,null),e(ae,wa),e(ae,jo),e(jo,Ma),T(t,vr,g),T(t,V,g),$(lt,V,null),e(V,ya),e(V,qo),e(qo,ka),e(V,xa),e(V,se),e(se,Fa),e(se,Xt),e(Xt,Ea),e(se,ja),e(se,ct),e(ct,qa),e(se,Pa),e(V,za),e(V,ye),$(dt,ye,null),e(ye,Aa),e(ye,Po),e(Po,Sa),T(t,br,g),T(t,ne,g),e(ne,ke),e(ke,zo),$(pt,zo,null),e(ne,Ia),e(ne,Ao),e(Ao,Da),T(t,$r,g),T(t,F,g),$(mt,F,null),e(F,La),e(F,So),e(So,Na),e(F,Oa),e(F,S),e(S,Yt),e(Yt,Va),e(S,Wa),e(S,Zt),e(Zt,Ba),e(S,Ua),e(S,eo),e(eo,Ha),e(S,Ra),e(S,ht),e(ht,Io),e(Io,Ga),e(ht,Ja),e(S,Ka),e(S,to),e(to,Qa),e(S,Xa),e(F,Ya),e(F,xe),$(ft,xe,null),e(xe,Za),e(xe,U),e(U,es),e(U,ut),e(ut,Do),e(Do,ts),e(ut,os),e(U,rs),e(U,oo),e(oo,as),e(U,ss),e(U,Lo),e(Lo,ns),e(U,is),e(F,ls),e(F,K),$(gt,K,null),e(K,cs),e(K,No),e(No,ds),e(K,ps),$(Fe,K,null),e(F,ms),e(F,Q),$(_t,Q,null),e(Q,hs),e(Q,Tt),e(Tt,fs),e(Tt,ro),e(ro,us),e(Tt,gs),e(Q,_s),$(Ee,Q,null),e(F,Ts),e(F,je),$(Ct,je,null),e(je,Cs),e(je,vt),e(vt,vs),e(vt,ao),e(ao,bs),e(vt,$s),e(F,ws),e(F,qe),$(bt,qe,null),e(qe,Ms),e(qe,$t),e($t,ys),e($t,so),e(so,ks),e($t,xs),e(F,Fs),e(F,Pe),$(wt,Pe,null),e(Pe,Es),e(Pe,Oo),e(Oo,js),T(t,wr,g),T(t,ie,g),e(ie,ze),e(ze,Vo),$(Mt,Vo,null),e(ie,qs),e(ie,Wo),e(Wo,Ps),T(t,Mr,g),T(t,H,g),$(yt,H,null),e(H,zs),e(H,kt),e(kt,As),e(kt,xt),e(xt,Ss),e(kt,Is),e(H,Ds),e(H,I),$(Ft,I,null),e(I,Ls),e(I,le),e(le,Ns),e(le,no),e(no,Os),e(le,Vs),e(le,Bo),e(Bo,Ws),e(le,Bs),e(I,Us),$(Ae,I,null),e(I,Hs),$(Se,I,null),e(I,Rs),$(Ie,I,null),T(t,yr,g),T(t,ce,g),e(ce,De),e(De,Uo),$(Et,Uo,null),e(ce,Gs),e(ce,Ho),e(Ho,Js),T(t,kr,g),T(t,R,g),$(jt,R,null),e(R,Ks),e(R,de),e(de,Qs),e(de,Ro),e(Ro,Xs),e(de,Ys),e(de,qt),e(qt,Zs),e(de,en),e(R,tn),e(R,D),$(Pt,D,null),e(D,on),e(D,pe),e(pe,rn),e(pe,io),e(io,an),e(pe,sn),e(pe,Go),e(Go,nn),e(pe,ln),e(D,cn),$(Le,D,null),e(D,dn),$(Ne,D,null),e(D,pn),$(Oe,D,null),T(t,xr,g),T(t,me,g),e(me,Ve),e(Ve,Jo),$(zt,Jo,null),e(me,mn),e(me,Ko),e(Ko,hn),T(t,Fr,g),T(t,W,g),$(At,W,null),e(W,fn),e(W,Qo),e(Qo,un),e(W,gn),e(W,St),e(St,_n),e(St,It),e(It,Tn),e(St,Cn),e(W,vn),e(W,L),$(Dt,L,null),e(L,bn),e(L,he),e(he,$n),e(he,lo),e(lo,wn),e(he,Mn),e(he,Xo),e(Xo,yn),e(he,kn),e(L,xn),$(We,L,null),e(L,Fn),$(Be,L,null),e(L,En),$(Ue,L,null),T(t,Er,g),T(t,fe,g),e(fe,He),e(He,Yo),$(Lt,Yo,null),e(fe,jn),e(fe,Zo),e(Zo,qn),T(t,jr,g),T(t,B,g),$(Nt,B,null),e(B,Pn),e(B,er),e(er,zn),e(B,An),e(B,Ot),e(Ot,Sn),e(Ot,Vt),e(Vt,In),e(Ot,Dn),e(B,Ln),e(B,N),$(Wt,N,null),e(N,Nn),e(N,ue),e(ue,On),e(ue,co),e(co,Vn),e(ue,Wn),e(ue,tr),e(tr,Bn),e(ue,Un),e(N,Hn),$(Re,N,null),e(N,Rn),$(Ge,N,null),e(N,Gn),$(Je,N,null),qr=!0},p(t,[g]){const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),we.$set(Bt);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),Fe.$set(or);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:t}),Ee.$set(rr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:t}),Ae.$set(ar);const Ut={};g&2&&(Ut.$$scope={dirty:g,ctx:t}),Se.$set(Ut);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:t}),Ie.$set(sr);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:t}),Le.$set(nr);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),Ne.$set(ir);const Ht={};g&2&&(Ht.$$scope={dirty:g,ctx:t}),Oe.$set(Ht);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:t}),We.$set(lr);const cr={};g&2&&(cr.$$scope={dirty:g,ctx:t}),Be.$set(cr);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:t}),Ue.$set(dr);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:t}),Re.$set(pr);const ge={};g&2&&(ge.$$scope={dirty:g,ctx:t}),Ge.$set(ge);const mr={};g&2&&(mr.$$scope={dirty:g,ctx:t}),Je.$set(mr)},i(t){qr||(w(c.$$.fragment,t),w(et.$$.fragment,t),w(at.$$.fragment,t),w(st.$$.fragment,t),w(we.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(dt.$$.fragment,t),w(pt.$$.fragment,t),w(mt.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(Fe.$$.fragment,t),w(_t.$$.fragment,t),w(Ee.$$.fragment,t),w(Ct.$$.fragment,t),w(bt.$$.fragment,t),w(wt.$$.fragment,t),w(Mt.$$.fragment,t),w(yt.$$.fragment,t),w(Ft.$$.fragment,t),w(Ae.$$.fragment,t),w(Se.$$.fragment,t),w(Ie.$$.fragment,t),w(Et.$$.fragment,t),w(jt.$$.fragment,t),w(Pt.$$.fragment,t),w(Le.$$.fragment,t),w(Ne.$$.fragment,t),w(Oe.$$.fragment,t),w(zt.$$.fragment,t),w(At.$$.fragment,t),w(Dt.$$.fragment,t),w(We.$$.fragment,t),w(Be.$$.fragment,t),w(Ue.$$.fragment,t),w(Lt.$$.fragment,t),w(Nt.$$.fragment,t),w(Wt.$$.fragment,t),w(Re.$$.fragment,t),w(Ge.$$.fragment,t),w(Je.$$.fragment,t),qr=!0)},o(t){M(c.$$.fragment,t),M(et.$$.fragment,t),M(at.$$.fragment,t),M(st.$$.fragment,t),M(we.$$.fragment,t),M(it.$$.fragment,t),M(lt.$$.fragment,t),M(dt.$$.fragment,t),M(pt.$$.fragment,t),M(mt.$$.fragment,t),M(ft.$$.fragment,t),M(gt.$$.fragment,t),M(Fe.$$.fragment,t),M(_t.$$.fragment,t),M(Ee.$$.fragment,t),M(Ct.$$.fragment,t),M(bt.$$.fragment,t),M(wt.$$.fragment,t),M(Mt.$$.fragment,t),M(yt.$$.fragment,t),M(Ft.$$.fragment,t),M(Ae.$$.fragment,t),M(Se.$$.fragment,t),M(Ie.$$.fragment,t),M(Et.$$.fragment,t),M(jt.$$.fragment,t),M(Pt.$$.fragment,t),M(Le.$$.fragment,t),M(Ne.$$.fragment,t),M(Oe.$$.fragment,t),M(zt.$$.fragment,t),M(At.$$.fragment,t),M(Dt.$$.fragment,t),M(We.$$.fragment,t),M(Be.$$.fragment,t),M(Ue.$$.fragment,t),M(Lt.$$.fragment,t),M(Nt.$$.fragment,t),M(Wt.$$.fragment,t),M(Re.$$.fragment,t),M(Ge.$$.fragment,t),M(Je.$$.fragment,t),qr=!1},d(t){o(n),t&&o(_),t&&o(d),y(c),t&&o(E),t&&o(z),y(et),t&&o(hr),t&&o(be),t&&o(fr),t&&o(Rt),t&&o(ur),t&&o(Gt),t&&o(gr),t&&o(J),t&&o(_r),t&&o(te),y(at),t&&o(Tr),t&&o(O),y(st),y(we),t&&o(Cr),t&&o(ae),y(it),t&&o(vr),t&&o(V),y(lt),y(dt),t&&o(br),t&&o(ne),y(pt),t&&o($r),t&&o(F),y(mt),y(ft),y(gt),y(Fe),y(_t),y(Ee),y(Ct),y(bt),y(wt),t&&o(wr),t&&o(ie),y(Mt),t&&o(Mr),t&&o(H),y(yt),y(Ft),y(Ae),y(Se),y(Ie),t&&o(yr),t&&o(ce),y(Et),t&&o(kr),t&&o(R),y(jt),y(Pt),y(Le),y(Ne),y(Oe),t&&o(xr),t&&o(me),y(zt),t&&o(Fr),t&&o(W),y(At),y(Dt),y(We),y(Be),y(Ue),t&&o(Er),t&&o(fe),y(Lt),t&&o(jr),t&&o(B),y(Nt),y(Wt),y(Re),y(Ge),y(Je)}}}const $l={local:"mctct",sections:[{local:"overview",title:"Overview"},{local:"transformers.MCTCTConfig",title:"MCTCTConfig"},{local:"transformers.MCTCTFeatureExtractor",title:"MCTCTFeatureExtractor"},{local:"transformers.MCTCTProcessor",title:"MCTCTProcessor"},{local:"transformers.MCTCTModel",title:"MCTCTModel"},{local:"transformers.MCTCTForCTC",title:"MCTCTForCTC"},{local:"transformers.MCTCTForAudioFrameClassification",title:"MCTCTForAudioFrameClassification"},{local:"transformers.MCTCTForSequenceClassification",title:"MCTCTForSequenceClassification"}],title:"M-CTC-T"};function wl(k){return sl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jl extends tl{constructor(n){super();ol(this,n,wl,bl,rl,{})}}export{jl as default,$l as metadata};
