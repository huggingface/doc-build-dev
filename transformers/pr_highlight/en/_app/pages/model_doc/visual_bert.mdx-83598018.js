import{S as md,i as gd,s as fd,e as s,k as u,w as k,t as i,M as _d,c as n,d as o,m as p,a,x as T,h as l,b as c,F as e,g as _,y as w,q as y,o as $,B as V,v as vd,L as Jt}from"../../chunks/vendor-6b77c823.js";import{T as Eo}from"../../chunks/Tip-39098574.js";import{D as j}from"../../chunks/Docstring-1088f2fb.js";import{C as Ke}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as J}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Kt}from"../../chunks/ExampleCodeBlock-5212b321.js";function bd(B){let d,b,f,m,v;return m=new Ke({props:{code:`from transformers import VisualBertModel, VisualBertConfig

# Initializing a VisualBERT visualbert-vqa-coco-pre style configuration
configuration = VisualBertConfig.from_pretrained("visualbert-vqa-coco-pre")

# Initializing a model from the visualbert-vqa-coco-pre style configuration
model = VisualBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisualBertModel, VisualBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a VisualBERT visualbert-vqa-coco-pre style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VisualBertConfig.from_pretrained(<span class="hljs-string">&quot;visualbert-vqa-coco-pre&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the visualbert-vqa-coco-pre style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisualBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),f=u(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Example:"),h.forEach(o),f=p(r),T(m.$$.fragment,r)},m(r,h){_(r,d,h),e(d,b),_(r,f,h),w(m,r,h),v=!0},p:Jt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(f),V(m,r)}}}function kd(B){let d,b,f,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(h,"CODE",{});var z=a(f);m=l(z,"Module"),z.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(r,h){_(r,d,h),e(d,b),e(d,f),e(f,m),e(d,v)},d(r){r&&o(d)}}}function Td(B){let d,b,f,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image.
from transformers import BertTokenizer, VisualBertModel
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertModel.from_pretrained("uclanlp/visualbert-vqa-coco-pre")

inputs = tokenizer("The capital of France is Paris.", return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertModel
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),b=i("Example:"),f=u(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Example:"),h.forEach(o),f=p(r),T(m.$$.fragment,r)},m(r,h){_(r,d,h),e(d,b),_(r,f,h),w(m,r,h),v=!0},p:Jt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(f),V(m,r)}}}function wd(B){let d,b,f,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(h,"CODE",{});var z=a(f);m=l(z,"Module"),z.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(r,h){_(r,d,h),e(d,b),e(d,f),e(f,m),e(d,v)},d(r){r&&o(d)}}}function yd(B){let d,b,f,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForPreTraining.from_pretrained("uclanlp/visualbert-vqa-coco-pre")

inputs = tokenizer("The capital of France is {mask}.", return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)
max_length = inputs["input_ids"].shape[-1] + visual_embeds.shape[-2]
labels = tokenizer(
    "The capital of France is Paris.", return_tensors="pt", padding="max_length", max_length=max_length
)["input_ids"]
sentence_image_labels = torch.tensor(1).unsqueeze(0)  # Batch_size


outputs = model(**inputs, labels=labels, sentence_image_labels=sentence_image_labels)
loss = outputs.loss
prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForPreTraining

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is {mask}.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)
max_length = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>]
labels = tokenizer(
    <span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=max_length
)[<span class="hljs-string">&quot;input_ids&quot;</span>]
sentence_image_labels = torch.tensor(<span class="hljs-number">1</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch_size</span>


outputs = model(**inputs, labels=labels, sentence_image_labels=sentence_image_labels)
loss = outputs.loss
prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),b=i("Example:"),f=u(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Example:"),h.forEach(o),f=p(r),T(m.$$.fragment,r)},m(r,h){_(r,d,h),e(d,b),_(r,f,h),w(m,r,h),v=!0},p:Jt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(f),V(m,r)}}}function $d(B){let d,b,f,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(h,"CODE",{});var z=a(f);m=l(z,"Module"),z.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(r,h){_(r,d,h),e(d,b),e(d,f),e(f,m),e(d,v)},d(r){r&&o(d)}}}function Vd(B){let d,b,f,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForQuestionAnswering.from_pretrained("uclanlp/visualbert-vqa")

text = "Who is eating the apple?"
inputs = tokenizer(text, return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

labels = torch.tensor([[0.0, 1.0]]).unsqueeze(0)  # Batch size 1, Num labels 2

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForQuestionAnswering
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.tensor([[<span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>]]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, Num labels 2</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),f=u(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Example:"),h.forEach(o),f=p(r),T(m.$$.fragment,r)},m(r,h){_(r,d,h),e(d,b),_(r,f,h),w(m,r,h),v=!0},p:Jt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(f),V(m,r)}}}function Bd(B){let d,b,f,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(h,"CODE",{});var z=a(f);m=l(z,"Module"),z.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(r,h){_(r,d,h),e(d,b),e(d,f),e(f,m),e(d,v)},d(r){r&&o(d)}}}function zd(B){let d,b,f,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForMultipleChoice.from_pretrained("uclanlp/visualbert-vcr")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

visual_embeds = get_visual_embeddings(image)
# (batch_size, num_choices, visual_seq_length, visual_embedding_dim)
visual_embeds = visual_embeds.expand(1, 2, *visual_embeds.shape)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, prompt], [choice0, choice1]], return_tensors="pt", padding=True)
# batch size is 1
inputs_dict = {k: v.unsqueeze(0) for k, v in encoding.items()}
inputs_dict.update(
    {
        "visual_embeds": visual_embeds,
        "visual_attention_mask": visual_attention_mask,
        "visual_token_type_ids": visual_token_type_ids,
        "labels": labels,
    }
)
outputs = model(**inputs_dict)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForMultipleChoice
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vcr&quot;</span>)

prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

visual_embeds = get_visual_embeddings(image)
<span class="hljs-comment"># (batch_size, num_choices, visual_seq_length, visual_embedding_dim)</span>
visual_embeds = visual_embeds.expand(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, *visual_embeds.shape)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

encoding = tokenizer([[prompt, prompt], [choice0, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># batch size is 1</span>
inputs_dict = {k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
inputs_dict.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;labels&quot;</span>: labels,
    }
)
outputs = model(**inputs_dict)

loss = outputs.loss
logits = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),f=u(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Example:"),h.forEach(o),f=p(r),T(m.$$.fragment,r)},m(r,h){_(r,d,h),e(d,b),_(r,f,h),w(m,r,h),v=!0},p:Jt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(f),V(m,r)}}}function qd(B){let d,b,f,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(h,"CODE",{});var z=a(f);m=l(z,"Module"),z.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(r,h){_(r,d,h),e(d,b),e(d,f),e(f,m),e(d,v)},d(r){r&&o(d)}}}function xd(B){let d,b,f,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForVisualReasoning
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForVisualReasoning.from_pretrained("uclanlp/visualbert-nlvr2")

text = "Who is eating the apple?"
inputs = tokenizer(text, return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

labels = torch.tensor(1).unsqueeze(0)  # Batch size 1, Num choices 2

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForVisualReasoning
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForVisualReasoning.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-nlvr2&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.tensor(<span class="hljs-number">1</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, Num choices 2</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),f=u(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Example:"),h.forEach(o),f=p(r),T(m.$$.fragment,r)},m(r,h){_(r,d,h),e(d,b),_(r,f,h),w(m,r,h),v=!0},p:Jt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(f),V(m,r)}}}function Fd(B){let d,b,f,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(h,"CODE",{});var z=a(f);m=l(z,"Module"),z.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(r,h){_(r,d,h),e(d,b),e(d,f),e(f,m),e(d,v)},d(r){r&&o(d)}}}function Pd(B){let d,b,f,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForRegionToPhraseAlignment
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForRegionToPhraseAlignment.from_pretrained("uclanlp/visualbert-vqa-coco-pre")

text = "Who is eating the apple?"
inputs = tokenizer(text, return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)
region_to_phrase_position = torch.ones((1, inputs["input_ids"].shape[-1] + visual_embeds.shape[-2]))

inputs.update(
    {
        "region_to_phrase_position": region_to_phrase_position,
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

labels = torch.ones(
    (1, inputs["input_ids"].shape[-1] + visual_embeds.shape[-2], visual_embeds.shape[-2])
)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForRegionToPhraseAlignment
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForRegionToPhraseAlignment.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)
region_to_phrase_position = torch.ones((<span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>]))

inputs.update(
    {
        <span class="hljs-string">&quot;region_to_phrase_position&quot;</span>: region_to_phrase_position,
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.ones(
    (<span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>], visual_embeds.shape[-<span class="hljs-number">2</span>])
)  <span class="hljs-comment"># Batch size 1</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),f=u(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var h=a(d);b=l(h,"Example:"),h.forEach(o),f=p(r),T(m.$$.fragment,r)},m(r,h){_(r,d,h),e(d,b),_(r,f,h),w(m,r,h),v=!0},p:Jt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(f),V(m,r)}}}function Ed(B){let d,b,f,m,v,r,h,z,zn,Vs,G,me,Mo,Je,qn,Ao,xn,Bs,ge,Fn,Ge,Pn,En,zs,Gt,Mn,qs,Yt,jo,An,xs,Xt,jn,Fs,fe,Co,Ye,Cn,Zt,Rn,Nn,In,Ro,No,Dn,Ps,Y,_e,Io,Xe,Ln,Do,Sn,Es,eo,Wn,Ms,to,On,As,ve,Qn,oo,Hn,Un,js,be,Lo,so,Ze,Kn,Jn,Gn,So,no,et,Yn,Xn,Cs,ke,Zn,ao,ea,ta,Rs,tt,Ns,S,oa,ot,sa,na,st,aa,ra,Is,X,Te,Wo,nt,ia,Oo,la,Ds,A,at,da,Z,ca,ro,ha,ua,rt,pa,ma,ga,ee,fa,io,_a,va,lo,ba,ka,Ta,we,Ls,te,ye,Qo,it,wa,Ho,ya,Ss,q,lt,$a,dt,Va,co,Ba,za,qa,ct,xa,ht,Fa,Pa,Ea,ut,Ma,pt,Aa,ja,Ca,C,mt,Ra,oe,Na,ho,Ia,Da,Uo,La,Sa,Wa,$e,Oa,Ve,Ws,se,Be,Ko,gt,Qa,Jo,Ha,Os,x,ft,Ua,ne,Ka,Go,Ja,Ga,Yo,Ya,Xa,Za,_t,er,uo,tr,or,sr,vt,nr,bt,ar,rr,ir,R,kt,lr,ae,dr,po,cr,hr,Xo,ur,pr,mr,ze,gr,qe,Qs,re,xe,Zo,Tt,fr,es,_r,Hs,F,wt,vr,ts,br,kr,yt,Tr,mo,wr,yr,$r,$t,Vr,Vt,Br,zr,qr,N,Bt,xr,ie,Fr,go,Pr,Er,os,Mr,Ar,jr,Fe,Cr,Pe,Us,le,Ee,ss,zt,Rr,ns,Nr,Ks,P,qt,Ir,as,Dr,Lr,xt,Sr,fo,Wr,Or,Qr,Ft,Hr,Pt,Ur,Kr,Jr,I,Et,Gr,de,Yr,_o,Xr,Zr,rs,ei,ti,oi,Me,si,Ae,Js,ce,je,is,Mt,ni,ls,ai,Gs,E,At,ri,ds,ii,li,jt,di,vo,ci,hi,ui,Ct,pi,Rt,mi,gi,fi,D,Nt,_i,he,vi,bo,bi,ki,cs,Ti,wi,yi,Ce,$i,Re,Ys,ue,Ne,hs,It,Vi,us,Bi,Xs,M,Dt,zi,ps,qi,xi,Lt,Fi,ko,Pi,Ei,Mi,St,Ai,Wt,ji,Ci,Ri,L,Ot,Ni,pe,Ii,To,Di,Li,ms,Si,Wi,Oi,Ie,Qi,De,Zs;return r=new J({}),Je=new J({}),Xe=new J({}),tt=new Ke({props:{code:`import torch
from transformers import BertTokenizer, VisualBertModel

model = VisualBertModel.from_pretrained("uclanlp/visualbert-vqa-coco-pre")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

inputs = tokenizer("What is the man eating?", return_tensors="pt")
# this is a custom function that returns the visual embeddings given the image path
visual_embeds = get_visual_embeddings(image_path)

visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)
inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)
outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisualBertModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;What is the man eating?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is a custom function that returns the visual embeddings given the image path</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>visual_embeds = get_visual_embeddings(image_path)

<span class="hljs-meta">&gt;&gt;&gt; </span>visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.update(
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`}}),nt=new J({}),at=new j({props:{name:"class transformers.VisualBertConfig",anchor:"transformers.VisualBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"visual_embedding_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"bypass_transformer",val:" = False"},{name:"special_visual_initialize",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisualBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the VisualBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <code>inputs_ids</code> passed to the forward method of
<a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.VisualBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.VisualBertConfig.visual_embedding_dim",description:`<strong>visual_embedding_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the visual embeddings to be passed to the model.`,name:"visual_embedding_dim"},{anchor:"transformers.VisualBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.VisualBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.VisualBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.VisualBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VisualBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.VisualBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.VisualBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.VisualBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.VisualBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VisualBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VisualBertConfig.bypass_transformer",description:`<strong>bypass_transformer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should bypass the transformer for the visual embeddings. If set to <code>True</code>, the
model directly concatenates the visual embeddings from <code>VisualBertEmbeddings</code> with text output from
transformers, and then pass it to a self-attention layer.`,name:"bypass_transformer"},{anchor:"transformers.VisualBertConfig.special_visual_initialize",description:`<strong>special_visual_initialize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the visual token type and position type embedding weights should be initialized the same as
the textual token type and positive type embeddings. When set to <code>True</code>, the weights of the textual token
type and position type embeddings are copied to the respective visual embedding layers.`,name:"special_visual_initialize"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/configuration_visual_bert.py#L37"}}),we=new Kt({props:{anchor:"transformers.VisualBertConfig.example",$$slots:{default:[bd]},$$scope:{ctx:B}}}),it=new J({}),lt=new j({props:{name:"class transformers.VisualBertModel",anchor:"transformers.VisualBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.VisualBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L680"}}),mt=new j({props:{name:"forward",anchor:"transformers.VisualBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"visual_embeds",val:" = None"},{name:"visual_attention_mask",val:" = None"},{name:"visual_token_type_ids",val:" = None"},{name:"image_text_alignment",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VisualBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertModel.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertModel.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertModel.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertModel.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L719",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new Eo({props:{$$slots:{default:[kd]},$$scope:{ctx:B}}}),Ve=new Kt({props:{anchor:"transformers.VisualBertModel.forward.example",$$slots:{default:[Td]},$$scope:{ctx:B}}}),gt=new J({}),ft=new j({props:{name:"class transformers.VisualBertForPreTraining",anchor:"transformers.VisualBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L876"}}),kt=new j({props:{name:"forward",anchor:"transformers.VisualBertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"visual_embeds",val:" = None"},{name:"visual_attention_mask",val:" = None"},{name:"visual_token_type_ids",val:" = None"},{name:"image_text_alignment",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"sentence_image_labels",val:" = None"}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisualBertForPreTraining.forward.sentence_image_labels",description:`<strong>sentence_image_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sentence-image prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a matching pair of sequence A for the given image,</li>
<li>1 indicates sequence B is a random sequence w.r.t A for the given image.</li>
</ul>`,name:"sentence_image_labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L892",returnDescription:`
<p>A <code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the sentence-image prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the sentence-image prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
<p><code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new Eo({props:{$$slots:{default:[wd]},$$scope:{ctx:B}}}),qe=new Kt({props:{anchor:"transformers.VisualBertForPreTraining.forward.example",$$slots:{default:[yd]},$$scope:{ctx:B}}}),Tt=new J({}),wt=new j({props:{name:"class transformers.VisualBertForQuestionAnswering",anchor:"transformers.VisualBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1178"}}),Bt=new j({props:{name:"forward",anchor:"transformers.VisualBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"visual_embeds",val:" = None"},{name:"visual_attention_mask",val:" = None"},{name:"visual_token_type_ids",val:" = None"},{name:"image_text_alignment",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A KLDivLoss is computed between the labels and the returned logits.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1190",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
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
`}}),Fe=new Eo({props:{$$slots:{default:[$d]},$$scope:{ctx:B}}}),Pe=new Kt({props:{anchor:"transformers.VisualBertForQuestionAnswering.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:B}}}),zt=new J({}),qt=new j({props:{name:"class transformers.VisualBertForMultipleChoice",anchor:"transformers.VisualBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1025"}}),Et=new j({props:{name:"forward",anchor:"transformers.VisualBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"visual_embeds",val:" = None"},{name:"visual_attention_mask",val:" = None"},{name:"visual_token_type_ids",val:" = None"},{name:"image_text_alignment",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1036",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Eo({props:{$$slots:{default:[Bd]},$$scope:{ctx:B}}}),Ae=new Kt({props:{anchor:"transformers.VisualBertForMultipleChoice.forward.example",$$slots:{default:[zd]},$$scope:{ctx:B}}}),Mt=new J({}),At=new j({props:{name:"class transformers.VisualBertForVisualReasoning",anchor:"transformers.VisualBertForVisualReasoning",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1304"}}),Nt=new j({props:{name:"forward",anchor:"transformers.VisualBertForVisualReasoning.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"visual_embeds",val:" = None"},{name:"visual_attention_mask",val:" = None"},{name:"visual_token_type_ids",val:" = None"},{name:"image_text_alignment",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForVisualReasoning.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForVisualReasoning.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForVisualReasoning.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForVisualReasoning.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A classification loss is computed (Cross-Entropy) against these labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1316",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
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
`}}),Ce=new Eo({props:{$$slots:{default:[qd]},$$scope:{ctx:B}}}),Re=new Kt({props:{anchor:"transformers.VisualBertForVisualReasoning.forward.example",$$slots:{default:[xd]},$$scope:{ctx:B}}}),It=new J({}),Dt=new j({props:{name:"class transformers.VisualBertForRegionToPhraseAlignment",anchor:"transformers.VisualBertForRegionToPhraseAlignment",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1464"}}),Ot=new j({props:{name:"forward",anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"visual_embeds",val:" = None"},{name:"visual_attention_mask",val:" = None"},{name:"visual_token_type_ids",val:" = None"},{name:"image_text_alignment",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"region_to_phrase_position",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.region_to_phrase_position",description:`<strong>region_to_phrase_position</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
The positions depicting the position of the image embedding corresponding to the textual tokens.`,name:"region_to_phrase_position"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length, visual_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. KLDivLoss is computed against these labels and the
outputs from the attention layer.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/visual_bert/modeling_visual_bert.py#L1476",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
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
`}}),Ie=new Eo({props:{$$slots:{default:[Fd]},$$scope:{ctx:B}}}),De=new Kt({props:{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.example",$$slots:{default:[Pd]},$$scope:{ctx:B}}}),{c(){d=s("meta"),b=u(),f=s("h1"),m=s("a"),v=s("span"),k(r.$$.fragment),h=u(),z=s("span"),zn=i("VisualBERT"),Vs=u(),G=s("h2"),me=s("a"),Mo=s("span"),k(Je.$$.fragment),qn=u(),Ao=s("span"),xn=i("Overview"),Bs=u(),ge=s("p"),Fn=i("The VisualBERT model was proposed in "),Ge=s("a"),Pn=i("VisualBERT: A Simple and Performant Baseline for Vision and Language"),En=i(` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),zs=u(),Gt=s("p"),Mn=i("The abstract from the paper is the following:"),qs=u(),Yt=s("p"),jo=s("em"),An=i(`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),xs=u(),Xt=s("p"),jn=i("Tips:"),Fs=u(),fe=s("ol"),Co=s("li"),Ye=s("p"),Cn=i("Most of the checkpoints provided work with the "),Zt=s("a"),Rn=i("VisualBertForPreTraining"),Nn=i(` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),In=u(),Ro=s("li"),No=s("p"),Dn=i(`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),Ps=u(),Y=s("h2"),_e=s("a"),Io=s("span"),k(Xe.$$.fragment),Ln=u(),Do=s("span"),Sn=i("Usage"),Es=u(),eo=s("p"),Wn=i(`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),Ms=u(),to=s("p"),On=i(`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),As=u(),ve=s("p"),Qn=i("The "),oo=s("a"),Hn=i("BertTokenizer"),Un=i(` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),js=u(),be=s("ul"),Lo=s("li"),so=s("p"),Ze=s("a"),Kn=i("VisualBERT VQA demo notebook"),Jn=i(` : This notebook
contains an example on VisualBERT VQA.`),Gn=u(),So=s("li"),no=s("p"),et=s("a"),Yn=i("Generate Embeddings for VisualBERT (Colab Notebook)"),Xn=i(` : This notebook contains
an example on how to generate visual embeddings.`),Cs=u(),ke=s("p"),Zn=i("The following example shows how to get the last hidden state using "),ao=s("a"),ea=i("VisualBertModel"),ta=i(":"),Rs=u(),k(tt.$$.fragment),Ns=u(),S=s("p"),oa=i("This model was contributed by "),ot=s("a"),sa=i("gchhablani"),na=i(". The original code can be found "),st=s("a"),aa=i("here"),ra=i("."),Is=u(),X=s("h2"),Te=s("a"),Wo=s("span"),k(nt.$$.fragment),ia=u(),Oo=s("span"),la=i("VisualBertConfig"),Ds=u(),A=s("div"),k(at.$$.fragment),da=u(),Z=s("p"),ca=i("This is the configuration class to store the configuration of a "),ro=s("a"),ha=i("VisualBertModel"),ua=i(`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=s("a"),pa=i("visualbert-vqa-coco-pre"),ma=i(" architecture."),ga=u(),ee=s("p"),fa=i("Configuration objects inherit from "),io=s("a"),_a=i("PretrainedConfig"),va=i(` and can be used to control the model outputs. Read the
documentation from `),lo=s("a"),ba=i("PretrainedConfig"),ka=i(" for more information."),Ta=u(),k(we.$$.fragment),Ls=u(),te=s("h2"),ye=s("a"),Qo=s("span"),k(it.$$.fragment),wa=u(),Ho=s("span"),ya=i("VisualBertModel"),Ss=u(),q=s("div"),k(lt.$$.fragment),$a=u(),dt=s("p"),Va=i(`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=s("a"),Ba=i("PreTrainedModel"),za=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa=u(),ct=s("p"),xa=i("This model is also a PyTorch "),ht=s("a"),Fa=i("torch.nn.Module"),Pa=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ea=u(),ut=s("p"),Ma=i("The model can behave as an encoder (with only self-attention) following the architecture described in "),pt=s("a"),Aa=i(`Attention is
all you need`),ja=i(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ca=u(),C=s("div"),k(mt.$$.fragment),Ra=u(),oe=s("p"),Na=i("The "),ho=s("a"),Ia=i("VisualBertModel"),Da=i(" forward method, overrides the "),Uo=s("code"),La=i("__call__"),Sa=i(" special method."),Wa=u(),k($e.$$.fragment),Oa=u(),k(Ve.$$.fragment),Ws=u(),se=s("h2"),Be=s("a"),Ko=s("span"),k(gt.$$.fragment),Qa=u(),Jo=s("span"),Ha=i("VisualBertForPreTraining"),Os=u(),x=s("div"),k(ft.$$.fragment),Ua=u(),ne=s("p"),Ka=i("VisualBert Model with two heads on top as done during the pretraining: a "),Go=s("code"),Ja=i("masked language modeling"),Ga=i(` head and a
`),Yo=s("code"),Ya=i("sentence-image prediction (classification)"),Xa=i(" head."),Za=u(),_t=s("p"),er=i("This model inherits from "),uo=s("a"),tr=i("PreTrainedModel"),or=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sr=u(),vt=s("p"),nr=i("This model is also a PyTorch "),bt=s("a"),ar=i("torch.nn.Module"),rr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ir=u(),R=s("div"),k(kt.$$.fragment),lr=u(),ae=s("p"),dr=i("The "),po=s("a"),cr=i("VisualBertForPreTraining"),hr=i(" forward method, overrides the "),Xo=s("code"),ur=i("__call__"),pr=i(" special method."),mr=u(),k(ze.$$.fragment),gr=u(),k(qe.$$.fragment),Qs=u(),re=s("h2"),xe=s("a"),Zo=s("span"),k(Tt.$$.fragment),fr=u(),es=s("span"),_r=i("VisualBertForQuestionAnswering"),Hs=u(),F=s("div"),k(wt.$$.fragment),vr=u(),ts=s("p"),br=i(`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),kr=u(),yt=s("p"),Tr=i("This model inherits from "),mo=s("a"),wr=i("PreTrainedModel"),yr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$r=u(),$t=s("p"),Vr=i("This model is also a PyTorch "),Vt=s("a"),Br=i("torch.nn.Module"),zr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qr=u(),N=s("div"),k(Bt.$$.fragment),xr=u(),ie=s("p"),Fr=i("The "),go=s("a"),Pr=i("VisualBertForQuestionAnswering"),Er=i(" forward method, overrides the "),os=s("code"),Mr=i("__call__"),Ar=i(" special method."),jr=u(),k(Fe.$$.fragment),Cr=u(),k(Pe.$$.fragment),Us=u(),le=s("h2"),Ee=s("a"),ss=s("span"),k(zt.$$.fragment),Rr=u(),ns=s("span"),Nr=i("VisualBertForMultipleChoice"),Ks=u(),P=s("div"),k(qt.$$.fragment),Ir=u(),as=s("p"),Dr=i(`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Lr=u(),xt=s("p"),Sr=i("This model inherits from "),fo=s("a"),Wr=i("PreTrainedModel"),Or=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr=u(),Ft=s("p"),Hr=i("This model is also a PyTorch "),Pt=s("a"),Ur=i("torch.nn.Module"),Kr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr=u(),I=s("div"),k(Et.$$.fragment),Gr=u(),de=s("p"),Yr=i("The "),_o=s("a"),Xr=i("VisualBertForMultipleChoice"),Zr=i(" forward method, overrides the "),rs=s("code"),ei=i("__call__"),ti=i(" special method."),oi=u(),k(Me.$$.fragment),si=u(),k(Ae.$$.fragment),Js=u(),ce=s("h2"),je=s("a"),is=s("span"),k(Mt.$$.fragment),ni=u(),ls=s("span"),ai=i("VisualBertForVisualReasoning"),Gs=u(),E=s("div"),k(At.$$.fragment),ri=u(),ds=s("p"),ii=i(`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),li=u(),jt=s("p"),di=i("This model inherits from "),vo=s("a"),ci=i("PreTrainedModel"),hi=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui=u(),Ct=s("p"),pi=i("This model is also a PyTorch "),Rt=s("a"),mi=i("torch.nn.Module"),gi=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fi=u(),D=s("div"),k(Nt.$$.fragment),_i=u(),he=s("p"),vi=i("The "),bo=s("a"),bi=i("VisualBertForVisualReasoning"),ki=i(" forward method, overrides the "),cs=s("code"),Ti=i("__call__"),wi=i(" special method."),yi=u(),k(Ce.$$.fragment),$i=u(),k(Re.$$.fragment),Ys=u(),ue=s("h2"),Ne=s("a"),hs=s("span"),k(It.$$.fragment),Vi=u(),us=s("span"),Bi=i("VisualBertForRegionToPhraseAlignment"),Xs=u(),M=s("div"),k(Dt.$$.fragment),zi=u(),ps=s("p"),qi=i(`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),xi=u(),Lt=s("p"),Fi=i("This model inherits from "),ko=s("a"),Pi=i("PreTrainedModel"),Ei=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=u(),St=s("p"),Ai=i("This model is also a PyTorch "),Wt=s("a"),ji=i("torch.nn.Module"),Ci=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ri=u(),L=s("div"),k(Ot.$$.fragment),Ni=u(),pe=s("p"),Ii=i("The "),To=s("a"),Di=i("VisualBertForRegionToPhraseAlignment"),Li=i(" forward method, overrides the "),ms=s("code"),Si=i("__call__"),Wi=i(" special method."),Oi=u(),k(Ie.$$.fragment),Qi=u(),k(De.$$.fragment),this.h()},l(t){const g=_d('[data-svelte="svelte-1phssyn"]',document.head);d=n(g,"META",{name:!0,content:!0}),g.forEach(o),b=p(t),f=n(t,"H1",{class:!0});var Qt=a(f);m=n(Qt,"A",{id:!0,class:!0,href:!0});var gs=a(m);v=n(gs,"SPAN",{});var fs=a(v);T(r.$$.fragment,fs),fs.forEach(o),gs.forEach(o),h=p(Qt),z=n(Qt,"SPAN",{});var _s=a(z);zn=l(_s,"VisualBERT"),_s.forEach(o),Qt.forEach(o),Vs=p(t),G=n(t,"H2",{class:!0});var Ht=a(G);me=n(Ht,"A",{id:!0,class:!0,href:!0});var vs=a(me);Mo=n(vs,"SPAN",{});var bs=a(Mo);T(Je.$$.fragment,bs),bs.forEach(o),vs.forEach(o),qn=p(Ht),Ao=n(Ht,"SPAN",{});var ks=a(Ao);xn=l(ks,"Overview"),ks.forEach(o),Ht.forEach(o),Bs=p(t),ge=n(t,"P",{});var Ut=a(ge);Fn=l(Ut,"The VisualBERT model was proposed in "),Ge=n(Ut,"A",{href:!0,rel:!0});var Ts=a(Ge);Pn=l(Ts,"VisualBERT: A Simple and Performant Baseline for Vision and Language"),Ts.forEach(o),En=l(Ut,` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),Ut.forEach(o),zs=p(t),Gt=n(t,"P",{});var ws=a(Gt);Mn=l(ws,"The abstract from the paper is the following:"),ws.forEach(o),qs=p(t),Yt=n(t,"P",{});var ys=a(Yt);jo=n(ys,"EM",{});var $s=a(jo);An=l($s,`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),$s.forEach(o),ys.forEach(o),xs=p(t),Xt=n(t,"P",{});var Ki=a(Xt);jn=l(Ki,"Tips:"),Ki.forEach(o),Fs=p(t),fe=n(t,"OL",{});var en=a(fe);Co=n(en,"LI",{});var Ji=a(Co);Ye=n(Ji,"P",{});var tn=a(Ye);Cn=l(tn,"Most of the checkpoints provided work with the "),Zt=n(tn,"A",{href:!0});var Gi=a(Zt);Rn=l(Gi,"VisualBertForPreTraining"),Gi.forEach(o),Nn=l(tn,` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),tn.forEach(o),Ji.forEach(o),In=p(en),Ro=n(en,"LI",{});var Yi=a(Ro);No=n(Yi,"P",{});var Xi=a(No);Dn=l(Xi,`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),Xi.forEach(o),Yi.forEach(o),en.forEach(o),Ps=p(t),Y=n(t,"H2",{class:!0});var on=a(Y);_e=n(on,"A",{id:!0,class:!0,href:!0});var Zi=a(_e);Io=n(Zi,"SPAN",{});var el=a(Io);T(Xe.$$.fragment,el),el.forEach(o),Zi.forEach(o),Ln=p(on),Do=n(on,"SPAN",{});var tl=a(Do);Sn=l(tl,"Usage"),tl.forEach(o),on.forEach(o),Es=p(t),eo=n(t,"P",{});var ol=a(eo);Wn=l(ol,`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),ol.forEach(o),Ms=p(t),to=n(t,"P",{});var sl=a(to);On=l(sl,`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),sl.forEach(o),As=p(t),ve=n(t,"P",{});var sn=a(ve);Qn=l(sn,"The "),oo=n(sn,"A",{href:!0});var nl=a(oo);Hn=l(nl,"BertTokenizer"),nl.forEach(o),Un=l(sn,` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),sn.forEach(o),js=p(t),be=n(t,"UL",{});var nn=a(be);Lo=n(nn,"LI",{});var al=a(Lo);so=n(al,"P",{});var Hi=a(so);Ze=n(Hi,"A",{href:!0,rel:!0});var rl=a(Ze);Kn=l(rl,"VisualBERT VQA demo notebook"),rl.forEach(o),Jn=l(Hi,` : This notebook
contains an example on VisualBERT VQA.`),Hi.forEach(o),al.forEach(o),Gn=p(nn),So=n(nn,"LI",{});var il=a(So);no=n(il,"P",{});var Ui=a(no);et=n(Ui,"A",{href:!0,rel:!0});var ll=a(et);Yn=l(ll,"Generate Embeddings for VisualBERT (Colab Notebook)"),ll.forEach(o),Xn=l(Ui,` : This notebook contains
an example on how to generate visual embeddings.`),Ui.forEach(o),il.forEach(o),nn.forEach(o),Cs=p(t),ke=n(t,"P",{});var an=a(ke);Zn=l(an,"The following example shows how to get the last hidden state using "),ao=n(an,"A",{href:!0});var dl=a(ao);ea=l(dl,"VisualBertModel"),dl.forEach(o),ta=l(an,":"),an.forEach(o),Rs=p(t),T(tt.$$.fragment,t),Ns=p(t),S=n(t,"P",{});var wo=a(S);oa=l(wo,"This model was contributed by "),ot=n(wo,"A",{href:!0,rel:!0});var cl=a(ot);sa=l(cl,"gchhablani"),cl.forEach(o),na=l(wo,". The original code can be found "),st=n(wo,"A",{href:!0,rel:!0});var hl=a(st);aa=l(hl,"here"),hl.forEach(o),ra=l(wo,"."),wo.forEach(o),Is=p(t),X=n(t,"H2",{class:!0});var rn=a(X);Te=n(rn,"A",{id:!0,class:!0,href:!0});var ul=a(Te);Wo=n(ul,"SPAN",{});var pl=a(Wo);T(nt.$$.fragment,pl),pl.forEach(o),ul.forEach(o),ia=p(rn),Oo=n(rn,"SPAN",{});var ml=a(Oo);la=l(ml,"VisualBertConfig"),ml.forEach(o),rn.forEach(o),Ds=p(t),A=n(t,"DIV",{class:!0});var Le=a(A);T(at.$$.fragment,Le),da=p(Le),Z=n(Le,"P",{});var yo=a(Z);ca=l(yo,"This is the configuration class to store the configuration of a "),ro=n(yo,"A",{href:!0});var gl=a(ro);ha=l(gl,"VisualBertModel"),gl.forEach(o),ua=l(yo,`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=n(yo,"A",{href:!0,rel:!0});var fl=a(rt);pa=l(fl,"visualbert-vqa-coco-pre"),fl.forEach(o),ma=l(yo," architecture."),yo.forEach(o),ga=p(Le),ee=n(Le,"P",{});var $o=a(ee);fa=l($o,"Configuration objects inherit from "),io=n($o,"A",{href:!0});var _l=a(io);_a=l(_l,"PretrainedConfig"),_l.forEach(o),va=l($o,` and can be used to control the model outputs. Read the
documentation from `),lo=n($o,"A",{href:!0});var vl=a(lo);ba=l(vl,"PretrainedConfig"),vl.forEach(o),ka=l($o," for more information."),$o.forEach(o),Ta=p(Le),T(we.$$.fragment,Le),Le.forEach(o),Ls=p(t),te=n(t,"H2",{class:!0});var ln=a(te);ye=n(ln,"A",{id:!0,class:!0,href:!0});var bl=a(ye);Qo=n(bl,"SPAN",{});var kl=a(Qo);T(it.$$.fragment,kl),kl.forEach(o),bl.forEach(o),wa=p(ln),Ho=n(ln,"SPAN",{});var Tl=a(Ho);ya=l(Tl,"VisualBertModel"),Tl.forEach(o),ln.forEach(o),Ss=p(t),q=n(t,"DIV",{class:!0});var W=a(q);T(lt.$$.fragment,W),$a=p(W),dt=n(W,"P",{});var dn=a(dt);Va=l(dn,`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=n(dn,"A",{href:!0});var wl=a(co);Ba=l(wl,"PreTrainedModel"),wl.forEach(o),za=l(dn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dn.forEach(o),qa=p(W),ct=n(W,"P",{});var cn=a(ct);xa=l(cn,"This model is also a PyTorch "),ht=n(cn,"A",{href:!0,rel:!0});var yl=a(ht);Fa=l(yl,"torch.nn.Module"),yl.forEach(o),Pa=l(cn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cn.forEach(o),Ea=p(W),ut=n(W,"P",{});var hn=a(ut);Ma=l(hn,"The model can behave as an encoder (with only self-attention) following the architecture described in "),pt=n(hn,"A",{href:!0,rel:!0});var $l=a(pt);Aa=l($l,`Attention is
all you need`),$l.forEach(o),ja=l(hn,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),hn.forEach(o),Ca=p(W),C=n(W,"DIV",{class:!0});var Se=a(C);T(mt.$$.fragment,Se),Ra=p(Se),oe=n(Se,"P",{});var Vo=a(oe);Na=l(Vo,"The "),ho=n(Vo,"A",{href:!0});var Vl=a(ho);Ia=l(Vl,"VisualBertModel"),Vl.forEach(o),Da=l(Vo," forward method, overrides the "),Uo=n(Vo,"CODE",{});var Bl=a(Uo);La=l(Bl,"__call__"),Bl.forEach(o),Sa=l(Vo," special method."),Vo.forEach(o),Wa=p(Se),T($e.$$.fragment,Se),Oa=p(Se),T(Ve.$$.fragment,Se),Se.forEach(o),W.forEach(o),Ws=p(t),se=n(t,"H2",{class:!0});var un=a(se);Be=n(un,"A",{id:!0,class:!0,href:!0});var zl=a(Be);Ko=n(zl,"SPAN",{});var ql=a(Ko);T(gt.$$.fragment,ql),ql.forEach(o),zl.forEach(o),Qa=p(un),Jo=n(un,"SPAN",{});var xl=a(Jo);Ha=l(xl,"VisualBertForPreTraining"),xl.forEach(o),un.forEach(o),Os=p(t),x=n(t,"DIV",{class:!0});var O=a(x);T(ft.$$.fragment,O),Ua=p(O),ne=n(O,"P",{});var Bo=a(ne);Ka=l(Bo,"VisualBert Model with two heads on top as done during the pretraining: a "),Go=n(Bo,"CODE",{});var Fl=a(Go);Ja=l(Fl,"masked language modeling"),Fl.forEach(o),Ga=l(Bo,` head and a
`),Yo=n(Bo,"CODE",{});var Pl=a(Yo);Ya=l(Pl,"sentence-image prediction (classification)"),Pl.forEach(o),Xa=l(Bo," head."),Bo.forEach(o),Za=p(O),_t=n(O,"P",{});var pn=a(_t);er=l(pn,"This model inherits from "),uo=n(pn,"A",{href:!0});var El=a(uo);tr=l(El,"PreTrainedModel"),El.forEach(o),or=l(pn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pn.forEach(o),sr=p(O),vt=n(O,"P",{});var mn=a(vt);nr=l(mn,"This model is also a PyTorch "),bt=n(mn,"A",{href:!0,rel:!0});var Ml=a(bt);ar=l(Ml,"torch.nn.Module"),Ml.forEach(o),rr=l(mn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mn.forEach(o),ir=p(O),R=n(O,"DIV",{class:!0});var We=a(R);T(kt.$$.fragment,We),lr=p(We),ae=n(We,"P",{});var zo=a(ae);dr=l(zo,"The "),po=n(zo,"A",{href:!0});var Al=a(po);cr=l(Al,"VisualBertForPreTraining"),Al.forEach(o),hr=l(zo," forward method, overrides the "),Xo=n(zo,"CODE",{});var jl=a(Xo);ur=l(jl,"__call__"),jl.forEach(o),pr=l(zo," special method."),zo.forEach(o),mr=p(We),T(ze.$$.fragment,We),gr=p(We),T(qe.$$.fragment,We),We.forEach(o),O.forEach(o),Qs=p(t),re=n(t,"H2",{class:!0});var gn=a(re);xe=n(gn,"A",{id:!0,class:!0,href:!0});var Cl=a(xe);Zo=n(Cl,"SPAN",{});var Rl=a(Zo);T(Tt.$$.fragment,Rl),Rl.forEach(o),Cl.forEach(o),fr=p(gn),es=n(gn,"SPAN",{});var Nl=a(es);_r=l(Nl,"VisualBertForQuestionAnswering"),Nl.forEach(o),gn.forEach(o),Hs=p(t),F=n(t,"DIV",{class:!0});var Q=a(F);T(wt.$$.fragment,Q),vr=p(Q),ts=n(Q,"P",{});var Il=a(ts);br=l(Il,`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),Il.forEach(o),kr=p(Q),yt=n(Q,"P",{});var fn=a(yt);Tr=l(fn,"This model inherits from "),mo=n(fn,"A",{href:!0});var Dl=a(mo);wr=l(Dl,"PreTrainedModel"),Dl.forEach(o),yr=l(fn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fn.forEach(o),$r=p(Q),$t=n(Q,"P",{});var _n=a($t);Vr=l(_n,"This model is also a PyTorch "),Vt=n(_n,"A",{href:!0,rel:!0});var Ll=a(Vt);Br=l(Ll,"torch.nn.Module"),Ll.forEach(o),zr=l(_n,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_n.forEach(o),qr=p(Q),N=n(Q,"DIV",{class:!0});var Oe=a(N);T(Bt.$$.fragment,Oe),xr=p(Oe),ie=n(Oe,"P",{});var qo=a(ie);Fr=l(qo,"The "),go=n(qo,"A",{href:!0});var Sl=a(go);Pr=l(Sl,"VisualBertForQuestionAnswering"),Sl.forEach(o),Er=l(qo," forward method, overrides the "),os=n(qo,"CODE",{});var Wl=a(os);Mr=l(Wl,"__call__"),Wl.forEach(o),Ar=l(qo," special method."),qo.forEach(o),jr=p(Oe),T(Fe.$$.fragment,Oe),Cr=p(Oe),T(Pe.$$.fragment,Oe),Oe.forEach(o),Q.forEach(o),Us=p(t),le=n(t,"H2",{class:!0});var vn=a(le);Ee=n(vn,"A",{id:!0,class:!0,href:!0});var Ol=a(Ee);ss=n(Ol,"SPAN",{});var Ql=a(ss);T(zt.$$.fragment,Ql),Ql.forEach(o),Ol.forEach(o),Rr=p(vn),ns=n(vn,"SPAN",{});var Hl=a(ns);Nr=l(Hl,"VisualBertForMultipleChoice"),Hl.forEach(o),vn.forEach(o),Ks=p(t),P=n(t,"DIV",{class:!0});var H=a(P);T(qt.$$.fragment,H),Ir=p(H),as=n(H,"P",{});var Ul=a(as);Dr=l(Ul,`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Ul.forEach(o),Lr=p(H),xt=n(H,"P",{});var bn=a(xt);Sr=l(bn,"This model inherits from "),fo=n(bn,"A",{href:!0});var Kl=a(fo);Wr=l(Kl,"PreTrainedModel"),Kl.forEach(o),Or=l(bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bn.forEach(o),Qr=p(H),Ft=n(H,"P",{});var kn=a(Ft);Hr=l(kn,"This model is also a PyTorch "),Pt=n(kn,"A",{href:!0,rel:!0});var Jl=a(Pt);Ur=l(Jl,"torch.nn.Module"),Jl.forEach(o),Kr=l(kn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kn.forEach(o),Jr=p(H),I=n(H,"DIV",{class:!0});var Qe=a(I);T(Et.$$.fragment,Qe),Gr=p(Qe),de=n(Qe,"P",{});var xo=a(de);Yr=l(xo,"The "),_o=n(xo,"A",{href:!0});var Gl=a(_o);Xr=l(Gl,"VisualBertForMultipleChoice"),Gl.forEach(o),Zr=l(xo," forward method, overrides the "),rs=n(xo,"CODE",{});var Yl=a(rs);ei=l(Yl,"__call__"),Yl.forEach(o),ti=l(xo," special method."),xo.forEach(o),oi=p(Qe),T(Me.$$.fragment,Qe),si=p(Qe),T(Ae.$$.fragment,Qe),Qe.forEach(o),H.forEach(o),Js=p(t),ce=n(t,"H2",{class:!0});var Tn=a(ce);je=n(Tn,"A",{id:!0,class:!0,href:!0});var Xl=a(je);is=n(Xl,"SPAN",{});var Zl=a(is);T(Mt.$$.fragment,Zl),Zl.forEach(o),Xl.forEach(o),ni=p(Tn),ls=n(Tn,"SPAN",{});var ed=a(ls);ai=l(ed,"VisualBertForVisualReasoning"),ed.forEach(o),Tn.forEach(o),Gs=p(t),E=n(t,"DIV",{class:!0});var U=a(E);T(At.$$.fragment,U),ri=p(U),ds=n(U,"P",{});var td=a(ds);ii=l(td,`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),td.forEach(o),li=p(U),jt=n(U,"P",{});var wn=a(jt);di=l(wn,"This model inherits from "),vo=n(wn,"A",{href:!0});var od=a(vo);ci=l(od,"PreTrainedModel"),od.forEach(o),hi=l(wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wn.forEach(o),ui=p(U),Ct=n(U,"P",{});var yn=a(Ct);pi=l(yn,"This model is also a PyTorch "),Rt=n(yn,"A",{href:!0,rel:!0});var sd=a(Rt);mi=l(sd,"torch.nn.Module"),sd.forEach(o),gi=l(yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yn.forEach(o),fi=p(U),D=n(U,"DIV",{class:!0});var He=a(D);T(Nt.$$.fragment,He),_i=p(He),he=n(He,"P",{});var Fo=a(he);vi=l(Fo,"The "),bo=n(Fo,"A",{href:!0});var nd=a(bo);bi=l(nd,"VisualBertForVisualReasoning"),nd.forEach(o),ki=l(Fo," forward method, overrides the "),cs=n(Fo,"CODE",{});var ad=a(cs);Ti=l(ad,"__call__"),ad.forEach(o),wi=l(Fo," special method."),Fo.forEach(o),yi=p(He),T(Ce.$$.fragment,He),$i=p(He),T(Re.$$.fragment,He),He.forEach(o),U.forEach(o),Ys=p(t),ue=n(t,"H2",{class:!0});var $n=a(ue);Ne=n($n,"A",{id:!0,class:!0,href:!0});var rd=a(Ne);hs=n(rd,"SPAN",{});var id=a(hs);T(It.$$.fragment,id),id.forEach(o),rd.forEach(o),Vi=p($n),us=n($n,"SPAN",{});var ld=a(us);Bi=l(ld,"VisualBertForRegionToPhraseAlignment"),ld.forEach(o),$n.forEach(o),Xs=p(t),M=n(t,"DIV",{class:!0});var K=a(M);T(Dt.$$.fragment,K),zi=p(K),ps=n(K,"P",{});var dd=a(ps);qi=l(dd,`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),dd.forEach(o),xi=p(K),Lt=n(K,"P",{});var Vn=a(Lt);Fi=l(Vn,"This model inherits from "),ko=n(Vn,"A",{href:!0});var cd=a(ko);Pi=l(cd,"PreTrainedModel"),cd.forEach(o),Ei=l(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(o),Mi=p(K),St=n(K,"P",{});var Bn=a(St);Ai=l(Bn,"This model is also a PyTorch "),Wt=n(Bn,"A",{href:!0,rel:!0});var hd=a(Wt);ji=l(hd,"torch.nn.Module"),hd.forEach(o),Ci=l(Bn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bn.forEach(o),Ri=p(K),L=n(K,"DIV",{class:!0});var Ue=a(L);T(Ot.$$.fragment,Ue),Ni=p(Ue),pe=n(Ue,"P",{});var Po=a(pe);Ii=l(Po,"The "),To=n(Po,"A",{href:!0});var ud=a(To);Di=l(ud,"VisualBertForRegionToPhraseAlignment"),ud.forEach(o),Li=l(Po," forward method, overrides the "),ms=n(Po,"CODE",{});var pd=a(ms);Si=l(pd,"__call__"),pd.forEach(o),Wi=l(Po," special method."),Po.forEach(o),Oi=p(Ue),T(Ie.$$.fragment,Ue),Qi=p(Ue),T(De.$$.fragment,Ue),Ue.forEach(o),K.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Md)),c(m,"id","visualbert"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#visualbert"),c(f,"class","relative group"),c(me,"id","overview"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#overview"),c(G,"class","relative group"),c(Ge,"href","https://arxiv.org/pdf/1908.03557"),c(Ge,"rel","nofollow"),c(Zt,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(_e,"id","usage"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#usage"),c(Y,"class","relative group"),c(oo,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer"),c(Ze,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/visual_bert"),c(Ze,"rel","nofollow"),c(et,"href","https://colab.research.google.com/drive/1bLGxKdldwqnMVA5x4neY7-l_8fKGWQYI?usp=sharing"),c(et,"rel","nofollow"),c(ao,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertModel"),c(ot,"href","https://huggingface.co/gchhablani"),c(ot,"rel","nofollow"),c(st,"href","https://github.com/uclanlp/visualbert"),c(st,"rel","nofollow"),c(Te,"id","transformers.VisualBertConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.VisualBertConfig"),c(X,"class","relative group"),c(ro,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertModel"),c(rt,"href","https://huggingface.co/uclanlp/visualbert-vqa-coco-pre"),c(rt,"rel","nofollow"),c(io,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),c(lo,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.VisualBertModel"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.VisualBertModel"),c(te,"class","relative group"),c(co,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),c(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ht,"rel","nofollow"),c(pt,"href","https://arxiv.org/abs/1706.03762"),c(pt,"rel","nofollow"),c(ho,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertModel"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"id","transformers.VisualBertForPreTraining"),c(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Be,"href","#transformers.VisualBertForPreTraining"),c(se,"class","relative group"),c(uo,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),c(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bt,"rel","nofollow"),c(po,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.VisualBertForQuestionAnswering"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.VisualBertForQuestionAnswering"),c(re,"class","relative group"),c(mo,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),c(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vt,"rel","nofollow"),c(go,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertForQuestionAnswering"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.VisualBertForMultipleChoice"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.VisualBertForMultipleChoice"),c(le,"class","relative group"),c(fo,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),c(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Pt,"rel","nofollow"),c(_o,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertForMultipleChoice"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.VisualBertForVisualReasoning"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.VisualBertForVisualReasoning"),c(ce,"class","relative group"),c(vo,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),c(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rt,"rel","nofollow"),c(bo,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertForVisualReasoning"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"id","transformers.VisualBertForRegionToPhraseAlignment"),c(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ne,"href","#transformers.VisualBertForRegionToPhraseAlignment"),c(ue,"class","relative group"),c(ko,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),c(Wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Wt,"rel","nofollow"),c(To,"href","/docs/transformers/pr_highlight/en/model_doc/visual_bert#transformers.VisualBertForRegionToPhraseAlignment"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),_(t,b,g),_(t,f,g),e(f,m),e(m,v),w(r,v,null),e(f,h),e(f,z),e(z,zn),_(t,Vs,g),_(t,G,g),e(G,me),e(me,Mo),w(Je,Mo,null),e(G,qn),e(G,Ao),e(Ao,xn),_(t,Bs,g),_(t,ge,g),e(ge,Fn),e(ge,Ge),e(Ge,Pn),e(ge,En),_(t,zs,g),_(t,Gt,g),e(Gt,Mn),_(t,qs,g),_(t,Yt,g),e(Yt,jo),e(jo,An),_(t,xs,g),_(t,Xt,g),e(Xt,jn),_(t,Fs,g),_(t,fe,g),e(fe,Co),e(Co,Ye),e(Ye,Cn),e(Ye,Zt),e(Zt,Rn),e(Ye,Nn),e(fe,In),e(fe,Ro),e(Ro,No),e(No,Dn),_(t,Ps,g),_(t,Y,g),e(Y,_e),e(_e,Io),w(Xe,Io,null),e(Y,Ln),e(Y,Do),e(Do,Sn),_(t,Es,g),_(t,eo,g),e(eo,Wn),_(t,Ms,g),_(t,to,g),e(to,On),_(t,As,g),_(t,ve,g),e(ve,Qn),e(ve,oo),e(oo,Hn),e(ve,Un),_(t,js,g),_(t,be,g),e(be,Lo),e(Lo,so),e(so,Ze),e(Ze,Kn),e(so,Jn),e(be,Gn),e(be,So),e(So,no),e(no,et),e(et,Yn),e(no,Xn),_(t,Cs,g),_(t,ke,g),e(ke,Zn),e(ke,ao),e(ao,ea),e(ke,ta),_(t,Rs,g),w(tt,t,g),_(t,Ns,g),_(t,S,g),e(S,oa),e(S,ot),e(ot,sa),e(S,na),e(S,st),e(st,aa),e(S,ra),_(t,Is,g),_(t,X,g),e(X,Te),e(Te,Wo),w(nt,Wo,null),e(X,ia),e(X,Oo),e(Oo,la),_(t,Ds,g),_(t,A,g),w(at,A,null),e(A,da),e(A,Z),e(Z,ca),e(Z,ro),e(ro,ha),e(Z,ua),e(Z,rt),e(rt,pa),e(Z,ma),e(A,ga),e(A,ee),e(ee,fa),e(ee,io),e(io,_a),e(ee,va),e(ee,lo),e(lo,ba),e(ee,ka),e(A,Ta),w(we,A,null),_(t,Ls,g),_(t,te,g),e(te,ye),e(ye,Qo),w(it,Qo,null),e(te,wa),e(te,Ho),e(Ho,ya),_(t,Ss,g),_(t,q,g),w(lt,q,null),e(q,$a),e(q,dt),e(dt,Va),e(dt,co),e(co,Ba),e(dt,za),e(q,qa),e(q,ct),e(ct,xa),e(ct,ht),e(ht,Fa),e(ct,Pa),e(q,Ea),e(q,ut),e(ut,Ma),e(ut,pt),e(pt,Aa),e(ut,ja),e(q,Ca),e(q,C),w(mt,C,null),e(C,Ra),e(C,oe),e(oe,Na),e(oe,ho),e(ho,Ia),e(oe,Da),e(oe,Uo),e(Uo,La),e(oe,Sa),e(C,Wa),w($e,C,null),e(C,Oa),w(Ve,C,null),_(t,Ws,g),_(t,se,g),e(se,Be),e(Be,Ko),w(gt,Ko,null),e(se,Qa),e(se,Jo),e(Jo,Ha),_(t,Os,g),_(t,x,g),w(ft,x,null),e(x,Ua),e(x,ne),e(ne,Ka),e(ne,Go),e(Go,Ja),e(ne,Ga),e(ne,Yo),e(Yo,Ya),e(ne,Xa),e(x,Za),e(x,_t),e(_t,er),e(_t,uo),e(uo,tr),e(_t,or),e(x,sr),e(x,vt),e(vt,nr),e(vt,bt),e(bt,ar),e(vt,rr),e(x,ir),e(x,R),w(kt,R,null),e(R,lr),e(R,ae),e(ae,dr),e(ae,po),e(po,cr),e(ae,hr),e(ae,Xo),e(Xo,ur),e(ae,pr),e(R,mr),w(ze,R,null),e(R,gr),w(qe,R,null),_(t,Qs,g),_(t,re,g),e(re,xe),e(xe,Zo),w(Tt,Zo,null),e(re,fr),e(re,es),e(es,_r),_(t,Hs,g),_(t,F,g),w(wt,F,null),e(F,vr),e(F,ts),e(ts,br),e(F,kr),e(F,yt),e(yt,Tr),e(yt,mo),e(mo,wr),e(yt,yr),e(F,$r),e(F,$t),e($t,Vr),e($t,Vt),e(Vt,Br),e($t,zr),e(F,qr),e(F,N),w(Bt,N,null),e(N,xr),e(N,ie),e(ie,Fr),e(ie,go),e(go,Pr),e(ie,Er),e(ie,os),e(os,Mr),e(ie,Ar),e(N,jr),w(Fe,N,null),e(N,Cr),w(Pe,N,null),_(t,Us,g),_(t,le,g),e(le,Ee),e(Ee,ss),w(zt,ss,null),e(le,Rr),e(le,ns),e(ns,Nr),_(t,Ks,g),_(t,P,g),w(qt,P,null),e(P,Ir),e(P,as),e(as,Dr),e(P,Lr),e(P,xt),e(xt,Sr),e(xt,fo),e(fo,Wr),e(xt,Or),e(P,Qr),e(P,Ft),e(Ft,Hr),e(Ft,Pt),e(Pt,Ur),e(Ft,Kr),e(P,Jr),e(P,I),w(Et,I,null),e(I,Gr),e(I,de),e(de,Yr),e(de,_o),e(_o,Xr),e(de,Zr),e(de,rs),e(rs,ei),e(de,ti),e(I,oi),w(Me,I,null),e(I,si),w(Ae,I,null),_(t,Js,g),_(t,ce,g),e(ce,je),e(je,is),w(Mt,is,null),e(ce,ni),e(ce,ls),e(ls,ai),_(t,Gs,g),_(t,E,g),w(At,E,null),e(E,ri),e(E,ds),e(ds,ii),e(E,li),e(E,jt),e(jt,di),e(jt,vo),e(vo,ci),e(jt,hi),e(E,ui),e(E,Ct),e(Ct,pi),e(Ct,Rt),e(Rt,mi),e(Ct,gi),e(E,fi),e(E,D),w(Nt,D,null),e(D,_i),e(D,he),e(he,vi),e(he,bo),e(bo,bi),e(he,ki),e(he,cs),e(cs,Ti),e(he,wi),e(D,yi),w(Ce,D,null),e(D,$i),w(Re,D,null),_(t,Ys,g),_(t,ue,g),e(ue,Ne),e(Ne,hs),w(It,hs,null),e(ue,Vi),e(ue,us),e(us,Bi),_(t,Xs,g),_(t,M,g),w(Dt,M,null),e(M,zi),e(M,ps),e(ps,qi),e(M,xi),e(M,Lt),e(Lt,Fi),e(Lt,ko),e(ko,Pi),e(Lt,Ei),e(M,Mi),e(M,St),e(St,Ai),e(St,Wt),e(Wt,ji),e(St,Ci),e(M,Ri),e(M,L),w(Ot,L,null),e(L,Ni),e(L,pe),e(pe,Ii),e(pe,To),e(To,Di),e(pe,Li),e(pe,ms),e(ms,Si),e(pe,Wi),e(L,Oi),w(Ie,L,null),e(L,Qi),w(De,L,null),Zs=!0},p(t,[g]){const Qt={};g&2&&(Qt.$$scope={dirty:g,ctx:t}),we.$set(Qt);const gs={};g&2&&(gs.$$scope={dirty:g,ctx:t}),$e.$set(gs);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:t}),Ve.$set(fs);const _s={};g&2&&(_s.$$scope={dirty:g,ctx:t}),ze.$set(_s);const Ht={};g&2&&(Ht.$$scope={dirty:g,ctx:t}),qe.$set(Ht);const vs={};g&2&&(vs.$$scope={dirty:g,ctx:t}),Fe.$set(vs);const bs={};g&2&&(bs.$$scope={dirty:g,ctx:t}),Pe.$set(bs);const ks={};g&2&&(ks.$$scope={dirty:g,ctx:t}),Me.$set(ks);const Ut={};g&2&&(Ut.$$scope={dirty:g,ctx:t}),Ae.$set(Ut);const Ts={};g&2&&(Ts.$$scope={dirty:g,ctx:t}),Ce.$set(Ts);const ws={};g&2&&(ws.$$scope={dirty:g,ctx:t}),Re.$set(ws);const ys={};g&2&&(ys.$$scope={dirty:g,ctx:t}),Ie.$set(ys);const $s={};g&2&&($s.$$scope={dirty:g,ctx:t}),De.$set($s)},i(t){Zs||(y(r.$$.fragment,t),y(Je.$$.fragment,t),y(Xe.$$.fragment,t),y(tt.$$.fragment,t),y(nt.$$.fragment,t),y(at.$$.fragment,t),y(we.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),y(mt.$$.fragment,t),y($e.$$.fragment,t),y(Ve.$$.fragment,t),y(gt.$$.fragment,t),y(ft.$$.fragment,t),y(kt.$$.fragment,t),y(ze.$$.fragment,t),y(qe.$$.fragment,t),y(Tt.$$.fragment,t),y(wt.$$.fragment,t),y(Bt.$$.fragment,t),y(Fe.$$.fragment,t),y(Pe.$$.fragment,t),y(zt.$$.fragment,t),y(qt.$$.fragment,t),y(Et.$$.fragment,t),y(Me.$$.fragment,t),y(Ae.$$.fragment,t),y(Mt.$$.fragment,t),y(At.$$.fragment,t),y(Nt.$$.fragment,t),y(Ce.$$.fragment,t),y(Re.$$.fragment,t),y(It.$$.fragment,t),y(Dt.$$.fragment,t),y(Ot.$$.fragment,t),y(Ie.$$.fragment,t),y(De.$$.fragment,t),Zs=!0)},o(t){$(r.$$.fragment,t),$(Je.$$.fragment,t),$(Xe.$$.fragment,t),$(tt.$$.fragment,t),$(nt.$$.fragment,t),$(at.$$.fragment,t),$(we.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(mt.$$.fragment,t),$($e.$$.fragment,t),$(Ve.$$.fragment,t),$(gt.$$.fragment,t),$(ft.$$.fragment,t),$(kt.$$.fragment,t),$(ze.$$.fragment,t),$(qe.$$.fragment,t),$(Tt.$$.fragment,t),$(wt.$$.fragment,t),$(Bt.$$.fragment,t),$(Fe.$$.fragment,t),$(Pe.$$.fragment,t),$(zt.$$.fragment,t),$(qt.$$.fragment,t),$(Et.$$.fragment,t),$(Me.$$.fragment,t),$(Ae.$$.fragment,t),$(Mt.$$.fragment,t),$(At.$$.fragment,t),$(Nt.$$.fragment,t),$(Ce.$$.fragment,t),$(Re.$$.fragment,t),$(It.$$.fragment,t),$(Dt.$$.fragment,t),$(Ot.$$.fragment,t),$(Ie.$$.fragment,t),$(De.$$.fragment,t),Zs=!1},d(t){o(d),t&&o(b),t&&o(f),V(r),t&&o(Vs),t&&o(G),V(Je),t&&o(Bs),t&&o(ge),t&&o(zs),t&&o(Gt),t&&o(qs),t&&o(Yt),t&&o(xs),t&&o(Xt),t&&o(Fs),t&&o(fe),t&&o(Ps),t&&o(Y),V(Xe),t&&o(Es),t&&o(eo),t&&o(Ms),t&&o(to),t&&o(As),t&&o(ve),t&&o(js),t&&o(be),t&&o(Cs),t&&o(ke),t&&o(Rs),V(tt,t),t&&o(Ns),t&&o(S),t&&o(Is),t&&o(X),V(nt),t&&o(Ds),t&&o(A),V(at),V(we),t&&o(Ls),t&&o(te),V(it),t&&o(Ss),t&&o(q),V(lt),V(mt),V($e),V(Ve),t&&o(Ws),t&&o(se),V(gt),t&&o(Os),t&&o(x),V(ft),V(kt),V(ze),V(qe),t&&o(Qs),t&&o(re),V(Tt),t&&o(Hs),t&&o(F),V(wt),V(Bt),V(Fe),V(Pe),t&&o(Us),t&&o(le),V(zt),t&&o(Ks),t&&o(P),V(qt),V(Et),V(Me),V(Ae),t&&o(Js),t&&o(ce),V(Mt),t&&o(Gs),t&&o(E),V(At),V(Nt),V(Ce),V(Re),t&&o(Ys),t&&o(ue),V(It),t&&o(Xs),t&&o(M),V(Dt),V(Ot),V(Ie),V(De)}}}const Md={local:"visualbert",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.VisualBertConfig",title:"VisualBertConfig"},{local:"transformers.VisualBertModel",title:"VisualBertModel"},{local:"transformers.VisualBertForPreTraining",title:"VisualBertForPreTraining"},{local:"transformers.VisualBertForQuestionAnswering",title:"VisualBertForQuestionAnswering"},{local:"transformers.VisualBertForMultipleChoice",title:"VisualBertForMultipleChoice"},{local:"transformers.VisualBertForVisualReasoning",title:"VisualBertForVisualReasoning"},{local:"transformers.VisualBertForRegionToPhraseAlignment",title:"VisualBertForRegionToPhraseAlignment"}],title:"VisualBERT"};function Ad(B){return vd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ld extends md{constructor(d){super();gd(this,d,Ad,Ed,fd,{})}}export{Ld as default,Md as metadata};
