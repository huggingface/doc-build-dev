import{S as H_,i as K_,s as X_,e as s,k as h,w as v,t as n,M as Y_,c as r,d as t,m as p,a as i,x as y,h as a,b as l,F as e,g as u,y as b,q as L,o as w,B as k,v as Z_,L as ha}from"../../chunks/vendor-6b77c823.js";import{T as Ci}from"../../chunks/Tip-39098574.js";import{D as A}from"../../chunks/Docstring-1088f2fb.js";import{C as G}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ie}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as da}from"../../chunks/ExampleCodeBlock-5212b321.js";function J_(P){let m,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=s("p"),T=n("Example:"),_=h(),v(g.$$.fragment)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Example:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){u(d,m,f),e(m,T),u(d,_,f),b(g,d,f),x=!0},p:ha,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(m),d&&t(_),k(g,d)}}}function ev(P){let m,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){m=s("p"),T=n("Examples:"),_=h(),v(g.$$.fragment)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){u(d,m,f),e(m,T),u(d,_,f),b(g,d,f),x=!0},p:ha,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(m),d&&t(_),k(g,d)}}}function ov(P){let m,T,_,g,x;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=a(O,"Module"),O.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){u(d,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(d){d&&t(m)}}}function tv(P){let m,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){m=s("p"),T=n("Examples:"),_=h(),v(g.$$.fragment)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){u(d,m,f),e(m,T),u(d,_,f),b(g,d,f),x=!0},p:ha,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(m),d&&t(_),k(g,d)}}}function nv(P){let m,T,_,g,x;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=a(O,"Module"),O.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){u(d,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(d){d&&t(m)}}}function av(P){let m,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=s("p"),T=n("Examples:"),_=h(),v(g.$$.fragment)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){u(d,m,f),e(m,T),u(d,_,f),b(g,d,f),x=!0},p:ha,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(m),d&&t(_),k(g,d)}}}function sv(P){let m,T,_,g,x;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=a(O,"Module"),O.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){u(d,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(d){d&&t(m)}}}function rv(P){let m,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=s("p"),T=n("Examples:"),_=h(),v(g.$$.fragment)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){u(d,m,f),e(m,T),u(d,_,f),b(g,d,f),x=!0},p:ha,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(m),d&&t(_),k(g,d)}}}function iv(P){let m,T,_,g,x;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var O=i(_);g=a(O,"Module"),O.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){u(d,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(d){d&&t(m)}}}function lv(P){let m,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){m=s("p"),T=n("Examples:"),_=h(),v(g.$$.fragment)},l(d){m=r(d,"P",{});var f=i(m);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){u(d,m,f),e(m,T),u(d,_,f),b(g,d,f),x=!0},p:ha,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(m),d&&t(_),k(g,d)}}}function cv(P){let m,T,_,g,x,d,f,O,ji,sr,xe,We,pa,Mo,Ii,ua,Ai,rr,he,Oi,$o,Di,Ni,Jt,Si,Ri,ir,pe,H,Ui,Eo,Wi,Bi,zo,Vi,Qi,qo,Gi,Hi,Fo,Ki,Xi,Yi,Po,Zi,Co,Ji,el,ol,jo,tl,Io,nl,al,lr,en,sl,cr,on,ma,rl,dr,tn,il,hr,W,fa,ll,cl,Ao,dl,Oo,hl,pl,ul,Do,ml,No,fl,gl,_l,Te,vl,So,yl,bl,Ro,Ll,wl,kl,M,xl,ga,Tl,Ml,nn,$l,El,_a,zl,ql,va,Fl,Pl,ya,Cl,jl,ba,Il,Al,La,Ol,Dl,wa,Nl,Sl,ka,Rl,Ul,an,Wl,Bl,Uo,Vl,Ql,Wo,Gl,Hl,pr,Bo,ur,ue,Kl,xa,Xl,Yl,Ta,Zl,Jl,mr,Vo,fr,Be,ec,sn,oc,tc,gr,me,I,nc,rn,ac,sc,Ma,rc,ic,$a,lc,cc,ln,dc,hc,Ea,pc,uc,za,mc,fc,qa,gc,_c,vc,Qo,yc,cn,bc,Lc,wc,Go,kc,Fa,xc,Tc,_r,Ve,Mc,dn,$c,Ec,vr,Me,Qe,Pa,Ho,zc,Ca,qc,yr,B,Fc,hn,Pc,Cc,pn,jc,Ic,un,Ac,Oc,mn,Dc,Nc,br,Ko,Lr,E,Sc,fn,Rc,Uc,gn,Wc,Bc,ja,Vc,Qc,_n,Gc,Hc,vn,Kc,Xc,Ia,Yc,Zc,Aa,Jc,ed,Oa,od,td,Da,nd,ad,Na,sd,rd,wr,R,yn,id,ld,Xo,cd,dd,bn,hd,pd,Sa,ud,md,Ra,fd,gd,kr,Ln,_d,xr,wn,Ua,vd,Tr,kn,yd,Mr,Yo,$r,xn,Wa,bd,Er,fe,Ld,Ba,wd,kd,Va,xd,Td,zr,Zo,qr,Tn,Qa,Md,Fr,V,$d,Ga,Ed,zd,Ha,qd,Fd,Ka,Pd,Cd,Xa,jd,Id,Pr,Jo,Cr,Mn,Ya,Ad,jr,$n,Od,Ir,et,Ar,En,Za,Dd,Or,zn,Nd,Dr,ot,Nr,$e,Ge,Ja,tt,Sd,es,Rd,Sr,K,nt,Ud,Ee,Wd,qn,Bd,Vd,at,Qd,Gd,Hd,ze,Kd,Fn,Xd,Yd,Pn,Zd,Jd,eh,He,Rr,qe,Ke,os,st,oh,ts,th,Ur,X,rt,nh,ns,ah,sh,it,rh,as,ih,lh,ch,ge,lt,dh,ss,hh,ph,Xe,Wr,Fe,Ye,rs,ct,uh,is,mh,Br,D,dt,fh,N,gh,Cn,_h,vh,ls,yh,bh,cs,Lh,wh,ds,kh,xh,hs,Th,Mh,ps,$h,Eh,zh,ht,qh,jn,Fh,Ph,Ch,In,An,jh,Ih,Ah,Ze,pt,Oh,us,Dh,Nh,On,ut,Vr,Pe,Je,ms,mt,Sh,fs,Rh,Qr,Y,ft,Uh,gt,Wh,gs,Bh,Vh,Qh,_t,Gh,Dn,Hh,Kh,Xh,eo,vt,Yh,_s,Zh,Gr,Ce,oo,vs,yt,Jh,ys,ep,Hr,U,bt,op,bs,tp,np,Nn,Sn,ap,sp,rp,F,ip,Rn,lp,cp,Un,dp,hp,Wn,pp,up,Ls,mp,fp,ws,gp,_p,ks,vp,yp,xs,bp,Lp,Ts,wp,kp,Ms,xp,Tp,Mp,_e,Lt,$p,$,Ep,$s,zp,qp,wt,Es,Fp,Pp,Cp,Bn,jp,Ip,zs,Ap,Op,qs,Dp,Np,kt,Fs,Sp,Rp,Up,Ps,Wp,Bp,Vn,Vp,Qp,Cs,Gp,Hp,js,Kp,Xp,Is,Yp,Zp,As,Jp,eu,ou,Os,tu,Kr,je,to,Ds,xt,nu,Ns,au,Xr,le,Tt,su,Mt,ru,$t,iu,lu,cu,te,Et,du,Ie,hu,Qn,pu,uu,Ss,mu,fu,gu,no,_u,ao,Yr,Ae,so,Rs,zt,vu,Us,yu,Zr,Z,qt,bu,Ft,Lu,Pt,wu,ku,xu,Ct,Tu,jt,Mu,$u,Eu,ne,It,zu,Oe,qu,Gn,Fu,Pu,Ws,Cu,ju,Iu,ro,Au,io,Jr,De,lo,Bs,At,Ou,Vs,Du,ei,J,Ot,Nu,ee,Su,Dt,Ru,Uu,Nt,Wu,Bu,St,Vu,Qu,Rt,Gu,Hu,Ku,Ut,Xu,Wt,Yu,Zu,Ju,ae,Bt,em,Ne,om,Hn,tm,nm,Qs,am,sm,rm,co,im,ho,oi,Se,po,Gs,Vt,lm,Hs,cm,ti,oe,Qt,dm,ce,hm,Gt,pm,um,Ks,mm,fm,Xs,gm,_m,vm,Ht,ym,Kt,bm,Lm,wm,se,Xt,km,Re,xm,Kn,Tm,Mm,Ys,$m,Em,zm,uo,qm,mo,ni;return d=new ie({}),Mo=new ie({}),Bo=new G({props:{code:`def normalize_bbox(bbox, width, height):
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

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),Ho=new ie({}),Ko=new G({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),Yo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
encoding = processor(
    image, return_tensors="pt"
)  # you can also add all tokenizer parameters here such as padding, truncation
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
encoding = processor(
    image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
)  <span class="hljs-comment"># you can also add all tokenizer parameters here such as padding, truncation</span>
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Zo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Jo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
word_labels = [1, 2]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'labels', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
word_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),et=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
question = "What's his name?"
encoding = processor(image, question, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ot=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
question = "What's his name?"
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),tt=new ie({}),nt=new A({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
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
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),He=new da({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[J_]},$$scope:{ctx:P}}}),st=new ie({}),rt=new A({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),lt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L123",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Xe=new da({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[ev]},$$scope:{ctx:P}}}),ct=new ie({}),dt=new A({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L145"}}),pt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L365"}}),ut=new A({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L345"}}),mt=new ie({}),ft=new A({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L61"}}),vt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L170"}}),yt=new ie({}),bt=new A({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),Lt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),xt=new ie({}),Tt=new A({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L708"}}),Et=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L806",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new Ci({props:{$$slots:{default:[ov]},$$scope:{ctx:P}}}),ao=new da({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[tv]},$$scope:{ctx:P}}}),zt=new ie({}),qt=new A({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L953"}}),It=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L967",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),ro=new Ci({props:{$$slots:{default:[nv]},$$scope:{ctx:P}}}),io=new da({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[av]},$$scope:{ctx:P}}}),At=new ie({}),Ot=new A({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1122"}}),Bt=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Ci({props:{$$slots:{default:[sv]},$$scope:{ctx:P}}}),ho=new da({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[rv]},$$scope:{ctx:P}}}),Vt=new ie({}),Qt=new A({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1231"}}),Xt=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1245",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Ci({props:{$$slots:{default:[iv]},$$scope:{ctx:P}}}),mo=new da({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[lv]},$$scope:{ctx:P}}}),{c(){m=s("meta"),T=h(),_=s("h1"),g=s("a"),x=s("span"),v(d.$$.fragment),f=h(),O=s("span"),ji=n("LayoutLMV2"),sr=h(),xe=s("h2"),We=s("a"),pa=s("span"),v(Mo.$$.fragment),Ii=h(),ua=s("span"),Ai=n("Overview"),rr=h(),he=s("p"),Oi=n("The LayoutLMV2 model was proposed in "),$o=s("a"),Di=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Ni=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),Jt=s("a"),Si=n("LayoutLM"),Ri=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),ir=h(),pe=s("ul"),H=s("li"),Ui=n("information extraction from scanned documents: the "),Eo=s("a"),Wi=n("FUNSD"),Bi=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zo=s("a"),Vi=n("CORD"),Qi=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),qo=s("a"),Gi=n("SROIE"),Hi=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Fo=s("a"),Ki=n("Kleister-NDA"),Xi=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),Yi=h(),Po=s("li"),Zi=n("document image classification: the "),Co=s("a"),Ji=n("RVL-CDIP"),el=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ol=h(),jo=s("li"),tl=n("document visual question answering: the "),Io=s("a"),nl=n("DocVQA"),al=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),lr=h(),en=s("p"),sl=n("The abstract from the paper is the following:"),cr=h(),on=s("p"),ma=s("em"),rl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),dr=h(),tn=s("p"),il=n("Tips:"),hr=h(),W=s("ul"),fa=s("li"),ll=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),cl=h(),Ao=s("li"),dl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Oo=s("a"),hl=n("paper"),pl=n("."),ul=h(),Do=s("li"),ml=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),No=s("a"),fl=n("here"),gl=n("."),_l=h(),Te=s("li"),vl=n("LayoutLMv2 uses Facebook AI\u2019s "),So=s("a"),yl=n("Detectron2"),bl=n(` package for its visual
backbone. See `),Ro=s("a"),Ll=n("this link"),wl=n(` for installation
instructions.`),kl=h(),M=s("li"),xl=n("In addition to "),ga=s("code"),Tl=n("input_ids"),Ml=n(", "),nn=s("a"),$l=n("forward()"),El=n(` expects 2 additional inputs, namely
`),_a=s("code"),zl=n("image"),ql=n(" and "),va=s("code"),Fl=n("bbox"),Pl=n(". The "),ya=s("code"),Cl=n("image"),jl=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),ba=s("code"),Il=n("image"),Al=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),La=s("code"),Ol=n("torch.Tensor"),Dl=n(" or a "),wa=s("code"),Nl=n("Detectron2.structures.ImageList"),Sl=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ka=s("code"),Rl=n("bbox"),Ul=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),an=s("a"),Wl=n("LayoutLMModel"),Bl=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Uo=s("a"),Vl=n("Tesseract"),Ql=n(" (there\u2019s a "),Wo=s("a"),Gl=n(`Python
wrapper`),Hl=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),pr=h(),v(Bo.$$.fragment),ur=h(),ue=s("p"),Kl=n("Here, "),xa=s("code"),Xl=n("width"),Yl=n(" and "),Ta=s("code"),Zl=n("height"),Jl=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),mr=h(),v(Vo.$$.fragment),fr=h(),Be=s("p"),ec=n("However, this model includes a brand new "),sn=s("a"),oc=n("LayoutLMv2Processor"),tc=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),gr=h(),me=s("ul"),I=s("li"),nc=n("Internally, "),rn=s("a"),ac=n("LayoutLMv2Model"),sc=n(" will send the "),Ma=s("code"),rc=n("image"),ic=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),$a=s("code"),lc=n("image_feature_pool_shape"),cc=n(` attribute of
`),ln=s("a"),dc=n("LayoutLMv2Config"),hc=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ea=s("code"),pc=n("seq_length"),uc=n(" + "),za=s("code"),mc=n("image_feature_pool_shape[0]"),fc=n(` *
`),qa=s("code"),gc=n("config.image_feature_pool_shape[1]"),_c=n("."),vc=h(),Qo=s("li"),yc=n("When calling "),cn=s("a"),bc=n("from_pretrained()"),Lc=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),wc=h(),Go=s("li"),kc=n("If you want to train the model in a distributed environment, make sure to call "),Fa=s("code"),xc=n("synchronize_batch_norm"),Tc=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),_r=h(),Ve=s("p"),Mc=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),dn=s("a"),$c=n("LayoutXLM\u2019s documentation page"),Ec=n("."),vr=h(),Me=s("h2"),Qe=s("a"),Pa=s("span"),v(Ho.$$.fragment),zc=h(),Ca=s("span"),qc=n("Usage: LayoutLMv2Processor"),yr=h(),B=s("p"),Fc=n("The easiest way to prepare data for the model is to use "),hn=s("a"),Pc=n("LayoutLMv2Processor"),Cc=n(`, which internally
combines a feature extractor (`),pn=s("a"),jc=n("LayoutLMv2FeatureExtractor"),Ic=n(`) and a tokenizer
(`),un=s("a"),Ac=n("LayoutLMv2Tokenizer"),Oc=n(" or "),mn=s("a"),Dc=n("LayoutLMv2TokenizerFast"),Nc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),br=h(),v(Ko.$$.fragment),Lr=h(),E=s("p"),Sc=n("In short, one can provide a document image (and possibly additional data) to "),fn=s("a"),Rc=n("LayoutLMv2Processor"),Uc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),gn=s("a"),Wc=n("LayoutLMv2FeatureExtractor"),Bc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),ja=s("code"),Vc=n("image"),Qc=n(` input. The words and
normalized bounding boxes are then provided to `),_n=s("a"),Gc=n("LayoutLMv2Tokenizer"),Hc=n(` or
`),vn=s("a"),Kc=n("LayoutLMv2TokenizerFast"),Xc=n(", which converts them to token-level "),Ia=s("code"),Yc=n("input_ids"),Zc=n(`,
`),Aa=s("code"),Jc=n("attention_mask"),ed=n(", "),Oa=s("code"),od=n("token_type_ids"),td=n(", "),Da=s("code"),nd=n("bbox"),ad=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Na=s("code"),sd=n("labels"),rd=n("."),wr=h(),R=s("p"),yn=s("a"),id=n("LayoutLMv2Processor"),ld=n(" uses "),Xo=s("a"),cd=n("PyTesseract"),dd=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),bn=s("a"),hd=n("LayoutLMv2FeatureExtractor"),pd=n(" with "),Sa=s("code"),ud=n("apply_ocr"),md=n(" set to "),Ra=s("code"),fd=n("False"),gd=n("."),kr=h(),Ln=s("p"),_d=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),xr=h(),wn=s("p"),Ua=s("strong"),vd=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Tr=h(),kn=s("p"),yd=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Mr=h(),v(Yo.$$.fragment),$r=h(),xn=s("p"),Wa=s("strong"),bd=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Er=h(),fe=s("p"),Ld=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Ba=s("code"),wd=n("apply_ocr"),kd=n(` set to
`),Va=s("code"),xd=n("False"),Td=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),zr=h(),v(Zo.$$.fragment),qr=h(),Tn=s("p"),Qa=s("strong"),Md=n("Use case 3: token classification (training), apply_ocr=False"),Fr=h(),V=s("p"),$d=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ga=s("code"),Ed=n("labels"),zd=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ha=s("code"),qd=n("ignore_index"),Fd=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Ka=s("code"),Pd=n("only_label_first_subword"),Cd=n(" set to "),Xa=s("code"),jd=n("False"),Id=n("."),Pr=h(),v(Jo.$$.fragment),Cr=h(),Mn=s("p"),Ya=s("strong"),Ad=n("Use case 4: visual question answering (inference), apply_ocr=True"),jr=h(),$n=s("p"),Od=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Ir=h(),v(et.$$.fragment),Ar=h(),En=s("p"),Za=s("strong"),Dd=n("Use case 5: visual question answering (inference), apply_ocr=False"),Or=h(),zn=s("p"),Nd=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Dr=h(),v(ot.$$.fragment),Nr=h(),$e=s("h2"),Ge=s("a"),Ja=s("span"),v(tt.$$.fragment),Sd=h(),es=s("span"),Rd=n("LayoutLMv2Config"),Sr=h(),K=s("div"),v(nt.$$.fragment),Ud=h(),Ee=s("p"),Wd=n("This is the configuration class to store the configuration of a "),qn=s("a"),Bd=n("LayoutLMv2Model"),Vd=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),at=s("a"),Qd=n("microsoft/layoutlmv2-base-uncased"),Gd=n(" architecture."),Hd=h(),ze=s("p"),Kd=n("Configuration objects inherit from "),Fn=s("a"),Xd=n("PretrainedConfig"),Yd=n(` and can be used to control the model outputs. Read the
documentation from `),Pn=s("a"),Zd=n("PretrainedConfig"),Jd=n(" for more information."),eh=h(),v(He.$$.fragment),Rr=h(),qe=s("h2"),Ke=s("a"),os=s("span"),v(st.$$.fragment),oh=h(),ts=s("span"),th=n("LayoutLMv2FeatureExtractor"),Ur=h(),X=s("div"),v(rt.$$.fragment),nh=h(),ns=s("p"),ah=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),sh=h(),it=s("p"),rh=n("This feature extractor inherits from "),as=s("code"),ih=n("PreTrainedFeatureExtractor()"),lh=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),ch=h(),ge=s("div"),v(lt.$$.fragment),dh=h(),ss=s("p"),hh=n("Main method to prepare for the model one or several image(s)."),ph=h(),v(Xe.$$.fragment),Wr=h(),Fe=s("h2"),Ye=s("a"),rs=s("span"),v(ct.$$.fragment),uh=h(),is=s("span"),mh=n("LayoutLMv2Tokenizer"),Br=h(),D=s("div"),v(dt.$$.fragment),fh=h(),N=s("p"),gh=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Cn=s("a"),_h=n("LayoutLMv2Tokenizer"),vh=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ls=s("code"),yh=n("input_ids"),bh=n(", "),cs=s("code"),Lh=n("attention_mask"),wh=n(", "),ds=s("code"),kh=n("token_type_ids"),xh=n(", "),hs=s("code"),Th=n("bbox"),Mh=n(`, and
optional `),ps=s("code"),$h=n("labels"),Eh=n(" (for token classification)."),zh=h(),ht=s("p"),qh=n("This tokenizer inherits from "),jn=s("a"),Fh=n("PreTrainedTokenizer"),Ph=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ch=h(),In=s("p"),An=s("a"),jh=n("LayoutLMv2Tokenizer"),Ih=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Ah=h(),Ze=s("div"),v(pt.$$.fragment),Oh=h(),us=s("p"),Dh=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Nh=h(),On=s("div"),v(ut.$$.fragment),Vr=h(),Pe=s("h2"),Je=s("a"),ms=s("span"),v(mt.$$.fragment),Sh=h(),fs=s("span"),Rh=n("LayoutLMv2TokenizerFast"),Qr=h(),Y=s("div"),v(ft.$$.fragment),Uh=h(),gt=s("p"),Wh=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),gs=s("em"),Bh=n("tokenizers"),Vh=n(" library). Based on WordPiece."),Qh=h(),_t=s("p"),Gh=n("This tokenizer inherits from "),Dn=s("a"),Hh=n("PreTrainedTokenizerFast"),Kh=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xh=h(),eo=s("div"),v(vt.$$.fragment),Yh=h(),_s=s("p"),Zh=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Gr=h(),Ce=s("h2"),oo=s("a"),vs=s("span"),v(yt.$$.fragment),Jh=h(),ys=s("span"),ep=n("LayoutLMv2Processor"),Hr=h(),U=s("div"),v(bt.$$.fragment),op=h(),bs=s("p"),tp=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),np=h(),Nn=s("p"),Sn=s("a"),ap=n("LayoutLMv2Processor"),sp=n(" offers all the functionalities you need to prepare data for the model."),rp=h(),F=s("p"),ip=n("It first uses "),Rn=s("a"),lp=n("LayoutLMv2FeatureExtractor"),cp=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Un=s("a"),dp=n("LayoutLMv2Tokenizer"),hp=n(` or
`),Wn=s("a"),pp=n("LayoutLMv2TokenizerFast"),up=n(", which turns the words and bounding boxes into token-level "),Ls=s("code"),mp=n("input_ids"),fp=n(`,
`),ws=s("code"),gp=n("attention_mask"),_p=n(", "),ks=s("code"),vp=n("token_type_ids"),yp=n(", "),xs=s("code"),bp=n("bbox"),Lp=n(". Optionally, one can provide integer "),Ts=s("code"),wp=n("word_labels"),kp=n(`, which are turned
into token-level `),Ms=s("code"),xp=n("labels"),Tp=n(" for token classification tasks (such as FUNSD, CORD)."),Mp=h(),_e=s("div"),v(Lt.$$.fragment),$p=h(),$=s("p"),Ep=n("This method first forwards the "),$s=s("code"),zp=n("images"),qp=n(" argument to "),wt=s("a"),Es=s("strong"),Fp=n("call"),Pp=n("()"),Cp=n(`. In case
`),Bn=s("a"),jp=n("LayoutLMv2FeatureExtractor"),Ip=n(" was initialized with "),zs=s("code"),Ap=n("apply_ocr"),Op=n(" set to "),qs=s("code"),Dp=n("True"),Np=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),kt=s("a"),Fs=s("strong"),Sp=n("call"),Rp=n("()"),Up=n(` and returns the output,
together with resized `),Ps=s("code"),Wp=n("images"),Bp=n(". In case "),Vn=s("a"),Vp=n("LayoutLMv2FeatureExtractor"),Qp=n(" was initialized with "),Cs=s("code"),Gp=n("apply_ocr"),Hp=n(` set to
`),js=s("code"),Kp=n("False"),Xp=n(", it passes the words ("),Is=s("code"),Yp=n("text"),Zp=n("/"),As=s("code"),Jp=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),eu=n("."),ou=h(),Os=s("p"),tu=n("Please refer to the docstring of the above two methods for more information."),Kr=h(),je=s("h2"),to=s("a"),Ds=s("span"),v(xt.$$.fragment),nu=h(),Ns=s("span"),au=n("LayoutLMv2Model"),Xr=h(),le=s("div"),v(Tt.$$.fragment),su=h(),Mt=s("p"),ru=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$t=s("a"),iu=n("torch.nn.Module"),lu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cu=h(),te=s("div"),v(Et.$$.fragment),du=h(),Ie=s("p"),hu=n("The "),Qn=s("a"),pu=n("LayoutLMv2Model"),uu=n(" forward method, overrides the "),Ss=s("code"),mu=n("__call__"),fu=n(" special method."),gu=h(),v(no.$$.fragment),_u=h(),v(ao.$$.fragment),Yr=h(),Ae=s("h2"),so=s("a"),Rs=s("span"),v(zt.$$.fragment),vu=h(),Us=s("span"),yu=n("LayoutLMv2ForSequenceClassification"),Zr=h(),Z=s("div"),v(qt.$$.fragment),bu=h(),Ft=s("p"),Lu=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Pt=s("a"),wu=n("RVL-CDIP"),ku=n(" dataset."),xu=h(),Ct=s("p"),Tu=n("This model is a PyTorch "),jt=s("a"),Mu=n("torch.nn.Module"),$u=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Eu=h(),ne=s("div"),v(It.$$.fragment),zu=h(),Oe=s("p"),qu=n("The "),Gn=s("a"),Fu=n("LayoutLMv2ForSequenceClassification"),Pu=n(" forward method, overrides the "),Ws=s("code"),Cu=n("__call__"),ju=n(" special method."),Iu=h(),v(ro.$$.fragment),Au=h(),v(io.$$.fragment),Jr=h(),De=s("h2"),lo=s("a"),Bs=s("span"),v(At.$$.fragment),Ou=h(),Vs=s("span"),Du=n("LayoutLMv2ForTokenClassification"),ei=h(),J=s("div"),v(Ot.$$.fragment),Nu=h(),ee=s("p"),Su=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Dt=s("a"),Ru=n("FUNSD"),Uu=n(", "),Nt=s("a"),Wu=n("SROIE"),Bu=n(`,
`),St=s("a"),Vu=n("CORD"),Qu=n(" and "),Rt=s("a"),Gu=n("Kleister-NDA"),Hu=n("."),Ku=h(),Ut=s("p"),Xu=n("This model is a PyTorch "),Wt=s("a"),Yu=n("torch.nn.Module"),Zu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ju=h(),ae=s("div"),v(Bt.$$.fragment),em=h(),Ne=s("p"),om=n("The "),Hn=s("a"),tm=n("LayoutLMv2ForTokenClassification"),nm=n(" forward method, overrides the "),Qs=s("code"),am=n("__call__"),sm=n(" special method."),rm=h(),v(co.$$.fragment),im=h(),v(ho.$$.fragment),oi=h(),Se=s("h2"),po=s("a"),Gs=s("span"),v(Vt.$$.fragment),lm=h(),Hs=s("span"),cm=n("LayoutLMv2ForQuestionAnswering"),ti=h(),oe=s("div"),v(Qt.$$.fragment),dm=h(),ce=s("p"),hm=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Gt=s("a"),pm=n("DocVQA"),um=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Ks=s("code"),mm=n("span start logits"),fm=n(" and "),Xs=s("code"),gm=n("span end logits"),_m=n(")."),vm=h(),Ht=s("p"),ym=n("This model is a PyTorch "),Kt=s("a"),bm=n("torch.nn.Module"),Lm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wm=h(),se=s("div"),v(Xt.$$.fragment),km=h(),Re=s("p"),xm=n("The "),Kn=s("a"),Tm=n("LayoutLMv2ForQuestionAnswering"),Mm=n(" forward method, overrides the "),Ys=s("code"),$m=n("__call__"),Em=n(" special method."),zm=h(),v(uo.$$.fragment),qm=h(),v(mo.$$.fragment),this.h()},l(o){const c=Y_('[data-svelte="svelte-1phssyn"]',document.head);m=r(c,"META",{name:!0,content:!0}),c.forEach(t),T=p(o),_=r(o,"H1",{class:!0});var Yt=i(_);g=r(Yt,"A",{id:!0,class:!0,href:!0});var Zs=i(g);x=r(Zs,"SPAN",{});var Js=i(x);y(d.$$.fragment,Js),Js.forEach(t),Zs.forEach(t),f=p(Yt),O=r(Yt,"SPAN",{});var er=i(O);ji=a(er,"LayoutLMV2"),er.forEach(t),Yt.forEach(t),sr=p(o),xe=r(o,"H2",{class:!0});var Zt=i(xe);We=r(Zt,"A",{id:!0,class:!0,href:!0});var or=i(We);pa=r(or,"SPAN",{});var tr=i(pa);y(Mo.$$.fragment,tr),tr.forEach(t),or.forEach(t),Ii=p(Zt),ua=r(Zt,"SPAN",{});var nr=i(ua);Ai=a(nr,"Overview"),nr.forEach(t),Zt.forEach(t),rr=p(o),he=r(o,"P",{});var Ue=i(he);Oi=a(Ue,"The LayoutLMV2 model was proposed in "),$o=r(Ue,"A",{href:!0,rel:!0});var ar=i($o);Di=a(ar,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),ar.forEach(t),Ni=a(Ue,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),Jt=r(Ue,"A",{href:!0});var Im=i(Jt);Si=a(Im,"LayoutLM"),Im.forEach(t),Ri=a(Ue,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Ue.forEach(t),ir=p(o),pe=r(o,"UL",{});var Xn=i(pe);H=r(Xn,"LI",{});var ve=i(H);Ui=a(ve,"information extraction from scanned documents: the "),Eo=r(ve,"A",{href:!0,rel:!0});var Am=i(Eo);Wi=a(Am,"FUNSD"),Am.forEach(t),Bi=a(ve,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zo=r(ve,"A",{href:!0,rel:!0});var Om=i(zo);Vi=a(Om,"CORD"),Om.forEach(t),Qi=a(ve,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),qo=r(ve,"A",{href:!0,rel:!0});var Dm=i(qo);Gi=a(Dm,"SROIE"),Dm.forEach(t),Hi=a(ve,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Fo=r(ve,"A",{href:!0,rel:!0});var Nm=i(Fo);Ki=a(Nm,"Kleister-NDA"),Nm.forEach(t),Xi=a(ve,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),ve.forEach(t),Yi=p(Xn),Po=r(Xn,"LI",{});var ai=i(Po);Zi=a(ai,"document image classification: the "),Co=r(ai,"A",{href:!0,rel:!0});var Sm=i(Co);Ji=a(Sm,"RVL-CDIP"),Sm.forEach(t),el=a(ai,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ai.forEach(t),ol=p(Xn),jo=r(Xn,"LI",{});var si=i(jo);tl=a(si,"document visual question answering: the "),Io=r(si,"A",{href:!0,rel:!0});var Rm=i(Io);nl=a(Rm,"DocVQA"),Rm.forEach(t),al=a(si,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),si.forEach(t),Xn.forEach(t),lr=p(o),en=r(o,"P",{});var Um=i(en);sl=a(Um,"The abstract from the paper is the following:"),Um.forEach(t),cr=p(o),on=r(o,"P",{});var Wm=i(on);ma=r(Wm,"EM",{});var Bm=i(ma);rl=a(Bm,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),Bm.forEach(t),Wm.forEach(t),dr=p(o),tn=r(o,"P",{});var Vm=i(tn);il=a(Vm,"Tips:"),Vm.forEach(t),hr=p(o),W=r(o,"UL",{});var ye=i(W);fa=r(ye,"LI",{});var Qm=i(fa);ll=a(Qm,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Qm.forEach(t),cl=p(ye),Ao=r(ye,"LI",{});var ri=i(Ao);dl=a(ri,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Oo=r(ri,"A",{href:!0,rel:!0});var Gm=i(Oo);hl=a(Gm,"paper"),Gm.forEach(t),pl=a(ri,"."),ri.forEach(t),ul=p(ye),Do=r(ye,"LI",{});var ii=i(Do);ml=a(ii,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),No=r(ii,"A",{href:!0,rel:!0});var Hm=i(No);fl=a(Hm,"here"),Hm.forEach(t),gl=a(ii,"."),ii.forEach(t),_l=p(ye),Te=r(ye,"LI",{});var Yn=i(Te);vl=a(Yn,"LayoutLMv2 uses Facebook AI\u2019s "),So=r(Yn,"A",{href:!0,rel:!0});var Km=i(So);yl=a(Km,"Detectron2"),Km.forEach(t),bl=a(Yn,` package for its visual
backbone. See `),Ro=r(Yn,"A",{href:!0,rel:!0});var Xm=i(Ro);Ll=a(Xm,"this link"),Xm.forEach(t),wl=a(Yn,` for installation
instructions.`),Yn.forEach(t),kl=p(ye),M=r(ye,"LI",{});var z=i(M);xl=a(z,"In addition to "),ga=r(z,"CODE",{});var Ym=i(ga);Tl=a(Ym,"input_ids"),Ym.forEach(t),Ml=a(z,", "),nn=r(z,"A",{href:!0});var Zm=i(nn);$l=a(Zm,"forward()"),Zm.forEach(t),El=a(z,` expects 2 additional inputs, namely
`),_a=r(z,"CODE",{});var Jm=i(_a);zl=a(Jm,"image"),Jm.forEach(t),ql=a(z," and "),va=r(z,"CODE",{});var ef=i(va);Fl=a(ef,"bbox"),ef.forEach(t),Pl=a(z,". The "),ya=r(z,"CODE",{});var of=i(ya);Cl=a(of,"image"),of.forEach(t),jl=a(z,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),ba=r(z,"CODE",{});var tf=i(ba);Il=a(tf,"image"),tf.forEach(t),Al=a(z,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),La=r(z,"CODE",{});var nf=i(La);Ol=a(nf,"torch.Tensor"),nf.forEach(t),Dl=a(z," or a "),wa=r(z,"CODE",{});var af=i(wa);Nl=a(af,"Detectron2.structures.ImageList"),af.forEach(t),Sl=a(z,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ka=r(z,"CODE",{});var sf=i(ka);Rl=a(sf,"bbox"),sf.forEach(t),Ul=a(z,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),an=r(z,"A",{href:!0});var rf=i(an);Wl=a(rf,"LayoutLMModel"),rf.forEach(t),Bl=a(z,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Uo=r(z,"A",{href:!0,rel:!0});var lf=i(Uo);Vl=a(lf,"Tesseract"),lf.forEach(t),Ql=a(z," (there\u2019s a "),Wo=r(z,"A",{href:!0,rel:!0});var cf=i(Wo);Gl=a(cf,`Python
wrapper`),cf.forEach(t),Hl=a(z,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),z.forEach(t),ye.forEach(t),pr=p(o),y(Bo.$$.fragment,o),ur=p(o),ue=r(o,"P",{});var Zn=i(ue);Kl=a(Zn,"Here, "),xa=r(Zn,"CODE",{});var df=i(xa);Xl=a(df,"width"),df.forEach(t),Yl=a(Zn," and "),Ta=r(Zn,"CODE",{});var hf=i(Ta);Zl=a(hf,"height"),hf.forEach(t),Jl=a(Zn,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Zn.forEach(t),mr=p(o),y(Vo.$$.fragment,o),fr=p(o),Be=r(o,"P",{});var li=i(Be);ec=a(li,"However, this model includes a brand new "),sn=r(li,"A",{href:!0});var pf=i(sn);oc=a(pf,"LayoutLMv2Processor"),pf.forEach(t),tc=a(li,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),li.forEach(t),gr=p(o),me=r(o,"UL",{});var Jn=i(me);I=r(Jn,"LI",{});var S=i(I);nc=a(S,"Internally, "),rn=r(S,"A",{href:!0});var uf=i(rn);ac=a(uf,"LayoutLMv2Model"),uf.forEach(t),sc=a(S," will send the "),Ma=r(S,"CODE",{});var mf=i(Ma);rc=a(mf,"image"),mf.forEach(t),ic=a(S,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),$a=r(S,"CODE",{});var ff=i($a);lc=a(ff,"image_feature_pool_shape"),ff.forEach(t),cc=a(S,` attribute of
`),ln=r(S,"A",{href:!0});var gf=i(ln);dc=a(gf,"LayoutLMv2Config"),gf.forEach(t),hc=a(S,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ea=r(S,"CODE",{});var _f=i(Ea);pc=a(_f,"seq_length"),_f.forEach(t),uc=a(S," + "),za=r(S,"CODE",{});var vf=i(za);mc=a(vf,"image_feature_pool_shape[0]"),vf.forEach(t),fc=a(S,` *
`),qa=r(S,"CODE",{});var yf=i(qa);gc=a(yf,"config.image_feature_pool_shape[1]"),yf.forEach(t),_c=a(S,"."),S.forEach(t),vc=p(Jn),Qo=r(Jn,"LI",{});var ci=i(Qo);yc=a(ci,"When calling "),cn=r(ci,"A",{href:!0});var bf=i(cn);bc=a(bf,"from_pretrained()"),bf.forEach(t),Lc=a(ci,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),ci.forEach(t),wc=p(Jn),Go=r(Jn,"LI",{});var di=i(Go);kc=a(di,"If you want to train the model in a distributed environment, make sure to call "),Fa=r(di,"CODE",{});var Lf=i(Fa);xc=a(Lf,"synchronize_batch_norm"),Lf.forEach(t),Tc=a(di,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),di.forEach(t),Jn.forEach(t),_r=p(o),Ve=r(o,"P",{});var hi=i(Ve);Mc=a(hi,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),dn=r(hi,"A",{href:!0});var wf=i(dn);$c=a(wf,"LayoutXLM\u2019s documentation page"),wf.forEach(t),Ec=a(hi,"."),hi.forEach(t),vr=p(o),Me=r(o,"H2",{class:!0});var pi=i(Me);Qe=r(pi,"A",{id:!0,class:!0,href:!0});var kf=i(Qe);Pa=r(kf,"SPAN",{});var xf=i(Pa);y(Ho.$$.fragment,xf),xf.forEach(t),kf.forEach(t),zc=p(pi),Ca=r(pi,"SPAN",{});var Tf=i(Ca);qc=a(Tf,"Usage: LayoutLMv2Processor"),Tf.forEach(t),pi.forEach(t),yr=p(o),B=r(o,"P",{});var be=i(B);Fc=a(be,"The easiest way to prepare data for the model is to use "),hn=r(be,"A",{href:!0});var Mf=i(hn);Pc=a(Mf,"LayoutLMv2Processor"),Mf.forEach(t),Cc=a(be,`, which internally
combines a feature extractor (`),pn=r(be,"A",{href:!0});var $f=i(pn);jc=a($f,"LayoutLMv2FeatureExtractor"),$f.forEach(t),Ic=a(be,`) and a tokenizer
(`),un=r(be,"A",{href:!0});var Ef=i(un);Ac=a(Ef,"LayoutLMv2Tokenizer"),Ef.forEach(t),Oc=a(be," or "),mn=r(be,"A",{href:!0});var zf=i(mn);Dc=a(zf,"LayoutLMv2TokenizerFast"),zf.forEach(t),Nc=a(be,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),be.forEach(t),br=p(o),y(Ko.$$.fragment,o),Lr=p(o),E=r(o,"P",{});var C=i(E);Sc=a(C,"In short, one can provide a document image (and possibly additional data) to "),fn=r(C,"A",{href:!0});var qf=i(fn);Rc=a(qf,"LayoutLMv2Processor"),qf.forEach(t),Uc=a(C,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),gn=r(C,"A",{href:!0});var Ff=i(gn);Wc=a(Ff,"LayoutLMv2FeatureExtractor"),Ff.forEach(t),Bc=a(C,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),ja=r(C,"CODE",{});var Pf=i(ja);Vc=a(Pf,"image"),Pf.forEach(t),Qc=a(C,` input. The words and
normalized bounding boxes are then provided to `),_n=r(C,"A",{href:!0});var Cf=i(_n);Gc=a(Cf,"LayoutLMv2Tokenizer"),Cf.forEach(t),Hc=a(C,` or
`),vn=r(C,"A",{href:!0});var jf=i(vn);Kc=a(jf,"LayoutLMv2TokenizerFast"),jf.forEach(t),Xc=a(C,", which converts them to token-level "),Ia=r(C,"CODE",{});var If=i(Ia);Yc=a(If,"input_ids"),If.forEach(t),Zc=a(C,`,
`),Aa=r(C,"CODE",{});var Af=i(Aa);Jc=a(Af,"attention_mask"),Af.forEach(t),ed=a(C,", "),Oa=r(C,"CODE",{});var Of=i(Oa);od=a(Of,"token_type_ids"),Of.forEach(t),td=a(C,", "),Da=r(C,"CODE",{});var Df=i(Da);nd=a(Df,"bbox"),Df.forEach(t),ad=a(C,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Na=r(C,"CODE",{});var Nf=i(Na);sd=a(Nf,"labels"),Nf.forEach(t),rd=a(C,"."),C.forEach(t),wr=p(o),R=r(o,"P",{});var de=i(R);yn=r(de,"A",{href:!0});var Sf=i(yn);id=a(Sf,"LayoutLMv2Processor"),Sf.forEach(t),ld=a(de," uses "),Xo=r(de,"A",{href:!0,rel:!0});var Rf=i(Xo);cd=a(Rf,"PyTesseract"),Rf.forEach(t),dd=a(de,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),bn=r(de,"A",{href:!0});var Uf=i(bn);hd=a(Uf,"LayoutLMv2FeatureExtractor"),Uf.forEach(t),pd=a(de," with "),Sa=r(de,"CODE",{});var Wf=i(Sa);ud=a(Wf,"apply_ocr"),Wf.forEach(t),md=a(de," set to "),Ra=r(de,"CODE",{});var Bf=i(Ra);fd=a(Bf,"False"),Bf.forEach(t),gd=a(de,"."),de.forEach(t),kr=p(o),Ln=r(o,"P",{});var Vf=i(Ln);_d=a(Vf,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Vf.forEach(t),xr=p(o),wn=r(o,"P",{});var Qf=i(wn);Ua=r(Qf,"STRONG",{});var Gf=i(Ua);vd=a(Gf,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Gf.forEach(t),Qf.forEach(t),Tr=p(o),kn=r(o,"P",{});var Hf=i(kn);yd=a(Hf,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Hf.forEach(t),Mr=p(o),y(Yo.$$.fragment,o),$r=p(o),xn=r(o,"P",{});var Kf=i(xn);Wa=r(Kf,"STRONG",{});var Xf=i(Wa);bd=a(Xf,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Xf.forEach(t),Kf.forEach(t),Er=p(o),fe=r(o,"P",{});var ea=i(fe);Ld=a(ea,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Ba=r(ea,"CODE",{});var Yf=i(Ba);wd=a(Yf,"apply_ocr"),Yf.forEach(t),kd=a(ea,` set to
`),Va=r(ea,"CODE",{});var Zf=i(Va);xd=a(Zf,"False"),Zf.forEach(t),Td=a(ea,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),ea.forEach(t),zr=p(o),y(Zo.$$.fragment,o),qr=p(o),Tn=r(o,"P",{});var Jf=i(Tn);Qa=r(Jf,"STRONG",{});var eg=i(Qa);Md=a(eg,"Use case 3: token classification (training), apply_ocr=False"),eg.forEach(t),Jf.forEach(t),Fr=p(o),V=r(o,"P",{});var Le=i(V);$d=a(Le,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ga=r(Le,"CODE",{});var og=i(Ga);Ed=a(og,"labels"),og.forEach(t),zd=a(Le,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ha=r(Le,"CODE",{});var tg=i(Ha);qd=a(tg,"ignore_index"),tg.forEach(t),Fd=a(Le,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Ka=r(Le,"CODE",{});var ng=i(Ka);Pd=a(ng,"only_label_first_subword"),ng.forEach(t),Cd=a(Le," set to "),Xa=r(Le,"CODE",{});var ag=i(Xa);jd=a(ag,"False"),ag.forEach(t),Id=a(Le,"."),Le.forEach(t),Pr=p(o),y(Jo.$$.fragment,o),Cr=p(o),Mn=r(o,"P",{});var sg=i(Mn);Ya=r(sg,"STRONG",{});var rg=i(Ya);Ad=a(rg,"Use case 4: visual question answering (inference), apply_ocr=True"),rg.forEach(t),sg.forEach(t),jr=p(o),$n=r(o,"P",{});var ig=i($n);Od=a(ig,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),ig.forEach(t),Ir=p(o),y(et.$$.fragment,o),Ar=p(o),En=r(o,"P",{});var lg=i(En);Za=r(lg,"STRONG",{});var cg=i(Za);Dd=a(cg,"Use case 5: visual question answering (inference), apply_ocr=False"),cg.forEach(t),lg.forEach(t),Or=p(o),zn=r(o,"P",{});var dg=i(zn);Nd=a(dg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),dg.forEach(t),Dr=p(o),y(ot.$$.fragment,o),Nr=p(o),$e=r(o,"H2",{class:!0});var ui=i($e);Ge=r(ui,"A",{id:!0,class:!0,href:!0});var hg=i(Ge);Ja=r(hg,"SPAN",{});var pg=i(Ja);y(tt.$$.fragment,pg),pg.forEach(t),hg.forEach(t),Sd=p(ui),es=r(ui,"SPAN",{});var ug=i(es);Rd=a(ug,"LayoutLMv2Config"),ug.forEach(t),ui.forEach(t),Sr=p(o),K=r(o,"DIV",{class:!0});var fo=i(K);y(nt.$$.fragment,fo),Ud=p(fo),Ee=r(fo,"P",{});var oa=i(Ee);Wd=a(oa,"This is the configuration class to store the configuration of a "),qn=r(oa,"A",{href:!0});var mg=i(qn);Bd=a(mg,"LayoutLMv2Model"),mg.forEach(t),Vd=a(oa,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),at=r(oa,"A",{href:!0,rel:!0});var fg=i(at);Qd=a(fg,"microsoft/layoutlmv2-base-uncased"),fg.forEach(t),Gd=a(oa," architecture."),oa.forEach(t),Hd=p(fo),ze=r(fo,"P",{});var ta=i(ze);Kd=a(ta,"Configuration objects inherit from "),Fn=r(ta,"A",{href:!0});var gg=i(Fn);Xd=a(gg,"PretrainedConfig"),gg.forEach(t),Yd=a(ta,` and can be used to control the model outputs. Read the
documentation from `),Pn=r(ta,"A",{href:!0});var _g=i(Pn);Zd=a(_g,"PretrainedConfig"),_g.forEach(t),Jd=a(ta," for more information."),ta.forEach(t),eh=p(fo),y(He.$$.fragment,fo),fo.forEach(t),Rr=p(o),qe=r(o,"H2",{class:!0});var mi=i(qe);Ke=r(mi,"A",{id:!0,class:!0,href:!0});var vg=i(Ke);os=r(vg,"SPAN",{});var yg=i(os);y(st.$$.fragment,yg),yg.forEach(t),vg.forEach(t),oh=p(mi),ts=r(mi,"SPAN",{});var bg=i(ts);th=a(bg,"LayoutLMv2FeatureExtractor"),bg.forEach(t),mi.forEach(t),Ur=p(o),X=r(o,"DIV",{class:!0});var go=i(X);y(rt.$$.fragment,go),nh=p(go),ns=r(go,"P",{});var Lg=i(ns);ah=a(Lg,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Lg.forEach(t),sh=p(go),it=r(go,"P",{});var fi=i(it);rh=a(fi,"This feature extractor inherits from "),as=r(fi,"CODE",{});var wg=i(as);ih=a(wg,"PreTrainedFeatureExtractor()"),wg.forEach(t),lh=a(fi,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),fi.forEach(t),ch=p(go),ge=r(go,"DIV",{class:!0});var na=i(ge);y(lt.$$.fragment,na),dh=p(na),ss=r(na,"P",{});var kg=i(ss);hh=a(kg,"Main method to prepare for the model one or several image(s)."),kg.forEach(t),ph=p(na),y(Xe.$$.fragment,na),na.forEach(t),go.forEach(t),Wr=p(o),Fe=r(o,"H2",{class:!0});var gi=i(Fe);Ye=r(gi,"A",{id:!0,class:!0,href:!0});var xg=i(Ye);rs=r(xg,"SPAN",{});var Tg=i(rs);y(ct.$$.fragment,Tg),Tg.forEach(t),xg.forEach(t),uh=p(gi),is=r(gi,"SPAN",{});var Mg=i(is);mh=a(Mg,"LayoutLMv2Tokenizer"),Mg.forEach(t),gi.forEach(t),Br=p(o),D=r(o,"DIV",{class:!0});var re=i(D);y(dt.$$.fragment,re),fh=p(re),N=r(re,"P",{});var Q=i(N);gh=a(Q,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Cn=r(Q,"A",{href:!0});var $g=i(Cn);_h=a($g,"LayoutLMv2Tokenizer"),$g.forEach(t),vh=a(Q,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ls=r(Q,"CODE",{});var Eg=i(ls);yh=a(Eg,"input_ids"),Eg.forEach(t),bh=a(Q,", "),cs=r(Q,"CODE",{});var zg=i(cs);Lh=a(zg,"attention_mask"),zg.forEach(t),wh=a(Q,", "),ds=r(Q,"CODE",{});var qg=i(ds);kh=a(qg,"token_type_ids"),qg.forEach(t),xh=a(Q,", "),hs=r(Q,"CODE",{});var Fg=i(hs);Th=a(Fg,"bbox"),Fg.forEach(t),Mh=a(Q,`, and
optional `),ps=r(Q,"CODE",{});var Pg=i(ps);$h=a(Pg,"labels"),Pg.forEach(t),Eh=a(Q," (for token classification)."),Q.forEach(t),zh=p(re),ht=r(re,"P",{});var _i=i(ht);qh=a(_i,"This tokenizer inherits from "),jn=r(_i,"A",{href:!0});var Cg=i(jn);Fh=a(Cg,"PreTrainedTokenizer"),Cg.forEach(t),Ph=a(_i,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_i.forEach(t),Ch=p(re),In=r(re,"P",{});var Fm=i(In);An=r(Fm,"A",{href:!0});var jg=i(An);jh=a(jg,"LayoutLMv2Tokenizer"),jg.forEach(t),Ih=a(Fm,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Fm.forEach(t),Ah=p(re),Ze=r(re,"DIV",{class:!0});var vi=i(Ze);y(pt.$$.fragment,vi),Oh=p(vi),us=r(vi,"P",{});var Ig=i(us);Dh=a(Ig,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ig.forEach(t),vi.forEach(t),Nh=p(re),On=r(re,"DIV",{class:!0});var Ag=i(On);y(ut.$$.fragment,Ag),Ag.forEach(t),re.forEach(t),Vr=p(o),Pe=r(o,"H2",{class:!0});var yi=i(Pe);Je=r(yi,"A",{id:!0,class:!0,href:!0});var Og=i(Je);ms=r(Og,"SPAN",{});var Dg=i(ms);y(mt.$$.fragment,Dg),Dg.forEach(t),Og.forEach(t),Sh=p(yi),fs=r(yi,"SPAN",{});var Ng=i(fs);Rh=a(Ng,"LayoutLMv2TokenizerFast"),Ng.forEach(t),yi.forEach(t),Qr=p(o),Y=r(o,"DIV",{class:!0});var _o=i(Y);y(ft.$$.fragment,_o),Uh=p(_o),gt=r(_o,"P",{});var bi=i(gt);Wh=a(bi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),gs=r(bi,"EM",{});var Sg=i(gs);Bh=a(Sg,"tokenizers"),Sg.forEach(t),Vh=a(bi," library). Based on WordPiece."),bi.forEach(t),Qh=p(_o),_t=r(_o,"P",{});var Li=i(_t);Gh=a(Li,"This tokenizer inherits from "),Dn=r(Li,"A",{href:!0});var Rg=i(Dn);Hh=a(Rg,"PreTrainedTokenizerFast"),Rg.forEach(t),Kh=a(Li,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Li.forEach(t),Xh=p(_o),eo=r(_o,"DIV",{class:!0});var wi=i(eo);y(vt.$$.fragment,wi),Yh=p(wi),_s=r(wi,"P",{});var Ug=i(_s);Zh=a(Ug,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ug.forEach(t),wi.forEach(t),_o.forEach(t),Gr=p(o),Ce=r(o,"H2",{class:!0});var ki=i(Ce);oo=r(ki,"A",{id:!0,class:!0,href:!0});var Wg=i(oo);vs=r(Wg,"SPAN",{});var Bg=i(vs);y(yt.$$.fragment,Bg),Bg.forEach(t),Wg.forEach(t),Jh=p(ki),ys=r(ki,"SPAN",{});var Vg=i(ys);ep=a(Vg,"LayoutLMv2Processor"),Vg.forEach(t),ki.forEach(t),Hr=p(o),U=r(o,"DIV",{class:!0});var we=i(U);y(bt.$$.fragment,we),op=p(we),bs=r(we,"P",{});var Qg=i(bs);tp=a(Qg,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),Qg.forEach(t),np=p(we),Nn=r(we,"P",{});var Pm=i(Nn);Sn=r(Pm,"A",{href:!0});var Gg=i(Sn);ap=a(Gg,"LayoutLMv2Processor"),Gg.forEach(t),sp=a(Pm," offers all the functionalities you need to prepare data for the model."),Pm.forEach(t),rp=p(we),F=r(we,"P",{});var j=i(F);ip=a(j,"It first uses "),Rn=r(j,"A",{href:!0});var Hg=i(Rn);lp=a(Hg,"LayoutLMv2FeatureExtractor"),Hg.forEach(t),cp=a(j,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Un=r(j,"A",{href:!0});var Kg=i(Un);dp=a(Kg,"LayoutLMv2Tokenizer"),Kg.forEach(t),hp=a(j,` or
`),Wn=r(j,"A",{href:!0});var Xg=i(Wn);pp=a(Xg,"LayoutLMv2TokenizerFast"),Xg.forEach(t),up=a(j,", which turns the words and bounding boxes into token-level "),Ls=r(j,"CODE",{});var Yg=i(Ls);mp=a(Yg,"input_ids"),Yg.forEach(t),fp=a(j,`,
`),ws=r(j,"CODE",{});var Zg=i(ws);gp=a(Zg,"attention_mask"),Zg.forEach(t),_p=a(j,", "),ks=r(j,"CODE",{});var Jg=i(ks);vp=a(Jg,"token_type_ids"),Jg.forEach(t),yp=a(j,", "),xs=r(j,"CODE",{});var e_=i(xs);bp=a(e_,"bbox"),e_.forEach(t),Lp=a(j,". Optionally, one can provide integer "),Ts=r(j,"CODE",{});var o_=i(Ts);wp=a(o_,"word_labels"),o_.forEach(t),kp=a(j,`, which are turned
into token-level `),Ms=r(j,"CODE",{});var t_=i(Ms);xp=a(t_,"labels"),t_.forEach(t),Tp=a(j," for token classification tasks (such as FUNSD, CORD)."),j.forEach(t),Mp=p(we),_e=r(we,"DIV",{class:!0});var aa=i(_e);y(Lt.$$.fragment,aa),$p=p(aa),$=r(aa,"P",{});var q=i($);Ep=a(q,"This method first forwards the "),$s=r(q,"CODE",{});var n_=i($s);zp=a(n_,"images"),n_.forEach(t),qp=a(q," argument to "),wt=r(q,"A",{href:!0});var Cm=i(wt);Es=r(Cm,"STRONG",{});var a_=i(Es);Fp=a(a_,"call"),a_.forEach(t),Pp=a(Cm,"()"),Cm.forEach(t),Cp=a(q,`. In case
`),Bn=r(q,"A",{href:!0});var s_=i(Bn);jp=a(s_,"LayoutLMv2FeatureExtractor"),s_.forEach(t),Ip=a(q," was initialized with "),zs=r(q,"CODE",{});var r_=i(zs);Ap=a(r_,"apply_ocr"),r_.forEach(t),Op=a(q," set to "),qs=r(q,"CODE",{});var i_=i(qs);Dp=a(i_,"True"),i_.forEach(t),Np=a(q,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),kt=r(q,"A",{href:!0});var jm=i(kt);Fs=r(jm,"STRONG",{});var l_=i(Fs);Sp=a(l_,"call"),l_.forEach(t),Rp=a(jm,"()"),jm.forEach(t),Up=a(q,` and returns the output,
together with resized `),Ps=r(q,"CODE",{});var c_=i(Ps);Wp=a(c_,"images"),c_.forEach(t),Bp=a(q,". In case "),Vn=r(q,"A",{href:!0});var d_=i(Vn);Vp=a(d_,"LayoutLMv2FeatureExtractor"),d_.forEach(t),Qp=a(q," was initialized with "),Cs=r(q,"CODE",{});var h_=i(Cs);Gp=a(h_,"apply_ocr"),h_.forEach(t),Hp=a(q,` set to
`),js=r(q,"CODE",{});var p_=i(js);Kp=a(p_,"False"),p_.forEach(t),Xp=a(q,", it passes the words ("),Is=r(q,"CODE",{});var u_=i(Is);Yp=a(u_,"text"),u_.forEach(t),Zp=a(q,"/"),As=r(q,"CODE",{});var m_=i(As);Jp=a(m_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),m_.forEach(t),eu=a(q,"."),q.forEach(t),ou=p(aa),Os=r(aa,"P",{});var f_=i(Os);tu=a(f_,"Please refer to the docstring of the above two methods for more information."),f_.forEach(t),aa.forEach(t),we.forEach(t),Kr=p(o),je=r(o,"H2",{class:!0});var xi=i(je);to=r(xi,"A",{id:!0,class:!0,href:!0});var g_=i(to);Ds=r(g_,"SPAN",{});var __=i(Ds);y(xt.$$.fragment,__),__.forEach(t),g_.forEach(t),nu=p(xi),Ns=r(xi,"SPAN",{});var v_=i(Ns);au=a(v_,"LayoutLMv2Model"),v_.forEach(t),xi.forEach(t),Xr=p(o),le=r(o,"DIV",{class:!0});var sa=i(le);y(Tt.$$.fragment,sa),su=p(sa),Mt=r(sa,"P",{});var Ti=i(Mt);ru=a(Ti,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$t=r(Ti,"A",{href:!0,rel:!0});var y_=i($t);iu=a(y_,"torch.nn.Module"),y_.forEach(t),lu=a(Ti,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ti.forEach(t),cu=p(sa),te=r(sa,"DIV",{class:!0});var vo=i(te);y(Et.$$.fragment,vo),du=p(vo),Ie=r(vo,"P",{});var ra=i(Ie);hu=a(ra,"The "),Qn=r(ra,"A",{href:!0});var b_=i(Qn);pu=a(b_,"LayoutLMv2Model"),b_.forEach(t),uu=a(ra," forward method, overrides the "),Ss=r(ra,"CODE",{});var L_=i(Ss);mu=a(L_,"__call__"),L_.forEach(t),fu=a(ra," special method."),ra.forEach(t),gu=p(vo),y(no.$$.fragment,vo),_u=p(vo),y(ao.$$.fragment,vo),vo.forEach(t),sa.forEach(t),Yr=p(o),Ae=r(o,"H2",{class:!0});var Mi=i(Ae);so=r(Mi,"A",{id:!0,class:!0,href:!0});var w_=i(so);Rs=r(w_,"SPAN",{});var k_=i(Rs);y(zt.$$.fragment,k_),k_.forEach(t),w_.forEach(t),vu=p(Mi),Us=r(Mi,"SPAN",{});var x_=i(Us);yu=a(x_,"LayoutLMv2ForSequenceClassification"),x_.forEach(t),Mi.forEach(t),Zr=p(o),Z=r(o,"DIV",{class:!0});var yo=i(Z);y(qt.$$.fragment,yo),bu=p(yo),Ft=r(yo,"P",{});var $i=i(Ft);Lu=a($i,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Pt=r($i,"A",{href:!0,rel:!0});var T_=i(Pt);wu=a(T_,"RVL-CDIP"),T_.forEach(t),ku=a($i," dataset."),$i.forEach(t),xu=p(yo),Ct=r(yo,"P",{});var Ei=i(Ct);Tu=a(Ei,"This model is a PyTorch "),jt=r(Ei,"A",{href:!0,rel:!0});var M_=i(jt);Mu=a(M_,"torch.nn.Module"),M_.forEach(t),$u=a(Ei,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ei.forEach(t),Eu=p(yo),ne=r(yo,"DIV",{class:!0});var bo=i(ne);y(It.$$.fragment,bo),zu=p(bo),Oe=r(bo,"P",{});var ia=i(Oe);qu=a(ia,"The "),Gn=r(ia,"A",{href:!0});var $_=i(Gn);Fu=a($_,"LayoutLMv2ForSequenceClassification"),$_.forEach(t),Pu=a(ia," forward method, overrides the "),Ws=r(ia,"CODE",{});var E_=i(Ws);Cu=a(E_,"__call__"),E_.forEach(t),ju=a(ia," special method."),ia.forEach(t),Iu=p(bo),y(ro.$$.fragment,bo),Au=p(bo),y(io.$$.fragment,bo),bo.forEach(t),yo.forEach(t),Jr=p(o),De=r(o,"H2",{class:!0});var zi=i(De);lo=r(zi,"A",{id:!0,class:!0,href:!0});var z_=i(lo);Bs=r(z_,"SPAN",{});var q_=i(Bs);y(At.$$.fragment,q_),q_.forEach(t),z_.forEach(t),Ou=p(zi),Vs=r(zi,"SPAN",{});var F_=i(Vs);Du=a(F_,"LayoutLMv2ForTokenClassification"),F_.forEach(t),zi.forEach(t),ei=p(o),J=r(o,"DIV",{class:!0});var Lo=i(J);y(Ot.$$.fragment,Lo),Nu=p(Lo),ee=r(Lo,"P",{});var ke=i(ee);Su=a(ke,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Dt=r(ke,"A",{href:!0,rel:!0});var P_=i(Dt);Ru=a(P_,"FUNSD"),P_.forEach(t),Uu=a(ke,", "),Nt=r(ke,"A",{href:!0,rel:!0});var C_=i(Nt);Wu=a(C_,"SROIE"),C_.forEach(t),Bu=a(ke,`,
`),St=r(ke,"A",{href:!0,rel:!0});var j_=i(St);Vu=a(j_,"CORD"),j_.forEach(t),Qu=a(ke," and "),Rt=r(ke,"A",{href:!0,rel:!0});var I_=i(Rt);Gu=a(I_,"Kleister-NDA"),I_.forEach(t),Hu=a(ke,"."),ke.forEach(t),Ku=p(Lo),Ut=r(Lo,"P",{});var qi=i(Ut);Xu=a(qi,"This model is a PyTorch "),Wt=r(qi,"A",{href:!0,rel:!0});var A_=i(Wt);Yu=a(A_,"torch.nn.Module"),A_.forEach(t),Zu=a(qi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qi.forEach(t),Ju=p(Lo),ae=r(Lo,"DIV",{class:!0});var wo=i(ae);y(Bt.$$.fragment,wo),em=p(wo),Ne=r(wo,"P",{});var la=i(Ne);om=a(la,"The "),Hn=r(la,"A",{href:!0});var O_=i(Hn);tm=a(O_,"LayoutLMv2ForTokenClassification"),O_.forEach(t),nm=a(la," forward method, overrides the "),Qs=r(la,"CODE",{});var D_=i(Qs);am=a(D_,"__call__"),D_.forEach(t),sm=a(la," special method."),la.forEach(t),rm=p(wo),y(co.$$.fragment,wo),im=p(wo),y(ho.$$.fragment,wo),wo.forEach(t),Lo.forEach(t),oi=p(o),Se=r(o,"H2",{class:!0});var Fi=i(Se);po=r(Fi,"A",{id:!0,class:!0,href:!0});var N_=i(po);Gs=r(N_,"SPAN",{});var S_=i(Gs);y(Vt.$$.fragment,S_),S_.forEach(t),N_.forEach(t),lm=p(Fi),Hs=r(Fi,"SPAN",{});var R_=i(Hs);cm=a(R_,"LayoutLMv2ForQuestionAnswering"),R_.forEach(t),Fi.forEach(t),ti=p(o),oe=r(o,"DIV",{class:!0});var ko=i(oe);y(Qt.$$.fragment,ko),dm=p(ko),ce=r(ko,"P",{});var xo=i(ce);hm=a(xo,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Gt=r(xo,"A",{href:!0,rel:!0});var U_=i(Gt);pm=a(U_,"DocVQA"),U_.forEach(t),um=a(xo,` (a linear layer on top of the text part of the hidden-states output to
compute `),Ks=r(xo,"CODE",{});var W_=i(Ks);mm=a(W_,"span start logits"),W_.forEach(t),fm=a(xo," and "),Xs=r(xo,"CODE",{});var B_=i(Xs);gm=a(B_,"span end logits"),B_.forEach(t),_m=a(xo,")."),xo.forEach(t),vm=p(ko),Ht=r(ko,"P",{});var Pi=i(Ht);ym=a(Pi,"This model is a PyTorch "),Kt=r(Pi,"A",{href:!0,rel:!0});var V_=i(Kt);bm=a(V_,"torch.nn.Module"),V_.forEach(t),Lm=a(Pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pi.forEach(t),wm=p(ko),se=r(ko,"DIV",{class:!0});var To=i(se);y(Xt.$$.fragment,To),km=p(To),Re=r(To,"P",{});var ca=i(Re);xm=a(ca,"The "),Kn=r(ca,"A",{href:!0});var Q_=i(Kn);Tm=a(Q_,"LayoutLMv2ForQuestionAnswering"),Q_.forEach(t),Mm=a(ca," forward method, overrides the "),Ys=r(ca,"CODE",{});var G_=i(Ys);$m=a(G_,"__call__"),G_.forEach(t),Em=a(ca," special method."),ca.forEach(t),zm=p(To),y(uo.$$.fragment,To),qm=p(To),y(mo.$$.fragment,To),To.forEach(t),ko.forEach(t),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(dv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(_,"class","relative group"),l(We,"id","overview"),l(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(We,"href","#overview"),l(xe,"class","relative group"),l($o,"href","https://arxiv.org/abs/2012.14740"),l($o,"rel","nofollow"),l(Jt,"href","layoutlm"),l(Eo,"href","https://guillaumejaume.github.io/FUNSD/"),l(Eo,"rel","nofollow"),l(zo,"href","https://github.com/clovaai/cord"),l(zo,"rel","nofollow"),l(qo,"href","https://rrc.cvc.uab.es/?ch=13"),l(qo,"rel","nofollow"),l(Fo,"href","https://github.com/applicaai/kleister-nda"),l(Fo,"rel","nofollow"),l(Co,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Co,"rel","nofollow"),l(Io,"href","https://arxiv.org/abs/2007.00398"),l(Io,"rel","nofollow"),l(Oo,"href","https://arxiv.org/abs/2012.14740"),l(Oo,"rel","nofollow"),l(No,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(No,"rel","nofollow"),l(So,"href","https://github.com/facebookresearch/detectron2/"),l(So,"rel","nofollow"),l(Ro,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Ro,"rel","nofollow"),l(nn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(an,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Uo,"href","https://github.com/tesseract-ocr/tesseract"),l(Uo,"rel","nofollow"),l(Wo,"href","https://pypi.org/project/pytesseract/"),l(Wo,"rel","nofollow"),l(sn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(rn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ln,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(cn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(dn,"href","layoutxlm"),l(Qe,"id","usage-layoutlmv2processor"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#usage-layoutlmv2processor"),l(Me,"class","relative group"),l(hn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(pn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(un,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(mn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(fn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(gn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(_n,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(vn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(yn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Xo,"href","https://pypi.org/project/pytesseract/"),l(Xo,"rel","nofollow"),l(bn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Ge,"id","transformers.LayoutLMv2Config"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.LayoutLMv2Config"),l($e,"class","relative group"),l(qn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(at,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(at,"rel","nofollow"),l(Fn,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),l(Pn,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ke,"id","transformers.LayoutLMv2FeatureExtractor"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#transformers.LayoutLMv2FeatureExtractor"),l(qe,"class","relative group"),l(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ye,"id","transformers.LayoutLMv2Tokenizer"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#transformers.LayoutLMv2Tokenizer"),l(Fe,"class","relative group"),l(Cn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(jn,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(An,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Je,"id","transformers.LayoutLMv2TokenizerFast"),l(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Je,"href","#transformers.LayoutLMv2TokenizerFast"),l(Pe,"class","relative group"),l(Dn,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oo,"id","transformers.LayoutLMv2Processor"),l(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oo,"href","#transformers.LayoutLMv2Processor"),l(Ce,"class","relative group"),l(Sn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Rn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Un,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Wn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(wt,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Bn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(kt,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Vn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(to,"id","transformers.LayoutLMv2Model"),l(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(to,"href","#transformers.LayoutLMv2Model"),l(je,"class","relative group"),l($t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l($t,"rel","nofollow"),l(Qn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(so,"id","transformers.LayoutLMv2ForSequenceClassification"),l(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(so,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Ae,"class","relative group"),l(Pt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Pt,"rel","nofollow"),l(jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(jt,"rel","nofollow"),l(Gn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lo,"id","transformers.LayoutLMv2ForTokenClassification"),l(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lo,"href","#transformers.LayoutLMv2ForTokenClassification"),l(De,"class","relative group"),l(Dt,"href","https://guillaumejaume.github.io/FUNSD/"),l(Dt,"rel","nofollow"),l(Nt,"href","https://rrc.cvc.uab.es/?ch=13"),l(Nt,"rel","nofollow"),l(St,"href","https://github.com/clovaai/cord"),l(St,"rel","nofollow"),l(Rt,"href","https://github.com/applicaai/kleister-nda"),l(Rt,"rel","nofollow"),l(Wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Wt,"rel","nofollow"),l(Hn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(po,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(po,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Se,"class","relative group"),l(Gt,"href","https://rrc.cvc.uab.es/?ch=17"),l(Gt,"rel","nofollow"),l(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Kt,"rel","nofollow"),l(Kn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,c){e(document.head,m),u(o,T,c),u(o,_,c),e(_,g),e(g,x),b(d,x,null),e(_,f),e(_,O),e(O,ji),u(o,sr,c),u(o,xe,c),e(xe,We),e(We,pa),b(Mo,pa,null),e(xe,Ii),e(xe,ua),e(ua,Ai),u(o,rr,c),u(o,he,c),e(he,Oi),e(he,$o),e($o,Di),e(he,Ni),e(he,Jt),e(Jt,Si),e(he,Ri),u(o,ir,c),u(o,pe,c),e(pe,H),e(H,Ui),e(H,Eo),e(Eo,Wi),e(H,Bi),e(H,zo),e(zo,Vi),e(H,Qi),e(H,qo),e(qo,Gi),e(H,Hi),e(H,Fo),e(Fo,Ki),e(H,Xi),e(pe,Yi),e(pe,Po),e(Po,Zi),e(Po,Co),e(Co,Ji),e(Po,el),e(pe,ol),e(pe,jo),e(jo,tl),e(jo,Io),e(Io,nl),e(jo,al),u(o,lr,c),u(o,en,c),e(en,sl),u(o,cr,c),u(o,on,c),e(on,ma),e(ma,rl),u(o,dr,c),u(o,tn,c),e(tn,il),u(o,hr,c),u(o,W,c),e(W,fa),e(fa,ll),e(W,cl),e(W,Ao),e(Ao,dl),e(Ao,Oo),e(Oo,hl),e(Ao,pl),e(W,ul),e(W,Do),e(Do,ml),e(Do,No),e(No,fl),e(Do,gl),e(W,_l),e(W,Te),e(Te,vl),e(Te,So),e(So,yl),e(Te,bl),e(Te,Ro),e(Ro,Ll),e(Te,wl),e(W,kl),e(W,M),e(M,xl),e(M,ga),e(ga,Tl),e(M,Ml),e(M,nn),e(nn,$l),e(M,El),e(M,_a),e(_a,zl),e(M,ql),e(M,va),e(va,Fl),e(M,Pl),e(M,ya),e(ya,Cl),e(M,jl),e(M,ba),e(ba,Il),e(M,Al),e(M,La),e(La,Ol),e(M,Dl),e(M,wa),e(wa,Nl),e(M,Sl),e(M,ka),e(ka,Rl),e(M,Ul),e(M,an),e(an,Wl),e(M,Bl),e(M,Uo),e(Uo,Vl),e(M,Ql),e(M,Wo),e(Wo,Gl),e(M,Hl),u(o,pr,c),b(Bo,o,c),u(o,ur,c),u(o,ue,c),e(ue,Kl),e(ue,xa),e(xa,Xl),e(ue,Yl),e(ue,Ta),e(Ta,Zl),e(ue,Jl),u(o,mr,c),b(Vo,o,c),u(o,fr,c),u(o,Be,c),e(Be,ec),e(Be,sn),e(sn,oc),e(Be,tc),u(o,gr,c),u(o,me,c),e(me,I),e(I,nc),e(I,rn),e(rn,ac),e(I,sc),e(I,Ma),e(Ma,rc),e(I,ic),e(I,$a),e($a,lc),e(I,cc),e(I,ln),e(ln,dc),e(I,hc),e(I,Ea),e(Ea,pc),e(I,uc),e(I,za),e(za,mc),e(I,fc),e(I,qa),e(qa,gc),e(I,_c),e(me,vc),e(me,Qo),e(Qo,yc),e(Qo,cn),e(cn,bc),e(Qo,Lc),e(me,wc),e(me,Go),e(Go,kc),e(Go,Fa),e(Fa,xc),e(Go,Tc),u(o,_r,c),u(o,Ve,c),e(Ve,Mc),e(Ve,dn),e(dn,$c),e(Ve,Ec),u(o,vr,c),u(o,Me,c),e(Me,Qe),e(Qe,Pa),b(Ho,Pa,null),e(Me,zc),e(Me,Ca),e(Ca,qc),u(o,yr,c),u(o,B,c),e(B,Fc),e(B,hn),e(hn,Pc),e(B,Cc),e(B,pn),e(pn,jc),e(B,Ic),e(B,un),e(un,Ac),e(B,Oc),e(B,mn),e(mn,Dc),e(B,Nc),u(o,br,c),b(Ko,o,c),u(o,Lr,c),u(o,E,c),e(E,Sc),e(E,fn),e(fn,Rc),e(E,Uc),e(E,gn),e(gn,Wc),e(E,Bc),e(E,ja),e(ja,Vc),e(E,Qc),e(E,_n),e(_n,Gc),e(E,Hc),e(E,vn),e(vn,Kc),e(E,Xc),e(E,Ia),e(Ia,Yc),e(E,Zc),e(E,Aa),e(Aa,Jc),e(E,ed),e(E,Oa),e(Oa,od),e(E,td),e(E,Da),e(Da,nd),e(E,ad),e(E,Na),e(Na,sd),e(E,rd),u(o,wr,c),u(o,R,c),e(R,yn),e(yn,id),e(R,ld),e(R,Xo),e(Xo,cd),e(R,dd),e(R,bn),e(bn,hd),e(R,pd),e(R,Sa),e(Sa,ud),e(R,md),e(R,Ra),e(Ra,fd),e(R,gd),u(o,kr,c),u(o,Ln,c),e(Ln,_d),u(o,xr,c),u(o,wn,c),e(wn,Ua),e(Ua,vd),u(o,Tr,c),u(o,kn,c),e(kn,yd),u(o,Mr,c),b(Yo,o,c),u(o,$r,c),u(o,xn,c),e(xn,Wa),e(Wa,bd),u(o,Er,c),u(o,fe,c),e(fe,Ld),e(fe,Ba),e(Ba,wd),e(fe,kd),e(fe,Va),e(Va,xd),e(fe,Td),u(o,zr,c),b(Zo,o,c),u(o,qr,c),u(o,Tn,c),e(Tn,Qa),e(Qa,Md),u(o,Fr,c),u(o,V,c),e(V,$d),e(V,Ga),e(Ga,Ed),e(V,zd),e(V,Ha),e(Ha,qd),e(V,Fd),e(V,Ka),e(Ka,Pd),e(V,Cd),e(V,Xa),e(Xa,jd),e(V,Id),u(o,Pr,c),b(Jo,o,c),u(o,Cr,c),u(o,Mn,c),e(Mn,Ya),e(Ya,Ad),u(o,jr,c),u(o,$n,c),e($n,Od),u(o,Ir,c),b(et,o,c),u(o,Ar,c),u(o,En,c),e(En,Za),e(Za,Dd),u(o,Or,c),u(o,zn,c),e(zn,Nd),u(o,Dr,c),b(ot,o,c),u(o,Nr,c),u(o,$e,c),e($e,Ge),e(Ge,Ja),b(tt,Ja,null),e($e,Sd),e($e,es),e(es,Rd),u(o,Sr,c),u(o,K,c),b(nt,K,null),e(K,Ud),e(K,Ee),e(Ee,Wd),e(Ee,qn),e(qn,Bd),e(Ee,Vd),e(Ee,at),e(at,Qd),e(Ee,Gd),e(K,Hd),e(K,ze),e(ze,Kd),e(ze,Fn),e(Fn,Xd),e(ze,Yd),e(ze,Pn),e(Pn,Zd),e(ze,Jd),e(K,eh),b(He,K,null),u(o,Rr,c),u(o,qe,c),e(qe,Ke),e(Ke,os),b(st,os,null),e(qe,oh),e(qe,ts),e(ts,th),u(o,Ur,c),u(o,X,c),b(rt,X,null),e(X,nh),e(X,ns),e(ns,ah),e(X,sh),e(X,it),e(it,rh),e(it,as),e(as,ih),e(it,lh),e(X,ch),e(X,ge),b(lt,ge,null),e(ge,dh),e(ge,ss),e(ss,hh),e(ge,ph),b(Xe,ge,null),u(o,Wr,c),u(o,Fe,c),e(Fe,Ye),e(Ye,rs),b(ct,rs,null),e(Fe,uh),e(Fe,is),e(is,mh),u(o,Br,c),u(o,D,c),b(dt,D,null),e(D,fh),e(D,N),e(N,gh),e(N,Cn),e(Cn,_h),e(N,vh),e(N,ls),e(ls,yh),e(N,bh),e(N,cs),e(cs,Lh),e(N,wh),e(N,ds),e(ds,kh),e(N,xh),e(N,hs),e(hs,Th),e(N,Mh),e(N,ps),e(ps,$h),e(N,Eh),e(D,zh),e(D,ht),e(ht,qh),e(ht,jn),e(jn,Fh),e(ht,Ph),e(D,Ch),e(D,In),e(In,An),e(An,jh),e(In,Ih),e(D,Ah),e(D,Ze),b(pt,Ze,null),e(Ze,Oh),e(Ze,us),e(us,Dh),e(D,Nh),e(D,On),b(ut,On,null),u(o,Vr,c),u(o,Pe,c),e(Pe,Je),e(Je,ms),b(mt,ms,null),e(Pe,Sh),e(Pe,fs),e(fs,Rh),u(o,Qr,c),u(o,Y,c),b(ft,Y,null),e(Y,Uh),e(Y,gt),e(gt,Wh),e(gt,gs),e(gs,Bh),e(gt,Vh),e(Y,Qh),e(Y,_t),e(_t,Gh),e(_t,Dn),e(Dn,Hh),e(_t,Kh),e(Y,Xh),e(Y,eo),b(vt,eo,null),e(eo,Yh),e(eo,_s),e(_s,Zh),u(o,Gr,c),u(o,Ce,c),e(Ce,oo),e(oo,vs),b(yt,vs,null),e(Ce,Jh),e(Ce,ys),e(ys,ep),u(o,Hr,c),u(o,U,c),b(bt,U,null),e(U,op),e(U,bs),e(bs,tp),e(U,np),e(U,Nn),e(Nn,Sn),e(Sn,ap),e(Nn,sp),e(U,rp),e(U,F),e(F,ip),e(F,Rn),e(Rn,lp),e(F,cp),e(F,Un),e(Un,dp),e(F,hp),e(F,Wn),e(Wn,pp),e(F,up),e(F,Ls),e(Ls,mp),e(F,fp),e(F,ws),e(ws,gp),e(F,_p),e(F,ks),e(ks,vp),e(F,yp),e(F,xs),e(xs,bp),e(F,Lp),e(F,Ts),e(Ts,wp),e(F,kp),e(F,Ms),e(Ms,xp),e(F,Tp),e(U,Mp),e(U,_e),b(Lt,_e,null),e(_e,$p),e(_e,$),e($,Ep),e($,$s),e($s,zp),e($,qp),e($,wt),e(wt,Es),e(Es,Fp),e(wt,Pp),e($,Cp),e($,Bn),e(Bn,jp),e($,Ip),e($,zs),e(zs,Ap),e($,Op),e($,qs),e(qs,Dp),e($,Np),e($,kt),e(kt,Fs),e(Fs,Sp),e(kt,Rp),e($,Up),e($,Ps),e(Ps,Wp),e($,Bp),e($,Vn),e(Vn,Vp),e($,Qp),e($,Cs),e(Cs,Gp),e($,Hp),e($,js),e(js,Kp),e($,Xp),e($,Is),e(Is,Yp),e($,Zp),e($,As),e(As,Jp),e($,eu),e(_e,ou),e(_e,Os),e(Os,tu),u(o,Kr,c),u(o,je,c),e(je,to),e(to,Ds),b(xt,Ds,null),e(je,nu),e(je,Ns),e(Ns,au),u(o,Xr,c),u(o,le,c),b(Tt,le,null),e(le,su),e(le,Mt),e(Mt,ru),e(Mt,$t),e($t,iu),e(Mt,lu),e(le,cu),e(le,te),b(Et,te,null),e(te,du),e(te,Ie),e(Ie,hu),e(Ie,Qn),e(Qn,pu),e(Ie,uu),e(Ie,Ss),e(Ss,mu),e(Ie,fu),e(te,gu),b(no,te,null),e(te,_u),b(ao,te,null),u(o,Yr,c),u(o,Ae,c),e(Ae,so),e(so,Rs),b(zt,Rs,null),e(Ae,vu),e(Ae,Us),e(Us,yu),u(o,Zr,c),u(o,Z,c),b(qt,Z,null),e(Z,bu),e(Z,Ft),e(Ft,Lu),e(Ft,Pt),e(Pt,wu),e(Ft,ku),e(Z,xu),e(Z,Ct),e(Ct,Tu),e(Ct,jt),e(jt,Mu),e(Ct,$u),e(Z,Eu),e(Z,ne),b(It,ne,null),e(ne,zu),e(ne,Oe),e(Oe,qu),e(Oe,Gn),e(Gn,Fu),e(Oe,Pu),e(Oe,Ws),e(Ws,Cu),e(Oe,ju),e(ne,Iu),b(ro,ne,null),e(ne,Au),b(io,ne,null),u(o,Jr,c),u(o,De,c),e(De,lo),e(lo,Bs),b(At,Bs,null),e(De,Ou),e(De,Vs),e(Vs,Du),u(o,ei,c),u(o,J,c),b(Ot,J,null),e(J,Nu),e(J,ee),e(ee,Su),e(ee,Dt),e(Dt,Ru),e(ee,Uu),e(ee,Nt),e(Nt,Wu),e(ee,Bu),e(ee,St),e(St,Vu),e(ee,Qu),e(ee,Rt),e(Rt,Gu),e(ee,Hu),e(J,Ku),e(J,Ut),e(Ut,Xu),e(Ut,Wt),e(Wt,Yu),e(Ut,Zu),e(J,Ju),e(J,ae),b(Bt,ae,null),e(ae,em),e(ae,Ne),e(Ne,om),e(Ne,Hn),e(Hn,tm),e(Ne,nm),e(Ne,Qs),e(Qs,am),e(Ne,sm),e(ae,rm),b(co,ae,null),e(ae,im),b(ho,ae,null),u(o,oi,c),u(o,Se,c),e(Se,po),e(po,Gs),b(Vt,Gs,null),e(Se,lm),e(Se,Hs),e(Hs,cm),u(o,ti,c),u(o,oe,c),b(Qt,oe,null),e(oe,dm),e(oe,ce),e(ce,hm),e(ce,Gt),e(Gt,pm),e(ce,um),e(ce,Ks),e(Ks,mm),e(ce,fm),e(ce,Xs),e(Xs,gm),e(ce,_m),e(oe,vm),e(oe,Ht),e(Ht,ym),e(Ht,Kt),e(Kt,bm),e(Ht,Lm),e(oe,wm),e(oe,se),b(Xt,se,null),e(se,km),e(se,Re),e(Re,xm),e(Re,Kn),e(Kn,Tm),e(Re,Mm),e(Re,Ys),e(Ys,$m),e(Re,Em),e(se,zm),b(uo,se,null),e(se,qm),b(mo,se,null),ni=!0},p(o,[c]){const Yt={};c&2&&(Yt.$$scope={dirty:c,ctx:o}),He.$set(Yt);const Zs={};c&2&&(Zs.$$scope={dirty:c,ctx:o}),Xe.$set(Zs);const Js={};c&2&&(Js.$$scope={dirty:c,ctx:o}),no.$set(Js);const er={};c&2&&(er.$$scope={dirty:c,ctx:o}),ao.$set(er);const Zt={};c&2&&(Zt.$$scope={dirty:c,ctx:o}),ro.$set(Zt);const or={};c&2&&(or.$$scope={dirty:c,ctx:o}),io.$set(or);const tr={};c&2&&(tr.$$scope={dirty:c,ctx:o}),co.$set(tr);const nr={};c&2&&(nr.$$scope={dirty:c,ctx:o}),ho.$set(nr);const Ue={};c&2&&(Ue.$$scope={dirty:c,ctx:o}),uo.$set(Ue);const ar={};c&2&&(ar.$$scope={dirty:c,ctx:o}),mo.$set(ar)},i(o){ni||(L(d.$$.fragment,o),L(Mo.$$.fragment,o),L(Bo.$$.fragment,o),L(Vo.$$.fragment,o),L(Ho.$$.fragment,o),L(Ko.$$.fragment,o),L(Yo.$$.fragment,o),L(Zo.$$.fragment,o),L(Jo.$$.fragment,o),L(et.$$.fragment,o),L(ot.$$.fragment,o),L(tt.$$.fragment,o),L(nt.$$.fragment,o),L(He.$$.fragment,o),L(st.$$.fragment,o),L(rt.$$.fragment,o),L(lt.$$.fragment,o),L(Xe.$$.fragment,o),L(ct.$$.fragment,o),L(dt.$$.fragment,o),L(pt.$$.fragment,o),L(ut.$$.fragment,o),L(mt.$$.fragment,o),L(ft.$$.fragment,o),L(vt.$$.fragment,o),L(yt.$$.fragment,o),L(bt.$$.fragment,o),L(Lt.$$.fragment,o),L(xt.$$.fragment,o),L(Tt.$$.fragment,o),L(Et.$$.fragment,o),L(no.$$.fragment,o),L(ao.$$.fragment,o),L(zt.$$.fragment,o),L(qt.$$.fragment,o),L(It.$$.fragment,o),L(ro.$$.fragment,o),L(io.$$.fragment,o),L(At.$$.fragment,o),L(Ot.$$.fragment,o),L(Bt.$$.fragment,o),L(co.$$.fragment,o),L(ho.$$.fragment,o),L(Vt.$$.fragment,o),L(Qt.$$.fragment,o),L(Xt.$$.fragment,o),L(uo.$$.fragment,o),L(mo.$$.fragment,o),ni=!0)},o(o){w(d.$$.fragment,o),w(Mo.$$.fragment,o),w(Bo.$$.fragment,o),w(Vo.$$.fragment,o),w(Ho.$$.fragment,o),w(Ko.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(Jo.$$.fragment,o),w(et.$$.fragment,o),w(ot.$$.fragment,o),w(tt.$$.fragment,o),w(nt.$$.fragment,o),w(He.$$.fragment,o),w(st.$$.fragment,o),w(rt.$$.fragment,o),w(lt.$$.fragment,o),w(Xe.$$.fragment,o),w(ct.$$.fragment,o),w(dt.$$.fragment,o),w(pt.$$.fragment,o),w(ut.$$.fragment,o),w(mt.$$.fragment,o),w(ft.$$.fragment,o),w(vt.$$.fragment,o),w(yt.$$.fragment,o),w(bt.$$.fragment,o),w(Lt.$$.fragment,o),w(xt.$$.fragment,o),w(Tt.$$.fragment,o),w(Et.$$.fragment,o),w(no.$$.fragment,o),w(ao.$$.fragment,o),w(zt.$$.fragment,o),w(qt.$$.fragment,o),w(It.$$.fragment,o),w(ro.$$.fragment,o),w(io.$$.fragment,o),w(At.$$.fragment,o),w(Ot.$$.fragment,o),w(Bt.$$.fragment,o),w(co.$$.fragment,o),w(ho.$$.fragment,o),w(Vt.$$.fragment,o),w(Qt.$$.fragment,o),w(Xt.$$.fragment,o),w(uo.$$.fragment,o),w(mo.$$.fragment,o),ni=!1},d(o){t(m),o&&t(T),o&&t(_),k(d),o&&t(sr),o&&t(xe),k(Mo),o&&t(rr),o&&t(he),o&&t(ir),o&&t(pe),o&&t(lr),o&&t(en),o&&t(cr),o&&t(on),o&&t(dr),o&&t(tn),o&&t(hr),o&&t(W),o&&t(pr),k(Bo,o),o&&t(ur),o&&t(ue),o&&t(mr),k(Vo,o),o&&t(fr),o&&t(Be),o&&t(gr),o&&t(me),o&&t(_r),o&&t(Ve),o&&t(vr),o&&t(Me),k(Ho),o&&t(yr),o&&t(B),o&&t(br),k(Ko,o),o&&t(Lr),o&&t(E),o&&t(wr),o&&t(R),o&&t(kr),o&&t(Ln),o&&t(xr),o&&t(wn),o&&t(Tr),o&&t(kn),o&&t(Mr),k(Yo,o),o&&t($r),o&&t(xn),o&&t(Er),o&&t(fe),o&&t(zr),k(Zo,o),o&&t(qr),o&&t(Tn),o&&t(Fr),o&&t(V),o&&t(Pr),k(Jo,o),o&&t(Cr),o&&t(Mn),o&&t(jr),o&&t($n),o&&t(Ir),k(et,o),o&&t(Ar),o&&t(En),o&&t(Or),o&&t(zn),o&&t(Dr),k(ot,o),o&&t(Nr),o&&t($e),k(tt),o&&t(Sr),o&&t(K),k(nt),k(He),o&&t(Rr),o&&t(qe),k(st),o&&t(Ur),o&&t(X),k(rt),k(lt),k(Xe),o&&t(Wr),o&&t(Fe),k(ct),o&&t(Br),o&&t(D),k(dt),k(pt),k(ut),o&&t(Vr),o&&t(Pe),k(mt),o&&t(Qr),o&&t(Y),k(ft),k(vt),o&&t(Gr),o&&t(Ce),k(yt),o&&t(Hr),o&&t(U),k(bt),k(Lt),o&&t(Kr),o&&t(je),k(xt),o&&t(Xr),o&&t(le),k(Tt),k(Et),k(no),k(ao),o&&t(Yr),o&&t(Ae),k(zt),o&&t(Zr),o&&t(Z),k(qt),k(It),k(ro),k(io),o&&t(Jr),o&&t(De),k(At),o&&t(ei),o&&t(J),k(Ot),k(Bt),k(co),k(ho),o&&t(oi),o&&t(Se),k(Vt),o&&t(ti),o&&t(oe),k(Qt),k(Xt),k(uo),k(mo)}}}const dv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function hv(P){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vv extends H_{constructor(m){super();K_(this,m,hv,cv,X_,{})}}export{vv as default,dv as metadata};
