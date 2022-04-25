import{S as _0,i as v0,s as b0,e as a,k as d,w,t as r,M as w0,c as s,d as t,m as p,a as n,x as y,h as i,b as h,F as e,g as _,y as k,q as T,o as $,B as x,v as y0,L as fe}from"../../chunks/vendor-6b77c823.js";import{T as he}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-1088f2fb.js";import{C as ue}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ee}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as me}from"../../chunks/ExampleCodeBlock-5212b321.js";function k0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2Model, Wav2Vec2Config

# Initializing a Wav2Vec2 facebook/wav2vec2-base-960h style configuration
configuration = Wav2Vec2Config()

# Initializing a model from the facebook/wav2vec2-base-960h style configuration
model = Wav2Vec2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Model, Wav2Vec2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 facebook/wav2vec2-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Wav2Vec2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/wav2vec2-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function T0(W){let c,b,f,m,v;return m=new ue({props:{code:`# Let's see how to retrieve time steps for a model
from transformers import AutoTokenizer, AutoFeatureExtractor, AutoModelForCTC
from datasets import load_dataset
import datasets
import torch

# import model, feature extractor, tokenizer
model = AutoModelForCTC.from_pretrained("facebook/wav2vec2-base-960h")
tokenizer = AutoTokenizer.from_pretrained("facebook/wav2vec2-base-960h")
feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base-960h")

# load first sample of English common_voice
dataset = load_dataset("common_voice", "en", split="train", streaming=True)
dataset = dataset.cast_column("audio", datasets.Audio(sampling_rate=16_000))
dataset_iter = iter(dataset)
sample = next(dataset_iter)

# forward sample through model to get greedily predicted transcription ids
input_values = feature_extractor(sample["audio"]["array"], return_tensors="pt").input_values
logits = model(input_values).logits[0]
pred_ids = torch.argmax(logits, axis=-1)

# retrieve word stamps (analogous commands for \`output_char_offsets\`)
outputs = tokenizer.decode(pred_ids, output_word_offsets=True)
# compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate
time_offset = model.config.inputs_to_logits_ratio / feature_extractor.sampling_rate

word_offsets = [
    {
        "word": d["word"],
        "start_time": round(d["start_offset"] * time_offset, 2),
        "end_time": round(d["end_offset"] * time_offset, 2),
    }
    for d in outputs.word_offsets
]
# compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:
# https://huggingface.co/datasets/common_voice/viewer/en/train
word_offsets[:3]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s see how to retrieve time steps for a model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoFeatureExtractor, AutoModelForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># import model, feature extractor, tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load first sample of English common_voice</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;common_voice&quot;</span>, <span class="hljs-string">&quot;en&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, datasets.Audio(sampling_rate=<span class="hljs-number">16_000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_iter = <span class="hljs-built_in">iter</span>(dataset)
<span class="hljs-meta">&gt;&gt;&gt; </span>sample = <span class="hljs-built_in">next</span>(dataset_iter)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward sample through model to get greedily predicted transcription ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>pred_ids = torch.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve word stamps (analogous commands for \`output_char_offsets\`)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.decode(pred_ids, output_word_offsets=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>time_offset = model.config.inputs_to_logits_ratio / feature_extractor.sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets = [
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;word&quot;</span>: d[<span class="hljs-string">&quot;word&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;start_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;start_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;end_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;end_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> outputs.word_offsets
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># https://huggingface.co/datasets/common_voice/viewer/en/train</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets[:<span class="hljs-number">3</span>]
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.9</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILISANDRA&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.9</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function $0(W){let c,b,f,m,v,l,u,j;return{c(){c=a("p"),b=r("This class method is simply calling "),f=a("a"),m=r("save_pretrained()"),v=r(` and
`),l=a("code"),u=r("save_pretrained"),j=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(O){c=s(O,"P",{});var q=n(c);b=i(q,"This class method is simply calling "),f=s(q,"A",{href:!0});var C=n(f);m=i(C,"save_pretrained()"),C.forEach(t),v=i(q,` and
`),l=s(q,"CODE",{});var A=n(l);u=i(A,"save_pretrained"),A.forEach(t),j=i(q,`. Please refer to the docstrings of the methods
above for more information.`),q.forEach(t),this.h()},h(){h(f,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(O,q){_(O,c,q),e(c,b),e(c,f),e(f,m),e(c,v),e(c,l),e(l,u),e(c,j)},d(O){O&&t(c)}}}function x0(W){let c,b,f,m,v,l,u,j,O,q,C,A,L,H;return{c(){c=a("p"),b=r(`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=a("a"),m=r("from_pretrained()"),v=r(`, Wav2Vec2CTCTokenizer\u2019s
`),l=a("code"),u=r("from_pretrained"),j=r(`, and
`),O=a("code"),q=r("pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),C=r("."),A=d(),L=a("p"),H=r("Please refer to the docstrings of the methods above for more information."),this.h()},l(S){c=s(S,"P",{});var P=n(c);b=i(P,`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=s(P,"A",{href:!0});var je=n(f);m=i(je,"from_pretrained()"),je.forEach(t),v=i(P,`, Wav2Vec2CTCTokenizer\u2019s
`),l=s(P,"CODE",{});var ge=n(l);u=i(ge,"from_pretrained"),ge.forEach(t),j=i(P,`, and
`),O=s(P,"CODE",{});var B=n(O);q=i(B,"pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),B.forEach(t),C=i(P,"."),P.forEach(t),A=p(S),L=s(S,"P",{});var U=n(L);H=i(U,"Please refer to the docstrings of the methods above for more information."),U.forEach(t),this.h()},h(){h(f,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(S,P){_(S,c,P),e(c,b),e(c,f),e(f,m),e(c,v),e(c,l),e(l,u),e(c,j),e(c,O),e(O,q),e(c,C),_(S,A,P),_(S,L,P),e(L,H)},d(S){S&&t(c),S&&t(A),S&&t(L)}}}function W0(W){let c,b;return{c(){c=a("p"),b=r("This function makes use of Python\u2019s multiprocessing.")},l(f){c=s(f,"P",{});var m=n(c);b=i(m,"This function makes use of Python\u2019s multiprocessing."),m.forEach(t)},m(f,m){_(f,c,m),e(c,b)},d(f){f&&t(c)}}}function V0(W){let c,b,f,m,v;return m=new ue({props:{code:`# Let's see how to retrieve time steps for a model
from transformers import AutoTokenizer, AutoProcessor, AutoModelForCTC
from datasets import load_dataset
import datasets
import torch

# import model, feature extractor, tokenizer
model = AutoModelForCTC.from_pretrained("patrickvonplaten/wav2vec2-base-100h-with-lm")
processor = AutoProcessor.from_pretrained("patrickvonplaten/wav2vec2-base-100h-with-lm")

# load first sample of English common_voice
dataset = load_dataset("common_voice", "en", split="train", streaming=True)
dataset = dataset.cast_column("audio", datasets.Audio(sampling_rate=16_000))
dataset_iter = iter(dataset)
sample = next(dataset_iter)

# forward sample through model to get greedily predicted transcription ids
input_values = processor(sample["audio"]["array"], return_tensors="pt").input_values
with torch.no_grad():
    logits = model(input_values).logits[0].cpu().numpy()

# retrieve word stamps (analogous commands for \`output_char_offsets\`)
outputs = processor.decode(logits, output_word_offsets=True)
# compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate
time_offset = model.config.inputs_to_logits_ratio / processor.feature_extractor.sampling_rate

word_offsets = [
    {
        "word": d["word"],
        "start_time": round(d["start_offset"] * time_offset, 2),
        "end_time": round(d["end_offset"] * time_offset, 2),
    }
    for d in outputs.word_offsets
]
# compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:
# https://huggingface.co/datasets/common_voice/viewer/en/train
word_offsets[:4]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s see how to retrieve time steps for a model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoProcessor, AutoModelForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># import model, feature extractor, tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base-100h-with-lm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base-100h-with-lm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load first sample of English common_voice</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;common_voice&quot;</span>, <span class="hljs-string">&quot;en&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, datasets.Audio(sampling_rate=<span class="hljs-number">16_000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_iter = <span class="hljs-built_in">iter</span>(dataset)
<span class="hljs-meta">&gt;&gt;&gt; </span>sample = <span class="hljs-built_in">next</span>(dataset_iter)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward sample through model to get greedily predicted transcription ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(input_values).logits[<span class="hljs-number">0</span>].cpu().numpy()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve word stamps (analogous commands for \`output_char_offsets\`)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = processor.decode(logits, output_word_offsets=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>time_offset = model.config.inputs_to_logits_ratio / processor.feature_extractor.sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets = [
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;word&quot;</span>: d[<span class="hljs-string">&quot;word&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;start_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;start_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;end_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;end_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> outputs.word_offsets
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># https://huggingface.co/datasets/common_voice/viewer/en/train</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets[:<span class="hljs-number">4</span>]
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.88</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;A&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.12</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.14</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILE&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.46</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function j0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function F0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2Model
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = Wav2Vec2Model.from_pretrained("facebook/wav2vec2-base-960h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2Model.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function C0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function E0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2ForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function P0(W){let c,b;return c=new ue({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">53.48</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,m){k(c,f,m),b=!0},p:fe,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function q0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function z0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("superb/wav2vec2-base-superb-ks")
model = Wav2Vec2ForSequenceClassification.from_pretrained("superb/wav2vec2-base-superb-ks")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;superb/wav2vec2-base-superb-ks&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;superb/wav2vec2-base-superb-ks&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function M0(W){let c,b;return c=new ue({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">6.54</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,m){k(c,f,m),b=!0},p:fe,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function A0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function L0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/wav2vec2-base-superb-sd")
model = Wav2Vec2ForAudioFrameClassification.from_pretrained("anton-l/wav2vec2-base-superb-sd")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt", sampling_rate=sampling_rate)
with torch.no_grad():
    logits = model(**inputs).logits

probabilities = torch.sigmoid(logits[0])
# labels is a one-hot array of shape (num_frames, num_speakers)
labels = (probabilities > 0.5).long()
labels[0].tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sd&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sd&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function D0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function O0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/wav2vec2-base-superb-sv")
model = Wav2Vec2ForXVector.from_pretrained("anton-l/wav2vec2-base-superb-sv")

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
round(similarity.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForXVector.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sv&quot;</span>)

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
<span class="hljs-number">0.98</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function S0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function N0(W){let c,b,f,m,v;return m=new ue({props:{code:`import torch
from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForPreTraining
from transformers.models.wav2vec2.modeling_wav2vec2 import _compute_mask_indices
from datasets import load_dataset
import soundfile as sf

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("patrickvonplaten/wav2vec2-base")
model = Wav2Vec2ForPreTraining.from_pretrained("patrickvonplaten/wav2vec2-base")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.wav2vec2.modeling_wav2vec2 <span class="hljs-keyword">import</span> _compute_mask_indices
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForPreTraining.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, mask_time_indices=mask_time_indices).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function I0(W){let c,b,f,m,v,l,u,j,O,q,C,A,L,H,S,P,je,ge,B,U,_e,Se,z,I,Fe,ve,Re,Ce,oe,lt,He,D,ct,de,pe,Ne,be,dt,we,ae,Ee,ye,pt;return{c(){c=a("p"),b=r("TF 2.0 models accepts two formats as inputs:"),f=d(),m=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),j=a("li"),O=r("having all inputs as a list, tuple or dict in the first positional arguments."),q=d(),C=a("p"),A=r("This second option is useful when using "),L=a("code"),H=r("tf.keras.Model.fit"),S=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),je=r("model(inputs)"),ge=r("."),B=d(),U=a("p"),_e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Se=d(),z=a("ul"),I=a("li"),Fe=r("a single Tensor with "),ve=a("code"),Re=r("input_values"),Ce=r(" only and nothing else: "),oe=a("code"),lt=r("model(inputs_ids)"),He=d(),D=a("li"),ct=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=a("code"),pe=r("model([input_values, attention_mask])"),Ne=r(" or "),be=a("code"),dt=r("model([input_values, attention_mask, token_type_ids])"),we=d(),ae=a("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),pt=r('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(V){c=s(V,"P",{});var E=n(c);b=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),f=p(V),m=s(V,"UL",{});var Ie=n(m);v=s(Ie,"LI",{});var Be=n(v);l=i(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),u=p(Ie),j=s(Ie,"LI",{});var Mt=n(j);O=i(Mt,"having all inputs as a list, tuple or dict in the first positional arguments."),Mt.forEach(t),Ie.forEach(t),q=p(V),C=s(V,"P",{});var se=n(C);A=i(se,"This second option is useful when using "),L=s(se,"CODE",{});var $t=n(L);H=i($t,"tf.keras.Model.fit"),$t.forEach(t),S=i(se,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=s(se,"CODE",{});var ke=n(P);je=i(ke,"model(inputs)"),ke.forEach(t),ge=i(se,"."),se.forEach(t),B=p(V),U=s(V,"P",{});var Pe=n(U);_e=i(Pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Pe.forEach(t),Se=p(V),z=s(V,"UL",{});var X=n(z);I=s(X,"LI",{});var G=n(I);Fe=i(G,"a single Tensor with "),ve=s(G,"CODE",{});var At=n(ve);Re=i(At,"input_values"),At.forEach(t),Ce=i(G," only and nothing else: "),oe=s(G,"CODE",{});var ht=n(oe);lt=i(ht,"model(inputs_ids)"),ht.forEach(t),G.forEach(t),He=p(X),D=s(X,"LI",{});var Te=n(D);ct=i(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(Te,"CODE",{});var xt=n(de);pe=i(xt,"model([input_values, attention_mask])"),xt.forEach(t),Ne=i(Te," or "),be=s(Te,"CODE",{});var J=n(be);dt=i(J,"model([input_values, attention_mask, token_type_ids])"),J.forEach(t),Te.forEach(t),we=p(X),ae=s(X,"LI",{});var $e=n(ae);Ee=i($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s($e,"CODE",{});var Lt=n(ye);pt=i(Lt,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Lt.forEach(t),$e.forEach(t),X.forEach(t)},m(V,E){_(V,c,E),e(c,b),_(V,f,E),_(V,m,E),e(m,v),e(v,l),e(m,u),e(m,j),e(j,O),_(V,q,E),_(V,C,E),e(C,A),e(C,L),e(L,H),e(C,S),e(C,P),e(P,je),e(C,ge),_(V,B,E),_(V,U,E),e(U,_e),_(V,Se,E),_(V,z,E),e(z,I),e(I,Fe),e(I,ve),e(ve,Re),e(I,Ce),e(I,oe),e(oe,lt),e(z,He),e(z,D),e(D,ct),e(D,de),e(de,pe),e(D,Ne),e(D,be),e(be,dt),e(z,we),e(z,ae),e(ae,Ee),e(ae,ye),e(ye,pt)},d(V){V&&t(c),V&&t(f),V&&t(m),V&&t(q),V&&t(C),V&&t(B),V&&t(U),V&&t(Se),V&&t(z)}}}function B0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function U0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2Processor, TFWav2Vec2Model
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = TFWav2Vec2Model.from_pretrained("facebook/wav2vec2-base-960h")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFWav2Vec2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWav2Vec2Model.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function R0(W){let c,b,f,m,v,l,u,j,O,q,C,A,L,H,S,P,je,ge,B,U,_e,Se,z,I,Fe,ve,Re,Ce,oe,lt,He,D,ct,de,pe,Ne,be,dt,we,ae,Ee,ye,pt;return{c(){c=a("p"),b=r("TF 2.0 models accepts two formats as inputs:"),f=d(),m=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),j=a("li"),O=r("having all inputs as a list, tuple or dict in the first positional arguments."),q=d(),C=a("p"),A=r("This second option is useful when using "),L=a("code"),H=r("tf.keras.Model.fit"),S=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),je=r("model(inputs)"),ge=r("."),B=d(),U=a("p"),_e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Se=d(),z=a("ul"),I=a("li"),Fe=r("a single Tensor with "),ve=a("code"),Re=r("input_values"),Ce=r(" only and nothing else: "),oe=a("code"),lt=r("model(inputs_ids)"),He=d(),D=a("li"),ct=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=a("code"),pe=r("model([input_values, attention_mask])"),Ne=r(" or "),be=a("code"),dt=r("model([input_values, attention_mask, token_type_ids])"),we=d(),ae=a("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),pt=r('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(V){c=s(V,"P",{});var E=n(c);b=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),f=p(V),m=s(V,"UL",{});var Ie=n(m);v=s(Ie,"LI",{});var Be=n(v);l=i(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),u=p(Ie),j=s(Ie,"LI",{});var Mt=n(j);O=i(Mt,"having all inputs as a list, tuple or dict in the first positional arguments."),Mt.forEach(t),Ie.forEach(t),q=p(V),C=s(V,"P",{});var se=n(C);A=i(se,"This second option is useful when using "),L=s(se,"CODE",{});var $t=n(L);H=i($t,"tf.keras.Model.fit"),$t.forEach(t),S=i(se,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=s(se,"CODE",{});var ke=n(P);je=i(ke,"model(inputs)"),ke.forEach(t),ge=i(se,"."),se.forEach(t),B=p(V),U=s(V,"P",{});var Pe=n(U);_e=i(Pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Pe.forEach(t),Se=p(V),z=s(V,"UL",{});var X=n(z);I=s(X,"LI",{});var G=n(I);Fe=i(G,"a single Tensor with "),ve=s(G,"CODE",{});var At=n(ve);Re=i(At,"input_values"),At.forEach(t),Ce=i(G," only and nothing else: "),oe=s(G,"CODE",{});var ht=n(oe);lt=i(ht,"model(inputs_ids)"),ht.forEach(t),G.forEach(t),He=p(X),D=s(X,"LI",{});var Te=n(D);ct=i(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(Te,"CODE",{});var xt=n(de);pe=i(xt,"model([input_values, attention_mask])"),xt.forEach(t),Ne=i(Te," or "),be=s(Te,"CODE",{});var J=n(be);dt=i(J,"model([input_values, attention_mask, token_type_ids])"),J.forEach(t),Te.forEach(t),we=p(X),ae=s(X,"LI",{});var $e=n(ae);Ee=i($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s($e,"CODE",{});var Lt=n(ye);pt=i(Lt,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Lt.forEach(t),$e.forEach(t),X.forEach(t)},m(V,E){_(V,c,E),e(c,b),_(V,f,E),_(V,m,E),e(m,v),e(v,l),e(m,u),e(m,j),e(j,O),_(V,q,E),_(V,C,E),e(C,A),e(C,L),e(L,H),e(C,S),e(C,P),e(P,je),e(C,ge),_(V,B,E),_(V,U,E),e(U,_e),_(V,Se,E),_(V,z,E),e(z,I),e(I,Fe),e(I,ve),e(ve,Re),e(I,Ce),e(I,oe),e(oe,lt),e(z,He),e(z,D),e(D,ct),e(D,de),e(de,pe),e(D,Ne),e(D,be),e(be,dt),e(z,we),e(z,ae),e(ae,Ee),e(ae,ye),e(ye,pt)},d(V){V&&t(c),V&&t(f),V&&t(m),V&&t(q),V&&t(C),V&&t(B),V&&t(U),V&&t(Se),V&&t(z)}}}function H0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function X0(W){let c,b,f,m,v;return m=new ue({props:{code:`import tensorflow as tf
from transformers import Wav2Vec2Processor, TFWav2Vec2ForCTC
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = TFWav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
logits = model(input_values).logits
predicted_ids = tf.argmax(logits, axis=-1)

transcription = processor.decode(predicted_ids[0])

# compute loss
target_transcription = "A MAN SAID TO THE UNIVERSE SIR I EXIST"

# wrap processor as target processor to encode labels
with processor.as_target_processor():
    labels = processor(transcription, return_tensors="tf").input_ids

loss = model(input_values, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFWav2Vec2ForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWav2Vec2ForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = tf.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.decode(predicted_ids[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_transcription = <span class="hljs-string">&quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># wrap processor as target processor to encode labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function G0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function J0(W){let c,b,f,m,v;return m=new ue({props:{code:`from transformers import Wav2Vec2Processor, FlaxWav2Vec2Model
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-large-lv60")
model = FlaxWav2Vec2Model.from_pretrained("facebook/wav2vec2-large-lv60")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(
    ds["speech"][0], sampling_rate=16_000, return_tensors="np"
).input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, FlaxWav2Vec2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWav2Vec2Model.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function Z0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function K0(W){let c,b,f,m,v;return m=new ue({props:{code:`import jax.numpy as jnp
from transformers import Wav2Vec2Processor, FlaxWav2Vec2ForCTC
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-large-960h-lv60")
model = FlaxWav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-large-960h-lv60")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(
    ds["speech"][0], sampling_rate=16_000, return_tensors="np"
).input_values  # Batch size 1
logits = model(input_values).logits
predicted_ids = jnp.argmax(logits, axis=-1)

transcription = processor.decode(predicted_ids[0])
# should give:  "A MAN SAID TO THE UNIVERSE SIR I EXIST"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, FlaxWav2Vec2ForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-960h-lv60&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWav2Vec2ForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-960h-lv60&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = jnp.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.decode(predicted_ids[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give:  &quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function Q0(W){let c,b,f,m,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);m=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,m),e(c,v)},d(l){l&&t(c)}}}function Y0(W){let c,b,f,m,v;return m=new ue({props:{code:`import optax
import numpy as np
import jax.numpy as jnp
from transformers import Wav2Vec2FeatureExtractor, FlaxWav2Vec2ForPreTraining
from transformers.models.wav2vec2.modeling_flax_wav2vec2 import _compute_mask_indices
from datasets import load_dataset
import soundfile as sf

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("facebook/wav2vec2-large-lv60")
model = FlaxWav2Vec2ForPreTraining.from_pretrained("facebook/wav2vec2-large-lv60")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = feature_extractor(ds["speech"][0], return_tensors="np").input_values  # Batch size 1

# compute masked indices
batch_size, raw_sequence_length = input_values.shape
sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=0.2, mask_length=2)

outputs = model(input_values, mask_time_indices=mask_time_indices)

# compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)
cosine_sim = optax.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states)

# show that cosine similarity is much higher than random
assert np.asarray(cosine_sim)[mask_time_indices].mean() > 0.5`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> optax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, FlaxWav2Vec2ForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.wav2vec2.modeling_flax_wav2vec2 <span class="hljs-keyword">import</span> _compute_mask_indices
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWav2Vec2ForPreTraining.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute masked indices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size, raw_sequence_length = input_values.shape
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=<span class="hljs-number">0.2</span>, mask_length=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_values, mask_time_indices=mask_time_indices)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = optax.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># show that cosine similarity is much higher than random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> np.asarray(cosine_sim)[mask_time_indices].mean() &gt; <span class="hljs-number">0.5</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(m.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(m.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(m,l,u),v=!0},p:fe,i(l){v||(T(m.$$.fragment,l),v=!0)},o(l){$(m.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(m,l)}}}function e1(W){let c,b,f,m,v,l,u,j,O,q,C,A,L,H,S,P,je,ge,B,U,_e,Se,z,I,Fe,ve,Re,Ce,oe,lt,He,D,ct,de,pe,Ne,be,dt,we,ae,Ee,ye,pt,V,E,Ie,Be,Mt,se,$t,ke,Pe,X,G,At,ht,Te,xt,J,$e,Lt,Dt,nh,Nr,rh,ih,Ga,lh,ch,dh,Ot,ph,Ir,hh,mh,Br,fh,uh,gh,To,nd,St,$o,Yi,Ja,_h,el,vh,rd,Z,Za,bh,tl,wh,yh,Ka,kh,Ur,Th,$h,xh,xo,Qa,Wh,ol,Vh,jh,Rr,Ya,Fh,Xe,es,Ch,al,Eh,Ph,ts,qh,sl,zh,Mh,Ah,Wo,Lh,Vo,os,Dh,nl,Oh,id,Nt,jo,rl,as,Sh,il,Nh,ld,Ue,ss,Ih,ll,Bh,Uh,ns,Rh,Hr,Hh,Xh,Gh,Fo,rs,Jh,cl,Zh,cd,It,Co,dl,is,Kh,pl,Qh,dd,M,ls,Yh,hl,em,tm,qe,Xr,om,am,Gr,sm,nm,Jr,rm,im,cs,ml,lm,cm,dm,Zr,pm,hm,mm,Eo,ds,fm,mt,um,ps,fl,gm,_m,vm,Kr,bm,wm,hs,ul,ym,km,Tm,$m,Po,ms,xm,ft,Wm,Qr,Vm,jm,Yr,Fm,Cm,ei,Em,Pm,qm,ti,fs,zm,Wt,us,Mm,gs,Am,oi,Lm,Dm,Om,qo,Sm,zo,_s,Nm,vs,Im,ai,Bm,Um,Rm,Mo,bs,Hm,ws,Xm,si,Gm,Jm,Zm,Ao,ys,Km,gl,Qm,pd,Bt,Lo,_l,ks,Ym,vl,ef,hd,N,Ts,tf,bl,of,af,Do,$s,sf,ut,nf,xs,wl,rf,lf,cf,ni,df,pf,Ws,yl,hf,mf,ff,uf,Oo,Vs,gf,gt,_f,ri,vf,bf,ii,wf,yf,li,kf,Tf,$f,Vt,js,xf,Fs,Wf,ci,Vf,jf,Ff,So,Cf,di,Cs,Ef,jt,Es,Pf,kl,qf,zf,No,Mf,Ft,Ps,Af,Tl,Lf,Df,Io,Of,Bo,qs,Sf,$l,Nf,md,Ut,Uo,xl,zs,If,Wl,Bf,fd,Rt,Ms,Uf,As,Rf,Vl,Hf,Xf,ud,Ht,Ls,Gf,Ds,Jf,jl,Zf,Kf,gd,Xt,Os,Qf,Ss,Yf,pi,eu,tu,_d,_t,Ns,ou,Is,au,Fl,su,nu,ru,Ro,Bs,iu,Cl,lu,vd,vt,Us,cu,Rs,du,El,pu,hu,mu,Ho,Hs,fu,Pl,uu,bd,Gt,Xo,ql,Xs,gu,zl,_u,wd,xe,Gs,vu,Js,bu,Zs,wu,yu,ku,Ks,Tu,hi,$u,xu,Wu,Qs,Vu,Ys,ju,Fu,Cu,Ge,en,Eu,Jt,Pu,mi,qu,zu,Ml,Mu,Au,Lu,Go,Du,Jo,yd,Zt,Zo,Al,tn,Ou,Ll,Su,kd,We,on,Nu,Kt,Iu,Dl,Bu,Uu,an,Ru,Hu,Xu,sn,Gu,fi,Ju,Zu,Ku,nn,Qu,rn,Yu,eg,tg,ze,ln,og,Qt,ag,ui,sg,ng,Ol,rg,ig,lg,Ko,cg,Qo,dg,Yo,Td,Yt,ea,Sl,cn,pg,Nl,hg,$d,ne,dn,mg,Il,fg,ug,pn,gg,hn,_g,vg,bg,mn,wg,gi,yg,kg,Tg,fn,$g,un,xg,Wg,Vg,Me,gn,jg,eo,Fg,_i,Cg,Eg,Bl,Pg,qg,zg,ta,Mg,oa,Ag,aa,xd,to,sa,Ul,_n,Lg,Rl,Dg,Wd,re,vn,Og,Hl,Sg,Ng,bn,Ig,wn,Bg,Ug,Rg,yn,Hg,vi,Xg,Gg,Jg,kn,Zg,Tn,Kg,Qg,Yg,Je,$n,e_,oo,t_,bi,o_,a_,Xl,s_,n_,r_,na,i_,ra,Vd,ao,ia,Gl,xn,l_,Jl,c_,jd,ie,Wn,d_,Zl,p_,h_,Vn,m_,jn,f_,u_,g_,Fn,__,wi,v_,b_,w_,Cn,y_,En,k_,T_,$_,Ze,Pn,x_,so,W_,yi,V_,j_,Kl,F_,C_,E_,la,P_,ca,Fd,no,da,Ql,qn,q_,Yl,z_,Cd,Ve,zn,M_,ro,A_,ec,L_,D_,Mn,O_,S_,N_,An,I_,ki,B_,U_,R_,Ln,H_,Dn,X_,G_,J_,Ke,On,Z_,io,K_,Ti,Q_,Y_,tc,ev,tv,ov,pa,av,ha,Ed,lo,ma,oc,Sn,sv,ac,nv,Pd,le,Nn,rv,sc,iv,lv,In,cv,$i,dv,pv,hv,Bn,mv,Un,fv,uv,gv,fa,_v,Qe,Rn,vv,co,bv,xi,wv,yv,nc,kv,Tv,$v,ua,xv,ga,qd,po,_a,rc,Hn,Wv,ic,Vv,zd,ce,Xn,jv,Gn,Fv,lc,Cv,Ev,Pv,Jn,qv,Wi,zv,Mv,Av,Zn,Lv,Kn,Dv,Ov,Sv,va,Nv,Ye,Qn,Iv,ho,Bv,Vi,Uv,Rv,cc,Hv,Xv,Gv,ba,Jv,wa,Md,mo,ya,dc,Yn,Zv,pc,Kv,Ad,K,er,Qv,tr,Yv,or,e2,t2,o2,ar,a2,ji,s2,n2,r2,sr,i2,nr,l2,c2,d2,hc,p2,h2,bt,mc,rr,m2,f2,fc,ir,u2,g2,uc,lr,_2,v2,gc,cr,b2,w2,et,dr,y2,fo,k2,_c,T2,$2,vc,x2,W2,V2,ka,j2,Ta,Ld,uo,$a,bc,pr,F2,wc,C2,Dd,Q,hr,E2,go,P2,yc,q2,z2,mr,M2,A2,L2,fr,D2,Fi,O2,S2,N2,ur,I2,gr,B2,U2,R2,kc,H2,X2,wt,Tc,_r,G2,J2,$c,vr,Z2,K2,xc,br,Q2,Y2,Wc,wr,eb,tb,tt,yr,ob,_o,ab,Vc,sb,nb,jc,rb,ib,lb,xa,cb,Wa,Od,vo,Va,Fc,kr,db,Cc,pb,Sd,Y,Tr,hb,bo,mb,Ec,fb,ub,$r,gb,_b,vb,xr,bb,Ci,wb,yb,kb,Wr,Tb,Vr,$b,xb,Wb,Pc,Vb,jb,yt,qc,jr,Fb,Cb,zc,Fr,Eb,Pb,Mc,Cr,qb,zb,Ac,Er,Mb,Ab,ot,Pr,Lb,wo,Db,Ei,Ob,Sb,Lc,Nb,Ib,Bb,ja,Ub,Fa,Nd;return l=new ee({}),H=new ee({}),G=new ee({}),$e=new F({props:{name:"class transformers.Wav2Vec2Config",anchor:"transformers.Wav2Vec2Config",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Wav2Vec2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model">TFWav2Vec2Model</a>. Vocabulary size of the
model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward
method of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2Config.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2Config.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Wav2Vec2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Wav2Vec2Config.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.Wav2Vec2Config.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.Wav2Vec2Config.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.Wav2Vec2Config.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2Config.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.Wav2Vec2Config.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.Wav2Vec2Config.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.Wav2Vec2Config.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.Wav2Vec2Config.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.Wav2Vec2Config.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.Wav2Vec2Config.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.Wav2Vec2Config.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.Wav2Vec2Config.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.Wav2Vec2Config.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.Wav2Vec2Config.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.Wav2Vec2Config.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.Wav2Vec2Config.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.Wav2Vec2Config.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.Wav2Vec2Config.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.Wav2Vec2Config.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.Wav2Vec2Config.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.Wav2Vec2Config.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2Config.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.Wav2Vec2Config.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.Wav2Vec2Config.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.Wav2Vec2Config.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.Wav2Vec2Config.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2Config.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2Config.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2Config.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.Wav2Vec2Config.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.Wav2Vec2Config.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.Wav2Vec2Config.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.Wav2Vec2Config.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.Wav2Vec2Config.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Wav2Vec2 Encoder. Can be very useful for
warm-starting Wav2Vec2 for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.Wav2Vec2Config.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.Wav2Vec2Config.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.Wav2Vec2Config.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.Wav2Vec2Config.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/configuration_wav2vec2.py#L32"}}),To=new me({props:{anchor:"transformers.Wav2Vec2Config.example",$$slots:{default:[k0]},$$scope:{ctx:W}}}),Ja=new ee({}),Za=new F({props:{name:"class transformers.Wav2Vec2CTCTokenizer",anchor:"transformers.Wav2Vec2CTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"word_delimiter_token",val:" = '|'"},{name:"replace_word_delimiter_char",val:" = ' '"},{name:"do_lower_case",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2CTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.word_delimiter_token",description:`<strong>word_delimiter_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;|&quot;</code>) &#x2014;
The token used for defining the end of a word.`,name:"word_delimiter_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to accept lowercase input and lowercase the output when decoding.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"do_lower_case"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L125"}}),Qa=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2CTCTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2370",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Ya=new F({props:{name:"save_vocabulary",anchor:"transformers.Wav2Vec2CTCTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L591"}}),es=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2CTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_word_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L484",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>str</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),Wo=new me({props:{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.example",$$slots:{default:[T0]},$$scope:{ctx:W}}}),os=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works the same way with batched output.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works the same way with batched output.</p>

					</div>`,name:"output_word_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L414",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>List[str]</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),as=new ee({}),ss=new F({props:{name:"class transformers.Wav2Vec2FeatureExtractor",anchor:"transformers.Wav2Vec2FeatureExtractor",parameters:[{name:"feature_size",val:" = 1"},{name:"sampling_rate",val:" = 16000"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"do_normalize",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 1) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Wav2Vec2FeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"},{anchor:"transformers.Wav2Vec2FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean unit-variance normalize the input. Normalizing can help to significantly
improve the performance for some models, <em>e.g.</em>,
<a href="https://huggingface.co/models?search=lv60" rel="nofollow">wav2vec2-lv60</a>.`,name:"do_normalize"},{anchor:"transformers.Wav2Vec2FeatureExtractor.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"><strong>call</strong>()</a> should return <code>attention_mask</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;group&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, have <strong>not</strong> been trained using
<code>attention_mask</code>. For such models, <code>input_values</code> should simply be padded with 0 and no <code>attention_mask</code>
should be passed.</p>
<p>For Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;layer&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self" rel="nofollow">wav2vec2-lv60</a>, <code>attention_mask</code> should be
passed for batched inference.</p>

					</div>`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L31"}}),rs=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2FeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;group&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, have <strong>not</strong> been trained using
<code>attention_mask</code>. For such models, <code>input_values</code> should simply be padded with 0 and no
<code>attention_mask</code> should be passed.</p>
<p>For Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;layer&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self" rel="nofollow">wav2vec2-lv60</a>, <code>attention_mask</code> should
be passed for batched inference.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding_value",description:"<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;",name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L102"}}),is=new ee({}),ls=new F({props:{name:"class transformers.Wav2Vec2Processor",anchor:"transformers.Wav2Vec2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Wav2Vec2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2Processor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/processing_wav2vec2.py#L26"}}),ds=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/processing_wav2vec2.py#L66"}}),ms=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2Processor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/processing_wav2vec2.py#L75"}}),fs=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/processing_wav2vec2.py#L47"}}),us=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Wav2Vec2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/processing_utils.py#L94"}}),qo=new he({props:{$$slots:{default:[$0]},$$scope:{ctx:W}}}),_s=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/processing_wav2vec2.py#L84"}}),bs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/processing_wav2vec2.py#L91"}}),ys=new F({props:{name:"as_target_processor",anchor:"transformers.Wav2Vec2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/processing_wav2vec2.py#L98"}}),ks=new ee({}),Ts=new F({props:{name:"class transformers.Wav2Vec2ProcessorWithLM",anchor:"transformers.Wav2Vec2ProcessorWithLM",parameters:[{name:"feature_extractor",val:": FeatureExtractionMixin"},{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"decoder",val:": BeamSearchDecoderCTC"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decoder",description:`<strong>decoder</strong> (<code>pyctcdecode.BeamSearchDecoderCTC</code>) &#x2014;
An instance of <code>pyctcdecode.BeamSearchDecoderCTC</code>. The decoder is a required input.`,name:"decoder"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L63"}}),$s=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2ProcessorWithLM.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L209"}}),Vs=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2ProcessorWithLM.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L219"}}),js=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both <a href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L107"}}),So=new he({props:{$$slots:{default:[x0]},$$scope:{ctx:W}}}),Cs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L103"}}),Es=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode",parameters:[{name:"logits",val:": ndarray"},{name:"num_processes",val:": typing.Optional[int] = None"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
The logits output vector of the model representing the log probabilities for each token.`,name:"logits"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of processes on which the function should be parallelized over. Defaults to the number of
available CPUs.`,name:"num_processes"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.beam_width",description:`<strong>beam_width</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum number of beams at each step in decoding. Defaults to pyctcdecode&#x2019;s DEFAULT_BEAM_WIDTH.`,name:"beam_width"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.beam_prune_logp",description:`<strong>beam_prune_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Beams that are much worse than best beam will be pruned Defaults to pyctcdecode&#x2019;s DEFAULT_PRUNE_LOGP.`,name:"beam_prune_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.token_min_logp",description:`<strong>token_min_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Tokens below this logp are skipped unless they are argmax of frame Defaults to pyctcdecode&#x2019;s
DEFAULT_MIN_TOKEN_LOGP.`,name:"token_min_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.hotwords",description:`<strong>hotwords</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of words with extra importance, can be OOV for LM`,name:"hotwords"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.hotword_weight",description:`<strong>hotword_weight</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Weight factor for hotword importance Defaults to pyctcdecode&#x2019;s DEFAULT_HOTWORD_WEIGHT.`,name:"hotword_weight"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.alpha",description:`<strong>alpha</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for language model during shallow fusion`,name:"alpha"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.beta",description:`<strong>beta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for length score adjustment of during scoring`,name:"beta"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.unk_score_offset",description:`<strong>unk_score_offset</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Amount of log score offset for unknown tokens`,name:"unk_score_offset"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.lm_score_boundary",description:`<strong>lm_score_boundary</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to have kenlm respect boundaries when scoring`,name:"lm_score_boundary"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to
better understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works the same way with batched
output.</p>

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L229",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),No=new he({props:{$$slots:{default:[W0]},$$scope:{ctx:W}}}),Ps=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.decode",parameters:[{name:"logits",val:": ndarray"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
The logits output vector of the model representing the log probabilities for each token.`,name:"logits"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.beam_width",description:`<strong>beam_width</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum number of beams at each step in decoding. Defaults to pyctcdecode&#x2019;s DEFAULT_BEAM_WIDTH.`,name:"beam_width"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.beam_prune_logp",description:`<strong>beam_prune_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
A threshold to prune beams with log-probs less than best_beam_logp + beam_prune_logp. The value should
be &lt;= 0. Defaults to pyctcdecode&#x2019;s DEFAULT_PRUNE_LOGP.`,name:"beam_prune_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.token_min_logp",description:`<strong>token_min_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Tokens with log-probs below token_min_logp are skipped unless they are have the maximum log-prob for an
utterance. Defaults to pyctcdecode&#x2019;s DEFAULT_MIN_TOKEN_LOGP.`,name:"token_min_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.hotwords",description:`<strong>hotwords</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of words with extra importance which can be missing from the LM&#x2019;s vocabulary, e.g. [&#x201C;huggingface&#x201D;]`,name:"hotwords"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.hotword_weight",description:`<strong>hotword_weight</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Weight multiplier that boosts hotword scores. Defaults to pyctcdecode&#x2019;s DEFAULT_HOTWORD_WEIGHT.`,name:"hotword_weight"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.alpha",description:`<strong>alpha</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for language model during shallow fusion`,name:"alpha"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.beta",description:`<strong>beta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for length score adjustment of during scoring`,name:"beta"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.unk_score_offset",description:`<strong>unk_score_offset</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Amount of log score offset for unknown tokens`,name:"unk_score_offset"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.lm_score_boundary",description:`<strong>lm_score_boundary</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to have kenlm respect boundaries when scoring`,name:"lm_score_boundary"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example of <code>decode</code> to
better understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L346",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),Io=new me({props:{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.example",$$slots:{default:[V0]},$$scope:{ctx:W}}}),qs=new F({props:{name:"as_target_processor",anchor:"transformers.Wav2Vec2ProcessorWithLM.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L486"}}),zs=new ee({}),Ms=new F({props:{name:"class transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",parameters:[{name:"text",val:": typing.Union[typing.List[str], str]"},{name:"logit_score",val:": typing.Union[typing.List[float], float] = None"},{name:"lm_score",val:": typing.Union[typing.List[float], float] = None"},{name:"word_offsets",val:": typing.Union[typing.List[typing.List[typing.Dict[str, typing.Union[int, str]]]], typing.List[typing.Dict[str, typing.Union[int, str]]]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.text",description:`<strong>text</strong> (list of <code>str</code> or <code>str</code>) &#x2014;
Decoded logits in text from. Usually the speech transcription.`,name:"text"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.logit_score",description:`<strong>logit_score</strong> (list of <code>float</code> or <code>float</code>) &#x2014;
Total logit score of the beam associated with produced text.`,name:"logit_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.lm_score",description:`<strong>lm_score</strong> (list of <code>float</code>) &#x2014;
Fused lm_score of the beam associated with produced text.`,name:"lm_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.word_offsets",description:`<strong>word_offsets</strong> (list of <code>List[Dict[str, Union[int, str]]]</code> or <code>List[Dict[str, Union[int, str]]]</code>) &#x2014;
Offsets of the decoded words. In combination with sampling rate and model downsampling rate word offsets
can be used to compute time stamps for each word.`,name:"word_offsets"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L41"}}),Ls=new F({props:{name:"class transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput",anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L92"}}),Os=new F({props:{name:"class transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.contrastive_loss",description:`<strong>contrastive_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The contrastive loss (L_m) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"contrastive_loss"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.diversity_loss",description:`<strong>diversity_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L121"}}),Ns=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"extract_features",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L45"}}),Bs=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/flax/struct.py#L120"}}),Us=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",parameters:[{name:"projected_states",val:": ndarray = None"},{name:"projected_quantized_states",val:": ndarray = None"},{name:"codevector_perplexity",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L75"}}),Hs=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/flax/struct.py#L120"}}),Xs=new ee({}),Gs=new F({props:{name:"class transformers.Wav2Vec2Model",anchor:"transformers.Wav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1237"}}),en=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2Model.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1323",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new he({props:{$$slots:{default:[j0]},$$scope:{ctx:W}}}),Jo=new me({props:{anchor:"transformers.Wav2Vec2Model.forward.example",$$slots:{default:[F0]},$$scope:{ctx:W}}}),tn=new ee({}),on=new F({props:{name:"class transformers.Wav2Vec2ForCTC",anchor:"transformers.Wav2Vec2ForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1647"}}),ln=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1688",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new he({props:{$$slots:{default:[C0]},$$scope:{ctx:W}}}),Qo=new me({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example",$$slots:{default:[E0]},$$scope:{ctx:W}}}),Yo=new me({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example-2",$$slots:{default:[P0]},$$scope:{ctx:W}}}),cn=new ee({}),dn=new F({props:{name:"class transformers.Wav2Vec2ForSequenceClassification",anchor:"transformers.Wav2Vec2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1777"}}),gn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1822",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ta=new he({props:{$$slots:{default:[q0]},$$scope:{ctx:W}}}),oa=new me({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example",$$slots:{default:[z0]},$$scope:{ctx:W}}}),aa=new me({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example-2",$$slots:{default:[M0]},$$scope:{ctx:W}}}),_n=new ee({}),vn=new F({props:{name:"class transformers.Wav2Vec2ForAudioFrameClassification",anchor:"transformers.Wav2Vec2ForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1900"}}),$n=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1943",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new he({props:{$$slots:{default:[A0]},$$scope:{ctx:W}}}),ra=new me({props:{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.example",$$slots:{default:[L0]},$$scope:{ctx:W}}}),xn=new ee({}),Wn=new F({props:{name:"class transformers.Wav2Vec2ForXVector",anchor:"transformers.Wav2Vec2ForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2055"}}),Pn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForXVector.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2117",returnDescription:`
<p>A <code>transformers.models.wav2vec2.modeling_wav2vec2.XVectorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
<p><code>transformers.models.wav2vec2.modeling_wav2vec2.XVectorOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),la=new he({props:{$$slots:{default:[D0]},$$scope:{ctx:W}}}),ca=new me({props:{anchor:"transformers.Wav2Vec2ForXVector.forward.example",$$slots:{default:[O0]},$$scope:{ctx:W}}}),qn=new ee({}),zn=new F({props:{name:"class transformers.Wav2Vec2ForPreTraining",anchor:"transformers.Wav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1386"}}),On=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForPreTraining.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"sampled_negative_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1447",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pa=new he({props:{$$slots:{default:[S0]},$$scope:{ctx:W}}}),ha=new me({props:{anchor:"transformers.Wav2Vec2ForPreTraining.forward.example",$$slots:{default:[N0]},$$scope:{ctx:W}}}),Sn=new ee({}),Nn=new F({props:{name:"class transformers.TFWav2Vec2Model",anchor:"transformers.TFWav2Vec2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1428"}}),fa=new he({props:{$$slots:{default:[I0]},$$scope:{ctx:W}}}),Rn=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2Model.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFWav2Vec2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFWav2Vec2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFWav2Vec2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFWav2Vec2Model.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWav2Vec2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFWav2Vec2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFWav2Vec2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFWav2Vec2Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1434",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ua=new he({props:{$$slots:{default:[B0]},$$scope:{ctx:W}}}),ga=new me({props:{anchor:"transformers.TFWav2Vec2Model.call.example",$$slots:{default:[U0]},$$scope:{ctx:W}}}),Hn=new ee({}),Xn=new F({props:{name:"class transformers.TFWav2Vec2ForCTC",anchor:"transformers.TFWav2Vec2ForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1531"}}),va=new he({props:{$$slots:{default:[R0]},$$scope:{ctx:W}}}),Qn=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2ForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFWav2Vec2ForCTC.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFWav2Vec2ForCTC.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFWav2Vec2ForCTC.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFWav2Vec2ForCTC.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWav2Vec2ForCTC.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFWav2Vec2ForCTC.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFWav2Vec2ForCTC.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFWav2Vec2ForCTC.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2ForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFWav2Vec2ForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1558",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ba=new he({props:{$$slots:{default:[H0]},$$scope:{ctx:W}}}),wa=new me({props:{anchor:"transformers.TFWav2Vec2ForCTC.call.example",$$slots:{default:[X0]},$$scope:{ctx:W}}}),Yn=new ee({}),er=new F({props:{name:"class transformers.FlaxWav2Vec2Model",anchor:"transformers.FlaxWav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1050"}}),dr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2Model.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a> .. warning:: <code>attention_mask</code> should only be passed
if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor
has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.`,name:"attention_mask"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L875",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.wav2vec2.configuration_wav2vec2.Wav2Vec2Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) \u2014 Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ka=new he({props:{$$slots:{default:[G0]},$$scope:{ctx:W}}}),Ta=new me({props:{anchor:"transformers.FlaxWav2Vec2Model.__call__.example",$$slots:{default:[J0]},$$scope:{ctx:W}}}),pr=new ee({}),hr=new F({props:{name:"class transformers.FlaxWav2Vec2ForCTC",anchor:"transformers.FlaxWav2Vec2ForCTC",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForCTC.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1168"}}),yr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForCTC.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a> .. warning:: <code>attention_mask</code> should only be passed
if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor
has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.`,name:"attention_mask"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L875",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.wav2vec2.configuration_wav2vec2.Wav2Vec2Config'&gt;</code>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xa=new he({props:{$$slots:{default:[Z0]},$$scope:{ctx:W}}}),Wa=new me({props:{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.example",$$slots:{default:[K0]},$$scope:{ctx:W}}}),kr=new ee({}),Tr=new F({props:{name:"class transformers.FlaxWav2Vec2ForPreTraining",anchor:"transformers.FlaxWav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1306"}}),Pr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"gumbel_temperature",val:": int = 1"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"gumbel_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a> .. warning:: <code>attention_mask</code> should only be passed
if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor
has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.`,name:"attention_mask"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.wav2vec2.configuration_wav2vec2.Wav2Vec2Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official
paper</a> . (classification) loss.</p>
</li>
<li>
<p><strong>projected_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.</p>
</li>
<li>
<p><strong>projected_quantized_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ja=new he({props:{$$slots:{default:[Q0]},$$scope:{ctx:W}}}),Fa=new me({props:{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.example",$$slots:{default:[Y0]},$$scope:{ctx:W}}}),{c(){c=a("meta"),b=d(),f=a("h1"),m=a("a"),v=a("span"),w(l.$$.fragment),u=d(),j=a("span"),O=r("Wav2Vec2"),q=d(),C=a("h2"),A=a("a"),L=a("span"),w(H.$$.fragment),S=d(),P=a("span"),je=r("Overview"),ge=d(),B=a("p"),U=r("The Wav2Vec2 model was proposed in "),_e=a("a"),Se=r("wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),z=r(" by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),I=d(),Fe=a("p"),ve=r("The abstract from the paper is the following:"),Re=d(),Ce=a("p"),oe=a("em"),lt=r(`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),He=d(),D=a("p"),ct=r("Tips:"),de=d(),pe=a("ul"),Ne=a("li"),be=r("Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),dt=d(),we=a("li"),ae=r(`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ee=a("a"),ye=r("Wav2Vec2CTCTokenizer"),pt=r("."),V=d(),E=a("p"),Ie=r("This model was contributed by "),Be=a("a"),Mt=r("patrickvonplaten"),se=r("."),$t=d(),ke=a("h2"),Pe=a("a"),X=a("span"),w(G.$$.fragment),At=d(),ht=a("span"),Te=r("Wav2Vec2Config"),xt=d(),J=a("div"),w($e.$$.fragment),Lt=d(),Dt=a("p"),nh=r("This is the configuration class to store the configuration of a "),Nr=a("a"),rh=r("Wav2Vec2Model"),ih=r(`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ga=a("a"),lh=r("facebook/wav2vec2-base-960h"),ch=r(" architecture."),dh=d(),Ot=a("p"),ph=r("Configuration objects inherit from "),Ir=a("a"),hh=r("PretrainedConfig"),mh=r(` and can be used to control the model outputs. Read the
documentation from `),Br=a("a"),fh=r("PretrainedConfig"),uh=r(" for more information."),gh=d(),w(To.$$.fragment),nd=d(),St=a("h2"),$o=a("a"),Yi=a("span"),w(Ja.$$.fragment),_h=d(),el=a("span"),vh=r("Wav2Vec2CTCTokenizer"),rd=d(),Z=a("div"),w(Za.$$.fragment),bh=d(),tl=a("p"),wh=r("Constructs a Wav2Vec2CTC tokenizer."),yh=d(),Ka=a("p"),kh=r("This tokenizer inherits from "),Ur=a("a"),Th=r("PreTrainedTokenizer"),$h=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),xh=d(),xo=a("div"),w(Qa.$$.fragment),Wh=d(),ol=a("p"),Vh=r(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),jh=d(),Rr=a("div"),w(Ya.$$.fragment),Fh=d(),Xe=a("div"),w(es.$$.fragment),Ch=d(),al=a("p"),Eh=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ph=d(),ts=a("p"),qh=r("Similar to doing "),sl=a("code"),zh=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Mh=r("."),Ah=d(),w(Wo.$$.fragment),Lh=d(),Vo=a("div"),w(os.$$.fragment),Dh=d(),nl=a("p"),Oh=r("Convert a list of lists of token ids into a list of strings by calling decode."),id=d(),Nt=a("h2"),jo=a("a"),rl=a("span"),w(as.$$.fragment),Sh=d(),il=a("span"),Nh=r("Wav2Vec2FeatureExtractor"),ld=d(),Ue=a("div"),w(ss.$$.fragment),Ih=d(),ll=a("p"),Bh=r("Constructs a Wav2Vec2 feature extractor."),Uh=d(),ns=a("p"),Rh=r("This feature extractor inherits from "),Hr=a("a"),Hh=r("SequenceFeatureExtractor"),Xh=r(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Gh=d(),Fo=a("div"),w(rs.$$.fragment),Jh=d(),cl=a("p"),Zh=r("Main method to featurize and prepare for the model one or several sequence(s). sequences."),cd=d(),It=a("h2"),Co=a("a"),dl=a("span"),w(is.$$.fragment),Kh=d(),pl=a("span"),Qh=r("Wav2Vec2Processor"),dd=d(),M=a("div"),w(ls.$$.fragment),Yh=d(),hl=a("p"),em=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),tm=d(),qe=a("p"),Xr=a("a"),om=r("Wav2Vec2Processor"),am=r(" offers all the functionalities of "),Gr=a("a"),sm=r("Wav2Vec2FeatureExtractor"),nm=r(" and "),Jr=a("a"),rm=r("PreTrainedTokenizer"),im=r(`.
See the docstring of `),cs=a("a"),ml=a("strong"),lm=r("call"),cm=r("()"),dm=r(" and "),Zr=a("a"),pm=r("decode()"),hm=r(" for more information."),mm=d(),Eo=a("div"),w(ds.$$.fragment),fm=d(),mt=a("p"),um=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ps=a("a"),fl=a("strong"),gm=r("call"),_m=r("()"),vm=r(` and returns its output. If used in the context
`),Kr=a("a"),bm=r("as_target_processor()"),wm=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),hs=a("a"),ul=a("strong"),ym=r("call"),km=r("()"),Tm=r(". Please refer to the docstring of the above two methods for more information."),$m=d(),Po=a("div"),w(ms.$$.fragment),xm=d(),ft=a("p"),Wm=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Qr=a("a"),Vm=r("pad()"),jm=r(` and returns its output. If used in the context
`),Yr=a("a"),Fm=r("as_target_processor()"),Cm=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ei=a("a"),Em=r("pad()"),Pm=r(". Please refer to the docstring of the above two methods for more information."),qm=d(),ti=a("div"),w(fs.$$.fragment),zm=d(),Wt=a("div"),w(us.$$.fragment),Mm=d(),gs=a("p"),Am=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),oi=a("a"),Lm=r("from_pretrained()"),Dm=r(" method."),Om=d(),w(qo.$$.fragment),Sm=d(),zo=a("div"),w(_s.$$.fragment),Nm=d(),vs=a("p"),Im=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),ai=a("a"),Bm=r("batch_decode()"),Um=r(`. Please
refer to the docstring of this method for more information.`),Rm=d(),Mo=a("div"),w(bs.$$.fragment),Hm=d(),ws=a("p"),Xm=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),si=a("a"),Gm=r("decode()"),Jm=r(`. Please refer
to the docstring of this method for more information.`),Zm=d(),Ao=a("div"),w(ys.$$.fragment),Km=d(),gl=a("p"),Qm=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),pd=d(),Bt=a("h2"),Lo=a("a"),_l=a("span"),w(ks.$$.fragment),Ym=d(),vl=a("span"),ef=r("Wav2Vec2ProcessorWithLM"),hd=d(),N=a("div"),w(Ts.$$.fragment),tf=d(),bl=a("p"),of=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),af=d(),Do=a("div"),w($s.$$.fragment),sf=d(),ut=a("p"),nf=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),xs=a("a"),wl=a("strong"),rf=r("call"),lf=r("()"),cf=r(` and returns its output. If used in the context
`),ni=a("a"),df=r("as_target_processor()"),pf=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ws=a("a"),yl=a("strong"),hf=r("call"),mf=r("()"),ff=r(`. Please refer to the docstring of the above two
methods for more information.`),uf=d(),Oo=a("div"),w(Vs.$$.fragment),gf=d(),gt=a("p"),_f=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ri=a("a"),vf=r("pad()"),bf=r(` and returns its output. If used in the context
`),ii=a("a"),wf=r("as_target_processor()"),yf=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),li=a("a"),kf=r("pad()"),Tf=r(`. Please refer to the docstring of the above two methods
for more information.`),$f=d(),Vt=a("div"),w(js.$$.fragment),xf=d(),Fs=a("p"),Wf=r("Instantiate a "),ci=a("a"),Vf=r("Wav2Vec2ProcessorWithLM"),jf=r(" from a pretrained Wav2Vec2 processor."),Ff=d(),w(So.$$.fragment),Cf=d(),di=a("div"),w(Cs.$$.fragment),Ef=d(),jt=a("div"),w(Es.$$.fragment),Pf=d(),kl=a("p"),qf=r("Batch decode output logits to audio transcription with language model support."),zf=d(),w(No.$$.fragment),Mf=d(),Ft=a("div"),w(Ps.$$.fragment),Af=d(),Tl=a("p"),Lf=r("Decode output logits to audio transcription with language model support."),Df=d(),w(Io.$$.fragment),Of=d(),Bo=a("div"),w(qs.$$.fragment),Sf=d(),$l=a("p"),Nf=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),md=d(),Ut=a("h2"),Uo=a("a"),xl=a("span"),w(zs.$$.fragment),If=d(),Wl=a("span"),Bf=r("Wav2Vec2 specific outputs"),fd=d(),Rt=a("div"),w(Ms.$$.fragment),Uf=d(),As=a("p"),Rf=r("Output type of "),Vl=a("code"),Hf=r("Wav2Vec2DecoderWithLM"),Xf=r(", with transcription."),ud=d(),Ht=a("div"),w(Ls.$$.fragment),Gf=d(),Ds=a("p"),Jf=r("Output type of "),jl=a("code"),Zf=r("Wav2Vec2BaseModelOutput"),Kf=r(", with potential hidden states and attentions."),gd=d(),Xt=a("div"),w(Os.$$.fragment),Qf=d(),Ss=a("p"),Yf=r("Output type of "),pi=a("a"),eu=r("Wav2Vec2ForPreTraining"),tu=r(", with potential hidden states and attentions."),_d=d(),_t=a("div"),w(Ns.$$.fragment),ou=d(),Is=a("p"),au=r("Output type of "),Fl=a("code"),su=r("FlaxWav2Vec2BaseModelOutput"),nu=r(", with potential hidden states and attentions."),ru=d(),Ro=a("div"),w(Bs.$$.fragment),iu=d(),Cl=a("p"),lu=r("\u201CReturns a new object replacing the specified fields with new values."),vd=d(),vt=a("div"),w(Us.$$.fragment),cu=d(),Rs=a("p"),du=r("Output type of "),El=a("code"),pu=r("FlaxWav2Vec2ForPreTrainingOutput"),hu=r(", with potential hidden states and attentions."),mu=d(),Ho=a("div"),w(Hs.$$.fragment),fu=d(),Pl=a("p"),uu=r("\u201CReturns a new object replacing the specified fields with new values."),bd=d(),Gt=a("h2"),Xo=a("a"),ql=a("span"),w(Xs.$$.fragment),gu=d(),zl=a("span"),_u=r("Wav2Vec2Model"),wd=d(),xe=a("div"),w(Gs.$$.fragment),vu=d(),Js=a("p"),bu=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Zs=a("a"),wu=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),yu=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ku=d(),Ks=a("p"),Tu=r("This model inherits from "),hi=a("a"),$u=r("PreTrainedModel"),xu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Wu=d(),Qs=a("p"),Vu=r("This model is a PyTorch "),Ys=a("a"),ju=r("torch.nn.Module"),Fu=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cu=d(),Ge=a("div"),w(en.$$.fragment),Eu=d(),Jt=a("p"),Pu=r("The "),mi=a("a"),qu=r("Wav2Vec2Model"),zu=r(" forward method, overrides the "),Ml=a("code"),Mu=r("__call__"),Au=r(" special method."),Lu=d(),w(Go.$$.fragment),Du=d(),w(Jo.$$.fragment),yd=d(),Zt=a("h2"),Zo=a("a"),Al=a("span"),w(tn.$$.fragment),Ou=d(),Ll=a("span"),Su=r("Wav2Vec2ForCTC"),kd=d(),We=a("div"),w(on.$$.fragment),Nu=d(),Kt=a("p"),Iu=r("Wav2Vec2 Model with a "),Dl=a("code"),Bu=r("language modeling"),Uu=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),an=a("a"),Ru=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Hu=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Xu=d(),sn=a("p"),Gu=r("This model inherits from "),fi=a("a"),Ju=r("PreTrainedModel"),Zu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ku=d(),nn=a("p"),Qu=r("This model is a PyTorch "),rn=a("a"),Yu=r("torch.nn.Module"),eg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tg=d(),ze=a("div"),w(ln.$$.fragment),og=d(),Qt=a("p"),ag=r("The "),ui=a("a"),sg=r("Wav2Vec2ForCTC"),ng=r(" forward method, overrides the "),Ol=a("code"),rg=r("__call__"),ig=r(" special method."),lg=d(),w(Ko.$$.fragment),cg=d(),w(Qo.$$.fragment),dg=d(),w(Yo.$$.fragment),Td=d(),Yt=a("h2"),ea=a("a"),Sl=a("span"),w(cn.$$.fragment),pg=d(),Nl=a("span"),hg=r("Wav2Vec2ForSequenceClassification"),$d=d(),ne=a("div"),w(dn.$$.fragment),mg=d(),Il=a("p"),fg=r(`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),ug=d(),pn=a("p"),gg=r("Wav2Vec2 was proposed in "),hn=a("a"),_g=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),vg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),bg=d(),mn=a("p"),wg=r("This model inherits from "),gi=a("a"),yg=r("PreTrainedModel"),kg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Tg=d(),fn=a("p"),$g=r("This model is a PyTorch "),un=a("a"),xg=r("torch.nn.Module"),Wg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vg=d(),Me=a("div"),w(gn.$$.fragment),jg=d(),eo=a("p"),Fg=r("The "),_i=a("a"),Cg=r("Wav2Vec2ForSequenceClassification"),Eg=r(" forward method, overrides the "),Bl=a("code"),Pg=r("__call__"),qg=r(" special method."),zg=d(),w(ta.$$.fragment),Mg=d(),w(oa.$$.fragment),Ag=d(),w(aa.$$.fragment),xd=d(),to=a("h2"),sa=a("a"),Ul=a("span"),w(_n.$$.fragment),Lg=d(),Rl=a("span"),Dg=r("Wav2Vec2ForAudioFrameClassification"),Wd=d(),re=a("div"),w(vn.$$.fragment),Og=d(),Hl=a("p"),Sg=r("Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),Ng=d(),bn=a("p"),Ig=r("Wav2Vec2 was proposed in "),wn=a("a"),Bg=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ug=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Rg=d(),yn=a("p"),Hg=r("This model inherits from "),vi=a("a"),Xg=r("PreTrainedModel"),Gg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Jg=d(),kn=a("p"),Zg=r("This model is a PyTorch "),Tn=a("a"),Kg=r("torch.nn.Module"),Qg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yg=d(),Je=a("div"),w($n.$$.fragment),e_=d(),oo=a("p"),t_=r("The "),bi=a("a"),o_=r("Wav2Vec2ForAudioFrameClassification"),a_=r(" forward method, overrides the "),Xl=a("code"),s_=r("__call__"),n_=r(" special method."),r_=d(),w(na.$$.fragment),i_=d(),w(ra.$$.fragment),Vd=d(),ao=a("h2"),ia=a("a"),Gl=a("span"),w(xn.$$.fragment),l_=d(),Jl=a("span"),c_=r("Wav2Vec2ForXVector"),jd=d(),ie=a("div"),w(Wn.$$.fragment),d_=d(),Zl=a("p"),p_=r("Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),h_=d(),Vn=a("p"),m_=r("Wav2Vec2 was proposed in "),jn=a("a"),f_=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),u_=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),g_=d(),Fn=a("p"),__=r("This model inherits from "),wi=a("a"),v_=r("PreTrainedModel"),b_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),w_=d(),Cn=a("p"),y_=r("This model is a PyTorch "),En=a("a"),k_=r("torch.nn.Module"),T_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$_=d(),Ze=a("div"),w(Pn.$$.fragment),x_=d(),so=a("p"),W_=r("The "),yi=a("a"),V_=r("Wav2Vec2ForXVector"),j_=r(" forward method, overrides the "),Kl=a("code"),F_=r("__call__"),C_=r(" special method."),E_=d(),w(la.$$.fragment),P_=d(),w(ca.$$.fragment),Fd=d(),no=a("h2"),da=a("a"),Ql=a("span"),w(qn.$$.fragment),q_=d(),Yl=a("span"),z_=r("Wav2Vec2ForPreTraining"),Cd=d(),Ve=a("div"),w(zn.$$.fragment),M_=d(),ro=a("p"),A_=r("Wav2Vec2 Model with a quantizer and "),ec=a("code"),L_=r("VQ"),D_=r(` head on top.
Wav2Vec2 was proposed in `),Mn=a("a"),O_=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),S_=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),N_=d(),An=a("p"),I_=r("This model inherits from "),ki=a("a"),B_=r("PreTrainedModel"),U_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),R_=d(),Ln=a("p"),H_=r("This model is a PyTorch "),Dn=a("a"),X_=r("torch.nn.Module"),G_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),J_=d(),Ke=a("div"),w(On.$$.fragment),Z_=d(),io=a("p"),K_=r("The "),Ti=a("a"),Q_=r("Wav2Vec2ForPreTraining"),Y_=r(" forward method, overrides the "),tc=a("code"),ev=r("__call__"),tv=r(" special method."),ov=d(),w(pa.$$.fragment),av=d(),w(ha.$$.fragment),Ed=d(),lo=a("h2"),ma=a("a"),oc=a("span"),w(Sn.$$.fragment),sv=d(),ac=a("span"),nv=r("TFWav2Vec2Model"),Pd=d(),le=a("div"),w(Nn.$$.fragment),rv=d(),sc=a("p"),iv=r("The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),lv=d(),In=a("p"),cv=r("This model inherits from "),$i=a("a"),dv=r("TFPreTrainedModel"),pv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hv=d(),Bn=a("p"),mv=r("This model is also a "),Un=a("a"),fv=r("tf.keras.Model"),uv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gv=d(),w(fa.$$.fragment),_v=d(),Qe=a("div"),w(Rn.$$.fragment),vv=d(),co=a("p"),bv=r("The "),xi=a("a"),wv=r("TFWav2Vec2Model"),yv=r(" forward method, overrides the "),nc=a("code"),kv=r("__call__"),Tv=r(" special method."),$v=d(),w(ua.$$.fragment),xv=d(),w(ga.$$.fragment),qd=d(),po=a("h2"),_a=a("a"),rc=a("span"),w(Hn.$$.fragment),Wv=d(),ic=a("span"),Vv=r("TFWav2Vec2ForCTC"),zd=d(),ce=a("div"),w(Xn.$$.fragment),jv=d(),Gn=a("p"),Fv=r("TFWav2Vec2 Model with a "),lc=a("code"),Cv=r("language modeling"),Ev=r(" head on top for Connectionist Temporal Classification (CTC)."),Pv=d(),Jn=a("p"),qv=r("This model inherits from "),Wi=a("a"),zv=r("TFPreTrainedModel"),Mv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Av=d(),Zn=a("p"),Lv=r("This model is also a "),Kn=a("a"),Dv=r("tf.keras.Model"),Ov=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sv=d(),w(va.$$.fragment),Nv=d(),Ye=a("div"),w(Qn.$$.fragment),Iv=d(),ho=a("p"),Bv=r("The "),Vi=a("a"),Uv=r("TFWav2Vec2ForCTC"),Rv=r(" forward method, overrides the "),cc=a("code"),Hv=r("__call__"),Xv=r(" special method."),Gv=d(),w(ba.$$.fragment),Jv=d(),w(wa.$$.fragment),Md=d(),mo=a("h2"),ya=a("a"),dc=a("span"),w(Yn.$$.fragment),Zv=d(),pc=a("span"),Kv=r("FlaxWav2Vec2Model"),Ad=d(),K=a("div"),w(er.$$.fragment),Qv=d(),tr=a("p"),Yv=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),or=a("a"),e2=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),t2=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),o2=d(),ar=a("p"),a2=r("This model inherits from "),ji=a("a"),s2=r("FlaxPreTrainedModel"),n2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r2=d(),sr=a("p"),i2=r(`This model is also a Flax Linen
`),nr=a("a"),l2=r("flax.nn.Module"),c2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),d2=d(),hc=a("p"),p2=r("Finally, this model supports inherent JAX features such as:"),h2=d(),bt=a("ul"),mc=a("li"),rr=a("a"),m2=r("Just-In-Time (JIT) compilation"),f2=d(),fc=a("li"),ir=a("a"),u2=r("Automatic Differentiation"),g2=d(),uc=a("li"),lr=a("a"),_2=r("Vectorization"),v2=d(),gc=a("li"),cr=a("a"),b2=r("Parallelization"),w2=d(),et=a("div"),w(dr.$$.fragment),y2=d(),fo=a("p"),k2=r("The "),_c=a("code"),T2=r("FlaxWav2Vec2PreTrainedModel"),$2=r(" forward method, overrides the "),vc=a("code"),x2=r("__call__"),W2=r(" special method."),V2=d(),w(ka.$$.fragment),j2=d(),w(Ta.$$.fragment),Ld=d(),uo=a("h2"),$a=a("a"),bc=a("span"),w(pr.$$.fragment),F2=d(),wc=a("span"),C2=r("FlaxWav2Vec2ForCTC"),Dd=d(),Q=a("div"),w(hr.$$.fragment),E2=d(),go=a("p"),P2=r("Wav2Vec2 Model with a "),yc=a("code"),q2=r("language modeling"),z2=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),mr=a("a"),M2=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),A2=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),L2=d(),fr=a("p"),D2=r("This model inherits from "),Fi=a("a"),O2=r("FlaxPreTrainedModel"),S2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),N2=d(),ur=a("p"),I2=r(`This model is also a Flax Linen
`),gr=a("a"),B2=r("flax.nn.Module"),U2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),R2=d(),kc=a("p"),H2=r("Finally, this model supports inherent JAX features such as:"),X2=d(),wt=a("ul"),Tc=a("li"),_r=a("a"),G2=r("Just-In-Time (JIT) compilation"),J2=d(),$c=a("li"),vr=a("a"),Z2=r("Automatic Differentiation"),K2=d(),xc=a("li"),br=a("a"),Q2=r("Vectorization"),Y2=d(),Wc=a("li"),wr=a("a"),eb=r("Parallelization"),tb=d(),tt=a("div"),w(yr.$$.fragment),ob=d(),_o=a("p"),ab=r("The "),Vc=a("code"),sb=r("FlaxWav2Vec2PreTrainedModel"),nb=r(" forward method, overrides the "),jc=a("code"),rb=r("__call__"),ib=r(" special method."),lb=d(),w(xa.$$.fragment),cb=d(),w(Wa.$$.fragment),Od=d(),vo=a("h2"),Va=a("a"),Fc=a("span"),w(kr.$$.fragment),db=d(),Cc=a("span"),pb=r("FlaxWav2Vec2ForPreTraining"),Sd=d(),Y=a("div"),w(Tr.$$.fragment),hb=d(),bo=a("p"),mb=r("Wav2Vec2 Model with a quantizer and "),Ec=a("code"),fb=r("VQ"),ub=r(` head on top.
Wav2Vec2 was proposed in `),$r=a("a"),gb=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),_b=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),vb=d(),xr=a("p"),bb=r("This model inherits from "),Ci=a("a"),wb=r("FlaxPreTrainedModel"),yb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kb=d(),Wr=a("p"),Tb=r(`This model is also a Flax Linen
`),Vr=a("a"),$b=r("flax.nn.Module"),xb=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wb=d(),Pc=a("p"),Vb=r("Finally, this model supports inherent JAX features such as:"),jb=d(),yt=a("ul"),qc=a("li"),jr=a("a"),Fb=r("Just-In-Time (JIT) compilation"),Cb=d(),zc=a("li"),Fr=a("a"),Eb=r("Automatic Differentiation"),Pb=d(),Mc=a("li"),Cr=a("a"),qb=r("Vectorization"),zb=d(),Ac=a("li"),Er=a("a"),Mb=r("Parallelization"),Ab=d(),ot=a("div"),w(Pr.$$.fragment),Lb=d(),wo=a("p"),Db=r("The "),Ei=a("a"),Ob=r("FlaxWav2Vec2ForPreTraining"),Sb=r(" forward method, overrides the "),Lc=a("code"),Nb=r("__call__"),Ib=r(" special method."),Bb=d(),w(ja.$$.fragment),Ub=d(),w(Fa.$$.fragment),this.h()},l(o){const g=w0('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),b=p(o),f=s(o,"H1",{class:!0});var qr=n(f);m=s(qr,"A",{id:!0,class:!0,href:!0});var Dc=n(m);v=s(Dc,"SPAN",{});var Oc=n(v);y(l.$$.fragment,Oc),Oc.forEach(t),Dc.forEach(t),u=p(qr),j=s(qr,"SPAN",{});var Sc=n(j);O=i(Sc,"Wav2Vec2"),Sc.forEach(t),qr.forEach(t),q=p(o),C=s(o,"H2",{class:!0});var zr=n(C);A=s(zr,"A",{id:!0,class:!0,href:!0});var Nc=n(A);L=s(Nc,"SPAN",{});var Ic=n(L);y(H.$$.fragment,Ic),Ic.forEach(t),Nc.forEach(t),S=p(zr),P=s(zr,"SPAN",{});var Bc=n(P);je=i(Bc,"Overview"),Bc.forEach(t),zr.forEach(t),ge=p(o),B=s(o,"P",{});var Mr=n(B);U=i(Mr,"The Wav2Vec2 model was proposed in "),_e=s(Mr,"A",{href:!0,rel:!0});var Uc=n(_e);Se=i(Uc,"wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),Uc.forEach(t),z=i(Mr," by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),Mr.forEach(t),I=p(o),Fe=s(o,"P",{});var Rc=n(Fe);ve=i(Rc,"The abstract from the paper is the following:"),Rc.forEach(t),Re=p(o),Ce=s(o,"P",{});var Hc=n(Ce);oe=s(Hc,"EM",{});var Xc=n(oe);lt=i(Xc,`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Xc.forEach(t),Hc.forEach(t),He=p(o),D=s(o,"P",{});var Gc=n(D);ct=i(Gc,"Tips:"),Gc.forEach(t),de=p(o),pe=s(o,"UL",{});var Ar=n(pe);Ne=s(Ar,"LI",{});var Jc=n(Ne);be=i(Jc,"Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Jc.forEach(t),dt=p(Ar),we=s(Ar,"LI",{});var Lr=n(we);ae=i(Lr,`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ee=s(Lr,"A",{href:!0});var Zc=n(Ee);ye=i(Zc,"Wav2Vec2CTCTokenizer"),Zc.forEach(t),pt=i(Lr,"."),Lr.forEach(t),Ar.forEach(t),V=p(o),E=s(o,"P",{});var Dr=n(E);Ie=i(Dr,"This model was contributed by "),Be=s(Dr,"A",{href:!0,rel:!0});var Kc=n(Be);Mt=i(Kc,"patrickvonplaten"),Kc.forEach(t),se=i(Dr,"."),Dr.forEach(t),$t=p(o),ke=s(o,"H2",{class:!0});var Or=n(ke);Pe=s(Or,"A",{id:!0,class:!0,href:!0});var Qc=n(Pe);X=s(Qc,"SPAN",{});var Yc=n(X);y(G.$$.fragment,Yc),Yc.forEach(t),Qc.forEach(t),At=p(Or),ht=s(Or,"SPAN",{});var ed=n(ht);Te=i(ed,"Wav2Vec2Config"),ed.forEach(t),Or.forEach(t),xt=p(o),J=s(o,"DIV",{class:!0});var kt=n(J);y($e.$$.fragment,kt),Lt=p(kt),Dt=s(kt,"P",{});var yo=n(Dt);nh=i(yo,"This is the configuration class to store the configuration of a "),Nr=s(yo,"A",{href:!0});var td=n(Nr);rh=i(td,"Wav2Vec2Model"),td.forEach(t),ih=i(yo,`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ga=s(yo,"A",{href:!0,rel:!0});var od=n(Ga);lh=i(od,"facebook/wav2vec2-base-960h"),od.forEach(t),ch=i(yo," architecture."),yo.forEach(t),dh=p(kt),Ot=s(kt,"P",{});var ko=n(Ot);ph=i(ko,"Configuration objects inherit from "),Ir=s(ko,"A",{href:!0});var ad=n(Ir);hh=i(ad,"PretrainedConfig"),ad.forEach(t),mh=i(ko,` and can be used to control the model outputs. Read the
documentation from `),Br=s(ko,"A",{href:!0});var sd=n(Br);fh=i(sd,"PretrainedConfig"),sd.forEach(t),uh=i(ko," for more information."),ko.forEach(t),gh=p(kt),y(To.$$.fragment,kt),kt.forEach(t),nd=p(o),St=s(o,"H2",{class:!0});var Sr=n(St);$o=s(Sr,"A",{id:!0,class:!0,href:!0});var Zb=n($o);Yi=s(Zb,"SPAN",{});var Kb=n(Yi);y(Ja.$$.fragment,Kb),Kb.forEach(t),Zb.forEach(t),_h=p(Sr),el=s(Sr,"SPAN",{});var Qb=n(el);vh=i(Qb,"Wav2Vec2CTCTokenizer"),Qb.forEach(t),Sr.forEach(t),rd=p(o),Z=s(o,"DIV",{class:!0});var Ae=n(Z);y(Za.$$.fragment,Ae),bh=p(Ae),tl=s(Ae,"P",{});var Yb=n(tl);wh=i(Yb,"Constructs a Wav2Vec2CTC tokenizer."),Yb.forEach(t),yh=p(Ae),Ka=s(Ae,"P",{});var Id=n(Ka);kh=i(Id,"This tokenizer inherits from "),Ur=s(Id,"A",{href:!0});var ew=n(Ur);Th=i(ew,"PreTrainedTokenizer"),ew.forEach(t),$h=i(Id,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Id.forEach(t),xh=p(Ae),xo=s(Ae,"DIV",{class:!0});var Bd=n(xo);y(Qa.$$.fragment,Bd),Wh=p(Bd),ol=s(Bd,"P",{});var tw=n(ol);Vh=i(tw,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),tw.forEach(t),Bd.forEach(t),jh=p(Ae),Rr=s(Ae,"DIV",{class:!0});var ow=n(Rr);y(Ya.$$.fragment,ow),ow.forEach(t),Fh=p(Ae),Xe=s(Ae,"DIV",{class:!0});var Ca=n(Xe);y(es.$$.fragment,Ca),Ch=p(Ca),al=s(Ca,"P",{});var aw=n(al);Eh=i(aw,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),aw.forEach(t),Ph=p(Ca),ts=s(Ca,"P",{});var Ud=n(ts);qh=i(Ud,"Similar to doing "),sl=s(Ud,"CODE",{});var sw=n(sl);zh=i(sw,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),sw.forEach(t),Mh=i(Ud,"."),Ud.forEach(t),Ah=p(Ca),y(Wo.$$.fragment,Ca),Ca.forEach(t),Lh=p(Ae),Vo=s(Ae,"DIV",{class:!0});var Rd=n(Vo);y(os.$$.fragment,Rd),Dh=p(Rd),nl=s(Rd,"P",{});var nw=n(nl);Oh=i(nw,"Convert a list of lists of token ids into a list of strings by calling decode."),nw.forEach(t),Rd.forEach(t),Ae.forEach(t),id=p(o),Nt=s(o,"H2",{class:!0});var Hd=n(Nt);jo=s(Hd,"A",{id:!0,class:!0,href:!0});var rw=n(jo);rl=s(rw,"SPAN",{});var iw=n(rl);y(as.$$.fragment,iw),iw.forEach(t),rw.forEach(t),Sh=p(Hd),il=s(Hd,"SPAN",{});var lw=n(il);Nh=i(lw,"Wav2Vec2FeatureExtractor"),lw.forEach(t),Hd.forEach(t),ld=p(o),Ue=s(o,"DIV",{class:!0});var Ea=n(Ue);y(ss.$$.fragment,Ea),Ih=p(Ea),ll=s(Ea,"P",{});var cw=n(ll);Bh=i(cw,"Constructs a Wav2Vec2 feature extractor."),cw.forEach(t),Uh=p(Ea),ns=s(Ea,"P",{});var Xd=n(ns);Rh=i(Xd,"This feature extractor inherits from "),Hr=s(Xd,"A",{href:!0});var dw=n(Hr);Hh=i(dw,"SequenceFeatureExtractor"),dw.forEach(t),Xh=i(Xd,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Xd.forEach(t),Gh=p(Ea),Fo=s(Ea,"DIV",{class:!0});var Gd=n(Fo);y(rs.$$.fragment,Gd),Jh=p(Gd),cl=s(Gd,"P",{});var pw=n(cl);Zh=i(pw,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),pw.forEach(t),Gd.forEach(t),Ea.forEach(t),cd=p(o),It=s(o,"H2",{class:!0});var Jd=n(It);Co=s(Jd,"A",{id:!0,class:!0,href:!0});var hw=n(Co);dl=s(hw,"SPAN",{});var mw=n(dl);y(is.$$.fragment,mw),mw.forEach(t),hw.forEach(t),Kh=p(Jd),pl=s(Jd,"SPAN",{});var fw=n(pl);Qh=i(fw,"Wav2Vec2Processor"),fw.forEach(t),Jd.forEach(t),dd=p(o),M=s(o,"DIV",{class:!0});var R=n(M);y(ls.$$.fragment,R),Yh=p(R),hl=s(R,"P",{});var uw=n(hl);em=i(uw,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),uw.forEach(t),tm=p(R),qe=s(R,"P",{});var Tt=n(qe);Xr=s(Tt,"A",{href:!0});var gw=n(Xr);om=i(gw,"Wav2Vec2Processor"),gw.forEach(t),am=i(Tt," offers all the functionalities of "),Gr=s(Tt,"A",{href:!0});var _w=n(Gr);sm=i(_w,"Wav2Vec2FeatureExtractor"),_w.forEach(t),nm=i(Tt," and "),Jr=s(Tt,"A",{href:!0});var vw=n(Jr);rm=i(vw,"PreTrainedTokenizer"),vw.forEach(t),im=i(Tt,`.
See the docstring of `),cs=s(Tt,"A",{href:!0});var Rb=n(cs);ml=s(Rb,"STRONG",{});var bw=n(ml);lm=i(bw,"call"),bw.forEach(t),cm=i(Rb,"()"),Rb.forEach(t),dm=i(Tt," and "),Zr=s(Tt,"A",{href:!0});var ww=n(Zr);pm=i(ww,"decode()"),ww.forEach(t),hm=i(Tt," for more information."),Tt.forEach(t),mm=p(R),Eo=s(R,"DIV",{class:!0});var Zd=n(Eo);y(ds.$$.fragment,Zd),fm=p(Zd),mt=s(Zd,"P",{});var Pa=n(mt);um=i(Pa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ps=s(Pa,"A",{href:!0});var Hb=n(ps);fl=s(Hb,"STRONG",{});var yw=n(fl);gm=i(yw,"call"),yw.forEach(t),_m=i(Hb,"()"),Hb.forEach(t),vm=i(Pa,` and returns its output. If used in the context
`),Kr=s(Pa,"A",{href:!0});var kw=n(Kr);bm=i(kw,"as_target_processor()"),kw.forEach(t),wm=i(Pa,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),hs=s(Pa,"A",{href:!0});var Xb=n(hs);ul=s(Xb,"STRONG",{});var Tw=n(ul);ym=i(Tw,"call"),Tw.forEach(t),km=i(Xb,"()"),Xb.forEach(t),Tm=i(Pa,". Please refer to the docstring of the above two methods for more information."),Pa.forEach(t),Zd.forEach(t),$m=p(R),Po=s(R,"DIV",{class:!0});var Kd=n(Po);y(ms.$$.fragment,Kd),xm=p(Kd),ft=s(Kd,"P",{});var qa=n(ft);Wm=i(qa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Qr=s(qa,"A",{href:!0});var $w=n(Qr);Vm=i($w,"pad()"),$w.forEach(t),jm=i(qa,` and returns its output. If used in the context
`),Yr=s(qa,"A",{href:!0});var xw=n(Yr);Fm=i(xw,"as_target_processor()"),xw.forEach(t),Cm=i(qa,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ei=s(qa,"A",{href:!0});var Ww=n(ei);Em=i(Ww,"pad()"),Ww.forEach(t),Pm=i(qa,". Please refer to the docstring of the above two methods for more information."),qa.forEach(t),Kd.forEach(t),qm=p(R),ti=s(R,"DIV",{class:!0});var Vw=n(ti);y(fs.$$.fragment,Vw),Vw.forEach(t),zm=p(R),Wt=s(R,"DIV",{class:!0});var Pi=n(Wt);y(us.$$.fragment,Pi),Mm=p(Pi),gs=s(Pi,"P",{});var Qd=n(gs);Am=i(Qd,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),oi=s(Qd,"A",{href:!0});var jw=n(oi);Lm=i(jw,"from_pretrained()"),jw.forEach(t),Dm=i(Qd," method."),Qd.forEach(t),Om=p(Pi),y(qo.$$.fragment,Pi),Pi.forEach(t),Sm=p(R),zo=s(R,"DIV",{class:!0});var Yd=n(zo);y(_s.$$.fragment,Yd),Nm=p(Yd),vs=s(Yd,"P",{});var ep=n(vs);Im=i(ep,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),ai=s(ep,"A",{href:!0});var Fw=n(ai);Bm=i(Fw,"batch_decode()"),Fw.forEach(t),Um=i(ep,`. Please
refer to the docstring of this method for more information.`),ep.forEach(t),Yd.forEach(t),Rm=p(R),Mo=s(R,"DIV",{class:!0});var tp=n(Mo);y(bs.$$.fragment,tp),Hm=p(tp),ws=s(tp,"P",{});var op=n(ws);Xm=i(op,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),si=s(op,"A",{href:!0});var Cw=n(si);Gm=i(Cw,"decode()"),Cw.forEach(t),Jm=i(op,`. Please refer
to the docstring of this method for more information.`),op.forEach(t),tp.forEach(t),Zm=p(R),Ao=s(R,"DIV",{class:!0});var ap=n(Ao);y(ys.$$.fragment,ap),Km=p(ap),gl=s(ap,"P",{});var Ew=n(gl);Qm=i(Ew,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),Ew.forEach(t),ap.forEach(t),R.forEach(t),pd=p(o),Bt=s(o,"H2",{class:!0});var sp=n(Bt);Lo=s(sp,"A",{id:!0,class:!0,href:!0});var Pw=n(Lo);_l=s(Pw,"SPAN",{});var qw=n(_l);y(ks.$$.fragment,qw),qw.forEach(t),Pw.forEach(t),Ym=p(sp),vl=s(sp,"SPAN",{});var zw=n(vl);ef=i(zw,"Wav2Vec2ProcessorWithLM"),zw.forEach(t),sp.forEach(t),hd=p(o),N=s(o,"DIV",{class:!0});var te=n(N);y(Ts.$$.fragment,te),tf=p(te),bl=s(te,"P",{});var Mw=n(bl);of=i(Mw,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),Mw.forEach(t),af=p(te),Do=s(te,"DIV",{class:!0});var np=n(Do);y($s.$$.fragment,np),sf=p(np),ut=s(np,"P",{});var za=n(ut);nf=i(za,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),xs=s(za,"A",{href:!0});var Gb=n(xs);wl=s(Gb,"STRONG",{});var Aw=n(wl);rf=i(Aw,"call"),Aw.forEach(t),lf=i(Gb,"()"),Gb.forEach(t),cf=i(za,` and returns its output. If used in the context
`),ni=s(za,"A",{href:!0});var Lw=n(ni);df=i(Lw,"as_target_processor()"),Lw.forEach(t),pf=i(za,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ws=s(za,"A",{href:!0});var Jb=n(Ws);yl=s(Jb,"STRONG",{});var Dw=n(yl);hf=i(Dw,"call"),Dw.forEach(t),mf=i(Jb,"()"),Jb.forEach(t),ff=i(za,`. Please refer to the docstring of the above two
methods for more information.`),za.forEach(t),np.forEach(t),uf=p(te),Oo=s(te,"DIV",{class:!0});var rp=n(Oo);y(Vs.$$.fragment,rp),gf=p(rp),gt=s(rp,"P",{});var Ma=n(gt);_f=i(Ma,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ri=s(Ma,"A",{href:!0});var Ow=n(ri);vf=i(Ow,"pad()"),Ow.forEach(t),bf=i(Ma,` and returns its output. If used in the context
`),ii=s(Ma,"A",{href:!0});var Sw=n(ii);wf=i(Sw,"as_target_processor()"),Sw.forEach(t),yf=i(Ma,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),li=s(Ma,"A",{href:!0});var Nw=n(li);kf=i(Nw,"pad()"),Nw.forEach(t),Tf=i(Ma,`. Please refer to the docstring of the above two methods
for more information.`),Ma.forEach(t),rp.forEach(t),$f=p(te),Vt=s(te,"DIV",{class:!0});var qi=n(Vt);y(js.$$.fragment,qi),xf=p(qi),Fs=s(qi,"P",{});var ip=n(Fs);Wf=i(ip,"Instantiate a "),ci=s(ip,"A",{href:!0});var Iw=n(ci);Vf=i(Iw,"Wav2Vec2ProcessorWithLM"),Iw.forEach(t),jf=i(ip," from a pretrained Wav2Vec2 processor."),ip.forEach(t),Ff=p(qi),y(So.$$.fragment,qi),qi.forEach(t),Cf=p(te),di=s(te,"DIV",{class:!0});var Bw=n(di);y(Cs.$$.fragment,Bw),Bw.forEach(t),Ef=p(te),jt=s(te,"DIV",{class:!0});var zi=n(jt);y(Es.$$.fragment,zi),Pf=p(zi),kl=s(zi,"P",{});var Uw=n(kl);qf=i(Uw,"Batch decode output logits to audio transcription with language model support."),Uw.forEach(t),zf=p(zi),y(No.$$.fragment,zi),zi.forEach(t),Mf=p(te),Ft=s(te,"DIV",{class:!0});var Mi=n(Ft);y(Ps.$$.fragment,Mi),Af=p(Mi),Tl=s(Mi,"P",{});var Rw=n(Tl);Lf=i(Rw,"Decode output logits to audio transcription with language model support."),Rw.forEach(t),Df=p(Mi),y(Io.$$.fragment,Mi),Mi.forEach(t),Of=p(te),Bo=s(te,"DIV",{class:!0});var lp=n(Bo);y(qs.$$.fragment,lp),Sf=p(lp),$l=s(lp,"P",{});var Hw=n($l);Nf=i(Hw,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),Hw.forEach(t),lp.forEach(t),te.forEach(t),md=p(o),Ut=s(o,"H2",{class:!0});var cp=n(Ut);Uo=s(cp,"A",{id:!0,class:!0,href:!0});var Xw=n(Uo);xl=s(Xw,"SPAN",{});var Gw=n(xl);y(zs.$$.fragment,Gw),Gw.forEach(t),Xw.forEach(t),If=p(cp),Wl=s(cp,"SPAN",{});var Jw=n(Wl);Bf=i(Jw,"Wav2Vec2 specific outputs"),Jw.forEach(t),cp.forEach(t),fd=p(o),Rt=s(o,"DIV",{class:!0});var dp=n(Rt);y(Ms.$$.fragment,dp),Uf=p(dp),As=s(dp,"P",{});var pp=n(As);Rf=i(pp,"Output type of "),Vl=s(pp,"CODE",{});var Zw=n(Vl);Hf=i(Zw,"Wav2Vec2DecoderWithLM"),Zw.forEach(t),Xf=i(pp,", with transcription."),pp.forEach(t),dp.forEach(t),ud=p(o),Ht=s(o,"DIV",{class:!0});var hp=n(Ht);y(Ls.$$.fragment,hp),Gf=p(hp),Ds=s(hp,"P",{});var mp=n(Ds);Jf=i(mp,"Output type of "),jl=s(mp,"CODE",{});var Kw=n(jl);Zf=i(Kw,"Wav2Vec2BaseModelOutput"),Kw.forEach(t),Kf=i(mp,", with potential hidden states and attentions."),mp.forEach(t),hp.forEach(t),gd=p(o),Xt=s(o,"DIV",{class:!0});var fp=n(Xt);y(Os.$$.fragment,fp),Qf=p(fp),Ss=s(fp,"P",{});var up=n(Ss);Yf=i(up,"Output type of "),pi=s(up,"A",{href:!0});var Qw=n(pi);eu=i(Qw,"Wav2Vec2ForPreTraining"),Qw.forEach(t),tu=i(up,", with potential hidden states and attentions."),up.forEach(t),fp.forEach(t),_d=p(o),_t=s(o,"DIV",{class:!0});var Ai=n(_t);y(Ns.$$.fragment,Ai),ou=p(Ai),Is=s(Ai,"P",{});var gp=n(Is);au=i(gp,"Output type of "),Fl=s(gp,"CODE",{});var Yw=n(Fl);su=i(Yw,"FlaxWav2Vec2BaseModelOutput"),Yw.forEach(t),nu=i(gp,", with potential hidden states and attentions."),gp.forEach(t),ru=p(Ai),Ro=s(Ai,"DIV",{class:!0});var _p=n(Ro);y(Bs.$$.fragment,_p),iu=p(_p),Cl=s(_p,"P",{});var ey=n(Cl);lu=i(ey,"\u201CReturns a new object replacing the specified fields with new values."),ey.forEach(t),_p.forEach(t),Ai.forEach(t),vd=p(o),vt=s(o,"DIV",{class:!0});var Li=n(vt);y(Us.$$.fragment,Li),cu=p(Li),Rs=s(Li,"P",{});var vp=n(Rs);du=i(vp,"Output type of "),El=s(vp,"CODE",{});var ty=n(El);pu=i(ty,"FlaxWav2Vec2ForPreTrainingOutput"),ty.forEach(t),hu=i(vp,", with potential hidden states and attentions."),vp.forEach(t),mu=p(Li),Ho=s(Li,"DIV",{class:!0});var bp=n(Ho);y(Hs.$$.fragment,bp),fu=p(bp),Pl=s(bp,"P",{});var oy=n(Pl);uu=i(oy,"\u201CReturns a new object replacing the specified fields with new values."),oy.forEach(t),bp.forEach(t),Li.forEach(t),bd=p(o),Gt=s(o,"H2",{class:!0});var wp=n(Gt);Xo=s(wp,"A",{id:!0,class:!0,href:!0});var ay=n(Xo);ql=s(ay,"SPAN",{});var sy=n(ql);y(Xs.$$.fragment,sy),sy.forEach(t),ay.forEach(t),gu=p(wp),zl=s(wp,"SPAN",{});var ny=n(zl);_u=i(ny,"Wav2Vec2Model"),ny.forEach(t),wp.forEach(t),wd=p(o),xe=s(o,"DIV",{class:!0});var Ct=n(xe);y(Gs.$$.fragment,Ct),vu=p(Ct),Js=s(Ct,"P",{});var yp=n(Js);bu=i(yp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Zs=s(yp,"A",{href:!0,rel:!0});var ry=n(Zs);wu=i(ry,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ry.forEach(t),yu=i(yp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),yp.forEach(t),ku=p(Ct),Ks=s(Ct,"P",{});var kp=n(Ks);Tu=i(kp,"This model inherits from "),hi=s(kp,"A",{href:!0});var iy=n(hi);$u=i(iy,"PreTrainedModel"),iy.forEach(t),xu=i(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),kp.forEach(t),Wu=p(Ct),Qs=s(Ct,"P",{});var Tp=n(Qs);Vu=i(Tp,"This model is a PyTorch "),Ys=s(Tp,"A",{href:!0,rel:!0});var ly=n(Ys);ju=i(ly,"torch.nn.Module"),ly.forEach(t),Fu=i(Tp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tp.forEach(t),Cu=p(Ct),Ge=s(Ct,"DIV",{class:!0});var Aa=n(Ge);y(en.$$.fragment,Aa),Eu=p(Aa),Jt=s(Aa,"P",{});var Di=n(Jt);Pu=i(Di,"The "),mi=s(Di,"A",{href:!0});var cy=n(mi);qu=i(cy,"Wav2Vec2Model"),cy.forEach(t),zu=i(Di," forward method, overrides the "),Ml=s(Di,"CODE",{});var dy=n(Ml);Mu=i(dy,"__call__"),dy.forEach(t),Au=i(Di," special method."),Di.forEach(t),Lu=p(Aa),y(Go.$$.fragment,Aa),Du=p(Aa),y(Jo.$$.fragment,Aa),Aa.forEach(t),Ct.forEach(t),yd=p(o),Zt=s(o,"H2",{class:!0});var $p=n(Zt);Zo=s($p,"A",{id:!0,class:!0,href:!0});var py=n(Zo);Al=s(py,"SPAN",{});var hy=n(Al);y(tn.$$.fragment,hy),hy.forEach(t),py.forEach(t),Ou=p($p),Ll=s($p,"SPAN",{});var my=n(Ll);Su=i(my,"Wav2Vec2ForCTC"),my.forEach(t),$p.forEach(t),kd=p(o),We=s(o,"DIV",{class:!0});var Et=n(We);y(on.$$.fragment,Et),Nu=p(Et),Kt=s(Et,"P",{});var Oi=n(Kt);Iu=i(Oi,"Wav2Vec2 Model with a "),Dl=s(Oi,"CODE",{});var fy=n(Dl);Bu=i(fy,"language modeling"),fy.forEach(t),Uu=i(Oi,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),an=s(Oi,"A",{href:!0,rel:!0});var uy=n(an);Ru=i(uy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),uy.forEach(t),Hu=i(Oi,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Oi.forEach(t),Xu=p(Et),sn=s(Et,"P",{});var xp=n(sn);Gu=i(xp,"This model inherits from "),fi=s(xp,"A",{href:!0});var gy=n(fi);Ju=i(gy,"PreTrainedModel"),gy.forEach(t),Zu=i(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),xp.forEach(t),Ku=p(Et),nn=s(Et,"P",{});var Wp=n(nn);Qu=i(Wp,"This model is a PyTorch "),rn=s(Wp,"A",{href:!0,rel:!0});var _y=n(rn);Yu=i(_y,"torch.nn.Module"),_y.forEach(t),eg=i(Wp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wp.forEach(t),tg=p(Et),ze=s(Et,"DIV",{class:!0});var Pt=n(ze);y(ln.$$.fragment,Pt),og=p(Pt),Qt=s(Pt,"P",{});var Si=n(Qt);ag=i(Si,"The "),ui=s(Si,"A",{href:!0});var vy=n(ui);sg=i(vy,"Wav2Vec2ForCTC"),vy.forEach(t),ng=i(Si," forward method, overrides the "),Ol=s(Si,"CODE",{});var by=n(Ol);rg=i(by,"__call__"),by.forEach(t),ig=i(Si," special method."),Si.forEach(t),lg=p(Pt),y(Ko.$$.fragment,Pt),cg=p(Pt),y(Qo.$$.fragment,Pt),dg=p(Pt),y(Yo.$$.fragment,Pt),Pt.forEach(t),Et.forEach(t),Td=p(o),Yt=s(o,"H2",{class:!0});var Vp=n(Yt);ea=s(Vp,"A",{id:!0,class:!0,href:!0});var wy=n(ea);Sl=s(wy,"SPAN",{});var yy=n(Sl);y(cn.$$.fragment,yy),yy.forEach(t),wy.forEach(t),pg=p(Vp),Nl=s(Vp,"SPAN",{});var ky=n(Nl);hg=i(ky,"Wav2Vec2ForSequenceClassification"),ky.forEach(t),Vp.forEach(t),$d=p(o),ne=s(o,"DIV",{class:!0});var at=n(ne);y(dn.$$.fragment,at),mg=p(at),Il=s(at,"P",{});var Ty=n(Il);fg=i(Ty,`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Ty.forEach(t),ug=p(at),pn=s(at,"P",{});var jp=n(pn);gg=i(jp,"Wav2Vec2 was proposed in "),hn=s(jp,"A",{href:!0,rel:!0});var $y=n(hn);_g=i($y,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),$y.forEach(t),vg=i(jp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),jp.forEach(t),bg=p(at),mn=s(at,"P",{});var Fp=n(mn);wg=i(Fp,"This model inherits from "),gi=s(Fp,"A",{href:!0});var xy=n(gi);yg=i(xy,"PreTrainedModel"),xy.forEach(t),kg=i(Fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Fp.forEach(t),Tg=p(at),fn=s(at,"P",{});var Cp=n(fn);$g=i(Cp,"This model is a PyTorch "),un=s(Cp,"A",{href:!0,rel:!0});var Wy=n(un);xg=i(Wy,"torch.nn.Module"),Wy.forEach(t),Wg=i(Cp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cp.forEach(t),Vg=p(at),Me=s(at,"DIV",{class:!0});var qt=n(Me);y(gn.$$.fragment,qt),jg=p(qt),eo=s(qt,"P",{});var Ni=n(eo);Fg=i(Ni,"The "),_i=s(Ni,"A",{href:!0});var Vy=n(_i);Cg=i(Vy,"Wav2Vec2ForSequenceClassification"),Vy.forEach(t),Eg=i(Ni," forward method, overrides the "),Bl=s(Ni,"CODE",{});var jy=n(Bl);Pg=i(jy,"__call__"),jy.forEach(t),qg=i(Ni," special method."),Ni.forEach(t),zg=p(qt),y(ta.$$.fragment,qt),Mg=p(qt),y(oa.$$.fragment,qt),Ag=p(qt),y(aa.$$.fragment,qt),qt.forEach(t),at.forEach(t),xd=p(o),to=s(o,"H2",{class:!0});var Ep=n(to);sa=s(Ep,"A",{id:!0,class:!0,href:!0});var Fy=n(sa);Ul=s(Fy,"SPAN",{});var Cy=n(Ul);y(_n.$$.fragment,Cy),Cy.forEach(t),Fy.forEach(t),Lg=p(Ep),Rl=s(Ep,"SPAN",{});var Ey=n(Rl);Dg=i(Ey,"Wav2Vec2ForAudioFrameClassification"),Ey.forEach(t),Ep.forEach(t),Wd=p(o),re=s(o,"DIV",{class:!0});var st=n(re);y(vn.$$.fragment,st),Og=p(st),Hl=s(st,"P",{});var Py=n(Hl);Sg=i(Py,"Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),Py.forEach(t),Ng=p(st),bn=s(st,"P",{});var Pp=n(bn);Ig=i(Pp,"Wav2Vec2 was proposed in "),wn=s(Pp,"A",{href:!0,rel:!0});var qy=n(wn);Bg=i(qy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),qy.forEach(t),Ug=i(Pp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Pp.forEach(t),Rg=p(st),yn=s(st,"P",{});var qp=n(yn);Hg=i(qp,"This model inherits from "),vi=s(qp,"A",{href:!0});var zy=n(vi);Xg=i(zy,"PreTrainedModel"),zy.forEach(t),Gg=i(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),qp.forEach(t),Jg=p(st),kn=s(st,"P",{});var zp=n(kn);Zg=i(zp,"This model is a PyTorch "),Tn=s(zp,"A",{href:!0,rel:!0});var My=n(Tn);Kg=i(My,"torch.nn.Module"),My.forEach(t),Qg=i(zp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zp.forEach(t),Yg=p(st),Je=s(st,"DIV",{class:!0});var La=n(Je);y($n.$$.fragment,La),e_=p(La),oo=s(La,"P",{});var Ii=n(oo);t_=i(Ii,"The "),bi=s(Ii,"A",{href:!0});var Ay=n(bi);o_=i(Ay,"Wav2Vec2ForAudioFrameClassification"),Ay.forEach(t),a_=i(Ii," forward method, overrides the "),Xl=s(Ii,"CODE",{});var Ly=n(Xl);s_=i(Ly,"__call__"),Ly.forEach(t),n_=i(Ii," special method."),Ii.forEach(t),r_=p(La),y(na.$$.fragment,La),i_=p(La),y(ra.$$.fragment,La),La.forEach(t),st.forEach(t),Vd=p(o),ao=s(o,"H2",{class:!0});var Mp=n(ao);ia=s(Mp,"A",{id:!0,class:!0,href:!0});var Dy=n(ia);Gl=s(Dy,"SPAN",{});var Oy=n(Gl);y(xn.$$.fragment,Oy),Oy.forEach(t),Dy.forEach(t),l_=p(Mp),Jl=s(Mp,"SPAN",{});var Sy=n(Jl);c_=i(Sy,"Wav2Vec2ForXVector"),Sy.forEach(t),Mp.forEach(t),jd=p(o),ie=s(o,"DIV",{class:!0});var nt=n(ie);y(Wn.$$.fragment,nt),d_=p(nt),Zl=s(nt,"P",{});var Ny=n(Zl);p_=i(Ny,"Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Ny.forEach(t),h_=p(nt),Vn=s(nt,"P",{});var Ap=n(Vn);m_=i(Ap,"Wav2Vec2 was proposed in "),jn=s(Ap,"A",{href:!0,rel:!0});var Iy=n(jn);f_=i(Iy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Iy.forEach(t),u_=i(Ap,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ap.forEach(t),g_=p(nt),Fn=s(nt,"P",{});var Lp=n(Fn);__=i(Lp,"This model inherits from "),wi=s(Lp,"A",{href:!0});var By=n(wi);v_=i(By,"PreTrainedModel"),By.forEach(t),b_=i(Lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Lp.forEach(t),w_=p(nt),Cn=s(nt,"P",{});var Dp=n(Cn);y_=i(Dp,"This model is a PyTorch "),En=s(Dp,"A",{href:!0,rel:!0});var Uy=n(En);k_=i(Uy,"torch.nn.Module"),Uy.forEach(t),T_=i(Dp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dp.forEach(t),$_=p(nt),Ze=s(nt,"DIV",{class:!0});var Da=n(Ze);y(Pn.$$.fragment,Da),x_=p(Da),so=s(Da,"P",{});var Bi=n(so);W_=i(Bi,"The "),yi=s(Bi,"A",{href:!0});var Ry=n(yi);V_=i(Ry,"Wav2Vec2ForXVector"),Ry.forEach(t),j_=i(Bi," forward method, overrides the "),Kl=s(Bi,"CODE",{});var Hy=n(Kl);F_=i(Hy,"__call__"),Hy.forEach(t),C_=i(Bi," special method."),Bi.forEach(t),E_=p(Da),y(la.$$.fragment,Da),P_=p(Da),y(ca.$$.fragment,Da),Da.forEach(t),nt.forEach(t),Fd=p(o),no=s(o,"H2",{class:!0});var Op=n(no);da=s(Op,"A",{id:!0,class:!0,href:!0});var Xy=n(da);Ql=s(Xy,"SPAN",{});var Gy=n(Ql);y(qn.$$.fragment,Gy),Gy.forEach(t),Xy.forEach(t),q_=p(Op),Yl=s(Op,"SPAN",{});var Jy=n(Yl);z_=i(Jy,"Wav2Vec2ForPreTraining"),Jy.forEach(t),Op.forEach(t),Cd=p(o),Ve=s(o,"DIV",{class:!0});var zt=n(Ve);y(zn.$$.fragment,zt),M_=p(zt),ro=s(zt,"P",{});var Ui=n(ro);A_=i(Ui,"Wav2Vec2 Model with a quantizer and "),ec=s(Ui,"CODE",{});var Zy=n(ec);L_=i(Zy,"VQ"),Zy.forEach(t),D_=i(Ui,` head on top.
Wav2Vec2 was proposed in `),Mn=s(Ui,"A",{href:!0,rel:!0});var Ky=n(Mn);O_=i(Ky,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ky.forEach(t),S_=i(Ui,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ui.forEach(t),N_=p(zt),An=s(zt,"P",{});var Sp=n(An);I_=i(Sp,"This model inherits from "),ki=s(Sp,"A",{href:!0});var Qy=n(ki);B_=i(Qy,"PreTrainedModel"),Qy.forEach(t),U_=i(Sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Sp.forEach(t),R_=p(zt),Ln=s(zt,"P",{});var Np=n(Ln);H_=i(Np,"This model is a PyTorch "),Dn=s(Np,"A",{href:!0,rel:!0});var Yy=n(Dn);X_=i(Yy,"torch.nn.Module"),Yy.forEach(t),G_=i(Np,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Np.forEach(t),J_=p(zt),Ke=s(zt,"DIV",{class:!0});var Oa=n(Ke);y(On.$$.fragment,Oa),Z_=p(Oa),io=s(Oa,"P",{});var Ri=n(io);K_=i(Ri,"The "),Ti=s(Ri,"A",{href:!0});var ek=n(Ti);Q_=i(ek,"Wav2Vec2ForPreTraining"),ek.forEach(t),Y_=i(Ri," forward method, overrides the "),tc=s(Ri,"CODE",{});var tk=n(tc);ev=i(tk,"__call__"),tk.forEach(t),tv=i(Ri," special method."),Ri.forEach(t),ov=p(Oa),y(pa.$$.fragment,Oa),av=p(Oa),y(ha.$$.fragment,Oa),Oa.forEach(t),zt.forEach(t),Ed=p(o),lo=s(o,"H2",{class:!0});var Ip=n(lo);ma=s(Ip,"A",{id:!0,class:!0,href:!0});var ok=n(ma);oc=s(ok,"SPAN",{});var ak=n(oc);y(Sn.$$.fragment,ak),ak.forEach(t),ok.forEach(t),sv=p(Ip),ac=s(Ip,"SPAN",{});var sk=n(ac);nv=i(sk,"TFWav2Vec2Model"),sk.forEach(t),Ip.forEach(t),Pd=p(o),le=s(o,"DIV",{class:!0});var rt=n(le);y(Nn.$$.fragment,rt),rv=p(rt),sc=s(rt,"P",{});var nk=n(sc);iv=i(nk,"The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),nk.forEach(t),lv=p(rt),In=s(rt,"P",{});var Bp=n(In);cv=i(Bp,"This model inherits from "),$i=s(Bp,"A",{href:!0});var rk=n($i);dv=i(rk,"TFPreTrainedModel"),rk.forEach(t),pv=i(Bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp.forEach(t),hv=p(rt),Bn=s(rt,"P",{});var Up=n(Bn);mv=i(Up,"This model is also a "),Un=s(Up,"A",{href:!0,rel:!0});var ik=n(Un);fv=i(ik,"tf.keras.Model"),ik.forEach(t),uv=i(Up,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Up.forEach(t),gv=p(rt),y(fa.$$.fragment,rt),_v=p(rt),Qe=s(rt,"DIV",{class:!0});var Sa=n(Qe);y(Rn.$$.fragment,Sa),vv=p(Sa),co=s(Sa,"P",{});var Hi=n(co);bv=i(Hi,"The "),xi=s(Hi,"A",{href:!0});var lk=n(xi);wv=i(lk,"TFWav2Vec2Model"),lk.forEach(t),yv=i(Hi," forward method, overrides the "),nc=s(Hi,"CODE",{});var ck=n(nc);kv=i(ck,"__call__"),ck.forEach(t),Tv=i(Hi," special method."),Hi.forEach(t),$v=p(Sa),y(ua.$$.fragment,Sa),xv=p(Sa),y(ga.$$.fragment,Sa),Sa.forEach(t),rt.forEach(t),qd=p(o),po=s(o,"H2",{class:!0});var Rp=n(po);_a=s(Rp,"A",{id:!0,class:!0,href:!0});var dk=n(_a);rc=s(dk,"SPAN",{});var pk=n(rc);y(Hn.$$.fragment,pk),pk.forEach(t),dk.forEach(t),Wv=p(Rp),ic=s(Rp,"SPAN",{});var hk=n(ic);Vv=i(hk,"TFWav2Vec2ForCTC"),hk.forEach(t),Rp.forEach(t),zd=p(o),ce=s(o,"DIV",{class:!0});var it=n(ce);y(Xn.$$.fragment,it),jv=p(it),Gn=s(it,"P",{});var Hp=n(Gn);Fv=i(Hp,"TFWav2Vec2 Model with a "),lc=s(Hp,"CODE",{});var mk=n(lc);Cv=i(mk,"language modeling"),mk.forEach(t),Ev=i(Hp," head on top for Connectionist Temporal Classification (CTC)."),Hp.forEach(t),Pv=p(it),Jn=s(it,"P",{});var Xp=n(Jn);qv=i(Xp,"This model inherits from "),Wi=s(Xp,"A",{href:!0});var fk=n(Wi);zv=i(fk,"TFPreTrainedModel"),fk.forEach(t),Mv=i(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(t),Av=p(it),Zn=s(it,"P",{});var Gp=n(Zn);Lv=i(Gp,"This model is also a "),Kn=s(Gp,"A",{href:!0,rel:!0});var uk=n(Kn);Dv=i(uk,"tf.keras.Model"),uk.forEach(t),Ov=i(Gp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gp.forEach(t),Sv=p(it),y(va.$$.fragment,it),Nv=p(it),Ye=s(it,"DIV",{class:!0});var Na=n(Ye);y(Qn.$$.fragment,Na),Iv=p(Na),ho=s(Na,"P",{});var Xi=n(ho);Bv=i(Xi,"The "),Vi=s(Xi,"A",{href:!0});var gk=n(Vi);Uv=i(gk,"TFWav2Vec2ForCTC"),gk.forEach(t),Rv=i(Xi," forward method, overrides the "),cc=s(Xi,"CODE",{});var _k=n(cc);Hv=i(_k,"__call__"),_k.forEach(t),Xv=i(Xi," special method."),Xi.forEach(t),Gv=p(Na),y(ba.$$.fragment,Na),Jv=p(Na),y(wa.$$.fragment,Na),Na.forEach(t),it.forEach(t),Md=p(o),mo=s(o,"H2",{class:!0});var Jp=n(mo);ya=s(Jp,"A",{id:!0,class:!0,href:!0});var vk=n(ya);dc=s(vk,"SPAN",{});var bk=n(dc);y(Yn.$$.fragment,bk),bk.forEach(t),vk.forEach(t),Zv=p(Jp),pc=s(Jp,"SPAN",{});var wk=n(pc);Kv=i(wk,"FlaxWav2Vec2Model"),wk.forEach(t),Jp.forEach(t),Ad=p(o),K=s(o,"DIV",{class:!0});var Le=n(K);y(er.$$.fragment,Le),Qv=p(Le),tr=s(Le,"P",{});var Zp=n(tr);Yv=i(Zp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),or=s(Zp,"A",{href:!0,rel:!0});var yk=n(or);e2=i(yk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),yk.forEach(t),t2=i(Zp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Zp.forEach(t),o2=p(Le),ar=s(Le,"P",{});var Kp=n(ar);a2=i(Kp,"This model inherits from "),ji=s(Kp,"A",{href:!0});var kk=n(ji);s2=i(kk,"FlaxPreTrainedModel"),kk.forEach(t),n2=i(Kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kp.forEach(t),r2=p(Le),sr=s(Le,"P",{});var Qp=n(sr);i2=i(Qp,`This model is also a Flax Linen
`),nr=s(Qp,"A",{href:!0,rel:!0});var Tk=n(nr);l2=i(Tk,"flax.nn.Module"),Tk.forEach(t),c2=i(Qp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qp.forEach(t),d2=p(Le),hc=s(Le,"P",{});var $k=n(hc);p2=i($k,"Finally, this model supports inherent JAX features such as:"),$k.forEach(t),h2=p(Le),bt=s(Le,"UL",{});var Ia=n(bt);mc=s(Ia,"LI",{});var xk=n(mc);rr=s(xk,"A",{href:!0,rel:!0});var Wk=n(rr);m2=i(Wk,"Just-In-Time (JIT) compilation"),Wk.forEach(t),xk.forEach(t),f2=p(Ia),fc=s(Ia,"LI",{});var Vk=n(fc);ir=s(Vk,"A",{href:!0,rel:!0});var jk=n(ir);u2=i(jk,"Automatic Differentiation"),jk.forEach(t),Vk.forEach(t),g2=p(Ia),uc=s(Ia,"LI",{});var Fk=n(uc);lr=s(Fk,"A",{href:!0,rel:!0});var Ck=n(lr);_2=i(Ck,"Vectorization"),Ck.forEach(t),Fk.forEach(t),v2=p(Ia),gc=s(Ia,"LI",{});var Ek=n(gc);cr=s(Ek,"A",{href:!0,rel:!0});var Pk=n(cr);b2=i(Pk,"Parallelization"),Pk.forEach(t),Ek.forEach(t),Ia.forEach(t),w2=p(Le),et=s(Le,"DIV",{class:!0});var Ba=n(et);y(dr.$$.fragment,Ba),y2=p(Ba),fo=s(Ba,"P",{});var Gi=n(fo);k2=i(Gi,"The "),_c=s(Gi,"CODE",{});var qk=n(_c);T2=i(qk,"FlaxWav2Vec2PreTrainedModel"),qk.forEach(t),$2=i(Gi," forward method, overrides the "),vc=s(Gi,"CODE",{});var zk=n(vc);x2=i(zk,"__call__"),zk.forEach(t),W2=i(Gi," special method."),Gi.forEach(t),V2=p(Ba),y(ka.$$.fragment,Ba),j2=p(Ba),y(Ta.$$.fragment,Ba),Ba.forEach(t),Le.forEach(t),Ld=p(o),uo=s(o,"H2",{class:!0});var Yp=n(uo);$a=s(Yp,"A",{id:!0,class:!0,href:!0});var Mk=n($a);bc=s(Mk,"SPAN",{});var Ak=n(bc);y(pr.$$.fragment,Ak),Ak.forEach(t),Mk.forEach(t),F2=p(Yp),wc=s(Yp,"SPAN",{});var Lk=n(wc);C2=i(Lk,"FlaxWav2Vec2ForCTC"),Lk.forEach(t),Yp.forEach(t),Dd=p(o),Q=s(o,"DIV",{class:!0});var De=n(Q);y(hr.$$.fragment,De),E2=p(De),go=s(De,"P",{});var Ji=n(go);P2=i(Ji,"Wav2Vec2 Model with a "),yc=s(Ji,"CODE",{});var Dk=n(yc);q2=i(Dk,"language modeling"),Dk.forEach(t),z2=i(Ji,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),mr=s(Ji,"A",{href:!0,rel:!0});var Ok=n(mr);M2=i(Ok,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ok.forEach(t),A2=i(Ji,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ji.forEach(t),L2=p(De),fr=s(De,"P",{});var eh=n(fr);D2=i(eh,"This model inherits from "),Fi=s(eh,"A",{href:!0});var Sk=n(Fi);O2=i(Sk,"FlaxPreTrainedModel"),Sk.forEach(t),S2=i(eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh.forEach(t),N2=p(De),ur=s(De,"P",{});var th=n(ur);I2=i(th,`This model is also a Flax Linen
`),gr=s(th,"A",{href:!0,rel:!0});var Nk=n(gr);B2=i(Nk,"flax.nn.Module"),Nk.forEach(t),U2=i(th,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),th.forEach(t),R2=p(De),kc=s(De,"P",{});var Ik=n(kc);H2=i(Ik,"Finally, this model supports inherent JAX features such as:"),Ik.forEach(t),X2=p(De),wt=s(De,"UL",{});var Ua=n(wt);Tc=s(Ua,"LI",{});var Bk=n(Tc);_r=s(Bk,"A",{href:!0,rel:!0});var Uk=n(_r);G2=i(Uk,"Just-In-Time (JIT) compilation"),Uk.forEach(t),Bk.forEach(t),J2=p(Ua),$c=s(Ua,"LI",{});var Rk=n($c);vr=s(Rk,"A",{href:!0,rel:!0});var Hk=n(vr);Z2=i(Hk,"Automatic Differentiation"),Hk.forEach(t),Rk.forEach(t),K2=p(Ua),xc=s(Ua,"LI",{});var Xk=n(xc);br=s(Xk,"A",{href:!0,rel:!0});var Gk=n(br);Q2=i(Gk,"Vectorization"),Gk.forEach(t),Xk.forEach(t),Y2=p(Ua),Wc=s(Ua,"LI",{});var Jk=n(Wc);wr=s(Jk,"A",{href:!0,rel:!0});var Zk=n(wr);eb=i(Zk,"Parallelization"),Zk.forEach(t),Jk.forEach(t),Ua.forEach(t),tb=p(De),tt=s(De,"DIV",{class:!0});var Ra=n(tt);y(yr.$$.fragment,Ra),ob=p(Ra),_o=s(Ra,"P",{});var Zi=n(_o);ab=i(Zi,"The "),Vc=s(Zi,"CODE",{});var Kk=n(Vc);sb=i(Kk,"FlaxWav2Vec2PreTrainedModel"),Kk.forEach(t),nb=i(Zi," forward method, overrides the "),jc=s(Zi,"CODE",{});var Qk=n(jc);rb=i(Qk,"__call__"),Qk.forEach(t),ib=i(Zi," special method."),Zi.forEach(t),lb=p(Ra),y(xa.$$.fragment,Ra),cb=p(Ra),y(Wa.$$.fragment,Ra),Ra.forEach(t),De.forEach(t),Od=p(o),vo=s(o,"H2",{class:!0});var oh=n(vo);Va=s(oh,"A",{id:!0,class:!0,href:!0});var Yk=n(Va);Fc=s(Yk,"SPAN",{});var e0=n(Fc);y(kr.$$.fragment,e0),e0.forEach(t),Yk.forEach(t),db=p(oh),Cc=s(oh,"SPAN",{});var t0=n(Cc);pb=i(t0,"FlaxWav2Vec2ForPreTraining"),t0.forEach(t),oh.forEach(t),Sd=p(o),Y=s(o,"DIV",{class:!0});var Oe=n(Y);y(Tr.$$.fragment,Oe),hb=p(Oe),bo=s(Oe,"P",{});var Ki=n(bo);mb=i(Ki,"Wav2Vec2 Model with a quantizer and "),Ec=s(Ki,"CODE",{});var o0=n(Ec);fb=i(o0,"VQ"),o0.forEach(t),ub=i(Ki,` head on top.
Wav2Vec2 was proposed in `),$r=s(Ki,"A",{href:!0,rel:!0});var a0=n($r);gb=i(a0,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),a0.forEach(t),_b=i(Ki,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ki.forEach(t),vb=p(Oe),xr=s(Oe,"P",{});var ah=n(xr);bb=i(ah,"This model inherits from "),Ci=s(ah,"A",{href:!0});var s0=n(Ci);wb=i(s0,"FlaxPreTrainedModel"),s0.forEach(t),yb=i(ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ah.forEach(t),kb=p(Oe),Wr=s(Oe,"P",{});var sh=n(Wr);Tb=i(sh,`This model is also a Flax Linen
`),Vr=s(sh,"A",{href:!0,rel:!0});var n0=n(Vr);$b=i(n0,"flax.nn.Module"),n0.forEach(t),xb=i(sh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sh.forEach(t),Wb=p(Oe),Pc=s(Oe,"P",{});var r0=n(Pc);Vb=i(r0,"Finally, this model supports inherent JAX features such as:"),r0.forEach(t),jb=p(Oe),yt=s(Oe,"UL",{});var Ha=n(yt);qc=s(Ha,"LI",{});var i0=n(qc);jr=s(i0,"A",{href:!0,rel:!0});var l0=n(jr);Fb=i(l0,"Just-In-Time (JIT) compilation"),l0.forEach(t),i0.forEach(t),Cb=p(Ha),zc=s(Ha,"LI",{});var c0=n(zc);Fr=s(c0,"A",{href:!0,rel:!0});var d0=n(Fr);Eb=i(d0,"Automatic Differentiation"),d0.forEach(t),c0.forEach(t),Pb=p(Ha),Mc=s(Ha,"LI",{});var p0=n(Mc);Cr=s(p0,"A",{href:!0,rel:!0});var h0=n(Cr);qb=i(h0,"Vectorization"),h0.forEach(t),p0.forEach(t),zb=p(Ha),Ac=s(Ha,"LI",{});var m0=n(Ac);Er=s(m0,"A",{href:!0,rel:!0});var f0=n(Er);Mb=i(f0,"Parallelization"),f0.forEach(t),m0.forEach(t),Ha.forEach(t),Ab=p(Oe),ot=s(Oe,"DIV",{class:!0});var Xa=n(ot);y(Pr.$$.fragment,Xa),Lb=p(Xa),wo=s(Xa,"P",{});var Qi=n(wo);Db=i(Qi,"The "),Ei=s(Qi,"A",{href:!0});var u0=n(Ei);Ob=i(u0,"FlaxWav2Vec2ForPreTraining"),u0.forEach(t),Sb=i(Qi," forward method, overrides the "),Lc=s(Qi,"CODE",{});var g0=n(Lc);Nb=i(g0,"__call__"),g0.forEach(t),Ib=i(Qi," special method."),Qi.forEach(t),Bb=p(Xa),y(ja.$$.fragment,Xa),Ub=p(Xa),y(Fa.$$.fragment,Xa),Xa.forEach(t),Oe.forEach(t),this.h()},h(){h(c,"name","hf:doc:metadata"),h(c,"content",JSON.stringify(t1)),h(m,"id","wav2vec2"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#wav2vec2"),h(f,"class","relative group"),h(A,"id","overview"),h(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(A,"href","#overview"),h(C,"class","relative group"),h(_e,"href","https://arxiv.org/abs/2006.11477"),h(_e,"rel","nofollow"),h(Ee,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),h(Be,"href","https://huggingface.co/patrickvonplaten"),h(Be,"rel","nofollow"),h(Pe,"id","transformers.Wav2Vec2Config"),h(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pe,"href","#transformers.Wav2Vec2Config"),h(ke,"class","relative group"),h(Nr,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),h(Ga,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),h(Ga,"rel","nofollow"),h(Ir,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),h(Br,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($o,"id","transformers.Wav2Vec2CTCTokenizer"),h($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($o,"href","#transformers.Wav2Vec2CTCTokenizer"),h(St,"class","relative group"),h(Ur,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jo,"id","transformers.Wav2Vec2FeatureExtractor"),h(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jo,"href","#transformers.Wav2Vec2FeatureExtractor"),h(Nt,"class","relative group"),h(Hr,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),h(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Co,"id","transformers.Wav2Vec2Processor"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.Wav2Vec2Processor"),h(It,"class","relative group"),h(Xr,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),h(Gr,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),h(Jr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(cs,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__"),h(Zr,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.decode"),h(ps,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),h(Kr,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.as_target_processor"),h(hs,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),h(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qr,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),h(Yr,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.as_target_processor"),h(ei,"href","/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),h(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ti,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oi,"href","/docs/transformers/pr_highlight/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ai,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),h(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(si,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),h(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.Wav2Vec2ProcessorWithLM"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.Wav2Vec2ProcessorWithLM"),h(Bt,"class","relative group"),h(xs,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),h(ni,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.as_target_processor"),h(Ws,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),h(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ri,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),h(ii,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.as_target_processor"),h(li,"href","/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),h(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ci,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(di,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Uo,"id","transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),h(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Uo,"href","#transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),h(Ut,"class","relative group"),h(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pi,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xo,"id","transformers.Wav2Vec2Model"),h(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xo,"href","#transformers.Wav2Vec2Model"),h(Gt,"class","relative group"),h(Zs,"href","https://arxiv.org/abs/2006.11477"),h(Zs,"rel","nofollow"),h(hi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ys,"rel","nofollow"),h(mi,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),h(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zo,"id","transformers.Wav2Vec2ForCTC"),h(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zo,"href","#transformers.Wav2Vec2ForCTC"),h(Zt,"class","relative group"),h(an,"href","https://arxiv.org/abs/2006.11477"),h(an,"rel","nofollow"),h(fi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(rn,"rel","nofollow"),h(ui,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),h(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ea,"id","transformers.Wav2Vec2ForSequenceClassification"),h(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ea,"href","#transformers.Wav2Vec2ForSequenceClassification"),h(Yt,"class","relative group"),h(hn,"href","https://arxiv.org/abs/2006.11477"),h(hn,"rel","nofollow"),h(gi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(un,"rel","nofollow"),h(_i,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification"),h(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(sa,"id","transformers.Wav2Vec2ForAudioFrameClassification"),h(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sa,"href","#transformers.Wav2Vec2ForAudioFrameClassification"),h(to,"class","relative group"),h(wn,"href","https://arxiv.org/abs/2006.11477"),h(wn,"rel","nofollow"),h(vi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Tn,"rel","nofollow"),h(bi,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForAudioFrameClassification"),h(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ia,"id","transformers.Wav2Vec2ForXVector"),h(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ia,"href","#transformers.Wav2Vec2ForXVector"),h(ao,"class","relative group"),h(jn,"href","https://arxiv.org/abs/2006.11477"),h(jn,"rel","nofollow"),h(wi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(En,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(En,"rel","nofollow"),h(yi,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForXVector"),h(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(da,"id","transformers.Wav2Vec2ForPreTraining"),h(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(da,"href","#transformers.Wav2Vec2ForPreTraining"),h(no,"class","relative group"),h(Mn,"href","https://arxiv.org/abs/2006.11477"),h(Mn,"rel","nofollow"),h(ki,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Dn,"rel","nofollow"),h(Ti,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),h(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ma,"id","transformers.TFWav2Vec2Model"),h(ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ma,"href","#transformers.TFWav2Vec2Model"),h(lo,"class","relative group"),h($i,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Un,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Un,"rel","nofollow"),h(xi,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model"),h(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_a,"id","transformers.TFWav2Vec2ForCTC"),h(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_a,"href","#transformers.TFWav2Vec2ForCTC"),h(po,"class","relative group"),h(Wi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Kn,"rel","nofollow"),h(Vi,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.TFWav2Vec2ForCTC"),h(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ya,"id","transformers.FlaxWav2Vec2Model"),h(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ya,"href","#transformers.FlaxWav2Vec2Model"),h(mo,"class","relative group"),h(or,"href","https://arxiv.org/abs/2006.11477"),h(or,"rel","nofollow"),h(ji,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(nr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(nr,"rel","nofollow"),h(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(rr,"rel","nofollow"),h(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(ir,"rel","nofollow"),h(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(lr,"rel","nofollow"),h(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(cr,"rel","nofollow"),h(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($a,"id","transformers.FlaxWav2Vec2ForCTC"),h($a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($a,"href","#transformers.FlaxWav2Vec2ForCTC"),h(uo,"class","relative group"),h(mr,"href","https://arxiv.org/abs/2006.11477"),h(mr,"rel","nofollow"),h(Fi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(gr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(gr,"rel","nofollow"),h(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(_r,"rel","nofollow"),h(vr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(vr,"rel","nofollow"),h(br,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(br,"rel","nofollow"),h(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(wr,"rel","nofollow"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Va,"id","transformers.FlaxWav2Vec2ForPreTraining"),h(Va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Va,"href","#transformers.FlaxWav2Vec2ForPreTraining"),h(vo,"class","relative group"),h($r,"href","https://arxiv.org/abs/2006.11477"),h($r,"rel","nofollow"),h(Ci,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Vr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(Vr,"rel","nofollow"),h(jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(jr,"rel","nofollow"),h(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Fr,"rel","nofollow"),h(Cr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Cr,"rel","nofollow"),h(Er,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Er,"rel","nofollow"),h(Ei,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.FlaxWav2Vec2ForPreTraining"),h(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,b,g),_(o,f,g),e(f,m),e(m,v),k(l,v,null),e(f,u),e(f,j),e(j,O),_(o,q,g),_(o,C,g),e(C,A),e(A,L),k(H,L,null),e(C,S),e(C,P),e(P,je),_(o,ge,g),_(o,B,g),e(B,U),e(B,_e),e(_e,Se),e(B,z),_(o,I,g),_(o,Fe,g),e(Fe,ve),_(o,Re,g),_(o,Ce,g),e(Ce,oe),e(oe,lt),_(o,He,g),_(o,D,g),e(D,ct),_(o,de,g),_(o,pe,g),e(pe,Ne),e(Ne,be),e(pe,dt),e(pe,we),e(we,ae),e(we,Ee),e(Ee,ye),e(we,pt),_(o,V,g),_(o,E,g),e(E,Ie),e(E,Be),e(Be,Mt),e(E,se),_(o,$t,g),_(o,ke,g),e(ke,Pe),e(Pe,X),k(G,X,null),e(ke,At),e(ke,ht),e(ht,Te),_(o,xt,g),_(o,J,g),k($e,J,null),e(J,Lt),e(J,Dt),e(Dt,nh),e(Dt,Nr),e(Nr,rh),e(Dt,ih),e(Dt,Ga),e(Ga,lh),e(Dt,ch),e(J,dh),e(J,Ot),e(Ot,ph),e(Ot,Ir),e(Ir,hh),e(Ot,mh),e(Ot,Br),e(Br,fh),e(Ot,uh),e(J,gh),k(To,J,null),_(o,nd,g),_(o,St,g),e(St,$o),e($o,Yi),k(Ja,Yi,null),e(St,_h),e(St,el),e(el,vh),_(o,rd,g),_(o,Z,g),k(Za,Z,null),e(Z,bh),e(Z,tl),e(tl,wh),e(Z,yh),e(Z,Ka),e(Ka,kh),e(Ka,Ur),e(Ur,Th),e(Ka,$h),e(Z,xh),e(Z,xo),k(Qa,xo,null),e(xo,Wh),e(xo,ol),e(ol,Vh),e(Z,jh),e(Z,Rr),k(Ya,Rr,null),e(Z,Fh),e(Z,Xe),k(es,Xe,null),e(Xe,Ch),e(Xe,al),e(al,Eh),e(Xe,Ph),e(Xe,ts),e(ts,qh),e(ts,sl),e(sl,zh),e(ts,Mh),e(Xe,Ah),k(Wo,Xe,null),e(Z,Lh),e(Z,Vo),k(os,Vo,null),e(Vo,Dh),e(Vo,nl),e(nl,Oh),_(o,id,g),_(o,Nt,g),e(Nt,jo),e(jo,rl),k(as,rl,null),e(Nt,Sh),e(Nt,il),e(il,Nh),_(o,ld,g),_(o,Ue,g),k(ss,Ue,null),e(Ue,Ih),e(Ue,ll),e(ll,Bh),e(Ue,Uh),e(Ue,ns),e(ns,Rh),e(ns,Hr),e(Hr,Hh),e(ns,Xh),e(Ue,Gh),e(Ue,Fo),k(rs,Fo,null),e(Fo,Jh),e(Fo,cl),e(cl,Zh),_(o,cd,g),_(o,It,g),e(It,Co),e(Co,dl),k(is,dl,null),e(It,Kh),e(It,pl),e(pl,Qh),_(o,dd,g),_(o,M,g),k(ls,M,null),e(M,Yh),e(M,hl),e(hl,em),e(M,tm),e(M,qe),e(qe,Xr),e(Xr,om),e(qe,am),e(qe,Gr),e(Gr,sm),e(qe,nm),e(qe,Jr),e(Jr,rm),e(qe,im),e(qe,cs),e(cs,ml),e(ml,lm),e(cs,cm),e(qe,dm),e(qe,Zr),e(Zr,pm),e(qe,hm),e(M,mm),e(M,Eo),k(ds,Eo,null),e(Eo,fm),e(Eo,mt),e(mt,um),e(mt,ps),e(ps,fl),e(fl,gm),e(ps,_m),e(mt,vm),e(mt,Kr),e(Kr,bm),e(mt,wm),e(mt,hs),e(hs,ul),e(ul,ym),e(hs,km),e(mt,Tm),e(M,$m),e(M,Po),k(ms,Po,null),e(Po,xm),e(Po,ft),e(ft,Wm),e(ft,Qr),e(Qr,Vm),e(ft,jm),e(ft,Yr),e(Yr,Fm),e(ft,Cm),e(ft,ei),e(ei,Em),e(ft,Pm),e(M,qm),e(M,ti),k(fs,ti,null),e(M,zm),e(M,Wt),k(us,Wt,null),e(Wt,Mm),e(Wt,gs),e(gs,Am),e(gs,oi),e(oi,Lm),e(gs,Dm),e(Wt,Om),k(qo,Wt,null),e(M,Sm),e(M,zo),k(_s,zo,null),e(zo,Nm),e(zo,vs),e(vs,Im),e(vs,ai),e(ai,Bm),e(vs,Um),e(M,Rm),e(M,Mo),k(bs,Mo,null),e(Mo,Hm),e(Mo,ws),e(ws,Xm),e(ws,si),e(si,Gm),e(ws,Jm),e(M,Zm),e(M,Ao),k(ys,Ao,null),e(Ao,Km),e(Ao,gl),e(gl,Qm),_(o,pd,g),_(o,Bt,g),e(Bt,Lo),e(Lo,_l),k(ks,_l,null),e(Bt,Ym),e(Bt,vl),e(vl,ef),_(o,hd,g),_(o,N,g),k(Ts,N,null),e(N,tf),e(N,bl),e(bl,of),e(N,af),e(N,Do),k($s,Do,null),e(Do,sf),e(Do,ut),e(ut,nf),e(ut,xs),e(xs,wl),e(wl,rf),e(xs,lf),e(ut,cf),e(ut,ni),e(ni,df),e(ut,pf),e(ut,Ws),e(Ws,yl),e(yl,hf),e(Ws,mf),e(ut,ff),e(N,uf),e(N,Oo),k(Vs,Oo,null),e(Oo,gf),e(Oo,gt),e(gt,_f),e(gt,ri),e(ri,vf),e(gt,bf),e(gt,ii),e(ii,wf),e(gt,yf),e(gt,li),e(li,kf),e(gt,Tf),e(N,$f),e(N,Vt),k(js,Vt,null),e(Vt,xf),e(Vt,Fs),e(Fs,Wf),e(Fs,ci),e(ci,Vf),e(Fs,jf),e(Vt,Ff),k(So,Vt,null),e(N,Cf),e(N,di),k(Cs,di,null),e(N,Ef),e(N,jt),k(Es,jt,null),e(jt,Pf),e(jt,kl),e(kl,qf),e(jt,zf),k(No,jt,null),e(N,Mf),e(N,Ft),k(Ps,Ft,null),e(Ft,Af),e(Ft,Tl),e(Tl,Lf),e(Ft,Df),k(Io,Ft,null),e(N,Of),e(N,Bo),k(qs,Bo,null),e(Bo,Sf),e(Bo,$l),e($l,Nf),_(o,md,g),_(o,Ut,g),e(Ut,Uo),e(Uo,xl),k(zs,xl,null),e(Ut,If),e(Ut,Wl),e(Wl,Bf),_(o,fd,g),_(o,Rt,g),k(Ms,Rt,null),e(Rt,Uf),e(Rt,As),e(As,Rf),e(As,Vl),e(Vl,Hf),e(As,Xf),_(o,ud,g),_(o,Ht,g),k(Ls,Ht,null),e(Ht,Gf),e(Ht,Ds),e(Ds,Jf),e(Ds,jl),e(jl,Zf),e(Ds,Kf),_(o,gd,g),_(o,Xt,g),k(Os,Xt,null),e(Xt,Qf),e(Xt,Ss),e(Ss,Yf),e(Ss,pi),e(pi,eu),e(Ss,tu),_(o,_d,g),_(o,_t,g),k(Ns,_t,null),e(_t,ou),e(_t,Is),e(Is,au),e(Is,Fl),e(Fl,su),e(Is,nu),e(_t,ru),e(_t,Ro),k(Bs,Ro,null),e(Ro,iu),e(Ro,Cl),e(Cl,lu),_(o,vd,g),_(o,vt,g),k(Us,vt,null),e(vt,cu),e(vt,Rs),e(Rs,du),e(Rs,El),e(El,pu),e(Rs,hu),e(vt,mu),e(vt,Ho),k(Hs,Ho,null),e(Ho,fu),e(Ho,Pl),e(Pl,uu),_(o,bd,g),_(o,Gt,g),e(Gt,Xo),e(Xo,ql),k(Xs,ql,null),e(Gt,gu),e(Gt,zl),e(zl,_u),_(o,wd,g),_(o,xe,g),k(Gs,xe,null),e(xe,vu),e(xe,Js),e(Js,bu),e(Js,Zs),e(Zs,wu),e(Js,yu),e(xe,ku),e(xe,Ks),e(Ks,Tu),e(Ks,hi),e(hi,$u),e(Ks,xu),e(xe,Wu),e(xe,Qs),e(Qs,Vu),e(Qs,Ys),e(Ys,ju),e(Qs,Fu),e(xe,Cu),e(xe,Ge),k(en,Ge,null),e(Ge,Eu),e(Ge,Jt),e(Jt,Pu),e(Jt,mi),e(mi,qu),e(Jt,zu),e(Jt,Ml),e(Ml,Mu),e(Jt,Au),e(Ge,Lu),k(Go,Ge,null),e(Ge,Du),k(Jo,Ge,null),_(o,yd,g),_(o,Zt,g),e(Zt,Zo),e(Zo,Al),k(tn,Al,null),e(Zt,Ou),e(Zt,Ll),e(Ll,Su),_(o,kd,g),_(o,We,g),k(on,We,null),e(We,Nu),e(We,Kt),e(Kt,Iu),e(Kt,Dl),e(Dl,Bu),e(Kt,Uu),e(Kt,an),e(an,Ru),e(Kt,Hu),e(We,Xu),e(We,sn),e(sn,Gu),e(sn,fi),e(fi,Ju),e(sn,Zu),e(We,Ku),e(We,nn),e(nn,Qu),e(nn,rn),e(rn,Yu),e(nn,eg),e(We,tg),e(We,ze),k(ln,ze,null),e(ze,og),e(ze,Qt),e(Qt,ag),e(Qt,ui),e(ui,sg),e(Qt,ng),e(Qt,Ol),e(Ol,rg),e(Qt,ig),e(ze,lg),k(Ko,ze,null),e(ze,cg),k(Qo,ze,null),e(ze,dg),k(Yo,ze,null),_(o,Td,g),_(o,Yt,g),e(Yt,ea),e(ea,Sl),k(cn,Sl,null),e(Yt,pg),e(Yt,Nl),e(Nl,hg),_(o,$d,g),_(o,ne,g),k(dn,ne,null),e(ne,mg),e(ne,Il),e(Il,fg),e(ne,ug),e(ne,pn),e(pn,gg),e(pn,hn),e(hn,_g),e(pn,vg),e(ne,bg),e(ne,mn),e(mn,wg),e(mn,gi),e(gi,yg),e(mn,kg),e(ne,Tg),e(ne,fn),e(fn,$g),e(fn,un),e(un,xg),e(fn,Wg),e(ne,Vg),e(ne,Me),k(gn,Me,null),e(Me,jg),e(Me,eo),e(eo,Fg),e(eo,_i),e(_i,Cg),e(eo,Eg),e(eo,Bl),e(Bl,Pg),e(eo,qg),e(Me,zg),k(ta,Me,null),e(Me,Mg),k(oa,Me,null),e(Me,Ag),k(aa,Me,null),_(o,xd,g),_(o,to,g),e(to,sa),e(sa,Ul),k(_n,Ul,null),e(to,Lg),e(to,Rl),e(Rl,Dg),_(o,Wd,g),_(o,re,g),k(vn,re,null),e(re,Og),e(re,Hl),e(Hl,Sg),e(re,Ng),e(re,bn),e(bn,Ig),e(bn,wn),e(wn,Bg),e(bn,Ug),e(re,Rg),e(re,yn),e(yn,Hg),e(yn,vi),e(vi,Xg),e(yn,Gg),e(re,Jg),e(re,kn),e(kn,Zg),e(kn,Tn),e(Tn,Kg),e(kn,Qg),e(re,Yg),e(re,Je),k($n,Je,null),e(Je,e_),e(Je,oo),e(oo,t_),e(oo,bi),e(bi,o_),e(oo,a_),e(oo,Xl),e(Xl,s_),e(oo,n_),e(Je,r_),k(na,Je,null),e(Je,i_),k(ra,Je,null),_(o,Vd,g),_(o,ao,g),e(ao,ia),e(ia,Gl),k(xn,Gl,null),e(ao,l_),e(ao,Jl),e(Jl,c_),_(o,jd,g),_(o,ie,g),k(Wn,ie,null),e(ie,d_),e(ie,Zl),e(Zl,p_),e(ie,h_),e(ie,Vn),e(Vn,m_),e(Vn,jn),e(jn,f_),e(Vn,u_),e(ie,g_),e(ie,Fn),e(Fn,__),e(Fn,wi),e(wi,v_),e(Fn,b_),e(ie,w_),e(ie,Cn),e(Cn,y_),e(Cn,En),e(En,k_),e(Cn,T_),e(ie,$_),e(ie,Ze),k(Pn,Ze,null),e(Ze,x_),e(Ze,so),e(so,W_),e(so,yi),e(yi,V_),e(so,j_),e(so,Kl),e(Kl,F_),e(so,C_),e(Ze,E_),k(la,Ze,null),e(Ze,P_),k(ca,Ze,null),_(o,Fd,g),_(o,no,g),e(no,da),e(da,Ql),k(qn,Ql,null),e(no,q_),e(no,Yl),e(Yl,z_),_(o,Cd,g),_(o,Ve,g),k(zn,Ve,null),e(Ve,M_),e(Ve,ro),e(ro,A_),e(ro,ec),e(ec,L_),e(ro,D_),e(ro,Mn),e(Mn,O_),e(ro,S_),e(Ve,N_),e(Ve,An),e(An,I_),e(An,ki),e(ki,B_),e(An,U_),e(Ve,R_),e(Ve,Ln),e(Ln,H_),e(Ln,Dn),e(Dn,X_),e(Ln,G_),e(Ve,J_),e(Ve,Ke),k(On,Ke,null),e(Ke,Z_),e(Ke,io),e(io,K_),e(io,Ti),e(Ti,Q_),e(io,Y_),e(io,tc),e(tc,ev),e(io,tv),e(Ke,ov),k(pa,Ke,null),e(Ke,av),k(ha,Ke,null),_(o,Ed,g),_(o,lo,g),e(lo,ma),e(ma,oc),k(Sn,oc,null),e(lo,sv),e(lo,ac),e(ac,nv),_(o,Pd,g),_(o,le,g),k(Nn,le,null),e(le,rv),e(le,sc),e(sc,iv),e(le,lv),e(le,In),e(In,cv),e(In,$i),e($i,dv),e(In,pv),e(le,hv),e(le,Bn),e(Bn,mv),e(Bn,Un),e(Un,fv),e(Bn,uv),e(le,gv),k(fa,le,null),e(le,_v),e(le,Qe),k(Rn,Qe,null),e(Qe,vv),e(Qe,co),e(co,bv),e(co,xi),e(xi,wv),e(co,yv),e(co,nc),e(nc,kv),e(co,Tv),e(Qe,$v),k(ua,Qe,null),e(Qe,xv),k(ga,Qe,null),_(o,qd,g),_(o,po,g),e(po,_a),e(_a,rc),k(Hn,rc,null),e(po,Wv),e(po,ic),e(ic,Vv),_(o,zd,g),_(o,ce,g),k(Xn,ce,null),e(ce,jv),e(ce,Gn),e(Gn,Fv),e(Gn,lc),e(lc,Cv),e(Gn,Ev),e(ce,Pv),e(ce,Jn),e(Jn,qv),e(Jn,Wi),e(Wi,zv),e(Jn,Mv),e(ce,Av),e(ce,Zn),e(Zn,Lv),e(Zn,Kn),e(Kn,Dv),e(Zn,Ov),e(ce,Sv),k(va,ce,null),e(ce,Nv),e(ce,Ye),k(Qn,Ye,null),e(Ye,Iv),e(Ye,ho),e(ho,Bv),e(ho,Vi),e(Vi,Uv),e(ho,Rv),e(ho,cc),e(cc,Hv),e(ho,Xv),e(Ye,Gv),k(ba,Ye,null),e(Ye,Jv),k(wa,Ye,null),_(o,Md,g),_(o,mo,g),e(mo,ya),e(ya,dc),k(Yn,dc,null),e(mo,Zv),e(mo,pc),e(pc,Kv),_(o,Ad,g),_(o,K,g),k(er,K,null),e(K,Qv),e(K,tr),e(tr,Yv),e(tr,or),e(or,e2),e(tr,t2),e(K,o2),e(K,ar),e(ar,a2),e(ar,ji),e(ji,s2),e(ar,n2),e(K,r2),e(K,sr),e(sr,i2),e(sr,nr),e(nr,l2),e(sr,c2),e(K,d2),e(K,hc),e(hc,p2),e(K,h2),e(K,bt),e(bt,mc),e(mc,rr),e(rr,m2),e(bt,f2),e(bt,fc),e(fc,ir),e(ir,u2),e(bt,g2),e(bt,uc),e(uc,lr),e(lr,_2),e(bt,v2),e(bt,gc),e(gc,cr),e(cr,b2),e(K,w2),e(K,et),k(dr,et,null),e(et,y2),e(et,fo),e(fo,k2),e(fo,_c),e(_c,T2),e(fo,$2),e(fo,vc),e(vc,x2),e(fo,W2),e(et,V2),k(ka,et,null),e(et,j2),k(Ta,et,null),_(o,Ld,g),_(o,uo,g),e(uo,$a),e($a,bc),k(pr,bc,null),e(uo,F2),e(uo,wc),e(wc,C2),_(o,Dd,g),_(o,Q,g),k(hr,Q,null),e(Q,E2),e(Q,go),e(go,P2),e(go,yc),e(yc,q2),e(go,z2),e(go,mr),e(mr,M2),e(go,A2),e(Q,L2),e(Q,fr),e(fr,D2),e(fr,Fi),e(Fi,O2),e(fr,S2),e(Q,N2),e(Q,ur),e(ur,I2),e(ur,gr),e(gr,B2),e(ur,U2),e(Q,R2),e(Q,kc),e(kc,H2),e(Q,X2),e(Q,wt),e(wt,Tc),e(Tc,_r),e(_r,G2),e(wt,J2),e(wt,$c),e($c,vr),e(vr,Z2),e(wt,K2),e(wt,xc),e(xc,br),e(br,Q2),e(wt,Y2),e(wt,Wc),e(Wc,wr),e(wr,eb),e(Q,tb),e(Q,tt),k(yr,tt,null),e(tt,ob),e(tt,_o),e(_o,ab),e(_o,Vc),e(Vc,sb),e(_o,nb),e(_o,jc),e(jc,rb),e(_o,ib),e(tt,lb),k(xa,tt,null),e(tt,cb),k(Wa,tt,null),_(o,Od,g),_(o,vo,g),e(vo,Va),e(Va,Fc),k(kr,Fc,null),e(vo,db),e(vo,Cc),e(Cc,pb),_(o,Sd,g),_(o,Y,g),k(Tr,Y,null),e(Y,hb),e(Y,bo),e(bo,mb),e(bo,Ec),e(Ec,fb),e(bo,ub),e(bo,$r),e($r,gb),e(bo,_b),e(Y,vb),e(Y,xr),e(xr,bb),e(xr,Ci),e(Ci,wb),e(xr,yb),e(Y,kb),e(Y,Wr),e(Wr,Tb),e(Wr,Vr),e(Vr,$b),e(Wr,xb),e(Y,Wb),e(Y,Pc),e(Pc,Vb),e(Y,jb),e(Y,yt),e(yt,qc),e(qc,jr),e(jr,Fb),e(yt,Cb),e(yt,zc),e(zc,Fr),e(Fr,Eb),e(yt,Pb),e(yt,Mc),e(Mc,Cr),e(Cr,qb),e(yt,zb),e(yt,Ac),e(Ac,Er),e(Er,Mb),e(Y,Ab),e(Y,ot),k(Pr,ot,null),e(ot,Lb),e(ot,wo),e(wo,Db),e(wo,Ei),e(Ei,Ob),e(wo,Sb),e(wo,Lc),e(Lc,Nb),e(wo,Ib),e(ot,Bb),k(ja,ot,null),e(ot,Ub),k(Fa,ot,null),Nd=!0},p(o,[g]){const qr={};g&2&&(qr.$$scope={dirty:g,ctx:o}),To.$set(qr);const Dc={};g&2&&(Dc.$$scope={dirty:g,ctx:o}),Wo.$set(Dc);const Oc={};g&2&&(Oc.$$scope={dirty:g,ctx:o}),qo.$set(Oc);const Sc={};g&2&&(Sc.$$scope={dirty:g,ctx:o}),So.$set(Sc);const zr={};g&2&&(zr.$$scope={dirty:g,ctx:o}),No.$set(zr);const Nc={};g&2&&(Nc.$$scope={dirty:g,ctx:o}),Io.$set(Nc);const Ic={};g&2&&(Ic.$$scope={dirty:g,ctx:o}),Go.$set(Ic);const Bc={};g&2&&(Bc.$$scope={dirty:g,ctx:o}),Jo.$set(Bc);const Mr={};g&2&&(Mr.$$scope={dirty:g,ctx:o}),Ko.$set(Mr);const Uc={};g&2&&(Uc.$$scope={dirty:g,ctx:o}),Qo.$set(Uc);const Rc={};g&2&&(Rc.$$scope={dirty:g,ctx:o}),Yo.$set(Rc);const Hc={};g&2&&(Hc.$$scope={dirty:g,ctx:o}),ta.$set(Hc);const Xc={};g&2&&(Xc.$$scope={dirty:g,ctx:o}),oa.$set(Xc);const Gc={};g&2&&(Gc.$$scope={dirty:g,ctx:o}),aa.$set(Gc);const Ar={};g&2&&(Ar.$$scope={dirty:g,ctx:o}),na.$set(Ar);const Jc={};g&2&&(Jc.$$scope={dirty:g,ctx:o}),ra.$set(Jc);const Lr={};g&2&&(Lr.$$scope={dirty:g,ctx:o}),la.$set(Lr);const Zc={};g&2&&(Zc.$$scope={dirty:g,ctx:o}),ca.$set(Zc);const Dr={};g&2&&(Dr.$$scope={dirty:g,ctx:o}),pa.$set(Dr);const Kc={};g&2&&(Kc.$$scope={dirty:g,ctx:o}),ha.$set(Kc);const Or={};g&2&&(Or.$$scope={dirty:g,ctx:o}),fa.$set(Or);const Qc={};g&2&&(Qc.$$scope={dirty:g,ctx:o}),ua.$set(Qc);const Yc={};g&2&&(Yc.$$scope={dirty:g,ctx:o}),ga.$set(Yc);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:o}),va.$set(ed);const kt={};g&2&&(kt.$$scope={dirty:g,ctx:o}),ba.$set(kt);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:o}),wa.$set(yo);const td={};g&2&&(td.$$scope={dirty:g,ctx:o}),ka.$set(td);const od={};g&2&&(od.$$scope={dirty:g,ctx:o}),Ta.$set(od);const ko={};g&2&&(ko.$$scope={dirty:g,ctx:o}),xa.$set(ko);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:o}),Wa.$set(ad);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:o}),ja.$set(sd);const Sr={};g&2&&(Sr.$$scope={dirty:g,ctx:o}),Fa.$set(Sr)},i(o){Nd||(T(l.$$.fragment,o),T(H.$$.fragment,o),T(G.$$.fragment,o),T($e.$$.fragment,o),T(To.$$.fragment,o),T(Ja.$$.fragment,o),T(Za.$$.fragment,o),T(Qa.$$.fragment,o),T(Ya.$$.fragment,o),T(es.$$.fragment,o),T(Wo.$$.fragment,o),T(os.$$.fragment,o),T(as.$$.fragment,o),T(ss.$$.fragment,o),T(rs.$$.fragment,o),T(is.$$.fragment,o),T(ls.$$.fragment,o),T(ds.$$.fragment,o),T(ms.$$.fragment,o),T(fs.$$.fragment,o),T(us.$$.fragment,o),T(qo.$$.fragment,o),T(_s.$$.fragment,o),T(bs.$$.fragment,o),T(ys.$$.fragment,o),T(ks.$$.fragment,o),T(Ts.$$.fragment,o),T($s.$$.fragment,o),T(Vs.$$.fragment,o),T(js.$$.fragment,o),T(So.$$.fragment,o),T(Cs.$$.fragment,o),T(Es.$$.fragment,o),T(No.$$.fragment,o),T(Ps.$$.fragment,o),T(Io.$$.fragment,o),T(qs.$$.fragment,o),T(zs.$$.fragment,o),T(Ms.$$.fragment,o),T(Ls.$$.fragment,o),T(Os.$$.fragment,o),T(Ns.$$.fragment,o),T(Bs.$$.fragment,o),T(Us.$$.fragment,o),T(Hs.$$.fragment,o),T(Xs.$$.fragment,o),T(Gs.$$.fragment,o),T(en.$$.fragment,o),T(Go.$$.fragment,o),T(Jo.$$.fragment,o),T(tn.$$.fragment,o),T(on.$$.fragment,o),T(ln.$$.fragment,o),T(Ko.$$.fragment,o),T(Qo.$$.fragment,o),T(Yo.$$.fragment,o),T(cn.$$.fragment,o),T(dn.$$.fragment,o),T(gn.$$.fragment,o),T(ta.$$.fragment,o),T(oa.$$.fragment,o),T(aa.$$.fragment,o),T(_n.$$.fragment,o),T(vn.$$.fragment,o),T($n.$$.fragment,o),T(na.$$.fragment,o),T(ra.$$.fragment,o),T(xn.$$.fragment,o),T(Wn.$$.fragment,o),T(Pn.$$.fragment,o),T(la.$$.fragment,o),T(ca.$$.fragment,o),T(qn.$$.fragment,o),T(zn.$$.fragment,o),T(On.$$.fragment,o),T(pa.$$.fragment,o),T(ha.$$.fragment,o),T(Sn.$$.fragment,o),T(Nn.$$.fragment,o),T(fa.$$.fragment,o),T(Rn.$$.fragment,o),T(ua.$$.fragment,o),T(ga.$$.fragment,o),T(Hn.$$.fragment,o),T(Xn.$$.fragment,o),T(va.$$.fragment,o),T(Qn.$$.fragment,o),T(ba.$$.fragment,o),T(wa.$$.fragment,o),T(Yn.$$.fragment,o),T(er.$$.fragment,o),T(dr.$$.fragment,o),T(ka.$$.fragment,o),T(Ta.$$.fragment,o),T(pr.$$.fragment,o),T(hr.$$.fragment,o),T(yr.$$.fragment,o),T(xa.$$.fragment,o),T(Wa.$$.fragment,o),T(kr.$$.fragment,o),T(Tr.$$.fragment,o),T(Pr.$$.fragment,o),T(ja.$$.fragment,o),T(Fa.$$.fragment,o),Nd=!0)},o(o){$(l.$$.fragment,o),$(H.$$.fragment,o),$(G.$$.fragment,o),$($e.$$.fragment,o),$(To.$$.fragment,o),$(Ja.$$.fragment,o),$(Za.$$.fragment,o),$(Qa.$$.fragment,o),$(Ya.$$.fragment,o),$(es.$$.fragment,o),$(Wo.$$.fragment,o),$(os.$$.fragment,o),$(as.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(ms.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(qo.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(ys.$$.fragment,o),$(ks.$$.fragment,o),$(Ts.$$.fragment,o),$($s.$$.fragment,o),$(Vs.$$.fragment,o),$(js.$$.fragment,o),$(So.$$.fragment,o),$(Cs.$$.fragment,o),$(Es.$$.fragment,o),$(No.$$.fragment,o),$(Ps.$$.fragment,o),$(Io.$$.fragment,o),$(qs.$$.fragment,o),$(zs.$$.fragment,o),$(Ms.$$.fragment,o),$(Ls.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),$(Hs.$$.fragment,o),$(Xs.$$.fragment,o),$(Gs.$$.fragment,o),$(en.$$.fragment,o),$(Go.$$.fragment,o),$(Jo.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(ln.$$.fragment,o),$(Ko.$$.fragment,o),$(Qo.$$.fragment,o),$(Yo.$$.fragment,o),$(cn.$$.fragment,o),$(dn.$$.fragment,o),$(gn.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(aa.$$.fragment,o),$(_n.$$.fragment,o),$(vn.$$.fragment,o),$($n.$$.fragment,o),$(na.$$.fragment,o),$(ra.$$.fragment,o),$(xn.$$.fragment,o),$(Wn.$$.fragment,o),$(Pn.$$.fragment,o),$(la.$$.fragment,o),$(ca.$$.fragment,o),$(qn.$$.fragment,o),$(zn.$$.fragment,o),$(On.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(Sn.$$.fragment,o),$(Nn.$$.fragment,o),$(fa.$$.fragment,o),$(Rn.$$.fragment,o),$(ua.$$.fragment,o),$(ga.$$.fragment,o),$(Hn.$$.fragment,o),$(Xn.$$.fragment,o),$(va.$$.fragment,o),$(Qn.$$.fragment,o),$(ba.$$.fragment,o),$(wa.$$.fragment,o),$(Yn.$$.fragment,o),$(er.$$.fragment,o),$(dr.$$.fragment,o),$(ka.$$.fragment,o),$(Ta.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(yr.$$.fragment,o),$(xa.$$.fragment,o),$(Wa.$$.fragment,o),$(kr.$$.fragment,o),$(Tr.$$.fragment,o),$(Pr.$$.fragment,o),$(ja.$$.fragment,o),$(Fa.$$.fragment,o),Nd=!1},d(o){t(c),o&&t(b),o&&t(f),x(l),o&&t(q),o&&t(C),x(H),o&&t(ge),o&&t(B),o&&t(I),o&&t(Fe),o&&t(Re),o&&t(Ce),o&&t(He),o&&t(D),o&&t(de),o&&t(pe),o&&t(V),o&&t(E),o&&t($t),o&&t(ke),x(G),o&&t(xt),o&&t(J),x($e),x(To),o&&t(nd),o&&t(St),x(Ja),o&&t(rd),o&&t(Z),x(Za),x(Qa),x(Ya),x(es),x(Wo),x(os),o&&t(id),o&&t(Nt),x(as),o&&t(ld),o&&t(Ue),x(ss),x(rs),o&&t(cd),o&&t(It),x(is),o&&t(dd),o&&t(M),x(ls),x(ds),x(ms),x(fs),x(us),x(qo),x(_s),x(bs),x(ys),o&&t(pd),o&&t(Bt),x(ks),o&&t(hd),o&&t(N),x(Ts),x($s),x(Vs),x(js),x(So),x(Cs),x(Es),x(No),x(Ps),x(Io),x(qs),o&&t(md),o&&t(Ut),x(zs),o&&t(fd),o&&t(Rt),x(Ms),o&&t(ud),o&&t(Ht),x(Ls),o&&t(gd),o&&t(Xt),x(Os),o&&t(_d),o&&t(_t),x(Ns),x(Bs),o&&t(vd),o&&t(vt),x(Us),x(Hs),o&&t(bd),o&&t(Gt),x(Xs),o&&t(wd),o&&t(xe),x(Gs),x(en),x(Go),x(Jo),o&&t(yd),o&&t(Zt),x(tn),o&&t(kd),o&&t(We),x(on),x(ln),x(Ko),x(Qo),x(Yo),o&&t(Td),o&&t(Yt),x(cn),o&&t($d),o&&t(ne),x(dn),x(gn),x(ta),x(oa),x(aa),o&&t(xd),o&&t(to),x(_n),o&&t(Wd),o&&t(re),x(vn),x($n),x(na),x(ra),o&&t(Vd),o&&t(ao),x(xn),o&&t(jd),o&&t(ie),x(Wn),x(Pn),x(la),x(ca),o&&t(Fd),o&&t(no),x(qn),o&&t(Cd),o&&t(Ve),x(zn),x(On),x(pa),x(ha),o&&t(Ed),o&&t(lo),x(Sn),o&&t(Pd),o&&t(le),x(Nn),x(fa),x(Rn),x(ua),x(ga),o&&t(qd),o&&t(po),x(Hn),o&&t(zd),o&&t(ce),x(Xn),x(va),x(Qn),x(ba),x(wa),o&&t(Md),o&&t(mo),x(Yn),o&&t(Ad),o&&t(K),x(er),x(dr),x(ka),x(Ta),o&&t(Ld),o&&t(uo),x(pr),o&&t(Dd),o&&t(Q),x(hr),x(yr),x(xa),x(Wa),o&&t(Od),o&&t(vo),x(kr),o&&t(Sd),o&&t(Y),x(Tr),x(Pr),x(ja),x(Fa)}}}const t1={local:"wav2vec2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2Config",title:"Wav2Vec2Config"},{local:"transformers.Wav2Vec2CTCTokenizer",title:"Wav2Vec2CTCTokenizer"},{local:"transformers.Wav2Vec2FeatureExtractor",title:"Wav2Vec2FeatureExtractor"},{local:"transformers.Wav2Vec2Processor",title:"Wav2Vec2Processor"},{local:"transformers.Wav2Vec2ProcessorWithLM",title:"Wav2Vec2ProcessorWithLM"},{local:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",title:"Wav2Vec2 specific outputs"},{local:"transformers.Wav2Vec2Model",title:"Wav2Vec2Model"},{local:"transformers.Wav2Vec2ForCTC",title:"Wav2Vec2ForCTC"},{local:"transformers.Wav2Vec2ForSequenceClassification",title:"Wav2Vec2ForSequenceClassification"},{local:"transformers.Wav2Vec2ForAudioFrameClassification",title:"Wav2Vec2ForAudioFrameClassification"},{local:"transformers.Wav2Vec2ForXVector",title:"Wav2Vec2ForXVector"},{local:"transformers.Wav2Vec2ForPreTraining",title:"Wav2Vec2ForPreTraining"},{local:"transformers.TFWav2Vec2Model",title:"TFWav2Vec2Model"},{local:"transformers.TFWav2Vec2ForCTC",title:"TFWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2Model",title:"FlaxWav2Vec2Model"},{local:"transformers.FlaxWav2Vec2ForCTC",title:"FlaxWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2ForPreTraining",title:"FlaxWav2Vec2ForPreTraining"}],title:"Wav2Vec2"};function o1(W){return y0(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class c1 extends _0{constructor(c){super();v0(this,c,o1,e1,b0,{})}}export{c1 as default,t1 as metadata};
