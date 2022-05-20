import{S as Bu,i as Qu,s as Vu,e as s,k as c,w as y,t as n,M as Hu,c as r,d as t,m as u,a as i,x as b,h as a,b as d,N as Gu,F as e,g,y as L,q as k,o as w,B as x,v as Xu,L as Xt}from"../../chunks/vendor-6b77c823.js";import{T as ls}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as Jt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Y}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Gt}from"../../chunks/ExampleCodeBlock-5212b321.js";function Ju(q){let p,T,_,f,v;return f=new Jt({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=s("p"),T=n("Example:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Example:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Xt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function Yu(q){let p,T,_,f,v;return f=new Jt({props:{code:`from transformers import LayoutLMv3FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Xt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function Ku(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function Zu(q){let p,T,_,f,v;return f=new Jt({props:{code:`from transformers import AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Xt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function ep(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function op(q){let p,T,_,f,v;return f=new Jt({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Xt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function tp(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function np(q){let p,T,_,f,v;return f=new Jt({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Xt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function ap(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&t(p)}}}function sp(q){let p,T,_,f,v;return f=new Jt({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Xt,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){w(f.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(_),x(f,l)}}}function rp(q){let p,T,_,f,v,l,h,C,ds,pa,se,we,Yt,ao,cs,Kt,us,ma,K,ps,so,ms,hs,dt,fs,gs,ha,ct,_s,fa,ut,Zt,vs,ga,pt,ys,_a,Z,en,bs,Ls,re,ks,mt,ws,xs,ht,Ts,Ms,$s,ro,zs,io,qs,Fs,va,xe,Bd,ya,Te,Es,ft,Ps,Cs,ba,ee,As,lo,js,Is,co,Ns,Ss,La,ie,Me,on,uo,Ds,tn,Os,ka,N,po,Rs,le,Ws,gt,Us,Bs,mo,Qs,Vs,Hs,de,Gs,_t,Xs,Js,vt,Ys,Ks,Zs,$e,wa,ce,ze,nn,ho,er,an,or,xa,S,fo,tr,sn,nr,ar,go,sr,rn,rr,ir,lr,oe,_o,dr,ln,cr,ur,qe,Ta,ue,Fe,dn,vo,pr,cn,mr,Ma,A,yo,hr,E,fr,un,gr,_r,yt,vr,yr,pn,br,Lr,mn,kr,wr,hn,xr,Tr,fn,Mr,$r,gn,zr,qr,Fr,bo,Er,bt,Pr,Cr,Ar,Lt,kt,jr,Ir,Nr,Ee,Lo,Sr,_n,Dr,Or,wt,ko,$a,pe,Pe,vn,wo,Rr,yn,Wr,za,D,xo,Ur,To,Br,bn,Qr,Vr,Hr,Mo,Gr,xt,Xr,Jr,Yr,Ce,$o,Kr,Ln,Zr,qa,me,Ae,kn,zo,ei,wn,oi,Fa,I,qo,ti,xn,ni,ai,Tt,Mt,si,ri,ii,z,li,$t,di,ci,zt,ui,pi,qt,mi,hi,Tn,fi,gi,Mn,_i,vi,$n,yi,bi,zn,Li,ki,qn,wi,xi,Fn,Ti,Mi,$i,te,Fo,zi,M,qi,En,Fi,Ei,Eo,Pn,Pi,Ci,Ai,Ft,ji,Ii,Cn,Ni,Si,An,Di,Oi,Po,jn,Ri,Wi,Ui,In,Bi,Qi,Et,Vi,Hi,Nn,Gi,Xi,Sn,Ji,Yi,Dn,Ki,Zi,On,el,ol,Rn,tl,nl,Co,Wn,al,sl,rl,Un,il,ll,dl,Bn,cl,Ea,he,je,Qn,Ao,ul,Vn,pl,Pa,X,jo,ml,Io,hl,No,fl,gl,_l,B,So,vl,fe,yl,Pt,bl,Ll,Hn,kl,wl,xl,Ie,Tl,Ne,Ca,ge,Se,Gn,Do,Ml,Xn,$l,Aa,O,Oo,zl,Ro,ql,Wo,Fl,El,Pl,Uo,Cl,Bo,Al,jl,Il,Q,Qo,Nl,_e,Sl,Ct,Dl,Ol,Jn,Rl,Wl,Ul,De,Bl,Oe,ja,ve,Re,Yn,Vo,Ql,Kn,Vl,Ia,R,Ho,Hl,W,Gl,Go,Xl,Jl,Xo,Yl,Kl,Jo,Zl,ed,Yo,od,td,nd,Ko,ad,Zo,sd,rd,id,V,et,ld,ye,dd,At,cd,ud,Zn,pd,md,hd,We,fd,Ue,Na,be,Be,ea,ot,gd,oa,_d,Sa,U,tt,vd,J,yd,nt,bd,Ld,ta,kd,wd,na,xd,Td,Md,at,$d,st,zd,qd,Fd,H,rt,Ed,Le,Pd,jt,Cd,Ad,aa,jd,Id,Nd,Qe,Sd,Ve,Da;return l=new Y({}),ao=new Y({}),uo=new Y({}),po=new P({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L28"}}),$e=new Gt({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[Ju]},$$scope:{ctx:q}}}),ho=new Y({}),fo=new P({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L82"}}),_o=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),qe=new Gt({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[Yu]},$$scope:{ctx:q}}}),vo=new Y({}),yo=new P({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),Lo=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),ko=new P({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),wo=new Y({}),xo=new P({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),$o=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),zo=new Y({}),qo=new P({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),Fo=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),Ao=new Y({}),jo=new P({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L675"}}),So=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ie=new ls({props:{$$slots:{default:[Ku]},$$scope:{ctx:q}}}),Ne=new Gt({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Zu]},$$scope:{ctx:q}}}),Do=new Y({}),Oo=new P({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1203"}}),Qo=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),De=new ls({props:{$$slots:{default:[ep]},$$scope:{ctx:q}}}),Oe=new Gt({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[op]},$$scope:{ctx:q}}}),Vo=new Y({}),Ho=new P({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L959"}}),et=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),We=new ls({props:{$$slots:{default:[tp]},$$scope:{ctx:q}}}),Ue=new Gt({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[np]},$$scope:{ctx:q}}}),ot=new Y({}),tt=new P({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1072"}}),rt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),Qe=new ls({props:{$$slots:{default:[ap]},$$scope:{ctx:q}}}),Ve=new Gt({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[sp]},$$scope:{ctx:q}}}),{c(){p=s("meta"),T=c(),_=s("h1"),f=s("a"),v=s("span"),y(l.$$.fragment),h=c(),C=s("span"),ds=n("LayoutLMv3"),pa=c(),se=s("h2"),we=s("a"),Yt=s("span"),y(ao.$$.fragment),cs=c(),Kt=s("span"),us=n("Overview"),ma=c(),K=s("p"),ps=n("The LayoutLMv3 model was proposed in "),so=s("a"),ms=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),hs=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies LayoutLMv2 by using patch embeddings (as in `),dt=s("a"),fs=n("ViT"),gs=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ha=c(),ct=s("p"),_s=n("The abstract from the paper is the following:"),fa=c(),ut=s("p"),Zt=s("em"),vs=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),ga=c(),pt=s("p"),ys=n("Tips:"),_a=c(),Z=s("ul"),en=s("li"),bs=n("In terms of data processing, LayoutLMv3 is identical to LayoutLMv2, except that you need to make sure images are resized and normalized and in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ls=c(),re=s("li"),ks=n("We refer to the docs of "),mt=s("a"),ws=n("LayoutLMv2Processor"),xs=n(" regarding data preparation. Just make sure to use "),ht=s("a"),Ts=n("LayoutLMv3Processor"),Ms=n(" instead."),$s=c(),ro=s("li"),zs=n("Demo notebooks for LayoutLMv3 can be found "),io=s("a"),qs=n("here"),Fs=n("."),va=c(),xe=s("img"),ya=c(),Te=s("small"),Es=n("LayoutLMv3 architecture. Taken from the "),ft=s("a"),Ps=n("original paper"),Cs=n("."),ba=c(),ee=s("p"),As=n("This model was contributed by "),lo=s("a"),js=n("nielsr"),Is=n(". The original code can be found "),co=s("a"),Ns=n("here"),Ss=n("."),La=c(),ie=s("h2"),Me=s("a"),on=s("span"),y(uo.$$.fragment),Ds=c(),tn=s("span"),Os=n("LayoutLMv3Config"),ka=c(),N=s("div"),y(po.$$.fragment),Rs=c(),le=s("p"),Ws=n("This is the configuration class to store the configuration of a "),gt=s("a"),Us=n("LayoutLMv3Model"),Bs=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),mo=s("a"),Qs=n("microsoft/layoutlmv3-base"),Vs=n(" architecture."),Hs=c(),de=s("p"),Gs=n("Configuration objects inherit from "),_t=s("a"),Xs=n("PretrainedConfig"),Js=n(` and can be used to control the model outputs. Read the
documentation from `),vt=s("a"),Ys=n("PretrainedConfig"),Ks=n(" for more information."),Zs=c(),y($e.$$.fragment),wa=c(),ce=s("h2"),ze=s("a"),nn=s("span"),y(ho.$$.fragment),er=c(),an=s("span"),or=n("LayoutLMv3FeatureExtractor"),xa=c(),S=s("div"),y(fo.$$.fragment),tr=c(),sn=s("p"),nr=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),ar=c(),go=s("p"),sr=n("This feature extractor inherits from "),rn=s("code"),rr=n("PreTrainedFeatureExtractor()"),ir=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),lr=c(),oe=s("div"),y(_o.$$.fragment),dr=c(),ln=s("p"),cr=n("Main method to prepare for the model one or several image(s)."),ur=c(),y(qe.$$.fragment),Ta=c(),ue=s("h2"),Fe=s("a"),dn=s("span"),y(vo.$$.fragment),pr=c(),cn=s("span"),mr=n("LayoutLMv3Tokenizer"),Ma=c(),A=s("div"),y(yo.$$.fragment),hr=c(),E=s("p"),fr=n("Construct a LayoutLMv3 tokenizer. Based on "),un=s("code"),gr=n("RoBERTatokenizer"),_r=n(` (Byte Pair Encoding or BPE).
`),yt=s("a"),vr=n("LayoutLMv3Tokenizer"),yr=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),pn=s("code"),br=n("input_ids"),Lr=n(", "),mn=s("code"),kr=n("attention_mask"),wr=n(", "),hn=s("code"),xr=n("token_type_ids"),Tr=n(", "),fn=s("code"),Mr=n("bbox"),$r=n(", and optional "),gn=s("code"),zr=n("labels"),qr=n(` (for token
classification).`),Fr=c(),bo=s("p"),Er=n("This tokenizer inherits from "),bt=s("a"),Pr=n("PreTrainedTokenizer"),Cr=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ar=c(),Lt=s("p"),kt=s("a"),jr=n("LayoutLMv3Tokenizer"),Ir=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Nr=c(),Ee=s("div"),y(Lo.$$.fragment),Sr=c(),_n=s("p"),Dr=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Or=c(),wt=s("div"),y(ko.$$.fragment),$a=c(),pe=s("h2"),Pe=s("a"),vn=s("span"),y(wo.$$.fragment),Rr=c(),yn=s("span"),Wr=n("LayoutLMv3TokenizerFast"),za=c(),D=s("div"),y(xo.$$.fragment),Ur=c(),To=s("p"),Br=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),bn=s("em"),Qr=n("tokenizers"),Vr=n(" library). Based on BPE."),Hr=c(),Mo=s("p"),Gr=n("This tokenizer inherits from "),xt=s("a"),Xr=n("PreTrainedTokenizerFast"),Jr=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yr=c(),Ce=s("div"),y($o.$$.fragment),Kr=c(),Ln=s("p"),Zr=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),qa=c(),me=s("h2"),Ae=s("a"),kn=s("span"),y(zo.$$.fragment),ei=c(),wn=s("span"),oi=n("LayoutLMv3Processor"),Fa=c(),I=s("div"),y(qo.$$.fragment),ti=c(),xn=s("p"),ni=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),ai=c(),Tt=s("p"),Mt=s("a"),si=n("LayoutLMv3Processor"),ri=n(" offers all the functionalities you need to prepare data for the model."),ii=c(),z=s("p"),li=n("It first uses "),$t=s("a"),di=n("LayoutLMv3FeatureExtractor"),ci=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),zt=s("a"),ui=n("LayoutLMv3Tokenizer"),pi=n(` or
`),qt=s("a"),mi=n("LayoutLMv3TokenizerFast"),hi=n(", which turns the words and bounding boxes into token-level "),Tn=s("code"),fi=n("input_ids"),gi=n(`,
`),Mn=s("code"),_i=n("attention_mask"),vi=n(", "),$n=s("code"),yi=n("token_type_ids"),bi=n(", "),zn=s("code"),Li=n("bbox"),ki=n(". Optionally, one can provide integer "),qn=s("code"),wi=n("word_labels"),xi=n(`, which are turned
into token-level `),Fn=s("code"),Ti=n("labels"),Mi=n(" for token classification tasks (such as FUNSD, CORD)."),$i=c(),te=s("div"),y(Fo.$$.fragment),zi=c(),M=s("p"),qi=n("This method first forwards the "),En=s("code"),Fi=n("images"),Ei=n(" argument to "),Eo=s("a"),Pn=s("strong"),Pi=n("call"),Ci=n("()"),Ai=n(`. In case
`),Ft=s("a"),ji=n("LayoutLMv3FeatureExtractor"),Ii=n(" was initialized with "),Cn=s("code"),Ni=n("apply_ocr"),Si=n(" set to "),An=s("code"),Di=n("True"),Oi=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Po=s("a"),jn=s("strong"),Ri=n("call"),Wi=n("()"),Ui=n(` and returns the output,
together with resized and normalized `),In=s("code"),Bi=n("pixel_values"),Qi=n(". In case "),Et=s("a"),Vi=n("LayoutLMv3FeatureExtractor"),Hi=n(` was initialized
with `),Nn=s("code"),Gi=n("apply_ocr"),Xi=n(" set to "),Sn=s("code"),Ji=n("False"),Yi=n(", it passes the words ("),Dn=s("code"),Ki=n("text"),Zi=n("/`"),On=s("code"),el=n("text_pair"),ol=n(") and "),Rn=s("code"),tl=n("boxes"),nl=n(` specified by the user
along with the additional arguments to `),Co=s("a"),Wn=s("strong"),al=n("call"),sl=n("()"),rl=n(` and returns the output, together with
resized and normalized `),Un=s("code"),il=n("pixel_values"),ll=n("."),dl=c(),Bn=s("p"),cl=n("Please refer to the docstring of the above two methods for more information."),Ea=c(),he=s("h2"),je=s("a"),Qn=s("span"),y(Ao.$$.fragment),ul=c(),Vn=s("span"),pl=n("LayoutLMv3Model"),Pa=c(),X=s("div"),y(jo.$$.fragment),ml=c(),Io=s("p"),hl=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),No=s("a"),fl=n("torch.nn.Module"),gl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l=c(),B=s("div"),y(So.$$.fragment),vl=c(),fe=s("p"),yl=n("The "),Pt=s("a"),bl=n("LayoutLMv3Model"),Ll=n(" forward method, overrides the "),Hn=s("code"),kl=n("__call__"),wl=n(" special method."),xl=c(),y(Ie.$$.fragment),Tl=c(),y(Ne.$$.fragment),Ca=c(),ge=s("h2"),Se=s("a"),Gn=s("span"),y(Do.$$.fragment),Ml=c(),Xn=s("span"),$l=n("LayoutLMv3ForSequenceClassification"),Aa=c(),O=s("div"),y(Oo.$$.fragment),zl=c(),Ro=s("p"),ql=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Wo=s("a"),Fl=n("RVL-CDIP"),El=n(" dataset."),Pl=c(),Uo=s("p"),Cl=n("This model is a PyTorch "),Bo=s("a"),Al=n("torch.nn.Module"),jl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Il=c(),Q=s("div"),y(Qo.$$.fragment),Nl=c(),_e=s("p"),Sl=n("The "),Ct=s("a"),Dl=n("LayoutLMv3ForSequenceClassification"),Ol=n(" forward method, overrides the "),Jn=s("code"),Rl=n("__call__"),Wl=n(" special method."),Ul=c(),y(De.$$.fragment),Bl=c(),y(Oe.$$.fragment),ja=c(),ve=s("h2"),Re=s("a"),Yn=s("span"),y(Vo.$$.fragment),Ql=c(),Kn=s("span"),Vl=n("LayoutLMv3ForTokenClassification"),Ia=c(),R=s("div"),y(Ho.$$.fragment),Hl=c(),W=s("p"),Gl=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Go=s("a"),Xl=n("FUNSD"),Jl=n(`,
`),Xo=s("a"),Yl=n("SROIE"),Kl=n(", "),Jo=s("a"),Zl=n("CORD"),ed=n(` and
`),Yo=s("a"),od=n("Kleister-NDA"),td=n("."),nd=c(),Ko=s("p"),ad=n("This model is a PyTorch "),Zo=s("a"),sd=n("torch.nn.Module"),rd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),id=c(),V=s("div"),y(et.$$.fragment),ld=c(),ye=s("p"),dd=n("The "),At=s("a"),cd=n("LayoutLMv3ForTokenClassification"),ud=n(" forward method, overrides the "),Zn=s("code"),pd=n("__call__"),md=n(" special method."),hd=c(),y(We.$$.fragment),fd=c(),y(Ue.$$.fragment),Na=c(),be=s("h2"),Be=s("a"),ea=s("span"),y(ot.$$.fragment),gd=c(),oa=s("span"),_d=n("LayoutLMv3ForQuestionAnswering"),Sa=c(),U=s("div"),y(tt.$$.fragment),vd=c(),J=s("p"),yd=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),nt=s("a"),bd=n("DocVQA"),Ld=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),ta=s("code"),kd=n("span start logits"),wd=n(" and "),na=s("code"),xd=n("span end logits"),Td=n(")."),Md=c(),at=s("p"),$d=n("This model is a PyTorch "),st=s("a"),zd=n("torch.nn.Module"),qd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fd=c(),H=s("div"),y(rt.$$.fragment),Ed=c(),Le=s("p"),Pd=n("The "),jt=s("a"),Cd=n("LayoutLMv3ForQuestionAnswering"),Ad=n(" forward method, overrides the "),aa=s("code"),jd=n("__call__"),Id=n(" special method."),Nd=c(),y(Qe.$$.fragment),Sd=c(),y(Ve.$$.fragment),this.h()},l(o){const m=Hu('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),T=u(o),_=r(o,"H1",{class:!0});var it=i(_);f=r(it,"A",{id:!0,class:!0,href:!0});var sa=i(f);v=r(sa,"SPAN",{});var ra=i(v);b(l.$$.fragment,ra),ra.forEach(t),sa.forEach(t),h=u(it),C=r(it,"SPAN",{});var ia=i(C);ds=a(ia,"LayoutLMv3"),ia.forEach(t),it.forEach(t),pa=u(o),se=r(o,"H2",{class:!0});var lt=i(se);we=r(lt,"A",{id:!0,class:!0,href:!0});var la=i(we);Yt=r(la,"SPAN",{});var da=i(Yt);b(ao.$$.fragment,da),da.forEach(t),la.forEach(t),cs=u(lt),Kt=r(lt,"SPAN",{});var ca=i(Kt);us=a(ca,"Overview"),ca.forEach(t),lt.forEach(t),ma=u(o),K=r(o,"P",{});var ke=i(K);ps=a(ke,"The LayoutLMv3 model was proposed in "),so=r(ke,"A",{href:!0,rel:!0});var ua=i(so);ms=a(ua,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),ua.forEach(t),hs=a(ke,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies LayoutLMv2 by using patch embeddings (as in `),dt=r(ke,"A",{href:!0});var Qd=i(dt);fs=a(Qd,"ViT"),Qd.forEach(t),gs=a(ke,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ke.forEach(t),ha=u(o),ct=r(o,"P",{});var Vd=i(ct);_s=a(Vd,"The abstract from the paper is the following:"),Vd.forEach(t),fa=u(o),ut=r(o,"P",{});var Hd=i(ut);Zt=r(Hd,"EM",{});var Gd=i(Zt);vs=a(Gd,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Gd.forEach(t),Hd.forEach(t),ga=u(o),pt=r(o,"P",{});var Xd=i(pt);ys=a(Xd,"Tips:"),Xd.forEach(t),_a=u(o),Z=r(o,"UL",{});var It=i(Z);en=r(It,"LI",{});var Jd=i(en);bs=a(Jd,"In terms of data processing, LayoutLMv3 is identical to LayoutLMv2, except that you need to make sure images are resized and normalized and in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Jd.forEach(t),Ls=u(It),re=r(It,"LI",{});var Nt=i(re);ks=a(Nt,"We refer to the docs of "),mt=r(Nt,"A",{href:!0});var Yd=i(mt);ws=a(Yd,"LayoutLMv2Processor"),Yd.forEach(t),xs=a(Nt," regarding data preparation. Just make sure to use "),ht=r(Nt,"A",{href:!0});var Kd=i(ht);Ts=a(Kd,"LayoutLMv3Processor"),Kd.forEach(t),Ms=a(Nt," instead."),Nt.forEach(t),$s=u(It),ro=r(It,"LI",{});var Oa=i(ro);zs=a(Oa,"Demo notebooks for LayoutLMv3 can be found "),io=r(Oa,"A",{href:!0,rel:!0});var Zd=i(io);qs=a(Zd,"here"),Zd.forEach(t),Fs=a(Oa,"."),Oa.forEach(t),It.forEach(t),va=u(o),xe=r(o,"IMG",{src:!0,alt:!0,width:!0}),ya=u(o),Te=r(o,"SMALL",{});var Ra=i(Te);Es=a(Ra,"LayoutLMv3 architecture. Taken from the "),ft=r(Ra,"A",{href:!0});var ec=i(ft);Ps=a(ec,"original paper"),ec.forEach(t),Cs=a(Ra,"."),Ra.forEach(t),ba=u(o),ee=r(o,"P",{});var St=i(ee);As=a(St,"This model was contributed by "),lo=r(St,"A",{href:!0,rel:!0});var oc=i(lo);js=a(oc,"nielsr"),oc.forEach(t),Is=a(St,". The original code can be found "),co=r(St,"A",{href:!0,rel:!0});var tc=i(co);Ns=a(tc,"here"),tc.forEach(t),Ss=a(St,"."),St.forEach(t),La=u(o),ie=r(o,"H2",{class:!0});var Wa=i(ie);Me=r(Wa,"A",{id:!0,class:!0,href:!0});var nc=i(Me);on=r(nc,"SPAN",{});var ac=i(on);b(uo.$$.fragment,ac),ac.forEach(t),nc.forEach(t),Ds=u(Wa),tn=r(Wa,"SPAN",{});var sc=i(tn);Os=a(sc,"LayoutLMv3Config"),sc.forEach(t),Wa.forEach(t),ka=u(o),N=r(o,"DIV",{class:!0});var He=i(N);b(po.$$.fragment,He),Rs=u(He),le=r(He,"P",{});var Dt=i(le);Ws=a(Dt,"This is the configuration class to store the configuration of a "),gt=r(Dt,"A",{href:!0});var rc=i(gt);Us=a(rc,"LayoutLMv3Model"),rc.forEach(t),Bs=a(Dt,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),mo=r(Dt,"A",{href:!0,rel:!0});var ic=i(mo);Qs=a(ic,"microsoft/layoutlmv3-base"),ic.forEach(t),Vs=a(Dt," architecture."),Dt.forEach(t),Hs=u(He),de=r(He,"P",{});var Ot=i(de);Gs=a(Ot,"Configuration objects inherit from "),_t=r(Ot,"A",{href:!0});var lc=i(_t);Xs=a(lc,"PretrainedConfig"),lc.forEach(t),Js=a(Ot,` and can be used to control the model outputs. Read the
documentation from `),vt=r(Ot,"A",{href:!0});var dc=i(vt);Ys=a(dc,"PretrainedConfig"),dc.forEach(t),Ks=a(Ot," for more information."),Ot.forEach(t),Zs=u(He),b($e.$$.fragment,He),He.forEach(t),wa=u(o),ce=r(o,"H2",{class:!0});var Ua=i(ce);ze=r(Ua,"A",{id:!0,class:!0,href:!0});var cc=i(ze);nn=r(cc,"SPAN",{});var uc=i(nn);b(ho.$$.fragment,uc),uc.forEach(t),cc.forEach(t),er=u(Ua),an=r(Ua,"SPAN",{});var pc=i(an);or=a(pc,"LayoutLMv3FeatureExtractor"),pc.forEach(t),Ua.forEach(t),xa=u(o),S=r(o,"DIV",{class:!0});var Ge=i(S);b(fo.$$.fragment,Ge),tr=u(Ge),sn=r(Ge,"P",{});var mc=i(sn);nr=a(mc,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),mc.forEach(t),ar=u(Ge),go=r(Ge,"P",{});var Ba=i(go);sr=a(Ba,"This feature extractor inherits from "),rn=r(Ba,"CODE",{});var hc=i(rn);rr=a(hc,"PreTrainedFeatureExtractor()"),hc.forEach(t),ir=a(Ba,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Ba.forEach(t),lr=u(Ge),oe=r(Ge,"DIV",{class:!0});var Rt=i(oe);b(_o.$$.fragment,Rt),dr=u(Rt),ln=r(Rt,"P",{});var fc=i(ln);cr=a(fc,"Main method to prepare for the model one or several image(s)."),fc.forEach(t),ur=u(Rt),b(qe.$$.fragment,Rt),Rt.forEach(t),Ge.forEach(t),Ta=u(o),ue=r(o,"H2",{class:!0});var Qa=i(ue);Fe=r(Qa,"A",{id:!0,class:!0,href:!0});var gc=i(Fe);dn=r(gc,"SPAN",{});var _c=i(dn);b(vo.$$.fragment,_c),_c.forEach(t),gc.forEach(t),pr=u(Qa),cn=r(Qa,"SPAN",{});var vc=i(cn);mr=a(vc,"LayoutLMv3Tokenizer"),vc.forEach(t),Qa.forEach(t),Ma=u(o),A=r(o,"DIV",{class:!0});var G=i(A);b(yo.$$.fragment,G),hr=u(G),E=r(G,"P",{});var j=i(E);fr=a(j,"Construct a LayoutLMv3 tokenizer. Based on "),un=r(j,"CODE",{});var yc=i(un);gr=a(yc,"RoBERTatokenizer"),yc.forEach(t),_r=a(j,` (Byte Pair Encoding or BPE).
`),yt=r(j,"A",{href:!0});var bc=i(yt);vr=a(bc,"LayoutLMv3Tokenizer"),bc.forEach(t),yr=a(j,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),pn=r(j,"CODE",{});var Lc=i(pn);br=a(Lc,"input_ids"),Lc.forEach(t),Lr=a(j,", "),mn=r(j,"CODE",{});var kc=i(mn);kr=a(kc,"attention_mask"),kc.forEach(t),wr=a(j,", "),hn=r(j,"CODE",{});var wc=i(hn);xr=a(wc,"token_type_ids"),wc.forEach(t),Tr=a(j,", "),fn=r(j,"CODE",{});var xc=i(fn);Mr=a(xc,"bbox"),xc.forEach(t),$r=a(j,", and optional "),gn=r(j,"CODE",{});var Tc=i(gn);zr=a(Tc,"labels"),Tc.forEach(t),qr=a(j,` (for token
classification).`),j.forEach(t),Fr=u(G),bo=r(G,"P",{});var Va=i(bo);Er=a(Va,"This tokenizer inherits from "),bt=r(Va,"A",{href:!0});var Mc=i(bt);Pr=a(Mc,"PreTrainedTokenizer"),Mc.forEach(t),Cr=a(Va,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Va.forEach(t),Ar=u(G),Lt=r(G,"P",{});var Dd=i(Lt);kt=r(Dd,"A",{href:!0});var $c=i(kt);jr=a($c,"LayoutLMv3Tokenizer"),$c.forEach(t),Ir=a(Dd,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Dd.forEach(t),Nr=u(G),Ee=r(G,"DIV",{class:!0});var Ha=i(Ee);b(Lo.$$.fragment,Ha),Sr=u(Ha),_n=r(Ha,"P",{});var zc=i(_n);Dr=a(zc,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),zc.forEach(t),Ha.forEach(t),Or=u(G),wt=r(G,"DIV",{class:!0});var qc=i(wt);b(ko.$$.fragment,qc),qc.forEach(t),G.forEach(t),$a=u(o),pe=r(o,"H2",{class:!0});var Ga=i(pe);Pe=r(Ga,"A",{id:!0,class:!0,href:!0});var Fc=i(Pe);vn=r(Fc,"SPAN",{});var Ec=i(vn);b(wo.$$.fragment,Ec),Ec.forEach(t),Fc.forEach(t),Rr=u(Ga),yn=r(Ga,"SPAN",{});var Pc=i(yn);Wr=a(Pc,"LayoutLMv3TokenizerFast"),Pc.forEach(t),Ga.forEach(t),za=u(o),D=r(o,"DIV",{class:!0});var Xe=i(D);b(xo.$$.fragment,Xe),Ur=u(Xe),To=r(Xe,"P",{});var Xa=i(To);Br=a(Xa,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),bn=r(Xa,"EM",{});var Cc=i(bn);Qr=a(Cc,"tokenizers"),Cc.forEach(t),Vr=a(Xa," library). Based on BPE."),Xa.forEach(t),Hr=u(Xe),Mo=r(Xe,"P",{});var Ja=i(Mo);Gr=a(Ja,"This tokenizer inherits from "),xt=r(Ja,"A",{href:!0});var Ac=i(xt);Xr=a(Ac,"PreTrainedTokenizerFast"),Ac.forEach(t),Jr=a(Ja,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ja.forEach(t),Yr=u(Xe),Ce=r(Xe,"DIV",{class:!0});var Ya=i(Ce);b($o.$$.fragment,Ya),Kr=u(Ya),Ln=r(Ya,"P",{});var jc=i(Ln);Zr=a(jc,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),jc.forEach(t),Ya.forEach(t),Xe.forEach(t),qa=u(o),me=r(o,"H2",{class:!0});var Ka=i(me);Ae=r(Ka,"A",{id:!0,class:!0,href:!0});var Ic=i(Ae);kn=r(Ic,"SPAN",{});var Nc=i(kn);b(zo.$$.fragment,Nc),Nc.forEach(t),Ic.forEach(t),ei=u(Ka),wn=r(Ka,"SPAN",{});var Sc=i(wn);oi=a(Sc,"LayoutLMv3Processor"),Sc.forEach(t),Ka.forEach(t),Fa=u(o),I=r(o,"DIV",{class:!0});var ne=i(I);b(qo.$$.fragment,ne),ti=u(ne),xn=r(ne,"P",{});var Dc=i(xn);ni=a(Dc,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Dc.forEach(t),ai=u(ne),Tt=r(ne,"P",{});var Od=i(Tt);Mt=r(Od,"A",{href:!0});var Oc=i(Mt);si=a(Oc,"LayoutLMv3Processor"),Oc.forEach(t),ri=a(Od," offers all the functionalities you need to prepare data for the model."),Od.forEach(t),ii=u(ne),z=r(ne,"P",{});var F=i(z);li=a(F,"It first uses "),$t=r(F,"A",{href:!0});var Rc=i($t);di=a(Rc,"LayoutLMv3FeatureExtractor"),Rc.forEach(t),ci=a(F,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),zt=r(F,"A",{href:!0});var Wc=i(zt);ui=a(Wc,"LayoutLMv3Tokenizer"),Wc.forEach(t),pi=a(F,` or
`),qt=r(F,"A",{href:!0});var Uc=i(qt);mi=a(Uc,"LayoutLMv3TokenizerFast"),Uc.forEach(t),hi=a(F,", which turns the words and bounding boxes into token-level "),Tn=r(F,"CODE",{});var Bc=i(Tn);fi=a(Bc,"input_ids"),Bc.forEach(t),gi=a(F,`,
`),Mn=r(F,"CODE",{});var Qc=i(Mn);_i=a(Qc,"attention_mask"),Qc.forEach(t),vi=a(F,", "),$n=r(F,"CODE",{});var Vc=i($n);yi=a(Vc,"token_type_ids"),Vc.forEach(t),bi=a(F,", "),zn=r(F,"CODE",{});var Hc=i(zn);Li=a(Hc,"bbox"),Hc.forEach(t),ki=a(F,". Optionally, one can provide integer "),qn=r(F,"CODE",{});var Gc=i(qn);wi=a(Gc,"word_labels"),Gc.forEach(t),xi=a(F,`, which are turned
into token-level `),Fn=r(F,"CODE",{});var Xc=i(Fn);Ti=a(Xc,"labels"),Xc.forEach(t),Mi=a(F," for token classification tasks (such as FUNSD, CORD)."),F.forEach(t),$i=u(ne),te=r(ne,"DIV",{class:!0});var Wt=i(te);b(Fo.$$.fragment,Wt),zi=u(Wt),M=r(Wt,"P",{});var $=i(M);qi=a($,"This method first forwards the "),En=r($,"CODE",{});var Jc=i(En);Fi=a(Jc,"images"),Jc.forEach(t),Ei=a($," argument to "),Eo=r($,"A",{href:!0});var Rd=i(Eo);Pn=r(Rd,"STRONG",{});var Yc=i(Pn);Pi=a(Yc,"call"),Yc.forEach(t),Ci=a(Rd,"()"),Rd.forEach(t),Ai=a($,`. In case
`),Ft=r($,"A",{href:!0});var Kc=i(Ft);ji=a(Kc,"LayoutLMv3FeatureExtractor"),Kc.forEach(t),Ii=a($," was initialized with "),Cn=r($,"CODE",{});var Zc=i(Cn);Ni=a(Zc,"apply_ocr"),Zc.forEach(t),Si=a($," set to "),An=r($,"CODE",{});var eu=i(An);Di=a(eu,"True"),eu.forEach(t),Oi=a($,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Po=r($,"A",{href:!0});var Wd=i(Po);jn=r(Wd,"STRONG",{});var ou=i(jn);Ri=a(ou,"call"),ou.forEach(t),Wi=a(Wd,"()"),Wd.forEach(t),Ui=a($,` and returns the output,
together with resized and normalized `),In=r($,"CODE",{});var tu=i(In);Bi=a(tu,"pixel_values"),tu.forEach(t),Qi=a($,". In case "),Et=r($,"A",{href:!0});var nu=i(Et);Vi=a(nu,"LayoutLMv3FeatureExtractor"),nu.forEach(t),Hi=a($,` was initialized
with `),Nn=r($,"CODE",{});var au=i(Nn);Gi=a(au,"apply_ocr"),au.forEach(t),Xi=a($," set to "),Sn=r($,"CODE",{});var su=i(Sn);Ji=a(su,"False"),su.forEach(t),Yi=a($,", it passes the words ("),Dn=r($,"CODE",{});var ru=i(Dn);Ki=a(ru,"text"),ru.forEach(t),Zi=a($,"/`"),On=r($,"CODE",{});var iu=i(On);el=a(iu,"text_pair"),iu.forEach(t),ol=a($,") and "),Rn=r($,"CODE",{});var lu=i(Rn);tl=a(lu,"boxes"),lu.forEach(t),nl=a($,` specified by the user
along with the additional arguments to `),Co=r($,"A",{href:!0});var Ud=i(Co);Wn=r(Ud,"STRONG",{});var du=i(Wn);al=a(du,"call"),du.forEach(t),sl=a(Ud,"()"),Ud.forEach(t),rl=a($,` and returns the output, together with
resized and normalized `),Un=r($,"CODE",{});var cu=i(Un);il=a(cu,"pixel_values"),cu.forEach(t),ll=a($,"."),$.forEach(t),dl=u(Wt),Bn=r(Wt,"P",{});var uu=i(Bn);cl=a(uu,"Please refer to the docstring of the above two methods for more information."),uu.forEach(t),Wt.forEach(t),ne.forEach(t),Ea=u(o),he=r(o,"H2",{class:!0});var Za=i(he);je=r(Za,"A",{id:!0,class:!0,href:!0});var pu=i(je);Qn=r(pu,"SPAN",{});var mu=i(Qn);b(Ao.$$.fragment,mu),mu.forEach(t),pu.forEach(t),ul=u(Za),Vn=r(Za,"SPAN",{});var hu=i(Vn);pl=a(hu,"LayoutLMv3Model"),hu.forEach(t),Za.forEach(t),Pa=u(o),X=r(o,"DIV",{class:!0});var Ut=i(X);b(jo.$$.fragment,Ut),ml=u(Ut),Io=r(Ut,"P",{});var es=i(Io);hl=a(es,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),No=r(es,"A",{href:!0,rel:!0});var fu=i(No);fl=a(fu,"torch.nn.Module"),fu.forEach(t),gl=a(es,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),es.forEach(t),_l=u(Ut),B=r(Ut,"DIV",{class:!0});var Je=i(B);b(So.$$.fragment,Je),vl=u(Je),fe=r(Je,"P",{});var Bt=i(fe);yl=a(Bt,"The "),Pt=r(Bt,"A",{href:!0});var gu=i(Pt);bl=a(gu,"LayoutLMv3Model"),gu.forEach(t),Ll=a(Bt," forward method, overrides the "),Hn=r(Bt,"CODE",{});var _u=i(Hn);kl=a(_u,"__call__"),_u.forEach(t),wl=a(Bt," special method."),Bt.forEach(t),xl=u(Je),b(Ie.$$.fragment,Je),Tl=u(Je),b(Ne.$$.fragment,Je),Je.forEach(t),Ut.forEach(t),Ca=u(o),ge=r(o,"H2",{class:!0});var os=i(ge);Se=r(os,"A",{id:!0,class:!0,href:!0});var vu=i(Se);Gn=r(vu,"SPAN",{});var yu=i(Gn);b(Do.$$.fragment,yu),yu.forEach(t),vu.forEach(t),Ml=u(os),Xn=r(os,"SPAN",{});var bu=i(Xn);$l=a(bu,"LayoutLMv3ForSequenceClassification"),bu.forEach(t),os.forEach(t),Aa=u(o),O=r(o,"DIV",{class:!0});var Ye=i(O);b(Oo.$$.fragment,Ye),zl=u(Ye),Ro=r(Ye,"P",{});var ts=i(Ro);ql=a(ts,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Wo=r(ts,"A",{href:!0,rel:!0});var Lu=i(Wo);Fl=a(Lu,"RVL-CDIP"),Lu.forEach(t),El=a(ts," dataset."),ts.forEach(t),Pl=u(Ye),Uo=r(Ye,"P",{});var ns=i(Uo);Cl=a(ns,"This model is a PyTorch "),Bo=r(ns,"A",{href:!0,rel:!0});var ku=i(Bo);Al=a(ku,"torch.nn.Module"),ku.forEach(t),jl=a(ns,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ns.forEach(t),Il=u(Ye),Q=r(Ye,"DIV",{class:!0});var Ke=i(Q);b(Qo.$$.fragment,Ke),Nl=u(Ke),_e=r(Ke,"P",{});var Qt=i(_e);Sl=a(Qt,"The "),Ct=r(Qt,"A",{href:!0});var wu=i(Ct);Dl=a(wu,"LayoutLMv3ForSequenceClassification"),wu.forEach(t),Ol=a(Qt," forward method, overrides the "),Jn=r(Qt,"CODE",{});var xu=i(Jn);Rl=a(xu,"__call__"),xu.forEach(t),Wl=a(Qt," special method."),Qt.forEach(t),Ul=u(Ke),b(De.$$.fragment,Ke),Bl=u(Ke),b(Oe.$$.fragment,Ke),Ke.forEach(t),Ye.forEach(t),ja=u(o),ve=r(o,"H2",{class:!0});var as=i(ve);Re=r(as,"A",{id:!0,class:!0,href:!0});var Tu=i(Re);Yn=r(Tu,"SPAN",{});var Mu=i(Yn);b(Vo.$$.fragment,Mu),Mu.forEach(t),Tu.forEach(t),Ql=u(as),Kn=r(as,"SPAN",{});var $u=i(Kn);Vl=a($u,"LayoutLMv3ForTokenClassification"),$u.forEach(t),as.forEach(t),Ia=u(o),R=r(o,"DIV",{class:!0});var Ze=i(R);b(Ho.$$.fragment,Ze),Hl=u(Ze),W=r(Ze,"P",{});var ae=i(W);Gl=a(ae,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Go=r(ae,"A",{href:!0,rel:!0});var zu=i(Go);Xl=a(zu,"FUNSD"),zu.forEach(t),Jl=a(ae,`,
`),Xo=r(ae,"A",{href:!0,rel:!0});var qu=i(Xo);Yl=a(qu,"SROIE"),qu.forEach(t),Kl=a(ae,", "),Jo=r(ae,"A",{href:!0,rel:!0});var Fu=i(Jo);Zl=a(Fu,"CORD"),Fu.forEach(t),ed=a(ae,` and
`),Yo=r(ae,"A",{href:!0,rel:!0});var Eu=i(Yo);od=a(Eu,"Kleister-NDA"),Eu.forEach(t),td=a(ae,"."),ae.forEach(t),nd=u(Ze),Ko=r(Ze,"P",{});var ss=i(Ko);ad=a(ss,"This model is a PyTorch "),Zo=r(ss,"A",{href:!0,rel:!0});var Pu=i(Zo);sd=a(Pu,"torch.nn.Module"),Pu.forEach(t),rd=a(ss,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ss.forEach(t),id=u(Ze),V=r(Ze,"DIV",{class:!0});var eo=i(V);b(et.$$.fragment,eo),ld=u(eo),ye=r(eo,"P",{});var Vt=i(ye);dd=a(Vt,"The "),At=r(Vt,"A",{href:!0});var Cu=i(At);cd=a(Cu,"LayoutLMv3ForTokenClassification"),Cu.forEach(t),ud=a(Vt," forward method, overrides the "),Zn=r(Vt,"CODE",{});var Au=i(Zn);pd=a(Au,"__call__"),Au.forEach(t),md=a(Vt," special method."),Vt.forEach(t),hd=u(eo),b(We.$$.fragment,eo),fd=u(eo),b(Ue.$$.fragment,eo),eo.forEach(t),Ze.forEach(t),Na=u(o),be=r(o,"H2",{class:!0});var rs=i(be);Be=r(rs,"A",{id:!0,class:!0,href:!0});var ju=i(Be);ea=r(ju,"SPAN",{});var Iu=i(ea);b(ot.$$.fragment,Iu),Iu.forEach(t),ju.forEach(t),gd=u(rs),oa=r(rs,"SPAN",{});var Nu=i(oa);_d=a(Nu,"LayoutLMv3ForQuestionAnswering"),Nu.forEach(t),rs.forEach(t),Sa=u(o),U=r(o,"DIV",{class:!0});var oo=i(U);b(tt.$$.fragment,oo),vd=u(oo),J=r(oo,"P",{});var to=i(J);yd=a(to,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),nt=r(to,"A",{href:!0,rel:!0});var Su=i(nt);bd=a(Su,"DocVQA"),Su.forEach(t),Ld=a(to,` (a linear layer on top of the text part of the hidden-states output to
compute `),ta=r(to,"CODE",{});var Du=i(ta);kd=a(Du,"span start logits"),Du.forEach(t),wd=a(to," and "),na=r(to,"CODE",{});var Ou=i(na);xd=a(Ou,"span end logits"),Ou.forEach(t),Td=a(to,")."),to.forEach(t),Md=u(oo),at=r(oo,"P",{});var is=i(at);$d=a(is,"This model is a PyTorch "),st=r(is,"A",{href:!0,rel:!0});var Ru=i(st);zd=a(Ru,"torch.nn.Module"),Ru.forEach(t),qd=a(is,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),is.forEach(t),Fd=u(oo),H=r(oo,"DIV",{class:!0});var no=i(H);b(rt.$$.fragment,no),Ed=u(no),Le=r(no,"P",{});var Ht=i(Le);Pd=a(Ht,"The "),jt=r(Ht,"A",{href:!0});var Wu=i(jt);Cd=a(Wu,"LayoutLMv3ForQuestionAnswering"),Wu.forEach(t),Ad=a(Ht," forward method, overrides the "),aa=r(Ht,"CODE",{});var Uu=i(aa);jd=a(Uu,"__call__"),Uu.forEach(t),Id=a(Ht," special method."),Ht.forEach(t),Nd=u(no),b(Qe.$$.fragment,no),Sd=u(no),b(Ve.$$.fragment,no),no.forEach(t),oo.forEach(t),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(ip)),d(f,"id","layoutlmv3"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#layoutlmv3"),d(_,"class","relative group"),d(we,"id","overview"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#overview"),d(se,"class","relative group"),d(so,"href","https://arxiv.org/abs/2204.08387"),d(so,"rel","nofollow"),d(dt,"href","vit"),d(mt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),d(ht,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(io,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),d(io,"rel","nofollow"),Gu(xe.src,Bd="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d(xe,"src",Bd),d(xe,"alt","drawing"),d(xe,"width","600"),d(ft,"href","https://arxiv.org/abs/2204.08387"),d(lo,"href","https://huggingface.co/nielsr"),d(lo,"rel","nofollow"),d(co,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(co,"rel","nofollow"),d(Me,"id","transformers.LayoutLMv3Config"),d(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Me,"href","#transformers.LayoutLMv3Config"),d(ie,"class","relative group"),d(gt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(mo,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(mo,"rel","nofollow"),d(_t,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),d(vt,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ze,"id","transformers.LayoutLMv3FeatureExtractor"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.LayoutLMv3FeatureExtractor"),d(ce,"class","relative group"),d(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.LayoutLMv3Tokenizer"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.LayoutLMv3Tokenizer"),d(ue,"class","relative group"),d(yt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(bt,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(kt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.LayoutLMv3TokenizerFast"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.LayoutLMv3TokenizerFast"),d(pe,"class","relative group"),d(xt,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.LayoutLMv3Processor"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.LayoutLMv3Processor"),d(me,"class","relative group"),d(Mt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d($t,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(zt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(qt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(Eo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(Ft,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Po,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Et,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Co,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(je,"id","transformers.LayoutLMv3Model"),d(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(je,"href","#transformers.LayoutLMv3Model"),d(he,"class","relative group"),d(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(No,"rel","nofollow"),d(Pt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(ge,"class","relative group"),d(Wo,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Wo,"rel","nofollow"),d(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Bo,"rel","nofollow"),d(Ct,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.LayoutLMv3ForTokenClassification"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.LayoutLMv3ForTokenClassification"),d(ve,"class","relative group"),d(Go,"href","https://guillaumejaume.github.io/FUNSD/"),d(Go,"rel","nofollow"),d(Xo,"href","https://rrc.cvc.uab.es/?ch=13"),d(Xo,"rel","nofollow"),d(Jo,"href","https://github.com/clovaai/cord"),d(Jo,"rel","nofollow"),d(Yo,"href","https://github.com/applicaai/kleister-nda"),d(Yo,"rel","nofollow"),d(Zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Zo,"rel","nofollow"),d(At,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Be,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(be,"class","relative group"),d(nt,"href","https://rrc.cvc.uab.es/?ch=17"),d(nt,"rel","nofollow"),d(st,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(st,"rel","nofollow"),d(jt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,p),g(o,T,m),g(o,_,m),e(_,f),e(f,v),L(l,v,null),e(_,h),e(_,C),e(C,ds),g(o,pa,m),g(o,se,m),e(se,we),e(we,Yt),L(ao,Yt,null),e(se,cs),e(se,Kt),e(Kt,us),g(o,ma,m),g(o,K,m),e(K,ps),e(K,so),e(so,ms),e(K,hs),e(K,dt),e(dt,fs),e(K,gs),g(o,ha,m),g(o,ct,m),e(ct,_s),g(o,fa,m),g(o,ut,m),e(ut,Zt),e(Zt,vs),g(o,ga,m),g(o,pt,m),e(pt,ys),g(o,_a,m),g(o,Z,m),e(Z,en),e(en,bs),e(Z,Ls),e(Z,re),e(re,ks),e(re,mt),e(mt,ws),e(re,xs),e(re,ht),e(ht,Ts),e(re,Ms),e(Z,$s),e(Z,ro),e(ro,zs),e(ro,io),e(io,qs),e(ro,Fs),g(o,va,m),g(o,xe,m),g(o,ya,m),g(o,Te,m),e(Te,Es),e(Te,ft),e(ft,Ps),e(Te,Cs),g(o,ba,m),g(o,ee,m),e(ee,As),e(ee,lo),e(lo,js),e(ee,Is),e(ee,co),e(co,Ns),e(ee,Ss),g(o,La,m),g(o,ie,m),e(ie,Me),e(Me,on),L(uo,on,null),e(ie,Ds),e(ie,tn),e(tn,Os),g(o,ka,m),g(o,N,m),L(po,N,null),e(N,Rs),e(N,le),e(le,Ws),e(le,gt),e(gt,Us),e(le,Bs),e(le,mo),e(mo,Qs),e(le,Vs),e(N,Hs),e(N,de),e(de,Gs),e(de,_t),e(_t,Xs),e(de,Js),e(de,vt),e(vt,Ys),e(de,Ks),e(N,Zs),L($e,N,null),g(o,wa,m),g(o,ce,m),e(ce,ze),e(ze,nn),L(ho,nn,null),e(ce,er),e(ce,an),e(an,or),g(o,xa,m),g(o,S,m),L(fo,S,null),e(S,tr),e(S,sn),e(sn,nr),e(S,ar),e(S,go),e(go,sr),e(go,rn),e(rn,rr),e(go,ir),e(S,lr),e(S,oe),L(_o,oe,null),e(oe,dr),e(oe,ln),e(ln,cr),e(oe,ur),L(qe,oe,null),g(o,Ta,m),g(o,ue,m),e(ue,Fe),e(Fe,dn),L(vo,dn,null),e(ue,pr),e(ue,cn),e(cn,mr),g(o,Ma,m),g(o,A,m),L(yo,A,null),e(A,hr),e(A,E),e(E,fr),e(E,un),e(un,gr),e(E,_r),e(E,yt),e(yt,vr),e(E,yr),e(E,pn),e(pn,br),e(E,Lr),e(E,mn),e(mn,kr),e(E,wr),e(E,hn),e(hn,xr),e(E,Tr),e(E,fn),e(fn,Mr),e(E,$r),e(E,gn),e(gn,zr),e(E,qr),e(A,Fr),e(A,bo),e(bo,Er),e(bo,bt),e(bt,Pr),e(bo,Cr),e(A,Ar),e(A,Lt),e(Lt,kt),e(kt,jr),e(Lt,Ir),e(A,Nr),e(A,Ee),L(Lo,Ee,null),e(Ee,Sr),e(Ee,_n),e(_n,Dr),e(A,Or),e(A,wt),L(ko,wt,null),g(o,$a,m),g(o,pe,m),e(pe,Pe),e(Pe,vn),L(wo,vn,null),e(pe,Rr),e(pe,yn),e(yn,Wr),g(o,za,m),g(o,D,m),L(xo,D,null),e(D,Ur),e(D,To),e(To,Br),e(To,bn),e(bn,Qr),e(To,Vr),e(D,Hr),e(D,Mo),e(Mo,Gr),e(Mo,xt),e(xt,Xr),e(Mo,Jr),e(D,Yr),e(D,Ce),L($o,Ce,null),e(Ce,Kr),e(Ce,Ln),e(Ln,Zr),g(o,qa,m),g(o,me,m),e(me,Ae),e(Ae,kn),L(zo,kn,null),e(me,ei),e(me,wn),e(wn,oi),g(o,Fa,m),g(o,I,m),L(qo,I,null),e(I,ti),e(I,xn),e(xn,ni),e(I,ai),e(I,Tt),e(Tt,Mt),e(Mt,si),e(Tt,ri),e(I,ii),e(I,z),e(z,li),e(z,$t),e($t,di),e(z,ci),e(z,zt),e(zt,ui),e(z,pi),e(z,qt),e(qt,mi),e(z,hi),e(z,Tn),e(Tn,fi),e(z,gi),e(z,Mn),e(Mn,_i),e(z,vi),e(z,$n),e($n,yi),e(z,bi),e(z,zn),e(zn,Li),e(z,ki),e(z,qn),e(qn,wi),e(z,xi),e(z,Fn),e(Fn,Ti),e(z,Mi),e(I,$i),e(I,te),L(Fo,te,null),e(te,zi),e(te,M),e(M,qi),e(M,En),e(En,Fi),e(M,Ei),e(M,Eo),e(Eo,Pn),e(Pn,Pi),e(Eo,Ci),e(M,Ai),e(M,Ft),e(Ft,ji),e(M,Ii),e(M,Cn),e(Cn,Ni),e(M,Si),e(M,An),e(An,Di),e(M,Oi),e(M,Po),e(Po,jn),e(jn,Ri),e(Po,Wi),e(M,Ui),e(M,In),e(In,Bi),e(M,Qi),e(M,Et),e(Et,Vi),e(M,Hi),e(M,Nn),e(Nn,Gi),e(M,Xi),e(M,Sn),e(Sn,Ji),e(M,Yi),e(M,Dn),e(Dn,Ki),e(M,Zi),e(M,On),e(On,el),e(M,ol),e(M,Rn),e(Rn,tl),e(M,nl),e(M,Co),e(Co,Wn),e(Wn,al),e(Co,sl),e(M,rl),e(M,Un),e(Un,il),e(M,ll),e(te,dl),e(te,Bn),e(Bn,cl),g(o,Ea,m),g(o,he,m),e(he,je),e(je,Qn),L(Ao,Qn,null),e(he,ul),e(he,Vn),e(Vn,pl),g(o,Pa,m),g(o,X,m),L(jo,X,null),e(X,ml),e(X,Io),e(Io,hl),e(Io,No),e(No,fl),e(Io,gl),e(X,_l),e(X,B),L(So,B,null),e(B,vl),e(B,fe),e(fe,yl),e(fe,Pt),e(Pt,bl),e(fe,Ll),e(fe,Hn),e(Hn,kl),e(fe,wl),e(B,xl),L(Ie,B,null),e(B,Tl),L(Ne,B,null),g(o,Ca,m),g(o,ge,m),e(ge,Se),e(Se,Gn),L(Do,Gn,null),e(ge,Ml),e(ge,Xn),e(Xn,$l),g(o,Aa,m),g(o,O,m),L(Oo,O,null),e(O,zl),e(O,Ro),e(Ro,ql),e(Ro,Wo),e(Wo,Fl),e(Ro,El),e(O,Pl),e(O,Uo),e(Uo,Cl),e(Uo,Bo),e(Bo,Al),e(Uo,jl),e(O,Il),e(O,Q),L(Qo,Q,null),e(Q,Nl),e(Q,_e),e(_e,Sl),e(_e,Ct),e(Ct,Dl),e(_e,Ol),e(_e,Jn),e(Jn,Rl),e(_e,Wl),e(Q,Ul),L(De,Q,null),e(Q,Bl),L(Oe,Q,null),g(o,ja,m),g(o,ve,m),e(ve,Re),e(Re,Yn),L(Vo,Yn,null),e(ve,Ql),e(ve,Kn),e(Kn,Vl),g(o,Ia,m),g(o,R,m),L(Ho,R,null),e(R,Hl),e(R,W),e(W,Gl),e(W,Go),e(Go,Xl),e(W,Jl),e(W,Xo),e(Xo,Yl),e(W,Kl),e(W,Jo),e(Jo,Zl),e(W,ed),e(W,Yo),e(Yo,od),e(W,td),e(R,nd),e(R,Ko),e(Ko,ad),e(Ko,Zo),e(Zo,sd),e(Ko,rd),e(R,id),e(R,V),L(et,V,null),e(V,ld),e(V,ye),e(ye,dd),e(ye,At),e(At,cd),e(ye,ud),e(ye,Zn),e(Zn,pd),e(ye,md),e(V,hd),L(We,V,null),e(V,fd),L(Ue,V,null),g(o,Na,m),g(o,be,m),e(be,Be),e(Be,ea),L(ot,ea,null),e(be,gd),e(be,oa),e(oa,_d),g(o,Sa,m),g(o,U,m),L(tt,U,null),e(U,vd),e(U,J),e(J,yd),e(J,nt),e(nt,bd),e(J,Ld),e(J,ta),e(ta,kd),e(J,wd),e(J,na),e(na,xd),e(J,Td),e(U,Md),e(U,at),e(at,$d),e(at,st),e(st,zd),e(at,qd),e(U,Fd),e(U,H),L(rt,H,null),e(H,Ed),e(H,Le),e(Le,Pd),e(Le,jt),e(jt,Cd),e(Le,Ad),e(Le,aa),e(aa,jd),e(Le,Id),e(H,Nd),L(Qe,H,null),e(H,Sd),L(Ve,H,null),Da=!0},p(o,[m]){const it={};m&2&&(it.$$scope={dirty:m,ctx:o}),$e.$set(it);const sa={};m&2&&(sa.$$scope={dirty:m,ctx:o}),qe.$set(sa);const ra={};m&2&&(ra.$$scope={dirty:m,ctx:o}),Ie.$set(ra);const ia={};m&2&&(ia.$$scope={dirty:m,ctx:o}),Ne.$set(ia);const lt={};m&2&&(lt.$$scope={dirty:m,ctx:o}),De.$set(lt);const la={};m&2&&(la.$$scope={dirty:m,ctx:o}),Oe.$set(la);const da={};m&2&&(da.$$scope={dirty:m,ctx:o}),We.$set(da);const ca={};m&2&&(ca.$$scope={dirty:m,ctx:o}),Ue.$set(ca);const ke={};m&2&&(ke.$$scope={dirty:m,ctx:o}),Qe.$set(ke);const ua={};m&2&&(ua.$$scope={dirty:m,ctx:o}),Ve.$set(ua)},i(o){Da||(k(l.$$.fragment,o),k(ao.$$.fragment,o),k(uo.$$.fragment,o),k(po.$$.fragment,o),k($e.$$.fragment,o),k(ho.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(qe.$$.fragment,o),k(vo.$$.fragment,o),k(yo.$$.fragment,o),k(Lo.$$.fragment,o),k(ko.$$.fragment,o),k(wo.$$.fragment,o),k(xo.$$.fragment,o),k($o.$$.fragment,o),k(zo.$$.fragment,o),k(qo.$$.fragment,o),k(Fo.$$.fragment,o),k(Ao.$$.fragment,o),k(jo.$$.fragment,o),k(So.$$.fragment,o),k(Ie.$$.fragment,o),k(Ne.$$.fragment,o),k(Do.$$.fragment,o),k(Oo.$$.fragment,o),k(Qo.$$.fragment,o),k(De.$$.fragment,o),k(Oe.$$.fragment,o),k(Vo.$$.fragment,o),k(Ho.$$.fragment,o),k(et.$$.fragment,o),k(We.$$.fragment,o),k(Ue.$$.fragment,o),k(ot.$$.fragment,o),k(tt.$$.fragment,o),k(rt.$$.fragment,o),k(Qe.$$.fragment,o),k(Ve.$$.fragment,o),Da=!0)},o(o){w(l.$$.fragment,o),w(ao.$$.fragment,o),w(uo.$$.fragment,o),w(po.$$.fragment,o),w($e.$$.fragment,o),w(ho.$$.fragment,o),w(fo.$$.fragment,o),w(_o.$$.fragment,o),w(qe.$$.fragment,o),w(vo.$$.fragment,o),w(yo.$$.fragment,o),w(Lo.$$.fragment,o),w(ko.$$.fragment,o),w(wo.$$.fragment,o),w(xo.$$.fragment,o),w($o.$$.fragment,o),w(zo.$$.fragment,o),w(qo.$$.fragment,o),w(Fo.$$.fragment,o),w(Ao.$$.fragment,o),w(jo.$$.fragment,o),w(So.$$.fragment,o),w(Ie.$$.fragment,o),w(Ne.$$.fragment,o),w(Do.$$.fragment,o),w(Oo.$$.fragment,o),w(Qo.$$.fragment,o),w(De.$$.fragment,o),w(Oe.$$.fragment,o),w(Vo.$$.fragment,o),w(Ho.$$.fragment,o),w(et.$$.fragment,o),w(We.$$.fragment,o),w(Ue.$$.fragment,o),w(ot.$$.fragment,o),w(tt.$$.fragment,o),w(rt.$$.fragment,o),w(Qe.$$.fragment,o),w(Ve.$$.fragment,o),Da=!1},d(o){t(p),o&&t(T),o&&t(_),x(l),o&&t(pa),o&&t(se),x(ao),o&&t(ma),o&&t(K),o&&t(ha),o&&t(ct),o&&t(fa),o&&t(ut),o&&t(ga),o&&t(pt),o&&t(_a),o&&t(Z),o&&t(va),o&&t(xe),o&&t(ya),o&&t(Te),o&&t(ba),o&&t(ee),o&&t(La),o&&t(ie),x(uo),o&&t(ka),o&&t(N),x(po),x($e),o&&t(wa),o&&t(ce),x(ho),o&&t(xa),o&&t(S),x(fo),x(_o),x(qe),o&&t(Ta),o&&t(ue),x(vo),o&&t(Ma),o&&t(A),x(yo),x(Lo),x(ko),o&&t($a),o&&t(pe),x(wo),o&&t(za),o&&t(D),x(xo),x($o),o&&t(qa),o&&t(me),x(zo),o&&t(Fa),o&&t(I),x(qo),x(Fo),o&&t(Ea),o&&t(he),x(Ao),o&&t(Pa),o&&t(X),x(jo),x(So),x(Ie),x(Ne),o&&t(Ca),o&&t(ge),x(Do),o&&t(Aa),o&&t(O),x(Oo),x(Qo),x(De),x(Oe),o&&t(ja),o&&t(ve),x(Vo),o&&t(Ia),o&&t(R),x(Ho),x(et),x(We),x(Ue),o&&t(Na),o&&t(be),x(ot),o&&t(Sa),o&&t(U),x(tt),x(rt),x(Qe),x(Ve)}}}const ip={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function lp(q){return Xu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fp extends Bu{constructor(p){super();Qu(this,p,lp,rp,Vu,{})}}export{fp as default,ip as metadata};
