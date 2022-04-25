import{S as Sh,i as Ch,s as Oh,e as r,k as d,w as k,t as o,M as Wh,c as s,d as t,m as l,a,x as b,h as n,b as h,F as e,g as P,y as v,q as T,o as y,B as z,v as jh,L as ks}from"../../chunks/vendor-6b77c823.js";import{T as Pr}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-1088f2fb.js";import{C as bs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as gs}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as _s}from"../../chunks/ExampleCodeBlock-5212b321.js";function Rh(E){let p,$,f,m,x;return{c(){p=r("p"),$=o("This method is deprecated, "),f=r("code"),m=o("__call__"),x=o(" should be used instead.")},l(c){p=s(c,"P",{});var g=a(p);$=n(g,"This method is deprecated, "),f=s(g,"CODE",{});var L=a(f);m=n(L,"__call__"),L.forEach(t),x=n(g," should be used instead."),g.forEach(t)},m(c,g){P(c,p,g),e(p,$),e(p,f),e(f,m),e(p,x)},d(c){c&&t(p)}}}function Mh(E){let p,$,f,m,x;return{c(){p=r("p"),$=o("This method is deprecated, "),f=r("code"),m=o("__call__"),x=o(" should be used instead.")},l(c){p=s(c,"P",{});var g=a(p);$=n(g,"This method is deprecated, "),f=s(g,"CODE",{});var L=a(f);m=n(L,"__call__"),L.forEach(t),x=n(g," should be used instead."),g.forEach(t)},m(c,g){P(c,p,g),e(p,$),e(p,f),e(f,m),e(p,x)},d(c){c&&t(p)}}}function Uh(E){let p,$,f,m,x;return{c(){p=r("p"),$=o("Passing "),f=r("code"),m=o("use_auth_token=True"),x=o(" is required when you want to use a private model.")},l(c){p=s(c,"P",{});var g=a(p);$=n(g,"Passing "),f=s(g,"CODE",{});var L=a(f);m=n(L,"use_auth_token=True"),L.forEach(t),x=n(g," is required when you want to use a private model."),g.forEach(t)},m(c,g){P(c,p,g),e(p,$),e(p,f),e(f,m),e(p,x)},d(c){c&&t(p)}}}function Vh(E){let p,$,f,m,x;return m=new bs({props:{code:`# We can't instantiate directly the base class *PreTrainedTokenizerBase* so let's show our examples on a derived class: BertTokenizer
# Download vocabulary from huggingface.co and cache.
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Download vocabulary from huggingface.co (user-uploaded) and cache.
tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-base-german-cased")

# If vocabulary files are in a directory (e.g. tokenizer was saved using *save_pretrained('./test/saved_model/')*)
tokenizer = BertTokenizer.from_pretrained("./test/saved_model/")

# If the tokenizer uses a single vocabulary file, you can point directly to this file
tokenizer = BertTokenizer.from_pretrained("./test/saved_model/my_vocab.txt")

# You can link tokens to special vocabulary when instantiating
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased", unk_token="<unk>")
# You should be sure '<unk>' is in the vocabulary when doing that.
# Otherwise use tokenizer.add_special_tokens({'unk_token': '<unk>'}) instead)
assert tokenizer.unk_token == "<unk>"`,highlighted:`<span class="hljs-comment"># We can&#x27;t instantiate directly the base class *PreTrainedTokenizerBase* so let&#x27;s show our examples on a derived class: BertTokenizer</span>
<span class="hljs-comment"># Download vocabulary from huggingface.co and cache.</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-comment"># Download vocabulary from huggingface.co (user-uploaded) and cache.</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-base-german-cased&quot;</span>)

<span class="hljs-comment"># If vocabulary files are in a directory (e.g. tokenizer was saved using *save_pretrained(&#x27;./test/saved_model/&#x27;)*)</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/&quot;</span>)

<span class="hljs-comment"># If the tokenizer uses a single vocabulary file, you can point directly to this file</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/my_vocab.txt&quot;</span>)

