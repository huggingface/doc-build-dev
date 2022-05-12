import{S as na,i as oa,s as sa,e as o,k as f,w as $,t as i,M as aa,c as s,d as n,m as h,a,x as M,h as l,b as m,F as e,g as b,y as k,q as w,o as L,B as y,v as ra,L as Re}from"../../chunks/vendor-6b77c823.js";import{T as ta}from"../../chunks/Tip-39098574.js";import{D as Y}from"../../chunks/Docstring-1088f2fb.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as mt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as He}from"../../chunks/ExampleCodeBlock-5212b321.js";function ia(G){let d,_;return d=new Ve({props:{code:`from transformers import GLMModel, GLMConfig

# Initializing a GLM shunxing1234/GLM-base-cased style configuration
configuration = GLMConfig()

# Initializing a model from the shunxing1234/GLM-base-cased style configuration
model = GLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GLMModel, GLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GLM shunxing1234/GLM-base-cased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the shunxing1234/GLM-base-cased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){$(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){k(d,c,p),_=!0},p:Re,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function la(G){let d,_,c,p,v;return p=new Ve({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=o("p"),_=i("pair mask has the following format:"),c=f(),$(p.$$.fragment)},l(r){d=s(r,"P",{});var g=a(d);_=l(g,"pair mask has the following format:"),g.forEach(n),c=h(r),M(p.$$.fragment,r)},m(r,g){b(r,d,g),e(d,_),b(r,c,g),k(p,r,g),v=!0},p:Re,i(r){v||(w(p.$$.fragment,r),v=!0)},o(r){L(p.$$.fragment,r),v=!1},d(r){r&&n(d),r&&n(c),y(p,r)}}}function da(G){let d,_,c,p,v;return{c(){d=o("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var g=a(d);_=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var A=a(c);p=l(A,"Module"),A.forEach(n),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(n)},m(r,g){b(r,d,g),e(d,_),e(d,c),e(c,p),e(d,v)},d(r){r&&n(d)}}}function ca(G){let d,_,c,p,v;return p=new Ve({props:{code:`from transformers import GLMTokenizer, GLMModel
import torch

tokenizer = GLMTokenizer.from_pretrained("shunxing1234/GLM")
model = GLMModel.from_pretrained("shunxing1234/GLM")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GLMTokenizer, GLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GLMTokenizer.from_pretrained(<span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLMModel.from_pretrained(<span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=o("p"),_=i("Example:"),c=f(),$(p.$$.fragment)},l(r){d=s(r,"P",{});var g=a(d);_=l(g,"Example:"),g.forEach(n),c=h(r),M(p.$$.fragment,r)},m(r,g){b(r,d,g),e(d,_),b(r,c,g),k(p,r,g),v=!0},p:Re,i(r){v||(w(p.$$.fragment,r),v=!0)},o(r){L(p.$$.fragment,r),v=!1},d(r){r&&n(d),r&&n(c),y(p,r)}}}function pa(G){let d,_,c,p,v;return{c(){d=o("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var g=a(d);_=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var A=a(c);p=l(A,"Module"),A.forEach(n),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(n)},m(r,g){b(r,d,g),e(d,_),e(d,c),e(c,p),e(d,v)},d(r){r&&n(d)}}}function ma(G){let d,_,c,p,v;return p=new Ve({props:{code:`import torch
from transformers import GLMTokenizer, GLMForSequenceClassification

tokenizer = GLMTokenizer.from_pretrained("shunxing1234/GLM")
model = GLMForSequenceClassification.from_pretrained("shunxing1234/GLM")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GLMTokenizer, GLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GLMTokenizer.from_pretrained(<span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=o("p"),_=i("Example of single-label classification:"),c=f(),$(p.$$.fragment)},l(r){d=s(r,"P",{});var g=a(d);_=l(g,"Example of single-label classification:"),g.forEach(n),c=h(r),M(p.$$.fragment,r)},m(r,g){b(r,d,g),e(d,_),b(r,c,g),k(p,r,g),v=!0},p:Re,i(r){v||(w(p.$$.fragment,r),v=!0)},o(r){L(p.$$.fragment,r),v=!1},d(r){r&&n(d),r&&n(c),y(p,r)}}}function fa(G){let d,_;return d=new Ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GLMForSequenceClassification.from_pretrained("shunxing1234/GLM", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){k(d,c,p),_=!0},p:Re,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function ha(G){let d,_,c,p,v;return p=new Ve({props:{code:`import torch
from transformers import GLMTokenizer, GLMForSequenceClassification

tokenizer = GLMTokenizer.from_pretrained("shunxing1234/GLM")
model = GLMForSequenceClassification.from_pretrained("shunxing1234/GLM", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GLMTokenizer, GLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GLMTokenizer.from_pretrained(<span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=o("p"),_=i("Example of multi-label classification:"),c=f(),$(p.$$.fragment)},l(r){d=s(r,"P",{});var g=a(d);_=l(g,"Example of multi-label classification:"),g.forEach(n),c=h(r),M(p.$$.fragment,r)},m(r,g){b(r,d,g),e(d,_),b(r,c,g),k(p,r,g),v=!0},p:Re,i(r){v||(w(p.$$.fragment,r),v=!0)},o(r){L(p.$$.fragment,r),v=!1},d(r){r&&n(d),r&&n(c),y(p,r)}}}function ua(G){let d,_;return d=new Ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GLMForSequenceClassification.from_pretrained(
    "shunxing1234/GLM", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLMForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;shunxing1234/GLM&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){$(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){k(d,c,p),_=!0},p:Re,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function ga(G){let d,_,c,p,v,r,g,A,hn,Ht,B,Z,ft,_e,un,ht,gn,Rt,ee,_n,be,bn,vn,Vt,Ke,$n,Kt,Je,ut,Mn,Jt,D,kn,ve,wn,Ln,$e,yn,Gn,Xt,W,te,gt,Me,Tn,_t,qn,Qt,j,ke,xn,U,zn,Xe,En,Cn,we,jn,Sn,Pn,H,An,Qe,Fn,Dn,Ye,In,Nn,On,ne,Yt,R,oe,bt,Le,Bn,vt,Wn,Zt,x,ye,Un,$t,Hn,Rn,I,Ge,Vn,Mt,Kn,Jn,Te,Ze,Xn,kt,Qn,Yn,et,Zn,wt,eo,to,S,qe,no,Lt,oo,so,se,ao,V,ro,yt,io,lo,Gt,co,po,mo,tt,xe,en,K,ae,Tt,ze,fo,qt,ho,tn,z,Ee,uo,Ce,go,je,_o,bo,vo,Se,$o,Pe,Mo,ko,wo,q,Lo,xt,yo,Go,zt,To,qo,Et,xo,zo,Ct,Eo,Co,jt,jo,So,St,Po,Ao,Fo,P,Ae,Do,J,Io,nt,No,Oo,Pt,Bo,Wo,Uo,re,Ho,ie,nn,X,le,At,Fe,Ro,Ft,Vo,on,F,De,Ko,Ie,Jo,Ne,Xo,Qo,Yo,T,Oe,Zo,Q,es,ot,ts,ns,Dt,os,ss,as,de,rs,ce,is,pe,ls,me,ds,fe,sn;return r=new mt({}),_e=new mt({}),Me=new mt({}),ke=new Y({props:{name:"class transformers.GLMConfig",anchor:"transformers.GLMConfig",parameters:[{name:"num_layers",val:" = 24"},{name:"vocab_size",val:" = 30592"},{name:"hidden_size",val:" = 1024"},{name:"num_attention_heads",val:" = 16"},{name:"embedding_dropout_prob",val:" = 0.1"},{name:"attention_dropout_prob",val:" = 0.1"},{name:"output_dropout_prob",val:" = 0.1"},{name:"max_sequence_length",val:" = 512"},{name:"max_memory_length",val:" = 0"},{name:"checkpoint_activations",val:" = False"},{name:"checkpoint_num_layers",val:" = 1"},{name:"parallel_output",val:" = True"},{name:"relative_encoding",val:" = False"},{name:"block_position_encoding",val:" = True"},{name:"output_predict",val:" = False"},{name:"spell_length",val:" = None"},{name:"spell_func",val:" = 'lstm'"},{name:"attention_scale",val:" = 1.0"},{name:"initializer_range",val:" = 0.02"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the GLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMModel">~GLMModel</a> or
<code>~TFGLMModel</code>.`,name:"vocab_size"},{anchor:"transformers.GLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler.
If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GLMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.GLMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.GLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with.
Typically set this to something large just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GLMConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMModel">~GLMModel</a> or
<code>~TFGLMModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.GLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GLMConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/configuration_glm.py#L28"}}),ne=new He({props:{anchor:"transformers.GLMConfig.example",$$slots:{default:[ia]},$$scope:{ctx:G}}}),Le=new mt({}),ye=new Y({props:{name:"class transformers.GLMTokenizer",anchor:"transformers.GLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"max_len",val:" = None"},{name:"never_split",val:" = ('[UNK]', '[SEP]', '[PAD]', '[CLS]', '[MASK]')"},{name:"pad_token",val:" = '[PAD]'"},{name:"eos_token",val:" = '[PAD]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"MASK_token",val:" = '[MASK]'"},{name:"sop_token",val:" = '<|startofpiece|>'"},{name:"eop_token",val:" = '<|endofpiece|>'"},{name:"gMASK_token",val:" = '[gMASK]'"},{name:"sMASK_token",val:" = '[sMASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/tokenization_glm.py#L124"}}),Ge=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.GLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.GLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.GLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/tokenization_glm.py#L210",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qe=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.GLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.GLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.GLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/tokenization_glm.py#L234",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),se=new He({props:{anchor:"transformers.GLMTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[la]},$$scope:{ctx:G}}}),xe=new Y({props:{name:"build_input_from_ids",anchor:"transformers.GLMTokenizer.build_input_from_ids",parameters:[{name:"text_a_ids",val:" = None"},{name:"text_b_ids",val:" = None"},{name:"answer_ids",val:" = None"},{name:"max_seq_length",val:" = 16"},{name:"tokenizer",val:" = None"},{name:"args",val:" = None"},{name:"add_cls",val:" = True"},{name:"add_sep",val:" = False"},{name:"add_piece",val:" = False"},{name:"add_eos",val:" = True"},{name:"mask_id",val:" = None"},{name:"masked_lm",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/tokenization_glm.py#L268"}}),ze=new mt({}),Ee=new Y({props:{name:"class transformers.GLMModel",anchor:"transformers.GLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMConfig">~GLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the configuration.
Check out the <a href="/docs/transformers/pr_17113/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/modeling_glm.py#L740"}}),Ae=new Y({props:{name:"forward",anchor:"transformers.GLMModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"mems",val:" = None"},{name:"prompt_pos",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMTokenizer">GLMTokenizer</a>.
See <a href="/docs/transformers/pr_17113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17113/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings.
Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17113/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/modeling_glm.py#L780",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17113/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMConfig"
>GLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17113/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new ta({props:{$$slots:{default:[da]},$$scope:{ctx:G}}}),ie=new He({props:{anchor:"transformers.GLMModel.forward.example",$$slots:{default:[ca]},$$scope:{ctx:G}}}),Fe=new mt({}),De=new Y({props:{name:"class transformers.GLMForSequenceClassification",anchor:"transformers.GLMForSequenceClassification",parameters:[{name:"config",val:""},{name:"pool_token",val:""},{name:"hidden_dropout",val:" = False"},{name:"num_class",val:" = 1"}],parametersDescription:[{anchor:"transformers.GLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMConfig">~GLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the configuration.
Check out the <a href="/docs/transformers/pr_17113/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/modeling_glm.py#L835"}}),Oe=new Y({props:{name:"forward",anchor:"transformers.GLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"labels",val:" = None"}],parametersDescription:[{anchor:"transformers.GLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMTokenizer">GLMTokenizer</a>.
See <a href="/docs/transformers/pr_17113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17113/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings.
Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17113/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17113/src/transformers/models/glm/modeling_glm.py#L850",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17113/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMConfig"
>GLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17113/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new ta({props:{$$slots:{default:[pa]},$$scope:{ctx:G}}}),ce=new He({props:{anchor:"transformers.GLMForSequenceClassification.forward.example",$$slots:{default:[ma]},$$scope:{ctx:G}}}),pe=new He({props:{anchor:"transformers.GLMForSequenceClassification.forward.example-2",$$slots:{default:[fa]},$$scope:{ctx:G}}}),me=new He({props:{anchor:"transformers.GLMForSequenceClassification.forward.example-3",$$slots:{default:[ha]},$$scope:{ctx:G}}}),fe=new He({props:{anchor:"transformers.GLMForSequenceClassification.forward.example-4",$$slots:{default:[ua]},$$scope:{ctx:G}}}),{c(){d=o("meta"),_=f(),c=o("h1"),p=o("a"),v=o("span"),$(r.$$.fragment),g=f(),A=o("span"),hn=i("GLM"),Ht=f(),B=o("h2"),Z=o("a"),ft=o("span"),$(_e.$$.fragment),un=f(),ht=o("span"),gn=i("Overview"),Rt=f(),ee=o("p"),_n=i("The GLM model was proposed in "),be=o("a"),bn=i("GLM: General Language Model Pretraining with Autoregressive Blank Infilling"),vn=i(`
by Zhengxiao Du, Yujie Qian, Xiao Liu, Ming Ding, Jiezhong Qiu, Zhilin Yang, Jie Tang.`),Vt=f(),Ke=o("p"),$n=i("The abstract from the paper is the following:"),Kt=f(),Je=o("p"),ut=o("em"),Mn=i(`There have been various types of pretraining architectures including autoencoding models (e.g., BERT), autoregressive
models (e.g., GPT), and encoder-decoder models (e.g., T5). However, none of the pretraining frameworks performs
the best for all tasks of three main categories including natural language understanding (NLU), unconditional generation,
and conditional generation. We propose a General Language Model (GLM) based on autoregressive blank infilling to address
this challenge. GLM improves blank filling pretraining by adding 2D positional encodings and allowing an arbitrary
order to predict spans, which results in performance gains over BERT and T5 on NLU tasks. Meanwhile, GLM can be pretrained
for different types of tasks by varying the number and lengths of blanks. On a wide range of tasks across NLU, conditional
and unconditional generation, GLM outperforms BERT, T5, and GPT given the same model sizes and data, and achieves the
best performance from a single pretrained model with 1.25x parameters of BERT Large , demonstrating its generalizability
to different downstream tasks.`),Jt=f(),D=o("p"),kn=i("This model was contributed by "),ve=o("a"),wn=i("shunxing1234"),Ln=i(". The original code can be found "),$e=o("a"),yn=i("here"),Gn=i("."),Xt=f(),W=o("h2"),te=o("a"),gt=o("span"),$(Me.$$.fragment),Tn=f(),_t=o("span"),qn=i("XGLMConfig"),Qt=f(),j=o("div"),$(ke.$$.fragment),xn=f(),U=o("p"),zn=i("This is the configuration class to store the configuration of a "),Xe=o("a"),En=i("~GLMModel"),Cn=i(`.
It is used to instantiate an GLM model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of
the GLM `),we=o("a"),jn=i("shunxing1234/GLM-base-cased"),Sn=i(" architecture."),Pn=f(),H=o("p"),An=i("Configuration objects inherit from  "),Qe=o("a"),Fn=i("PretrainedConfig"),Dn=i(` and can be used
to control the model outputs. Read the documentation from  `),Ye=o("a"),In=i("PretrainedConfig"),Nn=i(`
for more information.`),On=f(),$(ne.$$.fragment),Yt=f(),R=o("h2"),oe=o("a"),bt=o("span"),$(Le.$$.fragment),Bn=f(),vt=o("span"),Wn=i("GLMTokenizer"),Zt=f(),x=o("div"),$(ye.$$.fragment),Un=f(),$t=o("p"),Hn=i("Construct a GLM tokenizer. Based on byte-level Byte-Pair-Encoding."),Rn=f(),I=o("div"),$(Ge.$$.fragment),Vn=f(),Mt=o("p"),Kn=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Jn=f(),Te=o("ul"),Ze=o("li"),Xn=i("single sequence: "),kt=o("code"),Qn=i("[CLS] X [SEP]"),Yn=f(),et=o("li"),Zn=i("pair of sequences: "),wt=o("code"),eo=i("[CLS] A [SEP] B [SEP]"),to=f(),S=o("div"),$(qe.$$.fragment),no=f(),Lt=o("p"),oo=i("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),so=f(),$(se.$$.fragment),ao=f(),V=o("p"),ro=i("If "),yt=o("code"),io=i("token_ids_1"),lo=i(" is "),Gt=o("code"),co=i("None"),po=i(", this method only returns the first portion of the mask (0s)."),mo=f(),tt=o("div"),$(xe.$$.fragment),en=f(),K=o("h2"),ae=o("a"),Tt=o("span"),$(ze.$$.fragment),fo=f(),qt=o("span"),ho=i("GLMModel"),tn=f(),z=o("div"),$(Ee.$$.fragment),uo=f(),Ce=o("p"),go=i(`The bare GLM Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),je=o("a"),_o=i("torch.nn.Module"),bo=i(` sub-class.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general
usage and behavior.`),vo=f(),Se=o("p"),$o=i(`The model can behave as an encoder (with only self-attention) as well
as a decoder, in which case a layer of cross-attention is added between
the self-attention layers, following the architecture described in `),Pe=o("a"),Mo=i(`Attention is
all you need`),ko=i(` by Ashish Vaswani,
Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),wo=f(),q=o("p"),Lo=i(`To behave as an decoder the model needs to be initialized with the
`),xt=o("code"),yo=i("is_decoder"),Go=i(" argument of the configuration set to "),zt=o("code"),To=i("True"),qo=i(`.
To be used in a Seq2Seq model, the model needs to initialized with both `),Et=o("code"),xo=i("is_decoder"),zo=i(`
argument and `),Ct=o("code"),Eo=i("add_cross_attention"),Co=i(" set to "),jt=o("code"),jo=i("True"),So=i(`; an
`),St=o("code"),Po=i("encoder_hidden_states"),Ao=i(" is then expected as an input to the forward pass."),Fo=f(),P=o("div"),$(Ae.$$.fragment),Do=f(),J=o("p"),Io=i("The "),nt=o("a"),No=i("GLMModel"),Oo=i(" forward method, overrides the "),Pt=o("code"),Bo=i("__call__"),Wo=i(" special method."),Uo=f(),$(re.$$.fragment),Ho=f(),$(ie.$$.fragment),nn=f(),X=o("h2"),le=o("a"),At=o("span"),$(Fe.$$.fragment),Ro=f(),Ft=o("span"),Vo=i("GLMForSequenceClassification"),on=f(),F=o("div"),$(De.$$.fragment),Ko=f(),Ie=o("p"),Jo=i(`GLM Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.
This model is a PyTorch `),Ne=o("a"),Xo=i("torch.nn.Module"),Qo=i(` sub-class.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general
usage and behavior.`),Yo=f(),T=o("div"),$(Oe.$$.fragment),Zo=f(),Q=o("p"),es=i("The "),ot=o("a"),ts=i("GLMForSequenceClassification"),ns=i(" forward method, overrides the "),Dt=o("code"),os=i("__call__"),ss=i(" special method."),as=f(),$(de.$$.fragment),rs=f(),$(ce.$$.fragment),is=f(),$(pe.$$.fragment),ls=f(),$(me.$$.fragment),ds=f(),$(fe.$$.fragment),this.h()},l(t){const u=aa('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(n),_=h(t),c=s(t,"H1",{class:!0});var Be=a(c);p=s(Be,"A",{id:!0,class:!0,href:!0});var It=a(p);v=s(It,"SPAN",{});var Nt=a(v);M(r.$$.fragment,Nt),Nt.forEach(n),It.forEach(n),g=h(Be),A=s(Be,"SPAN",{});var Ot=a(A);hn=l(Ot,"GLM"),Ot.forEach(n),Be.forEach(n),Ht=h(t),B=s(t,"H2",{class:!0});var We=a(B);Z=s(We,"A",{id:!0,class:!0,href:!0});var Bt=a(Z);ft=s(Bt,"SPAN",{});var Wt=a(ft);M(_e.$$.fragment,Wt),Wt.forEach(n),Bt.forEach(n),un=h(We),ht=s(We,"SPAN",{});var Ut=a(ht);gn=l(Ut,"Overview"),Ut.forEach(n),We.forEach(n),Rt=h(t),ee=s(t,"P",{});var Ue=a(ee);_n=l(Ue,"The GLM model was proposed in "),be=s(Ue,"A",{href:!0,rel:!0});var ms=a(be);bn=l(ms,"GLM: General Language Model Pretraining with Autoregressive Blank Infilling"),ms.forEach(n),vn=l(Ue,`
by Zhengxiao Du, Yujie Qian, Xiao Liu, Ming Ding, Jiezhong Qiu, Zhilin Yang, Jie Tang.`),Ue.forEach(n),Vt=h(t),Ke=s(t,"P",{});var fs=a(Ke);$n=l(fs,"The abstract from the paper is the following:"),fs.forEach(n),Kt=h(t),Je=s(t,"P",{});var hs=a(Je);ut=s(hs,"EM",{});var us=a(ut);Mn=l(us,`There have been various types of pretraining architectures including autoencoding models (e.g., BERT), autoregressive
models (e.g., GPT), and encoder-decoder models (e.g., T5). However, none of the pretraining frameworks performs
the best for all tasks of three main categories including natural language understanding (NLU), unconditional generation,
and conditional generation. We propose a General Language Model (GLM) based on autoregressive blank infilling to address
this challenge. GLM improves blank filling pretraining by adding 2D positional encodings and allowing an arbitrary
order to predict spans, which results in performance gains over BERT and T5 on NLU tasks. Meanwhile, GLM can be pretrained
for different types of tasks by varying the number and lengths of blanks. On a wide range of tasks across NLU, conditional
and unconditional generation, GLM outperforms BERT, T5, and GPT given the same model sizes and data, and achieves the
best performance from a single pretrained model with 1.25x parameters of BERT Large , demonstrating its generalizability
to different downstream tasks.`),us.forEach(n),hs.forEach(n),Jt=h(t),D=s(t,"P",{});var st=a(D);kn=l(st,"This model was contributed by "),ve=s(st,"A",{href:!0,rel:!0});var gs=a(ve);wn=l(gs,"shunxing1234"),gs.forEach(n),Ln=l(st,". The original code can be found "),$e=s(st,"A",{href:!0,rel:!0});var _s=a($e);yn=l(_s,"here"),_s.forEach(n),Gn=l(st,"."),st.forEach(n),Xt=h(t),W=s(t,"H2",{class:!0});var an=a(W);te=s(an,"A",{id:!0,class:!0,href:!0});var bs=a(te);gt=s(bs,"SPAN",{});var vs=a(gt);M(Me.$$.fragment,vs),vs.forEach(n),bs.forEach(n),Tn=h(an),_t=s(an,"SPAN",{});var $s=a(_t);qn=l($s,"XGLMConfig"),$s.forEach(n),an.forEach(n),Qt=h(t),j=s(t,"DIV",{class:!0});var he=a(j);M(ke.$$.fragment,he),xn=h(he),U=s(he,"P",{});var at=a(U);zn=l(at,"This is the configuration class to store the configuration of a "),Xe=s(at,"A",{href:!0});var Ms=a(Xe);En=l(Ms,"~GLMModel"),Ms.forEach(n),Cn=l(at,`.
It is used to instantiate an GLM model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of
the GLM `),we=s(at,"A",{href:!0,rel:!0});var ks=a(we);jn=l(ks,"shunxing1234/GLM-base-cased"),ks.forEach(n),Sn=l(at," architecture."),at.forEach(n),Pn=h(he),H=s(he,"P",{});var rt=a(H);An=l(rt,"Configuration objects inherit from  "),Qe=s(rt,"A",{href:!0});var ws=a(Qe);Fn=l(ws,"PretrainedConfig"),ws.forEach(n),Dn=l(rt,` and can be used
to control the model outputs. Read the documentation from  `),Ye=s(rt,"A",{href:!0});var Ls=a(Ye);In=l(Ls,"PretrainedConfig"),Ls.forEach(n),Nn=l(rt,`
for more information.`),rt.forEach(n),On=h(he),M(ne.$$.fragment,he),he.forEach(n),Yt=h(t),R=s(t,"H2",{class:!0});var rn=a(R);oe=s(rn,"A",{id:!0,class:!0,href:!0});var ys=a(oe);bt=s(ys,"SPAN",{});var Gs=a(bt);M(Le.$$.fragment,Gs),Gs.forEach(n),ys.forEach(n),Bn=h(rn),vt=s(rn,"SPAN",{});var Ts=a(vt);Wn=l(Ts,"GLMTokenizer"),Ts.forEach(n),rn.forEach(n),Zt=h(t),x=s(t,"DIV",{class:!0});var N=a(x);M(ye.$$.fragment,N),Un=h(N),$t=s(N,"P",{});var qs=a($t);Hn=l(qs,"Construct a GLM tokenizer. Based on byte-level Byte-Pair-Encoding."),qs.forEach(n),Rn=h(N),I=s(N,"DIV",{class:!0});var it=a(I);M(Ge.$$.fragment,it),Vn=h(it),Mt=s(it,"P",{});var xs=a(Mt);Kn=l(xs,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),xs.forEach(n),Jn=h(it),Te=s(it,"UL",{});var ln=a(Te);Ze=s(ln,"LI",{});var cs=a(Ze);Xn=l(cs,"single sequence: "),kt=s(cs,"CODE",{});var zs=a(kt);Qn=l(zs,"[CLS] X [SEP]"),zs.forEach(n),cs.forEach(n),Yn=h(ln),et=s(ln,"LI",{});var ps=a(et);Zn=l(ps,"pair of sequences: "),wt=s(ps,"CODE",{});var Es=a(wt);eo=l(Es,"[CLS] A [SEP] B [SEP]"),Es.forEach(n),ps.forEach(n),ln.forEach(n),it.forEach(n),to=h(N),S=s(N,"DIV",{class:!0});var ue=a(S);M(qe.$$.fragment,ue),no=h(ue),Lt=s(ue,"P",{});var Cs=a(Lt);oo=l(Cs,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Cs.forEach(n),so=h(ue),M(se.$$.fragment,ue),ao=h(ue),V=s(ue,"P",{});var lt=a(V);ro=l(lt,"If "),yt=s(lt,"CODE",{});var js=a(yt);io=l(js,"token_ids_1"),js.forEach(n),lo=l(lt," is "),Gt=s(lt,"CODE",{});var Ss=a(Gt);co=l(Ss,"None"),Ss.forEach(n),po=l(lt,", this method only returns the first portion of the mask (0s)."),lt.forEach(n),ue.forEach(n),mo=h(N),tt=s(N,"DIV",{class:!0});var Ps=a(tt);M(xe.$$.fragment,Ps),Ps.forEach(n),N.forEach(n),en=h(t),K=s(t,"H2",{class:!0});var dn=a(K);ae=s(dn,"A",{id:!0,class:!0,href:!0});var As=a(ae);Tt=s(As,"SPAN",{});var Fs=a(Tt);M(ze.$$.fragment,Fs),Fs.forEach(n),As.forEach(n),fo=h(dn),qt=s(dn,"SPAN",{});var Ds=a(qt);ho=l(Ds,"GLMModel"),Ds.forEach(n),dn.forEach(n),tn=h(t),z=s(t,"DIV",{class:!0});var O=a(z);M(Ee.$$.fragment,O),uo=h(O),Ce=s(O,"P",{});var cn=a(Ce);go=l(cn,`The bare GLM Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),je=s(cn,"A",{href:!0,rel:!0});var Is=a(je);_o=l(Is,"torch.nn.Module"),Is.forEach(n),bo=l(cn,` sub-class.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general
usage and behavior.`),cn.forEach(n),vo=h(O),Se=s(O,"P",{});var pn=a(Se);$o=l(pn,`The model can behave as an encoder (with only self-attention) as well
as a decoder, in which case a layer of cross-attention is added between
the self-attention layers, following the architecture described in `),Pe=s(pn,"A",{href:!0,rel:!0});var Ns=a(Pe);Mo=l(Ns,`Attention is
all you need`),Ns.forEach(n),ko=l(pn,` by Ashish Vaswani,
Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),pn.forEach(n),wo=h(O),q=s(O,"P",{});var E=a(q);Lo=l(E,`To behave as an decoder the model needs to be initialized with the
`),xt=s(E,"CODE",{});var Os=a(xt);yo=l(Os,"is_decoder"),Os.forEach(n),Go=l(E," argument of the configuration set to "),zt=s(E,"CODE",{});var Bs=a(zt);To=l(Bs,"True"),Bs.forEach(n),qo=l(E,`.
To be used in a Seq2Seq model, the model needs to initialized with both `),Et=s(E,"CODE",{});var Ws=a(Et);xo=l(Ws,"is_decoder"),Ws.forEach(n),zo=l(E,`
argument and `),Ct=s(E,"CODE",{});var Us=a(Ct);Eo=l(Us,"add_cross_attention"),Us.forEach(n),Co=l(E," set to "),jt=s(E,"CODE",{});var Hs=a(jt);jo=l(Hs,"True"),Hs.forEach(n),So=l(E,`; an
`),St=s(E,"CODE",{});var Rs=a(St);Po=l(Rs,"encoder_hidden_states"),Rs.forEach(n),Ao=l(E," is then expected as an input to the forward pass."),E.forEach(n),Fo=h(O),P=s(O,"DIV",{class:!0});var ge=a(P);M(Ae.$$.fragment,ge),Do=h(ge),J=s(ge,"P",{});var dt=a(J);Io=l(dt,"The "),nt=s(dt,"A",{href:!0});var Vs=a(nt);No=l(Vs,"GLMModel"),Vs.forEach(n),Oo=l(dt," forward method, overrides the "),Pt=s(dt,"CODE",{});var Ks=a(Pt);Bo=l(Ks,"__call__"),Ks.forEach(n),Wo=l(dt," special method."),dt.forEach(n),Uo=h(ge),M(re.$$.fragment,ge),Ho=h(ge),M(ie.$$.fragment,ge),ge.forEach(n),O.forEach(n),nn=h(t),X=s(t,"H2",{class:!0});var mn=a(X);le=s(mn,"A",{id:!0,class:!0,href:!0});var Js=a(le);At=s(Js,"SPAN",{});var Xs=a(At);M(Fe.$$.fragment,Xs),Xs.forEach(n),Js.forEach(n),Ro=h(mn),Ft=s(mn,"SPAN",{});var Qs=a(Ft);Vo=l(Qs,"GLMForSequenceClassification"),Qs.forEach(n),mn.forEach(n),on=h(t),F=s(t,"DIV",{class:!0});var ct=a(F);M(De.$$.fragment,ct),Ko=h(ct),Ie=s(ct,"P",{});var fn=a(Ie);Jo=l(fn,`GLM Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.
This model is a PyTorch `),Ne=s(fn,"A",{href:!0,rel:!0});var Ys=a(Ne);Xo=l(Ys,"torch.nn.Module"),Ys.forEach(n),Qo=l(fn,` sub-class.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general
usage and behavior.`),fn.forEach(n),Yo=h(ct),T=s(ct,"DIV",{class:!0});var C=a(T);M(Oe.$$.fragment,C),Zo=h(C),Q=s(C,"P",{});var pt=a(Q);es=l(pt,"The "),ot=s(pt,"A",{href:!0});var Zs=a(ot);ts=l(Zs,"GLMForSequenceClassification"),Zs.forEach(n),ns=l(pt," forward method, overrides the "),Dt=s(pt,"CODE",{});var ea=a(Dt);os=l(ea,"__call__"),ea.forEach(n),ss=l(pt," special method."),pt.forEach(n),as=h(C),M(de.$$.fragment,C),rs=h(C),M(ce.$$.fragment,C),is=h(C),M(pe.$$.fragment,C),ls=h(C),M(me.$$.fragment,C),ds=h(C),M(fe.$$.fragment,C),C.forEach(n),ct.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(_a)),m(p,"id","glm"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#glm"),m(c,"class","relative group"),m(Z,"id","overview"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#overview"),m(B,"class","relative group"),m(be,"href","https://arxiv.org/abs/2103.10360"),m(be,"rel","nofollow"),m(ve,"href","https://huggingface.co/BAAI"),m(ve,"rel","nofollow"),m($e,"href","https://github.com/THUDM/GLM"),m($e,"rel","nofollow"),m(te,"id","transformers.GLMConfig"),m(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(te,"href","#transformers.GLMConfig"),m(W,"class","relative group"),m(Xe,"href","/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMModel"),m(we,"href","https://huggingface.co/shunxing1234/GLM-base-cased"),m(we,"rel","nofollow"),m(Qe,"href","/docs/transformers/pr_17113/en/main_classes/configuration#transformers.PretrainedConfig"),m(Ye,"href","/docs/transformers/pr_17113/en/main_classes/configuration#transformers.PretrainedConfig"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oe,"id","transformers.GLMTokenizer"),m(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(oe,"href","#transformers.GLMTokenizer"),m(R,"class","relative group"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ae,"id","transformers.GLMModel"),m(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ae,"href","#transformers.GLMModel"),m(K,"class","relative group"),m(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(je,"rel","nofollow"),m(Pe,"href","https://arxiv.org/abs/1706.03762"),m(Pe,"rel","nofollow"),m(nt,"href","/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMModel"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"id","transformers.GLMForSequenceClassification"),m(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(le,"href","#transformers.GLMForSequenceClassification"),m(X,"class","relative group"),m(Ne,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ne,"rel","nofollow"),m(ot,"href","/docs/transformers/pr_17113/en/model_doc/glm#transformers.GLMForSequenceClassification"),m(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),b(t,_,u),b(t,c,u),e(c,p),e(p,v),k(r,v,null),e(c,g),e(c,A),e(A,hn),b(t,Ht,u),b(t,B,u),e(B,Z),e(Z,ft),k(_e,ft,null),e(B,un),e(B,ht),e(ht,gn),b(t,Rt,u),b(t,ee,u),e(ee,_n),e(ee,be),e(be,bn),e(ee,vn),b(t,Vt,u),b(t,Ke,u),e(Ke,$n),b(t,Kt,u),b(t,Je,u),e(Je,ut),e(ut,Mn),b(t,Jt,u),b(t,D,u),e(D,kn),e(D,ve),e(ve,wn),e(D,Ln),e(D,$e),e($e,yn),e(D,Gn),b(t,Xt,u),b(t,W,u),e(W,te),e(te,gt),k(Me,gt,null),e(W,Tn),e(W,_t),e(_t,qn),b(t,Qt,u),b(t,j,u),k(ke,j,null),e(j,xn),e(j,U),e(U,zn),e(U,Xe),e(Xe,En),e(U,Cn),e(U,we),e(we,jn),e(U,Sn),e(j,Pn),e(j,H),e(H,An),e(H,Qe),e(Qe,Fn),e(H,Dn),e(H,Ye),e(Ye,In),e(H,Nn),e(j,On),k(ne,j,null),b(t,Yt,u),b(t,R,u),e(R,oe),e(oe,bt),k(Le,bt,null),e(R,Bn),e(R,vt),e(vt,Wn),b(t,Zt,u),b(t,x,u),k(ye,x,null),e(x,Un),e(x,$t),e($t,Hn),e(x,Rn),e(x,I),k(Ge,I,null),e(I,Vn),e(I,Mt),e(Mt,Kn),e(I,Jn),e(I,Te),e(Te,Ze),e(Ze,Xn),e(Ze,kt),e(kt,Qn),e(Te,Yn),e(Te,et),e(et,Zn),e(et,wt),e(wt,eo),e(x,to),e(x,S),k(qe,S,null),e(S,no),e(S,Lt),e(Lt,oo),e(S,so),k(se,S,null),e(S,ao),e(S,V),e(V,ro),e(V,yt),e(yt,io),e(V,lo),e(V,Gt),e(Gt,co),e(V,po),e(x,mo),e(x,tt),k(xe,tt,null),b(t,en,u),b(t,K,u),e(K,ae),e(ae,Tt),k(ze,Tt,null),e(K,fo),e(K,qt),e(qt,ho),b(t,tn,u),b(t,z,u),k(Ee,z,null),e(z,uo),e(z,Ce),e(Ce,go),e(Ce,je),e(je,_o),e(Ce,bo),e(z,vo),e(z,Se),e(Se,$o),e(Se,Pe),e(Pe,Mo),e(Se,ko),e(z,wo),e(z,q),e(q,Lo),e(q,xt),e(xt,yo),e(q,Go),e(q,zt),e(zt,To),e(q,qo),e(q,Et),e(Et,xo),e(q,zo),e(q,Ct),e(Ct,Eo),e(q,Co),e(q,jt),e(jt,jo),e(q,So),e(q,St),e(St,Po),e(q,Ao),e(z,Fo),e(z,P),k(Ae,P,null),e(P,Do),e(P,J),e(J,Io),e(J,nt),e(nt,No),e(J,Oo),e(J,Pt),e(Pt,Bo),e(J,Wo),e(P,Uo),k(re,P,null),e(P,Ho),k(ie,P,null),b(t,nn,u),b(t,X,u),e(X,le),e(le,At),k(Fe,At,null),e(X,Ro),e(X,Ft),e(Ft,Vo),b(t,on,u),b(t,F,u),k(De,F,null),e(F,Ko),e(F,Ie),e(Ie,Jo),e(Ie,Ne),e(Ne,Xo),e(Ie,Qo),e(F,Yo),e(F,T),k(Oe,T,null),e(T,Zo),e(T,Q),e(Q,es),e(Q,ot),e(ot,ts),e(Q,ns),e(Q,Dt),e(Dt,os),e(Q,ss),e(T,as),k(de,T,null),e(T,rs),k(ce,T,null),e(T,is),k(pe,T,null),e(T,ls),k(me,T,null),e(T,ds),k(fe,T,null),sn=!0},p(t,[u]){const Be={};u&2&&(Be.$$scope={dirty:u,ctx:t}),ne.$set(Be);const It={};u&2&&(It.$$scope={dirty:u,ctx:t}),se.$set(It);const Nt={};u&2&&(Nt.$$scope={dirty:u,ctx:t}),re.$set(Nt);const Ot={};u&2&&(Ot.$$scope={dirty:u,ctx:t}),ie.$set(Ot);const We={};u&2&&(We.$$scope={dirty:u,ctx:t}),de.$set(We);const Bt={};u&2&&(Bt.$$scope={dirty:u,ctx:t}),ce.$set(Bt);const Wt={};u&2&&(Wt.$$scope={dirty:u,ctx:t}),pe.$set(Wt);const Ut={};u&2&&(Ut.$$scope={dirty:u,ctx:t}),me.$set(Ut);const Ue={};u&2&&(Ue.$$scope={dirty:u,ctx:t}),fe.$set(Ue)},i(t){sn||(w(r.$$.fragment,t),w(_e.$$.fragment,t),w(Me.$$.fragment,t),w(ke.$$.fragment,t),w(ne.$$.fragment,t),w(Le.$$.fragment,t),w(ye.$$.fragment,t),w(Ge.$$.fragment,t),w(qe.$$.fragment,t),w(se.$$.fragment,t),w(xe.$$.fragment,t),w(ze.$$.fragment,t),w(Ee.$$.fragment,t),w(Ae.$$.fragment,t),w(re.$$.fragment,t),w(ie.$$.fragment,t),w(Fe.$$.fragment,t),w(De.$$.fragment,t),w(Oe.$$.fragment,t),w(de.$$.fragment,t),w(ce.$$.fragment,t),w(pe.$$.fragment,t),w(me.$$.fragment,t),w(fe.$$.fragment,t),sn=!0)},o(t){L(r.$$.fragment,t),L(_e.$$.fragment,t),L(Me.$$.fragment,t),L(ke.$$.fragment,t),L(ne.$$.fragment,t),L(Le.$$.fragment,t),L(ye.$$.fragment,t),L(Ge.$$.fragment,t),L(qe.$$.fragment,t),L(se.$$.fragment,t),L(xe.$$.fragment,t),L(ze.$$.fragment,t),L(Ee.$$.fragment,t),L(Ae.$$.fragment,t),L(re.$$.fragment,t),L(ie.$$.fragment,t),L(Fe.$$.fragment,t),L(De.$$.fragment,t),L(Oe.$$.fragment,t),L(de.$$.fragment,t),L(ce.$$.fragment,t),L(pe.$$.fragment,t),L(me.$$.fragment,t),L(fe.$$.fragment,t),sn=!1},d(t){n(d),t&&n(_),t&&n(c),y(r),t&&n(Ht),t&&n(B),y(_e),t&&n(Rt),t&&n(ee),t&&n(Vt),t&&n(Ke),t&&n(Kt),t&&n(Je),t&&n(Jt),t&&n(D),t&&n(Xt),t&&n(W),y(Me),t&&n(Qt),t&&n(j),y(ke),y(ne),t&&n(Yt),t&&n(R),y(Le),t&&n(Zt),t&&n(x),y(ye),y(Ge),y(qe),y(se),y(xe),t&&n(en),t&&n(K),y(ze),t&&n(tn),t&&n(z),y(Ee),y(Ae),y(re),y(ie),t&&n(nn),t&&n(X),y(Fe),t&&n(on),t&&n(F),y(De),y(Oe),y(de),y(ce),y(pe),y(me),y(fe)}}}const _a={local:"glm",sections:[{local:"overview",title:"Overview"},{local:"transformers.GLMConfig",title:"XGLMConfig"},{local:"transformers.GLMTokenizer",title:"GLMTokenizer"},{local:"transformers.GLMModel",title:"GLMModel"},{local:"transformers.GLMForSequenceClassification",title:"GLMForSequenceClassification"}],title:"GLM"};function ba(G){return ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ya extends na{constructor(d){super();oa(this,d,ba,ga,sa,{})}}export{ya as default,_a as metadata};
