import{S as ai,i as ri,s as si,e as n,k as h,w,t as s,M as ii,c as a,d as o,m,a as r,x as y,h as i,b as d,F as e,g as _,y as S,q as $,o as T,B as U,v as li,L as kt}from"../../chunks/vendor-6b77c823.js";import{T as Sn}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-1088f2fb.js";import{C as Ct}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Fe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ut}from"../../chunks/ExampleCodeBlock-5212b321.js";function ci(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import UniSpeechModel, UniSpeechConfig

# Initializing a UniSpeech facebook/unispeech-base-960h style configuration
configuration = UniSpeechConfig()

# Initializing a model from the facebook/unispeech-base-960h style configuration
model = UniSpeechModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> UniSpeechModel, UniSpeechConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a UniSpeech facebook/unispeech-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = UniSpeechConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/unispeech-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function di(k){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function pi(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")
model = UniSpeechModel.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, UniSpeechModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function hi(k){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function mi(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")
model = UniSpeechForCTC.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, UniSpeechForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechForCTC.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;mister quilter is the apposl of the midle classes and weare glad to welcom his gosepl&#x27;</span>`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function ui(k){let c,v;return c=new Ct({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">17.17</span>`}}),{c(){w(c.$$.fragment)},l(p){y(c.$$.fragment,p)},m(p,u){S(c,p,u),v=!0},p:kt,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){T(c.$$.fragment,p),v=!1},d(p){U(c,p)}}}function fi(k){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function gi(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/tiny-random-unispeech")
model = UniSpeechForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-unispeech")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function _i(k){let c,v;return c=new Ct({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){w(c.$$.fragment)},l(p){y(c.$$.fragment,p)},m(p,u){S(c,p,u),v=!0},p:kt,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){T(c.$$.fragment,p),v=!1},d(p){U(c,p)}}}function vi(k){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function bi(k){let c,v,p,u,b;return u=new Ct({props:{code:`import torch
from transformers import Wav2Vec2FeatureExtractor, UniSpeechForPreTraining
from transformers.models.unispeech.modeling_unispeech import _compute_mask_indices

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(
    "hf-internal-testing/tiny-random-unispeech-sat"
)
model = UniSpeechForPreTraining.from_pretrained("microsoft/unispeech-large-1500h-cv")
# TODO: Add full pretraining example`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.unispeech.modeling_unispeech <span class="hljs-keyword">import</span> _compute_mask_indices

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech-sat&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechForPreTraining.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-large-1500h-cv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># <span class="hljs-doctag">TODO:</span> Add full pretraining example</span>`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=r(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function wi(k){let c,v,p,u,b,l,g,C,$n,Fo,H,ie,Jt,qe,Tn,Gt,Un,qo,le,kn,Pe,Cn,xn,Po,xt,jn,Eo,jt,eo,Fn,Mo,Ft,qn,zo,ce,Ee,Pn,qt,En,Mn,zn,Me,Dn,Pt,An,On,Do,W,Wn,ze,Ln,Nn,De,Vn,In,Ao,K,de,to,Ae,Bn,oo,Hn,Oo,M,Oe,Kn,Y,Yn,Et,Rn,Qn,We,Xn,Zn,Jn,R,Gn,Mt,ea,ta,zt,oa,na,aa,pe,Wo,Q,he,no,Le,ra,ao,sa,Lo,X,Ne,ia,Ve,la,ro,ca,da,No,Z,Ie,pa,Be,ha,so,ma,ua,Vo,J,me,io,He,fa,lo,ga,Io,j,Ke,_a,Ye,va,Re,ba,wa,ya,Qe,Sa,Dt,$a,Ta,Ua,Xe,ka,Ze,Ca,xa,ja,z,Je,Fa,G,qa,At,Pa,Ea,co,Ma,za,Da,ue,Aa,fe,Bo,ee,ge,po,Ge,Oa,ho,Wa,Ho,F,et,La,te,Na,mo,Va,Ia,tt,Ba,Ha,Ka,ot,Ya,Ot,Ra,Qa,Xa,nt,Za,at,Ja,Ga,er,P,rt,tr,oe,or,Wt,nr,ar,uo,rr,sr,ir,_e,lr,ve,cr,be,Ko,ne,we,fo,st,dr,go,pr,Yo,x,it,hr,_o,mr,ur,lt,fr,ct,gr,_r,vr,dt,br,Lt,wr,yr,Sr,pt,$r,ht,Tr,Ur,kr,E,mt,Cr,ae,xr,Nt,jr,Fr,vo,qr,Pr,Er,ye,Mr,Se,zr,$e,Ro,re,Te,bo,ut,Dr,wo,Ar,Qo,q,ft,Or,gt,Wr,_t,Lr,Nr,Vr,vt,Ir,Vt,Br,Hr,Kr,bt,Yr,wt,Rr,Qr,Xr,D,yt,Zr,se,Jr,It,Gr,es,yo,ts,os,ns,Ue,as,ke,Xo;return l=new Fe({}),qe=new Fe({}),Ae=new Fe({}),Oe=new O({props:{name:"class transformers.UniSpeechConfig",anchor:"transformers.UniSpeechConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"num_ctc_classes",val:" = 80"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"replace_prob",val:" = 0.5"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the UniSpeech model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechModel">UniSpeechModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechModel">UniSpeechModel</a>.`,name:"vocab_size"},{anchor:"transformers.UniSpeechConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.UniSpeechConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.UniSpeechConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.UniSpeechConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.UniSpeechConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.UniSpeechConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.UniSpeechConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.UniSpeechConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.UniSpeechConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.UniSpeechConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.UniSpeechConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.UniSpeechConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.UniSpeechConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.UniSpeechConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.UniSpeechConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.UniSpeechConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.UniSpeechConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.UniSpeechConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.UniSpeechConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.UniSpeechConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.UniSpeechConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.UniSpeechConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.UniSpeechConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.UniSpeechConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.UniSpeechConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.UniSpeechConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.UniSpeechConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.UniSpeechConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.UniSpeechConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.UniSpeechConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.UniSpeechConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.UniSpeechConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.UniSpeechConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.UniSpeechConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.UniSpeechConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.UniSpeechConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.UniSpeechConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechForSequenceClassification">UniSpeechForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.UniSpeechConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.UniSpeechConfig.replace_prob",description:`<strong>replace_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Propability that transformer feature is replaced by quantized feature for pretraining.`,name:"replace_prob"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/configuration_unispeech.py#L32"}}),pe=new Ut({props:{anchor:"transformers.UniSpeechConfig.example",$$slots:{default:[ci]},$$scope:{ctx:k}}}),Le=new Fe({}),Ne=new O({props:{name:"class transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput",anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L75"}}),Ie=new O({props:{name:"class transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput",anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L104"}}),He=new Fe({}),Ke=new O({props:{name:"class transformers.UniSpeechModel",anchor:"transformers.UniSpeechModel",parameters:[{name:"config",val:": UniSpeechConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1087"}}),Je=new O({props:{name:"forward",anchor:"transformers.UniSpeechModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.UniSpeechModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1152",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new Sn({props:{$$slots:{default:[di]},$$scope:{ctx:k}}}),fe=new Ut({props:{anchor:"transformers.UniSpeechModel.forward.example",$$slots:{default:[pi]},$$scope:{ctx:k}}}),Ge=new Fe({}),et=new O({props:{name:"class transformers.UniSpeechForCTC",anchor:"transformers.UniSpeechForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1363"}}),rt=new O({props:{name:"forward",anchor:"transformers.UniSpeechForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1404",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
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
`}}),_e=new Sn({props:{$$slots:{default:[hi]},$$scope:{ctx:k}}}),ve=new Ut({props:{anchor:"transformers.UniSpeechForCTC.forward.example",$$slots:{default:[mi]},$$scope:{ctx:k}}}),be=new Ut({props:{anchor:"transformers.UniSpeechForCTC.forward.example-2",$$slots:{default:[ui]},$$scope:{ctx:k}}}),st=new Fe({}),it=new O({props:{name:"class transformers.UniSpeechForSequenceClassification",anchor:"transformers.UniSpeechForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1494"}}),mt=new O({props:{name:"forward",anchor:"transformers.UniSpeechForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1539",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
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
`}}),ye=new Sn({props:{$$slots:{default:[fi]},$$scope:{ctx:k}}}),Se=new Ut({props:{anchor:"transformers.UniSpeechForSequenceClassification.forward.example",$$slots:{default:[gi]},$$scope:{ctx:k}}}),$e=new Ut({props:{anchor:"transformers.UniSpeechForSequenceClassification.forward.example-2",$$slots:{default:[_i]},$$scope:{ctx:k}}}),ut=new Fe({}),ft=new O({props:{name:"class transformers.UniSpeechForPreTraining",anchor:"transformers.UniSpeechForPreTraining",parameters:[{name:"config",val:": UniSpeechConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1212"}}),yt=new O({props:{name:"forward",anchor:"transformers.UniSpeechForPreTraining.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.UniSpeechForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/unispeech/modeling_unispeech.py#L1273",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new Sn({props:{$$slots:{default:[vi]},$$scope:{ctx:k}}}),ke=new Ut({props:{anchor:"transformers.UniSpeechForPreTraining.forward.example",$$slots:{default:[bi]},$$scope:{ctx:k}}}),{c(){c=n("meta"),v=h(),p=n("h1"),u=n("a"),b=n("span"),w(l.$$.fragment),g=h(),C=n("span"),$n=s("UniSpeech"),Fo=h(),H=n("h2"),ie=n("a"),Jt=n("span"),w(qe.$$.fragment),Tn=h(),Gt=n("span"),Un=s("Overview"),qo=h(),le=n("p"),kn=s("The UniSpeech model was proposed in "),Pe=n("a"),Cn=s("UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled Data"),xn=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael
Zeng, Xuedong Huang .`),Po=h(),xt=n("p"),jn=s("The abstract from the paper is the following:"),Eo=h(),jt=n("p"),eo=n("em"),Fn=s(`In this paper, we propose a unified pre-training approach called UniSpeech to learn speech representations with both
unlabeled and labeled data, in which supervised phonetic CTC learning and phonetically-aware contrastive
self-supervised learning are conducted in a multi-task learning manner. The resultant representations can capture
information more correlated with phonetic structures and improve the generalization across languages and domains. We
evaluate the effectiveness of UniSpeech for cross-lingual representation learning on public CommonVoice corpus. The
results show that UniSpeech outperforms self-supervised pretraining and supervised transfer learning for speech
recognition by a maximum of 13.4% and 17.8% relative phone error rate reductions respectively (averaged over all
testing languages). The transferability of UniSpeech is also demonstrated on a domain-shift speech recognition task,
i.e., a relative word error rate reduction of 6% against the previous approach.`),Mo=h(),Ft=n("p"),qn=s("Tips:"),zo=h(),ce=n("ul"),Ee=n("li"),Pn=s(`UniSpeech is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please
use `),qt=n("a"),En=s("Wav2Vec2Processor"),Mn=s(" for the feature extraction."),zn=h(),Me=n("li"),Dn=s(`UniSpeech model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),Pt=n("a"),An=s("Wav2Vec2CTCTokenizer"),On=s("."),Do=h(),W=n("p"),Wn=s("This model was contributed by "),ze=n("a"),Ln=s("patrickvonplaten"),Nn=s(`. The Authors\u2019 code can be
found `),De=n("a"),Vn=s("here"),In=s("."),Ao=h(),K=n("h2"),de=n("a"),to=n("span"),w(Ae.$$.fragment),Bn=h(),oo=n("span"),Hn=s("UniSpeechConfig"),Oo=h(),M=n("div"),w(Oe.$$.fragment),Kn=h(),Y=n("p"),Yn=s("This is the configuration class to store the configuration of a "),Et=n("a"),Rn=s("UniSpeechModel"),Qn=s(`. It is used to instantiate an
UniSpeech model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeech
`),We=n("a"),Xn=s("facebook/unispeech-base-960h"),Zn=s(" architecture."),Jn=h(),R=n("p"),Gn=s("Configuration objects inherit from "),Mt=n("a"),ea=s("PretrainedConfig"),ta=s(` and can be used to control the model outputs. Read the
documentation from `),zt=n("a"),oa=s("PretrainedConfig"),na=s(" for more information."),aa=h(),w(pe.$$.fragment),Wo=h(),Q=n("h2"),he=n("a"),no=n("span"),w(Le.$$.fragment),ra=h(),ao=n("span"),sa=s("UniSpeech specific outputs"),Lo=h(),X=n("div"),w(Ne.$$.fragment),ia=h(),Ve=n("p"),la=s("Output type of "),ro=n("code"),ca=s("UniSpeechBaseModelOutput"),da=s(", with potential hidden states and attentions."),No=h(),Z=n("div"),w(Ie.$$.fragment),pa=h(),Be=n("p"),ha=s("Output type of "),so=n("code"),ma=s("UniSpeechForPreTrainingOutput"),ua=s(", with potential hidden states and attentions."),Vo=h(),J=n("h2"),me=n("a"),io=n("span"),w(He.$$.fragment),fa=h(),lo=n("span"),ga=s("UniSpeechModel"),Io=h(),j=n("div"),w(Ke.$$.fragment),_a=h(),Ye=n("p"),va=s(`The bare UniSpeech Model transformer outputting raw hidden-states without any specific head on top.
UniSpeech was proposed in `),Re=n("a"),ba=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),wa=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),ya=h(),Qe=n("p"),Sa=s("This model inherits from "),Dt=n("a"),$a=s("PreTrainedModel"),Ta=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ua=h(),Xe=n("p"),ka=s("This model is a PyTorch "),Ze=n("a"),Ca=s("torch.nn.Module"),xa=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ja=h(),z=n("div"),w(Je.$$.fragment),Fa=h(),G=n("p"),qa=s("The "),At=n("a"),Pa=s("UniSpeechModel"),Ea=s(" forward method, overrides the "),co=n("code"),Ma=s("__call__"),za=s(" special method."),Da=h(),w(ue.$$.fragment),Aa=h(),w(fe.$$.fragment),Bo=h(),ee=n("h2"),ge=n("a"),po=n("span"),w(Ge.$$.fragment),Oa=h(),ho=n("span"),Wa=s("UniSpeechForCTC"),Ho=h(),F=n("div"),w(et.$$.fragment),La=h(),te=n("p"),Na=s("UniSpeech Model with a "),mo=n("code"),Va=s("language modeling"),Ia=s(` head on top for Connectionist Temporal Classification (CTC).
UniSpeech was proposed in `),tt=n("a"),Ba=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ha=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Ka=h(),ot=n("p"),Ya=s("This model inherits from "),Ot=n("a"),Ra=s("PreTrainedModel"),Qa=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Xa=h(),nt=n("p"),Za=s("This model is a PyTorch "),at=n("a"),Ja=s("torch.nn.Module"),Ga=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),er=h(),P=n("div"),w(rt.$$.fragment),tr=h(),oe=n("p"),or=s("The "),Wt=n("a"),nr=s("UniSpeechForCTC"),ar=s(" forward method, overrides the "),uo=n("code"),rr=s("__call__"),sr=s(" special method."),ir=h(),w(_e.$$.fragment),lr=h(),w(ve.$$.fragment),cr=h(),w(be.$$.fragment),Ko=h(),ne=n("h2"),we=n("a"),fo=n("span"),w(st.$$.fragment),dr=h(),go=n("span"),pr=s("UniSpeechForSequenceClassification"),Yo=h(),x=n("div"),w(it.$$.fragment),hr=h(),_o=n("p"),mr=s(`UniSpeech Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),ur=h(),lt=n("p"),fr=s("UniSpeech was proposed in "),ct=n("a"),gr=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),_r=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),vr=h(),dt=n("p"),br=s("This model inherits from "),Lt=n("a"),wr=s("PreTrainedModel"),yr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Sr=h(),pt=n("p"),$r=s("This model is a PyTorch "),ht=n("a"),Tr=s("torch.nn.Module"),Ur=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr=h(),E=n("div"),w(mt.$$.fragment),Cr=h(),ae=n("p"),xr=s("The "),Nt=n("a"),jr=s("UniSpeechForSequenceClassification"),Fr=s(" forward method, overrides the "),vo=n("code"),qr=s("__call__"),Pr=s(" special method."),Er=h(),w(ye.$$.fragment),Mr=h(),w(Se.$$.fragment),zr=h(),w($e.$$.fragment),Ro=h(),re=n("h2"),Te=n("a"),bo=n("span"),w(ut.$$.fragment),Dr=h(),wo=n("span"),Ar=s("UniSpeechForPreTraining"),Qo=h(),q=n("div"),w(ft.$$.fragment),Or=h(),gt=n("p"),Wr=s(`UniSpeech Model with a vector-quantization module and ctc loss for pre-training.
UniSpeech was proposed in `),_t=n("a"),Lr=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Nr=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Vr=h(),vt=n("p"),Ir=s("This model inherits from "),Vt=n("a"),Br=s("PreTrainedModel"),Hr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Kr=h(),bt=n("p"),Yr=s("This model is a PyTorch "),wt=n("a"),Rr=s("torch.nn.Module"),Qr=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xr=h(),D=n("div"),w(yt.$$.fragment),Zr=h(),se=n("p"),Jr=s("The "),It=n("a"),Gr=s("UniSpeechForPreTraining"),es=s(" forward method, overrides the "),yo=n("code"),ts=s("__call__"),os=s(" special method."),ns=h(),w(Ue.$$.fragment),as=h(),w(ke.$$.fragment),this.h()},l(t){const f=ii('[data-svelte="svelte-1phssyn"]',document.head);c=a(f,"META",{name:!0,content:!0}),f.forEach(o),v=m(t),p=a(t,"H1",{class:!0});var St=r(p);u=a(St,"A",{id:!0,class:!0,href:!0});var So=r(u);b=a(So,"SPAN",{});var $o=r(b);y(l.$$.fragment,$o),$o.forEach(o),So.forEach(o),g=m(St),C=a(St,"SPAN",{});var To=r(C);$n=i(To,"UniSpeech"),To.forEach(o),St.forEach(o),Fo=m(t),H=a(t,"H2",{class:!0});var $t=r(H);ie=a($t,"A",{id:!0,class:!0,href:!0});var Uo=r(ie);Jt=a(Uo,"SPAN",{});var ko=r(Jt);y(qe.$$.fragment,ko),ko.forEach(o),Uo.forEach(o),Tn=m($t),Gt=a($t,"SPAN",{});var Co=r(Gt);Un=i(Co,"Overview"),Co.forEach(o),$t.forEach(o),qo=m(t),le=a(t,"P",{});var Tt=r(le);kn=i(Tt,"The UniSpeech model was proposed in "),Pe=a(Tt,"A",{href:!0,rel:!0});var xo=r(Pe);Cn=i(xo,"UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled Data"),xo.forEach(o),xn=i(Tt,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael
Zeng, Xuedong Huang .`),Tt.forEach(o),Po=m(t),xt=a(t,"P",{});var jo=r(xt);jn=i(jo,"The abstract from the paper is the following:"),jo.forEach(o),Eo=m(t),jt=a(t,"P",{});var rs=r(jt);eo=a(rs,"EM",{});var ss=r(eo);Fn=i(ss,`In this paper, we propose a unified pre-training approach called UniSpeech to learn speech representations with both
unlabeled and labeled data, in which supervised phonetic CTC learning and phonetically-aware contrastive
self-supervised learning are conducted in a multi-task learning manner. The resultant representations can capture
information more correlated with phonetic structures and improve the generalization across languages and domains. We
evaluate the effectiveness of UniSpeech for cross-lingual representation learning on public CommonVoice corpus. The
results show that UniSpeech outperforms self-supervised pretraining and supervised transfer learning for speech
recognition by a maximum of 13.4% and 17.8% relative phone error rate reductions respectively (averaged over all
testing languages). The transferability of UniSpeech is also demonstrated on a domain-shift speech recognition task,
i.e., a relative word error rate reduction of 6% against the previous approach.`),ss.forEach(o),rs.forEach(o),Mo=m(t),Ft=a(t,"P",{});var is=r(Ft);qn=i(is,"Tips:"),is.forEach(o),zo=m(t),ce=a(t,"UL",{});var Zo=r(ce);Ee=a(Zo,"LI",{});var Jo=r(Ee);Pn=i(Jo,`UniSpeech is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please
use `),qt=a(Jo,"A",{href:!0});var ls=r(qt);En=i(ls,"Wav2Vec2Processor"),ls.forEach(o),Mn=i(Jo," for the feature extraction."),Jo.forEach(o),zn=m(Zo),Me=a(Zo,"LI",{});var Go=r(Me);Dn=i(Go,`UniSpeech model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),Pt=a(Go,"A",{href:!0});var cs=r(Pt);An=i(cs,"Wav2Vec2CTCTokenizer"),cs.forEach(o),On=i(Go,"."),Go.forEach(o),Zo.forEach(o),Do=m(t),W=a(t,"P",{});var Bt=r(W);Wn=i(Bt,"This model was contributed by "),ze=a(Bt,"A",{href:!0,rel:!0});var ds=r(ze);Ln=i(ds,"patrickvonplaten"),ds.forEach(o),Nn=i(Bt,`. The Authors\u2019 code can be
found `),De=a(Bt,"A",{href:!0,rel:!0});var ps=r(De);Vn=i(ps,"here"),ps.forEach(o),In=i(Bt,"."),Bt.forEach(o),Ao=m(t),K=a(t,"H2",{class:!0});var en=r(K);de=a(en,"A",{id:!0,class:!0,href:!0});var hs=r(de);to=a(hs,"SPAN",{});var ms=r(to);y(Ae.$$.fragment,ms),ms.forEach(o),hs.forEach(o),Bn=m(en),oo=a(en,"SPAN",{});var us=r(oo);Hn=i(us,"UniSpeechConfig"),us.forEach(o),en.forEach(o),Oo=m(t),M=a(t,"DIV",{class:!0});var Ce=r(M);y(Oe.$$.fragment,Ce),Kn=m(Ce),Y=a(Ce,"P",{});var Ht=r(Y);Yn=i(Ht,"This is the configuration class to store the configuration of a "),Et=a(Ht,"A",{href:!0});var fs=r(Et);Rn=i(fs,"UniSpeechModel"),fs.forEach(o),Qn=i(Ht,`. It is used to instantiate an
UniSpeech model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeech
`),We=a(Ht,"A",{href:!0,rel:!0});var gs=r(We);Xn=i(gs,"facebook/unispeech-base-960h"),gs.forEach(o),Zn=i(Ht," architecture."),Ht.forEach(o),Jn=m(Ce),R=a(Ce,"P",{});var Kt=r(R);Gn=i(Kt,"Configuration objects inherit from "),Mt=a(Kt,"A",{href:!0});var _s=r(Mt);ea=i(_s,"PretrainedConfig"),_s.forEach(o),ta=i(Kt,` and can be used to control the model outputs. Read the
documentation from `),zt=a(Kt,"A",{href:!0});var vs=r(zt);oa=i(vs,"PretrainedConfig"),vs.forEach(o),na=i(Kt," for more information."),Kt.forEach(o),aa=m(Ce),y(pe.$$.fragment,Ce),Ce.forEach(o),Wo=m(t),Q=a(t,"H2",{class:!0});var tn=r(Q);he=a(tn,"A",{id:!0,class:!0,href:!0});var bs=r(he);no=a(bs,"SPAN",{});var ws=r(no);y(Le.$$.fragment,ws),ws.forEach(o),bs.forEach(o),ra=m(tn),ao=a(tn,"SPAN",{});var ys=r(ao);sa=i(ys,"UniSpeech specific outputs"),ys.forEach(o),tn.forEach(o),Lo=m(t),X=a(t,"DIV",{class:!0});var on=r(X);y(Ne.$$.fragment,on),ia=m(on),Ve=a(on,"P",{});var nn=r(Ve);la=i(nn,"Output type of "),ro=a(nn,"CODE",{});var Ss=r(ro);ca=i(Ss,"UniSpeechBaseModelOutput"),Ss.forEach(o),da=i(nn,", with potential hidden states and attentions."),nn.forEach(o),on.forEach(o),No=m(t),Z=a(t,"DIV",{class:!0});var an=r(Z);y(Ie.$$.fragment,an),pa=m(an),Be=a(an,"P",{});var rn=r(Be);ha=i(rn,"Output type of "),so=a(rn,"CODE",{});var $s=r(so);ma=i($s,"UniSpeechForPreTrainingOutput"),$s.forEach(o),ua=i(rn,", with potential hidden states and attentions."),rn.forEach(o),an.forEach(o),Vo=m(t),J=a(t,"H2",{class:!0});var sn=r(J);me=a(sn,"A",{id:!0,class:!0,href:!0});var Ts=r(me);io=a(Ts,"SPAN",{});var Us=r(io);y(He.$$.fragment,Us),Us.forEach(o),Ts.forEach(o),fa=m(sn),lo=a(sn,"SPAN",{});var ks=r(lo);ga=i(ks,"UniSpeechModel"),ks.forEach(o),sn.forEach(o),Io=m(t),j=a(t,"DIV",{class:!0});var L=r(j);y(Ke.$$.fragment,L),_a=m(L),Ye=a(L,"P",{});var ln=r(Ye);va=i(ln,`The bare UniSpeech Model transformer outputting raw hidden-states without any specific head on top.
UniSpeech was proposed in `),Re=a(ln,"A",{href:!0,rel:!0});var Cs=r(Re);ba=i(Cs,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Cs.forEach(o),wa=i(ln,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),ln.forEach(o),ya=m(L),Qe=a(L,"P",{});var cn=r(Qe);Sa=i(cn,"This model inherits from "),Dt=a(cn,"A",{href:!0});var xs=r(Dt);$a=i(xs,"PreTrainedModel"),xs.forEach(o),Ta=i(cn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),cn.forEach(o),Ua=m(L),Xe=a(L,"P",{});var dn=r(Xe);ka=i(dn,"This model is a PyTorch "),Ze=a(dn,"A",{href:!0,rel:!0});var js=r(Ze);Ca=i(js,"torch.nn.Module"),js.forEach(o),xa=i(dn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dn.forEach(o),ja=m(L),z=a(L,"DIV",{class:!0});var xe=r(z);y(Je.$$.fragment,xe),Fa=m(xe),G=a(xe,"P",{});var Yt=r(G);qa=i(Yt,"The "),At=a(Yt,"A",{href:!0});var Fs=r(At);Pa=i(Fs,"UniSpeechModel"),Fs.forEach(o),Ea=i(Yt," forward method, overrides the "),co=a(Yt,"CODE",{});var qs=r(co);Ma=i(qs,"__call__"),qs.forEach(o),za=i(Yt," special method."),Yt.forEach(o),Da=m(xe),y(ue.$$.fragment,xe),Aa=m(xe),y(fe.$$.fragment,xe),xe.forEach(o),L.forEach(o),Bo=m(t),ee=a(t,"H2",{class:!0});var pn=r(ee);ge=a(pn,"A",{id:!0,class:!0,href:!0});var Ps=r(ge);po=a(Ps,"SPAN",{});var Es=r(po);y(Ge.$$.fragment,Es),Es.forEach(o),Ps.forEach(o),Oa=m(pn),ho=a(pn,"SPAN",{});var Ms=r(ho);Wa=i(Ms,"UniSpeechForCTC"),Ms.forEach(o),pn.forEach(o),Ho=m(t),F=a(t,"DIV",{class:!0});var N=r(F);y(et.$$.fragment,N),La=m(N),te=a(N,"P",{});var Rt=r(te);Na=i(Rt,"UniSpeech Model with a "),mo=a(Rt,"CODE",{});var zs=r(mo);Va=i(zs,"language modeling"),zs.forEach(o),Ia=i(Rt,` head on top for Connectionist Temporal Classification (CTC).
UniSpeech was proposed in `),tt=a(Rt,"A",{href:!0,rel:!0});var Ds=r(tt);Ba=i(Ds,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ds.forEach(o),Ha=i(Rt,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Rt.forEach(o),Ka=m(N),ot=a(N,"P",{});var hn=r(ot);Ya=i(hn,"This model inherits from "),Ot=a(hn,"A",{href:!0});var As=r(Ot);Ra=i(As,"PreTrainedModel"),As.forEach(o),Qa=i(hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),hn.forEach(o),Xa=m(N),nt=a(N,"P",{});var mn=r(nt);Za=i(mn,"This model is a PyTorch "),at=a(mn,"A",{href:!0,rel:!0});var Os=r(at);Ja=i(Os,"torch.nn.Module"),Os.forEach(o),Ga=i(mn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mn.forEach(o),er=m(N),P=a(N,"DIV",{class:!0});var V=r(P);y(rt.$$.fragment,V),tr=m(V),oe=a(V,"P",{});var Qt=r(oe);or=i(Qt,"The "),Wt=a(Qt,"A",{href:!0});var Ws=r(Wt);nr=i(Ws,"UniSpeechForCTC"),Ws.forEach(o),ar=i(Qt," forward method, overrides the "),uo=a(Qt,"CODE",{});var Ls=r(uo);rr=i(Ls,"__call__"),Ls.forEach(o),sr=i(Qt," special method."),Qt.forEach(o),ir=m(V),y(_e.$$.fragment,V),lr=m(V),y(ve.$$.fragment,V),cr=m(V),y(be.$$.fragment,V),V.forEach(o),N.forEach(o),Ko=m(t),ne=a(t,"H2",{class:!0});var un=r(ne);we=a(un,"A",{id:!0,class:!0,href:!0});var Ns=r(we);fo=a(Ns,"SPAN",{});var Vs=r(fo);y(st.$$.fragment,Vs),Vs.forEach(o),Ns.forEach(o),dr=m(un),go=a(un,"SPAN",{});var Is=r(go);pr=i(Is,"UniSpeechForSequenceClassification"),Is.forEach(o),un.forEach(o),Yo=m(t),x=a(t,"DIV",{class:!0});var A=r(x);y(it.$$.fragment,A),hr=m(A),_o=a(A,"P",{});var Bs=r(_o);mr=i(Bs,`UniSpeech Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Bs.forEach(o),ur=m(A),lt=a(A,"P",{});var fn=r(lt);fr=i(fn,"UniSpeech was proposed in "),ct=a(fn,"A",{href:!0,rel:!0});var Hs=r(ct);gr=i(Hs,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Hs.forEach(o),_r=i(fn,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),fn.forEach(o),vr=m(A),dt=a(A,"P",{});var gn=r(dt);br=i(gn,"This model inherits from "),Lt=a(gn,"A",{href:!0});var Ks=r(Lt);wr=i(Ks,"PreTrainedModel"),Ks.forEach(o),yr=i(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),gn.forEach(o),Sr=m(A),pt=a(A,"P",{});var _n=r(pt);$r=i(_n,"This model is a PyTorch "),ht=a(_n,"A",{href:!0,rel:!0});var Ys=r(ht);Tr=i(Ys,"torch.nn.Module"),Ys.forEach(o),Ur=i(_n,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_n.forEach(o),kr=m(A),E=a(A,"DIV",{class:!0});var I=r(E);y(mt.$$.fragment,I),Cr=m(I),ae=a(I,"P",{});var Xt=r(ae);xr=i(Xt,"The "),Nt=a(Xt,"A",{href:!0});var Rs=r(Nt);jr=i(Rs,"UniSpeechForSequenceClassification"),Rs.forEach(o),Fr=i(Xt," forward method, overrides the "),vo=a(Xt,"CODE",{});var Qs=r(vo);qr=i(Qs,"__call__"),Qs.forEach(o),Pr=i(Xt," special method."),Xt.forEach(o),Er=m(I),y(ye.$$.fragment,I),Mr=m(I),y(Se.$$.fragment,I),zr=m(I),y($e.$$.fragment,I),I.forEach(o),A.forEach(o),Ro=m(t),re=a(t,"H2",{class:!0});var vn=r(re);Te=a(vn,"A",{id:!0,class:!0,href:!0});var Xs=r(Te);bo=a(Xs,"SPAN",{});var Zs=r(bo);y(ut.$$.fragment,Zs),Zs.forEach(o),Xs.forEach(o),Dr=m(vn),wo=a(vn,"SPAN",{});var Js=r(wo);Ar=i(Js,"UniSpeechForPreTraining"),Js.forEach(o),vn.forEach(o),Qo=m(t),q=a(t,"DIV",{class:!0});var B=r(q);y(ft.$$.fragment,B),Or=m(B),gt=a(B,"P",{});var bn=r(gt);Wr=i(bn,`UniSpeech Model with a vector-quantization module and ctc loss for pre-training.
UniSpeech was proposed in `),_t=a(bn,"A",{href:!0,rel:!0});var Gs=r(_t);Lr=i(Gs,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Gs.forEach(o),Nr=i(bn,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),bn.forEach(o),Vr=m(B),vt=a(B,"P",{});var wn=r(vt);Ir=i(wn,"This model inherits from "),Vt=a(wn,"A",{href:!0});var ei=r(Vt);Br=i(ei,"PreTrainedModel"),ei.forEach(o),Hr=i(wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wn.forEach(o),Kr=m(B),bt=a(B,"P",{});var yn=r(bt);Yr=i(yn,"This model is a PyTorch "),wt=a(yn,"A",{href:!0,rel:!0});var ti=r(wt);Rr=i(ti,"torch.nn.Module"),ti.forEach(o),Qr=i(yn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yn.forEach(o),Xr=m(B),D=a(B,"DIV",{class:!0});var je=r(D);y(yt.$$.fragment,je),Zr=m(je),se=a(je,"P",{});var Zt=r(se);Jr=i(Zt,"The "),It=a(Zt,"A",{href:!0});var oi=r(It);Gr=i(oi,"UniSpeechForPreTraining"),oi.forEach(o),es=i(Zt," forward method, overrides the "),yo=a(Zt,"CODE",{});var ni=r(yo);ts=i(ni,"__call__"),ni.forEach(o),os=i(Zt," special method."),Zt.forEach(o),ns=m(je),y(Ue.$$.fragment,je),as=m(je),y(ke.$$.fragment,je),je.forEach(o),B.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(yi)),d(u,"id","unispeech"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#unispeech"),d(p,"class","relative group"),d(ie,"id","overview"),d(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ie,"href","#overview"),d(H,"class","relative group"),d(Pe,"href","https://arxiv.org/abs/2101.07597"),d(Pe,"rel","nofollow"),d(qt,"href","/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),d(Pt,"href","/docs/transformers/pr_16919/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),d(ze,"href","https://huggingface.co/patrickvonplaten"),d(ze,"rel","nofollow"),d(De,"href","https://github.com/microsoft/UniSpeech/tree/main/UniSpeech"),d(De,"rel","nofollow"),d(de,"id","transformers.UniSpeechConfig"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#transformers.UniSpeechConfig"),d(K,"class","relative group"),d(Et,"href","/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechModel"),d(We,"href","https://huggingface.co/facebook/unispeech-base-960h"),d(We,"rel","nofollow"),d(Mt,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),d(zt,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(he,"id","transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"),d(Q,"class","relative group"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(me,"id","transformers.UniSpeechModel"),d(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(me,"href","#transformers.UniSpeechModel"),d(J,"class","relative group"),d(Re,"href","https://arxiv.org/abs/2101.07597"),d(Re,"rel","nofollow"),d(Dt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),d(Ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ze,"rel","nofollow"),d(At,"href","/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechModel"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ge,"id","transformers.UniSpeechForCTC"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#transformers.UniSpeechForCTC"),d(ee,"class","relative group"),d(tt,"href","https://arxiv.org/abs/2101.07597"),d(tt,"rel","nofollow"),d(Ot,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),d(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(at,"rel","nofollow"),d(Wt,"href","/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechForCTC"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(we,"id","transformers.UniSpeechForSequenceClassification"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#transformers.UniSpeechForSequenceClassification"),d(ne,"class","relative group"),d(ct,"href","https://arxiv.org/abs/2101.07597"),d(ct,"rel","nofollow"),d(Lt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),d(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ht,"rel","nofollow"),d(Nt,"href","/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechForSequenceClassification"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Te,"id","transformers.UniSpeechForPreTraining"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.UniSpeechForPreTraining"),d(re,"class","relative group"),d(_t,"href","https://arxiv.org/abs/2101.07597"),d(_t,"rel","nofollow"),d(Vt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),d(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wt,"rel","nofollow"),d(It,"href","/docs/transformers/pr_16919/en/model_doc/unispeech#transformers.UniSpeechForPreTraining"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,c),_(t,v,f),_(t,p,f),e(p,u),e(u,b),S(l,b,null),e(p,g),e(p,C),e(C,$n),_(t,Fo,f),_(t,H,f),e(H,ie),e(ie,Jt),S(qe,Jt,null),e(H,Tn),e(H,Gt),e(Gt,Un),_(t,qo,f),_(t,le,f),e(le,kn),e(le,Pe),e(Pe,Cn),e(le,xn),_(t,Po,f),_(t,xt,f),e(xt,jn),_(t,Eo,f),_(t,jt,f),e(jt,eo),e(eo,Fn),_(t,Mo,f),_(t,Ft,f),e(Ft,qn),_(t,zo,f),_(t,ce,f),e(ce,Ee),e(Ee,Pn),e(Ee,qt),e(qt,En),e(Ee,Mn),e(ce,zn),e(ce,Me),e(Me,Dn),e(Me,Pt),e(Pt,An),e(Me,On),_(t,Do,f),_(t,W,f),e(W,Wn),e(W,ze),e(ze,Ln),e(W,Nn),e(W,De),e(De,Vn),e(W,In),_(t,Ao,f),_(t,K,f),e(K,de),e(de,to),S(Ae,to,null),e(K,Bn),e(K,oo),e(oo,Hn),_(t,Oo,f),_(t,M,f),S(Oe,M,null),e(M,Kn),e(M,Y),e(Y,Yn),e(Y,Et),e(Et,Rn),e(Y,Qn),e(Y,We),e(We,Xn),e(Y,Zn),e(M,Jn),e(M,R),e(R,Gn),e(R,Mt),e(Mt,ea),e(R,ta),e(R,zt),e(zt,oa),e(R,na),e(M,aa),S(pe,M,null),_(t,Wo,f),_(t,Q,f),e(Q,he),e(he,no),S(Le,no,null),e(Q,ra),e(Q,ao),e(ao,sa),_(t,Lo,f),_(t,X,f),S(Ne,X,null),e(X,ia),e(X,Ve),e(Ve,la),e(Ve,ro),e(ro,ca),e(Ve,da),_(t,No,f),_(t,Z,f),S(Ie,Z,null),e(Z,pa),e(Z,Be),e(Be,ha),e(Be,so),e(so,ma),e(Be,ua),_(t,Vo,f),_(t,J,f),e(J,me),e(me,io),S(He,io,null),e(J,fa),e(J,lo),e(lo,ga),_(t,Io,f),_(t,j,f),S(Ke,j,null),e(j,_a),e(j,Ye),e(Ye,va),e(Ye,Re),e(Re,ba),e(Ye,wa),e(j,ya),e(j,Qe),e(Qe,Sa),e(Qe,Dt),e(Dt,$a),e(Qe,Ta),e(j,Ua),e(j,Xe),e(Xe,ka),e(Xe,Ze),e(Ze,Ca),e(Xe,xa),e(j,ja),e(j,z),S(Je,z,null),e(z,Fa),e(z,G),e(G,qa),e(G,At),e(At,Pa),e(G,Ea),e(G,co),e(co,Ma),e(G,za),e(z,Da),S(ue,z,null),e(z,Aa),S(fe,z,null),_(t,Bo,f),_(t,ee,f),e(ee,ge),e(ge,po),S(Ge,po,null),e(ee,Oa),e(ee,ho),e(ho,Wa),_(t,Ho,f),_(t,F,f),S(et,F,null),e(F,La),e(F,te),e(te,Na),e(te,mo),e(mo,Va),e(te,Ia),e(te,tt),e(tt,Ba),e(te,Ha),e(F,Ka),e(F,ot),e(ot,Ya),e(ot,Ot),e(Ot,Ra),e(ot,Qa),e(F,Xa),e(F,nt),e(nt,Za),e(nt,at),e(at,Ja),e(nt,Ga),e(F,er),e(F,P),S(rt,P,null),e(P,tr),e(P,oe),e(oe,or),e(oe,Wt),e(Wt,nr),e(oe,ar),e(oe,uo),e(uo,rr),e(oe,sr),e(P,ir),S(_e,P,null),e(P,lr),S(ve,P,null),e(P,cr),S(be,P,null),_(t,Ko,f),_(t,ne,f),e(ne,we),e(we,fo),S(st,fo,null),e(ne,dr),e(ne,go),e(go,pr),_(t,Yo,f),_(t,x,f),S(it,x,null),e(x,hr),e(x,_o),e(_o,mr),e(x,ur),e(x,lt),e(lt,fr),e(lt,ct),e(ct,gr),e(lt,_r),e(x,vr),e(x,dt),e(dt,br),e(dt,Lt),e(Lt,wr),e(dt,yr),e(x,Sr),e(x,pt),e(pt,$r),e(pt,ht),e(ht,Tr),e(pt,Ur),e(x,kr),e(x,E),S(mt,E,null),e(E,Cr),e(E,ae),e(ae,xr),e(ae,Nt),e(Nt,jr),e(ae,Fr),e(ae,vo),e(vo,qr),e(ae,Pr),e(E,Er),S(ye,E,null),e(E,Mr),S(Se,E,null),e(E,zr),S($e,E,null),_(t,Ro,f),_(t,re,f),e(re,Te),e(Te,bo),S(ut,bo,null),e(re,Dr),e(re,wo),e(wo,Ar),_(t,Qo,f),_(t,q,f),S(ft,q,null),e(q,Or),e(q,gt),e(gt,Wr),e(gt,_t),e(_t,Lr),e(gt,Nr),e(q,Vr),e(q,vt),e(vt,Ir),e(vt,Vt),e(Vt,Br),e(vt,Hr),e(q,Kr),e(q,bt),e(bt,Yr),e(bt,wt),e(wt,Rr),e(bt,Qr),e(q,Xr),e(q,D),S(yt,D,null),e(D,Zr),e(D,se),e(se,Jr),e(se,It),e(It,Gr),e(se,es),e(se,yo),e(yo,ts),e(se,os),e(D,ns),S(Ue,D,null),e(D,as),S(ke,D,null),Xo=!0},p(t,[f]){const St={};f&2&&(St.$$scope={dirty:f,ctx:t}),pe.$set(St);const So={};f&2&&(So.$$scope={dirty:f,ctx:t}),ue.$set(So);const $o={};f&2&&($o.$$scope={dirty:f,ctx:t}),fe.$set($o);const To={};f&2&&(To.$$scope={dirty:f,ctx:t}),_e.$set(To);const $t={};f&2&&($t.$$scope={dirty:f,ctx:t}),ve.$set($t);const Uo={};f&2&&(Uo.$$scope={dirty:f,ctx:t}),be.$set(Uo);const ko={};f&2&&(ko.$$scope={dirty:f,ctx:t}),ye.$set(ko);const Co={};f&2&&(Co.$$scope={dirty:f,ctx:t}),Se.$set(Co);const Tt={};f&2&&(Tt.$$scope={dirty:f,ctx:t}),$e.$set(Tt);const xo={};f&2&&(xo.$$scope={dirty:f,ctx:t}),Ue.$set(xo);const jo={};f&2&&(jo.$$scope={dirty:f,ctx:t}),ke.$set(jo)},i(t){Xo||($(l.$$.fragment,t),$(qe.$$.fragment,t),$(Ae.$$.fragment,t),$(Oe.$$.fragment,t),$(pe.$$.fragment,t),$(Le.$$.fragment,t),$(Ne.$$.fragment,t),$(Ie.$$.fragment,t),$(He.$$.fragment,t),$(Ke.$$.fragment,t),$(Je.$$.fragment,t),$(ue.$$.fragment,t),$(fe.$$.fragment,t),$(Ge.$$.fragment,t),$(et.$$.fragment,t),$(rt.$$.fragment,t),$(_e.$$.fragment,t),$(ve.$$.fragment,t),$(be.$$.fragment,t),$(st.$$.fragment,t),$(it.$$.fragment,t),$(mt.$$.fragment,t),$(ye.$$.fragment,t),$(Se.$$.fragment,t),$($e.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(yt.$$.fragment,t),$(Ue.$$.fragment,t),$(ke.$$.fragment,t),Xo=!0)},o(t){T(l.$$.fragment,t),T(qe.$$.fragment,t),T(Ae.$$.fragment,t),T(Oe.$$.fragment,t),T(pe.$$.fragment,t),T(Le.$$.fragment,t),T(Ne.$$.fragment,t),T(Ie.$$.fragment,t),T(He.$$.fragment,t),T(Ke.$$.fragment,t),T(Je.$$.fragment,t),T(ue.$$.fragment,t),T(fe.$$.fragment,t),T(Ge.$$.fragment,t),T(et.$$.fragment,t),T(rt.$$.fragment,t),T(_e.$$.fragment,t),T(ve.$$.fragment,t),T(be.$$.fragment,t),T(st.$$.fragment,t),T(it.$$.fragment,t),T(mt.$$.fragment,t),T(ye.$$.fragment,t),T(Se.$$.fragment,t),T($e.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),T(yt.$$.fragment,t),T(Ue.$$.fragment,t),T(ke.$$.fragment,t),Xo=!1},d(t){o(c),t&&o(v),t&&o(p),U(l),t&&o(Fo),t&&o(H),U(qe),t&&o(qo),t&&o(le),t&&o(Po),t&&o(xt),t&&o(Eo),t&&o(jt),t&&o(Mo),t&&o(Ft),t&&o(zo),t&&o(ce),t&&o(Do),t&&o(W),t&&o(Ao),t&&o(K),U(Ae),t&&o(Oo),t&&o(M),U(Oe),U(pe),t&&o(Wo),t&&o(Q),U(Le),t&&o(Lo),t&&o(X),U(Ne),t&&o(No),t&&o(Z),U(Ie),t&&o(Vo),t&&o(J),U(He),t&&o(Io),t&&o(j),U(Ke),U(Je),U(ue),U(fe),t&&o(Bo),t&&o(ee),U(Ge),t&&o(Ho),t&&o(F),U(et),U(rt),U(_e),U(ve),U(be),t&&o(Ko),t&&o(ne),U(st),t&&o(Yo),t&&o(x),U(it),U(mt),U(ye),U(Se),U($e),t&&o(Ro),t&&o(re),U(ut),t&&o(Qo),t&&o(q),U(ft),U(yt),U(Ue),U(ke)}}}const yi={local:"unispeech",sections:[{local:"overview",title:"Overview"},{local:"transformers.UniSpeechConfig",title:"UniSpeechConfig"},{local:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput",title:"UniSpeech specific outputs"},{local:"transformers.UniSpeechModel",title:"UniSpeechModel"},{local:"transformers.UniSpeechForCTC",title:"UniSpeechForCTC"},{local:"transformers.UniSpeechForSequenceClassification",title:"UniSpeechForSequenceClassification"},{local:"transformers.UniSpeechForPreTraining",title:"UniSpeechForPreTraining"}],title:"UniSpeech"};function Si(k){return li(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ji extends ai{constructor(c){super();ri(this,c,Si,wi,si,{})}}export{ji as default,yi as metadata};
