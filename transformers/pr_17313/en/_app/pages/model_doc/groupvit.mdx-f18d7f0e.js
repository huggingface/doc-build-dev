import{S as ca,i as ua,s as fa,e as n,k as g,w as $,t as i,M as ma,c as s,d as o,m as h,a,x as b,h as l,b as f,G as e,g as v,y as V,q as y,o as w,B as x,v as ga,L as mt}from"../../chunks/vendor-316217a5.js";import{T as xo}from"../../chunks/Tip-27e9fea0.js";import{D as O}from"../../chunks/Docstring-1fe4a33a.js";import{C as gt}from"../../chunks/CodeBlock-8418a95e.js";import{I as Ie}from"../../chunks/IconCopyLink-40460835.js";import{E as ft}from"../../chunks/ExampleCodeBlock-32fc0037.js";function ha(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import GroupViTTextModel, GroupViTTextConfig

# Initializing a GroupViTTextModel with nvidia/groupvit-gccyfcc style configuration
configuration = GroupViTTextConfig()

# Initializing a GroupViTTextConfig from the nvidia/groupvit-gccyfcc style configuration
model = GroupViTTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTTextModel, GroupViTTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTTextModel with nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTTextConfig from the nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),T=i("Example:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Example:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function _a(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import GroupViTVisionModel, GroupViTVisionConfig

# Initializing a GroupViTVisionModel with nvidia/groupvit-gccyfcc style configuration
configuration = GroupViTVisionConfig()

# Initializing a GroupViTVisionModel model from the nvidia/groupvit-gccyfcc style configuration
model = GroupViTVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTVisionModel, GroupViTVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTVisionModel with nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTVisionModel model from the nvidia/groupvit-gccyfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),T=i("Example:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Example:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function va(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function Ta(G){let p,T,u,c,_;return c=new gt({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function $a(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function ba(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import CLIPTokenizer, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gccyfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gccyfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function Va(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
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

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function wa(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function xa(G){let p,T,u,c,_;return c=new gt({props:{code:`from transformers import CLIPTokenizer, GroupViTTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function Ga(G){let p,T,u,c,_;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(d,"CODE",{});var k=a(u);c=l(k,"Module"),k.forEach(o),_=l(d,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),d.forEach(o)},m(r,d){v(r,p,d),e(p,T),e(p,u),e(u,c),e(p,_)},d(r){r&&o(p)}}}function ka(G){let p,T,u,c,_;return c=new gt({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTVisionModel

model = GroupViTVisionModel.from_pretrained("nvidia/groupvit-gccyfcc")
processor = AutoPProcessor.from_pretrained("nvidia/groupvit-gccyfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoPProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gccyfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("p"),T=i("Examples:"),u=g(),$(c.$$.fragment)},l(r){p=s(r,"P",{});var d=a(p);T=l(d,"Examples:"),d.forEach(o),u=h(r),b(c.$$.fragment,r)},m(r,d){v(r,p,d),e(p,T),v(r,u,d),V(c,r,d),_=!0},p:mt,i(r){_||(y(c.$$.fragment,r),_=!0)},o(r){w(c.$$.fragment,r),_=!1},d(r){r&&o(p),r&&o(u),x(c,r)}}}function Ma(G){let p,T,u,c,_,r,d,k,nr,Go,S,se,Ut,Ae,sr,Jt,ar,ko,ae,ir,Oe,lr,pr,Mo,ht,dr,Co,_t,Xt,cr,jo,vt,ur,Eo,Tt,Le,fr,Yt,mr,gr,zo,L,hr,De,_r,vr,Se,Tr,$r,Po,N,ie,Kt,Ne,br,Qt,Vr,qo,C,Fe,yr,le,$t,wr,xr,bt,Gr,kr,Mr,F,Cr,Vt,jr,Er,yt,zr,Pr,qr,pe,We,Ir,Be,Ar,wt,Or,Lr,Io,W,de,Zt,He,Dr,eo,Sr,Ao,j,Re,Nr,B,Fr,xt,Wr,Br,Ue,Hr,Rr,Ur,H,Jr,Gt,Xr,Yr,kt,Kr,Qr,Zr,ce,Oo,R,ue,to,Je,en,oo,tn,Lo,E,Xe,on,U,rn,Mt,nn,sn,Ye,an,ln,pn,J,dn,Ct,cn,un,jt,fn,mn,gn,fe,Do,X,me,ro,Ke,hn,no,_n,So,M,Qe,vn,Ze,Tn,et,$n,bn,Vn,z,tt,yn,Y,wn,Et,xn,Gn,so,kn,Mn,Cn,ge,jn,he,En,P,ot,zn,K,Pn,zt,qn,In,ao,An,On,Ln,_e,Dn,ve,Sn,q,rt,Nn,Q,Fn,Pt,Wn,Bn,io,Hn,Rn,Un,Te,Jn,$e,No,Z,be,lo,nt,Xn,po,Yn,Fo,ee,st,Kn,I,at,Qn,te,Zn,qt,es,ts,co,os,rs,ns,Ve,ss,ye,Wo,oe,we,uo,it,as,fo,is,Bo,re,lt,ls,A,pt,ps,ne,ds,It,cs,us,mo,fs,ms,gs,xe,hs,Ge,Ho;return r=new Ie({}),Ae=new Ie({}),Ne=new Ie({}),Fe=new O({props:{name:"class transformers.GroupViTConfig",anchor:"transformers.GroupViTConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 256"},{name:"projection_intermediate_dim",val:" = 4096"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextConfig">GroupViTTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.GroupViTConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionConfig">GroupViTVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.GroupViTConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.GroupViTConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original GroupViT
implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.GroupViTConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L269"}}),We=new O({props:{name:"from_text_vision_configs",anchor:"transformers.GroupViTConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": GroupViTTextConfig"},{name:"vision_config",val:": GroupViTVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L323",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"
>GroupViTConfig</a></p>
`}}),He=new Ie({}),Re=new O({props:{name:"class transformers.GroupViTTextConfig",anchor:"transformers.GroupViTTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 256"},{name:"intermediate_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the GroupViT text model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel">GroupViTModel</a>.`,name:"vocab_size"},{anchor:"transformers.GroupViTTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GroupViTTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GroupViTTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.GroupViTTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L32"}}),ce=new ft({props:{anchor:"transformers.GroupViTTextConfig.example",$$slots:{default:[ha]},$$scope:{ctx:G}}}),Je=new Ie({}),Xe=new O({props:{name:"class transformers.GroupViTVisionConfig",anchor:"transformers.GroupViTVisionConfig",parameters:[{name:"hidden_size",val:" = 384"},{name:"intermediate_size",val:" = 1536"},{name:"depths",val:" = [6, 3, 3]"},{name:"num_hidden_layers",val:" = 12"},{name:"num_group_tokens",val:" = [64, 8, 0]"},{name:"num_output_groups",val:" = [64, 8, 8]"},{name:"num_attention_heads",val:" = 6"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"hidden_act",val:" = 'gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"assign_eps",val:" = 1.0"},{name:"assign_mlp_ratio",val:" = [0.5, 4]"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTVisionConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [6, 3, 3]) &#x2014;
The number of layers in each encoder block.`,name:"depths"},{anchor:"transformers.GroupViTVisionConfig.num_group_tokens",description:`<strong>num_group_tokens</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 0]) &#x2014;
The number of group tokens for each stage.`,name:"num_group_tokens"},{anchor:"transformers.GroupViTVisionConfig.num_output_group",description:`<strong>num_output_group</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 0]) &#x2014;
The number of output groups for each stage, 0 means no group.`,name:"num_output_group"},{anchor:"transformers.GroupViTVisionConfig.num_group_tokens",description:"<strong>num_group_tokens</strong> (list[int]) &#x2014; Number of group tokens for each stage.",name:"num_group_tokens"},{anchor:"transformers.GroupViTVisionConfig.num_output_group",description:"<strong>num_output_group</strong> (list[int]) &#x2014; Number of output groups for each stage, 0 means no group.",name:"num_output_group"},{anchor:"transformers.GroupViTVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.GroupViTVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.GroupViTVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.GroupViTVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/configuration_groupvit.py#L140"}}),fe=new ft({props:{anchor:"transformers.GroupViTVisionConfig.example",$$slots:{default:[_a]},$$scope:{ctx:G}}}),Ke=new Ie({}),Qe=new O({props:{name:"class transformers.GroupViTModel",anchor:"transformers.GroupViTModel",parameters:[{name:"config",val:": GroupViTConfig"}],parametersDescription:[{anchor:"transformers.GroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1581"}}),tt=new O({props:{name:"forward",anchor:"transformers.GroupViTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1723",returnDescription:`
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
`}}),ge=new xo({props:{$$slots:{default:[va]},$$scope:{ctx:G}}}),he=new ft({props:{anchor:"transformers.GroupViTModel.forward.example",$$slots:{default:[Ta]},$$scope:{ctx:G}}}),ot=new O({props:{name:"get_text_features",anchor:"transformers.GroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1627",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),_e=new xo({props:{$$slots:{default:[$a]},$$scope:{ctx:G}}}),ve=new ft({props:{anchor:"transformers.GroupViTModel.get_text_features.example",$$slots:{default:[ba]},$$scope:{ctx:G}}}),rt=new O({props:{name:"get_image_features",anchor:"transformers.GroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1674",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Te=new xo({props:{$$slots:{default:[Va]},$$scope:{ctx:G}}}),$e=new ft({props:{anchor:"transformers.GroupViTModel.get_image_features.example",$$slots:{default:[ya]},$$scope:{ctx:G}}}),nt=new Ie({}),st=new O({props:{name:"class transformers.GroupViTTextModel",anchor:"transformers.GroupViTTextModel",parameters:[{name:"config",val:": GroupViTTextConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1417"}}),at=new O({props:{name:"forward",anchor:"transformers.GroupViTTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1432",returnDescription:`
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
`}}),Ve=new xo({props:{$$slots:{default:[wa]},$$scope:{ctx:G}}}),ye=new ft({props:{anchor:"transformers.GroupViTTextModel.forward.example",$$slots:{default:[xa]},$$scope:{ctx:G}}}),it=new Ie({}),lt=new O({props:{name:"class transformers.GroupViTVisionModel",anchor:"transformers.GroupViTVisionModel",parameters:[{name:"config",val:": GroupViTVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1528"}}),pt=new O({props:{name:"forward",anchor:"transformers.GroupViTVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/groupvit/modeling_groupvit.py#L1541",returnDescription:`
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
`}}),xe=new xo({props:{$$slots:{default:[Ga]},$$scope:{ctx:G}}}),Ge=new ft({props:{anchor:"transformers.GroupViTVisionModel.forward.example",$$slots:{default:[ka]},$$scope:{ctx:G}}}),{c(){p=n("meta"),T=g(),u=n("h1"),c=n("a"),_=n("span"),$(r.$$.fragment),d=g(),k=n("span"),nr=i("GroupViT"),Go=g(),S=n("h2"),se=n("a"),Ut=n("span"),$(Ae.$$.fragment),sr=g(),Jt=n("span"),ar=i("Overview"),ko=g(),ae=n("p"),ir=i("The GroupViT model was proposed in "),Oe=n("a"),lr=i("GroupViT: Semantic Segmentation Emerges from Text Supervision"),pr=i(` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
GroupViT is a vision-language model that could perform zero-shot semantic segmentation on any given vocabulary categories.`),Mo=g(),ht=n("p"),dr=i("The abstract from the paper is the following:"),Co=g(),_t=n("p"),Xt=n("em"),cr=i("Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),jo=g(),vt=n("p"),ur=i("Tips:"),Eo=g(),Tt=n("ul"),Le=n("li"),fr=i("You may specify "),Yt=n("code"),mr=i("output_segmentation=True"),gr=i(" to get the segmentation logits of input texts."),zo=g(),L=n("p"),hr=i("This model was contributed by "),De=n("a"),_r=i("xvjiarui"),vr=i(`.
The original code can be found `),Se=n("a"),Tr=i("here"),$r=i("."),Po=g(),N=n("h2"),ie=n("a"),Kt=n("span"),$(Ne.$$.fragment),br=g(),Qt=n("span"),Vr=i("GroupViTConfig"),qo=g(),C=n("div"),$(Fe.$$.fragment),yr=g(),le=n("p"),$t=n("a"),wr=i("GroupViTConfig"),xr=i(" is the configuration class to store the configuration of a "),bt=n("a"),Gr=i("GroupViTModel"),kr=i(`. It is used to
instantiate GroupViT model according to the specified arguments, defining the text model and vision model configs.`),Mr=g(),F=n("p"),Cr=i("Configuration objects inherit from "),Vt=n("a"),jr=i("PretrainedConfig"),Er=i(` and can be used to control the model outputs. Read the
documentation from `),yt=n("a"),zr=i("PretrainedConfig"),Pr=i(" for more information."),qr=g(),pe=n("div"),$(We.$$.fragment),Ir=g(),Be=n("p"),Ar=i("Instantiate a "),wt=n("a"),Or=i("GroupViTConfig"),Lr=i(` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),Io=g(),W=n("h2"),de=n("a"),Zt=n("span"),$(He.$$.fragment),Dr=g(),eo=n("span"),Sr=i("GroupViTTextConfig"),Ao=g(),j=n("div"),$(Re.$$.fragment),Nr=g(),B=n("p"),Fr=i("This is the configuration class to store the configuration of a "),xt=n("a"),Wr=i("GroupViTModel"),Br=i(`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Ue=n("a"),Hr=i("nvidia/groupvit-gccyfcc"),Rr=i(" architecture."),Ur=g(),H=n("p"),Jr=i("Configuration objects inherit from "),Gt=n("a"),Xr=i("PretrainedConfig"),Yr=i(` and can be used to control the model outputs. Read the
documentation from `),kt=n("a"),Kr=i("PretrainedConfig"),Qr=i(" for more information."),Zr=g(),$(ce.$$.fragment),Oo=g(),R=n("h2"),ue=n("a"),to=n("span"),$(Je.$$.fragment),en=g(),oo=n("span"),tn=i("GroupViTVisionConfig"),Lo=g(),E=n("div"),$(Xe.$$.fragment),on=g(),U=n("p"),rn=i("This is the configuration class to store the configuration of a "),Mt=n("a"),nn=i("GroupViTModel"),sn=i(`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Ye=n("a"),an=i("nvidia/groupvit-gccyfcc"),ln=i(" architecture."),pn=g(),J=n("p"),dn=i("Configuration objects inherit from "),Ct=n("a"),cn=i("PretrainedConfig"),un=i(` and can be used to control the model outputs. Read the
documentation from `),jt=n("a"),fn=i("PretrainedConfig"),mn=i(" for more information."),gn=g(),$(fe.$$.fragment),Do=g(),X=n("h2"),me=n("a"),ro=n("span"),$(Ke.$$.fragment),hn=g(),no=n("span"),_n=i("GroupViTModel"),So=g(),M=n("div"),$(Qe.$$.fragment),vn=g(),Ze=n("p"),Tn=i("This model is a PyTorch "),et=n("a"),$n=i("torch.nn.Module"),bn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vn=g(),z=n("div"),$(tt.$$.fragment),yn=g(),Y=n("p"),wn=i("The "),Et=n("a"),xn=i("GroupViTModel"),Gn=i(" forward method, overrides the "),so=n("code"),kn=i("__call__"),Mn=i(" special method."),Cn=g(),$(ge.$$.fragment),jn=g(),$(he.$$.fragment),En=g(),P=n("div"),$(ot.$$.fragment),zn=g(),K=n("p"),Pn=i("The "),zt=n("a"),qn=i("GroupViTModel"),In=i(" forward method, overrides the "),ao=n("code"),An=i("__call__"),On=i(" special method."),Ln=g(),$(_e.$$.fragment),Dn=g(),$(ve.$$.fragment),Sn=g(),q=n("div"),$(rt.$$.fragment),Nn=g(),Q=n("p"),Fn=i("The "),Pt=n("a"),Wn=i("GroupViTModel"),Bn=i(" forward method, overrides the "),io=n("code"),Hn=i("__call__"),Rn=i(" special method."),Un=g(),$(Te.$$.fragment),Jn=g(),$($e.$$.fragment),No=g(),Z=n("h2"),be=n("a"),lo=n("span"),$(nt.$$.fragment),Xn=g(),po=n("span"),Yn=i("GroupViTTextModel"),Fo=g(),ee=n("div"),$(st.$$.fragment),Kn=g(),I=n("div"),$(at.$$.fragment),Qn=g(),te=n("p"),Zn=i("The "),qt=n("a"),es=i("GroupViTTextModel"),ts=i(" forward method, overrides the "),co=n("code"),os=i("__call__"),rs=i(" special method."),ns=g(),$(Ve.$$.fragment),ss=g(),$(ye.$$.fragment),Wo=g(),oe=n("h2"),we=n("a"),uo=n("span"),$(it.$$.fragment),as=g(),fo=n("span"),is=i("GroupViTVisionModel"),Bo=g(),re=n("div"),$(lt.$$.fragment),ls=g(),A=n("div"),$(pt.$$.fragment),ps=g(),ne=n("p"),ds=i("The "),It=n("a"),cs=i("GroupViTVisionModel"),us=i(" forward method, overrides the "),mo=n("code"),fs=i("__call__"),ms=i(" special method."),gs=g(),$(xe.$$.fragment),hs=g(),$(Ge.$$.fragment),this.h()},l(t){const m=ma('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),T=h(t),u=s(t,"H1",{class:!0});var dt=a(u);c=s(dt,"A",{id:!0,class:!0,href:!0});var go=a(c);_=s(go,"SPAN",{});var ho=a(_);b(r.$$.fragment,ho),ho.forEach(o),go.forEach(o),d=h(dt),k=s(dt,"SPAN",{});var _o=a(k);nr=l(_o,"GroupViT"),_o.forEach(o),dt.forEach(o),Go=h(t),S=s(t,"H2",{class:!0});var ct=a(S);se=s(ct,"A",{id:!0,class:!0,href:!0});var vo=a(se);Ut=s(vo,"SPAN",{});var To=a(Ut);b(Ae.$$.fragment,To),To.forEach(o),vo.forEach(o),sr=h(ct),Jt=s(ct,"SPAN",{});var $o=a(Jt);ar=l($o,"Overview"),$o.forEach(o),ct.forEach(o),ko=h(t),ae=s(t,"P",{});var ut=a(ae);ir=l(ut,"The GroupViT model was proposed in "),Oe=s(ut,"A",{href:!0,rel:!0});var bo=a(Oe);lr=l(bo,"GroupViT: Semantic Segmentation Emerges from Text Supervision"),bo.forEach(o),pr=l(ut,` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
GroupViT is a vision-language model that could perform zero-shot semantic segmentation on any given vocabulary categories.`),ut.forEach(o),Mo=h(t),ht=s(t,"P",{});var Vo=a(ht);dr=l(Vo,"The abstract from the paper is the following:"),Vo.forEach(o),Co=h(t),_t=s(t,"P",{});var yo=a(_t);Xt=s(yo,"EM",{});var _s=a(Xt);cr=l(_s,"Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),_s.forEach(o),yo.forEach(o),jo=h(t),vt=s(t,"P",{});var vs=a(vt);ur=l(vs,"Tips:"),vs.forEach(o),Eo=h(t),Tt=s(t,"UL",{});var Ts=a(Tt);Le=s(Ts,"LI",{});var Ro=a(Le);fr=l(Ro,"You may specify "),Yt=s(Ro,"CODE",{});var $s=a(Yt);mr=l($s,"output_segmentation=True"),$s.forEach(o),gr=l(Ro," to get the segmentation logits of input texts."),Ro.forEach(o),Ts.forEach(o),zo=h(t),L=s(t,"P",{});var At=a(L);hr=l(At,"This model was contributed by "),De=s(At,"A",{href:!0,rel:!0});var bs=a(De);_r=l(bs,"xvjiarui"),bs.forEach(o),vr=l(At,`.
The original code can be found `),Se=s(At,"A",{href:!0,rel:!0});var Vs=a(Se);Tr=l(Vs,"here"),Vs.forEach(o),$r=l(At,"."),At.forEach(o),Po=h(t),N=s(t,"H2",{class:!0});var Uo=a(N);ie=s(Uo,"A",{id:!0,class:!0,href:!0});var ys=a(ie);Kt=s(ys,"SPAN",{});var ws=a(Kt);b(Ne.$$.fragment,ws),ws.forEach(o),ys.forEach(o),br=h(Uo),Qt=s(Uo,"SPAN",{});var xs=a(Qt);Vr=l(xs,"GroupViTConfig"),xs.forEach(o),Uo.forEach(o),qo=h(t),C=s(t,"DIV",{class:!0});var ke=a(C);b(Fe.$$.fragment,ke),yr=h(ke),le=s(ke,"P",{});var wo=a(le);$t=s(wo,"A",{href:!0});var Gs=a($t);wr=l(Gs,"GroupViTConfig"),Gs.forEach(o),xr=l(wo," is the configuration class to store the configuration of a "),bt=s(wo,"A",{href:!0});var ks=a(bt);Gr=l(ks,"GroupViTModel"),ks.forEach(o),kr=l(wo,`. It is used to
instantiate GroupViT model according to the specified arguments, defining the text model and vision model configs.`),wo.forEach(o),Mr=h(ke),F=s(ke,"P",{});var Ot=a(F);Cr=l(Ot,"Configuration objects inherit from "),Vt=s(Ot,"A",{href:!0});var Ms=a(Vt);jr=l(Ms,"PretrainedConfig"),Ms.forEach(o),Er=l(Ot,` and can be used to control the model outputs. Read the
documentation from `),yt=s(Ot,"A",{href:!0});var Cs=a(yt);zr=l(Cs,"PretrainedConfig"),Cs.forEach(o),Pr=l(Ot," for more information."),Ot.forEach(o),qr=h(ke),pe=s(ke,"DIV",{class:!0});var Jo=a(pe);b(We.$$.fragment,Jo),Ir=h(Jo),Be=s(Jo,"P",{});var Xo=a(Be);Ar=l(Xo,"Instantiate a "),wt=s(Xo,"A",{href:!0});var js=a(wt);Or=l(js,"GroupViTConfig"),js.forEach(o),Lr=l(Xo,` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),Xo.forEach(o),Jo.forEach(o),ke.forEach(o),Io=h(t),W=s(t,"H2",{class:!0});var Yo=a(W);de=s(Yo,"A",{id:!0,class:!0,href:!0});var Es=a(de);Zt=s(Es,"SPAN",{});var zs=a(Zt);b(He.$$.fragment,zs),zs.forEach(o),Es.forEach(o),Dr=h(Yo),eo=s(Yo,"SPAN",{});var Ps=a(eo);Sr=l(Ps,"GroupViTTextConfig"),Ps.forEach(o),Yo.forEach(o),Ao=h(t),j=s(t,"DIV",{class:!0});var Me=a(j);b(Re.$$.fragment,Me),Nr=h(Me),B=s(Me,"P",{});var Lt=a(B);Fr=l(Lt,"This is the configuration class to store the configuration of a "),xt=s(Lt,"A",{href:!0});var qs=a(xt);Wr=l(qs,"GroupViTModel"),qs.forEach(o),Br=l(Lt,`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Ue=s(Lt,"A",{href:!0,rel:!0});var Is=a(Ue);Hr=l(Is,"nvidia/groupvit-gccyfcc"),Is.forEach(o),Rr=l(Lt," architecture."),Lt.forEach(o),Ur=h(Me),H=s(Me,"P",{});var Dt=a(H);Jr=l(Dt,"Configuration objects inherit from "),Gt=s(Dt,"A",{href:!0});var As=a(Gt);Xr=l(As,"PretrainedConfig"),As.forEach(o),Yr=l(Dt,` and can be used to control the model outputs. Read the
documentation from `),kt=s(Dt,"A",{href:!0});var Os=a(kt);Kr=l(Os,"PretrainedConfig"),Os.forEach(o),Qr=l(Dt," for more information."),Dt.forEach(o),Zr=h(Me),b(ce.$$.fragment,Me),Me.forEach(o),Oo=h(t),R=s(t,"H2",{class:!0});var Ko=a(R);ue=s(Ko,"A",{id:!0,class:!0,href:!0});var Ls=a(ue);to=s(Ls,"SPAN",{});var Ds=a(to);b(Je.$$.fragment,Ds),Ds.forEach(o),Ls.forEach(o),en=h(Ko),oo=s(Ko,"SPAN",{});var Ss=a(oo);tn=l(Ss,"GroupViTVisionConfig"),Ss.forEach(o),Ko.forEach(o),Lo=h(t),E=s(t,"DIV",{class:!0});var Ce=a(E);b(Xe.$$.fragment,Ce),on=h(Ce),U=s(Ce,"P",{});var St=a(U);rn=l(St,"This is the configuration class to store the configuration of a "),Mt=s(St,"A",{href:!0});var Ns=a(Mt);nn=l(Ns,"GroupViTModel"),Ns.forEach(o),sn=l(St,`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Ye=s(St,"A",{href:!0,rel:!0});var Fs=a(Ye);an=l(Fs,"nvidia/groupvit-gccyfcc"),Fs.forEach(o),ln=l(St," architecture."),St.forEach(o),pn=h(Ce),J=s(Ce,"P",{});var Nt=a(J);dn=l(Nt,"Configuration objects inherit from "),Ct=s(Nt,"A",{href:!0});var Ws=a(Ct);cn=l(Ws,"PretrainedConfig"),Ws.forEach(o),un=l(Nt,` and can be used to control the model outputs. Read the
documentation from `),jt=s(Nt,"A",{href:!0});var Bs=a(jt);fn=l(Bs,"PretrainedConfig"),Bs.forEach(o),mn=l(Nt," for more information."),Nt.forEach(o),gn=h(Ce),b(fe.$$.fragment,Ce),Ce.forEach(o),Do=h(t),X=s(t,"H2",{class:!0});var Qo=a(X);me=s(Qo,"A",{id:!0,class:!0,href:!0});var Hs=a(me);ro=s(Hs,"SPAN",{});var Rs=a(ro);b(Ke.$$.fragment,Rs),Rs.forEach(o),Hs.forEach(o),hn=h(Qo),no=s(Qo,"SPAN",{});var Us=a(no);_n=l(Us,"GroupViTModel"),Us.forEach(o),Qo.forEach(o),So=h(t),M=s(t,"DIV",{class:!0});var D=a(M);b(Qe.$$.fragment,D),vn=h(D),Ze=s(D,"P",{});var Zo=a(Ze);Tn=l(Zo,"This model is a PyTorch "),et=s(Zo,"A",{href:!0,rel:!0});var Js=a(et);$n=l(Js,"torch.nn.Module"),Js.forEach(o),bn=l(Zo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zo.forEach(o),Vn=h(D),z=s(D,"DIV",{class:!0});var je=a(z);b(tt.$$.fragment,je),yn=h(je),Y=s(je,"P",{});var Ft=a(Y);wn=l(Ft,"The "),Et=s(Ft,"A",{href:!0});var Xs=a(Et);xn=l(Xs,"GroupViTModel"),Xs.forEach(o),Gn=l(Ft," forward method, overrides the "),so=s(Ft,"CODE",{});var Ys=a(so);kn=l(Ys,"__call__"),Ys.forEach(o),Mn=l(Ft," special method."),Ft.forEach(o),Cn=h(je),b(ge.$$.fragment,je),jn=h(je),b(he.$$.fragment,je),je.forEach(o),En=h(D),P=s(D,"DIV",{class:!0});var Ee=a(P);b(ot.$$.fragment,Ee),zn=h(Ee),K=s(Ee,"P",{});var Wt=a(K);Pn=l(Wt,"The "),zt=s(Wt,"A",{href:!0});var Ks=a(zt);qn=l(Ks,"GroupViTModel"),Ks.forEach(o),In=l(Wt," forward method, overrides the "),ao=s(Wt,"CODE",{});var Qs=a(ao);An=l(Qs,"__call__"),Qs.forEach(o),On=l(Wt," special method."),Wt.forEach(o),Ln=h(Ee),b(_e.$$.fragment,Ee),Dn=h(Ee),b(ve.$$.fragment,Ee),Ee.forEach(o),Sn=h(D),q=s(D,"DIV",{class:!0});var ze=a(q);b(rt.$$.fragment,ze),Nn=h(ze),Q=s(ze,"P",{});var Bt=a(Q);Fn=l(Bt,"The "),Pt=s(Bt,"A",{href:!0});var Zs=a(Pt);Wn=l(Zs,"GroupViTModel"),Zs.forEach(o),Bn=l(Bt," forward method, overrides the "),io=s(Bt,"CODE",{});var ea=a(io);Hn=l(ea,"__call__"),ea.forEach(o),Rn=l(Bt," special method."),Bt.forEach(o),Un=h(ze),b(Te.$$.fragment,ze),Jn=h(ze),b($e.$$.fragment,ze),ze.forEach(o),D.forEach(o),No=h(t),Z=s(t,"H2",{class:!0});var er=a(Z);be=s(er,"A",{id:!0,class:!0,href:!0});var ta=a(be);lo=s(ta,"SPAN",{});var oa=a(lo);b(nt.$$.fragment,oa),oa.forEach(o),ta.forEach(o),Xn=h(er),po=s(er,"SPAN",{});var ra=a(po);Yn=l(ra,"GroupViTTextModel"),ra.forEach(o),er.forEach(o),Fo=h(t),ee=s(t,"DIV",{class:!0});var tr=a(ee);b(st.$$.fragment,tr),Kn=h(tr),I=s(tr,"DIV",{class:!0});var Pe=a(I);b(at.$$.fragment,Pe),Qn=h(Pe),te=s(Pe,"P",{});var Ht=a(te);Zn=l(Ht,"The "),qt=s(Ht,"A",{href:!0});var na=a(qt);es=l(na,"GroupViTTextModel"),na.forEach(o),ts=l(Ht," forward method, overrides the "),co=s(Ht,"CODE",{});var sa=a(co);os=l(sa,"__call__"),sa.forEach(o),rs=l(Ht," special method."),Ht.forEach(o),ns=h(Pe),b(Ve.$$.fragment,Pe),ss=h(Pe),b(ye.$$.fragment,Pe),Pe.forEach(o),tr.forEach(o),Wo=h(t),oe=s(t,"H2",{class:!0});var or=a(oe);we=s(or,"A",{id:!0,class:!0,href:!0});var aa=a(we);uo=s(aa,"SPAN",{});var ia=a(uo);b(it.$$.fragment,ia),ia.forEach(o),aa.forEach(o),as=h(or),fo=s(or,"SPAN",{});var la=a(fo);is=l(la,"GroupViTVisionModel"),la.forEach(o),or.forEach(o),Bo=h(t),re=s(t,"DIV",{class:!0});var rr=a(re);b(lt.$$.fragment,rr),ls=h(rr),A=s(rr,"DIV",{class:!0});var qe=a(A);b(pt.$$.fragment,qe),ps=h(qe),ne=s(qe,"P",{});var Rt=a(ne);ds=l(Rt,"The "),It=s(Rt,"A",{href:!0});var pa=a(It);cs=l(pa,"GroupViTVisionModel"),pa.forEach(o),us=l(Rt," forward method, overrides the "),mo=s(Rt,"CODE",{});var da=a(mo);fs=l(da,"__call__"),da.forEach(o),ms=l(Rt," special method."),Rt.forEach(o),gs=h(qe),b(xe.$$.fragment,qe),hs=h(qe),b(Ge.$$.fragment,qe),qe.forEach(o),rr.forEach(o),this.h()},h(){f(p,"name","hf:doc:metadata"),f(p,"content",JSON.stringify(Ca)),f(c,"id","groupvit"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#groupvit"),f(u,"class","relative group"),f(se,"id","overview"),f(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(se,"href","#overview"),f(S,"class","relative group"),f(Oe,"href","https://arxiv.org/abs/2202.11094"),f(Oe,"rel","nofollow"),f(De,"href","https://huggingface.co/xvjiarui"),f(De,"rel","nofollow"),f(Se,"href","https://github.com/NVlabs/GroupViT"),f(Se,"rel","nofollow"),f(ie,"id","transformers.GroupViTConfig"),f(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ie,"href","#transformers.GroupViTConfig"),f(N,"class","relative group"),f($t,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"),f(bt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(Vt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(yt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(wt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTConfig"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(de,"id","transformers.GroupViTTextConfig"),f(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(de,"href","#transformers.GroupViTTextConfig"),f(W,"class","relative group"),f(xt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(Ue,"href","https://huggingface.co/nvidia/groupvit-gccyfcc"),f(Ue,"rel","nofollow"),f(Gt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(kt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ue,"id","transformers.GroupViTVisionConfig"),f(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ue,"href","#transformers.GroupViTVisionConfig"),f(R,"class","relative group"),f(Mt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(Ye,"href","https://huggingface.co/nvidia/groupvit-gccyfcc"),f(Ye,"rel","nofollow"),f(Ct,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(jt,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(me,"id","transformers.GroupViTModel"),f(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(me,"href","#transformers.GroupViTModel"),f(X,"class","relative group"),f(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(et,"rel","nofollow"),f(Et,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTModel"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(be,"id","transformers.GroupViTTextModel"),f(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(be,"href","#transformers.GroupViTTextModel"),f(Z,"class","relative group"),f(qt,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTTextModel"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"id","transformers.GroupViTVisionModel"),f(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(we,"href","#transformers.GroupViTVisionModel"),f(oe,"class","relative group"),f(It,"href","/docs/transformers/pr_17313/en/model_doc/groupvit#transformers.GroupViTVisionModel"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,p),v(t,T,m),v(t,u,m),e(u,c),e(c,_),V(r,_,null),e(u,d),e(u,k),e(k,nr),v(t,Go,m),v(t,S,m),e(S,se),e(se,Ut),V(Ae,Ut,null),e(S,sr),e(S,Jt),e(Jt,ar),v(t,ko,m),v(t,ae,m),e(ae,ir),e(ae,Oe),e(Oe,lr),e(ae,pr),v(t,Mo,m),v(t,ht,m),e(ht,dr),v(t,Co,m),v(t,_t,m),e(_t,Xt),e(Xt,cr),v(t,jo,m),v(t,vt,m),e(vt,ur),v(t,Eo,m),v(t,Tt,m),e(Tt,Le),e(Le,fr),e(Le,Yt),e(Yt,mr),e(Le,gr),v(t,zo,m),v(t,L,m),e(L,hr),e(L,De),e(De,_r),e(L,vr),e(L,Se),e(Se,Tr),e(L,$r),v(t,Po,m),v(t,N,m),e(N,ie),e(ie,Kt),V(Ne,Kt,null),e(N,br),e(N,Qt),e(Qt,Vr),v(t,qo,m),v(t,C,m),V(Fe,C,null),e(C,yr),e(C,le),e(le,$t),e($t,wr),e(le,xr),e(le,bt),e(bt,Gr),e(le,kr),e(C,Mr),e(C,F),e(F,Cr),e(F,Vt),e(Vt,jr),e(F,Er),e(F,yt),e(yt,zr),e(F,Pr),e(C,qr),e(C,pe),V(We,pe,null),e(pe,Ir),e(pe,Be),e(Be,Ar),e(Be,wt),e(wt,Or),e(Be,Lr),v(t,Io,m),v(t,W,m),e(W,de),e(de,Zt),V(He,Zt,null),e(W,Dr),e(W,eo),e(eo,Sr),v(t,Ao,m),v(t,j,m),V(Re,j,null),e(j,Nr),e(j,B),e(B,Fr),e(B,xt),e(xt,Wr),e(B,Br),e(B,Ue),e(Ue,Hr),e(B,Rr),e(j,Ur),e(j,H),e(H,Jr),e(H,Gt),e(Gt,Xr),e(H,Yr),e(H,kt),e(kt,Kr),e(H,Qr),e(j,Zr),V(ce,j,null),v(t,Oo,m),v(t,R,m),e(R,ue),e(ue,to),V(Je,to,null),e(R,en),e(R,oo),e(oo,tn),v(t,Lo,m),v(t,E,m),V(Xe,E,null),e(E,on),e(E,U),e(U,rn),e(U,Mt),e(Mt,nn),e(U,sn),e(U,Ye),e(Ye,an),e(U,ln),e(E,pn),e(E,J),e(J,dn),e(J,Ct),e(Ct,cn),e(J,un),e(J,jt),e(jt,fn),e(J,mn),e(E,gn),V(fe,E,null),v(t,Do,m),v(t,X,m),e(X,me),e(me,ro),V(Ke,ro,null),e(X,hn),e(X,no),e(no,_n),v(t,So,m),v(t,M,m),V(Qe,M,null),e(M,vn),e(M,Ze),e(Ze,Tn),e(Ze,et),e(et,$n),e(Ze,bn),e(M,Vn),e(M,z),V(tt,z,null),e(z,yn),e(z,Y),e(Y,wn),e(Y,Et),e(Et,xn),e(Y,Gn),e(Y,so),e(so,kn),e(Y,Mn),e(z,Cn),V(ge,z,null),e(z,jn),V(he,z,null),e(M,En),e(M,P),V(ot,P,null),e(P,zn),e(P,K),e(K,Pn),e(K,zt),e(zt,qn),e(K,In),e(K,ao),e(ao,An),e(K,On),e(P,Ln),V(_e,P,null),e(P,Dn),V(ve,P,null),e(M,Sn),e(M,q),V(rt,q,null),e(q,Nn),e(q,Q),e(Q,Fn),e(Q,Pt),e(Pt,Wn),e(Q,Bn),e(Q,io),e(io,Hn),e(Q,Rn),e(q,Un),V(Te,q,null),e(q,Jn),V($e,q,null),v(t,No,m),v(t,Z,m),e(Z,be),e(be,lo),V(nt,lo,null),e(Z,Xn),e(Z,po),e(po,Yn),v(t,Fo,m),v(t,ee,m),V(st,ee,null),e(ee,Kn),e(ee,I),V(at,I,null),e(I,Qn),e(I,te),e(te,Zn),e(te,qt),e(qt,es),e(te,ts),e(te,co),e(co,os),e(te,rs),e(I,ns),V(Ve,I,null),e(I,ss),V(ye,I,null),v(t,Wo,m),v(t,oe,m),e(oe,we),e(we,uo),V(it,uo,null),e(oe,as),e(oe,fo),e(fo,is),v(t,Bo,m),v(t,re,m),V(lt,re,null),e(re,ls),e(re,A),V(pt,A,null),e(A,ps),e(A,ne),e(ne,ds),e(ne,It),e(It,cs),e(ne,us),e(ne,mo),e(mo,fs),e(ne,ms),e(A,gs),V(xe,A,null),e(A,hs),V(Ge,A,null),Ho=!0},p(t,[m]){const dt={};m&2&&(dt.$$scope={dirty:m,ctx:t}),ce.$set(dt);const go={};m&2&&(go.$$scope={dirty:m,ctx:t}),fe.$set(go);const ho={};m&2&&(ho.$$scope={dirty:m,ctx:t}),ge.$set(ho);const _o={};m&2&&(_o.$$scope={dirty:m,ctx:t}),he.$set(_o);const ct={};m&2&&(ct.$$scope={dirty:m,ctx:t}),_e.$set(ct);const vo={};m&2&&(vo.$$scope={dirty:m,ctx:t}),ve.$set(vo);const To={};m&2&&(To.$$scope={dirty:m,ctx:t}),Te.$set(To);const $o={};m&2&&($o.$$scope={dirty:m,ctx:t}),$e.$set($o);const ut={};m&2&&(ut.$$scope={dirty:m,ctx:t}),Ve.$set(ut);const bo={};m&2&&(bo.$$scope={dirty:m,ctx:t}),ye.$set(bo);const Vo={};m&2&&(Vo.$$scope={dirty:m,ctx:t}),xe.$set(Vo);const yo={};m&2&&(yo.$$scope={dirty:m,ctx:t}),Ge.$set(yo)},i(t){Ho||(y(r.$$.fragment,t),y(Ae.$$.fragment,t),y(Ne.$$.fragment,t),y(Fe.$$.fragment,t),y(We.$$.fragment,t),y(He.$$.fragment,t),y(Re.$$.fragment,t),y(ce.$$.fragment,t),y(Je.$$.fragment,t),y(Xe.$$.fragment,t),y(fe.$$.fragment,t),y(Ke.$$.fragment,t),y(Qe.$$.fragment,t),y(tt.$$.fragment,t),y(ge.$$.fragment,t),y(he.$$.fragment,t),y(ot.$$.fragment,t),y(_e.$$.fragment,t),y(ve.$$.fragment,t),y(rt.$$.fragment,t),y(Te.$$.fragment,t),y($e.$$.fragment,t),y(nt.$$.fragment,t),y(st.$$.fragment,t),y(at.$$.fragment,t),y(Ve.$$.fragment,t),y(ye.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),y(pt.$$.fragment,t),y(xe.$$.fragment,t),y(Ge.$$.fragment,t),Ho=!0)},o(t){w(r.$$.fragment,t),w(Ae.$$.fragment,t),w(Ne.$$.fragment,t),w(Fe.$$.fragment,t),w(We.$$.fragment,t),w(He.$$.fragment,t),w(Re.$$.fragment,t),w(ce.$$.fragment,t),w(Je.$$.fragment,t),w(Xe.$$.fragment,t),w(fe.$$.fragment,t),w(Ke.$$.fragment,t),w(Qe.$$.fragment,t),w(tt.$$.fragment,t),w(ge.$$.fragment,t),w(he.$$.fragment,t),w(ot.$$.fragment,t),w(_e.$$.fragment,t),w(ve.$$.fragment,t),w(rt.$$.fragment,t),w(Te.$$.fragment,t),w($e.$$.fragment,t),w(nt.$$.fragment,t),w(st.$$.fragment,t),w(at.$$.fragment,t),w(Ve.$$.fragment,t),w(ye.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(pt.$$.fragment,t),w(xe.$$.fragment,t),w(Ge.$$.fragment,t),Ho=!1},d(t){o(p),t&&o(T),t&&o(u),x(r),t&&o(Go),t&&o(S),x(Ae),t&&o(ko),t&&o(ae),t&&o(Mo),t&&o(ht),t&&o(Co),t&&o(_t),t&&o(jo),t&&o(vt),t&&o(Eo),t&&o(Tt),t&&o(zo),t&&o(L),t&&o(Po),t&&o(N),x(Ne),t&&o(qo),t&&o(C),x(Fe),x(We),t&&o(Io),t&&o(W),x(He),t&&o(Ao),t&&o(j),x(Re),x(ce),t&&o(Oo),t&&o(R),x(Je),t&&o(Lo),t&&o(E),x(Xe),x(fe),t&&o(Do),t&&o(X),x(Ke),t&&o(So),t&&o(M),x(Qe),x(tt),x(ge),x(he),x(ot),x(_e),x(ve),x(rt),x(Te),x($e),t&&o(No),t&&o(Z),x(nt),t&&o(Fo),t&&o(ee),x(st),x(at),x(Ve),x(ye),t&&o(Wo),t&&o(oe),x(it),t&&o(Bo),t&&o(re),x(lt),x(pt),x(xe),x(Ge)}}}const Ca={local:"groupvit",sections:[{local:"overview",title:"Overview"},{local:"transformers.GroupViTConfig",title:"GroupViTConfig"},{local:"transformers.GroupViTTextConfig",title:"GroupViTTextConfig"},{local:"transformers.GroupViTVisionConfig",title:"GroupViTVisionConfig"},{local:"transformers.GroupViTModel",title:"GroupViTModel"},{local:"transformers.GroupViTTextModel",title:"GroupViTTextModel"},{local:"transformers.GroupViTVisionModel",title:"GroupViTVisionModel"}],title:"GroupViT"};function ja(G){return ga(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oa extends ca{constructor(p){super();ua(this,p,ja,Ma,fa,{})}}export{Oa as default,Ca as metadata};
