import{S as Sp,i as Np,s as Ip,e as a,k as l,w as v,t as n,M as Lp,c as s,d as t,m as p,a as d,x as y,h as r,b as c,G as e,g as u,y as k,q as w,o as E,B as T,v as Op,L as dt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Vc}from"../../chunks/Tip-hf-doc-builder.js";import{D as W}from"../../chunks/Docstring-hf-doc-builder.js";import{C as V}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as st}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Bp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

# Initializing a BERT bert-base-uncased style configuration
config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Bert2Bert model from the bert-base-uncased style configurations
model = EncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = EncoderDecoderConfig.from_pretrained("my-model")
model = EncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bert2Bert model from the bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = EncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:dt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Rp(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Wp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "bert-base-uncased", "bert-base-uncased"
)  # initialize Bert2Bert from pre-trained checkpoints

# training
model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

input_ids = tokenizer("This is a really long text", return_tensors="pt").input_ids
labels = tokenizer("This is the corresponding summary", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2bert")
model = EncoderDecoderModel.from_pretrained("bert2bert")

# generation
generated = model.generate(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize Bert2Bert from pre-trained checkpoints</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;This is a really long text&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is the corresponding summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:dt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Vp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import EncoderDecoderModel

# initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")
# saving model after fine-tuning
model.save_pretrained("./bert2bert")
# load fine-tuned model
model = EncoderDecoderModel.from_pretrained("./bert2bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:dt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Gp(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Up(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")

# forward
input_ids = tokenizer.encode(
    "Hello, my dog is cute", add_special_tokens=True, return_tensors="tf"
)  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

# training
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2gpt2")
model = TFEncoderDecoderModel.from_pretrained("bert2gpt2")

# generation
generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer.encode(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:dt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Hp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import TFEncoderDecoderModel

# initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = TFEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:dt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Zp(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Yp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

# load a fine-tuned bert2gpt2 model
model = FlaxEncoderDecoderModel.from_pretrained("patrickvonplaten/bert2gpt2-cnn_dailymail-fp16")
# load input & output tokenizer
tokenizer_input = BertTokenizer.from_pretrained("bert-base-cased")
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

article = '''Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
singing a racist chant. SAE's national chapter suspended the students,
but University of Oklahoma President David Boren took it a step further,
saying the university's affiliation with the fraternity is permanently done.'''

input_ids = tokenizer_input(article, add_special_tokens=True, return_tensors="np").input_ids

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

sequences = model.generate(input_ids, num_beams=4, max_length=12).sequences

summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)[0]
assert summary == "SAS Alpha Epsilon suspended Sigma Alpha Epsilon members"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned bert2gpt2 model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2gpt2-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load input &amp; output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_input = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&#x27;&#x27;&#x27;Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
<span class="hljs-meta">&gt;&gt;&gt; </span>singing a racist chant. SAE&#x27;s national chapter suspended the students,
<span class="hljs-meta">&gt;&gt;&gt; </span>but University of Oklahoma President David Boren took it a step further,
<span class="hljs-meta">&gt;&gt;&gt; </span>saying the university&#x27;s affiliation with the fraternity is permanently done.&#x27;&#x27;&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_input(article, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:dt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Jp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import FlaxEncoderDecoderModel

# initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = FlaxEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:dt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Kp(q){let h,$,_,f,b,i,g,S,fa,dr,oe,we,Qt,oo,ua,Xt,ga,ir,Ee,_a,it,ba,va,cr,Te,ya,to,ka,wa,lr,$e,Ea,ct,Ta,$a,pr,U,Ma,lt,Da,ja,no,xa,qa,mr,te,Me,en,ro,za,ao,Fa,on,Pa,Aa,hr,ne,pt,Ca,Sa,mt,Na,Ia,fr,so,ur,re,De,tn,io,La,co,Oa,nn,Ba,Ra,gr,M,ht,Wa,Va,rn,Ga,Ua,an,Ha,Za,sn,Ya,Ja,dn,Ka,Qa,ft,Xa,es,je,os,cn,ts,ns,ln,rs,as,ut,ss,ds,_r,lo,br,ae,xe,pn,po,is,mo,cs,mn,ls,ps,vr,H,ms,hn,hs,fs,fn,us,gs,yr,qe,_s,un,bs,vs,kr,ho,wr,se,ze,gn,fo,ys,uo,ks,_n,ws,Es,Er,de,bn,Ts,$s,vn,Ms,Ds,Tr,go,$r,ie,Fe,yn,_o,js,kn,xs,Mr,N,qs,wn,zs,Fs,En,Ps,As,Tn,Cs,Ss,$n,Ns,Is,Dr,bo,jr,Pe,Ls,vo,Os,Bs,xr,Z,Rs,yo,Ws,Vs,ko,Gs,Us,qr,ce,Ae,Mn,wo,Hs,Dn,Zs,zr,C,Eo,Ys,Ce,gt,Js,Ks,_t,Qs,Xs,ed,le,od,bt,td,nd,vt,rd,ad,sd,Se,dd,Ne,To,id,$o,cd,yt,ld,pd,md,Ie,Mo,hd,pe,fd,jn,ud,gd,xn,_d,bd,Fr,me,Le,qn,Do,vd,zn,yd,Pr,D,jo,kd,he,wd,kt,Ed,Td,wt,$d,Md,Dd,xo,jd,qo,xd,qd,zd,Fn,Fd,Pd,zo,Ad,Et,Cd,Sd,Nd,Fo,Id,Po,Ld,Od,Bd,Y,Tt,Rd,Wd,Pn,Vd,Gd,An,Ud,Hd,Zd,I,Ao,Yd,fe,Jd,$t,Kd,Qd,Cn,Xd,ei,oi,Oe,ti,Be,ni,L,Co,ri,Sn,ai,si,ue,di,Nn,ii,ci,In,li,pi,mi,Re,Ar,ge,We,Ln,So,hi,On,fi,Cr,j,No,ui,_e,gi,Mt,_i,bi,Dt,vi,yi,ki,Io,wi,Lo,Ei,Ti,$i,Bn,Mi,Di,Oo,ji,jt,xi,qi,zi,Bo,Fi,Ro,Pi,Ai,Ci,J,xt,Si,Ni,qt,Ii,Li,zt,Oi,Bi,Ri,O,Wo,Wi,be,Vi,Ft,Gi,Ui,Rn,Hi,Zi,Yi,Ve,Ji,Ge,Ki,K,Vo,Qi,Wn,Xi,ec,Ue,Sr,ve,He,Vn,Go,oc,Gn,tc,Nr,x,Uo,nc,ye,rc,Pt,ac,sc,At,dc,ic,cc,Ho,lc,Zo,pc,mc,hc,Un,fc,uc,Yo,gc,Ct,_c,bc,vc,Jo,yc,Ko,kc,wc,Ec,Q,St,Tc,$c,Hn,Mc,Dc,Zn,jc,xc,qc,B,Qo,zc,ke,Fc,Nt,Pc,Ac,Yn,Cc,Sc,Nc,Ze,Ic,Ye,Lc,X,Xo,Oc,Jn,Bc,Rc,Je,Ir;return i=new G({}),oo=new G({}),ro=new G({}),so=new V({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = EncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)`}}),io=new G({}),lo=new V({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),po=new G({}),ho=new V({props:{code:`from transformers import AutoTokenizer, EncoderDecoderModel

# load a fine-tuned seq2seq model and corresponding tokenizer
model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert_cnn_daily_mail")
tokenizer = AutoTokenizer.from_pretrained("patrickvonplaten/bert2bert_cnn_daily_mail")

# let's perform inference on a long piece of text
ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
input_ids = tokenizer(ARTICLE_TO_SUMMARIZE, return_tensors="pt").input_ids

# autoregressively generate summary (uses greedy decoding by default)
generated_ids = model.generate(input_ids)
generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
print(generated_text)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned seq2seq model and corresponding tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert_cnn_daily_mail&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert_cnn_daily_mail&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on a long piece of text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate summary (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
nearly <span class="hljs-number">800</span> thousand customers were affected by the shutoffs. the aim <span class="hljs-keyword">is</span> to reduce the risk of wildfires. nearly <span class="hljs-number">800</span>, <span class="hljs-number">000</span> customers were expected to be affected by high winds amid dry conditions. pg &amp; e said it scheduled the blackouts to last through at least midday tomorrow.`}}),fo=new G({}),go=new V({props:{code:`# a workaround to load from pytorch checkpoint
from transformers import EncoderDecoderModel, TFEncoderDecoderModel

_model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert-cnn_dailymail-fp16")

_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")

model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># a workaround to load from pytorch checkpoint</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>_model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert-cnn_dailymail-fp16&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),_o=new G({}),bo=new V({props:{code:`from transformers import BertTokenizer, EncoderDecoderModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")

model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id

input_ids = tokenizer(
    "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was  finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft).Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",
    return_tensors="pt",
).input_ids

labels = tokenizer(
    "the eiffel tower surpassed the washington monument to become the tallest structure in the world. it was the first structure to reach a height of 300 metres in paris in 1930. it is now taller than the chrysler building by 5. 2 metres ( 17 ft ) and is the second tallest free - standing structure in paris.",
    return_tensors="pt",
).input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was  finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft).Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the eiffel tower surpassed the washington monument to become the tallest structure in the world. it was the first structure to reach a height of 300 metres in paris in 1930. it is now taller than the chrysler building by 5. 2 metres ( 17 ft ) and is the second tallest free - standing structure in paris.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss`}}),wo=new G({}),Eo=new W({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),Se=new st({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[Bp]},$$scope:{ctx:q}}}),To=new W({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Mo=new W({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Do=new G({}),jo=new W({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),Ao=new W({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.EncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.EncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Oe=new Vc({props:{$$slots:{default:[Rp]},$$scope:{ctx:q}}}),Be=new st({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[Wp]},$$scope:{ctx:q}}}),Co=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
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
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaining positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),Re=new st({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Vp]},$$scope:{ctx:q}}}),So=new G({}),No=new W({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),Wo=new W({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEncoderDecoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as \`**decoder_kwargs&#x201C; for the decoder forward function.</li>
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L495",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ve=new Vc({props:{$$slots:{default:[Gp]},$$scope:{ctx:q}}}),Ge=new st({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[Up]},$$scope:{ctx:q}}}),Vo=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),Ue=new st({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Hp]},$$scope:{ctx:q}}}),Go=new G({}),Uo=new W({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),Qo=new W({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.encoder.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L628",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Ze=new Vc({props:{$$slots:{default:[Zp]},$$scope:{ctx:q}}}),Ye=new st({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[Yp]},$$scope:{ctx:q}}}),Xo=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Je=new st({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Jp]},$$scope:{ctx:q}}}),{c(){h=a("meta"),$=l(),_=a("h1"),f=a("a"),b=a("span"),v(i.$$.fragment),g=l(),S=a("span"),fa=n("Encoder Decoder Models"),dr=l(),oe=a("h2"),we=a("a"),Qt=a("span"),v(oo.$$.fragment),ua=l(),Xt=a("span"),ga=n("Overview"),ir=l(),Ee=a("p"),_a=n("The "),it=a("a"),ba=n("EncoderDecoderModel"),va=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),cr=l(),Te=a("p"),ya=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),to=a("a"),ka=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),wa=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),lr=l(),$e=a("p"),Ea=n("After such an "),ct=a("a"),Ta=n("EncoderDecoderModel"),$a=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),pr=l(),U=a("p"),Ma=n("An application of this architecture could be to leverage two pretrained "),lt=a("a"),Da=n("BertModel"),ja=n(` as the encoder
and decoder for a summarization model as was shown in: `),no=a("a"),xa=n("Text Summarization with Pretrained Encoders"),qa=n(" by Yang Liu and Mirella Lapata."),mr=l(),te=a("h2"),Me=a("a"),en=a("span"),v(ro.$$.fragment),za=l(),ao=a("span"),Fa=n("Randomly initializing "),on=a("code"),Pa=n("EncoderDecoderModel"),Aa=n(" from model configurations."),hr=l(),ne=a("p"),pt=a("a"),Ca=n("EncoderDecoderModel"),Sa=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),mt=a("a"),Na=n("BertModel"),Ia=n(" configuration for both the encoder and the decoder."),fr=l(),v(so.$$.fragment),ur=l(),re=a("h2"),De=a("a"),tn=a("span"),v(io.$$.fragment),La=l(),co=a("span"),Oa=n("Initialising "),nn=a("code"),Ba=n("EncoderDecoderModel"),Ra=n(" from a pretrained encoder and a pretrained decoder."),gr=l(),M=a("p"),ht=a("a"),Wa=n("EncoderDecoderModel"),Va=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),rn=a("em"),Ga=n("e.g."),Ua=n(" BERT, can serve as the encoder and both pretrained auto-encoding models, "),an=a("em"),Ha=n("e.g."),Za=n(" BERT, pretrained causal language models, "),sn=a("em"),Ya=n("e.g."),Ja=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),dn=a("em"),Ka=n("e.g."),Qa=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),ft=a("a"),Xa=n("EncoderDecoderModel"),es=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),je=a("a"),os=n("the "),cn=a("em"),ts=n("Warm-starting-encoder-decoder blog post"),ns=n(`.
To do so, the `),ln=a("code"),rs=n("EncoderDecoderModel"),as=n(" class provides a "),ut=a("a"),ss=n("EncoderDecoderModel.from_encoder_decoder_pretrained()"),ds=n(" method."),_r=l(),v(lo.$$.fragment),br=l(),ae=a("h2"),xe=a("a"),pn=a("span"),v(po.$$.fragment),is=l(),mo=a("span"),cs=n("Loading an existing "),mn=a("code"),ls=n("EncoderDecoderModel"),ps=n(" checkpoint and perform inference."),vr=l(),H=a("p"),ms=n("To load fine-tuned checkpoints of the "),hn=a("code"),hs=n("EncoderDecoderModel"),fs=n(" class, [\u2018EncoderDecoderModel`] provides the "),fn=a("code"),us=n("from_pretrained(...)"),gs=n(" method just like any other model architecture in Transformers."),yr=l(),qe=a("p"),_s=n("To perform inference, one uses the "),un=a("code"),bs=n("generate"),vs=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),kr=l(),v(ho.$$.fragment),wr=l(),se=a("h2"),ze=a("a"),gn=a("span"),v(fo.$$.fragment),ys=l(),uo=a("span"),ks=n("Loading a PyTorch checkpoint into "),_n=a("code"),ws=n("TFEncoderDecoderModel"),Es=n("."),Er=l(),de=a("p"),bn=a("code"),Ts=n("TFEncoderDecoderModel.from_pretrained()"),$s=n(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),vn=a("code"),Ms=n("from_pt=True"),Ds=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Tr=l(),v(go.$$.fragment),$r=l(),ie=a("h2"),Fe=a("a"),yn=a("span"),v(_o.$$.fragment),js=l(),kn=a("span"),xs=n("Training"),Mr=l(),N=a("p"),qs=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),wn=a("code"),zs=n("input_ids"),Fs=n(` (which are the
`),En=a("code"),Ps=n("input_ids"),As=n(" of the encoded input sequence) and "),Tn=a("code"),Cs=n("labels"),Ss=n(" (which are the "),$n=a("code"),Ns=n("input_ids"),Is=n(` of the encoded
target sequence).`),Dr=l(),v(bo.$$.fragment),jr=l(),Pe=a("p"),Ls=n("Detailed "),vo=a("a"),Os=n("colab"),Bs=n(" for training."),xr=l(),Z=a("p"),Rs=n("This model was contributed by "),yo=a("a"),Ws=n("thomwolf"),Vs=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),ko=a("a"),Gs=n("ydshieh"),Us=n("."),qr=l(),ce=a("h2"),Ae=a("a"),Mn=a("span"),v(wo.$$.fragment),Hs=l(),Dn=a("span"),Zs=n("EncoderDecoderConfig"),zr=l(),C=a("div"),v(Eo.$$.fragment),Ys=l(),Ce=a("p"),gt=a("a"),Js=n("EncoderDecoderConfig"),Ks=n(" is the configuration class to store the configuration of a "),_t=a("a"),Qs=n("EncoderDecoderModel"),Xs=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),ed=l(),le=a("p"),od=n("Configuration objects inherit from "),bt=a("a"),td=n("PretrainedConfig"),nd=n(` and can be used to control the model outputs. Read the
documentation from `),vt=a("a"),rd=n("PretrainedConfig"),ad=n(" for more information."),sd=l(),v(Se.$$.fragment),dd=l(),Ne=a("div"),v(To.$$.fragment),id=l(),$o=a("p"),cd=n("Instantiate a "),yt=a("a"),ld=n("EncoderDecoderConfig"),pd=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),md=l(),Ie=a("div"),v(Mo.$$.fragment),hd=l(),pe=a("p"),fd=n("Serializes this instance to a Python dictionary. Override the default "),jn=a("em"),ud=n("to_dict()"),gd=n(" from "),xn=a("em"),_d=n("PretrainedConfig"),bd=n("."),Fr=l(),me=a("h2"),Le=a("a"),qn=a("span"),v(Do.$$.fragment),vd=l(),zn=a("span"),yd=n("EncoderDecoderModel"),Pr=l(),D=a("div"),v(jo.$$.fragment),kd=l(),he=a("p"),wd=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),kt=a("a"),Ed=n("from_pretrained()"),Td=n(" function and the decoder is loaded via "),wt=a("a"),$d=n("from_pretrained()"),Md=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Dd=l(),xo=a("p"),jd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),qo=a("a"),xd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),qd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zd=l(),Fn=a("p"),Fd=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Pd=l(),zo=a("p"),Ad=n("This model inherits from "),Et=a("a"),Cd=n("PreTrainedModel"),Sd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd=l(),Fo=a("p"),Id=n("This model is also a PyTorch "),Po=a("a"),Ld=n("torch.nn.Module"),Od=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bd=l(),Y=a("p"),Tt=a("a"),Rd=n("EncoderDecoderModel"),Wd=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Pn=a("em"),Vd=n("~transformers.AutoModel.from_pretrained"),Gd=n(` class method for the encoder and
:meth`),An=a("em"),Ud=n("~transformers.AutoModelForCausalLM.from_pretrained"),Hd=n(" class method for the decoder."),Zd=l(),I=a("div"),v(Ao.$$.fragment),Yd=l(),fe=a("p"),Jd=n("The "),$t=a("a"),Kd=n("EncoderDecoderModel"),Qd=n(" forward method, overrides the "),Cn=a("code"),Xd=n("__call__"),ei=n(" special method."),oi=l(),v(Oe.$$.fragment),ti=l(),v(Be.$$.fragment),ni=l(),L=a("div"),v(Co.$$.fragment),ri=l(),Sn=a("p"),ai=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),si=l(),ue=a("p"),di=n("The model is set in evaluation mode by default using "),Nn=a("code"),ii=n("model.eval()"),ci=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),In=a("code"),li=n("model.train()"),pi=n("."),mi=l(),v(Re.$$.fragment),Ar=l(),ge=a("h2"),We=a("a"),Ln=a("span"),v(So.$$.fragment),hi=l(),On=a("span"),fi=n("TFEncoderDecoderModel"),Cr=l(),j=a("div"),v(No.$$.fragment),ui=l(),_e=a("p"),gi=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Mt=a("a"),_i=n("from_pretrained()"),bi=n(" function and the decoder is loaded via "),Dt=a("a"),vi=n("from_pretrained()"),yi=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ki=l(),Io=a("p"),wi=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Lo=a("a"),Ei=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ti=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),$i=l(),Bn=a("p"),Mi=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Di=l(),Oo=a("p"),ji=n("This model inherits from "),jt=a("a"),xi=n("TFPreTrainedModel"),qi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zi=l(),Bo=a("p"),Fi=n("This model is also a "),Ro=a("a"),Pi=n("tf.keras.Model"),Ai=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ci=l(),J=a("p"),xt=a("a"),Si=n("TFEncoderDecoderModel"),Ni=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),qt=a("a"),Ii=n("from_pretrained()"),Li=n(" class method for the encoder and "),zt=a("a"),Oi=n("from_pretrained()"),Bi=n(` class
method for the decoder.`),Ri=l(),O=a("div"),v(Wo.$$.fragment),Wi=l(),be=a("p"),Vi=n("The "),Ft=a("a"),Gi=n("TFEncoderDecoderModel"),Ui=n(" forward method, overrides the "),Rn=a("code"),Hi=n("__call__"),Zi=n(" special method."),Yi=l(),v(Ve.$$.fragment),Ji=l(),v(Ge.$$.fragment),Ki=l(),K=a("div"),v(Vo.$$.fragment),Qi=l(),Wn=a("p"),Xi=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ec=l(),v(Ue.$$.fragment),Sr=l(),ve=a("h2"),He=a("a"),Vn=a("span"),v(Go.$$.fragment),oc=l(),Gn=a("span"),tc=n("FlaxEncoderDecoderModel"),Nr=l(),x=a("div"),v(Uo.$$.fragment),nc=l(),ye=a("p"),rc=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Pt=a("a"),ac=n("from_pretrained()"),sc=n(" function and the decoder is loaded via "),At=a("a"),dc=n("from_pretrained()"),ic=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),cc=l(),Ho=a("p"),lc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Zo=a("a"),pc=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),mc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),hc=l(),Un=a("p"),fc=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),uc=l(),Yo=a("p"),gc=n("This model inherits from "),Ct=a("a"),_c=n("FlaxPreTrainedModel"),bc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=l(),Jo=a("p"),yc=n(`This model is also a Flax Linen
`),Ko=a("a"),kc=n("flax.nn.Module"),wc=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ec=l(),Q=a("p"),St=a("a"),Tc=n("FlaxEncoderDecoderModel"),$c=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Hn=a("em"),Mc=n("~transformers.FlaxAutoModel.from_pretrained"),Dc=n(` class method for the
encoder and :meth`),Zn=a("em"),jc=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),xc=n(" class method for the decoder."),qc=l(),B=a("div"),v(Qo.$$.fragment),zc=l(),ke=a("p"),Fc=n("The "),Nt=a("a"),Pc=n("FlaxEncoderDecoderModel"),Ac=n(" forward method, overrides the "),Yn=a("code"),Cc=n("__call__"),Sc=n(" special method."),Nc=l(),v(Ze.$$.fragment),Ic=l(),v(Ye.$$.fragment),Lc=l(),X=a("div"),v(Xo.$$.fragment),Oc=l(),Jn=a("p"),Bc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Rc=l(),v(Je.$$.fragment),this.h()},l(o){const m=Lp('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),$=p(o),_=s(o,"H1",{class:!0});var et=d(_);f=s(et,"A",{id:!0,class:!0,href:!0});var Kn=d(f);b=s(Kn,"SPAN",{});var Qn=d(b);y(i.$$.fragment,Qn),Qn.forEach(t),Kn.forEach(t),g=p(et),S=s(et,"SPAN",{});var Xn=d(S);fa=r(Xn,"Encoder Decoder Models"),Xn.forEach(t),et.forEach(t),dr=p(o),oe=s(o,"H2",{class:!0});var ot=d(oe);we=s(ot,"A",{id:!0,class:!0,href:!0});var er=d(we);Qt=s(er,"SPAN",{});var or=d(Qt);y(oo.$$.fragment,or),or.forEach(t),er.forEach(t),ua=p(ot),Xt=s(ot,"SPAN",{});var tr=d(Xt);ga=r(tr,"Overview"),tr.forEach(t),ot.forEach(t),ir=p(o),Ee=s(o,"P",{});var tt=d(Ee);_a=r(tt,"The "),it=s(tt,"A",{href:!0});var nr=d(it);ba=r(nr,"EncoderDecoderModel"),nr.forEach(t),va=r(tt,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),tt.forEach(t),cr=p(o),Te=s(o,"P",{});var Lr=d(Te);ya=r(Lr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),to=s(Lr,"A",{href:!0,rel:!0});var Gc=d(to);ka=r(Gc,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Gc.forEach(t),wa=r(Lr,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Lr.forEach(t),lr=p(o),$e=s(o,"P",{});var Or=d($e);Ea=r(Or,"After such an "),ct=s(Or,"A",{href:!0});var Uc=d(ct);Ta=r(Uc,"EncoderDecoderModel"),Uc.forEach(t),$a=r(Or,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Or.forEach(t),pr=p(o),U=s(o,"P",{});var It=d(U);Ma=r(It,"An application of this architecture could be to leverage two pretrained "),lt=s(It,"A",{href:!0});var Hc=d(lt);Da=r(Hc,"BertModel"),Hc.forEach(t),ja=r(It,` as the encoder
and decoder for a summarization model as was shown in: `),no=s(It,"A",{href:!0,rel:!0});var Zc=d(no);xa=r(Zc,"Text Summarization with Pretrained Encoders"),Zc.forEach(t),qa=r(It," by Yang Liu and Mirella Lapata."),It.forEach(t),mr=p(o),te=s(o,"H2",{class:!0});var Br=d(te);Me=s(Br,"A",{id:!0,class:!0,href:!0});var Yc=d(Me);en=s(Yc,"SPAN",{});var Jc=d(en);y(ro.$$.fragment,Jc),Jc.forEach(t),Yc.forEach(t),za=p(Br),ao=s(Br,"SPAN",{});var Rr=d(ao);Fa=r(Rr,"Randomly initializing "),on=s(Rr,"CODE",{});var Kc=d(on);Pa=r(Kc,"EncoderDecoderModel"),Kc.forEach(t),Aa=r(Rr," from model configurations."),Rr.forEach(t),Br.forEach(t),hr=p(o),ne=s(o,"P",{});var rr=d(ne);pt=s(rr,"A",{href:!0});var Qc=d(pt);Ca=r(Qc,"EncoderDecoderModel"),Qc.forEach(t),Sa=r(rr," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),mt=s(rr,"A",{href:!0});var Xc=d(mt);Na=r(Xc,"BertModel"),Xc.forEach(t),Ia=r(rr," configuration for both the encoder and the decoder."),rr.forEach(t),fr=p(o),y(so.$$.fragment,o),ur=p(o),re=s(o,"H2",{class:!0});var Wr=d(re);De=s(Wr,"A",{id:!0,class:!0,href:!0});var el=d(De);tn=s(el,"SPAN",{});var ol=d(tn);y(io.$$.fragment,ol),ol.forEach(t),el.forEach(t),La=p(Wr),co=s(Wr,"SPAN",{});var Vr=d(co);Oa=r(Vr,"Initialising "),nn=s(Vr,"CODE",{});var tl=d(nn);Ba=r(tl,"EncoderDecoderModel"),tl.forEach(t),Ra=r(Vr," from a pretrained encoder and a pretrained decoder."),Vr.forEach(t),Wr.forEach(t),gr=p(o),M=s(o,"P",{});var z=d(M);ht=s(z,"A",{href:!0});var nl=d(ht);Wa=r(nl,"EncoderDecoderModel"),nl.forEach(t),Va=r(z," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),rn=s(z,"EM",{});var rl=d(rn);Ga=r(rl,"e.g."),rl.forEach(t),Ua=r(z," BERT, can serve as the encoder and both pretrained auto-encoding models, "),an=s(z,"EM",{});var al=d(an);Ha=r(al,"e.g."),al.forEach(t),Za=r(z," BERT, pretrained causal language models, "),sn=s(z,"EM",{});var sl=d(sn);Ya=r(sl,"e.g."),sl.forEach(t),Ja=r(z," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),dn=s(z,"EM",{});var dl=d(dn);Ka=r(dl,"e.g."),dl.forEach(t),Qa=r(z,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),ft=s(z,"A",{href:!0});var il=d(ft);Xa=r(il,"EncoderDecoderModel"),il.forEach(t),es=r(z," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),je=s(z,"A",{href:!0,rel:!0});var Wc=d(je);os=r(Wc,"the "),cn=s(Wc,"EM",{});var cl=d(cn);ts=r(cl,"Warm-starting-encoder-decoder blog post"),cl.forEach(t),Wc.forEach(t),ns=r(z,`.
To do so, the `),ln=s(z,"CODE",{});var ll=d(ln);rs=r(ll,"EncoderDecoderModel"),ll.forEach(t),as=r(z," class provides a "),ut=s(z,"A",{href:!0});var pl=d(ut);ss=r(pl,"EncoderDecoderModel.from_encoder_decoder_pretrained()"),pl.forEach(t),ds=r(z," method."),z.forEach(t),_r=p(o),y(lo.$$.fragment,o),br=p(o),ae=s(o,"H2",{class:!0});var Gr=d(ae);xe=s(Gr,"A",{id:!0,class:!0,href:!0});var ml=d(xe);pn=s(ml,"SPAN",{});var hl=d(pn);y(po.$$.fragment,hl),hl.forEach(t),ml.forEach(t),is=p(Gr),mo=s(Gr,"SPAN",{});var Ur=d(mo);cs=r(Ur,"Loading an existing "),mn=s(Ur,"CODE",{});var fl=d(mn);ls=r(fl,"EncoderDecoderModel"),fl.forEach(t),ps=r(Ur," checkpoint and perform inference."),Ur.forEach(t),Gr.forEach(t),vr=p(o),H=s(o,"P",{});var Lt=d(H);ms=r(Lt,"To load fine-tuned checkpoints of the "),hn=s(Lt,"CODE",{});var ul=d(hn);hs=r(ul,"EncoderDecoderModel"),ul.forEach(t),fs=r(Lt," class, [\u2018EncoderDecoderModel`] provides the "),fn=s(Lt,"CODE",{});var gl=d(fn);us=r(gl,"from_pretrained(...)"),gl.forEach(t),gs=r(Lt," method just like any other model architecture in Transformers."),Lt.forEach(t),yr=p(o),qe=s(o,"P",{});var Hr=d(qe);_s=r(Hr,"To perform inference, one uses the "),un=s(Hr,"CODE",{});var _l=d(un);bs=r(_l,"generate"),_l.forEach(t),vs=r(Hr," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Hr.forEach(t),kr=p(o),y(ho.$$.fragment,o),wr=p(o),se=s(o,"H2",{class:!0});var Zr=d(se);ze=s(Zr,"A",{id:!0,class:!0,href:!0});var bl=d(ze);gn=s(bl,"SPAN",{});var vl=d(gn);y(fo.$$.fragment,vl),vl.forEach(t),bl.forEach(t),ys=p(Zr),uo=s(Zr,"SPAN",{});var Yr=d(uo);ks=r(Yr,"Loading a PyTorch checkpoint into "),_n=s(Yr,"CODE",{});var yl=d(_n);ws=r(yl,"TFEncoderDecoderModel"),yl.forEach(t),Es=r(Yr,"."),Yr.forEach(t),Zr.forEach(t),Er=p(o),de=s(o,"P",{});var ar=d(de);bn=s(ar,"CODE",{});var kl=d(bn);Ts=r(kl,"TFEncoderDecoderModel.from_pretrained()"),kl.forEach(t),$s=r(ar,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),vn=s(ar,"CODE",{});var wl=d(vn);Ms=r(wl,"from_pt=True"),wl.forEach(t),Ds=r(ar,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),ar.forEach(t),Tr=p(o),y(go.$$.fragment,o),$r=p(o),ie=s(o,"H2",{class:!0});var Jr=d(ie);Fe=s(Jr,"A",{id:!0,class:!0,href:!0});var El=d(Fe);yn=s(El,"SPAN",{});var Tl=d(yn);y(_o.$$.fragment,Tl),Tl.forEach(t),El.forEach(t),js=p(Jr),kn=s(Jr,"SPAN",{});var $l=d(kn);xs=r($l,"Training"),$l.forEach(t),Jr.forEach(t),Mr=p(o),N=s(o,"P",{});var ee=d(N);qs=r(ee,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),wn=s(ee,"CODE",{});var Ml=d(wn);zs=r(Ml,"input_ids"),Ml.forEach(t),Fs=r(ee,` (which are the
`),En=s(ee,"CODE",{});var Dl=d(En);Ps=r(Dl,"input_ids"),Dl.forEach(t),As=r(ee," of the encoded input sequence) and "),Tn=s(ee,"CODE",{});var jl=d(Tn);Cs=r(jl,"labels"),jl.forEach(t),Ss=r(ee," (which are the "),$n=s(ee,"CODE",{});var xl=d($n);Ns=r(xl,"input_ids"),xl.forEach(t),Is=r(ee,` of the encoded
target sequence).`),ee.forEach(t),Dr=p(o),y(bo.$$.fragment,o),jr=p(o),Pe=s(o,"P",{});var Kr=d(Pe);Ls=r(Kr,"Detailed "),vo=s(Kr,"A",{href:!0,rel:!0});var ql=d(vo);Os=r(ql,"colab"),ql.forEach(t),Bs=r(Kr," for training."),Kr.forEach(t),xr=p(o),Z=s(o,"P",{});var Ot=d(Z);Rs=r(Ot,"This model was contributed by "),yo=s(Ot,"A",{href:!0,rel:!0});var zl=d(yo);Ws=r(zl,"thomwolf"),zl.forEach(t),Vs=r(Ot,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),ko=s(Ot,"A",{href:!0,rel:!0});var Fl=d(ko);Gs=r(Fl,"ydshieh"),Fl.forEach(t),Us=r(Ot,"."),Ot.forEach(t),qr=p(o),ce=s(o,"H2",{class:!0});var Qr=d(ce);Ae=s(Qr,"A",{id:!0,class:!0,href:!0});var Pl=d(Ae);Mn=s(Pl,"SPAN",{});var Al=d(Mn);y(wo.$$.fragment,Al),Al.forEach(t),Pl.forEach(t),Hs=p(Qr),Dn=s(Qr,"SPAN",{});var Cl=d(Dn);Zs=r(Cl,"EncoderDecoderConfig"),Cl.forEach(t),Qr.forEach(t),zr=p(o),C=s(o,"DIV",{class:!0});var R=d(C);y(Eo.$$.fragment,R),Ys=p(R),Ce=s(R,"P",{});var sr=d(Ce);gt=s(sr,"A",{href:!0});var Sl=d(gt);Js=r(Sl,"EncoderDecoderConfig"),Sl.forEach(t),Ks=r(sr," is the configuration class to store the configuration of a "),_t=s(sr,"A",{href:!0});var Nl=d(_t);Qs=r(Nl,"EncoderDecoderModel"),Nl.forEach(t),Xs=r(sr,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),sr.forEach(t),ed=p(R),le=s(R,"P",{});var Bt=d(le);od=r(Bt,"Configuration objects inherit from "),bt=s(Bt,"A",{href:!0});var Il=d(bt);td=r(Il,"PretrainedConfig"),Il.forEach(t),nd=r(Bt,` and can be used to control the model outputs. Read the
documentation from `),vt=s(Bt,"A",{href:!0});var Ll=d(vt);rd=r(Ll,"PretrainedConfig"),Ll.forEach(t),ad=r(Bt," for more information."),Bt.forEach(t),sd=p(R),y(Se.$$.fragment,R),dd=p(R),Ne=s(R,"DIV",{class:!0});var Xr=d(Ne);y(To.$$.fragment,Xr),id=p(Xr),$o=s(Xr,"P",{});var ea=d($o);cd=r(ea,"Instantiate a "),yt=s(ea,"A",{href:!0});var Ol=d(yt);ld=r(Ol,"EncoderDecoderConfig"),Ol.forEach(t),pd=r(ea,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),ea.forEach(t),Xr.forEach(t),md=p(R),Ie=s(R,"DIV",{class:!0});var oa=d(Ie);y(Mo.$$.fragment,oa),hd=p(oa),pe=s(oa,"P",{});var Rt=d(pe);fd=r(Rt,"Serializes this instance to a Python dictionary. Override the default "),jn=s(Rt,"EM",{});var Bl=d(jn);ud=r(Bl,"to_dict()"),Bl.forEach(t),gd=r(Rt," from "),xn=s(Rt,"EM",{});var Rl=d(xn);_d=r(Rl,"PretrainedConfig"),Rl.forEach(t),bd=r(Rt,"."),Rt.forEach(t),oa.forEach(t),R.forEach(t),Fr=p(o),me=s(o,"H2",{class:!0});var ta=d(me);Le=s(ta,"A",{id:!0,class:!0,href:!0});var Wl=d(Le);qn=s(Wl,"SPAN",{});var Vl=d(qn);y(Do.$$.fragment,Vl),Vl.forEach(t),Wl.forEach(t),vd=p(ta),zn=s(ta,"SPAN",{});var Gl=d(zn);yd=r(Gl,"EncoderDecoderModel"),Gl.forEach(t),ta.forEach(t),Pr=p(o),D=s(o,"DIV",{class:!0});var F=d(D);y(jo.$$.fragment,F),kd=p(F),he=s(F,"P",{});var Wt=d(he);wd=r(Wt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),kt=s(Wt,"A",{href:!0});var Ul=d(kt);Ed=r(Ul,"from_pretrained()"),Ul.forEach(t),Td=r(Wt," function and the decoder is loaded via "),wt=s(Wt,"A",{href:!0});var Hl=d(wt);$d=r(Hl,"from_pretrained()"),Hl.forEach(t),Md=r(Wt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Wt.forEach(t),Dd=p(F),xo=s(F,"P",{});var na=d(xo);jd=r(na,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),qo=s(na,"A",{href:!0,rel:!0});var Zl=d(qo);xd=r(Zl,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Zl.forEach(t),qd=r(na,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),na.forEach(t),zd=p(F),Fn=s(F,"P",{});var Yl=d(Fn);Fd=r(Yl,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Yl.forEach(t),Pd=p(F),zo=s(F,"P",{});var ra=d(zo);Ad=r(ra,"This model inherits from "),Et=s(ra,"A",{href:!0});var Jl=d(Et);Cd=r(Jl,"PreTrainedModel"),Jl.forEach(t),Sd=r(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(t),Nd=p(F),Fo=s(F,"P",{});var aa=d(Fo);Id=r(aa,"This model is also a PyTorch "),Po=s(aa,"A",{href:!0,rel:!0});var Kl=d(Po);Ld=r(Kl,"torch.nn.Module"),Kl.forEach(t),Od=r(aa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aa.forEach(t),Bd=p(F),Y=s(F,"P",{});var nt=d(Y);Tt=s(nt,"A",{href:!0});var Ql=d(Tt);Rd=r(Ql,"EncoderDecoderModel"),Ql.forEach(t),Wd=r(nt,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Pn=s(nt,"EM",{});var Xl=d(Pn);Vd=r(Xl,"~transformers.AutoModel.from_pretrained"),Xl.forEach(t),Gd=r(nt,` class method for the encoder and
:meth`),An=s(nt,"EM",{});var ep=d(An);Ud=r(ep,"~transformers.AutoModelForCausalLM.from_pretrained"),ep.forEach(t),Hd=r(nt," class method for the decoder."),nt.forEach(t),Zd=p(F),I=s(F,"DIV",{class:!0});var Ke=d(I);y(Ao.$$.fragment,Ke),Yd=p(Ke),fe=s(Ke,"P",{});var Vt=d(fe);Jd=r(Vt,"The "),$t=s(Vt,"A",{href:!0});var op=d($t);Kd=r(op,"EncoderDecoderModel"),op.forEach(t),Qd=r(Vt," forward method, overrides the "),Cn=s(Vt,"CODE",{});var tp=d(Cn);Xd=r(tp,"__call__"),tp.forEach(t),ei=r(Vt," special method."),Vt.forEach(t),oi=p(Ke),y(Oe.$$.fragment,Ke),ti=p(Ke),y(Be.$$.fragment,Ke),Ke.forEach(t),ni=p(F),L=s(F,"DIV",{class:!0});var Qe=d(L);y(Co.$$.fragment,Qe),ri=p(Qe),Sn=s(Qe,"P",{});var np=d(Sn);ai=r(np,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),np.forEach(t),si=p(Qe),ue=s(Qe,"P",{});var Gt=d(ue);di=r(Gt,"The model is set in evaluation mode by default using "),Nn=s(Gt,"CODE",{});var rp=d(Nn);ii=r(rp,"model.eval()"),rp.forEach(t),ci=r(Gt,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),In=s(Gt,"CODE",{});var ap=d(In);li=r(ap,"model.train()"),ap.forEach(t),pi=r(Gt,"."),Gt.forEach(t),mi=p(Qe),y(Re.$$.fragment,Qe),Qe.forEach(t),F.forEach(t),Ar=p(o),ge=s(o,"H2",{class:!0});var sa=d(ge);We=s(sa,"A",{id:!0,class:!0,href:!0});var sp=d(We);Ln=s(sp,"SPAN",{});var dp=d(Ln);y(So.$$.fragment,dp),dp.forEach(t),sp.forEach(t),hi=p(sa),On=s(sa,"SPAN",{});var ip=d(On);fi=r(ip,"TFEncoderDecoderModel"),ip.forEach(t),sa.forEach(t),Cr=p(o),j=s(o,"DIV",{class:!0});var P=d(j);y(No.$$.fragment,P),ui=p(P),_e=s(P,"P",{});var Ut=d(_e);gi=r(Ut,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Mt=s(Ut,"A",{href:!0});var cp=d(Mt);_i=r(cp,"from_pretrained()"),cp.forEach(t),bi=r(Ut," function and the decoder is loaded via "),Dt=s(Ut,"A",{href:!0});var lp=d(Dt);vi=r(lp,"from_pretrained()"),lp.forEach(t),yi=r(Ut,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Ut.forEach(t),ki=p(P),Io=s(P,"P",{});var da=d(Io);wi=r(da,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Lo=s(da,"A",{href:!0,rel:!0});var pp=d(Lo);Ei=r(pp,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),pp.forEach(t),Ti=r(da,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),da.forEach(t),$i=p(P),Bn=s(P,"P",{});var mp=d(Bn);Mi=r(mp,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),mp.forEach(t),Di=p(P),Oo=s(P,"P",{});var ia=d(Oo);ji=r(ia,"This model inherits from "),jt=s(ia,"A",{href:!0});var hp=d(jt);xi=r(hp,"TFPreTrainedModel"),hp.forEach(t),qi=r(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(t),zi=p(P),Bo=s(P,"P",{});var ca=d(Bo);Fi=r(ca,"This model is also a "),Ro=s(ca,"A",{href:!0,rel:!0});var fp=d(Ro);Pi=r(fp,"tf.keras.Model"),fp.forEach(t),Ai=r(ca,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ca.forEach(t),Ci=p(P),J=s(P,"P",{});var rt=d(J);xt=s(rt,"A",{href:!0});var up=d(xt);Si=r(up,"TFEncoderDecoderModel"),up.forEach(t),Ni=r(rt,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),qt=s(rt,"A",{href:!0});var gp=d(qt);Ii=r(gp,"from_pretrained()"),gp.forEach(t),Li=r(rt," class method for the encoder and "),zt=s(rt,"A",{href:!0});var _p=d(zt);Oi=r(_p,"from_pretrained()"),_p.forEach(t),Bi=r(rt,` class
method for the decoder.`),rt.forEach(t),Ri=p(P),O=s(P,"DIV",{class:!0});var Xe=d(O);y(Wo.$$.fragment,Xe),Wi=p(Xe),be=s(Xe,"P",{});var Ht=d(be);Vi=r(Ht,"The "),Ft=s(Ht,"A",{href:!0});var bp=d(Ft);Gi=r(bp,"TFEncoderDecoderModel"),bp.forEach(t),Ui=r(Ht," forward method, overrides the "),Rn=s(Ht,"CODE",{});var vp=d(Rn);Hi=r(vp,"__call__"),vp.forEach(t),Zi=r(Ht," special method."),Ht.forEach(t),Yi=p(Xe),y(Ve.$$.fragment,Xe),Ji=p(Xe),y(Ge.$$.fragment,Xe),Xe.forEach(t),Ki=p(P),K=s(P,"DIV",{class:!0});var Zt=d(K);y(Vo.$$.fragment,Zt),Qi=p(Zt),Wn=s(Zt,"P",{});var yp=d(Wn);Xi=r(yp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),yp.forEach(t),ec=p(Zt),y(Ue.$$.fragment,Zt),Zt.forEach(t),P.forEach(t),Sr=p(o),ve=s(o,"H2",{class:!0});var la=d(ve);He=s(la,"A",{id:!0,class:!0,href:!0});var kp=d(He);Vn=s(kp,"SPAN",{});var wp=d(Vn);y(Go.$$.fragment,wp),wp.forEach(t),kp.forEach(t),oc=p(la),Gn=s(la,"SPAN",{});var Ep=d(Gn);tc=r(Ep,"FlaxEncoderDecoderModel"),Ep.forEach(t),la.forEach(t),Nr=p(o),x=s(o,"DIV",{class:!0});var A=d(x);y(Uo.$$.fragment,A),nc=p(A),ye=s(A,"P",{});var Yt=d(ye);rc=r(Yt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Pt=s(Yt,"A",{href:!0});var Tp=d(Pt);ac=r(Tp,"from_pretrained()"),Tp.forEach(t),sc=r(Yt," function and the decoder is loaded via "),At=s(Yt,"A",{href:!0});var $p=d(At);dc=r($p,"from_pretrained()"),$p.forEach(t),ic=r(Yt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Yt.forEach(t),cc=p(A),Ho=s(A,"P",{});var pa=d(Ho);lc=r(pa,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Zo=s(pa,"A",{href:!0,rel:!0});var Mp=d(Zo);pc=r(Mp,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Mp.forEach(t),mc=r(pa,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),pa.forEach(t),hc=p(A),Un=s(A,"P",{});var Dp=d(Un);fc=r(Dp,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Dp.forEach(t),uc=p(A),Yo=s(A,"P",{});var ma=d(Yo);gc=r(ma,"This model inherits from "),Ct=s(ma,"A",{href:!0});var jp=d(Ct);_c=r(jp,"FlaxPreTrainedModel"),jp.forEach(t),bc=r(ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma.forEach(t),vc=p(A),Jo=s(A,"P",{});var ha=d(Jo);yc=r(ha,`This model is also a Flax Linen
`),Ko=s(ha,"A",{href:!0,rel:!0});var xp=d(Ko);kc=r(xp,"flax.nn.Module"),xp.forEach(t),wc=r(ha,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ha.forEach(t),Ec=p(A),Q=s(A,"P",{});var at=d(Q);St=s(at,"A",{href:!0});var qp=d(St);Tc=r(qp,"FlaxEncoderDecoderModel"),qp.forEach(t),$c=r(at,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Hn=s(at,"EM",{});var zp=d(Hn);Mc=r(zp,"~transformers.FlaxAutoModel.from_pretrained"),zp.forEach(t),Dc=r(at,` class method for the
encoder and :meth`),Zn=s(at,"EM",{});var Fp=d(Zn);jc=r(Fp,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Fp.forEach(t),xc=r(at," class method for the decoder."),at.forEach(t),qc=p(A),B=s(A,"DIV",{class:!0});var eo=d(B);y(Qo.$$.fragment,eo),zc=p(eo),ke=s(eo,"P",{});var Jt=d(ke);Fc=r(Jt,"The "),Nt=s(Jt,"A",{href:!0});var Pp=d(Nt);Pc=r(Pp,"FlaxEncoderDecoderModel"),Pp.forEach(t),Ac=r(Jt," forward method, overrides the "),Yn=s(Jt,"CODE",{});var Ap=d(Yn);Cc=r(Ap,"__call__"),Ap.forEach(t),Sc=r(Jt," special method."),Jt.forEach(t),Nc=p(eo),y(Ze.$$.fragment,eo),Ic=p(eo),y(Ye.$$.fragment,eo),eo.forEach(t),Lc=p(A),X=s(A,"DIV",{class:!0});var Kt=d(X);y(Xo.$$.fragment,Kt),Oc=p(Kt),Jn=s(Kt,"P",{});var Cp=d(Jn);Bc=r(Cp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Cp.forEach(t),Rc=p(Kt),y(Je.$$.fragment,Kt),Kt.forEach(t),A.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Qp)),c(f,"id","encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#encoder-decoder-models"),c(_,"class","relative group"),c(we,"id","overview"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#overview"),c(oe,"class","relative group"),c(it,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(to,"href","https://arxiv.org/abs/1907.12461"),c(to,"rel","nofollow"),c(ct,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(lt,"href","/docs/transformers/pr_18271/en/model_doc/bert#transformers.BertModel"),c(no,"href","https://arxiv.org/abs/1908.08345"),c(no,"rel","nofollow"),c(Me,"id","randomly-initializing-encoderdecodermodel-from-model-configurations"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#randomly-initializing-encoderdecodermodel-from-model-configurations"),c(te,"class","relative group"),c(pt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(mt,"href","/docs/transformers/pr_18271/en/model_doc/bert#transformers.BertModel"),c(De,"id","initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(re,"class","relative group"),c(ht,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(ft,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(je,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(je,"rel","nofollow"),c(ut,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel.from_encoder_decoder_pretrained"),c(xe,"id","loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference"),c(ae,"class","relative group"),c(ze,"id","loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(se,"class","relative group"),c(Fe,"id","training"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#training"),c(ie,"class","relative group"),c(vo,"href","https://colab.research.google.com/drive/1WIk2bxglElfZewOHboPFNj8H44_VAyKE?usp=sharing#scrollTo=ZwQIEhKOrJpl"),c(vo,"rel","nofollow"),c(yo,"href","https://github.com/thomwolf"),c(yo,"rel","nofollow"),c(ko,"href","https://github.com/ydshieh"),c(ko,"rel","nofollow"),c(Ae,"id","transformers.EncoderDecoderConfig"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.EncoderDecoderConfig"),c(ce,"class","relative group"),c(gt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(_t,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(bt,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),c(vt,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),c(yt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.EncoderDecoderModel"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.EncoderDecoderModel"),c(me,"class","relative group"),c(kt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(wt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(qo,"href","https://arxiv.org/abs/1907.12461"),c(qo,"rel","nofollow"),c(Et,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(Tt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c($t,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"id","transformers.TFEncoderDecoderModel"),c(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(We,"href","#transformers.TFEncoderDecoderModel"),c(ge,"class","relative group"),c(Mt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Dt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Lo,"href","https://arxiv.org/abs/1907.12461"),c(Lo,"rel","nofollow"),c(jt,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ro,"rel","nofollow"),c(xt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(qt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(zt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ft,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.FlaxEncoderDecoderModel"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.FlaxEncoderDecoderModel"),c(ve,"class","relative group"),c(Pt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(At,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Zo,"href","https://arxiv.org/abs/1907.12461"),c(Zo,"rel","nofollow"),c(Ct,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ko,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ko,"rel","nofollow"),c(St,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(Nt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),u(o,$,m),u(o,_,m),e(_,f),e(f,b),k(i,b,null),e(_,g),e(_,S),e(S,fa),u(o,dr,m),u(o,oe,m),e(oe,we),e(we,Qt),k(oo,Qt,null),e(oe,ua),e(oe,Xt),e(Xt,ga),u(o,ir,m),u(o,Ee,m),e(Ee,_a),e(Ee,it),e(it,ba),e(Ee,va),u(o,cr,m),u(o,Te,m),e(Te,ya),e(Te,to),e(to,ka),e(Te,wa),u(o,lr,m),u(o,$e,m),e($e,Ea),e($e,ct),e(ct,Ta),e($e,$a),u(o,pr,m),u(o,U,m),e(U,Ma),e(U,lt),e(lt,Da),e(U,ja),e(U,no),e(no,xa),e(U,qa),u(o,mr,m),u(o,te,m),e(te,Me),e(Me,en),k(ro,en,null),e(te,za),e(te,ao),e(ao,Fa),e(ao,on),e(on,Pa),e(ao,Aa),u(o,hr,m),u(o,ne,m),e(ne,pt),e(pt,Ca),e(ne,Sa),e(ne,mt),e(mt,Na),e(ne,Ia),u(o,fr,m),k(so,o,m),u(o,ur,m),u(o,re,m),e(re,De),e(De,tn),k(io,tn,null),e(re,La),e(re,co),e(co,Oa),e(co,nn),e(nn,Ba),e(co,Ra),u(o,gr,m),u(o,M,m),e(M,ht),e(ht,Wa),e(M,Va),e(M,rn),e(rn,Ga),e(M,Ua),e(M,an),e(an,Ha),e(M,Za),e(M,sn),e(sn,Ya),e(M,Ja),e(M,dn),e(dn,Ka),e(M,Qa),e(M,ft),e(ft,Xa),e(M,es),e(M,je),e(je,os),e(je,cn),e(cn,ts),e(M,ns),e(M,ln),e(ln,rs),e(M,as),e(M,ut),e(ut,ss),e(M,ds),u(o,_r,m),k(lo,o,m),u(o,br,m),u(o,ae,m),e(ae,xe),e(xe,pn),k(po,pn,null),e(ae,is),e(ae,mo),e(mo,cs),e(mo,mn),e(mn,ls),e(mo,ps),u(o,vr,m),u(o,H,m),e(H,ms),e(H,hn),e(hn,hs),e(H,fs),e(H,fn),e(fn,us),e(H,gs),u(o,yr,m),u(o,qe,m),e(qe,_s),e(qe,un),e(un,bs),e(qe,vs),u(o,kr,m),k(ho,o,m),u(o,wr,m),u(o,se,m),e(se,ze),e(ze,gn),k(fo,gn,null),e(se,ys),e(se,uo),e(uo,ks),e(uo,_n),e(_n,ws),e(uo,Es),u(o,Er,m),u(o,de,m),e(de,bn),e(bn,Ts),e(de,$s),e(de,vn),e(vn,Ms),e(de,Ds),u(o,Tr,m),k(go,o,m),u(o,$r,m),u(o,ie,m),e(ie,Fe),e(Fe,yn),k(_o,yn,null),e(ie,js),e(ie,kn),e(kn,xs),u(o,Mr,m),u(o,N,m),e(N,qs),e(N,wn),e(wn,zs),e(N,Fs),e(N,En),e(En,Ps),e(N,As),e(N,Tn),e(Tn,Cs),e(N,Ss),e(N,$n),e($n,Ns),e(N,Is),u(o,Dr,m),k(bo,o,m),u(o,jr,m),u(o,Pe,m),e(Pe,Ls),e(Pe,vo),e(vo,Os),e(Pe,Bs),u(o,xr,m),u(o,Z,m),e(Z,Rs),e(Z,yo),e(yo,Ws),e(Z,Vs),e(Z,ko),e(ko,Gs),e(Z,Us),u(o,qr,m),u(o,ce,m),e(ce,Ae),e(Ae,Mn),k(wo,Mn,null),e(ce,Hs),e(ce,Dn),e(Dn,Zs),u(o,zr,m),u(o,C,m),k(Eo,C,null),e(C,Ys),e(C,Ce),e(Ce,gt),e(gt,Js),e(Ce,Ks),e(Ce,_t),e(_t,Qs),e(Ce,Xs),e(C,ed),e(C,le),e(le,od),e(le,bt),e(bt,td),e(le,nd),e(le,vt),e(vt,rd),e(le,ad),e(C,sd),k(Se,C,null),e(C,dd),e(C,Ne),k(To,Ne,null),e(Ne,id),e(Ne,$o),e($o,cd),e($o,yt),e(yt,ld),e($o,pd),e(C,md),e(C,Ie),k(Mo,Ie,null),e(Ie,hd),e(Ie,pe),e(pe,fd),e(pe,jn),e(jn,ud),e(pe,gd),e(pe,xn),e(xn,_d),e(pe,bd),u(o,Fr,m),u(o,me,m),e(me,Le),e(Le,qn),k(Do,qn,null),e(me,vd),e(me,zn),e(zn,yd),u(o,Pr,m),u(o,D,m),k(jo,D,null),e(D,kd),e(D,he),e(he,wd),e(he,kt),e(kt,Ed),e(he,Td),e(he,wt),e(wt,$d),e(he,Md),e(D,Dd),e(D,xo),e(xo,jd),e(xo,qo),e(qo,xd),e(xo,qd),e(D,zd),e(D,Fn),e(Fn,Fd),e(D,Pd),e(D,zo),e(zo,Ad),e(zo,Et),e(Et,Cd),e(zo,Sd),e(D,Nd),e(D,Fo),e(Fo,Id),e(Fo,Po),e(Po,Ld),e(Fo,Od),e(D,Bd),e(D,Y),e(Y,Tt),e(Tt,Rd),e(Y,Wd),e(Y,Pn),e(Pn,Vd),e(Y,Gd),e(Y,An),e(An,Ud),e(Y,Hd),e(D,Zd),e(D,I),k(Ao,I,null),e(I,Yd),e(I,fe),e(fe,Jd),e(fe,$t),e($t,Kd),e(fe,Qd),e(fe,Cn),e(Cn,Xd),e(fe,ei),e(I,oi),k(Oe,I,null),e(I,ti),k(Be,I,null),e(D,ni),e(D,L),k(Co,L,null),e(L,ri),e(L,Sn),e(Sn,ai),e(L,si),e(L,ue),e(ue,di),e(ue,Nn),e(Nn,ii),e(ue,ci),e(ue,In),e(In,li),e(ue,pi),e(L,mi),k(Re,L,null),u(o,Ar,m),u(o,ge,m),e(ge,We),e(We,Ln),k(So,Ln,null),e(ge,hi),e(ge,On),e(On,fi),u(o,Cr,m),u(o,j,m),k(No,j,null),e(j,ui),e(j,_e),e(_e,gi),e(_e,Mt),e(Mt,_i),e(_e,bi),e(_e,Dt),e(Dt,vi),e(_e,yi),e(j,ki),e(j,Io),e(Io,wi),e(Io,Lo),e(Lo,Ei),e(Io,Ti),e(j,$i),e(j,Bn),e(Bn,Mi),e(j,Di),e(j,Oo),e(Oo,ji),e(Oo,jt),e(jt,xi),e(Oo,qi),e(j,zi),e(j,Bo),e(Bo,Fi),e(Bo,Ro),e(Ro,Pi),e(Bo,Ai),e(j,Ci),e(j,J),e(J,xt),e(xt,Si),e(J,Ni),e(J,qt),e(qt,Ii),e(J,Li),e(J,zt),e(zt,Oi),e(J,Bi),e(j,Ri),e(j,O),k(Wo,O,null),e(O,Wi),e(O,be),e(be,Vi),e(be,Ft),e(Ft,Gi),e(be,Ui),e(be,Rn),e(Rn,Hi),e(be,Zi),e(O,Yi),k(Ve,O,null),e(O,Ji),k(Ge,O,null),e(j,Ki),e(j,K),k(Vo,K,null),e(K,Qi),e(K,Wn),e(Wn,Xi),e(K,ec),k(Ue,K,null),u(o,Sr,m),u(o,ve,m),e(ve,He),e(He,Vn),k(Go,Vn,null),e(ve,oc),e(ve,Gn),e(Gn,tc),u(o,Nr,m),u(o,x,m),k(Uo,x,null),e(x,nc),e(x,ye),e(ye,rc),e(ye,Pt),e(Pt,ac),e(ye,sc),e(ye,At),e(At,dc),e(ye,ic),e(x,cc),e(x,Ho),e(Ho,lc),e(Ho,Zo),e(Zo,pc),e(Ho,mc),e(x,hc),e(x,Un),e(Un,fc),e(x,uc),e(x,Yo),e(Yo,gc),e(Yo,Ct),e(Ct,_c),e(Yo,bc),e(x,vc),e(x,Jo),e(Jo,yc),e(Jo,Ko),e(Ko,kc),e(Jo,wc),e(x,Ec),e(x,Q),e(Q,St),e(St,Tc),e(Q,$c),e(Q,Hn),e(Hn,Mc),e(Q,Dc),e(Q,Zn),e(Zn,jc),e(Q,xc),e(x,qc),e(x,B),k(Qo,B,null),e(B,zc),e(B,ke),e(ke,Fc),e(ke,Nt),e(Nt,Pc),e(ke,Ac),e(ke,Yn),e(Yn,Cc),e(ke,Sc),e(B,Nc),k(Ze,B,null),e(B,Ic),k(Ye,B,null),e(x,Lc),e(x,X),k(Xo,X,null),e(X,Oc),e(X,Jn),e(Jn,Bc),e(X,Rc),k(Je,X,null),Ir=!0},p(o,[m]){const et={};m&2&&(et.$$scope={dirty:m,ctx:o}),Se.$set(et);const Kn={};m&2&&(Kn.$$scope={dirty:m,ctx:o}),Oe.$set(Kn);const Qn={};m&2&&(Qn.$$scope={dirty:m,ctx:o}),Be.$set(Qn);const Xn={};m&2&&(Xn.$$scope={dirty:m,ctx:o}),Re.$set(Xn);const ot={};m&2&&(ot.$$scope={dirty:m,ctx:o}),Ve.$set(ot);const er={};m&2&&(er.$$scope={dirty:m,ctx:o}),Ge.$set(er);const or={};m&2&&(or.$$scope={dirty:m,ctx:o}),Ue.$set(or);const tr={};m&2&&(tr.$$scope={dirty:m,ctx:o}),Ze.$set(tr);const tt={};m&2&&(tt.$$scope={dirty:m,ctx:o}),Ye.$set(tt);const nr={};m&2&&(nr.$$scope={dirty:m,ctx:o}),Je.$set(nr)},i(o){Ir||(w(i.$$.fragment,o),w(oo.$$.fragment,o),w(ro.$$.fragment,o),w(so.$$.fragment,o),w(io.$$.fragment,o),w(lo.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(fo.$$.fragment,o),w(go.$$.fragment,o),w(_o.$$.fragment,o),w(bo.$$.fragment,o),w(wo.$$.fragment,o),w(Eo.$$.fragment,o),w(Se.$$.fragment,o),w(To.$$.fragment,o),w(Mo.$$.fragment,o),w(Do.$$.fragment,o),w(jo.$$.fragment,o),w(Ao.$$.fragment,o),w(Oe.$$.fragment,o),w(Be.$$.fragment,o),w(Co.$$.fragment,o),w(Re.$$.fragment,o),w(So.$$.fragment,o),w(No.$$.fragment,o),w(Wo.$$.fragment,o),w(Ve.$$.fragment,o),w(Ge.$$.fragment,o),w(Vo.$$.fragment,o),w(Ue.$$.fragment,o),w(Go.$$.fragment,o),w(Uo.$$.fragment,o),w(Qo.$$.fragment,o),w(Ze.$$.fragment,o),w(Ye.$$.fragment,o),w(Xo.$$.fragment,o),w(Je.$$.fragment,o),Ir=!0)},o(o){E(i.$$.fragment,o),E(oo.$$.fragment,o),E(ro.$$.fragment,o),E(so.$$.fragment,o),E(io.$$.fragment,o),E(lo.$$.fragment,o),E(po.$$.fragment,o),E(ho.$$.fragment,o),E(fo.$$.fragment,o),E(go.$$.fragment,o),E(_o.$$.fragment,o),E(bo.$$.fragment,o),E(wo.$$.fragment,o),E(Eo.$$.fragment,o),E(Se.$$.fragment,o),E(To.$$.fragment,o),E(Mo.$$.fragment,o),E(Do.$$.fragment,o),E(jo.$$.fragment,o),E(Ao.$$.fragment,o),E(Oe.$$.fragment,o),E(Be.$$.fragment,o),E(Co.$$.fragment,o),E(Re.$$.fragment,o),E(So.$$.fragment,o),E(No.$$.fragment,o),E(Wo.$$.fragment,o),E(Ve.$$.fragment,o),E(Ge.$$.fragment,o),E(Vo.$$.fragment,o),E(Ue.$$.fragment,o),E(Go.$$.fragment,o),E(Uo.$$.fragment,o),E(Qo.$$.fragment,o),E(Ze.$$.fragment,o),E(Ye.$$.fragment,o),E(Xo.$$.fragment,o),E(Je.$$.fragment,o),Ir=!1},d(o){t(h),o&&t($),o&&t(_),T(i),o&&t(dr),o&&t(oe),T(oo),o&&t(ir),o&&t(Ee),o&&t(cr),o&&t(Te),o&&t(lr),o&&t($e),o&&t(pr),o&&t(U),o&&t(mr),o&&t(te),T(ro),o&&t(hr),o&&t(ne),o&&t(fr),T(so,o),o&&t(ur),o&&t(re),T(io),o&&t(gr),o&&t(M),o&&t(_r),T(lo,o),o&&t(br),o&&t(ae),T(po),o&&t(vr),o&&t(H),o&&t(yr),o&&t(qe),o&&t(kr),T(ho,o),o&&t(wr),o&&t(se),T(fo),o&&t(Er),o&&t(de),o&&t(Tr),T(go,o),o&&t($r),o&&t(ie),T(_o),o&&t(Mr),o&&t(N),o&&t(Dr),T(bo,o),o&&t(jr),o&&t(Pe),o&&t(xr),o&&t(Z),o&&t(qr),o&&t(ce),T(wo),o&&t(zr),o&&t(C),T(Eo),T(Se),T(To),T(Mo),o&&t(Fr),o&&t(me),T(Do),o&&t(Pr),o&&t(D),T(jo),T(Ao),T(Oe),T(Be),T(Co),T(Re),o&&t(Ar),o&&t(ge),T(So),o&&t(Cr),o&&t(j),T(No),T(Wo),T(Ve),T(Ge),T(Vo),T(Ue),o&&t(Sr),o&&t(ve),T(Go),o&&t(Nr),o&&t(x),T(Uo),T(Qo),T(Ze),T(Ye),T(Xo),T(Je)}}}const Qp={local:"encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-encoderdecodermodel-from-model-configurations",title:"Randomly initializing `EncoderDecoderModel` from model configurations."},{local:"initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `EncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `EncoderDecoderModel` checkpoint and perform inference."},{local:"loading-a-pytorch-checkpoint-into-tfencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Xp(q){return Op(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sm extends Sp{constructor(h){super();Np(this,h,Xp,Kp,Ip,{})}}export{sm as default,Qp as metadata};
