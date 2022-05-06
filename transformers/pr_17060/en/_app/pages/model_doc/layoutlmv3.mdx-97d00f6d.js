import{S as Iu,i as Nu,s as Su,e as s,k as c,w as y,t as n,M as Du,c as r,d as t,m as u,a as i,x as b,h as a,b as d,N as Ou,F as e,g,y as L,q as k,o as w,B as x,v as Wu,L as Qt}from"../../chunks/vendor-6b77c823.js";import{T as ss}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as Ht}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Y}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Vt}from"../../chunks/ExampleCodeBlock-5212b321.js";function Ru(q){let m,T,_,f,v;return f=new Ht({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

# Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration
configuration = LayoutLMv3Config()

# Initializing a model from the microsoft/layoutlmv3-base style configuration
model = LayoutLMv3Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3Model, LayoutLMv3Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv3Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv3Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=s("p"),T=n("Example:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Example:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:Qt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),x(f,l)}}}function Bu(q){let m,T,_,f,v;return f=new Ht({props:{code:`from transformers import LayoutLMv3FeatureExtractor
from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

# option 1: with apply_ocr=True (default)
feature_extractor = LayoutLMv3FeatureExtractor()
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values', 'words', 'boxes'])

# option 2: with apply_ocr=False
feature_extractor = LayoutLMv3FeatureExtractor(apply_ocr=False)
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3FeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:Qt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),x(f,l)}}}function Uu(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Vu(q){let m,T,_,f,v;return f=new Ht({props:{code:`from transformers import AutoProcessor, AutoModel
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base")
model = AutoModel.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
image = dataset[0]["image"]

encoding = processor(image, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:Qt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),x(f,l)}}}function Qu(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Hu(q){let m,T,_,f,v;return f=new Ht({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base")
model = AutoModelForSequenceClassification.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
image = dataset[0]["image"]

encoding = processor(image, return_tensors="pt")
sequence_label = torch.tensor([1])

outputs = model(**encoding, labels=sequence_label)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:Qt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),x(f,l)}}}function Gu(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Xu(q){let m,T,_,f,v;return f=new Ht({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", revision="no_ocr")
model = AutoModelForTokenClassification.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["boxes"]
word_labels = [0, 1]

encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")

outputs = model(**encoding)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;boxes&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:Qt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),x(f,l)}}}function Ju(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Yu(q){let m,T,_,f,v;return f=new Ht({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base")
model = AutoModelForQuestionAnswering.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
image = dataset[0]["image"]
question = "what's his name?"

encoding = processor(image, question, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:Qt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),x(f,l)}}}function Ku(q){let m,T,_,f,v,l,h,P,rs,da,ae,ke,Gt,ao,is,Xt,ls,ca,K,ds,so,cs,us,it,ms,ps,ua,lt,hs,ma,dt,Jt,fs,pa,ct,gs,ha,we,Yt,_s,vs,se,ys,ut,bs,Ls,mt,ks,ws,fa,xe,Nd,ga,Te,xs,pt,Ts,Ms,_a,Z,$s,ro,zs,qs,io,Es,Fs,va,re,Me,Kt,lo,Cs,Zt,Ps,ya,N,co,As,ie,js,ht,Is,Ns,uo,Ss,Ds,Os,le,Ws,ft,Rs,Bs,gt,Us,Vs,Qs,$e,ba,de,ze,en,mo,Hs,on,Gs,La,S,po,Xs,tn,Js,Ys,ho,Ks,nn,Zs,er,or,ee,fo,tr,an,nr,ar,qe,ka,ce,Ee,sn,go,sr,rn,rr,wa,A,_o,ir,F,lr,ln,dr,cr,_t,ur,mr,dn,pr,hr,cn,fr,gr,un,_r,vr,mn,yr,br,pn,Lr,kr,wr,vo,xr,vt,Tr,Mr,$r,yt,bt,zr,qr,Er,Fe,yo,Fr,hn,Cr,Pr,Lt,bo,xa,ue,Ce,fn,Lo,Ar,gn,jr,Ta,D,ko,Ir,wo,Nr,_n,Sr,Dr,Or,xo,Wr,kt,Rr,Br,Ur,Pe,To,Vr,vn,Qr,Ma,me,Ae,yn,Mo,Hr,bn,Gr,$a,I,$o,Xr,Ln,Jr,Yr,wt,xt,Kr,Zr,ei,z,oi,Tt,ti,ni,Mt,ai,si,$t,ri,ii,kn,li,di,wn,ci,ui,xn,mi,pi,Tn,hi,fi,Mn,gi,_i,$n,vi,yi,bi,oe,zo,Li,M,ki,zn,wi,xi,qo,qn,Ti,Mi,$i,zt,zi,qi,En,Ei,Fi,Fn,Ci,Pi,Eo,Cn,Ai,ji,Ii,Pn,Ni,Si,qt,Di,Oi,An,Wi,Ri,jn,Bi,Ui,In,Vi,Qi,Nn,Hi,Gi,Sn,Xi,Ji,Fo,Dn,Yi,Ki,Zi,On,el,ol,tl,Wn,nl,za,pe,je,Rn,Co,al,Bn,sl,qa,X,Po,rl,Ao,il,jo,ll,dl,cl,U,Io,ul,he,ml,Et,pl,hl,Un,fl,gl,_l,Ie,vl,Ne,Ea,fe,Se,Vn,No,yl,Qn,bl,Fa,O,So,Ll,Do,kl,Oo,wl,xl,Tl,Wo,Ml,Ro,$l,zl,ql,V,Bo,El,ge,Fl,Ft,Cl,Pl,Hn,Al,jl,Il,De,Nl,Oe,Ca,_e,We,Gn,Uo,Sl,Xn,Dl,Pa,W,Vo,Ol,R,Wl,Qo,Rl,Bl,Ho,Ul,Vl,Go,Ql,Hl,Xo,Gl,Xl,Jl,Jo,Yl,Yo,Kl,Zl,ed,Q,Ko,od,ve,td,Ct,nd,ad,Jn,sd,rd,id,Re,ld,Be,Aa,ye,Ue,Yn,Zo,dd,Kn,cd,ja,B,et,ud,J,md,ot,pd,hd,Zn,fd,gd,ea,_d,vd,yd,tt,bd,nt,Ld,kd,wd,H,at,xd,be,Td,Pt,Md,$d,oa,zd,qd,Ed,Ve,Fd,Qe,Ia;return l=new Y({}),ao=new Y({}),lo=new Y({}),co=new C({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LayoutLMv3 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv3Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv3Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv3Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv3Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv3Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv3Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv3Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv3Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv3Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv3Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv3Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv3Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv3Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv3Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv3Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv3Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv3Config.visual_embed",description:`<strong>visual_embed</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add patch embeddings.`,name:"visual_embed"},{anchor:"transformers.LayoutLMv3Config.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of the images.`,name:"input_size"},{anchor:"transformers.LayoutLMv3Config.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of channels of the images.`,name:"num_channels"},{anchor:"transformers.LayoutLMv3Config.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of the patches.`,name:"patch_size"},{anchor:"transformers.LayoutLMv3Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L28"}}),$e=new Vt({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[Ru]},$$scope:{ctx:q}}}),mo=new Y({}),po=new C({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv3FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv3FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv3FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.LayoutLMv3FeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.LayoutLMv3FeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.LayoutLMv3FeatureExtractor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv3FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>Optional[str]</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv3FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L82"}}),fo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L143",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17060/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17060/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),qe=new Vt({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[Bu]},$$scope:{ctx:q}}}),go=new Y({}),_o=new C({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"add_visual_labels",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3Tokenizer.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutLMv3Tokenizer.add_visual_labels",description:`<strong>add_visual_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to also add labels for the visual tokens. Visual tokens will be labeled with
<code>pad_token_label</code>.`,name:"add_visual_labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L195"}}),yo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L530"}}),bo=new C({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L421"}}),Lo=new Y({}),ko=new C({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"add_visual_labels",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3TokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutLMv3TokenizerFast.add_visual_labels",description:`<strong>add_visual_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to also add labels for the visual tokens. Visual tokens will be labeled with
<code>pad_token_label</code>.`,name:"add_visual_labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),To=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17060/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L230"}}),Mo=new Y({}),$o=new C({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),zo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),Co=new Y({}),Po=new C({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L678"}}),Io=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length), 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17060/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L769",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new ss({props:{$$slots:{default:[Uu]},$$scope:{ctx:q}}}),Ne=new Vt({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Vu]},$$scope:{ctx:q}}}),No=new Y({}),So=new C({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1195"}}),Bo=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17060/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1207",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new ss({props:{$$slots:{default:[Qu]},$$scope:{ctx:q}}}),Oe=new Vt({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[Hu]},$$scope:{ctx:q}}}),Uo=new Y({}),Vo=new C({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L959"}}),Ko=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17060/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L976",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new ss({props:{$$slots:{default:[Gu]},$$scope:{ctx:q}}}),Be=new Vt({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Xu]},$$scope:{ctx:q}}}),Zo=new Y({}),et=new C({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1067"}}),at=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17060/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1080",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17060/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new ss({props:{$$slots:{default:[Ju]},$$scope:{ctx:q}}}),Qe=new Vt({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[Yu]},$$scope:{ctx:q}}}),{c(){m=s("meta"),T=c(),_=s("h1"),f=s("a"),v=s("span"),y(l.$$.fragment),h=c(),P=s("span"),rs=n("LayoutLMv3"),da=c(),ae=s("h2"),ke=s("a"),Gt=s("span"),y(ao.$$.fragment),is=c(),Xt=s("span"),ls=n("Overview"),ca=c(),K=s("p"),ds=n("The LayoutLMv3 model was proposed in "),so=s("a"),cs=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),us=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies LayoutLMv2 by using patch embeddings (as in `),it=s("a"),ms=n("ViT"),ps=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ua=c(),lt=s("p"),hs=n("The abstract from the paper is the following:"),ma=c(),dt=s("p"),Jt=s("em"),fs=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),pa=c(),ct=s("p"),gs=n("Tips:"),ha=c(),we=s("ul"),Yt=s("li"),_s=n("In terms of data processing, LayoutLMv3 is identical to LayoutLMv2, except that you need to make sure images are resized and normalized and in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),vs=c(),se=s("li"),ys=n("We refer to the docs of "),ut=s("a"),bs=n("LayoutLMv2Processor"),Ls=n(" regarding data preparation. Just make sure to use "),mt=s("a"),ks=n("LayoutLMv3Processor"),ws=n(" instead."),fa=c(),xe=s("img"),ga=c(),Te=s("small"),xs=n("LayoutLMv3 architecture. Taken from the "),pt=s("a"),Ts=n("original paper"),Ms=n("."),_a=c(),Z=s("p"),$s=n("This model was contributed by "),ro=s("a"),zs=n("nielsr"),qs=n(". The original code can be found "),io=s("a"),Es=n("here"),Fs=n("."),va=c(),re=s("h2"),Me=s("a"),Kt=s("span"),y(lo.$$.fragment),Cs=c(),Zt=s("span"),Ps=n("LayoutLMv3Config"),ya=c(),N=s("div"),y(co.$$.fragment),As=c(),ie=s("p"),js=n("This is the configuration class to store the configuration of a "),ht=s("a"),Is=n("LayoutLMv3Model"),Ns=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),uo=s("a"),Ss=n("microsoft/layoutlmv3-base"),Ds=n(" architecture."),Os=c(),le=s("p"),Ws=n("Configuration objects inherit from "),ft=s("a"),Rs=n("PretrainedConfig"),Bs=n(` and can be used to control the model outputs. Read the
documentation from `),gt=s("a"),Us=n("PretrainedConfig"),Vs=n(" for more information."),Qs=c(),y($e.$$.fragment),ba=c(),de=s("h2"),ze=s("a"),en=s("span"),y(mo.$$.fragment),Hs=c(),on=s("span"),Gs=n("LayoutLMv3FeatureExtractor"),La=c(),S=s("div"),y(po.$$.fragment),Xs=c(),tn=s("p"),Js=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Ys=c(),ho=s("p"),Ks=n("This feature extractor inherits from "),nn=s("code"),Zs=n("PreTrainedFeatureExtractor()"),er=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),or=c(),ee=s("div"),y(fo.$$.fragment),tr=c(),an=s("p"),nr=n("Main method to prepare for the model one or several image(s)."),ar=c(),y(qe.$$.fragment),ka=c(),ce=s("h2"),Ee=s("a"),sn=s("span"),y(go.$$.fragment),sr=c(),rn=s("span"),rr=n("LayoutLMv3Tokenizer"),wa=c(),A=s("div"),y(_o.$$.fragment),ir=c(),F=s("p"),lr=n("Construct a LayoutLMv3 tokenizer. Based on "),ln=s("code"),dr=n("RoBERTatokenizer"),cr=n(` (Byte Pair Encoding or BPE).
`),_t=s("a"),ur=n("LayoutLMv3Tokenizer"),mr=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),dn=s("code"),pr=n("input_ids"),hr=n(", "),cn=s("code"),fr=n("attention_mask"),gr=n(", "),un=s("code"),_r=n("token_type_ids"),vr=n(", "),mn=s("code"),yr=n("bbox"),br=n(", and optional "),pn=s("code"),Lr=n("labels"),kr=n(` (for token
classification).`),wr=c(),vo=s("p"),xr=n("This tokenizer inherits from "),vt=s("a"),Tr=n("PreTrainedTokenizer"),Mr=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$r=c(),yt=s("p"),bt=s("a"),zr=n("LayoutLMv3Tokenizer"),qr=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Er=c(),Fe=s("div"),y(yo.$$.fragment),Fr=c(),hn=s("p"),Cr=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Pr=c(),Lt=s("div"),y(bo.$$.fragment),xa=c(),ue=s("h2"),Ce=s("a"),fn=s("span"),y(Lo.$$.fragment),Ar=c(),gn=s("span"),jr=n("LayoutLMv3TokenizerFast"),Ta=c(),D=s("div"),y(ko.$$.fragment),Ir=c(),wo=s("p"),Nr=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),_n=s("em"),Sr=n("tokenizers"),Dr=n(" library). Based on BPE."),Or=c(),xo=s("p"),Wr=n("This tokenizer inherits from "),kt=s("a"),Rr=n("PreTrainedTokenizerFast"),Br=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ur=c(),Pe=s("div"),y(To.$$.fragment),Vr=c(),vn=s("p"),Qr=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ma=c(),me=s("h2"),Ae=s("a"),yn=s("span"),y(Mo.$$.fragment),Hr=c(),bn=s("span"),Gr=n("LayoutLMv3Processor"),$a=c(),I=s("div"),y($o.$$.fragment),Xr=c(),Ln=s("p"),Jr=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Yr=c(),wt=s("p"),xt=s("a"),Kr=n("LayoutLMv3Processor"),Zr=n(" offers all the functionalities you need to prepare data for the model."),ei=c(),z=s("p"),oi=n("It first uses "),Tt=s("a"),ti=n("LayoutLMv3FeatureExtractor"),ni=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Mt=s("a"),ai=n("LayoutLMv3Tokenizer"),si=n(` or
`),$t=s("a"),ri=n("LayoutLMv3TokenizerFast"),ii=n(", which turns the words and bounding boxes into token-level "),kn=s("code"),li=n("input_ids"),di=n(`,
`),wn=s("code"),ci=n("attention_mask"),ui=n(", "),xn=s("code"),mi=n("token_type_ids"),pi=n(", "),Tn=s("code"),hi=n("bbox"),fi=n(". Optionally, one can provide integer "),Mn=s("code"),gi=n("word_labels"),_i=n(`, which are turned
into token-level `),$n=s("code"),vi=n("labels"),yi=n(" for token classification tasks (such as FUNSD, CORD)."),bi=c(),oe=s("div"),y(zo.$$.fragment),Li=c(),M=s("p"),ki=n("This method first forwards the "),zn=s("code"),wi=n("images"),xi=n(" argument to "),qo=s("a"),qn=s("strong"),Ti=n("call"),Mi=n("()"),$i=n(`. In case
`),zt=s("a"),zi=n("LayoutLMv3FeatureExtractor"),qi=n(" was initialized with "),En=s("code"),Ei=n("apply_ocr"),Fi=n(" set to "),Fn=s("code"),Ci=n("True"),Pi=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Eo=s("a"),Cn=s("strong"),Ai=n("call"),ji=n("()"),Ii=n(` and returns the output,
together with resized and normalized `),Pn=s("code"),Ni=n("pixel_values"),Si=n(". In case "),qt=s("a"),Di=n("LayoutLMv3FeatureExtractor"),Oi=n(` was initialized
with `),An=s("code"),Wi=n("apply_ocr"),Ri=n(" set to "),jn=s("code"),Bi=n("False"),Ui=n(", it passes the words ("),In=s("code"),Vi=n("text"),Qi=n("/`"),Nn=s("code"),Hi=n("text_pair"),Gi=n(") and "),Sn=s("code"),Xi=n("boxes"),Ji=n(` specified by the user
along with the additional arguments to `),Fo=s("a"),Dn=s("strong"),Yi=n("call"),Ki=n("()"),Zi=n(` and returns the output, together with
resized and normalized `),On=s("code"),el=n("pixel_values"),ol=n("."),tl=c(),Wn=s("p"),nl=n("Please refer to the docstring of the above two methods for more information."),za=c(),pe=s("h2"),je=s("a"),Rn=s("span"),y(Co.$$.fragment),al=c(),Bn=s("span"),sl=n("LayoutLMv3Model"),qa=c(),X=s("div"),y(Po.$$.fragment),rl=c(),Ao=s("p"),il=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),jo=s("a"),ll=n("torch.nn.Module"),dl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cl=c(),U=s("div"),y(Io.$$.fragment),ul=c(),he=s("p"),ml=n("The "),Et=s("a"),pl=n("LayoutLMv3Model"),hl=n(" forward method, overrides the "),Un=s("code"),fl=n("__call__"),gl=n(" special method."),_l=c(),y(Ie.$$.fragment),vl=c(),y(Ne.$$.fragment),Ea=c(),fe=s("h2"),Se=s("a"),Vn=s("span"),y(No.$$.fragment),yl=c(),Qn=s("span"),bl=n("LayoutLMv3ForSequenceClassification"),Fa=c(),O=s("div"),y(So.$$.fragment),Ll=c(),Do=s("p"),kl=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Oo=s("a"),wl=n("RVL-CDIP"),xl=n(" dataset."),Tl=c(),Wo=s("p"),Ml=n("This model is a PyTorch "),Ro=s("a"),$l=n("torch.nn.Module"),zl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ql=c(),V=s("div"),y(Bo.$$.fragment),El=c(),ge=s("p"),Fl=n("The "),Ft=s("a"),Cl=n("LayoutLMv3ForSequenceClassification"),Pl=n(" forward method, overrides the "),Hn=s("code"),Al=n("__call__"),jl=n(" special method."),Il=c(),y(De.$$.fragment),Nl=c(),y(Oe.$$.fragment),Ca=c(),_e=s("h2"),We=s("a"),Gn=s("span"),y(Uo.$$.fragment),Sl=c(),Xn=s("span"),Dl=n("LayoutLMv3ForTokenClassification"),Pa=c(),W=s("div"),y(Vo.$$.fragment),Ol=c(),R=s("p"),Wl=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Qo=s("a"),Rl=n("FUNSD"),Bl=n(`,
`),Ho=s("a"),Ul=n("SROIE"),Vl=n(", "),Go=s("a"),Ql=n("CORD"),Hl=n(` and
`),Xo=s("a"),Gl=n("Kleister-NDA"),Xl=n("."),Jl=c(),Jo=s("p"),Yl=n("This model is a PyTorch "),Yo=s("a"),Kl=n("torch.nn.Module"),Zl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ed=c(),Q=s("div"),y(Ko.$$.fragment),od=c(),ve=s("p"),td=n("The "),Ct=s("a"),nd=n("LayoutLMv3ForTokenClassification"),ad=n(" forward method, overrides the "),Jn=s("code"),sd=n("__call__"),rd=n(" special method."),id=c(),y(Re.$$.fragment),ld=c(),y(Be.$$.fragment),Aa=c(),ye=s("h2"),Ue=s("a"),Yn=s("span"),y(Zo.$$.fragment),dd=c(),Kn=s("span"),cd=n("LayoutLMv3ForQuestionAnswering"),ja=c(),B=s("div"),y(et.$$.fragment),ud=c(),J=s("p"),md=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ot=s("a"),pd=n("DocVQA"),hd=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Zn=s("code"),fd=n("span start logits"),gd=n(" and "),ea=s("code"),_d=n("span end logits"),vd=n(")."),yd=c(),tt=s("p"),bd=n("This model is a PyTorch "),nt=s("a"),Ld=n("torch.nn.Module"),kd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wd=c(),H=s("div"),y(at.$$.fragment),xd=c(),be=s("p"),Td=n("The "),Pt=s("a"),Md=n("LayoutLMv3ForQuestionAnswering"),$d=n(" forward method, overrides the "),oa=s("code"),zd=n("__call__"),qd=n(" special method."),Ed=c(),y(Ve.$$.fragment),Fd=c(),y(Qe.$$.fragment),this.h()},l(o){const p=Du('[data-svelte="svelte-1phssyn"]',document.head);m=r(p,"META",{name:!0,content:!0}),p.forEach(t),T=u(o),_=r(o,"H1",{class:!0});var st=i(_);f=r(st,"A",{id:!0,class:!0,href:!0});var ta=i(f);v=r(ta,"SPAN",{});var na=i(v);b(l.$$.fragment,na),na.forEach(t),ta.forEach(t),h=u(st),P=r(st,"SPAN",{});var aa=i(P);rs=a(aa,"LayoutLMv3"),aa.forEach(t),st.forEach(t),da=u(o),ae=r(o,"H2",{class:!0});var rt=i(ae);ke=r(rt,"A",{id:!0,class:!0,href:!0});var sa=i(ke);Gt=r(sa,"SPAN",{});var ra=i(Gt);b(ao.$$.fragment,ra),ra.forEach(t),sa.forEach(t),is=u(rt),Xt=r(rt,"SPAN",{});var ia=i(Xt);ls=a(ia,"Overview"),ia.forEach(t),rt.forEach(t),ca=u(o),K=r(o,"P",{});var Le=i(K);ds=a(Le,"The LayoutLMv3 model was proposed in "),so=r(Le,"A",{href:!0,rel:!0});var la=i(so);cs=a(la,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),la.forEach(t),us=a(Le,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies LayoutLMv2 by using patch embeddings (as in `),it=r(Le,"A",{href:!0});var Sd=i(it);ms=a(Sd,"ViT"),Sd.forEach(t),ps=a(Le,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Le.forEach(t),ua=u(o),lt=r(o,"P",{});var Dd=i(lt);hs=a(Dd,"The abstract from the paper is the following:"),Dd.forEach(t),ma=u(o),dt=r(o,"P",{});var Od=i(dt);Jt=r(Od,"EM",{});var Wd=i(Jt);fs=a(Wd,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Wd.forEach(t),Od.forEach(t),pa=u(o),ct=r(o,"P",{});var Rd=i(ct);gs=a(Rd,"Tips:"),Rd.forEach(t),ha=u(o),we=r(o,"UL",{});var Na=i(we);Yt=r(Na,"LI",{});var Bd=i(Yt);_s=a(Bd,"In terms of data processing, LayoutLMv3 is identical to LayoutLMv2, except that you need to make sure images are resized and normalized and in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Bd.forEach(t),vs=u(Na),se=r(Na,"LI",{});var At=i(se);ys=a(At,"We refer to the docs of "),ut=r(At,"A",{href:!0});var Ud=i(ut);bs=a(Ud,"LayoutLMv2Processor"),Ud.forEach(t),Ls=a(At," regarding data preparation. Just make sure to use "),mt=r(At,"A",{href:!0});var Vd=i(mt);ks=a(Vd,"LayoutLMv3Processor"),Vd.forEach(t),ws=a(At," instead."),At.forEach(t),Na.forEach(t),fa=u(o),xe=r(o,"IMG",{src:!0,alt:!0,width:!0}),ga=u(o),Te=r(o,"SMALL",{});var Sa=i(Te);xs=a(Sa,"LayoutLMv3 architecture. Taken from the "),pt=r(Sa,"A",{href:!0});var Qd=i(pt);Ts=a(Qd,"original paper"),Qd.forEach(t),Ms=a(Sa,"."),Sa.forEach(t),_a=u(o),Z=r(o,"P",{});var jt=i(Z);$s=a(jt,"This model was contributed by "),ro=r(jt,"A",{href:!0,rel:!0});var Hd=i(ro);zs=a(Hd,"nielsr"),Hd.forEach(t),qs=a(jt,". The original code can be found "),io=r(jt,"A",{href:!0,rel:!0});var Gd=i(io);Es=a(Gd,"here"),Gd.forEach(t),Fs=a(jt,"."),jt.forEach(t),va=u(o),re=r(o,"H2",{class:!0});var Da=i(re);Me=r(Da,"A",{id:!0,class:!0,href:!0});var Xd=i(Me);Kt=r(Xd,"SPAN",{});var Jd=i(Kt);b(lo.$$.fragment,Jd),Jd.forEach(t),Xd.forEach(t),Cs=u(Da),Zt=r(Da,"SPAN",{});var Yd=i(Zt);Ps=a(Yd,"LayoutLMv3Config"),Yd.forEach(t),Da.forEach(t),ya=u(o),N=r(o,"DIV",{class:!0});var He=i(N);b(co.$$.fragment,He),As=u(He),ie=r(He,"P",{});var It=i(ie);js=a(It,"This is the configuration class to store the configuration of a "),ht=r(It,"A",{href:!0});var Kd=i(ht);Is=a(Kd,"LayoutLMv3Model"),Kd.forEach(t),Ns=a(It,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),uo=r(It,"A",{href:!0,rel:!0});var Zd=i(uo);Ss=a(Zd,"microsoft/layoutlmv3-base"),Zd.forEach(t),Ds=a(It," architecture."),It.forEach(t),Os=u(He),le=r(He,"P",{});var Nt=i(le);Ws=a(Nt,"Configuration objects inherit from "),ft=r(Nt,"A",{href:!0});var ec=i(ft);Rs=a(ec,"PretrainedConfig"),ec.forEach(t),Bs=a(Nt,` and can be used to control the model outputs. Read the
documentation from `),gt=r(Nt,"A",{href:!0});var oc=i(gt);Us=a(oc,"PretrainedConfig"),oc.forEach(t),Vs=a(Nt," for more information."),Nt.forEach(t),Qs=u(He),b($e.$$.fragment,He),He.forEach(t),ba=u(o),de=r(o,"H2",{class:!0});var Oa=i(de);ze=r(Oa,"A",{id:!0,class:!0,href:!0});var tc=i(ze);en=r(tc,"SPAN",{});var nc=i(en);b(mo.$$.fragment,nc),nc.forEach(t),tc.forEach(t),Hs=u(Oa),on=r(Oa,"SPAN",{});var ac=i(on);Gs=a(ac,"LayoutLMv3FeatureExtractor"),ac.forEach(t),Oa.forEach(t),La=u(o),S=r(o,"DIV",{class:!0});var Ge=i(S);b(po.$$.fragment,Ge),Xs=u(Ge),tn=r(Ge,"P",{});var sc=i(tn);Js=a(sc,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),sc.forEach(t),Ys=u(Ge),ho=r(Ge,"P",{});var Wa=i(ho);Ks=a(Wa,"This feature extractor inherits from "),nn=r(Wa,"CODE",{});var rc=i(nn);Zs=a(rc,"PreTrainedFeatureExtractor()"),rc.forEach(t),er=a(Wa,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Wa.forEach(t),or=u(Ge),ee=r(Ge,"DIV",{class:!0});var St=i(ee);b(fo.$$.fragment,St),tr=u(St),an=r(St,"P",{});var ic=i(an);nr=a(ic,"Main method to prepare for the model one or several image(s)."),ic.forEach(t),ar=u(St),b(qe.$$.fragment,St),St.forEach(t),Ge.forEach(t),ka=u(o),ce=r(o,"H2",{class:!0});var Ra=i(ce);Ee=r(Ra,"A",{id:!0,class:!0,href:!0});var lc=i(Ee);sn=r(lc,"SPAN",{});var dc=i(sn);b(go.$$.fragment,dc),dc.forEach(t),lc.forEach(t),sr=u(Ra),rn=r(Ra,"SPAN",{});var cc=i(rn);rr=a(cc,"LayoutLMv3Tokenizer"),cc.forEach(t),Ra.forEach(t),wa=u(o),A=r(o,"DIV",{class:!0});var G=i(A);b(_o.$$.fragment,G),ir=u(G),F=r(G,"P",{});var j=i(F);lr=a(j,"Construct a LayoutLMv3 tokenizer. Based on "),ln=r(j,"CODE",{});var uc=i(ln);dr=a(uc,"RoBERTatokenizer"),uc.forEach(t),cr=a(j,` (Byte Pair Encoding or BPE).
`),_t=r(j,"A",{href:!0});var mc=i(_t);ur=a(mc,"LayoutLMv3Tokenizer"),mc.forEach(t),mr=a(j,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),dn=r(j,"CODE",{});var pc=i(dn);pr=a(pc,"input_ids"),pc.forEach(t),hr=a(j,", "),cn=r(j,"CODE",{});var hc=i(cn);fr=a(hc,"attention_mask"),hc.forEach(t),gr=a(j,", "),un=r(j,"CODE",{});var fc=i(un);_r=a(fc,"token_type_ids"),fc.forEach(t),vr=a(j,", "),mn=r(j,"CODE",{});var gc=i(mn);yr=a(gc,"bbox"),gc.forEach(t),br=a(j,", and optional "),pn=r(j,"CODE",{});var _c=i(pn);Lr=a(_c,"labels"),_c.forEach(t),kr=a(j,` (for token
classification).`),j.forEach(t),wr=u(G),vo=r(G,"P",{});var Ba=i(vo);xr=a(Ba,"This tokenizer inherits from "),vt=r(Ba,"A",{href:!0});var vc=i(vt);Tr=a(vc,"PreTrainedTokenizer"),vc.forEach(t),Mr=a(Ba,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ba.forEach(t),$r=u(G),yt=r(G,"P",{});var Cd=i(yt);bt=r(Cd,"A",{href:!0});var yc=i(bt);zr=a(yc,"LayoutLMv3Tokenizer"),yc.forEach(t),qr=a(Cd,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Cd.forEach(t),Er=u(G),Fe=r(G,"DIV",{class:!0});var Ua=i(Fe);b(yo.$$.fragment,Ua),Fr=u(Ua),hn=r(Ua,"P",{});var bc=i(hn);Cr=a(bc,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),bc.forEach(t),Ua.forEach(t),Pr=u(G),Lt=r(G,"DIV",{class:!0});var Lc=i(Lt);b(bo.$$.fragment,Lc),Lc.forEach(t),G.forEach(t),xa=u(o),ue=r(o,"H2",{class:!0});var Va=i(ue);Ce=r(Va,"A",{id:!0,class:!0,href:!0});var kc=i(Ce);fn=r(kc,"SPAN",{});var wc=i(fn);b(Lo.$$.fragment,wc),wc.forEach(t),kc.forEach(t),Ar=u(Va),gn=r(Va,"SPAN",{});var xc=i(gn);jr=a(xc,"LayoutLMv3TokenizerFast"),xc.forEach(t),Va.forEach(t),Ta=u(o),D=r(o,"DIV",{class:!0});var Xe=i(D);b(ko.$$.fragment,Xe),Ir=u(Xe),wo=r(Xe,"P",{});var Qa=i(wo);Nr=a(Qa,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),_n=r(Qa,"EM",{});var Tc=i(_n);Sr=a(Tc,"tokenizers"),Tc.forEach(t),Dr=a(Qa," library). Based on BPE."),Qa.forEach(t),Or=u(Xe),xo=r(Xe,"P",{});var Ha=i(xo);Wr=a(Ha,"This tokenizer inherits from "),kt=r(Ha,"A",{href:!0});var Mc=i(kt);Rr=a(Mc,"PreTrainedTokenizerFast"),Mc.forEach(t),Br=a(Ha,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ha.forEach(t),Ur=u(Xe),Pe=r(Xe,"DIV",{class:!0});var Ga=i(Pe);b(To.$$.fragment,Ga),Vr=u(Ga),vn=r(Ga,"P",{});var $c=i(vn);Qr=a($c,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),$c.forEach(t),Ga.forEach(t),Xe.forEach(t),Ma=u(o),me=r(o,"H2",{class:!0});var Xa=i(me);Ae=r(Xa,"A",{id:!0,class:!0,href:!0});var zc=i(Ae);yn=r(zc,"SPAN",{});var qc=i(yn);b(Mo.$$.fragment,qc),qc.forEach(t),zc.forEach(t),Hr=u(Xa),bn=r(Xa,"SPAN",{});var Ec=i(bn);Gr=a(Ec,"LayoutLMv3Processor"),Ec.forEach(t),Xa.forEach(t),$a=u(o),I=r(o,"DIV",{class:!0});var te=i(I);b($o.$$.fragment,te),Xr=u(te),Ln=r(te,"P",{});var Fc=i(Ln);Jr=a(Fc,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Fc.forEach(t),Yr=u(te),wt=r(te,"P",{});var Pd=i(wt);xt=r(Pd,"A",{href:!0});var Cc=i(xt);Kr=a(Cc,"LayoutLMv3Processor"),Cc.forEach(t),Zr=a(Pd," offers all the functionalities you need to prepare data for the model."),Pd.forEach(t),ei=u(te),z=r(te,"P",{});var E=i(z);oi=a(E,"It first uses "),Tt=r(E,"A",{href:!0});var Pc=i(Tt);ti=a(Pc,"LayoutLMv3FeatureExtractor"),Pc.forEach(t),ni=a(E,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Mt=r(E,"A",{href:!0});var Ac=i(Mt);ai=a(Ac,"LayoutLMv3Tokenizer"),Ac.forEach(t),si=a(E,` or
`),$t=r(E,"A",{href:!0});var jc=i($t);ri=a(jc,"LayoutLMv3TokenizerFast"),jc.forEach(t),ii=a(E,", which turns the words and bounding boxes into token-level "),kn=r(E,"CODE",{});var Ic=i(kn);li=a(Ic,"input_ids"),Ic.forEach(t),di=a(E,`,
`),wn=r(E,"CODE",{});var Nc=i(wn);ci=a(Nc,"attention_mask"),Nc.forEach(t),ui=a(E,", "),xn=r(E,"CODE",{});var Sc=i(xn);mi=a(Sc,"token_type_ids"),Sc.forEach(t),pi=a(E,", "),Tn=r(E,"CODE",{});var Dc=i(Tn);hi=a(Dc,"bbox"),Dc.forEach(t),fi=a(E,". Optionally, one can provide integer "),Mn=r(E,"CODE",{});var Oc=i(Mn);gi=a(Oc,"word_labels"),Oc.forEach(t),_i=a(E,`, which are turned
into token-level `),$n=r(E,"CODE",{});var Wc=i($n);vi=a(Wc,"labels"),Wc.forEach(t),yi=a(E," for token classification tasks (such as FUNSD, CORD)."),E.forEach(t),bi=u(te),oe=r(te,"DIV",{class:!0});var Dt=i(oe);b(zo.$$.fragment,Dt),Li=u(Dt),M=r(Dt,"P",{});var $=i(M);ki=a($,"This method first forwards the "),zn=r($,"CODE",{});var Rc=i(zn);wi=a(Rc,"images"),Rc.forEach(t),xi=a($," argument to "),qo=r($,"A",{href:!0});var Ad=i(qo);qn=r(Ad,"STRONG",{});var Bc=i(qn);Ti=a(Bc,"call"),Bc.forEach(t),Mi=a(Ad,"()"),Ad.forEach(t),$i=a($,`. In case
`),zt=r($,"A",{href:!0});var Uc=i(zt);zi=a(Uc,"LayoutLMv3FeatureExtractor"),Uc.forEach(t),qi=a($," was initialized with "),En=r($,"CODE",{});var Vc=i(En);Ei=a(Vc,"apply_ocr"),Vc.forEach(t),Fi=a($," set to "),Fn=r($,"CODE",{});var Qc=i(Fn);Ci=a(Qc,"True"),Qc.forEach(t),Pi=a($,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Eo=r($,"A",{href:!0});var jd=i(Eo);Cn=r(jd,"STRONG",{});var Hc=i(Cn);Ai=a(Hc,"call"),Hc.forEach(t),ji=a(jd,"()"),jd.forEach(t),Ii=a($,` and returns the output,
together with resized and normalized `),Pn=r($,"CODE",{});var Gc=i(Pn);Ni=a(Gc,"pixel_values"),Gc.forEach(t),Si=a($,". In case "),qt=r($,"A",{href:!0});var Xc=i(qt);Di=a(Xc,"LayoutLMv3FeatureExtractor"),Xc.forEach(t),Oi=a($,` was initialized
with `),An=r($,"CODE",{});var Jc=i(An);Wi=a(Jc,"apply_ocr"),Jc.forEach(t),Ri=a($," set to "),jn=r($,"CODE",{});var Yc=i(jn);Bi=a(Yc,"False"),Yc.forEach(t),Ui=a($,", it passes the words ("),In=r($,"CODE",{});var Kc=i(In);Vi=a(Kc,"text"),Kc.forEach(t),Qi=a($,"/`"),Nn=r($,"CODE",{});var Zc=i(Nn);Hi=a(Zc,"text_pair"),Zc.forEach(t),Gi=a($,") and "),Sn=r($,"CODE",{});var eu=i(Sn);Xi=a(eu,"boxes"),eu.forEach(t),Ji=a($,` specified by the user
along with the additional arguments to `),Fo=r($,"A",{href:!0});var Id=i(Fo);Dn=r(Id,"STRONG",{});var ou=i(Dn);Yi=a(ou,"call"),ou.forEach(t),Ki=a(Id,"()"),Id.forEach(t),Zi=a($,` and returns the output, together with
resized and normalized `),On=r($,"CODE",{});var tu=i(On);el=a(tu,"pixel_values"),tu.forEach(t),ol=a($,"."),$.forEach(t),tl=u(Dt),Wn=r(Dt,"P",{});var nu=i(Wn);nl=a(nu,"Please refer to the docstring of the above two methods for more information."),nu.forEach(t),Dt.forEach(t),te.forEach(t),za=u(o),pe=r(o,"H2",{class:!0});var Ja=i(pe);je=r(Ja,"A",{id:!0,class:!0,href:!0});var au=i(je);Rn=r(au,"SPAN",{});var su=i(Rn);b(Co.$$.fragment,su),su.forEach(t),au.forEach(t),al=u(Ja),Bn=r(Ja,"SPAN",{});var ru=i(Bn);sl=a(ru,"LayoutLMv3Model"),ru.forEach(t),Ja.forEach(t),qa=u(o),X=r(o,"DIV",{class:!0});var Ot=i(X);b(Po.$$.fragment,Ot),rl=u(Ot),Ao=r(Ot,"P",{});var Ya=i(Ao);il=a(Ya,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),jo=r(Ya,"A",{href:!0,rel:!0});var iu=i(jo);ll=a(iu,"torch.nn.Module"),iu.forEach(t),dl=a(Ya,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ya.forEach(t),cl=u(Ot),U=r(Ot,"DIV",{class:!0});var Je=i(U);b(Io.$$.fragment,Je),ul=u(Je),he=r(Je,"P",{});var Wt=i(he);ml=a(Wt,"The "),Et=r(Wt,"A",{href:!0});var lu=i(Et);pl=a(lu,"LayoutLMv3Model"),lu.forEach(t),hl=a(Wt," forward method, overrides the "),Un=r(Wt,"CODE",{});var du=i(Un);fl=a(du,"__call__"),du.forEach(t),gl=a(Wt," special method."),Wt.forEach(t),_l=u(Je),b(Ie.$$.fragment,Je),vl=u(Je),b(Ne.$$.fragment,Je),Je.forEach(t),Ot.forEach(t),Ea=u(o),fe=r(o,"H2",{class:!0});var Ka=i(fe);Se=r(Ka,"A",{id:!0,class:!0,href:!0});var cu=i(Se);Vn=r(cu,"SPAN",{});var uu=i(Vn);b(No.$$.fragment,uu),uu.forEach(t),cu.forEach(t),yl=u(Ka),Qn=r(Ka,"SPAN",{});var mu=i(Qn);bl=a(mu,"LayoutLMv3ForSequenceClassification"),mu.forEach(t),Ka.forEach(t),Fa=u(o),O=r(o,"DIV",{class:!0});var Ye=i(O);b(So.$$.fragment,Ye),Ll=u(Ye),Do=r(Ye,"P",{});var Za=i(Do);kl=a(Za,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Oo=r(Za,"A",{href:!0,rel:!0});var pu=i(Oo);wl=a(pu,"RVL-CDIP"),pu.forEach(t),xl=a(Za," dataset."),Za.forEach(t),Tl=u(Ye),Wo=r(Ye,"P",{});var es=i(Wo);Ml=a(es,"This model is a PyTorch "),Ro=r(es,"A",{href:!0,rel:!0});var hu=i(Ro);$l=a(hu,"torch.nn.Module"),hu.forEach(t),zl=a(es,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),es.forEach(t),ql=u(Ye),V=r(Ye,"DIV",{class:!0});var Ke=i(V);b(Bo.$$.fragment,Ke),El=u(Ke),ge=r(Ke,"P",{});var Rt=i(ge);Fl=a(Rt,"The "),Ft=r(Rt,"A",{href:!0});var fu=i(Ft);Cl=a(fu,"LayoutLMv3ForSequenceClassification"),fu.forEach(t),Pl=a(Rt," forward method, overrides the "),Hn=r(Rt,"CODE",{});var gu=i(Hn);Al=a(gu,"__call__"),gu.forEach(t),jl=a(Rt," special method."),Rt.forEach(t),Il=u(Ke),b(De.$$.fragment,Ke),Nl=u(Ke),b(Oe.$$.fragment,Ke),Ke.forEach(t),Ye.forEach(t),Ca=u(o),_e=r(o,"H2",{class:!0});var os=i(_e);We=r(os,"A",{id:!0,class:!0,href:!0});var _u=i(We);Gn=r(_u,"SPAN",{});var vu=i(Gn);b(Uo.$$.fragment,vu),vu.forEach(t),_u.forEach(t),Sl=u(os),Xn=r(os,"SPAN",{});var yu=i(Xn);Dl=a(yu,"LayoutLMv3ForTokenClassification"),yu.forEach(t),os.forEach(t),Pa=u(o),W=r(o,"DIV",{class:!0});var Ze=i(W);b(Vo.$$.fragment,Ze),Ol=u(Ze),R=r(Ze,"P",{});var ne=i(R);Wl=a(ne,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Qo=r(ne,"A",{href:!0,rel:!0});var bu=i(Qo);Rl=a(bu,"FUNSD"),bu.forEach(t),Bl=a(ne,`,
`),Ho=r(ne,"A",{href:!0,rel:!0});var Lu=i(Ho);Ul=a(Lu,"SROIE"),Lu.forEach(t),Vl=a(ne,", "),Go=r(ne,"A",{href:!0,rel:!0});var ku=i(Go);Ql=a(ku,"CORD"),ku.forEach(t),Hl=a(ne,` and
`),Xo=r(ne,"A",{href:!0,rel:!0});var wu=i(Xo);Gl=a(wu,"Kleister-NDA"),wu.forEach(t),Xl=a(ne,"."),ne.forEach(t),Jl=u(Ze),Jo=r(Ze,"P",{});var ts=i(Jo);Yl=a(ts,"This model is a PyTorch "),Yo=r(ts,"A",{href:!0,rel:!0});var xu=i(Yo);Kl=a(xu,"torch.nn.Module"),xu.forEach(t),Zl=a(ts,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ts.forEach(t),ed=u(Ze),Q=r(Ze,"DIV",{class:!0});var eo=i(Q);b(Ko.$$.fragment,eo),od=u(eo),ve=r(eo,"P",{});var Bt=i(ve);td=a(Bt,"The "),Ct=r(Bt,"A",{href:!0});var Tu=i(Ct);nd=a(Tu,"LayoutLMv3ForTokenClassification"),Tu.forEach(t),ad=a(Bt," forward method, overrides the "),Jn=r(Bt,"CODE",{});var Mu=i(Jn);sd=a(Mu,"__call__"),Mu.forEach(t),rd=a(Bt," special method."),Bt.forEach(t),id=u(eo),b(Re.$$.fragment,eo),ld=u(eo),b(Be.$$.fragment,eo),eo.forEach(t),Ze.forEach(t),Aa=u(o),ye=r(o,"H2",{class:!0});var ns=i(ye);Ue=r(ns,"A",{id:!0,class:!0,href:!0});var $u=i(Ue);Yn=r($u,"SPAN",{});var zu=i(Yn);b(Zo.$$.fragment,zu),zu.forEach(t),$u.forEach(t),dd=u(ns),Kn=r(ns,"SPAN",{});var qu=i(Kn);cd=a(qu,"LayoutLMv3ForQuestionAnswering"),qu.forEach(t),ns.forEach(t),ja=u(o),B=r(o,"DIV",{class:!0});var oo=i(B);b(et.$$.fragment,oo),ud=u(oo),J=r(oo,"P",{});var to=i(J);md=a(to,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ot=r(to,"A",{href:!0,rel:!0});var Eu=i(ot);pd=a(Eu,"DocVQA"),Eu.forEach(t),hd=a(to,` (a linear layer on top of the text part of the hidden-states output to
compute `),Zn=r(to,"CODE",{});var Fu=i(Zn);fd=a(Fu,"span start logits"),Fu.forEach(t),gd=a(to," and "),ea=r(to,"CODE",{});var Cu=i(ea);_d=a(Cu,"span end logits"),Cu.forEach(t),vd=a(to,")."),to.forEach(t),yd=u(oo),tt=r(oo,"P",{});var as=i(tt);bd=a(as,"This model is a PyTorch "),nt=r(as,"A",{href:!0,rel:!0});var Pu=i(nt);Ld=a(Pu,"torch.nn.Module"),Pu.forEach(t),kd=a(as,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),as.forEach(t),wd=u(oo),H=r(oo,"DIV",{class:!0});var no=i(H);b(at.$$.fragment,no),xd=u(no),be=r(no,"P",{});var Ut=i(be);Td=a(Ut,"The "),Pt=r(Ut,"A",{href:!0});var Au=i(Pt);Md=a(Au,"LayoutLMv3ForQuestionAnswering"),Au.forEach(t),$d=a(Ut," forward method, overrides the "),oa=r(Ut,"CODE",{});var ju=i(oa);zd=a(ju,"__call__"),ju.forEach(t),qd=a(Ut," special method."),Ut.forEach(t),Ed=u(no),b(Ve.$$.fragment,no),Fd=u(no),b(Qe.$$.fragment,no),no.forEach(t),oo.forEach(t),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(Zu)),d(f,"id","layoutlmv3"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#layoutlmv3"),d(_,"class","relative group"),d(ke,"id","overview"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#overview"),d(ae,"class","relative group"),d(so,"href","https://arxiv.org/abs/2204.08387"),d(so,"rel","nofollow"),d(it,"href","vit"),d(ut,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),d(mt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),Ou(xe.src,Nd="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d(xe,"src",Nd),d(xe,"alt","drawing"),d(xe,"width","600"),d(pt,"href","https://arxiv.org/abs/2204.08387"),d(ro,"href","https://huggingface.co/nielsr"),d(ro,"rel","nofollow"),d(io,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(io,"rel","nofollow"),d(Me,"id","transformers.LayoutLMv3Config"),d(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Me,"href","#transformers.LayoutLMv3Config"),d(re,"class","relative group"),d(ht,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(uo,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(uo,"rel","nofollow"),d(ft,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),d(gt,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ze,"id","transformers.LayoutLMv3FeatureExtractor"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.LayoutLMv3FeatureExtractor"),d(de,"class","relative group"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ee,"id","transformers.LayoutLMv3Tokenizer"),d(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ee,"href","#transformers.LayoutLMv3Tokenizer"),d(ce,"class","relative group"),d(_t,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(vt,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(bt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"id","transformers.LayoutLMv3TokenizerFast"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#transformers.LayoutLMv3TokenizerFast"),d(ue,"class","relative group"),d(kt,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.LayoutLMv3Processor"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.LayoutLMv3Processor"),d(me,"class","relative group"),d(xt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(Tt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Mt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d($t,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(qo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(zt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Eo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(qt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Fo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(je,"id","transformers.LayoutLMv3Model"),d(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(je,"href","#transformers.LayoutLMv3Model"),d(pe,"class","relative group"),d(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(jo,"rel","nofollow"),d(Et,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(fe,"class","relative group"),d(Oo,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Oo,"rel","nofollow"),d(Ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ro,"rel","nofollow"),d(Ft,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.LayoutLMv3ForTokenClassification"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.LayoutLMv3ForTokenClassification"),d(_e,"class","relative group"),d(Qo,"href","https://guillaumejaume.github.io/FUNSD/"),d(Qo,"rel","nofollow"),d(Ho,"href","https://rrc.cvc.uab.es/?ch=13"),d(Ho,"rel","nofollow"),d(Go,"href","https://github.com/clovaai/cord"),d(Go,"rel","nofollow"),d(Xo,"href","https://github.com/applicaai/kleister-nda"),d(Xo,"rel","nofollow"),d(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Yo,"rel","nofollow"),d(Ct,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(ye,"class","relative group"),d(ot,"href","https://rrc.cvc.uab.es/?ch=17"),d(ot,"rel","nofollow"),d(nt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(nt,"rel","nofollow"),d(Pt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,p){e(document.head,m),g(o,T,p),g(o,_,p),e(_,f),e(f,v),L(l,v,null),e(_,h),e(_,P),e(P,rs),g(o,da,p),g(o,ae,p),e(ae,ke),e(ke,Gt),L(ao,Gt,null),e(ae,is),e(ae,Xt),e(Xt,ls),g(o,ca,p),g(o,K,p),e(K,ds),e(K,so),e(so,cs),e(K,us),e(K,it),e(it,ms),e(K,ps),g(o,ua,p),g(o,lt,p),e(lt,hs),g(o,ma,p),g(o,dt,p),e(dt,Jt),e(Jt,fs),g(o,pa,p),g(o,ct,p),e(ct,gs),g(o,ha,p),g(o,we,p),e(we,Yt),e(Yt,_s),e(we,vs),e(we,se),e(se,ys),e(se,ut),e(ut,bs),e(se,Ls),e(se,mt),e(mt,ks),e(se,ws),g(o,fa,p),g(o,xe,p),g(o,ga,p),g(o,Te,p),e(Te,xs),e(Te,pt),e(pt,Ts),e(Te,Ms),g(o,_a,p),g(o,Z,p),e(Z,$s),e(Z,ro),e(ro,zs),e(Z,qs),e(Z,io),e(io,Es),e(Z,Fs),g(o,va,p),g(o,re,p),e(re,Me),e(Me,Kt),L(lo,Kt,null),e(re,Cs),e(re,Zt),e(Zt,Ps),g(o,ya,p),g(o,N,p),L(co,N,null),e(N,As),e(N,ie),e(ie,js),e(ie,ht),e(ht,Is),e(ie,Ns),e(ie,uo),e(uo,Ss),e(ie,Ds),e(N,Os),e(N,le),e(le,Ws),e(le,ft),e(ft,Rs),e(le,Bs),e(le,gt),e(gt,Us),e(le,Vs),e(N,Qs),L($e,N,null),g(o,ba,p),g(o,de,p),e(de,ze),e(ze,en),L(mo,en,null),e(de,Hs),e(de,on),e(on,Gs),g(o,La,p),g(o,S,p),L(po,S,null),e(S,Xs),e(S,tn),e(tn,Js),e(S,Ys),e(S,ho),e(ho,Ks),e(ho,nn),e(nn,Zs),e(ho,er),e(S,or),e(S,ee),L(fo,ee,null),e(ee,tr),e(ee,an),e(an,nr),e(ee,ar),L(qe,ee,null),g(o,ka,p),g(o,ce,p),e(ce,Ee),e(Ee,sn),L(go,sn,null),e(ce,sr),e(ce,rn),e(rn,rr),g(o,wa,p),g(o,A,p),L(_o,A,null),e(A,ir),e(A,F),e(F,lr),e(F,ln),e(ln,dr),e(F,cr),e(F,_t),e(_t,ur),e(F,mr),e(F,dn),e(dn,pr),e(F,hr),e(F,cn),e(cn,fr),e(F,gr),e(F,un),e(un,_r),e(F,vr),e(F,mn),e(mn,yr),e(F,br),e(F,pn),e(pn,Lr),e(F,kr),e(A,wr),e(A,vo),e(vo,xr),e(vo,vt),e(vt,Tr),e(vo,Mr),e(A,$r),e(A,yt),e(yt,bt),e(bt,zr),e(yt,qr),e(A,Er),e(A,Fe),L(yo,Fe,null),e(Fe,Fr),e(Fe,hn),e(hn,Cr),e(A,Pr),e(A,Lt),L(bo,Lt,null),g(o,xa,p),g(o,ue,p),e(ue,Ce),e(Ce,fn),L(Lo,fn,null),e(ue,Ar),e(ue,gn),e(gn,jr),g(o,Ta,p),g(o,D,p),L(ko,D,null),e(D,Ir),e(D,wo),e(wo,Nr),e(wo,_n),e(_n,Sr),e(wo,Dr),e(D,Or),e(D,xo),e(xo,Wr),e(xo,kt),e(kt,Rr),e(xo,Br),e(D,Ur),e(D,Pe),L(To,Pe,null),e(Pe,Vr),e(Pe,vn),e(vn,Qr),g(o,Ma,p),g(o,me,p),e(me,Ae),e(Ae,yn),L(Mo,yn,null),e(me,Hr),e(me,bn),e(bn,Gr),g(o,$a,p),g(o,I,p),L($o,I,null),e(I,Xr),e(I,Ln),e(Ln,Jr),e(I,Yr),e(I,wt),e(wt,xt),e(xt,Kr),e(wt,Zr),e(I,ei),e(I,z),e(z,oi),e(z,Tt),e(Tt,ti),e(z,ni),e(z,Mt),e(Mt,ai),e(z,si),e(z,$t),e($t,ri),e(z,ii),e(z,kn),e(kn,li),e(z,di),e(z,wn),e(wn,ci),e(z,ui),e(z,xn),e(xn,mi),e(z,pi),e(z,Tn),e(Tn,hi),e(z,fi),e(z,Mn),e(Mn,gi),e(z,_i),e(z,$n),e($n,vi),e(z,yi),e(I,bi),e(I,oe),L(zo,oe,null),e(oe,Li),e(oe,M),e(M,ki),e(M,zn),e(zn,wi),e(M,xi),e(M,qo),e(qo,qn),e(qn,Ti),e(qo,Mi),e(M,$i),e(M,zt),e(zt,zi),e(M,qi),e(M,En),e(En,Ei),e(M,Fi),e(M,Fn),e(Fn,Ci),e(M,Pi),e(M,Eo),e(Eo,Cn),e(Cn,Ai),e(Eo,ji),e(M,Ii),e(M,Pn),e(Pn,Ni),e(M,Si),e(M,qt),e(qt,Di),e(M,Oi),e(M,An),e(An,Wi),e(M,Ri),e(M,jn),e(jn,Bi),e(M,Ui),e(M,In),e(In,Vi),e(M,Qi),e(M,Nn),e(Nn,Hi),e(M,Gi),e(M,Sn),e(Sn,Xi),e(M,Ji),e(M,Fo),e(Fo,Dn),e(Dn,Yi),e(Fo,Ki),e(M,Zi),e(M,On),e(On,el),e(M,ol),e(oe,tl),e(oe,Wn),e(Wn,nl),g(o,za,p),g(o,pe,p),e(pe,je),e(je,Rn),L(Co,Rn,null),e(pe,al),e(pe,Bn),e(Bn,sl),g(o,qa,p),g(o,X,p),L(Po,X,null),e(X,rl),e(X,Ao),e(Ao,il),e(Ao,jo),e(jo,ll),e(Ao,dl),e(X,cl),e(X,U),L(Io,U,null),e(U,ul),e(U,he),e(he,ml),e(he,Et),e(Et,pl),e(he,hl),e(he,Un),e(Un,fl),e(he,gl),e(U,_l),L(Ie,U,null),e(U,vl),L(Ne,U,null),g(o,Ea,p),g(o,fe,p),e(fe,Se),e(Se,Vn),L(No,Vn,null),e(fe,yl),e(fe,Qn),e(Qn,bl),g(o,Fa,p),g(o,O,p),L(So,O,null),e(O,Ll),e(O,Do),e(Do,kl),e(Do,Oo),e(Oo,wl),e(Do,xl),e(O,Tl),e(O,Wo),e(Wo,Ml),e(Wo,Ro),e(Ro,$l),e(Wo,zl),e(O,ql),e(O,V),L(Bo,V,null),e(V,El),e(V,ge),e(ge,Fl),e(ge,Ft),e(Ft,Cl),e(ge,Pl),e(ge,Hn),e(Hn,Al),e(ge,jl),e(V,Il),L(De,V,null),e(V,Nl),L(Oe,V,null),g(o,Ca,p),g(o,_e,p),e(_e,We),e(We,Gn),L(Uo,Gn,null),e(_e,Sl),e(_e,Xn),e(Xn,Dl),g(o,Pa,p),g(o,W,p),L(Vo,W,null),e(W,Ol),e(W,R),e(R,Wl),e(R,Qo),e(Qo,Rl),e(R,Bl),e(R,Ho),e(Ho,Ul),e(R,Vl),e(R,Go),e(Go,Ql),e(R,Hl),e(R,Xo),e(Xo,Gl),e(R,Xl),e(W,Jl),e(W,Jo),e(Jo,Yl),e(Jo,Yo),e(Yo,Kl),e(Jo,Zl),e(W,ed),e(W,Q),L(Ko,Q,null),e(Q,od),e(Q,ve),e(ve,td),e(ve,Ct),e(Ct,nd),e(ve,ad),e(ve,Jn),e(Jn,sd),e(ve,rd),e(Q,id),L(Re,Q,null),e(Q,ld),L(Be,Q,null),g(o,Aa,p),g(o,ye,p),e(ye,Ue),e(Ue,Yn),L(Zo,Yn,null),e(ye,dd),e(ye,Kn),e(Kn,cd),g(o,ja,p),g(o,B,p),L(et,B,null),e(B,ud),e(B,J),e(J,md),e(J,ot),e(ot,pd),e(J,hd),e(J,Zn),e(Zn,fd),e(J,gd),e(J,ea),e(ea,_d),e(J,vd),e(B,yd),e(B,tt),e(tt,bd),e(tt,nt),e(nt,Ld),e(tt,kd),e(B,wd),e(B,H),L(at,H,null),e(H,xd),e(H,be),e(be,Td),e(be,Pt),e(Pt,Md),e(be,$d),e(be,oa),e(oa,zd),e(be,qd),e(H,Ed),L(Ve,H,null),e(H,Fd),L(Qe,H,null),Ia=!0},p(o,[p]){const st={};p&2&&(st.$$scope={dirty:p,ctx:o}),$e.$set(st);const ta={};p&2&&(ta.$$scope={dirty:p,ctx:o}),qe.$set(ta);const na={};p&2&&(na.$$scope={dirty:p,ctx:o}),Ie.$set(na);const aa={};p&2&&(aa.$$scope={dirty:p,ctx:o}),Ne.$set(aa);const rt={};p&2&&(rt.$$scope={dirty:p,ctx:o}),De.$set(rt);const sa={};p&2&&(sa.$$scope={dirty:p,ctx:o}),Oe.$set(sa);const ra={};p&2&&(ra.$$scope={dirty:p,ctx:o}),Re.$set(ra);const ia={};p&2&&(ia.$$scope={dirty:p,ctx:o}),Be.$set(ia);const Le={};p&2&&(Le.$$scope={dirty:p,ctx:o}),Ve.$set(Le);const la={};p&2&&(la.$$scope={dirty:p,ctx:o}),Qe.$set(la)},i(o){Ia||(k(l.$$.fragment,o),k(ao.$$.fragment,o),k(lo.$$.fragment,o),k(co.$$.fragment,o),k($e.$$.fragment,o),k(mo.$$.fragment,o),k(po.$$.fragment,o),k(fo.$$.fragment,o),k(qe.$$.fragment,o),k(go.$$.fragment,o),k(_o.$$.fragment,o),k(yo.$$.fragment,o),k(bo.$$.fragment,o),k(Lo.$$.fragment,o),k(ko.$$.fragment,o),k(To.$$.fragment,o),k(Mo.$$.fragment,o),k($o.$$.fragment,o),k(zo.$$.fragment,o),k(Co.$$.fragment,o),k(Po.$$.fragment,o),k(Io.$$.fragment,o),k(Ie.$$.fragment,o),k(Ne.$$.fragment,o),k(No.$$.fragment,o),k(So.$$.fragment,o),k(Bo.$$.fragment,o),k(De.$$.fragment,o),k(Oe.$$.fragment,o),k(Uo.$$.fragment,o),k(Vo.$$.fragment,o),k(Ko.$$.fragment,o),k(Re.$$.fragment,o),k(Be.$$.fragment,o),k(Zo.$$.fragment,o),k(et.$$.fragment,o),k(at.$$.fragment,o),k(Ve.$$.fragment,o),k(Qe.$$.fragment,o),Ia=!0)},o(o){w(l.$$.fragment,o),w(ao.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w($e.$$.fragment,o),w(mo.$$.fragment,o),w(po.$$.fragment,o),w(fo.$$.fragment,o),w(qe.$$.fragment,o),w(go.$$.fragment,o),w(_o.$$.fragment,o),w(yo.$$.fragment,o),w(bo.$$.fragment,o),w(Lo.$$.fragment,o),w(ko.$$.fragment,o),w(To.$$.fragment,o),w(Mo.$$.fragment,o),w($o.$$.fragment,o),w(zo.$$.fragment,o),w(Co.$$.fragment,o),w(Po.$$.fragment,o),w(Io.$$.fragment,o),w(Ie.$$.fragment,o),w(Ne.$$.fragment,o),w(No.$$.fragment,o),w(So.$$.fragment,o),w(Bo.$$.fragment,o),w(De.$$.fragment,o),w(Oe.$$.fragment,o),w(Uo.$$.fragment,o),w(Vo.$$.fragment,o),w(Ko.$$.fragment,o),w(Re.$$.fragment,o),w(Be.$$.fragment,o),w(Zo.$$.fragment,o),w(et.$$.fragment,o),w(at.$$.fragment,o),w(Ve.$$.fragment,o),w(Qe.$$.fragment,o),Ia=!1},d(o){t(m),o&&t(T),o&&t(_),x(l),o&&t(da),o&&t(ae),x(ao),o&&t(ca),o&&t(K),o&&t(ua),o&&t(lt),o&&t(ma),o&&t(dt),o&&t(pa),o&&t(ct),o&&t(ha),o&&t(we),o&&t(fa),o&&t(xe),o&&t(ga),o&&t(Te),o&&t(_a),o&&t(Z),o&&t(va),o&&t(re),x(lo),o&&t(ya),o&&t(N),x(co),x($e),o&&t(ba),o&&t(de),x(mo),o&&t(La),o&&t(S),x(po),x(fo),x(qe),o&&t(ka),o&&t(ce),x(go),o&&t(wa),o&&t(A),x(_o),x(yo),x(bo),o&&t(xa),o&&t(ue),x(Lo),o&&t(Ta),o&&t(D),x(ko),x(To),o&&t(Ma),o&&t(me),x(Mo),o&&t($a),o&&t(I),x($o),x(zo),o&&t(za),o&&t(pe),x(Co),o&&t(qa),o&&t(X),x(Po),x(Io),x(Ie),x(Ne),o&&t(Ea),o&&t(fe),x(No),o&&t(Fa),o&&t(O),x(So),x(Bo),x(De),x(Oe),o&&t(Ca),o&&t(_e),x(Uo),o&&t(Pa),o&&t(W),x(Vo),x(Ko),x(Re),x(Be),o&&t(Aa),o&&t(ye),x(Zo),o&&t(ja),o&&t(B),x(et),x(at),x(Ve),x(Qe)}}}const Zu={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function em(q){return Wu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class im extends Iu{constructor(m){super();Nu(this,m,em,Ku,Su,{})}}export{im as default,Zu as metadata};
