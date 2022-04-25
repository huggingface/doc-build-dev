import{S as Br,i as Hr,s as Ur,e as n,k as l,w as b,t as r,M as Vr,c as s,d as o,m as c,a,x as v,h as i,b as h,F as e,g as _,y,q as w,o as T,B as $,v as Xr,L as ko}from"../../chunks/vendor-6b77c823.js";import{T as Wr}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-1088f2fb.js";import{C as it}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as go}from"../../chunks/ExampleCodeBlock-5212b321.js";function Rr(q){let p,M,g,u,k;return u=new it({props:{code:`from transformers import M2M100Model, M2M100Config

# Initializing a M2M100 facebook/m2m100_418M style configuration
configuration = M2M100Config()

# Initializing a model from the facebook/m2m100_418M style configuration
model = M2M100Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Model, M2M100Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a M2M100 facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = M2M100Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),M=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var f=a(p);M=i(f,"Example:"),f.forEach(o),g=c(d),v(u.$$.fragment,d)},m(d,f){_(d,p,f),e(p,M),_(d,g,f),y(u,d,f),k=!0},p:ko,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){T(u.$$.fragment,d),k=!1},d(d){d&&o(p),d&&o(g),$(u,d)}}}function Jr(q){let p,M,g,u,k;return u=new it({props:{code:`from transformers import M2M100Tokenizer

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="ro")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
model(**model_inputs, labels=labels)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**model_inputs, labels=labels)  <span class="hljs-comment"># should work</span>`}}),{c(){p=n("p"),M=r("Examples:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var f=a(p);M=i(f,"Examples:"),f.forEach(o),g=c(d),v(u.$$.fragment,d)},m(d,f){_(d,p,f),e(p,M),_(d,g,f),y(u,d,f),k=!0},p:ko,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){T(u.$$.fragment,d),k=!1},d(d){d&&o(p),d&&o(g),$(u,d)}}}function Kr(q){let p,M,g,u,k;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var f=a(p);M=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var N=a(g);u=i(N,"Module"),N.forEach(o),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(d,f){_(d,p,f),e(p,M),e(p,g),e(g,u),e(p,k)},d(d){d&&o(p)}}}function Zr(q){let p,M,g,u,k;return u=new it({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
import torch

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")
model = M2M100Model.from_pretrained("facebook/m2m100_418M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),M=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var f=a(p);M=i(f,"Example:"),f.forEach(o),g=c(d),v(u.$$.fragment,d)},m(d,f){_(d,p,f),e(p,M),_(d,g,f),y(u,d,f),k=!0},p:ko,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){T(u.$$.fragment,d),k=!1},d(d){d&&o(p),d&&o(g),$(u,d)}}}function Qr(q){let p,M,g,u,k;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var f=a(p);M=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var N=a(g);u=i(N,"Module"),N.forEach(o),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(d,f){_(d,p,f),e(p,M),e(p,g),e(g,u),e(p,k)},d(d){d&&o(p)}}}function Yr(q){let p,M,g,u,k;return u=new it({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

text_to_translate = "Life is like a box of chocolates"
model_inputs = tokenizer(text_to_translate, return_tensors="pt")

# translate to French
gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id("fr"))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){p=n("p"),M=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var f=a(p);M=i(f,"Example:"),f.forEach(o),g=c(d),v(u.$$.fragment,d)},m(d,f){_(d,p,f),e(p,M),_(d,g,f),y(u,d,f),k=!0},p:ko,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){T(u.$$.fragment,d),k=!1},d(d){d&&o(p),d&&o(g),$(u,d)}}}function ei(q){let p,M,g,u,k;return u=new it({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

text_to_translate = "Life is like a box of chocolates"
model_inputs = tokenizer(text_to_translate, return_tensors="pt")

# translate to French
gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id("fr"))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){p=n("p"),M=r("Translation example::"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var f=a(p);M=i(f,"Translation example::"),f.forEach(o),g=c(d),v(u.$$.fragment,d)},m(d,f){_(d,p,f),e(p,M),_(d,g,f),y(u,d,f),k=!0},p:ko,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){T(u.$$.fragment,d),k=!1},d(d){d&&o(p),d&&o(g),$(u,d)}}}function ti(q){let p,M,g,u,k,d,f,N,rn,Mo,H,ee,Et,ye,dn,Ct,ln,bo,te,cn,we,pn,hn,vo,dt,mn,yo,lt,jt,un,wo,oe,fn,Te,_n,gn,To,U,ne,Ft,$e,kn,Pt,Mn,$o,A,bn,St,vn,yn,At,wn,Tn,Dt,$n,zn,zo,C,qn,ct,xn,En,Lt,Cn,jn,It,Fn,Pn,Nt,Sn,An,qo,pt,Gt,Dn,xo,ze,Eo,ht,qe,Ot,Ln,In,E,Nn,Wt,Gn,On,Bt,Wn,Bn,Ht,Hn,Un,Ut,Vn,Xn,Vt,Rn,Jn,Co,xe,jo,V,se,Xt,Ee,Kn,Rt,Zn,Fo,F,Ce,Qn,X,Yn,mt,es,ts,je,os,ns,ss,R,as,ut,rs,is,ft,ds,ls,cs,ae,Po,J,re,Jt,Fe,ps,Kt,hs,So,z,Pe,ms,Se,us,Ae,fs,_s,gs,De,ks,_t,Ms,bs,vs,ie,ys,D,Le,ws,Ie,Ts,Zt,$s,zs,qs,Ne,Ge,Qt,xs,Es,Yt,Cs,js,Oe,eo,Fs,Ps,to,Ss,As,oo,Ds,Ls,de,We,Is,Be,Ns,no,Gs,Os,Ws,G,He,Bs,gt,Hs,kt,Us,Vs,so,Xs,Rs,Mt,Ue,Ao,K,le,ao,Ve,Js,ro,Ks,Do,P,Xe,Zs,Re,Qs,bt,Ys,ea,ta,Je,oa,Ke,na,sa,aa,L,Ze,ra,Z,ia,vt,da,la,io,ca,pa,ha,ce,ma,pe,Lo,Q,he,lo,Qe,ua,co,fa,Io,S,Ye,_a,et,ga,yt,ka,Ma,ba,tt,va,ot,ya,wa,Ta,j,nt,$a,Y,za,wt,qa,xa,po,Ea,Ca,ja,me,Fa,ue,Pa,fe,No;return d=new rt({}),ye=new rt({}),$e=new rt({}),ze=new it({props:{code:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="fr")

src_text = "Life is like a box of chocolates."
tgt_text = "La vie est comme une bo\xEEte de chocolat."

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

loss = model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;fr&quot;</span>)

src_text = <span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>
tgt_text = <span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

loss = model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),xe=new it({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

hi_text = "\u091C\u0940\u0935\u0928 \u090F\u0915 \u091A\u0949\u0915\u0932\u0947\u091F \u092C\u0949\u0915\u094D\u0938 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964"
chinese_text = "\u751F\u6D3B\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\u3002"

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

# translate Hindi to French
tokenizer.src_lang = "hi"
encoded_hi = tokenizer(hi_text, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id("fr"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)

# translate Chinese to English
tokenizer.src_lang = "zh"
encoded_zh = tokenizer(chinese_text, return_tensors="pt")
generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id("en"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>hi_text = <span class="hljs-string">&quot;\u091C\u0940\u0935\u0928 \u090F\u0915 \u091A\u0949\u0915\u0932\u0947\u091F \u092C\u0949\u0915\u094D\u0938 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>chinese_text = <span class="hljs-string">&quot;\u751F\u6D3B\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Hindi to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;hi&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_hi = tokenizer(hi_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Chinese to English</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;zh&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_zh = tokenizer(chinese_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;en&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`}}),Ee=new rt({}),Ce=new B({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.M2M100Config.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.M2M100Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.M2M100Config.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.M2M100Config.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.M2M100Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.M2M100Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.M2M100Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.M2M100Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.M2M100Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.M2M100Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.M2M100Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.M2M100Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/configuration_m2m_100.py#L34"}}),ae=new go({props:{anchor:"transformers.M2M100Config.example",$$slots:{default:[Rr]},$$scope:{ctx:q}}}),Fe=new rt({}),Pe=new B({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.M2M100Tokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary.`,name:"spm_file"},{anchor:"transformers.M2M100Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.M2M100Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.M2M100Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.M2M100Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.M2M100Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.M2M100Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.M2M100Tokenizer.language_codes",description:`<strong>language_codes</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;m2m100&quot;</code>) &#x2014;
What language codes to use. Should be one of <code>&quot;m2m100&quot;</code> or <code>&quot;wmt21&quot;</code>.`,name:"language_codes"},{anchor:"transformers.M2M100Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/tokenization_m2m_100.py#L65"}}),ie=new go({props:{anchor:"transformers.M2M100Tokenizer.example",$$slots:{default:[Jr]},$$scope:{ctx:q}}}),Le=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/tokenization_m2m_100.py#L258",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),We=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/tokenization_m2m_100.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),He=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/tokenization_utils_base.py#L2855",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ue=new B({props:{name:"save_vocabulary",anchor:"transformers.M2M100Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/tokenization_m2m_100.py#L304"}}),Ve=new rt({}),Xe=new B({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/modeling_m2m_100.py#L1104"}}),Ze=new B({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/modeling_m2m_100.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
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
`}}),ce=new Wr({props:{$$slots:{default:[Kr]},$$scope:{ctx:q}}}),pe=new go({props:{anchor:"transformers.M2M100Model.forward.example",$$slots:{default:[Zr]},$$scope:{ctx:q}}}),Qe=new rt({}),Ye=new B({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/modeling_m2m_100.py#L1215"}}),nt=new B({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/m2m_100/modeling_m2m_100.py#L1253",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
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
`}}),me=new Wr({props:{$$slots:{default:[Qr]},$$scope:{ctx:q}}}),ue=new go({props:{anchor:"transformers.M2M100ForConditionalGeneration.forward.example",$$slots:{default:[Yr]},$$scope:{ctx:q}}}),fe=new go({props:{anchor:"transformers.M2M100ForConditionalGeneration.forward.example-2",$$slots:{default:[ei]},$$scope:{ctx:q}}}),{c(){p=n("meta"),M=l(),g=n("h1"),u=n("a"),k=n("span"),b(d.$$.fragment),f=l(),N=n("span"),rn=r("M2M100"),Mo=l(),H=n("h2"),ee=n("a"),Et=n("span"),b(ye.$$.fragment),dn=l(),Ct=n("span"),ln=r("Overview"),bo=l(),te=n("p"),cn=r("The M2M100 model was proposed in "),we=n("a"),pn=r("Beyond English-Centric Multilingual Machine Translation"),hn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),vo=l(),dt=n("p"),mn=r("The abstract from the paper is the following:"),yo=l(),lt=n("p"),jt=n("em"),un=r(`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),wo=l(),oe=n("p"),fn=r("This model was contributed by "),Te=n("a"),_n=r("valhalla"),gn=r("."),To=l(),U=n("h3"),ne=n("a"),Ft=n("span"),b($e.$$.fragment),kn=l(),Pt=n("span"),Mn=r("Training and Generation"),$o=l(),A=n("p"),bn=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),St=n("code"),vn=r("[lang_code] X [eos]"),yn=r(", where "),At=n("code"),wn=r("lang_code"),Tn=r(` is source language
id for source text and target language id for target text, with `),Dt=n("code"),$n=r("X"),zn=r(" being the source or target text."),zo=l(),C=n("p"),qn=r("The "),ct=n("a"),xn=r("M2M100Tokenizer"),En=r(" depends on "),Lt=n("code"),Cn=r("sentencepiece"),jn=r(` so be sure to install it before running the
examples. To install `),It=n("code"),Fn=r("sentencepiece"),Pn=r(" run "),Nt=n("code"),Sn=r("pip install sentencepiece"),An=r("."),qo=l(),pt=n("ul"),Gt=n("li"),Dn=r("Supervised Training"),xo=l(),b(ze.$$.fragment),Eo=l(),ht=n("ul"),qe=n("li"),Ot=n("p"),Ln=r("Generation"),In=l(),E=n("p"),Nn=r("M2M100 uses the "),Wt=n("code"),Gn=r("eos_token_id"),On=r(" as the "),Bt=n("code"),Wn=r("decoder_start_token_id"),Bn=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Ht=n("em"),Hn=r("forced_bos_token_id"),Un=r(" parameter to the "),Ut=n("em"),Vn=r("generate"),Xn=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Vt=n("em"),Rn=r("facebook/m2m100_418M"),Jn=r(" checkpoint."),Co=l(),b(xe.$$.fragment),jo=l(),V=n("h2"),se=n("a"),Xt=n("span"),b(Ee.$$.fragment),Kn=l(),Rt=n("span"),Zn=r("M2M100Config"),Fo=l(),F=n("div"),b(Ce.$$.fragment),Qn=l(),X=n("p"),Yn=r("This is the configuration class to store the configuration of a "),mt=n("a"),es=r("M2M100Model"),ts=r(`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),je=n("a"),os=r("m2m100_418M"),ns=r(" architecture."),ss=l(),R=n("p"),as=r("Configuration objects inherit from "),ut=n("a"),rs=r("PretrainedConfig"),is=r(` and can be used to control the model outputs. Read the
documentation from `),ft=n("a"),ds=r("PretrainedConfig"),ls=r(" for more information."),cs=l(),b(ae.$$.fragment),Po=l(),J=n("h2"),re=n("a"),Jt=n("span"),b(Fe.$$.fragment),ps=l(),Kt=n("span"),hs=r("M2M100Tokenizer"),So=l(),z=n("div"),b(Pe.$$.fragment),ms=l(),Se=n("p"),us=r("Construct an M2M100 tokenizer. Based on "),Ae=n("a"),fs=r("SentencePiece"),_s=r("."),gs=l(),De=n("p"),ks=r("This tokenizer inherits from "),_t=n("a"),Ms=r("PreTrainedTokenizer"),bs=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vs=l(),b(ie.$$.fragment),ys=l(),D=n("div"),b(Le.$$.fragment),ws=l(),Ie=n("p"),Ts=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Zt=n("code"),$s=r("X"),zs=r(" represents the sequence:"),qs=l(),Ne=n("ul"),Ge=n("li"),Qt=n("code"),xs=r("input_ids"),Es=r(" (for encoder) "),Yt=n("code"),Cs=r("X [eos, src_lang_code]"),js=l(),Oe=n("li"),eo=n("code"),Fs=r("decoder_input_ids"),Ps=r(": (for decoder) "),to=n("code"),Ss=r("X [eos, tgt_lang_code]"),As=l(),oo=n("p"),Ds=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ls=l(),de=n("div"),b(We.$$.fragment),Is=l(),Be=n("p"),Ns=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),no=n("code"),Gs=r("prepare_for_model"),Os=r(" method."),Ws=l(),G=n("div"),b(He.$$.fragment),Bs=l(),gt=n("p"),Hs=r("Create the token type IDs corresponding to the sequences passed. "),kt=n("a"),Us=r(`What are token type
IDs?`),Vs=l(),so=n("p"),Xs=r("Should be overridden in a subclass if the model has a special way of building those."),Rs=l(),Mt=n("div"),b(Ue.$$.fragment),Ao=l(),K=n("h2"),le=n("a"),ao=n("span"),b(Ve.$$.fragment),Js=l(),ro=n("span"),Ks=r("M2M100Model"),Do=l(),P=n("div"),b(Xe.$$.fragment),Zs=l(),Re=n("p"),Qs=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bt=n("a"),Ys=r("PreTrainedModel"),ea=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta=l(),Je=n("p"),oa=r("This model is also a PyTorch "),Ke=n("a"),na=r("torch.nn.Module"),sa=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aa=l(),L=n("div"),b(Ze.$$.fragment),ra=l(),Z=n("p"),ia=r("The "),vt=n("a"),da=r("M2M100Model"),la=r(" forward method, overrides the "),io=n("code"),ca=r("__call__"),pa=r(" special method."),ha=l(),b(ce.$$.fragment),ma=l(),b(pe.$$.fragment),Lo=l(),Q=n("h2"),he=n("a"),lo=n("span"),b(Qe.$$.fragment),ua=l(),co=n("span"),fa=r("M2M100ForConditionalGeneration"),Io=l(),S=n("div"),b(Ye.$$.fragment),_a=l(),et=n("p"),ga=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),yt=n("a"),ka=r("PreTrainedModel"),Ma=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba=l(),tt=n("p"),va=r("This model is also a PyTorch "),ot=n("a"),ya=r("torch.nn.Module"),wa=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ta=l(),j=n("div"),b(nt.$$.fragment),$a=l(),Y=n("p"),za=r("The "),wt=n("a"),qa=r("M2M100ForConditionalGeneration"),xa=r(" forward method, overrides the "),po=n("code"),Ea=r("__call__"),Ca=r(" special method."),ja=l(),b(me.$$.fragment),Fa=l(),b(ue.$$.fragment),Pa=l(),b(fe.$$.fragment),this.h()},l(t){const m=Vr('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),M=c(t),g=s(t,"H1",{class:!0});var st=a(g);u=s(st,"A",{id:!0,class:!0,href:!0});var ho=a(u);k=s(ho,"SPAN",{});var mo=a(k);v(d.$$.fragment,mo),mo.forEach(o),ho.forEach(o),f=c(st),N=s(st,"SPAN",{});var uo=a(N);rn=i(uo,"M2M100"),uo.forEach(o),st.forEach(o),Mo=c(t),H=s(t,"H2",{class:!0});var at=a(H);ee=s(at,"A",{id:!0,class:!0,href:!0});var fo=a(ee);Et=s(fo,"SPAN",{});var _o=a(Et);v(ye.$$.fragment,_o),_o.forEach(o),fo.forEach(o),dn=c(at),Ct=s(at,"SPAN",{});var Aa=a(Ct);ln=i(Aa,"Overview"),Aa.forEach(o),at.forEach(o),bo=c(t),te=s(t,"P",{});var Go=a(te);cn=i(Go,"The M2M100 model was proposed in "),we=s(Go,"A",{href:!0,rel:!0});var Da=a(we);pn=i(Da,"Beyond English-Centric Multilingual Machine Translation"),Da.forEach(o),hn=i(Go,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Go.forEach(o),vo=c(t),dt=s(t,"P",{});var La=a(dt);mn=i(La,"The abstract from the paper is the following:"),La.forEach(o),yo=c(t),lt=s(t,"P",{});var Ia=a(lt);jt=s(Ia,"EM",{});var Na=a(jt);un=i(Na,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Na.forEach(o),Ia.forEach(o),wo=c(t),oe=s(t,"P",{});var Oo=a(oe);fn=i(Oo,"This model was contributed by "),Te=s(Oo,"A",{href:!0,rel:!0});var Ga=a(Te);_n=i(Ga,"valhalla"),Ga.forEach(o),gn=i(Oo,"."),Oo.forEach(o),To=c(t),U=s(t,"H3",{class:!0});var Wo=a(U);ne=s(Wo,"A",{id:!0,class:!0,href:!0});var Oa=a(ne);Ft=s(Oa,"SPAN",{});var Wa=a(Ft);v($e.$$.fragment,Wa),Wa.forEach(o),Oa.forEach(o),kn=c(Wo),Pt=s(Wo,"SPAN",{});var Ba=a(Pt);Mn=i(Ba,"Training and Generation"),Ba.forEach(o),Wo.forEach(o),$o=c(t),A=s(t,"P",{});var _e=a(A);bn=i(_e,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),St=s(_e,"CODE",{});var Ha=a(St);vn=i(Ha,"[lang_code] X [eos]"),Ha.forEach(o),yn=i(_e,", where "),At=s(_e,"CODE",{});var Ua=a(At);wn=i(Ua,"lang_code"),Ua.forEach(o),Tn=i(_e,` is source language
id for source text and target language id for target text, with `),Dt=s(_e,"CODE",{});var Va=a(Dt);$n=i(Va,"X"),Va.forEach(o),zn=i(_e," being the source or target text."),_e.forEach(o),zo=c(t),C=s(t,"P",{});var O=a(C);qn=i(O,"The "),ct=s(O,"A",{href:!0});var Xa=a(ct);xn=i(Xa,"M2M100Tokenizer"),Xa.forEach(o),En=i(O," depends on "),Lt=s(O,"CODE",{});var Ra=a(Lt);Cn=i(Ra,"sentencepiece"),Ra.forEach(o),jn=i(O,` so be sure to install it before running the
examples. To install `),It=s(O,"CODE",{});var Ja=a(It);Fn=i(Ja,"sentencepiece"),Ja.forEach(o),Pn=i(O," run "),Nt=s(O,"CODE",{});var Ka=a(Nt);Sn=i(Ka,"pip install sentencepiece"),Ka.forEach(o),An=i(O,"."),O.forEach(o),qo=c(t),pt=s(t,"UL",{});var Za=a(pt);Gt=s(Za,"LI",{});var Qa=a(Gt);Dn=i(Qa,"Supervised Training"),Qa.forEach(o),Za.forEach(o),xo=c(t),v(ze.$$.fragment,t),Eo=c(t),ht=s(t,"UL",{});var Ya=a(ht);qe=s(Ya,"LI",{});var Bo=a(qe);Ot=s(Bo,"P",{});var er=a(Ot);Ln=i(er,"Generation"),er.forEach(o),In=c(Bo),E=s(Bo,"P",{});var I=a(E);Nn=i(I,"M2M100 uses the "),Wt=s(I,"CODE",{});var tr=a(Wt);Gn=i(tr,"eos_token_id"),tr.forEach(o),On=i(I," as the "),Bt=s(I,"CODE",{});var or=a(Bt);Wn=i(or,"decoder_start_token_id"),or.forEach(o),Bn=i(I,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Ht=s(I,"EM",{});var nr=a(Ht);Hn=i(nr,"forced_bos_token_id"),nr.forEach(o),Un=i(I," parameter to the "),Ut=s(I,"EM",{});var sr=a(Ut);Vn=i(sr,"generate"),sr.forEach(o),Xn=i(I,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Vt=s(I,"EM",{});var ar=a(Vt);Rn=i(ar,"facebook/m2m100_418M"),ar.forEach(o),Jn=i(I," checkpoint."),I.forEach(o),Bo.forEach(o),Ya.forEach(o),Co=c(t),v(xe.$$.fragment,t),jo=c(t),V=s(t,"H2",{class:!0});var Ho=a(V);se=s(Ho,"A",{id:!0,class:!0,href:!0});var rr=a(se);Xt=s(rr,"SPAN",{});var ir=a(Xt);v(Ee.$$.fragment,ir),ir.forEach(o),rr.forEach(o),Kn=c(Ho),Rt=s(Ho,"SPAN",{});var dr=a(Rt);Zn=i(dr,"M2M100Config"),dr.forEach(o),Ho.forEach(o),Fo=c(t),F=s(t,"DIV",{class:!0});var ge=a(F);v(Ce.$$.fragment,ge),Qn=c(ge),X=s(ge,"P",{});var Tt=a(X);Yn=i(Tt,"This is the configuration class to store the configuration of a "),mt=s(Tt,"A",{href:!0});var lr=a(mt);es=i(lr,"M2M100Model"),lr.forEach(o),ts=i(Tt,`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),je=s(Tt,"A",{href:!0,rel:!0});var cr=a(je);os=i(cr,"m2m100_418M"),cr.forEach(o),ns=i(Tt," architecture."),Tt.forEach(o),ss=c(ge),R=s(ge,"P",{});var $t=a(R);as=i($t,"Configuration objects inherit from "),ut=s($t,"A",{href:!0});var pr=a(ut);rs=i(pr,"PretrainedConfig"),pr.forEach(o),is=i($t,` and can be used to control the model outputs. Read the
documentation from `),ft=s($t,"A",{href:!0});var hr=a(ft);ds=i(hr,"PretrainedConfig"),hr.forEach(o),ls=i($t," for more information."),$t.forEach(o),cs=c(ge),v(ae.$$.fragment,ge),ge.forEach(o),Po=c(t),J=s(t,"H2",{class:!0});var Uo=a(J);re=s(Uo,"A",{id:!0,class:!0,href:!0});var mr=a(re);Jt=s(mr,"SPAN",{});var ur=a(Jt);v(Fe.$$.fragment,ur),ur.forEach(o),mr.forEach(o),ps=c(Uo),Kt=s(Uo,"SPAN",{});var fr=a(Kt);hs=i(fr,"M2M100Tokenizer"),fr.forEach(o),Uo.forEach(o),So=c(t),z=s(t,"DIV",{class:!0});var x=a(z);v(Pe.$$.fragment,x),ms=c(x),Se=s(x,"P",{});var Vo=a(Se);us=i(Vo,"Construct an M2M100 tokenizer. Based on "),Ae=s(Vo,"A",{href:!0,rel:!0});var _r=a(Ae);fs=i(_r,"SentencePiece"),_r.forEach(o),_s=i(Vo,"."),Vo.forEach(o),gs=c(x),De=s(x,"P",{});var Xo=a(De);ks=i(Xo,"This tokenizer inherits from "),_t=s(Xo,"A",{href:!0});var gr=a(_t);Ms=i(gr,"PreTrainedTokenizer"),gr.forEach(o),bs=i(Xo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xo.forEach(o),vs=c(x),v(ie.$$.fragment,x),ys=c(x),D=s(x,"DIV",{class:!0});var ke=a(D);v(Le.$$.fragment,ke),ws=c(ke),Ie=s(ke,"P",{});var Ro=a(Ie);Ts=i(Ro,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Zt=s(Ro,"CODE",{});var kr=a(Zt);$s=i(kr,"X"),kr.forEach(o),zs=i(Ro," represents the sequence:"),Ro.forEach(o),qs=c(ke),Ne=s(ke,"UL",{});var Jo=a(Ne);Ge=s(Jo,"LI",{});var Ko=a(Ge);Qt=s(Ko,"CODE",{});var Mr=a(Qt);xs=i(Mr,"input_ids"),Mr.forEach(o),Es=i(Ko," (for encoder) "),Yt=s(Ko,"CODE",{});var br=a(Yt);Cs=i(br,"X [eos, src_lang_code]"),br.forEach(o),Ko.forEach(o),js=c(Jo),Oe=s(Jo,"LI",{});var Zo=a(Oe);eo=s(Zo,"CODE",{});var vr=a(eo);Fs=i(vr,"decoder_input_ids"),vr.forEach(o),Ps=i(Zo,": (for decoder) "),to=s(Zo,"CODE",{});var yr=a(to);Ss=i(yr,"X [eos, tgt_lang_code]"),yr.forEach(o),Zo.forEach(o),Jo.forEach(o),As=c(ke),oo=s(ke,"P",{});var wr=a(oo);Ds=i(wr,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),wr.forEach(o),ke.forEach(o),Ls=c(x),de=s(x,"DIV",{class:!0});var Qo=a(de);v(We.$$.fragment,Qo),Is=c(Qo),Be=s(Qo,"P",{});var Yo=a(Be);Ns=i(Yo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),no=s(Yo,"CODE",{});var Tr=a(no);Gs=i(Tr,"prepare_for_model"),Tr.forEach(o),Os=i(Yo," method."),Yo.forEach(o),Qo.forEach(o),Ws=c(x),G=s(x,"DIV",{class:!0});var zt=a(G);v(He.$$.fragment,zt),Bs=c(zt),gt=s(zt,"P",{});var Sa=a(gt);Hs=i(Sa,"Create the token type IDs corresponding to the sequences passed. "),kt=s(Sa,"A",{href:!0});var $r=a(kt);Us=i($r,`What are token type
IDs?`),$r.forEach(o),Sa.forEach(o),Vs=c(zt),so=s(zt,"P",{});var zr=a(so);Xs=i(zr,"Should be overridden in a subclass if the model has a special way of building those."),zr.forEach(o),zt.forEach(o),Rs=c(x),Mt=s(x,"DIV",{class:!0});var qr=a(Mt);v(Ue.$$.fragment,qr),qr.forEach(o),x.forEach(o),Ao=c(t),K=s(t,"H2",{class:!0});var en=a(K);le=s(en,"A",{id:!0,class:!0,href:!0});var xr=a(le);ao=s(xr,"SPAN",{});var Er=a(ao);v(Ve.$$.fragment,Er),Er.forEach(o),xr.forEach(o),Js=c(en),ro=s(en,"SPAN",{});var Cr=a(ro);Ks=i(Cr,"M2M100Model"),Cr.forEach(o),en.forEach(o),Do=c(t),P=s(t,"DIV",{class:!0});var Me=a(P);v(Xe.$$.fragment,Me),Zs=c(Me),Re=s(Me,"P",{});var tn=a(Re);Qs=i(tn,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bt=s(tn,"A",{href:!0});var jr=a(bt);Ys=i(jr,"PreTrainedModel"),jr.forEach(o),ea=i(tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tn.forEach(o),ta=c(Me),Je=s(Me,"P",{});var on=a(Je);oa=i(on,"This model is also a PyTorch "),Ke=s(on,"A",{href:!0,rel:!0});var Fr=a(Ke);na=i(Fr,"torch.nn.Module"),Fr.forEach(o),sa=i(on,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),on.forEach(o),aa=c(Me),L=s(Me,"DIV",{class:!0});var be=a(L);v(Ze.$$.fragment,be),ra=c(be),Z=s(be,"P",{});var qt=a(Z);ia=i(qt,"The "),vt=s(qt,"A",{href:!0});var Pr=a(vt);da=i(Pr,"M2M100Model"),Pr.forEach(o),la=i(qt," forward method, overrides the "),io=s(qt,"CODE",{});var Sr=a(io);ca=i(Sr,"__call__"),Sr.forEach(o),pa=i(qt," special method."),qt.forEach(o),ha=c(be),v(ce.$$.fragment,be),ma=c(be),v(pe.$$.fragment,be),be.forEach(o),Me.forEach(o),Lo=c(t),Q=s(t,"H2",{class:!0});var nn=a(Q);he=s(nn,"A",{id:!0,class:!0,href:!0});var Ar=a(he);lo=s(Ar,"SPAN",{});var Dr=a(lo);v(Qe.$$.fragment,Dr),Dr.forEach(o),Ar.forEach(o),ua=c(nn),co=s(nn,"SPAN",{});var Lr=a(co);fa=i(Lr,"M2M100ForConditionalGeneration"),Lr.forEach(o),nn.forEach(o),Io=c(t),S=s(t,"DIV",{class:!0});var ve=a(S);v(Ye.$$.fragment,ve),_a=c(ve),et=s(ve,"P",{});var sn=a(et);ga=i(sn,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),yt=s(sn,"A",{href:!0});var Ir=a(yt);ka=i(Ir,"PreTrainedModel"),Ir.forEach(o),Ma=i(sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sn.forEach(o),ba=c(ve),tt=s(ve,"P",{});var an=a(tt);va=i(an,"This model is also a PyTorch "),ot=s(an,"A",{href:!0,rel:!0});var Nr=a(ot);ya=i(Nr,"torch.nn.Module"),Nr.forEach(o),wa=i(an,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),an.forEach(o),Ta=c(ve),j=s(ve,"DIV",{class:!0});var W=a(j);v(nt.$$.fragment,W),$a=c(W),Y=s(W,"P",{});var xt=a(Y);za=i(xt,"The "),wt=s(xt,"A",{href:!0});var Gr=a(wt);qa=i(Gr,"M2M100ForConditionalGeneration"),Gr.forEach(o),xa=i(xt," forward method, overrides the "),po=s(xt,"CODE",{});var Or=a(po);Ea=i(Or,"__call__"),Or.forEach(o),Ca=i(xt," special method."),xt.forEach(o),ja=c(W),v(me.$$.fragment,W),Fa=c(W),v(ue.$$.fragment,W),Pa=c(W),v(fe.$$.fragment,W),W.forEach(o),ve.forEach(o),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(oi)),h(u,"id","m2m100"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#m2m100"),h(g,"class","relative group"),h(ee,"id","overview"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#overview"),h(H,"class","relative group"),h(we,"href","https://arxiv.org/abs/2010.11125"),h(we,"rel","nofollow"),h(Te,"href","https://huggingface.co/valhalla"),h(Te,"rel","nofollow"),h(ne,"id","training-and-generation"),h(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ne,"href","#training-and-generation"),h(U,"class","relative group"),h(ct,"href","/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),h(se,"id","transformers.M2M100Config"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#transformers.M2M100Config"),h(V,"class","relative group"),h(mt,"href","/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Model"),h(je,"href","https://huggingface.co/facebook/m2m100_418M"),h(je,"rel","nofollow"),h(ut,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),h(ft,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(re,"id","transformers.M2M100Tokenizer"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#transformers.M2M100Tokenizer"),h(J,"class","relative group"),h(Ae,"href","https://github.com/google/sentencepiece"),h(Ae,"rel","nofollow"),h(_t,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(kt,"href","../glossary#token-type-ids"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"id","transformers.M2M100Model"),h(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(le,"href","#transformers.M2M100Model"),h(K,"class","relative group"),h(bt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),h(Ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ke,"rel","nofollow"),h(vt,"href","/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100Model"),h(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"id","transformers.M2M100ForConditionalGeneration"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#transformers.M2M100ForConditionalGeneration"),h(Q,"class","relative group"),h(yt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),h(ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ot,"rel","nofollow"),h(wt,"href","/docs/transformers/pr_16919/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,p),_(t,M,m),_(t,g,m),e(g,u),e(u,k),y(d,k,null),e(g,f),e(g,N),e(N,rn),_(t,Mo,m),_(t,H,m),e(H,ee),e(ee,Et),y(ye,Et,null),e(H,dn),e(H,Ct),e(Ct,ln),_(t,bo,m),_(t,te,m),e(te,cn),e(te,we),e(we,pn),e(te,hn),_(t,vo,m),_(t,dt,m),e(dt,mn),_(t,yo,m),_(t,lt,m),e(lt,jt),e(jt,un),_(t,wo,m),_(t,oe,m),e(oe,fn),e(oe,Te),e(Te,_n),e(oe,gn),_(t,To,m),_(t,U,m),e(U,ne),e(ne,Ft),y($e,Ft,null),e(U,kn),e(U,Pt),e(Pt,Mn),_(t,$o,m),_(t,A,m),e(A,bn),e(A,St),e(St,vn),e(A,yn),e(A,At),e(At,wn),e(A,Tn),e(A,Dt),e(Dt,$n),e(A,zn),_(t,zo,m),_(t,C,m),e(C,qn),e(C,ct),e(ct,xn),e(C,En),e(C,Lt),e(Lt,Cn),e(C,jn),e(C,It),e(It,Fn),e(C,Pn),e(C,Nt),e(Nt,Sn),e(C,An),_(t,qo,m),_(t,pt,m),e(pt,Gt),e(Gt,Dn),_(t,xo,m),y(ze,t,m),_(t,Eo,m),_(t,ht,m),e(ht,qe),e(qe,Ot),e(Ot,Ln),e(qe,In),e(qe,E),e(E,Nn),e(E,Wt),e(Wt,Gn),e(E,On),e(E,Bt),e(Bt,Wn),e(E,Bn),e(E,Ht),e(Ht,Hn),e(E,Un),e(E,Ut),e(Ut,Vn),e(E,Xn),e(E,Vt),e(Vt,Rn),e(E,Jn),_(t,Co,m),y(xe,t,m),_(t,jo,m),_(t,V,m),e(V,se),e(se,Xt),y(Ee,Xt,null),e(V,Kn),e(V,Rt),e(Rt,Zn),_(t,Fo,m),_(t,F,m),y(Ce,F,null),e(F,Qn),e(F,X),e(X,Yn),e(X,mt),e(mt,es),e(X,ts),e(X,je),e(je,os),e(X,ns),e(F,ss),e(F,R),e(R,as),e(R,ut),e(ut,rs),e(R,is),e(R,ft),e(ft,ds),e(R,ls),e(F,cs),y(ae,F,null),_(t,Po,m),_(t,J,m),e(J,re),e(re,Jt),y(Fe,Jt,null),e(J,ps),e(J,Kt),e(Kt,hs),_(t,So,m),_(t,z,m),y(Pe,z,null),e(z,ms),e(z,Se),e(Se,us),e(Se,Ae),e(Ae,fs),e(Se,_s),e(z,gs),e(z,De),e(De,ks),e(De,_t),e(_t,Ms),e(De,bs),e(z,vs),y(ie,z,null),e(z,ys),e(z,D),y(Le,D,null),e(D,ws),e(D,Ie),e(Ie,Ts),e(Ie,Zt),e(Zt,$s),e(Ie,zs),e(D,qs),e(D,Ne),e(Ne,Ge),e(Ge,Qt),e(Qt,xs),e(Ge,Es),e(Ge,Yt),e(Yt,Cs),e(Ne,js),e(Ne,Oe),e(Oe,eo),e(eo,Fs),e(Oe,Ps),e(Oe,to),e(to,Ss),e(D,As),e(D,oo),e(oo,Ds),e(z,Ls),e(z,de),y(We,de,null),e(de,Is),e(de,Be),e(Be,Ns),e(Be,no),e(no,Gs),e(Be,Os),e(z,Ws),e(z,G),y(He,G,null),e(G,Bs),e(G,gt),e(gt,Hs),e(gt,kt),e(kt,Us),e(G,Vs),e(G,so),e(so,Xs),e(z,Rs),e(z,Mt),y(Ue,Mt,null),_(t,Ao,m),_(t,K,m),e(K,le),e(le,ao),y(Ve,ao,null),e(K,Js),e(K,ro),e(ro,Ks),_(t,Do,m),_(t,P,m),y(Xe,P,null),e(P,Zs),e(P,Re),e(Re,Qs),e(Re,bt),e(bt,Ys),e(Re,ea),e(P,ta),e(P,Je),e(Je,oa),e(Je,Ke),e(Ke,na),e(Je,sa),e(P,aa),e(P,L),y(Ze,L,null),e(L,ra),e(L,Z),e(Z,ia),e(Z,vt),e(vt,da),e(Z,la),e(Z,io),e(io,ca),e(Z,pa),e(L,ha),y(ce,L,null),e(L,ma),y(pe,L,null),_(t,Lo,m),_(t,Q,m),e(Q,he),e(he,lo),y(Qe,lo,null),e(Q,ua),e(Q,co),e(co,fa),_(t,Io,m),_(t,S,m),y(Ye,S,null),e(S,_a),e(S,et),e(et,ga),e(et,yt),e(yt,ka),e(et,Ma),e(S,ba),e(S,tt),e(tt,va),e(tt,ot),e(ot,ya),e(tt,wa),e(S,Ta),e(S,j),y(nt,j,null),e(j,$a),e(j,Y),e(Y,za),e(Y,wt),e(wt,qa),e(Y,xa),e(Y,po),e(po,Ea),e(Y,Ca),e(j,ja),y(me,j,null),e(j,Fa),y(ue,j,null),e(j,Pa),y(fe,j,null),No=!0},p(t,[m]){const st={};m&2&&(st.$$scope={dirty:m,ctx:t}),ae.$set(st);const ho={};m&2&&(ho.$$scope={dirty:m,ctx:t}),ie.$set(ho);const mo={};m&2&&(mo.$$scope={dirty:m,ctx:t}),ce.$set(mo);const uo={};m&2&&(uo.$$scope={dirty:m,ctx:t}),pe.$set(uo);const at={};m&2&&(at.$$scope={dirty:m,ctx:t}),me.$set(at);const fo={};m&2&&(fo.$$scope={dirty:m,ctx:t}),ue.$set(fo);const _o={};m&2&&(_o.$$scope={dirty:m,ctx:t}),fe.$set(_o)},i(t){No||(w(d.$$.fragment,t),w(ye.$$.fragment,t),w($e.$$.fragment,t),w(ze.$$.fragment,t),w(xe.$$.fragment,t),w(Ee.$$.fragment,t),w(Ce.$$.fragment,t),w(ae.$$.fragment,t),w(Fe.$$.fragment,t),w(Pe.$$.fragment,t),w(ie.$$.fragment,t),w(Le.$$.fragment,t),w(We.$$.fragment,t),w(He.$$.fragment,t),w(Ue.$$.fragment,t),w(Ve.$$.fragment,t),w(Xe.$$.fragment,t),w(Ze.$$.fragment,t),w(ce.$$.fragment,t),w(pe.$$.fragment,t),w(Qe.$$.fragment,t),w(Ye.$$.fragment,t),w(nt.$$.fragment,t),w(me.$$.fragment,t),w(ue.$$.fragment,t),w(fe.$$.fragment,t),No=!0)},o(t){T(d.$$.fragment,t),T(ye.$$.fragment,t),T($e.$$.fragment,t),T(ze.$$.fragment,t),T(xe.$$.fragment,t),T(Ee.$$.fragment,t),T(Ce.$$.fragment,t),T(ae.$$.fragment,t),T(Fe.$$.fragment,t),T(Pe.$$.fragment,t),T(ie.$$.fragment,t),T(Le.$$.fragment,t),T(We.$$.fragment,t),T(He.$$.fragment,t),T(Ue.$$.fragment,t),T(Ve.$$.fragment,t),T(Xe.$$.fragment,t),T(Ze.$$.fragment,t),T(ce.$$.fragment,t),T(pe.$$.fragment,t),T(Qe.$$.fragment,t),T(Ye.$$.fragment,t),T(nt.$$.fragment,t),T(me.$$.fragment,t),T(ue.$$.fragment,t),T(fe.$$.fragment,t),No=!1},d(t){o(p),t&&o(M),t&&o(g),$(d),t&&o(Mo),t&&o(H),$(ye),t&&o(bo),t&&o(te),t&&o(vo),t&&o(dt),t&&o(yo),t&&o(lt),t&&o(wo),t&&o(oe),t&&o(To),t&&o(U),$($e),t&&o($o),t&&o(A),t&&o(zo),t&&o(C),t&&o(qo),t&&o(pt),t&&o(xo),$(ze,t),t&&o(Eo),t&&o(ht),t&&o(Co),$(xe,t),t&&o(jo),t&&o(V),$(Ee),t&&o(Fo),t&&o(F),$(Ce),$(ae),t&&o(Po),t&&o(J),$(Fe),t&&o(So),t&&o(z),$(Pe),$(ie),$(Le),$(We),$(He),$(Ue),t&&o(Ao),t&&o(K),$(Ve),t&&o(Do),t&&o(P),$(Xe),$(Ze),$(ce),$(pe),t&&o(Lo),t&&o(Q),$(Qe),t&&o(Io),t&&o(S),$(Ye),$(nt),$(me),$(ue),$(fe)}}}const oi={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function ni(q){return Xr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ci extends Br{constructor(p){super();Hr(this,p,ni,ti,Ur,{})}}export{ci as default,oi as metadata};
