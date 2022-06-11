import{S as ip,i as cp,s as lp,e as a,k as l,w as y,t as n,M as pp,c as s,d as t,m as p,a as d,x as w,h as r,b as c,G as e,g as u,y as k,q as E,o as T,B as $,v as mp,L as et}from"../../chunks/vendor-hf-doc-builder.js";import{T as vc}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as R}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Xo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hp(j){let h,v,_,f,b;return f=new R({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:et,i(i){b||(E(f.$$.fragment,i),b=!0)},o(i){T(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function fp(j){let h,v,_,f,b;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,v),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function up(j){let h,v,_,f,b;return f=new R({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:et,i(i){b||(E(f.$$.fragment,i),b=!0)},o(i){T(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function gp(j){let h,v,_,f,b;return f=new R({props:{code:`from transformers import EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){h=a("p"),v=n("Example:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Example:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:et,i(i){b||(E(f.$$.fragment,i),b=!0)},o(i){T(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function _p(j){let h,v,_,f,b;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,v),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function bp(j){let h,v,_,f,b;return f=new R({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:et,i(i){b||(E(f.$$.fragment,i),b=!0)},o(i){T(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function vp(j){let h,v,_,f,b;return f=new R({props:{code:`from transformers import TFEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),v=n("Example:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Example:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:et,i(i){b||(E(f.$$.fragment,i),b=!0)},o(i){T(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function yp(j){let h,v,_,f,b;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,v),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function wp(j){let h,v,_,f,b;return f=new R({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:et,i(i){b||(E(f.$$.fragment,i),b=!0)},o(i){T(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function kp(j){let h,v,_,f,b;return f=new R({props:{code:`from transformers import FlaxEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),v=n("Example:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Example:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:et,i(i){b||(E(f.$$.fragment,i),b=!0)},o(i){T(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function Ep(j){let h,v,_,f,b,i,g,S,Xr,Qn,oe,we,Gt,Xe,ea,Ht,oa,Xn,ke,ta,ot,na,ra,er,Ee,aa,eo,sa,da,or,Te,ia,tt,ca,la,tr,G,pa,nt,ma,ha,oo,fa,ua,nr,te,$e,Ut,to,ga,Yt,_a,rr,ne,rt,ba,va,at,ya,wa,ar,no,sr,re,Me,Jt,ro,ka,Zt,Ea,dr,M,st,Ta,$a,Kt,Ma,Da,Qt,xa,qa,Xt,ja,za,en,Pa,Fa,dt,Aa,Ca,De,Sa,on,Na,Ia,tn,Ba,La,it,Oa,Wa,ir,ao,cr,ae,xe,nn,so,Va,rn,Ra,lr,H,Ga,an,Ha,Ua,sn,Ya,Ja,pr,io,mr,qe,Za,dn,Ka,Qa,hr,se,cn,Xa,es,ln,os,ts,fr,co,ur,de,je,pn,lo,ns,mn,rs,gr,N,as,hn,ss,ds,fn,is,cs,un,ls,ps,gn,ms,hs,_r,po,br,ze,fs,mo,us,gs,vr,U,_s,ho,bs,vs,fo,ys,ws,yr,ie,Pe,_n,uo,ks,bn,Es,wr,C,go,Ts,Fe,ct,$s,Ms,lt,Ds,xs,qs,ce,js,pt,zs,Ps,mt,Fs,As,Cs,Ae,Ss,Ce,_o,Ns,bo,Is,ht,Bs,Ls,Os,Se,vo,Ws,le,Vs,vn,Rs,Gs,yn,Hs,Us,kr,pe,Ne,wn,yo,Ys,kn,Js,Er,D,wo,Zs,me,Ks,ft,Qs,Xs,ut,ed,od,td,ko,nd,Eo,rd,ad,sd,En,dd,id,To,cd,gt,ld,pd,md,$o,hd,Mo,fd,ud,gd,Y,_t,_d,bd,Tn,vd,yd,$n,wd,kd,Ed,I,Do,Td,he,$d,bt,Md,Dd,Mn,xd,qd,jd,Ie,zd,Be,Pd,B,xo,Fd,Dn,Ad,Cd,fe,Sd,xn,Nd,Id,qn,Bd,Ld,Od,Le,Tr,ue,Oe,jn,qo,Wd,zn,Vd,$r,x,jo,Rd,ge,Gd,vt,Hd,Ud,yt,Yd,Jd,Zd,zo,Kd,Po,Qd,Xd,ei,Pn,oi,ti,Fo,ni,wt,ri,ai,si,Ao,di,Co,ii,ci,li,J,kt,pi,mi,Et,hi,fi,Tt,ui,gi,_i,L,So,bi,_e,vi,$t,yi,wi,Fn,ki,Ei,Ti,We,$i,Ve,Mi,Z,No,Di,An,xi,qi,Re,Mr,be,Ge,Cn,Io,ji,Sn,zi,Dr,q,Bo,Pi,ve,Fi,Mt,Ai,Ci,Dt,Si,Ni,Ii,Lo,Bi,Oo,Li,Oi,Wi,Nn,Vi,Ri,Wo,Gi,xt,Hi,Ui,Yi,Vo,Ji,Ro,Zi,Ki,Qi,K,qt,Xi,ec,In,oc,tc,Bn,nc,rc,ac,O,Go,sc,ye,dc,jt,ic,cc,Ln,lc,pc,mc,He,hc,Ue,fc,Q,Ho,uc,On,gc,_c,Ye,xr;return i=new ee({}),Xe=new ee({}),to=new ee({}),no=new R({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = EncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)`}}),ro=new ee({}),ao=new R({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),so=new ee({}),io=new R({props:{code:`from transformers import EncoderDecoderModel

model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert_cnn_daily_mail")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert_cnn_daily_mail&quot;</span>)`}}),co=new R({props:{code:`# a workaround to load from pytorch checkpoint
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),lo=new ee({}),po=new R({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")

input_ids = tokenizer(
    "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was  finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft).Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",
    return_tensors="pt",
).input_ids

labels = tokenizer(
    "the eiffel tower surpassed the washington monument to become the tallest structure in the world. it was the first structure to reach a height of 300 metres in paris in 1930. it is now taller than the chrysler building by 5. 2 metres ( 17 ft ) and is the second tallest free - standing structure in paris.",
    return_tensors="pt",
).input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was  finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft).Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the eiffel tower surpassed the washington monument to become the tallest structure in the world. it was the first structure to reach a height of 300 metres in paris in 1930. it is now taller than the chrysler building by 5. 2 metres ( 17 ft ) and is the second tallest free - standing structure in paris.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.72</span>`}}),uo=new ee({}),go=new V({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),Ae=new Xo({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[hp]},$$scope:{ctx:j}}}),_o=new V({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),vo=new V({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),yo=new ee({}),wo=new V({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),Do=new V({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17287/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/pr_17287/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new vc({props:{$$slots:{default:[fp]},$$scope:{ctx:j}}}),Be=new Xo({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[up]},$$scope:{ctx:j}}}),xo=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),Le=new Xo({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[gp]},$$scope:{ctx:j}}}),qo=new ee({}),jo=new V({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),So=new V({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L495",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17287/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/pr_17287/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),We=new vc({props:{$$slots:{default:[_p]},$$scope:{ctx:j}}}),Ve=new Xo({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[bp]},$$scope:{ctx:j}}}),No=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),Re=new Xo({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[vp]},$$scope:{ctx:j}}}),Io=new ee({}),Bo=new V({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),Go=new V({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L628",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17287/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/pr_17287/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new vc({props:{$$slots:{default:[yp]},$$scope:{ctx:j}}}),Ue=new Xo({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[wp]},$$scope:{ctx:j}}}),Ho=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Ye=new Xo({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[kp]},$$scope:{ctx:j}}}),{c(){h=a("meta"),v=l(),_=a("h1"),f=a("a"),b=a("span"),y(i.$$.fragment),g=l(),S=a("span"),Xr=n("Encoder Decoder Models"),Qn=l(),oe=a("h2"),we=a("a"),Gt=a("span"),y(Xe.$$.fragment),ea=l(),Ht=a("span"),oa=n("Overview"),Xn=l(),ke=a("p"),ta=n("The "),ot=a("a"),na=n("EncoderDecoderModel"),ra=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),er=l(),Ee=a("p"),aa=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),eo=a("a"),sa=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),da=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),or=l(),Te=a("p"),ia=n("After such an "),tt=a("a"),ca=n("EncoderDecoderModel"),la=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),tr=l(),G=a("p"),pa=n("An application of this architecture could be to leverage two pretrained "),nt=a("a"),ma=n("BertModel"),ha=n(` as the encoder
and decoder for a summarization model as was shown in: `),oo=a("a"),fa=n("Text Summarization with Pretrained Encoders"),ua=n(" by Yang Liu and Mirella Lapata."),nr=l(),te=a("h2"),$e=a("a"),Ut=a("span"),y(to.$$.fragment),ga=l(),Yt=a("span"),_a=n("Randomely initializing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from model configurations."),rr=l(),ne=a("p"),rt=a("a"),ba=n("EncoderDecoderModel"),va=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we should how to do this using the default "),at=a("a"),ya=n("BertModel"),wa=n(" configuration for both the encoder and the decoder."),ar=l(),y(no.$$.fragment),sr=l(),re=a("h2"),Me=a("a"),Jt=a("span"),y(ro.$$.fragment),ka=l(),Zt=a("span"),Ea=n("Initialising [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from a pretrained encoder and a pretrained decoder."),dr=l(),M=a("p"),st=a("a"),Ta=n("EncoderDecoderModel"),$a=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),Kt=a("em"),Ma=n("e.g."),Da=n(" BERT, can serve as the encoder and both pretrained auto-encoding models, "),Qt=a("em"),xa=n("e.g."),qa=n(" BERT, pretrained causal language models, "),Xt=a("em"),ja=n("e.g."),za=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),en=a("em"),Pa=n("e.g."),Fa=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),dt=a("a"),Aa=n("EncoderDecoderModel"),Ca=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),De=a("a"),Sa=n("the "),on=a("em"),Na=n("Warm-starting-encoder-decoder blog post"),Ia=n(`.
To do so, the `),tn=a("code"),Ba=n("EncoderDecoderModel"),La=n(" class provides a "),it=a("a"),Oa=n("EncoderDecoderModel.from_encoder_decoder_pretrained()"),Wa=n(" function."),ir=l(),y(ao.$$.fragment),cr=l(),ae=a("h2"),xe=a("a"),nn=a("span"),y(so.$$.fragment),Va=l(),rn=a("span"),Ra=n("Loading an existing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) checkpoint."),lr=l(),H=a("p"),Ga=n("To load fine-tuned checkpoints of the "),an=a("code"),Ha=n("EncoderDecoderModel"),Ua=n(" class, [\u2018EncoderDecoderModel`] provides the "),sn=a("code"),Ya=n("from_pretrained(...)"),Ja=n(" method just like any other model architectures in Transformers."),pr=l(),y(io.$$.fragment),mr=l(),qe=a("p"),Za=n("##Loading a PyTorch checkpoint into "),dn=a("code"),Ka=n("TFEncoderDecoderModel"),Qa=n("."),hr=l(),se=a("p"),cn=a("code"),Xa=n("TFEncoderDecoderModel.from_pretrained()"),es=n(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),ln=a("code"),os=n("from_pt=True"),ts=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),fr=l(),y(co.$$.fragment),ur=l(),de=a("h2"),je=a("a"),pn=a("span"),y(lo.$$.fragment),ns=l(),mn=a("span"),rs=n("Training"),gr=l(),N=a("p"),as=n(`Once the model is created,it can be finetuned simliar to Bart,T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),hn=a("code"),ss=n("input_ids"),ds=n(` (which are the
`),fn=a("code"),is=n("input_ids"),cs=n(" of the encoded input sequence) and "),un=a("code"),ls=n("labels"),ps=n(" (which are the "),gn=a("code"),ms=n("input_ids"),hs=n(` of the encoded
target sequence).`),_r=l(),y(po.$$.fragment),br=l(),ze=a("p"),fs=n("Detailed "),mo=a("a"),us=n("colab"),gs=n(" for training."),vr=l(),U=a("p"),_s=n("This model was contributed by "),ho=a("a"),bs=n("thomwolf"),vs=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),fo=a("a"),ys=n("ydshieh"),ws=n("."),yr=l(),ie=a("h2"),Pe=a("a"),_n=a("span"),y(uo.$$.fragment),ks=l(),bn=a("span"),Es=n("EncoderDecoderConfig"),wr=l(),C=a("div"),y(go.$$.fragment),Ts=l(),Fe=a("p"),ct=a("a"),$s=n("EncoderDecoderConfig"),Ms=n(" is the configuration class to store the configuration of a "),lt=a("a"),Ds=n("EncoderDecoderModel"),xs=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),qs=l(),ce=a("p"),js=n("Configuration objects inherit from "),pt=a("a"),zs=n("PretrainedConfig"),Ps=n(` and can be used to control the model outputs. Read the
documentation from `),mt=a("a"),Fs=n("PretrainedConfig"),As=n(" for more information."),Cs=l(),y(Ae.$$.fragment),Ss=l(),Ce=a("div"),y(_o.$$.fragment),Ns=l(),bo=a("p"),Is=n("Instantiate a "),ht=a("a"),Bs=n("EncoderDecoderConfig"),Ls=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),Os=l(),Se=a("div"),y(vo.$$.fragment),Ws=l(),le=a("p"),Vs=n("Serializes this instance to a Python dictionary. Override the default "),vn=a("em"),Rs=n("to_dict()"),Gs=n(" from "),yn=a("em"),Hs=n("PretrainedConfig"),Us=n("."),kr=l(),pe=a("h2"),Ne=a("a"),wn=a("span"),y(yo.$$.fragment),Ys=l(),kn=a("span"),Js=n("EncoderDecoderModel"),Er=l(),D=a("div"),y(wo.$$.fragment),Zs=l(),me=a("p"),Ks=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),ft=a("a"),Qs=n("from_pretrained()"),Xs=n(" function and the decoder is loaded via "),ut=a("a"),ed=n("from_pretrained()"),od=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),td=l(),ko=a("p"),nd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Eo=a("a"),rd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ad=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),sd=l(),En=a("p"),dd=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),id=l(),To=a("p"),cd=n("This model inherits from "),gt=a("a"),ld=n("PreTrainedModel"),pd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md=l(),$o=a("p"),hd=n("This model is also a PyTorch "),Mo=a("a"),fd=n("torch.nn.Module"),ud=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd=l(),Y=a("p"),_t=a("a"),_d=n("EncoderDecoderModel"),bd=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Tn=a("em"),vd=n("~transformers.AutoModel.from_pretrained"),yd=n(` class method for the encoder and
:meth`),$n=a("em"),wd=n("~transformers.AutoModelForCausalLM.from_pretrained"),kd=n(" class method for the decoder."),Ed=l(),I=a("div"),y(Do.$$.fragment),Td=l(),he=a("p"),$d=n("The "),bt=a("a"),Md=n("EncoderDecoderModel"),Dd=n(" forward method, overrides the "),Mn=a("code"),xd=n("__call__"),qd=n(" special method."),jd=l(),y(Ie.$$.fragment),zd=l(),y(Be.$$.fragment),Pd=l(),B=a("div"),y(xo.$$.fragment),Fd=l(),Dn=a("p"),Ad=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Cd=l(),fe=a("p"),Sd=n("The model is set in evaluation mode by default using "),xn=a("code"),Nd=n("model.eval()"),Id=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),qn=a("code"),Bd=n("model.train()"),Ld=n("."),Od=l(),y(Le.$$.fragment),Tr=l(),ue=a("h2"),Oe=a("a"),jn=a("span"),y(qo.$$.fragment),Wd=l(),zn=a("span"),Vd=n("TFEncoderDecoderModel"),$r=l(),x=a("div"),y(jo.$$.fragment),Rd=l(),ge=a("p"),Gd=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),vt=a("a"),Hd=n("from_pretrained()"),Ud=n(" function and the decoder is loaded via "),yt=a("a"),Yd=n("from_pretrained()"),Jd=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Zd=l(),zo=a("p"),Kd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Po=a("a"),Qd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Xd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ei=l(),Pn=a("p"),oi=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ti=l(),Fo=a("p"),ni=n("This model inherits from "),wt=a("a"),ri=n("TFPreTrainedModel"),ai=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si=l(),Ao=a("p"),di=n("This model is also a "),Co=a("a"),ii=n("tf.keras.Model"),ci=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li=l(),J=a("p"),kt=a("a"),pi=n("TFEncoderDecoderModel"),mi=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Et=a("a"),hi=n("from_pretrained()"),fi=n(" class method for the encoder and "),Tt=a("a"),ui=n("from_pretrained()"),gi=n(` class
method for the decoder.`),_i=l(),L=a("div"),y(So.$$.fragment),bi=l(),_e=a("p"),vi=n("The "),$t=a("a"),yi=n("TFEncoderDecoderModel"),wi=n(" forward method, overrides the "),Fn=a("code"),ki=n("__call__"),Ei=n(" special method."),Ti=l(),y(We.$$.fragment),$i=l(),y(Ve.$$.fragment),Mi=l(),Z=a("div"),y(No.$$.fragment),Di=l(),An=a("p"),xi=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),qi=l(),y(Re.$$.fragment),Mr=l(),be=a("h2"),Ge=a("a"),Cn=a("span"),y(Io.$$.fragment),ji=l(),Sn=a("span"),zi=n("FlaxEncoderDecoderModel"),Dr=l(),q=a("div"),y(Bo.$$.fragment),Pi=l(),ve=a("p"),Fi=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Mt=a("a"),Ai=n("from_pretrained()"),Ci=n(" function and the decoder is loaded via "),Dt=a("a"),Si=n("from_pretrained()"),Ni=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Ii=l(),Lo=a("p"),Bi=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Oo=a("a"),Li=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Oi=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Wi=l(),Nn=a("p"),Vi=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Ri=l(),Wo=a("p"),Gi=n("This model inherits from "),xt=a("a"),Hi=n("FlaxPreTrainedModel"),Ui=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yi=l(),Vo=a("p"),Ji=n(`This model is also a Flax Linen
`),Ro=a("a"),Zi=n("flax.nn.Module"),Ki=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qi=l(),K=a("p"),qt=a("a"),Xi=n("FlaxEncoderDecoderModel"),ec=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),In=a("em"),oc=n("~transformers.FlaxAutoModel.from_pretrained"),tc=n(` class method for the
encoder and :meth`),Bn=a("em"),nc=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),rc=n(" class method for the decoder."),ac=l(),O=a("div"),y(Go.$$.fragment),sc=l(),ye=a("p"),dc=n("The "),jt=a("a"),ic=n("FlaxEncoderDecoderModel"),cc=n(" forward method, overrides the "),Ln=a("code"),lc=n("__call__"),pc=n(" special method."),mc=l(),y(He.$$.fragment),hc=l(),y(Ue.$$.fragment),fc=l(),Q=a("div"),y(Ho.$$.fragment),uc=l(),On=a("p"),gc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),_c=l(),y(Ye.$$.fragment),this.h()},l(o){const m=pp('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),v=p(o),_=s(o,"H1",{class:!0});var Uo=d(_);f=s(Uo,"A",{id:!0,class:!0,href:!0});var Wn=d(f);b=s(Wn,"SPAN",{});var Vn=d(b);w(i.$$.fragment,Vn),Vn.forEach(t),Wn.forEach(t),g=p(Uo),S=s(Uo,"SPAN",{});var Rn=d(S);Xr=r(Rn,"Encoder Decoder Models"),Rn.forEach(t),Uo.forEach(t),Qn=p(o),oe=s(o,"H2",{class:!0});var Yo=d(oe);we=s(Yo,"A",{id:!0,class:!0,href:!0});var Gn=d(we);Gt=s(Gn,"SPAN",{});var Hn=d(Gt);w(Xe.$$.fragment,Hn),Hn.forEach(t),Gn.forEach(t),ea=p(Yo),Ht=s(Yo,"SPAN",{});var Un=d(Ht);oa=r(Un,"Overview"),Un.forEach(t),Yo.forEach(t),Xn=p(o),ke=s(o,"P",{});var Jo=d(ke);ta=r(Jo,"The "),ot=s(Jo,"A",{href:!0});var Yn=d(ot);na=r(Yn,"EncoderDecoderModel"),Yn.forEach(t),ra=r(Jo,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Jo.forEach(t),er=p(o),Ee=s(o,"P",{});var qr=d(Ee);aa=r(qr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),eo=s(qr,"A",{href:!0,rel:!0});var yc=d(eo);sa=r(yc,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),yc.forEach(t),da=r(qr,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),qr.forEach(t),or=p(o),Te=s(o,"P",{});var jr=d(Te);ia=r(jr,"After such an "),tt=s(jr,"A",{href:!0});var wc=d(tt);ca=r(wc,"EncoderDecoderModel"),wc.forEach(t),la=r(jr,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),jr.forEach(t),tr=p(o),G=s(o,"P",{});var zt=d(G);pa=r(zt,"An application of this architecture could be to leverage two pretrained "),nt=s(zt,"A",{href:!0});var kc=d(nt);ma=r(kc,"BertModel"),kc.forEach(t),ha=r(zt,` as the encoder
and decoder for a summarization model as was shown in: `),oo=s(zt,"A",{href:!0,rel:!0});var Ec=d(oo);fa=r(Ec,"Text Summarization with Pretrained Encoders"),Ec.forEach(t),ua=r(zt," by Yang Liu and Mirella Lapata."),zt.forEach(t),nr=p(o),te=s(o,"H2",{class:!0});var zr=d(te);$e=s(zr,"A",{id:!0,class:!0,href:!0});var Tc=d($e);Ut=s(Tc,"SPAN",{});var $c=d(Ut);w(to.$$.fragment,$c),$c.forEach(t),Tc.forEach(t),ga=p(zr),Yt=s(zr,"SPAN",{});var Mc=d(Yt);_a=r(Mc,"Randomely initializing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from model configurations."),Mc.forEach(t),zr.forEach(t),rr=p(o),ne=s(o,"P",{});var Jn=d(ne);rt=s(Jn,"A",{href:!0});var Dc=d(rt);ba=r(Dc,"EncoderDecoderModel"),Dc.forEach(t),va=r(Jn," can be randomly initialized from an encoder and a decoder config. In the following example, we should how to do this using the default "),at=s(Jn,"A",{href:!0});var xc=d(at);ya=r(xc,"BertModel"),xc.forEach(t),wa=r(Jn," configuration for both the encoder and the decoder."),Jn.forEach(t),ar=p(o),w(no.$$.fragment,o),sr=p(o),re=s(o,"H2",{class:!0});var Pr=d(re);Me=s(Pr,"A",{id:!0,class:!0,href:!0});var qc=d(Me);Jt=s(qc,"SPAN",{});var jc=d(Jt);w(ro.$$.fragment,jc),jc.forEach(t),qc.forEach(t),ka=p(Pr),Zt=s(Pr,"SPAN",{});var zc=d(Zt);Ea=r(zc,"Initialising [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from a pretrained encoder and a pretrained decoder."),zc.forEach(t),Pr.forEach(t),dr=p(o),M=s(o,"P",{});var z=d(M);st=s(z,"A",{href:!0});var Pc=d(st);Ta=r(Pc,"EncoderDecoderModel"),Pc.forEach(t),$a=r(z," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),Kt=s(z,"EM",{});var Fc=d(Kt);Ma=r(Fc,"e.g."),Fc.forEach(t),Da=r(z," BERT, can serve as the encoder and both pretrained auto-encoding models, "),Qt=s(z,"EM",{});var Ac=d(Qt);xa=r(Ac,"e.g."),Ac.forEach(t),qa=r(z," BERT, pretrained causal language models, "),Xt=s(z,"EM",{});var Cc=d(Xt);ja=r(Cc,"e.g."),Cc.forEach(t),za=r(z," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),en=s(z,"EM",{});var Sc=d(en);Pa=r(Sc,"e.g."),Sc.forEach(t),Fa=r(z,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),dt=s(z,"A",{href:!0});var Nc=d(dt);Aa=r(Nc,"EncoderDecoderModel"),Nc.forEach(t),Ca=r(z," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),De=s(z,"A",{href:!0,rel:!0});var bc=d(De);Sa=r(bc,"the "),on=s(bc,"EM",{});var Ic=d(on);Na=r(Ic,"Warm-starting-encoder-decoder blog post"),Ic.forEach(t),bc.forEach(t),Ia=r(z,`.
To do so, the `),tn=s(z,"CODE",{});var Bc=d(tn);Ba=r(Bc,"EncoderDecoderModel"),Bc.forEach(t),La=r(z," class provides a "),it=s(z,"A",{href:!0});var Lc=d(it);Oa=r(Lc,"EncoderDecoderModel.from_encoder_decoder_pretrained()"),Lc.forEach(t),Wa=r(z," function."),z.forEach(t),ir=p(o),w(ao.$$.fragment,o),cr=p(o),ae=s(o,"H2",{class:!0});var Fr=d(ae);xe=s(Fr,"A",{id:!0,class:!0,href:!0});var Oc=d(xe);nn=s(Oc,"SPAN",{});var Wc=d(nn);w(so.$$.fragment,Wc),Wc.forEach(t),Oc.forEach(t),Va=p(Fr),rn=s(Fr,"SPAN",{});var Vc=d(rn);Ra=r(Vc,"Loading an existing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) checkpoint."),Vc.forEach(t),Fr.forEach(t),lr=p(o),H=s(o,"P",{});var Pt=d(H);Ga=r(Pt,"To load fine-tuned checkpoints of the "),an=s(Pt,"CODE",{});var Rc=d(an);Ha=r(Rc,"EncoderDecoderModel"),Rc.forEach(t),Ua=r(Pt," class, [\u2018EncoderDecoderModel`] provides the "),sn=s(Pt,"CODE",{});var Gc=d(sn);Ya=r(Gc,"from_pretrained(...)"),Gc.forEach(t),Ja=r(Pt," method just like any other model architectures in Transformers."),Pt.forEach(t),pr=p(o),w(io.$$.fragment,o),mr=p(o),qe=s(o,"P",{});var Ar=d(qe);Za=r(Ar,"##Loading a PyTorch checkpoint into "),dn=s(Ar,"CODE",{});var Hc=d(dn);Ka=r(Hc,"TFEncoderDecoderModel"),Hc.forEach(t),Qa=r(Ar,"."),Ar.forEach(t),hr=p(o),se=s(o,"P",{});var Zn=d(se);cn=s(Zn,"CODE",{});var Uc=d(cn);Xa=r(Uc,"TFEncoderDecoderModel.from_pretrained()"),Uc.forEach(t),es=r(Zn,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),ln=s(Zn,"CODE",{});var Yc=d(ln);os=r(Yc,"from_pt=True"),Yc.forEach(t),ts=r(Zn,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Zn.forEach(t),fr=p(o),w(co.$$.fragment,o),ur=p(o),de=s(o,"H2",{class:!0});var Cr=d(de);je=s(Cr,"A",{id:!0,class:!0,href:!0});var Jc=d(je);pn=s(Jc,"SPAN",{});var Zc=d(pn);w(lo.$$.fragment,Zc),Zc.forEach(t),Jc.forEach(t),ns=p(Cr),mn=s(Cr,"SPAN",{});var Kc=d(mn);rs=r(Kc,"Training"),Kc.forEach(t),Cr.forEach(t),gr=p(o),N=s(o,"P",{});var X=d(N);as=r(X,`Once the model is created,it can be finetuned simliar to Bart,T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),hn=s(X,"CODE",{});var Qc=d(hn);ss=r(Qc,"input_ids"),Qc.forEach(t),ds=r(X,` (which are the
`),fn=s(X,"CODE",{});var Xc=d(fn);is=r(Xc,"input_ids"),Xc.forEach(t),cs=r(X," of the encoded input sequence) and "),un=s(X,"CODE",{});var el=d(un);ls=r(el,"labels"),el.forEach(t),ps=r(X," (which are the "),gn=s(X,"CODE",{});var ol=d(gn);ms=r(ol,"input_ids"),ol.forEach(t),hs=r(X,` of the encoded
target sequence).`),X.forEach(t),_r=p(o),w(po.$$.fragment,o),br=p(o),ze=s(o,"P",{});var Sr=d(ze);fs=r(Sr,"Detailed "),mo=s(Sr,"A",{href:!0,rel:!0});var tl=d(mo);us=r(tl,"colab"),tl.forEach(t),gs=r(Sr," for training."),Sr.forEach(t),vr=p(o),U=s(o,"P",{});var Ft=d(U);_s=r(Ft,"This model was contributed by "),ho=s(Ft,"A",{href:!0,rel:!0});var nl=d(ho);bs=r(nl,"thomwolf"),nl.forEach(t),vs=r(Ft,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),fo=s(Ft,"A",{href:!0,rel:!0});var rl=d(fo);ys=r(rl,"ydshieh"),rl.forEach(t),ws=r(Ft,"."),Ft.forEach(t),yr=p(o),ie=s(o,"H2",{class:!0});var Nr=d(ie);Pe=s(Nr,"A",{id:!0,class:!0,href:!0});var al=d(Pe);_n=s(al,"SPAN",{});var sl=d(_n);w(uo.$$.fragment,sl),sl.forEach(t),al.forEach(t),ks=p(Nr),bn=s(Nr,"SPAN",{});var dl=d(bn);Es=r(dl,"EncoderDecoderConfig"),dl.forEach(t),Nr.forEach(t),wr=p(o),C=s(o,"DIV",{class:!0});var W=d(C);w(go.$$.fragment,W),Ts=p(W),Fe=s(W,"P",{});var Kn=d(Fe);ct=s(Kn,"A",{href:!0});var il=d(ct);$s=r(il,"EncoderDecoderConfig"),il.forEach(t),Ms=r(Kn," is the configuration class to store the configuration of a "),lt=s(Kn,"A",{href:!0});var cl=d(lt);Ds=r(cl,"EncoderDecoderModel"),cl.forEach(t),xs=r(Kn,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Kn.forEach(t),qs=p(W),ce=s(W,"P",{});var At=d(ce);js=r(At,"Configuration objects inherit from "),pt=s(At,"A",{href:!0});var ll=d(pt);zs=r(ll,"PretrainedConfig"),ll.forEach(t),Ps=r(At,` and can be used to control the model outputs. Read the
documentation from `),mt=s(At,"A",{href:!0});var pl=d(mt);Fs=r(pl,"PretrainedConfig"),pl.forEach(t),As=r(At," for more information."),At.forEach(t),Cs=p(W),w(Ae.$$.fragment,W),Ss=p(W),Ce=s(W,"DIV",{class:!0});var Ir=d(Ce);w(_o.$$.fragment,Ir),Ns=p(Ir),bo=s(Ir,"P",{});var Br=d(bo);Is=r(Br,"Instantiate a "),ht=s(Br,"A",{href:!0});var ml=d(ht);Bs=r(ml,"EncoderDecoderConfig"),ml.forEach(t),Ls=r(Br,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),Br.forEach(t),Ir.forEach(t),Os=p(W),Se=s(W,"DIV",{class:!0});var Lr=d(Se);w(vo.$$.fragment,Lr),Ws=p(Lr),le=s(Lr,"P",{});var Ct=d(le);Vs=r(Ct,"Serializes this instance to a Python dictionary. Override the default "),vn=s(Ct,"EM",{});var hl=d(vn);Rs=r(hl,"to_dict()"),hl.forEach(t),Gs=r(Ct," from "),yn=s(Ct,"EM",{});var fl=d(yn);Hs=r(fl,"PretrainedConfig"),fl.forEach(t),Us=r(Ct,"."),Ct.forEach(t),Lr.forEach(t),W.forEach(t),kr=p(o),pe=s(o,"H2",{class:!0});var Or=d(pe);Ne=s(Or,"A",{id:!0,class:!0,href:!0});var ul=d(Ne);wn=s(ul,"SPAN",{});var gl=d(wn);w(yo.$$.fragment,gl),gl.forEach(t),ul.forEach(t),Ys=p(Or),kn=s(Or,"SPAN",{});var _l=d(kn);Js=r(_l,"EncoderDecoderModel"),_l.forEach(t),Or.forEach(t),Er=p(o),D=s(o,"DIV",{class:!0});var P=d(D);w(wo.$$.fragment,P),Zs=p(P),me=s(P,"P",{});var St=d(me);Ks=r(St,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),ft=s(St,"A",{href:!0});var bl=d(ft);Qs=r(bl,"from_pretrained()"),bl.forEach(t),Xs=r(St," function and the decoder is loaded via "),ut=s(St,"A",{href:!0});var vl=d(ut);ed=r(vl,"from_pretrained()"),vl.forEach(t),od=r(St,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),St.forEach(t),td=p(P),ko=s(P,"P",{});var Wr=d(ko);nd=r(Wr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Eo=s(Wr,"A",{href:!0,rel:!0});var yl=d(Eo);rd=r(yl,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),yl.forEach(t),ad=r(Wr,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Wr.forEach(t),sd=p(P),En=s(P,"P",{});var wl=d(En);dd=r(wl,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),wl.forEach(t),id=p(P),To=s(P,"P",{});var Vr=d(To);cd=r(Vr,"This model inherits from "),gt=s(Vr,"A",{href:!0});var kl=d(gt);ld=r(kl,"PreTrainedModel"),kl.forEach(t),pd=r(Vr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr.forEach(t),md=p(P),$o=s(P,"P",{});var Rr=d($o);hd=r(Rr,"This model is also a PyTorch "),Mo=s(Rr,"A",{href:!0,rel:!0});var El=d(Mo);fd=r(El,"torch.nn.Module"),El.forEach(t),ud=r(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),gd=p(P),Y=s(P,"P",{});var Zo=d(Y);_t=s(Zo,"A",{href:!0});var Tl=d(_t);_d=r(Tl,"EncoderDecoderModel"),Tl.forEach(t),bd=r(Zo,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Tn=s(Zo,"EM",{});var $l=d(Tn);vd=r($l,"~transformers.AutoModel.from_pretrained"),$l.forEach(t),yd=r(Zo,` class method for the encoder and
:meth`),$n=s(Zo,"EM",{});var Ml=d($n);wd=r(Ml,"~transformers.AutoModelForCausalLM.from_pretrained"),Ml.forEach(t),kd=r(Zo," class method for the decoder."),Zo.forEach(t),Ed=p(P),I=s(P,"DIV",{class:!0});var Je=d(I);w(Do.$$.fragment,Je),Td=p(Je),he=s(Je,"P",{});var Nt=d(he);$d=r(Nt,"The "),bt=s(Nt,"A",{href:!0});var Dl=d(bt);Md=r(Dl,"EncoderDecoderModel"),Dl.forEach(t),Dd=r(Nt," forward method, overrides the "),Mn=s(Nt,"CODE",{});var xl=d(Mn);xd=r(xl,"__call__"),xl.forEach(t),qd=r(Nt," special method."),Nt.forEach(t),jd=p(Je),w(Ie.$$.fragment,Je),zd=p(Je),w(Be.$$.fragment,Je),Je.forEach(t),Pd=p(P),B=s(P,"DIV",{class:!0});var Ze=d(B);w(xo.$$.fragment,Ze),Fd=p(Ze),Dn=s(Ze,"P",{});var ql=d(Dn);Ad=r(ql,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ql.forEach(t),Cd=p(Ze),fe=s(Ze,"P",{});var It=d(fe);Sd=r(It,"The model is set in evaluation mode by default using "),xn=s(It,"CODE",{});var jl=d(xn);Nd=r(jl,"model.eval()"),jl.forEach(t),Id=r(It,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),qn=s(It,"CODE",{});var zl=d(qn);Bd=r(zl,"model.train()"),zl.forEach(t),Ld=r(It,"."),It.forEach(t),Od=p(Ze),w(Le.$$.fragment,Ze),Ze.forEach(t),P.forEach(t),Tr=p(o),ue=s(o,"H2",{class:!0});var Gr=d(ue);Oe=s(Gr,"A",{id:!0,class:!0,href:!0});var Pl=d(Oe);jn=s(Pl,"SPAN",{});var Fl=d(jn);w(qo.$$.fragment,Fl),Fl.forEach(t),Pl.forEach(t),Wd=p(Gr),zn=s(Gr,"SPAN",{});var Al=d(zn);Vd=r(Al,"TFEncoderDecoderModel"),Al.forEach(t),Gr.forEach(t),$r=p(o),x=s(o,"DIV",{class:!0});var F=d(x);w(jo.$$.fragment,F),Rd=p(F),ge=s(F,"P",{});var Bt=d(ge);Gd=r(Bt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),vt=s(Bt,"A",{href:!0});var Cl=d(vt);Hd=r(Cl,"from_pretrained()"),Cl.forEach(t),Ud=r(Bt," function and the decoder is loaded via "),yt=s(Bt,"A",{href:!0});var Sl=d(yt);Yd=r(Sl,"from_pretrained()"),Sl.forEach(t),Jd=r(Bt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Bt.forEach(t),Zd=p(F),zo=s(F,"P",{});var Hr=d(zo);Kd=r(Hr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Po=s(Hr,"A",{href:!0,rel:!0});var Nl=d(Po);Qd=r(Nl,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Nl.forEach(t),Xd=r(Hr,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Hr.forEach(t),ei=p(F),Pn=s(F,"P",{});var Il=d(Pn);oi=r(Il,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Il.forEach(t),ti=p(F),Fo=s(F,"P",{});var Ur=d(Fo);ni=r(Ur,"This model inherits from "),wt=s(Ur,"A",{href:!0});var Bl=d(wt);ri=r(Bl,"TFPreTrainedModel"),Bl.forEach(t),ai=r(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),si=p(F),Ao=s(F,"P",{});var Yr=d(Ao);di=r(Yr,"This model is also a "),Co=s(Yr,"A",{href:!0,rel:!0});var Ll=d(Co);ii=r(Ll,"tf.keras.Model"),Ll.forEach(t),ci=r(Yr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yr.forEach(t),li=p(F),J=s(F,"P",{});var Ko=d(J);kt=s(Ko,"A",{href:!0});var Ol=d(kt);pi=r(Ol,"TFEncoderDecoderModel"),Ol.forEach(t),mi=r(Ko,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Et=s(Ko,"A",{href:!0});var Wl=d(Et);hi=r(Wl,"from_pretrained()"),Wl.forEach(t),fi=r(Ko," class method for the encoder and "),Tt=s(Ko,"A",{href:!0});var Vl=d(Tt);ui=r(Vl,"from_pretrained()"),Vl.forEach(t),gi=r(Ko,` class
method for the decoder.`),Ko.forEach(t),_i=p(F),L=s(F,"DIV",{class:!0});var Ke=d(L);w(So.$$.fragment,Ke),bi=p(Ke),_e=s(Ke,"P",{});var Lt=d(_e);vi=r(Lt,"The "),$t=s(Lt,"A",{href:!0});var Rl=d($t);yi=r(Rl,"TFEncoderDecoderModel"),Rl.forEach(t),wi=r(Lt," forward method, overrides the "),Fn=s(Lt,"CODE",{});var Gl=d(Fn);ki=r(Gl,"__call__"),Gl.forEach(t),Ei=r(Lt," special method."),Lt.forEach(t),Ti=p(Ke),w(We.$$.fragment,Ke),$i=p(Ke),w(Ve.$$.fragment,Ke),Ke.forEach(t),Mi=p(F),Z=s(F,"DIV",{class:!0});var Ot=d(Z);w(No.$$.fragment,Ot),Di=p(Ot),An=s(Ot,"P",{});var Hl=d(An);xi=r(Hl,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Hl.forEach(t),qi=p(Ot),w(Re.$$.fragment,Ot),Ot.forEach(t),F.forEach(t),Mr=p(o),be=s(o,"H2",{class:!0});var Jr=d(be);Ge=s(Jr,"A",{id:!0,class:!0,href:!0});var Ul=d(Ge);Cn=s(Ul,"SPAN",{});var Yl=d(Cn);w(Io.$$.fragment,Yl),Yl.forEach(t),Ul.forEach(t),ji=p(Jr),Sn=s(Jr,"SPAN",{});var Jl=d(Sn);zi=r(Jl,"FlaxEncoderDecoderModel"),Jl.forEach(t),Jr.forEach(t),Dr=p(o),q=s(o,"DIV",{class:!0});var A=d(q);w(Bo.$$.fragment,A),Pi=p(A),ve=s(A,"P",{});var Wt=d(ve);Fi=r(Wt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Mt=s(Wt,"A",{href:!0});var Zl=d(Mt);Ai=r(Zl,"from_pretrained()"),Zl.forEach(t),Ci=r(Wt," function and the decoder is loaded via "),Dt=s(Wt,"A",{href:!0});var Kl=d(Dt);Si=r(Kl,"from_pretrained()"),Kl.forEach(t),Ni=r(Wt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Wt.forEach(t),Ii=p(A),Lo=s(A,"P",{});var Zr=d(Lo);Bi=r(Zr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Oo=s(Zr,"A",{href:!0,rel:!0});var Ql=d(Oo);Li=r(Ql,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ql.forEach(t),Oi=r(Zr,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Zr.forEach(t),Wi=p(A),Nn=s(A,"P",{});var Xl=d(Nn);Vi=r(Xl,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Xl.forEach(t),Ri=p(A),Wo=s(A,"P",{});var Kr=d(Wo);Gi=r(Kr,"This model inherits from "),xt=s(Kr,"A",{href:!0});var ep=d(xt);Hi=r(ep,"FlaxPreTrainedModel"),ep.forEach(t),Ui=r(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),Yi=p(A),Vo=s(A,"P",{});var Qr=d(Vo);Ji=r(Qr,`This model is also a Flax Linen
`),Ro=s(Qr,"A",{href:!0,rel:!0});var op=d(Ro);Zi=r(op,"flax.nn.Module"),op.forEach(t),Ki=r(Qr,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qr.forEach(t),Qi=p(A),K=s(A,"P",{});var Qo=d(K);qt=s(Qo,"A",{href:!0});var tp=d(qt);Xi=r(tp,"FlaxEncoderDecoderModel"),tp.forEach(t),ec=r(Qo,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),In=s(Qo,"EM",{});var np=d(In);oc=r(np,"~transformers.FlaxAutoModel.from_pretrained"),np.forEach(t),tc=r(Qo,` class method for the
encoder and :meth`),Bn=s(Qo,"EM",{});var rp=d(Bn);nc=r(rp,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),rp.forEach(t),rc=r(Qo," class method for the decoder."),Qo.forEach(t),ac=p(A),O=s(A,"DIV",{class:!0});var Qe=d(O);w(Go.$$.fragment,Qe),sc=p(Qe),ye=s(Qe,"P",{});var Vt=d(ye);dc=r(Vt,"The "),jt=s(Vt,"A",{href:!0});var ap=d(jt);ic=r(ap,"FlaxEncoderDecoderModel"),ap.forEach(t),cc=r(Vt," forward method, overrides the "),Ln=s(Vt,"CODE",{});var sp=d(Ln);lc=r(sp,"__call__"),sp.forEach(t),pc=r(Vt," special method."),Vt.forEach(t),mc=p(Qe),w(He.$$.fragment,Qe),hc=p(Qe),w(Ue.$$.fragment,Qe),Qe.forEach(t),fc=p(A),Q=s(A,"DIV",{class:!0});var Rt=d(Q);w(Ho.$$.fragment,Rt),uc=p(Rt),On=s(Rt,"P",{});var dp=d(On);gc=r(dp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),dp.forEach(t),_c=p(Rt),w(Ye.$$.fragment,Rt),Rt.forEach(t),A.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Tp)),c(f,"id","encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#encoder-decoder-models"),c(_,"class","relative group"),c(we,"id","overview"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#overview"),c(oe,"class","relative group"),c(ot,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(eo,"href","https://arxiv.org/abs/1907.12461"),c(eo,"rel","nofollow"),c(tt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(nt,"href","/docs/transformers/pr_17287/en/model_doc/bert#transformers.BertModel"),c(oo,"href","https://arxiv.org/abs/1908.08345"),c(oo,"rel","nofollow"),c($e,"id","randomely-initializing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-from-model-configurations"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#randomely-initializing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-from-model-configurations"),c(te,"class","relative group"),c(rt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(at,"href","/docs/transformers/pr_17287/en/model_doc/bert#transformers.BertModel"),c(Me,"id","initialising-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#initialising-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(re,"class","relative group"),c(st,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(dt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(De,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(De,"rel","nofollow"),c(it,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel.from_encoder_decoder_pretrained"),c(xe,"id","loading-an-existing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-checkpoint"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#loading-an-existing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-checkpoint"),c(ae,"class","relative group"),c(je,"id","training"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#training"),c(de,"class","relative group"),c(mo,"href","https://colab.research.google.com/drive/1WIk2bxglElfZewOHboPFNj8H44_VAyKE?usp=sharing#scrollTo=ZwQIEhKOrJpl"),c(mo,"rel","nofollow"),c(ho,"href","https://github.com/thomwolf"),c(ho,"rel","nofollow"),c(fo,"href","https://github.com/ydshieh"),c(fo,"rel","nofollow"),c(Pe,"id","transformers.EncoderDecoderConfig"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.EncoderDecoderConfig"),c(ie,"class","relative group"),c(ct,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(lt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(pt,"href","/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig"),c(mt,"href","/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig"),c(ht,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"id","transformers.EncoderDecoderModel"),c(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ne,"href","#transformers.EncoderDecoderModel"),c(pe,"class","relative group"),c(ft,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(ut,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Eo,"href","https://arxiv.org/abs/1907.12461"),c(Eo,"rel","nofollow"),c(gt,"href","/docs/transformers/pr_17287/en/main_classes/model#transformers.PreTrainedModel"),c(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mo,"rel","nofollow"),c(_t,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(bt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.TFEncoderDecoderModel"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.TFEncoderDecoderModel"),c(ue,"class","relative group"),c(vt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(yt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Po,"href","https://arxiv.org/abs/1907.12461"),c(Po,"rel","nofollow"),c(wt,"href","/docs/transformers/pr_17287/en/main_classes/model#transformers.TFPreTrainedModel"),c(Co,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Co,"rel","nofollow"),c(kt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(Et,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Tt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c($t,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.FlaxEncoderDecoderModel"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.FlaxEncoderDecoderModel"),c(be,"class","relative group"),c(Mt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Dt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Oo,"href","https://arxiv.org/abs/1907.12461"),c(Oo,"rel","nofollow"),c(xt,"href","/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ro,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ro,"rel","nofollow"),c(qt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(jt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),u(o,v,m),u(o,_,m),e(_,f),e(f,b),k(i,b,null),e(_,g),e(_,S),e(S,Xr),u(o,Qn,m),u(o,oe,m),e(oe,we),e(we,Gt),k(Xe,Gt,null),e(oe,ea),e(oe,Ht),e(Ht,oa),u(o,Xn,m),u(o,ke,m),e(ke,ta),e(ke,ot),e(ot,na),e(ke,ra),u(o,er,m),u(o,Ee,m),e(Ee,aa),e(Ee,eo),e(eo,sa),e(Ee,da),u(o,or,m),u(o,Te,m),e(Te,ia),e(Te,tt),e(tt,ca),e(Te,la),u(o,tr,m),u(o,G,m),e(G,pa),e(G,nt),e(nt,ma),e(G,ha),e(G,oo),e(oo,fa),e(G,ua),u(o,nr,m),u(o,te,m),e(te,$e),e($e,Ut),k(to,Ut,null),e(te,ga),e(te,Yt),e(Yt,_a),u(o,rr,m),u(o,ne,m),e(ne,rt),e(rt,ba),e(ne,va),e(ne,at),e(at,ya),e(ne,wa),u(o,ar,m),k(no,o,m),u(o,sr,m),u(o,re,m),e(re,Me),e(Me,Jt),k(ro,Jt,null),e(re,ka),e(re,Zt),e(Zt,Ea),u(o,dr,m),u(o,M,m),e(M,st),e(st,Ta),e(M,$a),e(M,Kt),e(Kt,Ma),e(M,Da),e(M,Qt),e(Qt,xa),e(M,qa),e(M,Xt),e(Xt,ja),e(M,za),e(M,en),e(en,Pa),e(M,Fa),e(M,dt),e(dt,Aa),e(M,Ca),e(M,De),e(De,Sa),e(De,on),e(on,Na),e(M,Ia),e(M,tn),e(tn,Ba),e(M,La),e(M,it),e(it,Oa),e(M,Wa),u(o,ir,m),k(ao,o,m),u(o,cr,m),u(o,ae,m),e(ae,xe),e(xe,nn),k(so,nn,null),e(ae,Va),e(ae,rn),e(rn,Ra),u(o,lr,m),u(o,H,m),e(H,Ga),e(H,an),e(an,Ha),e(H,Ua),e(H,sn),e(sn,Ya),e(H,Ja),u(o,pr,m),k(io,o,m),u(o,mr,m),u(o,qe,m),e(qe,Za),e(qe,dn),e(dn,Ka),e(qe,Qa),u(o,hr,m),u(o,se,m),e(se,cn),e(cn,Xa),e(se,es),e(se,ln),e(ln,os),e(se,ts),u(o,fr,m),k(co,o,m),u(o,ur,m),u(o,de,m),e(de,je),e(je,pn),k(lo,pn,null),e(de,ns),e(de,mn),e(mn,rs),u(o,gr,m),u(o,N,m),e(N,as),e(N,hn),e(hn,ss),e(N,ds),e(N,fn),e(fn,is),e(N,cs),e(N,un),e(un,ls),e(N,ps),e(N,gn),e(gn,ms),e(N,hs),u(o,_r,m),k(po,o,m),u(o,br,m),u(o,ze,m),e(ze,fs),e(ze,mo),e(mo,us),e(ze,gs),u(o,vr,m),u(o,U,m),e(U,_s),e(U,ho),e(ho,bs),e(U,vs),e(U,fo),e(fo,ys),e(U,ws),u(o,yr,m),u(o,ie,m),e(ie,Pe),e(Pe,_n),k(uo,_n,null),e(ie,ks),e(ie,bn),e(bn,Es),u(o,wr,m),u(o,C,m),k(go,C,null),e(C,Ts),e(C,Fe),e(Fe,ct),e(ct,$s),e(Fe,Ms),e(Fe,lt),e(lt,Ds),e(Fe,xs),e(C,qs),e(C,ce),e(ce,js),e(ce,pt),e(pt,zs),e(ce,Ps),e(ce,mt),e(mt,Fs),e(ce,As),e(C,Cs),k(Ae,C,null),e(C,Ss),e(C,Ce),k(_o,Ce,null),e(Ce,Ns),e(Ce,bo),e(bo,Is),e(bo,ht),e(ht,Bs),e(bo,Ls),e(C,Os),e(C,Se),k(vo,Se,null),e(Se,Ws),e(Se,le),e(le,Vs),e(le,vn),e(vn,Rs),e(le,Gs),e(le,yn),e(yn,Hs),e(le,Us),u(o,kr,m),u(o,pe,m),e(pe,Ne),e(Ne,wn),k(yo,wn,null),e(pe,Ys),e(pe,kn),e(kn,Js),u(o,Er,m),u(o,D,m),k(wo,D,null),e(D,Zs),e(D,me),e(me,Ks),e(me,ft),e(ft,Qs),e(me,Xs),e(me,ut),e(ut,ed),e(me,od),e(D,td),e(D,ko),e(ko,nd),e(ko,Eo),e(Eo,rd),e(ko,ad),e(D,sd),e(D,En),e(En,dd),e(D,id),e(D,To),e(To,cd),e(To,gt),e(gt,ld),e(To,pd),e(D,md),e(D,$o),e($o,hd),e($o,Mo),e(Mo,fd),e($o,ud),e(D,gd),e(D,Y),e(Y,_t),e(_t,_d),e(Y,bd),e(Y,Tn),e(Tn,vd),e(Y,yd),e(Y,$n),e($n,wd),e(Y,kd),e(D,Ed),e(D,I),k(Do,I,null),e(I,Td),e(I,he),e(he,$d),e(he,bt),e(bt,Md),e(he,Dd),e(he,Mn),e(Mn,xd),e(he,qd),e(I,jd),k(Ie,I,null),e(I,zd),k(Be,I,null),e(D,Pd),e(D,B),k(xo,B,null),e(B,Fd),e(B,Dn),e(Dn,Ad),e(B,Cd),e(B,fe),e(fe,Sd),e(fe,xn),e(xn,Nd),e(fe,Id),e(fe,qn),e(qn,Bd),e(fe,Ld),e(B,Od),k(Le,B,null),u(o,Tr,m),u(o,ue,m),e(ue,Oe),e(Oe,jn),k(qo,jn,null),e(ue,Wd),e(ue,zn),e(zn,Vd),u(o,$r,m),u(o,x,m),k(jo,x,null),e(x,Rd),e(x,ge),e(ge,Gd),e(ge,vt),e(vt,Hd),e(ge,Ud),e(ge,yt),e(yt,Yd),e(ge,Jd),e(x,Zd),e(x,zo),e(zo,Kd),e(zo,Po),e(Po,Qd),e(zo,Xd),e(x,ei),e(x,Pn),e(Pn,oi),e(x,ti),e(x,Fo),e(Fo,ni),e(Fo,wt),e(wt,ri),e(Fo,ai),e(x,si),e(x,Ao),e(Ao,di),e(Ao,Co),e(Co,ii),e(Ao,ci),e(x,li),e(x,J),e(J,kt),e(kt,pi),e(J,mi),e(J,Et),e(Et,hi),e(J,fi),e(J,Tt),e(Tt,ui),e(J,gi),e(x,_i),e(x,L),k(So,L,null),e(L,bi),e(L,_e),e(_e,vi),e(_e,$t),e($t,yi),e(_e,wi),e(_e,Fn),e(Fn,ki),e(_e,Ei),e(L,Ti),k(We,L,null),e(L,$i),k(Ve,L,null),e(x,Mi),e(x,Z),k(No,Z,null),e(Z,Di),e(Z,An),e(An,xi),e(Z,qi),k(Re,Z,null),u(o,Mr,m),u(o,be,m),e(be,Ge),e(Ge,Cn),k(Io,Cn,null),e(be,ji),e(be,Sn),e(Sn,zi),u(o,Dr,m),u(o,q,m),k(Bo,q,null),e(q,Pi),e(q,ve),e(ve,Fi),e(ve,Mt),e(Mt,Ai),e(ve,Ci),e(ve,Dt),e(Dt,Si),e(ve,Ni),e(q,Ii),e(q,Lo),e(Lo,Bi),e(Lo,Oo),e(Oo,Li),e(Lo,Oi),e(q,Wi),e(q,Nn),e(Nn,Vi),e(q,Ri),e(q,Wo),e(Wo,Gi),e(Wo,xt),e(xt,Hi),e(Wo,Ui),e(q,Yi),e(q,Vo),e(Vo,Ji),e(Vo,Ro),e(Ro,Zi),e(Vo,Ki),e(q,Qi),e(q,K),e(K,qt),e(qt,Xi),e(K,ec),e(K,In),e(In,oc),e(K,tc),e(K,Bn),e(Bn,nc),e(K,rc),e(q,ac),e(q,O),k(Go,O,null),e(O,sc),e(O,ye),e(ye,dc),e(ye,jt),e(jt,ic),e(ye,cc),e(ye,Ln),e(Ln,lc),e(ye,pc),e(O,mc),k(He,O,null),e(O,hc),k(Ue,O,null),e(q,fc),e(q,Q),k(Ho,Q,null),e(Q,uc),e(Q,On),e(On,gc),e(Q,_c),k(Ye,Q,null),xr=!0},p(o,[m]){const Uo={};m&2&&(Uo.$$scope={dirty:m,ctx:o}),Ae.$set(Uo);const Wn={};m&2&&(Wn.$$scope={dirty:m,ctx:o}),Ie.$set(Wn);const Vn={};m&2&&(Vn.$$scope={dirty:m,ctx:o}),Be.$set(Vn);const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:o}),Le.$set(Rn);const Yo={};m&2&&(Yo.$$scope={dirty:m,ctx:o}),We.$set(Yo);const Gn={};m&2&&(Gn.$$scope={dirty:m,ctx:o}),Ve.$set(Gn);const Hn={};m&2&&(Hn.$$scope={dirty:m,ctx:o}),Re.$set(Hn);const Un={};m&2&&(Un.$$scope={dirty:m,ctx:o}),He.$set(Un);const Jo={};m&2&&(Jo.$$scope={dirty:m,ctx:o}),Ue.$set(Jo);const Yn={};m&2&&(Yn.$$scope={dirty:m,ctx:o}),Ye.$set(Yn)},i(o){xr||(E(i.$$.fragment,o),E(Xe.$$.fragment,o),E(to.$$.fragment,o),E(no.$$.fragment,o),E(ro.$$.fragment,o),E(ao.$$.fragment,o),E(so.$$.fragment,o),E(io.$$.fragment,o),E(co.$$.fragment,o),E(lo.$$.fragment,o),E(po.$$.fragment,o),E(uo.$$.fragment,o),E(go.$$.fragment,o),E(Ae.$$.fragment,o),E(_o.$$.fragment,o),E(vo.$$.fragment,o),E(yo.$$.fragment,o),E(wo.$$.fragment,o),E(Do.$$.fragment,o),E(Ie.$$.fragment,o),E(Be.$$.fragment,o),E(xo.$$.fragment,o),E(Le.$$.fragment,o),E(qo.$$.fragment,o),E(jo.$$.fragment,o),E(So.$$.fragment,o),E(We.$$.fragment,o),E(Ve.$$.fragment,o),E(No.$$.fragment,o),E(Re.$$.fragment,o),E(Io.$$.fragment,o),E(Bo.$$.fragment,o),E(Go.$$.fragment,o),E(He.$$.fragment,o),E(Ue.$$.fragment,o),E(Ho.$$.fragment,o),E(Ye.$$.fragment,o),xr=!0)},o(o){T(i.$$.fragment,o),T(Xe.$$.fragment,o),T(to.$$.fragment,o),T(no.$$.fragment,o),T(ro.$$.fragment,o),T(ao.$$.fragment,o),T(so.$$.fragment,o),T(io.$$.fragment,o),T(co.$$.fragment,o),T(lo.$$.fragment,o),T(po.$$.fragment,o),T(uo.$$.fragment,o),T(go.$$.fragment,o),T(Ae.$$.fragment,o),T(_o.$$.fragment,o),T(vo.$$.fragment,o),T(yo.$$.fragment,o),T(wo.$$.fragment,o),T(Do.$$.fragment,o),T(Ie.$$.fragment,o),T(Be.$$.fragment,o),T(xo.$$.fragment,o),T(Le.$$.fragment,o),T(qo.$$.fragment,o),T(jo.$$.fragment,o),T(So.$$.fragment,o),T(We.$$.fragment,o),T(Ve.$$.fragment,o),T(No.$$.fragment,o),T(Re.$$.fragment,o),T(Io.$$.fragment,o),T(Bo.$$.fragment,o),T(Go.$$.fragment,o),T(He.$$.fragment,o),T(Ue.$$.fragment,o),T(Ho.$$.fragment,o),T(Ye.$$.fragment,o),xr=!1},d(o){t(h),o&&t(v),o&&t(_),$(i),o&&t(Qn),o&&t(oe),$(Xe),o&&t(Xn),o&&t(ke),o&&t(er),o&&t(Ee),o&&t(or),o&&t(Te),o&&t(tr),o&&t(G),o&&t(nr),o&&t(te),$(to),o&&t(rr),o&&t(ne),o&&t(ar),$(no,o),o&&t(sr),o&&t(re),$(ro),o&&t(dr),o&&t(M),o&&t(ir),$(ao,o),o&&t(cr),o&&t(ae),$(so),o&&t(lr),o&&t(H),o&&t(pr),$(io,o),o&&t(mr),o&&t(qe),o&&t(hr),o&&t(se),o&&t(fr),$(co,o),o&&t(ur),o&&t(de),$(lo),o&&t(gr),o&&t(N),o&&t(_r),$(po,o),o&&t(br),o&&t(ze),o&&t(vr),o&&t(U),o&&t(yr),o&&t(ie),$(uo),o&&t(wr),o&&t(C),$(go),$(Ae),$(_o),$(vo),o&&t(kr),o&&t(pe),$(yo),o&&t(Er),o&&t(D),$(wo),$(Do),$(Ie),$(Be),$(xo),$(Le),o&&t(Tr),o&&t(ue),$(qo),o&&t($r),o&&t(x),$(jo),$(So),$(We),$(Ve),$(No),$(Re),o&&t(Mr),o&&t(be),$(Io),o&&t(Dr),o&&t(q),$(Bo),$(Go),$(He),$(Ue),$(Ho),$(Ye)}}}const Tp={local:"encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomely-initializing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-from-model-configurations",title:"Randomely initializing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from model configurations."},{local:"initialising-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-checkpoint",title:"Loading an existing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) checkpoint."},{local:"training",title:"Training"},{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function $p(j){return mp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pp extends ip{constructor(h){super();cp(this,h,$p,Ep,lp,{})}}export{Pp as default,Tp as metadata};
