import{S as R_,i as H_,s as K_,e as n,k as l,w as b,t as r,M as V_,c as s,d as t,m as c,a,x as y,h as i,b as p,F as e,g as f,y as T,q as w,o as P,B as $,v as Q_,L as Qe}from"../../chunks/vendor-6b77c823.js";import{T as Uo}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as Se}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ve}from"../../chunks/ExampleCodeBlock-5212b321.js";function J_(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusModel, PegasusConfig

# Initializing a PEGASUS google/pegasus-large style configuration
configuration = PegasusConfig()

# Initializing a model from the google/pegasus-large style configuration
model = PegasusModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusModel, PegasusConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PEGASUS google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PegasusConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function X_(z){let u,v,_,h,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var F=a(_);h=i(F,"Module"),F.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,u,m),e(u,v),e(u,_),e(_,h),e(u,k)},d(d){d&&t(u)}}}function Z_(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1024</span>]`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function Y_(z){let u,v,_,h,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var F=a(_);h=i(F,"Module"),F.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,u,m),e(u,v),e(u,_),e(_,h),e(u,k)},d(d){d&&t(u)}}}function ek(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForConditionalGeneration

model = PegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"])
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`}}),{c(){u=n("p"),v=r("Summarization example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Summarization example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function tk(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusForCausalLM.from_pretrained("google/pegasus-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function ok(z){let u,v,_,h,k,d,m,F,Oe,he,E,ke,ae,Ae,re,ie,Ie,xe,D,A,ve,K,S,O,Le,Y,ee,Ge,U,Ne,De,I,me,de,ze,te,V,Ue,We,W,Be,oe,R;return{c(){u=n("p"),v=r("TF 2.0 models accepts two formats as inputs:"),_=l(),h=n("ul"),k=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),F=n("li"),Oe=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=l(),E=n("p"),ke=r("This second option is useful when using "),ae=n("code"),Ae=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Ie=r("model(inputs)"),xe=r("."),D=l(),A=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),S=n("ul"),O=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ge=r(" only and nothing else: "),U=n("code"),Ne=r("model(input_ids)"),De=l(),I=n("li"),me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),ze=r("model([input_ids, attention_mask])"),te=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),We=l(),W=n("li"),Be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),R=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){u=s(x,"P",{});var q=a(u);v=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),_=c(x),h=s(x,"UL",{});var be=a(h);k=s(be,"LI",{});var at=a(k);d=i(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),m=c(be),F=s(be,"LI",{});var ye=a(F);Oe=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),be.forEach(t),he=c(x),E=s(x,"P",{});var Q=a(E);ke=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var rt=a(ae);Ae=i(rt,"tf.keras.Model.fit"),rt.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Je=a(ie);Ie=i(Je,"model(inputs)"),Je.forEach(t),xe=i(Q,"."),Q.forEach(t),D=c(x),A=s(x,"P",{});var le=a(A);ve=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),K=c(x),S=s(x,"UL",{});var L=a(S);O=s(L,"LI",{});var J=a(O);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var Te=a(Y);ee=i(Te,"input_ids"),Te.forEach(t),Ge=i(J," only and nothing else: "),U=s(J,"CODE",{});var it=a(U);Ne=i(it,"model(input_ids)"),it.forEach(t),J.forEach(t),De=c(L),I=s(L,"LI",{});var X=a(I);me=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var dt=a(de);ze=i(dt,"model([input_ids, attention_mask])"),dt.forEach(t),te=i(X," or "),V=s(X,"CODE",{});var Xe=a(V);Ue=i(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),X.forEach(t),We=c(L),W=s(L,"LI",{});var H=a(W);Be=i(H,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(H,"CODE",{});var lt=a(oe);R=i(lt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),lt.forEach(t),H.forEach(t),L.forEach(t)},m(x,q){f(x,u,q),e(u,v),f(x,_,q),f(x,h,q),e(h,k),e(k,d),e(h,m),e(h,F),e(F,Oe),f(x,he,q),f(x,E,q),e(E,ke),e(E,ae),e(ae,Ae),e(E,re),e(E,ie),e(ie,Ie),e(E,xe),f(x,D,q),f(x,A,q),e(A,ve),f(x,K,q),f(x,S,q),e(S,O),e(O,Le),e(O,Y),e(Y,ee),e(O,Ge),e(O,U),e(U,Ne),e(S,De),e(S,I),e(I,me),e(I,de),e(de,ze),e(I,te),e(I,V),e(V,Ue),e(S,We),e(S,W),e(W,Be),e(W,oe),e(oe,R)},d(x){x&&t(u),x&&t(_),x&&t(h),x&&t(he),x&&t(E),x&&t(D),x&&t(A),x&&t(K),x&&t(S)}}}function nk(z){let u,v,_,h,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var F=a(_);h=i(F,"Module"),F.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,u,m),e(u,v),e(u,_),e(_,h),e(u,k)},d(d){d&&t(u)}}}function sk(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
import tensorflow as tf

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = TFPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function ak(z){let u,v,_,h,k,d,m,F,Oe,he,E,ke,ae,Ae,re,ie,Ie,xe,D,A,ve,K,S,O,Le,Y,ee,Ge,U,Ne,De,I,me,de,ze,te,V,Ue,We,W,Be,oe,R;return{c(){u=n("p"),v=r("TF 2.0 models accepts two formats as inputs:"),_=l(),h=n("ul"),k=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),F=n("li"),Oe=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=l(),E=n("p"),ke=r("This second option is useful when using "),ae=n("code"),Ae=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Ie=r("model(inputs)"),xe=r("."),D=l(),A=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),S=n("ul"),O=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ge=r(" only and nothing else: "),U=n("code"),Ne=r("model(input_ids)"),De=l(),I=n("li"),me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),ze=r("model([input_ids, attention_mask])"),te=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),We=l(),W=n("li"),Be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),R=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){u=s(x,"P",{});var q=a(u);v=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),_=c(x),h=s(x,"UL",{});var be=a(h);k=s(be,"LI",{});var at=a(k);d=i(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),m=c(be),F=s(be,"LI",{});var ye=a(F);Oe=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),be.forEach(t),he=c(x),E=s(x,"P",{});var Q=a(E);ke=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var rt=a(ae);Ae=i(rt,"tf.keras.Model.fit"),rt.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Je=a(ie);Ie=i(Je,"model(inputs)"),Je.forEach(t),xe=i(Q,"."),Q.forEach(t),D=c(x),A=s(x,"P",{});var le=a(A);ve=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),K=c(x),S=s(x,"UL",{});var L=a(S);O=s(L,"LI",{});var J=a(O);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var Te=a(Y);ee=i(Te,"input_ids"),Te.forEach(t),Ge=i(J," only and nothing else: "),U=s(J,"CODE",{});var it=a(U);Ne=i(it,"model(input_ids)"),it.forEach(t),J.forEach(t),De=c(L),I=s(L,"LI",{});var X=a(I);me=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var dt=a(de);ze=i(dt,"model([input_ids, attention_mask])"),dt.forEach(t),te=i(X," or "),V=s(X,"CODE",{});var Xe=a(V);Ue=i(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),X.forEach(t),We=c(L),W=s(L,"LI",{});var H=a(W);Be=i(H,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(H,"CODE",{});var lt=a(oe);R=i(lt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),lt.forEach(t),H.forEach(t),L.forEach(t)},m(x,q){f(x,u,q),e(u,v),f(x,_,q),f(x,h,q),e(h,k),e(k,d),e(h,m),e(h,F),e(F,Oe),f(x,he,q),f(x,E,q),e(E,ke),e(E,ae),e(ae,Ae),e(E,re),e(E,ie),e(ie,Ie),e(E,xe),f(x,D,q),f(x,A,q),e(A,ve),f(x,K,q),f(x,S,q),e(S,O),e(O,Le),e(O,Y),e(Y,ee),e(O,Ge),e(O,U),e(U,Ne),e(S,De),e(S,I),e(I,me),e(I,de),e(de,ze),e(I,te),e(I,V),e(V,Ue),e(S,We),e(S,W),e(W,Be),e(W,oe),e(oe,R)},d(x){x&&t(u),x&&t(_),x&&t(h),x&&t(he),x&&t(E),x&&t(D),x&&t(A),x&&t(K),x&&t(S)}}}function rk(z){let u,v,_,h,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var F=a(_);h=i(F,"Module"),F.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,u,m),e(u,v),e(u,_),e(_,h),e(u,k)},d(d){d&&t(u)}}}function ik(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration

model = TFPegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(input_ids)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){u=n("p"),v=r("Summarization example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Summarization example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function dk(z){let u,v,_,h,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var F=a(_);h=i(F,"Module"),F.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,u,m),e(u,v),e(u,_),e(_,h),e(u,k)},d(d){d&&t(u)}}}function lk(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = FlaxPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function ck(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function pk(z){let u,v,_,h,k;return h=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function uk(z){let u,v,_,h,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var F=a(_);h=i(F,"Module"),F.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,u,m),e(u,v),e(u,_),e(_,h),e(u,k)},d(d){d&&t(u)}}}function hk(z){let u,v,_,h,k;return h=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function mk(z){let u,v,_,h,k;return h=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("p"),v=r("Example:"),_=l(),b(h.$$.fragment)},l(d){u=s(d,"P",{});var m=a(u);v=i(m,"Example:"),m.forEach(t),_=c(d),y(h.$$.fragment,d)},m(d,m){f(d,u,m),e(u,v),f(d,_,m),T(h,d,m),k=!0},p:Qe,i(d){k||(w(h.$$.fragment,d),k=!0)},o(d){P(h.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(h,d)}}}function fk(z){let u,v,_,h,k,d,m,F,Oe,he,E,ke,ae,Ae,re,ie,Ie,xe,D,A,ve,K,S,O,Le,Y,ee,Ge,U,Ne,De,I,me,de,ze,te,V,Ue,We,W,Be,oe,R,x,q,be,at,ye,Q,rt,Je,le,L,J,Te,it,X,dt,Xe,H,lt,Wo,Zd,Yd,la,el,tl,zi,fe,ca,ol,nl,pa,sl,al,ua,rl,il,Bo,dl,Ro,ll,cl,pl,At,Ho,ul,hl,Ko,ml,fl,Fi,ct,It,ha,Vo,gl,ma,_l,qi,Ze,Lt,Qo,kl,vl,Jo,bl,yl,Tl,fa,wl,Pl,ga,$l,Ei,pt,Gt,_a,Xo,xl,ka,zl,Mi,ge,va,ba,Fl,ql,ya,Es,El,Ms,Ml,Cl,Zo,Ta,jl,Sl,ut,wa,Ol,Al,Pa,Il,Ll,Yo,Gl,$a,Nl,Dl,Ul,xa,Re,Wl,za,Bl,Rl,Fa,Hl,Kl,qa,Vl,Ql,Jl,Ea,ht,Xl,en,Zl,Yl,Ma,ec,tc,Ci,mt,Nt,Ca,tn,oc,ja,nc,ji,on,Si,ft,Dt,Sa,nn,sc,Oa,ac,Oi,we,sn,rc,gt,ic,Cs,dc,lc,an,cc,pc,uc,_t,hc,js,mc,fc,Ss,gc,_c,kc,Ut,Ai,kt,Wt,Aa,rn,vc,Ia,bc,Ii,Bt,yc,La,Tc,wc,Li,B,dn,Pc,ln,$c,cn,xc,zc,Fc,pn,qc,Os,Ec,Mc,Cc,Fe,un,jc,hn,Sc,Ga,Oc,Ac,Ic,mn,As,Lc,Na,Gc,Nc,fn,Dc,Da,Uc,Wc,Bc,Ua,Rc,Hc,Rt,gn,Kc,Wa,Vc,Qc,Ht,_n,Jc,Ba,Xc,Zc,Kt,kn,Yc,Ra,ep,Gi,vt,Vt,Ha,vn,tp,Ka,op,Ni,ce,bn,np,bt,sp,Va,ap,rp,yn,ip,dp,lp,Tn,cp,Is,pp,up,hp,Ye,wn,mp,Qa,fp,gp,Pn,Ls,_p,Ja,kp,vp,$n,bp,Xa,yp,Tp,wp,Qt,xn,Pp,Za,$p,Di,yt,Jt,Ya,zn,xp,er,zp,Ui,Pe,Fn,Fp,qn,qp,Gs,Ep,Mp,Cp,En,jp,Mn,Sp,Op,Ap,qe,Cn,Ip,Tt,Lp,Ns,Gp,Np,tr,Dp,Up,Wp,Xt,Bp,Zt,Wi,wt,Yt,or,jn,Rp,nr,Hp,Bi,$e,Sn,Kp,On,Vp,Ds,Qp,Jp,Xp,An,Zp,In,Yp,eu,tu,Ee,Ln,ou,Pt,nu,Us,su,au,sr,ru,iu,du,eo,lu,to,Ri,$t,oo,ar,Gn,cu,rr,pu,Hi,xt,Nn,uu,no,Dn,hu,so,Ki,zt,ao,ir,Un,mu,dr,fu,Vi,pe,Wn,gu,Bn,_u,Ws,ku,vu,bu,Rn,yu,Hn,Tu,wu,Pu,ro,$u,Me,Kn,xu,Ft,zu,Bs,Fu,qu,lr,Eu,Mu,Cu,io,ju,lo,Qi,qt,co,cr,Vn,Su,pr,Ou,Ji,ue,Qn,Au,Jn,Iu,Rs,Lu,Gu,Nu,Xn,Du,Zn,Uu,Wu,Bu,po,Ru,Ce,Yn,Hu,Et,Ku,Hs,Vu,Qu,ur,Ju,Xu,Zu,uo,Yu,ho,Xi,Mt,mo,hr,es,eh,mr,th,Zi,G,ts,oh,os,nh,Ks,sh,ah,rh,ns,ih,ss,dh,lh,ch,fr,ph,uh,He,gr,as,hh,mh,_r,rs,fh,gh,kr,is,_h,kh,vr,ds,vh,bh,je,ls,yh,Ct,Th,br,wh,Ph,yr,$h,xh,zh,fo,Fh,go,qh,_o,cs,Eh,ko,Mh,vo,ps,Ch,bo,Yi,jt,yo,Tr,us,jh,wr,Sh,ed,N,hs,Oh,ms,Ah,Vs,Ih,Lh,Gh,fs,Nh,gs,Dh,Uh,Wh,Pr,Bh,Rh,Ke,$r,_s,Hh,Kh,xr,ks,Vh,Qh,zr,vs,Jh,Xh,Fr,bs,Zh,Yh,M,ys,em,St,tm,qr,om,nm,Er,sm,am,rm,To,im,Mr,dm,lm,Cr,jr,Sr,Or,cm,pm,Ar,Ir,Lr,Gr,um,hm,Nr,Dr,Ur,Wr,mm,fm,Br,Rr,Ts,wo,Po,Hr,ws,gm,Kr,_m,km,Vr,vm,bm,Qr,ym,Tm,Jr,Xr,Zr,Yr,wm,Pm,ei,ti,oi,ni,$m,xm,si,ai,ri,ii,zm,Fm,di,li,ci,pi,qm,Em,$o,Ps,Mm,xo,Cm,zo,$s,jm,Fo,td;return d=new Z({}),K=new Z({}),Te=new Z({}),Vo=new Z({}),Xo=new Z({}),tn=new Z({}),on=new Se({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import torch

src_text = [
    """ PG&E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."""
]

model_name = "google/pegasus-xsum"
device = "cuda" if torch.cuda.is_available() else "cpu"
tokenizer = PegasusTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
batch = tokenizer(src_text, truncation=True, padding="longest", return_tensors="pt").to(device)
translated = model.generate(**batch)
tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)
assert (
    tgt_text[0]
    == "California's largest electricity provider has turned off power to hundreds of thousands of customers."
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusForConditionalGeneration, PegasusTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&quot;&quot; PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;&quot;&quot;</span>
<span class="hljs-meta">... </span>]

<span class="hljs-meta">... </span>model_name = <span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>
<span class="hljs-meta">... </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>
<span class="hljs-meta">... </span>tokenizer = PegasusTokenizer.from_pretrained(model_name)
<span class="hljs-meta">... </span>model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
<span class="hljs-meta">... </span>batch = tokenizer(src_text, truncation=<span class="hljs-literal">True</span>, padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device)
<span class="hljs-meta">... </span>translated = model.generate(**batch)
<span class="hljs-meta">... </span>tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span><span class="hljs-keyword">assert</span> (
<span class="hljs-meta">... </span>    tgt_text[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    == <span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>
<span class="hljs-meta">... </span>)`}}),nn=new Z({}),sn=new C({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PegasusConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PegasusConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PegasusConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PegasusConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PegasusConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PegasusConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PegasusConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PegasusConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PegasusConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PegasusConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PegasusConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.PegasusConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PegasusConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/configuration_pegasus.py#L29"}}),Ut=new Ve({props:{anchor:"transformers.PegasusConfig.example",$$slots:{default:[J_]},$$scope:{ctx:z}}}),rn=new Z({}),dn=new C({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizer.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"},{anchor:"transformers.PegasusTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus.py#L41"}}),un=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus.py#L258",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gn=new C({props:{name:"convert_tokens_to_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus.py#L232"}}),_n=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus.py#L247"}}),kn=new C({props:{name:"num_special_tokens_to_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus.py#L237"}}),vn=new Z({}),bn=new C({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L51"}}),wn=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L180",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L169"}}),zn=new Z({}),Fn=new C({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_pegasus.py#L1140"}}),Cn=new C({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_pegasus.py#L1190",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new Uo({props:{$$slots:{default:[X_]},$$scope:{ctx:z}}}),Zt=new Ve({props:{anchor:"transformers.PegasusModel.forward.example",$$slots:{default:[Z_]},$$scope:{ctx:z}}}),jn=new Z({}),Sn=new C({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_pegasus.py#L1289"}}),Ln=new C({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_pegasus.py#L1357",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new Uo({props:{$$slots:{default:[Y_]},$$scope:{ctx:z}}}),to=new Ve({props:{anchor:"transformers.PegasusForConditionalGeneration.forward.example",$$slots:{default:[ek]},$$scope:{ctx:z}}}),Gn=new Z({}),Nn=new C({props:{name:"class transformers.PegasusForCausalLM",anchor:"transformers.PegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_pegasus.py#L1496"}}),Dn=new C({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PegasusForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PegasusForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PegasusForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_pegasus.py#L1549",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Ve({props:{anchor:"transformers.PegasusForCausalLM.forward.example",$$slots:{default:[tk]},$$scope:{ctx:z}}}),Un=new Z({}),Wn=new C({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1181"}}),ro=new Uo({props:{$$slots:{default:[ok]},$$scope:{ctx:z}}}),Kn=new C({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1193",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),io=new Uo({props:{$$slots:{default:[nk]},$$scope:{ctx:z}}}),lo=new Ve({props:{anchor:"transformers.TFPegasusModel.call.example",$$slots:{default:[sk]},$$scope:{ctx:z}}}),Vn=new Z({}),Qn=new C({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1268"}}),po=new Uo({props:{$$slots:{default:[ak]},$$scope:{ctx:z}}}),Yn=new C({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1301",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new Uo({props:{$$slots:{default:[rk]},$$scope:{ctx:z}}}),ho=new Ve({props:{anchor:"transformers.TFPegasusForConditionalGeneration.call.example",$$slots:{default:[ik]},$$scope:{ctx:z}}}),es=new Z({}),ts=new C({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1228"}}),ls=new C({props:{name:"__call__",anchor:"transformers.FlaxPegasusModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1163",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Uo({props:{$$slots:{default:[dk]},$$scope:{ctx:z}}}),go=new Ve({props:{anchor:"transformers.FlaxPegasusModel.__call__.example",$$slots:{default:[lk]},$$scope:{ctx:z}}}),cs=new C({props:{name:"encode",anchor:"transformers.FlaxPegasusModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new Ve({props:{anchor:"transformers.FlaxPegasusModel.encode.example",$$slots:{default:[ck]},$$scope:{ctx:z}}}),ps=new C({props:{name:"decode",anchor:"transformers.FlaxPegasusModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new Ve({props:{anchor:"transformers.FlaxPegasusModel.decode.example",$$slots:{default:[pk]},$$scope:{ctx:z}}}),us=new Z({}),hs=new C({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1315"}}),ys=new C({props:{name:"__call__",anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1163",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new Uo({props:{$$slots:{default:[uk]},$$scope:{ctx:z}}}),ws=new Z({}),Ps=new C({props:{name:"encode",anchor:"transformers.FlaxPegasusForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new Ve({props:{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.example",$$slots:{default:[hk]},$$scope:{ctx:z}}}),$s=new C({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1319",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new Ve({props:{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.example",$$slots:{default:[mk]},$$scope:{ctx:z}}}),{c(){u=n("meta"),v=l(),_=n("h1"),h=n("a"),k=n("span"),b(d.$$.fragment),m=l(),F=n("span"),Oe=r("Pegasus"),he=l(),E=n("p"),ke=n("strong"),ae=r("DISCLAIMER:"),Ae=r(" If you see something strange, file a "),re=n("a"),ie=r("Github Issue"),Ie=r(`
and assign @patrickvonplaten.`),xe=l(),D=n("h2"),A=n("a"),ve=n("span"),b(K.$$.fragment),S=l(),O=n("span"),Le=r("Overview"),Y=l(),ee=n("p"),Ge=r("The Pegasus model was proposed in "),U=n("a"),Ne=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),De=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),I=l(),me=n("p"),de=r("According to the abstract,"),ze=l(),te=n("ul"),V=n("li"),Ue=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),We=l(),W=n("li"),Be=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),oe=l(),R=n("p"),x=r("This model was contributed by "),q=n("a"),be=r("sshleifer"),at=r(". The Authors\u2019 code can be found "),ye=n("a"),Q=r("here"),rt=r("."),Je=l(),le=n("h2"),L=n("a"),J=n("span"),b(Te.$$.fragment),it=l(),X=n("span"),dt=r("Checkpoints"),Xe=l(),H=n("p"),lt=r("All the "),Wo=n("a"),Zd=r("checkpoints"),Yd=r(` are fine-tuned for summarization, besides
`),la=n("em"),el=r("pegasus-large"),tl=r(", whence the other checkpoints are fine-tuned:"),zi=l(),fe=n("ul"),ca=n("li"),ol=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),nl=l(),pa=n("li"),sl=r("FP16 is not supported (help/ideas on this appreciated!)."),al=l(),ua=n("li"),rl=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),il=l(),Bo=n("li"),dl=r("Full replication results and correctly pre-processed data can be found in this "),Ro=n("a"),ll=r("Issue"),cl=r("."),pl=l(),At=n("li"),Ho=n("a"),ul=r("Distilled checkpoints"),hl=r(" are described in this "),Ko=n("a"),ml=r("paper"),fl=r("."),Fi=l(),ct=n("h3"),It=n("a"),ha=n("span"),b(Vo.$$.fragment),gl=l(),ma=n("span"),_l=r("Examples"),qi=l(),Ze=n("ul"),Lt=n("li"),Qo=n("a"),kl=r("Script"),vl=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Jo=n("a"),bl=r("examples/pytorch/summarization/"),yl=r("."),Tl=l(),fa=n("li"),wl=r("FP16 is not supported (help/ideas on this appreciated!)."),Pl=l(),ga=n("li"),$l=r("The adafactor optimizer is recommended for pegasus fine-tuning."),Ei=l(),pt=n("h2"),Gt=n("a"),_a=n("span"),b(Xo.$$.fragment),xl=l(),ka=n("span"),zl=r("Implementation Notes"),Mi=l(),ge=n("ul"),va=n("li"),ba=n("p"),Fl=r("All models are transformer encoder-decoders with 16 layers in each component."),ql=l(),ya=n("li"),Es=n("p"),El=r("The implementation is completely inherited from "),Ms=n("a"),Ml=r("BartForConditionalGeneration"),Cl=l(),Zo=n("li"),Ta=n("p"),jl=r("Some key configuration differences:"),Sl=l(),ut=n("ul"),wa=n("li"),Ol=r("static, sinusoidal position embeddings"),Al=l(),Pa=n("li"),Il=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Ll=l(),Yo=n("li"),Gl=r("more beams are used ("),$a=n("code"),Nl=r("num_beams=8"),Dl=r(")"),Ul=l(),xa=n("li"),Re=n("p"),Wl=r("All pretrained pegasus checkpoints are the same besides three attributes: "),za=n("code"),Bl=r("tokenizer.model_max_length"),Rl=r(` (maximum
input size), `),Fa=n("code"),Hl=r("max_length"),Kl=r(" (the maximum number of tokens to generate) and "),qa=n("code"),Vl=r("length_penalty"),Ql=r("."),Jl=l(),Ea=n("li"),ht=n("p"),Xl=r("The code to convert checkpoints trained in the author\u2019s "),en=n("a"),Zl=r("repo"),Yl=r(` can be
found in `),Ma=n("code"),ec=r("convert_pegasus_tf_to_pytorch.py"),tc=r("."),Ci=l(),mt=n("h2"),Nt=n("a"),Ca=n("span"),b(tn.$$.fragment),oc=l(),ja=n("span"),nc=r("Usage Example"),ji=l(),b(on.$$.fragment),Si=l(),ft=n("h2"),Dt=n("a"),Sa=n("span"),b(nn.$$.fragment),sc=l(),Oa=n("span"),ac=r("PegasusConfig"),Oi=l(),we=n("div"),b(sn.$$.fragment),rc=l(),gt=n("p"),ic=r("This is the configuration class to store the configuration of a "),Cs=n("a"),dc=r("PegasusModel"),lc=r(`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),an=n("a"),cc=r("google/pegasus-large"),pc=r(" architecture."),uc=l(),_t=n("p"),hc=r("Configuration objects inherit from "),js=n("a"),mc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),Ss=n("a"),gc=r("PretrainedConfig"),_c=r(" for more information."),kc=l(),b(Ut.$$.fragment),Ai=l(),kt=n("h2"),Wt=n("a"),Aa=n("span"),b(rn.$$.fragment),vc=l(),Ia=n("span"),bc=r("PegasusTokenizer"),Ii=l(),Bt=n("p"),yc=r("warning: "),La=n("code"),Tc=r("add_tokens"),wc=r(" does not work at the moment."),Li=l(),B=n("div"),b(dn.$$.fragment),Pc=l(),ln=n("p"),$c=r("Construct a PEGASUS tokenizer. Based on "),cn=n("a"),xc=r("SentencePiece"),zc=r("."),Fc=l(),pn=n("p"),qc=r("This tokenizer inherits from "),Os=n("a"),Ec=r("PreTrainedTokenizer"),Mc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Cc=l(),Fe=n("div"),b(un.$$.fragment),jc=l(),hn=n("p"),Sc=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Ga=n("code"),Oc=r("X"),Ac=r(" represents the sequence:"),Ic=l(),mn=n("ul"),As=n("li"),Lc=r("single sequence: "),Na=n("code"),Gc=r("X </s>"),Nc=l(),fn=n("li"),Dc=r("pair of sequences: "),Da=n("code"),Uc=r("A B </s>"),Wc=r(" (not intended use)"),Bc=l(),Ua=n("p"),Rc=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Hc=l(),Rt=n("div"),b(gn.$$.fragment),Kc=l(),Wa=n("p"),Vc=r("Converts a sequence of tokens (string) in a single string."),Qc=l(),Ht=n("div"),b(_n.$$.fragment),Jc=l(),Ba=n("p"),Xc=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Zc=l(),Kt=n("div"),b(kn.$$.fragment),Yc=l(),Ra=n("p"),ep=r("Just EOS"),Gi=l(),vt=n("h2"),Vt=n("a"),Ha=n("span"),b(vn.$$.fragment),tp=l(),Ka=n("span"),op=r("PegasusTokenizerFast"),Ni=l(),ce=n("div"),b(bn.$$.fragment),np=l(),bt=n("p"),sp=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Va=n("em"),ap=r("tokenizers"),rp=r(` library). Based on
`),yn=n("a"),ip=r("Unigram"),dp=r("."),lp=l(),Tn=n("p"),cp=r("This tokenizer inherits from "),Is=n("a"),pp=r("PreTrainedTokenizerFast"),up=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hp=l(),Ye=n("div"),b(wn.$$.fragment),mp=l(),Qa=n("p"),fp=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),gp=l(),Pn=n("ul"),Ls=n("li"),_p=r("single sequence: "),Ja=n("code"),kp=r("X </s>"),vp=l(),$n=n("li"),bp=r("pair of sequences: "),Xa=n("code"),yp=r("A B </s>"),Tp=r(" (not intended use)"),wp=l(),Qt=n("div"),b(xn.$$.fragment),Pp=l(),Za=n("p"),$p=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Di=l(),yt=n("h2"),Jt=n("a"),Ya=n("span"),b(zn.$$.fragment),xp=l(),er=n("span"),zp=r("PegasusModel"),Ui=l(),Pe=n("div"),b(Fn.$$.fragment),Fp=l(),qn=n("p"),qp=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gs=n("a"),Ep=r("PreTrainedModel"),Mp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp=l(),En=n("p"),jp=r("This model is also a PyTorch "),Mn=n("a"),Sp=r("torch.nn.Module"),Op=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ap=l(),qe=n("div"),b(Cn.$$.fragment),Ip=l(),Tt=n("p"),Lp=r("The "),Ns=n("a"),Gp=r("PegasusModel"),Np=r(" forward method, overrides the "),tr=n("code"),Dp=r("__call__"),Up=r(" special method."),Wp=l(),b(Xt.$$.fragment),Bp=l(),b(Zt.$$.fragment),Wi=l(),wt=n("h2"),Yt=n("a"),or=n("span"),b(jn.$$.fragment),Rp=l(),nr=n("span"),Hp=r("PegasusForConditionalGeneration"),Bi=l(),$e=n("div"),b(Sn.$$.fragment),Kp=l(),On=n("p"),Vp=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ds=n("a"),Qp=r("PreTrainedModel"),Jp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=l(),An=n("p"),Zp=r("This model is also a PyTorch "),In=n("a"),Yp=r("torch.nn.Module"),eu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tu=l(),Ee=n("div"),b(Ln.$$.fragment),ou=l(),Pt=n("p"),nu=r("The "),Us=n("a"),su=r("PegasusForConditionalGeneration"),au=r(" forward method, overrides the "),sr=n("code"),ru=r("__call__"),iu=r(" special method."),du=l(),b(eo.$$.fragment),lu=l(),b(to.$$.fragment),Ri=l(),$t=n("h2"),oo=n("a"),ar=n("span"),b(Gn.$$.fragment),cu=l(),rr=n("span"),pu=r("PegasusForCausalLM"),Hi=l(),xt=n("div"),b(Nn.$$.fragment),uu=l(),no=n("div"),b(Dn.$$.fragment),hu=l(),b(so.$$.fragment),Ki=l(),zt=n("h2"),ao=n("a"),ir=n("span"),b(Un.$$.fragment),mu=l(),dr=n("span"),fu=r("TFPegasusModel"),Vi=l(),pe=n("div"),b(Wn.$$.fragment),gu=l(),Bn=n("p"),_u=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ws=n("a"),ku=r("TFPreTrainedModel"),vu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu=l(),Rn=n("p"),yu=r("This model is also a "),Hn=n("a"),Tu=r("tf.keras.Model"),wu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu=l(),b(ro.$$.fragment),$u=l(),Me=n("div"),b(Kn.$$.fragment),xu=l(),Ft=n("p"),zu=r("The "),Bs=n("a"),Fu=r("TFPegasusModel"),qu=r(" forward method, overrides the "),lr=n("code"),Eu=r("__call__"),Mu=r(" special method."),Cu=l(),b(io.$$.fragment),ju=l(),b(lo.$$.fragment),Qi=l(),qt=n("h2"),co=n("a"),cr=n("span"),b(Vn.$$.fragment),Su=l(),pr=n("span"),Ou=r("TFPegasusForConditionalGeneration"),Ji=l(),ue=n("div"),b(Qn.$$.fragment),Au=l(),Jn=n("p"),Iu=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rs=n("a"),Lu=r("TFPreTrainedModel"),Gu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nu=l(),Xn=n("p"),Du=r("This model is also a "),Zn=n("a"),Uu=r("tf.keras.Model"),Wu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu=l(),b(po.$$.fragment),Ru=l(),Ce=n("div"),b(Yn.$$.fragment),Hu=l(),Et=n("p"),Ku=r("The "),Hs=n("a"),Vu=r("TFPegasusForConditionalGeneration"),Qu=r(" forward method, overrides the "),ur=n("code"),Ju=r("__call__"),Xu=r(" special method."),Zu=l(),b(uo.$$.fragment),Yu=l(),b(ho.$$.fragment),Xi=l(),Mt=n("h2"),mo=n("a"),hr=n("span"),b(es.$$.fragment),eh=l(),mr=n("span"),th=r("FlaxPegasusModel"),Zi=l(),G=n("div"),b(ts.$$.fragment),oh=l(),os=n("p"),nh=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ks=n("a"),sh=r("FlaxPreTrainedModel"),ah=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh=l(),ns=n("p"),ih=r(`This model is also a Flax Linen
`),ss=n("a"),dh=r("flax.nn.Module"),lh=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ch=l(),fr=n("p"),ph=r("Finally, this model supports inherent JAX features such as:"),uh=l(),He=n("ul"),gr=n("li"),as=n("a"),hh=r("Just-In-Time (JIT) compilation"),mh=l(),_r=n("li"),rs=n("a"),fh=r("Automatic Differentiation"),gh=l(),kr=n("li"),is=n("a"),_h=r("Vectorization"),kh=l(),vr=n("li"),ds=n("a"),vh=r("Parallelization"),bh=l(),je=n("div"),b(ls.$$.fragment),yh=l(),Ct=n("p"),Th=r("The "),br=n("code"),wh=r("FlaxPegasusPreTrainedModel"),Ph=r(" forward method, overrides the "),yr=n("code"),$h=r("__call__"),xh=r(" special method."),zh=l(),b(fo.$$.fragment),Fh=l(),b(go.$$.fragment),qh=l(),_o=n("div"),b(cs.$$.fragment),Eh=l(),b(ko.$$.fragment),Mh=l(),vo=n("div"),b(ps.$$.fragment),Ch=l(),b(bo.$$.fragment),Yi=l(),jt=n("h2"),yo=n("a"),Tr=n("span"),b(us.$$.fragment),jh=l(),wr=n("span"),Sh=r("FlaxPegasusForConditionalGeneration"),ed=l(),N=n("div"),b(hs.$$.fragment),Oh=l(),ms=n("p"),Ah=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vs=n("a"),Ih=r("FlaxPreTrainedModel"),Lh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh=l(),fs=n("p"),Nh=r(`This model is also a Flax Linen
`),gs=n("a"),Dh=r("flax.nn.Module"),Uh=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wh=l(),Pr=n("p"),Bh=r("Finally, this model supports inherent JAX features such as:"),Rh=l(),Ke=n("ul"),$r=n("li"),_s=n("a"),Hh=r("Just-In-Time (JIT) compilation"),Kh=l(),xr=n("li"),ks=n("a"),Vh=r("Automatic Differentiation"),Qh=l(),zr=n("li"),vs=n("a"),Jh=r("Vectorization"),Xh=l(),Fr=n("li"),bs=n("a"),Zh=r("Parallelization"),Yh=l(),M=n("div"),b(ys.$$.fragment),em=l(),St=n("p"),tm=r("The "),qr=n("code"),om=r("FlaxPegasusPreTrainedModel"),nm=r(" forward method, overrides the "),Er=n("code"),sm=r("__call__"),am=r(" special method."),rm=l(),b(To.$$.fragment),im=l(),Mr=n("p"),dm=r("Summarization example:"),lm=l(),Cr=n("blockquote"),jr=n("blockquote"),Sr=n("blockquote"),Or=n("p"),cm=r("from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),pm=l(),Ar=n("blockquote"),Ir=n("blockquote"),Lr=n("blockquote"),Gr=n("p"),um=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),hm=l(),Nr=n("blockquote"),Dr=n("blockquote"),Ur=n("blockquote"),Wr=n("p"),mm=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),fm=l(),Br=n("blockquote"),Rr=n("blockquote"),Ts=n("blockquote"),wo=n("h1"),Po=n("a"),Hr=n("span"),b(ws.$$.fragment),gm=l(),Kr=n("span"),_m=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),km=l(),Vr=n("p"),vm=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),bm=l(),Qr=n("p"),ym=r("Mask filling example:"),Tm=l(),Jr=n("blockquote"),Xr=n("blockquote"),Zr=n("blockquote"),Yr=n("p"),wm=r(`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),Pm=l(),ei=n("blockquote"),ti=n("blockquote"),oi=n("blockquote"),ni=n("p"),$m=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),xm=l(),si=n("blockquote"),ai=n("blockquote"),ri=n("blockquote"),ii=n("p"),zm=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Fm=l(),di=n("blockquote"),li=n("blockquote"),ci=n("blockquote"),pi=n("p"),qm=r("tokenizer.decode(predictions).split()"),Em=l(),$o=n("div"),b(Ps.$$.fragment),Mm=l(),b(xo.$$.fragment),Cm=l(),zo=n("div"),b($s.$$.fragment),jm=l(),b(Fo.$$.fragment),this.h()},l(o){const g=V_('[data-svelte="svelte-1phssyn"]',document.head);u=s(g,"META",{name:!0,content:!0}),g.forEach(t),v=c(o),_=s(o,"H1",{class:!0});var xs=a(_);h=s(xs,"A",{id:!0,class:!0,href:!0});var ui=a(h);k=s(ui,"SPAN",{});var hi=a(k);y(d.$$.fragment,hi),hi.forEach(t),ui.forEach(t),m=c(xs),F=s(xs,"SPAN",{});var mi=a(F);Oe=i(mi,"Pegasus"),mi.forEach(t),xs.forEach(t),he=c(o),E=s(o,"P",{});var qo=a(E);ke=s(qo,"STRONG",{});var fi=a(ke);ae=i(fi,"DISCLAIMER:"),fi.forEach(t),Ae=i(qo," If you see something strange, file a "),re=s(qo,"A",{href:!0,rel:!0});var gi=a(re);ie=i(gi,"Github Issue"),gi.forEach(t),Ie=i(qo,`
and assign @patrickvonplaten.`),qo.forEach(t),xe=c(o),D=s(o,"H2",{class:!0});var zs=a(D);A=s(zs,"A",{id:!0,class:!0,href:!0});var _i=a(A);ve=s(_i,"SPAN",{});var ki=a(ve);y(K.$$.fragment,ki),ki.forEach(t),_i.forEach(t),S=c(zs),O=s(zs,"SPAN",{});var vi=a(O);Le=i(vi,"Overview"),vi.forEach(t),zs.forEach(t),Y=c(o),ee=s(o,"P",{});var Fs=a(ee);Ge=i(Fs,"The Pegasus model was proposed in "),U=s(Fs,"A",{href:!0,rel:!0});var bi=a(U);Ne=i(bi,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),bi.forEach(t),De=i(Fs," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),Fs.forEach(t),I=c(o),me=s(o,"P",{});var yi=a(me);de=i(yi,"According to the abstract,"),yi.forEach(t),ze=c(o),te=s(o,"UL",{});var qs=a(te);V=s(qs,"LI",{});var Ti=a(V);Ue=i(Ti,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),Ti.forEach(t),We=c(qs),W=s(qs,"LI",{});var wi=a(W);Be=i(wi,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),wi.forEach(t),qs.forEach(t),oe=c(o),R=s(o,"P",{});var Ot=a(R);x=i(Ot,"This model was contributed by "),q=s(Ot,"A",{href:!0,rel:!0});var Pi=a(q);be=i(Pi,"sshleifer"),Pi.forEach(t),at=i(Ot,". The Authors\u2019 code can be found "),ye=s(Ot,"A",{href:!0,rel:!0});var Im=a(ye);Q=i(Im,"here"),Im.forEach(t),rt=i(Ot,"."),Ot.forEach(t),Je=c(o),le=s(o,"H2",{class:!0});var od=a(le);L=s(od,"A",{id:!0,class:!0,href:!0});var Lm=a(L);J=s(Lm,"SPAN",{});var Gm=a(J);y(Te.$$.fragment,Gm),Gm.forEach(t),Lm.forEach(t),it=c(od),X=s(od,"SPAN",{});var Nm=a(X);dt=i(Nm,"Checkpoints"),Nm.forEach(t),od.forEach(t),Xe=c(o),H=s(o,"P",{});var Qs=a(H);lt=i(Qs,"All the "),Wo=s(Qs,"A",{href:!0,rel:!0});var Dm=a(Wo);Zd=i(Dm,"checkpoints"),Dm.forEach(t),Yd=i(Qs,` are fine-tuned for summarization, besides
`),la=s(Qs,"EM",{});var Um=a(la);el=i(Um,"pegasus-large"),Um.forEach(t),tl=i(Qs,", whence the other checkpoints are fine-tuned:"),Qs.forEach(t),zi=c(o),fe=s(o,"UL",{});var et=a(fe);ca=s(et,"LI",{});var Wm=a(ca);ol=i(Wm,"Each checkpoint is 2.2 GB on disk and 568M parameters."),Wm.forEach(t),nl=c(et),pa=s(et,"LI",{});var Bm=a(pa);sl=i(Bm,"FP16 is not supported (help/ideas on this appreciated!)."),Bm.forEach(t),al=c(et),ua=s(et,"LI",{});var Rm=a(ua);rl=i(Rm,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Rm.forEach(t),il=c(et),Bo=s(et,"LI",{});var nd=a(Bo);dl=i(nd,"Full replication results and correctly pre-processed data can be found in this "),Ro=s(nd,"A",{href:!0,rel:!0});var Hm=a(Ro);ll=i(Hm,"Issue"),Hm.forEach(t),cl=i(nd,"."),nd.forEach(t),pl=c(et),At=s(et,"LI",{});var $i=a(At);Ho=s($i,"A",{href:!0,rel:!0});var Km=a(Ho);ul=i(Km,"Distilled checkpoints"),Km.forEach(t),hl=i($i," are described in this "),Ko=s($i,"A",{href:!0,rel:!0});var Vm=a(Ko);ml=i(Vm,"paper"),Vm.forEach(t),fl=i($i,"."),$i.forEach(t),et.forEach(t),Fi=c(o),ct=s(o,"H3",{class:!0});var sd=a(ct);It=s(sd,"A",{id:!0,class:!0,href:!0});var Qm=a(It);ha=s(Qm,"SPAN",{});var Jm=a(ha);y(Vo.$$.fragment,Jm),Jm.forEach(t),Qm.forEach(t),gl=c(sd),ma=s(sd,"SPAN",{});var Xm=a(ma);_l=i(Xm,"Examples"),Xm.forEach(t),sd.forEach(t),qi=c(o),Ze=s(o,"UL",{});var Js=a(Ze);Lt=s(Js,"LI",{});var xi=a(Lt);Qo=s(xi,"A",{href:!0,rel:!0});var Zm=a(Qo);kl=i(Zm,"Script"),Zm.forEach(t),vl=i(xi,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Jo=s(xi,"A",{href:!0,rel:!0});var Ym=a(Jo);bl=i(Ym,"examples/pytorch/summarization/"),Ym.forEach(t),yl=i(xi,"."),xi.forEach(t),Tl=c(Js),fa=s(Js,"LI",{});var ef=a(fa);wl=i(ef,"FP16 is not supported (help/ideas on this appreciated!)."),ef.forEach(t),Pl=c(Js),ga=s(Js,"LI",{});var tf=a(ga);$l=i(tf,"The adafactor optimizer is recommended for pegasus fine-tuning."),tf.forEach(t),Js.forEach(t),Ei=c(o),pt=s(o,"H2",{class:!0});var ad=a(pt);Gt=s(ad,"A",{id:!0,class:!0,href:!0});var of=a(Gt);_a=s(of,"SPAN",{});var nf=a(_a);y(Xo.$$.fragment,nf),nf.forEach(t),of.forEach(t),xl=c(ad),ka=s(ad,"SPAN",{});var sf=a(ka);zl=i(sf,"Implementation Notes"),sf.forEach(t),ad.forEach(t),Mi=c(o),ge=s(o,"UL",{});var tt=a(ge);va=s(tt,"LI",{});var af=a(va);ba=s(af,"P",{});var rf=a(ba);Fl=i(rf,"All models are transformer encoder-decoders with 16 layers in each component."),rf.forEach(t),af.forEach(t),ql=c(tt),ya=s(tt,"LI",{});var df=a(ya);Es=s(df,"P",{});var Sm=a(Es);El=i(Sm,"The implementation is completely inherited from "),Ms=s(Sm,"A",{href:!0});var lf=a(Ms);Ml=i(lf,"BartForConditionalGeneration"),lf.forEach(t),Sm.forEach(t),df.forEach(t),Cl=c(tt),Zo=s(tt,"LI",{});var rd=a(Zo);Ta=s(rd,"P",{});var cf=a(Ta);jl=i(cf,"Some key configuration differences:"),cf.forEach(t),Sl=c(rd),ut=s(rd,"UL",{});var Xs=a(ut);wa=s(Xs,"LI",{});var pf=a(wa);Ol=i(pf,"static, sinusoidal position embeddings"),pf.forEach(t),Al=c(Xs),Pa=s(Xs,"LI",{});var uf=a(Pa);Il=i(uf,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),uf.forEach(t),Ll=c(Xs),Yo=s(Xs,"LI",{});var id=a(Yo);Gl=i(id,"more beams are used ("),$a=s(id,"CODE",{});var hf=a($a);Nl=i(hf,"num_beams=8"),hf.forEach(t),Dl=i(id,")"),id.forEach(t),Xs.forEach(t),rd.forEach(t),Ul=c(tt),xa=s(tt,"LI",{});var mf=a(xa);Re=s(mf,"P",{});var Eo=a(Re);Wl=i(Eo,"All pretrained pegasus checkpoints are the same besides three attributes: "),za=s(Eo,"CODE",{});var ff=a(za);Bl=i(ff,"tokenizer.model_max_length"),ff.forEach(t),Rl=i(Eo,` (maximum
input size), `),Fa=s(Eo,"CODE",{});var gf=a(Fa);Hl=i(gf,"max_length"),gf.forEach(t),Kl=i(Eo," (the maximum number of tokens to generate) and "),qa=s(Eo,"CODE",{});var _f=a(qa);Vl=i(_f,"length_penalty"),_f.forEach(t),Ql=i(Eo,"."),Eo.forEach(t),mf.forEach(t),Jl=c(tt),Ea=s(tt,"LI",{});var kf=a(Ea);ht=s(kf,"P",{});var Zs=a(ht);Xl=i(Zs,"The code to convert checkpoints trained in the author\u2019s "),en=s(Zs,"A",{href:!0,rel:!0});var vf=a(en);Zl=i(vf,"repo"),vf.forEach(t),Yl=i(Zs,` can be
found in `),Ma=s(Zs,"CODE",{});var bf=a(Ma);ec=i(bf,"convert_pegasus_tf_to_pytorch.py"),bf.forEach(t),tc=i(Zs,"."),Zs.forEach(t),kf.forEach(t),tt.forEach(t),Ci=c(o),mt=s(o,"H2",{class:!0});var dd=a(mt);Nt=s(dd,"A",{id:!0,class:!0,href:!0});var yf=a(Nt);Ca=s(yf,"SPAN",{});var Tf=a(Ca);y(tn.$$.fragment,Tf),Tf.forEach(t),yf.forEach(t),oc=c(dd),ja=s(dd,"SPAN",{});var wf=a(ja);nc=i(wf,"Usage Example"),wf.forEach(t),dd.forEach(t),ji=c(o),y(on.$$.fragment,o),Si=c(o),ft=s(o,"H2",{class:!0});var ld=a(ft);Dt=s(ld,"A",{id:!0,class:!0,href:!0});var Pf=a(Dt);Sa=s(Pf,"SPAN",{});var $f=a(Sa);y(nn.$$.fragment,$f),$f.forEach(t),Pf.forEach(t),sc=c(ld),Oa=s(ld,"SPAN",{});var xf=a(Oa);ac=i(xf,"PegasusConfig"),xf.forEach(t),ld.forEach(t),Oi=c(o),we=s(o,"DIV",{class:!0});var Mo=a(we);y(sn.$$.fragment,Mo),rc=c(Mo),gt=s(Mo,"P",{});var Ys=a(gt);ic=i(Ys,"This is the configuration class to store the configuration of a "),Cs=s(Ys,"A",{href:!0});var zf=a(Cs);dc=i(zf,"PegasusModel"),zf.forEach(t),lc=i(Ys,`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),an=s(Ys,"A",{href:!0,rel:!0});var Ff=a(an);cc=i(Ff,"google/pegasus-large"),Ff.forEach(t),pc=i(Ys," architecture."),Ys.forEach(t),uc=c(Mo),_t=s(Mo,"P",{});var ea=a(_t);hc=i(ea,"Configuration objects inherit from "),js=s(ea,"A",{href:!0});var qf=a(js);mc=i(qf,"PretrainedConfig"),qf.forEach(t),fc=i(ea,` and can be used to control the model outputs. Read the
documentation from `),Ss=s(ea,"A",{href:!0});var Ef=a(Ss);gc=i(Ef,"PretrainedConfig"),Ef.forEach(t),_c=i(ea," for more information."),ea.forEach(t),kc=c(Mo),y(Ut.$$.fragment,Mo),Mo.forEach(t),Ai=c(o),kt=s(o,"H2",{class:!0});var cd=a(kt);Wt=s(cd,"A",{id:!0,class:!0,href:!0});var Mf=a(Wt);Aa=s(Mf,"SPAN",{});var Cf=a(Aa);y(rn.$$.fragment,Cf),Cf.forEach(t),Mf.forEach(t),vc=c(cd),Ia=s(cd,"SPAN",{});var jf=a(Ia);bc=i(jf,"PegasusTokenizer"),jf.forEach(t),cd.forEach(t),Ii=c(o),Bt=s(o,"P",{});var pd=a(Bt);yc=i(pd,"warning: "),La=s(pd,"CODE",{});var Sf=a(La);Tc=i(Sf,"add_tokens"),Sf.forEach(t),wc=i(pd," does not work at the moment."),pd.forEach(t),Li=c(o),B=s(o,"DIV",{class:!0});var _e=a(B);y(dn.$$.fragment,_e),Pc=c(_e),ln=s(_e,"P",{});var ud=a(ln);$c=i(ud,"Construct a PEGASUS tokenizer. Based on "),cn=s(ud,"A",{href:!0,rel:!0});var Of=a(cn);xc=i(Of,"SentencePiece"),Of.forEach(t),zc=i(ud,"."),ud.forEach(t),Fc=c(_e),pn=s(_e,"P",{});var hd=a(pn);qc=i(hd,"This tokenizer inherits from "),Os=s(hd,"A",{href:!0});var Af=a(Os);Ec=i(Af,"PreTrainedTokenizer"),Af.forEach(t),Mc=i(hd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),hd.forEach(t),Cc=c(_e),Fe=s(_e,"DIV",{class:!0});var Co=a(Fe);y(un.$$.fragment,Co),jc=c(Co),hn=s(Co,"P",{});var md=a(hn);Sc=i(md,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Ga=s(md,"CODE",{});var If=a(Ga);Oc=i(If,"X"),If.forEach(t),Ac=i(md," represents the sequence:"),md.forEach(t),Ic=c(Co),mn=s(Co,"UL",{});var fd=a(mn);As=s(fd,"LI",{});var Om=a(As);Lc=i(Om,"single sequence: "),Na=s(Om,"CODE",{});var Lf=a(Na);Gc=i(Lf,"X </s>"),Lf.forEach(t),Om.forEach(t),Nc=c(fd),fn=s(fd,"LI",{});var gd=a(fn);Dc=i(gd,"pair of sequences: "),Da=s(gd,"CODE",{});var Gf=a(Da);Uc=i(Gf,"A B </s>"),Gf.forEach(t),Wc=i(gd," (not intended use)"),gd.forEach(t),fd.forEach(t),Bc=c(Co),Ua=s(Co,"P",{});var Nf=a(Ua);Rc=i(Nf,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Nf.forEach(t),Co.forEach(t),Hc=c(_e),Rt=s(_e,"DIV",{class:!0});var _d=a(Rt);y(gn.$$.fragment,_d),Kc=c(_d),Wa=s(_d,"P",{});var Df=a(Wa);Vc=i(Df,"Converts a sequence of tokens (string) in a single string."),Df.forEach(t),_d.forEach(t),Qc=c(_e),Ht=s(_e,"DIV",{class:!0});var kd=a(Ht);y(_n.$$.fragment,kd),Jc=c(kd),Ba=s(kd,"P",{});var Uf=a(Ba);Xc=i(Uf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Uf.forEach(t),kd.forEach(t),Zc=c(_e),Kt=s(_e,"DIV",{class:!0});var vd=a(Kt);y(kn.$$.fragment,vd),Yc=c(vd),Ra=s(vd,"P",{});var Wf=a(Ra);ep=i(Wf,"Just EOS"),Wf.forEach(t),vd.forEach(t),_e.forEach(t),Gi=c(o),vt=s(o,"H2",{class:!0});var bd=a(vt);Vt=s(bd,"A",{id:!0,class:!0,href:!0});var Bf=a(Vt);Ha=s(Bf,"SPAN",{});var Rf=a(Ha);y(vn.$$.fragment,Rf),Rf.forEach(t),Bf.forEach(t),tp=c(bd),Ka=s(bd,"SPAN",{});var Hf=a(Ka);op=i(Hf,"PegasusTokenizerFast"),Hf.forEach(t),bd.forEach(t),Ni=c(o),ce=s(o,"DIV",{class:!0});var ot=a(ce);y(bn.$$.fragment,ot),np=c(ot),bt=s(ot,"P",{});var ta=a(bt);sp=i(ta,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Va=s(ta,"EM",{});var Kf=a(Va);ap=i(Kf,"tokenizers"),Kf.forEach(t),rp=i(ta,` library). Based on
`),yn=s(ta,"A",{href:!0,rel:!0});var Vf=a(yn);ip=i(Vf,"Unigram"),Vf.forEach(t),dp=i(ta,"."),ta.forEach(t),lp=c(ot),Tn=s(ot,"P",{});var yd=a(Tn);cp=i(yd,"This tokenizer inherits from "),Is=s(yd,"A",{href:!0});var Qf=a(Is);pp=i(Qf,"PreTrainedTokenizerFast"),Qf.forEach(t),up=i(yd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),yd.forEach(t),hp=c(ot),Ye=s(ot,"DIV",{class:!0});var oa=a(Ye);y(wn.$$.fragment,oa),mp=c(oa),Qa=s(oa,"P",{});var Jf=a(Qa);fp=i(Jf,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),Jf.forEach(t),gp=c(oa),Pn=s(oa,"UL",{});var Td=a(Pn);Ls=s(Td,"LI",{});var Am=a(Ls);_p=i(Am,"single sequence: "),Ja=s(Am,"CODE",{});var Xf=a(Ja);kp=i(Xf,"X </s>"),Xf.forEach(t),Am.forEach(t),vp=c(Td),$n=s(Td,"LI",{});var wd=a($n);bp=i(wd,"pair of sequences: "),Xa=s(wd,"CODE",{});var Zf=a(Xa);yp=i(Zf,"A B </s>"),Zf.forEach(t),Tp=i(wd," (not intended use)"),wd.forEach(t),Td.forEach(t),oa.forEach(t),wp=c(ot),Qt=s(ot,"DIV",{class:!0});var Pd=a(Qt);y(xn.$$.fragment,Pd),Pp=c(Pd),Za=s(Pd,"P",{});var Yf=a(Za);$p=i(Yf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Yf.forEach(t),Pd.forEach(t),ot.forEach(t),Di=c(o),yt=s(o,"H2",{class:!0});var $d=a(yt);Jt=s($d,"A",{id:!0,class:!0,href:!0});var eg=a(Jt);Ya=s(eg,"SPAN",{});var tg=a(Ya);y(zn.$$.fragment,tg),tg.forEach(t),eg.forEach(t),xp=c($d),er=s($d,"SPAN",{});var og=a(er);zp=i(og,"PegasusModel"),og.forEach(t),$d.forEach(t),Ui=c(o),Pe=s(o,"DIV",{class:!0});var jo=a(Pe);y(Fn.$$.fragment,jo),Fp=c(jo),qn=s(jo,"P",{});var xd=a(qn);qp=i(xd,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gs=s(xd,"A",{href:!0});var ng=a(Gs);Ep=i(ng,"PreTrainedModel"),ng.forEach(t),Mp=i(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Cp=c(jo),En=s(jo,"P",{});var zd=a(En);jp=i(zd,"This model is also a PyTorch "),Mn=s(zd,"A",{href:!0,rel:!0});var sg=a(Mn);Sp=i(sg,"torch.nn.Module"),sg.forEach(t),Op=i(zd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zd.forEach(t),Ap=c(jo),qe=s(jo,"DIV",{class:!0});var So=a(qe);y(Cn.$$.fragment,So),Ip=c(So),Tt=s(So,"P",{});var na=a(Tt);Lp=i(na,"The "),Ns=s(na,"A",{href:!0});var ag=a(Ns);Gp=i(ag,"PegasusModel"),ag.forEach(t),Np=i(na," forward method, overrides the "),tr=s(na,"CODE",{});var rg=a(tr);Dp=i(rg,"__call__"),rg.forEach(t),Up=i(na," special method."),na.forEach(t),Wp=c(So),y(Xt.$$.fragment,So),Bp=c(So),y(Zt.$$.fragment,So),So.forEach(t),jo.forEach(t),Wi=c(o),wt=s(o,"H2",{class:!0});var Fd=a(wt);Yt=s(Fd,"A",{id:!0,class:!0,href:!0});var ig=a(Yt);or=s(ig,"SPAN",{});var dg=a(or);y(jn.$$.fragment,dg),dg.forEach(t),ig.forEach(t),Rp=c(Fd),nr=s(Fd,"SPAN",{});var lg=a(nr);Hp=i(lg,"PegasusForConditionalGeneration"),lg.forEach(t),Fd.forEach(t),Bi=c(o),$e=s(o,"DIV",{class:!0});var Oo=a($e);y(Sn.$$.fragment,Oo),Kp=c(Oo),On=s(Oo,"P",{});var qd=a(On);Vp=i(qd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ds=s(qd,"A",{href:!0});var cg=a(Ds);Qp=i(cg,"PreTrainedModel"),cg.forEach(t),Jp=i(qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd.forEach(t),Xp=c(Oo),An=s(Oo,"P",{});var Ed=a(An);Zp=i(Ed,"This model is also a PyTorch "),In=s(Ed,"A",{href:!0,rel:!0});var pg=a(In);Yp=i(pg,"torch.nn.Module"),pg.forEach(t),eu=i(Ed,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed.forEach(t),tu=c(Oo),Ee=s(Oo,"DIV",{class:!0});var Ao=a(Ee);y(Ln.$$.fragment,Ao),ou=c(Ao),Pt=s(Ao,"P",{});var sa=a(Pt);nu=i(sa,"The "),Us=s(sa,"A",{href:!0});var ug=a(Us);su=i(ug,"PegasusForConditionalGeneration"),ug.forEach(t),au=i(sa," forward method, overrides the "),sr=s(sa,"CODE",{});var hg=a(sr);ru=i(hg,"__call__"),hg.forEach(t),iu=i(sa," special method."),sa.forEach(t),du=c(Ao),y(eo.$$.fragment,Ao),lu=c(Ao),y(to.$$.fragment,Ao),Ao.forEach(t),Oo.forEach(t),Ri=c(o),$t=s(o,"H2",{class:!0});var Md=a($t);oo=s(Md,"A",{id:!0,class:!0,href:!0});var mg=a(oo);ar=s(mg,"SPAN",{});var fg=a(ar);y(Gn.$$.fragment,fg),fg.forEach(t),mg.forEach(t),cu=c(Md),rr=s(Md,"SPAN",{});var gg=a(rr);pu=i(gg,"PegasusForCausalLM"),gg.forEach(t),Md.forEach(t),Hi=c(o),xt=s(o,"DIV",{class:!0});var Cd=a(xt);y(Nn.$$.fragment,Cd),uu=c(Cd),no=s(Cd,"DIV",{class:!0});var jd=a(no);y(Dn.$$.fragment,jd),hu=c(jd),y(so.$$.fragment,jd),jd.forEach(t),Cd.forEach(t),Ki=c(o),zt=s(o,"H2",{class:!0});var Sd=a(zt);ao=s(Sd,"A",{id:!0,class:!0,href:!0});var _g=a(ao);ir=s(_g,"SPAN",{});var kg=a(ir);y(Un.$$.fragment,kg),kg.forEach(t),_g.forEach(t),mu=c(Sd),dr=s(Sd,"SPAN",{});var vg=a(dr);fu=i(vg,"TFPegasusModel"),vg.forEach(t),Sd.forEach(t),Vi=c(o),pe=s(o,"DIV",{class:!0});var nt=a(pe);y(Wn.$$.fragment,nt),gu=c(nt),Bn=s(nt,"P",{});var Od=a(Bn);_u=i(Od,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ws=s(Od,"A",{href:!0});var bg=a(Ws);ku=i(bg,"TFPreTrainedModel"),bg.forEach(t),vu=i(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od.forEach(t),bu=c(nt),Rn=s(nt,"P",{});var Ad=a(Rn);yu=i(Ad,"This model is also a "),Hn=s(Ad,"A",{href:!0,rel:!0});var yg=a(Hn);Tu=i(yg,"tf.keras.Model"),yg.forEach(t),wu=i(Ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ad.forEach(t),Pu=c(nt),y(ro.$$.fragment,nt),$u=c(nt),Me=s(nt,"DIV",{class:!0});var Io=a(Me);y(Kn.$$.fragment,Io),xu=c(Io),Ft=s(Io,"P",{});var aa=a(Ft);zu=i(aa,"The "),Bs=s(aa,"A",{href:!0});var Tg=a(Bs);Fu=i(Tg,"TFPegasusModel"),Tg.forEach(t),qu=i(aa," forward method, overrides the "),lr=s(aa,"CODE",{});var wg=a(lr);Eu=i(wg,"__call__"),wg.forEach(t),Mu=i(aa," special method."),aa.forEach(t),Cu=c(Io),y(io.$$.fragment,Io),ju=c(Io),y(lo.$$.fragment,Io),Io.forEach(t),nt.forEach(t),Qi=c(o),qt=s(o,"H2",{class:!0});var Id=a(qt);co=s(Id,"A",{id:!0,class:!0,href:!0});var Pg=a(co);cr=s(Pg,"SPAN",{});var $g=a(cr);y(Vn.$$.fragment,$g),$g.forEach(t),Pg.forEach(t),Su=c(Id),pr=s(Id,"SPAN",{});var xg=a(pr);Ou=i(xg,"TFPegasusForConditionalGeneration"),xg.forEach(t),Id.forEach(t),Ji=c(o),ue=s(o,"DIV",{class:!0});var st=a(ue);y(Qn.$$.fragment,st),Au=c(st),Jn=s(st,"P",{});var Ld=a(Jn);Iu=i(Ld,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rs=s(Ld,"A",{href:!0});var zg=a(Rs);Lu=i(zg,"TFPreTrainedModel"),zg.forEach(t),Gu=i(Ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld.forEach(t),Nu=c(st),Xn=s(st,"P",{});var Gd=a(Xn);Du=i(Gd,"This model is also a "),Zn=s(Gd,"A",{href:!0,rel:!0});var Fg=a(Zn);Uu=i(Fg,"tf.keras.Model"),Fg.forEach(t),Wu=i(Gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gd.forEach(t),Bu=c(st),y(po.$$.fragment,st),Ru=c(st),Ce=s(st,"DIV",{class:!0});var Lo=a(Ce);y(Yn.$$.fragment,Lo),Hu=c(Lo),Et=s(Lo,"P",{});var ra=a(Et);Ku=i(ra,"The "),Hs=s(ra,"A",{href:!0});var qg=a(Hs);Vu=i(qg,"TFPegasusForConditionalGeneration"),qg.forEach(t),Qu=i(ra," forward method, overrides the "),ur=s(ra,"CODE",{});var Eg=a(ur);Ju=i(Eg,"__call__"),Eg.forEach(t),Xu=i(ra," special method."),ra.forEach(t),Zu=c(Lo),y(uo.$$.fragment,Lo),Yu=c(Lo),y(ho.$$.fragment,Lo),Lo.forEach(t),st.forEach(t),Xi=c(o),Mt=s(o,"H2",{class:!0});var Nd=a(Mt);mo=s(Nd,"A",{id:!0,class:!0,href:!0});var Mg=a(mo);hr=s(Mg,"SPAN",{});var Cg=a(hr);y(es.$$.fragment,Cg),Cg.forEach(t),Mg.forEach(t),eh=c(Nd),mr=s(Nd,"SPAN",{});var jg=a(mr);th=i(jg,"FlaxPegasusModel"),jg.forEach(t),Nd.forEach(t),Zi=c(o),G=s(o,"DIV",{class:!0});var ne=a(G);y(ts.$$.fragment,ne),oh=c(ne),os=s(ne,"P",{});var Dd=a(os);nh=i(Dd,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ks=s(Dd,"A",{href:!0});var Sg=a(Ks);sh=i(Sg,"FlaxPreTrainedModel"),Sg.forEach(t),ah=i(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),rh=c(ne),ns=s(ne,"P",{});var Ud=a(ns);ih=i(Ud,`This model is also a Flax Linen
`),ss=s(Ud,"A",{href:!0,rel:!0});var Og=a(ss);dh=i(Og,"flax.nn.Module"),Og.forEach(t),lh=i(Ud,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ud.forEach(t),ch=c(ne),fr=s(ne,"P",{});var Ag=a(fr);ph=i(Ag,"Finally, this model supports inherent JAX features such as:"),Ag.forEach(t),uh=c(ne),He=s(ne,"UL",{});var Go=a(He);gr=s(Go,"LI",{});var Ig=a(gr);as=s(Ig,"A",{href:!0,rel:!0});var Lg=a(as);hh=i(Lg,"Just-In-Time (JIT) compilation"),Lg.forEach(t),Ig.forEach(t),mh=c(Go),_r=s(Go,"LI",{});var Gg=a(_r);rs=s(Gg,"A",{href:!0,rel:!0});var Ng=a(rs);fh=i(Ng,"Automatic Differentiation"),Ng.forEach(t),Gg.forEach(t),gh=c(Go),kr=s(Go,"LI",{});var Dg=a(kr);is=s(Dg,"A",{href:!0,rel:!0});var Ug=a(is);_h=i(Ug,"Vectorization"),Ug.forEach(t),Dg.forEach(t),kh=c(Go),vr=s(Go,"LI",{});var Wg=a(vr);ds=s(Wg,"A",{href:!0,rel:!0});var Bg=a(ds);vh=i(Bg,"Parallelization"),Bg.forEach(t),Wg.forEach(t),Go.forEach(t),bh=c(ne),je=s(ne,"DIV",{class:!0});var No=a(je);y(ls.$$.fragment,No),yh=c(No),Ct=s(No,"P",{});var ia=a(Ct);Th=i(ia,"The "),br=s(ia,"CODE",{});var Rg=a(br);wh=i(Rg,"FlaxPegasusPreTrainedModel"),Rg.forEach(t),Ph=i(ia," forward method, overrides the "),yr=s(ia,"CODE",{});var Hg=a(yr);$h=i(Hg,"__call__"),Hg.forEach(t),xh=i(ia," special method."),ia.forEach(t),zh=c(No),y(fo.$$.fragment,No),Fh=c(No),y(go.$$.fragment,No),No.forEach(t),qh=c(ne),_o=s(ne,"DIV",{class:!0});var Wd=a(_o);y(cs.$$.fragment,Wd),Eh=c(Wd),y(ko.$$.fragment,Wd),Wd.forEach(t),Mh=c(ne),vo=s(ne,"DIV",{class:!0});var Bd=a(vo);y(ps.$$.fragment,Bd),Ch=c(Bd),y(bo.$$.fragment,Bd),Bd.forEach(t),ne.forEach(t),Yi=c(o),jt=s(o,"H2",{class:!0});var Rd=a(jt);yo=s(Rd,"A",{id:!0,class:!0,href:!0});var Kg=a(yo);Tr=s(Kg,"SPAN",{});var Vg=a(Tr);y(us.$$.fragment,Vg),Vg.forEach(t),Kg.forEach(t),jh=c(Rd),wr=s(Rd,"SPAN",{});var Qg=a(wr);Sh=i(Qg,"FlaxPegasusForConditionalGeneration"),Qg.forEach(t),Rd.forEach(t),ed=c(o),N=s(o,"DIV",{class:!0});var se=a(N);y(hs.$$.fragment,se),Oh=c(se),ms=s(se,"P",{});var Hd=a(ms);Ah=i(Hd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vs=s(Hd,"A",{href:!0});var Jg=a(Vs);Ih=i(Jg,"FlaxPreTrainedModel"),Jg.forEach(t),Lh=i(Hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hd.forEach(t),Gh=c(se),fs=s(se,"P",{});var Kd=a(fs);Nh=i(Kd,`This model is also a Flax Linen
`),gs=s(Kd,"A",{href:!0,rel:!0});var Xg=a(gs);Dh=i(Xg,"flax.nn.Module"),Xg.forEach(t),Uh=i(Kd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kd.forEach(t),Wh=c(se),Pr=s(se,"P",{});var Zg=a(Pr);Bh=i(Zg,"Finally, this model supports inherent JAX features such as:"),Zg.forEach(t),Rh=c(se),Ke=s(se,"UL",{});var Do=a(Ke);$r=s(Do,"LI",{});var Yg=a($r);_s=s(Yg,"A",{href:!0,rel:!0});var e_=a(_s);Hh=i(e_,"Just-In-Time (JIT) compilation"),e_.forEach(t),Yg.forEach(t),Kh=c(Do),xr=s(Do,"LI",{});var t_=a(xr);ks=s(t_,"A",{href:!0,rel:!0});var o_=a(ks);Vh=i(o_,"Automatic Differentiation"),o_.forEach(t),t_.forEach(t),Qh=c(Do),zr=s(Do,"LI",{});var n_=a(zr);vs=s(n_,"A",{href:!0,rel:!0});var s_=a(vs);Jh=i(s_,"Vectorization"),s_.forEach(t),n_.forEach(t),Xh=c(Do),Fr=s(Do,"LI",{});var a_=a(Fr);bs=s(a_,"A",{href:!0,rel:!0});var r_=a(bs);Zh=i(r_,"Parallelization"),r_.forEach(t),a_.forEach(t),Do.forEach(t),Yh=c(se),M=s(se,"DIV",{class:!0});var j=a(M);y(ys.$$.fragment,j),em=c(j),St=s(j,"P",{});var da=a(St);tm=i(da,"The "),qr=s(da,"CODE",{});var i_=a(qr);om=i(i_,"FlaxPegasusPreTrainedModel"),i_.forEach(t),nm=i(da," forward method, overrides the "),Er=s(da,"CODE",{});var d_=a(Er);sm=i(d_,"__call__"),d_.forEach(t),am=i(da," special method."),da.forEach(t),rm=c(j),y(To.$$.fragment,j),im=c(j),Mr=s(j,"P",{});var l_=a(Mr);dm=i(l_,"Summarization example:"),l_.forEach(t),lm=c(j),Cr=s(j,"BLOCKQUOTE",{});var c_=a(Cr);jr=s(c_,"BLOCKQUOTE",{});var p_=a(jr);Sr=s(p_,"BLOCKQUOTE",{});var u_=a(Sr);Or=s(u_,"P",{});var h_=a(Or);cm=i(h_,"from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),h_.forEach(t),u_.forEach(t),p_.forEach(t),c_.forEach(t),pm=c(j),Ar=s(j,"BLOCKQUOTE",{});var m_=a(Ar);Ir=s(m_,"BLOCKQUOTE",{});var f_=a(Ir);Lr=s(f_,"BLOCKQUOTE",{});var g_=a(Lr);Gr=s(g_,"P",{});var __=a(Gr);um=i(__,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),__.forEach(t),g_.forEach(t),f_.forEach(t),m_.forEach(t),hm=c(j),Nr=s(j,"BLOCKQUOTE",{});var k_=a(Nr);Dr=s(k_,"BLOCKQUOTE",{});var v_=a(Dr);Ur=s(v_,"BLOCKQUOTE",{});var b_=a(Ur);Wr=s(b_,"P",{});var y_=a(Wr);mm=i(y_,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),y_.forEach(t),b_.forEach(t),v_.forEach(t),k_.forEach(t),fm=c(j),Br=s(j,"BLOCKQUOTE",{});var T_=a(Br);Rr=s(T_,"BLOCKQUOTE",{});var w_=a(Rr);Ts=s(w_,"BLOCKQUOTE",{});var Vd=a(Ts);wo=s(Vd,"H1",{class:!0});var Qd=a(wo);Po=s(Qd,"A",{id:!0,class:!0,href:!0});var P_=a(Po);Hr=s(P_,"SPAN",{});var $_=a(Hr);y(ws.$$.fragment,$_),$_.forEach(t),P_.forEach(t),gm=c(Qd),Kr=s(Qd,"SPAN",{});var x_=a(Kr);_m=i(x_,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),x_.forEach(t),Qd.forEach(t),km=c(Vd),Vr=s(Vd,"P",{});var z_=a(Vr);vm=i(z_,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),z_.forEach(t),Vd.forEach(t),w_.forEach(t),T_.forEach(t),bm=c(j),Qr=s(j,"P",{});var F_=a(Qr);ym=i(F_,"Mask filling example:"),F_.forEach(t),Tm=c(j),Jr=s(j,"BLOCKQUOTE",{});var q_=a(Jr);Xr=s(q_,"BLOCKQUOTE",{});var E_=a(Xr);Zr=s(E_,"BLOCKQUOTE",{});var M_=a(Zr);Yr=s(M_,"P",{});var C_=a(Yr);wm=i(C_,`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),C_.forEach(t),M_.forEach(t),E_.forEach(t),q_.forEach(t),Pm=c(j),ei=s(j,"BLOCKQUOTE",{});var j_=a(ei);ti=s(j_,"BLOCKQUOTE",{});var S_=a(ti);oi=s(S_,"BLOCKQUOTE",{});var O_=a(oi);ni=s(O_,"P",{});var A_=a(ni);$m=i(A_,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),A_.forEach(t),O_.forEach(t),S_.forEach(t),j_.forEach(t),xm=c(j),si=s(j,"BLOCKQUOTE",{});var I_=a(si);ai=s(I_,"BLOCKQUOTE",{});var L_=a(ai);ri=s(L_,"BLOCKQUOTE",{});var G_=a(ri);ii=s(G_,"P",{});var N_=a(ii);zm=i(N_,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),N_.forEach(t),G_.forEach(t),L_.forEach(t),I_.forEach(t),Fm=c(j),di=s(j,"BLOCKQUOTE",{});var D_=a(di);li=s(D_,"BLOCKQUOTE",{});var U_=a(li);ci=s(U_,"BLOCKQUOTE",{});var W_=a(ci);pi=s(W_,"P",{});var B_=a(pi);qm=i(B_,"tokenizer.decode(predictions).split()"),B_.forEach(t),W_.forEach(t),U_.forEach(t),D_.forEach(t),j.forEach(t),Em=c(se),$o=s(se,"DIV",{class:!0});var Jd=a($o);y(Ps.$$.fragment,Jd),Mm=c(Jd),y(xo.$$.fragment,Jd),Jd.forEach(t),Cm=c(se),zo=s(se,"DIV",{class:!0});var Xd=a(zo);y($s.$$.fragment,Xd),jm=c(Xd),y(Fo.$$.fragment,Xd),Xd.forEach(t),se.forEach(t),this.h()},h(){p(u,"name","hf:doc:metadata"),p(u,"content",JSON.stringify(gk)),p(h,"id","pegasus"),p(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(h,"href","#pegasus"),p(_,"class","relative group"),p(re,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),p(re,"rel","nofollow"),p(A,"id","overview"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#overview"),p(D,"class","relative group"),p(U,"href","https://arxiv.org/pdf/1912.08777.pdf"),p(U,"rel","nofollow"),p(q,"href","https://huggingface.co/sshleifer"),p(q,"rel","nofollow"),p(ye,"href","https://github.com/google-research/pegasus"),p(ye,"rel","nofollow"),p(L,"id","checkpoints"),p(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(L,"href","#checkpoints"),p(le,"class","relative group"),p(Wo,"href","https://huggingface.co/models?search=pegasus"),p(Wo,"rel","nofollow"),p(Ro,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),p(Ro,"rel","nofollow"),p(Ho,"href","https://huggingface.co/models?search=distill-pegasus"),p(Ho,"rel","nofollow"),p(Ko,"href","https://arxiv.org/abs/2010.13002"),p(Ko,"rel","nofollow"),p(It,"id","examples"),p(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(It,"href","#examples"),p(ct,"class","relative group"),p(Qo,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),p(Qo,"rel","nofollow"),p(Jo,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),p(Jo,"rel","nofollow"),p(Gt,"id","implementation-notes"),p(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Gt,"href","#implementation-notes"),p(pt,"class","relative group"),p(Ms,"href","/docs/transformers/pr_17196/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(en,"href","https://github.com/google-research/pegasus"),p(en,"rel","nofollow"),p(Nt,"id","usage-example"),p(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Nt,"href","#usage-example"),p(mt,"class","relative group"),p(Dt,"id","transformers.PegasusConfig"),p(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Dt,"href","#transformers.PegasusConfig"),p(ft,"class","relative group"),p(Cs,"href","/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusModel"),p(an,"href","https://huggingface.co/google/pegasus-large"),p(an,"rel","nofollow"),p(js,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),p(Ss,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),p(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Wt,"id","transformers.PegasusTokenizer"),p(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Wt,"href","#transformers.PegasusTokenizer"),p(kt,"class","relative group"),p(cn,"href","https://github.com/google/sentencepiece"),p(cn,"rel","nofollow"),p(Os,"href","/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Vt,"id","transformers.PegasusTokenizerFast"),p(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Vt,"href","#transformers.PegasusTokenizerFast"),p(vt,"class","relative group"),p(yn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),p(yn,"rel","nofollow"),p(Is,"href","/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Jt,"id","transformers.PegasusModel"),p(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Jt,"href","#transformers.PegasusModel"),p(yt,"class","relative group"),p(Gs,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),p(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Mn,"rel","nofollow"),p(Ns,"href","/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusModel"),p(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Yt,"id","transformers.PegasusForConditionalGeneration"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.PegasusForConditionalGeneration"),p(wt,"class","relative group"),p(Ds,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),p(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(In,"rel","nofollow"),p(Us,"href","/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),p(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(oo,"id","transformers.PegasusForCausalLM"),p(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oo,"href","#transformers.PegasusForCausalLM"),p($t,"class","relative group"),p(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ao,"id","transformers.TFPegasusModel"),p(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ao,"href","#transformers.TFPegasusModel"),p(zt,"class","relative group"),p(Ws,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),p(Hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Hn,"rel","nofollow"),p(Bs,"href","/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.TFPegasusModel"),p(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(co,"id","transformers.TFPegasusForConditionalGeneration"),p(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(co,"href","#transformers.TFPegasusForConditionalGeneration"),p(qt,"class","relative group"),p(Rs,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),p(Zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Zn,"rel","nofollow"),p(Hs,"href","/docs/transformers/pr_17196/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),p(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(mo,"id","transformers.FlaxPegasusModel"),p(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(mo,"href","#transformers.FlaxPegasusModel"),p(Mt,"class","relative group"),p(Ks,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(ss,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(ss,"rel","nofollow"),p(as,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(as,"rel","nofollow"),p(rs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(rs,"rel","nofollow"),p(is,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(is,"rel","nofollow"),p(ds,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(ds,"rel","nofollow"),p(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(yo,"id","transformers.FlaxPegasusForConditionalGeneration"),p(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(yo,"href","#transformers.FlaxPegasusForConditionalGeneration"),p(jt,"class","relative group"),p(Vs,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(gs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(gs,"rel","nofollow"),p(_s,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(_s,"rel","nofollow"),p(ks,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(ks,"rel","nofollow"),p(vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(vs,"rel","nofollow"),p(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(bs,"rel","nofollow"),p(Po,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),p(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Po,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),p(wo,"class","relative group"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,u),f(o,v,g),f(o,_,g),e(_,h),e(h,k),T(d,k,null),e(_,m),e(_,F),e(F,Oe),f(o,he,g),f(o,E,g),e(E,ke),e(ke,ae),e(E,Ae),e(E,re),e(re,ie),e(E,Ie),f(o,xe,g),f(o,D,g),e(D,A),e(A,ve),T(K,ve,null),e(D,S),e(D,O),e(O,Le),f(o,Y,g),f(o,ee,g),e(ee,Ge),e(ee,U),e(U,Ne),e(ee,De),f(o,I,g),f(o,me,g),e(me,de),f(o,ze,g),f(o,te,g),e(te,V),e(V,Ue),e(te,We),e(te,W),e(W,Be),f(o,oe,g),f(o,R,g),e(R,x),e(R,q),e(q,be),e(R,at),e(R,ye),e(ye,Q),e(R,rt),f(o,Je,g),f(o,le,g),e(le,L),e(L,J),T(Te,J,null),e(le,it),e(le,X),e(X,dt),f(o,Xe,g),f(o,H,g),e(H,lt),e(H,Wo),e(Wo,Zd),e(H,Yd),e(H,la),e(la,el),e(H,tl),f(o,zi,g),f(o,fe,g),e(fe,ca),e(ca,ol),e(fe,nl),e(fe,pa),e(pa,sl),e(fe,al),e(fe,ua),e(ua,rl),e(fe,il),e(fe,Bo),e(Bo,dl),e(Bo,Ro),e(Ro,ll),e(Bo,cl),e(fe,pl),e(fe,At),e(At,Ho),e(Ho,ul),e(At,hl),e(At,Ko),e(Ko,ml),e(At,fl),f(o,Fi,g),f(o,ct,g),e(ct,It),e(It,ha),T(Vo,ha,null),e(ct,gl),e(ct,ma),e(ma,_l),f(o,qi,g),f(o,Ze,g),e(Ze,Lt),e(Lt,Qo),e(Qo,kl),e(Lt,vl),e(Lt,Jo),e(Jo,bl),e(Lt,yl),e(Ze,Tl),e(Ze,fa),e(fa,wl),e(Ze,Pl),e(Ze,ga),e(ga,$l),f(o,Ei,g),f(o,pt,g),e(pt,Gt),e(Gt,_a),T(Xo,_a,null),e(pt,xl),e(pt,ka),e(ka,zl),f(o,Mi,g),f(o,ge,g),e(ge,va),e(va,ba),e(ba,Fl),e(ge,ql),e(ge,ya),e(ya,Es),e(Es,El),e(Es,Ms),e(Ms,Ml),e(ge,Cl),e(ge,Zo),e(Zo,Ta),e(Ta,jl),e(Zo,Sl),e(Zo,ut),e(ut,wa),e(wa,Ol),e(ut,Al),e(ut,Pa),e(Pa,Il),e(ut,Ll),e(ut,Yo),e(Yo,Gl),e(Yo,$a),e($a,Nl),e(Yo,Dl),e(ge,Ul),e(ge,xa),e(xa,Re),e(Re,Wl),e(Re,za),e(za,Bl),e(Re,Rl),e(Re,Fa),e(Fa,Hl),e(Re,Kl),e(Re,qa),e(qa,Vl),e(Re,Ql),e(ge,Jl),e(ge,Ea),e(Ea,ht),e(ht,Xl),e(ht,en),e(en,Zl),e(ht,Yl),e(ht,Ma),e(Ma,ec),e(ht,tc),f(o,Ci,g),f(o,mt,g),e(mt,Nt),e(Nt,Ca),T(tn,Ca,null),e(mt,oc),e(mt,ja),e(ja,nc),f(o,ji,g),T(on,o,g),f(o,Si,g),f(o,ft,g),e(ft,Dt),e(Dt,Sa),T(nn,Sa,null),e(ft,sc),e(ft,Oa),e(Oa,ac),f(o,Oi,g),f(o,we,g),T(sn,we,null),e(we,rc),e(we,gt),e(gt,ic),e(gt,Cs),e(Cs,dc),e(gt,lc),e(gt,an),e(an,cc),e(gt,pc),e(we,uc),e(we,_t),e(_t,hc),e(_t,js),e(js,mc),e(_t,fc),e(_t,Ss),e(Ss,gc),e(_t,_c),e(we,kc),T(Ut,we,null),f(o,Ai,g),f(o,kt,g),e(kt,Wt),e(Wt,Aa),T(rn,Aa,null),e(kt,vc),e(kt,Ia),e(Ia,bc),f(o,Ii,g),f(o,Bt,g),e(Bt,yc),e(Bt,La),e(La,Tc),e(Bt,wc),f(o,Li,g),f(o,B,g),T(dn,B,null),e(B,Pc),e(B,ln),e(ln,$c),e(ln,cn),e(cn,xc),e(ln,zc),e(B,Fc),e(B,pn),e(pn,qc),e(pn,Os),e(Os,Ec),e(pn,Mc),e(B,Cc),e(B,Fe),T(un,Fe,null),e(Fe,jc),e(Fe,hn),e(hn,Sc),e(hn,Ga),e(Ga,Oc),e(hn,Ac),e(Fe,Ic),e(Fe,mn),e(mn,As),e(As,Lc),e(As,Na),e(Na,Gc),e(mn,Nc),e(mn,fn),e(fn,Dc),e(fn,Da),e(Da,Uc),e(fn,Wc),e(Fe,Bc),e(Fe,Ua),e(Ua,Rc),e(B,Hc),e(B,Rt),T(gn,Rt,null),e(Rt,Kc),e(Rt,Wa),e(Wa,Vc),e(B,Qc),e(B,Ht),T(_n,Ht,null),e(Ht,Jc),e(Ht,Ba),e(Ba,Xc),e(B,Zc),e(B,Kt),T(kn,Kt,null),e(Kt,Yc),e(Kt,Ra),e(Ra,ep),f(o,Gi,g),f(o,vt,g),e(vt,Vt),e(Vt,Ha),T(vn,Ha,null),e(vt,tp),e(vt,Ka),e(Ka,op),f(o,Ni,g),f(o,ce,g),T(bn,ce,null),e(ce,np),e(ce,bt),e(bt,sp),e(bt,Va),e(Va,ap),e(bt,rp),e(bt,yn),e(yn,ip),e(bt,dp),e(ce,lp),e(ce,Tn),e(Tn,cp),e(Tn,Is),e(Is,pp),e(Tn,up),e(ce,hp),e(ce,Ye),T(wn,Ye,null),e(Ye,mp),e(Ye,Qa),e(Qa,fp),e(Ye,gp),e(Ye,Pn),e(Pn,Ls),e(Ls,_p),e(Ls,Ja),e(Ja,kp),e(Pn,vp),e(Pn,$n),e($n,bp),e($n,Xa),e(Xa,yp),e($n,Tp),e(ce,wp),e(ce,Qt),T(xn,Qt,null),e(Qt,Pp),e(Qt,Za),e(Za,$p),f(o,Di,g),f(o,yt,g),e(yt,Jt),e(Jt,Ya),T(zn,Ya,null),e(yt,xp),e(yt,er),e(er,zp),f(o,Ui,g),f(o,Pe,g),T(Fn,Pe,null),e(Pe,Fp),e(Pe,qn),e(qn,qp),e(qn,Gs),e(Gs,Ep),e(qn,Mp),e(Pe,Cp),e(Pe,En),e(En,jp),e(En,Mn),e(Mn,Sp),e(En,Op),e(Pe,Ap),e(Pe,qe),T(Cn,qe,null),e(qe,Ip),e(qe,Tt),e(Tt,Lp),e(Tt,Ns),e(Ns,Gp),e(Tt,Np),e(Tt,tr),e(tr,Dp),e(Tt,Up),e(qe,Wp),T(Xt,qe,null),e(qe,Bp),T(Zt,qe,null),f(o,Wi,g),f(o,wt,g),e(wt,Yt),e(Yt,or),T(jn,or,null),e(wt,Rp),e(wt,nr),e(nr,Hp),f(o,Bi,g),f(o,$e,g),T(Sn,$e,null),e($e,Kp),e($e,On),e(On,Vp),e(On,Ds),e(Ds,Qp),e(On,Jp),e($e,Xp),e($e,An),e(An,Zp),e(An,In),e(In,Yp),e(An,eu),e($e,tu),e($e,Ee),T(Ln,Ee,null),e(Ee,ou),e(Ee,Pt),e(Pt,nu),e(Pt,Us),e(Us,su),e(Pt,au),e(Pt,sr),e(sr,ru),e(Pt,iu),e(Ee,du),T(eo,Ee,null),e(Ee,lu),T(to,Ee,null),f(o,Ri,g),f(o,$t,g),e($t,oo),e(oo,ar),T(Gn,ar,null),e($t,cu),e($t,rr),e(rr,pu),f(o,Hi,g),f(o,xt,g),T(Nn,xt,null),e(xt,uu),e(xt,no),T(Dn,no,null),e(no,hu),T(so,no,null),f(o,Ki,g),f(o,zt,g),e(zt,ao),e(ao,ir),T(Un,ir,null),e(zt,mu),e(zt,dr),e(dr,fu),f(o,Vi,g),f(o,pe,g),T(Wn,pe,null),e(pe,gu),e(pe,Bn),e(Bn,_u),e(Bn,Ws),e(Ws,ku),e(Bn,vu),e(pe,bu),e(pe,Rn),e(Rn,yu),e(Rn,Hn),e(Hn,Tu),e(Rn,wu),e(pe,Pu),T(ro,pe,null),e(pe,$u),e(pe,Me),T(Kn,Me,null),e(Me,xu),e(Me,Ft),e(Ft,zu),e(Ft,Bs),e(Bs,Fu),e(Ft,qu),e(Ft,lr),e(lr,Eu),e(Ft,Mu),e(Me,Cu),T(io,Me,null),e(Me,ju),T(lo,Me,null),f(o,Qi,g),f(o,qt,g),e(qt,co),e(co,cr),T(Vn,cr,null),e(qt,Su),e(qt,pr),e(pr,Ou),f(o,Ji,g),f(o,ue,g),T(Qn,ue,null),e(ue,Au),e(ue,Jn),e(Jn,Iu),e(Jn,Rs),e(Rs,Lu),e(Jn,Gu),e(ue,Nu),e(ue,Xn),e(Xn,Du),e(Xn,Zn),e(Zn,Uu),e(Xn,Wu),e(ue,Bu),T(po,ue,null),e(ue,Ru),e(ue,Ce),T(Yn,Ce,null),e(Ce,Hu),e(Ce,Et),e(Et,Ku),e(Et,Hs),e(Hs,Vu),e(Et,Qu),e(Et,ur),e(ur,Ju),e(Et,Xu),e(Ce,Zu),T(uo,Ce,null),e(Ce,Yu),T(ho,Ce,null),f(o,Xi,g),f(o,Mt,g),e(Mt,mo),e(mo,hr),T(es,hr,null),e(Mt,eh),e(Mt,mr),e(mr,th),f(o,Zi,g),f(o,G,g),T(ts,G,null),e(G,oh),e(G,os),e(os,nh),e(os,Ks),e(Ks,sh),e(os,ah),e(G,rh),e(G,ns),e(ns,ih),e(ns,ss),e(ss,dh),e(ns,lh),e(G,ch),e(G,fr),e(fr,ph),e(G,uh),e(G,He),e(He,gr),e(gr,as),e(as,hh),e(He,mh),e(He,_r),e(_r,rs),e(rs,fh),e(He,gh),e(He,kr),e(kr,is),e(is,_h),e(He,kh),e(He,vr),e(vr,ds),e(ds,vh),e(G,bh),e(G,je),T(ls,je,null),e(je,yh),e(je,Ct),e(Ct,Th),e(Ct,br),e(br,wh),e(Ct,Ph),e(Ct,yr),e(yr,$h),e(Ct,xh),e(je,zh),T(fo,je,null),e(je,Fh),T(go,je,null),e(G,qh),e(G,_o),T(cs,_o,null),e(_o,Eh),T(ko,_o,null),e(G,Mh),e(G,vo),T(ps,vo,null),e(vo,Ch),T(bo,vo,null),f(o,Yi,g),f(o,jt,g),e(jt,yo),e(yo,Tr),T(us,Tr,null),e(jt,jh),e(jt,wr),e(wr,Sh),f(o,ed,g),f(o,N,g),T(hs,N,null),e(N,Oh),e(N,ms),e(ms,Ah),e(ms,Vs),e(Vs,Ih),e(ms,Lh),e(N,Gh),e(N,fs),e(fs,Nh),e(fs,gs),e(gs,Dh),e(fs,Uh),e(N,Wh),e(N,Pr),e(Pr,Bh),e(N,Rh),e(N,Ke),e(Ke,$r),e($r,_s),e(_s,Hh),e(Ke,Kh),e(Ke,xr),e(xr,ks),e(ks,Vh),e(Ke,Qh),e(Ke,zr),e(zr,vs),e(vs,Jh),e(Ke,Xh),e(Ke,Fr),e(Fr,bs),e(bs,Zh),e(N,Yh),e(N,M),T(ys,M,null),e(M,em),e(M,St),e(St,tm),e(St,qr),e(qr,om),e(St,nm),e(St,Er),e(Er,sm),e(St,am),e(M,rm),T(To,M,null),e(M,im),e(M,Mr),e(Mr,dm),e(M,lm),e(M,Cr),e(Cr,jr),e(jr,Sr),e(Sr,Or),e(Or,cm),e(M,pm),e(M,Ar),e(Ar,Ir),e(Ir,Lr),e(Lr,Gr),e(Gr,um),e(M,hm),e(M,Nr),e(Nr,Dr),e(Dr,Ur),e(Ur,Wr),e(Wr,mm),e(M,fm),e(M,Br),e(Br,Rr),e(Rr,Ts),e(Ts,wo),e(wo,Po),e(Po,Hr),T(ws,Hr,null),e(wo,gm),e(wo,Kr),e(Kr,_m),e(Ts,km),e(Ts,Vr),e(Vr,vm),e(M,bm),e(M,Qr),e(Qr,ym),e(M,Tm),e(M,Jr),e(Jr,Xr),e(Xr,Zr),e(Zr,Yr),e(Yr,wm),e(M,Pm),e(M,ei),e(ei,ti),e(ti,oi),e(oi,ni),e(ni,$m),e(M,xm),e(M,si),e(si,ai),e(ai,ri),e(ri,ii),e(ii,zm),e(M,Fm),e(M,di),e(di,li),e(li,ci),e(ci,pi),e(pi,qm),e(N,Em),e(N,$o),T(Ps,$o,null),e($o,Mm),T(xo,$o,null),e(N,Cm),e(N,zo),T($s,zo,null),e(zo,jm),T(Fo,zo,null),td=!0},p(o,[g]){const xs={};g&2&&(xs.$$scope={dirty:g,ctx:o}),Ut.$set(xs);const ui={};g&2&&(ui.$$scope={dirty:g,ctx:o}),Xt.$set(ui);const hi={};g&2&&(hi.$$scope={dirty:g,ctx:o}),Zt.$set(hi);const mi={};g&2&&(mi.$$scope={dirty:g,ctx:o}),eo.$set(mi);const qo={};g&2&&(qo.$$scope={dirty:g,ctx:o}),to.$set(qo);const fi={};g&2&&(fi.$$scope={dirty:g,ctx:o}),so.$set(fi);const gi={};g&2&&(gi.$$scope={dirty:g,ctx:o}),ro.$set(gi);const zs={};g&2&&(zs.$$scope={dirty:g,ctx:o}),io.$set(zs);const _i={};g&2&&(_i.$$scope={dirty:g,ctx:o}),lo.$set(_i);const ki={};g&2&&(ki.$$scope={dirty:g,ctx:o}),po.$set(ki);const vi={};g&2&&(vi.$$scope={dirty:g,ctx:o}),uo.$set(vi);const Fs={};g&2&&(Fs.$$scope={dirty:g,ctx:o}),ho.$set(Fs);const bi={};g&2&&(bi.$$scope={dirty:g,ctx:o}),fo.$set(bi);const yi={};g&2&&(yi.$$scope={dirty:g,ctx:o}),go.$set(yi);const qs={};g&2&&(qs.$$scope={dirty:g,ctx:o}),ko.$set(qs);const Ti={};g&2&&(Ti.$$scope={dirty:g,ctx:o}),bo.$set(Ti);const wi={};g&2&&(wi.$$scope={dirty:g,ctx:o}),To.$set(wi);const Ot={};g&2&&(Ot.$$scope={dirty:g,ctx:o}),xo.$set(Ot);const Pi={};g&2&&(Pi.$$scope={dirty:g,ctx:o}),Fo.$set(Pi)},i(o){td||(w(d.$$.fragment,o),w(K.$$.fragment,o),w(Te.$$.fragment,o),w(Vo.$$.fragment,o),w(Xo.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(sn.$$.fragment,o),w(Ut.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(kn.$$.fragment,o),w(vn.$$.fragment,o),w(bn.$$.fragment,o),w(wn.$$.fragment,o),w(xn.$$.fragment,o),w(zn.$$.fragment,o),w(Fn.$$.fragment,o),w(Cn.$$.fragment,o),w(Xt.$$.fragment,o),w(Zt.$$.fragment,o),w(jn.$$.fragment,o),w(Sn.$$.fragment,o),w(Ln.$$.fragment,o),w(eo.$$.fragment,o),w(to.$$.fragment,o),w(Gn.$$.fragment,o),w(Nn.$$.fragment,o),w(Dn.$$.fragment,o),w(so.$$.fragment,o),w(Un.$$.fragment,o),w(Wn.$$.fragment,o),w(ro.$$.fragment,o),w(Kn.$$.fragment,o),w(io.$$.fragment,o),w(lo.$$.fragment,o),w(Vn.$$.fragment,o),w(Qn.$$.fragment,o),w(po.$$.fragment,o),w(Yn.$$.fragment,o),w(uo.$$.fragment,o),w(ho.$$.fragment,o),w(es.$$.fragment,o),w(ts.$$.fragment,o),w(ls.$$.fragment,o),w(fo.$$.fragment,o),w(go.$$.fragment,o),w(cs.$$.fragment,o),w(ko.$$.fragment,o),w(ps.$$.fragment,o),w(bo.$$.fragment,o),w(us.$$.fragment,o),w(hs.$$.fragment,o),w(ys.$$.fragment,o),w(To.$$.fragment,o),w(ws.$$.fragment,o),w(Ps.$$.fragment,o),w(xo.$$.fragment,o),w($s.$$.fragment,o),w(Fo.$$.fragment,o),td=!0)},o(o){P(d.$$.fragment,o),P(K.$$.fragment,o),P(Te.$$.fragment,o),P(Vo.$$.fragment,o),P(Xo.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(nn.$$.fragment,o),P(sn.$$.fragment,o),P(Ut.$$.fragment,o),P(rn.$$.fragment,o),P(dn.$$.fragment,o),P(un.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(kn.$$.fragment,o),P(vn.$$.fragment,o),P(bn.$$.fragment,o),P(wn.$$.fragment,o),P(xn.$$.fragment,o),P(zn.$$.fragment,o),P(Fn.$$.fragment,o),P(Cn.$$.fragment,o),P(Xt.$$.fragment,o),P(Zt.$$.fragment,o),P(jn.$$.fragment,o),P(Sn.$$.fragment,o),P(Ln.$$.fragment,o),P(eo.$$.fragment,o),P(to.$$.fragment,o),P(Gn.$$.fragment,o),P(Nn.$$.fragment,o),P(Dn.$$.fragment,o),P(so.$$.fragment,o),P(Un.$$.fragment,o),P(Wn.$$.fragment,o),P(ro.$$.fragment,o),P(Kn.$$.fragment,o),P(io.$$.fragment,o),P(lo.$$.fragment,o),P(Vn.$$.fragment,o),P(Qn.$$.fragment,o),P(po.$$.fragment,o),P(Yn.$$.fragment,o),P(uo.$$.fragment,o),P(ho.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(ls.$$.fragment,o),P(fo.$$.fragment,o),P(go.$$.fragment,o),P(cs.$$.fragment,o),P(ko.$$.fragment,o),P(ps.$$.fragment,o),P(bo.$$.fragment,o),P(us.$$.fragment,o),P(hs.$$.fragment,o),P(ys.$$.fragment,o),P(To.$$.fragment,o),P(ws.$$.fragment,o),P(Ps.$$.fragment,o),P(xo.$$.fragment,o),P($s.$$.fragment,o),P(Fo.$$.fragment,o),td=!1},d(o){t(u),o&&t(v),o&&t(_),$(d),o&&t(he),o&&t(E),o&&t(xe),o&&t(D),$(K),o&&t(Y),o&&t(ee),o&&t(I),o&&t(me),o&&t(ze),o&&t(te),o&&t(oe),o&&t(R),o&&t(Je),o&&t(le),$(Te),o&&t(Xe),o&&t(H),o&&t(zi),o&&t(fe),o&&t(Fi),o&&t(ct),$(Vo),o&&t(qi),o&&t(Ze),o&&t(Ei),o&&t(pt),$(Xo),o&&t(Mi),o&&t(ge),o&&t(Ci),o&&t(mt),$(tn),o&&t(ji),$(on,o),o&&t(Si),o&&t(ft),$(nn),o&&t(Oi),o&&t(we),$(sn),$(Ut),o&&t(Ai),o&&t(kt),$(rn),o&&t(Ii),o&&t(Bt),o&&t(Li),o&&t(B),$(dn),$(un),$(gn),$(_n),$(kn),o&&t(Gi),o&&t(vt),$(vn),o&&t(Ni),o&&t(ce),$(bn),$(wn),$(xn),o&&t(Di),o&&t(yt),$(zn),o&&t(Ui),o&&t(Pe),$(Fn),$(Cn),$(Xt),$(Zt),o&&t(Wi),o&&t(wt),$(jn),o&&t(Bi),o&&t($e),$(Sn),$(Ln),$(eo),$(to),o&&t(Ri),o&&t($t),$(Gn),o&&t(Hi),o&&t(xt),$(Nn),$(Dn),$(so),o&&t(Ki),o&&t(zt),$(Un),o&&t(Vi),o&&t(pe),$(Wn),$(ro),$(Kn),$(io),$(lo),o&&t(Qi),o&&t(qt),$(Vn),o&&t(Ji),o&&t(ue),$(Qn),$(po),$(Yn),$(uo),$(ho),o&&t(Xi),o&&t(Mt),$(es),o&&t(Zi),o&&t(G),$(ts),$(ls),$(fo),$(go),$(cs),$(ko),$(ps),$(bo),o&&t(Yi),o&&t(jt),$(us),o&&t(ed),o&&t(N),$(hs),$(ys),$(To),$(ws),$(Ps),$(xo),$($s),$(Fo)}}}const gk={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function _k(z){return Q_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pk extends R_{constructor(u){super();H_(this,u,_k,fk,K_,{})}}export{Pk as default,gk as metadata};
