import{S as bm,i as ym,s as xm,e as o,k as d,w as M,t as r,M as wm,c as s,d as t,m as c,a,x as b,h as i,b as p,F as e,g as _,y,q as x,o as w,B as $,v as $m,L as qt}from"../../chunks/vendor-6b77c823.js";import{T as bn}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-1088f2fb.js";import{C as ye}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as de}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as jt}from"../../chunks/ExampleCodeBlock-5212b321.js";function zm(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianModel, MarianConfig

# Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration
configuration = MarianConfig()

# Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration
model = MarianModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianModel, MarianConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MarianConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=o("p"),v=r("Examples:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Examples:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function jm(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
src_texts = ["I am a small frog.", "Tom asked his teacher for advice."]
tgt_texts = ["Ich bin ein kleiner Frosch.", "Tom bat seinen Lehrer um Rat."]  # optional
inputs = tokenizer(src_texts, return_tensors="pt", padding=True)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_texts, return_tensors="pt", padding=True)
inputs["labels"] = labels["input_ids"]

outputs = model(**inputs)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_texts = [<span class="hljs-string">&quot;I am a small frog.&quot;</span>, <span class="hljs-string">&quot;Tom asked his teacher for advice.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_texts = [<span class="hljs-string">&quot;Ich bin ein kleiner Frosch.&quot;</span>, <span class="hljs-string">&quot;Tom bat seinen Lehrer um Rat.&quot;</span>]  <span class="hljs-comment"># optional</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(src_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-comment"># keys  [input_ids, attention_mask, labels].</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`}}),{c(){h=o("p"),v=r("Examples:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Examples:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function qm(z){let h,v,g,u,k;return{c(){h=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var j=a(g);u=i(j,"Module"),j.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,v),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Em(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer, MarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = MarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer(
    "<pad> Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen",
    return_tensors="pt",
    add_special_tokens=False,
)
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&lt;pad&gt; Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>    add_special_tokens=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">26</span>, <span class="hljs-number">512</span>]`}}),{c(){h=o("p"),v=r("Example:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Example:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function Fm(z){let h,v,g,u,k;return{c(){h=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var j=a(g);u=i(j,"Module"),j.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,v),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Pm(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer, MarianMTModel

src = "fr"  # source language
trg = "en"  # target language

model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"
model = MarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)

sample_text = "o\xF9 est l'arr\xEAt de bus ?"
batch = tokenizer([sample_text], return_tensors="pt")

generated_ids = model.generate(**batch)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Where&#x27;s the bus stop?&quot;</span>`}}),{c(){h=o("p"),v=r("Examples:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Examples:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function Nm(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-fr-en")
model = MarianForCausalLM.from_pretrained("Helsinki-NLP/opus-mt-fr-en", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){h=o("p"),v=r("Example:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Example:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function Cm(z){let h,v,g,u,k,l,m,j,Ce,ce,E,ue,Y,Le,K,Z,Ie,xe,G,O,we,L,F,N,X,Q,me,Ae,J,P,fe,C,Oe,ee,_e,te,ne,oe,Se,S,He,H,D;return{c(){h=o("p"),v=r("TF 2.0 models accepts two formats as inputs:"),g=d(),u=o("ul"),k=o("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),j=o("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=d(),E=o("p"),ue=r("This second option is useful when using "),Y=o("code"),Le=r("tf.keras.Model.fit"),K=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=o("code"),Ie=r("model(inputs)"),xe=r("."),G=d(),O=o("p"),we=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),L=d(),F=o("ul"),N=o("li"),X=r("a single Tensor with "),Q=o("code"),me=r("input_ids"),Ae=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),fe=d(),C=o("li"),Oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=o("code"),_e=r("model([input_ids, attention_mask])"),te=r(" or "),ne=o("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),Se=d(),S=o("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=s(T,"P",{});var q=a(h);v=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),g=c(T),u=s(T,"UL",{});var ge=a(u);k=s(ge,"LI",{});var Ze=a(k);l=i(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),m=c(ge),j=s(ge,"LI",{});var ke=a(j);Ce=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),ge.forEach(t),ce=c(T),E=s(T,"P",{});var U=a(E);ue=i(U,"This second option is useful when using "),Y=s(U,"CODE",{});var Xe=a(Y);Le=i(Xe,"tf.keras.Model.fit"),Xe.forEach(t),K=i(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=s(U,"CODE",{});var Qe=a(Z);Ie=i(Qe,"model(inputs)"),Qe.forEach(t),xe=i(U,"."),U.forEach(t),G=c(T),O=s(T,"P",{});var De=a(O);we=i(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),L=c(T),F=s(T,"UL",{});var I=a(F);N=s(I,"LI",{});var se=a(N);X=i(se,"a single Tensor with "),Q=s(se,"CODE",{});var et=a(Q);me=i(et,"input_ids"),et.forEach(t),Ae=i(se," only and nothing else: "),J=s(se,"CODE",{});var Ue=a(J);P=i(Ue,"model(input_ids)"),Ue.forEach(t),se.forEach(t),fe=c(I),C=s(I,"LI",{});var W=a(C);Oe=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(W,"CODE",{});var tt=a(ee);_e=i(tt,"model([input_ids, attention_mask])"),tt.forEach(t),te=i(W," or "),ne=s(W,"CODE",{});var nt=a(ne);oe=i(nt,"model([input_ids, attention_mask, token_type_ids])"),nt.forEach(t),W.forEach(t),Se=c(I),S=s(I,"LI",{});var ae=a(S);He=i(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s(ae,"CODE",{});var ve=a(H);D=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),ae.forEach(t),I.forEach(t)},m(T,q){_(T,h,q),e(h,v),_(T,g,q),_(T,u,q),e(u,k),e(k,l),e(u,m),e(u,j),e(j,Ce),_(T,ce,q),_(T,E,q),e(E,ue),e(E,Y),e(Y,Le),e(E,K),e(E,Z),e(Z,Ie),e(E,xe),_(T,G,q),_(T,O,q),e(O,we),_(T,L,q),_(T,F,q),e(F,N),e(N,X),e(N,Q),e(Q,me),e(N,Ae),e(N,J),e(J,P),e(F,fe),e(F,C),e(C,Oe),e(C,ee),e(ee,_e),e(C,te),e(C,ne),e(ne,oe),e(F,Se),e(F,S),e(S,He),e(S,H),e(H,D)},d(T){T&&t(h),T&&t(g),T&&t(u),T&&t(ce),T&&t(E),T&&t(G),T&&t(O),T&&t(L),T&&t(F)}}}function Lm(z){let h,v,g,u,k;return{c(){h=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var j=a(g);u=i(j,"Module"),j.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,v),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Im(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer, TFMarianModel
import tensorflow as tf

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = TFMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=o("p"),v=r("Example:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Example:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function Am(z){let h,v,g,u,k,l,m,j,Ce,ce,E,ue,Y,Le,K,Z,Ie,xe,G,O,we,L,F,N,X,Q,me,Ae,J,P,fe,C,Oe,ee,_e,te,ne,oe,Se,S,He,H,D;return{c(){h=o("p"),v=r("TF 2.0 models accepts two formats as inputs:"),g=d(),u=o("ul"),k=o("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),j=o("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=d(),E=o("p"),ue=r("This second option is useful when using "),Y=o("code"),Le=r("tf.keras.Model.fit"),K=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=o("code"),Ie=r("model(inputs)"),xe=r("."),G=d(),O=o("p"),we=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),L=d(),F=o("ul"),N=o("li"),X=r("a single Tensor with "),Q=o("code"),me=r("input_ids"),Ae=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),fe=d(),C=o("li"),Oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=o("code"),_e=r("model([input_ids, attention_mask])"),te=r(" or "),ne=o("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),Se=d(),S=o("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=s(T,"P",{});var q=a(h);v=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),g=c(T),u=s(T,"UL",{});var ge=a(u);k=s(ge,"LI",{});var Ze=a(k);l=i(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),m=c(ge),j=s(ge,"LI",{});var ke=a(j);Ce=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),ge.forEach(t),ce=c(T),E=s(T,"P",{});var U=a(E);ue=i(U,"This second option is useful when using "),Y=s(U,"CODE",{});var Xe=a(Y);Le=i(Xe,"tf.keras.Model.fit"),Xe.forEach(t),K=i(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=s(U,"CODE",{});var Qe=a(Z);Ie=i(Qe,"model(inputs)"),Qe.forEach(t),xe=i(U,"."),U.forEach(t),G=c(T),O=s(T,"P",{});var De=a(O);we=i(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),L=c(T),F=s(T,"UL",{});var I=a(F);N=s(I,"LI",{});var se=a(N);X=i(se,"a single Tensor with "),Q=s(se,"CODE",{});var et=a(Q);me=i(et,"input_ids"),et.forEach(t),Ae=i(se," only and nothing else: "),J=s(se,"CODE",{});var Ue=a(J);P=i(Ue,"model(input_ids)"),Ue.forEach(t),se.forEach(t),fe=c(I),C=s(I,"LI",{});var W=a(C);Oe=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(W,"CODE",{});var tt=a(ee);_e=i(tt,"model([input_ids, attention_mask])"),tt.forEach(t),te=i(W," or "),ne=s(W,"CODE",{});var nt=a(ne);oe=i(nt,"model([input_ids, attention_mask, token_type_ids])"),nt.forEach(t),W.forEach(t),Se=c(I),S=s(I,"LI",{});var ae=a(S);He=i(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s(ae,"CODE",{});var ve=a(H);D=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),ae.forEach(t),I.forEach(t)},m(T,q){_(T,h,q),e(h,v),_(T,g,q),_(T,u,q),e(u,k),e(k,l),e(u,m),e(u,j),e(j,Ce),_(T,ce,q),_(T,E,q),e(E,ue),e(E,Y),e(Y,Le),e(E,K),e(E,Z),e(Z,Ie),e(E,xe),_(T,G,q),_(T,O,q),e(O,we),_(T,L,q),_(T,F,q),e(F,N),e(N,X),e(N,Q),e(Q,me),e(N,Ae),e(N,J),e(J,P),e(F,fe),e(F,C),e(C,Oe),e(C,ee),e(ee,_e),e(C,te),e(C,ne),e(ne,oe),e(F,Se),e(F,S),e(S,He),e(S,H),e(H,D)},d(T){T&&t(h),T&&t(g),T&&t(u),T&&t(ce),T&&t(E),T&&t(G),T&&t(O),T&&t(L),T&&t(F)}}}function Om(z){let h,v,g,u,k;return{c(){h=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var j=a(g);u=i(j,"Module"),j.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,v),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Sm(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
from typing import List

src = "fr"  # source language
trg = "en"  # target language
sample_text = "o\xF9 est l'arr\xEAt de bus ?"
model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"

model = TFMarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)
batch = tokenizer([sample_text], return_tensors="tf")
gen = model.generate(**batch)
tokenizer.batch_decode(gen, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),{c(){h=o("p"),v=r("Examples:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Examples:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function Hm(z){let h,v,g,u,k;return{c(){h=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var j=a(g);u=i(j,"Module"),j.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,v),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Dm(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = FlaxMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=o("p"),v=r("Example:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Example:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function Um(z){let h,v,g,u,k;return{c(){h=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var j=a(g);u=i(j,"Module"),j.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,v),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Wm(z){let h,v,g,u,k;return u=new ye({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

model = FlaxMarianMTModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")
tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")

text = "My friends are cool but they eat too many carbs."
input_ids = tokenizer(text, max_length=64, return_tensors="jax").input_ids

sequences = model.generate(input_ids, max_length=64, num_beams=2).sequences

outputs = tokenizer.batch_decode(sequences, skip_special_tokens=True)
# should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianMTModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(text, max_length=<span class="hljs-number">64</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, max_length=<span class="hljs-number">64</span>, num_beams=<span class="hljs-number">2</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`}}),{c(){h=o("p"),v=r("Example:"),g=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);v=i(m,"Example:"),m.forEach(t),g=c(l),b(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,v),_(l,g,m),y(u,l,m),k=!0},p:qt,i(l){k||(x(u.$$.fragment,l),k=!0)},o(l){w(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),$(u,l)}}}function Rm(z){let h,v,g,u,k,l,m,j,Ce,ce,E,ue,Y,Le,K,Z,Ie,xe,G,O,we,L,F,N,X,Q,me,Ae,J,P,fe,C,Oe,ee,_e,te,ne,oe,Se,S,He,H,D,T,q,ge,Ze,ke,U,Xe,Qe,De,I,se,et,Ue,W,tt,nt,ae,ve,xi,ns,wi,$i,zi,ot,yn,ji,Cs,qi,Ei,Fi,xn,Pi,Ls,Ni,Ci,Li,st,Ii,Is,Ai,Oi,As,Si,Hi,Di,Os,wn,Ui,Ss,Wi,Ri,Vi,Hs,$n,Bi,zn,Gi,Ji,er,at,Et,Ds,jn,Yi,Us,Ki,tr,$e,os,Zi,Ws,Xi,Qi,qn,el,En,tl,nl,ol,rt,sl,Rs,al,rl,Vs,il,ll,dl,Bs,cl,nr,it,Ft,Gs,Fn,pl,Js,hl,or,Ve,Ys,ul,ml,Ks,Pn,fl,_l,Zs,Nn,gl,sr,lt,Pt,Xs,Cn,kl,Qs,vl,ar,ze,Ln,Tl,ea,Ml,bl,yl,In,xl,ta,wl,$l,zl,An,jl,On,ql,El,Fl,Sn,Pl,na,Nl,Cl,rr,Nt,Ll,Hn,Il,Al,ir,Dn,lr,ss,Ol,dr,Un,cr,dt,Ct,oa,Wn,Sl,sa,Hl,pr,as,Dl,hr,Rn,ur,rs,Ul,mr,Vn,fr,ct,Lt,aa,Bn,Wl,ra,Rl,_r,Te,Gn,Vl,pt,Bl,is,Gl,Jl,Jn,Yl,Kl,Zl,ht,Xl,ls,Ql,ed,ds,td,nd,od,It,gr,ut,At,ia,Yn,sd,la,ad,kr,re,Kn,rd,Zn,id,Xn,ld,dd,cd,Qn,pd,cs,hd,ud,md,Ot,fd,St,eo,_d,da,gd,vr,mt,Ht,ca,to,kd,pa,vd,Tr,Me,no,Td,oo,Md,ps,bd,yd,xd,so,wd,ao,$d,zd,jd,je,ro,qd,ft,Ed,hs,Fd,Pd,ha,Nd,Cd,Ld,Dt,Id,Ut,Mr,_t,Wt,ua,io,Ad,ma,Od,br,be,lo,Sd,co,Hd,us,Dd,Ud,Wd,po,Rd,ho,Vd,Bd,Gd,pe,uo,Jd,gt,Yd,ms,Kd,Zd,fa,Xd,Qd,ec,Rt,tc,mo,nc,fo,oc,sc,ac,Vt,yr,kt,Bt,_a,_o,rc,ga,ic,xr,vt,go,lc,Gt,ko,dc,Jt,wr,Tt,Yt,ka,vo,cc,va,pc,$r,ie,To,hc,Mo,uc,fs,mc,fc,_c,bo,gc,yo,kc,vc,Tc,Kt,Mc,qe,xo,bc,Mt,yc,_s,xc,wc,Ta,$c,zc,jc,Zt,qc,Xt,zr,bt,Qt,Ma,wo,Ec,ba,Fc,jr,le,$o,Pc,zo,Nc,gs,Cc,Lc,Ic,jo,Ac,qo,Oc,Sc,Hc,en,Dc,he,Eo,Uc,yt,Wc,ks,Rc,Vc,ya,Bc,Gc,Jc,tn,Yc,Fo,Kc,Po,Zc,Xc,Qc,nn,qr,xt,on,xa,No,ep,wa,tp,Er,R,Co,np,Lo,op,vs,sp,ap,rp,Io,ip,Ao,lp,dp,cp,$a,pp,hp,We,za,Oo,up,mp,ja,So,fp,_p,qa,Ho,gp,kp,Ea,Do,vp,Tp,Ee,Uo,Mp,wt,bp,Fa,yp,xp,Pa,wp,$p,zp,sn,jp,an,Fr,$t,rn,Na,Wo,qp,Ca,Ep,Pr,V,Ro,Fp,Vo,Pp,Ts,Np,Cp,Lp,Bo,Ip,Go,Ap,Op,Sp,La,Hp,Dp,Re,Ia,Jo,Up,Wp,Aa,Yo,Rp,Vp,Oa,Ko,Bp,Gp,Sa,Zo,Jp,Yp,Fe,Xo,Kp,zt,Zp,Ha,Xp,Qp,Da,eh,th,nh,ln,oh,dn,Nr;return l=new de({}),X=new de({}),jn=new de({}),Fn=new de({}),Cn=new de({}),Dn=new ye({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fra<< this is a sentence in english that we want to translate to french",
    ">>por<< This should go to portuguese",
    ">>esp<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-roa"
tokenizer = MarianTokenizer.from_pretrained(model_name)
print(tokenizer.supported_language_codes)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
[tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fra&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;por&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;esp&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-roa&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.supported_language_codes)
[<span class="hljs-string">&#x27;&gt;&gt;zlm_Latn&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;mfe&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;hat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;pap&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ast&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;cat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ind&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;glg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;wln&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;spa&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;fra&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ron&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;por&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ita&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;oci&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;arg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;min&lt;&lt;&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>[tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>,
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Un=new ye({props:{code:`from huggingface_hub import list_models

model_list = list_models()
org = "Helsinki-NLP"
model_ids = [x.modelId for x in model_list if x.modelId.startswith(org)]
suffix = [x.split("/")[1] for x in model_ids]
old_style_multi_models = [f"{org}/{s}" for s in suffix if s != s.lower()]`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&quot;/&quot;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&quot;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&quot;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),Wn=new de({}),Rn=new ye({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
 'Helsinki-NLP/opus-mt-ROMANCE-en',
 'Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA',
 'Helsinki-NLP/opus-mt-de-ZH',
 'Helsinki-NLP/opus-mt-en-CELTIC',
 'Helsinki-NLP/opus-mt-en-ROMANCE',
 'Helsinki-NLP/opus-mt-es-NORWAY',
 'Helsinki-NLP/opus-mt-fi-NORWAY',
 'Helsinki-NLP/opus-mt-fi-ZH',
 'Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI',
 'Helsinki-NLP/opus-mt-sv-NORWAY',
 'Helsinki-NLP/opus-mt-sv-ZH']
GROUP_MEMBERS = {
 'ZH': ['cmn', 'cn', 'yue', 'ze_zh', 'zh_cn', 'zh_CN', 'zh_HK', 'zh_tw', 'zh_TW', 'zh_yue', 'zhs', 'zht', 'zh'],
 'ROMANCE': ['fr', 'fr_BE', 'fr_CA', 'fr_FR', 'wa', 'frp', 'oc', 'ca', 'rm', 'lld', 'fur', 'lij', 'lmo', 'es', 'es_AR', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_ES', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PE', 'es_PR', 'es_SV', 'es_UY', 'es_VE', 'pt', 'pt_br', 'pt_BR', 'pt_PT', 'gl', 'lad', 'an', 'mwl', 'it', 'it_IT', 'co', 'nap', 'scn', 'vec', 'sc', 'ro', 'la'],
 'NORTH_EU': ['de', 'nl', 'fy', 'af', 'da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SCANDINAVIA': ['da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SAMI': ['se', 'sma', 'smj', 'smn', 'sms'],
 'NORWAY': ['nb_NO', 'nb', 'nn_NO', 'nn', 'nog', 'no_nb', 'no'],
 'CELTIC': ['ga', 'cy', 'br', 'gd', 'kw', 'gv']
}`,highlighted:`[<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-ROMANCE-en&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-de-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-CELTIC&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-ROMANCE&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-es-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-ZH&#x27;</span>]
GROUP_MEMBERS = {
 <span class="hljs-string">&#x27;ZH&#x27;</span>: [<span class="hljs-string">&#x27;cmn&#x27;</span>, <span class="hljs-string">&#x27;cn&#x27;</span>, <span class="hljs-string">&#x27;yue&#x27;</span>, <span class="hljs-string">&#x27;ze_zh&#x27;</span>, <span class="hljs-string">&#x27;zh_cn&#x27;</span>, <span class="hljs-string">&#x27;zh_CN&#x27;</span>, <span class="hljs-string">&#x27;zh_HK&#x27;</span>, <span class="hljs-string">&#x27;zh_tw&#x27;</span>, <span class="hljs-string">&#x27;zh_TW&#x27;</span>, <span class="hljs-string">&#x27;zh_yue&#x27;</span>, <span class="hljs-string">&#x27;zhs&#x27;</span>, <span class="hljs-string">&#x27;zht&#x27;</span>, <span class="hljs-string">&#x27;zh&#x27;</span>],
 <span class="hljs-string">&#x27;ROMANCE&#x27;</span>: [<span class="hljs-string">&#x27;fr&#x27;</span>, <span class="hljs-string">&#x27;fr_BE&#x27;</span>, <span class="hljs-string">&#x27;fr_CA&#x27;</span>, <span class="hljs-string">&#x27;fr_FR&#x27;</span>, <span class="hljs-string">&#x27;wa&#x27;</span>, <span class="hljs-string">&#x27;frp&#x27;</span>, <span class="hljs-string">&#x27;oc&#x27;</span>, <span class="hljs-string">&#x27;ca&#x27;</span>, <span class="hljs-string">&#x27;rm&#x27;</span>, <span class="hljs-string">&#x27;lld&#x27;</span>, <span class="hljs-string">&#x27;fur&#x27;</span>, <span class="hljs-string">&#x27;lij&#x27;</span>, <span class="hljs-string">&#x27;lmo&#x27;</span>, <span class="hljs-string">&#x27;es&#x27;</span>, <span class="hljs-string">&#x27;es_AR&#x27;</span>, <span class="hljs-string">&#x27;es_CL&#x27;</span>, <span class="hljs-string">&#x27;es_CO&#x27;</span>, <span class="hljs-string">&#x27;es_CR&#x27;</span>, <span class="hljs-string">&#x27;es_DO&#x27;</span>, <span class="hljs-string">&#x27;es_EC&#x27;</span>, <span class="hljs-string">&#x27;es_ES&#x27;</span>, <span class="hljs-string">&#x27;es_GT&#x27;</span>, <span class="hljs-string">&#x27;es_HN&#x27;</span>, <span class="hljs-string">&#x27;es_MX&#x27;</span>, <span class="hljs-string">&#x27;es_NI&#x27;</span>, <span class="hljs-string">&#x27;es_PA&#x27;</span>, <span class="hljs-string">&#x27;es_PE&#x27;</span>, <span class="hljs-string">&#x27;es_PR&#x27;</span>, <span class="hljs-string">&#x27;es_SV&#x27;</span>, <span class="hljs-string">&#x27;es_UY&#x27;</span>, <span class="hljs-string">&#x27;es_VE&#x27;</span>, <span class="hljs-string">&#x27;pt&#x27;</span>, <span class="hljs-string">&#x27;pt_br&#x27;</span>, <span class="hljs-string">&#x27;pt_BR&#x27;</span>, <span class="hljs-string">&#x27;pt_PT&#x27;</span>, <span class="hljs-string">&#x27;gl&#x27;</span>, <span class="hljs-string">&#x27;lad&#x27;</span>, <span class="hljs-string">&#x27;an&#x27;</span>, <span class="hljs-string">&#x27;mwl&#x27;</span>, <span class="hljs-string">&#x27;it&#x27;</span>, <span class="hljs-string">&#x27;it_IT&#x27;</span>, <span class="hljs-string">&#x27;co&#x27;</span>, <span class="hljs-string">&#x27;nap&#x27;</span>, <span class="hljs-string">&#x27;scn&#x27;</span>, <span class="hljs-string">&#x27;vec&#x27;</span>, <span class="hljs-string">&#x27;sc&#x27;</span>, <span class="hljs-string">&#x27;ro&#x27;</span>, <span class="hljs-string">&#x27;la&#x27;</span>],
 <span class="hljs-string">&#x27;NORTH_EU&#x27;</span>: [<span class="hljs-string">&#x27;de&#x27;</span>, <span class="hljs-string">&#x27;nl&#x27;</span>, <span class="hljs-string">&#x27;fy&#x27;</span>, <span class="hljs-string">&#x27;af&#x27;</span>, <span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SCANDINAVIA&#x27;</span>: [<span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SAMI&#x27;</span>: [<span class="hljs-string">&#x27;se&#x27;</span>, <span class="hljs-string">&#x27;sma&#x27;</span>, <span class="hljs-string">&#x27;smj&#x27;</span>, <span class="hljs-string">&#x27;smn&#x27;</span>, <span class="hljs-string">&#x27;sms&#x27;</span>],
 <span class="hljs-string">&#x27;NORWAY&#x27;</span>: [<span class="hljs-string">&#x27;nb_NO&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn_NO&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;nog&#x27;</span>, <span class="hljs-string">&#x27;no_nb&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>],
 <span class="hljs-string">&#x27;CELTIC&#x27;</span>: [<span class="hljs-string">&#x27;ga&#x27;</span>, <span class="hljs-string">&#x27;cy&#x27;</span>, <span class="hljs-string">&#x27;br&#x27;</span>, <span class="hljs-string">&#x27;gd&#x27;</span>, <span class="hljs-string">&#x27;kw&#x27;</span>, <span class="hljs-string">&#x27;gv&#x27;</span>]
}`}}),Vn=new ye({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fr<< this is a sentence in english that we want to translate to french",
    ">>pt<< This should go to portuguese",
    ">>es<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-ROMANCE"
tokenizer = MarianTokenizer.from_pretrained(model_name)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
tgt_text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fr&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;pt&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;es&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-ROMANCE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = [tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>, 
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Bn=new de({}),Gn=new B({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"decoder_vocab_size",val:" = None"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"share_encoder_decoder_embeddings",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MarianConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MarianConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MarianConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MarianConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MarianConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MarianConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MarianConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MarianConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MarianConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MarianConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MarianConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/configuration_marian.py#L34"}}),It=new jt({props:{anchor:"transformers.MarianConfig.example",$$slots:{default:[zm]},$$scope:{ctx:z}}}),Yn=new de({}),Kn=new B({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"vocab",val:""},{name:"target_vocab_file",val:" = None"},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"separate_vocabs",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the source language.`,name:"source_spm"},{anchor:"transformers.MarianTokenizer.target_spm",description:`<strong>target_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the target language.`,name:"target_spm"},{anchor:"transformers.MarianTokenizer.source_lang",description:`<strong>source_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"source_lang"},{anchor:"transformers.MarianTokenizer.target_lang",description:`<strong>target_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"target_lang"},{anchor:"transformers.MarianTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MarianTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MarianTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MarianTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sentence length the model accepts.`,name:"model_max_length"},{anchor:"transformers.MarianTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.MarianTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/tokenization_marian.py#L60"}}),Ot=new jt({props:{anchor:"transformers.MarianTokenizer.example",$$slots:{default:[jm]},$$scope:{ctx:z}}}),eo=new B({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/tokenization_marian.py#L282"}}),to=new de({}),no=new B({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_marian.py#L1083"}}),ro=new B({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_marian.py#L1165",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dt=new bn({props:{$$slots:{default:[qm]},$$scope:{ctx:z}}}),Ut=new jt({props:{anchor:"transformers.MarianModel.forward.example",$$slots:{default:[Em]},$$scope:{ctx:z}}}),io=new de({}),lo=new B({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_marian.py#L1267"}}),uo=new B({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianMTModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianMTModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianMTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_marian.py#L1390",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new bn({props:{$$slots:{default:[Fm]},$$scope:{ctx:z}}}),Vt=new jt({props:{anchor:"transformers.MarianMTModel.forward.example",$$slots:{default:[Pm]},$$scope:{ctx:z}}}),_o=new de({}),go=new B({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_marian.py#L1534"}}),ko=new B({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MarianForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MarianForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_marian.py#L1565",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new jt({props:{anchor:"transformers.MarianForCausalLM.forward.example",$$slots:{default:[Nm]},$$scope:{ctx:z}}}),vo=new de({}),To=new B({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_tf_marian.py#L1157"}}),Kt=new bn({props:{$$slots:{default:[Cm]},$$scope:{ctx:z}}}),xo=new B({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_tf_marian.py#L1169",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zt=new bn({props:{$$slots:{default:[Lm]},$$scope:{ctx:z}}}),Xt=new jt({props:{anchor:"transformers.TFMarianModel.call.example",$$slots:{default:[Im]},$$scope:{ctx:z}}}),wo=new de({}),$o=new B({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_tf_marian.py#L1243"}}),en=new bn({props:{$$slots:{default:[Am]},$$scope:{ctx:z}}}),Eo=new B({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianMTModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianMTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianMTModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianMTModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianMTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianMTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianMTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianMTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianMTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_tf_marian.py#L1276",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tn=new bn({props:{$$slots:{default:[Om]},$$scope:{ctx:z}}}),nn=new jt({props:{anchor:"transformers.TFMarianMTModel.call.example",$$slots:{default:[Sm]},$$scope:{ctx:z}}}),No=new de({}),Co=new B({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_flax_marian.py#L1195"}}),Uo=new B({props:{name:"__call__",anchor:"transformers.FlaxMarianModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_flax_marian.py#L1130",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new bn({props:{$$slots:{default:[Hm]},$$scope:{ctx:z}}}),an=new jt({props:{anchor:"transformers.FlaxMarianModel.__call__.example",$$slots:{default:[Dm]},$$scope:{ctx:z}}}),Wo=new de({}),Ro=new B({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_flax_marian.py#L1281"}}),Xo=new B({props:{name:"__call__",anchor:"transformers.FlaxMarianMTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianMTModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/marian/modeling_flax_marian.py#L1130",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new bn({props:{$$slots:{default:[Um]},$$scope:{ctx:z}}}),dn=new jt({props:{anchor:"transformers.FlaxMarianMTModel.__call__.example",$$slots:{default:[Wm]},$$scope:{ctx:z}}}),{c(){h=o("meta"),v=d(),g=o("h1"),u=o("a"),k=o("span"),M(l.$$.fragment),m=d(),j=o("span"),Ce=r("MarianMT"),ce=d(),E=o("p"),ue=o("strong"),Y=r("Bugs:"),Le=r(" If you see something strange, file a "),K=o("a"),Z=r("Github Issue"),Ie=r(`
and assign @patrickvonplaten.`),xe=d(),G=o("p"),O=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),we=d(),L=o("h2"),F=o("a"),N=o("span"),M(X.$$.fragment),Q=d(),me=o("span"),Ae=r("Implementation Notes"),J=d(),P=o("ul"),fe=o("li"),C=o("p"),Oe=r("Each model is about 298 MB on disk, there are more than 1,000 models."),ee=d(),_e=o("li"),te=o("p"),ne=r("The list of supported language pairs can be found "),oe=o("a"),Se=r("here"),S=r("."),He=d(),H=o("li"),D=o("p"),T=r("Models were originally trained by "),q=o("a"),ge=r("J\xF6rg Tiedemann"),Ze=r(" using the "),ke=o("a"),U=r("Marian"),Xe=r(" C++ library, which supports fast training and translation."),Qe=d(),De=o("li"),I=o("p"),se=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),et=d(),Ue=o("li"),W=o("p"),tt=r("The 80 opus models that require BPE preprocessing are not supported."),nt=d(),ae=o("li"),ve=o("p"),xi=r("The modeling code is the same as "),ns=o("a"),wi=r("BartForConditionalGeneration"),$i=r(" with a few minor modifications:"),zi=d(),ot=o("ul"),yn=o("li"),ji=r("static (sinusoid) positional embeddings ("),Cs=o("code"),qi=r("MarianConfig.static_position_embeddings=True"),Ei=r(")"),Fi=d(),xn=o("li"),Pi=r("no layernorm_embedding ("),Ls=o("code"),Ni=r("MarianConfig.normalize_embedding=False"),Ci=r(")"),Li=d(),st=o("li"),Ii=r("the model starts generating with "),Is=o("code"),Ai=r("pad_token_id"),Oi=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),As=o("code"),Si=r("<s/>"),Hi=r("),"),Di=d(),Os=o("li"),wn=o("p"),Ui=r("Code to bulk convert models can be found in "),Ss=o("code"),Wi=r("convert_marian_to_pytorch.py"),Ri=r("."),Vi=d(),Hs=o("li"),$n=o("p"),Bi=r("This model was contributed by "),zn=o("a"),Gi=r("sshleifer"),Ji=r("."),er=d(),at=o("h2"),Et=o("a"),Ds=o("span"),M(jn.$$.fragment),Yi=d(),Us=o("span"),Ki=r("Naming"),tr=d(),$e=o("ul"),os=o("li"),Zi=r("All model names use the following format: "),Ws=o("code"),Xi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Qi=d(),qn=o("li"),el=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),En=o("a"),tl=r("here"),nl=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),ol=d(),rt=o("li"),sl=r("Codes formatted like "),Rs=o("code"),al=r("es_AR"),rl=r(" are usually "),Vs=o("code"),il=r("code_{region}"),ll=r(". That one is Spanish from Argentina."),dl=d(),Bs=o("li"),cl=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),nr=d(),it=o("h2"),Ft=o("a"),Gs=o("span"),M(Fn.$$.fragment),pl=d(),Js=o("span"),hl=r("Examples"),or=d(),Ve=o("ul"),Ys=o("li"),ul=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),ml=d(),Ks=o("li"),Pn=o("a"),fl=r("Fine-tune on GPU"),_l=d(),Zs=o("li"),Nn=o("a"),gl=r("Fine-tune on GPU with pytorch-lightning"),sr=d(),lt=o("h2"),Pt=o("a"),Xs=o("span"),M(Cn.$$.fragment),kl=d(),Qs=o("span"),vl=r("Multilingual Models"),ar=d(),ze=o("ul"),Ln=o("li"),Tl=r("All model names use the following format: "),ea=o("code"),Ml=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),bl=r(":"),yl=d(),In=o("li"),xl=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),ta=o("code"),wl=r("src_text"),$l=r("."),zl=d(),An=o("li"),jl=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),On=o("a"),ql=r("opus-mt-en-roa"),El=r("."),Fl=d(),Sn=o("li"),Pl=r("Note that if a model is only multilingual on the source side, like "),na=o("code"),Nl=r("Helsinki-NLP/opus-mt-roa-en"),Cl=r(`, no language
codes are required.`),rr=d(),Nt=o("p"),Ll=r("New multi-lingual models from the "),Hn=o("a"),Il=r("Tatoeba-Challenge repo"),Al=r(`
require 3 character language codes:`),ir=d(),M(Dn.$$.fragment),lr=d(),ss=o("p"),Ol=r("Here is the code to see all available pretrained models on the hub:"),dr=d(),M(Un.$$.fragment),cr=d(),dt=o("h2"),Ct=o("a"),oa=o("span"),M(Wn.$$.fragment),Sl=d(),sa=o("span"),Hl=r("Old Style Multi-Lingual Models"),pr=d(),as=o("p"),Dl=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),hr=d(),M(Rn.$$.fragment),ur=d(),rs=o("p"),Ul=r("Example of translating english to many romance languages, using old-style 2 character language codes"),mr=d(),M(Vn.$$.fragment),fr=d(),ct=o("h2"),Lt=o("a"),aa=o("span"),M(Bn.$$.fragment),Wl=d(),ra=o("span"),Rl=r("MarianConfig"),_r=d(),Te=o("div"),M(Gn.$$.fragment),Vl=d(),pt=o("p"),Bl=r("This is the configuration class to store the configuration of a "),is=o("a"),Gl=r("MarianModel"),Jl=r(`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),Jn=o("a"),Yl=r("Helsinki-NLP/opus-mt-en-de"),Kl=r(" architecture."),Zl=d(),ht=o("p"),Xl=r("Configuration objects inherit from "),ls=o("a"),Ql=r("PretrainedConfig"),ed=r(` and can be used to control the model outputs. Read the
documentation from `),ds=o("a"),td=r("PretrainedConfig"),nd=r(" for more information."),od=d(),M(It.$$.fragment),gr=d(),ut=o("h2"),At=o("a"),ia=o("span"),M(Yn.$$.fragment),sd=d(),la=o("span"),ad=r("MarianTokenizer"),kr=d(),re=o("div"),M(Kn.$$.fragment),rd=d(),Zn=o("p"),id=r("Construct a Marian tokenizer. Based on "),Xn=o("a"),ld=r("SentencePiece"),dd=r("."),cd=d(),Qn=o("p"),pd=r("This tokenizer inherits from "),cs=o("a"),hd=r("PreTrainedTokenizer"),ud=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),md=d(),M(Ot.$$.fragment),fd=d(),St=o("div"),M(eo.$$.fragment),_d=d(),da=o("p"),gd=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),vr=d(),mt=o("h2"),Ht=o("a"),ca=o("span"),M(to.$$.fragment),kd=d(),pa=o("span"),vd=r("MarianModel"),Tr=d(),Me=o("div"),M(no.$$.fragment),Td=d(),oo=o("p"),Md=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=o("a"),bd=r("PreTrainedModel"),yd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd=d(),so=o("p"),wd=r("This model is also a PyTorch "),ao=o("a"),$d=r("torch.nn.Module"),zd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd=d(),je=o("div"),M(ro.$$.fragment),qd=d(),ft=o("p"),Ed=r("The "),hs=o("a"),Fd=r("MarianModel"),Pd=r(" forward method, overrides the "),ha=o("code"),Nd=r("__call__"),Cd=r(" special method."),Ld=d(),M(Dt.$$.fragment),Id=d(),M(Ut.$$.fragment),Mr=d(),_t=o("h2"),Wt=o("a"),ua=o("span"),M(io.$$.fragment),Ad=d(),ma=o("span"),Od=r("MarianMTModel"),br=d(),be=o("div"),M(lo.$$.fragment),Sd=d(),co=o("p"),Hd=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=o("a"),Dd=r("PreTrainedModel"),Ud=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wd=d(),po=o("p"),Rd=r("This model is also a PyTorch "),ho=o("a"),Vd=r("torch.nn.Module"),Bd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gd=d(),pe=o("div"),M(uo.$$.fragment),Jd=d(),gt=o("p"),Yd=r("The "),ms=o("a"),Kd=r("MarianMTModel"),Zd=r(" forward method, overrides the "),fa=o("code"),Xd=r("__call__"),Qd=r(" special method."),ec=d(),M(Rt.$$.fragment),tc=d(),mo=o("p"),nc=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),fo=o("a"),oc=r("here"),sc=r("."),ac=d(),M(Vt.$$.fragment),yr=d(),kt=o("h2"),Bt=o("a"),_a=o("span"),M(_o.$$.fragment),rc=d(),ga=o("span"),ic=r("MarianForCausalLM"),xr=d(),vt=o("div"),M(go.$$.fragment),lc=d(),Gt=o("div"),M(ko.$$.fragment),dc=d(),M(Jt.$$.fragment),wr=d(),Tt=o("h2"),Yt=o("a"),ka=o("span"),M(vo.$$.fragment),cc=d(),va=o("span"),pc=r("TFMarianModel"),$r=d(),ie=o("div"),M(To.$$.fragment),hc=d(),Mo=o("p"),uc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fs=o("a"),mc=r("TFPreTrainedModel"),fc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c=d(),bo=o("p"),gc=r("This model is also a "),yo=o("a"),kc=r("tf.keras.Model"),vc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tc=d(),M(Kt.$$.fragment),Mc=d(),qe=o("div"),M(xo.$$.fragment),bc=d(),Mt=o("p"),yc=r("The "),_s=o("a"),xc=r("TFMarianModel"),wc=r(" forward method, overrides the "),Ta=o("code"),$c=r("__call__"),zc=r(" special method."),jc=d(),M(Zt.$$.fragment),qc=d(),M(Xt.$$.fragment),zr=d(),bt=o("h2"),Qt=o("a"),Ma=o("span"),M(wo.$$.fragment),Ec=d(),ba=o("span"),Fc=r("TFMarianMTModel"),jr=d(),le=o("div"),M($o.$$.fragment),Pc=d(),zo=o("p"),Nc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),gs=o("a"),Cc=r("TFPreTrainedModel"),Lc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=d(),jo=o("p"),Ac=r("This model is also a "),qo=o("a"),Oc=r("tf.keras.Model"),Sc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hc=d(),M(en.$$.fragment),Dc=d(),he=o("div"),M(Eo.$$.fragment),Uc=d(),yt=o("p"),Wc=r("The "),ks=o("a"),Rc=r("TFMarianMTModel"),Vc=r(" forward method, overrides the "),ya=o("code"),Bc=r("__call__"),Gc=r(" special method."),Jc=d(),M(tn.$$.fragment),Yc=d(),Fo=o("p"),Kc=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),Po=o("a"),Zc=r("here"),Xc=r("."),Qc=d(),M(nn.$$.fragment),qr=d(),xt=o("h2"),on=o("a"),xa=o("span"),M(No.$$.fragment),ep=d(),wa=o("span"),tp=r("FlaxMarianModel"),Er=d(),R=o("div"),M(Co.$$.fragment),np=d(),Lo=o("p"),op=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),vs=o("a"),sp=r("FlaxPreTrainedModel"),ap=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp=d(),Io=o("p"),ip=r(`This model is also a Flax Linen
`),Ao=o("a"),lp=r("flax.nn.Module"),dp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),cp=d(),$a=o("p"),pp=r("Finally, this model supports inherent JAX features such as:"),hp=d(),We=o("ul"),za=o("li"),Oo=o("a"),up=r("Just-In-Time (JIT) compilation"),mp=d(),ja=o("li"),So=o("a"),fp=r("Automatic Differentiation"),_p=d(),qa=o("li"),Ho=o("a"),gp=r("Vectorization"),kp=d(),Ea=o("li"),Do=o("a"),vp=r("Parallelization"),Tp=d(),Ee=o("div"),M(Uo.$$.fragment),Mp=d(),wt=o("p"),bp=r("The "),Fa=o("code"),yp=r("FlaxMarianPreTrainedModel"),xp=r(" forward method, overrides the "),Pa=o("code"),wp=r("__call__"),$p=r(" special method."),zp=d(),M(sn.$$.fragment),jp=d(),M(an.$$.fragment),Fr=d(),$t=o("h2"),rn=o("a"),Na=o("span"),M(Wo.$$.fragment),qp=d(),Ca=o("span"),Ep=r("FlaxMarianMTModel"),Pr=d(),V=o("div"),M(Ro.$$.fragment),Fp=d(),Vo=o("p"),Pp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),Ts=o("a"),Np=r("FlaxPreTrainedModel"),Cp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp=d(),Bo=o("p"),Ip=r(`This model is also a Flax Linen
`),Go=o("a"),Ap=r("flax.nn.Module"),Op=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sp=d(),La=o("p"),Hp=r("Finally, this model supports inherent JAX features such as:"),Dp=d(),Re=o("ul"),Ia=o("li"),Jo=o("a"),Up=r("Just-In-Time (JIT) compilation"),Wp=d(),Aa=o("li"),Yo=o("a"),Rp=r("Automatic Differentiation"),Vp=d(),Oa=o("li"),Ko=o("a"),Bp=r("Vectorization"),Gp=d(),Sa=o("li"),Zo=o("a"),Jp=r("Parallelization"),Yp=d(),Fe=o("div"),M(Xo.$$.fragment),Kp=d(),zt=o("p"),Zp=r("The "),Ha=o("code"),Xp=r("FlaxMarianPreTrainedModel"),Qp=r(" forward method, overrides the "),Da=o("code"),eh=r("__call__"),th=r(" special method."),nh=d(),M(ln.$$.fragment),oh=d(),M(dn.$$.fragment),this.h()},l(n){const f=wm('[data-svelte="svelte-1phssyn"]',document.head);h=s(f,"META",{name:!0,content:!0}),f.forEach(t),v=c(n),g=s(n,"H1",{class:!0});var Qo=a(g);u=s(Qo,"A",{id:!0,class:!0,href:!0});var Ua=a(u);k=s(Ua,"SPAN",{});var Wa=a(k);b(l.$$.fragment,Wa),Wa.forEach(t),Ua.forEach(t),m=c(Qo),j=s(Qo,"SPAN",{});var Ra=a(j);Ce=i(Ra,"MarianMT"),Ra.forEach(t),Qo.forEach(t),ce=c(n),E=s(n,"P",{});var cn=a(E);ue=s(cn,"STRONG",{});var Va=a(ue);Y=i(Va,"Bugs:"),Va.forEach(t),Le=i(cn," If you see something strange, file a "),K=s(cn,"A",{href:!0,rel:!0});var Ba=a(K);Z=i(Ba,"Github Issue"),Ba.forEach(t),Ie=i(cn,`
and assign @patrickvonplaten.`),cn.forEach(t),xe=c(n),G=s(n,"P",{});var Ga=a(G);O=i(Ga,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Ga.forEach(t),we=c(n),L=s(n,"H2",{class:!0});var es=a(L);F=s(es,"A",{id:!0,class:!0,href:!0});var Ja=a(F);N=s(Ja,"SPAN",{});var Ya=a(N);b(X.$$.fragment,Ya),Ya.forEach(t),Ja.forEach(t),Q=c(es),me=s(es,"SPAN",{});var Ka=a(me);Ae=i(Ka,"Implementation Notes"),Ka.forEach(t),es.forEach(t),J=c(n),P=s(n,"UL",{});var A=a(P);fe=s(A,"LI",{});var Za=a(fe);C=s(Za,"P",{});var Xa=a(C);Oe=i(Xa,"Each model is about 298 MB on disk, there are more than 1,000 models."),Xa.forEach(t),Za.forEach(t),ee=c(A),_e=s(A,"LI",{});var Qa=a(_e);te=s(Qa,"P",{});var ts=a(te);ne=i(ts,"The list of supported language pairs can be found "),oe=s(ts,"A",{href:!0,rel:!0});var ah=a(oe);Se=i(ah,"here"),ah.forEach(t),S=i(ts,"."),ts.forEach(t),Qa.forEach(t),He=c(A),H=s(A,"LI",{});var rh=a(H);D=s(rh,"P",{});var Ms=a(D);T=i(Ms,"Models were originally trained by "),q=s(Ms,"A",{href:!0,rel:!0});var ih=a(q);ge=i(ih,"J\xF6rg Tiedemann"),ih.forEach(t),Ze=i(Ms," using the "),ke=s(Ms,"A",{href:!0,rel:!0});var lh=a(ke);U=i(lh,"Marian"),lh.forEach(t),Xe=i(Ms," C++ library, which supports fast training and translation."),Ms.forEach(t),rh.forEach(t),Qe=c(A),De=s(A,"LI",{});var dh=a(De);I=s(dh,"P",{});var ch=a(I);se=i(ch,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),ch.forEach(t),dh.forEach(t),et=c(A),Ue=s(A,"LI",{});var ph=a(Ue);W=s(ph,"P",{});var hh=a(W);tt=i(hh,"The 80 opus models that require BPE preprocessing are not supported."),hh.forEach(t),ph.forEach(t),nt=c(A),ae=s(A,"LI",{});var Cr=a(ae);ve=s(Cr,"P",{});var Lr=a(ve);xi=i(Lr,"The modeling code is the same as "),ns=s(Lr,"A",{href:!0});var uh=a(ns);wi=i(uh,"BartForConditionalGeneration"),uh.forEach(t),$i=i(Lr," with a few minor modifications:"),Lr.forEach(t),zi=c(Cr),ot=s(Cr,"UL",{});var bs=a(ot);yn=s(bs,"LI",{});var Ir=a(yn);ji=i(Ir,"static (sinusoid) positional embeddings ("),Cs=s(Ir,"CODE",{});var mh=a(Cs);qi=i(mh,"MarianConfig.static_position_embeddings=True"),mh.forEach(t),Ei=i(Ir,")"),Ir.forEach(t),Fi=c(bs),xn=s(bs,"LI",{});var Ar=a(xn);Pi=i(Ar,"no layernorm_embedding ("),Ls=s(Ar,"CODE",{});var fh=a(Ls);Ni=i(fh,"MarianConfig.normalize_embedding=False"),fh.forEach(t),Ci=i(Ar,")"),Ar.forEach(t),Li=c(bs),st=s(bs,"LI",{});var ys=a(st);Ii=i(ys,"the model starts generating with "),Is=s(ys,"CODE",{});var _h=a(Is);Ai=i(_h,"pad_token_id"),_h.forEach(t),Oi=i(ys,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),As=s(ys,"CODE",{});var gh=a(As);Si=i(gh,"<s/>"),gh.forEach(t),Hi=i(ys,"),"),ys.forEach(t),bs.forEach(t),Cr.forEach(t),Di=c(A),Os=s(A,"LI",{});var kh=a(Os);wn=s(kh,"P",{});var Or=a(wn);Ui=i(Or,"Code to bulk convert models can be found in "),Ss=s(Or,"CODE",{});var vh=a(Ss);Wi=i(vh,"convert_marian_to_pytorch.py"),vh.forEach(t),Ri=i(Or,"."),Or.forEach(t),kh.forEach(t),Vi=c(A),Hs=s(A,"LI",{});var Th=a(Hs);$n=s(Th,"P",{});var Sr=a($n);Bi=i(Sr,"This model was contributed by "),zn=s(Sr,"A",{href:!0,rel:!0});var Mh=a(zn);Gi=i(Mh,"sshleifer"),Mh.forEach(t),Ji=i(Sr,"."),Sr.forEach(t),Th.forEach(t),A.forEach(t),er=c(n),at=s(n,"H2",{class:!0});var Hr=a(at);Et=s(Hr,"A",{id:!0,class:!0,href:!0});var bh=a(Et);Ds=s(bh,"SPAN",{});var yh=a(Ds);b(jn.$$.fragment,yh),yh.forEach(t),bh.forEach(t),Yi=c(Hr),Us=s(Hr,"SPAN",{});var xh=a(Us);Ki=i(xh,"Naming"),xh.forEach(t),Hr.forEach(t),tr=c(n),$e=s(n,"UL",{});var pn=a($e);os=s(pn,"LI",{});var sh=a(os);Zi=i(sh,"All model names use the following format: "),Ws=s(sh,"CODE",{});var wh=a(Ws);Xi=i(wh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),wh.forEach(t),sh.forEach(t),Qi=c(pn),qn=s(pn,"LI",{});var Dr=a(qn);el=i(Dr,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),En=s(Dr,"A",{href:!0,rel:!0});var $h=a(En);tl=i($h,"here"),$h.forEach(t),nl=i(Dr,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Dr.forEach(t),ol=c(pn),rt=s(pn,"LI",{});var xs=a(rt);sl=i(xs,"Codes formatted like "),Rs=s(xs,"CODE",{});var zh=a(Rs);al=i(zh,"es_AR"),zh.forEach(t),rl=i(xs," are usually "),Vs=s(xs,"CODE",{});var jh=a(Vs);il=i(jh,"code_{region}"),jh.forEach(t),ll=i(xs,". That one is Spanish from Argentina."),xs.forEach(t),dl=c(pn),Bs=s(pn,"LI",{});var qh=a(Bs);cl=i(qh,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),qh.forEach(t),pn.forEach(t),nr=c(n),it=s(n,"H2",{class:!0});var Ur=a(it);Ft=s(Ur,"A",{id:!0,class:!0,href:!0});var Eh=a(Ft);Gs=s(Eh,"SPAN",{});var Fh=a(Gs);b(Fn.$$.fragment,Fh),Fh.forEach(t),Eh.forEach(t),pl=c(Ur),Js=s(Ur,"SPAN",{});var Ph=a(Js);hl=i(Ph,"Examples"),Ph.forEach(t),Ur.forEach(t),or=c(n),Ve=s(n,"UL",{});var ws=a(Ve);Ys=s(ws,"LI",{});var Nh=a(Ys);ul=i(Nh,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),Nh.forEach(t),ml=c(ws),Ks=s(ws,"LI",{});var Ch=a(Ks);Pn=s(Ch,"A",{href:!0,rel:!0});var Lh=a(Pn);fl=i(Lh,"Fine-tune on GPU"),Lh.forEach(t),Ch.forEach(t),_l=c(ws),Zs=s(ws,"LI",{});var Ih=a(Zs);Nn=s(Ih,"A",{href:!0,rel:!0});var Ah=a(Nn);gl=i(Ah,"Fine-tune on GPU with pytorch-lightning"),Ah.forEach(t),Ih.forEach(t),ws.forEach(t),sr=c(n),lt=s(n,"H2",{class:!0});var Wr=a(lt);Pt=s(Wr,"A",{id:!0,class:!0,href:!0});var Oh=a(Pt);Xs=s(Oh,"SPAN",{});var Sh=a(Xs);b(Cn.$$.fragment,Sh),Sh.forEach(t),Oh.forEach(t),kl=c(Wr),Qs=s(Wr,"SPAN",{});var Hh=a(Qs);vl=i(Hh,"Multilingual Models"),Hh.forEach(t),Wr.forEach(t),ar=c(n),ze=s(n,"UL",{});var hn=a(ze);Ln=s(hn,"LI",{});var Rr=a(Ln);Tl=i(Rr,"All model names use the following format: "),ea=s(Rr,"CODE",{});var Dh=a(ea);Ml=i(Dh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Dh.forEach(t),bl=i(Rr,":"),Rr.forEach(t),yl=c(hn),In=s(hn,"LI",{});var Vr=a(In);xl=i(Vr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),ta=s(Vr,"CODE",{});var Uh=a(ta);wl=i(Uh,"src_text"),Uh.forEach(t),$l=i(Vr,"."),Vr.forEach(t),zl=c(hn),An=s(hn,"LI",{});var Br=a(An);jl=i(Br,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),On=s(Br,"A",{href:!0,rel:!0});var Wh=a(On);ql=i(Wh,"opus-mt-en-roa"),Wh.forEach(t),El=i(Br,"."),Br.forEach(t),Fl=c(hn),Sn=s(hn,"LI",{});var Gr=a(Sn);Pl=i(Gr,"Note that if a model is only multilingual on the source side, like "),na=s(Gr,"CODE",{});var Rh=a(na);Nl=i(Rh,"Helsinki-NLP/opus-mt-roa-en"),Rh.forEach(t),Cl=i(Gr,`, no language
codes are required.`),Gr.forEach(t),hn.forEach(t),rr=c(n),Nt=s(n,"P",{});var Jr=a(Nt);Ll=i(Jr,"New multi-lingual models from the "),Hn=s(Jr,"A",{href:!0,rel:!0});var Vh=a(Hn);Il=i(Vh,"Tatoeba-Challenge repo"),Vh.forEach(t),Al=i(Jr,`
require 3 character language codes:`),Jr.forEach(t),ir=c(n),b(Dn.$$.fragment,n),lr=c(n),ss=s(n,"P",{});var Bh=a(ss);Ol=i(Bh,"Here is the code to see all available pretrained models on the hub:"),Bh.forEach(t),dr=c(n),b(Un.$$.fragment,n),cr=c(n),dt=s(n,"H2",{class:!0});var Yr=a(dt);Ct=s(Yr,"A",{id:!0,class:!0,href:!0});var Gh=a(Ct);oa=s(Gh,"SPAN",{});var Jh=a(oa);b(Wn.$$.fragment,Jh),Jh.forEach(t),Gh.forEach(t),Sl=c(Yr),sa=s(Yr,"SPAN",{});var Yh=a(sa);Hl=i(Yh,"Old Style Multi-Lingual Models"),Yh.forEach(t),Yr.forEach(t),pr=c(n),as=s(n,"P",{});var Kh=a(as);Dl=i(Kh,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),Kh.forEach(t),hr=c(n),b(Rn.$$.fragment,n),ur=c(n),rs=s(n,"P",{});var Zh=a(rs);Ul=i(Zh,"Example of translating english to many romance languages, using old-style 2 character language codes"),Zh.forEach(t),mr=c(n),b(Vn.$$.fragment,n),fr=c(n),ct=s(n,"H2",{class:!0});var Kr=a(ct);Lt=s(Kr,"A",{id:!0,class:!0,href:!0});var Xh=a(Lt);aa=s(Xh,"SPAN",{});var Qh=a(aa);b(Bn.$$.fragment,Qh),Qh.forEach(t),Xh.forEach(t),Wl=c(Kr),ra=s(Kr,"SPAN",{});var eu=a(ra);Rl=i(eu,"MarianConfig"),eu.forEach(t),Kr.forEach(t),_r=c(n),Te=s(n,"DIV",{class:!0});var un=a(Te);b(Gn.$$.fragment,un),Vl=c(un),pt=s(un,"P",{});var $s=a(pt);Bl=i($s,"This is the configuration class to store the configuration of a "),is=s($s,"A",{href:!0});var tu=a(is);Gl=i(tu,"MarianModel"),tu.forEach(t),Jl=i($s,`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),Jn=s($s,"A",{href:!0,rel:!0});var nu=a(Jn);Yl=i(nu,"Helsinki-NLP/opus-mt-en-de"),nu.forEach(t),Kl=i($s," architecture."),$s.forEach(t),Zl=c(un),ht=s(un,"P",{});var zs=a(ht);Xl=i(zs,"Configuration objects inherit from "),ls=s(zs,"A",{href:!0});var ou=a(ls);Ql=i(ou,"PretrainedConfig"),ou.forEach(t),ed=i(zs,` and can be used to control the model outputs. Read the
documentation from `),ds=s(zs,"A",{href:!0});var su=a(ds);td=i(su,"PretrainedConfig"),su.forEach(t),nd=i(zs," for more information."),zs.forEach(t),od=c(un),b(It.$$.fragment,un),un.forEach(t),gr=c(n),ut=s(n,"H2",{class:!0});var Zr=a(ut);At=s(Zr,"A",{id:!0,class:!0,href:!0});var au=a(At);ia=s(au,"SPAN",{});var ru=a(ia);b(Yn.$$.fragment,ru),ru.forEach(t),au.forEach(t),sd=c(Zr),la=s(Zr,"SPAN",{});var iu=a(la);ad=i(iu,"MarianTokenizer"),iu.forEach(t),Zr.forEach(t),kr=c(n),re=s(n,"DIV",{class:!0});var Be=a(re);b(Kn.$$.fragment,Be),rd=c(Be),Zn=s(Be,"P",{});var Xr=a(Zn);id=i(Xr,"Construct a Marian tokenizer. Based on "),Xn=s(Xr,"A",{href:!0,rel:!0});var lu=a(Xn);ld=i(lu,"SentencePiece"),lu.forEach(t),dd=i(Xr,"."),Xr.forEach(t),cd=c(Be),Qn=s(Be,"P",{});var Qr=a(Qn);pd=i(Qr,"This tokenizer inherits from "),cs=s(Qr,"A",{href:!0});var du=a(cs);hd=i(du,"PreTrainedTokenizer"),du.forEach(t),ud=i(Qr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qr.forEach(t),md=c(Be),b(Ot.$$.fragment,Be),fd=c(Be),St=s(Be,"DIV",{class:!0});var ei=a(St);b(eo.$$.fragment,ei),_d=c(ei),da=s(ei,"P",{});var cu=a(da);gd=i(cu,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),cu.forEach(t),ei.forEach(t),Be.forEach(t),vr=c(n),mt=s(n,"H2",{class:!0});var ti=a(mt);Ht=s(ti,"A",{id:!0,class:!0,href:!0});var pu=a(Ht);ca=s(pu,"SPAN",{});var hu=a(ca);b(to.$$.fragment,hu),hu.forEach(t),pu.forEach(t),kd=c(ti),pa=s(ti,"SPAN",{});var uu=a(pa);vd=i(uu,"MarianModel"),uu.forEach(t),ti.forEach(t),Tr=c(n),Me=s(n,"DIV",{class:!0});var mn=a(Me);b(no.$$.fragment,mn),Td=c(mn),oo=s(mn,"P",{});var ni=a(oo);Md=i(ni,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=s(ni,"A",{href:!0});var mu=a(ps);bd=i(mu,"PreTrainedModel"),mu.forEach(t),yd=i(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),xd=c(mn),so=s(mn,"P",{});var oi=a(so);wd=i(oi,"This model is also a PyTorch "),ao=s(oi,"A",{href:!0,rel:!0});var fu=a(ao);$d=i(fu,"torch.nn.Module"),fu.forEach(t),zd=i(oi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oi.forEach(t),jd=c(mn),je=s(mn,"DIV",{class:!0});var fn=a(je);b(ro.$$.fragment,fn),qd=c(fn),ft=s(fn,"P",{});var js=a(ft);Ed=i(js,"The "),hs=s(js,"A",{href:!0});var _u=a(hs);Fd=i(_u,"MarianModel"),_u.forEach(t),Pd=i(js," forward method, overrides the "),ha=s(js,"CODE",{});var gu=a(ha);Nd=i(gu,"__call__"),gu.forEach(t),Cd=i(js," special method."),js.forEach(t),Ld=c(fn),b(Dt.$$.fragment,fn),Id=c(fn),b(Ut.$$.fragment,fn),fn.forEach(t),mn.forEach(t),Mr=c(n),_t=s(n,"H2",{class:!0});var si=a(_t);Wt=s(si,"A",{id:!0,class:!0,href:!0});var ku=a(Wt);ua=s(ku,"SPAN",{});var vu=a(ua);b(io.$$.fragment,vu),vu.forEach(t),ku.forEach(t),Ad=c(si),ma=s(si,"SPAN",{});var Tu=a(ma);Od=i(Tu,"MarianMTModel"),Tu.forEach(t),si.forEach(t),br=c(n),be=s(n,"DIV",{class:!0});var _n=a(be);b(lo.$$.fragment,_n),Sd=c(_n),co=s(_n,"P",{});var ai=a(co);Hd=i(ai,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=s(ai,"A",{href:!0});var Mu=a(us);Dd=i(Mu,"PreTrainedModel"),Mu.forEach(t),Ud=i(ai,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai.forEach(t),Wd=c(_n),po=s(_n,"P",{});var ri=a(po);Rd=i(ri,"This model is also a PyTorch "),ho=s(ri,"A",{href:!0,rel:!0});var bu=a(ho);Vd=i(bu,"torch.nn.Module"),bu.forEach(t),Bd=i(ri,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ri.forEach(t),Gd=c(_n),pe=s(_n,"DIV",{class:!0});var Ge=a(pe);b(uo.$$.fragment,Ge),Jd=c(Ge),gt=s(Ge,"P",{});var qs=a(gt);Yd=i(qs,"The "),ms=s(qs,"A",{href:!0});var yu=a(ms);Kd=i(yu,"MarianMTModel"),yu.forEach(t),Zd=i(qs," forward method, overrides the "),fa=s(qs,"CODE",{});var xu=a(fa);Xd=i(xu,"__call__"),xu.forEach(t),Qd=i(qs," special method."),qs.forEach(t),ec=c(Ge),b(Rt.$$.fragment,Ge),tc=c(Ge),mo=s(Ge,"P",{});var ii=a(mo);nc=i(ii,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),fo=s(ii,"A",{href:!0,rel:!0});var wu=a(fo);oc=i(wu,"here"),wu.forEach(t),sc=i(ii,"."),ii.forEach(t),ac=c(Ge),b(Vt.$$.fragment,Ge),Ge.forEach(t),_n.forEach(t),yr=c(n),kt=s(n,"H2",{class:!0});var li=a(kt);Bt=s(li,"A",{id:!0,class:!0,href:!0});var $u=a(Bt);_a=s($u,"SPAN",{});var zu=a(_a);b(_o.$$.fragment,zu),zu.forEach(t),$u.forEach(t),rc=c(li),ga=s(li,"SPAN",{});var ju=a(ga);ic=i(ju,"MarianForCausalLM"),ju.forEach(t),li.forEach(t),xr=c(n),vt=s(n,"DIV",{class:!0});var di=a(vt);b(go.$$.fragment,di),lc=c(di),Gt=s(di,"DIV",{class:!0});var ci=a(Gt);b(ko.$$.fragment,ci),dc=c(ci),b(Jt.$$.fragment,ci),ci.forEach(t),di.forEach(t),wr=c(n),Tt=s(n,"H2",{class:!0});var pi=a(Tt);Yt=s(pi,"A",{id:!0,class:!0,href:!0});var qu=a(Yt);ka=s(qu,"SPAN",{});var Eu=a(ka);b(vo.$$.fragment,Eu),Eu.forEach(t),qu.forEach(t),cc=c(pi),va=s(pi,"SPAN",{});var Fu=a(va);pc=i(Fu,"TFMarianModel"),Fu.forEach(t),pi.forEach(t),$r=c(n),ie=s(n,"DIV",{class:!0});var Je=a(ie);b(To.$$.fragment,Je),hc=c(Je),Mo=s(Je,"P",{});var hi=a(Mo);uc=i(hi,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fs=s(hi,"A",{href:!0});var Pu=a(fs);mc=i(Pu,"TFPreTrainedModel"),Pu.forEach(t),fc=i(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),_c=c(Je),bo=s(Je,"P",{});var ui=a(bo);gc=i(ui,"This model is also a "),yo=s(ui,"A",{href:!0,rel:!0});var Nu=a(yo);kc=i(Nu,"tf.keras.Model"),Nu.forEach(t),vc=i(ui,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ui.forEach(t),Tc=c(Je),b(Kt.$$.fragment,Je),Mc=c(Je),qe=s(Je,"DIV",{class:!0});var gn=a(qe);b(xo.$$.fragment,gn),bc=c(gn),Mt=s(gn,"P",{});var Es=a(Mt);yc=i(Es,"The "),_s=s(Es,"A",{href:!0});var Cu=a(_s);xc=i(Cu,"TFMarianModel"),Cu.forEach(t),wc=i(Es," forward method, overrides the "),Ta=s(Es,"CODE",{});var Lu=a(Ta);$c=i(Lu,"__call__"),Lu.forEach(t),zc=i(Es," special method."),Es.forEach(t),jc=c(gn),b(Zt.$$.fragment,gn),qc=c(gn),b(Xt.$$.fragment,gn),gn.forEach(t),Je.forEach(t),zr=c(n),bt=s(n,"H2",{class:!0});var mi=a(bt);Qt=s(mi,"A",{id:!0,class:!0,href:!0});var Iu=a(Qt);Ma=s(Iu,"SPAN",{});var Au=a(Ma);b(wo.$$.fragment,Au),Au.forEach(t),Iu.forEach(t),Ec=c(mi),ba=s(mi,"SPAN",{});var Ou=a(ba);Fc=i(Ou,"TFMarianMTModel"),Ou.forEach(t),mi.forEach(t),jr=c(n),le=s(n,"DIV",{class:!0});var Ye=a(le);b($o.$$.fragment,Ye),Pc=c(Ye),zo=s(Ye,"P",{});var fi=a(zo);Nc=i(fi,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),gs=s(fi,"A",{href:!0});var Su=a(gs);Cc=i(Su,"TFPreTrainedModel"),Su.forEach(t),Lc=i(fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fi.forEach(t),Ic=c(Ye),jo=s(Ye,"P",{});var _i=a(jo);Ac=i(_i,"This model is also a "),qo=s(_i,"A",{href:!0,rel:!0});var Hu=a(qo);Oc=i(Hu,"tf.keras.Model"),Hu.forEach(t),Sc=i(_i,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_i.forEach(t),Hc=c(Ye),b(en.$$.fragment,Ye),Dc=c(Ye),he=s(Ye,"DIV",{class:!0});var Ke=a(he);b(Eo.$$.fragment,Ke),Uc=c(Ke),yt=s(Ke,"P",{});var Fs=a(yt);Wc=i(Fs,"The "),ks=s(Fs,"A",{href:!0});var Du=a(ks);Rc=i(Du,"TFMarianMTModel"),Du.forEach(t),Vc=i(Fs," forward method, overrides the "),ya=s(Fs,"CODE",{});var Uu=a(ya);Bc=i(Uu,"__call__"),Uu.forEach(t),Gc=i(Fs," special method."),Fs.forEach(t),Jc=c(Ke),b(tn.$$.fragment,Ke),Yc=c(Ke),Fo=s(Ke,"P",{});var gi=a(Fo);Kc=i(gi,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),Po=s(gi,"A",{href:!0,rel:!0});var Wu=a(Po);Zc=i(Wu,"here"),Wu.forEach(t),Xc=i(gi,"."),gi.forEach(t),Qc=c(Ke),b(nn.$$.fragment,Ke),Ke.forEach(t),Ye.forEach(t),qr=c(n),xt=s(n,"H2",{class:!0});var ki=a(xt);on=s(ki,"A",{id:!0,class:!0,href:!0});var Ru=a(on);xa=s(Ru,"SPAN",{});var Vu=a(xa);b(No.$$.fragment,Vu),Vu.forEach(t),Ru.forEach(t),ep=c(ki),wa=s(ki,"SPAN",{});var Bu=a(wa);tp=i(Bu,"FlaxMarianModel"),Bu.forEach(t),ki.forEach(t),Er=c(n),R=s(n,"DIV",{class:!0});var Pe=a(R);b(Co.$$.fragment,Pe),np=c(Pe),Lo=s(Pe,"P",{});var vi=a(Lo);op=i(vi,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),vs=s(vi,"A",{href:!0});var Gu=a(vs);sp=i(Gu,"FlaxPreTrainedModel"),Gu.forEach(t),ap=i(vi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vi.forEach(t),rp=c(Pe),Io=s(Pe,"P",{});var Ti=a(Io);ip=i(Ti,`This model is also a Flax Linen
`),Ao=s(Ti,"A",{href:!0,rel:!0});var Ju=a(Ao);lp=i(Ju,"flax.nn.Module"),Ju.forEach(t),dp=i(Ti,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ti.forEach(t),cp=c(Pe),$a=s(Pe,"P",{});var Yu=a($a);pp=i(Yu,"Finally, this model supports inherent JAX features such as:"),Yu.forEach(t),hp=c(Pe),We=s(Pe,"UL",{});var kn=a(We);za=s(kn,"LI",{});var Ku=a(za);Oo=s(Ku,"A",{href:!0,rel:!0});var Zu=a(Oo);up=i(Zu,"Just-In-Time (JIT) compilation"),Zu.forEach(t),Ku.forEach(t),mp=c(kn),ja=s(kn,"LI",{});var Xu=a(ja);So=s(Xu,"A",{href:!0,rel:!0});var Qu=a(So);fp=i(Qu,"Automatic Differentiation"),Qu.forEach(t),Xu.forEach(t),_p=c(kn),qa=s(kn,"LI",{});var em=a(qa);Ho=s(em,"A",{href:!0,rel:!0});var tm=a(Ho);gp=i(tm,"Vectorization"),tm.forEach(t),em.forEach(t),kp=c(kn),Ea=s(kn,"LI",{});var nm=a(Ea);Do=s(nm,"A",{href:!0,rel:!0});var om=a(Do);vp=i(om,"Parallelization"),om.forEach(t),nm.forEach(t),kn.forEach(t),Tp=c(Pe),Ee=s(Pe,"DIV",{class:!0});var vn=a(Ee);b(Uo.$$.fragment,vn),Mp=c(vn),wt=s(vn,"P",{});var Ps=a(wt);bp=i(Ps,"The "),Fa=s(Ps,"CODE",{});var sm=a(Fa);yp=i(sm,"FlaxMarianPreTrainedModel"),sm.forEach(t),xp=i(Ps," forward method, overrides the "),Pa=s(Ps,"CODE",{});var am=a(Pa);wp=i(am,"__call__"),am.forEach(t),$p=i(Ps," special method."),Ps.forEach(t),zp=c(vn),b(sn.$$.fragment,vn),jp=c(vn),b(an.$$.fragment,vn),vn.forEach(t),Pe.forEach(t),Fr=c(n),$t=s(n,"H2",{class:!0});var Mi=a($t);rn=s(Mi,"A",{id:!0,class:!0,href:!0});var rm=a(rn);Na=s(rm,"SPAN",{});var im=a(Na);b(Wo.$$.fragment,im),im.forEach(t),rm.forEach(t),qp=c(Mi),Ca=s(Mi,"SPAN",{});var lm=a(Ca);Ep=i(lm,"FlaxMarianMTModel"),lm.forEach(t),Mi.forEach(t),Pr=c(n),V=s(n,"DIV",{class:!0});var Ne=a(V);b(Ro.$$.fragment,Ne),Fp=c(Ne),Vo=s(Ne,"P",{});var bi=a(Vo);Pp=i(bi,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),Ts=s(bi,"A",{href:!0});var dm=a(Ts);Np=i(dm,"FlaxPreTrainedModel"),dm.forEach(t),Cp=i(bi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi.forEach(t),Lp=c(Ne),Bo=s(Ne,"P",{});var yi=a(Bo);Ip=i(yi,`This model is also a Flax Linen
`),Go=s(yi,"A",{href:!0,rel:!0});var cm=a(Go);Ap=i(cm,"flax.nn.Module"),cm.forEach(t),Op=i(yi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yi.forEach(t),Sp=c(Ne),La=s(Ne,"P",{});var pm=a(La);Hp=i(pm,"Finally, this model supports inherent JAX features such as:"),pm.forEach(t),Dp=c(Ne),Re=s(Ne,"UL",{});var Tn=a(Re);Ia=s(Tn,"LI",{});var hm=a(Ia);Jo=s(hm,"A",{href:!0,rel:!0});var um=a(Jo);Up=i(um,"Just-In-Time (JIT) compilation"),um.forEach(t),hm.forEach(t),Wp=c(Tn),Aa=s(Tn,"LI",{});var mm=a(Aa);Yo=s(mm,"A",{href:!0,rel:!0});var fm=a(Yo);Rp=i(fm,"Automatic Differentiation"),fm.forEach(t),mm.forEach(t),Vp=c(Tn),Oa=s(Tn,"LI",{});var _m=a(Oa);Ko=s(_m,"A",{href:!0,rel:!0});var gm=a(Ko);Bp=i(gm,"Vectorization"),gm.forEach(t),_m.forEach(t),Gp=c(Tn),Sa=s(Tn,"LI",{});var km=a(Sa);Zo=s(km,"A",{href:!0,rel:!0});var vm=a(Zo);Jp=i(vm,"Parallelization"),vm.forEach(t),km.forEach(t),Tn.forEach(t),Yp=c(Ne),Fe=s(Ne,"DIV",{class:!0});var Mn=a(Fe);b(Xo.$$.fragment,Mn),Kp=c(Mn),zt=s(Mn,"P",{});var Ns=a(zt);Zp=i(Ns,"The "),Ha=s(Ns,"CODE",{});var Tm=a(Ha);Xp=i(Tm,"FlaxMarianPreTrainedModel"),Tm.forEach(t),Qp=i(Ns," forward method, overrides the "),Da=s(Ns,"CODE",{});var Mm=a(Da);eh=i(Mm,"__call__"),Mm.forEach(t),th=i(Ns," special method."),Ns.forEach(t),nh=c(Mn),b(ln.$$.fragment,Mn),oh=c(Mn),b(dn.$$.fragment,Mn),Mn.forEach(t),Ne.forEach(t),this.h()},h(){p(h,"name","hf:doc:metadata"),p(h,"content",JSON.stringify(Vm)),p(u,"id","marianmt"),p(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(u,"href","#marianmt"),p(g,"class","relative group"),p(K,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),p(K,"rel","nofollow"),p(F,"id","implementation-notes"),p(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(F,"href","#implementation-notes"),p(L,"class","relative group"),p(oe,"href","https://huggingface.co/Helsinki-NLP"),p(oe,"rel","nofollow"),p(q,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),p(q,"rel","nofollow"),p(ke,"href","https://marian-nmt.github.io/"),p(ke,"rel","nofollow"),p(ns,"href","/docs/transformers/pr_16919/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(zn,"href","https://huggingface.co/sshleifer"),p(zn,"rel","nofollow"),p(Et,"id","naming"),p(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Et,"href","#naming"),p(at,"class","relative group"),p(En,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),p(En,"rel","nofollow"),p(Ft,"id","examples"),p(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ft,"href","#examples"),p(it,"class","relative group"),p(Pn,"href","https://github.com/huggingface/transformers/blob/main/examples/research_projects/seq2seq-distillation/train_distil_marian_enro_teacher.sh"),p(Pn,"rel","nofollow"),p(Nn,"href","https://github.com/huggingface/transformers/blob/main/examples/research_projects/seq2seq-distillation/train_distil_marian_no_teacher.sh"),p(Nn,"rel","nofollow"),p(Pt,"id","multilingual-models"),p(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pt,"href","#multilingual-models"),p(lt,"class","relative group"),p(On,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),p(On,"rel","nofollow"),p(Hn,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),p(Hn,"rel","nofollow"),p(Ct,"id","old-style-multilingual-models"),p(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ct,"href","#old-style-multilingual-models"),p(dt,"class","relative group"),p(Lt,"id","transformers.MarianConfig"),p(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Lt,"href","#transformers.MarianConfig"),p(ct,"class","relative group"),p(is,"href","/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianModel"),p(Jn,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),p(Jn,"rel","nofollow"),p(ls,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),p(ds,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),p(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(At,"id","transformers.MarianTokenizer"),p(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(At,"href","#transformers.MarianTokenizer"),p(ut,"class","relative group"),p(Xn,"href","https://github.com/google/sentencepiece"),p(Xn,"rel","nofollow"),p(cs,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ht,"id","transformers.MarianModel"),p(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ht,"href","#transformers.MarianModel"),p(mt,"class","relative group"),p(ps,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),p(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ao,"rel","nofollow"),p(hs,"href","/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianModel"),p(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Wt,"id","transformers.MarianMTModel"),p(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Wt,"href","#transformers.MarianMTModel"),p(_t,"class","relative group"),p(us,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),p(ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ho,"rel","nofollow"),p(ms,"href","/docs/transformers/pr_16919/en/model_doc/marian#transformers.MarianMTModel"),p(fo,"href","https://huggingface.co/models?search=Helsinki-NLP"),p(fo,"rel","nofollow"),p(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Bt,"id","transformers.MarianForCausalLM"),p(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Bt,"href","#transformers.MarianForCausalLM"),p(kt,"class","relative group"),p(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Yt,"id","transformers.TFMarianModel"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.TFMarianModel"),p(Tt,"class","relative group"),p(fs,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),p(yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(yo,"rel","nofollow"),p(_s,"href","/docs/transformers/pr_16919/en/model_doc/marian#transformers.TFMarianModel"),p(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Qt,"id","transformers.TFMarianMTModel"),p(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qt,"href","#transformers.TFMarianMTModel"),p(bt,"class","relative group"),p(gs,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),p(qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(qo,"rel","nofollow"),p(ks,"href","/docs/transformers/pr_16919/en/model_doc/marian#transformers.TFMarianMTModel"),p(Po,"href","https://huggingface.co/models?search=Helsinki-NLP"),p(Po,"rel","nofollow"),p(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(on,"id","transformers.FlaxMarianModel"),p(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(on,"href","#transformers.FlaxMarianModel"),p(xt,"class","relative group"),p(vs,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(Ao,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(Ao,"rel","nofollow"),p(Oo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Oo,"rel","nofollow"),p(So,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(So,"rel","nofollow"),p(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Ho,"rel","nofollow"),p(Do,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Do,"rel","nofollow"),p(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(rn,"id","transformers.FlaxMarianMTModel"),p(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rn,"href","#transformers.FlaxMarianMTModel"),p($t,"class","relative group"),p(Ts,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(Go,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(Go,"rel","nofollow"),p(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Jo,"rel","nofollow"),p(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Yo,"rel","nofollow"),p(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Ko,"rel","nofollow"),p(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Zo,"rel","nofollow"),p(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){e(document.head,h),_(n,v,f),_(n,g,f),e(g,u),e(u,k),y(l,k,null),e(g,m),e(g,j),e(j,Ce),_(n,ce,f),_(n,E,f),e(E,ue),e(ue,Y),e(E,Le),e(E,K),e(K,Z),e(E,Ie),_(n,xe,f),_(n,G,f),e(G,O),_(n,we,f),_(n,L,f),e(L,F),e(F,N),y(X,N,null),e(L,Q),e(L,me),e(me,Ae),_(n,J,f),_(n,P,f),e(P,fe),e(fe,C),e(C,Oe),e(P,ee),e(P,_e),e(_e,te),e(te,ne),e(te,oe),e(oe,Se),e(te,S),e(P,He),e(P,H),e(H,D),e(D,T),e(D,q),e(q,ge),e(D,Ze),e(D,ke),e(ke,U),e(D,Xe),e(P,Qe),e(P,De),e(De,I),e(I,se),e(P,et),e(P,Ue),e(Ue,W),e(W,tt),e(P,nt),e(P,ae),e(ae,ve),e(ve,xi),e(ve,ns),e(ns,wi),e(ve,$i),e(ae,zi),e(ae,ot),e(ot,yn),e(yn,ji),e(yn,Cs),e(Cs,qi),e(yn,Ei),e(ot,Fi),e(ot,xn),e(xn,Pi),e(xn,Ls),e(Ls,Ni),e(xn,Ci),e(ot,Li),e(ot,st),e(st,Ii),e(st,Is),e(Is,Ai),e(st,Oi),e(st,As),e(As,Si),e(st,Hi),e(P,Di),e(P,Os),e(Os,wn),e(wn,Ui),e(wn,Ss),e(Ss,Wi),e(wn,Ri),e(P,Vi),e(P,Hs),e(Hs,$n),e($n,Bi),e($n,zn),e(zn,Gi),e($n,Ji),_(n,er,f),_(n,at,f),e(at,Et),e(Et,Ds),y(jn,Ds,null),e(at,Yi),e(at,Us),e(Us,Ki),_(n,tr,f),_(n,$e,f),e($e,os),e(os,Zi),e(os,Ws),e(Ws,Xi),e($e,Qi),e($e,qn),e(qn,el),e(qn,En),e(En,tl),e(qn,nl),e($e,ol),e($e,rt),e(rt,sl),e(rt,Rs),e(Rs,al),e(rt,rl),e(rt,Vs),e(Vs,il),e(rt,ll),e($e,dl),e($e,Bs),e(Bs,cl),_(n,nr,f),_(n,it,f),e(it,Ft),e(Ft,Gs),y(Fn,Gs,null),e(it,pl),e(it,Js),e(Js,hl),_(n,or,f),_(n,Ve,f),e(Ve,Ys),e(Ys,ul),e(Ve,ml),e(Ve,Ks),e(Ks,Pn),e(Pn,fl),e(Ve,_l),e(Ve,Zs),e(Zs,Nn),e(Nn,gl),_(n,sr,f),_(n,lt,f),e(lt,Pt),e(Pt,Xs),y(Cn,Xs,null),e(lt,kl),e(lt,Qs),e(Qs,vl),_(n,ar,f),_(n,ze,f),e(ze,Ln),e(Ln,Tl),e(Ln,ea),e(ea,Ml),e(Ln,bl),e(ze,yl),e(ze,In),e(In,xl),e(In,ta),e(ta,wl),e(In,$l),e(ze,zl),e(ze,An),e(An,jl),e(An,On),e(On,ql),e(An,El),e(ze,Fl),e(ze,Sn),e(Sn,Pl),e(Sn,na),e(na,Nl),e(Sn,Cl),_(n,rr,f),_(n,Nt,f),e(Nt,Ll),e(Nt,Hn),e(Hn,Il),e(Nt,Al),_(n,ir,f),y(Dn,n,f),_(n,lr,f),_(n,ss,f),e(ss,Ol),_(n,dr,f),y(Un,n,f),_(n,cr,f),_(n,dt,f),e(dt,Ct),e(Ct,oa),y(Wn,oa,null),e(dt,Sl),e(dt,sa),e(sa,Hl),_(n,pr,f),_(n,as,f),e(as,Dl),_(n,hr,f),y(Rn,n,f),_(n,ur,f),_(n,rs,f),e(rs,Ul),_(n,mr,f),y(Vn,n,f),_(n,fr,f),_(n,ct,f),e(ct,Lt),e(Lt,aa),y(Bn,aa,null),e(ct,Wl),e(ct,ra),e(ra,Rl),_(n,_r,f),_(n,Te,f),y(Gn,Te,null),e(Te,Vl),e(Te,pt),e(pt,Bl),e(pt,is),e(is,Gl),e(pt,Jl),e(pt,Jn),e(Jn,Yl),e(pt,Kl),e(Te,Zl),e(Te,ht),e(ht,Xl),e(ht,ls),e(ls,Ql),e(ht,ed),e(ht,ds),e(ds,td),e(ht,nd),e(Te,od),y(It,Te,null),_(n,gr,f),_(n,ut,f),e(ut,At),e(At,ia),y(Yn,ia,null),e(ut,sd),e(ut,la),e(la,ad),_(n,kr,f),_(n,re,f),y(Kn,re,null),e(re,rd),e(re,Zn),e(Zn,id),e(Zn,Xn),e(Xn,ld),e(Zn,dd),e(re,cd),e(re,Qn),e(Qn,pd),e(Qn,cs),e(cs,hd),e(Qn,ud),e(re,md),y(Ot,re,null),e(re,fd),e(re,St),y(eo,St,null),e(St,_d),e(St,da),e(da,gd),_(n,vr,f),_(n,mt,f),e(mt,Ht),e(Ht,ca),y(to,ca,null),e(mt,kd),e(mt,pa),e(pa,vd),_(n,Tr,f),_(n,Me,f),y(no,Me,null),e(Me,Td),e(Me,oo),e(oo,Md),e(oo,ps),e(ps,bd),e(oo,yd),e(Me,xd),e(Me,so),e(so,wd),e(so,ao),e(ao,$d),e(so,zd),e(Me,jd),e(Me,je),y(ro,je,null),e(je,qd),e(je,ft),e(ft,Ed),e(ft,hs),e(hs,Fd),e(ft,Pd),e(ft,ha),e(ha,Nd),e(ft,Cd),e(je,Ld),y(Dt,je,null),e(je,Id),y(Ut,je,null),_(n,Mr,f),_(n,_t,f),e(_t,Wt),e(Wt,ua),y(io,ua,null),e(_t,Ad),e(_t,ma),e(ma,Od),_(n,br,f),_(n,be,f),y(lo,be,null),e(be,Sd),e(be,co),e(co,Hd),e(co,us),e(us,Dd),e(co,Ud),e(be,Wd),e(be,po),e(po,Rd),e(po,ho),e(ho,Vd),e(po,Bd),e(be,Gd),e(be,pe),y(uo,pe,null),e(pe,Jd),e(pe,gt),e(gt,Yd),e(gt,ms),e(ms,Kd),e(gt,Zd),e(gt,fa),e(fa,Xd),e(gt,Qd),e(pe,ec),y(Rt,pe,null),e(pe,tc),e(pe,mo),e(mo,nc),e(mo,fo),e(fo,oc),e(mo,sc),e(pe,ac),y(Vt,pe,null),_(n,yr,f),_(n,kt,f),e(kt,Bt),e(Bt,_a),y(_o,_a,null),e(kt,rc),e(kt,ga),e(ga,ic),_(n,xr,f),_(n,vt,f),y(go,vt,null),e(vt,lc),e(vt,Gt),y(ko,Gt,null),e(Gt,dc),y(Jt,Gt,null),_(n,wr,f),_(n,Tt,f),e(Tt,Yt),e(Yt,ka),y(vo,ka,null),e(Tt,cc),e(Tt,va),e(va,pc),_(n,$r,f),_(n,ie,f),y(To,ie,null),e(ie,hc),e(ie,Mo),e(Mo,uc),e(Mo,fs),e(fs,mc),e(Mo,fc),e(ie,_c),e(ie,bo),e(bo,gc),e(bo,yo),e(yo,kc),e(bo,vc),e(ie,Tc),y(Kt,ie,null),e(ie,Mc),e(ie,qe),y(xo,qe,null),e(qe,bc),e(qe,Mt),e(Mt,yc),e(Mt,_s),e(_s,xc),e(Mt,wc),e(Mt,Ta),e(Ta,$c),e(Mt,zc),e(qe,jc),y(Zt,qe,null),e(qe,qc),y(Xt,qe,null),_(n,zr,f),_(n,bt,f),e(bt,Qt),e(Qt,Ma),y(wo,Ma,null),e(bt,Ec),e(bt,ba),e(ba,Fc),_(n,jr,f),_(n,le,f),y($o,le,null),e(le,Pc),e(le,zo),e(zo,Nc),e(zo,gs),e(gs,Cc),e(zo,Lc),e(le,Ic),e(le,jo),e(jo,Ac),e(jo,qo),e(qo,Oc),e(jo,Sc),e(le,Hc),y(en,le,null),e(le,Dc),e(le,he),y(Eo,he,null),e(he,Uc),e(he,yt),e(yt,Wc),e(yt,ks),e(ks,Rc),e(yt,Vc),e(yt,ya),e(ya,Bc),e(yt,Gc),e(he,Jc),y(tn,he,null),e(he,Yc),e(he,Fo),e(Fo,Kc),e(Fo,Po),e(Po,Zc),e(Fo,Xc),e(he,Qc),y(nn,he,null),_(n,qr,f),_(n,xt,f),e(xt,on),e(on,xa),y(No,xa,null),e(xt,ep),e(xt,wa),e(wa,tp),_(n,Er,f),_(n,R,f),y(Co,R,null),e(R,np),e(R,Lo),e(Lo,op),e(Lo,vs),e(vs,sp),e(Lo,ap),e(R,rp),e(R,Io),e(Io,ip),e(Io,Ao),e(Ao,lp),e(Io,dp),e(R,cp),e(R,$a),e($a,pp),e(R,hp),e(R,We),e(We,za),e(za,Oo),e(Oo,up),e(We,mp),e(We,ja),e(ja,So),e(So,fp),e(We,_p),e(We,qa),e(qa,Ho),e(Ho,gp),e(We,kp),e(We,Ea),e(Ea,Do),e(Do,vp),e(R,Tp),e(R,Ee),y(Uo,Ee,null),e(Ee,Mp),e(Ee,wt),e(wt,bp),e(wt,Fa),e(Fa,yp),e(wt,xp),e(wt,Pa),e(Pa,wp),e(wt,$p),e(Ee,zp),y(sn,Ee,null),e(Ee,jp),y(an,Ee,null),_(n,Fr,f),_(n,$t,f),e($t,rn),e(rn,Na),y(Wo,Na,null),e($t,qp),e($t,Ca),e(Ca,Ep),_(n,Pr,f),_(n,V,f),y(Ro,V,null),e(V,Fp),e(V,Vo),e(Vo,Pp),e(Vo,Ts),e(Ts,Np),e(Vo,Cp),e(V,Lp),e(V,Bo),e(Bo,Ip),e(Bo,Go),e(Go,Ap),e(Bo,Op),e(V,Sp),e(V,La),e(La,Hp),e(V,Dp),e(V,Re),e(Re,Ia),e(Ia,Jo),e(Jo,Up),e(Re,Wp),e(Re,Aa),e(Aa,Yo),e(Yo,Rp),e(Re,Vp),e(Re,Oa),e(Oa,Ko),e(Ko,Bp),e(Re,Gp),e(Re,Sa),e(Sa,Zo),e(Zo,Jp),e(V,Yp),e(V,Fe),y(Xo,Fe,null),e(Fe,Kp),e(Fe,zt),e(zt,Zp),e(zt,Ha),e(Ha,Xp),e(zt,Qp),e(zt,Da),e(Da,eh),e(zt,th),e(Fe,nh),y(ln,Fe,null),e(Fe,oh),y(dn,Fe,null),Nr=!0},p(n,[f]){const Qo={};f&2&&(Qo.$$scope={dirty:f,ctx:n}),It.$set(Qo);const Ua={};f&2&&(Ua.$$scope={dirty:f,ctx:n}),Ot.$set(Ua);const Wa={};f&2&&(Wa.$$scope={dirty:f,ctx:n}),Dt.$set(Wa);const Ra={};f&2&&(Ra.$$scope={dirty:f,ctx:n}),Ut.$set(Ra);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:n}),Rt.$set(cn);const Va={};f&2&&(Va.$$scope={dirty:f,ctx:n}),Vt.$set(Va);const Ba={};f&2&&(Ba.$$scope={dirty:f,ctx:n}),Jt.$set(Ba);const Ga={};f&2&&(Ga.$$scope={dirty:f,ctx:n}),Kt.$set(Ga);const es={};f&2&&(es.$$scope={dirty:f,ctx:n}),Zt.$set(es);const Ja={};f&2&&(Ja.$$scope={dirty:f,ctx:n}),Xt.$set(Ja);const Ya={};f&2&&(Ya.$$scope={dirty:f,ctx:n}),en.$set(Ya);const Ka={};f&2&&(Ka.$$scope={dirty:f,ctx:n}),tn.$set(Ka);const A={};f&2&&(A.$$scope={dirty:f,ctx:n}),nn.$set(A);const Za={};f&2&&(Za.$$scope={dirty:f,ctx:n}),sn.$set(Za);const Xa={};f&2&&(Xa.$$scope={dirty:f,ctx:n}),an.$set(Xa);const Qa={};f&2&&(Qa.$$scope={dirty:f,ctx:n}),ln.$set(Qa);const ts={};f&2&&(ts.$$scope={dirty:f,ctx:n}),dn.$set(ts)},i(n){Nr||(x(l.$$.fragment,n),x(X.$$.fragment,n),x(jn.$$.fragment,n),x(Fn.$$.fragment,n),x(Cn.$$.fragment,n),x(Dn.$$.fragment,n),x(Un.$$.fragment,n),x(Wn.$$.fragment,n),x(Rn.$$.fragment,n),x(Vn.$$.fragment,n),x(Bn.$$.fragment,n),x(Gn.$$.fragment,n),x(It.$$.fragment,n),x(Yn.$$.fragment,n),x(Kn.$$.fragment,n),x(Ot.$$.fragment,n),x(eo.$$.fragment,n),x(to.$$.fragment,n),x(no.$$.fragment,n),x(ro.$$.fragment,n),x(Dt.$$.fragment,n),x(Ut.$$.fragment,n),x(io.$$.fragment,n),x(lo.$$.fragment,n),x(uo.$$.fragment,n),x(Rt.$$.fragment,n),x(Vt.$$.fragment,n),x(_o.$$.fragment,n),x(go.$$.fragment,n),x(ko.$$.fragment,n),x(Jt.$$.fragment,n),x(vo.$$.fragment,n),x(To.$$.fragment,n),x(Kt.$$.fragment,n),x(xo.$$.fragment,n),x(Zt.$$.fragment,n),x(Xt.$$.fragment,n),x(wo.$$.fragment,n),x($o.$$.fragment,n),x(en.$$.fragment,n),x(Eo.$$.fragment,n),x(tn.$$.fragment,n),x(nn.$$.fragment,n),x(No.$$.fragment,n),x(Co.$$.fragment,n),x(Uo.$$.fragment,n),x(sn.$$.fragment,n),x(an.$$.fragment,n),x(Wo.$$.fragment,n),x(Ro.$$.fragment,n),x(Xo.$$.fragment,n),x(ln.$$.fragment,n),x(dn.$$.fragment,n),Nr=!0)},o(n){w(l.$$.fragment,n),w(X.$$.fragment,n),w(jn.$$.fragment,n),w(Fn.$$.fragment,n),w(Cn.$$.fragment,n),w(Dn.$$.fragment,n),w(Un.$$.fragment,n),w(Wn.$$.fragment,n),w(Rn.$$.fragment,n),w(Vn.$$.fragment,n),w(Bn.$$.fragment,n),w(Gn.$$.fragment,n),w(It.$$.fragment,n),w(Yn.$$.fragment,n),w(Kn.$$.fragment,n),w(Ot.$$.fragment,n),w(eo.$$.fragment,n),w(to.$$.fragment,n),w(no.$$.fragment,n),w(ro.$$.fragment,n),w(Dt.$$.fragment,n),w(Ut.$$.fragment,n),w(io.$$.fragment,n),w(lo.$$.fragment,n),w(uo.$$.fragment,n),w(Rt.$$.fragment,n),w(Vt.$$.fragment,n),w(_o.$$.fragment,n),w(go.$$.fragment,n),w(ko.$$.fragment,n),w(Jt.$$.fragment,n),w(vo.$$.fragment,n),w(To.$$.fragment,n),w(Kt.$$.fragment,n),w(xo.$$.fragment,n),w(Zt.$$.fragment,n),w(Xt.$$.fragment,n),w(wo.$$.fragment,n),w($o.$$.fragment,n),w(en.$$.fragment,n),w(Eo.$$.fragment,n),w(tn.$$.fragment,n),w(nn.$$.fragment,n),w(No.$$.fragment,n),w(Co.$$.fragment,n),w(Uo.$$.fragment,n),w(sn.$$.fragment,n),w(an.$$.fragment,n),w(Wo.$$.fragment,n),w(Ro.$$.fragment,n),w(Xo.$$.fragment,n),w(ln.$$.fragment,n),w(dn.$$.fragment,n),Nr=!1},d(n){t(h),n&&t(v),n&&t(g),$(l),n&&t(ce),n&&t(E),n&&t(xe),n&&t(G),n&&t(we),n&&t(L),$(X),n&&t(J),n&&t(P),n&&t(er),n&&t(at),$(jn),n&&t(tr),n&&t($e),n&&t(nr),n&&t(it),$(Fn),n&&t(or),n&&t(Ve),n&&t(sr),n&&t(lt),$(Cn),n&&t(ar),n&&t(ze),n&&t(rr),n&&t(Nt),n&&t(ir),$(Dn,n),n&&t(lr),n&&t(ss),n&&t(dr),$(Un,n),n&&t(cr),n&&t(dt),$(Wn),n&&t(pr),n&&t(as),n&&t(hr),$(Rn,n),n&&t(ur),n&&t(rs),n&&t(mr),$(Vn,n),n&&t(fr),n&&t(ct),$(Bn),n&&t(_r),n&&t(Te),$(Gn),$(It),n&&t(gr),n&&t(ut),$(Yn),n&&t(kr),n&&t(re),$(Kn),$(Ot),$(eo),n&&t(vr),n&&t(mt),$(to),n&&t(Tr),n&&t(Me),$(no),$(ro),$(Dt),$(Ut),n&&t(Mr),n&&t(_t),$(io),n&&t(br),n&&t(be),$(lo),$(uo),$(Rt),$(Vt),n&&t(yr),n&&t(kt),$(_o),n&&t(xr),n&&t(vt),$(go),$(ko),$(Jt),n&&t(wr),n&&t(Tt),$(vo),n&&t($r),n&&t(ie),$(To),$(Kt),$(xo),$(Zt),$(Xt),n&&t(zr),n&&t(bt),$(wo),n&&t(jr),n&&t(le),$($o),$(en),$(Eo),$(tn),$(nn),n&&t(qr),n&&t(xt),$(No),n&&t(Er),n&&t(R),$(Co),$(Uo),$(sn),$(an),n&&t(Fr),n&&t($t),$(Wo),n&&t(Pr),n&&t(V),$(Ro),$(Xo),$(ln),$(dn)}}}const Vm={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function Bm(z){return $m(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qm extends bm{constructor(h){super();ym(this,h,Bm,Rm,xm,{})}}export{Qm as default,Vm as metadata};
