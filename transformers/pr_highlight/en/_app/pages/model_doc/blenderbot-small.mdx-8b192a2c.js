import{S as du,i as iu,s as cu,e as n,k as i,w as y,t as s,M as pu,c as a,d as t,m as c,a as r,x as v,h as l,b as h,F as e,g as _,y as T,q as w,o as $,B as S,v as hu,L as Xe}from"../../chunks/vendor-6b77c823.js";import{T as qn}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as Ye}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Je}from"../../chunks/ExampleCodeBlock-5212b321.js";function mu(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

# Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration
configuration = BlenderbotSmallConfig()

# Initializing a model from the facebook/blenderbot_small-90M style configuration
model = BlenderbotSmallModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallModel, BlenderbotSmallConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function uu(B){let p,k,f,m,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=r(f);m=l(F,"Module"),F.forEach(t),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function fu(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")  # Batch size 1
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function _u(B){let p,k,f,m,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=r(f);m=l(F,"Module"),F.forEach(t),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function gu(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

mname = "facebook/blenderbot_small-90M"
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)

inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)

NEXT_UTTERANCE = (
    "My friends are cool but they eat too many carbs.</s> <s>what kind of carbs do they eat? "
    "i don't know much about carbs</s> "
    "<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors="pt")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot:  what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;what kind of carbs do they eat? <span class="hljs-string">&quot;
...     &quot;</span>i don<span class="hljs-string">&#x27;t know much about carbs&lt;/s&gt; &quot;
...     &quot;&lt;s&gt; I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),{c(){p=n("p"),k=s("Conversation example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Conversation example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function bu(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = BlenderbotSmallForCausalLM.from_pretrained(
    "facebook/blenderbot_small-90M", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function ku(B){let p,k,f,m,b,d,u,F,Ce,me,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,ue,ae,ze,J,D,be,re,N,ke,se,Be,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=s("TF 2.0 models accepts two formats as inputs:"),f=i(),m=n("ul"),b=n("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),u=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),z=n("p"),je=s("This second option is useful when using "),W=n("code"),Oe=s("tf.keras.Model.fit"),Pe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=s("model(inputs)"),Ne=s("."),Q=i(),V=n("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),ue=s("a single Tensor with "),ae=n("code"),ze=s("input_ids"),J=s(" only and nothing else: "),D=n("code"),be=s("model(input_ids)"),re=i(),N=n("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),Be=s("model([input_ids, attention_mask])"),ee=s(" or "),le=n("code"),de=s("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=r(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),f=c(x),m=a(x,"UL",{});var ie=r(m);b=a(ie,"LI",{});var Ze=r(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),u=c(ie),F=a(ie,"LI",{});var Re=r(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),ie.forEach(t),me=c(x),z=a(x,"P",{});var O=r(z);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var et=r(W);Oe=l(et,"tf.keras.Model.fit"),et.forEach(t),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ye=r(R);Le=l(ye,"model(inputs)"),ye.forEach(t),Ne=l(O,"."),O.forEach(t),Q=c(x),V=a(x,"P",{});var tt=r(V);Ie=l(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),Z=c(x),j=a(x,"UL",{});var Y=r(j);L=a(Y,"LI",{});var G=r(L);ue=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var ot=r(ae);ze=l(ot,"input_ids"),ot.forEach(t),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var nt=r(D);be=l(nt,"model(input_ids)"),nt.forEach(t),G.forEach(t),re=c(Y),N=a(Y,"LI",{});var te=r(N);ke=l(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=a(te,"CODE",{});var ce=r(se);Be=l(ce,"model([input_ids, attention_mask])"),ce.forEach(t),ee=l(te," or "),le=a(te,"CODE",{});var fe=r(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),te.forEach(t),Ae=c(Y),X=a(Y,"LI",{});var ve=r(X);Fe=l(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ve,"CODE",{});var Te=r(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),ve.forEach(t),Y.forEach(t)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,m,q),e(m,b),e(b,d),e(m,u),e(m,F),e(F,Ce),_(x,me,q),_(x,z,q),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,ue),e(L,ae),e(ae,ze),e(L,J),e(L,D),e(D,be),e(j,re),e(j,N),e(N,ke),e(N,se),e(se,Be),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&t(p),x&&t(f),x&&t(m),x&&t(me),x&&t(z),x&&t(Q),x&&t(V),x&&t(Z),x&&t(j)}}}function yu(B){let p,k,f,m,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=r(f);m=l(F,"Module"),F.forEach(t),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function vu(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
import tensorflow as tf

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = TFBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function Tu(B){let p,k,f,m,b,d,u,F,Ce,me,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,ue,ae,ze,J,D,be,re,N,ke,se,Be,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=s("TF 2.0 models accepts two formats as inputs:"),f=i(),m=n("ul"),b=n("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),u=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),z=n("p"),je=s("This second option is useful when using "),W=n("code"),Oe=s("tf.keras.Model.fit"),Pe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=s("model(inputs)"),Ne=s("."),Q=i(),V=n("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),ue=s("a single Tensor with "),ae=n("code"),ze=s("input_ids"),J=s(" only and nothing else: "),D=n("code"),be=s("model(input_ids)"),re=i(),N=n("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),Be=s("model([input_ids, attention_mask])"),ee=s(" or "),le=n("code"),de=s("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=r(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),f=c(x),m=a(x,"UL",{});var ie=r(m);b=a(ie,"LI",{});var Ze=r(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),u=c(ie),F=a(ie,"LI",{});var Re=r(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),ie.forEach(t),me=c(x),z=a(x,"P",{});var O=r(z);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var et=r(W);Oe=l(et,"tf.keras.Model.fit"),et.forEach(t),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ye=r(R);Le=l(ye,"model(inputs)"),ye.forEach(t),Ne=l(O,"."),O.forEach(t),Q=c(x),V=a(x,"P",{});var tt=r(V);Ie=l(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),Z=c(x),j=a(x,"UL",{});var Y=r(j);L=a(Y,"LI",{});var G=r(L);ue=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var ot=r(ae);ze=l(ot,"input_ids"),ot.forEach(t),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var nt=r(D);be=l(nt,"model(input_ids)"),nt.forEach(t),G.forEach(t),re=c(Y),N=a(Y,"LI",{});var te=r(N);ke=l(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=a(te,"CODE",{});var ce=r(se);Be=l(ce,"model([input_ids, attention_mask])"),ce.forEach(t),ee=l(te," or "),le=a(te,"CODE",{});var fe=r(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),te.forEach(t),Ae=c(Y),X=a(Y,"LI",{});var ve=r(X);Fe=l(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ve,"CODE",{});var Te=r(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),ve.forEach(t),Y.forEach(t)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,m,q),e(m,b),e(b,d),e(m,u),e(m,F),e(F,Ce),_(x,me,q),_(x,z,q),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,ue),e(L,ae),e(ae,ze),e(L,J),e(L,D),e(D,be),e(j,re),e(j,N),e(N,ke),e(N,se),e(se,Be),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&t(p),x&&t(f),x&&t(m),x&&t(me),x&&t(z),x&&t(Q),x&&t(V),x&&t(Z),x&&t(j)}}}function wu(B){let p,k,f,m,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=r(f);m=l(F,"Module"),F.forEach(t),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function $u(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function Su(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function xu(B){let p,k,f,m,b;return m=new Ye({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function zu(B){let p,k,f,m,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=r(f);m=l(F,"Module"),F.forEach(t),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function Bu(B){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function Fu(B){let p,k,f,m,b;return m=new Ye({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var u=r(p);k=l(u,"Example:"),u.forEach(t),f=c(d),v(m.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(m,d,u),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function qu(B){let p,k,f,m,b,d,u,F,Ce,me,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,ue,ae,ze,J,D,be,re,N,ke,se,Be,ee,le,de,Ae,X,Fe,H,De,x,q,ie,Ze,Re,O,et,ye,tt,Y,G,ot,nt,te,ce,fe,ve,Te,hl,sa,ml,cs,we,mo,ul,at,fl,En,_l,gl,uo,bl,kl,yl,rt,vl,Mn,Tl,wl,Cn,$l,Sl,xl,Tt,ps,st,wt,la,fo,zl,da,Bl,hs,U,_o,Fl,ia,ql,El,go,Ml,jn,Cl,jl,Ol,He,bo,Pl,ca,Ll,Nl,pa,Il,Al,$t,ko,Dl,lt,Gl,ha,Ul,Wl,ma,Rl,Hl,Kl,Ke,yo,Ql,On,Vl,Pn,Jl,Xl,ua,Yl,Zl,Ln,vo,ms,dt,St,fa,To,ed,_a,td,us,Ge,wo,od,$o,nd,ga,ad,rd,sd,xt,So,ld,ba,dd,fs,it,zt,ka,xo,id,ya,cd,_s,$e,zo,pd,Bo,hd,Nn,md,ud,fd,Fo,_d,qo,gd,bd,kd,qe,Eo,yd,ct,vd,In,Td,wd,va,$d,Sd,xd,Bt,zd,Ft,gs,pt,qt,Ta,Mo,Bd,wa,Fd,bs,Se,Co,qd,jo,Ed,An,Md,Cd,jd,Oo,Od,Po,Pd,Ld,Nd,Ee,Lo,Id,ht,Ad,Dn,Dd,Gd,$a,Ud,Wd,Rd,Et,Hd,Mt,ks,mt,Ct,Sa,No,Kd,xa,Qd,ys,ut,Io,Vd,jt,Ao,Jd,Ot,vs,ft,Pt,za,Do,Xd,Ba,Yd,Ts,pe,Go,Zd,Uo,ei,Gn,ti,oi,ni,Wo,ai,Ro,ri,si,li,Lt,di,Me,Ho,ii,_t,ci,Un,pi,hi,Fa,mi,ui,fi,Nt,_i,It,ws,gt,At,qa,Ko,gi,Ea,bi,$s,he,Qo,ki,Vo,yi,Wn,vi,Ti,wi,Jo,$i,Xo,Si,xi,zi,Dt,Bi,P,Yo,Fi,bt,qi,Rn,Ei,Mi,Ma,Ci,ji,Oi,Gt,Pi,Ca,Li,Ni,ja,Oa,Pa,La,Ii,Ai,Na,Ia,Aa,Da,Di,Gi,Ga,Ua,Wa,Ra,Ui,Wi,Ha,Ka,Qa,Zo,Ri,Va,Hi,Ki,Qi,Ja,Xa,Ya,Za,Vi,Ss,kt,Ut,er,en,Ji,tr,Xi,xs,I,tn,Yi,on,Zi,Hn,ec,tc,oc,nn,nc,an,ac,rc,sc,or,lc,dc,Ue,nr,rn,ic,cc,ar,sn,pc,hc,rr,ln,mc,uc,sr,dn,fc,_c,Wt,cn,gc,Rt,bc,Ht,pn,kc,Kt,yc,Qt,hn,vc,Vt,zs,yt,Jt,lr,mn,Tc,dr,wc,Bs,A,un,$c,fn,Sc,Kn,xc,zc,Bc,_n,Fc,gn,qc,Ec,Mc,ir,Cc,jc,We,cr,bn,Oc,Pc,pr,kn,Lc,Nc,hr,yn,Ic,Ac,mr,vn,Dc,Gc,E,Tn,Uc,vt,Wc,ur,Rc,Hc,fr,Kc,Qc,Vc,Xt,Jc,_r,Xc,Yc,gr,br,kr,yr,Zc,ep,vr,Tr,wr,$r,tp,op,Sr,xr,zr,Br,np,ap,Fr,qr,wn,Yt,Zt,Er,$n,rp,Mr,sp,lp,Cr,dp,ip,jr,cp,pp,Or,Pr,Lr,Nr,hp,mp,Ir,Ar,Dr,Gr,up,fp,Ur,Wr,Rr,Hr,_p,gp,Kr,Qr,Vr,Jr,bp,kp,eo,Sn,yp,to,vp,oo,xn,Tp,no,Fs;return d=new xe({}),re=new xe({}),Te=new xe({}),mo=new C({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotSmallConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotSmallConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotSmallConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotSmallConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotSmallConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotSmallConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29"}}),Tt=new Je({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[mu]},$$scope:{ctx:B}}}),fo=new xe({}),_o=new C({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67"}}),bo=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2875",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ko=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils.py#L842",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),yo=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2855",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vo=new C({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),To=new xe({}),wo=new C({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50"}}),So=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xo=new xe({}),zo=new C({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1074"}}),Eo=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1101",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new qn({props:{$$slots:{default:[uu]},$$scope:{ctx:B}}}),Ft=new Je({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[fu]},$$scope:{ctx:B}}}),Mo=new xe({}),Co=new C({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1200"}}),Lo=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1244",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new qn({props:{$$slots:{default:[_u]},$$scope:{ctx:B}}}),Mt=new Je({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[gu]},$$scope:{ctx:B}}}),No=new xe({}),Io=new C({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1380"}}),Ao=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1411",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Je({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[bu]},$$scope:{ctx:B}}}),Do=new xe({}),Go=new C({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1113"}}),Lt=new qn({props:{$$slots:{default:[ku]},$$scope:{ctx:B}}}),Ho=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1125",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nt=new qn({props:{$$slots:{default:[yu]},$$scope:{ctx:B}}}),It=new Je({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[vu]},$$scope:{ctx:B}}}),Ko=new xe({}),Qo=new C({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1200"}}),Dt=new qn({props:{$$slots:{default:[Tu]},$$scope:{ctx:B}}}),Yo=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1233",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gt=new qn({props:{$$slots:{default:[wu]},$$scope:{ctx:B}}}),en=new xe({}),tn=new C({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1203"}}),cn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1139",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[$u]},$$scope:{ctx:B}}}),pn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L960",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[Su]},$$scope:{ctx:B}}}),hn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1023",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[xu]},$$scope:{ctx:B}}}),mn=new xe({}),un=new C({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1291"}}),Tn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1139",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new qn({props:{$$slots:{default:[zu]},$$scope:{ctx:B}}}),$n=new xe({}),Sn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L960",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[Bu]},$$scope:{ctx:B}}}),xn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1295",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[Fu]},$$scope:{ctx:B}}}),{c(){p=n("meta"),k=i(),f=n("h1"),m=n("a"),b=n("span"),y(d.$$.fragment),u=i(),F=n("span"),Ce=s("Blenderbot Small"),me=i(),z=n("p"),je=s("Note that "),W=n("a"),Oe=s("BlenderbotSmallModel"),Pe=s(` and
`),R=n("a"),Le=s("BlenderbotSmallForConditionalGeneration"),Ne=s(` are only used in combination with the checkpoint
`),Q=n("a"),V=s("facebook/blenderbot-90M"),Ie=s(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),j=s("BlenderbotModel"),L=s(` and
`),ue=n("a"),ae=s("BlenderbotForConditionalGeneration"),ze=i(),J=n("h2"),D=n("a"),be=n("span"),y(re.$$.fragment),N=i(),ke=n("span"),se=s("Overview"),Be=i(),ee=n("p"),le=s("The Blender chatbot model was proposed in "),de=n("a"),Ae=s("Recipes for building an open-domain chatbot"),X=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fe=i(),H=n("p"),De=s("The abstract of the paper is the following:"),x=i(),q=n("p"),ie=n("em"),Ze=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=i(),O=n("p"),et=s("This model was contributed by "),ye=n("a"),tt=s("patrickvonplaten"),Y=s(`. The authors\u2019 code can be
found `),G=n("a"),ot=s("here"),nt=s(" ."),te=i(),ce=n("h2"),fe=n("a"),ve=n("span"),y(Te.$$.fragment),hl=i(),sa=n("span"),ml=s("BlenderbotSmallConfig"),cs=i(),we=n("div"),y(mo.$$.fragment),ul=i(),at=n("p"),fl=s("This is the configuration class to store the configuration of a "),En=n("a"),_l=s("BlenderbotSmallModel"),gl=s(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),uo=n("a"),bl=s("facebook/blenderbot_small-90M"),kl=s(" architecture."),yl=i(),rt=n("p"),vl=s("Configuration objects inherit from "),Mn=n("a"),Tl=s("PretrainedConfig"),wl=s(` and can be used to control the model outputs. Read the
documentation from `),Cn=n("a"),$l=s("PretrainedConfig"),Sl=s(" for more information."),xl=i(),y(Tt.$$.fragment),ps=i(),st=n("h2"),wt=n("a"),la=n("span"),y(fo.$$.fragment),zl=i(),da=n("span"),Bl=s("BlenderbotSmallTokenizer"),hs=i(),U=n("div"),y(_o.$$.fragment),Fl=i(),ia=n("p"),ql=s("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),El=i(),go=n("p"),Ml=s("This tokenizer inherits from "),jn=n("a"),Cl=s("PreTrainedTokenizer"),jl=s(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ol=i(),He=n("div"),y(bo.$$.fragment),Pl=i(),ca=n("p"),Ll=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Nl=i(),pa=n("p"),Il=s("This implementation does not add special tokens and this method should be overridden in a subclass."),Al=i(),$t=n("div"),y(ko.$$.fragment),Dl=i(),lt=n("p"),Gl=s(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ha=n("code"),Ul=s("prepare_for_model"),Wl=s(" or "),ma=n("code"),Rl=s("encode_plus"),Hl=s(" methods."),Kl=i(),Ke=n("div"),y(yo.$$.fragment),Ql=i(),On=n("p"),Vl=s("Create the token type IDs corresponding to the sequences passed. "),Pn=n("a"),Jl=s(`What are token type
IDs?`),Xl=i(),ua=n("p"),Yl=s("Should be overridden in a subclass if the model has a special way of building those."),Zl=i(),Ln=n("div"),y(vo.$$.fragment),ms=i(),dt=n("h2"),St=n("a"),fa=n("span"),y(To.$$.fragment),ed=i(),_a=n("span"),td=s("BlenderbotSmallTokenizerFast"),us=i(),Ge=n("div"),y(wo.$$.fragment),od=i(),$o=n("p"),nd=s("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=n("em"),ad=s("tokenizers"),rd=s(" library)."),sd=i(),xt=n("div"),y(So.$$.fragment),ld=i(),ba=n("p"),dd=s(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),fs=i(),it=n("h2"),zt=n("a"),ka=n("span"),y(xo.$$.fragment),id=i(),ya=n("span"),cd=s("BlenderbotSmallModel"),_s=i(),$e=n("div"),y(zo.$$.fragment),pd=i(),Bo=n("p"),hd=s(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),md=s("PreTrainedModel"),ud=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=i(),Fo=n("p"),_d=s("This model is also a PyTorch "),qo=n("a"),gd=s("torch.nn.Module"),bd=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=i(),qe=n("div"),y(Eo.$$.fragment),yd=i(),ct=n("p"),vd=s("The "),In=n("a"),Td=s("BlenderbotSmallModel"),wd=s(" forward method, overrides the "),va=n("code"),$d=s("__call__"),Sd=s(" special method."),xd=i(),y(Bt.$$.fragment),zd=i(),y(Ft.$$.fragment),gs=i(),pt=n("h2"),qt=n("a"),Ta=n("span"),y(Mo.$$.fragment),Bd=i(),wa=n("span"),Fd=s("BlenderbotSmallForConditionalGeneration"),bs=i(),Se=n("div"),y(Co.$$.fragment),qd=i(),jo=n("p"),Ed=s(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Md=s("PreTrainedModel"),Cd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=i(),Oo=n("p"),Od=s("This model is also a PyTorch "),Po=n("a"),Pd=s("torch.nn.Module"),Ld=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=i(),Ee=n("div"),y(Lo.$$.fragment),Id=i(),ht=n("p"),Ad=s("The "),Dn=n("a"),Dd=s("BlenderbotSmallForConditionalGeneration"),Gd=s(" forward method, overrides the "),$a=n("code"),Ud=s("__call__"),Wd=s(" special method."),Rd=i(),y(Et.$$.fragment),Hd=i(),y(Mt.$$.fragment),ks=i(),mt=n("h2"),Ct=n("a"),Sa=n("span"),y(No.$$.fragment),Kd=i(),xa=n("span"),Qd=s("BlenderbotSmallForCausalLM"),ys=i(),ut=n("div"),y(Io.$$.fragment),Vd=i(),jt=n("div"),y(Ao.$$.fragment),Jd=i(),y(Ot.$$.fragment),vs=i(),ft=n("h2"),Pt=n("a"),za=n("span"),y(Do.$$.fragment),Xd=i(),Ba=n("span"),Yd=s("TFBlenderbotSmallModel"),Ts=i(),pe=n("div"),y(Go.$$.fragment),Zd=i(),Uo=n("p"),ei=s(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),ti=s("TFPreTrainedModel"),oi=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=i(),Wo=n("p"),ai=s("This model is also a "),Ro=n("a"),ri=s("tf.keras.Model"),si=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li=i(),y(Lt.$$.fragment),di=i(),Me=n("div"),y(Ho.$$.fragment),ii=i(),_t=n("p"),ci=s("The "),Un=n("a"),pi=s("TFBlenderbotSmallModel"),hi=s(" forward method, overrides the "),Fa=n("code"),mi=s("__call__"),ui=s(" special method."),fi=i(),y(Nt.$$.fragment),_i=i(),y(It.$$.fragment),ws=i(),gt=n("h2"),At=n("a"),qa=n("span"),y(Ko.$$.fragment),gi=i(),Ea=n("span"),bi=s("TFBlenderbotSmallForConditionalGeneration"),$s=i(),he=n("div"),y(Qo.$$.fragment),ki=i(),Vo=n("p"),yi=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=n("a"),vi=s("TFPreTrainedModel"),Ti=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi=i(),Jo=n("p"),$i=s("This model is also a "),Xo=n("a"),Si=s("tf.keras.Model"),xi=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zi=i(),y(Dt.$$.fragment),Bi=i(),P=n("div"),y(Yo.$$.fragment),Fi=i(),bt=n("p"),qi=s("The "),Rn=n("a"),Ei=s("TFBlenderbotSmallForConditionalGeneration"),Mi=s(" forward method, overrides the "),Ma=n("code"),Ci=s("__call__"),ji=s(" special method."),Oi=i(),y(Gt.$$.fragment),Pi=i(),Ca=n("p"),Li=s("Conversation example::"),Ni=i(),ja=n("blockquote"),Oa=n("blockquote"),Pa=n("blockquote"),La=n("p"),Ii=s(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ai=i(),Na=n("blockquote"),Ia=n("blockquote"),Aa=n("blockquote"),Da=n("p"),Di=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Gi=i(),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("blockquote"),Ra=n("p"),Ui=s(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Wi=i(),Ha=n("blockquote"),Ka=n("blockquote"),Qa=n("blockquote"),Zo=n("p"),Ri=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=n("s"),Hi=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),Ki=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Qi=i(),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("blockquote"),Za=n("p"),Vi=s(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ss=i(),kt=n("h2"),Ut=n("a"),er=n("span"),y(en.$$.fragment),Ji=i(),tr=n("span"),Xi=s("FlaxBlenderbotSmallModel"),xs=i(),I=n("div"),y(tn.$$.fragment),Yi=i(),on=n("p"),Zi=s(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=n("a"),ec=s("FlaxPreTrainedModel"),tc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc=i(),nn=n("p"),nc=s(`This model is also a Flax Linen
`),an=n("a"),ac=s("flax.nn.Module"),rc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sc=i(),or=n("p"),lc=s("Finally, this model supports inherent JAX features such as:"),dc=i(),Ue=n("ul"),nr=n("li"),rn=n("a"),ic=s("Just-In-Time (JIT) compilation"),cc=i(),ar=n("li"),sn=n("a"),pc=s("Automatic Differentiation"),hc=i(),rr=n("li"),ln=n("a"),mc=s("Vectorization"),uc=i(),sr=n("li"),dn=n("a"),fc=s("Parallelization"),_c=i(),Wt=n("div"),y(cn.$$.fragment),gc=i(),y(Rt.$$.fragment),bc=i(),Ht=n("div"),y(pn.$$.fragment),kc=i(),y(Kt.$$.fragment),yc=i(),Qt=n("div"),y(hn.$$.fragment),vc=i(),y(Vt.$$.fragment),zs=i(),yt=n("h2"),Jt=n("a"),lr=n("span"),y(mn.$$.fragment),Tc=i(),dr=n("span"),wc=s("FlaxBlenderbotForConditionalGeneration"),Bs=i(),A=n("div"),y(un.$$.fragment),$c=i(),fn=n("p"),Sc=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=n("a"),xc=s("FlaxPreTrainedModel"),zc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bc=i(),_n=n("p"),Fc=s(`This model is also a Flax Linen
`),gn=n("a"),qc=s("flax.nn.Module"),Ec=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mc=i(),ir=n("p"),Cc=s("Finally, this model supports inherent JAX features such as:"),jc=i(),We=n("ul"),cr=n("li"),bn=n("a"),Oc=s("Just-In-Time (JIT) compilation"),Pc=i(),pr=n("li"),kn=n("a"),Lc=s("Automatic Differentiation"),Nc=i(),hr=n("li"),yn=n("a"),Ic=s("Vectorization"),Ac=i(),mr=n("li"),vn=n("a"),Dc=s("Parallelization"),Gc=i(),E=n("div"),y(Tn.$$.fragment),Uc=i(),vt=n("p"),Wc=s("The "),ur=n("code"),Rc=s("FlaxBlenderbotSmallPreTrainedModel"),Hc=s(" forward method, overrides the "),fr=n("code"),Kc=s("__call__"),Qc=s(" special method."),Vc=i(),y(Xt.$$.fragment),Jc=i(),_r=n("p"),Xc=s("Summarization example:"),Yc=i(),gr=n("blockquote"),br=n("blockquote"),kr=n("blockquote"),yr=n("p"),Zc=s("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),ep=i(),vr=n("blockquote"),Tr=n("blockquote"),wr=n("blockquote"),$r=n("p"),tp=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),op=i(),Sr=n("blockquote"),xr=n("blockquote"),zr=n("blockquote"),Br=n("p"),np=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ap=i(),Fr=n("blockquote"),qr=n("blockquote"),wn=n("blockquote"),Yt=n("h1"),Zt=n("a"),Er=n("span"),y($n.$$.fragment),rp=i(),Mr=n("span"),sp=s("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),lp=i(),Cr=n("p"),dp=s("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),ip=i(),jr=n("p"),cp=s("Mask filling example:"),pp=i(),Or=n("blockquote"),Pr=n("blockquote"),Lr=n("blockquote"),Nr=n("p"),hp=s(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),mp=i(),Ir=n("blockquote"),Ar=n("blockquote"),Dr=n("blockquote"),Gr=n("p"),up=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),fp=i(),Ur=n("blockquote"),Wr=n("blockquote"),Rr=n("blockquote"),Hr=n("p"),_p=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),gp=i(),Kr=n("blockquote"),Qr=n("blockquote"),Vr=n("blockquote"),Jr=n("p"),bp=s("tokenizer.decode(predictions).split()"),kp=i(),eo=n("div"),y(Sn.$$.fragment),yp=i(),y(to.$$.fragment),vp=i(),oo=n("div"),y(xn.$$.fragment),Tp=i(),y(no.$$.fragment),this.h()},l(o){const g=pu('[data-svelte="svelte-1phssyn"]',document.head);p=a(g,"META",{name:!0,content:!0}),g.forEach(t),k=c(o),f=a(o,"H1",{class:!0});var zn=r(f);m=a(zn,"A",{id:!0,class:!0,href:!0});var Xr=r(m);b=a(Xr,"SPAN",{});var Yr=r(b);v(d.$$.fragment,Yr),Yr.forEach(t),Xr.forEach(t),u=c(zn),F=a(zn,"SPAN",{});var Zr=r(F);Ce=l(Zr,"Blenderbot Small"),Zr.forEach(t),zn.forEach(t),me=c(o),z=a(o,"P",{});var _e=r(z);je=l(_e,"Note that "),W=a(_e,"A",{href:!0});var es=r(W);Oe=l(es,"BlenderbotSmallModel"),es.forEach(t),Pe=l(_e,` and
`),R=a(_e,"A",{href:!0});var ts=r(R);Le=l(ts,"BlenderbotSmallForConditionalGeneration"),ts.forEach(t),Ne=l(_e,` are only used in combination with the checkpoint
`),Q=a(_e,"A",{href:!0,rel:!0});var os=r(Q);V=l(os,"facebook/blenderbot-90M"),os.forEach(t),Ie=l(_e,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(_e,"A",{href:!0});var ns=r(Z);j=l(ns,"BlenderbotModel"),ns.forEach(t),L=l(_e,` and
`),ue=a(_e,"A",{href:!0});var as=r(ue);ae=l(as,"BlenderbotForConditionalGeneration"),as.forEach(t),_e.forEach(t),ze=c(o),J=a(o,"H2",{class:!0});var Bn=r(J);D=a(Bn,"A",{id:!0,class:!0,href:!0});var rs=r(D);be=a(rs,"SPAN",{});var ss=r(be);v(re.$$.fragment,ss),ss.forEach(t),rs.forEach(t),N=c(Bn),ke=a(Bn,"SPAN",{});var ls=r(ke);se=l(ls,"Overview"),ls.forEach(t),Bn.forEach(t),Be=c(o),ee=a(o,"P",{});var Fn=r(ee);le=l(Fn,"The Blender chatbot model was proposed in "),de=a(Fn,"A",{href:!0,rel:!0});var ds=r(de);Ae=l(ds,"Recipes for building an open-domain chatbot"),ds.forEach(t),X=l(Fn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fn.forEach(t),Fe=c(o),H=a(o,"P",{});var is=r(H);De=l(is,"The abstract of the paper is the following:"),is.forEach(t),x=c(o),q=a(o,"P",{});var $p=r(q);ie=a($p,"EM",{});var Sp=r(ie);Ze=l(Sp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Sp.forEach(t),$p.forEach(t),Re=c(o),O=a(o,"P",{});var Qn=r(O);et=l(Qn,"This model was contributed by "),ye=a(Qn,"A",{href:!0,rel:!0});var xp=r(ye);tt=l(xp,"patrickvonplaten"),xp.forEach(t),Y=l(Qn,`. The authors\u2019 code can be
found `),G=a(Qn,"A",{href:!0,rel:!0});var zp=r(G);ot=l(zp,"here"),zp.forEach(t),nt=l(Qn," ."),Qn.forEach(t),te=c(o),ce=a(o,"H2",{class:!0});var qs=r(ce);fe=a(qs,"A",{id:!0,class:!0,href:!0});var Bp=r(fe);ve=a(Bp,"SPAN",{});var Fp=r(ve);v(Te.$$.fragment,Fp),Fp.forEach(t),Bp.forEach(t),hl=c(qs),sa=a(qs,"SPAN",{});var qp=r(sa);ml=l(qp,"BlenderbotSmallConfig"),qp.forEach(t),qs.forEach(t),cs=c(o),we=a(o,"DIV",{class:!0});var ao=r(we);v(mo.$$.fragment,ao),ul=c(ao),at=a(ao,"P",{});var Vn=r(at);fl=l(Vn,"This is the configuration class to store the configuration of a "),En=a(Vn,"A",{href:!0});var Ep=r(En);_l=l(Ep,"BlenderbotSmallModel"),Ep.forEach(t),gl=l(Vn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),uo=a(Vn,"A",{href:!0,rel:!0});var Mp=r(uo);bl=l(Mp,"facebook/blenderbot_small-90M"),Mp.forEach(t),kl=l(Vn," architecture."),Vn.forEach(t),yl=c(ao),rt=a(ao,"P",{});var Jn=r(rt);vl=l(Jn,"Configuration objects inherit from "),Mn=a(Jn,"A",{href:!0});var Cp=r(Mn);Tl=l(Cp,"PretrainedConfig"),Cp.forEach(t),wl=l(Jn,` and can be used to control the model outputs. Read the
documentation from `),Cn=a(Jn,"A",{href:!0});var jp=r(Cn);$l=l(jp,"PretrainedConfig"),jp.forEach(t),Sl=l(Jn," for more information."),Jn.forEach(t),xl=c(ao),v(Tt.$$.fragment,ao),ao.forEach(t),ps=c(o),st=a(o,"H2",{class:!0});var Es=r(st);wt=a(Es,"A",{id:!0,class:!0,href:!0});var Op=r(wt);la=a(Op,"SPAN",{});var Pp=r(la);v(fo.$$.fragment,Pp),Pp.forEach(t),Op.forEach(t),zl=c(Es),da=a(Es,"SPAN",{});var Lp=r(da);Bl=l(Lp,"BlenderbotSmallTokenizer"),Lp.forEach(t),Es.forEach(t),hs=c(o),U=a(o,"DIV",{class:!0});var ge=r(U);v(_o.$$.fragment,ge),Fl=c(ge),ia=a(ge,"P",{});var Np=r(ia);ql=l(Np,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Np.forEach(t),El=c(ge),go=a(ge,"P",{});var Ms=r(go);Ml=l(Ms,"This tokenizer inherits from "),jn=a(Ms,"A",{href:!0});var Ip=r(jn);Cl=l(Ip,"PreTrainedTokenizer"),Ip.forEach(t),jl=l(Ms,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ms.forEach(t),Ol=c(ge),He=a(ge,"DIV",{class:!0});var Xn=r(He);v(bo.$$.fragment,Xn),Pl=c(Xn),ca=a(Xn,"P",{});var Ap=r(ca);Ll=l(Ap,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ap.forEach(t),Nl=c(Xn),pa=a(Xn,"P",{});var Dp=r(pa);Il=l(Dp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Dp.forEach(t),Xn.forEach(t),Al=c(ge),$t=a(ge,"DIV",{class:!0});var Cs=r($t);v(ko.$$.fragment,Cs),Dl=c(Cs),lt=a(Cs,"P",{});var Yn=r(lt);Gl=l(Yn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ha=a(Yn,"CODE",{});var Gp=r(ha);Ul=l(Gp,"prepare_for_model"),Gp.forEach(t),Wl=l(Yn," or "),ma=a(Yn,"CODE",{});var Up=r(ma);Rl=l(Up,"encode_plus"),Up.forEach(t),Hl=l(Yn," methods."),Yn.forEach(t),Cs.forEach(t),Kl=c(ge),Ke=a(ge,"DIV",{class:!0});var Zn=r(Ke);v(yo.$$.fragment,Zn),Ql=c(Zn),On=a(Zn,"P",{});var wp=r(On);Vl=l(wp,"Create the token type IDs corresponding to the sequences passed. "),Pn=a(wp,"A",{href:!0});var Wp=r(Pn);Jl=l(Wp,`What are token type
IDs?`),Wp.forEach(t),wp.forEach(t),Xl=c(Zn),ua=a(Zn,"P",{});var Rp=r(ua);Yl=l(Rp,"Should be overridden in a subclass if the model has a special way of building those."),Rp.forEach(t),Zn.forEach(t),Zl=c(ge),Ln=a(ge,"DIV",{class:!0});var Hp=r(Ln);v(vo.$$.fragment,Hp),Hp.forEach(t),ge.forEach(t),ms=c(o),dt=a(o,"H2",{class:!0});var js=r(dt);St=a(js,"A",{id:!0,class:!0,href:!0});var Kp=r(St);fa=a(Kp,"SPAN",{});var Qp=r(fa);v(To.$$.fragment,Qp),Qp.forEach(t),Kp.forEach(t),ed=c(js),_a=a(js,"SPAN",{});var Vp=r(_a);td=l(Vp,"BlenderbotSmallTokenizerFast"),Vp.forEach(t),js.forEach(t),us=c(o),Ge=a(o,"DIV",{class:!0});var ea=r(Ge);v(wo.$$.fragment,ea),od=c(ea),$o=a(ea,"P",{});var Os=r($o);nd=l(Os,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=a(Os,"EM",{});var Jp=r(ga);ad=l(Jp,"tokenizers"),Jp.forEach(t),rd=l(Os," library)."),Os.forEach(t),sd=c(ea),xt=a(ea,"DIV",{class:!0});var Ps=r(xt);v(So.$$.fragment,Ps),ld=c(Ps),ba=a(Ps,"P",{});var Xp=r(ba);dd=l(Xp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Xp.forEach(t),Ps.forEach(t),ea.forEach(t),fs=c(o),it=a(o,"H2",{class:!0});var Ls=r(it);zt=a(Ls,"A",{id:!0,class:!0,href:!0});var Yp=r(zt);ka=a(Yp,"SPAN",{});var Zp=r(ka);v(xo.$$.fragment,Zp),Zp.forEach(t),Yp.forEach(t),id=c(Ls),ya=a(Ls,"SPAN",{});var eh=r(ya);cd=l(eh,"BlenderbotSmallModel"),eh.forEach(t),Ls.forEach(t),_s=c(o),$e=a(o,"DIV",{class:!0});var ro=r($e);v(zo.$$.fragment,ro),pd=c(ro),Bo=a(ro,"P",{});var Ns=r(Bo);hd=l(Ns,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Ns,"A",{href:!0});var th=r(Nn);md=l(th,"PreTrainedModel"),th.forEach(t),ud=l(Ns,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ns.forEach(t),fd=c(ro),Fo=a(ro,"P",{});var Is=r(Fo);_d=l(Is,"This model is also a PyTorch "),qo=a(Is,"A",{href:!0,rel:!0});var oh=r(qo);gd=l(oh,"torch.nn.Module"),oh.forEach(t),bd=l(Is,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Is.forEach(t),kd=c(ro),qe=a(ro,"DIV",{class:!0});var so=r(qe);v(Eo.$$.fragment,so),yd=c(so),ct=a(so,"P",{});var ta=r(ct);vd=l(ta,"The "),In=a(ta,"A",{href:!0});var nh=r(In);Td=l(nh,"BlenderbotSmallModel"),nh.forEach(t),wd=l(ta," forward method, overrides the "),va=a(ta,"CODE",{});var ah=r(va);$d=l(ah,"__call__"),ah.forEach(t),Sd=l(ta," special method."),ta.forEach(t),xd=c(so),v(Bt.$$.fragment,so),zd=c(so),v(Ft.$$.fragment,so),so.forEach(t),ro.forEach(t),gs=c(o),pt=a(o,"H2",{class:!0});var As=r(pt);qt=a(As,"A",{id:!0,class:!0,href:!0});var rh=r(qt);Ta=a(rh,"SPAN",{});var sh=r(Ta);v(Mo.$$.fragment,sh),sh.forEach(t),rh.forEach(t),Bd=c(As),wa=a(As,"SPAN",{});var lh=r(wa);Fd=l(lh,"BlenderbotSmallForConditionalGeneration"),lh.forEach(t),As.forEach(t),bs=c(o),Se=a(o,"DIV",{class:!0});var lo=r(Se);v(Co.$$.fragment,lo),qd=c(lo),jo=a(lo,"P",{});var Ds=r(jo);Ed=l(Ds,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(Ds,"A",{href:!0});var dh=r(An);Md=l(dh,"PreTrainedModel"),dh.forEach(t),Cd=l(Ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ds.forEach(t),jd=c(lo),Oo=a(lo,"P",{});var Gs=r(Oo);Od=l(Gs,"This model is also a PyTorch "),Po=a(Gs,"A",{href:!0,rel:!0});var ih=r(Po);Pd=l(ih,"torch.nn.Module"),ih.forEach(t),Ld=l(Gs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gs.forEach(t),Nd=c(lo),Ee=a(lo,"DIV",{class:!0});var io=r(Ee);v(Lo.$$.fragment,io),Id=c(io),ht=a(io,"P",{});var oa=r(ht);Ad=l(oa,"The "),Dn=a(oa,"A",{href:!0});var ch=r(Dn);Dd=l(ch,"BlenderbotSmallForConditionalGeneration"),ch.forEach(t),Gd=l(oa," forward method, overrides the "),$a=a(oa,"CODE",{});var ph=r($a);Ud=l(ph,"__call__"),ph.forEach(t),Wd=l(oa," special method."),oa.forEach(t),Rd=c(io),v(Et.$$.fragment,io),Hd=c(io),v(Mt.$$.fragment,io),io.forEach(t),lo.forEach(t),ks=c(o),mt=a(o,"H2",{class:!0});var Us=r(mt);Ct=a(Us,"A",{id:!0,class:!0,href:!0});var hh=r(Ct);Sa=a(hh,"SPAN",{});var mh=r(Sa);v(No.$$.fragment,mh),mh.forEach(t),hh.forEach(t),Kd=c(Us),xa=a(Us,"SPAN",{});var uh=r(xa);Qd=l(uh,"BlenderbotSmallForCausalLM"),uh.forEach(t),Us.forEach(t),ys=c(o),ut=a(o,"DIV",{class:!0});var Ws=r(ut);v(Io.$$.fragment,Ws),Vd=c(Ws),jt=a(Ws,"DIV",{class:!0});var Rs=r(jt);v(Ao.$$.fragment,Rs),Jd=c(Rs),v(Ot.$$.fragment,Rs),Rs.forEach(t),Ws.forEach(t),vs=c(o),ft=a(o,"H2",{class:!0});var Hs=r(ft);Pt=a(Hs,"A",{id:!0,class:!0,href:!0});var fh=r(Pt);za=a(fh,"SPAN",{});var _h=r(za);v(Do.$$.fragment,_h),_h.forEach(t),fh.forEach(t),Xd=c(Hs),Ba=a(Hs,"SPAN",{});var gh=r(Ba);Yd=l(gh,"TFBlenderbotSmallModel"),gh.forEach(t),Hs.forEach(t),Ts=c(o),pe=a(o,"DIV",{class:!0});var Qe=r(pe);v(Go.$$.fragment,Qe),Zd=c(Qe),Uo=a(Qe,"P",{});var Ks=r(Uo);ei=l(Ks,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(Ks,"A",{href:!0});var bh=r(Gn);ti=l(bh,"TFPreTrainedModel"),bh.forEach(t),oi=l(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(t),ni=c(Qe),Wo=a(Qe,"P",{});var Qs=r(Wo);ai=l(Qs,"This model is also a "),Ro=a(Qs,"A",{href:!0,rel:!0});var kh=r(Ro);ri=l(kh,"tf.keras.Model"),kh.forEach(t),si=l(Qs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qs.forEach(t),li=c(Qe),v(Lt.$$.fragment,Qe),di=c(Qe),Me=a(Qe,"DIV",{class:!0});var co=r(Me);v(Ho.$$.fragment,co),ii=c(co),_t=a(co,"P",{});var na=r(_t);ci=l(na,"The "),Un=a(na,"A",{href:!0});var yh=r(Un);pi=l(yh,"TFBlenderbotSmallModel"),yh.forEach(t),hi=l(na," forward method, overrides the "),Fa=a(na,"CODE",{});var vh=r(Fa);mi=l(vh,"__call__"),vh.forEach(t),ui=l(na," special method."),na.forEach(t),fi=c(co),v(Nt.$$.fragment,co),_i=c(co),v(It.$$.fragment,co),co.forEach(t),Qe.forEach(t),ws=c(o),gt=a(o,"H2",{class:!0});var Vs=r(gt);At=a(Vs,"A",{id:!0,class:!0,href:!0});var Th=r(At);qa=a(Th,"SPAN",{});var wh=r(qa);v(Ko.$$.fragment,wh),wh.forEach(t),Th.forEach(t),gi=c(Vs),Ea=a(Vs,"SPAN",{});var $h=r(Ea);bi=l($h,"TFBlenderbotSmallForConditionalGeneration"),$h.forEach(t),Vs.forEach(t),$s=c(o),he=a(o,"DIV",{class:!0});var Ve=r(he);v(Qo.$$.fragment,Ve),ki=c(Ve),Vo=a(Ve,"P",{});var Js=r(Vo);yi=l(Js,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=a(Js,"A",{href:!0});var Sh=r(Wn);vi=l(Sh,"TFPreTrainedModel"),Sh.forEach(t),Ti=l(Js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Js.forEach(t),wi=c(Ve),Jo=a(Ve,"P",{});var Xs=r(Jo);$i=l(Xs,"This model is also a "),Xo=a(Xs,"A",{href:!0,rel:!0});var xh=r(Xo);Si=l(xh,"tf.keras.Model"),xh.forEach(t),xi=l(Xs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xs.forEach(t),zi=c(Ve),v(Dt.$$.fragment,Ve),Bi=c(Ve),P=a(Ve,"DIV",{class:!0});var K=r(P);v(Yo.$$.fragment,K),Fi=c(K),bt=a(K,"P",{});var aa=r(bt);qi=l(aa,"The "),Rn=a(aa,"A",{href:!0});var zh=r(Rn);Ei=l(zh,"TFBlenderbotSmallForConditionalGeneration"),zh.forEach(t),Mi=l(aa," forward method, overrides the "),Ma=a(aa,"CODE",{});var Bh=r(Ma);Ci=l(Bh,"__call__"),Bh.forEach(t),ji=l(aa," special method."),aa.forEach(t),Oi=c(K),v(Gt.$$.fragment,K),Pi=c(K),Ca=a(K,"P",{});var Fh=r(Ca);Li=l(Fh,"Conversation example::"),Fh.forEach(t),Ni=c(K),ja=a(K,"BLOCKQUOTE",{});var qh=r(ja);Oa=a(qh,"BLOCKQUOTE",{});var Eh=r(Oa);Pa=a(Eh,"BLOCKQUOTE",{});var Mh=r(Pa);La=a(Mh,"P",{});var Ch=r(La);Ii=l(Ch,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ch.forEach(t),Mh.forEach(t),Eh.forEach(t),qh.forEach(t),Ai=c(K),Na=a(K,"BLOCKQUOTE",{});var jh=r(Na);Ia=a(jh,"BLOCKQUOTE",{});var Oh=r(Ia);Aa=a(Oh,"BLOCKQUOTE",{});var Ph=r(Aa);Da=a(Ph,"P",{});var Lh=r(Da);Di=l(Lh,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Lh.forEach(t),Ph.forEach(t),Oh.forEach(t),jh.forEach(t),Gi=c(K),Ga=a(K,"BLOCKQUOTE",{});var Nh=r(Ga);Ua=a(Nh,"BLOCKQUOTE",{});var Ih=r(Ua);Wa=a(Ih,"BLOCKQUOTE",{});var Ah=r(Wa);Ra=a(Ah,"P",{});var Dh=r(Ra);Ui=l(Dh,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Dh.forEach(t),Ah.forEach(t),Ih.forEach(t),Nh.forEach(t),Wi=c(K),Ha=a(K,"BLOCKQUOTE",{});var Gh=r(Ha);Ka=a(Gh,"BLOCKQUOTE",{});var Uh=r(Ka);Qa=a(Uh,"BLOCKQUOTE",{});var Wh=r(Qa);Zo=a(Wh,"P",{});var Ys=r(Zo);Ri=l(Ys,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=a(Ys,"S",{});var Rh=r(Va);Hi=l(Rh,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Rh.forEach(t),Ki=l(Ys,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Ys.forEach(t),Wh.forEach(t),Uh.forEach(t),Gh.forEach(t),Qi=c(K),Ja=a(K,"BLOCKQUOTE",{});var Hh=r(Ja);Xa=a(Hh,"BLOCKQUOTE",{});var Kh=r(Xa);Ya=a(Kh,"BLOCKQUOTE",{});var Qh=r(Ya);Za=a(Qh,"P",{});var Vh=r(Za);Vi=l(Vh,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Vh.forEach(t),Qh.forEach(t),Kh.forEach(t),Hh.forEach(t),K.forEach(t),Ve.forEach(t),Ss=c(o),kt=a(o,"H2",{class:!0});var Zs=r(kt);Ut=a(Zs,"A",{id:!0,class:!0,href:!0});var Jh=r(Ut);er=a(Jh,"SPAN",{});var Xh=r(er);v(en.$$.fragment,Xh),Xh.forEach(t),Jh.forEach(t),Ji=c(Zs),tr=a(Zs,"SPAN",{});var Yh=r(tr);Xi=l(Yh,"FlaxBlenderbotSmallModel"),Yh.forEach(t),Zs.forEach(t),xs=c(o),I=a(o,"DIV",{class:!0});var oe=r(I);v(tn.$$.fragment,oe),Yi=c(oe),on=a(oe,"P",{});var el=r(on);Zi=l(el,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=a(el,"A",{href:!0});var Zh=r(Hn);ec=l(Zh,"FlaxPreTrainedModel"),Zh.forEach(t),tc=l(el,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),el.forEach(t),oc=c(oe),nn=a(oe,"P",{});var tl=r(nn);nc=l(tl,`This model is also a Flax Linen
`),an=a(tl,"A",{href:!0,rel:!0});var em=r(an);ac=l(em,"flax.nn.Module"),em.forEach(t),rc=l(tl,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),tl.forEach(t),sc=c(oe),or=a(oe,"P",{});var tm=r(or);lc=l(tm,"Finally, this model supports inherent JAX features such as:"),tm.forEach(t),dc=c(oe),Ue=a(oe,"UL",{});var po=r(Ue);nr=a(po,"LI",{});var om=r(nr);rn=a(om,"A",{href:!0,rel:!0});var nm=r(rn);ic=l(nm,"Just-In-Time (JIT) compilation"),nm.forEach(t),om.forEach(t),cc=c(po),ar=a(po,"LI",{});var am=r(ar);sn=a(am,"A",{href:!0,rel:!0});var rm=r(sn);pc=l(rm,"Automatic Differentiation"),rm.forEach(t),am.forEach(t),hc=c(po),rr=a(po,"LI",{});var sm=r(rr);ln=a(sm,"A",{href:!0,rel:!0});var lm=r(ln);mc=l(lm,"Vectorization"),lm.forEach(t),sm.forEach(t),uc=c(po),sr=a(po,"LI",{});var dm=r(sr);dn=a(dm,"A",{href:!0,rel:!0});var im=r(dn);fc=l(im,"Parallelization"),im.forEach(t),dm.forEach(t),po.forEach(t),_c=c(oe),Wt=a(oe,"DIV",{class:!0});var ol=r(Wt);v(cn.$$.fragment,ol),gc=c(ol),v(Rt.$$.fragment,ol),ol.forEach(t),bc=c(oe),Ht=a(oe,"DIV",{class:!0});var nl=r(Ht);v(pn.$$.fragment,nl),kc=c(nl),v(Kt.$$.fragment,nl),nl.forEach(t),yc=c(oe),Qt=a(oe,"DIV",{class:!0});var al=r(Qt);v(hn.$$.fragment,al),vc=c(al),v(Vt.$$.fragment,al),al.forEach(t),oe.forEach(t),zs=c(o),yt=a(o,"H2",{class:!0});var rl=r(yt);Jt=a(rl,"A",{id:!0,class:!0,href:!0});var cm=r(Jt);lr=a(cm,"SPAN",{});var pm=r(lr);v(mn.$$.fragment,pm),pm.forEach(t),cm.forEach(t),Tc=c(rl),dr=a(rl,"SPAN",{});var hm=r(dr);wc=l(hm,"FlaxBlenderbotForConditionalGeneration"),hm.forEach(t),rl.forEach(t),Bs=c(o),A=a(o,"DIV",{class:!0});var ne=r(A);v(un.$$.fragment,ne),$c=c(ne),fn=a(ne,"P",{});var sl=r(fn);Sc=l(sl,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=a(sl,"A",{href:!0});var mm=r(Kn);xc=l(mm,"FlaxPreTrainedModel"),mm.forEach(t),zc=l(sl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl.forEach(t),Bc=c(ne),_n=a(ne,"P",{});var ll=r(_n);Fc=l(ll,`This model is also a Flax Linen
`),gn=a(ll,"A",{href:!0,rel:!0});var um=r(gn);qc=l(um,"flax.nn.Module"),um.forEach(t),Ec=l(ll,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ll.forEach(t),Mc=c(ne),ir=a(ne,"P",{});var fm=r(ir);Cc=l(fm,"Finally, this model supports inherent JAX features such as:"),fm.forEach(t),jc=c(ne),We=a(ne,"UL",{});var ho=r(We);cr=a(ho,"LI",{});var _m=r(cr);bn=a(_m,"A",{href:!0,rel:!0});var gm=r(bn);Oc=l(gm,"Just-In-Time (JIT) compilation"),gm.forEach(t),_m.forEach(t),Pc=c(ho),pr=a(ho,"LI",{});var bm=r(pr);kn=a(bm,"A",{href:!0,rel:!0});var km=r(kn);Lc=l(km,"Automatic Differentiation"),km.forEach(t),bm.forEach(t),Nc=c(ho),hr=a(ho,"LI",{});var ym=r(hr);yn=a(ym,"A",{href:!0,rel:!0});var vm=r(yn);Ic=l(vm,"Vectorization"),vm.forEach(t),ym.forEach(t),Ac=c(ho),mr=a(ho,"LI",{});var Tm=r(mr);vn=a(Tm,"A",{href:!0,rel:!0});var wm=r(vn);Dc=l(wm,"Parallelization"),wm.forEach(t),Tm.forEach(t),ho.forEach(t),Gc=c(ne),E=a(ne,"DIV",{class:!0});var M=r(E);v(Tn.$$.fragment,M),Uc=c(M),vt=a(M,"P",{});var ra=r(vt);Wc=l(ra,"The "),ur=a(ra,"CODE",{});var $m=r(ur);Rc=l($m,"FlaxBlenderbotSmallPreTrainedModel"),$m.forEach(t),Hc=l(ra," forward method, overrides the "),fr=a(ra,"CODE",{});var Sm=r(fr);Kc=l(Sm,"__call__"),Sm.forEach(t),Qc=l(ra," special method."),ra.forEach(t),Vc=c(M),v(Xt.$$.fragment,M),Jc=c(M),_r=a(M,"P",{});var xm=r(_r);Xc=l(xm,"Summarization example:"),xm.forEach(t),Yc=c(M),gr=a(M,"BLOCKQUOTE",{});var zm=r(gr);br=a(zm,"BLOCKQUOTE",{});var Bm=r(br);kr=a(Bm,"BLOCKQUOTE",{});var Fm=r(kr);yr=a(Fm,"P",{});var qm=r(yr);Zc=l(qm,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),qm.forEach(t),Fm.forEach(t),Bm.forEach(t),zm.forEach(t),ep=c(M),vr=a(M,"BLOCKQUOTE",{});var Em=r(vr);Tr=a(Em,"BLOCKQUOTE",{});var Mm=r(Tr);wr=a(Mm,"BLOCKQUOTE",{});var Cm=r(wr);$r=a(Cm,"P",{});var jm=r($r);tp=l(jm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),jm.forEach(t),Cm.forEach(t),Mm.forEach(t),Em.forEach(t),op=c(M),Sr=a(M,"BLOCKQUOTE",{});var Om=r(Sr);xr=a(Om,"BLOCKQUOTE",{});var Pm=r(xr);zr=a(Pm,"BLOCKQUOTE",{});var Lm=r(zr);Br=a(Lm,"P",{});var Nm=r(Br);np=l(Nm,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nm.forEach(t),Lm.forEach(t),Pm.forEach(t),Om.forEach(t),ap=c(M),Fr=a(M,"BLOCKQUOTE",{});var Im=r(Fr);qr=a(Im,"BLOCKQUOTE",{});var Am=r(qr);wn=a(Am,"BLOCKQUOTE",{});var dl=r(wn);Yt=a(dl,"H1",{class:!0});var il=r(Yt);Zt=a(il,"A",{id:!0,class:!0,href:!0});var Dm=r(Zt);Er=a(Dm,"SPAN",{});var Gm=r(Er);v($n.$$.fragment,Gm),Gm.forEach(t),Dm.forEach(t),rp=c(il),Mr=a(il,"SPAN",{});var Um=r(Mr);sp=l(Um,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Um.forEach(t),il.forEach(t),lp=c(dl),Cr=a(dl,"P",{});var Wm=r(Cr);dp=l(Wm,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wm.forEach(t),dl.forEach(t),Am.forEach(t),Im.forEach(t),ip=c(M),jr=a(M,"P",{});var Rm=r(jr);cp=l(Rm,"Mask filling example:"),Rm.forEach(t),pp=c(M),Or=a(M,"BLOCKQUOTE",{});var Hm=r(Or);Pr=a(Hm,"BLOCKQUOTE",{});var Km=r(Pr);Lr=a(Km,"BLOCKQUOTE",{});var Qm=r(Lr);Nr=a(Qm,"P",{});var Vm=r(Nr);hp=l(Vm,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Vm.forEach(t),Qm.forEach(t),Km.forEach(t),Hm.forEach(t),mp=c(M),Ir=a(M,"BLOCKQUOTE",{});var Jm=r(Ir);Ar=a(Jm,"BLOCKQUOTE",{});var Xm=r(Ar);Dr=a(Xm,"BLOCKQUOTE",{});var Ym=r(Dr);Gr=a(Ym,"P",{});var Zm=r(Gr);up=l(Zm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zm.forEach(t),Ym.forEach(t),Xm.forEach(t),Jm.forEach(t),fp=c(M),Ur=a(M,"BLOCKQUOTE",{});var eu=r(Ur);Wr=a(eu,"BLOCKQUOTE",{});var tu=r(Wr);Rr=a(tu,"BLOCKQUOTE",{});var ou=r(Rr);Hr=a(ou,"P",{});var nu=r(Hr);_p=l(nu,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),nu.forEach(t),ou.forEach(t),tu.forEach(t),eu.forEach(t),gp=c(M),Kr=a(M,"BLOCKQUOTE",{});var au=r(Kr);Qr=a(au,"BLOCKQUOTE",{});var ru=r(Qr);Vr=a(ru,"BLOCKQUOTE",{});var su=r(Vr);Jr=a(su,"P",{});var lu=r(Jr);bp=l(lu,"tokenizer.decode(predictions).split()"),lu.forEach(t),su.forEach(t),ru.forEach(t),au.forEach(t),M.forEach(t),kp=c(ne),eo=a(ne,"DIV",{class:!0});var cl=r(eo);v(Sn.$$.fragment,cl),yp=c(cl),v(to.$$.fragment,cl),cl.forEach(t),vp=c(ne),oo=a(ne,"DIV",{class:!0});var pl=r(oo);v(xn.$$.fragment,pl),Tp=c(pl),v(no.$$.fragment,pl),pl.forEach(t),ne.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(Eu)),h(m,"id","blenderbot-small"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#blenderbot-small"),h(f,"class","relative group"),h(W,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),h(R,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),h(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),h(Q,"rel","nofollow"),h(Z,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(ue,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),h(D,"id","overview"),h(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(D,"href","#overview"),h(J,"class","relative group"),h(de,"href","https://arxiv.org/pdf/2004.13637.pdf"),h(de,"rel","nofollow"),h(ye,"href","https://huggingface.co/patrickvonplaten"),h(ye,"rel","nofollow"),h(G,"href","https://github.com/facebookresearch/ParlAI"),h(G,"rel","nofollow"),h(fe,"id","transformers.BlenderbotSmallConfig"),h(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fe,"href","#transformers.BlenderbotSmallConfig"),h(ce,"class","relative group"),h(En,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),h(uo,"href","https://huggingface.co/facebook/blenderbot_small-90M"),h(uo,"rel","nofollow"),h(Mn,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),h(Cn,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wt,"id","transformers.BlenderbotSmallTokenizer"),h(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wt,"href","#transformers.BlenderbotSmallTokenizer"),h(st,"class","relative group"),h(jn,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pn,"href","../glossary#token-type-ids"),h(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(St,"id","transformers.BlenderbotSmallTokenizerFast"),h(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(St,"href","#transformers.BlenderbotSmallTokenizerFast"),h(dt,"class","relative group"),h(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zt,"id","transformers.BlenderbotSmallModel"),h(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zt,"href","#transformers.BlenderbotSmallModel"),h(it,"class","relative group"),h(Nn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(qo,"rel","nofollow"),h(In,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),h(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qt,"id","transformers.BlenderbotSmallForConditionalGeneration"),h(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qt,"href","#transformers.BlenderbotSmallForConditionalGeneration"),h(pt,"class","relative group"),h(An,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Po,"rel","nofollow"),h(Dn,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),h(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"id","transformers.BlenderbotSmallForCausalLM"),h(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ct,"href","#transformers.BlenderbotSmallForCausalLM"),h(mt,"class","relative group"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pt,"id","transformers.TFBlenderbotSmallModel"),h(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pt,"href","#transformers.TFBlenderbotSmallModel"),h(ft,"class","relative group"),h(Gn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ro,"rel","nofollow"),h(Un,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),h(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(At,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),h(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(At,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),h(gt,"class","relative group"),h(Wn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Xo,"rel","nofollow"),h(Rn,"href","/docs/transformers/pr_highlight/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ut,"id","transformers.FlaxBlenderbotSmallModel"),h(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ut,"href","#transformers.FlaxBlenderbotSmallModel"),h(kt,"class","relative group"),h(Hn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(an,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(an,"rel","nofollow"),h(rn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(rn,"rel","nofollow"),h(sn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(sn,"rel","nofollow"),h(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(ln,"rel","nofollow"),h(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(dn,"rel","nofollow"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jt,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),h(yt,"class","relative group"),h(Kn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(gn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(gn,"rel","nofollow"),h(bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(bn,"rel","nofollow"),h(kn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(kn,"rel","nofollow"),h(yn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(yn,"rel","nofollow"),h(vn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(vn,"rel","nofollow"),h(Zt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),h(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),h(Yt,"class","relative group"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,p),_(o,k,g),_(o,f,g),e(f,m),e(m,b),T(d,b,null),e(f,u),e(f,F),e(F,Ce),_(o,me,g),_(o,z,g),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),e(z,Q),e(Q,V),e(z,Ie),e(z,Z),e(Z,j),e(z,L),e(z,ue),e(ue,ae),_(o,ze,g),_(o,J,g),e(J,D),e(D,be),T(re,be,null),e(J,N),e(J,ke),e(ke,se),_(o,Be,g),_(o,ee,g),e(ee,le),e(ee,de),e(de,Ae),e(ee,X),_(o,Fe,g),_(o,H,g),e(H,De),_(o,x,g),_(o,q,g),e(q,ie),e(ie,Ze),_(o,Re,g),_(o,O,g),e(O,et),e(O,ye),e(ye,tt),e(O,Y),e(O,G),e(G,ot),e(O,nt),_(o,te,g),_(o,ce,g),e(ce,fe),e(fe,ve),T(Te,ve,null),e(ce,hl),e(ce,sa),e(sa,ml),_(o,cs,g),_(o,we,g),T(mo,we,null),e(we,ul),e(we,at),e(at,fl),e(at,En),e(En,_l),e(at,gl),e(at,uo),e(uo,bl),e(at,kl),e(we,yl),e(we,rt),e(rt,vl),e(rt,Mn),e(Mn,Tl),e(rt,wl),e(rt,Cn),e(Cn,$l),e(rt,Sl),e(we,xl),T(Tt,we,null),_(o,ps,g),_(o,st,g),e(st,wt),e(wt,la),T(fo,la,null),e(st,zl),e(st,da),e(da,Bl),_(o,hs,g),_(o,U,g),T(_o,U,null),e(U,Fl),e(U,ia),e(ia,ql),e(U,El),e(U,go),e(go,Ml),e(go,jn),e(jn,Cl),e(go,jl),e(U,Ol),e(U,He),T(bo,He,null),e(He,Pl),e(He,ca),e(ca,Ll),e(He,Nl),e(He,pa),e(pa,Il),e(U,Al),e(U,$t),T(ko,$t,null),e($t,Dl),e($t,lt),e(lt,Gl),e(lt,ha),e(ha,Ul),e(lt,Wl),e(lt,ma),e(ma,Rl),e(lt,Hl),e(U,Kl),e(U,Ke),T(yo,Ke,null),e(Ke,Ql),e(Ke,On),e(On,Vl),e(On,Pn),e(Pn,Jl),e(Ke,Xl),e(Ke,ua),e(ua,Yl),e(U,Zl),e(U,Ln),T(vo,Ln,null),_(o,ms,g),_(o,dt,g),e(dt,St),e(St,fa),T(To,fa,null),e(dt,ed),e(dt,_a),e(_a,td),_(o,us,g),_(o,Ge,g),T(wo,Ge,null),e(Ge,od),e(Ge,$o),e($o,nd),e($o,ga),e(ga,ad),e($o,rd),e(Ge,sd),e(Ge,xt),T(So,xt,null),e(xt,ld),e(xt,ba),e(ba,dd),_(o,fs,g),_(o,it,g),e(it,zt),e(zt,ka),T(xo,ka,null),e(it,id),e(it,ya),e(ya,cd),_(o,_s,g),_(o,$e,g),T(zo,$e,null),e($e,pd),e($e,Bo),e(Bo,hd),e(Bo,Nn),e(Nn,md),e(Bo,ud),e($e,fd),e($e,Fo),e(Fo,_d),e(Fo,qo),e(qo,gd),e(Fo,bd),e($e,kd),e($e,qe),T(Eo,qe,null),e(qe,yd),e(qe,ct),e(ct,vd),e(ct,In),e(In,Td),e(ct,wd),e(ct,va),e(va,$d),e(ct,Sd),e(qe,xd),T(Bt,qe,null),e(qe,zd),T(Ft,qe,null),_(o,gs,g),_(o,pt,g),e(pt,qt),e(qt,Ta),T(Mo,Ta,null),e(pt,Bd),e(pt,wa),e(wa,Fd),_(o,bs,g),_(o,Se,g),T(Co,Se,null),e(Se,qd),e(Se,jo),e(jo,Ed),e(jo,An),e(An,Md),e(jo,Cd),e(Se,jd),e(Se,Oo),e(Oo,Od),e(Oo,Po),e(Po,Pd),e(Oo,Ld),e(Se,Nd),e(Se,Ee),T(Lo,Ee,null),e(Ee,Id),e(Ee,ht),e(ht,Ad),e(ht,Dn),e(Dn,Dd),e(ht,Gd),e(ht,$a),e($a,Ud),e(ht,Wd),e(Ee,Rd),T(Et,Ee,null),e(Ee,Hd),T(Mt,Ee,null),_(o,ks,g),_(o,mt,g),e(mt,Ct),e(Ct,Sa),T(No,Sa,null),e(mt,Kd),e(mt,xa),e(xa,Qd),_(o,ys,g),_(o,ut,g),T(Io,ut,null),e(ut,Vd),e(ut,jt),T(Ao,jt,null),e(jt,Jd),T(Ot,jt,null),_(o,vs,g),_(o,ft,g),e(ft,Pt),e(Pt,za),T(Do,za,null),e(ft,Xd),e(ft,Ba),e(Ba,Yd),_(o,Ts,g),_(o,pe,g),T(Go,pe,null),e(pe,Zd),e(pe,Uo),e(Uo,ei),e(Uo,Gn),e(Gn,ti),e(Uo,oi),e(pe,ni),e(pe,Wo),e(Wo,ai),e(Wo,Ro),e(Ro,ri),e(Wo,si),e(pe,li),T(Lt,pe,null),e(pe,di),e(pe,Me),T(Ho,Me,null),e(Me,ii),e(Me,_t),e(_t,ci),e(_t,Un),e(Un,pi),e(_t,hi),e(_t,Fa),e(Fa,mi),e(_t,ui),e(Me,fi),T(Nt,Me,null),e(Me,_i),T(It,Me,null),_(o,ws,g),_(o,gt,g),e(gt,At),e(At,qa),T(Ko,qa,null),e(gt,gi),e(gt,Ea),e(Ea,bi),_(o,$s,g),_(o,he,g),T(Qo,he,null),e(he,ki),e(he,Vo),e(Vo,yi),e(Vo,Wn),e(Wn,vi),e(Vo,Ti),e(he,wi),e(he,Jo),e(Jo,$i),e(Jo,Xo),e(Xo,Si),e(Jo,xi),e(he,zi),T(Dt,he,null),e(he,Bi),e(he,P),T(Yo,P,null),e(P,Fi),e(P,bt),e(bt,qi),e(bt,Rn),e(Rn,Ei),e(bt,Mi),e(bt,Ma),e(Ma,Ci),e(bt,ji),e(P,Oi),T(Gt,P,null),e(P,Pi),e(P,Ca),e(Ca,Li),e(P,Ni),e(P,ja),e(ja,Oa),e(Oa,Pa),e(Pa,La),e(La,Ii),e(P,Ai),e(P,Na),e(Na,Ia),e(Ia,Aa),e(Aa,Da),e(Da,Di),e(P,Gi),e(P,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Ra),e(Ra,Ui),e(P,Wi),e(P,Ha),e(Ha,Ka),e(Ka,Qa),e(Qa,Zo),e(Zo,Ri),e(Zo,Va),e(Va,Hi),e(Zo,Ki),e(P,Qi),e(P,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Za),e(Za,Vi),_(o,Ss,g),_(o,kt,g),e(kt,Ut),e(Ut,er),T(en,er,null),e(kt,Ji),e(kt,tr),e(tr,Xi),_(o,xs,g),_(o,I,g),T(tn,I,null),e(I,Yi),e(I,on),e(on,Zi),e(on,Hn),e(Hn,ec),e(on,tc),e(I,oc),e(I,nn),e(nn,nc),e(nn,an),e(an,ac),e(nn,rc),e(I,sc),e(I,or),e(or,lc),e(I,dc),e(I,Ue),e(Ue,nr),e(nr,rn),e(rn,ic),e(Ue,cc),e(Ue,ar),e(ar,sn),e(sn,pc),e(Ue,hc),e(Ue,rr),e(rr,ln),e(ln,mc),e(Ue,uc),e(Ue,sr),e(sr,dn),e(dn,fc),e(I,_c),e(I,Wt),T(cn,Wt,null),e(Wt,gc),T(Rt,Wt,null),e(I,bc),e(I,Ht),T(pn,Ht,null),e(Ht,kc),T(Kt,Ht,null),e(I,yc),e(I,Qt),T(hn,Qt,null),e(Qt,vc),T(Vt,Qt,null),_(o,zs,g),_(o,yt,g),e(yt,Jt),e(Jt,lr),T(mn,lr,null),e(yt,Tc),e(yt,dr),e(dr,wc),_(o,Bs,g),_(o,A,g),T(un,A,null),e(A,$c),e(A,fn),e(fn,Sc),e(fn,Kn),e(Kn,xc),e(fn,zc),e(A,Bc),e(A,_n),e(_n,Fc),e(_n,gn),e(gn,qc),e(_n,Ec),e(A,Mc),e(A,ir),e(ir,Cc),e(A,jc),e(A,We),e(We,cr),e(cr,bn),e(bn,Oc),e(We,Pc),e(We,pr),e(pr,kn),e(kn,Lc),e(We,Nc),e(We,hr),e(hr,yn),e(yn,Ic),e(We,Ac),e(We,mr),e(mr,vn),e(vn,Dc),e(A,Gc),e(A,E),T(Tn,E,null),e(E,Uc),e(E,vt),e(vt,Wc),e(vt,ur),e(ur,Rc),e(vt,Hc),e(vt,fr),e(fr,Kc),e(vt,Qc),e(E,Vc),T(Xt,E,null),e(E,Jc),e(E,_r),e(_r,Xc),e(E,Yc),e(E,gr),e(gr,br),e(br,kr),e(kr,yr),e(yr,Zc),e(E,ep),e(E,vr),e(vr,Tr),e(Tr,wr),e(wr,$r),e($r,tp),e(E,op),e(E,Sr),e(Sr,xr),e(xr,zr),e(zr,Br),e(Br,np),e(E,ap),e(E,Fr),e(Fr,qr),e(qr,wn),e(wn,Yt),e(Yt,Zt),e(Zt,Er),T($n,Er,null),e(Yt,rp),e(Yt,Mr),e(Mr,sp),e(wn,lp),e(wn,Cr),e(Cr,dp),e(E,ip),e(E,jr),e(jr,cp),e(E,pp),e(E,Or),e(Or,Pr),e(Pr,Lr),e(Lr,Nr),e(Nr,hp),e(E,mp),e(E,Ir),e(Ir,Ar),e(Ar,Dr),e(Dr,Gr),e(Gr,up),e(E,fp),e(E,Ur),e(Ur,Wr),e(Wr,Rr),e(Rr,Hr),e(Hr,_p),e(E,gp),e(E,Kr),e(Kr,Qr),e(Qr,Vr),e(Vr,Jr),e(Jr,bp),e(A,kp),e(A,eo),T(Sn,eo,null),e(eo,yp),T(to,eo,null),e(A,vp),e(A,oo),T(xn,oo,null),e(oo,Tp),T(no,oo,null),Fs=!0},p(o,[g]){const zn={};g&2&&(zn.$$scope={dirty:g,ctx:o}),Tt.$set(zn);const Xr={};g&2&&(Xr.$$scope={dirty:g,ctx:o}),Bt.$set(Xr);const Yr={};g&2&&(Yr.$$scope={dirty:g,ctx:o}),Ft.$set(Yr);const Zr={};g&2&&(Zr.$$scope={dirty:g,ctx:o}),Et.$set(Zr);const _e={};g&2&&(_e.$$scope={dirty:g,ctx:o}),Mt.$set(_e);const es={};g&2&&(es.$$scope={dirty:g,ctx:o}),Ot.$set(es);const ts={};g&2&&(ts.$$scope={dirty:g,ctx:o}),Lt.$set(ts);const os={};g&2&&(os.$$scope={dirty:g,ctx:o}),Nt.$set(os);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:o}),It.$set(ns);const as={};g&2&&(as.$$scope={dirty:g,ctx:o}),Dt.$set(as);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:o}),Gt.$set(Bn);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:o}),Rt.$set(rs);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:o}),Kt.$set(ss);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:o}),Vt.$set(ls);const Fn={};g&2&&(Fn.$$scope={dirty:g,ctx:o}),Xt.$set(Fn);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:o}),to.$set(ds);const is={};g&2&&(is.$$scope={dirty:g,ctx:o}),no.$set(is)},i(o){Fs||(w(d.$$.fragment,o),w(re.$$.fragment,o),w(Te.$$.fragment,o),w(mo.$$.fragment,o),w(Tt.$$.fragment,o),w(fo.$$.fragment,o),w(_o.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(yo.$$.fragment,o),w(vo.$$.fragment,o),w(To.$$.fragment,o),w(wo.$$.fragment,o),w(So.$$.fragment,o),w(xo.$$.fragment,o),w(zo.$$.fragment,o),w(Eo.$$.fragment,o),w(Bt.$$.fragment,o),w(Ft.$$.fragment,o),w(Mo.$$.fragment,o),w(Co.$$.fragment,o),w(Lo.$$.fragment,o),w(Et.$$.fragment,o),w(Mt.$$.fragment,o),w(No.$$.fragment,o),w(Io.$$.fragment,o),w(Ao.$$.fragment,o),w(Ot.$$.fragment,o),w(Do.$$.fragment,o),w(Go.$$.fragment,o),w(Lt.$$.fragment,o),w(Ho.$$.fragment,o),w(Nt.$$.fragment,o),w(It.$$.fragment,o),w(Ko.$$.fragment,o),w(Qo.$$.fragment,o),w(Dt.$$.fragment,o),w(Yo.$$.fragment,o),w(Gt.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(cn.$$.fragment,o),w(Rt.$$.fragment,o),w(pn.$$.fragment,o),w(Kt.$$.fragment,o),w(hn.$$.fragment,o),w(Vt.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(Tn.$$.fragment,o),w(Xt.$$.fragment,o),w($n.$$.fragment,o),w(Sn.$$.fragment,o),w(to.$$.fragment,o),w(xn.$$.fragment,o),w(no.$$.fragment,o),Fs=!0)},o(o){$(d.$$.fragment,o),$(re.$$.fragment,o),$(Te.$$.fragment,o),$(mo.$$.fragment,o),$(Tt.$$.fragment,o),$(fo.$$.fragment,o),$(_o.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(yo.$$.fragment,o),$(vo.$$.fragment,o),$(To.$$.fragment,o),$(wo.$$.fragment,o),$(So.$$.fragment,o),$(xo.$$.fragment,o),$(zo.$$.fragment,o),$(Eo.$$.fragment,o),$(Bt.$$.fragment,o),$(Ft.$$.fragment,o),$(Mo.$$.fragment,o),$(Co.$$.fragment,o),$(Lo.$$.fragment,o),$(Et.$$.fragment,o),$(Mt.$$.fragment,o),$(No.$$.fragment,o),$(Io.$$.fragment,o),$(Ao.$$.fragment,o),$(Ot.$$.fragment,o),$(Do.$$.fragment,o),$(Go.$$.fragment,o),$(Lt.$$.fragment,o),$(Ho.$$.fragment,o),$(Nt.$$.fragment,o),$(It.$$.fragment,o),$(Ko.$$.fragment,o),$(Qo.$$.fragment,o),$(Dt.$$.fragment,o),$(Yo.$$.fragment,o),$(Gt.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(cn.$$.fragment,o),$(Rt.$$.fragment,o),$(pn.$$.fragment,o),$(Kt.$$.fragment,o),$(hn.$$.fragment,o),$(Vt.$$.fragment,o),$(mn.$$.fragment,o),$(un.$$.fragment,o),$(Tn.$$.fragment,o),$(Xt.$$.fragment,o),$($n.$$.fragment,o),$(Sn.$$.fragment,o),$(to.$$.fragment,o),$(xn.$$.fragment,o),$(no.$$.fragment,o),Fs=!1},d(o){t(p),o&&t(k),o&&t(f),S(d),o&&t(me),o&&t(z),o&&t(ze),o&&t(J),S(re),o&&t(Be),o&&t(ee),o&&t(Fe),o&&t(H),o&&t(x),o&&t(q),o&&t(Re),o&&t(O),o&&t(te),o&&t(ce),S(Te),o&&t(cs),o&&t(we),S(mo),S(Tt),o&&t(ps),o&&t(st),S(fo),o&&t(hs),o&&t(U),S(_o),S(bo),S(ko),S(yo),S(vo),o&&t(ms),o&&t(dt),S(To),o&&t(us),o&&t(Ge),S(wo),S(So),o&&t(fs),o&&t(it),S(xo),o&&t(_s),o&&t($e),S(zo),S(Eo),S(Bt),S(Ft),o&&t(gs),o&&t(pt),S(Mo),o&&t(bs),o&&t(Se),S(Co),S(Lo),S(Et),S(Mt),o&&t(ks),o&&t(mt),S(No),o&&t(ys),o&&t(ut),S(Io),S(Ao),S(Ot),o&&t(vs),o&&t(ft),S(Do),o&&t(Ts),o&&t(pe),S(Go),S(Lt),S(Ho),S(Nt),S(It),o&&t(ws),o&&t(gt),S(Ko),o&&t($s),o&&t(he),S(Qo),S(Dt),S(Yo),S(Gt),o&&t(Ss),o&&t(kt),S(en),o&&t(xs),o&&t(I),S(tn),S(cn),S(Rt),S(pn),S(Kt),S(hn),S(Vt),o&&t(zs),o&&t(yt),S(mn),o&&t(Bs),o&&t(A),S(un),S(Tn),S(Xt),S($n),S(Sn),S(to),S(xn),S(no)}}}const Eu={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Mu(B){return hu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Iu extends du{constructor(p){super();iu(this,p,Mu,qu,cu,{})}}export{Iu as default,Eu as metadata};
