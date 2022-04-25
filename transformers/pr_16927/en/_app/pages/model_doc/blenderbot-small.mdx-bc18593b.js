import{S as Hu,i as Ku,s as Vu,e as n,k as l,w as f,t as s,M as Qu,c as a,d as o,m as i,a as r,x as _,h as d,b as c,F as e,g as p,y as g,q as b,o as k,B as y,v as Ju}from"../../chunks/vendor-6b77c823.js";import{T as Bn}from"../../chunks/Tip-39098574.js";import{D as M}from"../../chunks/Docstring-1088f2fb.js";import{C as so}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as qe}from"../../chunks/IconCopyLink-7a11ce68.js";function Xu(Y){let m,z,v,T,x;return{c(){m=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=s("Module"),x=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){m=a(S,"P",{});var w=r(m);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=r(v);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,m,w),e(m,z),e(m,v),e(v,T),e(m,x)},d(S){S&&o(m)}}}function Yu(Y){let m,z,v,T,x;return{c(){m=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=s("Module"),x=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){m=a(S,"P",{});var w=r(m);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=r(v);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,m,w),e(m,z),e(m,v),e(v,T),e(m,x)},d(S){S&&o(m)}}}function Zu(Y){let m,z,v,T,x,S,w,F,Ce,ue,B,je,U,Oe,Pe,W,Le,Ne,K,V,Ie,Z,C,P,fe,ae,$e,Q,A,Te,re,L,we,se,Ee,ee,de,le,Ae,J,Me,R,De;return{c(){m=n("p"),z=s("TF 2.0 models accepts two formats as inputs:"),v=l(),T=n("ul"),x=n("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=l(),B=n("p"),je=s("This second option is useful when using "),U=n("code"),Oe=s("tf.keras.Model.fit"),Pe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Le=s("model(inputs)"),Ne=s("."),K=l(),V=n("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=n("ul"),P=n("li"),fe=s("a single Tensor with "),ae=n("code"),$e=s("input_ids"),Q=s(" only and nothing else: "),A=n("code"),Te=s("model(input_ids)"),re=l(),L=n("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),Ee=s("model([input_ids, attention_mask])"),ee=s(" or "),de=n("code"),le=s("model([input_ids, attention_mask, token_type_ids])"),Ae=l(),J=n("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=a(u,"P",{});var q=r(m);z=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),v=i(u),T=a(u,"UL",{});var ie=r(T);x=a(ie,"LI",{});var lo=r(x);S=d(lo,"having all inputs as keyword arguments (like PyTorch models), or"),lo.forEach(o),w=i(ie),F=a(ie,"LI",{});var Re=r(F);Ce=d(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=i(u),B=a(u,"P",{});var j=r(B);je=d(j,"This second option is useful when using "),U=a(j,"CODE",{});var io=r(U);Oe=d(io,"tf.keras.Model.fit"),io.forEach(o),Pe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a(j,"CODE",{});var Se=r(W);Le=d(Se,"model(inputs)"),Se.forEach(o),Ne=d(j,"."),j.forEach(o),K=i(u),V=a(u,"P",{});var co=r(V);Ie=d(co,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),co.forEach(o),Z=i(u),C=a(u,"UL",{});var X=r(C);P=a(X,"LI",{});var D=r(P);fe=d(D,"a single Tensor with "),ae=a(D,"CODE",{});var po=r(ae);$e=d(po,"input_ids"),po.forEach(o),Q=d(D," only and nothing else: "),A=a(D,"CODE",{});var ho=r(A);Te=d(ho,"model(input_ids)"),ho.forEach(o),D.forEach(o),re=i(X),L=a(X,"LI",{});var oe=r(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=a(oe,"CODE",{});var ce=r(se);Ee=d(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=d(oe," or "),de=a(oe,"CODE",{});var _e=r(de);le=d(_e,"model([input_ids, attention_mask, token_type_ids])"),_e.forEach(o),oe.forEach(o),Ae=i(X),J=a(X,"LI",{});var xe=r(J);Me=d(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(xe,"CODE",{});var Be=r(R);De=d(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(o),xe.forEach(o),X.forEach(o)},m(u,q){p(u,m,q),e(m,z),p(u,v,q),p(u,T,q),e(T,x),e(x,S),e(T,w),e(T,F),e(F,Ce),p(u,ue,q),p(u,B,q),e(B,je),e(B,U),e(U,Oe),e(B,Pe),e(B,W),e(W,Le),e(B,Ne),p(u,K,q),p(u,V,q),e(V,Ie),p(u,Z,q),p(u,C,q),e(C,P),e(P,fe),e(P,ae),e(ae,$e),e(P,Q),e(P,A),e(A,Te),e(C,re),e(C,L),e(L,we),e(L,se),e(se,Ee),e(L,ee),e(L,de),e(de,le),e(C,Ae),e(C,J),e(J,Me),e(J,R),e(R,De)},d(u){u&&o(m),u&&o(v),u&&o(T),u&&o(ue),u&&o(B),u&&o(K),u&&o(V),u&&o(Z),u&&o(C)}}}function ef(Y){let m,z,v,T,x;return{c(){m=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=s("Module"),x=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){m=a(S,"P",{});var w=r(m);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=r(v);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,m,w),e(m,z),e(m,v),e(v,T),e(m,x)},d(S){S&&o(m)}}}function of(Y){let m,z,v,T,x,S,w,F,Ce,ue,B,je,U,Oe,Pe,W,Le,Ne,K,V,Ie,Z,C,P,fe,ae,$e,Q,A,Te,re,L,we,se,Ee,ee,de,le,Ae,J,Me,R,De;return{c(){m=n("p"),z=s("TF 2.0 models accepts two formats as inputs:"),v=l(),T=n("ul"),x=n("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=l(),B=n("p"),je=s("This second option is useful when using "),U=n("code"),Oe=s("tf.keras.Model.fit"),Pe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Le=s("model(inputs)"),Ne=s("."),K=l(),V=n("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=n("ul"),P=n("li"),fe=s("a single Tensor with "),ae=n("code"),$e=s("input_ids"),Q=s(" only and nothing else: "),A=n("code"),Te=s("model(input_ids)"),re=l(),L=n("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),Ee=s("model([input_ids, attention_mask])"),ee=s(" or "),de=n("code"),le=s("model([input_ids, attention_mask, token_type_ids])"),Ae=l(),J=n("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=a(u,"P",{});var q=r(m);z=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),v=i(u),T=a(u,"UL",{});var ie=r(T);x=a(ie,"LI",{});var lo=r(x);S=d(lo,"having all inputs as keyword arguments (like PyTorch models), or"),lo.forEach(o),w=i(ie),F=a(ie,"LI",{});var Re=r(F);Ce=d(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=i(u),B=a(u,"P",{});var j=r(B);je=d(j,"This second option is useful when using "),U=a(j,"CODE",{});var io=r(U);Oe=d(io,"tf.keras.Model.fit"),io.forEach(o),Pe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a(j,"CODE",{});var Se=r(W);Le=d(Se,"model(inputs)"),Se.forEach(o),Ne=d(j,"."),j.forEach(o),K=i(u),V=a(u,"P",{});var co=r(V);Ie=d(co,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),co.forEach(o),Z=i(u),C=a(u,"UL",{});var X=r(C);P=a(X,"LI",{});var D=r(P);fe=d(D,"a single Tensor with "),ae=a(D,"CODE",{});var po=r(ae);$e=d(po,"input_ids"),po.forEach(o),Q=d(D," only and nothing else: "),A=a(D,"CODE",{});var ho=r(A);Te=d(ho,"model(input_ids)"),ho.forEach(o),D.forEach(o),re=i(X),L=a(X,"LI",{});var oe=r(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=a(oe,"CODE",{});var ce=r(se);Ee=d(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=d(oe," or "),de=a(oe,"CODE",{});var _e=r(de);le=d(_e,"model([input_ids, attention_mask, token_type_ids])"),_e.forEach(o),oe.forEach(o),Ae=i(X),J=a(X,"LI",{});var xe=r(J);Me=d(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(xe,"CODE",{});var Be=r(R);De=d(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(o),xe.forEach(o),X.forEach(o)},m(u,q){p(u,m,q),e(m,z),p(u,v,q),p(u,T,q),e(T,x),e(x,S),e(T,w),e(T,F),e(F,Ce),p(u,ue,q),p(u,B,q),e(B,je),e(B,U),e(U,Oe),e(B,Pe),e(B,W),e(W,Le),e(B,Ne),p(u,K,q),p(u,V,q),e(V,Ie),p(u,Z,q),p(u,C,q),e(C,P),e(P,fe),e(P,ae),e(ae,$e),e(P,Q),e(P,A),e(A,Te),e(C,re),e(C,L),e(L,we),e(L,se),e(se,Ee),e(L,ee),e(L,de),e(de,le),e(C,Ae),e(C,J),e(J,Me),e(J,R),e(R,De)},d(u){u&&o(m),u&&o(v),u&&o(T),u&&o(ue),u&&o(B),u&&o(K),u&&o(V),u&&o(Z),u&&o(C)}}}function tf(Y){let m,z,v,T,x;return{c(){m=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=s("Module"),x=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){m=a(S,"P",{});var w=r(m);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=r(v);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,m,w),e(m,z),e(m,v),e(v,T),e(m,x)},d(S){S&&o(m)}}}function nf(Y){let m,z,v,T,x;return{c(){m=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=s("Module"),x=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){m=a(S,"P",{});var w=r(m);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=r(v);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,m,w),e(m,z),e(m,v),e(v,T),e(m,x)},d(S){S&&o(m)}}}function af(Y){let m,z,v,T,x,S,w,F,Ce,ue,B,je,U,Oe,Pe,W,Le,Ne,K,V,Ie,Z,C,P,fe,ae,$e,Q,A,Te,re,L,we,se,Ee,ee,de,le,Ae,J,Me,R,De,u,q,ie,lo,Re,j,io,Se,co,X,D,po,ho,oe,ce,_e,xe,Be,hd,la,md,us,pe,ot,ud,mo,fd,zn,_d,gd,tt,bd,kd,yd,uo,vd,Fn,Td,wd,qn,Sd,xd,Bd,ia,zd,Fd,nt,fs,fo,Eo,ca,at,qd,pa,$d,_s,G,rt,Ed,ha,Md,Cd,st,jd,$n,Od,Pd,Ld,He,dt,Nd,ma,Id,Ad,ua,Dd,Gd,Mo,lt,Ud,_o,Wd,fa,Rd,Hd,_a,Kd,Vd,Qd,Ke,it,Jd,En,Xd,Mn,Yd,Zd,ga,el,ol,Cn,ct,gs,go,Co,ba,pt,tl,ka,nl,bs,Ge,ht,al,mt,rl,ya,sl,dl,ll,jo,ut,il,va,cl,ks,bo,Oo,Ta,ft,pl,wa,hl,ys,ze,_t,ml,gt,ul,jn,fl,_l,gl,bt,bl,kt,kl,yl,vl,ge,yt,Tl,ko,wl,On,Sl,xl,Sa,Bl,zl,Fl,Po,ql,xa,$l,El,vt,vs,yo,Lo,Ba,Tt,Ml,za,Cl,Ts,Fe,wt,jl,St,Ol,Pn,Pl,Ll,Nl,xt,Il,Bt,Al,Dl,Gl,be,zt,Ul,vo,Wl,Ln,Rl,Hl,Fa,Kl,Vl,Ql,No,Jl,qa,Xl,Yl,Ft,ws,To,Io,$a,qt,Zl,Ea,ei,Ss,wo,$t,oi,Ve,Et,ti,Ma,ni,ai,Mt,xs,So,Ao,Ca,Ct,ri,ja,si,Bs,he,jt,di,Ot,li,Nn,ii,ci,pi,Pt,hi,Lt,mi,ui,fi,Do,_i,ke,Nt,gi,xo,bi,In,ki,yi,Oa,vi,Ti,wi,Go,Si,Pa,xi,Bi,It,zs,Bo,Uo,La,At,zi,Na,Fi,Fs,me,Dt,qi,Gt,$i,An,Ei,Mi,Ci,Ut,ji,Wt,Oi,Pi,Li,Wo,Ni,O,Rt,Ii,zo,Ai,Dn,Di,Gi,Ia,Ui,Wi,Ri,Ro,Hi,Aa,Ki,Vi,Da,Ga,Ua,Wa,Qi,Ji,Ra,Ha,Ka,Va,Xi,Yi,Qa,Ja,Xa,Ya,Zi,ec,Za,er,or,Ht,oc,tr,tc,nc,ac,nr,ar,rr,sr,rc,qs,Fo,Ho,dr,Kt,sc,lr,dc,$s,N,Vt,lc,Qt,ic,Gn,cc,pc,hc,Jt,mc,Xt,uc,fc,_c,ir,gc,bc,Ue,cr,Yt,kc,yc,pr,Zt,vc,Tc,hr,en,wc,Sc,mr,on,xc,Bc,Qe,tn,zc,ur,Fc,qc,nn,$c,Je,an,Ec,fr,Mc,Cc,rn,jc,Xe,sn,Oc,_r,Pc,Lc,dn,Es,qo,Ko,gr,ln,Nc,br,Ic,Ms,I,cn,Ac,pn,Dc,Un,Gc,Uc,Wc,hn,Rc,mn,Hc,Kc,Vc,kr,Qc,Jc,We,yr,un,Xc,Yc,vr,fn,Zc,ep,Tr,_n,op,tp,wr,gn,np,ap,$,bn,rp,$o,sp,Sr,dp,lp,xr,ip,cp,pp,Vo,hp,Br,mp,up,zr,Fr,qr,$r,fp,_p,Er,Mr,Cr,jr,gp,bp,Or,Pr,Lr,Nr,kp,yp,Ir,Ar,kn,Qo,Jo,Dr,yn,vp,Gr,Tp,wp,Ur,Sp,xp,Wr,Bp,zp,Rr,Hr,Kr,Vr,Fp,qp,Qr,Jr,Xr,Yr,$p,Ep,Zr,es,os,ts,Mp,Cp,ns,as,rs,ss,jp,Op,Ye,vn,Pp,ds,Lp,Np,Tn,Ip,Ze,wn,Ap,ls,Dp,Gp,Sn,Cs;return S=new qe({}),re=new qe({}),Be=new qe({}),ot=new M({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),nt=new so({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),at=new qe({}),rt=new M({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67"}}),dt=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/tokenization_utils_base.py#L2879",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lt=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/tokenization_utils.py#L842",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),it=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/tokenization_utils_base.py#L2859",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ct=new M({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),pt=new qe({}),ht=new M({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50"}}),ut=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new qe({}),_t=new M({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1076"}}),yt=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1103",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Bn({props:{$$slots:{default:[Xu]},$$scope:{ctx:Y}}}),vt=new so({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),Tt=new qe({}),wt=new M({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1202"}}),zt=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new Bn({props:{$$slots:{default:[Yu]},$$scope:{ctx:Y}}}),Ft=new so({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

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
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),qt=new qe({}),$t=new M({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1382"}}),Et=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1413",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mt=new so({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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
<span class="hljs-literal">True</span>`}}),Ct=new qe({}),jt=new M({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1111"}}),Do=new Bn({props:{$$slots:{default:[Zu]},$$scope:{ctx:Y}}}),Nt=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1123",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new Bn({props:{$$slots:{default:[ef]},$$scope:{ctx:Y}}}),It=new so({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),At=new qe({}),Dt=new M({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1198"}}),Wo=new Bn({props:{$$slots:{default:[of]},$$scope:{ctx:Y}}}),Rt=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1231",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new Bn({props:{$$slots:{default:[tf]},$$scope:{ctx:Y}}}),Kt=new qe({}),Vt=new M({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1215"}}),tn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new so({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new so({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),sn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new so({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ln=new qe({}),cn=new M({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303"}}),bn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Bn({props:{$$slots:{default:[nf]},$$scope:{ctx:Y}}}),yn=new qe({}),vn=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new so({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),wn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16927/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16927/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16927/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1307",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_16927/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new so({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=n("meta"),z=l(),v=n("h1"),T=n("a"),x=n("span"),f(S.$$.fragment),w=l(),F=n("span"),Ce=s("Blenderbot Small"),ue=l(),B=n("p"),je=s("Note that "),U=n("a"),Oe=s("BlenderbotSmallModel"),Pe=s(` and
`),W=n("a"),Le=s("BlenderbotSmallForConditionalGeneration"),Ne=s(` are only used in combination with the checkpoint
`),K=n("a"),V=s("facebook/blenderbot-90M"),Ie=s(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),C=s("BlenderbotModel"),P=s(` and
`),fe=n("a"),ae=s("BlenderbotForConditionalGeneration"),$e=l(),Q=n("h2"),A=n("a"),Te=n("span"),f(re.$$.fragment),L=l(),we=n("span"),se=s("Overview"),Ee=l(),ee=n("p"),de=s("The Blender chatbot model was proposed in "),le=n("a"),Ae=s("Recipes for building an open-domain chatbot"),J=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=n("p"),De=s("The abstract of the paper is the following:"),u=l(),q=n("p"),ie=n("em"),lo=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=l(),j=n("p"),io=s("This model was contributed by "),Se=n("a"),co=s("patrickvonplaten"),X=s(`. The authors\u2019 code can be
found `),D=n("a"),po=s("here"),ho=s(" ."),oe=l(),ce=n("h2"),_e=n("a"),xe=n("span"),f(Be.$$.fragment),hd=l(),la=n("span"),md=s("BlenderbotSmallConfig"),us=l(),pe=n("div"),f(ot.$$.fragment),ud=l(),mo=n("p"),fd=s("This is the configuration class to store the configuration of a "),zn=n("a"),_d=s("BlenderbotSmallModel"),gd=s(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),tt=n("a"),bd=s("facebook/blenderbot_small-90M"),kd=s(" architecture."),yd=l(),uo=n("p"),vd=s("Configuration objects inherit from "),Fn=n("a"),Td=s("PretrainedConfig"),wd=s(` and can be used to control the model outputs. Read the
documentation from `),qn=n("a"),Sd=s("PretrainedConfig"),xd=s(" for more information."),Bd=l(),ia=n("p"),zd=s("Example:"),Fd=l(),f(nt.$$.fragment),fs=l(),fo=n("h2"),Eo=n("a"),ca=n("span"),f(at.$$.fragment),qd=l(),pa=n("span"),$d=s("BlenderbotSmallTokenizer"),_s=l(),G=n("div"),f(rt.$$.fragment),Ed=l(),ha=n("p"),Md=s("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Cd=l(),st=n("p"),jd=s("This tokenizer inherits from "),$n=n("a"),Od=s("PreTrainedTokenizer"),Pd=s(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ld=l(),He=n("div"),f(dt.$$.fragment),Nd=l(),ma=n("p"),Id=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ad=l(),ua=n("p"),Dd=s("This implementation does not add special tokens and this method should be overridden in a subclass."),Gd=l(),Mo=n("div"),f(lt.$$.fragment),Ud=l(),_o=n("p"),Wd=s(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=n("code"),Rd=s("prepare_for_model"),Hd=s(" or "),_a=n("code"),Kd=s("encode_plus"),Vd=s(" methods."),Qd=l(),Ke=n("div"),f(it.$$.fragment),Jd=l(),En=n("p"),Xd=s("Create the token type IDs corresponding to the sequences passed. "),Mn=n("a"),Yd=s(`What are token type
IDs?`),Zd=l(),ga=n("p"),el=s("Should be overridden in a subclass if the model has a special way of building those."),ol=l(),Cn=n("div"),f(ct.$$.fragment),gs=l(),go=n("h2"),Co=n("a"),ba=n("span"),f(pt.$$.fragment),tl=l(),ka=n("span"),nl=s("BlenderbotSmallTokenizerFast"),bs=l(),Ge=n("div"),f(ht.$$.fragment),al=l(),mt=n("p"),rl=s("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ya=n("em"),sl=s("tokenizers"),dl=s(" library)."),ll=l(),jo=n("div"),f(ut.$$.fragment),il=l(),va=n("p"),cl=s(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),ks=l(),bo=n("h2"),Oo=n("a"),Ta=n("span"),f(ft.$$.fragment),pl=l(),wa=n("span"),hl=s("BlenderbotSmallModel"),ys=l(),ze=n("div"),f(_t.$$.fragment),ml=l(),gt=n("p"),ul=s(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=n("a"),fl=s("PreTrainedModel"),_l=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl=l(),bt=n("p"),bl=s("This model is also a PyTorch "),kt=n("a"),kl=s("torch.nn.Module"),yl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl=l(),ge=n("div"),f(yt.$$.fragment),Tl=l(),ko=n("p"),wl=s("The "),On=n("a"),Sl=s("BlenderbotSmallModel"),xl=s(" forward method, overrides the "),Sa=n("code"),Bl=s("__call__"),zl=s(" special method."),Fl=l(),f(Po.$$.fragment),ql=l(),xa=n("p"),$l=s("Example:"),El=l(),f(vt.$$.fragment),vs=l(),yo=n("h2"),Lo=n("a"),Ba=n("span"),f(Tt.$$.fragment),Ml=l(),za=n("span"),Cl=s("BlenderbotSmallForConditionalGeneration"),Ts=l(),Fe=n("div"),f(wt.$$.fragment),jl=l(),St=n("p"),Ol=s(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=n("a"),Pl=s("PreTrainedModel"),Ll=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=l(),xt=n("p"),Il=s("This model is also a PyTorch "),Bt=n("a"),Al=s("torch.nn.Module"),Dl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gl=l(),be=n("div"),f(zt.$$.fragment),Ul=l(),vo=n("p"),Wl=s("The "),Ln=n("a"),Rl=s("BlenderbotSmallForConditionalGeneration"),Hl=s(" forward method, overrides the "),Fa=n("code"),Kl=s("__call__"),Vl=s(" special method."),Ql=l(),f(No.$$.fragment),Jl=l(),qa=n("p"),Xl=s("Conversation example:"),Yl=l(),f(Ft.$$.fragment),ws=l(),To=n("h2"),Io=n("a"),$a=n("span"),f(qt.$$.fragment),Zl=l(),Ea=n("span"),ei=s("BlenderbotSmallForCausalLM"),Ss=l(),wo=n("div"),f($t.$$.fragment),oi=l(),Ve=n("div"),f(Et.$$.fragment),ti=l(),Ma=n("p"),ni=s("Example:"),ai=l(),f(Mt.$$.fragment),xs=l(),So=n("h2"),Ao=n("a"),Ca=n("span"),f(Ct.$$.fragment),ri=l(),ja=n("span"),si=s("TFBlenderbotSmallModel"),Bs=l(),he=n("div"),f(jt.$$.fragment),di=l(),Ot=n("p"),li=s(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),ii=s("TFPreTrainedModel"),ci=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi=l(),Pt=n("p"),hi=s("This model is also a "),Lt=n("a"),mi=s("tf.keras.Model"),ui=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi=l(),f(Do.$$.fragment),_i=l(),ke=n("div"),f(Nt.$$.fragment),gi=l(),xo=n("p"),bi=s("The "),In=n("a"),ki=s("TFBlenderbotSmallModel"),yi=s(" forward method, overrides the "),Oa=n("code"),vi=s("__call__"),Ti=s(" special method."),wi=l(),f(Go.$$.fragment),Si=l(),Pa=n("p"),xi=s("Example:"),Bi=l(),f(It.$$.fragment),zs=l(),Bo=n("h2"),Uo=n("a"),La=n("span"),f(At.$$.fragment),zi=l(),Na=n("span"),Fi=s("TFBlenderbotSmallForConditionalGeneration"),Fs=l(),me=n("div"),f(Dt.$$.fragment),qi=l(),Gt=n("p"),$i=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Ei=s("TFPreTrainedModel"),Mi=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci=l(),Ut=n("p"),ji=s("This model is also a "),Wt=n("a"),Oi=s("tf.keras.Model"),Pi=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Li=l(),f(Wo.$$.fragment),Ni=l(),O=n("div"),f(Rt.$$.fragment),Ii=l(),zo=n("p"),Ai=s("The "),Dn=n("a"),Di=s("TFBlenderbotSmallForConditionalGeneration"),Gi=s(" forward method, overrides the "),Ia=n("code"),Ui=s("__call__"),Wi=s(" special method."),Ri=l(),f(Ro.$$.fragment),Hi=l(),Aa=n("p"),Ki=s("Conversation example::"),Vi=l(),Da=n("blockquote"),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("p"),Qi=s(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ji=l(),Ra=n("blockquote"),Ha=n("blockquote"),Ka=n("blockquote"),Va=n("p"),Xi=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Yi=l(),Qa=n("blockquote"),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("p"),Zi=s(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ec=l(),Za=n("blockquote"),er=n("blockquote"),or=n("blockquote"),Ht=n("p"),oc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),tr=n("s"),tc=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),nc=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),ac=l(),nr=n("blockquote"),ar=n("blockquote"),rr=n("blockquote"),sr=n("p"),rc=s(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),qs=l(),Fo=n("h2"),Ho=n("a"),dr=n("span"),f(Kt.$$.fragment),sc=l(),lr=n("span"),dc=s("FlaxBlenderbotSmallModel"),$s=l(),N=n("div"),f(Vt.$$.fragment),lc=l(),Qt=n("p"),ic=s(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),cc=s("FlaxPreTrainedModel"),pc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc=l(),Jt=n("p"),mc=s(`This model is also a Flax Linen
`),Xt=n("a"),uc=s("flax.nn.Module"),fc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_c=l(),ir=n("p"),gc=s("Finally, this model supports inherent JAX features such as:"),bc=l(),Ue=n("ul"),cr=n("li"),Yt=n("a"),kc=s("Just-In-Time (JIT) compilation"),yc=l(),pr=n("li"),Zt=n("a"),vc=s("Automatic Differentiation"),Tc=l(),hr=n("li"),en=n("a"),wc=s("Vectorization"),Sc=l(),mr=n("li"),on=n("a"),xc=s("Parallelization"),Bc=l(),Qe=n("div"),f(tn.$$.fragment),zc=l(),ur=n("p"),Fc=s("Example:"),qc=l(),f(nn.$$.fragment),$c=l(),Je=n("div"),f(an.$$.fragment),Ec=l(),fr=n("p"),Mc=s("Example:"),Cc=l(),f(rn.$$.fragment),jc=l(),Xe=n("div"),f(sn.$$.fragment),Oc=l(),_r=n("p"),Pc=s("Example:"),Lc=l(),f(dn.$$.fragment),Es=l(),qo=n("h2"),Ko=n("a"),gr=n("span"),f(ln.$$.fragment),Nc=l(),br=n("span"),Ic=s("FlaxBlenderbotForConditionalGeneration"),Ms=l(),I=n("div"),f(cn.$$.fragment),Ac=l(),pn=n("p"),Dc=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=n("a"),Gc=s("FlaxPreTrainedModel"),Uc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=l(),hn=n("p"),Rc=s(`This model is also a Flax Linen
`),mn=n("a"),Hc=s("flax.nn.Module"),Kc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vc=l(),kr=n("p"),Qc=s("Finally, this model supports inherent JAX features such as:"),Jc=l(),We=n("ul"),yr=n("li"),un=n("a"),Xc=s("Just-In-Time (JIT) compilation"),Yc=l(),vr=n("li"),fn=n("a"),Zc=s("Automatic Differentiation"),ep=l(),Tr=n("li"),_n=n("a"),op=s("Vectorization"),tp=l(),wr=n("li"),gn=n("a"),np=s("Parallelization"),ap=l(),$=n("div"),f(bn.$$.fragment),rp=l(),$o=n("p"),sp=s("The "),Sr=n("code"),dp=s("FlaxBlenderbotSmallPreTrainedModel"),lp=s(" forward method, overrides the "),xr=n("code"),ip=s("__call__"),cp=s(" special method."),pp=l(),f(Vo.$$.fragment),hp=l(),Br=n("p"),mp=s("Summarization example:"),up=l(),zr=n("blockquote"),Fr=n("blockquote"),qr=n("blockquote"),$r=n("p"),fp=s("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),_p=l(),Er=n("blockquote"),Mr=n("blockquote"),Cr=n("blockquote"),jr=n("p"),gp=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),bp=l(),Or=n("blockquote"),Pr=n("blockquote"),Lr=n("blockquote"),Nr=n("p"),kp=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),yp=l(),Ir=n("blockquote"),Ar=n("blockquote"),kn=n("blockquote"),Qo=n("h1"),Jo=n("a"),Dr=n("span"),f(yn.$$.fragment),vp=l(),Gr=n("span"),Tp=s("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),wp=l(),Ur=n("p"),Sp=s("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),xp=l(),Wr=n("p"),Bp=s("Mask filling example:"),zp=l(),Rr=n("blockquote"),Hr=n("blockquote"),Kr=n("blockquote"),Vr=n("p"),Fp=s(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),qp=l(),Qr=n("blockquote"),Jr=n("blockquote"),Xr=n("blockquote"),Yr=n("p"),$p=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Ep=l(),Zr=n("blockquote"),es=n("blockquote"),os=n("blockquote"),ts=n("p"),Mp=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Cp=l(),ns=n("blockquote"),as=n("blockquote"),rs=n("blockquote"),ss=n("p"),jp=s("tokenizer.decode(predictions).split()"),Op=l(),Ye=n("div"),f(vn.$$.fragment),Pp=l(),ds=n("p"),Lp=s("Example:"),Np=l(),f(Tn.$$.fragment),Ip=l(),Ze=n("div"),f(wn.$$.fragment),Ap=l(),ls=n("p"),Dp=s("Example:"),Gp=l(),f(Sn.$$.fragment),this.h()},l(t){const h=Qu('[data-svelte="svelte-1phssyn"]',document.head);m=a(h,"META",{name:!0,content:!0}),h.forEach(o),z=i(t),v=a(t,"H1",{class:!0});var xn=r(v);T=a(xn,"A",{id:!0,class:!0,href:!0});var is=r(T);x=a(is,"SPAN",{});var cs=r(x);_(S.$$.fragment,cs),cs.forEach(o),is.forEach(o),w=i(xn),F=a(xn,"SPAN",{});var ps=r(F);Ce=d(ps,"Blenderbot Small"),ps.forEach(o),xn.forEach(o),ue=i(t),B=a(t,"P",{});var ye=r(B);je=d(ye,"Note that "),U=a(ye,"A",{href:!0});var hs=r(U);Oe=d(hs,"BlenderbotSmallModel"),hs.forEach(o),Pe=d(ye,` and
`),W=a(ye,"A",{href:!0});var ms=r(W);Le=d(ms,"BlenderbotSmallForConditionalGeneration"),ms.forEach(o),Ne=d(ye,` are only used in combination with the checkpoint
`),K=a(ye,"A",{href:!0,rel:!0});var Wp=r(K);V=d(Wp,"facebook/blenderbot-90M"),Wp.forEach(o),Ie=d(ye,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(ye,"A",{href:!0});var Rp=r(Z);C=d(Rp,"BlenderbotModel"),Rp.forEach(o),P=d(ye,` and
`),fe=a(ye,"A",{href:!0});var Hp=r(fe);ae=d(Hp,"BlenderbotForConditionalGeneration"),Hp.forEach(o),ye.forEach(o),$e=i(t),Q=a(t,"H2",{class:!0});var js=r(Q);A=a(js,"A",{id:!0,class:!0,href:!0});var Kp=r(A);Te=a(Kp,"SPAN",{});var Vp=r(Te);_(re.$$.fragment,Vp),Vp.forEach(o),Kp.forEach(o),L=i(js),we=a(js,"SPAN",{});var Qp=r(we);se=d(Qp,"Overview"),Qp.forEach(o),js.forEach(o),Ee=i(t),ee=a(t,"P",{});var Os=r(ee);de=d(Os,"The Blender chatbot model was proposed in "),le=a(Os,"A",{href:!0,rel:!0});var Jp=r(le);Ae=d(Jp,"Recipes for building an open-domain chatbot"),Jp.forEach(o),J=d(Os,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Os.forEach(o),Me=i(t),R=a(t,"P",{});var Xp=r(R);De=d(Xp,"The abstract of the paper is the following:"),Xp.forEach(o),u=i(t),q=a(t,"P",{});var Yp=r(q);ie=a(Yp,"EM",{});var Zp=r(ie);lo=d(Zp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Zp.forEach(o),Yp.forEach(o),Re=i(t),j=a(t,"P",{});var Wn=r(j);io=d(Wn,"This model was contributed by "),Se=a(Wn,"A",{href:!0,rel:!0});var eh=r(Se);co=d(eh,"patrickvonplaten"),eh.forEach(o),X=d(Wn,`. The authors\u2019 code can be
found `),D=a(Wn,"A",{href:!0,rel:!0});var oh=r(D);po=d(oh,"here"),oh.forEach(o),ho=d(Wn," ."),Wn.forEach(o),oe=i(t),ce=a(t,"H2",{class:!0});var Ps=r(ce);_e=a(Ps,"A",{id:!0,class:!0,href:!0});var th=r(_e);xe=a(th,"SPAN",{});var nh=r(xe);_(Be.$$.fragment,nh),nh.forEach(o),th.forEach(o),hd=i(Ps),la=a(Ps,"SPAN",{});var ah=r(la);md=d(ah,"BlenderbotSmallConfig"),ah.forEach(o),Ps.forEach(o),us=i(t),pe=a(t,"DIV",{class:!0});var eo=r(pe);_(ot.$$.fragment,eo),ud=i(eo),mo=a(eo,"P",{});var Rn=r(mo);fd=d(Rn,"This is the configuration class to store the configuration of a "),zn=a(Rn,"A",{href:!0});var rh=r(zn);_d=d(rh,"BlenderbotSmallModel"),rh.forEach(o),gd=d(Rn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),tt=a(Rn,"A",{href:!0,rel:!0});var sh=r(tt);bd=d(sh,"facebook/blenderbot_small-90M"),sh.forEach(o),kd=d(Rn," architecture."),Rn.forEach(o),yd=i(eo),uo=a(eo,"P",{});var Hn=r(uo);vd=d(Hn,"Configuration objects inherit from "),Fn=a(Hn,"A",{href:!0});var dh=r(Fn);Td=d(dh,"PretrainedConfig"),dh.forEach(o),wd=d(Hn,` and can be used to control the model outputs. Read the
documentation from `),qn=a(Hn,"A",{href:!0});var lh=r(qn);Sd=d(lh,"PretrainedConfig"),lh.forEach(o),xd=d(Hn," for more information."),Hn.forEach(o),Bd=i(eo),ia=a(eo,"P",{});var ih=r(ia);zd=d(ih,"Example:"),ih.forEach(o),Fd=i(eo),_(nt.$$.fragment,eo),eo.forEach(o),fs=i(t),fo=a(t,"H2",{class:!0});var Ls=r(fo);Eo=a(Ls,"A",{id:!0,class:!0,href:!0});var ch=r(Eo);ca=a(ch,"SPAN",{});var ph=r(ca);_(at.$$.fragment,ph),ph.forEach(o),ch.forEach(o),qd=i(Ls),pa=a(Ls,"SPAN",{});var hh=r(pa);$d=d(hh,"BlenderbotSmallTokenizer"),hh.forEach(o),Ls.forEach(o),_s=i(t),G=a(t,"DIV",{class:!0});var ve=r(G);_(rt.$$.fragment,ve),Ed=i(ve),ha=a(ve,"P",{});var mh=r(ha);Md=d(mh,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),mh.forEach(o),Cd=i(ve),st=a(ve,"P",{});var Ns=r(st);jd=d(Ns,"This tokenizer inherits from "),$n=a(Ns,"A",{href:!0});var uh=r($n);Od=d(uh,"PreTrainedTokenizer"),uh.forEach(o),Pd=d(Ns,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ns.forEach(o),Ld=i(ve),He=a(ve,"DIV",{class:!0});var Kn=r(He);_(dt.$$.fragment,Kn),Nd=i(Kn),ma=a(Kn,"P",{});var fh=r(ma);Id=d(fh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),fh.forEach(o),Ad=i(Kn),ua=a(Kn,"P",{});var _h=r(ua);Dd=d(_h,"This implementation does not add special tokens and this method should be overridden in a subclass."),_h.forEach(o),Kn.forEach(o),Gd=i(ve),Mo=a(ve,"DIV",{class:!0});var Is=r(Mo);_(lt.$$.fragment,Is),Ud=i(Is),_o=a(Is,"P",{});var Vn=r(_o);Wd=d(Vn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=a(Vn,"CODE",{});var gh=r(fa);Rd=d(gh,"prepare_for_model"),gh.forEach(o),Hd=d(Vn," or "),_a=a(Vn,"CODE",{});var bh=r(_a);Kd=d(bh,"encode_plus"),bh.forEach(o),Vd=d(Vn," methods."),Vn.forEach(o),Is.forEach(o),Qd=i(ve),Ke=a(ve,"DIV",{class:!0});var Qn=r(Ke);_(it.$$.fragment,Qn),Jd=i(Qn),En=a(Qn,"P",{});var Up=r(En);Xd=d(Up,"Create the token type IDs corresponding to the sequences passed. "),Mn=a(Up,"A",{href:!0});var kh=r(Mn);Yd=d(kh,`What are token type
IDs?`),kh.forEach(o),Up.forEach(o),Zd=i(Qn),ga=a(Qn,"P",{});var yh=r(ga);el=d(yh,"Should be overridden in a subclass if the model has a special way of building those."),yh.forEach(o),Qn.forEach(o),ol=i(ve),Cn=a(ve,"DIV",{class:!0});var vh=r(Cn);_(ct.$$.fragment,vh),vh.forEach(o),ve.forEach(o),gs=i(t),go=a(t,"H2",{class:!0});var As=r(go);Co=a(As,"A",{id:!0,class:!0,href:!0});var Th=r(Co);ba=a(Th,"SPAN",{});var wh=r(ba);_(pt.$$.fragment,wh),wh.forEach(o),Th.forEach(o),tl=i(As),ka=a(As,"SPAN",{});var Sh=r(ka);nl=d(Sh,"BlenderbotSmallTokenizerFast"),Sh.forEach(o),As.forEach(o),bs=i(t),Ge=a(t,"DIV",{class:!0});var Jn=r(Ge);_(ht.$$.fragment,Jn),al=i(Jn),mt=a(Jn,"P",{});var Ds=r(mt);rl=d(Ds,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ya=a(Ds,"EM",{});var xh=r(ya);sl=d(xh,"tokenizers"),xh.forEach(o),dl=d(Ds," library)."),Ds.forEach(o),ll=i(Jn),jo=a(Jn,"DIV",{class:!0});var Gs=r(jo);_(ut.$$.fragment,Gs),il=i(Gs),va=a(Gs,"P",{});var Bh=r(va);cl=d(Bh,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Bh.forEach(o),Gs.forEach(o),Jn.forEach(o),ks=i(t),bo=a(t,"H2",{class:!0});var Us=r(bo);Oo=a(Us,"A",{id:!0,class:!0,href:!0});var zh=r(Oo);Ta=a(zh,"SPAN",{});var Fh=r(Ta);_(ft.$$.fragment,Fh),Fh.forEach(o),zh.forEach(o),pl=i(Us),wa=a(Us,"SPAN",{});var qh=r(wa);hl=d(qh,"BlenderbotSmallModel"),qh.forEach(o),Us.forEach(o),ys=i(t),ze=a(t,"DIV",{class:!0});var Xo=r(ze);_(_t.$$.fragment,Xo),ml=i(Xo),gt=a(Xo,"P",{});var Ws=r(gt);ul=d(Ws,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=a(Ws,"A",{href:!0});var $h=r(jn);fl=d($h,"PreTrainedModel"),$h.forEach(o),_l=d(Ws,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ws.forEach(o),gl=i(Xo),bt=a(Xo,"P",{});var Rs=r(bt);bl=d(Rs,"This model is also a PyTorch "),kt=a(Rs,"A",{href:!0,rel:!0});var Eh=r(kt);kl=d(Eh,"torch.nn.Module"),Eh.forEach(o),yl=d(Rs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rs.forEach(o),vl=i(Xo),ge=a(Xo,"DIV",{class:!0});var oo=r(ge);_(yt.$$.fragment,oo),Tl=i(oo),ko=a(oo,"P",{});var Xn=r(ko);wl=d(Xn,"The "),On=a(Xn,"A",{href:!0});var Mh=r(On);Sl=d(Mh,"BlenderbotSmallModel"),Mh.forEach(o),xl=d(Xn," forward method, overrides the "),Sa=a(Xn,"CODE",{});var Ch=r(Sa);Bl=d(Ch,"__call__"),Ch.forEach(o),zl=d(Xn," special method."),Xn.forEach(o),Fl=i(oo),_(Po.$$.fragment,oo),ql=i(oo),xa=a(oo,"P",{});var jh=r(xa);$l=d(jh,"Example:"),jh.forEach(o),El=i(oo),_(vt.$$.fragment,oo),oo.forEach(o),Xo.forEach(o),vs=i(t),yo=a(t,"H2",{class:!0});var Hs=r(yo);Lo=a(Hs,"A",{id:!0,class:!0,href:!0});var Oh=r(Lo);Ba=a(Oh,"SPAN",{});var Ph=r(Ba);_(Tt.$$.fragment,Ph),Ph.forEach(o),Oh.forEach(o),Ml=i(Hs),za=a(Hs,"SPAN",{});var Lh=r(za);Cl=d(Lh,"BlenderbotSmallForConditionalGeneration"),Lh.forEach(o),Hs.forEach(o),Ts=i(t),Fe=a(t,"DIV",{class:!0});var Yo=r(Fe);_(wt.$$.fragment,Yo),jl=i(Yo),St=a(Yo,"P",{});var Ks=r(St);Ol=d(Ks,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=a(Ks,"A",{href:!0});var Nh=r(Pn);Pl=d(Nh,"PreTrainedModel"),Nh.forEach(o),Ll=d(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(o),Nl=i(Yo),xt=a(Yo,"P",{});var Vs=r(xt);Il=d(Vs,"This model is also a PyTorch "),Bt=a(Vs,"A",{href:!0,rel:!0});var Ih=r(Bt);Al=d(Ih,"torch.nn.Module"),Ih.forEach(o),Dl=d(Vs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vs.forEach(o),Gl=i(Yo),be=a(Yo,"DIV",{class:!0});var to=r(be);_(zt.$$.fragment,to),Ul=i(to),vo=a(to,"P",{});var Yn=r(vo);Wl=d(Yn,"The "),Ln=a(Yn,"A",{href:!0});var Ah=r(Ln);Rl=d(Ah,"BlenderbotSmallForConditionalGeneration"),Ah.forEach(o),Hl=d(Yn," forward method, overrides the "),Fa=a(Yn,"CODE",{});var Dh=r(Fa);Kl=d(Dh,"__call__"),Dh.forEach(o),Vl=d(Yn," special method."),Yn.forEach(o),Ql=i(to),_(No.$$.fragment,to),Jl=i(to),qa=a(to,"P",{});var Gh=r(qa);Xl=d(Gh,"Conversation example:"),Gh.forEach(o),Yl=i(to),_(Ft.$$.fragment,to),to.forEach(o),Yo.forEach(o),ws=i(t),To=a(t,"H2",{class:!0});var Qs=r(To);Io=a(Qs,"A",{id:!0,class:!0,href:!0});var Uh=r(Io);$a=a(Uh,"SPAN",{});var Wh=r($a);_(qt.$$.fragment,Wh),Wh.forEach(o),Uh.forEach(o),Zl=i(Qs),Ea=a(Qs,"SPAN",{});var Rh=r(Ea);ei=d(Rh,"BlenderbotSmallForCausalLM"),Rh.forEach(o),Qs.forEach(o),Ss=i(t),wo=a(t,"DIV",{class:!0});var Js=r(wo);_($t.$$.fragment,Js),oi=i(Js),Ve=a(Js,"DIV",{class:!0});var Zn=r(Ve);_(Et.$$.fragment,Zn),ti=i(Zn),Ma=a(Zn,"P",{});var Hh=r(Ma);ni=d(Hh,"Example:"),Hh.forEach(o),ai=i(Zn),_(Mt.$$.fragment,Zn),Zn.forEach(o),Js.forEach(o),xs=i(t),So=a(t,"H2",{class:!0});var Xs=r(So);Ao=a(Xs,"A",{id:!0,class:!0,href:!0});var Kh=r(Ao);Ca=a(Kh,"SPAN",{});var Vh=r(Ca);_(Ct.$$.fragment,Vh),Vh.forEach(o),Kh.forEach(o),ri=i(Xs),ja=a(Xs,"SPAN",{});var Qh=r(ja);si=d(Qh,"TFBlenderbotSmallModel"),Qh.forEach(o),Xs.forEach(o),Bs=i(t),he=a(t,"DIV",{class:!0});var no=r(he);_(jt.$$.fragment,no),di=i(no),Ot=a(no,"P",{});var Ys=r(Ot);li=d(Ys,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Ys,"A",{href:!0});var Jh=r(Nn);ii=d(Jh,"TFPreTrainedModel"),Jh.forEach(o),ci=d(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(o),pi=i(no),Pt=a(no,"P",{});var Zs=r(Pt);hi=d(Zs,"This model is also a "),Lt=a(Zs,"A",{href:!0,rel:!0});var Xh=r(Lt);mi=d(Xh,"tf.keras.Model"),Xh.forEach(o),ui=d(Zs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zs.forEach(o),fi=i(no),_(Do.$$.fragment,no),_i=i(no),ke=a(no,"DIV",{class:!0});var ao=r(ke);_(Nt.$$.fragment,ao),gi=i(ao),xo=a(ao,"P",{});var ea=r(xo);bi=d(ea,"The "),In=a(ea,"A",{href:!0});var Yh=r(In);ki=d(Yh,"TFBlenderbotSmallModel"),Yh.forEach(o),yi=d(ea," forward method, overrides the "),Oa=a(ea,"CODE",{});var Zh=r(Oa);vi=d(Zh,"__call__"),Zh.forEach(o),Ti=d(ea," special method."),ea.forEach(o),wi=i(ao),_(Go.$$.fragment,ao),Si=i(ao),Pa=a(ao,"P",{});var em=r(Pa);xi=d(em,"Example:"),em.forEach(o),Bi=i(ao),_(It.$$.fragment,ao),ao.forEach(o),no.forEach(o),zs=i(t),Bo=a(t,"H2",{class:!0});var ed=r(Bo);Uo=a(ed,"A",{id:!0,class:!0,href:!0});var om=r(Uo);La=a(om,"SPAN",{});var tm=r(La);_(At.$$.fragment,tm),tm.forEach(o),om.forEach(o),zi=i(ed),Na=a(ed,"SPAN",{});var nm=r(Na);Fi=d(nm,"TFBlenderbotSmallForConditionalGeneration"),nm.forEach(o),ed.forEach(o),Fs=i(t),me=a(t,"DIV",{class:!0});var ro=r(me);_(Dt.$$.fragment,ro),qi=i(ro),Gt=a(ro,"P",{});var od=r(Gt);$i=d(od,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(od,"A",{href:!0});var am=r(An);Ei=d(am,"TFPreTrainedModel"),am.forEach(o),Mi=d(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(o),Ci=i(ro),Ut=a(ro,"P",{});var td=r(Ut);ji=d(td,"This model is also a "),Wt=a(td,"A",{href:!0,rel:!0});var rm=r(Wt);Oi=d(rm,"tf.keras.Model"),rm.forEach(o),Pi=d(td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),td.forEach(o),Li=i(ro),_(Wo.$$.fragment,ro),Ni=i(ro),O=a(ro,"DIV",{class:!0});var H=r(O);_(Rt.$$.fragment,H),Ii=i(H),zo=a(H,"P",{});var oa=r(zo);Ai=d(oa,"The "),Dn=a(oa,"A",{href:!0});var sm=r(Dn);Di=d(sm,"TFBlenderbotSmallForConditionalGeneration"),sm.forEach(o),Gi=d(oa," forward method, overrides the "),Ia=a(oa,"CODE",{});var dm=r(Ia);Ui=d(dm,"__call__"),dm.forEach(o),Wi=d(oa," special method."),oa.forEach(o),Ri=i(H),_(Ro.$$.fragment,H),Hi=i(H),Aa=a(H,"P",{});var lm=r(Aa);Ki=d(lm,"Conversation example::"),lm.forEach(o),Vi=i(H),Da=a(H,"BLOCKQUOTE",{});var im=r(Da);Ga=a(im,"BLOCKQUOTE",{});var cm=r(Ga);Ua=a(cm,"BLOCKQUOTE",{});var pm=r(Ua);Wa=a(pm,"P",{});var hm=r(Wa);Qi=d(hm,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),hm.forEach(o),pm.forEach(o),cm.forEach(o),im.forEach(o),Ji=i(H),Ra=a(H,"BLOCKQUOTE",{});var mm=r(Ra);Ha=a(mm,"BLOCKQUOTE",{});var um=r(Ha);Ka=a(um,"BLOCKQUOTE",{});var fm=r(Ka);Va=a(fm,"P",{});var _m=r(Va);Xi=d(_m,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),_m.forEach(o),fm.forEach(o),um.forEach(o),mm.forEach(o),Yi=i(H),Qa=a(H,"BLOCKQUOTE",{});var gm=r(Qa);Ja=a(gm,"BLOCKQUOTE",{});var bm=r(Ja);Xa=a(bm,"BLOCKQUOTE",{});var km=r(Xa);Ya=a(km,"P",{});var ym=r(Ya);Zi=d(ym,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ym.forEach(o),km.forEach(o),bm.forEach(o),gm.forEach(o),ec=i(H),Za=a(H,"BLOCKQUOTE",{});var vm=r(Za);er=a(vm,"BLOCKQUOTE",{});var Tm=r(er);or=a(Tm,"BLOCKQUOTE",{});var wm=r(or);Ht=a(wm,"P",{});var nd=r(Ht);oc=d(nd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),tr=a(nd,"S",{});var Sm=r(tr);tc=d(Sm,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Sm.forEach(o),nc=d(nd,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),nd.forEach(o),wm.forEach(o),Tm.forEach(o),vm.forEach(o),ac=i(H),nr=a(H,"BLOCKQUOTE",{});var xm=r(nr);ar=a(xm,"BLOCKQUOTE",{});var Bm=r(ar);rr=a(Bm,"BLOCKQUOTE",{});var zm=r(rr);sr=a(zm,"P",{});var Fm=r(sr);rc=d(Fm,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Fm.forEach(o),zm.forEach(o),Bm.forEach(o),xm.forEach(o),H.forEach(o),ro.forEach(o),qs=i(t),Fo=a(t,"H2",{class:!0});var ad=r(Fo);Ho=a(ad,"A",{id:!0,class:!0,href:!0});var qm=r(Ho);dr=a(qm,"SPAN",{});var $m=r(dr);_(Kt.$$.fragment,$m),$m.forEach(o),qm.forEach(o),sc=i(ad),lr=a(ad,"SPAN",{});var Em=r(lr);dc=d(Em,"FlaxBlenderbotSmallModel"),Em.forEach(o),ad.forEach(o),$s=i(t),N=a(t,"DIV",{class:!0});var te=r(N);_(Vt.$$.fragment,te),lc=i(te),Qt=a(te,"P",{});var rd=r(Qt);ic=d(rd,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(rd,"A",{href:!0});var Mm=r(Gn);cc=d(Mm,"FlaxPreTrainedModel"),Mm.forEach(o),pc=d(rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd.forEach(o),hc=i(te),Jt=a(te,"P",{});var sd=r(Jt);mc=d(sd,`This model is also a Flax Linen
`),Xt=a(sd,"A",{href:!0,rel:!0});var Cm=r(Xt);uc=d(Cm,"flax.nn.Module"),Cm.forEach(o),fc=d(sd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sd.forEach(o),_c=i(te),ir=a(te,"P",{});var jm=r(ir);gc=d(jm,"Finally, this model supports inherent JAX features such as:"),jm.forEach(o),bc=i(te),Ue=a(te,"UL",{});var Zo=r(Ue);cr=a(Zo,"LI",{});var Om=r(cr);Yt=a(Om,"A",{href:!0,rel:!0});var Pm=r(Yt);kc=d(Pm,"Just-In-Time (JIT) compilation"),Pm.forEach(o),Om.forEach(o),yc=i(Zo),pr=a(Zo,"LI",{});var Lm=r(pr);Zt=a(Lm,"A",{href:!0,rel:!0});var Nm=r(Zt);vc=d(Nm,"Automatic Differentiation"),Nm.forEach(o),Lm.forEach(o),Tc=i(Zo),hr=a(Zo,"LI",{});var Im=r(hr);en=a(Im,"A",{href:!0,rel:!0});var Am=r(en);wc=d(Am,"Vectorization"),Am.forEach(o),Im.forEach(o),Sc=i(Zo),mr=a(Zo,"LI",{});var Dm=r(mr);on=a(Dm,"A",{href:!0,rel:!0});var Gm=r(on);xc=d(Gm,"Parallelization"),Gm.forEach(o),Dm.forEach(o),Zo.forEach(o),Bc=i(te),Qe=a(te,"DIV",{class:!0});var ta=r(Qe);_(tn.$$.fragment,ta),zc=i(ta),ur=a(ta,"P",{});var Um=r(ur);Fc=d(Um,"Example:"),Um.forEach(o),qc=i(ta),_(nn.$$.fragment,ta),ta.forEach(o),$c=i(te),Je=a(te,"DIV",{class:!0});var na=r(Je);_(an.$$.fragment,na),Ec=i(na),fr=a(na,"P",{});var Wm=r(fr);Mc=d(Wm,"Example:"),Wm.forEach(o),Cc=i(na),_(rn.$$.fragment,na),na.forEach(o),jc=i(te),Xe=a(te,"DIV",{class:!0});var aa=r(Xe);_(sn.$$.fragment,aa),Oc=i(aa),_r=a(aa,"P",{});var Rm=r(_r);Pc=d(Rm,"Example:"),Rm.forEach(o),Lc=i(aa),_(dn.$$.fragment,aa),aa.forEach(o),te.forEach(o),Es=i(t),qo=a(t,"H2",{class:!0});var dd=r(qo);Ko=a(dd,"A",{id:!0,class:!0,href:!0});var Hm=r(Ko);gr=a(Hm,"SPAN",{});var Km=r(gr);_(ln.$$.fragment,Km),Km.forEach(o),Hm.forEach(o),Nc=i(dd),br=a(dd,"SPAN",{});var Vm=r(br);Ic=d(Vm,"FlaxBlenderbotForConditionalGeneration"),Vm.forEach(o),dd.forEach(o),Ms=i(t),I=a(t,"DIV",{class:!0});var ne=r(I);_(cn.$$.fragment,ne),Ac=i(ne),pn=a(ne,"P",{});var ld=r(pn);Dc=d(ld,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=a(ld,"A",{href:!0});var Qm=r(Un);Gc=d(Qm,"FlaxPreTrainedModel"),Qm.forEach(o),Uc=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(o),Wc=i(ne),hn=a(ne,"P",{});var id=r(hn);Rc=d(id,`This model is also a Flax Linen
`),mn=a(id,"A",{href:!0,rel:!0});var Jm=r(mn);Hc=d(Jm,"flax.nn.Module"),Jm.forEach(o),Kc=d(id,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),id.forEach(o),Vc=i(ne),kr=a(ne,"P",{});var Xm=r(kr);Qc=d(Xm,"Finally, this model supports inherent JAX features such as:"),Xm.forEach(o),Jc=i(ne),We=a(ne,"UL",{});var et=r(We);yr=a(et,"LI",{});var Ym=r(yr);un=a(Ym,"A",{href:!0,rel:!0});var Zm=r(un);Xc=d(Zm,"Just-In-Time (JIT) compilation"),Zm.forEach(o),Ym.forEach(o),Yc=i(et),vr=a(et,"LI",{});var eu=r(vr);fn=a(eu,"A",{href:!0,rel:!0});var ou=r(fn);Zc=d(ou,"Automatic Differentiation"),ou.forEach(o),eu.forEach(o),ep=i(et),Tr=a(et,"LI",{});var tu=r(Tr);_n=a(tu,"A",{href:!0,rel:!0});var nu=r(_n);op=d(nu,"Vectorization"),nu.forEach(o),tu.forEach(o),tp=i(et),wr=a(et,"LI",{});var au=r(wr);gn=a(au,"A",{href:!0,rel:!0});var ru=r(gn);np=d(ru,"Parallelization"),ru.forEach(o),au.forEach(o),et.forEach(o),ap=i(ne),$=a(ne,"DIV",{class:!0});var E=r($);_(bn.$$.fragment,E),rp=i(E),$o=a(E,"P",{});var ra=r($o);sp=d(ra,"The "),Sr=a(ra,"CODE",{});var su=r(Sr);dp=d(su,"FlaxBlenderbotSmallPreTrainedModel"),su.forEach(o),lp=d(ra," forward method, overrides the "),xr=a(ra,"CODE",{});var du=r(xr);ip=d(du,"__call__"),du.forEach(o),cp=d(ra," special method."),ra.forEach(o),pp=i(E),_(Vo.$$.fragment,E),hp=i(E),Br=a(E,"P",{});var lu=r(Br);mp=d(lu,"Summarization example:"),lu.forEach(o),up=i(E),zr=a(E,"BLOCKQUOTE",{});var iu=r(zr);Fr=a(iu,"BLOCKQUOTE",{});var cu=r(Fr);qr=a(cu,"BLOCKQUOTE",{});var pu=r(qr);$r=a(pu,"P",{});var hu=r($r);fp=d(hu,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),hu.forEach(o),pu.forEach(o),cu.forEach(o),iu.forEach(o),_p=i(E),Er=a(E,"BLOCKQUOTE",{});var mu=r(Er);Mr=a(mu,"BLOCKQUOTE",{});var uu=r(Mr);Cr=a(uu,"BLOCKQUOTE",{});var fu=r(Cr);jr=a(fu,"P",{});var _u=r(jr);gp=d(_u,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),_u.forEach(o),fu.forEach(o),uu.forEach(o),mu.forEach(o),bp=i(E),Or=a(E,"BLOCKQUOTE",{});var gu=r(Or);Pr=a(gu,"BLOCKQUOTE",{});var bu=r(Pr);Lr=a(bu,"BLOCKQUOTE",{});var ku=r(Lr);Nr=a(ku,"P",{});var yu=r(Nr);kp=d(yu,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),yu.forEach(o),ku.forEach(o),bu.forEach(o),gu.forEach(o),yp=i(E),Ir=a(E,"BLOCKQUOTE",{});var vu=r(Ir);Ar=a(vu,"BLOCKQUOTE",{});var Tu=r(Ar);kn=a(Tu,"BLOCKQUOTE",{});var cd=r(kn);Qo=a(cd,"H1",{class:!0});var pd=r(Qo);Jo=a(pd,"A",{id:!0,class:!0,href:!0});var wu=r(Jo);Dr=a(wu,"SPAN",{});var Su=r(Dr);_(yn.$$.fragment,Su),Su.forEach(o),wu.forEach(o),vp=i(pd),Gr=a(pd,"SPAN",{});var xu=r(Gr);Tp=d(xu,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),xu.forEach(o),pd.forEach(o),wp=i(cd),Ur=a(cd,"P",{});var Bu=r(Ur);Sp=d(Bu,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Bu.forEach(o),cd.forEach(o),Tu.forEach(o),vu.forEach(o),xp=i(E),Wr=a(E,"P",{});var zu=r(Wr);Bp=d(zu,"Mask filling example:"),zu.forEach(o),zp=i(E),Rr=a(E,"BLOCKQUOTE",{});var Fu=r(Rr);Hr=a(Fu,"BLOCKQUOTE",{});var qu=r(Hr);Kr=a(qu,"BLOCKQUOTE",{});var $u=r(Kr);Vr=a($u,"P",{});var Eu=r(Vr);Fp=d(Eu,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Eu.forEach(o),$u.forEach(o),qu.forEach(o),Fu.forEach(o),qp=i(E),Qr=a(E,"BLOCKQUOTE",{});var Mu=r(Qr);Jr=a(Mu,"BLOCKQUOTE",{});var Cu=r(Jr);Xr=a(Cu,"BLOCKQUOTE",{});var ju=r(Xr);Yr=a(ju,"P",{});var Ou=r(Yr);$p=d(Ou,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Ou.forEach(o),ju.forEach(o),Cu.forEach(o),Mu.forEach(o),Ep=i(E),Zr=a(E,"BLOCKQUOTE",{});var Pu=r(Zr);es=a(Pu,"BLOCKQUOTE",{});var Lu=r(es);os=a(Lu,"BLOCKQUOTE",{});var Nu=r(os);ts=a(Nu,"P",{});var Iu=r(ts);Mp=d(Iu,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Iu.forEach(o),Nu.forEach(o),Lu.forEach(o),Pu.forEach(o),Cp=i(E),ns=a(E,"BLOCKQUOTE",{});var Au=r(ns);as=a(Au,"BLOCKQUOTE",{});var Du=r(as);rs=a(Du,"BLOCKQUOTE",{});var Gu=r(rs);ss=a(Gu,"P",{});var Uu=r(ss);jp=d(Uu,"tokenizer.decode(predictions).split()"),Uu.forEach(o),Gu.forEach(o),Du.forEach(o),Au.forEach(o),E.forEach(o),Op=i(ne),Ye=a(ne,"DIV",{class:!0});var sa=r(Ye);_(vn.$$.fragment,sa),Pp=i(sa),ds=a(sa,"P",{});var Wu=r(ds);Lp=d(Wu,"Example:"),Wu.forEach(o),Np=i(sa),_(Tn.$$.fragment,sa),sa.forEach(o),Ip=i(ne),Ze=a(ne,"DIV",{class:!0});var da=r(Ze);_(wn.$$.fragment,da),Ap=i(da),ls=a(da,"P",{});var Ru=r(ls);Dp=d(Ru,"Example:"),Ru.forEach(o),Gp=i(da),_(Sn.$$.fragment,da),da.forEach(o),ne.forEach(o),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(rf)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(v,"class","relative group"),c(U,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(K,"href","https://huggingface.co/facebook/blenderbot-90M"),c(K,"rel","nofollow"),c(Z,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(fe,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(Q,"class","relative group"),c(le,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(le,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(_e,"id","transformers.BlenderbotSmallConfig"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#transformers.BlenderbotSmallConfig"),c(ce,"class","relative group"),c(zn,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(tt,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(tt,"rel","nofollow"),c(Fn,"href","/docs/transformers/pr_16927/en/main_classes/configuration#transformers.PretrainedConfig"),c(qn,"href","/docs/transformers/pr_16927/en/main_classes/configuration#transformers.PretrainedConfig"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Eo,"id","transformers.BlenderbotSmallTokenizer"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.BlenderbotSmallTokenizer"),c(fo,"class","relative group"),c($n,"href","/docs/transformers/pr_16927/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mn,"href","../glossary#token-type-ids"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Co,"id","transformers.BlenderbotSmallTokenizerFast"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.BlenderbotSmallTokenizerFast"),c(go,"class","relative group"),c(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oo,"id","transformers.BlenderbotSmallModel"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.BlenderbotSmallModel"),c(bo,"class","relative group"),c(jn,"href","/docs/transformers/pr_16927/en/main_classes/model#transformers.PreTrainedModel"),c(kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(kt,"rel","nofollow"),c(On,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Lo,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(yo,"class","relative group"),c(Pn,"href","/docs/transformers/pr_16927/en/main_classes/model#transformers.PreTrainedModel"),c(Bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bt,"rel","nofollow"),c(Ln,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"id","transformers.BlenderbotSmallForCausalLM"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.BlenderbotSmallForCausalLM"),c(To,"class","relative group"),c(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.TFBlenderbotSmallModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.TFBlenderbotSmallModel"),c(So,"class","relative group"),c(Nn,"href","/docs/transformers/pr_16927/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Lt,"rel","nofollow"),c(In,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Uo,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(Bo,"class","relative group"),c(An,"href","/docs/transformers/pr_16927/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wt,"rel","nofollow"),c(Dn,"href","/docs/transformers/pr_16927/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ho,"id","transformers.FlaxBlenderbotSmallModel"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.FlaxBlenderbotSmallModel"),c(Fo,"class","relative group"),c(Gn,"href","/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Xt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Xt,"rel","nofollow"),c(Yt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Yt,"rel","nofollow"),c(Zt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zt,"rel","nofollow"),c(en,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(en,"rel","nofollow"),c(on,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(on,"rel","nofollow"),c(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ko,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(qo,"class","relative group"),c(Un,"href","/docs/transformers/pr_16927/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(mn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(mn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(un,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(Jo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Qo,"class","relative group"),c($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,m),p(t,z,h),p(t,v,h),e(v,T),e(T,x),g(S,x,null),e(v,w),e(v,F),e(F,Ce),p(t,ue,h),p(t,B,h),e(B,je),e(B,U),e(U,Oe),e(B,Pe),e(B,W),e(W,Le),e(B,Ne),e(B,K),e(K,V),e(B,Ie),e(B,Z),e(Z,C),e(B,P),e(B,fe),e(fe,ae),p(t,$e,h),p(t,Q,h),e(Q,A),e(A,Te),g(re,Te,null),e(Q,L),e(Q,we),e(we,se),p(t,Ee,h),p(t,ee,h),e(ee,de),e(ee,le),e(le,Ae),e(ee,J),p(t,Me,h),p(t,R,h),e(R,De),p(t,u,h),p(t,q,h),e(q,ie),e(ie,lo),p(t,Re,h),p(t,j,h),e(j,io),e(j,Se),e(Se,co),e(j,X),e(j,D),e(D,po),e(j,ho),p(t,oe,h),p(t,ce,h),e(ce,_e),e(_e,xe),g(Be,xe,null),e(ce,hd),e(ce,la),e(la,md),p(t,us,h),p(t,pe,h),g(ot,pe,null),e(pe,ud),e(pe,mo),e(mo,fd),e(mo,zn),e(zn,_d),e(mo,gd),e(mo,tt),e(tt,bd),e(mo,kd),e(pe,yd),e(pe,uo),e(uo,vd),e(uo,Fn),e(Fn,Td),e(uo,wd),e(uo,qn),e(qn,Sd),e(uo,xd),e(pe,Bd),e(pe,ia),e(ia,zd),e(pe,Fd),g(nt,pe,null),p(t,fs,h),p(t,fo,h),e(fo,Eo),e(Eo,ca),g(at,ca,null),e(fo,qd),e(fo,pa),e(pa,$d),p(t,_s,h),p(t,G,h),g(rt,G,null),e(G,Ed),e(G,ha),e(ha,Md),e(G,Cd),e(G,st),e(st,jd),e(st,$n),e($n,Od),e(st,Pd),e(G,Ld),e(G,He),g(dt,He,null),e(He,Nd),e(He,ma),e(ma,Id),e(He,Ad),e(He,ua),e(ua,Dd),e(G,Gd),e(G,Mo),g(lt,Mo,null),e(Mo,Ud),e(Mo,_o),e(_o,Wd),e(_o,fa),e(fa,Rd),e(_o,Hd),e(_o,_a),e(_a,Kd),e(_o,Vd),e(G,Qd),e(G,Ke),g(it,Ke,null),e(Ke,Jd),e(Ke,En),e(En,Xd),e(En,Mn),e(Mn,Yd),e(Ke,Zd),e(Ke,ga),e(ga,el),e(G,ol),e(G,Cn),g(ct,Cn,null),p(t,gs,h),p(t,go,h),e(go,Co),e(Co,ba),g(pt,ba,null),e(go,tl),e(go,ka),e(ka,nl),p(t,bs,h),p(t,Ge,h),g(ht,Ge,null),e(Ge,al),e(Ge,mt),e(mt,rl),e(mt,ya),e(ya,sl),e(mt,dl),e(Ge,ll),e(Ge,jo),g(ut,jo,null),e(jo,il),e(jo,va),e(va,cl),p(t,ks,h),p(t,bo,h),e(bo,Oo),e(Oo,Ta),g(ft,Ta,null),e(bo,pl),e(bo,wa),e(wa,hl),p(t,ys,h),p(t,ze,h),g(_t,ze,null),e(ze,ml),e(ze,gt),e(gt,ul),e(gt,jn),e(jn,fl),e(gt,_l),e(ze,gl),e(ze,bt),e(bt,bl),e(bt,kt),e(kt,kl),e(bt,yl),e(ze,vl),e(ze,ge),g(yt,ge,null),e(ge,Tl),e(ge,ko),e(ko,wl),e(ko,On),e(On,Sl),e(ko,xl),e(ko,Sa),e(Sa,Bl),e(ko,zl),e(ge,Fl),g(Po,ge,null),e(ge,ql),e(ge,xa),e(xa,$l),e(ge,El),g(vt,ge,null),p(t,vs,h),p(t,yo,h),e(yo,Lo),e(Lo,Ba),g(Tt,Ba,null),e(yo,Ml),e(yo,za),e(za,Cl),p(t,Ts,h),p(t,Fe,h),g(wt,Fe,null),e(Fe,jl),e(Fe,St),e(St,Ol),e(St,Pn),e(Pn,Pl),e(St,Ll),e(Fe,Nl),e(Fe,xt),e(xt,Il),e(xt,Bt),e(Bt,Al),e(xt,Dl),e(Fe,Gl),e(Fe,be),g(zt,be,null),e(be,Ul),e(be,vo),e(vo,Wl),e(vo,Ln),e(Ln,Rl),e(vo,Hl),e(vo,Fa),e(Fa,Kl),e(vo,Vl),e(be,Ql),g(No,be,null),e(be,Jl),e(be,qa),e(qa,Xl),e(be,Yl),g(Ft,be,null),p(t,ws,h),p(t,To,h),e(To,Io),e(Io,$a),g(qt,$a,null),e(To,Zl),e(To,Ea),e(Ea,ei),p(t,Ss,h),p(t,wo,h),g($t,wo,null),e(wo,oi),e(wo,Ve),g(Et,Ve,null),e(Ve,ti),e(Ve,Ma),e(Ma,ni),e(Ve,ai),g(Mt,Ve,null),p(t,xs,h),p(t,So,h),e(So,Ao),e(Ao,Ca),g(Ct,Ca,null),e(So,ri),e(So,ja),e(ja,si),p(t,Bs,h),p(t,he,h),g(jt,he,null),e(he,di),e(he,Ot),e(Ot,li),e(Ot,Nn),e(Nn,ii),e(Ot,ci),e(he,pi),e(he,Pt),e(Pt,hi),e(Pt,Lt),e(Lt,mi),e(Pt,ui),e(he,fi),g(Do,he,null),e(he,_i),e(he,ke),g(Nt,ke,null),e(ke,gi),e(ke,xo),e(xo,bi),e(xo,In),e(In,ki),e(xo,yi),e(xo,Oa),e(Oa,vi),e(xo,Ti),e(ke,wi),g(Go,ke,null),e(ke,Si),e(ke,Pa),e(Pa,xi),e(ke,Bi),g(It,ke,null),p(t,zs,h),p(t,Bo,h),e(Bo,Uo),e(Uo,La),g(At,La,null),e(Bo,zi),e(Bo,Na),e(Na,Fi),p(t,Fs,h),p(t,me,h),g(Dt,me,null),e(me,qi),e(me,Gt),e(Gt,$i),e(Gt,An),e(An,Ei),e(Gt,Mi),e(me,Ci),e(me,Ut),e(Ut,ji),e(Ut,Wt),e(Wt,Oi),e(Ut,Pi),e(me,Li),g(Wo,me,null),e(me,Ni),e(me,O),g(Rt,O,null),e(O,Ii),e(O,zo),e(zo,Ai),e(zo,Dn),e(Dn,Di),e(zo,Gi),e(zo,Ia),e(Ia,Ui),e(zo,Wi),e(O,Ri),g(Ro,O,null),e(O,Hi),e(O,Aa),e(Aa,Ki),e(O,Vi),e(O,Da),e(Da,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Qi),e(O,Ji),e(O,Ra),e(Ra,Ha),e(Ha,Ka),e(Ka,Va),e(Va,Xi),e(O,Yi),e(O,Qa),e(Qa,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Zi),e(O,ec),e(O,Za),e(Za,er),e(er,or),e(or,Ht),e(Ht,oc),e(Ht,tr),e(tr,tc),e(Ht,nc),e(O,ac),e(O,nr),e(nr,ar),e(ar,rr),e(rr,sr),e(sr,rc),p(t,qs,h),p(t,Fo,h),e(Fo,Ho),e(Ho,dr),g(Kt,dr,null),e(Fo,sc),e(Fo,lr),e(lr,dc),p(t,$s,h),p(t,N,h),g(Vt,N,null),e(N,lc),e(N,Qt),e(Qt,ic),e(Qt,Gn),e(Gn,cc),e(Qt,pc),e(N,hc),e(N,Jt),e(Jt,mc),e(Jt,Xt),e(Xt,uc),e(Jt,fc),e(N,_c),e(N,ir),e(ir,gc),e(N,bc),e(N,Ue),e(Ue,cr),e(cr,Yt),e(Yt,kc),e(Ue,yc),e(Ue,pr),e(pr,Zt),e(Zt,vc),e(Ue,Tc),e(Ue,hr),e(hr,en),e(en,wc),e(Ue,Sc),e(Ue,mr),e(mr,on),e(on,xc),e(N,Bc),e(N,Qe),g(tn,Qe,null),e(Qe,zc),e(Qe,ur),e(ur,Fc),e(Qe,qc),g(nn,Qe,null),e(N,$c),e(N,Je),g(an,Je,null),e(Je,Ec),e(Je,fr),e(fr,Mc),e(Je,Cc),g(rn,Je,null),e(N,jc),e(N,Xe),g(sn,Xe,null),e(Xe,Oc),e(Xe,_r),e(_r,Pc),e(Xe,Lc),g(dn,Xe,null),p(t,Es,h),p(t,qo,h),e(qo,Ko),e(Ko,gr),g(ln,gr,null),e(qo,Nc),e(qo,br),e(br,Ic),p(t,Ms,h),p(t,I,h),g(cn,I,null),e(I,Ac),e(I,pn),e(pn,Dc),e(pn,Un),e(Un,Gc),e(pn,Uc),e(I,Wc),e(I,hn),e(hn,Rc),e(hn,mn),e(mn,Hc),e(hn,Kc),e(I,Vc),e(I,kr),e(kr,Qc),e(I,Jc),e(I,We),e(We,yr),e(yr,un),e(un,Xc),e(We,Yc),e(We,vr),e(vr,fn),e(fn,Zc),e(We,ep),e(We,Tr),e(Tr,_n),e(_n,op),e(We,tp),e(We,wr),e(wr,gn),e(gn,np),e(I,ap),e(I,$),g(bn,$,null),e($,rp),e($,$o),e($o,sp),e($o,Sr),e(Sr,dp),e($o,lp),e($o,xr),e(xr,ip),e($o,cp),e($,pp),g(Vo,$,null),e($,hp),e($,Br),e(Br,mp),e($,up),e($,zr),e(zr,Fr),e(Fr,qr),e(qr,$r),e($r,fp),e($,_p),e($,Er),e(Er,Mr),e(Mr,Cr),e(Cr,jr),e(jr,gp),e($,bp),e($,Or),e(Or,Pr),e(Pr,Lr),e(Lr,Nr),e(Nr,kp),e($,yp),e($,Ir),e(Ir,Ar),e(Ar,kn),e(kn,Qo),e(Qo,Jo),e(Jo,Dr),g(yn,Dr,null),e(Qo,vp),e(Qo,Gr),e(Gr,Tp),e(kn,wp),e(kn,Ur),e(Ur,Sp),e($,xp),e($,Wr),e(Wr,Bp),e($,zp),e($,Rr),e(Rr,Hr),e(Hr,Kr),e(Kr,Vr),e(Vr,Fp),e($,qp),e($,Qr),e(Qr,Jr),e(Jr,Xr),e(Xr,Yr),e(Yr,$p),e($,Ep),e($,Zr),e(Zr,es),e(es,os),e(os,ts),e(ts,Mp),e($,Cp),e($,ns),e(ns,as),e(as,rs),e(rs,ss),e(ss,jp),e(I,Op),e(I,Ye),g(vn,Ye,null),e(Ye,Pp),e(Ye,ds),e(ds,Lp),e(Ye,Np),g(Tn,Ye,null),e(I,Ip),e(I,Ze),g(wn,Ze,null),e(Ze,Ap),e(Ze,ls),e(ls,Dp),e(Ze,Gp),g(Sn,Ze,null),Cs=!0},p(t,[h]){const xn={};h&2&&(xn.$$scope={dirty:h,ctx:t}),Po.$set(xn);const is={};h&2&&(is.$$scope={dirty:h,ctx:t}),No.$set(is);const cs={};h&2&&(cs.$$scope={dirty:h,ctx:t}),Do.$set(cs);const ps={};h&2&&(ps.$$scope={dirty:h,ctx:t}),Go.$set(ps);const ye={};h&2&&(ye.$$scope={dirty:h,ctx:t}),Wo.$set(ye);const hs={};h&2&&(hs.$$scope={dirty:h,ctx:t}),Ro.$set(hs);const ms={};h&2&&(ms.$$scope={dirty:h,ctx:t}),Vo.$set(ms)},i(t){Cs||(b(S.$$.fragment,t),b(re.$$.fragment,t),b(Be.$$.fragment,t),b(ot.$$.fragment,t),b(nt.$$.fragment,t),b(at.$$.fragment,t),b(rt.$$.fragment,t),b(dt.$$.fragment,t),b(lt.$$.fragment,t),b(it.$$.fragment,t),b(ct.$$.fragment,t),b(pt.$$.fragment,t),b(ht.$$.fragment,t),b(ut.$$.fragment,t),b(ft.$$.fragment,t),b(_t.$$.fragment,t),b(yt.$$.fragment,t),b(Po.$$.fragment,t),b(vt.$$.fragment,t),b(Tt.$$.fragment,t),b(wt.$$.fragment,t),b(zt.$$.fragment,t),b(No.$$.fragment,t),b(Ft.$$.fragment,t),b(qt.$$.fragment,t),b($t.$$.fragment,t),b(Et.$$.fragment,t),b(Mt.$$.fragment,t),b(Ct.$$.fragment,t),b(jt.$$.fragment,t),b(Do.$$.fragment,t),b(Nt.$$.fragment,t),b(Go.$$.fragment,t),b(It.$$.fragment,t),b(At.$$.fragment,t),b(Dt.$$.fragment,t),b(Wo.$$.fragment,t),b(Rt.$$.fragment,t),b(Ro.$$.fragment,t),b(Kt.$$.fragment,t),b(Vt.$$.fragment,t),b(tn.$$.fragment,t),b(nn.$$.fragment,t),b(an.$$.fragment,t),b(rn.$$.fragment,t),b(sn.$$.fragment,t),b(dn.$$.fragment,t),b(ln.$$.fragment,t),b(cn.$$.fragment,t),b(bn.$$.fragment,t),b(Vo.$$.fragment,t),b(yn.$$.fragment,t),b(vn.$$.fragment,t),b(Tn.$$.fragment,t),b(wn.$$.fragment,t),b(Sn.$$.fragment,t),Cs=!0)},o(t){k(S.$$.fragment,t),k(re.$$.fragment,t),k(Be.$$.fragment,t),k(ot.$$.fragment,t),k(nt.$$.fragment,t),k(at.$$.fragment,t),k(rt.$$.fragment,t),k(dt.$$.fragment,t),k(lt.$$.fragment,t),k(it.$$.fragment,t),k(ct.$$.fragment,t),k(pt.$$.fragment,t),k(ht.$$.fragment,t),k(ut.$$.fragment,t),k(ft.$$.fragment,t),k(_t.$$.fragment,t),k(yt.$$.fragment,t),k(Po.$$.fragment,t),k(vt.$$.fragment,t),k(Tt.$$.fragment,t),k(wt.$$.fragment,t),k(zt.$$.fragment,t),k(No.$$.fragment,t),k(Ft.$$.fragment,t),k(qt.$$.fragment,t),k($t.$$.fragment,t),k(Et.$$.fragment,t),k(Mt.$$.fragment,t),k(Ct.$$.fragment,t),k(jt.$$.fragment,t),k(Do.$$.fragment,t),k(Nt.$$.fragment,t),k(Go.$$.fragment,t),k(It.$$.fragment,t),k(At.$$.fragment,t),k(Dt.$$.fragment,t),k(Wo.$$.fragment,t),k(Rt.$$.fragment,t),k(Ro.$$.fragment,t),k(Kt.$$.fragment,t),k(Vt.$$.fragment,t),k(tn.$$.fragment,t),k(nn.$$.fragment,t),k(an.$$.fragment,t),k(rn.$$.fragment,t),k(sn.$$.fragment,t),k(dn.$$.fragment,t),k(ln.$$.fragment,t),k(cn.$$.fragment,t),k(bn.$$.fragment,t),k(Vo.$$.fragment,t),k(yn.$$.fragment,t),k(vn.$$.fragment,t),k(Tn.$$.fragment,t),k(wn.$$.fragment,t),k(Sn.$$.fragment,t),Cs=!1},d(t){o(m),t&&o(z),t&&o(v),y(S),t&&o(ue),t&&o(B),t&&o($e),t&&o(Q),y(re),t&&o(Ee),t&&o(ee),t&&o(Me),t&&o(R),t&&o(u),t&&o(q),t&&o(Re),t&&o(j),t&&o(oe),t&&o(ce),y(Be),t&&o(us),t&&o(pe),y(ot),y(nt),t&&o(fs),t&&o(fo),y(at),t&&o(_s),t&&o(G),y(rt),y(dt),y(lt),y(it),y(ct),t&&o(gs),t&&o(go),y(pt),t&&o(bs),t&&o(Ge),y(ht),y(ut),t&&o(ks),t&&o(bo),y(ft),t&&o(ys),t&&o(ze),y(_t),y(yt),y(Po),y(vt),t&&o(vs),t&&o(yo),y(Tt),t&&o(Ts),t&&o(Fe),y(wt),y(zt),y(No),y(Ft),t&&o(ws),t&&o(To),y(qt),t&&o(Ss),t&&o(wo),y($t),y(Et),y(Mt),t&&o(xs),t&&o(So),y(Ct),t&&o(Bs),t&&o(he),y(jt),y(Do),y(Nt),y(Go),y(It),t&&o(zs),t&&o(Bo),y(At),t&&o(Fs),t&&o(me),y(Dt),y(Wo),y(Rt),y(Ro),t&&o(qs),t&&o(Fo),y(Kt),t&&o($s),t&&o(N),y(Vt),y(tn),y(nn),y(an),y(rn),y(sn),y(dn),t&&o(Es),t&&o(qo),y(ln),t&&o(Ms),t&&o(I),y(cn),y(bn),y(Vo),y(yn),y(vn),y(Tn),y(wn),y(Sn)}}}const rf={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function sf(Y){return Ju(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mf extends Hu{constructor(m){super();Ku(this,m,sf,af,Vu,{})}}export{mf as default,rf as metadata};
