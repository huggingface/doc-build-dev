import{S as ls,i as cs,s as ds,e as a,k as f,w as b,t as i,M as ps,c as s,d as o,m as u,a as r,x as E,h as l,b as p,F as e,g as _,y,q as $,o as S,B as W,v as ms,L as _t}from"../../chunks/vendor-6b77c823.js";import{T as ba}from"../../chunks/Tip-39098574.js";import{D as Qe}from"../../chunks/Docstring-1088f2fb.js";import{C as vt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ut}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as gt}from"../../chunks/ExampleCodeBlock-5212b321.js";function hs(k){let c,v,d,m,w;return m=new vt({props:{code:`from transformers import SEWModel, SEWConfig

# Initializing a SEW asapp/sew-tiny-100k style configuration
configuration = SEWConfig()

# Initializing a model from the asapp/sew-tiny-100k style configuration
model = SEWModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SEWModel, SEWConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SEW asapp/sew-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SEWConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the asapp/sew-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=i("Example:"),d=f(),b(m.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Example:"),g.forEach(o),d=u(n),E(m.$$.fragment,n)},m(n,g){_(n,c,g),e(c,v),_(n,d,g),y(m,n,g),w=!0},p:_t,i(n){w||($(m.$$.fragment,n),w=!0)},o(n){S(m.$$.fragment,n),w=!1},d(n){n&&o(c),n&&o(d),W(m,n)}}}function fs(k){let c,v,d,m,w;return{c(){c=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a("code"),m=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var j=r(d);m=l(j,"Module"),j.forEach(o),w=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,c,g),e(c,v),e(c,d),e(d,m),e(c,w)},d(n){n&&o(c)}}}function us(k){let c,v,d,m,w;return m=new vt({props:{code:`from transformers import Wav2Vec2Processor, SEWModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")
model = SEWModel.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWModel.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">512</span>]`}}),{c(){c=a("p"),v=i("Example:"),d=f(),b(m.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Example:"),g.forEach(o),d=u(n),E(m.$$.fragment,n)},m(n,g){_(n,c,g),e(c,v),_(n,d,g),y(m,n,g),w=!0},p:_t,i(n){w||($(m.$$.fragment,n),w=!0)},o(n){S(m.$$.fragment,n),w=!1},d(n){n&&o(c),n&&o(d),W(m,n)}}}function gs(k){let c,v,d,m,w;return{c(){c=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a("code"),m=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var j=r(d);m=l(j,"Module"),j.forEach(o),w=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,c,g),e(c,v),e(c,d),e(d,m),e(c,w)},d(n){n&&o(c)}}}function _s(k){let c,v,d,m,w;return m=new vt({props:{code:`from transformers import Wav2Vec2Processor, SEWForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")
model = SEWForCTC.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWForCTC.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APPOSTILE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPOLLE&#x27;</span>`}}),{c(){c=a("p"),v=i("Example:"),d=f(),b(m.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Example:"),g.forEach(o),d=u(n),E(m.$$.fragment,n)},m(n,g){_(n,c,g),e(c,v),_(n,d,g),y(m,n,g),w=!0},p:_t,i(n){w||($(m.$$.fragment,n),w=!0)},o(n){S(m.$$.fragment,n),w=!1},d(n){n&&o(c),n&&o(d),W(m,n)}}}function vs(k){let c,v;return c=new vt({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.42</span>`}}),{c(){b(c.$$.fragment)},l(d){E(c.$$.fragment,d)},m(d,m){y(c,d,m),v=!0},p:_t,i(d){v||($(c.$$.fragment,d),v=!0)},o(d){S(c.$$.fragment,d),v=!1},d(d){W(c,d)}}}function ws(k){let c,v,d,m,w;return{c(){c=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a("code"),m=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var j=r(d);m=l(j,"Module"),j.forEach(o),w=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,c,g),e(c,v),e(c,d),e(d,m),e(c,w)},d(n){n&&o(c)}}}function bs(k){let c,v,d,m,w;return m=new vt({props:{code:`from transformers import Wav2Vec2FeatureExtractor, SEWForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/sew-mid-100k-ft-keyword-spotting")
model = SEWForSequenceClassification.from_pretrained("anton-l/sew-mid-100k-ft-keyword-spotting")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, SEWForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-mid-100k-ft-keyword-spotting&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-mid-100k-ft-keyword-spotting&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){c=a("p"),v=i("Example:"),d=f(),b(m.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Example:"),g.forEach(o),d=u(n),E(m.$$.fragment,n)},m(n,g){_(n,c,g),e(c,v),_(n,d,g),y(m,n,g),w=!0},p:_t,i(n){w||($(m.$$.fragment,n),w=!0)},o(n){S(m.$$.fragment,n),w=!1},d(n){n&&o(c),n&&o(d),W(m,n)}}}function Es(k){let c,v;return c=new vt({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">9.52</span>`}}),{c(){b(c.$$.fragment)},l(d){E(c.$$.fragment,d)},m(d,m){y(c,d,m),v=!0},p:_t,i(d){v||($(c.$$.fragment,d),v=!0)},o(d){S(c.$$.fragment,d),v=!1},d(d){W(c,d)}}}function ys(k){let c,v,d,m,w,n,g,j,bo,Nt,O,G,wt,ge,Eo,bt,yo,Kt,X,$o,_e,So,Wo,Ht,Ye,ko,Rt,Ge,Et,Co,Ut,Xe,To,Bt,Z,yt,xo,jo,ve,qo,Ze,Po,Fo,Jt,ee,Mo,we,zo,Ao,Qt,I,te,$t,be,Do,St,Lo,Yt,F,Ee,Vo,N,Oo,et,Io,No,ye,Ko,Ho,Ro,K,Uo,tt,Bo,Jo,ot,Qo,Yo,Go,oe,Gt,H,ne,Wt,$e,Xo,kt,Zo,Xt,T,Se,en,We,tn,ke,on,nn,an,Ce,sn,nt,rn,ln,cn,Te,dn,xe,pn,mn,hn,M,je,fn,R,un,at,gn,_n,Ct,vn,wn,bn,ae,En,se,Zt,U,re,Tt,qe,yn,xt,$n,eo,x,Pe,Sn,B,Wn,jt,kn,Cn,Fe,Tn,xn,jn,Me,qn,st,Pn,Fn,Mn,ze,zn,Ae,An,Dn,Ln,q,De,Vn,J,On,rt,In,Nn,qt,Kn,Hn,Rn,ie,Un,le,Bn,ce,to,Q,de,Pt,Le,Jn,Ft,Qn,oo,C,Ve,Yn,Mt,Gn,Xn,Oe,Zn,Ie,ea,ta,oa,Ne,na,it,aa,sa,ra,Ke,ia,He,la,ca,da,P,Re,pa,Y,ma,lt,ha,fa,zt,ua,ga,_a,pe,va,me,wa,he,no;return n=new ut({}),ge=new ut({}),be=new ut({}),Ee=new Qe({props:{name:"class transformers.SEWConfig",anchor:"transformers.SEWConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"squeeze_factor",val:" = 2"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)"},{name:"conv_kernel",val:" = (10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SEWConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the SEW model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>SEW</code>.`,name:"vocab_size"},{anchor:"transformers.SEWConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SEWConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SEWConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SEWConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SEWConfig.squeeze_factor",description:`<strong>squeeze_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Sequence length downsampling factor after the encoder and upsampling factor after the transformer.`,name:"squeeze_factor"},{anchor:"transformers.SEWConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SEWConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.SEWConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.SEWConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.SEWConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SEWConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SEWConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.SEWConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.SEWConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.SEWConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.SEWConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.SEWConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.SEWConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.SEWConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.SEWConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.SEWConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.SEWConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.SEWConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.SEWConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.SEWConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.SEWConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.SEWConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.SEWConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.SEWConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.SEWConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.SEWConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/sew/configuration_sew.py#L32"}}),oe=new gt({props:{anchor:"transformers.SEWConfig.example",$$slots:{default:[hs]},$$scope:{ctx:k}}}),$e=new ut({}),Se=new Qe({props:{name:"class transformers.SEWModel",anchor:"transformers.SEWModel",parameters:[{name:"config",val:": SEWConfig"}],parametersDescription:[{anchor:"transformers.SEWModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/sew/modeling_sew.py#L839"}}),je=new Qe({props:{name:"forward",anchor:"transformers.SEWModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SEWModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/sew/modeling_sew.py#L906",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new ba({props:{$$slots:{default:[fs]},$$scope:{ctx:k}}}),se=new gt({props:{anchor:"transformers.SEWModel.forward.example",$$slots:{default:[us]},$$scope:{ctx:k}}}),qe=new ut({}),Pe=new Qe({props:{name:"class transformers.SEWForCTC",anchor:"transformers.SEWForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SEWForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/sew/modeling_sew.py#L969"}}),De=new Qe({props:{name:"forward",anchor:"transformers.SEWForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.SEWForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/sew/modeling_sew.py#L1010",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
`}}),ie=new ba({props:{$$slots:{default:[gs]},$$scope:{ctx:k}}}),le=new gt({props:{anchor:"transformers.SEWForCTC.forward.example",$$slots:{default:[_s]},$$scope:{ctx:k}}}),ce=new gt({props:{anchor:"transformers.SEWForCTC.forward.example-2",$$slots:{default:[vs]},$$scope:{ctx:k}}}),Le=new ut({}),Ve=new Qe({props:{name:"class transformers.SEWForSequenceClassification",anchor:"transformers.SEWForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/sew/modeling_sew.py#L1100"}}),Re=new Qe({props:{name:"forward",anchor:"transformers.SEWForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/sew/modeling_sew.py#L1145",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
`}}),pe=new ba({props:{$$slots:{default:[ws]},$$scope:{ctx:k}}}),me=new gt({props:{anchor:"transformers.SEWForSequenceClassification.forward.example",$$slots:{default:[bs]},$$scope:{ctx:k}}}),he=new gt({props:{anchor:"transformers.SEWForSequenceClassification.forward.example-2",$$slots:{default:[Es]},$$scope:{ctx:k}}}),{c(){c=a("meta"),v=f(),d=a("h1"),m=a("a"),w=a("span"),b(n.$$.fragment),g=f(),j=a("span"),bo=i("SEW"),Nt=f(),O=a("h2"),G=a("a"),wt=a("span"),b(ge.$$.fragment),Eo=f(),bt=a("span"),yo=i("Overview"),Kt=f(),X=a("p"),$o=i("SEW (Squeezed and Efficient Wav2Vec) was proposed in "),_e=a("a"),So=i(`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),Wo=i(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),Ht=f(),Ye=a("p"),ko=i("The abstract from the paper is the following:"),Rt=f(),Ge=a("p"),Et=a("em"),Co=i(`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Ut=f(),Xe=a("p"),To=i("Tips:"),Bt=f(),Z=a("ul"),yt=a("li"),xo=i("SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),jo=f(),ve=a("li"),qo=i(`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Ze=a("a"),Po=i("Wav2Vec2CTCTokenizer"),Fo=i("."),Jt=f(),ee=a("p"),Mo=i("This model was contributed by "),we=a("a"),zo=i("anton-l"),Ao=i("."),Qt=f(),I=a("h2"),te=a("a"),$t=a("span"),b(be.$$.fragment),Do=f(),St=a("span"),Lo=i("SEWConfig"),Yt=f(),F=a("div"),b(Ee.$$.fragment),Vo=f(),N=a("p"),Oo=i("This is the configuration class to store the configuration of a "),et=a("a"),Io=i("SEWModel"),No=i(`. It is used to instantiate a SEW model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW
`),ye=a("a"),Ko=i("asapp/sew-tiny-100k"),Ho=i(" architecture."),Ro=f(),K=a("p"),Uo=i("Configuration objects inherit from "),tt=a("a"),Bo=i("PretrainedConfig"),Jo=i(` and can be used to control the model outputs. Read the
documentation from `),ot=a("a"),Qo=i("PretrainedConfig"),Yo=i(" for more information."),Go=f(),b(oe.$$.fragment),Gt=f(),H=a("h2"),ne=a("a"),Wt=a("span"),b($e.$$.fragment),Xo=f(),kt=a("span"),Zo=i("SEWModel"),Xt=f(),T=a("div"),b(Se.$$.fragment),en=f(),We=a("p"),tn=i(`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),ke=a("a"),on=i(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),nn=i(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),an=f(),Ce=a("p"),sn=i("This model inherits from "),nt=a("a"),rn=i("PreTrainedModel"),ln=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),cn=f(),Te=a("p"),dn=i("This model is a PyTorch "),xe=a("a"),pn=i("torch.nn.Module"),mn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hn=f(),M=a("div"),b(je.$$.fragment),fn=f(),R=a("p"),un=i("The "),at=a("a"),gn=i("SEWModel"),_n=i(" forward method, overrides the "),Ct=a("code"),vn=i("__call__"),wn=i(" special method."),bn=f(),b(ae.$$.fragment),En=f(),b(se.$$.fragment),Zt=f(),U=a("h2"),re=a("a"),Tt=a("span"),b(qe.$$.fragment),yn=f(),xt=a("span"),$n=i("SEWForCTC"),eo=f(),x=a("div"),b(Pe.$$.fragment),Sn=f(),B=a("p"),Wn=i("SEW Model with a "),jt=a("code"),kn=i("language modeling"),Cn=i(` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),Fe=a("a"),Tn=i(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),xn=i(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),jn=f(),Me=a("p"),qn=i("This model inherits from "),st=a("a"),Pn=i("PreTrainedModel"),Fn=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Mn=f(),ze=a("p"),zn=i("This model is a PyTorch "),Ae=a("a"),An=i("torch.nn.Module"),Dn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ln=f(),q=a("div"),b(De.$$.fragment),Vn=f(),J=a("p"),On=i("The "),rt=a("a"),In=i("SEWForCTC"),Nn=i(" forward method, overrides the "),qt=a("code"),Kn=i("__call__"),Hn=i(" special method."),Rn=f(),b(ie.$$.fragment),Un=f(),b(le.$$.fragment),Bn=f(),b(ce.$$.fragment),to=f(),Q=a("h2"),de=a("a"),Pt=a("span"),b(Le.$$.fragment),Jn=f(),Ft=a("span"),Qn=i("SEWForSequenceClassification"),oo=f(),C=a("div"),b(Ve.$$.fragment),Yn=f(),Mt=a("p"),Gn=i(`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),Xn=f(),Oe=a("p"),Zn=i("SEW was proposed in "),Ie=a("a"),ea=i(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),ta=i(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),oa=f(),Ne=a("p"),na=i("This model inherits from "),it=a("a"),aa=i("PreTrainedModel"),sa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ra=f(),Ke=a("p"),ia=i("This model is a PyTorch "),He=a("a"),la=i("torch.nn.Module"),ca=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),da=f(),P=a("div"),b(Re.$$.fragment),pa=f(),Y=a("p"),ma=i("The "),lt=a("a"),ha=i("SEWForSequenceClassification"),fa=i(" forward method, overrides the "),zt=a("code"),ua=i("__call__"),ga=i(" special method."),_a=f(),b(pe.$$.fragment),va=f(),b(me.$$.fragment),wa=f(),b(he.$$.fragment),this.h()},l(t){const h=ps('[data-svelte="svelte-1phssyn"]',document.head);c=s(h,"META",{name:!0,content:!0}),h.forEach(o),v=u(t),d=s(t,"H1",{class:!0});var Ue=r(d);m=s(Ue,"A",{id:!0,class:!0,href:!0});var At=r(m);w=s(At,"SPAN",{});var Dt=r(w);E(n.$$.fragment,Dt),Dt.forEach(o),At.forEach(o),g=u(Ue),j=s(Ue,"SPAN",{});var Lt=r(j);bo=l(Lt,"SEW"),Lt.forEach(o),Ue.forEach(o),Nt=u(t),O=s(t,"H2",{class:!0});var Be=r(O);G=s(Be,"A",{id:!0,class:!0,href:!0});var Vt=r(G);wt=s(Vt,"SPAN",{});var Ot=r(wt);E(ge.$$.fragment,Ot),Ot.forEach(o),Vt.forEach(o),Eo=u(Be),bt=s(Be,"SPAN",{});var It=r(bt);yo=l(It,"Overview"),It.forEach(o),Be.forEach(o),Kt=u(t),X=s(t,"P",{});var Je=r(X);$o=l(Je,"SEW (Squeezed and Efficient Wav2Vec) was proposed in "),_e=s(Je,"A",{href:!0,rel:!0});var Ea=r(_e);So=l(Ea,`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),Ea.forEach(o),Wo=l(Je,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),Je.forEach(o),Ht=u(t),Ye=s(t,"P",{});var ya=r(Ye);ko=l(ya,"The abstract from the paper is the following:"),ya.forEach(o),Rt=u(t),Ge=s(t,"P",{});var $a=r(Ge);Et=s($a,"EM",{});var Sa=r(Et);Co=l(Sa,`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Sa.forEach(o),$a.forEach(o),Ut=u(t),Xe=s(t,"P",{});var Wa=r(Xe);To=l(Wa,"Tips:"),Wa.forEach(o),Bt=u(t),Z=s(t,"UL",{});var ao=r(Z);yt=s(ao,"LI",{});var ka=r(yt);xo=l(ka,"SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ka.forEach(o),jo=u(ao),ve=s(ao,"LI",{});var so=r(ve);qo=l(so,`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Ze=s(so,"A",{href:!0});var Ca=r(Ze);Po=l(Ca,"Wav2Vec2CTCTokenizer"),Ca.forEach(o),Fo=l(so,"."),so.forEach(o),ao.forEach(o),Jt=u(t),ee=s(t,"P",{});var ro=r(ee);Mo=l(ro,"This model was contributed by "),we=s(ro,"A",{href:!0,rel:!0});var Ta=r(we);zo=l(Ta,"anton-l"),Ta.forEach(o),Ao=l(ro,"."),ro.forEach(o),Qt=u(t),I=s(t,"H2",{class:!0});var io=r(I);te=s(io,"A",{id:!0,class:!0,href:!0});var xa=r(te);$t=s(xa,"SPAN",{});var ja=r($t);E(be.$$.fragment,ja),ja.forEach(o),xa.forEach(o),Do=u(io),St=s(io,"SPAN",{});var qa=r(St);Lo=l(qa,"SEWConfig"),qa.forEach(o),io.forEach(o),Yt=u(t),F=s(t,"DIV",{class:!0});var fe=r(F);E(Ee.$$.fragment,fe),Vo=u(fe),N=s(fe,"P",{});var ct=r(N);Oo=l(ct,"This is the configuration class to store the configuration of a "),et=s(ct,"A",{href:!0});var Pa=r(et);Io=l(Pa,"SEWModel"),Pa.forEach(o),No=l(ct,`. It is used to instantiate a SEW model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW
`),ye=s(ct,"A",{href:!0,rel:!0});var Fa=r(ye);Ko=l(Fa,"asapp/sew-tiny-100k"),Fa.forEach(o),Ho=l(ct," architecture."),ct.forEach(o),Ro=u(fe),K=s(fe,"P",{});var dt=r(K);Uo=l(dt,"Configuration objects inherit from "),tt=s(dt,"A",{href:!0});var Ma=r(tt);Bo=l(Ma,"PretrainedConfig"),Ma.forEach(o),Jo=l(dt,` and can be used to control the model outputs. Read the
documentation from `),ot=s(dt,"A",{href:!0});var za=r(ot);Qo=l(za,"PretrainedConfig"),za.forEach(o),Yo=l(dt," for more information."),dt.forEach(o),Go=u(fe),E(oe.$$.fragment,fe),fe.forEach(o),Gt=u(t),H=s(t,"H2",{class:!0});var lo=r(H);ne=s(lo,"A",{id:!0,class:!0,href:!0});var Aa=r(ne);Wt=s(Aa,"SPAN",{});var Da=r(Wt);E($e.$$.fragment,Da),Da.forEach(o),Aa.forEach(o),Xo=u(lo),kt=s(lo,"SPAN",{});var La=r(kt);Zo=l(La,"SEWModel"),La.forEach(o),lo.forEach(o),Xt=u(t),T=s(t,"DIV",{class:!0});var A=r(T);E(Se.$$.fragment,A),en=u(A),We=s(A,"P",{});var co=r(We);tn=l(co,`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),ke=s(co,"A",{href:!0,rel:!0});var Va=r(ke);on=l(Va,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),Va.forEach(o),nn=l(co,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),co.forEach(o),an=u(A),Ce=s(A,"P",{});var po=r(Ce);sn=l(po,"This model inherits from "),nt=s(po,"A",{href:!0});var Oa=r(nt);rn=l(Oa,"PreTrainedModel"),Oa.forEach(o),ln=l(po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),po.forEach(o),cn=u(A),Te=s(A,"P",{});var mo=r(Te);dn=l(mo,"This model is a PyTorch "),xe=s(mo,"A",{href:!0,rel:!0});var Ia=r(xe);pn=l(Ia,"torch.nn.Module"),Ia.forEach(o),mn=l(mo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mo.forEach(o),hn=u(A),M=s(A,"DIV",{class:!0});var ue=r(M);E(je.$$.fragment,ue),fn=u(ue),R=s(ue,"P",{});var pt=r(R);un=l(pt,"The "),at=s(pt,"A",{href:!0});var Na=r(at);gn=l(Na,"SEWModel"),Na.forEach(o),_n=l(pt," forward method, overrides the "),Ct=s(pt,"CODE",{});var Ka=r(Ct);vn=l(Ka,"__call__"),Ka.forEach(o),wn=l(pt," special method."),pt.forEach(o),bn=u(ue),E(ae.$$.fragment,ue),En=u(ue),E(se.$$.fragment,ue),ue.forEach(o),A.forEach(o),Zt=u(t),U=s(t,"H2",{class:!0});var ho=r(U);re=s(ho,"A",{id:!0,class:!0,href:!0});var Ha=r(re);Tt=s(Ha,"SPAN",{});var Ra=r(Tt);E(qe.$$.fragment,Ra),Ra.forEach(o),Ha.forEach(o),yn=u(ho),xt=s(ho,"SPAN",{});var Ua=r(xt);$n=l(Ua,"SEWForCTC"),Ua.forEach(o),ho.forEach(o),eo=u(t),x=s(t,"DIV",{class:!0});var D=r(x);E(Pe.$$.fragment,D),Sn=u(D),B=s(D,"P",{});var mt=r(B);Wn=l(mt,"SEW Model with a "),jt=s(mt,"CODE",{});var Ba=r(jt);kn=l(Ba,"language modeling"),Ba.forEach(o),Cn=l(mt,` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),Fe=s(mt,"A",{href:!0,rel:!0});var Ja=r(Fe);Tn=l(Ja,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),Ja.forEach(o),xn=l(mt,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),mt.forEach(o),jn=u(D),Me=s(D,"P",{});var fo=r(Me);qn=l(fo,"This model inherits from "),st=s(fo,"A",{href:!0});var Qa=r(st);Pn=l(Qa,"PreTrainedModel"),Qa.forEach(o),Fn=l(fo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),fo.forEach(o),Mn=u(D),ze=s(D,"P",{});var uo=r(ze);zn=l(uo,"This model is a PyTorch "),Ae=s(uo,"A",{href:!0,rel:!0});var Ya=r(Ae);An=l(Ya,"torch.nn.Module"),Ya.forEach(o),Dn=l(uo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uo.forEach(o),Ln=u(D),q=s(D,"DIV",{class:!0});var L=r(q);E(De.$$.fragment,L),Vn=u(L),J=s(L,"P",{});var ht=r(J);On=l(ht,"The "),rt=s(ht,"A",{href:!0});var Ga=r(rt);In=l(Ga,"SEWForCTC"),Ga.forEach(o),Nn=l(ht," forward method, overrides the "),qt=s(ht,"CODE",{});var Xa=r(qt);Kn=l(Xa,"__call__"),Xa.forEach(o),Hn=l(ht," special method."),ht.forEach(o),Rn=u(L),E(ie.$$.fragment,L),Un=u(L),E(le.$$.fragment,L),Bn=u(L),E(ce.$$.fragment,L),L.forEach(o),D.forEach(o),to=u(t),Q=s(t,"H2",{class:!0});var go=r(Q);de=s(go,"A",{id:!0,class:!0,href:!0});var Za=r(de);Pt=s(Za,"SPAN",{});var es=r(Pt);E(Le.$$.fragment,es),es.forEach(o),Za.forEach(o),Jn=u(go),Ft=s(go,"SPAN",{});var ts=r(Ft);Qn=l(ts,"SEWForSequenceClassification"),ts.forEach(o),go.forEach(o),oo=u(t),C=s(t,"DIV",{class:!0});var z=r(C);E(Ve.$$.fragment,z),Yn=u(z),Mt=s(z,"P",{});var os=r(Mt);Gn=l(os,`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),os.forEach(o),Xn=u(z),Oe=s(z,"P",{});var _o=r(Oe);Zn=l(_o,"SEW was proposed in "),Ie=s(_o,"A",{href:!0,rel:!0});var ns=r(Ie);ea=l(ns,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),ns.forEach(o),ta=l(_o,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),_o.forEach(o),oa=u(z),Ne=s(z,"P",{});var vo=r(Ne);na=l(vo,"This model inherits from "),it=s(vo,"A",{href:!0});var as=r(it);aa=l(as,"PreTrainedModel"),as.forEach(o),sa=l(vo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),vo.forEach(o),ra=u(z),Ke=s(z,"P",{});var wo=r(Ke);ia=l(wo,"This model is a PyTorch "),He=s(wo,"A",{href:!0,rel:!0});var ss=r(He);la=l(ss,"torch.nn.Module"),ss.forEach(o),ca=l(wo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wo.forEach(o),da=u(z),P=s(z,"DIV",{class:!0});var V=r(P);E(Re.$$.fragment,V),pa=u(V),Y=s(V,"P",{});var ft=r(Y);ma=l(ft,"The "),lt=s(ft,"A",{href:!0});var rs=r(lt);ha=l(rs,"SEWForSequenceClassification"),rs.forEach(o),fa=l(ft," forward method, overrides the "),zt=s(ft,"CODE",{});var is=r(zt);ua=l(is,"__call__"),is.forEach(o),ga=l(ft," special method."),ft.forEach(o),_a=u(V),E(pe.$$.fragment,V),va=u(V),E(me.$$.fragment,V),wa=u(V),E(he.$$.fragment,V),V.forEach(o),z.forEach(o),this.h()},h(){p(c,"name","hf:doc:metadata"),p(c,"content",JSON.stringify($s)),p(m,"id","sew"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#sew"),p(d,"class","relative group"),p(G,"id","overview"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#overview"),p(O,"class","relative group"),p(_e,"href","https://arxiv.org/abs/2109.06870"),p(_e,"rel","nofollow"),p(Ze,"href","/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),p(we,"href","https://huggingface.co/anton-l"),p(we,"rel","nofollow"),p(te,"id","transformers.SEWConfig"),p(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(te,"href","#transformers.SEWConfig"),p(I,"class","relative group"),p(et,"href","/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWModel"),p(ye,"href","https://huggingface.co/asapp/sew-tiny-100k"),p(ye,"rel","nofollow"),p(tt,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),p(ot,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ne,"id","transformers.SEWModel"),p(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ne,"href","#transformers.SEWModel"),p(H,"class","relative group"),p(ke,"href","https://arxiv.org/abs/2109.06870"),p(ke,"rel","nofollow"),p(nt,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),p(xe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(xe,"rel","nofollow"),p(at,"href","/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWModel"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(re,"id","transformers.SEWForCTC"),p(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(re,"href","#transformers.SEWForCTC"),p(U,"class","relative group"),p(Fe,"href","https://arxiv.org/abs/2109.06870"),p(Fe,"rel","nofollow"),p(st,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),p(Ae,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Ae,"rel","nofollow"),p(rt,"href","/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWForCTC"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(de,"id","transformers.SEWForSequenceClassification"),p(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(de,"href","#transformers.SEWForSequenceClassification"),p(Q,"class","relative group"),p(Ie,"href","https://arxiv.org/abs/2109.06870"),p(Ie,"rel","nofollow"),p(it,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),p(He,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(He,"rel","nofollow"),p(lt,"href","/docs/transformers/pr_highlight/en/model_doc/sew#transformers.SEWForSequenceClassification"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,c),_(t,v,h),_(t,d,h),e(d,m),e(m,w),y(n,w,null),e(d,g),e(d,j),e(j,bo),_(t,Nt,h),_(t,O,h),e(O,G),e(G,wt),y(ge,wt,null),e(O,Eo),e(O,bt),e(bt,yo),_(t,Kt,h),_(t,X,h),e(X,$o),e(X,_e),e(_e,So),e(X,Wo),_(t,Ht,h),_(t,Ye,h),e(Ye,ko),_(t,Rt,h),_(t,Ge,h),e(Ge,Et),e(Et,Co),_(t,Ut,h),_(t,Xe,h),e(Xe,To),_(t,Bt,h),_(t,Z,h),e(Z,yt),e(yt,xo),e(Z,jo),e(Z,ve),e(ve,qo),e(ve,Ze),e(Ze,Po),e(ve,Fo),_(t,Jt,h),_(t,ee,h),e(ee,Mo),e(ee,we),e(we,zo),e(ee,Ao),_(t,Qt,h),_(t,I,h),e(I,te),e(te,$t),y(be,$t,null),e(I,Do),e(I,St),e(St,Lo),_(t,Yt,h),_(t,F,h),y(Ee,F,null),e(F,Vo),e(F,N),e(N,Oo),e(N,et),e(et,Io),e(N,No),e(N,ye),e(ye,Ko),e(N,Ho),e(F,Ro),e(F,K),e(K,Uo),e(K,tt),e(tt,Bo),e(K,Jo),e(K,ot),e(ot,Qo),e(K,Yo),e(F,Go),y(oe,F,null),_(t,Gt,h),_(t,H,h),e(H,ne),e(ne,Wt),y($e,Wt,null),e(H,Xo),e(H,kt),e(kt,Zo),_(t,Xt,h),_(t,T,h),y(Se,T,null),e(T,en),e(T,We),e(We,tn),e(We,ke),e(ke,on),e(We,nn),e(T,an),e(T,Ce),e(Ce,sn),e(Ce,nt),e(nt,rn),e(Ce,ln),e(T,cn),e(T,Te),e(Te,dn),e(Te,xe),e(xe,pn),e(Te,mn),e(T,hn),e(T,M),y(je,M,null),e(M,fn),e(M,R),e(R,un),e(R,at),e(at,gn),e(R,_n),e(R,Ct),e(Ct,vn),e(R,wn),e(M,bn),y(ae,M,null),e(M,En),y(se,M,null),_(t,Zt,h),_(t,U,h),e(U,re),e(re,Tt),y(qe,Tt,null),e(U,yn),e(U,xt),e(xt,$n),_(t,eo,h),_(t,x,h),y(Pe,x,null),e(x,Sn),e(x,B),e(B,Wn),e(B,jt),e(jt,kn),e(B,Cn),e(B,Fe),e(Fe,Tn),e(B,xn),e(x,jn),e(x,Me),e(Me,qn),e(Me,st),e(st,Pn),e(Me,Fn),e(x,Mn),e(x,ze),e(ze,zn),e(ze,Ae),e(Ae,An),e(ze,Dn),e(x,Ln),e(x,q),y(De,q,null),e(q,Vn),e(q,J),e(J,On),e(J,rt),e(rt,In),e(J,Nn),e(J,qt),e(qt,Kn),e(J,Hn),e(q,Rn),y(ie,q,null),e(q,Un),y(le,q,null),e(q,Bn),y(ce,q,null),_(t,to,h),_(t,Q,h),e(Q,de),e(de,Pt),y(Le,Pt,null),e(Q,Jn),e(Q,Ft),e(Ft,Qn),_(t,oo,h),_(t,C,h),y(Ve,C,null),e(C,Yn),e(C,Mt),e(Mt,Gn),e(C,Xn),e(C,Oe),e(Oe,Zn),e(Oe,Ie),e(Ie,ea),e(Oe,ta),e(C,oa),e(C,Ne),e(Ne,na),e(Ne,it),e(it,aa),e(Ne,sa),e(C,ra),e(C,Ke),e(Ke,ia),e(Ke,He),e(He,la),e(Ke,ca),e(C,da),e(C,P),y(Re,P,null),e(P,pa),e(P,Y),e(Y,ma),e(Y,lt),e(lt,ha),e(Y,fa),e(Y,zt),e(zt,ua),e(Y,ga),e(P,_a),y(pe,P,null),e(P,va),y(me,P,null),e(P,wa),y(he,P,null),no=!0},p(t,[h]){const Ue={};h&2&&(Ue.$$scope={dirty:h,ctx:t}),oe.$set(Ue);const At={};h&2&&(At.$$scope={dirty:h,ctx:t}),ae.$set(At);const Dt={};h&2&&(Dt.$$scope={dirty:h,ctx:t}),se.$set(Dt);const Lt={};h&2&&(Lt.$$scope={dirty:h,ctx:t}),ie.$set(Lt);const Be={};h&2&&(Be.$$scope={dirty:h,ctx:t}),le.$set(Be);const Vt={};h&2&&(Vt.$$scope={dirty:h,ctx:t}),ce.$set(Vt);const Ot={};h&2&&(Ot.$$scope={dirty:h,ctx:t}),pe.$set(Ot);const It={};h&2&&(It.$$scope={dirty:h,ctx:t}),me.$set(It);const Je={};h&2&&(Je.$$scope={dirty:h,ctx:t}),he.$set(Je)},i(t){no||($(n.$$.fragment,t),$(ge.$$.fragment,t),$(be.$$.fragment,t),$(Ee.$$.fragment,t),$(oe.$$.fragment,t),$($e.$$.fragment,t),$(Se.$$.fragment,t),$(je.$$.fragment,t),$(ae.$$.fragment,t),$(se.$$.fragment,t),$(qe.$$.fragment,t),$(Pe.$$.fragment,t),$(De.$$.fragment,t),$(ie.$$.fragment,t),$(le.$$.fragment,t),$(ce.$$.fragment,t),$(Le.$$.fragment,t),$(Ve.$$.fragment,t),$(Re.$$.fragment,t),$(pe.$$.fragment,t),$(me.$$.fragment,t),$(he.$$.fragment,t),no=!0)},o(t){S(n.$$.fragment,t),S(ge.$$.fragment,t),S(be.$$.fragment,t),S(Ee.$$.fragment,t),S(oe.$$.fragment,t),S($e.$$.fragment,t),S(Se.$$.fragment,t),S(je.$$.fragment,t),S(ae.$$.fragment,t),S(se.$$.fragment,t),S(qe.$$.fragment,t),S(Pe.$$.fragment,t),S(De.$$.fragment,t),S(ie.$$.fragment,t),S(le.$$.fragment,t),S(ce.$$.fragment,t),S(Le.$$.fragment,t),S(Ve.$$.fragment,t),S(Re.$$.fragment,t),S(pe.$$.fragment,t),S(me.$$.fragment,t),S(he.$$.fragment,t),no=!1},d(t){o(c),t&&o(v),t&&o(d),W(n),t&&o(Nt),t&&o(O),W(ge),t&&o(Kt),t&&o(X),t&&o(Ht),t&&o(Ye),t&&o(Rt),t&&o(Ge),t&&o(Ut),t&&o(Xe),t&&o(Bt),t&&o(Z),t&&o(Jt),t&&o(ee),t&&o(Qt),t&&o(I),W(be),t&&o(Yt),t&&o(F),W(Ee),W(oe),t&&o(Gt),t&&o(H),W($e),t&&o(Xt),t&&o(T),W(Se),W(je),W(ae),W(se),t&&o(Zt),t&&o(U),W(qe),t&&o(eo),t&&o(x),W(Pe),W(De),W(ie),W(le),W(ce),t&&o(to),t&&o(Q),W(Le),t&&o(oo),t&&o(C),W(Ve),W(Re),W(pe),W(me),W(he)}}}const $s={local:"sew",sections:[{local:"overview",title:"Overview"},{local:"transformers.SEWConfig",title:"SEWConfig"},{local:"transformers.SEWModel",title:"SEWModel"},{local:"transformers.SEWForCTC",title:"SEWForCTC"},{local:"transformers.SEWForSequenceClassification",title:"SEWForSequenceClassification"}],title:"SEW"};function Ss(k){return ms(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends ls{constructor(c){super();cs(this,c,Ss,ys,ds,{})}}export{qs as default,$s as metadata};
