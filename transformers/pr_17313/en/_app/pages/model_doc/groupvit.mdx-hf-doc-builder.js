import{S as ka,i as Ma,s as Ca,e as n,k as g,w as $,t as i,M as ja,c as s,d as o,m as h,a,x as b,h as l,b as u,G as e,g as v,y as V,q as y,o as w,B as x,v as Ea,L as vt}from"../../chunks/vendor-hf-doc-builder.js";import{T as jo}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Le}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function za(G){let p,T,f,c,_;return c=new Tt({props:{code:`from transformers import GroupViTTextConfig, GroupViTTextModel

# Initializing a GroupViTTextModel with nvidia/groupvit-gccyfcc style configuration
configuration = GroupViTTextConfig()

# Initializing a GroupViTTextConfig from the nvidia/groupvit-gccyfcc style configuration
model = GroupViTTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTTextConfig, GroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTTextModel with nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTTextConfig from the nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),T=i("Example:"),f=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Example:"),d.forEach(o),f=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,f,d),V(c,r,d),_=!0},p:vt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(f),x(c,r)}}}function Pa(G){let p,T,f,c,_;return c=new Tt({props:{code:`from transformers import GroupViTVisionConfig, GroupViTVisionModel

# Initializing a GroupViTVisionModel with nvidia/groupvit-gccyfcc style configuration
configuration = GroupViTVisionConfig()

# Initializing a GroupViTVisionModel model from the nvidia/groupvit-gccyfcc style configuration
model = GroupViTVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTVisionConfig, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTVisionModel with nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTVisionModel model from the nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),T=i("Example:"),f=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Example:"),d.forEach(o),f=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,f,d),V(c,r,d),_=!0},p:vt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(f),x(c,r)}}}function qa(G){let p,T,f,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(d,"CODE",{});var k=a(f);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,f),e(f,c),e(p,_)},d(r){r&&o(p)}}}function Ia(G){let p,T,f,c,_;return c=new Tt({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gccyfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gccyfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("p"),T=i("Examples:"),f=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),f=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,f,d),V(c,r,d),_=!0},p:vt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(f),x(c,r)}}}function Aa(G){let p,T,f,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(d,"CODE",{});var k=a(f);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,f),e(f,c),e(p,_)},d(r){r&&o(p)}}}function Oa(G){let p,T,f,c,_;return c=new Tt({props:{code:`from transformers import CLIPTokenizer, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gccyfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gccyfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){p=n("p"),T=i("Examples:"),f=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),f=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,f,d),V(c,r,d),_=!0},p:vt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(f),x(c,r)}}}function La(G){let p,T,f,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(d,"CODE",{});var k=a(f);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,f),e(f,c),e(p,_)},d(r){r&&o(p)}}}function Da(G){let p,T,f,c,_;return c=new Tt({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gccyfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gccyfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){p=n("p"),T=i("Examples:"),f=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),f=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,f,d),V(c,r,d),_=!0},p:vt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(f),x(c,r)}}}function Sa(G){let p,T,f,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(d,"CODE",{});var k=a(f);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,f),e(f,c),e(p,_)},d(r){r&&o(p)}}}function Na(G){let p,T,f,c,_;return c=new Tt({props:{code:`from transformers import CLIPTokenizer, GroupViTTextModel

model = GroupViTTextModel.from_pretrained("nvidia/groupvit-gccyfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gccyfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){p=n("p"),T=i("Examples:"),f=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),f=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,f,d),V(c,r,d),_=!0},p:vt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(f),x(c,r)}}}function Wa(G){let p,T,f,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(d,"CODE",{});var k=a(f);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,f),e(f,c),e(p,_)},d(r){r&&o(p)}}}function Fa(G){let p,T,f,c,_;return c=new Tt({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTVisionModel

processor = AutoPProcessor.from_pretrained("nvidia/groupvit-gccyfcc")
model = GroupViTVisionModel.from_pretrained("nvidia/groupvit-gccyfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoPProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("p"),T=i("Examples:"),f=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),f=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,f,d),V(c,r,d),_=!0},p:vt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(f),x(c,r)}}}function Ba(G){let p,T,f,c,_,r,d,k,dr,Eo,N,le,Yt,De,cr,Kt,ur,zo,L,fr,Se,mr,gr,$t,hr,_r,Po,bt,vr,qo,Vt,Qt,Tr,Io,yt,$r,Ao,pe,Ne,br,Zt,Vr,yr,wr,W,xr,We,Gr,kr,Fe,Mr,Cr,Oo,D,jr,Be,Er,zr,He,Pr,qr,Lo,F,de,eo,Re,Ir,to,Ar,Do,C,Ue,Or,ce,wt,Lr,Dr,xt,Sr,Nr,Wr,B,Fr,Gt,Br,Hr,kt,Rr,Ur,Jr,ue,Je,Xr,Xe,Yr,Mt,Kr,Qr,So,H,fe,oo,Ye,Zr,ro,en,No,j,Ke,tn,R,on,no,rn,nn,Qe,sn,an,ln,U,pn,Ct,dn,cn,jt,un,fn,mn,me,Wo,J,ge,so,Ze,gn,ao,hn,Fo,E,et,_n,X,vn,io,Tn,$n,tt,bn,Vn,yn,Y,wn,Et,xn,Gn,zt,kn,Mn,Cn,he,Bo,K,_e,lo,ot,jn,po,En,Ho,M,rt,zn,nt,Pn,st,qn,In,An,z,at,On,Q,Ln,Pt,Dn,Sn,co,Nn,Wn,Fn,ve,Bn,Te,Hn,P,it,Rn,Z,Un,qt,Jn,Xn,uo,Yn,Kn,Qn,$e,Zn,be,es,q,lt,ts,ee,os,It,rs,ns,fo,ss,as,is,Ve,ls,ye,Ro,te,we,mo,pt,ps,go,ds,Uo,oe,dt,cs,I,ct,us,re,fs,At,ms,gs,ho,hs,_s,vs,xe,Ts,Ge,Jo,ne,ke,_o,ut,$s,vo,bs,Xo,se,ft,Vs,A,mt,ys,ae,ws,Ot,xs,Gs,To,ks,Ms,Cs,Me,js,Ce,Yo;return r=new Le({}),De=new Le({}),Re=new Le({}),Ue=new O({props:{name:"class transformers.GroupViTConfig",anchor:"transformers.GroupViTConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 256"},{name:"projection_intermediate_dim",val:" = 4096"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextConfig">GroupViTTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.GroupViTConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionConfig">GroupViTVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.GroupViTConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.GroupViTConfig.projection_intermediate_dim",description:`<strong>projection_intermediate_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimentionality of intermediate layer of text and vision projection layers.`,name:"projection_intermediate_dim"},{anchor:"transformers.GroupViTConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> parameter. Default is used as per the original GroupViT
implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.GroupViTConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L270"}}),Je=new O({props:{name:"from_text_vision_configs",anchor:"transformers.GroupViTConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": GroupViTTextConfig"},{name:"vision_config",val:": GroupViTVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L327",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"
>GroupViTConfig</a></p>
`}}),Ye=new Le({}),Ke=new O({props:{name:"class transformers.GroupViTTextConfig",anchor:"transformers.GroupViTTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 256"},{name:"intermediate_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the GroupViT text model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel">GroupViTModel</a>.`,name:"vocab_size"},{anchor:"transformers.GroupViTTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GroupViTTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GroupViTTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GroupViTTextConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GroupViTTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L32"}}),me=new _t({props:{anchor:"transformers.GroupViTTextConfig.example",$$slots:{default:[za]},$$scope:{ctx:G}}}),Ze=new Le({}),et=new O({props:{name:"class transformers.GroupViTVisionConfig",anchor:"transformers.GroupViTVisionConfig",parameters:[{name:"hidden_size",val:" = 384"},{name:"intermediate_size",val:" = 1536"},{name:"depths",val:" = [6, 3, 3]"},{name:"num_hidden_layers",val:" = 12"},{name:"num_group_tokens",val:" = [64, 8, 0]"},{name:"num_output_groups",val:" = [64, 8, 8]"},{name:"num_attention_heads",val:" = 6"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"hidden_act",val:" = 'gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"assign_eps",val:" = 1.0"},{name:"assign_mlp_ratio",val:" = [0.5, 4]"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTVisionConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [6, 3, 3]) &#x2014;
The number of layers in each encoder block.`,name:"depths"},{anchor:"transformers.GroupViTVisionConfig.num_group_tokens",description:`<strong>num_group_tokens</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 0]) &#x2014;
The number of group tokens for each stage.`,name:"num_group_tokens"},{anchor:"transformers.GroupViTVisionConfig.num_output_group",description:`<strong>num_output_group</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 0]) &#x2014;
The number of output groups for each stage, 0 means no group.`,name:"num_output_group"},{anchor:"transformers.GroupViTVisionConfig.num_group_tokens",description:"<strong>num_group_tokens</strong> (list[int]) &#x2014; Number of group tokens for each stage.",name:"num_group_tokens"},{anchor:"transformers.GroupViTVisionConfig.num_output_group",description:"<strong>num_output_group</strong> (list[int]) &#x2014; Number of output groups for each stage, 0 means no group.",name:"num_output_group"},{anchor:"transformers.GroupViTVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.GroupViTVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.GroupViTVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GroupViTVisionConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GroupViTVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L140"}}),he=new _t({props:{anchor:"transformers.GroupViTVisionConfig.example",$$slots:{default:[Pa]},$$scope:{ctx:G}}}),ot=new Le({}),rt=new O({props:{name:"class transformers.GroupViTModel",anchor:"transformers.GroupViTModel",parameters:[{name:"config",val:": GroupViTConfig"}],parametersDescription:[{anchor:"transformers.GroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1558"}}),at=new O({props:{name:"forward",anchor:"transformers.GroupViTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.GroupViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1700",returnDescription:`
<p>A <code>transformers.models.groupvit.modeling_groupvit.GroupViTOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</p>
</li>
<li>
<p><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</p>
</li>
<li>
<p><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
</li>
<li>
<p><strong>segmentation_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
</li>
<li>
<p><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.groupvit.modeling_groupvit.GroupViTOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new jo({props:{$$slots:{default:[qa]},$$scope:{ctx:G}}}),Te=new _t({props:{anchor:"transformers.GroupViTModel.forward.example",$$slots:{default:[Ia]},$$scope:{ctx:G}}}),it=new O({props:{name:"get_text_features",anchor:"transformers.GroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1604",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),$e=new jo({props:{$$slots:{default:[Aa]},$$scope:{ctx:G}}}),be=new _t({props:{anchor:"transformers.GroupViTModel.get_text_features.example",$$slots:{default:[Oa]},$$scope:{ctx:G}}}),lt=new O({props:{name:"get_image_features",anchor:"transformers.GroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1651",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ve=new jo({props:{$$slots:{default:[La]},$$scope:{ctx:G}}}),ye=new _t({props:{anchor:"transformers.GroupViTModel.get_image_features.example",$$slots:{default:[Da]},$$scope:{ctx:G}}}),pt=new Le({}),dt=new O({props:{name:"class transformers.GroupViTTextModel",anchor:"transformers.GroupViTTextModel",parameters:[{name:"config",val:": GroupViTTextConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1394"}}),ct=new O({props:{name:"forward",anchor:"transformers.GroupViTTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1409",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new jo({props:{$$slots:{default:[Sa]},$$scope:{ctx:G}}}),Ge=new _t({props:{anchor:"transformers.GroupViTTextModel.forward.example",$$slots:{default:[Na]},$$scope:{ctx:G}}}),ut=new Le({}),ft=new O({props:{name:"class transformers.GroupViTVisionModel",anchor:"transformers.GroupViTVisionModel",parameters:[{name:"config",val:": GroupViTVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1505"}}),mt=new O({props:{name:"forward",anchor:"transformers.GroupViTVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1518",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new jo({props:{$$slots:{default:[Wa]},$$scope:{ctx:G}}}),Ce=new _t({props:{anchor:"transformers.GroupViTVisionModel.forward.example",$$slots:{default:[Fa]},$$scope:{ctx:G}}}),{c(){p=n("meta"),T=g(),f=n("h1"),c=n("a"),_=n("span"),$(r.$$.fragment),d=g(),k=n("span"),dr=i("GroupViT"),Eo=g(),N=n("h2"),le=n("a"),Yt=n("span"),$(De.$$.fragment),cr=g(),Kt=n("span"),ur=i("Overview"),zo=g(),L=n("p"),fr=i("The GroupViT model was proposed in "),Se=n("a"),mr=i("GroupViT: Semantic Segmentation Emerges from Text Supervision"),gr=i(` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),$t=n("a"),hr=i("CLIP"),_r=i(", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),Po=g(),bt=n("p"),vr=i("The abstract from the paper is the following:"),qo=g(),Vt=n("p"),Qt=n("em"),Tr=i("Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),Io=g(),yt=n("p"),$r=i("Tips:"),Ao=g(),pe=n("ul"),Ne=n("li"),br=i("You may specify "),Zt=n("code"),Vr=i("output_segmentation=True"),yr=i(" to get the segmentation logits of input texts."),wr=g(),W=n("li"),xr=i("The quickest way to get started with GroupViT is by checking the "),We=n("a"),Gr=i("example notebooks"),kr=i(" (which showcase zero-shot segmentation inference). One can also check out the "),Fe=n("a"),Mr=i("huggingface space demo"),Cr=i(" to play with GroupViT."),Oo=g(),D=n("p"),jr=i("This model was contributed by "),Be=n("a"),Er=i("xvjiarui"),zr=i(`.
The original code can be found `),He=n("a"),Pr=i("here"),qr=i("."),Lo=g(),F=n("h2"),de=n("a"),eo=n("span"),$(Re.$$.fragment),Ir=g(),to=n("span"),Ar=i("GroupViTConfig"),Do=g(),C=n("div"),$(Ue.$$.fragment),Or=g(),ce=n("p"),wt=n("a"),Lr=i("GroupViTConfig"),Dr=i(" is the configuration class to store the configuration of a "),xt=n("a"),Sr=i("GroupViTModel"),Nr=i(`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),Wr=g(),B=n("p"),Fr=i("Configuration objects inherit from "),Gt=n("a"),Br=i("PretrainedConfig"),Hr=i(` and can be used to control the model outputs. Read the
documentation from `),kt=n("a"),Rr=i("PretrainedConfig"),Ur=i(" for more information."),Jr=g(),ue=n("div"),$(Je.$$.fragment),Xr=g(),Xe=n("p"),Yr=i("Instantiate a "),Mt=n("a"),Kr=i("GroupViTConfig"),Qr=i(` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),So=g(),H=n("h2"),fe=n("a"),oo=n("span"),$(Ye.$$.fragment),Zr=g(),ro=n("span"),en=i("GroupViTTextConfig"),No=g(),j=n("div"),$(Ke.$$.fragment),tn=g(),R=n("p"),on=i("This is the configuration class to store the configuration of a "),no=n("code"),rn=i("GroupViTTextModel "),nn=i(`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Qe=n("a"),sn=i("nvidia/groupvit-gccyfcc"),an=i(" architecture."),ln=g(),U=n("p"),pn=i("Configuration objects inherit from "),Ct=n("a"),dn=i("PretrainedConfig"),cn=i(` and can be used to control the model outputs. Read the
documentation from `),jt=n("a"),un=i("PretrainedConfig"),fn=i(" for more information."),mn=g(),$(me.$$.fragment),Wo=g(),J=n("h2"),ge=n("a"),so=n("span"),$(Ze.$$.fragment),gn=g(),ao=n("span"),hn=i("GroupViTVisionConfig"),Fo=g(),E=n("div"),$(et.$$.fragment),_n=g(),X=n("p"),vn=i("This is the configuration class to store the configuration of a "),io=n("code"),Tn=i("GroupViTVisionModel "),$n=i(`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),tt=n("a"),bn=i("nvidia/groupvit-gccyfcc"),Vn=i(" architecture."),yn=g(),Y=n("p"),wn=i("Configuration objects inherit from "),Et=n("a"),xn=i("PretrainedConfig"),Gn=i(` and can be used to control the model outputs. Read the
documentation from `),zt=n("a"),kn=i("PretrainedConfig"),Mn=i(" for more information."),Cn=g(),$(he.$$.fragment),Bo=g(),K=n("h2"),_e=n("a"),lo=n("span"),$(ot.$$.fragment),jn=g(),po=n("span"),En=i("GroupViTModel"),Ho=g(),M=n("div"),$(rt.$$.fragment),zn=g(),nt=n("p"),Pn=i("This model is a PyTorch "),st=n("a"),qn=i("torch.nn.Module"),In=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),An=g(),z=n("div"),$(at.$$.fragment),On=g(),Q=n("p"),Ln=i("The "),Pt=n("a"),Dn=i("GroupViTModel"),Sn=i(" forward method, overrides the "),co=n("code"),Nn=i("__call__"),Wn=i(" special method."),Fn=g(),$(ve.$$.fragment),Bn=g(),$(Te.$$.fragment),Hn=g(),P=n("div"),$(it.$$.fragment),Rn=g(),Z=n("p"),Un=i("The "),qt=n("a"),Jn=i("GroupViTModel"),Xn=i(" forward method, overrides the "),uo=n("code"),Yn=i("__call__"),Kn=i(" special method."),Qn=g(),$($e.$$.fragment),Zn=g(),$(be.$$.fragment),es=g(),q=n("div"),$(lt.$$.fragment),ts=g(),ee=n("p"),os=i("The "),It=n("a"),rs=i("GroupViTModel"),ns=i(" forward method, overrides the "),fo=n("code"),ss=i("__call__"),as=i(" special method."),is=g(),$(Ve.$$.fragment),ls=g(),$(ye.$$.fragment),Ro=g(),te=n("h2"),we=n("a"),mo=n("span"),$(pt.$$.fragment),ps=g(),go=n("span"),ds=i("GroupViTTextModel"),Uo=g(),oe=n("div"),$(dt.$$.fragment),cs=g(),I=n("div"),$(ct.$$.fragment),us=g(),re=n("p"),fs=i("The "),At=n("a"),ms=i("GroupViTTextModel"),gs=i(" forward method, overrides the "),ho=n("code"),hs=i("__call__"),_s=i(" special method."),vs=g(),$(xe.$$.fragment),Ts=g(),$(Ge.$$.fragment),Jo=g(),ne=n("h2"),ke=n("a"),_o=n("span"),$(ut.$$.fragment),$s=g(),vo=n("span"),bs=i("GroupViTVisionModel"),Xo=g(),se=n("div"),$(ft.$$.fragment),Vs=g(),A=n("div"),$(mt.$$.fragment),ys=g(),ae=n("p"),ws=i("The "),Ot=n("a"),xs=i("GroupViTVisionModel"),Gs=i(" forward method, overrides the "),To=n("code"),ks=i("__call__"),Ms=i(" special method."),Cs=g(),$(Me.$$.fragment),js=g(),$(Ce.$$.fragment),this.h()},l(t){const m=ja('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),T=h(t),f=s(t,"H1",{class:!0});var gt=a(f);c=s(gt,"A",{id:!0,class:!0,href:!0});var $o=a(c);_=s($o,"SPAN",{});var bo=a(_);b(r.$$.fragment,bo),bo.forEach(o),$o.forEach(o),d=h(gt),k=s(gt,"SPAN",{});var Vo=a(k);dr=l(Vo,"GroupViT"),Vo.forEach(o),gt.forEach(o),Eo=h(t),N=s(t,"H2",{class:!0});var ht=a(N);le=s(ht,"A",{id:!0,class:!0,href:!0});var yo=a(le);Yt=s(yo,"SPAN",{});var wo=a(Yt);b(De.$$.fragment,wo),wo.forEach(o),yo.forEach(o),cr=h(ht),Kt=s(ht,"SPAN",{});var xo=a(Kt);ur=l(xo,"Overview"),xo.forEach(o),ht.forEach(o),zo=h(t),L=s(t,"P",{});var ie=a(L);fr=l(ie,"The GroupViT model was proposed in "),Se=s(ie,"A",{href:!0,rel:!0});var Go=a(Se);mr=l(Go,"GroupViT: Semantic Segmentation Emerges from Text Supervision"),Go.forEach(o),gr=l(ie,` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),$t=s(ie,"A",{href:!0});var ko=a($t);hr=l(ko,"CLIP"),ko.forEach(o),_r=l(ie,", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),ie.forEach(o),Po=h(t),bt=s(t,"P",{});var Mo=a(bt);vr=l(Mo,"The abstract from the paper is the following:"),Mo.forEach(o),qo=h(t),Vt=s(t,"P",{});var Es=a(Vt);Qt=s(Es,"EM",{});var zs=a(Qt);Tr=l(zs,"Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),zs.forEach(o),Es.forEach(o),Io=h(t),yt=s(t,"P",{});var Ps=a(yt);$r=l(Ps,"Tips:"),Ps.forEach(o),Ao=h(t),pe=s(t,"UL",{});var Ko=a(pe);Ne=s(Ko,"LI",{});var Qo=a(Ne);br=l(Qo,"You may specify "),Zt=s(Qo,"CODE",{});var qs=a(Zt);Vr=l(qs,"output_segmentation=True"),qs.forEach(o),yr=l(Qo," to get the segmentation logits of input texts."),Qo.forEach(o),wr=h(Ko),W=s(Ko,"LI",{});var Lt=a(W);xr=l(Lt,"The quickest way to get started with GroupViT is by checking the "),We=s(Lt,"A",{href:!0,rel:!0});var Is=a(We);Gr=l(Is,"example notebooks"),Is.forEach(o),kr=l(Lt," (which showcase zero-shot segmentation inference). One can also check out the "),Fe=s(Lt,"A",{href:!0,rel:!0});var As=a(Fe);Mr=l(As,"huggingface space demo"),As.forEach(o),Cr=l(Lt," to play with GroupViT."),Lt.forEach(o),Ko.forEach(o),Oo=h(t),D=s(t,"P",{});var Dt=a(D);jr=l(Dt,"This model was contributed by "),Be=s(Dt,"A",{href:!0,rel:!0});var Os=a(Be);Er=l(Os,"xvjiarui"),Os.forEach(o),zr=l(Dt,`.
The original code can be found `),He=s(Dt,"A",{href:!0,rel:!0});var Ls=a(He);Pr=l(Ls,"here"),Ls.forEach(o),qr=l(Dt,"."),Dt.forEach(o),Lo=h(t),F=s(t,"H2",{class:!0});var Zo=a(F);de=s(Zo,"A",{id:!0,class:!0,href:!0});var Ds=a(de);eo=s(Ds,"SPAN",{});var Ss=a(eo);b(Re.$$.fragment,Ss),Ss.forEach(o),Ds.forEach(o),Ir=h(Zo),to=s(Zo,"SPAN",{});var Ns=a(to);Ar=l(Ns,"GroupViTConfig"),Ns.forEach(o),Zo.forEach(o),Do=h(t),C=s(t,"DIV",{class:!0});var je=a(C);b(Ue.$$.fragment,je),Or=h(je),ce=s(je,"P",{});var Co=a(ce);wt=s(Co,"A",{href:!0});var Ws=a(wt);Lr=l(Ws,"GroupViTConfig"),Ws.forEach(o),Dr=l(Co," is the configuration class to store the configuration of a "),xt=s(Co,"A",{href:!0});var Fs=a(xt);Sr=l(Fs,"GroupViTModel"),Fs.forEach(o),Nr=l(Co,`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),Co.forEach(o),Wr=h(je),B=s(je,"P",{});var St=a(B);Fr=l(St,"Configuration objects inherit from "),Gt=s(St,"A",{href:!0});var Bs=a(Gt);Br=l(Bs,"PretrainedConfig"),Bs.forEach(o),Hr=l(St,` and can be used to control the model outputs. Read the
documentation from `),kt=s(St,"A",{href:!0});var Hs=a(kt);Rr=l(Hs,"PretrainedConfig"),Hs.forEach(o),Ur=l(St," for more information."),St.forEach(o),Jr=h(je),ue=s(je,"DIV",{class:!0});var er=a(ue);b(Je.$$.fragment,er),Xr=h(er),Xe=s(er,"P",{});var tr=a(Xe);Yr=l(tr,"Instantiate a "),Mt=s(tr,"A",{href:!0});var Rs=a(Mt);Kr=l(Rs,"GroupViTConfig"),Rs.forEach(o),Qr=l(tr,` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),tr.forEach(o),er.forEach(o),je.forEach(o),So=h(t),H=s(t,"H2",{class:!0});var or=a(H);fe=s(or,"A",{id:!0,class:!0,href:!0});var Us=a(fe);oo=s(Us,"SPAN",{});var Js=a(oo);b(Ye.$$.fragment,Js),Js.forEach(o),Us.forEach(o),Zr=h(or),ro=s(or,"SPAN",{});var Xs=a(ro);en=l(Xs,"GroupViTTextConfig"),Xs.forEach(o),or.forEach(o),No=h(t),j=s(t,"DIV",{class:!0});var Ee=a(j);b(Ke.$$.fragment,Ee),tn=h(Ee),R=s(Ee,"P",{});var Nt=a(R);on=l(Nt,"This is the configuration class to store the configuration of a "),no=s(Nt,"CODE",{});var Ys=a(no);rn=l(Ys,"GroupViTTextModel "),Ys.forEach(o),nn=l(Nt,`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Qe=s(Nt,"A",{href:!0,rel:!0});var Ks=a(Qe);sn=l(Ks,"nvidia/groupvit-gccyfcc"),Ks.forEach(o),an=l(Nt," architecture."),Nt.forEach(o),ln=h(Ee),U=s(Ee,"P",{});var Wt=a(U);pn=l(Wt,"Configuration objects inherit from "),Ct=s(Wt,"A",{href:!0});var Qs=a(Ct);dn=l(Qs,"PretrainedConfig"),Qs.forEach(o),cn=l(Wt,` and can be used to control the model outputs. Read the
documentation from `),jt=s(Wt,"A",{href:!0});var Zs=a(jt);un=l(Zs,"PretrainedConfig"),Zs.forEach(o),fn=l(Wt," for more information."),Wt.forEach(o),mn=h(Ee),b(me.$$.fragment,Ee),Ee.forEach(o),Wo=h(t),J=s(t,"H2",{class:!0});var rr=a(J);ge=s(rr,"A",{id:!0,class:!0,href:!0});var ea=a(ge);so=s(ea,"SPAN",{});var ta=a(so);b(Ze.$$.fragment,ta),ta.forEach(o),ea.forEach(o),gn=h(rr),ao=s(rr,"SPAN",{});var oa=a(ao);hn=l(oa,"GroupViTVisionConfig"),oa.forEach(o),rr.forEach(o),Fo=h(t),E=s(t,"DIV",{class:!0});var ze=a(E);b(et.$$.fragment,ze),_n=h(ze),X=s(ze,"P",{});var Ft=a(X);vn=l(Ft,"This is the configuration class to store the configuration of a "),io=s(Ft,"CODE",{});var ra=a(io);Tn=l(ra,"GroupViTVisionModel "),ra.forEach(o),$n=l(Ft,`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),tt=s(Ft,"A",{href:!0,rel:!0});var na=a(tt);bn=l(na,"nvidia/groupvit-gccyfcc"),na.forEach(o),Vn=l(Ft," architecture."),Ft.forEach(o),yn=h(ze),Y=s(ze,"P",{});var Bt=a(Y);wn=l(Bt,"Configuration objects inherit from "),Et=s(Bt,"A",{href:!0});var sa=a(Et);xn=l(sa,"PretrainedConfig"),sa.forEach(o),Gn=l(Bt,` and can be used to control the model outputs. Read the
documentation from `),zt=s(Bt,"A",{href:!0});var aa=a(zt);kn=l(aa,"PretrainedConfig"),aa.forEach(o),Mn=l(Bt," for more information."),Bt.forEach(o),Cn=h(ze),b(he.$$.fragment,ze),ze.forEach(o),Bo=h(t),K=s(t,"H2",{class:!0});var nr=a(K);_e=s(nr,"A",{id:!0,class:!0,href:!0});var ia=a(_e);lo=s(ia,"SPAN",{});var la=a(lo);b(ot.$$.fragment,la),la.forEach(o),ia.forEach(o),jn=h(nr),po=s(nr,"SPAN",{});var pa=a(po);En=l(pa,"GroupViTModel"),pa.forEach(o),nr.forEach(o),Ho=h(t),M=s(t,"DIV",{class:!0});var S=a(M);b(rt.$$.fragment,S),zn=h(S),nt=s(S,"P",{});var sr=a(nt);Pn=l(sr,"This model is a PyTorch "),st=s(sr,"A",{href:!0,rel:!0});var da=a(st);qn=l(da,"torch.nn.Module"),da.forEach(o),In=l(sr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sr.forEach(o),An=h(S),z=s(S,"DIV",{class:!0});var Pe=a(z);b(at.$$.fragment,Pe),On=h(Pe),Q=s(Pe,"P",{});var Ht=a(Q);Ln=l(Ht,"The "),Pt=s(Ht,"A",{href:!0});var ca=a(Pt);Dn=l(ca,"GroupViTModel"),ca.forEach(o),Sn=l(Ht," forward method, overrides the "),co=s(Ht,"CODE",{});var ua=a(co);Nn=l(ua,"__call__"),ua.forEach(o),Wn=l(Ht," special method."),Ht.forEach(o),Fn=h(Pe),b(ve.$$.fragment,Pe),Bn=h(Pe),b(Te.$$.fragment,Pe),Pe.forEach(o),Hn=h(S),P=s(S,"DIV",{class:!0});var qe=a(P);b(it.$$.fragment,qe),Rn=h(qe),Z=s(qe,"P",{});var Rt=a(Z);Un=l(Rt,"The "),qt=s(Rt,"A",{href:!0});var fa=a(qt);Jn=l(fa,"GroupViTModel"),fa.forEach(o),Xn=l(Rt," forward method, overrides the "),uo=s(Rt,"CODE",{});var ma=a(uo);Yn=l(ma,"__call__"),ma.forEach(o),Kn=l(Rt," special method."),Rt.forEach(o),Qn=h(qe),b($e.$$.fragment,qe),Zn=h(qe),b(be.$$.fragment,qe),qe.forEach(o),es=h(S),q=s(S,"DIV",{class:!0});var Ie=a(q);b(lt.$$.fragment,Ie),ts=h(Ie),ee=s(Ie,"P",{});var Ut=a(ee);os=l(Ut,"The "),It=s(Ut,"A",{href:!0});var ga=a(It);rs=l(ga,"GroupViTModel"),ga.forEach(o),ns=l(Ut," forward method, overrides the "),fo=s(Ut,"CODE",{});var ha=a(fo);ss=l(ha,"__call__"),ha.forEach(o),as=l(Ut," special method."),Ut.forEach(o),is=h(Ie),b(Ve.$$.fragment,Ie),ls=h(Ie),b(ye.$$.fragment,Ie),Ie.forEach(o),S.forEach(o),Ro=h(t),te=s(t,"H2",{class:!0});var ar=a(te);we=s(ar,"A",{id:!0,class:!0,href:!0});var _a=a(we);mo=s(_a,"SPAN",{});var va=a(mo);b(pt.$$.fragment,va),va.forEach(o),_a.forEach(o),ps=h(ar),go=s(ar,"SPAN",{});var Ta=a(go);ds=l(Ta,"GroupViTTextModel"),Ta.forEach(o),ar.forEach(o),Uo=h(t),oe=s(t,"DIV",{class:!0});var ir=a(oe);b(dt.$$.fragment,ir),cs=h(ir),I=s(ir,"DIV",{class:!0});var Ae=a(I);b(ct.$$.fragment,Ae),us=h(Ae),re=s(Ae,"P",{});var Jt=a(re);fs=l(Jt,"The "),At=s(Jt,"A",{href:!0});var $a=a(At);ms=l($a,"GroupViTTextModel"),$a.forEach(o),gs=l(Jt," forward method, overrides the "),ho=s(Jt,"CODE",{});var ba=a(ho);hs=l(ba,"__call__"),ba.forEach(o),_s=l(Jt," special method."),Jt.forEach(o),vs=h(Ae),b(xe.$$.fragment,Ae),Ts=h(Ae),b(Ge.$$.fragment,Ae),Ae.forEach(o),ir.forEach(o),Jo=h(t),ne=s(t,"H2",{class:!0});var lr=a(ne);ke=s(lr,"A",{id:!0,class:!0,href:!0});var Va=a(ke);_o=s(Va,"SPAN",{});var ya=a(_o);b(ut.$$.fragment,ya),ya.forEach(o),Va.forEach(o),$s=h(lr),vo=s(lr,"SPAN",{});var wa=a(vo);bs=l(wa,"GroupViTVisionModel"),wa.forEach(o),lr.forEach(o),Xo=h(t),se=s(t,"DIV",{class:!0});var pr=a(se);b(ft.$$.fragment,pr),Vs=h(pr),A=s(pr,"DIV",{class:!0});var Oe=a(A);b(mt.$$.fragment,Oe),ys=h(Oe),ae=s(Oe,"P",{});var Xt=a(ae);ws=l(Xt,"The "),Ot=s(Xt,"A",{href:!0});var xa=a(Ot);xs=l(xa,"GroupViTVisionModel"),xa.forEach(o),Gs=l(Xt," forward method, overrides the "),To=s(Xt,"CODE",{});var Ga=a(To);ks=l(Ga,"__call__"),Ga.forEach(o),Ms=l(Xt," special method."),Xt.forEach(o),Cs=h(Oe),b(Me.$$.fragment,Oe),js=h(Oe),b(Ce.$$.fragment,Oe),Oe.forEach(o),pr.forEach(o),this.h()},h(){u(p,"name","hf:doc:metadata"),u(p,"content",JSON.stringify(Ha)),u(c,"id","groupvit"),u(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(c,"href","#groupvit"),u(f,"class","relative group"),u(le,"id","overview"),u(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(le,"href","#overview"),u(N,"class","relative group"),u(Se,"href","https://arxiv.org/abs/2202.11094"),u(Se,"rel","nofollow"),u($t,"href","clip"),u(We,"href","https://github.com/xvjiarui/GroupViT/blob/main/demo/GroupViT_hf_inference_notebook.ipynb"),u(We,"rel","nofollow"),u(Fe,"href","https://huggingface.co/spaces/xvjiarui/GroupViT"),u(Fe,"rel","nofollow"),u(Be,"href","https://huggingface.co/xvjiarui"),u(Be,"rel","nofollow"),u(He,"href","https://github.com/NVlabs/GroupViT"),u(He,"rel","nofollow"),u(de,"id","transformers.GroupViTConfig"),u(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(de,"href","#transformers.GroupViTConfig"),u(F,"class","relative group"),u(wt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"),u(xt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),u(Gt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),u(kt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),u(Mt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"),u(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fe,"id","transformers.GroupViTTextConfig"),u(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fe,"href","#transformers.GroupViTTextConfig"),u(H,"class","relative group"),u(Qe,"href","https://huggingface.co/nvidia/groupvit-gccyfcc"),u(Qe,"rel","nofollow"),u(Ct,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),u(jt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),u(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ge,"id","transformers.GroupViTVisionConfig"),u(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ge,"href","#transformers.GroupViTVisionConfig"),u(J,"class","relative group"),u(tt,"href","https://huggingface.co/nvidia/groupvit-gccyfcc"),u(tt,"rel","nofollow"),u(Et,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),u(zt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_e,"id","transformers.GroupViTModel"),u(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_e,"href","#transformers.GroupViTModel"),u(K,"class","relative group"),u(st,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(st,"rel","nofollow"),u(Pt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(we,"id","transformers.GroupViTTextModel"),u(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(we,"href","#transformers.GroupViTTextModel"),u(te,"class","relative group"),u(At,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextModel"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ke,"id","transformers.GroupViTVisionModel"),u(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ke,"href","#transformers.GroupViTVisionModel"),u(ne,"class","relative group"),u(Ot,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionModel"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,p),v(t,T,m),v(t,f,m),e(f,c),e(c,_),V(r,_,null),e(f,d),e(f,k),e(k,dr),v(t,Eo,m),v(t,N,m),e(N,le),e(le,Yt),V(De,Yt,null),e(N,cr),e(N,Kt),e(Kt,ur),v(t,zo,m),v(t,L,m),e(L,fr),e(L,Se),e(Se,mr),e(L,gr),e(L,$t),e($t,hr),e(L,_r),v(t,Po,m),v(t,bt,m),e(bt,vr),v(t,qo,m),v(t,Vt,m),e(Vt,Qt),e(Qt,Tr),v(t,Io,m),v(t,yt,m),e(yt,$r),v(t,Ao,m),v(t,pe,m),e(pe,Ne),e(Ne,br),e(Ne,Zt),e(Zt,Vr),e(Ne,yr),e(pe,wr),e(pe,W),e(W,xr),e(W,We),e(We,Gr),e(W,kr),e(W,Fe),e(Fe,Mr),e(W,Cr),v(t,Oo,m),v(t,D,m),e(D,jr),e(D,Be),e(Be,Er),e(D,zr),e(D,He),e(He,Pr),e(D,qr),v(t,Lo,m),v(t,F,m),e(F,de),e(de,eo),V(Re,eo,null),e(F,Ir),e(F,to),e(to,Ar),v(t,Do,m),v(t,C,m),V(Ue,C,null),e(C,Or),e(C,ce),e(ce,wt),e(wt,Lr),e(ce,Dr),e(ce,xt),e(xt,Sr),e(ce,Nr),e(C,Wr),e(C,B),e(B,Fr),e(B,Gt),e(Gt,Br),e(B,Hr),e(B,kt),e(kt,Rr),e(B,Ur),e(C,Jr),e(C,ue),V(Je,ue,null),e(ue,Xr),e(ue,Xe),e(Xe,Yr),e(Xe,Mt),e(Mt,Kr),e(Xe,Qr),v(t,So,m),v(t,H,m),e(H,fe),e(fe,oo),V(Ye,oo,null),e(H,Zr),e(H,ro),e(ro,en),v(t,No,m),v(t,j,m),V(Ke,j,null),e(j,tn),e(j,R),e(R,on),e(R,no),e(no,rn),e(R,nn),e(R,Qe),e(Qe,sn),e(R,an),e(j,ln),e(j,U),e(U,pn),e(U,Ct),e(Ct,dn),e(U,cn),e(U,jt),e(jt,un),e(U,fn),e(j,mn),V(me,j,null),v(t,Wo,m),v(t,J,m),e(J,ge),e(ge,so),V(Ze,so,null),e(J,gn),e(J,ao),e(ao,hn),v(t,Fo,m),v(t,E,m),V(et,E,null),e(E,_n),e(E,X),e(X,vn),e(X,io),e(io,Tn),e(X,$n),e(X,tt),e(tt,bn),e(X,Vn),e(E,yn),e(E,Y),e(Y,wn),e(Y,Et),e(Et,xn),e(Y,Gn),e(Y,zt),e(zt,kn),e(Y,Mn),e(E,Cn),V(he,E,null),v(t,Bo,m),v(t,K,m),e(K,_e),e(_e,lo),V(ot,lo,null),e(K,jn),e(K,po),e(po,En),v(t,Ho,m),v(t,M,m),V(rt,M,null),e(M,zn),e(M,nt),e(nt,Pn),e(nt,st),e(st,qn),e(nt,In),e(M,An),e(M,z),V(at,z,null),e(z,On),e(z,Q),e(Q,Ln),e(Q,Pt),e(Pt,Dn),e(Q,Sn),e(Q,co),e(co,Nn),e(Q,Wn),e(z,Fn),V(ve,z,null),e(z,Bn),V(Te,z,null),e(M,Hn),e(M,P),V(it,P,null),e(P,Rn),e(P,Z),e(Z,Un),e(Z,qt),e(qt,Jn),e(Z,Xn),e(Z,uo),e(uo,Yn),e(Z,Kn),e(P,Qn),V($e,P,null),e(P,Zn),V(be,P,null),e(M,es),e(M,q),V(lt,q,null),e(q,ts),e(q,ee),e(ee,os),e(ee,It),e(It,rs),e(ee,ns),e(ee,fo),e(fo,ss),e(ee,as),e(q,is),V(Ve,q,null),e(q,ls),V(ye,q,null),v(t,Ro,m),v(t,te,m),e(te,we),e(we,mo),V(pt,mo,null),e(te,ps),e(te,go),e(go,ds),v(t,Uo,m),v(t,oe,m),V(dt,oe,null),e(oe,cs),e(oe,I),V(ct,I,null),e(I,us),e(I,re),e(re,fs),e(re,At),e(At,ms),e(re,gs),e(re,ho),e(ho,hs),e(re,_s),e(I,vs),V(xe,I,null),e(I,Ts),V(Ge,I,null),v(t,Jo,m),v(t,ne,m),e(ne,ke),e(ke,_o),V(ut,_o,null),e(ne,$s),e(ne,vo),e(vo,bs),v(t,Xo,m),v(t,se,m),V(ft,se,null),e(se,Vs),e(se,A),V(mt,A,null),e(A,ys),e(A,ae),e(ae,ws),e(ae,Ot),e(Ot,xs),e(ae,Gs),e(ae,To),e(To,ks),e(ae,Ms),e(A,Cs),V(Me,A,null),e(A,js),V(Ce,A,null),Yo=!0},p(t,[m]){const gt={};m&2&&(gt.$$scope={dirty:m,ctx:t}),me.$set(gt);const $o={};m&2&&($o.$$scope={dirty:m,ctx:t}),he.$set($o);const bo={};m&2&&(bo.$$scope={dirty:m,ctx:t}),ve.$set(bo);const Vo={};m&2&&(Vo.$$scope={dirty:m,ctx:t}),Te.$set(Vo);const ht={};m&2&&(ht.$$scope={dirty:m,ctx:t}),$e.$set(ht);const yo={};m&2&&(yo.$$scope={dirty:m,ctx:t}),be.$set(yo);const wo={};m&2&&(wo.$$scope={dirty:m,ctx:t}),Ve.$set(wo);const xo={};m&2&&(xo.$$scope={dirty:m,ctx:t}),ye.$set(xo);const ie={};m&2&&(ie.$$scope={dirty:m,ctx:t}),xe.$set(ie);const Go={};m&2&&(Go.$$scope={dirty:m,ctx:t}),Ge.$set(Go);const ko={};m&2&&(ko.$$scope={dirty:m,ctx:t}),Me.$set(ko);const Mo={};m&2&&(Mo.$$scope={dirty:m,ctx:t}),Ce.$set(Mo)},i(t){Yo||(y(r.$$.fragment,t),y(De.$$.fragment,t),y(Re.$$.fragment,t),y(Ue.$$.fragment,t),y(Je.$$.fragment,t),y(Ye.$$.fragment,t),y(Ke.$$.fragment,t),y(me.$$.fragment,t),y(Ze.$$.fragment,t),y(et.$$.fragment,t),y(he.$$.fragment,t),y(ot.$$.fragment,t),y(rt.$$.fragment,t),y(at.$$.fragment,t),y(ve.$$.fragment,t),y(Te.$$.fragment,t),y(it.$$.fragment,t),y($e.$$.fragment,t),y(be.$$.fragment,t),y(lt.$$.fragment,t),y(Ve.$$.fragment,t),y(ye.$$.fragment,t),y(pt.$$.fragment,t),y(dt.$$.fragment,t),y(ct.$$.fragment,t),y(xe.$$.fragment,t),y(Ge.$$.fragment,t),y(ut.$$.fragment,t),y(ft.$$.fragment,t),y(mt.$$.fragment,t),y(Me.$$.fragment,t),y(Ce.$$.fragment,t),Yo=!0)},o(t){w(r.$$.fragment,t),w(De.$$.fragment,t),w(Re.$$.fragment,t),w(Ue.$$.fragment,t),w(Je.$$.fragment,t),w(Ye.$$.fragment,t),w(Ke.$$.fragment,t),w(me.$$.fragment,t),w(Ze.$$.fragment,t),w(et.$$.fragment,t),w(he.$$.fragment,t),w(ot.$$.fragment,t),w(rt.$$.fragment,t),w(at.$$.fragment,t),w(ve.$$.fragment,t),w(Te.$$.fragment,t),w(it.$$.fragment,t),w($e.$$.fragment,t),w(be.$$.fragment,t),w(lt.$$.fragment,t),w(Ve.$$.fragment,t),w(ye.$$.fragment,t),w(pt.$$.fragment,t),w(dt.$$.fragment,t),w(ct.$$.fragment,t),w(xe.$$.fragment,t),w(Ge.$$.fragment,t),w(ut.$$.fragment,t),w(ft.$$.fragment,t),w(mt.$$.fragment,t),w(Me.$$.fragment,t),w(Ce.$$.fragment,t),Yo=!1},d(t){o(p),t&&o(T),t&&o(f),x(r),t&&o(Eo),t&&o(N),x(De),t&&o(zo),t&&o(L),t&&o(Po),t&&o(bt),t&&o(qo),t&&o(Vt),t&&o(Io),t&&o(yt),t&&o(Ao),t&&o(pe),t&&o(Oo),t&&o(D),t&&o(Lo),t&&o(F),x(Re),t&&o(Do),t&&o(C),x(Ue),x(Je),t&&o(So),t&&o(H),x(Ye),t&&o(No),t&&o(j),x(Ke),x(me),t&&o(Wo),t&&o(J),x(Ze),t&&o(Fo),t&&o(E),x(et),x(he),t&&o(Bo),t&&o(K),x(ot),t&&o(Ho),t&&o(M),x(rt),x(at),x(ve),x(Te),x(it),x($e),x(be),x(lt),x(Ve),x(ye),t&&o(Ro),t&&o(te),x(pt),t&&o(Uo),t&&o(oe),x(dt),x(ct),x(xe),x(Ge),t&&o(Jo),t&&o(ne),x(ut),t&&o(Xo),t&&o(se),x(ft),x(mt),x(Me),x(Ce)}}}const Ha={local:"groupvit",sections:[{local:"overview",title:"Overview"},{local:"transformers.GroupViTConfig",title:"GroupViTConfig"},{local:"transformers.GroupViTTextConfig",title:"GroupViTTextConfig"},{local:"transformers.GroupViTVisionConfig",title:"GroupViTVisionConfig"},{local:"transformers.GroupViTModel",title:"GroupViTModel"},{local:"transformers.GroupViTTextModel",title:"GroupViTTextModel"},{local:"transformers.GroupViTVisionModel",title:"GroupViTVisionModel"}],title:"GroupViT"};function Ra(G){return Ea(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Za extends ka{constructor(p){super();Ma(this,p,Ra,Ba,Ca,{})}}export{Za as default,Ha as metadata};
