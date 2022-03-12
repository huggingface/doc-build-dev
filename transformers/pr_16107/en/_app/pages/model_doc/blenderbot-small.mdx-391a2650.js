import{S as Hm,i as Km,s as Qm,e as n,k as l,w as f,t as r,M as Vm,c as a,d as t,m as i,a as s,x as _,h as d,b as c,F as e,g as p,y as g,q as b,o as k,B as v}from"../../chunks/vendor-4833417e.js";import{T as xn}from"../../chunks/Tip-fffd6df1.js";import{D as E}from"../../chunks/Docstring-4f315ed9.js";import{C as rt}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Fe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Jm(K){let u,z,y,T,B;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=a(S,"P",{});var w=s(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(w,"CODE",{});var q=s(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function Xm(K){let u,z,y,T,B;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=a(S,"P",{});var w=s(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(w,"CODE",{});var q=s(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function Ym(K){let u,z,y,T,B,S,w,q,Ce,me,x,je,U,Pe,Oe,W,Le,Ne,Q,V,Ie,Z,C,O,fe,ae,$e,J,A,Te,se,L,we,re,Me,ee,de,le,Ae,X,Ee,R,De;return{c(){u=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=n("ul"),B=n("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=l(),x=n("p"),je=r("This second option is useful when using "),U=n("code"),Pe=r("tf.keras.Model.fit"),Oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Le=r("model(inputs)"),Ne=r("."),Q=l(),V=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=n("ul"),O=n("li"),fe=r("a single Tensor with "),ae=n("code"),$e=r("input_ids"),J=r(" only and nothing else: "),A=n("code"),Te=r("model(input_ids)"),se=l(),L=n("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Me=r("model([input_ids, attention_mask])"),ee=r(" or "),de=n("code"),le=r("model([input_ids, attention_mask, token_type_ids])"),Ae=l(),X=n("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var F=s(u);z=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(m),T=a(m,"UL",{});var ie=s(T);B=a(ie,"LI",{});var dt=s(B);S=d(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),w=i(ie),q=a(ie,"LI",{});var Re=s(q);Ce=d(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),ie.forEach(t),me=i(m),x=a(m,"P",{});var j=s(x);je=d(j,"This second option is useful when using "),U=a(j,"CODE",{});var lt=s(U);Pe=d(lt,"tf.keras.Model.fit"),lt.forEach(t),Oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a(j,"CODE",{});var Se=s(W);Le=d(Se,"model(inputs)"),Se.forEach(t),Ne=d(j,"."),j.forEach(t),Q=i(m),V=a(m,"P",{});var it=s(V);Ie=d(it,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),it.forEach(t),Z=i(m),C=a(m,"UL",{});var Y=s(C);O=a(Y,"LI",{});var D=s(O);fe=d(D,"a single Tensor with "),ae=a(D,"CODE",{});var ct=s(ae);$e=d(ct,"input_ids"),ct.forEach(t),J=d(D," only and nothing else: "),A=a(D,"CODE",{});var pt=s(A);Te=d(pt,"model(input_ids)"),pt.forEach(t),D.forEach(t),se=i(Y),L=a(Y,"LI",{});var te=s(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(te,"CODE",{});var ce=s(re);Me=d(ce,"model([input_ids, attention_mask])"),ce.forEach(t),ee=d(te," or "),de=a(te,"CODE",{});var _e=s(de);le=d(_e,"model([input_ids, attention_mask, token_type_ids])"),_e.forEach(t),te.forEach(t),Ae=i(Y),X=a(Y,"LI",{});var Be=s(X);Ee=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Be,"CODE",{});var xe=s(R);De=d(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),Be.forEach(t),Y.forEach(t)},m(m,F){p(m,u,F),e(u,z),p(m,y,F),p(m,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Ce),p(m,me,F),p(m,x,F),e(x,je),e(x,U),e(U,Pe),e(x,Oe),e(x,W),e(W,Le),e(x,Ne),p(m,Q,F),p(m,V,F),e(V,Ie),p(m,Z,F),p(m,C,F),e(C,O),e(O,fe),e(O,ae),e(ae,$e),e(O,J),e(O,A),e(A,Te),e(C,se),e(C,L),e(L,we),e(L,re),e(re,Me),e(L,ee),e(L,de),e(de,le),e(C,Ae),e(C,X),e(X,Ee),e(X,R),e(R,De)},d(m){m&&t(u),m&&t(y),m&&t(T),m&&t(me),m&&t(x),m&&t(Q),m&&t(V),m&&t(Z),m&&t(C)}}}function Zm(K){let u,z,y,T,B;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=a(S,"P",{});var w=s(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(w,"CODE",{});var q=s(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function ef(K){let u,z,y,T,B,S,w,q,Ce,me,x,je,U,Pe,Oe,W,Le,Ne,Q,V,Ie,Z,C,O,fe,ae,$e,J,A,Te,se,L,we,re,Me,ee,de,le,Ae,X,Ee,R,De;return{c(){u=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=n("ul"),B=n("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=l(),x=n("p"),je=r("This second option is useful when using "),U=n("code"),Pe=r("tf.keras.Model.fit"),Oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Le=r("model(inputs)"),Ne=r("."),Q=l(),V=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=n("ul"),O=n("li"),fe=r("a single Tensor with "),ae=n("code"),$e=r("input_ids"),J=r(" only and nothing else: "),A=n("code"),Te=r("model(input_ids)"),se=l(),L=n("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Me=r("model([input_ids, attention_mask])"),ee=r(" or "),de=n("code"),le=r("model([input_ids, attention_mask, token_type_ids])"),Ae=l(),X=n("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var F=s(u);z=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(m),T=a(m,"UL",{});var ie=s(T);B=a(ie,"LI",{});var dt=s(B);S=d(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),w=i(ie),q=a(ie,"LI",{});var Re=s(q);Ce=d(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),ie.forEach(t),me=i(m),x=a(m,"P",{});var j=s(x);je=d(j,"This second option is useful when using "),U=a(j,"CODE",{});var lt=s(U);Pe=d(lt,"tf.keras.Model.fit"),lt.forEach(t),Oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a(j,"CODE",{});var Se=s(W);Le=d(Se,"model(inputs)"),Se.forEach(t),Ne=d(j,"."),j.forEach(t),Q=i(m),V=a(m,"P",{});var it=s(V);Ie=d(it,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),it.forEach(t),Z=i(m),C=a(m,"UL",{});var Y=s(C);O=a(Y,"LI",{});var D=s(O);fe=d(D,"a single Tensor with "),ae=a(D,"CODE",{});var ct=s(ae);$e=d(ct,"input_ids"),ct.forEach(t),J=d(D," only and nothing else: "),A=a(D,"CODE",{});var pt=s(A);Te=d(pt,"model(input_ids)"),pt.forEach(t),D.forEach(t),se=i(Y),L=a(Y,"LI",{});var te=s(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(te,"CODE",{});var ce=s(re);Me=d(ce,"model([input_ids, attention_mask])"),ce.forEach(t),ee=d(te," or "),de=a(te,"CODE",{});var _e=s(de);le=d(_e,"model([input_ids, attention_mask, token_type_ids])"),_e.forEach(t),te.forEach(t),Ae=i(Y),X=a(Y,"LI",{});var Be=s(X);Ee=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Be,"CODE",{});var xe=s(R);De=d(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),Be.forEach(t),Y.forEach(t)},m(m,F){p(m,u,F),e(u,z),p(m,y,F),p(m,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Ce),p(m,me,F),p(m,x,F),e(x,je),e(x,U),e(U,Pe),e(x,Oe),e(x,W),e(W,Le),e(x,Ne),p(m,Q,F),p(m,V,F),e(V,Ie),p(m,Z,F),p(m,C,F),e(C,O),e(O,fe),e(O,ae),e(ae,$e),e(O,J),e(O,A),e(A,Te),e(C,se),e(C,L),e(L,we),e(L,re),e(re,Me),e(L,ee),e(L,de),e(de,le),e(C,Ae),e(C,X),e(X,Ee),e(X,R),e(R,De)},d(m){m&&t(u),m&&t(y),m&&t(T),m&&t(me),m&&t(x),m&&t(Q),m&&t(V),m&&t(Z),m&&t(C)}}}function tf(K){let u,z,y,T,B;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=a(S,"P",{});var w=s(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(w,"CODE",{});var q=s(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function of(K){let u,z,y,T,B;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=a(S,"P",{});var w=s(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(w,"CODE",{});var q=s(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function nf(K){let u,z,y,T,B,S,w,q,Ce,me,x,je,U,Pe,Oe,W,Le,Ne,Q,V,Ie,Z,C,O,fe,ae,$e,J,A,Te,se,L,we,re,Me,ee,de,le,Ae,X,Ee,R,De,m,F,ie,dt,Re,j,lt,Se,it,Y,D,ct,pt,te,ce,_e,Be,xe,hd,la,ud,mr,pe,eo,md,ht,fd,zn,_d,gd,to,bd,kd,vd,ut,yd,qn,Td,wd,Fn,Sd,Bd,xd,ia,zd,qd,oo,fr,mt,$t,ca,no,Fd,pa,$d,_r,G,ao,Md,ha,Ed,Cd,so,jd,$n,Pd,Od,Ld,He,ro,Nd,ua,Id,Ad,ma,Dd,Gd,Mt,lo,Ud,ft,Wd,fa,Rd,Hd,_a,Kd,Qd,Vd,Ke,io,Jd,Mn,Xd,En,Yd,Zd,ga,el,tl,Cn,co,gr,_t,Et,ba,po,ol,ka,nl,br,Ge,ho,al,uo,sl,va,rl,dl,ll,Ct,mo,il,ya,cl,kr,gt,jt,Ta,fo,pl,wa,hl,vr,ze,_o,ul,go,ml,jn,fl,_l,gl,bo,bl,ko,kl,vl,yl,ge,vo,Tl,bt,wl,Pn,Sl,Bl,Sa,xl,zl,ql,Pt,Fl,Ba,$l,Ml,yo,yr,kt,Ot,xa,To,El,za,Cl,Tr,qe,wo,jl,So,Pl,On,Ol,Ll,Nl,Bo,Il,xo,Al,Dl,Gl,be,zo,Ul,vt,Wl,Ln,Rl,Hl,qa,Kl,Ql,Vl,Lt,Jl,Fa,Xl,Yl,qo,wr,yt,Nt,$a,Fo,Zl,Ma,ei,Sr,Tt,$o,ti,Qe,Mo,oi,Ea,ni,ai,Eo,Br,wt,It,Ca,Co,si,ja,ri,xr,he,jo,di,Po,li,Nn,ii,ci,pi,Oo,hi,Lo,ui,mi,fi,At,_i,ke,No,gi,St,bi,In,ki,vi,Pa,yi,Ti,wi,Dt,Si,Oa,Bi,xi,Io,zr,Bt,Gt,La,Ao,zi,Na,qi,qr,ue,Do,Fi,Go,$i,An,Mi,Ei,Ci,Uo,ji,Wo,Pi,Oi,Li,Ut,Ni,P,Ro,Ii,xt,Ai,Dn,Di,Gi,Ia,Ui,Wi,Ri,Wt,Hi,Aa,Ki,Qi,Da,Ga,Ua,Wa,Vi,Ji,Ra,Ha,Ka,Qa,Xi,Yi,Va,Ja,Xa,Ya,Zi,ec,Za,es,ts,Ho,tc,os,oc,nc,ac,ns,as,ss,rs,sc,Fr,zt,Rt,ds,Ko,rc,ls,dc,$r,N,Qo,lc,Vo,ic,Gn,cc,pc,hc,Jo,uc,Xo,mc,fc,_c,is,gc,bc,Ue,cs,Yo,kc,vc,ps,Zo,yc,Tc,hs,en,wc,Sc,us,tn,Bc,xc,Ve,on,zc,ms,qc,Fc,nn,$c,Je,an,Mc,fs,Ec,Cc,sn,jc,Xe,rn,Pc,_s,Oc,Lc,dn,Mr,qt,Ht,gs,ln,Nc,bs,Ic,Er,I,cn,Ac,pn,Dc,Un,Gc,Uc,Wc,hn,Rc,un,Hc,Kc,Qc,ks,Vc,Jc,We,vs,mn,Xc,Yc,ys,fn,Zc,ep,Ts,_n,tp,op,ws,gn,np,ap,$,bn,sp,Ft,rp,Ss,dp,lp,Bs,ip,cp,pp,Kt,hp,xs,up,mp,zs,qs,Fs,$s,fp,_p,Ms,Es,Cs,js,gp,bp,Ps,Os,Ls,Ns,kp,vp,Is,As,kn,Qt,Vt,Ds,vn,yp,Gs,Tp,wp,Us,Sp,Bp,Ws,xp,zp,Rs,Hs,Ks,Qs,qp,Fp,Vs,Js,Xs,Ys,$p,Mp,Zs,er,tr,or,Ep,Cp,nr,ar,sr,rr,jp,Pp,Ye,yn,Op,dr,Lp,Np,Tn,Ip,Ze,wn,Ap,lr,Dp,Gp,Sn,Cr;return S=new Fe({}),se=new Fe({}),xe=new Fe({}),eo=new E({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotSmallConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotSmallConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotSmallConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotSmallConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotSmallConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotSmallConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),oo=new rt({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

# Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration
configuration = BlenderbotSmallConfig()

# Initializing a model from the facebook/blenderbot_small-90M style configuration
model = BlenderbotSmallModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallModel, BlenderbotSmallConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),no=new Fe({}),ao=new E({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_16107/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),ro=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/tokenization_utils_base.py#L2884",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lo=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/tokenization_utils.py#L843",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),io=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),co=new E({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),po=new Fe({}),ho=new E({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),mo=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new Fe({}),_o=new E({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1074",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vo=new E({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1101",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pt=new xn({props:{$$slots:{default:[Jm]},$$scope:{ctx:K}}}),yo=new rt({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")  # Batch size 1
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),To=new Fe({}),wo=new E({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1200",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new E({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1244",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lt=new xn({props:{$$slots:{default:[Xm]},$$scope:{ctx:K}}}),qo=new rt({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

mname = "facebook/blenderbot_small-90M"
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)

inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)

NEXT_UTTERANCE = (
    "My friends are cool but they eat too many carbs.</s> <s>what kind of carbs do they eat? "
    "i don't know much about carbs</s> "
    "<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors="pt")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot:  what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;what kind of carbs do they eat? <span class="hljs-string">&quot;
...     &quot;</span>i don<span class="hljs-string">&#x27;t know much about carbs&lt;/s&gt; &quot;
...     &quot;&lt;s&gt; I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),Fo=new Fe({}),$o=new E({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1380"}}),Mo=new E({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1411",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new rt({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = BlenderbotSmallForCausalLM.from_pretrained(
    "facebook/blenderbot_small-90M", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),Co=new Fe({}),jo=new E({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1165",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),At=new xn({props:{$$slots:{default:[Ym]},$$scope:{ctx:K}}}),No=new E({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1177",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dt=new xn({props:{$$slots:{default:[Zm]},$$scope:{ctx:K}}}),Io=new rt({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
import tensorflow as tf

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = TFBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ao=new Fe({}),Do=new E({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1272",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ut=new xn({props:{$$slots:{default:[ef]},$$scope:{ctx:K}}}),Ro=new E({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1305",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new xn({props:{$$slots:{default:[tf]},$$scope:{ctx:K}}}),Ko=new Fe({}),Qo=new E({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1204",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),on=new E({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1140",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new rt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new E({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L961",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new rt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),rn=new E({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1024",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new rt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ln=new Fe({}),cn=new E({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1292",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),bn=new E({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1140",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new xn({props:{$$slots:{default:[of]},$$scope:{ctx:K}}}),vn=new Fe({}),yn=new E({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L961",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new rt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),wn=new E({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16107/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1296",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16107/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16107/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16107/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new rt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),z=l(),y=n("h1"),T=n("a"),B=n("span"),f(S.$$.fragment),w=l(),q=n("span"),Ce=r("Blenderbot Small"),me=l(),x=n("p"),je=r("Note that "),U=n("a"),Pe=r("BlenderbotSmallModel"),Oe=r(` and
`),W=n("a"),Le=r("BlenderbotSmallForConditionalGeneration"),Ne=r(` are only used in combination with the checkpoint
`),Q=n("a"),V=r("facebook/blenderbot-90M"),Ie=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),C=r("BlenderbotModel"),O=r(` and
`),fe=n("a"),ae=r("BlenderbotForConditionalGeneration"),$e=l(),J=n("h2"),A=n("a"),Te=n("span"),f(se.$$.fragment),L=l(),we=n("span"),re=r("Overview"),Me=l(),ee=n("p"),de=r("The Blender chatbot model was proposed in "),le=n("a"),Ae=r("Recipes for building an open-domain chatbot"),X=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Ee=l(),R=n("p"),De=r("The abstract of the paper is the following:"),m=l(),F=n("p"),ie=n("em"),dt=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=l(),j=n("p"),lt=r("This model was contributed by "),Se=n("a"),it=r("patrickvonplaten"),Y=r(`. The authors\u2019 code can be
found `),D=n("a"),ct=r("here"),pt=r(" ."),te=l(),ce=n("h2"),_e=n("a"),Be=n("span"),f(xe.$$.fragment),hd=l(),la=n("span"),ud=r("BlenderbotSmallConfig"),mr=l(),pe=n("div"),f(eo.$$.fragment),md=l(),ht=n("p"),fd=r("This is the configuration class to store the configuration of a "),zn=n("a"),_d=r("BlenderbotSmallModel"),gd=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),to=n("a"),bd=r("facebook/blenderbot_small-90M"),kd=r(" architecture."),vd=l(),ut=n("p"),yd=r("Configuration objects inherit from "),qn=n("a"),Td=r("PretrainedConfig"),wd=r(` and can be used to control the model outputs. Read the
documentation from `),Fn=n("a"),Sd=r("PretrainedConfig"),Bd=r(" for more information."),xd=l(),ia=n("p"),zd=r("Example:"),qd=l(),f(oo.$$.fragment),fr=l(),mt=n("h2"),$t=n("a"),ca=n("span"),f(no.$$.fragment),Fd=l(),pa=n("span"),$d=r("BlenderbotSmallTokenizer"),_r=l(),G=n("div"),f(ao.$$.fragment),Md=l(),ha=n("p"),Ed=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Cd=l(),so=n("p"),jd=r("This tokenizer inherits from "),$n=n("a"),Pd=r("PreTrainedTokenizer"),Od=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ld=l(),He=n("div"),f(ro.$$.fragment),Nd=l(),ua=n("p"),Id=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ad=l(),ma=n("p"),Dd=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Gd=l(),Mt=n("div"),f(lo.$$.fragment),Ud=l(),ft=n("p"),Wd=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=n("code"),Rd=r("prepare_for_model"),Hd=r(" or "),_a=n("code"),Kd=r("encode_plus"),Qd=r(" methods."),Vd=l(),Ke=n("div"),f(io.$$.fragment),Jd=l(),Mn=n("p"),Xd=r("Create the token type IDs corresponding to the sequences passed. "),En=n("a"),Yd=r(`What are token type
IDs?`),Zd=l(),ga=n("p"),el=r("Should be overridden in a subclass if the model has a special way of building those."),tl=l(),Cn=n("div"),f(co.$$.fragment),gr=l(),_t=n("h2"),Et=n("a"),ba=n("span"),f(po.$$.fragment),ol=l(),ka=n("span"),nl=r("BlenderbotSmallTokenizerFast"),br=l(),Ge=n("div"),f(ho.$$.fragment),al=l(),uo=n("p"),sl=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=n("em"),rl=r("tokenizers"),dl=r(" library)."),ll=l(),Ct=n("div"),f(mo.$$.fragment),il=l(),ya=n("p"),cl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),kr=l(),gt=n("h2"),jt=n("a"),Ta=n("span"),f(fo.$$.fragment),pl=l(),wa=n("span"),hl=r("BlenderbotSmallModel"),vr=l(),ze=n("div"),f(_o.$$.fragment),ul=l(),go=n("p"),ml=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=n("a"),fl=r("PreTrainedModel"),_l=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl=l(),bo=n("p"),bl=r("This model is also a PyTorch "),ko=n("a"),kl=r("torch.nn.Module"),vl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl=l(),ge=n("div"),f(vo.$$.fragment),Tl=l(),bt=n("p"),wl=r("The "),Pn=n("a"),Sl=r("BlenderbotSmallModel"),Bl=r(" forward method, overrides the "),Sa=n("code"),xl=r("__call__"),zl=r(" special method."),ql=l(),f(Pt.$$.fragment),Fl=l(),Ba=n("p"),$l=r("Example:"),Ml=l(),f(yo.$$.fragment),yr=l(),kt=n("h2"),Ot=n("a"),xa=n("span"),f(To.$$.fragment),El=l(),za=n("span"),Cl=r("BlenderbotSmallForConditionalGeneration"),Tr=l(),qe=n("div"),f(wo.$$.fragment),jl=l(),So=n("p"),Pl=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=n("a"),Ol=r("PreTrainedModel"),Ll=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=l(),Bo=n("p"),Il=r("This model is also a PyTorch "),xo=n("a"),Al=r("torch.nn.Module"),Dl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gl=l(),be=n("div"),f(zo.$$.fragment),Ul=l(),vt=n("p"),Wl=r("The "),Ln=n("a"),Rl=r("BlenderbotSmallForConditionalGeneration"),Hl=r(" forward method, overrides the "),qa=n("code"),Kl=r("__call__"),Ql=r(" special method."),Vl=l(),f(Lt.$$.fragment),Jl=l(),Fa=n("p"),Xl=r("Conversation example:"),Yl=l(),f(qo.$$.fragment),wr=l(),yt=n("h2"),Nt=n("a"),$a=n("span"),f(Fo.$$.fragment),Zl=l(),Ma=n("span"),ei=r("BlenderbotSmallForCausalLM"),Sr=l(),Tt=n("div"),f($o.$$.fragment),ti=l(),Qe=n("div"),f(Mo.$$.fragment),oi=l(),Ea=n("p"),ni=r("Example:"),ai=l(),f(Eo.$$.fragment),Br=l(),wt=n("h2"),It=n("a"),Ca=n("span"),f(Co.$$.fragment),si=l(),ja=n("span"),ri=r("TFBlenderbotSmallModel"),xr=l(),he=n("div"),f(jo.$$.fragment),di=l(),Po=n("p"),li=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),ii=r("TFPreTrainedModel"),ci=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi=l(),Oo=n("p"),hi=r("This model is also a "),Lo=n("a"),ui=r("tf.keras.Model"),mi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi=l(),f(At.$$.fragment),_i=l(),ke=n("div"),f(No.$$.fragment),gi=l(),St=n("p"),bi=r("The "),In=n("a"),ki=r("TFBlenderbotSmallModel"),vi=r(" forward method, overrides the "),Pa=n("code"),yi=r("__call__"),Ti=r(" special method."),wi=l(),f(Dt.$$.fragment),Si=l(),Oa=n("p"),Bi=r("Example:"),xi=l(),f(Io.$$.fragment),zr=l(),Bt=n("h2"),Gt=n("a"),La=n("span"),f(Ao.$$.fragment),zi=l(),Na=n("span"),qi=r("TFBlenderbotSmallForConditionalGeneration"),qr=l(),ue=n("div"),f(Do.$$.fragment),Fi=l(),Go=n("p"),$i=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Mi=r("TFPreTrainedModel"),Ei=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci=l(),Uo=n("p"),ji=r("This model is also a "),Wo=n("a"),Pi=r("tf.keras.Model"),Oi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Li=l(),f(Ut.$$.fragment),Ni=l(),P=n("div"),f(Ro.$$.fragment),Ii=l(),xt=n("p"),Ai=r("The "),Dn=n("a"),Di=r("TFBlenderbotSmallForConditionalGeneration"),Gi=r(" forward method, overrides the "),Ia=n("code"),Ui=r("__call__"),Wi=r(" special method."),Ri=l(),f(Wt.$$.fragment),Hi=l(),Aa=n("p"),Ki=r("Conversation example::"),Qi=l(),Da=n("blockquote"),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("p"),Vi=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ji=l(),Ra=n("blockquote"),Ha=n("blockquote"),Ka=n("blockquote"),Qa=n("p"),Xi=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Yi=l(),Va=n("blockquote"),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("p"),Zi=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ec=l(),Za=n("blockquote"),es=n("blockquote"),ts=n("blockquote"),Ho=n("p"),tc=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),os=n("s"),oc=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),nc=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),ac=l(),ns=n("blockquote"),as=n("blockquote"),ss=n("blockquote"),rs=n("p"),sc=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Fr=l(),zt=n("h2"),Rt=n("a"),ds=n("span"),f(Ko.$$.fragment),rc=l(),ls=n("span"),dc=r("FlaxBlenderbotSmallModel"),$r=l(),N=n("div"),f(Qo.$$.fragment),lc=l(),Vo=n("p"),ic=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),cc=r("FlaxPreTrainedModel"),pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc=l(),Jo=n("p"),uc=r(`This model is also a Flax Linen
`),Xo=n("a"),mc=r("flax.nn.Module"),fc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_c=l(),is=n("p"),gc=r("Finally, this model supports inherent JAX features such as:"),bc=l(),Ue=n("ul"),cs=n("li"),Yo=n("a"),kc=r("Just-In-Time (JIT) compilation"),vc=l(),ps=n("li"),Zo=n("a"),yc=r("Automatic Differentiation"),Tc=l(),hs=n("li"),en=n("a"),wc=r("Vectorization"),Sc=l(),us=n("li"),tn=n("a"),Bc=r("Parallelization"),xc=l(),Ve=n("div"),f(on.$$.fragment),zc=l(),ms=n("p"),qc=r("Example:"),Fc=l(),f(nn.$$.fragment),$c=l(),Je=n("div"),f(an.$$.fragment),Mc=l(),fs=n("p"),Ec=r("Example:"),Cc=l(),f(sn.$$.fragment),jc=l(),Xe=n("div"),f(rn.$$.fragment),Pc=l(),_s=n("p"),Oc=r("Example:"),Lc=l(),f(dn.$$.fragment),Mr=l(),qt=n("h2"),Ht=n("a"),gs=n("span"),f(ln.$$.fragment),Nc=l(),bs=n("span"),Ic=r("FlaxBlenderbotForConditionalGeneration"),Er=l(),I=n("div"),f(cn.$$.fragment),Ac=l(),pn=n("p"),Dc=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=n("a"),Gc=r("FlaxPreTrainedModel"),Uc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=l(),hn=n("p"),Rc=r(`This model is also a Flax Linen
`),un=n("a"),Hc=r("flax.nn.Module"),Kc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qc=l(),ks=n("p"),Vc=r("Finally, this model supports inherent JAX features such as:"),Jc=l(),We=n("ul"),vs=n("li"),mn=n("a"),Xc=r("Just-In-Time (JIT) compilation"),Yc=l(),ys=n("li"),fn=n("a"),Zc=r("Automatic Differentiation"),ep=l(),Ts=n("li"),_n=n("a"),tp=r("Vectorization"),op=l(),ws=n("li"),gn=n("a"),np=r("Parallelization"),ap=l(),$=n("div"),f(bn.$$.fragment),sp=l(),Ft=n("p"),rp=r("The "),Ss=n("code"),dp=r("FlaxBlenderbotSmallPreTrainedModel"),lp=r("forward method, overrides the "),Bs=n("code"),ip=r("__call__"),cp=r(" special method."),pp=l(),f(Kt.$$.fragment),hp=l(),xs=n("p"),up=r("Summarization example:"),mp=l(),zs=n("blockquote"),qs=n("blockquote"),Fs=n("blockquote"),$s=n("p"),fp=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),_p=l(),Ms=n("blockquote"),Es=n("blockquote"),Cs=n("blockquote"),js=n("p"),gp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),bp=l(),Ps=n("blockquote"),Os=n("blockquote"),Ls=n("blockquote"),Ns=n("p"),kp=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),vp=l(),Is=n("blockquote"),As=n("blockquote"),kn=n("blockquote"),Qt=n("h1"),Vt=n("a"),Ds=n("span"),f(vn.$$.fragment),yp=l(),Gs=n("span"),Tp=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),wp=l(),Us=n("p"),Sp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Bp=l(),Ws=n("p"),xp=r("Mask filling example:"),zp=l(),Rs=n("blockquote"),Hs=n("blockquote"),Ks=n("blockquote"),Qs=n("p"),qp=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Fp=l(),Vs=n("blockquote"),Js=n("blockquote"),Xs=n("blockquote"),Ys=n("p"),$p=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Mp=l(),Zs=n("blockquote"),er=n("blockquote"),tr=n("blockquote"),or=n("p"),Ep=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Cp=l(),nr=n("blockquote"),ar=n("blockquote"),sr=n("blockquote"),rr=n("p"),jp=r("tokenizer.decode(predictions).split()"),Pp=l(),Ye=n("div"),f(yn.$$.fragment),Op=l(),dr=n("p"),Lp=r("Example:"),Np=l(),f(Tn.$$.fragment),Ip=l(),Ze=n("div"),f(wn.$$.fragment),Ap=l(),lr=n("p"),Dp=r("Example:"),Gp=l(),f(Sn.$$.fragment),this.h()},l(o){const h=Vm('[data-svelte="svelte-1phssyn"]',document.head);u=a(h,"META",{name:!0,content:!0}),h.forEach(t),z=i(o),y=a(o,"H1",{class:!0});var Bn=s(y);T=a(Bn,"A",{id:!0,class:!0,href:!0});var ir=s(T);B=a(ir,"SPAN",{});var cr=s(B);_(S.$$.fragment,cr),cr.forEach(t),ir.forEach(t),w=i(Bn),q=a(Bn,"SPAN",{});var pr=s(q);Ce=d(pr,"Blenderbot Small"),pr.forEach(t),Bn.forEach(t),me=i(o),x=a(o,"P",{});var ve=s(x);je=d(ve,"Note that "),U=a(ve,"A",{href:!0});var hr=s(U);Pe=d(hr,"BlenderbotSmallModel"),hr.forEach(t),Oe=d(ve,` and
`),W=a(ve,"A",{href:!0});var ur=s(W);Le=d(ur,"BlenderbotSmallForConditionalGeneration"),ur.forEach(t),Ne=d(ve,` are only used in combination with the checkpoint
`),Q=a(ve,"A",{href:!0,rel:!0});var Wp=s(Q);V=d(Wp,"facebook/blenderbot-90M"),Wp.forEach(t),Ie=d(ve,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(ve,"A",{href:!0});var Rp=s(Z);C=d(Rp,"BlenderbotModel"),Rp.forEach(t),O=d(ve,` and
`),fe=a(ve,"A",{href:!0});var Hp=s(fe);ae=d(Hp,"BlenderbotForConditionalGeneration"),Hp.forEach(t),ve.forEach(t),$e=i(o),J=a(o,"H2",{class:!0});var jr=s(J);A=a(jr,"A",{id:!0,class:!0,href:!0});var Kp=s(A);Te=a(Kp,"SPAN",{});var Qp=s(Te);_(se.$$.fragment,Qp),Qp.forEach(t),Kp.forEach(t),L=i(jr),we=a(jr,"SPAN",{});var Vp=s(we);re=d(Vp,"Overview"),Vp.forEach(t),jr.forEach(t),Me=i(o),ee=a(o,"P",{});var Pr=s(ee);de=d(Pr,"The Blender chatbot model was proposed in "),le=a(Pr,"A",{href:!0,rel:!0});var Jp=s(le);Ae=d(Jp,"Recipes for building an open-domain chatbot"),Jp.forEach(t),X=d(Pr,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Pr.forEach(t),Ee=i(o),R=a(o,"P",{});var Xp=s(R);De=d(Xp,"The abstract of the paper is the following:"),Xp.forEach(t),m=i(o),F=a(o,"P",{});var Yp=s(F);ie=a(Yp,"EM",{});var Zp=s(ie);dt=d(Zp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Zp.forEach(t),Yp.forEach(t),Re=i(o),j=a(o,"P",{});var Wn=s(j);lt=d(Wn,"This model was contributed by "),Se=a(Wn,"A",{href:!0,rel:!0});var eh=s(Se);it=d(eh,"patrickvonplaten"),eh.forEach(t),Y=d(Wn,`. The authors\u2019 code can be
found `),D=a(Wn,"A",{href:!0,rel:!0});var th=s(D);ct=d(th,"here"),th.forEach(t),pt=d(Wn," ."),Wn.forEach(t),te=i(o),ce=a(o,"H2",{class:!0});var Or=s(ce);_e=a(Or,"A",{id:!0,class:!0,href:!0});var oh=s(_e);Be=a(oh,"SPAN",{});var nh=s(Be);_(xe.$$.fragment,nh),nh.forEach(t),oh.forEach(t),hd=i(Or),la=a(Or,"SPAN",{});var ah=s(la);ud=d(ah,"BlenderbotSmallConfig"),ah.forEach(t),Or.forEach(t),mr=i(o),pe=a(o,"DIV",{class:!0});var et=s(pe);_(eo.$$.fragment,et),md=i(et),ht=a(et,"P",{});var Rn=s(ht);fd=d(Rn,"This is the configuration class to store the configuration of a "),zn=a(Rn,"A",{href:!0});var sh=s(zn);_d=d(sh,"BlenderbotSmallModel"),sh.forEach(t),gd=d(Rn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),to=a(Rn,"A",{href:!0,rel:!0});var rh=s(to);bd=d(rh,"facebook/blenderbot_small-90M"),rh.forEach(t),kd=d(Rn," architecture."),Rn.forEach(t),vd=i(et),ut=a(et,"P",{});var Hn=s(ut);yd=d(Hn,"Configuration objects inherit from "),qn=a(Hn,"A",{href:!0});var dh=s(qn);Td=d(dh,"PretrainedConfig"),dh.forEach(t),wd=d(Hn,` and can be used to control the model outputs. Read the
documentation from `),Fn=a(Hn,"A",{href:!0});var lh=s(Fn);Sd=d(lh,"PretrainedConfig"),lh.forEach(t),Bd=d(Hn," for more information."),Hn.forEach(t),xd=i(et),ia=a(et,"P",{});var ih=s(ia);zd=d(ih,"Example:"),ih.forEach(t),qd=i(et),_(oo.$$.fragment,et),et.forEach(t),fr=i(o),mt=a(o,"H2",{class:!0});var Lr=s(mt);$t=a(Lr,"A",{id:!0,class:!0,href:!0});var ch=s($t);ca=a(ch,"SPAN",{});var ph=s(ca);_(no.$$.fragment,ph),ph.forEach(t),ch.forEach(t),Fd=i(Lr),pa=a(Lr,"SPAN",{});var hh=s(pa);$d=d(hh,"BlenderbotSmallTokenizer"),hh.forEach(t),Lr.forEach(t),_r=i(o),G=a(o,"DIV",{class:!0});var ye=s(G);_(ao.$$.fragment,ye),Md=i(ye),ha=a(ye,"P",{});var uh=s(ha);Ed=d(uh,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),uh.forEach(t),Cd=i(ye),so=a(ye,"P",{});var Nr=s(so);jd=d(Nr,"This tokenizer inherits from "),$n=a(Nr,"A",{href:!0});var mh=s($n);Pd=d(mh,"PreTrainedTokenizer"),mh.forEach(t),Od=d(Nr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Nr.forEach(t),Ld=i(ye),He=a(ye,"DIV",{class:!0});var Kn=s(He);_(ro.$$.fragment,Kn),Nd=i(Kn),ua=a(Kn,"P",{});var fh=s(ua);Id=d(fh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),fh.forEach(t),Ad=i(Kn),ma=a(Kn,"P",{});var _h=s(ma);Dd=d(_h,"This implementation does not add special tokens and this method should be overridden in a subclass."),_h.forEach(t),Kn.forEach(t),Gd=i(ye),Mt=a(ye,"DIV",{class:!0});var Ir=s(Mt);_(lo.$$.fragment,Ir),Ud=i(Ir),ft=a(Ir,"P",{});var Qn=s(ft);Wd=d(Qn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=a(Qn,"CODE",{});var gh=s(fa);Rd=d(gh,"prepare_for_model"),gh.forEach(t),Hd=d(Qn," or "),_a=a(Qn,"CODE",{});var bh=s(_a);Kd=d(bh,"encode_plus"),bh.forEach(t),Qd=d(Qn," methods."),Qn.forEach(t),Ir.forEach(t),Vd=i(ye),Ke=a(ye,"DIV",{class:!0});var Vn=s(Ke);_(io.$$.fragment,Vn),Jd=i(Vn),Mn=a(Vn,"P",{});var Up=s(Mn);Xd=d(Up,"Create the token type IDs corresponding to the sequences passed. "),En=a(Up,"A",{href:!0});var kh=s(En);Yd=d(kh,`What are token type
IDs?`),kh.forEach(t),Up.forEach(t),Zd=i(Vn),ga=a(Vn,"P",{});var vh=s(ga);el=d(vh,"Should be overridden in a subclass if the model has a special way of building those."),vh.forEach(t),Vn.forEach(t),tl=i(ye),Cn=a(ye,"DIV",{class:!0});var yh=s(Cn);_(co.$$.fragment,yh),yh.forEach(t),ye.forEach(t),gr=i(o),_t=a(o,"H2",{class:!0});var Ar=s(_t);Et=a(Ar,"A",{id:!0,class:!0,href:!0});var Th=s(Et);ba=a(Th,"SPAN",{});var wh=s(ba);_(po.$$.fragment,wh),wh.forEach(t),Th.forEach(t),ol=i(Ar),ka=a(Ar,"SPAN",{});var Sh=s(ka);nl=d(Sh,"BlenderbotSmallTokenizerFast"),Sh.forEach(t),Ar.forEach(t),br=i(o),Ge=a(o,"DIV",{class:!0});var Jn=s(Ge);_(ho.$$.fragment,Jn),al=i(Jn),uo=a(Jn,"P",{});var Dr=s(uo);sl=d(Dr,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=a(Dr,"EM",{});var Bh=s(va);rl=d(Bh,"tokenizers"),Bh.forEach(t),dl=d(Dr," library)."),Dr.forEach(t),ll=i(Jn),Ct=a(Jn,"DIV",{class:!0});var Gr=s(Ct);_(mo.$$.fragment,Gr),il=i(Gr),ya=a(Gr,"P",{});var xh=s(ya);cl=d(xh,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),xh.forEach(t),Gr.forEach(t),Jn.forEach(t),kr=i(o),gt=a(o,"H2",{class:!0});var Ur=s(gt);jt=a(Ur,"A",{id:!0,class:!0,href:!0});var zh=s(jt);Ta=a(zh,"SPAN",{});var qh=s(Ta);_(fo.$$.fragment,qh),qh.forEach(t),zh.forEach(t),pl=i(Ur),wa=a(Ur,"SPAN",{});var Fh=s(wa);hl=d(Fh,"BlenderbotSmallModel"),Fh.forEach(t),Ur.forEach(t),vr=i(o),ze=a(o,"DIV",{class:!0});var Jt=s(ze);_(_o.$$.fragment,Jt),ul=i(Jt),go=a(Jt,"P",{});var Wr=s(go);ml=d(Wr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=a(Wr,"A",{href:!0});var $h=s(jn);fl=d($h,"PreTrainedModel"),$h.forEach(t),_l=d(Wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr.forEach(t),gl=i(Jt),bo=a(Jt,"P",{});var Rr=s(bo);bl=d(Rr,"This model is also a PyTorch "),ko=a(Rr,"A",{href:!0,rel:!0});var Mh=s(ko);kl=d(Mh,"torch.nn.Module"),Mh.forEach(t),vl=d(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),yl=i(Jt),ge=a(Jt,"DIV",{class:!0});var tt=s(ge);_(vo.$$.fragment,tt),Tl=i(tt),bt=a(tt,"P",{});var Xn=s(bt);wl=d(Xn,"The "),Pn=a(Xn,"A",{href:!0});var Eh=s(Pn);Sl=d(Eh,"BlenderbotSmallModel"),Eh.forEach(t),Bl=d(Xn," forward method, overrides the "),Sa=a(Xn,"CODE",{});var Ch=s(Sa);xl=d(Ch,"__call__"),Ch.forEach(t),zl=d(Xn," special method."),Xn.forEach(t),ql=i(tt),_(Pt.$$.fragment,tt),Fl=i(tt),Ba=a(tt,"P",{});var jh=s(Ba);$l=d(jh,"Example:"),jh.forEach(t),Ml=i(tt),_(yo.$$.fragment,tt),tt.forEach(t),Jt.forEach(t),yr=i(o),kt=a(o,"H2",{class:!0});var Hr=s(kt);Ot=a(Hr,"A",{id:!0,class:!0,href:!0});var Ph=s(Ot);xa=a(Ph,"SPAN",{});var Oh=s(xa);_(To.$$.fragment,Oh),Oh.forEach(t),Ph.forEach(t),El=i(Hr),za=a(Hr,"SPAN",{});var Lh=s(za);Cl=d(Lh,"BlenderbotSmallForConditionalGeneration"),Lh.forEach(t),Hr.forEach(t),Tr=i(o),qe=a(o,"DIV",{class:!0});var Xt=s(qe);_(wo.$$.fragment,Xt),jl=i(Xt),So=a(Xt,"P",{});var Kr=s(So);Pl=d(Kr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=a(Kr,"A",{href:!0});var Nh=s(On);Ol=d(Nh,"PreTrainedModel"),Nh.forEach(t),Ll=d(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),Nl=i(Xt),Bo=a(Xt,"P",{});var Qr=s(Bo);Il=d(Qr,"This model is also a PyTorch "),xo=a(Qr,"A",{href:!0,rel:!0});var Ih=s(xo);Al=d(Ih,"torch.nn.Module"),Ih.forEach(t),Dl=d(Qr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qr.forEach(t),Gl=i(Xt),be=a(Xt,"DIV",{class:!0});var ot=s(be);_(zo.$$.fragment,ot),Ul=i(ot),vt=a(ot,"P",{});var Yn=s(vt);Wl=d(Yn,"The "),Ln=a(Yn,"A",{href:!0});var Ah=s(Ln);Rl=d(Ah,"BlenderbotSmallForConditionalGeneration"),Ah.forEach(t),Hl=d(Yn," forward method, overrides the "),qa=a(Yn,"CODE",{});var Dh=s(qa);Kl=d(Dh,"__call__"),Dh.forEach(t),Ql=d(Yn," special method."),Yn.forEach(t),Vl=i(ot),_(Lt.$$.fragment,ot),Jl=i(ot),Fa=a(ot,"P",{});var Gh=s(Fa);Xl=d(Gh,"Conversation example:"),Gh.forEach(t),Yl=i(ot),_(qo.$$.fragment,ot),ot.forEach(t),Xt.forEach(t),wr=i(o),yt=a(o,"H2",{class:!0});var Vr=s(yt);Nt=a(Vr,"A",{id:!0,class:!0,href:!0});var Uh=s(Nt);$a=a(Uh,"SPAN",{});var Wh=s($a);_(Fo.$$.fragment,Wh),Wh.forEach(t),Uh.forEach(t),Zl=i(Vr),Ma=a(Vr,"SPAN",{});var Rh=s(Ma);ei=d(Rh,"BlenderbotSmallForCausalLM"),Rh.forEach(t),Vr.forEach(t),Sr=i(o),Tt=a(o,"DIV",{class:!0});var Jr=s(Tt);_($o.$$.fragment,Jr),ti=i(Jr),Qe=a(Jr,"DIV",{class:!0});var Zn=s(Qe);_(Mo.$$.fragment,Zn),oi=i(Zn),Ea=a(Zn,"P",{});var Hh=s(Ea);ni=d(Hh,"Example:"),Hh.forEach(t),ai=i(Zn),_(Eo.$$.fragment,Zn),Zn.forEach(t),Jr.forEach(t),Br=i(o),wt=a(o,"H2",{class:!0});var Xr=s(wt);It=a(Xr,"A",{id:!0,class:!0,href:!0});var Kh=s(It);Ca=a(Kh,"SPAN",{});var Qh=s(Ca);_(Co.$$.fragment,Qh),Qh.forEach(t),Kh.forEach(t),si=i(Xr),ja=a(Xr,"SPAN",{});var Vh=s(ja);ri=d(Vh,"TFBlenderbotSmallModel"),Vh.forEach(t),Xr.forEach(t),xr=i(o),he=a(o,"DIV",{class:!0});var nt=s(he);_(jo.$$.fragment,nt),di=i(nt),Po=a(nt,"P",{});var Yr=s(Po);li=d(Yr,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Yr,"A",{href:!0});var Jh=s(Nn);ii=d(Jh,"TFPreTrainedModel"),Jh.forEach(t),ci=d(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(t),pi=i(nt),Oo=a(nt,"P",{});var Zr=s(Oo);hi=d(Zr,"This model is also a "),Lo=a(Zr,"A",{href:!0,rel:!0});var Xh=s(Lo);ui=d(Xh,"tf.keras.Model"),Xh.forEach(t),mi=d(Zr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zr.forEach(t),fi=i(nt),_(At.$$.fragment,nt),_i=i(nt),ke=a(nt,"DIV",{class:!0});var at=s(ke);_(No.$$.fragment,at),gi=i(at),St=a(at,"P",{});var ea=s(St);bi=d(ea,"The "),In=a(ea,"A",{href:!0});var Yh=s(In);ki=d(Yh,"TFBlenderbotSmallModel"),Yh.forEach(t),vi=d(ea," forward method, overrides the "),Pa=a(ea,"CODE",{});var Zh=s(Pa);yi=d(Zh,"__call__"),Zh.forEach(t),Ti=d(ea," special method."),ea.forEach(t),wi=i(at),_(Dt.$$.fragment,at),Si=i(at),Oa=a(at,"P",{});var eu=s(Oa);Bi=d(eu,"Example:"),eu.forEach(t),xi=i(at),_(Io.$$.fragment,at),at.forEach(t),nt.forEach(t),zr=i(o),Bt=a(o,"H2",{class:!0});var ed=s(Bt);Gt=a(ed,"A",{id:!0,class:!0,href:!0});var tu=s(Gt);La=a(tu,"SPAN",{});var ou=s(La);_(Ao.$$.fragment,ou),ou.forEach(t),tu.forEach(t),zi=i(ed),Na=a(ed,"SPAN",{});var nu=s(Na);qi=d(nu,"TFBlenderbotSmallForConditionalGeneration"),nu.forEach(t),ed.forEach(t),qr=i(o),ue=a(o,"DIV",{class:!0});var st=s(ue);_(Do.$$.fragment,st),Fi=i(st),Go=a(st,"P",{});var td=s(Go);$i=d(td,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(td,"A",{href:!0});var au=s(An);Mi=d(au,"TFPreTrainedModel"),au.forEach(t),Ei=d(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),Ci=i(st),Uo=a(st,"P",{});var od=s(Uo);ji=d(od,"This model is also a "),Wo=a(od,"A",{href:!0,rel:!0});var su=s(Wo);Pi=d(su,"tf.keras.Model"),su.forEach(t),Oi=d(od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od.forEach(t),Li=i(st),_(Ut.$$.fragment,st),Ni=i(st),P=a(st,"DIV",{class:!0});var H=s(P);_(Ro.$$.fragment,H),Ii=i(H),xt=a(H,"P",{});var ta=s(xt);Ai=d(ta,"The "),Dn=a(ta,"A",{href:!0});var ru=s(Dn);Di=d(ru,"TFBlenderbotSmallForConditionalGeneration"),ru.forEach(t),Gi=d(ta," forward method, overrides the "),Ia=a(ta,"CODE",{});var du=s(Ia);Ui=d(du,"__call__"),du.forEach(t),Wi=d(ta," special method."),ta.forEach(t),Ri=i(H),_(Wt.$$.fragment,H),Hi=i(H),Aa=a(H,"P",{});var lu=s(Aa);Ki=d(lu,"Conversation example::"),lu.forEach(t),Qi=i(H),Da=a(H,"BLOCKQUOTE",{});var iu=s(Da);Ga=a(iu,"BLOCKQUOTE",{});var cu=s(Ga);Ua=a(cu,"BLOCKQUOTE",{});var pu=s(Ua);Wa=a(pu,"P",{});var hu=s(Wa);Vi=d(hu,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),hu.forEach(t),pu.forEach(t),cu.forEach(t),iu.forEach(t),Ji=i(H),Ra=a(H,"BLOCKQUOTE",{});var uu=s(Ra);Ha=a(uu,"BLOCKQUOTE",{});var mu=s(Ha);Ka=a(mu,"BLOCKQUOTE",{});var fu=s(Ka);Qa=a(fu,"P",{});var _u=s(Qa);Xi=d(_u,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),_u.forEach(t),fu.forEach(t),mu.forEach(t),uu.forEach(t),Yi=i(H),Va=a(H,"BLOCKQUOTE",{});var gu=s(Va);Ja=a(gu,"BLOCKQUOTE",{});var bu=s(Ja);Xa=a(bu,"BLOCKQUOTE",{});var ku=s(Xa);Ya=a(ku,"P",{});var vu=s(Ya);Zi=d(vu,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),vu.forEach(t),ku.forEach(t),bu.forEach(t),gu.forEach(t),ec=i(H),Za=a(H,"BLOCKQUOTE",{});var yu=s(Za);es=a(yu,"BLOCKQUOTE",{});var Tu=s(es);ts=a(Tu,"BLOCKQUOTE",{});var wu=s(ts);Ho=a(wu,"P",{});var nd=s(Ho);tc=d(nd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),os=a(nd,"S",{});var Su=s(os);oc=d(Su,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Su.forEach(t),nc=d(nd,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),nd.forEach(t),wu.forEach(t),Tu.forEach(t),yu.forEach(t),ac=i(H),ns=a(H,"BLOCKQUOTE",{});var Bu=s(ns);as=a(Bu,"BLOCKQUOTE",{});var xu=s(as);ss=a(xu,"BLOCKQUOTE",{});var zu=s(ss);rs=a(zu,"P",{});var qu=s(rs);sc=d(qu,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),qu.forEach(t),zu.forEach(t),xu.forEach(t),Bu.forEach(t),H.forEach(t),st.forEach(t),Fr=i(o),zt=a(o,"H2",{class:!0});var ad=s(zt);Rt=a(ad,"A",{id:!0,class:!0,href:!0});var Fu=s(Rt);ds=a(Fu,"SPAN",{});var $u=s(ds);_(Ko.$$.fragment,$u),$u.forEach(t),Fu.forEach(t),rc=i(ad),ls=a(ad,"SPAN",{});var Mu=s(ls);dc=d(Mu,"FlaxBlenderbotSmallModel"),Mu.forEach(t),ad.forEach(t),$r=i(o),N=a(o,"DIV",{class:!0});var oe=s(N);_(Qo.$$.fragment,oe),lc=i(oe),Vo=a(oe,"P",{});var sd=s(Vo);ic=d(sd,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(sd,"A",{href:!0});var Eu=s(Gn);cc=d(Eu,"FlaxPreTrainedModel"),Eu.forEach(t),pc=d(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),hc=i(oe),Jo=a(oe,"P",{});var rd=s(Jo);uc=d(rd,`This model is also a Flax Linen
`),Xo=a(rd,"A",{href:!0,rel:!0});var Cu=s(Xo);mc=d(Cu,"flax.nn.Module"),Cu.forEach(t),fc=d(rd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rd.forEach(t),_c=i(oe),is=a(oe,"P",{});var ju=s(is);gc=d(ju,"Finally, this model supports inherent JAX features such as:"),ju.forEach(t),bc=i(oe),Ue=a(oe,"UL",{});var Yt=s(Ue);cs=a(Yt,"LI",{});var Pu=s(cs);Yo=a(Pu,"A",{href:!0,rel:!0});var Ou=s(Yo);kc=d(Ou,"Just-In-Time (JIT) compilation"),Ou.forEach(t),Pu.forEach(t),vc=i(Yt),ps=a(Yt,"LI",{});var Lu=s(ps);Zo=a(Lu,"A",{href:!0,rel:!0});var Nu=s(Zo);yc=d(Nu,"Automatic Differentiation"),Nu.forEach(t),Lu.forEach(t),Tc=i(Yt),hs=a(Yt,"LI",{});var Iu=s(hs);en=a(Iu,"A",{href:!0,rel:!0});var Au=s(en);wc=d(Au,"Vectorization"),Au.forEach(t),Iu.forEach(t),Sc=i(Yt),us=a(Yt,"LI",{});var Du=s(us);tn=a(Du,"A",{href:!0,rel:!0});var Gu=s(tn);Bc=d(Gu,"Parallelization"),Gu.forEach(t),Du.forEach(t),Yt.forEach(t),xc=i(oe),Ve=a(oe,"DIV",{class:!0});var oa=s(Ve);_(on.$$.fragment,oa),zc=i(oa),ms=a(oa,"P",{});var Uu=s(ms);qc=d(Uu,"Example:"),Uu.forEach(t),Fc=i(oa),_(nn.$$.fragment,oa),oa.forEach(t),$c=i(oe),Je=a(oe,"DIV",{class:!0});var na=s(Je);_(an.$$.fragment,na),Mc=i(na),fs=a(na,"P",{});var Wu=s(fs);Ec=d(Wu,"Example:"),Wu.forEach(t),Cc=i(na),_(sn.$$.fragment,na),na.forEach(t),jc=i(oe),Xe=a(oe,"DIV",{class:!0});var aa=s(Xe);_(rn.$$.fragment,aa),Pc=i(aa),_s=a(aa,"P",{});var Ru=s(_s);Oc=d(Ru,"Example:"),Ru.forEach(t),Lc=i(aa),_(dn.$$.fragment,aa),aa.forEach(t),oe.forEach(t),Mr=i(o),qt=a(o,"H2",{class:!0});var dd=s(qt);Ht=a(dd,"A",{id:!0,class:!0,href:!0});var Hu=s(Ht);gs=a(Hu,"SPAN",{});var Ku=s(gs);_(ln.$$.fragment,Ku),Ku.forEach(t),Hu.forEach(t),Nc=i(dd),bs=a(dd,"SPAN",{});var Qu=s(bs);Ic=d(Qu,"FlaxBlenderbotForConditionalGeneration"),Qu.forEach(t),dd.forEach(t),Er=i(o),I=a(o,"DIV",{class:!0});var ne=s(I);_(cn.$$.fragment,ne),Ac=i(ne),pn=a(ne,"P",{});var ld=s(pn);Dc=d(ld,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=a(ld,"A",{href:!0});var Vu=s(Un);Gc=d(Vu,"FlaxPreTrainedModel"),Vu.forEach(t),Uc=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),Wc=i(ne),hn=a(ne,"P",{});var id=s(hn);Rc=d(id,`This model is also a Flax Linen
`),un=a(id,"A",{href:!0,rel:!0});var Ju=s(un);Hc=d(Ju,"flax.nn.Module"),Ju.forEach(t),Kc=d(id,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),id.forEach(t),Qc=i(ne),ks=a(ne,"P",{});var Xu=s(ks);Vc=d(Xu,"Finally, this model supports inherent JAX features such as:"),Xu.forEach(t),Jc=i(ne),We=a(ne,"UL",{});var Zt=s(We);vs=a(Zt,"LI",{});var Yu=s(vs);mn=a(Yu,"A",{href:!0,rel:!0});var Zu=s(mn);Xc=d(Zu,"Just-In-Time (JIT) compilation"),Zu.forEach(t),Yu.forEach(t),Yc=i(Zt),ys=a(Zt,"LI",{});var em=s(ys);fn=a(em,"A",{href:!0,rel:!0});var tm=s(fn);Zc=d(tm,"Automatic Differentiation"),tm.forEach(t),em.forEach(t),ep=i(Zt),Ts=a(Zt,"LI",{});var om=s(Ts);_n=a(om,"A",{href:!0,rel:!0});var nm=s(_n);tp=d(nm,"Vectorization"),nm.forEach(t),om.forEach(t),op=i(Zt),ws=a(Zt,"LI",{});var am=s(ws);gn=a(am,"A",{href:!0,rel:!0});var sm=s(gn);np=d(sm,"Parallelization"),sm.forEach(t),am.forEach(t),Zt.forEach(t),ap=i(ne),$=a(ne,"DIV",{class:!0});var M=s($);_(bn.$$.fragment,M),sp=i(M),Ft=a(M,"P",{});var sa=s(Ft);rp=d(sa,"The "),Ss=a(sa,"CODE",{});var rm=s(Ss);dp=d(rm,"FlaxBlenderbotSmallPreTrainedModel"),rm.forEach(t),lp=d(sa,"forward method, overrides the "),Bs=a(sa,"CODE",{});var dm=s(Bs);ip=d(dm,"__call__"),dm.forEach(t),cp=d(sa," special method."),sa.forEach(t),pp=i(M),_(Kt.$$.fragment,M),hp=i(M),xs=a(M,"P",{});var lm=s(xs);up=d(lm,"Summarization example:"),lm.forEach(t),mp=i(M),zs=a(M,"BLOCKQUOTE",{});var im=s(zs);qs=a(im,"BLOCKQUOTE",{});var cm=s(qs);Fs=a(cm,"BLOCKQUOTE",{});var pm=s(Fs);$s=a(pm,"P",{});var hm=s($s);fp=d(hm,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),hm.forEach(t),pm.forEach(t),cm.forEach(t),im.forEach(t),_p=i(M),Ms=a(M,"BLOCKQUOTE",{});var um=s(Ms);Es=a(um,"BLOCKQUOTE",{});var mm=s(Es);Cs=a(mm,"BLOCKQUOTE",{});var fm=s(Cs);js=a(fm,"P",{});var _m=s(js);gp=d(_m,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),_m.forEach(t),fm.forEach(t),mm.forEach(t),um.forEach(t),bp=i(M),Ps=a(M,"BLOCKQUOTE",{});var gm=s(Ps);Os=a(gm,"BLOCKQUOTE",{});var bm=s(Os);Ls=a(bm,"BLOCKQUOTE",{});var km=s(Ls);Ns=a(km,"P",{});var vm=s(Ns);kp=d(vm,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),vm.forEach(t),km.forEach(t),bm.forEach(t),gm.forEach(t),vp=i(M),Is=a(M,"BLOCKQUOTE",{});var ym=s(Is);As=a(ym,"BLOCKQUOTE",{});var Tm=s(As);kn=a(Tm,"BLOCKQUOTE",{});var cd=s(kn);Qt=a(cd,"H1",{class:!0});var pd=s(Qt);Vt=a(pd,"A",{id:!0,class:!0,href:!0});var wm=s(Vt);Ds=a(wm,"SPAN",{});var Sm=s(Ds);_(vn.$$.fragment,Sm),Sm.forEach(t),wm.forEach(t),yp=i(pd),Gs=a(pd,"SPAN",{});var Bm=s(Gs);Tp=d(Bm,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Bm.forEach(t),pd.forEach(t),wp=i(cd),Us=a(cd,"P",{});var xm=s(Us);Sp=d(xm,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),xm.forEach(t),cd.forEach(t),Tm.forEach(t),ym.forEach(t),Bp=i(M),Ws=a(M,"P",{});var zm=s(Ws);xp=d(zm,"Mask filling example:"),zm.forEach(t),zp=i(M),Rs=a(M,"BLOCKQUOTE",{});var qm=s(Rs);Hs=a(qm,"BLOCKQUOTE",{});var Fm=s(Hs);Ks=a(Fm,"BLOCKQUOTE",{});var $m=s(Ks);Qs=a($m,"P",{});var Mm=s(Qs);qp=d(Mm,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Mm.forEach(t),$m.forEach(t),Fm.forEach(t),qm.forEach(t),Fp=i(M),Vs=a(M,"BLOCKQUOTE",{});var Em=s(Vs);Js=a(Em,"BLOCKQUOTE",{});var Cm=s(Js);Xs=a(Cm,"BLOCKQUOTE",{});var jm=s(Xs);Ys=a(jm,"P",{});var Pm=s(Ys);$p=d(Pm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Pm.forEach(t),jm.forEach(t),Cm.forEach(t),Em.forEach(t),Mp=i(M),Zs=a(M,"BLOCKQUOTE",{});var Om=s(Zs);er=a(Om,"BLOCKQUOTE",{});var Lm=s(er);tr=a(Lm,"BLOCKQUOTE",{});var Nm=s(tr);or=a(Nm,"P",{});var Im=s(or);Ep=d(Im,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Im.forEach(t),Nm.forEach(t),Lm.forEach(t),Om.forEach(t),Cp=i(M),nr=a(M,"BLOCKQUOTE",{});var Am=s(nr);ar=a(Am,"BLOCKQUOTE",{});var Dm=s(ar);sr=a(Dm,"BLOCKQUOTE",{});var Gm=s(sr);rr=a(Gm,"P",{});var Um=s(rr);jp=d(Um,"tokenizer.decode(predictions).split()"),Um.forEach(t),Gm.forEach(t),Dm.forEach(t),Am.forEach(t),M.forEach(t),Pp=i(ne),Ye=a(ne,"DIV",{class:!0});var ra=s(Ye);_(yn.$$.fragment,ra),Op=i(ra),dr=a(ra,"P",{});var Wm=s(dr);Lp=d(Wm,"Example:"),Wm.forEach(t),Np=i(ra),_(Tn.$$.fragment,ra),ra.forEach(t),Ip=i(ne),Ze=a(ne,"DIV",{class:!0});var da=s(Ze);_(wn.$$.fragment,da),Ap=i(da),lr=a(da,"P",{});var Rm=s(lr);Dp=d(Rm,"Example:"),Rm.forEach(t),Gp=i(da),_(Sn.$$.fragment,da),da.forEach(t),ne.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(af)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(y,"class","relative group"),c(U,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),c(Q,"rel","nofollow"),c(Z,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(fe,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(J,"class","relative group"),c(le,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(le,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(_e,"id","transformers.BlenderbotSmallConfig"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#transformers.BlenderbotSmallConfig"),c(ce,"class","relative group"),c(zn,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(to,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(to,"rel","nofollow"),c(qn,"href","/docs/transformers/pr_16107/en/main_classes/configuration#transformers.PretrainedConfig"),c(Fn,"href","/docs/transformers/pr_16107/en/main_classes/configuration#transformers.PretrainedConfig"),c(pe,"class","docstring"),c($t,"id","transformers.BlenderbotSmallTokenizer"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.BlenderbotSmallTokenizer"),c(mt,"class","relative group"),c($n,"href","/docs/transformers/pr_16107/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Mt,"class","docstring"),c(En,"href","../glossary#token-type-ids"),c(Ke,"class","docstring"),c(Cn,"class","docstring"),c(G,"class","docstring"),c(Et,"id","transformers.BlenderbotSmallTokenizerFast"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.BlenderbotSmallTokenizerFast"),c(_t,"class","relative group"),c(Ct,"class","docstring"),c(Ge,"class","docstring"),c(jt,"id","transformers.BlenderbotSmallModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.BlenderbotSmallModel"),c(gt,"class","relative group"),c(jn,"href","/docs/transformers/pr_16107/en/main_classes/model#transformers.PreTrainedModel"),c(ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ko,"rel","nofollow"),c(Pn,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(ge,"class","docstring"),c(ze,"class","docstring"),c(Ot,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(kt,"class","relative group"),c(On,"href","/docs/transformers/pr_16107/en/main_classes/model#transformers.PreTrainedModel"),c(xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xo,"rel","nofollow"),c(Ln,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(be,"class","docstring"),c(qe,"class","docstring"),c(Nt,"id","transformers.BlenderbotSmallForCausalLM"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.BlenderbotSmallForCausalLM"),c(yt,"class","relative group"),c(Qe,"class","docstring"),c(Tt,"class","docstring"),c(It,"id","transformers.TFBlenderbotSmallModel"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.TFBlenderbotSmallModel"),c(wt,"class","relative group"),c(Nn,"href","/docs/transformers/pr_16107/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Lo,"rel","nofollow"),c(In,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(he,"class","docstring"),c(Gt,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(Bt,"class","relative group"),c(An,"href","/docs/transformers/pr_16107/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(Dn,"href","/docs/transformers/pr_16107/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(P,"class","docstring"),c(ue,"class","docstring"),c(Rt,"id","transformers.FlaxBlenderbotSmallModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.FlaxBlenderbotSmallModel"),c(zt,"class","relative group"),c(Gn,"href","/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Xo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Xo,"rel","nofollow"),c(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Yo,"rel","nofollow"),c(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zo,"rel","nofollow"),c(en,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(en,"rel","nofollow"),c(tn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(tn,"rel","nofollow"),c(Ve,"class","docstring"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(N,"class","docstring"),c(Ht,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(qt,"class","relative group"),c(Un,"href","/docs/transformers/pr_16107/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(Vt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Qt,"class","relative group"),c($,"class","docstring"),c(Ye,"class","docstring"),c(Ze,"class","docstring"),c(I,"class","docstring")},m(o,h){e(document.head,u),p(o,z,h),p(o,y,h),e(y,T),e(T,B),g(S,B,null),e(y,w),e(y,q),e(q,Ce),p(o,me,h),p(o,x,h),e(x,je),e(x,U),e(U,Pe),e(x,Oe),e(x,W),e(W,Le),e(x,Ne),e(x,Q),e(Q,V),e(x,Ie),e(x,Z),e(Z,C),e(x,O),e(x,fe),e(fe,ae),p(o,$e,h),p(o,J,h),e(J,A),e(A,Te),g(se,Te,null),e(J,L),e(J,we),e(we,re),p(o,Me,h),p(o,ee,h),e(ee,de),e(ee,le),e(le,Ae),e(ee,X),p(o,Ee,h),p(o,R,h),e(R,De),p(o,m,h),p(o,F,h),e(F,ie),e(ie,dt),p(o,Re,h),p(o,j,h),e(j,lt),e(j,Se),e(Se,it),e(j,Y),e(j,D),e(D,ct),e(j,pt),p(o,te,h),p(o,ce,h),e(ce,_e),e(_e,Be),g(xe,Be,null),e(ce,hd),e(ce,la),e(la,ud),p(o,mr,h),p(o,pe,h),g(eo,pe,null),e(pe,md),e(pe,ht),e(ht,fd),e(ht,zn),e(zn,_d),e(ht,gd),e(ht,to),e(to,bd),e(ht,kd),e(pe,vd),e(pe,ut),e(ut,yd),e(ut,qn),e(qn,Td),e(ut,wd),e(ut,Fn),e(Fn,Sd),e(ut,Bd),e(pe,xd),e(pe,ia),e(ia,zd),e(pe,qd),g(oo,pe,null),p(o,fr,h),p(o,mt,h),e(mt,$t),e($t,ca),g(no,ca,null),e(mt,Fd),e(mt,pa),e(pa,$d),p(o,_r,h),p(o,G,h),g(ao,G,null),e(G,Md),e(G,ha),e(ha,Ed),e(G,Cd),e(G,so),e(so,jd),e(so,$n),e($n,Pd),e(so,Od),e(G,Ld),e(G,He),g(ro,He,null),e(He,Nd),e(He,ua),e(ua,Id),e(He,Ad),e(He,ma),e(ma,Dd),e(G,Gd),e(G,Mt),g(lo,Mt,null),e(Mt,Ud),e(Mt,ft),e(ft,Wd),e(ft,fa),e(fa,Rd),e(ft,Hd),e(ft,_a),e(_a,Kd),e(ft,Qd),e(G,Vd),e(G,Ke),g(io,Ke,null),e(Ke,Jd),e(Ke,Mn),e(Mn,Xd),e(Mn,En),e(En,Yd),e(Ke,Zd),e(Ke,ga),e(ga,el),e(G,tl),e(G,Cn),g(co,Cn,null),p(o,gr,h),p(o,_t,h),e(_t,Et),e(Et,ba),g(po,ba,null),e(_t,ol),e(_t,ka),e(ka,nl),p(o,br,h),p(o,Ge,h),g(ho,Ge,null),e(Ge,al),e(Ge,uo),e(uo,sl),e(uo,va),e(va,rl),e(uo,dl),e(Ge,ll),e(Ge,Ct),g(mo,Ct,null),e(Ct,il),e(Ct,ya),e(ya,cl),p(o,kr,h),p(o,gt,h),e(gt,jt),e(jt,Ta),g(fo,Ta,null),e(gt,pl),e(gt,wa),e(wa,hl),p(o,vr,h),p(o,ze,h),g(_o,ze,null),e(ze,ul),e(ze,go),e(go,ml),e(go,jn),e(jn,fl),e(go,_l),e(ze,gl),e(ze,bo),e(bo,bl),e(bo,ko),e(ko,kl),e(bo,vl),e(ze,yl),e(ze,ge),g(vo,ge,null),e(ge,Tl),e(ge,bt),e(bt,wl),e(bt,Pn),e(Pn,Sl),e(bt,Bl),e(bt,Sa),e(Sa,xl),e(bt,zl),e(ge,ql),g(Pt,ge,null),e(ge,Fl),e(ge,Ba),e(Ba,$l),e(ge,Ml),g(yo,ge,null),p(o,yr,h),p(o,kt,h),e(kt,Ot),e(Ot,xa),g(To,xa,null),e(kt,El),e(kt,za),e(za,Cl),p(o,Tr,h),p(o,qe,h),g(wo,qe,null),e(qe,jl),e(qe,So),e(So,Pl),e(So,On),e(On,Ol),e(So,Ll),e(qe,Nl),e(qe,Bo),e(Bo,Il),e(Bo,xo),e(xo,Al),e(Bo,Dl),e(qe,Gl),e(qe,be),g(zo,be,null),e(be,Ul),e(be,vt),e(vt,Wl),e(vt,Ln),e(Ln,Rl),e(vt,Hl),e(vt,qa),e(qa,Kl),e(vt,Ql),e(be,Vl),g(Lt,be,null),e(be,Jl),e(be,Fa),e(Fa,Xl),e(be,Yl),g(qo,be,null),p(o,wr,h),p(o,yt,h),e(yt,Nt),e(Nt,$a),g(Fo,$a,null),e(yt,Zl),e(yt,Ma),e(Ma,ei),p(o,Sr,h),p(o,Tt,h),g($o,Tt,null),e(Tt,ti),e(Tt,Qe),g(Mo,Qe,null),e(Qe,oi),e(Qe,Ea),e(Ea,ni),e(Qe,ai),g(Eo,Qe,null),p(o,Br,h),p(o,wt,h),e(wt,It),e(It,Ca),g(Co,Ca,null),e(wt,si),e(wt,ja),e(ja,ri),p(o,xr,h),p(o,he,h),g(jo,he,null),e(he,di),e(he,Po),e(Po,li),e(Po,Nn),e(Nn,ii),e(Po,ci),e(he,pi),e(he,Oo),e(Oo,hi),e(Oo,Lo),e(Lo,ui),e(Oo,mi),e(he,fi),g(At,he,null),e(he,_i),e(he,ke),g(No,ke,null),e(ke,gi),e(ke,St),e(St,bi),e(St,In),e(In,ki),e(St,vi),e(St,Pa),e(Pa,yi),e(St,Ti),e(ke,wi),g(Dt,ke,null),e(ke,Si),e(ke,Oa),e(Oa,Bi),e(ke,xi),g(Io,ke,null),p(o,zr,h),p(o,Bt,h),e(Bt,Gt),e(Gt,La),g(Ao,La,null),e(Bt,zi),e(Bt,Na),e(Na,qi),p(o,qr,h),p(o,ue,h),g(Do,ue,null),e(ue,Fi),e(ue,Go),e(Go,$i),e(Go,An),e(An,Mi),e(Go,Ei),e(ue,Ci),e(ue,Uo),e(Uo,ji),e(Uo,Wo),e(Wo,Pi),e(Uo,Oi),e(ue,Li),g(Ut,ue,null),e(ue,Ni),e(ue,P),g(Ro,P,null),e(P,Ii),e(P,xt),e(xt,Ai),e(xt,Dn),e(Dn,Di),e(xt,Gi),e(xt,Ia),e(Ia,Ui),e(xt,Wi),e(P,Ri),g(Wt,P,null),e(P,Hi),e(P,Aa),e(Aa,Ki),e(P,Qi),e(P,Da),e(Da,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Vi),e(P,Ji),e(P,Ra),e(Ra,Ha),e(Ha,Ka),e(Ka,Qa),e(Qa,Xi),e(P,Yi),e(P,Va),e(Va,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Zi),e(P,ec),e(P,Za),e(Za,es),e(es,ts),e(ts,Ho),e(Ho,tc),e(Ho,os),e(os,oc),e(Ho,nc),e(P,ac),e(P,ns),e(ns,as),e(as,ss),e(ss,rs),e(rs,sc),p(o,Fr,h),p(o,zt,h),e(zt,Rt),e(Rt,ds),g(Ko,ds,null),e(zt,rc),e(zt,ls),e(ls,dc),p(o,$r,h),p(o,N,h),g(Qo,N,null),e(N,lc),e(N,Vo),e(Vo,ic),e(Vo,Gn),e(Gn,cc),e(Vo,pc),e(N,hc),e(N,Jo),e(Jo,uc),e(Jo,Xo),e(Xo,mc),e(Jo,fc),e(N,_c),e(N,is),e(is,gc),e(N,bc),e(N,Ue),e(Ue,cs),e(cs,Yo),e(Yo,kc),e(Ue,vc),e(Ue,ps),e(ps,Zo),e(Zo,yc),e(Ue,Tc),e(Ue,hs),e(hs,en),e(en,wc),e(Ue,Sc),e(Ue,us),e(us,tn),e(tn,Bc),e(N,xc),e(N,Ve),g(on,Ve,null),e(Ve,zc),e(Ve,ms),e(ms,qc),e(Ve,Fc),g(nn,Ve,null),e(N,$c),e(N,Je),g(an,Je,null),e(Je,Mc),e(Je,fs),e(fs,Ec),e(Je,Cc),g(sn,Je,null),e(N,jc),e(N,Xe),g(rn,Xe,null),e(Xe,Pc),e(Xe,_s),e(_s,Oc),e(Xe,Lc),g(dn,Xe,null),p(o,Mr,h),p(o,qt,h),e(qt,Ht),e(Ht,gs),g(ln,gs,null),e(qt,Nc),e(qt,bs),e(bs,Ic),p(o,Er,h),p(o,I,h),g(cn,I,null),e(I,Ac),e(I,pn),e(pn,Dc),e(pn,Un),e(Un,Gc),e(pn,Uc),e(I,Wc),e(I,hn),e(hn,Rc),e(hn,un),e(un,Hc),e(hn,Kc),e(I,Qc),e(I,ks),e(ks,Vc),e(I,Jc),e(I,We),e(We,vs),e(vs,mn),e(mn,Xc),e(We,Yc),e(We,ys),e(ys,fn),e(fn,Zc),e(We,ep),e(We,Ts),e(Ts,_n),e(_n,tp),e(We,op),e(We,ws),e(ws,gn),e(gn,np),e(I,ap),e(I,$),g(bn,$,null),e($,sp),e($,Ft),e(Ft,rp),e(Ft,Ss),e(Ss,dp),e(Ft,lp),e(Ft,Bs),e(Bs,ip),e(Ft,cp),e($,pp),g(Kt,$,null),e($,hp),e($,xs),e(xs,up),e($,mp),e($,zs),e(zs,qs),e(qs,Fs),e(Fs,$s),e($s,fp),e($,_p),e($,Ms),e(Ms,Es),e(Es,Cs),e(Cs,js),e(js,gp),e($,bp),e($,Ps),e(Ps,Os),e(Os,Ls),e(Ls,Ns),e(Ns,kp),e($,vp),e($,Is),e(Is,As),e(As,kn),e(kn,Qt),e(Qt,Vt),e(Vt,Ds),g(vn,Ds,null),e(Qt,yp),e(Qt,Gs),e(Gs,Tp),e(kn,wp),e(kn,Us),e(Us,Sp),e($,Bp),e($,Ws),e(Ws,xp),e($,zp),e($,Rs),e(Rs,Hs),e(Hs,Ks),e(Ks,Qs),e(Qs,qp),e($,Fp),e($,Vs),e(Vs,Js),e(Js,Xs),e(Xs,Ys),e(Ys,$p),e($,Mp),e($,Zs),e(Zs,er),e(er,tr),e(tr,or),e(or,Ep),e($,Cp),e($,nr),e(nr,ar),e(ar,sr),e(sr,rr),e(rr,jp),e(I,Pp),e(I,Ye),g(yn,Ye,null),e(Ye,Op),e(Ye,dr),e(dr,Lp),e(Ye,Np),g(Tn,Ye,null),e(I,Ip),e(I,Ze),g(wn,Ze,null),e(Ze,Ap),e(Ze,lr),e(lr,Dp),e(Ze,Gp),g(Sn,Ze,null),Cr=!0},p(o,[h]){const Bn={};h&2&&(Bn.$$scope={dirty:h,ctx:o}),Pt.$set(Bn);const ir={};h&2&&(ir.$$scope={dirty:h,ctx:o}),Lt.$set(ir);const cr={};h&2&&(cr.$$scope={dirty:h,ctx:o}),At.$set(cr);const pr={};h&2&&(pr.$$scope={dirty:h,ctx:o}),Dt.$set(pr);const ve={};h&2&&(ve.$$scope={dirty:h,ctx:o}),Ut.$set(ve);const hr={};h&2&&(hr.$$scope={dirty:h,ctx:o}),Wt.$set(hr);const ur={};h&2&&(ur.$$scope={dirty:h,ctx:o}),Kt.$set(ur)},i(o){Cr||(b(S.$$.fragment,o),b(se.$$.fragment,o),b(xe.$$.fragment,o),b(eo.$$.fragment,o),b(oo.$$.fragment,o),b(no.$$.fragment,o),b(ao.$$.fragment,o),b(ro.$$.fragment,o),b(lo.$$.fragment,o),b(io.$$.fragment,o),b(co.$$.fragment,o),b(po.$$.fragment,o),b(ho.$$.fragment,o),b(mo.$$.fragment,o),b(fo.$$.fragment,o),b(_o.$$.fragment,o),b(vo.$$.fragment,o),b(Pt.$$.fragment,o),b(yo.$$.fragment,o),b(To.$$.fragment,o),b(wo.$$.fragment,o),b(zo.$$.fragment,o),b(Lt.$$.fragment,o),b(qo.$$.fragment,o),b(Fo.$$.fragment,o),b($o.$$.fragment,o),b(Mo.$$.fragment,o),b(Eo.$$.fragment,o),b(Co.$$.fragment,o),b(jo.$$.fragment,o),b(At.$$.fragment,o),b(No.$$.fragment,o),b(Dt.$$.fragment,o),b(Io.$$.fragment,o),b(Ao.$$.fragment,o),b(Do.$$.fragment,o),b(Ut.$$.fragment,o),b(Ro.$$.fragment,o),b(Wt.$$.fragment,o),b(Ko.$$.fragment,o),b(Qo.$$.fragment,o),b(on.$$.fragment,o),b(nn.$$.fragment,o),b(an.$$.fragment,o),b(sn.$$.fragment,o),b(rn.$$.fragment,o),b(dn.$$.fragment,o),b(ln.$$.fragment,o),b(cn.$$.fragment,o),b(bn.$$.fragment,o),b(Kt.$$.fragment,o),b(vn.$$.fragment,o),b(yn.$$.fragment,o),b(Tn.$$.fragment,o),b(wn.$$.fragment,o),b(Sn.$$.fragment,o),Cr=!0)},o(o){k(S.$$.fragment,o),k(se.$$.fragment,o),k(xe.$$.fragment,o),k(eo.$$.fragment,o),k(oo.$$.fragment,o),k(no.$$.fragment,o),k(ao.$$.fragment,o),k(ro.$$.fragment,o),k(lo.$$.fragment,o),k(io.$$.fragment,o),k(co.$$.fragment,o),k(po.$$.fragment,o),k(ho.$$.fragment,o),k(mo.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(vo.$$.fragment,o),k(Pt.$$.fragment,o),k(yo.$$.fragment,o),k(To.$$.fragment,o),k(wo.$$.fragment,o),k(zo.$$.fragment,o),k(Lt.$$.fragment,o),k(qo.$$.fragment,o),k(Fo.$$.fragment,o),k($o.$$.fragment,o),k(Mo.$$.fragment,o),k(Eo.$$.fragment,o),k(Co.$$.fragment,o),k(jo.$$.fragment,o),k(At.$$.fragment,o),k(No.$$.fragment,o),k(Dt.$$.fragment,o),k(Io.$$.fragment,o),k(Ao.$$.fragment,o),k(Do.$$.fragment,o),k(Ut.$$.fragment,o),k(Ro.$$.fragment,o),k(Wt.$$.fragment,o),k(Ko.$$.fragment,o),k(Qo.$$.fragment,o),k(on.$$.fragment,o),k(nn.$$.fragment,o),k(an.$$.fragment,o),k(sn.$$.fragment,o),k(rn.$$.fragment,o),k(dn.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(bn.$$.fragment,o),k(Kt.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Sn.$$.fragment,o),Cr=!1},d(o){t(u),o&&t(z),o&&t(y),v(S),o&&t(me),o&&t(x),o&&t($e),o&&t(J),v(se),o&&t(Me),o&&t(ee),o&&t(Ee),o&&t(R),o&&t(m),o&&t(F),o&&t(Re),o&&t(j),o&&t(te),o&&t(ce),v(xe),o&&t(mr),o&&t(pe),v(eo),v(oo),o&&t(fr),o&&t(mt),v(no),o&&t(_r),o&&t(G),v(ao),v(ro),v(lo),v(io),v(co),o&&t(gr),o&&t(_t),v(po),o&&t(br),o&&t(Ge),v(ho),v(mo),o&&t(kr),o&&t(gt),v(fo),o&&t(vr),o&&t(ze),v(_o),v(vo),v(Pt),v(yo),o&&t(yr),o&&t(kt),v(To),o&&t(Tr),o&&t(qe),v(wo),v(zo),v(Lt),v(qo),o&&t(wr),o&&t(yt),v(Fo),o&&t(Sr),o&&t(Tt),v($o),v(Mo),v(Eo),o&&t(Br),o&&t(wt),v(Co),o&&t(xr),o&&t(he),v(jo),v(At),v(No),v(Dt),v(Io),o&&t(zr),o&&t(Bt),v(Ao),o&&t(qr),o&&t(ue),v(Do),v(Ut),v(Ro),v(Wt),o&&t(Fr),o&&t(zt),v(Ko),o&&t($r),o&&t(N),v(Qo),v(on),v(nn),v(an),v(sn),v(rn),v(dn),o&&t(Mr),o&&t(qt),v(ln),o&&t(Er),o&&t(I),v(cn),v(bn),v(Kt),v(vn),v(yn),v(Tn),v(wn),v(Sn)}}}const af={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function sf(K,u,z){let{fw:y}=u;return K.$$set=T=>{"fw"in T&&z(0,y=T.fw)},[y]}class uf extends Hm{constructor(u){super();Km(this,u,sf,nf,Qm,{fw:0})}}export{uf as default,af as metadata};
