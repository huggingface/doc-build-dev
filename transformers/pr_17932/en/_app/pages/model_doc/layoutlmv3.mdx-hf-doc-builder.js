import{S as wp,i as xp,s as Tp,e as s,k as c,w as y,t as n,M as Mp,c as r,d as t,m as u,a as i,x as b,h as a,b as d,N as $p,G as e,g,y as L,q as k,o as w,B as x,v as Ep,L as sn}from"../../chunks/vendor-hf-doc-builder.js";import{T as bs}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as rn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as an}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zp(z){let p,T,_,f,v;return f=new rn({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=s("p"),T=n("Example:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Example:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function qp(z){let p,T,_,f,v;return f=new rn({props:{code:`from transformers import LayoutLMv3FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function Fp(z){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var A=i(_);f=a(A,"Module"),A.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function Pp(z){let p,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function Ap(z){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var A=i(_);f=a(A,"Module"),A.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function Cp(z){let p,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function jp(z){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var A=i(_);f=a(A,"Module"),A.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function Np(z){let p,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function Ip(z){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var A=i(_);f=a(A,"Module"),A.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function Dp(z){let p,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function Sp(z){let p,T,_,f,v,l,h,A,Ls,wa,le,Te,ln,it,ks,dn,ws,xa,W,xs,lt,Ts,Ms,mo,$s,Es,ho,zs,qs,Ta,fo,Fs,Ma,go,cn,Ps,$a,_o,As,Ea,te,Me,Cs,vo,js,Ns,dt,un,Is,Ds,I,Ss,yo,Os,Rs,bo,Us,Bs,Lo,Vs,Ws,ko,Qs,Hs,Gs,de,Xs,wo,Ys,Js,xo,Ks,Zs,er,ct,tr,ut,or,nr,za,$e,_c,qa,Ee,ar,To,sr,rr,Fa,oe,ir,pt,lr,dr,mt,cr,ur,Pa,ce,ze,pn,ht,pr,mn,mr,Aa,D,ft,hr,ue,fr,Mo,gr,_r,gt,vr,yr,br,pe,Lr,$o,kr,wr,Eo,xr,Tr,Mr,qe,Ca,me,Fe,hn,_t,$r,fn,Er,ja,S,vt,zr,gn,qr,Fr,yt,Pr,_n,Ar,Cr,jr,ne,bt,Nr,vn,Ir,Dr,Pe,Na,he,Ae,yn,Lt,Sr,bn,Or,Ia,C,kt,Rr,F,Ur,Ln,Br,Vr,zo,Wr,Qr,kn,Hr,Gr,wn,Xr,Yr,xn,Jr,Kr,Tn,Zr,ei,Mn,ti,oi,ni,wt,ai,qo,si,ri,ii,Fo,Po,li,di,ci,Ce,xt,ui,$n,pi,mi,Ao,Tt,Da,fe,je,En,Mt,hi,zn,fi,Sa,O,$t,gi,Et,_i,qn,vi,yi,bi,zt,Li,Co,ki,wi,xi,Ne,qt,Ti,Fn,Mi,Oa,ge,Ie,Pn,Ft,$i,An,Ei,Ra,N,Pt,zi,Cn,qi,Fi,jo,No,Pi,Ai,Ci,E,ji,Io,Ni,Ii,Do,Di,Si,So,Oi,Ri,jn,Ui,Bi,Nn,Vi,Wi,In,Qi,Hi,Dn,Gi,Xi,Sn,Yi,Ji,On,Ki,Zi,el,ae,At,tl,M,ol,Rn,nl,al,Ct,Un,sl,rl,il,Oo,ll,dl,Bn,cl,ul,Vn,pl,ml,jt,Wn,hl,fl,gl,Qn,_l,vl,Ro,yl,bl,Hn,Ll,kl,Gn,wl,xl,Xn,Tl,Ml,Yn,$l,El,Jn,zl,ql,Nt,Kn,Fl,Pl,Al,Zn,Cl,jl,Nl,ea,Il,Ua,_e,De,ta,It,Dl,oa,Sl,Ba,J,Dt,Ol,St,Rl,Ot,Ul,Bl,Vl,Q,Rt,Wl,ve,Ql,Uo,Hl,Gl,na,Xl,Yl,Jl,Se,Kl,Oe,Va,ye,Re,aa,Ut,Zl,sa,ed,Wa,R,Bt,td,Vt,od,Wt,nd,ad,sd,Qt,rd,Ht,id,ld,dd,H,Gt,cd,be,ud,Bo,pd,md,ra,hd,fd,gd,Ue,_d,Be,Qa,Le,Ve,ia,Xt,vd,la,yd,Ha,U,Yt,bd,B,Ld,Jt,kd,wd,Kt,xd,Td,Zt,Md,$d,eo,Ed,zd,qd,to,Fd,oo,Pd,Ad,Cd,G,no,jd,ke,Nd,Vo,Id,Dd,da,Sd,Od,Rd,We,Ud,Qe,Ga,we,He,ca,ao,Bd,ua,Vd,Xa,V,so,Wd,K,Qd,ro,Hd,Gd,pa,Xd,Yd,ma,Jd,Kd,Zd,io,ec,lo,tc,oc,nc,X,co,ac,xe,sc,Wo,rc,ic,ha,lc,dc,cc,Ge,uc,Xe,Ya;return l=new ee({}),it=new ee({}),ht=new ee({}),ft=new P({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LayoutLMv3 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv3Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv3Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),qe=new an({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[zp]},$$scope:{ctx:z}}}),_t=new ee({}),vt=new P({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L82"}}),bt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L143",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17932/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17932/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Pe=new an({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[qp]},$$scope:{ctx:z}}}),Lt=new ee({}),kt=new P({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),xt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),Tt=new P({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),Mt=new ee({}),$t=new P({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),qt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17932/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),Ft=new ee({}),Pt=new P({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),At=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),It=new ee({}),Dt=new P({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17932/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L692"}}),Rt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new bs({props:{$$slots:{default:[Fp]},$$scope:{ctx:z}}}),Oe=new an({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Pp]},$$scope:{ctx:z}}}),Ut=new ee({}),Bt=new P({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17932/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1224"}}),Gt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1236",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new bs({props:{$$slots:{default:[Ap]},$$scope:{ctx:z}}}),Be=new an({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[Cp]},$$scope:{ctx:z}}}),Xt=new ee({}),Yt=new P({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17932/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L980"}}),no=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L997",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new bs({props:{$$slots:{default:[jp]},$$scope:{ctx:z}}}),Qe=new an({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Np]},$$scope:{ctx:z}}}),ao=new ee({}),so=new P({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17932/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1093"}}),co=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/vr_17932/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1106",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/pr_17932/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new bs({props:{$$slots:{default:[Ip]},$$scope:{ctx:z}}}),Xe=new an({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[Dp]},$$scope:{ctx:z}}}),{c(){p=s("meta"),T=c(),_=s("h1"),f=s("a"),v=s("span"),y(l.$$.fragment),h=c(),A=s("span"),Ls=n("LayoutLMv3"),wa=c(),le=s("h2"),Te=s("a"),ln=s("span"),y(it.$$.fragment),ks=c(),dn=s("span"),ws=n("Overview"),xa=c(),W=s("p"),xs=n("The LayoutLMv3 model was proposed in "),lt=s("a"),Ts=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),Ms=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),mo=s("a"),$s=n("LayoutLMv2"),Es=n(" by using patch embeddings (as in "),ho=s("a"),zs=n("ViT"),qs=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Ta=c(),fo=s("p"),Fs=n("The abstract from the paper is the following:"),Ma=c(),go=s("p"),cn=s("em"),Ps=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),$a=c(),_o=s("p"),As=n("Tips:"),Ea=c(),te=s("ul"),Me=s("li"),Cs=n("In terms of data processing, LayoutLMv3 is identical to its predecessor "),vo=s("a"),js=n("LayoutLMv2"),Ns=n(", except that:"),dt=s("ul"),un=s("li"),Is=n("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ds=c(),I=s("li"),Ss=n(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),yo=s("a"),Os=n("LayoutLMv3Processor"),Rs=n(" which internally combines a "),bo=s("a"),Us=n("LayoutLMv3FeatureExtractor"),Bs=n(" (for the image modality) and a "),Lo=s("a"),Vs=n("LayoutLMv3Tokenizer"),Ws=n("/"),ko=s("a"),Qs=n("LayoutLMv3TokenizerFast"),Hs=n(" (for the text modality) to prepare all data for the model."),Gs=c(),de=s("li"),Xs=n("Regarding usage of "),wo=s("a"),Ys=n("LayoutLMv3Processor"),Js=n(", we refer to the "),xo=s("a"),Ks=n("usage guide"),Zs=n(" of its predecessor."),er=c(),ct=s("li"),tr=n("Demo notebooks for LayoutLMv3 can be found "),ut=s("a"),or=n("here"),nr=n("."),za=c(),$e=s("img"),qa=c(),Ee=s("small"),ar=n("LayoutLMv3 architecture. Taken from the "),To=s("a"),sr=n("original paper"),rr=n("."),Fa=c(),oe=s("p"),ir=n("This model was contributed by "),pt=s("a"),lr=n("nielsr"),dr=n(". The original code can be found "),mt=s("a"),cr=n("here"),ur=n("."),Pa=c(),ce=s("h2"),ze=s("a"),pn=s("span"),y(ht.$$.fragment),pr=c(),mn=s("span"),mr=n("LayoutLMv3Config"),Aa=c(),D=s("div"),y(ft.$$.fragment),hr=c(),ue=s("p"),fr=n("This is the configuration class to store the configuration of a "),Mo=s("a"),gr=n("LayoutLMv3Model"),_r=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),gt=s("a"),vr=n("microsoft/layoutlmv3-base"),yr=n(" architecture."),br=c(),pe=s("p"),Lr=n("Configuration objects inherit from "),$o=s("a"),kr=n("PretrainedConfig"),wr=n(` and can be used to control the model outputs. Read the
documentation from `),Eo=s("a"),xr=n("PretrainedConfig"),Tr=n(" for more information."),Mr=c(),y(qe.$$.fragment),Ca=c(),me=s("h2"),Fe=s("a"),hn=s("span"),y(_t.$$.fragment),$r=c(),fn=s("span"),Er=n("LayoutLMv3FeatureExtractor"),ja=c(),S=s("div"),y(vt.$$.fragment),zr=c(),gn=s("p"),qr=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Fr=c(),yt=s("p"),Pr=n("This feature extractor inherits from "),_n=s("code"),Ar=n("PreTrainedFeatureExtractor()"),Cr=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),jr=c(),ne=s("div"),y(bt.$$.fragment),Nr=c(),vn=s("p"),Ir=n("Main method to prepare for the model one or several image(s)."),Dr=c(),y(Pe.$$.fragment),Na=c(),he=s("h2"),Ae=s("a"),yn=s("span"),y(Lt.$$.fragment),Sr=c(),bn=s("span"),Or=n("LayoutLMv3Tokenizer"),Ia=c(),C=s("div"),y(kt.$$.fragment),Rr=c(),F=s("p"),Ur=n("Construct a LayoutLMv3 tokenizer. Based on "),Ln=s("code"),Br=n("RoBERTatokenizer"),Vr=n(` (Byte Pair Encoding or BPE).
`),zo=s("a"),Wr=n("LayoutLMv3Tokenizer"),Qr=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),kn=s("code"),Hr=n("input_ids"),Gr=n(", "),wn=s("code"),Xr=n("attention_mask"),Yr=n(", "),xn=s("code"),Jr=n("token_type_ids"),Kr=n(", "),Tn=s("code"),Zr=n("bbox"),ei=n(", and optional "),Mn=s("code"),ti=n("labels"),oi=n(` (for token
classification).`),ni=c(),wt=s("p"),ai=n("This tokenizer inherits from "),qo=s("a"),si=n("PreTrainedTokenizer"),ri=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ii=c(),Fo=s("p"),Po=s("a"),li=n("LayoutLMv3Tokenizer"),di=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),ci=c(),Ce=s("div"),y(xt.$$.fragment),ui=c(),$n=s("p"),pi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),mi=c(),Ao=s("div"),y(Tt.$$.fragment),Da=c(),fe=s("h2"),je=s("a"),En=s("span"),y(Mt.$$.fragment),hi=c(),zn=s("span"),fi=n("LayoutLMv3TokenizerFast"),Sa=c(),O=s("div"),y($t.$$.fragment),gi=c(),Et=s("p"),_i=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),qn=s("em"),vi=n("tokenizers"),yi=n(" library). Based on BPE."),bi=c(),zt=s("p"),Li=n("This tokenizer inherits from "),Co=s("a"),ki=n("PreTrainedTokenizerFast"),wi=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xi=c(),Ne=s("div"),y(qt.$$.fragment),Ti=c(),Fn=s("p"),Mi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Oa=c(),ge=s("h2"),Ie=s("a"),Pn=s("span"),y(Ft.$$.fragment),$i=c(),An=s("span"),Ei=n("LayoutLMv3Processor"),Ra=c(),N=s("div"),y(Pt.$$.fragment),zi=c(),Cn=s("p"),qi=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Fi=c(),jo=s("p"),No=s("a"),Pi=n("LayoutLMv3Processor"),Ai=n(" offers all the functionalities you need to prepare data for the model."),Ci=c(),E=s("p"),ji=n("It first uses "),Io=s("a"),Ni=n("LayoutLMv3FeatureExtractor"),Ii=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Do=s("a"),Di=n("LayoutLMv3Tokenizer"),Si=n(` or
`),So=s("a"),Oi=n("LayoutLMv3TokenizerFast"),Ri=n(", which turns the words and bounding boxes into token-level "),jn=s("code"),Ui=n("input_ids"),Bi=n(`,
`),Nn=s("code"),Vi=n("attention_mask"),Wi=n(", "),In=s("code"),Qi=n("token_type_ids"),Hi=n(", "),Dn=s("code"),Gi=n("bbox"),Xi=n(". Optionally, one can provide integer "),Sn=s("code"),Yi=n("word_labels"),Ji=n(`, which are turned
into token-level `),On=s("code"),Ki=n("labels"),Zi=n(" for token classification tasks (such as FUNSD, CORD)."),el=c(),ae=s("div"),y(At.$$.fragment),tl=c(),M=s("p"),ol=n("This method first forwards the "),Rn=s("code"),nl=n("images"),al=n(" argument to "),Ct=s("a"),Un=s("strong"),sl=n("call"),rl=n("()"),il=n(`. In case
`),Oo=s("a"),ll=n("LayoutLMv3FeatureExtractor"),dl=n(" was initialized with "),Bn=s("code"),cl=n("apply_ocr"),ul=n(" set to "),Vn=s("code"),pl=n("True"),ml=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),jt=s("a"),Wn=s("strong"),hl=n("call"),fl=n("()"),gl=n(` and returns the output,
together with resized and normalized `),Qn=s("code"),_l=n("pixel_values"),vl=n(". In case "),Ro=s("a"),yl=n("LayoutLMv3FeatureExtractor"),bl=n(` was initialized
with `),Hn=s("code"),Ll=n("apply_ocr"),kl=n(" set to "),Gn=s("code"),wl=n("False"),xl=n(", it passes the words ("),Xn=s("code"),Tl=n("text"),Ml=n("/`"),Yn=s("code"),$l=n("text_pair"),El=n(") and "),Jn=s("code"),zl=n("boxes"),ql=n(` specified by the user
along with the additional arguments to `),Nt=s("a"),Kn=s("strong"),Fl=n("call"),Pl=n("()"),Al=n(` and returns the output, together with
resized and normalized `),Zn=s("code"),Cl=n("pixel_values"),jl=n("."),Nl=c(),ea=s("p"),Il=n("Please refer to the docstring of the above two methods for more information."),Ua=c(),_e=s("h2"),De=s("a"),ta=s("span"),y(It.$$.fragment),Dl=c(),oa=s("span"),Sl=n("LayoutLMv3Model"),Ba=c(),J=s("div"),y(Dt.$$.fragment),Ol=c(),St=s("p"),Rl=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ot=s("a"),Ul=n("torch.nn.Module"),Bl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vl=c(),Q=s("div"),y(Rt.$$.fragment),Wl=c(),ve=s("p"),Ql=n("The "),Uo=s("a"),Hl=n("LayoutLMv3Model"),Gl=n(" forward method, overrides the "),na=s("code"),Xl=n("__call__"),Yl=n(" special method."),Jl=c(),y(Se.$$.fragment),Kl=c(),y(Oe.$$.fragment),Va=c(),ye=s("h2"),Re=s("a"),aa=s("span"),y(Ut.$$.fragment),Zl=c(),sa=s("span"),ed=n("LayoutLMv3ForSequenceClassification"),Wa=c(),R=s("div"),y(Bt.$$.fragment),td=c(),Vt=s("p"),od=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Wt=s("a"),nd=n("RVL-CDIP"),ad=n(" dataset."),sd=c(),Qt=s("p"),rd=n("This model is a PyTorch "),Ht=s("a"),id=n("torch.nn.Module"),ld=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dd=c(),H=s("div"),y(Gt.$$.fragment),cd=c(),be=s("p"),ud=n("The "),Bo=s("a"),pd=n("LayoutLMv3ForSequenceClassification"),md=n(" forward method, overrides the "),ra=s("code"),hd=n("__call__"),fd=n(" special method."),gd=c(),y(Ue.$$.fragment),_d=c(),y(Be.$$.fragment),Qa=c(),Le=s("h2"),Ve=s("a"),ia=s("span"),y(Xt.$$.fragment),vd=c(),la=s("span"),yd=n("LayoutLMv3ForTokenClassification"),Ha=c(),U=s("div"),y(Yt.$$.fragment),bd=c(),B=s("p"),Ld=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Jt=s("a"),kd=n("FUNSD"),wd=n(`,
`),Kt=s("a"),xd=n("SROIE"),Td=n(", "),Zt=s("a"),Md=n("CORD"),$d=n(` and
`),eo=s("a"),Ed=n("Kleister-NDA"),zd=n("."),qd=c(),to=s("p"),Fd=n("This model is a PyTorch "),oo=s("a"),Pd=n("torch.nn.Module"),Ad=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cd=c(),G=s("div"),y(no.$$.fragment),jd=c(),ke=s("p"),Nd=n("The "),Vo=s("a"),Id=n("LayoutLMv3ForTokenClassification"),Dd=n(" forward method, overrides the "),da=s("code"),Sd=n("__call__"),Od=n(" special method."),Rd=c(),y(We.$$.fragment),Ud=c(),y(Qe.$$.fragment),Ga=c(),we=s("h2"),He=s("a"),ca=s("span"),y(ao.$$.fragment),Bd=c(),ua=s("span"),Vd=n("LayoutLMv3ForQuestionAnswering"),Xa=c(),V=s("div"),y(so.$$.fragment),Wd=c(),K=s("p"),Qd=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ro=s("a"),Hd=n("DocVQA"),Gd=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),pa=s("code"),Xd=n("span start logits"),Yd=n(" and "),ma=s("code"),Jd=n("span end logits"),Kd=n(")."),Zd=c(),io=s("p"),ec=n("This model is a PyTorch "),lo=s("a"),tc=n("torch.nn.Module"),oc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nc=c(),X=s("div"),y(co.$$.fragment),ac=c(),xe=s("p"),sc=n("The "),Wo=s("a"),rc=n("LayoutLMv3ForQuestionAnswering"),ic=n(" forward method, overrides the "),ha=s("code"),lc=n("__call__"),dc=n(" special method."),cc=c(),y(Ge.$$.fragment),uc=c(),y(Xe.$$.fragment),this.h()},l(o){const m=Mp('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),T=u(o),_=r(o,"H1",{class:!0});var uo=i(_);f=r(uo,"A",{id:!0,class:!0,href:!0});var fa=i(f);v=r(fa,"SPAN",{});var ga=i(v);b(l.$$.fragment,ga),ga.forEach(t),fa.forEach(t),h=u(uo),A=r(uo,"SPAN",{});var _a=i(A);Ls=a(_a,"LayoutLMv3"),_a.forEach(t),uo.forEach(t),wa=u(o),le=r(o,"H2",{class:!0});var po=i(le);Te=r(po,"A",{id:!0,class:!0,href:!0});var va=i(Te);ln=r(va,"SPAN",{});var ya=i(ln);b(it.$$.fragment,ya),ya.forEach(t),va.forEach(t),ks=u(po),dn=r(po,"SPAN",{});var ba=i(dn);ws=a(ba,"Overview"),ba.forEach(t),po.forEach(t),xa=u(o),W=r(o,"P",{});var Z=i(W);xs=a(Z,"The LayoutLMv3 model was proposed in "),lt=r(Z,"A",{href:!0,rel:!0});var La=i(lt);Ts=a(La,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),La.forEach(t),Ms=a(Z,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),mo=r(Z,"A",{href:!0});var vc=i(mo);$s=a(vc,"LayoutLMv2"),vc.forEach(t),Es=a(Z," by using patch embeddings (as in "),ho=r(Z,"A",{href:!0});var yc=i(ho);zs=a(yc,"ViT"),yc.forEach(t),qs=a(Z,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Z.forEach(t),Ta=u(o),fo=r(o,"P",{});var bc=i(fo);Fs=a(bc,"The abstract from the paper is the following:"),bc.forEach(t),Ma=u(o),go=r(o,"P",{});var Lc=i(go);cn=r(Lc,"EM",{});var kc=i(cn);Ps=a(kc,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),kc.forEach(t),Lc.forEach(t),$a=u(o),_o=r(o,"P",{});var wc=i(_o);As=a(wc,"Tips:"),wc.forEach(t),Ea=u(o),te=r(o,"UL",{});var Qo=i(te);Me=r(Qo,"LI",{});var ka=i(Me);Cs=a(ka,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),vo=r(ka,"A",{href:!0});var xc=i(vo);js=a(xc,"LayoutLMv2"),xc.forEach(t),Ns=a(ka,", except that:"),dt=r(ka,"UL",{});var Ja=i(dt);un=r(Ja,"LI",{});var Tc=i(un);Is=a(Tc,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Tc.forEach(t),Ds=u(Ja),I=r(Ja,"LI",{});var se=i(I);Ss=a(se,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),yo=r(se,"A",{href:!0});var Mc=i(yo);Os=a(Mc,"LayoutLMv3Processor"),Mc.forEach(t),Rs=a(se," which internally combines a "),bo=r(se,"A",{href:!0});var $c=i(bo);Us=a($c,"LayoutLMv3FeatureExtractor"),$c.forEach(t),Bs=a(se," (for the image modality) and a "),Lo=r(se,"A",{href:!0});var Ec=i(Lo);Vs=a(Ec,"LayoutLMv3Tokenizer"),Ec.forEach(t),Ws=a(se,"/"),ko=r(se,"A",{href:!0});var zc=i(ko);Qs=a(zc,"LayoutLMv3TokenizerFast"),zc.forEach(t),Hs=a(se," (for the text modality) to prepare all data for the model."),se.forEach(t),Ja.forEach(t),ka.forEach(t),Gs=u(Qo),de=r(Qo,"LI",{});var Ho=i(de);Xs=a(Ho,"Regarding usage of "),wo=r(Ho,"A",{href:!0});var qc=i(wo);Ys=a(qc,"LayoutLMv3Processor"),qc.forEach(t),Js=a(Ho,", we refer to the "),xo=r(Ho,"A",{href:!0});var Fc=i(xo);Ks=a(Fc,"usage guide"),Fc.forEach(t),Zs=a(Ho," of its predecessor."),Ho.forEach(t),er=u(Qo),ct=r(Qo,"LI",{});var Ka=i(ct);tr=a(Ka,"Demo notebooks for LayoutLMv3 can be found "),ut=r(Ka,"A",{href:!0,rel:!0});var Pc=i(ut);or=a(Pc,"here"),Pc.forEach(t),nr=a(Ka,"."),Ka.forEach(t),Qo.forEach(t),za=u(o),$e=r(o,"IMG",{src:!0,alt:!0,width:!0}),qa=u(o),Ee=r(o,"SMALL",{});var Za=i(Ee);ar=a(Za,"LayoutLMv3 architecture. Taken from the "),To=r(Za,"A",{href:!0});var Ac=i(To);sr=a(Ac,"original paper"),Ac.forEach(t),rr=a(Za,"."),Za.forEach(t),Fa=u(o),oe=r(o,"P",{});var Go=i(oe);ir=a(Go,"This model was contributed by "),pt=r(Go,"A",{href:!0,rel:!0});var Cc=i(pt);lr=a(Cc,"nielsr"),Cc.forEach(t),dr=a(Go,". The original code can be found "),mt=r(Go,"A",{href:!0,rel:!0});var jc=i(mt);cr=a(jc,"here"),jc.forEach(t),ur=a(Go,"."),Go.forEach(t),Pa=u(o),ce=r(o,"H2",{class:!0});var es=i(ce);ze=r(es,"A",{id:!0,class:!0,href:!0});var Nc=i(ze);pn=r(Nc,"SPAN",{});var Ic=i(pn);b(ht.$$.fragment,Ic),Ic.forEach(t),Nc.forEach(t),pr=u(es),mn=r(es,"SPAN",{});var Dc=i(mn);mr=a(Dc,"LayoutLMv3Config"),Dc.forEach(t),es.forEach(t),Aa=u(o),D=r(o,"DIV",{class:!0});var Ye=i(D);b(ft.$$.fragment,Ye),hr=u(Ye),ue=r(Ye,"P",{});var Xo=i(ue);fr=a(Xo,"This is the configuration class to store the configuration of a "),Mo=r(Xo,"A",{href:!0});var Sc=i(Mo);gr=a(Sc,"LayoutLMv3Model"),Sc.forEach(t),_r=a(Xo,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),gt=r(Xo,"A",{href:!0,rel:!0});var Oc=i(gt);vr=a(Oc,"microsoft/layoutlmv3-base"),Oc.forEach(t),yr=a(Xo," architecture."),Xo.forEach(t),br=u(Ye),pe=r(Ye,"P",{});var Yo=i(pe);Lr=a(Yo,"Configuration objects inherit from "),$o=r(Yo,"A",{href:!0});var Rc=i($o);kr=a(Rc,"PretrainedConfig"),Rc.forEach(t),wr=a(Yo,` and can be used to control the model outputs. Read the
documentation from `),Eo=r(Yo,"A",{href:!0});var Uc=i(Eo);xr=a(Uc,"PretrainedConfig"),Uc.forEach(t),Tr=a(Yo," for more information."),Yo.forEach(t),Mr=u(Ye),b(qe.$$.fragment,Ye),Ye.forEach(t),Ca=u(o),me=r(o,"H2",{class:!0});var ts=i(me);Fe=r(ts,"A",{id:!0,class:!0,href:!0});var Bc=i(Fe);hn=r(Bc,"SPAN",{});var Vc=i(hn);b(_t.$$.fragment,Vc),Vc.forEach(t),Bc.forEach(t),$r=u(ts),fn=r(ts,"SPAN",{});var Wc=i(fn);Er=a(Wc,"LayoutLMv3FeatureExtractor"),Wc.forEach(t),ts.forEach(t),ja=u(o),S=r(o,"DIV",{class:!0});var Je=i(S);b(vt.$$.fragment,Je),zr=u(Je),gn=r(Je,"P",{});var Qc=i(gn);qr=a(Qc,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Qc.forEach(t),Fr=u(Je),yt=r(Je,"P",{});var os=i(yt);Pr=a(os,"This feature extractor inherits from "),_n=r(os,"CODE",{});var Hc=i(_n);Ar=a(Hc,"PreTrainedFeatureExtractor()"),Hc.forEach(t),Cr=a(os,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),os.forEach(t),jr=u(Je),ne=r(Je,"DIV",{class:!0});var Jo=i(ne);b(bt.$$.fragment,Jo),Nr=u(Jo),vn=r(Jo,"P",{});var Gc=i(vn);Ir=a(Gc,"Main method to prepare for the model one or several image(s)."),Gc.forEach(t),Dr=u(Jo),b(Pe.$$.fragment,Jo),Jo.forEach(t),Je.forEach(t),Na=u(o),he=r(o,"H2",{class:!0});var ns=i(he);Ae=r(ns,"A",{id:!0,class:!0,href:!0});var Xc=i(Ae);yn=r(Xc,"SPAN",{});var Yc=i(yn);b(Lt.$$.fragment,Yc),Yc.forEach(t),Xc.forEach(t),Sr=u(ns),bn=r(ns,"SPAN",{});var Jc=i(bn);Or=a(Jc,"LayoutLMv3Tokenizer"),Jc.forEach(t),ns.forEach(t),Ia=u(o),C=r(o,"DIV",{class:!0});var Y=i(C);b(kt.$$.fragment,Y),Rr=u(Y),F=r(Y,"P",{});var j=i(F);Ur=a(j,"Construct a LayoutLMv3 tokenizer. Based on "),Ln=r(j,"CODE",{});var Kc=i(Ln);Br=a(Kc,"RoBERTatokenizer"),Kc.forEach(t),Vr=a(j,` (Byte Pair Encoding or BPE).
`),zo=r(j,"A",{href:!0});var Zc=i(zo);Wr=a(Zc,"LayoutLMv3Tokenizer"),Zc.forEach(t),Qr=a(j,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),kn=r(j,"CODE",{});var eu=i(kn);Hr=a(eu,"input_ids"),eu.forEach(t),Gr=a(j,", "),wn=r(j,"CODE",{});var tu=i(wn);Xr=a(tu,"attention_mask"),tu.forEach(t),Yr=a(j,", "),xn=r(j,"CODE",{});var ou=i(xn);Jr=a(ou,"token_type_ids"),ou.forEach(t),Kr=a(j,", "),Tn=r(j,"CODE",{});var nu=i(Tn);Zr=a(nu,"bbox"),nu.forEach(t),ei=a(j,", and optional "),Mn=r(j,"CODE",{});var au=i(Mn);ti=a(au,"labels"),au.forEach(t),oi=a(j,` (for token
classification).`),j.forEach(t),ni=u(Y),wt=r(Y,"P",{});var as=i(wt);ai=a(as,"This tokenizer inherits from "),qo=r(as,"A",{href:!0});var su=i(qo);si=a(su,"PreTrainedTokenizer"),su.forEach(t),ri=a(as,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),as.forEach(t),ii=u(Y),Fo=r(Y,"P",{});var pc=i(Fo);Po=r(pc,"A",{href:!0});var ru=i(Po);li=a(ru,"LayoutLMv3Tokenizer"),ru.forEach(t),di=a(pc,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),pc.forEach(t),ci=u(Y),Ce=r(Y,"DIV",{class:!0});var ss=i(Ce);b(xt.$$.fragment,ss),ui=u(ss),$n=r(ss,"P",{});var iu=i($n);pi=a(iu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),iu.forEach(t),ss.forEach(t),mi=u(Y),Ao=r(Y,"DIV",{class:!0});var lu=i(Ao);b(Tt.$$.fragment,lu),lu.forEach(t),Y.forEach(t),Da=u(o),fe=r(o,"H2",{class:!0});var rs=i(fe);je=r(rs,"A",{id:!0,class:!0,href:!0});var du=i(je);En=r(du,"SPAN",{});var cu=i(En);b(Mt.$$.fragment,cu),cu.forEach(t),du.forEach(t),hi=u(rs),zn=r(rs,"SPAN",{});var uu=i(zn);fi=a(uu,"LayoutLMv3TokenizerFast"),uu.forEach(t),rs.forEach(t),Sa=u(o),O=r(o,"DIV",{class:!0});var Ke=i(O);b($t.$$.fragment,Ke),gi=u(Ke),Et=r(Ke,"P",{});var is=i(Et);_i=a(is,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),qn=r(is,"EM",{});var pu=i(qn);vi=a(pu,"tokenizers"),pu.forEach(t),yi=a(is," library). Based on BPE."),is.forEach(t),bi=u(Ke),zt=r(Ke,"P",{});var ls=i(zt);Li=a(ls,"This tokenizer inherits from "),Co=r(ls,"A",{href:!0});var mu=i(Co);ki=a(mu,"PreTrainedTokenizerFast"),mu.forEach(t),wi=a(ls,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ls.forEach(t),xi=u(Ke),Ne=r(Ke,"DIV",{class:!0});var ds=i(Ne);b(qt.$$.fragment,ds),Ti=u(ds),Fn=r(ds,"P",{});var hu=i(Fn);Mi=a(hu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),hu.forEach(t),ds.forEach(t),Ke.forEach(t),Oa=u(o),ge=r(o,"H2",{class:!0});var cs=i(ge);Ie=r(cs,"A",{id:!0,class:!0,href:!0});var fu=i(Ie);Pn=r(fu,"SPAN",{});var gu=i(Pn);b(Ft.$$.fragment,gu),gu.forEach(t),fu.forEach(t),$i=u(cs),An=r(cs,"SPAN",{});var _u=i(An);Ei=a(_u,"LayoutLMv3Processor"),_u.forEach(t),cs.forEach(t),Ra=u(o),N=r(o,"DIV",{class:!0});var re=i(N);b(Pt.$$.fragment,re),zi=u(re),Cn=r(re,"P",{});var vu=i(Cn);qi=a(vu,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),vu.forEach(t),Fi=u(re),jo=r(re,"P",{});var mc=i(jo);No=r(mc,"A",{href:!0});var yu=i(No);Pi=a(yu,"LayoutLMv3Processor"),yu.forEach(t),Ai=a(mc," offers all the functionalities you need to prepare data for the model."),mc.forEach(t),Ci=u(re),E=r(re,"P",{});var q=i(E);ji=a(q,"It first uses "),Io=r(q,"A",{href:!0});var bu=i(Io);Ni=a(bu,"LayoutLMv3FeatureExtractor"),bu.forEach(t),Ii=a(q,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Do=r(q,"A",{href:!0});var Lu=i(Do);Di=a(Lu,"LayoutLMv3Tokenizer"),Lu.forEach(t),Si=a(q,` or
`),So=r(q,"A",{href:!0});var ku=i(So);Oi=a(ku,"LayoutLMv3TokenizerFast"),ku.forEach(t),Ri=a(q,", which turns the words and bounding boxes into token-level "),jn=r(q,"CODE",{});var wu=i(jn);Ui=a(wu,"input_ids"),wu.forEach(t),Bi=a(q,`,
`),Nn=r(q,"CODE",{});var xu=i(Nn);Vi=a(xu,"attention_mask"),xu.forEach(t),Wi=a(q,", "),In=r(q,"CODE",{});var Tu=i(In);Qi=a(Tu,"token_type_ids"),Tu.forEach(t),Hi=a(q,", "),Dn=r(q,"CODE",{});var Mu=i(Dn);Gi=a(Mu,"bbox"),Mu.forEach(t),Xi=a(q,". Optionally, one can provide integer "),Sn=r(q,"CODE",{});var $u=i(Sn);Yi=a($u,"word_labels"),$u.forEach(t),Ji=a(q,`, which are turned
into token-level `),On=r(q,"CODE",{});var Eu=i(On);Ki=a(Eu,"labels"),Eu.forEach(t),Zi=a(q," for token classification tasks (such as FUNSD, CORD)."),q.forEach(t),el=u(re),ae=r(re,"DIV",{class:!0});var Ko=i(ae);b(At.$$.fragment,Ko),tl=u(Ko),M=r(Ko,"P",{});var $=i(M);ol=a($,"This method first forwards the "),Rn=r($,"CODE",{});var zu=i(Rn);nl=a(zu,"images"),zu.forEach(t),al=a($," argument to "),Ct=r($,"A",{href:!0});var hc=i(Ct);Un=r(hc,"STRONG",{});var qu=i(Un);sl=a(qu,"call"),qu.forEach(t),rl=a(hc,"()"),hc.forEach(t),il=a($,`. In case
`),Oo=r($,"A",{href:!0});var Fu=i(Oo);ll=a(Fu,"LayoutLMv3FeatureExtractor"),Fu.forEach(t),dl=a($," was initialized with "),Bn=r($,"CODE",{});var Pu=i(Bn);cl=a(Pu,"apply_ocr"),Pu.forEach(t),ul=a($," set to "),Vn=r($,"CODE",{});var Au=i(Vn);pl=a(Au,"True"),Au.forEach(t),ml=a($,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),jt=r($,"A",{href:!0});var fc=i(jt);Wn=r(fc,"STRONG",{});var Cu=i(Wn);hl=a(Cu,"call"),Cu.forEach(t),fl=a(fc,"()"),fc.forEach(t),gl=a($,` and returns the output,
together with resized and normalized `),Qn=r($,"CODE",{});var ju=i(Qn);_l=a(ju,"pixel_values"),ju.forEach(t),vl=a($,". In case "),Ro=r($,"A",{href:!0});var Nu=i(Ro);yl=a(Nu,"LayoutLMv3FeatureExtractor"),Nu.forEach(t),bl=a($,` was initialized
with `),Hn=r($,"CODE",{});var Iu=i(Hn);Ll=a(Iu,"apply_ocr"),Iu.forEach(t),kl=a($," set to "),Gn=r($,"CODE",{});var Du=i(Gn);wl=a(Du,"False"),Du.forEach(t),xl=a($,", it passes the words ("),Xn=r($,"CODE",{});var Su=i(Xn);Tl=a(Su,"text"),Su.forEach(t),Ml=a($,"/`"),Yn=r($,"CODE",{});var Ou=i(Yn);$l=a(Ou,"text_pair"),Ou.forEach(t),El=a($,") and "),Jn=r($,"CODE",{});var Ru=i(Jn);zl=a(Ru,"boxes"),Ru.forEach(t),ql=a($,` specified by the user
along with the additional arguments to `),Nt=r($,"A",{href:!0});var gc=i(Nt);Kn=r(gc,"STRONG",{});var Uu=i(Kn);Fl=a(Uu,"call"),Uu.forEach(t),Pl=a(gc,"()"),gc.forEach(t),Al=a($,` and returns the output, together with
resized and normalized `),Zn=r($,"CODE",{});var Bu=i(Zn);Cl=a(Bu,"pixel_values"),Bu.forEach(t),jl=a($,"."),$.forEach(t),Nl=u(Ko),ea=r(Ko,"P",{});var Vu=i(ea);Il=a(Vu,"Please refer to the docstring of the above two methods for more information."),Vu.forEach(t),Ko.forEach(t),re.forEach(t),Ua=u(o),_e=r(o,"H2",{class:!0});var us=i(_e);De=r(us,"A",{id:!0,class:!0,href:!0});var Wu=i(De);ta=r(Wu,"SPAN",{});var Qu=i(ta);b(It.$$.fragment,Qu),Qu.forEach(t),Wu.forEach(t),Dl=u(us),oa=r(us,"SPAN",{});var Hu=i(oa);Sl=a(Hu,"LayoutLMv3Model"),Hu.forEach(t),us.forEach(t),Ba=u(o),J=r(o,"DIV",{class:!0});var Zo=i(J);b(Dt.$$.fragment,Zo),Ol=u(Zo),St=r(Zo,"P",{});var ps=i(St);Rl=a(ps,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ot=r(ps,"A",{href:!0,rel:!0});var Gu=i(Ot);Ul=a(Gu,"torch.nn.Module"),Gu.forEach(t),Bl=a(ps,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ps.forEach(t),Vl=u(Zo),Q=r(Zo,"DIV",{class:!0});var Ze=i(Q);b(Rt.$$.fragment,Ze),Wl=u(Ze),ve=r(Ze,"P",{});var en=i(ve);Ql=a(en,"The "),Uo=r(en,"A",{href:!0});var Xu=i(Uo);Hl=a(Xu,"LayoutLMv3Model"),Xu.forEach(t),Gl=a(en," forward method, overrides the "),na=r(en,"CODE",{});var Yu=i(na);Xl=a(Yu,"__call__"),Yu.forEach(t),Yl=a(en," special method."),en.forEach(t),Jl=u(Ze),b(Se.$$.fragment,Ze),Kl=u(Ze),b(Oe.$$.fragment,Ze),Ze.forEach(t),Zo.forEach(t),Va=u(o),ye=r(o,"H2",{class:!0});var ms=i(ye);Re=r(ms,"A",{id:!0,class:!0,href:!0});var Ju=i(Re);aa=r(Ju,"SPAN",{});var Ku=i(aa);b(Ut.$$.fragment,Ku),Ku.forEach(t),Ju.forEach(t),Zl=u(ms),sa=r(ms,"SPAN",{});var Zu=i(sa);ed=a(Zu,"LayoutLMv3ForSequenceClassification"),Zu.forEach(t),ms.forEach(t),Wa=u(o),R=r(o,"DIV",{class:!0});var et=i(R);b(Bt.$$.fragment,et),td=u(et),Vt=r(et,"P",{});var hs=i(Vt);od=a(hs,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Wt=r(hs,"A",{href:!0,rel:!0});var ep=i(Wt);nd=a(ep,"RVL-CDIP"),ep.forEach(t),ad=a(hs," dataset."),hs.forEach(t),sd=u(et),Qt=r(et,"P",{});var fs=i(Qt);rd=a(fs,"This model is a PyTorch "),Ht=r(fs,"A",{href:!0,rel:!0});var tp=i(Ht);id=a(tp,"torch.nn.Module"),tp.forEach(t),ld=a(fs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs.forEach(t),dd=u(et),H=r(et,"DIV",{class:!0});var tt=i(H);b(Gt.$$.fragment,tt),cd=u(tt),be=r(tt,"P",{});var tn=i(be);ud=a(tn,"The "),Bo=r(tn,"A",{href:!0});var op=i(Bo);pd=a(op,"LayoutLMv3ForSequenceClassification"),op.forEach(t),md=a(tn," forward method, overrides the "),ra=r(tn,"CODE",{});var np=i(ra);hd=a(np,"__call__"),np.forEach(t),fd=a(tn," special method."),tn.forEach(t),gd=u(tt),b(Ue.$$.fragment,tt),_d=u(tt),b(Be.$$.fragment,tt),tt.forEach(t),et.forEach(t),Qa=u(o),Le=r(o,"H2",{class:!0});var gs=i(Le);Ve=r(gs,"A",{id:!0,class:!0,href:!0});var ap=i(Ve);ia=r(ap,"SPAN",{});var sp=i(ia);b(Xt.$$.fragment,sp),sp.forEach(t),ap.forEach(t),vd=u(gs),la=r(gs,"SPAN",{});var rp=i(la);yd=a(rp,"LayoutLMv3ForTokenClassification"),rp.forEach(t),gs.forEach(t),Ha=u(o),U=r(o,"DIV",{class:!0});var ot=i(U);b(Yt.$$.fragment,ot),bd=u(ot),B=r(ot,"P",{});var ie=i(B);Ld=a(ie,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Jt=r(ie,"A",{href:!0,rel:!0});var ip=i(Jt);kd=a(ip,"FUNSD"),ip.forEach(t),wd=a(ie,`,
`),Kt=r(ie,"A",{href:!0,rel:!0});var lp=i(Kt);xd=a(lp,"SROIE"),lp.forEach(t),Td=a(ie,", "),Zt=r(ie,"A",{href:!0,rel:!0});var dp=i(Zt);Md=a(dp,"CORD"),dp.forEach(t),$d=a(ie,` and
`),eo=r(ie,"A",{href:!0,rel:!0});var cp=i(eo);Ed=a(cp,"Kleister-NDA"),cp.forEach(t),zd=a(ie,"."),ie.forEach(t),qd=u(ot),to=r(ot,"P",{});var _s=i(to);Fd=a(_s,"This model is a PyTorch "),oo=r(_s,"A",{href:!0,rel:!0});var up=i(oo);Pd=a(up,"torch.nn.Module"),up.forEach(t),Ad=a(_s,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_s.forEach(t),Cd=u(ot),G=r(ot,"DIV",{class:!0});var nt=i(G);b(no.$$.fragment,nt),jd=u(nt),ke=r(nt,"P",{});var on=i(ke);Nd=a(on,"The "),Vo=r(on,"A",{href:!0});var pp=i(Vo);Id=a(pp,"LayoutLMv3ForTokenClassification"),pp.forEach(t),Dd=a(on," forward method, overrides the "),da=r(on,"CODE",{});var mp=i(da);Sd=a(mp,"__call__"),mp.forEach(t),Od=a(on," special method."),on.forEach(t),Rd=u(nt),b(We.$$.fragment,nt),Ud=u(nt),b(Qe.$$.fragment,nt),nt.forEach(t),ot.forEach(t),Ga=u(o),we=r(o,"H2",{class:!0});var vs=i(we);He=r(vs,"A",{id:!0,class:!0,href:!0});var hp=i(He);ca=r(hp,"SPAN",{});var fp=i(ca);b(ao.$$.fragment,fp),fp.forEach(t),hp.forEach(t),Bd=u(vs),ua=r(vs,"SPAN",{});var gp=i(ua);Vd=a(gp,"LayoutLMv3ForQuestionAnswering"),gp.forEach(t),vs.forEach(t),Xa=u(o),V=r(o,"DIV",{class:!0});var at=i(V);b(so.$$.fragment,at),Wd=u(at),K=r(at,"P",{});var st=i(K);Qd=a(st,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ro=r(st,"A",{href:!0,rel:!0});var _p=i(ro);Hd=a(_p,"DocVQA"),_p.forEach(t),Gd=a(st,` (a linear layer on top of the text part of the hidden-states output to
compute `),pa=r(st,"CODE",{});var vp=i(pa);Xd=a(vp,"span start logits"),vp.forEach(t),Yd=a(st," and "),ma=r(st,"CODE",{});var yp=i(ma);Jd=a(yp,"span end logits"),yp.forEach(t),Kd=a(st,")."),st.forEach(t),Zd=u(at),io=r(at,"P",{});var ys=i(io);ec=a(ys,"This model is a PyTorch "),lo=r(ys,"A",{href:!0,rel:!0});var bp=i(lo);tc=a(bp,"torch.nn.Module"),bp.forEach(t),oc=a(ys,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ys.forEach(t),nc=u(at),X=r(at,"DIV",{class:!0});var rt=i(X);b(co.$$.fragment,rt),ac=u(rt),xe=r(rt,"P",{});var nn=i(xe);sc=a(nn,"The "),Wo=r(nn,"A",{href:!0});var Lp=i(Wo);rc=a(Lp,"LayoutLMv3ForQuestionAnswering"),Lp.forEach(t),ic=a(nn," forward method, overrides the "),ha=r(nn,"CODE",{});var kp=i(ha);lc=a(kp,"__call__"),kp.forEach(t),dc=a(nn," special method."),nn.forEach(t),cc=u(rt),b(Ge.$$.fragment,rt),uc=u(rt),b(Xe.$$.fragment,rt),rt.forEach(t),at.forEach(t),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(Op)),d(f,"id","layoutlmv3"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#layoutlmv3"),d(_,"class","relative group"),d(Te,"id","overview"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#overview"),d(le,"class","relative group"),d(lt,"href","https://arxiv.org/abs/2204.08387"),d(lt,"rel","nofollow"),d(mo,"href","layoutlmv2"),d(ho,"href","vit"),d(vo,"href","layoutlmv2"),d(yo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(bo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Lo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(ko,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(wo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(xo,"href","layoutlmv2#usage-LayoutLMv2Processor"),d(ut,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),d(ut,"rel","nofollow"),$p($e.src,_c="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d($e,"src",_c),d($e,"alt","drawing"),d($e,"width","600"),d(To,"href","https://arxiv.org/abs/2204.08387"),d(pt,"href","https://huggingface.co/nielsr"),d(pt,"rel","nofollow"),d(mt,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(mt,"rel","nofollow"),d(ze,"id","transformers.LayoutLMv3Config"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.LayoutLMv3Config"),d(ce,"class","relative group"),d(Mo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(gt,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(gt,"rel","nofollow"),d($o,"href","/docs/transformers/pr_17932/en/main_classes/configuration#transformers.PretrainedConfig"),d(Eo,"href","/docs/transformers/pr_17932/en/main_classes/configuration#transformers.PretrainedConfig"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.LayoutLMv3FeatureExtractor"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.LayoutLMv3FeatureExtractor"),d(me,"class","relative group"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.LayoutLMv3Tokenizer"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.LayoutLMv3Tokenizer"),d(he,"class","relative group"),d(zo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(qo,"href","/docs/transformers/pr_17932/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(Po,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(je,"id","transformers.LayoutLMv3TokenizerFast"),d(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(je,"href","#transformers.LayoutLMv3TokenizerFast"),d(fe,"class","relative group"),d(Co,"href","/docs/transformers/pr_17932/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ie,"id","transformers.LayoutLMv3Processor"),d(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ie,"href","#transformers.LayoutLMv3Processor"),d(ge,"class","relative group"),d(No,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(Io,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Do,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(So,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(Ct,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(Oo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(jt,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Ro,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Nt,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(De,"id","transformers.LayoutLMv3Model"),d(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(De,"href","#transformers.LayoutLMv3Model"),d(_e,"class","relative group"),d(Ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ot,"rel","nofollow"),d(Uo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(ye,"class","relative group"),d(Wt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Wt,"rel","nofollow"),d(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ht,"rel","nofollow"),d(Bo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ve,"id","transformers.LayoutLMv3ForTokenClassification"),d(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ve,"href","#transformers.LayoutLMv3ForTokenClassification"),d(Le,"class","relative group"),d(Jt,"href","https://guillaumejaume.github.io/FUNSD/"),d(Jt,"rel","nofollow"),d(Kt,"href","https://rrc.cvc.uab.es/?ch=13"),d(Kt,"rel","nofollow"),d(Zt,"href","https://github.com/clovaai/cord"),d(Zt,"rel","nofollow"),d(eo,"href","https://github.com/applicaai/kleister-nda"),d(eo,"rel","nofollow"),d(oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(oo,"rel","nofollow"),d(Vo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(we,"class","relative group"),d(ro,"href","https://rrc.cvc.uab.es/?ch=17"),d(ro,"rel","nofollow"),d(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lo,"rel","nofollow"),d(Wo,"href","/docs/transformers/pr_17932/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,p),g(o,T,m),g(o,_,m),e(_,f),e(f,v),L(l,v,null),e(_,h),e(_,A),e(A,Ls),g(o,wa,m),g(o,le,m),e(le,Te),e(Te,ln),L(it,ln,null),e(le,ks),e(le,dn),e(dn,ws),g(o,xa,m),g(o,W,m),e(W,xs),e(W,lt),e(lt,Ts),e(W,Ms),e(W,mo),e(mo,$s),e(W,Es),e(W,ho),e(ho,zs),e(W,qs),g(o,Ta,m),g(o,fo,m),e(fo,Fs),g(o,Ma,m),g(o,go,m),e(go,cn),e(cn,Ps),g(o,$a,m),g(o,_o,m),e(_o,As),g(o,Ea,m),g(o,te,m),e(te,Me),e(Me,Cs),e(Me,vo),e(vo,js),e(Me,Ns),e(Me,dt),e(dt,un),e(un,Is),e(dt,Ds),e(dt,I),e(I,Ss),e(I,yo),e(yo,Os),e(I,Rs),e(I,bo),e(bo,Us),e(I,Bs),e(I,Lo),e(Lo,Vs),e(I,Ws),e(I,ko),e(ko,Qs),e(I,Hs),e(te,Gs),e(te,de),e(de,Xs),e(de,wo),e(wo,Ys),e(de,Js),e(de,xo),e(xo,Ks),e(de,Zs),e(te,er),e(te,ct),e(ct,tr),e(ct,ut),e(ut,or),e(ct,nr),g(o,za,m),g(o,$e,m),g(o,qa,m),g(o,Ee,m),e(Ee,ar),e(Ee,To),e(To,sr),e(Ee,rr),g(o,Fa,m),g(o,oe,m),e(oe,ir),e(oe,pt),e(pt,lr),e(oe,dr),e(oe,mt),e(mt,cr),e(oe,ur),g(o,Pa,m),g(o,ce,m),e(ce,ze),e(ze,pn),L(ht,pn,null),e(ce,pr),e(ce,mn),e(mn,mr),g(o,Aa,m),g(o,D,m),L(ft,D,null),e(D,hr),e(D,ue),e(ue,fr),e(ue,Mo),e(Mo,gr),e(ue,_r),e(ue,gt),e(gt,vr),e(ue,yr),e(D,br),e(D,pe),e(pe,Lr),e(pe,$o),e($o,kr),e(pe,wr),e(pe,Eo),e(Eo,xr),e(pe,Tr),e(D,Mr),L(qe,D,null),g(o,Ca,m),g(o,me,m),e(me,Fe),e(Fe,hn),L(_t,hn,null),e(me,$r),e(me,fn),e(fn,Er),g(o,ja,m),g(o,S,m),L(vt,S,null),e(S,zr),e(S,gn),e(gn,qr),e(S,Fr),e(S,yt),e(yt,Pr),e(yt,_n),e(_n,Ar),e(yt,Cr),e(S,jr),e(S,ne),L(bt,ne,null),e(ne,Nr),e(ne,vn),e(vn,Ir),e(ne,Dr),L(Pe,ne,null),g(o,Na,m),g(o,he,m),e(he,Ae),e(Ae,yn),L(Lt,yn,null),e(he,Sr),e(he,bn),e(bn,Or),g(o,Ia,m),g(o,C,m),L(kt,C,null),e(C,Rr),e(C,F),e(F,Ur),e(F,Ln),e(Ln,Br),e(F,Vr),e(F,zo),e(zo,Wr),e(F,Qr),e(F,kn),e(kn,Hr),e(F,Gr),e(F,wn),e(wn,Xr),e(F,Yr),e(F,xn),e(xn,Jr),e(F,Kr),e(F,Tn),e(Tn,Zr),e(F,ei),e(F,Mn),e(Mn,ti),e(F,oi),e(C,ni),e(C,wt),e(wt,ai),e(wt,qo),e(qo,si),e(wt,ri),e(C,ii),e(C,Fo),e(Fo,Po),e(Po,li),e(Fo,di),e(C,ci),e(C,Ce),L(xt,Ce,null),e(Ce,ui),e(Ce,$n),e($n,pi),e(C,mi),e(C,Ao),L(Tt,Ao,null),g(o,Da,m),g(o,fe,m),e(fe,je),e(je,En),L(Mt,En,null),e(fe,hi),e(fe,zn),e(zn,fi),g(o,Sa,m),g(o,O,m),L($t,O,null),e(O,gi),e(O,Et),e(Et,_i),e(Et,qn),e(qn,vi),e(Et,yi),e(O,bi),e(O,zt),e(zt,Li),e(zt,Co),e(Co,ki),e(zt,wi),e(O,xi),e(O,Ne),L(qt,Ne,null),e(Ne,Ti),e(Ne,Fn),e(Fn,Mi),g(o,Oa,m),g(o,ge,m),e(ge,Ie),e(Ie,Pn),L(Ft,Pn,null),e(ge,$i),e(ge,An),e(An,Ei),g(o,Ra,m),g(o,N,m),L(Pt,N,null),e(N,zi),e(N,Cn),e(Cn,qi),e(N,Fi),e(N,jo),e(jo,No),e(No,Pi),e(jo,Ai),e(N,Ci),e(N,E),e(E,ji),e(E,Io),e(Io,Ni),e(E,Ii),e(E,Do),e(Do,Di),e(E,Si),e(E,So),e(So,Oi),e(E,Ri),e(E,jn),e(jn,Ui),e(E,Bi),e(E,Nn),e(Nn,Vi),e(E,Wi),e(E,In),e(In,Qi),e(E,Hi),e(E,Dn),e(Dn,Gi),e(E,Xi),e(E,Sn),e(Sn,Yi),e(E,Ji),e(E,On),e(On,Ki),e(E,Zi),e(N,el),e(N,ae),L(At,ae,null),e(ae,tl),e(ae,M),e(M,ol),e(M,Rn),e(Rn,nl),e(M,al),e(M,Ct),e(Ct,Un),e(Un,sl),e(Ct,rl),e(M,il),e(M,Oo),e(Oo,ll),e(M,dl),e(M,Bn),e(Bn,cl),e(M,ul),e(M,Vn),e(Vn,pl),e(M,ml),e(M,jt),e(jt,Wn),e(Wn,hl),e(jt,fl),e(M,gl),e(M,Qn),e(Qn,_l),e(M,vl),e(M,Ro),e(Ro,yl),e(M,bl),e(M,Hn),e(Hn,Ll),e(M,kl),e(M,Gn),e(Gn,wl),e(M,xl),e(M,Xn),e(Xn,Tl),e(M,Ml),e(M,Yn),e(Yn,$l),e(M,El),e(M,Jn),e(Jn,zl),e(M,ql),e(M,Nt),e(Nt,Kn),e(Kn,Fl),e(Nt,Pl),e(M,Al),e(M,Zn),e(Zn,Cl),e(M,jl),e(ae,Nl),e(ae,ea),e(ea,Il),g(o,Ua,m),g(o,_e,m),e(_e,De),e(De,ta),L(It,ta,null),e(_e,Dl),e(_e,oa),e(oa,Sl),g(o,Ba,m),g(o,J,m),L(Dt,J,null),e(J,Ol),e(J,St),e(St,Rl),e(St,Ot),e(Ot,Ul),e(St,Bl),e(J,Vl),e(J,Q),L(Rt,Q,null),e(Q,Wl),e(Q,ve),e(ve,Ql),e(ve,Uo),e(Uo,Hl),e(ve,Gl),e(ve,na),e(na,Xl),e(ve,Yl),e(Q,Jl),L(Se,Q,null),e(Q,Kl),L(Oe,Q,null),g(o,Va,m),g(o,ye,m),e(ye,Re),e(Re,aa),L(Ut,aa,null),e(ye,Zl),e(ye,sa),e(sa,ed),g(o,Wa,m),g(o,R,m),L(Bt,R,null),e(R,td),e(R,Vt),e(Vt,od),e(Vt,Wt),e(Wt,nd),e(Vt,ad),e(R,sd),e(R,Qt),e(Qt,rd),e(Qt,Ht),e(Ht,id),e(Qt,ld),e(R,dd),e(R,H),L(Gt,H,null),e(H,cd),e(H,be),e(be,ud),e(be,Bo),e(Bo,pd),e(be,md),e(be,ra),e(ra,hd),e(be,fd),e(H,gd),L(Ue,H,null),e(H,_d),L(Be,H,null),g(o,Qa,m),g(o,Le,m),e(Le,Ve),e(Ve,ia),L(Xt,ia,null),e(Le,vd),e(Le,la),e(la,yd),g(o,Ha,m),g(o,U,m),L(Yt,U,null),e(U,bd),e(U,B),e(B,Ld),e(B,Jt),e(Jt,kd),e(B,wd),e(B,Kt),e(Kt,xd),e(B,Td),e(B,Zt),e(Zt,Md),e(B,$d),e(B,eo),e(eo,Ed),e(B,zd),e(U,qd),e(U,to),e(to,Fd),e(to,oo),e(oo,Pd),e(to,Ad),e(U,Cd),e(U,G),L(no,G,null),e(G,jd),e(G,ke),e(ke,Nd),e(ke,Vo),e(Vo,Id),e(ke,Dd),e(ke,da),e(da,Sd),e(ke,Od),e(G,Rd),L(We,G,null),e(G,Ud),L(Qe,G,null),g(o,Ga,m),g(o,we,m),e(we,He),e(He,ca),L(ao,ca,null),e(we,Bd),e(we,ua),e(ua,Vd),g(o,Xa,m),g(o,V,m),L(so,V,null),e(V,Wd),e(V,K),e(K,Qd),e(K,ro),e(ro,Hd),e(K,Gd),e(K,pa),e(pa,Xd),e(K,Yd),e(K,ma),e(ma,Jd),e(K,Kd),e(V,Zd),e(V,io),e(io,ec),e(io,lo),e(lo,tc),e(io,oc),e(V,nc),e(V,X),L(co,X,null),e(X,ac),e(X,xe),e(xe,sc),e(xe,Wo),e(Wo,rc),e(xe,ic),e(xe,ha),e(ha,lc),e(xe,dc),e(X,cc),L(Ge,X,null),e(X,uc),L(Xe,X,null),Ya=!0},p(o,[m]){const uo={};m&2&&(uo.$$scope={dirty:m,ctx:o}),qe.$set(uo);const fa={};m&2&&(fa.$$scope={dirty:m,ctx:o}),Pe.$set(fa);const ga={};m&2&&(ga.$$scope={dirty:m,ctx:o}),Se.$set(ga);const _a={};m&2&&(_a.$$scope={dirty:m,ctx:o}),Oe.$set(_a);const po={};m&2&&(po.$$scope={dirty:m,ctx:o}),Ue.$set(po);const va={};m&2&&(va.$$scope={dirty:m,ctx:o}),Be.$set(va);const ya={};m&2&&(ya.$$scope={dirty:m,ctx:o}),We.$set(ya);const ba={};m&2&&(ba.$$scope={dirty:m,ctx:o}),Qe.$set(ba);const Z={};m&2&&(Z.$$scope={dirty:m,ctx:o}),Ge.$set(Z);const La={};m&2&&(La.$$scope={dirty:m,ctx:o}),Xe.$set(La)},i(o){Ya||(k(l.$$.fragment,o),k(it.$$.fragment,o),k(ht.$$.fragment,o),k(ft.$$.fragment,o),k(qe.$$.fragment,o),k(_t.$$.fragment,o),k(vt.$$.fragment,o),k(bt.$$.fragment,o),k(Pe.$$.fragment,o),k(Lt.$$.fragment,o),k(kt.$$.fragment,o),k(xt.$$.fragment,o),k(Tt.$$.fragment,o),k(Mt.$$.fragment,o),k($t.$$.fragment,o),k(qt.$$.fragment,o),k(Ft.$$.fragment,o),k(Pt.$$.fragment,o),k(At.$$.fragment,o),k(It.$$.fragment,o),k(Dt.$$.fragment,o),k(Rt.$$.fragment,o),k(Se.$$.fragment,o),k(Oe.$$.fragment,o),k(Ut.$$.fragment,o),k(Bt.$$.fragment,o),k(Gt.$$.fragment,o),k(Ue.$$.fragment,o),k(Be.$$.fragment,o),k(Xt.$$.fragment,o),k(Yt.$$.fragment,o),k(no.$$.fragment,o),k(We.$$.fragment,o),k(Qe.$$.fragment,o),k(ao.$$.fragment,o),k(so.$$.fragment,o),k(co.$$.fragment,o),k(Ge.$$.fragment,o),k(Xe.$$.fragment,o),Ya=!0)},o(o){w(l.$$.fragment,o),w(it.$$.fragment,o),w(ht.$$.fragment,o),w(ft.$$.fragment,o),w(qe.$$.fragment,o),w(_t.$$.fragment,o),w(vt.$$.fragment,o),w(bt.$$.fragment,o),w(Pe.$$.fragment,o),w(Lt.$$.fragment,o),w(kt.$$.fragment,o),w(xt.$$.fragment,o),w(Tt.$$.fragment,o),w(Mt.$$.fragment,o),w($t.$$.fragment,o),w(qt.$$.fragment,o),w(Ft.$$.fragment,o),w(Pt.$$.fragment,o),w(At.$$.fragment,o),w(It.$$.fragment,o),w(Dt.$$.fragment,o),w(Rt.$$.fragment,o),w(Se.$$.fragment,o),w(Oe.$$.fragment,o),w(Ut.$$.fragment,o),w(Bt.$$.fragment,o),w(Gt.$$.fragment,o),w(Ue.$$.fragment,o),w(Be.$$.fragment,o),w(Xt.$$.fragment,o),w(Yt.$$.fragment,o),w(no.$$.fragment,o),w(We.$$.fragment,o),w(Qe.$$.fragment,o),w(ao.$$.fragment,o),w(so.$$.fragment,o),w(co.$$.fragment,o),w(Ge.$$.fragment,o),w(Xe.$$.fragment,o),Ya=!1},d(o){t(p),o&&t(T),o&&t(_),x(l),o&&t(wa),o&&t(le),x(it),o&&t(xa),o&&t(W),o&&t(Ta),o&&t(fo),o&&t(Ma),o&&t(go),o&&t($a),o&&t(_o),o&&t(Ea),o&&t(te),o&&t(za),o&&t($e),o&&t(qa),o&&t(Ee),o&&t(Fa),o&&t(oe),o&&t(Pa),o&&t(ce),x(ht),o&&t(Aa),o&&t(D),x(ft),x(qe),o&&t(Ca),o&&t(me),x(_t),o&&t(ja),o&&t(S),x(vt),x(bt),x(Pe),o&&t(Na),o&&t(he),x(Lt),o&&t(Ia),o&&t(C),x(kt),x(xt),x(Tt),o&&t(Da),o&&t(fe),x(Mt),o&&t(Sa),o&&t(O),x($t),x(qt),o&&t(Oa),o&&t(ge),x(Ft),o&&t(Ra),o&&t(N),x(Pt),x(At),o&&t(Ua),o&&t(_e),x(It),o&&t(Ba),o&&t(J),x(Dt),x(Rt),x(Se),x(Oe),o&&t(Va),o&&t(ye),x(Ut),o&&t(Wa),o&&t(R),x(Bt),x(Gt),x(Ue),x(Be),o&&t(Qa),o&&t(Le),x(Xt),o&&t(Ha),o&&t(U),x(Yt),x(no),x(We),x(Qe),o&&t(Ga),o&&t(we),x(ao),o&&t(Xa),o&&t(V),x(so),x(co),x(Ge),x(Xe)}}}const Op={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function Rp(z){return Ep(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gp extends wp{constructor(p){super();xp(this,p,Rp,Sp,Tp,{})}}export{Gp as default,Op as metadata};
