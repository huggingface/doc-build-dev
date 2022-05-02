import{S as fs,i as us,s as gs,e as n,k as m,w as b,t as i,M as _s,c as s,d as t,m as f,a,x as k,h as l,b as h,F as o,g,y as w,q as P,o as $,B as y,v as Ts,L as nt}from"../../chunks/vendor-6b77c823.js";import{T as Mn}from"../../chunks/Tip-39098574.js";import{D as eo}from"../../chunks/Docstring-1088f2fb.js";import{C as oo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ae}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as tt}from"../../chunks/ExampleCodeBlock-5212b321.js";function vs(G){let d,T;return d=new oo({props:{code:`from transformers import GPTNeoXModel, GPTNeoXConfig

# Initializing a GPTNeoX gpt-neox-20b style configuration
configuration = GPTNeoXConfig()

# Initializing a model from the gpt-neox-20b style configuration
model = GPTNeoXModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXModel, GPTNeoXConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPTNeoX gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTNeoXConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,u){w(d,p,u),T=!0},p:nt,i(p){T||(P(d.$$.fragment,p),T=!0)},o(p){$(d.$$.fragment,p),T=!1},d(p){y(d,p)}}}function bs(G){let d,T,p,u,v;return u=new oo({props:{code:`from transformers import GPTNeoXTokenizerFast
tokenizer = GPTNeoXTokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=n("p"),T=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=m(),b(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),_.forEach(t),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),o(d,T),g(r,p,_),w(u,r,_),v=!0},p:nt,i(r){v||(P(u.$$.fragment,r),v=!0)},o(r){$(u.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(p),y(u,r)}}}function ks(G){let d,T,p,u,v,r,_,X;return{c(){d=n("p"),T=i("When used with "),p=n("code"),u=i("is_split_into_words=True"),v=i(", this tokenizer needs to be instantiated with "),r=n("code"),_=i("add_prefix_space=True"),X=i(".")},l(A){d=s(A,"P",{});var z=a(d);T=l(z,"When used with "),p=s(z,"CODE",{});var C=a(p);u=l(C,"is_split_into_words=True"),C.forEach(t),v=l(z,", this tokenizer needs to be instantiated with "),r=s(z,"CODE",{});var q=a(r);_=l(q,"add_prefix_space=True"),q.forEach(t),X=l(z,"."),z.forEach(t)},m(A,z){g(A,d,z),o(d,T),o(d,p),o(p,u),o(d,v),o(d,r),o(r,_),o(d,X)},d(A){A&&t(d)}}}function ws(G){let d,T,p,u,v;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);u=l(X,"Module"),X.forEach(t),v=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(r,_){g(r,d,_),o(d,T),o(d,p),o(p,u),o(d,v)},d(r){r&&t(d)}}}function Ps(G){let d,T,p,u,v;return u=new oo({props:{code:`from transformers import GPTNeoXTokenizerFast, GPTNeoXModel
import torch

tokenizer = GPTNeoXTokenizerFast.from_pretrained("gpt-neox-20b")
model = GPTNeoXModel.from_pretrained("gpt-neox-20b")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast, GPTNeoXModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=i("Example:"),p=m(),b(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(t),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),o(d,T),g(r,p,_),w(u,r,_),v=!0},p:nt,i(r){v||(P(u.$$.fragment,r),v=!0)},o(r){$(u.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(p),y(u,r)}}}function $s(G){let d,T,p,u,v;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);u=l(X,"Module"),X.forEach(t),v=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(r,_){g(r,d,_),o(d,T),o(d,p),o(p,u),o(d,v)},d(r){r&&t(d)}}}function ys(G){let d,T,p,u,v;return u=new oo({props:{code:`from transformers import GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
import torch

tokenizer = GPTNeoXTokenizer.from_pretrained("gpt-neox-20b")
config = GPTNeoXConfig.from_pretrained("gpt-neox-20b")
config.is_decoder = True
model = GPTNeoXForCausalLM.from_pretrained("gpt-neox-20b", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = GPTNeoXConfig.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),T=i("Example:"),p=m(),b(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(t),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),o(d,T),g(r,p,_),w(u,r,_),v=!0},p:nt,i(r){v||(P(u.$$.fragment,r),v=!0)},o(r){$(u.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(p),y(u,r)}}}function Ns(G){let d,T,p,u,v,r,_,X,A,z,C,q,to,me,st,no,at,Go,R,rt,fe,it,lt,Xo,Y,dt,ue,ct,pt,xo,Ie,ht,zo,ge,Mo,Se,mt,Co,I,K,so,_e,ft,ao,ut,Eo,Q,gt,ro,_t,Tt,Fo,Te,qo,S,Z,io,ve,vt,lo,bt,jo,M,be,kt,D,wt,De,Pt,$t,ke,yt,Nt,Gt,W,Xt,We,xt,zt,Be,Mt,Ct,Et,ee,Lo,B,oe,co,we,Ft,po,qt,Ao,N,Pe,jt,$e,Lt,ho,At,It,St,mo,Dt,Wt,te,Bt,ye,Ot,fo,Ht,Vt,Ut,ne,Jt,Ne,Rt,Oe,Yt,Kt,Io,O,se,uo,Ge,Qt,go,Zt,So,j,Xe,en,xe,on,ze,tn,nn,sn,E,Me,an,H,rn,He,ln,dn,_o,cn,pn,hn,ae,mn,re,Do,V,ie,To,Ce,fn,vo,un,Wo,L,Ee,gn,U,_n,bo,Tn,vn,Fe,bn,kn,wn,F,qe,Pn,J,$n,Ve,yn,Nn,ko,Gn,Xn,xn,le,zn,de,Bo;return r=new Ae({}),me=new Ae({}),ge=new oo({props:{code:'model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b").half().cuda()',highlighted:'model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>).half().cuda()'}}),_e=new Ae({}),Te=new oo({props:{code:`from transformers import GPTNeoXForCausalLM, GPTNeoXTokenizerFast

model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b")
tokenizer = GPTNeoXTokenizerFast.from_pretrained("EleutherAI/gpt-neox-20b")

prompt = (
    "GPTNeoX20B is a 20B-parameter autoregressive Transformer model developed by EleutherAI."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXForCausalLM, GPTNeoXTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;GPTNeoX20B is a 20B-parameter autoregressive Transformer model developed by EleutherAI.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),ve=new Ae({}),be=new eo({props:{name:"class transformers.GPTNeoXConfig",anchor:"transformers.GPTNeoXConfig",parameters:[{name:"vocab_size",val:" = 50432"},{name:"hidden_size",val:" = 6144"},{name:"num_hidden_layers",val:" = 44"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 24576"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"rotary_pct",val:" = 0.25"},{name:"rotary_emb_base",val:" = 10000"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the GPTNeoX model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel">GPTNeoXModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoXConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GPTNeoXConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GPTNeoXConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GPTNeoXConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GPTNeoXConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GPTNeoXConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.GPTNeoXConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.GPTNeoXConfig.rotary_pct",description:`<strong>rotary_pct</strong> (<code>float</code>, <em>optional</em>, defaults to 0.25) &#x2014;
percentage of hidden dimensions to allocate to rotary embeddings`,name:"rotary_pct"},{anchor:"transformers.GPTNeoXConfig.rotary_emb_base",description:`<strong>rotary_emb_base</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
base for computing rotary embeddings frequency`,name:"rotary_emb_base"},{anchor:"transformers.GPTNeoXConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GPTNeoXConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoXConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GPTNeoXConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16659/src/transformers/models/gpt_neox/configuration_gpt_neox.py#L29"}}),ee=new tt({props:{anchor:"transformers.GPTNeoXConfig.example",$$slots:{default:[vs]},$$scope:{ctx:G}}}),we=new Ae({}),Pe=new eo({props:{name:"class transformers.GPTNeoXTokenizerFast",anchor:"transformers.GPTNeoXTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPTNeoXTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPTNeoXTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPTNeoXTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPTNeoXTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPTNeoX tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.GPTNeoXTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_16659/src/transformers/models/gpt_neox/tokenization_gpt_neox_fast.py#L44"}}),te=new tt({props:{anchor:"transformers.GPTNeoXTokenizerFast.example",$$slots:{default:[bs]},$$scope:{ctx:G}}}),ne=new Mn({props:{$$slots:{default:[ks]},$$scope:{ctx:G}}}),Ge=new Ae({}),Xe=new eo({props:{name:"class transformers.GPTNeoXModel",anchor:"transformers.GPTNeoXModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16659/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L408"}}),Me=new eo({props:{name:"forward",anchor:"transformers.GPTNeoXModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/pr_16659/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16659/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoXModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16659/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new Mn({props:{$$slots:{default:[ws]},$$scope:{ctx:G}}}),re=new tt({props:{anchor:"transformers.GPTNeoXModel.forward.example",$$slots:{default:[Ps]},$$scope:{ctx:G}}}),Ce=new Ae({}),Ee=new eo({props:{name:"class transformers.GPTNeoXForCausalLM",anchor:"transformers.GPTNeoXForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16659/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L546"}}),qe=new eo({props:{name:"forward",anchor:"transformers.GPTNeoXForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/pr_16659/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16659/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16659/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional tensors are
only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.GPTNeoXForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L565",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Mn({props:{$$slots:{default:[$s]},$$scope:{ctx:G}}}),de=new tt({props:{anchor:"transformers.GPTNeoXForCausalLM.forward.example",$$slots:{default:[ys]},$$scope:{ctx:G}}}),{c(){d=n("meta"),T=m(),p=n("h1"),u=n("a"),v=n("span"),b(r.$$.fragment),_=m(),X=n("span"),A=i("GPT-NeoX"),z=m(),C=n("h2"),q=n("a"),to=n("span"),b(me.$$.fragment),st=m(),no=n("span"),at=i("Overview"),Go=m(),R=n("p"),rt=i(`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe \\model{}\u2018s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at
`),fe=n("a"),it=i("EleutherAI/gpt-neox"),lt=i("."),Xo=m(),Y=n("p"),dt=i(`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),ue=n("a"),ct=i("CoreWeave"),pt=i("."),xo=m(),Ie=n("p"),ht=i("GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),zo=m(),b(ge.$$.fragment),Mo=m(),Se=n("p"),mt=i(`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),Co=m(),I=n("h3"),K=n("a"),so=n("span"),b(_e.$$.fragment),ft=m(),ao=n("span"),ut=i("Generation"),Eo=m(),Q=n("p"),gt=i("The "),ro=n("code"),_t=i("generate()"),Tt=i(" method can be used to generate text using GPT Neo model."),Fo=m(),b(Te.$$.fragment),qo=m(),S=n("h2"),Z=n("a"),io=n("span"),b(ve.$$.fragment),vt=m(),lo=n("span"),bt=i("GPTNeoXConfig"),jo=m(),M=n("div"),b(be.$$.fragment),kt=m(),D=n("p"),wt=i("This is the configuration class to store the configuration of a "),De=n("a"),Pt=i("GPTNeoXModel"),$t=i(`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=n("a"),yt=i("gpt-neox-20b"),Nt=i(" architecture."),Gt=m(),W=n("p"),Xt=i("Configuration objects inherit from "),We=n("a"),xt=i("PretrainedConfig"),zt=i(` and can be used to control the model outputs. Read the
documentation from `),Be=n("a"),Mt=i("PretrainedConfig"),Ct=i(" for more information."),Et=m(),b(ee.$$.fragment),Lo=m(),B=n("h2"),oe=n("a"),co=n("span"),b(we.$$.fragment),Ft=m(),po=n("span"),qt=i("GPTNeoXTokenizerFast"),Ao=m(),N=n("div"),b(Pe.$$.fragment),jt=m(),$e=n("p"),Lt=i("Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),ho=n("em"),At=i("tokenizers"),It=i(` library). Based on byte-level
Byte-Pair-Encoding.`),St=m(),mo=n("p"),Dt=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Wt=m(),b(te.$$.fragment),Bt=m(),ye=n("p"),Ot=i("You can get around that behavior by passing "),fo=n("code"),Ht=i("add_prefix_space=True"),Vt=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Ut=m(),b(ne.$$.fragment),Jt=m(),Ne=n("p"),Rt=i("This tokenizer inherits from "),Oe=n("a"),Yt=i("PreTrainedTokenizerFast"),Kt=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Io=m(),O=n("h2"),se=n("a"),uo=n("span"),b(Ge.$$.fragment),Qt=m(),go=n("span"),Zt=i("GPTNeoXModel"),So=m(),j=n("div"),b(Xe.$$.fragment),en=m(),xe=n("p"),on=i(`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=n("a"),tn=i("torch.nn.Module"),nn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sn=m(),E=n("div"),b(Me.$$.fragment),an=m(),H=n("p"),rn=i("The "),He=n("a"),ln=i("GPTNeoXModel"),dn=i(" forward method, overrides the "),_o=n("code"),cn=i("__call__"),pn=i(" special method."),hn=m(),b(ae.$$.fragment),mn=m(),b(re.$$.fragment),Do=m(),V=n("h2"),ie=n("a"),To=n("span"),b(Ce.$$.fragment),fn=m(),vo=n("span"),un=i("GPTNeoXForCausalLM"),Wo=m(),L=n("div"),b(Ee.$$.fragment),gn=m(),U=n("p"),_n=i("GPTNeoX Model with a "),bo=n("code"),Tn=i("language modeling"),vn=i(` head on top for CLM fine-tuning.
This model is a PyTorch `),Fe=n("a"),bn=i("torch.nn.Module"),kn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wn=m(),F=n("div"),b(qe.$$.fragment),Pn=m(),J=n("p"),$n=i("The "),Ve=n("a"),yn=i("GPTNeoXForCausalLM"),Nn=i(" forward method, overrides the "),ko=n("code"),Gn=i("__call__"),Xn=i(" special method."),xn=m(),b(le.$$.fragment),zn=m(),b(de.$$.fragment),this.h()},l(e){const c=_s('[data-svelte="svelte-1phssyn"]',document.head);d=s(c,"META",{name:!0,content:!0}),c.forEach(t),T=f(e),p=s(e,"H1",{class:!0});var je=a(p);u=s(je,"A",{id:!0,class:!0,href:!0});var wo=a(u);v=s(wo,"SPAN",{});var Po=a(v);k(r.$$.fragment,Po),Po.forEach(t),wo.forEach(t),_=f(je),X=s(je,"SPAN",{});var $o=a(X);A=l($o,"GPT-NeoX"),$o.forEach(t),je.forEach(t),z=f(e),C=s(e,"H2",{class:!0});var Le=a(C);q=s(Le,"A",{id:!0,class:!0,href:!0});var yo=a(q);to=s(yo,"SPAN",{});var No=a(to);k(me.$$.fragment,No),No.forEach(t),yo.forEach(t),st=f(Le),no=s(Le,"SPAN",{});var Cn=a(no);at=l(Cn,"Overview"),Cn.forEach(t),Le.forEach(t),Go=f(e),R=s(e,"P",{});var Oo=a(R);rt=l(Oo,`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe \\model{}\u2018s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at
`),fe=s(Oo,"A",{href:!0,rel:!0});var En=a(fe);it=l(En,"EleutherAI/gpt-neox"),En.forEach(t),lt=l(Oo,"."),Oo.forEach(t),Xo=f(e),Y=s(e,"P",{});var Ho=a(Y);dt=l(Ho,`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),ue=s(Ho,"A",{href:!0,rel:!0});var Fn=a(ue);ct=l(Fn,"CoreWeave"),Fn.forEach(t),pt=l(Ho,"."),Ho.forEach(t),xo=f(e),Ie=s(e,"P",{});var qn=a(Ie);ht=l(qn,"GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),qn.forEach(t),zo=f(e),k(ge.$$.fragment,e),Mo=f(e),Se=s(e,"P",{});var jn=a(Se);mt=l(jn,`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),jn.forEach(t),Co=f(e),I=s(e,"H3",{class:!0});var Vo=a(I);K=s(Vo,"A",{id:!0,class:!0,href:!0});var Ln=a(K);so=s(Ln,"SPAN",{});var An=a(so);k(_e.$$.fragment,An),An.forEach(t),Ln.forEach(t),ft=f(Vo),ao=s(Vo,"SPAN",{});var In=a(ao);ut=l(In,"Generation"),In.forEach(t),Vo.forEach(t),Eo=f(e),Q=s(e,"P",{});var Uo=a(Q);gt=l(Uo,"The "),ro=s(Uo,"CODE",{});var Sn=a(ro);_t=l(Sn,"generate()"),Sn.forEach(t),Tt=l(Uo," method can be used to generate text using GPT Neo model."),Uo.forEach(t),Fo=f(e),k(Te.$$.fragment,e),qo=f(e),S=s(e,"H2",{class:!0});var Jo=a(S);Z=s(Jo,"A",{id:!0,class:!0,href:!0});var Dn=a(Z);io=s(Dn,"SPAN",{});var Wn=a(io);k(ve.$$.fragment,Wn),Wn.forEach(t),Dn.forEach(t),vt=f(Jo),lo=s(Jo,"SPAN",{});var Bn=a(lo);bt=l(Bn,"GPTNeoXConfig"),Bn.forEach(t),Jo.forEach(t),jo=f(e),M=s(e,"DIV",{class:!0});var ce=a(M);k(be.$$.fragment,ce),kt=f(ce),D=s(ce,"P",{});var Ue=a(D);wt=l(Ue,"This is the configuration class to store the configuration of a "),De=s(Ue,"A",{href:!0});var On=a(De);Pt=l(On,"GPTNeoXModel"),On.forEach(t),$t=l(Ue,`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=s(Ue,"A",{href:!0,rel:!0});var Hn=a(ke);yt=l(Hn,"gpt-neox-20b"),Hn.forEach(t),Nt=l(Ue," architecture."),Ue.forEach(t),Gt=f(ce),W=s(ce,"P",{});var Je=a(W);Xt=l(Je,"Configuration objects inherit from "),We=s(Je,"A",{href:!0});var Vn=a(We);xt=l(Vn,"PretrainedConfig"),Vn.forEach(t),zt=l(Je,` and can be used to control the model outputs. Read the
documentation from `),Be=s(Je,"A",{href:!0});var Un=a(Be);Mt=l(Un,"PretrainedConfig"),Un.forEach(t),Ct=l(Je," for more information."),Je.forEach(t),Et=f(ce),k(ee.$$.fragment,ce),ce.forEach(t),Lo=f(e),B=s(e,"H2",{class:!0});var Ro=a(B);oe=s(Ro,"A",{id:!0,class:!0,href:!0});var Jn=a(oe);co=s(Jn,"SPAN",{});var Rn=a(co);k(we.$$.fragment,Rn),Rn.forEach(t),Jn.forEach(t),Ft=f(Ro),po=s(Ro,"SPAN",{});var Yn=a(po);qt=l(Yn,"GPTNeoXTokenizerFast"),Yn.forEach(t),Ro.forEach(t),Ao=f(e),N=s(e,"DIV",{class:!0});var x=a(N);k(Pe.$$.fragment,x),jt=f(x),$e=s(x,"P",{});var Yo=a($e);Lt=l(Yo,"Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),ho=s(Yo,"EM",{});var Kn=a(ho);At=l(Kn,"tokenizers"),Kn.forEach(t),It=l(Yo,` library). Based on byte-level
Byte-Pair-Encoding.`),Yo.forEach(t),St=f(x),mo=s(x,"P",{});var Qn=a(mo);Dt=l(Qn,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Qn.forEach(t),Wt=f(x),k(te.$$.fragment,x),Bt=f(x),ye=s(x,"P",{});var Ko=a(ye);Ot=l(Ko,"You can get around that behavior by passing "),fo=s(Ko,"CODE",{});var Zn=a(fo);Ht=l(Zn,"add_prefix_space=True"),Zn.forEach(t),Vt=l(Ko,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Ko.forEach(t),Ut=f(x),k(ne.$$.fragment,x),Jt=f(x),Ne=s(x,"P",{});var Qo=a(Ne);Rt=l(Qo,"This tokenizer inherits from "),Oe=s(Qo,"A",{href:!0});var es=a(Oe);Yt=l(es,"PreTrainedTokenizerFast"),es.forEach(t),Kt=l(Qo,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Qo.forEach(t),x.forEach(t),Io=f(e),O=s(e,"H2",{class:!0});var Zo=a(O);se=s(Zo,"A",{id:!0,class:!0,href:!0});var os=a(se);uo=s(os,"SPAN",{});var ts=a(uo);k(Ge.$$.fragment,ts),ts.forEach(t),os.forEach(t),Qt=f(Zo),go=s(Zo,"SPAN",{});var ns=a(go);Zt=l(ns,"GPTNeoXModel"),ns.forEach(t),Zo.forEach(t),So=f(e),j=s(e,"DIV",{class:!0});var Re=a(j);k(Xe.$$.fragment,Re),en=f(Re),xe=s(Re,"P",{});var et=a(xe);on=l(et,`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=s(et,"A",{href:!0,rel:!0});var ss=a(ze);tn=l(ss,"torch.nn.Module"),ss.forEach(t),nn=l(et,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),et.forEach(t),sn=f(Re),E=s(Re,"DIV",{class:!0});var pe=a(E);k(Me.$$.fragment,pe),an=f(pe),H=s(pe,"P",{});var Ye=a(H);rn=l(Ye,"The "),He=s(Ye,"A",{href:!0});var as=a(He);ln=l(as,"GPTNeoXModel"),as.forEach(t),dn=l(Ye," forward method, overrides the "),_o=s(Ye,"CODE",{});var rs=a(_o);cn=l(rs,"__call__"),rs.forEach(t),pn=l(Ye," special method."),Ye.forEach(t),hn=f(pe),k(ae.$$.fragment,pe),mn=f(pe),k(re.$$.fragment,pe),pe.forEach(t),Re.forEach(t),Do=f(e),V=s(e,"H2",{class:!0});var ot=a(V);ie=s(ot,"A",{id:!0,class:!0,href:!0});var is=a(ie);To=s(is,"SPAN",{});var ls=a(To);k(Ce.$$.fragment,ls),ls.forEach(t),is.forEach(t),fn=f(ot),vo=s(ot,"SPAN",{});var ds=a(vo);un=l(ds,"GPTNeoXForCausalLM"),ds.forEach(t),ot.forEach(t),Wo=f(e),L=s(e,"DIV",{class:!0});var Ke=a(L);k(Ee.$$.fragment,Ke),gn=f(Ke),U=s(Ke,"P",{});var Qe=a(U);_n=l(Qe,"GPTNeoX Model with a "),bo=s(Qe,"CODE",{});var cs=a(bo);Tn=l(cs,"language modeling"),cs.forEach(t),vn=l(Qe,` head on top for CLM fine-tuning.
This model is a PyTorch `),Fe=s(Qe,"A",{href:!0,rel:!0});var ps=a(Fe);bn=l(ps,"torch.nn.Module"),ps.forEach(t),kn=l(Qe,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qe.forEach(t),wn=f(Ke),F=s(Ke,"DIV",{class:!0});var he=a(F);k(qe.$$.fragment,he),Pn=f(he),J=s(he,"P",{});var Ze=a(J);$n=l(Ze,"The "),Ve=s(Ze,"A",{href:!0});var hs=a(Ve);yn=l(hs,"GPTNeoXForCausalLM"),hs.forEach(t),Nn=l(Ze," forward method, overrides the "),ko=s(Ze,"CODE",{});var ms=a(ko);Gn=l(ms,"__call__"),ms.forEach(t),Xn=l(Ze," special method."),Ze.forEach(t),xn=f(he),k(le.$$.fragment,he),zn=f(he),k(de.$$.fragment,he),he.forEach(t),Ke.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Gs)),h(u,"id","gptneox"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#gptneox"),h(p,"class","relative group"),h(q,"id","overview"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#overview"),h(C,"class","relative group"),h(fe,"href","https://github.com/EleutherAI/gpt-neox"),h(fe,"rel","nofollow"),h(ue,"href","https://www.coreweave.com/"),h(ue,"rel","nofollow"),h(K,"id","generation"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#generation"),h(I,"class","relative group"),h(Z,"id","transformers.GPTNeoXConfig"),h(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Z,"href","#transformers.GPTNeoXConfig"),h(S,"class","relative group"),h(De,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(ke,"href","https://huggingface.co/gpt-neox-20b"),h(ke,"rel","nofollow"),h(We,"href","/docs/transformers/pr_16659/en/main_classes/configuration#transformers.PretrainedConfig"),h(Be,"href","/docs/transformers/pr_16659/en/main_classes/configuration#transformers.PretrainedConfig"),h(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oe,"id","transformers.GPTNeoXTokenizerFast"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#transformers.GPTNeoXTokenizerFast"),h(B,"class","relative group"),h(Oe,"href","/docs/transformers/pr_16659/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"id","transformers.GPTNeoXModel"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#transformers.GPTNeoXModel"),h(O,"class","relative group"),h(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ze,"rel","nofollow"),h(He,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"id","transformers.GPTNeoXForCausalLM"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#transformers.GPTNeoXForCausalLM"),h(V,"class","relative group"),h(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Fe,"rel","nofollow"),h(Ve,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXForCausalLM"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){o(document.head,d),g(e,T,c),g(e,p,c),o(p,u),o(u,v),w(r,v,null),o(p,_),o(p,X),o(X,A),g(e,z,c),g(e,C,c),o(C,q),o(q,to),w(me,to,null),o(C,st),o(C,no),o(no,at),g(e,Go,c),g(e,R,c),o(R,rt),o(R,fe),o(fe,it),o(R,lt),g(e,Xo,c),g(e,Y,c),o(Y,dt),o(Y,ue),o(ue,ct),o(Y,pt),g(e,xo,c),g(e,Ie,c),o(Ie,ht),g(e,zo,c),w(ge,e,c),g(e,Mo,c),g(e,Se,c),o(Se,mt),g(e,Co,c),g(e,I,c),o(I,K),o(K,so),w(_e,so,null),o(I,ft),o(I,ao),o(ao,ut),g(e,Eo,c),g(e,Q,c),o(Q,gt),o(Q,ro),o(ro,_t),o(Q,Tt),g(e,Fo,c),w(Te,e,c),g(e,qo,c),g(e,S,c),o(S,Z),o(Z,io),w(ve,io,null),o(S,vt),o(S,lo),o(lo,bt),g(e,jo,c),g(e,M,c),w(be,M,null),o(M,kt),o(M,D),o(D,wt),o(D,De),o(De,Pt),o(D,$t),o(D,ke),o(ke,yt),o(D,Nt),o(M,Gt),o(M,W),o(W,Xt),o(W,We),o(We,xt),o(W,zt),o(W,Be),o(Be,Mt),o(W,Ct),o(M,Et),w(ee,M,null),g(e,Lo,c),g(e,B,c),o(B,oe),o(oe,co),w(we,co,null),o(B,Ft),o(B,po),o(po,qt),g(e,Ao,c),g(e,N,c),w(Pe,N,null),o(N,jt),o(N,$e),o($e,Lt),o($e,ho),o(ho,At),o($e,It),o(N,St),o(N,mo),o(mo,Dt),o(N,Wt),w(te,N,null),o(N,Bt),o(N,ye),o(ye,Ot),o(ye,fo),o(fo,Ht),o(ye,Vt),o(N,Ut),w(ne,N,null),o(N,Jt),o(N,Ne),o(Ne,Rt),o(Ne,Oe),o(Oe,Yt),o(Ne,Kt),g(e,Io,c),g(e,O,c),o(O,se),o(se,uo),w(Ge,uo,null),o(O,Qt),o(O,go),o(go,Zt),g(e,So,c),g(e,j,c),w(Xe,j,null),o(j,en),o(j,xe),o(xe,on),o(xe,ze),o(ze,tn),o(xe,nn),o(j,sn),o(j,E),w(Me,E,null),o(E,an),o(E,H),o(H,rn),o(H,He),o(He,ln),o(H,dn),o(H,_o),o(_o,cn),o(H,pn),o(E,hn),w(ae,E,null),o(E,mn),w(re,E,null),g(e,Do,c),g(e,V,c),o(V,ie),o(ie,To),w(Ce,To,null),o(V,fn),o(V,vo),o(vo,un),g(e,Wo,c),g(e,L,c),w(Ee,L,null),o(L,gn),o(L,U),o(U,_n),o(U,bo),o(bo,Tn),o(U,vn),o(U,Fe),o(Fe,bn),o(U,kn),o(L,wn),o(L,F),w(qe,F,null),o(F,Pn),o(F,J),o(J,$n),o(J,Ve),o(Ve,yn),o(J,Nn),o(J,ko),o(ko,Gn),o(J,Xn),o(F,xn),w(le,F,null),o(F,zn),w(de,F,null),Bo=!0},p(e,[c]){const je={};c&2&&(je.$$scope={dirty:c,ctx:e}),ee.$set(je);const wo={};c&2&&(wo.$$scope={dirty:c,ctx:e}),te.$set(wo);const Po={};c&2&&(Po.$$scope={dirty:c,ctx:e}),ne.$set(Po);const $o={};c&2&&($o.$$scope={dirty:c,ctx:e}),ae.$set($o);const Le={};c&2&&(Le.$$scope={dirty:c,ctx:e}),re.$set(Le);const yo={};c&2&&(yo.$$scope={dirty:c,ctx:e}),le.$set(yo);const No={};c&2&&(No.$$scope={dirty:c,ctx:e}),de.$set(No)},i(e){Bo||(P(r.$$.fragment,e),P(me.$$.fragment,e),P(ge.$$.fragment,e),P(_e.$$.fragment,e),P(Te.$$.fragment,e),P(ve.$$.fragment,e),P(be.$$.fragment,e),P(ee.$$.fragment,e),P(we.$$.fragment,e),P(Pe.$$.fragment,e),P(te.$$.fragment,e),P(ne.$$.fragment,e),P(Ge.$$.fragment,e),P(Xe.$$.fragment,e),P(Me.$$.fragment,e),P(ae.$$.fragment,e),P(re.$$.fragment,e),P(Ce.$$.fragment,e),P(Ee.$$.fragment,e),P(qe.$$.fragment,e),P(le.$$.fragment,e),P(de.$$.fragment,e),Bo=!0)},o(e){$(r.$$.fragment,e),$(me.$$.fragment,e),$(ge.$$.fragment,e),$(_e.$$.fragment,e),$(Te.$$.fragment,e),$(ve.$$.fragment,e),$(be.$$.fragment,e),$(ee.$$.fragment,e),$(we.$$.fragment,e),$(Pe.$$.fragment,e),$(te.$$.fragment,e),$(ne.$$.fragment,e),$(Ge.$$.fragment,e),$(Xe.$$.fragment,e),$(Me.$$.fragment,e),$(ae.$$.fragment,e),$(re.$$.fragment,e),$(Ce.$$.fragment,e),$(Ee.$$.fragment,e),$(qe.$$.fragment,e),$(le.$$.fragment,e),$(de.$$.fragment,e),Bo=!1},d(e){t(d),e&&t(T),e&&t(p),y(r),e&&t(z),e&&t(C),y(me),e&&t(Go),e&&t(R),e&&t(Xo),e&&t(Y),e&&t(xo),e&&t(Ie),e&&t(zo),y(ge,e),e&&t(Mo),e&&t(Se),e&&t(Co),e&&t(I),y(_e),e&&t(Eo),e&&t(Q),e&&t(Fo),y(Te,e),e&&t(qo),e&&t(S),y(ve),e&&t(jo),e&&t(M),y(be),y(ee),e&&t(Lo),e&&t(B),y(we),e&&t(Ao),e&&t(N),y(Pe),y(te),y(ne),e&&t(Io),e&&t(O),y(Ge),e&&t(So),e&&t(j),y(Xe),y(Me),y(ae),y(re),e&&t(Do),e&&t(V),y(Ce),e&&t(Wo),e&&t(L),y(Ee),y(qe),y(le),y(de)}}}const Gs={local:"gptneox",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoXConfig",title:"GPTNeoXConfig"},{local:"transformers.GPTNeoXTokenizerFast",title:"GPTNeoXTokenizerFast"},{local:"transformers.GPTNeoXModel",title:"GPTNeoXModel"},{local:"transformers.GPTNeoXForCausalLM",title:"GPTNeoXForCausalLM"}],title:"GPT-NeoX"};function Xs(G){return Ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends fs{constructor(d){super();us(this,d,Xs,Ns,gs,{})}}export{qs as default,Gs as metadata};
