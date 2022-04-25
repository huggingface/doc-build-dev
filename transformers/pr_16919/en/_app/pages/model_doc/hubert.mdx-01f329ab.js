import{S as wi,i as Ti,s as yi,e as a,k as u,w as T,t as s,M as ki,c as r,d as t,m as h,a as i,x as y,h as n,b as f,F as e,g,y as k,q as $,o as C,B as H,v as $i,L as xt}from"../../chunks/vendor-6b77c823.js";import{T as wo}from"../../chunks/Tip-39098574.js";import{D as ze}from"../../chunks/Docstring-1088f2fb.js";import{C as qt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Et}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ft}from"../../chunks/ExampleCodeBlock-5212b321.js";function Ci(E){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import HubertModel, HubertConfig

# Initializing a Hubert facebook/hubert-base-ls960 style configuration
configuration = HubertConfig()

# Initializing a model from the facebook/hubert-base-ls960 style configuration
model = HubertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HubertModel, HubertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Hubert facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = HubertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=s("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Example:"),m.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Hi(E){let d,v,c,p,b;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=n(F,"Module"),F.forEach(t),b=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function ji(E){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2Processor, HubertModel
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-large-ls960-ft")
model = HubertModel.from_pretrained("facebook/hubert-large-ls960-ft")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="pt").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, HubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=a("p"),v=s("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Example:"),m.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Ei(E){let d,v,c,p,b;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=n(F,"Module"),F.forEach(t),b=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Fi(E){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2Processor, HubertForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-large-ls960-ft")
model = HubertForCTC.from_pretrained("facebook/hubert-large-ls960-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, HubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){d=a("p"),v=s("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Example:"),m.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function xi(E){let d,v;return d=new qt({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">22.68</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){k(d,c,p),v=!0},p:xt,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){C(d.$$.fragment,c),v=!1},d(c){H(d,c)}}}function qi(E){let d,v,c,p,b;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=n(F,"Module"),F.forEach(t),b=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Mi(E){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2FeatureExtractor, HubertForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("superb/hubert-base-superb-ks")
model = HubertForSequenceClassification.from_pretrained("superb/hubert-base-superb-ks")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, HubertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){d=a("p"),v=s("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Example:"),m.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Pi(E){let d,v;return d=new qt({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">8.53</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){k(d,c,p),v=!0},p:xt,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){C(d.$$.fragment,c),v=!1},d(c){H(d,c)}}}function Si(E){let d,v,c,p,b,l,m,F,je,ie,x,K,O,X,Ee,L,Fe,be,A,I,J,me,q,P,le,Q,ve,de,W,xe,we,M,qe,Y,G,fe,Z,Me,ee,N,ce,te,Pe;return{c(){d=a("p"),v=s("TF 2.0 models accepts two formats as inputs:"),c=u(),p=a("ul"),b=a("li"),l=s("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),F=a("li"),je=s("having all inputs as a list, tuple or dict in the first positional arguments."),ie=u(),x=a("p"),K=s("This second option is useful when using "),O=a("code"),X=s("tf.keras.Model.fit"),Ee=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a("code"),Fe=s("model(inputs)"),be=s("."),A=u(),I=a("p"),J=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),me=u(),q=a("ul"),P=a("li"),le=s("a single Tensor with "),Q=a("code"),ve=s("input_values"),de=s(" only and nothing else: "),W=a("code"),xe=s("model(inputs_ids)"),we=u(),M=a("li"),qe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),G=s("model([input_values, attention_mask])"),fe=s(" or "),Z=a("code"),Me=s("model([input_values, attention_mask, token_type_ids])"),ee=u(),N=a("li"),ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(w){d=r(w,"P",{});var j=i(d);v=n(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),c=h(w),p=r(w,"UL",{});var ge=i(p);b=r(ge,"LI",{});var _e=i(b);l=n(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=h(ge),F=r(ge,"LI",{});var Ne=i(F);je=n(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),ge.forEach(t),ie=h(w),x=r(w,"P",{});var B=i(x);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var De=i(O);X=n(De,"tf.keras.Model.fit"),De.forEach(t),Ee=n(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r(B,"CODE",{});var oe=i(L);Fe=n(oe,"model(inputs)"),oe.forEach(t),be=n(B,"."),B.forEach(t),A=h(w),I=r(w,"P",{});var pe=i(I);J=n(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe.forEach(t),me=h(w),q=r(w,"UL",{});var S=i(q);P=r(S,"LI",{});var z=i(P);le=n(z,"a single Tensor with "),Q=r(z,"CODE",{});var Be=i(Q);ve=n(Be,"input_values"),Be.forEach(t),de=n(z," only and nothing else: "),W=r(z,"CODE",{});var Se=i(W);xe=n(Se,"model(inputs_ids)"),Se.forEach(t),z.forEach(t),we=h(S),M=r(S,"LI",{});var se=i(M);qe=n(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(se,"CODE",{});var Ae=i(Y);G=n(Ae,"model([input_values, attention_mask])"),Ae.forEach(t),fe=n(se," or "),Z=r(se,"CODE",{});var D=i(Z);Me=n(D,"model([input_values, attention_mask, token_type_ids])"),D.forEach(t),se.forEach(t),ee=h(S),N=r(S,"LI",{});var ne=i(N);ce=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(ne,"CODE",{});var Re=i(te);Pe=n(Re,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Re.forEach(t),ne.forEach(t),S.forEach(t)},m(w,j){g(w,d,j),e(d,v),g(w,c,j),g(w,p,j),e(p,b),e(b,l),e(p,m),e(p,F),e(F,je),g(w,ie,j),g(w,x,j),e(x,K),e(x,O),e(O,X),e(x,Ee),e(x,L),e(L,Fe),e(x,be),g(w,A,j),g(w,I,j),e(I,J),g(w,me,j),g(w,q,j),e(q,P),e(P,le),e(P,Q),e(Q,ve),e(P,de),e(P,W),e(W,xe),e(q,we),e(q,M),e(M,qe),e(M,Y),e(Y,G),e(M,fe),e(M,Z),e(Z,Me),e(q,ee),e(q,N),e(N,ce),e(N,te),e(te,Pe)},d(w){w&&t(d),w&&t(c),w&&t(p),w&&t(ie),w&&t(x),w&&t(A),w&&t(I),w&&t(me),w&&t(q)}}}function zi(E){let d,v,c,p,b;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=n(F,"Module"),F.forEach(t),b=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Di(E){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2Processor, TFHubertModel
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-base-960h")
model = TFHubertModel.from_pretrained("facebook/hubert-base-960h")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFHubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=a("p"),v=s("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Example:"),m.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Ai(E){let d,v,c,p,b,l,m,F,je,ie,x,K,O,X,Ee,L,Fe,be,A,I,J,me,q,P,le,Q,ve,de,W,xe,we,M,qe,Y,G,fe,Z,Me,ee,N,ce,te,Pe;return{c(){d=a("p"),v=s("TF 2.0 models accepts two formats as inputs:"),c=u(),p=a("ul"),b=a("li"),l=s("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),F=a("li"),je=s("having all inputs as a list, tuple or dict in the first positional arguments."),ie=u(),x=a("p"),K=s("This second option is useful when using "),O=a("code"),X=s("tf.keras.Model.fit"),Ee=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a("code"),Fe=s("model(inputs)"),be=s("."),A=u(),I=a("p"),J=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),me=u(),q=a("ul"),P=a("li"),le=s("a single Tensor with "),Q=a("code"),ve=s("input_values"),de=s(" only and nothing else: "),W=a("code"),xe=s("model(inputs_ids)"),we=u(),M=a("li"),qe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),G=s("model([input_values, attention_mask])"),fe=s(" or "),Z=a("code"),Me=s("model([input_values, attention_mask, token_type_ids])"),ee=u(),N=a("li"),ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(w){d=r(w,"P",{});var j=i(d);v=n(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),c=h(w),p=r(w,"UL",{});var ge=i(p);b=r(ge,"LI",{});var _e=i(b);l=n(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=h(ge),F=r(ge,"LI",{});var Ne=i(F);je=n(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),ge.forEach(t),ie=h(w),x=r(w,"P",{});var B=i(x);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var De=i(O);X=n(De,"tf.keras.Model.fit"),De.forEach(t),Ee=n(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r(B,"CODE",{});var oe=i(L);Fe=n(oe,"model(inputs)"),oe.forEach(t),be=n(B,"."),B.forEach(t),A=h(w),I=r(w,"P",{});var pe=i(I);J=n(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe.forEach(t),me=h(w),q=r(w,"UL",{});var S=i(q);P=r(S,"LI",{});var z=i(P);le=n(z,"a single Tensor with "),Q=r(z,"CODE",{});var Be=i(Q);ve=n(Be,"input_values"),Be.forEach(t),de=n(z," only and nothing else: "),W=r(z,"CODE",{});var Se=i(W);xe=n(Se,"model(inputs_ids)"),Se.forEach(t),z.forEach(t),we=h(S),M=r(S,"LI",{});var se=i(M);qe=n(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(se,"CODE",{});var Ae=i(Y);G=n(Ae,"model([input_values, attention_mask])"),Ae.forEach(t),fe=n(se," or "),Z=r(se,"CODE",{});var D=i(Z);Me=n(D,"model([input_values, attention_mask, token_type_ids])"),D.forEach(t),se.forEach(t),ee=h(S),N=r(S,"LI",{});var ne=i(N);ce=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(ne,"CODE",{});var Re=i(te);Pe=n(Re,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Re.forEach(t),ne.forEach(t),S.forEach(t)},m(w,j){g(w,d,j),e(d,v),g(w,c,j),g(w,p,j),e(p,b),e(b,l),e(p,m),e(p,F),e(F,je),g(w,ie,j),g(w,x,j),e(x,K),e(x,O),e(O,X),e(x,Ee),e(x,L),e(L,Fe),e(x,be),g(w,A,j),g(w,I,j),e(I,J),g(w,me,j),g(w,q,j),e(q,P),e(P,le),e(P,Q),e(Q,ve),e(P,de),e(P,W),e(W,xe),e(q,we),e(q,M),e(M,qe),e(M,Y),e(Y,G),e(M,fe),e(M,Z),e(Z,Me),e(q,ee),e(q,N),e(N,ce),e(N,te),e(te,Pe)},d(w){w&&t(d),w&&t(c),w&&t(p),w&&t(ie),w&&t(x),w&&t(A),w&&t(I),w&&t(me),w&&t(q)}}}function Oi(E){let d,v,c,p,b;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=n(F,"Module"),F.forEach(t),b=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Li(E){let d,v,c,p,b;return p=new qt({props:{code:`import tensorflow as tf
from transformers import Wav2Vec2Processor, TFHubertForCTC
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-base-960h")
model = TFHubertForCTC.from_pretrained("facebook/hubert-base-960h")


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
    labels = processor(transcription, return_tensors="tf").input_values

loss = model(input_values, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFHubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)


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
<span class="hljs-meta">... </span>    labels = processor(transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){d=a("p"),v=s("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=n(m,"Example:"),m.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Ii(E){let d,v,c,p,b,l,m,F,je,ie,x,K,O,X,Ee,L,Fe,be,A,I,J,me,q,P,le,Q,ve,de,W,xe,we,M,qe,Y,G,fe,Z,Me,ee,N,ce,te,Pe,w,j,ge,_e,Ne,B,De,oe,pe,S,z,Be,Se,se,Ae,D,ne,Re,Ve,Xs,To,Js,Qs,Mt,Zs,en,tn,Ue,on,yo,sn,nn,ko,an,rn,ln,nt,bs,Ke,at,No,Pt,dn,Bo,cn,vs,ae,St,pn,zt,un,Dt,hn,mn,fn,At,gn,$o,_n,bn,vn,Ot,wn,Lt,Tn,yn,kn,Te,It,$n,Ye,Cn,Co,Hn,jn,Ro,En,Fn,xn,rt,qn,it,ws,Ge,lt,Vo,Wt,Mn,Uo,Pn,Ts,re,Nt,Sn,Xe,zn,Ko,Dn,An,Bt,On,Ln,In,Rt,Wn,Ho,Nn,Bn,Rn,Vt,Vn,Ut,Un,Kn,Yn,ue,Kt,Gn,Je,Xn,jo,Jn,Qn,Yo,Zn,ea,ta,dt,oa,ct,sa,pt,ys,Qe,ut,Go,Yt,na,Xo,aa,ks,R,Gt,ra,Jo,ia,la,Xt,da,Jt,ca,pa,ua,Qt,ha,Eo,ma,fa,ga,Zt,_a,eo,ba,va,wa,he,to,Ta,Ze,ya,Fo,ka,$a,Qo,Ca,Ha,ja,ht,Ea,mt,Fa,ft,$s,et,gt,Zo,oo,xa,es,qa,Cs,V,so,Ma,ts,Pa,Sa,no,za,xo,Da,Aa,Oa,ao,La,ro,Ia,Wa,Na,_t,Ba,ye,io,Ra,tt,Va,qo,Ua,Ka,os,Ya,Ga,Xa,bt,Ja,vt,Hs,ot,wt,ss,lo,Qa,ns,Za,js,U,co,er,po,tr,as,or,sr,nr,uo,ar,Mo,rr,ir,lr,ho,dr,mo,cr,pr,ur,Tt,hr,ke,fo,mr,st,fr,Po,gr,_r,rs,br,vr,wr,yt,Tr,kt,Es;return l=new Et({}),X=new Et({}),z=new Et({}),ne=new ze({props:{name:"class transformers.HubertConfig",anchor:"transformers.HubertConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_layer_norm",val:" = True"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.HubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Hubert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.HubertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.HubertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.HubertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.HubertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.HubertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.HubertConfig.hidden_dropout(float,",description:`<strong>hidden_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout(float,"},{anchor:"transformers.HubertConfig.attention_dropout(float,",description:`<strong>attention_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout(float,"},{anchor:"transformers.HubertConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for the final projection layer of <a href="/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.HubertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.HubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.HubertConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.HubertConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.HubertConfig.feat_proj_layer_norm",description:`<strong>feat_proj_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply LayerNorm to the output of the feature encoder.`,name:"feat_proj_layer_norm"},{anchor:"transformers.HubertConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.HubertConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.HubertConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.HubertConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.HubertConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.HubertConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.HubertConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.HubertConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether do apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.HubertConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.HubertConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.HubertConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.HubertConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.HubertConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.HubertConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.HubertConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.HubertConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.HubertConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.HubertConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertForSequenceClassification">HubertForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.HubertConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/configuration_hubert.py#L32"}}),nt=new Ft({props:{anchor:"transformers.HubertConfig.example",$$slots:{default:[Ci]},$$scope:{ctx:E}}}),Pt=new Et({}),St=new ze({props:{name:"class transformers.HubertModel",anchor:"transformers.HubertModel",parameters:[{name:"config",val:": HubertConfig"}],parametersDescription:[{anchor:"transformers.HubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_hubert.py#L942"}}),It=new ze({props:{name:"forward",anchor:"transformers.HubertModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.HubertModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_hubert.py#L1007",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new wo({props:{$$slots:{default:[Hi]},$$scope:{ctx:E}}}),it=new Ft({props:{anchor:"transformers.HubertModel.forward.example",$$slots:{default:[ji]},$$scope:{ctx:E}}}),Wt=new Et({}),Nt=new ze({props:{name:"class transformers.HubertForCTC",anchor:"transformers.HubertForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.HubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_hubert.py#L1086"}}),Kt=new ze({props:{name:"forward",anchor:"transformers.HubertForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.HubertForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_hubert.py#L1127",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new wo({props:{$$slots:{default:[Ei]},$$scope:{ctx:E}}}),ct=new Ft({props:{anchor:"transformers.HubertForCTC.forward.example",$$slots:{default:[Fi]},$$scope:{ctx:E}}}),pt=new Ft({props:{anchor:"transformers.HubertForCTC.forward.example-2",$$slots:{default:[xi]},$$scope:{ctx:E}}}),Yt=new Et({}),Gt=new ze({props:{name:"class transformers.HubertForSequenceClassification",anchor:"transformers.HubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_hubert.py#L1217"}}),to=new ze({props:{name:"forward",anchor:"transformers.HubertForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_hubert.py#L1262",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new wo({props:{$$slots:{default:[qi]},$$scope:{ctx:E}}}),mt=new Ft({props:{anchor:"transformers.HubertForSequenceClassification.forward.example",$$slots:{default:[Mi]},$$scope:{ctx:E}}}),ft=new Ft({props:{anchor:"transformers.HubertForSequenceClassification.forward.example-2",$$slots:{default:[Pi]},$$scope:{ctx:E}}}),oo=new Et({}),so=new ze({props:{name:"class transformers.TFHubertModel",anchor:"transformers.TFHubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_tf_hubert.py#L1402"}}),_t=new wo({props:{$$slots:{default:[Si]},$$scope:{ctx:E}}}),io=new ze({props:{name:"call",anchor:"transformers.TFHubertModel.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFHubertModel.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_tf_hubert.py#L1408",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bt=new wo({props:{$$slots:{default:[zi]},$$scope:{ctx:E}}}),vt=new Ft({props:{anchor:"transformers.TFHubertModel.call.example",$$slots:{default:[Di]},$$scope:{ctx:E}}}),lo=new Et({}),co=new ze({props:{name:"class transformers.TFHubertForCTC",anchor:"transformers.TFHubertForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_tf_hubert.py#L1500"}}),Tt=new wo({props:{$$slots:{default:[Ai]},$$scope:{ctx:E}}}),fo=new ze({props:{name:"call",anchor:"transformers.TFHubertForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertForCTC.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertForCTC.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertForCTC.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertForCTC.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertForCTC.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertForCTC.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertForCTC.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertForCTC.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFHubertForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/hubert/modeling_tf_hubert.py#L1527",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yt=new wo({props:{$$slots:{default:[Oi]},$$scope:{ctx:E}}}),kt=new Ft({props:{anchor:"transformers.TFHubertForCTC.call.example",$$slots:{default:[Li]},$$scope:{ctx:E}}}),{c(){d=a("meta"),v=u(),c=a("h1"),p=a("a"),b=a("span"),T(l.$$.fragment),m=u(),F=a("span"),je=s("Hubert"),ie=u(),x=a("h2"),K=a("a"),O=a("span"),T(X.$$.fragment),Ee=u(),L=a("span"),Fe=s("Overview"),be=u(),A=a("p"),I=s("Hubert was proposed in "),J=a("a"),me=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),q=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),P=u(),le=a("p"),Q=s("The abstract from the paper is the following:"),ve=u(),de=a("p"),W=a("em"),xe=s(`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
multiple sound units in each input utterance, (2) there is no lexicon of input sound units during the pre-training
phase, and (3) sound units have variable lengths with no explicit segmentation. To deal with these three problems, we
propose the Hidden-Unit BERT (HuBERT) approach for self-supervised speech representation learning, which utilizes an
offline clustering step to provide aligned target labels for a BERT-like prediction loss. A key ingredient of our
approach is applying the prediction loss over the masked regions only, which forces the model to learn a combined
acoustic and language model over the continuous inputs. HuBERT relies primarily on the consistency of the unsupervised
clustering step rather than the intrinsic quality of the assigned cluster labels. Starting with a simple k-means
teacher of 100 clusters, and using two iterations of clustering, the HuBERT model either matches or improves upon the
state-of-the-art wav2vec 2.0 performance on the Librispeech (960h) and Libri-light (60,000h) benchmarks with 10min, 1h,
10h, 100h, and 960h fine-tuning subsets. Using a 1B parameter model, HuBERT shows up to 19% and 13% relative WER
reduction on the more challenging dev-other and test-other evaluation subsets.`),we=u(),M=a("p"),qe=s("Tips:"),Y=u(),G=a("ul"),fe=a("li"),Z=s("Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Me=u(),ee=a("li"),N=s(`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=a("a"),te=s("Wav2Vec2CTCTokenizer"),Pe=s("."),w=u(),j=a("p"),ge=s("This model was contributed by "),_e=a("a"),Ne=s("patrickvonplaten"),B=s("."),De=u(),oe=a("h2"),pe=a("a"),S=a("span"),T(z.$$.fragment),Be=u(),Se=a("span"),se=s("HubertConfig"),Ae=u(),D=a("div"),T(ne.$$.fragment),Re=u(),Ve=a("p"),Xs=s("This is the configuration class to store the configuration of a "),To=a("a"),Js=s("HubertModel"),Qs=s(`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),Mt=a("a"),Zs=s("facebook/hubert-base-ls960"),en=s(" architecture."),tn=u(),Ue=a("p"),on=s("Configuration objects inherit from "),yo=a("a"),sn=s("PretrainedConfig"),nn=s(` and can be used to control the model outputs. Read the
documentation from `),ko=a("a"),an=s("PretrainedConfig"),rn=s(" for more information."),ln=u(),T(nt.$$.fragment),bs=u(),Ke=a("h2"),at=a("a"),No=a("span"),T(Pt.$$.fragment),dn=u(),Bo=a("span"),cn=s("HubertModel"),vs=u(),ae=a("div"),T(St.$$.fragment),pn=u(),zt=a("p"),un=s(`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),Dt=a("a"),hn=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),mn=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),fn=u(),At=a("p"),gn=s("This model inherits from "),$o=a("a"),_n=s("PreTrainedModel"),bn=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),vn=u(),Ot=a("p"),wn=s("This model is a PyTorch "),Lt=a("a"),Tn=s("torch.nn.Module"),yn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kn=u(),Te=a("div"),T(It.$$.fragment),$n=u(),Ye=a("p"),Cn=s("The "),Co=a("a"),Hn=s("HubertModel"),jn=s(" forward method, overrides the "),Ro=a("code"),En=s("__call__"),Fn=s(" special method."),xn=u(),T(rt.$$.fragment),qn=u(),T(it.$$.fragment),ws=u(),Ge=a("h2"),lt=a("a"),Vo=a("span"),T(Wt.$$.fragment),Mn=u(),Uo=a("span"),Pn=s("HubertForCTC"),Ts=u(),re=a("div"),T(Nt.$$.fragment),Sn=u(),Xe=a("p"),zn=s("Hubert Model with a "),Ko=a("code"),Dn=s("language modeling"),An=s(` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),Bt=a("a"),On=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Ln=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),In=u(),Rt=a("p"),Wn=s("This model inherits from "),Ho=a("a"),Nn=s("PreTrainedModel"),Bn=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Rn=u(),Vt=a("p"),Vn=s("This model is a PyTorch "),Ut=a("a"),Un=s("torch.nn.Module"),Kn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yn=u(),ue=a("div"),T(Kt.$$.fragment),Gn=u(),Je=a("p"),Xn=s("The "),jo=a("a"),Jn=s("HubertForCTC"),Qn=s(" forward method, overrides the "),Yo=a("code"),Zn=s("__call__"),ea=s(" special method."),ta=u(),T(dt.$$.fragment),oa=u(),T(ct.$$.fragment),sa=u(),T(pt.$$.fragment),ys=u(),Qe=a("h2"),ut=a("a"),Go=a("span"),T(Yt.$$.fragment),na=u(),Xo=a("span"),aa=s("HubertForSequenceClassification"),ks=u(),R=a("div"),T(Gt.$$.fragment),ra=u(),Jo=a("p"),ia=s(`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),la=u(),Xt=a("p"),da=s("Hubert was proposed in "),Jt=a("a"),ca=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),pa=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),ua=u(),Qt=a("p"),ha=s("This model inherits from "),Eo=a("a"),ma=s("PreTrainedModel"),fa=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ga=u(),Zt=a("p"),_a=s("This model is a PyTorch "),eo=a("a"),ba=s("torch.nn.Module"),va=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wa=u(),he=a("div"),T(to.$$.fragment),Ta=u(),Ze=a("p"),ya=s("The "),Fo=a("a"),ka=s("HubertForSequenceClassification"),$a=s(" forward method, overrides the "),Qo=a("code"),Ca=s("__call__"),Ha=s(" special method."),ja=u(),T(ht.$$.fragment),Ea=u(),T(mt.$$.fragment),Fa=u(),T(ft.$$.fragment),$s=u(),et=a("h2"),gt=a("a"),Zo=a("span"),T(oo.$$.fragment),xa=u(),es=a("span"),qa=s("TFHubertModel"),Cs=u(),V=a("div"),T(so.$$.fragment),Ma=u(),ts=a("p"),Pa=s("The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),Sa=u(),no=a("p"),za=s("This model inherits from "),xo=a("a"),Da=s("TFPreTrainedModel"),Aa=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oa=u(),ao=a("p"),La=s("This model is also a "),ro=a("a"),Ia=s("tf.keras.Model"),Wa=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Na=u(),T(_t.$$.fragment),Ba=u(),ye=a("div"),T(io.$$.fragment),Ra=u(),tt=a("p"),Va=s("The "),qo=a("a"),Ua=s("TFHubertModel"),Ka=s(" forward method, overrides the "),os=a("code"),Ya=s("__call__"),Ga=s(" special method."),Xa=u(),T(bt.$$.fragment),Ja=u(),T(vt.$$.fragment),Hs=u(),ot=a("h2"),wt=a("a"),ss=a("span"),T(lo.$$.fragment),Qa=u(),ns=a("span"),Za=s("TFHubertForCTC"),js=u(),U=a("div"),T(co.$$.fragment),er=u(),po=a("p"),tr=s("TFHubert Model with a "),as=a("code"),or=s("language modeling"),sr=s(" head on top for Connectionist Temporal Classification (CTC)."),nr=u(),uo=a("p"),ar=s("This model inherits from "),Mo=a("a"),rr=s("TFPreTrainedModel"),ir=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=u(),ho=a("p"),dr=s("This model is also a "),mo=a("a"),cr=s("tf.keras.Model"),pr=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ur=u(),T(Tt.$$.fragment),hr=u(),ke=a("div"),T(fo.$$.fragment),mr=u(),st=a("p"),fr=s("The "),Po=a("a"),gr=s("TFHubertForCTC"),_r=s(" forward method, overrides the "),rs=a("code"),br=s("__call__"),vr=s(" special method."),wr=u(),T(yt.$$.fragment),Tr=u(),T(kt.$$.fragment),this.h()},l(o){const _=ki('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=h(o),c=r(o,"H1",{class:!0});var go=i(c);p=r(go,"A",{id:!0,class:!0,href:!0});var is=i(p);b=r(is,"SPAN",{});var ls=i(b);y(l.$$.fragment,ls),ls.forEach(t),is.forEach(t),m=h(go),F=r(go,"SPAN",{});var ds=i(F);je=n(ds,"Hubert"),ds.forEach(t),go.forEach(t),ie=h(o),x=r(o,"H2",{class:!0});var _o=i(x);K=r(_o,"A",{id:!0,class:!0,href:!0});var cs=i(K);O=r(cs,"SPAN",{});var ps=i(O);y(X.$$.fragment,ps),ps.forEach(t),cs.forEach(t),Ee=h(_o),L=r(_o,"SPAN",{});var us=i(L);Fe=n(us,"Overview"),us.forEach(t),_o.forEach(t),be=h(o),A=r(o,"P",{});var bo=i(A);I=n(bo,"Hubert was proposed in "),J=r(bo,"A",{href:!0,rel:!0});var hs=i(J);me=n(hs,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),hs.forEach(t),q=n(bo,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),bo.forEach(t),P=h(o),le=r(o,"P",{});var ms=i(le);Q=n(ms,"The abstract from the paper is the following:"),ms.forEach(t),ve=h(o),de=r(o,"P",{});var fs=i(de);W=r(fs,"EM",{});var gs=i(W);xe=n(gs,`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
multiple sound units in each input utterance, (2) there is no lexicon of input sound units during the pre-training
phase, and (3) sound units have variable lengths with no explicit segmentation. To deal with these three problems, we
propose the Hidden-Unit BERT (HuBERT) approach for self-supervised speech representation learning, which utilizes an
offline clustering step to provide aligned target labels for a BERT-like prediction loss. A key ingredient of our
approach is applying the prediction loss over the masked regions only, which forces the model to learn a combined
acoustic and language model over the continuous inputs. HuBERT relies primarily on the consistency of the unsupervised
clustering step rather than the intrinsic quality of the assigned cluster labels. Starting with a simple k-means
teacher of 100 clusters, and using two iterations of clustering, the HuBERT model either matches or improves upon the
state-of-the-art wav2vec 2.0 performance on the Librispeech (960h) and Libri-light (60,000h) benchmarks with 10min, 1h,
10h, 100h, and 960h fine-tuning subsets. Using a 1B parameter model, HuBERT shows up to 19% and 13% relative WER
reduction on the more challenging dev-other and test-other evaluation subsets.`),gs.forEach(t),fs.forEach(t),we=h(o),M=r(o,"P",{});var _s=i(M);qe=n(_s,"Tips:"),_s.forEach(t),Y=h(o),G=r(o,"UL",{});var vo=i(G);fe=r(vo,"LI",{});var yr=i(fe);Z=n(yr,"Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),yr.forEach(t),Me=h(vo),ee=r(vo,"LI",{});var Fs=i(ee);N=n(Fs,`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=r(Fs,"A",{href:!0});var kr=i(ce);te=n(kr,"Wav2Vec2CTCTokenizer"),kr.forEach(t),Pe=n(Fs,"."),Fs.forEach(t),vo.forEach(t),w=h(o),j=r(o,"P",{});var xs=i(j);ge=n(xs,"This model was contributed by "),_e=r(xs,"A",{href:!0,rel:!0});var $r=i(_e);Ne=n($r,"patrickvonplaten"),$r.forEach(t),B=n(xs,"."),xs.forEach(t),De=h(o),oe=r(o,"H2",{class:!0});var qs=i(oe);pe=r(qs,"A",{id:!0,class:!0,href:!0});var Cr=i(pe);S=r(Cr,"SPAN",{});var Hr=i(S);y(z.$$.fragment,Hr),Hr.forEach(t),Cr.forEach(t),Be=h(qs),Se=r(qs,"SPAN",{});var jr=i(Se);se=n(jr,"HubertConfig"),jr.forEach(t),qs.forEach(t),Ae=h(o),D=r(o,"DIV",{class:!0});var $t=i(D);y(ne.$$.fragment,$t),Re=h($t),Ve=r($t,"P",{});var So=i(Ve);Xs=n(So,"This is the configuration class to store the configuration of a "),To=r(So,"A",{href:!0});var Er=i(To);Js=n(Er,"HubertModel"),Er.forEach(t),Qs=n(So,`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),Mt=r(So,"A",{href:!0,rel:!0});var Fr=i(Mt);Zs=n(Fr,"facebook/hubert-base-ls960"),Fr.forEach(t),en=n(So," architecture."),So.forEach(t),tn=h($t),Ue=r($t,"P",{});var zo=i(Ue);on=n(zo,"Configuration objects inherit from "),yo=r(zo,"A",{href:!0});var xr=i(yo);sn=n(xr,"PretrainedConfig"),xr.forEach(t),nn=n(zo,` and can be used to control the model outputs. Read the
documentation from `),ko=r(zo,"A",{href:!0});var qr=i(ko);an=n(qr,"PretrainedConfig"),qr.forEach(t),rn=n(zo," for more information."),zo.forEach(t),ln=h($t),y(nt.$$.fragment,$t),$t.forEach(t),bs=h(o),Ke=r(o,"H2",{class:!0});var Ms=i(Ke);at=r(Ms,"A",{id:!0,class:!0,href:!0});var Mr=i(at);No=r(Mr,"SPAN",{});var Pr=i(No);y(Pt.$$.fragment,Pr),Pr.forEach(t),Mr.forEach(t),dn=h(Ms),Bo=r(Ms,"SPAN",{});var Sr=i(Bo);cn=n(Sr,"HubertModel"),Sr.forEach(t),Ms.forEach(t),vs=h(o),ae=r(o,"DIV",{class:!0});var Oe=i(ae);y(St.$$.fragment,Oe),pn=h(Oe),zt=r(Oe,"P",{});var Ps=i(zt);un=n(Ps,`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),Dt=r(Ps,"A",{href:!0,rel:!0});var zr=i(Dt);hn=n(zr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),zr.forEach(t),mn=n(Ps,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Ps.forEach(t),fn=h(Oe),At=r(Oe,"P",{});var Ss=i(At);gn=n(Ss,"This model inherits from "),$o=r(Ss,"A",{href:!0});var Dr=i($o);_n=n(Dr,"PreTrainedModel"),Dr.forEach(t),bn=n(Ss,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ss.forEach(t),vn=h(Oe),Ot=r(Oe,"P",{});var zs=i(Ot);wn=n(zs,"This model is a PyTorch "),Lt=r(zs,"A",{href:!0,rel:!0});var Ar=i(Lt);Tn=n(Ar,"torch.nn.Module"),Ar.forEach(t),yn=n(zs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zs.forEach(t),kn=h(Oe),Te=r(Oe,"DIV",{class:!0});var Ct=i(Te);y(It.$$.fragment,Ct),$n=h(Ct),Ye=r(Ct,"P",{});var Do=i(Ye);Cn=n(Do,"The "),Co=r(Do,"A",{href:!0});var Or=i(Co);Hn=n(Or,"HubertModel"),Or.forEach(t),jn=n(Do," forward method, overrides the "),Ro=r(Do,"CODE",{});var Lr=i(Ro);En=n(Lr,"__call__"),Lr.forEach(t),Fn=n(Do," special method."),Do.forEach(t),xn=h(Ct),y(rt.$$.fragment,Ct),qn=h(Ct),y(it.$$.fragment,Ct),Ct.forEach(t),Oe.forEach(t),ws=h(o),Ge=r(o,"H2",{class:!0});var Ds=i(Ge);lt=r(Ds,"A",{id:!0,class:!0,href:!0});var Ir=i(lt);Vo=r(Ir,"SPAN",{});var Wr=i(Vo);y(Wt.$$.fragment,Wr),Wr.forEach(t),Ir.forEach(t),Mn=h(Ds),Uo=r(Ds,"SPAN",{});var Nr=i(Uo);Pn=n(Nr,"HubertForCTC"),Nr.forEach(t),Ds.forEach(t),Ts=h(o),re=r(o,"DIV",{class:!0});var Le=i(re);y(Nt.$$.fragment,Le),Sn=h(Le),Xe=r(Le,"P",{});var Ao=i(Xe);zn=n(Ao,"Hubert Model with a "),Ko=r(Ao,"CODE",{});var Br=i(Ko);Dn=n(Br,"language modeling"),Br.forEach(t),An=n(Ao,` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),Bt=r(Ao,"A",{href:!0,rel:!0});var Rr=i(Bt);On=n(Rr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Rr.forEach(t),Ln=n(Ao,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Ao.forEach(t),In=h(Le),Rt=r(Le,"P",{});var As=i(Rt);Wn=n(As,"This model inherits from "),Ho=r(As,"A",{href:!0});var Vr=i(Ho);Nn=n(Vr,"PreTrainedModel"),Vr.forEach(t),Bn=n(As,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),As.forEach(t),Rn=h(Le),Vt=r(Le,"P",{});var Os=i(Vt);Vn=n(Os,"This model is a PyTorch "),Ut=r(Os,"A",{href:!0,rel:!0});var Ur=i(Ut);Un=n(Ur,"torch.nn.Module"),Ur.forEach(t),Kn=n(Os,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(t),Yn=h(Le),ue=r(Le,"DIV",{class:!0});var Ie=i(ue);y(Kt.$$.fragment,Ie),Gn=h(Ie),Je=r(Ie,"P",{});var Oo=i(Je);Xn=n(Oo,"The "),jo=r(Oo,"A",{href:!0});var Kr=i(jo);Jn=n(Kr,"HubertForCTC"),Kr.forEach(t),Qn=n(Oo," forward method, overrides the "),Yo=r(Oo,"CODE",{});var Yr=i(Yo);Zn=n(Yr,"__call__"),Yr.forEach(t),ea=n(Oo," special method."),Oo.forEach(t),ta=h(Ie),y(dt.$$.fragment,Ie),oa=h(Ie),y(ct.$$.fragment,Ie),sa=h(Ie),y(pt.$$.fragment,Ie),Ie.forEach(t),Le.forEach(t),ys=h(o),Qe=r(o,"H2",{class:!0});var Ls=i(Qe);ut=r(Ls,"A",{id:!0,class:!0,href:!0});var Gr=i(ut);Go=r(Gr,"SPAN",{});var Xr=i(Go);y(Yt.$$.fragment,Xr),Xr.forEach(t),Gr.forEach(t),na=h(Ls),Xo=r(Ls,"SPAN",{});var Jr=i(Xo);aa=n(Jr,"HubertForSequenceClassification"),Jr.forEach(t),Ls.forEach(t),ks=h(o),R=r(o,"DIV",{class:!0});var $e=i(R);y(Gt.$$.fragment,$e),ra=h($e),Jo=r($e,"P",{});var Qr=i(Jo);ia=n(Qr,`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Qr.forEach(t),la=h($e),Xt=r($e,"P",{});var Is=i(Xt);da=n(Is,"Hubert was proposed in "),Jt=r(Is,"A",{href:!0,rel:!0});var Zr=i(Jt);ca=n(Zr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Zr.forEach(t),pa=n(Is,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Is.forEach(t),ua=h($e),Qt=r($e,"P",{});var Ws=i(Qt);ha=n(Ws,"This model inherits from "),Eo=r(Ws,"A",{href:!0});var ei=i(Eo);ma=n(ei,"PreTrainedModel"),ei.forEach(t),fa=n(Ws,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ws.forEach(t),ga=h($e),Zt=r($e,"P",{});var Ns=i(Zt);_a=n(Ns,"This model is a PyTorch "),eo=r(Ns,"A",{href:!0,rel:!0});var ti=i(eo);ba=n(ti,"torch.nn.Module"),ti.forEach(t),va=n(Ns,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ns.forEach(t),wa=h($e),he=r($e,"DIV",{class:!0});var We=i(he);y(to.$$.fragment,We),Ta=h(We),Ze=r(We,"P",{});var Lo=i(Ze);ya=n(Lo,"The "),Fo=r(Lo,"A",{href:!0});var oi=i(Fo);ka=n(oi,"HubertForSequenceClassification"),oi.forEach(t),$a=n(Lo," forward method, overrides the "),Qo=r(Lo,"CODE",{});var si=i(Qo);Ca=n(si,"__call__"),si.forEach(t),Ha=n(Lo," special method."),Lo.forEach(t),ja=h(We),y(ht.$$.fragment,We),Ea=h(We),y(mt.$$.fragment,We),Fa=h(We),y(ft.$$.fragment,We),We.forEach(t),$e.forEach(t),$s=h(o),et=r(o,"H2",{class:!0});var Bs=i(et);gt=r(Bs,"A",{id:!0,class:!0,href:!0});var ni=i(gt);Zo=r(ni,"SPAN",{});var ai=i(Zo);y(oo.$$.fragment,ai),ai.forEach(t),ni.forEach(t),xa=h(Bs),es=r(Bs,"SPAN",{});var ri=i(es);qa=n(ri,"TFHubertModel"),ri.forEach(t),Bs.forEach(t),Cs=h(o),V=r(o,"DIV",{class:!0});var Ce=i(V);y(so.$$.fragment,Ce),Ma=h(Ce),ts=r(Ce,"P",{});var ii=i(ts);Pa=n(ii,"The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),ii.forEach(t),Sa=h(Ce),no=r(Ce,"P",{});var Rs=i(no);za=n(Rs,"This model inherits from "),xo=r(Rs,"A",{href:!0});var li=i(xo);Da=n(li,"TFPreTrainedModel"),li.forEach(t),Aa=n(Rs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rs.forEach(t),Oa=h(Ce),ao=r(Ce,"P",{});var Vs=i(ao);La=n(Vs,"This model is also a "),ro=r(Vs,"A",{href:!0,rel:!0});var di=i(ro);Ia=n(di,"tf.keras.Model"),di.forEach(t),Wa=n(Vs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vs.forEach(t),Na=h(Ce),y(_t.$$.fragment,Ce),Ba=h(Ce),ye=r(Ce,"DIV",{class:!0});var Ht=i(ye);y(io.$$.fragment,Ht),Ra=h(Ht),tt=r(Ht,"P",{});var Io=i(tt);Va=n(Io,"The "),qo=r(Io,"A",{href:!0});var ci=i(qo);Ua=n(ci,"TFHubertModel"),ci.forEach(t),Ka=n(Io," forward method, overrides the "),os=r(Io,"CODE",{});var pi=i(os);Ya=n(pi,"__call__"),pi.forEach(t),Ga=n(Io," special method."),Io.forEach(t),Xa=h(Ht),y(bt.$$.fragment,Ht),Ja=h(Ht),y(vt.$$.fragment,Ht),Ht.forEach(t),Ce.forEach(t),Hs=h(o),ot=r(o,"H2",{class:!0});var Us=i(ot);wt=r(Us,"A",{id:!0,class:!0,href:!0});var ui=i(wt);ss=r(ui,"SPAN",{});var hi=i(ss);y(lo.$$.fragment,hi),hi.forEach(t),ui.forEach(t),Qa=h(Us),ns=r(Us,"SPAN",{});var mi=i(ns);Za=n(mi,"TFHubertForCTC"),mi.forEach(t),Us.forEach(t),js=h(o),U=r(o,"DIV",{class:!0});var He=i(U);y(co.$$.fragment,He),er=h(He),po=r(He,"P",{});var Ks=i(po);tr=n(Ks,"TFHubert Model with a "),as=r(Ks,"CODE",{});var fi=i(as);or=n(fi,"language modeling"),fi.forEach(t),sr=n(Ks," head on top for Connectionist Temporal Classification (CTC)."),Ks.forEach(t),nr=h(He),uo=r(He,"P",{});var Ys=i(uo);ar=n(Ys,"This model inherits from "),Mo=r(Ys,"A",{href:!0});var gi=i(Mo);rr=n(gi,"TFPreTrainedModel"),gi.forEach(t),ir=n(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(t),lr=h(He),ho=r(He,"P",{});var Gs=i(ho);dr=n(Gs,"This model is also a "),mo=r(Gs,"A",{href:!0,rel:!0});var _i=i(mo);cr=n(_i,"tf.keras.Model"),_i.forEach(t),pr=n(Gs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gs.forEach(t),ur=h(He),y(Tt.$$.fragment,He),hr=h(He),ke=r(He,"DIV",{class:!0});var jt=i(ke);y(fo.$$.fragment,jt),mr=h(jt),st=r(jt,"P",{});var Wo=i(st);fr=n(Wo,"The "),Po=r(Wo,"A",{href:!0});var bi=i(Po);gr=n(bi,"TFHubertForCTC"),bi.forEach(t),_r=n(Wo," forward method, overrides the "),rs=r(Wo,"CODE",{});var vi=i(rs);br=n(vi,"__call__"),vi.forEach(t),vr=n(Wo," special method."),Wo.forEach(t),wr=h(jt),y(yt.$$.fragment,jt),Tr=h(jt),y(kt.$$.fragment,jt),jt.forEach(t),He.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Wi)),f(p,"id","hubert"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#hubert"),f(c,"class","relative group"),f(K,"id","overview"),f(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(K,"href","#overview"),f(x,"class","relative group"),f(J,"href","https://arxiv.org/abs/2106.07447"),f(J,"rel","nofollow"),f(ce,"href","/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),f(_e,"href","https://huggingface.co/patrickvonplaten"),f(_e,"rel","nofollow"),f(pe,"id","transformers.HubertConfig"),f(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pe,"href","#transformers.HubertConfig"),f(oe,"class","relative group"),f(To,"href","/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertModel"),f(Mt,"href","https://huggingface.co/facebook/hubert-base-ls960"),f(Mt,"rel","nofollow"),f(yo,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),f(ko,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"id","transformers.HubertModel"),f(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(at,"href","#transformers.HubertModel"),f(Ke,"class","relative group"),f(Dt,"href","https://arxiv.org/abs/2106.07447"),f(Dt,"rel","nofollow"),f($o,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Lt,"rel","nofollow"),f(Co,"href","/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertModel"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"id","transformers.HubertForCTC"),f(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(lt,"href","#transformers.HubertForCTC"),f(Ge,"class","relative group"),f(Bt,"href","https://arxiv.org/abs/2106.07447"),f(Bt,"rel","nofollow"),f(Ho,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ut,"rel","nofollow"),f(jo,"href","/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertForCTC"),f(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"id","transformers.HubertForSequenceClassification"),f(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ut,"href","#transformers.HubertForSequenceClassification"),f(Qe,"class","relative group"),f(Jt,"href","https://arxiv.org/abs/2106.07447"),f(Jt,"rel","nofollow"),f(Eo,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(eo,"rel","nofollow"),f(Fo,"href","/docs/transformers/pr_16919/en/model_doc/hubert#transformers.HubertForSequenceClassification"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"id","transformers.TFHubertModel"),f(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gt,"href","#transformers.TFHubertModel"),f(et,"class","relative group"),f(xo,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),f(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ro,"rel","nofollow"),f(qo,"href","/docs/transformers/pr_16919/en/model_doc/hubert#transformers.TFHubertModel"),f(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wt,"id","transformers.TFHubertForCTC"),f(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wt,"href","#transformers.TFHubertForCTC"),f(ot,"class","relative group"),f(Mo,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),f(mo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(mo,"rel","nofollow"),f(Po,"href","/docs/transformers/pr_16919/en/model_doc/hubert#transformers.TFHubertForCTC"),f(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,v,_),g(o,c,_),e(c,p),e(p,b),k(l,b,null),e(c,m),e(c,F),e(F,je),g(o,ie,_),g(o,x,_),e(x,K),e(K,O),k(X,O,null),e(x,Ee),e(x,L),e(L,Fe),g(o,be,_),g(o,A,_),e(A,I),e(A,J),e(J,me),e(A,q),g(o,P,_),g(o,le,_),e(le,Q),g(o,ve,_),g(o,de,_),e(de,W),e(W,xe),g(o,we,_),g(o,M,_),e(M,qe),g(o,Y,_),g(o,G,_),e(G,fe),e(fe,Z),e(G,Me),e(G,ee),e(ee,N),e(ee,ce),e(ce,te),e(ee,Pe),g(o,w,_),g(o,j,_),e(j,ge),e(j,_e),e(_e,Ne),e(j,B),g(o,De,_),g(o,oe,_),e(oe,pe),e(pe,S),k(z,S,null),e(oe,Be),e(oe,Se),e(Se,se),g(o,Ae,_),g(o,D,_),k(ne,D,null),e(D,Re),e(D,Ve),e(Ve,Xs),e(Ve,To),e(To,Js),e(Ve,Qs),e(Ve,Mt),e(Mt,Zs),e(Ve,en),e(D,tn),e(D,Ue),e(Ue,on),e(Ue,yo),e(yo,sn),e(Ue,nn),e(Ue,ko),e(ko,an),e(Ue,rn),e(D,ln),k(nt,D,null),g(o,bs,_),g(o,Ke,_),e(Ke,at),e(at,No),k(Pt,No,null),e(Ke,dn),e(Ke,Bo),e(Bo,cn),g(o,vs,_),g(o,ae,_),k(St,ae,null),e(ae,pn),e(ae,zt),e(zt,un),e(zt,Dt),e(Dt,hn),e(zt,mn),e(ae,fn),e(ae,At),e(At,gn),e(At,$o),e($o,_n),e(At,bn),e(ae,vn),e(ae,Ot),e(Ot,wn),e(Ot,Lt),e(Lt,Tn),e(Ot,yn),e(ae,kn),e(ae,Te),k(It,Te,null),e(Te,$n),e(Te,Ye),e(Ye,Cn),e(Ye,Co),e(Co,Hn),e(Ye,jn),e(Ye,Ro),e(Ro,En),e(Ye,Fn),e(Te,xn),k(rt,Te,null),e(Te,qn),k(it,Te,null),g(o,ws,_),g(o,Ge,_),e(Ge,lt),e(lt,Vo),k(Wt,Vo,null),e(Ge,Mn),e(Ge,Uo),e(Uo,Pn),g(o,Ts,_),g(o,re,_),k(Nt,re,null),e(re,Sn),e(re,Xe),e(Xe,zn),e(Xe,Ko),e(Ko,Dn),e(Xe,An),e(Xe,Bt),e(Bt,On),e(Xe,Ln),e(re,In),e(re,Rt),e(Rt,Wn),e(Rt,Ho),e(Ho,Nn),e(Rt,Bn),e(re,Rn),e(re,Vt),e(Vt,Vn),e(Vt,Ut),e(Ut,Un),e(Vt,Kn),e(re,Yn),e(re,ue),k(Kt,ue,null),e(ue,Gn),e(ue,Je),e(Je,Xn),e(Je,jo),e(jo,Jn),e(Je,Qn),e(Je,Yo),e(Yo,Zn),e(Je,ea),e(ue,ta),k(dt,ue,null),e(ue,oa),k(ct,ue,null),e(ue,sa),k(pt,ue,null),g(o,ys,_),g(o,Qe,_),e(Qe,ut),e(ut,Go),k(Yt,Go,null),e(Qe,na),e(Qe,Xo),e(Xo,aa),g(o,ks,_),g(o,R,_),k(Gt,R,null),e(R,ra),e(R,Jo),e(Jo,ia),e(R,la),e(R,Xt),e(Xt,da),e(Xt,Jt),e(Jt,ca),e(Xt,pa),e(R,ua),e(R,Qt),e(Qt,ha),e(Qt,Eo),e(Eo,ma),e(Qt,fa),e(R,ga),e(R,Zt),e(Zt,_a),e(Zt,eo),e(eo,ba),e(Zt,va),e(R,wa),e(R,he),k(to,he,null),e(he,Ta),e(he,Ze),e(Ze,ya),e(Ze,Fo),e(Fo,ka),e(Ze,$a),e(Ze,Qo),e(Qo,Ca),e(Ze,Ha),e(he,ja),k(ht,he,null),e(he,Ea),k(mt,he,null),e(he,Fa),k(ft,he,null),g(o,$s,_),g(o,et,_),e(et,gt),e(gt,Zo),k(oo,Zo,null),e(et,xa),e(et,es),e(es,qa),g(o,Cs,_),g(o,V,_),k(so,V,null),e(V,Ma),e(V,ts),e(ts,Pa),e(V,Sa),e(V,no),e(no,za),e(no,xo),e(xo,Da),e(no,Aa),e(V,Oa),e(V,ao),e(ao,La),e(ao,ro),e(ro,Ia),e(ao,Wa),e(V,Na),k(_t,V,null),e(V,Ba),e(V,ye),k(io,ye,null),e(ye,Ra),e(ye,tt),e(tt,Va),e(tt,qo),e(qo,Ua),e(tt,Ka),e(tt,os),e(os,Ya),e(tt,Ga),e(ye,Xa),k(bt,ye,null),e(ye,Ja),k(vt,ye,null),g(o,Hs,_),g(o,ot,_),e(ot,wt),e(wt,ss),k(lo,ss,null),e(ot,Qa),e(ot,ns),e(ns,Za),g(o,js,_),g(o,U,_),k(co,U,null),e(U,er),e(U,po),e(po,tr),e(po,as),e(as,or),e(po,sr),e(U,nr),e(U,uo),e(uo,ar),e(uo,Mo),e(Mo,rr),e(uo,ir),e(U,lr),e(U,ho),e(ho,dr),e(ho,mo),e(mo,cr),e(ho,pr),e(U,ur),k(Tt,U,null),e(U,hr),e(U,ke),k(fo,ke,null),e(ke,mr),e(ke,st),e(st,fr),e(st,Po),e(Po,gr),e(st,_r),e(st,rs),e(rs,br),e(st,vr),e(ke,wr),k(yt,ke,null),e(ke,Tr),k(kt,ke,null),Es=!0},p(o,[_]){const go={};_&2&&(go.$$scope={dirty:_,ctx:o}),nt.$set(go);const is={};_&2&&(is.$$scope={dirty:_,ctx:o}),rt.$set(is);const ls={};_&2&&(ls.$$scope={dirty:_,ctx:o}),it.$set(ls);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:o}),dt.$set(ds);const _o={};_&2&&(_o.$$scope={dirty:_,ctx:o}),ct.$set(_o);const cs={};_&2&&(cs.$$scope={dirty:_,ctx:o}),pt.$set(cs);const ps={};_&2&&(ps.$$scope={dirty:_,ctx:o}),ht.$set(ps);const us={};_&2&&(us.$$scope={dirty:_,ctx:o}),mt.$set(us);const bo={};_&2&&(bo.$$scope={dirty:_,ctx:o}),ft.$set(bo);const hs={};_&2&&(hs.$$scope={dirty:_,ctx:o}),_t.$set(hs);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:o}),bt.$set(ms);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:o}),vt.$set(fs);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:o}),Tt.$set(gs);const _s={};_&2&&(_s.$$scope={dirty:_,ctx:o}),yt.$set(_s);const vo={};_&2&&(vo.$$scope={dirty:_,ctx:o}),kt.$set(vo)},i(o){Es||($(l.$$.fragment,o),$(X.$$.fragment,o),$(z.$$.fragment,o),$(ne.$$.fragment,o),$(nt.$$.fragment,o),$(Pt.$$.fragment,o),$(St.$$.fragment,o),$(It.$$.fragment,o),$(rt.$$.fragment,o),$(it.$$.fragment,o),$(Wt.$$.fragment,o),$(Nt.$$.fragment,o),$(Kt.$$.fragment,o),$(dt.$$.fragment,o),$(ct.$$.fragment,o),$(pt.$$.fragment,o),$(Yt.$$.fragment,o),$(Gt.$$.fragment,o),$(to.$$.fragment,o),$(ht.$$.fragment,o),$(mt.$$.fragment,o),$(ft.$$.fragment,o),$(oo.$$.fragment,o),$(so.$$.fragment,o),$(_t.$$.fragment,o),$(io.$$.fragment,o),$(bt.$$.fragment,o),$(vt.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(Tt.$$.fragment,o),$(fo.$$.fragment,o),$(yt.$$.fragment,o),$(kt.$$.fragment,o),Es=!0)},o(o){C(l.$$.fragment,o),C(X.$$.fragment,o),C(z.$$.fragment,o),C(ne.$$.fragment,o),C(nt.$$.fragment,o),C(Pt.$$.fragment,o),C(St.$$.fragment,o),C(It.$$.fragment,o),C(rt.$$.fragment,o),C(it.$$.fragment,o),C(Wt.$$.fragment,o),C(Nt.$$.fragment,o),C(Kt.$$.fragment,o),C(dt.$$.fragment,o),C(ct.$$.fragment,o),C(pt.$$.fragment,o),C(Yt.$$.fragment,o),C(Gt.$$.fragment,o),C(to.$$.fragment,o),C(ht.$$.fragment,o),C(mt.$$.fragment,o),C(ft.$$.fragment,o),C(oo.$$.fragment,o),C(so.$$.fragment,o),C(_t.$$.fragment,o),C(io.$$.fragment,o),C(bt.$$.fragment,o),C(vt.$$.fragment,o),C(lo.$$.fragment,o),C(co.$$.fragment,o),C(Tt.$$.fragment,o),C(fo.$$.fragment,o),C(yt.$$.fragment,o),C(kt.$$.fragment,o),Es=!1},d(o){t(d),o&&t(v),o&&t(c),H(l),o&&t(ie),o&&t(x),H(X),o&&t(be),o&&t(A),o&&t(P),o&&t(le),o&&t(ve),o&&t(de),o&&t(we),o&&t(M),o&&t(Y),o&&t(G),o&&t(w),o&&t(j),o&&t(De),o&&t(oe),H(z),o&&t(Ae),o&&t(D),H(ne),H(nt),o&&t(bs),o&&t(Ke),H(Pt),o&&t(vs),o&&t(ae),H(St),H(It),H(rt),H(it),o&&t(ws),o&&t(Ge),H(Wt),o&&t(Ts),o&&t(re),H(Nt),H(Kt),H(dt),H(ct),H(pt),o&&t(ys),o&&t(Qe),H(Yt),o&&t(ks),o&&t(R),H(Gt),H(to),H(ht),H(mt),H(ft),o&&t($s),o&&t(et),H(oo),o&&t(Cs),o&&t(V),H(so),H(_t),H(io),H(bt),H(vt),o&&t(Hs),o&&t(ot),H(lo),o&&t(js),o&&t(U),H(co),H(Tt),H(fo),H(yt),H(kt)}}}const Wi={local:"hubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HubertConfig",title:"HubertConfig"},{local:"transformers.HubertModel",title:"HubertModel"},{local:"transformers.HubertForCTC",title:"HubertForCTC"},{local:"transformers.HubertForSequenceClassification",title:"HubertForSequenceClassification"},{local:"transformers.TFHubertModel",title:"TFHubertModel"},{local:"transformers.TFHubertForCTC",title:"TFHubertForCTC"}],title:"Hubert"};function Ni(E){return $i(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gi extends wi{constructor(d){super();Ti(this,d,Ni,Ii,yi,{})}}export{Gi as default,Wi as metadata};
