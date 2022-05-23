import{S as $p,i as zp,s as qp,e as s,k as c,w as y,t as n,M as Ep,c as r,d as t,m as u,a as i,x as b,h as a,b as l,N as Fp,G as e,g,y as L,q as k,o as w,B as x,v as Pp,L as rn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ls}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ln}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as sn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Cp(q){let p,T,_,f,v;return f=new ln({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=s("p"),T=n("Example:"),_=c(),y(f.$$.fragment)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Example:"),h.forEach(t),_=u(d),b(f.$$.fragment,d)},m(d,h){g(d,p,h),e(p,T),g(d,_,h),L(f,d,h),v=!0},p:rn,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(_),x(f,d)}}}function Ap(q){let p,T,_,f,v;return f=new ln({props:{code:`from transformers import LayoutLMv3FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(d),b(f.$$.fragment,d)},m(d,h){g(d,p,h),e(p,T),g(d,_,h),L(f,d,h),v=!0},p:rn,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(_),x(f,d)}}}function jp(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){g(d,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(d){d&&t(p)}}}function Ip(q){let p,T,_,f,v;return f=new ln({props:{code:`from transformers import AutoProcessor, AutoModel
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModel.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(d),b(f.$$.fragment,d)},m(d,h){g(d,p,h),e(p,T),g(d,_,h),L(f,d,h),v=!0},p:rn,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(_),x(f,d)}}}function Np(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){g(d,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(d){d&&t(p)}}}function Sp(q){let p,T,_,f,v;return f=new ln({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForSequenceClassification.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="pt")
sequence_label = torch.tensor([1])

outputs = model(**encoding, labels=sequence_label)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(d),b(f.$$.fragment,d)},m(d,h){g(d,p,h),e(p,T),g(d,_,h),L(f,d,h),v=!0},p:rn,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(_),x(f,d)}}}function Dp(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){g(d,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(d){d&&t(p)}}}function Op(q){let p,T,_,f,v;return f=new ln({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForTokenClassification.from_pretrained("microsoft/layoutlmv3-base", num_labels=7)

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]
word_labels = example["ner_tags"]

encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")

outputs = model(**encoding)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = example[<span class="hljs-string">&quot;ner_tags&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(d),b(f.$$.fragment,d)},m(d,h){g(d,p,h),e(p,T),g(d,_,h),L(f,d,h),v=!0},p:rn,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(_),x(f,d)}}}function Rp(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){g(d,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(d){d&&t(p)}}}function Wp(q){let p,T,_,f,v;return f=new ln({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForQuestionAnswering.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
question = "what's his name?"
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){p=r(d,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(d),b(f.$$.fragment,d)},m(d,h){g(d,p,h),e(p,T),g(d,_,h),L(f,d,h),v=!0},p:rn,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(_),x(f,d)}}}function Bp(q){let p,T,_,f,v,d,h,C,ks,xa,de,Te,dn,lt,ws,cn,xs,Ta,Q,Ts,dt,Ms,$s,ho,zs,qs,fo,Es,Fs,Ma,go,Ps,$a,_o,un,Cs,za,vo,As,qa,oe,Me,js,yo,Is,Ns,ct,pn,Ss,Ds,N,Os,bo,Rs,Ws,Lo,Bs,Us,ko,Qs,Vs,wo,Hs,Gs,Xs,J,Ys,xo,Js,Ks,To,Zs,er,Mo,tr,or,nr,ut,ar,pt,sr,rr,Ea,$e,bc,Fa,ze,ir,$o,lr,dr,Pa,ne,cr,mt,ur,pr,ht,mr,hr,Ca,ce,qe,mn,ft,fr,hn,gr,Aa,S,gt,_r,ue,vr,zo,yr,br,_t,Lr,kr,wr,pe,xr,qo,Tr,Mr,Eo,$r,zr,qr,Ee,ja,me,Fe,fn,vt,Er,gn,Fr,Ia,D,yt,Pr,_n,Cr,Ar,bt,jr,vn,Ir,Nr,Sr,ae,Lt,Dr,yn,Or,Rr,Pe,Na,he,Ce,bn,kt,Wr,Ln,Br,Sa,A,wt,Ur,F,Qr,kn,Vr,Hr,Fo,Gr,Xr,wn,Yr,Jr,xn,Kr,Zr,Tn,ei,ti,Mn,oi,ni,$n,ai,si,ri,xt,ii,Po,li,di,ci,Co,Ao,ui,pi,mi,Ae,Tt,hi,zn,fi,gi,jo,Mt,Da,fe,je,qn,$t,_i,En,vi,Oa,O,zt,yi,qt,bi,Fn,Li,ki,wi,Et,xi,Io,Ti,Mi,$i,Ie,Ft,zi,Pn,qi,Ra,ge,Ne,Cn,Pt,Ei,An,Fi,Wa,I,Ct,Pi,jn,Ci,Ai,No,So,ji,Ii,Ni,z,Si,Do,Di,Oi,Oo,Ri,Wi,Ro,Bi,Ui,In,Qi,Vi,Nn,Hi,Gi,Sn,Xi,Yi,Dn,Ji,Ki,On,Zi,el,Rn,tl,ol,nl,se,At,al,M,sl,Wn,rl,il,jt,Bn,ll,dl,cl,Wo,ul,pl,Un,ml,hl,Qn,fl,gl,It,Vn,_l,vl,yl,Hn,bl,Ll,Bo,kl,wl,Gn,xl,Tl,Xn,Ml,$l,Yn,zl,ql,Jn,El,Fl,Kn,Pl,Cl,Nt,Zn,Al,jl,Il,ea,Nl,Sl,Dl,ta,Ol,Ba,_e,Se,oa,St,Rl,na,Wl,Ua,K,Dt,Bl,Ot,Ul,Rt,Ql,Vl,Hl,V,Wt,Gl,ve,Xl,Uo,Yl,Jl,aa,Kl,Zl,ed,De,td,Oe,Qa,ye,Re,sa,Bt,od,ra,nd,Va,R,Ut,ad,Qt,sd,Vt,rd,id,ld,Ht,dd,Gt,cd,ud,pd,H,Xt,md,be,hd,Qo,fd,gd,ia,_d,vd,yd,We,bd,Be,Ha,Le,Ue,la,Yt,Ld,da,kd,Ga,W,Jt,wd,B,xd,Kt,Td,Md,Zt,$d,zd,eo,qd,Ed,to,Fd,Pd,Cd,oo,Ad,no,jd,Id,Nd,G,ao,Sd,ke,Dd,Vo,Od,Rd,ca,Wd,Bd,Ud,Qe,Qd,Ve,Xa,we,He,ua,so,Vd,pa,Hd,Ya,U,ro,Gd,Z,Xd,io,Yd,Jd,ma,Kd,Zd,ha,ec,tc,oc,lo,nc,co,ac,sc,rc,X,uo,ic,xe,lc,Ho,dc,cc,fa,uc,pc,mc,Ge,hc,Xe,Ja;return d=new te({}),lt=new te({}),ft=new te({}),gt=new P({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L28"}}),Ee=new sn({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[Cp]},$$scope:{ctx:q}}}),vt=new te({}),yt=new P({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L82"}}),Lt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),Pe=new sn({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[Ap]},$$scope:{ctx:q}}}),kt=new te({}),wt=new P({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),Tt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),Mt=new P({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),$t=new te({}),zt=new P({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),Ft=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),Pt=new te({}),Ct=new P({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),At=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),St=new te({}),Dt=new P({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L675"}}),Wt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17060/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L766",returnDescription:`
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
`}}),De=new Ls({props:{$$slots:{default:[jp]},$$scope:{ctx:q}}}),Oe=new sn({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Ip]},$$scope:{ctx:q}}}),Bt=new te({}),Ut=new P({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1203"}}),Xt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17060/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1215",returnDescription:`
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
`}}),We=new Ls({props:{$$slots:{default:[Np]},$$scope:{ctx:q}}}),Be=new sn({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[Sp]},$$scope:{ctx:q}}}),Yt=new te({}),Jt=new P({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L959"}}),ao=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qe=new Ls({props:{$$slots:{default:[Dp]},$$scope:{ctx:q}}}),Ve=new sn({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Op]},$$scope:{ctx:q}}}),so=new te({}),ro=new P({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1072"}}),uo=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1085",returnDescription:`
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
`}}),Ge=new Ls({props:{$$slots:{default:[Rp]},$$scope:{ctx:q}}}),Xe=new sn({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[Wp]},$$scope:{ctx:q}}}),{c(){p=s("meta"),T=c(),_=s("h1"),f=s("a"),v=s("span"),y(d.$$.fragment),h=c(),C=s("span"),ks=n("LayoutLMv3"),xa=c(),de=s("h2"),Te=s("a"),dn=s("span"),y(lt.$$.fragment),ws=c(),cn=s("span"),xs=n("Overview"),Ta=c(),Q=s("p"),Ts=n("The LayoutLMv3 model was proposed in "),dt=s("a"),Ms=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),$s=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),ho=s("a"),zs=n("LayoutLMv2"),qs=n(" by using patch embeddings (as in "),fo=s("a"),Es=n("ViT"),Fs=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Ma=c(),go=s("p"),Ps=n("The abstract from the paper is the following:"),$a=c(),_o=s("p"),un=s("em"),Cs=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),za=c(),vo=s("p"),As=n("Tips:"),qa=c(),oe=s("ul"),Me=s("li"),js=n("In terms of data processing, LayoutLMv3 is identical to its predecessor "),yo=s("a"),Is=n("LayoutLMv2"),Ns=n(", except that:"),ct=s("ul"),pn=s("li"),Ss=n("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ds=c(),N=s("li"),Os=n(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, the model includes a `),bo=s("a"),Rs=n("LayoutLMv3Processor"),Ws=n(" which internally combines a "),Lo=s("a"),Bs=n("LayoutLMv3FeatureExtractor"),Us=n(" (for the image modality) and a "),ko=s("a"),Qs=n("LayoutLMv3Tokenizer"),Vs=n("/"),wo=s("a"),Hs=n("LayoutLMv3TokenizerFast"),Gs=n(" (for the text modality), which can be used to prepare all data for the model."),Xs=c(),J=s("li"),Ys=n("Regarding usage of "),xo=s("a"),Js=n("LayoutLMv3Processor"),Ks=n(", we refer to the "),To=s("a"),Zs=n("usage guide"),er=n(" of "),Mo=s("a"),tr=n("LayoutLMv2Processor"),or=n("."),nr=c(),ut=s("li"),ar=n("Demo notebooks for LayoutLMv3 can be found "),pt=s("a"),sr=n("here"),rr=n("."),Ea=c(),$e=s("img"),Fa=c(),ze=s("small"),ir=n("LayoutLMv3 architecture. Taken from the "),$o=s("a"),lr=n("original paper"),dr=n("."),Pa=c(),ne=s("p"),cr=n("This model was contributed by "),mt=s("a"),ur=n("nielsr"),pr=n(". The original code can be found "),ht=s("a"),mr=n("here"),hr=n("."),Ca=c(),ce=s("h2"),qe=s("a"),mn=s("span"),y(ft.$$.fragment),fr=c(),hn=s("span"),gr=n("LayoutLMv3Config"),Aa=c(),S=s("div"),y(gt.$$.fragment),_r=c(),ue=s("p"),vr=n("This is the configuration class to store the configuration of a "),zo=s("a"),yr=n("LayoutLMv3Model"),br=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),_t=s("a"),Lr=n("microsoft/layoutlmv3-base"),kr=n(" architecture."),wr=c(),pe=s("p"),xr=n("Configuration objects inherit from "),qo=s("a"),Tr=n("PretrainedConfig"),Mr=n(` and can be used to control the model outputs. Read the
documentation from `),Eo=s("a"),$r=n("PretrainedConfig"),zr=n(" for more information."),qr=c(),y(Ee.$$.fragment),ja=c(),me=s("h2"),Fe=s("a"),fn=s("span"),y(vt.$$.fragment),Er=c(),gn=s("span"),Fr=n("LayoutLMv3FeatureExtractor"),Ia=c(),D=s("div"),y(yt.$$.fragment),Pr=c(),_n=s("p"),Cr=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Ar=c(),bt=s("p"),jr=n("This feature extractor inherits from "),vn=s("code"),Ir=n("PreTrainedFeatureExtractor()"),Nr=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Sr=c(),ae=s("div"),y(Lt.$$.fragment),Dr=c(),yn=s("p"),Or=n("Main method to prepare for the model one or several image(s)."),Rr=c(),y(Pe.$$.fragment),Na=c(),he=s("h2"),Ce=s("a"),bn=s("span"),y(kt.$$.fragment),Wr=c(),Ln=s("span"),Br=n("LayoutLMv3Tokenizer"),Sa=c(),A=s("div"),y(wt.$$.fragment),Ur=c(),F=s("p"),Qr=n("Construct a LayoutLMv3 tokenizer. Based on "),kn=s("code"),Vr=n("RoBERTatokenizer"),Hr=n(` (Byte Pair Encoding or BPE).
`),Fo=s("a"),Gr=n("LayoutLMv3Tokenizer"),Xr=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),wn=s("code"),Yr=n("input_ids"),Jr=n(", "),xn=s("code"),Kr=n("attention_mask"),Zr=n(", "),Tn=s("code"),ei=n("token_type_ids"),ti=n(", "),Mn=s("code"),oi=n("bbox"),ni=n(", and optional "),$n=s("code"),ai=n("labels"),si=n(` (for token
classification).`),ri=c(),xt=s("p"),ii=n("This tokenizer inherits from "),Po=s("a"),li=n("PreTrainedTokenizer"),di=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ci=c(),Co=s("p"),Ao=s("a"),ui=n("LayoutLMv3Tokenizer"),pi=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),mi=c(),Ae=s("div"),y(Tt.$$.fragment),hi=c(),zn=s("p"),fi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),gi=c(),jo=s("div"),y(Mt.$$.fragment),Da=c(),fe=s("h2"),je=s("a"),qn=s("span"),y($t.$$.fragment),_i=c(),En=s("span"),vi=n("LayoutLMv3TokenizerFast"),Oa=c(),O=s("div"),y(zt.$$.fragment),yi=c(),qt=s("p"),bi=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Fn=s("em"),Li=n("tokenizers"),ki=n(" library). Based on BPE."),wi=c(),Et=s("p"),xi=n("This tokenizer inherits from "),Io=s("a"),Ti=n("PreTrainedTokenizerFast"),Mi=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),$i=c(),Ie=s("div"),y(Ft.$$.fragment),zi=c(),Pn=s("p"),qi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ra=c(),ge=s("h2"),Ne=s("a"),Cn=s("span"),y(Pt.$$.fragment),Ei=c(),An=s("span"),Fi=n("LayoutLMv3Processor"),Wa=c(),I=s("div"),y(Ct.$$.fragment),Pi=c(),jn=s("p"),Ci=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Ai=c(),No=s("p"),So=s("a"),ji=n("LayoutLMv3Processor"),Ii=n(" offers all the functionalities you need to prepare data for the model."),Ni=c(),z=s("p"),Si=n("It first uses "),Do=s("a"),Di=n("LayoutLMv3FeatureExtractor"),Oi=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Oo=s("a"),Ri=n("LayoutLMv3Tokenizer"),Wi=n(` or
`),Ro=s("a"),Bi=n("LayoutLMv3TokenizerFast"),Ui=n(", which turns the words and bounding boxes into token-level "),In=s("code"),Qi=n("input_ids"),Vi=n(`,
`),Nn=s("code"),Hi=n("attention_mask"),Gi=n(", "),Sn=s("code"),Xi=n("token_type_ids"),Yi=n(", "),Dn=s("code"),Ji=n("bbox"),Ki=n(". Optionally, one can provide integer "),On=s("code"),Zi=n("word_labels"),el=n(`, which are turned
into token-level `),Rn=s("code"),tl=n("labels"),ol=n(" for token classification tasks (such as FUNSD, CORD)."),nl=c(),se=s("div"),y(At.$$.fragment),al=c(),M=s("p"),sl=n("This method first forwards the "),Wn=s("code"),rl=n("images"),il=n(" argument to "),jt=s("a"),Bn=s("strong"),ll=n("call"),dl=n("()"),cl=n(`. In case
`),Wo=s("a"),ul=n("LayoutLMv3FeatureExtractor"),pl=n(" was initialized with "),Un=s("code"),ml=n("apply_ocr"),hl=n(" set to "),Qn=s("code"),fl=n("True"),gl=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),It=s("a"),Vn=s("strong"),_l=n("call"),vl=n("()"),yl=n(` and returns the output,
together with resized and normalized `),Hn=s("code"),bl=n("pixel_values"),Ll=n(". In case "),Bo=s("a"),kl=n("LayoutLMv3FeatureExtractor"),wl=n(` was initialized
with `),Gn=s("code"),xl=n("apply_ocr"),Tl=n(" set to "),Xn=s("code"),Ml=n("False"),$l=n(", it passes the words ("),Yn=s("code"),zl=n("text"),ql=n("/`"),Jn=s("code"),El=n("text_pair"),Fl=n(") and "),Kn=s("code"),Pl=n("boxes"),Cl=n(` specified by the user
along with the additional arguments to `),Nt=s("a"),Zn=s("strong"),Al=n("call"),jl=n("()"),Il=n(` and returns the output, together with
resized and normalized `),ea=s("code"),Nl=n("pixel_values"),Sl=n("."),Dl=c(),ta=s("p"),Ol=n("Please refer to the docstring of the above two methods for more information."),Ba=c(),_e=s("h2"),Se=s("a"),oa=s("span"),y(St.$$.fragment),Rl=c(),na=s("span"),Wl=n("LayoutLMv3Model"),Ua=c(),K=s("div"),y(Dt.$$.fragment),Bl=c(),Ot=s("p"),Ul=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Rt=s("a"),Ql=n("torch.nn.Module"),Vl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hl=c(),V=s("div"),y(Wt.$$.fragment),Gl=c(),ve=s("p"),Xl=n("The "),Uo=s("a"),Yl=n("LayoutLMv3Model"),Jl=n(" forward method, overrides the "),aa=s("code"),Kl=n("__call__"),Zl=n(" special method."),ed=c(),y(De.$$.fragment),td=c(),y(Oe.$$.fragment),Qa=c(),ye=s("h2"),Re=s("a"),sa=s("span"),y(Bt.$$.fragment),od=c(),ra=s("span"),nd=n("LayoutLMv3ForSequenceClassification"),Va=c(),R=s("div"),y(Ut.$$.fragment),ad=c(),Qt=s("p"),sd=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Vt=s("a"),rd=n("RVL-CDIP"),id=n(" dataset."),ld=c(),Ht=s("p"),dd=n("This model is a PyTorch "),Gt=s("a"),cd=n("torch.nn.Module"),ud=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pd=c(),H=s("div"),y(Xt.$$.fragment),md=c(),be=s("p"),hd=n("The "),Qo=s("a"),fd=n("LayoutLMv3ForSequenceClassification"),gd=n(" forward method, overrides the "),ia=s("code"),_d=n("__call__"),vd=n(" special method."),yd=c(),y(We.$$.fragment),bd=c(),y(Be.$$.fragment),Ha=c(),Le=s("h2"),Ue=s("a"),la=s("span"),y(Yt.$$.fragment),Ld=c(),da=s("span"),kd=n("LayoutLMv3ForTokenClassification"),Ga=c(),W=s("div"),y(Jt.$$.fragment),wd=c(),B=s("p"),xd=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Kt=s("a"),Td=n("FUNSD"),Md=n(`,
`),Zt=s("a"),$d=n("SROIE"),zd=n(", "),eo=s("a"),qd=n("CORD"),Ed=n(` and
`),to=s("a"),Fd=n("Kleister-NDA"),Pd=n("."),Cd=c(),oo=s("p"),Ad=n("This model is a PyTorch "),no=s("a"),jd=n("torch.nn.Module"),Id=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nd=c(),G=s("div"),y(ao.$$.fragment),Sd=c(),ke=s("p"),Dd=n("The "),Vo=s("a"),Od=n("LayoutLMv3ForTokenClassification"),Rd=n(" forward method, overrides the "),ca=s("code"),Wd=n("__call__"),Bd=n(" special method."),Ud=c(),y(Qe.$$.fragment),Qd=c(),y(Ve.$$.fragment),Xa=c(),we=s("h2"),He=s("a"),ua=s("span"),y(so.$$.fragment),Vd=c(),pa=s("span"),Hd=n("LayoutLMv3ForQuestionAnswering"),Ya=c(),U=s("div"),y(ro.$$.fragment),Gd=c(),Z=s("p"),Xd=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),io=s("a"),Yd=n("DocVQA"),Jd=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),ma=s("code"),Kd=n("span start logits"),Zd=n(" and "),ha=s("code"),ec=n("span end logits"),tc=n(")."),oc=c(),lo=s("p"),nc=n("This model is a PyTorch "),co=s("a"),ac=n("torch.nn.Module"),sc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rc=c(),X=s("div"),y(uo.$$.fragment),ic=c(),xe=s("p"),lc=n("The "),Ho=s("a"),dc=n("LayoutLMv3ForQuestionAnswering"),cc=n(" forward method, overrides the "),fa=s("code"),uc=n("__call__"),pc=n(" special method."),mc=c(),y(Ge.$$.fragment),hc=c(),y(Xe.$$.fragment),this.h()},l(o){const m=Ep('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),T=u(o),_=r(o,"H1",{class:!0});var po=i(_);f=r(po,"A",{id:!0,class:!0,href:!0});var ga=i(f);v=r(ga,"SPAN",{});var _a=i(v);b(d.$$.fragment,_a),_a.forEach(t),ga.forEach(t),h=u(po),C=r(po,"SPAN",{});var va=i(C);ks=a(va,"LayoutLMv3"),va.forEach(t),po.forEach(t),xa=u(o),de=r(o,"H2",{class:!0});var mo=i(de);Te=r(mo,"A",{id:!0,class:!0,href:!0});var ya=i(Te);dn=r(ya,"SPAN",{});var ba=i(dn);b(lt.$$.fragment,ba),ba.forEach(t),ya.forEach(t),ws=u(mo),cn=r(mo,"SPAN",{});var La=i(cn);xs=a(La,"Overview"),La.forEach(t),mo.forEach(t),Ta=u(o),Q=r(o,"P",{});var ee=i(Q);Ts=a(ee,"The LayoutLMv3 model was proposed in "),dt=r(ee,"A",{href:!0,rel:!0});var ka=i(dt);Ms=a(ka,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),ka.forEach(t),$s=a(ee,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),ho=r(ee,"A",{href:!0});var Lc=i(ho);zs=a(Lc,"LayoutLMv2"),Lc.forEach(t),qs=a(ee," by using patch embeddings (as in "),fo=r(ee,"A",{href:!0});var kc=i(fo);Es=a(kc,"ViT"),kc.forEach(t),Fs=a(ee,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ee.forEach(t),Ma=u(o),go=r(o,"P",{});var wc=i(go);Ps=a(wc,"The abstract from the paper is the following:"),wc.forEach(t),$a=u(o),_o=r(o,"P",{});var xc=i(_o);un=r(xc,"EM",{});var Tc=i(un);Cs=a(Tc,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Tc.forEach(t),xc.forEach(t),za=u(o),vo=r(o,"P",{});var Mc=i(vo);As=a(Mc,"Tips:"),Mc.forEach(t),qa=u(o),oe=r(o,"UL",{});var Go=i(oe);Me=r(Go,"LI",{});var wa=i(Me);js=a(wa,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),yo=r(wa,"A",{href:!0});var $c=i(yo);Is=a($c,"LayoutLMv2"),$c.forEach(t),Ns=a(wa,", except that:"),ct=r(wa,"UL",{});var Ka=i(ct);pn=r(Ka,"LI",{});var zc=i(pn);Ss=a(zc,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),zc.forEach(t),Ds=u(Ka),N=r(Ka,"LI",{});var re=i(N);Os=a(re,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, the model includes a `),bo=r(re,"A",{href:!0});var qc=i(bo);Rs=a(qc,"LayoutLMv3Processor"),qc.forEach(t),Ws=a(re," which internally combines a "),Lo=r(re,"A",{href:!0});var Ec=i(Lo);Bs=a(Ec,"LayoutLMv3FeatureExtractor"),Ec.forEach(t),Us=a(re," (for the image modality) and a "),ko=r(re,"A",{href:!0});var Fc=i(ko);Qs=a(Fc,"LayoutLMv3Tokenizer"),Fc.forEach(t),Vs=a(re,"/"),wo=r(re,"A",{href:!0});var Pc=i(wo);Hs=a(Pc,"LayoutLMv3TokenizerFast"),Pc.forEach(t),Gs=a(re," (for the text modality), which can be used to prepare all data for the model."),re.forEach(t),Ka.forEach(t),wa.forEach(t),Xs=u(Go),J=r(Go,"LI",{});var Ye=i(J);Ys=a(Ye,"Regarding usage of "),xo=r(Ye,"A",{href:!0});var Cc=i(xo);Js=a(Cc,"LayoutLMv3Processor"),Cc.forEach(t),Ks=a(Ye,", we refer to the "),To=r(Ye,"A",{href:!0});var Ac=i(To);Zs=a(Ac,"usage guide"),Ac.forEach(t),er=a(Ye," of "),Mo=r(Ye,"A",{href:!0});var jc=i(Mo);tr=a(jc,"LayoutLMv2Processor"),jc.forEach(t),or=a(Ye,"."),Ye.forEach(t),nr=u(Go),ut=r(Go,"LI",{});var Za=i(ut);ar=a(Za,"Demo notebooks for LayoutLMv3 can be found "),pt=r(Za,"A",{href:!0,rel:!0});var Ic=i(pt);sr=a(Ic,"here"),Ic.forEach(t),rr=a(Za,"."),Za.forEach(t),Go.forEach(t),Ea=u(o),$e=r(o,"IMG",{src:!0,alt:!0,width:!0}),Fa=u(o),ze=r(o,"SMALL",{});var es=i(ze);ir=a(es,"LayoutLMv3 architecture. Taken from the "),$o=r(es,"A",{href:!0});var Nc=i($o);lr=a(Nc,"original paper"),Nc.forEach(t),dr=a(es,"."),es.forEach(t),Pa=u(o),ne=r(o,"P",{});var Xo=i(ne);cr=a(Xo,"This model was contributed by "),mt=r(Xo,"A",{href:!0,rel:!0});var Sc=i(mt);ur=a(Sc,"nielsr"),Sc.forEach(t),pr=a(Xo,". The original code can be found "),ht=r(Xo,"A",{href:!0,rel:!0});var Dc=i(ht);mr=a(Dc,"here"),Dc.forEach(t),hr=a(Xo,"."),Xo.forEach(t),Ca=u(o),ce=r(o,"H2",{class:!0});var ts=i(ce);qe=r(ts,"A",{id:!0,class:!0,href:!0});var Oc=i(qe);mn=r(Oc,"SPAN",{});var Rc=i(mn);b(ft.$$.fragment,Rc),Rc.forEach(t),Oc.forEach(t),fr=u(ts),hn=r(ts,"SPAN",{});var Wc=i(hn);gr=a(Wc,"LayoutLMv3Config"),Wc.forEach(t),ts.forEach(t),Aa=u(o),S=r(o,"DIV",{class:!0});var Je=i(S);b(gt.$$.fragment,Je),_r=u(Je),ue=r(Je,"P",{});var Yo=i(ue);vr=a(Yo,"This is the configuration class to store the configuration of a "),zo=r(Yo,"A",{href:!0});var Bc=i(zo);yr=a(Bc,"LayoutLMv3Model"),Bc.forEach(t),br=a(Yo,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),_t=r(Yo,"A",{href:!0,rel:!0});var Uc=i(_t);Lr=a(Uc,"microsoft/layoutlmv3-base"),Uc.forEach(t),kr=a(Yo," architecture."),Yo.forEach(t),wr=u(Je),pe=r(Je,"P",{});var Jo=i(pe);xr=a(Jo,"Configuration objects inherit from "),qo=r(Jo,"A",{href:!0});var Qc=i(qo);Tr=a(Qc,"PretrainedConfig"),Qc.forEach(t),Mr=a(Jo,` and can be used to control the model outputs. Read the
documentation from `),Eo=r(Jo,"A",{href:!0});var Vc=i(Eo);$r=a(Vc,"PretrainedConfig"),Vc.forEach(t),zr=a(Jo," for more information."),Jo.forEach(t),qr=u(Je),b(Ee.$$.fragment,Je),Je.forEach(t),ja=u(o),me=r(o,"H2",{class:!0});var os=i(me);Fe=r(os,"A",{id:!0,class:!0,href:!0});var Hc=i(Fe);fn=r(Hc,"SPAN",{});var Gc=i(fn);b(vt.$$.fragment,Gc),Gc.forEach(t),Hc.forEach(t),Er=u(os),gn=r(os,"SPAN",{});var Xc=i(gn);Fr=a(Xc,"LayoutLMv3FeatureExtractor"),Xc.forEach(t),os.forEach(t),Ia=u(o),D=r(o,"DIV",{class:!0});var Ke=i(D);b(yt.$$.fragment,Ke),Pr=u(Ke),_n=r(Ke,"P",{});var Yc=i(_n);Cr=a(Yc,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Yc.forEach(t),Ar=u(Ke),bt=r(Ke,"P",{});var ns=i(bt);jr=a(ns,"This feature extractor inherits from "),vn=r(ns,"CODE",{});var Jc=i(vn);Ir=a(Jc,"PreTrainedFeatureExtractor()"),Jc.forEach(t),Nr=a(ns,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),ns.forEach(t),Sr=u(Ke),ae=r(Ke,"DIV",{class:!0});var Ko=i(ae);b(Lt.$$.fragment,Ko),Dr=u(Ko),yn=r(Ko,"P",{});var Kc=i(yn);Or=a(Kc,"Main method to prepare for the model one or several image(s)."),Kc.forEach(t),Rr=u(Ko),b(Pe.$$.fragment,Ko),Ko.forEach(t),Ke.forEach(t),Na=u(o),he=r(o,"H2",{class:!0});var as=i(he);Ce=r(as,"A",{id:!0,class:!0,href:!0});var Zc=i(Ce);bn=r(Zc,"SPAN",{});var eu=i(bn);b(kt.$$.fragment,eu),eu.forEach(t),Zc.forEach(t),Wr=u(as),Ln=r(as,"SPAN",{});var tu=i(Ln);Br=a(tu,"LayoutLMv3Tokenizer"),tu.forEach(t),as.forEach(t),Sa=u(o),A=r(o,"DIV",{class:!0});var Y=i(A);b(wt.$$.fragment,Y),Ur=u(Y),F=r(Y,"P",{});var j=i(F);Qr=a(j,"Construct a LayoutLMv3 tokenizer. Based on "),kn=r(j,"CODE",{});var ou=i(kn);Vr=a(ou,"RoBERTatokenizer"),ou.forEach(t),Hr=a(j,` (Byte Pair Encoding or BPE).
`),Fo=r(j,"A",{href:!0});var nu=i(Fo);Gr=a(nu,"LayoutLMv3Tokenizer"),nu.forEach(t),Xr=a(j,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),wn=r(j,"CODE",{});var au=i(wn);Yr=a(au,"input_ids"),au.forEach(t),Jr=a(j,", "),xn=r(j,"CODE",{});var su=i(xn);Kr=a(su,"attention_mask"),su.forEach(t),Zr=a(j,", "),Tn=r(j,"CODE",{});var ru=i(Tn);ei=a(ru,"token_type_ids"),ru.forEach(t),ti=a(j,", "),Mn=r(j,"CODE",{});var iu=i(Mn);oi=a(iu,"bbox"),iu.forEach(t),ni=a(j,", and optional "),$n=r(j,"CODE",{});var lu=i($n);ai=a(lu,"labels"),lu.forEach(t),si=a(j,` (for token
classification).`),j.forEach(t),ri=u(Y),xt=r(Y,"P",{});var ss=i(xt);ii=a(ss,"This tokenizer inherits from "),Po=r(ss,"A",{href:!0});var du=i(Po);li=a(du,"PreTrainedTokenizer"),du.forEach(t),di=a(ss,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ss.forEach(t),ci=u(Y),Co=r(Y,"P",{});var fc=i(Co);Ao=r(fc,"A",{href:!0});var cu=i(Ao);ui=a(cu,"LayoutLMv3Tokenizer"),cu.forEach(t),pi=a(fc,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),fc.forEach(t),mi=u(Y),Ae=r(Y,"DIV",{class:!0});var rs=i(Ae);b(Tt.$$.fragment,rs),hi=u(rs),zn=r(rs,"P",{});var uu=i(zn);fi=a(uu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),uu.forEach(t),rs.forEach(t),gi=u(Y),jo=r(Y,"DIV",{class:!0});var pu=i(jo);b(Mt.$$.fragment,pu),pu.forEach(t),Y.forEach(t),Da=u(o),fe=r(o,"H2",{class:!0});var is=i(fe);je=r(is,"A",{id:!0,class:!0,href:!0});var mu=i(je);qn=r(mu,"SPAN",{});var hu=i(qn);b($t.$$.fragment,hu),hu.forEach(t),mu.forEach(t),_i=u(is),En=r(is,"SPAN",{});var fu=i(En);vi=a(fu,"LayoutLMv3TokenizerFast"),fu.forEach(t),is.forEach(t),Oa=u(o),O=r(o,"DIV",{class:!0});var Ze=i(O);b(zt.$$.fragment,Ze),yi=u(Ze),qt=r(Ze,"P",{});var ls=i(qt);bi=a(ls,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Fn=r(ls,"EM",{});var gu=i(Fn);Li=a(gu,"tokenizers"),gu.forEach(t),ki=a(ls," library). Based on BPE."),ls.forEach(t),wi=u(Ze),Et=r(Ze,"P",{});var ds=i(Et);xi=a(ds,"This tokenizer inherits from "),Io=r(ds,"A",{href:!0});var _u=i(Io);Ti=a(_u,"PreTrainedTokenizerFast"),_u.forEach(t),Mi=a(ds,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ds.forEach(t),$i=u(Ze),Ie=r(Ze,"DIV",{class:!0});var cs=i(Ie);b(Ft.$$.fragment,cs),zi=u(cs),Pn=r(cs,"P",{});var vu=i(Pn);qi=a(vu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),vu.forEach(t),cs.forEach(t),Ze.forEach(t),Ra=u(o),ge=r(o,"H2",{class:!0});var us=i(ge);Ne=r(us,"A",{id:!0,class:!0,href:!0});var yu=i(Ne);Cn=r(yu,"SPAN",{});var bu=i(Cn);b(Pt.$$.fragment,bu),bu.forEach(t),yu.forEach(t),Ei=u(us),An=r(us,"SPAN",{});var Lu=i(An);Fi=a(Lu,"LayoutLMv3Processor"),Lu.forEach(t),us.forEach(t),Wa=u(o),I=r(o,"DIV",{class:!0});var ie=i(I);b(Ct.$$.fragment,ie),Pi=u(ie),jn=r(ie,"P",{});var ku=i(jn);Ci=a(ku,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),ku.forEach(t),Ai=u(ie),No=r(ie,"P",{});var gc=i(No);So=r(gc,"A",{href:!0});var wu=i(So);ji=a(wu,"LayoutLMv3Processor"),wu.forEach(t),Ii=a(gc," offers all the functionalities you need to prepare data for the model."),gc.forEach(t),Ni=u(ie),z=r(ie,"P",{});var E=i(z);Si=a(E,"It first uses "),Do=r(E,"A",{href:!0});var xu=i(Do);Di=a(xu,"LayoutLMv3FeatureExtractor"),xu.forEach(t),Oi=a(E,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Oo=r(E,"A",{href:!0});var Tu=i(Oo);Ri=a(Tu,"LayoutLMv3Tokenizer"),Tu.forEach(t),Wi=a(E,` or
`),Ro=r(E,"A",{href:!0});var Mu=i(Ro);Bi=a(Mu,"LayoutLMv3TokenizerFast"),Mu.forEach(t),Ui=a(E,", which turns the words and bounding boxes into token-level "),In=r(E,"CODE",{});var $u=i(In);Qi=a($u,"input_ids"),$u.forEach(t),Vi=a(E,`,
`),Nn=r(E,"CODE",{});var zu=i(Nn);Hi=a(zu,"attention_mask"),zu.forEach(t),Gi=a(E,", "),Sn=r(E,"CODE",{});var qu=i(Sn);Xi=a(qu,"token_type_ids"),qu.forEach(t),Yi=a(E,", "),Dn=r(E,"CODE",{});var Eu=i(Dn);Ji=a(Eu,"bbox"),Eu.forEach(t),Ki=a(E,". Optionally, one can provide integer "),On=r(E,"CODE",{});var Fu=i(On);Zi=a(Fu,"word_labels"),Fu.forEach(t),el=a(E,`, which are turned
into token-level `),Rn=r(E,"CODE",{});var Pu=i(Rn);tl=a(Pu,"labels"),Pu.forEach(t),ol=a(E," for token classification tasks (such as FUNSD, CORD)."),E.forEach(t),nl=u(ie),se=r(ie,"DIV",{class:!0});var Zo=i(se);b(At.$$.fragment,Zo),al=u(Zo),M=r(Zo,"P",{});var $=i(M);sl=a($,"This method first forwards the "),Wn=r($,"CODE",{});var Cu=i(Wn);rl=a(Cu,"images"),Cu.forEach(t),il=a($," argument to "),jt=r($,"A",{href:!0});var _c=i(jt);Bn=r(_c,"STRONG",{});var Au=i(Bn);ll=a(Au,"call"),Au.forEach(t),dl=a(_c,"()"),_c.forEach(t),cl=a($,`. In case
`),Wo=r($,"A",{href:!0});var ju=i(Wo);ul=a(ju,"LayoutLMv3FeatureExtractor"),ju.forEach(t),pl=a($," was initialized with "),Un=r($,"CODE",{});var Iu=i(Un);ml=a(Iu,"apply_ocr"),Iu.forEach(t),hl=a($," set to "),Qn=r($,"CODE",{});var Nu=i(Qn);fl=a(Nu,"True"),Nu.forEach(t),gl=a($,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),It=r($,"A",{href:!0});var vc=i(It);Vn=r(vc,"STRONG",{});var Su=i(Vn);_l=a(Su,"call"),Su.forEach(t),vl=a(vc,"()"),vc.forEach(t),yl=a($,` and returns the output,
together with resized and normalized `),Hn=r($,"CODE",{});var Du=i(Hn);bl=a(Du,"pixel_values"),Du.forEach(t),Ll=a($,". In case "),Bo=r($,"A",{href:!0});var Ou=i(Bo);kl=a(Ou,"LayoutLMv3FeatureExtractor"),Ou.forEach(t),wl=a($,` was initialized
with `),Gn=r($,"CODE",{});var Ru=i(Gn);xl=a(Ru,"apply_ocr"),Ru.forEach(t),Tl=a($," set to "),Xn=r($,"CODE",{});var Wu=i(Xn);Ml=a(Wu,"False"),Wu.forEach(t),$l=a($,", it passes the words ("),Yn=r($,"CODE",{});var Bu=i(Yn);zl=a(Bu,"text"),Bu.forEach(t),ql=a($,"/`"),Jn=r($,"CODE",{});var Uu=i(Jn);El=a(Uu,"text_pair"),Uu.forEach(t),Fl=a($,") and "),Kn=r($,"CODE",{});var Qu=i(Kn);Pl=a(Qu,"boxes"),Qu.forEach(t),Cl=a($,` specified by the user
along with the additional arguments to `),Nt=r($,"A",{href:!0});var yc=i(Nt);Zn=r(yc,"STRONG",{});var Vu=i(Zn);Al=a(Vu,"call"),Vu.forEach(t),jl=a(yc,"()"),yc.forEach(t),Il=a($,` and returns the output, together with
resized and normalized `),ea=r($,"CODE",{});var Hu=i(ea);Nl=a(Hu,"pixel_values"),Hu.forEach(t),Sl=a($,"."),$.forEach(t),Dl=u(Zo),ta=r(Zo,"P",{});var Gu=i(ta);Ol=a(Gu,"Please refer to the docstring of the above two methods for more information."),Gu.forEach(t),Zo.forEach(t),ie.forEach(t),Ba=u(o),_e=r(o,"H2",{class:!0});var ps=i(_e);Se=r(ps,"A",{id:!0,class:!0,href:!0});var Xu=i(Se);oa=r(Xu,"SPAN",{});var Yu=i(oa);b(St.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Rl=u(ps),na=r(ps,"SPAN",{});var Ju=i(na);Wl=a(Ju,"LayoutLMv3Model"),Ju.forEach(t),ps.forEach(t),Ua=u(o),K=r(o,"DIV",{class:!0});var en=i(K);b(Dt.$$.fragment,en),Bl=u(en),Ot=r(en,"P",{});var ms=i(Ot);Ul=a(ms,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Rt=r(ms,"A",{href:!0,rel:!0});var Ku=i(Rt);Ql=a(Ku,"torch.nn.Module"),Ku.forEach(t),Vl=a(ms,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ms.forEach(t),Hl=u(en),V=r(en,"DIV",{class:!0});var et=i(V);b(Wt.$$.fragment,et),Gl=u(et),ve=r(et,"P",{});var tn=i(ve);Xl=a(tn,"The "),Uo=r(tn,"A",{href:!0});var Zu=i(Uo);Yl=a(Zu,"LayoutLMv3Model"),Zu.forEach(t),Jl=a(tn," forward method, overrides the "),aa=r(tn,"CODE",{});var ep=i(aa);Kl=a(ep,"__call__"),ep.forEach(t),Zl=a(tn," special method."),tn.forEach(t),ed=u(et),b(De.$$.fragment,et),td=u(et),b(Oe.$$.fragment,et),et.forEach(t),en.forEach(t),Qa=u(o),ye=r(o,"H2",{class:!0});var hs=i(ye);Re=r(hs,"A",{id:!0,class:!0,href:!0});var tp=i(Re);sa=r(tp,"SPAN",{});var op=i(sa);b(Bt.$$.fragment,op),op.forEach(t),tp.forEach(t),od=u(hs),ra=r(hs,"SPAN",{});var np=i(ra);nd=a(np,"LayoutLMv3ForSequenceClassification"),np.forEach(t),hs.forEach(t),Va=u(o),R=r(o,"DIV",{class:!0});var tt=i(R);b(Ut.$$.fragment,tt),ad=u(tt),Qt=r(tt,"P",{});var fs=i(Qt);sd=a(fs,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Vt=r(fs,"A",{href:!0,rel:!0});var ap=i(Vt);rd=a(ap,"RVL-CDIP"),ap.forEach(t),id=a(fs," dataset."),fs.forEach(t),ld=u(tt),Ht=r(tt,"P",{});var gs=i(Ht);dd=a(gs,"This model is a PyTorch "),Gt=r(gs,"A",{href:!0,rel:!0});var sp=i(Gt);cd=a(sp,"torch.nn.Module"),sp.forEach(t),ud=a(gs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gs.forEach(t),pd=u(tt),H=r(tt,"DIV",{class:!0});var ot=i(H);b(Xt.$$.fragment,ot),md=u(ot),be=r(ot,"P",{});var on=i(be);hd=a(on,"The "),Qo=r(on,"A",{href:!0});var rp=i(Qo);fd=a(rp,"LayoutLMv3ForSequenceClassification"),rp.forEach(t),gd=a(on," forward method, overrides the "),ia=r(on,"CODE",{});var ip=i(ia);_d=a(ip,"__call__"),ip.forEach(t),vd=a(on," special method."),on.forEach(t),yd=u(ot),b(We.$$.fragment,ot),bd=u(ot),b(Be.$$.fragment,ot),ot.forEach(t),tt.forEach(t),Ha=u(o),Le=r(o,"H2",{class:!0});var _s=i(Le);Ue=r(_s,"A",{id:!0,class:!0,href:!0});var lp=i(Ue);la=r(lp,"SPAN",{});var dp=i(la);b(Yt.$$.fragment,dp),dp.forEach(t),lp.forEach(t),Ld=u(_s),da=r(_s,"SPAN",{});var cp=i(da);kd=a(cp,"LayoutLMv3ForTokenClassification"),cp.forEach(t),_s.forEach(t),Ga=u(o),W=r(o,"DIV",{class:!0});var nt=i(W);b(Jt.$$.fragment,nt),wd=u(nt),B=r(nt,"P",{});var le=i(B);xd=a(le,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Kt=r(le,"A",{href:!0,rel:!0});var up=i(Kt);Td=a(up,"FUNSD"),up.forEach(t),Md=a(le,`,
`),Zt=r(le,"A",{href:!0,rel:!0});var pp=i(Zt);$d=a(pp,"SROIE"),pp.forEach(t),zd=a(le,", "),eo=r(le,"A",{href:!0,rel:!0});var mp=i(eo);qd=a(mp,"CORD"),mp.forEach(t),Ed=a(le,` and
`),to=r(le,"A",{href:!0,rel:!0});var hp=i(to);Fd=a(hp,"Kleister-NDA"),hp.forEach(t),Pd=a(le,"."),le.forEach(t),Cd=u(nt),oo=r(nt,"P",{});var vs=i(oo);Ad=a(vs,"This model is a PyTorch "),no=r(vs,"A",{href:!0,rel:!0});var fp=i(no);jd=a(fp,"torch.nn.Module"),fp.forEach(t),Id=a(vs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vs.forEach(t),Nd=u(nt),G=r(nt,"DIV",{class:!0});var at=i(G);b(ao.$$.fragment,at),Sd=u(at),ke=r(at,"P",{});var nn=i(ke);Dd=a(nn,"The "),Vo=r(nn,"A",{href:!0});var gp=i(Vo);Od=a(gp,"LayoutLMv3ForTokenClassification"),gp.forEach(t),Rd=a(nn," forward method, overrides the "),ca=r(nn,"CODE",{});var _p=i(ca);Wd=a(_p,"__call__"),_p.forEach(t),Bd=a(nn," special method."),nn.forEach(t),Ud=u(at),b(Qe.$$.fragment,at),Qd=u(at),b(Ve.$$.fragment,at),at.forEach(t),nt.forEach(t),Xa=u(o),we=r(o,"H2",{class:!0});var ys=i(we);He=r(ys,"A",{id:!0,class:!0,href:!0});var vp=i(He);ua=r(vp,"SPAN",{});var yp=i(ua);b(so.$$.fragment,yp),yp.forEach(t),vp.forEach(t),Vd=u(ys),pa=r(ys,"SPAN",{});var bp=i(pa);Hd=a(bp,"LayoutLMv3ForQuestionAnswering"),bp.forEach(t),ys.forEach(t),Ya=u(o),U=r(o,"DIV",{class:!0});var st=i(U);b(ro.$$.fragment,st),Gd=u(st),Z=r(st,"P",{});var rt=i(Z);Xd=a(rt,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),io=r(rt,"A",{href:!0,rel:!0});var Lp=i(io);Yd=a(Lp,"DocVQA"),Lp.forEach(t),Jd=a(rt,` (a linear layer on top of the text part of the hidden-states output to
compute `),ma=r(rt,"CODE",{});var kp=i(ma);Kd=a(kp,"span start logits"),kp.forEach(t),Zd=a(rt," and "),ha=r(rt,"CODE",{});var wp=i(ha);ec=a(wp,"span end logits"),wp.forEach(t),tc=a(rt,")."),rt.forEach(t),oc=u(st),lo=r(st,"P",{});var bs=i(lo);nc=a(bs,"This model is a PyTorch "),co=r(bs,"A",{href:!0,rel:!0});var xp=i(co);ac=a(xp,"torch.nn.Module"),xp.forEach(t),sc=a(bs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bs.forEach(t),rc=u(st),X=r(st,"DIV",{class:!0});var it=i(X);b(uo.$$.fragment,it),ic=u(it),xe=r(it,"P",{});var an=i(xe);lc=a(an,"The "),Ho=r(an,"A",{href:!0});var Tp=i(Ho);dc=a(Tp,"LayoutLMv3ForQuestionAnswering"),Tp.forEach(t),cc=a(an," forward method, overrides the "),fa=r(an,"CODE",{});var Mp=i(fa);uc=a(Mp,"__call__"),Mp.forEach(t),pc=a(an," special method."),an.forEach(t),mc=u(it),b(Ge.$$.fragment,it),hc=u(it),b(Xe.$$.fragment,it),it.forEach(t),st.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Up)),l(f,"id","layoutlmv3"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#layoutlmv3"),l(_,"class","relative group"),l(Te,"id","overview"),l(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Te,"href","#overview"),l(de,"class","relative group"),l(dt,"href","https://arxiv.org/abs/2204.08387"),l(dt,"rel","nofollow"),l(ho,"href","layoutlmv2"),l(fo,"href","vit"),l(yo,"href","layoutlmv2"),l(bo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),l(Lo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(ko,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(wo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),l(xo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),l(To,"href","layoutlmv2#usage:LayoutLMv2Processor"),l(Mo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(pt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),l(pt,"rel","nofollow"),Fp($e.src,bc="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||l($e,"src",bc),l($e,"alt","drawing"),l($e,"width","600"),l($o,"href","https://arxiv.org/abs/2204.08387"),l(mt,"href","https://huggingface.co/nielsr"),l(mt,"rel","nofollow"),l(ht,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),l(ht,"rel","nofollow"),l(qe,"id","transformers.LayoutLMv3Config"),l(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(qe,"href","#transformers.LayoutLMv3Config"),l(ce,"class","relative group"),l(zo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),l(_t,"href","https://huggingface.co/microsoft/layoutlmv3-base"),l(_t,"rel","nofollow"),l(qo,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),l(Eo,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Fe,"id","transformers.LayoutLMv3FeatureExtractor"),l(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Fe,"href","#transformers.LayoutLMv3FeatureExtractor"),l(me,"class","relative group"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ce,"id","transformers.LayoutLMv3Tokenizer"),l(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ce,"href","#transformers.LayoutLMv3Tokenizer"),l(he,"class","relative group"),l(Fo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(Po,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Ao,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(je,"id","transformers.LayoutLMv3TokenizerFast"),l(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(je,"href","#transformers.LayoutLMv3TokenizerFast"),l(fe,"class","relative group"),l(Io,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ne,"id","transformers.LayoutLMv3Processor"),l(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ne,"href","#transformers.LayoutLMv3Processor"),l(ge,"class","relative group"),l(So,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),l(Do,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(Oo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(Ro,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),l(jt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),l(Wo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(It,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),l(Bo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(Nt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Se,"id","transformers.LayoutLMv3Model"),l(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Se,"href","#transformers.LayoutLMv3Model"),l(_e,"class","relative group"),l(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Rt,"rel","nofollow"),l(Uo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Re,"id","transformers.LayoutLMv3ForSequenceClassification"),l(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Re,"href","#transformers.LayoutLMv3ForSequenceClassification"),l(ye,"class","relative group"),l(Vt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Vt,"rel","nofollow"),l(Gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Gt,"rel","nofollow"),l(Qo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),l(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ue,"id","transformers.LayoutLMv3ForTokenClassification"),l(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ue,"href","#transformers.LayoutLMv3ForTokenClassification"),l(Le,"class","relative group"),l(Kt,"href","https://guillaumejaume.github.io/FUNSD/"),l(Kt,"rel","nofollow"),l(Zt,"href","https://rrc.cvc.uab.es/?ch=13"),l(Zt,"rel","nofollow"),l(eo,"href","https://github.com/clovaai/cord"),l(eo,"rel","nofollow"),l(to,"href","https://github.com/applicaai/kleister-nda"),l(to,"rel","nofollow"),l(no,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(no,"rel","nofollow"),l(Vo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(He,"id","transformers.LayoutLMv3ForQuestionAnswering"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#transformers.LayoutLMv3ForQuestionAnswering"),l(we,"class","relative group"),l(io,"href","https://rrc.cvc.uab.es/?ch=17"),l(io,"rel","nofollow"),l(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(co,"rel","nofollow"),l(Ho,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,p),g(o,T,m),g(o,_,m),e(_,f),e(f,v),L(d,v,null),e(_,h),e(_,C),e(C,ks),g(o,xa,m),g(o,de,m),e(de,Te),e(Te,dn),L(lt,dn,null),e(de,ws),e(de,cn),e(cn,xs),g(o,Ta,m),g(o,Q,m),e(Q,Ts),e(Q,dt),e(dt,Ms),e(Q,$s),e(Q,ho),e(ho,zs),e(Q,qs),e(Q,fo),e(fo,Es),e(Q,Fs),g(o,Ma,m),g(o,go,m),e(go,Ps),g(o,$a,m),g(o,_o,m),e(_o,un),e(un,Cs),g(o,za,m),g(o,vo,m),e(vo,As),g(o,qa,m),g(o,oe,m),e(oe,Me),e(Me,js),e(Me,yo),e(yo,Is),e(Me,Ns),e(Me,ct),e(ct,pn),e(pn,Ss),e(ct,Ds),e(ct,N),e(N,Os),e(N,bo),e(bo,Rs),e(N,Ws),e(N,Lo),e(Lo,Bs),e(N,Us),e(N,ko),e(ko,Qs),e(N,Vs),e(N,wo),e(wo,Hs),e(N,Gs),e(oe,Xs),e(oe,J),e(J,Ys),e(J,xo),e(xo,Js),e(J,Ks),e(J,To),e(To,Zs),e(J,er),e(J,Mo),e(Mo,tr),e(J,or),e(oe,nr),e(oe,ut),e(ut,ar),e(ut,pt),e(pt,sr),e(ut,rr),g(o,Ea,m),g(o,$e,m),g(o,Fa,m),g(o,ze,m),e(ze,ir),e(ze,$o),e($o,lr),e(ze,dr),g(o,Pa,m),g(o,ne,m),e(ne,cr),e(ne,mt),e(mt,ur),e(ne,pr),e(ne,ht),e(ht,mr),e(ne,hr),g(o,Ca,m),g(o,ce,m),e(ce,qe),e(qe,mn),L(ft,mn,null),e(ce,fr),e(ce,hn),e(hn,gr),g(o,Aa,m),g(o,S,m),L(gt,S,null),e(S,_r),e(S,ue),e(ue,vr),e(ue,zo),e(zo,yr),e(ue,br),e(ue,_t),e(_t,Lr),e(ue,kr),e(S,wr),e(S,pe),e(pe,xr),e(pe,qo),e(qo,Tr),e(pe,Mr),e(pe,Eo),e(Eo,$r),e(pe,zr),e(S,qr),L(Ee,S,null),g(o,ja,m),g(o,me,m),e(me,Fe),e(Fe,fn),L(vt,fn,null),e(me,Er),e(me,gn),e(gn,Fr),g(o,Ia,m),g(o,D,m),L(yt,D,null),e(D,Pr),e(D,_n),e(_n,Cr),e(D,Ar),e(D,bt),e(bt,jr),e(bt,vn),e(vn,Ir),e(bt,Nr),e(D,Sr),e(D,ae),L(Lt,ae,null),e(ae,Dr),e(ae,yn),e(yn,Or),e(ae,Rr),L(Pe,ae,null),g(o,Na,m),g(o,he,m),e(he,Ce),e(Ce,bn),L(kt,bn,null),e(he,Wr),e(he,Ln),e(Ln,Br),g(o,Sa,m),g(o,A,m),L(wt,A,null),e(A,Ur),e(A,F),e(F,Qr),e(F,kn),e(kn,Vr),e(F,Hr),e(F,Fo),e(Fo,Gr),e(F,Xr),e(F,wn),e(wn,Yr),e(F,Jr),e(F,xn),e(xn,Kr),e(F,Zr),e(F,Tn),e(Tn,ei),e(F,ti),e(F,Mn),e(Mn,oi),e(F,ni),e(F,$n),e($n,ai),e(F,si),e(A,ri),e(A,xt),e(xt,ii),e(xt,Po),e(Po,li),e(xt,di),e(A,ci),e(A,Co),e(Co,Ao),e(Ao,ui),e(Co,pi),e(A,mi),e(A,Ae),L(Tt,Ae,null),e(Ae,hi),e(Ae,zn),e(zn,fi),e(A,gi),e(A,jo),L(Mt,jo,null),g(o,Da,m),g(o,fe,m),e(fe,je),e(je,qn),L($t,qn,null),e(fe,_i),e(fe,En),e(En,vi),g(o,Oa,m),g(o,O,m),L(zt,O,null),e(O,yi),e(O,qt),e(qt,bi),e(qt,Fn),e(Fn,Li),e(qt,ki),e(O,wi),e(O,Et),e(Et,xi),e(Et,Io),e(Io,Ti),e(Et,Mi),e(O,$i),e(O,Ie),L(Ft,Ie,null),e(Ie,zi),e(Ie,Pn),e(Pn,qi),g(o,Ra,m),g(o,ge,m),e(ge,Ne),e(Ne,Cn),L(Pt,Cn,null),e(ge,Ei),e(ge,An),e(An,Fi),g(o,Wa,m),g(o,I,m),L(Ct,I,null),e(I,Pi),e(I,jn),e(jn,Ci),e(I,Ai),e(I,No),e(No,So),e(So,ji),e(No,Ii),e(I,Ni),e(I,z),e(z,Si),e(z,Do),e(Do,Di),e(z,Oi),e(z,Oo),e(Oo,Ri),e(z,Wi),e(z,Ro),e(Ro,Bi),e(z,Ui),e(z,In),e(In,Qi),e(z,Vi),e(z,Nn),e(Nn,Hi),e(z,Gi),e(z,Sn),e(Sn,Xi),e(z,Yi),e(z,Dn),e(Dn,Ji),e(z,Ki),e(z,On),e(On,Zi),e(z,el),e(z,Rn),e(Rn,tl),e(z,ol),e(I,nl),e(I,se),L(At,se,null),e(se,al),e(se,M),e(M,sl),e(M,Wn),e(Wn,rl),e(M,il),e(M,jt),e(jt,Bn),e(Bn,ll),e(jt,dl),e(M,cl),e(M,Wo),e(Wo,ul),e(M,pl),e(M,Un),e(Un,ml),e(M,hl),e(M,Qn),e(Qn,fl),e(M,gl),e(M,It),e(It,Vn),e(Vn,_l),e(It,vl),e(M,yl),e(M,Hn),e(Hn,bl),e(M,Ll),e(M,Bo),e(Bo,kl),e(M,wl),e(M,Gn),e(Gn,xl),e(M,Tl),e(M,Xn),e(Xn,Ml),e(M,$l),e(M,Yn),e(Yn,zl),e(M,ql),e(M,Jn),e(Jn,El),e(M,Fl),e(M,Kn),e(Kn,Pl),e(M,Cl),e(M,Nt),e(Nt,Zn),e(Zn,Al),e(Nt,jl),e(M,Il),e(M,ea),e(ea,Nl),e(M,Sl),e(se,Dl),e(se,ta),e(ta,Ol),g(o,Ba,m),g(o,_e,m),e(_e,Se),e(Se,oa),L(St,oa,null),e(_e,Rl),e(_e,na),e(na,Wl),g(o,Ua,m),g(o,K,m),L(Dt,K,null),e(K,Bl),e(K,Ot),e(Ot,Ul),e(Ot,Rt),e(Rt,Ql),e(Ot,Vl),e(K,Hl),e(K,V),L(Wt,V,null),e(V,Gl),e(V,ve),e(ve,Xl),e(ve,Uo),e(Uo,Yl),e(ve,Jl),e(ve,aa),e(aa,Kl),e(ve,Zl),e(V,ed),L(De,V,null),e(V,td),L(Oe,V,null),g(o,Qa,m),g(o,ye,m),e(ye,Re),e(Re,sa),L(Bt,sa,null),e(ye,od),e(ye,ra),e(ra,nd),g(o,Va,m),g(o,R,m),L(Ut,R,null),e(R,ad),e(R,Qt),e(Qt,sd),e(Qt,Vt),e(Vt,rd),e(Qt,id),e(R,ld),e(R,Ht),e(Ht,dd),e(Ht,Gt),e(Gt,cd),e(Ht,ud),e(R,pd),e(R,H),L(Xt,H,null),e(H,md),e(H,be),e(be,hd),e(be,Qo),e(Qo,fd),e(be,gd),e(be,ia),e(ia,_d),e(be,vd),e(H,yd),L(We,H,null),e(H,bd),L(Be,H,null),g(o,Ha,m),g(o,Le,m),e(Le,Ue),e(Ue,la),L(Yt,la,null),e(Le,Ld),e(Le,da),e(da,kd),g(o,Ga,m),g(o,W,m),L(Jt,W,null),e(W,wd),e(W,B),e(B,xd),e(B,Kt),e(Kt,Td),e(B,Md),e(B,Zt),e(Zt,$d),e(B,zd),e(B,eo),e(eo,qd),e(B,Ed),e(B,to),e(to,Fd),e(B,Pd),e(W,Cd),e(W,oo),e(oo,Ad),e(oo,no),e(no,jd),e(oo,Id),e(W,Nd),e(W,G),L(ao,G,null),e(G,Sd),e(G,ke),e(ke,Dd),e(ke,Vo),e(Vo,Od),e(ke,Rd),e(ke,ca),e(ca,Wd),e(ke,Bd),e(G,Ud),L(Qe,G,null),e(G,Qd),L(Ve,G,null),g(o,Xa,m),g(o,we,m),e(we,He),e(He,ua),L(so,ua,null),e(we,Vd),e(we,pa),e(pa,Hd),g(o,Ya,m),g(o,U,m),L(ro,U,null),e(U,Gd),e(U,Z),e(Z,Xd),e(Z,io),e(io,Yd),e(Z,Jd),e(Z,ma),e(ma,Kd),e(Z,Zd),e(Z,ha),e(ha,ec),e(Z,tc),e(U,oc),e(U,lo),e(lo,nc),e(lo,co),e(co,ac),e(lo,sc),e(U,rc),e(U,X),L(uo,X,null),e(X,ic),e(X,xe),e(xe,lc),e(xe,Ho),e(Ho,dc),e(xe,cc),e(xe,fa),e(fa,uc),e(xe,pc),e(X,mc),L(Ge,X,null),e(X,hc),L(Xe,X,null),Ja=!0},p(o,[m]){const po={};m&2&&(po.$$scope={dirty:m,ctx:o}),Ee.$set(po);const ga={};m&2&&(ga.$$scope={dirty:m,ctx:o}),Pe.$set(ga);const _a={};m&2&&(_a.$$scope={dirty:m,ctx:o}),De.$set(_a);const va={};m&2&&(va.$$scope={dirty:m,ctx:o}),Oe.$set(va);const mo={};m&2&&(mo.$$scope={dirty:m,ctx:o}),We.$set(mo);const ya={};m&2&&(ya.$$scope={dirty:m,ctx:o}),Be.$set(ya);const ba={};m&2&&(ba.$$scope={dirty:m,ctx:o}),Qe.$set(ba);const La={};m&2&&(La.$$scope={dirty:m,ctx:o}),Ve.$set(La);const ee={};m&2&&(ee.$$scope={dirty:m,ctx:o}),Ge.$set(ee);const ka={};m&2&&(ka.$$scope={dirty:m,ctx:o}),Xe.$set(ka)},i(o){Ja||(k(d.$$.fragment,o),k(lt.$$.fragment,o),k(ft.$$.fragment,o),k(gt.$$.fragment,o),k(Ee.$$.fragment,o),k(vt.$$.fragment,o),k(yt.$$.fragment,o),k(Lt.$$.fragment,o),k(Pe.$$.fragment,o),k(kt.$$.fragment,o),k(wt.$$.fragment,o),k(Tt.$$.fragment,o),k(Mt.$$.fragment,o),k($t.$$.fragment,o),k(zt.$$.fragment,o),k(Ft.$$.fragment,o),k(Pt.$$.fragment,o),k(Ct.$$.fragment,o),k(At.$$.fragment,o),k(St.$$.fragment,o),k(Dt.$$.fragment,o),k(Wt.$$.fragment,o),k(De.$$.fragment,o),k(Oe.$$.fragment,o),k(Bt.$$.fragment,o),k(Ut.$$.fragment,o),k(Xt.$$.fragment,o),k(We.$$.fragment,o),k(Be.$$.fragment,o),k(Yt.$$.fragment,o),k(Jt.$$.fragment,o),k(ao.$$.fragment,o),k(Qe.$$.fragment,o),k(Ve.$$.fragment,o),k(so.$$.fragment,o),k(ro.$$.fragment,o),k(uo.$$.fragment,o),k(Ge.$$.fragment,o),k(Xe.$$.fragment,o),Ja=!0)},o(o){w(d.$$.fragment,o),w(lt.$$.fragment,o),w(ft.$$.fragment,o),w(gt.$$.fragment,o),w(Ee.$$.fragment,o),w(vt.$$.fragment,o),w(yt.$$.fragment,o),w(Lt.$$.fragment,o),w(Pe.$$.fragment,o),w(kt.$$.fragment,o),w(wt.$$.fragment,o),w(Tt.$$.fragment,o),w(Mt.$$.fragment,o),w($t.$$.fragment,o),w(zt.$$.fragment,o),w(Ft.$$.fragment,o),w(Pt.$$.fragment,o),w(Ct.$$.fragment,o),w(At.$$.fragment,o),w(St.$$.fragment,o),w(Dt.$$.fragment,o),w(Wt.$$.fragment,o),w(De.$$.fragment,o),w(Oe.$$.fragment,o),w(Bt.$$.fragment,o),w(Ut.$$.fragment,o),w(Xt.$$.fragment,o),w(We.$$.fragment,o),w(Be.$$.fragment,o),w(Yt.$$.fragment,o),w(Jt.$$.fragment,o),w(ao.$$.fragment,o),w(Qe.$$.fragment,o),w(Ve.$$.fragment,o),w(so.$$.fragment,o),w(ro.$$.fragment,o),w(uo.$$.fragment,o),w(Ge.$$.fragment,o),w(Xe.$$.fragment,o),Ja=!1},d(o){t(p),o&&t(T),o&&t(_),x(d),o&&t(xa),o&&t(de),x(lt),o&&t(Ta),o&&t(Q),o&&t(Ma),o&&t(go),o&&t($a),o&&t(_o),o&&t(za),o&&t(vo),o&&t(qa),o&&t(oe),o&&t(Ea),o&&t($e),o&&t(Fa),o&&t(ze),o&&t(Pa),o&&t(ne),o&&t(Ca),o&&t(ce),x(ft),o&&t(Aa),o&&t(S),x(gt),x(Ee),o&&t(ja),o&&t(me),x(vt),o&&t(Ia),o&&t(D),x(yt),x(Lt),x(Pe),o&&t(Na),o&&t(he),x(kt),o&&t(Sa),o&&t(A),x(wt),x(Tt),x(Mt),o&&t(Da),o&&t(fe),x($t),o&&t(Oa),o&&t(O),x(zt),x(Ft),o&&t(Ra),o&&t(ge),x(Pt),o&&t(Wa),o&&t(I),x(Ct),x(At),o&&t(Ba),o&&t(_e),x(St),o&&t(Ua),o&&t(K),x(Dt),x(Wt),x(De),x(Oe),o&&t(Qa),o&&t(ye),x(Bt),o&&t(Va),o&&t(R),x(Ut),x(Xt),x(We),x(Be),o&&t(Ha),o&&t(Le),x(Yt),o&&t(Ga),o&&t(W),x(Jt),x(ao),x(Qe),x(Ve),o&&t(Xa),o&&t(we),x(so),o&&t(Ya),o&&t(U),x(ro),x(uo),x(Ge),x(Xe)}}}const Up={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function Qp(q){return Pp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kp extends $p{constructor(p){super();zp(this,p,Qp,Bp,qp,{})}}export{Kp as default,Up as metadata};
