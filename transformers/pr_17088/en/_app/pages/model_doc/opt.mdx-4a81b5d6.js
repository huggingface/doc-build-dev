import{S as el,i as tl,s as ol,e as n,k as c,w as b,t as d,M as nl,c as a,d as t,m as p,a as s,x as k,h as i,b as u,F as e,g as m,y as w,q as P,o as $,B as O,v as al,L as Dt}from"../../chunks/vendor-6b77c823.js";import{T as nn}from"../../chunks/Tip-39098574.js";import{D as oe}from"../../chunks/Docstring-1088f2fb.js";import{C as Rt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Re}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as St}from"../../chunks/ExampleCodeBlock-5212b321.js";function sl(M){let l,y,_,h,T;return h=new Rt({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function rl(M){let l,y,_,h,T;return{c(){l=n("p"),y=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=d("Module"),T=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var F=s(_);h=i(F,"Module"),F.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){m(r,l,f),e(l,y),e(l,_),e(_,h),e(l,T)},d(r){r&&t(l)}}}function dl(M){let l,y,_,h,T;return h=new Rt({props:{code:`from transformers import GPT2Tokenizer, OPTModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("")
model = OPTModel.from_pretrained("")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function il(M){let l,y,_,h,T;return h=new Rt({props:{code:`from transformers import OPTTokenizer, OPTForCausalLM

tokenizer = OPTTokenizer.from_pretrained("")
model = OPTForCausalLM.from_pretrained("", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTTokenizer, OPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OPTTokenizer.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function ll(M){let l,y,_,h,T,r,f,F,$e,ie,x,Y,W,ne,Oe,U,xe,me,X,G,_e,Q,j,C,le,V,Me,ge,D,Fe,Te,q,Ee,Z,ee,ze,A,je,qe,R,B,N,pe;return{c(){l=n("p"),y=d("TF 2.0 models accepts two formats as inputs:"),_=c(),h=n("ul"),T=n("li"),r=d("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),F=n("li"),$e=d("having all inputs as a list, tuple or dict in the first positional arguments."),ie=c(),x=n("p"),Y=d("This second option is useful when using "),W=n("code"),ne=d("tf.keras.Model.fit"),Oe=d(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),xe=d("model(inputs)"),me=d("."),X=c(),G=n("p"),_e=d(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),j=n("ul"),C=n("li"),le=d("a single Tensor with "),V=n("code"),Me=d("input_ids"),ge=d(" only and nothing else: "),D=n("code"),Fe=d("model(input_ids)"),Te=c(),q=n("li"),Ee=d(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=n("code"),ee=d("model([input_ids, attention_mask])"),ze=d(" or "),A=n("code"),je=d("model([input_ids, attention_mask, token_type_ids])"),qe=c(),R=n("li"),B=d(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=n("code"),pe=d('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=a(v,"P",{});var E=s(l);y=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),_=p(v),h=a(v,"UL",{});var ae=s(h);T=a(ae,"LI",{});var He=s(T);r=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),f=p(ae),F=a(ae,"LI",{});var Le=s(F);$e=i(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),ae.forEach(t),ie=p(v),x=a(v,"P",{});var z=s(x);Y=i(z,"This second option is useful when using "),W=a(z,"CODE",{});var he=s(W);ne=i(he,"tf.keras.Model.fit"),he.forEach(t),Oe=i(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(z,"CODE",{});var We=s(U);xe=i(We,"model(inputs)"),We.forEach(t),me=i(z,"."),z.forEach(t),X=p(v),G=a(v,"P",{});var se=s(G);_e=i(se,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se.forEach(t),Q=p(v),j=a(v,"UL",{});var K=s(j);C=a(K,"LI",{});var H=s(C);le=i(H,"a single Tensor with "),V=a(H,"CODE",{});var Ue=s(V);Me=i(Ue,"input_ids"),Ue.forEach(t),ge=i(H," only and nothing else: "),D=a(H,"CODE",{});var Ge=s(D);Fe=i(Ge,"model(input_ids)"),Ge.forEach(t),H.forEach(t),Te=p(K),q=a(K,"LI",{});var L=s(q);Ee=i(L,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a(L,"CODE",{});var Ve=s(Z);ee=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),ze=i(L," or "),A=a(L,"CODE",{});var Be=s(A);je=i(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),L.forEach(t),qe=p(K),R=a(K,"LI",{});var Ce=s(R);B=i(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Ce,"CODE",{});var re=s(N);pe=i(re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re.forEach(t),Ce.forEach(t),K.forEach(t)},m(v,E){m(v,l,E),e(l,y),m(v,_,E),m(v,h,E),e(h,T),e(T,r),e(h,f),e(h,F),e(F,$e),m(v,ie,E),m(v,x,E),e(x,Y),e(x,W),e(W,ne),e(x,Oe),e(x,U),e(U,xe),e(x,me),m(v,X,E),m(v,G,E),e(G,_e),m(v,Q,E),m(v,j,E),e(j,C),e(C,le),e(C,V),e(V,Me),e(C,ge),e(C,D),e(D,Fe),e(j,Te),e(j,q),e(q,Ee),e(q,Z),e(Z,ee),e(q,ze),e(q,A),e(A,je),e(j,qe),e(j,R),e(R,B),e(R,N),e(N,pe)},d(v){v&&t(l),v&&t(_),v&&t(h),v&&t(ie),v&&t(x),v&&t(X),v&&t(G),v&&t(Q),v&&t(j)}}}function cl(M){let l,y,_,h,T;return{c(){l=n("p"),y=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=d("Module"),T=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var F=s(_);h=i(F,"Module"),F.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){m(r,l,f),e(l,y),e(l,_),e(_,h),e(l,T)},d(r){r&&t(l)}}}function pl(M){let l,y,_,h,T;return h=new Rt({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function hl(M){let l,y,_,h,T,r,f,F,$e,ie,x,Y,W,ne,Oe,U,xe,me,X,G,_e,Q,j,C,le,V,Me,ge,D,Fe,Te,q,Ee,Z,ee,ze,A,je,qe,R,B,N,pe;return{c(){l=n("p"),y=d("TF 2.0 models accepts two formats as inputs:"),_=c(),h=n("ul"),T=n("li"),r=d("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),F=n("li"),$e=d("having all inputs as a list, tuple or dict in the first positional arguments."),ie=c(),x=n("p"),Y=d("This second option is useful when using "),W=n("code"),ne=d("tf.keras.Model.fit"),Oe=d(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),xe=d("model(inputs)"),me=d("."),X=c(),G=n("p"),_e=d(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),j=n("ul"),C=n("li"),le=d("a single Tensor with "),V=n("code"),Me=d("input_ids"),ge=d(" only and nothing else: "),D=n("code"),Fe=d("model(input_ids)"),Te=c(),q=n("li"),Ee=d(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=n("code"),ee=d("model([input_ids, attention_mask])"),ze=d(" or "),A=n("code"),je=d("model([input_ids, attention_mask, token_type_ids])"),qe=c(),R=n("li"),B=d(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=n("code"),pe=d('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=a(v,"P",{});var E=s(l);y=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),_=p(v),h=a(v,"UL",{});var ae=s(h);T=a(ae,"LI",{});var He=s(T);r=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),f=p(ae),F=a(ae,"LI",{});var Le=s(F);$e=i(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),ae.forEach(t),ie=p(v),x=a(v,"P",{});var z=s(x);Y=i(z,"This second option is useful when using "),W=a(z,"CODE",{});var he=s(W);ne=i(he,"tf.keras.Model.fit"),he.forEach(t),Oe=i(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(z,"CODE",{});var We=s(U);xe=i(We,"model(inputs)"),We.forEach(t),me=i(z,"."),z.forEach(t),X=p(v),G=a(v,"P",{});var se=s(G);_e=i(se,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se.forEach(t),Q=p(v),j=a(v,"UL",{});var K=s(j);C=a(K,"LI",{});var H=s(C);le=i(H,"a single Tensor with "),V=a(H,"CODE",{});var Ue=s(V);Me=i(Ue,"input_ids"),Ue.forEach(t),ge=i(H," only and nothing else: "),D=a(H,"CODE",{});var Ge=s(D);Fe=i(Ge,"model(input_ids)"),Ge.forEach(t),H.forEach(t),Te=p(K),q=a(K,"LI",{});var L=s(q);Ee=i(L,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a(L,"CODE",{});var Ve=s(Z);ee=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),ze=i(L," or "),A=a(L,"CODE",{});var Be=s(A);je=i(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),L.forEach(t),qe=p(K),R=a(K,"LI",{});var Ce=s(R);B=i(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Ce,"CODE",{});var re=s(N);pe=i(re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re.forEach(t),Ce.forEach(t),K.forEach(t)},m(v,E){m(v,l,E),e(l,y),m(v,_,E),m(v,h,E),e(h,T),e(T,r),e(h,f),e(h,F),e(F,$e),m(v,ie,E),m(v,x,E),e(x,Y),e(x,W),e(W,ne),e(x,Oe),e(x,U),e(U,xe),e(x,me),m(v,X,E),m(v,G,E),e(G,_e),m(v,Q,E),m(v,j,E),e(j,C),e(C,le),e(C,V),e(V,Me),e(C,ge),e(C,D),e(D,Fe),e(j,Te),e(j,q),e(q,Ee),e(q,Z),e(Z,ee),e(q,ze),e(q,A),e(A,je),e(j,qe),e(j,R),e(R,B),e(R,N),e(N,pe)},d(v){v&&t(l),v&&t(_),v&&t(h),v&&t(ie),v&&t(x),v&&t(X),v&&t(G),v&&t(Q),v&&t(j)}}}function ul(M){let l,y,_,h,T;return{c(){l=n("p"),y=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=d("Module"),T=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var F=s(_);h=i(F,"Module"),F.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){m(r,l,f),e(l,y),e(l,_),e(_,h),e(l,T)},d(r){r&&t(l)}}}function fl(M){let l,y,_,h,T;return h=new Rt({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("")
model = FlaxOPTModel.from_pretrained("")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function ml(M){let l,y,_,h,T;return h=new Rt({props:{code:`from transformers import OPTTokenizer, FlaxOPTForConditionalGeneration

model = FlaxOPTForConditionalGeneration.from_pretrained("facebook/opt-large-cnn")
tokenizer = OPTTokenizer.from_pretrained("facebook/opt-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTTokenizer, FlaxOPTForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/opt-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OPTTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function _l(M){let l,y,_,h,T;return h=new Rt({props:{code:`import jax.numpy as jnp
from transformers import OPTTokenizer, FlaxOPTForConditionalGeneration

model = FlaxOPTForConditionalGeneration.from_pretrained("facebook/opt-large-cnn")
tokenizer = OPTTokenizer.from_pretrained("facebook/opt-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTTokenizer, FlaxOPTForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/opt-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OPTTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function gl(M){let l,y,_,h,T;return{c(){l=n("p"),y=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=d("Module"),T=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var F=s(_);h=i(F,"Module"),F.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){m(r,l,f),e(l,y),e(l,_),e(_,h),e(l,T)},d(r){r&&t(l)}}}function Tl(M){let l,y,_,h,T;return h=new Rt({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){l=n("p"),y=d("Example:"),_=c(),b(h.$$.fragment)},l(r){l=a(r,"P",{});var f=s(l);y=i(f,"Example:"),f.forEach(t),_=p(r),k(h.$$.fragment,r)},m(r,f){m(r,l,f),e(l,y),m(r,_,f),w(h,r,f),T=!0},p:Dt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){$(h.$$.fragment,r),T=!1},d(r){r&&t(l),r&&t(_),O(h,r)}}}function vl(M){let l,y,_,h,T,r,f,F,$e,ie,x,Y,W,ne,Oe,U,xe,me,X,G,_e,Q,j,C,le,V,Me,ge,D,Fe,Te,q,Ee,Z,ee,ze,A,je,qe,R,B,N,pe,v,E,ae,He,Le,z,he,We,se,K,H,Ue,Ge,L,Ve,Be,Ce,re,Ha,Do,Wa,Ua,Ro,Ga,Va,Ba,rt,ta,Ke,dt,an,Ht,Ka,sn,Ja,oa,ue,Wt,Ya,Ut,Xa,Ho,Qa,Za,es,Gt,ts,Vt,os,ns,as,ve,Bt,ss,Je,rs,Wo,ds,is,rn,ls,cs,ps,it,hs,lt,na,Ye,ct,dn,Kt,us,ln,fs,aa,Ie,Jt,ms,Yt,_s,Uo,gs,Ts,vs,Xt,ys,Qt,bs,ks,sa,Xe,pt,cn,Zt,ws,pn,Ps,ra,Qe,eo,$s,ht,to,Os,ut,da,Ze,ft,hn,oo,xs,un,Ms,ia,de,no,Fs,ao,Es,Go,zs,js,qs,so,Cs,ro,Is,Ns,As,mt,Ls,ye,io,Ss,et,Ds,Vo,Rs,Hs,fn,Ws,Us,Gs,_t,Vs,gt,la,tt,Tt,mn,lo,Bs,_n,Ks,ca,J,co,Js,po,Ys,Bo,Xs,Qs,Zs,ho,er,uo,tr,or,nr,vt,ar,gn,sr,rr,be,fo,dr,Tn,ir,lr,mo,cr,vn,pr,hr,ur,fe,fr,yn,mr,_r,bn,gr,Tr,kn,vr,yr,wn,br,kr,pa,ot,yt,Pn,_o,wr,$n,Pr,ha,I,go,$r,To,Or,Ko,xr,Mr,Fr,vo,Er,yo,zr,jr,qr,On,Cr,Ir,Ne,xn,bo,Nr,Ar,Mn,ko,Lr,Sr,Fn,wo,Dr,Rr,En,Po,Hr,Wr,ke,$o,Ur,nt,Gr,zn,Vr,Br,jn,Kr,Jr,Yr,bt,Xr,kt,Qr,wt,Oo,Zr,Pt,ed,$t,xo,td,Ot,ua,at,xt,qn,Mo,od,Cn,nd,fa,S,Fo,ad,In,sd,rd,Eo,dd,Jo,id,ld,cd,zo,pd,jo,hd,ud,fd,Nn,md,_d,Ae,An,qo,gd,Td,Ln,Co,vd,yd,Sn,Io,bd,kd,Dn,No,wd,Pd,we,Ao,$d,st,Od,Rn,xd,Md,Hn,Fd,Ed,zd,Mt,jd,Ft,ma;return r=new Re({}),ne=new Re({}),v=new Re({}),he=new oe({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"max_position_embeddings",val:" = 2048"},{name:"num_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"ffn_dim",val:" = 4096"},{name:"layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"embed_dim",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"share_input_output_embed",val:" = True"},{name:"use_cache",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel">OPTModel</a> or <a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.TFOPTModel">TFOPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OPTConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.OPTConfig.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_layers"},{anchor:"transformers.OPTConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.OPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_attention_heads"},{anchor:"transformers.OPTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.OPTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.OPTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.OPTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"init_std"},{anchor:"transformers.OPTConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.OPTConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/configuration_opt.py#L34"}}),rt=new St({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[sl]},$$scope:{ctx:M}}}),Ht=new Re({}),Wt=new oe({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L881"}}),Bt=new oe({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>OPT uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L898",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new nn({props:{$$slots:{default:[rl]},$$scope:{ctx:M}}}),lt=new St({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[dl]},$$scope:{ctx:M}}}),Kt=new Re({}),Jt=new oe({props:{name:"class transformers.OPTPretrainedModel",anchor:"transformers.OPTPretrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTPretrainedModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L494"}}),Zt=new Re({}),eo=new oe({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L985"}}),to=new oe({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OPTForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.OPTForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.OPTForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.OPTForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L1016",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new St({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[il]},$$scope:{ctx:M}}}),oo=new Re({}),no=new oe({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_tf_opt.py#L1133"}}),mt=new nn({props:{$$slots:{default:[ll]},$$scope:{ctx:M}}}),io=new oe({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17088/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_tf_opt.py#L1148",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_t=new nn({props:{$$slots:{default:[cl]},$$scope:{ctx:M}}}),gt=new St({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[pl]},$$scope:{ctx:M}}}),lo=new Re({}),co=new oe({props:{name:"class transformers.TFOPTPretrainedModel",anchor:"transformers.TFOPTPretrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTPretrainedModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; OPTConfig`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_tf_opt.py#L487"}}),vt=new nn({props:{$$slots:{default:[hl]},$$scope:{ctx:M}}}),fo=new oe({props:{name:"call",anchor:"transformers.TFOPTPretrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),_o=new Re({}),go=new oe({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_flax_opt.py#L1243"}}),$o=new oe({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxOPTModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxOPTModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxOPTModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxOPTModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxOPTModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxOPTModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxOPTModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxOPTModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxOPTModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_flax_opt.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bt=new nn({props:{$$slots:{default:[ul]},$$scope:{ctx:M}}}),kt=new St({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[fl]},$$scope:{ctx:M}}}),Oo=new oe({props:{name:"encode",anchor:"transformers.FlaxOPTModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxOPTModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxOPTModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxOPTModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxOPTModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxOPTModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxOPTModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_flax_opt.py#L1000",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.opt.configuration_opt.OPTConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pt=new St({props:{anchor:"transformers.FlaxOPTModel.encode.example",$$slots:{default:[ml]},$$scope:{ctx:M}}}),xo=new oe({props:{name:"decode",anchor:"transformers.FlaxOPTModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxOPTModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxOPTModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxOPTModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxOPTModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxOPTModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxOPTModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxOPTModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxOPTModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxOPTModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_flax_opt.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.opt.configuration_opt.OPTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new St({props:{anchor:"transformers.FlaxOPTModel.decode.example",$$slots:{default:[_l]},$$scope:{ctx:M}}}),Mo=new Re({}),Fo=new oe({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_flax_opt.py#L1481"}}),Ao=new oe({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxOPTForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_flax_opt.py#L1316",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mt=new nn({props:{$$slots:{default:[gl]},$$scope:{ctx:M}}}),Ft=new St({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[Tl]},$$scope:{ctx:M}}}),{c(){l=n("meta"),y=c(),_=n("h1"),h=n("a"),T=n("span"),b(r.$$.fragment),f=c(),F=n("span"),$e=d("OPT"),ie=c(),x=n("h2"),Y=n("a"),W=n("span"),b(ne.$$.fragment),Oe=c(),U=n("span"),xe=d("Overview"),me=c(),X=n("p"),G=d(`The OPT model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),_e=c(),Q=n("p"),j=d("The abstract from the paper is the following:"),C=c(),le=n("p"),V=n("em"),Me=d("<INSERT PAPER ABSTRACT HERE>"),ge=c(),D=n("p"),Fe=d("Tips:"),Te=c(),q=n("p"),Ee=d("<INSERT TIPS ABOUT MODEL HERE>"),Z=c(),ee=n("p"),ze=d("This model was contributed by [INSERT YOUR HF USERNAME HERE]("),A=n("a"),je=d("https://huggingface.co/<INSERT"),qe=d(` YOUR HF USERNAME HERE>).
The original code can be found [here](<INSERT LINK TO GITHUB REPO HERE>).`),R=c(),B=n("h2"),N=n("a"),pe=n("span"),b(v.$$.fragment),E=c(),ae=n("span"),He=d("OPTConfig"),Le=c(),z=n("div"),b(he.$$.fragment),We=c(),se=n("p"),K=d("This is the configuration class to store the configuration of a "),H=n("a"),Ue=d("OPTModel"),Ge=d(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),L=n("a"),Ve=d("facebook/opt-large"),Be=d(" architecture."),Ce=c(),re=n("p"),Ha=d("Configuration objects inherit from "),Do=n("a"),Wa=d("PretrainedConfig"),Ua=d(` and can be used to control the model outputs. Read the
documentation from `),Ro=n("a"),Ga=d("PretrainedConfig"),Va=d(" for more information."),Ba=c(),b(rt.$$.fragment),ta=c(),Ke=n("h2"),dt=n("a"),an=n("span"),b(Ht.$$.fragment),Ka=c(),sn=n("span"),Ja=d("OPTModel"),oa=c(),ue=n("div"),b(Wt.$$.fragment),Ya=c(),Ut=n("p"),Xa=d(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ho=n("a"),Qa=d("PreTrainedModel"),Za=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),es=c(),Gt=n("p"),ts=d("This model is also a PyTorch "),Vt=n("a"),os=d("torch.nn.Module"),ns=d(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),as=c(),ve=n("div"),b(Bt.$$.fragment),ss=c(),Je=n("p"),rs=d("The "),Wo=n("a"),ds=d("OPTModel"),is=d(" forward method, overrides the "),rn=n("code"),ls=d("__call__"),cs=d(" special method."),ps=c(),b(it.$$.fragment),hs=c(),b(lt.$$.fragment),na=c(),Ye=n("h2"),ct=n("a"),dn=n("span"),b(Kt.$$.fragment),us=c(),ln=n("span"),fs=d("OPTPretrainedModel"),aa=c(),Ie=n("div"),b(Jt.$$.fragment),ms=c(),Yt=n("p"),_s=d(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Uo=n("a"),gs=d("PreTrainedModel"),Ts=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vs=c(),Xt=n("p"),ys=d("This model is also a PyTorch "),Qt=n("a"),bs=d("torch.nn.Module"),ks=d(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa=c(),Xe=n("h2"),pt=n("a"),cn=n("span"),b(Zt.$$.fragment),ws=c(),pn=n("span"),Ps=d("OPTForCausalLM"),ra=c(),Qe=n("div"),b(eo.$$.fragment),$s=c(),ht=n("div"),b(to.$$.fragment),Os=c(),b(ut.$$.fragment),da=c(),Ze=n("h2"),ft=n("a"),hn=n("span"),b(oo.$$.fragment),xs=c(),un=n("span"),Ms=d("TFOPTModel"),ia=c(),de=n("div"),b(no.$$.fragment),Fs=c(),ao=n("p"),Es=d(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Go=n("a"),zs=d("TFPreTrainedModel"),js=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qs=c(),so=n("p"),Cs=d("This model is also a "),ro=n("a"),Is=d("tf.keras.Model"),Ns=d(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),As=c(),b(mt.$$.fragment),Ls=c(),ye=n("div"),b(io.$$.fragment),Ss=c(),et=n("p"),Ds=d("The "),Vo=n("a"),Rs=d("TFOPTModel"),Hs=d(" forward method, overrides the "),fn=n("code"),Ws=d("__call__"),Us=d(" special method."),Gs=c(),b(_t.$$.fragment),Vs=c(),b(gt.$$.fragment),la=c(),tt=n("h2"),Tt=n("a"),mn=n("span"),b(lo.$$.fragment),Bs=c(),_n=n("span"),Ks=d("TFOPTPretrainedModel"),ca=c(),J=n("div"),b(co.$$.fragment),Js=c(),po=n("p"),Ys=d(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Bo=n("a"),Xs=d("TFPreTrainedModel"),Qs=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs=c(),ho=n("p"),er=d("This model is also a "),uo=n("a"),tr=d("tf.keras.Model"),or=d(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nr=c(),b(vt.$$.fragment),ar=c(),gn=n("p"),sr=d("TFOPT Pretrained Model that inheritates from transformers.TFPreTrainedModel"),rr=c(),be=n("div"),b(fo.$$.fragment),dr=c(),Tn=n("p"),ir=d("Calls the model on new inputs and returns the outputs as tensors."),lr=c(),mo=n("p"),cr=d("In this case "),vn=n("code"),pr=d("call()"),hr=d(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),ur=c(),fe=n("p"),fr=d(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),yn=n("code"),mr=d("tf.keras.Model"),_r=d(`.
To call a model on an input, always use the `),bn=n("code"),gr=d("__call__()"),Tr=d(` method,
i.e. `),kn=n("code"),vr=d("model(inputs)"),yr=d(", which relies on the underlying "),wn=n("code"),br=d("call()"),kr=d(" method."),pa=c(),ot=n("h2"),yt=n("a"),Pn=n("span"),b(_o.$$.fragment),wr=c(),$n=n("span"),Pr=d("FlaxOPTModel"),ha=c(),I=n("div"),b(go.$$.fragment),$r=c(),To=n("p"),Or=d(`The bare OPT Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ko=n("a"),xr=d("FlaxPreTrainedModel"),Mr=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fr=c(),vo=n("p"),Er=d(`This model is also a Flax Linen
`),yo=n("a"),zr=d("flax.nn.Module"),jr=d(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qr=c(),On=n("p"),Cr=d("Finally, this model supports inherent JAX features such as:"),Ir=c(),Ne=n("ul"),xn=n("li"),bo=n("a"),Nr=d("Just-In-Time (JIT) compilation"),Ar=c(),Mn=n("li"),ko=n("a"),Lr=d("Automatic Differentiation"),Sr=c(),Fn=n("li"),wo=n("a"),Dr=d("Vectorization"),Rr=c(),En=n("li"),Po=n("a"),Hr=d("Parallelization"),Wr=c(),ke=n("div"),b($o.$$.fragment),Ur=c(),nt=n("p"),Gr=d("The "),zn=n("code"),Vr=d("FlaxOPTPreTrainedModel"),Br=d(" forward method, overrides the "),jn=n("code"),Kr=d("__call__"),Jr=d(" special method."),Yr=c(),b(bt.$$.fragment),Xr=c(),b(kt.$$.fragment),Qr=c(),wt=n("div"),b(Oo.$$.fragment),Zr=c(),b(Pt.$$.fragment),ed=c(),$t=n("div"),b(xo.$$.fragment),td=c(),b(Ot.$$.fragment),ua=c(),at=n("h2"),xt=n("a"),qn=n("span"),b(Mo.$$.fragment),od=c(),Cn=n("span"),nd=d("FlaxOPTForCausalLM"),fa=c(),S=n("div"),b(Fo.$$.fragment),ad=c(),In=n("p"),sd=d(`OPT Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g
for autoregressive tasks.`),rd=c(),Eo=n("p"),dd=d("This model inherits from "),Jo=n("a"),id=d("FlaxPreTrainedModel"),ld=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd=c(),zo=n("p"),pd=d(`This model is also a Flax Linen
`),jo=n("a"),hd=d("flax.nn.Module"),ud=d(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fd=c(),Nn=n("p"),md=d("Finally, this model supports inherent JAX features such as:"),_d=c(),Ae=n("ul"),An=n("li"),qo=n("a"),gd=d("Just-In-Time (JIT) compilation"),Td=c(),Ln=n("li"),Co=n("a"),vd=d("Automatic Differentiation"),yd=c(),Sn=n("li"),Io=n("a"),bd=d("Vectorization"),kd=c(),Dn=n("li"),No=n("a"),wd=d("Parallelization"),Pd=c(),we=n("div"),b(Ao.$$.fragment),$d=c(),st=n("p"),Od=d("The "),Rn=n("code"),xd=d("FlaxOPTDecoderPreTrainedModel"),Md=d(" forward method, overrides the "),Hn=n("code"),Fd=d("__call__"),Ed=d(" special method."),zd=c(),b(Mt.$$.fragment),jd=c(),b(Ft.$$.fragment),this.h()},l(o){const g=nl('[data-svelte="svelte-1phssyn"]',document.head);l=a(g,"META",{name:!0,content:!0}),g.forEach(t),y=p(o),_=a(o,"H1",{class:!0});var Lo=s(_);h=a(Lo,"A",{id:!0,class:!0,href:!0});var Wn=s(h);T=a(Wn,"SPAN",{});var Un=s(T);k(r.$$.fragment,Un),Un.forEach(t),Wn.forEach(t),f=p(Lo),F=a(Lo,"SPAN",{});var Gn=s(F);$e=i(Gn,"OPT"),Gn.forEach(t),Lo.forEach(t),ie=p(o),x=a(o,"H2",{class:!0});var So=s(x);Y=a(So,"A",{id:!0,class:!0,href:!0});var Vn=s(Y);W=a(Vn,"SPAN",{});var Bn=s(W);k(ne.$$.fragment,Bn),Bn.forEach(t),Vn.forEach(t),Oe=p(So),U=a(So,"SPAN",{});var Kn=s(U);xe=i(Kn,"Overview"),Kn.forEach(t),So.forEach(t),me=p(o),X=a(o,"P",{});var Jn=s(X);G=i(Jn,`The OPT model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),Jn.forEach(t),_e=p(o),Q=a(o,"P",{});var Yn=s(Q);j=i(Yn,"The abstract from the paper is the following:"),Yn.forEach(t),C=p(o),le=a(o,"P",{});var Xn=s(le);V=a(Xn,"EM",{});var Qn=s(V);Me=i(Qn,"<INSERT PAPER ABSTRACT HERE>"),Qn.forEach(t),Xn.forEach(t),ge=p(o),D=a(o,"P",{});var Zn=s(D);Fe=i(Zn,"Tips:"),Zn.forEach(t),Te=p(o),q=a(o,"P",{});var ea=s(q);Ee=i(ea,"<INSERT TIPS ABOUT MODEL HERE>"),ea.forEach(t),Z=p(o),ee=a(o,"P",{});var _a=s(ee);ze=i(_a,"This model was contributed by [INSERT YOUR HF USERNAME HERE]("),A=a(_a,"A",{href:!0,rel:!0});var qd=s(A);je=i(qd,"https://huggingface.co/<INSERT"),qd.forEach(t),qe=i(_a,` YOUR HF USERNAME HERE>).
The original code can be found [here](<INSERT LINK TO GITHUB REPO HERE>).`),_a.forEach(t),R=p(o),B=a(o,"H2",{class:!0});var ga=s(B);N=a(ga,"A",{id:!0,class:!0,href:!0});var Cd=s(N);pe=a(Cd,"SPAN",{});var Id=s(pe);k(v.$$.fragment,Id),Id.forEach(t),Cd.forEach(t),E=p(ga),ae=a(ga,"SPAN",{});var Nd=s(ae);He=i(Nd,"OPTConfig"),Nd.forEach(t),ga.forEach(t),Le=p(o),z=a(o,"DIV",{class:!0});var Et=s(z);k(he.$$.fragment,Et),We=p(Et),se=a(Et,"P",{});var Yo=s(se);K=i(Yo,"This is the configuration class to store the configuration of a "),H=a(Yo,"A",{href:!0});var Ad=s(H);Ue=i(Ad,"OPTModel"),Ad.forEach(t),Ge=i(Yo,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),L=a(Yo,"A",{href:!0,rel:!0});var Ld=s(L);Ve=i(Ld,"facebook/opt-large"),Ld.forEach(t),Be=i(Yo," architecture."),Yo.forEach(t),Ce=p(Et),re=a(Et,"P",{});var Xo=s(re);Ha=i(Xo,"Configuration objects inherit from "),Do=a(Xo,"A",{href:!0});var Sd=s(Do);Wa=i(Sd,"PretrainedConfig"),Sd.forEach(t),Ua=i(Xo,` and can be used to control the model outputs. Read the
documentation from `),Ro=a(Xo,"A",{href:!0});var Dd=s(Ro);Ga=i(Dd,"PretrainedConfig"),Dd.forEach(t),Va=i(Xo," for more information."),Xo.forEach(t),Ba=p(Et),k(rt.$$.fragment,Et),Et.forEach(t),ta=p(o),Ke=a(o,"H2",{class:!0});var Ta=s(Ke);dt=a(Ta,"A",{id:!0,class:!0,href:!0});var Rd=s(dt);an=a(Rd,"SPAN",{});var Hd=s(an);k(Ht.$$.fragment,Hd),Hd.forEach(t),Rd.forEach(t),Ka=p(Ta),sn=a(Ta,"SPAN",{});var Wd=s(sn);Ja=i(Wd,"OPTModel"),Wd.forEach(t),Ta.forEach(t),oa=p(o),ue=a(o,"DIV",{class:!0});var zt=s(ue);k(Wt.$$.fragment,zt),Ya=p(zt),Ut=a(zt,"P",{});var va=s(Ut);Xa=i(va,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ho=a(va,"A",{href:!0});var Ud=s(Ho);Qa=i(Ud,"PreTrainedModel"),Ud.forEach(t),Za=i(va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),va.forEach(t),es=p(zt),Gt=a(zt,"P",{});var ya=s(Gt);ts=i(ya,"This model is also a PyTorch "),Vt=a(ya,"A",{href:!0,rel:!0});var Gd=s(Vt);os=i(Gd,"torch.nn.Module"),Gd.forEach(t),ns=i(ya,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ya.forEach(t),as=p(zt),ve=a(zt,"DIV",{class:!0});var jt=s(ve);k(Bt.$$.fragment,jt),ss=p(jt),Je=a(jt,"P",{});var Qo=s(Je);rs=i(Qo,"The "),Wo=a(Qo,"A",{href:!0});var Vd=s(Wo);ds=i(Vd,"OPTModel"),Vd.forEach(t),is=i(Qo," forward method, overrides the "),rn=a(Qo,"CODE",{});var Bd=s(rn);ls=i(Bd,"__call__"),Bd.forEach(t),cs=i(Qo," special method."),Qo.forEach(t),ps=p(jt),k(it.$$.fragment,jt),hs=p(jt),k(lt.$$.fragment,jt),jt.forEach(t),zt.forEach(t),na=p(o),Ye=a(o,"H2",{class:!0});var ba=s(Ye);ct=a(ba,"A",{id:!0,class:!0,href:!0});var Kd=s(ct);dn=a(Kd,"SPAN",{});var Jd=s(dn);k(Kt.$$.fragment,Jd),Jd.forEach(t),Kd.forEach(t),us=p(ba),ln=a(ba,"SPAN",{});var Yd=s(ln);fs=i(Yd,"OPTPretrainedModel"),Yd.forEach(t),ba.forEach(t),aa=p(o),Ie=a(o,"DIV",{class:!0});var Zo=s(Ie);k(Jt.$$.fragment,Zo),ms=p(Zo),Yt=a(Zo,"P",{});var ka=s(Yt);_s=i(ka,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Uo=a(ka,"A",{href:!0});var Xd=s(Uo);gs=i(Xd,"PreTrainedModel"),Xd.forEach(t),Ts=i(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka.forEach(t),vs=p(Zo),Xt=a(Zo,"P",{});var wa=s(Xt);ys=i(wa,"This model is also a PyTorch "),Qt=a(wa,"A",{href:!0,rel:!0});var Qd=s(Qt);bs=i(Qd,"torch.nn.Module"),Qd.forEach(t),ks=i(wa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wa.forEach(t),Zo.forEach(t),sa=p(o),Xe=a(o,"H2",{class:!0});var Pa=s(Xe);pt=a(Pa,"A",{id:!0,class:!0,href:!0});var Zd=s(pt);cn=a(Zd,"SPAN",{});var ei=s(cn);k(Zt.$$.fragment,ei),ei.forEach(t),Zd.forEach(t),ws=p(Pa),pn=a(Pa,"SPAN",{});var ti=s(pn);Ps=i(ti,"OPTForCausalLM"),ti.forEach(t),Pa.forEach(t),ra=p(o),Qe=a(o,"DIV",{class:!0});var $a=s(Qe);k(eo.$$.fragment,$a),$s=p($a),ht=a($a,"DIV",{class:!0});var Oa=s(ht);k(to.$$.fragment,Oa),Os=p(Oa),k(ut.$$.fragment,Oa),Oa.forEach(t),$a.forEach(t),da=p(o),Ze=a(o,"H2",{class:!0});var xa=s(Ze);ft=a(xa,"A",{id:!0,class:!0,href:!0});var oi=s(ft);hn=a(oi,"SPAN",{});var ni=s(hn);k(oo.$$.fragment,ni),ni.forEach(t),oi.forEach(t),xs=p(xa),un=a(xa,"SPAN",{});var ai=s(un);Ms=i(ai,"TFOPTModel"),ai.forEach(t),xa.forEach(t),ia=p(o),de=a(o,"DIV",{class:!0});var Se=s(de);k(no.$$.fragment,Se),Fs=p(Se),ao=a(Se,"P",{});var Ma=s(ao);Es=i(Ma,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Go=a(Ma,"A",{href:!0});var si=s(Go);zs=i(si,"TFPreTrainedModel"),si.forEach(t),js=i(Ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ma.forEach(t),qs=p(Se),so=a(Se,"P",{});var Fa=s(so);Cs=i(Fa,"This model is also a "),ro=a(Fa,"A",{href:!0,rel:!0});var ri=s(ro);Is=i(ri,"tf.keras.Model"),ri.forEach(t),Ns=i(Fa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fa.forEach(t),As=p(Se),k(mt.$$.fragment,Se),Ls=p(Se),ye=a(Se,"DIV",{class:!0});var qt=s(ye);k(io.$$.fragment,qt),Ss=p(qt),et=a(qt,"P",{});var en=s(et);Ds=i(en,"The "),Vo=a(en,"A",{href:!0});var di=s(Vo);Rs=i(di,"TFOPTModel"),di.forEach(t),Hs=i(en," forward method, overrides the "),fn=a(en,"CODE",{});var ii=s(fn);Ws=i(ii,"__call__"),ii.forEach(t),Us=i(en," special method."),en.forEach(t),Gs=p(qt),k(_t.$$.fragment,qt),Vs=p(qt),k(gt.$$.fragment,qt),qt.forEach(t),Se.forEach(t),la=p(o),tt=a(o,"H2",{class:!0});var Ea=s(tt);Tt=a(Ea,"A",{id:!0,class:!0,href:!0});var li=s(Tt);mn=a(li,"SPAN",{});var ci=s(mn);k(lo.$$.fragment,ci),ci.forEach(t),li.forEach(t),Bs=p(Ea),_n=a(Ea,"SPAN",{});var pi=s(_n);Ks=i(pi,"TFOPTPretrainedModel"),pi.forEach(t),Ea.forEach(t),ca=p(o),J=a(o,"DIV",{class:!0});var Pe=s(J);k(co.$$.fragment,Pe),Js=p(Pe),po=a(Pe,"P",{});var za=s(po);Ys=i(za,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Bo=a(za,"A",{href:!0});var hi=s(Bo);Xs=i(hi,"TFPreTrainedModel"),hi.forEach(t),Qs=i(za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),za.forEach(t),Zs=p(Pe),ho=a(Pe,"P",{});var ja=s(ho);er=i(ja,"This model is also a "),uo=a(ja,"A",{href:!0,rel:!0});var ui=s(uo);tr=i(ui,"tf.keras.Model"),ui.forEach(t),or=i(ja,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ja.forEach(t),nr=p(Pe),k(vt.$$.fragment,Pe),ar=p(Pe),gn=a(Pe,"P",{});var fi=s(gn);sr=i(fi,"TFOPT Pretrained Model that inheritates from transformers.TFPreTrainedModel"),fi.forEach(t),rr=p(Pe),be=a(Pe,"DIV",{class:!0});var Ct=s(be);k(fo.$$.fragment,Ct),dr=p(Ct),Tn=a(Ct,"P",{});var mi=s(Tn);ir=i(mi,"Calls the model on new inputs and returns the outputs as tensors."),mi.forEach(t),lr=p(Ct),mo=a(Ct,"P",{});var qa=s(mo);cr=i(qa,"In this case "),vn=a(qa,"CODE",{});var _i=s(vn);pr=i(_i,"call()"),_i.forEach(t),hr=i(qa,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),qa.forEach(t),ur=p(Ct),fe=a(Ct,"P",{});var De=s(fe);fr=i(De,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),yn=a(De,"CODE",{});var gi=s(yn);mr=i(gi,"tf.keras.Model"),gi.forEach(t),_r=i(De,`.
To call a model on an input, always use the `),bn=a(De,"CODE",{});var Ti=s(bn);gr=i(Ti,"__call__()"),Ti.forEach(t),Tr=i(De,` method,
i.e. `),kn=a(De,"CODE",{});var vi=s(kn);vr=i(vi,"model(inputs)"),vi.forEach(t),yr=i(De,", which relies on the underlying "),wn=a(De,"CODE",{});var yi=s(wn);br=i(yi,"call()"),yi.forEach(t),kr=i(De," method."),De.forEach(t),Ct.forEach(t),Pe.forEach(t),pa=p(o),ot=a(o,"H2",{class:!0});var Ca=s(ot);yt=a(Ca,"A",{id:!0,class:!0,href:!0});var bi=s(yt);Pn=a(bi,"SPAN",{});var ki=s(Pn);k(_o.$$.fragment,ki),ki.forEach(t),bi.forEach(t),wr=p(Ca),$n=a(Ca,"SPAN",{});var wi=s($n);Pr=i(wi,"FlaxOPTModel"),wi.forEach(t),Ca.forEach(t),ha=p(o),I=a(o,"DIV",{class:!0});var te=s(I);k(go.$$.fragment,te),$r=p(te),To=a(te,"P",{});var Ia=s(To);Or=i(Ia,`The bare OPT Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ko=a(Ia,"A",{href:!0});var Pi=s(Ko);xr=i(Pi,"FlaxPreTrainedModel"),Pi.forEach(t),Mr=i(Ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ia.forEach(t),Fr=p(te),vo=a(te,"P",{});var Na=s(vo);Er=i(Na,`This model is also a Flax Linen
`),yo=a(Na,"A",{href:!0,rel:!0});var $i=s(yo);zr=i($i,"flax.nn.Module"),$i.forEach(t),jr=i(Na,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Na.forEach(t),qr=p(te),On=a(te,"P",{});var Oi=s(On);Cr=i(Oi,"Finally, this model supports inherent JAX features such as:"),Oi.forEach(t),Ir=p(te),Ne=a(te,"UL",{});var It=s(Ne);xn=a(It,"LI",{});var xi=s(xn);bo=a(xi,"A",{href:!0,rel:!0});var Mi=s(bo);Nr=i(Mi,"Just-In-Time (JIT) compilation"),Mi.forEach(t),xi.forEach(t),Ar=p(It),Mn=a(It,"LI",{});var Fi=s(Mn);ko=a(Fi,"A",{href:!0,rel:!0});var Ei=s(ko);Lr=i(Ei,"Automatic Differentiation"),Ei.forEach(t),Fi.forEach(t),Sr=p(It),Fn=a(It,"LI",{});var zi=s(Fn);wo=a(zi,"A",{href:!0,rel:!0});var ji=s(wo);Dr=i(ji,"Vectorization"),ji.forEach(t),zi.forEach(t),Rr=p(It),En=a(It,"LI",{});var qi=s(En);Po=a(qi,"A",{href:!0,rel:!0});var Ci=s(Po);Hr=i(Ci,"Parallelization"),Ci.forEach(t),qi.forEach(t),It.forEach(t),Wr=p(te),ke=a(te,"DIV",{class:!0});var Nt=s(ke);k($o.$$.fragment,Nt),Ur=p(Nt),nt=a(Nt,"P",{});var tn=s(nt);Gr=i(tn,"The "),zn=a(tn,"CODE",{});var Ii=s(zn);Vr=i(Ii,"FlaxOPTPreTrainedModel"),Ii.forEach(t),Br=i(tn," forward method, overrides the "),jn=a(tn,"CODE",{});var Ni=s(jn);Kr=i(Ni,"__call__"),Ni.forEach(t),Jr=i(tn," special method."),tn.forEach(t),Yr=p(Nt),k(bt.$$.fragment,Nt),Xr=p(Nt),k(kt.$$.fragment,Nt),Nt.forEach(t),Qr=p(te),wt=a(te,"DIV",{class:!0});var Aa=s(wt);k(Oo.$$.fragment,Aa),Zr=p(Aa),k(Pt.$$.fragment,Aa),Aa.forEach(t),ed=p(te),$t=a(te,"DIV",{class:!0});var La=s($t);k(xo.$$.fragment,La),td=p(La),k(Ot.$$.fragment,La),La.forEach(t),te.forEach(t),ua=p(o),at=a(o,"H2",{class:!0});var Sa=s(at);xt=a(Sa,"A",{id:!0,class:!0,href:!0});var Ai=s(xt);qn=a(Ai,"SPAN",{});var Li=s(qn);k(Mo.$$.fragment,Li),Li.forEach(t),Ai.forEach(t),od=p(Sa),Cn=a(Sa,"SPAN",{});var Si=s(Cn);nd=i(Si,"FlaxOPTForCausalLM"),Si.forEach(t),Sa.forEach(t),fa=p(o),S=a(o,"DIV",{class:!0});var ce=s(S);k(Fo.$$.fragment,ce),ad=p(ce),In=a(ce,"P",{});var Di=s(In);sd=i(Di,`OPT Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g
for autoregressive tasks.`),Di.forEach(t),rd=p(ce),Eo=a(ce,"P",{});var Da=s(Eo);dd=i(Da,"This model inherits from "),Jo=a(Da,"A",{href:!0});var Ri=s(Jo);id=i(Ri,"FlaxPreTrainedModel"),Ri.forEach(t),ld=i(Da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Da.forEach(t),cd=p(ce),zo=a(ce,"P",{});var Ra=s(zo);pd=i(Ra,`This model is also a Flax Linen
`),jo=a(Ra,"A",{href:!0,rel:!0});var Hi=s(jo);hd=i(Hi,"flax.nn.Module"),Hi.forEach(t),ud=i(Ra,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ra.forEach(t),fd=p(ce),Nn=a(ce,"P",{});var Wi=s(Nn);md=i(Wi,"Finally, this model supports inherent JAX features such as:"),Wi.forEach(t),_d=p(ce),Ae=a(ce,"UL",{});var At=s(Ae);An=a(At,"LI",{});var Ui=s(An);qo=a(Ui,"A",{href:!0,rel:!0});var Gi=s(qo);gd=i(Gi,"Just-In-Time (JIT) compilation"),Gi.forEach(t),Ui.forEach(t),Td=p(At),Ln=a(At,"LI",{});var Vi=s(Ln);Co=a(Vi,"A",{href:!0,rel:!0});var Bi=s(Co);vd=i(Bi,"Automatic Differentiation"),Bi.forEach(t),Vi.forEach(t),yd=p(At),Sn=a(At,"LI",{});var Ki=s(Sn);Io=a(Ki,"A",{href:!0,rel:!0});var Ji=s(Io);bd=i(Ji,"Vectorization"),Ji.forEach(t),Ki.forEach(t),kd=p(At),Dn=a(At,"LI",{});var Yi=s(Dn);No=a(Yi,"A",{href:!0,rel:!0});var Xi=s(No);wd=i(Xi,"Parallelization"),Xi.forEach(t),Yi.forEach(t),At.forEach(t),Pd=p(ce),we=a(ce,"DIV",{class:!0});var Lt=s(we);k(Ao.$$.fragment,Lt),$d=p(Lt),st=a(Lt,"P",{});var on=s(st);Od=i(on,"The "),Rn=a(on,"CODE",{});var Qi=s(Rn);xd=i(Qi,"FlaxOPTDecoderPreTrainedModel"),Qi.forEach(t),Md=i(on," forward method, overrides the "),Hn=a(on,"CODE",{});var Zi=s(Hn);Fd=i(Zi,"__call__"),Zi.forEach(t),Ed=i(on," special method."),on.forEach(t),zd=p(Lt),k(Mt.$$.fragment,Lt),jd=p(Lt),k(Ft.$$.fragment,Lt),Lt.forEach(t),ce.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(yl)),u(h,"id","opt"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#opt"),u(_,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(x,"class","relative group"),u(A,"href","https://huggingface.co/<INSERT"),u(A,"rel","nofollow"),u(N,"id","transformers.OPTConfig"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#transformers.OPTConfig"),u(B,"class","relative group"),u(H,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),u(L,"href","https://huggingface.co/facebook/opt-large"),u(L,"rel","nofollow"),u(Do,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ro,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"id","transformers.OPTModel"),u(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dt,"href","#transformers.OPTModel"),u(Ke,"class","relative group"),u(Ho,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),u(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vt,"rel","nofollow"),u(Wo,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),u(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"id","transformers.OPTPretrainedModel"),u(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ct,"href","#transformers.OPTPretrainedModel"),u(Ye,"class","relative group"),u(Uo,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),u(Qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qt,"rel","nofollow"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"id","transformers.OPTForCausalLM"),u(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pt,"href","#transformers.OPTForCausalLM"),u(Xe,"class","relative group"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"id","transformers.TFOPTModel"),u(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ft,"href","#transformers.TFOPTModel"),u(Ze,"class","relative group"),u(Go,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.TFPreTrainedModel"),u(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ro,"rel","nofollow"),u(Vo,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.TFOPTModel"),u(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"id","transformers.TFOPTPretrainedModel"),u(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tt,"href","#transformers.TFOPTPretrainedModel"),u(tt,"class","relative group"),u(Bo,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.TFPreTrainedModel"),u(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(uo,"rel","nofollow"),u(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"id","transformers.FlaxOPTModel"),u(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yt,"href","#transformers.FlaxOPTModel"),u(ot,"class","relative group"),u(Ko,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(yo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(yo,"rel","nofollow"),u(bo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bo,"rel","nofollow"),u(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ko,"rel","nofollow"),u(wo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wo,"rel","nofollow"),u(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Po,"rel","nofollow"),u(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"id","transformers.FlaxOPTForCausalLM"),u(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xt,"href","#transformers.FlaxOPTForCausalLM"),u(at,"class","relative group"),u(Jo,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(jo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(jo,"rel","nofollow"),u(qo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(qo,"rel","nofollow"),u(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Co,"rel","nofollow"),u(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Io,"rel","nofollow"),u(No,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(No,"rel","nofollow"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),m(o,y,g),m(o,_,g),e(_,h),e(h,T),w(r,T,null),e(_,f),e(_,F),e(F,$e),m(o,ie,g),m(o,x,g),e(x,Y),e(Y,W),w(ne,W,null),e(x,Oe),e(x,U),e(U,xe),m(o,me,g),m(o,X,g),e(X,G),m(o,_e,g),m(o,Q,g),e(Q,j),m(o,C,g),m(o,le,g),e(le,V),e(V,Me),m(o,ge,g),m(o,D,g),e(D,Fe),m(o,Te,g),m(o,q,g),e(q,Ee),m(o,Z,g),m(o,ee,g),e(ee,ze),e(ee,A),e(A,je),e(ee,qe),m(o,R,g),m(o,B,g),e(B,N),e(N,pe),w(v,pe,null),e(B,E),e(B,ae),e(ae,He),m(o,Le,g),m(o,z,g),w(he,z,null),e(z,We),e(z,se),e(se,K),e(se,H),e(H,Ue),e(se,Ge),e(se,L),e(L,Ve),e(se,Be),e(z,Ce),e(z,re),e(re,Ha),e(re,Do),e(Do,Wa),e(re,Ua),e(re,Ro),e(Ro,Ga),e(re,Va),e(z,Ba),w(rt,z,null),m(o,ta,g),m(o,Ke,g),e(Ke,dt),e(dt,an),w(Ht,an,null),e(Ke,Ka),e(Ke,sn),e(sn,Ja),m(o,oa,g),m(o,ue,g),w(Wt,ue,null),e(ue,Ya),e(ue,Ut),e(Ut,Xa),e(Ut,Ho),e(Ho,Qa),e(Ut,Za),e(ue,es),e(ue,Gt),e(Gt,ts),e(Gt,Vt),e(Vt,os),e(Gt,ns),e(ue,as),e(ue,ve),w(Bt,ve,null),e(ve,ss),e(ve,Je),e(Je,rs),e(Je,Wo),e(Wo,ds),e(Je,is),e(Je,rn),e(rn,ls),e(Je,cs),e(ve,ps),w(it,ve,null),e(ve,hs),w(lt,ve,null),m(o,na,g),m(o,Ye,g),e(Ye,ct),e(ct,dn),w(Kt,dn,null),e(Ye,us),e(Ye,ln),e(ln,fs),m(o,aa,g),m(o,Ie,g),w(Jt,Ie,null),e(Ie,ms),e(Ie,Yt),e(Yt,_s),e(Yt,Uo),e(Uo,gs),e(Yt,Ts),e(Ie,vs),e(Ie,Xt),e(Xt,ys),e(Xt,Qt),e(Qt,bs),e(Xt,ks),m(o,sa,g),m(o,Xe,g),e(Xe,pt),e(pt,cn),w(Zt,cn,null),e(Xe,ws),e(Xe,pn),e(pn,Ps),m(o,ra,g),m(o,Qe,g),w(eo,Qe,null),e(Qe,$s),e(Qe,ht),w(to,ht,null),e(ht,Os),w(ut,ht,null),m(o,da,g),m(o,Ze,g),e(Ze,ft),e(ft,hn),w(oo,hn,null),e(Ze,xs),e(Ze,un),e(un,Ms),m(o,ia,g),m(o,de,g),w(no,de,null),e(de,Fs),e(de,ao),e(ao,Es),e(ao,Go),e(Go,zs),e(ao,js),e(de,qs),e(de,so),e(so,Cs),e(so,ro),e(ro,Is),e(so,Ns),e(de,As),w(mt,de,null),e(de,Ls),e(de,ye),w(io,ye,null),e(ye,Ss),e(ye,et),e(et,Ds),e(et,Vo),e(Vo,Rs),e(et,Hs),e(et,fn),e(fn,Ws),e(et,Us),e(ye,Gs),w(_t,ye,null),e(ye,Vs),w(gt,ye,null),m(o,la,g),m(o,tt,g),e(tt,Tt),e(Tt,mn),w(lo,mn,null),e(tt,Bs),e(tt,_n),e(_n,Ks),m(o,ca,g),m(o,J,g),w(co,J,null),e(J,Js),e(J,po),e(po,Ys),e(po,Bo),e(Bo,Xs),e(po,Qs),e(J,Zs),e(J,ho),e(ho,er),e(ho,uo),e(uo,tr),e(ho,or),e(J,nr),w(vt,J,null),e(J,ar),e(J,gn),e(gn,sr),e(J,rr),e(J,be),w(fo,be,null),e(be,dr),e(be,Tn),e(Tn,ir),e(be,lr),e(be,mo),e(mo,cr),e(mo,vn),e(vn,pr),e(mo,hr),e(be,ur),e(be,fe),e(fe,fr),e(fe,yn),e(yn,mr),e(fe,_r),e(fe,bn),e(bn,gr),e(fe,Tr),e(fe,kn),e(kn,vr),e(fe,yr),e(fe,wn),e(wn,br),e(fe,kr),m(o,pa,g),m(o,ot,g),e(ot,yt),e(yt,Pn),w(_o,Pn,null),e(ot,wr),e(ot,$n),e($n,Pr),m(o,ha,g),m(o,I,g),w(go,I,null),e(I,$r),e(I,To),e(To,Or),e(To,Ko),e(Ko,xr),e(To,Mr),e(I,Fr),e(I,vo),e(vo,Er),e(vo,yo),e(yo,zr),e(vo,jr),e(I,qr),e(I,On),e(On,Cr),e(I,Ir),e(I,Ne),e(Ne,xn),e(xn,bo),e(bo,Nr),e(Ne,Ar),e(Ne,Mn),e(Mn,ko),e(ko,Lr),e(Ne,Sr),e(Ne,Fn),e(Fn,wo),e(wo,Dr),e(Ne,Rr),e(Ne,En),e(En,Po),e(Po,Hr),e(I,Wr),e(I,ke),w($o,ke,null),e(ke,Ur),e(ke,nt),e(nt,Gr),e(nt,zn),e(zn,Vr),e(nt,Br),e(nt,jn),e(jn,Kr),e(nt,Jr),e(ke,Yr),w(bt,ke,null),e(ke,Xr),w(kt,ke,null),e(I,Qr),e(I,wt),w(Oo,wt,null),e(wt,Zr),w(Pt,wt,null),e(I,ed),e(I,$t),w(xo,$t,null),e($t,td),w(Ot,$t,null),m(o,ua,g),m(o,at,g),e(at,xt),e(xt,qn),w(Mo,qn,null),e(at,od),e(at,Cn),e(Cn,nd),m(o,fa,g),m(o,S,g),w(Fo,S,null),e(S,ad),e(S,In),e(In,sd),e(S,rd),e(S,Eo),e(Eo,dd),e(Eo,Jo),e(Jo,id),e(Eo,ld),e(S,cd),e(S,zo),e(zo,pd),e(zo,jo),e(jo,hd),e(zo,ud),e(S,fd),e(S,Nn),e(Nn,md),e(S,_d),e(S,Ae),e(Ae,An),e(An,qo),e(qo,gd),e(Ae,Td),e(Ae,Ln),e(Ln,Co),e(Co,vd),e(Ae,yd),e(Ae,Sn),e(Sn,Io),e(Io,bd),e(Ae,kd),e(Ae,Dn),e(Dn,No),e(No,wd),e(S,Pd),e(S,we),w(Ao,we,null),e(we,$d),e(we,st),e(st,Od),e(st,Rn),e(Rn,xd),e(st,Md),e(st,Hn),e(Hn,Fd),e(st,Ed),e(we,zd),w(Mt,we,null),e(we,jd),w(Ft,we,null),ma=!0},p(o,[g]){const Lo={};g&2&&(Lo.$$scope={dirty:g,ctx:o}),rt.$set(Lo);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:o}),it.$set(Wn);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:o}),lt.$set(Un);const Gn={};g&2&&(Gn.$$scope={dirty:g,ctx:o}),ut.$set(Gn);const So={};g&2&&(So.$$scope={dirty:g,ctx:o}),mt.$set(So);const Vn={};g&2&&(Vn.$$scope={dirty:g,ctx:o}),_t.$set(Vn);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:o}),gt.$set(Bn);const Kn={};g&2&&(Kn.$$scope={dirty:g,ctx:o}),vt.$set(Kn);const Jn={};g&2&&(Jn.$$scope={dirty:g,ctx:o}),bt.$set(Jn);const Yn={};g&2&&(Yn.$$scope={dirty:g,ctx:o}),kt.$set(Yn);const Xn={};g&2&&(Xn.$$scope={dirty:g,ctx:o}),Pt.$set(Xn);const Qn={};g&2&&(Qn.$$scope={dirty:g,ctx:o}),Ot.$set(Qn);const Zn={};g&2&&(Zn.$$scope={dirty:g,ctx:o}),Mt.$set(Zn);const ea={};g&2&&(ea.$$scope={dirty:g,ctx:o}),Ft.$set(ea)},i(o){ma||(P(r.$$.fragment,o),P(ne.$$.fragment,o),P(v.$$.fragment,o),P(he.$$.fragment,o),P(rt.$$.fragment,o),P(Ht.$$.fragment,o),P(Wt.$$.fragment,o),P(Bt.$$.fragment,o),P(it.$$.fragment,o),P(lt.$$.fragment,o),P(Kt.$$.fragment,o),P(Jt.$$.fragment,o),P(Zt.$$.fragment,o),P(eo.$$.fragment,o),P(to.$$.fragment,o),P(ut.$$.fragment,o),P(oo.$$.fragment,o),P(no.$$.fragment,o),P(mt.$$.fragment,o),P(io.$$.fragment,o),P(_t.$$.fragment,o),P(gt.$$.fragment,o),P(lo.$$.fragment,o),P(co.$$.fragment,o),P(vt.$$.fragment,o),P(fo.$$.fragment,o),P(_o.$$.fragment,o),P(go.$$.fragment,o),P($o.$$.fragment,o),P(bt.$$.fragment,o),P(kt.$$.fragment,o),P(Oo.$$.fragment,o),P(Pt.$$.fragment,o),P(xo.$$.fragment,o),P(Ot.$$.fragment,o),P(Mo.$$.fragment,o),P(Fo.$$.fragment,o),P(Ao.$$.fragment,o),P(Mt.$$.fragment,o),P(Ft.$$.fragment,o),ma=!0)},o(o){$(r.$$.fragment,o),$(ne.$$.fragment,o),$(v.$$.fragment,o),$(he.$$.fragment,o),$(rt.$$.fragment,o),$(Ht.$$.fragment,o),$(Wt.$$.fragment,o),$(Bt.$$.fragment,o),$(it.$$.fragment,o),$(lt.$$.fragment,o),$(Kt.$$.fragment,o),$(Jt.$$.fragment,o),$(Zt.$$.fragment,o),$(eo.$$.fragment,o),$(to.$$.fragment,o),$(ut.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(mt.$$.fragment,o),$(io.$$.fragment,o),$(_t.$$.fragment,o),$(gt.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(vt.$$.fragment,o),$(fo.$$.fragment,o),$(_o.$$.fragment,o),$(go.$$.fragment,o),$($o.$$.fragment,o),$(bt.$$.fragment,o),$(kt.$$.fragment,o),$(Oo.$$.fragment,o),$(Pt.$$.fragment,o),$(xo.$$.fragment,o),$(Ot.$$.fragment,o),$(Mo.$$.fragment,o),$(Fo.$$.fragment,o),$(Ao.$$.fragment,o),$(Mt.$$.fragment,o),$(Ft.$$.fragment,o),ma=!1},d(o){t(l),o&&t(y),o&&t(_),O(r),o&&t(ie),o&&t(x),O(ne),o&&t(me),o&&t(X),o&&t(_e),o&&t(Q),o&&t(C),o&&t(le),o&&t(ge),o&&t(D),o&&t(Te),o&&t(q),o&&t(Z),o&&t(ee),o&&t(R),o&&t(B),O(v),o&&t(Le),o&&t(z),O(he),O(rt),o&&t(ta),o&&t(Ke),O(Ht),o&&t(oa),o&&t(ue),O(Wt),O(Bt),O(it),O(lt),o&&t(na),o&&t(Ye),O(Kt),o&&t(aa),o&&t(Ie),O(Jt),o&&t(sa),o&&t(Xe),O(Zt),o&&t(ra),o&&t(Qe),O(eo),O(to),O(ut),o&&t(da),o&&t(Ze),O(oo),o&&t(ia),o&&t(de),O(no),O(mt),O(io),O(_t),O(gt),o&&t(la),o&&t(tt),O(lo),o&&t(ca),o&&t(J),O(co),O(vt),O(fo),o&&t(pa),o&&t(ot),O(_o),o&&t(ha),o&&t(I),O(go),O($o),O(bt),O(kt),O(Oo),O(Pt),O(xo),O(Ot),o&&t(ua),o&&t(at),O(Mo),o&&t(fa),o&&t(S),O(Fo),O(Ao),O(Mt),O(Ft)}}}const yl={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTPretrainedModel",title:"OPTPretrainedModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.TFOPTPretrainedModel",title:"TFOPTPretrainedModel"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function bl(M){return al(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ml extends el{constructor(l){super();tl(this,l,bl,vl,ol,{})}}export{Ml as default,yl as metadata};
