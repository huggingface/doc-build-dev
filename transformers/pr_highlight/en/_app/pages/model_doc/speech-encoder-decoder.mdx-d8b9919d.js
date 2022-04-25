import{S as ds,i as cs,s as is,e as a,k as h,w as k,t,M as ls,c as s,d as o,m,a as c,x as E,h as n,b as l,F as e,g as b,y as S,q as x,o as $,B as T,v as ps,L as et}from"../../chunks/vendor-6b77c823.js";import{T as ss}from"../../chunks/Tip-39098574.js";import{D as ee}from"../../chunks/Docstring-1088f2fb.js";import{C as ot}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $t}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Xo}from"../../chunks/ExampleCodeBlock-5212b321.js";function hs(q){let i,v,u,p,g;return p=new ot({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

# Initializing a Wav2Vec2 & BERT style configuration
config_encoder = Wav2Vec2Config()
config_decoder = BertConfig()

config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Wav2Vec2Bert model from a Wav2Vec2 & bert-base-uncased style configurations
model = SpeechEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained("my-model")
model = SpeechEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2Bert model from a Wav2Vec2 &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){i=a("p"),v=t("Examples:"),u=h(),k(p.$$.fragment)},l(d){i=s(d,"P",{});var f=c(i);v=n(f,"Examples:"),f.forEach(o),u=m(d),E(p.$$.fragment,d)},m(d,f){b(d,i,f),e(i,v),b(d,u,f),S(p,d,f),g=!0},p:et,i(d){g||(x(p.$$.fragment,d),g=!0)},o(d){$(p.$$.fragment,d),g=!1},d(d){d&&o(i),d&&o(u),T(p,d)}}}function ms(q){let i,v,u,p,g;return{c(){i=a("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=t("Module"),g=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){i=s(d,"P",{});var f=c(i);v=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var N=c(u);p=n(N,"Module"),N.forEach(o),g=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(d,f){b(d,i,f),e(i,v),e(i,u),e(u,p),e(i,g)},d(d){d&&o(i)}}}function fs(q){let i,v,u,p,g;return p=new ot({props:{code:`from transformers import SpeechEncoderDecoderModel, Wav2Vec2Processor
from datasets import load_dataset
import torch

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")
model = SpeechEncoderDecoderModel.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values
# Inference: Translate English speech to German
generated = model.generate(input_values)
decoded = processor.batch_decode(generated, skip_special_tokens=True)[0]
decoded

# Training: Train model on English transcription
with processor.as_target_processor():
    labels = processor(ds[0]["text"], return_tensors="pt").input_ids

loss = model(input_values, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Inference: Translate English speech to German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoded = processor.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>decoded
<span class="hljs-string">&#x27;Mr. Quilter ist der Apostel der Mittelschicht und wir freuen uns, sein Evangelium willkommen hei\xDFen zu k\xF6nnen.&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Training: Train model on English transcription</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){i=a("p"),v=t("Examples:"),u=h(),k(p.$$.fragment)},l(d){i=s(d,"P",{});var f=c(i);v=n(f,"Examples:"),f.forEach(o),u=m(d),E(p.$$.fragment,d)},m(d,f){b(d,i,f),e(i,v),b(d,u,f),S(p,d,f),g=!0},p:et,i(d){g||(x(p.$$.fragment,d),g=!0)},o(d){$(p.$$.fragment,d),g=!1},d(d){d&&o(i),d&&o(u),T(p,d)}}}function us(q){let i,v,u,p,g;return p=new ot({props:{code:`from transformers import SpeechEncoderDecoderModel

# initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-base-960h", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./wav2vec2bert")
# load fine-tuned model
model = SpeechEncoderDecoderModel.from_pretrained("./wav2vec2bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),{c(){i=a("p"),v=t("Example:"),u=h(),k(p.$$.fragment)},l(d){i=s(d,"P",{});var f=c(i);v=n(f,"Example:"),f.forEach(o),u=m(d),E(p.$$.fragment,d)},m(d,f){b(d,i,f),e(i,v),b(d,u,f),S(p,d,f),g=!0},p:et,i(d){g||(x(p.$$.fragment,d),g=!0)},o(d){$(p.$$.fragment,d),g=!1},d(d){d&&o(i),d&&o(u),T(p,d)}}}function gs(q){let i,v,u,p,g;return{c(){i=a("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=t("Module"),g=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){i=s(d,"P",{});var f=c(i);v=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var N=c(u);p=n(N,"Module"),N.forEach(o),g=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(d,f){b(d,i,f),e(i,v),e(i,u),e(u,p),e(i,g)},d(d){d&&o(i)}}}function _s(q){let i,v,u,p,g;return p=new ot({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel, BartTokenizer

# load a fine-tuned wav2vec2-2-bart model
model = FlaxSpeechEncoderDecoderModel.from_pretrained("patrickvonplaten/wav2vec2-2-bart-large")
# load output tokenizer
tokenizer_output = BartTokenizer.from_pretrained("facebook/bart-large")

inputs = jnp.ones((2, 5000), dtype=jnp.float32)

# use bart's special bos, pad and eos tokens
model.config.decoder_start_token_id = model.decoder.config.bos_token_id
model.config.pad_token_id = model.decoder.config.pad_token_id
model.config.eos_token_id = model.decoder.config.eos_token_id

outputs = model.generate(inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxSpeechEncoderDecoderModel, BartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned wav2vec2-2-bart model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-2-bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = jnp.ones((<span class="hljs-number">2</span>, <span class="hljs-number">5000</span>), dtype=jnp.float32)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use bart&#x27;s special bos, pad and eos tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = model.decoder.config.bos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.decoder.config.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.decoder.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`}}),{c(){i=a("p"),v=t("Examples:"),u=h(),k(p.$$.fragment)},l(d){i=s(d,"P",{});var f=c(i);v=n(f,"Examples:"),f.forEach(o),u=m(d),E(p.$$.fragment,d)},m(d,f){b(d,i,f),e(i,v),b(d,u,f),S(p,d,f),g=!0},p:et,i(d){g||(x(p.$$.fragment,d),g=!0)},o(d){$(p.$$.fragment,d),g=!1},d(d){d&&o(i),d&&o(u),T(p,d)}}}function vs(q){let i,v,u,p,g;return p=new ot({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel

# initialize a wav2vec2-2-bart from pretrained wav2vec2 and bart models. Note that the cross-attention layers will be randomly initialized
model = FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-large-lv60", "facebook/bart-large"
)
# saving model after fine-tuning
model.save_pretrained("./wav2vec2-2-bart-large")
# load fine-tuned model
model = FlaxSpeechEncoderDecoderModel.from_pretrained("./wav2vec2-2-bart-large")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxSpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2-2-bart from pretrained wav2vec2 and bart models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>, <span class="hljs-string">&quot;facebook/bart-large&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`}}),{c(){i=a("p"),v=t("Example:"),u=h(),k(p.$$.fragment)},l(d){i=s(d,"P",{});var f=c(i);v=n(f,"Example:"),f.forEach(o),u=m(d),E(p.$$.fragment,d)},m(d,f){b(d,i,f),e(i,v),b(d,u,f),S(p,d,f),g=!0},p:et,i(d){g||(x(p.$$.fragment,d),g=!0)},o(d){$(p.$$.fragment,d),g=!1},d(d){d&&o(i),d&&o(u),T(p,d)}}}function bs(q){let i,v,u,p,g,d,f,N,Tt,tt,P,Mt,Je,Dt,jt,xo,qt,Pt,Ye,zt,Ft,Ze,Ct,At,nt,I,Lt,$o,Nt,It,_e,Vt,Wt,rt,V,Ot,Ke,Bt,Rt,Qe,Ut,Ht,at,R,oe,To,ve,Gt,Mo,Jt,st,j,be,Yt,te,Xe,Zt,Kt,eo,Qt,Xt,en,U,on,oo,tn,nn,to,rn,an,sn,ne,dn,re,ye,cn,we,ln,no,pn,hn,mn,ae,ke,fn,H,un,Do,gn,_n,jo,vn,bn,dt,G,se,qo,Ee,yn,Po,wn,ct,y,Se,kn,J,En,ro,Sn,xn,ao,$n,Tn,Mn,xe,Dn,$e,jn,qn,Pn,Te,zn,Me,Fn,Cn,An,zo,Ln,Nn,De,In,so,Vn,Wn,On,je,Bn,qe,Rn,Un,Hn,W,co,Gn,Jn,Fo,Yn,Zn,Co,Kn,Qn,Xn,F,Pe,er,Y,or,io,tr,nr,Ao,rr,ar,sr,de,dr,ce,cr,C,ze,ir,Lo,lr,pr,Z,hr,No,mr,fr,Io,ur,gr,_r,ie,it,K,le,Vo,Fe,vr,Wo,br,lt,w,Ce,yr,Q,wr,lo,kr,Er,po,Sr,xr,$r,Ae,Tr,Le,Mr,Dr,jr,Ne,qr,Ie,Pr,zr,Fr,Oo,Cr,Ar,Ve,Lr,ho,Nr,Ir,Vr,We,Wr,Oe,Or,Br,Rr,O,mo,Ur,Hr,Bo,Gr,Jr,Ro,Yr,Zr,Kr,A,Be,Qr,X,Xr,fo,ea,oa,Uo,ta,na,ra,pe,aa,he,sa,B,Re,da,Ho,ca,ia,me,pt;return d=new $t({}),ve=new $t({}),be=new ee({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27"}}),ne=new Xo({props:{anchor:"transformers.SpeechEncoderDecoderConfig.example",$$slots:{default:[hs]},$$scope:{ctx:q}}}),ye=new ee({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L92",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),ke=new ee({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L109",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Ee=new $t({}),Se=new ee({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L173"}}),Pe=new ee({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/pr_highlight/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_highlight/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L441",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new ss({props:{$$slots:{default:[ms]},$$scope:{ctx:q}}}),ce=new Xo({props:{anchor:"transformers.SpeechEncoderDecoderModel.forward.example",$$slots:{default:[fs]},$$scope:{ctx:q}}}),ze=new ee({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L285"}}),ie=new Xo({props:{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[us]},$$scope:{ctx:q}}}),Fe=new $t({}),Ce=new ee({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L320"}}),Be=new ee({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/pr_highlight/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/pr_highlight/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L631",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new ss({props:{$$slots:{default:[gs]},$$scope:{ctx:q}}}),he=new Xo({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.example",$$slots:{default:[_s]},$$scope:{ctx:q}}}),Re=new ee({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L752"}}),me=new Xo({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[vs]},$$scope:{ctx:q}}}),{c(){i=a("meta"),v=h(),u=a("h1"),p=a("a"),g=a("span"),k(d.$$.fragment),f=h(),N=a("span"),Tt=t("Speech Encoder Decoder Models"),tt=h(),P=a("p"),Mt=t("The "),Je=a("a"),Dt=t("SpeechEncoderDecoderModel"),jt=t(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),xo=a("em"),qt=t("e.g."),Pt=h(),Ye=a("a"),zt=t("Wav2Vec2"),Ft=t(", "),Ze=a("a"),Ct=t("Hubert"),At=t(") and any pretrained autoregressive model as the decoder."),nt=h(),I=a("p"),Lt=t(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),$o=a("em"),Nt=t("e.g."),It=t(" been shown in "),_e=a("a"),Vt=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Wt=t(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),rt=h(),V=a("p"),Ot=t("An example of how to use a "),Ke=a("a"),Bt=t("SpeechEncoderDecoderModel"),Rt=t(` for inference can be seen in
`),Qe=a("a"),Ut=t("Speech2Text2"),Ht=t("."),at=h(),R=a("h2"),oe=a("a"),To=a("span"),k(ve.$$.fragment),Gt=h(),Mo=a("span"),Jt=t("SpeechEncoderDecoderConfig"),st=h(),j=a("div"),k(be.$$.fragment),Yt=h(),te=a("p"),Xe=a("a"),Zt=t("SpeechEncoderDecoderConfig"),Kt=t(` is the configuration class to store the configuration of a
`),eo=a("a"),Qt=t("SpeechEncoderDecoderModel"),Xt=t(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),en=h(),U=a("p"),on=t("Configuration objects inherit from "),oo=a("a"),tn=t("PretrainedConfig"),nn=t(` and can be used to control the model outputs. Read the
documentation from `),to=a("a"),rn=t("PretrainedConfig"),an=t(" for more information."),sn=h(),k(ne.$$.fragment),dn=h(),re=a("div"),k(ye.$$.fragment),cn=h(),we=a("p"),ln=t("Instantiate a "),no=a("a"),pn=t("SpeechEncoderDecoderConfig"),hn=t(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),mn=h(),ae=a("div"),k(ke.$$.fragment),fn=h(),H=a("p"),un=t("Serializes this instance to a Python dictionary. Override the default "),Do=a("em"),gn=t("to_dict()"),_n=t(" from "),jo=a("em"),vn=t("PretrainedConfig"),bn=t("."),dt=h(),G=a("h2"),se=a("a"),qo=a("span"),k(Ee.$$.fragment),yn=h(),Po=a("span"),wn=t("SpeechEncoderDecoderModel"),ct=h(),y=a("div"),k(Se.$$.fragment),kn=h(),J=a("p"),En=t(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),ro=a("a"),Sn=t("from_pretrained()"),xn=t(` function and the decoder is loaded via
`),ao=a("a"),$n=t("from_pretrained()"),Tn=t(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),Mn=h(),xe=a("p"),Dn=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),$e=a("a"),jn=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),qn=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Pn=h(),Te=a("p"),zn=t("Additionally, in "),Me=a("a"),Fn=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Cn=t(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),An=h(),zo=a("p"),Ln=t(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Nn=h(),De=a("p"),In=t("This model inherits from "),so=a("a"),Vn=t("PreTrainedModel"),Wn=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),On=h(),je=a("p"),Bn=t("This model is also a PyTorch "),qe=a("a"),Rn=t("torch.nn.Module"),Un=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hn=h(),W=a("p"),co=a("a"),Gn=t("SpeechEncoderDecoderModel"),Jn=t(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Fo=a("em"),Yn=t("~transformers.AutoModel.from_pretrained"),Zn=t(` class method for the encoder and
:meth`),Co=a("em"),Kn=t("~transformers.AutoModelForCausalLM.from_pretrained"),Qn=t(" class method for the decoder."),Xn=h(),F=a("div"),k(Pe.$$.fragment),er=h(),Y=a("p"),or=t("The "),io=a("a"),tr=t("SpeechEncoderDecoderModel"),nr=t(" forward method, overrides the "),Ao=a("code"),rr=t("__call__"),ar=t(" special method."),sr=h(),k(de.$$.fragment),dr=h(),k(ce.$$.fragment),cr=h(),C=a("div"),k(ze.$$.fragment),ir=h(),Lo=a("p"),lr=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),pr=h(),Z=a("p"),hr=t("The model is set in evaluation mode by default using "),No=a("code"),mr=t("model.eval()"),fr=t(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=a("code"),ur=t("model.train()"),gr=t("."),_r=h(),k(ie.$$.fragment),it=h(),K=a("h2"),le=a("a"),Vo=a("span"),k(Fe.$$.fragment),vr=h(),Wo=a("span"),br=t("FlaxSpeechEncoderDecoderModel"),lt=h(),w=a("div"),k(Ce.$$.fragment),yr=h(),Q=a("p"),wr=t(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),lo=a("a"),kr=t("from_pretrained()"),Er=t(` function and the decoder is loaded via
`),po=a("a"),Sr=t("from_pretrained()"),xr=t(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),$r=h(),Ae=a("p"),Tr=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Le=a("a"),Mr=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Dr=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),jr=h(),Ne=a("p"),qr=t("Additionally, in "),Ie=a("a"),Pr=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),zr=t(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Fr=h(),Oo=a("p"),Cr=t(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Ar=h(),Ve=a("p"),Lr=t("This model inherits from "),ho=a("a"),Nr=t("FlaxPreTrainedModel"),Ir=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr=h(),We=a("p"),Wr=t(`This model is also a Flax Linen
`),Oe=a("a"),Or=t("flax.nn.Module"),Br=t(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rr=h(),O=a("p"),mo=a("a"),Ur=t("FlaxSpeechEncoderDecoderModel"),Hr=t(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Bo=a("em"),Gr=t("~transformers.FlaxAutoModel.from_pretrained"),Jr=t(` class method for the
encoder and :meth`),Ro=a("em"),Yr=t("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Zr=t(" class method for the decoder."),Kr=h(),A=a("div"),k(Be.$$.fragment),Qr=h(),X=a("p"),Xr=t("The "),fo=a("a"),ea=t("FlaxSpeechEncoderDecoderModel"),oa=t(" forward method, overrides the "),Uo=a("code"),ta=t("__call__"),na=t(" special method."),ra=h(),k(pe.$$.fragment),aa=h(),k(he.$$.fragment),sa=h(),B=a("div"),k(Re.$$.fragment),da=h(),Ho=a("p"),ca=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ia=h(),k(me.$$.fragment),this.h()},l(r){const _=ls('[data-svelte="svelte-1phssyn"]',document.head);i=s(_,"META",{name:!0,content:!0}),_.forEach(o),v=m(r),u=s(r,"H1",{class:!0});var Ue=c(u);p=s(Ue,"A",{id:!0,class:!0,href:!0});var Go=c(p);g=s(Go,"SPAN",{});var Jo=c(g);E(d.$$.fragment,Jo),Jo.forEach(o),Go.forEach(o),f=m(Ue),N=s(Ue,"SPAN",{});var Yo=c(N);Tt=n(Yo,"Speech Encoder Decoder Models"),Yo.forEach(o),Ue.forEach(o),tt=m(r),P=s(r,"P",{});var z=c(P);Mt=n(z,"The "),Je=s(z,"A",{href:!0});var Zo=c(Je);Dt=n(Zo,"SpeechEncoderDecoderModel"),Zo.forEach(o),jt=n(z,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),xo=s(z,"EM",{});var Ko=c(xo);qt=n(Ko,"e.g."),Ko.forEach(o),Pt=m(z),Ye=s(z,"A",{href:!0});var la=c(Ye);zt=n(la,"Wav2Vec2"),la.forEach(o),Ft=n(z,", "),Ze=s(z,"A",{href:!0});var pa=c(Ze);Ct=n(pa,"Hubert"),pa.forEach(o),At=n(z,") and any pretrained autoregressive model as the decoder."),z.forEach(o),nt=m(r),I=s(r,"P",{});var uo=c(I);Lt=n(uo,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),$o=s(uo,"EM",{});var ha=c($o);Nt=n(ha,"e.g."),ha.forEach(o),It=n(uo," been shown in "),_e=s(uo,"A",{href:!0,rel:!0});var ma=c(_e);Vt=n(ma,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),ma.forEach(o),Wt=n(uo,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),uo.forEach(o),rt=m(r),V=s(r,"P",{});var go=c(V);Ot=n(go,"An example of how to use a "),Ke=s(go,"A",{href:!0});var fa=c(Ke);Bt=n(fa,"SpeechEncoderDecoderModel"),fa.forEach(o),Rt=n(go,` for inference can be seen in
`),Qe=s(go,"A",{href:!0});var ua=c(Qe);Ut=n(ua,"Speech2Text2"),ua.forEach(o),Ht=n(go,"."),go.forEach(o),at=m(r),R=s(r,"H2",{class:!0});var ht=c(R);oe=s(ht,"A",{id:!0,class:!0,href:!0});var ga=c(oe);To=s(ga,"SPAN",{});var _a=c(To);E(ve.$$.fragment,_a),_a.forEach(o),ga.forEach(o),Gt=m(ht),Mo=s(ht,"SPAN",{});var va=c(Mo);Jt=n(va,"SpeechEncoderDecoderConfig"),va.forEach(o),ht.forEach(o),st=m(r),j=s(r,"DIV",{class:!0});var L=c(j);E(be.$$.fragment,L),Yt=m(L),te=s(L,"P",{});var Qo=c(te);Xe=s(Qo,"A",{href:!0});var ba=c(Xe);Zt=n(ba,"SpeechEncoderDecoderConfig"),ba.forEach(o),Kt=n(Qo,` is the configuration class to store the configuration of a
`),eo=s(Qo,"A",{href:!0});var ya=c(eo);Qt=n(ya,"SpeechEncoderDecoderModel"),ya.forEach(o),Xt=n(Qo,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Qo.forEach(o),en=m(L),U=s(L,"P",{});var _o=c(U);on=n(_o,"Configuration objects inherit from "),oo=s(_o,"A",{href:!0});var wa=c(oo);tn=n(wa,"PretrainedConfig"),wa.forEach(o),nn=n(_o,` and can be used to control the model outputs. Read the
documentation from `),to=s(_o,"A",{href:!0});var ka=c(to);rn=n(ka,"PretrainedConfig"),ka.forEach(o),an=n(_o," for more information."),_o.forEach(o),sn=m(L),E(ne.$$.fragment,L),dn=m(L),re=s(L,"DIV",{class:!0});var mt=c(re);E(ye.$$.fragment,mt),cn=m(mt),we=s(mt,"P",{});var ft=c(we);ln=n(ft,"Instantiate a "),no=s(ft,"A",{href:!0});var Ea=c(no);pn=n(Ea,"SpeechEncoderDecoderConfig"),Ea.forEach(o),hn=n(ft,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),ft.forEach(o),mt.forEach(o),mn=m(L),ae=s(L,"DIV",{class:!0});var ut=c(ae);E(ke.$$.fragment,ut),fn=m(ut),H=s(ut,"P",{});var vo=c(H);un=n(vo,"Serializes this instance to a Python dictionary. Override the default "),Do=s(vo,"EM",{});var Sa=c(Do);gn=n(Sa,"to_dict()"),Sa.forEach(o),_n=n(vo," from "),jo=s(vo,"EM",{});var xa=c(jo);vn=n(xa,"PretrainedConfig"),xa.forEach(o),bn=n(vo,"."),vo.forEach(o),ut.forEach(o),L.forEach(o),dt=m(r),G=s(r,"H2",{class:!0});var gt=c(G);se=s(gt,"A",{id:!0,class:!0,href:!0});var $a=c(se);qo=s($a,"SPAN",{});var Ta=c(qo);E(Ee.$$.fragment,Ta),Ta.forEach(o),$a.forEach(o),yn=m(gt),Po=s(gt,"SPAN",{});var Ma=c(Po);wn=n(Ma,"SpeechEncoderDecoderModel"),Ma.forEach(o),gt.forEach(o),ct=m(r),y=s(r,"DIV",{class:!0});var M=c(y);E(Se.$$.fragment,M),kn=m(M),J=s(M,"P",{});var bo=c(J);En=n(bo,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),ro=s(bo,"A",{href:!0});var Da=c(ro);Sn=n(Da,"from_pretrained()"),Da.forEach(o),xn=n(bo,` function and the decoder is loaded via
`),ao=s(bo,"A",{href:!0});var ja=c(ao);$n=n(ja,"from_pretrained()"),ja.forEach(o),Tn=n(bo,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),bo.forEach(o),Mn=m(M),xe=s(M,"P",{});var _t=c(xe);Dn=n(_t,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),$e=s(_t,"A",{href:!0,rel:!0});var qa=c($e);jn=n(qa,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),qa.forEach(o),qn=n(_t,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),_t.forEach(o),Pn=m(M),Te=s(M,"P",{});var vt=c(Te);zn=n(vt,"Additionally, in "),Me=s(vt,"A",{href:!0,rel:!0});var Pa=c(Me);Fn=n(Pa,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Pa.forEach(o),Cn=n(vt,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),vt.forEach(o),An=m(M),zo=s(M,"P",{});var za=c(zo);Ln=n(za,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),za.forEach(o),Nn=m(M),De=s(M,"P",{});var bt=c(De);In=n(bt,"This model inherits from "),so=s(bt,"A",{href:!0});var Fa=c(so);Vn=n(Fa,"PreTrainedModel"),Fa.forEach(o),Wn=n(bt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bt.forEach(o),On=m(M),je=s(M,"P",{});var yt=c(je);Bn=n(yt,"This model is also a PyTorch "),qe=s(yt,"A",{href:!0,rel:!0});var Ca=c(qe);Rn=n(Ca,"torch.nn.Module"),Ca.forEach(o),Un=n(yt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yt.forEach(o),Hn=m(M),W=s(M,"P",{});var He=c(W);co=s(He,"A",{href:!0});var Aa=c(co);Gn=n(Aa,"SpeechEncoderDecoderModel"),Aa.forEach(o),Jn=n(He,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Fo=s(He,"EM",{});var La=c(Fo);Yn=n(La,"~transformers.AutoModel.from_pretrained"),La.forEach(o),Zn=n(He,` class method for the encoder and
:meth`),Co=s(He,"EM",{});var Na=c(Co);Kn=n(Na,"~transformers.AutoModelForCausalLM.from_pretrained"),Na.forEach(o),Qn=n(He," class method for the decoder."),He.forEach(o),Xn=m(M),F=s(M,"DIV",{class:!0});var fe=c(F);E(Pe.$$.fragment,fe),er=m(fe),Y=s(fe,"P",{});var yo=c(Y);or=n(yo,"The "),io=s(yo,"A",{href:!0});var Ia=c(io);tr=n(Ia,"SpeechEncoderDecoderModel"),Ia.forEach(o),nr=n(yo," forward method, overrides the "),Ao=s(yo,"CODE",{});var Va=c(Ao);rr=n(Va,"__call__"),Va.forEach(o),ar=n(yo," special method."),yo.forEach(o),sr=m(fe),E(de.$$.fragment,fe),dr=m(fe),E(ce.$$.fragment,fe),fe.forEach(o),cr=m(M),C=s(M,"DIV",{class:!0});var ue=c(C);E(ze.$$.fragment,ue),ir=m(ue),Lo=s(ue,"P",{});var Wa=c(Lo);lr=n(Wa,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Wa.forEach(o),pr=m(ue),Z=s(ue,"P",{});var wo=c(Z);hr=n(wo,"The model is set in evaluation mode by default using "),No=s(wo,"CODE",{});var Oa=c(No);mr=n(Oa,"model.eval()"),Oa.forEach(o),fr=n(wo,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=s(wo,"CODE",{});var Ba=c(Io);ur=n(Ba,"model.train()"),Ba.forEach(o),gr=n(wo,"."),wo.forEach(o),_r=m(ue),E(ie.$$.fragment,ue),ue.forEach(o),M.forEach(o),it=m(r),K=s(r,"H2",{class:!0});var wt=c(K);le=s(wt,"A",{id:!0,class:!0,href:!0});var Ra=c(le);Vo=s(Ra,"SPAN",{});var Ua=c(Vo);E(Fe.$$.fragment,Ua),Ua.forEach(o),Ra.forEach(o),vr=m(wt),Wo=s(wt,"SPAN",{});var Ha=c(Wo);br=n(Ha,"FlaxSpeechEncoderDecoderModel"),Ha.forEach(o),wt.forEach(o),lt=m(r),w=s(r,"DIV",{class:!0});var D=c(w);E(Ce.$$.fragment,D),yr=m(D),Q=s(D,"P",{});var ko=c(Q);wr=n(ko,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),lo=s(ko,"A",{href:!0});var Ga=c(lo);kr=n(Ga,"from_pretrained()"),Ga.forEach(o),Er=n(ko,` function and the decoder is loaded via
`),po=s(ko,"A",{href:!0});var Ja=c(po);Sr=n(Ja,"from_pretrained()"),Ja.forEach(o),xr=n(ko,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),ko.forEach(o),$r=m(D),Ae=s(D,"P",{});var kt=c(Ae);Tr=n(kt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Le=s(kt,"A",{href:!0,rel:!0});var Ya=c(Le);Mr=n(Ya,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ya.forEach(o),Dr=n(kt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),kt.forEach(o),jr=m(D),Ne=s(D,"P",{});var Et=c(Ne);qr=n(Et,"Additionally, in "),Ie=s(Et,"A",{href:!0,rel:!0});var Za=c(Ie);Pr=n(Za,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Za.forEach(o),zr=n(Et,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Et.forEach(o),Fr=m(D),Oo=s(D,"P",{});var Ka=c(Oo);Cr=n(Ka,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Ka.forEach(o),Ar=m(D),Ve=s(D,"P",{});var St=c(Ve);Lr=n(St,"This model inherits from "),ho=s(St,"A",{href:!0});var Qa=c(ho);Nr=n(Qa,"FlaxPreTrainedModel"),Qa.forEach(o),Ir=n(St,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),St.forEach(o),Vr=m(D),We=s(D,"P",{});var xt=c(We);Wr=n(xt,`This model is also a Flax Linen
`),Oe=s(xt,"A",{href:!0,rel:!0});var Xa=c(Oe);Or=n(Xa,"flax.nn.Module"),Xa.forEach(o),Br=n(xt,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xt.forEach(o),Rr=m(D),O=s(D,"P",{});var Ge=c(O);mo=s(Ge,"A",{href:!0});var es=c(mo);Ur=n(es,"FlaxSpeechEncoderDecoderModel"),es.forEach(o),Hr=n(Ge,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Bo=s(Ge,"EM",{});var os=c(Bo);Gr=n(os,"~transformers.FlaxAutoModel.from_pretrained"),os.forEach(o),Jr=n(Ge,` class method for the
encoder and :meth`),Ro=s(Ge,"EM",{});var ts=c(Ro);Yr=n(ts,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),ts.forEach(o),Zr=n(Ge," class method for the decoder."),Ge.forEach(o),Kr=m(D),A=s(D,"DIV",{class:!0});var ge=c(A);E(Be.$$.fragment,ge),Qr=m(ge),X=s(ge,"P",{});var Eo=c(X);Xr=n(Eo,"The "),fo=s(Eo,"A",{href:!0});var ns=c(fo);ea=n(ns,"FlaxSpeechEncoderDecoderModel"),ns.forEach(o),oa=n(Eo," forward method, overrides the "),Uo=s(Eo,"CODE",{});var rs=c(Uo);ta=n(rs,"__call__"),rs.forEach(o),na=n(Eo," special method."),Eo.forEach(o),ra=m(ge),E(pe.$$.fragment,ge),aa=m(ge),E(he.$$.fragment,ge),ge.forEach(o),sa=m(D),B=s(D,"DIV",{class:!0});var So=c(B);E(Re.$$.fragment,So),da=m(So),Ho=s(So,"P",{});var as=c(Ho);ca=n(as,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),as.forEach(o),ia=m(So),E(me.$$.fragment,So),So.forEach(o),D.forEach(o),this.h()},h(){l(i,"name","hf:doc:metadata"),l(i,"content",JSON.stringify(ys)),l(p,"id","speech-encoder-decoder-models"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#speech-encoder-decoder-models"),l(u,"class","relative group"),l(Je,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),l(Ye,"href","wav2vec2"),l(Ze,"href","hubert"),l(_e,"href","https://arxiv.org/abs/2104.06678"),l(_e,"rel","nofollow"),l(Ke,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),l(Qe,"href","speech_to_text_2"),l(oe,"id","transformers.SpeechEncoderDecoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.SpeechEncoderDecoderConfig"),l(R,"class","relative group"),l(Xe,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),l(eo,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),l(oo,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),l(to,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),l(no,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.SpeechEncoderDecoderModel"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.SpeechEncoderDecoderModel"),l(G,"class","relative group"),l(ro,"href","/docs/transformers/pr_highlight/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(ao,"href","/docs/transformers/pr_highlight/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l($e,"href","https://arxiv.org/abs/1907.12461"),l($e,"rel","nofollow"),l(Me,"href","https://arxiv.org/abs/2104.06678"),l(Me,"rel","nofollow"),l(so,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),l(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(qe,"rel","nofollow"),l(co,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),l(io,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.FlaxSpeechEncoderDecoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.FlaxSpeechEncoderDecoderModel"),l(K,"class","relative group"),l(lo,"href","/docs/transformers/pr_highlight/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(po,"href","/docs/transformers/pr_highlight/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Le,"href","https://arxiv.org/abs/1907.12461"),l(Le,"rel","nofollow"),l(Ie,"href","https://arxiv.org/abs/2104.06678"),l(Ie,"rel","nofollow"),l(ho,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Oe,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(Oe,"rel","nofollow"),l(mo,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),l(fo,"href","/docs/transformers/pr_highlight/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,_){e(document.head,i),b(r,v,_),b(r,u,_),e(u,p),e(p,g),S(d,g,null),e(u,f),e(u,N),e(N,Tt),b(r,tt,_),b(r,P,_),e(P,Mt),e(P,Je),e(Je,Dt),e(P,jt),e(P,xo),e(xo,qt),e(P,Pt),e(P,Ye),e(Ye,zt),e(P,Ft),e(P,Ze),e(Ze,Ct),e(P,At),b(r,nt,_),b(r,I,_),e(I,Lt),e(I,$o),e($o,Nt),e(I,It),e(I,_e),e(_e,Vt),e(I,Wt),b(r,rt,_),b(r,V,_),e(V,Ot),e(V,Ke),e(Ke,Bt),e(V,Rt),e(V,Qe),e(Qe,Ut),e(V,Ht),b(r,at,_),b(r,R,_),e(R,oe),e(oe,To),S(ve,To,null),e(R,Gt),e(R,Mo),e(Mo,Jt),b(r,st,_),b(r,j,_),S(be,j,null),e(j,Yt),e(j,te),e(te,Xe),e(Xe,Zt),e(te,Kt),e(te,eo),e(eo,Qt),e(te,Xt),e(j,en),e(j,U),e(U,on),e(U,oo),e(oo,tn),e(U,nn),e(U,to),e(to,rn),e(U,an),e(j,sn),S(ne,j,null),e(j,dn),e(j,re),S(ye,re,null),e(re,cn),e(re,we),e(we,ln),e(we,no),e(no,pn),e(we,hn),e(j,mn),e(j,ae),S(ke,ae,null),e(ae,fn),e(ae,H),e(H,un),e(H,Do),e(Do,gn),e(H,_n),e(H,jo),e(jo,vn),e(H,bn),b(r,dt,_),b(r,G,_),e(G,se),e(se,qo),S(Ee,qo,null),e(G,yn),e(G,Po),e(Po,wn),b(r,ct,_),b(r,y,_),S(Se,y,null),e(y,kn),e(y,J),e(J,En),e(J,ro),e(ro,Sn),e(J,xn),e(J,ao),e(ao,$n),e(J,Tn),e(y,Mn),e(y,xe),e(xe,Dn),e(xe,$e),e($e,jn),e(xe,qn),e(y,Pn),e(y,Te),e(Te,zn),e(Te,Me),e(Me,Fn),e(Te,Cn),e(y,An),e(y,zo),e(zo,Ln),e(y,Nn),e(y,De),e(De,In),e(De,so),e(so,Vn),e(De,Wn),e(y,On),e(y,je),e(je,Bn),e(je,qe),e(qe,Rn),e(je,Un),e(y,Hn),e(y,W),e(W,co),e(co,Gn),e(W,Jn),e(W,Fo),e(Fo,Yn),e(W,Zn),e(W,Co),e(Co,Kn),e(W,Qn),e(y,Xn),e(y,F),S(Pe,F,null),e(F,er),e(F,Y),e(Y,or),e(Y,io),e(io,tr),e(Y,nr),e(Y,Ao),e(Ao,rr),e(Y,ar),e(F,sr),S(de,F,null),e(F,dr),S(ce,F,null),e(y,cr),e(y,C),S(ze,C,null),e(C,ir),e(C,Lo),e(Lo,lr),e(C,pr),e(C,Z),e(Z,hr),e(Z,No),e(No,mr),e(Z,fr),e(Z,Io),e(Io,ur),e(Z,gr),e(C,_r),S(ie,C,null),b(r,it,_),b(r,K,_),e(K,le),e(le,Vo),S(Fe,Vo,null),e(K,vr),e(K,Wo),e(Wo,br),b(r,lt,_),b(r,w,_),S(Ce,w,null),e(w,yr),e(w,Q),e(Q,wr),e(Q,lo),e(lo,kr),e(Q,Er),e(Q,po),e(po,Sr),e(Q,xr),e(w,$r),e(w,Ae),e(Ae,Tr),e(Ae,Le),e(Le,Mr),e(Ae,Dr),e(w,jr),e(w,Ne),e(Ne,qr),e(Ne,Ie),e(Ie,Pr),e(Ne,zr),e(w,Fr),e(w,Oo),e(Oo,Cr),e(w,Ar),e(w,Ve),e(Ve,Lr),e(Ve,ho),e(ho,Nr),e(Ve,Ir),e(w,Vr),e(w,We),e(We,Wr),e(We,Oe),e(Oe,Or),e(We,Br),e(w,Rr),e(w,O),e(O,mo),e(mo,Ur),e(O,Hr),e(O,Bo),e(Bo,Gr),e(O,Jr),e(O,Ro),e(Ro,Yr),e(O,Zr),e(w,Kr),e(w,A),S(Be,A,null),e(A,Qr),e(A,X),e(X,Xr),e(X,fo),e(fo,ea),e(X,oa),e(X,Uo),e(Uo,ta),e(X,na),e(A,ra),S(pe,A,null),e(A,aa),S(he,A,null),e(w,sa),e(w,B),S(Re,B,null),e(B,da),e(B,Ho),e(Ho,ca),e(B,ia),S(me,B,null),pt=!0},p(r,[_]){const Ue={};_&2&&(Ue.$$scope={dirty:_,ctx:r}),ne.$set(Ue);const Go={};_&2&&(Go.$$scope={dirty:_,ctx:r}),de.$set(Go);const Jo={};_&2&&(Jo.$$scope={dirty:_,ctx:r}),ce.$set(Jo);const Yo={};_&2&&(Yo.$$scope={dirty:_,ctx:r}),ie.$set(Yo);const z={};_&2&&(z.$$scope={dirty:_,ctx:r}),pe.$set(z);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:r}),he.$set(Zo);const Ko={};_&2&&(Ko.$$scope={dirty:_,ctx:r}),me.$set(Ko)},i(r){pt||(x(d.$$.fragment,r),x(ve.$$.fragment,r),x(be.$$.fragment,r),x(ne.$$.fragment,r),x(ye.$$.fragment,r),x(ke.$$.fragment,r),x(Ee.$$.fragment,r),x(Se.$$.fragment,r),x(Pe.$$.fragment,r),x(de.$$.fragment,r),x(ce.$$.fragment,r),x(ze.$$.fragment,r),x(ie.$$.fragment,r),x(Fe.$$.fragment,r),x(Ce.$$.fragment,r),x(Be.$$.fragment,r),x(pe.$$.fragment,r),x(he.$$.fragment,r),x(Re.$$.fragment,r),x(me.$$.fragment,r),pt=!0)},o(r){$(d.$$.fragment,r),$(ve.$$.fragment,r),$(be.$$.fragment,r),$(ne.$$.fragment,r),$(ye.$$.fragment,r),$(ke.$$.fragment,r),$(Ee.$$.fragment,r),$(Se.$$.fragment,r),$(Pe.$$.fragment,r),$(de.$$.fragment,r),$(ce.$$.fragment,r),$(ze.$$.fragment,r),$(ie.$$.fragment,r),$(Fe.$$.fragment,r),$(Ce.$$.fragment,r),$(Be.$$.fragment,r),$(pe.$$.fragment,r),$(he.$$.fragment,r),$(Re.$$.fragment,r),$(me.$$.fragment,r),pt=!1},d(r){o(i),r&&o(v),r&&o(u),T(d),r&&o(tt),r&&o(P),r&&o(nt),r&&o(I),r&&o(rt),r&&o(V),r&&o(at),r&&o(R),T(ve),r&&o(st),r&&o(j),T(be),T(ne),T(ye),T(ke),r&&o(dt),r&&o(G),T(Ee),r&&o(ct),r&&o(y),T(Se),T(Pe),T(de),T(ce),T(ze),T(ie),r&&o(it),r&&o(K),T(Fe),r&&o(lt),r&&o(w),T(Ce),T(Be),T(pe),T(he),T(Re),T(me)}}}const ys={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"},{local:"transformers.FlaxSpeechEncoderDecoderModel",title:"FlaxSpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function ws(q){return ps(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ms extends ds{constructor(i){super();cs(this,i,ws,bs,is,{})}}export{Ms as default,ys as metadata};
