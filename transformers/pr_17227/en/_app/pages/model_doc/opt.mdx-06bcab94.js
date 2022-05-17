import{S as hr,i as ur,s as fr,e as n,k as h,w as b,t as i,M as mr,c as a,d as o,m as u,a as s,x as k,h as l,b as d,F as e,g as m,y as w,q as P,o as $,B as O,v as gr,L as To}from"../../chunks/vendor-6b77c823.js";import{T as ds}from"../../chunks/Tip-39098574.js";import{D as ee}from"../../chunks/Docstring-1088f2fb.js";import{C as vo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as at}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as _o}from"../../chunks/ExampleCodeBlock-5212b321.js";function _r(x){let c,v,_,p,T;return p=new vo({props:{code:`from transformers import OPTModel, OPTConfig

# Initializing a OPT facebook/opt-large style configuration
configuration = OPTConfig()

# Initializing a model from the facebook/opt-large style configuration
model = OPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTModel, OPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a OPT facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),v=i("Example:"),_=h(),b(p.$$.fragment)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Example:"),f.forEach(o),_=u(r),k(p.$$.fragment,r)},m(r,f){m(r,c,f),e(c,v),m(r,_,f),w(p,r,f),T=!0},p:To,i(r){T||(P(p.$$.fragment,r),T=!0)},o(r){$(p.$$.fragment,r),T=!1},d(r){r&&o(c),r&&o(_),O(p,r)}}}function Tr(x){let c,v,_,p,T;return{c(){c=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),p=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var C=s(_);p=l(C,"Module"),C.forEach(o),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(r,f){m(r,c,f),e(c,v),e(c,_),e(_,p),e(c,T)},d(r){r&&o(c)}}}function vr(x){let c,v,_,p,T;return p=new vo({props:{code:`from transformers import GPT2Tokenizer, OPTModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = OPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=n("p"),v=i("Example:"),_=h(),b(p.$$.fragment)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Example:"),f.forEach(o),_=u(r),k(p.$$.fragment,r)},m(r,f){m(r,c,f),e(c,v),m(r,_,f),w(p,r,f),T=!0},p:To,i(r){T||(P(p.$$.fragment,r),T=!0)},o(r){$(p.$$.fragment,r),T=!1},d(r){r&&o(c),r&&o(_),O(p,r)}}}function yr(x){let c,v,_,p,T;return p=new vo({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

model = OPTForCausalLM.from_pretrained("facebook/opt-350m")
tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")

prompt = "Hey, are you consciours? Can you talk to me?"
inputs = tokenizer(prompt, return_tensors="pt")

# Generate
generate_ids = model.generate(inputs.input_ids, max_length=30)
tokenizer.batch_decode(generate_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generate_ids = model.generate(inputs.input_ids, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generate_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){c=n("p"),v=i("Example:"),_=h(),b(p.$$.fragment)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Example:"),f.forEach(o),_=u(r),k(p.$$.fragment,r)},m(r,f){m(r,c,f),e(c,v),m(r,_,f),w(p,r,f),T=!0},p:To,i(r){T||(P(p.$$.fragment,r),T=!0)},o(r){$(p.$$.fragment,r),T=!1},d(r){r&&o(c),r&&o(_),O(p,r)}}}function br(x){let c,v,_,p,T,r,f,C,st,pe,M,B,R,J,rt,K,it,Me,I,te,Z,Fe,N,D,oe,he,ze,ne,X,lt,Ee,j,dt,ae,U,Y,ue,fe,ct,se,pt,z,ht;return{c(){c=n("p"),v=i("TF 2.0 models accepts two formats as inputs:"),_=h(),p=n("ul"),T=n("li"),r=i("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),C=n("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),pe=h(),M=n("p"),B=i("This second option is useful when using "),R=n("code"),J=i("tf.keras.Model.fit"),rt=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),it=i("model(inputs)"),Me=i("."),I=h(),te=n("p"),Z=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe=h(),N=n("ul"),D=n("li"),oe=i("a single Tensor with "),he=n("code"),ze=i("input_ids"),ne=i(" only and nothing else: "),X=n("code"),lt=i("model(input_ids)"),Ee=h(),j=n("li"),dt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),U=i("model([input_ids, attention_mask])"),Y=i(" or "),ue=n("code"),fe=i("model([input_ids, attention_mask, token_type_ids])"),ct=h(),se=n("li"),pt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),z=n("code"),ht=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){c=a(y,"P",{});var q=s(c);v=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),_=u(y),p=a(y,"UL",{});var Ce=s(p);T=a(Ce,"LI",{});var qe=s(T);r=l(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(o),f=u(Ce),C=a(Ce,"LI",{});var Yt=s(C);st=l(Yt,"having all inputs as a list, tuple or dict in the first positional arguments."),Yt.forEach(o),Ce.forEach(o),pe=u(y),M=a(y,"P",{});var re=s(M);B=l(re,"This second option is useful when using "),R=a(re,"CODE",{});var je=s(R);J=l(je,"tf.keras.Model.fit"),je.forEach(o),rt=l(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=a(re,"CODE",{});var Qt=s(K);it=l(Qt,"model(inputs)"),Qt.forEach(o),Me=l(re,"."),re.forEach(o),I=u(y),te=a(y,"P",{});var eo=s(te);Z=l(eo,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),eo.forEach(o),Fe=u(y),N=a(y,"UL",{});var S=s(N);D=a(S,"LI",{});var me=s(D);oe=l(me,"a single Tensor with "),he=a(me,"CODE",{});var to=s(he);ze=l(to,"input_ids"),to.forEach(o),ne=l(me," only and nothing else: "),X=a(me,"CODE",{});var ut=s(X);lt=l(ut,"model(input_ids)"),ut.forEach(o),me.forEach(o),Ee=u(S),j=a(S,"LI",{});var F=s(j);dt=l(F,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(F,"CODE",{});var oo=s(ae);U=l(oo,"model([input_ids, attention_mask])"),oo.forEach(o),Y=l(F," or "),ue=a(F,"CODE",{});var ie=s(ue);fe=l(ie,"model([input_ids, attention_mask, token_type_ids])"),ie.forEach(o),F.forEach(o),ct=u(S),se=a(S,"LI",{});var ft=s(se);pt=l(ft,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),z=a(ft,"CODE",{});var no=s(z);ht=l(no,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),no.forEach(o),ft.forEach(o),S.forEach(o)},m(y,q){m(y,c,q),e(c,v),m(y,_,q),m(y,p,q),e(p,T),e(T,r),e(p,f),e(p,C),e(C,st),m(y,pe,q),m(y,M,q),e(M,B),e(M,R),e(R,J),e(M,rt),e(M,K),e(K,it),e(M,Me),m(y,I,q),m(y,te,q),e(te,Z),m(y,Fe,q),m(y,N,q),e(N,D),e(D,oe),e(D,he),e(he,ze),e(D,ne),e(D,X),e(X,lt),e(N,Ee),e(N,j),e(j,dt),e(j,ae),e(ae,U),e(j,Y),e(j,ue),e(ue,fe),e(N,ct),e(N,se),e(se,pt),e(se,z),e(z,ht)},d(y){y&&o(c),y&&o(_),y&&o(p),y&&o(pe),y&&o(M),y&&o(I),y&&o(te),y&&o(Fe),y&&o(N)}}}function kr(x){let c,v,_,p,T;return{c(){c=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),p=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var C=s(_);p=l(C,"Module"),C.forEach(o),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(r,f){m(r,c,f),e(c,v),e(c,_),e(_,p),e(c,T)},d(r){r&&o(c)}}}function wr(x){let c,v,_,p,T;return p=new vo({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("facebook/bart-large")
model = TFOPTModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFOPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=n("p"),v=i("Example:"),_=h(),b(p.$$.fragment)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Example:"),f.forEach(o),_=u(r),k(p.$$.fragment,r)},m(r,f){m(r,c,f),e(c,v),m(r,_,f),w(p,r,f),T=!0},p:To,i(r){T||(P(p.$$.fragment,r),T=!0)},o(r){$(p.$$.fragment,r),T=!1},d(r){r&&o(c),r&&o(_),O(p,r)}}}function Pr(x){let c,v,_,p,T;return p=new vo({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("")
model = FlaxOPTModel.from_pretrained("")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=n("p"),v=i("Example:"),_=h(),b(p.$$.fragment)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Example:"),f.forEach(o),_=u(r),k(p.$$.fragment,r)},m(r,f){m(r,c,f),e(c,v),m(r,_,f),w(p,r,f),T=!0},p:To,i(r){T||(P(p.$$.fragment,r),T=!0)},o(r){$(p.$$.fragment,r),T=!1},d(r){r&&o(c),r&&o(_),O(p,r)}}}function $r(x){let c,v,_,p,T;return p=new vo({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("")
model = FlaxOPTForCausalLM.from_pretrained("")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){c=n("p"),v=i("Example:"),_=h(),b(p.$$.fragment)},l(r){c=a(r,"P",{});var f=s(c);v=l(f,"Example:"),f.forEach(o),_=u(r),k(p.$$.fragment,r)},m(r,f){m(r,c,f),e(c,v),m(r,_,f),w(p,r,f),T=!0},p:To,i(r){T||(P(p.$$.fragment,r),T=!0)},o(r){$(p.$$.fragment,r),T=!1},d(r){r&&o(c),r&&o(_),O(p,r)}}}function Or(x){let c,v,_,p,T,r,f,C,st,pe,M,B,R,J,rt,K,it,Me,I,te,Z,Fe,N,D,oe,he,ze,ne,X,lt,Ee,j,dt,ae,U,Y,ue,fe,ct,se,pt,z,ht,y,q,Ce,qe,Yt,re,je,Qt,eo,S,me,to,ut,F,oo,ie,ft,no,mt,$n,On,gt,xn,Mn,_t,Fn,zn,Vo,ge,Le,yo,Tt,En,bo,Cn,Ro,W,vt,qn,_e,jn,ao,Ln,Nn,yt,An,In,Dn,Te,Sn,so,Wn,Gn,ro,Bn,Un,Hn,Ne,Jo,ve,Ae,ko,bt,Vn,wo,Rn,Ko,G,kt,Jn,wt,Kn,io,Zn,Xn,Yn,Pt,Qn,$t,ea,ta,oa,H,Ot,na,ye,aa,lo,sa,ra,Po,ia,la,da,Ie,ca,De,Zo,be,Se,$o,xt,pa,Oo,ha,Xo,ke,Mt,ua,We,Ft,fa,Ge,Yo,we,Be,xo,zt,ma,Mo,ga,Qo,L,Et,_a,Ct,Ta,co,va,ya,ba,qt,ka,jt,wa,Pa,$a,Ue,Oa,V,Lt,xa,Pe,Ma,po,Fa,za,Fo,Ea,Ca,qa,He,ja,Ve,en,$e,Re,zo,Nt,La,Eo,Na,tn,Oe,At,Aa,Je,It,Ia,Ke,on,xe,Ze,Co,Dt,Da,qo,Sa,nn,E,St,Wa,jo,Ga,Ba,Wt,Ua,ho,Ha,Va,Ra,Gt,Ja,Bt,Ka,Za,Xa,Lo,Ya,Qa,Q,No,Ut,es,ts,Ao,Ht,os,ns,Io,Vt,as,ss,Do,Rt,rs,is,Xe,Jt,ls,Ye,an;return r=new at({}),J=new at({}),Tt=new at({}),vt=new ee({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.OPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_hidden_layers"},{anchor:"transformers.OPTConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.OPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_attention_heads"},{anchor:"transformers.OPTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.OPTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.OPTConfig.do_layer_norm_before",description:`<strong>do_layer_norm_before</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to perform layer normalization before the attention block.`,name:"do_layer_norm_before"},{anchor:"transformers.OPTConfig.word_embed_proj_dim",description:`<strong>word_embed_proj_dim</strong> (<code>int</code>, <em>optional</em>) &#x2014;
<code>word_embed_proj_dim</code> can be set to down-project word embeddings, <em>e.g.</em> <code>opt-350m</code>. Defaults to
<code>hidden_size</code>.`,name:"word_embed_proj_dim"},{anchor:"transformers.OPTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.OPTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"activation_dropout"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/configuration_opt.py#L32"}}),Ne=new _o({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[_r]},$$scope:{ctx:x}}}),bt=new at({}),kt=new ee({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17227/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_opt.py#L738"}}),Ot=new ee({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17227/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_17227/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17227/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17227/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17227/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17227/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_opt.py#L755",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new ds({props:{$$slots:{default:[Tr]},$$scope:{ctx:x}}}),De=new _o({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[vr]},$$scope:{ctx:x}}}),xt=new at({}),Mt=new ee({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_opt.py#L807"}}),Ft=new ee({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17227/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17227/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OPTForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.OPTForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17227/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_opt.py#L838",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new _o({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[yr]},$$scope:{ctx:x}}}),zt=new at({}),Et=new ee({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17227/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_tf_opt.py#L1151"}}),Ue=new ds({props:{$$slots:{default:[br]},$$scope:{ctx:x}}}),Lt=new ee({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17227/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17227/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17227/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17227/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17227/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>OPT uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFOPTModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFOPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOPTModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFOPTModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFOPTModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFOPTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFOPTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFOPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17227/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_tf_opt.py#L1166",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),He=new ds({props:{$$slots:{default:[kr]},$$scope:{ctx:x}}}),Ve=new _o({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[wr]},$$scope:{ctx:x}}}),Nt=new at({}),At=new ee({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_flax_opt.py#L706"}}),It=new ee({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"head_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_flax_opt.py#L594",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new _o({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[Pr]},$$scope:{ctx:x}}}),Dt=new at({}),St=new ee({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17227/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17227/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17227/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_flax_opt.py#L784"}}),Jt=new ee({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"head_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/vr_17227/src/transformers/models/opt/modeling_flax_opt.py#L594",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17227/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new _o({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[$r]},$$scope:{ctx:x}}}),{c(){c=n("meta"),v=h(),_=n("h1"),p=n("a"),T=n("span"),b(r.$$.fragment),f=h(),C=n("span"),st=i("OPT"),pe=h(),M=n("h2"),B=n("a"),R=n("span"),b(J.$$.fragment),rt=h(),K=n("span"),it=i("Overview"),Me=h(),I=n("p"),te=i("The OPT model was proposed in "),Z=n("a"),Fe=i("Open Pre-trained Transformer Language Models"),N=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),D=h(),oe=n("p"),he=i("The abstract from the paper is the following:"),ze=h(),ne=n("p"),X=n("em"),lt=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Ee=h(),j=n("p"),dt=i("Tips:"),ae=h(),U=n("ul"),Y=n("li"),ue=i("OPT has the same architecture as "),fe=n("code"),ct=i("BartDecoder"),se=i("."),pt=h(),z=n("li"),ht=i("Contrary to GPT2, OPT adds the EOS token "),y=n("code"),q=i("</s>"),Ce=i(" to the beginning of every prompt. "),qe=n("strong"),Yt=i("Note"),re=i(": Make sure to pass "),je=n("code"),Qt=i("use_fast=False"),eo=i(" when loading OPT\u2019s tokenizer with "),S=n("a"),me=i("AutoTokenizer"),to=i(" to get the correct tokenizer."),ut=h(),F=n("p"),oo=i("This model was contributed by "),ie=n("a"),ft=i("Arthur Zucker"),no=i(", "),mt=n("a"),$n=i("Younes Belkada"),On=i(", and "),gt=n("a"),xn=i("Patrick Von Platen"),Mn=i(`.
The original code can be found `),_t=n("a"),Fn=i("here"),zn=i("."),Vo=h(),ge=n("h2"),Le=n("a"),yo=n("span"),b(Tt.$$.fragment),En=h(),bo=n("span"),Cn=i("OPTConfig"),Ro=h(),W=n("div"),b(vt.$$.fragment),qn=h(),_e=n("p"),jn=i("This is the configuration class to store the configuration of a "),ao=n("a"),Ln=i("OPTModel"),Nn=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),yt=n("a"),An=i("facebook/opt-350m"),In=i(" architecture."),Dn=h(),Te=n("p"),Sn=i("Configuration objects inherit from "),so=n("a"),Wn=i("PretrainedConfig"),Gn=i(` and can be used to control the model outputs. Read the
documentation from `),ro=n("a"),Bn=i("PretrainedConfig"),Un=i(" for more information."),Hn=h(),b(Ne.$$.fragment),Jo=h(),ve=n("h2"),Ae=n("a"),ko=n("span"),b(bt.$$.fragment),Vn=h(),wo=n("span"),Rn=i("OPTModel"),Ko=h(),G=n("div"),b(kt.$$.fragment),Jn=h(),wt=n("p"),Kn=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),io=n("a"),Zn=i("PreTrainedModel"),Xn=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yn=h(),Pt=n("p"),Qn=i("This model is also a PyTorch "),$t=n("a"),ea=i("torch.nn.Module"),ta=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oa=h(),H=n("div"),b(Ot.$$.fragment),na=h(),ye=n("p"),aa=i("The "),lo=n("a"),sa=i("OPTModel"),ra=i(" forward method, overrides the "),Po=n("code"),ia=i("__call__"),la=i(" special method."),da=h(),b(Ie.$$.fragment),ca=h(),b(De.$$.fragment),Zo=h(),be=n("h2"),Se=n("a"),$o=n("span"),b(xt.$$.fragment),pa=h(),Oo=n("span"),ha=i("OPTForCausalLM"),Xo=h(),ke=n("div"),b(Mt.$$.fragment),ua=h(),We=n("div"),b(Ft.$$.fragment),fa=h(),b(Ge.$$.fragment),Yo=h(),we=n("h2"),Be=n("a"),xo=n("span"),b(zt.$$.fragment),ma=h(),Mo=n("span"),ga=i("TFOPTModel"),Qo=h(),L=n("div"),b(Et.$$.fragment),_a=h(),Ct=n("p"),Ta=i(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),co=n("a"),va=i("TFPreTrainedModel"),ya=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba=h(),qt=n("p"),ka=i("This model is also a "),jt=n("a"),wa=i("tf.keras.Model"),Pa=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$a=h(),b(Ue.$$.fragment),Oa=h(),V=n("div"),b(Lt.$$.fragment),xa=h(),Pe=n("p"),Ma=i("The "),po=n("a"),Fa=i("TFOPTModel"),za=i(" forward method, overrides the "),Fo=n("code"),Ea=i("__call__"),Ca=i(" special method."),qa=h(),b(He.$$.fragment),ja=h(),b(Ve.$$.fragment),en=h(),$e=n("h2"),Re=n("a"),zo=n("span"),b(Nt.$$.fragment),La=h(),Eo=n("span"),Na=i("FlaxOPTModel"),tn=h(),Oe=n("div"),b(At.$$.fragment),Aa=h(),Je=n("div"),b(It.$$.fragment),Ia=h(),b(Ke.$$.fragment),on=h(),xe=n("h2"),Ze=n("a"),Co=n("span"),b(Dt.$$.fragment),Da=h(),qo=n("span"),Sa=i("FlaxOPTForCausalLM"),nn=h(),E=n("div"),b(St.$$.fragment),Wa=h(),jo=n("p"),Ga=i(`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),Ba=h(),Wt=n("p"),Ua=i("This model inherits from "),ho=n("a"),Ha=i("FlaxPreTrainedModel"),Va=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra=h(),Gt=n("p"),Ja=i(`This model is also a Flax Linen
`),Bt=n("a"),Ka=i("flax.nn.Module"),Za=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Xa=h(),Lo=n("p"),Ya=i("Finally, this model supports inherent JAX features such as:"),Qa=h(),Q=n("ul"),No=n("li"),Ut=n("a"),es=i("Just-In-Time (JIT) compilation"),ts=h(),Ao=n("li"),Ht=n("a"),os=i("Automatic Differentiation"),ns=h(),Io=n("li"),Vt=n("a"),as=i("Vectorization"),ss=h(),Do=n("li"),Rt=n("a"),rs=i("Parallelization"),is=h(),Xe=n("div"),b(Jt.$$.fragment),ls=h(),b(Ye.$$.fragment),this.h()},l(t){const g=mr('[data-svelte="svelte-1phssyn"]',document.head);c=a(g,"META",{name:!0,content:!0}),g.forEach(o),v=u(t),_=a(t,"H1",{class:!0});var Kt=s(_);p=a(Kt,"A",{id:!0,class:!0,href:!0});var So=s(p);T=a(So,"SPAN",{});var Wo=s(T);k(r.$$.fragment,Wo),Wo.forEach(o),So.forEach(o),f=u(Kt),C=a(Kt,"SPAN",{});var Go=s(C);st=l(Go,"OPT"),Go.forEach(o),Kt.forEach(o),pe=u(t),M=a(t,"H2",{class:!0});var Zt=s(M);B=a(Zt,"A",{id:!0,class:!0,href:!0});var Bo=s(B);R=a(Bo,"SPAN",{});var Uo=s(R);k(J.$$.fragment,Uo),Uo.forEach(o),Bo.forEach(o),rt=u(Zt),K=a(Zt,"SPAN",{});var Ho=s(K);it=l(Ho,"Overview"),Ho.forEach(o),Zt.forEach(o),Me=u(t),I=a(t,"P",{});var Xt=s(I);te=l(Xt,"The OPT model was proposed in "),Z=a(Xt,"A",{href:!0,rel:!0});var cs=s(Z);Fe=l(cs,"Open Pre-trained Transformer Language Models"),cs.forEach(o),N=l(Xt,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),Xt.forEach(o),D=u(t),oe=a(t,"P",{});var ps=s(oe);he=l(ps,"The abstract from the paper is the following:"),ps.forEach(o),ze=u(t),ne=a(t,"P",{});var hs=s(ne);X=a(hs,"EM",{});var us=s(X);lt=l(us,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),us.forEach(o),hs.forEach(o),Ee=u(t),j=a(t,"P",{});var fs=s(j);dt=l(fs,"Tips:"),fs.forEach(o),ae=u(t),U=a(t,"UL",{});var sn=s(U);Y=a(sn,"LI",{});var rn=s(Y);ue=l(rn,"OPT has the same architecture as "),fe=a(rn,"CODE",{});var ms=s(fe);ct=l(ms,"BartDecoder"),ms.forEach(o),se=l(rn,"."),rn.forEach(o),pt=u(sn),z=a(sn,"LI",{});var le=s(z);ht=l(le,"Contrary to GPT2, OPT adds the EOS token "),y=a(le,"CODE",{});var gs=s(y);q=l(gs,"</s>"),gs.forEach(o),Ce=l(le," to the beginning of every prompt. "),qe=a(le,"STRONG",{});var _s=s(qe);Yt=l(_s,"Note"),_s.forEach(o),re=l(le,": Make sure to pass "),je=a(le,"CODE",{});var Ts=s(je);Qt=l(Ts,"use_fast=False"),Ts.forEach(o),eo=l(le," when loading OPT\u2019s tokenizer with "),S=a(le,"A",{href:!0});var vs=s(S);me=l(vs,"AutoTokenizer"),vs.forEach(o),to=l(le," to get the correct tokenizer."),le.forEach(o),sn.forEach(o),ut=u(t),F=a(t,"P",{});var de=s(F);oo=l(de,"This model was contributed by "),ie=a(de,"A",{href:!0,rel:!0});var ys=s(ie);ft=l(ys,"Arthur Zucker"),ys.forEach(o),no=l(de,", "),mt=a(de,"A",{href:!0,rel:!0});var bs=s(mt);$n=l(bs,"Younes Belkada"),bs.forEach(o),On=l(de,", and "),gt=a(de,"A",{href:!0,rel:!0});var ks=s(gt);xn=l(ks,"Patrick Von Platen"),ks.forEach(o),Mn=l(de,`.
The original code can be found `),_t=a(de,"A",{href:!0,rel:!0});var ws=s(_t);Fn=l(ws,"here"),ws.forEach(o),zn=l(de,"."),de.forEach(o),Vo=u(t),ge=a(t,"H2",{class:!0});var ln=s(ge);Le=a(ln,"A",{id:!0,class:!0,href:!0});var Ps=s(Le);yo=a(Ps,"SPAN",{});var $s=s(yo);k(Tt.$$.fragment,$s),$s.forEach(o),Ps.forEach(o),En=u(ln),bo=a(ln,"SPAN",{});var Os=s(bo);Cn=l(Os,"OPTConfig"),Os.forEach(o),ln.forEach(o),Ro=u(t),W=a(t,"DIV",{class:!0});var Qe=s(W);k(vt.$$.fragment,Qe),qn=u(Qe),_e=a(Qe,"P",{});var uo=s(_e);jn=l(uo,"This is the configuration class to store the configuration of a "),ao=a(uo,"A",{href:!0});var xs=s(ao);Ln=l(xs,"OPTModel"),xs.forEach(o),Nn=l(uo,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),yt=a(uo,"A",{href:!0,rel:!0});var Ms=s(yt);An=l(Ms,"facebook/opt-350m"),Ms.forEach(o),In=l(uo," architecture."),uo.forEach(o),Dn=u(Qe),Te=a(Qe,"P",{});var fo=s(Te);Sn=l(fo,"Configuration objects inherit from "),so=a(fo,"A",{href:!0});var Fs=s(so);Wn=l(Fs,"PretrainedConfig"),Fs.forEach(o),Gn=l(fo,` and can be used to control the model outputs. Read the
documentation from `),ro=a(fo,"A",{href:!0});var zs=s(ro);Bn=l(zs,"PretrainedConfig"),zs.forEach(o),Un=l(fo," for more information."),fo.forEach(o),Hn=u(Qe),k(Ne.$$.fragment,Qe),Qe.forEach(o),Jo=u(t),ve=a(t,"H2",{class:!0});var dn=s(ve);Ae=a(dn,"A",{id:!0,class:!0,href:!0});var Es=s(Ae);ko=a(Es,"SPAN",{});var Cs=s(ko);k(bt.$$.fragment,Cs),Cs.forEach(o),Es.forEach(o),Vn=u(dn),wo=a(dn,"SPAN",{});var qs=s(wo);Rn=l(qs,"OPTModel"),qs.forEach(o),dn.forEach(o),Ko=u(t),G=a(t,"DIV",{class:!0});var et=s(G);k(kt.$$.fragment,et),Jn=u(et),wt=a(et,"P",{});var cn=s(wt);Kn=l(cn,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),io=a(cn,"A",{href:!0});var js=s(io);Zn=l(js,"PreTrainedModel"),js.forEach(o),Xn=l(cn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cn.forEach(o),Yn=u(et),Pt=a(et,"P",{});var pn=s(Pt);Qn=l(pn,"This model is also a PyTorch "),$t=a(pn,"A",{href:!0,rel:!0});var Ls=s($t);ea=l(Ls,"torch.nn.Module"),Ls.forEach(o),ta=l(pn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pn.forEach(o),oa=u(et),H=a(et,"DIV",{class:!0});var tt=s(H);k(Ot.$$.fragment,tt),na=u(tt),ye=a(tt,"P",{});var mo=s(ye);aa=l(mo,"The "),lo=a(mo,"A",{href:!0});var Ns=s(lo);sa=l(Ns,"OPTModel"),Ns.forEach(o),ra=l(mo," forward method, overrides the "),Po=a(mo,"CODE",{});var As=s(Po);ia=l(As,"__call__"),As.forEach(o),la=l(mo," special method."),mo.forEach(o),da=u(tt),k(Ie.$$.fragment,tt),ca=u(tt),k(De.$$.fragment,tt),tt.forEach(o),et.forEach(o),Zo=u(t),be=a(t,"H2",{class:!0});var hn=s(be);Se=a(hn,"A",{id:!0,class:!0,href:!0});var Is=s(Se);$o=a(Is,"SPAN",{});var Ds=s($o);k(xt.$$.fragment,Ds),Ds.forEach(o),Is.forEach(o),pa=u(hn),Oo=a(hn,"SPAN",{});var Ss=s(Oo);ha=l(Ss,"OPTForCausalLM"),Ss.forEach(o),hn.forEach(o),Xo=u(t),ke=a(t,"DIV",{class:!0});var un=s(ke);k(Mt.$$.fragment,un),ua=u(un),We=a(un,"DIV",{class:!0});var fn=s(We);k(Ft.$$.fragment,fn),fa=u(fn),k(Ge.$$.fragment,fn),fn.forEach(o),un.forEach(o),Yo=u(t),we=a(t,"H2",{class:!0});var mn=s(we);Be=a(mn,"A",{id:!0,class:!0,href:!0});var Ws=s(Be);xo=a(Ws,"SPAN",{});var Gs=s(xo);k(zt.$$.fragment,Gs),Gs.forEach(o),Ws.forEach(o),ma=u(mn),Mo=a(mn,"SPAN",{});var Bs=s(Mo);ga=l(Bs,"TFOPTModel"),Bs.forEach(o),mn.forEach(o),Qo=u(t),L=a(t,"DIV",{class:!0});var ce=s(L);k(Et.$$.fragment,ce),_a=u(ce),Ct=a(ce,"P",{});var gn=s(Ct);Ta=l(gn,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),co=a(gn,"A",{href:!0});var Us=s(co);va=l(Us,"TFPreTrainedModel"),Us.forEach(o),ya=l(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gn.forEach(o),ba=u(ce),qt=a(ce,"P",{});var _n=s(qt);ka=l(_n,"This model is also a "),jt=a(_n,"A",{href:!0,rel:!0});var Hs=s(jt);wa=l(Hs,"tf.keras.Model"),Hs.forEach(o),Pa=l(_n,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_n.forEach(o),$a=u(ce),k(Ue.$$.fragment,ce),Oa=u(ce),V=a(ce,"DIV",{class:!0});var ot=s(V);k(Lt.$$.fragment,ot),xa=u(ot),Pe=a(ot,"P",{});var go=s(Pe);Ma=l(go,"The "),po=a(go,"A",{href:!0});var Vs=s(po);Fa=l(Vs,"TFOPTModel"),Vs.forEach(o),za=l(go," forward method, overrides the "),Fo=a(go,"CODE",{});var Rs=s(Fo);Ea=l(Rs,"__call__"),Rs.forEach(o),Ca=l(go," special method."),go.forEach(o),qa=u(ot),k(He.$$.fragment,ot),ja=u(ot),k(Ve.$$.fragment,ot),ot.forEach(o),ce.forEach(o),en=u(t),$e=a(t,"H2",{class:!0});var Tn=s($e);Re=a(Tn,"A",{id:!0,class:!0,href:!0});var Js=s(Re);zo=a(Js,"SPAN",{});var Ks=s(zo);k(Nt.$$.fragment,Ks),Ks.forEach(o),Js.forEach(o),La=u(Tn),Eo=a(Tn,"SPAN",{});var Zs=s(Eo);Na=l(Zs,"FlaxOPTModel"),Zs.forEach(o),Tn.forEach(o),tn=u(t),Oe=a(t,"DIV",{class:!0});var vn=s(Oe);k(At.$$.fragment,vn),Aa=u(vn),Je=a(vn,"DIV",{class:!0});var yn=s(Je);k(It.$$.fragment,yn),Ia=u(yn),k(Ke.$$.fragment,yn),yn.forEach(o),vn.forEach(o),on=u(t),xe=a(t,"H2",{class:!0});var bn=s(xe);Ze=a(bn,"A",{id:!0,class:!0,href:!0});var Xs=s(Ze);Co=a(Xs,"SPAN",{});var Ys=s(Co);k(Dt.$$.fragment,Ys),Ys.forEach(o),Xs.forEach(o),Da=u(bn),qo=a(bn,"SPAN",{});var Qs=s(qo);Sa=l(Qs,"FlaxOPTForCausalLM"),Qs.forEach(o),bn.forEach(o),nn=u(t),E=a(t,"DIV",{class:!0});var A=s(E);k(St.$$.fragment,A),Wa=u(A),jo=a(A,"P",{});var er=s(jo);Ga=l(er,`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),er.forEach(o),Ba=u(A),Wt=a(A,"P",{});var kn=s(Wt);Ua=l(kn,"This model inherits from "),ho=a(kn,"A",{href:!0});var tr=s(ho);Ha=l(tr,"FlaxPreTrainedModel"),tr.forEach(o),Va=l(kn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kn.forEach(o),Ra=u(A),Gt=a(A,"P",{});var wn=s(Gt);Ja=l(wn,`This model is also a Flax Linen
`),Bt=a(wn,"A",{href:!0,rel:!0});var or=s(Bt);Ka=l(or,"flax.nn.Module"),or.forEach(o),Za=l(wn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wn.forEach(o),Xa=u(A),Lo=a(A,"P",{});var nr=s(Lo);Ya=l(nr,"Finally, this model supports inherent JAX features such as:"),nr.forEach(o),Qa=u(A),Q=a(A,"UL",{});var nt=s(Q);No=a(nt,"LI",{});var ar=s(No);Ut=a(ar,"A",{href:!0,rel:!0});var sr=s(Ut);es=l(sr,"Just-In-Time (JIT) compilation"),sr.forEach(o),ar.forEach(o),ts=u(nt),Ao=a(nt,"LI",{});var rr=s(Ao);Ht=a(rr,"A",{href:!0,rel:!0});var ir=s(Ht);os=l(ir,"Automatic Differentiation"),ir.forEach(o),rr.forEach(o),ns=u(nt),Io=a(nt,"LI",{});var lr=s(Io);Vt=a(lr,"A",{href:!0,rel:!0});var dr=s(Vt);as=l(dr,"Vectorization"),dr.forEach(o),lr.forEach(o),ss=u(nt),Do=a(nt,"LI",{});var cr=s(Do);Rt=a(cr,"A",{href:!0,rel:!0});var pr=s(Rt);rs=l(pr,"Parallelization"),pr.forEach(o),cr.forEach(o),nt.forEach(o),is=u(A),Xe=a(A,"DIV",{class:!0});var Pn=s(Xe);k(Jt.$$.fragment,Pn),ls=u(Pn),k(Ye.$$.fragment,Pn),Pn.forEach(o),A.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(xr)),d(p,"id","opt"),d(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(p,"href","#opt"),d(_,"class","relative group"),d(B,"id","overview"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#overview"),d(M,"class","relative group"),d(Z,"href","https://arxiv.org/pdf/2205.01068"),d(Z,"rel","nofollow"),d(S,"href","/docs/transformers/pr_17227/en/model_doc/auto#transformers.AutoTokenizer"),d(ie,"href","https://huggingface.co/ArthurZ"),d(ie,"rel","nofollow"),d(mt,"href","https://huggingface.co/ybelkada"),d(mt,"rel","nofollow"),d(gt,"href","https://huggingface.co/patrickvonplaten"),d(gt,"rel","nofollow"),d(_t,"href","https://github.com/facebookresearch/metaseq"),d(_t,"rel","nofollow"),d(Le,"id","transformers.OPTConfig"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.OPTConfig"),d(ge,"class","relative group"),d(ao,"href","/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTModel"),d(yt,"href","https://huggingface.co/facebook/opt-350m"),d(yt,"rel","nofollow"),d(so,"href","/docs/transformers/pr_17227/en/main_classes/configuration#transformers.PretrainedConfig"),d(ro,"href","/docs/transformers/pr_17227/en/main_classes/configuration#transformers.PretrainedConfig"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.OPTModel"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.OPTModel"),d(ve,"class","relative group"),d(io,"href","/docs/transformers/pr_17227/en/main_classes/model#transformers.PreTrainedModel"),d($t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d($t,"rel","nofollow"),d(lo,"href","/docs/transformers/pr_17227/en/model_doc/opt#transformers.OPTModel"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.OPTForCausalLM"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.OPTForCausalLM"),d(be,"class","relative group"),d(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"id","transformers.TFOPTModel"),d(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Be,"href","#transformers.TFOPTModel"),d(we,"class","relative group"),d(co,"href","/docs/transformers/pr_17227/en/main_classes/model#transformers.TFPreTrainedModel"),d(jt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(jt,"rel","nofollow"),d(po,"href","/docs/transformers/pr_17227/en/model_doc/opt#transformers.TFOPTModel"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.FlaxOPTModel"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.FlaxOPTModel"),d($e,"class","relative group"),d(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ze,"id","transformers.FlaxOPTForCausalLM"),d(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ze,"href","#transformers.FlaxOPTForCausalLM"),d(xe,"class","relative group"),d(ho,"href","/docs/transformers/pr_17227/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Bt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(Bt,"rel","nofollow"),d(Ut,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Ut,"rel","nofollow"),d(Ht,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Ht,"rel","nofollow"),d(Vt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Vt,"rel","nofollow"),d(Rt,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Rt,"rel","nofollow"),d(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,c),m(t,v,g),m(t,_,g),e(_,p),e(p,T),w(r,T,null),e(_,f),e(_,C),e(C,st),m(t,pe,g),m(t,M,g),e(M,B),e(B,R),w(J,R,null),e(M,rt),e(M,K),e(K,it),m(t,Me,g),m(t,I,g),e(I,te),e(I,Z),e(Z,Fe),e(I,N),m(t,D,g),m(t,oe,g),e(oe,he),m(t,ze,g),m(t,ne,g),e(ne,X),e(X,lt),m(t,Ee,g),m(t,j,g),e(j,dt),m(t,ae,g),m(t,U,g),e(U,Y),e(Y,ue),e(Y,fe),e(fe,ct),e(Y,se),e(U,pt),e(U,z),e(z,ht),e(z,y),e(y,q),e(z,Ce),e(z,qe),e(qe,Yt),e(z,re),e(z,je),e(je,Qt),e(z,eo),e(z,S),e(S,me),e(z,to),m(t,ut,g),m(t,F,g),e(F,oo),e(F,ie),e(ie,ft),e(F,no),e(F,mt),e(mt,$n),e(F,On),e(F,gt),e(gt,xn),e(F,Mn),e(F,_t),e(_t,Fn),e(F,zn),m(t,Vo,g),m(t,ge,g),e(ge,Le),e(Le,yo),w(Tt,yo,null),e(ge,En),e(ge,bo),e(bo,Cn),m(t,Ro,g),m(t,W,g),w(vt,W,null),e(W,qn),e(W,_e),e(_e,jn),e(_e,ao),e(ao,Ln),e(_e,Nn),e(_e,yt),e(yt,An),e(_e,In),e(W,Dn),e(W,Te),e(Te,Sn),e(Te,so),e(so,Wn),e(Te,Gn),e(Te,ro),e(ro,Bn),e(Te,Un),e(W,Hn),w(Ne,W,null),m(t,Jo,g),m(t,ve,g),e(ve,Ae),e(Ae,ko),w(bt,ko,null),e(ve,Vn),e(ve,wo),e(wo,Rn),m(t,Ko,g),m(t,G,g),w(kt,G,null),e(G,Jn),e(G,wt),e(wt,Kn),e(wt,io),e(io,Zn),e(wt,Xn),e(G,Yn),e(G,Pt),e(Pt,Qn),e(Pt,$t),e($t,ea),e(Pt,ta),e(G,oa),e(G,H),w(Ot,H,null),e(H,na),e(H,ye),e(ye,aa),e(ye,lo),e(lo,sa),e(ye,ra),e(ye,Po),e(Po,ia),e(ye,la),e(H,da),w(Ie,H,null),e(H,ca),w(De,H,null),m(t,Zo,g),m(t,be,g),e(be,Se),e(Se,$o),w(xt,$o,null),e(be,pa),e(be,Oo),e(Oo,ha),m(t,Xo,g),m(t,ke,g),w(Mt,ke,null),e(ke,ua),e(ke,We),w(Ft,We,null),e(We,fa),w(Ge,We,null),m(t,Yo,g),m(t,we,g),e(we,Be),e(Be,xo),w(zt,xo,null),e(we,ma),e(we,Mo),e(Mo,ga),m(t,Qo,g),m(t,L,g),w(Et,L,null),e(L,_a),e(L,Ct),e(Ct,Ta),e(Ct,co),e(co,va),e(Ct,ya),e(L,ba),e(L,qt),e(qt,ka),e(qt,jt),e(jt,wa),e(qt,Pa),e(L,$a),w(Ue,L,null),e(L,Oa),e(L,V),w(Lt,V,null),e(V,xa),e(V,Pe),e(Pe,Ma),e(Pe,po),e(po,Fa),e(Pe,za),e(Pe,Fo),e(Fo,Ea),e(Pe,Ca),e(V,qa),w(He,V,null),e(V,ja),w(Ve,V,null),m(t,en,g),m(t,$e,g),e($e,Re),e(Re,zo),w(Nt,zo,null),e($e,La),e($e,Eo),e(Eo,Na),m(t,tn,g),m(t,Oe,g),w(At,Oe,null),e(Oe,Aa),e(Oe,Je),w(It,Je,null),e(Je,Ia),w(Ke,Je,null),m(t,on,g),m(t,xe,g),e(xe,Ze),e(Ze,Co),w(Dt,Co,null),e(xe,Da),e(xe,qo),e(qo,Sa),m(t,nn,g),m(t,E,g),w(St,E,null),e(E,Wa),e(E,jo),e(jo,Ga),e(E,Ba),e(E,Wt),e(Wt,Ua),e(Wt,ho),e(ho,Ha),e(Wt,Va),e(E,Ra),e(E,Gt),e(Gt,Ja),e(Gt,Bt),e(Bt,Ka),e(Gt,Za),e(E,Xa),e(E,Lo),e(Lo,Ya),e(E,Qa),e(E,Q),e(Q,No),e(No,Ut),e(Ut,es),e(Q,ts),e(Q,Ao),e(Ao,Ht),e(Ht,os),e(Q,ns),e(Q,Io),e(Io,Vt),e(Vt,as),e(Q,ss),e(Q,Do),e(Do,Rt),e(Rt,rs),e(E,is),e(E,Xe),w(Jt,Xe,null),e(Xe,ls),w(Ye,Xe,null),an=!0},p(t,[g]){const Kt={};g&2&&(Kt.$$scope={dirty:g,ctx:t}),Ne.$set(Kt);const So={};g&2&&(So.$$scope={dirty:g,ctx:t}),Ie.$set(So);const Wo={};g&2&&(Wo.$$scope={dirty:g,ctx:t}),De.$set(Wo);const Go={};g&2&&(Go.$$scope={dirty:g,ctx:t}),Ge.$set(Go);const Zt={};g&2&&(Zt.$$scope={dirty:g,ctx:t}),Ue.$set(Zt);const Bo={};g&2&&(Bo.$$scope={dirty:g,ctx:t}),He.$set(Bo);const Uo={};g&2&&(Uo.$$scope={dirty:g,ctx:t}),Ve.$set(Uo);const Ho={};g&2&&(Ho.$$scope={dirty:g,ctx:t}),Ke.$set(Ho);const Xt={};g&2&&(Xt.$$scope={dirty:g,ctx:t}),Ye.$set(Xt)},i(t){an||(P(r.$$.fragment,t),P(J.$$.fragment,t),P(Tt.$$.fragment,t),P(vt.$$.fragment,t),P(Ne.$$.fragment,t),P(bt.$$.fragment,t),P(kt.$$.fragment,t),P(Ot.$$.fragment,t),P(Ie.$$.fragment,t),P(De.$$.fragment,t),P(xt.$$.fragment,t),P(Mt.$$.fragment,t),P(Ft.$$.fragment,t),P(Ge.$$.fragment,t),P(zt.$$.fragment,t),P(Et.$$.fragment,t),P(Ue.$$.fragment,t),P(Lt.$$.fragment,t),P(He.$$.fragment,t),P(Ve.$$.fragment,t),P(Nt.$$.fragment,t),P(At.$$.fragment,t),P(It.$$.fragment,t),P(Ke.$$.fragment,t),P(Dt.$$.fragment,t),P(St.$$.fragment,t),P(Jt.$$.fragment,t),P(Ye.$$.fragment,t),an=!0)},o(t){$(r.$$.fragment,t),$(J.$$.fragment,t),$(Tt.$$.fragment,t),$(vt.$$.fragment,t),$(Ne.$$.fragment,t),$(bt.$$.fragment,t),$(kt.$$.fragment,t),$(Ot.$$.fragment,t),$(Ie.$$.fragment,t),$(De.$$.fragment,t),$(xt.$$.fragment,t),$(Mt.$$.fragment,t),$(Ft.$$.fragment,t),$(Ge.$$.fragment,t),$(zt.$$.fragment,t),$(Et.$$.fragment,t),$(Ue.$$.fragment,t),$(Lt.$$.fragment,t),$(He.$$.fragment,t),$(Ve.$$.fragment,t),$(Nt.$$.fragment,t),$(At.$$.fragment,t),$(It.$$.fragment,t),$(Ke.$$.fragment,t),$(Dt.$$.fragment,t),$(St.$$.fragment,t),$(Jt.$$.fragment,t),$(Ye.$$.fragment,t),an=!1},d(t){o(c),t&&o(v),t&&o(_),O(r),t&&o(pe),t&&o(M),O(J),t&&o(Me),t&&o(I),t&&o(D),t&&o(oe),t&&o(ze),t&&o(ne),t&&o(Ee),t&&o(j),t&&o(ae),t&&o(U),t&&o(ut),t&&o(F),t&&o(Vo),t&&o(ge),O(Tt),t&&o(Ro),t&&o(W),O(vt),O(Ne),t&&o(Jo),t&&o(ve),O(bt),t&&o(Ko),t&&o(G),O(kt),O(Ot),O(Ie),O(De),t&&o(Zo),t&&o(be),O(xt),t&&o(Xo),t&&o(ke),O(Mt),O(Ft),O(Ge),t&&o(Yo),t&&o(we),O(zt),t&&o(Qo),t&&o(L),O(Et),O(Ue),O(Lt),O(He),O(Ve),t&&o(en),t&&o($e),O(Nt),t&&o(tn),t&&o(Oe),O(At),O(It),O(Ke),t&&o(on),t&&o(xe),O(Dt),t&&o(nn),t&&o(E),O(St),O(Jt),O(Ye)}}}const xr={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function Mr(x){return gr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Lr extends hr{constructor(c){super();ur(this,c,Mr,Or,fr,{})}}export{Lr as default,xr as metadata};
