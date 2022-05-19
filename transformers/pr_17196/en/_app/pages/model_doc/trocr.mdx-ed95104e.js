import{S as hi,i as mi,s as pi,e as s,k as c,w as C,t as o,M as fi,c as n,d as r,m as h,a as i,x as w,h as a,b as l,N as ui,F as e,g as p,y as k,q as $,o as y,B as O,v as gi,L as ci}from"../../chunks/vendor-6b77c823.js";import{T as li}from"../../chunks/Tip-39098574.js";import{D as Z}from"../../chunks/Docstring-1088f2fb.js";import{C as Hs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as jt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as di}from"../../chunks/ExampleCodeBlock-5212b321.js";function _i(S){let f,E,u,g,T;return g=new Hs({props:{code:`from transformers import TrOCRForCausalLM, TrOCRConfig

# Initializing a TrOCR-base style configuration
configuration = TrOCRConfig()

# Initializing a model from the TrOCR-base style configuration
model = TrOCRForCausalLM(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRForCausalLM, TrOCRConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a TrOCR-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TrOCRConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the TrOCR-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TrOCRForCausalLM(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){f=s("p"),E=o("Example:"),u=c(),C(g.$$.fragment)},l(m){f=n(m,"P",{});var _=i(f);E=a(_,"Example:"),_.forEach(r),u=h(m),w(g.$$.fragment,m)},m(m,_){p(m,f,_),e(f,E),p(m,u,_),k(g,m,_),T=!0},p:ci,i(m){T||($(g.$$.fragment,m),T=!0)},o(m){y(g.$$.fragment,m),T=!1},d(m){m&&r(f),m&&r(u),O(g,m)}}}function vi(S){let f,E,u,g,T,m,_,D;return{c(){f=s("p"),E=o(`This class method is simply calling the feature extractor
`),u=s("a"),g=o("from_pretrained()"),T=o(` and the tokenizer
`),m=s("code"),_=o("from_pretrained"),D=o(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(j){f=n(j,"P",{});var R=i(f);E=a(R,`This class method is simply calling the feature extractor
`),u=n(R,"A",{href:!0});var z=i(u);g=a(z,"from_pretrained()"),z.forEach(r),T=a(R,` and the tokenizer
`),m=n(R,"CODE",{});var F=i(m);_=a(F,"from_pretrained"),F.forEach(r),D=a(R,` methods. Please refer to the docstrings of the
methods above for more information.`),R.forEach(r),this.h()},h(){l(u,"href","/docs/transformers/pr_17196/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(j,R){p(j,f,R),e(f,E),e(f,u),e(u,g),e(f,T),e(f,m),e(m,_),e(f,D)},d(j){j&&r(f)}}}function Ti(S){let f,E,u,g,T,m,_,D;return{c(){f=s("p"),E=o("This class method is simply calling "),u=s("a"),g=o("save_pretrained()"),T=o(` and
`),m=s("code"),_=o("save_pretrained"),D=o(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(j){f=n(j,"P",{});var R=i(f);E=a(R,"This class method is simply calling "),u=n(R,"A",{href:!0});var z=i(u);g=a(z,"save_pretrained()"),z.forEach(r),T=a(R,` and
`),m=n(R,"CODE",{});var F=i(m);_=a(F,"save_pretrained"),F.forEach(r),D=a(R,`. Please refer to the docstrings of the methods
above for more information.`),R.forEach(r),this.h()},h(){l(u,"href","/docs/transformers/pr_17196/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(j,R){p(j,f,R),e(f,E),e(f,u),e(u,g),e(f,T),e(f,m),e(m,_),e(f,D)},d(j){j&&r(f)}}}function bi(S){let f,E,u,g,T;return g=new Hs({props:{code:`from transformers import (
    TrOCRConfig,
    TrOCRProcessor,
    TrOCRForCausalLM,
    ViTConfig,
    ViTModel,
    VisionEncoderDecoderModel,
)
import requests
from PIL import Image

# TrOCR is a decoder model and should be used within a VisionEncoderDecoderModel
# init vision2text model with random weights
encoder = ViTModel(ViTConfig())
decoder = TrOCRForCausalLM(TrOCRConfig())
model = VisionEncoderDecoderModel(encoder=encoder, decoder=decoder)

# If you want to start from the pretrained model, load the checkpoint with \`VisionEncoderDecoderModel\`
processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg"
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")
pixel_values = processor(image, return_tensors="pt").pixel_values
text = "industry, ' Mr. Brown commented icily. ' Let us have a"

# training
model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

labels = processor.tokenizer(text, return_tensors="pt").input_ids
outputs = model(pixel_values, labels=labels)
loss = outputs.loss
round(loss.item(), 2)

# inference
generated_ids = model.generate(pixel_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
generated_text`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    TrOCRConfig,
<span class="hljs-meta">... </span>    TrOCRProcessor,
<span class="hljs-meta">... </span>    TrOCRForCausalLM,
<span class="hljs-meta">... </span>    ViTConfig,
<span class="hljs-meta">... </span>    ViTModel,
<span class="hljs-meta">... </span>    VisionEncoderDecoderModel,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># TrOCR is a decoder model and should be used within a VisionEncoderDecoderModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># init vision2text model with random weights</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = ViTModel(ViTConfig())
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = TrOCRForCausalLM(TrOCRConfig())
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(encoder=encoder, decoder=decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If you want to start from the pretrained model, load the checkpoint with \`VisionEncoderDecoderModel\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;industry, &#x27; Mr. Brown commented icily. &#x27; Let us have a&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.30</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text
<span class="hljs-string">&#x27;industry, &quot; Mr. Brown commented icily. &quot; Let us have a&#x27;</span>`}}),{c(){f=s("p"),E=o("Example:"),u=c(),C(g.$$.fragment)},l(m){f=n(m,"P",{});var _=i(f);E=a(_,"Example:"),_.forEach(r),u=h(m),w(g.$$.fragment,m)},m(m,_){p(m,f,_),e(f,E),p(m,u,_),k(g,m,_),T=!0},p:ci,i(m){T||($(g.$$.fragment,m),T=!0)},o(m){y(g.$$.fragment,m),T=!1},d(m){m&&r(f),m&&r(u),O(g,m)}}}function Ci(S){let f,E,u,g,T,m,_,D,j,R,z,F,zt,$e,ro,Lt,oo,ur,W,ao,ye,so,no,Oe,io,lo,gr,st,co,_r,nt,Ft,ho,vr,re,Us,Tr,oe,mo,it,po,fo,br,ae,uo,Dt,go,_o,Cr,B,vo,Re,To,bo,Ee,Co,wo,wr,lt,ko,kr,H,xe,$o,Pe,yo,Oo,Ro,I,Eo,Me,xo,Po,je,Mo,jo,ze,zo,Lo,Fo,Le,Do,dt,qo,Ao,$r,J,se,qt,Fe,Io,At,Vo,yr,U,No,It,So,Wo,ct,Bo,Ho,Or,v,Uo,Vt,Xo,Go,Nt,Zo,Jo,St,Yo,Ko,Wt,Qo,ea,ht,ta,ra,Bt,oa,aa,Ht,sa,na,Ut,ia,la,Xt,da,ca,Rr,mt,Gt,ha,Er,De,xr,ne,ma,qe,pa,fa,Pr,Y,ie,Zt,Ae,ua,Jt,ga,Mr,q,Ie,_a,K,va,pt,Ta,ba,Ve,Ca,wa,ka,Q,$a,ft,ya,Oa,ut,Ra,Ea,xa,le,jr,ee,de,Yt,Ne,Pa,Kt,Ma,zr,b,Se,ja,Qt,za,La,P,gt,Fa,Da,er,qa,Aa,tr,Ia,Va,rr,Na,Sa,or,Wa,Ba,We,ar,Ha,Ua,Xa,_t,Ga,Za,Ja,ce,Be,Ya,V,Ka,sr,Qa,es,vt,ts,rs,nr,os,as,ss,X,He,ns,ir,is,ls,he,ds,G,Ue,cs,Xe,hs,Tt,ms,ps,fs,me,us,pe,Ge,gs,Ze,_s,bt,vs,Ts,bs,fe,Je,Cs,Ye,ws,Ct,ks,$s,ys,ue,Ke,Os,lr,Rs,Lr,te,ge,dr,Qe,Es,cr,xs,Fr,A,et,Ps,N,Ms,wt,js,zs,hr,Ls,Fs,kt,Ds,qs,As,tt,Is,rt,Vs,Ns,Ss,_e,ot,Ws,ve,Dr;return m=new jt({}),$e=new jt({}),Fe=new jt({}),De=new Hs({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests 
from PIL import Image

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten") 
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset 
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg" 
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")

pixel_values = processor(image, return_tensors="pt").pixel_values 
generated_ids = model.generate(pixel_values)

generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0] `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests 
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>) 
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span> 
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values 
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>] `}}),Ae=new jt({}),Ie=new Z({props:{name:"class transformers.TrOCRConfig",anchor:"transformers.TrOCRConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"d_model",val:" = 1024"},{name:"decoder_layers",val:" = 12"},{name:"decoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"activation_function",val:" = 'gelu'"},{name:"max_position_embeddings",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = False"},{name:"scale_embedding",val:" = False"},{name:"use_learned_position_embeddings",val:" = True"},{name:"layernorm_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TrOCRConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the TrOCR model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRForCausalLM">TrOCRForCausalLM</a>.`,name:"vocab_size"},{anchor:"transformers.TrOCRConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.TrOCRConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.TrOCRConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.TrOCRConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.TrOCRConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the pooler. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.TrOCRConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TrOCRConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, and pooler.`,name:"dropout"},{anchor:"transformers.TrOCRConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.TrOCRConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.TrOCRConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.TrOCRConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.TrOCRConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.TrOCRConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to scale the word embeddings by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.TrOCRConfig.use_learned_position_embeddings",description:`<strong>use_learned_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use learned position embeddings. If not, sinusoidal position embeddings will be used.`,name:"use_learned_position_embeddings"},{anchor:"transformers.TrOCRConfig.layernorm_embedding",description:`<strong>layernorm_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a layernorm after the word + position embeddings.`,name:"layernorm_embedding"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/configuration_trocr.py#L31"}}),le=new di({props:{anchor:"transformers.TrOCRConfig.example",$$slots:{default:[_i]},$$scope:{ctx:S}}}),Ne=new jt({}),Se=new Z({props:{name:"class transformers.TrOCRProcessor",anchor:"transformers.TrOCRProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.TrOCRProcessor.feature_extractor",description:`<strong>feature_extractor</strong> ([<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]) &#x2014;
An instance of [<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.TrOCRProcessor.tokenizer",description:`<strong>tokenizer</strong> ([<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]) &#x2014;
An instance of [<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/processing_trocr.py#L23"}}),Be=new Z({props:{name:"__call__",anchor:"transformers.TrOCRProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/processing_trocr.py#L44"}}),He=new Z({props:{name:"from_pretrained",anchor:"transformers.TrOCRProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TrOCRProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_17196/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/pr_17196/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/processing_utils.py#L156"}}),he=new li({props:{$$slots:{default:[vi]},$$scope:{ctx:S}}}),Ue=new Z({props:{name:"save_pretrained",anchor:"transformers.TrOCRProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TrOCRProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.TrOCRProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_17196/en/main_classes/processors#transformers.ProcessorMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/processing_utils.py#L94"}}),me=new li({props:{$$slots:{default:[Ti]},$$scope:{ctx:S}}}),Ge=new Z({props:{name:"batch_decode",anchor:"transformers.TrOCRProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/processing_trocr.py#L53"}}),Je=new Z({props:{name:"decode",anchor:"transformers.TrOCRProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/processing_trocr.py#L60"}}),Ke=new Z({props:{name:"as_target_processor",anchor:"transformers.TrOCRProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/processing_trocr.py#L67"}}),Qe=new jt({}),et=new Z({props:{name:"class transformers.TrOCRForCausalLM",anchor:"transformers.TrOCRForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRConfig">TrOCRConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/modeling_trocr.py#L782"}}),ot=new Z({props:{name:"forward",anchor:"transformers.TrOCRForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>TrOCRTokenizer</code>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TrOCRForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TrOCRForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TrOCRForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.TrOCRForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.TrOCRForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TrOCRForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.TrOCRForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/trocr/modeling_trocr.py#L813",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRConfig"
>TrOCRConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new di({props:{anchor:"transformers.TrOCRForCausalLM.forward.example",$$slots:{default:[bi]},$$scope:{ctx:S}}}),{c(){f=s("meta"),E=c(),u=s("h1"),g=s("a"),T=s("span"),C(m.$$.fragment),_=c(),D=s("span"),j=o("TrOCR"),R=c(),z=s("h2"),F=s("a"),zt=s("span"),C($e.$$.fragment),ro=c(),Lt=s("span"),oo=o("Overview"),ur=c(),W=s("p"),ao=o("The TrOCR model was proposed in "),ye=s("a"),so=o(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),no=o(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),Oe=s("a"),io=o("optical character recognition (OCR)"),lo=o("."),gr=c(),st=s("p"),co=o("The abstract from the paper is the following:"),_r=c(),nt=s("p"),Ft=s("em"),ho=o(`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),vr=c(),re=s("img"),Tr=c(),oe=s("small"),mo=o("TrOCR architecture. Taken from the "),it=s("a"),po=o("original paper"),fo=o("."),br=c(),ae=s("p"),uo=o("Please refer to the "),Dt=s("code"),go=o("VisionEncoderDecoder"),_o=o(" class on how to use this model."),Cr=c(),B=s("p"),vo=o("This model was contributed by "),Re=s("a"),To=o("nielsr"),bo=o(`. The original code can be found
`),Ee=s("a"),Co=o("here"),wo=o("."),wr=c(),lt=s("p"),ko=o("Tips:"),kr=c(),H=s("ul"),xe=s("li"),$o=o("The quickest way to get started with TrOCR is by checking the "),Pe=s("a"),yo=o(`tutorial
notebooks`),Oo=o(`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),Ro=c(),I=s("li"),Eo=o(`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),Me=s("a"),xo=o("SROIE dataset"),Po=o(" and handwritten (e.g. the "),je=s("a"),Mo=o(`IAM
Handwriting dataset`),jo=o(` text recognition tasks. For more
information, see the `),ze=s("a"),zo=o("official models"),Lo=o("."),Fo=c(),Le=s("li"),Do=o("TrOCR is always used within the "),dt=s("a"),qo=o("VisionEncoderDecoder"),Ao=o(" framework."),$r=c(),J=s("h2"),se=s("a"),qt=s("span"),C(Fe.$$.fragment),Io=c(),At=s("span"),Vo=o("Inference"),yr=c(),U=s("p"),No=o("TrOCR\u2019s "),It=s("code"),So=o("VisionEncoderDecoder"),Wo=o(` model accepts images as input and makes use of
`),ct=s("a"),Bo=o("generate()"),Ho=o(" to autoregressively generate text given the input image."),Or=c(),v=s("p"),Uo=o("The ["),Vt=s("code"),Xo=o("ViTFeatureExtractor"),Go=o("/"),Nt=s("code"),Zo=o("DeiTFeatureExtractor"),Jo=o(`] class is responsible for preprocessing the input image and
[`),St=s("code"),Yo=o("RobertaTokenizer"),Ko=o("/"),Wt=s("code"),Qo=o("XLMRobertaTokenizer"),ea=o(`] decodes the generated target tokens to the target string. The
`),ht=s("a"),ta=o("TrOCRProcessor"),ra=o(" wraps ["),Bt=s("code"),oa=o("ViTFeatureExtractor"),aa=o("/"),Ht=s("code"),sa=o("DeiTFeatureExtractor"),na=o("] and ["),Ut=s("code"),ia=o("RobertaTokenizer"),la=o("/"),Xt=s("code"),da=o("XLMRobertaTokenizer"),ca=o(`]
into a single instance to both extract the input features and decode the predicted token ids.`),Rr=c(),mt=s("ul"),Gt=s("li"),ha=o("Step-by-step Optical Character Recognition (OCR)"),Er=c(),C(De.$$.fragment),xr=c(),ne=s("p"),ma=o("See the "),qe=s("a"),pa=o("model hub"),fa=o(" to look for TrOCR checkpoints."),Pr=c(),Y=s("h2"),ie=s("a"),Zt=s("span"),C(Ae.$$.fragment),ua=c(),Jt=s("span"),ga=o("TrOCRConfig"),Mr=c(),q=s("div"),C(Ie.$$.fragment),_a=c(),K=s("p"),va=o("This is the configuration class to store the configuration of a "),pt=s("a"),Ta=o("TrOCRForCausalLM"),ba=o(`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),Ve=s("a"),Ca=o("microsoft/trocr-base-handwritten"),wa=o(" architecture."),ka=c(),Q=s("p"),$a=o("Configuration objects inherit from "),ft=s("a"),ya=o("PretrainedConfig"),Oa=o(` and can be used to control the model outputs. Read the
documentation from `),ut=s("a"),Ra=o("PretrainedConfig"),Ea=o(" for more information."),xa=c(),C(le.$$.fragment),jr=c(),ee=s("h2"),de=s("a"),Yt=s("span"),C(Ne.$$.fragment),Pa=c(),Kt=s("span"),Ma=o("TrOCRProcessor"),zr=c(),b=s("div"),C(Se.$$.fragment),ja=c(),Qt=s("p"),za=o("Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),La=c(),P=s("p"),gt=s("a"),Fa=o("TrOCRProcessor"),Da=o(" offers all the functionalities of ["),er=s("code"),qa=o("ViTFeatureExtractor"),Aa=o("/"),tr=s("code"),Ia=o("DeiTFeatureExtractor"),Va=o(`] and
[`),rr=s("code"),Na=o("RobertaTokenizer"),Sa=o("/"),or=s("code"),Wa=o("XLMRobertaTokenizer"),Ba=o("]. See the "),We=s("a"),ar=s("strong"),Ha=o("call"),Ua=o("()"),Xa=o(" and "),_t=s("a"),Ga=o("decode()"),Za=o(` for
more information.`),Ja=c(),ce=s("div"),C(Be.$$.fragment),Ya=c(),V=s("p"),Ka=o(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),sr=s("code"),Qa=o("__call__()"),es=o(` and returns its output. If used in the context
`),vt=s("a"),ts=o("as_target_processor()"),rs=o(` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),nr=s("code"),os=o("__call__"),as=o(". Please refer to the doctsring of the above two methods for more information."),ss=c(),X=s("div"),C(He.$$.fragment),ns=c(),ir=s("p"),is=o("Instantiate a processor associated with a pretrained model."),ls=c(),C(he.$$.fragment),ds=c(),G=s("div"),C(Ue.$$.fragment),cs=c(),Xe=s("p"),hs=o(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Tt=s("a"),ms=o("from_pretrained()"),ps=o(" method."),fs=c(),C(me.$$.fragment),us=c(),pe=s("div"),C(Ge.$$.fragment),gs=c(),Ze=s("p"),_s=o("This method forwards all its arguments to TrOCRTokenizer\u2019s "),bt=s("a"),vs=o("batch_decode()"),Ts=o(`. Please refer
to the docstring of this method for more information.`),bs=c(),fe=s("div"),C(Je.$$.fragment),Cs=c(),Ye=s("p"),ws=o("This method forwards all its arguments to TrOCRTokenizer\u2019s "),Ct=s("a"),ks=o("decode()"),$s=o(`. Please refer to the
docstring of this method for more information.`),ys=c(),ue=s("div"),C(Ke.$$.fragment),Os=c(),lr=s("p"),Rs=o("Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning TrOCR."),Lr=c(),te=s("h2"),ge=s("a"),dr=s("span"),C(Qe.$$.fragment),Es=c(),cr=s("span"),xs=o("TrOCRForCausalLM"),Fr=c(),A=s("div"),C(et.$$.fragment),Ps=c(),N=s("p"),Ms=o("The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),wt=s("a"),js=o("EncoderDecoderModel"),zs=o(" and "),hr=s("code"),Ls=o("VisionEncoderDecoder"),Fs=o(`.
This model inherits from `),kt=s("a"),Ds=o("PreTrainedModel"),qs=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),As=c(),tt=s("p"),Is=o("This model is also a PyTorch "),rt=s("a"),Vs=o("torch.nn.Module"),Ns=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ss=c(),_e=s("div"),C(ot.$$.fragment),Ws=c(),C(ve.$$.fragment),this.h()},l(t){const d=fi('[data-svelte="svelte-1phssyn"]',document.head);f=n(d,"META",{name:!0,content:!0}),d.forEach(r),E=h(t),u=n(t,"H1",{class:!0});var at=i(u);g=n(at,"A",{id:!0,class:!0,href:!0});var mr=i(g);T=n(mr,"SPAN",{});var pr=i(T);w(m.$$.fragment,pr),pr.forEach(r),mr.forEach(r),_=h(at),D=n(at,"SPAN",{});var fr=i(D);j=a(fr,"TrOCR"),fr.forEach(r),at.forEach(r),R=h(t),z=n(t,"H2",{class:!0});var qr=i(z);F=n(qr,"A",{id:!0,class:!0,href:!0});var Xs=i(F);zt=n(Xs,"SPAN",{});var Gs=i(zt);w($e.$$.fragment,Gs),Gs.forEach(r),Xs.forEach(r),ro=h(qr),Lt=n(qr,"SPAN",{});var Zs=i(Lt);oo=a(Zs,"Overview"),Zs.forEach(r),qr.forEach(r),ur=h(t),W=n(t,"P",{});var $t=i(W);ao=a($t,"The TrOCR model was proposed in "),ye=n($t,"A",{href:!0,rel:!0});var Js=i(ye);so=a(Js,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Js.forEach(r),no=a($t,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),Oe=n($t,"A",{href:!0,rel:!0});var Ys=i(Oe);io=a(Ys,"optical character recognition (OCR)"),Ys.forEach(r),lo=a($t,"."),$t.forEach(r),gr=h(t),st=n(t,"P",{});var Ks=i(st);co=a(Ks,"The abstract from the paper is the following:"),Ks.forEach(r),_r=h(t),nt=n(t,"P",{});var Qs=i(nt);Ft=n(Qs,"EM",{});var en=i(Ft);ho=a(en,`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),en.forEach(r),Qs.forEach(r),vr=h(t),re=n(t,"IMG",{src:!0,alt:!0,width:!0}),Tr=h(t),oe=n(t,"SMALL",{});var Ar=i(oe);mo=a(Ar,"TrOCR architecture. Taken from the "),it=n(Ar,"A",{href:!0});var tn=i(it);po=a(tn,"original paper"),tn.forEach(r),fo=a(Ar,"."),Ar.forEach(r),br=h(t),ae=n(t,"P",{});var Ir=i(ae);uo=a(Ir,"Please refer to the "),Dt=n(Ir,"CODE",{});var rn=i(Dt);go=a(rn,"VisionEncoderDecoder"),rn.forEach(r),_o=a(Ir," class on how to use this model."),Ir.forEach(r),Cr=h(t),B=n(t,"P",{});var yt=i(B);vo=a(yt,"This model was contributed by "),Re=n(yt,"A",{href:!0,rel:!0});var on=i(Re);To=a(on,"nielsr"),on.forEach(r),bo=a(yt,`. The original code can be found
`),Ee=n(yt,"A",{href:!0,rel:!0});var an=i(Ee);Co=a(an,"here"),an.forEach(r),wo=a(yt,"."),yt.forEach(r),wr=h(t),lt=n(t,"P",{});var sn=i(lt);ko=a(sn,"Tips:"),sn.forEach(r),kr=h(t),H=n(t,"UL",{});var Ot=i(H);xe=n(Ot,"LI",{});var Vr=i(xe);$o=a(Vr,"The quickest way to get started with TrOCR is by checking the "),Pe=n(Vr,"A",{href:!0,rel:!0});var nn=i(Pe);yo=a(nn,`tutorial
notebooks`),nn.forEach(r),Oo=a(Vr,`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),Vr.forEach(r),Ro=h(Ot),I=n(Ot,"LI",{});var Te=i(I);Eo=a(Te,`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),Me=n(Te,"A",{href:!0,rel:!0});var ln=i(Me);xo=a(ln,"SROIE dataset"),ln.forEach(r),Po=a(Te," and handwritten (e.g. the "),je=n(Te,"A",{href:!0,rel:!0});var dn=i(je);Mo=a(dn,`IAM
Handwriting dataset`),dn.forEach(r),jo=a(Te,` text recognition tasks. For more
information, see the `),ze=n(Te,"A",{href:!0,rel:!0});var cn=i(ze);zo=a(cn,"official models"),cn.forEach(r),Lo=a(Te,"."),Te.forEach(r),Fo=h(Ot),Le=n(Ot,"LI",{});var Nr=i(Le);Do=a(Nr,"TrOCR is always used within the "),dt=n(Nr,"A",{href:!0});var hn=i(dt);qo=a(hn,"VisionEncoderDecoder"),hn.forEach(r),Ao=a(Nr," framework."),Nr.forEach(r),Ot.forEach(r),$r=h(t),J=n(t,"H2",{class:!0});var Sr=i(J);se=n(Sr,"A",{id:!0,class:!0,href:!0});var mn=i(se);qt=n(mn,"SPAN",{});var pn=i(qt);w(Fe.$$.fragment,pn),pn.forEach(r),mn.forEach(r),Io=h(Sr),At=n(Sr,"SPAN",{});var fn=i(At);Vo=a(fn,"Inference"),fn.forEach(r),Sr.forEach(r),yr=h(t),U=n(t,"P",{});var Rt=i(U);No=a(Rt,"TrOCR\u2019s "),It=n(Rt,"CODE",{});var un=i(It);So=a(un,"VisionEncoderDecoder"),un.forEach(r),Wo=a(Rt,` model accepts images as input and makes use of
`),ct=n(Rt,"A",{href:!0});var gn=i(ct);Bo=a(gn,"generate()"),gn.forEach(r),Ho=a(Rt," to autoregressively generate text given the input image."),Rt.forEach(r),Or=h(t),v=n(t,"P",{});var x=i(v);Uo=a(x,"The ["),Vt=n(x,"CODE",{});var _n=i(Vt);Xo=a(_n,"ViTFeatureExtractor"),_n.forEach(r),Go=a(x,"/"),Nt=n(x,"CODE",{});var vn=i(Nt);Zo=a(vn,"DeiTFeatureExtractor"),vn.forEach(r),Jo=a(x,`] class is responsible for preprocessing the input image and
[`),St=n(x,"CODE",{});var Tn=i(St);Yo=a(Tn,"RobertaTokenizer"),Tn.forEach(r),Ko=a(x,"/"),Wt=n(x,"CODE",{});var bn=i(Wt);Qo=a(bn,"XLMRobertaTokenizer"),bn.forEach(r),ea=a(x,`] decodes the generated target tokens to the target string. The
`),ht=n(x,"A",{href:!0});var Cn=i(ht);ta=a(Cn,"TrOCRProcessor"),Cn.forEach(r),ra=a(x," wraps ["),Bt=n(x,"CODE",{});var wn=i(Bt);oa=a(wn,"ViTFeatureExtractor"),wn.forEach(r),aa=a(x,"/"),Ht=n(x,"CODE",{});var kn=i(Ht);sa=a(kn,"DeiTFeatureExtractor"),kn.forEach(r),na=a(x,"] and ["),Ut=n(x,"CODE",{});var $n=i(Ut);ia=a($n,"RobertaTokenizer"),$n.forEach(r),la=a(x,"/"),Xt=n(x,"CODE",{});var yn=i(Xt);da=a(yn,"XLMRobertaTokenizer"),yn.forEach(r),ca=a(x,`]
into a single instance to both extract the input features and decode the predicted token ids.`),x.forEach(r),Rr=h(t),mt=n(t,"UL",{});var On=i(mt);Gt=n(On,"LI",{});var Rn=i(Gt);ha=a(Rn,"Step-by-step Optical Character Recognition (OCR)"),Rn.forEach(r),On.forEach(r),Er=h(t),w(De.$$.fragment,t),xr=h(t),ne=n(t,"P",{});var Wr=i(ne);ma=a(Wr,"See the "),qe=n(Wr,"A",{href:!0,rel:!0});var En=i(qe);pa=a(En,"model hub"),En.forEach(r),fa=a(Wr," to look for TrOCR checkpoints."),Wr.forEach(r),Pr=h(t),Y=n(t,"H2",{class:!0});var Br=i(Y);ie=n(Br,"A",{id:!0,class:!0,href:!0});var xn=i(ie);Zt=n(xn,"SPAN",{});var Pn=i(Zt);w(Ae.$$.fragment,Pn),Pn.forEach(r),xn.forEach(r),ua=h(Br),Jt=n(Br,"SPAN",{});var Mn=i(Jt);ga=a(Mn,"TrOCRConfig"),Mn.forEach(r),Br.forEach(r),Mr=h(t),q=n(t,"DIV",{class:!0});var be=i(q);w(Ie.$$.fragment,be),_a=h(be),K=n(be,"P",{});var Et=i(K);va=a(Et,"This is the configuration class to store the configuration of a "),pt=n(Et,"A",{href:!0});var jn=i(pt);Ta=a(jn,"TrOCRForCausalLM"),jn.forEach(r),ba=a(Et,`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),Ve=n(Et,"A",{href:!0,rel:!0});var zn=i(Ve);Ca=a(zn,"microsoft/trocr-base-handwritten"),zn.forEach(r),wa=a(Et," architecture."),Et.forEach(r),ka=h(be),Q=n(be,"P",{});var xt=i(Q);$a=a(xt,"Configuration objects inherit from "),ft=n(xt,"A",{href:!0});var Ln=i(ft);ya=a(Ln,"PretrainedConfig"),Ln.forEach(r),Oa=a(xt,` and can be used to control the model outputs. Read the
documentation from `),ut=n(xt,"A",{href:!0});var Fn=i(ut);Ra=a(Fn,"PretrainedConfig"),Fn.forEach(r),Ea=a(xt," for more information."),xt.forEach(r),xa=h(be),w(le.$$.fragment,be),be.forEach(r),jr=h(t),ee=n(t,"H2",{class:!0});var Hr=i(ee);de=n(Hr,"A",{id:!0,class:!0,href:!0});var Dn=i(de);Yt=n(Dn,"SPAN",{});var qn=i(Yt);w(Ne.$$.fragment,qn),qn.forEach(r),Dn.forEach(r),Pa=h(Hr),Kt=n(Hr,"SPAN",{});var An=i(Kt);Ma=a(An,"TrOCRProcessor"),An.forEach(r),Hr.forEach(r),zr=h(t),b=n(t,"DIV",{class:!0});var M=i(b);w(Se.$$.fragment,M),ja=h(M),Qt=n(M,"P",{});var In=i(Qt);za=a(In,"Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),In.forEach(r),La=h(M),P=n(M,"P",{});var L=i(P);gt=n(L,"A",{href:!0});var Vn=i(gt);Fa=a(Vn,"TrOCRProcessor"),Vn.forEach(r),Da=a(L," offers all the functionalities of ["),er=n(L,"CODE",{});var Nn=i(er);qa=a(Nn,"ViTFeatureExtractor"),Nn.forEach(r),Aa=a(L,"/"),tr=n(L,"CODE",{});var Sn=i(tr);Ia=a(Sn,"DeiTFeatureExtractor"),Sn.forEach(r),Va=a(L,`] and
[`),rr=n(L,"CODE",{});var Wn=i(rr);Na=a(Wn,"RobertaTokenizer"),Wn.forEach(r),Sa=a(L,"/"),or=n(L,"CODE",{});var Bn=i(or);Wa=a(Bn,"XLMRobertaTokenizer"),Bn.forEach(r),Ba=a(L,"]. See the "),We=n(L,"A",{href:!0});var Bs=i(We);ar=n(Bs,"STRONG",{});var Hn=i(ar);Ha=a(Hn,"call"),Hn.forEach(r),Ua=a(Bs,"()"),Bs.forEach(r),Xa=a(L," and "),_t=n(L,"A",{href:!0});var Un=i(_t);Ga=a(Un,"decode()"),Un.forEach(r),Za=a(L,` for
more information.`),L.forEach(r),Ja=h(M),ce=n(M,"DIV",{class:!0});var Ur=i(ce);w(Be.$$.fragment,Ur),Ya=h(Ur),V=n(Ur,"P",{});var Ce=i(V);Ka=a(Ce,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),sr=n(Ce,"CODE",{});var Xn=i(sr);Qa=a(Xn,"__call__()"),Xn.forEach(r),es=a(Ce,` and returns its output. If used in the context
`),vt=n(Ce,"A",{href:!0});var Gn=i(vt);ts=a(Gn,"as_target_processor()"),Gn.forEach(r),rs=a(Ce,` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),nr=n(Ce,"CODE",{});var Zn=i(nr);os=a(Zn,"__call__"),Zn.forEach(r),as=a(Ce,". Please refer to the doctsring of the above two methods for more information."),Ce.forEach(r),Ur.forEach(r),ss=h(M),X=n(M,"DIV",{class:!0});var Pt=i(X);w(He.$$.fragment,Pt),ns=h(Pt),ir=n(Pt,"P",{});var Jn=i(ir);is=a(Jn,"Instantiate a processor associated with a pretrained model."),Jn.forEach(r),ls=h(Pt),w(he.$$.fragment,Pt),Pt.forEach(r),ds=h(M),G=n(M,"DIV",{class:!0});var Mt=i(G);w(Ue.$$.fragment,Mt),cs=h(Mt),Xe=n(Mt,"P",{});var Xr=i(Xe);hs=a(Xr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Tt=n(Xr,"A",{href:!0});var Yn=i(Tt);ms=a(Yn,"from_pretrained()"),Yn.forEach(r),ps=a(Xr," method."),Xr.forEach(r),fs=h(Mt),w(me.$$.fragment,Mt),Mt.forEach(r),us=h(M),pe=n(M,"DIV",{class:!0});var Gr=i(pe);w(Ge.$$.fragment,Gr),gs=h(Gr),Ze=n(Gr,"P",{});var Zr=i(Ze);_s=a(Zr,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),bt=n(Zr,"A",{href:!0});var Kn=i(bt);vs=a(Kn,"batch_decode()"),Kn.forEach(r),Ts=a(Zr,`. Please refer
to the docstring of this method for more information.`),Zr.forEach(r),Gr.forEach(r),bs=h(M),fe=n(M,"DIV",{class:!0});var Jr=i(fe);w(Je.$$.fragment,Jr),Cs=h(Jr),Ye=n(Jr,"P",{});var Yr=i(Ye);ws=a(Yr,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),Ct=n(Yr,"A",{href:!0});var Qn=i(Ct);ks=a(Qn,"decode()"),Qn.forEach(r),$s=a(Yr,`. Please refer to the
docstring of this method for more information.`),Yr.forEach(r),Jr.forEach(r),ys=h(M),ue=n(M,"DIV",{class:!0});var Kr=i(ue);w(Ke.$$.fragment,Kr),Os=h(Kr),lr=n(Kr,"P",{});var ei=i(lr);Rs=a(ei,"Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning TrOCR."),ei.forEach(r),Kr.forEach(r),M.forEach(r),Lr=h(t),te=n(t,"H2",{class:!0});var Qr=i(te);ge=n(Qr,"A",{id:!0,class:!0,href:!0});var ti=i(ge);dr=n(ti,"SPAN",{});var ri=i(dr);w(Qe.$$.fragment,ri),ri.forEach(r),ti.forEach(r),Es=h(Qr),cr=n(Qr,"SPAN",{});var oi=i(cr);xs=a(oi,"TrOCRForCausalLM"),oi.forEach(r),Qr.forEach(r),Fr=h(t),A=n(t,"DIV",{class:!0});var we=i(A);w(et.$$.fragment,we),Ps=h(we),N=n(we,"P",{});var ke=i(N);Ms=a(ke,"The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),wt=n(ke,"A",{href:!0});var ai=i(wt);js=a(ai,"EncoderDecoderModel"),ai.forEach(r),zs=a(ke," and "),hr=n(ke,"CODE",{});var si=i(hr);Ls=a(si,"VisionEncoderDecoder"),si.forEach(r),Fs=a(ke,`.
This model inherits from `),kt=n(ke,"A",{href:!0});var ni=i(kt);Ds=a(ni,"PreTrainedModel"),ni.forEach(r),qs=a(ke,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ke.forEach(r),As=h(we),tt=n(we,"P",{});var eo=i(tt);Is=a(eo,"This model is also a PyTorch "),rt=n(eo,"A",{href:!0,rel:!0});var ii=i(rt);Vs=a(ii,"torch.nn.Module"),ii.forEach(r),Ns=a(eo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eo.forEach(r),Ss=h(we),_e=n(we,"DIV",{class:!0});var to=i(_e);w(ot.$$.fragment,to),Ws=h(to),w(ve.$$.fragment,to),to.forEach(r),we.forEach(r),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(wi)),l(g,"id","trocr"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#trocr"),l(u,"class","relative group"),l(F,"id","overview"),l(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(F,"href","#overview"),l(z,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2109.10282"),l(ye,"rel","nofollow"),l(Oe,"href","https://en.wikipedia.org/wiki/Optical_character_recognition"),l(Oe,"rel","nofollow"),ui(re.src,Us="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/trocr_architecture.jpg")||l(re,"src",Us),l(re,"alt","drawing"),l(re,"width","600"),l(it,"href","https://arxiv.org/abs/2109.10282"),l(Re,"href","https://huggingface.co/nielsr"),l(Re,"rel","nofollow"),l(Ee,"href","https://github.com/microsoft/unilm/tree/6f60612e7cc86a2a1ae85c47231507a587ab4e01/trocr"),l(Ee,"rel","nofollow"),l(Pe,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/TrOCR"),l(Pe,"rel","nofollow"),l(Me,"href","https://paperswithcode.com/dataset/sroie"),l(Me,"rel","nofollow"),l(je,"href","https://fki.tic.heia-fr.ch/databases/iam-handwriting-database%3E"),l(je,"rel","nofollow"),l(ze,"href","https://huggingface.co/models?other=trocr%3E"),l(ze,"rel","nofollow"),l(dt,"href","vision-encoder-decoder"),l(se,"id","inference"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#inference"),l(J,"class","relative group"),l(ct,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(ht,"href","/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRProcessor"),l(qe,"href","https://huggingface.co/models?filter=trocr"),l(qe,"rel","nofollow"),l(ie,"id","transformers.TrOCRConfig"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#transformers.TrOCRConfig"),l(Y,"class","relative group"),l(pt,"href","/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRForCausalLM"),l(Ve,"href","https://huggingface.co/microsoft/trocr-base-handwritten"),l(Ve,"rel","nofollow"),l(ft,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),l(ut,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"id","transformers.TrOCRProcessor"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.TrOCRProcessor"),l(ee,"class","relative group"),l(gt,"href","/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRProcessor"),l(We,"href","/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRProcessor.__call__"),l(_t,"href","/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRProcessor.decode"),l(vt,"href","/docs/transformers/pr_17196/en/model_doc/trocr#transformers.TrOCRProcessor.as_target_processor"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Tt,"href","/docs/transformers/pr_17196/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(bt,"href","/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ct,"href","/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),l(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ge,"id","transformers.TrOCRForCausalLM"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#transformers.TrOCRForCausalLM"),l(te,"class","relative group"),l(wt,"href","/docs/transformers/pr_17196/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(kt,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),l(rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(rt,"rel","nofollow"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,f),p(t,E,d),p(t,u,d),e(u,g),e(g,T),k(m,T,null),e(u,_),e(u,D),e(D,j),p(t,R,d),p(t,z,d),e(z,F),e(F,zt),k($e,zt,null),e(z,ro),e(z,Lt),e(Lt,oo),p(t,ur,d),p(t,W,d),e(W,ao),e(W,ye),e(ye,so),e(W,no),e(W,Oe),e(Oe,io),e(W,lo),p(t,gr,d),p(t,st,d),e(st,co),p(t,_r,d),p(t,nt,d),e(nt,Ft),e(Ft,ho),p(t,vr,d),p(t,re,d),p(t,Tr,d),p(t,oe,d),e(oe,mo),e(oe,it),e(it,po),e(oe,fo),p(t,br,d),p(t,ae,d),e(ae,uo),e(ae,Dt),e(Dt,go),e(ae,_o),p(t,Cr,d),p(t,B,d),e(B,vo),e(B,Re),e(Re,To),e(B,bo),e(B,Ee),e(Ee,Co),e(B,wo),p(t,wr,d),p(t,lt,d),e(lt,ko),p(t,kr,d),p(t,H,d),e(H,xe),e(xe,$o),e(xe,Pe),e(Pe,yo),e(xe,Oo),e(H,Ro),e(H,I),e(I,Eo),e(I,Me),e(Me,xo),e(I,Po),e(I,je),e(je,Mo),e(I,jo),e(I,ze),e(ze,zo),e(I,Lo),e(H,Fo),e(H,Le),e(Le,Do),e(Le,dt),e(dt,qo),e(Le,Ao),p(t,$r,d),p(t,J,d),e(J,se),e(se,qt),k(Fe,qt,null),e(J,Io),e(J,At),e(At,Vo),p(t,yr,d),p(t,U,d),e(U,No),e(U,It),e(It,So),e(U,Wo),e(U,ct),e(ct,Bo),e(U,Ho),p(t,Or,d),p(t,v,d),e(v,Uo),e(v,Vt),e(Vt,Xo),e(v,Go),e(v,Nt),e(Nt,Zo),e(v,Jo),e(v,St),e(St,Yo),e(v,Ko),e(v,Wt),e(Wt,Qo),e(v,ea),e(v,ht),e(ht,ta),e(v,ra),e(v,Bt),e(Bt,oa),e(v,aa),e(v,Ht),e(Ht,sa),e(v,na),e(v,Ut),e(Ut,ia),e(v,la),e(v,Xt),e(Xt,da),e(v,ca),p(t,Rr,d),p(t,mt,d),e(mt,Gt),e(Gt,ha),p(t,Er,d),k(De,t,d),p(t,xr,d),p(t,ne,d),e(ne,ma),e(ne,qe),e(qe,pa),e(ne,fa),p(t,Pr,d),p(t,Y,d),e(Y,ie),e(ie,Zt),k(Ae,Zt,null),e(Y,ua),e(Y,Jt),e(Jt,ga),p(t,Mr,d),p(t,q,d),k(Ie,q,null),e(q,_a),e(q,K),e(K,va),e(K,pt),e(pt,Ta),e(K,ba),e(K,Ve),e(Ve,Ca),e(K,wa),e(q,ka),e(q,Q),e(Q,$a),e(Q,ft),e(ft,ya),e(Q,Oa),e(Q,ut),e(ut,Ra),e(Q,Ea),e(q,xa),k(le,q,null),p(t,jr,d),p(t,ee,d),e(ee,de),e(de,Yt),k(Ne,Yt,null),e(ee,Pa),e(ee,Kt),e(Kt,Ma),p(t,zr,d),p(t,b,d),k(Se,b,null),e(b,ja),e(b,Qt),e(Qt,za),e(b,La),e(b,P),e(P,gt),e(gt,Fa),e(P,Da),e(P,er),e(er,qa),e(P,Aa),e(P,tr),e(tr,Ia),e(P,Va),e(P,rr),e(rr,Na),e(P,Sa),e(P,or),e(or,Wa),e(P,Ba),e(P,We),e(We,ar),e(ar,Ha),e(We,Ua),e(P,Xa),e(P,_t),e(_t,Ga),e(P,Za),e(b,Ja),e(b,ce),k(Be,ce,null),e(ce,Ya),e(ce,V),e(V,Ka),e(V,sr),e(sr,Qa),e(V,es),e(V,vt),e(vt,ts),e(V,rs),e(V,nr),e(nr,os),e(V,as),e(b,ss),e(b,X),k(He,X,null),e(X,ns),e(X,ir),e(ir,is),e(X,ls),k(he,X,null),e(b,ds),e(b,G),k(Ue,G,null),e(G,cs),e(G,Xe),e(Xe,hs),e(Xe,Tt),e(Tt,ms),e(Xe,ps),e(G,fs),k(me,G,null),e(b,us),e(b,pe),k(Ge,pe,null),e(pe,gs),e(pe,Ze),e(Ze,_s),e(Ze,bt),e(bt,vs),e(Ze,Ts),e(b,bs),e(b,fe),k(Je,fe,null),e(fe,Cs),e(fe,Ye),e(Ye,ws),e(Ye,Ct),e(Ct,ks),e(Ye,$s),e(b,ys),e(b,ue),k(Ke,ue,null),e(ue,Os),e(ue,lr),e(lr,Rs),p(t,Lr,d),p(t,te,d),e(te,ge),e(ge,dr),k(Qe,dr,null),e(te,Es),e(te,cr),e(cr,xs),p(t,Fr,d),p(t,A,d),k(et,A,null),e(A,Ps),e(A,N),e(N,Ms),e(N,wt),e(wt,js),e(N,zs),e(N,hr),e(hr,Ls),e(N,Fs),e(N,kt),e(kt,Ds),e(N,qs),e(A,As),e(A,tt),e(tt,Is),e(tt,rt),e(rt,Vs),e(tt,Ns),e(A,Ss),e(A,_e),k(ot,_e,null),e(_e,Ws),k(ve,_e,null),Dr=!0},p(t,[d]){const at={};d&2&&(at.$$scope={dirty:d,ctx:t}),le.$set(at);const mr={};d&2&&(mr.$$scope={dirty:d,ctx:t}),he.$set(mr);const pr={};d&2&&(pr.$$scope={dirty:d,ctx:t}),me.$set(pr);const fr={};d&2&&(fr.$$scope={dirty:d,ctx:t}),ve.$set(fr)},i(t){Dr||($(m.$$.fragment,t),$($e.$$.fragment,t),$(Fe.$$.fragment,t),$(De.$$.fragment,t),$(Ae.$$.fragment,t),$(Ie.$$.fragment,t),$(le.$$.fragment,t),$(Ne.$$.fragment,t),$(Se.$$.fragment,t),$(Be.$$.fragment,t),$(He.$$.fragment,t),$(he.$$.fragment,t),$(Ue.$$.fragment,t),$(me.$$.fragment,t),$(Ge.$$.fragment,t),$(Je.$$.fragment,t),$(Ke.$$.fragment,t),$(Qe.$$.fragment,t),$(et.$$.fragment,t),$(ot.$$.fragment,t),$(ve.$$.fragment,t),Dr=!0)},o(t){y(m.$$.fragment,t),y($e.$$.fragment,t),y(Fe.$$.fragment,t),y(De.$$.fragment,t),y(Ae.$$.fragment,t),y(Ie.$$.fragment,t),y(le.$$.fragment,t),y(Ne.$$.fragment,t),y(Se.$$.fragment,t),y(Be.$$.fragment,t),y(He.$$.fragment,t),y(he.$$.fragment,t),y(Ue.$$.fragment,t),y(me.$$.fragment,t),y(Ge.$$.fragment,t),y(Je.$$.fragment,t),y(Ke.$$.fragment,t),y(Qe.$$.fragment,t),y(et.$$.fragment,t),y(ot.$$.fragment,t),y(ve.$$.fragment,t),Dr=!1},d(t){r(f),t&&r(E),t&&r(u),O(m),t&&r(R),t&&r(z),O($e),t&&r(ur),t&&r(W),t&&r(gr),t&&r(st),t&&r(_r),t&&r(nt),t&&r(vr),t&&r(re),t&&r(Tr),t&&r(oe),t&&r(br),t&&r(ae),t&&r(Cr),t&&r(B),t&&r(wr),t&&r(lt),t&&r(kr),t&&r(H),t&&r($r),t&&r(J),O(Fe),t&&r(yr),t&&r(U),t&&r(Or),t&&r(v),t&&r(Rr),t&&r(mt),t&&r(Er),O(De,t),t&&r(xr),t&&r(ne),t&&r(Pr),t&&r(Y),O(Ae),t&&r(Mr),t&&r(q),O(Ie),O(le),t&&r(jr),t&&r(ee),O(Ne),t&&r(zr),t&&r(b),O(Se),O(Be),O(He),O(he),O(Ue),O(me),O(Ge),O(Je),O(Ke),t&&r(Lr),t&&r(te),O(Qe),t&&r(Fr),t&&r(A),O(et),O(ot),O(ve)}}}const wi={local:"trocr",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.TrOCRConfig",title:"TrOCRConfig"},{local:"transformers.TrOCRProcessor",title:"TrOCRProcessor"},{local:"transformers.TrOCRForCausalLM",title:"TrOCRForCausalLM"}],title:"TrOCR"};function ki(S){return gi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pi extends hi{constructor(f){super();mi(this,f,ki,Ci,pi,{})}}export{Pi as default,wi as metadata};
