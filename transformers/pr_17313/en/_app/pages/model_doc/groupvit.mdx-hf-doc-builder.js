import{S as ga,i as ha,s as _a,e as n,k as g,w as $,t as i,M as va,c as s,d as o,m as h,a,x as b,h as l,b as f,G as e,g as v,y as V,q as y,o as w,B as x,v as Ta,L as mt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Go}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as gt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ft}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function $a(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import GroupViTTextConfig, GroupViTTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),T=i("Example:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Example:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function ba(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import GroupViTVisionConfig, GroupViTVisionModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),T=i("Example:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Example:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function Va(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function ya(G){let p,T,u,c,_;return c=new gt({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function wa(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function xa(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import CLIPTokenizer, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gccyfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gccyfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function Ga(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function ka(G){let p,T,u,c,_;return c=new gt({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function Ma(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function Ca(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import CLIPTokenizer, GroupViTTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function ja(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function Ea(G){let p,T,u,c,_;return c=new gt({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function Pa(G){let p,T,u,c,_,r,d,k,sr,ko,N,ie,Rt,Oe,ar,Ut,ir,Mo,L,lr,Le,pr,dr,ht,cr,ur,Co,_t,fr,jo,vt,Jt,mr,Eo,Tt,gr,Po,$t,De,hr,Xt,_r,vr,zo,D,Tr,Se,$r,br,Ne,Vr,yr,qo,W,le,Yt,We,wr,Kt,xr,Io,C,Fe,Gr,pe,bt,kr,Mr,Vt,Cr,jr,Er,F,Pr,yt,zr,qr,wt,Ir,Ar,Or,de,Be,Lr,He,Dr,xt,Sr,Nr,Ao,B,ce,Qt,Re,Wr,Zt,Fr,Oo,j,Ue,Br,H,Hr,eo,Rr,Ur,Je,Jr,Xr,Yr,R,Kr,Gt,Qr,Zr,kt,en,tn,on,ue,Lo,U,fe,to,Xe,rn,oo,nn,Do,E,Ye,sn,J,an,ro,ln,pn,Ke,dn,cn,un,X,fn,Mt,mn,gn,Ct,hn,_n,vn,me,So,Y,ge,no,Qe,Tn,so,$n,No,M,Ze,bn,et,Vn,tt,yn,wn,xn,P,ot,Gn,K,kn,jt,Mn,Cn,ao,jn,En,Pn,he,zn,_e,qn,z,rt,In,Q,An,Et,On,Ln,io,Dn,Sn,Nn,ve,Wn,Te,Fn,q,nt,Bn,Z,Hn,Pt,Rn,Un,lo,Jn,Xn,Yn,$e,Kn,be,Wo,ee,Ve,po,st,Qn,co,Zn,Fo,te,at,es,I,it,ts,oe,os,zt,rs,ns,uo,ss,as,is,ye,ls,we,Bo,re,xe,fo,lt,ps,mo,ds,Ho,ne,pt,cs,A,dt,us,se,fs,qt,ms,gs,go,hs,_s,vs,Ge,Ts,ke,Ro;return r=new Ae({}),Oe=new Ae({}),We=new Ae({}),Fe=new O({props:{name:"class transformers.GroupViTConfig",anchor:"transformers.GroupViTConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 256"},{name:"projection_intermediate_dim",val:" = 4096"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextConfig">GroupViTTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.GroupViTConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionConfig">GroupViTVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.GroupViTConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.GroupViTConfig.projection_intermediate_dim",description:`<strong>projection_intermediate_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimentionality of intermediate layer of text and vision projection layers.`,name:"projection_intermediate_dim"},{anchor:"transformers.GroupViTConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> parameter. Default is used as per the original GroupViT
implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.GroupViTConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L270"}}),Be=new O({props:{name:"from_text_vision_configs",anchor:"transformers.GroupViTConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": GroupViTTextConfig"},{name:"vision_config",val:": GroupViTVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L327",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"
>GroupViTConfig</a></p>
`}}),Re=new Ae({}),Ue=new O({props:{name:"class transformers.GroupViTTextConfig",anchor:"transformers.GroupViTTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 256"},{name:"intermediate_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L32"}}),ue=new ft({props:{anchor:"transformers.GroupViTTextConfig.example",$$slots:{default:[$a]},$$scope:{ctx:G}}}),Xe=new Ae({}),Ye=new O({props:{name:"class transformers.GroupViTVisionConfig",anchor:"transformers.GroupViTVisionConfig",parameters:[{name:"hidden_size",val:" = 384"},{name:"intermediate_size",val:" = 1536"},{name:"depths",val:" = [6, 3, 3]"},{name:"num_hidden_layers",val:" = 12"},{name:"num_group_tokens",val:" = [64, 8, 0]"},{name:"num_output_groups",val:" = [64, 8, 8]"},{name:"num_attention_heads",val:" = 6"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"hidden_act",val:" = 'gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"assign_eps",val:" = 1.0"},{name:"assign_mlp_ratio",val:" = [0.5, 4]"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L140"}}),me=new ft({props:{anchor:"transformers.GroupViTVisionConfig.example",$$slots:{default:[ba]},$$scope:{ctx:G}}}),Qe=new Ae({}),Ze=new O({props:{name:"class transformers.GroupViTModel",anchor:"transformers.GroupViTModel",parameters:[{name:"config",val:": GroupViTConfig"}],parametersDescription:[{anchor:"transformers.GroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1558"}}),ot=new O({props:{name:"forward",anchor:"transformers.GroupViTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),he=new Go({props:{$$slots:{default:[Va]},$$scope:{ctx:G}}}),_e=new ft({props:{anchor:"transformers.GroupViTModel.forward.example",$$slots:{default:[ya]},$$scope:{ctx:G}}}),rt=new O({props:{name:"get_text_features",anchor:"transformers.GroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ve=new Go({props:{$$slots:{default:[wa]},$$scope:{ctx:G}}}),Te=new ft({props:{anchor:"transformers.GroupViTModel.get_text_features.example",$$slots:{default:[xa]},$$scope:{ctx:G}}}),nt=new O({props:{name:"get_image_features",anchor:"transformers.GroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),$e=new Go({props:{$$slots:{default:[Ga]},$$scope:{ctx:G}}}),be=new ft({props:{anchor:"transformers.GroupViTModel.get_image_features.example",$$slots:{default:[ka]},$$scope:{ctx:G}}}),st=new Ae({}),at=new O({props:{name:"class transformers.GroupViTTextModel",anchor:"transformers.GroupViTTextModel",parameters:[{name:"config",val:": GroupViTTextConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1394"}}),it=new O({props:{name:"forward",anchor:"transformers.GroupViTTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ye=new Go({props:{$$slots:{default:[Ma]},$$scope:{ctx:G}}}),we=new ft({props:{anchor:"transformers.GroupViTTextModel.forward.example",$$slots:{default:[Ca]},$$scope:{ctx:G}}}),lt=new Ae({}),pt=new O({props:{name:"class transformers.GroupViTVisionModel",anchor:"transformers.GroupViTVisionModel",parameters:[{name:"config",val:": GroupViTVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1505"}}),dt=new O({props:{name:"forward",anchor:"transformers.GroupViTVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Ge=new Go({props:{$$slots:{default:[ja]},$$scope:{ctx:G}}}),ke=new ft({props:{anchor:"transformers.GroupViTVisionModel.forward.example",$$slots:{default:[Ea]},$$scope:{ctx:G}}}),{c(){p=n("meta"),T=g(),u=n("h1"),c=n("a"),_=n("span"),$(r.$$.fragment),d=g(),k=n("span"),sr=i("GroupViT"),ko=g(),N=n("h2"),ie=n("a"),Rt=n("span"),$(Oe.$$.fragment),ar=g(),Ut=n("span"),ir=i("Overview"),Mo=g(),L=n("p"),lr=i("The GroupViT model was proposed in "),Le=n("a"),pr=i("GroupViT: Semantic Segmentation Emerges from Text Supervision"),dr=i(` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),ht=n("a"),cr=i("CLIP"),ur=i(", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),Co=g(),_t=n("p"),fr=i("The abstract from the paper is the following:"),jo=g(),vt=n("p"),Jt=n("em"),mr=i("Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),Eo=g(),Tt=n("p"),gr=i("Tips:"),Po=g(),$t=n("ul"),De=n("li"),hr=i("You may specify "),Xt=n("code"),_r=i("output_segmentation=True"),vr=i(" to get the segmentation logits of input texts."),zo=g(),D=n("p"),Tr=i("This model was contributed by "),Se=n("a"),$r=i("xvjiarui"),br=i(`.
The original code can be found `),Ne=n("a"),Vr=i("here"),yr=i("."),qo=g(),W=n("h2"),le=n("a"),Yt=n("span"),$(We.$$.fragment),wr=g(),Kt=n("span"),xr=i("GroupViTConfig"),Io=g(),C=n("div"),$(Fe.$$.fragment),Gr=g(),pe=n("p"),bt=n("a"),kr=i("GroupViTConfig"),Mr=i(" is the configuration class to store the configuration of a "),Vt=n("a"),Cr=i("GroupViTModel"),jr=i(`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),Er=g(),F=n("p"),Pr=i("Configuration objects inherit from "),yt=n("a"),zr=i("PretrainedConfig"),qr=i(` and can be used to control the model outputs. Read the
documentation from `),wt=n("a"),Ir=i("PretrainedConfig"),Ar=i(" for more information."),Or=g(),de=n("div"),$(Be.$$.fragment),Lr=g(),He=n("p"),Dr=i("Instantiate a "),xt=n("a"),Sr=i("GroupViTConfig"),Nr=i(` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),Ao=g(),B=n("h2"),ce=n("a"),Qt=n("span"),$(Re.$$.fragment),Wr=g(),Zt=n("span"),Fr=i("GroupViTTextConfig"),Oo=g(),j=n("div"),$(Ue.$$.fragment),Br=g(),H=n("p"),Hr=i("This is the configuration class to store the configuration of a "),eo=n("code"),Rr=i("GroupViTTextModel "),Ur=i(`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Je=n("a"),Jr=i("nvidia/groupvit-gccyfcc"),Xr=i(" architecture."),Yr=g(),R=n("p"),Kr=i("Configuration objects inherit from "),Gt=n("a"),Qr=i("PretrainedConfig"),Zr=i(` and can be used to control the model outputs. Read the
documentation from `),kt=n("a"),en=i("PretrainedConfig"),tn=i(" for more information."),on=g(),$(ue.$$.fragment),Lo=g(),U=n("h2"),fe=n("a"),to=n("span"),$(Xe.$$.fragment),rn=g(),oo=n("span"),nn=i("GroupViTVisionConfig"),Do=g(),E=n("div"),$(Ye.$$.fragment),sn=g(),J=n("p"),an=i("This is the configuration class to store the configuration of a "),ro=n("code"),ln=i("GroupViTVisionModel "),pn=i(`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Ke=n("a"),dn=i("nvidia/groupvit-gccyfcc"),cn=i(" architecture."),un=g(),X=n("p"),fn=i("Configuration objects inherit from "),Mt=n("a"),mn=i("PretrainedConfig"),gn=i(` and can be used to control the model outputs. Read the
documentation from `),Ct=n("a"),hn=i("PretrainedConfig"),_n=i(" for more information."),vn=g(),$(me.$$.fragment),So=g(),Y=n("h2"),ge=n("a"),no=n("span"),$(Qe.$$.fragment),Tn=g(),so=n("span"),$n=i("GroupViTModel"),No=g(),M=n("div"),$(Ze.$$.fragment),bn=g(),et=n("p"),Vn=i("This model is a PyTorch "),tt=n("a"),yn=i("torch.nn.Module"),wn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xn=g(),P=n("div"),$(ot.$$.fragment),Gn=g(),K=n("p"),kn=i("The "),jt=n("a"),Mn=i("GroupViTModel"),Cn=i(" forward method, overrides the "),ao=n("code"),jn=i("__call__"),En=i(" special method."),Pn=g(),$(he.$$.fragment),zn=g(),$(_e.$$.fragment),qn=g(),z=n("div"),$(rt.$$.fragment),In=g(),Q=n("p"),An=i("The "),Et=n("a"),On=i("GroupViTModel"),Ln=i(" forward method, overrides the "),io=n("code"),Dn=i("__call__"),Sn=i(" special method."),Nn=g(),$(ve.$$.fragment),Wn=g(),$(Te.$$.fragment),Fn=g(),q=n("div"),$(nt.$$.fragment),Bn=g(),Z=n("p"),Hn=i("The "),Pt=n("a"),Rn=i("GroupViTModel"),Un=i(" forward method, overrides the "),lo=n("code"),Jn=i("__call__"),Xn=i(" special method."),Yn=g(),$($e.$$.fragment),Kn=g(),$(be.$$.fragment),Wo=g(),ee=n("h2"),Ve=n("a"),po=n("span"),$(st.$$.fragment),Qn=g(),co=n("span"),Zn=i("GroupViTTextModel"),Fo=g(),te=n("div"),$(at.$$.fragment),es=g(),I=n("div"),$(it.$$.fragment),ts=g(),oe=n("p"),os=i("The "),zt=n("a"),rs=i("GroupViTTextModel"),ns=i(" forward method, overrides the "),uo=n("code"),ss=i("__call__"),as=i(" special method."),is=g(),$(ye.$$.fragment),ls=g(),$(we.$$.fragment),Bo=g(),re=n("h2"),xe=n("a"),fo=n("span"),$(lt.$$.fragment),ps=g(),mo=n("span"),ds=i("GroupViTVisionModel"),Ho=g(),ne=n("div"),$(pt.$$.fragment),cs=g(),A=n("div"),$(dt.$$.fragment),us=g(),se=n("p"),fs=i("The "),qt=n("a"),ms=i("GroupViTVisionModel"),gs=i(" forward method, overrides the "),go=n("code"),hs=i("__call__"),_s=i(" special method."),vs=g(),$(Ge.$$.fragment),Ts=g(),$(ke.$$.fragment),this.h()},l(t){const m=va('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),T=h(t),u=s(t,"H1",{class:!0});var ct=a(u);c=s(ct,"A",{id:!0,class:!0,href:!0});var ho=a(c);_=s(ho,"SPAN",{});var _o=a(_);b(r.$$.fragment,_o),_o.forEach(o),ho.forEach(o),d=h(ct),k=s(ct,"SPAN",{});var vo=a(k);sr=l(vo,"GroupViT"),vo.forEach(o),ct.forEach(o),ko=h(t),N=s(t,"H2",{class:!0});var ut=a(N);ie=s(ut,"A",{id:!0,class:!0,href:!0});var To=a(ie);Rt=s(To,"SPAN",{});var $o=a(Rt);b(Oe.$$.fragment,$o),$o.forEach(o),To.forEach(o),ar=h(ut),Ut=s(ut,"SPAN",{});var bo=a(Ut);ir=l(bo,"Overview"),bo.forEach(o),ut.forEach(o),Mo=h(t),L=s(t,"P",{});var ae=a(L);lr=l(ae,"The GroupViT model was proposed in "),Le=s(ae,"A",{href:!0,rel:!0});var Vo=a(Le);pr=l(Vo,"GroupViT: Semantic Segmentation Emerges from Text Supervision"),Vo.forEach(o),dr=l(ae,` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),ht=s(ae,"A",{href:!0});var yo=a(ht);cr=l(yo,"CLIP"),yo.forEach(o),ur=l(ae,", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),ae.forEach(o),Co=h(t),_t=s(t,"P",{});var wo=a(_t);fr=l(wo,"The abstract from the paper is the following:"),wo.forEach(o),jo=h(t),vt=s(t,"P",{});var $s=a(vt);Jt=s($s,"EM",{});var bs=a(Jt);mr=l(bs,"Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),bs.forEach(o),$s.forEach(o),Eo=h(t),Tt=s(t,"P",{});var Vs=a(Tt);gr=l(Vs,"Tips:"),Vs.forEach(o),Po=h(t),$t=s(t,"UL",{});var ys=a($t);De=s(ys,"LI",{});var Uo=a(De);hr=l(Uo,"You may specify "),Xt=s(Uo,"CODE",{});var ws=a(Xt);_r=l(ws,"output_segmentation=True"),ws.forEach(o),vr=l(Uo," to get the segmentation logits of input texts."),Uo.forEach(o),ys.forEach(o),zo=h(t),D=s(t,"P",{});var It=a(D);Tr=l(It,"This model was contributed by "),Se=s(It,"A",{href:!0,rel:!0});var xs=a(Se);$r=l(xs,"xvjiarui"),xs.forEach(o),br=l(It,`.
The original code can be found `),Ne=s(It,"A",{href:!0,rel:!0});var Gs=a(Ne);Vr=l(Gs,"here"),Gs.forEach(o),yr=l(It,"."),It.forEach(o),qo=h(t),W=s(t,"H2",{class:!0});var Jo=a(W);le=s(Jo,"A",{id:!0,class:!0,href:!0});var ks=a(le);Yt=s(ks,"SPAN",{});var Ms=a(Yt);b(We.$$.fragment,Ms),Ms.forEach(o),ks.forEach(o),wr=h(Jo),Kt=s(Jo,"SPAN",{});var Cs=a(Kt);xr=l(Cs,"GroupViTConfig"),Cs.forEach(o),Jo.forEach(o),Io=h(t),C=s(t,"DIV",{class:!0});var Me=a(C);b(Fe.$$.fragment,Me),Gr=h(Me),pe=s(Me,"P",{});var xo=a(pe);bt=s(xo,"A",{href:!0});var js=a(bt);kr=l(js,"GroupViTConfig"),js.forEach(o),Mr=l(xo," is the configuration class to store the configuration of a "),Vt=s(xo,"A",{href:!0});var Es=a(Vt);Cr=l(Es,"GroupViTModel"),Es.forEach(o),jr=l(xo,`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),xo.forEach(o),Er=h(Me),F=s(Me,"P",{});var At=a(F);Pr=l(At,"Configuration objects inherit from "),yt=s(At,"A",{href:!0});var Ps=a(yt);zr=l(Ps,"PretrainedConfig"),Ps.forEach(o),qr=l(At,` and can be used to control the model outputs. Read the
documentation from `),wt=s(At,"A",{href:!0});var zs=a(wt);Ir=l(zs,"PretrainedConfig"),zs.forEach(o),Ar=l(At," for more information."),At.forEach(o),Or=h(Me),de=s(Me,"DIV",{class:!0});var Xo=a(de);b(Be.$$.fragment,Xo),Lr=h(Xo),He=s(Xo,"P",{});var Yo=a(He);Dr=l(Yo,"Instantiate a "),xt=s(Yo,"A",{href:!0});var qs=a(xt);Sr=l(qs,"GroupViTConfig"),qs.forEach(o),Nr=l(Yo,` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),Yo.forEach(o),Xo.forEach(o),Me.forEach(o),Ao=h(t),B=s(t,"H2",{class:!0});var Ko=a(B);ce=s(Ko,"A",{id:!0,class:!0,href:!0});var Is=a(ce);Qt=s(Is,"SPAN",{});var As=a(Qt);b(Re.$$.fragment,As),As.forEach(o),Is.forEach(o),Wr=h(Ko),Zt=s(Ko,"SPAN",{});var Os=a(Zt);Fr=l(Os,"GroupViTTextConfig"),Os.forEach(o),Ko.forEach(o),Oo=h(t),j=s(t,"DIV",{class:!0});var Ce=a(j);b(Ue.$$.fragment,Ce),Br=h(Ce),H=s(Ce,"P",{});var Ot=a(H);Hr=l(Ot,"This is the configuration class to store the configuration of a "),eo=s(Ot,"CODE",{});var Ls=a(eo);Rr=l(Ls,"GroupViTTextModel "),Ls.forEach(o),Ur=l(Ot,`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Je=s(Ot,"A",{href:!0,rel:!0});var Ds=a(Je);Jr=l(Ds,"nvidia/groupvit-gccyfcc"),Ds.forEach(o),Xr=l(Ot," architecture."),Ot.forEach(o),Yr=h(Ce),R=s(Ce,"P",{});var Lt=a(R);Kr=l(Lt,"Configuration objects inherit from "),Gt=s(Lt,"A",{href:!0});var Ss=a(Gt);Qr=l(Ss,"PretrainedConfig"),Ss.forEach(o),Zr=l(Lt,` and can be used to control the model outputs. Read the
documentation from `),kt=s(Lt,"A",{href:!0});var Ns=a(kt);en=l(Ns,"PretrainedConfig"),Ns.forEach(o),tn=l(Lt," for more information."),Lt.forEach(o),on=h(Ce),b(ue.$$.fragment,Ce),Ce.forEach(o),Lo=h(t),U=s(t,"H2",{class:!0});var Qo=a(U);fe=s(Qo,"A",{id:!0,class:!0,href:!0});var Ws=a(fe);to=s(Ws,"SPAN",{});var Fs=a(to);b(Xe.$$.fragment,Fs),Fs.forEach(o),Ws.forEach(o),rn=h(Qo),oo=s(Qo,"SPAN",{});var Bs=a(oo);nn=l(Bs,"GroupViTVisionConfig"),Bs.forEach(o),Qo.forEach(o),Do=h(t),E=s(t,"DIV",{class:!0});var je=a(E);b(Ye.$$.fragment,je),sn=h(je),J=s(je,"P",{});var Dt=a(J);an=l(Dt,"This is the configuration class to store the configuration of a "),ro=s(Dt,"CODE",{});var Hs=a(ro);ln=l(Hs,"GroupViTVisionModel "),Hs.forEach(o),pn=l(Dt,`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Ke=s(Dt,"A",{href:!0,rel:!0});var Rs=a(Ke);dn=l(Rs,"nvidia/groupvit-gccyfcc"),Rs.forEach(o),cn=l(Dt," architecture."),Dt.forEach(o),un=h(je),X=s(je,"P",{});var St=a(X);fn=l(St,"Configuration objects inherit from "),Mt=s(St,"A",{href:!0});var Us=a(Mt);mn=l(Us,"PretrainedConfig"),Us.forEach(o),gn=l(St,` and can be used to control the model outputs. Read the
documentation from `),Ct=s(St,"A",{href:!0});var Js=a(Ct);hn=l(Js,"PretrainedConfig"),Js.forEach(o),_n=l(St," for more information."),St.forEach(o),vn=h(je),b(me.$$.fragment,je),je.forEach(o),So=h(t),Y=s(t,"H2",{class:!0});var Zo=a(Y);ge=s(Zo,"A",{id:!0,class:!0,href:!0});var Xs=a(ge);no=s(Xs,"SPAN",{});var Ys=a(no);b(Qe.$$.fragment,Ys),Ys.forEach(o),Xs.forEach(o),Tn=h(Zo),so=s(Zo,"SPAN",{});var Ks=a(so);$n=l(Ks,"GroupViTModel"),Ks.forEach(o),Zo.forEach(o),No=h(t),M=s(t,"DIV",{class:!0});var S=a(M);b(Ze.$$.fragment,S),bn=h(S),et=s(S,"P",{});var er=a(et);Vn=l(er,"This model is a PyTorch "),tt=s(er,"A",{href:!0,rel:!0});var Qs=a(tt);yn=l(Qs,"torch.nn.Module"),Qs.forEach(o),wn=l(er,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),er.forEach(o),xn=h(S),P=s(S,"DIV",{class:!0});var Ee=a(P);b(ot.$$.fragment,Ee),Gn=h(Ee),K=s(Ee,"P",{});var Nt=a(K);kn=l(Nt,"The "),jt=s(Nt,"A",{href:!0});var Zs=a(jt);Mn=l(Zs,"GroupViTModel"),Zs.forEach(o),Cn=l(Nt," forward method, overrides the "),ao=s(Nt,"CODE",{});var ea=a(ao);jn=l(ea,"__call__"),ea.forEach(o),En=l(Nt," special method."),Nt.forEach(o),Pn=h(Ee),b(he.$$.fragment,Ee),zn=h(Ee),b(_e.$$.fragment,Ee),Ee.forEach(o),qn=h(S),z=s(S,"DIV",{class:!0});var Pe=a(z);b(rt.$$.fragment,Pe),In=h(Pe),Q=s(Pe,"P",{});var Wt=a(Q);An=l(Wt,"The "),Et=s(Wt,"A",{href:!0});var ta=a(Et);On=l(ta,"GroupViTModel"),ta.forEach(o),Ln=l(Wt," forward method, overrides the "),io=s(Wt,"CODE",{});var oa=a(io);Dn=l(oa,"__call__"),oa.forEach(o),Sn=l(Wt," special method."),Wt.forEach(o),Nn=h(Pe),b(ve.$$.fragment,Pe),Wn=h(Pe),b(Te.$$.fragment,Pe),Pe.forEach(o),Fn=h(S),q=s(S,"DIV",{class:!0});var ze=a(q);b(nt.$$.fragment,ze),Bn=h(ze),Z=s(ze,"P",{});var Ft=a(Z);Hn=l(Ft,"The "),Pt=s(Ft,"A",{href:!0});var ra=a(Pt);Rn=l(ra,"GroupViTModel"),ra.forEach(o),Un=l(Ft," forward method, overrides the "),lo=s(Ft,"CODE",{});var na=a(lo);Jn=l(na,"__call__"),na.forEach(o),Xn=l(Ft," special method."),Ft.forEach(o),Yn=h(ze),b($e.$$.fragment,ze),Kn=h(ze),b(be.$$.fragment,ze),ze.forEach(o),S.forEach(o),Wo=h(t),ee=s(t,"H2",{class:!0});var tr=a(ee);Ve=s(tr,"A",{id:!0,class:!0,href:!0});var sa=a(Ve);po=s(sa,"SPAN",{});var aa=a(po);b(st.$$.fragment,aa),aa.forEach(o),sa.forEach(o),Qn=h(tr),co=s(tr,"SPAN",{});var ia=a(co);Zn=l(ia,"GroupViTTextModel"),ia.forEach(o),tr.forEach(o),Fo=h(t),te=s(t,"DIV",{class:!0});var or=a(te);b(at.$$.fragment,or),es=h(or),I=s(or,"DIV",{class:!0});var qe=a(I);b(it.$$.fragment,qe),ts=h(qe),oe=s(qe,"P",{});var Bt=a(oe);os=l(Bt,"The "),zt=s(Bt,"A",{href:!0});var la=a(zt);rs=l(la,"GroupViTTextModel"),la.forEach(o),ns=l(Bt," forward method, overrides the "),uo=s(Bt,"CODE",{});var pa=a(uo);ss=l(pa,"__call__"),pa.forEach(o),as=l(Bt," special method."),Bt.forEach(o),is=h(qe),b(ye.$$.fragment,qe),ls=h(qe),b(we.$$.fragment,qe),qe.forEach(o),or.forEach(o),Bo=h(t),re=s(t,"H2",{class:!0});var rr=a(re);xe=s(rr,"A",{id:!0,class:!0,href:!0});var da=a(xe);fo=s(da,"SPAN",{});var ca=a(fo);b(lt.$$.fragment,ca),ca.forEach(o),da.forEach(o),ps=h(rr),mo=s(rr,"SPAN",{});var ua=a(mo);ds=l(ua,"GroupViTVisionModel"),ua.forEach(o),rr.forEach(o),Ho=h(t),ne=s(t,"DIV",{class:!0});var nr=a(ne);b(pt.$$.fragment,nr),cs=h(nr),A=s(nr,"DIV",{class:!0});var Ie=a(A);b(dt.$$.fragment,Ie),us=h(Ie),se=s(Ie,"P",{});var Ht=a(se);fs=l(Ht,"The "),qt=s(Ht,"A",{href:!0});var fa=a(qt);ms=l(fa,"GroupViTVisionModel"),fa.forEach(o),gs=l(Ht," forward method, overrides the "),go=s(Ht,"CODE",{});var ma=a(go);hs=l(ma,"__call__"),ma.forEach(o),_s=l(Ht," special method."),Ht.forEach(o),vs=h(Ie),b(Ge.$$.fragment,Ie),Ts=h(Ie),b(ke.$$.fragment,Ie),Ie.forEach(o),nr.forEach(o),this.h()},h(){f(p,"name","hf:doc:metadata"),f(p,"content",JSON.stringify(za)),f(c,"id","groupvit"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#groupvit"),f(u,"class","relative group"),f(ie,"id","overview"),f(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ie,"href","#overview"),f(N,"class","relative group"),f(Le,"href","https://arxiv.org/abs/2202.11094"),f(Le,"rel","nofollow"),f(ht,"href","clip"),f(Se,"href","https://huggingface.co/xvjiarui"),f(Se,"rel","nofollow"),f(Ne,"href","https://github.com/NVlabs/GroupViT"),f(Ne,"rel","nofollow"),f(le,"id","transformers.GroupViTConfig"),f(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(le,"href","#transformers.GroupViTConfig"),f(W,"class","relative group"),f(bt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"),f(Vt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(yt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(wt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(xt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"),f(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ce,"id","transformers.GroupViTTextConfig"),f(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ce,"href","#transformers.GroupViTTextConfig"),f(B,"class","relative group"),f(Je,"href","https://huggingface.co/nvidia/groupvit-gccyfcc"),f(Je,"rel","nofollow"),f(Gt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(kt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fe,"id","transformers.GroupViTVisionConfig"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#transformers.GroupViTVisionConfig"),f(U,"class","relative group"),f(Ke,"href","https://huggingface.co/nvidia/groupvit-gccyfcc"),f(Ke,"rel","nofollow"),f(Mt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ct,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ge,"id","transformers.GroupViTModel"),f(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ge,"href","#transformers.GroupViTModel"),f(Y,"class","relative group"),f(tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(tt,"rel","nofollow"),f(jt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Et,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"id","transformers.GroupViTTextModel"),f(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ve,"href","#transformers.GroupViTTextModel"),f(ee,"class","relative group"),f(zt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextModel"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"id","transformers.GroupViTVisionModel"),f(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xe,"href","#transformers.GroupViTVisionModel"),f(re,"class","relative group"),f(qt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionModel"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,p),v(t,T,m),v(t,u,m),e(u,c),e(c,_),V(r,_,null),e(u,d),e(u,k),e(k,sr),v(t,ko,m),v(t,N,m),e(N,ie),e(ie,Rt),V(Oe,Rt,null),e(N,ar),e(N,Ut),e(Ut,ir),v(t,Mo,m),v(t,L,m),e(L,lr),e(L,Le),e(Le,pr),e(L,dr),e(L,ht),e(ht,cr),e(L,ur),v(t,Co,m),v(t,_t,m),e(_t,fr),v(t,jo,m),v(t,vt,m),e(vt,Jt),e(Jt,mr),v(t,Eo,m),v(t,Tt,m),e(Tt,gr),v(t,Po,m),v(t,$t,m),e($t,De),e(De,hr),e(De,Xt),e(Xt,_r),e(De,vr),v(t,zo,m),v(t,D,m),e(D,Tr),e(D,Se),e(Se,$r),e(D,br),e(D,Ne),e(Ne,Vr),e(D,yr),v(t,qo,m),v(t,W,m),e(W,le),e(le,Yt),V(We,Yt,null),e(W,wr),e(W,Kt),e(Kt,xr),v(t,Io,m),v(t,C,m),V(Fe,C,null),e(C,Gr),e(C,pe),e(pe,bt),e(bt,kr),e(pe,Mr),e(pe,Vt),e(Vt,Cr),e(pe,jr),e(C,Er),e(C,F),e(F,Pr),e(F,yt),e(yt,zr),e(F,qr),e(F,wt),e(wt,Ir),e(F,Ar),e(C,Or),e(C,de),V(Be,de,null),e(de,Lr),e(de,He),e(He,Dr),e(He,xt),e(xt,Sr),e(He,Nr),v(t,Ao,m),v(t,B,m),e(B,ce),e(ce,Qt),V(Re,Qt,null),e(B,Wr),e(B,Zt),e(Zt,Fr),v(t,Oo,m),v(t,j,m),V(Ue,j,null),e(j,Br),e(j,H),e(H,Hr),e(H,eo),e(eo,Rr),e(H,Ur),e(H,Je),e(Je,Jr),e(H,Xr),e(j,Yr),e(j,R),e(R,Kr),e(R,Gt),e(Gt,Qr),e(R,Zr),e(R,kt),e(kt,en),e(R,tn),e(j,on),V(ue,j,null),v(t,Lo,m),v(t,U,m),e(U,fe),e(fe,to),V(Xe,to,null),e(U,rn),e(U,oo),e(oo,nn),v(t,Do,m),v(t,E,m),V(Ye,E,null),e(E,sn),e(E,J),e(J,an),e(J,ro),e(ro,ln),e(J,pn),e(J,Ke),e(Ke,dn),e(J,cn),e(E,un),e(E,X),e(X,fn),e(X,Mt),e(Mt,mn),e(X,gn),e(X,Ct),e(Ct,hn),e(X,_n),e(E,vn),V(me,E,null),v(t,So,m),v(t,Y,m),e(Y,ge),e(ge,no),V(Qe,no,null),e(Y,Tn),e(Y,so),e(so,$n),v(t,No,m),v(t,M,m),V(Ze,M,null),e(M,bn),e(M,et),e(et,Vn),e(et,tt),e(tt,yn),e(et,wn),e(M,xn),e(M,P),V(ot,P,null),e(P,Gn),e(P,K),e(K,kn),e(K,jt),e(jt,Mn),e(K,Cn),e(K,ao),e(ao,jn),e(K,En),e(P,Pn),V(he,P,null),e(P,zn),V(_e,P,null),e(M,qn),e(M,z),V(rt,z,null),e(z,In),e(z,Q),e(Q,An),e(Q,Et),e(Et,On),e(Q,Ln),e(Q,io),e(io,Dn),e(Q,Sn),e(z,Nn),V(ve,z,null),e(z,Wn),V(Te,z,null),e(M,Fn),e(M,q),V(nt,q,null),e(q,Bn),e(q,Z),e(Z,Hn),e(Z,Pt),e(Pt,Rn),e(Z,Un),e(Z,lo),e(lo,Jn),e(Z,Xn),e(q,Yn),V($e,q,null),e(q,Kn),V(be,q,null),v(t,Wo,m),v(t,ee,m),e(ee,Ve),e(Ve,po),V(st,po,null),e(ee,Qn),e(ee,co),e(co,Zn),v(t,Fo,m),v(t,te,m),V(at,te,null),e(te,es),e(te,I),V(it,I,null),e(I,ts),e(I,oe),e(oe,os),e(oe,zt),e(zt,rs),e(oe,ns),e(oe,uo),e(uo,ss),e(oe,as),e(I,is),V(ye,I,null),e(I,ls),V(we,I,null),v(t,Bo,m),v(t,re,m),e(re,xe),e(xe,fo),V(lt,fo,null),e(re,ps),e(re,mo),e(mo,ds),v(t,Ho,m),v(t,ne,m),V(pt,ne,null),e(ne,cs),e(ne,A),V(dt,A,null),e(A,us),e(A,se),e(se,fs),e(se,qt),e(qt,ms),e(se,gs),e(se,go),e(go,hs),e(se,_s),e(A,vs),V(Ge,A,null),e(A,Ts),V(ke,A,null),Ro=!0},p(t,[m]){const ct={};m&2&&(ct.$$scope={dirty:m,ctx:t}),ue.$set(ct);const ho={};m&2&&(ho.$$scope={dirty:m,ctx:t}),me.$set(ho);const _o={};m&2&&(_o.$$scope={dirty:m,ctx:t}),he.$set(_o);const vo={};m&2&&(vo.$$scope={dirty:m,ctx:t}),_e.$set(vo);const ut={};m&2&&(ut.$$scope={dirty:m,ctx:t}),ve.$set(ut);const To={};m&2&&(To.$$scope={dirty:m,ctx:t}),Te.$set(To);const $o={};m&2&&($o.$$scope={dirty:m,ctx:t}),$e.$set($o);const bo={};m&2&&(bo.$$scope={dirty:m,ctx:t}),be.$set(bo);const ae={};m&2&&(ae.$$scope={dirty:m,ctx:t}),ye.$set(ae);const Vo={};m&2&&(Vo.$$scope={dirty:m,ctx:t}),we.$set(Vo);const yo={};m&2&&(yo.$$scope={dirty:m,ctx:t}),Ge.$set(yo);const wo={};m&2&&(wo.$$scope={dirty:m,ctx:t}),ke.$set(wo)},i(t){Ro||(y(r.$$.fragment,t),y(Oe.$$.fragment,t),y(We.$$.fragment,t),y(Fe.$$.fragment,t),y(Be.$$.fragment,t),y(Re.$$.fragment,t),y(Ue.$$.fragment,t),y(ue.$$.fragment,t),y(Xe.$$.fragment,t),y(Ye.$$.fragment,t),y(me.$$.fragment,t),y(Qe.$$.fragment,t),y(Ze.$$.fragment,t),y(ot.$$.fragment,t),y(he.$$.fragment,t),y(_e.$$.fragment,t),y(rt.$$.fragment,t),y(ve.$$.fragment,t),y(Te.$$.fragment,t),y(nt.$$.fragment,t),y($e.$$.fragment,t),y(be.$$.fragment,t),y(st.$$.fragment,t),y(at.$$.fragment,t),y(it.$$.fragment,t),y(ye.$$.fragment,t),y(we.$$.fragment,t),y(lt.$$.fragment,t),y(pt.$$.fragment,t),y(dt.$$.fragment,t),y(Ge.$$.fragment,t),y(ke.$$.fragment,t),Ro=!0)},o(t){w(r.$$.fragment,t),w(Oe.$$.fragment,t),w(We.$$.fragment,t),w(Fe.$$.fragment,t),w(Be.$$.fragment,t),w(Re.$$.fragment,t),w(Ue.$$.fragment,t),w(ue.$$.fragment,t),w(Xe.$$.fragment,t),w(Ye.$$.fragment,t),w(me.$$.fragment,t),w(Qe.$$.fragment,t),w(Ze.$$.fragment,t),w(ot.$$.fragment,t),w(he.$$.fragment,t),w(_e.$$.fragment,t),w(rt.$$.fragment,t),w(ve.$$.fragment,t),w(Te.$$.fragment,t),w(nt.$$.fragment,t),w($e.$$.fragment,t),w(be.$$.fragment,t),w(st.$$.fragment,t),w(at.$$.fragment,t),w(it.$$.fragment,t),w(ye.$$.fragment,t),w(we.$$.fragment,t),w(lt.$$.fragment,t),w(pt.$$.fragment,t),w(dt.$$.fragment,t),w(Ge.$$.fragment,t),w(ke.$$.fragment,t),Ro=!1},d(t){o(p),t&&o(T),t&&o(u),x(r),t&&o(ko),t&&o(N),x(Oe),t&&o(Mo),t&&o(L),t&&o(Co),t&&o(_t),t&&o(jo),t&&o(vt),t&&o(Eo),t&&o(Tt),t&&o(Po),t&&o($t),t&&o(zo),t&&o(D),t&&o(qo),t&&o(W),x(We),t&&o(Io),t&&o(C),x(Fe),x(Be),t&&o(Ao),t&&o(B),x(Re),t&&o(Oo),t&&o(j),x(Ue),x(ue),t&&o(Lo),t&&o(U),x(Xe),t&&o(Do),t&&o(E),x(Ye),x(me),t&&o(So),t&&o(Y),x(Qe),t&&o(No),t&&o(M),x(Ze),x(ot),x(he),x(_e),x(rt),x(ve),x(Te),x(nt),x($e),x(be),t&&o(Wo),t&&o(ee),x(st),t&&o(Fo),t&&o(te),x(at),x(it),x(ye),x(we),t&&o(Bo),t&&o(re),x(lt),t&&o(Ho),t&&o(ne),x(pt),x(dt),x(Ge),x(ke)}}}const za={local:"groupvit",sections:[{local:"overview",title:"Overview"},{local:"transformers.GroupViTConfig",title:"GroupViTConfig"},{local:"transformers.GroupViTTextConfig",title:"GroupViTTextConfig"},{local:"transformers.GroupViTVisionConfig",title:"GroupViTVisionConfig"},{local:"transformers.GroupViTModel",title:"GroupViTModel"},{local:"transformers.GroupViTTextModel",title:"GroupViTTextModel"},{local:"transformers.GroupViTVisionModel",title:"GroupViTVisionModel"}],title:"GroupViT"};function qa(G){return Ta(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Na extends ga{constructor(p){super();ha(this,p,qa,Pa,_a,{})}}export{Na as default,za as metadata};
