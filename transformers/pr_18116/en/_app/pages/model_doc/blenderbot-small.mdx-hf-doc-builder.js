import{S as dh,i as ih,s as ch,e as n,k as i,w as y,t as s,M as ph,c as a,d as o,m as c,a as r,x as v,h as l,b as m,G as e,g as _,y as T,q as w,o as S,B as $,v as mh,L as Xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as qn}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Je}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function uh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function hh(B){let p,k,f,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=r(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function fh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function _h(B){let p,k,f,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=r(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function gh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

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
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),{c(){p=n("p"),k=s("Conversation example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Conversation example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function bh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function kh(B){let p,k,f,u,b,d,h,F,Ce,ue,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,ze,J,D,be,re,N,ke,se,Be,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=s("TF 2.0 models accepts two formats as inputs:"),f=i(),u=n("ul"),b=n("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),h=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),z=n("p"),je=s("This second option is useful when using "),W=n("code"),Oe=s("tf.keras.Model.fit"),Pe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=s("model(inputs)"),Ne=s("."),Q=i(),V=n("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),he=s("a single Tensor with "),ae=n("code"),ze=s("input_ids"),J=s(" only and nothing else: "),D=n("code"),be=s("model(input_ids)"),re=i(),N=n("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),Be=s("model([input_ids, attention_mask])"),ee=s(" or "),le=n("code"),de=s("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=r(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),f=c(x),u=a(x,"UL",{});var ie=r(u);b=a(ie,"LI",{});var Ze=r(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(o),h=c(ie),F=a(ie,"LI",{});var Re=r(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=c(x),z=a(x,"P",{});var O=r(z);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var eo=r(W);Oe=l(eo,"tf.keras.Model.fit"),eo.forEach(o),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ye=r(R);Le=l(ye,"model(inputs)"),ye.forEach(o),Ne=l(O,"."),O.forEach(o),Q=c(x),V=a(x,"P",{});var oo=r(V);Ie=l(oo,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oo.forEach(o),Z=c(x),j=a(x,"UL",{});var Y=r(j);L=a(Y,"LI",{});var G=r(L);he=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var to=r(ae);ze=l(to,"input_ids"),to.forEach(o),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var no=r(D);be=l(no,"model(input_ids)"),no.forEach(o),G.forEach(o),re=c(Y),N=a(Y,"LI",{});var oe=r(N);ke=l(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=a(oe,"CODE",{});var ce=r(se);Be=l(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=l(oe," or "),le=a(oe,"CODE",{});var fe=r(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(o),oe.forEach(o),Ae=c(Y),X=a(Y,"LI",{});var ve=r(X);Fe=l(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ve,"CODE",{});var Te=r(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(o),ve.forEach(o),Y.forEach(o)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,u,q),e(u,b),e(b,d),e(u,h),e(u,F),e(F,Ce),_(x,ue,q),_(x,z,q),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,he),e(L,ae),e(ae,ze),e(L,J),e(L,D),e(D,be),e(j,re),e(j,N),e(N,ke),e(N,se),e(se,Be),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&o(p),x&&o(f),x&&o(u),x&&o(ue),x&&o(z),x&&o(Q),x&&o(V),x&&o(Z),x&&o(j)}}}function yh(B){let p,k,f,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=r(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function vh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function Th(B){let p,k,f,u,b,d,h,F,Ce,ue,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,ze,J,D,be,re,N,ke,se,Be,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=s("TF 2.0 models accepts two formats as inputs:"),f=i(),u=n("ul"),b=n("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),h=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),z=n("p"),je=s("This second option is useful when using "),W=n("code"),Oe=s("tf.keras.Model.fit"),Pe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=s("model(inputs)"),Ne=s("."),Q=i(),V=n("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),he=s("a single Tensor with "),ae=n("code"),ze=s("input_ids"),J=s(" only and nothing else: "),D=n("code"),be=s("model(input_ids)"),re=i(),N=n("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),Be=s("model([input_ids, attention_mask])"),ee=s(" or "),le=n("code"),de=s("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=r(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),f=c(x),u=a(x,"UL",{});var ie=r(u);b=a(ie,"LI",{});var Ze=r(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(o),h=c(ie),F=a(ie,"LI",{});var Re=r(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=c(x),z=a(x,"P",{});var O=r(z);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var eo=r(W);Oe=l(eo,"tf.keras.Model.fit"),eo.forEach(o),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ye=r(R);Le=l(ye,"model(inputs)"),ye.forEach(o),Ne=l(O,"."),O.forEach(o),Q=c(x),V=a(x,"P",{});var oo=r(V);Ie=l(oo,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oo.forEach(o),Z=c(x),j=a(x,"UL",{});var Y=r(j);L=a(Y,"LI",{});var G=r(L);he=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var to=r(ae);ze=l(to,"input_ids"),to.forEach(o),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var no=r(D);be=l(no,"model(input_ids)"),no.forEach(o),G.forEach(o),re=c(Y),N=a(Y,"LI",{});var oe=r(N);ke=l(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=a(oe,"CODE",{});var ce=r(se);Be=l(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=l(oe," or "),le=a(oe,"CODE",{});var fe=r(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(o),oe.forEach(o),Ae=c(Y),X=a(Y,"LI",{});var ve=r(X);Fe=l(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ve,"CODE",{});var Te=r(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(o),ve.forEach(o),Y.forEach(o)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,u,q),e(u,b),e(b,d),e(u,h),e(u,F),e(F,Ce),_(x,ue,q),_(x,z,q),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,he),e(L,ae),e(ae,ze),e(L,J),e(L,D),e(D,be),e(j,re),e(j,N),e(N,ke),e(N,se),e(se,Be),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&o(p),x&&o(f),x&&o(u),x&&o(ue),x&&o(z),x&&o(Q),x&&o(V),x&&o(Z),x&&o(j)}}}function wh(B){let p,k,f,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=r(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function Sh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function $h(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function xh(B){let p,k,f,u,b;return u=new Ye({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function zh(B){let p,k,f,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=r(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function Bh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function Fh(B){let p,k,f,u,b;return u=new Ye({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=s("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=r(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function qh(B){let p,k,f,u,b,d,h,F,Ce,ue,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,ze,J,D,be,re,N,ke,se,Be,ee,le,de,Ae,X,Fe,H,De,x,q,ie,Ze,Re,O,eo,ye,oo,Y,G,to,no,oe,ce,fe,ve,Te,ml,sa,ul,cs,we,ut,hl,ao,fl,En,_l,gl,ht,bl,kl,yl,ro,vl,Mn,Tl,wl,Cn,Sl,$l,xl,wo,ps,so,So,la,ft,zl,da,Bl,ms,U,_t,Fl,ia,ql,El,gt,Ml,jn,Cl,jl,Ol,He,bt,Pl,ca,Ll,Nl,pa,Il,Al,$o,kt,Dl,lo,Gl,ma,Ul,Wl,ua,Rl,Hl,Kl,Ke,yt,Ql,On,Vl,Pn,Jl,Xl,ha,Yl,Zl,Ln,vt,us,io,xo,fa,Tt,ed,_a,od,hs,Ge,wt,td,St,nd,ga,ad,rd,sd,zo,$t,ld,ba,dd,fs,co,Bo,ka,xt,id,ya,cd,_s,Se,zt,pd,Bt,md,Nn,ud,hd,fd,Ft,_d,qt,gd,bd,kd,qe,Et,yd,po,vd,In,Td,wd,va,Sd,$d,xd,Fo,zd,qo,gs,mo,Eo,Ta,Mt,Bd,wa,Fd,bs,$e,Ct,qd,jt,Ed,An,Md,Cd,jd,Ot,Od,Pt,Pd,Ld,Nd,Ee,Lt,Id,uo,Ad,Dn,Dd,Gd,Sa,Ud,Wd,Rd,Mo,Hd,Co,ks,ho,jo,$a,Nt,Kd,xa,Qd,ys,fo,It,Vd,Oo,At,Jd,Po,vs,_o,Lo,za,Dt,Xd,Ba,Yd,Ts,pe,Gt,Zd,Ut,ei,Gn,oi,ti,ni,Wt,ai,Rt,ri,si,li,No,di,Me,Ht,ii,go,ci,Un,pi,mi,Fa,ui,hi,fi,Io,_i,Ao,ws,bo,Do,qa,Kt,gi,Ea,bi,Ss,me,Qt,ki,Vt,yi,Wn,vi,Ti,wi,Jt,Si,Xt,$i,xi,zi,Go,Bi,P,Yt,Fi,ko,qi,Rn,Ei,Mi,Ma,Ci,ji,Oi,Uo,Pi,Ca,Li,Ni,ja,Oa,Pa,La,Ii,Ai,Na,Ia,Aa,Da,Di,Gi,Ga,Ua,Wa,Ra,Ui,Wi,Ha,Ka,Qa,Zt,Ri,Va,Hi,Ki,Qi,Ja,Xa,Ya,Za,Vi,$s,yo,Wo,er,en,Ji,or,Xi,xs,I,on,Yi,tn,Zi,Hn,ec,oc,tc,nn,nc,an,ac,rc,sc,tr,lc,dc,Ue,nr,rn,ic,cc,ar,sn,pc,mc,rr,ln,uc,hc,sr,dn,fc,_c,Ro,cn,gc,Ho,bc,Ko,pn,kc,Qo,yc,Vo,mn,vc,Jo,zs,vo,Xo,lr,un,Tc,dr,wc,Bs,A,hn,Sc,fn,$c,Kn,xc,zc,Bc,_n,Fc,gn,qc,Ec,Mc,ir,Cc,jc,We,cr,bn,Oc,Pc,pr,kn,Lc,Nc,mr,yn,Ic,Ac,ur,vn,Dc,Gc,E,Tn,Uc,To,Wc,hr,Rc,Hc,fr,Kc,Qc,Vc,Yo,Jc,_r,Xc,Yc,gr,br,kr,yr,Zc,ep,vr,Tr,wr,Sr,op,tp,$r,xr,zr,Br,np,ap,Fr,qr,wn,Zo,et,Er,Sn,rp,Mr,sp,lp,Cr,dp,ip,jr,cp,pp,Or,Pr,Lr,Nr,mp,up,Ir,Ar,Dr,Gr,hp,fp,Ur,Wr,Rr,Hr,_p,gp,Kr,Qr,Vr,Jr,bp,kp,ot,$n,yp,tt,vp,nt,xn,Tp,at,Fs;return d=new xe({}),re=new xe({}),Te=new xe({}),ut=new C({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),wo=new Je({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[uh]},$$scope:{ctx:B}}}),ft=new xe({}),_t=new C({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L69"}}),bt=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/tokenization_utils_base.py#L2936",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),kt=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/tokenization_utils.py#L845",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),yt=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/tokenization_utils_base.py#L2916",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vt=new C({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L211"}}),Tt=new xe({}),wt=new C({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L52"}}),$t=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L98",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xt=new xe({}),zt=new C({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1081"}}),Et=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1108",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new qn({props:{$$slots:{default:[hh]},$$scope:{ctx:B}}}),qo=new Je({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[fh]},$$scope:{ctx:B}}}),Mt=new xe({}),Ct=new C({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1207"}}),Lt=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new qn({props:{$$slots:{default:[_h]},$$scope:{ctx:B}}}),Co=new Je({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[gh]},$$scope:{ctx:B}}}),Nt=new xe({}),It=new C({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1387"}}),At=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1418",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Je({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[bh]},$$scope:{ctx:B}}}),Dt=new xe({}),Gt=new C({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1144"}}),No=new qn({props:{$$slots:{default:[kh]},$$scope:{ctx:B}}}),Ht=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1156",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Io=new qn({props:{$$slots:{default:[yh]},$$scope:{ctx:B}}}),Ao=new Je({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[vh]},$$scope:{ctx:B}}}),Kt=new xe({}),Qt=new C({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1233"}}),Go=new qn({props:{$$slots:{default:[Th]},$$scope:{ctx:B}}}),Yt=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1266",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Uo=new qn({props:{$$slots:{default:[wh]},$$scope:{ctx:B}}}),en=new xe({}),on=new C({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1215"}}),cn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[Sh]},$$scope:{ctx:B}}}),pn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[$h]},$$scope:{ctx:B}}}),mn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[xh]},$$scope:{ctx:B}}}),un=new xe({}),hn=new C({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303"}}),Tn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new qn({props:{$$slots:{default:[zh]},$$scope:{ctx:B}}}),Sn=new xe({}),$n=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[Bh]},$$scope:{ctx:B}}}),xn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18116/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18116/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1307",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_18116/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),at=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[Fh]},$$scope:{ctx:B}}}),{c(){p=n("meta"),k=i(),f=n("h1"),u=n("a"),b=n("span"),y(d.$$.fragment),h=i(),F=n("span"),Ce=s("Blenderbot Small"),ue=i(),z=n("p"),je=s("Note that "),W=n("a"),Oe=s("BlenderbotSmallModel"),Pe=s(` and
`),R=n("a"),Le=s("BlenderbotSmallForConditionalGeneration"),Ne=s(` are only used in combination with the checkpoint
`),Q=n("a"),V=s("facebook/blenderbot-90M"),Ie=s(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),j=s("BlenderbotModel"),L=s(` and
`),he=n("a"),ae=s("BlenderbotForConditionalGeneration"),ze=i(),J=n("h2"),D=n("a"),be=n("span"),y(re.$$.fragment),N=i(),ke=n("span"),se=s("Overview"),Be=i(),ee=n("p"),le=s("The Blender chatbot model was proposed in "),de=n("a"),Ae=s("Recipes for building an open-domain chatbot"),X=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fe=i(),H=n("p"),De=s("The abstract of the paper is the following:"),x=i(),q=n("p"),ie=n("em"),Ze=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=i(),O=n("p"),eo=s("This model was contributed by "),ye=n("a"),oo=s("patrickvonplaten"),Y=s(`. The authors\u2019 code can be
found `),G=n("a"),to=s("here"),no=s(" ."),oe=i(),ce=n("h2"),fe=n("a"),ve=n("span"),y(Te.$$.fragment),ml=i(),sa=n("span"),ul=s("BlenderbotSmallConfig"),cs=i(),we=n("div"),y(ut.$$.fragment),hl=i(),ao=n("p"),fl=s("This is the configuration class to store the configuration of a "),En=n("a"),_l=s("BlenderbotSmallModel"),gl=s(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ht=n("a"),bl=s("facebook/blenderbot_small-90M"),kl=s(" architecture."),yl=i(),ro=n("p"),vl=s("Configuration objects inherit from "),Mn=n("a"),Tl=s("PretrainedConfig"),wl=s(` and can be used to control the model outputs. Read the
documentation from `),Cn=n("a"),Sl=s("PretrainedConfig"),$l=s(" for more information."),xl=i(),y(wo.$$.fragment),ps=i(),so=n("h2"),So=n("a"),la=n("span"),y(ft.$$.fragment),zl=i(),da=n("span"),Bl=s("BlenderbotSmallTokenizer"),ms=i(),U=n("div"),y(_t.$$.fragment),Fl=i(),ia=n("p"),ql=s("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),El=i(),gt=n("p"),Ml=s("This tokenizer inherits from "),jn=n("a"),Cl=s("PreTrainedTokenizer"),jl=s(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ol=i(),He=n("div"),y(bt.$$.fragment),Pl=i(),ca=n("p"),Ll=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Nl=i(),pa=n("p"),Il=s("This implementation does not add special tokens and this method should be overridden in a subclass."),Al=i(),$o=n("div"),y(kt.$$.fragment),Dl=i(),lo=n("p"),Gl=s(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=n("code"),Ul=s("prepare_for_model"),Wl=s(" or "),ua=n("code"),Rl=s("encode_plus"),Hl=s(" methods."),Kl=i(),Ke=n("div"),y(yt.$$.fragment),Ql=i(),On=n("p"),Vl=s("Create the token type IDs corresponding to the sequences passed. "),Pn=n("a"),Jl=s(`What are token type
IDs?`),Xl=i(),ha=n("p"),Yl=s("Should be overridden in a subclass if the model has a special way of building those."),Zl=i(),Ln=n("div"),y(vt.$$.fragment),us=i(),io=n("h2"),xo=n("a"),fa=n("span"),y(Tt.$$.fragment),ed=i(),_a=n("span"),od=s("BlenderbotSmallTokenizerFast"),hs=i(),Ge=n("div"),y(wt.$$.fragment),td=i(),St=n("p"),nd=s("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=n("em"),ad=s("tokenizers"),rd=s(" library)."),sd=i(),zo=n("div"),y($t.$$.fragment),ld=i(),ba=n("p"),dd=s(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),fs=i(),co=n("h2"),Bo=n("a"),ka=n("span"),y(xt.$$.fragment),id=i(),ya=n("span"),cd=s("BlenderbotSmallModel"),_s=i(),Se=n("div"),y(zt.$$.fragment),pd=i(),Bt=n("p"),md=s(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),ud=s("PreTrainedModel"),hd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=i(),Ft=n("p"),_d=s("This model is also a PyTorch "),qt=n("a"),gd=s("torch.nn.Module"),bd=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=i(),qe=n("div"),y(Et.$$.fragment),yd=i(),po=n("p"),vd=s("The "),In=n("a"),Td=s("BlenderbotSmallModel"),wd=s(" forward method, overrides the "),va=n("code"),Sd=s("__call__"),$d=s(" special method."),xd=i(),y(Fo.$$.fragment),zd=i(),y(qo.$$.fragment),gs=i(),mo=n("h2"),Eo=n("a"),Ta=n("span"),y(Mt.$$.fragment),Bd=i(),wa=n("span"),Fd=s("BlenderbotSmallForConditionalGeneration"),bs=i(),$e=n("div"),y(Ct.$$.fragment),qd=i(),jt=n("p"),Ed=s(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Md=s("PreTrainedModel"),Cd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=i(),Ot=n("p"),Od=s("This model is also a PyTorch "),Pt=n("a"),Pd=s("torch.nn.Module"),Ld=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=i(),Ee=n("div"),y(Lt.$$.fragment),Id=i(),uo=n("p"),Ad=s("The "),Dn=n("a"),Dd=s("BlenderbotSmallForConditionalGeneration"),Gd=s(" forward method, overrides the "),Sa=n("code"),Ud=s("__call__"),Wd=s(" special method."),Rd=i(),y(Mo.$$.fragment),Hd=i(),y(Co.$$.fragment),ks=i(),ho=n("h2"),jo=n("a"),$a=n("span"),y(Nt.$$.fragment),Kd=i(),xa=n("span"),Qd=s("BlenderbotSmallForCausalLM"),ys=i(),fo=n("div"),y(It.$$.fragment),Vd=i(),Oo=n("div"),y(At.$$.fragment),Jd=i(),y(Po.$$.fragment),vs=i(),_o=n("h2"),Lo=n("a"),za=n("span"),y(Dt.$$.fragment),Xd=i(),Ba=n("span"),Yd=s("TFBlenderbotSmallModel"),Ts=i(),pe=n("div"),y(Gt.$$.fragment),Zd=i(),Ut=n("p"),ei=s(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),oi=s("TFPreTrainedModel"),ti=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=i(),Wt=n("p"),ai=s("This model is also a "),Rt=n("a"),ri=s("tf.keras.Model"),si=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li=i(),y(No.$$.fragment),di=i(),Me=n("div"),y(Ht.$$.fragment),ii=i(),go=n("p"),ci=s("The "),Un=n("a"),pi=s("TFBlenderbotSmallModel"),mi=s(" forward method, overrides the "),Fa=n("code"),ui=s("__call__"),hi=s(" special method."),fi=i(),y(Io.$$.fragment),_i=i(),y(Ao.$$.fragment),ws=i(),bo=n("h2"),Do=n("a"),qa=n("span"),y(Kt.$$.fragment),gi=i(),Ea=n("span"),bi=s("TFBlenderbotSmallForConditionalGeneration"),Ss=i(),me=n("div"),y(Qt.$$.fragment),ki=i(),Vt=n("p"),yi=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=n("a"),vi=s("TFPreTrainedModel"),Ti=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi=i(),Jt=n("p"),Si=s("This model is also a "),Xt=n("a"),$i=s("tf.keras.Model"),xi=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zi=i(),y(Go.$$.fragment),Bi=i(),P=n("div"),y(Yt.$$.fragment),Fi=i(),ko=n("p"),qi=s("The "),Rn=n("a"),Ei=s("TFBlenderbotSmallForConditionalGeneration"),Mi=s(" forward method, overrides the "),Ma=n("code"),Ci=s("__call__"),ji=s(" special method."),Oi=i(),y(Uo.$$.fragment),Pi=i(),Ca=n("p"),Li=s("Conversation example::"),Ni=i(),ja=n("blockquote"),Oa=n("blockquote"),Pa=n("blockquote"),La=n("p"),Ii=s(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ai=i(),Na=n("blockquote"),Ia=n("blockquote"),Aa=n("blockquote"),Da=n("p"),Di=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Gi=i(),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("blockquote"),Ra=n("p"),Ui=s(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Wi=i(),Ha=n("blockquote"),Ka=n("blockquote"),Qa=n("blockquote"),Zt=n("p"),Ri=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=n("s"),Hi=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),Ki=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Qi=i(),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("blockquote"),Za=n("p"),Vi=s(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),$s=i(),yo=n("h2"),Wo=n("a"),er=n("span"),y(en.$$.fragment),Ji=i(),or=n("span"),Xi=s("FlaxBlenderbotSmallModel"),xs=i(),I=n("div"),y(on.$$.fragment),Yi=i(),tn=n("p"),Zi=s(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=n("a"),ec=s("FlaxPreTrainedModel"),oc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tc=i(),nn=n("p"),nc=s(`This model is also a Flax Linen
`),an=n("a"),ac=s("flax.nn.Module"),rc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sc=i(),tr=n("p"),lc=s("Finally, this model supports inherent JAX features such as:"),dc=i(),Ue=n("ul"),nr=n("li"),rn=n("a"),ic=s("Just-In-Time (JIT) compilation"),cc=i(),ar=n("li"),sn=n("a"),pc=s("Automatic Differentiation"),mc=i(),rr=n("li"),ln=n("a"),uc=s("Vectorization"),hc=i(),sr=n("li"),dn=n("a"),fc=s("Parallelization"),_c=i(),Ro=n("div"),y(cn.$$.fragment),gc=i(),y(Ho.$$.fragment),bc=i(),Ko=n("div"),y(pn.$$.fragment),kc=i(),y(Qo.$$.fragment),yc=i(),Vo=n("div"),y(mn.$$.fragment),vc=i(),y(Jo.$$.fragment),zs=i(),vo=n("h2"),Xo=n("a"),lr=n("span"),y(un.$$.fragment),Tc=i(),dr=n("span"),wc=s("FlaxBlenderbotForConditionalGeneration"),Bs=i(),A=n("div"),y(hn.$$.fragment),Sc=i(),fn=n("p"),$c=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=n("a"),xc=s("FlaxPreTrainedModel"),zc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bc=i(),_n=n("p"),Fc=s(`This model is also a Flax Linen
`),gn=n("a"),qc=s("flax.nn.Module"),Ec=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mc=i(),ir=n("p"),Cc=s("Finally, this model supports inherent JAX features such as:"),jc=i(),We=n("ul"),cr=n("li"),bn=n("a"),Oc=s("Just-In-Time (JIT) compilation"),Pc=i(),pr=n("li"),kn=n("a"),Lc=s("Automatic Differentiation"),Nc=i(),mr=n("li"),yn=n("a"),Ic=s("Vectorization"),Ac=i(),ur=n("li"),vn=n("a"),Dc=s("Parallelization"),Gc=i(),E=n("div"),y(Tn.$$.fragment),Uc=i(),To=n("p"),Wc=s("The "),hr=n("code"),Rc=s("FlaxBlenderbotSmallPreTrainedModel"),Hc=s(" forward method, overrides the "),fr=n("code"),Kc=s("__call__"),Qc=s(" special method."),Vc=i(),y(Yo.$$.fragment),Jc=i(),_r=n("p"),Xc=s("Summarization example:"),Yc=i(),gr=n("blockquote"),br=n("blockquote"),kr=n("blockquote"),yr=n("p"),Zc=s("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),ep=i(),vr=n("blockquote"),Tr=n("blockquote"),wr=n("blockquote"),Sr=n("p"),op=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),tp=i(),$r=n("blockquote"),xr=n("blockquote"),zr=n("blockquote"),Br=n("p"),np=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ap=i(),Fr=n("blockquote"),qr=n("blockquote"),wn=n("blockquote"),Zo=n("h1"),et=n("a"),Er=n("span"),y(Sn.$$.fragment),rp=i(),Mr=n("span"),sp=s("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),lp=i(),Cr=n("p"),dp=s("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),ip=i(),jr=n("p"),cp=s("Mask filling example:"),pp=i(),Or=n("blockquote"),Pr=n("blockquote"),Lr=n("blockquote"),Nr=n("p"),mp=s(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),up=i(),Ir=n("blockquote"),Ar=n("blockquote"),Dr=n("blockquote"),Gr=n("p"),hp=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),fp=i(),Ur=n("blockquote"),Wr=n("blockquote"),Rr=n("blockquote"),Hr=n("p"),_p=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),gp=i(),Kr=n("blockquote"),Qr=n("blockquote"),Vr=n("blockquote"),Jr=n("p"),bp=s("tokenizer.decode(predictions).split()"),kp=i(),ot=n("div"),y($n.$$.fragment),yp=i(),y(tt.$$.fragment),vp=i(),nt=n("div"),y(xn.$$.fragment),Tp=i(),y(at.$$.fragment),this.h()},l(t){const g=ph('[data-svelte="svelte-1phssyn"]',document.head);p=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=c(t),f=a(t,"H1",{class:!0});var zn=r(f);u=a(zn,"A",{id:!0,class:!0,href:!0});var Xr=r(u);b=a(Xr,"SPAN",{});var Yr=r(b);v(d.$$.fragment,Yr),Yr.forEach(o),Xr.forEach(o),h=c(zn),F=a(zn,"SPAN",{});var Zr=r(F);Ce=l(Zr,"Blenderbot Small"),Zr.forEach(o),zn.forEach(o),ue=c(t),z=a(t,"P",{});var _e=r(z);je=l(_e,"Note that "),W=a(_e,"A",{href:!0});var es=r(W);Oe=l(es,"BlenderbotSmallModel"),es.forEach(o),Pe=l(_e,` and
`),R=a(_e,"A",{href:!0});var os=r(R);Le=l(os,"BlenderbotSmallForConditionalGeneration"),os.forEach(o),Ne=l(_e,` are only used in combination with the checkpoint
`),Q=a(_e,"A",{href:!0,rel:!0});var ts=r(Q);V=l(ts,"facebook/blenderbot-90M"),ts.forEach(o),Ie=l(_e,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(_e,"A",{href:!0});var ns=r(Z);j=l(ns,"BlenderbotModel"),ns.forEach(o),L=l(_e,` and
`),he=a(_e,"A",{href:!0});var as=r(he);ae=l(as,"BlenderbotForConditionalGeneration"),as.forEach(o),_e.forEach(o),ze=c(t),J=a(t,"H2",{class:!0});var Bn=r(J);D=a(Bn,"A",{id:!0,class:!0,href:!0});var rs=r(D);be=a(rs,"SPAN",{});var ss=r(be);v(re.$$.fragment,ss),ss.forEach(o),rs.forEach(o),N=c(Bn),ke=a(Bn,"SPAN",{});var ls=r(ke);se=l(ls,"Overview"),ls.forEach(o),Bn.forEach(o),Be=c(t),ee=a(t,"P",{});var Fn=r(ee);le=l(Fn,"The Blender chatbot model was proposed in "),de=a(Fn,"A",{href:!0,rel:!0});var ds=r(de);Ae=l(ds,"Recipes for building an open-domain chatbot"),ds.forEach(o),X=l(Fn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fn.forEach(o),Fe=c(t),H=a(t,"P",{});var is=r(H);De=l(is,"The abstract of the paper is the following:"),is.forEach(o),x=c(t),q=a(t,"P",{});var Sp=r(q);ie=a(Sp,"EM",{});var $p=r(ie);Ze=l($p,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),$p.forEach(o),Sp.forEach(o),Re=c(t),O=a(t,"P",{});var Qn=r(O);eo=l(Qn,"This model was contributed by "),ye=a(Qn,"A",{href:!0,rel:!0});var xp=r(ye);oo=l(xp,"patrickvonplaten"),xp.forEach(o),Y=l(Qn,`. The authors\u2019 code can be
found `),G=a(Qn,"A",{href:!0,rel:!0});var zp=r(G);to=l(zp,"here"),zp.forEach(o),no=l(Qn," ."),Qn.forEach(o),oe=c(t),ce=a(t,"H2",{class:!0});var qs=r(ce);fe=a(qs,"A",{id:!0,class:!0,href:!0});var Bp=r(fe);ve=a(Bp,"SPAN",{});var Fp=r(ve);v(Te.$$.fragment,Fp),Fp.forEach(o),Bp.forEach(o),ml=c(qs),sa=a(qs,"SPAN",{});var qp=r(sa);ul=l(qp,"BlenderbotSmallConfig"),qp.forEach(o),qs.forEach(o),cs=c(t),we=a(t,"DIV",{class:!0});var rt=r(we);v(ut.$$.fragment,rt),hl=c(rt),ao=a(rt,"P",{});var Vn=r(ao);fl=l(Vn,"This is the configuration class to store the configuration of a "),En=a(Vn,"A",{href:!0});var Ep=r(En);_l=l(Ep,"BlenderbotSmallModel"),Ep.forEach(o),gl=l(Vn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ht=a(Vn,"A",{href:!0,rel:!0});var Mp=r(ht);bl=l(Mp,"facebook/blenderbot_small-90M"),Mp.forEach(o),kl=l(Vn," architecture."),Vn.forEach(o),yl=c(rt),ro=a(rt,"P",{});var Jn=r(ro);vl=l(Jn,"Configuration objects inherit from "),Mn=a(Jn,"A",{href:!0});var Cp=r(Mn);Tl=l(Cp,"PretrainedConfig"),Cp.forEach(o),wl=l(Jn,` and can be used to control the model outputs. Read the
documentation from `),Cn=a(Jn,"A",{href:!0});var jp=r(Cn);Sl=l(jp,"PretrainedConfig"),jp.forEach(o),$l=l(Jn," for more information."),Jn.forEach(o),xl=c(rt),v(wo.$$.fragment,rt),rt.forEach(o),ps=c(t),so=a(t,"H2",{class:!0});var Es=r(so);So=a(Es,"A",{id:!0,class:!0,href:!0});var Op=r(So);la=a(Op,"SPAN",{});var Pp=r(la);v(ft.$$.fragment,Pp),Pp.forEach(o),Op.forEach(o),zl=c(Es),da=a(Es,"SPAN",{});var Lp=r(da);Bl=l(Lp,"BlenderbotSmallTokenizer"),Lp.forEach(o),Es.forEach(o),ms=c(t),U=a(t,"DIV",{class:!0});var ge=r(U);v(_t.$$.fragment,ge),Fl=c(ge),ia=a(ge,"P",{});var Np=r(ia);ql=l(Np,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Np.forEach(o),El=c(ge),gt=a(ge,"P",{});var Ms=r(gt);Ml=l(Ms,"This tokenizer inherits from "),jn=a(Ms,"A",{href:!0});var Ip=r(jn);Cl=l(Ip,"PreTrainedTokenizer"),Ip.forEach(o),jl=l(Ms,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ms.forEach(o),Ol=c(ge),He=a(ge,"DIV",{class:!0});var Xn=r(He);v(bt.$$.fragment,Xn),Pl=c(Xn),ca=a(Xn,"P",{});var Ap=r(ca);Ll=l(Ap,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ap.forEach(o),Nl=c(Xn),pa=a(Xn,"P",{});var Dp=r(pa);Il=l(Dp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Dp.forEach(o),Xn.forEach(o),Al=c(ge),$o=a(ge,"DIV",{class:!0});var Cs=r($o);v(kt.$$.fragment,Cs),Dl=c(Cs),lo=a(Cs,"P",{});var Yn=r(lo);Gl=l(Yn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=a(Yn,"CODE",{});var Gp=r(ma);Ul=l(Gp,"prepare_for_model"),Gp.forEach(o),Wl=l(Yn," or "),ua=a(Yn,"CODE",{});var Up=r(ua);Rl=l(Up,"encode_plus"),Up.forEach(o),Hl=l(Yn," methods."),Yn.forEach(o),Cs.forEach(o),Kl=c(ge),Ke=a(ge,"DIV",{class:!0});var Zn=r(Ke);v(yt.$$.fragment,Zn),Ql=c(Zn),On=a(Zn,"P",{});var wp=r(On);Vl=l(wp,"Create the token type IDs corresponding to the sequences passed. "),Pn=a(wp,"A",{href:!0});var Wp=r(Pn);Jl=l(Wp,`What are token type
IDs?`),Wp.forEach(o),wp.forEach(o),Xl=c(Zn),ha=a(Zn,"P",{});var Rp=r(ha);Yl=l(Rp,"Should be overridden in a subclass if the model has a special way of building those."),Rp.forEach(o),Zn.forEach(o),Zl=c(ge),Ln=a(ge,"DIV",{class:!0});var Hp=r(Ln);v(vt.$$.fragment,Hp),Hp.forEach(o),ge.forEach(o),us=c(t),io=a(t,"H2",{class:!0});var js=r(io);xo=a(js,"A",{id:!0,class:!0,href:!0});var Kp=r(xo);fa=a(Kp,"SPAN",{});var Qp=r(fa);v(Tt.$$.fragment,Qp),Qp.forEach(o),Kp.forEach(o),ed=c(js),_a=a(js,"SPAN",{});var Vp=r(_a);od=l(Vp,"BlenderbotSmallTokenizerFast"),Vp.forEach(o),js.forEach(o),hs=c(t),Ge=a(t,"DIV",{class:!0});var ea=r(Ge);v(wt.$$.fragment,ea),td=c(ea),St=a(ea,"P",{});var Os=r(St);nd=l(Os,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=a(Os,"EM",{});var Jp=r(ga);ad=l(Jp,"tokenizers"),Jp.forEach(o),rd=l(Os," library)."),Os.forEach(o),sd=c(ea),zo=a(ea,"DIV",{class:!0});var Ps=r(zo);v($t.$$.fragment,Ps),ld=c(Ps),ba=a(Ps,"P",{});var Xp=r(ba);dd=l(Xp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Xp.forEach(o),Ps.forEach(o),ea.forEach(o),fs=c(t),co=a(t,"H2",{class:!0});var Ls=r(co);Bo=a(Ls,"A",{id:!0,class:!0,href:!0});var Yp=r(Bo);ka=a(Yp,"SPAN",{});var Zp=r(ka);v(xt.$$.fragment,Zp),Zp.forEach(o),Yp.forEach(o),id=c(Ls),ya=a(Ls,"SPAN",{});var em=r(ya);cd=l(em,"BlenderbotSmallModel"),em.forEach(o),Ls.forEach(o),_s=c(t),Se=a(t,"DIV",{class:!0});var st=r(Se);v(zt.$$.fragment,st),pd=c(st),Bt=a(st,"P",{});var Ns=r(Bt);md=l(Ns,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Ns,"A",{href:!0});var om=r(Nn);ud=l(om,"PreTrainedModel"),om.forEach(o),hd=l(Ns,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ns.forEach(o),fd=c(st),Ft=a(st,"P",{});var Is=r(Ft);_d=l(Is,"This model is also a PyTorch "),qt=a(Is,"A",{href:!0,rel:!0});var tm=r(qt);gd=l(tm,"torch.nn.Module"),tm.forEach(o),bd=l(Is,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Is.forEach(o),kd=c(st),qe=a(st,"DIV",{class:!0});var lt=r(qe);v(Et.$$.fragment,lt),yd=c(lt),po=a(lt,"P",{});var oa=r(po);vd=l(oa,"The "),In=a(oa,"A",{href:!0});var nm=r(In);Td=l(nm,"BlenderbotSmallModel"),nm.forEach(o),wd=l(oa," forward method, overrides the "),va=a(oa,"CODE",{});var am=r(va);Sd=l(am,"__call__"),am.forEach(o),$d=l(oa," special method."),oa.forEach(o),xd=c(lt),v(Fo.$$.fragment,lt),zd=c(lt),v(qo.$$.fragment,lt),lt.forEach(o),st.forEach(o),gs=c(t),mo=a(t,"H2",{class:!0});var As=r(mo);Eo=a(As,"A",{id:!0,class:!0,href:!0});var rm=r(Eo);Ta=a(rm,"SPAN",{});var sm=r(Ta);v(Mt.$$.fragment,sm),sm.forEach(o),rm.forEach(o),Bd=c(As),wa=a(As,"SPAN",{});var lm=r(wa);Fd=l(lm,"BlenderbotSmallForConditionalGeneration"),lm.forEach(o),As.forEach(o),bs=c(t),$e=a(t,"DIV",{class:!0});var dt=r($e);v(Ct.$$.fragment,dt),qd=c(dt),jt=a(dt,"P",{});var Ds=r(jt);Ed=l(Ds,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(Ds,"A",{href:!0});var dm=r(An);Md=l(dm,"PreTrainedModel"),dm.forEach(o),Cd=l(Ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ds.forEach(o),jd=c(dt),Ot=a(dt,"P",{});var Gs=r(Ot);Od=l(Gs,"This model is also a PyTorch "),Pt=a(Gs,"A",{href:!0,rel:!0});var im=r(Pt);Pd=l(im,"torch.nn.Module"),im.forEach(o),Ld=l(Gs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gs.forEach(o),Nd=c(dt),Ee=a(dt,"DIV",{class:!0});var it=r(Ee);v(Lt.$$.fragment,it),Id=c(it),uo=a(it,"P",{});var ta=r(uo);Ad=l(ta,"The "),Dn=a(ta,"A",{href:!0});var cm=r(Dn);Dd=l(cm,"BlenderbotSmallForConditionalGeneration"),cm.forEach(o),Gd=l(ta," forward method, overrides the "),Sa=a(ta,"CODE",{});var pm=r(Sa);Ud=l(pm,"__call__"),pm.forEach(o),Wd=l(ta," special method."),ta.forEach(o),Rd=c(it),v(Mo.$$.fragment,it),Hd=c(it),v(Co.$$.fragment,it),it.forEach(o),dt.forEach(o),ks=c(t),ho=a(t,"H2",{class:!0});var Us=r(ho);jo=a(Us,"A",{id:!0,class:!0,href:!0});var mm=r(jo);$a=a(mm,"SPAN",{});var um=r($a);v(Nt.$$.fragment,um),um.forEach(o),mm.forEach(o),Kd=c(Us),xa=a(Us,"SPAN",{});var hm=r(xa);Qd=l(hm,"BlenderbotSmallForCausalLM"),hm.forEach(o),Us.forEach(o),ys=c(t),fo=a(t,"DIV",{class:!0});var Ws=r(fo);v(It.$$.fragment,Ws),Vd=c(Ws),Oo=a(Ws,"DIV",{class:!0});var Rs=r(Oo);v(At.$$.fragment,Rs),Jd=c(Rs),v(Po.$$.fragment,Rs),Rs.forEach(o),Ws.forEach(o),vs=c(t),_o=a(t,"H2",{class:!0});var Hs=r(_o);Lo=a(Hs,"A",{id:!0,class:!0,href:!0});var fm=r(Lo);za=a(fm,"SPAN",{});var _m=r(za);v(Dt.$$.fragment,_m),_m.forEach(o),fm.forEach(o),Xd=c(Hs),Ba=a(Hs,"SPAN",{});var gm=r(Ba);Yd=l(gm,"TFBlenderbotSmallModel"),gm.forEach(o),Hs.forEach(o),Ts=c(t),pe=a(t,"DIV",{class:!0});var Qe=r(pe);v(Gt.$$.fragment,Qe),Zd=c(Qe),Ut=a(Qe,"P",{});var Ks=r(Ut);ei=l(Ks,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(Ks,"A",{href:!0});var bm=r(Gn);oi=l(bm,"TFPreTrainedModel"),bm.forEach(o),ti=l(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(o),ni=c(Qe),Wt=a(Qe,"P",{});var Qs=r(Wt);ai=l(Qs,"This model is also a "),Rt=a(Qs,"A",{href:!0,rel:!0});var km=r(Rt);ri=l(km,"tf.keras.Model"),km.forEach(o),si=l(Qs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qs.forEach(o),li=c(Qe),v(No.$$.fragment,Qe),di=c(Qe),Me=a(Qe,"DIV",{class:!0});var ct=r(Me);v(Ht.$$.fragment,ct),ii=c(ct),go=a(ct,"P",{});var na=r(go);ci=l(na,"The "),Un=a(na,"A",{href:!0});var ym=r(Un);pi=l(ym,"TFBlenderbotSmallModel"),ym.forEach(o),mi=l(na," forward method, overrides the "),Fa=a(na,"CODE",{});var vm=r(Fa);ui=l(vm,"__call__"),vm.forEach(o),hi=l(na," special method."),na.forEach(o),fi=c(ct),v(Io.$$.fragment,ct),_i=c(ct),v(Ao.$$.fragment,ct),ct.forEach(o),Qe.forEach(o),ws=c(t),bo=a(t,"H2",{class:!0});var Vs=r(bo);Do=a(Vs,"A",{id:!0,class:!0,href:!0});var Tm=r(Do);qa=a(Tm,"SPAN",{});var wm=r(qa);v(Kt.$$.fragment,wm),wm.forEach(o),Tm.forEach(o),gi=c(Vs),Ea=a(Vs,"SPAN",{});var Sm=r(Ea);bi=l(Sm,"TFBlenderbotSmallForConditionalGeneration"),Sm.forEach(o),Vs.forEach(o),Ss=c(t),me=a(t,"DIV",{class:!0});var Ve=r(me);v(Qt.$$.fragment,Ve),ki=c(Ve),Vt=a(Ve,"P",{});var Js=r(Vt);yi=l(Js,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=a(Js,"A",{href:!0});var $m=r(Wn);vi=l($m,"TFPreTrainedModel"),$m.forEach(o),Ti=l(Js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Js.forEach(o),wi=c(Ve),Jt=a(Ve,"P",{});var Xs=r(Jt);Si=l(Xs,"This model is also a "),Xt=a(Xs,"A",{href:!0,rel:!0});var xm=r(Xt);$i=l(xm,"tf.keras.Model"),xm.forEach(o),xi=l(Xs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xs.forEach(o),zi=c(Ve),v(Go.$$.fragment,Ve),Bi=c(Ve),P=a(Ve,"DIV",{class:!0});var K=r(P);v(Yt.$$.fragment,K),Fi=c(K),ko=a(K,"P",{});var aa=r(ko);qi=l(aa,"The "),Rn=a(aa,"A",{href:!0});var zm=r(Rn);Ei=l(zm,"TFBlenderbotSmallForConditionalGeneration"),zm.forEach(o),Mi=l(aa," forward method, overrides the "),Ma=a(aa,"CODE",{});var Bm=r(Ma);Ci=l(Bm,"__call__"),Bm.forEach(o),ji=l(aa," special method."),aa.forEach(o),Oi=c(K),v(Uo.$$.fragment,K),Pi=c(K),Ca=a(K,"P",{});var Fm=r(Ca);Li=l(Fm,"Conversation example::"),Fm.forEach(o),Ni=c(K),ja=a(K,"BLOCKQUOTE",{});var qm=r(ja);Oa=a(qm,"BLOCKQUOTE",{});var Em=r(Oa);Pa=a(Em,"BLOCKQUOTE",{});var Mm=r(Pa);La=a(Mm,"P",{});var Cm=r(La);Ii=l(Cm,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Cm.forEach(o),Mm.forEach(o),Em.forEach(o),qm.forEach(o),Ai=c(K),Na=a(K,"BLOCKQUOTE",{});var jm=r(Na);Ia=a(jm,"BLOCKQUOTE",{});var Om=r(Ia);Aa=a(Om,"BLOCKQUOTE",{});var Pm=r(Aa);Da=a(Pm,"P",{});var Lm=r(Da);Di=l(Lm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Lm.forEach(o),Pm.forEach(o),Om.forEach(o),jm.forEach(o),Gi=c(K),Ga=a(K,"BLOCKQUOTE",{});var Nm=r(Ga);Ua=a(Nm,"BLOCKQUOTE",{});var Im=r(Ua);Wa=a(Im,"BLOCKQUOTE",{});var Am=r(Wa);Ra=a(Am,"P",{});var Dm=r(Ra);Ui=l(Dm,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Dm.forEach(o),Am.forEach(o),Im.forEach(o),Nm.forEach(o),Wi=c(K),Ha=a(K,"BLOCKQUOTE",{});var Gm=r(Ha);Ka=a(Gm,"BLOCKQUOTE",{});var Um=r(Ka);Qa=a(Um,"BLOCKQUOTE",{});var Wm=r(Qa);Zt=a(Wm,"P",{});var Ys=r(Zt);Ri=l(Ys,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=a(Ys,"S",{});var Rm=r(Va);Hi=l(Rm,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Rm.forEach(o),Ki=l(Ys,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Ys.forEach(o),Wm.forEach(o),Um.forEach(o),Gm.forEach(o),Qi=c(K),Ja=a(K,"BLOCKQUOTE",{});var Hm=r(Ja);Xa=a(Hm,"BLOCKQUOTE",{});var Km=r(Xa);Ya=a(Km,"BLOCKQUOTE",{});var Qm=r(Ya);Za=a(Qm,"P",{});var Vm=r(Za);Vi=l(Vm,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Vm.forEach(o),Qm.forEach(o),Km.forEach(o),Hm.forEach(o),K.forEach(o),Ve.forEach(o),$s=c(t),yo=a(t,"H2",{class:!0});var Zs=r(yo);Wo=a(Zs,"A",{id:!0,class:!0,href:!0});var Jm=r(Wo);er=a(Jm,"SPAN",{});var Xm=r(er);v(en.$$.fragment,Xm),Xm.forEach(o),Jm.forEach(o),Ji=c(Zs),or=a(Zs,"SPAN",{});var Ym=r(or);Xi=l(Ym,"FlaxBlenderbotSmallModel"),Ym.forEach(o),Zs.forEach(o),xs=c(t),I=a(t,"DIV",{class:!0});var te=r(I);v(on.$$.fragment,te),Yi=c(te),tn=a(te,"P",{});var el=r(tn);Zi=l(el,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=a(el,"A",{href:!0});var Zm=r(Hn);ec=l(Zm,"FlaxPreTrainedModel"),Zm.forEach(o),oc=l(el,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),el.forEach(o),tc=c(te),nn=a(te,"P",{});var ol=r(nn);nc=l(ol,`This model is also a Flax Linen
`),an=a(ol,"A",{href:!0,rel:!0});var eu=r(an);ac=l(eu,"flax.nn.Module"),eu.forEach(o),rc=l(ol,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ol.forEach(o),sc=c(te),tr=a(te,"P",{});var ou=r(tr);lc=l(ou,"Finally, this model supports inherent JAX features such as:"),ou.forEach(o),dc=c(te),Ue=a(te,"UL",{});var pt=r(Ue);nr=a(pt,"LI",{});var tu=r(nr);rn=a(tu,"A",{href:!0,rel:!0});var nu=r(rn);ic=l(nu,"Just-In-Time (JIT) compilation"),nu.forEach(o),tu.forEach(o),cc=c(pt),ar=a(pt,"LI",{});var au=r(ar);sn=a(au,"A",{href:!0,rel:!0});var ru=r(sn);pc=l(ru,"Automatic Differentiation"),ru.forEach(o),au.forEach(o),mc=c(pt),rr=a(pt,"LI",{});var su=r(rr);ln=a(su,"A",{href:!0,rel:!0});var lu=r(ln);uc=l(lu,"Vectorization"),lu.forEach(o),su.forEach(o),hc=c(pt),sr=a(pt,"LI",{});var du=r(sr);dn=a(du,"A",{href:!0,rel:!0});var iu=r(dn);fc=l(iu,"Parallelization"),iu.forEach(o),du.forEach(o),pt.forEach(o),_c=c(te),Ro=a(te,"DIV",{class:!0});var tl=r(Ro);v(cn.$$.fragment,tl),gc=c(tl),v(Ho.$$.fragment,tl),tl.forEach(o),bc=c(te),Ko=a(te,"DIV",{class:!0});var nl=r(Ko);v(pn.$$.fragment,nl),kc=c(nl),v(Qo.$$.fragment,nl),nl.forEach(o),yc=c(te),Vo=a(te,"DIV",{class:!0});var al=r(Vo);v(mn.$$.fragment,al),vc=c(al),v(Jo.$$.fragment,al),al.forEach(o),te.forEach(o),zs=c(t),vo=a(t,"H2",{class:!0});var rl=r(vo);Xo=a(rl,"A",{id:!0,class:!0,href:!0});var cu=r(Xo);lr=a(cu,"SPAN",{});var pu=r(lr);v(un.$$.fragment,pu),pu.forEach(o),cu.forEach(o),Tc=c(rl),dr=a(rl,"SPAN",{});var mu=r(dr);wc=l(mu,"FlaxBlenderbotForConditionalGeneration"),mu.forEach(o),rl.forEach(o),Bs=c(t),A=a(t,"DIV",{class:!0});var ne=r(A);v(hn.$$.fragment,ne),Sc=c(ne),fn=a(ne,"P",{});var sl=r(fn);$c=l(sl,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=a(sl,"A",{href:!0});var uu=r(Kn);xc=l(uu,"FlaxPreTrainedModel"),uu.forEach(o),zc=l(sl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl.forEach(o),Bc=c(ne),_n=a(ne,"P",{});var ll=r(_n);Fc=l(ll,`This model is also a Flax Linen
`),gn=a(ll,"A",{href:!0,rel:!0});var hu=r(gn);qc=l(hu,"flax.nn.Module"),hu.forEach(o),Ec=l(ll,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ll.forEach(o),Mc=c(ne),ir=a(ne,"P",{});var fu=r(ir);Cc=l(fu,"Finally, this model supports inherent JAX features such as:"),fu.forEach(o),jc=c(ne),We=a(ne,"UL",{});var mt=r(We);cr=a(mt,"LI",{});var _u=r(cr);bn=a(_u,"A",{href:!0,rel:!0});var gu=r(bn);Oc=l(gu,"Just-In-Time (JIT) compilation"),gu.forEach(o),_u.forEach(o),Pc=c(mt),pr=a(mt,"LI",{});var bu=r(pr);kn=a(bu,"A",{href:!0,rel:!0});var ku=r(kn);Lc=l(ku,"Automatic Differentiation"),ku.forEach(o),bu.forEach(o),Nc=c(mt),mr=a(mt,"LI",{});var yu=r(mr);yn=a(yu,"A",{href:!0,rel:!0});var vu=r(yn);Ic=l(vu,"Vectorization"),vu.forEach(o),yu.forEach(o),Ac=c(mt),ur=a(mt,"LI",{});var Tu=r(ur);vn=a(Tu,"A",{href:!0,rel:!0});var wu=r(vn);Dc=l(wu,"Parallelization"),wu.forEach(o),Tu.forEach(o),mt.forEach(o),Gc=c(ne),E=a(ne,"DIV",{class:!0});var M=r(E);v(Tn.$$.fragment,M),Uc=c(M),To=a(M,"P",{});var ra=r(To);Wc=l(ra,"The "),hr=a(ra,"CODE",{});var Su=r(hr);Rc=l(Su,"FlaxBlenderbotSmallPreTrainedModel"),Su.forEach(o),Hc=l(ra," forward method, overrides the "),fr=a(ra,"CODE",{});var $u=r(fr);Kc=l($u,"__call__"),$u.forEach(o),Qc=l(ra," special method."),ra.forEach(o),Vc=c(M),v(Yo.$$.fragment,M),Jc=c(M),_r=a(M,"P",{});var xu=r(_r);Xc=l(xu,"Summarization example:"),xu.forEach(o),Yc=c(M),gr=a(M,"BLOCKQUOTE",{});var zu=r(gr);br=a(zu,"BLOCKQUOTE",{});var Bu=r(br);kr=a(Bu,"BLOCKQUOTE",{});var Fu=r(kr);yr=a(Fu,"P",{});var qu=r(yr);Zc=l(qu,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),qu.forEach(o),Fu.forEach(o),Bu.forEach(o),zu.forEach(o),ep=c(M),vr=a(M,"BLOCKQUOTE",{});var Eu=r(vr);Tr=a(Eu,"BLOCKQUOTE",{});var Mu=r(Tr);wr=a(Mu,"BLOCKQUOTE",{});var Cu=r(wr);Sr=a(Cu,"P",{});var ju=r(Sr);op=l(ju,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),ju.forEach(o),Cu.forEach(o),Mu.forEach(o),Eu.forEach(o),tp=c(M),$r=a(M,"BLOCKQUOTE",{});var Ou=r($r);xr=a(Ou,"BLOCKQUOTE",{});var Pu=r(xr);zr=a(Pu,"BLOCKQUOTE",{});var Lu=r(zr);Br=a(Lu,"P",{});var Nu=r(Br);np=l(Nu,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nu.forEach(o),Lu.forEach(o),Pu.forEach(o),Ou.forEach(o),ap=c(M),Fr=a(M,"BLOCKQUOTE",{});var Iu=r(Fr);qr=a(Iu,"BLOCKQUOTE",{});var Au=r(qr);wn=a(Au,"BLOCKQUOTE",{});var dl=r(wn);Zo=a(dl,"H1",{class:!0});var il=r(Zo);et=a(il,"A",{id:!0,class:!0,href:!0});var Du=r(et);Er=a(Du,"SPAN",{});var Gu=r(Er);v(Sn.$$.fragment,Gu),Gu.forEach(o),Du.forEach(o),rp=c(il),Mr=a(il,"SPAN",{});var Uu=r(Mr);sp=l(Uu,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Uu.forEach(o),il.forEach(o),lp=c(dl),Cr=a(dl,"P",{});var Wu=r(Cr);dp=l(Wu,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wu.forEach(o),dl.forEach(o),Au.forEach(o),Iu.forEach(o),ip=c(M),jr=a(M,"P",{});var Ru=r(jr);cp=l(Ru,"Mask filling example:"),Ru.forEach(o),pp=c(M),Or=a(M,"BLOCKQUOTE",{});var Hu=r(Or);Pr=a(Hu,"BLOCKQUOTE",{});var Ku=r(Pr);Lr=a(Ku,"BLOCKQUOTE",{});var Qu=r(Lr);Nr=a(Qu,"P",{});var Vu=r(Nr);mp=l(Vu,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Vu.forEach(o),Qu.forEach(o),Ku.forEach(o),Hu.forEach(o),up=c(M),Ir=a(M,"BLOCKQUOTE",{});var Ju=r(Ir);Ar=a(Ju,"BLOCKQUOTE",{});var Xu=r(Ar);Dr=a(Xu,"BLOCKQUOTE",{});var Yu=r(Dr);Gr=a(Yu,"P",{});var Zu=r(Gr);hp=l(Zu,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zu.forEach(o),Yu.forEach(o),Xu.forEach(o),Ju.forEach(o),fp=c(M),Ur=a(M,"BLOCKQUOTE",{});var eh=r(Ur);Wr=a(eh,"BLOCKQUOTE",{});var oh=r(Wr);Rr=a(oh,"BLOCKQUOTE",{});var th=r(Rr);Hr=a(th,"P",{});var nh=r(Hr);_p=l(nh,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),nh.forEach(o),th.forEach(o),oh.forEach(o),eh.forEach(o),gp=c(M),Kr=a(M,"BLOCKQUOTE",{});var ah=r(Kr);Qr=a(ah,"BLOCKQUOTE",{});var rh=r(Qr);Vr=a(rh,"BLOCKQUOTE",{});var sh=r(Vr);Jr=a(sh,"P",{});var lh=r(Jr);bp=l(lh,"tokenizer.decode(predictions).split()"),lh.forEach(o),sh.forEach(o),rh.forEach(o),ah.forEach(o),M.forEach(o),kp=c(ne),ot=a(ne,"DIV",{class:!0});var cl=r(ot);v($n.$$.fragment,cl),yp=c(cl),v(tt.$$.fragment,cl),cl.forEach(o),vp=c(ne),nt=a(ne,"DIV",{class:!0});var pl=r(nt);v(xn.$$.fragment,pl),Tp=c(pl),v(at.$$.fragment,pl),pl.forEach(o),ne.forEach(o),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Eh)),m(u,"id","blenderbot-small"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#blenderbot-small"),m(f,"class","relative group"),m(W,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(R,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),m(Q,"rel","nofollow"),m(Z,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot#transformers.BlenderbotModel"),m(he,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),m(D,"id","overview"),m(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(D,"href","#overview"),m(J,"class","relative group"),m(de,"href","https://arxiv.org/pdf/2004.13637.pdf"),m(de,"rel","nofollow"),m(ye,"href","https://huggingface.co/patrickvonplaten"),m(ye,"rel","nofollow"),m(G,"href","https://github.com/facebookresearch/ParlAI"),m(G,"rel","nofollow"),m(fe,"id","transformers.BlenderbotSmallConfig"),m(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fe,"href","#transformers.BlenderbotSmallConfig"),m(ce,"class","relative group"),m(En,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(ht,"href","https://huggingface.co/facebook/blenderbot_small-90M"),m(ht,"rel","nofollow"),m(Mn,"href","/docs/transformers/pr_18116/en/main_classes/configuration#transformers.PretrainedConfig"),m(Cn,"href","/docs/transformers/pr_18116/en/main_classes/configuration#transformers.PretrainedConfig"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"id","transformers.BlenderbotSmallTokenizer"),m(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(So,"href","#transformers.BlenderbotSmallTokenizer"),m(so,"class","relative group"),m(jn,"href","/docs/transformers/pr_18116/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pn,"href","../glossary#token-type-ids"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.BlenderbotSmallTokenizerFast"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.BlenderbotSmallTokenizerFast"),m(io,"class","relative group"),m(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bo,"id","transformers.BlenderbotSmallModel"),m(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Bo,"href","#transformers.BlenderbotSmallModel"),m(co,"class","relative group"),m(Nn,"href","/docs/transformers/pr_18116/en/main_classes/model#transformers.PreTrainedModel"),m(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qt,"rel","nofollow"),m(In,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.BlenderbotSmallForConditionalGeneration"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),m(mo,"class","relative group"),m(An,"href","/docs/transformers/pr_18116/en/main_classes/model#transformers.PreTrainedModel"),m(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pt,"rel","nofollow"),m(Dn,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.BlenderbotSmallForCausalLM"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.BlenderbotSmallForCausalLM"),m(ho,"class","relative group"),m(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.TFBlenderbotSmallModel"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.TFBlenderbotSmallModel"),m(_o,"class","relative group"),m(Gn,"href","/docs/transformers/pr_18116/en/main_classes/model#transformers.TFPreTrainedModel"),m(Rt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Rt,"rel","nofollow"),m(Un,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),m(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Do,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),m(bo,"class","relative group"),m(Wn,"href","/docs/transformers/pr_18116/en/main_classes/model#transformers.TFPreTrainedModel"),m(Xt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Xt,"rel","nofollow"),m(Rn,"href","/docs/transformers/pr_18116/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","transformers.FlaxBlenderbotSmallModel"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#transformers.FlaxBlenderbotSmallModel"),m(yo,"class","relative group"),m(Hn,"href","/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(an,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(an,"rel","nofollow"),m(rn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(rn,"rel","nofollow"),m(sn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(sn,"rel","nofollow"),m(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ln,"rel","nofollow"),m(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(dn,"rel","nofollow"),m(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(vo,"class","relative group"),m(Kn,"href","/docs/transformers/pr_18116/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(gn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(gn,"rel","nofollow"),m(bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(bn,"rel","nofollow"),m(kn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(kn,"rel","nofollow"),m(yn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(yn,"rel","nofollow"),m(vn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(vn,"rel","nofollow"),m(et,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(et,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(Zo,"class","relative group"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,p),_(t,k,g),_(t,f,g),e(f,u),e(u,b),T(d,b,null),e(f,h),e(f,F),e(F,Ce),_(t,ue,g),_(t,z,g),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),e(z,Q),e(Q,V),e(z,Ie),e(z,Z),e(Z,j),e(z,L),e(z,he),e(he,ae),_(t,ze,g),_(t,J,g),e(J,D),e(D,be),T(re,be,null),e(J,N),e(J,ke),e(ke,se),_(t,Be,g),_(t,ee,g),e(ee,le),e(ee,de),e(de,Ae),e(ee,X),_(t,Fe,g),_(t,H,g),e(H,De),_(t,x,g),_(t,q,g),e(q,ie),e(ie,Ze),_(t,Re,g),_(t,O,g),e(O,eo),e(O,ye),e(ye,oo),e(O,Y),e(O,G),e(G,to),e(O,no),_(t,oe,g),_(t,ce,g),e(ce,fe),e(fe,ve),T(Te,ve,null),e(ce,ml),e(ce,sa),e(sa,ul),_(t,cs,g),_(t,we,g),T(ut,we,null),e(we,hl),e(we,ao),e(ao,fl),e(ao,En),e(En,_l),e(ao,gl),e(ao,ht),e(ht,bl),e(ao,kl),e(we,yl),e(we,ro),e(ro,vl),e(ro,Mn),e(Mn,Tl),e(ro,wl),e(ro,Cn),e(Cn,Sl),e(ro,$l),e(we,xl),T(wo,we,null),_(t,ps,g),_(t,so,g),e(so,So),e(So,la),T(ft,la,null),e(so,zl),e(so,da),e(da,Bl),_(t,ms,g),_(t,U,g),T(_t,U,null),e(U,Fl),e(U,ia),e(ia,ql),e(U,El),e(U,gt),e(gt,Ml),e(gt,jn),e(jn,Cl),e(gt,jl),e(U,Ol),e(U,He),T(bt,He,null),e(He,Pl),e(He,ca),e(ca,Ll),e(He,Nl),e(He,pa),e(pa,Il),e(U,Al),e(U,$o),T(kt,$o,null),e($o,Dl),e($o,lo),e(lo,Gl),e(lo,ma),e(ma,Ul),e(lo,Wl),e(lo,ua),e(ua,Rl),e(lo,Hl),e(U,Kl),e(U,Ke),T(yt,Ke,null),e(Ke,Ql),e(Ke,On),e(On,Vl),e(On,Pn),e(Pn,Jl),e(Ke,Xl),e(Ke,ha),e(ha,Yl),e(U,Zl),e(U,Ln),T(vt,Ln,null),_(t,us,g),_(t,io,g),e(io,xo),e(xo,fa),T(Tt,fa,null),e(io,ed),e(io,_a),e(_a,od),_(t,hs,g),_(t,Ge,g),T(wt,Ge,null),e(Ge,td),e(Ge,St),e(St,nd),e(St,ga),e(ga,ad),e(St,rd),e(Ge,sd),e(Ge,zo),T($t,zo,null),e(zo,ld),e(zo,ba),e(ba,dd),_(t,fs,g),_(t,co,g),e(co,Bo),e(Bo,ka),T(xt,ka,null),e(co,id),e(co,ya),e(ya,cd),_(t,_s,g),_(t,Se,g),T(zt,Se,null),e(Se,pd),e(Se,Bt),e(Bt,md),e(Bt,Nn),e(Nn,ud),e(Bt,hd),e(Se,fd),e(Se,Ft),e(Ft,_d),e(Ft,qt),e(qt,gd),e(Ft,bd),e(Se,kd),e(Se,qe),T(Et,qe,null),e(qe,yd),e(qe,po),e(po,vd),e(po,In),e(In,Td),e(po,wd),e(po,va),e(va,Sd),e(po,$d),e(qe,xd),T(Fo,qe,null),e(qe,zd),T(qo,qe,null),_(t,gs,g),_(t,mo,g),e(mo,Eo),e(Eo,Ta),T(Mt,Ta,null),e(mo,Bd),e(mo,wa),e(wa,Fd),_(t,bs,g),_(t,$e,g),T(Ct,$e,null),e($e,qd),e($e,jt),e(jt,Ed),e(jt,An),e(An,Md),e(jt,Cd),e($e,jd),e($e,Ot),e(Ot,Od),e(Ot,Pt),e(Pt,Pd),e(Ot,Ld),e($e,Nd),e($e,Ee),T(Lt,Ee,null),e(Ee,Id),e(Ee,uo),e(uo,Ad),e(uo,Dn),e(Dn,Dd),e(uo,Gd),e(uo,Sa),e(Sa,Ud),e(uo,Wd),e(Ee,Rd),T(Mo,Ee,null),e(Ee,Hd),T(Co,Ee,null),_(t,ks,g),_(t,ho,g),e(ho,jo),e(jo,$a),T(Nt,$a,null),e(ho,Kd),e(ho,xa),e(xa,Qd),_(t,ys,g),_(t,fo,g),T(It,fo,null),e(fo,Vd),e(fo,Oo),T(At,Oo,null),e(Oo,Jd),T(Po,Oo,null),_(t,vs,g),_(t,_o,g),e(_o,Lo),e(Lo,za),T(Dt,za,null),e(_o,Xd),e(_o,Ba),e(Ba,Yd),_(t,Ts,g),_(t,pe,g),T(Gt,pe,null),e(pe,Zd),e(pe,Ut),e(Ut,ei),e(Ut,Gn),e(Gn,oi),e(Ut,ti),e(pe,ni),e(pe,Wt),e(Wt,ai),e(Wt,Rt),e(Rt,ri),e(Wt,si),e(pe,li),T(No,pe,null),e(pe,di),e(pe,Me),T(Ht,Me,null),e(Me,ii),e(Me,go),e(go,ci),e(go,Un),e(Un,pi),e(go,mi),e(go,Fa),e(Fa,ui),e(go,hi),e(Me,fi),T(Io,Me,null),e(Me,_i),T(Ao,Me,null),_(t,ws,g),_(t,bo,g),e(bo,Do),e(Do,qa),T(Kt,qa,null),e(bo,gi),e(bo,Ea),e(Ea,bi),_(t,Ss,g),_(t,me,g),T(Qt,me,null),e(me,ki),e(me,Vt),e(Vt,yi),e(Vt,Wn),e(Wn,vi),e(Vt,Ti),e(me,wi),e(me,Jt),e(Jt,Si),e(Jt,Xt),e(Xt,$i),e(Jt,xi),e(me,zi),T(Go,me,null),e(me,Bi),e(me,P),T(Yt,P,null),e(P,Fi),e(P,ko),e(ko,qi),e(ko,Rn),e(Rn,Ei),e(ko,Mi),e(ko,Ma),e(Ma,Ci),e(ko,ji),e(P,Oi),T(Uo,P,null),e(P,Pi),e(P,Ca),e(Ca,Li),e(P,Ni),e(P,ja),e(ja,Oa),e(Oa,Pa),e(Pa,La),e(La,Ii),e(P,Ai),e(P,Na),e(Na,Ia),e(Ia,Aa),e(Aa,Da),e(Da,Di),e(P,Gi),e(P,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Ra),e(Ra,Ui),e(P,Wi),e(P,Ha),e(Ha,Ka),e(Ka,Qa),e(Qa,Zt),e(Zt,Ri),e(Zt,Va),e(Va,Hi),e(Zt,Ki),e(P,Qi),e(P,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Za),e(Za,Vi),_(t,$s,g),_(t,yo,g),e(yo,Wo),e(Wo,er),T(en,er,null),e(yo,Ji),e(yo,or),e(or,Xi),_(t,xs,g),_(t,I,g),T(on,I,null),e(I,Yi),e(I,tn),e(tn,Zi),e(tn,Hn),e(Hn,ec),e(tn,oc),e(I,tc),e(I,nn),e(nn,nc),e(nn,an),e(an,ac),e(nn,rc),e(I,sc),e(I,tr),e(tr,lc),e(I,dc),e(I,Ue),e(Ue,nr),e(nr,rn),e(rn,ic),e(Ue,cc),e(Ue,ar),e(ar,sn),e(sn,pc),e(Ue,mc),e(Ue,rr),e(rr,ln),e(ln,uc),e(Ue,hc),e(Ue,sr),e(sr,dn),e(dn,fc),e(I,_c),e(I,Ro),T(cn,Ro,null),e(Ro,gc),T(Ho,Ro,null),e(I,bc),e(I,Ko),T(pn,Ko,null),e(Ko,kc),T(Qo,Ko,null),e(I,yc),e(I,Vo),T(mn,Vo,null),e(Vo,vc),T(Jo,Vo,null),_(t,zs,g),_(t,vo,g),e(vo,Xo),e(Xo,lr),T(un,lr,null),e(vo,Tc),e(vo,dr),e(dr,wc),_(t,Bs,g),_(t,A,g),T(hn,A,null),e(A,Sc),e(A,fn),e(fn,$c),e(fn,Kn),e(Kn,xc),e(fn,zc),e(A,Bc),e(A,_n),e(_n,Fc),e(_n,gn),e(gn,qc),e(_n,Ec),e(A,Mc),e(A,ir),e(ir,Cc),e(A,jc),e(A,We),e(We,cr),e(cr,bn),e(bn,Oc),e(We,Pc),e(We,pr),e(pr,kn),e(kn,Lc),e(We,Nc),e(We,mr),e(mr,yn),e(yn,Ic),e(We,Ac),e(We,ur),e(ur,vn),e(vn,Dc),e(A,Gc),e(A,E),T(Tn,E,null),e(E,Uc),e(E,To),e(To,Wc),e(To,hr),e(hr,Rc),e(To,Hc),e(To,fr),e(fr,Kc),e(To,Qc),e(E,Vc),T(Yo,E,null),e(E,Jc),e(E,_r),e(_r,Xc),e(E,Yc),e(E,gr),e(gr,br),e(br,kr),e(kr,yr),e(yr,Zc),e(E,ep),e(E,vr),e(vr,Tr),e(Tr,wr),e(wr,Sr),e(Sr,op),e(E,tp),e(E,$r),e($r,xr),e(xr,zr),e(zr,Br),e(Br,np),e(E,ap),e(E,Fr),e(Fr,qr),e(qr,wn),e(wn,Zo),e(Zo,et),e(et,Er),T(Sn,Er,null),e(Zo,rp),e(Zo,Mr),e(Mr,sp),e(wn,lp),e(wn,Cr),e(Cr,dp),e(E,ip),e(E,jr),e(jr,cp),e(E,pp),e(E,Or),e(Or,Pr),e(Pr,Lr),e(Lr,Nr),e(Nr,mp),e(E,up),e(E,Ir),e(Ir,Ar),e(Ar,Dr),e(Dr,Gr),e(Gr,hp),e(E,fp),e(E,Ur),e(Ur,Wr),e(Wr,Rr),e(Rr,Hr),e(Hr,_p),e(E,gp),e(E,Kr),e(Kr,Qr),e(Qr,Vr),e(Vr,Jr),e(Jr,bp),e(A,kp),e(A,ot),T($n,ot,null),e(ot,yp),T(tt,ot,null),e(A,vp),e(A,nt),T(xn,nt,null),e(nt,Tp),T(at,nt,null),Fs=!0},p(t,[g]){const zn={};g&2&&(zn.$$scope={dirty:g,ctx:t}),wo.$set(zn);const Xr={};g&2&&(Xr.$$scope={dirty:g,ctx:t}),Fo.$set(Xr);const Yr={};g&2&&(Yr.$$scope={dirty:g,ctx:t}),qo.$set(Yr);const Zr={};g&2&&(Zr.$$scope={dirty:g,ctx:t}),Mo.$set(Zr);const _e={};g&2&&(_e.$$scope={dirty:g,ctx:t}),Co.$set(_e);const es={};g&2&&(es.$$scope={dirty:g,ctx:t}),Po.$set(es);const os={};g&2&&(os.$$scope={dirty:g,ctx:t}),No.$set(os);const ts={};g&2&&(ts.$$scope={dirty:g,ctx:t}),Io.$set(ts);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:t}),Ao.$set(ns);const as={};g&2&&(as.$$scope={dirty:g,ctx:t}),Go.$set(as);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:t}),Uo.$set(Bn);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:t}),Ho.$set(rs);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:t}),Qo.$set(ss);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:t}),Jo.$set(ls);const Fn={};g&2&&(Fn.$$scope={dirty:g,ctx:t}),Yo.$set(Fn);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:t}),tt.$set(ds);const is={};g&2&&(is.$$scope={dirty:g,ctx:t}),at.$set(is)},i(t){Fs||(w(d.$$.fragment,t),w(re.$$.fragment,t),w(Te.$$.fragment,t),w(ut.$$.fragment,t),w(wo.$$.fragment,t),w(ft.$$.fragment,t),w(_t.$$.fragment,t),w(bt.$$.fragment,t),w(kt.$$.fragment,t),w(yt.$$.fragment,t),w(vt.$$.fragment,t),w(Tt.$$.fragment,t),w(wt.$$.fragment,t),w($t.$$.fragment,t),w(xt.$$.fragment,t),w(zt.$$.fragment,t),w(Et.$$.fragment,t),w(Fo.$$.fragment,t),w(qo.$$.fragment,t),w(Mt.$$.fragment,t),w(Ct.$$.fragment,t),w(Lt.$$.fragment,t),w(Mo.$$.fragment,t),w(Co.$$.fragment,t),w(Nt.$$.fragment,t),w(It.$$.fragment,t),w(At.$$.fragment,t),w(Po.$$.fragment,t),w(Dt.$$.fragment,t),w(Gt.$$.fragment,t),w(No.$$.fragment,t),w(Ht.$$.fragment,t),w(Io.$$.fragment,t),w(Ao.$$.fragment,t),w(Kt.$$.fragment,t),w(Qt.$$.fragment,t),w(Go.$$.fragment,t),w(Yt.$$.fragment,t),w(Uo.$$.fragment,t),w(en.$$.fragment,t),w(on.$$.fragment,t),w(cn.$$.fragment,t),w(Ho.$$.fragment,t),w(pn.$$.fragment,t),w(Qo.$$.fragment,t),w(mn.$$.fragment,t),w(Jo.$$.fragment,t),w(un.$$.fragment,t),w(hn.$$.fragment,t),w(Tn.$$.fragment,t),w(Yo.$$.fragment,t),w(Sn.$$.fragment,t),w($n.$$.fragment,t),w(tt.$$.fragment,t),w(xn.$$.fragment,t),w(at.$$.fragment,t),Fs=!0)},o(t){S(d.$$.fragment,t),S(re.$$.fragment,t),S(Te.$$.fragment,t),S(ut.$$.fragment,t),S(wo.$$.fragment,t),S(ft.$$.fragment,t),S(_t.$$.fragment,t),S(bt.$$.fragment,t),S(kt.$$.fragment,t),S(yt.$$.fragment,t),S(vt.$$.fragment,t),S(Tt.$$.fragment,t),S(wt.$$.fragment,t),S($t.$$.fragment,t),S(xt.$$.fragment,t),S(zt.$$.fragment,t),S(Et.$$.fragment,t),S(Fo.$$.fragment,t),S(qo.$$.fragment,t),S(Mt.$$.fragment,t),S(Ct.$$.fragment,t),S(Lt.$$.fragment,t),S(Mo.$$.fragment,t),S(Co.$$.fragment,t),S(Nt.$$.fragment,t),S(It.$$.fragment,t),S(At.$$.fragment,t),S(Po.$$.fragment,t),S(Dt.$$.fragment,t),S(Gt.$$.fragment,t),S(No.$$.fragment,t),S(Ht.$$.fragment,t),S(Io.$$.fragment,t),S(Ao.$$.fragment,t),S(Kt.$$.fragment,t),S(Qt.$$.fragment,t),S(Go.$$.fragment,t),S(Yt.$$.fragment,t),S(Uo.$$.fragment,t),S(en.$$.fragment,t),S(on.$$.fragment,t),S(cn.$$.fragment,t),S(Ho.$$.fragment,t),S(pn.$$.fragment,t),S(Qo.$$.fragment,t),S(mn.$$.fragment,t),S(Jo.$$.fragment,t),S(un.$$.fragment,t),S(hn.$$.fragment,t),S(Tn.$$.fragment,t),S(Yo.$$.fragment,t),S(Sn.$$.fragment,t),S($n.$$.fragment,t),S(tt.$$.fragment,t),S(xn.$$.fragment,t),S(at.$$.fragment,t),Fs=!1},d(t){o(p),t&&o(k),t&&o(f),$(d),t&&o(ue),t&&o(z),t&&o(ze),t&&o(J),$(re),t&&o(Be),t&&o(ee),t&&o(Fe),t&&o(H),t&&o(x),t&&o(q),t&&o(Re),t&&o(O),t&&o(oe),t&&o(ce),$(Te),t&&o(cs),t&&o(we),$(ut),$(wo),t&&o(ps),t&&o(so),$(ft),t&&o(ms),t&&o(U),$(_t),$(bt),$(kt),$(yt),$(vt),t&&o(us),t&&o(io),$(Tt),t&&o(hs),t&&o(Ge),$(wt),$($t),t&&o(fs),t&&o(co),$(xt),t&&o(_s),t&&o(Se),$(zt),$(Et),$(Fo),$(qo),t&&o(gs),t&&o(mo),$(Mt),t&&o(bs),t&&o($e),$(Ct),$(Lt),$(Mo),$(Co),t&&o(ks),t&&o(ho),$(Nt),t&&o(ys),t&&o(fo),$(It),$(At),$(Po),t&&o(vs),t&&o(_o),$(Dt),t&&o(Ts),t&&o(pe),$(Gt),$(No),$(Ht),$(Io),$(Ao),t&&o(ws),t&&o(bo),$(Kt),t&&o(Ss),t&&o(me),$(Qt),$(Go),$(Yt),$(Uo),t&&o($s),t&&o(yo),$(en),t&&o(xs),t&&o(I),$(on),$(cn),$(Ho),$(pn),$(Qo),$(mn),$(Jo),t&&o(zs),t&&o(vo),$(un),t&&o(Bs),t&&o(A),$(hn),$(Tn),$(Yo),$(Sn),$($n),$(tt),$(xn),$(at)}}}const Eh={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Mh(B){return mh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ih extends dh{constructor(p){super();ih(this,p,Mh,qh,ch,{})}}export{Ih as default,Eh as metadata};
