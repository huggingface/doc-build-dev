import{S as fi,i as ui,s as gi,e as a,k as l,w as b,t as n,M as _i,c as s,d as t,m as p,a as d,x as y,h as r,b as i,G as e,g as u,y as w,q as E,o as k,B as $,v as vi,L as an}from"../../chunks/vendor-hf-doc-builder.js";import{T as mi}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as rn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bi(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){m=a("p"),S=n("Examples:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Examples:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:an,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function yi(z){let m,S,_,f,v;return{c(){m=a("p"),S=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var O=d(_);f=r(O,"Module"),O.forEach(t),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(c,g){u(c,m,g),e(m,S),e(m,_),e(_,f),e(m,v)},d(c){c&&t(m)}}}function wi(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import SpeechEncoderDecoderModel, Wav2Vec2Processor
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){m=a("p"),S=n("Examples:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Examples:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:an,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function Ei(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),{c(){m=a("p"),S=n("Example:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Example:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:an,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function ki(z){let m,S,_,f,v;return{c(){m=a("p"),S=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var O=d(_);f=r(O,"Module"),O.forEach(t),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(c,g){u(c,m,g),e(m,S),e(m,_),e(_,f),e(m,v)},d(c){c&&t(m)}}}function $i(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel, BartTokenizer

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
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`}}),{c(){m=a("p"),S=n("Examples:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Examples:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:an,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function Si(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`}}),{c(){m=a("p"),S=n("Example:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Example:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:an,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function xi(z){let m,S,_,f,v,c,g,O,Qn,sn,A,Xn,So,er,or,it,tr,nr,xo,rr,ar,jo,sr,dr,dn,B,cr,lt,ir,lr,Fe,pr,hr,cn,R,mr,To,fr,ur,Mo,gr,_r,ln,J,pe,pt,Le,vr,Ne,br,ht,yr,wr,pn,Y,Do,Er,kr,qo,$r,Sr,hn,Ve,mn,Z,he,mt,We,xr,Ie,jr,ft,Tr,Mr,fn,x,Po,Dr,qr,ut,Pr,zr,zo,Ar,Cr,Ao,Fr,Lr,gt,Nr,Vr,_t,Wr,Ir,vt,Or,Br,Co,Rr,Hr,me,Gr,bt,Ur,Jr,yt,Yr,Zr,Fo,Kr,Qr,un,Oe,gn,K,fe,wt,Be,Xr,Re,ea,Et,oa,ta,_n,F,na,kt,ra,aa,Lo,sa,da,$t,ca,ia,vn,ue,la,St,pa,ha,bn,He,yn,Q,ge,xt,Ge,ma,jt,fa,wn,L,ua,Tt,ga,_a,Mt,va,ba,Dt,ya,wa,En,Ue,kn,X,_e,qt,Je,Ea,Pt,ka,$n,P,Ye,$a,ve,No,Sa,xa,Vo,ja,Ta,Ma,ee,Da,Wo,qa,Pa,Io,za,Aa,Ca,be,Fa,ye,Ze,La,Ke,Na,Oo,Va,Wa,Ia,we,Qe,Oa,oe,Ba,zt,Ra,Ha,At,Ga,Ua,Sn,te,Ee,Ct,Xe,Ja,Ft,Ya,xn,j,eo,Za,ne,Ka,Bo,Qa,Xa,Ro,es,os,ts,oo,ns,to,rs,as,ss,no,ds,ro,cs,is,ls,Lt,ps,hs,ao,ms,Ho,fs,us,gs,so,_s,co,vs,bs,ys,H,Go,ws,Es,Nt,ks,$s,Vt,Ss,xs,js,N,io,Ts,re,Ms,Uo,Ds,qs,Wt,Ps,zs,As,ke,Cs,$e,Fs,V,lo,Ls,It,Ns,Vs,ae,Ws,Ot,Is,Os,Bt,Bs,Rs,Hs,Se,jn,se,xe,Rt,po,Gs,Ht,Us,Tn,T,ho,Js,de,Ys,Jo,Zs,Ks,Yo,Qs,Xs,ed,mo,od,fo,td,nd,rd,uo,ad,go,sd,dd,cd,Gt,id,ld,_o,pd,Zo,hd,md,fd,vo,ud,bo,gd,_d,vd,G,Ko,bd,yd,Ut,wd,Ed,Jt,kd,$d,Sd,W,yo,xd,ce,jd,Qo,Td,Md,Yt,Dd,qd,Pd,je,zd,Te,Ad,U,wo,Cd,Zt,Fd,Ld,Me,Mn;return c=new Ce({}),Le=new Ce({}),Ve=new le({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

config_encoder = Wav2Vec2Config()
config_decoder = BertConfig()

config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = SpeechEncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)`}}),We=new Ce({}),Oe=new le({props:{code:`from transformers import SpeechEncoderDecoderModel

model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/hubert-large-ls960-ft", "bert-base-uncased"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)`}}),Be=new Ce({}),He=new le({props:{code:`from transformers import Wav2Vec2Processor, SpeechEncoderDecoderModel
from datasets import load_dataset
import torch

# load a fine-tuned speech translation model and corresponding processor
model = SpeechEncoderDecoderModel.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")

# let's perform inference on a piece of English speech (which we'll translate to German)
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values

# autoregressively generate transcription (uses greedy decoding by default)
generated_ids = model.generate(input_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
print(generated_text)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned speech translation model and corresponding processor</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on a piece of English speech (which we&#x27;ll translate to German)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate transcription (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
Mr. Quilter ist der Apostel der Mittelschicht und wir freuen uns, sein Evangelium willkommen hei\xDFen zu k\xF6nnen.`}}),Ge=new Ce({}),Ue=new le({props:{code:`from transformers import Wav2Vec2Processor, SpeechEncoderDecoderModel
from datasets import load_dataset

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-base-960h", "bert-base-uncased"
)

model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id

# load a speech input
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values

# load its corresponding transcription
with processor.as_target_processor():
    labels = processor(ds[0]["text"], return_tensors="pt").input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_values, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a speech input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load its corresponding transcription</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Je=new Ce({}),Ye=new ie({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27"}}),be=new rn({props:{anchor:"transformers.SpeechEncoderDecoderConfig.example",$$slots:{default:[bi]},$$scope:{ctx:z}}}),Ze=new ie({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L93",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),Qe=new ie({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L110",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Xe=new Ce({}),eo=new ie({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L173"}}),io=new ie({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/pr_18271/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/pr_18271/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_18271/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_18271/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_18271/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_18271/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L442",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new mi({props:{$$slots:{default:[yi]},$$scope:{ctx:z}}}),$e=new rn({props:{anchor:"transformers.SpeechEncoderDecoderModel.forward.example",$$slots:{default:[wi]},$$scope:{ctx:z}}}),lo=new ie({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L287"}}),Se=new rn({props:{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Ei]},$$scope:{ctx:z}}}),po=new Ce({}),ho=new ie({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L329"}}),yo=new ie({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/pr_18271/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/pr_18271/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L662",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
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
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new mi({props:{$$slots:{default:[ki]},$$scope:{ctx:z}}}),Te=new rn({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.example",$$slots:{default:[$i]},$$scope:{ctx:z}}}),wo=new ie({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L784"}}),Me=new rn({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Si]},$$scope:{ctx:z}}}),{c(){m=a("meta"),S=l(),_=a("h1"),f=a("a"),v=a("span"),b(c.$$.fragment),g=l(),O=a("span"),Qn=n("Speech Encoder Decoder Models"),sn=l(),A=a("p"),Xn=n("The "),So=a("a"),er=n("SpeechEncoderDecoderModel"),or=n(` can be used to initialize a speech-to-text model
with any pretrained speech autoencoding model as the encoder (`),it=a("em"),tr=n("e.g."),nr=l(),xo=a("a"),rr=n("Wav2Vec2"),ar=n(", "),jo=a("a"),sr=n("Hubert"),dr=n(") and any pretrained autoregressive model as the decoder."),dn=l(),B=a("p"),cr=n(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),lt=a("em"),ir=n("e.g."),lr=n(" been shown in "),Fe=a("a"),pr=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),hr=n(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),cn=l(),R=a("p"),mr=n("An example of how to use a "),To=a("a"),fr=n("SpeechEncoderDecoderModel"),ur=n(" for inference can be seen in "),Mo=a("a"),gr=n("Speech2Text2"),_r=n("."),ln=l(),J=a("h2"),pe=a("a"),pt=a("span"),b(Le.$$.fragment),vr=l(),Ne=a("span"),br=n("Randomly initializing "),ht=a("code"),yr=n("SpeechEncoderDecoderModel"),wr=n(" from model configurations."),pn=l(),Y=a("p"),Do=a("a"),Er=n("SpeechEncoderDecoderModel"),kr=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),qo=a("a"),$r=n("Wav2Vec2Model"),Sr=n(" configuration for the encoder\nand the default [\u2018BertModel`] configuration for the decoder."),hn=l(),b(Ve.$$.fragment),mn=l(),Z=a("h2"),he=a("a"),mt=a("span"),b(We.$$.fragment),xr=l(),Ie=a("span"),jr=n("Initialising "),ft=a("code"),Tr=n("SpeechEncoderDecoderModel"),Mr=n(" from a pretrained encoder and a pretrained decoder."),fn=l(),x=a("p"),Po=a("a"),Dr=n("SpeechEncoderDecoderModel"),qr=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based speech model, "),ut=a("em"),Pr=n("e.g."),zr=l(),zo=a("a"),Ar=n("Wav2Vec2"),Cr=n(", "),Ao=a("a"),Fr=n("Hubert"),Lr=n(" can serve as the encoder and both pretrained auto-encoding models, "),gt=a("em"),Nr=n("e.g."),Vr=n(" BERT, pretrained causal language models, "),_t=a("em"),Wr=n("e.g."),Ir=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),vt=a("em"),Or=n("e.g."),Br=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Co=a("a"),Rr=n("SpeechEncoderDecoderModel"),Hr=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),me=a("a"),Gr=n("the "),bt=a("em"),Ur=n("Warm-starting-encoder-decoder blog post"),Jr=n(`.
To do so, the `),yt=a("code"),Yr=n("SpeechEncoderDecoderModel"),Zr=n(" class provides a "),Fo=a("a"),Kr=n("SpeechEncoderDecoderModel.from_encoder_decoder_pretrained()"),Qr=n(" method."),un=l(),b(Oe.$$.fragment),gn=l(),K=a("h2"),fe=a("a"),wt=a("span"),b(Be.$$.fragment),Xr=l(),Re=a("span"),ea=n("Loading an existing "),Et=a("code"),oa=n("SpeechEncoderDecoderModel"),ta=n(" checkpoint and perform inference."),_n=l(),F=a("p"),na=n("To load fine-tuned checkpoints of the "),kt=a("code"),ra=n("SpeechEncoderDecoderModel"),aa=n(" class, "),Lo=a("a"),sa=n("SpeechEncoderDecoderModel"),da=n(" provides the "),$t=a("code"),ca=n("from_pretrained(...)"),ia=n(" method just like any other model architecture in Transformers."),vn=l(),ue=a("p"),la=n("To perform inference, one uses the "),St=a("code"),pa=n("generate"),ha=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),bn=l(),b(He.$$.fragment),yn=l(),Q=a("h2"),ge=a("a"),xt=a("span"),b(Ge.$$.fragment),ma=l(),jt=a("span"),fa=n("Training"),wn=l(),L=a("p"),ua=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (speech, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Tt=a("code"),ga=n("input_values"),_a=n(` (which are the
speech inputs) and `),Mt=a("code"),va=n("labels"),ba=n(" (which are the "),Dt=a("code"),ya=n("input_ids"),wa=n(" of the encoded target sequence)."),En=l(),b(Ue.$$.fragment),kn=l(),X=a("h2"),_e=a("a"),qt=a("span"),b(Je.$$.fragment),Ea=l(),Pt=a("span"),ka=n("SpeechEncoderDecoderConfig"),$n=l(),P=a("div"),b(Ye.$$.fragment),$a=l(),ve=a("p"),No=a("a"),Sa=n("SpeechEncoderDecoderConfig"),xa=n(` is the configuration class to store the configuration of a
`),Vo=a("a"),ja=n("SpeechEncoderDecoderModel"),Ta=n(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Ma=l(),ee=a("p"),Da=n("Configuration objects inherit from "),Wo=a("a"),qa=n("PretrainedConfig"),Pa=n(` and can be used to control the model outputs. Read the
documentation from `),Io=a("a"),za=n("PretrainedConfig"),Aa=n(" for more information."),Ca=l(),b(be.$$.fragment),Fa=l(),ye=a("div"),b(Ze.$$.fragment),La=l(),Ke=a("p"),Na=n("Instantiate a "),Oo=a("a"),Va=n("SpeechEncoderDecoderConfig"),Wa=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Ia=l(),we=a("div"),b(Qe.$$.fragment),Oa=l(),oe=a("p"),Ba=n("Serializes this instance to a Python dictionary. Override the default "),zt=a("em"),Ra=n("to_dict()"),Ha=n(" from "),At=a("em"),Ga=n("PretrainedConfig"),Ua=n("."),Sn=l(),te=a("h2"),Ee=a("a"),Ct=a("span"),b(Xe.$$.fragment),Ja=l(),Ft=a("span"),Ya=n("SpeechEncoderDecoderModel"),xn=l(),j=a("div"),b(eo.$$.fragment),Za=l(),ne=a("p"),Ka=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=a("a"),Qa=n("from_pretrained()"),Xa=n(` function and the decoder is loaded via
`),Ro=a("a"),es=n("from_pretrained()"),os=n(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),ts=l(),oo=a("p"),ns=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),to=a("a"),rs=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),as=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ss=l(),no=a("p"),ds=n("Additionally, in "),ro=a("a"),cs=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),is=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),ls=l(),Lt=a("p"),ps=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hs=l(),ao=a("p"),ms=n("This model inherits from "),Ho=a("a"),fs=n("PreTrainedModel"),us=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gs=l(),so=a("p"),_s=n("This model is also a PyTorch "),co=a("a"),vs=n("torch.nn.Module"),bs=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ys=l(),H=a("p"),Go=a("a"),ws=n("SpeechEncoderDecoderModel"),Es=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Nt=a("em"),ks=n("~transformers.AutoModel.from_pretrained"),$s=n(` class method for the encoder and
:meth`),Vt=a("em"),Ss=n("~transformers.AutoModelForCausalLM.from_pretrained"),xs=n(" class method for the decoder."),js=l(),N=a("div"),b(io.$$.fragment),Ts=l(),re=a("p"),Ms=n("The "),Uo=a("a"),Ds=n("SpeechEncoderDecoderModel"),qs=n(" forward method, overrides the "),Wt=a("code"),Ps=n("__call__"),zs=n(" special method."),As=l(),b(ke.$$.fragment),Cs=l(),b($e.$$.fragment),Fs=l(),V=a("div"),b(lo.$$.fragment),Ls=l(),It=a("p"),Ns=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Vs=l(),ae=a("p"),Ws=n("The model is set in evaluation mode by default using "),Ot=a("code"),Is=n("model.eval()"),Os=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Bt=a("code"),Bs=n("model.train()"),Rs=n("."),Hs=l(),b(Se.$$.fragment),jn=l(),se=a("h2"),xe=a("a"),Rt=a("span"),b(po.$$.fragment),Gs=l(),Ht=a("span"),Us=n("FlaxSpeechEncoderDecoderModel"),Tn=l(),T=a("div"),b(ho.$$.fragment),Js=l(),de=a("p"),Ys=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Jo=a("a"),Zs=n("from_pretrained()"),Ks=n(` function and the decoder is loaded via
`),Yo=a("a"),Qs=n("from_pretrained()"),Xs=n(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),ed=l(),mo=a("p"),od=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),fo=a("a"),td=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),nd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),rd=l(),uo=a("p"),ad=n("Additionally, in "),go=a("a"),sd=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),dd=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),cd=l(),Gt=a("p"),id=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ld=l(),_o=a("p"),pd=n("This model inherits from "),Zo=a("a"),hd=n("FlaxPreTrainedModel"),md=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=l(),vo=a("p"),ud=n(`This model is also a Flax Linen
`),bo=a("a"),gd=n("flax.nn.Module"),_d=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vd=l(),G=a("p"),Ko=a("a"),bd=n("FlaxSpeechEncoderDecoderModel"),yd=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ut=a("em"),wd=n("~transformers.FlaxAutoModel.from_pretrained"),Ed=n(` class method for the
encoder and :meth`),Jt=a("em"),kd=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),$d=n(" class method for the decoder."),Sd=l(),W=a("div"),b(yo.$$.fragment),xd=l(),ce=a("p"),jd=n("The "),Qo=a("a"),Td=n("FlaxSpeechEncoderDecoderModel"),Md=n(" forward method, overrides the "),Yt=a("code"),Dd=n("__call__"),qd=n(" special method."),Pd=l(),b(je.$$.fragment),zd=l(),b(Te.$$.fragment),Ad=l(),U=a("div"),b(wo.$$.fragment),Cd=l(),Zt=a("p"),Fd=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Ld=l(),b(Me.$$.fragment),this.h()},l(o){const h=_i('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(t),S=p(o),_=s(o,"H1",{class:!0});var Eo=d(_);f=s(Eo,"A",{id:!0,class:!0,href:!0});var Kt=d(f);v=s(Kt,"SPAN",{});var Qt=d(v);y(c.$$.fragment,Qt),Qt.forEach(t),Kt.forEach(t),g=p(Eo),O=s(Eo,"SPAN",{});var Xt=d(O);Qn=r(Xt,"Speech Encoder Decoder Models"),Xt.forEach(t),Eo.forEach(t),sn=p(o),A=s(o,"P",{});var C=d(A);Xn=r(C,"The "),So=s(C,"A",{href:!0});var en=d(So);er=r(en,"SpeechEncoderDecoderModel"),en.forEach(t),or=r(C,` can be used to initialize a speech-to-text model
with any pretrained speech autoencoding model as the encoder (`),it=s(C,"EM",{});var on=d(it);tr=r(on,"e.g."),on.forEach(t),nr=p(C),xo=s(C,"A",{href:!0});var Vd=d(xo);rr=r(Vd,"Wav2Vec2"),Vd.forEach(t),ar=r(C,", "),jo=s(C,"A",{href:!0});var Wd=d(jo);sr=r(Wd,"Hubert"),Wd.forEach(t),dr=r(C,") and any pretrained autoregressive model as the decoder."),C.forEach(t),dn=p(o),B=s(o,"P",{});var Xo=d(B);cr=r(Xo,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),lt=s(Xo,"EM",{});var Id=d(lt);ir=r(Id,"e.g."),Id.forEach(t),lr=r(Xo," been shown in "),Fe=s(Xo,"A",{href:!0,rel:!0});var Od=d(Fe);pr=r(Od,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Od.forEach(t),hr=r(Xo,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),Xo.forEach(t),cn=p(o),R=s(o,"P",{});var et=d(R);mr=r(et,"An example of how to use a "),To=s(et,"A",{href:!0});var Bd=d(To);fr=r(Bd,"SpeechEncoderDecoderModel"),Bd.forEach(t),ur=r(et," for inference can be seen in "),Mo=s(et,"A",{href:!0});var Rd=d(Mo);gr=r(Rd,"Speech2Text2"),Rd.forEach(t),_r=r(et,"."),et.forEach(t),ln=p(o),J=s(o,"H2",{class:!0});var Dn=d(J);pe=s(Dn,"A",{id:!0,class:!0,href:!0});var Hd=d(pe);pt=s(Hd,"SPAN",{});var Gd=d(pt);y(Le.$$.fragment,Gd),Gd.forEach(t),Hd.forEach(t),vr=p(Dn),Ne=s(Dn,"SPAN",{});var qn=d(Ne);br=r(qn,"Randomly initializing "),ht=s(qn,"CODE",{});var Ud=d(ht);yr=r(Ud,"SpeechEncoderDecoderModel"),Ud.forEach(t),wr=r(qn," from model configurations."),qn.forEach(t),Dn.forEach(t),pn=p(o),Y=s(o,"P",{});var tn=d(Y);Do=s(tn,"A",{href:!0});var Jd=d(Do);Er=r(Jd,"SpeechEncoderDecoderModel"),Jd.forEach(t),kr=r(tn," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),qo=s(tn,"A",{href:!0});var Yd=d(qo);$r=r(Yd,"Wav2Vec2Model"),Yd.forEach(t),Sr=r(tn," configuration for the encoder\nand the default [\u2018BertModel`] configuration for the decoder."),tn.forEach(t),hn=p(o),y(Ve.$$.fragment,o),mn=p(o),Z=s(o,"H2",{class:!0});var Pn=d(Z);he=s(Pn,"A",{id:!0,class:!0,href:!0});var Zd=d(he);mt=s(Zd,"SPAN",{});var Kd=d(mt);y(We.$$.fragment,Kd),Kd.forEach(t),Zd.forEach(t),xr=p(Pn),Ie=s(Pn,"SPAN",{});var zn=d(Ie);jr=r(zn,"Initialising "),ft=s(zn,"CODE",{});var Qd=d(ft);Tr=r(Qd,"SpeechEncoderDecoderModel"),Qd.forEach(t),Mr=r(zn," from a pretrained encoder and a pretrained decoder."),zn.forEach(t),Pn.forEach(t),fn=p(o),x=s(o,"P",{});var M=d(x);Po=s(M,"A",{href:!0});var Xd=d(Po);Dr=r(Xd,"SpeechEncoderDecoderModel"),Xd.forEach(t),qr=r(M," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based speech model, "),ut=s(M,"EM",{});var ec=d(ut);Pr=r(ec,"e.g."),ec.forEach(t),zr=p(M),zo=s(M,"A",{href:!0});var oc=d(zo);Ar=r(oc,"Wav2Vec2"),oc.forEach(t),Cr=r(M,", "),Ao=s(M,"A",{href:!0});var tc=d(Ao);Fr=r(tc,"Hubert"),tc.forEach(t),Lr=r(M," can serve as the encoder and both pretrained auto-encoding models, "),gt=s(M,"EM",{});var nc=d(gt);Nr=r(nc,"e.g."),nc.forEach(t),Vr=r(M," BERT, pretrained causal language models, "),_t=s(M,"EM",{});var rc=d(_t);Wr=r(rc,"e.g."),rc.forEach(t),Ir=r(M," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),vt=s(M,"EM",{});var ac=d(vt);Or=r(ac,"e.g."),ac.forEach(t),Br=r(M,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Co=s(M,"A",{href:!0});var sc=d(Co);Rr=r(sc,"SpeechEncoderDecoderModel"),sc.forEach(t),Hr=r(M," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),me=s(M,"A",{href:!0,rel:!0});var Nd=d(me);Gr=r(Nd,"the "),bt=s(Nd,"EM",{});var dc=d(bt);Ur=r(dc,"Warm-starting-encoder-decoder blog post"),dc.forEach(t),Nd.forEach(t),Jr=r(M,`.
To do so, the `),yt=s(M,"CODE",{});var cc=d(yt);Yr=r(cc,"SpeechEncoderDecoderModel"),cc.forEach(t),Zr=r(M," class provides a "),Fo=s(M,"A",{href:!0});var ic=d(Fo);Kr=r(ic,"SpeechEncoderDecoderModel.from_encoder_decoder_pretrained()"),ic.forEach(t),Qr=r(M," method."),M.forEach(t),un=p(o),y(Oe.$$.fragment,o),gn=p(o),K=s(o,"H2",{class:!0});var An=d(K);fe=s(An,"A",{id:!0,class:!0,href:!0});var lc=d(fe);wt=s(lc,"SPAN",{});var pc=d(wt);y(Be.$$.fragment,pc),pc.forEach(t),lc.forEach(t),Xr=p(An),Re=s(An,"SPAN",{});var Cn=d(Re);ea=r(Cn,"Loading an existing "),Et=s(Cn,"CODE",{});var hc=d(Et);oa=r(hc,"SpeechEncoderDecoderModel"),hc.forEach(t),ta=r(Cn," checkpoint and perform inference."),Cn.forEach(t),An.forEach(t),_n=p(o),F=s(o,"P",{});var De=d(F);na=r(De,"To load fine-tuned checkpoints of the "),kt=s(De,"CODE",{});var mc=d(kt);ra=r(mc,"SpeechEncoderDecoderModel"),mc.forEach(t),aa=r(De," class, "),Lo=s(De,"A",{href:!0});var fc=d(Lo);sa=r(fc,"SpeechEncoderDecoderModel"),fc.forEach(t),da=r(De," provides the "),$t=s(De,"CODE",{});var uc=d($t);ca=r(uc,"from_pretrained(...)"),uc.forEach(t),ia=r(De," method just like any other model architecture in Transformers."),De.forEach(t),vn=p(o),ue=s(o,"P",{});var Fn=d(ue);la=r(Fn,"To perform inference, one uses the "),St=s(Fn,"CODE",{});var gc=d(St);pa=r(gc,"generate"),gc.forEach(t),ha=r(Fn," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Fn.forEach(t),bn=p(o),y(He.$$.fragment,o),yn=p(o),Q=s(o,"H2",{class:!0});var Ln=d(Q);ge=s(Ln,"A",{id:!0,class:!0,href:!0});var _c=d(ge);xt=s(_c,"SPAN",{});var vc=d(xt);y(Ge.$$.fragment,vc),vc.forEach(t),_c.forEach(t),ma=p(Ln),jt=s(Ln,"SPAN",{});var bc=d(jt);fa=r(bc,"Training"),bc.forEach(t),Ln.forEach(t),wn=p(o),L=s(o,"P",{});var qe=d(L);ua=r(qe,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (speech, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Tt=s(qe,"CODE",{});var yc=d(Tt);ga=r(yc,"input_values"),yc.forEach(t),_a=r(qe,` (which are the
speech inputs) and `),Mt=s(qe,"CODE",{});var wc=d(Mt);va=r(wc,"labels"),wc.forEach(t),ba=r(qe," (which are the "),Dt=s(qe,"CODE",{});var Ec=d(Dt);ya=r(Ec,"input_ids"),Ec.forEach(t),wa=r(qe," of the encoded target sequence)."),qe.forEach(t),En=p(o),y(Ue.$$.fragment,o),kn=p(o),X=s(o,"H2",{class:!0});var Nn=d(X);_e=s(Nn,"A",{id:!0,class:!0,href:!0});var kc=d(_e);qt=s(kc,"SPAN",{});var $c=d(qt);y(Je.$$.fragment,$c),$c.forEach(t),kc.forEach(t),Ea=p(Nn),Pt=s(Nn,"SPAN",{});var Sc=d(Pt);ka=r(Sc,"SpeechEncoderDecoderConfig"),Sc.forEach(t),Nn.forEach(t),$n=p(o),P=s(o,"DIV",{class:!0});var I=d(P);y(Ye.$$.fragment,I),$a=p(I),ve=s(I,"P",{});var nn=d(ve);No=s(nn,"A",{href:!0});var xc=d(No);Sa=r(xc,"SpeechEncoderDecoderConfig"),xc.forEach(t),xa=r(nn,` is the configuration class to store the configuration of a
`),Vo=s(nn,"A",{href:!0});var jc=d(Vo);ja=r(jc,"SpeechEncoderDecoderModel"),jc.forEach(t),Ta=r(nn,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),nn.forEach(t),Ma=p(I),ee=s(I,"P",{});var ot=d(ee);Da=r(ot,"Configuration objects inherit from "),Wo=s(ot,"A",{href:!0});var Tc=d(Wo);qa=r(Tc,"PretrainedConfig"),Tc.forEach(t),Pa=r(ot,` and can be used to control the model outputs. Read the
documentation from `),Io=s(ot,"A",{href:!0});var Mc=d(Io);za=r(Mc,"PretrainedConfig"),Mc.forEach(t),Aa=r(ot," for more information."),ot.forEach(t),Ca=p(I),y(be.$$.fragment,I),Fa=p(I),ye=s(I,"DIV",{class:!0});var Vn=d(ye);y(Ze.$$.fragment,Vn),La=p(Vn),Ke=s(Vn,"P",{});var Wn=d(Ke);Na=r(Wn,"Instantiate a "),Oo=s(Wn,"A",{href:!0});var Dc=d(Oo);Va=r(Dc,"SpeechEncoderDecoderConfig"),Dc.forEach(t),Wa=r(Wn,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Wn.forEach(t),Vn.forEach(t),Ia=p(I),we=s(I,"DIV",{class:!0});var In=d(we);y(Qe.$$.fragment,In),Oa=p(In),oe=s(In,"P",{});var tt=d(oe);Ba=r(tt,"Serializes this instance to a Python dictionary. Override the default "),zt=s(tt,"EM",{});var qc=d(zt);Ra=r(qc,"to_dict()"),qc.forEach(t),Ha=r(tt," from "),At=s(tt,"EM",{});var Pc=d(At);Ga=r(Pc,"PretrainedConfig"),Pc.forEach(t),Ua=r(tt,"."),tt.forEach(t),In.forEach(t),I.forEach(t),Sn=p(o),te=s(o,"H2",{class:!0});var On=d(te);Ee=s(On,"A",{id:!0,class:!0,href:!0});var zc=d(Ee);Ct=s(zc,"SPAN",{});var Ac=d(Ct);y(Xe.$$.fragment,Ac),Ac.forEach(t),zc.forEach(t),Ja=p(On),Ft=s(On,"SPAN",{});var Cc=d(Ft);Ya=r(Cc,"SpeechEncoderDecoderModel"),Cc.forEach(t),On.forEach(t),xn=p(o),j=s(o,"DIV",{class:!0});var D=d(j);y(eo.$$.fragment,D),Za=p(D),ne=s(D,"P",{});var nt=d(ne);Ka=r(nt,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=s(nt,"A",{href:!0});var Fc=d(Bo);Qa=r(Fc,"from_pretrained()"),Fc.forEach(t),Xa=r(nt,` function and the decoder is loaded via
`),Ro=s(nt,"A",{href:!0});var Lc=d(Ro);es=r(Lc,"from_pretrained()"),Lc.forEach(t),os=r(nt,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),nt.forEach(t),ts=p(D),oo=s(D,"P",{});var Bn=d(oo);ns=r(Bn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),to=s(Bn,"A",{href:!0,rel:!0});var Nc=d(to);rs=r(Nc,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Nc.forEach(t),as=r(Bn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Bn.forEach(t),ss=p(D),no=s(D,"P",{});var Rn=d(no);ds=r(Rn,"Additionally, in "),ro=s(Rn,"A",{href:!0,rel:!0});var Vc=d(ro);cs=r(Vc,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Vc.forEach(t),is=r(Rn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Rn.forEach(t),ls=p(D),Lt=s(D,"P",{});var Wc=d(Lt);ps=r(Wc,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Wc.forEach(t),hs=p(D),ao=s(D,"P",{});var Hn=d(ao);ms=r(Hn,"This model inherits from "),Ho=s(Hn,"A",{href:!0});var Ic=d(Ho);fs=r(Ic,"PreTrainedModel"),Ic.forEach(t),us=r(Hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn.forEach(t),gs=p(D),so=s(D,"P",{});var Gn=d(so);_s=r(Gn,"This model is also a PyTorch "),co=s(Gn,"A",{href:!0,rel:!0});var Oc=d(co);vs=r(Oc,"torch.nn.Module"),Oc.forEach(t),bs=r(Gn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gn.forEach(t),ys=p(D),H=s(D,"P",{});var ko=d(H);Go=s(ko,"A",{href:!0});var Bc=d(Go);ws=r(Bc,"SpeechEncoderDecoderModel"),Bc.forEach(t),Es=r(ko,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Nt=s(ko,"EM",{});var Rc=d(Nt);ks=r(Rc,"~transformers.AutoModel.from_pretrained"),Rc.forEach(t),$s=r(ko,` class method for the encoder and
:meth`),Vt=s(ko,"EM",{});var Hc=d(Vt);Ss=r(Hc,"~transformers.AutoModelForCausalLM.from_pretrained"),Hc.forEach(t),xs=r(ko," class method for the decoder."),ko.forEach(t),js=p(D),N=s(D,"DIV",{class:!0});var Pe=d(N);y(io.$$.fragment,Pe),Ts=p(Pe),re=s(Pe,"P",{});var rt=d(re);Ms=r(rt,"The "),Uo=s(rt,"A",{href:!0});var Gc=d(Uo);Ds=r(Gc,"SpeechEncoderDecoderModel"),Gc.forEach(t),qs=r(rt," forward method, overrides the "),Wt=s(rt,"CODE",{});var Uc=d(Wt);Ps=r(Uc,"__call__"),Uc.forEach(t),zs=r(rt," special method."),rt.forEach(t),As=p(Pe),y(ke.$$.fragment,Pe),Cs=p(Pe),y($e.$$.fragment,Pe),Pe.forEach(t),Fs=p(D),V=s(D,"DIV",{class:!0});var ze=d(V);y(lo.$$.fragment,ze),Ls=p(ze),It=s(ze,"P",{});var Jc=d(It);Ns=r(Jc,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Jc.forEach(t),Vs=p(ze),ae=s(ze,"P",{});var at=d(ae);Ws=r(at,"The model is set in evaluation mode by default using "),Ot=s(at,"CODE",{});var Yc=d(Ot);Is=r(Yc,"model.eval()"),Yc.forEach(t),Os=r(at,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Bt=s(at,"CODE",{});var Zc=d(Bt);Bs=r(Zc,"model.train()"),Zc.forEach(t),Rs=r(at,"."),at.forEach(t),Hs=p(ze),y(Se.$$.fragment,ze),ze.forEach(t),D.forEach(t),jn=p(o),se=s(o,"H2",{class:!0});var Un=d(se);xe=s(Un,"A",{id:!0,class:!0,href:!0});var Kc=d(xe);Rt=s(Kc,"SPAN",{});var Qc=d(Rt);y(po.$$.fragment,Qc),Qc.forEach(t),Kc.forEach(t),Gs=p(Un),Ht=s(Un,"SPAN",{});var Xc=d(Ht);Us=r(Xc,"FlaxSpeechEncoderDecoderModel"),Xc.forEach(t),Un.forEach(t),Tn=p(o),T=s(o,"DIV",{class:!0});var q=d(T);y(ho.$$.fragment,q),Js=p(q),de=s(q,"P",{});var st=d(de);Ys=r(st,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Jo=s(st,"A",{href:!0});var ei=d(Jo);Zs=r(ei,"from_pretrained()"),ei.forEach(t),Ks=r(st,` function and the decoder is loaded via
`),Yo=s(st,"A",{href:!0});var oi=d(Yo);Qs=r(oi,"from_pretrained()"),oi.forEach(t),Xs=r(st,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),st.forEach(t),ed=p(q),mo=s(q,"P",{});var Jn=d(mo);od=r(Jn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),fo=s(Jn,"A",{href:!0,rel:!0});var ti=d(fo);td=r(ti,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ti.forEach(t),nd=r(Jn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Jn.forEach(t),rd=p(q),uo=s(q,"P",{});var Yn=d(uo);ad=r(Yn,"Additionally, in "),go=s(Yn,"A",{href:!0,rel:!0});var ni=d(go);sd=r(ni,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),ni.forEach(t),dd=r(Yn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Yn.forEach(t),cd=p(q),Gt=s(q,"P",{});var ri=d(Gt);id=r(ri,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ri.forEach(t),ld=p(q),_o=s(q,"P",{});var Zn=d(_o);pd=r(Zn,"This model inherits from "),Zo=s(Zn,"A",{href:!0});var ai=d(Zo);hd=r(ai,"FlaxPreTrainedModel"),ai.forEach(t),md=r(Zn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zn.forEach(t),fd=p(q),vo=s(q,"P",{});var Kn=d(vo);ud=r(Kn,`This model is also a Flax Linen
`),bo=s(Kn,"A",{href:!0,rel:!0});var si=d(bo);gd=r(si,"flax.nn.Module"),si.forEach(t),_d=r(Kn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kn.forEach(t),vd=p(q),G=s(q,"P",{});var $o=d(G);Ko=s($o,"A",{href:!0});var di=d(Ko);bd=r(di,"FlaxSpeechEncoderDecoderModel"),di.forEach(t),yd=r($o,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ut=s($o,"EM",{});var ci=d(Ut);wd=r(ci,"~transformers.FlaxAutoModel.from_pretrained"),ci.forEach(t),Ed=r($o,` class method for the
encoder and :meth`),Jt=s($o,"EM",{});var ii=d(Jt);kd=r(ii,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),ii.forEach(t),$d=r($o," class method for the decoder."),$o.forEach(t),Sd=p(q),W=s(q,"DIV",{class:!0});var Ae=d(W);y(yo.$$.fragment,Ae),xd=p(Ae),ce=s(Ae,"P",{});var dt=d(ce);jd=r(dt,"The "),Qo=s(dt,"A",{href:!0});var li=d(Qo);Td=r(li,"FlaxSpeechEncoderDecoderModel"),li.forEach(t),Md=r(dt," forward method, overrides the "),Yt=s(dt,"CODE",{});var pi=d(Yt);Dd=r(pi,"__call__"),pi.forEach(t),qd=r(dt," special method."),dt.forEach(t),Pd=p(Ae),y(je.$$.fragment,Ae),zd=p(Ae),y(Te.$$.fragment,Ae),Ae.forEach(t),Ad=p(q),U=s(q,"DIV",{class:!0});var ct=d(U);y(wo.$$.fragment,ct),Cd=p(ct),Zt=s(ct,"P",{});var hi=d(Zt);Fd=r(hi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),hi.forEach(t),Ld=p(ct),y(Me.$$.fragment,ct),ct.forEach(t),q.forEach(t),this.h()},h(){i(m,"name","hf:doc:metadata"),i(m,"content",JSON.stringify(ji)),i(f,"id","speech-encoder-decoder-models"),i(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(f,"href","#speech-encoder-decoder-models"),i(_,"class","relative group"),i(So,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(xo,"href","wav2vec2"),i(jo,"href","hubert"),i(Fe,"href","https://arxiv.org/abs/2104.06678"),i(Fe,"rel","nofollow"),i(To,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Mo,"href","speech_to_text_2"),i(pe,"id","randomly-initializing-speechencoderdecodermodel-from-model-configurations"),i(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(pe,"href","#randomly-initializing-speechencoderdecodermodel-from-model-configurations"),i(J,"class","relative group"),i(Do,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(qo,"href","/docs/transformers/pr_18271/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),i(he,"id","initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),i(Z,"class","relative group"),i(Po,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(zo,"href","wav2vec2"),i(Ao,"href","hubert"),i(Co,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(me,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),i(me,"rel","nofollow"),i(Fo,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained"),i(fe,"id","loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference"),i(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(fe,"href","#loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference"),i(K,"class","relative group"),i(Lo,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(ge,"id","training"),i(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ge,"href","#training"),i(Q,"class","relative group"),i(_e,"id","transformers.SpeechEncoderDecoderConfig"),i(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(_e,"href","#transformers.SpeechEncoderDecoderConfig"),i(X,"class","relative group"),i(No,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),i(Vo,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Wo,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),i(Io,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),i(Oo,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),i(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Ee,"id","transformers.SpeechEncoderDecoderModel"),i(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(Ee,"href","#transformers.SpeechEncoderDecoderModel"),i(te,"class","relative group"),i(Bo,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Ro,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(to,"href","https://arxiv.org/abs/1907.12461"),i(to,"rel","nofollow"),i(ro,"href","https://arxiv.org/abs/2104.06678"),i(ro,"rel","nofollow"),i(Ho,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel"),i(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(co,"rel","nofollow"),i(Go,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Uo,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(xe,"id","transformers.FlaxSpeechEncoderDecoderModel"),i(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(xe,"href","#transformers.FlaxSpeechEncoderDecoderModel"),i(se,"class","relative group"),i(Jo,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Yo,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(fo,"href","https://arxiv.org/abs/1907.12461"),i(fo,"rel","nofollow"),i(go,"href","https://arxiv.org/abs/2104.06678"),i(go,"rel","nofollow"),i(Zo,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel"),i(bo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),i(bo,"rel","nofollow"),i(Ko,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),i(Qo,"href","/docs/transformers/pr_18271/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),i(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,m),u(o,S,h),u(o,_,h),e(_,f),e(f,v),w(c,v,null),e(_,g),e(_,O),e(O,Qn),u(o,sn,h),u(o,A,h),e(A,Xn),e(A,So),e(So,er),e(A,or),e(A,it),e(it,tr),e(A,nr),e(A,xo),e(xo,rr),e(A,ar),e(A,jo),e(jo,sr),e(A,dr),u(o,dn,h),u(o,B,h),e(B,cr),e(B,lt),e(lt,ir),e(B,lr),e(B,Fe),e(Fe,pr),e(B,hr),u(o,cn,h),u(o,R,h),e(R,mr),e(R,To),e(To,fr),e(R,ur),e(R,Mo),e(Mo,gr),e(R,_r),u(o,ln,h),u(o,J,h),e(J,pe),e(pe,pt),w(Le,pt,null),e(J,vr),e(J,Ne),e(Ne,br),e(Ne,ht),e(ht,yr),e(Ne,wr),u(o,pn,h),u(o,Y,h),e(Y,Do),e(Do,Er),e(Y,kr),e(Y,qo),e(qo,$r),e(Y,Sr),u(o,hn,h),w(Ve,o,h),u(o,mn,h),u(o,Z,h),e(Z,he),e(he,mt),w(We,mt,null),e(Z,xr),e(Z,Ie),e(Ie,jr),e(Ie,ft),e(ft,Tr),e(Ie,Mr),u(o,fn,h),u(o,x,h),e(x,Po),e(Po,Dr),e(x,qr),e(x,ut),e(ut,Pr),e(x,zr),e(x,zo),e(zo,Ar),e(x,Cr),e(x,Ao),e(Ao,Fr),e(x,Lr),e(x,gt),e(gt,Nr),e(x,Vr),e(x,_t),e(_t,Wr),e(x,Ir),e(x,vt),e(vt,Or),e(x,Br),e(x,Co),e(Co,Rr),e(x,Hr),e(x,me),e(me,Gr),e(me,bt),e(bt,Ur),e(x,Jr),e(x,yt),e(yt,Yr),e(x,Zr),e(x,Fo),e(Fo,Kr),e(x,Qr),u(o,un,h),w(Oe,o,h),u(o,gn,h),u(o,K,h),e(K,fe),e(fe,wt),w(Be,wt,null),e(K,Xr),e(K,Re),e(Re,ea),e(Re,Et),e(Et,oa),e(Re,ta),u(o,_n,h),u(o,F,h),e(F,na),e(F,kt),e(kt,ra),e(F,aa),e(F,Lo),e(Lo,sa),e(F,da),e(F,$t),e($t,ca),e(F,ia),u(o,vn,h),u(o,ue,h),e(ue,la),e(ue,St),e(St,pa),e(ue,ha),u(o,bn,h),w(He,o,h),u(o,yn,h),u(o,Q,h),e(Q,ge),e(ge,xt),w(Ge,xt,null),e(Q,ma),e(Q,jt),e(jt,fa),u(o,wn,h),u(o,L,h),e(L,ua),e(L,Tt),e(Tt,ga),e(L,_a),e(L,Mt),e(Mt,va),e(L,ba),e(L,Dt),e(Dt,ya),e(L,wa),u(o,En,h),w(Ue,o,h),u(o,kn,h),u(o,X,h),e(X,_e),e(_e,qt),w(Je,qt,null),e(X,Ea),e(X,Pt),e(Pt,ka),u(o,$n,h),u(o,P,h),w(Ye,P,null),e(P,$a),e(P,ve),e(ve,No),e(No,Sa),e(ve,xa),e(ve,Vo),e(Vo,ja),e(ve,Ta),e(P,Ma),e(P,ee),e(ee,Da),e(ee,Wo),e(Wo,qa),e(ee,Pa),e(ee,Io),e(Io,za),e(ee,Aa),e(P,Ca),w(be,P,null),e(P,Fa),e(P,ye),w(Ze,ye,null),e(ye,La),e(ye,Ke),e(Ke,Na),e(Ke,Oo),e(Oo,Va),e(Ke,Wa),e(P,Ia),e(P,we),w(Qe,we,null),e(we,Oa),e(we,oe),e(oe,Ba),e(oe,zt),e(zt,Ra),e(oe,Ha),e(oe,At),e(At,Ga),e(oe,Ua),u(o,Sn,h),u(o,te,h),e(te,Ee),e(Ee,Ct),w(Xe,Ct,null),e(te,Ja),e(te,Ft),e(Ft,Ya),u(o,xn,h),u(o,j,h),w(eo,j,null),e(j,Za),e(j,ne),e(ne,Ka),e(ne,Bo),e(Bo,Qa),e(ne,Xa),e(ne,Ro),e(Ro,es),e(ne,os),e(j,ts),e(j,oo),e(oo,ns),e(oo,to),e(to,rs),e(oo,as),e(j,ss),e(j,no),e(no,ds),e(no,ro),e(ro,cs),e(no,is),e(j,ls),e(j,Lt),e(Lt,ps),e(j,hs),e(j,ao),e(ao,ms),e(ao,Ho),e(Ho,fs),e(ao,us),e(j,gs),e(j,so),e(so,_s),e(so,co),e(co,vs),e(so,bs),e(j,ys),e(j,H),e(H,Go),e(Go,ws),e(H,Es),e(H,Nt),e(Nt,ks),e(H,$s),e(H,Vt),e(Vt,Ss),e(H,xs),e(j,js),e(j,N),w(io,N,null),e(N,Ts),e(N,re),e(re,Ms),e(re,Uo),e(Uo,Ds),e(re,qs),e(re,Wt),e(Wt,Ps),e(re,zs),e(N,As),w(ke,N,null),e(N,Cs),w($e,N,null),e(j,Fs),e(j,V),w(lo,V,null),e(V,Ls),e(V,It),e(It,Ns),e(V,Vs),e(V,ae),e(ae,Ws),e(ae,Ot),e(Ot,Is),e(ae,Os),e(ae,Bt),e(Bt,Bs),e(ae,Rs),e(V,Hs),w(Se,V,null),u(o,jn,h),u(o,se,h),e(se,xe),e(xe,Rt),w(po,Rt,null),e(se,Gs),e(se,Ht),e(Ht,Us),u(o,Tn,h),u(o,T,h),w(ho,T,null),e(T,Js),e(T,de),e(de,Ys),e(de,Jo),e(Jo,Zs),e(de,Ks),e(de,Yo),e(Yo,Qs),e(de,Xs),e(T,ed),e(T,mo),e(mo,od),e(mo,fo),e(fo,td),e(mo,nd),e(T,rd),e(T,uo),e(uo,ad),e(uo,go),e(go,sd),e(uo,dd),e(T,cd),e(T,Gt),e(Gt,id),e(T,ld),e(T,_o),e(_o,pd),e(_o,Zo),e(Zo,hd),e(_o,md),e(T,fd),e(T,vo),e(vo,ud),e(vo,bo),e(bo,gd),e(vo,_d),e(T,vd),e(T,G),e(G,Ko),e(Ko,bd),e(G,yd),e(G,Ut),e(Ut,wd),e(G,Ed),e(G,Jt),e(Jt,kd),e(G,$d),e(T,Sd),e(T,W),w(yo,W,null),e(W,xd),e(W,ce),e(ce,jd),e(ce,Qo),e(Qo,Td),e(ce,Md),e(ce,Yt),e(Yt,Dd),e(ce,qd),e(W,Pd),w(je,W,null),e(W,zd),w(Te,W,null),e(T,Ad),e(T,U),w(wo,U,null),e(U,Cd),e(U,Zt),e(Zt,Fd),e(U,Ld),w(Me,U,null),Mn=!0},p(o,[h]){const Eo={};h&2&&(Eo.$$scope={dirty:h,ctx:o}),be.$set(Eo);const Kt={};h&2&&(Kt.$$scope={dirty:h,ctx:o}),ke.$set(Kt);const Qt={};h&2&&(Qt.$$scope={dirty:h,ctx:o}),$e.$set(Qt);const Xt={};h&2&&(Xt.$$scope={dirty:h,ctx:o}),Se.$set(Xt);const C={};h&2&&(C.$$scope={dirty:h,ctx:o}),je.$set(C);const en={};h&2&&(en.$$scope={dirty:h,ctx:o}),Te.$set(en);const on={};h&2&&(on.$$scope={dirty:h,ctx:o}),Me.$set(on)},i(o){Mn||(E(c.$$.fragment,o),E(Le.$$.fragment,o),E(Ve.$$.fragment,o),E(We.$$.fragment,o),E(Oe.$$.fragment,o),E(Be.$$.fragment,o),E(He.$$.fragment,o),E(Ge.$$.fragment,o),E(Ue.$$.fragment,o),E(Je.$$.fragment,o),E(Ye.$$.fragment,o),E(be.$$.fragment,o),E(Ze.$$.fragment,o),E(Qe.$$.fragment,o),E(Xe.$$.fragment,o),E(eo.$$.fragment,o),E(io.$$.fragment,o),E(ke.$$.fragment,o),E($e.$$.fragment,o),E(lo.$$.fragment,o),E(Se.$$.fragment,o),E(po.$$.fragment,o),E(ho.$$.fragment,o),E(yo.$$.fragment,o),E(je.$$.fragment,o),E(Te.$$.fragment,o),E(wo.$$.fragment,o),E(Me.$$.fragment,o),Mn=!0)},o(o){k(c.$$.fragment,o),k(Le.$$.fragment,o),k(Ve.$$.fragment,o),k(We.$$.fragment,o),k(Oe.$$.fragment,o),k(Be.$$.fragment,o),k(He.$$.fragment,o),k(Ge.$$.fragment,o),k(Ue.$$.fragment,o),k(Je.$$.fragment,o),k(Ye.$$.fragment,o),k(be.$$.fragment,o),k(Ze.$$.fragment,o),k(Qe.$$.fragment,o),k(Xe.$$.fragment,o),k(eo.$$.fragment,o),k(io.$$.fragment,o),k(ke.$$.fragment,o),k($e.$$.fragment,o),k(lo.$$.fragment,o),k(Se.$$.fragment,o),k(po.$$.fragment,o),k(ho.$$.fragment,o),k(yo.$$.fragment,o),k(je.$$.fragment,o),k(Te.$$.fragment,o),k(wo.$$.fragment,o),k(Me.$$.fragment,o),Mn=!1},d(o){t(m),o&&t(S),o&&t(_),$(c),o&&t(sn),o&&t(A),o&&t(dn),o&&t(B),o&&t(cn),o&&t(R),o&&t(ln),o&&t(J),$(Le),o&&t(pn),o&&t(Y),o&&t(hn),$(Ve,o),o&&t(mn),o&&t(Z),$(We),o&&t(fn),o&&t(x),o&&t(un),$(Oe,o),o&&t(gn),o&&t(K),$(Be),o&&t(_n),o&&t(F),o&&t(vn),o&&t(ue),o&&t(bn),$(He,o),o&&t(yn),o&&t(Q),$(Ge),o&&t(wn),o&&t(L),o&&t(En),$(Ue,o),o&&t(kn),o&&t(X),$(Je),o&&t($n),o&&t(P),$(Ye),$(be),$(Ze),$(Qe),o&&t(Sn),o&&t(te),$(Xe),o&&t(xn),o&&t(j),$(eo),$(io),$(ke),$($e),$(lo),$(Se),o&&t(jn),o&&t(se),$(po),o&&t(Tn),o&&t(T),$(ho),$(yo),$(je),$(Te),$(wo),$(Me)}}}const ji={local:"speech-encoder-decoder-models",sections:[{local:"randomly-initializing-speechencoderdecodermodel-from-model-configurations",title:"Randomly initializing `SpeechEncoderDecoderModel` from model configurations."},{local:"initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `SpeechEncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `SpeechEncoderDecoderModel` checkpoint and perform inference."},{local:"training",title:"Training"},{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"},{local:"transformers.FlaxSpeechEncoderDecoderModel",title:"FlaxSpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function Ti(z){return vi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ci extends fi{constructor(m){super();ui(this,m,Ti,xi,gi,{})}}export{Ci as default,ji as metadata};
