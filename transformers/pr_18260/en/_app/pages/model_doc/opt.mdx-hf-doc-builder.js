import{S as Il,i as Sl,s as Al,e as n,k as p,w as y,t as i,M as Dl,c as s,d as t,m as u,a,x as k,h as l,b as m,G as e,g,y as w,q as $,o as P,B as O,v as Gl,L as Ie}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zn}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Se}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ne}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Wl(F){let d,v,h,c,T;return c=new Se({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),v=i("Example:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function Hl(F){let d,v,h,c,T;return{c(){d=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),c=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var z=a(h);c=l(z,"Module"),z.forEach(t),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){g(r,d,f),e(d,v),e(d,h),e(h,c),e(d,T)},d(r){r&&t(d)}}}function Ul(F){let d,v,h,c,T;return c=new Se({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),v=i("Example:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function Bl(F){let d,v,h,c,T;return c=new Se({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

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
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),v=i("Example:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function Vl(F){let d,v,h,c,T,r,f,z,$e,ae,M,K,G,X,Pe,W,Oe,Te,A,H,Y,pe,E,L,re,Q,ve,ie,U,Fe,be,j,Me,J,Z,ee,te,ue,xe,B,ze,q,Ce;return{c(){d=n("p"),v=i("TF 2.0 models accepts two formats as inputs:"),h=p(),c=n("ul"),T=n("li"),r=i("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),z=n("li"),$e=i("having all inputs as a list, tuple or dict in the first positional arguments."),ae=p(),M=n("p"),K=i("This second option is useful when using "),G=n("code"),X=i("tf.keras.Model.fit"),Pe=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Oe=i("model(inputs)"),Te=i("."),A=p(),H=n("p"),Y=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=p(),E=n("ul"),L=n("li"),re=i("a single Tensor with "),Q=n("code"),ve=i("input_ids"),ie=i(" only and nothing else: "),U=n("code"),Fe=i("model(input_ids)"),be=p(),j=n("li"),Me=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),Z=i("model([input_ids, attention_mask])"),ee=i(" or "),te=n("code"),ue=i("model([input_ids, attention_mask, token_type_ids])"),xe=p(),B=n("li"),ze=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=n("code"),Ce=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=s(b,"P",{});var x=a(d);v=l(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),h=u(b),c=s(b,"UL",{});var he=a(c);T=s(he,"LI",{});var Ee=a(T);r=l(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=u(he),z=s(he,"LI",{});var Be=a(z);$e=l(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),he.forEach(t),ae=u(b),M=s(b,"P",{});var V=a(M);K=l(V,"This second option is useful when using "),G=s(V,"CODE",{});var qe=a(G);X=l(qe,"tf.keras.Model.fit"),qe.forEach(t),Pe=l(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(V,"CODE",{});var Ve=a(W);Oe=l(Ve,"model(inputs)"),Ve.forEach(t),Te=l(V,"."),V.forEach(t),A=u(b),H=s(b,"P",{});var Re=a(H);Y=l(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),pe=u(b),E=s(b,"UL",{});var N=a(E);L=s(N,"LI",{});var oe=a(L);re=l(oe,"a single Tensor with "),Q=s(oe,"CODE",{});var Ke=a(Q);ve=l(Ke,"input_ids"),Ke.forEach(t),ie=l(oe," only and nothing else: "),U=s(oe,"CODE",{});var Ae=a(U);Fe=l(Ae,"model(input_ids)"),Ae.forEach(t),oe.forEach(t),be=u(N),j=s(N,"LI",{});var C=a(j);Me=l(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(C,"CODE",{});var Je=a(J);Z=l(Je,"model([input_ids, attention_mask])"),Je.forEach(t),ee=l(C," or "),te=s(C,"CODE",{});var me=a(te);ue=l(me,"model([input_ids, attention_mask, token_type_ids])"),me.forEach(t),C.forEach(t),xe=u(N),B=s(N,"LI",{});var je=a(B);ze=l(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=s(je,"CODE",{});var Ze=a(q);Ce=l(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),je.forEach(t),N.forEach(t)},m(b,x){g(b,d,x),e(d,v),g(b,h,x),g(b,c,x),e(c,T),e(T,r),e(c,f),e(c,z),e(z,$e),g(b,ae,x),g(b,M,x),e(M,K),e(M,G),e(G,X),e(M,Pe),e(M,W),e(W,Oe),e(M,Te),g(b,A,x),g(b,H,x),e(H,Y),g(b,pe,x),g(b,E,x),e(E,L),e(L,re),e(L,Q),e(Q,ve),e(L,ie),e(L,U),e(U,Fe),e(E,be),e(E,j),e(j,Me),e(j,J),e(J,Z),e(j,ee),e(j,te),e(te,ue),e(E,xe),e(E,B),e(B,ze),e(B,q),e(q,Ce)},d(b){b&&t(d),b&&t(h),b&&t(c),b&&t(ae),b&&t(M),b&&t(A),b&&t(H),b&&t(pe),b&&t(E)}}}function Rl(F){let d,v,h,c,T;return{c(){d=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),c=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var z=a(h);c=l(z,"Module"),z.forEach(t),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){g(r,d,f),e(d,v),e(d,h),e(h,c),e(d,T)},d(r){r&&t(d)}}}function Kl(F){let d,v,h,c,T;return c=new Se({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = TFOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFOPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),v=i("Example:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function Jl(F){let d,v,h,c,T,r,f,z,$e,ae,M,K,G,X,Pe,W,Oe,Te,A,H,Y,pe,E,L,re,Q,ve,ie,U,Fe,be,j,Me,J,Z,ee,te,ue,xe,B,ze,q,Ce;return{c(){d=n("p"),v=i("TF 2.0 models accepts two formats as inputs:"),h=p(),c=n("ul"),T=n("li"),r=i("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),z=n("li"),$e=i("having all inputs as a list, tuple or dict in the first positional arguments."),ae=p(),M=n("p"),K=i("This second option is useful when using "),G=n("code"),X=i("tf.keras.Model.fit"),Pe=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Oe=i("model(inputs)"),Te=i("."),A=p(),H=n("p"),Y=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=p(),E=n("ul"),L=n("li"),re=i("a single Tensor with "),Q=n("code"),ve=i("input_ids"),ie=i(" only and nothing else: "),U=n("code"),Fe=i("model(input_ids)"),be=p(),j=n("li"),Me=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),Z=i("model([input_ids, attention_mask])"),ee=i(" or "),te=n("code"),ue=i("model([input_ids, attention_mask, token_type_ids])"),xe=p(),B=n("li"),ze=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=n("code"),Ce=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=s(b,"P",{});var x=a(d);v=l(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),h=u(b),c=s(b,"UL",{});var he=a(c);T=s(he,"LI",{});var Ee=a(T);r=l(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=u(he),z=s(he,"LI",{});var Be=a(z);$e=l(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),he.forEach(t),ae=u(b),M=s(b,"P",{});var V=a(M);K=l(V,"This second option is useful when using "),G=s(V,"CODE",{});var qe=a(G);X=l(qe,"tf.keras.Model.fit"),qe.forEach(t),Pe=l(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(V,"CODE",{});var Ve=a(W);Oe=l(Ve,"model(inputs)"),Ve.forEach(t),Te=l(V,"."),V.forEach(t),A=u(b),H=s(b,"P",{});var Re=a(H);Y=l(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),pe=u(b),E=s(b,"UL",{});var N=a(E);L=s(N,"LI",{});var oe=a(L);re=l(oe,"a single Tensor with "),Q=s(oe,"CODE",{});var Ke=a(Q);ve=l(Ke,"input_ids"),Ke.forEach(t),ie=l(oe," only and nothing else: "),U=s(oe,"CODE",{});var Ae=a(U);Fe=l(Ae,"model(input_ids)"),Ae.forEach(t),oe.forEach(t),be=u(N),j=s(N,"LI",{});var C=a(j);Me=l(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(C,"CODE",{});var Je=a(J);Z=l(Je,"model([input_ids, attention_mask])"),Je.forEach(t),ee=l(C," or "),te=s(C,"CODE",{});var me=a(te);ue=l(me,"model([input_ids, attention_mask, token_type_ids])"),me.forEach(t),C.forEach(t),xe=u(N),B=s(N,"LI",{});var je=a(B);ze=l(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=s(je,"CODE",{});var Ze=a(q);Ce=l(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),je.forEach(t),N.forEach(t)},m(b,x){g(b,d,x),e(d,v),g(b,h,x),g(b,c,x),e(c,T),e(T,r),e(c,f),e(c,z),e(z,$e),g(b,ae,x),g(b,M,x),e(M,K),e(M,G),e(G,X),e(M,Pe),e(M,W),e(W,Oe),e(M,Te),g(b,A,x),g(b,H,x),e(H,Y),g(b,pe,x),g(b,E,x),e(E,L),e(L,re),e(L,Q),e(Q,ve),e(L,ie),e(L,U),e(U,Fe),e(E,be),e(E,j),e(j,Me),e(j,J),e(J,Z),e(j,ee),e(j,te),e(te,ue),e(E,xe),e(E,B),e(B,ze),e(B,q),e(q,Ce)},d(b){b&&t(d),b&&t(h),b&&t(c),b&&t(ae),b&&t(M),b&&t(A),b&&t(H),b&&t(pe),b&&t(E)}}}function Zl(F){let d,v,h,c,T;return c=new Se({props:{code:`from transformers import GPT2Tokenizer, TFOPTForCausalLM

model = TFOPTForCausalLM.from_pretrained("facebook/opt-350m")
tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")

prompt = "Hey, are you consciours? Can you talk to me?"
inputs = tokenizer(prompt, return_tensors="tf")

# Generate
generate_ids = model.generate(inputs.input_ids, max_length=30)
tokenizer.batch_decode(generate_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFOPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generate_ids = model.generate(inputs.input_ids, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generate_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),v=i("Example:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function Xl(F){let d,v,h,c,T;return{c(){d=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),c=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var z=a(h);c=l(z,"Module"),z.forEach(t),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){g(r,d,f),e(d,v),e(d,h),e(h,c),e(d,T)},d(r){r&&t(d)}}}function Yl(F){let d,v,h,c,T;return c=new Se({props:{code:`import torch
from transformers import GPT2Tokenizer, OPTForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("None")
model = OPTForSequenceClassification.from_pretrained("None")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;None&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;None&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),v=i("Example of single-label classification:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example of single-label classification:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function Ql(F){let d,v;return d=new Se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = OPTForSequenceClassification.from_pretrained("None", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;None&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.28</span>`}}),{c(){y(d.$$.fragment)},l(h){k(d.$$.fragment,h)},m(h,c){w(d,h,c),v=!0},p:Ie,i(h){v||($(d.$$.fragment,h),v=!0)},o(h){P(d.$$.fragment,h),v=!1},d(h){O(d,h)}}}function ed(F){let d,v,h,c,T;return c=new Se({props:{code:`import torch
from transformers import GPT2Tokenizer, OPTForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("None")
model = OPTForSequenceClassification.from_pretrained("None", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;None&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;None&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),v=i("Example of multi-label classification:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example of multi-label classification:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function td(F){let d,v;return d=new Se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OPTForSequenceClassification.from_pretrained(
    "None", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;None&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(h){k(d.$$.fragment,h)},m(h,c){w(d,h,c),v=!0},p:Ie,i(h){v||($(d.$$.fragment,h),v=!0)},o(h){P(d.$$.fragment,h),v=!1},d(h){O(d,h)}}}function od(F){let d,v,h,c,T;return c=new Se({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),v=i("Example:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function nd(F){let d,v,h,c,T;return c=new Se({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTForCausalLM.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),v=i("Example:"),h=p(),y(c.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);v=l(f,"Example:"),f.forEach(t),h=u(r),k(c.$$.fragment,r)},m(r,f){g(r,d,f),e(d,v),g(r,h,f),w(c,r,f),T=!0},p:Ie,i(r){T||($(c.$$.fragment,r),T=!0)},o(r){P(c.$$.fragment,r),T=!1},d(r){r&&t(d),r&&t(h),O(c,r)}}}function sd(F){let d,v,h,c,T,r,f,z,$e,ae,M,K,G,X,Pe,W,Oe,Te,A,H,Y,pe,E,L,re,Q,ve,ie,U,Fe,be,j,Me,J,Z,ee,te,ue,xe,B,ze,q,Ce,b,x,he,Ee,Be,V,qe,Ve,Re,N,oe,Ke,Ae,C,Je,me,je,Ze,Bt,Ss,As,Vt,Ds,Gs,Rt,Ws,Hs,Xn,Xe,ut,ln,Kt,Us,dn,Bs,Yn,fe,Jt,Vs,Ye,Rs,Ho,Ks,Js,Zt,Zs,Xs,Ys,Qe,Qs,Uo,ea,ta,Bo,oa,na,sa,ht,Qn,et,mt,cn,Xt,aa,pn,ra,es,ge,Yt,ia,Qt,la,Vo,da,ca,pa,eo,ua,to,ha,ma,fa,ye,oo,ga,tt,_a,Ro,Ta,va,un,ba,ya,ka,ft,wa,gt,ts,ot,_t,hn,no,$a,mn,Pa,os,nt,so,Oa,Tt,ao,Fa,vt,ns,st,bt,fn,ro,Ma,gn,xa,ss,ne,io,za,lo,Ca,Ko,Ea,qa,ja,co,La,po,Na,Ia,Sa,yt,Aa,ke,uo,Da,at,Ga,Jo,Wa,Ha,_n,Ua,Ba,Va,kt,Ra,wt,as,rt,$t,Tn,ho,Ka,vn,Ja,rs,R,mo,Za,bn,Xa,Ya,fo,Qa,Zo,er,tr,or,go,nr,_o,sr,ar,rr,Pt,ir,Ot,To,lr,Ft,is,it,Mt,yn,vo,dr,kn,cr,ls,I,bo,pr,wn,ur,hr,Xo,Yo,mr,fr,gr,_e,_r,$n,Tr,vr,Pn,br,yr,On,kr,wr,Fn,$r,Pr,Or,yo,Fr,Qo,Mr,xr,zr,ko,Cr,wo,Er,qr,jr,D,$o,Lr,lt,Nr,en,Ir,Sr,Mn,Ar,Dr,Gr,xt,Wr,zt,Hr,Ct,Ur,Et,Br,qt,ds,dt,jt,xn,Po,Vr,zn,Rr,cs,ct,Oo,Kr,Lt,Fo,Jr,Nt,ps,pt,It,Cn,Mo,Zr,En,Xr,us,S,xo,Yr,qn,Qr,ei,zo,ti,tn,oi,ni,si,Co,ai,Eo,ri,ii,li,jn,di,ci,Le,Ln,qo,pi,ui,Nn,jo,hi,mi,In,Lo,fi,gi,Sn,No,_i,Ti,St,Io,vi,At,hs;return r=new Ue({}),X=new Ue({}),Kt=new Ue({}),Jt=new se({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"_remove_final_layer_norm",val:" = False"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/configuration_opt.py#L32"}}),ht=new Ne({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[Wl]},$$scope:{ctx:F}}}),Xt=new Ue({}),Yt=new se({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_18260/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_opt.py#L729"}}),oo=new se({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18260/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18260/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_opt.py#L745",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ft=new Zn({props:{$$slots:{default:[Hl]},$$scope:{ctx:F}}}),gt=new Ne({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[Ul]},$$scope:{ctx:F}}}),no=new Ue({}),so=new se({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_opt.py#L797"}}),ao=new se({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18260/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_opt.py#L828",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new Ne({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[Bl]},$$scope:{ctx:F}}}),ro=new Ue({}),io=new se({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18260/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_tf_opt.py#L782"}}),yt=new Zn({props:{$$slots:{default:[Vl]},$$scope:{ctx:F}}}),uo=new se({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18260/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOPTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_18260/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_tf_opt.py#L796",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kt=new Zn({props:{$$slots:{default:[Rl]},$$scope:{ctx:F}}}),wt=new Ne({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[Kl]},$$scope:{ctx:F}}}),ho=new Ue({}),mo=new se({props:{name:"class transformers.TFOPTForCausalLM",anchor:"transformers.TFOPTForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18260/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_tf_opt.py#L870"}}),Pt=new Zn({props:{$$slots:{default:[Jl]},$$scope:{ctx:F}}}),To=new se({props:{name:"call",anchor:"transformers.TFOPTForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOPTForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFOPTForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOPTForCausalLM.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.TFOPTForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFOPTForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFOPTForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFOPTForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18260/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_tf_opt.py#L895",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ft=new Ne({props:{anchor:"transformers.TFOPTForCausalLM.call.example",$$slots:{default:[Zl]},$$scope:{ctx:F}}}),vo=new Ue({}),bo=new se({props:{name:"class transformers.OPTForSequenceClassification",anchor:"transformers.OPTForSequenceClassification",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_18260/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_opt.py#L996"}}),$o=new se({props:{name:"forward",anchor:"transformers.OPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18260/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18260/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_opt.py#L1008",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xt=new Zn({props:{$$slots:{default:[Xl]},$$scope:{ctx:F}}}),zt=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example",$$slots:{default:[Yl]},$$scope:{ctx:F}}}),Ct=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-2",$$slots:{default:[Ql]},$$scope:{ctx:F}}}),Et=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-3",$$slots:{default:[ed]},$$scope:{ctx:F}}}),qt=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-4",$$slots:{default:[td]},$$scope:{ctx:F}}}),Po=new Ue({}),Oo=new se({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_flax_opt.py#L693"}}),Fo=new se({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_flax_opt.py#L585",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nt=new Ne({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[od]},$$scope:{ctx:F}}}),Mo=new Ue({}),xo=new se({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18260/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18260/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18260/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_flax_opt.py#L769"}}),Io=new se({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/vr_18260/src/transformers/models/opt/modeling_flax_opt.py#L585",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/pr_18260/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),At=new Ne({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[nd]},$$scope:{ctx:F}}}),{c(){d=n("meta"),v=p(),h=n("h1"),c=n("a"),T=n("span"),y(r.$$.fragment),f=p(),z=n("span"),$e=i("OPT"),ae=p(),M=n("h2"),K=n("a"),G=n("span"),y(X.$$.fragment),Pe=p(),W=n("span"),Oe=i("Overview"),Te=p(),A=n("p"),H=i("The OPT model was proposed in "),Y=n("a"),pe=i("Open Pre-trained Transformer Language Models"),E=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),L=p(),re=n("p"),Q=i("The abstract from the paper is the following:"),ve=p(),ie=n("p"),U=n("em"),Fe=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),be=p(),j=n("p"),Me=i("Tips:"),J=p(),Z=n("ul"),ee=n("li"),te=i("OPT has the same architecture as "),ue=n("code"),xe=i("BartDecoder"),B=i("."),ze=p(),q=n("li"),Ce=i("Contrary to GPT2, OPT adds the EOS token "),b=n("code"),x=i("</s>"),he=i(" to the beginning of every prompt. "),Ee=n("strong"),Be=i("Note"),V=i(": Make sure to pass "),qe=n("code"),Ve=i("use_fast=False"),Re=i(" when loading OPT\u2019s tokenizer with "),N=n("a"),oe=i("AutoTokenizer"),Ke=i(" to get the correct tokenizer."),Ae=p(),C=n("p"),Je=i("This model was contributed by "),me=n("a"),je=i("Arthur Zucker"),Ze=i(", "),Bt=n("a"),Ss=i("Younes Belkada"),As=i(", and "),Vt=n("a"),Ds=i("Patrick Von Platen"),Gs=i(`.
The original code can be found `),Rt=n("a"),Ws=i("here"),Hs=i("."),Xn=p(),Xe=n("h2"),ut=n("a"),ln=n("span"),y(Kt.$$.fragment),Us=p(),dn=n("span"),Bs=i("OPTConfig"),Yn=p(),fe=n("div"),y(Jt.$$.fragment),Vs=p(),Ye=n("p"),Rs=i("This is the configuration class to store the configuration of a "),Ho=n("a"),Ks=i("OPTModel"),Js=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),Zt=n("a"),Zs=i("facebook/opt-350m"),Xs=i(" architecture."),Ys=p(),Qe=n("p"),Qs=i("Configuration objects inherit from "),Uo=n("a"),ea=i("PretrainedConfig"),ta=i(` and can be used to control the model outputs. Read the
documentation from `),Bo=n("a"),oa=i("PretrainedConfig"),na=i(" for more information."),sa=p(),y(ht.$$.fragment),Qn=p(),et=n("h2"),mt=n("a"),cn=n("span"),y(Xt.$$.fragment),aa=p(),pn=n("span"),ra=i("OPTModel"),es=p(),ge=n("div"),y(Yt.$$.fragment),ia=p(),Qt=n("p"),la=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vo=n("a"),da=i("PreTrainedModel"),ca=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa=p(),eo=n("p"),ua=i("This model is also a PyTorch "),to=n("a"),ha=i("torch.nn.Module"),ma=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fa=p(),ye=n("div"),y(oo.$$.fragment),ga=p(),tt=n("p"),_a=i("The "),Ro=n("a"),Ta=i("OPTModel"),va=i(" forward method, overrides the "),un=n("code"),ba=i("__call__"),ya=i(" special method."),ka=p(),y(ft.$$.fragment),wa=p(),y(gt.$$.fragment),ts=p(),ot=n("h2"),_t=n("a"),hn=n("span"),y(no.$$.fragment),$a=p(),mn=n("span"),Pa=i("OPTForCausalLM"),os=p(),nt=n("div"),y(so.$$.fragment),Oa=p(),Tt=n("div"),y(ao.$$.fragment),Fa=p(),y(vt.$$.fragment),ns=p(),st=n("h2"),bt=n("a"),fn=n("span"),y(ro.$$.fragment),Ma=p(),gn=n("span"),xa=i("TFOPTModel"),ss=p(),ne=n("div"),y(io.$$.fragment),za=p(),lo=n("p"),Ca=i(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ko=n("a"),Ea=i("TFPreTrainedModel"),qa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja=p(),co=n("p"),La=i("This model is also a "),po=n("a"),Na=i("tf.keras.Model"),Ia=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sa=p(),y(yt.$$.fragment),Aa=p(),ke=n("div"),y(uo.$$.fragment),Da=p(),at=n("p"),Ga=i("The "),Jo=n("a"),Wa=i("TFOPTModel"),Ha=i(" forward method, overrides the "),_n=n("code"),Ua=i("__call__"),Ba=i(" special method."),Va=p(),y(kt.$$.fragment),Ra=p(),y(wt.$$.fragment),as=p(),rt=n("h2"),$t=n("a"),Tn=n("span"),y(ho.$$.fragment),Ka=p(),vn=n("span"),Ja=i("TFOPTForCausalLM"),rs=p(),R=n("div"),y(mo.$$.fragment),Za=p(),bn=n("p"),Xa=i("The OPT Model transformer with a language modeling head on top."),Ya=p(),fo=n("p"),Qa=i("This model inherits from "),Zo=n("a"),er=i("TFPreTrainedModel"),tr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=p(),go=n("p"),nr=i("This model is also a "),_o=n("a"),sr=i("tf.keras.Model"),ar=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rr=p(),y(Pt.$$.fragment),ir=p(),Ot=n("div"),y(To.$$.fragment),lr=p(),y(Ft.$$.fragment),is=p(),it=n("h2"),Mt=n("a"),yn=n("span"),y(vo.$$.fragment),dr=p(),kn=n("span"),cr=i("OPTForSequenceClassification"),ls=p(),I=n("div"),y(bo.$$.fragment),pr=p(),wn=n("p"),ur=i("The OPT Model transformer with a sequence classification head on top (linear layer)."),hr=p(),Xo=n("p"),Yo=n("a"),mr=i("OPTForSequenceClassification"),fr=i(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),gr=p(),_e=n("p"),_r=i(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),$n=n("code"),Tr=i("pad_token_id"),vr=i(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Pn=n("code"),br=i("pad_token_id"),yr=i(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),On=n("code"),kr=i("inputs_embeds"),wr=i(" are passed instead of "),Fn=n("code"),$r=i("input_ids"),Pr=i(`, it does the same (take the last value in
each row of the batch).`),Or=p(),yo=n("p"),Fr=i("This model inherits from "),Qo=n("a"),Mr=i("PreTrainedModel"),xr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zr=p(),ko=n("p"),Cr=i("This model is also a PyTorch "),wo=n("a"),Er=i("torch.nn.Module"),qr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jr=p(),D=n("div"),y($o.$$.fragment),Lr=p(),lt=n("p"),Nr=i("The "),en=n("a"),Ir=i("OPTForSequenceClassification"),Sr=i(" forward method, overrides the "),Mn=n("code"),Ar=i("__call__"),Dr=i(" special method."),Gr=p(),y(xt.$$.fragment),Wr=p(),y(zt.$$.fragment),Hr=p(),y(Ct.$$.fragment),Ur=p(),y(Et.$$.fragment),Br=p(),y(qt.$$.fragment),ds=p(),dt=n("h2"),jt=n("a"),xn=n("span"),y(Po.$$.fragment),Vr=p(),zn=n("span"),Rr=i("FlaxOPTModel"),cs=p(),ct=n("div"),y(Oo.$$.fragment),Kr=p(),Lt=n("div"),y(Fo.$$.fragment),Jr=p(),y(Nt.$$.fragment),ps=p(),pt=n("h2"),It=n("a"),Cn=n("span"),y(Mo.$$.fragment),Zr=p(),En=n("span"),Xr=i("FlaxOPTForCausalLM"),us=p(),S=n("div"),y(xo.$$.fragment),Yr=p(),qn=n("p"),Qr=i(`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),ei=p(),zo=n("p"),ti=i("This model inherits from "),tn=n("a"),oi=i("FlaxPreTrainedModel"),ni=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si=p(),Co=n("p"),ai=i(`This model is also a Flax Linen
`),Eo=n("a"),ri=i("flax.nn.Module"),ii=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),li=p(),jn=n("p"),di=i("Finally, this model supports inherent JAX features such as:"),ci=p(),Le=n("ul"),Ln=n("li"),qo=n("a"),pi=i("Just-In-Time (JIT) compilation"),ui=p(),Nn=n("li"),jo=n("a"),hi=i("Automatic Differentiation"),mi=p(),In=n("li"),Lo=n("a"),fi=i("Vectorization"),gi=p(),Sn=n("li"),No=n("a"),_i=i("Parallelization"),Ti=p(),St=n("div"),y(Io.$$.fragment),vi=p(),y(At.$$.fragment),this.h()},l(o){const _=Dl('[data-svelte="svelte-1phssyn"]',document.head);d=s(_,"META",{name:!0,content:!0}),_.forEach(t),v=u(o),h=s(o,"H1",{class:!0});var So=a(h);c=s(So,"A",{id:!0,class:!0,href:!0});var An=a(c);T=s(An,"SPAN",{});var Dn=a(T);k(r.$$.fragment,Dn),Dn.forEach(t),An.forEach(t),f=u(So),z=s(So,"SPAN",{});var Gn=a(z);$e=l(Gn,"OPT"),Gn.forEach(t),So.forEach(t),ae=u(o),M=s(o,"H2",{class:!0});var Ao=a(M);K=s(Ao,"A",{id:!0,class:!0,href:!0});var Wn=a(K);G=s(Wn,"SPAN",{});var Hn=a(G);k(X.$$.fragment,Hn),Hn.forEach(t),Wn.forEach(t),Pe=u(Ao),W=s(Ao,"SPAN",{});var Un=a(W);Oe=l(Un,"Overview"),Un.forEach(t),Ao.forEach(t),Te=u(o),A=s(o,"P",{});var Do=a(A);H=l(Do,"The OPT model was proposed in "),Y=s(Do,"A",{href:!0,rel:!0});var Bn=a(Y);pe=l(Bn,"Open Pre-trained Transformer Language Models"),Bn.forEach(t),E=l(Do,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),Do.forEach(t),L=u(o),re=s(o,"P",{});var Vn=a(re);Q=l(Vn,"The abstract from the paper is the following:"),Vn.forEach(t),ve=u(o),ie=s(o,"P",{});var Rn=a(ie);U=s(Rn,"EM",{});var Kn=a(U);Fe=l(Kn,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Kn.forEach(t),Rn.forEach(t),be=u(o),j=s(o,"P",{});var Jn=a(j);Me=l(Jn,"Tips:"),Jn.forEach(t),J=u(o),Z=s(o,"UL",{});var Go=a(Z);ee=s(Go,"LI",{});var Wo=a(ee);te=l(Wo,"OPT has the same architecture as "),ue=s(Wo,"CODE",{});var yi=a(ue);xe=l(yi,"BartDecoder"),yi.forEach(t),B=l(Wo,"."),Wo.forEach(t),ze=u(Go),q=s(Go,"LI",{});var De=a(q);Ce=l(De,"Contrary to GPT2, OPT adds the EOS token "),b=s(De,"CODE",{});var ki=a(b);x=l(ki,"</s>"),ki.forEach(t),he=l(De," to the beginning of every prompt. "),Ee=s(De,"STRONG",{});var wi=a(Ee);Be=l(wi,"Note"),wi.forEach(t),V=l(De,": Make sure to pass "),qe=s(De,"CODE",{});var $i=a(qe);Ve=l($i,"use_fast=False"),$i.forEach(t),Re=l(De," when loading OPT\u2019s tokenizer with "),N=s(De,"A",{href:!0});var Pi=a(N);oe=l(Pi,"AutoTokenizer"),Pi.forEach(t),Ke=l(De," to get the correct tokenizer."),De.forEach(t),Go.forEach(t),Ae=u(o),C=s(o,"P",{});var Ge=a(C);Je=l(Ge,"This model was contributed by "),me=s(Ge,"A",{href:!0,rel:!0});var Oi=a(me);je=l(Oi,"Arthur Zucker"),Oi.forEach(t),Ze=l(Ge,", "),Bt=s(Ge,"A",{href:!0,rel:!0});var Fi=a(Bt);Ss=l(Fi,"Younes Belkada"),Fi.forEach(t),As=l(Ge,", and "),Vt=s(Ge,"A",{href:!0,rel:!0});var Mi=a(Vt);Ds=l(Mi,"Patrick Von Platen"),Mi.forEach(t),Gs=l(Ge,`.
The original code can be found `),Rt=s(Ge,"A",{href:!0,rel:!0});var xi=a(Rt);Ws=l(xi,"here"),xi.forEach(t),Hs=l(Ge,"."),Ge.forEach(t),Xn=u(o),Xe=s(o,"H2",{class:!0});var ms=a(Xe);ut=s(ms,"A",{id:!0,class:!0,href:!0});var zi=a(ut);ln=s(zi,"SPAN",{});var Ci=a(ln);k(Kt.$$.fragment,Ci),Ci.forEach(t),zi.forEach(t),Us=u(ms),dn=s(ms,"SPAN",{});var Ei=a(dn);Bs=l(Ei,"OPTConfig"),Ei.forEach(t),ms.forEach(t),Yn=u(o),fe=s(o,"DIV",{class:!0});var Dt=a(fe);k(Jt.$$.fragment,Dt),Vs=u(Dt),Ye=s(Dt,"P",{});var on=a(Ye);Rs=l(on,"This is the configuration class to store the configuration of a "),Ho=s(on,"A",{href:!0});var qi=a(Ho);Ks=l(qi,"OPTModel"),qi.forEach(t),Js=l(on,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),Zt=s(on,"A",{href:!0,rel:!0});var ji=a(Zt);Zs=l(ji,"facebook/opt-350m"),ji.forEach(t),Xs=l(on," architecture."),on.forEach(t),Ys=u(Dt),Qe=s(Dt,"P",{});var nn=a(Qe);Qs=l(nn,"Configuration objects inherit from "),Uo=s(nn,"A",{href:!0});var Li=a(Uo);ea=l(Li,"PretrainedConfig"),Li.forEach(t),ta=l(nn,` and can be used to control the model outputs. Read the
documentation from `),Bo=s(nn,"A",{href:!0});var Ni=a(Bo);oa=l(Ni,"PretrainedConfig"),Ni.forEach(t),na=l(nn," for more information."),nn.forEach(t),sa=u(Dt),k(ht.$$.fragment,Dt),Dt.forEach(t),Qn=u(o),et=s(o,"H2",{class:!0});var fs=a(et);mt=s(fs,"A",{id:!0,class:!0,href:!0});var Ii=a(mt);cn=s(Ii,"SPAN",{});var Si=a(cn);k(Xt.$$.fragment,Si),Si.forEach(t),Ii.forEach(t),aa=u(fs),pn=s(fs,"SPAN",{});var Ai=a(pn);ra=l(Ai,"OPTModel"),Ai.forEach(t),fs.forEach(t),es=u(o),ge=s(o,"DIV",{class:!0});var Gt=a(ge);k(Yt.$$.fragment,Gt),ia=u(Gt),Qt=s(Gt,"P",{});var gs=a(Qt);la=l(gs,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vo=s(gs,"A",{href:!0});var Di=a(Vo);da=l(Di,"PreTrainedModel"),Di.forEach(t),ca=l(gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gs.forEach(t),pa=u(Gt),eo=s(Gt,"P",{});var _s=a(eo);ua=l(_s,"This model is also a PyTorch "),to=s(_s,"A",{href:!0,rel:!0});var Gi=a(to);ha=l(Gi,"torch.nn.Module"),Gi.forEach(t),ma=l(_s,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_s.forEach(t),fa=u(Gt),ye=s(Gt,"DIV",{class:!0});var Wt=a(ye);k(oo.$$.fragment,Wt),ga=u(Wt),tt=s(Wt,"P",{});var sn=a(tt);_a=l(sn,"The "),Ro=s(sn,"A",{href:!0});var Wi=a(Ro);Ta=l(Wi,"OPTModel"),Wi.forEach(t),va=l(sn," forward method, overrides the "),un=s(sn,"CODE",{});var Hi=a(un);ba=l(Hi,"__call__"),Hi.forEach(t),ya=l(sn," special method."),sn.forEach(t),ka=u(Wt),k(ft.$$.fragment,Wt),wa=u(Wt),k(gt.$$.fragment,Wt),Wt.forEach(t),Gt.forEach(t),ts=u(o),ot=s(o,"H2",{class:!0});var Ts=a(ot);_t=s(Ts,"A",{id:!0,class:!0,href:!0});var Ui=a(_t);hn=s(Ui,"SPAN",{});var Bi=a(hn);k(no.$$.fragment,Bi),Bi.forEach(t),Ui.forEach(t),$a=u(Ts),mn=s(Ts,"SPAN",{});var Vi=a(mn);Pa=l(Vi,"OPTForCausalLM"),Vi.forEach(t),Ts.forEach(t),os=u(o),nt=s(o,"DIV",{class:!0});var vs=a(nt);k(so.$$.fragment,vs),Oa=u(vs),Tt=s(vs,"DIV",{class:!0});var bs=a(Tt);k(ao.$$.fragment,bs),Fa=u(bs),k(vt.$$.fragment,bs),bs.forEach(t),vs.forEach(t),ns=u(o),st=s(o,"H2",{class:!0});var ys=a(st);bt=s(ys,"A",{id:!0,class:!0,href:!0});var Ri=a(bt);fn=s(Ri,"SPAN",{});var Ki=a(fn);k(ro.$$.fragment,Ki),Ki.forEach(t),Ri.forEach(t),Ma=u(ys),gn=s(ys,"SPAN",{});var Ji=a(gn);xa=l(Ji,"TFOPTModel"),Ji.forEach(t),ys.forEach(t),ss=u(o),ne=s(o,"DIV",{class:!0});var We=a(ne);k(io.$$.fragment,We),za=u(We),lo=s(We,"P",{});var ks=a(lo);Ca=l(ks,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ko=s(ks,"A",{href:!0});var Zi=a(Ko);Ea=l(Zi,"TFPreTrainedModel"),Zi.forEach(t),qa=l(ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ks.forEach(t),ja=u(We),co=s(We,"P",{});var ws=a(co);La=l(ws,"This model is also a "),po=s(ws,"A",{href:!0,rel:!0});var Xi=a(po);Na=l(Xi,"tf.keras.Model"),Xi.forEach(t),Ia=l(ws,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ws.forEach(t),Sa=u(We),k(yt.$$.fragment,We),Aa=u(We),ke=s(We,"DIV",{class:!0});var Ht=a(ke);k(uo.$$.fragment,Ht),Da=u(Ht),at=s(Ht,"P",{});var an=a(at);Ga=l(an,"The "),Jo=s(an,"A",{href:!0});var Yi=a(Jo);Wa=l(Yi,"TFOPTModel"),Yi.forEach(t),Ha=l(an," forward method, overrides the "),_n=s(an,"CODE",{});var Qi=a(_n);Ua=l(Qi,"__call__"),Qi.forEach(t),Ba=l(an," special method."),an.forEach(t),Va=u(Ht),k(kt.$$.fragment,Ht),Ra=u(Ht),k(wt.$$.fragment,Ht),Ht.forEach(t),We.forEach(t),as=u(o),rt=s(o,"H2",{class:!0});var $s=a(rt);$t=s($s,"A",{id:!0,class:!0,href:!0});var el=a($t);Tn=s(el,"SPAN",{});var tl=a(Tn);k(ho.$$.fragment,tl),tl.forEach(t),el.forEach(t),Ka=u($s),vn=s($s,"SPAN",{});var ol=a(vn);Ja=l(ol,"TFOPTForCausalLM"),ol.forEach(t),$s.forEach(t),rs=u(o),R=s(o,"DIV",{class:!0});var we=a(R);k(mo.$$.fragment,we),Za=u(we),bn=s(we,"P",{});var nl=a(bn);Xa=l(nl,"The OPT Model transformer with a language modeling head on top."),nl.forEach(t),Ya=u(we),fo=s(we,"P",{});var Ps=a(fo);Qa=l(Ps,"This model inherits from "),Zo=s(Ps,"A",{href:!0});var sl=a(Zo);er=l(sl,"TFPreTrainedModel"),sl.forEach(t),tr=l(Ps,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ps.forEach(t),or=u(we),go=s(we,"P",{});var Os=a(go);nr=l(Os,"This model is also a "),_o=s(Os,"A",{href:!0,rel:!0});var al=a(_o);sr=l(al,"tf.keras.Model"),al.forEach(t),ar=l(Os,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Os.forEach(t),rr=u(we),k(Pt.$$.fragment,we),ir=u(we),Ot=s(we,"DIV",{class:!0});var Fs=a(Ot);k(To.$$.fragment,Fs),lr=u(Fs),k(Ft.$$.fragment,Fs),Fs.forEach(t),we.forEach(t),is=u(o),it=s(o,"H2",{class:!0});var Ms=a(it);Mt=s(Ms,"A",{id:!0,class:!0,href:!0});var rl=a(Mt);yn=s(rl,"SPAN",{});var il=a(yn);k(vo.$$.fragment,il),il.forEach(t),rl.forEach(t),dr=u(Ms),kn=s(Ms,"SPAN",{});var ll=a(kn);cr=l(ll,"OPTForSequenceClassification"),ll.forEach(t),Ms.forEach(t),ls=u(o),I=s(o,"DIV",{class:!0});var le=a(I);k(bo.$$.fragment,le),pr=u(le),wn=s(le,"P",{});var dl=a(wn);ur=l(dl,"The OPT Model transformer with a sequence classification head on top (linear layer)."),dl.forEach(t),hr=u(le),Xo=s(le,"P",{});var bi=a(Xo);Yo=s(bi,"A",{href:!0});var cl=a(Yo);mr=l(cl,"OPTForSequenceClassification"),cl.forEach(t),fr=l(bi,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),bi.forEach(t),gr=u(le),_e=s(le,"P",{});var He=a(_e);_r=l(He,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),$n=s(He,"CODE",{});var pl=a($n);Tr=l(pl,"pad_token_id"),pl.forEach(t),vr=l(He,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Pn=s(He,"CODE",{});var ul=a(Pn);br=l(ul,"pad_token_id"),ul.forEach(t),yr=l(He,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),On=s(He,"CODE",{});var hl=a(On);kr=l(hl,"inputs_embeds"),hl.forEach(t),wr=l(He," are passed instead of "),Fn=s(He,"CODE",{});var ml=a(Fn);$r=l(ml,"input_ids"),ml.forEach(t),Pr=l(He,`, it does the same (take the last value in
each row of the batch).`),He.forEach(t),Or=u(le),yo=s(le,"P",{});var xs=a(yo);Fr=l(xs,"This model inherits from "),Qo=s(xs,"A",{href:!0});var fl=a(Qo);Mr=l(fl,"PreTrainedModel"),fl.forEach(t),xr=l(xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xs.forEach(t),zr=u(le),ko=s(le,"P",{});var zs=a(ko);Cr=l(zs,"This model is also a PyTorch "),wo=s(zs,"A",{href:!0,rel:!0});var gl=a(wo);Er=l(gl,"torch.nn.Module"),gl.forEach(t),qr=l(zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zs.forEach(t),jr=u(le),D=s(le,"DIV",{class:!0});var de=a(D);k($o.$$.fragment,de),Lr=u(de),lt=s(de,"P",{});var rn=a(lt);Nr=l(rn,"The "),en=s(rn,"A",{href:!0});var _l=a(en);Ir=l(_l,"OPTForSequenceClassification"),_l.forEach(t),Sr=l(rn," forward method, overrides the "),Mn=s(rn,"CODE",{});var Tl=a(Mn);Ar=l(Tl,"__call__"),Tl.forEach(t),Dr=l(rn," special method."),rn.forEach(t),Gr=u(de),k(xt.$$.fragment,de),Wr=u(de),k(zt.$$.fragment,de),Hr=u(de),k(Ct.$$.fragment,de),Ur=u(de),k(Et.$$.fragment,de),Br=u(de),k(qt.$$.fragment,de),de.forEach(t),le.forEach(t),ds=u(o),dt=s(o,"H2",{class:!0});var Cs=a(dt);jt=s(Cs,"A",{id:!0,class:!0,href:!0});var vl=a(jt);xn=s(vl,"SPAN",{});var bl=a(xn);k(Po.$$.fragment,bl),bl.forEach(t),vl.forEach(t),Vr=u(Cs),zn=s(Cs,"SPAN",{});var yl=a(zn);Rr=l(yl,"FlaxOPTModel"),yl.forEach(t),Cs.forEach(t),cs=u(o),ct=s(o,"DIV",{class:!0});var Es=a(ct);k(Oo.$$.fragment,Es),Kr=u(Es),Lt=s(Es,"DIV",{class:!0});var qs=a(Lt);k(Fo.$$.fragment,qs),Jr=u(qs),k(Nt.$$.fragment,qs),qs.forEach(t),Es.forEach(t),ps=u(o),pt=s(o,"H2",{class:!0});var js=a(pt);It=s(js,"A",{id:!0,class:!0,href:!0});var kl=a(It);Cn=s(kl,"SPAN",{});var wl=a(Cn);k(Mo.$$.fragment,wl),wl.forEach(t),kl.forEach(t),Zr=u(js),En=s(js,"SPAN",{});var $l=a(En);Xr=l($l,"FlaxOPTForCausalLM"),$l.forEach(t),js.forEach(t),us=u(o),S=s(o,"DIV",{class:!0});var ce=a(S);k(xo.$$.fragment,ce),Yr=u(ce),qn=s(ce,"P",{});var Pl=a(qn);Qr=l(Pl,`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),Pl.forEach(t),ei=u(ce),zo=s(ce,"P",{});var Ls=a(zo);ti=l(Ls,"This model inherits from "),tn=s(Ls,"A",{href:!0});var Ol=a(tn);oi=l(Ol,"FlaxPreTrainedModel"),Ol.forEach(t),ni=l(Ls,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ls.forEach(t),si=u(ce),Co=s(ce,"P",{});var Ns=a(Co);ai=l(Ns,`This model is also a Flax Linen
`),Eo=s(Ns,"A",{href:!0,rel:!0});var Fl=a(Eo);ri=l(Fl,"flax.nn.Module"),Fl.forEach(t),ii=l(Ns,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ns.forEach(t),li=u(ce),jn=s(ce,"P",{});var Ml=a(jn);di=l(Ml,"Finally, this model supports inherent JAX features such as:"),Ml.forEach(t),ci=u(ce),Le=s(ce,"UL",{});var Ut=a(Le);Ln=s(Ut,"LI",{});var xl=a(Ln);qo=s(xl,"A",{href:!0,rel:!0});var zl=a(qo);pi=l(zl,"Just-In-Time (JIT) compilation"),zl.forEach(t),xl.forEach(t),ui=u(Ut),Nn=s(Ut,"LI",{});var Cl=a(Nn);jo=s(Cl,"A",{href:!0,rel:!0});var El=a(jo);hi=l(El,"Automatic Differentiation"),El.forEach(t),Cl.forEach(t),mi=u(Ut),In=s(Ut,"LI",{});var ql=a(In);Lo=s(ql,"A",{href:!0,rel:!0});var jl=a(Lo);fi=l(jl,"Vectorization"),jl.forEach(t),ql.forEach(t),gi=u(Ut),Sn=s(Ut,"LI",{});var Ll=a(Sn);No=s(Ll,"A",{href:!0,rel:!0});var Nl=a(No);_i=l(Nl,"Parallelization"),Nl.forEach(t),Ll.forEach(t),Ut.forEach(t),Ti=u(ce),St=s(ce,"DIV",{class:!0});var Is=a(St);k(Io.$$.fragment,Is),vi=u(Is),k(At.$$.fragment,Is),Is.forEach(t),ce.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(ad)),m(c,"id","opt"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#opt"),m(h,"class","relative group"),m(K,"id","overview"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#overview"),m(M,"class","relative group"),m(Y,"href","https://arxiv.org/pdf/2205.01068"),m(Y,"rel","nofollow"),m(N,"href","/docs/transformers/pr_18260/en/model_doc/auto#transformers.AutoTokenizer"),m(me,"href","https://huggingface.co/ArthurZ"),m(me,"rel","nofollow"),m(Bt,"href","https://huggingface.co/ybelkada"),m(Bt,"rel","nofollow"),m(Vt,"href","https://huggingface.co/patrickvonplaten"),m(Vt,"rel","nofollow"),m(Rt,"href","https://github.com/facebookresearch/metaseq"),m(Rt,"rel","nofollow"),m(ut,"id","transformers.OPTConfig"),m(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ut,"href","#transformers.OPTConfig"),m(Xe,"class","relative group"),m(Ho,"href","/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTModel"),m(Zt,"href","https://huggingface.co/facebook/opt-350m"),m(Zt,"rel","nofollow"),m(Uo,"href","/docs/transformers/pr_18260/en/main_classes/configuration#transformers.PretrainedConfig"),m(Bo,"href","/docs/transformers/pr_18260/en/main_classes/configuration#transformers.PretrainedConfig"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mt,"id","transformers.OPTModel"),m(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mt,"href","#transformers.OPTModel"),m(et,"class","relative group"),m(Vo,"href","/docs/transformers/pr_18260/en/main_classes/model#transformers.PreTrainedModel"),m(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(to,"rel","nofollow"),m(Ro,"href","/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTModel"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"id","transformers.OPTForCausalLM"),m(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_t,"href","#transformers.OPTForCausalLM"),m(ot,"class","relative group"),m(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bt,"id","transformers.TFOPTModel"),m(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(bt,"href","#transformers.TFOPTModel"),m(st,"class","relative group"),m(Ko,"href","/docs/transformers/pr_18260/en/main_classes/model#transformers.TFPreTrainedModel"),m(po,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(po,"rel","nofollow"),m(Jo,"href","/docs/transformers/pr_18260/en/model_doc/opt#transformers.TFOPTModel"),m(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($t,"id","transformers.TFOPTForCausalLM"),m($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($t,"href","#transformers.TFOPTForCausalLM"),m(rt,"class","relative group"),m(Zo,"href","/docs/transformers/pr_18260/en/main_classes/model#transformers.TFPreTrainedModel"),m(_o,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(_o,"rel","nofollow"),m(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mt,"id","transformers.OPTForSequenceClassification"),m(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Mt,"href","#transformers.OPTForSequenceClassification"),m(it,"class","relative group"),m(Yo,"href","/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTForSequenceClassification"),m(Qo,"href","/docs/transformers/pr_18260/en/main_classes/model#transformers.PreTrainedModel"),m(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(wo,"rel","nofollow"),m(en,"href","/docs/transformers/pr_18260/en/model_doc/opt#transformers.OPTForSequenceClassification"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jt,"id","transformers.FlaxOPTModel"),m(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jt,"href","#transformers.FlaxOPTModel"),m(dt,"class","relative group"),m(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(It,"id","transformers.FlaxOPTForCausalLM"),m(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(It,"href","#transformers.FlaxOPTForCausalLM"),m(pt,"class","relative group"),m(tn,"href","/docs/transformers/pr_18260/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Eo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(Eo,"rel","nofollow"),m(qo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(qo,"rel","nofollow"),m(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(jo,"rel","nofollow"),m(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Lo,"rel","nofollow"),m(No,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(No,"rel","nofollow"),m(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,v,_),g(o,h,_),e(h,c),e(c,T),w(r,T,null),e(h,f),e(h,z),e(z,$e),g(o,ae,_),g(o,M,_),e(M,K),e(K,G),w(X,G,null),e(M,Pe),e(M,W),e(W,Oe),g(o,Te,_),g(o,A,_),e(A,H),e(A,Y),e(Y,pe),e(A,E),g(o,L,_),g(o,re,_),e(re,Q),g(o,ve,_),g(o,ie,_),e(ie,U),e(U,Fe),g(o,be,_),g(o,j,_),e(j,Me),g(o,J,_),g(o,Z,_),e(Z,ee),e(ee,te),e(ee,ue),e(ue,xe),e(ee,B),e(Z,ze),e(Z,q),e(q,Ce),e(q,b),e(b,x),e(q,he),e(q,Ee),e(Ee,Be),e(q,V),e(q,qe),e(qe,Ve),e(q,Re),e(q,N),e(N,oe),e(q,Ke),g(o,Ae,_),g(o,C,_),e(C,Je),e(C,me),e(me,je),e(C,Ze),e(C,Bt),e(Bt,Ss),e(C,As),e(C,Vt),e(Vt,Ds),e(C,Gs),e(C,Rt),e(Rt,Ws),e(C,Hs),g(o,Xn,_),g(o,Xe,_),e(Xe,ut),e(ut,ln),w(Kt,ln,null),e(Xe,Us),e(Xe,dn),e(dn,Bs),g(o,Yn,_),g(o,fe,_),w(Jt,fe,null),e(fe,Vs),e(fe,Ye),e(Ye,Rs),e(Ye,Ho),e(Ho,Ks),e(Ye,Js),e(Ye,Zt),e(Zt,Zs),e(Ye,Xs),e(fe,Ys),e(fe,Qe),e(Qe,Qs),e(Qe,Uo),e(Uo,ea),e(Qe,ta),e(Qe,Bo),e(Bo,oa),e(Qe,na),e(fe,sa),w(ht,fe,null),g(o,Qn,_),g(o,et,_),e(et,mt),e(mt,cn),w(Xt,cn,null),e(et,aa),e(et,pn),e(pn,ra),g(o,es,_),g(o,ge,_),w(Yt,ge,null),e(ge,ia),e(ge,Qt),e(Qt,la),e(Qt,Vo),e(Vo,da),e(Qt,ca),e(ge,pa),e(ge,eo),e(eo,ua),e(eo,to),e(to,ha),e(eo,ma),e(ge,fa),e(ge,ye),w(oo,ye,null),e(ye,ga),e(ye,tt),e(tt,_a),e(tt,Ro),e(Ro,Ta),e(tt,va),e(tt,un),e(un,ba),e(tt,ya),e(ye,ka),w(ft,ye,null),e(ye,wa),w(gt,ye,null),g(o,ts,_),g(o,ot,_),e(ot,_t),e(_t,hn),w(no,hn,null),e(ot,$a),e(ot,mn),e(mn,Pa),g(o,os,_),g(o,nt,_),w(so,nt,null),e(nt,Oa),e(nt,Tt),w(ao,Tt,null),e(Tt,Fa),w(vt,Tt,null),g(o,ns,_),g(o,st,_),e(st,bt),e(bt,fn),w(ro,fn,null),e(st,Ma),e(st,gn),e(gn,xa),g(o,ss,_),g(o,ne,_),w(io,ne,null),e(ne,za),e(ne,lo),e(lo,Ca),e(lo,Ko),e(Ko,Ea),e(lo,qa),e(ne,ja),e(ne,co),e(co,La),e(co,po),e(po,Na),e(co,Ia),e(ne,Sa),w(yt,ne,null),e(ne,Aa),e(ne,ke),w(uo,ke,null),e(ke,Da),e(ke,at),e(at,Ga),e(at,Jo),e(Jo,Wa),e(at,Ha),e(at,_n),e(_n,Ua),e(at,Ba),e(ke,Va),w(kt,ke,null),e(ke,Ra),w(wt,ke,null),g(o,as,_),g(o,rt,_),e(rt,$t),e($t,Tn),w(ho,Tn,null),e(rt,Ka),e(rt,vn),e(vn,Ja),g(o,rs,_),g(o,R,_),w(mo,R,null),e(R,Za),e(R,bn),e(bn,Xa),e(R,Ya),e(R,fo),e(fo,Qa),e(fo,Zo),e(Zo,er),e(fo,tr),e(R,or),e(R,go),e(go,nr),e(go,_o),e(_o,sr),e(go,ar),e(R,rr),w(Pt,R,null),e(R,ir),e(R,Ot),w(To,Ot,null),e(Ot,lr),w(Ft,Ot,null),g(o,is,_),g(o,it,_),e(it,Mt),e(Mt,yn),w(vo,yn,null),e(it,dr),e(it,kn),e(kn,cr),g(o,ls,_),g(o,I,_),w(bo,I,null),e(I,pr),e(I,wn),e(wn,ur),e(I,hr),e(I,Xo),e(Xo,Yo),e(Yo,mr),e(Xo,fr),e(I,gr),e(I,_e),e(_e,_r),e(_e,$n),e($n,Tr),e(_e,vr),e(_e,Pn),e(Pn,br),e(_e,yr),e(_e,On),e(On,kr),e(_e,wr),e(_e,Fn),e(Fn,$r),e(_e,Pr),e(I,Or),e(I,yo),e(yo,Fr),e(yo,Qo),e(Qo,Mr),e(yo,xr),e(I,zr),e(I,ko),e(ko,Cr),e(ko,wo),e(wo,Er),e(ko,qr),e(I,jr),e(I,D),w($o,D,null),e(D,Lr),e(D,lt),e(lt,Nr),e(lt,en),e(en,Ir),e(lt,Sr),e(lt,Mn),e(Mn,Ar),e(lt,Dr),e(D,Gr),w(xt,D,null),e(D,Wr),w(zt,D,null),e(D,Hr),w(Ct,D,null),e(D,Ur),w(Et,D,null),e(D,Br),w(qt,D,null),g(o,ds,_),g(o,dt,_),e(dt,jt),e(jt,xn),w(Po,xn,null),e(dt,Vr),e(dt,zn),e(zn,Rr),g(o,cs,_),g(o,ct,_),w(Oo,ct,null),e(ct,Kr),e(ct,Lt),w(Fo,Lt,null),e(Lt,Jr),w(Nt,Lt,null),g(o,ps,_),g(o,pt,_),e(pt,It),e(It,Cn),w(Mo,Cn,null),e(pt,Zr),e(pt,En),e(En,Xr),g(o,us,_),g(o,S,_),w(xo,S,null),e(S,Yr),e(S,qn),e(qn,Qr),e(S,ei),e(S,zo),e(zo,ti),e(zo,tn),e(tn,oi),e(zo,ni),e(S,si),e(S,Co),e(Co,ai),e(Co,Eo),e(Eo,ri),e(Co,ii),e(S,li),e(S,jn),e(jn,di),e(S,ci),e(S,Le),e(Le,Ln),e(Ln,qo),e(qo,pi),e(Le,ui),e(Le,Nn),e(Nn,jo),e(jo,hi),e(Le,mi),e(Le,In),e(In,Lo),e(Lo,fi),e(Le,gi),e(Le,Sn),e(Sn,No),e(No,_i),e(S,Ti),e(S,St),w(Io,St,null),e(St,vi),w(At,St,null),hs=!0},p(o,[_]){const So={};_&2&&(So.$$scope={dirty:_,ctx:o}),ht.$set(So);const An={};_&2&&(An.$$scope={dirty:_,ctx:o}),ft.$set(An);const Dn={};_&2&&(Dn.$$scope={dirty:_,ctx:o}),gt.$set(Dn);const Gn={};_&2&&(Gn.$$scope={dirty:_,ctx:o}),vt.$set(Gn);const Ao={};_&2&&(Ao.$$scope={dirty:_,ctx:o}),yt.$set(Ao);const Wn={};_&2&&(Wn.$$scope={dirty:_,ctx:o}),kt.$set(Wn);const Hn={};_&2&&(Hn.$$scope={dirty:_,ctx:o}),wt.$set(Hn);const Un={};_&2&&(Un.$$scope={dirty:_,ctx:o}),Pt.$set(Un);const Do={};_&2&&(Do.$$scope={dirty:_,ctx:o}),Ft.$set(Do);const Bn={};_&2&&(Bn.$$scope={dirty:_,ctx:o}),xt.$set(Bn);const Vn={};_&2&&(Vn.$$scope={dirty:_,ctx:o}),zt.$set(Vn);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:o}),Ct.$set(Rn);const Kn={};_&2&&(Kn.$$scope={dirty:_,ctx:o}),Et.$set(Kn);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),qt.$set(Jn);const Go={};_&2&&(Go.$$scope={dirty:_,ctx:o}),Nt.$set(Go);const Wo={};_&2&&(Wo.$$scope={dirty:_,ctx:o}),At.$set(Wo)},i(o){hs||($(r.$$.fragment,o),$(X.$$.fragment,o),$(Kt.$$.fragment,o),$(Jt.$$.fragment,o),$(ht.$$.fragment,o),$(Xt.$$.fragment,o),$(Yt.$$.fragment,o),$(oo.$$.fragment,o),$(ft.$$.fragment,o),$(gt.$$.fragment,o),$(no.$$.fragment,o),$(so.$$.fragment,o),$(ao.$$.fragment,o),$(vt.$$.fragment,o),$(ro.$$.fragment,o),$(io.$$.fragment,o),$(yt.$$.fragment,o),$(uo.$$.fragment,o),$(kt.$$.fragment,o),$(wt.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(Pt.$$.fragment,o),$(To.$$.fragment,o),$(Ft.$$.fragment,o),$(vo.$$.fragment,o),$(bo.$$.fragment,o),$($o.$$.fragment,o),$(xt.$$.fragment,o),$(zt.$$.fragment,o),$(Ct.$$.fragment,o),$(Et.$$.fragment,o),$(qt.$$.fragment,o),$(Po.$$.fragment,o),$(Oo.$$.fragment,o),$(Fo.$$.fragment,o),$(Nt.$$.fragment,o),$(Mo.$$.fragment,o),$(xo.$$.fragment,o),$(Io.$$.fragment,o),$(At.$$.fragment,o),hs=!0)},o(o){P(r.$$.fragment,o),P(X.$$.fragment,o),P(Kt.$$.fragment,o),P(Jt.$$.fragment,o),P(ht.$$.fragment,o),P(Xt.$$.fragment,o),P(Yt.$$.fragment,o),P(oo.$$.fragment,o),P(ft.$$.fragment,o),P(gt.$$.fragment,o),P(no.$$.fragment,o),P(so.$$.fragment,o),P(ao.$$.fragment,o),P(vt.$$.fragment,o),P(ro.$$.fragment,o),P(io.$$.fragment,o),P(yt.$$.fragment,o),P(uo.$$.fragment,o),P(kt.$$.fragment,o),P(wt.$$.fragment,o),P(ho.$$.fragment,o),P(mo.$$.fragment,o),P(Pt.$$.fragment,o),P(To.$$.fragment,o),P(Ft.$$.fragment,o),P(vo.$$.fragment,o),P(bo.$$.fragment,o),P($o.$$.fragment,o),P(xt.$$.fragment,o),P(zt.$$.fragment,o),P(Ct.$$.fragment,o),P(Et.$$.fragment,o),P(qt.$$.fragment,o),P(Po.$$.fragment,o),P(Oo.$$.fragment,o),P(Fo.$$.fragment,o),P(Nt.$$.fragment,o),P(Mo.$$.fragment,o),P(xo.$$.fragment,o),P(Io.$$.fragment,o),P(At.$$.fragment,o),hs=!1},d(o){t(d),o&&t(v),o&&t(h),O(r),o&&t(ae),o&&t(M),O(X),o&&t(Te),o&&t(A),o&&t(L),o&&t(re),o&&t(ve),o&&t(ie),o&&t(be),o&&t(j),o&&t(J),o&&t(Z),o&&t(Ae),o&&t(C),o&&t(Xn),o&&t(Xe),O(Kt),o&&t(Yn),o&&t(fe),O(Jt),O(ht),o&&t(Qn),o&&t(et),O(Xt),o&&t(es),o&&t(ge),O(Yt),O(oo),O(ft),O(gt),o&&t(ts),o&&t(ot),O(no),o&&t(os),o&&t(nt),O(so),O(ao),O(vt),o&&t(ns),o&&t(st),O(ro),o&&t(ss),o&&t(ne),O(io),O(yt),O(uo),O(kt),O(wt),o&&t(as),o&&t(rt),O(ho),o&&t(rs),o&&t(R),O(mo),O(Pt),O(To),O(Ft),o&&t(is),o&&t(it),O(vo),o&&t(ls),o&&t(I),O(bo),O($o),O(xt),O(zt),O(Ct),O(Et),O(qt),o&&t(ds),o&&t(dt),O(Po),o&&t(cs),o&&t(ct),O(Oo),O(Fo),O(Nt),o&&t(ps),o&&t(pt),O(Mo),o&&t(us),o&&t(S),O(xo),O(Io),O(At)}}}const ad={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.TFOPTForCausalLM",title:"TFOPTForCausalLM"},{local:"transformers.OPTForSequenceClassification",title:"OPTForSequenceClassification"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function rd(F){return Gl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hd extends Il{constructor(d){super();Sl(this,d,rd,sd,Al,{})}}export{hd as default,ad as metadata};
