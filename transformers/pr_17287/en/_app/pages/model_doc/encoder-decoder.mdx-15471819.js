import{S as sl,i as dl,s as il,e as a,k as l,w as y,t as n,M as cl,c as s,d as t,m as p,a as d,x as w,h as r,b as c,F as e,g as u,y as k,q as T,o as E,B as $,v as ll,L as Yo}from"../../chunks/vendor-6b77c823.js";import{T as Di}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-1088f2fb.js";import{C as V}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Q}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Uo}from"../../chunks/ExampleCodeBlock-5212b321.js";function pl(q){let h,v,_,f,b;return f=new V({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:Yo,i(i){b||(T(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function ml(q){let h,v,_,f,b;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var C=d(_);f=r(C,"Module"),C.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,v),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function hl(q){let h,v,_,f,b;return f=new V({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:Yo,i(i){b||(T(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function fl(q){let h,v,_,f,b;return f=new V({props:{code:`from transformers import EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){h=a("p"),v=n("Example:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Example:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:Yo,i(i){b||(T(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function ul(q){let h,v,_,f,b;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var C=d(_);f=r(C,"Module"),C.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,v),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function gl(q){let h,v,_,f,b;return f=new V({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:Yo,i(i){b||(T(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function _l(q){let h,v,_,f,b;return f=new V({props:{code:`from transformers import TFEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),v=n("Example:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Example:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:Yo,i(i){b||(T(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function bl(q){let h,v,_,f,b;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var C=d(_);f=r(C,"Module"),C.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,v),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function vl(q){let h,v,_,f,b;return f=new V({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){h=a("p"),v=n("Examples:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Examples:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:Yo,i(i){b||(T(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function yl(q){let h,v,_,f,b;return f=new V({props:{code:`from transformers import FlaxEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),v=n("Example:"),_=l(),y(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);v=r(g,"Example:"),g.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,v),u(i,_,g),k(f,i,g),b=!0},p:Yo,i(i){b||(T(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),$(f,i)}}}function wl(q){let h,v,_,f,b,i,g,C,Cr,Cn,X,_e,Nt,Ue,Ar,Lt,Sr,An,be,Ir,Jo,Nr,Lr,Sn,ve,Br,Ye,Or,Vr,In,ye,Wr,Zo,Rr,Gr,Nn,W,Hr,Ko,Ur,Yr,Je,Jr,Zr,Ln,ee,we,Bt,Ze,Kr,Ot,Qr,Bn,Qo,Xr,On,Ke,Vn,oe,ke,Vt,Qe,ea,Wt,oa,Wn,Xo,ta,Rn,Xe,Gn,te,Te,Rt,eo,na,Gt,ra,Hn,et,aa,Un,oo,Yn,ot,sa,Jn,R,da,Ht,ia,ca,Ut,la,pa,Zn,to,Kn,ne,Ee,Yt,no,ma,Jt,ha,Qn,A,fa,Zt,ua,ga,Kt,_a,ba,Qt,va,ya,Xt,wa,ka,Xn,ro,er,$e,Ta,ao,Ea,$a,or,G,Ma,so,Da,xa,io,qa,ja,tr,re,Me,en,co,za,on,Pa,nr,F,lo,Fa,De,tt,Ca,Aa,nt,Sa,Ia,Na,ae,La,rt,Ba,Oa,at,Va,Wa,Ra,xe,Ga,qe,po,Ha,mo,Ua,st,Ya,Ja,Za,je,ho,Ka,se,Qa,tn,Xa,es,nn,os,ts,rr,de,ze,rn,fo,ns,an,rs,ar,M,uo,as,ie,ss,dt,ds,is,it,cs,ls,ps,go,ms,_o,hs,fs,us,sn,gs,_s,bo,bs,ct,vs,ys,ws,vo,ks,yo,Ts,Es,$s,H,lt,Ms,Ds,dn,xs,qs,cn,js,zs,Ps,S,wo,Fs,ce,Cs,pt,As,Ss,ln,Is,Ns,Ls,Pe,Bs,Fe,Os,I,ko,Vs,pn,Ws,Rs,le,Gs,mn,Hs,Us,hn,Ys,Js,Zs,Ce,sr,pe,Ae,fn,To,Ks,un,Qs,dr,D,Eo,Xs,me,ed,mt,od,td,ht,nd,rd,ad,$o,sd,Mo,dd,id,cd,gn,ld,pd,Do,md,ft,hd,fd,ud,xo,gd,qo,_d,bd,vd,U,ut,yd,wd,gt,kd,Td,_t,Ed,$d,Md,N,jo,Dd,he,xd,bt,qd,jd,_n,zd,Pd,Fd,Se,Cd,Ie,Ad,Y,zo,Sd,bn,Id,Nd,Ne,ir,fe,Le,vn,Po,Ld,yn,Bd,cr,x,Fo,Od,ue,Vd,vt,Wd,Rd,yt,Gd,Hd,Ud,Co,Yd,Ao,Jd,Zd,Kd,wn,Qd,Xd,So,ei,wt,oi,ti,ni,Io,ri,No,ai,si,di,J,kt,ii,ci,kn,li,pi,Tn,mi,hi,fi,L,Lo,ui,ge,gi,Tt,_i,bi,En,vi,yi,wi,Be,ki,Oe,Ti,Z,Bo,Ei,$n,$i,Mi,Ve,lr;return i=new Q({}),Ue=new Q({}),Ze=new Q({}),Ke=new V({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = EncoderDecoderModel(config=config)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)
`}}),Qe=new Q({}),Xe=new V({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
`}}),eo=new Q({}),oo=new V({props:{code:`from transformers import EncoderDecoderModel
model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert_cnn_daily_mail")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert_cnn_daily_mail&quot;</span>)`}}),to=new V({props:{code:`# a workaround to load from pytorch checkpoint
from transformers import EncoderDecoderModel , TFEncoderDecoderModel

_model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert-cnn_dailymail-fp16")

_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")

model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># a workaround to load from pytorch checkpoint</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel , TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>_model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert-cnn_dailymail-fp16&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config
`}}),no=new Q({}),ro=new V({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")

input_ids = tokenizer("The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, \\
 and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.\\
During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made \\
 structure in the world, a title it held for 41 years until the Chrysler Building in New York City was \\
 finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting \\
 aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). \\
 Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after \\
 the Millau Viaduct.", return_tensors="pt").input_ids

labels = tokenizer("the eiffel tower surpassed the washington monument to become the tallest structure in the world. \\

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss
loss.item()
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, \\
...  and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.\\
... During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made \\
...  structure in the world, a title it held for 41 years until the Chrysler Building in New York City was \\
...  finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting \\
...  aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). \\
...  Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after \\
...  the Millau Viaduct.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;the eiffel tower surpassed the washington monument to become the tallest structure in the world. \\
 ... it was the first structure to reach a height of 300 metres in paris in 1930. it is now taller than the chrysler \\
 ... building by 5. 2 metres ( 17 ft ) and is the second tallest free - standing structure in paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.72</span>
`}}),co=new Q({}),lo=new O({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),xe=new Uo({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[pl]},$$scope:{ctx:q}}}),po=new O({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),ho=new O({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),fo=new Q({}),uo=new O({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),wo=new O({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Pe=new Di({props:{$$slots:{default:[ml]},$$scope:{ctx:q}}}),Fe=new Uo({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[hl]},$$scope:{ctx:q}}}),ko=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),Ce=new Uo({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[fl]},$$scope:{ctx:q}}}),To=new Q({}),Eo=new O({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),jo=new O({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
`}}),Se=new Di({props:{$$slots:{default:[ul]},$$scope:{ctx:q}}}),Ie=new Uo({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[gl]},$$scope:{ctx:q}}}),zo=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),Ne=new Uo({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[_l]},$$scope:{ctx:q}}}),Po=new Q({}),Fo=new O({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),Lo=new O({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17287/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_17287/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17287/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Be=new Di({props:{$$slots:{default:[bl]},$$scope:{ctx:q}}}),Oe=new Uo({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[vl]},$$scope:{ctx:q}}}),Bo=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17287/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Ve=new Uo({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[yl]},$$scope:{ctx:q}}}),{c(){h=a("meta"),v=l(),_=a("h1"),f=a("a"),b=a("span"),y(i.$$.fragment),g=l(),C=a("span"),Cr=n("Encoder Decoder Models"),Cn=l(),X=a("h2"),_e=a("a"),Nt=a("span"),y(Ue.$$.fragment),Ar=l(),Lt=a("span"),Sr=n("Overview"),An=l(),be=a("p"),Ir=n("The "),Jo=a("a"),Nr=n("EncoderDecoderModel"),Lr=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Sn=l(),ve=a("p"),Br=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),Ye=a("a"),Or=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Vr=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),In=l(),ye=a("p"),Wr=n("After such an "),Zo=a("a"),Rr=n("EncoderDecoderModel"),Gr=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Nn=l(),W=a("p"),Hr=n("An application of this architecture could be to leverage two pretrained "),Ko=a("a"),Ur=n("BertModel"),Yr=n(` as the encoder
and decoder for a summarization model as was shown in: `),Je=a("a"),Jr=n("Text Summarization with Pretrained Encoders"),Zr=n(" by Yang Liu and Mirella Lapata."),Ln=l(),ee=a("h2"),we=a("a"),Bt=a("span"),y(Ze.$$.fragment),Kr=l(),Ot=a("span"),Qr=n("Initialising the [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) using only architecture"),Bn=l(),Qo=a("p"),Xr=n(`In this we only take the architecture from the existing model, not the weights. In the below code
we make both encoder and decoder architecture same as bert architecture.`),On=l(),y(Ke.$$.fragment),Vn=l(),oe=a("h2"),ke=a("a"),Vt=a("span"),y(Qe.$$.fragment),ea=l(),Wt=a("span"),oa=n("Initialising the [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) using models from the hub"),Wn=l(),Xo=a("p"),ta=n(`In this we initialize both architecture and weights of existing model. In the below example
we make bert based encoder and decoder.`),Rn=l(),y(Xe.$$.fragment),Gn=l(),te=a("h2"),Te=a("a"),Rt=a("span"),y(eo.$$.fragment),na=l(),Gt=a("span"),ra=n("Loading the existing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel)"),Hn=l(),et=a("p"),aa=n("This is to load existing EncoderDecoder Model from local/hub."),Un=l(),y(oo.$$.fragment),Yn=l(),ot=a("p"),sa=n("##Loading from pytorch checkpoint"),Jn=l(),R=a("p"),da=n("The "),Ht=a("code"),ia=n("from_pretrained()"),ca=n(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Ut=a("code"),la=n("from_pt=True"),pa=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Zn=l(),y(to.$$.fragment),Kn=l(),ne=a("h2"),Ee=a("a"),Yt=a("span"),y(no.$$.fragment),ma=l(),Jt=a("span"),ha=n("Training"),Qn=l(),A=a("p"),fa=n(`Once the model is created,it can be finetuned simliar to Bart,T5 or any other EncoderDecoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Zt=a("code"),ua=n("input_ids"),ga=n(` (which are the
`),Kt=a("code"),_a=n("input_ids"),ba=n(" of the encoded input sequence) and "),Qt=a("code"),va=n("labels"),ya=n(" (which are the "),Xt=a("code"),wa=n("input_ids"),ka=n(` of the encoded
target sequence).`),Xn=l(),y(ro.$$.fragment),er=l(),$e=a("p"),Ta=n("Detailed "),ao=a("a"),Ea=n("colab"),$a=n(" for training."),or=l(),G=a("p"),Ma=n("This model was contributed by "),so=a("a"),Da=n("thomwolf"),xa=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),io=a("a"),qa=n("ydshieh"),ja=n("."),tr=l(),re=a("h2"),Me=a("a"),en=a("span"),y(co.$$.fragment),za=l(),on=a("span"),Pa=n("EncoderDecoderConfig"),nr=l(),F=a("div"),y(lo.$$.fragment),Fa=l(),De=a("p"),tt=a("a"),Ca=n("EncoderDecoderConfig"),Aa=n(" is the configuration class to store the configuration of a "),nt=a("a"),Sa=n("EncoderDecoderModel"),Ia=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Na=l(),ae=a("p"),La=n("Configuration objects inherit from "),rt=a("a"),Ba=n("PretrainedConfig"),Oa=n(` and can be used to control the model outputs. Read the
documentation from `),at=a("a"),Va=n("PretrainedConfig"),Wa=n(" for more information."),Ra=l(),y(xe.$$.fragment),Ga=l(),qe=a("div"),y(po.$$.fragment),Ha=l(),mo=a("p"),Ua=n("Instantiate a "),st=a("a"),Ya=n("EncoderDecoderConfig"),Ja=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),Za=l(),je=a("div"),y(ho.$$.fragment),Ka=l(),se=a("p"),Qa=n("Serializes this instance to a Python dictionary. Override the default "),tn=a("em"),Xa=n("to_dict()"),es=n(" from "),nn=a("em"),os=n("PretrainedConfig"),ts=n("."),rr=l(),de=a("h2"),ze=a("a"),rn=a("span"),y(fo.$$.fragment),ns=l(),an=a("span"),rs=n("EncoderDecoderModel"),ar=l(),M=a("div"),y(uo.$$.fragment),as=l(),ie=a("p"),ss=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dt=a("a"),ds=n("from_pretrained()"),is=n(" function and the decoder is loaded via "),it=a("a"),cs=n("from_pretrained()"),ls=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ps=l(),go=a("p"),ms=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),_o=a("a"),hs=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),fs=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),us=l(),sn=a("p"),gs=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),_s=l(),bo=a("p"),bs=n("This model inherits from "),ct=a("a"),vs=n("PreTrainedModel"),ys=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ws=l(),vo=a("p"),ks=n("This model is also a PyTorch "),yo=a("a"),Ts=n("torch.nn.Module"),Es=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$s=l(),H=a("p"),lt=a("a"),Ms=n("EncoderDecoderModel"),Ds=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),dn=a("em"),xs=n("~transformers.AutoModel.from_pretrained"),qs=n(` class method for the encoder and
:meth`),cn=a("em"),js=n("~transformers.AutoModelForCausalLM.from_pretrained"),zs=n(" class method for the decoder."),Ps=l(),S=a("div"),y(wo.$$.fragment),Fs=l(),ce=a("p"),Cs=n("The "),pt=a("a"),As=n("EncoderDecoderModel"),Ss=n(" forward method, overrides the "),ln=a("code"),Is=n("__call__"),Ns=n(" special method."),Ls=l(),y(Pe.$$.fragment),Bs=l(),y(Fe.$$.fragment),Os=l(),I=a("div"),y(ko.$$.fragment),Vs=l(),pn=a("p"),Ws=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Rs=l(),le=a("p"),Gs=n("The model is set in evaluation mode by default using "),mn=a("code"),Hs=n("model.eval()"),Us=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),hn=a("code"),Ys=n("model.train()"),Js=n("."),Zs=l(),y(Ce.$$.fragment),sr=l(),pe=a("h2"),Ae=a("a"),fn=a("span"),y(To.$$.fragment),Ks=l(),un=a("span"),Qs=n("TFEncoderDecoderModel"),dr=l(),D=a("div"),y(Eo.$$.fragment),Xs=l(),me=a("p"),ed=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),mt=a("a"),od=n("from_pretrained()"),td=n(" function and the decoder is loaded via "),ht=a("a"),nd=n("from_pretrained()"),rd=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ad=l(),$o=a("p"),sd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=a("a"),dd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),id=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),cd=l(),gn=a("p"),ld=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),pd=l(),Do=a("p"),md=n("This model inherits from "),ft=a("a"),hd=n("TFPreTrainedModel"),fd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ud=l(),xo=a("p"),gd=n("This model is also a "),qo=a("a"),_d=n("tf.keras.Model"),bd=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vd=l(),U=a("p"),ut=a("a"),yd=n("TFEncoderDecoderModel"),wd=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),gt=a("a"),kd=n("from_pretrained()"),Td=n(" class method for the encoder and "),_t=a("a"),Ed=n("from_pretrained()"),$d=n(` class
method for the decoder.`),Md=l(),N=a("div"),y(jo.$$.fragment),Dd=l(),he=a("p"),xd=n("The "),bt=a("a"),qd=n("TFEncoderDecoderModel"),jd=n(" forward method, overrides the "),_n=a("code"),zd=n("__call__"),Pd=n(" special method."),Fd=l(),y(Se.$$.fragment),Cd=l(),y(Ie.$$.fragment),Ad=l(),Y=a("div"),y(zo.$$.fragment),Sd=l(),bn=a("p"),Id=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Nd=l(),y(Ne.$$.fragment),ir=l(),fe=a("h2"),Le=a("a"),vn=a("span"),y(Po.$$.fragment),Ld=l(),yn=a("span"),Bd=n("FlaxEncoderDecoderModel"),cr=l(),x=a("div"),y(Fo.$$.fragment),Od=l(),ue=a("p"),Vd=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),vt=a("a"),Wd=n("from_pretrained()"),Rd=n(" function and the decoder is loaded via "),yt=a("a"),Gd=n("from_pretrained()"),Hd=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Ud=l(),Co=a("p"),Yd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ao=a("a"),Jd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Zd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Kd=l(),wn=a("p"),Qd=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Xd=l(),So=a("p"),ei=n("This model inherits from "),wt=a("a"),oi=n("FlaxPreTrainedModel"),ti=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=l(),Io=a("p"),ri=n(`This model is also a Flax Linen
`),No=a("a"),ai=n("flax.nn.Module"),si=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),di=l(),J=a("p"),kt=a("a"),ii=n("FlaxEncoderDecoderModel"),ci=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),kn=a("em"),li=n("~transformers.FlaxAutoModel.from_pretrained"),pi=n(` class method for the
encoder and :meth`),Tn=a("em"),mi=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),hi=n(" class method for the decoder."),fi=l(),L=a("div"),y(Lo.$$.fragment),ui=l(),ge=a("p"),gi=n("The "),Tt=a("a"),_i=n("FlaxEncoderDecoderModel"),bi=n(" forward method, overrides the "),En=a("code"),vi=n("__call__"),yi=n(" special method."),wi=l(),y(Be.$$.fragment),ki=l(),y(Oe.$$.fragment),Ti=l(),Z=a("div"),y(Bo.$$.fragment),Ei=l(),$n=a("p"),$i=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Mi=l(),y(Ve.$$.fragment),this.h()},l(o){const m=cl('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),v=p(o),_=s(o,"H1",{class:!0});var Oo=d(_);f=s(Oo,"A",{id:!0,class:!0,href:!0});var Mn=d(f);b=s(Mn,"SPAN",{});var Dn=d(b);w(i.$$.fragment,Dn),Dn.forEach(t),Mn.forEach(t),g=p(Oo),C=s(Oo,"SPAN",{});var xn=d(C);Cr=r(xn,"Encoder Decoder Models"),xn.forEach(t),Oo.forEach(t),Cn=p(o),X=s(o,"H2",{class:!0});var Vo=d(X);_e=s(Vo,"A",{id:!0,class:!0,href:!0});var qn=d(_e);Nt=s(qn,"SPAN",{});var jn=d(Nt);w(Ue.$$.fragment,jn),jn.forEach(t),qn.forEach(t),Ar=p(Vo),Lt=s(Vo,"SPAN",{});var zn=d(Lt);Sr=r(zn,"Overview"),zn.forEach(t),Vo.forEach(t),An=p(o),be=s(o,"P",{});var Wo=d(be);Ir=r(Wo,"The "),Jo=s(Wo,"A",{href:!0});var Pn=d(Jo);Nr=r(Pn,"EncoderDecoderModel"),Pn.forEach(t),Lr=r(Wo,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Wo.forEach(t),Sn=p(o),ve=s(o,"P",{});var pr=d(ve);Br=r(pr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),Ye=s(pr,"A",{href:!0,rel:!0});var xi=d(Ye);Or=r(xi,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),xi.forEach(t),Vr=r(pr,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),pr.forEach(t),In=p(o),ye=s(o,"P",{});var mr=d(ye);Wr=r(mr,"After such an "),Zo=s(mr,"A",{href:!0});var qi=d(Zo);Rr=r(qi,"EncoderDecoderModel"),qi.forEach(t),Gr=r(mr,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),mr.forEach(t),Nn=p(o),W=s(o,"P",{});var Et=d(W);Hr=r(Et,"An application of this architecture could be to leverage two pretrained "),Ko=s(Et,"A",{href:!0});var ji=d(Ko);Ur=r(ji,"BertModel"),ji.forEach(t),Yr=r(Et,` as the encoder
and decoder for a summarization model as was shown in: `),Je=s(Et,"A",{href:!0,rel:!0});var zi=d(Je);Jr=r(zi,"Text Summarization with Pretrained Encoders"),zi.forEach(t),Zr=r(Et," by Yang Liu and Mirella Lapata."),Et.forEach(t),Ln=p(o),ee=s(o,"H2",{class:!0});var hr=d(ee);we=s(hr,"A",{id:!0,class:!0,href:!0});var Pi=d(we);Bt=s(Pi,"SPAN",{});var Fi=d(Bt);w(Ze.$$.fragment,Fi),Fi.forEach(t),Pi.forEach(t),Kr=p(hr),Ot=s(hr,"SPAN",{});var Ci=d(Ot);Qr=r(Ci,"Initialising the [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) using only architecture"),Ci.forEach(t),hr.forEach(t),Bn=p(o),Qo=s(o,"P",{});var Ai=d(Qo);Xr=r(Ai,`In this we only take the architecture from the existing model, not the weights. In the below code
we make both encoder and decoder architecture same as bert architecture.`),Ai.forEach(t),On=p(o),w(Ke.$$.fragment,o),Vn=p(o),oe=s(o,"H2",{class:!0});var fr=d(oe);ke=s(fr,"A",{id:!0,class:!0,href:!0});var Si=d(ke);Vt=s(Si,"SPAN",{});var Ii=d(Vt);w(Qe.$$.fragment,Ii),Ii.forEach(t),Si.forEach(t),ea=p(fr),Wt=s(fr,"SPAN",{});var Ni=d(Wt);oa=r(Ni,"Initialising the [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) using models from the hub"),Ni.forEach(t),fr.forEach(t),Wn=p(o),Xo=s(o,"P",{});var Li=d(Xo);ta=r(Li,`In this we initialize both architecture and weights of existing model. In the below example
we make bert based encoder and decoder.`),Li.forEach(t),Rn=p(o),w(Xe.$$.fragment,o),Gn=p(o),te=s(o,"H2",{class:!0});var ur=d(te);Te=s(ur,"A",{id:!0,class:!0,href:!0});var Bi=d(Te);Rt=s(Bi,"SPAN",{});var Oi=d(Rt);w(eo.$$.fragment,Oi),Oi.forEach(t),Bi.forEach(t),na=p(ur),Gt=s(ur,"SPAN",{});var Vi=d(Gt);ra=r(Vi,"Loading the existing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel)"),Vi.forEach(t),ur.forEach(t),Hn=p(o),et=s(o,"P",{});var Wi=d(et);aa=r(Wi,"This is to load existing EncoderDecoder Model from local/hub."),Wi.forEach(t),Un=p(o),w(oo.$$.fragment,o),Yn=p(o),ot=s(o,"P",{});var Ri=d(ot);sa=r(Ri,"##Loading from pytorch checkpoint"),Ri.forEach(t),Jn=p(o),R=s(o,"P",{});var $t=d(R);da=r($t,"The "),Ht=s($t,"CODE",{});var Gi=d(Ht);ia=r(Gi,"from_pretrained()"),Gi.forEach(t),ca=r($t,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Ut=s($t,"CODE",{});var Hi=d(Ut);la=r(Hi,"from_pt=True"),Hi.forEach(t),pa=r($t,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),$t.forEach(t),Zn=p(o),w(to.$$.fragment,o),Kn=p(o),ne=s(o,"H2",{class:!0});var gr=d(ne);Ee=s(gr,"A",{id:!0,class:!0,href:!0});var Ui=d(Ee);Yt=s(Ui,"SPAN",{});var Yi=d(Yt);w(no.$$.fragment,Yi),Yi.forEach(t),Ui.forEach(t),ma=p(gr),Jt=s(gr,"SPAN",{});var Ji=d(Jt);ha=r(Ji,"Training"),Ji.forEach(t),gr.forEach(t),Qn=p(o),A=s(o,"P",{});var K=d(A);fa=r(K,`Once the model is created,it can be finetuned simliar to Bart,T5 or any other EncoderDecoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Zt=s(K,"CODE",{});var Zi=d(Zt);ua=r(Zi,"input_ids"),Zi.forEach(t),ga=r(K,` (which are the
`),Kt=s(K,"CODE",{});var Ki=d(Kt);_a=r(Ki,"input_ids"),Ki.forEach(t),ba=r(K," of the encoded input sequence) and "),Qt=s(K,"CODE",{});var Qi=d(Qt);va=r(Qi,"labels"),Qi.forEach(t),ya=r(K," (which are the "),Xt=s(K,"CODE",{});var Xi=d(Xt);wa=r(Xi,"input_ids"),Xi.forEach(t),ka=r(K,` of the encoded
target sequence).`),K.forEach(t),Xn=p(o),w(ro.$$.fragment,o),er=p(o),$e=s(o,"P",{});var _r=d($e);Ta=r(_r,"Detailed "),ao=s(_r,"A",{href:!0,rel:!0});var ec=d(ao);Ea=r(ec,"colab"),ec.forEach(t),$a=r(_r," for training."),_r.forEach(t),or=p(o),G=s(o,"P",{});var Mt=d(G);Ma=r(Mt,"This model was contributed by "),so=s(Mt,"A",{href:!0,rel:!0});var oc=d(so);Da=r(oc,"thomwolf"),oc.forEach(t),xa=r(Mt,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),io=s(Mt,"A",{href:!0,rel:!0});var tc=d(io);qa=r(tc,"ydshieh"),tc.forEach(t),ja=r(Mt,"."),Mt.forEach(t),tr=p(o),re=s(o,"H2",{class:!0});var br=d(re);Me=s(br,"A",{id:!0,class:!0,href:!0});var nc=d(Me);en=s(nc,"SPAN",{});var rc=d(en);w(co.$$.fragment,rc),rc.forEach(t),nc.forEach(t),za=p(br),on=s(br,"SPAN",{});var ac=d(on);Pa=r(ac,"EncoderDecoderConfig"),ac.forEach(t),br.forEach(t),nr=p(o),F=s(o,"DIV",{class:!0});var B=d(F);w(lo.$$.fragment,B),Fa=p(B),De=s(B,"P",{});var Fn=d(De);tt=s(Fn,"A",{href:!0});var sc=d(tt);Ca=r(sc,"EncoderDecoderConfig"),sc.forEach(t),Aa=r(Fn," is the configuration class to store the configuration of a "),nt=s(Fn,"A",{href:!0});var dc=d(nt);Sa=r(dc,"EncoderDecoderModel"),dc.forEach(t),Ia=r(Fn,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Fn.forEach(t),Na=p(B),ae=s(B,"P",{});var Dt=d(ae);La=r(Dt,"Configuration objects inherit from "),rt=s(Dt,"A",{href:!0});var ic=d(rt);Ba=r(ic,"PretrainedConfig"),ic.forEach(t),Oa=r(Dt,` and can be used to control the model outputs. Read the
documentation from `),at=s(Dt,"A",{href:!0});var cc=d(at);Va=r(cc,"PretrainedConfig"),cc.forEach(t),Wa=r(Dt," for more information."),Dt.forEach(t),Ra=p(B),w(xe.$$.fragment,B),Ga=p(B),qe=s(B,"DIV",{class:!0});var vr=d(qe);w(po.$$.fragment,vr),Ha=p(vr),mo=s(vr,"P",{});var yr=d(mo);Ua=r(yr,"Instantiate a "),st=s(yr,"A",{href:!0});var lc=d(st);Ya=r(lc,"EncoderDecoderConfig"),lc.forEach(t),Ja=r(yr,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),yr.forEach(t),vr.forEach(t),Za=p(B),je=s(B,"DIV",{class:!0});var wr=d(je);w(ho.$$.fragment,wr),Ka=p(wr),se=s(wr,"P",{});var xt=d(se);Qa=r(xt,"Serializes this instance to a Python dictionary. Override the default "),tn=s(xt,"EM",{});var pc=d(tn);Xa=r(pc,"to_dict()"),pc.forEach(t),es=r(xt," from "),nn=s(xt,"EM",{});var mc=d(nn);os=r(mc,"PretrainedConfig"),mc.forEach(t),ts=r(xt,"."),xt.forEach(t),wr.forEach(t),B.forEach(t),rr=p(o),de=s(o,"H2",{class:!0});var kr=d(de);ze=s(kr,"A",{id:!0,class:!0,href:!0});var hc=d(ze);rn=s(hc,"SPAN",{});var fc=d(rn);w(fo.$$.fragment,fc),fc.forEach(t),hc.forEach(t),ns=p(kr),an=s(kr,"SPAN",{});var uc=d(an);rs=r(uc,"EncoderDecoderModel"),uc.forEach(t),kr.forEach(t),ar=p(o),M=s(o,"DIV",{class:!0});var j=d(M);w(uo.$$.fragment,j),as=p(j),ie=s(j,"P",{});var qt=d(ie);ss=r(qt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dt=s(qt,"A",{href:!0});var gc=d(dt);ds=r(gc,"from_pretrained()"),gc.forEach(t),is=r(qt," function and the decoder is loaded via "),it=s(qt,"A",{href:!0});var _c=d(it);cs=r(_c,"from_pretrained()"),_c.forEach(t),ls=r(qt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),qt.forEach(t),ps=p(j),go=s(j,"P",{});var Tr=d(go);ms=r(Tr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),_o=s(Tr,"A",{href:!0,rel:!0});var bc=d(_o);hs=r(bc,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),bc.forEach(t),fs=r(Tr,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Tr.forEach(t),us=p(j),sn=s(j,"P",{});var vc=d(sn);gs=r(vc,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),vc.forEach(t),_s=p(j),bo=s(j,"P",{});var Er=d(bo);bs=r(Er,"This model inherits from "),ct=s(Er,"A",{href:!0});var yc=d(ct);vs=r(yc,"PreTrainedModel"),yc.forEach(t),ys=r(Er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Er.forEach(t),ws=p(j),vo=s(j,"P",{});var $r=d(vo);ks=r($r,"This model is also a PyTorch "),yo=s($r,"A",{href:!0,rel:!0});var wc=d(yo);Ts=r(wc,"torch.nn.Module"),wc.forEach(t),Es=r($r,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$r.forEach(t),$s=p(j),H=s(j,"P",{});var Ro=d(H);lt=s(Ro,"A",{href:!0});var kc=d(lt);Ms=r(kc,"EncoderDecoderModel"),kc.forEach(t),Ds=r(Ro,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),dn=s(Ro,"EM",{});var Tc=d(dn);xs=r(Tc,"~transformers.AutoModel.from_pretrained"),Tc.forEach(t),qs=r(Ro,` class method for the encoder and
:meth`),cn=s(Ro,"EM",{});var Ec=d(cn);js=r(Ec,"~transformers.AutoModelForCausalLM.from_pretrained"),Ec.forEach(t),zs=r(Ro," class method for the decoder."),Ro.forEach(t),Ps=p(j),S=s(j,"DIV",{class:!0});var We=d(S);w(wo.$$.fragment,We),Fs=p(We),ce=s(We,"P",{});var jt=d(ce);Cs=r(jt,"The "),pt=s(jt,"A",{href:!0});var $c=d(pt);As=r($c,"EncoderDecoderModel"),$c.forEach(t),Ss=r(jt," forward method, overrides the "),ln=s(jt,"CODE",{});var Mc=d(ln);Is=r(Mc,"__call__"),Mc.forEach(t),Ns=r(jt," special method."),jt.forEach(t),Ls=p(We),w(Pe.$$.fragment,We),Bs=p(We),w(Fe.$$.fragment,We),We.forEach(t),Os=p(j),I=s(j,"DIV",{class:!0});var Re=d(I);w(ko.$$.fragment,Re),Vs=p(Re),pn=s(Re,"P",{});var Dc=d(pn);Ws=r(Dc,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Dc.forEach(t),Rs=p(Re),le=s(Re,"P",{});var zt=d(le);Gs=r(zt,"The model is set in evaluation mode by default using "),mn=s(zt,"CODE",{});var xc=d(mn);Hs=r(xc,"model.eval()"),xc.forEach(t),Us=r(zt,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),hn=s(zt,"CODE",{});var qc=d(hn);Ys=r(qc,"model.train()"),qc.forEach(t),Js=r(zt,"."),zt.forEach(t),Zs=p(Re),w(Ce.$$.fragment,Re),Re.forEach(t),j.forEach(t),sr=p(o),pe=s(o,"H2",{class:!0});var Mr=d(pe);Ae=s(Mr,"A",{id:!0,class:!0,href:!0});var jc=d(Ae);fn=s(jc,"SPAN",{});var zc=d(fn);w(To.$$.fragment,zc),zc.forEach(t),jc.forEach(t),Ks=p(Mr),un=s(Mr,"SPAN",{});var Pc=d(un);Qs=r(Pc,"TFEncoderDecoderModel"),Pc.forEach(t),Mr.forEach(t),dr=p(o),D=s(o,"DIV",{class:!0});var z=d(D);w(Eo.$$.fragment,z),Xs=p(z),me=s(z,"P",{});var Pt=d(me);ed=r(Pt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),mt=s(Pt,"A",{href:!0});var Fc=d(mt);od=r(Fc,"from_pretrained()"),Fc.forEach(t),td=r(Pt," function and the decoder is loaded via "),ht=s(Pt,"A",{href:!0});var Cc=d(ht);nd=r(Cc,"from_pretrained()"),Cc.forEach(t),rd=r(Pt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Pt.forEach(t),ad=p(z),$o=s(z,"P",{});var Dr=d($o);sd=r(Dr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=s(Dr,"A",{href:!0,rel:!0});var Ac=d(Mo);dd=r(Ac,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ac.forEach(t),id=r(Dr,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Dr.forEach(t),cd=p(z),gn=s(z,"P",{});var Sc=d(gn);ld=r(Sc,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Sc.forEach(t),pd=p(z),Do=s(z,"P",{});var xr=d(Do);md=r(xr,"This model inherits from "),ft=s(xr,"A",{href:!0});var Ic=d(ft);hd=r(Ic,"TFPreTrainedModel"),Ic.forEach(t),fd=r(xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xr.forEach(t),ud=p(z),xo=s(z,"P",{});var qr=d(xo);gd=r(qr,"This model is also a "),qo=s(qr,"A",{href:!0,rel:!0});var Nc=d(qo);_d=r(Nc,"tf.keras.Model"),Nc.forEach(t),bd=r(qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qr.forEach(t),vd=p(z),U=s(z,"P",{});var Go=d(U);ut=s(Go,"A",{href:!0});var Lc=d(ut);yd=r(Lc,"TFEncoderDecoderModel"),Lc.forEach(t),wd=r(Go,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),gt=s(Go,"A",{href:!0});var Bc=d(gt);kd=r(Bc,"from_pretrained()"),Bc.forEach(t),Td=r(Go," class method for the encoder and "),_t=s(Go,"A",{href:!0});var Oc=d(_t);Ed=r(Oc,"from_pretrained()"),Oc.forEach(t),$d=r(Go,` class
method for the decoder.`),Go.forEach(t),Md=p(z),N=s(z,"DIV",{class:!0});var Ge=d(N);w(jo.$$.fragment,Ge),Dd=p(Ge),he=s(Ge,"P",{});var Ft=d(he);xd=r(Ft,"The "),bt=s(Ft,"A",{href:!0});var Vc=d(bt);qd=r(Vc,"TFEncoderDecoderModel"),Vc.forEach(t),jd=r(Ft," forward method, overrides the "),_n=s(Ft,"CODE",{});var Wc=d(_n);zd=r(Wc,"__call__"),Wc.forEach(t),Pd=r(Ft," special method."),Ft.forEach(t),Fd=p(Ge),w(Se.$$.fragment,Ge),Cd=p(Ge),w(Ie.$$.fragment,Ge),Ge.forEach(t),Ad=p(z),Y=s(z,"DIV",{class:!0});var Ct=d(Y);w(zo.$$.fragment,Ct),Sd=p(Ct),bn=s(Ct,"P",{});var Rc=d(bn);Id=r(Rc,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Rc.forEach(t),Nd=p(Ct),w(Ne.$$.fragment,Ct),Ct.forEach(t),z.forEach(t),ir=p(o),fe=s(o,"H2",{class:!0});var jr=d(fe);Le=s(jr,"A",{id:!0,class:!0,href:!0});var Gc=d(Le);vn=s(Gc,"SPAN",{});var Hc=d(vn);w(Po.$$.fragment,Hc),Hc.forEach(t),Gc.forEach(t),Ld=p(jr),yn=s(jr,"SPAN",{});var Uc=d(yn);Bd=r(Uc,"FlaxEncoderDecoderModel"),Uc.forEach(t),jr.forEach(t),cr=p(o),x=s(o,"DIV",{class:!0});var P=d(x);w(Fo.$$.fragment,P),Od=p(P),ue=s(P,"P",{});var At=d(ue);Vd=r(At,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),vt=s(At,"A",{href:!0});var Yc=d(vt);Wd=r(Yc,"from_pretrained()"),Yc.forEach(t),Rd=r(At," function and the decoder is loaded via "),yt=s(At,"A",{href:!0});var Jc=d(yt);Gd=r(Jc,"from_pretrained()"),Jc.forEach(t),Hd=r(At,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),At.forEach(t),Ud=p(P),Co=s(P,"P",{});var zr=d(Co);Yd=r(zr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ao=s(zr,"A",{href:!0,rel:!0});var Zc=d(Ao);Jd=r(Zc,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Zc.forEach(t),Zd=r(zr,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zr.forEach(t),Kd=p(P),wn=s(P,"P",{});var Kc=d(wn);Qd=r(Kc,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Kc.forEach(t),Xd=p(P),So=s(P,"P",{});var Pr=d(So);ei=r(Pr,"This model inherits from "),wt=s(Pr,"A",{href:!0});var Qc=d(wt);oi=r(Qc,"FlaxPreTrainedModel"),Qc.forEach(t),ti=r(Pr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr.forEach(t),ni=p(P),Io=s(P,"P",{});var Fr=d(Io);ri=r(Fr,`This model is also a Flax Linen
`),No=s(Fr,"A",{href:!0,rel:!0});var Xc=d(No);ai=r(Xc,"flax.nn.Module"),Xc.forEach(t),si=r(Fr,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fr.forEach(t),di=p(P),J=s(P,"P",{});var Ho=d(J);kt=s(Ho,"A",{href:!0});var el=d(kt);ii=r(el,"FlaxEncoderDecoderModel"),el.forEach(t),ci=r(Ho,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),kn=s(Ho,"EM",{});var ol=d(kn);li=r(ol,"~transformers.FlaxAutoModel.from_pretrained"),ol.forEach(t),pi=r(Ho,` class method for the
encoder and :meth`),Tn=s(Ho,"EM",{});var tl=d(Tn);mi=r(tl,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),tl.forEach(t),hi=r(Ho," class method for the decoder."),Ho.forEach(t),fi=p(P),L=s(P,"DIV",{class:!0});var He=d(L);w(Lo.$$.fragment,He),ui=p(He),ge=s(He,"P",{});var St=d(ge);gi=r(St,"The "),Tt=s(St,"A",{href:!0});var nl=d(Tt);_i=r(nl,"FlaxEncoderDecoderModel"),nl.forEach(t),bi=r(St," forward method, overrides the "),En=s(St,"CODE",{});var rl=d(En);vi=r(rl,"__call__"),rl.forEach(t),yi=r(St," special method."),St.forEach(t),wi=p(He),w(Be.$$.fragment,He),ki=p(He),w(Oe.$$.fragment,He),He.forEach(t),Ti=p(P),Z=s(P,"DIV",{class:!0});var It=d(Z);w(Bo.$$.fragment,It),Ei=p(It),$n=s(It,"P",{});var al=d($n);$i=r(al,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),al.forEach(t),Mi=p(It),w(Ve.$$.fragment,It),It.forEach(t),P.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(kl)),c(f,"id","encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#encoder-decoder-models"),c(_,"class","relative group"),c(_e,"id","overview"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#overview"),c(X,"class","relative group"),c(Jo,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(Ye,"href","https://arxiv.org/abs/1907.12461"),c(Ye,"rel","nofollow"),c(Zo,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(Ko,"href","/docs/transformers/pr_17287/en/model_doc/bert#transformers.BertModel"),c(Je,"href","https://arxiv.org/abs/1908.08345"),c(Je,"rel","nofollow"),c(we,"id","initialising-the-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-using-only-architecture"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#initialising-the-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-using-only-architecture"),c(ee,"class","relative group"),c(ke,"id","initialising-the-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-using-models-from-the-hub"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#initialising-the-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-using-models-from-the-hub"),c(oe,"class","relative group"),c(Te,"id","loading-the-existing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#loading-the-existing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel"),c(te,"class","relative group"),c(Ee,"id","training"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#training"),c(ne,"class","relative group"),c(ao,"href","https://colab.research.google.com/drive/1WIk2bxglElfZewOHboPFNj8H44_VAyKE?usp=sharing#scrollTo=ZwQIEhKOrJpl"),c(ao,"rel","nofollow"),c(so,"href","https://github.com/thomwolf"),c(so,"rel","nofollow"),c(io,"href","https://github.com/ydshieh"),c(io,"rel","nofollow"),c(Me,"id","transformers.EncoderDecoderConfig"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#transformers.EncoderDecoderConfig"),c(re,"class","relative group"),c(tt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(nt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(rt,"href","/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig"),c(at,"href","/docs/transformers/pr_17287/en/main_classes/configuration#transformers.PretrainedConfig"),c(st,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"id","transformers.EncoderDecoderModel"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.EncoderDecoderModel"),c(de,"class","relative group"),c(dt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(it,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(_o,"href","https://arxiv.org/abs/1907.12461"),c(_o,"rel","nofollow"),c(ct,"href","/docs/transformers/pr_17287/en/main_classes/model#transformers.PreTrainedModel"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(lt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(pt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.TFEncoderDecoderModel"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.TFEncoderDecoderModel"),c(pe,"class","relative group"),c(mt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(ht,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Mo,"href","https://arxiv.org/abs/1907.12461"),c(Mo,"rel","nofollow"),c(ft,"href","/docs/transformers/pr_17287/en/main_classes/model#transformers.TFPreTrainedModel"),c(qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qo,"rel","nofollow"),c(ut,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(gt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(_t,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(bt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.FlaxEncoderDecoderModel"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.FlaxEncoderDecoderModel"),c(fe,"class","relative group"),c(vt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(yt,"href","/docs/transformers/pr_17287/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ao,"href","https://arxiv.org/abs/1907.12461"),c(Ao,"rel","nofollow"),c(wt,"href","/docs/transformers/pr_17287/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(No,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(No,"rel","nofollow"),c(kt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(Tt,"href","/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),u(o,v,m),u(o,_,m),e(_,f),e(f,b),k(i,b,null),e(_,g),e(_,C),e(C,Cr),u(o,Cn,m),u(o,X,m),e(X,_e),e(_e,Nt),k(Ue,Nt,null),e(X,Ar),e(X,Lt),e(Lt,Sr),u(o,An,m),u(o,be,m),e(be,Ir),e(be,Jo),e(Jo,Nr),e(be,Lr),u(o,Sn,m),u(o,ve,m),e(ve,Br),e(ve,Ye),e(Ye,Or),e(ve,Vr),u(o,In,m),u(o,ye,m),e(ye,Wr),e(ye,Zo),e(Zo,Rr),e(ye,Gr),u(o,Nn,m),u(o,W,m),e(W,Hr),e(W,Ko),e(Ko,Ur),e(W,Yr),e(W,Je),e(Je,Jr),e(W,Zr),u(o,Ln,m),u(o,ee,m),e(ee,we),e(we,Bt),k(Ze,Bt,null),e(ee,Kr),e(ee,Ot),e(Ot,Qr),u(o,Bn,m),u(o,Qo,m),e(Qo,Xr),u(o,On,m),k(Ke,o,m),u(o,Vn,m),u(o,oe,m),e(oe,ke),e(ke,Vt),k(Qe,Vt,null),e(oe,ea),e(oe,Wt),e(Wt,oa),u(o,Wn,m),u(o,Xo,m),e(Xo,ta),u(o,Rn,m),k(Xe,o,m),u(o,Gn,m),u(o,te,m),e(te,Te),e(Te,Rt),k(eo,Rt,null),e(te,na),e(te,Gt),e(Gt,ra),u(o,Hn,m),u(o,et,m),e(et,aa),u(o,Un,m),k(oo,o,m),u(o,Yn,m),u(o,ot,m),e(ot,sa),u(o,Jn,m),u(o,R,m),e(R,da),e(R,Ht),e(Ht,ia),e(R,ca),e(R,Ut),e(Ut,la),e(R,pa),u(o,Zn,m),k(to,o,m),u(o,Kn,m),u(o,ne,m),e(ne,Ee),e(Ee,Yt),k(no,Yt,null),e(ne,ma),e(ne,Jt),e(Jt,ha),u(o,Qn,m),u(o,A,m),e(A,fa),e(A,Zt),e(Zt,ua),e(A,ga),e(A,Kt),e(Kt,_a),e(A,ba),e(A,Qt),e(Qt,va),e(A,ya),e(A,Xt),e(Xt,wa),e(A,ka),u(o,Xn,m),k(ro,o,m),u(o,er,m),u(o,$e,m),e($e,Ta),e($e,ao),e(ao,Ea),e($e,$a),u(o,or,m),u(o,G,m),e(G,Ma),e(G,so),e(so,Da),e(G,xa),e(G,io),e(io,qa),e(G,ja),u(o,tr,m),u(o,re,m),e(re,Me),e(Me,en),k(co,en,null),e(re,za),e(re,on),e(on,Pa),u(o,nr,m),u(o,F,m),k(lo,F,null),e(F,Fa),e(F,De),e(De,tt),e(tt,Ca),e(De,Aa),e(De,nt),e(nt,Sa),e(De,Ia),e(F,Na),e(F,ae),e(ae,La),e(ae,rt),e(rt,Ba),e(ae,Oa),e(ae,at),e(at,Va),e(ae,Wa),e(F,Ra),k(xe,F,null),e(F,Ga),e(F,qe),k(po,qe,null),e(qe,Ha),e(qe,mo),e(mo,Ua),e(mo,st),e(st,Ya),e(mo,Ja),e(F,Za),e(F,je),k(ho,je,null),e(je,Ka),e(je,se),e(se,Qa),e(se,tn),e(tn,Xa),e(se,es),e(se,nn),e(nn,os),e(se,ts),u(o,rr,m),u(o,de,m),e(de,ze),e(ze,rn),k(fo,rn,null),e(de,ns),e(de,an),e(an,rs),u(o,ar,m),u(o,M,m),k(uo,M,null),e(M,as),e(M,ie),e(ie,ss),e(ie,dt),e(dt,ds),e(ie,is),e(ie,it),e(it,cs),e(ie,ls),e(M,ps),e(M,go),e(go,ms),e(go,_o),e(_o,hs),e(go,fs),e(M,us),e(M,sn),e(sn,gs),e(M,_s),e(M,bo),e(bo,bs),e(bo,ct),e(ct,vs),e(bo,ys),e(M,ws),e(M,vo),e(vo,ks),e(vo,yo),e(yo,Ts),e(vo,Es),e(M,$s),e(M,H),e(H,lt),e(lt,Ms),e(H,Ds),e(H,dn),e(dn,xs),e(H,qs),e(H,cn),e(cn,js),e(H,zs),e(M,Ps),e(M,S),k(wo,S,null),e(S,Fs),e(S,ce),e(ce,Cs),e(ce,pt),e(pt,As),e(ce,Ss),e(ce,ln),e(ln,Is),e(ce,Ns),e(S,Ls),k(Pe,S,null),e(S,Bs),k(Fe,S,null),e(M,Os),e(M,I),k(ko,I,null),e(I,Vs),e(I,pn),e(pn,Ws),e(I,Rs),e(I,le),e(le,Gs),e(le,mn),e(mn,Hs),e(le,Us),e(le,hn),e(hn,Ys),e(le,Js),e(I,Zs),k(Ce,I,null),u(o,sr,m),u(o,pe,m),e(pe,Ae),e(Ae,fn),k(To,fn,null),e(pe,Ks),e(pe,un),e(un,Qs),u(o,dr,m),u(o,D,m),k(Eo,D,null),e(D,Xs),e(D,me),e(me,ed),e(me,mt),e(mt,od),e(me,td),e(me,ht),e(ht,nd),e(me,rd),e(D,ad),e(D,$o),e($o,sd),e($o,Mo),e(Mo,dd),e($o,id),e(D,cd),e(D,gn),e(gn,ld),e(D,pd),e(D,Do),e(Do,md),e(Do,ft),e(ft,hd),e(Do,fd),e(D,ud),e(D,xo),e(xo,gd),e(xo,qo),e(qo,_d),e(xo,bd),e(D,vd),e(D,U),e(U,ut),e(ut,yd),e(U,wd),e(U,gt),e(gt,kd),e(U,Td),e(U,_t),e(_t,Ed),e(U,$d),e(D,Md),e(D,N),k(jo,N,null),e(N,Dd),e(N,he),e(he,xd),e(he,bt),e(bt,qd),e(he,jd),e(he,_n),e(_n,zd),e(he,Pd),e(N,Fd),k(Se,N,null),e(N,Cd),k(Ie,N,null),e(D,Ad),e(D,Y),k(zo,Y,null),e(Y,Sd),e(Y,bn),e(bn,Id),e(Y,Nd),k(Ne,Y,null),u(o,ir,m),u(o,fe,m),e(fe,Le),e(Le,vn),k(Po,vn,null),e(fe,Ld),e(fe,yn),e(yn,Bd),u(o,cr,m),u(o,x,m),k(Fo,x,null),e(x,Od),e(x,ue),e(ue,Vd),e(ue,vt),e(vt,Wd),e(ue,Rd),e(ue,yt),e(yt,Gd),e(ue,Hd),e(x,Ud),e(x,Co),e(Co,Yd),e(Co,Ao),e(Ao,Jd),e(Co,Zd),e(x,Kd),e(x,wn),e(wn,Qd),e(x,Xd),e(x,So),e(So,ei),e(So,wt),e(wt,oi),e(So,ti),e(x,ni),e(x,Io),e(Io,ri),e(Io,No),e(No,ai),e(Io,si),e(x,di),e(x,J),e(J,kt),e(kt,ii),e(J,ci),e(J,kn),e(kn,li),e(J,pi),e(J,Tn),e(Tn,mi),e(J,hi),e(x,fi),e(x,L),k(Lo,L,null),e(L,ui),e(L,ge),e(ge,gi),e(ge,Tt),e(Tt,_i),e(ge,bi),e(ge,En),e(En,vi),e(ge,yi),e(L,wi),k(Be,L,null),e(L,ki),k(Oe,L,null),e(x,Ti),e(x,Z),k(Bo,Z,null),e(Z,Ei),e(Z,$n),e($n,$i),e(Z,Mi),k(Ve,Z,null),lr=!0},p(o,[m]){const Oo={};m&2&&(Oo.$$scope={dirty:m,ctx:o}),xe.$set(Oo);const Mn={};m&2&&(Mn.$$scope={dirty:m,ctx:o}),Pe.$set(Mn);const Dn={};m&2&&(Dn.$$scope={dirty:m,ctx:o}),Fe.$set(Dn);const xn={};m&2&&(xn.$$scope={dirty:m,ctx:o}),Ce.$set(xn);const Vo={};m&2&&(Vo.$$scope={dirty:m,ctx:o}),Se.$set(Vo);const qn={};m&2&&(qn.$$scope={dirty:m,ctx:o}),Ie.$set(qn);const jn={};m&2&&(jn.$$scope={dirty:m,ctx:o}),Ne.$set(jn);const zn={};m&2&&(zn.$$scope={dirty:m,ctx:o}),Be.$set(zn);const Wo={};m&2&&(Wo.$$scope={dirty:m,ctx:o}),Oe.$set(Wo);const Pn={};m&2&&(Pn.$$scope={dirty:m,ctx:o}),Ve.$set(Pn)},i(o){lr||(T(i.$$.fragment,o),T(Ue.$$.fragment,o),T(Ze.$$.fragment,o),T(Ke.$$.fragment,o),T(Qe.$$.fragment,o),T(Xe.$$.fragment,o),T(eo.$$.fragment,o),T(oo.$$.fragment,o),T(to.$$.fragment,o),T(no.$$.fragment,o),T(ro.$$.fragment,o),T(co.$$.fragment,o),T(lo.$$.fragment,o),T(xe.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(fo.$$.fragment,o),T(uo.$$.fragment,o),T(wo.$$.fragment,o),T(Pe.$$.fragment,o),T(Fe.$$.fragment,o),T(ko.$$.fragment,o),T(Ce.$$.fragment,o),T(To.$$.fragment,o),T(Eo.$$.fragment,o),T(jo.$$.fragment,o),T(Se.$$.fragment,o),T(Ie.$$.fragment,o),T(zo.$$.fragment,o),T(Ne.$$.fragment,o),T(Po.$$.fragment,o),T(Fo.$$.fragment,o),T(Lo.$$.fragment,o),T(Be.$$.fragment,o),T(Oe.$$.fragment,o),T(Bo.$$.fragment,o),T(Ve.$$.fragment,o),lr=!0)},o(o){E(i.$$.fragment,o),E(Ue.$$.fragment,o),E(Ze.$$.fragment,o),E(Ke.$$.fragment,o),E(Qe.$$.fragment,o),E(Xe.$$.fragment,o),E(eo.$$.fragment,o),E(oo.$$.fragment,o),E(to.$$.fragment,o),E(no.$$.fragment,o),E(ro.$$.fragment,o),E(co.$$.fragment,o),E(lo.$$.fragment,o),E(xe.$$.fragment,o),E(po.$$.fragment,o),E(ho.$$.fragment,o),E(fo.$$.fragment,o),E(uo.$$.fragment,o),E(wo.$$.fragment,o),E(Pe.$$.fragment,o),E(Fe.$$.fragment,o),E(ko.$$.fragment,o),E(Ce.$$.fragment,o),E(To.$$.fragment,o),E(Eo.$$.fragment,o),E(jo.$$.fragment,o),E(Se.$$.fragment,o),E(Ie.$$.fragment,o),E(zo.$$.fragment,o),E(Ne.$$.fragment,o),E(Po.$$.fragment,o),E(Fo.$$.fragment,o),E(Lo.$$.fragment,o),E(Be.$$.fragment,o),E(Oe.$$.fragment,o),E(Bo.$$.fragment,o),E(Ve.$$.fragment,o),lr=!1},d(o){t(h),o&&t(v),o&&t(_),$(i),o&&t(Cn),o&&t(X),$(Ue),o&&t(An),o&&t(be),o&&t(Sn),o&&t(ve),o&&t(In),o&&t(ye),o&&t(Nn),o&&t(W),o&&t(Ln),o&&t(ee),$(Ze),o&&t(Bn),o&&t(Qo),o&&t(On),$(Ke,o),o&&t(Vn),o&&t(oe),$(Qe),o&&t(Wn),o&&t(Xo),o&&t(Rn),$(Xe,o),o&&t(Gn),o&&t(te),$(eo),o&&t(Hn),o&&t(et),o&&t(Un),$(oo,o),o&&t(Yn),o&&t(ot),o&&t(Jn),o&&t(R),o&&t(Zn),$(to,o),o&&t(Kn),o&&t(ne),$(no),o&&t(Qn),o&&t(A),o&&t(Xn),$(ro,o),o&&t(er),o&&t($e),o&&t(or),o&&t(G),o&&t(tr),o&&t(re),$(co),o&&t(nr),o&&t(F),$(lo),$(xe),$(po),$(ho),o&&t(rr),o&&t(de),$(fo),o&&t(ar),o&&t(M),$(uo),$(wo),$(Pe),$(Fe),$(ko),$(Ce),o&&t(sr),o&&t(pe),$(To),o&&t(dr),o&&t(D),$(Eo),$(jo),$(Se),$(Ie),$(zo),$(Ne),o&&t(ir),o&&t(fe),$(Po),o&&t(cr),o&&t(x),$(Fo),$(Lo),$(Be),$(Oe),$(Bo),$(Ve)}}}const kl={local:"encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"initialising-the-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-using-only-architecture",title:"Initialising the [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) using only architecture"},{local:"initialising-the-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel-using-models-from-the-hub",title:"Initialising the [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) using models from the hub"},{local:"loading-the-existing-encoderdecodermodeldocstransformerspr17287enmodeldocencoderdecodertransformersencoderdecodermodel",title:"Loading the existing [EncoderDecoderModel](/docs/transformers/pr_17287/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel)"},{local:"training",title:"Training"},{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Tl(q){return ll(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jl extends sl{constructor(h){super();dl(this,h,Tl,wl,il,{})}}export{jl as default,kl as metadata};
