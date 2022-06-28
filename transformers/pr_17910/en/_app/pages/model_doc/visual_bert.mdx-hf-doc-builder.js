import{S as md,i as fd,s as gd,e as n,k as u,w as k,t as i,M as _d,c as s,d as o,m as h,a,x as T,h as l,b as c,G as e,g as _,y,q as w,o as $,B as V,v as vd,L as Gt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Po}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ke}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Kt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bd(B){let d,b,g,m,v;return m=new Ke({props:{code:`from transformers import VisualBertModel, VisualBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=i("Example:"),g=u(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,p){_(r,d,p),e(d,b),_(r,g,p),y(m,r,p),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function kd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(p,"CODE",{});var x=a(g);m=l(x,"Module"),x.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(r,p){_(r,d,p),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function Td(B){let d,b,g,m,v;return m=new Ke({props:{code:`



`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image.</span>
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

last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=i("Example:"),g=u(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,p){_(r,d,p),e(d,b),_(r,g,p),y(m,r,p),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function yd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(p,"CODE",{});var x=a(g);m=l(x,"Module"),x.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(r,p){_(r,d,p),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function wd(B){let d,b,g,m,v;return m=new Ke({props:{code:`



`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForPreTraining

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
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
seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),b=i("Example:"),g=u(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,p){_(r,d,p),e(d,b),_(r,g,p),y(m,r,p),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function $d(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(p,"CODE",{});var x=a(g);m=l(x,"Module"),x.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(r,p){_(r,d,p),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function Vd(B){let d,b,g,m,v;return m=new Ke({props:{code:`



`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
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
scores = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=u(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,p){_(r,d,p),e(d,b),_(r,g,p),y(m,r,p),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Bd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(p,"CODE",{});var x=a(g);m=l(x,"Module"),x.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(r,p){_(r,d,p),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function xd(B){let d,b,g,m,v;return m=new Ke({props:{code:`




`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
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
logits = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=u(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,p){_(r,d,p),e(d,b),_(r,g,p),y(m,r,p),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function qd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(p,"CODE",{});var x=a(g);m=l(x,"Module"),x.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(r,p){_(r,d,p),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function Fd(B){let d,b,g,m,v;return m=new Ke({props:{code:`



`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
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
scores = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=u(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,p){_(r,d,p),e(d,b),_(r,g,p),y(m,r,p),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function zd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(p,"CODE",{});var x=a(g);m=l(x,"Module"),x.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(r,p){_(r,d,p),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function Ed(B){let d,b,g,m,v;return m=new Ke({props:{code:`



`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
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
scores = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=u(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,p){_(r,d,p),e(d,b),_(r,g,p),y(m,r,p),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Pd(B){let d,b,g,m,v,r,p,x,xs,Bn,J,me,Mo,Ge,qs,jo,Fs,xn,fe,zs,Je,Es,Ps,qn,Jt,Ms,Fn,Yt,Ao,js,zn,Xt,As,En,ge,Co,Ye,Cs,Zt,Ls,Os,Rs,Lo,Oo,Ns,Pn,Y,_e,Ro,Xe,Is,No,Ds,Mn,eo,Ss,jn,to,Ws,An,ve,Qs,oo,Hs,Us,Cn,be,Io,no,Ze,Ks,Gs,Js,Do,so,et,Ys,Xs,Ln,ke,Zs,ao,ea,ta,On,tt,Rn,D,oa,ot,na,sa,nt,aa,ra,Nn,X,Te,So,st,ia,Wo,la,In,j,at,da,Z,ca,ro,pa,ua,rt,ha,ma,fa,ee,ga,io,_a,va,lo,ba,ka,Ta,ye,Dn,te,we,Qo,it,ya,Ho,wa,Sn,q,lt,$a,dt,Va,co,Ba,xa,qa,ct,Fa,pt,za,Ea,Pa,ut,Ma,ht,ja,Aa,Ca,C,mt,La,oe,Oa,po,Ra,Na,Uo,Ia,Da,Sa,$e,Wa,Ve,Wn,ne,Be,Ko,ft,Qa,Go,Ha,Qn,F,gt,Ua,se,Ka,Jo,Ga,Ja,Yo,Ya,Xa,Za,_t,er,uo,tr,or,nr,vt,sr,bt,ar,rr,ir,L,kt,lr,ae,dr,ho,cr,pr,Xo,ur,hr,mr,xe,fr,qe,Hn,re,Fe,Zo,Tt,gr,en,_r,Un,z,yt,vr,tn,br,kr,wt,Tr,mo,yr,wr,$r,$t,Vr,Vt,Br,xr,qr,O,Bt,Fr,ie,zr,fo,Er,Pr,on,Mr,jr,Ar,ze,Cr,Ee,Kn,le,Pe,nn,xt,Lr,sn,Or,Gn,E,qt,Rr,an,Nr,Ir,Ft,Dr,go,Sr,Wr,Qr,zt,Hr,Et,Ur,Kr,Gr,R,Pt,Jr,de,Yr,_o,Xr,Zr,rn,ei,ti,oi,Me,ni,je,Jn,ce,Ae,ln,Mt,si,dn,ai,Yn,P,jt,ri,cn,ii,li,At,di,vo,ci,pi,ui,Ct,hi,Lt,mi,fi,gi,N,Ot,_i,pe,vi,bo,bi,ki,pn,Ti,yi,wi,Ce,$i,Le,Xn,ue,Oe,un,Rt,Vi,hn,Bi,Zn,M,Nt,xi,mn,qi,Fi,It,zi,ko,Ei,Pi,Mi,Dt,ji,St,Ai,Ci,Li,I,Wt,Oi,he,Ri,To,Ni,Ii,fn,Di,Si,Wi,Re,Qi,Ne,es;return r=new G({}),Ge=new G({}),Xe=new G({}),tt=new Ke({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`}}),st=new G({}),at=new A({props:{name:"class transformers.VisualBertConfig",anchor:"transformers.VisualBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"visual_embedding_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"bypass_transformer",val:" = False"},{name:"special_visual_initialize",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisualBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the VisualBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <code>inputs_ids</code> passed to the forward method of
<a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.VisualBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.VisualBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VisualBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VisualBertConfig.bypass_transformer",description:`<strong>bypass_transformer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should bypass the transformer for the visual embeddings. If set to <code>True</code>, the
model directly concatenates the visual embeddings from <code>VisualBertEmbeddings</code> with text output from
transformers, and then pass it to a self-attention layer.`,name:"bypass_transformer"},{anchor:"transformers.VisualBertConfig.special_visual_initialize",description:`<strong>special_visual_initialize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the visual token type and position type embedding weights should be initialized the same as
the textual token type and positive type embeddings. When set to <code>True</code>, the weights of the textual token
type and position type embeddings are copied to the respective visual embedding layers.`,name:"special_visual_initialize"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/configuration_visual_bert.py#L43"}}),ye=new Kt({props:{anchor:"transformers.VisualBertConfig.example",$$slots:{default:[bd]},$$scope:{ctx:B}}}),it=new G({}),lt=new A({props:{name:"class transformers.VisualBertModel",anchor:"transformers.VisualBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.VisualBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L677"}}),mt=new A({props:{name:"forward",anchor:"transformers.VisualBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.VisualBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17910/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17910/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L716",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new Po({props:{$$slots:{default:[kd]},$$scope:{ctx:B}}}),Ve=new Kt({props:{anchor:"transformers.VisualBertModel.forward.example",$$slots:{default:[Td]},$$scope:{ctx:B}}}),ft=new G({}),gt=new A({props:{name:"class transformers.VisualBertForPreTraining",anchor:"transformers.VisualBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L873"}}),kt=new A({props:{name:"forward",anchor:"transformers.VisualBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_image_labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17910/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17910/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisualBertForPreTraining.forward.sentence_image_labels",description:`<strong>sentence_image_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sentence-image prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a matching pair of sequence A for the given image,</li>
<li>1 indicates sequence B is a random sequence w.r.t A for the given image.</li>
</ul>`,name:"sentence_image_labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L889",returnDescription:`
<p>A <code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
`}}),xe=new Po({props:{$$slots:{default:[yd]},$$scope:{ctx:B}}}),qe=new Kt({props:{anchor:"transformers.VisualBertForPreTraining.forward.example",$$slots:{default:[wd]},$$scope:{ctx:B}}}),Tt=new G({}),yt=new A({props:{name:"class transformers.VisualBertForQuestionAnswering",anchor:"transformers.VisualBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1175"}}),Bt=new A({props:{name:"forward",anchor:"transformers.VisualBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17910/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17910/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A KLDivLoss is computed between the labels and the returned logits.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new Po({props:{$$slots:{default:[$d]},$$scope:{ctx:B}}}),Ee=new Kt({props:{anchor:"transformers.VisualBertForQuestionAnswering.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:B}}}),xt=new G({}),qt=new A({props:{name:"class transformers.VisualBertForMultipleChoice",anchor:"transformers.VisualBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1022"}}),Pt=new A({props:{name:"forward",anchor:"transformers.VisualBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17910/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17910/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1033",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Po({props:{$$slots:{default:[Bd]},$$scope:{ctx:B}}}),je=new Kt({props:{anchor:"transformers.VisualBertForMultipleChoice.forward.example",$$slots:{default:[xd]},$$scope:{ctx:B}}}),Mt=new G({}),jt=new A({props:{name:"class transformers.VisualBertForVisualReasoning",anchor:"transformers.VisualBertForVisualReasoning",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1301"}}),Ot=new A({props:{name:"forward",anchor:"transformers.VisualBertForVisualReasoning.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17910/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17910/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForVisualReasoning.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A classification loss is computed (Cross-Entropy) against these labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1313",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Po({props:{$$slots:{default:[qd]},$$scope:{ctx:B}}}),Le=new Kt({props:{anchor:"transformers.VisualBertForVisualReasoning.forward.example",$$slots:{default:[Fd]},$$scope:{ctx:B}}}),Rt=new G({}),Nt=new A({props:{name:"class transformers.VisualBertForRegionToPhraseAlignment",anchor:"transformers.VisualBertForRegionToPhraseAlignment",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1461"}}),Wt=new A({props:{name:"forward",anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"region_to_phrase_position",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17910/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17910/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17910/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.region_to_phrase_position",description:`<strong>region_to_phrase_position</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
The positions depicting the position of the image embedding corresponding to the textual tokens.`,name:"region_to_phrase_position"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length, visual_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. KLDivLoss is computed against these labels and the
outputs from the attention layer.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17910/src/transformers/models/visual_bert/modeling_visual_bert.py#L1473",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17910/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new Po({props:{$$slots:{default:[zd]},$$scope:{ctx:B}}}),Ne=new Kt({props:{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.example",$$slots:{default:[Ed]},$$scope:{ctx:B}}}),{c(){d=n("meta"),b=u(),g=n("h1"),m=n("a"),v=n("span"),k(r.$$.fragment),p=u(),x=n("span"),xs=i("VisualBERT"),Bn=u(),J=n("h2"),me=n("a"),Mo=n("span"),k(Ge.$$.fragment),qs=u(),jo=n("span"),Fs=i("Overview"),xn=u(),fe=n("p"),zs=i("The VisualBERT model was proposed in "),Je=n("a"),Es=i("VisualBERT: A Simple and Performant Baseline for Vision and Language"),Ps=i(` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),qn=u(),Jt=n("p"),Ms=i("The abstract from the paper is the following:"),Fn=u(),Yt=n("p"),Ao=n("em"),js=i(`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),zn=u(),Xt=n("p"),As=i("Tips:"),En=u(),ge=n("ol"),Co=n("li"),Ye=n("p"),Cs=i("Most of the checkpoints provided work with the "),Zt=n("a"),Ls=i("VisualBertForPreTraining"),Os=i(` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),Rs=u(),Lo=n("li"),Oo=n("p"),Ns=i(`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),Pn=u(),Y=n("h2"),_e=n("a"),Ro=n("span"),k(Xe.$$.fragment),Is=u(),No=n("span"),Ds=i("Usage"),Mn=u(),eo=n("p"),Ss=i(`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),jn=u(),to=n("p"),Ws=i(`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),An=u(),ve=n("p"),Qs=i("The "),oo=n("a"),Hs=i("BertTokenizer"),Us=i(` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),Cn=u(),be=n("ul"),Io=n("li"),no=n("p"),Ze=n("a"),Ks=i("VisualBERT VQA demo notebook"),Gs=i(` : This notebook
contains an example on VisualBERT VQA.`),Js=u(),Do=n("li"),so=n("p"),et=n("a"),Ys=i("Generate Embeddings for VisualBERT (Colab Notebook)"),Xs=i(` : This notebook contains
an example on how to generate visual embeddings.`),Ln=u(),ke=n("p"),Zs=i("The following example shows how to get the last hidden state using "),ao=n("a"),ea=i("VisualBertModel"),ta=i(":"),On=u(),k(tt.$$.fragment),Rn=u(),D=n("p"),oa=i("This model was contributed by "),ot=n("a"),na=i("gchhablani"),sa=i(". The original code can be found "),nt=n("a"),aa=i("here"),ra=i("."),Nn=u(),X=n("h2"),Te=n("a"),So=n("span"),k(st.$$.fragment),ia=u(),Wo=n("span"),la=i("VisualBertConfig"),In=u(),j=n("div"),k(at.$$.fragment),da=u(),Z=n("p"),ca=i("This is the configuration class to store the configuration of a "),ro=n("a"),pa=i("VisualBertModel"),ua=i(`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=n("a"),ha=i("uclanlp/visualbert-vqa-coco-pre"),ma=i(" architecture."),fa=u(),ee=n("p"),ga=i("Configuration objects inherit from "),io=n("a"),_a=i("PretrainedConfig"),va=i(` and can be used to control the model outputs. Read the
documentation from `),lo=n("a"),ba=i("PretrainedConfig"),ka=i(" for more information."),Ta=u(),k(ye.$$.fragment),Dn=u(),te=n("h2"),we=n("a"),Qo=n("span"),k(it.$$.fragment),ya=u(),Ho=n("span"),wa=i("VisualBertModel"),Sn=u(),q=n("div"),k(lt.$$.fragment),$a=u(),dt=n("p"),Va=i(`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=n("a"),Ba=i("PreTrainedModel"),xa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa=u(),ct=n("p"),Fa=i("This model is also a PyTorch "),pt=n("a"),za=i("torch.nn.Module"),Ea=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pa=u(),ut=n("p"),Ma=i("The model can behave as an encoder (with only self-attention) following the architecture described in "),ht=n("a"),ja=i(`Attention is
all you need`),Aa=i(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ca=u(),C=n("div"),k(mt.$$.fragment),La=u(),oe=n("p"),Oa=i("The "),po=n("a"),Ra=i("VisualBertModel"),Na=i(" forward method, overrides the "),Uo=n("code"),Ia=i("__call__"),Da=i(" special method."),Sa=u(),k($e.$$.fragment),Wa=u(),k(Ve.$$.fragment),Wn=u(),ne=n("h2"),Be=n("a"),Ko=n("span"),k(ft.$$.fragment),Qa=u(),Go=n("span"),Ha=i("VisualBertForPreTraining"),Qn=u(),F=n("div"),k(gt.$$.fragment),Ua=u(),se=n("p"),Ka=i("VisualBert Model with two heads on top as done during the pretraining: a "),Jo=n("code"),Ga=i("masked language modeling"),Ja=i(` head and a
`),Yo=n("code"),Ya=i("sentence-image prediction (classification)"),Xa=i(" head."),Za=u(),_t=n("p"),er=i("This model inherits from "),uo=n("a"),tr=i("PreTrainedModel"),or=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nr=u(),vt=n("p"),sr=i("This model is also a PyTorch "),bt=n("a"),ar=i("torch.nn.Module"),rr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ir=u(),L=n("div"),k(kt.$$.fragment),lr=u(),ae=n("p"),dr=i("The "),ho=n("a"),cr=i("VisualBertForPreTraining"),pr=i(" forward method, overrides the "),Xo=n("code"),ur=i("__call__"),hr=i(" special method."),mr=u(),k(xe.$$.fragment),fr=u(),k(qe.$$.fragment),Hn=u(),re=n("h2"),Fe=n("a"),Zo=n("span"),k(Tt.$$.fragment),gr=u(),en=n("span"),_r=i("VisualBertForQuestionAnswering"),Un=u(),z=n("div"),k(yt.$$.fragment),vr=u(),tn=n("p"),br=i(`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),kr=u(),wt=n("p"),Tr=i("This model inherits from "),mo=n("a"),yr=i("PreTrainedModel"),wr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$r=u(),$t=n("p"),Vr=i("This model is also a PyTorch "),Vt=n("a"),Br=i("torch.nn.Module"),xr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qr=u(),O=n("div"),k(Bt.$$.fragment),Fr=u(),ie=n("p"),zr=i("The "),fo=n("a"),Er=i("VisualBertForQuestionAnswering"),Pr=i(" forward method, overrides the "),on=n("code"),Mr=i("__call__"),jr=i(" special method."),Ar=u(),k(ze.$$.fragment),Cr=u(),k(Ee.$$.fragment),Kn=u(),le=n("h2"),Pe=n("a"),nn=n("span"),k(xt.$$.fragment),Lr=u(),sn=n("span"),Or=i("VisualBertForMultipleChoice"),Gn=u(),E=n("div"),k(qt.$$.fragment),Rr=u(),an=n("p"),Nr=i(`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Ir=u(),Ft=n("p"),Dr=i("This model inherits from "),go=n("a"),Sr=i("PreTrainedModel"),Wr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr=u(),zt=n("p"),Hr=i("This model is also a PyTorch "),Et=n("a"),Ur=i("torch.nn.Module"),Kr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr=u(),R=n("div"),k(Pt.$$.fragment),Jr=u(),de=n("p"),Yr=i("The "),_o=n("a"),Xr=i("VisualBertForMultipleChoice"),Zr=i(" forward method, overrides the "),rn=n("code"),ei=i("__call__"),ti=i(" special method."),oi=u(),k(Me.$$.fragment),ni=u(),k(je.$$.fragment),Jn=u(),ce=n("h2"),Ae=n("a"),ln=n("span"),k(Mt.$$.fragment),si=u(),dn=n("span"),ai=i("VisualBertForVisualReasoning"),Yn=u(),P=n("div"),k(jt.$$.fragment),ri=u(),cn=n("p"),ii=i(`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),li=u(),At=n("p"),di=i("This model inherits from "),vo=n("a"),ci=i("PreTrainedModel"),pi=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui=u(),Ct=n("p"),hi=i("This model is also a PyTorch "),Lt=n("a"),mi=i("torch.nn.Module"),fi=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gi=u(),N=n("div"),k(Ot.$$.fragment),_i=u(),pe=n("p"),vi=i("The "),bo=n("a"),bi=i("VisualBertForVisualReasoning"),ki=i(" forward method, overrides the "),pn=n("code"),Ti=i("__call__"),yi=i(" special method."),wi=u(),k(Ce.$$.fragment),$i=u(),k(Le.$$.fragment),Xn=u(),ue=n("h2"),Oe=n("a"),un=n("span"),k(Rt.$$.fragment),Vi=u(),hn=n("span"),Bi=i("VisualBertForRegionToPhraseAlignment"),Zn=u(),M=n("div"),k(Nt.$$.fragment),xi=u(),mn=n("p"),qi=i(`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),Fi=u(),It=n("p"),zi=i("This model inherits from "),ko=n("a"),Ei=i("PreTrainedModel"),Pi=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=u(),Dt=n("p"),ji=i("This model is also a PyTorch "),St=n("a"),Ai=i("torch.nn.Module"),Ci=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Li=u(),I=n("div"),k(Wt.$$.fragment),Oi=u(),he=n("p"),Ri=i("The "),To=n("a"),Ni=i("VisualBertForRegionToPhraseAlignment"),Ii=i(" forward method, overrides the "),fn=n("code"),Di=i("__call__"),Si=i(" special method."),Wi=u(),k(Re.$$.fragment),Qi=u(),k(Ne.$$.fragment),this.h()},l(t){const f=_d('[data-svelte="svelte-1phssyn"]',document.head);d=s(f,"META",{name:!0,content:!0}),f.forEach(o),b=h(t),g=s(t,"H1",{class:!0});var Qt=a(g);m=s(Qt,"A",{id:!0,class:!0,href:!0});var gn=a(m);v=s(gn,"SPAN",{});var _n=a(v);T(r.$$.fragment,_n),_n.forEach(o),gn.forEach(o),p=h(Qt),x=s(Qt,"SPAN",{});var vn=a(x);xs=l(vn,"VisualBERT"),vn.forEach(o),Qt.forEach(o),Bn=h(t),J=s(t,"H2",{class:!0});var Ht=a(J);me=s(Ht,"A",{id:!0,class:!0,href:!0});var bn=a(me);Mo=s(bn,"SPAN",{});var kn=a(Mo);T(Ge.$$.fragment,kn),kn.forEach(o),bn.forEach(o),qs=h(Ht),jo=s(Ht,"SPAN",{});var Tn=a(jo);Fs=l(Tn,"Overview"),Tn.forEach(o),Ht.forEach(o),xn=h(t),fe=s(t,"P",{});var Ut=a(fe);zs=l(Ut,"The VisualBERT model was proposed in "),Je=s(Ut,"A",{href:!0,rel:!0});var yn=a(Je);Es=l(yn,"VisualBERT: A Simple and Performant Baseline for Vision and Language"),yn.forEach(o),Ps=l(Ut,` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),Ut.forEach(o),qn=h(t),Jt=s(t,"P",{});var wn=a(Jt);Ms=l(wn,"The abstract from the paper is the following:"),wn.forEach(o),Fn=h(t),Yt=s(t,"P",{});var $n=a(Yt);Ao=s($n,"EM",{});var Vn=a(Ao);js=l(Vn,`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),Vn.forEach(o),$n.forEach(o),zn=h(t),Xt=s(t,"P",{});var Ki=a(Xt);As=l(Ki,"Tips:"),Ki.forEach(o),En=h(t),ge=s(t,"OL",{});var ts=a(ge);Co=s(ts,"LI",{});var Gi=a(Co);Ye=s(Gi,"P",{});var os=a(Ye);Cs=l(os,"Most of the checkpoints provided work with the "),Zt=s(os,"A",{href:!0});var Ji=a(Zt);Ls=l(Ji,"VisualBertForPreTraining"),Ji.forEach(o),Os=l(os,` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),os.forEach(o),Gi.forEach(o),Rs=h(ts),Lo=s(ts,"LI",{});var Yi=a(Lo);Oo=s(Yi,"P",{});var Xi=a(Oo);Ns=l(Xi,`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),Xi.forEach(o),Yi.forEach(o),ts.forEach(o),Pn=h(t),Y=s(t,"H2",{class:!0});var ns=a(Y);_e=s(ns,"A",{id:!0,class:!0,href:!0});var Zi=a(_e);Ro=s(Zi,"SPAN",{});var el=a(Ro);T(Xe.$$.fragment,el),el.forEach(o),Zi.forEach(o),Is=h(ns),No=s(ns,"SPAN",{});var tl=a(No);Ds=l(tl,"Usage"),tl.forEach(o),ns.forEach(o),Mn=h(t),eo=s(t,"P",{});var ol=a(eo);Ss=l(ol,`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),ol.forEach(o),jn=h(t),to=s(t,"P",{});var nl=a(to);Ws=l(nl,`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),nl.forEach(o),An=h(t),ve=s(t,"P",{});var ss=a(ve);Qs=l(ss,"The "),oo=s(ss,"A",{href:!0});var sl=a(oo);Hs=l(sl,"BertTokenizer"),sl.forEach(o),Us=l(ss,` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),ss.forEach(o),Cn=h(t),be=s(t,"UL",{});var as=a(be);Io=s(as,"LI",{});var al=a(Io);no=s(al,"P",{});var Hi=a(no);Ze=s(Hi,"A",{href:!0,rel:!0});var rl=a(Ze);Ks=l(rl,"VisualBERT VQA demo notebook"),rl.forEach(o),Gs=l(Hi,` : This notebook
contains an example on VisualBERT VQA.`),Hi.forEach(o),al.forEach(o),Js=h(as),Do=s(as,"LI",{});var il=a(Do);so=s(il,"P",{});var Ui=a(so);et=s(Ui,"A",{href:!0,rel:!0});var ll=a(et);Ys=l(ll,"Generate Embeddings for VisualBERT (Colab Notebook)"),ll.forEach(o),Xs=l(Ui,` : This notebook contains
an example on how to generate visual embeddings.`),Ui.forEach(o),il.forEach(o),as.forEach(o),Ln=h(t),ke=s(t,"P",{});var rs=a(ke);Zs=l(rs,"The following example shows how to get the last hidden state using "),ao=s(rs,"A",{href:!0});var dl=a(ao);ea=l(dl,"VisualBertModel"),dl.forEach(o),ta=l(rs,":"),rs.forEach(o),On=h(t),T(tt.$$.fragment,t),Rn=h(t),D=s(t,"P",{});var yo=a(D);oa=l(yo,"This model was contributed by "),ot=s(yo,"A",{href:!0,rel:!0});var cl=a(ot);na=l(cl,"gchhablani"),cl.forEach(o),sa=l(yo,". The original code can be found "),nt=s(yo,"A",{href:!0,rel:!0});var pl=a(nt);aa=l(pl,"here"),pl.forEach(o),ra=l(yo,"."),yo.forEach(o),Nn=h(t),X=s(t,"H2",{class:!0});var is=a(X);Te=s(is,"A",{id:!0,class:!0,href:!0});var ul=a(Te);So=s(ul,"SPAN",{});var hl=a(So);T(st.$$.fragment,hl),hl.forEach(o),ul.forEach(o),ia=h(is),Wo=s(is,"SPAN",{});var ml=a(Wo);la=l(ml,"VisualBertConfig"),ml.forEach(o),is.forEach(o),In=h(t),j=s(t,"DIV",{class:!0});var Ie=a(j);T(at.$$.fragment,Ie),da=h(Ie),Z=s(Ie,"P",{});var wo=a(Z);ca=l(wo,"This is the configuration class to store the configuration of a "),ro=s(wo,"A",{href:!0});var fl=a(ro);pa=l(fl,"VisualBertModel"),fl.forEach(o),ua=l(wo,`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=s(wo,"A",{href:!0,rel:!0});var gl=a(rt);ha=l(gl,"uclanlp/visualbert-vqa-coco-pre"),gl.forEach(o),ma=l(wo," architecture."),wo.forEach(o),fa=h(Ie),ee=s(Ie,"P",{});var $o=a(ee);ga=l($o,"Configuration objects inherit from "),io=s($o,"A",{href:!0});var _l=a(io);_a=l(_l,"PretrainedConfig"),_l.forEach(o),va=l($o,` and can be used to control the model outputs. Read the
documentation from `),lo=s($o,"A",{href:!0});var vl=a(lo);ba=l(vl,"PretrainedConfig"),vl.forEach(o),ka=l($o," for more information."),$o.forEach(o),Ta=h(Ie),T(ye.$$.fragment,Ie),Ie.forEach(o),Dn=h(t),te=s(t,"H2",{class:!0});var ls=a(te);we=s(ls,"A",{id:!0,class:!0,href:!0});var bl=a(we);Qo=s(bl,"SPAN",{});var kl=a(Qo);T(it.$$.fragment,kl),kl.forEach(o),bl.forEach(o),ya=h(ls),Ho=s(ls,"SPAN",{});var Tl=a(Ho);wa=l(Tl,"VisualBertModel"),Tl.forEach(o),ls.forEach(o),Sn=h(t),q=s(t,"DIV",{class:!0});var S=a(q);T(lt.$$.fragment,S),$a=h(S),dt=s(S,"P",{});var ds=a(dt);Va=l(ds,`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=s(ds,"A",{href:!0});var yl=a(co);Ba=l(yl,"PreTrainedModel"),yl.forEach(o),xa=l(ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ds.forEach(o),qa=h(S),ct=s(S,"P",{});var cs=a(ct);Fa=l(cs,"This model is also a PyTorch "),pt=s(cs,"A",{href:!0,rel:!0});var wl=a(pt);za=l(wl,"torch.nn.Module"),wl.forEach(o),Ea=l(cs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cs.forEach(o),Pa=h(S),ut=s(S,"P",{});var ps=a(ut);Ma=l(ps,"The model can behave as an encoder (with only self-attention) following the architecture described in "),ht=s(ps,"A",{href:!0,rel:!0});var $l=a(ht);ja=l($l,`Attention is
all you need`),$l.forEach(o),Aa=l(ps,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),ps.forEach(o),Ca=h(S),C=s(S,"DIV",{class:!0});var De=a(C);T(mt.$$.fragment,De),La=h(De),oe=s(De,"P",{});var Vo=a(oe);Oa=l(Vo,"The "),po=s(Vo,"A",{href:!0});var Vl=a(po);Ra=l(Vl,"VisualBertModel"),Vl.forEach(o),Na=l(Vo," forward method, overrides the "),Uo=s(Vo,"CODE",{});var Bl=a(Uo);Ia=l(Bl,"__call__"),Bl.forEach(o),Da=l(Vo," special method."),Vo.forEach(o),Sa=h(De),T($e.$$.fragment,De),Wa=h(De),T(Ve.$$.fragment,De),De.forEach(o),S.forEach(o),Wn=h(t),ne=s(t,"H2",{class:!0});var us=a(ne);Be=s(us,"A",{id:!0,class:!0,href:!0});var xl=a(Be);Ko=s(xl,"SPAN",{});var ql=a(Ko);T(ft.$$.fragment,ql),ql.forEach(o),xl.forEach(o),Qa=h(us),Go=s(us,"SPAN",{});var Fl=a(Go);Ha=l(Fl,"VisualBertForPreTraining"),Fl.forEach(o),us.forEach(o),Qn=h(t),F=s(t,"DIV",{class:!0});var W=a(F);T(gt.$$.fragment,W),Ua=h(W),se=s(W,"P",{});var Bo=a(se);Ka=l(Bo,"VisualBert Model with two heads on top as done during the pretraining: a "),Jo=s(Bo,"CODE",{});var zl=a(Jo);Ga=l(zl,"masked language modeling"),zl.forEach(o),Ja=l(Bo,` head and a
`),Yo=s(Bo,"CODE",{});var El=a(Yo);Ya=l(El,"sentence-image prediction (classification)"),El.forEach(o),Xa=l(Bo," head."),Bo.forEach(o),Za=h(W),_t=s(W,"P",{});var hs=a(_t);er=l(hs,"This model inherits from "),uo=s(hs,"A",{href:!0});var Pl=a(uo);tr=l(Pl,"PreTrainedModel"),Pl.forEach(o),or=l(hs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hs.forEach(o),nr=h(W),vt=s(W,"P",{});var ms=a(vt);sr=l(ms,"This model is also a PyTorch "),bt=s(ms,"A",{href:!0,rel:!0});var Ml=a(bt);ar=l(Ml,"torch.nn.Module"),Ml.forEach(o),rr=l(ms,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ms.forEach(o),ir=h(W),L=s(W,"DIV",{class:!0});var Se=a(L);T(kt.$$.fragment,Se),lr=h(Se),ae=s(Se,"P",{});var xo=a(ae);dr=l(xo,"The "),ho=s(xo,"A",{href:!0});var jl=a(ho);cr=l(jl,"VisualBertForPreTraining"),jl.forEach(o),pr=l(xo," forward method, overrides the "),Xo=s(xo,"CODE",{});var Al=a(Xo);ur=l(Al,"__call__"),Al.forEach(o),hr=l(xo," special method."),xo.forEach(o),mr=h(Se),T(xe.$$.fragment,Se),fr=h(Se),T(qe.$$.fragment,Se),Se.forEach(o),W.forEach(o),Hn=h(t),re=s(t,"H2",{class:!0});var fs=a(re);Fe=s(fs,"A",{id:!0,class:!0,href:!0});var Cl=a(Fe);Zo=s(Cl,"SPAN",{});var Ll=a(Zo);T(Tt.$$.fragment,Ll),Ll.forEach(o),Cl.forEach(o),gr=h(fs),en=s(fs,"SPAN",{});var Ol=a(en);_r=l(Ol,"VisualBertForQuestionAnswering"),Ol.forEach(o),fs.forEach(o),Un=h(t),z=s(t,"DIV",{class:!0});var Q=a(z);T(yt.$$.fragment,Q),vr=h(Q),tn=s(Q,"P",{});var Rl=a(tn);br=l(Rl,`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),Rl.forEach(o),kr=h(Q),wt=s(Q,"P",{});var gs=a(wt);Tr=l(gs,"This model inherits from "),mo=s(gs,"A",{href:!0});var Nl=a(mo);yr=l(Nl,"PreTrainedModel"),Nl.forEach(o),wr=l(gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gs.forEach(o),$r=h(Q),$t=s(Q,"P",{});var _s=a($t);Vr=l(_s,"This model is also a PyTorch "),Vt=s(_s,"A",{href:!0,rel:!0});var Il=a(Vt);Br=l(Il,"torch.nn.Module"),Il.forEach(o),xr=l(_s,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_s.forEach(o),qr=h(Q),O=s(Q,"DIV",{class:!0});var We=a(O);T(Bt.$$.fragment,We),Fr=h(We),ie=s(We,"P",{});var qo=a(ie);zr=l(qo,"The "),fo=s(qo,"A",{href:!0});var Dl=a(fo);Er=l(Dl,"VisualBertForQuestionAnswering"),Dl.forEach(o),Pr=l(qo," forward method, overrides the "),on=s(qo,"CODE",{});var Sl=a(on);Mr=l(Sl,"__call__"),Sl.forEach(o),jr=l(qo," special method."),qo.forEach(o),Ar=h(We),T(ze.$$.fragment,We),Cr=h(We),T(Ee.$$.fragment,We),We.forEach(o),Q.forEach(o),Kn=h(t),le=s(t,"H2",{class:!0});var vs=a(le);Pe=s(vs,"A",{id:!0,class:!0,href:!0});var Wl=a(Pe);nn=s(Wl,"SPAN",{});var Ql=a(nn);T(xt.$$.fragment,Ql),Ql.forEach(o),Wl.forEach(o),Lr=h(vs),sn=s(vs,"SPAN",{});var Hl=a(sn);Or=l(Hl,"VisualBertForMultipleChoice"),Hl.forEach(o),vs.forEach(o),Gn=h(t),E=s(t,"DIV",{class:!0});var H=a(E);T(qt.$$.fragment,H),Rr=h(H),an=s(H,"P",{});var Ul=a(an);Nr=l(Ul,`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Ul.forEach(o),Ir=h(H),Ft=s(H,"P",{});var bs=a(Ft);Dr=l(bs,"This model inherits from "),go=s(bs,"A",{href:!0});var Kl=a(go);Sr=l(Kl,"PreTrainedModel"),Kl.forEach(o),Wr=l(bs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bs.forEach(o),Qr=h(H),zt=s(H,"P",{});var ks=a(zt);Hr=l(ks,"This model is also a PyTorch "),Et=s(ks,"A",{href:!0,rel:!0});var Gl=a(Et);Ur=l(Gl,"torch.nn.Module"),Gl.forEach(o),Kr=l(ks,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ks.forEach(o),Gr=h(H),R=s(H,"DIV",{class:!0});var Qe=a(R);T(Pt.$$.fragment,Qe),Jr=h(Qe),de=s(Qe,"P",{});var Fo=a(de);Yr=l(Fo,"The "),_o=s(Fo,"A",{href:!0});var Jl=a(_o);Xr=l(Jl,"VisualBertForMultipleChoice"),Jl.forEach(o),Zr=l(Fo," forward method, overrides the "),rn=s(Fo,"CODE",{});var Yl=a(rn);ei=l(Yl,"__call__"),Yl.forEach(o),ti=l(Fo," special method."),Fo.forEach(o),oi=h(Qe),T(Me.$$.fragment,Qe),ni=h(Qe),T(je.$$.fragment,Qe),Qe.forEach(o),H.forEach(o),Jn=h(t),ce=s(t,"H2",{class:!0});var Ts=a(ce);Ae=s(Ts,"A",{id:!0,class:!0,href:!0});var Xl=a(Ae);ln=s(Xl,"SPAN",{});var Zl=a(ln);T(Mt.$$.fragment,Zl),Zl.forEach(o),Xl.forEach(o),si=h(Ts),dn=s(Ts,"SPAN",{});var ed=a(dn);ai=l(ed,"VisualBertForVisualReasoning"),ed.forEach(o),Ts.forEach(o),Yn=h(t),P=s(t,"DIV",{class:!0});var U=a(P);T(jt.$$.fragment,U),ri=h(U),cn=s(U,"P",{});var td=a(cn);ii=l(td,`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),td.forEach(o),li=h(U),At=s(U,"P",{});var ys=a(At);di=l(ys,"This model inherits from "),vo=s(ys,"A",{href:!0});var od=a(vo);ci=l(od,"PreTrainedModel"),od.forEach(o),pi=l(ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ys.forEach(o),ui=h(U),Ct=s(U,"P",{});var ws=a(Ct);hi=l(ws,"This model is also a PyTorch "),Lt=s(ws,"A",{href:!0,rel:!0});var nd=a(Lt);mi=l(nd,"torch.nn.Module"),nd.forEach(o),fi=l(ws,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ws.forEach(o),gi=h(U),N=s(U,"DIV",{class:!0});var He=a(N);T(Ot.$$.fragment,He),_i=h(He),pe=s(He,"P",{});var zo=a(pe);vi=l(zo,"The "),bo=s(zo,"A",{href:!0});var sd=a(bo);bi=l(sd,"VisualBertForVisualReasoning"),sd.forEach(o),ki=l(zo," forward method, overrides the "),pn=s(zo,"CODE",{});var ad=a(pn);Ti=l(ad,"__call__"),ad.forEach(o),yi=l(zo," special method."),zo.forEach(o),wi=h(He),T(Ce.$$.fragment,He),$i=h(He),T(Le.$$.fragment,He),He.forEach(o),U.forEach(o),Xn=h(t),ue=s(t,"H2",{class:!0});var $s=a(ue);Oe=s($s,"A",{id:!0,class:!0,href:!0});var rd=a(Oe);un=s(rd,"SPAN",{});var id=a(un);T(Rt.$$.fragment,id),id.forEach(o),rd.forEach(o),Vi=h($s),hn=s($s,"SPAN",{});var ld=a(hn);Bi=l(ld,"VisualBertForRegionToPhraseAlignment"),ld.forEach(o),$s.forEach(o),Zn=h(t),M=s(t,"DIV",{class:!0});var K=a(M);T(Nt.$$.fragment,K),xi=h(K),mn=s(K,"P",{});var dd=a(mn);qi=l(dd,`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),dd.forEach(o),Fi=h(K),It=s(K,"P",{});var Vs=a(It);zi=l(Vs,"This model inherits from "),ko=s(Vs,"A",{href:!0});var cd=a(ko);Ei=l(cd,"PreTrainedModel"),cd.forEach(o),Pi=l(Vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs.forEach(o),Mi=h(K),Dt=s(K,"P",{});var Bs=a(Dt);ji=l(Bs,"This model is also a PyTorch "),St=s(Bs,"A",{href:!0,rel:!0});var pd=a(St);Ai=l(pd,"torch.nn.Module"),pd.forEach(o),Ci=l(Bs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bs.forEach(o),Li=h(K),I=s(K,"DIV",{class:!0});var Ue=a(I);T(Wt.$$.fragment,Ue),Oi=h(Ue),he=s(Ue,"P",{});var Eo=a(he);Ri=l(Eo,"The "),To=s(Eo,"A",{href:!0});var ud=a(To);Ni=l(ud,"VisualBertForRegionToPhraseAlignment"),ud.forEach(o),Ii=l(Eo," forward method, overrides the "),fn=s(Eo,"CODE",{});var hd=a(fn);Di=l(hd,"__call__"),hd.forEach(o),Si=l(Eo," special method."),Eo.forEach(o),Wi=h(Ue),T(Re.$$.fragment,Ue),Qi=h(Ue),T(Ne.$$.fragment,Ue),Ue.forEach(o),K.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Md)),c(m,"id","visualbert"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#visualbert"),c(g,"class","relative group"),c(me,"id","overview"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#overview"),c(J,"class","relative group"),c(Je,"href","https://arxiv.org/pdf/1908.03557"),c(Je,"rel","nofollow"),c(Zt,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(_e,"id","usage"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#usage"),c(Y,"class","relative group"),c(oo,"href","/docs/transformers/pr_17910/en/model_doc/bert#transformers.BertTokenizer"),c(Ze,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/visual_bert"),c(Ze,"rel","nofollow"),c(et,"href","https://colab.research.google.com/drive/1bLGxKdldwqnMVA5x4neY7-l_8fKGWQYI?usp=sharing"),c(et,"rel","nofollow"),c(ao,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertModel"),c(ot,"href","https://huggingface.co/gchhablani"),c(ot,"rel","nofollow"),c(nt,"href","https://github.com/uclanlp/visualbert"),c(nt,"rel","nofollow"),c(Te,"id","transformers.VisualBertConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.VisualBertConfig"),c(X,"class","relative group"),c(ro,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertModel"),c(rt,"href","https://huggingface.co/uclanlp/visualbert-vqa-coco-pre"),c(rt,"rel","nofollow"),c(io,"href","/docs/transformers/pr_17910/en/main_classes/configuration#transformers.PretrainedConfig"),c(lo,"href","/docs/transformers/pr_17910/en/main_classes/configuration#transformers.PretrainedConfig"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(we,"id","transformers.VisualBertModel"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.VisualBertModel"),c(te,"class","relative group"),c(co,"href","/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel"),c(pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pt,"rel","nofollow"),c(ht,"href","https://arxiv.org/abs/1706.03762"),c(ht,"rel","nofollow"),c(po,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertModel"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"id","transformers.VisualBertForPreTraining"),c(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Be,"href","#transformers.VisualBertForPreTraining"),c(ne,"class","relative group"),c(uo,"href","/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel"),c(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bt,"rel","nofollow"),c(ho,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"id","transformers.VisualBertForQuestionAnswering"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.VisualBertForQuestionAnswering"),c(re,"class","relative group"),c(mo,"href","/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel"),c(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vt,"rel","nofollow"),c(fo,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertForQuestionAnswering"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"id","transformers.VisualBertForMultipleChoice"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.VisualBertForMultipleChoice"),c(le,"class","relative group"),c(go,"href","/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel"),c(Et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Et,"rel","nofollow"),c(_o,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertForMultipleChoice"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.VisualBertForVisualReasoning"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.VisualBertForVisualReasoning"),c(ce,"class","relative group"),c(vo,"href","/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(bo,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertForVisualReasoning"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.VisualBertForRegionToPhraseAlignment"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.VisualBertForRegionToPhraseAlignment"),c(ue,"class","relative group"),c(ko,"href","/docs/transformers/pr_17910/en/main_classes/model#transformers.PreTrainedModel"),c(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(St,"rel","nofollow"),c(To,"href","/docs/transformers/pr_17910/en/model_doc/visual_bert#transformers.VisualBertForRegionToPhraseAlignment"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,b,f),_(t,g,f),e(g,m),e(m,v),y(r,v,null),e(g,p),e(g,x),e(x,xs),_(t,Bn,f),_(t,J,f),e(J,me),e(me,Mo),y(Ge,Mo,null),e(J,qs),e(J,jo),e(jo,Fs),_(t,xn,f),_(t,fe,f),e(fe,zs),e(fe,Je),e(Je,Es),e(fe,Ps),_(t,qn,f),_(t,Jt,f),e(Jt,Ms),_(t,Fn,f),_(t,Yt,f),e(Yt,Ao),e(Ao,js),_(t,zn,f),_(t,Xt,f),e(Xt,As),_(t,En,f),_(t,ge,f),e(ge,Co),e(Co,Ye),e(Ye,Cs),e(Ye,Zt),e(Zt,Ls),e(Ye,Os),e(ge,Rs),e(ge,Lo),e(Lo,Oo),e(Oo,Ns),_(t,Pn,f),_(t,Y,f),e(Y,_e),e(_e,Ro),y(Xe,Ro,null),e(Y,Is),e(Y,No),e(No,Ds),_(t,Mn,f),_(t,eo,f),e(eo,Ss),_(t,jn,f),_(t,to,f),e(to,Ws),_(t,An,f),_(t,ve,f),e(ve,Qs),e(ve,oo),e(oo,Hs),e(ve,Us),_(t,Cn,f),_(t,be,f),e(be,Io),e(Io,no),e(no,Ze),e(Ze,Ks),e(no,Gs),e(be,Js),e(be,Do),e(Do,so),e(so,et),e(et,Ys),e(so,Xs),_(t,Ln,f),_(t,ke,f),e(ke,Zs),e(ke,ao),e(ao,ea),e(ke,ta),_(t,On,f),y(tt,t,f),_(t,Rn,f),_(t,D,f),e(D,oa),e(D,ot),e(ot,na),e(D,sa),e(D,nt),e(nt,aa),e(D,ra),_(t,Nn,f),_(t,X,f),e(X,Te),e(Te,So),y(st,So,null),e(X,ia),e(X,Wo),e(Wo,la),_(t,In,f),_(t,j,f),y(at,j,null),e(j,da),e(j,Z),e(Z,ca),e(Z,ro),e(ro,pa),e(Z,ua),e(Z,rt),e(rt,ha),e(Z,ma),e(j,fa),e(j,ee),e(ee,ga),e(ee,io),e(io,_a),e(ee,va),e(ee,lo),e(lo,ba),e(ee,ka),e(j,Ta),y(ye,j,null),_(t,Dn,f),_(t,te,f),e(te,we),e(we,Qo),y(it,Qo,null),e(te,ya),e(te,Ho),e(Ho,wa),_(t,Sn,f),_(t,q,f),y(lt,q,null),e(q,$a),e(q,dt),e(dt,Va),e(dt,co),e(co,Ba),e(dt,xa),e(q,qa),e(q,ct),e(ct,Fa),e(ct,pt),e(pt,za),e(ct,Ea),e(q,Pa),e(q,ut),e(ut,Ma),e(ut,ht),e(ht,ja),e(ut,Aa),e(q,Ca),e(q,C),y(mt,C,null),e(C,La),e(C,oe),e(oe,Oa),e(oe,po),e(po,Ra),e(oe,Na),e(oe,Uo),e(Uo,Ia),e(oe,Da),e(C,Sa),y($e,C,null),e(C,Wa),y(Ve,C,null),_(t,Wn,f),_(t,ne,f),e(ne,Be),e(Be,Ko),y(ft,Ko,null),e(ne,Qa),e(ne,Go),e(Go,Ha),_(t,Qn,f),_(t,F,f),y(gt,F,null),e(F,Ua),e(F,se),e(se,Ka),e(se,Jo),e(Jo,Ga),e(se,Ja),e(se,Yo),e(Yo,Ya),e(se,Xa),e(F,Za),e(F,_t),e(_t,er),e(_t,uo),e(uo,tr),e(_t,or),e(F,nr),e(F,vt),e(vt,sr),e(vt,bt),e(bt,ar),e(vt,rr),e(F,ir),e(F,L),y(kt,L,null),e(L,lr),e(L,ae),e(ae,dr),e(ae,ho),e(ho,cr),e(ae,pr),e(ae,Xo),e(Xo,ur),e(ae,hr),e(L,mr),y(xe,L,null),e(L,fr),y(qe,L,null),_(t,Hn,f),_(t,re,f),e(re,Fe),e(Fe,Zo),y(Tt,Zo,null),e(re,gr),e(re,en),e(en,_r),_(t,Un,f),_(t,z,f),y(yt,z,null),e(z,vr),e(z,tn),e(tn,br),e(z,kr),e(z,wt),e(wt,Tr),e(wt,mo),e(mo,yr),e(wt,wr),e(z,$r),e(z,$t),e($t,Vr),e($t,Vt),e(Vt,Br),e($t,xr),e(z,qr),e(z,O),y(Bt,O,null),e(O,Fr),e(O,ie),e(ie,zr),e(ie,fo),e(fo,Er),e(ie,Pr),e(ie,on),e(on,Mr),e(ie,jr),e(O,Ar),y(ze,O,null),e(O,Cr),y(Ee,O,null),_(t,Kn,f),_(t,le,f),e(le,Pe),e(Pe,nn),y(xt,nn,null),e(le,Lr),e(le,sn),e(sn,Or),_(t,Gn,f),_(t,E,f),y(qt,E,null),e(E,Rr),e(E,an),e(an,Nr),e(E,Ir),e(E,Ft),e(Ft,Dr),e(Ft,go),e(go,Sr),e(Ft,Wr),e(E,Qr),e(E,zt),e(zt,Hr),e(zt,Et),e(Et,Ur),e(zt,Kr),e(E,Gr),e(E,R),y(Pt,R,null),e(R,Jr),e(R,de),e(de,Yr),e(de,_o),e(_o,Xr),e(de,Zr),e(de,rn),e(rn,ei),e(de,ti),e(R,oi),y(Me,R,null),e(R,ni),y(je,R,null),_(t,Jn,f),_(t,ce,f),e(ce,Ae),e(Ae,ln),y(Mt,ln,null),e(ce,si),e(ce,dn),e(dn,ai),_(t,Yn,f),_(t,P,f),y(jt,P,null),e(P,ri),e(P,cn),e(cn,ii),e(P,li),e(P,At),e(At,di),e(At,vo),e(vo,ci),e(At,pi),e(P,ui),e(P,Ct),e(Ct,hi),e(Ct,Lt),e(Lt,mi),e(Ct,fi),e(P,gi),e(P,N),y(Ot,N,null),e(N,_i),e(N,pe),e(pe,vi),e(pe,bo),e(bo,bi),e(pe,ki),e(pe,pn),e(pn,Ti),e(pe,yi),e(N,wi),y(Ce,N,null),e(N,$i),y(Le,N,null),_(t,Xn,f),_(t,ue,f),e(ue,Oe),e(Oe,un),y(Rt,un,null),e(ue,Vi),e(ue,hn),e(hn,Bi),_(t,Zn,f),_(t,M,f),y(Nt,M,null),e(M,xi),e(M,mn),e(mn,qi),e(M,Fi),e(M,It),e(It,zi),e(It,ko),e(ko,Ei),e(It,Pi),e(M,Mi),e(M,Dt),e(Dt,ji),e(Dt,St),e(St,Ai),e(Dt,Ci),e(M,Li),e(M,I),y(Wt,I,null),e(I,Oi),e(I,he),e(he,Ri),e(he,To),e(To,Ni),e(he,Ii),e(he,fn),e(fn,Di),e(he,Si),e(I,Wi),y(Re,I,null),e(I,Qi),y(Ne,I,null),es=!0},p(t,[f]){const Qt={};f&2&&(Qt.$$scope={dirty:f,ctx:t}),ye.$set(Qt);const gn={};f&2&&(gn.$$scope={dirty:f,ctx:t}),$e.$set(gn);const _n={};f&2&&(_n.$$scope={dirty:f,ctx:t}),Ve.$set(_n);const vn={};f&2&&(vn.$$scope={dirty:f,ctx:t}),xe.$set(vn);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:t}),qe.$set(Ht);const bn={};f&2&&(bn.$$scope={dirty:f,ctx:t}),ze.$set(bn);const kn={};f&2&&(kn.$$scope={dirty:f,ctx:t}),Ee.$set(kn);const Tn={};f&2&&(Tn.$$scope={dirty:f,ctx:t}),Me.$set(Tn);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:t}),je.$set(Ut);const yn={};f&2&&(yn.$$scope={dirty:f,ctx:t}),Ce.$set(yn);const wn={};f&2&&(wn.$$scope={dirty:f,ctx:t}),Le.$set(wn);const $n={};f&2&&($n.$$scope={dirty:f,ctx:t}),Re.$set($n);const Vn={};f&2&&(Vn.$$scope={dirty:f,ctx:t}),Ne.$set(Vn)},i(t){es||(w(r.$$.fragment,t),w(Ge.$$.fragment,t),w(Xe.$$.fragment,t),w(tt.$$.fragment,t),w(st.$$.fragment,t),w(at.$$.fragment,t),w(ye.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(mt.$$.fragment,t),w($e.$$.fragment,t),w(Ve.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(kt.$$.fragment,t),w(xe.$$.fragment,t),w(qe.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(Bt.$$.fragment,t),w(ze.$$.fragment,t),w(Ee.$$.fragment,t),w(xt.$$.fragment,t),w(qt.$$.fragment,t),w(Pt.$$.fragment,t),w(Me.$$.fragment,t),w(je.$$.fragment,t),w(Mt.$$.fragment,t),w(jt.$$.fragment,t),w(Ot.$$.fragment,t),w(Ce.$$.fragment,t),w(Le.$$.fragment,t),w(Rt.$$.fragment,t),w(Nt.$$.fragment,t),w(Wt.$$.fragment,t),w(Re.$$.fragment,t),w(Ne.$$.fragment,t),es=!0)},o(t){$(r.$$.fragment,t),$(Ge.$$.fragment,t),$(Xe.$$.fragment,t),$(tt.$$.fragment,t),$(st.$$.fragment,t),$(at.$$.fragment,t),$(ye.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(mt.$$.fragment,t),$($e.$$.fragment,t),$(Ve.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(kt.$$.fragment,t),$(xe.$$.fragment,t),$(qe.$$.fragment,t),$(Tt.$$.fragment,t),$(yt.$$.fragment,t),$(Bt.$$.fragment,t),$(ze.$$.fragment,t),$(Ee.$$.fragment,t),$(xt.$$.fragment,t),$(qt.$$.fragment,t),$(Pt.$$.fragment,t),$(Me.$$.fragment,t),$(je.$$.fragment,t),$(Mt.$$.fragment,t),$(jt.$$.fragment,t),$(Ot.$$.fragment,t),$(Ce.$$.fragment,t),$(Le.$$.fragment,t),$(Rt.$$.fragment,t),$(Nt.$$.fragment,t),$(Wt.$$.fragment,t),$(Re.$$.fragment,t),$(Ne.$$.fragment,t),es=!1},d(t){o(d),t&&o(b),t&&o(g),V(r),t&&o(Bn),t&&o(J),V(Ge),t&&o(xn),t&&o(fe),t&&o(qn),t&&o(Jt),t&&o(Fn),t&&o(Yt),t&&o(zn),t&&o(Xt),t&&o(En),t&&o(ge),t&&o(Pn),t&&o(Y),V(Xe),t&&o(Mn),t&&o(eo),t&&o(jn),t&&o(to),t&&o(An),t&&o(ve),t&&o(Cn),t&&o(be),t&&o(Ln),t&&o(ke),t&&o(On),V(tt,t),t&&o(Rn),t&&o(D),t&&o(Nn),t&&o(X),V(st),t&&o(In),t&&o(j),V(at),V(ye),t&&o(Dn),t&&o(te),V(it),t&&o(Sn),t&&o(q),V(lt),V(mt),V($e),V(Ve),t&&o(Wn),t&&o(ne),V(ft),t&&o(Qn),t&&o(F),V(gt),V(kt),V(xe),V(qe),t&&o(Hn),t&&o(re),V(Tt),t&&o(Un),t&&o(z),V(yt),V(Bt),V(ze),V(Ee),t&&o(Kn),t&&o(le),V(xt),t&&o(Gn),t&&o(E),V(qt),V(Pt),V(Me),V(je),t&&o(Jn),t&&o(ce),V(Mt),t&&o(Yn),t&&o(P),V(jt),V(Ot),V(Ce),V(Le),t&&o(Xn),t&&o(ue),V(Rt),t&&o(Zn),t&&o(M),V(Nt),V(Wt),V(Re),V(Ne)}}}const Md={local:"visualbert",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.VisualBertConfig",title:"VisualBertConfig"},{local:"transformers.VisualBertModel",title:"VisualBertModel"},{local:"transformers.VisualBertForPreTraining",title:"VisualBertForPreTraining"},{local:"transformers.VisualBertForQuestionAnswering",title:"VisualBertForQuestionAnswering"},{local:"transformers.VisualBertForMultipleChoice",title:"VisualBertForMultipleChoice"},{local:"transformers.VisualBertForVisualReasoning",title:"VisualBertForVisualReasoning"},{local:"transformers.VisualBertForRegionToPhraseAlignment",title:"VisualBertForRegionToPhraseAlignment"}],title:"VisualBERT"};function jd(B){return vd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Id extends md{constructor(d){super();fd(this,d,jd,Pd,gd,{})}}export{Id as default,Md as metadata};
