import{S as up,i as gp,s as _p,e as a,k as d,w,t as n,L as vp,c as r,d as t,m as c,a as s,x as b,h as i,b as l,J as e,g as f,y,q as $,o as x,B as F}from"../../../chunks/vendor-9e2b328e.js";import{T as Fe}from"../../../chunks/Tip-76f97a76.js";import{D as U}from"../../../chunks/Docstring-50fd6873.js";import{C as zo}from"../../../chunks/CodeBlock-b9ff96e9.js";import{I as Ee}from"../../../chunks/IconCopyLink-fd0e58fd.js";import"../../../chunks/CopyButton-4b97cbf7.js";function Tp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),u=n("Github Issue"),T=n("."),this.h()},l(_){h=r(_,"P",{});var g=s(h);v=i(g,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=r(g,"A",{href:!0,rel:!0});var V=s(m);u=i(V,"Github Issue"),V.forEach(t),T=i(g,"."),g.forEach(t),this.h()},h(){l(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(m,"rel","nofollow")},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function wp(I){let h,v;return{c(){h=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){h=r(m,"P",{});var u=s(h);v=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(m,u){f(m,h,u),e(h,v)},d(m){m&&t(h)}}}function bp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=r(_,"P",{});var g=s(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function yp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=r(_,"P",{});var g=s(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function $p(I){let h,v,m,u,T,_,g,V,ce,R,k,ne,M,W,te,C,he,oe;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ne=n("This second option is useful when using "),M=a("code"),W=n("tf.keras.Model.fit"),te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=n("model(inputs)"),oe=n(".")},l(E){h=r(E,"P",{});var j=s(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(E),u=r(E,"UL",{});var z=s(u);T=r(z,"LI",{});var Ve=s(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(z),V=r(z,"LI",{});var ae=s(V);ce=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),z.forEach(t),R=c(E),k=r(E,"P",{});var L=s(k);ne=i(L,"This second option is useful when using "),M=r(L,"CODE",{});var ke=s(M);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=r(L,"CODE",{});var ue=s(C);he=i(ue,"model(inputs)"),ue.forEach(t),oe=i(L,"."),L.forEach(t)},m(E,j){f(E,h,j),e(h,v),f(E,m,j),f(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,ce),f(E,R,j),f(E,k,j),e(k,ne),e(k,M),e(M,W),e(k,te),e(k,C),e(C,he),e(k,oe)},d(E){E&&t(h),E&&t(m),E&&t(u),E&&t(R),E&&t(k)}}}function xp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=r(_,"P",{});var g=s(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Fp(I){let h,v,m,u,T,_,g,V,ce,R,k,ne,M,W,te,C,he,oe;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ne=n("This second option is useful when using "),M=a("code"),W=n("tf.keras.Model.fit"),te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=n("model(inputs)"),oe=n(".")},l(E){h=r(E,"P",{});var j=s(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(E),u=r(E,"UL",{});var z=s(u);T=r(z,"LI",{});var Ve=s(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(z),V=r(z,"LI",{});var ae=s(V);ce=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),z.forEach(t),R=c(E),k=r(E,"P",{});var L=s(k);ne=i(L,"This second option is useful when using "),M=r(L,"CODE",{});var ke=s(M);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=r(L,"CODE",{});var ue=s(C);he=i(ue,"model(inputs)"),ue.forEach(t),oe=i(L,"."),L.forEach(t)},m(E,j){f(E,h,j),e(h,v),f(E,m,j),f(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,ce),f(E,R,j),f(E,k,j),e(k,ne),e(k,M),e(M,W),e(k,te),e(k,C),e(C,he),e(k,oe)},d(E){E&&t(h),E&&t(m),E&&t(u),E&&t(R),E&&t(k)}}}function Ep(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=r(_,"P",{});var g=s(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Vp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=r(_,"P",{});var g=s(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function kp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=r(_,"P",{});var g=s(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Ip(I){let h,v,m,u,T,_,g,V,ce,R,k,ne,M,W,te,C,he,oe,E,j,z,Ve,ae,L,ke,ue,No,ks,qr,Lo,ya,Is,zr,Do,js,Nr,N,_t,Ms,vt,Ps,Cs,As,$a,qs,zs,Tt,Ns,Oo,Ls,Ds,Os,Ie,Ss,xa,Ws,Bs,wt,Us,Rs,Hs,je,Js,bt,Ks,Gs,yt,Xs,Zs,Qs,Me,Ys,$t,en,tn,xt,on,an,rn,Fa,sn,Lr,So,nn,Dr,ie,Ea,P,Wo,ln,dn,Bo,cn,hn,Uo,pn,fn,Va,mn,un,ka,gn,_n,Ia,vn,Tn,ja,wn,bn,Ro,yn,$n,xn,Ma,Ho,Jo,Fn,En,Vn,Pa,Ft,kn,Et,In,jn,Mn,Ca,Ko,Go,Pn,Cn,Or,ge,An,Vt,qn,zn,kt,Nn,Ln,Sr,Ke,Dn,It,On,Sn,Wr,Pe,Ge,Aa,jt,Wn,qa,Bn,Br,B,Mt,Un,Ce,Rn,Xo,Hn,Jn,Pt,Kn,Gn,Xn,Ae,Zn,Zo,Qn,Yn,Qo,ei,ti,oi,za,ai,ri,Ct,Ur,qe,Xe,Na,At,si,La,ni,Rr,re,qt,ii,Da,li,di,zt,ci,Yo,hi,pi,fi,_e,Nt,mi,Oa,ui,gi,Ze,Hr,ze,Qe,Sa,Lt,_i,Wa,vi,Jr,pe,Dt,Ti,Ot,wi,St,bi,yi,$i,H,Wt,xi,Ne,Fi,ea,Ei,Vi,Ba,ki,Ii,ji,Ye,Mi,Ua,Pi,Ci,Bt,Kr,Le,et,Ra,Ut,Ai,Ha,qi,Gr,se,Rt,zi,Ja,Ni,Li,Ht,Di,Jt,Oi,Si,Wi,J,Kt,Bi,De,Ui,ta,Ri,Hi,Ka,Ji,Ki,Gi,tt,Xi,Ga,Zi,Qi,Gt,Xr,Oe,ot,Xa,Xt,Yi,Za,el,Zr,D,Zt,tl,Qa,ol,al,Qt,rl,oa,sl,nl,il,Yt,ll,eo,dl,cl,hl,at,pl,K,to,fl,Se,ml,aa,ul,gl,Ya,_l,vl,Tl,rt,wl,er,bl,yl,oo,Qr,We,st,tr,ao,$l,or,xl,Yr,O,ro,Fl,ar,El,Vl,so,kl,ra,Il,jl,Ml,no,Pl,io,Cl,Al,ql,nt,zl,G,lo,Nl,Be,Ll,sa,Dl,Ol,rr,Sl,Wl,Bl,it,Ul,sr,Rl,Hl,co,es,Ue,lt,nr,ho,Jl,ir,Kl,ts,A,po,Gl,lr,Xl,Zl,fo,Ql,na,Yl,ed,td,mo,od,uo,ad,rd,sd,dr,nd,id,fe,cr,go,ld,dd,hr,_o,cd,hd,pr,vo,pd,fd,fr,To,md,ud,X,wo,gd,Re,_d,mr,vd,Td,ur,wd,bd,yd,dt,$d,gr,xd,Fd,bo,os,He,ct,_r,yo,Ed,vr,Vd,as,q,$o,kd,Tr,Id,jd,xo,Md,ia,Pd,Cd,Ad,Fo,qd,Eo,zd,Nd,Ld,wr,Dd,Od,me,br,Vo,Sd,Wd,yr,ko,Bd,Ud,$r,Io,Rd,Hd,xr,jo,Jd,Kd,Z,Mo,Gd,Je,Xd,Fr,Zd,Qd,Er,Yd,ec,tc,ht,oc,Vr,ac,rc,Po,rs;return _=new Ee({}),k=new Fe({props:{$$slots:{default:[Tp]},$$scope:{ctx:I}}}),C=new Ee({}),jt=new Ee({}),Mt=new U({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/configuration_vit.py#L29",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"}]}}),Ct=new zo({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),At=new Ee({}),qt=new U({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/feature_extraction_vit.py#L37",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Nt=new U({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/feature_extraction_vit.py#L83",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_15678/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15678/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ze=new Fe({props:{warning:"&lcub;true}",$$slots:{default:[wp]},$$scope:{ctx:I}}}),Lt=new Ee({}),Dt=new U({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_vit.py#L478",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new U({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_vit.py#L503",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Fe({props:{$$slots:{default:[bp]},$$scope:{ctx:I}}}),Bt=new zo({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
list(last_hidden_states.shape),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),Ut=new Ee({}),Rt=new U({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_vit.py#L583",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kt=new U({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_vit.py#L596",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new Fe({props:{$$slots:{default:[yp]},$$scope:{ctx:I}}}),Gt=new zo({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
print(model.config.id2label[predicted_label]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
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
<span class="hljs-string">&#x27;Egyptian cat&#x27;</span>`}}),Xt=new Ee({}),Zt=new U({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_tf_vit.py#L656",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),at=new Fe({props:{$$slots:{default:[$p]},$$scope:{ctx:I}}}),to=new U({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_tf_vit.py#L662",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rt=new Fe({props:{$$slots:{default:[xp]},$$scope:{ctx:I}}}),oo=new zo({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ao=new Ee({}),ro=new U({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_tf_vit.py#L762",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),nt=new Fe({props:{$$slots:{default:[Fp]},$$scope:{ctx:I}}}),lo=new U({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_tf_vit.py#L776",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new Fe({props:{$$slots:{default:[Ep]},$$scope:{ctx:I}}}),co=new zo({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = tf.math.argmax(logits, axis=-1)[0]
print("Predicted class:", model.config.id2label[int(predicted_class_idx)]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),ho=new Ee({}),po=new U({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_flax_vit.py#L510",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),wo=new U({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new Fe({props:{$$slots:{default:[Vp]},$$scope:{ctx:I}}}),bo=new zo({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yo=new Ee({}),$o=new U({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_flax_vit.py#L591",parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Mo=new U({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new Fe({props:{$$slots:{default:[kp]},$$scope:{ctx:I}}}),Po=new zo({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
print("Predicted class:", model.config.id2label[predicted_class_idx.item()]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),v=d(),m=a("h1"),u=a("a"),T=a("span"),w(_.$$.fragment),g=d(),V=a("span"),ce=n("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),ne=d(),M=a("h2"),W=a("a"),te=a("span"),w(C.$$.fragment),he=d(),oe=a("span"),E=n("Overview"),j=d(),z=a("p"),Ve=n("The Vision Transformer (ViT) model was proposed in "),ae=a("a"),L=n(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ke=n(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),ue=d(),No=a("p"),ks=n("The abstract from the paper is the following:"),qr=d(),Lo=a("p"),ya=a("em"),Is=n(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),zr=d(),Do=a("p"),js=n("Tips:"),Nr=d(),N=a("ul"),_t=a("li"),Ms=n("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),vt=a("a"),Ps=n("here"),Cs=n("."),As=d(),$a=a("li"),qs=n(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),zs=d(),Tt=a("li"),Ns=n(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=a("a"),Ls=n("ViTFeatureExtractor"),Ds=n(" to resize (or rescale) and normalize images for the model."),Os=d(),Ie=a("li"),Ss=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),xa=a("code"),Ws=n("google/vit-base-patch16-224"),Bs=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),wt=a("a"),Us=n("hub"),Rs=n("."),Hs=d(),je=a("li"),Js=n("The available checkpoints are either (1) pre-trained on "),bt=a("a"),Ks=n("ImageNet-21k"),Gs=n(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),yt=a("a"),Xs=n("ImageNet"),Zs=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Qs=d(),Me=a("li"),Ys=n(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),$t=a("a"),en=n("(Touvron et al., 2019)"),tn=n(", "),xt=a("a"),on=n(`(Kolesnikov
et al., 2020)`),an=n(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),rn=d(),Fa=a("li"),sn=n(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Lr=d(),So=a("p"),nn=n("Following the original Vision Transformer, some follow-up works have been made:"),Dr=d(),ie=a("ul"),Ea=a("li"),P=a("p"),Wo=a("a"),ln=n("DeiT"),dn=n(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Bo=a("a"),cn=n("ViTModel"),hn=n(` or
`),Uo=a("a"),pn=n("ViTForImageClassification"),fn=n(". There are 4 variants available (in 3 different sizes): "),Va=a("em"),mn=n("facebook/deit-tiny-patch16-224"),un=n(`,
`),ka=a("em"),gn=n("facebook/deit-small-patch16-224"),_n=n(", "),Ia=a("em"),vn=n("facebook/deit-base-patch16-224"),Tn=n(" and "),ja=a("em"),wn=n("facebook/deit-base-patch16-384"),bn=n(`. Note that one should
use `),Ro=a("a"),yn=n("DeiTFeatureExtractor"),$n=n(" in order to prepare images for the model."),xn=d(),Ma=a("li"),Ho=a("p"),Jo=a("a"),Fn=n("BEiT"),En=n(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Vn=d(),Pa=a("li"),Ft=a("p"),kn=n(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Et=a("a"),In=n("hub"),jn=n("."),Mn=d(),Ca=a("li"),Ko=a("p"),Go=a("a"),Pn=n("MAE"),Cn=n(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Or=d(),ge=a("p"),An=n("This model was contributed by "),Vt=a("a"),qn=n("nielsr"),zn=n(`. The original code (written in JAX) can be
found `),kt=a("a"),Nn=n("here"),Ln=n("."),Sr=d(),Ke=a("p"),Dn=n("Note that we converted the weights from Ross Wightman\u2019s "),It=a("a"),On=n("timm library"),Sn=n(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Wr=d(),Pe=a("h2"),Ge=a("a"),Aa=a("span"),w(jt.$$.fragment),Wn=d(),qa=a("span"),Bn=n("ViTConfig"),Br=d(),B=a("div"),w(Mt.$$.fragment),Un=d(),Ce=a("p"),Rn=n("This is the configuration class to store the configuration of a "),Xo=a("a"),Hn=n("ViTModel"),Jn=n(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Pt=a("a"),Kn=n("google/vit-base-patch16-224"),Gn=n(" architecture."),Xn=d(),Ae=a("p"),Zn=n("Configuration objects inherit from "),Zo=a("a"),Qn=n("PretrainedConfig"),Yn=n(` and can be used to control the model outputs. Read the
documentation from `),Qo=a("a"),ei=n("PretrainedConfig"),ti=n(" for more information."),oi=d(),za=a("p"),ai=n("Example:"),ri=d(),w(Ct.$$.fragment),Ur=d(),qe=a("h2"),Xe=a("a"),Na=a("span"),w(At.$$.fragment),si=d(),La=a("span"),ni=n("ViTFeatureExtractor"),Rr=d(),re=a("div"),w(qt.$$.fragment),ii=d(),Da=a("p"),li=n("Constructs a ViT feature extractor."),di=d(),zt=a("p"),ci=n("This feature extractor inherits from "),Yo=a("a"),hi=n("FeatureExtractionMixin"),pi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),fi=d(),_e=a("div"),w(Nt.$$.fragment),mi=d(),Oa=a("p"),ui=n("Main method to prepare for the model one or several image(s)."),gi=d(),w(Ze.$$.fragment),Hr=d(),ze=a("h2"),Qe=a("a"),Sa=a("span"),w(Lt.$$.fragment),_i=d(),Wa=a("span"),vi=n("ViTModel"),Jr=d(),pe=a("div"),w(Dt.$$.fragment),Ti=d(),Ot=a("p"),wi=n(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=a("a"),bi=n("torch.nn.Module"),yi=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$i=d(),H=a("div"),w(Wt.$$.fragment),xi=d(),Ne=a("p"),Fi=n("The "),ea=a("a"),Ei=n("ViTModel"),Vi=n(" forward method, overrides the "),Ba=a("code"),ki=n("__call__"),Ii=n(" special method."),ji=d(),w(Ye.$$.fragment),Mi=d(),Ua=a("p"),Pi=n("Example:"),Ci=d(),w(Bt.$$.fragment),Kr=d(),Le=a("h2"),et=a("a"),Ra=a("span"),w(Ut.$$.fragment),Ai=d(),Ha=a("span"),qi=n("ViTForImageClassification"),Gr=d(),se=a("div"),w(Rt.$$.fragment),zi=d(),Ja=a("p"),Ni=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Li=d(),Ht=a("p"),Di=n("This model is a PyTorch "),Jt=a("a"),Oi=n("torch.nn.Module"),Si=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi=d(),J=a("div"),w(Kt.$$.fragment),Bi=d(),De=a("p"),Ui=n("The "),ta=a("a"),Ri=n("ViTForImageClassification"),Hi=n(" forward method, overrides the "),Ka=a("code"),Ji=n("__call__"),Ki=n(" special method."),Gi=d(),w(tt.$$.fragment),Xi=d(),Ga=a("p"),Zi=n("Example:"),Qi=d(),w(Gt.$$.fragment),Xr=d(),Oe=a("h2"),ot=a("a"),Xa=a("span"),w(Xt.$$.fragment),Yi=d(),Za=a("span"),el=n("TFViTModel"),Zr=d(),D=a("div"),w(Zt.$$.fragment),tl=d(),Qa=a("p"),ol=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),al=d(),Qt=a("p"),rl=n("This model inherits from "),oa=a("a"),sl=n("TFPreTrainedModel"),nl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),il=d(),Yt=a("p"),ll=n("This model is also a "),eo=a("a"),dl=n("tf.keras.Model"),cl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hl=d(),w(at.$$.fragment),pl=d(),K=a("div"),w(to.$$.fragment),fl=d(),Se=a("p"),ml=n("The "),aa=a("a"),ul=n("TFViTModel"),gl=n(" forward method, overrides the "),Ya=a("code"),_l=n("__call__"),vl=n(" special method."),Tl=d(),w(rt.$$.fragment),wl=d(),er=a("p"),bl=n("Examples:"),yl=d(),w(oo.$$.fragment),Qr=d(),We=a("h2"),st=a("a"),tr=a("span"),w(ao.$$.fragment),$l=d(),or=a("span"),xl=n("TFViTForImageClassification"),Yr=d(),O=a("div"),w(ro.$$.fragment),Fl=d(),ar=a("p"),El=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vl=d(),so=a("p"),kl=n("This model inherits from "),ra=a("a"),Il=n("TFPreTrainedModel"),jl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ml=d(),no=a("p"),Pl=n("This model is also a "),io=a("a"),Cl=n("tf.keras.Model"),Al=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ql=d(),w(nt.$$.fragment),zl=d(),G=a("div"),w(lo.$$.fragment),Nl=d(),Be=a("p"),Ll=n("The "),sa=a("a"),Dl=n("TFViTForImageClassification"),Ol=n(" forward method, overrides the "),rr=a("code"),Sl=n("__call__"),Wl=n(" special method."),Bl=d(),w(it.$$.fragment),Ul=d(),sr=a("p"),Rl=n("Examples:"),Hl=d(),w(co.$$.fragment),es=d(),Ue=a("h2"),lt=a("a"),nr=a("span"),w(ho.$$.fragment),Jl=d(),ir=a("span"),Kl=n("FlaxVitModel"),ts=d(),A=a("div"),w(po.$$.fragment),Gl=d(),lr=a("p"),Xl=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Zl=d(),fo=a("p"),Ql=n("This model inherits from "),na=a("a"),Yl=n("FlaxPreTrainedModel"),ed=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),td=d(),mo=a("p"),od=n("This model is also a Flax Linen "),uo=a("a"),ad=n("flax.linen.Module"),rd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sd=d(),dr=a("p"),nd=n("Finally, this model supports inherent JAX features such as:"),id=d(),fe=a("ul"),cr=a("li"),go=a("a"),ld=n("Just-In-Time (JIT) compilation"),dd=d(),hr=a("li"),_o=a("a"),cd=n("Automatic Differentiation"),hd=d(),pr=a("li"),vo=a("a"),pd=n("Vectorization"),fd=d(),fr=a("li"),To=a("a"),md=n("Parallelization"),ud=d(),X=a("div"),w(wo.$$.fragment),gd=d(),Re=a("p"),_d=n("The "),mr=a("code"),vd=n("FlaxViTPreTrainedModel"),Td=n("forward method, overrides the "),ur=a("code"),wd=n("__call__"),bd=n(" special method."),yd=d(),w(dt.$$.fragment),$d=d(),gr=a("p"),xd=n("Examples:"),Fd=d(),w(bo.$$.fragment),os=d(),He=a("h2"),ct=a("a"),_r=a("span"),w(yo.$$.fragment),Ed=d(),vr=a("span"),Vd=n("FlaxViTForImageClassification"),as=d(),q=a("div"),w($o.$$.fragment),kd=d(),Tr=a("p"),Id=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),jd=d(),xo=a("p"),Md=n("This model inherits from "),ia=a("a"),Pd=n("FlaxPreTrainedModel"),Cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ad=d(),Fo=a("p"),qd=n("This model is also a Flax Linen "),Eo=a("a"),zd=n("flax.linen.Module"),Nd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ld=d(),wr=a("p"),Dd=n("Finally, this model supports inherent JAX features such as:"),Od=d(),me=a("ul"),br=a("li"),Vo=a("a"),Sd=n("Just-In-Time (JIT) compilation"),Wd=d(),yr=a("li"),ko=a("a"),Bd=n("Automatic Differentiation"),Ud=d(),$r=a("li"),Io=a("a"),Rd=n("Vectorization"),Hd=d(),xr=a("li"),jo=a("a"),Jd=n("Parallelization"),Kd=d(),Z=a("div"),w(Mo.$$.fragment),Gd=d(),Je=a("p"),Xd=n("The "),Fr=a("code"),Zd=n("FlaxViTPreTrainedModel"),Qd=n("forward method, overrides the "),Er=a("code"),Yd=n("__call__"),ec=n(" special method."),tc=d(),w(ht.$$.fragment),oc=d(),Vr=a("p"),ac=n("Example:"),rc=d(),w(Po.$$.fragment),this.h()},l(o){const p=vp('[data-svelte="svelte-1phssyn"]',document.head);h=r(p,"META",{name:!0,content:!0}),p.forEach(t),v=c(o),m=r(o,"H1",{class:!0});var Co=s(m);u=r(Co,"A",{id:!0,class:!0,href:!0});var kr=s(u);T=r(kr,"SPAN",{});var Ir=s(T);b(_.$$.fragment,Ir),Ir.forEach(t),kr.forEach(t),g=c(Co),V=r(Co,"SPAN",{});var jr=s(V);ce=i(jr,"Vision Transformer (ViT)"),jr.forEach(t),Co.forEach(t),R=c(o),b(k.$$.fragment,o),ne=c(o),M=r(o,"H2",{class:!0});var Ao=s(M);W=r(Ao,"A",{id:!0,class:!0,href:!0});var Mr=s(W);te=r(Mr,"SPAN",{});var Pr=s(te);b(C.$$.fragment,Pr),Pr.forEach(t),Mr.forEach(t),he=c(Ao),oe=r(Ao,"SPAN",{});var Cr=s(oe);E=i(Cr,"Overview"),Cr.forEach(t),Ao.forEach(t),j=c(o),z=r(o,"P",{});var qo=s(z);Ve=i(qo,"The Vision Transformer (ViT) model was proposed in "),ae=r(qo,"A",{href:!0,rel:!0});var Ar=s(ae);L=i(Ar,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Ar.forEach(t),ke=i(qo,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),qo.forEach(t),ue=c(o),No=r(o,"P",{});var ic=s(No);ks=i(ic,"The abstract from the paper is the following:"),ic.forEach(t),qr=c(o),Lo=r(o,"P",{});var lc=s(Lo);ya=r(lc,"EM",{});var dc=s(ya);Is=i(dc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),dc.forEach(t),lc.forEach(t),zr=c(o),Do=r(o,"P",{});var cc=s(Do);js=i(cc,"Tips:"),cc.forEach(t),Nr=c(o),N=r(o,"UL",{});var Q=s(N);_t=r(Q,"LI",{});var ss=s(_t);Ms=i(ss,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),vt=r(ss,"A",{href:!0,rel:!0});var hc=s(vt);Ps=i(hc,"here"),hc.forEach(t),Cs=i(ss,"."),ss.forEach(t),As=c(Q),$a=r(Q,"LI",{});var pc=s($a);qs=i(pc,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),pc.forEach(t),zs=c(Q),Tt=r(Q,"LI",{});var ns=s(Tt);Ns=i(ns,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=r(ns,"A",{href:!0});var fc=s(Oo);Ls=i(fc,"ViTFeatureExtractor"),fc.forEach(t),Ds=i(ns," to resize (or rescale) and normalize images for the model."),ns.forEach(t),Os=c(Q),Ie=r(Q,"LI",{});var la=s(Ie);Ss=i(la,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),xa=r(la,"CODE",{});var mc=s(xa);Ws=i(mc,"google/vit-base-patch16-224"),mc.forEach(t),Bs=i(la,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),wt=r(la,"A",{href:!0,rel:!0});var uc=s(wt);Us=i(uc,"hub"),uc.forEach(t),Rs=i(la,"."),la.forEach(t),Hs=c(Q),je=r(Q,"LI",{});var da=s(je);Js=i(da,"The available checkpoints are either (1) pre-trained on "),bt=r(da,"A",{href:!0,rel:!0});var gc=s(bt);Ks=i(gc,"ImageNet-21k"),gc.forEach(t),Gs=i(da,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),yt=r(da,"A",{href:!0,rel:!0});var _c=s(yt);Xs=i(_c,"ImageNet"),_c.forEach(t),Zs=i(da,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),da.forEach(t),Qs=c(Q),Me=r(Q,"LI",{});var ca=s(Me);Ys=i(ca,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),$t=r(ca,"A",{href:!0,rel:!0});var vc=s($t);en=i(vc,"(Touvron et al., 2019)"),vc.forEach(t),tn=i(ca,", "),xt=r(ca,"A",{href:!0,rel:!0});var Tc=s(xt);on=i(Tc,`(Kolesnikov
et al., 2020)`),Tc.forEach(t),an=i(ca,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),ca.forEach(t),rn=c(Q),Fa=r(Q,"LI",{});var wc=s(Fa);sn=i(wc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),wc.forEach(t),Q.forEach(t),Lr=c(o),So=r(o,"P",{});var bc=s(So);nn=i(bc,"Following the original Vision Transformer, some follow-up works have been made:"),bc.forEach(t),Dr=c(o),ie=r(o,"UL",{});var pt=s(ie);Ea=r(pt,"LI",{});var yc=s(Ea);P=r(yc,"P",{});var S=s(P);Wo=r(S,"A",{href:!0});var $c=s(Wo);ln=i($c,"DeiT"),$c.forEach(t),dn=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Bo=r(S,"A",{href:!0});var xc=s(Bo);cn=i(xc,"ViTModel"),xc.forEach(t),hn=i(S,` or
`),Uo=r(S,"A",{href:!0});var Fc=s(Uo);pn=i(Fc,"ViTForImageClassification"),Fc.forEach(t),fn=i(S,". There are 4 variants available (in 3 different sizes): "),Va=r(S,"EM",{});var Ec=s(Va);mn=i(Ec,"facebook/deit-tiny-patch16-224"),Ec.forEach(t),un=i(S,`,
`),ka=r(S,"EM",{});var Vc=s(ka);gn=i(Vc,"facebook/deit-small-patch16-224"),Vc.forEach(t),_n=i(S,", "),Ia=r(S,"EM",{});var kc=s(Ia);vn=i(kc,"facebook/deit-base-patch16-224"),kc.forEach(t),Tn=i(S," and "),ja=r(S,"EM",{});var Ic=s(ja);wn=i(Ic,"facebook/deit-base-patch16-384"),Ic.forEach(t),bn=i(S,`. Note that one should
use `),Ro=r(S,"A",{href:!0});var jc=s(Ro);yn=i(jc,"DeiTFeatureExtractor"),jc.forEach(t),$n=i(S," in order to prepare images for the model."),S.forEach(t),yc.forEach(t),xn=c(pt),Ma=r(pt,"LI",{});var Mc=s(Ma);Ho=r(Mc,"P",{});var sc=s(Ho);Jo=r(sc,"A",{href:!0});var Pc=s(Jo);Fn=i(Pc,"BEiT"),Pc.forEach(t),En=i(sc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),sc.forEach(t),Mc.forEach(t),Vn=c(pt),Pa=r(pt,"LI",{});var Cc=s(Pa);Ft=r(Cc,"P",{});var is=s(Ft);kn=i(is,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Et=r(is,"A",{href:!0,rel:!0});var Ac=s(Et);In=i(Ac,"hub"),Ac.forEach(t),jn=i(is,"."),is.forEach(t),Cc.forEach(t),Mn=c(pt),Ca=r(pt,"LI",{});var qc=s(Ca);Ko=r(qc,"P",{});var nc=s(Ko);Go=r(nc,"A",{href:!0});var zc=s(Go);Pn=i(zc,"MAE"),zc.forEach(t),Cn=i(nc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),nc.forEach(t),qc.forEach(t),pt.forEach(t),Or=c(o),ge=r(o,"P",{});var ha=s(ge);An=i(ha,"This model was contributed by "),Vt=r(ha,"A",{href:!0,rel:!0});var Nc=s(Vt);qn=i(Nc,"nielsr"),Nc.forEach(t),zn=i(ha,`. The original code (written in JAX) can be
found `),kt=r(ha,"A",{href:!0,rel:!0});var Lc=s(kt);Nn=i(Lc,"here"),Lc.forEach(t),Ln=i(ha,"."),ha.forEach(t),Sr=c(o),Ke=r(o,"P",{});var ls=s(Ke);Dn=i(ls,"Note that we converted the weights from Ross Wightman\u2019s "),It=r(ls,"A",{href:!0,rel:!0});var Dc=s(It);On=i(Dc,"timm library"),Dc.forEach(t),Sn=i(ls,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),ls.forEach(t),Wr=c(o),Pe=r(o,"H2",{class:!0});var ds=s(Pe);Ge=r(ds,"A",{id:!0,class:!0,href:!0});var Oc=s(Ge);Aa=r(Oc,"SPAN",{});var Sc=s(Aa);b(jt.$$.fragment,Sc),Sc.forEach(t),Oc.forEach(t),Wn=c(ds),qa=r(ds,"SPAN",{});var Wc=s(qa);Bn=i(Wc,"ViTConfig"),Wc.forEach(t),ds.forEach(t),Br=c(o),B=r(o,"DIV",{class:!0});var ve=s(B);b(Mt.$$.fragment,ve),Un=c(ve),Ce=r(ve,"P",{});var pa=s(Ce);Rn=i(pa,"This is the configuration class to store the configuration of a "),Xo=r(pa,"A",{href:!0});var Bc=s(Xo);Hn=i(Bc,"ViTModel"),Bc.forEach(t),Jn=i(pa,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Pt=r(pa,"A",{href:!0,rel:!0});var Uc=s(Pt);Kn=i(Uc,"google/vit-base-patch16-224"),Uc.forEach(t),Gn=i(pa," architecture."),pa.forEach(t),Xn=c(ve),Ae=r(ve,"P",{});var fa=s(Ae);Zn=i(fa,"Configuration objects inherit from "),Zo=r(fa,"A",{href:!0});var Rc=s(Zo);Qn=i(Rc,"PretrainedConfig"),Rc.forEach(t),Yn=i(fa,` and can be used to control the model outputs. Read the
documentation from `),Qo=r(fa,"A",{href:!0});var Hc=s(Qo);ei=i(Hc,"PretrainedConfig"),Hc.forEach(t),ti=i(fa," for more information."),fa.forEach(t),oi=c(ve),za=r(ve,"P",{});var Jc=s(za);ai=i(Jc,"Example:"),Jc.forEach(t),ri=c(ve),b(Ct.$$.fragment,ve),ve.forEach(t),Ur=c(o),qe=r(o,"H2",{class:!0});var cs=s(qe);Xe=r(cs,"A",{id:!0,class:!0,href:!0});var Kc=s(Xe);Na=r(Kc,"SPAN",{});var Gc=s(Na);b(At.$$.fragment,Gc),Gc.forEach(t),Kc.forEach(t),si=c(cs),La=r(cs,"SPAN",{});var Xc=s(La);ni=i(Xc,"ViTFeatureExtractor"),Xc.forEach(t),cs.forEach(t),Rr=c(o),re=r(o,"DIV",{class:!0});var ft=s(re);b(qt.$$.fragment,ft),ii=c(ft),Da=r(ft,"P",{});var Zc=s(Da);li=i(Zc,"Constructs a ViT feature extractor."),Zc.forEach(t),di=c(ft),zt=r(ft,"P",{});var hs=s(zt);ci=i(hs,"This feature extractor inherits from "),Yo=r(hs,"A",{href:!0});var Qc=s(Yo);hi=i(Qc,"FeatureExtractionMixin"),Qc.forEach(t),pi=i(hs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),hs.forEach(t),fi=c(ft),_e=r(ft,"DIV",{class:!0});var ma=s(_e);b(Nt.$$.fragment,ma),mi=c(ma),Oa=r(ma,"P",{});var Yc=s(Oa);ui=i(Yc,"Main method to prepare for the model one or several image(s)."),Yc.forEach(t),gi=c(ma),b(Ze.$$.fragment,ma),ma.forEach(t),ft.forEach(t),Hr=c(o),ze=r(o,"H2",{class:!0});var ps=s(ze);Qe=r(ps,"A",{id:!0,class:!0,href:!0});var eh=s(Qe);Sa=r(eh,"SPAN",{});var th=s(Sa);b(Lt.$$.fragment,th),th.forEach(t),eh.forEach(t),_i=c(ps),Wa=r(ps,"SPAN",{});var oh=s(Wa);vi=i(oh,"ViTModel"),oh.forEach(t),ps.forEach(t),Jr=c(o),pe=r(o,"DIV",{class:!0});var ua=s(pe);b(Dt.$$.fragment,ua),Ti=c(ua),Ot=r(ua,"P",{});var fs=s(Ot);wi=i(fs,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=r(fs,"A",{href:!0,rel:!0});var ah=s(St);bi=i(ah,"torch.nn.Module"),ah.forEach(t),yi=i(fs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs.forEach(t),$i=c(ua),H=r(ua,"DIV",{class:!0});var Te=s(H);b(Wt.$$.fragment,Te),xi=c(Te),Ne=r(Te,"P",{});var ga=s(Ne);Fi=i(ga,"The "),ea=r(ga,"A",{href:!0});var rh=s(ea);Ei=i(rh,"ViTModel"),rh.forEach(t),Vi=i(ga," forward method, overrides the "),Ba=r(ga,"CODE",{});var sh=s(Ba);ki=i(sh,"__call__"),sh.forEach(t),Ii=i(ga," special method."),ga.forEach(t),ji=c(Te),b(Ye.$$.fragment,Te),Mi=c(Te),Ua=r(Te,"P",{});var nh=s(Ua);Pi=i(nh,"Example:"),nh.forEach(t),Ci=c(Te),b(Bt.$$.fragment,Te),Te.forEach(t),ua.forEach(t),Kr=c(o),Le=r(o,"H2",{class:!0});var ms=s(Le);et=r(ms,"A",{id:!0,class:!0,href:!0});var ih=s(et);Ra=r(ih,"SPAN",{});var lh=s(Ra);b(Ut.$$.fragment,lh),lh.forEach(t),ih.forEach(t),Ai=c(ms),Ha=r(ms,"SPAN",{});var dh=s(Ha);qi=i(dh,"ViTForImageClassification"),dh.forEach(t),ms.forEach(t),Gr=c(o),se=r(o,"DIV",{class:!0});var mt=s(se);b(Rt.$$.fragment,mt),zi=c(mt),Ja=r(mt,"P",{});var ch=s(Ja);Ni=i(ch,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ch.forEach(t),Li=c(mt),Ht=r(mt,"P",{});var us=s(Ht);Di=i(us,"This model is a PyTorch "),Jt=r(us,"A",{href:!0,rel:!0});var hh=s(Jt);Oi=i(hh,"torch.nn.Module"),hh.forEach(t),Si=i(us,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),us.forEach(t),Wi=c(mt),J=r(mt,"DIV",{class:!0});var we=s(J);b(Kt.$$.fragment,we),Bi=c(we),De=r(we,"P",{});var _a=s(De);Ui=i(_a,"The "),ta=r(_a,"A",{href:!0});var ph=s(ta);Ri=i(ph,"ViTForImageClassification"),ph.forEach(t),Hi=i(_a," forward method, overrides the "),Ka=r(_a,"CODE",{});var fh=s(Ka);Ji=i(fh,"__call__"),fh.forEach(t),Ki=i(_a," special method."),_a.forEach(t),Gi=c(we),b(tt.$$.fragment,we),Xi=c(we),Ga=r(we,"P",{});var mh=s(Ga);Zi=i(mh,"Example:"),mh.forEach(t),Qi=c(we),b(Gt.$$.fragment,we),we.forEach(t),mt.forEach(t),Xr=c(o),Oe=r(o,"H2",{class:!0});var gs=s(Oe);ot=r(gs,"A",{id:!0,class:!0,href:!0});var uh=s(ot);Xa=r(uh,"SPAN",{});var gh=s(Xa);b(Xt.$$.fragment,gh),gh.forEach(t),uh.forEach(t),Yi=c(gs),Za=r(gs,"SPAN",{});var _h=s(Za);el=i(_h,"TFViTModel"),_h.forEach(t),gs.forEach(t),Zr=c(o),D=r(o,"DIV",{class:!0});var le=s(D);b(Zt.$$.fragment,le),tl=c(le),Qa=r(le,"P",{});var vh=s(Qa);ol=i(vh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),vh.forEach(t),al=c(le),Qt=r(le,"P",{});var _s=s(Qt);rl=i(_s,"This model inherits from "),oa=r(_s,"A",{href:!0});var Th=s(oa);sl=i(Th,"TFPreTrainedModel"),Th.forEach(t),nl=i(_s,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_s.forEach(t),il=c(le),Yt=r(le,"P",{});var vs=s(Yt);ll=i(vs,"This model is also a "),eo=r(vs,"A",{href:!0,rel:!0});var wh=s(eo);dl=i(wh,"tf.keras.Model"),wh.forEach(t),cl=i(vs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vs.forEach(t),hl=c(le),b(at.$$.fragment,le),pl=c(le),K=r(le,"DIV",{class:!0});var be=s(K);b(to.$$.fragment,be),fl=c(be),Se=r(be,"P",{});var va=s(Se);ml=i(va,"The "),aa=r(va,"A",{href:!0});var bh=s(aa);ul=i(bh,"TFViTModel"),bh.forEach(t),gl=i(va," forward method, overrides the "),Ya=r(va,"CODE",{});var yh=s(Ya);_l=i(yh,"__call__"),yh.forEach(t),vl=i(va," special method."),va.forEach(t),Tl=c(be),b(rt.$$.fragment,be),wl=c(be),er=r(be,"P",{});var $h=s(er);bl=i($h,"Examples:"),$h.forEach(t),yl=c(be),b(oo.$$.fragment,be),be.forEach(t),le.forEach(t),Qr=c(o),We=r(o,"H2",{class:!0});var Ts=s(We);st=r(Ts,"A",{id:!0,class:!0,href:!0});var xh=s(st);tr=r(xh,"SPAN",{});var Fh=s(tr);b(ao.$$.fragment,Fh),Fh.forEach(t),xh.forEach(t),$l=c(Ts),or=r(Ts,"SPAN",{});var Eh=s(or);xl=i(Eh,"TFViTForImageClassification"),Eh.forEach(t),Ts.forEach(t),Yr=c(o),O=r(o,"DIV",{class:!0});var de=s(O);b(ro.$$.fragment,de),Fl=c(de),ar=r(de,"P",{});var Vh=s(ar);El=i(Vh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vh.forEach(t),Vl=c(de),so=r(de,"P",{});var ws=s(so);kl=i(ws,"This model inherits from "),ra=r(ws,"A",{href:!0});var kh=s(ra);Il=i(kh,"TFPreTrainedModel"),kh.forEach(t),jl=i(ws,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ws.forEach(t),Ml=c(de),no=r(de,"P",{});var bs=s(no);Pl=i(bs,"This model is also a "),io=r(bs,"A",{href:!0,rel:!0});var Ih=s(io);Cl=i(Ih,"tf.keras.Model"),Ih.forEach(t),Al=i(bs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bs.forEach(t),ql=c(de),b(nt.$$.fragment,de),zl=c(de),G=r(de,"DIV",{class:!0});var ye=s(G);b(lo.$$.fragment,ye),Nl=c(ye),Be=r(ye,"P",{});var Ta=s(Be);Ll=i(Ta,"The "),sa=r(Ta,"A",{href:!0});var jh=s(sa);Dl=i(jh,"TFViTForImageClassification"),jh.forEach(t),Ol=i(Ta," forward method, overrides the "),rr=r(Ta,"CODE",{});var Mh=s(rr);Sl=i(Mh,"__call__"),Mh.forEach(t),Wl=i(Ta," special method."),Ta.forEach(t),Bl=c(ye),b(it.$$.fragment,ye),Ul=c(ye),sr=r(ye,"P",{});var Ph=s(sr);Rl=i(Ph,"Examples:"),Ph.forEach(t),Hl=c(ye),b(co.$$.fragment,ye),ye.forEach(t),de.forEach(t),es=c(o),Ue=r(o,"H2",{class:!0});var ys=s(Ue);lt=r(ys,"A",{id:!0,class:!0,href:!0});var Ch=s(lt);nr=r(Ch,"SPAN",{});var Ah=s(nr);b(ho.$$.fragment,Ah),Ah.forEach(t),Ch.forEach(t),Jl=c(ys),ir=r(ys,"SPAN",{});var qh=s(ir);Kl=i(qh,"FlaxVitModel"),qh.forEach(t),ys.forEach(t),ts=c(o),A=r(o,"DIV",{class:!0});var Y=s(A);b(po.$$.fragment,Y),Gl=c(Y),lr=r(Y,"P",{});var zh=s(lr);Xl=i(zh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),zh.forEach(t),Zl=c(Y),fo=r(Y,"P",{});var $s=s(fo);Ql=i($s,"This model inherits from "),na=r($s,"A",{href:!0});var Nh=s(na);Yl=i(Nh,"FlaxPreTrainedModel"),Nh.forEach(t),ed=i($s,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$s.forEach(t),td=c(Y),mo=r(Y,"P",{});var xs=s(mo);od=i(xs,"This model is also a Flax Linen "),uo=r(xs,"A",{href:!0,rel:!0});var Lh=s(uo);ad=i(Lh,"flax.linen.Module"),Lh.forEach(t),rd=i(xs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xs.forEach(t),sd=c(Y),dr=r(Y,"P",{});var Dh=s(dr);nd=i(Dh,"Finally, this model supports inherent JAX features such as:"),Dh.forEach(t),id=c(Y),fe=r(Y,"UL",{});var ut=s(fe);cr=r(ut,"LI",{});var Oh=s(cr);go=r(Oh,"A",{href:!0,rel:!0});var Sh=s(go);ld=i(Sh,"Just-In-Time (JIT) compilation"),Sh.forEach(t),Oh.forEach(t),dd=c(ut),hr=r(ut,"LI",{});var Wh=s(hr);_o=r(Wh,"A",{href:!0,rel:!0});var Bh=s(_o);cd=i(Bh,"Automatic Differentiation"),Bh.forEach(t),Wh.forEach(t),hd=c(ut),pr=r(ut,"LI",{});var Uh=s(pr);vo=r(Uh,"A",{href:!0,rel:!0});var Rh=s(vo);pd=i(Rh,"Vectorization"),Rh.forEach(t),Uh.forEach(t),fd=c(ut),fr=r(ut,"LI",{});var Hh=s(fr);To=r(Hh,"A",{href:!0,rel:!0});var Jh=s(To);md=i(Jh,"Parallelization"),Jh.forEach(t),Hh.forEach(t),ut.forEach(t),ud=c(Y),X=r(Y,"DIV",{class:!0});var $e=s(X);b(wo.$$.fragment,$e),gd=c($e),Re=r($e,"P",{});var wa=s(Re);_d=i(wa,"The "),mr=r(wa,"CODE",{});var Kh=s(mr);vd=i(Kh,"FlaxViTPreTrainedModel"),Kh.forEach(t),Td=i(wa,"forward method, overrides the "),ur=r(wa,"CODE",{});var Gh=s(ur);wd=i(Gh,"__call__"),Gh.forEach(t),bd=i(wa," special method."),wa.forEach(t),yd=c($e),b(dt.$$.fragment,$e),$d=c($e),gr=r($e,"P",{});var Xh=s(gr);xd=i(Xh,"Examples:"),Xh.forEach(t),Fd=c($e),b(bo.$$.fragment,$e),$e.forEach(t),Y.forEach(t),os=c(o),He=r(o,"H2",{class:!0});var Fs=s(He);ct=r(Fs,"A",{id:!0,class:!0,href:!0});var Zh=s(ct);_r=r(Zh,"SPAN",{});var Qh=s(_r);b(yo.$$.fragment,Qh),Qh.forEach(t),Zh.forEach(t),Ed=c(Fs),vr=r(Fs,"SPAN",{});var Yh=s(vr);Vd=i(Yh,"FlaxViTForImageClassification"),Yh.forEach(t),Fs.forEach(t),as=c(o),q=r(o,"DIV",{class:!0});var ee=s(q);b($o.$$.fragment,ee),kd=c(ee),Tr=r(ee,"P",{});var ep=s(Tr);Id=i(ep,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ep.forEach(t),jd=c(ee),xo=r(ee,"P",{});var Es=s(xo);Md=i(Es,"This model inherits from "),ia=r(Es,"A",{href:!0});var tp=s(ia);Pd=i(tp,"FlaxPreTrainedModel"),tp.forEach(t),Cd=i(Es,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Es.forEach(t),Ad=c(ee),Fo=r(ee,"P",{});var Vs=s(Fo);qd=i(Vs,"This model is also a Flax Linen "),Eo=r(Vs,"A",{href:!0,rel:!0});var op=s(Eo);zd=i(op,"flax.linen.Module"),op.forEach(t),Nd=i(Vs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vs.forEach(t),Ld=c(ee),wr=r(ee,"P",{});var ap=s(wr);Dd=i(ap,"Finally, this model supports inherent JAX features such as:"),ap.forEach(t),Od=c(ee),me=r(ee,"UL",{});var gt=s(me);br=r(gt,"LI",{});var rp=s(br);Vo=r(rp,"A",{href:!0,rel:!0});var sp=s(Vo);Sd=i(sp,"Just-In-Time (JIT) compilation"),sp.forEach(t),rp.forEach(t),Wd=c(gt),yr=r(gt,"LI",{});var np=s(yr);ko=r(np,"A",{href:!0,rel:!0});var ip=s(ko);Bd=i(ip,"Automatic Differentiation"),ip.forEach(t),np.forEach(t),Ud=c(gt),$r=r(gt,"LI",{});var lp=s($r);Io=r(lp,"A",{href:!0,rel:!0});var dp=s(Io);Rd=i(dp,"Vectorization"),dp.forEach(t),lp.forEach(t),Hd=c(gt),xr=r(gt,"LI",{});var cp=s(xr);jo=r(cp,"A",{href:!0,rel:!0});var hp=s(jo);Jd=i(hp,"Parallelization"),hp.forEach(t),cp.forEach(t),gt.forEach(t),Kd=c(ee),Z=r(ee,"DIV",{class:!0});var xe=s(Z);b(Mo.$$.fragment,xe),Gd=c(xe),Je=r(xe,"P",{});var ba=s(Je);Xd=i(ba,"The "),Fr=r(ba,"CODE",{});var pp=s(Fr);Zd=i(pp,"FlaxViTPreTrainedModel"),pp.forEach(t),Qd=i(ba,"forward method, overrides the "),Er=r(ba,"CODE",{});var fp=s(Er);Yd=i(fp,"__call__"),fp.forEach(t),ec=i(ba," special method."),ba.forEach(t),tc=c(xe),b(ht.$$.fragment,xe),oc=c(xe),Vr=r(xe,"P",{});var mp=s(Vr);ac=i(mp,"Example:"),mp.forEach(t),rc=c(xe),b(Po.$$.fragment,xe),xe.forEach(t),ee.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(jp)),l(u,"id","vision-transformer-vit"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#vision-transformer-vit"),l(m,"class","relative group"),l(W,"id","overview"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#overview"),l(M,"class","relative group"),l(ae,"href","https://arxiv.org/abs/2010.11929"),l(ae,"rel","nofollow"),l(vt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(vt,"rel","nofollow"),l(Oo,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(wt,"href","https://huggingface.co/models?search=vit"),l(wt,"rel","nofollow"),l(bt,"href","http://www.image-net.org/"),l(bt,"rel","nofollow"),l(yt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(yt,"rel","nofollow"),l($t,"href","https://arxiv.org/abs/1906.06423"),l($t,"rel","nofollow"),l(xt,"href","https://arxiv.org/abs/1912.11370"),l(xt,"rel","nofollow"),l(Wo,"href","deit"),l(Bo,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTModel"),l(Uo,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTForImageClassification"),l(Ro,"href","/docs/transformers/pr_15678/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(Jo,"href","beit"),l(Et,"href","https://huggingface.co/models?other=dino"),l(Et,"rel","nofollow"),l(Go,"href","vit_mae"),l(Vt,"href","https://huggingface.co/nielsr"),l(Vt,"rel","nofollow"),l(kt,"href","https://github.com/google-research/vision_transformer"),l(kt,"rel","nofollow"),l(It,"href","https://github.com/rwightman/pytorch-image-models"),l(It,"rel","nofollow"),l(Ge,"id","transformers.ViTConfig"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.ViTConfig"),l(Pe,"class","relative group"),l(Xo,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTModel"),l(Pt,"href","https://huggingface.co/google/vit-base-patch16-224"),l(Pt,"rel","nofollow"),l(Zo,"href","/docs/transformers/pr_15678/en/main_classes/configuration#transformers.PretrainedConfig"),l(Qo,"href","/docs/transformers/pr_15678/en/main_classes/configuration#transformers.PretrainedConfig"),l(B,"class","docstring"),l(Xe,"id","transformers.ViTFeatureExtractor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.ViTFeatureExtractor"),l(qe,"class","relative group"),l(Yo,"href","/docs/transformers/pr_15678/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(_e,"class","docstring"),l(re,"class","docstring"),l(Qe,"id","transformers.ViTModel"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#transformers.ViTModel"),l(ze,"class","relative group"),l(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(St,"rel","nofollow"),l(ea,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(pe,"class","docstring"),l(et,"id","transformers.ViTForImageClassification"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.ViTForImageClassification"),l(Le,"class","relative group"),l(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Jt,"rel","nofollow"),l(ta,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.ViTForImageClassification"),l(J,"class","docstring"),l(se,"class","docstring"),l(ot,"id","transformers.TFViTModel"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.TFViTModel"),l(Oe,"class","relative group"),l(oa,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel"),l(eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(eo,"rel","nofollow"),l(aa,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.TFViTModel"),l(K,"class","docstring"),l(D,"class","docstring"),l(st,"id","transformers.TFViTForImageClassification"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.TFViTForImageClassification"),l(We,"class","relative group"),l(ra,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel"),l(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(io,"rel","nofollow"),l(sa,"href","/docs/transformers/pr_15678/en/model_doc/vit#transformers.TFViTForImageClassification"),l(G,"class","docstring"),l(O,"class","docstring"),l(lt,"id","transformers.FlaxViTModel"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.FlaxViTModel"),l(Ue,"class","relative group"),l(na,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(uo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(uo,"rel","nofollow"),l(go,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(go,"rel","nofollow"),l(_o,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(_o,"rel","nofollow"),l(vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(vo,"rel","nofollow"),l(To,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(To,"rel","nofollow"),l(X,"class","docstring"),l(A,"class","docstring"),l(ct,"id","transformers.FlaxViTForImageClassification"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.FlaxViTForImageClassification"),l(He,"class","relative group"),l(ia,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Eo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Eo,"rel","nofollow"),l(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Vo,"rel","nofollow"),l(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(ko,"rel","nofollow"),l(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Io,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(jo,"rel","nofollow"),l(Z,"class","docstring"),l(q,"class","docstring")},m(o,p){e(document.head,h),f(o,v,p),f(o,m,p),e(m,u),e(u,T),y(_,T,null),e(m,g),e(m,V),e(V,ce),f(o,R,p),y(k,o,p),f(o,ne,p),f(o,M,p),e(M,W),e(W,te),y(C,te,null),e(M,he),e(M,oe),e(oe,E),f(o,j,p),f(o,z,p),e(z,Ve),e(z,ae),e(ae,L),e(z,ke),f(o,ue,p),f(o,No,p),e(No,ks),f(o,qr,p),f(o,Lo,p),e(Lo,ya),e(ya,Is),f(o,zr,p),f(o,Do,p),e(Do,js),f(o,Nr,p),f(o,N,p),e(N,_t),e(_t,Ms),e(_t,vt),e(vt,Ps),e(_t,Cs),e(N,As),e(N,$a),e($a,qs),e(N,zs),e(N,Tt),e(Tt,Ns),e(Tt,Oo),e(Oo,Ls),e(Tt,Ds),e(N,Os),e(N,Ie),e(Ie,Ss),e(Ie,xa),e(xa,Ws),e(Ie,Bs),e(Ie,wt),e(wt,Us),e(Ie,Rs),e(N,Hs),e(N,je),e(je,Js),e(je,bt),e(bt,Ks),e(je,Gs),e(je,yt),e(yt,Xs),e(je,Zs),e(N,Qs),e(N,Me),e(Me,Ys),e(Me,$t),e($t,en),e(Me,tn),e(Me,xt),e(xt,on),e(Me,an),e(N,rn),e(N,Fa),e(Fa,sn),f(o,Lr,p),f(o,So,p),e(So,nn),f(o,Dr,p),f(o,ie,p),e(ie,Ea),e(Ea,P),e(P,Wo),e(Wo,ln),e(P,dn),e(P,Bo),e(Bo,cn),e(P,hn),e(P,Uo),e(Uo,pn),e(P,fn),e(P,Va),e(Va,mn),e(P,un),e(P,ka),e(ka,gn),e(P,_n),e(P,Ia),e(Ia,vn),e(P,Tn),e(P,ja),e(ja,wn),e(P,bn),e(P,Ro),e(Ro,yn),e(P,$n),e(ie,xn),e(ie,Ma),e(Ma,Ho),e(Ho,Jo),e(Jo,Fn),e(Ho,En),e(ie,Vn),e(ie,Pa),e(Pa,Ft),e(Ft,kn),e(Ft,Et),e(Et,In),e(Ft,jn),e(ie,Mn),e(ie,Ca),e(Ca,Ko),e(Ko,Go),e(Go,Pn),e(Ko,Cn),f(o,Or,p),f(o,ge,p),e(ge,An),e(ge,Vt),e(Vt,qn),e(ge,zn),e(ge,kt),e(kt,Nn),e(ge,Ln),f(o,Sr,p),f(o,Ke,p),e(Ke,Dn),e(Ke,It),e(It,On),e(Ke,Sn),f(o,Wr,p),f(o,Pe,p),e(Pe,Ge),e(Ge,Aa),y(jt,Aa,null),e(Pe,Wn),e(Pe,qa),e(qa,Bn),f(o,Br,p),f(o,B,p),y(Mt,B,null),e(B,Un),e(B,Ce),e(Ce,Rn),e(Ce,Xo),e(Xo,Hn),e(Ce,Jn),e(Ce,Pt),e(Pt,Kn),e(Ce,Gn),e(B,Xn),e(B,Ae),e(Ae,Zn),e(Ae,Zo),e(Zo,Qn),e(Ae,Yn),e(Ae,Qo),e(Qo,ei),e(Ae,ti),e(B,oi),e(B,za),e(za,ai),e(B,ri),y(Ct,B,null),f(o,Ur,p),f(o,qe,p),e(qe,Xe),e(Xe,Na),y(At,Na,null),e(qe,si),e(qe,La),e(La,ni),f(o,Rr,p),f(o,re,p),y(qt,re,null),e(re,ii),e(re,Da),e(Da,li),e(re,di),e(re,zt),e(zt,ci),e(zt,Yo),e(Yo,hi),e(zt,pi),e(re,fi),e(re,_e),y(Nt,_e,null),e(_e,mi),e(_e,Oa),e(Oa,ui),e(_e,gi),y(Ze,_e,null),f(o,Hr,p),f(o,ze,p),e(ze,Qe),e(Qe,Sa),y(Lt,Sa,null),e(ze,_i),e(ze,Wa),e(Wa,vi),f(o,Jr,p),f(o,pe,p),y(Dt,pe,null),e(pe,Ti),e(pe,Ot),e(Ot,wi),e(Ot,St),e(St,bi),e(Ot,yi),e(pe,$i),e(pe,H),y(Wt,H,null),e(H,xi),e(H,Ne),e(Ne,Fi),e(Ne,ea),e(ea,Ei),e(Ne,Vi),e(Ne,Ba),e(Ba,ki),e(Ne,Ii),e(H,ji),y(Ye,H,null),e(H,Mi),e(H,Ua),e(Ua,Pi),e(H,Ci),y(Bt,H,null),f(o,Kr,p),f(o,Le,p),e(Le,et),e(et,Ra),y(Ut,Ra,null),e(Le,Ai),e(Le,Ha),e(Ha,qi),f(o,Gr,p),f(o,se,p),y(Rt,se,null),e(se,zi),e(se,Ja),e(Ja,Ni),e(se,Li),e(se,Ht),e(Ht,Di),e(Ht,Jt),e(Jt,Oi),e(Ht,Si),e(se,Wi),e(se,J),y(Kt,J,null),e(J,Bi),e(J,De),e(De,Ui),e(De,ta),e(ta,Ri),e(De,Hi),e(De,Ka),e(Ka,Ji),e(De,Ki),e(J,Gi),y(tt,J,null),e(J,Xi),e(J,Ga),e(Ga,Zi),e(J,Qi),y(Gt,J,null),f(o,Xr,p),f(o,Oe,p),e(Oe,ot),e(ot,Xa),y(Xt,Xa,null),e(Oe,Yi),e(Oe,Za),e(Za,el),f(o,Zr,p),f(o,D,p),y(Zt,D,null),e(D,tl),e(D,Qa),e(Qa,ol),e(D,al),e(D,Qt),e(Qt,rl),e(Qt,oa),e(oa,sl),e(Qt,nl),e(D,il),e(D,Yt),e(Yt,ll),e(Yt,eo),e(eo,dl),e(Yt,cl),e(D,hl),y(at,D,null),e(D,pl),e(D,K),y(to,K,null),e(K,fl),e(K,Se),e(Se,ml),e(Se,aa),e(aa,ul),e(Se,gl),e(Se,Ya),e(Ya,_l),e(Se,vl),e(K,Tl),y(rt,K,null),e(K,wl),e(K,er),e(er,bl),e(K,yl),y(oo,K,null),f(o,Qr,p),f(o,We,p),e(We,st),e(st,tr),y(ao,tr,null),e(We,$l),e(We,or),e(or,xl),f(o,Yr,p),f(o,O,p),y(ro,O,null),e(O,Fl),e(O,ar),e(ar,El),e(O,Vl),e(O,so),e(so,kl),e(so,ra),e(ra,Il),e(so,jl),e(O,Ml),e(O,no),e(no,Pl),e(no,io),e(io,Cl),e(no,Al),e(O,ql),y(nt,O,null),e(O,zl),e(O,G),y(lo,G,null),e(G,Nl),e(G,Be),e(Be,Ll),e(Be,sa),e(sa,Dl),e(Be,Ol),e(Be,rr),e(rr,Sl),e(Be,Wl),e(G,Bl),y(it,G,null),e(G,Ul),e(G,sr),e(sr,Rl),e(G,Hl),y(co,G,null),f(o,es,p),f(o,Ue,p),e(Ue,lt),e(lt,nr),y(ho,nr,null),e(Ue,Jl),e(Ue,ir),e(ir,Kl),f(o,ts,p),f(o,A,p),y(po,A,null),e(A,Gl),e(A,lr),e(lr,Xl),e(A,Zl),e(A,fo),e(fo,Ql),e(fo,na),e(na,Yl),e(fo,ed),e(A,td),e(A,mo),e(mo,od),e(mo,uo),e(uo,ad),e(mo,rd),e(A,sd),e(A,dr),e(dr,nd),e(A,id),e(A,fe),e(fe,cr),e(cr,go),e(go,ld),e(fe,dd),e(fe,hr),e(hr,_o),e(_o,cd),e(fe,hd),e(fe,pr),e(pr,vo),e(vo,pd),e(fe,fd),e(fe,fr),e(fr,To),e(To,md),e(A,ud),e(A,X),y(wo,X,null),e(X,gd),e(X,Re),e(Re,_d),e(Re,mr),e(mr,vd),e(Re,Td),e(Re,ur),e(ur,wd),e(Re,bd),e(X,yd),y(dt,X,null),e(X,$d),e(X,gr),e(gr,xd),e(X,Fd),y(bo,X,null),f(o,os,p),f(o,He,p),e(He,ct),e(ct,_r),y(yo,_r,null),e(He,Ed),e(He,vr),e(vr,Vd),f(o,as,p),f(o,q,p),y($o,q,null),e(q,kd),e(q,Tr),e(Tr,Id),e(q,jd),e(q,xo),e(xo,Md),e(xo,ia),e(ia,Pd),e(xo,Cd),e(q,Ad),e(q,Fo),e(Fo,qd),e(Fo,Eo),e(Eo,zd),e(Fo,Nd),e(q,Ld),e(q,wr),e(wr,Dd),e(q,Od),e(q,me),e(me,br),e(br,Vo),e(Vo,Sd),e(me,Wd),e(me,yr),e(yr,ko),e(ko,Bd),e(me,Ud),e(me,$r),e($r,Io),e(Io,Rd),e(me,Hd),e(me,xr),e(xr,jo),e(jo,Jd),e(q,Kd),e(q,Z),y(Mo,Z,null),e(Z,Gd),e(Z,Je),e(Je,Xd),e(Je,Fr),e(Fr,Zd),e(Je,Qd),e(Je,Er),e(Er,Yd),e(Je,ec),e(Z,tc),y(ht,Z,null),e(Z,oc),e(Z,Vr),e(Vr,ac),e(Z,rc),y(Po,Z,null),rs=!0},p(o,[p]){const Co={};p&2&&(Co.$$scope={dirty:p,ctx:o}),k.$set(Co);const kr={};p&2&&(kr.$$scope={dirty:p,ctx:o}),Ze.$set(kr);const Ir={};p&2&&(Ir.$$scope={dirty:p,ctx:o}),Ye.$set(Ir);const jr={};p&2&&(jr.$$scope={dirty:p,ctx:o}),tt.$set(jr);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:o}),at.$set(Ao);const Mr={};p&2&&(Mr.$$scope={dirty:p,ctx:o}),rt.$set(Mr);const Pr={};p&2&&(Pr.$$scope={dirty:p,ctx:o}),nt.$set(Pr);const Cr={};p&2&&(Cr.$$scope={dirty:p,ctx:o}),it.$set(Cr);const qo={};p&2&&(qo.$$scope={dirty:p,ctx:o}),dt.$set(qo);const Ar={};p&2&&(Ar.$$scope={dirty:p,ctx:o}),ht.$set(Ar)},i(o){rs||($(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(jt.$$.fragment,o),$(Mt.$$.fragment,o),$(Ct.$$.fragment,o),$(At.$$.fragment,o),$(qt.$$.fragment,o),$(Nt.$$.fragment,o),$(Ze.$$.fragment,o),$(Lt.$$.fragment,o),$(Dt.$$.fragment,o),$(Wt.$$.fragment,o),$(Ye.$$.fragment,o),$(Bt.$$.fragment,o),$(Ut.$$.fragment,o),$(Rt.$$.fragment,o),$(Kt.$$.fragment,o),$(tt.$$.fragment,o),$(Gt.$$.fragment,o),$(Xt.$$.fragment,o),$(Zt.$$.fragment,o),$(at.$$.fragment,o),$(to.$$.fragment,o),$(rt.$$.fragment,o),$(oo.$$.fragment,o),$(ao.$$.fragment,o),$(ro.$$.fragment,o),$(nt.$$.fragment,o),$(lo.$$.fragment,o),$(it.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(wo.$$.fragment,o),$(dt.$$.fragment,o),$(bo.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(Mo.$$.fragment,o),$(ht.$$.fragment,o),$(Po.$$.fragment,o),rs=!0)},o(o){x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(jt.$$.fragment,o),x(Mt.$$.fragment,o),x(Ct.$$.fragment,o),x(At.$$.fragment,o),x(qt.$$.fragment,o),x(Nt.$$.fragment,o),x(Ze.$$.fragment,o),x(Lt.$$.fragment,o),x(Dt.$$.fragment,o),x(Wt.$$.fragment,o),x(Ye.$$.fragment,o),x(Bt.$$.fragment,o),x(Ut.$$.fragment,o),x(Rt.$$.fragment,o),x(Kt.$$.fragment,o),x(tt.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Zt.$$.fragment,o),x(at.$$.fragment,o),x(to.$$.fragment,o),x(rt.$$.fragment,o),x(oo.$$.fragment,o),x(ao.$$.fragment,o),x(ro.$$.fragment,o),x(nt.$$.fragment,o),x(lo.$$.fragment,o),x(it.$$.fragment,o),x(co.$$.fragment,o),x(ho.$$.fragment,o),x(po.$$.fragment,o),x(wo.$$.fragment,o),x(dt.$$.fragment,o),x(bo.$$.fragment,o),x(yo.$$.fragment,o),x($o.$$.fragment,o),x(Mo.$$.fragment,o),x(ht.$$.fragment,o),x(Po.$$.fragment,o),rs=!1},d(o){t(h),o&&t(v),o&&t(m),F(_),o&&t(R),F(k,o),o&&t(ne),o&&t(M),F(C),o&&t(j),o&&t(z),o&&t(ue),o&&t(No),o&&t(qr),o&&t(Lo),o&&t(zr),o&&t(Do),o&&t(Nr),o&&t(N),o&&t(Lr),o&&t(So),o&&t(Dr),o&&t(ie),o&&t(Or),o&&t(ge),o&&t(Sr),o&&t(Ke),o&&t(Wr),o&&t(Pe),F(jt),o&&t(Br),o&&t(B),F(Mt),F(Ct),o&&t(Ur),o&&t(qe),F(At),o&&t(Rr),o&&t(re),F(qt),F(Nt),F(Ze),o&&t(Hr),o&&t(ze),F(Lt),o&&t(Jr),o&&t(pe),F(Dt),F(Wt),F(Ye),F(Bt),o&&t(Kr),o&&t(Le),F(Ut),o&&t(Gr),o&&t(se),F(Rt),F(Kt),F(tt),F(Gt),o&&t(Xr),o&&t(Oe),F(Xt),o&&t(Zr),o&&t(D),F(Zt),F(at),F(to),F(rt),F(oo),o&&t(Qr),o&&t(We),F(ao),o&&t(Yr),o&&t(O),F(ro),F(nt),F(lo),F(it),F(co),o&&t(es),o&&t(Ue),F(ho),o&&t(ts),o&&t(A),F(po),F(wo),F(dt),F(bo),o&&t(os),o&&t(He),F(yo),o&&t(as),o&&t(q),F($o),F(Mo),F(ht),F(Po)}}}const jp={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Mp(I,h,v){let{fw:m}=h;return I.$$set=u=>{"fw"in u&&v(0,m=u.fw)},[m]}class Lp extends up{constructor(h){super();gp(this,h,Mp,Ip,_p,{fw:0})}}export{Lp as default,jp as metadata};