<span class="hljs-comment"># You can link tokens to special vocabulary when instantiating</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, unk_token=<span class="hljs-string">&quot;&lt;unk&gt;&quot;</span>)
<span class="hljs-comment"># You should be sure &#x27;&lt;unk&gt;&#x27; is in the vocabulary when doing that.</span>
<span class="hljs-comment"># Otherwise use tokenizer.add_special_tokens({&#x27;unk_token&#x27;: &#x27;&lt;unk&gt;&#x27;}) instead)</span>
<span class="hljs-keyword">assert</span> tokenizer.unk_token == <span class="hljs-string">&quot;&lt;unk&gt;&quot;</span>`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(m.$$.fragment)},l(c){p=s(c,"P",{});var g=a(p);$=n(g,"Examples:"),g.forEach(t),f=l(c),b(m.$$.fragment,c)},m(c,g){P(c,p,g),e(p,$),P(c,f,g),v(m,c,g),x=!0},p:ks,i(c){x||(T(m.$$.fragment,c),x=!0)},o(c){y(m.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(m,c)}}}function Gh(E){let p,$,f,m,x,c,g,L;return{c(){p=r("p"),$=o("If the "),f=r("code"),m=o("encoded_inputs"),x=o(` passed are dictionary of numpy arrays, PyTorch tensors or TensorFlow tensors, the
result will use the same type unless you provide a different tensor type with `),c=r("code"),g=o("return_tensors"),L=o(`. In the case of
PyTorch tensors, you will lose the specific device of your tensors however.`)},l(ge){p=s(ge,"P",{});var W=a(p);$=n(W,"If the "),f=s(W,"CODE",{});var D=a(f);m=n(D,"encoded_inputs"),D.forEach(t),x=n(W,` passed are dictionary of numpy arrays, PyTorch tensors or TensorFlow tensors, the
result will use the same type unless you provide a different tensor type with `),c=s(W,"CODE",{});var no=a(c);g=n(no,"return_tensors"),no.forEach(t),L=n(W,`. In the case of
PyTorch tensors, you will lose the specific device of your tensors however.`),W.forEach(t)},m(ge,W){P(ge,p,W),e(p,$),e(p,f),e(f,m),e(p,x),e(p,c),e(c,g),e(p,L)},d(ge){ge&&t(p)}}}function Hh(E){let p,$,f,m,x;return m=new bs({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

# Push the tokenizer to your namespace with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
tokenizer.push_to_hub("my-finetuned-bert")

# Push the tokenizer to your namespace with the name "my-finetuned-bert" with no local clone.
tokenizer.push_to_hub("my-finetuned-bert", use_temp_dir=True)

# Push the tokenizer to an organization with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
tokenizer.push_to_hub("my-finetuned-bert", organization="huggingface")

# Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.
tokenizer.push_to_hub("my-finetuned-bert", repo_url="https://huggingface.co/sgugger/my-finetuned-bert")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot; with no local clone.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, use_temp_dir=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Push the tokenizer to an organization with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, organization=<span class="hljs-string">&quot;huggingface&quot;</span>)

<span class="hljs-comment"># Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, repo_url=<span class="hljs-string">&quot;https://huggingface.co/sgugger/my-finetuned-bert&quot;</span>)`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(m.$$.fragment)},l(c){p=s(c,"P",{});var g=a(p);$=n(g,"Examples:"),g.forEach(t),f=l(c),b(m.$$.fragment,c)},m(c,g){P(c,p,g),e(p,$),P(c,f,g),v(m,c,g),x=!0},p:ks,i(c){x||(T(m.$$.fragment,c),x=!0)},o(c){y(m.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(m,c)}}}function Xh(E){let p,$;return{c(){p=r("p"),$=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(f){p=s(f,"P",{});var m=a(p);$=n(m,"This API is experimental and may have some slight breaking changes in the next releases."),m.forEach(t)},m(f,m){P(f,p,m),e(p,$)},d(f){f&&t(p)}}}function Yh(E){let p,$,f,m,x;return m=new bs({props:{code:`# Let's see how to add a new classification token to GPT-2
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2Model.from_pretrained("gpt2")

special_tokens_dict = {"cls_token": "<CLS>"}

num_added_toks = tokenizer.add_special_tokens(special_tokens_dict)
print("We have added", num_added_toks, "tokens")
# Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.
model.resize_token_embeddings(len(tokenizer))

assert tokenizer.cls_token == "<CLS>"`,highlighted:`<span class="hljs-comment"># Let&#x27;s see how to add a new classification token to GPT-2</span>
tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
model = GPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

special_tokens_dict = {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>}

num_added_toks = tokenizer.add_special_tokens(special_tokens_dict)
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-keyword">assert</span> tokenizer.cls_token == <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(m.$$.fragment)},l(c){p=s(c,"P",{});var g=a(p);$=n(g,"Examples:"),g.forEach(t),f=l(c),b(m.$$.fragment,c)},m(c,g){P(c,p,g),e(p,$),P(c,f,g),v(m,c,g),x=!0},p:ks,i(c){x||(T(m.$$.fragment,c),x=!0)},o(c){y(m.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(m,c)}}}function Jh(E){let p,$,f,m,x;return m=new bs({props:{code:`# Let's see how to increase the vocabulary of Bert model and tokenizer
tokenizer = BertTokenizerFast.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")

num_added_toks = tokenizer.add_tokens(["new_tok1", "my_new-tok2"])
print("We have added", num_added_toks, "tokens")
# Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.
model.resize_token_embeddings(len(tokenizer))`,highlighted:`<span class="hljs-comment"># Let&#x27;s see how to increase the vocabulary of Bert model and tokenizer</span>
tokenizer = BertTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

num_added_toks = tokenizer.add_tokens([<span class="hljs-string">&quot;new_tok1&quot;</span>, <span class="hljs-string">&quot;my_new-tok2&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(m.$$.fragment)},l(c){p=s(c,"P",{});var g=a(p);$=n(g,"Examples:"),g.forEach(t),f=l(c),b(m.$$.fragment,c)},m(c,g){P(c,p,g),e(p,$),P(c,f,g),v(m,c,g),x=!0},p:ks,i(c){x||(T(m.$$.fragment,c),x=!0)},o(c){y(m.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(m,c)}}}function Kh(E){let p,$,f,m,x,c,g,L,ge,W,D,no,ro,vs,Ts,so,ys,zs,ao,ws,xs,io,$s,Ps,qr,lo,qs,Er,_e,Le,So,st,Es,Co,Bs,Br,u,at,Ls,ke,Ds,co,Is,Ns,po,As,Fs,Ss,Oo,Cs,Os,Wo,Ws,js,I,Z,jo,Rs,Ms,Ro,Us,Vs,Mo,Gs,Hs,Xs,F,Uo,Ys,Js,Vo,Ks,Qs,Go,Zs,ea,Ho,ta,oa,Xo,na,ra,sa,U,Yo,aa,ia,Jo,da,la,Ko,ca,pa,Qo,ha,ma,ua,S,Zo,fa,ga,en,_a,ka,tn,ba,va,on,Ta,ya,ho,za,wa,xa,De,nn,$a,Pa,rn,qa,Ea,Ba,V,sn,La,Da,an,Ia,Na,dn,Aa,Fa,ln,Sa,Ca,Oa,G,cn,Wa,ja,pn,Ra,Ma,hn,Ua,Va,mn,Ga,Ha,Xa,Ie,it,Ya,un,Ja,Ka,Ne,dt,Qa,fn,Za,ei,Ae,lt,ti,gn,oi,ni,ee,ct,ri,_n,si,ai,Fe,ii,te,pt,di,kn,li,ci,bn,pi,hi,Se,ht,mi,vn,ui,fi,Ce,mt,gi,ut,_i,Tn,ki,bi,vi,oe,ft,Ti,mo,yi,uo,zi,wi,yn,xi,$i,ne,gt,Pi,zn,qi,Ei,_t,Bi,wn,Li,Di,Ii,re,kt,Ni,xn,Ai,Fi,bt,Si,$n,Ci,Oi,Wi,se,vt,ji,Pn,Ri,Mi,Oe,Ui,H,Tt,Vi,yt,Gi,fo,Hi,Xi,Yi,We,Ji,je,Ki,Re,zt,Qi,be,Zi,qn,ed,td,En,od,nd,rd,ae,wt,sd,Bn,ad,id,ie,Ln,dd,ld,Dn,cd,pd,In,hd,md,ud,X,xt,fd,Nn,gd,_d,J,kd,An,bd,vd,Fn,Td,yd,Sn,zd,wd,xd,Me,$d,Ue,$t,Pd,j,qd,Cn,Ed,Bd,On,Ld,Dd,Wn,Id,Nd,jn,Ad,Fd,Sd,Ve,Pt,Cd,Rn,Od,Wd,de,qt,jd,Et,Rd,Mn,Md,Ud,Vd,Ge,Gd,le,Bt,Hd,Lt,Xd,Un,Yd,Jd,Kd,He,Qd,Y,Dt,Zd,Vn,el,tl,It,ol,Gn,nl,rl,sl,Nt,al,Hn,il,dl,ll,ce,At,cl,Xn,pl,hl,Ft,ml,Yn,ul,fl,gl,Xe,St,_l,Ct,kl,Jn,bl,vl,Tl,Ye,Ot,yl,Kn,zl,Lr,ve,Je,Qn,Wt,wl,Zn,xl,Dr,A,jt,$l,Te,Pl,go,ql,El,_o,Bl,Ll,Dl,B,Rt,Il,er,Nl,Al,tr,Fl,Sl,Mt,Cl,ko,Ol,Wl,jl,Ut,Rl,or,Ml,Ul,Vl,Vt,nr,Gl,Hl,Gt,Xl,rr,Yl,Jl,Kl,R,Ql,bo,Zl,ec,sr,tc,oc,ar,nc,rc,ir,sc,ac,ic,Ke,dc,C,Ht,lc,dr,cc,pc,lr,hc,mc,Xt,uc,vo,fc,gc,_c,Qe,kc,pe,Yt,bc,ye,vc,cr,Tc,yc,pr,zc,wc,xc,hr,$c,Ir,ze,Ze,mr,Jt,Pc,ur,qc,Nr,we,Kt,Ec,xe,Bc,fr,Lc,Dc,et,Ic,gr,Nc,Ac,Fc,Ar,$e,Qt,Sc,_r,Cc,Fr,Pe,Zt,Oc,kr,Wc,Sr;return c=new gs({}),st=new gs({}),at=new q({props:{name:"class transformers.PreTrainedTokenizerBase",anchor:"transformers.PreTrainedTokenizerBase",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length (in number of tokens) for the inputs to the transformer model. When the tokenizer is
loaded with <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a>, this will be set to the
value stored for the associated model in <code>max_model_input_sizes</code> (see above). If no value is provided, will
default to VERY_LARGE_INTEGER (<code>int(1e30)</code>).`,name:"model_max_length"},{anchor:"transformers.PreTrainedTokenizerBase.padding_side",description:`<strong>padding_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have padding applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"padding_side"},{anchor:"transformers.PreTrainedTokenizerBase.truncation_side",description:`<strong>truncation_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have truncation applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"truncation_side"},{anchor:"transformers.PreTrainedTokenizerBase.model_input_names",description:`<strong>model_input_names</strong> (<code>List[string]</code>, <em>optional</em>) &#x2014;
The list of inputs accepted by the forward pass of the model (like <code>&quot;token_type_ids&quot;</code> or
<code>&quot;attention_mask&quot;</code>). Default value is picked from the class attribute of the same name.`,name:"model_input_names"},{anchor:"transformers.PreTrainedTokenizerBase.bos_token",description:`<strong>bos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the beginning of a sentence. Will be associated to <code>self.bos_token</code> and
<code>self.bos_token_id</code>.`,name:"bos_token"},{anchor:"transformers.PreTrainedTokenizerBase.eos_token",description:`<strong>eos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the end of a sentence. Will be associated to <code>self.eos_token</code> and
<code>self.eos_token_id</code>.`,name:"eos_token"},{anchor:"transformers.PreTrainedTokenizerBase.unk_token",description:`<strong>unk_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing an out-of-vocabulary token. Will be associated to <code>self.unk_token</code> and
<code>self.unk_token_id</code>.`,name:"unk_token"},{anchor:"transformers.PreTrainedTokenizerBase.sep_token",description:`<strong>sep_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token separating two different sentences in the same input (used by BERT for instance). Will be
associated to <code>self.sep_token</code> and <code>self.sep_token_id</code>.`,name:"sep_token"},{anchor:"transformers.PreTrainedTokenizerBase.pad_token",description:`<strong>pad_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token used to make arrays of tokens the same size for batching purpose. Will then be ignored by
attention mechanisms or loss computation. Will be associated to <code>self.pad_token</code> and <code>self.pad_token_id</code>.`,name:"pad_token"},{anchor:"transformers.PreTrainedTokenizerBase.cls_token",description:`<strong>cls_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the class of the input (used by BERT for instance). Will be associated to
<code>self.cls_token</code> and <code>self.cls_token_id</code>.`,name:"cls_token"},{anchor:"transformers.PreTrainedTokenizerBase.mask_token",description:`<strong>mask_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing a masked token (used by masked-language modeling pretraining objectives, like
BERT). Will be associated to <code>self.mask_token</code> and <code>self.mask_token_id</code>.`,name:"mask_token"},{anchor:"transformers.PreTrainedTokenizerBase.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (tuple or list of <code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A tuple or a list of additional special tokens. Add them here to ensure they won&#x2019;t be split by the
tokenization process. Will be associated to <code>self.additional_special_tokens</code> and
<code>self.additional_special_tokens_ids</code>.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L1427"}}),it=new q({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerBase.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2370",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
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
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),dt=new q({props:{name:"as_target_tokenizer",anchor:"transformers.PreTrainedTokenizerBase.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3395"}}),lt=new q({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizerBase.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3241",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),ct=new q({props:{name:"batch_encode_plus",anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus",parameters:[{name:"batch_text_or_text_pairs",val:": typing.Union[typing.List[str], typing.List[typing.Tuple[str, str]], typing.List[typing.List[str]], typing.List[typing.Tuple[typing.List[str], typing.List[str]]], typing.List[typing.List[int]], typing.List[typing.Tuple[typing.List[int], typing.List[int]]]]"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.batch_text_or_text_pairs",description:`<strong>batch_text_or_text_pairs</strong> (<code>List[str]</code>, <code>List[Tuple[str, str]]</code>, <code>List[List[str]]</code>, <code>List[Tuple[List[str], List[str]]]</code>, and for not-fast tokenizers, also <code>List[List[int]]</code>, <code>List[Tuple[List[int], List[int]]]</code>) &#x2014;
Batch of sequences or pair of sequences to be encoded. This can be a list of
string/string-sequences/int-sequences or a list of pair of string/string-sequences/int-sequence (see
details in <code>encode_plus</code>).`,name:"batch_text_or_text_pairs"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2591",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
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
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Fe=new Pr({props:{warning:!0,$$slots:{default:[Rh]},$$scope:{ctx:E}}}),pt=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2875",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ht=new q({props:{name:"clean_up_tokenization",anchor:"transformers.PreTrainedTokenizerBase.clean_up_tokenization",parameters:[{name:"out_string",val:": str"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.clean_up_tokenization.out_string",description:"<strong>out_string</strong> (<code>str</code>) &#x2014; The text to clean up.",name:"out_string"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3350",returnDescription:`
<p>The cleaned-up string.</p>
`,returnType:`
<p><code>str</code></p>
`}}),mt=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.PreTrainedTokenizerBase.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.convert_tokens_to_string.tokens",description:"<strong>tokens</strong> (<code>List[str]</code>) &#x2014; The token to join in a string.",name:"tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3228",returnDescription:`
<p>The joined tokens.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ft=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2855",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gt=new q({props:{name:"decode",anchor:"transformers.PreTrainedTokenizerBase.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizerBase.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3274",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),kt=new q({props:{name:"encode",anchor:"transformers.PreTrainedTokenizerBase.encode",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[int]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[int], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.encode.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.encode.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.encode.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.encode.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.encode.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.encode.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.encode.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.encode.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.encode.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.encode.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>
<p>**kwargs &#x2014; Passed along to the <code>.tokenize()</code> method.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2180",returnDescription:`
<p>The tokenized ids of the text.</p>
`,returnType:`
<p><code>List[int]</code>, <code>torch.Tensor</code>, <code>tf.Tensor</code> or <code>np.ndarray</code></p>
`}}),vt=new q({props:{name:"encode_plus",anchor:"transformers.PreTrainedTokenizerBase.encode_plus",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[int]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[int], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code> (the latter only for not-fast tokenizers)) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2495",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
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
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Oe=new Pr({props:{warning:!0,$$slots:{default:[Mh]},$$scope:{ctx:E}}}),Tt=new q({props:{name:"from_pretrained",anchor:"transformers.PreTrainedTokenizerBase.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a predefined tokenizer hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing vocabulary files required by the tokenizer, for instance saved
using the <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained">save_pretrained()</a> method, e.g.,
<code>./my_model_directory/</code>.</li>
<li>(<strong>Deprecated</strong>, not applicable to all derived classes) A path or url to a single saved vocabulary
file (if and only if the tokenizer only requires a single vocabulary file like Bert or XLNet), e.g.,
<code>./my_model_directory/vocab.txt</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded predefined tokenizer vocabulary files should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force the (re-)download the vocabulary files and override the cached versions if they
exist.`,name:"force_download"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received files. Attempt to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are used on each request.`,name:"proxies"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.local_files_only",description:`<strong>local_files_only</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to only rely on local files and not to attempt to download any files.`,name:"local_files_only"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.subfolder",description:`<strong>subfolder</strong> (<code>str</code>, <em>optional</em>) &#x2014;
In case the relevant files are located inside a subfolder of the model repo on huggingface.co (e.g. for
facebook/rag-token-base), specify it here.`,name:"subfolder"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.inputs",description:`<strong>inputs</strong> (additional positional arguments, <em>optional</em>) &#x2014;
Will be passed along to the Tokenizer <code>__init__</code> method.`,name:"inputs"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the Tokenizer <code>__init__</code> method. Can be used to set special tokens like <code>bos_token</code>,
<code>eos_token</code>, <code>unk_token</code>, <code>sep_token</code>, <code>pad_token</code>, <code>cls_token</code>, <code>mask_token</code>,
<code>additional_special_tokens</code>. See parameters in the <code>__init__</code> for more details.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L1545"}}),We=new Pr({props:{$$slots:{default:[Uh]},$$scope:{ctx:E}}}),je=new _s({props:{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.example",$$slots:{default:[Vh]},$$scope:{ctx:E}}}),zt=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3319",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),wt=new q({props:{name:"get_vocab",anchor:"transformers.PreTrainedTokenizerBase.get_vocab",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L1533",returnDescription:`
<p>The vocabulary.</p>
`,returnType:`
<p><code>Dict[str, int]</code></p>
`}}),xt=new q({props:{name:"pad",anchor:"transformers.PreTrainedTokenizerBase.pad",parameters:[{name:"encoded_inputs",val:": typing.Union[transformers.tokenization_utils_base.BatchEncoding, typing.List[transformers.tokenization_utils_base.BatchEncoding], typing.Dict[str, typing.List[int]], typing.Dict[str, typing.List[typing.List[int]]], typing.List[typing.Dict[str, typing.List[int]]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = True"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"verbose",val:": bool = True"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.pad.encoded_inputs",description:`<strong>encoded_inputs</strong> (<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, list of <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, <code>Dict[str, List[int]]</code>, <code>Dict[str, List[List[int]]</code> or <code>List[Dict[str, List[int]]]</code>) &#x2014;
Tokenized inputs. Can represent one input (<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a> or <code>Dict[str, List[int]]</code>) or a batch of
tokenized inputs (list of <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, <em>Dict[str, List[List[int]]]</em> or <em>List[Dict[str,
List[int]]]</em>) so you can use this method during preprocessing as well as in a PyTorch Dataloader
collate function.</p>
<p>Instead of <code>List[int]</code> you can have tensors (numpy arrays, PyTorch tensors or TensorFlow tensors), see
the note above for the return type.`,name:"encoded_inputs"},{anchor:"transformers.PreTrainedTokenizerBase.pad.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.pad.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.pad.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta).</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.pad.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.pad.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.pad.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2694"}}),Me=new Pr({props:{$$slots:{default:[Gh]},$$scope:{ctx:E}}}),$t=new q({props:{name:"prepare_for_model",anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model",parameters:[{name:"ids",val:": typing.List[int]"},{name:"pair_ids",val:": typing.Optional[typing.List[int]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"prepend_batch_axis",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.ids",description:`<strong>ids</strong> (<code>List[int]</code>) &#x2014;
Tokenized input ids of the first sequence. Can be obtained from a string by chaining the <code>tokenize</code> and
<code>convert_tokens_to_ids</code> methods.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.pair_ids",description:`<strong>pair_ids</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Tokenized input ids of the second sequence. Can be obtained from a string by chaining the <code>tokenize</code>
and <code>convert_tokens_to_ids</code> methods.`,name:"pair_ids"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2895",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
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
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Pt=new q({props:{name:"prepare_seq2seq_batch",anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch",parameters:[{name:"src_texts",val:": typing.List[str]"},{name:"tgt_texts",val:": typing.Optional[typing.List[str]] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_target_length",val:": typing.Optional[int] = None"},{name:"padding",val:": str = 'longest'"},{name:"return_tensors",val:": str = None"},{name:"truncation",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.src_texts",description:`<strong>src_texts</strong> (<code>List[str]</code>) &#x2014;
List of documents to summarize or source language texts.`,name:"src_texts"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.tgt_texts",description:`<strong>tgt_texts</strong> (<code>list</code>, <em>optional</em>) &#x2014;
List of summaries or target language texts.`,name:"tgt_texts"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length for encoder inputs (documents to summarize or source language texts) If
left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length is
required by one of the truncation/padding parameters. If the model has no specific maximum input length
(like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.max_target_length",description:`<strong>max_target_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length of decoder inputs (target language texts or summaries) If left unset or set
to <code>None</code>, this will use the max_length value.`,name:"max_target_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
greater than the model maximum admissible input size).
**kwargs &#x2014;
Additional keyword arguments passed along to <code>self.__call__</code>.</li>
</ul>`,name:"truncation"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3429",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li><strong>input_ids</strong> \u2014 List of token ids to be fed to the encoder.</li>
<li><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model.</li>
<li><strong>labels</strong> \u2014 List of token ids for tgt_texts.</li>
</ul>
<p>The full set of keys <code>[input_ids, attention_mask, labels]</code>, will only be returned if tgt_texts is passed.
Otherwise, input_ids, attention_mask will be the only keys.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),qt=new q({props:{name:"push_to_hub",anchor:"transformers.PreTrainedTokenizerBase.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"use_temp_dir",val:": bool = False"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"**model_card_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your tokenizer in the Hub or a path to a local folder (in which case
the repository will have the name of that local folder). If not specified, will default to the name
given by <code>repo_url</code> and a local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in the hub. If unspecified, a new
repository will be created in your namespace (unless you specify an <code>organization</code>) with <code>repo_name</code>.`,name:"repo_url"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to clone the distant repo in a temporary directory or in <code>repo_path_or_name</code> inside the
current working directory. This will slow things down if you are making changes in an existing repo
since you will need to clone the repo before every push.`,name:"use_temp_dir"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add tokenizer&quot;</code>.`,name:"commit_message"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your tokenizer (you must be a member of this organization).`,name:"organization"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private (requires a paying subscription).`,name:"private"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if
<code>repo_url</code> is not specified.`,name:"use_auth_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/utils/hub.py#L846",returnDescription:`
<p>The url of the commit of your tokenizer in the given repository.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ge=new _s({props:{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.example",$$slots:{default:[Hh]},$$scope:{ctx:E}}}),Bt=new q({props:{name:"register_for_auto_class",anchor:"transformers.PreTrainedTokenizerBase.register_for_auto_class",parameters:[{name:"auto_class",val:" = 'AutoTokenizer'"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.register_for_auto_class.auto_class",description:`<strong>auto_class</strong> (<code>str</code> or <code>type</code>, <em>optional</em>, defaults to <code>&quot;AutoTokenizer&quot;</code>) &#x2014;
The auto class to register this new tokenizer with.`,name:"auto_class"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3403"}}),He=new Pr({props:{warning:!0,$$slots:{default:[Xh]},$$scope:{ctx:E}}}),Dt=new q({props:{name:"save_pretrained",anchor:"transformers.PreTrainedTokenizerBase.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"legacy_format",val:": typing.Optional[bool] = None"},{name:"filename_prefix",val:": typing.Optional[str] = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.save_directory",description:"<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014; The path to a directory where the tokenizer will be saved.",name:"save_directory"},{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.legacy_format",description:`<strong>legacy_format</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only applicable for a fast tokenizer. If unset (default), will save the tokenizer in the unified JSON
format as well as in legacy format if it exists, i.e. with tokenizer specific vocabulary and a separate
added_tokens files.</p>
<p>If <code>False</code>, will only save the tokenizer in the unified JSON format. This format is incompatible with
&#x201C;slow&#x201D; tokenizers (not powered by the <em>tokenizers</em> library), so the tokenizer will not be able to be
loaded in the corresponding &#x201C;slow&#x201D; tokenizer.</p>
<p>If <code>True</code>, will save the tokenizer in legacy format. If the &#x201C;slow&#x201D; tokenizer doesn&#x2019;t exits, a value
error is raised.
filename_prefix &#x2014; (<code>str</code>, <em>optional</em>):
A prefix to add to the names of the files saved by the tokenizer.`,name:"legacy_format"},{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L1981",returnDescription:`
<p>The files saved.</p>
`,returnType:`
<p>A tuple of <code>str</code></p>
`}}),At=new q({props:{name:"save_vocabulary",anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
The directory in which to save the vocabulary.`,name:"save_directory"},{anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary.filename_prefix",description:`<strong>filename_prefix</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional prefix to add to the named of the saved files.`,name:"filename_prefix"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2142",returnDescription:`
<p>Paths to the files saved.</p>
`,returnType:`
<p><code>Tuple(str)</code></p>
`}}),St=new q({props:{name:"tokenize",anchor:"transformers.PreTrainedTokenizerBase.tokenize",parameters:[{name:"text",val:": str"},{name:"pair",val:": typing.Optional[str] = None"},{name:"add_special_tokens",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.tokenize.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The sequence to be encoded.`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.pair",description:`<strong>pair</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A second sequence to be encoded with the first.`,name:"pair"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add the special tokens associated with the corresponding model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific encode method. See details in
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"><strong>call</strong>()</a>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L2160",returnDescription:`
<p>The list of tokens.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ot=new q({props:{name:"truncate_sequences",anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences",parameters:[{name:"ids",val:": typing.List[int]"},{name:"pair_ids",val:": typing.Optional[typing.List[int]] = None"},{name:"num_tokens_to_remove",val:": int = 0"},{name:"truncation_strategy",val:": typing.Union[str, transformers.tokenization_utils_base.TruncationStrategy] = 'longest_first'"},{name:"stride",val:": int = 0"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.ids",description:`<strong>ids</strong> (<code>List[int]</code>) &#x2014;
Tokenized input ids of the first sequence. Can be obtained from a string by chaining the <code>tokenize</code> and
<code>convert_tokens_to_ids</code> methods.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.pair_ids",description:`<strong>pair_ids</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Tokenized input ids of the second sequence. Can be obtained from a string by chaining the <code>tokenize</code>
and <code>convert_tokens_to_ids</code> methods.`,name:"pair_ids"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.num_tokens_to_remove",description:`<strong>num_tokens_to_remove</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Number of tokens to remove using the truncation strategy.`,name:"num_tokens_to_remove"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.truncation_strategy",description:`<strong>truncation_strategy</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
The strategy to follow for truncation. Can be:</p>
<ul>
<li><code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will truncate
token by token, removing a token from the longest sequence in the pair if a pair of sequences (or a
batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths greater
than the model maximum admissible input size).</li>
</ul>`,name:"truncation_strategy"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a positive number, the overflowing tokens returned will contain some tokens from the main
sequence returned. The value of this argument defines the number of additional tokens.`,name:"stride"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L3031",returnDescription:`
<p>The truncated <code>ids</code>, the truncated <code>pair_ids</code> and the list of
overflowing tokens. Note: The <em>longest_first</em> strategy returns empty list of overflowing tokens if a pair
of sequences (or a batch of pairs) is provided.</p>
`,returnType:`
<p><code>Tuple[List[int], List[int], List[int]]</code></p>
`}}),Wt=new gs({}),jt=new q({props:{name:"class transformers.SpecialTokensMixin",anchor:"transformers.SpecialTokensMixin",parameters:[{name:"verbose",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.bos_token",description:`<strong>bos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the beginning of a sentence.`,name:"bos_token"},{anchor:"transformers.SpecialTokensMixin.eos_token",description:`<strong>eos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the end of a sentence.`,name:"eos_token"},{anchor:"transformers.SpecialTokensMixin.unk_token",description:`<strong>unk_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing an out-of-vocabulary token.`,name:"unk_token"},{anchor:"transformers.SpecialTokensMixin.sep_token",description:`<strong>sep_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token separating two different sentences in the same input (used by BERT for instance).`,name:"sep_token"},{anchor:"transformers.SpecialTokensMixin.pad_token",description:`<strong>pad_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token used to make arrays of tokens the same size for batching purpose. Will then be ignored by
attention mechanisms or loss computation.`,name:"pad_token"},{anchor:"transformers.SpecialTokensMixin.cls_token",description:`<strong>cls_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the class of the input (used by BERT for instance).`,name:"cls_token"},{anchor:"transformers.SpecialTokensMixin.mask_token",description:`<strong>mask_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing a masked token (used by masked-language modeling pretraining objectives, like
BERT).`,name:"mask_token"},{anchor:"transformers.SpecialTokensMixin.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (tuple or list of <code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A tuple or a list of additional special tokens.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L747"}}),Rt=new q({props:{name:"add_special_tokens",anchor:"transformers.SpecialTokensMixin.add_special_tokens",parameters:[{name:"special_tokens_dict",val:": typing.Dict[str, typing.Union[str, tokenizers.AddedToken]]"}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.add_special_tokens.special_tokens_dict",description:`<strong>special_tokens_dict</strong> (dictionary <em>str</em> to <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Keys should be in the list of predefined special attributes: [<code>bos_token</code>, <code>eos_token</code>, <code>unk_token</code>,
<code>sep_token</code>, <code>pad_token</code>, <code>cls_token</code>, <code>mask_token</code>, <code>additional_special_tokens</code>].</p>
<p>Tokens are only added if they are not already in the vocabulary (tested by checking if the tokenizer
assign the index of the <code>unk_token</code> to them).`,name:"special_tokens_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L827",returnDescription:`
<p>Number of tokens added to the vocabulary.</p>
`,returnType:`
<p><code>int</code></p>
`}}),Ke=new _s({props:{anchor:"transformers.SpecialTokensMixin.add_special_tokens.example",$$slots:{default:[Yh]},$$scope:{ctx:E}}}),Ht=new q({props:{name:"add_tokens",anchor:"transformers.SpecialTokensMixin.add_tokens",parameters:[{name:"new_tokens",val:": typing.Union[str, tokenizers.AddedToken, typing.List[typing.Union[str, tokenizers.AddedToken]]]"},{name:"special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.add_tokens.new_tokens",description:`<strong>new_tokens</strong> (<code>str</code>, <code>tokenizers.AddedToken</code> or a list of <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Tokens are only added if they are not already in the vocabulary. <code>tokenizers.AddedToken</code> wraps a string
token to let you personalize its behavior: whether this token should only match against a single word,
whether this token should strip all potential whitespaces on the left side, whether this token should
strip all potential whitespaces on the right side, etc.`,name:"new_tokens"},{anchor:"transformers.SpecialTokensMixin.add_tokens.special_tokens",description:`<strong>special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Can be used to specify if the token is a special token. This mostly change the normalization behavior
(special tokens like CLS or [MASK] are usually not lower-cased for instance).</p>
<p>See details for <code>tokenizers.AddedToken</code> in HuggingFace tokenizers library.`,name:"special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L899",returnDescription:`
<p>Number of tokens added to the vocabulary.</p>
`,returnType:`
<p><code>int</code></p>
`}}),Qe=new _s({props:{anchor:"transformers.SpecialTokensMixin.add_tokens.example",$$slots:{default:[Jh]},$$scope:{ctx:E}}}),Yt=new q({props:{name:"sanitize_special_tokens",anchor:"transformers.SpecialTokensMixin.sanitize_special_tokens",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L815",returnDescription:`
<p>The number of tokens added in the vocabulary during the operation.</p>
`,returnType:`
<p><code>int</code></p>
`}}),Jt=new gs({}),Kt=new q({props:{name:"class transformers.tokenization_utils_base.TruncationStrategy",anchor:"transformers.tokenization_utils_base.TruncationStrategy",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L123"}}),Qt=new q({props:{name:"class transformers.CharSpan",anchor:"transformers.CharSpan",parameters:[{name:"start",val:": int"},{name:"end",val:": int"}],parametersDescription:[{anchor:"transformers.CharSpan.start",description:"<strong>start</strong> (<code>int</code>) &#x2014; Index of the first character in the original string.",name:"start"},{anchor:"transformers.CharSpan.end",description:"<strong>end</strong> (<code>int</code>) &#x2014; Index of the character following the last character in the original string.",name:"end"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L135"}}),Zt=new q({props:{name:"class transformers.TokenSpan",anchor:"transformers.TokenSpan",parameters:[{name:"start",val:": int"},{name:"end",val:": int"}],parametersDescription:[{anchor:"transformers.TokenSpan.start",description:"<strong>start</strong> (<code>int</code>) &#x2014; Index of the first token in the span.",name:"start"},{anchor:"transformers.TokenSpan.end",description:"<strong>end</strong> (<code>int</code>) &#x2014; Index of the token following the last token in the span.",name:"end"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/tokenization_utils_base.py#L148"}}),{c(){p=r("meta"),$=d(),f=r("h1"),m=r("a"),x=r("span"),k(c.$$.fragment),g=d(),L=r("span"),ge=o("Utilities for Tokenizers"),W=d(),D=r("p"),no=o(`This page lists all the utility functions used by the tokenizers, mainly the class
`),ro=r("a"),vs=o("PreTrainedTokenizerBase"),Ts=o(` that implements the common methods between
`),so=r("a"),ys=o("PreTrainedTokenizer"),zs=o(" and "),ao=r("a"),ws=o("PreTrainedTokenizerFast"),xs=o(` and the mixin
`),io=r("a"),$s=o("SpecialTokensMixin"),Ps=o("."),qr=d(),lo=r("p"),qs=o("Most of those are only useful if you are studying the code of the tokenizers in the library."),Er=d(),_e=r("h2"),Le=r("a"),So=r("span"),k(st.$$.fragment),Es=d(),Co=r("span"),Bs=o("PreTrainedTokenizerBase"),Br=d(),u=r("div"),k(at.$$.fragment),Ls=d(),ke=r("p"),Ds=o("Base class for "),co=r("a"),Is=o("PreTrainedTokenizer"),Ns=o(" and "),po=r("a"),As=o("PreTrainedTokenizerFast"),Fs=o("."),Ss=d(),Oo=r("p"),Cs=o("Handles shared (mostly boiler plate) methods for those two classes."),Os=d(),Wo=r("p"),Ws=o("Class attributes (overridden by derived classes)"),js=d(),I=r("ul"),Z=r("li"),jo=r("strong"),Rs=o("vocab_files_names"),Ms=o(" ("),Ro=r("code"),Us=o("Dict[str, str]"),Vs=o(") \u2014 A dictionary with, as keys, the "),Mo=r("code"),Gs=o("__init__"),Hs=o(` keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).`),Xs=d(),F=r("li"),Uo=r("strong"),Ys=o("pretrained_vocab_files_map"),Js=o(" ("),Vo=r("code"),Ks=o("Dict[str, Dict[str, str]]"),Qs=o(`) \u2014 A dictionary of dictionaries, with the
high-level keys being the `),Go=r("code"),Zs=o("__init__"),ea=o(` keyword name of each vocabulary file required by the model, the
low-level being the `),Ho=r("code"),ta=o("short-cut-names"),oa=o(" of the pretrained models with, as associated values, the "),Xo=r("code"),na=o("url"),ra=o(` to the
associated pretrained vocabulary file.`),sa=d(),U=r("li"),Yo=r("strong"),aa=o("max_model_input_sizes"),ia=o(" ("),Jo=r("code"),da=o("Dict[str, Optional[int]]"),la=o(") \u2014 A dictionary with, as keys, the "),Ko=r("code"),ca=o("short-cut-names"),pa=o(`
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or `),Qo=r("code"),ha=o("None"),ma=o(" if the model has no maximum input size."),ua=d(),S=r("li"),Zo=r("strong"),fa=o("pretrained_init_configuration"),ga=o(" ("),en=r("code"),_a=o("Dict[str, Dict[str, Any]]"),ka=o(`) \u2014 A dictionary with, as keys, the
`),tn=r("code"),ba=o("short-cut-names"),va=o(` of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the `),on=r("code"),Ta=o("__init__"),ya=o(` method of the tokenizer class for this pretrained model when loading the tokenizer
with the `),ho=r("a"),za=o("from_pretrained()"),wa=o(" method."),xa=d(),De=r("li"),nn=r("strong"),$a=o("model_input_names"),Pa=o(" ("),rn=r("code"),qa=o("List[str]"),Ea=o(") \u2014 A list of inputs expected in the forward pass of the model."),Ba=d(),V=r("li"),sn=r("strong"),La=o("padding_side"),Da=o(" ("),an=r("code"),Ia=o("str"),Na=o(`) \u2014 The default value for the side on which the model should have padding applied.
Should be `),dn=r("code"),Aa=o("'right'"),Fa=o(" or "),ln=r("code"),Sa=o("'left'"),Ca=o("."),Oa=d(),G=r("li"),cn=r("strong"),Wa=o("truncation_side"),ja=o(" ("),pn=r("code"),Ra=o("str"),Ma=o(`) \u2014 The default value for the side on which the model should have truncation
applied. Should be `),hn=r("code"),Ua=o("'right'"),Va=o(" or "),mn=r("code"),Ga=o("'left'"),Ha=o("."),Xa=d(),Ie=r("div"),k(it.$$.fragment),Ya=d(),un=r("p"),Ja=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Ka=d(),Ne=r("div"),k(dt.$$.fragment),Qa=d(),fn=r("p"),Za=o(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ei=d(),Ae=r("div"),k(lt.$$.fragment),ti=d(),gn=r("p"),oi=o("Convert a list of lists of token ids into a list of strings by calling decode."),ni=d(),ee=r("div"),k(ct.$$.fragment),ri=d(),_n=r("p"),si=o("Tokenize and prepare for the model a list of sequences or a list of pairs of sequences."),ai=d(),k(Fe.$$.fragment),ii=d(),te=r("div"),k(pt.$$.fragment),di=d(),kn=r("p"),li=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),ci=d(),bn=r("p"),pi=o("This implementation does not add special tokens and this method should be overridden in a subclass."),hi=d(),Se=r("div"),k(ht.$$.fragment),mi=d(),vn=r("p"),ui=o("Clean up a list of simple English tokenization artifacts like spaces before punctuations and abbreviated forms."),fi=d(),Ce=r("div"),k(mt.$$.fragment),gi=d(),ut=r("p"),_i=o("Converts a sequence of tokens in a single string. The most simple way to do it is "),Tn=r("code"),ki=o('" ".join(tokens)'),bi=o(` but we
often want to remove sub-word tokenization artifacts at the same time.`),vi=d(),oe=r("div"),k(ft.$$.fragment),Ti=d(),mo=r("p"),yi=o("Create the token type IDs corresponding to the sequences passed. "),uo=r("a"),zi=o(`What are token type
IDs?`),wi=d(),yn=r("p"),xi=o("Should be overridden in a subclass if the model has a special way of building those."),$i=d(),ne=r("div"),k(gt.$$.fragment),Pi=d(),zn=r("p"),qi=o(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ei=d(),_t=r("p"),Bi=o("Similar to doing "),wn=r("code"),Li=o("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Di=o("."),Ii=d(),re=r("div"),k(kt.$$.fragment),Ni=d(),xn=r("p"),Ai=o("Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary."),Fi=d(),bt=r("p"),Si=o("Same as doing "),$n=r("code"),Ci=o("self.convert_tokens_to_ids(self.tokenize(text))"),Oi=o("."),Wi=d(),se=r("div"),k(vt.$$.fragment),ji=d(),Pn=r("p"),Ri=o("Tokenize and prepare for the model a sequence or a pair of sequences."),Mi=d(),k(Oe.$$.fragment),Ui=d(),H=r("div"),k(Tt.$$.fragment),Vi=d(),yt=r("p"),Gi=o("Instantiate a "),fo=r("a"),Hi=o("PreTrainedTokenizerBase"),Xi=o(` (or a derived class) from a predefined
tokenizer.`),Yi=d(),k(We.$$.fragment),Ji=d(),k(je.$$.fragment),Ki=d(),Re=r("div"),k(zt.$$.fragment),Qi=d(),be=r("p"),Zi=o(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qn=r("code"),ed=o("prepare_for_model"),td=o(" or "),En=r("code"),od=o("encode_plus"),nd=o(" methods."),rd=d(),ae=r("div"),k(wt.$$.fragment),sd=d(),Bn=r("p"),ad=o("Returns the vocabulary as a dictionary of token to index."),id=d(),ie=r("p"),Ln=r("code"),dd=o("tokenizer.get_vocab()[token]"),ld=o(" is equivalent to "),Dn=r("code"),cd=o("tokenizer.convert_tokens_to_ids(token)"),pd=o(" when "),In=r("code"),hd=o("token"),md=o(` is in the
vocab.`),ud=d(),X=r("div"),k(xt.$$.fragment),fd=d(),Nn=r("p"),gd=o(`Pad a single encoded input or a batch of encoded inputs up to predefined length or to the max sequence length
in the batch.`),_d=d(),J=r("p"),kd=o("Padding side (left/right) padding token ids are defined at the tokenizer level (with "),An=r("code"),bd=o("self.padding_side"),vd=o(`,
`),Fn=r("code"),Td=o("self.pad_token_id"),yd=o(" and "),Sn=r("code"),zd=o("self.pad_token_type_id"),wd=o(")"),xd=d(),k(Me.$$.fragment),$d=d(),Ue=r("div"),k($t.$$.fragment),Pd=d(),j=r("p"),qd=o(`Prepares a sequence of input id, or a pair of sequences of inputs ids so that it can be used by the model. It
adds special tokens, truncates sequences if overflowing while taking into account the special tokens and
manages a moving window (with user defined stride) for overflowing tokens. Please Note, for `),Cn=r("em"),Ed=o("pair_ids"),Bd=o(`
different than `),On=r("code"),Ld=o("None"),Dd=o(" and "),Wn=r("em"),Id=o("truncation_strategy = longest_first"),Nd=o(" or "),jn=r("code"),Ad=o("True"),Fd=o(`, it is not possible to return
overflowing tokens. Such a combination of arguments will raise an error.`),Sd=d(),Ve=r("div"),k(Pt.$$.fragment),Cd=d(),Rn=r("p"),Od=o("Prepare model inputs for translation. For best performance, translate one sentence at a time."),Wd=d(),de=r("div"),k(qt.$$.fragment),jd=d(),Et=r("p"),Rd=o(`Upload the tokenizer files to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Mn=r("code"),Md=o("repo_path_or_name"),Ud=o("."),Vd=d(),k(Ge.$$.fragment),Gd=d(),le=r("div"),k(Bt.$$.fragment),Hd=d(),Lt=r("p"),Xd=o(`Register this class with a given auto class. This should only be used for custom tokenizers as the ones in the
library are already mapped with `),Un=r("code"),Yd=o("AutoTokenizer"),Jd=o("."),Kd=d(),k(He.$$.fragment),Qd=d(),Y=r("div"),k(Dt.$$.fragment),Zd=d(),Vn=r("p"),el=o("Save the full tokenizer state."),tl=d(),It=r("p"),ol=o(`This method make sure the full tokenizer can then be re-loaded using the
`),Gn=r("code"),nl=o("from_pretrained"),rl=o(" class method.."),sl=d(),Nt=r("p"),al=o(`Warning,None This won\u2019t save modifications you may have applied to the tokenizer after the instantiation (for
instance, modifying `),Hn=r("code"),il=o("tokenizer.do_lower_case"),dl=o(" after creation)."),ll=d(),ce=r("div"),k(At.$$.fragment),cl=d(),Xn=r("p"),pl=o("Save only the vocabulary of the tokenizer (vocabulary + added tokens)."),hl=d(),Ft=r("p"),ml=o(`This method won\u2019t save the configuration and special token mappings of the tokenizer. Use
`),Yn=r("code"),ul=o("_save_pretrained()"),fl=o(" to save the whole state of the tokenizer."),gl=d(),Xe=r("div"),k(St.$$.fragment),_l=d(),Ct=r("p"),kl=o("Converts a string in a sequence of tokens, replacing unknown tokens with the "),Jn=r("code"),bl=o("unk_token"),vl=o("."),Tl=d(),Ye=r("div"),k(Ot.$$.fragment),yl=d(),Kn=r("p"),zl=o("Truncates a sequence pair in-place following the strategy."),Lr=d(),ve=r("h2"),Je=r("a"),Qn=r("span"),k(Wt.$$.fragment),wl=d(),Zn=r("span"),xl=o("SpecialTokensMixin"),Dr=d(),A=r("div"),k(jt.$$.fragment),$l=d(),Te=r("p"),Pl=o("A mixin derived by "),go=r("a"),ql=o("PreTrainedTokenizer"),El=o(" and "),_o=r("a"),Bl=o("PreTrainedTokenizerFast"),Ll=o(` to handle specific behaviors related to
special tokens. In particular, this class hold the attributes which can be used to directly access these special
tokens in a model-independent manner and allow to set and update the special tokens.`),Dl=d(),B=r("div"),k(Rt.$$.fragment),Il=d(),er=r("p"),Nl=o(`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`),Al=d(),tr=r("p"),Fl=o(`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),Sl=d(),Mt=r("p"),Cl=o("In order to do that, please use the "),ko=r("a"),Ol=o("resize_token_embeddings()"),Wl=o(" method."),jl=d(),Ut=r("p"),Rl=o("Using "),or=r("code"),Ml=o("add_special_tokens"),Ul=o(" will ensure your special tokens can be used in several ways:"),Vl=d(),Vt=r("ul"),nr=r("li"),Gl=o("Special tokens are carefully handled by the tokenizer (they are never split)."),Hl=d(),Gt=r("li"),Xl=o("You can easily refer to special tokens using tokenizer class attributes like "),rr=r("code"),Yl=o("tokenizer.cls_token"),Jl=o(`. This
makes it easy to develop model-agnostic training and fine-tuning scripts.`),Kl=d(),R=r("p"),Ql=o(`When possible, special tokens are already registered for provided pretrained models (for instance
`),bo=r("a"),Zl=o("BertTokenizer"),ec=d(),sr=r("code"),tc=o("cls_token"),oc=o(" is already registered to be :obj"),ar=r("em"),nc=o("\u2019[CLS]\u2019"),rc=o(` and XLM\u2019s one is also registered to be
`),ir=r("code"),sc=o("'</s>'"),ac=o(")."),ic=d(),k(Ke.$$.fragment),dc=d(),C=r("div"),k(Ht.$$.fragment),lc=d(),dr=r("p"),cc=o(`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary.`),pc=d(),lr=r("p"),hc=o(`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),mc=d(),Xt=r("p"),uc=o("In order to do that, please use the "),vo=r("a"),fc=o("resize_token_embeddings()"),gc=o(" method."),_c=d(),k(Qe.$$.fragment),kc=d(),pe=r("div"),k(Yt.$$.fragment),bc=d(),ye=r("p"),vc=o("Make sure that all the special tokens attributes of the tokenizer ("),cr=r("code"),Tc=o("tokenizer.mask_token"),yc=o(`,
`),pr=r("code"),zc=o("tokenizer.cls_token"),wc=o(", etc.) are in the vocabulary."),xc=d(),hr=r("p"),$c=o("Add the missing ones to the vocabulary if needed."),Ir=d(),ze=r("h2"),Ze=r("a"),mr=r("span"),k(Jt.$$.fragment),Pc=d(),ur=r("span"),qc=o("Enums and namedtuples"),Nr=d(),we=r("div"),k(Kt.$$.fragment),Ec=d(),xe=r("p"),Bc=o("Possible values for the "),fr=r("code"),Lc=o("truncation"),Dc=o(" argument in "),et=r("a"),Ic=o("PreTrainedTokenizerBase."),gr=r("strong"),Nc=o("call"),Ac=o("()"),Fc=o(`. Useful for tab-completion in
an IDE.`),Ar=d(),$e=r("div"),k(Qt.$$.fragment),Sc=d(),_r=r("p"),Cc=o("Character span in the original string."),Fr=d(),Pe=r("div"),k(Zt.$$.fragment),Oc=d(),kr=r("p"),Wc=o("Token span in an encoded string (list of tokens)."),this.h()},l(i){const w=Wh('[data-svelte="svelte-1phssyn"]',document.head);p=s(w,"META",{name:!0,content:!0}),w.forEach(t),$=l(i),f=s(i,"H1",{class:!0});var eo=a(f);m=s(eo,"A",{id:!0,class:!0,href:!0});var br=a(m);x=s(br,"SPAN",{});var vr=a(x);b(c.$$.fragment,vr),vr.forEach(t),br.forEach(t),g=l(eo),L=s(eo,"SPAN",{});var Tr=a(L);ge=n(Tr,"Utilities for Tokenizers"),Tr.forEach(t),eo.forEach(t),W=l(i),D=s(i,"P",{});var M=a(D);no=n(M,`This page lists all the utility functions used by the tokenizers, mainly the class
`),ro=s(M,"A",{href:!0});var yr=a(ro);vs=n(yr,"PreTrainedTokenizerBase"),yr.forEach(t),Ts=n(M,` that implements the common methods between
`),so=s(M,"A",{href:!0});var zr=a(so);ys=n(zr,"PreTrainedTokenizer"),zr.forEach(t),zs=n(M," and "),ao=s(M,"A",{href:!0});var wr=a(ao);ws=n(wr,"PreTrainedTokenizerFast"),wr.forEach(t),xs=n(M,` and the mixin
`),io=s(M,"A",{href:!0});var xr=a(io);$s=n(xr,"SpecialTokensMixin"),xr.forEach(t),Ps=n(M,"."),M.forEach(t),qr=l(i),lo=s(i,"P",{});var Rc=a(lo);qs=n(Rc,"Most of those are only useful if you are studying the code of the tokenizers in the library."),Rc.forEach(t),Er=l(i),_e=s(i,"H2",{class:!0});var Cr=a(_e);Le=s(Cr,"A",{id:!0,class:!0,href:!0});var Mc=a(Le);So=s(Mc,"SPAN",{});var Uc=a(So);b(st.$$.fragment,Uc),Uc.forEach(t),Mc.forEach(t),Es=l(Cr),Co=s(Cr,"SPAN",{});var Vc=a(Co);Bs=n(Vc,"PreTrainedTokenizerBase"),Vc.forEach(t),Cr.forEach(t),Br=l(i),u=s(i,"DIV",{class:!0});var _=a(u);b(at.$$.fragment,_),Ls=l(_),ke=s(_,"P",{});var To=a(ke);Ds=n(To,"Base class for "),co=s(To,"A",{href:!0});var Gc=a(co);Is=n(Gc,"PreTrainedTokenizer"),Gc.forEach(t),Ns=n(To," and "),po=s(To,"A",{href:!0});var Hc=a(po);As=n(Hc,"PreTrainedTokenizerFast"),Hc.forEach(t),Fs=n(To,"."),To.forEach(t),Ss=l(_),Oo=s(_,"P",{});var Xc=a(Oo);Cs=n(Xc,"Handles shared (mostly boiler plate) methods for those two classes."),Xc.forEach(t),Os=l(_),Wo=s(_,"P",{});var Yc=a(Wo);Ws=n(Yc,"Class attributes (overridden by derived classes)"),Yc.forEach(t),js=l(_),I=s(_,"UL",{});var O=a(I);Z=s(O,"LI",{});var to=a(Z);jo=s(to,"STRONG",{});var Jc=a(jo);Rs=n(Jc,"vocab_files_names"),Jc.forEach(t),Ms=n(to," ("),Ro=s(to,"CODE",{});var Kc=a(Ro);Us=n(Kc,"Dict[str, str]"),Kc.forEach(t),Vs=n(to,") \u2014 A dictionary with, as keys, the "),Mo=s(to,"CODE",{});var Qc=a(Mo);Gs=n(Qc,"__init__"),Qc.forEach(t),Hs=n(to,` keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).`),to.forEach(t),Xs=l(O),F=s(O,"LI",{});var K=a(F);Uo=s(K,"STRONG",{});var Zc=a(Uo);Ys=n(Zc,"pretrained_vocab_files_map"),Zc.forEach(t),Js=n(K," ("),Vo=s(K,"CODE",{});var ep=a(Vo);Ks=n(ep,"Dict[str, Dict[str, str]]"),ep.forEach(t),Qs=n(K,`) \u2014 A dictionary of dictionaries, with the
high-level keys being the `),Go=s(K,"CODE",{});var tp=a(Go);Zs=n(tp,"__init__"),tp.forEach(t),ea=n(K,` keyword name of each vocabulary file required by the model, the
low-level being the `),Ho=s(K,"CODE",{});var op=a(Ho);ta=n(op,"short-cut-names"),op.forEach(t),oa=n(K," of the pretrained models with, as associated values, the "),Xo=s(K,"CODE",{});var np=a(Xo);na=n(np,"url"),np.forEach(t),ra=n(K,` to the
associated pretrained vocabulary file.`),K.forEach(t),sa=l(O),U=s(O,"LI",{});var qe=a(U);Yo=s(qe,"STRONG",{});var rp=a(Yo);aa=n(rp,"max_model_input_sizes"),rp.forEach(t),ia=n(qe," ("),Jo=s(qe,"CODE",{});var sp=a(Jo);da=n(sp,"Dict[str, Optional[int]]"),sp.forEach(t),la=n(qe,") \u2014 A dictionary with, as keys, the "),Ko=s(qe,"CODE",{});var ap=a(Ko);ca=n(ap,"short-cut-names"),ap.forEach(t),pa=n(qe,`
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or `),Qo=s(qe,"CODE",{});var ip=a(Qo);ha=n(ip,"None"),ip.forEach(t),ma=n(qe," if the model has no maximum input size."),qe.forEach(t),ua=l(O),S=s(O,"LI",{});var Q=a(S);Zo=s(Q,"STRONG",{});var dp=a(Zo);fa=n(dp,"pretrained_init_configuration"),dp.forEach(t),ga=n(Q," ("),en=s(Q,"CODE",{});var lp=a(en);_a=n(lp,"Dict[str, Dict[str, Any]]"),lp.forEach(t),ka=n(Q,`) \u2014 A dictionary with, as keys, the
`),tn=s(Q,"CODE",{});var cp=a(tn);ba=n(cp,"short-cut-names"),cp.forEach(t),va=n(Q,` of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the `),on=s(Q,"CODE",{});var pp=a(on);Ta=n(pp,"__init__"),pp.forEach(t),ya=n(Q,` method of the tokenizer class for this pretrained model when loading the tokenizer
with the `),ho=s(Q,"A",{href:!0});var hp=a(ho);za=n(hp,"from_pretrained()"),hp.forEach(t),wa=n(Q," method."),Q.forEach(t),xa=l(O),De=s(O,"LI",{});var $r=a(De);nn=s($r,"STRONG",{});var mp=a(nn);$a=n(mp,"model_input_names"),mp.forEach(t),Pa=n($r," ("),rn=s($r,"CODE",{});var up=a(rn);qa=n(up,"List[str]"),up.forEach(t),Ea=n($r,") \u2014 A list of inputs expected in the forward pass of the model."),$r.forEach(t),Ba=l(O),V=s(O,"LI",{});var Ee=a(V);sn=s(Ee,"STRONG",{});var fp=a(sn);La=n(fp,"padding_side"),fp.forEach(t),Da=n(Ee," ("),an=s(Ee,"CODE",{});var gp=a(an);Ia=n(gp,"str"),gp.forEach(t),Na=n(Ee,`) \u2014 The default value for the side on which the model should have padding applied.
Should be `),dn=s(Ee,"CODE",{});var _p=a(dn);Aa=n(_p,"'right'"),_p.forEach(t),Fa=n(Ee," or "),ln=s(Ee,"CODE",{});var kp=a(ln);Sa=n(kp,"'left'"),kp.forEach(t),Ca=n(Ee,"."),Ee.forEach(t),Oa=l(O),G=s(O,"LI",{});var Be=a(G);cn=s(Be,"STRONG",{});var bp=a(cn);Wa=n(bp,"truncation_side"),bp.forEach(t),ja=n(Be," ("),pn=s(Be,"CODE",{});var vp=a(pn);Ra=n(vp,"str"),vp.forEach(t),Ma=n(Be,`) \u2014 The default value for the side on which the model should have truncation
applied. Should be `),hn=s(Be,"CODE",{});var Tp=a(hn);Ua=n(Tp,"'right'"),Tp.forEach(t),Va=n(Be," or "),mn=s(Be,"CODE",{});var yp=a(mn);Ga=n(yp,"'left'"),yp.forEach(t),Ha=n(Be,"."),Be.forEach(t),O.forEach(t),Xa=l(_),Ie=s(_,"DIV",{class:!0});var Or=a(Ie);b(it.$$.fragment,Or),Ya=l(Or),un=s(Or,"P",{});var zp=a(un);Ja=n(zp,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),zp.forEach(t),Or.forEach(t),Ka=l(_),Ne=s(_,"DIV",{class:!0});var Wr=a(Ne);b(dt.$$.fragment,Wr),Qa=l(Wr),fn=s(Wr,"P",{});var wp=a(fn);Za=n(wp,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),wp.forEach(t),Wr.forEach(t),ei=l(_),Ae=s(_,"DIV",{class:!0});var jr=a(Ae);b(lt.$$.fragment,jr),ti=l(jr),gn=s(jr,"P",{});var xp=a(gn);oi=n(xp,"Convert a list of lists of token ids into a list of strings by calling decode."),xp.forEach(t),jr.forEach(t),ni=l(_),ee=s(_,"DIV",{class:!0});var yo=a(ee);b(ct.$$.fragment,yo),ri=l(yo),_n=s(yo,"P",{});var $p=a(_n);si=n($p,"Tokenize and prepare for the model a list of sequences or a list of pairs of sequences."),$p.forEach(t),ai=l(yo),b(Fe.$$.fragment,yo),yo.forEach(t),ii=l(_),te=s(_,"DIV",{class:!0});var zo=a(te);b(pt.$$.fragment,zo),di=l(zo),kn=s(zo,"P",{});var Pp=a(kn);li=n(Pp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Pp.forEach(t),ci=l(zo),bn=s(zo,"P",{});var qp=a(bn);pi=n(qp,"This implementation does not add special tokens and this method should be overridden in a subclass."),qp.forEach(t),zo.forEach(t),hi=l(_),Se=s(_,"DIV",{class:!0});var Rr=a(Se);b(ht.$$.fragment,Rr),mi=l(Rr),vn=s(Rr,"P",{});var Ep=a(vn);ui=n(Ep,"Clean up a list of simple English tokenization artifacts like spaces before punctuations and abbreviated forms."),Ep.forEach(t),Rr.forEach(t),fi=l(_),Ce=s(_,"DIV",{class:!0});var Mr=a(Ce);b(mt.$$.fragment,Mr),gi=l(Mr),ut=s(Mr,"P",{});var Ur=a(ut);_i=n(Ur,"Converts a sequence of tokens in a single string. The most simple way to do it is "),Tn=s(Ur,"CODE",{});var Bp=a(Tn);ki=n(Bp,'" ".join(tokens)'),Bp.forEach(t),bi=n(Ur,` but we
often want to remove sub-word tokenization artifacts at the same time.`),Ur.forEach(t),Mr.forEach(t),vi=l(_),oe=s(_,"DIV",{class:!0});var wo=a(oe);b(ft.$$.fragment,wo),Ti=l(wo),mo=s(wo,"P",{});var jc=a(mo);yi=n(jc,"Create the token type IDs corresponding to the sequences passed. "),uo=s(jc,"A",{href:!0});var Lp=a(uo);zi=n(Lp,`What are token type
IDs?`),Lp.forEach(t),jc.forEach(t),wi=l(wo),yn=s(wo,"P",{});var Dp=a(yn);xi=n(Dp,"Should be overridden in a subclass if the model has a special way of building those."),Dp.forEach(t),wo.forEach(t),$i=l(_),ne=s(_,"DIV",{class:!0});var xo=a(ne);b(gt.$$.fragment,xo),Pi=l(xo),zn=s(xo,"P",{});var Ip=a(zn);qi=n(Ip,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ip.forEach(t),Ei=l(xo),_t=s(xo,"P",{});var Vr=a(_t);Bi=n(Vr,"Similar to doing "),wn=s(Vr,"CODE",{});var Np=a(wn);Li=n(Np,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Np.forEach(t),Di=n(Vr,"."),Vr.forEach(t),xo.forEach(t),Ii=l(_),re=s(_,"DIV",{class:!0});var $o=a(re);b(kt.$$.fragment,$o),Ni=l($o),xn=s($o,"P",{});var Ap=a(xn);Ai=n(Ap,"Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary."),Ap.forEach(t),Fi=l($o),bt=s($o,"P",{});var Gr=a(bt);Si=n(Gr,"Same as doing "),$n=s(Gr,"CODE",{});var Fp=a($n);Ci=n(Fp,"self.convert_tokens_to_ids(self.tokenize(text))"),Fp.forEach(t),Oi=n(Gr,"."),Gr.forEach(t),$o.forEach(t),Wi=l(_),se=s(_,"DIV",{class:!0});var Po=a(se);b(vt.$$.fragment,Po),ji=l(Po),Pn=s(Po,"P",{});var Sp=a(Pn);Ri=n(Sp,"Tokenize and prepare for the model a sequence or a pair of sequences."),Sp.forEach(t),Mi=l(Po),b(Oe.$$.fragment,Po),Po.forEach(t),Ui=l(_),H=s(_,"DIV",{class:!0});var tt=a(H);b(Tt.$$.fragment,tt),Vi=l(tt),yt=s(tt,"P",{});var Hr=a(yt);Gi=n(Hr,"Instantiate a "),fo=s(Hr,"A",{href:!0});var Cp=a(fo);Hi=n(Cp,"PreTrainedTokenizerBase"),Cp.forEach(t),Xi=n(Hr,` (or a derived class) from a predefined
tokenizer.`),Hr.forEach(t),Yi=l(tt),b(We.$$.fragment,tt),Ji=l(tt),b(je.$$.fragment,tt),tt.forEach(t),Ki=l(_),Re=s(_,"DIV",{class:!0});var Xr=a(Re);b(zt.$$.fragment,Xr),Qi=l(Xr),be=s(Xr,"P",{});var qo=a(be);Zi=n(qo,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qn=s(qo,"CODE",{});var Op=a(qn);ed=n(Op,"prepare_for_model"),Op.forEach(t),td=n(qo," or "),En=s(qo,"CODE",{});var Wp=a(En);od=n(Wp,"encode_plus"),Wp.forEach(t),nd=n(qo," methods."),qo.forEach(t),Xr.forEach(t),rd=l(_),ae=s(_,"DIV",{class:!0});var Eo=a(ae);b(wt.$$.fragment,Eo),sd=l(Eo),Bn=s(Eo,"P",{});var jp=a(Bn);ad=n(jp,"Returns the vocabulary as a dictionary of token to index."),jp.forEach(t),id=l(Eo),ie=s(Eo,"P",{});var oo=a(ie);Ln=s(oo,"CODE",{});var Rp=a(Ln);dd=n(Rp,"tokenizer.get_vocab()[token]"),Rp.forEach(t),ld=n(oo," is equivalent to "),Dn=s(oo,"CODE",{});var Mp=a(Dn);cd=n(Mp,"tokenizer.convert_tokens_to_ids(token)"),Mp.forEach(t),pd=n(oo," when "),In=s(oo,"CODE",{});var Up=a(In);hd=n(Up,"token"),Up.forEach(t),md=n(oo,` is in the
vocab.`),oo.forEach(t),Eo.forEach(t),ud=l(_),X=s(_,"DIV",{class:!0});var ot=a(X);b(xt.$$.fragment,ot),fd=l(ot),Nn=s(ot,"P",{});var Vp=a(Nn);gd=n(Vp,`Pad a single encoded input or a batch of encoded inputs up to predefined length or to the max sequence length
in the batch.`),Vp.forEach(t),_d=l(ot),J=s(ot,"P",{});var nt=a(J);kd=n(nt,"Padding side (left/right) padding token ids are defined at the tokenizer level (with "),An=s(nt,"CODE",{});var Gp=a(An);bd=n(Gp,"self.padding_side"),Gp.forEach(t),vd=n(nt,`,
`),Fn=s(nt,"CODE",{});var Hp=a(Fn);Td=n(Hp,"self.pad_token_id"),Hp.forEach(t),yd=n(nt," and "),Sn=s(nt,"CODE",{});var Xp=a(Sn);zd=n(Xp,"self.pad_token_type_id"),Xp.forEach(t),wd=n(nt,")"),nt.forEach(t),xd=l(ot),b(Me.$$.fragment,ot),ot.forEach(t),$d=l(_),Ue=s(_,"DIV",{class:!0});var Yr=a(Ue);b($t.$$.fragment,Yr),Pd=l(Yr),j=s(Yr,"P",{});var he=a(j);qd=n(he,`Prepares a sequence of input id, or a pair of sequences of inputs ids so that it can be used by the model. It
adds special tokens, truncates sequences if overflowing while taking into account the special tokens and
manages a moving window (with user defined stride) for overflowing tokens. Please Note, for `),Cn=s(he,"EM",{});var Yp=a(Cn);Ed=n(Yp,"pair_ids"),Yp.forEach(t),Bd=n(he,`
different than `),On=s(he,"CODE",{});var Jp=a(On);Ld=n(Jp,"None"),Jp.forEach(t),Dd=n(he," and "),Wn=s(he,"EM",{});var Kp=a(Wn);Id=n(Kp,"truncation_strategy = longest_first"),Kp.forEach(t),Nd=n(he," or "),jn=s(he,"CODE",{});var Qp=a(jn);Ad=n(Qp,"True"),Qp.forEach(t),Fd=n(he,`, it is not possible to return
overflowing tokens. Such a combination of arguments will raise an error.`),he.forEach(t),Yr.forEach(t),Sd=l(_),Ve=s(_,"DIV",{class:!0});var Jr=a(Ve);b(Pt.$$.fragment,Jr),Cd=l(Jr),Rn=s(Jr,"P",{});var Zp=a(Rn);Od=n(Zp,"Prepare model inputs for translation. For best performance, translate one sentence at a time."),Zp.forEach(t),Jr.forEach(t),Wd=l(_),de=s(_,"DIV",{class:!0});var Bo=a(de);b(qt.$$.fragment,Bo),jd=l(Bo),Et=s(Bo,"P",{});var Kr=a(Et);Rd=n(Kr,`Upload the tokenizer files to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Mn=s(Kr,"CODE",{});var eh=a(Mn);Md=n(eh,"repo_path_or_name"),eh.forEach(t),Ud=n(Kr,"."),Kr.forEach(t),Vd=l(Bo),b(Ge.$$.fragment,Bo),Bo.forEach(t),Gd=l(_),le=s(_,"DIV",{class:!0});var Lo=a(le);b(Bt.$$.fragment,Lo),Hd=l(Lo),Lt=s(Lo,"P",{});var Qr=a(Lt);Xd=n(Qr,`Register this class with a given auto class. This should only be used for custom tokenizers as the ones in the
library are already mapped with `),Un=s(Qr,"CODE",{});var th=a(Un);Yd=n(th,"AutoTokenizer"),th.forEach(t),Jd=n(Qr,"."),Qr.forEach(t),Kd=l(Lo),b(He.$$.fragment,Lo),Lo.forEach(t),Qd=l(_),Y=s(_,"DIV",{class:!0});var rt=a(Y);b(Dt.$$.fragment,rt),Zd=l(rt),Vn=s(rt,"P",{});var oh=a(Vn);el=n(oh,"Save the full tokenizer state."),oh.forEach(t),tl=l(rt),It=s(rt,"P",{});var Zr=a(It);ol=n(Zr,`This method make sure the full tokenizer can then be re-loaded using the
`),Gn=s(Zr,"CODE",{});var nh=a(Gn);nl=n(nh,"from_pretrained"),nh.forEach(t),rl=n(Zr," class method.."),Zr.forEach(t),sl=l(rt),Nt=s(rt,"P",{});var es=a(Nt);al=n(es,`Warning,None This won\u2019t save modifications you may have applied to the tokenizer after the instantiation (for
instance, modifying `),Hn=s(es,"CODE",{});var rh=a(Hn);il=n(rh,"tokenizer.do_lower_case"),rh.forEach(t),dl=n(es," after creation)."),es.forEach(t),rt.forEach(t),ll=l(_),ce=s(_,"DIV",{class:!0});var Do=a(ce);b(At.$$.fragment,Do),cl=l(Do),Xn=s(Do,"P",{});var sh=a(Xn);pl=n(sh,"Save only the vocabulary of the tokenizer (vocabulary + added tokens)."),sh.forEach(t),hl=l(Do),Ft=s(Do,"P",{});var ts=a(Ft);ml=n(ts,`This method won\u2019t save the configuration and special token mappings of the tokenizer. Use
`),Yn=s(ts,"CODE",{});var ah=a(Yn);ul=n(ah,"_save_pretrained()"),ah.forEach(t),fl=n(ts," to save the whole state of the tokenizer."),ts.forEach(t),Do.forEach(t),gl=l(_),Xe=s(_,"DIV",{class:!0});var os=a(Xe);b(St.$$.fragment,os),_l=l(os),Ct=s(os,"P",{});var ns=a(Ct);kl=n(ns,"Converts a string in a sequence of tokens, replacing unknown tokens with the "),Jn=s(ns,"CODE",{});var ih=a(Jn);bl=n(ih,"unk_token"),ih.forEach(t),vl=n(ns,"."),ns.forEach(t),os.forEach(t),Tl=l(_),Ye=s(_,"DIV",{class:!0});var rs=a(Ye);b(Ot.$$.fragment,rs),yl=l(rs),Kn=s(rs,"P",{});var dh=a(Kn);zl=n(dh,"Truncates a sequence pair in-place following the strategy."),dh.forEach(t),rs.forEach(t),_.forEach(t),Lr=l(i),ve=s(i,"H2",{class:!0});var ss=a(ve);Je=s(ss,"A",{id:!0,class:!0,href:!0});var lh=a(Je);Qn=s(lh,"SPAN",{});var ch=a(Qn);b(Wt.$$.fragment,ch),ch.forEach(t),lh.forEach(t),wl=l(ss),Zn=s(ss,"SPAN",{});var ph=a(Zn);xl=n(ph,"SpecialTokensMixin"),ph.forEach(t),ss.forEach(t),Dr=l(i),A=s(i,"DIV",{class:!0});var me=a(A);b(jt.$$.fragment,me),$l=l(me),Te=s(me,"P",{});var Io=a(Te);Pl=n(Io,"A mixin derived by "),go=s(Io,"A",{href:!0});var hh=a(go);ql=n(hh,"PreTrainedTokenizer"),hh.forEach(t),El=n(Io," and "),_o=s(Io,"A",{href:!0});var mh=a(_o);Bl=n(mh,"PreTrainedTokenizerFast"),mh.forEach(t),Ll=n(Io,` to handle specific behaviors related to
special tokens. In particular, this class hold the attributes which can be used to directly access these special
tokens in a model-independent manner and allow to set and update the special tokens.`),Io.forEach(t),Dl=l(me),B=s(me,"DIV",{class:!0});var N=a(B);b(Rt.$$.fragment,N),Il=l(N),er=s(N,"P",{});var uh=a(er);Nl=n(uh,`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`),uh.forEach(t),Al=l(N),tr=s(N,"P",{});var fh=a(tr);Fl=n(fh,`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),fh.forEach(t),Sl=l(N),Mt=s(N,"P",{});var as=a(Mt);Cl=n(as,"In order to do that, please use the "),ko=s(as,"A",{href:!0});var gh=a(ko);Ol=n(gh,"resize_token_embeddings()"),gh.forEach(t),Wl=n(as," method."),as.forEach(t),jl=l(N),Ut=s(N,"P",{});var is=a(Ut);Rl=n(is,"Using "),or=s(is,"CODE",{});var _h=a(or);Ml=n(_h,"add_special_tokens"),_h.forEach(t),Ul=n(is," will ensure your special tokens can be used in several ways:"),is.forEach(t),Vl=l(N),Vt=s(N,"UL",{});var ds=a(Vt);nr=s(ds,"LI",{});var kh=a(nr);Gl=n(kh,"Special tokens are carefully handled by the tokenizer (they are never split)."),kh.forEach(t),Hl=l(ds),Gt=s(ds,"LI",{});var ls=a(Gt);Xl=n(ls,"You can easily refer to special tokens using tokenizer class attributes like "),rr=s(ls,"CODE",{});var bh=a(rr);Yl=n(bh,"tokenizer.cls_token"),bh.forEach(t),Jl=n(ls,`. This
makes it easy to develop model-agnostic training and fine-tuning scripts.`),ls.forEach(t),ds.forEach(t),Kl=l(N),R=s(N,"P",{});var ue=a(R);Ql=n(ue,`When possible, special tokens are already registered for provided pretrained models (for instance
`),bo=s(ue,"A",{href:!0});var vh=a(bo);Zl=n(vh,"BertTokenizer"),vh.forEach(t),ec=l(ue),sr=s(ue,"CODE",{});var Th=a(sr);tc=n(Th,"cls_token"),Th.forEach(t),oc=n(ue," is already registered to be :obj"),ar=s(ue,"EM",{});var yh=a(ar);nc=n(yh,"\u2019[CLS]\u2019"),yh.forEach(t),rc=n(ue,` and XLM\u2019s one is also registered to be
`),ir=s(ue,"CODE",{});var zh=a(ir);sc=n(zh,"'</s>'"),zh.forEach(t),ac=n(ue,")."),ue.forEach(t),ic=l(N),b(Ke.$$.fragment,N),N.forEach(t),dc=l(me),C=s(me,"DIV",{class:!0});var fe=a(C);b(Ht.$$.fragment,fe),lc=l(fe),dr=s(fe,"P",{});var wh=a(dr);cc=n(wh,`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary.`),wh.forEach(t),pc=l(fe),lr=s(fe,"P",{});var xh=a(lr);hc=n(xh,`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),xh.forEach(t),mc=l(fe),Xt=s(fe,"P",{});var cs=a(Xt);uc=n(cs,"In order to do that, please use the "),vo=s(cs,"A",{href:!0});var $h=a(vo);fc=n($h,"resize_token_embeddings()"),$h.forEach(t),gc=n(cs," method."),cs.forEach(t),_c=l(fe),b(Qe.$$.fragment,fe),fe.forEach(t),kc=l(me),pe=s(me,"DIV",{class:!0});var No=a(pe);b(Yt.$$.fragment,No),bc=l(No),ye=s(No,"P",{});var Ao=a(ye);vc=n(Ao,"Make sure that all the special tokens attributes of the tokenizer ("),cr=s(Ao,"CODE",{});var Ph=a(cr);Tc=n(Ph,"tokenizer.mask_token"),Ph.forEach(t),yc=n(Ao,`,
`),pr=s(Ao,"CODE",{});var qh=a(pr);zc=n(qh,"tokenizer.cls_token"),qh.forEach(t),wc=n(Ao,", etc.) are in the vocabulary."),Ao.forEach(t),xc=l(No),hr=s(No,"P",{});var Eh=a(hr);$c=n(Eh,"Add the missing ones to the vocabulary if needed."),Eh.forEach(t),No.forEach(t),me.forEach(t),Ir=l(i),ze=s(i,"H2",{class:!0});var ps=a(ze);Ze=s(ps,"A",{id:!0,class:!0,href:!0});var Bh=a(Ze);mr=s(Bh,"SPAN",{});var Lh=a(mr);b(Jt.$$.fragment,Lh),Lh.forEach(t),Bh.forEach(t),Pc=l(ps),ur=s(ps,"SPAN",{});var Dh=a(ur);qc=n(Dh,"Enums and namedtuples"),Dh.forEach(t),ps.forEach(t),Nr=l(i),we=s(i,"DIV",{class:!0});var hs=a(we);b(Kt.$$.fragment,hs),Ec=l(hs),xe=s(hs,"P",{});var Fo=a(xe);Bc=n(Fo,"Possible values for the "),fr=s(Fo,"CODE",{});var Ih=a(fr);Lc=n(Ih,"truncation"),Ih.forEach(t),Dc=n(Fo," argument in "),et=s(Fo,"A",{href:!0});var ms=a(et);Ic=n(ms,"PreTrainedTokenizerBase."),gr=s(ms,"STRONG",{});var Nh=a(gr);Nc=n(Nh,"call"),Nh.forEach(t),Ac=n(ms,"()"),ms.forEach(t),Fc=n(Fo,`. Useful for tab-completion in
an IDE.`),Fo.forEach(t),hs.forEach(t),Ar=l(i),$e=s(i,"DIV",{class:!0});var us=a($e);b(Qt.$$.fragment,us),Sc=l(us),_r=s(us,"P",{});var Ah=a(_r);Cc=n(Ah,"Character span in the original string."),Ah.forEach(t),us.forEach(t),Fr=l(i),Pe=s(i,"DIV",{class:!0});var fs=a(Pe);b(Zt.$$.fragment,fs),Oc=l(fs),kr=s(fs,"P",{});var Fh=a(kr);Wc=n(Fh,"Token span in an encoded string (list of tokens)."),Fh.forEach(t),fs.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(Qh)),h(m,"id","utilities-for-tokenizers"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#utilities-for-tokenizers"),h(f,"class","relative group"),h(ro,"href","/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase"),h(so,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ao,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(io,"href","/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.SpecialTokensMixin"),h(Le,"id","transformers.PreTrainedTokenizerBase"),h(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Le,"href","#transformers.PreTrainedTokenizerBase"),h(_e,"class","relative group"),h(co,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(po,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(ho,"href","/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(uo,"href","../glossary#token-type-ids"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"href","/docs/transformers/pr_highlight/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase"),h(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Je,"id","transformers.SpecialTokensMixin"),h(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Je,"href","#transformers.SpecialTokensMixin"),h(ve,"class","relative group"),h(go,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(_o,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(ko,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings"),h(bo,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer"),h(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vo,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ze,"id","transformers.tokenization_utils_base.TruncationStrategy"),h(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ze,"href","#transformers.tokenization_utils_base.TruncationStrategy"),h(ze,"class","relative group"),h(et,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,w){e(document.head,p),P(i,$,w),P(i,f,w),e(f,m),e(m,x),v(c,x,null),e(f,g),e(f,L),e(L,ge),P(i,W,w),P(i,D,w),e(D,no),e(D,ro),e(ro,vs),e(D,Ts),e(D,so),e(so,ys),e(D,zs),e(D,ao),e(ao,ws),e(D,xs),e(D,io),e(io,$s),e(D,Ps),P(i,qr,w),P(i,lo,w),e(lo,qs),P(i,Er,w),P(i,_e,w),e(_e,Le),e(Le,So),v(st,So,null),e(_e,Es),e(_e,Co),e(Co,Bs),P(i,Br,w),P(i,u,w),v(at,u,null),e(u,Ls),e(u,ke),e(ke,Ds),e(ke,co),e(co,Is),e(ke,Ns),e(ke,po),e(po,As),e(ke,Fs),e(u,Ss),e(u,Oo),e(Oo,Cs),e(u,Os),e(u,Wo),e(Wo,Ws),e(u,js),e(u,I),e(I,Z),e(Z,jo),e(jo,Rs),e(Z,Ms),e(Z,Ro),e(Ro,Us),e(Z,Vs),e(Z,Mo),e(Mo,Gs),e(Z,Hs),e(I,Xs),e(I,F),e(F,Uo),e(Uo,Ys),e(F,Js),e(F,Vo),e(Vo,Ks),e(F,Qs),e(F,Go),e(Go,Zs),e(F,ea),e(F,Ho),e(Ho,ta),e(F,oa),e(F,Xo),e(Xo,na),e(F,ra),e(I,sa),e(I,U),e(U,Yo),e(Yo,aa),e(U,ia),e(U,Jo),e(Jo,da),e(U,la),e(U,Ko),e(Ko,ca),e(U,pa),e(U,Qo),e(Qo,ha),e(U,ma),e(I,ua),e(I,S),e(S,Zo),e(Zo,fa),e(S,ga),e(S,en),e(en,_a),e(S,ka),e(S,tn),e(tn,ba),e(S,va),e(S,on),e(on,Ta),e(S,ya),e(S,ho),e(ho,za),e(S,wa),e(I,xa),e(I,De),e(De,nn),e(nn,$a),e(De,Pa),e(De,rn),e(rn,qa),e(De,Ea),e(I,Ba),e(I,V),e(V,sn),e(sn,La),e(V,Da),e(V,an),e(an,Ia),e(V,Na),e(V,dn),e(dn,Aa),e(V,Fa),e(V,ln),e(ln,Sa),e(V,Ca),e(I,Oa),e(I,G),e(G,cn),e(cn,Wa),e(G,ja),e(G,pn),e(pn,Ra),e(G,Ma),e(G,hn),e(hn,Ua),e(G,Va),e(G,mn),e(mn,Ga),e(G,Ha),e(u,Xa),e(u,Ie),v(it,Ie,null),e(Ie,Ya),e(Ie,un),e(un,Ja),e(u,Ka),e(u,Ne),v(dt,Ne,null),e(Ne,Qa),e(Ne,fn),e(fn,Za),e(u,ei),e(u,Ae),v(lt,Ae,null),e(Ae,ti),e(Ae,gn),e(gn,oi),e(u,ni),e(u,ee),v(ct,ee,null),e(ee,ri),e(ee,_n),e(_n,si),e(ee,ai),v(Fe,ee,null),e(u,ii),e(u,te),v(pt,te,null),e(te,di),e(te,kn),e(kn,li),e(te,ci),e(te,bn),e(bn,pi),e(u,hi),e(u,Se),v(ht,Se,null),e(Se,mi),e(Se,vn),e(vn,ui),e(u,fi),e(u,Ce),v(mt,Ce,null),e(Ce,gi),e(Ce,ut),e(ut,_i),e(ut,Tn),e(Tn,ki),e(ut,bi),e(u,vi),e(u,oe),v(ft,oe,null),e(oe,Ti),e(oe,mo),e(mo,yi),e(mo,uo),e(uo,zi),e(oe,wi),e(oe,yn),e(yn,xi),e(u,$i),e(u,ne),v(gt,ne,null),e(ne,Pi),e(ne,zn),e(zn,qi),e(ne,Ei),e(ne,_t),e(_t,Bi),e(_t,wn),e(wn,Li),e(_t,Di),e(u,Ii),e(u,re),v(kt,re,null),e(re,Ni),e(re,xn),e(xn,Ai),e(re,Fi),e(re,bt),e(bt,Si),e(bt,$n),e($n,Ci),e(bt,Oi),e(u,Wi),e(u,se),v(vt,se,null),e(se,ji),e(se,Pn),e(Pn,Ri),e(se,Mi),v(Oe,se,null),e(u,Ui),e(u,H),v(Tt,H,null),e(H,Vi),e(H,yt),e(yt,Gi),e(yt,fo),e(fo,Hi),e(yt,Xi),e(H,Yi),v(We,H,null),e(H,Ji),v(je,H,null),e(u,Ki),e(u,Re),v(zt,Re,null),e(Re,Qi),e(Re,be),e(be,Zi),e(be,qn),e(qn,ed),e(be,td),e(be,En),e(En,od),e(be,nd),e(u,rd),e(u,ae),v(wt,ae,null),e(ae,sd),e(ae,Bn),e(Bn,ad),e(ae,id),e(ae,ie),e(ie,Ln),e(Ln,dd),e(ie,ld),e(ie,Dn),e(Dn,cd),e(ie,pd),e(ie,In),e(In,hd),e(ie,md),e(u,ud),e(u,X),v(xt,X,null),e(X,fd),e(X,Nn),e(Nn,gd),e(X,_d),e(X,J),e(J,kd),e(J,An),e(An,bd),e(J,vd),e(J,Fn),e(Fn,Td),e(J,yd),e(J,Sn),e(Sn,zd),e(J,wd),e(X,xd),v(Me,X,null),e(u,$d),e(u,Ue),v($t,Ue,null),e(Ue,Pd),e(Ue,j),e(j,qd),e(j,Cn),e(Cn,Ed),e(j,Bd),e(j,On),e(On,Ld),e(j,Dd),e(j,Wn),e(Wn,Id),e(j,Nd),e(j,jn),e(jn,Ad),e(j,Fd),e(u,Sd),e(u,Ve),v(Pt,Ve,null),e(Ve,Cd),e(Ve,Rn),e(Rn,Od),e(u,Wd),e(u,de),v(qt,de,null),e(de,jd),e(de,Et),e(Et,Rd),e(Et,Mn),e(Mn,Md),e(Et,Ud),e(de,Vd),v(Ge,de,null),e(u,Gd),e(u,le),v(Bt,le,null),e(le,Hd),e(le,Lt),e(Lt,Xd),e(Lt,Un),e(Un,Yd),e(Lt,Jd),e(le,Kd),v(He,le,null),e(u,Qd),e(u,Y),v(Dt,Y,null),e(Y,Zd),e(Y,Vn),e(Vn,el),e(Y,tl),e(Y,It),e(It,ol),e(It,Gn),e(Gn,nl),e(It,rl),e(Y,sl),e(Y,Nt),e(Nt,al),e(Nt,Hn),e(Hn,il),e(Nt,dl),e(u,ll),e(u,ce),v(At,ce,null),e(ce,cl),e(ce,Xn),e(Xn,pl),e(ce,hl),e(ce,Ft),e(Ft,ml),e(Ft,Yn),e(Yn,ul),e(Ft,fl),e(u,gl),e(u,Xe),v(St,Xe,null),e(Xe,_l),e(Xe,Ct),e(Ct,kl),e(Ct,Jn),e(Jn,bl),e(Ct,vl),e(u,Tl),e(u,Ye),v(Ot,Ye,null),e(Ye,yl),e(Ye,Kn),e(Kn,zl),P(i,Lr,w),P(i,ve,w),e(ve,Je),e(Je,Qn),v(Wt,Qn,null),e(ve,wl),e(ve,Zn),e(Zn,xl),P(i,Dr,w),P(i,A,w),v(jt,A,null),e(A,$l),e(A,Te),e(Te,Pl),e(Te,go),e(go,ql),e(Te,El),e(Te,_o),e(_o,Bl),e(Te,Ll),e(A,Dl),e(A,B),v(Rt,B,null),e(B,Il),e(B,er),e(er,Nl),e(B,Al),e(B,tr),e(tr,Fl),e(B,Sl),e(B,Mt),e(Mt,Cl),e(Mt,ko),e(ko,Ol),e(Mt,Wl),e(B,jl),e(B,Ut),e(Ut,Rl),e(Ut,or),e(or,Ml),e(Ut,Ul),e(B,Vl),e(B,Vt),e(Vt,nr),e(nr,Gl),e(Vt,Hl),e(Vt,Gt),e(Gt,Xl),e(Gt,rr),e(rr,Yl),e(Gt,Jl),e(B,Kl),e(B,R),e(R,Ql),e(R,bo),e(bo,Zl),e(R,ec),e(R,sr),e(sr,tc),e(R,oc),e(R,ar),e(ar,nc),e(R,rc),e(R,ir),e(ir,sc),e(R,ac),e(B,ic),v(Ke,B,null),e(A,dc),e(A,C),v(Ht,C,null),e(C,lc),e(C,dr),e(dr,cc),e(C,pc),e(C,lr),e(lr,hc),e(C,mc),e(C,Xt),e(Xt,uc),e(Xt,vo),e(vo,fc),e(Xt,gc),e(C,_c),v(Qe,C,null),e(A,kc),e(A,pe),v(Yt,pe,null),e(pe,bc),e(pe,ye),e(ye,vc),e(ye,cr),e(cr,Tc),e(ye,yc),e(ye,pr),e(pr,zc),e(ye,wc),e(pe,xc),e(pe,hr),e(hr,$c),P(i,Ir,w),P(i,ze,w),e(ze,Ze),e(Ze,mr),v(Jt,mr,null),e(ze,Pc),e(ze,ur),e(ur,qc),P(i,Nr,w),P(i,we,w),v(Kt,we,null),e(we,Ec),e(we,xe),e(xe,Bc),e(xe,fr),e(fr,Lc),e(xe,Dc),e(xe,et),e(et,Ic),e(et,gr),e(gr,Nc),e(et,Ac),e(xe,Fc),P(i,Ar,w),P(i,$e,w),v(Qt,$e,null),e($e,Sc),e($e,_r),e(_r,Cc),P(i,Fr,w),P(i,Pe,w),v(Zt,Pe,null),e(Pe,Oc),e(Pe,kr),e(kr,Wc),Sr=!0},p(i,[w]){const eo={};w&2&&(eo.$$scope={dirty:w,ctx:i}),Fe.$set(eo);const br={};w&2&&(br.$$scope={dirty:w,ctx:i}),Oe.$set(br);const vr={};w&2&&(vr.$$scope={dirty:w,ctx:i}),We.$set(vr);const Tr={};w&2&&(Tr.$$scope={dirty:w,ctx:i}),je.$set(Tr);const M={};w&2&&(M.$$scope={dirty:w,ctx:i}),Me.$set(M);const yr={};w&2&&(yr.$$scope={dirty:w,ctx:i}),Ge.$set(yr);const zr={};w&2&&(zr.$$scope={dirty:w,ctx:i}),He.$set(zr);const wr={};w&2&&(wr.$$scope={dirty:w,ctx:i}),Ke.$set(wr);const xr={};w&2&&(xr.$$scope={dirty:w,ctx:i}),Qe.$set(xr)},i(i){Sr||(T(c.$$.fragment,i),T(st.$$.fragment,i),T(at.$$.fragment,i),T(it.$$.fragment,i),T(dt.$$.fragment,i),T(lt.$$.fragment,i),T(ct.$$.fragment,i),T(Fe.$$.fragment,i),T(pt.$$.fragment,i),T(ht.$$.fragment,i),T(mt.$$.fragment,i),T(ft.$$.fragment,i),T(gt.$$.fragment,i),T(kt.$$.fragment,i),T(vt.$$.fragment,i),T(Oe.$$.fragment,i),T(Tt.$$.fragment,i),T(We.$$.fragment,i),T(je.$$.fragment,i),T(zt.$$.fragment,i),T(wt.$$.fragment,i),T(xt.$$.fragment,i),T(Me.$$.fragment,i),T($t.$$.fragment,i),T(Pt.$$.fragment,i),T(qt.$$.fragment,i),T(Ge.$$.fragment,i),T(Bt.$$.fragment,i),T(He.$$.fragment,i),T(Dt.$$.fragment,i),T(At.$$.fragment,i),T(St.$$.fragment,i),T(Ot.$$.fragment,i),T(Wt.$$.fragment,i),T(jt.$$.fragment,i),T(Rt.$$.fragment,i),T(Ke.$$.fragment,i),T(Ht.$$.fragment,i),T(Qe.$$.fragment,i),T(Yt.$$.fragment,i),T(Jt.$$.fragment,i),T(Kt.$$.fragment,i),T(Qt.$$.fragment,i),T(Zt.$$.fragment,i),Sr=!0)},o(i){y(c.$$.fragment,i),y(st.$$.fragment,i),y(at.$$.fragment,i),y(it.$$.fragment,i),y(dt.$$.fragment,i),y(lt.$$.fragment,i),y(ct.$$.fragment,i),y(Fe.$$.fragment,i),y(pt.$$.fragment,i),y(ht.$$.fragment,i),y(mt.$$.fragment,i),y(ft.$$.fragment,i),y(gt.$$.fragment,i),y(kt.$$.fragment,i),y(vt.$$.fragment,i),y(Oe.$$.fragment,i),y(Tt.$$.fragment,i),y(We.$$.fragment,i),y(je.$$.fragment,i),y(zt.$$.fragment,i),y(wt.$$.fragment,i),y(xt.$$.fragment,i),y(Me.$$.fragment,i),y($t.$$.fragment,i),y(Pt.$$.fragment,i),y(qt.$$.fragment,i),y(Ge.$$.fragment,i),y(Bt.$$.fragment,i),y(He.$$.fragment,i),y(Dt.$$.fragment,i),y(At.$$.fragment,i),y(St.$$.fragment,i),y(Ot.$$.fragment,i),y(Wt.$$.fragment,i),y(jt.$$.fragment,i),y(Rt.$$.fragment,i),y(Ke.$$.fragment,i),y(Ht.$$.fragment,i),y(Qe.$$.fragment,i),y(Yt.$$.fragment,i),y(Jt.$$.fragment,i),y(Kt.$$.fragment,i),y(Qt.$$.fragment,i),y(Zt.$$.fragment,i),Sr=!1},d(i){t(p),i&&t($),i&&t(f),z(c),i&&t(W),i&&t(D),i&&t(qr),i&&t(lo),i&&t(Er),i&&t(_e),z(st),i&&t(Br),i&&t(u),z(at),z(it),z(dt),z(lt),z(ct),z(Fe),z(pt),z(ht),z(mt),z(ft),z(gt),z(kt),z(vt),z(Oe),z(Tt),z(We),z(je),z(zt),z(wt),z(xt),z(Me),z($t),z(Pt),z(qt),z(Ge),z(Bt),z(He),z(Dt),z(At),z(St),z(Ot),i&&t(Lr),i&&t(ve),z(Wt),i&&t(Dr),i&&t(A),z(jt),z(Rt),z(Ke),z(Ht),z(Qe),z(Yt),i&&t(Ir),i&&t(ze),z(Jt),i&&t(Nr),i&&t(we),z(Kt),i&&t(Ar),i&&t($e),z(Qt),i&&t(Fr),i&&t(Pe),z(Zt)}}}const Qh={local:"utilities-for-tokenizers",sections:[{local:"transformers.PreTrainedTokenizerBase",title:"PreTrainedTokenizerBase"},{local:"transformers.SpecialTokensMixin",title:"SpecialTokensMixin"},{local:"transformers.tokenization_utils_base.TruncationStrategy",title:"Enums and namedtuples"}],title:"Utilities for Tokenizers"};function Zh(E){return jh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class am extends Sh{constructor(p){super();Ch(this,p,Zh,Kh,Oh,{})}}export{am as default,Qh as metadata};
