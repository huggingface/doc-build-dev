import{S as H_,i as K_,s as X_,e as a,k as p,w as v,t as n,M as Y_,c as r,d as t,m as u,a as i,x as y,h as s,b as l,F as e,g as m,y as b,q as L,o as k,B as w,v as Z_,L as ps}from"../../chunks/vendor-6b77c823.js";import{T as Ci}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-1088f2fb.js";import{C as G}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ie}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ds}from"../../chunks/ExampleCodeBlock-5212b321.js";function J_(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

# Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration
configuration = LayoutLMv2Config()

# Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration
model = LayoutLMv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Model, LayoutLMv2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),T=n("Example:"),_=p(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Example:"),f.forEach(t),_=u(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ps,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){k(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),w(g,d)}}}function ev(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2FeatureExtractor
from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

# option 1: with apply_ocr=True (default)
feature_extractor = LayoutLMv2FeatureExtractor()
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values', 'words', 'boxes'])

# option 2: with apply_ocr=False
feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=False)
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=a("p"),T=n("Examples:"),_=p(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Examples:"),f.forEach(t),_=u(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ps,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){k(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),w(g,d)}}}function ov(P){let h,T,_,g,x;return{c(){h=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=s(O,"Module"),O.forEach(t),x=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function tv(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2Model.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

encoding = processor(image, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=a("p"),T=n("Examples:"),_=p(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Examples:"),f.forEach(t),_=u(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ps,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){k(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),w(g,d)}}}function nv(P){let h,T,_,g,x;return{c(){h=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=s(O,"Module"),O.forEach(t),x=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function sv(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification
from PIL import Image
import torch

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForSequenceClassification.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

encoding = processor(image, return_tensors="pt")
sequence_label = torch.tensor([1])

outputs = model(**encoding, labels=sequence_label)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("p"),T=n("Examples:"),_=p(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Examples:"),f.forEach(t),_=u(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ps,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){k(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),w(g,d)}}}function av(P){let h,T,_,g,x;return{c(){h=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=s(O,"Module"),O.forEach(t),x=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function rv(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")
model = LayoutLMv2ForTokenClassification.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
word_labels = [0, 1]

encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")

outputs = model(**encoding)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("p"),T=n("Examples:"),_=p(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Examples:"),f.forEach(t),_=u(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ps,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){k(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),w(g,d)}}}function iv(P){let h,T,_,g,x;return{c(){h=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=s(O,"Module"),O.forEach(t),x=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function lv(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering
from PIL import Image
import torch

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForQuestionAnswering.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
question = "what's his name?"

encoding = processor(image, question, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){h=a("p"),T=n("Examples:"),_=p(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=s(f,"Examples:"),f.forEach(t),_=u(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ps,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){k(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),w(g,d)}}}function cv(P){let h,T,_,g,x,d,f,O,ji,ar,xe,Ue,us,Mo,Ii,ms,Di,rr,pe,Oi,$o,Ai,Ni,Jt,Si,Ri,ir,ue,H,Wi,Eo,Ui,Bi,zo,Vi,Qi,Fo,Gi,Hi,qo,Ki,Xi,Yi,Po,Zi,Co,Ji,el,ol,jo,tl,Io,nl,sl,lr,en,al,cr,on,hs,rl,dr,tn,il,pr,U,fs,ll,cl,Do,dl,Oo,pl,ul,ml,Ao,hl,No,fl,gl,_l,Te,vl,So,yl,bl,Ro,Ll,kl,wl,M,xl,gs,Tl,Ml,nn,$l,El,_s,zl,Fl,vs,ql,Pl,ys,Cl,jl,bs,Il,Dl,Ls,Ol,Al,ks,Nl,Sl,ws,Rl,Wl,sn,Ul,Bl,Wo,Vl,Ql,Uo,Gl,Hl,ur,Bo,mr,me,Kl,xs,Xl,Yl,Ts,Zl,Jl,hr,Vo,fr,Be,ec,an,oc,tc,gr,he,I,nc,rn,sc,ac,Ms,rc,ic,$s,lc,cc,ln,dc,pc,Es,uc,mc,zs,hc,fc,Fs,gc,_c,vc,Qo,yc,cn,bc,Lc,kc,Go,wc,qs,xc,Tc,_r,Ve,Mc,dn,$c,Ec,vr,Me,Qe,Ps,Ho,zc,Cs,Fc,yr,B,qc,pn,Pc,Cc,un,jc,Ic,mn,Dc,Oc,hn,Ac,Nc,br,Ko,Lr,E,Sc,fn,Rc,Wc,gn,Uc,Bc,js,Vc,Qc,_n,Gc,Hc,vn,Kc,Xc,Is,Yc,Zc,Ds,Jc,ed,Os,od,td,As,nd,sd,Ns,ad,rd,kr,R,yn,id,ld,Xo,cd,dd,bn,pd,ud,Ss,md,hd,Rs,fd,gd,wr,Ln,_d,xr,kn,Ws,vd,Tr,wn,yd,Mr,Yo,$r,xn,Us,bd,Er,fe,Ld,Bs,kd,wd,Vs,xd,Td,zr,Zo,Fr,Tn,Qs,Md,qr,V,$d,Gs,Ed,zd,Hs,Fd,qd,Ks,Pd,Cd,Xs,jd,Id,Pr,Jo,Cr,Mn,Ys,Dd,jr,$n,Od,Ir,et,Dr,En,Zs,Ad,Or,zn,Nd,Ar,ot,Nr,$e,Ge,Js,tt,Sd,ea,Rd,Sr,K,nt,Wd,Ee,Ud,Fn,Bd,Vd,st,Qd,Gd,Hd,ze,Kd,qn,Xd,Yd,Pn,Zd,Jd,ep,He,Rr,Fe,Ke,oa,at,op,ta,tp,Wr,X,rt,np,na,sp,ap,it,rp,sa,ip,lp,cp,ge,lt,dp,aa,pp,up,Xe,Ur,qe,Ye,ra,ct,mp,ia,hp,Br,A,dt,fp,N,gp,Cn,_p,vp,la,yp,bp,ca,Lp,kp,da,wp,xp,pa,Tp,Mp,ua,$p,Ep,zp,pt,Fp,jn,qp,Pp,Cp,In,Dn,jp,Ip,Dp,Ze,ut,Op,ma,Ap,Np,On,mt,Vr,Pe,Je,ha,ht,Sp,fa,Rp,Qr,Y,ft,Wp,gt,Up,ga,Bp,Vp,Qp,_t,Gp,An,Hp,Kp,Xp,eo,vt,Yp,_a,Zp,Gr,Ce,oo,va,yt,Jp,ya,eu,Hr,W,bt,ou,ba,tu,nu,Nn,Sn,su,au,ru,q,iu,Rn,lu,cu,Wn,du,pu,Un,uu,mu,La,hu,fu,ka,gu,_u,wa,vu,yu,xa,bu,Lu,Ta,ku,wu,Ma,xu,Tu,Mu,_e,Lt,$u,$,Eu,$a,zu,Fu,kt,Ea,qu,Pu,Cu,Bn,ju,Iu,za,Du,Ou,Fa,Au,Nu,wt,qa,Su,Ru,Wu,Pa,Uu,Bu,Vn,Vu,Qu,Ca,Gu,Hu,ja,Ku,Xu,Ia,Yu,Zu,Da,Ju,em,om,Oa,tm,Kr,je,to,Aa,xt,nm,Na,sm,Xr,le,Tt,am,Mt,rm,$t,im,lm,cm,te,Et,dm,Ie,pm,Qn,um,mm,Sa,hm,fm,gm,no,_m,so,Yr,De,ao,Ra,zt,vm,Wa,ym,Zr,Z,Ft,bm,qt,Lm,Pt,km,wm,xm,Ct,Tm,jt,Mm,$m,Em,ne,It,zm,Oe,Fm,Gn,qm,Pm,Ua,Cm,jm,Im,ro,Dm,io,Jr,Ae,lo,Ba,Dt,Om,Va,Am,ei,J,Ot,Nm,ee,Sm,At,Rm,Wm,Nt,Um,Bm,St,Vm,Qm,Rt,Gm,Hm,Km,Wt,Xm,Ut,Ym,Zm,Jm,se,Bt,eh,Ne,oh,Hn,th,nh,Qa,sh,ah,rh,co,ih,po,oi,Se,uo,Ga,Vt,lh,Ha,ch,ti,oe,Qt,dh,ce,ph,Gt,uh,mh,Ka,hh,fh,Xa,gh,_h,vh,Ht,yh,Kt,bh,Lh,kh,ae,Xt,wh,Re,xh,Kn,Th,Mh,Ya,$h,Eh,zh,mo,Fh,ho,ni;return d=new ie({}),Mo=new ie({}),Bo=new G({props:{code:`def normalize_bbox(bbox, width, height):
    return [
        int(1000 * (bbox[0] / width)),
        int(1000 * (bbox[1] / height)),
        int(1000 * (bbox[2] / width)),
        int(1000 * (bbox[3] / height)),
    ]`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
    <span class="hljs-keyword">return</span> [
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
    ]`}}),Vo=new G({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Ho=new ie({}),Ko=new G({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),Yo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
encoding = processor(
    image, return_tensors="pt"
)  # you can also add all tokenizer parameters here such as padding, truncation
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
encoding = processor(
    image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
)  <span class="hljs-comment"># you can also add all tokenizer parameters here such as padding, truncation</span>
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Zo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Jo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
word_labels = [1, 2]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'labels', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
word_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),et=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
encoding = processor(image, question, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ot=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),tt=new ie({}),nt=new D({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
<code>TFLayoutLMv2Model</code>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv2Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv2Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv2Config.fast_qkv",description:`<strong>fast_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a single matrix for the queries, keys, values in the self-attention layers.`,name:"fast_qkv"},{anchor:"transformers.LayoutLMv2Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv2Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv2Config.image_feature_pool_shape",description:`<strong>image_feature_pool_shape</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [7, 7, 256]) &#x2014;
The shape of the average-pooled feature map.`,name:"image_feature_pool_shape"},{anchor:"transformers.LayoutLMv2Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv2Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv2Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_visual_segment_embedding",description:`<strong>has_visual_segment_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add visual segment embeddings.`,name:"has_visual_segment_embedding"},{anchor:"transformers.LayoutLMv2Config.detectron2_config_args",description:`<strong>detectron2_config_args</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the configuration arguments of the Detectron2 visual backbone. Refer to <a href="https://github.com/microsoft/unilm/blob/master/layoutlmft/layoutlmft/models/layoutlmv2/detectron2_config.py" rel="nofollow">this
file</a>
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),He=new ds({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[J_]},$$scope:{ctx:P}}}),at=new ie({}),rt=new D({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv2FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv2FeatureExtractor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>Optional[str]</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv2FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),lt=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17038/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L123",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17038/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17038/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Xe=new ds({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[ev]},$$scope:{ctx:P}}}),ct=new ie({}),dt=new D({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L202"}}),ut=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17038/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17038/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17038/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L422",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> \u2014 List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> \u2014 List of labels to be fed to a model. (when a <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),mt=new D({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L402"}}),ht=new ie({}),ft=new D({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.LayoutLMv2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv2TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutLMv2TokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L66"}}),vt=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17038/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17038/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17038/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L175",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> \u2014 List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> \u2014 List of labels to be fed to a model. (when a <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),yt=new ie({}),bt=new D({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),Lt=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),xt=new ie({}),Tt=new D({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17038/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L709"}}),Et=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17038/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17038/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length), 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2Model.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17038/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L807",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new Ci({props:{$$slots:{default:[ov]},$$scope:{ctx:P}}}),so=new ds({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[tv]},$$scope:{ctx:P}}}),zt=new ie({}),Ft=new D({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17038/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L954"}}),It=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17038/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17038/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17038/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L968",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new Ci({props:{$$slots:{default:[nv]},$$scope:{ctx:P}}}),io=new ds({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[sv]},$$scope:{ctx:P}}}),Dt=new ie({}),Ot=new D({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17038/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1123"}}),Bt=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17038/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17038/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17038/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1137",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Ci({props:{$$slots:{default:[av]},$$scope:{ctx:P}}}),po=new ds({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[rv]},$$scope:{ctx:P}}}),Vt=new ie({}),Qt=new D({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17038/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1232"}}),Xt=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17038/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17038/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17038/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17038/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17038/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new Ci({props:{$$slots:{default:[iv]},$$scope:{ctx:P}}}),ho=new ds({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[lv]},$$scope:{ctx:P}}}),{c(){h=a("meta"),T=p(),_=a("h1"),g=a("a"),x=a("span"),v(d.$$.fragment),f=p(),O=a("span"),ji=n("LayoutLMV2"),ar=p(),xe=a("h2"),Ue=a("a"),us=a("span"),v(Mo.$$.fragment),Ii=p(),ms=a("span"),Di=n("Overview"),rr=p(),pe=a("p"),Oi=n("The LayoutLMV2 model was proposed in "),$o=a("a"),Ai=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Ni=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),Jt=a("a"),Si=n("LayoutLM"),Ri=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),ir=p(),ue=a("ul"),H=a("li"),Wi=n("information extraction from scanned documents: the "),Eo=a("a"),Ui=n("FUNSD"),Bi=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zo=a("a"),Vi=n("CORD"),Qi=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Fo=a("a"),Gi=n("SROIE"),Hi=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),qo=a("a"),Ki=n("Kleister-NDA"),Xi=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),Yi=p(),Po=a("li"),Zi=n("document image classification: the "),Co=a("a"),Ji=n("RVL-CDIP"),el=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ol=p(),jo=a("li"),tl=n("document visual question answering: the "),Io=a("a"),nl=n("DocVQA"),sl=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),lr=p(),en=a("p"),al=n("The abstract from the paper is the following:"),cr=p(),on=a("p"),hs=a("em"),rl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),dr=p(),tn=a("p"),il=n("Tips:"),pr=p(),U=a("ul"),fs=a("li"),ll=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),cl=p(),Do=a("li"),dl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Oo=a("a"),pl=n("paper"),ul=n("."),ml=p(),Ao=a("li"),hl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),No=a("a"),fl=n("here"),gl=n("."),_l=p(),Te=a("li"),vl=n("LayoutLMv2 uses Facebook AI\u2019s "),So=a("a"),yl=n("Detectron2"),bl=n(` package for its visual
backbone. See `),Ro=a("a"),Ll=n("this link"),kl=n(` for installation
instructions.`),wl=p(),M=a("li"),xl=n("In addition to "),gs=a("code"),Tl=n("input_ids"),Ml=n(", "),nn=a("a"),$l=n("forward()"),El=n(` expects 2 additional inputs, namely
`),_s=a("code"),zl=n("image"),Fl=n(" and "),vs=a("code"),ql=n("bbox"),Pl=n(". The "),ys=a("code"),Cl=n("image"),jl=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),bs=a("code"),Il=n("image"),Dl=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Ls=a("code"),Ol=n("torch.Tensor"),Al=n(" or a "),ks=a("code"),Nl=n("Detectron2.structures.ImageList"),Sl=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ws=a("code"),Rl=n("bbox"),Wl=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),sn=a("a"),Ul=n("LayoutLMModel"),Bl=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Wo=a("a"),Vl=n("Tesseract"),Ql=n(" (there\u2019s a "),Uo=a("a"),Gl=n(`Python
wrapper`),Hl=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),ur=p(),v(Bo.$$.fragment),mr=p(),me=a("p"),Kl=n("Here, "),xs=a("code"),Xl=n("width"),Yl=n(" and "),Ts=a("code"),Zl=n("height"),Jl=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),hr=p(),v(Vo.$$.fragment),fr=p(),Be=a("p"),ec=n("However, this model includes a brand new "),an=a("a"),oc=n("LayoutLMv2Processor"),tc=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),gr=p(),he=a("ul"),I=a("li"),nc=n("Internally, "),rn=a("a"),sc=n("LayoutLMv2Model"),ac=n(" will send the "),Ms=a("code"),rc=n("image"),ic=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),$s=a("code"),lc=n("image_feature_pool_shape"),cc=n(` attribute of
`),ln=a("a"),dc=n("LayoutLMv2Config"),pc=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Es=a("code"),uc=n("seq_length"),mc=n(" + "),zs=a("code"),hc=n("image_feature_pool_shape[0]"),fc=n(` *
`),Fs=a("code"),gc=n("config.image_feature_pool_shape[1]"),_c=n("."),vc=p(),Qo=a("li"),yc=n("When calling "),cn=a("a"),bc=n("from_pretrained()"),Lc=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),kc=p(),Go=a("li"),wc=n("If you want to train the model in a distributed environment, make sure to call "),qs=a("code"),xc=n("synchronize_batch_norm"),Tc=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),_r=p(),Ve=a("p"),Mc=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),dn=a("a"),$c=n("LayoutXLM\u2019s documentation page"),Ec=n("."),vr=p(),Me=a("h2"),Qe=a("a"),Ps=a("span"),v(Ho.$$.fragment),zc=p(),Cs=a("span"),Fc=n("Usage: LayoutLMv2Processor"),yr=p(),B=a("p"),qc=n("The easiest way to prepare data for the model is to use "),pn=a("a"),Pc=n("LayoutLMv2Processor"),Cc=n(`, which internally
combines a feature extractor (`),un=a("a"),jc=n("LayoutLMv2FeatureExtractor"),Ic=n(`) and a tokenizer
(`),mn=a("a"),Dc=n("LayoutLMv2Tokenizer"),Oc=n(" or "),hn=a("a"),Ac=n("LayoutLMv2TokenizerFast"),Nc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),br=p(),v(Ko.$$.fragment),Lr=p(),E=a("p"),Sc=n("In short, one can provide a document image (and possibly additional data) to "),fn=a("a"),Rc=n("LayoutLMv2Processor"),Wc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),gn=a("a"),Uc=n("LayoutLMv2FeatureExtractor"),Bc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),js=a("code"),Vc=n("image"),Qc=n(` input. The words and
normalized bounding boxes are then provided to `),_n=a("a"),Gc=n("LayoutLMv2Tokenizer"),Hc=n(` or
`),vn=a("a"),Kc=n("LayoutLMv2TokenizerFast"),Xc=n(", which converts them to token-level "),Is=a("code"),Yc=n("input_ids"),Zc=n(`,
`),Ds=a("code"),Jc=n("attention_mask"),ed=n(", "),Os=a("code"),od=n("token_type_ids"),td=n(", "),As=a("code"),nd=n("bbox"),sd=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Ns=a("code"),ad=n("labels"),rd=n("."),kr=p(),R=a("p"),yn=a("a"),id=n("LayoutLMv2Processor"),ld=n(" uses "),Xo=a("a"),cd=n("PyTesseract"),dd=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),bn=a("a"),pd=n("LayoutLMv2FeatureExtractor"),ud=n(" with "),Ss=a("code"),md=n("apply_ocr"),hd=n(" set to "),Rs=a("code"),fd=n("False"),gd=n("."),wr=p(),Ln=a("p"),_d=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),xr=p(),kn=a("p"),Ws=a("strong"),vd=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Tr=p(),wn=a("p"),yd=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Mr=p(),v(Yo.$$.fragment),$r=p(),xn=a("p"),Us=a("strong"),bd=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Er=p(),fe=a("p"),Ld=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Bs=a("code"),kd=n("apply_ocr"),wd=n(` set to
`),Vs=a("code"),xd=n("False"),Td=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),zr=p(),v(Zo.$$.fragment),Fr=p(),Tn=a("p"),Qs=a("strong"),Md=n("Use case 3: token classification (training), apply_ocr=False"),qr=p(),V=a("p"),$d=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Gs=a("code"),Ed=n("labels"),zd=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Hs=a("code"),Fd=n("ignore_index"),qd=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Ks=a("code"),Pd=n("only_label_first_subword"),Cd=n(" set to "),Xs=a("code"),jd=n("False"),Id=n("."),Pr=p(),v(Jo.$$.fragment),Cr=p(),Mn=a("p"),Ys=a("strong"),Dd=n("Use case 4: visual question answering (inference), apply_ocr=True"),jr=p(),$n=a("p"),Od=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Ir=p(),v(et.$$.fragment),Dr=p(),En=a("p"),Zs=a("strong"),Ad=n("Use case 5: visual question answering (inference), apply_ocr=False"),Or=p(),zn=a("p"),Nd=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Ar=p(),v(ot.$$.fragment),Nr=p(),$e=a("h2"),Ge=a("a"),Js=a("span"),v(tt.$$.fragment),Sd=p(),ea=a("span"),Rd=n("LayoutLMv2Config"),Sr=p(),K=a("div"),v(nt.$$.fragment),Wd=p(),Ee=a("p"),Ud=n("This is the configuration class to store the configuration of a "),Fn=a("a"),Bd=n("LayoutLMv2Model"),Vd=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),st=a("a"),Qd=n("microsoft/layoutlmv2-base-uncased"),Gd=n(" architecture."),Hd=p(),ze=a("p"),Kd=n("Configuration objects inherit from "),qn=a("a"),Xd=n("PretrainedConfig"),Yd=n(` and can be used to control the model outputs. Read the
documentation from `),Pn=a("a"),Zd=n("PretrainedConfig"),Jd=n(" for more information."),ep=p(),v(He.$$.fragment),Rr=p(),Fe=a("h2"),Ke=a("a"),oa=a("span"),v(at.$$.fragment),op=p(),ta=a("span"),tp=n("LayoutLMv2FeatureExtractor"),Wr=p(),X=a("div"),v(rt.$$.fragment),np=p(),na=a("p"),sp=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),ap=p(),it=a("p"),rp=n("This feature extractor inherits from "),sa=a("code"),ip=n("PreTrainedFeatureExtractor()"),lp=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),cp=p(),ge=a("div"),v(lt.$$.fragment),dp=p(),aa=a("p"),pp=n("Main method to prepare for the model one or several image(s)."),up=p(),v(Xe.$$.fragment),Ur=p(),qe=a("h2"),Ye=a("a"),ra=a("span"),v(ct.$$.fragment),mp=p(),ia=a("span"),hp=n("LayoutLMv2Tokenizer"),Br=p(),A=a("div"),v(dt.$$.fragment),fp=p(),N=a("p"),gp=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Cn=a("a"),_p=n("LayoutLMv2Tokenizer"),vp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),la=a("code"),yp=n("input_ids"),bp=n(", "),ca=a("code"),Lp=n("attention_mask"),kp=n(", "),da=a("code"),wp=n("token_type_ids"),xp=n(", "),pa=a("code"),Tp=n("bbox"),Mp=n(`, and
optional `),ua=a("code"),$p=n("labels"),Ep=n(" (for token classification)."),zp=p(),pt=a("p"),Fp=n("This tokenizer inherits from "),jn=a("a"),qp=n("PreTrainedTokenizer"),Pp=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Cp=p(),In=a("p"),Dn=a("a"),jp=n("LayoutLMv2Tokenizer"),Ip=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Dp=p(),Ze=a("div"),v(ut.$$.fragment),Op=p(),ma=a("p"),Ap=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Np=p(),On=a("div"),v(mt.$$.fragment),Vr=p(),Pe=a("h2"),Je=a("a"),ha=a("span"),v(ht.$$.fragment),Sp=p(),fa=a("span"),Rp=n("LayoutLMv2TokenizerFast"),Qr=p(),Y=a("div"),v(ft.$$.fragment),Wp=p(),gt=a("p"),Up=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),ga=a("em"),Bp=n("tokenizers"),Vp=n(" library). Based on WordPiece."),Qp=p(),_t=a("p"),Gp=n("This tokenizer inherits from "),An=a("a"),Hp=n("PreTrainedTokenizerFast"),Kp=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xp=p(),eo=a("div"),v(vt.$$.fragment),Yp=p(),_a=a("p"),Zp=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Gr=p(),Ce=a("h2"),oo=a("a"),va=a("span"),v(yt.$$.fragment),Jp=p(),ya=a("span"),eu=n("LayoutLMv2Processor"),Hr=p(),W=a("div"),v(bt.$$.fragment),ou=p(),ba=a("p"),tu=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),nu=p(),Nn=a("p"),Sn=a("a"),su=n("LayoutLMv2Processor"),au=n(" offers all the functionalities you need to prepare data for the model."),ru=p(),q=a("p"),iu=n("It first uses "),Rn=a("a"),lu=n("LayoutLMv2FeatureExtractor"),cu=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Wn=a("a"),du=n("LayoutLMv2Tokenizer"),pu=n(` or
`),Un=a("a"),uu=n("LayoutLMv2TokenizerFast"),mu=n(", which turns the words and bounding boxes into token-level "),La=a("code"),hu=n("input_ids"),fu=n(`,
`),ka=a("code"),gu=n("attention_mask"),_u=n(", "),wa=a("code"),vu=n("token_type_ids"),yu=n(", "),xa=a("code"),bu=n("bbox"),Lu=n(". Optionally, one can provide integer "),Ta=a("code"),ku=n("word_labels"),wu=n(`, which are turned
into token-level `),Ma=a("code"),xu=n("labels"),Tu=n(" for token classification tasks (such as FUNSD, CORD)."),Mu=p(),_e=a("div"),v(Lt.$$.fragment),$u=p(),$=a("p"),Eu=n("This method first forwards the "),$a=a("code"),zu=n("images"),Fu=n(" argument to "),kt=a("a"),Ea=a("strong"),qu=n("call"),Pu=n("()"),Cu=n(`. In case
`),Bn=a("a"),ju=n("LayoutLMv2FeatureExtractor"),Iu=n(" was initialized with "),za=a("code"),Du=n("apply_ocr"),Ou=n(" set to "),Fa=a("code"),Au=n("True"),Nu=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),wt=a("a"),qa=a("strong"),Su=n("call"),Ru=n("()"),Wu=n(` and returns the output,
together with resized `),Pa=a("code"),Uu=n("images"),Bu=n(". In case "),Vn=a("a"),Vu=n("LayoutLMv2FeatureExtractor"),Qu=n(" was initialized with "),Ca=a("code"),Gu=n("apply_ocr"),Hu=n(` set to
`),ja=a("code"),Ku=n("False"),Xu=n(", it passes the words ("),Ia=a("code"),Yu=n("text"),Zu=n("/"),Da=a("code"),Ju=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),em=n("."),om=p(),Oa=a("p"),tm=n("Please refer to the docstring of the above two methods for more information."),Kr=p(),je=a("h2"),to=a("a"),Aa=a("span"),v(xt.$$.fragment),nm=p(),Na=a("span"),sm=n("LayoutLMv2Model"),Xr=p(),le=a("div"),v(Tt.$$.fragment),am=p(),Mt=a("p"),rm=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$t=a("a"),im=n("torch.nn.Module"),lm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cm=p(),te=a("div"),v(Et.$$.fragment),dm=p(),Ie=a("p"),pm=n("The "),Qn=a("a"),um=n("LayoutLMv2Model"),mm=n(" forward method, overrides the "),Sa=a("code"),hm=n("__call__"),fm=n(" special method."),gm=p(),v(no.$$.fragment),_m=p(),v(so.$$.fragment),Yr=p(),De=a("h2"),ao=a("a"),Ra=a("span"),v(zt.$$.fragment),vm=p(),Wa=a("span"),ym=n("LayoutLMv2ForSequenceClassification"),Zr=p(),Z=a("div"),v(Ft.$$.fragment),bm=p(),qt=a("p"),Lm=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Pt=a("a"),km=n("RVL-CDIP"),wm=n(" dataset."),xm=p(),Ct=a("p"),Tm=n("This model is a PyTorch "),jt=a("a"),Mm=n("torch.nn.Module"),$m=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Em=p(),ne=a("div"),v(It.$$.fragment),zm=p(),Oe=a("p"),Fm=n("The "),Gn=a("a"),qm=n("LayoutLMv2ForSequenceClassification"),Pm=n(" forward method, overrides the "),Ua=a("code"),Cm=n("__call__"),jm=n(" special method."),Im=p(),v(ro.$$.fragment),Dm=p(),v(io.$$.fragment),Jr=p(),Ae=a("h2"),lo=a("a"),Ba=a("span"),v(Dt.$$.fragment),Om=p(),Va=a("span"),Am=n("LayoutLMv2ForTokenClassification"),ei=p(),J=a("div"),v(Ot.$$.fragment),Nm=p(),ee=a("p"),Sm=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),At=a("a"),Rm=n("FUNSD"),Wm=n(", "),Nt=a("a"),Um=n("SROIE"),Bm=n(`,
`),St=a("a"),Vm=n("CORD"),Qm=n(" and "),Rt=a("a"),Gm=n("Kleister-NDA"),Hm=n("."),Km=p(),Wt=a("p"),Xm=n("This model is a PyTorch "),Ut=a("a"),Ym=n("torch.nn.Module"),Zm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jm=p(),se=a("div"),v(Bt.$$.fragment),eh=p(),Ne=a("p"),oh=n("The "),Hn=a("a"),th=n("LayoutLMv2ForTokenClassification"),nh=n(" forward method, overrides the "),Qa=a("code"),sh=n("__call__"),ah=n(" special method."),rh=p(),v(co.$$.fragment),ih=p(),v(po.$$.fragment),oi=p(),Se=a("h2"),uo=a("a"),Ga=a("span"),v(Vt.$$.fragment),lh=p(),Ha=a("span"),ch=n("LayoutLMv2ForQuestionAnswering"),ti=p(),oe=a("div"),v(Qt.$$.fragment),dh=p(),ce=a("p"),ph=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Gt=a("a"),uh=n("DocVQA"),mh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Ka=a("code"),hh=n("span start logits"),fh=n(" and "),Xa=a("code"),gh=n("span end logits"),_h=n(")."),vh=p(),Ht=a("p"),yh=n("This model is a PyTorch "),Kt=a("a"),bh=n("torch.nn.Module"),Lh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kh=p(),ae=a("div"),v(Xt.$$.fragment),wh=p(),Re=a("p"),xh=n("The "),Kn=a("a"),Th=n("LayoutLMv2ForQuestionAnswering"),Mh=n(" forward method, overrides the "),Ya=a("code"),$h=n("__call__"),Eh=n(" special method."),zh=p(),v(mo.$$.fragment),Fh=p(),v(ho.$$.fragment),this.h()},l(o){const c=Y_('[data-svelte="svelte-1phssyn"]',document.head);h=r(c,"META",{name:!0,content:!0}),c.forEach(t),T=u(o),_=r(o,"H1",{class:!0});var Yt=i(_);g=r(Yt,"A",{id:!0,class:!0,href:!0});var Za=i(g);x=r(Za,"SPAN",{});var Ja=i(x);y(d.$$.fragment,Ja),Ja.forEach(t),Za.forEach(t),f=u(Yt),O=r(Yt,"SPAN",{});var er=i(O);ji=s(er,"LayoutLMV2"),er.forEach(t),Yt.forEach(t),ar=u(o),xe=r(o,"H2",{class:!0});var Zt=i(xe);Ue=r(Zt,"A",{id:!0,class:!0,href:!0});var or=i(Ue);us=r(or,"SPAN",{});var tr=i(us);y(Mo.$$.fragment,tr),tr.forEach(t),or.forEach(t),Ii=u(Zt),ms=r(Zt,"SPAN",{});var nr=i(ms);Di=s(nr,"Overview"),nr.forEach(t),Zt.forEach(t),rr=u(o),pe=r(o,"P",{});var We=i(pe);Oi=s(We,"The LayoutLMV2 model was proposed in "),$o=r(We,"A",{href:!0,rel:!0});var sr=i($o);Ai=s(sr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),sr.forEach(t),Ni=s(We,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),Jt=r(We,"A",{href:!0});var Ih=i(Jt);Si=s(Ih,"LayoutLM"),Ih.forEach(t),Ri=s(We,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),We.forEach(t),ir=u(o),ue=r(o,"UL",{});var Xn=i(ue);H=r(Xn,"LI",{});var ve=i(H);Wi=s(ve,"information extraction from scanned documents: the "),Eo=r(ve,"A",{href:!0,rel:!0});var Dh=i(Eo);Ui=s(Dh,"FUNSD"),Dh.forEach(t),Bi=s(ve,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zo=r(ve,"A",{href:!0,rel:!0});var Oh=i(zo);Vi=s(Oh,"CORD"),Oh.forEach(t),Qi=s(ve,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Fo=r(ve,"A",{href:!0,rel:!0});var Ah=i(Fo);Gi=s(Ah,"SROIE"),Ah.forEach(t),Hi=s(ve,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),qo=r(ve,"A",{href:!0,rel:!0});var Nh=i(qo);Ki=s(Nh,"Kleister-NDA"),Nh.forEach(t),Xi=s(ve,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),ve.forEach(t),Yi=u(Xn),Po=r(Xn,"LI",{});var si=i(Po);Zi=s(si,"document image classification: the "),Co=r(si,"A",{href:!0,rel:!0});var Sh=i(Co);Ji=s(Sh,"RVL-CDIP"),Sh.forEach(t),el=s(si,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),si.forEach(t),ol=u(Xn),jo=r(Xn,"LI",{});var ai=i(jo);tl=s(ai,"document visual question answering: the "),Io=r(ai,"A",{href:!0,rel:!0});var Rh=i(Io);nl=s(Rh,"DocVQA"),Rh.forEach(t),sl=s(ai,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),ai.forEach(t),Xn.forEach(t),lr=u(o),en=r(o,"P",{});var Wh=i(en);al=s(Wh,"The abstract from the paper is the following:"),Wh.forEach(t),cr=u(o),on=r(o,"P",{});var Uh=i(on);hs=r(Uh,"EM",{});var Bh=i(hs);rl=s(Bh,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),Bh.forEach(t),Uh.forEach(t),dr=u(o),tn=r(o,"P",{});var Vh=i(tn);il=s(Vh,"Tips:"),Vh.forEach(t),pr=u(o),U=r(o,"UL",{});var ye=i(U);fs=r(ye,"LI",{});var Qh=i(fs);ll=s(Qh,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Qh.forEach(t),cl=u(ye),Do=r(ye,"LI",{});var ri=i(Do);dl=s(ri,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Oo=r(ri,"A",{href:!0,rel:!0});var Gh=i(Oo);pl=s(Gh,"paper"),Gh.forEach(t),ul=s(ri,"."),ri.forEach(t),ml=u(ye),Ao=r(ye,"LI",{});var ii=i(Ao);hl=s(ii,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),No=r(ii,"A",{href:!0,rel:!0});var Hh=i(No);fl=s(Hh,"here"),Hh.forEach(t),gl=s(ii,"."),ii.forEach(t),_l=u(ye),Te=r(ye,"LI",{});var Yn=i(Te);vl=s(Yn,"LayoutLMv2 uses Facebook AI\u2019s "),So=r(Yn,"A",{href:!0,rel:!0});var Kh=i(So);yl=s(Kh,"Detectron2"),Kh.forEach(t),bl=s(Yn,` package for its visual
backbone. See `),Ro=r(Yn,"A",{href:!0,rel:!0});var Xh=i(Ro);Ll=s(Xh,"this link"),Xh.forEach(t),kl=s(Yn,` for installation
instructions.`),Yn.forEach(t),wl=u(ye),M=r(ye,"LI",{});var z=i(M);xl=s(z,"In addition to "),gs=r(z,"CODE",{});var Yh=i(gs);Tl=s(Yh,"input_ids"),Yh.forEach(t),Ml=s(z,", "),nn=r(z,"A",{href:!0});var Zh=i(nn);$l=s(Zh,"forward()"),Zh.forEach(t),El=s(z,` expects 2 additional inputs, namely
`),_s=r(z,"CODE",{});var Jh=i(_s);zl=s(Jh,"image"),Jh.forEach(t),Fl=s(z," and "),vs=r(z,"CODE",{});var ef=i(vs);ql=s(ef,"bbox"),ef.forEach(t),Pl=s(z,". The "),ys=r(z,"CODE",{});var of=i(ys);Cl=s(of,"image"),of.forEach(t),jl=s(z,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),bs=r(z,"CODE",{});var tf=i(bs);Il=s(tf,"image"),tf.forEach(t),Dl=s(z,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Ls=r(z,"CODE",{});var nf=i(Ls);Ol=s(nf,"torch.Tensor"),nf.forEach(t),Al=s(z," or a "),ks=r(z,"CODE",{});var sf=i(ks);Nl=s(sf,"Detectron2.structures.ImageList"),sf.forEach(t),Sl=s(z,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ws=r(z,"CODE",{});var af=i(ws);Rl=s(af,"bbox"),af.forEach(t),Wl=s(z,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),sn=r(z,"A",{href:!0});var rf=i(sn);Ul=s(rf,"LayoutLMModel"),rf.forEach(t),Bl=s(z,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Wo=r(z,"A",{href:!0,rel:!0});var lf=i(Wo);Vl=s(lf,"Tesseract"),lf.forEach(t),Ql=s(z," (there\u2019s a "),Uo=r(z,"A",{href:!0,rel:!0});var cf=i(Uo);Gl=s(cf,`Python
wrapper`),cf.forEach(t),Hl=s(z,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),z.forEach(t),ye.forEach(t),ur=u(o),y(Bo.$$.fragment,o),mr=u(o),me=r(o,"P",{});var Zn=i(me);Kl=s(Zn,"Here, "),xs=r(Zn,"CODE",{});var df=i(xs);Xl=s(df,"width"),df.forEach(t),Yl=s(Zn," and "),Ts=r(Zn,"CODE",{});var pf=i(Ts);Zl=s(pf,"height"),pf.forEach(t),Jl=s(Zn,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Zn.forEach(t),hr=u(o),y(Vo.$$.fragment,o),fr=u(o),Be=r(o,"P",{});var li=i(Be);ec=s(li,"However, this model includes a brand new "),an=r(li,"A",{href:!0});var uf=i(an);oc=s(uf,"LayoutLMv2Processor"),uf.forEach(t),tc=s(li,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),li.forEach(t),gr=u(o),he=r(o,"UL",{});var Jn=i(he);I=r(Jn,"LI",{});var S=i(I);nc=s(S,"Internally, "),rn=r(S,"A",{href:!0});var mf=i(rn);sc=s(mf,"LayoutLMv2Model"),mf.forEach(t),ac=s(S," will send the "),Ms=r(S,"CODE",{});var hf=i(Ms);rc=s(hf,"image"),hf.forEach(t),ic=s(S,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),$s=r(S,"CODE",{});var ff=i($s);lc=s(ff,"image_feature_pool_shape"),ff.forEach(t),cc=s(S,` attribute of
`),ln=r(S,"A",{href:!0});var gf=i(ln);dc=s(gf,"LayoutLMv2Config"),gf.forEach(t),pc=s(S,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Es=r(S,"CODE",{});var _f=i(Es);uc=s(_f,"seq_length"),_f.forEach(t),mc=s(S," + "),zs=r(S,"CODE",{});var vf=i(zs);hc=s(vf,"image_feature_pool_shape[0]"),vf.forEach(t),fc=s(S,` *
`),Fs=r(S,"CODE",{});var yf=i(Fs);gc=s(yf,"config.image_feature_pool_shape[1]"),yf.forEach(t),_c=s(S,"."),S.forEach(t),vc=u(Jn),Qo=r(Jn,"LI",{});var ci=i(Qo);yc=s(ci,"When calling "),cn=r(ci,"A",{href:!0});var bf=i(cn);bc=s(bf,"from_pretrained()"),bf.forEach(t),Lc=s(ci,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),ci.forEach(t),kc=u(Jn),Go=r(Jn,"LI",{});var di=i(Go);wc=s(di,"If you want to train the model in a distributed environment, make sure to call "),qs=r(di,"CODE",{});var Lf=i(qs);xc=s(Lf,"synchronize_batch_norm"),Lf.forEach(t),Tc=s(di,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),di.forEach(t),Jn.forEach(t),_r=u(o),Ve=r(o,"P",{});var pi=i(Ve);Mc=s(pi,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),dn=r(pi,"A",{href:!0});var kf=i(dn);$c=s(kf,"LayoutXLM\u2019s documentation page"),kf.forEach(t),Ec=s(pi,"."),pi.forEach(t),vr=u(o),Me=r(o,"H2",{class:!0});var ui=i(Me);Qe=r(ui,"A",{id:!0,class:!0,href:!0});var wf=i(Qe);Ps=r(wf,"SPAN",{});var xf=i(Ps);y(Ho.$$.fragment,xf),xf.forEach(t),wf.forEach(t),zc=u(ui),Cs=r(ui,"SPAN",{});var Tf=i(Cs);Fc=s(Tf,"Usage: LayoutLMv2Processor"),Tf.forEach(t),ui.forEach(t),yr=u(o),B=r(o,"P",{});var be=i(B);qc=s(be,"The easiest way to prepare data for the model is to use "),pn=r(be,"A",{href:!0});var Mf=i(pn);Pc=s(Mf,"LayoutLMv2Processor"),Mf.forEach(t),Cc=s(be,`, which internally
combines a feature extractor (`),un=r(be,"A",{href:!0});var $f=i(un);jc=s($f,"LayoutLMv2FeatureExtractor"),$f.forEach(t),Ic=s(be,`) and a tokenizer
(`),mn=r(be,"A",{href:!0});var Ef=i(mn);Dc=s(Ef,"LayoutLMv2Tokenizer"),Ef.forEach(t),Oc=s(be," or "),hn=r(be,"A",{href:!0});var zf=i(hn);Ac=s(zf,"LayoutLMv2TokenizerFast"),zf.forEach(t),Nc=s(be,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),be.forEach(t),br=u(o),y(Ko.$$.fragment,o),Lr=u(o),E=r(o,"P",{});var C=i(E);Sc=s(C,"In short, one can provide a document image (and possibly additional data) to "),fn=r(C,"A",{href:!0});var Ff=i(fn);Rc=s(Ff,"LayoutLMv2Processor"),Ff.forEach(t),Wc=s(C,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),gn=r(C,"A",{href:!0});var qf=i(gn);Uc=s(qf,"LayoutLMv2FeatureExtractor"),qf.forEach(t),Bc=s(C,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),js=r(C,"CODE",{});var Pf=i(js);Vc=s(Pf,"image"),Pf.forEach(t),Qc=s(C,` input. The words and
normalized bounding boxes are then provided to `),_n=r(C,"A",{href:!0});var Cf=i(_n);Gc=s(Cf,"LayoutLMv2Tokenizer"),Cf.forEach(t),Hc=s(C,` or
`),vn=r(C,"A",{href:!0});var jf=i(vn);Kc=s(jf,"LayoutLMv2TokenizerFast"),jf.forEach(t),Xc=s(C,", which converts them to token-level "),Is=r(C,"CODE",{});var If=i(Is);Yc=s(If,"input_ids"),If.forEach(t),Zc=s(C,`,
`),Ds=r(C,"CODE",{});var Df=i(Ds);Jc=s(Df,"attention_mask"),Df.forEach(t),ed=s(C,", "),Os=r(C,"CODE",{});var Of=i(Os);od=s(Of,"token_type_ids"),Of.forEach(t),td=s(C,", "),As=r(C,"CODE",{});var Af=i(As);nd=s(Af,"bbox"),Af.forEach(t),sd=s(C,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Ns=r(C,"CODE",{});var Nf=i(Ns);ad=s(Nf,"labels"),Nf.forEach(t),rd=s(C,"."),C.forEach(t),kr=u(o),R=r(o,"P",{});var de=i(R);yn=r(de,"A",{href:!0});var Sf=i(yn);id=s(Sf,"LayoutLMv2Processor"),Sf.forEach(t),ld=s(de," uses "),Xo=r(de,"A",{href:!0,rel:!0});var Rf=i(Xo);cd=s(Rf,"PyTesseract"),Rf.forEach(t),dd=s(de,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),bn=r(de,"A",{href:!0});var Wf=i(bn);pd=s(Wf,"LayoutLMv2FeatureExtractor"),Wf.forEach(t),ud=s(de," with "),Ss=r(de,"CODE",{});var Uf=i(Ss);md=s(Uf,"apply_ocr"),Uf.forEach(t),hd=s(de," set to "),Rs=r(de,"CODE",{});var Bf=i(Rs);fd=s(Bf,"False"),Bf.forEach(t),gd=s(de,"."),de.forEach(t),wr=u(o),Ln=r(o,"P",{});var Vf=i(Ln);_d=s(Vf,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Vf.forEach(t),xr=u(o),kn=r(o,"P",{});var Qf=i(kn);Ws=r(Qf,"STRONG",{});var Gf=i(Ws);vd=s(Gf,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Gf.forEach(t),Qf.forEach(t),Tr=u(o),wn=r(o,"P",{});var Hf=i(wn);yd=s(Hf,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Hf.forEach(t),Mr=u(o),y(Yo.$$.fragment,o),$r=u(o),xn=r(o,"P",{});var Kf=i(xn);Us=r(Kf,"STRONG",{});var Xf=i(Us);bd=s(Xf,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Xf.forEach(t),Kf.forEach(t),Er=u(o),fe=r(o,"P",{});var es=i(fe);Ld=s(es,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Bs=r(es,"CODE",{});var Yf=i(Bs);kd=s(Yf,"apply_ocr"),Yf.forEach(t),wd=s(es,` set to
`),Vs=r(es,"CODE",{});var Zf=i(Vs);xd=s(Zf,"False"),Zf.forEach(t),Td=s(es,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),es.forEach(t),zr=u(o),y(Zo.$$.fragment,o),Fr=u(o),Tn=r(o,"P",{});var Jf=i(Tn);Qs=r(Jf,"STRONG",{});var eg=i(Qs);Md=s(eg,"Use case 3: token classification (training), apply_ocr=False"),eg.forEach(t),Jf.forEach(t),qr=u(o),V=r(o,"P",{});var Le=i(V);$d=s(Le,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Gs=r(Le,"CODE",{});var og=i(Gs);Ed=s(og,"labels"),og.forEach(t),zd=s(Le,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Hs=r(Le,"CODE",{});var tg=i(Hs);Fd=s(tg,"ignore_index"),tg.forEach(t),qd=s(Le,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Ks=r(Le,"CODE",{});var ng=i(Ks);Pd=s(ng,"only_label_first_subword"),ng.forEach(t),Cd=s(Le," set to "),Xs=r(Le,"CODE",{});var sg=i(Xs);jd=s(sg,"False"),sg.forEach(t),Id=s(Le,"."),Le.forEach(t),Pr=u(o),y(Jo.$$.fragment,o),Cr=u(o),Mn=r(o,"P",{});var ag=i(Mn);Ys=r(ag,"STRONG",{});var rg=i(Ys);Dd=s(rg,"Use case 4: visual question answering (inference), apply_ocr=True"),rg.forEach(t),ag.forEach(t),jr=u(o),$n=r(o,"P",{});var ig=i($n);Od=s(ig,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),ig.forEach(t),Ir=u(o),y(et.$$.fragment,o),Dr=u(o),En=r(o,"P",{});var lg=i(En);Zs=r(lg,"STRONG",{});var cg=i(Zs);Ad=s(cg,"Use case 5: visual question answering (inference), apply_ocr=False"),cg.forEach(t),lg.forEach(t),Or=u(o),zn=r(o,"P",{});var dg=i(zn);Nd=s(dg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),dg.forEach(t),Ar=u(o),y(ot.$$.fragment,o),Nr=u(o),$e=r(o,"H2",{class:!0});var mi=i($e);Ge=r(mi,"A",{id:!0,class:!0,href:!0});var pg=i(Ge);Js=r(pg,"SPAN",{});var ug=i(Js);y(tt.$$.fragment,ug),ug.forEach(t),pg.forEach(t),Sd=u(mi),ea=r(mi,"SPAN",{});var mg=i(ea);Rd=s(mg,"LayoutLMv2Config"),mg.forEach(t),mi.forEach(t),Sr=u(o),K=r(o,"DIV",{class:!0});var fo=i(K);y(nt.$$.fragment,fo),Wd=u(fo),Ee=r(fo,"P",{});var os=i(Ee);Ud=s(os,"This is the configuration class to store the configuration of a "),Fn=r(os,"A",{href:!0});var hg=i(Fn);Bd=s(hg,"LayoutLMv2Model"),hg.forEach(t),Vd=s(os,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),st=r(os,"A",{href:!0,rel:!0});var fg=i(st);Qd=s(fg,"microsoft/layoutlmv2-base-uncased"),fg.forEach(t),Gd=s(os," architecture."),os.forEach(t),Hd=u(fo),ze=r(fo,"P",{});var ts=i(ze);Kd=s(ts,"Configuration objects inherit from "),qn=r(ts,"A",{href:!0});var gg=i(qn);Xd=s(gg,"PretrainedConfig"),gg.forEach(t),Yd=s(ts,` and can be used to control the model outputs. Read the
documentation from `),Pn=r(ts,"A",{href:!0});var _g=i(Pn);Zd=s(_g,"PretrainedConfig"),_g.forEach(t),Jd=s(ts," for more information."),ts.forEach(t),ep=u(fo),y(He.$$.fragment,fo),fo.forEach(t),Rr=u(o),Fe=r(o,"H2",{class:!0});var hi=i(Fe);Ke=r(hi,"A",{id:!0,class:!0,href:!0});var vg=i(Ke);oa=r(vg,"SPAN",{});var yg=i(oa);y(at.$$.fragment,yg),yg.forEach(t),vg.forEach(t),op=u(hi),ta=r(hi,"SPAN",{});var bg=i(ta);tp=s(bg,"LayoutLMv2FeatureExtractor"),bg.forEach(t),hi.forEach(t),Wr=u(o),X=r(o,"DIV",{class:!0});var go=i(X);y(rt.$$.fragment,go),np=u(go),na=r(go,"P",{});var Lg=i(na);sp=s(Lg,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Lg.forEach(t),ap=u(go),it=r(go,"P",{});var fi=i(it);rp=s(fi,"This feature extractor inherits from "),sa=r(fi,"CODE",{});var kg=i(sa);ip=s(kg,"PreTrainedFeatureExtractor()"),kg.forEach(t),lp=s(fi,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),fi.forEach(t),cp=u(go),ge=r(go,"DIV",{class:!0});var ns=i(ge);y(lt.$$.fragment,ns),dp=u(ns),aa=r(ns,"P",{});var wg=i(aa);pp=s(wg,"Main method to prepare for the model one or several image(s)."),wg.forEach(t),up=u(ns),y(Xe.$$.fragment,ns),ns.forEach(t),go.forEach(t),Ur=u(o),qe=r(o,"H2",{class:!0});var gi=i(qe);Ye=r(gi,"A",{id:!0,class:!0,href:!0});var xg=i(Ye);ra=r(xg,"SPAN",{});var Tg=i(ra);y(ct.$$.fragment,Tg),Tg.forEach(t),xg.forEach(t),mp=u(gi),ia=r(gi,"SPAN",{});var Mg=i(ia);hp=s(Mg,"LayoutLMv2Tokenizer"),Mg.forEach(t),gi.forEach(t),Br=u(o),A=r(o,"DIV",{class:!0});var re=i(A);y(dt.$$.fragment,re),fp=u(re),N=r(re,"P",{});var Q=i(N);gp=s(Q,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Cn=r(Q,"A",{href:!0});var $g=i(Cn);_p=s($g,"LayoutLMv2Tokenizer"),$g.forEach(t),vp=s(Q,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),la=r(Q,"CODE",{});var Eg=i(la);yp=s(Eg,"input_ids"),Eg.forEach(t),bp=s(Q,", "),ca=r(Q,"CODE",{});var zg=i(ca);Lp=s(zg,"attention_mask"),zg.forEach(t),kp=s(Q,", "),da=r(Q,"CODE",{});var Fg=i(da);wp=s(Fg,"token_type_ids"),Fg.forEach(t),xp=s(Q,", "),pa=r(Q,"CODE",{});var qg=i(pa);Tp=s(qg,"bbox"),qg.forEach(t),Mp=s(Q,`, and
optional `),ua=r(Q,"CODE",{});var Pg=i(ua);$p=s(Pg,"labels"),Pg.forEach(t),Ep=s(Q," (for token classification)."),Q.forEach(t),zp=u(re),pt=r(re,"P",{});var _i=i(pt);Fp=s(_i,"This tokenizer inherits from "),jn=r(_i,"A",{href:!0});var Cg=i(jn);qp=s(Cg,"PreTrainedTokenizer"),Cg.forEach(t),Pp=s(_i,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_i.forEach(t),Cp=u(re),In=r(re,"P",{});var qh=i(In);Dn=r(qh,"A",{href:!0});var jg=i(Dn);jp=s(jg,"LayoutLMv2Tokenizer"),jg.forEach(t),Ip=s(qh,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),qh.forEach(t),Dp=u(re),Ze=r(re,"DIV",{class:!0});var vi=i(Ze);y(ut.$$.fragment,vi),Op=u(vi),ma=r(vi,"P",{});var Ig=i(ma);Ap=s(Ig,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ig.forEach(t),vi.forEach(t),Np=u(re),On=r(re,"DIV",{class:!0});var Dg=i(On);y(mt.$$.fragment,Dg),Dg.forEach(t),re.forEach(t),Vr=u(o),Pe=r(o,"H2",{class:!0});var yi=i(Pe);Je=r(yi,"A",{id:!0,class:!0,href:!0});var Og=i(Je);ha=r(Og,"SPAN",{});var Ag=i(ha);y(ht.$$.fragment,Ag),Ag.forEach(t),Og.forEach(t),Sp=u(yi),fa=r(yi,"SPAN",{});var Ng=i(fa);Rp=s(Ng,"LayoutLMv2TokenizerFast"),Ng.forEach(t),yi.forEach(t),Qr=u(o),Y=r(o,"DIV",{class:!0});var _o=i(Y);y(ft.$$.fragment,_o),Wp=u(_o),gt=r(_o,"P",{});var bi=i(gt);Up=s(bi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),ga=r(bi,"EM",{});var Sg=i(ga);Bp=s(Sg,"tokenizers"),Sg.forEach(t),Vp=s(bi," library). Based on WordPiece."),bi.forEach(t),Qp=u(_o),_t=r(_o,"P",{});var Li=i(_t);Gp=s(Li,"This tokenizer inherits from "),An=r(Li,"A",{href:!0});var Rg=i(An);Hp=s(Rg,"PreTrainedTokenizerFast"),Rg.forEach(t),Kp=s(Li,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Li.forEach(t),Xp=u(_o),eo=r(_o,"DIV",{class:!0});var ki=i(eo);y(vt.$$.fragment,ki),Yp=u(ki),_a=r(ki,"P",{});var Wg=i(_a);Zp=s(Wg,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Wg.forEach(t),ki.forEach(t),_o.forEach(t),Gr=u(o),Ce=r(o,"H2",{class:!0});var wi=i(Ce);oo=r(wi,"A",{id:!0,class:!0,href:!0});var Ug=i(oo);va=r(Ug,"SPAN",{});var Bg=i(va);y(yt.$$.fragment,Bg),Bg.forEach(t),Ug.forEach(t),Jp=u(wi),ya=r(wi,"SPAN",{});var Vg=i(ya);eu=s(Vg,"LayoutLMv2Processor"),Vg.forEach(t),wi.forEach(t),Hr=u(o),W=r(o,"DIV",{class:!0});var ke=i(W);y(bt.$$.fragment,ke),ou=u(ke),ba=r(ke,"P",{});var Qg=i(ba);tu=s(Qg,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),Qg.forEach(t),nu=u(ke),Nn=r(ke,"P",{});var Ph=i(Nn);Sn=r(Ph,"A",{href:!0});var Gg=i(Sn);su=s(Gg,"LayoutLMv2Processor"),Gg.forEach(t),au=s(Ph," offers all the functionalities you need to prepare data for the model."),Ph.forEach(t),ru=u(ke),q=r(ke,"P",{});var j=i(q);iu=s(j,"It first uses "),Rn=r(j,"A",{href:!0});var Hg=i(Rn);lu=s(Hg,"LayoutLMv2FeatureExtractor"),Hg.forEach(t),cu=s(j,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Wn=r(j,"A",{href:!0});var Kg=i(Wn);du=s(Kg,"LayoutLMv2Tokenizer"),Kg.forEach(t),pu=s(j,` or
`),Un=r(j,"A",{href:!0});var Xg=i(Un);uu=s(Xg,"LayoutLMv2TokenizerFast"),Xg.forEach(t),mu=s(j,", which turns the words and bounding boxes into token-level "),La=r(j,"CODE",{});var Yg=i(La);hu=s(Yg,"input_ids"),Yg.forEach(t),fu=s(j,`,
`),ka=r(j,"CODE",{});var Zg=i(ka);gu=s(Zg,"attention_mask"),Zg.forEach(t),_u=s(j,", "),wa=r(j,"CODE",{});var Jg=i(wa);vu=s(Jg,"token_type_ids"),Jg.forEach(t),yu=s(j,", "),xa=r(j,"CODE",{});var e_=i(xa);bu=s(e_,"bbox"),e_.forEach(t),Lu=s(j,". Optionally, one can provide integer "),Ta=r(j,"CODE",{});var o_=i(Ta);ku=s(o_,"word_labels"),o_.forEach(t),wu=s(j,`, which are turned
into token-level `),Ma=r(j,"CODE",{});var t_=i(Ma);xu=s(t_,"labels"),t_.forEach(t),Tu=s(j," for token classification tasks (such as FUNSD, CORD)."),j.forEach(t),Mu=u(ke),_e=r(ke,"DIV",{class:!0});var ss=i(_e);y(Lt.$$.fragment,ss),$u=u(ss),$=r(ss,"P",{});var F=i($);Eu=s(F,"This method first forwards the "),$a=r(F,"CODE",{});var n_=i($a);zu=s(n_,"images"),n_.forEach(t),Fu=s(F," argument to "),kt=r(F,"A",{href:!0});var Ch=i(kt);Ea=r(Ch,"STRONG",{});var s_=i(Ea);qu=s(s_,"call"),s_.forEach(t),Pu=s(Ch,"()"),Ch.forEach(t),Cu=s(F,`. In case
`),Bn=r(F,"A",{href:!0});var a_=i(Bn);ju=s(a_,"LayoutLMv2FeatureExtractor"),a_.forEach(t),Iu=s(F," was initialized with "),za=r(F,"CODE",{});var r_=i(za);Du=s(r_,"apply_ocr"),r_.forEach(t),Ou=s(F," set to "),Fa=r(F,"CODE",{});var i_=i(Fa);Au=s(i_,"True"),i_.forEach(t),Nu=s(F,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),wt=r(F,"A",{href:!0});var jh=i(wt);qa=r(jh,"STRONG",{});var l_=i(qa);Su=s(l_,"call"),l_.forEach(t),Ru=s(jh,"()"),jh.forEach(t),Wu=s(F,` and returns the output,
together with resized `),Pa=r(F,"CODE",{});var c_=i(Pa);Uu=s(c_,"images"),c_.forEach(t),Bu=s(F,". In case "),Vn=r(F,"A",{href:!0});var d_=i(Vn);Vu=s(d_,"LayoutLMv2FeatureExtractor"),d_.forEach(t),Qu=s(F," was initialized with "),Ca=r(F,"CODE",{});var p_=i(Ca);Gu=s(p_,"apply_ocr"),p_.forEach(t),Hu=s(F,` set to
`),ja=r(F,"CODE",{});var u_=i(ja);Ku=s(u_,"False"),u_.forEach(t),Xu=s(F,", it passes the words ("),Ia=r(F,"CODE",{});var m_=i(Ia);Yu=s(m_,"text"),m_.forEach(t),Zu=s(F,"/"),Da=r(F,"CODE",{});var h_=i(Da);Ju=s(h_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),h_.forEach(t),em=s(F,"."),F.forEach(t),om=u(ss),Oa=r(ss,"P",{});var f_=i(Oa);tm=s(f_,"Please refer to the docstring of the above two methods for more information."),f_.forEach(t),ss.forEach(t),ke.forEach(t),Kr=u(o),je=r(o,"H2",{class:!0});var xi=i(je);to=r(xi,"A",{id:!0,class:!0,href:!0});var g_=i(to);Aa=r(g_,"SPAN",{});var __=i(Aa);y(xt.$$.fragment,__),__.forEach(t),g_.forEach(t),nm=u(xi),Na=r(xi,"SPAN",{});var v_=i(Na);sm=s(v_,"LayoutLMv2Model"),v_.forEach(t),xi.forEach(t),Xr=u(o),le=r(o,"DIV",{class:!0});var as=i(le);y(Tt.$$.fragment,as),am=u(as),Mt=r(as,"P",{});var Ti=i(Mt);rm=s(Ti,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$t=r(Ti,"A",{href:!0,rel:!0});var y_=i($t);im=s(y_,"torch.nn.Module"),y_.forEach(t),lm=s(Ti,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ti.forEach(t),cm=u(as),te=r(as,"DIV",{class:!0});var vo=i(te);y(Et.$$.fragment,vo),dm=u(vo),Ie=r(vo,"P",{});var rs=i(Ie);pm=s(rs,"The "),Qn=r(rs,"A",{href:!0});var b_=i(Qn);um=s(b_,"LayoutLMv2Model"),b_.forEach(t),mm=s(rs," forward method, overrides the "),Sa=r(rs,"CODE",{});var L_=i(Sa);hm=s(L_,"__call__"),L_.forEach(t),fm=s(rs," special method."),rs.forEach(t),gm=u(vo),y(no.$$.fragment,vo),_m=u(vo),y(so.$$.fragment,vo),vo.forEach(t),as.forEach(t),Yr=u(o),De=r(o,"H2",{class:!0});var Mi=i(De);ao=r(Mi,"A",{id:!0,class:!0,href:!0});var k_=i(ao);Ra=r(k_,"SPAN",{});var w_=i(Ra);y(zt.$$.fragment,w_),w_.forEach(t),k_.forEach(t),vm=u(Mi),Wa=r(Mi,"SPAN",{});var x_=i(Wa);ym=s(x_,"LayoutLMv2ForSequenceClassification"),x_.forEach(t),Mi.forEach(t),Zr=u(o),Z=r(o,"DIV",{class:!0});var yo=i(Z);y(Ft.$$.fragment,yo),bm=u(yo),qt=r(yo,"P",{});var $i=i(qt);Lm=s($i,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Pt=r($i,"A",{href:!0,rel:!0});var T_=i(Pt);km=s(T_,"RVL-CDIP"),T_.forEach(t),wm=s($i," dataset."),$i.forEach(t),xm=u(yo),Ct=r(yo,"P",{});var Ei=i(Ct);Tm=s(Ei,"This model is a PyTorch "),jt=r(Ei,"A",{href:!0,rel:!0});var M_=i(jt);Mm=s(M_,"torch.nn.Module"),M_.forEach(t),$m=s(Ei,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ei.forEach(t),Em=u(yo),ne=r(yo,"DIV",{class:!0});var bo=i(ne);y(It.$$.fragment,bo),zm=u(bo),Oe=r(bo,"P",{});var is=i(Oe);Fm=s(is,"The "),Gn=r(is,"A",{href:!0});var $_=i(Gn);qm=s($_,"LayoutLMv2ForSequenceClassification"),$_.forEach(t),Pm=s(is," forward method, overrides the "),Ua=r(is,"CODE",{});var E_=i(Ua);Cm=s(E_,"__call__"),E_.forEach(t),jm=s(is," special method."),is.forEach(t),Im=u(bo),y(ro.$$.fragment,bo),Dm=u(bo),y(io.$$.fragment,bo),bo.forEach(t),yo.forEach(t),Jr=u(o),Ae=r(o,"H2",{class:!0});var zi=i(Ae);lo=r(zi,"A",{id:!0,class:!0,href:!0});var z_=i(lo);Ba=r(z_,"SPAN",{});var F_=i(Ba);y(Dt.$$.fragment,F_),F_.forEach(t),z_.forEach(t),Om=u(zi),Va=r(zi,"SPAN",{});var q_=i(Va);Am=s(q_,"LayoutLMv2ForTokenClassification"),q_.forEach(t),zi.forEach(t),ei=u(o),J=r(o,"DIV",{class:!0});var Lo=i(J);y(Ot.$$.fragment,Lo),Nm=u(Lo),ee=r(Lo,"P",{});var we=i(ee);Sm=s(we,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),At=r(we,"A",{href:!0,rel:!0});var P_=i(At);Rm=s(P_,"FUNSD"),P_.forEach(t),Wm=s(we,", "),Nt=r(we,"A",{href:!0,rel:!0});var C_=i(Nt);Um=s(C_,"SROIE"),C_.forEach(t),Bm=s(we,`,
`),St=r(we,"A",{href:!0,rel:!0});var j_=i(St);Vm=s(j_,"CORD"),j_.forEach(t),Qm=s(we," and "),Rt=r(we,"A",{href:!0,rel:!0});var I_=i(Rt);Gm=s(I_,"Kleister-NDA"),I_.forEach(t),Hm=s(we,"."),we.forEach(t),Km=u(Lo),Wt=r(Lo,"P",{});var Fi=i(Wt);Xm=s(Fi,"This model is a PyTorch "),Ut=r(Fi,"A",{href:!0,rel:!0});var D_=i(Ut);Ym=s(D_,"torch.nn.Module"),D_.forEach(t),Zm=s(Fi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fi.forEach(t),Jm=u(Lo),se=r(Lo,"DIV",{class:!0});var ko=i(se);y(Bt.$$.fragment,ko),eh=u(ko),Ne=r(ko,"P",{});var ls=i(Ne);oh=s(ls,"The "),Hn=r(ls,"A",{href:!0});var O_=i(Hn);th=s(O_,"LayoutLMv2ForTokenClassification"),O_.forEach(t),nh=s(ls," forward method, overrides the "),Qa=r(ls,"CODE",{});var A_=i(Qa);sh=s(A_,"__call__"),A_.forEach(t),ah=s(ls," special method."),ls.forEach(t),rh=u(ko),y(co.$$.fragment,ko),ih=u(ko),y(po.$$.fragment,ko),ko.forEach(t),Lo.forEach(t),oi=u(o),Se=r(o,"H2",{class:!0});var qi=i(Se);uo=r(qi,"A",{id:!0,class:!0,href:!0});var N_=i(uo);Ga=r(N_,"SPAN",{});var S_=i(Ga);y(Vt.$$.fragment,S_),S_.forEach(t),N_.forEach(t),lh=u(qi),Ha=r(qi,"SPAN",{});var R_=i(Ha);ch=s(R_,"LayoutLMv2ForQuestionAnswering"),R_.forEach(t),qi.forEach(t),ti=u(o),oe=r(o,"DIV",{class:!0});var wo=i(oe);y(Qt.$$.fragment,wo),dh=u(wo),ce=r(wo,"P",{});var xo=i(ce);ph=s(xo,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Gt=r(xo,"A",{href:!0,rel:!0});var W_=i(Gt);uh=s(W_,"DocVQA"),W_.forEach(t),mh=s(xo,` (a linear layer on top of the text part of the hidden-states output to
compute `),Ka=r(xo,"CODE",{});var U_=i(Ka);hh=s(U_,"span start logits"),U_.forEach(t),fh=s(xo," and "),Xa=r(xo,"CODE",{});var B_=i(Xa);gh=s(B_,"span end logits"),B_.forEach(t),_h=s(xo,")."),xo.forEach(t),vh=u(wo),Ht=r(wo,"P",{});var Pi=i(Ht);yh=s(Pi,"This model is a PyTorch "),Kt=r(Pi,"A",{href:!0,rel:!0});var V_=i(Kt);bh=s(V_,"torch.nn.Module"),V_.forEach(t),Lh=s(Pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pi.forEach(t),kh=u(wo),ae=r(wo,"DIV",{class:!0});var To=i(ae);y(Xt.$$.fragment,To),wh=u(To),Re=r(To,"P",{});var cs=i(Re);xh=s(cs,"The "),Kn=r(cs,"A",{href:!0});var Q_=i(Kn);Th=s(Q_,"LayoutLMv2ForQuestionAnswering"),Q_.forEach(t),Mh=s(cs," forward method, overrides the "),Ya=r(cs,"CODE",{});var G_=i(Ya);$h=s(G_,"__call__"),G_.forEach(t),Eh=s(cs," special method."),cs.forEach(t),zh=u(To),y(mo.$$.fragment,To),Fh=u(To),y(ho.$$.fragment,To),To.forEach(t),wo.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(dv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(_,"class","relative group"),l(Ue,"id","overview"),l(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ue,"href","#overview"),l(xe,"class","relative group"),l($o,"href","https://arxiv.org/abs/2012.14740"),l($o,"rel","nofollow"),l(Jt,"href","layoutlm"),l(Eo,"href","https://guillaumejaume.github.io/FUNSD/"),l(Eo,"rel","nofollow"),l(zo,"href","https://github.com/clovaai/cord"),l(zo,"rel","nofollow"),l(Fo,"href","https://rrc.cvc.uab.es/?ch=13"),l(Fo,"rel","nofollow"),l(qo,"href","https://github.com/applicaai/kleister-nda"),l(qo,"rel","nofollow"),l(Co,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Co,"rel","nofollow"),l(Io,"href","https://arxiv.org/abs/2007.00398"),l(Io,"rel","nofollow"),l(Oo,"href","https://arxiv.org/abs/2012.14740"),l(Oo,"rel","nofollow"),l(No,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(No,"rel","nofollow"),l(So,"href","https://github.com/facebookresearch/detectron2/"),l(So,"rel","nofollow"),l(Ro,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Ro,"rel","nofollow"),l(nn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(sn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Wo,"href","https://github.com/tesseract-ocr/tesseract"),l(Wo,"rel","nofollow"),l(Uo,"href","https://pypi.org/project/pytesseract/"),l(Uo,"rel","nofollow"),l(an,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(rn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ln,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(cn,"href","/docs/transformers/pr_17038/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(dn,"href","layoutxlm"),l(Qe,"id","usage-layoutlmv2processor"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#usage-layoutlmv2processor"),l(Me,"class","relative group"),l(pn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(un,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(mn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(hn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(fn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(gn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(_n,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(vn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(yn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Xo,"href","https://pypi.org/project/pytesseract/"),l(Xo,"rel","nofollow"),l(bn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Ge,"id","transformers.LayoutLMv2Config"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.LayoutLMv2Config"),l($e,"class","relative group"),l(Fn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(st,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(st,"rel","nofollow"),l(qn,"href","/docs/transformers/pr_17038/en/main_classes/configuration#transformers.PretrainedConfig"),l(Pn,"href","/docs/transformers/pr_17038/en/main_classes/configuration#transformers.PretrainedConfig"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ke,"id","transformers.LayoutLMv2FeatureExtractor"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#transformers.LayoutLMv2FeatureExtractor"),l(Fe,"class","relative group"),l(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ye,"id","transformers.LayoutLMv2Tokenizer"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#transformers.LayoutLMv2Tokenizer"),l(qe,"class","relative group"),l(Cn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(jn,"href","/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Dn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Je,"id","transformers.LayoutLMv2TokenizerFast"),l(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Je,"href","#transformers.LayoutLMv2TokenizerFast"),l(Pe,"class","relative group"),l(An,"href","/docs/transformers/pr_17038/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oo,"id","transformers.LayoutLMv2Processor"),l(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oo,"href","#transformers.LayoutLMv2Processor"),l(Ce,"class","relative group"),l(Sn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Rn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Wn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Un,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(kt,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Bn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(wt,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Vn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(to,"id","transformers.LayoutLMv2Model"),l(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(to,"href","#transformers.LayoutLMv2Model"),l(je,"class","relative group"),l($t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l($t,"rel","nofollow"),l(Qn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ao,"id","transformers.LayoutLMv2ForSequenceClassification"),l(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ao,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(De,"class","relative group"),l(Pt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Pt,"rel","nofollow"),l(jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(jt,"rel","nofollow"),l(Gn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lo,"id","transformers.LayoutLMv2ForTokenClassification"),l(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lo,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Ae,"class","relative group"),l(At,"href","https://guillaumejaume.github.io/FUNSD/"),l(At,"rel","nofollow"),l(Nt,"href","https://rrc.cvc.uab.es/?ch=13"),l(Nt,"rel","nofollow"),l(St,"href","https://github.com/clovaai/cord"),l(St,"rel","nofollow"),l(Rt,"href","https://github.com/applicaai/kleister-nda"),l(Rt,"rel","nofollow"),l(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ut,"rel","nofollow"),l(Hn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(uo,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(uo,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Se,"class","relative group"),l(Gt,"href","https://rrc.cvc.uab.es/?ch=17"),l(Gt,"rel","nofollow"),l(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Kt,"rel","nofollow"),l(Kn,"href","/docs/transformers/pr_17038/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,c){e(document.head,h),m(o,T,c),m(o,_,c),e(_,g),e(g,x),b(d,x,null),e(_,f),e(_,O),e(O,ji),m(o,ar,c),m(o,xe,c),e(xe,Ue),e(Ue,us),b(Mo,us,null),e(xe,Ii),e(xe,ms),e(ms,Di),m(o,rr,c),m(o,pe,c),e(pe,Oi),e(pe,$o),e($o,Ai),e(pe,Ni),e(pe,Jt),e(Jt,Si),e(pe,Ri),m(o,ir,c),m(o,ue,c),e(ue,H),e(H,Wi),e(H,Eo),e(Eo,Ui),e(H,Bi),e(H,zo),e(zo,Vi),e(H,Qi),e(H,Fo),e(Fo,Gi),e(H,Hi),e(H,qo),e(qo,Ki),e(H,Xi),e(ue,Yi),e(ue,Po),e(Po,Zi),e(Po,Co),e(Co,Ji),e(Po,el),e(ue,ol),e(ue,jo),e(jo,tl),e(jo,Io),e(Io,nl),e(jo,sl),m(o,lr,c),m(o,en,c),e(en,al),m(o,cr,c),m(o,on,c),e(on,hs),e(hs,rl),m(o,dr,c),m(o,tn,c),e(tn,il),m(o,pr,c),m(o,U,c),e(U,fs),e(fs,ll),e(U,cl),e(U,Do),e(Do,dl),e(Do,Oo),e(Oo,pl),e(Do,ul),e(U,ml),e(U,Ao),e(Ao,hl),e(Ao,No),e(No,fl),e(Ao,gl),e(U,_l),e(U,Te),e(Te,vl),e(Te,So),e(So,yl),e(Te,bl),e(Te,Ro),e(Ro,Ll),e(Te,kl),e(U,wl),e(U,M),e(M,xl),e(M,gs),e(gs,Tl),e(M,Ml),e(M,nn),e(nn,$l),e(M,El),e(M,_s),e(_s,zl),e(M,Fl),e(M,vs),e(vs,ql),e(M,Pl),e(M,ys),e(ys,Cl),e(M,jl),e(M,bs),e(bs,Il),e(M,Dl),e(M,Ls),e(Ls,Ol),e(M,Al),e(M,ks),e(ks,Nl),e(M,Sl),e(M,ws),e(ws,Rl),e(M,Wl),e(M,sn),e(sn,Ul),e(M,Bl),e(M,Wo),e(Wo,Vl),e(M,Ql),e(M,Uo),e(Uo,Gl),e(M,Hl),m(o,ur,c),b(Bo,o,c),m(o,mr,c),m(o,me,c),e(me,Kl),e(me,xs),e(xs,Xl),e(me,Yl),e(me,Ts),e(Ts,Zl),e(me,Jl),m(o,hr,c),b(Vo,o,c),m(o,fr,c),m(o,Be,c),e(Be,ec),e(Be,an),e(an,oc),e(Be,tc),m(o,gr,c),m(o,he,c),e(he,I),e(I,nc),e(I,rn),e(rn,sc),e(I,ac),e(I,Ms),e(Ms,rc),e(I,ic),e(I,$s),e($s,lc),e(I,cc),e(I,ln),e(ln,dc),e(I,pc),e(I,Es),e(Es,uc),e(I,mc),e(I,zs),e(zs,hc),e(I,fc),e(I,Fs),e(Fs,gc),e(I,_c),e(he,vc),e(he,Qo),e(Qo,yc),e(Qo,cn),e(cn,bc),e(Qo,Lc),e(he,kc),e(he,Go),e(Go,wc),e(Go,qs),e(qs,xc),e(Go,Tc),m(o,_r,c),m(o,Ve,c),e(Ve,Mc),e(Ve,dn),e(dn,$c),e(Ve,Ec),m(o,vr,c),m(o,Me,c),e(Me,Qe),e(Qe,Ps),b(Ho,Ps,null),e(Me,zc),e(Me,Cs),e(Cs,Fc),m(o,yr,c),m(o,B,c),e(B,qc),e(B,pn),e(pn,Pc),e(B,Cc),e(B,un),e(un,jc),e(B,Ic),e(B,mn),e(mn,Dc),e(B,Oc),e(B,hn),e(hn,Ac),e(B,Nc),m(o,br,c),b(Ko,o,c),m(o,Lr,c),m(o,E,c),e(E,Sc),e(E,fn),e(fn,Rc),e(E,Wc),e(E,gn),e(gn,Uc),e(E,Bc),e(E,js),e(js,Vc),e(E,Qc),e(E,_n),e(_n,Gc),e(E,Hc),e(E,vn),e(vn,Kc),e(E,Xc),e(E,Is),e(Is,Yc),e(E,Zc),e(E,Ds),e(Ds,Jc),e(E,ed),e(E,Os),e(Os,od),e(E,td),e(E,As),e(As,nd),e(E,sd),e(E,Ns),e(Ns,ad),e(E,rd),m(o,kr,c),m(o,R,c),e(R,yn),e(yn,id),e(R,ld),e(R,Xo),e(Xo,cd),e(R,dd),e(R,bn),e(bn,pd),e(R,ud),e(R,Ss),e(Ss,md),e(R,hd),e(R,Rs),e(Rs,fd),e(R,gd),m(o,wr,c),m(o,Ln,c),e(Ln,_d),m(o,xr,c),m(o,kn,c),e(kn,Ws),e(Ws,vd),m(o,Tr,c),m(o,wn,c),e(wn,yd),m(o,Mr,c),b(Yo,o,c),m(o,$r,c),m(o,xn,c),e(xn,Us),e(Us,bd),m(o,Er,c),m(o,fe,c),e(fe,Ld),e(fe,Bs),e(Bs,kd),e(fe,wd),e(fe,Vs),e(Vs,xd),e(fe,Td),m(o,zr,c),b(Zo,o,c),m(o,Fr,c),m(o,Tn,c),e(Tn,Qs),e(Qs,Md),m(o,qr,c),m(o,V,c),e(V,$d),e(V,Gs),e(Gs,Ed),e(V,zd),e(V,Hs),e(Hs,Fd),e(V,qd),e(V,Ks),e(Ks,Pd),e(V,Cd),e(V,Xs),e(Xs,jd),e(V,Id),m(o,Pr,c),b(Jo,o,c),m(o,Cr,c),m(o,Mn,c),e(Mn,Ys),e(Ys,Dd),m(o,jr,c),m(o,$n,c),e($n,Od),m(o,Ir,c),b(et,o,c),m(o,Dr,c),m(o,En,c),e(En,Zs),e(Zs,Ad),m(o,Or,c),m(o,zn,c),e(zn,Nd),m(o,Ar,c),b(ot,o,c),m(o,Nr,c),m(o,$e,c),e($e,Ge),e(Ge,Js),b(tt,Js,null),e($e,Sd),e($e,ea),e(ea,Rd),m(o,Sr,c),m(o,K,c),b(nt,K,null),e(K,Wd),e(K,Ee),e(Ee,Ud),e(Ee,Fn),e(Fn,Bd),e(Ee,Vd),e(Ee,st),e(st,Qd),e(Ee,Gd),e(K,Hd),e(K,ze),e(ze,Kd),e(ze,qn),e(qn,Xd),e(ze,Yd),e(ze,Pn),e(Pn,Zd),e(ze,Jd),e(K,ep),b(He,K,null),m(o,Rr,c),m(o,Fe,c),e(Fe,Ke),e(Ke,oa),b(at,oa,null),e(Fe,op),e(Fe,ta),e(ta,tp),m(o,Wr,c),m(o,X,c),b(rt,X,null),e(X,np),e(X,na),e(na,sp),e(X,ap),e(X,it),e(it,rp),e(it,sa),e(sa,ip),e(it,lp),e(X,cp),e(X,ge),b(lt,ge,null),e(ge,dp),e(ge,aa),e(aa,pp),e(ge,up),b(Xe,ge,null),m(o,Ur,c),m(o,qe,c),e(qe,Ye),e(Ye,ra),b(ct,ra,null),e(qe,mp),e(qe,ia),e(ia,hp),m(o,Br,c),m(o,A,c),b(dt,A,null),e(A,fp),e(A,N),e(N,gp),e(N,Cn),e(Cn,_p),e(N,vp),e(N,la),e(la,yp),e(N,bp),e(N,ca),e(ca,Lp),e(N,kp),e(N,da),e(da,wp),e(N,xp),e(N,pa),e(pa,Tp),e(N,Mp),e(N,ua),e(ua,$p),e(N,Ep),e(A,zp),e(A,pt),e(pt,Fp),e(pt,jn),e(jn,qp),e(pt,Pp),e(A,Cp),e(A,In),e(In,Dn),e(Dn,jp),e(In,Ip),e(A,Dp),e(A,Ze),b(ut,Ze,null),e(Ze,Op),e(Ze,ma),e(ma,Ap),e(A,Np),e(A,On),b(mt,On,null),m(o,Vr,c),m(o,Pe,c),e(Pe,Je),e(Je,ha),b(ht,ha,null),e(Pe,Sp),e(Pe,fa),e(fa,Rp),m(o,Qr,c),m(o,Y,c),b(ft,Y,null),e(Y,Wp),e(Y,gt),e(gt,Up),e(gt,ga),e(ga,Bp),e(gt,Vp),e(Y,Qp),e(Y,_t),e(_t,Gp),e(_t,An),e(An,Hp),e(_t,Kp),e(Y,Xp),e(Y,eo),b(vt,eo,null),e(eo,Yp),e(eo,_a),e(_a,Zp),m(o,Gr,c),m(o,Ce,c),e(Ce,oo),e(oo,va),b(yt,va,null),e(Ce,Jp),e(Ce,ya),e(ya,eu),m(o,Hr,c),m(o,W,c),b(bt,W,null),e(W,ou),e(W,ba),e(ba,tu),e(W,nu),e(W,Nn),e(Nn,Sn),e(Sn,su),e(Nn,au),e(W,ru),e(W,q),e(q,iu),e(q,Rn),e(Rn,lu),e(q,cu),e(q,Wn),e(Wn,du),e(q,pu),e(q,Un),e(Un,uu),e(q,mu),e(q,La),e(La,hu),e(q,fu),e(q,ka),e(ka,gu),e(q,_u),e(q,wa),e(wa,vu),e(q,yu),e(q,xa),e(xa,bu),e(q,Lu),e(q,Ta),e(Ta,ku),e(q,wu),e(q,Ma),e(Ma,xu),e(q,Tu),e(W,Mu),e(W,_e),b(Lt,_e,null),e(_e,$u),e(_e,$),e($,Eu),e($,$a),e($a,zu),e($,Fu),e($,kt),e(kt,Ea),e(Ea,qu),e(kt,Pu),e($,Cu),e($,Bn),e(Bn,ju),e($,Iu),e($,za),e(za,Du),e($,Ou),e($,Fa),e(Fa,Au),e($,Nu),e($,wt),e(wt,qa),e(qa,Su),e(wt,Ru),e($,Wu),e($,Pa),e(Pa,Uu),e($,Bu),e($,Vn),e(Vn,Vu),e($,Qu),e($,Ca),e(Ca,Gu),e($,Hu),e($,ja),e(ja,Ku),e($,Xu),e($,Ia),e(Ia,Yu),e($,Zu),e($,Da),e(Da,Ju),e($,em),e(_e,om),e(_e,Oa),e(Oa,tm),m(o,Kr,c),m(o,je,c),e(je,to),e(to,Aa),b(xt,Aa,null),e(je,nm),e(je,Na),e(Na,sm),m(o,Xr,c),m(o,le,c),b(Tt,le,null),e(le,am),e(le,Mt),e(Mt,rm),e(Mt,$t),e($t,im),e(Mt,lm),e(le,cm),e(le,te),b(Et,te,null),e(te,dm),e(te,Ie),e(Ie,pm),e(Ie,Qn),e(Qn,um),e(Ie,mm),e(Ie,Sa),e(Sa,hm),e(Ie,fm),e(te,gm),b(no,te,null),e(te,_m),b(so,te,null),m(o,Yr,c),m(o,De,c),e(De,ao),e(ao,Ra),b(zt,Ra,null),e(De,vm),e(De,Wa),e(Wa,ym),m(o,Zr,c),m(o,Z,c),b(Ft,Z,null),e(Z,bm),e(Z,qt),e(qt,Lm),e(qt,Pt),e(Pt,km),e(qt,wm),e(Z,xm),e(Z,Ct),e(Ct,Tm),e(Ct,jt),e(jt,Mm),e(Ct,$m),e(Z,Em),e(Z,ne),b(It,ne,null),e(ne,zm),e(ne,Oe),e(Oe,Fm),e(Oe,Gn),e(Gn,qm),e(Oe,Pm),e(Oe,Ua),e(Ua,Cm),e(Oe,jm),e(ne,Im),b(ro,ne,null),e(ne,Dm),b(io,ne,null),m(o,Jr,c),m(o,Ae,c),e(Ae,lo),e(lo,Ba),b(Dt,Ba,null),e(Ae,Om),e(Ae,Va),e(Va,Am),m(o,ei,c),m(o,J,c),b(Ot,J,null),e(J,Nm),e(J,ee),e(ee,Sm),e(ee,At),e(At,Rm),e(ee,Wm),e(ee,Nt),e(Nt,Um),e(ee,Bm),e(ee,St),e(St,Vm),e(ee,Qm),e(ee,Rt),e(Rt,Gm),e(ee,Hm),e(J,Km),e(J,Wt),e(Wt,Xm),e(Wt,Ut),e(Ut,Ym),e(Wt,Zm),e(J,Jm),e(J,se),b(Bt,se,null),e(se,eh),e(se,Ne),e(Ne,oh),e(Ne,Hn),e(Hn,th),e(Ne,nh),e(Ne,Qa),e(Qa,sh),e(Ne,ah),e(se,rh),b(co,se,null),e(se,ih),b(po,se,null),m(o,oi,c),m(o,Se,c),e(Se,uo),e(uo,Ga),b(Vt,Ga,null),e(Se,lh),e(Se,Ha),e(Ha,ch),m(o,ti,c),m(o,oe,c),b(Qt,oe,null),e(oe,dh),e(oe,ce),e(ce,ph),e(ce,Gt),e(Gt,uh),e(ce,mh),e(ce,Ka),e(Ka,hh),e(ce,fh),e(ce,Xa),e(Xa,gh),e(ce,_h),e(oe,vh),e(oe,Ht),e(Ht,yh),e(Ht,Kt),e(Kt,bh),e(Ht,Lh),e(oe,kh),e(oe,ae),b(Xt,ae,null),e(ae,wh),e(ae,Re),e(Re,xh),e(Re,Kn),e(Kn,Th),e(Re,Mh),e(Re,Ya),e(Ya,$h),e(Re,Eh),e(ae,zh),b(mo,ae,null),e(ae,Fh),b(ho,ae,null),ni=!0},p(o,[c]){const Yt={};c&2&&(Yt.$$scope={dirty:c,ctx:o}),He.$set(Yt);const Za={};c&2&&(Za.$$scope={dirty:c,ctx:o}),Xe.$set(Za);const Ja={};c&2&&(Ja.$$scope={dirty:c,ctx:o}),no.$set(Ja);const er={};c&2&&(er.$$scope={dirty:c,ctx:o}),so.$set(er);const Zt={};c&2&&(Zt.$$scope={dirty:c,ctx:o}),ro.$set(Zt);const or={};c&2&&(or.$$scope={dirty:c,ctx:o}),io.$set(or);const tr={};c&2&&(tr.$$scope={dirty:c,ctx:o}),co.$set(tr);const nr={};c&2&&(nr.$$scope={dirty:c,ctx:o}),po.$set(nr);const We={};c&2&&(We.$$scope={dirty:c,ctx:o}),mo.$set(We);const sr={};c&2&&(sr.$$scope={dirty:c,ctx:o}),ho.$set(sr)},i(o){ni||(L(d.$$.fragment,o),L(Mo.$$.fragment,o),L(Bo.$$.fragment,o),L(Vo.$$.fragment,o),L(Ho.$$.fragment,o),L(Ko.$$.fragment,o),L(Yo.$$.fragment,o),L(Zo.$$.fragment,o),L(Jo.$$.fragment,o),L(et.$$.fragment,o),L(ot.$$.fragment,o),L(tt.$$.fragment,o),L(nt.$$.fragment,o),L(He.$$.fragment,o),L(at.$$.fragment,o),L(rt.$$.fragment,o),L(lt.$$.fragment,o),L(Xe.$$.fragment,o),L(ct.$$.fragment,o),L(dt.$$.fragment,o),L(ut.$$.fragment,o),L(mt.$$.fragment,o),L(ht.$$.fragment,o),L(ft.$$.fragment,o),L(vt.$$.fragment,o),L(yt.$$.fragment,o),L(bt.$$.fragment,o),L(Lt.$$.fragment,o),L(xt.$$.fragment,o),L(Tt.$$.fragment,o),L(Et.$$.fragment,o),L(no.$$.fragment,o),L(so.$$.fragment,o),L(zt.$$.fragment,o),L(Ft.$$.fragment,o),L(It.$$.fragment,o),L(ro.$$.fragment,o),L(io.$$.fragment,o),L(Dt.$$.fragment,o),L(Ot.$$.fragment,o),L(Bt.$$.fragment,o),L(co.$$.fragment,o),L(po.$$.fragment,o),L(Vt.$$.fragment,o),L(Qt.$$.fragment,o),L(Xt.$$.fragment,o),L(mo.$$.fragment,o),L(ho.$$.fragment,o),ni=!0)},o(o){k(d.$$.fragment,o),k(Mo.$$.fragment,o),k(Bo.$$.fragment,o),k(Vo.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Yo.$$.fragment,o),k(Zo.$$.fragment,o),k(Jo.$$.fragment,o),k(et.$$.fragment,o),k(ot.$$.fragment,o),k(tt.$$.fragment,o),k(nt.$$.fragment,o),k(He.$$.fragment,o),k(at.$$.fragment,o),k(rt.$$.fragment,o),k(lt.$$.fragment,o),k(Xe.$$.fragment,o),k(ct.$$.fragment,o),k(dt.$$.fragment,o),k(ut.$$.fragment,o),k(mt.$$.fragment,o),k(ht.$$.fragment,o),k(ft.$$.fragment,o),k(vt.$$.fragment,o),k(yt.$$.fragment,o),k(bt.$$.fragment,o),k(Lt.$$.fragment,o),k(xt.$$.fragment,o),k(Tt.$$.fragment,o),k(Et.$$.fragment,o),k(no.$$.fragment,o),k(so.$$.fragment,o),k(zt.$$.fragment,o),k(Ft.$$.fragment,o),k(It.$$.fragment,o),k(ro.$$.fragment,o),k(io.$$.fragment,o),k(Dt.$$.fragment,o),k(Ot.$$.fragment,o),k(Bt.$$.fragment,o),k(co.$$.fragment,o),k(po.$$.fragment,o),k(Vt.$$.fragment,o),k(Qt.$$.fragment,o),k(Xt.$$.fragment,o),k(mo.$$.fragment,o),k(ho.$$.fragment,o),ni=!1},d(o){t(h),o&&t(T),o&&t(_),w(d),o&&t(ar),o&&t(xe),w(Mo),o&&t(rr),o&&t(pe),o&&t(ir),o&&t(ue),o&&t(lr),o&&t(en),o&&t(cr),o&&t(on),o&&t(dr),o&&t(tn),o&&t(pr),o&&t(U),o&&t(ur),w(Bo,o),o&&t(mr),o&&t(me),o&&t(hr),w(Vo,o),o&&t(fr),o&&t(Be),o&&t(gr),o&&t(he),o&&t(_r),o&&t(Ve),o&&t(vr),o&&t(Me),w(Ho),o&&t(yr),o&&t(B),o&&t(br),w(Ko,o),o&&t(Lr),o&&t(E),o&&t(kr),o&&t(R),o&&t(wr),o&&t(Ln),o&&t(xr),o&&t(kn),o&&t(Tr),o&&t(wn),o&&t(Mr),w(Yo,o),o&&t($r),o&&t(xn),o&&t(Er),o&&t(fe),o&&t(zr),w(Zo,o),o&&t(Fr),o&&t(Tn),o&&t(qr),o&&t(V),o&&t(Pr),w(Jo,o),o&&t(Cr),o&&t(Mn),o&&t(jr),o&&t($n),o&&t(Ir),w(et,o),o&&t(Dr),o&&t(En),o&&t(Or),o&&t(zn),o&&t(Ar),w(ot,o),o&&t(Nr),o&&t($e),w(tt),o&&t(Sr),o&&t(K),w(nt),w(He),o&&t(Rr),o&&t(Fe),w(at),o&&t(Wr),o&&t(X),w(rt),w(lt),w(Xe),o&&t(Ur),o&&t(qe),w(ct),o&&t(Br),o&&t(A),w(dt),w(ut),w(mt),o&&t(Vr),o&&t(Pe),w(ht),o&&t(Qr),o&&t(Y),w(ft),w(vt),o&&t(Gr),o&&t(Ce),w(yt),o&&t(Hr),o&&t(W),w(bt),w(Lt),o&&t(Kr),o&&t(je),w(xt),o&&t(Xr),o&&t(le),w(Tt),w(Et),w(no),w(so),o&&t(Yr),o&&t(De),w(zt),o&&t(Zr),o&&t(Z),w(Ft),w(It),w(ro),w(io),o&&t(Jr),o&&t(Ae),w(Dt),o&&t(ei),o&&t(J),w(Ot),w(Bt),w(co),w(po),o&&t(oi),o&&t(Se),w(Vt),o&&t(ti),o&&t(oe),w(Qt),w(Xt),w(mo),w(ho)}}}const dv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function pv(P){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vv extends H_{constructor(h){super();K_(this,h,pv,cv,X_,{})}}export{vv as default,dv as metadata};
