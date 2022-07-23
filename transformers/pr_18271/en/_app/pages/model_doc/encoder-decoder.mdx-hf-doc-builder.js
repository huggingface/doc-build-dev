import{S as Op,i as Bp,s as Rp,e as a,k as l,w as v,t as n,M as Wp,c as s,d as t,m as p,a as d,x as y,h as r,b as c,G as e,g as u,y as k,q as w,o as E,B as T,v as Vp,L as it}from"../../chunks/vendor-hf-doc-builder.js";import{T as Hc}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as G}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as U}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as dt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Gp(q){let h,$,_,f,b;return f=new G({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:it,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Up(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Hp(q){let h,$,_,f,b;return f=new G({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:it,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Zp(q){let h,$,_,f,b;return f=new G({props:{code:`from transformers import EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:it,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Yp(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Jp(q){let h,$,_,f,b;return f=new G({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:it,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Kp(q){let h,$,_,f,b;return f=new G({props:{code:`from transformers import TFEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:it,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Qp(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Xp(q){let h,$,_,f,b;return f=new G({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:it,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function em(q){let h,$,_,f,b;return f=new G({props:{code:`from transformers import FlaxEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:it,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function om(q){let h,$,_,f,b,i,g,S,ua,ir,oe,we,Xt,to,ga,en,_a,cr,Ee,ba,ct,va,ya,lr,Te,ka,no,wa,Ea,pr,$e,Ta,lt,$a,Ma,mr,H,Da,pt,ja,xa,ro,qa,za,hr,te,Me,on,ao,Fa,so,Pa,tn,Aa,Ca,fr,ne,mt,Sa,Na,ht,Ia,La,ur,io,gr,re,De,nn,co,Oa,lo,Ba,rn,Ra,Wa,_r,M,ft,Va,Ga,an,Ua,Ha,sn,Za,Ya,dn,Ja,Ka,cn,Qa,Xa,ut,es,os,je,ts,ln,ns,rs,pn,as,ss,gt,ds,is,br,po,vr,ae,xe,mn,mo,cs,ho,ls,hn,ps,ms,yr,I,hs,fn,fs,us,_t,gs,_s,un,bs,vs,kr,qe,ys,gn,ks,ws,wr,fo,Er,se,ze,_n,uo,Es,go,Ts,bn,$s,Ms,Tr,de,vn,Ds,js,yn,xs,qs,$r,_o,Mr,ie,Fe,kn,bo,zs,wn,Fs,Dr,N,Ps,En,As,Cs,Tn,Ss,Ns,$n,Is,Ls,Mn,Os,Bs,jr,vo,xr,Pe,Rs,yo,Ws,Vs,qr,Z,Gs,ko,Us,Hs,wo,Zs,Ys,zr,ce,Ae,Dn,Eo,Js,jn,Ks,Fr,C,To,Qs,Ce,bt,Xs,ed,vt,od,td,nd,le,rd,yt,ad,sd,kt,dd,id,cd,Se,ld,Ne,$o,pd,Mo,md,wt,hd,fd,ud,Ie,Do,gd,pe,_d,xn,bd,vd,qn,yd,kd,Pr,me,Le,zn,jo,wd,Fn,Ed,Ar,D,xo,Td,he,$d,Et,Md,Dd,Tt,jd,xd,qd,qo,zd,zo,Fd,Pd,Ad,Pn,Cd,Sd,Fo,Nd,$t,Id,Ld,Od,Po,Bd,Ao,Rd,Wd,Vd,Y,Mt,Gd,Ud,An,Hd,Zd,Cn,Yd,Jd,Kd,L,Co,Qd,fe,Xd,Dt,ei,oi,Sn,ti,ni,ri,Oe,ai,Be,si,O,So,di,Nn,ii,ci,ue,li,In,pi,mi,Ln,hi,fi,ui,Re,Cr,ge,We,On,No,gi,Bn,_i,Sr,j,Io,bi,_e,vi,jt,yi,ki,xt,wi,Ei,Ti,Lo,$i,Oo,Mi,Di,ji,Rn,xi,qi,Bo,zi,qt,Fi,Pi,Ai,Ro,Ci,Wo,Si,Ni,Ii,J,zt,Li,Oi,Ft,Bi,Ri,Pt,Wi,Vi,Gi,B,Vo,Ui,be,Hi,At,Zi,Yi,Wn,Ji,Ki,Qi,Ve,Xi,Ge,ec,K,Go,oc,Vn,tc,nc,Ue,Nr,ve,He,Gn,Uo,rc,Un,ac,Ir,x,Ho,sc,ye,dc,Ct,ic,cc,St,lc,pc,mc,Zo,hc,Yo,fc,uc,gc,Hn,_c,bc,Jo,vc,Nt,yc,kc,wc,Ko,Ec,Qo,Tc,$c,Mc,Q,It,Dc,jc,Zn,xc,qc,Yn,zc,Fc,Pc,R,Xo,Ac,ke,Cc,Lt,Sc,Nc,Jn,Ic,Lc,Oc,Ze,Bc,Ye,Rc,X,et,Wc,Kn,Vc,Gc,Je,Lr;return i=new U({}),to=new U({}),ao=new U({}),io=new G({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = EncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)`}}),co=new U({}),po=new G({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),mo=new U({}),fo=new G({props:{code:`from transformers import AutoTokenizer, EncoderDecoderModel

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
nearly <span class="hljs-number">800</span> thousand customers were affected by the shutoffs. the aim <span class="hljs-keyword">is</span> to reduce the risk of wildfires. nearly <span class="hljs-number">800</span>, <span class="hljs-number">000</span> customers were expected to be affected by high winds amid dry conditions. pg &amp; e said it scheduled the blackouts to last through at least midday tomorrow.`}}),uo=new U({}),_o=new G({props:{code:`# a workaround to load from pytorch checkpoint
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),bo=new U({}),vo=new G({props:{code:`from transformers import BertTokenizer, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss`}}),Eo=new U({}),To=new V({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),Se=new dt({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[Gp]},$$scope:{ctx:q}}}),$o=new V({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Do=new V({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),jo=new U({}),xo=new V({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),Co=new V({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Oe=new Hc({props:{$$slots:{default:[Up]},$$scope:{ctx:q}}}),Be=new dt({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[Hp]},$$scope:{ctx:q}}}),So=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),Re=new dt({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Zp]},$$scope:{ctx:q}}}),No=new U({}),Io=new V({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),Vo=new V({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ve=new Hc({props:{$$slots:{default:[Yp]},$$scope:{ctx:q}}}),Ge=new dt({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[Jp]},$$scope:{ctx:q}}}),Go=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),Ue=new dt({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Kp]},$$scope:{ctx:q}}}),Uo=new U({}),Ho=new V({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),Xo=new V({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ze=new Hc({props:{$$slots:{default:[Qp]},$$scope:{ctx:q}}}),Ye=new dt({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[Xp]},$$scope:{ctx:q}}}),et=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Je=new dt({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[em]},$$scope:{ctx:q}}}),{c(){h=a("meta"),$=l(),_=a("h1"),f=a("a"),b=a("span"),v(i.$$.fragment),g=l(),S=a("span"),ua=n("Encoder Decoder Models"),ir=l(),oe=a("h2"),we=a("a"),Xt=a("span"),v(to.$$.fragment),ga=l(),en=a("span"),_a=n("Overview"),cr=l(),Ee=a("p"),ba=n("The "),ct=a("a"),va=n("EncoderDecoderModel"),ya=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),lr=l(),Te=a("p"),ka=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),no=a("a"),wa=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ea=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),pr=l(),$e=a("p"),Ta=n("After such an "),lt=a("a"),$a=n("EncoderDecoderModel"),Ma=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),mr=l(),H=a("p"),Da=n("An application of this architecture could be to leverage two pretrained "),pt=a("a"),ja=n("BertModel"),xa=n(` as the encoder
and decoder for a summarization model as was shown in: `),ro=a("a"),qa=n("Text Summarization with Pretrained Encoders"),za=n(" by Yang Liu and Mirella Lapata."),hr=l(),te=a("h2"),Me=a("a"),on=a("span"),v(ao.$$.fragment),Fa=l(),so=a("span"),Pa=n("Randomly initializing "),tn=a("code"),Aa=n("EncoderDecoderModel"),Ca=n(" from model configurations."),fr=l(),ne=a("p"),mt=a("a"),Sa=n("EncoderDecoderModel"),Na=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),ht=a("a"),Ia=n("BertModel"),La=n(" configuration for both the encoder and the decoder."),ur=l(),v(io.$$.fragment),gr=l(),re=a("h2"),De=a("a"),nn=a("span"),v(co.$$.fragment),Oa=l(),lo=a("span"),Ba=n("Initialising "),rn=a("code"),Ra=n("EncoderDecoderModel"),Wa=n(" from a pretrained encoder and a pretrained decoder."),_r=l(),M=a("p"),ft=a("a"),Va=n("EncoderDecoderModel"),Ga=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),an=a("em"),Ua=n("e.g."),Ha=n(" BERT, can serve as the encoder and both pretrained auto-encoding models, "),sn=a("em"),Za=n("e.g."),Ya=n(" BERT, pretrained causal language models, "),dn=a("em"),Ja=n("e.g."),Ka=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),cn=a("em"),Qa=n("e.g."),Xa=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),ut=a("a"),es=n("EncoderDecoderModel"),os=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),je=a("a"),ts=n("the "),ln=a("em"),ns=n("Warm-starting-encoder-decoder blog post"),rs=n(`.
To do so, the `),pn=a("code"),as=n("EncoderDecoderModel"),ss=n(" class provides a "),gt=a("a"),ds=n("EncoderDecoderModel.from_encoder_decoder_pretrained()"),is=n(" method."),br=l(),v(po.$$.fragment),vr=l(),ae=a("h2"),xe=a("a"),mn=a("span"),v(mo.$$.fragment),cs=l(),ho=a("span"),ls=n("Loading an existing "),hn=a("code"),ps=n("EncoderDecoderModel"),ms=n(" checkpoint and perform inference."),yr=l(),I=a("p"),hs=n("To load fine-tuned checkpoints of the "),fn=a("code"),fs=n("EncoderDecoderModel"),us=n(" class, "),_t=a("a"),gs=n("EncoderDecoderModel"),_s=n(" provides the "),un=a("code"),bs=n("from_pretrained(...)"),vs=n(" method just like any other model architecture in Transformers."),kr=l(),qe=a("p"),ys=n("To perform inference, one uses the "),gn=a("code"),ks=n("generate"),ws=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),wr=l(),v(fo.$$.fragment),Er=l(),se=a("h2"),ze=a("a"),_n=a("span"),v(uo.$$.fragment),Es=l(),go=a("span"),Ts=n("Loading a PyTorch checkpoint into "),bn=a("code"),$s=n("TFEncoderDecoderModel"),Ms=n("."),Tr=l(),de=a("p"),vn=a("code"),Ds=n("TFEncoderDecoderModel.from_pretrained()"),js=n(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),yn=a("code"),xs=n("from_pt=True"),qs=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),$r=l(),v(_o.$$.fragment),Mr=l(),ie=a("h2"),Fe=a("a"),kn=a("span"),v(bo.$$.fragment),zs=l(),wn=a("span"),Fs=n("Training"),Dr=l(),N=a("p"),Ps=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),En=a("code"),As=n("input_ids"),Cs=n(` (which are the
`),Tn=a("code"),Ss=n("input_ids"),Ns=n(" of the encoded input sequence) and "),$n=a("code"),Is=n("labels"),Ls=n(" (which are the "),Mn=a("code"),Os=n("input_ids"),Bs=n(` of the encoded
target sequence).`),jr=l(),v(vo.$$.fragment),xr=l(),Pe=a("p"),Rs=n("Detailed "),yo=a("a"),Ws=n("colab"),Vs=n(" for training."),qr=l(),Z=a("p"),Gs=n("This model was contributed by "),ko=a("a"),Us=n("thomwolf"),Hs=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=a("a"),Zs=n("ydshieh"),Ys=n("."),zr=l(),ce=a("h2"),Ae=a("a"),Dn=a("span"),v(Eo.$$.fragment),Js=l(),jn=a("span"),Ks=n("EncoderDecoderConfig"),Fr=l(),C=a("div"),v(To.$$.fragment),Qs=l(),Ce=a("p"),bt=a("a"),Xs=n("EncoderDecoderConfig"),ed=n(" is the configuration class to store the configuration of a "),vt=a("a"),od=n("EncoderDecoderModel"),td=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),nd=l(),le=a("p"),rd=n("Configuration objects inherit from "),yt=a("a"),ad=n("PretrainedConfig"),sd=n(` and can be used to control the model outputs. Read the
documentation from `),kt=a("a"),dd=n("PretrainedConfig"),id=n(" for more information."),cd=l(),v(Se.$$.fragment),ld=l(),Ne=a("div"),v($o.$$.fragment),pd=l(),Mo=a("p"),md=n("Instantiate a "),wt=a("a"),hd=n("EncoderDecoderConfig"),fd=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),ud=l(),Ie=a("div"),v(Do.$$.fragment),gd=l(),pe=a("p"),_d=n("Serializes this instance to a Python dictionary. Override the default "),xn=a("em"),bd=n("to_dict()"),vd=n(" from "),qn=a("em"),yd=n("PretrainedConfig"),kd=n("."),Pr=l(),me=a("h2"),Le=a("a"),zn=a("span"),v(jo.$$.fragment),wd=l(),Fn=a("span"),Ed=n("EncoderDecoderModel"),Ar=l(),D=a("div"),v(xo.$$.fragment),Td=l(),he=a("p"),$d=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Et=a("a"),Md=n("from_pretrained()"),Dd=n(" function and the decoder is loaded via "),Tt=a("a"),jd=n("from_pretrained()"),xd=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),qd=l(),qo=a("p"),zd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),zo=a("a"),Fd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Pd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ad=l(),Pn=a("p"),Cd=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Sd=l(),Fo=a("p"),Nd=n("This model inherits from "),$t=a("a"),Id=n("PreTrainedModel"),Ld=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od=l(),Po=a("p"),Bd=n("This model is also a PyTorch "),Ao=a("a"),Rd=n("torch.nn.Module"),Wd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vd=l(),Y=a("p"),Mt=a("a"),Gd=n("EncoderDecoderModel"),Ud=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),An=a("em"),Hd=n("~transformers.AutoModel.from_pretrained"),Zd=n(` class method for the encoder and
:meth`),Cn=a("em"),Yd=n("~transformers.AutoModelForCausalLM.from_pretrained"),Jd=n(" class method for the decoder."),Kd=l(),L=a("div"),v(Co.$$.fragment),Qd=l(),fe=a("p"),Xd=n("The "),Dt=a("a"),ei=n("EncoderDecoderModel"),oi=n(" forward method, overrides the "),Sn=a("code"),ti=n("__call__"),ni=n(" special method."),ri=l(),v(Oe.$$.fragment),ai=l(),v(Be.$$.fragment),si=l(),O=a("div"),v(So.$$.fragment),di=l(),Nn=a("p"),ii=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ci=l(),ue=a("p"),li=n("The model is set in evaluation mode by default using "),In=a("code"),pi=n("model.eval()"),mi=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Ln=a("code"),hi=n("model.train()"),fi=n("."),ui=l(),v(Re.$$.fragment),Cr=l(),ge=a("h2"),We=a("a"),On=a("span"),v(No.$$.fragment),gi=l(),Bn=a("span"),_i=n("TFEncoderDecoderModel"),Sr=l(),j=a("div"),v(Io.$$.fragment),bi=l(),_e=a("p"),vi=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),jt=a("a"),yi=n("from_pretrained()"),ki=n(" function and the decoder is loaded via "),xt=a("a"),wi=n("from_pretrained()"),Ei=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Ti=l(),Lo=a("p"),$i=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Oo=a("a"),Mi=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Di=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ji=l(),Rn=a("p"),xi=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),qi=l(),Bo=a("p"),zi=n("This model inherits from "),qt=a("a"),Fi=n("TFPreTrainedModel"),Pi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ai=l(),Ro=a("p"),Ci=n("This model is also a "),Wo=a("a"),Si=n("tf.keras.Model"),Ni=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ii=l(),J=a("p"),zt=a("a"),Li=n("TFEncoderDecoderModel"),Oi=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Ft=a("a"),Bi=n("from_pretrained()"),Ri=n(" class method for the encoder and "),Pt=a("a"),Wi=n("from_pretrained()"),Vi=n(` class
method for the decoder.`),Gi=l(),B=a("div"),v(Vo.$$.fragment),Ui=l(),be=a("p"),Hi=n("The "),At=a("a"),Zi=n("TFEncoderDecoderModel"),Yi=n(" forward method, overrides the "),Wn=a("code"),Ji=n("__call__"),Ki=n(" special method."),Qi=l(),v(Ve.$$.fragment),Xi=l(),v(Ge.$$.fragment),ec=l(),K=a("div"),v(Go.$$.fragment),oc=l(),Vn=a("p"),tc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),nc=l(),v(Ue.$$.fragment),Nr=l(),ve=a("h2"),He=a("a"),Gn=a("span"),v(Uo.$$.fragment),rc=l(),Un=a("span"),ac=n("FlaxEncoderDecoderModel"),Ir=l(),x=a("div"),v(Ho.$$.fragment),sc=l(),ye=a("p"),dc=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Ct=a("a"),ic=n("from_pretrained()"),cc=n(" function and the decoder is loaded via "),St=a("a"),lc=n("from_pretrained()"),pc=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),mc=l(),Zo=a("p"),hc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Yo=a("a"),fc=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),uc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gc=l(),Hn=a("p"),_c=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),bc=l(),Jo=a("p"),vc=n("This model inherits from "),Nt=a("a"),yc=n("FlaxPreTrainedModel"),kc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc=l(),Ko=a("p"),Ec=n(`This model is also a Flax Linen
`),Qo=a("a"),Tc=n("flax.nn.Module"),$c=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mc=l(),Q=a("p"),It=a("a"),Dc=n("FlaxEncoderDecoderModel"),jc=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Zn=a("em"),xc=n("~transformers.FlaxAutoModel.from_pretrained"),qc=n(` class method for the
encoder and :meth`),Yn=a("em"),zc=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Fc=n(" class method for the decoder."),Pc=l(),R=a("div"),v(Xo.$$.fragment),Ac=l(),ke=a("p"),Cc=n("The "),Lt=a("a"),Sc=n("FlaxEncoderDecoderModel"),Nc=n(" forward method, overrides the "),Jn=a("code"),Ic=n("__call__"),Lc=n(" special method."),Oc=l(),v(Ze.$$.fragment),Bc=l(),v(Ye.$$.fragment),Rc=l(),X=a("div"),v(et.$$.fragment),Wc=l(),Kn=a("p"),Vc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Gc=l(),v(Je.$$.fragment),this.h()},l(o){const m=Wp('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),$=p(o),_=s(o,"H1",{class:!0});var ot=d(_);f=s(ot,"A",{id:!0,class:!0,href:!0});var Qn=d(f);b=s(Qn,"SPAN",{});var Xn=d(b);y(i.$$.fragment,Xn),Xn.forEach(t),Qn.forEach(t),g=p(ot),S=s(ot,"SPAN",{});var er=d(S);ua=r(er,"Encoder Decoder Models"),er.forEach(t),ot.forEach(t),ir=p(o),oe=s(o,"H2",{class:!0});var tt=d(oe);we=s(tt,"A",{id:!0,class:!0,href:!0});var or=d(we);Xt=s(or,"SPAN",{});var tr=d(Xt);y(to.$$.fragment,tr),tr.forEach(t),or.forEach(t),ga=p(tt),en=s(tt,"SPAN",{});var nr=d(en);_a=r(nr,"Overview"),nr.forEach(t),tt.forEach(t),cr=p(o),Ee=s(o,"P",{});var nt=d(Ee);ba=r(nt,"The "),ct=s(nt,"A",{href:!0});var rr=d(ct);va=r(rr,"EncoderDecoderModel"),rr.forEach(t),ya=r(nt,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),nt.forEach(t),lr=p(o),Te=s(o,"P",{});var Or=d(Te);ka=r(Or,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),no=s(Or,"A",{href:!0,rel:!0});var Zc=d(no);wa=r(Zc,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Zc.forEach(t),Ea=r(Or,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Or.forEach(t),pr=p(o),$e=s(o,"P",{});var Br=d($e);Ta=r(Br,"After such an "),lt=s(Br,"A",{href:!0});var Yc=d(lt);$a=r(Yc,"EncoderDecoderModel"),Yc.forEach(t),Ma=r(Br,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Br.forEach(t),mr=p(o),H=s(o,"P",{});var Ot=d(H);Da=r(Ot,"An application of this architecture could be to leverage two pretrained "),pt=s(Ot,"A",{href:!0});var Jc=d(pt);ja=r(Jc,"BertModel"),Jc.forEach(t),xa=r(Ot,` as the encoder
and decoder for a summarization model as was shown in: `),ro=s(Ot,"A",{href:!0,rel:!0});var Kc=d(ro);qa=r(Kc,"Text Summarization with Pretrained Encoders"),Kc.forEach(t),za=r(Ot," by Yang Liu and Mirella Lapata."),Ot.forEach(t),hr=p(o),te=s(o,"H2",{class:!0});var Rr=d(te);Me=s(Rr,"A",{id:!0,class:!0,href:!0});var Qc=d(Me);on=s(Qc,"SPAN",{});var Xc=d(on);y(ao.$$.fragment,Xc),Xc.forEach(t),Qc.forEach(t),Fa=p(Rr),so=s(Rr,"SPAN",{});var Wr=d(so);Pa=r(Wr,"Randomly initializing "),tn=s(Wr,"CODE",{});var el=d(tn);Aa=r(el,"EncoderDecoderModel"),el.forEach(t),Ca=r(Wr," from model configurations."),Wr.forEach(t),Rr.forEach(t),fr=p(o),ne=s(o,"P",{});var ar=d(ne);mt=s(ar,"A",{href:!0});var ol=d(mt);Sa=r(ol,"EncoderDecoderModel"),ol.forEach(t),Na=r(ar," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),ht=s(ar,"A",{href:!0});var tl=d(ht);Ia=r(tl,"BertModel"),tl.forEach(t),La=r(ar," configuration for both the encoder and the decoder."),ar.forEach(t),ur=p(o),y(io.$$.fragment,o),gr=p(o),re=s(o,"H2",{class:!0});var Vr=d(re);De=s(Vr,"A",{id:!0,class:!0,href:!0});var nl=d(De);nn=s(nl,"SPAN",{});var rl=d(nn);y(co.$$.fragment,rl),rl.forEach(t),nl.forEach(t),Oa=p(Vr),lo=s(Vr,"SPAN",{});var Gr=d(lo);Ba=r(Gr,"Initialising "),rn=s(Gr,"CODE",{});var al=d(rn);Ra=r(al,"EncoderDecoderModel"),al.forEach(t),Wa=r(Gr," from a pretrained encoder and a pretrained decoder."),Gr.forEach(t),Vr.forEach(t),_r=p(o),M=s(o,"P",{});var z=d(M);ft=s(z,"A",{href:!0});var sl=d(ft);Va=r(sl,"EncoderDecoderModel"),sl.forEach(t),Ga=r(z," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),an=s(z,"EM",{});var dl=d(an);Ua=r(dl,"e.g."),dl.forEach(t),Ha=r(z," BERT, can serve as the encoder and both pretrained auto-encoding models, "),sn=s(z,"EM",{});var il=d(sn);Za=r(il,"e.g."),il.forEach(t),Ya=r(z," BERT, pretrained causal language models, "),dn=s(z,"EM",{});var cl=d(dn);Ja=r(cl,"e.g."),cl.forEach(t),Ka=r(z," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),cn=s(z,"EM",{});var ll=d(cn);Qa=r(ll,"e.g."),ll.forEach(t),Xa=r(z,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),ut=s(z,"A",{href:!0});var pl=d(ut);es=r(pl,"EncoderDecoderModel"),pl.forEach(t),os=r(z," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),je=s(z,"A",{href:!0,rel:!0});var Uc=d(je);ts=r(Uc,"the "),ln=s(Uc,"EM",{});var ml=d(ln);ns=r(ml,"Warm-starting-encoder-decoder blog post"),ml.forEach(t),Uc.forEach(t),rs=r(z,`.
To do so, the `),pn=s(z,"CODE",{});var hl=d(pn);as=r(hl,"EncoderDecoderModel"),hl.forEach(t),ss=r(z," class provides a "),gt=s(z,"A",{href:!0});var fl=d(gt);ds=r(fl,"EncoderDecoderModel.from_encoder_decoder_pretrained()"),fl.forEach(t),is=r(z," method."),z.forEach(t),br=p(o),y(po.$$.fragment,o),vr=p(o),ae=s(o,"H2",{class:!0});var Ur=d(ae);xe=s(Ur,"A",{id:!0,class:!0,href:!0});var ul=d(xe);mn=s(ul,"SPAN",{});var gl=d(mn);y(mo.$$.fragment,gl),gl.forEach(t),ul.forEach(t),cs=p(Ur),ho=s(Ur,"SPAN",{});var Hr=d(ho);ls=r(Hr,"Loading an existing "),hn=s(Hr,"CODE",{});var _l=d(hn);ps=r(_l,"EncoderDecoderModel"),_l.forEach(t),ms=r(Hr," checkpoint and perform inference."),Hr.forEach(t),Ur.forEach(t),yr=p(o),I=s(o,"P",{});var Ke=d(I);hs=r(Ke,"To load fine-tuned checkpoints of the "),fn=s(Ke,"CODE",{});var bl=d(fn);fs=r(bl,"EncoderDecoderModel"),bl.forEach(t),us=r(Ke," class, "),_t=s(Ke,"A",{href:!0});var vl=d(_t);gs=r(vl,"EncoderDecoderModel"),vl.forEach(t),_s=r(Ke," provides the "),un=s(Ke,"CODE",{});var yl=d(un);bs=r(yl,"from_pretrained(...)"),yl.forEach(t),vs=r(Ke," method just like any other model architecture in Transformers."),Ke.forEach(t),kr=p(o),qe=s(o,"P",{});var Zr=d(qe);ys=r(Zr,"To perform inference, one uses the "),gn=s(Zr,"CODE",{});var kl=d(gn);ks=r(kl,"generate"),kl.forEach(t),ws=r(Zr," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Zr.forEach(t),wr=p(o),y(fo.$$.fragment,o),Er=p(o),se=s(o,"H2",{class:!0});var Yr=d(se);ze=s(Yr,"A",{id:!0,class:!0,href:!0});var wl=d(ze);_n=s(wl,"SPAN",{});var El=d(_n);y(uo.$$.fragment,El),El.forEach(t),wl.forEach(t),Es=p(Yr),go=s(Yr,"SPAN",{});var Jr=d(go);Ts=r(Jr,"Loading a PyTorch checkpoint into "),bn=s(Jr,"CODE",{});var Tl=d(bn);$s=r(Tl,"TFEncoderDecoderModel"),Tl.forEach(t),Ms=r(Jr,"."),Jr.forEach(t),Yr.forEach(t),Tr=p(o),de=s(o,"P",{});var sr=d(de);vn=s(sr,"CODE",{});var $l=d(vn);Ds=r($l,"TFEncoderDecoderModel.from_pretrained()"),$l.forEach(t),js=r(sr,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),yn=s(sr,"CODE",{});var Ml=d(yn);xs=r(Ml,"from_pt=True"),Ml.forEach(t),qs=r(sr,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),sr.forEach(t),$r=p(o),y(_o.$$.fragment,o),Mr=p(o),ie=s(o,"H2",{class:!0});var Kr=d(ie);Fe=s(Kr,"A",{id:!0,class:!0,href:!0});var Dl=d(Fe);kn=s(Dl,"SPAN",{});var jl=d(kn);y(bo.$$.fragment,jl),jl.forEach(t),Dl.forEach(t),zs=p(Kr),wn=s(Kr,"SPAN",{});var xl=d(wn);Fs=r(xl,"Training"),xl.forEach(t),Kr.forEach(t),Dr=p(o),N=s(o,"P",{});var ee=d(N);Ps=r(ee,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),En=s(ee,"CODE",{});var ql=d(En);As=r(ql,"input_ids"),ql.forEach(t),Cs=r(ee,` (which are the
`),Tn=s(ee,"CODE",{});var zl=d(Tn);Ss=r(zl,"input_ids"),zl.forEach(t),Ns=r(ee," of the encoded input sequence) and "),$n=s(ee,"CODE",{});var Fl=d($n);Is=r(Fl,"labels"),Fl.forEach(t),Ls=r(ee," (which are the "),Mn=s(ee,"CODE",{});var Pl=d(Mn);Os=r(Pl,"input_ids"),Pl.forEach(t),Bs=r(ee,` of the encoded
target sequence).`),ee.forEach(t),jr=p(o),y(vo.$$.fragment,o),xr=p(o),Pe=s(o,"P",{});var Qr=d(Pe);Rs=r(Qr,"Detailed "),yo=s(Qr,"A",{href:!0,rel:!0});var Al=d(yo);Ws=r(Al,"colab"),Al.forEach(t),Vs=r(Qr," for training."),Qr.forEach(t),qr=p(o),Z=s(o,"P",{});var Bt=d(Z);Gs=r(Bt,"This model was contributed by "),ko=s(Bt,"A",{href:!0,rel:!0});var Cl=d(ko);Us=r(Cl,"thomwolf"),Cl.forEach(t),Hs=r(Bt,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=s(Bt,"A",{href:!0,rel:!0});var Sl=d(wo);Zs=r(Sl,"ydshieh"),Sl.forEach(t),Ys=r(Bt,"."),Bt.forEach(t),zr=p(o),ce=s(o,"H2",{class:!0});var Xr=d(ce);Ae=s(Xr,"A",{id:!0,class:!0,href:!0});var Nl=d(Ae);Dn=s(Nl,"SPAN",{});var Il=d(Dn);y(Eo.$$.fragment,Il),Il.forEach(t),Nl.forEach(t),Js=p(Xr),jn=s(Xr,"SPAN",{});var Ll=d(jn);Ks=r(Ll,"EncoderDecoderConfig"),Ll.forEach(t),Xr.forEach(t),Fr=p(o),C=s(o,"DIV",{class:!0});var W=d(C);y(To.$$.fragment,W),Qs=p(W),Ce=s(W,"P",{});var dr=d(Ce);bt=s(dr,"A",{href:!0});var Ol=d(bt);Xs=r(Ol,"EncoderDecoderConfig"),Ol.forEach(t),ed=r(dr," is the configuration class to store the configuration of a "),vt=s(dr,"A",{href:!0});var Bl=d(vt);od=r(Bl,"EncoderDecoderModel"),Bl.forEach(t),td=r(dr,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),dr.forEach(t),nd=p(W),le=s(W,"P",{});var Rt=d(le);rd=r(Rt,"Configuration objects inherit from "),yt=s(Rt,"A",{href:!0});var Rl=d(yt);ad=r(Rl,"PretrainedConfig"),Rl.forEach(t),sd=r(Rt,` and can be used to control the model outputs. Read the
documentation from `),kt=s(Rt,"A",{href:!0});var Wl=d(kt);dd=r(Wl,"PretrainedConfig"),Wl.forEach(t),id=r(Rt," for more information."),Rt.forEach(t),cd=p(W),y(Se.$$.fragment,W),ld=p(W),Ne=s(W,"DIV",{class:!0});var ea=d(Ne);y($o.$$.fragment,ea),pd=p(ea),Mo=s(ea,"P",{});var oa=d(Mo);md=r(oa,"Instantiate a "),wt=s(oa,"A",{href:!0});var Vl=d(wt);hd=r(Vl,"EncoderDecoderConfig"),Vl.forEach(t),fd=r(oa,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),oa.forEach(t),ea.forEach(t),ud=p(W),Ie=s(W,"DIV",{class:!0});var ta=d(Ie);y(Do.$$.fragment,ta),gd=p(ta),pe=s(ta,"P",{});var Wt=d(pe);_d=r(Wt,"Serializes this instance to a Python dictionary. Override the default "),xn=s(Wt,"EM",{});var Gl=d(xn);bd=r(Gl,"to_dict()"),Gl.forEach(t),vd=r(Wt," from "),qn=s(Wt,"EM",{});var Ul=d(qn);yd=r(Ul,"PretrainedConfig"),Ul.forEach(t),kd=r(Wt,"."),Wt.forEach(t),ta.forEach(t),W.forEach(t),Pr=p(o),me=s(o,"H2",{class:!0});var na=d(me);Le=s(na,"A",{id:!0,class:!0,href:!0});var Hl=d(Le);zn=s(Hl,"SPAN",{});var Zl=d(zn);y(jo.$$.fragment,Zl),Zl.forEach(t),Hl.forEach(t),wd=p(na),Fn=s(na,"SPAN",{});var Yl=d(Fn);Ed=r(Yl,"EncoderDecoderModel"),Yl.forEach(t),na.forEach(t),Ar=p(o),D=s(o,"DIV",{class:!0});var F=d(D);y(xo.$$.fragment,F),Td=p(F),he=s(F,"P",{});var Vt=d(he);$d=r(Vt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Et=s(Vt,"A",{href:!0});var Jl=d(Et);Md=r(Jl,"from_pretrained()"),Jl.forEach(t),Dd=r(Vt," function and the decoder is loaded via "),Tt=s(Vt,"A",{href:!0});var Kl=d(Tt);jd=r(Kl,"from_pretrained()"),Kl.forEach(t),xd=r(Vt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Vt.forEach(t),qd=p(F),qo=s(F,"P",{});var ra=d(qo);zd=r(ra,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),zo=s(ra,"A",{href:!0,rel:!0});var Ql=d(zo);Fd=r(Ql,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ql.forEach(t),Pd=r(ra,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ra.forEach(t),Ad=p(F),Pn=s(F,"P",{});var Xl=d(Pn);Cd=r(Xl,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Xl.forEach(t),Sd=p(F),Fo=s(F,"P",{});var aa=d(Fo);Nd=r(aa,"This model inherits from "),$t=s(aa,"A",{href:!0});var ep=d($t);Id=r(ep,"PreTrainedModel"),ep.forEach(t),Ld=r(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(t),Od=p(F),Po=s(F,"P",{});var sa=d(Po);Bd=r(sa,"This model is also a PyTorch "),Ao=s(sa,"A",{href:!0,rel:!0});var op=d(Ao);Rd=r(op,"torch.nn.Module"),op.forEach(t),Wd=r(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(t),Vd=p(F),Y=s(F,"P",{});var rt=d(Y);Mt=s(rt,"A",{href:!0});var tp=d(Mt);Gd=r(tp,"EncoderDecoderModel"),tp.forEach(t),Ud=r(rt,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),An=s(rt,"EM",{});var np=d(An);Hd=r(np,"~transformers.AutoModel.from_pretrained"),np.forEach(t),Zd=r(rt,` class method for the encoder and
:meth`),Cn=s(rt,"EM",{});var rp=d(Cn);Yd=r(rp,"~transformers.AutoModelForCausalLM.from_pretrained"),rp.forEach(t),Jd=r(rt," class method for the decoder."),rt.forEach(t),Kd=p(F),L=s(F,"DIV",{class:!0});var Qe=d(L);y(Co.$$.fragment,Qe),Qd=p(Qe),fe=s(Qe,"P",{});var Gt=d(fe);Xd=r(Gt,"The "),Dt=s(Gt,"A",{href:!0});var ap=d(Dt);ei=r(ap,"EncoderDecoderModel"),ap.forEach(t),oi=r(Gt," forward method, overrides the "),Sn=s(Gt,"CODE",{});var sp=d(Sn);ti=r(sp,"__call__"),sp.forEach(t),ni=r(Gt," special method."),Gt.forEach(t),ri=p(Qe),y(Oe.$$.fragment,Qe),ai=p(Qe),y(Be.$$.fragment,Qe),Qe.forEach(t),si=p(F),O=s(F,"DIV",{class:!0});var Xe=d(O);y(So.$$.fragment,Xe),di=p(Xe),Nn=s(Xe,"P",{});var dp=d(Nn);ii=r(dp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),dp.forEach(t),ci=p(Xe),ue=s(Xe,"P",{});var Ut=d(ue);li=r(Ut,"The model is set in evaluation mode by default using "),In=s(Ut,"CODE",{});var ip=d(In);pi=r(ip,"model.eval()"),ip.forEach(t),mi=r(Ut,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Ln=s(Ut,"CODE",{});var cp=d(Ln);hi=r(cp,"model.train()"),cp.forEach(t),fi=r(Ut,"."),Ut.forEach(t),ui=p(Xe),y(Re.$$.fragment,Xe),Xe.forEach(t),F.forEach(t),Cr=p(o),ge=s(o,"H2",{class:!0});var da=d(ge);We=s(da,"A",{id:!0,class:!0,href:!0});var lp=d(We);On=s(lp,"SPAN",{});var pp=d(On);y(No.$$.fragment,pp),pp.forEach(t),lp.forEach(t),gi=p(da),Bn=s(da,"SPAN",{});var mp=d(Bn);_i=r(mp,"TFEncoderDecoderModel"),mp.forEach(t),da.forEach(t),Sr=p(o),j=s(o,"DIV",{class:!0});var P=d(j);y(Io.$$.fragment,P),bi=p(P),_e=s(P,"P",{});var Ht=d(_e);vi=r(Ht,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),jt=s(Ht,"A",{href:!0});var hp=d(jt);yi=r(hp,"from_pretrained()"),hp.forEach(t),ki=r(Ht," function and the decoder is loaded via "),xt=s(Ht,"A",{href:!0});var fp=d(xt);wi=r(fp,"from_pretrained()"),fp.forEach(t),Ei=r(Ht,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Ht.forEach(t),Ti=p(P),Lo=s(P,"P",{});var ia=d(Lo);$i=r(ia,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Oo=s(ia,"A",{href:!0,rel:!0});var up=d(Oo);Mi=r(up,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),up.forEach(t),Di=r(ia,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ia.forEach(t),ji=p(P),Rn=s(P,"P",{});var gp=d(Rn);xi=r(gp,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),gp.forEach(t),qi=p(P),Bo=s(P,"P",{});var ca=d(Bo);zi=r(ca,"This model inherits from "),qt=s(ca,"A",{href:!0});var _p=d(qt);Fi=r(_p,"TFPreTrainedModel"),_p.forEach(t),Pi=r(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(t),Ai=p(P),Ro=s(P,"P",{});var la=d(Ro);Ci=r(la,"This model is also a "),Wo=s(la,"A",{href:!0,rel:!0});var bp=d(Wo);Si=r(bp,"tf.keras.Model"),bp.forEach(t),Ni=r(la,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),la.forEach(t),Ii=p(P),J=s(P,"P",{});var at=d(J);zt=s(at,"A",{href:!0});var vp=d(zt);Li=r(vp,"TFEncoderDecoderModel"),vp.forEach(t),Oi=r(at,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Ft=s(at,"A",{href:!0});var yp=d(Ft);Bi=r(yp,"from_pretrained()"),yp.forEach(t),Ri=r(at," class method for the encoder and "),Pt=s(at,"A",{href:!0});var kp=d(Pt);Wi=r(kp,"from_pretrained()"),kp.forEach(t),Vi=r(at,` class
method for the decoder.`),at.forEach(t),Gi=p(P),B=s(P,"DIV",{class:!0});var eo=d(B);y(Vo.$$.fragment,eo),Ui=p(eo),be=s(eo,"P",{});var Zt=d(be);Hi=r(Zt,"The "),At=s(Zt,"A",{href:!0});var wp=d(At);Zi=r(wp,"TFEncoderDecoderModel"),wp.forEach(t),Yi=r(Zt," forward method, overrides the "),Wn=s(Zt,"CODE",{});var Ep=d(Wn);Ji=r(Ep,"__call__"),Ep.forEach(t),Ki=r(Zt," special method."),Zt.forEach(t),Qi=p(eo),y(Ve.$$.fragment,eo),Xi=p(eo),y(Ge.$$.fragment,eo),eo.forEach(t),ec=p(P),K=s(P,"DIV",{class:!0});var Yt=d(K);y(Go.$$.fragment,Yt),oc=p(Yt),Vn=s(Yt,"P",{});var Tp=d(Vn);tc=r(Tp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Tp.forEach(t),nc=p(Yt),y(Ue.$$.fragment,Yt),Yt.forEach(t),P.forEach(t),Nr=p(o),ve=s(o,"H2",{class:!0});var pa=d(ve);He=s(pa,"A",{id:!0,class:!0,href:!0});var $p=d(He);Gn=s($p,"SPAN",{});var Mp=d(Gn);y(Uo.$$.fragment,Mp),Mp.forEach(t),$p.forEach(t),rc=p(pa),Un=s(pa,"SPAN",{});var Dp=d(Un);ac=r(Dp,"FlaxEncoderDecoderModel"),Dp.forEach(t),pa.forEach(t),Ir=p(o),x=s(o,"DIV",{class:!0});var A=d(x);y(Ho.$$.fragment,A),sc=p(A),ye=s(A,"P",{});var Jt=d(ye);dc=r(Jt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Ct=s(Jt,"A",{href:!0});var jp=d(Ct);ic=r(jp,"from_pretrained()"),jp.forEach(t),cc=r(Jt," function and the decoder is loaded via "),St=s(Jt,"A",{href:!0});var xp=d(St);lc=r(xp,"from_pretrained()"),xp.forEach(t),pc=r(Jt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Jt.forEach(t),mc=p(A),Zo=s(A,"P",{});var ma=d(Zo);hc=r(ma,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Yo=s(ma,"A",{href:!0,rel:!0});var qp=d(Yo);fc=r(qp,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),qp.forEach(t),uc=r(ma,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ma.forEach(t),gc=p(A),Hn=s(A,"P",{});var zp=d(Hn);_c=r(zp,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),zp.forEach(t),bc=p(A),Jo=s(A,"P",{});var ha=d(Jo);vc=r(ha,"This model inherits from "),Nt=s(ha,"A",{href:!0});var Fp=d(Nt);yc=r(Fp,"FlaxPreTrainedModel"),Fp.forEach(t),kc=r(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(t),wc=p(A),Ko=s(A,"P",{});var fa=d(Ko);Ec=r(fa,`This model is also a Flax Linen
`),Qo=s(fa,"A",{href:!0,rel:!0});var Pp=d(Qo);Tc=r(Pp,"flax.nn.Module"),Pp.forEach(t),$c=r(fa,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fa.forEach(t),Mc=p(A),Q=s(A,"P",{});var st=d(Q);It=s(st,"A",{href:!0});var Ap=d(It);Dc=r(Ap,"FlaxEncoderDecoderModel"),Ap.forEach(t),jc=r(st,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Zn=s(st,"EM",{});var Cp=d(Zn);xc=r(Cp,"~transformers.FlaxAutoModel.from_pretrained"),Cp.forEach(t),qc=r(st,` class method for the
encoder and :meth`),Yn=s(st,"EM",{});var Sp=d(Yn);zc=r(Sp,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Sp.forEach(t),Fc=r(st," class method for the decoder."),st.forEach(t),Pc=p(A),R=s(A,"DIV",{class:!0});var oo=d(R);y(Xo.$$.fragment,oo),Ac=p(oo),ke=s(oo,"P",{});var Kt=d(ke);Cc=r(Kt,"The "),Lt=s(Kt,"A",{href:!0});var Np=d(Lt);Sc=r(Np,"FlaxEncoderDecoderModel"),Np.forEach(t),Nc=r(Kt," forward method, overrides the "),Jn=s(Kt,"CODE",{});var Ip=d(Jn);Ic=r(Ip,"__call__"),Ip.forEach(t),Lc=r(Kt," special method."),Kt.forEach(t),Oc=p(oo),y(Ze.$$.fragment,oo),Bc=p(oo),y(Ye.$$.fragment,oo),oo.forEach(t),Rc=p(A),X=s(A,"DIV",{class:!0});var Qt=d(X);y(et.$$.fragment,Qt),Wc=p(Qt),Kn=s(Qt,"P",{});var Lp=d(Kn);Vc=r(Lp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Lp.forEach(t),Gc=p(Qt),y(Je.$$.fragment,Qt),Qt.forEach(t),A.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(tm)),c(f,"id","encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#encoder-decoder-models"),c(_,"class","relative group"),c(we,"id","overview"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#overview"),c(oe,"class","relative group"),c(ct,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(no,"href","https://arxiv.org/abs/1907.12461"),c(no,"rel","nofollow"),c(lt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(pt,"href","/docs/transformers/pr_18271/en/model_doc/bert#transformers.BertModel"),c(ro,"href","https://arxiv.org/abs/1908.08345"),c(ro,"rel","nofollow"),c(Me,"id","randomly-initializing-encoderdecodermodel-from-model-configurations"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#randomly-initializing-encoderdecodermodel-from-model-configurations"),c(te,"class","relative group"),c(mt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(ht,"href","/docs/transformers/pr_18271/en/model_doc/bert#transformers.BertModel"),c(De,"id","initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(re,"class","relative group"),c(ft,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(ut,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(je,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(je,"rel","nofollow"),c(gt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel.from_encoder_decoder_pretrained"),c(xe,"id","loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference"),c(ae,"class","relative group"),c(_t,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(ze,"id","loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(se,"class","relative group"),c(Fe,"id","training"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#training"),c(ie,"class","relative group"),c(yo,"href","https://colab.research.google.com/drive/1WIk2bxglElfZewOHboPFNj8H44_VAyKE?usp=sharing#scrollTo=ZwQIEhKOrJpl"),c(yo,"rel","nofollow"),c(ko,"href","https://github.com/thomwolf"),c(ko,"rel","nofollow"),c(wo,"href","https://github.com/ydshieh"),c(wo,"rel","nofollow"),c(Ae,"id","transformers.EncoderDecoderConfig"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.EncoderDecoderConfig"),c(ce,"class","relative group"),c(bt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(vt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(yt,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),c(kt,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),c(wt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.EncoderDecoderModel"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.EncoderDecoderModel"),c(me,"class","relative group"),c(Et,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Tt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(zo,"href","https://arxiv.org/abs/1907.12461"),c(zo,"rel","nofollow"),c($t,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel"),c(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ao,"rel","nofollow"),c(Mt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(Dt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"id","transformers.TFEncoderDecoderModel"),c(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(We,"href","#transformers.TFEncoderDecoderModel"),c(ge,"class","relative group"),c(jt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(xt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Oo,"href","https://arxiv.org/abs/1907.12461"),c(Oo,"rel","nofollow"),c(qt,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(zt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(Ft,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Pt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(At,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.FlaxEncoderDecoderModel"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.FlaxEncoderDecoderModel"),c(ve,"class","relative group"),c(Ct,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(St,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Yo,"href","https://arxiv.org/abs/1907.12461"),c(Yo,"rel","nofollow"),c(Nt,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Qo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Qo,"rel","nofollow"),c(It,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(Lt,"href","/docs/transformers/pr_18271/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),u(o,$,m),u(o,_,m),e(_,f),e(f,b),k(i,b,null),e(_,g),e(_,S),e(S,ua),u(o,ir,m),u(o,oe,m),e(oe,we),e(we,Xt),k(to,Xt,null),e(oe,ga),e(oe,en),e(en,_a),u(o,cr,m),u(o,Ee,m),e(Ee,ba),e(Ee,ct),e(ct,va),e(Ee,ya),u(o,lr,m),u(o,Te,m),e(Te,ka),e(Te,no),e(no,wa),e(Te,Ea),u(o,pr,m),u(o,$e,m),e($e,Ta),e($e,lt),e(lt,$a),e($e,Ma),u(o,mr,m),u(o,H,m),e(H,Da),e(H,pt),e(pt,ja),e(H,xa),e(H,ro),e(ro,qa),e(H,za),u(o,hr,m),u(o,te,m),e(te,Me),e(Me,on),k(ao,on,null),e(te,Fa),e(te,so),e(so,Pa),e(so,tn),e(tn,Aa),e(so,Ca),u(o,fr,m),u(o,ne,m),e(ne,mt),e(mt,Sa),e(ne,Na),e(ne,ht),e(ht,Ia),e(ne,La),u(o,ur,m),k(io,o,m),u(o,gr,m),u(o,re,m),e(re,De),e(De,nn),k(co,nn,null),e(re,Oa),e(re,lo),e(lo,Ba),e(lo,rn),e(rn,Ra),e(lo,Wa),u(o,_r,m),u(o,M,m),e(M,ft),e(ft,Va),e(M,Ga),e(M,an),e(an,Ua),e(M,Ha),e(M,sn),e(sn,Za),e(M,Ya),e(M,dn),e(dn,Ja),e(M,Ka),e(M,cn),e(cn,Qa),e(M,Xa),e(M,ut),e(ut,es),e(M,os),e(M,je),e(je,ts),e(je,ln),e(ln,ns),e(M,rs),e(M,pn),e(pn,as),e(M,ss),e(M,gt),e(gt,ds),e(M,is),u(o,br,m),k(po,o,m),u(o,vr,m),u(o,ae,m),e(ae,xe),e(xe,mn),k(mo,mn,null),e(ae,cs),e(ae,ho),e(ho,ls),e(ho,hn),e(hn,ps),e(ho,ms),u(o,yr,m),u(o,I,m),e(I,hs),e(I,fn),e(fn,fs),e(I,us),e(I,_t),e(_t,gs),e(I,_s),e(I,un),e(un,bs),e(I,vs),u(o,kr,m),u(o,qe,m),e(qe,ys),e(qe,gn),e(gn,ks),e(qe,ws),u(o,wr,m),k(fo,o,m),u(o,Er,m),u(o,se,m),e(se,ze),e(ze,_n),k(uo,_n,null),e(se,Es),e(se,go),e(go,Ts),e(go,bn),e(bn,$s),e(go,Ms),u(o,Tr,m),u(o,de,m),e(de,vn),e(vn,Ds),e(de,js),e(de,yn),e(yn,xs),e(de,qs),u(o,$r,m),k(_o,o,m),u(o,Mr,m),u(o,ie,m),e(ie,Fe),e(Fe,kn),k(bo,kn,null),e(ie,zs),e(ie,wn),e(wn,Fs),u(o,Dr,m),u(o,N,m),e(N,Ps),e(N,En),e(En,As),e(N,Cs),e(N,Tn),e(Tn,Ss),e(N,Ns),e(N,$n),e($n,Is),e(N,Ls),e(N,Mn),e(Mn,Os),e(N,Bs),u(o,jr,m),k(vo,o,m),u(o,xr,m),u(o,Pe,m),e(Pe,Rs),e(Pe,yo),e(yo,Ws),e(Pe,Vs),u(o,qr,m),u(o,Z,m),e(Z,Gs),e(Z,ko),e(ko,Us),e(Z,Hs),e(Z,wo),e(wo,Zs),e(Z,Ys),u(o,zr,m),u(o,ce,m),e(ce,Ae),e(Ae,Dn),k(Eo,Dn,null),e(ce,Js),e(ce,jn),e(jn,Ks),u(o,Fr,m),u(o,C,m),k(To,C,null),e(C,Qs),e(C,Ce),e(Ce,bt),e(bt,Xs),e(Ce,ed),e(Ce,vt),e(vt,od),e(Ce,td),e(C,nd),e(C,le),e(le,rd),e(le,yt),e(yt,ad),e(le,sd),e(le,kt),e(kt,dd),e(le,id),e(C,cd),k(Se,C,null),e(C,ld),e(C,Ne),k($o,Ne,null),e(Ne,pd),e(Ne,Mo),e(Mo,md),e(Mo,wt),e(wt,hd),e(Mo,fd),e(C,ud),e(C,Ie),k(Do,Ie,null),e(Ie,gd),e(Ie,pe),e(pe,_d),e(pe,xn),e(xn,bd),e(pe,vd),e(pe,qn),e(qn,yd),e(pe,kd),u(o,Pr,m),u(o,me,m),e(me,Le),e(Le,zn),k(jo,zn,null),e(me,wd),e(me,Fn),e(Fn,Ed),u(o,Ar,m),u(o,D,m),k(xo,D,null),e(D,Td),e(D,he),e(he,$d),e(he,Et),e(Et,Md),e(he,Dd),e(he,Tt),e(Tt,jd),e(he,xd),e(D,qd),e(D,qo),e(qo,zd),e(qo,zo),e(zo,Fd),e(qo,Pd),e(D,Ad),e(D,Pn),e(Pn,Cd),e(D,Sd),e(D,Fo),e(Fo,Nd),e(Fo,$t),e($t,Id),e(Fo,Ld),e(D,Od),e(D,Po),e(Po,Bd),e(Po,Ao),e(Ao,Rd),e(Po,Wd),e(D,Vd),e(D,Y),e(Y,Mt),e(Mt,Gd),e(Y,Ud),e(Y,An),e(An,Hd),e(Y,Zd),e(Y,Cn),e(Cn,Yd),e(Y,Jd),e(D,Kd),e(D,L),k(Co,L,null),e(L,Qd),e(L,fe),e(fe,Xd),e(fe,Dt),e(Dt,ei),e(fe,oi),e(fe,Sn),e(Sn,ti),e(fe,ni),e(L,ri),k(Oe,L,null),e(L,ai),k(Be,L,null),e(D,si),e(D,O),k(So,O,null),e(O,di),e(O,Nn),e(Nn,ii),e(O,ci),e(O,ue),e(ue,li),e(ue,In),e(In,pi),e(ue,mi),e(ue,Ln),e(Ln,hi),e(ue,fi),e(O,ui),k(Re,O,null),u(o,Cr,m),u(o,ge,m),e(ge,We),e(We,On),k(No,On,null),e(ge,gi),e(ge,Bn),e(Bn,_i),u(o,Sr,m),u(o,j,m),k(Io,j,null),e(j,bi),e(j,_e),e(_e,vi),e(_e,jt),e(jt,yi),e(_e,ki),e(_e,xt),e(xt,wi),e(_e,Ei),e(j,Ti),e(j,Lo),e(Lo,$i),e(Lo,Oo),e(Oo,Mi),e(Lo,Di),e(j,ji),e(j,Rn),e(Rn,xi),e(j,qi),e(j,Bo),e(Bo,zi),e(Bo,qt),e(qt,Fi),e(Bo,Pi),e(j,Ai),e(j,Ro),e(Ro,Ci),e(Ro,Wo),e(Wo,Si),e(Ro,Ni),e(j,Ii),e(j,J),e(J,zt),e(zt,Li),e(J,Oi),e(J,Ft),e(Ft,Bi),e(J,Ri),e(J,Pt),e(Pt,Wi),e(J,Vi),e(j,Gi),e(j,B),k(Vo,B,null),e(B,Ui),e(B,be),e(be,Hi),e(be,At),e(At,Zi),e(be,Yi),e(be,Wn),e(Wn,Ji),e(be,Ki),e(B,Qi),k(Ve,B,null),e(B,Xi),k(Ge,B,null),e(j,ec),e(j,K),k(Go,K,null),e(K,oc),e(K,Vn),e(Vn,tc),e(K,nc),k(Ue,K,null),u(o,Nr,m),u(o,ve,m),e(ve,He),e(He,Gn),k(Uo,Gn,null),e(ve,rc),e(ve,Un),e(Un,ac),u(o,Ir,m),u(o,x,m),k(Ho,x,null),e(x,sc),e(x,ye),e(ye,dc),e(ye,Ct),e(Ct,ic),e(ye,cc),e(ye,St),e(St,lc),e(ye,pc),e(x,mc),e(x,Zo),e(Zo,hc),e(Zo,Yo),e(Yo,fc),e(Zo,uc),e(x,gc),e(x,Hn),e(Hn,_c),e(x,bc),e(x,Jo),e(Jo,vc),e(Jo,Nt),e(Nt,yc),e(Jo,kc),e(x,wc),e(x,Ko),e(Ko,Ec),e(Ko,Qo),e(Qo,Tc),e(Ko,$c),e(x,Mc),e(x,Q),e(Q,It),e(It,Dc),e(Q,jc),e(Q,Zn),e(Zn,xc),e(Q,qc),e(Q,Yn),e(Yn,zc),e(Q,Fc),e(x,Pc),e(x,R),k(Xo,R,null),e(R,Ac),e(R,ke),e(ke,Cc),e(ke,Lt),e(Lt,Sc),e(ke,Nc),e(ke,Jn),e(Jn,Ic),e(ke,Lc),e(R,Oc),k(Ze,R,null),e(R,Bc),k(Ye,R,null),e(x,Rc),e(x,X),k(et,X,null),e(X,Wc),e(X,Kn),e(Kn,Vc),e(X,Gc),k(Je,X,null),Lr=!0},p(o,[m]){const ot={};m&2&&(ot.$$scope={dirty:m,ctx:o}),Se.$set(ot);const Qn={};m&2&&(Qn.$$scope={dirty:m,ctx:o}),Oe.$set(Qn);const Xn={};m&2&&(Xn.$$scope={dirty:m,ctx:o}),Be.$set(Xn);const er={};m&2&&(er.$$scope={dirty:m,ctx:o}),Re.$set(er);const tt={};m&2&&(tt.$$scope={dirty:m,ctx:o}),Ve.$set(tt);const or={};m&2&&(or.$$scope={dirty:m,ctx:o}),Ge.$set(or);const tr={};m&2&&(tr.$$scope={dirty:m,ctx:o}),Ue.$set(tr);const nr={};m&2&&(nr.$$scope={dirty:m,ctx:o}),Ze.$set(nr);const nt={};m&2&&(nt.$$scope={dirty:m,ctx:o}),Ye.$set(nt);const rr={};m&2&&(rr.$$scope={dirty:m,ctx:o}),Je.$set(rr)},i(o){Lr||(w(i.$$.fragment,o),w(to.$$.fragment,o),w(ao.$$.fragment,o),w(io.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),w(mo.$$.fragment,o),w(fo.$$.fragment,o),w(uo.$$.fragment,o),w(_o.$$.fragment,o),w(bo.$$.fragment,o),w(vo.$$.fragment,o),w(Eo.$$.fragment,o),w(To.$$.fragment,o),w(Se.$$.fragment,o),w($o.$$.fragment,o),w(Do.$$.fragment,o),w(jo.$$.fragment,o),w(xo.$$.fragment,o),w(Co.$$.fragment,o),w(Oe.$$.fragment,o),w(Be.$$.fragment,o),w(So.$$.fragment,o),w(Re.$$.fragment,o),w(No.$$.fragment,o),w(Io.$$.fragment,o),w(Vo.$$.fragment,o),w(Ve.$$.fragment,o),w(Ge.$$.fragment,o),w(Go.$$.fragment,o),w(Ue.$$.fragment,o),w(Uo.$$.fragment,o),w(Ho.$$.fragment,o),w(Xo.$$.fragment,o),w(Ze.$$.fragment,o),w(Ye.$$.fragment,o),w(et.$$.fragment,o),w(Je.$$.fragment,o),Lr=!0)},o(o){E(i.$$.fragment,o),E(to.$$.fragment,o),E(ao.$$.fragment,o),E(io.$$.fragment,o),E(co.$$.fragment,o),E(po.$$.fragment,o),E(mo.$$.fragment,o),E(fo.$$.fragment,o),E(uo.$$.fragment,o),E(_o.$$.fragment,o),E(bo.$$.fragment,o),E(vo.$$.fragment,o),E(Eo.$$.fragment,o),E(To.$$.fragment,o),E(Se.$$.fragment,o),E($o.$$.fragment,o),E(Do.$$.fragment,o),E(jo.$$.fragment,o),E(xo.$$.fragment,o),E(Co.$$.fragment,o),E(Oe.$$.fragment,o),E(Be.$$.fragment,o),E(So.$$.fragment,o),E(Re.$$.fragment,o),E(No.$$.fragment,o),E(Io.$$.fragment,o),E(Vo.$$.fragment,o),E(Ve.$$.fragment,o),E(Ge.$$.fragment,o),E(Go.$$.fragment,o),E(Ue.$$.fragment,o),E(Uo.$$.fragment,o),E(Ho.$$.fragment,o),E(Xo.$$.fragment,o),E(Ze.$$.fragment,o),E(Ye.$$.fragment,o),E(et.$$.fragment,o),E(Je.$$.fragment,o),Lr=!1},d(o){t(h),o&&t($),o&&t(_),T(i),o&&t(ir),o&&t(oe),T(to),o&&t(cr),o&&t(Ee),o&&t(lr),o&&t(Te),o&&t(pr),o&&t($e),o&&t(mr),o&&t(H),o&&t(hr),o&&t(te),T(ao),o&&t(fr),o&&t(ne),o&&t(ur),T(io,o),o&&t(gr),o&&t(re),T(co),o&&t(_r),o&&t(M),o&&t(br),T(po,o),o&&t(vr),o&&t(ae),T(mo),o&&t(yr),o&&t(I),o&&t(kr),o&&t(qe),o&&t(wr),T(fo,o),o&&t(Er),o&&t(se),T(uo),o&&t(Tr),o&&t(de),o&&t($r),T(_o,o),o&&t(Mr),o&&t(ie),T(bo),o&&t(Dr),o&&t(N),o&&t(jr),T(vo,o),o&&t(xr),o&&t(Pe),o&&t(qr),o&&t(Z),o&&t(zr),o&&t(ce),T(Eo),o&&t(Fr),o&&t(C),T(To),T(Se),T($o),T(Do),o&&t(Pr),o&&t(me),T(jo),o&&t(Ar),o&&t(D),T(xo),T(Co),T(Oe),T(Be),T(So),T(Re),o&&t(Cr),o&&t(ge),T(No),o&&t(Sr),o&&t(j),T(Io),T(Vo),T(Ve),T(Ge),T(Go),T(Ue),o&&t(Nr),o&&t(ve),T(Uo),o&&t(Ir),o&&t(x),T(Ho),T(Xo),T(Ze),T(Ye),T(et),T(Je)}}}const tm={local:"encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-encoderdecodermodel-from-model-configurations",title:"Randomly initializing `EncoderDecoderModel` from model configurations."},{local:"initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `EncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `EncoderDecoderModel` checkpoint and perform inference."},{local:"loading-a-pytorch-checkpoint-into-tfencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function nm(q){return Vp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lm extends Op{constructor(h){super();Bp(this,h,nm,om,Rp,{})}}export{lm as default,tm as metadata};
