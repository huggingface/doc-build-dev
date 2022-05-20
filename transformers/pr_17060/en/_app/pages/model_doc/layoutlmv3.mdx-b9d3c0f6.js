import{S as Iu,i as Nu,s as Su,e as s,k as c,w as y,t as n,M as Du,c as r,d as o,m as u,a as i,x as b,h as a,b as d,N as Ou,F as e,g,y as L,q as k,o as x,B as w,v as Ru,L as Vo}from"../../chunks/vendor-6b77c823.js";import{T as ss}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as Ho}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Y}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Qo}from"../../chunks/ExampleCodeBlock-5212b321.js";function Wu(q){let p,T,_,f,v;return f=new Ho({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=s("p"),T=n("Example:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Example:"),h.forEach(o),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Vo,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&o(p),l&&o(_),w(f,l)}}}function Uu(q){let p,T,_,f,v;return f=new Ho({props:{code:`from transformers import LayoutLMv3FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(o),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Vo,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&o(p),l&&o(_),w(f,l)}}}function Bu(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&o(p)}}}function Qu(q){let p,T,_,f,v;return f=new Ho({props:{code:`from transformers import AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(o),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Vo,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&o(p),l&&o(_),w(f,l)}}}function Vu(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&o(p)}}}function Hu(q){let p,T,_,f,v;return f=new Ho({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(o),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Vo,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&o(p),l&&o(_),w(f,l)}}}function Gu(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&o(p)}}}function Xu(q){let p,T,_,f,v;return f=new Ho({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(o),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Vo,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&o(p),l&&o(_),w(f,l)}}}function Ju(q){let p,T,_,f,v;return{c(){p=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){g(l,p,h),e(p,T),e(p,_),e(_,f),e(p,v)},d(l){l&&o(p)}}}function Yu(q){let p,T,_,f,v;return f=new Ho({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){p=r(l,"P",{});var h=i(p);T=a(h,"Examples:"),h.forEach(o),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,p,h),e(p,T),g(l,_,h),L(f,l,h),v=!0},p:Vo,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&o(p),l&&o(_),w(f,l)}}}function Ku(q){let p,T,_,f,v,l,h,C,rs,da,ae,ke,Go,at,is,Xo,ls,ca,K,ds,st,cs,us,ro,ps,ms,ua,io,hs,pa,lo,Jo,fs,ma,co,gs,ha,xe,Yo,_s,vs,se,ys,uo,bs,Ls,po,ks,xs,fa,we,Nd,ga,Te,ws,mo,Ts,Ms,_a,Z,$s,rt,zs,qs,it,Fs,Es,va,re,Me,Ko,lt,Ps,Zo,Cs,ya,N,dt,As,ie,js,ho,Is,Ns,ct,Ss,Ds,Os,le,Rs,fo,Ws,Us,go,Bs,Qs,Vs,$e,ba,de,ze,en,ut,Hs,tn,Gs,La,S,pt,Xs,on,Js,Ys,mt,Ks,nn,Zs,er,tr,ee,ht,or,an,nr,ar,qe,ka,ce,Fe,sn,ft,sr,rn,rr,xa,A,gt,ir,E,lr,ln,dr,cr,_o,ur,pr,dn,mr,hr,cn,fr,gr,un,_r,vr,pn,yr,br,mn,Lr,kr,xr,_t,wr,vo,Tr,Mr,$r,yo,bo,zr,qr,Fr,Ee,vt,Er,hn,Pr,Cr,Lo,yt,wa,ue,Pe,fn,bt,Ar,gn,jr,Ta,D,Lt,Ir,kt,Nr,_n,Sr,Dr,Or,xt,Rr,ko,Wr,Ur,Br,Ce,wt,Qr,vn,Vr,Ma,pe,Ae,yn,Tt,Hr,bn,Gr,$a,I,Mt,Xr,Ln,Jr,Yr,xo,wo,Kr,Zr,ei,z,ti,To,oi,ni,Mo,ai,si,$o,ri,ii,kn,li,di,xn,ci,ui,wn,pi,mi,Tn,hi,fi,Mn,gi,_i,$n,vi,yi,bi,te,$t,Li,M,ki,zn,xi,wi,zt,qn,Ti,Mi,$i,zo,zi,qi,Fn,Fi,Ei,En,Pi,Ci,qt,Pn,Ai,ji,Ii,Cn,Ni,Si,qo,Di,Oi,An,Ri,Wi,jn,Ui,Bi,In,Qi,Vi,Nn,Hi,Gi,Sn,Xi,Ji,Ft,Dn,Yi,Ki,Zi,On,el,tl,ol,Rn,nl,za,me,je,Wn,Et,al,Un,sl,qa,X,Pt,rl,Ct,il,At,ll,dl,cl,B,jt,ul,he,pl,Fo,ml,hl,Bn,fl,gl,_l,Ie,vl,Ne,Fa,fe,Se,Qn,It,yl,Vn,bl,Ea,O,Nt,Ll,St,kl,Dt,xl,wl,Tl,Ot,Ml,Rt,$l,zl,ql,Q,Wt,Fl,ge,El,Eo,Pl,Cl,Hn,Al,jl,Il,De,Nl,Oe,Pa,_e,Re,Gn,Ut,Sl,Xn,Dl,Ca,R,Bt,Ol,W,Rl,Qt,Wl,Ul,Vt,Bl,Ql,Ht,Vl,Hl,Gt,Gl,Xl,Jl,Xt,Yl,Jt,Kl,Zl,ed,V,Yt,td,ve,od,Po,nd,ad,Jn,sd,rd,id,We,ld,Ue,Aa,ye,Be,Yn,Kt,dd,Kn,cd,ja,U,Zt,ud,J,pd,eo,md,hd,Zn,fd,gd,ea,_d,vd,yd,to,bd,oo,Ld,kd,xd,H,no,wd,be,Td,Co,Md,$d,ta,zd,qd,Fd,Qe,Ed,Ve,Ia;return l=new Y({}),at=new Y({}),lt=new Y({}),dt=new P({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L28"}}),$e=new Qo({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[Wu]},$$scope:{ctx:q}}}),ut=new Y({}),pt=new P({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L82"}}),ht=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),qe=new Qo({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[Uu]},$$scope:{ctx:q}}}),ft=new Y({}),gt=new P({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),vt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),yt=new P({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),bt=new Y({}),Lt=new P({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),wt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),Tt=new Y({}),Mt=new P({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),$t=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),Et=new Y({}),Pt=new P({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L675"}}),jt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ie=new ss({props:{$$slots:{default:[Bu]},$$scope:{ctx:q}}}),Ne=new Qo({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Qu]},$$scope:{ctx:q}}}),It=new Y({}),Nt=new P({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1203"}}),Wt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),De=new ss({props:{$$slots:{default:[Vu]},$$scope:{ctx:q}}}),Oe=new Qo({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[Hu]},$$scope:{ctx:q}}}),Ut=new Y({}),Bt=new P({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L959"}}),Yt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),We=new ss({props:{$$slots:{default:[Gu]},$$scope:{ctx:q}}}),Ue=new Qo({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Xu]},$$scope:{ctx:q}}}),Kt=new Y({}),Zt=new P({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17060/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17060/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1072"}}),no=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),Qe=new ss({props:{$$slots:{default:[Ju]},$$scope:{ctx:q}}}),Ve=new Qo({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[Yu]},$$scope:{ctx:q}}}),{c(){p=s("meta"),T=c(),_=s("h1"),f=s("a"),v=s("span"),y(l.$$.fragment),h=c(),C=s("span"),rs=n("LayoutLMv3"),da=c(),ae=s("h2"),ke=s("a"),Go=s("span"),y(at.$$.fragment),is=c(),Xo=s("span"),ls=n("Overview"),ca=c(),K=s("p"),ds=n("The LayoutLMv3 model was proposed in "),st=s("a"),cs=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),us=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies LayoutLMv2 by using patch embeddings (as in `),ro=s("a"),ps=n("ViT"),ms=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ua=c(),io=s("p"),hs=n("The abstract from the paper is the following:"),pa=c(),lo=s("p"),Jo=s("em"),fs=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),ma=c(),co=s("p"),gs=n("Tips:"),ha=c(),xe=s("ul"),Yo=s("li"),_s=n("In terms of data processing, LayoutLMv3 is identical to LayoutLMv2, except that you need to make sure images are resized and normalized and in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),vs=c(),se=s("li"),ys=n("We refer to the docs of "),uo=s("a"),bs=n("LayoutLMv2Processor"),Ls=n(" regarding data preparation. Just make sure to use "),po=s("a"),ks=n("LayoutLMv3Processor"),xs=n(" instead."),fa=c(),we=s("img"),ga=c(),Te=s("small"),ws=n("LayoutLMv3 architecture. Taken from the "),mo=s("a"),Ts=n("original paper"),Ms=n("."),_a=c(),Z=s("p"),$s=n("This model was contributed by "),rt=s("a"),zs=n("nielsr"),qs=n(". The original code can be found "),it=s("a"),Fs=n("here"),Es=n("."),va=c(),re=s("h2"),Me=s("a"),Ko=s("span"),y(lt.$$.fragment),Ps=c(),Zo=s("span"),Cs=n("LayoutLMv3Config"),ya=c(),N=s("div"),y(dt.$$.fragment),As=c(),ie=s("p"),js=n("This is the configuration class to store the configuration of a "),ho=s("a"),Is=n("LayoutLMv3Model"),Ns=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),ct=s("a"),Ss=n("microsoft/layoutlmv3-base"),Ds=n(" architecture."),Os=c(),le=s("p"),Rs=n("Configuration objects inherit from "),fo=s("a"),Ws=n("PretrainedConfig"),Us=n(` and can be used to control the model outputs. Read the
documentation from `),go=s("a"),Bs=n("PretrainedConfig"),Qs=n(" for more information."),Vs=c(),y($e.$$.fragment),ba=c(),de=s("h2"),ze=s("a"),en=s("span"),y(ut.$$.fragment),Hs=c(),tn=s("span"),Gs=n("LayoutLMv3FeatureExtractor"),La=c(),S=s("div"),y(pt.$$.fragment),Xs=c(),on=s("p"),Js=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Ys=c(),mt=s("p"),Ks=n("This feature extractor inherits from "),nn=s("code"),Zs=n("PreTrainedFeatureExtractor()"),er=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),tr=c(),ee=s("div"),y(ht.$$.fragment),or=c(),an=s("p"),nr=n("Main method to prepare for the model one or several image(s)."),ar=c(),y(qe.$$.fragment),ka=c(),ce=s("h2"),Fe=s("a"),sn=s("span"),y(ft.$$.fragment),sr=c(),rn=s("span"),rr=n("LayoutLMv3Tokenizer"),xa=c(),A=s("div"),y(gt.$$.fragment),ir=c(),E=s("p"),lr=n("Construct a LayoutLMv3 tokenizer. Based on "),ln=s("code"),dr=n("RoBERTatokenizer"),cr=n(` (Byte Pair Encoding or BPE).
`),_o=s("a"),ur=n("LayoutLMv3Tokenizer"),pr=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),dn=s("code"),mr=n("input_ids"),hr=n(", "),cn=s("code"),fr=n("attention_mask"),gr=n(", "),un=s("code"),_r=n("token_type_ids"),vr=n(", "),pn=s("code"),yr=n("bbox"),br=n(", and optional "),mn=s("code"),Lr=n("labels"),kr=n(` (for token
classification).`),xr=c(),_t=s("p"),wr=n("This tokenizer inherits from "),vo=s("a"),Tr=n("PreTrainedTokenizer"),Mr=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$r=c(),yo=s("p"),bo=s("a"),zr=n("LayoutLMv3Tokenizer"),qr=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Fr=c(),Ee=s("div"),y(vt.$$.fragment),Er=c(),hn=s("p"),Pr=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Cr=c(),Lo=s("div"),y(yt.$$.fragment),wa=c(),ue=s("h2"),Pe=s("a"),fn=s("span"),y(bt.$$.fragment),Ar=c(),gn=s("span"),jr=n("LayoutLMv3TokenizerFast"),Ta=c(),D=s("div"),y(Lt.$$.fragment),Ir=c(),kt=s("p"),Nr=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),_n=s("em"),Sr=n("tokenizers"),Dr=n(" library). Based on BPE."),Or=c(),xt=s("p"),Rr=n("This tokenizer inherits from "),ko=s("a"),Wr=n("PreTrainedTokenizerFast"),Ur=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Br=c(),Ce=s("div"),y(wt.$$.fragment),Qr=c(),vn=s("p"),Vr=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ma=c(),pe=s("h2"),Ae=s("a"),yn=s("span"),y(Tt.$$.fragment),Hr=c(),bn=s("span"),Gr=n("LayoutLMv3Processor"),$a=c(),I=s("div"),y(Mt.$$.fragment),Xr=c(),Ln=s("p"),Jr=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Yr=c(),xo=s("p"),wo=s("a"),Kr=n("LayoutLMv3Processor"),Zr=n(" offers all the functionalities you need to prepare data for the model."),ei=c(),z=s("p"),ti=n("It first uses "),To=s("a"),oi=n("LayoutLMv3FeatureExtractor"),ni=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Mo=s("a"),ai=n("LayoutLMv3Tokenizer"),si=n(` or
`),$o=s("a"),ri=n("LayoutLMv3TokenizerFast"),ii=n(", which turns the words and bounding boxes into token-level "),kn=s("code"),li=n("input_ids"),di=n(`,
`),xn=s("code"),ci=n("attention_mask"),ui=n(", "),wn=s("code"),pi=n("token_type_ids"),mi=n(", "),Tn=s("code"),hi=n("bbox"),fi=n(". Optionally, one can provide integer "),Mn=s("code"),gi=n("word_labels"),_i=n(`, which are turned
into token-level `),$n=s("code"),vi=n("labels"),yi=n(" for token classification tasks (such as FUNSD, CORD)."),bi=c(),te=s("div"),y($t.$$.fragment),Li=c(),M=s("p"),ki=n("This method first forwards the "),zn=s("code"),xi=n("images"),wi=n(" argument to "),zt=s("a"),qn=s("strong"),Ti=n("call"),Mi=n("()"),$i=n(`. In case
`),zo=s("a"),zi=n("LayoutLMv3FeatureExtractor"),qi=n(" was initialized with "),Fn=s("code"),Fi=n("apply_ocr"),Ei=n(" set to "),En=s("code"),Pi=n("True"),Ci=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),qt=s("a"),Pn=s("strong"),Ai=n("call"),ji=n("()"),Ii=n(` and returns the output,
together with resized and normalized `),Cn=s("code"),Ni=n("pixel_values"),Si=n(". In case "),qo=s("a"),Di=n("LayoutLMv3FeatureExtractor"),Oi=n(` was initialized
with `),An=s("code"),Ri=n("apply_ocr"),Wi=n(" set to "),jn=s("code"),Ui=n("False"),Bi=n(", it passes the words ("),In=s("code"),Qi=n("text"),Vi=n("/`"),Nn=s("code"),Hi=n("text_pair"),Gi=n(") and "),Sn=s("code"),Xi=n("boxes"),Ji=n(` specified by the user
along with the additional arguments to `),Ft=s("a"),Dn=s("strong"),Yi=n("call"),Ki=n("()"),Zi=n(` and returns the output, together with
resized and normalized `),On=s("code"),el=n("pixel_values"),tl=n("."),ol=c(),Rn=s("p"),nl=n("Please refer to the docstring of the above two methods for more information."),za=c(),me=s("h2"),je=s("a"),Wn=s("span"),y(Et.$$.fragment),al=c(),Un=s("span"),sl=n("LayoutLMv3Model"),qa=c(),X=s("div"),y(Pt.$$.fragment),rl=c(),Ct=s("p"),il=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=s("a"),ll=n("torch.nn.Module"),dl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cl=c(),B=s("div"),y(jt.$$.fragment),ul=c(),he=s("p"),pl=n("The "),Fo=s("a"),ml=n("LayoutLMv3Model"),hl=n(" forward method, overrides the "),Bn=s("code"),fl=n("__call__"),gl=n(" special method."),_l=c(),y(Ie.$$.fragment),vl=c(),y(Ne.$$.fragment),Fa=c(),fe=s("h2"),Se=s("a"),Qn=s("span"),y(It.$$.fragment),yl=c(),Vn=s("span"),bl=n("LayoutLMv3ForSequenceClassification"),Ea=c(),O=s("div"),y(Nt.$$.fragment),Ll=c(),St=s("p"),kl=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Dt=s("a"),xl=n("RVL-CDIP"),wl=n(" dataset."),Tl=c(),Ot=s("p"),Ml=n("This model is a PyTorch "),Rt=s("a"),$l=n("torch.nn.Module"),zl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ql=c(),Q=s("div"),y(Wt.$$.fragment),Fl=c(),ge=s("p"),El=n("The "),Eo=s("a"),Pl=n("LayoutLMv3ForSequenceClassification"),Cl=n(" forward method, overrides the "),Hn=s("code"),Al=n("__call__"),jl=n(" special method."),Il=c(),y(De.$$.fragment),Nl=c(),y(Oe.$$.fragment),Pa=c(),_e=s("h2"),Re=s("a"),Gn=s("span"),y(Ut.$$.fragment),Sl=c(),Xn=s("span"),Dl=n("LayoutLMv3ForTokenClassification"),Ca=c(),R=s("div"),y(Bt.$$.fragment),Ol=c(),W=s("p"),Rl=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Qt=s("a"),Wl=n("FUNSD"),Ul=n(`,
`),Vt=s("a"),Bl=n("SROIE"),Ql=n(", "),Ht=s("a"),Vl=n("CORD"),Hl=n(` and
`),Gt=s("a"),Gl=n("Kleister-NDA"),Xl=n("."),Jl=c(),Xt=s("p"),Yl=n("This model is a PyTorch "),Jt=s("a"),Kl=n("torch.nn.Module"),Zl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ed=c(),V=s("div"),y(Yt.$$.fragment),td=c(),ve=s("p"),od=n("The "),Po=s("a"),nd=n("LayoutLMv3ForTokenClassification"),ad=n(" forward method, overrides the "),Jn=s("code"),sd=n("__call__"),rd=n(" special method."),id=c(),y(We.$$.fragment),ld=c(),y(Ue.$$.fragment),Aa=c(),ye=s("h2"),Be=s("a"),Yn=s("span"),y(Kt.$$.fragment),dd=c(),Kn=s("span"),cd=n("LayoutLMv3ForQuestionAnswering"),ja=c(),U=s("div"),y(Zt.$$.fragment),ud=c(),J=s("p"),pd=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),eo=s("a"),md=n("DocVQA"),hd=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Zn=s("code"),fd=n("span start logits"),gd=n(" and "),ea=s("code"),_d=n("span end logits"),vd=n(")."),yd=c(),to=s("p"),bd=n("This model is a PyTorch "),oo=s("a"),Ld=n("torch.nn.Module"),kd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xd=c(),H=s("div"),y(no.$$.fragment),wd=c(),be=s("p"),Td=n("The "),Co=s("a"),Md=n("LayoutLMv3ForQuestionAnswering"),$d=n(" forward method, overrides the "),ta=s("code"),zd=n("__call__"),qd=n(" special method."),Fd=c(),y(Qe.$$.fragment),Ed=c(),y(Ve.$$.fragment),this.h()},l(t){const m=Du('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(o),T=u(t),_=r(t,"H1",{class:!0});var ao=i(_);f=r(ao,"A",{id:!0,class:!0,href:!0});var oa=i(f);v=r(oa,"SPAN",{});var na=i(v);b(l.$$.fragment,na),na.forEach(o),oa.forEach(o),h=u(ao),C=r(ao,"SPAN",{});var aa=i(C);rs=a(aa,"LayoutLMv3"),aa.forEach(o),ao.forEach(o),da=u(t),ae=r(t,"H2",{class:!0});var so=i(ae);ke=r(so,"A",{id:!0,class:!0,href:!0});var sa=i(ke);Go=r(sa,"SPAN",{});var ra=i(Go);b(at.$$.fragment,ra),ra.forEach(o),sa.forEach(o),is=u(so),Xo=r(so,"SPAN",{});var ia=i(Xo);ls=a(ia,"Overview"),ia.forEach(o),so.forEach(o),ca=u(t),K=r(t,"P",{});var Le=i(K);ds=a(Le,"The LayoutLMv3 model was proposed in "),st=r(Le,"A",{href:!0,rel:!0});var la=i(st);cs=a(la,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),la.forEach(o),us=a(Le,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies LayoutLMv2 by using patch embeddings (as in `),ro=r(Le,"A",{href:!0});var Sd=i(ro);ps=a(Sd,"ViT"),Sd.forEach(o),ms=a(Le,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Le.forEach(o),ua=u(t),io=r(t,"P",{});var Dd=i(io);hs=a(Dd,"The abstract from the paper is the following:"),Dd.forEach(o),pa=u(t),lo=r(t,"P",{});var Od=i(lo);Jo=r(Od,"EM",{});var Rd=i(Jo);fs=a(Rd,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Rd.forEach(o),Od.forEach(o),ma=u(t),co=r(t,"P",{});var Wd=i(co);gs=a(Wd,"Tips:"),Wd.forEach(o),ha=u(t),xe=r(t,"UL",{});var Na=i(xe);Yo=r(Na,"LI",{});var Ud=i(Yo);_s=a(Ud,"In terms of data processing, LayoutLMv3 is identical to LayoutLMv2, except that you need to make sure images are resized and normalized and in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ud.forEach(o),vs=u(Na),se=r(Na,"LI",{});var Ao=i(se);ys=a(Ao,"We refer to the docs of "),uo=r(Ao,"A",{href:!0});var Bd=i(uo);bs=a(Bd,"LayoutLMv2Processor"),Bd.forEach(o),Ls=a(Ao," regarding data preparation. Just make sure to use "),po=r(Ao,"A",{href:!0});var Qd=i(po);ks=a(Qd,"LayoutLMv3Processor"),Qd.forEach(o),xs=a(Ao," instead."),Ao.forEach(o),Na.forEach(o),fa=u(t),we=r(t,"IMG",{src:!0,alt:!0,width:!0}),ga=u(t),Te=r(t,"SMALL",{});var Sa=i(Te);ws=a(Sa,"LayoutLMv3 architecture. Taken from the "),mo=r(Sa,"A",{href:!0});var Vd=i(mo);Ts=a(Vd,"original paper"),Vd.forEach(o),Ms=a(Sa,"."),Sa.forEach(o),_a=u(t),Z=r(t,"P",{});var jo=i(Z);$s=a(jo,"This model was contributed by "),rt=r(jo,"A",{href:!0,rel:!0});var Hd=i(rt);zs=a(Hd,"nielsr"),Hd.forEach(o),qs=a(jo,". The original code can be found "),it=r(jo,"A",{href:!0,rel:!0});var Gd=i(it);Fs=a(Gd,"here"),Gd.forEach(o),Es=a(jo,"."),jo.forEach(o),va=u(t),re=r(t,"H2",{class:!0});var Da=i(re);Me=r(Da,"A",{id:!0,class:!0,href:!0});var Xd=i(Me);Ko=r(Xd,"SPAN",{});var Jd=i(Ko);b(lt.$$.fragment,Jd),Jd.forEach(o),Xd.forEach(o),Ps=u(Da),Zo=r(Da,"SPAN",{});var Yd=i(Zo);Cs=a(Yd,"LayoutLMv3Config"),Yd.forEach(o),Da.forEach(o),ya=u(t),N=r(t,"DIV",{class:!0});var He=i(N);b(dt.$$.fragment,He),As=u(He),ie=r(He,"P",{});var Io=i(ie);js=a(Io,"This is the configuration class to store the configuration of a "),ho=r(Io,"A",{href:!0});var Kd=i(ho);Is=a(Kd,"LayoutLMv3Model"),Kd.forEach(o),Ns=a(Io,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),ct=r(Io,"A",{href:!0,rel:!0});var Zd=i(ct);Ss=a(Zd,"microsoft/layoutlmv3-base"),Zd.forEach(o),Ds=a(Io," architecture."),Io.forEach(o),Os=u(He),le=r(He,"P",{});var No=i(le);Rs=a(No,"Configuration objects inherit from "),fo=r(No,"A",{href:!0});var ec=i(fo);Ws=a(ec,"PretrainedConfig"),ec.forEach(o),Us=a(No,` and can be used to control the model outputs. Read the
documentation from `),go=r(No,"A",{href:!0});var tc=i(go);Bs=a(tc,"PretrainedConfig"),tc.forEach(o),Qs=a(No," for more information."),No.forEach(o),Vs=u(He),b($e.$$.fragment,He),He.forEach(o),ba=u(t),de=r(t,"H2",{class:!0});var Oa=i(de);ze=r(Oa,"A",{id:!0,class:!0,href:!0});var oc=i(ze);en=r(oc,"SPAN",{});var nc=i(en);b(ut.$$.fragment,nc),nc.forEach(o),oc.forEach(o),Hs=u(Oa),tn=r(Oa,"SPAN",{});var ac=i(tn);Gs=a(ac,"LayoutLMv3FeatureExtractor"),ac.forEach(o),Oa.forEach(o),La=u(t),S=r(t,"DIV",{class:!0});var Ge=i(S);b(pt.$$.fragment,Ge),Xs=u(Ge),on=r(Ge,"P",{});var sc=i(on);Js=a(sc,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),sc.forEach(o),Ys=u(Ge),mt=r(Ge,"P",{});var Ra=i(mt);Ks=a(Ra,"This feature extractor inherits from "),nn=r(Ra,"CODE",{});var rc=i(nn);Zs=a(rc,"PreTrainedFeatureExtractor()"),rc.forEach(o),er=a(Ra,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Ra.forEach(o),tr=u(Ge),ee=r(Ge,"DIV",{class:!0});var So=i(ee);b(ht.$$.fragment,So),or=u(So),an=r(So,"P",{});var ic=i(an);nr=a(ic,"Main method to prepare for the model one or several image(s)."),ic.forEach(o),ar=u(So),b(qe.$$.fragment,So),So.forEach(o),Ge.forEach(o),ka=u(t),ce=r(t,"H2",{class:!0});var Wa=i(ce);Fe=r(Wa,"A",{id:!0,class:!0,href:!0});var lc=i(Fe);sn=r(lc,"SPAN",{});var dc=i(sn);b(ft.$$.fragment,dc),dc.forEach(o),lc.forEach(o),sr=u(Wa),rn=r(Wa,"SPAN",{});var cc=i(rn);rr=a(cc,"LayoutLMv3Tokenizer"),cc.forEach(o),Wa.forEach(o),xa=u(t),A=r(t,"DIV",{class:!0});var G=i(A);b(gt.$$.fragment,G),ir=u(G),E=r(G,"P",{});var j=i(E);lr=a(j,"Construct a LayoutLMv3 tokenizer. Based on "),ln=r(j,"CODE",{});var uc=i(ln);dr=a(uc,"RoBERTatokenizer"),uc.forEach(o),cr=a(j,` (Byte Pair Encoding or BPE).
`),_o=r(j,"A",{href:!0});var pc=i(_o);ur=a(pc,"LayoutLMv3Tokenizer"),pc.forEach(o),pr=a(j,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),dn=r(j,"CODE",{});var mc=i(dn);mr=a(mc,"input_ids"),mc.forEach(o),hr=a(j,", "),cn=r(j,"CODE",{});var hc=i(cn);fr=a(hc,"attention_mask"),hc.forEach(o),gr=a(j,", "),un=r(j,"CODE",{});var fc=i(un);_r=a(fc,"token_type_ids"),fc.forEach(o),vr=a(j,", "),pn=r(j,"CODE",{});var gc=i(pn);yr=a(gc,"bbox"),gc.forEach(o),br=a(j,", and optional "),mn=r(j,"CODE",{});var _c=i(mn);Lr=a(_c,"labels"),_c.forEach(o),kr=a(j,` (for token
classification).`),j.forEach(o),xr=u(G),_t=r(G,"P",{});var Ua=i(_t);wr=a(Ua,"This tokenizer inherits from "),vo=r(Ua,"A",{href:!0});var vc=i(vo);Tr=a(vc,"PreTrainedTokenizer"),vc.forEach(o),Mr=a(Ua,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ua.forEach(o),$r=u(G),yo=r(G,"P",{});var Pd=i(yo);bo=r(Pd,"A",{href:!0});var yc=i(bo);zr=a(yc,"LayoutLMv3Tokenizer"),yc.forEach(o),qr=a(Pd,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Pd.forEach(o),Fr=u(G),Ee=r(G,"DIV",{class:!0});var Ba=i(Ee);b(vt.$$.fragment,Ba),Er=u(Ba),hn=r(Ba,"P",{});var bc=i(hn);Pr=a(bc,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),bc.forEach(o),Ba.forEach(o),Cr=u(G),Lo=r(G,"DIV",{class:!0});var Lc=i(Lo);b(yt.$$.fragment,Lc),Lc.forEach(o),G.forEach(o),wa=u(t),ue=r(t,"H2",{class:!0});var Qa=i(ue);Pe=r(Qa,"A",{id:!0,class:!0,href:!0});var kc=i(Pe);fn=r(kc,"SPAN",{});var xc=i(fn);b(bt.$$.fragment,xc),xc.forEach(o),kc.forEach(o),Ar=u(Qa),gn=r(Qa,"SPAN",{});var wc=i(gn);jr=a(wc,"LayoutLMv3TokenizerFast"),wc.forEach(o),Qa.forEach(o),Ta=u(t),D=r(t,"DIV",{class:!0});var Xe=i(D);b(Lt.$$.fragment,Xe),Ir=u(Xe),kt=r(Xe,"P",{});var Va=i(kt);Nr=a(Va,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),_n=r(Va,"EM",{});var Tc=i(_n);Sr=a(Tc,"tokenizers"),Tc.forEach(o),Dr=a(Va," library). Based on BPE."),Va.forEach(o),Or=u(Xe),xt=r(Xe,"P",{});var Ha=i(xt);Rr=a(Ha,"This tokenizer inherits from "),ko=r(Ha,"A",{href:!0});var Mc=i(ko);Wr=a(Mc,"PreTrainedTokenizerFast"),Mc.forEach(o),Ur=a(Ha,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ha.forEach(o),Br=u(Xe),Ce=r(Xe,"DIV",{class:!0});var Ga=i(Ce);b(wt.$$.fragment,Ga),Qr=u(Ga),vn=r(Ga,"P",{});var $c=i(vn);Vr=a($c,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),$c.forEach(o),Ga.forEach(o),Xe.forEach(o),Ma=u(t),pe=r(t,"H2",{class:!0});var Xa=i(pe);Ae=r(Xa,"A",{id:!0,class:!0,href:!0});var zc=i(Ae);yn=r(zc,"SPAN",{});var qc=i(yn);b(Tt.$$.fragment,qc),qc.forEach(o),zc.forEach(o),Hr=u(Xa),bn=r(Xa,"SPAN",{});var Fc=i(bn);Gr=a(Fc,"LayoutLMv3Processor"),Fc.forEach(o),Xa.forEach(o),$a=u(t),I=r(t,"DIV",{class:!0});var oe=i(I);b(Mt.$$.fragment,oe),Xr=u(oe),Ln=r(oe,"P",{});var Ec=i(Ln);Jr=a(Ec,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Ec.forEach(o),Yr=u(oe),xo=r(oe,"P",{});var Cd=i(xo);wo=r(Cd,"A",{href:!0});var Pc=i(wo);Kr=a(Pc,"LayoutLMv3Processor"),Pc.forEach(o),Zr=a(Cd," offers all the functionalities you need to prepare data for the model."),Cd.forEach(o),ei=u(oe),z=r(oe,"P",{});var F=i(z);ti=a(F,"It first uses "),To=r(F,"A",{href:!0});var Cc=i(To);oi=a(Cc,"LayoutLMv3FeatureExtractor"),Cc.forEach(o),ni=a(F,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Mo=r(F,"A",{href:!0});var Ac=i(Mo);ai=a(Ac,"LayoutLMv3Tokenizer"),Ac.forEach(o),si=a(F,` or
`),$o=r(F,"A",{href:!0});var jc=i($o);ri=a(jc,"LayoutLMv3TokenizerFast"),jc.forEach(o),ii=a(F,", which turns the words and bounding boxes into token-level "),kn=r(F,"CODE",{});var Ic=i(kn);li=a(Ic,"input_ids"),Ic.forEach(o),di=a(F,`,
`),xn=r(F,"CODE",{});var Nc=i(xn);ci=a(Nc,"attention_mask"),Nc.forEach(o),ui=a(F,", "),wn=r(F,"CODE",{});var Sc=i(wn);pi=a(Sc,"token_type_ids"),Sc.forEach(o),mi=a(F,", "),Tn=r(F,"CODE",{});var Dc=i(Tn);hi=a(Dc,"bbox"),Dc.forEach(o),fi=a(F,". Optionally, one can provide integer "),Mn=r(F,"CODE",{});var Oc=i(Mn);gi=a(Oc,"word_labels"),Oc.forEach(o),_i=a(F,`, which are turned
into token-level `),$n=r(F,"CODE",{});var Rc=i($n);vi=a(Rc,"labels"),Rc.forEach(o),yi=a(F," for token classification tasks (such as FUNSD, CORD)."),F.forEach(o),bi=u(oe),te=r(oe,"DIV",{class:!0});var Do=i(te);b($t.$$.fragment,Do),Li=u(Do),M=r(Do,"P",{});var $=i(M);ki=a($,"This method first forwards the "),zn=r($,"CODE",{});var Wc=i(zn);xi=a(Wc,"images"),Wc.forEach(o),wi=a($," argument to "),zt=r($,"A",{href:!0});var Ad=i(zt);qn=r(Ad,"STRONG",{});var Uc=i(qn);Ti=a(Uc,"call"),Uc.forEach(o),Mi=a(Ad,"()"),Ad.forEach(o),$i=a($,`. In case
`),zo=r($,"A",{href:!0});var Bc=i(zo);zi=a(Bc,"LayoutLMv3FeatureExtractor"),Bc.forEach(o),qi=a($," was initialized with "),Fn=r($,"CODE",{});var Qc=i(Fn);Fi=a(Qc,"apply_ocr"),Qc.forEach(o),Ei=a($," set to "),En=r($,"CODE",{});var Vc=i(En);Pi=a(Vc,"True"),Vc.forEach(o),Ci=a($,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),qt=r($,"A",{href:!0});var jd=i(qt);Pn=r(jd,"STRONG",{});var Hc=i(Pn);Ai=a(Hc,"call"),Hc.forEach(o),ji=a(jd,"()"),jd.forEach(o),Ii=a($,` and returns the output,
together with resized and normalized `),Cn=r($,"CODE",{});var Gc=i(Cn);Ni=a(Gc,"pixel_values"),Gc.forEach(o),Si=a($,". In case "),qo=r($,"A",{href:!0});var Xc=i(qo);Di=a(Xc,"LayoutLMv3FeatureExtractor"),Xc.forEach(o),Oi=a($,` was initialized
with `),An=r($,"CODE",{});var Jc=i(An);Ri=a(Jc,"apply_ocr"),Jc.forEach(o),Wi=a($," set to "),jn=r($,"CODE",{});var Yc=i(jn);Ui=a(Yc,"False"),Yc.forEach(o),Bi=a($,", it passes the words ("),In=r($,"CODE",{});var Kc=i(In);Qi=a(Kc,"text"),Kc.forEach(o),Vi=a($,"/`"),Nn=r($,"CODE",{});var Zc=i(Nn);Hi=a(Zc,"text_pair"),Zc.forEach(o),Gi=a($,") and "),Sn=r($,"CODE",{});var eu=i(Sn);Xi=a(eu,"boxes"),eu.forEach(o),Ji=a($,` specified by the user
along with the additional arguments to `),Ft=r($,"A",{href:!0});var Id=i(Ft);Dn=r(Id,"STRONG",{});var tu=i(Dn);Yi=a(tu,"call"),tu.forEach(o),Ki=a(Id,"()"),Id.forEach(o),Zi=a($,` and returns the output, together with
resized and normalized `),On=r($,"CODE",{});var ou=i(On);el=a(ou,"pixel_values"),ou.forEach(o),tl=a($,"."),$.forEach(o),ol=u(Do),Rn=r(Do,"P",{});var nu=i(Rn);nl=a(nu,"Please refer to the docstring of the above two methods for more information."),nu.forEach(o),Do.forEach(o),oe.forEach(o),za=u(t),me=r(t,"H2",{class:!0});var Ja=i(me);je=r(Ja,"A",{id:!0,class:!0,href:!0});var au=i(je);Wn=r(au,"SPAN",{});var su=i(Wn);b(Et.$$.fragment,su),su.forEach(o),au.forEach(o),al=u(Ja),Un=r(Ja,"SPAN",{});var ru=i(Un);sl=a(ru,"LayoutLMv3Model"),ru.forEach(o),Ja.forEach(o),qa=u(t),X=r(t,"DIV",{class:!0});var Oo=i(X);b(Pt.$$.fragment,Oo),rl=u(Oo),Ct=r(Oo,"P",{});var Ya=i(Ct);il=a(Ya,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=r(Ya,"A",{href:!0,rel:!0});var iu=i(At);ll=a(iu,"torch.nn.Module"),iu.forEach(o),dl=a(Ya,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ya.forEach(o),cl=u(Oo),B=r(Oo,"DIV",{class:!0});var Je=i(B);b(jt.$$.fragment,Je),ul=u(Je),he=r(Je,"P",{});var Ro=i(he);pl=a(Ro,"The "),Fo=r(Ro,"A",{href:!0});var lu=i(Fo);ml=a(lu,"LayoutLMv3Model"),lu.forEach(o),hl=a(Ro," forward method, overrides the "),Bn=r(Ro,"CODE",{});var du=i(Bn);fl=a(du,"__call__"),du.forEach(o),gl=a(Ro," special method."),Ro.forEach(o),_l=u(Je),b(Ie.$$.fragment,Je),vl=u(Je),b(Ne.$$.fragment,Je),Je.forEach(o),Oo.forEach(o),Fa=u(t),fe=r(t,"H2",{class:!0});var Ka=i(fe);Se=r(Ka,"A",{id:!0,class:!0,href:!0});var cu=i(Se);Qn=r(cu,"SPAN",{});var uu=i(Qn);b(It.$$.fragment,uu),uu.forEach(o),cu.forEach(o),yl=u(Ka),Vn=r(Ka,"SPAN",{});var pu=i(Vn);bl=a(pu,"LayoutLMv3ForSequenceClassification"),pu.forEach(o),Ka.forEach(o),Ea=u(t),O=r(t,"DIV",{class:!0});var Ye=i(O);b(Nt.$$.fragment,Ye),Ll=u(Ye),St=r(Ye,"P",{});var Za=i(St);kl=a(Za,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Dt=r(Za,"A",{href:!0,rel:!0});var mu=i(Dt);xl=a(mu,"RVL-CDIP"),mu.forEach(o),wl=a(Za," dataset."),Za.forEach(o),Tl=u(Ye),Ot=r(Ye,"P",{});var es=i(Ot);Ml=a(es,"This model is a PyTorch "),Rt=r(es,"A",{href:!0,rel:!0});var hu=i(Rt);$l=a(hu,"torch.nn.Module"),hu.forEach(o),zl=a(es,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),es.forEach(o),ql=u(Ye),Q=r(Ye,"DIV",{class:!0});var Ke=i(Q);b(Wt.$$.fragment,Ke),Fl=u(Ke),ge=r(Ke,"P",{});var Wo=i(ge);El=a(Wo,"The "),Eo=r(Wo,"A",{href:!0});var fu=i(Eo);Pl=a(fu,"LayoutLMv3ForSequenceClassification"),fu.forEach(o),Cl=a(Wo," forward method, overrides the "),Hn=r(Wo,"CODE",{});var gu=i(Hn);Al=a(gu,"__call__"),gu.forEach(o),jl=a(Wo," special method."),Wo.forEach(o),Il=u(Ke),b(De.$$.fragment,Ke),Nl=u(Ke),b(Oe.$$.fragment,Ke),Ke.forEach(o),Ye.forEach(o),Pa=u(t),_e=r(t,"H2",{class:!0});var ts=i(_e);Re=r(ts,"A",{id:!0,class:!0,href:!0});var _u=i(Re);Gn=r(_u,"SPAN",{});var vu=i(Gn);b(Ut.$$.fragment,vu),vu.forEach(o),_u.forEach(o),Sl=u(ts),Xn=r(ts,"SPAN",{});var yu=i(Xn);Dl=a(yu,"LayoutLMv3ForTokenClassification"),yu.forEach(o),ts.forEach(o),Ca=u(t),R=r(t,"DIV",{class:!0});var Ze=i(R);b(Bt.$$.fragment,Ze),Ol=u(Ze),W=r(Ze,"P",{});var ne=i(W);Rl=a(ne,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Qt=r(ne,"A",{href:!0,rel:!0});var bu=i(Qt);Wl=a(bu,"FUNSD"),bu.forEach(o),Ul=a(ne,`,
`),Vt=r(ne,"A",{href:!0,rel:!0});var Lu=i(Vt);Bl=a(Lu,"SROIE"),Lu.forEach(o),Ql=a(ne,", "),Ht=r(ne,"A",{href:!0,rel:!0});var ku=i(Ht);Vl=a(ku,"CORD"),ku.forEach(o),Hl=a(ne,` and
`),Gt=r(ne,"A",{href:!0,rel:!0});var xu=i(Gt);Gl=a(xu,"Kleister-NDA"),xu.forEach(o),Xl=a(ne,"."),ne.forEach(o),Jl=u(Ze),Xt=r(Ze,"P",{});var os=i(Xt);Yl=a(os,"This model is a PyTorch "),Jt=r(os,"A",{href:!0,rel:!0});var wu=i(Jt);Kl=a(wu,"torch.nn.Module"),wu.forEach(o),Zl=a(os,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),os.forEach(o),ed=u(Ze),V=r(Ze,"DIV",{class:!0});var et=i(V);b(Yt.$$.fragment,et),td=u(et),ve=r(et,"P",{});var Uo=i(ve);od=a(Uo,"The "),Po=r(Uo,"A",{href:!0});var Tu=i(Po);nd=a(Tu,"LayoutLMv3ForTokenClassification"),Tu.forEach(o),ad=a(Uo," forward method, overrides the "),Jn=r(Uo,"CODE",{});var Mu=i(Jn);sd=a(Mu,"__call__"),Mu.forEach(o),rd=a(Uo," special method."),Uo.forEach(o),id=u(et),b(We.$$.fragment,et),ld=u(et),b(Ue.$$.fragment,et),et.forEach(o),Ze.forEach(o),Aa=u(t),ye=r(t,"H2",{class:!0});var ns=i(ye);Be=r(ns,"A",{id:!0,class:!0,href:!0});var $u=i(Be);Yn=r($u,"SPAN",{});var zu=i(Yn);b(Kt.$$.fragment,zu),zu.forEach(o),$u.forEach(o),dd=u(ns),Kn=r(ns,"SPAN",{});var qu=i(Kn);cd=a(qu,"LayoutLMv3ForQuestionAnswering"),qu.forEach(o),ns.forEach(o),ja=u(t),U=r(t,"DIV",{class:!0});var tt=i(U);b(Zt.$$.fragment,tt),ud=u(tt),J=r(tt,"P",{});var ot=i(J);pd=a(ot,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),eo=r(ot,"A",{href:!0,rel:!0});var Fu=i(eo);md=a(Fu,"DocVQA"),Fu.forEach(o),hd=a(ot,` (a linear layer on top of the text part of the hidden-states output to
compute `),Zn=r(ot,"CODE",{});var Eu=i(Zn);fd=a(Eu,"span start logits"),Eu.forEach(o),gd=a(ot," and "),ea=r(ot,"CODE",{});var Pu=i(ea);_d=a(Pu,"span end logits"),Pu.forEach(o),vd=a(ot,")."),ot.forEach(o),yd=u(tt),to=r(tt,"P",{});var as=i(to);bd=a(as,"This model is a PyTorch "),oo=r(as,"A",{href:!0,rel:!0});var Cu=i(oo);Ld=a(Cu,"torch.nn.Module"),Cu.forEach(o),kd=a(as,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),as.forEach(o),xd=u(tt),H=r(tt,"DIV",{class:!0});var nt=i(H);b(no.$$.fragment,nt),wd=u(nt),be=r(nt,"P",{});var Bo=i(be);Td=a(Bo,"The "),Co=r(Bo,"A",{href:!0});var Au=i(Co);Md=a(Au,"LayoutLMv3ForQuestionAnswering"),Au.forEach(o),$d=a(Bo," forward method, overrides the "),ta=r(Bo,"CODE",{});var ju=i(ta);zd=a(ju,"__call__"),ju.forEach(o),qd=a(Bo," special method."),Bo.forEach(o),Fd=u(nt),b(Qe.$$.fragment,nt),Ed=u(nt),b(Ve.$$.fragment,nt),nt.forEach(o),tt.forEach(o),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(Zu)),d(f,"id","layoutlmv3"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#layoutlmv3"),d(_,"class","relative group"),d(ke,"id","overview"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#overview"),d(ae,"class","relative group"),d(st,"href","https://arxiv.org/abs/2204.08387"),d(st,"rel","nofollow"),d(ro,"href","vit"),d(uo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),d(po,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),Ou(we.src,Nd="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d(we,"src",Nd),d(we,"alt","drawing"),d(we,"width","600"),d(mo,"href","https://arxiv.org/abs/2204.08387"),d(rt,"href","https://huggingface.co/nielsr"),d(rt,"rel","nofollow"),d(it,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(it,"rel","nofollow"),d(Me,"id","transformers.LayoutLMv3Config"),d(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Me,"href","#transformers.LayoutLMv3Config"),d(re,"class","relative group"),d(ho,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(ct,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(ct,"rel","nofollow"),d(fo,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),d(go,"href","/docs/transformers/pr_17060/en/main_classes/configuration#transformers.PretrainedConfig"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ze,"id","transformers.LayoutLMv3FeatureExtractor"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.LayoutLMv3FeatureExtractor"),d(de,"class","relative group"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.LayoutLMv3Tokenizer"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.LayoutLMv3Tokenizer"),d(ce,"class","relative group"),d(_o,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(vo,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(bo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.LayoutLMv3TokenizerFast"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.LayoutLMv3TokenizerFast"),d(ue,"class","relative group"),d(ko,"href","/docs/transformers/pr_17060/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.LayoutLMv3Processor"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.LayoutLMv3Processor"),d(pe,"class","relative group"),d(wo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(To,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Mo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d($o,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(zt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(zo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(qt,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(qo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Ft,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(je,"id","transformers.LayoutLMv3Model"),d(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(je,"href","#transformers.LayoutLMv3Model"),d(me,"class","relative group"),d(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(At,"rel","nofollow"),d(Fo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(fe,"class","relative group"),d(Dt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Dt,"rel","nofollow"),d(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Rt,"rel","nofollow"),d(Eo,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.LayoutLMv3ForTokenClassification"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.LayoutLMv3ForTokenClassification"),d(_e,"class","relative group"),d(Qt,"href","https://guillaumejaume.github.io/FUNSD/"),d(Qt,"rel","nofollow"),d(Vt,"href","https://rrc.cvc.uab.es/?ch=13"),d(Vt,"rel","nofollow"),d(Ht,"href","https://github.com/clovaai/cord"),d(Ht,"rel","nofollow"),d(Gt,"href","https://github.com/applicaai/kleister-nda"),d(Gt,"rel","nofollow"),d(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Jt,"rel","nofollow"),d(Po,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Be,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(ye,"class","relative group"),d(eo,"href","https://rrc.cvc.uab.es/?ch=17"),d(eo,"rel","nofollow"),d(oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(oo,"rel","nofollow"),d(Co,"href","/docs/transformers/pr_17060/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,p),g(t,T,m),g(t,_,m),e(_,f),e(f,v),L(l,v,null),e(_,h),e(_,C),e(C,rs),g(t,da,m),g(t,ae,m),e(ae,ke),e(ke,Go),L(at,Go,null),e(ae,is),e(ae,Xo),e(Xo,ls),g(t,ca,m),g(t,K,m),e(K,ds),e(K,st),e(st,cs),e(K,us),e(K,ro),e(ro,ps),e(K,ms),g(t,ua,m),g(t,io,m),e(io,hs),g(t,pa,m),g(t,lo,m),e(lo,Jo),e(Jo,fs),g(t,ma,m),g(t,co,m),e(co,gs),g(t,ha,m),g(t,xe,m),e(xe,Yo),e(Yo,_s),e(xe,vs),e(xe,se),e(se,ys),e(se,uo),e(uo,bs),e(se,Ls),e(se,po),e(po,ks),e(se,xs),g(t,fa,m),g(t,we,m),g(t,ga,m),g(t,Te,m),e(Te,ws),e(Te,mo),e(mo,Ts),e(Te,Ms),g(t,_a,m),g(t,Z,m),e(Z,$s),e(Z,rt),e(rt,zs),e(Z,qs),e(Z,it),e(it,Fs),e(Z,Es),g(t,va,m),g(t,re,m),e(re,Me),e(Me,Ko),L(lt,Ko,null),e(re,Ps),e(re,Zo),e(Zo,Cs),g(t,ya,m),g(t,N,m),L(dt,N,null),e(N,As),e(N,ie),e(ie,js),e(ie,ho),e(ho,Is),e(ie,Ns),e(ie,ct),e(ct,Ss),e(ie,Ds),e(N,Os),e(N,le),e(le,Rs),e(le,fo),e(fo,Ws),e(le,Us),e(le,go),e(go,Bs),e(le,Qs),e(N,Vs),L($e,N,null),g(t,ba,m),g(t,de,m),e(de,ze),e(ze,en),L(ut,en,null),e(de,Hs),e(de,tn),e(tn,Gs),g(t,La,m),g(t,S,m),L(pt,S,null),e(S,Xs),e(S,on),e(on,Js),e(S,Ys),e(S,mt),e(mt,Ks),e(mt,nn),e(nn,Zs),e(mt,er),e(S,tr),e(S,ee),L(ht,ee,null),e(ee,or),e(ee,an),e(an,nr),e(ee,ar),L(qe,ee,null),g(t,ka,m),g(t,ce,m),e(ce,Fe),e(Fe,sn),L(ft,sn,null),e(ce,sr),e(ce,rn),e(rn,rr),g(t,xa,m),g(t,A,m),L(gt,A,null),e(A,ir),e(A,E),e(E,lr),e(E,ln),e(ln,dr),e(E,cr),e(E,_o),e(_o,ur),e(E,pr),e(E,dn),e(dn,mr),e(E,hr),e(E,cn),e(cn,fr),e(E,gr),e(E,un),e(un,_r),e(E,vr),e(E,pn),e(pn,yr),e(E,br),e(E,mn),e(mn,Lr),e(E,kr),e(A,xr),e(A,_t),e(_t,wr),e(_t,vo),e(vo,Tr),e(_t,Mr),e(A,$r),e(A,yo),e(yo,bo),e(bo,zr),e(yo,qr),e(A,Fr),e(A,Ee),L(vt,Ee,null),e(Ee,Er),e(Ee,hn),e(hn,Pr),e(A,Cr),e(A,Lo),L(yt,Lo,null),g(t,wa,m),g(t,ue,m),e(ue,Pe),e(Pe,fn),L(bt,fn,null),e(ue,Ar),e(ue,gn),e(gn,jr),g(t,Ta,m),g(t,D,m),L(Lt,D,null),e(D,Ir),e(D,kt),e(kt,Nr),e(kt,_n),e(_n,Sr),e(kt,Dr),e(D,Or),e(D,xt),e(xt,Rr),e(xt,ko),e(ko,Wr),e(xt,Ur),e(D,Br),e(D,Ce),L(wt,Ce,null),e(Ce,Qr),e(Ce,vn),e(vn,Vr),g(t,Ma,m),g(t,pe,m),e(pe,Ae),e(Ae,yn),L(Tt,yn,null),e(pe,Hr),e(pe,bn),e(bn,Gr),g(t,$a,m),g(t,I,m),L(Mt,I,null),e(I,Xr),e(I,Ln),e(Ln,Jr),e(I,Yr),e(I,xo),e(xo,wo),e(wo,Kr),e(xo,Zr),e(I,ei),e(I,z),e(z,ti),e(z,To),e(To,oi),e(z,ni),e(z,Mo),e(Mo,ai),e(z,si),e(z,$o),e($o,ri),e(z,ii),e(z,kn),e(kn,li),e(z,di),e(z,xn),e(xn,ci),e(z,ui),e(z,wn),e(wn,pi),e(z,mi),e(z,Tn),e(Tn,hi),e(z,fi),e(z,Mn),e(Mn,gi),e(z,_i),e(z,$n),e($n,vi),e(z,yi),e(I,bi),e(I,te),L($t,te,null),e(te,Li),e(te,M),e(M,ki),e(M,zn),e(zn,xi),e(M,wi),e(M,zt),e(zt,qn),e(qn,Ti),e(zt,Mi),e(M,$i),e(M,zo),e(zo,zi),e(M,qi),e(M,Fn),e(Fn,Fi),e(M,Ei),e(M,En),e(En,Pi),e(M,Ci),e(M,qt),e(qt,Pn),e(Pn,Ai),e(qt,ji),e(M,Ii),e(M,Cn),e(Cn,Ni),e(M,Si),e(M,qo),e(qo,Di),e(M,Oi),e(M,An),e(An,Ri),e(M,Wi),e(M,jn),e(jn,Ui),e(M,Bi),e(M,In),e(In,Qi),e(M,Vi),e(M,Nn),e(Nn,Hi),e(M,Gi),e(M,Sn),e(Sn,Xi),e(M,Ji),e(M,Ft),e(Ft,Dn),e(Dn,Yi),e(Ft,Ki),e(M,Zi),e(M,On),e(On,el),e(M,tl),e(te,ol),e(te,Rn),e(Rn,nl),g(t,za,m),g(t,me,m),e(me,je),e(je,Wn),L(Et,Wn,null),e(me,al),e(me,Un),e(Un,sl),g(t,qa,m),g(t,X,m),L(Pt,X,null),e(X,rl),e(X,Ct),e(Ct,il),e(Ct,At),e(At,ll),e(Ct,dl),e(X,cl),e(X,B),L(jt,B,null),e(B,ul),e(B,he),e(he,pl),e(he,Fo),e(Fo,ml),e(he,hl),e(he,Bn),e(Bn,fl),e(he,gl),e(B,_l),L(Ie,B,null),e(B,vl),L(Ne,B,null),g(t,Fa,m),g(t,fe,m),e(fe,Se),e(Se,Qn),L(It,Qn,null),e(fe,yl),e(fe,Vn),e(Vn,bl),g(t,Ea,m),g(t,O,m),L(Nt,O,null),e(O,Ll),e(O,St),e(St,kl),e(St,Dt),e(Dt,xl),e(St,wl),e(O,Tl),e(O,Ot),e(Ot,Ml),e(Ot,Rt),e(Rt,$l),e(Ot,zl),e(O,ql),e(O,Q),L(Wt,Q,null),e(Q,Fl),e(Q,ge),e(ge,El),e(ge,Eo),e(Eo,Pl),e(ge,Cl),e(ge,Hn),e(Hn,Al),e(ge,jl),e(Q,Il),L(De,Q,null),e(Q,Nl),L(Oe,Q,null),g(t,Pa,m),g(t,_e,m),e(_e,Re),e(Re,Gn),L(Ut,Gn,null),e(_e,Sl),e(_e,Xn),e(Xn,Dl),g(t,Ca,m),g(t,R,m),L(Bt,R,null),e(R,Ol),e(R,W),e(W,Rl),e(W,Qt),e(Qt,Wl),e(W,Ul),e(W,Vt),e(Vt,Bl),e(W,Ql),e(W,Ht),e(Ht,Vl),e(W,Hl),e(W,Gt),e(Gt,Gl),e(W,Xl),e(R,Jl),e(R,Xt),e(Xt,Yl),e(Xt,Jt),e(Jt,Kl),e(Xt,Zl),e(R,ed),e(R,V),L(Yt,V,null),e(V,td),e(V,ve),e(ve,od),e(ve,Po),e(Po,nd),e(ve,ad),e(ve,Jn),e(Jn,sd),e(ve,rd),e(V,id),L(We,V,null),e(V,ld),L(Ue,V,null),g(t,Aa,m),g(t,ye,m),e(ye,Be),e(Be,Yn),L(Kt,Yn,null),e(ye,dd),e(ye,Kn),e(Kn,cd),g(t,ja,m),g(t,U,m),L(Zt,U,null),e(U,ud),e(U,J),e(J,pd),e(J,eo),e(eo,md),e(J,hd),e(J,Zn),e(Zn,fd),e(J,gd),e(J,ea),e(ea,_d),e(J,vd),e(U,yd),e(U,to),e(to,bd),e(to,oo),e(oo,Ld),e(to,kd),e(U,xd),e(U,H),L(no,H,null),e(H,wd),e(H,be),e(be,Td),e(be,Co),e(Co,Md),e(be,$d),e(be,ta),e(ta,zd),e(be,qd),e(H,Fd),L(Qe,H,null),e(H,Ed),L(Ve,H,null),Ia=!0},p(t,[m]){const ao={};m&2&&(ao.$$scope={dirty:m,ctx:t}),$e.$set(ao);const oa={};m&2&&(oa.$$scope={dirty:m,ctx:t}),qe.$set(oa);const na={};m&2&&(na.$$scope={dirty:m,ctx:t}),Ie.$set(na);const aa={};m&2&&(aa.$$scope={dirty:m,ctx:t}),Ne.$set(aa);const so={};m&2&&(so.$$scope={dirty:m,ctx:t}),De.$set(so);const sa={};m&2&&(sa.$$scope={dirty:m,ctx:t}),Oe.$set(sa);const ra={};m&2&&(ra.$$scope={dirty:m,ctx:t}),We.$set(ra);const ia={};m&2&&(ia.$$scope={dirty:m,ctx:t}),Ue.$set(ia);const Le={};m&2&&(Le.$$scope={dirty:m,ctx:t}),Qe.$set(Le);const la={};m&2&&(la.$$scope={dirty:m,ctx:t}),Ve.$set(la)},i(t){Ia||(k(l.$$.fragment,t),k(at.$$.fragment,t),k(lt.$$.fragment,t),k(dt.$$.fragment,t),k($e.$$.fragment,t),k(ut.$$.fragment,t),k(pt.$$.fragment,t),k(ht.$$.fragment,t),k(qe.$$.fragment,t),k(ft.$$.fragment,t),k(gt.$$.fragment,t),k(vt.$$.fragment,t),k(yt.$$.fragment,t),k(bt.$$.fragment,t),k(Lt.$$.fragment,t),k(wt.$$.fragment,t),k(Tt.$$.fragment,t),k(Mt.$$.fragment,t),k($t.$$.fragment,t),k(Et.$$.fragment,t),k(Pt.$$.fragment,t),k(jt.$$.fragment,t),k(Ie.$$.fragment,t),k(Ne.$$.fragment,t),k(It.$$.fragment,t),k(Nt.$$.fragment,t),k(Wt.$$.fragment,t),k(De.$$.fragment,t),k(Oe.$$.fragment,t),k(Ut.$$.fragment,t),k(Bt.$$.fragment,t),k(Yt.$$.fragment,t),k(We.$$.fragment,t),k(Ue.$$.fragment,t),k(Kt.$$.fragment,t),k(Zt.$$.fragment,t),k(no.$$.fragment,t),k(Qe.$$.fragment,t),k(Ve.$$.fragment,t),Ia=!0)},o(t){x(l.$$.fragment,t),x(at.$$.fragment,t),x(lt.$$.fragment,t),x(dt.$$.fragment,t),x($e.$$.fragment,t),x(ut.$$.fragment,t),x(pt.$$.fragment,t),x(ht.$$.fragment,t),x(qe.$$.fragment,t),x(ft.$$.fragment,t),x(gt.$$.fragment,t),x(vt.$$.fragment,t),x(yt.$$.fragment,t),x(bt.$$.fragment,t),x(Lt.$$.fragment,t),x(wt.$$.fragment,t),x(Tt.$$.fragment,t),x(Mt.$$.fragment,t),x($t.$$.fragment,t),x(Et.$$.fragment,t),x(Pt.$$.fragment,t),x(jt.$$.fragment,t),x(Ie.$$.fragment,t),x(Ne.$$.fragment,t),x(It.$$.fragment,t),x(Nt.$$.fragment,t),x(Wt.$$.fragment,t),x(De.$$.fragment,t),x(Oe.$$.fragment,t),x(Ut.$$.fragment,t),x(Bt.$$.fragment,t),x(Yt.$$.fragment,t),x(We.$$.fragment,t),x(Ue.$$.fragment,t),x(Kt.$$.fragment,t),x(Zt.$$.fragment,t),x(no.$$.fragment,t),x(Qe.$$.fragment,t),x(Ve.$$.fragment,t),Ia=!1},d(t){o(p),t&&o(T),t&&o(_),w(l),t&&o(da),t&&o(ae),w(at),t&&o(ca),t&&o(K),t&&o(ua),t&&o(io),t&&o(pa),t&&o(lo),t&&o(ma),t&&o(co),t&&o(ha),t&&o(xe),t&&o(fa),t&&o(we),t&&o(ga),t&&o(Te),t&&o(_a),t&&o(Z),t&&o(va),t&&o(re),w(lt),t&&o(ya),t&&o(N),w(dt),w($e),t&&o(ba),t&&o(de),w(ut),t&&o(La),t&&o(S),w(pt),w(ht),w(qe),t&&o(ka),t&&o(ce),w(ft),t&&o(xa),t&&o(A),w(gt),w(vt),w(yt),t&&o(wa),t&&o(ue),w(bt),t&&o(Ta),t&&o(D),w(Lt),w(wt),t&&o(Ma),t&&o(pe),w(Tt),t&&o($a),t&&o(I),w(Mt),w($t),t&&o(za),t&&o(me),w(Et),t&&o(qa),t&&o(X),w(Pt),w(jt),w(Ie),w(Ne),t&&o(Fa),t&&o(fe),w(It),t&&o(Ea),t&&o(O),w(Nt),w(Wt),w(De),w(Oe),t&&o(Pa),t&&o(_e),w(Ut),t&&o(Ca),t&&o(R),w(Bt),w(Yt),w(We),w(Ue),t&&o(Aa),t&&o(ye),w(Kt),t&&o(ja),t&&o(U),w(Zt),w(no),w(Qe),w(Ve)}}}const Zu={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function ep(q){return Ru(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ip extends Iu{constructor(p){super();Nu(this,p,ep,Ku,Su,{})}}export{ip as default,Zu as metadata};
