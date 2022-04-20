import{S as mm,i as fm,s as um,e as a,k as d,w as b,t as n,M as gm,c as r,d as t,m as c,a as s,x as w,h as i,b as l,F as e,g as m,y,q as x,o as $,B as F,v as _m}from"../../chunks/vendor-6b77c823.js";import{T as _e}from"../../chunks/Tip-39098574.js";import{D as W}from"../../chunks/Docstring-1088f2fb.js";import{C as Ft}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";function vm(M){let p,T,f,g,v;return{c(){p=a("p"),T=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=a("a"),g=n("Github Issue"),v=n("."),this.h()},l(_){p=r(_,"P",{});var u=s(p);T=i(u,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=r(u,"A",{href:!0,rel:!0});var V=s(f);g=i(V,"Github Issue"),V.forEach(t),v=i(u,"."),u.forEach(t),this.h()},h(){l(f,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(f,"rel","nofollow")},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function Tm(M){let p,T;return{c(){p=a("p"),T=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){p=r(f,"P",{});var g=s(p);T=i(g,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),g.forEach(t)},m(f,g){m(f,p,g),e(p,T)},d(f){f&&t(p)}}}function bm(M){let p,T,f,g,v;return{c(){p=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var u=s(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function wm(M){let p,T,f,g,v;return{c(){p=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var u=s(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function ym(M){let p,T,f,g,v;return{c(){p=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var u=s(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function xm(M){let p,T,f,g,v,_,u,V,pe,R,k,ie,j,B,oe,C,he,ae;return{c(){p=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),f=d(),g=a("ul"),v=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),V=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=n("This second option is useful when using "),j=a("code"),B=n("tf.keras.Model.fit"),oe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=n("model(inputs)"),ae=n(".")},l(E){p=r(E,"P",{});var I=s(p);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),f=c(E),g=r(E,"UL",{});var z=s(g);v=r(z,"LI",{});var Ie=s(v);_=i(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),u=c(z),V=r(z,"LI",{});var re=s(V);pe=i(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),z.forEach(t),R=c(E),k=r(E,"P",{});var L=s(k);ie=i(L,"This second option is useful when using "),j=r(L,"CODE",{});var je=s(j);B=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=r(L,"CODE",{});var Te=s(C);he=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,I){m(E,p,I),e(p,T),m(E,f,I),m(E,g,I),e(g,v),e(v,_),e(g,u),e(g,V),e(V,pe),m(E,R,I),m(E,k,I),e(k,ie),e(k,j),e(j,B),e(k,oe),e(k,C),e(C,he),e(k,ae)},d(E){E&&t(p),E&&t(f),E&&t(g),E&&t(R),E&&t(k)}}}function $m(M){let p,T,f,g,v;return{c(){p=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var u=s(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function Fm(M){let p,T,f,g,v,_,u,V,pe,R,k,ie,j,B,oe,C,he,ae;return{c(){p=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),f=d(),g=a("ul"),v=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),V=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=n("This second option is useful when using "),j=a("code"),B=n("tf.keras.Model.fit"),oe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=n("model(inputs)"),ae=n(".")},l(E){p=r(E,"P",{});var I=s(p);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),f=c(E),g=r(E,"UL",{});var z=s(g);v=r(z,"LI",{});var Ie=s(v);_=i(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),u=c(z),V=r(z,"LI",{});var re=s(V);pe=i(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),z.forEach(t),R=c(E),k=r(E,"P",{});var L=s(k);ie=i(L,"This second option is useful when using "),j=r(L,"CODE",{});var je=s(j);B=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=r(L,"CODE",{});var Te=s(C);he=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,I){m(E,p,I),e(p,T),m(E,f,I),m(E,g,I),e(g,v),e(v,_),e(g,u),e(g,V),e(V,pe),m(E,R,I),m(E,k,I),e(k,ie),e(k,j),e(j,B),e(k,oe),e(k,C),e(C,he),e(k,ae)},d(E){E&&t(p),E&&t(f),E&&t(g),E&&t(R),E&&t(k)}}}function Vm(M){let p,T,f,g,v;return{c(){p=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var u=s(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function Em(M){let p,T,f,g,v;return{c(){p=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var u=s(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function km(M){let p,T,f,g,v;return{c(){p=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var u=s(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,p,u),e(p,T),e(p,f),e(f,g),e(p,v)},d(_){_&&t(p)}}}function Mm(M){let p,T,f,g,v,_,u,V,pe,R,k,ie,j,B,oe,C,he,ae,E,I,z,Ie,re,L,je,Te,Xo,en,rs,Zo,Da,tn,ss,Qo,on,ns,N,Vt,an,Et,rn,sn,nn,Oa,ln,dn,kt,cn,Yo,pn,hn,mn,Pe,fn,Sa,un,gn,Mt,_n,vn,Tn,Ce,bn,It,wn,yn,jt,xn,$n,Fn,Ae,Vn,Pt,En,kn,Ct,Mn,In,jn,Wa,Pn,is,ea,Cn,ls,le,Ba,P,ta,An,qn,oa,zn,Nn,aa,Ln,Dn,Ua,On,Sn,Ra,Wn,Bn,Ha,Un,Rn,Ja,Hn,Jn,ra,Kn,Gn,Xn,Ka,sa,na,Zn,Qn,Yn,Ga,At,ei,qt,ti,oi,ai,Xa,ia,la,ri,si,ds,be,ni,zt,ii,li,Nt,di,ci,cs,et,pi,Lt,hi,mi,ps,qe,tt,Za,Dt,fi,Qa,ui,hs,U,Ot,gi,ze,_i,da,vi,Ti,St,bi,wi,yi,Ne,xi,ca,$i,Fi,pa,Vi,Ei,ki,Ya,Mi,Ii,Wt,ms,Le,ot,er,Bt,ji,tr,Pi,fs,se,Ut,Ci,or,Ai,qi,Rt,zi,ha,Ni,Li,Di,we,Ht,Oi,ar,Si,Wi,at,us,De,rt,rr,Jt,Bi,sr,Ui,gs,me,Kt,Ri,Gt,Hi,Xt,Ji,Ki,Gi,H,Zt,Xi,Oe,Zi,ma,Qi,Yi,nr,el,tl,ol,st,al,ir,rl,sl,Qt,_s,Se,nt,lr,Yt,nl,dr,il,vs,fe,eo,ll,We,dl,cr,cl,pl,to,hl,ml,fl,J,oo,ul,Be,gl,fa,_l,vl,pr,Tl,bl,wl,it,yl,hr,xl,$l,ao,Ts,Ue,lt,mr,ro,Fl,fr,Vl,bs,ne,so,El,ur,kl,Ml,no,Il,io,jl,Pl,Cl,K,lo,Al,Re,ql,ua,zl,Nl,gr,Ll,Dl,Ol,dt,Sl,_r,Wl,Bl,co,ws,He,ct,vr,po,Ul,Tr,Rl,ys,D,ho,Hl,br,Jl,Kl,mo,Gl,ga,Xl,Zl,Ql,fo,Yl,uo,ed,td,od,pt,ad,G,go,rd,Je,sd,_a,nd,id,wr,ld,dd,cd,ht,pd,yr,hd,md,_o,xs,Ke,mt,xr,vo,fd,$r,ud,$s,O,To,gd,Fr,_d,vd,bo,Td,va,bd,wd,yd,wo,xd,yo,$d,Fd,Vd,ft,Ed,X,xo,kd,Ge,Md,Ta,Id,jd,Vr,Pd,Cd,Ad,ut,qd,Er,zd,Nd,$o,Fs,Xe,gt,kr,Fo,Ld,Mr,Dd,Vs,A,Vo,Od,Ir,Sd,Wd,Eo,Bd,ba,Ud,Rd,Hd,ko,Jd,Mo,Kd,Gd,Xd,jr,Zd,Qd,ue,Pr,Io,Yd,ec,Cr,jo,tc,oc,Ar,Po,ac,rc,qr,Co,sc,nc,Z,Ao,ic,Ze,lc,zr,dc,cc,Nr,pc,hc,mc,_t,fc,Lr,uc,gc,qo,Es,Qe,vt,Dr,zo,_c,Or,vc,ks,q,No,Tc,Sr,bc,wc,Lo,yc,wa,xc,$c,Fc,Do,Vc,Oo,Ec,kc,Mc,Wr,Ic,jc,ge,Br,So,Pc,Cc,Ur,Wo,Ac,qc,Rr,Bo,zc,Nc,Hr,Uo,Lc,Dc,Q,Ro,Oc,Ye,Sc,Jr,Wc,Bc,Kr,Uc,Rc,Hc,Tt,Jc,Gr,Kc,Gc,Ho,Ms;return _=new ve({}),k=new _e({props:{$$slots:{default:[vm]},$$scope:{ctx:M}}}),C=new ve({}),Dt=new ve({}),Ot=new W({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/configuration_vit.py#L35"}}),Wt=new Ft({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Bt=new ve({}),Ut=new W({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/feature_extraction_vit.py#L36"}}),Ht=new W({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_15773/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/feature_extraction_vit.py#L82",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15773/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15773/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),at=new _e({props:{warning:!0,$$slots:{default:[Tm]},$$scope:{ctx:M}}}),Jt=new ve({}),Kt=new W({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_vit.py#L512"}}),Zt=new W({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTModel.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15773/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_vit.py#L537",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new _e({props:{$$slots:{default:[bm]},$$scope:{ctx:M}}}),Qt=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),Yt=new ve({}),eo=new W({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_vit.py#L618"}}),oo=new W({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForMaskedImageModeling.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15773/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_vit.py#L632",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new _e({props:{$$slots:{default:[wm]},$$scope:{ctx:M}}}),ao=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTForMaskedImageModeling.from_pretrained("google/vit-base-patch16-224-in21k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),ro=new ve({}),so=new W({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_vit.py#L728"}}),lo=new W({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForImageClassification.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15773/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_vit.py#L741",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new _e({props:{$$slots:{default:[ym]},$$scope:{ctx:M}}}),co=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),po=new ve({}),ho=new W({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_tf_vit.py#L649"}}),pt=new _e({props:{$$slots:{default:[xm]},$$scope:{ctx:M}}}),go=new W({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTModel.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15773/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_tf_vit.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ht=new _e({props:{$$slots:{default:[$m]},$$scope:{ctx:M}}}),_o=new Ft({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),vo=new ve({}),To=new W({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_tf_vit.py#L727"}}),ft=new _e({props:{$$slots:{default:[Fm]},$$scope:{ctx:M}}}),xo=new W({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTForImageClassification.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15773/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_tf_vit.py#L741",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ut=new _e({props:{$$slots:{default:[Vm]},$$scope:{ctx:M}}}),$o=new Ft({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),Fo=new ve({}),Vo=new W({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_flax_vit.py#L529"}}),Ao=new W({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_flax_vit.py#L444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new _e({props:{$$slots:{default:[Em]},$$scope:{ctx:M}}}),qo=new Ft({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),zo=new ve({}),No=new W({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_flax_vit.py#L610"}}),Ro=new W({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15773/src/transformers/models/vit/modeling_flax_vit.py#L444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15773/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tt=new _e({props:{$$slots:{default:[km]},$$scope:{ctx:M}}}),Ho=new Ft({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
from PIL import Image
import jax
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = FlaxViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits

# model predicts one of the 1000 ImageNet classes
predicted_class_idx = jax.numpy.argmax(logits, axis=-1)
print("Predicted class:", model.config.id2label[predicted_class_idx.item()])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = jax.numpy.argmax(logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){p=a("meta"),T=d(),f=a("h1"),g=a("a"),v=a("span"),b(_.$$.fragment),u=d(),V=a("span"),pe=n("Vision Transformer (ViT)"),R=d(),b(k.$$.fragment),ie=d(),j=a("h2"),B=a("a"),oe=a("span"),b(C.$$.fragment),he=d(),ae=a("span"),E=n("Overview"),I=d(),z=a("p"),Ie=n("The Vision Transformer (ViT) model was proposed in "),re=a("a"),L=n(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),je=n(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=d(),Xo=a("p"),en=n("The abstract from the paper is the following:"),rs=d(),Zo=a("p"),Da=a("em"),tn=n(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),ss=d(),Qo=a("p"),on=n("Tips:"),ns=d(),N=a("ul"),Vt=a("li"),an=n("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=a("a"),rn=n("here"),sn=n("."),nn=d(),Oa=a("li"),ln=n(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),dn=d(),kt=a("li"),cn=n(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=a("a"),pn=n("ViTFeatureExtractor"),hn=n(" to resize (or rescale) and normalize images for the model."),mn=d(),Pe=a("li"),fn=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=a("code"),un=n("google/vit-base-patch16-224"),gn=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Mt=a("a"),_n=n("hub"),vn=n("."),Tn=d(),Ce=a("li"),bn=n("The available checkpoints are either (1) pre-trained on "),It=a("a"),wn=n("ImageNet-21k"),yn=n(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=a("a"),xn=n("ImageNet"),$n=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Fn=d(),Ae=a("li"),Vn=n(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=a("a"),En=n("(Touvron et al., 2019)"),kn=n(", "),Ct=a("a"),Mn=n(`(Kolesnikov
et al., 2020)`),In=n(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),jn=d(),Wa=a("li"),Pn=n(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),is=d(),ea=a("p"),Cn=n("Following the original Vision Transformer, some follow-up works have been made:"),ls=d(),le=a("ul"),Ba=a("li"),P=a("p"),ta=a("a"),An=n("DeiT"),qn=n(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=a("a"),zn=n("ViTModel"),Nn=n(` or
`),aa=a("a"),Ln=n("ViTForImageClassification"),Dn=n(". There are 4 variants available (in 3 different sizes): "),Ua=a("em"),On=n("facebook/deit-tiny-patch16-224"),Sn=n(`,
`),Ra=a("em"),Wn=n("facebook/deit-small-patch16-224"),Bn=n(", "),Ha=a("em"),Un=n("facebook/deit-base-patch16-224"),Rn=n(" and "),Ja=a("em"),Hn=n("facebook/deit-base-patch16-384"),Jn=n(`. Note that one should
use `),ra=a("a"),Kn=n("DeiTFeatureExtractor"),Gn=n(" in order to prepare images for the model."),Xn=d(),Ka=a("li"),sa=a("p"),na=a("a"),Zn=n("BEiT"),Qn=n(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Yn=d(),Ga=a("li"),At=a("p"),ei=n(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=a("a"),ti=n("hub"),oi=n("."),ai=d(),Xa=a("li"),ia=a("p"),la=a("a"),ri=n("MAE"),si=n(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),ds=d(),be=a("p"),ni=n("This model was contributed by "),zt=a("a"),ii=n("nielsr"),li=n(`. The original code (written in JAX) can be
found `),Nt=a("a"),di=n("here"),ci=n("."),cs=d(),et=a("p"),pi=n("Note that we converted the weights from Ross Wightman\u2019s "),Lt=a("a"),hi=n("timm library"),mi=n(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),ps=d(),qe=a("h2"),tt=a("a"),Za=a("span"),b(Dt.$$.fragment),fi=d(),Qa=a("span"),ui=n("ViTConfig"),hs=d(),U=a("div"),b(Ot.$$.fragment),gi=d(),ze=a("p"),_i=n("This is the configuration class to store the configuration of a "),da=a("a"),vi=n("ViTModel"),Ti=n(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=a("a"),bi=n("google/vit-base-patch16-224"),wi=n(" architecture."),yi=d(),Ne=a("p"),xi=n("Configuration objects inherit from "),ca=a("a"),$i=n("PretrainedConfig"),Fi=n(` and can be used to control the model outputs. Read the
documentation from `),pa=a("a"),Vi=n("PretrainedConfig"),Ei=n(" for more information."),ki=d(),Ya=a("p"),Mi=n("Example:"),Ii=d(),b(Wt.$$.fragment),ms=d(),Le=a("h2"),ot=a("a"),er=a("span"),b(Bt.$$.fragment),ji=d(),tr=a("span"),Pi=n("ViTFeatureExtractor"),fs=d(),se=a("div"),b(Ut.$$.fragment),Ci=d(),or=a("p"),Ai=n("Constructs a ViT feature extractor."),qi=d(),Rt=a("p"),zi=n("This feature extractor inherits from "),ha=a("a"),Ni=n("FeatureExtractionMixin"),Li=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Di=d(),we=a("div"),b(Ht.$$.fragment),Oi=d(),ar=a("p"),Si=n("Main method to prepare for the model one or several image(s)."),Wi=d(),b(at.$$.fragment),us=d(),De=a("h2"),rt=a("a"),rr=a("span"),b(Jt.$$.fragment),Bi=d(),sr=a("span"),Ui=n("ViTModel"),gs=d(),me=a("div"),b(Kt.$$.fragment),Ri=d(),Gt=a("p"),Hi=n(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=a("a"),Ji=n("torch.nn.Module"),Ki=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi=d(),H=a("div"),b(Zt.$$.fragment),Xi=d(),Oe=a("p"),Zi=n("The "),ma=a("a"),Qi=n("ViTModel"),Yi=n(" forward method, overrides the "),nr=a("code"),el=n("__call__"),tl=n(" special method."),ol=d(),b(st.$$.fragment),al=d(),ir=a("p"),rl=n("Example:"),sl=d(),b(Qt.$$.fragment),_s=d(),Se=a("h2"),nt=a("a"),lr=a("span"),b(Yt.$$.fragment),nl=d(),dr=a("span"),il=n("ViTForMaskedImageModeling"),vs=d(),fe=a("div"),b(eo.$$.fragment),ll=d(),We=a("p"),dl=n("ViT Model with a decoder on top for masked image modeling, as proposed in "),cr=a("code"),cl=n("SimMIM <https://arxiv.org/abs/2111.09886>"),pl=n(`__.
This model is a PyTorch `),to=a("a"),hl=n("torch.nn.Module"),ml=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl=d(),J=a("div"),b(oo.$$.fragment),ul=d(),Be=a("p"),gl=n("The "),fa=a("a"),_l=n("ViTForMaskedImageModeling"),vl=n(" forward method, overrides the "),pr=a("code"),Tl=n("__call__"),bl=n(" special method."),wl=d(),b(it.$$.fragment),yl=d(),hr=a("p"),xl=n("Examples:"),$l=d(),b(ao.$$.fragment),Ts=d(),Ue=a("h2"),lt=a("a"),mr=a("span"),b(ro.$$.fragment),Fl=d(),fr=a("span"),Vl=n("ViTForImageClassification"),bs=d(),ne=a("div"),b(so.$$.fragment),El=d(),ur=a("p"),kl=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Ml=d(),no=a("p"),Il=n("This model is a PyTorch "),io=a("a"),jl=n("torch.nn.Module"),Pl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=d(),K=a("div"),b(lo.$$.fragment),Al=d(),Re=a("p"),ql=n("The "),ua=a("a"),zl=n("ViTForImageClassification"),Nl=n(" forward method, overrides the "),gr=a("code"),Ll=n("__call__"),Dl=n(" special method."),Ol=d(),b(dt.$$.fragment),Sl=d(),_r=a("p"),Wl=n("Example:"),Bl=d(),b(co.$$.fragment),ws=d(),He=a("h2"),ct=a("a"),vr=a("span"),b(po.$$.fragment),Ul=d(),Tr=a("span"),Rl=n("TFViTModel"),ys=d(),D=a("div"),b(ho.$$.fragment),Hl=d(),br=a("p"),Jl=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Kl=d(),mo=a("p"),Gl=n("This model inherits from "),ga=a("a"),Xl=n("TFPreTrainedModel"),Zl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql=d(),fo=a("p"),Yl=n("This model is also a "),uo=a("a"),ed=n("tf.keras.Model"),td=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od=d(),b(pt.$$.fragment),ad=d(),G=a("div"),b(go.$$.fragment),rd=d(),Je=a("p"),sd=n("The "),_a=a("a"),nd=n("TFViTModel"),id=n(" forward method, overrides the "),wr=a("code"),ld=n("__call__"),dd=n(" special method."),cd=d(),b(ht.$$.fragment),pd=d(),yr=a("p"),hd=n("Example:"),md=d(),b(_o.$$.fragment),xs=d(),Ke=a("h2"),mt=a("a"),xr=a("span"),b(vo.$$.fragment),fd=d(),$r=a("span"),ud=n("TFViTForImageClassification"),$s=d(),O=a("div"),b(To.$$.fragment),gd=d(),Fr=a("p"),_d=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),vd=d(),bo=a("p"),Td=n("This model inherits from "),va=a("a"),bd=n("TFPreTrainedModel"),wd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd=d(),wo=a("p"),xd=n("This model is also a "),yo=a("a"),$d=n("tf.keras.Model"),Fd=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vd=d(),b(ft.$$.fragment),Ed=d(),X=a("div"),b(xo.$$.fragment),kd=d(),Ge=a("p"),Md=n("The "),Ta=a("a"),Id=n("TFViTForImageClassification"),jd=n(" forward method, overrides the "),Vr=a("code"),Pd=n("__call__"),Cd=n(" special method."),Ad=d(),b(ut.$$.fragment),qd=d(),Er=a("p"),zd=n("Example:"),Nd=d(),b($o.$$.fragment),Fs=d(),Xe=a("h2"),gt=a("a"),kr=a("span"),b(Fo.$$.fragment),Ld=d(),Mr=a("span"),Dd=n("FlaxVitModel"),Vs=d(),A=a("div"),b(Vo.$$.fragment),Od=d(),Ir=a("p"),Sd=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Wd=d(),Eo=a("p"),Bd=n("This model inherits from "),ba=a("a"),Ud=n("FlaxPreTrainedModel"),Rd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hd=d(),ko=a("p"),Jd=n("This model is also a Flax Linen "),Mo=a("a"),Kd=n("flax.linen.Module"),Gd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xd=d(),jr=a("p"),Zd=n("Finally, this model supports inherent JAX features such as:"),Qd=d(),ue=a("ul"),Pr=a("li"),Io=a("a"),Yd=n("Just-In-Time (JIT) compilation"),ec=d(),Cr=a("li"),jo=a("a"),tc=n("Automatic Differentiation"),oc=d(),Ar=a("li"),Po=a("a"),ac=n("Vectorization"),rc=d(),qr=a("li"),Co=a("a"),sc=n("Parallelization"),nc=d(),Z=a("div"),b(Ao.$$.fragment),ic=d(),Ze=a("p"),lc=n("The "),zr=a("code"),dc=n("FlaxViTPreTrainedModel"),cc=n(" forward method, overrides the "),Nr=a("code"),pc=n("__call__"),hc=n(" special method."),mc=d(),b(_t.$$.fragment),fc=d(),Lr=a("p"),uc=n("Examples:"),gc=d(),b(qo.$$.fragment),Es=d(),Qe=a("h2"),vt=a("a"),Dr=a("span"),b(zo.$$.fragment),_c=d(),Or=a("span"),vc=n("FlaxViTForImageClassification"),ks=d(),q=a("div"),b(No.$$.fragment),Tc=d(),Sr=a("p"),bc=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),wc=d(),Lo=a("p"),yc=n("This model inherits from "),wa=a("a"),xc=n("FlaxPreTrainedModel"),$c=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fc=d(),Do=a("p"),Vc=n("This model is also a Flax Linen "),Oo=a("a"),Ec=n("flax.linen.Module"),kc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mc=d(),Wr=a("p"),Ic=n("Finally, this model supports inherent JAX features such as:"),jc=d(),ge=a("ul"),Br=a("li"),So=a("a"),Pc=n("Just-In-Time (JIT) compilation"),Cc=d(),Ur=a("li"),Wo=a("a"),Ac=n("Automatic Differentiation"),qc=d(),Rr=a("li"),Bo=a("a"),zc=n("Vectorization"),Nc=d(),Hr=a("li"),Uo=a("a"),Lc=n("Parallelization"),Dc=d(),Q=a("div"),b(Ro.$$.fragment),Oc=d(),Ye=a("p"),Sc=n("The "),Jr=a("code"),Wc=n("FlaxViTPreTrainedModel"),Bc=n(" forward method, overrides the "),Kr=a("code"),Uc=n("__call__"),Rc=n(" special method."),Hc=d(),b(Tt.$$.fragment),Jc=d(),Gr=a("p"),Kc=n("Example:"),Gc=d(),b(Ho.$$.fragment),this.h()},l(o){const h=gm('[data-svelte="svelte-1phssyn"]',document.head);p=r(h,"META",{name:!0,content:!0}),h.forEach(t),T=c(o),f=r(o,"H1",{class:!0});var Jo=s(f);g=r(Jo,"A",{id:!0,class:!0,href:!0});var Xr=s(g);v=r(Xr,"SPAN",{});var Zr=s(v);w(_.$$.fragment,Zr),Zr.forEach(t),Xr.forEach(t),u=c(Jo),V=r(Jo,"SPAN",{});var Qr=s(V);pe=i(Qr,"Vision Transformer (ViT)"),Qr.forEach(t),Jo.forEach(t),R=c(o),w(k.$$.fragment,o),ie=c(o),j=r(o,"H2",{class:!0});var Ko=s(j);B=r(Ko,"A",{id:!0,class:!0,href:!0});var Yr=s(B);oe=r(Yr,"SPAN",{});var es=s(oe);w(C.$$.fragment,es),es.forEach(t),Yr.forEach(t),he=c(Ko),ae=r(Ko,"SPAN",{});var ts=s(ae);E=i(ts,"Overview"),ts.forEach(t),Ko.forEach(t),I=c(o),z=r(o,"P",{});var Go=s(z);Ie=i(Go,"The Vision Transformer (ViT) model was proposed in "),re=r(Go,"A",{href:!0,rel:!0});var os=s(re);L=i(os,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),os.forEach(t),je=i(Go,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Go.forEach(t),Te=c(o),Xo=r(o,"P",{});var as=s(Xo);en=i(as,"The abstract from the paper is the following:"),as.forEach(t),rs=c(o),Zo=r(o,"P",{});var Qc=s(Zo);Da=r(Qc,"EM",{});var Yc=s(Da);tn=i(Yc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Yc.forEach(t),Qc.forEach(t),ss=c(o),Qo=r(o,"P",{});var ep=s(Qo);on=i(ep,"Tips:"),ep.forEach(t),ns=c(o),N=r(o,"UL",{});var Y=s(N);Vt=r(Y,"LI",{});var Is=s(Vt);an=i(Is,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=r(Is,"A",{href:!0,rel:!0});var tp=s(Et);rn=i(tp,"here"),tp.forEach(t),sn=i(Is,"."),Is.forEach(t),nn=c(Y),Oa=r(Y,"LI",{});var op=s(Oa);ln=i(op,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),op.forEach(t),dn=c(Y),kt=r(Y,"LI",{});var js=s(kt);cn=i(js,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=r(js,"A",{href:!0});var ap=s(Yo);pn=i(ap,"ViTFeatureExtractor"),ap.forEach(t),hn=i(js," to resize (or rescale) and normalize images for the model."),js.forEach(t),mn=c(Y),Pe=r(Y,"LI",{});var ya=s(Pe);fn=i(ya,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=r(ya,"CODE",{});var rp=s(Sa);un=i(rp,"google/vit-base-patch16-224"),rp.forEach(t),gn=i(ya,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Mt=r(ya,"A",{href:!0,rel:!0});var sp=s(Mt);_n=i(sp,"hub"),sp.forEach(t),vn=i(ya,"."),ya.forEach(t),Tn=c(Y),Ce=r(Y,"LI",{});var xa=s(Ce);bn=i(xa,"The available checkpoints are either (1) pre-trained on "),It=r(xa,"A",{href:!0,rel:!0});var np=s(It);wn=i(np,"ImageNet-21k"),np.forEach(t),yn=i(xa,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=r(xa,"A",{href:!0,rel:!0});var ip=s(jt);xn=i(ip,"ImageNet"),ip.forEach(t),$n=i(xa,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),xa.forEach(t),Fn=c(Y),Ae=r(Y,"LI",{});var $a=s(Ae);Vn=i($a,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=r($a,"A",{href:!0,rel:!0});var lp=s(Pt);En=i(lp,"(Touvron et al., 2019)"),lp.forEach(t),kn=i($a,", "),Ct=r($a,"A",{href:!0,rel:!0});var dp=s(Ct);Mn=i(dp,`(Kolesnikov
et al., 2020)`),dp.forEach(t),In=i($a,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),$a.forEach(t),jn=c(Y),Wa=r(Y,"LI",{});var cp=s(Wa);Pn=i(cp,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),cp.forEach(t),Y.forEach(t),is=c(o),ea=r(o,"P",{});var pp=s(ea);Cn=i(pp,"Following the original Vision Transformer, some follow-up works have been made:"),pp.forEach(t),ls=c(o),le=r(o,"UL",{});var bt=s(le);Ba=r(bt,"LI",{});var hp=s(Ba);P=r(hp,"P",{});var S=s(P);ta=r(S,"A",{href:!0});var mp=s(ta);An=i(mp,"DeiT"),mp.forEach(t),qn=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=r(S,"A",{href:!0});var fp=s(oa);zn=i(fp,"ViTModel"),fp.forEach(t),Nn=i(S,` or
`),aa=r(S,"A",{href:!0});var up=s(aa);Ln=i(up,"ViTForImageClassification"),up.forEach(t),Dn=i(S,". There are 4 variants available (in 3 different sizes): "),Ua=r(S,"EM",{});var gp=s(Ua);On=i(gp,"facebook/deit-tiny-patch16-224"),gp.forEach(t),Sn=i(S,`,
`),Ra=r(S,"EM",{});var _p=s(Ra);Wn=i(_p,"facebook/deit-small-patch16-224"),_p.forEach(t),Bn=i(S,", "),Ha=r(S,"EM",{});var vp=s(Ha);Un=i(vp,"facebook/deit-base-patch16-224"),vp.forEach(t),Rn=i(S," and "),Ja=r(S,"EM",{});var Tp=s(Ja);Hn=i(Tp,"facebook/deit-base-patch16-384"),Tp.forEach(t),Jn=i(S,`. Note that one should
use `),ra=r(S,"A",{href:!0});var bp=s(ra);Kn=i(bp,"DeiTFeatureExtractor"),bp.forEach(t),Gn=i(S," in order to prepare images for the model."),S.forEach(t),hp.forEach(t),Xn=c(bt),Ka=r(bt,"LI",{});var wp=s(Ka);sa=r(wp,"P",{});var Xc=s(sa);na=r(Xc,"A",{href:!0});var yp=s(na);Zn=i(yp,"BEiT"),yp.forEach(t),Qn=i(Xc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Xc.forEach(t),wp.forEach(t),Yn=c(bt),Ga=r(bt,"LI",{});var xp=s(Ga);At=r(xp,"P",{});var Ps=s(At);ei=i(Ps,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=r(Ps,"A",{href:!0,rel:!0});var $p=s(qt);ti=i($p,"hub"),$p.forEach(t),oi=i(Ps,"."),Ps.forEach(t),xp.forEach(t),ai=c(bt),Xa=r(bt,"LI",{});var Fp=s(Xa);ia=r(Fp,"P",{});var Zc=s(ia);la=r(Zc,"A",{href:!0});var Vp=s(la);ri=i(Vp,"MAE"),Vp.forEach(t),si=i(Zc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Zc.forEach(t),Fp.forEach(t),bt.forEach(t),ds=c(o),be=r(o,"P",{});var Fa=s(be);ni=i(Fa,"This model was contributed by "),zt=r(Fa,"A",{href:!0,rel:!0});var Ep=s(zt);ii=i(Ep,"nielsr"),Ep.forEach(t),li=i(Fa,`. The original code (written in JAX) can be
found `),Nt=r(Fa,"A",{href:!0,rel:!0});var kp=s(Nt);di=i(kp,"here"),kp.forEach(t),ci=i(Fa,"."),Fa.forEach(t),cs=c(o),et=r(o,"P",{});var Cs=s(et);pi=i(Cs,"Note that we converted the weights from Ross Wightman\u2019s "),Lt=r(Cs,"A",{href:!0,rel:!0});var Mp=s(Lt);hi=i(Mp,"timm library"),Mp.forEach(t),mi=i(Cs,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Cs.forEach(t),ps=c(o),qe=r(o,"H2",{class:!0});var As=s(qe);tt=r(As,"A",{id:!0,class:!0,href:!0});var Ip=s(tt);Za=r(Ip,"SPAN",{});var jp=s(Za);w(Dt.$$.fragment,jp),jp.forEach(t),Ip.forEach(t),fi=c(As),Qa=r(As,"SPAN",{});var Pp=s(Qa);ui=i(Pp,"ViTConfig"),Pp.forEach(t),As.forEach(t),hs=c(o),U=r(o,"DIV",{class:!0});var ye=s(U);w(Ot.$$.fragment,ye),gi=c(ye),ze=r(ye,"P",{});var Va=s(ze);_i=i(Va,"This is the configuration class to store the configuration of a "),da=r(Va,"A",{href:!0});var Cp=s(da);vi=i(Cp,"ViTModel"),Cp.forEach(t),Ti=i(Va,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=r(Va,"A",{href:!0,rel:!0});var Ap=s(St);bi=i(Ap,"google/vit-base-patch16-224"),Ap.forEach(t),wi=i(Va," architecture."),Va.forEach(t),yi=c(ye),Ne=r(ye,"P",{});var Ea=s(Ne);xi=i(Ea,"Configuration objects inherit from "),ca=r(Ea,"A",{href:!0});var qp=s(ca);$i=i(qp,"PretrainedConfig"),qp.forEach(t),Fi=i(Ea,` and can be used to control the model outputs. Read the
documentation from `),pa=r(Ea,"A",{href:!0});var zp=s(pa);Vi=i(zp,"PretrainedConfig"),zp.forEach(t),Ei=i(Ea," for more information."),Ea.forEach(t),ki=c(ye),Ya=r(ye,"P",{});var Np=s(Ya);Mi=i(Np,"Example:"),Np.forEach(t),Ii=c(ye),w(Wt.$$.fragment,ye),ye.forEach(t),ms=c(o),Le=r(o,"H2",{class:!0});var qs=s(Le);ot=r(qs,"A",{id:!0,class:!0,href:!0});var Lp=s(ot);er=r(Lp,"SPAN",{});var Dp=s(er);w(Bt.$$.fragment,Dp),Dp.forEach(t),Lp.forEach(t),ji=c(qs),tr=r(qs,"SPAN",{});var Op=s(tr);Pi=i(Op,"ViTFeatureExtractor"),Op.forEach(t),qs.forEach(t),fs=c(o),se=r(o,"DIV",{class:!0});var wt=s(se);w(Ut.$$.fragment,wt),Ci=c(wt),or=r(wt,"P",{});var Sp=s(or);Ai=i(Sp,"Constructs a ViT feature extractor."),Sp.forEach(t),qi=c(wt),Rt=r(wt,"P",{});var zs=s(Rt);zi=i(zs,"This feature extractor inherits from "),ha=r(zs,"A",{href:!0});var Wp=s(ha);Ni=i(Wp,"FeatureExtractionMixin"),Wp.forEach(t),Li=i(zs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zs.forEach(t),Di=c(wt),we=r(wt,"DIV",{class:!0});var ka=s(we);w(Ht.$$.fragment,ka),Oi=c(ka),ar=r(ka,"P",{});var Bp=s(ar);Si=i(Bp,"Main method to prepare for the model one or several image(s)."),Bp.forEach(t),Wi=c(ka),w(at.$$.fragment,ka),ka.forEach(t),wt.forEach(t),us=c(o),De=r(o,"H2",{class:!0});var Ns=s(De);rt=r(Ns,"A",{id:!0,class:!0,href:!0});var Up=s(rt);rr=r(Up,"SPAN",{});var Rp=s(rr);w(Jt.$$.fragment,Rp),Rp.forEach(t),Up.forEach(t),Bi=c(Ns),sr=r(Ns,"SPAN",{});var Hp=s(sr);Ui=i(Hp,"ViTModel"),Hp.forEach(t),Ns.forEach(t),gs=c(o),me=r(o,"DIV",{class:!0});var Ma=s(me);w(Kt.$$.fragment,Ma),Ri=c(Ma),Gt=r(Ma,"P",{});var Ls=s(Gt);Hi=i(Ls,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=r(Ls,"A",{href:!0,rel:!0});var Jp=s(Xt);Ji=i(Jp,"torch.nn.Module"),Jp.forEach(t),Ki=i(Ls,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls.forEach(t),Gi=c(Ma),H=r(Ma,"DIV",{class:!0});var xe=s(H);w(Zt.$$.fragment,xe),Xi=c(xe),Oe=r(xe,"P",{});var Ia=s(Oe);Zi=i(Ia,"The "),ma=r(Ia,"A",{href:!0});var Kp=s(ma);Qi=i(Kp,"ViTModel"),Kp.forEach(t),Yi=i(Ia," forward method, overrides the "),nr=r(Ia,"CODE",{});var Gp=s(nr);el=i(Gp,"__call__"),Gp.forEach(t),tl=i(Ia," special method."),Ia.forEach(t),ol=c(xe),w(st.$$.fragment,xe),al=c(xe),ir=r(xe,"P",{});var Xp=s(ir);rl=i(Xp,"Example:"),Xp.forEach(t),sl=c(xe),w(Qt.$$.fragment,xe),xe.forEach(t),Ma.forEach(t),_s=c(o),Se=r(o,"H2",{class:!0});var Ds=s(Se);nt=r(Ds,"A",{id:!0,class:!0,href:!0});var Zp=s(nt);lr=r(Zp,"SPAN",{});var Qp=s(lr);w(Yt.$$.fragment,Qp),Qp.forEach(t),Zp.forEach(t),nl=c(Ds),dr=r(Ds,"SPAN",{});var Yp=s(dr);il=i(Yp,"ViTForMaskedImageModeling"),Yp.forEach(t),Ds.forEach(t),vs=c(o),fe=r(o,"DIV",{class:!0});var ja=s(fe);w(eo.$$.fragment,ja),ll=c(ja),We=r(ja,"P",{});var Pa=s(We);dl=i(Pa,"ViT Model with a decoder on top for masked image modeling, as proposed in "),cr=r(Pa,"CODE",{});var eh=s(cr);cl=i(eh,"SimMIM <https://arxiv.org/abs/2111.09886>"),eh.forEach(t),pl=i(Pa,`__.
This model is a PyTorch `),to=r(Pa,"A",{href:!0,rel:!0});var th=s(to);hl=i(th,"torch.nn.Module"),th.forEach(t),ml=i(Pa,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),fl=c(ja),J=r(ja,"DIV",{class:!0});var $e=s(J);w(oo.$$.fragment,$e),ul=c($e),Be=r($e,"P",{});var Ca=s(Be);gl=i(Ca,"The "),fa=r(Ca,"A",{href:!0});var oh=s(fa);_l=i(oh,"ViTForMaskedImageModeling"),oh.forEach(t),vl=i(Ca," forward method, overrides the "),pr=r(Ca,"CODE",{});var ah=s(pr);Tl=i(ah,"__call__"),ah.forEach(t),bl=i(Ca," special method."),Ca.forEach(t),wl=c($e),w(it.$$.fragment,$e),yl=c($e),hr=r($e,"P",{});var rh=s(hr);xl=i(rh,"Examples:"),rh.forEach(t),$l=c($e),w(ao.$$.fragment,$e),$e.forEach(t),ja.forEach(t),Ts=c(o),Ue=r(o,"H2",{class:!0});var Os=s(Ue);lt=r(Os,"A",{id:!0,class:!0,href:!0});var sh=s(lt);mr=r(sh,"SPAN",{});var nh=s(mr);w(ro.$$.fragment,nh),nh.forEach(t),sh.forEach(t),Fl=c(Os),fr=r(Os,"SPAN",{});var ih=s(fr);Vl=i(ih,"ViTForImageClassification"),ih.forEach(t),Os.forEach(t),bs=c(o),ne=r(o,"DIV",{class:!0});var yt=s(ne);w(so.$$.fragment,yt),El=c(yt),ur=r(yt,"P",{});var lh=s(ur);kl=i(lh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),lh.forEach(t),Ml=c(yt),no=r(yt,"P",{});var Ss=s(no);Il=i(Ss,"This model is a PyTorch "),io=r(Ss,"A",{href:!0,rel:!0});var dh=s(io);jl=i(dh,"torch.nn.Module"),dh.forEach(t),Pl=i(Ss,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ss.forEach(t),Cl=c(yt),K=r(yt,"DIV",{class:!0});var Fe=s(K);w(lo.$$.fragment,Fe),Al=c(Fe),Re=r(Fe,"P",{});var Aa=s(Re);ql=i(Aa,"The "),ua=r(Aa,"A",{href:!0});var ch=s(ua);zl=i(ch,"ViTForImageClassification"),ch.forEach(t),Nl=i(Aa," forward method, overrides the "),gr=r(Aa,"CODE",{});var ph=s(gr);Ll=i(ph,"__call__"),ph.forEach(t),Dl=i(Aa," special method."),Aa.forEach(t),Ol=c(Fe),w(dt.$$.fragment,Fe),Sl=c(Fe),_r=r(Fe,"P",{});var hh=s(_r);Wl=i(hh,"Example:"),hh.forEach(t),Bl=c(Fe),w(co.$$.fragment,Fe),Fe.forEach(t),yt.forEach(t),ws=c(o),He=r(o,"H2",{class:!0});var Ws=s(He);ct=r(Ws,"A",{id:!0,class:!0,href:!0});var mh=s(ct);vr=r(mh,"SPAN",{});var fh=s(vr);w(po.$$.fragment,fh),fh.forEach(t),mh.forEach(t),Ul=c(Ws),Tr=r(Ws,"SPAN",{});var uh=s(Tr);Rl=i(uh,"TFViTModel"),uh.forEach(t),Ws.forEach(t),ys=c(o),D=r(o,"DIV",{class:!0});var de=s(D);w(ho.$$.fragment,de),Hl=c(de),br=r(de,"P",{});var gh=s(br);Jl=i(gh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),gh.forEach(t),Kl=c(de),mo=r(de,"P",{});var Bs=s(mo);Gl=i(Bs,"This model inherits from "),ga=r(Bs,"A",{href:!0});var _h=s(ga);Xl=i(_h,"TFPreTrainedModel"),_h.forEach(t),Zl=i(Bs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bs.forEach(t),Ql=c(de),fo=r(de,"P",{});var Us=s(fo);Yl=i(Us,"This model is also a "),uo=r(Us,"A",{href:!0,rel:!0});var vh=s(uo);ed=i(vh,"tf.keras.Model"),vh.forEach(t),td=i(Us,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Us.forEach(t),od=c(de),w(pt.$$.fragment,de),ad=c(de),G=r(de,"DIV",{class:!0});var Ve=s(G);w(go.$$.fragment,Ve),rd=c(Ve),Je=r(Ve,"P",{});var qa=s(Je);sd=i(qa,"The "),_a=r(qa,"A",{href:!0});var Th=s(_a);nd=i(Th,"TFViTModel"),Th.forEach(t),id=i(qa," forward method, overrides the "),wr=r(qa,"CODE",{});var bh=s(wr);ld=i(bh,"__call__"),bh.forEach(t),dd=i(qa," special method."),qa.forEach(t),cd=c(Ve),w(ht.$$.fragment,Ve),pd=c(Ve),yr=r(Ve,"P",{});var wh=s(yr);hd=i(wh,"Example:"),wh.forEach(t),md=c(Ve),w(_o.$$.fragment,Ve),Ve.forEach(t),de.forEach(t),xs=c(o),Ke=r(o,"H2",{class:!0});var Rs=s(Ke);mt=r(Rs,"A",{id:!0,class:!0,href:!0});var yh=s(mt);xr=r(yh,"SPAN",{});var xh=s(xr);w(vo.$$.fragment,xh),xh.forEach(t),yh.forEach(t),fd=c(Rs),$r=r(Rs,"SPAN",{});var $h=s($r);ud=i($h,"TFViTForImageClassification"),$h.forEach(t),Rs.forEach(t),$s=c(o),O=r(o,"DIV",{class:!0});var ce=s(O);w(To.$$.fragment,ce),gd=c(ce),Fr=r(ce,"P",{});var Fh=s(Fr);_d=i(Fh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Fh.forEach(t),vd=c(ce),bo=r(ce,"P",{});var Hs=s(bo);Td=i(Hs,"This model inherits from "),va=r(Hs,"A",{href:!0});var Vh=s(va);bd=i(Vh,"TFPreTrainedModel"),Vh.forEach(t),wd=i(Hs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hs.forEach(t),yd=c(ce),wo=r(ce,"P",{});var Js=s(wo);xd=i(Js,"This model is also a "),yo=r(Js,"A",{href:!0,rel:!0});var Eh=s(yo);$d=i(Eh,"tf.keras.Model"),Eh.forEach(t),Fd=i(Js,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Js.forEach(t),Vd=c(ce),w(ft.$$.fragment,ce),Ed=c(ce),X=r(ce,"DIV",{class:!0});var Ee=s(X);w(xo.$$.fragment,Ee),kd=c(Ee),Ge=r(Ee,"P",{});var za=s(Ge);Md=i(za,"The "),Ta=r(za,"A",{href:!0});var kh=s(Ta);Id=i(kh,"TFViTForImageClassification"),kh.forEach(t),jd=i(za," forward method, overrides the "),Vr=r(za,"CODE",{});var Mh=s(Vr);Pd=i(Mh,"__call__"),Mh.forEach(t),Cd=i(za," special method."),za.forEach(t),Ad=c(Ee),w(ut.$$.fragment,Ee),qd=c(Ee),Er=r(Ee,"P",{});var Ih=s(Er);zd=i(Ih,"Example:"),Ih.forEach(t),Nd=c(Ee),w($o.$$.fragment,Ee),Ee.forEach(t),ce.forEach(t),Fs=c(o),Xe=r(o,"H2",{class:!0});var Ks=s(Xe);gt=r(Ks,"A",{id:!0,class:!0,href:!0});var jh=s(gt);kr=r(jh,"SPAN",{});var Ph=s(kr);w(Fo.$$.fragment,Ph),Ph.forEach(t),jh.forEach(t),Ld=c(Ks),Mr=r(Ks,"SPAN",{});var Ch=s(Mr);Dd=i(Ch,"FlaxVitModel"),Ch.forEach(t),Ks.forEach(t),Vs=c(o),A=r(o,"DIV",{class:!0});var ee=s(A);w(Vo.$$.fragment,ee),Od=c(ee),Ir=r(ee,"P",{});var Ah=s(Ir);Sd=i(Ah,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Ah.forEach(t),Wd=c(ee),Eo=r(ee,"P",{});var Gs=s(Eo);Bd=i(Gs,"This model inherits from "),ba=r(Gs,"A",{href:!0});var qh=s(ba);Ud=i(qh,"FlaxPreTrainedModel"),qh.forEach(t),Rd=i(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gs.forEach(t),Hd=c(ee),ko=r(ee,"P",{});var Xs=s(ko);Jd=i(Xs,"This model is also a Flax Linen "),Mo=r(Xs,"A",{href:!0,rel:!0});var zh=s(Mo);Kd=i(zh,"flax.linen.Module"),zh.forEach(t),Gd=i(Xs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xs.forEach(t),Xd=c(ee),jr=r(ee,"P",{});var Nh=s(jr);Zd=i(Nh,"Finally, this model supports inherent JAX features such as:"),Nh.forEach(t),Qd=c(ee),ue=r(ee,"UL",{});var xt=s(ue);Pr=r(xt,"LI",{});var Lh=s(Pr);Io=r(Lh,"A",{href:!0,rel:!0});var Dh=s(Io);Yd=i(Dh,"Just-In-Time (JIT) compilation"),Dh.forEach(t),Lh.forEach(t),ec=c(xt),Cr=r(xt,"LI",{});var Oh=s(Cr);jo=r(Oh,"A",{href:!0,rel:!0});var Sh=s(jo);tc=i(Sh,"Automatic Differentiation"),Sh.forEach(t),Oh.forEach(t),oc=c(xt),Ar=r(xt,"LI",{});var Wh=s(Ar);Po=r(Wh,"A",{href:!0,rel:!0});var Bh=s(Po);ac=i(Bh,"Vectorization"),Bh.forEach(t),Wh.forEach(t),rc=c(xt),qr=r(xt,"LI",{});var Uh=s(qr);Co=r(Uh,"A",{href:!0,rel:!0});var Rh=s(Co);sc=i(Rh,"Parallelization"),Rh.forEach(t),Uh.forEach(t),xt.forEach(t),nc=c(ee),Z=r(ee,"DIV",{class:!0});var ke=s(Z);w(Ao.$$.fragment,ke),ic=c(ke),Ze=r(ke,"P",{});var Na=s(Ze);lc=i(Na,"The "),zr=r(Na,"CODE",{});var Hh=s(zr);dc=i(Hh,"FlaxViTPreTrainedModel"),Hh.forEach(t),cc=i(Na," forward method, overrides the "),Nr=r(Na,"CODE",{});var Jh=s(Nr);pc=i(Jh,"__call__"),Jh.forEach(t),hc=i(Na," special method."),Na.forEach(t),mc=c(ke),w(_t.$$.fragment,ke),fc=c(ke),Lr=r(ke,"P",{});var Kh=s(Lr);uc=i(Kh,"Examples:"),Kh.forEach(t),gc=c(ke),w(qo.$$.fragment,ke),ke.forEach(t),ee.forEach(t),Es=c(o),Qe=r(o,"H2",{class:!0});var Zs=s(Qe);vt=r(Zs,"A",{id:!0,class:!0,href:!0});var Gh=s(vt);Dr=r(Gh,"SPAN",{});var Xh=s(Dr);w(zo.$$.fragment,Xh),Xh.forEach(t),Gh.forEach(t),_c=c(Zs),Or=r(Zs,"SPAN",{});var Zh=s(Or);vc=i(Zh,"FlaxViTForImageClassification"),Zh.forEach(t),Zs.forEach(t),ks=c(o),q=r(o,"DIV",{class:!0});var te=s(q);w(No.$$.fragment,te),Tc=c(te),Sr=r(te,"P",{});var Qh=s(Sr);bc=i(Qh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qh.forEach(t),wc=c(te),Lo=r(te,"P",{});var Qs=s(Lo);yc=i(Qs,"This model inherits from "),wa=r(Qs,"A",{href:!0});var Yh=s(wa);xc=i(Yh,"FlaxPreTrainedModel"),Yh.forEach(t),$c=i(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qs.forEach(t),Fc=c(te),Do=r(te,"P",{});var Ys=s(Do);Vc=i(Ys,"This model is also a Flax Linen "),Oo=r(Ys,"A",{href:!0,rel:!0});var em=s(Oo);Ec=i(em,"flax.linen.Module"),em.forEach(t),kc=i(Ys,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ys.forEach(t),Mc=c(te),Wr=r(te,"P",{});var tm=s(Wr);Ic=i(tm,"Finally, this model supports inherent JAX features such as:"),tm.forEach(t),jc=c(te),ge=r(te,"UL",{});var $t=s(ge);Br=r($t,"LI",{});var om=s(Br);So=r(om,"A",{href:!0,rel:!0});var am=s(So);Pc=i(am,"Just-In-Time (JIT) compilation"),am.forEach(t),om.forEach(t),Cc=c($t),Ur=r($t,"LI",{});var rm=s(Ur);Wo=r(rm,"A",{href:!0,rel:!0});var sm=s(Wo);Ac=i(sm,"Automatic Differentiation"),sm.forEach(t),rm.forEach(t),qc=c($t),Rr=r($t,"LI",{});var nm=s(Rr);Bo=r(nm,"A",{href:!0,rel:!0});var im=s(Bo);zc=i(im,"Vectorization"),im.forEach(t),nm.forEach(t),Nc=c($t),Hr=r($t,"LI",{});var lm=s(Hr);Uo=r(lm,"A",{href:!0,rel:!0});var dm=s(Uo);Lc=i(dm,"Parallelization"),dm.forEach(t),lm.forEach(t),$t.forEach(t),Dc=c(te),Q=r(te,"DIV",{class:!0});var Me=s(Q);w(Ro.$$.fragment,Me),Oc=c(Me),Ye=r(Me,"P",{});var La=s(Ye);Sc=i(La,"The "),Jr=r(La,"CODE",{});var cm=s(Jr);Wc=i(cm,"FlaxViTPreTrainedModel"),cm.forEach(t),Bc=i(La," forward method, overrides the "),Kr=r(La,"CODE",{});var pm=s(Kr);Uc=i(pm,"__call__"),pm.forEach(t),Rc=i(La," special method."),La.forEach(t),Hc=c(Me),w(Tt.$$.fragment,Me),Jc=c(Me),Gr=r(Me,"P",{});var hm=s(Gr);Kc=i(hm,"Example:"),hm.forEach(t),Gc=c(Me),w(Ho.$$.fragment,Me),Me.forEach(t),te.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Im)),l(g,"id","vision-transformer-vit"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#vision-transformer-vit"),l(f,"class","relative group"),l(B,"id","overview"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#overview"),l(j,"class","relative group"),l(re,"href","https://arxiv.org/abs/2010.11929"),l(re,"rel","nofollow"),l(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(Et,"rel","nofollow"),l(Yo,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(Mt,"href","https://huggingface.co/models?search=vit"),l(Mt,"rel","nofollow"),l(It,"href","http://www.image-net.org/"),l(It,"rel","nofollow"),l(jt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(jt,"rel","nofollow"),l(Pt,"href","https://arxiv.org/abs/1906.06423"),l(Pt,"rel","nofollow"),l(Ct,"href","https://arxiv.org/abs/1912.11370"),l(Ct,"rel","nofollow"),l(ta,"href","deit"),l(oa,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTModel"),l(aa,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTForImageClassification"),l(ra,"href","/docs/transformers/pr_15773/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(na,"href","beit"),l(qt,"href","https://huggingface.co/models?other=dino"),l(qt,"rel","nofollow"),l(la,"href","vit_mae"),l(zt,"href","https://huggingface.co/nielsr"),l(zt,"rel","nofollow"),l(Nt,"href","https://github.com/google-research/vision_transformer"),l(Nt,"rel","nofollow"),l(Lt,"href","https://github.com/rwightman/pytorch-image-models"),l(Lt,"rel","nofollow"),l(tt,"id","transformers.ViTConfig"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.ViTConfig"),l(qe,"class","relative group"),l(da,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTModel"),l(St,"href","https://huggingface.co/google/vit-base-patch16-224"),l(St,"rel","nofollow"),l(ca,"href","/docs/transformers/pr_15773/en/main_classes/configuration#transformers.PretrainedConfig"),l(pa,"href","/docs/transformers/pr_15773/en/main_classes/configuration#transformers.PretrainedConfig"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.ViTFeatureExtractor"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.ViTFeatureExtractor"),l(Le,"class","relative group"),l(ha,"href","/docs/transformers/pr_15773/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"id","transformers.ViTModel"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.ViTModel"),l(De,"class","relative group"),l(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xt,"rel","nofollow"),l(ma,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(nt,"id","transformers.ViTForMaskedImageModeling"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.ViTForMaskedImageModeling"),l(Se,"class","relative group"),l(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(to,"rel","nofollow"),l(fa,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lt,"id","transformers.ViTForImageClassification"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.ViTForImageClassification"),l(Ue,"class","relative group"),l(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(io,"rel","nofollow"),l(ua,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.ViTForImageClassification"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ct,"id","transformers.TFViTModel"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.TFViTModel"),l(He,"class","relative group"),l(ga,"href","/docs/transformers/pr_15773/en/main_classes/model#transformers.TFPreTrainedModel"),l(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(uo,"rel","nofollow"),l(_a,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.TFViTModel"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(mt,"id","transformers.TFViTForImageClassification"),l(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(mt,"href","#transformers.TFViTForImageClassification"),l(Ke,"class","relative group"),l(va,"href","/docs/transformers/pr_15773/en/main_classes/model#transformers.TFPreTrainedModel"),l(yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(yo,"rel","nofollow"),l(Ta,"href","/docs/transformers/pr_15773/en/model_doc/vit#transformers.TFViTForImageClassification"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(gt,"id","transformers.FlaxViTModel"),l(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(gt,"href","#transformers.FlaxViTModel"),l(Xe,"class","relative group"),l(ba,"href","/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Mo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Mo,"rel","nofollow"),l(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Io,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(jo,"rel","nofollow"),l(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Po,"rel","nofollow"),l(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Co,"rel","nofollow"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(vt,"id","transformers.FlaxViTForImageClassification"),l(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(vt,"href","#transformers.FlaxViTForImageClassification"),l(Qe,"class","relative group"),l(wa,"href","/docs/transformers/pr_15773/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Oo,"rel","nofollow"),l(So,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(So,"rel","nofollow"),l(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Wo,"rel","nofollow"),l(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Bo,"rel","nofollow"),l(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Uo,"rel","nofollow"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,p),m(o,T,h),m(o,f,h),e(f,g),e(g,v),y(_,v,null),e(f,u),e(f,V),e(V,pe),m(o,R,h),y(k,o,h),m(o,ie,h),m(o,j,h),e(j,B),e(B,oe),y(C,oe,null),e(j,he),e(j,ae),e(ae,E),m(o,I,h),m(o,z,h),e(z,Ie),e(z,re),e(re,L),e(z,je),m(o,Te,h),m(o,Xo,h),e(Xo,en),m(o,rs,h),m(o,Zo,h),e(Zo,Da),e(Da,tn),m(o,ss,h),m(o,Qo,h),e(Qo,on),m(o,ns,h),m(o,N,h),e(N,Vt),e(Vt,an),e(Vt,Et),e(Et,rn),e(Vt,sn),e(N,nn),e(N,Oa),e(Oa,ln),e(N,dn),e(N,kt),e(kt,cn),e(kt,Yo),e(Yo,pn),e(kt,hn),e(N,mn),e(N,Pe),e(Pe,fn),e(Pe,Sa),e(Sa,un),e(Pe,gn),e(Pe,Mt),e(Mt,_n),e(Pe,vn),e(N,Tn),e(N,Ce),e(Ce,bn),e(Ce,It),e(It,wn),e(Ce,yn),e(Ce,jt),e(jt,xn),e(Ce,$n),e(N,Fn),e(N,Ae),e(Ae,Vn),e(Ae,Pt),e(Pt,En),e(Ae,kn),e(Ae,Ct),e(Ct,Mn),e(Ae,In),e(N,jn),e(N,Wa),e(Wa,Pn),m(o,is,h),m(o,ea,h),e(ea,Cn),m(o,ls,h),m(o,le,h),e(le,Ba),e(Ba,P),e(P,ta),e(ta,An),e(P,qn),e(P,oa),e(oa,zn),e(P,Nn),e(P,aa),e(aa,Ln),e(P,Dn),e(P,Ua),e(Ua,On),e(P,Sn),e(P,Ra),e(Ra,Wn),e(P,Bn),e(P,Ha),e(Ha,Un),e(P,Rn),e(P,Ja),e(Ja,Hn),e(P,Jn),e(P,ra),e(ra,Kn),e(P,Gn),e(le,Xn),e(le,Ka),e(Ka,sa),e(sa,na),e(na,Zn),e(sa,Qn),e(le,Yn),e(le,Ga),e(Ga,At),e(At,ei),e(At,qt),e(qt,ti),e(At,oi),e(le,ai),e(le,Xa),e(Xa,ia),e(ia,la),e(la,ri),e(ia,si),m(o,ds,h),m(o,be,h),e(be,ni),e(be,zt),e(zt,ii),e(be,li),e(be,Nt),e(Nt,di),e(be,ci),m(o,cs,h),m(o,et,h),e(et,pi),e(et,Lt),e(Lt,hi),e(et,mi),m(o,ps,h),m(o,qe,h),e(qe,tt),e(tt,Za),y(Dt,Za,null),e(qe,fi),e(qe,Qa),e(Qa,ui),m(o,hs,h),m(o,U,h),y(Ot,U,null),e(U,gi),e(U,ze),e(ze,_i),e(ze,da),e(da,vi),e(ze,Ti),e(ze,St),e(St,bi),e(ze,wi),e(U,yi),e(U,Ne),e(Ne,xi),e(Ne,ca),e(ca,$i),e(Ne,Fi),e(Ne,pa),e(pa,Vi),e(Ne,Ei),e(U,ki),e(U,Ya),e(Ya,Mi),e(U,Ii),y(Wt,U,null),m(o,ms,h),m(o,Le,h),e(Le,ot),e(ot,er),y(Bt,er,null),e(Le,ji),e(Le,tr),e(tr,Pi),m(o,fs,h),m(o,se,h),y(Ut,se,null),e(se,Ci),e(se,or),e(or,Ai),e(se,qi),e(se,Rt),e(Rt,zi),e(Rt,ha),e(ha,Ni),e(Rt,Li),e(se,Di),e(se,we),y(Ht,we,null),e(we,Oi),e(we,ar),e(ar,Si),e(we,Wi),y(at,we,null),m(o,us,h),m(o,De,h),e(De,rt),e(rt,rr),y(Jt,rr,null),e(De,Bi),e(De,sr),e(sr,Ui),m(o,gs,h),m(o,me,h),y(Kt,me,null),e(me,Ri),e(me,Gt),e(Gt,Hi),e(Gt,Xt),e(Xt,Ji),e(Gt,Ki),e(me,Gi),e(me,H),y(Zt,H,null),e(H,Xi),e(H,Oe),e(Oe,Zi),e(Oe,ma),e(ma,Qi),e(Oe,Yi),e(Oe,nr),e(nr,el),e(Oe,tl),e(H,ol),y(st,H,null),e(H,al),e(H,ir),e(ir,rl),e(H,sl),y(Qt,H,null),m(o,_s,h),m(o,Se,h),e(Se,nt),e(nt,lr),y(Yt,lr,null),e(Se,nl),e(Se,dr),e(dr,il),m(o,vs,h),m(o,fe,h),y(eo,fe,null),e(fe,ll),e(fe,We),e(We,dl),e(We,cr),e(cr,cl),e(We,pl),e(We,to),e(to,hl),e(We,ml),e(fe,fl),e(fe,J),y(oo,J,null),e(J,ul),e(J,Be),e(Be,gl),e(Be,fa),e(fa,_l),e(Be,vl),e(Be,pr),e(pr,Tl),e(Be,bl),e(J,wl),y(it,J,null),e(J,yl),e(J,hr),e(hr,xl),e(J,$l),y(ao,J,null),m(o,Ts,h),m(o,Ue,h),e(Ue,lt),e(lt,mr),y(ro,mr,null),e(Ue,Fl),e(Ue,fr),e(fr,Vl),m(o,bs,h),m(o,ne,h),y(so,ne,null),e(ne,El),e(ne,ur),e(ur,kl),e(ne,Ml),e(ne,no),e(no,Il),e(no,io),e(io,jl),e(no,Pl),e(ne,Cl),e(ne,K),y(lo,K,null),e(K,Al),e(K,Re),e(Re,ql),e(Re,ua),e(ua,zl),e(Re,Nl),e(Re,gr),e(gr,Ll),e(Re,Dl),e(K,Ol),y(dt,K,null),e(K,Sl),e(K,_r),e(_r,Wl),e(K,Bl),y(co,K,null),m(o,ws,h),m(o,He,h),e(He,ct),e(ct,vr),y(po,vr,null),e(He,Ul),e(He,Tr),e(Tr,Rl),m(o,ys,h),m(o,D,h),y(ho,D,null),e(D,Hl),e(D,br),e(br,Jl),e(D,Kl),e(D,mo),e(mo,Gl),e(mo,ga),e(ga,Xl),e(mo,Zl),e(D,Ql),e(D,fo),e(fo,Yl),e(fo,uo),e(uo,ed),e(fo,td),e(D,od),y(pt,D,null),e(D,ad),e(D,G),y(go,G,null),e(G,rd),e(G,Je),e(Je,sd),e(Je,_a),e(_a,nd),e(Je,id),e(Je,wr),e(wr,ld),e(Je,dd),e(G,cd),y(ht,G,null),e(G,pd),e(G,yr),e(yr,hd),e(G,md),y(_o,G,null),m(o,xs,h),m(o,Ke,h),e(Ke,mt),e(mt,xr),y(vo,xr,null),e(Ke,fd),e(Ke,$r),e($r,ud),m(o,$s,h),m(o,O,h),y(To,O,null),e(O,gd),e(O,Fr),e(Fr,_d),e(O,vd),e(O,bo),e(bo,Td),e(bo,va),e(va,bd),e(bo,wd),e(O,yd),e(O,wo),e(wo,xd),e(wo,yo),e(yo,$d),e(wo,Fd),e(O,Vd),y(ft,O,null),e(O,Ed),e(O,X),y(xo,X,null),e(X,kd),e(X,Ge),e(Ge,Md),e(Ge,Ta),e(Ta,Id),e(Ge,jd),e(Ge,Vr),e(Vr,Pd),e(Ge,Cd),e(X,Ad),y(ut,X,null),e(X,qd),e(X,Er),e(Er,zd),e(X,Nd),y($o,X,null),m(o,Fs,h),m(o,Xe,h),e(Xe,gt),e(gt,kr),y(Fo,kr,null),e(Xe,Ld),e(Xe,Mr),e(Mr,Dd),m(o,Vs,h),m(o,A,h),y(Vo,A,null),e(A,Od),e(A,Ir),e(Ir,Sd),e(A,Wd),e(A,Eo),e(Eo,Bd),e(Eo,ba),e(ba,Ud),e(Eo,Rd),e(A,Hd),e(A,ko),e(ko,Jd),e(ko,Mo),e(Mo,Kd),e(ko,Gd),e(A,Xd),e(A,jr),e(jr,Zd),e(A,Qd),e(A,ue),e(ue,Pr),e(Pr,Io),e(Io,Yd),e(ue,ec),e(ue,Cr),e(Cr,jo),e(jo,tc),e(ue,oc),e(ue,Ar),e(Ar,Po),e(Po,ac),e(ue,rc),e(ue,qr),e(qr,Co),e(Co,sc),e(A,nc),e(A,Z),y(Ao,Z,null),e(Z,ic),e(Z,Ze),e(Ze,lc),e(Ze,zr),e(zr,dc),e(Ze,cc),e(Ze,Nr),e(Nr,pc),e(Ze,hc),e(Z,mc),y(_t,Z,null),e(Z,fc),e(Z,Lr),e(Lr,uc),e(Z,gc),y(qo,Z,null),m(o,Es,h),m(o,Qe,h),e(Qe,vt),e(vt,Dr),y(zo,Dr,null),e(Qe,_c),e(Qe,Or),e(Or,vc),m(o,ks,h),m(o,q,h),y(No,q,null),e(q,Tc),e(q,Sr),e(Sr,bc),e(q,wc),e(q,Lo),e(Lo,yc),e(Lo,wa),e(wa,xc),e(Lo,$c),e(q,Fc),e(q,Do),e(Do,Vc),e(Do,Oo),e(Oo,Ec),e(Do,kc),e(q,Mc),e(q,Wr),e(Wr,Ic),e(q,jc),e(q,ge),e(ge,Br),e(Br,So),e(So,Pc),e(ge,Cc),e(ge,Ur),e(Ur,Wo),e(Wo,Ac),e(ge,qc),e(ge,Rr),e(Rr,Bo),e(Bo,zc),e(ge,Nc),e(ge,Hr),e(Hr,Uo),e(Uo,Lc),e(q,Dc),e(q,Q),y(Ro,Q,null),e(Q,Oc),e(Q,Ye),e(Ye,Sc),e(Ye,Jr),e(Jr,Wc),e(Ye,Bc),e(Ye,Kr),e(Kr,Uc),e(Ye,Rc),e(Q,Hc),y(Tt,Q,null),e(Q,Jc),e(Q,Gr),e(Gr,Kc),e(Q,Gc),y(Ho,Q,null),Ms=!0},p(o,[h]){const Jo={};h&2&&(Jo.$$scope={dirty:h,ctx:o}),k.$set(Jo);const Xr={};h&2&&(Xr.$$scope={dirty:h,ctx:o}),at.$set(Xr);const Zr={};h&2&&(Zr.$$scope={dirty:h,ctx:o}),st.$set(Zr);const Qr={};h&2&&(Qr.$$scope={dirty:h,ctx:o}),it.$set(Qr);const Ko={};h&2&&(Ko.$$scope={dirty:h,ctx:o}),dt.$set(Ko);const Yr={};h&2&&(Yr.$$scope={dirty:h,ctx:o}),pt.$set(Yr);const es={};h&2&&(es.$$scope={dirty:h,ctx:o}),ht.$set(es);const ts={};h&2&&(ts.$$scope={dirty:h,ctx:o}),ft.$set(ts);const Go={};h&2&&(Go.$$scope={dirty:h,ctx:o}),ut.$set(Go);const os={};h&2&&(os.$$scope={dirty:h,ctx:o}),_t.$set(os);const as={};h&2&&(as.$$scope={dirty:h,ctx:o}),Tt.$set(as)},i(o){Ms||(x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(Dt.$$.fragment,o),x(Ot.$$.fragment,o),x(Wt.$$.fragment,o),x(Bt.$$.fragment,o),x(Ut.$$.fragment,o),x(Ht.$$.fragment,o),x(at.$$.fragment,o),x(Jt.$$.fragment,o),x(Kt.$$.fragment,o),x(Zt.$$.fragment,o),x(st.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(it.$$.fragment,o),x(ao.$$.fragment,o),x(ro.$$.fragment,o),x(so.$$.fragment,o),x(lo.$$.fragment,o),x(dt.$$.fragment,o),x(co.$$.fragment,o),x(po.$$.fragment,o),x(ho.$$.fragment,o),x(pt.$$.fragment,o),x(go.$$.fragment,o),x(ht.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(ft.$$.fragment,o),x(xo.$$.fragment,o),x(ut.$$.fragment,o),x($o.$$.fragment,o),x(Fo.$$.fragment,o),x(Vo.$$.fragment,o),x(Ao.$$.fragment,o),x(_t.$$.fragment,o),x(qo.$$.fragment,o),x(zo.$$.fragment,o),x(No.$$.fragment,o),x(Ro.$$.fragment,o),x(Tt.$$.fragment,o),x(Ho.$$.fragment,o),Ms=!0)},o(o){$(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(Dt.$$.fragment,o),$(Ot.$$.fragment,o),$(Wt.$$.fragment,o),$(Bt.$$.fragment,o),$(Ut.$$.fragment,o),$(Ht.$$.fragment,o),$(at.$$.fragment,o),$(Jt.$$.fragment,o),$(Kt.$$.fragment,o),$(Zt.$$.fragment,o),$(st.$$.fragment,o),$(Qt.$$.fragment,o),$(Yt.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(it.$$.fragment,o),$(ao.$$.fragment,o),$(ro.$$.fragment,o),$(so.$$.fragment,o),$(lo.$$.fragment,o),$(dt.$$.fragment,o),$(co.$$.fragment,o),$(po.$$.fragment,o),$(ho.$$.fragment,o),$(pt.$$.fragment,o),$(go.$$.fragment,o),$(ht.$$.fragment,o),$(_o.$$.fragment,o),$(vo.$$.fragment,o),$(To.$$.fragment,o),$(ft.$$.fragment,o),$(xo.$$.fragment,o),$(ut.$$.fragment,o),$($o.$$.fragment,o),$(Fo.$$.fragment,o),$(Vo.$$.fragment,o),$(Ao.$$.fragment,o),$(_t.$$.fragment,o),$(qo.$$.fragment,o),$(zo.$$.fragment,o),$(No.$$.fragment,o),$(Ro.$$.fragment,o),$(Tt.$$.fragment,o),$(Ho.$$.fragment,o),Ms=!1},d(o){t(p),o&&t(T),o&&t(f),F(_),o&&t(R),F(k,o),o&&t(ie),o&&t(j),F(C),o&&t(I),o&&t(z),o&&t(Te),o&&t(Xo),o&&t(rs),o&&t(Zo),o&&t(ss),o&&t(Qo),o&&t(ns),o&&t(N),o&&t(is),o&&t(ea),o&&t(ls),o&&t(le),o&&t(ds),o&&t(be),o&&t(cs),o&&t(et),o&&t(ps),o&&t(qe),F(Dt),o&&t(hs),o&&t(U),F(Ot),F(Wt),o&&t(ms),o&&t(Le),F(Bt),o&&t(fs),o&&t(se),F(Ut),F(Ht),F(at),o&&t(us),o&&t(De),F(Jt),o&&t(gs),o&&t(me),F(Kt),F(Zt),F(st),F(Qt),o&&t(_s),o&&t(Se),F(Yt),o&&t(vs),o&&t(fe),F(eo),F(oo),F(it),F(ao),o&&t(Ts),o&&t(Ue),F(ro),o&&t(bs),o&&t(ne),F(so),F(lo),F(dt),F(co),o&&t(ws),o&&t(He),F(po),o&&t(ys),o&&t(D),F(ho),F(pt),F(go),F(ht),F(_o),o&&t(xs),o&&t(Ke),F(vo),o&&t($s),o&&t(O),F(To),F(ft),F(xo),F(ut),F($o),o&&t(Fs),o&&t(Xe),F(Fo),o&&t(Vs),o&&t(A),F(Vo),F(Ao),F(_t),F(qo),o&&t(Es),o&&t(Qe),F(zo),o&&t(ks),o&&t(q),F(No),F(Ro),F(Tt),F(Ho)}}}const Im={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function jm(M){return _m(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nm extends mm{constructor(p){super();fm(this,p,jm,Mm,um,{})}}export{Nm as default,Im as metadata};
