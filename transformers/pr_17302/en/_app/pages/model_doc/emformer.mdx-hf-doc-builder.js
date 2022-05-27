import{S as sl,i as il,s as ll,e as o,k as d,w as v,t as s,M as dl,c as n,d as r,m,a,x as b,h as i,b as l,G as e,g,y as E,q as k,o as y,B as w,v as ml,L as Do}from"../../chunks/vendor-hf-doc-builder.js";import{T as Js}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ro}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Io}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function cl(q){let f,T,h,u,$;return u=new Ro({props:{code:`from transformers import EmformerModel, EmformerConfig

# Initializing a Emformer anton-l/emformer-base-librispeech style configuration
configuration = EmformerConfig()

# Initializing a model from the anton-l/emformer-base-librispeech style configuration
model = EmformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EmformerModel, EmformerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Emformer anton-l/emformer-base-librispeech style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = EmformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the anton-l/emformer-base-librispeech style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EmformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){f=o("p"),T=s("Example:"),h=d(),v(u.$$.fragment)},l(c){f=n(c,"P",{});var _=a(f);T=i(_,"Example:"),_.forEach(r),h=m(c),b(u.$$.fragment,c)},m(c,_){g(c,f,_),e(f,T),g(c,h,_),E(u,c,_),$=!0},p:Do,i(c){$||(k(u.$$.fragment,c),$=!0)},o(c){y(u.$$.fragment,c),$=!1},d(c){c&&r(f),c&&r(h),w(u,c)}}}function fl(q){let f,T,h,u,$,c,_,N;return{c(){f=o("p"),T=s("This class method is simply calling "),h=o("a"),u=s("save_pretrained()"),$=s(` and
`),c=o("code"),_=s("save_pretrained"),N=s(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(X){f=n(X,"P",{});var S=a(f);T=i(S,"This class method is simply calling "),h=n(S,"A",{href:!0});var R=a(h);u=i(R,"save_pretrained()"),R.forEach(r),$=i(S,` and
`),c=n(S,"CODE",{});var O=a(c);_=i(O,"save_pretrained"),O.forEach(r),N=i(S,`. Please refer to the docstrings of the methods
above for more information.`),S.forEach(r),this.h()},h(){l(h,"href","/docs/transformers/pr_17302/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(X,S){g(X,f,S),e(f,T),e(f,h),e(h,u),e(f,$),e(f,c),e(c,_),e(f,N)},d(X){X&&r(f)}}}function pl(q){let f,T,h,u,$;return{c(){f=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=o("code"),u=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){f=n(c,"P",{});var _=a(f);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n(_,"CODE",{});var N=a(h);u=i(N,"Module"),N.forEach(r),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(r)},m(c,_){g(c,f,_),e(f,T),e(f,h),e(h,u),e(f,$)},d(c){c&&r(f)}}}function hl(q){let f,T,h,u,$;return u=new Ro({props:{code:`from transformers import EmformerProcessor, EmformerModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = EmformerProcessor.from_pretrained("anton-l/emformer-base-librispeech")
model = EmformerModel.from_pretrained("anton-l/emformer-base-librispeech")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EmformerProcessor, EmformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = EmformerProcessor.from_pretrained(<span class="hljs-string">&quot;anton-l/emformer-base-librispeech&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EmformerModel.from_pretrained(<span class="hljs-string">&quot;anton-l/emformer-base-librispeech&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){f=o("p"),T=s("Example:"),h=d(),v(u.$$.fragment)},l(c){f=n(c,"P",{});var _=a(f);T=i(_,"Example:"),_.forEach(r),h=m(c),b(u.$$.fragment,c)},m(c,_){g(c,f,_),e(f,T),g(c,h,_),E(u,c,_),$=!0},p:Do,i(c){$||(k(u.$$.fragment,c),$=!0)},o(c){y(u.$$.fragment,c),$=!1},d(c){c&&r(f),c&&r(h),w(u,c)}}}function ul(q){let f,T,h,u,$;return{c(){f=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=o("code"),u=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){f=n(c,"P",{});var _=a(f);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n(_,"CODE",{});var N=a(h);u=i(N,"Module"),N.forEach(r),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(r)},m(c,_){g(c,f,_),e(f,T),e(f,h),e(h,u),e(f,$)},d(c){c&&r(f)}}}function gl(q){let f,T,h,u,$;return u=new Ro({props:{code:`from transformers import EmformerProcessor, EmformerForRNNT
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = EmformerProcessor.from_pretrained("anton-l/emformer-base-librispeech")
model = EmformerForRNNT.from_pretrained("anton-l/emformer-base-librispeech")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EmformerProcessor, EmformerForRNNT
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = EmformerProcessor.from_pretrained(<span class="hljs-string">&quot;anton-l/emformer-base-librispeech&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EmformerForRNNT.from_pretrained(<span class="hljs-string">&quot;anton-l/emformer-base-librispeech&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){f=o("p"),T=s("Example:"),h=d(),v(u.$$.fragment)},l(c){f=n(c,"P",{});var _=a(f);T=i(_,"Example:"),_.forEach(r),h=m(c),b(u.$$.fragment,c)},m(c,_){g(c,f,_),e(f,T),g(c,h,_),E(u,c,_),$=!0},p:Do,i(c){$||(k(u.$$.fragment,c),$=!0)},o(c){y(u.$$.fragment,c),$=!1},d(c){c&&r(f),c&&r(h),w(u,c)}}}function _l(q){let f,T;return f=new Ro({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">53.48</span>`}}),{c(){v(f.$$.fragment)},l(h){b(f.$$.fragment,h)},m(h,u){E(f,h,u),T=!0},p:Do,i(h){T||(k(f.$$.fragment,h),T=!0)},o(h){y(f.$$.fragment,h),T=!1},d(h){w(f,h)}}}function vl(q){let f,T,h,u,$,c,_,N,X,S,R,O,hr,Se,Wo,ur,Oo,Yr,de,Uo,Ie,Vo,Bo,Hr,St,Yo,Jr,It,Ho,Gr,Y,Jo,De,Go,Zo,Re,Qo,Xo,Zr,K,me,gr,We,Ko,_r,en,Qr,I,Oe,tn,ee,rn,Dt,on,nn,Ue,an,sn,ln,te,dn,Rt,mn,cn,Wt,fn,pn,hn,ce,Xr,re,fe,vr,Ve,un,br,gn,Kr,F,Be,_n,Ye,vn,He,bn,En,kn,Je,yn,Ot,wn,Tn,$n,pe,Ge,xn,Er,zn,Pn,Ut,Ze,Fn,H,Qe,qn,kr,Nn,Mn,Xe,jn,yr,Cn,Ln,An,he,Ke,Sn,wr,In,eo,oe,ue,Tr,et,Dn,$r,Rn,to,D,tt,Wn,xr,On,Un,rt,Vn,Vt,Bn,Yn,Hn,ge,ot,Jn,zr,Gn,ro,ne,_e,Pr,nt,Zn,Fr,Qn,oo,x,at,Xn,qr,Kn,ea,C,Bt,ta,ra,Yt,oa,na,Ht,aa,sa,st,Nr,ia,la,da,Jt,ma,ca,fa,ve,it,pa,U,ha,lt,Mr,ua,ga,_a,Gt,va,ba,dt,jr,Ea,ka,ya,wa,be,mt,Ta,V,$a,Zt,xa,za,Qt,Pa,Fa,Xt,qa,Na,Ma,Kt,ct,ja,J,ft,Ca,pt,La,er,Aa,Sa,Ia,Ee,Da,ke,ht,Ra,ut,Wa,tr,Oa,Ua,Va,ye,gt,Ba,_t,Ya,rr,Ha,Ja,Ga,we,vt,Za,Cr,Qa,no,ae,Te,Lr,bt,Xa,Ar,Ka,ao,M,Et,es,kt,ts,yt,rs,os,ns,wt,as,or,ss,is,ls,Tt,ds,$t,ms,cs,fs,W,xt,ps,se,hs,nr,us,gs,Sr,_s,vs,bs,$e,Es,xe,so,ie,ze,Ir,zt,ks,Dr,ys,io,j,Pt,ws,Ft,Ts,qt,$s,xs,zs,Nt,Ps,ar,Fs,qs,Ns,Mt,Ms,jt,js,Cs,Ls,L,Ct,As,le,Ss,sr,Is,Ds,Rr,Rs,Ws,Os,Pe,Us,Fe,Vs,qe,lo;return c=new Ae({}),Se=new Ae({}),We=new Ae({}),Oe=new P({props:{name:"class transformers.EmformerConfig",anchor:"transformers.EmformerConfig",parameters:[{name:"vocab_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 20"},{name:"num_attention_heads",val:" = 8"},{name:"intermediate_size",val:" = 2048"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"blank_token_id",val:" = 4096"},{name:"pad_token_id",val:" = 1"},{name:"input_dim",val:" = 80"},{name:"time_reduction_input_dim",val:" = 128"},{name:"time_reduction_stride",val:" = 4"},{name:"left_context_length",val:" = 30"},{name:"right_context_length",val:" = 4"},{name:"segment_length",val:" = 16"},{name:"output_dim",val:" = 1024"},{name:"token_embedding_dim",val:" = 512"},{name:"num_lstm_layers",val:" = 3"},{name:"lstm_hidden_dim",val:" = 512"},{name:"lstm_layer_norm_epsilon",val:" = 0.001"},{name:"lstm_dropout",val:" = 0.3"},{name:"joiner_activation",val:" = 'relu'"},{name:"max_output_length",val:" = 128"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Vocabulary size of the Emformer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerModel">EmformerModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerModel">EmformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.EmformerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.EmformerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.EmformerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.EmformerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.EmformerConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.EmformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.EmformerConfig.blank_token_id",description:`<strong>blank_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The ID of a blank token used in RNN-T decoding.`,name:"blank_token_id"},{anchor:"transformers.EmformerConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The ID of a padding token used to pad <a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerForRNNT">EmformerForRNNT</a> outputs.`,name:"pad_token_id"},{anchor:"transformers.EmformerConfig.input_dim",description:`<strong>input_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
The feature dimension of input features (Mel spectrogram).`,name:"input_dim"},{anchor:"transformers.EmformerConfig.time_reduction_input_dim",description:`<strong>time_reduction_input_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The dimension that the input features are projected to before time shuffling.`,name:"time_reduction_input_dim"},{anchor:"transformers.EmformerConfig.time_reduction_stride",description:`<strong>time_reduction_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The stride of <code>EmformerTimeReduction</code> used to compress input features into fewer frames.`,name:"time_reduction_stride"},{anchor:"transformers.EmformerConfig.left_context_length",description:`<strong>left_context_length</strong> (<code>int</code>, <em>optional</em>, defaults to 30) &#x2014;
The length of Emformer attention context on the left.`,name:"left_context_length"},{anchor:"transformers.EmformerConfig.right_context_length",description:`<strong>right_context_length</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The length of Emformer attention context on the right.`,name:"right_context_length"},{anchor:"transformers.EmformerConfig.segment_length",description:`<strong>segment_length</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The length of Emformer attention segments.`,name:"segment_length"},{anchor:"transformers.EmformerConfig.output_dim",description:`<strong>output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The dimension that the Transformer output features are projected to.`,name:"output_dim"},{anchor:"transformers.EmformerConfig.token_embedding_dim",description:`<strong>token_embedding_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The dimensionality of RNN-T token embeddings.`,name:"token_embedding_dim"},{anchor:"transformers.EmformerConfig.num_lstm_layers",description:`<strong>num_lstm_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of LSTM layers in the RNN-T predictor.`,name:"num_lstm_layers"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/configuration_emformer.py#L30"}}),ce=new Io({props:{anchor:"transformers.EmformerConfig.example",$$slots:{default:[cl]},$$scope:{ctx:q}}}),Ve=new Ae({}),Be=new P({props:{name:"class transformers.EmformerTokenizer",anchor:"transformers.EmformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.EmformerTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.EmformerTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.EmformerTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.EmformerTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.EmformerTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/tokenization_emformer.py#L39"}}),Ge=new P({props:{name:"__call__",anchor:"transformers.EmformerTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.EmformerTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.EmformerTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.EmformerTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17302/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.EmformerTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17302/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.EmformerTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.EmformerTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.EmformerTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.EmformerTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.EmformerTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17302/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.EmformerTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.EmformerTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.EmformerTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.EmformerTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.EmformerTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.EmformerTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.EmformerTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/tokenization_utils_base.py#L2393",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Ze=new P({props:{name:"save_vocabulary",anchor:"transformers.EmformerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/tokenization_emformer.py#L150"}}),Qe=new P({props:{name:"decode",anchor:"transformers.EmformerTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.EmformerTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.EmformerTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.EmformerTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/tokenization_utils_base.py#L3300",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ke=new P({props:{name:"batch_decode",anchor:"transformers.EmformerTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.EmformerTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.EmformerTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.EmformerTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/tokenization_utils_base.py#L3267",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),et=new Ae({}),tt=new P({props:{name:"class transformers.EmformerFeatureExtractor",anchor:"transformers.EmformerFeatureExtractor",parameters:[{name:"sampling_rate",val:" = 16000"},{name:"n_fft",val:" = 400"},{name:"n_mels",val:" = 80"},{name:"hop_length",val:" = 160"},{name:"global_mean",val:" = None"},{name:"global_invstddev",val:" = None"},{name:"feature_size",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in samples per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.EmformerFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of FFT, creates <code>n_fft // 2 + 1</code> bins.`,name:"n_fft"},{anchor:"transformers.EmformerFeatureExtractor.n_mels",description:`<strong>n_mels</strong> (<code>int</code>, defaults to 128) &#x2014;
Number of mel filterbanks.`,name:"n_mels"},{anchor:"transformers.EmformerFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 200) &#x2014;
Length of hop between STFT windows.`,name:"hop_length"},{anchor:"transformers.EmformerFeatureExtractor.global_mean",description:`<strong>global_mean</strong> (<code>List[float]</code>) &#x2014;
The <code>mean</code> statistics of the training dataset.`,name:"global_mean"},{anchor:"transformers.EmformerFeatureExtractor.global_invstddev",description:`<strong>global_invstddev</strong> (<code>List[float]</code>) &#x2014;
The <code>invstddev</code> (inverse standard deviation) statistics of the training dataset.`,name:"global_invstddev"},{anchor:"transformers.EmformerFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of mel filterbanks.`,name:"feature_size"},{anchor:"transformers.EmformerFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/feature_extraction_emformer.py#L42"}}),ot=new P({props:{name:"__call__",anchor:"transformers.EmformerFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.EmformerFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17302/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.EmformerFeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.EmformerFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.EmformerFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.EmformerFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For Speech2TextTransoformer models, <code>attention_mask</code> should alwys be passed for batched inference, to
avoid subtle bugs.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.EmformerFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17302/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.EmformerFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.EmformerFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/feature_extraction_emformer.py#L113"}}),nt=new Ae({}),at=new P({props:{name:"class transformers.EmformerProcessor",anchor:"transformers.EmformerProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.EmformerProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>EmformerFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerFeatureExtractor">EmformerFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.EmformerProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/processing_emformer.py#L26"}}),it=new P({props:{name:"__call__",anchor:"transformers.EmformerProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/processing_emformer.py#L66"}}),mt=new P({props:{name:"pad",anchor:"transformers.EmformerProcessor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/processing_emformer.py#L75"}}),ct=new P({props:{name:"from_pretrained",anchor:"transformers.EmformerProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/processing_emformer.py#L47"}}),ft=new P({props:{name:"save_pretrained",anchor:"transformers.EmformerProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EmformerProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.EmformerProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_17302/en/main_classes/processors#transformers.ProcessorMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/processing_utils.py#L94"}}),Ee=new Js({props:{$$slots:{default:[fl]},$$scope:{ctx:q}}}),ht=new P({props:{name:"batch_decode",anchor:"transformers.EmformerProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/processing_emformer.py#L84"}}),gt=new P({props:{name:"decode",anchor:"transformers.EmformerProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/processing_emformer.py#L91"}}),vt=new P({props:{name:"as_target_processor",anchor:"transformers.EmformerProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/processing_emformer.py#L98"}}),bt=new Ae({}),Et=new P({props:{name:"class transformers.EmformerModel",anchor:"transformers.EmformerModel",parameters:[{name:"config",val:": EmformerConfig"}],parametersDescription:[{anchor:"transformers.EmformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerConfig">EmformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/modeling_emformer.py#L752"}}),xt=new P({props:{name:"forward",anchor:"transformers.EmformerModel.forward",parameters:[{name:"input_features",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EmformerModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. To convert the waveform array into
<code>input_features</code>, the <a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerFeatureExtractor">EmformerFeatureExtractor</a> should be used for extracting the Mel spectrogram
features, padding and conversion into a tensor of type <code>torch.FloatTensor</code>. See
<a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.EmformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/anton-l/emformer-base-librispeech" rel="nofollow">emformer-base</a>, <code>attention_mask</code> should <strong>not</strong>
be passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.EmformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EmformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EmformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17302/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/modeling_emformer.py#L786",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17302/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerConfig"
>EmformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17302/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new Js({props:{$$slots:{default:[pl]},$$scope:{ctx:q}}}),xe=new Io({props:{anchor:"transformers.EmformerModel.forward.example",$$slots:{default:[hl]},$$scope:{ctx:q}}}),zt=new Ae({}),Pt=new P({props:{name:"class transformers.EmformerForRNNT",anchor:"transformers.EmformerForRNNT",parameters:[{name:"config",val:": EmformerConfig"}],parametersDescription:[{anchor:"transformers.EmformerForRNNT.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerConfig">EmformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/modeling_emformer.py#L1011"}}),Ct=new P({props:{name:"forward",anchor:"transformers.EmformerForRNNT.forward",parameters:[{name:"input_features",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.EmformerForRNNT.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. To convert the waveform array into
<code>input_features</code>, the <a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerFeatureExtractor">EmformerFeatureExtractor</a> should be used for extracting the Mel spectrogram
features, padding and conversion into a tensor of type <code>torch.FloatTensor</code>. See
<a href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.EmformerForRNNT.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/anton-l/emformer-base-librispeech" rel="nofollow">emformer-base</a>, <code>attention_mask</code> should <strong>not</strong>
be passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.EmformerForRNNT.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EmformerForRNNT.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EmformerForRNNT.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17302/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EmformerForRNNT.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17302/src/transformers/models/emformer/modeling_emformer.py#L1095",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17302/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerConfig"
>EmformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17302/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new Js({props:{$$slots:{default:[ul]},$$scope:{ctx:q}}}),Fe=new Io({props:{anchor:"transformers.EmformerForRNNT.forward.example",$$slots:{default:[gl]},$$scope:{ctx:q}}}),qe=new Io({props:{anchor:"transformers.EmformerForRNNT.forward.example-2",$$slots:{default:[_l]},$$scope:{ctx:q}}}),{c(){f=o("meta"),T=d(),h=o("h1"),u=o("a"),$=o("span"),v(c.$$.fragment),_=d(),N=o("span"),X=s("Emformer"),S=d(),R=o("h2"),O=o("a"),hr=o("span"),v(Se.$$.fragment),Wo=d(),ur=o("span"),Oo=s("Overview"),Yr=d(),de=o("p"),Uo=s("The Emformer model was proposed in "),Ie=o("a"),Vo=s(`Emformer: Efficient Memory Transformer Based Acoustic Model For Low Latency
Streaming Speech Recognition`),Bo=s(` by Yangyang Shi, Yongqiang Wang, Chunyang Wu,
Ching-Feng Yeh, Julian Chan, Frank Zhang, Duc Le, Mike Seltzer.`),Hr=d(),St=o("p"),Yo=s("The abstract from the paper is the following:"),Jr=d(),It=o("p"),Ho=s(`This paper proposes an efficient memory transformer Emformer for low latency streaming speech recognition. In Emformer,
the long-range history context is distilled into an augmented memory bank to reduce self-attention\u2019s computation
complexity. A cache mechanism saves the computation for the key and value in self-attention for the left context.
Emformer applies a parallelized block processing in training to support low latency models. We carry out experiments
on benchmark LibriSpeech data. Under average latency of 960 ms, Emformer gets WER 2.50% on test-clean and 5.62% on
test-other. Comparing with a strong baseline augmented memory transformer (AM-TRF), Emformer gets 4.6 folds training
speedup and 18% relative real-time factor (RTF) reduction in decoding with relative WER reduction 17% on test-clean
and 9% on test-other. For a low latency scenario with an average latency of 80 ms, Emformer achieves WER 3.01% on
test-clean and 7.09% on test-other. Comparing with the LSTM baseline with the same latency and model size, Emformer
gets relative WER reduction 9% and 16% on test-clean and test-other, respectively.`),Gr=d(),Y=o("p"),Jo=s("This model was contributed by "),De=o("a"),Go=s("@anton-l"),Zo=s(`.
The original code can be found `),Re=o("a"),Qo=s("here"),Xo=s("."),Zr=d(),K=o("h2"),me=o("a"),gr=o("span"),v(We.$$.fragment),Ko=d(),_r=o("span"),en=s("EmformerConfig"),Qr=d(),I=o("div"),v(Oe.$$.fragment),tn=d(),ee=o("p"),rn=s("This is the configuration class to store the configuration of a "),Dt=o("a"),on=s("EmformerModel"),nn=s(`. It is used to instantiate an
Emformer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Emformer
`),Ue=o("a"),an=s("anton-l/emformer-base-librispeech"),sn=s(" architecture."),ln=d(),te=o("p"),dn=s("Configuration objects inherit from "),Rt=o("a"),mn=s("PretrainedConfig"),cn=s(` and can be used to control the model outputs. Read the
documentation from `),Wt=o("a"),fn=s("PretrainedConfig"),pn=s(" for more information."),hn=d(),v(ce.$$.fragment),Xr=d(),re=o("h2"),fe=o("a"),vr=o("span"),v(Ve.$$.fragment),un=d(),br=o("span"),gn=s("EmformerTokenizer"),Kr=d(),F=o("div"),v(Be.$$.fragment),_n=d(),Ye=o("p"),vn=s("Construct an Emformer tokenizer. Based on "),He=o("a"),bn=s("SentencePiece"),En=s("."),kn=d(),Je=o("p"),yn=s("This tokenizer inherits from "),Ot=o("a"),wn=s("PreTrainedTokenizer"),Tn=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$n=d(),pe=o("div"),v(Ge.$$.fragment),xn=d(),Er=o("p"),zn=s(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Pn=d(),Ut=o("div"),v(Ze.$$.fragment),Fn=d(),H=o("div"),v(Qe.$$.fragment),qn=d(),kr=o("p"),Nn=s(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Mn=d(),Xe=o("p"),jn=s("Similar to doing "),yr=o("code"),Cn=s("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Ln=s("."),An=d(),he=o("div"),v(Ke.$$.fragment),Sn=d(),wr=o("p"),In=s("Convert a list of lists of token ids into a list of strings by calling decode."),eo=d(),oe=o("h2"),ue=o("a"),Tr=o("span"),v(et.$$.fragment),Dn=d(),$r=o("span"),Rn=s("Wav2Vec2FeatureExtractor"),to=d(),D=o("div"),v(tt.$$.fragment),Wn=d(),xr=o("p"),On=s("Constructs an Emformer feature extractor."),Un=d(),rt=o("p"),Vn=s("This feature extractor inherits from "),Vt=o("a"),Bn=s("SequenceFeatureExtractor"),Yn=s(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Hn=d(),ge=o("div"),v(ot.$$.fragment),Jn=d(),zr=o("p"),Gn=s("Main method to featurize and prepare for the model one or several sequence(s). sequences."),ro=d(),ne=o("h2"),_e=o("a"),Pr=o("span"),v(nt.$$.fragment),Zn=d(),Fr=o("span"),Qn=s("EmformerProcessor"),oo=d(),x=o("div"),v(at.$$.fragment),Xn=d(),qr=o("p"),Kn=s(`Constructs an Emformer processor which wraps an Emformer feature extractor and an Emformer target tokenizer into a
single processor.`),ea=d(),C=o("p"),Bt=o("a"),ta=s("EmformerProcessor"),ra=s(" offers all the functionalities of "),Yt=o("a"),oa=s("EmformerFeatureExtractor"),na=s(" and "),Ht=o("a"),aa=s("PreTrainedTokenizer"),sa=s(`.
See the docstring of `),st=o("a"),Nr=o("strong"),ia=s("call"),la=s("()"),da=s(" and "),Jt=o("a"),ma=s("decode()"),ca=s(" for more information."),fa=d(),ve=o("div"),v(it.$$.fragment),pa=d(),U=o("p"),ha=s(`When used in normal mode, this method forwards all its arguments to EmformerFeatureExtractor\u2019s
`),lt=o("a"),Mr=o("strong"),ua=s("call"),ga=s("()"),_a=s(` and returns its output. If used in the context
`),Gt=o("a"),va=s("as_target_processor()"),ba=s(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),dt=o("a"),jr=o("strong"),Ea=s("call"),ka=s("()"),ya=s(". Please refer to the docstring of the above two methods for more information."),wa=d(),be=o("div"),v(mt.$$.fragment),Ta=d(),V=o("p"),$a=s(`When used in normal mode, this method forwards all its arguments to EmformerFeatureExtractor\u2019s
`),Zt=o("a"),xa=s("pad()"),za=s(` and returns its output. If used in the context
`),Qt=o("a"),Pa=s("as_target_processor()"),Fa=s(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Xt=o("a"),qa=s("pad()"),Na=s(". Please refer to the docstring of the above two methods for more information."),Ma=d(),Kt=o("div"),v(ct.$$.fragment),ja=d(),J=o("div"),v(ft.$$.fragment),Ca=d(),pt=o("p"),La=s(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),er=o("a"),Aa=s("from_pretrained()"),Sa=s(" method."),Ia=d(),v(Ee.$$.fragment),Da=d(),ke=o("div"),v(ht.$$.fragment),Ra=d(),ut=o("p"),Wa=s("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),tr=o("a"),Oa=s("batch_decode()"),Ua=s(`. Please
refer to the docstring of this method for more information.`),Va=d(),ye=o("div"),v(gt.$$.fragment),Ba=d(),_t=o("p"),Ya=s("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),rr=o("a"),Ha=s("decode()"),Ja=s(`. Please refer
to the docstring of this method for more information.`),Ga=d(),we=o("div"),v(vt.$$.fragment),Za=d(),Cr=o("p"),Qa=s(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Emformer.`),no=d(),ae=o("h2"),Te=o("a"),Lr=o("span"),v(bt.$$.fragment),Xa=d(),Ar=o("span"),Ka=s("EmformerModel"),ao=d(),M=o("div"),v(Et.$$.fragment),es=d(),kt=o("p"),ts=s(`The bare Emformer Model transformer outputting raw hidden-states without any specific head on top.
Emformer was proposed in `),yt=o("a"),rs=s(`Emformer: Efficient Memory Transformer Based Acoustic Model For Low Latency Streaming
Speech Recognition`),os=s(` by Yangyang Shi, Yongqiang Wang, Chunyang Wu, Ching-Feng Yeh,
Julian Chan, Frank Zhang, Duc Le, Mike Seltzer.`),ns=d(),wt=o("p"),as=s("This model inherits from "),or=o("a"),ss=s("PreTrainedModel"),is=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ls=d(),Tt=o("p"),ds=s("This model is a PyTorch "),$t=o("a"),ms=s("torch.nn.Module"),cs=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs=d(),W=o("div"),v(xt.$$.fragment),ps=d(),se=o("p"),hs=s("The "),nr=o("a"),us=s("EmformerModel"),gs=s(" forward method, overrides the "),Sr=o("code"),_s=s("__call__"),vs=s(" special method."),bs=d(),v($e.$$.fragment),Es=d(),v(xe.$$.fragment),so=d(),ie=o("h2"),ze=o("a"),Ir=o("span"),v(zt.$$.fragment),ks=d(),Dr=o("span"),ys=s("EmformerForRNNT"),io=d(),j=o("div"),v(Pt.$$.fragment),ws=d(),Ft=o("p"),Ts=s(`Emformer Model with an RNN-Transducer decoder.
Emformer was proposed in `),qt=o("a"),$s=s(`Emformer: Efficient Memory Transformer Based Acoustic Model For Low Latency Streaming
Speech Recognition`),xs=s(` by Yangyang Shi, Yongqiang Wang, Chunyang Wu, Ching-Feng Yeh,
Julian Chan, Frank Zhang, Duc Le, Mike Seltzer.`),zs=d(),Nt=o("p"),Ps=s("This model inherits from "),ar=o("a"),Fs=s("PreTrainedModel"),qs=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ns=d(),Mt=o("p"),Ms=s("This model is a PyTorch "),jt=o("a"),js=s("torch.nn.Module"),Cs=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls=d(),L=o("div"),v(Ct.$$.fragment),As=d(),le=o("p"),Ss=s("The "),sr=o("a"),Is=s("EmformerForRNNT"),Ds=s(" forward method, overrides the "),Rr=o("code"),Rs=s("__call__"),Ws=s(" special method."),Os=d(),v(Pe.$$.fragment),Us=d(),v(Fe.$$.fragment),Vs=d(),v(qe.$$.fragment),this.h()},l(t){const p=dl('[data-svelte="svelte-1phssyn"]',document.head);f=n(p,"META",{name:!0,content:!0}),p.forEach(r),T=m(t),h=n(t,"H1",{class:!0});var Lt=a(h);u=n(Lt,"A",{id:!0,class:!0,href:!0});var Wr=a(u);$=n(Wr,"SPAN",{});var Or=a($);b(c.$$.fragment,Or),Or.forEach(r),Wr.forEach(r),_=m(Lt),N=n(Lt,"SPAN",{});var Ur=a(N);X=i(Ur,"Emformer"),Ur.forEach(r),Lt.forEach(r),S=m(t),R=n(t,"H2",{class:!0});var At=a(R);O=n(At,"A",{id:!0,class:!0,href:!0});var Vr=a(O);hr=n(Vr,"SPAN",{});var Br=a(hr);b(Se.$$.fragment,Br),Br.forEach(r),Vr.forEach(r),Wo=m(At),ur=n(At,"SPAN",{});var Gs=a(ur);Oo=i(Gs,"Overview"),Gs.forEach(r),At.forEach(r),Yr=m(t),de=n(t,"P",{});var mo=a(de);Uo=i(mo,"The Emformer model was proposed in "),Ie=n(mo,"A",{href:!0,rel:!0});var Zs=a(Ie);Vo=i(Zs,`Emformer: Efficient Memory Transformer Based Acoustic Model For Low Latency
Streaming Speech Recognition`),Zs.forEach(r),Bo=i(mo,` by Yangyang Shi, Yongqiang Wang, Chunyang Wu,
Ching-Feng Yeh, Julian Chan, Frank Zhang, Duc Le, Mike Seltzer.`),mo.forEach(r),Hr=m(t),St=n(t,"P",{});var Qs=a(St);Yo=i(Qs,"The abstract from the paper is the following:"),Qs.forEach(r),Jr=m(t),It=n(t,"P",{});var Xs=a(It);Ho=i(Xs,`This paper proposes an efficient memory transformer Emformer for low latency streaming speech recognition. In Emformer,
the long-range history context is distilled into an augmented memory bank to reduce self-attention\u2019s computation
complexity. A cache mechanism saves the computation for the key and value in self-attention for the left context.
Emformer applies a parallelized block processing in training to support low latency models. We carry out experiments
on benchmark LibriSpeech data. Under average latency of 960 ms, Emformer gets WER 2.50% on test-clean and 5.62% on
test-other. Comparing with a strong baseline augmented memory transformer (AM-TRF), Emformer gets 4.6 folds training
speedup and 18% relative real-time factor (RTF) reduction in decoding with relative WER reduction 17% on test-clean
and 9% on test-other. For a low latency scenario with an average latency of 80 ms, Emformer achieves WER 3.01% on
test-clean and 7.09% on test-other. Comparing with the LSTM baseline with the same latency and model size, Emformer
gets relative WER reduction 9% and 16% on test-clean and test-other, respectively.`),Xs.forEach(r),Gr=m(t),Y=n(t,"P",{});var ir=a(Y);Jo=i(ir,"This model was contributed by "),De=n(ir,"A",{href:!0,rel:!0});var Ks=a(De);Go=i(Ks,"@anton-l"),Ks.forEach(r),Zo=i(ir,`.
The original code can be found `),Re=n(ir,"A",{href:!0,rel:!0});var ei=a(Re);Qo=i(ei,"here"),ei.forEach(r),Xo=i(ir,"."),ir.forEach(r),Zr=m(t),K=n(t,"H2",{class:!0});var co=a(K);me=n(co,"A",{id:!0,class:!0,href:!0});var ti=a(me);gr=n(ti,"SPAN",{});var ri=a(gr);b(We.$$.fragment,ri),ri.forEach(r),ti.forEach(r),Ko=m(co),_r=n(co,"SPAN",{});var oi=a(_r);en=i(oi,"EmformerConfig"),oi.forEach(r),co.forEach(r),Qr=m(t),I=n(t,"DIV",{class:!0});var Ne=a(I);b(Oe.$$.fragment,Ne),tn=m(Ne),ee=n(Ne,"P",{});var lr=a(ee);rn=i(lr,"This is the configuration class to store the configuration of a "),Dt=n(lr,"A",{href:!0});var ni=a(Dt);on=i(ni,"EmformerModel"),ni.forEach(r),nn=i(lr,`. It is used to instantiate an
Emformer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Emformer
`),Ue=n(lr,"A",{href:!0,rel:!0});var ai=a(Ue);an=i(ai,"anton-l/emformer-base-librispeech"),ai.forEach(r),sn=i(lr," architecture."),lr.forEach(r),ln=m(Ne),te=n(Ne,"P",{});var dr=a(te);dn=i(dr,"Configuration objects inherit from "),Rt=n(dr,"A",{href:!0});var si=a(Rt);mn=i(si,"PretrainedConfig"),si.forEach(r),cn=i(dr,` and can be used to control the model outputs. Read the
documentation from `),Wt=n(dr,"A",{href:!0});var ii=a(Wt);fn=i(ii,"PretrainedConfig"),ii.forEach(r),pn=i(dr," for more information."),dr.forEach(r),hn=m(Ne),b(ce.$$.fragment,Ne),Ne.forEach(r),Xr=m(t),re=n(t,"H2",{class:!0});var fo=a(re);fe=n(fo,"A",{id:!0,class:!0,href:!0});var li=a(fe);vr=n(li,"SPAN",{});var di=a(vr);b(Ve.$$.fragment,di),di.forEach(r),li.forEach(r),un=m(fo),br=n(fo,"SPAN",{});var mi=a(br);gn=i(mi,"EmformerTokenizer"),mi.forEach(r),fo.forEach(r),Kr=m(t),F=n(t,"DIV",{class:!0});var A=a(F);b(Be.$$.fragment,A),_n=m(A),Ye=n(A,"P",{});var po=a(Ye);vn=i(po,"Construct an Emformer tokenizer. Based on "),He=n(po,"A",{href:!0,rel:!0});var ci=a(He);bn=i(ci,"SentencePiece"),ci.forEach(r),En=i(po,"."),po.forEach(r),kn=m(A),Je=n(A,"P",{});var ho=a(Je);yn=i(ho,"This tokenizer inherits from "),Ot=n(ho,"A",{href:!0});var fi=a(Ot);wn=i(fi,"PreTrainedTokenizer"),fi.forEach(r),Tn=i(ho,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ho.forEach(r),$n=m(A),pe=n(A,"DIV",{class:!0});var uo=a(pe);b(Ge.$$.fragment,uo),xn=m(uo),Er=n(uo,"P",{});var pi=a(Er);zn=i(pi,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),pi.forEach(r),uo.forEach(r),Pn=m(A),Ut=n(A,"DIV",{class:!0});var hi=a(Ut);b(Ze.$$.fragment,hi),hi.forEach(r),Fn=m(A),H=n(A,"DIV",{class:!0});var mr=a(H);b(Qe.$$.fragment,mr),qn=m(mr),kr=n(mr,"P",{});var ui=a(kr);Nn=i(ui,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),ui.forEach(r),Mn=m(mr),Xe=n(mr,"P",{});var go=a(Xe);jn=i(go,"Similar to doing "),yr=n(go,"CODE",{});var gi=a(yr);Cn=i(gi,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),gi.forEach(r),Ln=i(go,"."),go.forEach(r),mr.forEach(r),An=m(A),he=n(A,"DIV",{class:!0});var _o=a(he);b(Ke.$$.fragment,_o),Sn=m(_o),wr=n(_o,"P",{});var _i=a(wr);In=i(_i,"Convert a list of lists of token ids into a list of strings by calling decode."),_i.forEach(r),_o.forEach(r),A.forEach(r),eo=m(t),oe=n(t,"H2",{class:!0});var vo=a(oe);ue=n(vo,"A",{id:!0,class:!0,href:!0});var vi=a(ue);Tr=n(vi,"SPAN",{});var bi=a(Tr);b(et.$$.fragment,bi),bi.forEach(r),vi.forEach(r),Dn=m(vo),$r=n(vo,"SPAN",{});var Ei=a($r);Rn=i(Ei,"Wav2Vec2FeatureExtractor"),Ei.forEach(r),vo.forEach(r),to=m(t),D=n(t,"DIV",{class:!0});var Me=a(D);b(tt.$$.fragment,Me),Wn=m(Me),xr=n(Me,"P",{});var ki=a(xr);On=i(ki,"Constructs an Emformer feature extractor."),ki.forEach(r),Un=m(Me),rt=n(Me,"P",{});var bo=a(rt);Vn=i(bo,"This feature extractor inherits from "),Vt=n(bo,"A",{href:!0});var yi=a(Vt);Bn=i(yi,"SequenceFeatureExtractor"),yi.forEach(r),Yn=i(bo,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),bo.forEach(r),Hn=m(Me),ge=n(Me,"DIV",{class:!0});var Eo=a(ge);b(ot.$$.fragment,Eo),Jn=m(Eo),zr=n(Eo,"P",{});var wi=a(zr);Gn=i(wi,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),wi.forEach(r),Eo.forEach(r),Me.forEach(r),ro=m(t),ne=n(t,"H2",{class:!0});var ko=a(ne);_e=n(ko,"A",{id:!0,class:!0,href:!0});var Ti=a(_e);Pr=n(Ti,"SPAN",{});var $i=a(Pr);b(nt.$$.fragment,$i),$i.forEach(r),Ti.forEach(r),Zn=m(ko),Fr=n(ko,"SPAN",{});var xi=a(Fr);Qn=i(xi,"EmformerProcessor"),xi.forEach(r),ko.forEach(r),oo=m(t),x=n(t,"DIV",{class:!0});var z=a(x);b(at.$$.fragment,z),Xn=m(z),qr=n(z,"P",{});var zi=a(qr);Kn=i(zi,`Constructs an Emformer processor which wraps an Emformer feature extractor and an Emformer target tokenizer into a
single processor.`),zi.forEach(r),ea=m(z),C=n(z,"P",{});var B=a(C);Bt=n(B,"A",{href:!0});var Pi=a(Bt);ta=i(Pi,"EmformerProcessor"),Pi.forEach(r),ra=i(B," offers all the functionalities of "),Yt=n(B,"A",{href:!0});var Fi=a(Yt);oa=i(Fi,"EmformerFeatureExtractor"),Fi.forEach(r),na=i(B," and "),Ht=n(B,"A",{href:!0});var qi=a(Ht);aa=i(qi,"PreTrainedTokenizer"),qi.forEach(r),sa=i(B,`.
See the docstring of `),st=n(B,"A",{href:!0});var Bs=a(st);Nr=n(Bs,"STRONG",{});var Ni=a(Nr);ia=i(Ni,"call"),Ni.forEach(r),la=i(Bs,"()"),Bs.forEach(r),da=i(B," and "),Jt=n(B,"A",{href:!0});var Mi=a(Jt);ma=i(Mi,"decode()"),Mi.forEach(r),ca=i(B," for more information."),B.forEach(r),fa=m(z),ve=n(z,"DIV",{class:!0});var yo=a(ve);b(it.$$.fragment,yo),pa=m(yo),U=n(yo,"P",{});var je=a(U);ha=i(je,`When used in normal mode, this method forwards all its arguments to EmformerFeatureExtractor\u2019s
`),lt=n(je,"A",{href:!0});var Ys=a(lt);Mr=n(Ys,"STRONG",{});var ji=a(Mr);ua=i(ji,"call"),ji.forEach(r),ga=i(Ys,"()"),Ys.forEach(r),_a=i(je,` and returns its output. If used in the context
`),Gt=n(je,"A",{href:!0});var Ci=a(Gt);va=i(Ci,"as_target_processor()"),Ci.forEach(r),ba=i(je,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),dt=n(je,"A",{href:!0});var Hs=a(dt);jr=n(Hs,"STRONG",{});var Li=a(jr);Ea=i(Li,"call"),Li.forEach(r),ka=i(Hs,"()"),Hs.forEach(r),ya=i(je,". Please refer to the docstring of the above two methods for more information."),je.forEach(r),yo.forEach(r),wa=m(z),be=n(z,"DIV",{class:!0});var wo=a(be);b(mt.$$.fragment,wo),Ta=m(wo),V=n(wo,"P",{});var Ce=a(V);$a=i(Ce,`When used in normal mode, this method forwards all its arguments to EmformerFeatureExtractor\u2019s
`),Zt=n(Ce,"A",{href:!0});var Ai=a(Zt);xa=i(Ai,"pad()"),Ai.forEach(r),za=i(Ce,` and returns its output. If used in the context
`),Qt=n(Ce,"A",{href:!0});var Si=a(Qt);Pa=i(Si,"as_target_processor()"),Si.forEach(r),Fa=i(Ce,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Xt=n(Ce,"A",{href:!0});var Ii=a(Xt);qa=i(Ii,"pad()"),Ii.forEach(r),Na=i(Ce,". Please refer to the docstring of the above two methods for more information."),Ce.forEach(r),wo.forEach(r),Ma=m(z),Kt=n(z,"DIV",{class:!0});var Di=a(Kt);b(ct.$$.fragment,Di),Di.forEach(r),ja=m(z),J=n(z,"DIV",{class:!0});var cr=a(J);b(ft.$$.fragment,cr),Ca=m(cr),pt=n(cr,"P",{});var To=a(pt);La=i(To,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),er=n(To,"A",{href:!0});var Ri=a(er);Aa=i(Ri,"from_pretrained()"),Ri.forEach(r),Sa=i(To," method."),To.forEach(r),Ia=m(cr),b(Ee.$$.fragment,cr),cr.forEach(r),Da=m(z),ke=n(z,"DIV",{class:!0});var $o=a(ke);b(ht.$$.fragment,$o),Ra=m($o),ut=n($o,"P",{});var xo=a(ut);Wa=i(xo,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),tr=n(xo,"A",{href:!0});var Wi=a(tr);Oa=i(Wi,"batch_decode()"),Wi.forEach(r),Ua=i(xo,`. Please
refer to the docstring of this method for more information.`),xo.forEach(r),$o.forEach(r),Va=m(z),ye=n(z,"DIV",{class:!0});var zo=a(ye);b(gt.$$.fragment,zo),Ba=m(zo),_t=n(zo,"P",{});var Po=a(_t);Ya=i(Po,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),rr=n(Po,"A",{href:!0});var Oi=a(rr);Ha=i(Oi,"decode()"),Oi.forEach(r),Ja=i(Po,`. Please refer
to the docstring of this method for more information.`),Po.forEach(r),zo.forEach(r),Ga=m(z),we=n(z,"DIV",{class:!0});var Fo=a(we);b(vt.$$.fragment,Fo),Za=m(Fo),Cr=n(Fo,"P",{});var Ui=a(Cr);Qa=i(Ui,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Emformer.`),Ui.forEach(r),Fo.forEach(r),z.forEach(r),no=m(t),ae=n(t,"H2",{class:!0});var qo=a(ae);Te=n(qo,"A",{id:!0,class:!0,href:!0});var Vi=a(Te);Lr=n(Vi,"SPAN",{});var Bi=a(Lr);b(bt.$$.fragment,Bi),Bi.forEach(r),Vi.forEach(r),Xa=m(qo),Ar=n(qo,"SPAN",{});var Yi=a(Ar);Ka=i(Yi,"EmformerModel"),Yi.forEach(r),qo.forEach(r),ao=m(t),M=n(t,"DIV",{class:!0});var G=a(M);b(Et.$$.fragment,G),es=m(G),kt=n(G,"P",{});var No=a(kt);ts=i(No,`The bare Emformer Model transformer outputting raw hidden-states without any specific head on top.
Emformer was proposed in `),yt=n(No,"A",{href:!0,rel:!0});var Hi=a(yt);rs=i(Hi,`Emformer: Efficient Memory Transformer Based Acoustic Model For Low Latency Streaming
Speech Recognition`),Hi.forEach(r),os=i(No,` by Yangyang Shi, Yongqiang Wang, Chunyang Wu, Ching-Feng Yeh,
Julian Chan, Frank Zhang, Duc Le, Mike Seltzer.`),No.forEach(r),ns=m(G),wt=n(G,"P",{});var Mo=a(wt);as=i(Mo,"This model inherits from "),or=n(Mo,"A",{href:!0});var Ji=a(or);ss=i(Ji,"PreTrainedModel"),Ji.forEach(r),is=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Mo.forEach(r),ls=m(G),Tt=n(G,"P",{});var jo=a(Tt);ds=i(jo,"This model is a PyTorch "),$t=n(jo,"A",{href:!0,rel:!0});var Gi=a($t);ms=i(Gi,"torch.nn.Module"),Gi.forEach(r),cs=i(jo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jo.forEach(r),fs=m(G),W=n(G,"DIV",{class:!0});var Le=a(W);b(xt.$$.fragment,Le),ps=m(Le),se=n(Le,"P",{});var fr=a(se);hs=i(fr,"The "),nr=n(fr,"A",{href:!0});var Zi=a(nr);us=i(Zi,"EmformerModel"),Zi.forEach(r),gs=i(fr," forward method, overrides the "),Sr=n(fr,"CODE",{});var Qi=a(Sr);_s=i(Qi,"__call__"),Qi.forEach(r),vs=i(fr," special method."),fr.forEach(r),bs=m(Le),b($e.$$.fragment,Le),Es=m(Le),b(xe.$$.fragment,Le),Le.forEach(r),G.forEach(r),so=m(t),ie=n(t,"H2",{class:!0});var Co=a(ie);ze=n(Co,"A",{id:!0,class:!0,href:!0});var Xi=a(ze);Ir=n(Xi,"SPAN",{});var Ki=a(Ir);b(zt.$$.fragment,Ki),Ki.forEach(r),Xi.forEach(r),ks=m(Co),Dr=n(Co,"SPAN",{});var el=a(Dr);ys=i(el,"EmformerForRNNT"),el.forEach(r),Co.forEach(r),io=m(t),j=n(t,"DIV",{class:!0});var Z=a(j);b(Pt.$$.fragment,Z),ws=m(Z),Ft=n(Z,"P",{});var Lo=a(Ft);Ts=i(Lo,`Emformer Model with an RNN-Transducer decoder.
Emformer was proposed in `),qt=n(Lo,"A",{href:!0,rel:!0});var tl=a(qt);$s=i(tl,`Emformer: Efficient Memory Transformer Based Acoustic Model For Low Latency Streaming
Speech Recognition`),tl.forEach(r),xs=i(Lo,` by Yangyang Shi, Yongqiang Wang, Chunyang Wu, Ching-Feng Yeh,
Julian Chan, Frank Zhang, Duc Le, Mike Seltzer.`),Lo.forEach(r),zs=m(Z),Nt=n(Z,"P",{});var Ao=a(Nt);Ps=i(Ao,"This model inherits from "),ar=n(Ao,"A",{href:!0});var rl=a(ar);Fs=i(rl,"PreTrainedModel"),rl.forEach(r),qs=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ao.forEach(r),Ns=m(Z),Mt=n(Z,"P",{});var So=a(Mt);Ms=i(So,"This model is a PyTorch "),jt=n(So,"A",{href:!0,rel:!0});var ol=a(jt);js=i(ol,"torch.nn.Module"),ol.forEach(r),Cs=i(So,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),So.forEach(r),Ls=m(Z),L=n(Z,"DIV",{class:!0});var Q=a(L);b(Ct.$$.fragment,Q),As=m(Q),le=n(Q,"P",{});var pr=a(le);Ss=i(pr,"The "),sr=n(pr,"A",{href:!0});var nl=a(sr);Is=i(nl,"EmformerForRNNT"),nl.forEach(r),Ds=i(pr," forward method, overrides the "),Rr=n(pr,"CODE",{});var al=a(Rr);Rs=i(al,"__call__"),al.forEach(r),Ws=i(pr," special method."),pr.forEach(r),Os=m(Q),b(Pe.$$.fragment,Q),Us=m(Q),b(Fe.$$.fragment,Q),Vs=m(Q),b(qe.$$.fragment,Q),Q.forEach(r),Z.forEach(r),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(bl)),l(u,"id","emformer"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#emformer"),l(h,"class","relative group"),l(O,"id","overview"),l(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(O,"href","#overview"),l(R,"class","relative group"),l(Ie,"href","https://arxiv.org/abs/2010.10759"),l(Ie,"rel","nofollow"),l(De,"href","https://huggingface.co/anton-l"),l(De,"rel","nofollow"),l(Re,"href","https://github.com/pytorch/audio/blob/main/torchaudio/models/emformer.py"),l(Re,"rel","nofollow"),l(me,"id","transformers.EmformerConfig"),l(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(me,"href","#transformers.EmformerConfig"),l(K,"class","relative group"),l(Dt,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerModel"),l(Ue,"href","https://huggingface.co/anton-l/emformer-base-librispeech"),l(Ue,"rel","nofollow"),l(Rt,"href","/docs/transformers/pr_17302/en/main_classes/configuration#transformers.PretrainedConfig"),l(Wt,"href","/docs/transformers/pr_17302/en/main_classes/configuration#transformers.PretrainedConfig"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(fe,"id","transformers.EmformerTokenizer"),l(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(fe,"href","#transformers.EmformerTokenizer"),l(re,"class","relative group"),l(He,"href","https://github.com/google/sentencepiece"),l(He,"rel","nofollow"),l(Ot,"href","/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"id","transformers.EmformerFeatureExtractor"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.EmformerFeatureExtractor"),l(oe,"class","relative group"),l(Vt,"href","/docs/transformers/pr_17302/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),l(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_e,"id","transformers.EmformerProcessor"),l(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_e,"href","#transformers.EmformerProcessor"),l(ne,"class","relative group"),l(Bt,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerProcessor"),l(Yt,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerFeatureExtractor"),l(Ht,"href","/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(st,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerProcessor.__call__"),l(Jt,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerProcessor.decode"),l(lt,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerFeatureExtractor.__call__"),l(Gt,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerProcessor.as_target_processor"),l(dt,"href","/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),l(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Zt,"href","/docs/transformers/pr_17302/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),l(Qt,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerProcessor.as_target_processor"),l(Xt,"href","/docs/transformers/pr_17302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),l(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(er,"href","/docs/transformers/pr_17302/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(tr,"href","/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),l(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rr,"href","/docs/transformers/pr_17302/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),l(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Te,"id","transformers.EmformerModel"),l(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Te,"href","#transformers.EmformerModel"),l(ae,"class","relative group"),l(yt,"href","https://arxiv.org/abs/2010.10759"),l(yt,"rel","nofollow"),l(or,"href","/docs/transformers/pr_17302/en/main_classes/model#transformers.PreTrainedModel"),l($t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l($t,"rel","nofollow"),l(nr,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerModel"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ze,"id","transformers.EmformerForRNNT"),l(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ze,"href","#transformers.EmformerForRNNT"),l(ie,"class","relative group"),l(qt,"href","https://arxiv.org/abs/2010.10759"),l(qt,"rel","nofollow"),l(ar,"href","/docs/transformers/pr_17302/en/main_classes/model#transformers.PreTrainedModel"),l(jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(jt,"rel","nofollow"),l(sr,"href","/docs/transformers/pr_17302/en/model_doc/emformer#transformers.EmformerForRNNT"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,f),g(t,T,p),g(t,h,p),e(h,u),e(u,$),E(c,$,null),e(h,_),e(h,N),e(N,X),g(t,S,p),g(t,R,p),e(R,O),e(O,hr),E(Se,hr,null),e(R,Wo),e(R,ur),e(ur,Oo),g(t,Yr,p),g(t,de,p),e(de,Uo),e(de,Ie),e(Ie,Vo),e(de,Bo),g(t,Hr,p),g(t,St,p),e(St,Yo),g(t,Jr,p),g(t,It,p),e(It,Ho),g(t,Gr,p),g(t,Y,p),e(Y,Jo),e(Y,De),e(De,Go),e(Y,Zo),e(Y,Re),e(Re,Qo),e(Y,Xo),g(t,Zr,p),g(t,K,p),e(K,me),e(me,gr),E(We,gr,null),e(K,Ko),e(K,_r),e(_r,en),g(t,Qr,p),g(t,I,p),E(Oe,I,null),e(I,tn),e(I,ee),e(ee,rn),e(ee,Dt),e(Dt,on),e(ee,nn),e(ee,Ue),e(Ue,an),e(ee,sn),e(I,ln),e(I,te),e(te,dn),e(te,Rt),e(Rt,mn),e(te,cn),e(te,Wt),e(Wt,fn),e(te,pn),e(I,hn),E(ce,I,null),g(t,Xr,p),g(t,re,p),e(re,fe),e(fe,vr),E(Ve,vr,null),e(re,un),e(re,br),e(br,gn),g(t,Kr,p),g(t,F,p),E(Be,F,null),e(F,_n),e(F,Ye),e(Ye,vn),e(Ye,He),e(He,bn),e(Ye,En),e(F,kn),e(F,Je),e(Je,yn),e(Je,Ot),e(Ot,wn),e(Je,Tn),e(F,$n),e(F,pe),E(Ge,pe,null),e(pe,xn),e(pe,Er),e(Er,zn),e(F,Pn),e(F,Ut),E(Ze,Ut,null),e(F,Fn),e(F,H),E(Qe,H,null),e(H,qn),e(H,kr),e(kr,Nn),e(H,Mn),e(H,Xe),e(Xe,jn),e(Xe,yr),e(yr,Cn),e(Xe,Ln),e(F,An),e(F,he),E(Ke,he,null),e(he,Sn),e(he,wr),e(wr,In),g(t,eo,p),g(t,oe,p),e(oe,ue),e(ue,Tr),E(et,Tr,null),e(oe,Dn),e(oe,$r),e($r,Rn),g(t,to,p),g(t,D,p),E(tt,D,null),e(D,Wn),e(D,xr),e(xr,On),e(D,Un),e(D,rt),e(rt,Vn),e(rt,Vt),e(Vt,Bn),e(rt,Yn),e(D,Hn),e(D,ge),E(ot,ge,null),e(ge,Jn),e(ge,zr),e(zr,Gn),g(t,ro,p),g(t,ne,p),e(ne,_e),e(_e,Pr),E(nt,Pr,null),e(ne,Zn),e(ne,Fr),e(Fr,Qn),g(t,oo,p),g(t,x,p),E(at,x,null),e(x,Xn),e(x,qr),e(qr,Kn),e(x,ea),e(x,C),e(C,Bt),e(Bt,ta),e(C,ra),e(C,Yt),e(Yt,oa),e(C,na),e(C,Ht),e(Ht,aa),e(C,sa),e(C,st),e(st,Nr),e(Nr,ia),e(st,la),e(C,da),e(C,Jt),e(Jt,ma),e(C,ca),e(x,fa),e(x,ve),E(it,ve,null),e(ve,pa),e(ve,U),e(U,ha),e(U,lt),e(lt,Mr),e(Mr,ua),e(lt,ga),e(U,_a),e(U,Gt),e(Gt,va),e(U,ba),e(U,dt),e(dt,jr),e(jr,Ea),e(dt,ka),e(U,ya),e(x,wa),e(x,be),E(mt,be,null),e(be,Ta),e(be,V),e(V,$a),e(V,Zt),e(Zt,xa),e(V,za),e(V,Qt),e(Qt,Pa),e(V,Fa),e(V,Xt),e(Xt,qa),e(V,Na),e(x,Ma),e(x,Kt),E(ct,Kt,null),e(x,ja),e(x,J),E(ft,J,null),e(J,Ca),e(J,pt),e(pt,La),e(pt,er),e(er,Aa),e(pt,Sa),e(J,Ia),E(Ee,J,null),e(x,Da),e(x,ke),E(ht,ke,null),e(ke,Ra),e(ke,ut),e(ut,Wa),e(ut,tr),e(tr,Oa),e(ut,Ua),e(x,Va),e(x,ye),E(gt,ye,null),e(ye,Ba),e(ye,_t),e(_t,Ya),e(_t,rr),e(rr,Ha),e(_t,Ja),e(x,Ga),e(x,we),E(vt,we,null),e(we,Za),e(we,Cr),e(Cr,Qa),g(t,no,p),g(t,ae,p),e(ae,Te),e(Te,Lr),E(bt,Lr,null),e(ae,Xa),e(ae,Ar),e(Ar,Ka),g(t,ao,p),g(t,M,p),E(Et,M,null),e(M,es),e(M,kt),e(kt,ts),e(kt,yt),e(yt,rs),e(kt,os),e(M,ns),e(M,wt),e(wt,as),e(wt,or),e(or,ss),e(wt,is),e(M,ls),e(M,Tt),e(Tt,ds),e(Tt,$t),e($t,ms),e(Tt,cs),e(M,fs),e(M,W),E(xt,W,null),e(W,ps),e(W,se),e(se,hs),e(se,nr),e(nr,us),e(se,gs),e(se,Sr),e(Sr,_s),e(se,vs),e(W,bs),E($e,W,null),e(W,Es),E(xe,W,null),g(t,so,p),g(t,ie,p),e(ie,ze),e(ze,Ir),E(zt,Ir,null),e(ie,ks),e(ie,Dr),e(Dr,ys),g(t,io,p),g(t,j,p),E(Pt,j,null),e(j,ws),e(j,Ft),e(Ft,Ts),e(Ft,qt),e(qt,$s),e(Ft,xs),e(j,zs),e(j,Nt),e(Nt,Ps),e(Nt,ar),e(ar,Fs),e(Nt,qs),e(j,Ns),e(j,Mt),e(Mt,Ms),e(Mt,jt),e(jt,js),e(Mt,Cs),e(j,Ls),e(j,L),E(Ct,L,null),e(L,As),e(L,le),e(le,Ss),e(le,sr),e(sr,Is),e(le,Ds),e(le,Rr),e(Rr,Rs),e(le,Ws),e(L,Os),E(Pe,L,null),e(L,Us),E(Fe,L,null),e(L,Vs),E(qe,L,null),lo=!0},p(t,[p]){const Lt={};p&2&&(Lt.$$scope={dirty:p,ctx:t}),ce.$set(Lt);const Wr={};p&2&&(Wr.$$scope={dirty:p,ctx:t}),Ee.$set(Wr);const Or={};p&2&&(Or.$$scope={dirty:p,ctx:t}),$e.$set(Or);const Ur={};p&2&&(Ur.$$scope={dirty:p,ctx:t}),xe.$set(Ur);const At={};p&2&&(At.$$scope={dirty:p,ctx:t}),Pe.$set(At);const Vr={};p&2&&(Vr.$$scope={dirty:p,ctx:t}),Fe.$set(Vr);const Br={};p&2&&(Br.$$scope={dirty:p,ctx:t}),qe.$set(Br)},i(t){lo||(k(c.$$.fragment,t),k(Se.$$.fragment,t),k(We.$$.fragment,t),k(Oe.$$.fragment,t),k(ce.$$.fragment,t),k(Ve.$$.fragment,t),k(Be.$$.fragment,t),k(Ge.$$.fragment,t),k(Ze.$$.fragment,t),k(Qe.$$.fragment,t),k(Ke.$$.fragment,t),k(et.$$.fragment,t),k(tt.$$.fragment,t),k(ot.$$.fragment,t),k(nt.$$.fragment,t),k(at.$$.fragment,t),k(it.$$.fragment,t),k(mt.$$.fragment,t),k(ct.$$.fragment,t),k(ft.$$.fragment,t),k(Ee.$$.fragment,t),k(ht.$$.fragment,t),k(gt.$$.fragment,t),k(vt.$$.fragment,t),k(bt.$$.fragment,t),k(Et.$$.fragment,t),k(xt.$$.fragment,t),k($e.$$.fragment,t),k(xe.$$.fragment,t),k(zt.$$.fragment,t),k(Pt.$$.fragment,t),k(Ct.$$.fragment,t),k(Pe.$$.fragment,t),k(Fe.$$.fragment,t),k(qe.$$.fragment,t),lo=!0)},o(t){y(c.$$.fragment,t),y(Se.$$.fragment,t),y(We.$$.fragment,t),y(Oe.$$.fragment,t),y(ce.$$.fragment,t),y(Ve.$$.fragment,t),y(Be.$$.fragment,t),y(Ge.$$.fragment,t),y(Ze.$$.fragment,t),y(Qe.$$.fragment,t),y(Ke.$$.fragment,t),y(et.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(nt.$$.fragment,t),y(at.$$.fragment,t),y(it.$$.fragment,t),y(mt.$$.fragment,t),y(ct.$$.fragment,t),y(ft.$$.fragment,t),y(Ee.$$.fragment,t),y(ht.$$.fragment,t),y(gt.$$.fragment,t),y(vt.$$.fragment,t),y(bt.$$.fragment,t),y(Et.$$.fragment,t),y(xt.$$.fragment,t),y($e.$$.fragment,t),y(xe.$$.fragment,t),y(zt.$$.fragment,t),y(Pt.$$.fragment,t),y(Ct.$$.fragment,t),y(Pe.$$.fragment,t),y(Fe.$$.fragment,t),y(qe.$$.fragment,t),lo=!1},d(t){r(f),t&&r(T),t&&r(h),w(c),t&&r(S),t&&r(R),w(Se),t&&r(Yr),t&&r(de),t&&r(Hr),t&&r(St),t&&r(Jr),t&&r(It),t&&r(Gr),t&&r(Y),t&&r(Zr),t&&r(K),w(We),t&&r(Qr),t&&r(I),w(Oe),w(ce),t&&r(Xr),t&&r(re),w(Ve),t&&r(Kr),t&&r(F),w(Be),w(Ge),w(Ze),w(Qe),w(Ke),t&&r(eo),t&&r(oe),w(et),t&&r(to),t&&r(D),w(tt),w(ot),t&&r(ro),t&&r(ne),w(nt),t&&r(oo),t&&r(x),w(at),w(it),w(mt),w(ct),w(ft),w(Ee),w(ht),w(gt),w(vt),t&&r(no),t&&r(ae),w(bt),t&&r(ao),t&&r(M),w(Et),w(xt),w($e),w(xe),t&&r(so),t&&r(ie),w(zt),t&&r(io),t&&r(j),w(Pt),w(Ct),w(Pe),w(Fe),w(qe)}}}const bl={local:"emformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.EmformerConfig",title:"EmformerConfig"},{local:"transformers.EmformerTokenizer",title:"EmformerTokenizer"},{local:"transformers.EmformerFeatureExtractor",title:"Wav2Vec2FeatureExtractor"},{local:"transformers.EmformerProcessor",title:"EmformerProcessor"},{local:"transformers.EmformerModel",title:"EmformerModel"},{local:"transformers.EmformerForRNNT",title:"EmformerForRNNT"}],title:"Emformer"};function El(q){return ml(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zl extends sl{constructor(f){super();il(this,f,El,vl,ll,{})}}export{zl as default,bl as metadata};
