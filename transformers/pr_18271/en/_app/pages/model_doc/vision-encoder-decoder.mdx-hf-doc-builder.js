import{S as Im,i as Lm,s as Nm,e as a,k as l,w as b,t as n,M as Om,c as s,d as t,m as p,a as d,x as w,h as r,b as c,G as e,g,y as T,q as E,o as y,B as k,v as Rm,L as lt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Pl}from"../../chunks/Tip-hf-doc-builder.js";import{D as W}from"../../chunks/Docstring-hf-doc-builder.js";import{C as H}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as U}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ct}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Bm(F){let h,x,_,f,v;return f=new H({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

# Initializing a ViT & BERT style configuration
config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a ViTBert model from a ViT & bert-base-uncased style configurations
model = VisionEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained("my-model")
model = VisionEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViTBert model from a ViT &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),T(f,i,u),v=!0},p:lt,i(i){v||(E(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Gm(F){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=d(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){g(i,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function Wm(F){let h,x,_,f,v;return f=new H({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests
from PIL import Image
import torch

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg"
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")

# training
model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

pixel_values = processor(image, return_tensors="pt").pixel_values
text = "hello world"
labels = processor.tokenizer(text, return_tensors="pt").input_ids
outputs = model(pixel_values=pixel_values, labels=labels)
loss = outputs.loss

# inference (generation)
generated_ids = model.generate(pixel_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),T(f,i,u),v=!0},p:lt,i(i){v||(E(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Hm(F){let h,x,_,f,v;return f=new H({props:{code:`from transformers import VisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = VisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Example:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),T(f,i,u),v=!0},p:lt,i(i){v||(E(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Um(F){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=d(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){g(i,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function Zm(F){let h,x,_,f,v;return f=new H({props:{code:`from transformers import AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
from PIL import Image
import requests

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
decoder_tokenizer = AutoTokenizer.from_pretrained("gpt2")

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
img = Image.open(requests.get(url, stream=True).raw)

# forward
pixel_values = feature_extractor(images=img, return_tensors="tf").pixel_values  # Batch size 1
decoder_input_ids = decoder_tokenizer("Linda Davis", return_tensors="tf").input_ids  # Batch size 1
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

# training
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("vit-gpt2")
model = TFVisionEncoderDecoderModel.from_pretrained("vit-gpt2")

# generation
generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=img, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = decoder_tokenizer(<span class="hljs-string">&quot;Linda Davis&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),T(f,i,u),v=!0},p:lt,i(i){v||(E(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Ym(F){let h,x,_,f,v;return f=new H({props:{code:`from transformers import TFVisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = TFVisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Example:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),T(f,i,u),v=!0},p:lt,i(i){v||(E(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Jm(F){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=d(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){g(i,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function Km(F){let h,x,_,f,v;return f=new H({props:{code:`from transformers import FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")

# load output tokenizer
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

# initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

pixel_values = feature_extractor(images=image, return_tensors="np").pixel_values

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

# generation
sequences = model.generate(pixel_values, num_beams=4, max_length=12).sequences

captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(pixel_values, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),T(f,i,u),v=!0},p:lt,i(i){v||(E(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Qm(F){let h,x,_,f,v;return f=new H({props:{code:`from transformers import FlaxVisionEncoderDecoderModel

# initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)
# saving model after fine-tuning
model.save_pretrained("./vit-gpt2")
# load fine-tuned model
model = FlaxVisionEncoderDecoderModel.from_pretrained("./vit-gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Example:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),T(f,i,u),v=!0},p:lt,i(i){v||(E(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Xm(F){let h,x,_,f,v,i,u,I,Da,Tr,te,ye,mn,oo,Va,hn,qa,Er,$,Fa,pt,za,Pa,fn,Aa,Ca,mt,Sa,Ia,ht,La,Na,ft,Oa,Ra,gt,Ba,Ga,gn,Wa,Ha,ut,Ua,Za,_t,Ya,Ja,vt,Ka,Qa,bt,Xa,es,yr,ke,os,to,ts,ns,kr,xe,rs,wt,as,ss,xr,Z,ds,Tt,is,cs,Et,ls,ps,$r,ne,$e,un,no,ms,ro,hs,_n,fs,gs,jr,re,yt,us,_s,kt,vs,bs,Mr,ao,Dr,ae,je,vn,so,ws,io,Ts,bn,Es,ys,Vr,M,xt,ks,xs,wn,$s,js,$t,Ms,Ds,Tn,Vs,qs,En,Fs,zs,yn,Ps,As,jt,Cs,Ss,Me,Is,kn,Ls,Ns,xn,Os,Rs,Mt,Bs,Gs,qr,co,Fr,se,De,$n,lo,Ws,po,Hs,jn,Us,Zs,zr,Y,Ys,Mn,Js,Ks,Dn,Qs,Xs,Pr,Ve,ed,Vn,od,td,Ar,mo,Cr,de,qe,qn,ho,nd,fo,rd,Fn,ad,sd,Sr,ie,zn,dd,id,Pn,cd,ld,Ir,go,Lr,ce,Fe,An,uo,pd,Cn,md,Nr,L,hd,Sn,fd,gd,In,ud,_d,Ln,vd,bd,Or,_o,Rr,J,wd,vo,Td,Ed,bo,yd,kd,Br,le,ze,Nn,wo,xd,On,$d,Gr,S,To,jd,Pe,Dt,Md,Dd,Vt,Vd,qd,Fd,pe,zd,qt,Pd,Ad,Ft,Cd,Sd,Id,Ae,Ld,Ce,Eo,Nd,yo,Od,zt,Rd,Bd,Gd,Se,ko,Wd,me,Hd,Rn,Ud,Zd,Bn,Yd,Jd,Wr,he,Ie,Gn,xo,Kd,Wn,Qd,Hr,D,$o,Xd,fe,ei,Pt,oi,ti,At,ni,ri,ai,jo,si,Mo,di,ii,ci,Do,li,Vo,pi,mi,hi,Hn,fi,gi,qo,ui,Ct,_i,vi,bi,Fo,wi,zo,Ti,Ei,yi,K,St,ki,xi,Un,$i,ji,Zn,Mi,Di,Vi,N,Po,qi,ge,Fi,It,zi,Pi,Yn,Ai,Ci,Si,Le,Ii,Ne,Li,O,Ao,Ni,Jn,Oi,Ri,ue,Bi,Kn,Gi,Wi,Qn,Hi,Ui,Zi,Oe,Ur,_e,Re,Xn,Co,Yi,er,Ji,Zr,V,So,Ki,ve,Qi,Lt,Xi,ec,Nt,oc,tc,nc,Io,rc,Lo,ac,sc,dc,No,ic,Oo,cc,lc,pc,or,mc,hc,Ro,fc,Ot,gc,uc,_c,Bo,vc,Go,bc,wc,Tc,Q,Rt,Ec,yc,Bt,kc,xc,Gt,$c,jc,Mc,R,Wo,Dc,be,Vc,Wt,qc,Fc,tr,zc,Pc,Ac,Be,Cc,Ge,Sc,X,Ho,Ic,nr,Lc,Nc,We,Yr,we,He,rr,Uo,Oc,ar,Rc,Jr,q,Zo,Bc,Te,Gc,Ht,Wc,Hc,Ut,Uc,Zc,Yc,Yo,Jc,Jo,Kc,Qc,Xc,Ko,el,Qo,ol,tl,nl,sr,rl,al,Xo,sl,Zt,dl,il,cl,et,ll,ot,pl,ml,hl,ee,Yt,fl,gl,dr,ul,_l,ir,vl,bl,wl,B,tt,Tl,Ee,El,Jt,yl,kl,cr,xl,$l,jl,Ue,Ml,Ze,Dl,oe,nt,Vl,lr,ql,Fl,Ye,Kr;return i=new U({}),oo=new U({}),no=new U({}),ao=new H({props:{code:`from transformers import ViTConfig, BertConfig, EncoderDecoderConfig, EncoderDecoderModel

config_encoder = ViTConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = EncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTConfig, BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)`}}),so=new U({}),co=new H({props:{code:`from transformers import VisionEncoderDecoderModel

model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "microsoft/swin-base-patch4-window7-224-in22k", "bert-base-uncased"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/swin-base-patch4-window7-224-in22k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)`}}),lo=new U({}),mo=new H({props:{code:`import requests
from PIL import Image

from transformers import GPT2TokenizerFast, ViTFeatureExtractor, VisionEncoderDecoderModel

# load a fine-tuned image captioning model and corresponding tokenizer and feature extractor
model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
tokenizer = GPT2TokenizerFast.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
feature_extractor = ViTFeatureExtractor.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

# let's perform inference on an image
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
pixel_values = feature_extractor(image, return_tensors="pt").pixel_values

# autoregressively generate caption (uses greedy decoding by default)
generated_ids = model.generate(pixel_values)
generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
print(generated_text)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast, ViTFeatureExtractor, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned image captioning model and corresponding tokenizer and feature extractor</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on an image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate caption (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
a cat laying on a blanket <span class="hljs-built_in">next</span> to a cat laying on a bed`}}),ho=new U({}),go=new H({props:{code:`from transformers import VisionEncoderDecoderModel, TFVisionEncoderDecoderModel

_model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")

model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel, TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>_model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),uo=new U({}),_o=new H({props:{code:`from transformers import ViTFeatureExtractor, BertTokenizer, VisionEncoderDecoderModel
from datasets import load_dataset

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)

model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]
pixel_values = feature_extractor(image, return_tensors="pt").pixel_values

labels = tokenizer(
    "an image of two cats chilling on a couch",
    return_tensors="pt",
).input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(pixel_values=pixel_values, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, BertTokenizer, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;an image of two cats chilling on a couch&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(pixel_values=pixel_values, labels=labels).loss`}}),wo=new U({}),To=new W({props:{name:"class transformers.VisionEncoderDecoderConfig",anchor:"transformers.VisionEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L27"}}),Ae=new ct({props:{anchor:"transformers.VisionEncoderDecoderConfig.example",$$slots:{default:[Bm]},$$scope:{ctx:F}}}),Eo=new W({props:{name:"from_encoder_decoder_configs",anchor:"transformers.VisionEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L93",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a></p>
`}}),ko=new W({props:{name:"to_dict",anchor:"transformers.VisionEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L110",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),xo=new U({}),$o=new W({props:{name:"class transformers.VisionEncoderDecoderModel",anchor:"transformers.VisionEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L148"}}),Po=new W({props:{name:"forward",anchor:"transformers.VisionEncoderDecoderModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using a feature extractor (e.g. if you use ViT as the encoder,
you should use <a href="/docs/transformers/pr_18271/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See <a href="/docs/transformers/pr_18271/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.VisionEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.VisionEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.VisionEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisionEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Le=new Pl({props:{$$slots:{default:[Gm]},$$scope:{ctx:F}}}),Ne=new ct({props:{anchor:"transformers.VisionEncoderDecoderModel.forward.example",$$slots:{default:[Wm]},$$scope:{ctx:F}}}),Ao=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the image encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the text decoder. Can be either:</p>
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
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L247"}}),Oe=new ct({props:{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Hm]},$$scope:{ctx:F}}}),Co=new U({}),So=new W({props:{name:"class transformers.TFVisionEncoderDecoderModel",anchor:"transformers.TFVisionEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L176"}}),Wo=new W({props:{name:"call",anchor:"transformers.TFVisionEncoderDecoderModel.call",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision&#x2019;s model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/pr_18271/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/pr_18271/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L514",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Be=new Pl({props:{$$slots:{default:[Um]},$$scope:{ctx:F}}}),Ge=new ct({props:{anchor:"transformers.TFVisionEncoderDecoderModel.call.example",$$slots:{default:[Zm]},$$scope:{ctx:F}}}),Ho=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L350"}}),We=new ct({props:{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Ym]},$$scope:{ctx:F}}}),Uo=new U({}),Zo=new W({props:{name:"class transformers.FlaxVisionEncoderDecoderModel",anchor:"transformers.FlaxVisionEncoderDecoderModel",parameters:[{name:"config",val:": VisionEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L268"}}),tt=new W({props:{name:"__call__",anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__",parameters:[{name:"pixel_values",val:": ndarray"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/pr_18271/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/pr_18271/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18271/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L599",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18271/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Ue=new Pl({props:{$$slots:{default:[Jm]},$$scope:{ctx:F}}}),Ze=new ct({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.example",$$slots:{default:[Km]},$$scope:{ctx:F}}}),nt=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18271/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L724"}}),Ye=new ct({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Qm]},$$scope:{ctx:F}}}),{c(){h=a("meta"),x=l(),_=a("h1"),f=a("a"),v=a("span"),b(i.$$.fragment),u=l(),I=a("span"),Da=n("Vision Encoder Decoder Models"),Tr=l(),te=a("h2"),ye=a("a"),mn=a("span"),b(oo.$$.fragment),Va=l(),hn=a("span"),qa=n("Overview"),Er=l(),$=a("p"),Fa=n("The "),pt=a("a"),za=n("VisionEncoderDecoderModel"),Pa=n(` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),fn=a("em"),Aa=n("e.g."),Ca=l(),mt=a("a"),Sa=n("ViT"),Ia=n(", "),ht=a("a"),La=n("BEiT"),Na=n(", "),ft=a("a"),Oa=n("DeiT"),Ra=n(", "),gt=a("a"),Ba=n("Swin"),Ga=n(`)
and any pretrained language model as the decoder (`),gn=a("em"),Wa=n("e.g."),Ha=l(),ut=a("a"),Ua=n("RoBERTa"),Za=n(", "),_t=a("a"),Ya=n("GPT2"),Ja=n(", "),vt=a("a"),Ka=n("BERT"),Qa=n(", "),bt=a("a"),Xa=n("DistilBERT"),es=n(")."),yr=l(),ke=a("p"),os=n(`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),to=a("a"),ts=n("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),ns=n(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),kr=l(),xe=a("p"),rs=n("After such a "),wt=a("a"),as=n("VisionEncoderDecoderModel"),ss=n(` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),xr=l(),Z=a("p"),ds=n(`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),Tt=a("a"),is=n("TrOCR"),cs=n(", which is an instance of "),Et=a("a"),ls=n("VisionEncoderDecoderModel"),ps=n("."),$r=l(),ne=a("h2"),$e=a("a"),un=a("span"),b(no.$$.fragment),ms=l(),ro=a("span"),hs=n("Randomly initializing "),_n=a("code"),fs=n("VisionEncoderDecoderModel"),gs=n(" from model configurations."),jr=l(),re=a("p"),yt=a("a"),us=n("VisionEncoderDecoderModel"),_s=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),kt=a("a"),vs=n("ViTModel"),bs=n(" configuration for the encoder\nand the default [\u2018BertModel`] configuration for the decoder."),Mr=l(),b(ao.$$.fragment),Dr=l(),ae=a("h2"),je=a("a"),vn=a("span"),b(so.$$.fragment),ws=l(),io=a("span"),Ts=n("Initialising "),bn=a("code"),Es=n("VisionEncoderDecoderModel['"),ys=n("` from a pretrained encoder and a pretrained decoder."),Vr=l(),M=a("p"),xt=a("a"),ks=n("VisionEncoderDecoderModel"),xs=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),wn=a("em"),$s=n("e.g."),js=l(),$t=a("a"),Ms=n("Swin"),Ds=n(", can serve as the encoder and both pretrained auto-encoding models, "),Tn=a("em"),Vs=n("e.g."),qs=n(" BERT, pretrained causal language models, "),En=a("em"),Fs=n("e.g."),zs=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),yn=a("em"),Ps=n("e.g."),As=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),jt=a("a"),Cs=n("VisionEncoderDecoderModel"),Ss=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Me=a("a"),Is=n("the "),kn=a("em"),Ls=n("Warm-starting-encoder-decoder blog post"),Ns=n(`.
To do so, the `),xn=a("code"),Os=n("VisionEncoderDecoderModel"),Rs=n(" class provides a "),Mt=a("a"),Bs=n("VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),Gs=n(" method."),qr=l(),b(co.$$.fragment),Fr=l(),se=a("h2"),De=a("a"),$n=a("span"),b(lo.$$.fragment),Ws=l(),po=a("span"),Hs=n("Loading an existing "),jn=a("code"),Us=n("VisionEncoderDecoderModel"),Zs=n(" checkpoint and perform inference."),zr=l(),Y=a("p"),Ys=n("To load fine-tuned checkpoints of the "),Mn=a("code"),Js=n("VisionEncoderDecoderModel"),Ks=n(" class, [\u2018VisionEncoderDecoderModel`] provides the "),Dn=a("code"),Qs=n("from_pretrained(...)"),Xs=n(" method just like any other model architecture in Transformers."),Pr=l(),Ve=a("p"),ed=n("To perform inference, one uses the "),Vn=a("code"),od=n("generate"),td=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Ar=l(),b(mo.$$.fragment),Cr=l(),de=a("h2"),qe=a("a"),qn=a("span"),b(ho.$$.fragment),nd=l(),fo=a("span"),rd=n("Loading a PyTorch checkpoint into "),Fn=a("code"),ad=n("TFVisionEncoderDecoderModel"),sd=n("."),Sr=l(),ie=a("p"),zn=a("code"),dd=n("TFVisionEncoderDecoderModel.from_pretrained()"),id=n(` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Pn=a("code"),cd=n("from_pt=True"),ld=n(` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),Ir=l(),b(go.$$.fragment),Lr=l(),ce=a("h2"),Fe=a("a"),An=a("span"),b(uo.$$.fragment),pd=l(),Cn=a("span"),md=n("Training"),Nr=l(),L=a("p"),hd=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Sn=a("code"),fd=n("pixel_values"),gd=n(` (which are the
images) and `),In=a("code"),ud=n("labels"),_d=n(" (which are the "),Ln=a("code"),vd=n("input_ids"),bd=n(" of the encoded target sequence)."),Or=l(),b(_o.$$.fragment),Rr=l(),J=a("p"),wd=n("This model was contributed by "),vo=a("a"),Td=n("nielsr"),Ed=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),bo=a("a"),yd=n("ydshieh"),kd=n("."),Br=l(),le=a("h2"),ze=a("a"),Nn=a("span"),b(wo.$$.fragment),xd=l(),On=a("span"),$d=n("VisionEncoderDecoderConfig"),Gr=l(),S=a("div"),b(To.$$.fragment),jd=l(),Pe=a("p"),Dt=a("a"),Md=n("VisionEncoderDecoderConfig"),Dd=n(` is the configuration class to store the configuration of a
`),Vt=a("a"),Vd=n("VisionEncoderDecoderModel"),qd=n(`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Fd=l(),pe=a("p"),zd=n("Configuration objects inherit from "),qt=a("a"),Pd=n("PretrainedConfig"),Ad=n(` and can be used to control the model outputs. Read the
documentation from `),Ft=a("a"),Cd=n("PretrainedConfig"),Sd=n(" for more information."),Id=l(),b(Ae.$$.fragment),Ld=l(),Ce=a("div"),b(Eo.$$.fragment),Nd=l(),yo=a("p"),Od=n("Instantiate a "),zt=a("a"),Rd=n("VisionEncoderDecoderConfig"),Bd=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Gd=l(),Se=a("div"),b(ko.$$.fragment),Wd=l(),me=a("p"),Hd=n("Serializes this instance to a Python dictionary. Override the default "),Rn=a("em"),Ud=n("to_dict()"),Zd=n(" from "),Bn=a("em"),Yd=n("PretrainedConfig"),Jd=n("."),Wr=l(),he=a("h2"),Ie=a("a"),Gn=a("span"),b(xo.$$.fragment),Kd=l(),Wn=a("span"),Qd=n("VisionEncoderDecoderModel"),Hr=l(),D=a("div"),b($o.$$.fragment),Xd=l(),fe=a("p"),ei=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Pt=a("a"),oi=n("from_pretrained()"),ti=n(" function and the decoder is loaded via "),At=a("a"),ni=n("from_pretrained()"),ri=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),ai=l(),jo=a("p"),si=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=a("a"),di=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ii=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ci=l(),Do=a("p"),li=n("Additionally, in "),Vo=a("a"),pi=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),mi=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),hi=l(),Hn=a("p"),fi=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),gi=l(),qo=a("p"),ui=n("This model inherits from "),Ct=a("a"),_i=n("PreTrainedModel"),vi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi=l(),Fo=a("p"),wi=n("This model is also a PyTorch "),zo=a("a"),Ti=n("torch.nn.Module"),Ei=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yi=l(),K=a("p"),St=a("a"),ki=n("VisionEncoderDecoderModel"),xi=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Un=a("em"),$i=n("~transformers.AutoModel.from_pretrained"),ji=n(` class method for the encoder and
:meth`),Zn=a("em"),Mi=n("~transformers.AutoModelForCausalLM.from_pretrained"),Di=n(" class method for the decoder."),Vi=l(),N=a("div"),b(Po.$$.fragment),qi=l(),ge=a("p"),Fi=n("The "),It=a("a"),zi=n("VisionEncoderDecoderModel"),Pi=n(" forward method, overrides the "),Yn=a("code"),Ai=n("__call__"),Ci=n(" special method."),Si=l(),b(Le.$$.fragment),Ii=l(),b(Ne.$$.fragment),Li=l(),O=a("div"),b(Ao.$$.fragment),Ni=l(),Jn=a("p"),Oi=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Ri=l(),ue=a("p"),Bi=n("The model is set in evaluation mode by default using "),Kn=a("code"),Gi=n("model.eval()"),Wi=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Qn=a("code"),Hi=n("model.train()"),Ui=n("."),Zi=l(),b(Oe.$$.fragment),Ur=l(),_e=a("h2"),Re=a("a"),Xn=a("span"),b(Co.$$.fragment),Yi=l(),er=a("span"),Ji=n("TFVisionEncoderDecoderModel"),Zr=l(),V=a("div"),b(So.$$.fragment),Ki=l(),ve=a("p"),Qi=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Lt=a("a"),Xi=n("from_pretrained()"),ec=n(" function and the decoder is loaded via "),Nt=a("a"),oc=n("from_pretrained()"),tc=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),nc=l(),Io=a("p"),rc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Lo=a("a"),ac=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),sc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),dc=l(),No=a("p"),ic=n("Additionally, in "),Oo=a("a"),cc=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),lc=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),pc=l(),or=a("p"),mc=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),hc=l(),Ro=a("p"),fc=n("This model inherits from "),Ot=a("a"),gc=n("TFPreTrainedModel"),uc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c=l(),Bo=a("p"),vc=n("This model is also a "),Go=a("a"),bc=n("tf.keras.Model"),wc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tc=l(),Q=a("p"),Rt=a("a"),Ec=n("TFVisionEncoderDecoderModel"),yc=n(` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Bt=a("a"),kc=n("from_pretrained()"),xc=n(` class method for the encoder and
`),Gt=a("a"),$c=n("from_pretrained()"),jc=n(" class method for the decoder."),Mc=l(),R=a("div"),b(Wo.$$.fragment),Dc=l(),be=a("p"),Vc=n("The "),Wt=a("a"),qc=n("TFVisionEncoderDecoderModel"),Fc=n(" forward method, overrides the "),tr=a("code"),zc=n("__call__"),Pc=n(" special method."),Ac=l(),b(Be.$$.fragment),Cc=l(),b(Ge.$$.fragment),Sc=l(),X=a("div"),b(Ho.$$.fragment),Ic=l(),nr=a("p"),Lc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Nc=l(),b(We.$$.fragment),Yr=l(),we=a("h2"),He=a("a"),rr=a("span"),b(Uo.$$.fragment),Oc=l(),ar=a("span"),Rc=n("FlaxVisionEncoderDecoderModel"),Jr=l(),q=a("div"),b(Zo.$$.fragment),Bc=l(),Te=a("p"),Gc=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Ht=a("a"),Wc=n("from_pretrained()"),Hc=n(" function and the decoder is loaded via "),Ut=a("a"),Uc=n("from_pretrained()"),Zc=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),Yc=l(),Yo=a("p"),Jc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Jo=a("a"),Kc=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Qc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Xc=l(),Ko=a("p"),el=n("Additionally, in "),Qo=a("a"),ol=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),tl=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),nl=l(),sr=a("p"),rl=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),al=l(),Xo=a("p"),sl=n("This model inherits from "),Zt=a("a"),dl=n("FlaxPreTrainedModel"),il=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cl=l(),et=a("p"),ll=n(`This model is also a Flax Linen
`),ot=a("a"),pl=n("flax.nn.Module"),ml=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hl=l(),ee=a("p"),Yt=a("a"),fl=n("FlaxVisionEncoderDecoderModel"),gl=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),dr=a("em"),ul=n("~transformers.FlaxAutoModel.from_pretrained"),_l=n(` class method
for the encoder and :meth`),ir=a("em"),vl=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),bl=n(" class method for the decoder."),wl=l(),B=a("div"),b(tt.$$.fragment),Tl=l(),Ee=a("p"),El=n("The "),Jt=a("a"),yl=n("FlaxVisionEncoderDecoderModel"),kl=n(" forward method, overrides the "),cr=a("code"),xl=n("__call__"),$l=n(" special method."),jl=l(),b(Ue.$$.fragment),Ml=l(),b(Ze.$$.fragment),Dl=l(),oe=a("div"),b(nt.$$.fragment),Vl=l(),lr=a("p"),ql=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Fl=l(),b(Ye.$$.fragment),this.h()},l(o){const m=Om('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),x=p(o),_=s(o,"H1",{class:!0});var rt=d(_);f=s(rt,"A",{id:!0,class:!0,href:!0});var pr=d(f);v=s(pr,"SPAN",{});var mr=d(v);w(i.$$.fragment,mr),mr.forEach(t),pr.forEach(t),u=p(rt),I=s(rt,"SPAN",{});var hr=d(I);Da=r(hr,"Vision Encoder Decoder Models"),hr.forEach(t),rt.forEach(t),Tr=p(o),te=s(o,"H2",{class:!0});var at=d(te);ye=s(at,"A",{id:!0,class:!0,href:!0});var fr=d(ye);mn=s(fr,"SPAN",{});var gr=d(mn);w(oo.$$.fragment,gr),gr.forEach(t),fr.forEach(t),Va=p(at),hn=s(at,"SPAN",{});var ur=d(hn);qa=r(ur,"Overview"),ur.forEach(t),at.forEach(t),Er=p(o),$=s(o,"P",{});var j=d($);Fa=r(j,"The "),pt=s(j,"A",{href:!0});var _r=d(pt);za=r(_r,"VisionEncoderDecoderModel"),_r.forEach(t),Pa=r(j,` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),fn=s(j,"EM",{});var Al=d(fn);Aa=r(Al,"e.g."),Al.forEach(t),Ca=p(j),mt=s(j,"A",{href:!0});var Cl=d(mt);Sa=r(Cl,"ViT"),Cl.forEach(t),Ia=r(j,", "),ht=s(j,"A",{href:!0});var Sl=d(ht);La=r(Sl,"BEiT"),Sl.forEach(t),Na=r(j,", "),ft=s(j,"A",{href:!0});var Il=d(ft);Oa=r(Il,"DeiT"),Il.forEach(t),Ra=r(j,", "),gt=s(j,"A",{href:!0});var Ll=d(gt);Ba=r(Ll,"Swin"),Ll.forEach(t),Ga=r(j,`)
and any pretrained language model as the decoder (`),gn=s(j,"EM",{});var Nl=d(gn);Wa=r(Nl,"e.g."),Nl.forEach(t),Ha=p(j),ut=s(j,"A",{href:!0});var Ol=d(ut);Ua=r(Ol,"RoBERTa"),Ol.forEach(t),Za=r(j,", "),_t=s(j,"A",{href:!0});var Rl=d(_t);Ya=r(Rl,"GPT2"),Rl.forEach(t),Ja=r(j,", "),vt=s(j,"A",{href:!0});var Bl=d(vt);Ka=r(Bl,"BERT"),Bl.forEach(t),Qa=r(j,", "),bt=s(j,"A",{href:!0});var Gl=d(bt);Xa=r(Gl,"DistilBERT"),Gl.forEach(t),es=r(j,")."),j.forEach(t),yr=p(o),ke=s(o,"P",{});var Qr=d(ke);os=r(Qr,`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),to=s(Qr,"A",{href:!0,rel:!0});var Wl=d(to);ts=r(Wl,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Wl.forEach(t),ns=r(Qr,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),Qr.forEach(t),kr=p(o),xe=s(o,"P",{});var Xr=d(xe);rs=r(Xr,"After such a "),wt=s(Xr,"A",{href:!0});var Hl=d(wt);as=r(Hl,"VisionEncoderDecoderModel"),Hl.forEach(t),ss=r(Xr,` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),Xr.forEach(t),xr=p(o),Z=s(o,"P",{});var Kt=d(Z);ds=r(Kt,`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),Tt=s(Kt,"A",{href:!0});var Ul=d(Tt);is=r(Ul,"TrOCR"),Ul.forEach(t),cs=r(Kt,", which is an instance of "),Et=s(Kt,"A",{href:!0});var Zl=d(Et);ls=r(Zl,"VisionEncoderDecoderModel"),Zl.forEach(t),ps=r(Kt,"."),Kt.forEach(t),$r=p(o),ne=s(o,"H2",{class:!0});var ea=d(ne);$e=s(ea,"A",{id:!0,class:!0,href:!0});var Yl=d($e);un=s(Yl,"SPAN",{});var Jl=d(un);w(no.$$.fragment,Jl),Jl.forEach(t),Yl.forEach(t),ms=p(ea),ro=s(ea,"SPAN",{});var oa=d(ro);hs=r(oa,"Randomly initializing "),_n=s(oa,"CODE",{});var Kl=d(_n);fs=r(Kl,"VisionEncoderDecoderModel"),Kl.forEach(t),gs=r(oa," from model configurations."),oa.forEach(t),ea.forEach(t),jr=p(o),re=s(o,"P",{});var vr=d(re);yt=s(vr,"A",{href:!0});var Ql=d(yt);us=r(Ql,"VisionEncoderDecoderModel"),Ql.forEach(t),_s=r(vr," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),kt=s(vr,"A",{href:!0});var Xl=d(kt);vs=r(Xl,"ViTModel"),Xl.forEach(t),bs=r(vr," configuration for the encoder\nand the default [\u2018BertModel`] configuration for the decoder."),vr.forEach(t),Mr=p(o),w(ao.$$.fragment,o),Dr=p(o),ae=s(o,"H2",{class:!0});var ta=d(ae);je=s(ta,"A",{id:!0,class:!0,href:!0});var ep=d(je);vn=s(ep,"SPAN",{});var op=d(vn);w(so.$$.fragment,op),op.forEach(t),ep.forEach(t),ws=p(ta),io=s(ta,"SPAN",{});var na=d(io);Ts=r(na,"Initialising "),bn=s(na,"CODE",{});var tp=d(bn);Es=r(tp,"VisionEncoderDecoderModel['"),tp.forEach(t),ys=r(na,"` from a pretrained encoder and a pretrained decoder."),na.forEach(t),ta.forEach(t),Vr=p(o),M=s(o,"P",{});var z=d(M);xt=s(z,"A",{href:!0});var np=d(xt);ks=r(np,"VisionEncoderDecoderModel"),np.forEach(t),xs=r(z," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),wn=s(z,"EM",{});var rp=d(wn);$s=r(rp,"e.g."),rp.forEach(t),js=p(z),$t=s(z,"A",{href:!0});var ap=d($t);Ms=r(ap,"Swin"),ap.forEach(t),Ds=r(z,", can serve as the encoder and both pretrained auto-encoding models, "),Tn=s(z,"EM",{});var sp=d(Tn);Vs=r(sp,"e.g."),sp.forEach(t),qs=r(z," BERT, pretrained causal language models, "),En=s(z,"EM",{});var dp=d(En);Fs=r(dp,"e.g."),dp.forEach(t),zs=r(z," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),yn=s(z,"EM",{});var ip=d(yn);Ps=r(ip,"e.g."),ip.forEach(t),As=r(z,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),jt=s(z,"A",{href:!0});var cp=d(jt);Cs=r(cp,"VisionEncoderDecoderModel"),cp.forEach(t),Ss=r(z," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Me=s(z,"A",{href:!0,rel:!0});var zl=d(Me);Is=r(zl,"the "),kn=s(zl,"EM",{});var lp=d(kn);Ls=r(lp,"Warm-starting-encoder-decoder blog post"),lp.forEach(t),zl.forEach(t),Ns=r(z,`.
To do so, the `),xn=s(z,"CODE",{});var pp=d(xn);Os=r(pp,"VisionEncoderDecoderModel"),pp.forEach(t),Rs=r(z," class provides a "),Mt=s(z,"A",{href:!0});var mp=d(Mt);Bs=r(mp,"VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),mp.forEach(t),Gs=r(z," method."),z.forEach(t),qr=p(o),w(co.$$.fragment,o),Fr=p(o),se=s(o,"H2",{class:!0});var ra=d(se);De=s(ra,"A",{id:!0,class:!0,href:!0});var hp=d(De);$n=s(hp,"SPAN",{});var fp=d($n);w(lo.$$.fragment,fp),fp.forEach(t),hp.forEach(t),Ws=p(ra),po=s(ra,"SPAN",{});var aa=d(po);Hs=r(aa,"Loading an existing "),jn=s(aa,"CODE",{});var gp=d(jn);Us=r(gp,"VisionEncoderDecoderModel"),gp.forEach(t),Zs=r(aa," checkpoint and perform inference."),aa.forEach(t),ra.forEach(t),zr=p(o),Y=s(o,"P",{});var Qt=d(Y);Ys=r(Qt,"To load fine-tuned checkpoints of the "),Mn=s(Qt,"CODE",{});var up=d(Mn);Js=r(up,"VisionEncoderDecoderModel"),up.forEach(t),Ks=r(Qt," class, [\u2018VisionEncoderDecoderModel`] provides the "),Dn=s(Qt,"CODE",{});var _p=d(Dn);Qs=r(_p,"from_pretrained(...)"),_p.forEach(t),Xs=r(Qt," method just like any other model architecture in Transformers."),Qt.forEach(t),Pr=p(o),Ve=s(o,"P",{});var sa=d(Ve);ed=r(sa,"To perform inference, one uses the "),Vn=s(sa,"CODE",{});var vp=d(Vn);od=r(vp,"generate"),vp.forEach(t),td=r(sa," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),sa.forEach(t),Ar=p(o),w(mo.$$.fragment,o),Cr=p(o),de=s(o,"H2",{class:!0});var da=d(de);qe=s(da,"A",{id:!0,class:!0,href:!0});var bp=d(qe);qn=s(bp,"SPAN",{});var wp=d(qn);w(ho.$$.fragment,wp),wp.forEach(t),bp.forEach(t),nd=p(da),fo=s(da,"SPAN",{});var ia=d(fo);rd=r(ia,"Loading a PyTorch checkpoint into "),Fn=s(ia,"CODE",{});var Tp=d(Fn);ad=r(Tp,"TFVisionEncoderDecoderModel"),Tp.forEach(t),sd=r(ia,"."),ia.forEach(t),da.forEach(t),Sr=p(o),ie=s(o,"P",{});var br=d(ie);zn=s(br,"CODE",{});var Ep=d(zn);dd=r(Ep,"TFVisionEncoderDecoderModel.from_pretrained()"),Ep.forEach(t),id=r(br,` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Pn=s(br,"CODE",{});var yp=d(Pn);cd=r(yp,"from_pt=True"),yp.forEach(t),ld=r(br,` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),br.forEach(t),Ir=p(o),w(go.$$.fragment,o),Lr=p(o),ce=s(o,"H2",{class:!0});var ca=d(ce);Fe=s(ca,"A",{id:!0,class:!0,href:!0});var kp=d(Fe);An=s(kp,"SPAN",{});var xp=d(An);w(uo.$$.fragment,xp),xp.forEach(t),kp.forEach(t),pd=p(ca),Cn=s(ca,"SPAN",{});var $p=d(Cn);md=r($p,"Training"),$p.forEach(t),ca.forEach(t),Nr=p(o),L=s(o,"P",{});var Je=d(L);hd=r(Je,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Sn=s(Je,"CODE",{});var jp=d(Sn);fd=r(jp,"pixel_values"),jp.forEach(t),gd=r(Je,` (which are the
images) and `),In=s(Je,"CODE",{});var Mp=d(In);ud=r(Mp,"labels"),Mp.forEach(t),_d=r(Je," (which are the "),Ln=s(Je,"CODE",{});var Dp=d(Ln);vd=r(Dp,"input_ids"),Dp.forEach(t),bd=r(Je," of the encoded target sequence)."),Je.forEach(t),Or=p(o),w(_o.$$.fragment,o),Rr=p(o),J=s(o,"P",{});var Xt=d(J);wd=r(Xt,"This model was contributed by "),vo=s(Xt,"A",{href:!0,rel:!0});var Vp=d(vo);Td=r(Vp,"nielsr"),Vp.forEach(t),Ed=r(Xt,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),bo=s(Xt,"A",{href:!0,rel:!0});var qp=d(bo);yd=r(qp,"ydshieh"),qp.forEach(t),kd=r(Xt,"."),Xt.forEach(t),Br=p(o),le=s(o,"H2",{class:!0});var la=d(le);ze=s(la,"A",{id:!0,class:!0,href:!0});var Fp=d(ze);Nn=s(Fp,"SPAN",{});var zp=d(Nn);w(wo.$$.fragment,zp),zp.forEach(t),Fp.forEach(t),xd=p(la),On=s(la,"SPAN",{});var Pp=d(On);$d=r(Pp,"VisionEncoderDecoderConfig"),Pp.forEach(t),la.forEach(t),Gr=p(o),S=s(o,"DIV",{class:!0});var G=d(S);w(To.$$.fragment,G),jd=p(G),Pe=s(G,"P",{});var wr=d(Pe);Dt=s(wr,"A",{href:!0});var Ap=d(Dt);Md=r(Ap,"VisionEncoderDecoderConfig"),Ap.forEach(t),Dd=r(wr,` is the configuration class to store the configuration of a
`),Vt=s(wr,"A",{href:!0});var Cp=d(Vt);Vd=r(Cp,"VisionEncoderDecoderModel"),Cp.forEach(t),qd=r(wr,`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),wr.forEach(t),Fd=p(G),pe=s(G,"P",{});var en=d(pe);zd=r(en,"Configuration objects inherit from "),qt=s(en,"A",{href:!0});var Sp=d(qt);Pd=r(Sp,"PretrainedConfig"),Sp.forEach(t),Ad=r(en,` and can be used to control the model outputs. Read the
documentation from `),Ft=s(en,"A",{href:!0});var Ip=d(Ft);Cd=r(Ip,"PretrainedConfig"),Ip.forEach(t),Sd=r(en," for more information."),en.forEach(t),Id=p(G),w(Ae.$$.fragment,G),Ld=p(G),Ce=s(G,"DIV",{class:!0});var pa=d(Ce);w(Eo.$$.fragment,pa),Nd=p(pa),yo=s(pa,"P",{});var ma=d(yo);Od=r(ma,"Instantiate a "),zt=s(ma,"A",{href:!0});var Lp=d(zt);Rd=r(Lp,"VisionEncoderDecoderConfig"),Lp.forEach(t),Bd=r(ma,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),ma.forEach(t),pa.forEach(t),Gd=p(G),Se=s(G,"DIV",{class:!0});var ha=d(Se);w(ko.$$.fragment,ha),Wd=p(ha),me=s(ha,"P",{});var on=d(me);Hd=r(on,"Serializes this instance to a Python dictionary. Override the default "),Rn=s(on,"EM",{});var Np=d(Rn);Ud=r(Np,"to_dict()"),Np.forEach(t),Zd=r(on," from "),Bn=s(on,"EM",{});var Op=d(Bn);Yd=r(Op,"PretrainedConfig"),Op.forEach(t),Jd=r(on,"."),on.forEach(t),ha.forEach(t),G.forEach(t),Wr=p(o),he=s(o,"H2",{class:!0});var fa=d(he);Ie=s(fa,"A",{id:!0,class:!0,href:!0});var Rp=d(Ie);Gn=s(Rp,"SPAN",{});var Bp=d(Gn);w(xo.$$.fragment,Bp),Bp.forEach(t),Rp.forEach(t),Kd=p(fa),Wn=s(fa,"SPAN",{});var Gp=d(Wn);Qd=r(Gp,"VisionEncoderDecoderModel"),Gp.forEach(t),fa.forEach(t),Hr=p(o),D=s(o,"DIV",{class:!0});var P=d(D);w($o.$$.fragment,P),Xd=p(P),fe=s(P,"P",{});var tn=d(fe);ei=r(tn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Pt=s(tn,"A",{href:!0});var Wp=d(Pt);oi=r(Wp,"from_pretrained()"),Wp.forEach(t),ti=r(tn," function and the decoder is loaded via "),At=s(tn,"A",{href:!0});var Hp=d(At);ni=r(Hp,"from_pretrained()"),Hp.forEach(t),ri=r(tn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),tn.forEach(t),ai=p(P),jo=s(P,"P",{});var ga=d(jo);si=r(ga,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=s(ga,"A",{href:!0,rel:!0});var Up=d(Mo);di=r(Up,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Up.forEach(t),ii=r(ga,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ga.forEach(t),ci=p(P),Do=s(P,"P",{});var ua=d(Do);li=r(ua,"Additionally, in "),Vo=s(ua,"A",{href:!0,rel:!0});var Zp=d(Vo);pi=r(Zp,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Zp.forEach(t),mi=r(ua,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),ua.forEach(t),hi=p(P),Hn=s(P,"P",{});var Yp=d(Hn);fi=r(Yp,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Yp.forEach(t),gi=p(P),qo=s(P,"P",{});var _a=d(qo);ui=r(_a,"This model inherits from "),Ct=s(_a,"A",{href:!0});var Jp=d(Ct);_i=r(Jp,"PreTrainedModel"),Jp.forEach(t),vi=r(_a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_a.forEach(t),bi=p(P),Fo=s(P,"P",{});var va=d(Fo);wi=r(va,"This model is also a PyTorch "),zo=s(va,"A",{href:!0,rel:!0});var Kp=d(zo);Ti=r(Kp,"torch.nn.Module"),Kp.forEach(t),Ei=r(va,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),va.forEach(t),yi=p(P),K=s(P,"P",{});var st=d(K);St=s(st,"A",{href:!0});var Qp=d(St);ki=r(Qp,"VisionEncoderDecoderModel"),Qp.forEach(t),xi=r(st,` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Un=s(st,"EM",{});var Xp=d(Un);$i=r(Xp,"~transformers.AutoModel.from_pretrained"),Xp.forEach(t),ji=r(st,` class method for the encoder and
:meth`),Zn=s(st,"EM",{});var em=d(Zn);Mi=r(em,"~transformers.AutoModelForCausalLM.from_pretrained"),em.forEach(t),Di=r(st," class method for the decoder."),st.forEach(t),Vi=p(P),N=s(P,"DIV",{class:!0});var Ke=d(N);w(Po.$$.fragment,Ke),qi=p(Ke),ge=s(Ke,"P",{});var nn=d(ge);Fi=r(nn,"The "),It=s(nn,"A",{href:!0});var om=d(It);zi=r(om,"VisionEncoderDecoderModel"),om.forEach(t),Pi=r(nn," forward method, overrides the "),Yn=s(nn,"CODE",{});var tm=d(Yn);Ai=r(tm,"__call__"),tm.forEach(t),Ci=r(nn," special method."),nn.forEach(t),Si=p(Ke),w(Le.$$.fragment,Ke),Ii=p(Ke),w(Ne.$$.fragment,Ke),Ke.forEach(t),Li=p(P),O=s(P,"DIV",{class:!0});var Qe=d(O);w(Ao.$$.fragment,Qe),Ni=p(Qe),Jn=s(Qe,"P",{});var nm=d(Jn);Oi=r(nm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),nm.forEach(t),Ri=p(Qe),ue=s(Qe,"P",{});var rn=d(ue);Bi=r(rn,"The model is set in evaluation mode by default using "),Kn=s(rn,"CODE",{});var rm=d(Kn);Gi=r(rm,"model.eval()"),rm.forEach(t),Wi=r(rn,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Qn=s(rn,"CODE",{});var am=d(Qn);Hi=r(am,"model.train()"),am.forEach(t),Ui=r(rn,"."),rn.forEach(t),Zi=p(Qe),w(Oe.$$.fragment,Qe),Qe.forEach(t),P.forEach(t),Ur=p(o),_e=s(o,"H2",{class:!0});var ba=d(_e);Re=s(ba,"A",{id:!0,class:!0,href:!0});var sm=d(Re);Xn=s(sm,"SPAN",{});var dm=d(Xn);w(Co.$$.fragment,dm),dm.forEach(t),sm.forEach(t),Yi=p(ba),er=s(ba,"SPAN",{});var im=d(er);Ji=r(im,"TFVisionEncoderDecoderModel"),im.forEach(t),ba.forEach(t),Zr=p(o),V=s(o,"DIV",{class:!0});var A=d(V);w(So.$$.fragment,A),Ki=p(A),ve=s(A,"P",{});var an=d(ve);Qi=r(an,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Lt=s(an,"A",{href:!0});var cm=d(Lt);Xi=r(cm,"from_pretrained()"),cm.forEach(t),ec=r(an," function and the decoder is loaded via "),Nt=s(an,"A",{href:!0});var lm=d(Nt);oc=r(lm,"from_pretrained()"),lm.forEach(t),tc=r(an,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),an.forEach(t),nc=p(A),Io=s(A,"P",{});var wa=d(Io);rc=r(wa,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Lo=s(wa,"A",{href:!0,rel:!0});var pm=d(Lo);ac=r(pm,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),pm.forEach(t),sc=r(wa,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wa.forEach(t),dc=p(A),No=s(A,"P",{});var Ta=d(No);ic=r(Ta,"Additionally, in "),Oo=s(Ta,"A",{href:!0,rel:!0});var mm=d(Oo);cc=r(mm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),mm.forEach(t),lc=r(Ta,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Ta.forEach(t),pc=p(A),or=s(A,"P",{});var hm=d(or);mc=r(hm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),hm.forEach(t),hc=p(A),Ro=s(A,"P",{});var Ea=d(Ro);fc=r(Ea,"This model inherits from "),Ot=s(Ea,"A",{href:!0});var fm=d(Ot);gc=r(fm,"TFPreTrainedModel"),fm.forEach(t),uc=r(Ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ea.forEach(t),_c=p(A),Bo=s(A,"P",{});var ya=d(Bo);vc=r(ya,"This model is also a "),Go=s(ya,"A",{href:!0,rel:!0});var gm=d(Go);bc=r(gm,"tf.keras.Model"),gm.forEach(t),wc=r(ya,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ya.forEach(t),Tc=p(A),Q=s(A,"P",{});var dt=d(Q);Rt=s(dt,"A",{href:!0});var um=d(Rt);Ec=r(um,"TFVisionEncoderDecoderModel"),um.forEach(t),yc=r(dt,` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Bt=s(dt,"A",{href:!0});var _m=d(Bt);kc=r(_m,"from_pretrained()"),_m.forEach(t),xc=r(dt,` class method for the encoder and
`),Gt=s(dt,"A",{href:!0});var vm=d(Gt);$c=r(vm,"from_pretrained()"),vm.forEach(t),jc=r(dt," class method for the decoder."),dt.forEach(t),Mc=p(A),R=s(A,"DIV",{class:!0});var Xe=d(R);w(Wo.$$.fragment,Xe),Dc=p(Xe),be=s(Xe,"P",{});var sn=d(be);Vc=r(sn,"The "),Wt=s(sn,"A",{href:!0});var bm=d(Wt);qc=r(bm,"TFVisionEncoderDecoderModel"),bm.forEach(t),Fc=r(sn," forward method, overrides the "),tr=s(sn,"CODE",{});var wm=d(tr);zc=r(wm,"__call__"),wm.forEach(t),Pc=r(sn," special method."),sn.forEach(t),Ac=p(Xe),w(Be.$$.fragment,Xe),Cc=p(Xe),w(Ge.$$.fragment,Xe),Xe.forEach(t),Sc=p(A),X=s(A,"DIV",{class:!0});var dn=d(X);w(Ho.$$.fragment,dn),Ic=p(dn),nr=s(dn,"P",{});var Tm=d(nr);Lc=r(Tm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Tm.forEach(t),Nc=p(dn),w(We.$$.fragment,dn),dn.forEach(t),A.forEach(t),Yr=p(o),we=s(o,"H2",{class:!0});var ka=d(we);He=s(ka,"A",{id:!0,class:!0,href:!0});var Em=d(He);rr=s(Em,"SPAN",{});var ym=d(rr);w(Uo.$$.fragment,ym),ym.forEach(t),Em.forEach(t),Oc=p(ka),ar=s(ka,"SPAN",{});var km=d(ar);Rc=r(km,"FlaxVisionEncoderDecoderModel"),km.forEach(t),ka.forEach(t),Jr=p(o),q=s(o,"DIV",{class:!0});var C=d(q);w(Zo.$$.fragment,C),Bc=p(C),Te=s(C,"P",{});var cn=d(Te);Gc=r(cn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Ht=s(cn,"A",{href:!0});var xm=d(Ht);Wc=r(xm,"from_pretrained()"),xm.forEach(t),Hc=r(cn," function and the decoder is loaded via "),Ut=s(cn,"A",{href:!0});var $m=d(Ut);Uc=r($m,"from_pretrained()"),$m.forEach(t),Zc=r(cn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),cn.forEach(t),Yc=p(C),Yo=s(C,"P",{});var xa=d(Yo);Jc=r(xa,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Jo=s(xa,"A",{href:!0,rel:!0});var jm=d(Jo);Kc=r(jm,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),jm.forEach(t),Qc=r(xa,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),xa.forEach(t),Xc=p(C),Ko=s(C,"P",{});var $a=d(Ko);el=r($a,"Additionally, in "),Qo=s($a,"A",{href:!0,rel:!0});var Mm=d(Qo);ol=r(Mm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Mm.forEach(t),tl=r($a,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),$a.forEach(t),nl=p(C),sr=s(C,"P",{});var Dm=d(sr);rl=r(Dm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Dm.forEach(t),al=p(C),Xo=s(C,"P",{});var ja=d(Xo);sl=r(ja,"This model inherits from "),Zt=s(ja,"A",{href:!0});var Vm=d(Zt);dl=r(Vm,"FlaxPreTrainedModel"),Vm.forEach(t),il=r(ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja.forEach(t),cl=p(C),et=s(C,"P",{});var Ma=d(et);ll=r(Ma,`This model is also a Flax Linen
`),ot=s(Ma,"A",{href:!0,rel:!0});var qm=d(ot);pl=r(qm,"flax.nn.Module"),qm.forEach(t),ml=r(Ma,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ma.forEach(t),hl=p(C),ee=s(C,"P",{});var it=d(ee);Yt=s(it,"A",{href:!0});var Fm=d(Yt);fl=r(Fm,"FlaxVisionEncoderDecoderModel"),Fm.forEach(t),gl=r(it,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),dr=s(it,"EM",{});var zm=d(dr);ul=r(zm,"~transformers.FlaxAutoModel.from_pretrained"),zm.forEach(t),_l=r(it,` class method
for the encoder and :meth`),ir=s(it,"EM",{});var Pm=d(ir);vl=r(Pm,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Pm.forEach(t),bl=r(it," class method for the decoder."),it.forEach(t),wl=p(C),B=s(C,"DIV",{class:!0});var eo=d(B);w(tt.$$.fragment,eo),Tl=p(eo),Ee=s(eo,"P",{});var ln=d(Ee);El=r(ln,"The "),Jt=s(ln,"A",{href:!0});var Am=d(Jt);yl=r(Am,"FlaxVisionEncoderDecoderModel"),Am.forEach(t),kl=r(ln," forward method, overrides the "),cr=s(ln,"CODE",{});var Cm=d(cr);xl=r(Cm,"__call__"),Cm.forEach(t),$l=r(ln," special method."),ln.forEach(t),jl=p(eo),w(Ue.$$.fragment,eo),Ml=p(eo),w(Ze.$$.fragment,eo),eo.forEach(t),Dl=p(C),oe=s(C,"DIV",{class:!0});var pn=d(oe);w(nt.$$.fragment,pn),Vl=p(pn),lr=s(pn,"P",{});var Sm=d(lr);ql=r(Sm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Sm.forEach(t),Fl=p(pn),w(Ye.$$.fragment,pn),pn.forEach(t),C.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(eh)),c(f,"id","vision-encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#vision-encoder-decoder-models"),c(_,"class","relative group"),c(ye,"id","overview"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#overview"),c(te,"class","relative group"),c(pt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(mt,"href","vit"),c(ht,"href","beit"),c(ft,"href","deit"),c(gt,"href","swin"),c(ut,"href","roberta"),c(_t,"href","gpt2"),c(vt,"href","bert"),c(bt,"href","distilbert"),c(to,"href","https://arxiv.org/abs/2109.10282"),c(to,"rel","nofollow"),c(wt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Tt,"href","trocr"),c(Et,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c($e,"id","randomly-initializing-visionencoderdecodermodel-from-model-configurations"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#randomly-initializing-visionencoderdecodermodel-from-model-configurations"),c(ne,"class","relative group"),c(yt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(kt,"href","/docs/transformers/pr_18271/en/model_doc/vit#transformers.ViTModel"),c(je,"id","initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(ae,"class","relative group"),c(xt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c($t,"href","swin"),c(jt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Me,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(Me,"rel","nofollow"),c(Mt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained"),c(De,"id","loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),c(se,"class","relative group"),c(qe,"id","loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),c(de,"class","relative group"),c(Fe,"id","training"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#training"),c(ce,"class","relative group"),c(vo,"href","https://github.com/nielsrogge"),c(vo,"rel","nofollow"),c(bo,"href","https://github.com/ydshieh"),c(bo,"rel","nofollow"),c(ze,"id","transformers.VisionEncoderDecoderConfig"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.VisionEncoderDecoderConfig"),c(le,"class","relative group"),c(Dt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(Vt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(qt,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ft,"href","/docs/transformers/pr_18271/en/main_classes/configuration#transformers.PretrainedConfig"),c(zt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.VisionEncoderDecoderModel"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.VisionEncoderDecoderModel"),c(he,"class","relative group"),c(Pt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(At,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Mo,"href","https://arxiv.org/abs/1907.12461"),c(Mo,"rel","nofollow"),c(Vo,"href","https://arxiv.org/abs/2109.10282"),c(Vo,"rel","nofollow"),c(Ct,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.PreTrainedModel"),c(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zo,"rel","nofollow"),c(St,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(It,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Re,"id","transformers.TFVisionEncoderDecoderModel"),c(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Re,"href","#transformers.TFVisionEncoderDecoderModel"),c(_e,"class","relative group"),c(Lt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Nt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Lo,"href","https://arxiv.org/abs/1907.12461"),c(Lo,"rel","nofollow"),c(Oo,"href","https://arxiv.org/abs/2109.10282"),c(Oo,"rel","nofollow"),c(Ot,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.TFPreTrainedModel"),c(Go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Go,"rel","nofollow"),c(Rt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(Bt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Gt,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Wt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.FlaxVisionEncoderDecoderModel"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.FlaxVisionEncoderDecoderModel"),c(we,"class","relative group"),c(Ht,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ut,"href","/docs/transformers/pr_18271/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Jo,"href","https://arxiv.org/abs/1907.12461"),c(Jo,"rel","nofollow"),c(Qo,"href","https://arxiv.org/abs/2109.10282"),c(Qo,"rel","nofollow"),c(Zt,"href","/docs/transformers/pr_18271/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ot,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ot,"rel","nofollow"),c(Yt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(Jt,"href","/docs/transformers/pr_18271/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),g(o,x,m),g(o,_,m),e(_,f),e(f,v),T(i,v,null),e(_,u),e(_,I),e(I,Da),g(o,Tr,m),g(o,te,m),e(te,ye),e(ye,mn),T(oo,mn,null),e(te,Va),e(te,hn),e(hn,qa),g(o,Er,m),g(o,$,m),e($,Fa),e($,pt),e(pt,za),e($,Pa),e($,fn),e(fn,Aa),e($,Ca),e($,mt),e(mt,Sa),e($,Ia),e($,ht),e(ht,La),e($,Na),e($,ft),e(ft,Oa),e($,Ra),e($,gt),e(gt,Ba),e($,Ga),e($,gn),e(gn,Wa),e($,Ha),e($,ut),e(ut,Ua),e($,Za),e($,_t),e(_t,Ya),e($,Ja),e($,vt),e(vt,Ka),e($,Qa),e($,bt),e(bt,Xa),e($,es),g(o,yr,m),g(o,ke,m),e(ke,os),e(ke,to),e(to,ts),e(ke,ns),g(o,kr,m),g(o,xe,m),e(xe,rs),e(xe,wt),e(wt,as),e(xe,ss),g(o,xr,m),g(o,Z,m),e(Z,ds),e(Z,Tt),e(Tt,is),e(Z,cs),e(Z,Et),e(Et,ls),e(Z,ps),g(o,$r,m),g(o,ne,m),e(ne,$e),e($e,un),T(no,un,null),e(ne,ms),e(ne,ro),e(ro,hs),e(ro,_n),e(_n,fs),e(ro,gs),g(o,jr,m),g(o,re,m),e(re,yt),e(yt,us),e(re,_s),e(re,kt),e(kt,vs),e(re,bs),g(o,Mr,m),T(ao,o,m),g(o,Dr,m),g(o,ae,m),e(ae,je),e(je,vn),T(so,vn,null),e(ae,ws),e(ae,io),e(io,Ts),e(io,bn),e(bn,Es),e(io,ys),g(o,Vr,m),g(o,M,m),e(M,xt),e(xt,ks),e(M,xs),e(M,wn),e(wn,$s),e(M,js),e(M,$t),e($t,Ms),e(M,Ds),e(M,Tn),e(Tn,Vs),e(M,qs),e(M,En),e(En,Fs),e(M,zs),e(M,yn),e(yn,Ps),e(M,As),e(M,jt),e(jt,Cs),e(M,Ss),e(M,Me),e(Me,Is),e(Me,kn),e(kn,Ls),e(M,Ns),e(M,xn),e(xn,Os),e(M,Rs),e(M,Mt),e(Mt,Bs),e(M,Gs),g(o,qr,m),T(co,o,m),g(o,Fr,m),g(o,se,m),e(se,De),e(De,$n),T(lo,$n,null),e(se,Ws),e(se,po),e(po,Hs),e(po,jn),e(jn,Us),e(po,Zs),g(o,zr,m),g(o,Y,m),e(Y,Ys),e(Y,Mn),e(Mn,Js),e(Y,Ks),e(Y,Dn),e(Dn,Qs),e(Y,Xs),g(o,Pr,m),g(o,Ve,m),e(Ve,ed),e(Ve,Vn),e(Vn,od),e(Ve,td),g(o,Ar,m),T(mo,o,m),g(o,Cr,m),g(o,de,m),e(de,qe),e(qe,qn),T(ho,qn,null),e(de,nd),e(de,fo),e(fo,rd),e(fo,Fn),e(Fn,ad),e(fo,sd),g(o,Sr,m),g(o,ie,m),e(ie,zn),e(zn,dd),e(ie,id),e(ie,Pn),e(Pn,cd),e(ie,ld),g(o,Ir,m),T(go,o,m),g(o,Lr,m),g(o,ce,m),e(ce,Fe),e(Fe,An),T(uo,An,null),e(ce,pd),e(ce,Cn),e(Cn,md),g(o,Nr,m),g(o,L,m),e(L,hd),e(L,Sn),e(Sn,fd),e(L,gd),e(L,In),e(In,ud),e(L,_d),e(L,Ln),e(Ln,vd),e(L,bd),g(o,Or,m),T(_o,o,m),g(o,Rr,m),g(o,J,m),e(J,wd),e(J,vo),e(vo,Td),e(J,Ed),e(J,bo),e(bo,yd),e(J,kd),g(o,Br,m),g(o,le,m),e(le,ze),e(ze,Nn),T(wo,Nn,null),e(le,xd),e(le,On),e(On,$d),g(o,Gr,m),g(o,S,m),T(To,S,null),e(S,jd),e(S,Pe),e(Pe,Dt),e(Dt,Md),e(Pe,Dd),e(Pe,Vt),e(Vt,Vd),e(Pe,qd),e(S,Fd),e(S,pe),e(pe,zd),e(pe,qt),e(qt,Pd),e(pe,Ad),e(pe,Ft),e(Ft,Cd),e(pe,Sd),e(S,Id),T(Ae,S,null),e(S,Ld),e(S,Ce),T(Eo,Ce,null),e(Ce,Nd),e(Ce,yo),e(yo,Od),e(yo,zt),e(zt,Rd),e(yo,Bd),e(S,Gd),e(S,Se),T(ko,Se,null),e(Se,Wd),e(Se,me),e(me,Hd),e(me,Rn),e(Rn,Ud),e(me,Zd),e(me,Bn),e(Bn,Yd),e(me,Jd),g(o,Wr,m),g(o,he,m),e(he,Ie),e(Ie,Gn),T(xo,Gn,null),e(he,Kd),e(he,Wn),e(Wn,Qd),g(o,Hr,m),g(o,D,m),T($o,D,null),e(D,Xd),e(D,fe),e(fe,ei),e(fe,Pt),e(Pt,oi),e(fe,ti),e(fe,At),e(At,ni),e(fe,ri),e(D,ai),e(D,jo),e(jo,si),e(jo,Mo),e(Mo,di),e(jo,ii),e(D,ci),e(D,Do),e(Do,li),e(Do,Vo),e(Vo,pi),e(Do,mi),e(D,hi),e(D,Hn),e(Hn,fi),e(D,gi),e(D,qo),e(qo,ui),e(qo,Ct),e(Ct,_i),e(qo,vi),e(D,bi),e(D,Fo),e(Fo,wi),e(Fo,zo),e(zo,Ti),e(Fo,Ei),e(D,yi),e(D,K),e(K,St),e(St,ki),e(K,xi),e(K,Un),e(Un,$i),e(K,ji),e(K,Zn),e(Zn,Mi),e(K,Di),e(D,Vi),e(D,N),T(Po,N,null),e(N,qi),e(N,ge),e(ge,Fi),e(ge,It),e(It,zi),e(ge,Pi),e(ge,Yn),e(Yn,Ai),e(ge,Ci),e(N,Si),T(Le,N,null),e(N,Ii),T(Ne,N,null),e(D,Li),e(D,O),T(Ao,O,null),e(O,Ni),e(O,Jn),e(Jn,Oi),e(O,Ri),e(O,ue),e(ue,Bi),e(ue,Kn),e(Kn,Gi),e(ue,Wi),e(ue,Qn),e(Qn,Hi),e(ue,Ui),e(O,Zi),T(Oe,O,null),g(o,Ur,m),g(o,_e,m),e(_e,Re),e(Re,Xn),T(Co,Xn,null),e(_e,Yi),e(_e,er),e(er,Ji),g(o,Zr,m),g(o,V,m),T(So,V,null),e(V,Ki),e(V,ve),e(ve,Qi),e(ve,Lt),e(Lt,Xi),e(ve,ec),e(ve,Nt),e(Nt,oc),e(ve,tc),e(V,nc),e(V,Io),e(Io,rc),e(Io,Lo),e(Lo,ac),e(Io,sc),e(V,dc),e(V,No),e(No,ic),e(No,Oo),e(Oo,cc),e(No,lc),e(V,pc),e(V,or),e(or,mc),e(V,hc),e(V,Ro),e(Ro,fc),e(Ro,Ot),e(Ot,gc),e(Ro,uc),e(V,_c),e(V,Bo),e(Bo,vc),e(Bo,Go),e(Go,bc),e(Bo,wc),e(V,Tc),e(V,Q),e(Q,Rt),e(Rt,Ec),e(Q,yc),e(Q,Bt),e(Bt,kc),e(Q,xc),e(Q,Gt),e(Gt,$c),e(Q,jc),e(V,Mc),e(V,R),T(Wo,R,null),e(R,Dc),e(R,be),e(be,Vc),e(be,Wt),e(Wt,qc),e(be,Fc),e(be,tr),e(tr,zc),e(be,Pc),e(R,Ac),T(Be,R,null),e(R,Cc),T(Ge,R,null),e(V,Sc),e(V,X),T(Ho,X,null),e(X,Ic),e(X,nr),e(nr,Lc),e(X,Nc),T(We,X,null),g(o,Yr,m),g(o,we,m),e(we,He),e(He,rr),T(Uo,rr,null),e(we,Oc),e(we,ar),e(ar,Rc),g(o,Jr,m),g(o,q,m),T(Zo,q,null),e(q,Bc),e(q,Te),e(Te,Gc),e(Te,Ht),e(Ht,Wc),e(Te,Hc),e(Te,Ut),e(Ut,Uc),e(Te,Zc),e(q,Yc),e(q,Yo),e(Yo,Jc),e(Yo,Jo),e(Jo,Kc),e(Yo,Qc),e(q,Xc),e(q,Ko),e(Ko,el),e(Ko,Qo),e(Qo,ol),e(Ko,tl),e(q,nl),e(q,sr),e(sr,rl),e(q,al),e(q,Xo),e(Xo,sl),e(Xo,Zt),e(Zt,dl),e(Xo,il),e(q,cl),e(q,et),e(et,ll),e(et,ot),e(ot,pl),e(et,ml),e(q,hl),e(q,ee),e(ee,Yt),e(Yt,fl),e(ee,gl),e(ee,dr),e(dr,ul),e(ee,_l),e(ee,ir),e(ir,vl),e(ee,bl),e(q,wl),e(q,B),T(tt,B,null),e(B,Tl),e(B,Ee),e(Ee,El),e(Ee,Jt),e(Jt,yl),e(Ee,kl),e(Ee,cr),e(cr,xl),e(Ee,$l),e(B,jl),T(Ue,B,null),e(B,Ml),T(Ze,B,null),e(q,Dl),e(q,oe),T(nt,oe,null),e(oe,Vl),e(oe,lr),e(lr,ql),e(oe,Fl),T(Ye,oe,null),Kr=!0},p(o,[m]){const rt={};m&2&&(rt.$$scope={dirty:m,ctx:o}),Ae.$set(rt);const pr={};m&2&&(pr.$$scope={dirty:m,ctx:o}),Le.$set(pr);const mr={};m&2&&(mr.$$scope={dirty:m,ctx:o}),Ne.$set(mr);const hr={};m&2&&(hr.$$scope={dirty:m,ctx:o}),Oe.$set(hr);const at={};m&2&&(at.$$scope={dirty:m,ctx:o}),Be.$set(at);const fr={};m&2&&(fr.$$scope={dirty:m,ctx:o}),Ge.$set(fr);const gr={};m&2&&(gr.$$scope={dirty:m,ctx:o}),We.$set(gr);const ur={};m&2&&(ur.$$scope={dirty:m,ctx:o}),Ue.$set(ur);const j={};m&2&&(j.$$scope={dirty:m,ctx:o}),Ze.$set(j);const _r={};m&2&&(_r.$$scope={dirty:m,ctx:o}),Ye.$set(_r)},i(o){Kr||(E(i.$$.fragment,o),E(oo.$$.fragment,o),E(no.$$.fragment,o),E(ao.$$.fragment,o),E(so.$$.fragment,o),E(co.$$.fragment,o),E(lo.$$.fragment,o),E(mo.$$.fragment,o),E(ho.$$.fragment,o),E(go.$$.fragment,o),E(uo.$$.fragment,o),E(_o.$$.fragment,o),E(wo.$$.fragment,o),E(To.$$.fragment,o),E(Ae.$$.fragment,o),E(Eo.$$.fragment,o),E(ko.$$.fragment,o),E(xo.$$.fragment,o),E($o.$$.fragment,o),E(Po.$$.fragment,o),E(Le.$$.fragment,o),E(Ne.$$.fragment,o),E(Ao.$$.fragment,o),E(Oe.$$.fragment,o),E(Co.$$.fragment,o),E(So.$$.fragment,o),E(Wo.$$.fragment,o),E(Be.$$.fragment,o),E(Ge.$$.fragment,o),E(Ho.$$.fragment,o),E(We.$$.fragment,o),E(Uo.$$.fragment,o),E(Zo.$$.fragment,o),E(tt.$$.fragment,o),E(Ue.$$.fragment,o),E(Ze.$$.fragment,o),E(nt.$$.fragment,o),E(Ye.$$.fragment,o),Kr=!0)},o(o){y(i.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(ao.$$.fragment,o),y(so.$$.fragment,o),y(co.$$.fragment,o),y(lo.$$.fragment,o),y(mo.$$.fragment,o),y(ho.$$.fragment,o),y(go.$$.fragment,o),y(uo.$$.fragment,o),y(_o.$$.fragment,o),y(wo.$$.fragment,o),y(To.$$.fragment,o),y(Ae.$$.fragment,o),y(Eo.$$.fragment,o),y(ko.$$.fragment,o),y(xo.$$.fragment,o),y($o.$$.fragment,o),y(Po.$$.fragment,o),y(Le.$$.fragment,o),y(Ne.$$.fragment,o),y(Ao.$$.fragment,o),y(Oe.$$.fragment,o),y(Co.$$.fragment,o),y(So.$$.fragment,o),y(Wo.$$.fragment,o),y(Be.$$.fragment,o),y(Ge.$$.fragment,o),y(Ho.$$.fragment,o),y(We.$$.fragment,o),y(Uo.$$.fragment,o),y(Zo.$$.fragment,o),y(tt.$$.fragment,o),y(Ue.$$.fragment,o),y(Ze.$$.fragment,o),y(nt.$$.fragment,o),y(Ye.$$.fragment,o),Kr=!1},d(o){t(h),o&&t(x),o&&t(_),k(i),o&&t(Tr),o&&t(te),k(oo),o&&t(Er),o&&t($),o&&t(yr),o&&t(ke),o&&t(kr),o&&t(xe),o&&t(xr),o&&t(Z),o&&t($r),o&&t(ne),k(no),o&&t(jr),o&&t(re),o&&t(Mr),k(ao,o),o&&t(Dr),o&&t(ae),k(so),o&&t(Vr),o&&t(M),o&&t(qr),k(co,o),o&&t(Fr),o&&t(se),k(lo),o&&t(zr),o&&t(Y),o&&t(Pr),o&&t(Ve),o&&t(Ar),k(mo,o),o&&t(Cr),o&&t(de),k(ho),o&&t(Sr),o&&t(ie),o&&t(Ir),k(go,o),o&&t(Lr),o&&t(ce),k(uo),o&&t(Nr),o&&t(L),o&&t(Or),k(_o,o),o&&t(Rr),o&&t(J),o&&t(Br),o&&t(le),k(wo),o&&t(Gr),o&&t(S),k(To),k(Ae),k(Eo),k(ko),o&&t(Wr),o&&t(he),k(xo),o&&t(Hr),o&&t(D),k($o),k(Po),k(Le),k(Ne),k(Ao),k(Oe),o&&t(Ur),o&&t(_e),k(Co),o&&t(Zr),o&&t(V),k(So),k(Wo),k(Be),k(Ge),k(Ho),k(We),o&&t(Yr),o&&t(we),k(Uo),o&&t(Jr),o&&t(q),k(Zo),k(tt),k(Ue),k(Ze),k(nt),k(Ye)}}}const eh={local:"vision-encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-visionencoderdecodermodel-from-model-configurations",title:"Randomly initializing `VisionEncoderDecoderModel` from model configurations."},{local:"initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `VisionEncoderDecoderModel['`` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `VisionEncoderDecoderModel` checkpoint and perform inference."},{local:"loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFVisionEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.VisionEncoderDecoderConfig",title:"VisionEncoderDecoderConfig"},{local:"transformers.VisionEncoderDecoderModel",title:"VisionEncoderDecoderModel"},{local:"transformers.TFVisionEncoderDecoderModel",title:"TFVisionEncoderDecoderModel"},{local:"transformers.FlaxVisionEncoderDecoderModel",title:"FlaxVisionEncoderDecoderModel"}],title:"Vision Encoder Decoder Models"};function oh(F){return Rm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ih extends Im{constructor(h){super();Lm(this,h,oh,Xm,Nm,{})}}export{ih as default,eh as metadata};
