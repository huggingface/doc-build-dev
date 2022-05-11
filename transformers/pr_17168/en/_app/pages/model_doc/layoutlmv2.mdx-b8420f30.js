import{S as mv,i as hv,s as fv,e as s,k as d,w as v,t as n,M as gv,c as r,d as t,m as p,a as i,x as y,h as a,b as l,F as e,g as u,y as b,q as L,o as w,B as k,v as _v,L as ua}from"../../chunks/vendor-6b77c823.js";import{T as Ni}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-1088f2fb.js";import{C as K}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as le}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as pa}from"../../chunks/ExampleCodeBlock-5212b321.js";function vv(P){let h,T,f,g,x;return g=new K({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=s("p"),T=n("Example:"),f=d(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Example:"),_.forEach(t),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,T),u(m,f,_),b(g,m,_),x=!0},p:ua,i(m){x||(L(g.$$.fragment,m),x=!0)},o(m){w(g.$$.fragment,m),x=!1},d(m){m&&t(h),m&&t(f),k(g,m)}}}function yv(P){let h,T,f,g,x;return g=new K({props:{code:`from transformers import LayoutLMv2FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=s("p"),T=n("Examples:"),f=d(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Examples:"),_.forEach(t),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,T),u(m,f,_),b(g,m,_),x=!0},p:ua,i(m){x||(L(g.$$.fragment,m),x=!0)},o(m){w(g.$$.fragment,m),x=!1},d(m){m&&t(h),m&&t(f),k(g,m)}}}function bv(P){let h,T,f,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(t),x=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(m,_){u(m,h,_),e(h,T),e(h,f),e(f,g),e(h,x)},d(m){m&&t(h)}}}function Lv(P){let h,T,f,g,x;return g=new K({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=s("p"),T=n("Examples:"),f=d(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Examples:"),_.forEach(t),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,T),u(m,f,_),b(g,m,_),x=!0},p:ua,i(m){x||(L(g.$$.fragment,m),x=!0)},o(m){w(g.$$.fragment,m),x=!1},d(m){m&&t(h),m&&t(f),k(g,m)}}}function wv(P){let h,T,f,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(t),x=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(m,_){u(m,h,_),e(h,T),e(h,f),e(f,g),e(h,x)},d(m){m&&t(h)}}}function kv(P){let h,T,f,g,x;return g=new K({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=s("p"),T=n("Examples:"),f=d(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Examples:"),_.forEach(t),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,T),u(m,f,_),b(g,m,_),x=!0},p:ua,i(m){x||(L(g.$$.fragment,m),x=!0)},o(m){w(g.$$.fragment,m),x=!1},d(m){m&&t(h),m&&t(f),k(g,m)}}}function xv(P){let h,T,f,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(t),x=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(m,_){u(m,h,_),e(h,T),e(h,f),e(f,g),e(h,x)},d(m){m&&t(h)}}}function Tv(P){let h,T,f,g,x;return g=new K({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=s("p"),T=n("Examples:"),f=d(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Examples:"),_.forEach(t),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,T),u(m,f,_),b(g,m,_),x=!0},p:ua,i(m){x||(L(g.$$.fragment,m),x=!0)},o(m){w(g.$$.fragment,m),x=!1},d(m){m&&t(h),m&&t(f),k(g,m)}}}function Mv(P){let h,T,f,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);T=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(t),x=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(m,_){u(m,h,_),e(h,T),e(h,f),e(f,g),e(h,x)},d(m){m&&t(h)}}}function $v(P){let h,T;return h=new K({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
from PIL import Image
from datasets import load_dataset

set_seed(88)
processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForQuestionAnswering.from_pretrained("microsoft/layoutlmv2-base-uncased")

dataset = load_dataset("hf-internal-testing/fixtures_docvqa")
image_path = dataset["test"][0]["file"]
image = Image.open(image_path).convert("RGB")
question = "When is coffee break?"
encoding = processor(image, question, return_tensors="pt")

outputs = model(**encoding)
predicted_start_idx = outputs.start_logits.argmax(-1).item()
predicted_end_idx = outputs.end_logits.argmax(-1).item()
predicted_start_idx, predicted_end_idx
predicted_answer = processor.tokenizer.decode(encoding.input_ids.squeeze()[predicted_start_idx:predicted_end_idx+1])
predicted_answer`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/fixtures_docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_path = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(image_path).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;When is coffee break?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx = outputs.start_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_end_idx = outputs.end_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx, predicted_end_idx
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = processor.tokenizer.decode(encoding.input_ids.squeeze()[predicted_start_idx:predicted_end_idx+<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public refrigerated warehousing industry is looking for. plus questions from the floor. dr. emil m. mrak, university of cal - ifornia, chairman, trrf board ; sam r. cecil, university of georgia college of agriculture ; dr. stanley charm, tufts university school of medicine ; dr. robert h. cotton, itt continental baking company ; dr. owen fennema, university of wis - consin ; dr. robert e. hardenburg, usda. questions and answers exhibits open capt. jack stone&#x27;</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),T=!0},p:ua,i(f){T||(L(h.$$.fragment,f),T=!0)},o(f){w(h.$$.fragment,f),T=!1},d(f){k(h,f)}}}function Ev(P){let h,T,f,g,x,m,_,O,Si,pr,Te,We,ma,$o,Ri,ha,Ui,ur,ue,Bi,Eo,Wi,Vi,en,Qi,Gi,mr,me,X,Hi,zo,Ki,Xi,qo,Yi,Zi,Fo,Ji,el,Po,ol,tl,nl,jo,al,Co,sl,rl,il,Io,ll,Ao,cl,dl,hr,on,pl,fr,tn,fa,ul,gr,nn,ml,_r,W,ga,hl,fl,Do,gl,Oo,_l,vl,yl,No,bl,So,Ll,wl,kl,Me,xl,Ro,Tl,Ml,Uo,$l,El,zl,M,ql,_a,Fl,Pl,an,jl,Cl,va,Il,Al,ya,Dl,Ol,ba,Nl,Sl,La,Rl,Ul,wa,Bl,Wl,ka,Vl,Ql,xa,Gl,Hl,sn,Kl,Xl,Bo,Yl,Zl,Wo,Jl,ec,vr,Vo,yr,he,oc,Ta,tc,nc,Ma,ac,sc,br,Qo,Lr,Ve,rc,rn,ic,lc,wr,fe,I,cc,ln,dc,pc,$a,uc,mc,Ea,hc,fc,cn,gc,_c,za,vc,yc,qa,bc,Lc,Fa,wc,kc,xc,Go,Tc,dn,Mc,$c,Ec,Ho,zc,Pa,qc,Fc,kr,Qe,Pc,pn,jc,Cc,xr,$e,Ge,ja,Ko,Ic,Ca,Ac,Tr,V,Dc,un,Oc,Nc,mn,Sc,Rc,hn,Uc,Bc,fn,Wc,Vc,Mr,Xo,$r,E,Qc,gn,Gc,Hc,_n,Kc,Xc,Ia,Yc,Zc,vn,Jc,ed,yn,od,td,Aa,nd,ad,Da,sd,rd,Oa,id,ld,Na,cd,dd,Sa,pd,ud,Er,U,bn,md,hd,Yo,fd,gd,Ln,_d,vd,Ra,yd,bd,Ua,Ld,wd,zr,wn,kd,qr,kn,Ba,xd,Fr,xn,Td,Pr,Zo,jr,Tn,Wa,Md,Cr,ge,$d,Va,Ed,zd,Qa,qd,Fd,Ir,Jo,Ar,Mn,Ga,Pd,Dr,Q,jd,Ha,Cd,Id,Ka,Ad,Dd,Xa,Od,Nd,Ya,Sd,Rd,Or,et,Nr,$n,Za,Ud,Sr,En,Bd,Rr,ot,Ur,zn,Ja,Wd,Br,qn,Vd,Wr,tt,Vr,Ee,He,es,nt,Qd,os,Gd,Qr,Y,at,Hd,ze,Kd,Fn,Xd,Yd,st,Zd,Jd,ep,qe,op,Pn,tp,np,jn,ap,sp,rp,Ke,Gr,Fe,Xe,ts,rt,ip,ns,lp,Hr,Z,it,cp,as,dp,pp,lt,up,ss,mp,hp,fp,_e,ct,gp,rs,_p,vp,Ye,Kr,Pe,Ze,is,dt,yp,ls,bp,Xr,N,pt,Lp,S,wp,Cn,kp,xp,cs,Tp,Mp,ds,$p,Ep,ps,zp,qp,us,Fp,Pp,ms,jp,Cp,Ip,ut,Ap,In,Dp,Op,Np,An,Dn,Sp,Rp,Up,Je,mt,Bp,hs,Wp,Vp,On,ht,Yr,je,eo,fs,ft,Qp,gs,Gp,Zr,J,gt,Hp,_t,Kp,_s,Xp,Yp,Zp,vt,Jp,Nn,eu,ou,tu,oo,yt,nu,vs,au,Jr,Ce,to,ys,bt,su,bs,ru,ei,B,Lt,iu,Ls,lu,cu,Sn,Rn,du,pu,uu,F,mu,Un,hu,fu,Bn,gu,_u,Wn,vu,yu,ws,bu,Lu,ks,wu,ku,xs,xu,Tu,Ts,Mu,$u,Ms,Eu,zu,$s,qu,Fu,Pu,ve,wt,ju,$,Cu,Es,Iu,Au,kt,zs,Du,Ou,Nu,Vn,Su,Ru,qs,Uu,Bu,Fs,Wu,Vu,xt,Ps,Qu,Gu,Hu,js,Ku,Xu,Qn,Yu,Zu,Cs,Ju,em,Is,om,tm,As,nm,am,Ds,sm,rm,im,Os,lm,oi,Ie,no,Ns,Tt,cm,Ss,dm,ti,ce,Mt,pm,$t,um,Et,mm,hm,fm,ae,zt,gm,Ae,_m,Gn,vm,ym,Rs,bm,Lm,wm,ao,km,so,ni,De,ro,Us,qt,xm,Bs,Tm,ai,ee,Ft,Mm,Pt,$m,jt,Em,zm,qm,Ct,Fm,It,Pm,jm,Cm,se,At,Im,Oe,Am,Hn,Dm,Om,Ws,Nm,Sm,Rm,io,Um,lo,si,Ne,co,Vs,Dt,Bm,Qs,Wm,ri,oe,Ot,Vm,te,Qm,Nt,Gm,Hm,St,Km,Xm,Rt,Ym,Zm,Ut,Jm,eh,oh,Bt,th,Wt,nh,ah,sh,re,Vt,rh,Se,ih,Kn,lh,ch,Gs,dh,ph,uh,po,mh,uo,ii,Re,mo,Hs,Qt,hh,Ks,fh,li,ne,Gt,gh,de,_h,Ht,vh,yh,Xs,bh,Lh,Ys,wh,kh,xh,Kt,Th,Xt,Mh,$h,Eh,A,Yt,zh,Ue,qh,Xn,Fh,Ph,Zs,jh,Ch,Ih,ho,Ah,Js,Dh,Oh,fo,Nh,er,Sh,Rh,or,Uh,Bh,tr,Wh,Vh,go,ci;return m=new le({}),$o=new le({}),Vo=new K({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),Qo=new K({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Ko=new le({}),Xo=new K({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),Zo=new K({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Jo=new K({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),et=new K({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),ot=new K({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),tt=new K({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),nt=new le({}),at=new D({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
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
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Ke=new pa({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[vv]},$$scope:{ctx:P}}}),rt=new le({}),it=new D({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),ct=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L123",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17168/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ye=new pa({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[yv]},$$scope:{ctx:P}}}),dt=new le({}),pt=new D({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L194"}}),mt=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L414"}}),ht=new D({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L394"}}),ft=new le({}),gt=new D({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L66"}}),yt=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L175"}}),bt=new le({}),Lt=new D({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),wt=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),Tt=new le({}),Mt=new D({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L709"}}),zt=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L807",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new Ni({props:{$$slots:{default:[bv]},$$scope:{ctx:P}}}),so=new pa({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[Lv]},$$scope:{ctx:P}}}),qt=new le({}),Ft=new D({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L954"}}),At=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L968",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new Ni({props:{$$slots:{default:[wv]},$$scope:{ctx:P}}}),lo=new pa({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[kv]},$$scope:{ctx:P}}}),Dt=new le({}),Ot=new D({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1123"}}),Vt=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1137",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new Ni({props:{$$slots:{default:[xv]},$$scope:{ctx:P}}}),uo=new pa({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[Tv]},$$scope:{ctx:P}}}),Qt=new le({}),Gt=new D({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1232"}}),Yt=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new Ni({props:{$$slots:{default:[Mv]},$$scope:{ctx:P}}}),go=new pa({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[$v]},$$scope:{ctx:P}}}),{c(){h=s("meta"),T=d(),f=s("h1"),g=s("a"),x=s("span"),v(m.$$.fragment),_=d(),O=s("span"),Si=n("LayoutLMV2"),pr=d(),Te=s("h2"),We=s("a"),ma=s("span"),v($o.$$.fragment),Ri=d(),ha=s("span"),Ui=n("Overview"),ur=d(),ue=s("p"),Bi=n("The LayoutLMV2 model was proposed in "),Eo=s("a"),Wi=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Vi=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),en=s("a"),Qi=n("LayoutLM"),Gi=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),mr=d(),me=s("ul"),X=s("li"),Hi=n("information extraction from scanned documents: the "),zo=s("a"),Ki=n("FUNSD"),Xi=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),qo=s("a"),Yi=n("CORD"),Zi=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Fo=s("a"),Ji=n("SROIE"),el=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Po=s("a"),ol=n("Kleister-NDA"),tl=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),nl=d(),jo=s("li"),al=n("document image classification: the "),Co=s("a"),sl=n("RVL-CDIP"),rl=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),il=d(),Io=s("li"),ll=n("document visual question answering: the "),Ao=s("a"),cl=n("DocVQA"),dl=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),hr=d(),on=s("p"),pl=n("The abstract from the paper is the following:"),fr=d(),tn=s("p"),fa=s("em"),ul=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),gr=d(),nn=s("p"),ml=n("Tips:"),_r=d(),W=s("ul"),ga=s("li"),hl=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),fl=d(),Do=s("li"),gl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Oo=s("a"),_l=n("paper"),vl=n("."),yl=d(),No=s("li"),bl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),So=s("a"),Ll=n("here"),wl=n("."),kl=d(),Me=s("li"),xl=n("LayoutLMv2 uses Facebook AI\u2019s "),Ro=s("a"),Tl=n("Detectron2"),Ml=n(` package for its visual
backbone. See `),Uo=s("a"),$l=n("this link"),El=n(` for installation
instructions.`),zl=d(),M=s("li"),ql=n("In addition to "),_a=s("code"),Fl=n("input_ids"),Pl=n(", "),an=s("a"),jl=n("forward()"),Cl=n(` expects 2 additional inputs, namely
`),va=s("code"),Il=n("image"),Al=n(" and "),ya=s("code"),Dl=n("bbox"),Ol=n(". The "),ba=s("code"),Nl=n("image"),Sl=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),La=s("code"),Rl=n("image"),Ul=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),wa=s("code"),Bl=n("torch.Tensor"),Wl=n(" or a "),ka=s("code"),Vl=n("Detectron2.structures.ImageList"),Ql=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),xa=s("code"),Gl=n("bbox"),Hl=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),sn=s("a"),Kl=n("LayoutLMModel"),Xl=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Bo=s("a"),Yl=n("Tesseract"),Zl=n(" (there\u2019s a "),Wo=s("a"),Jl=n(`Python
wrapper`),ec=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),vr=d(),v(Vo.$$.fragment),yr=d(),he=s("p"),oc=n("Here, "),Ta=s("code"),tc=n("width"),nc=n(" and "),Ma=s("code"),ac=n("height"),sc=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),br=d(),v(Qo.$$.fragment),Lr=d(),Ve=s("p"),rc=n("However, this model includes a brand new "),rn=s("a"),ic=n("LayoutLMv2Processor"),lc=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),wr=d(),fe=s("ul"),I=s("li"),cc=n("Internally, "),ln=s("a"),dc=n("LayoutLMv2Model"),pc=n(" will send the "),$a=s("code"),uc=n("image"),mc=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ea=s("code"),hc=n("image_feature_pool_shape"),fc=n(` attribute of
`),cn=s("a"),gc=n("LayoutLMv2Config"),_c=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),za=s("code"),vc=n("seq_length"),yc=n(" + "),qa=s("code"),bc=n("image_feature_pool_shape[0]"),Lc=n(` *
`),Fa=s("code"),wc=n("config.image_feature_pool_shape[1]"),kc=n("."),xc=d(),Go=s("li"),Tc=n("When calling "),dn=s("a"),Mc=n("from_pretrained()"),$c=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Ec=d(),Ho=s("li"),zc=n("If you want to train the model in a distributed environment, make sure to call "),Pa=s("code"),qc=n("synchronize_batch_norm"),Fc=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),kr=d(),Qe=s("p"),Pc=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),pn=s("a"),jc=n("LayoutXLM\u2019s documentation page"),Cc=n("."),xr=d(),$e=s("h2"),Ge=s("a"),ja=s("span"),v(Ko.$$.fragment),Ic=d(),Ca=s("span"),Ac=n("Usage: LayoutLMv2Processor"),Tr=d(),V=s("p"),Dc=n("The easiest way to prepare data for the model is to use "),un=s("a"),Oc=n("LayoutLMv2Processor"),Nc=n(`, which internally
combines a feature extractor (`),mn=s("a"),Sc=n("LayoutLMv2FeatureExtractor"),Rc=n(`) and a tokenizer
(`),hn=s("a"),Uc=n("LayoutLMv2Tokenizer"),Bc=n(" or "),fn=s("a"),Wc=n("LayoutLMv2TokenizerFast"),Vc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Mr=d(),v(Xo.$$.fragment),$r=d(),E=s("p"),Qc=n("In short, one can provide a document image (and possibly additional data) to "),gn=s("a"),Gc=n("LayoutLMv2Processor"),Hc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),_n=s("a"),Kc=n("LayoutLMv2FeatureExtractor"),Xc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ia=s("code"),Yc=n("image"),Zc=n(` input. The words and
normalized bounding boxes are then provided to `),vn=s("a"),Jc=n("LayoutLMv2Tokenizer"),ed=n(` or
`),yn=s("a"),od=n("LayoutLMv2TokenizerFast"),td=n(", which converts them to token-level "),Aa=s("code"),nd=n("input_ids"),ad=n(`,
`),Da=s("code"),sd=n("attention_mask"),rd=n(", "),Oa=s("code"),id=n("token_type_ids"),ld=n(", "),Na=s("code"),cd=n("bbox"),dd=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Sa=s("code"),pd=n("labels"),ud=n("."),Er=d(),U=s("p"),bn=s("a"),md=n("LayoutLMv2Processor"),hd=n(" uses "),Yo=s("a"),fd=n("PyTesseract"),gd=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),Ln=s("a"),_d=n("LayoutLMv2FeatureExtractor"),vd=n(" with "),Ra=s("code"),yd=n("apply_ocr"),bd=n(" set to "),Ua=s("code"),Ld=n("False"),wd=n("."),zr=d(),wn=s("p"),kd=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),qr=d(),kn=s("p"),Ba=s("strong"),xd=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Fr=d(),xn=s("p"),Td=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Pr=d(),v(Zo.$$.fragment),jr=d(),Tn=s("p"),Wa=s("strong"),Md=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Cr=d(),ge=s("p"),$d=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Va=s("code"),Ed=n("apply_ocr"),zd=n(` set to
`),Qa=s("code"),qd=n("False"),Fd=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Ir=d(),v(Jo.$$.fragment),Ar=d(),Mn=s("p"),Ga=s("strong"),Pd=n("Use case 3: token classification (training), apply_ocr=False"),Dr=d(),Q=s("p"),jd=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ha=s("code"),Cd=n("labels"),Id=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ka=s("code"),Ad=n("ignore_index"),Dd=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Xa=s("code"),Od=n("only_label_first_subword"),Nd=n(" set to "),Ya=s("code"),Sd=n("False"),Rd=n("."),Or=d(),v(et.$$.fragment),Nr=d(),$n=s("p"),Za=s("strong"),Ud=n("Use case 4: visual question answering (inference), apply_ocr=True"),Sr=d(),En=s("p"),Bd=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Rr=d(),v(ot.$$.fragment),Ur=d(),zn=s("p"),Ja=s("strong"),Wd=n("Use case 5: visual question answering (inference), apply_ocr=False"),Br=d(),qn=s("p"),Vd=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Wr=d(),v(tt.$$.fragment),Vr=d(),Ee=s("h2"),He=s("a"),es=s("span"),v(nt.$$.fragment),Qd=d(),os=s("span"),Gd=n("LayoutLMv2Config"),Qr=d(),Y=s("div"),v(at.$$.fragment),Hd=d(),ze=s("p"),Kd=n("This is the configuration class to store the configuration of a "),Fn=s("a"),Xd=n("LayoutLMv2Model"),Yd=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),st=s("a"),Zd=n("microsoft/layoutlmv2-base-uncased"),Jd=n(" architecture."),ep=d(),qe=s("p"),op=n("Configuration objects inherit from "),Pn=s("a"),tp=n("PretrainedConfig"),np=n(` and can be used to control the model outputs. Read the
documentation from `),jn=s("a"),ap=n("PretrainedConfig"),sp=n(" for more information."),rp=d(),v(Ke.$$.fragment),Gr=d(),Fe=s("h2"),Xe=s("a"),ts=s("span"),v(rt.$$.fragment),ip=d(),ns=s("span"),lp=n("LayoutLMv2FeatureExtractor"),Hr=d(),Z=s("div"),v(it.$$.fragment),cp=d(),as=s("p"),dp=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),pp=d(),lt=s("p"),up=n("This feature extractor inherits from "),ss=s("code"),mp=n("PreTrainedFeatureExtractor()"),hp=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),fp=d(),_e=s("div"),v(ct.$$.fragment),gp=d(),rs=s("p"),_p=n("Main method to prepare for the model one or several image(s)."),vp=d(),v(Ye.$$.fragment),Kr=d(),Pe=s("h2"),Ze=s("a"),is=s("span"),v(dt.$$.fragment),yp=d(),ls=s("span"),bp=n("LayoutLMv2Tokenizer"),Xr=d(),N=s("div"),v(pt.$$.fragment),Lp=d(),S=s("p"),wp=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Cn=s("a"),kp=n("LayoutLMv2Tokenizer"),xp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),cs=s("code"),Tp=n("input_ids"),Mp=n(", "),ds=s("code"),$p=n("attention_mask"),Ep=n(", "),ps=s("code"),zp=n("token_type_ids"),qp=n(", "),us=s("code"),Fp=n("bbox"),Pp=n(`, and
optional `),ms=s("code"),jp=n("labels"),Cp=n(" (for token classification)."),Ip=d(),ut=s("p"),Ap=n("This tokenizer inherits from "),In=s("a"),Dp=n("PreTrainedTokenizer"),Op=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Np=d(),An=s("p"),Dn=s("a"),Sp=n("LayoutLMv2Tokenizer"),Rp=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Up=d(),Je=s("div"),v(mt.$$.fragment),Bp=d(),hs=s("p"),Wp=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Vp=d(),On=s("div"),v(ht.$$.fragment),Yr=d(),je=s("h2"),eo=s("a"),fs=s("span"),v(ft.$$.fragment),Qp=d(),gs=s("span"),Gp=n("LayoutLMv2TokenizerFast"),Zr=d(),J=s("div"),v(gt.$$.fragment),Hp=d(),_t=s("p"),Kp=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),_s=s("em"),Xp=n("tokenizers"),Yp=n(" library). Based on WordPiece."),Zp=d(),vt=s("p"),Jp=n("This tokenizer inherits from "),Nn=s("a"),eu=n("PreTrainedTokenizerFast"),ou=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),tu=d(),oo=s("div"),v(yt.$$.fragment),nu=d(),vs=s("p"),au=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Jr=d(),Ce=s("h2"),to=s("a"),ys=s("span"),v(bt.$$.fragment),su=d(),bs=s("span"),ru=n("LayoutLMv2Processor"),ei=d(),B=s("div"),v(Lt.$$.fragment),iu=d(),Ls=s("p"),lu=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),cu=d(),Sn=s("p"),Rn=s("a"),du=n("LayoutLMv2Processor"),pu=n(" offers all the functionalities you need to prepare data for the model."),uu=d(),F=s("p"),mu=n("It first uses "),Un=s("a"),hu=n("LayoutLMv2FeatureExtractor"),fu=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Bn=s("a"),gu=n("LayoutLMv2Tokenizer"),_u=n(` or
`),Wn=s("a"),vu=n("LayoutLMv2TokenizerFast"),yu=n(", which turns the words and bounding boxes into token-level "),ws=s("code"),bu=n("input_ids"),Lu=n(`,
`),ks=s("code"),wu=n("attention_mask"),ku=n(", "),xs=s("code"),xu=n("token_type_ids"),Tu=n(", "),Ts=s("code"),Mu=n("bbox"),$u=n(". Optionally, one can provide integer "),Ms=s("code"),Eu=n("word_labels"),zu=n(`, which are turned
into token-level `),$s=s("code"),qu=n("labels"),Fu=n(" for token classification tasks (such as FUNSD, CORD)."),Pu=d(),ve=s("div"),v(wt.$$.fragment),ju=d(),$=s("p"),Cu=n("This method first forwards the "),Es=s("code"),Iu=n("images"),Au=n(" argument to "),kt=s("a"),zs=s("strong"),Du=n("call"),Ou=n("()"),Nu=n(`. In case
`),Vn=s("a"),Su=n("LayoutLMv2FeatureExtractor"),Ru=n(" was initialized with "),qs=s("code"),Uu=n("apply_ocr"),Bu=n(" set to "),Fs=s("code"),Wu=n("True"),Vu=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),xt=s("a"),Ps=s("strong"),Qu=n("call"),Gu=n("()"),Hu=n(` and returns the output,
together with resized `),js=s("code"),Ku=n("images"),Xu=n(". In case "),Qn=s("a"),Yu=n("LayoutLMv2FeatureExtractor"),Zu=n(" was initialized with "),Cs=s("code"),Ju=n("apply_ocr"),em=n(` set to
`),Is=s("code"),om=n("False"),tm=n(", it passes the words ("),As=s("code"),nm=n("text"),am=n("/"),Ds=s("code"),sm=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),rm=n("."),im=d(),Os=s("p"),lm=n("Please refer to the docstring of the above two methods for more information."),oi=d(),Ie=s("h2"),no=s("a"),Ns=s("span"),v(Tt.$$.fragment),cm=d(),Ss=s("span"),dm=n("LayoutLMv2Model"),ti=d(),ce=s("div"),v(Mt.$$.fragment),pm=d(),$t=s("p"),um=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Et=s("a"),mm=n("torch.nn.Module"),hm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fm=d(),ae=s("div"),v(zt.$$.fragment),gm=d(),Ae=s("p"),_m=n("The "),Gn=s("a"),vm=n("LayoutLMv2Model"),ym=n(" forward method, overrides the "),Rs=s("code"),bm=n("__call__"),Lm=n(" special method."),wm=d(),v(ao.$$.fragment),km=d(),v(so.$$.fragment),ni=d(),De=s("h2"),ro=s("a"),Us=s("span"),v(qt.$$.fragment),xm=d(),Bs=s("span"),Tm=n("LayoutLMv2ForSequenceClassification"),ai=d(),ee=s("div"),v(Ft.$$.fragment),Mm=d(),Pt=s("p"),$m=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),jt=s("a"),Em=n("RVL-CDIP"),zm=n(" dataset."),qm=d(),Ct=s("p"),Fm=n("This model is a PyTorch "),It=s("a"),Pm=n("torch.nn.Module"),jm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cm=d(),se=s("div"),v(At.$$.fragment),Im=d(),Oe=s("p"),Am=n("The "),Hn=s("a"),Dm=n("LayoutLMv2ForSequenceClassification"),Om=n(" forward method, overrides the "),Ws=s("code"),Nm=n("__call__"),Sm=n(" special method."),Rm=d(),v(io.$$.fragment),Um=d(),v(lo.$$.fragment),si=d(),Ne=s("h2"),co=s("a"),Vs=s("span"),v(Dt.$$.fragment),Bm=d(),Qs=s("span"),Wm=n("LayoutLMv2ForTokenClassification"),ri=d(),oe=s("div"),v(Ot.$$.fragment),Vm=d(),te=s("p"),Qm=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Nt=s("a"),Gm=n("FUNSD"),Hm=n(", "),St=s("a"),Km=n("SROIE"),Xm=n(`,
`),Rt=s("a"),Ym=n("CORD"),Zm=n(" and "),Ut=s("a"),Jm=n("Kleister-NDA"),eh=n("."),oh=d(),Bt=s("p"),th=n("This model is a PyTorch "),Wt=s("a"),nh=n("torch.nn.Module"),ah=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sh=d(),re=s("div"),v(Vt.$$.fragment),rh=d(),Se=s("p"),ih=n("The "),Kn=s("a"),lh=n("LayoutLMv2ForTokenClassification"),ch=n(" forward method, overrides the "),Gs=s("code"),dh=n("__call__"),ph=n(" special method."),uh=d(),v(po.$$.fragment),mh=d(),v(uo.$$.fragment),ii=d(),Re=s("h2"),mo=s("a"),Hs=s("span"),v(Qt.$$.fragment),hh=d(),Ks=s("span"),fh=n("LayoutLMv2ForQuestionAnswering"),li=d(),ne=s("div"),v(Gt.$$.fragment),gh=d(),de=s("p"),_h=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Ht=s("a"),vh=n("DocVQA"),yh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Xs=s("code"),bh=n("span start logits"),Lh=n(" and "),Ys=s("code"),wh=n("span end logits"),kh=n(")."),xh=d(),Kt=s("p"),Th=n("This model is a PyTorch "),Xt=s("a"),Mh=n("torch.nn.Module"),$h=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Eh=d(),A=s("div"),v(Yt.$$.fragment),zh=d(),Ue=s("p"),qh=n("The "),Xn=s("a"),Fh=n("LayoutLMv2ForQuestionAnswering"),Ph=n(" forward method, overrides the "),Zs=s("code"),jh=n("__call__"),Ch=n(" special method."),Ih=d(),v(ho.$$.fragment),Ah=d(),Js=s("p"),Dh=n("Examples:"),Oh=d(),fo=s("p"),Nh=n(`Passing the doctests requires installation of detectron2, torchvision and tesseract. Run the following to install them:
`),er=s("code"),Sh=n("python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'"),Rh=d(),or=s("code"),Uh=n("python -m pip install torchvision tesseract"),Bh=d(),tr=s("p"),Wh=n("Inference Example (Note the result is quite bad without further fine-tuning)"),Vh=d(),v(go.$$.fragment),this.h()},l(o){const c=gv('[data-svelte="svelte-1phssyn"]',document.head);h=r(c,"META",{name:!0,content:!0}),c.forEach(t),T=p(o),f=r(o,"H1",{class:!0});var Zt=i(f);g=r(Zt,"A",{id:!0,class:!0,href:!0});var nr=i(g);x=r(nr,"SPAN",{});var ar=i(x);y(m.$$.fragment,ar),ar.forEach(t),nr.forEach(t),_=p(Zt),O=r(Zt,"SPAN",{});var sr=i(O);Si=a(sr,"LayoutLMV2"),sr.forEach(t),Zt.forEach(t),pr=p(o),Te=r(o,"H2",{class:!0});var Jt=i(Te);We=r(Jt,"A",{id:!0,class:!0,href:!0});var rr=i(We);ma=r(rr,"SPAN",{});var ir=i(ma);y($o.$$.fragment,ir),ir.forEach(t),rr.forEach(t),Ri=p(Jt),ha=r(Jt,"SPAN",{});var lr=i(ha);Ui=a(lr,"Overview"),lr.forEach(t),Jt.forEach(t),ur=p(o),ue=r(o,"P",{});var Be=i(ue);Bi=a(Be,"The LayoutLMV2 model was proposed in "),Eo=r(Be,"A",{href:!0,rel:!0});var cr=i(Eo);Wi=a(cr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),cr.forEach(t),Vi=a(Be,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),en=r(Be,"A",{href:!0});var Xh=i(en);Qi=a(Xh,"LayoutLM"),Xh.forEach(t),Gi=a(Be,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Be.forEach(t),mr=p(o),me=r(o,"UL",{});var Yn=i(me);X=r(Yn,"LI",{});var ye=i(X);Hi=a(ye,"information extraction from scanned documents: the "),zo=r(ye,"A",{href:!0,rel:!0});var Yh=i(zo);Ki=a(Yh,"FUNSD"),Yh.forEach(t),Xi=a(ye,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),qo=r(ye,"A",{href:!0,rel:!0});var Zh=i(qo);Yi=a(Zh,"CORD"),Zh.forEach(t),Zi=a(ye,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Fo=r(ye,"A",{href:!0,rel:!0});var Jh=i(Fo);Ji=a(Jh,"SROIE"),Jh.forEach(t),el=a(ye,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Po=r(ye,"A",{href:!0,rel:!0});var ef=i(Po);ol=a(ef,"Kleister-NDA"),ef.forEach(t),tl=a(ye,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),ye.forEach(t),nl=p(Yn),jo=r(Yn,"LI",{});var di=i(jo);al=a(di,"document image classification: the "),Co=r(di,"A",{href:!0,rel:!0});var of=i(Co);sl=a(of,"RVL-CDIP"),of.forEach(t),rl=a(di,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),di.forEach(t),il=p(Yn),Io=r(Yn,"LI",{});var pi=i(Io);ll=a(pi,"document visual question answering: the "),Ao=r(pi,"A",{href:!0,rel:!0});var tf=i(Ao);cl=a(tf,"DocVQA"),tf.forEach(t),dl=a(pi,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),pi.forEach(t),Yn.forEach(t),hr=p(o),on=r(o,"P",{});var nf=i(on);pl=a(nf,"The abstract from the paper is the following:"),nf.forEach(t),fr=p(o),tn=r(o,"P",{});var af=i(tn);fa=r(af,"EM",{});var sf=i(fa);ul=a(sf,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),sf.forEach(t),af.forEach(t),gr=p(o),nn=r(o,"P",{});var rf=i(nn);ml=a(rf,"Tips:"),rf.forEach(t),_r=p(o),W=r(o,"UL",{});var be=i(W);ga=r(be,"LI",{});var lf=i(ga);hl=a(lf,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),lf.forEach(t),fl=p(be),Do=r(be,"LI",{});var ui=i(Do);gl=a(ui,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Oo=r(ui,"A",{href:!0,rel:!0});var cf=i(Oo);_l=a(cf,"paper"),cf.forEach(t),vl=a(ui,"."),ui.forEach(t),yl=p(be),No=r(be,"LI",{});var mi=i(No);bl=a(mi,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),So=r(mi,"A",{href:!0,rel:!0});var df=i(So);Ll=a(df,"here"),df.forEach(t),wl=a(mi,"."),mi.forEach(t),kl=p(be),Me=r(be,"LI",{});var Zn=i(Me);xl=a(Zn,"LayoutLMv2 uses Facebook AI\u2019s "),Ro=r(Zn,"A",{href:!0,rel:!0});var pf=i(Ro);Tl=a(pf,"Detectron2"),pf.forEach(t),Ml=a(Zn,` package for its visual
backbone. See `),Uo=r(Zn,"A",{href:!0,rel:!0});var uf=i(Uo);$l=a(uf,"this link"),uf.forEach(t),El=a(Zn,` for installation
instructions.`),Zn.forEach(t),zl=p(be),M=r(be,"LI",{});var z=i(M);ql=a(z,"In addition to "),_a=r(z,"CODE",{});var mf=i(_a);Fl=a(mf,"input_ids"),mf.forEach(t),Pl=a(z,", "),an=r(z,"A",{href:!0});var hf=i(an);jl=a(hf,"forward()"),hf.forEach(t),Cl=a(z,` expects 2 additional inputs, namely
`),va=r(z,"CODE",{});var ff=i(va);Il=a(ff,"image"),ff.forEach(t),Al=a(z," and "),ya=r(z,"CODE",{});var gf=i(ya);Dl=a(gf,"bbox"),gf.forEach(t),Ol=a(z,". The "),ba=r(z,"CODE",{});var _f=i(ba);Nl=a(_f,"image"),_f.forEach(t),Sl=a(z,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),La=r(z,"CODE",{});var vf=i(La);Rl=a(vf,"image"),vf.forEach(t),Ul=a(z,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),wa=r(z,"CODE",{});var yf=i(wa);Bl=a(yf,"torch.Tensor"),yf.forEach(t),Wl=a(z," or a "),ka=r(z,"CODE",{});var bf=i(ka);Vl=a(bf,"Detectron2.structures.ImageList"),bf.forEach(t),Ql=a(z,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),xa=r(z,"CODE",{});var Lf=i(xa);Gl=a(Lf,"bbox"),Lf.forEach(t),Hl=a(z,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),sn=r(z,"A",{href:!0});var wf=i(sn);Kl=a(wf,"LayoutLMModel"),wf.forEach(t),Xl=a(z,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Bo=r(z,"A",{href:!0,rel:!0});var kf=i(Bo);Yl=a(kf,"Tesseract"),kf.forEach(t),Zl=a(z," (there\u2019s a "),Wo=r(z,"A",{href:!0,rel:!0});var xf=i(Wo);Jl=a(xf,`Python
wrapper`),xf.forEach(t),ec=a(z,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),z.forEach(t),be.forEach(t),vr=p(o),y(Vo.$$.fragment,o),yr=p(o),he=r(o,"P",{});var Jn=i(he);oc=a(Jn,"Here, "),Ta=r(Jn,"CODE",{});var Tf=i(Ta);tc=a(Tf,"width"),Tf.forEach(t),nc=a(Jn," and "),Ma=r(Jn,"CODE",{});var Mf=i(Ma);ac=a(Mf,"height"),Mf.forEach(t),sc=a(Jn,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Jn.forEach(t),br=p(o),y(Qo.$$.fragment,o),Lr=p(o),Ve=r(o,"P",{});var hi=i(Ve);rc=a(hi,"However, this model includes a brand new "),rn=r(hi,"A",{href:!0});var $f=i(rn);ic=a($f,"LayoutLMv2Processor"),$f.forEach(t),lc=a(hi,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),hi.forEach(t),wr=p(o),fe=r(o,"UL",{});var ea=i(fe);I=r(ea,"LI",{});var R=i(I);cc=a(R,"Internally, "),ln=r(R,"A",{href:!0});var Ef=i(ln);dc=a(Ef,"LayoutLMv2Model"),Ef.forEach(t),pc=a(R," will send the "),$a=r(R,"CODE",{});var zf=i($a);uc=a(zf,"image"),zf.forEach(t),mc=a(R,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ea=r(R,"CODE",{});var qf=i(Ea);hc=a(qf,"image_feature_pool_shape"),qf.forEach(t),fc=a(R,` attribute of
`),cn=r(R,"A",{href:!0});var Ff=i(cn);gc=a(Ff,"LayoutLMv2Config"),Ff.forEach(t),_c=a(R,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),za=r(R,"CODE",{});var Pf=i(za);vc=a(Pf,"seq_length"),Pf.forEach(t),yc=a(R," + "),qa=r(R,"CODE",{});var jf=i(qa);bc=a(jf,"image_feature_pool_shape[0]"),jf.forEach(t),Lc=a(R,` *
`),Fa=r(R,"CODE",{});var Cf=i(Fa);wc=a(Cf,"config.image_feature_pool_shape[1]"),Cf.forEach(t),kc=a(R,"."),R.forEach(t),xc=p(ea),Go=r(ea,"LI",{});var fi=i(Go);Tc=a(fi,"When calling "),dn=r(fi,"A",{href:!0});var If=i(dn);Mc=a(If,"from_pretrained()"),If.forEach(t),$c=a(fi,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),fi.forEach(t),Ec=p(ea),Ho=r(ea,"LI",{});var gi=i(Ho);zc=a(gi,"If you want to train the model in a distributed environment, make sure to call "),Pa=r(gi,"CODE",{});var Af=i(Pa);qc=a(Af,"synchronize_batch_norm"),Af.forEach(t),Fc=a(gi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),gi.forEach(t),ea.forEach(t),kr=p(o),Qe=r(o,"P",{});var _i=i(Qe);Pc=a(_i,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),pn=r(_i,"A",{href:!0});var Df=i(pn);jc=a(Df,"LayoutXLM\u2019s documentation page"),Df.forEach(t),Cc=a(_i,"."),_i.forEach(t),xr=p(o),$e=r(o,"H2",{class:!0});var vi=i($e);Ge=r(vi,"A",{id:!0,class:!0,href:!0});var Of=i(Ge);ja=r(Of,"SPAN",{});var Nf=i(ja);y(Ko.$$.fragment,Nf),Nf.forEach(t),Of.forEach(t),Ic=p(vi),Ca=r(vi,"SPAN",{});var Sf=i(Ca);Ac=a(Sf,"Usage: LayoutLMv2Processor"),Sf.forEach(t),vi.forEach(t),Tr=p(o),V=r(o,"P",{});var Le=i(V);Dc=a(Le,"The easiest way to prepare data for the model is to use "),un=r(Le,"A",{href:!0});var Rf=i(un);Oc=a(Rf,"LayoutLMv2Processor"),Rf.forEach(t),Nc=a(Le,`, which internally
combines a feature extractor (`),mn=r(Le,"A",{href:!0});var Uf=i(mn);Sc=a(Uf,"LayoutLMv2FeatureExtractor"),Uf.forEach(t),Rc=a(Le,`) and a tokenizer
(`),hn=r(Le,"A",{href:!0});var Bf=i(hn);Uc=a(Bf,"LayoutLMv2Tokenizer"),Bf.forEach(t),Bc=a(Le," or "),fn=r(Le,"A",{href:!0});var Wf=i(fn);Wc=a(Wf,"LayoutLMv2TokenizerFast"),Wf.forEach(t),Vc=a(Le,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Le.forEach(t),Mr=p(o),y(Xo.$$.fragment,o),$r=p(o),E=r(o,"P",{});var j=i(E);Qc=a(j,"In short, one can provide a document image (and possibly additional data) to "),gn=r(j,"A",{href:!0});var Vf=i(gn);Gc=a(Vf,"LayoutLMv2Processor"),Vf.forEach(t),Hc=a(j,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),_n=r(j,"A",{href:!0});var Qf=i(_n);Kc=a(Qf,"LayoutLMv2FeatureExtractor"),Qf.forEach(t),Xc=a(j,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ia=r(j,"CODE",{});var Gf=i(Ia);Yc=a(Gf,"image"),Gf.forEach(t),Zc=a(j,` input. The words and
normalized bounding boxes are then provided to `),vn=r(j,"A",{href:!0});var Hf=i(vn);Jc=a(Hf,"LayoutLMv2Tokenizer"),Hf.forEach(t),ed=a(j,` or
`),yn=r(j,"A",{href:!0});var Kf=i(yn);od=a(Kf,"LayoutLMv2TokenizerFast"),Kf.forEach(t),td=a(j,", which converts them to token-level "),Aa=r(j,"CODE",{});var Xf=i(Aa);nd=a(Xf,"input_ids"),Xf.forEach(t),ad=a(j,`,
`),Da=r(j,"CODE",{});var Yf=i(Da);sd=a(Yf,"attention_mask"),Yf.forEach(t),rd=a(j,", "),Oa=r(j,"CODE",{});var Zf=i(Oa);id=a(Zf,"token_type_ids"),Zf.forEach(t),ld=a(j,", "),Na=r(j,"CODE",{});var Jf=i(Na);cd=a(Jf,"bbox"),Jf.forEach(t),dd=a(j,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Sa=r(j,"CODE",{});var eg=i(Sa);pd=a(eg,"labels"),eg.forEach(t),ud=a(j,"."),j.forEach(t),Er=p(o),U=r(o,"P",{});var pe=i(U);bn=r(pe,"A",{href:!0});var og=i(bn);md=a(og,"LayoutLMv2Processor"),og.forEach(t),hd=a(pe," uses "),Yo=r(pe,"A",{href:!0,rel:!0});var tg=i(Yo);fd=a(tg,"PyTesseract"),tg.forEach(t),gd=a(pe,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),Ln=r(pe,"A",{href:!0});var ng=i(Ln);_d=a(ng,"LayoutLMv2FeatureExtractor"),ng.forEach(t),vd=a(pe," with "),Ra=r(pe,"CODE",{});var ag=i(Ra);yd=a(ag,"apply_ocr"),ag.forEach(t),bd=a(pe," set to "),Ua=r(pe,"CODE",{});var sg=i(Ua);Ld=a(sg,"False"),sg.forEach(t),wd=a(pe,"."),pe.forEach(t),zr=p(o),wn=r(o,"P",{});var rg=i(wn);kd=a(rg,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),rg.forEach(t),qr=p(o),kn=r(o,"P",{});var ig=i(kn);Ba=r(ig,"STRONG",{});var lg=i(Ba);xd=a(lg,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),lg.forEach(t),ig.forEach(t),Fr=p(o),xn=r(o,"P",{});var cg=i(xn);Td=a(cg,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),cg.forEach(t),Pr=p(o),y(Zo.$$.fragment,o),jr=p(o),Tn=r(o,"P",{});var dg=i(Tn);Wa=r(dg,"STRONG",{});var pg=i(Wa);Md=a(pg,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),pg.forEach(t),dg.forEach(t),Cr=p(o),ge=r(o,"P",{});var oa=i(ge);$d=a(oa,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Va=r(oa,"CODE",{});var ug=i(Va);Ed=a(ug,"apply_ocr"),ug.forEach(t),zd=a(oa,` set to
`),Qa=r(oa,"CODE",{});var mg=i(Qa);qd=a(mg,"False"),mg.forEach(t),Fd=a(oa,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),oa.forEach(t),Ir=p(o),y(Jo.$$.fragment,o),Ar=p(o),Mn=r(o,"P",{});var hg=i(Mn);Ga=r(hg,"STRONG",{});var fg=i(Ga);Pd=a(fg,"Use case 3: token classification (training), apply_ocr=False"),fg.forEach(t),hg.forEach(t),Dr=p(o),Q=r(o,"P",{});var we=i(Q);jd=a(we,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ha=r(we,"CODE",{});var gg=i(Ha);Cd=a(gg,"labels"),gg.forEach(t),Id=a(we,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ka=r(we,"CODE",{});var _g=i(Ka);Ad=a(_g,"ignore_index"),_g.forEach(t),Dd=a(we,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Xa=r(we,"CODE",{});var vg=i(Xa);Od=a(vg,"only_label_first_subword"),vg.forEach(t),Nd=a(we," set to "),Ya=r(we,"CODE",{});var yg=i(Ya);Sd=a(yg,"False"),yg.forEach(t),Rd=a(we,"."),we.forEach(t),Or=p(o),y(et.$$.fragment,o),Nr=p(o),$n=r(o,"P",{});var bg=i($n);Za=r(bg,"STRONG",{});var Lg=i(Za);Ud=a(Lg,"Use case 4: visual question answering (inference), apply_ocr=True"),Lg.forEach(t),bg.forEach(t),Sr=p(o),En=r(o,"P",{});var wg=i(En);Bd=a(wg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),wg.forEach(t),Rr=p(o),y(ot.$$.fragment,o),Ur=p(o),zn=r(o,"P",{});var kg=i(zn);Ja=r(kg,"STRONG",{});var xg=i(Ja);Wd=a(xg,"Use case 5: visual question answering (inference), apply_ocr=False"),xg.forEach(t),kg.forEach(t),Br=p(o),qn=r(o,"P",{});var Tg=i(qn);Vd=a(Tg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Tg.forEach(t),Wr=p(o),y(tt.$$.fragment,o),Vr=p(o),Ee=r(o,"H2",{class:!0});var yi=i(Ee);He=r(yi,"A",{id:!0,class:!0,href:!0});var Mg=i(He);es=r(Mg,"SPAN",{});var $g=i(es);y(nt.$$.fragment,$g),$g.forEach(t),Mg.forEach(t),Qd=p(yi),os=r(yi,"SPAN",{});var Eg=i(os);Gd=a(Eg,"LayoutLMv2Config"),Eg.forEach(t),yi.forEach(t),Qr=p(o),Y=r(o,"DIV",{class:!0});var _o=i(Y);y(at.$$.fragment,_o),Hd=p(_o),ze=r(_o,"P",{});var ta=i(ze);Kd=a(ta,"This is the configuration class to store the configuration of a "),Fn=r(ta,"A",{href:!0});var zg=i(Fn);Xd=a(zg,"LayoutLMv2Model"),zg.forEach(t),Yd=a(ta,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),st=r(ta,"A",{href:!0,rel:!0});var qg=i(st);Zd=a(qg,"microsoft/layoutlmv2-base-uncased"),qg.forEach(t),Jd=a(ta," architecture."),ta.forEach(t),ep=p(_o),qe=r(_o,"P",{});var na=i(qe);op=a(na,"Configuration objects inherit from "),Pn=r(na,"A",{href:!0});var Fg=i(Pn);tp=a(Fg,"PretrainedConfig"),Fg.forEach(t),np=a(na,` and can be used to control the model outputs. Read the
documentation from `),jn=r(na,"A",{href:!0});var Pg=i(jn);ap=a(Pg,"PretrainedConfig"),Pg.forEach(t),sp=a(na," for more information."),na.forEach(t),rp=p(_o),y(Ke.$$.fragment,_o),_o.forEach(t),Gr=p(o),Fe=r(o,"H2",{class:!0});var bi=i(Fe);Xe=r(bi,"A",{id:!0,class:!0,href:!0});var jg=i(Xe);ts=r(jg,"SPAN",{});var Cg=i(ts);y(rt.$$.fragment,Cg),Cg.forEach(t),jg.forEach(t),ip=p(bi),ns=r(bi,"SPAN",{});var Ig=i(ns);lp=a(Ig,"LayoutLMv2FeatureExtractor"),Ig.forEach(t),bi.forEach(t),Hr=p(o),Z=r(o,"DIV",{class:!0});var vo=i(Z);y(it.$$.fragment,vo),cp=p(vo),as=r(vo,"P",{});var Ag=i(as);dp=a(Ag,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Ag.forEach(t),pp=p(vo),lt=r(vo,"P",{});var Li=i(lt);up=a(Li,"This feature extractor inherits from "),ss=r(Li,"CODE",{});var Dg=i(ss);mp=a(Dg,"PreTrainedFeatureExtractor()"),Dg.forEach(t),hp=a(Li,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Li.forEach(t),fp=p(vo),_e=r(vo,"DIV",{class:!0});var aa=i(_e);y(ct.$$.fragment,aa),gp=p(aa),rs=r(aa,"P",{});var Og=i(rs);_p=a(Og,"Main method to prepare for the model one or several image(s)."),Og.forEach(t),vp=p(aa),y(Ye.$$.fragment,aa),aa.forEach(t),vo.forEach(t),Kr=p(o),Pe=r(o,"H2",{class:!0});var wi=i(Pe);Ze=r(wi,"A",{id:!0,class:!0,href:!0});var Ng=i(Ze);is=r(Ng,"SPAN",{});var Sg=i(is);y(dt.$$.fragment,Sg),Sg.forEach(t),Ng.forEach(t),yp=p(wi),ls=r(wi,"SPAN",{});var Rg=i(ls);bp=a(Rg,"LayoutLMv2Tokenizer"),Rg.forEach(t),wi.forEach(t),Xr=p(o),N=r(o,"DIV",{class:!0});var ie=i(N);y(pt.$$.fragment,ie),Lp=p(ie),S=r(ie,"P",{});var G=i(S);wp=a(G,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Cn=r(G,"A",{href:!0});var Ug=i(Cn);kp=a(Ug,"LayoutLMv2Tokenizer"),Ug.forEach(t),xp=a(G,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),cs=r(G,"CODE",{});var Bg=i(cs);Tp=a(Bg,"input_ids"),Bg.forEach(t),Mp=a(G,", "),ds=r(G,"CODE",{});var Wg=i(ds);$p=a(Wg,"attention_mask"),Wg.forEach(t),Ep=a(G,", "),ps=r(G,"CODE",{});var Vg=i(ps);zp=a(Vg,"token_type_ids"),Vg.forEach(t),qp=a(G,", "),us=r(G,"CODE",{});var Qg=i(us);Fp=a(Qg,"bbox"),Qg.forEach(t),Pp=a(G,`, and
optional `),ms=r(G,"CODE",{});var Gg=i(ms);jp=a(Gg,"labels"),Gg.forEach(t),Cp=a(G," (for token classification)."),G.forEach(t),Ip=p(ie),ut=r(ie,"P",{});var ki=i(ut);Ap=a(ki,"This tokenizer inherits from "),In=r(ki,"A",{href:!0});var Hg=i(In);Dp=a(Hg,"PreTrainedTokenizer"),Hg.forEach(t),Op=a(ki,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ki.forEach(t),Np=p(ie),An=r(ie,"P",{});var Qh=i(An);Dn=r(Qh,"A",{href:!0});var Kg=i(Dn);Sp=a(Kg,"LayoutLMv2Tokenizer"),Kg.forEach(t),Rp=a(Qh,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Qh.forEach(t),Up=p(ie),Je=r(ie,"DIV",{class:!0});var xi=i(Je);y(mt.$$.fragment,xi),Bp=p(xi),hs=r(xi,"P",{});var Xg=i(hs);Wp=a(Xg,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Xg.forEach(t),xi.forEach(t),Vp=p(ie),On=r(ie,"DIV",{class:!0});var Yg=i(On);y(ht.$$.fragment,Yg),Yg.forEach(t),ie.forEach(t),Yr=p(o),je=r(o,"H2",{class:!0});var Ti=i(je);eo=r(Ti,"A",{id:!0,class:!0,href:!0});var Zg=i(eo);fs=r(Zg,"SPAN",{});var Jg=i(fs);y(ft.$$.fragment,Jg),Jg.forEach(t),Zg.forEach(t),Qp=p(Ti),gs=r(Ti,"SPAN",{});var e_=i(gs);Gp=a(e_,"LayoutLMv2TokenizerFast"),e_.forEach(t),Ti.forEach(t),Zr=p(o),J=r(o,"DIV",{class:!0});var yo=i(J);y(gt.$$.fragment,yo),Hp=p(yo),_t=r(yo,"P",{});var Mi=i(_t);Kp=a(Mi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),_s=r(Mi,"EM",{});var o_=i(_s);Xp=a(o_,"tokenizers"),o_.forEach(t),Yp=a(Mi," library). Based on WordPiece."),Mi.forEach(t),Zp=p(yo),vt=r(yo,"P",{});var $i=i(vt);Jp=a($i,"This tokenizer inherits from "),Nn=r($i,"A",{href:!0});var t_=i(Nn);eu=a(t_,"PreTrainedTokenizerFast"),t_.forEach(t),ou=a($i,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),$i.forEach(t),tu=p(yo),oo=r(yo,"DIV",{class:!0});var Ei=i(oo);y(yt.$$.fragment,Ei),nu=p(Ei),vs=r(Ei,"P",{});var n_=i(vs);au=a(n_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),n_.forEach(t),Ei.forEach(t),yo.forEach(t),Jr=p(o),Ce=r(o,"H2",{class:!0});var zi=i(Ce);to=r(zi,"A",{id:!0,class:!0,href:!0});var a_=i(to);ys=r(a_,"SPAN",{});var s_=i(ys);y(bt.$$.fragment,s_),s_.forEach(t),a_.forEach(t),su=p(zi),bs=r(zi,"SPAN",{});var r_=i(bs);ru=a(r_,"LayoutLMv2Processor"),r_.forEach(t),zi.forEach(t),ei=p(o),B=r(o,"DIV",{class:!0});var ke=i(B);y(Lt.$$.fragment,ke),iu=p(ke),Ls=r(ke,"P",{});var i_=i(Ls);lu=a(i_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),i_.forEach(t),cu=p(ke),Sn=r(ke,"P",{});var Gh=i(Sn);Rn=r(Gh,"A",{href:!0});var l_=i(Rn);du=a(l_,"LayoutLMv2Processor"),l_.forEach(t),pu=a(Gh," offers all the functionalities you need to prepare data for the model."),Gh.forEach(t),uu=p(ke),F=r(ke,"P",{});var C=i(F);mu=a(C,"It first uses "),Un=r(C,"A",{href:!0});var c_=i(Un);hu=a(c_,"LayoutLMv2FeatureExtractor"),c_.forEach(t),fu=a(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Bn=r(C,"A",{href:!0});var d_=i(Bn);gu=a(d_,"LayoutLMv2Tokenizer"),d_.forEach(t),_u=a(C,` or
`),Wn=r(C,"A",{href:!0});var p_=i(Wn);vu=a(p_,"LayoutLMv2TokenizerFast"),p_.forEach(t),yu=a(C,", which turns the words and bounding boxes into token-level "),ws=r(C,"CODE",{});var u_=i(ws);bu=a(u_,"input_ids"),u_.forEach(t),Lu=a(C,`,
`),ks=r(C,"CODE",{});var m_=i(ks);wu=a(m_,"attention_mask"),m_.forEach(t),ku=a(C,", "),xs=r(C,"CODE",{});var h_=i(xs);xu=a(h_,"token_type_ids"),h_.forEach(t),Tu=a(C,", "),Ts=r(C,"CODE",{});var f_=i(Ts);Mu=a(f_,"bbox"),f_.forEach(t),$u=a(C,". Optionally, one can provide integer "),Ms=r(C,"CODE",{});var g_=i(Ms);Eu=a(g_,"word_labels"),g_.forEach(t),zu=a(C,`, which are turned
into token-level `),$s=r(C,"CODE",{});var __=i($s);qu=a(__,"labels"),__.forEach(t),Fu=a(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(t),Pu=p(ke),ve=r(ke,"DIV",{class:!0});var sa=i(ve);y(wt.$$.fragment,sa),ju=p(sa),$=r(sa,"P",{});var q=i($);Cu=a(q,"This method first forwards the "),Es=r(q,"CODE",{});var v_=i(Es);Iu=a(v_,"images"),v_.forEach(t),Au=a(q," argument to "),kt=r(q,"A",{href:!0});var Hh=i(kt);zs=r(Hh,"STRONG",{});var y_=i(zs);Du=a(y_,"call"),y_.forEach(t),Ou=a(Hh,"()"),Hh.forEach(t),Nu=a(q,`. In case
`),Vn=r(q,"A",{href:!0});var b_=i(Vn);Su=a(b_,"LayoutLMv2FeatureExtractor"),b_.forEach(t),Ru=a(q," was initialized with "),qs=r(q,"CODE",{});var L_=i(qs);Uu=a(L_,"apply_ocr"),L_.forEach(t),Bu=a(q," set to "),Fs=r(q,"CODE",{});var w_=i(Fs);Wu=a(w_,"True"),w_.forEach(t),Vu=a(q,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),xt=r(q,"A",{href:!0});var Kh=i(xt);Ps=r(Kh,"STRONG",{});var k_=i(Ps);Qu=a(k_,"call"),k_.forEach(t),Gu=a(Kh,"()"),Kh.forEach(t),Hu=a(q,` and returns the output,
together with resized `),js=r(q,"CODE",{});var x_=i(js);Ku=a(x_,"images"),x_.forEach(t),Xu=a(q,". In case "),Qn=r(q,"A",{href:!0});var T_=i(Qn);Yu=a(T_,"LayoutLMv2FeatureExtractor"),T_.forEach(t),Zu=a(q," was initialized with "),Cs=r(q,"CODE",{});var M_=i(Cs);Ju=a(M_,"apply_ocr"),M_.forEach(t),em=a(q,` set to
`),Is=r(q,"CODE",{});var $_=i(Is);om=a($_,"False"),$_.forEach(t),tm=a(q,", it passes the words ("),As=r(q,"CODE",{});var E_=i(As);nm=a(E_,"text"),E_.forEach(t),am=a(q,"/"),Ds=r(q,"CODE",{});var z_=i(Ds);sm=a(z_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),z_.forEach(t),rm=a(q,"."),q.forEach(t),im=p(sa),Os=r(sa,"P",{});var q_=i(Os);lm=a(q_,"Please refer to the docstring of the above two methods for more information."),q_.forEach(t),sa.forEach(t),ke.forEach(t),oi=p(o),Ie=r(o,"H2",{class:!0});var qi=i(Ie);no=r(qi,"A",{id:!0,class:!0,href:!0});var F_=i(no);Ns=r(F_,"SPAN",{});var P_=i(Ns);y(Tt.$$.fragment,P_),P_.forEach(t),F_.forEach(t),cm=p(qi),Ss=r(qi,"SPAN",{});var j_=i(Ss);dm=a(j_,"LayoutLMv2Model"),j_.forEach(t),qi.forEach(t),ti=p(o),ce=r(o,"DIV",{class:!0});var ra=i(ce);y(Mt.$$.fragment,ra),pm=p(ra),$t=r(ra,"P",{});var Fi=i($t);um=a(Fi,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Et=r(Fi,"A",{href:!0,rel:!0});var C_=i(Et);mm=a(C_,"torch.nn.Module"),C_.forEach(t),hm=a(Fi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fi.forEach(t),fm=p(ra),ae=r(ra,"DIV",{class:!0});var bo=i(ae);y(zt.$$.fragment,bo),gm=p(bo),Ae=r(bo,"P",{});var ia=i(Ae);_m=a(ia,"The "),Gn=r(ia,"A",{href:!0});var I_=i(Gn);vm=a(I_,"LayoutLMv2Model"),I_.forEach(t),ym=a(ia," forward method, overrides the "),Rs=r(ia,"CODE",{});var A_=i(Rs);bm=a(A_,"__call__"),A_.forEach(t),Lm=a(ia," special method."),ia.forEach(t),wm=p(bo),y(ao.$$.fragment,bo),km=p(bo),y(so.$$.fragment,bo),bo.forEach(t),ra.forEach(t),ni=p(o),De=r(o,"H2",{class:!0});var Pi=i(De);ro=r(Pi,"A",{id:!0,class:!0,href:!0});var D_=i(ro);Us=r(D_,"SPAN",{});var O_=i(Us);y(qt.$$.fragment,O_),O_.forEach(t),D_.forEach(t),xm=p(Pi),Bs=r(Pi,"SPAN",{});var N_=i(Bs);Tm=a(N_,"LayoutLMv2ForSequenceClassification"),N_.forEach(t),Pi.forEach(t),ai=p(o),ee=r(o,"DIV",{class:!0});var Lo=i(ee);y(Ft.$$.fragment,Lo),Mm=p(Lo),Pt=r(Lo,"P",{});var ji=i(Pt);$m=a(ji,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),jt=r(ji,"A",{href:!0,rel:!0});var S_=i(jt);Em=a(S_,"RVL-CDIP"),S_.forEach(t),zm=a(ji," dataset."),ji.forEach(t),qm=p(Lo),Ct=r(Lo,"P",{});var Ci=i(Ct);Fm=a(Ci,"This model is a PyTorch "),It=r(Ci,"A",{href:!0,rel:!0});var R_=i(It);Pm=a(R_,"torch.nn.Module"),R_.forEach(t),jm=a(Ci,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ci.forEach(t),Cm=p(Lo),se=r(Lo,"DIV",{class:!0});var wo=i(se);y(At.$$.fragment,wo),Im=p(wo),Oe=r(wo,"P",{});var la=i(Oe);Am=a(la,"The "),Hn=r(la,"A",{href:!0});var U_=i(Hn);Dm=a(U_,"LayoutLMv2ForSequenceClassification"),U_.forEach(t),Om=a(la," forward method, overrides the "),Ws=r(la,"CODE",{});var B_=i(Ws);Nm=a(B_,"__call__"),B_.forEach(t),Sm=a(la," special method."),la.forEach(t),Rm=p(wo),y(io.$$.fragment,wo),Um=p(wo),y(lo.$$.fragment,wo),wo.forEach(t),Lo.forEach(t),si=p(o),Ne=r(o,"H2",{class:!0});var Ii=i(Ne);co=r(Ii,"A",{id:!0,class:!0,href:!0});var W_=i(co);Vs=r(W_,"SPAN",{});var V_=i(Vs);y(Dt.$$.fragment,V_),V_.forEach(t),W_.forEach(t),Bm=p(Ii),Qs=r(Ii,"SPAN",{});var Q_=i(Qs);Wm=a(Q_,"LayoutLMv2ForTokenClassification"),Q_.forEach(t),Ii.forEach(t),ri=p(o),oe=r(o,"DIV",{class:!0});var ko=i(oe);y(Ot.$$.fragment,ko),Vm=p(ko),te=r(ko,"P",{});var xe=i(te);Qm=a(xe,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Nt=r(xe,"A",{href:!0,rel:!0});var G_=i(Nt);Gm=a(G_,"FUNSD"),G_.forEach(t),Hm=a(xe,", "),St=r(xe,"A",{href:!0,rel:!0});var H_=i(St);Km=a(H_,"SROIE"),H_.forEach(t),Xm=a(xe,`,
`),Rt=r(xe,"A",{href:!0,rel:!0});var K_=i(Rt);Ym=a(K_,"CORD"),K_.forEach(t),Zm=a(xe," and "),Ut=r(xe,"A",{href:!0,rel:!0});var X_=i(Ut);Jm=a(X_,"Kleister-NDA"),X_.forEach(t),eh=a(xe,"."),xe.forEach(t),oh=p(ko),Bt=r(ko,"P",{});var Ai=i(Bt);th=a(Ai,"This model is a PyTorch "),Wt=r(Ai,"A",{href:!0,rel:!0});var Y_=i(Wt);nh=a(Y_,"torch.nn.Module"),Y_.forEach(t),ah=a(Ai,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ai.forEach(t),sh=p(ko),re=r(ko,"DIV",{class:!0});var xo=i(re);y(Vt.$$.fragment,xo),rh=p(xo),Se=r(xo,"P",{});var ca=i(Se);ih=a(ca,"The "),Kn=r(ca,"A",{href:!0});var Z_=i(Kn);lh=a(Z_,"LayoutLMv2ForTokenClassification"),Z_.forEach(t),ch=a(ca," forward method, overrides the "),Gs=r(ca,"CODE",{});var J_=i(Gs);dh=a(J_,"__call__"),J_.forEach(t),ph=a(ca," special method."),ca.forEach(t),uh=p(xo),y(po.$$.fragment,xo),mh=p(xo),y(uo.$$.fragment,xo),xo.forEach(t),ko.forEach(t),ii=p(o),Re=r(o,"H2",{class:!0});var Di=i(Re);mo=r(Di,"A",{id:!0,class:!0,href:!0});var ev=i(mo);Hs=r(ev,"SPAN",{});var ov=i(Hs);y(Qt.$$.fragment,ov),ov.forEach(t),ev.forEach(t),hh=p(Di),Ks=r(Di,"SPAN",{});var tv=i(Ks);fh=a(tv,"LayoutLMv2ForQuestionAnswering"),tv.forEach(t),Di.forEach(t),li=p(o),ne=r(o,"DIV",{class:!0});var To=i(ne);y(Gt.$$.fragment,To),gh=p(To),de=r(To,"P",{});var Mo=i(de);_h=a(Mo,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Ht=r(Mo,"A",{href:!0,rel:!0});var nv=i(Ht);vh=a(nv,"DocVQA"),nv.forEach(t),yh=a(Mo,` (a linear layer on top of the text part of the hidden-states output to
compute `),Xs=r(Mo,"CODE",{});var av=i(Xs);bh=a(av,"span start logits"),av.forEach(t),Lh=a(Mo," and "),Ys=r(Mo,"CODE",{});var sv=i(Ys);wh=a(sv,"span end logits"),sv.forEach(t),kh=a(Mo,")."),Mo.forEach(t),xh=p(To),Kt=r(To,"P",{});var Oi=i(Kt);Th=a(Oi,"This model is a PyTorch "),Xt=r(Oi,"A",{href:!0,rel:!0});var rv=i(Xt);Mh=a(rv,"torch.nn.Module"),rv.forEach(t),$h=a(Oi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oi.forEach(t),Eh=p(To),A=r(To,"DIV",{class:!0});var H=i(A);y(Yt.$$.fragment,H),zh=p(H),Ue=r(H,"P",{});var da=i(Ue);qh=a(da,"The "),Xn=r(da,"A",{href:!0});var iv=i(Xn);Fh=a(iv,"LayoutLMv2ForQuestionAnswering"),iv.forEach(t),Ph=a(da," forward method, overrides the "),Zs=r(da,"CODE",{});var lv=i(Zs);jh=a(lv,"__call__"),lv.forEach(t),Ch=a(da," special method."),da.forEach(t),Ih=p(H),y(ho.$$.fragment,H),Ah=p(H),Js=r(H,"P",{});var cv=i(Js);Dh=a(cv,"Examples:"),cv.forEach(t),Oh=p(H),fo=r(H,"P",{});var dr=i(fo);Nh=a(dr,`Passing the doctests requires installation of detectron2, torchvision and tesseract. Run the following to install them:
`),er=r(dr,"CODE",{});var dv=i(er);Sh=a(dv,"python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'"),dv.forEach(t),Rh=p(dr),or=r(dr,"CODE",{});var pv=i(or);Uh=a(pv,"python -m pip install torchvision tesseract"),pv.forEach(t),dr.forEach(t),Bh=p(H),tr=r(H,"P",{});var uv=i(tr);Wh=a(uv,"Inference Example (Note the result is quite bad without further fine-tuning)"),uv.forEach(t),Vh=p(H),y(go.$$.fragment,H),H.forEach(t),To.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(zv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(We,"id","overview"),l(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(We,"href","#overview"),l(Te,"class","relative group"),l(Eo,"href","https://arxiv.org/abs/2012.14740"),l(Eo,"rel","nofollow"),l(en,"href","layoutlm"),l(zo,"href","https://guillaumejaume.github.io/FUNSD/"),l(zo,"rel","nofollow"),l(qo,"href","https://github.com/clovaai/cord"),l(qo,"rel","nofollow"),l(Fo,"href","https://rrc.cvc.uab.es/?ch=13"),l(Fo,"rel","nofollow"),l(Po,"href","https://github.com/applicaai/kleister-nda"),l(Po,"rel","nofollow"),l(Co,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Co,"rel","nofollow"),l(Ao,"href","https://arxiv.org/abs/2007.00398"),l(Ao,"rel","nofollow"),l(Oo,"href","https://arxiv.org/abs/2012.14740"),l(Oo,"rel","nofollow"),l(So,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(So,"rel","nofollow"),l(Ro,"href","https://github.com/facebookresearch/detectron2/"),l(Ro,"rel","nofollow"),l(Uo,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Uo,"rel","nofollow"),l(an,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(sn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Bo,"href","https://github.com/tesseract-ocr/tesseract"),l(Bo,"rel","nofollow"),l(Wo,"href","https://pypi.org/project/pytesseract/"),l(Wo,"rel","nofollow"),l(rn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(ln,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(cn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(dn,"href","/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(pn,"href","layoutxlm"),l(Ge,"id","usage-layoutlmv2processor"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#usage-layoutlmv2processor"),l($e,"class","relative group"),l(un,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(mn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(hn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(fn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(gn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(_n,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(vn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(yn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(bn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Yo,"href","https://pypi.org/project/pytesseract/"),l(Yo,"rel","nofollow"),l(Ln,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(He,"id","transformers.LayoutLMv2Config"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#transformers.LayoutLMv2Config"),l(Ee,"class","relative group"),l(Fn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(st,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(st,"rel","nofollow"),l(Pn,"href","/docs/transformers/pr_17168/en/main_classes/configuration#transformers.PretrainedConfig"),l(jn,"href","/docs/transformers/pr_17168/en/main_classes/configuration#transformers.PretrainedConfig"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Xe,"id","transformers.LayoutLMv2FeatureExtractor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.LayoutLMv2FeatureExtractor"),l(Fe,"class","relative group"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","transformers.LayoutLMv2Tokenizer"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#transformers.LayoutLMv2Tokenizer"),l(Pe,"class","relative group"),l(Cn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(In,"href","/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Dn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(eo,"id","transformers.LayoutLMv2TokenizerFast"),l(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(eo,"href","#transformers.LayoutLMv2TokenizerFast"),l(je,"class","relative group"),l(Nn,"href","/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(to,"id","transformers.LayoutLMv2Processor"),l(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(to,"href","#transformers.LayoutLMv2Processor"),l(Ce,"class","relative group"),l(Rn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Un,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Bn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Wn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(kt,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Vn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(xt,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Qn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(no,"id","transformers.LayoutLMv2Model"),l(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(no,"href","#transformers.LayoutLMv2Model"),l(Ie,"class","relative group"),l(Et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Et,"rel","nofollow"),l(Gn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ro,"id","transformers.LayoutLMv2ForSequenceClassification"),l(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ro,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(De,"class","relative group"),l(jt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(jt,"rel","nofollow"),l(It,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(It,"rel","nofollow"),l(Hn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(co,"id","transformers.LayoutLMv2ForTokenClassification"),l(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(co,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Ne,"class","relative group"),l(Nt,"href","https://guillaumejaume.github.io/FUNSD/"),l(Nt,"rel","nofollow"),l(St,"href","https://rrc.cvc.uab.es/?ch=13"),l(St,"rel","nofollow"),l(Rt,"href","https://github.com/clovaai/cord"),l(Rt,"rel","nofollow"),l(Ut,"href","https://github.com/applicaai/kleister-nda"),l(Ut,"rel","nofollow"),l(Wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Wt,"rel","nofollow"),l(Kn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(mo,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(mo,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Re,"class","relative group"),l(Ht,"href","https://rrc.cvc.uab.es/?ch=17"),l(Ht,"rel","nofollow"),l(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xt,"rel","nofollow"),l(Xn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,c){e(document.head,h),u(o,T,c),u(o,f,c),e(f,g),e(g,x),b(m,x,null),e(f,_),e(f,O),e(O,Si),u(o,pr,c),u(o,Te,c),e(Te,We),e(We,ma),b($o,ma,null),e(Te,Ri),e(Te,ha),e(ha,Ui),u(o,ur,c),u(o,ue,c),e(ue,Bi),e(ue,Eo),e(Eo,Wi),e(ue,Vi),e(ue,en),e(en,Qi),e(ue,Gi),u(o,mr,c),u(o,me,c),e(me,X),e(X,Hi),e(X,zo),e(zo,Ki),e(X,Xi),e(X,qo),e(qo,Yi),e(X,Zi),e(X,Fo),e(Fo,Ji),e(X,el),e(X,Po),e(Po,ol),e(X,tl),e(me,nl),e(me,jo),e(jo,al),e(jo,Co),e(Co,sl),e(jo,rl),e(me,il),e(me,Io),e(Io,ll),e(Io,Ao),e(Ao,cl),e(Io,dl),u(o,hr,c),u(o,on,c),e(on,pl),u(o,fr,c),u(o,tn,c),e(tn,fa),e(fa,ul),u(o,gr,c),u(o,nn,c),e(nn,ml),u(o,_r,c),u(o,W,c),e(W,ga),e(ga,hl),e(W,fl),e(W,Do),e(Do,gl),e(Do,Oo),e(Oo,_l),e(Do,vl),e(W,yl),e(W,No),e(No,bl),e(No,So),e(So,Ll),e(No,wl),e(W,kl),e(W,Me),e(Me,xl),e(Me,Ro),e(Ro,Tl),e(Me,Ml),e(Me,Uo),e(Uo,$l),e(Me,El),e(W,zl),e(W,M),e(M,ql),e(M,_a),e(_a,Fl),e(M,Pl),e(M,an),e(an,jl),e(M,Cl),e(M,va),e(va,Il),e(M,Al),e(M,ya),e(ya,Dl),e(M,Ol),e(M,ba),e(ba,Nl),e(M,Sl),e(M,La),e(La,Rl),e(M,Ul),e(M,wa),e(wa,Bl),e(M,Wl),e(M,ka),e(ka,Vl),e(M,Ql),e(M,xa),e(xa,Gl),e(M,Hl),e(M,sn),e(sn,Kl),e(M,Xl),e(M,Bo),e(Bo,Yl),e(M,Zl),e(M,Wo),e(Wo,Jl),e(M,ec),u(o,vr,c),b(Vo,o,c),u(o,yr,c),u(o,he,c),e(he,oc),e(he,Ta),e(Ta,tc),e(he,nc),e(he,Ma),e(Ma,ac),e(he,sc),u(o,br,c),b(Qo,o,c),u(o,Lr,c),u(o,Ve,c),e(Ve,rc),e(Ve,rn),e(rn,ic),e(Ve,lc),u(o,wr,c),u(o,fe,c),e(fe,I),e(I,cc),e(I,ln),e(ln,dc),e(I,pc),e(I,$a),e($a,uc),e(I,mc),e(I,Ea),e(Ea,hc),e(I,fc),e(I,cn),e(cn,gc),e(I,_c),e(I,za),e(za,vc),e(I,yc),e(I,qa),e(qa,bc),e(I,Lc),e(I,Fa),e(Fa,wc),e(I,kc),e(fe,xc),e(fe,Go),e(Go,Tc),e(Go,dn),e(dn,Mc),e(Go,$c),e(fe,Ec),e(fe,Ho),e(Ho,zc),e(Ho,Pa),e(Pa,qc),e(Ho,Fc),u(o,kr,c),u(o,Qe,c),e(Qe,Pc),e(Qe,pn),e(pn,jc),e(Qe,Cc),u(o,xr,c),u(o,$e,c),e($e,Ge),e(Ge,ja),b(Ko,ja,null),e($e,Ic),e($e,Ca),e(Ca,Ac),u(o,Tr,c),u(o,V,c),e(V,Dc),e(V,un),e(un,Oc),e(V,Nc),e(V,mn),e(mn,Sc),e(V,Rc),e(V,hn),e(hn,Uc),e(V,Bc),e(V,fn),e(fn,Wc),e(V,Vc),u(o,Mr,c),b(Xo,o,c),u(o,$r,c),u(o,E,c),e(E,Qc),e(E,gn),e(gn,Gc),e(E,Hc),e(E,_n),e(_n,Kc),e(E,Xc),e(E,Ia),e(Ia,Yc),e(E,Zc),e(E,vn),e(vn,Jc),e(E,ed),e(E,yn),e(yn,od),e(E,td),e(E,Aa),e(Aa,nd),e(E,ad),e(E,Da),e(Da,sd),e(E,rd),e(E,Oa),e(Oa,id),e(E,ld),e(E,Na),e(Na,cd),e(E,dd),e(E,Sa),e(Sa,pd),e(E,ud),u(o,Er,c),u(o,U,c),e(U,bn),e(bn,md),e(U,hd),e(U,Yo),e(Yo,fd),e(U,gd),e(U,Ln),e(Ln,_d),e(U,vd),e(U,Ra),e(Ra,yd),e(U,bd),e(U,Ua),e(Ua,Ld),e(U,wd),u(o,zr,c),u(o,wn,c),e(wn,kd),u(o,qr,c),u(o,kn,c),e(kn,Ba),e(Ba,xd),u(o,Fr,c),u(o,xn,c),e(xn,Td),u(o,Pr,c),b(Zo,o,c),u(o,jr,c),u(o,Tn,c),e(Tn,Wa),e(Wa,Md),u(o,Cr,c),u(o,ge,c),e(ge,$d),e(ge,Va),e(Va,Ed),e(ge,zd),e(ge,Qa),e(Qa,qd),e(ge,Fd),u(o,Ir,c),b(Jo,o,c),u(o,Ar,c),u(o,Mn,c),e(Mn,Ga),e(Ga,Pd),u(o,Dr,c),u(o,Q,c),e(Q,jd),e(Q,Ha),e(Ha,Cd),e(Q,Id),e(Q,Ka),e(Ka,Ad),e(Q,Dd),e(Q,Xa),e(Xa,Od),e(Q,Nd),e(Q,Ya),e(Ya,Sd),e(Q,Rd),u(o,Or,c),b(et,o,c),u(o,Nr,c),u(o,$n,c),e($n,Za),e(Za,Ud),u(o,Sr,c),u(o,En,c),e(En,Bd),u(o,Rr,c),b(ot,o,c),u(o,Ur,c),u(o,zn,c),e(zn,Ja),e(Ja,Wd),u(o,Br,c),u(o,qn,c),e(qn,Vd),u(o,Wr,c),b(tt,o,c),u(o,Vr,c),u(o,Ee,c),e(Ee,He),e(He,es),b(nt,es,null),e(Ee,Qd),e(Ee,os),e(os,Gd),u(o,Qr,c),u(o,Y,c),b(at,Y,null),e(Y,Hd),e(Y,ze),e(ze,Kd),e(ze,Fn),e(Fn,Xd),e(ze,Yd),e(ze,st),e(st,Zd),e(ze,Jd),e(Y,ep),e(Y,qe),e(qe,op),e(qe,Pn),e(Pn,tp),e(qe,np),e(qe,jn),e(jn,ap),e(qe,sp),e(Y,rp),b(Ke,Y,null),u(o,Gr,c),u(o,Fe,c),e(Fe,Xe),e(Xe,ts),b(rt,ts,null),e(Fe,ip),e(Fe,ns),e(ns,lp),u(o,Hr,c),u(o,Z,c),b(it,Z,null),e(Z,cp),e(Z,as),e(as,dp),e(Z,pp),e(Z,lt),e(lt,up),e(lt,ss),e(ss,mp),e(lt,hp),e(Z,fp),e(Z,_e),b(ct,_e,null),e(_e,gp),e(_e,rs),e(rs,_p),e(_e,vp),b(Ye,_e,null),u(o,Kr,c),u(o,Pe,c),e(Pe,Ze),e(Ze,is),b(dt,is,null),e(Pe,yp),e(Pe,ls),e(ls,bp),u(o,Xr,c),u(o,N,c),b(pt,N,null),e(N,Lp),e(N,S),e(S,wp),e(S,Cn),e(Cn,kp),e(S,xp),e(S,cs),e(cs,Tp),e(S,Mp),e(S,ds),e(ds,$p),e(S,Ep),e(S,ps),e(ps,zp),e(S,qp),e(S,us),e(us,Fp),e(S,Pp),e(S,ms),e(ms,jp),e(S,Cp),e(N,Ip),e(N,ut),e(ut,Ap),e(ut,In),e(In,Dp),e(ut,Op),e(N,Np),e(N,An),e(An,Dn),e(Dn,Sp),e(An,Rp),e(N,Up),e(N,Je),b(mt,Je,null),e(Je,Bp),e(Je,hs),e(hs,Wp),e(N,Vp),e(N,On),b(ht,On,null),u(o,Yr,c),u(o,je,c),e(je,eo),e(eo,fs),b(ft,fs,null),e(je,Qp),e(je,gs),e(gs,Gp),u(o,Zr,c),u(o,J,c),b(gt,J,null),e(J,Hp),e(J,_t),e(_t,Kp),e(_t,_s),e(_s,Xp),e(_t,Yp),e(J,Zp),e(J,vt),e(vt,Jp),e(vt,Nn),e(Nn,eu),e(vt,ou),e(J,tu),e(J,oo),b(yt,oo,null),e(oo,nu),e(oo,vs),e(vs,au),u(o,Jr,c),u(o,Ce,c),e(Ce,to),e(to,ys),b(bt,ys,null),e(Ce,su),e(Ce,bs),e(bs,ru),u(o,ei,c),u(o,B,c),b(Lt,B,null),e(B,iu),e(B,Ls),e(Ls,lu),e(B,cu),e(B,Sn),e(Sn,Rn),e(Rn,du),e(Sn,pu),e(B,uu),e(B,F),e(F,mu),e(F,Un),e(Un,hu),e(F,fu),e(F,Bn),e(Bn,gu),e(F,_u),e(F,Wn),e(Wn,vu),e(F,yu),e(F,ws),e(ws,bu),e(F,Lu),e(F,ks),e(ks,wu),e(F,ku),e(F,xs),e(xs,xu),e(F,Tu),e(F,Ts),e(Ts,Mu),e(F,$u),e(F,Ms),e(Ms,Eu),e(F,zu),e(F,$s),e($s,qu),e(F,Fu),e(B,Pu),e(B,ve),b(wt,ve,null),e(ve,ju),e(ve,$),e($,Cu),e($,Es),e(Es,Iu),e($,Au),e($,kt),e(kt,zs),e(zs,Du),e(kt,Ou),e($,Nu),e($,Vn),e(Vn,Su),e($,Ru),e($,qs),e(qs,Uu),e($,Bu),e($,Fs),e(Fs,Wu),e($,Vu),e($,xt),e(xt,Ps),e(Ps,Qu),e(xt,Gu),e($,Hu),e($,js),e(js,Ku),e($,Xu),e($,Qn),e(Qn,Yu),e($,Zu),e($,Cs),e(Cs,Ju),e($,em),e($,Is),e(Is,om),e($,tm),e($,As),e(As,nm),e($,am),e($,Ds),e(Ds,sm),e($,rm),e(ve,im),e(ve,Os),e(Os,lm),u(o,oi,c),u(o,Ie,c),e(Ie,no),e(no,Ns),b(Tt,Ns,null),e(Ie,cm),e(Ie,Ss),e(Ss,dm),u(o,ti,c),u(o,ce,c),b(Mt,ce,null),e(ce,pm),e(ce,$t),e($t,um),e($t,Et),e(Et,mm),e($t,hm),e(ce,fm),e(ce,ae),b(zt,ae,null),e(ae,gm),e(ae,Ae),e(Ae,_m),e(Ae,Gn),e(Gn,vm),e(Ae,ym),e(Ae,Rs),e(Rs,bm),e(Ae,Lm),e(ae,wm),b(ao,ae,null),e(ae,km),b(so,ae,null),u(o,ni,c),u(o,De,c),e(De,ro),e(ro,Us),b(qt,Us,null),e(De,xm),e(De,Bs),e(Bs,Tm),u(o,ai,c),u(o,ee,c),b(Ft,ee,null),e(ee,Mm),e(ee,Pt),e(Pt,$m),e(Pt,jt),e(jt,Em),e(Pt,zm),e(ee,qm),e(ee,Ct),e(Ct,Fm),e(Ct,It),e(It,Pm),e(Ct,jm),e(ee,Cm),e(ee,se),b(At,se,null),e(se,Im),e(se,Oe),e(Oe,Am),e(Oe,Hn),e(Hn,Dm),e(Oe,Om),e(Oe,Ws),e(Ws,Nm),e(Oe,Sm),e(se,Rm),b(io,se,null),e(se,Um),b(lo,se,null),u(o,si,c),u(o,Ne,c),e(Ne,co),e(co,Vs),b(Dt,Vs,null),e(Ne,Bm),e(Ne,Qs),e(Qs,Wm),u(o,ri,c),u(o,oe,c),b(Ot,oe,null),e(oe,Vm),e(oe,te),e(te,Qm),e(te,Nt),e(Nt,Gm),e(te,Hm),e(te,St),e(St,Km),e(te,Xm),e(te,Rt),e(Rt,Ym),e(te,Zm),e(te,Ut),e(Ut,Jm),e(te,eh),e(oe,oh),e(oe,Bt),e(Bt,th),e(Bt,Wt),e(Wt,nh),e(Bt,ah),e(oe,sh),e(oe,re),b(Vt,re,null),e(re,rh),e(re,Se),e(Se,ih),e(Se,Kn),e(Kn,lh),e(Se,ch),e(Se,Gs),e(Gs,dh),e(Se,ph),e(re,uh),b(po,re,null),e(re,mh),b(uo,re,null),u(o,ii,c),u(o,Re,c),e(Re,mo),e(mo,Hs),b(Qt,Hs,null),e(Re,hh),e(Re,Ks),e(Ks,fh),u(o,li,c),u(o,ne,c),b(Gt,ne,null),e(ne,gh),e(ne,de),e(de,_h),e(de,Ht),e(Ht,vh),e(de,yh),e(de,Xs),e(Xs,bh),e(de,Lh),e(de,Ys),e(Ys,wh),e(de,kh),e(ne,xh),e(ne,Kt),e(Kt,Th),e(Kt,Xt),e(Xt,Mh),e(Kt,$h),e(ne,Eh),e(ne,A),b(Yt,A,null),e(A,zh),e(A,Ue),e(Ue,qh),e(Ue,Xn),e(Xn,Fh),e(Ue,Ph),e(Ue,Zs),e(Zs,jh),e(Ue,Ch),e(A,Ih),b(ho,A,null),e(A,Ah),e(A,Js),e(Js,Dh),e(A,Oh),e(A,fo),e(fo,Nh),e(fo,er),e(er,Sh),e(fo,Rh),e(fo,or),e(or,Uh),e(A,Bh),e(A,tr),e(tr,Wh),e(A,Vh),b(go,A,null),ci=!0},p(o,[c]){const Zt={};c&2&&(Zt.$$scope={dirty:c,ctx:o}),Ke.$set(Zt);const nr={};c&2&&(nr.$$scope={dirty:c,ctx:o}),Ye.$set(nr);const ar={};c&2&&(ar.$$scope={dirty:c,ctx:o}),ao.$set(ar);const sr={};c&2&&(sr.$$scope={dirty:c,ctx:o}),so.$set(sr);const Jt={};c&2&&(Jt.$$scope={dirty:c,ctx:o}),io.$set(Jt);const rr={};c&2&&(rr.$$scope={dirty:c,ctx:o}),lo.$set(rr);const ir={};c&2&&(ir.$$scope={dirty:c,ctx:o}),po.$set(ir);const lr={};c&2&&(lr.$$scope={dirty:c,ctx:o}),uo.$set(lr);const Be={};c&2&&(Be.$$scope={dirty:c,ctx:o}),ho.$set(Be);const cr={};c&2&&(cr.$$scope={dirty:c,ctx:o}),go.$set(cr)},i(o){ci||(L(m.$$.fragment,o),L($o.$$.fragment,o),L(Vo.$$.fragment,o),L(Qo.$$.fragment,o),L(Ko.$$.fragment,o),L(Xo.$$.fragment,o),L(Zo.$$.fragment,o),L(Jo.$$.fragment,o),L(et.$$.fragment,o),L(ot.$$.fragment,o),L(tt.$$.fragment,o),L(nt.$$.fragment,o),L(at.$$.fragment,o),L(Ke.$$.fragment,o),L(rt.$$.fragment,o),L(it.$$.fragment,o),L(ct.$$.fragment,o),L(Ye.$$.fragment,o),L(dt.$$.fragment,o),L(pt.$$.fragment,o),L(mt.$$.fragment,o),L(ht.$$.fragment,o),L(ft.$$.fragment,o),L(gt.$$.fragment,o),L(yt.$$.fragment,o),L(bt.$$.fragment,o),L(Lt.$$.fragment,o),L(wt.$$.fragment,o),L(Tt.$$.fragment,o),L(Mt.$$.fragment,o),L(zt.$$.fragment,o),L(ao.$$.fragment,o),L(so.$$.fragment,o),L(qt.$$.fragment,o),L(Ft.$$.fragment,o),L(At.$$.fragment,o),L(io.$$.fragment,o),L(lo.$$.fragment,o),L(Dt.$$.fragment,o),L(Ot.$$.fragment,o),L(Vt.$$.fragment,o),L(po.$$.fragment,o),L(uo.$$.fragment,o),L(Qt.$$.fragment,o),L(Gt.$$.fragment,o),L(Yt.$$.fragment,o),L(ho.$$.fragment,o),L(go.$$.fragment,o),ci=!0)},o(o){w(m.$$.fragment,o),w($o.$$.fragment,o),w(Vo.$$.fragment,o),w(Qo.$$.fragment,o),w(Ko.$$.fragment,o),w(Xo.$$.fragment,o),w(Zo.$$.fragment,o),w(Jo.$$.fragment,o),w(et.$$.fragment,o),w(ot.$$.fragment,o),w(tt.$$.fragment,o),w(nt.$$.fragment,o),w(at.$$.fragment,o),w(Ke.$$.fragment,o),w(rt.$$.fragment,o),w(it.$$.fragment,o),w(ct.$$.fragment,o),w(Ye.$$.fragment,o),w(dt.$$.fragment,o),w(pt.$$.fragment,o),w(mt.$$.fragment,o),w(ht.$$.fragment,o),w(ft.$$.fragment,o),w(gt.$$.fragment,o),w(yt.$$.fragment,o),w(bt.$$.fragment,o),w(Lt.$$.fragment,o),w(wt.$$.fragment,o),w(Tt.$$.fragment,o),w(Mt.$$.fragment,o),w(zt.$$.fragment,o),w(ao.$$.fragment,o),w(so.$$.fragment,o),w(qt.$$.fragment,o),w(Ft.$$.fragment,o),w(At.$$.fragment,o),w(io.$$.fragment,o),w(lo.$$.fragment,o),w(Dt.$$.fragment,o),w(Ot.$$.fragment,o),w(Vt.$$.fragment,o),w(po.$$.fragment,o),w(uo.$$.fragment,o),w(Qt.$$.fragment,o),w(Gt.$$.fragment,o),w(Yt.$$.fragment,o),w(ho.$$.fragment,o),w(go.$$.fragment,o),ci=!1},d(o){t(h),o&&t(T),o&&t(f),k(m),o&&t(pr),o&&t(Te),k($o),o&&t(ur),o&&t(ue),o&&t(mr),o&&t(me),o&&t(hr),o&&t(on),o&&t(fr),o&&t(tn),o&&t(gr),o&&t(nn),o&&t(_r),o&&t(W),o&&t(vr),k(Vo,o),o&&t(yr),o&&t(he),o&&t(br),k(Qo,o),o&&t(Lr),o&&t(Ve),o&&t(wr),o&&t(fe),o&&t(kr),o&&t(Qe),o&&t(xr),o&&t($e),k(Ko),o&&t(Tr),o&&t(V),o&&t(Mr),k(Xo,o),o&&t($r),o&&t(E),o&&t(Er),o&&t(U),o&&t(zr),o&&t(wn),o&&t(qr),o&&t(kn),o&&t(Fr),o&&t(xn),o&&t(Pr),k(Zo,o),o&&t(jr),o&&t(Tn),o&&t(Cr),o&&t(ge),o&&t(Ir),k(Jo,o),o&&t(Ar),o&&t(Mn),o&&t(Dr),o&&t(Q),o&&t(Or),k(et,o),o&&t(Nr),o&&t($n),o&&t(Sr),o&&t(En),o&&t(Rr),k(ot,o),o&&t(Ur),o&&t(zn),o&&t(Br),o&&t(qn),o&&t(Wr),k(tt,o),o&&t(Vr),o&&t(Ee),k(nt),o&&t(Qr),o&&t(Y),k(at),k(Ke),o&&t(Gr),o&&t(Fe),k(rt),o&&t(Hr),o&&t(Z),k(it),k(ct),k(Ye),o&&t(Kr),o&&t(Pe),k(dt),o&&t(Xr),o&&t(N),k(pt),k(mt),k(ht),o&&t(Yr),o&&t(je),k(ft),o&&t(Zr),o&&t(J),k(gt),k(yt),o&&t(Jr),o&&t(Ce),k(bt),o&&t(ei),o&&t(B),k(Lt),k(wt),o&&t(oi),o&&t(Ie),k(Tt),o&&t(ti),o&&t(ce),k(Mt),k(zt),k(ao),k(so),o&&t(ni),o&&t(De),k(qt),o&&t(ai),o&&t(ee),k(Ft),k(At),k(io),k(lo),o&&t(si),o&&t(Ne),k(Dt),o&&t(ri),o&&t(oe),k(Ot),k(Vt),k(po),k(uo),o&&t(ii),o&&t(Re),k(Qt),o&&t(li),o&&t(ne),k(Gt),k(Yt),k(ho),k(go)}}}const zv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function qv(P){return _v(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dv extends mv{constructor(h){super();hv(this,h,qv,Ev,fv,{})}}export{Dv as default,zv as metadata};
