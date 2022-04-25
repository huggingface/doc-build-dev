import{S as Xn,i as Zn,s as Qn,e as a,k as f,w as v,t as n,M as Yn,c as r,d as o,m as g,a as s,x as w,h as i,b as c,F as e,g as _,y as $,q as y,o as D,B as k,v as ei,L as Co}from"../../chunks/vendor-6b77c823.js";import{T as St}from"../../chunks/Tip-39098574.js";import{D as H}from"../../chunks/Docstring-1088f2fb.js";import{C as jo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Mo}from"../../chunks/ExampleCodeBlock-5212b321.js";function ti(x){let d,b,m,h,T;return{c(){d=a("p"),b=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),h=n("Github Issue"),T=n("."),this.h()},l(l){d=r(l,"P",{});var p=s(d);b=i(p,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=r(p,"A",{href:!0,rel:!0});var E=s(m);h=i(E,"Github Issue"),E.forEach(o),T=i(p,"."),p.forEach(o),this.h()},h(){c(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(m,"rel","nofollow")},m(l,p){_(l,d,p),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function oi(x){let d,b,m,h,T;return h=new jo({props:{code:`from transformers import DeiTModel, DeiTConfig

# Initializing a DeiT deit-base-distilled-patch16-224 style configuration
configuration = DeiTConfig()

# Initializing a model from the deit-base-distilled-patch16-224 style configuration
model = DeiTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTModel, DeiTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeiT deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DeiTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),b=n("Example:"),m=f(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Example:"),p.forEach(o),m=g(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function ai(x){let d,b;return{c(){d=a("p"),b=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){d=r(m,"P",{});var h=s(d);b=i(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(m,h){_(m,d,h),e(d,b)},d(m){m&&o(d)}}}function ri(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var E=s(m);h=i(E,"Module"),E.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function si(x){let d,b,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTModel.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),b=n("Example:"),m=f(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Example:"),p.forEach(o),m=g(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function ni(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var E=s(m);h=i(E,"Module"),E.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function ii(x){let d,b,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForMaskedImageModeling.from_pretrained("facebook/deit-base-distilled-patch16-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=a("p"),b=n("Examples:"),m=f(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Examples:"),p.forEach(o),m=g(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function li(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var E=s(m);h=i(E,"Module"),E.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function di(x){let d,b,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
import torch
from PIL import Image
import requests

torch.manual_seed(3)
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

# note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,
# so the head will be randomly initialized, hence the predictions will be random
feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassification.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=a("p"),b=n("Examples:"),m=f(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Examples:"),p.forEach(o),m=g(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function ci(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var E=s(m);h=i(E,"Module"),E.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function hi(x){let d,b,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassificationWithTeacher.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassificationWithTeacher.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=a("p"),b=n("Example:"),m=f(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var p=s(d);b=i(p,"Example:"),p.forEach(o),m=g(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function pi(x){let d,b,m,h,T,l,p,E,ha,Po,le,zo,J,de,Vt,qe,pa,Bt,ma,qo,q,fa,Ae,ga,ua,mt,_a,Ta,Ne,ba,va,Ao,ft,wa,No,gt,Ht,$a,Lo,ut,ya,Oo,C,Rt,Da,ka,G,xa,_t,Ea,Ia,Tt,Fa,Ma,Ca,Ut,ja,Pa,Jt,za,qa,I,Aa,bt,Na,La,vt,Oa,Wa,Gt,Sa,Va,Kt,Ba,Ha,Xt,Ra,Ua,Zt,Ja,Ga,wt,Ka,Xa,Wo,ce,Za,Le,Qa,Ya,So,K,he,Qt,Oe,er,Yt,tr,Vo,j,We,or,X,ar,$t,rr,sr,Se,nr,ir,lr,Z,dr,yt,cr,hr,Dt,pr,mr,fr,pe,Bo,Q,me,eo,Ve,gr,to,ur,Ho,P,Be,_r,oo,Tr,br,He,vr,kt,wr,$r,yr,R,Re,Dr,ao,kr,xr,fe,Ro,Y,ge,ro,Ue,Er,so,Ir,Uo,S,Je,Fr,Ge,Mr,Ke,Cr,jr,Pr,A,Xe,zr,ee,qr,xt,Ar,Nr,no,Lr,Or,Wr,ue,Sr,_e,Jo,te,Te,io,Ze,Vr,lo,Br,Go,V,Qe,Hr,oe,Rr,co,Ur,Jr,Ye,Gr,Kr,Xr,N,et,Zr,ae,Qr,Et,Yr,es,ho,ts,os,as,be,rs,ve,Ko,re,we,po,tt,ss,mo,ns,Xo,z,ot,is,fo,ls,ds,at,cs,rt,hs,ps,ms,L,st,fs,se,gs,It,us,_s,go,Ts,bs,vs,$e,ws,ye,Zo,ne,De,uo,nt,$s,_o,ys,Qo,F,it,Ds,To,ks,xs,bo,Es,Is,vo,Fs,Ms,lt,Cs,dt,js,Ps,zs,O,ct,qs,ie,As,Ft,Ns,Ls,wo,Os,Ws,Ss,ke,Vs,xe,Yo;return l=new ze({}),le=new St({props:{$$slots:{default:[ti]},$$scope:{ctx:x}}}),qe=new ze({}),Oe=new ze({}),We=new H({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DeiTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DeiTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DeiTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DeiTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DeiTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DeiTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DeiTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DeiTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DeiTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DeiTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DeiTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DeiTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DeiTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/configuration_deit.py#L29"}}),pe=new Mo({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[oi]},$$scope:{ctx:x}}}),Ve=new ze({}),Be=new H({props:{name:"class transformers.DeiTFeatureExtractor",anchor:"transformers.DeiTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DeiTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DeiTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DeiTFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.DeiTFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.DeiTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.DeiTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DeiTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/feature_extraction_deit.py#L36"}}),Re=new H({props:{name:"__call__",anchor:"transformers.DeiTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DeiTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/feature_extraction_deit.py#L91",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),fe=new St({props:{warning:!0,$$slots:{default:[ai]},$$scope:{ctx:x}}}),Ue=new ze({}),Je=new H({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L471"}}),Xe=new H({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L496",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new St({props:{$$slots:{default:[ri]},$$scope:{ctx:x}}}),_e=new Mo({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[si]},$$scope:{ctx:x}}}),Ze=new ze({}),Qe=new H({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L574"}}),et=new H({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L588",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new St({props:{$$slots:{default:[ni]},$$scope:{ctx:x}}}),ve=new Mo({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[ii]},$$scope:{ctx:x}}}),tt=new ze({}),ot=new H({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L682"}}),st=new H({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L695",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new St({props:{$$slots:{default:[li]},$$scope:{ctx:x}}}),ye=new Mo({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[di]},$$scope:{ctx:x}}}),nt=new ze({}),it=new H({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L831"}}),ct=new H({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/deit/modeling_deit.py#L849",returnDescription:`
<p>A <code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores as the average of the cls_logits and distillation logits.</li>
<li><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the classification head (i.e. the linear layer on top of the final hidden state of the
class token).</li>
<li><strong>distillation_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the distillation head (i.e. the linear layer on top of the final hidden state of the
distillation token).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new St({props:{$$slots:{default:[ci]},$$scope:{ctx:x}}}),xe=new Mo({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[hi]},$$scope:{ctx:x}}}),{c(){d=a("meta"),b=f(),m=a("h1"),h=a("a"),T=a("span"),v(l.$$.fragment),p=f(),E=a("span"),ha=n("DeiT"),Po=f(),v(le.$$.fragment),zo=f(),J=a("h2"),de=a("a"),Vt=a("span"),v(qe.$$.fragment),pa=f(),Bt=a("span"),ma=n("Overview"),qo=f(),q=a("p"),fa=n("The DeiT model was proposed in "),Ae=a("a"),ga=n("Training data-efficient image transformers & distillation through attention"),ua=n(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),mt=a("a"),_a=n("Vision Transformer (ViT)"),Ta=n(" introduced in "),Ne=a("a"),ba=n("Dosovitskiy et al., 2020"),va=n(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),Ao=f(),ft=a("p"),wa=n("The abstract from the paper is the following:"),No=f(),gt=a("p"),Ht=a("em"),$a=n(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),Lo=f(),ut=a("p"),ya=n("Tips:"),Oo=f(),C=a("ul"),Rt=a("li"),Da=n(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),ka=f(),G=a("li"),xa=n(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),_t=a("a"),Ea=n("DeiTForImageClassification"),Ia=n(` and (2) corresponds to
`),Tt=a("a"),Fa=n("DeiTForImageClassificationWithTeacher"),Ma=n("."),Ca=f(),Ut=a("li"),ja=n(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Pa=f(),Jt=a("li"),za=n(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),qa=f(),I=a("li"),Aa=n(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),bt=a("a"),Na=n("ViTModel"),La=n(" or "),vt=a("a"),Oa=n("ViTForImageClassification"),Wa=n(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),Gt=a("em"),Sa=n("facebook/deit-tiny-patch16-224"),Va=n(", "),Kt=a("em"),Ba=n("facebook/deit-small-patch16-224"),Ha=n(", "),Xt=a("em"),Ra=n("facebook/deit-base-patch16-224"),Ua=n(` and
`),Zt=a("em"),Ja=n("facebook/deit-base-patch16-384"),Ga=n(". Note that one should use "),wt=a("a"),Ka=n("DeiTFeatureExtractor"),Xa=n(` in order to
prepare images for the model.`),Wo=f(),ce=a("p"),Za=n("This model was contributed by "),Le=a("a"),Qa=n("nielsr"),Ya=n("."),So=f(),K=a("h2"),he=a("a"),Qt=a("span"),v(Oe.$$.fragment),er=f(),Yt=a("span"),tr=n("DeiTConfig"),Vo=f(),j=a("div"),v(We.$$.fragment),or=f(),X=a("p"),ar=n("This is the configuration class to store the configuration of a "),$t=a("a"),rr=n("DeiTModel"),sr=n(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Se=a("a"),nr=n("facebook/deit-base-distilled-patch16-224"),ir=n(`
architecture.`),lr=f(),Z=a("p"),dr=n("Configuration objects inherit from "),yt=a("a"),cr=n("PretrainedConfig"),hr=n(` and can be used to control the model outputs. Read the
documentation from `),Dt=a("a"),pr=n("PretrainedConfig"),mr=n(" for more information."),fr=f(),v(pe.$$.fragment),Bo=f(),Q=a("h2"),me=a("a"),eo=a("span"),v(Ve.$$.fragment),gr=f(),to=a("span"),ur=n("DeiTFeatureExtractor"),Ho=f(),P=a("div"),v(Be.$$.fragment),_r=f(),oo=a("p"),Tr=n("Constructs a DeiT feature extractor."),br=f(),He=a("p"),vr=n("This feature extractor inherits from "),kt=a("a"),wr=n("FeatureExtractionMixin"),$r=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),yr=f(),R=a("div"),v(Re.$$.fragment),Dr=f(),ao=a("p"),kr=n("Main method to prepare for the model one or several image(s)."),xr=f(),v(fe.$$.fragment),Ro=f(),Y=a("h2"),ge=a("a"),ro=a("span"),v(Ue.$$.fragment),Er=f(),so=a("span"),Ir=n("DeiTModel"),Uo=f(),S=a("div"),v(Je.$$.fragment),Fr=f(),Ge=a("p"),Mr=n(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ke=a("a"),Cr=n("torch.nn.Module"),jr=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pr=f(),A=a("div"),v(Xe.$$.fragment),zr=f(),ee=a("p"),qr=n("The "),xt=a("a"),Ar=n("DeiTModel"),Nr=n(" forward method, overrides the "),no=a("code"),Lr=n("__call__"),Or=n(" special method."),Wr=f(),v(ue.$$.fragment),Sr=f(),v(_e.$$.fragment),Jo=f(),te=a("h2"),Te=a("a"),io=a("span"),v(Ze.$$.fragment),Vr=f(),lo=a("span"),Br=n("DeiTForMaskedImageModeling"),Go=f(),V=a("div"),v(Qe.$$.fragment),Hr=f(),oe=a("p"),Rr=n("DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=a("code"),Ur=n("SimMIM <https://arxiv.org/abs/2111.09886>"),Jr=n(`__.
This model is a PyTorch `),Ye=a("a"),Gr=n("torch.nn.Module"),Kr=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xr=f(),N=a("div"),v(et.$$.fragment),Zr=f(),ae=a("p"),Qr=n("The "),Et=a("a"),Yr=n("DeiTForMaskedImageModeling"),es=n(" forward method, overrides the "),ho=a("code"),ts=n("__call__"),os=n(" special method."),as=f(),v(be.$$.fragment),rs=f(),v(ve.$$.fragment),Ko=f(),re=a("h2"),we=a("a"),po=a("span"),v(tt.$$.fragment),ss=f(),mo=a("span"),ns=n("DeiTForImageClassification"),Xo=f(),z=a("div"),v(ot.$$.fragment),is=f(),fo=a("p"),ls=n(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ds=f(),at=a("p"),cs=n("This model is a PyTorch "),rt=a("a"),hs=n("torch.nn.Module"),ps=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ms=f(),L=a("div"),v(st.$$.fragment),fs=f(),se=a("p"),gs=n("The "),It=a("a"),us=n("DeiTForImageClassification"),_s=n(" forward method, overrides the "),go=a("code"),Ts=n("__call__"),bs=n(" special method."),vs=f(),v($e.$$.fragment),ws=f(),v(ye.$$.fragment),Zo=f(),ne=a("h2"),De=a("a"),uo=a("span"),v(nt.$$.fragment),$s=f(),_o=a("span"),ys=n("DeiTForImageClassificationWithTeacher"),Qo=f(),F=a("div"),v(it.$$.fragment),Ds=f(),To=a("p"),ks=n(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),xs=f(),bo=a("p"),Es=n(".. warning::"),Is=f(),vo=a("p"),Fs=n(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ms=f(),lt=a("p"),Cs=n("This model is a PyTorch "),dt=a("a"),js=n("torch.nn.Module"),Ps=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zs=f(),O=a("div"),v(ct.$$.fragment),qs=f(),ie=a("p"),As=n("The "),Ft=a("a"),Ns=n("DeiTForImageClassificationWithTeacher"),Ls=n(" forward method, overrides the "),wo=a("code"),Os=n("__call__"),Ws=n(" special method."),Ss=f(),v(ke.$$.fragment),Vs=f(),v(xe.$$.fragment),this.h()},l(t){const u=Yn('[data-svelte="svelte-1phssyn"]',document.head);d=r(u,"META",{name:!0,content:!0}),u.forEach(o),b=g(t),m=r(t,"H1",{class:!0});var ht=s(m);h=r(ht,"A",{id:!0,class:!0,href:!0});var $o=s(h);T=r($o,"SPAN",{});var yo=s(T);w(l.$$.fragment,yo),yo.forEach(o),$o.forEach(o),p=g(ht),E=r(ht,"SPAN",{});var Do=s(E);ha=i(Do,"DeiT"),Do.forEach(o),ht.forEach(o),Po=g(t),w(le.$$.fragment,t),zo=g(t),J=r(t,"H2",{class:!0});var pt=s(J);de=r(pt,"A",{id:!0,class:!0,href:!0});var ko=s(de);Vt=r(ko,"SPAN",{});var xo=s(Vt);w(qe.$$.fragment,xo),xo.forEach(o),ko.forEach(o),pa=g(pt),Bt=r(pt,"SPAN",{});var Eo=s(Bt);ma=i(Eo,"Overview"),Eo.forEach(o),pt.forEach(o),qo=g(t),q=r(t,"P",{});var B=s(q);fa=i(B,"The DeiT model was proposed in "),Ae=r(B,"A",{href:!0,rel:!0});var Io=s(Ae);ga=i(Io,"Training data-efficient image transformers & distillation through attention"),Io.forEach(o),ua=i(B,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),mt=r(B,"A",{href:!0});var Fo=s(mt);_a=i(Fo,"Vision Transformer (ViT)"),Fo.forEach(o),Ta=i(B," introduced in "),Ne=r(B,"A",{href:!0,rel:!0});var Bs=s(Ne);ba=i(Bs,"Dosovitskiy et al., 2020"),Bs.forEach(o),va=i(B,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),B.forEach(o),Ao=g(t),ft=r(t,"P",{});var Hs=s(ft);wa=i(Hs,"The abstract from the paper is the following:"),Hs.forEach(o),No=g(t),gt=r(t,"P",{});var Rs=s(gt);Ht=r(Rs,"EM",{});var Us=s(Ht);$a=i(Us,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),Us.forEach(o),Rs.forEach(o),Lo=g(t),ut=r(t,"P",{});var Js=s(ut);ya=i(Js,"Tips:"),Js.forEach(o),Oo=g(t),C=r(t,"UL",{});var U=s(C);Rt=r(U,"LI",{});var Gs=s(Rt);Da=i(Gs,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),Gs.forEach(o),ka=g(U),G=r(U,"LI",{});var Mt=s(G);xa=i(Mt,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),_t=r(Mt,"A",{href:!0});var Ks=s(_t);Ea=i(Ks,"DeiTForImageClassification"),Ks.forEach(o),Ia=i(Mt,` and (2) corresponds to
`),Tt=r(Mt,"A",{href:!0});var Xs=s(Tt);Fa=i(Xs,"DeiTForImageClassificationWithTeacher"),Xs.forEach(o),Ma=i(Mt,"."),Mt.forEach(o),Ca=g(U),Ut=r(U,"LI",{});var Zs=s(Ut);ja=i(Zs,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Zs.forEach(o),Pa=g(U),Jt=r(U,"LI",{});var Qs=s(Jt);za=i(Qs,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),Qs.forEach(o),qa=g(U),I=r(U,"LI",{});var M=s(I);Aa=i(M,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),bt=r(M,"A",{href:!0});var Ys=s(bt);Na=i(Ys,"ViTModel"),Ys.forEach(o),La=i(M," or "),vt=r(M,"A",{href:!0});var en=s(vt);Oa=i(en,"ViTForImageClassification"),en.forEach(o),Wa=i(M,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),Gt=r(M,"EM",{});var tn=s(Gt);Sa=i(tn,"facebook/deit-tiny-patch16-224"),tn.forEach(o),Va=i(M,", "),Kt=r(M,"EM",{});var on=s(Kt);Ba=i(on,"facebook/deit-small-patch16-224"),on.forEach(o),Ha=i(M,", "),Xt=r(M,"EM",{});var an=s(Xt);Ra=i(an,"facebook/deit-base-patch16-224"),an.forEach(o),Ua=i(M,` and
`),Zt=r(M,"EM",{});var rn=s(Zt);Ja=i(rn,"facebook/deit-base-patch16-384"),rn.forEach(o),Ga=i(M,". Note that one should use "),wt=r(M,"A",{href:!0});var sn=s(wt);Ka=i(sn,"DeiTFeatureExtractor"),sn.forEach(o),Xa=i(M,` in order to
prepare images for the model.`),M.forEach(o),U.forEach(o),Wo=g(t),ce=r(t,"P",{});var ea=s(ce);Za=i(ea,"This model was contributed by "),Le=r(ea,"A",{href:!0,rel:!0});var nn=s(Le);Qa=i(nn,"nielsr"),nn.forEach(o),Ya=i(ea,"."),ea.forEach(o),So=g(t),K=r(t,"H2",{class:!0});var ta=s(K);he=r(ta,"A",{id:!0,class:!0,href:!0});var ln=s(he);Qt=r(ln,"SPAN",{});var dn=s(Qt);w(Oe.$$.fragment,dn),dn.forEach(o),ln.forEach(o),er=g(ta),Yt=r(ta,"SPAN",{});var cn=s(Yt);tr=i(cn,"DeiTConfig"),cn.forEach(o),ta.forEach(o),Vo=g(t),j=r(t,"DIV",{class:!0});var Ee=s(j);w(We.$$.fragment,Ee),or=g(Ee),X=r(Ee,"P",{});var Ct=s(X);ar=i(Ct,"This is the configuration class to store the configuration of a "),$t=r(Ct,"A",{href:!0});var hn=s($t);rr=i(hn,"DeiTModel"),hn.forEach(o),sr=i(Ct,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Se=r(Ct,"A",{href:!0,rel:!0});var pn=s(Se);nr=i(pn,"facebook/deit-base-distilled-patch16-224"),pn.forEach(o),ir=i(Ct,`
architecture.`),Ct.forEach(o),lr=g(Ee),Z=r(Ee,"P",{});var jt=s(Z);dr=i(jt,"Configuration objects inherit from "),yt=r(jt,"A",{href:!0});var mn=s(yt);cr=i(mn,"PretrainedConfig"),mn.forEach(o),hr=i(jt,` and can be used to control the model outputs. Read the
documentation from `),Dt=r(jt,"A",{href:!0});var fn=s(Dt);pr=i(fn,"PretrainedConfig"),fn.forEach(o),mr=i(jt," for more information."),jt.forEach(o),fr=g(Ee),w(pe.$$.fragment,Ee),Ee.forEach(o),Bo=g(t),Q=r(t,"H2",{class:!0});var oa=s(Q);me=r(oa,"A",{id:!0,class:!0,href:!0});var gn=s(me);eo=r(gn,"SPAN",{});var un=s(eo);w(Ve.$$.fragment,un),un.forEach(o),gn.forEach(o),gr=g(oa),to=r(oa,"SPAN",{});var _n=s(to);ur=i(_n,"DeiTFeatureExtractor"),_n.forEach(o),oa.forEach(o),Ho=g(t),P=r(t,"DIV",{class:!0});var Ie=s(P);w(Be.$$.fragment,Ie),_r=g(Ie),oo=r(Ie,"P",{});var Tn=s(oo);Tr=i(Tn,"Constructs a DeiT feature extractor."),Tn.forEach(o),br=g(Ie),He=r(Ie,"P",{});var aa=s(He);vr=i(aa,"This feature extractor inherits from "),kt=r(aa,"A",{href:!0});var bn=s(kt);wr=i(bn,"FeatureExtractionMixin"),bn.forEach(o),$r=i(aa,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),aa.forEach(o),yr=g(Ie),R=r(Ie,"DIV",{class:!0});var Pt=s(R);w(Re.$$.fragment,Pt),Dr=g(Pt),ao=r(Pt,"P",{});var vn=s(ao);kr=i(vn,"Main method to prepare for the model one or several image(s)."),vn.forEach(o),xr=g(Pt),w(fe.$$.fragment,Pt),Pt.forEach(o),Ie.forEach(o),Ro=g(t),Y=r(t,"H2",{class:!0});var ra=s(Y);ge=r(ra,"A",{id:!0,class:!0,href:!0});var wn=s(ge);ro=r(wn,"SPAN",{});var $n=s(ro);w(Ue.$$.fragment,$n),$n.forEach(o),wn.forEach(o),Er=g(ra),so=r(ra,"SPAN",{});var yn=s(so);Ir=i(yn,"DeiTModel"),yn.forEach(o),ra.forEach(o),Uo=g(t),S=r(t,"DIV",{class:!0});var zt=s(S);w(Je.$$.fragment,zt),Fr=g(zt),Ge=r(zt,"P",{});var sa=s(Ge);Mr=i(sa,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ke=r(sa,"A",{href:!0,rel:!0});var Dn=s(Ke);Cr=i(Dn,"torch.nn.Module"),Dn.forEach(o),jr=i(sa,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sa.forEach(o),Pr=g(zt),A=r(zt,"DIV",{class:!0});var Fe=s(A);w(Xe.$$.fragment,Fe),zr=g(Fe),ee=r(Fe,"P",{});var qt=s(ee);qr=i(qt,"The "),xt=r(qt,"A",{href:!0});var kn=s(xt);Ar=i(kn,"DeiTModel"),kn.forEach(o),Nr=i(qt," forward method, overrides the "),no=r(qt,"CODE",{});var xn=s(no);Lr=i(xn,"__call__"),xn.forEach(o),Or=i(qt," special method."),qt.forEach(o),Wr=g(Fe),w(ue.$$.fragment,Fe),Sr=g(Fe),w(_e.$$.fragment,Fe),Fe.forEach(o),zt.forEach(o),Jo=g(t),te=r(t,"H2",{class:!0});var na=s(te);Te=r(na,"A",{id:!0,class:!0,href:!0});var En=s(Te);io=r(En,"SPAN",{});var In=s(io);w(Ze.$$.fragment,In),In.forEach(o),En.forEach(o),Vr=g(na),lo=r(na,"SPAN",{});var Fn=s(lo);Br=i(Fn,"DeiTForMaskedImageModeling"),Fn.forEach(o),na.forEach(o),Go=g(t),V=r(t,"DIV",{class:!0});var At=s(V);w(Qe.$$.fragment,At),Hr=g(At),oe=r(At,"P",{});var Nt=s(oe);Rr=i(Nt,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=r(Nt,"CODE",{});var Mn=s(co);Ur=i(Mn,"SimMIM <https://arxiv.org/abs/2111.09886>"),Mn.forEach(o),Jr=i(Nt,`__.
This model is a PyTorch `),Ye=r(Nt,"A",{href:!0,rel:!0});var Cn=s(Ye);Gr=i(Cn,"torch.nn.Module"),Cn.forEach(o),Kr=i(Nt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nt.forEach(o),Xr=g(At),N=r(At,"DIV",{class:!0});var Me=s(N);w(et.$$.fragment,Me),Zr=g(Me),ae=r(Me,"P",{});var Lt=s(ae);Qr=i(Lt,"The "),Et=r(Lt,"A",{href:!0});var jn=s(Et);Yr=i(jn,"DeiTForMaskedImageModeling"),jn.forEach(o),es=i(Lt," forward method, overrides the "),ho=r(Lt,"CODE",{});var Pn=s(ho);ts=i(Pn,"__call__"),Pn.forEach(o),os=i(Lt," special method."),Lt.forEach(o),as=g(Me),w(be.$$.fragment,Me),rs=g(Me),w(ve.$$.fragment,Me),Me.forEach(o),At.forEach(o),Ko=g(t),re=r(t,"H2",{class:!0});var ia=s(re);we=r(ia,"A",{id:!0,class:!0,href:!0});var zn=s(we);po=r(zn,"SPAN",{});var qn=s(po);w(tt.$$.fragment,qn),qn.forEach(o),zn.forEach(o),ss=g(ia),mo=r(ia,"SPAN",{});var An=s(mo);ns=i(An,"DeiTForImageClassification"),An.forEach(o),ia.forEach(o),Xo=g(t),z=r(t,"DIV",{class:!0});var Ce=s(z);w(ot.$$.fragment,Ce),is=g(Ce),fo=r(Ce,"P",{});var Nn=s(fo);ls=i(Nn,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Nn.forEach(o),ds=g(Ce),at=r(Ce,"P",{});var la=s(at);cs=i(la,"This model is a PyTorch "),rt=r(la,"A",{href:!0,rel:!0});var Ln=s(rt);hs=i(Ln,"torch.nn.Module"),Ln.forEach(o),ps=i(la,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),la.forEach(o),ms=g(Ce),L=r(Ce,"DIV",{class:!0});var je=s(L);w(st.$$.fragment,je),fs=g(je),se=r(je,"P",{});var Ot=s(se);gs=i(Ot,"The "),It=r(Ot,"A",{href:!0});var On=s(It);us=i(On,"DeiTForImageClassification"),On.forEach(o),_s=i(Ot," forward method, overrides the "),go=r(Ot,"CODE",{});var Wn=s(go);Ts=i(Wn,"__call__"),Wn.forEach(o),bs=i(Ot," special method."),Ot.forEach(o),vs=g(je),w($e.$$.fragment,je),ws=g(je),w(ye.$$.fragment,je),je.forEach(o),Ce.forEach(o),Zo=g(t),ne=r(t,"H2",{class:!0});var da=s(ne);De=r(da,"A",{id:!0,class:!0,href:!0});var Sn=s(De);uo=r(Sn,"SPAN",{});var Vn=s(uo);w(nt.$$.fragment,Vn),Vn.forEach(o),Sn.forEach(o),$s=g(da),_o=r(da,"SPAN",{});var Bn=s(_o);ys=i(Bn,"DeiTForImageClassificationWithTeacher"),Bn.forEach(o),da.forEach(o),Qo=g(t),F=r(t,"DIV",{class:!0});var W=s(F);w(it.$$.fragment,W),Ds=g(W),To=r(W,"P",{});var Hn=s(To);ks=i(Hn,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Hn.forEach(o),xs=g(W),bo=r(W,"P",{});var Rn=s(bo);Es=i(Rn,".. warning::"),Rn.forEach(o),Is=g(W),vo=r(W,"P",{});var Un=s(vo);Fs=i(Un,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Un.forEach(o),Ms=g(W),lt=r(W,"P",{});var ca=s(lt);Cs=i(ca,"This model is a PyTorch "),dt=r(ca,"A",{href:!0,rel:!0});var Jn=s(dt);js=i(Jn,"torch.nn.Module"),Jn.forEach(o),Ps=i(ca,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ca.forEach(o),zs=g(W),O=r(W,"DIV",{class:!0});var Pe=s(O);w(ct.$$.fragment,Pe),qs=g(Pe),ie=r(Pe,"P",{});var Wt=s(ie);As=i(Wt,"The "),Ft=r(Wt,"A",{href:!0});var Gn=s(Ft);Ns=i(Gn,"DeiTForImageClassificationWithTeacher"),Gn.forEach(o),Ls=i(Wt," forward method, overrides the "),wo=r(Wt,"CODE",{});var Kn=s(wo);Os=i(Kn,"__call__"),Kn.forEach(o),Ws=i(Wt," special method."),Wt.forEach(o),Ss=g(Pe),w(ke.$$.fragment,Pe),Vs=g(Pe),w(xe.$$.fragment,Pe),Pe.forEach(o),W.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(mi)),c(h,"id","deit"),c(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(h,"href","#deit"),c(m,"class","relative group"),c(de,"id","overview"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#overview"),c(J,"class","relative group"),c(Ae,"href","https://arxiv.org/abs/2012.12877"),c(Ae,"rel","nofollow"),c(mt,"href","vit"),c(Ne,"href","https://arxiv.org/abs/2010.11929"),c(Ne,"rel","nofollow"),c(_t,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTForImageClassification"),c(Tt,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),c(bt,"href","/docs/transformers/pr_highlight/en/model_doc/vit#transformers.ViTModel"),c(vt,"href","/docs/transformers/pr_highlight/en/model_doc/vit#transformers.ViTForImageClassification"),c(wt,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(Le,"href","https://huggingface.co/nielsr"),c(Le,"rel","nofollow"),c(he,"id","transformers.DeiTConfig"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.DeiTConfig"),c(K,"class","relative group"),c($t,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTModel"),c(Se,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),c(Se,"rel","nofollow"),c(yt,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),c(Dt,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"id","transformers.DeiTFeatureExtractor"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#transformers.DeiTFeatureExtractor"),c(Q,"class","relative group"),c(kt,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"id","transformers.DeiTModel"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.DeiTModel"),c(Y,"class","relative group"),c(Ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ke,"rel","nofollow"),c(xt,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.DeiTForMaskedImageModeling"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DeiTForMaskedImageModeling"),c(te,"class","relative group"),c(Ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ye,"rel","nofollow"),c(Et,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(we,"id","transformers.DeiTForImageClassification"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.DeiTForImageClassification"),c(re,"class","relative group"),c(rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(rt,"rel","nofollow"),c(It,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTForImageClassification"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(De,"id","transformers.DeiTForImageClassificationWithTeacher"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#transformers.DeiTForImageClassificationWithTeacher"),c(ne,"class","relative group"),c(dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(dt,"rel","nofollow"),c(Ft,"href","/docs/transformers/pr_highlight/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),_(t,b,u),_(t,m,u),e(m,h),e(h,T),$(l,T,null),e(m,p),e(m,E),e(E,ha),_(t,Po,u),$(le,t,u),_(t,zo,u),_(t,J,u),e(J,de),e(de,Vt),$(qe,Vt,null),e(J,pa),e(J,Bt),e(Bt,ma),_(t,qo,u),_(t,q,u),e(q,fa),e(q,Ae),e(Ae,ga),e(q,ua),e(q,mt),e(mt,_a),e(q,Ta),e(q,Ne),e(Ne,ba),e(q,va),_(t,Ao,u),_(t,ft,u),e(ft,wa),_(t,No,u),_(t,gt,u),e(gt,Ht),e(Ht,$a),_(t,Lo,u),_(t,ut,u),e(ut,ya),_(t,Oo,u),_(t,C,u),e(C,Rt),e(Rt,Da),e(C,ka),e(C,G),e(G,xa),e(G,_t),e(_t,Ea),e(G,Ia),e(G,Tt),e(Tt,Fa),e(G,Ma),e(C,Ca),e(C,Ut),e(Ut,ja),e(C,Pa),e(C,Jt),e(Jt,za),e(C,qa),e(C,I),e(I,Aa),e(I,bt),e(bt,Na),e(I,La),e(I,vt),e(vt,Oa),e(I,Wa),e(I,Gt),e(Gt,Sa),e(I,Va),e(I,Kt),e(Kt,Ba),e(I,Ha),e(I,Xt),e(Xt,Ra),e(I,Ua),e(I,Zt),e(Zt,Ja),e(I,Ga),e(I,wt),e(wt,Ka),e(I,Xa),_(t,Wo,u),_(t,ce,u),e(ce,Za),e(ce,Le),e(Le,Qa),e(ce,Ya),_(t,So,u),_(t,K,u),e(K,he),e(he,Qt),$(Oe,Qt,null),e(K,er),e(K,Yt),e(Yt,tr),_(t,Vo,u),_(t,j,u),$(We,j,null),e(j,or),e(j,X),e(X,ar),e(X,$t),e($t,rr),e(X,sr),e(X,Se),e(Se,nr),e(X,ir),e(j,lr),e(j,Z),e(Z,dr),e(Z,yt),e(yt,cr),e(Z,hr),e(Z,Dt),e(Dt,pr),e(Z,mr),e(j,fr),$(pe,j,null),_(t,Bo,u),_(t,Q,u),e(Q,me),e(me,eo),$(Ve,eo,null),e(Q,gr),e(Q,to),e(to,ur),_(t,Ho,u),_(t,P,u),$(Be,P,null),e(P,_r),e(P,oo),e(oo,Tr),e(P,br),e(P,He),e(He,vr),e(He,kt),e(kt,wr),e(He,$r),e(P,yr),e(P,R),$(Re,R,null),e(R,Dr),e(R,ao),e(ao,kr),e(R,xr),$(fe,R,null),_(t,Ro,u),_(t,Y,u),e(Y,ge),e(ge,ro),$(Ue,ro,null),e(Y,Er),e(Y,so),e(so,Ir),_(t,Uo,u),_(t,S,u),$(Je,S,null),e(S,Fr),e(S,Ge),e(Ge,Mr),e(Ge,Ke),e(Ke,Cr),e(Ge,jr),e(S,Pr),e(S,A),$(Xe,A,null),e(A,zr),e(A,ee),e(ee,qr),e(ee,xt),e(xt,Ar),e(ee,Nr),e(ee,no),e(no,Lr),e(ee,Or),e(A,Wr),$(ue,A,null),e(A,Sr),$(_e,A,null),_(t,Jo,u),_(t,te,u),e(te,Te),e(Te,io),$(Ze,io,null),e(te,Vr),e(te,lo),e(lo,Br),_(t,Go,u),_(t,V,u),$(Qe,V,null),e(V,Hr),e(V,oe),e(oe,Rr),e(oe,co),e(co,Ur),e(oe,Jr),e(oe,Ye),e(Ye,Gr),e(oe,Kr),e(V,Xr),e(V,N),$(et,N,null),e(N,Zr),e(N,ae),e(ae,Qr),e(ae,Et),e(Et,Yr),e(ae,es),e(ae,ho),e(ho,ts),e(ae,os),e(N,as),$(be,N,null),e(N,rs),$(ve,N,null),_(t,Ko,u),_(t,re,u),e(re,we),e(we,po),$(tt,po,null),e(re,ss),e(re,mo),e(mo,ns),_(t,Xo,u),_(t,z,u),$(ot,z,null),e(z,is),e(z,fo),e(fo,ls),e(z,ds),e(z,at),e(at,cs),e(at,rt),e(rt,hs),e(at,ps),e(z,ms),e(z,L),$(st,L,null),e(L,fs),e(L,se),e(se,gs),e(se,It),e(It,us),e(se,_s),e(se,go),e(go,Ts),e(se,bs),e(L,vs),$($e,L,null),e(L,ws),$(ye,L,null),_(t,Zo,u),_(t,ne,u),e(ne,De),e(De,uo),$(nt,uo,null),e(ne,$s),e(ne,_o),e(_o,ys),_(t,Qo,u),_(t,F,u),$(it,F,null),e(F,Ds),e(F,To),e(To,ks),e(F,xs),e(F,bo),e(bo,Es),e(F,Is),e(F,vo),e(vo,Fs),e(F,Ms),e(F,lt),e(lt,Cs),e(lt,dt),e(dt,js),e(lt,Ps),e(F,zs),e(F,O),$(ct,O,null),e(O,qs),e(O,ie),e(ie,As),e(ie,Ft),e(Ft,Ns),e(ie,Ls),e(ie,wo),e(wo,Os),e(ie,Ws),e(O,Ss),$(ke,O,null),e(O,Vs),$(xe,O,null),Yo=!0},p(t,[u]){const ht={};u&2&&(ht.$$scope={dirty:u,ctx:t}),le.$set(ht);const $o={};u&2&&($o.$$scope={dirty:u,ctx:t}),pe.$set($o);const yo={};u&2&&(yo.$$scope={dirty:u,ctx:t}),fe.$set(yo);const Do={};u&2&&(Do.$$scope={dirty:u,ctx:t}),ue.$set(Do);const pt={};u&2&&(pt.$$scope={dirty:u,ctx:t}),_e.$set(pt);const ko={};u&2&&(ko.$$scope={dirty:u,ctx:t}),be.$set(ko);const xo={};u&2&&(xo.$$scope={dirty:u,ctx:t}),ve.$set(xo);const Eo={};u&2&&(Eo.$$scope={dirty:u,ctx:t}),$e.$set(Eo);const B={};u&2&&(B.$$scope={dirty:u,ctx:t}),ye.$set(B);const Io={};u&2&&(Io.$$scope={dirty:u,ctx:t}),ke.$set(Io);const Fo={};u&2&&(Fo.$$scope={dirty:u,ctx:t}),xe.$set(Fo)},i(t){Yo||(y(l.$$.fragment,t),y(le.$$.fragment,t),y(qe.$$.fragment,t),y(Oe.$$.fragment,t),y(We.$$.fragment,t),y(pe.$$.fragment,t),y(Ve.$$.fragment,t),y(Be.$$.fragment,t),y(Re.$$.fragment,t),y(fe.$$.fragment,t),y(Ue.$$.fragment,t),y(Je.$$.fragment,t),y(Xe.$$.fragment,t),y(ue.$$.fragment,t),y(_e.$$.fragment,t),y(Ze.$$.fragment,t),y(Qe.$$.fragment,t),y(et.$$.fragment,t),y(be.$$.fragment,t),y(ve.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(st.$$.fragment,t),y($e.$$.fragment,t),y(ye.$$.fragment,t),y(nt.$$.fragment,t),y(it.$$.fragment,t),y(ct.$$.fragment,t),y(ke.$$.fragment,t),y(xe.$$.fragment,t),Yo=!0)},o(t){D(l.$$.fragment,t),D(le.$$.fragment,t),D(qe.$$.fragment,t),D(Oe.$$.fragment,t),D(We.$$.fragment,t),D(pe.$$.fragment,t),D(Ve.$$.fragment,t),D(Be.$$.fragment,t),D(Re.$$.fragment,t),D(fe.$$.fragment,t),D(Ue.$$.fragment,t),D(Je.$$.fragment,t),D(Xe.$$.fragment,t),D(ue.$$.fragment,t),D(_e.$$.fragment,t),D(Ze.$$.fragment,t),D(Qe.$$.fragment,t),D(et.$$.fragment,t),D(be.$$.fragment,t),D(ve.$$.fragment,t),D(tt.$$.fragment,t),D(ot.$$.fragment,t),D(st.$$.fragment,t),D($e.$$.fragment,t),D(ye.$$.fragment,t),D(nt.$$.fragment,t),D(it.$$.fragment,t),D(ct.$$.fragment,t),D(ke.$$.fragment,t),D(xe.$$.fragment,t),Yo=!1},d(t){o(d),t&&o(b),t&&o(m),k(l),t&&o(Po),k(le,t),t&&o(zo),t&&o(J),k(qe),t&&o(qo),t&&o(q),t&&o(Ao),t&&o(ft),t&&o(No),t&&o(gt),t&&o(Lo),t&&o(ut),t&&o(Oo),t&&o(C),t&&o(Wo),t&&o(ce),t&&o(So),t&&o(K),k(Oe),t&&o(Vo),t&&o(j),k(We),k(pe),t&&o(Bo),t&&o(Q),k(Ve),t&&o(Ho),t&&o(P),k(Be),k(Re),k(fe),t&&o(Ro),t&&o(Y),k(Ue),t&&o(Uo),t&&o(S),k(Je),k(Xe),k(ue),k(_e),t&&o(Jo),t&&o(te),k(Ze),t&&o(Go),t&&o(V),k(Qe),k(et),k(be),k(ve),t&&o(Ko),t&&o(re),k(tt),t&&o(Xo),t&&o(z),k(ot),k(st),k($e),k(ye),t&&o(Zo),t&&o(ne),k(nt),t&&o(Qo),t&&o(F),k(it),k(ct),k(ke),k(xe)}}}const mi={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTFeatureExtractor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"}],title:"DeiT"};function fi(x){return ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wi extends Xn{constructor(d){super();Zn(this,d,fi,pi,Qn,{})}}export{wi as default,mi as metadata};
