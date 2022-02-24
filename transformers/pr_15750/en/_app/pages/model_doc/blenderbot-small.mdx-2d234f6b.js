import{S as ff,i as _f,s as gf,e as o,k as l,w as f,t as s,L as bf,c as n,d as t,m as i,a,x as _,h as d,b as c,J as e,g as p,y as g,q as b,o as k,B as v}from"../../chunks/vendor-9e2b328e.js";import{T as zn}from"../../chunks/Tip-76f97a76.js";import{D as M}from"../../chunks/Docstring-50fd6873.js";import{C as Ft}from"../../chunks/CodeBlock-88e23343.js";import{I as Fe}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function kf(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function vf(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function yf(H){let h,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,C,O,_e,re,$e,J,I,Te,se,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge;return{c(){h=o("p"),x=s("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=s("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=o("p"),je=s("This second option is useful when using "),U=o("code"),Oe=s("tf.keras.Model.fit"),Le=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=s("model(inputs)"),Ae=s("."),Q=l(),V=o("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=o("ul"),O=o("li"),_e=s("a single Tensor with "),re=o("code"),$e=s("input_ids"),J=s(" only and nothing else: "),I=o("code"),Te=s("model(input_ids)"),se=l(),L=o("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),Ee=s("model([input_ids, attention_mask])"),ee=s(" or "),le=o("code"),ie=s("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=n(m,"P",{});var F=a(h);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(m),T=n(m,"UL",{});var ce=a(T);B=n(ce,"LI",{});var st=a(B);S=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),fe=i(m),z=n(m,"P",{});var P=a(z);je=d(P,"This second option is useful when using "),U=n(P,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(P,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ae=d(P,"."),P.forEach(t),Q=i(m),V=n(m,"P",{});var lt=a(V);Ie=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(m),C=n(m,"UL",{});var Y=a(C);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),re=n(D,"CODE",{});var it=a(re);$e=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var ct=a(I);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),se=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);Ee=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(m,F){p(m,h,F),e(h,x),p(m,y,F),p(m,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(m,fe,F),p(m,z,F),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),p(m,Q,F),p(m,V,F),e(V,Ie),p(m,Z,F),p(m,C,F),e(C,O),e(O,_e),e(O,re),e(re,$e),e(O,J),e(O,I),e(I,Te),e(C,se),e(C,L),e(L,we),e(L,de),e(de,Ee),e(L,ee),e(L,le),e(le,ie),e(C,De),e(C,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&t(h),m&&t(y),m&&t(T),m&&t(fe),m&&t(z),m&&t(Q),m&&t(V),m&&t(Z),m&&t(C)}}}function Tf(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function wf(H){let h,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,C,O,_e,re,$e,J,I,Te,se,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge;return{c(){h=o("p"),x=s("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=s("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=o("p"),je=s("This second option is useful when using "),U=o("code"),Oe=s("tf.keras.Model.fit"),Le=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=s("model(inputs)"),Ae=s("."),Q=l(),V=o("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=o("ul"),O=o("li"),_e=s("a single Tensor with "),re=o("code"),$e=s("input_ids"),J=s(" only and nothing else: "),I=o("code"),Te=s("model(input_ids)"),se=l(),L=o("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),Ee=s("model([input_ids, attention_mask])"),ee=s(" or "),le=o("code"),ie=s("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=n(m,"P",{});var F=a(h);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(m),T=n(m,"UL",{});var ce=a(T);B=n(ce,"LI",{});var st=a(B);S=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),fe=i(m),z=n(m,"P",{});var P=a(z);je=d(P,"This second option is useful when using "),U=n(P,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(P,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ae=d(P,"."),P.forEach(t),Q=i(m),V=n(m,"P",{});var lt=a(V);Ie=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(m),C=n(m,"UL",{});var Y=a(C);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),re=n(D,"CODE",{});var it=a(re);$e=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var ct=a(I);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),se=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);Ee=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(m,F){p(m,h,F),e(h,x),p(m,y,F),p(m,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(m,fe,F),p(m,z,F),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),p(m,Q,F),p(m,V,F),e(V,Ie),p(m,Z,F),p(m,C,F),e(C,O),e(O,_e),e(O,re),e(re,$e),e(O,J),e(O,I),e(I,Te),e(C,se),e(C,L),e(L,we),e(L,de),e(de,Ee),e(L,ee),e(L,le),e(le,ie),e(C,De),e(C,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&t(h),m&&t(y),m&&t(T),m&&t(fe),m&&t(z),m&&t(Q),m&&t(V),m&&t(Z),m&&t(C)}}}function Sf(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function Bf(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function zf(H){let h,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,C,O,_e,re,$e,J,I,Te,se,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge,m,F,ce,st,Ke,P,dt,Se,lt,Y,D,it,ct,te,pe,ge,Be,ze,yd,la,Td,Ts,ue,eo,wd,pt,Sd,xn,Bd,zd,to,xd,qd,Fd,ut,$d,qn,Ed,Md,Fn,Cd,Pd,jd,ia,Od,Ld,oo,ws,ht,$t,ca,no,Nd,pa,Ad,Ss,G,ao,Id,ua,Dd,Gd,ro,Ud,$n,Wd,Rd,Kd,He,so,Hd,ha,Qd,Vd,ma,Jd,Xd,Et,lo,Yd,mt,Zd,fa,el,tl,_a,ol,nl,al,Qe,io,rl,En,sl,Mn,dl,ll,ga,il,cl,Cn,co,Bs,ft,Mt,ba,po,pl,ka,ul,zs,Ue,uo,hl,ho,ml,va,fl,_l,gl,Ct,mo,bl,ya,kl,xs,_t,Pt,Ta,fo,vl,wa,yl,qs,xe,_o,Tl,go,wl,Pn,Sl,Bl,zl,bo,xl,ko,ql,Fl,$l,be,vo,El,gt,Ml,jn,Cl,Pl,Sa,jl,Ol,Ll,jt,Nl,Ba,Al,Il,yo,Fs,bt,Ot,za,To,Dl,xa,Gl,$s,qe,wo,Ul,So,Wl,On,Rl,Kl,Hl,Bo,Ql,zo,Vl,Jl,Xl,oe,xo,Yl,kt,Zl,Ln,ei,ti,qa,oi,ni,ai,Lt,ri,Fa,si,di,$a,Ea,Ma,Ca,li,ii,Pa,ja,Oa,qo,ci,La,pi,ui,Es,vt,Nt,Na,Fo,hi,Aa,mi,Ms,yt,$o,fi,Ve,Eo,_i,Ia,gi,bi,Mo,Cs,Tt,At,Da,Co,ki,Ga,vi,Ps,he,Po,yi,jo,Ti,Nn,wi,Si,Bi,Oo,zi,Lo,xi,qi,Fi,It,$i,ke,No,Ei,wt,Mi,An,Ci,Pi,Ua,ji,Oi,Li,Dt,Ni,Wa,Ai,Ii,Ao,js,St,Gt,Ra,Io,Di,Ka,Gi,Os,me,Do,Ui,Go,Wi,In,Ri,Ki,Hi,Uo,Qi,Wo,Vi,Ji,Xi,Ut,Yi,j,Ro,Zi,Bt,ec,Dn,tc,oc,Ha,nc,ac,rc,Wt,sc,Qa,dc,lc,Va,Ja,Xa,Ya,ic,cc,Za,er,tr,or,pc,uc,nr,ar,rr,sr,hc,mc,dr,lr,ir,Ko,fc,cr,_c,gc,bc,pr,ur,hr,mr,kc,Ls,zt,Rt,fr,Ho,vc,_r,yc,Ns,N,Qo,Tc,Vo,wc,Gn,Sc,Bc,zc,Jo,xc,Xo,qc,Fc,$c,gr,Ec,Mc,We,br,Yo,Cc,Pc,kr,Zo,jc,Oc,vr,en,Lc,Nc,yr,tn,Ac,Ic,Je,on,Dc,Tr,Gc,Uc,nn,Wc,Xe,an,Rc,wr,Kc,Hc,rn,Qc,Ye,sn,Vc,Sr,Jc,Xc,dn,As,xt,Kt,Br,ln,Yc,zr,Zc,Is,A,cn,ep,pn,tp,Un,op,np,ap,un,rp,hn,sp,dp,lp,xr,ip,cp,Re,qr,mn,pp,up,Fr,fn,hp,mp,$r,_n,fp,_p,Er,gn,gp,bp,$,bn,kp,qt,vp,Mr,yp,Tp,Cr,wp,Sp,Bp,Ht,zp,Pr,xp,qp,jr,Or,Lr,Nr,Fp,$p,Ar,Ir,Dr,Gr,Ep,Mp,Ur,Wr,Rr,Kr,Cp,Pp,Hr,Qr,kn,Qt,Vt,Vr,vn,jp,Jr,Op,Lp,Xr,Np,Ap,Yr,Ip,Dp,Zr,es,ts,os,Gp,Up,ns,as,rs,ss,Wp,Rp,ds,ls,is,cs,Kp,Hp,ps,us,hs,ms,Qp,Vp,Ze,yn,Jp,fs,Xp,Yp,Tn,Zp,et,wn,eu,_s,tu,ou,Sn,Ds;return S=new Fe({}),se=new Fe({}),ze=new Fe({}),eo=new M({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),oo=new Ft({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

# Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration
configuration = BlenderbotSmallConfig()

# Initializing a model from the facebook/blenderbot_small-90M style configuration
model = BlenderbotSmallModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallModel, BlenderbotSmallConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),no=new Fe({}),ao=new M({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_15750/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),so=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/tokenization_utils_base.py#L2884",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lo=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/tokenization_utils.py#L843",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),io=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),co=new M({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),po=new Fe({}),uo=new M({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),mo=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new Fe({}),_o=new M({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1058",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vo=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1085",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jt=new zn({props:{$$slots:{default:[kf]},$$scope:{ctx:H}}}),yo=new Ft({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),To=new Fe({}),wo=new M({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1184",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xo=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1228",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lt=new zn({props:{$$slots:{default:[vf]},$$scope:{ctx:H}}}),Fo=new Fe({}),$o=new M({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1364"}}),Eo=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1395",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Ft({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = BlenderbotSmallForCausalLM.from_pretrained(
    "facebook/blenderbot_small-90M", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Co=new Fe({}),Po=new M({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1174",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),It=new zn({props:{$$slots:{default:[yf]},$$scope:{ctx:H}}}),No=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1186",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dt=new zn({props:{$$slots:{default:[Tf]},$$scope:{ctx:H}}}),Ao=new Ft({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
import tensorflow as tf

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = TFBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Io=new Fe({}),Do=new M({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1281",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ut=new zn({props:{$$slots:{default:[wf]},$$scope:{ctx:H}}}),Ro=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1314",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new zn({props:{$$slots:{default:[Sf]},$$scope:{ctx:H}}}),Ho=new Fe({}),Qo=new M({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1218",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),on=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new Ft({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new Ft({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),sn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1038",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new Ft({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ln=new Fe({}),cn=new M({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1306",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),bn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ht=new zn({props:{$$slots:{default:[Bf]},$$scope:{ctx:H}}}),vn=new Fe({}),yn=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new Ft({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),wn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1310",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15750/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new Ft({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=o("meta"),x=l(),y=o("h1"),T=o("a"),B=o("span"),f(S.$$.fragment),w=l(),q=o("span"),Pe=s("Blenderbot Small"),fe=l(),z=o("p"),je=s("Note that "),U=o("a"),Oe=s("BlenderbotSmallModel"),Le=s(` and
`),W=o("a"),Ne=s("BlenderbotSmallForConditionalGeneration"),Ae=s(` are only used in combination with the checkpoint
`),Q=o("a"),V=s("facebook/blenderbot-90M"),Ie=s(`. Larger Blenderbot checkpoints should
instead be used with `),Z=o("a"),C=s("BlenderbotModel"),O=s(` and
`),_e=o("a"),re=s("BlenderbotForConditionalGeneration"),$e=l(),J=o("h2"),I=o("a"),Te=o("span"),f(se.$$.fragment),L=l(),we=o("span"),de=s("Overview"),Ee=l(),ee=o("p"),le=s("The Blender chatbot model was proposed in "),ie=o("a"),De=s("Recipes for building an open-domain chatbot"),X=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=o("p"),Ge=s("The abstract of the paper is the following:"),m=l(),F=o("p"),ce=o("em"),st=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ke=l(),P=o("p"),dt=s("This model was contributed by "),Se=o("a"),lt=s("patrickvonplaten"),Y=s(`. The authors\u2019 code can be
found `),D=o("a"),it=s("here"),ct=s(" ."),te=l(),pe=o("h2"),ge=o("a"),Be=o("span"),f(ze.$$.fragment),yd=l(),la=o("span"),Td=s("BlenderbotSmallConfig"),Ts=l(),ue=o("div"),f(eo.$$.fragment),wd=l(),pt=o("p"),Sd=s("This is the configuration class to store the configuration of a "),xn=o("a"),Bd=s("BlenderbotSmallModel"),zd=s(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),to=o("a"),xd=s("facebook/blenderbot_small-90M"),qd=s(" architecture."),Fd=l(),ut=o("p"),$d=s("Configuration objects inherit from "),qn=o("a"),Ed=s("PretrainedConfig"),Md=s(` and can be used to control the model outputs. Read the
documentation from `),Fn=o("a"),Cd=s("PretrainedConfig"),Pd=s(" for more information."),jd=l(),ia=o("p"),Od=s("Example:"),Ld=l(),f(oo.$$.fragment),ws=l(),ht=o("h2"),$t=o("a"),ca=o("span"),f(no.$$.fragment),Nd=l(),pa=o("span"),Ad=s("BlenderbotSmallTokenizer"),Ss=l(),G=o("div"),f(ao.$$.fragment),Id=l(),ua=o("p"),Dd=s("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Gd=l(),ro=o("p"),Ud=s("This tokenizer inherits from "),$n=o("a"),Wd=s("PreTrainedTokenizer"),Rd=s(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Kd=l(),He=o("div"),f(so.$$.fragment),Hd=l(),ha=o("p"),Qd=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Vd=l(),ma=o("p"),Jd=s("This implementation does not add special tokens and this method should be overridden in a subclass."),Xd=l(),Et=o("div"),f(lo.$$.fragment),Yd=l(),mt=o("p"),Zd=s(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=o("code"),el=s("prepare_for_model"),tl=s(" or "),_a=o("code"),ol=s("encode_plus"),nl=s(" methods."),al=l(),Qe=o("div"),f(io.$$.fragment),rl=l(),En=o("p"),sl=s("Create the token type IDs corresponding to the sequences passed. "),Mn=o("a"),dl=s(`What are token type
IDs?`),ll=l(),ga=o("p"),il=s("Should be overridden in a subclass if the model has a special way of building those."),cl=l(),Cn=o("div"),f(co.$$.fragment),Bs=l(),ft=o("h2"),Mt=o("a"),ba=o("span"),f(po.$$.fragment),pl=l(),ka=o("span"),ul=s("BlenderbotSmallTokenizerFast"),zs=l(),Ue=o("div"),f(uo.$$.fragment),hl=l(),ho=o("p"),ml=s("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=o("em"),fl=s("tokenizers"),_l=s(" library)."),gl=l(),Ct=o("div"),f(mo.$$.fragment),bl=l(),ya=o("p"),kl=s(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),xs=l(),_t=o("h2"),Pt=o("a"),Ta=o("span"),f(fo.$$.fragment),vl=l(),wa=o("span"),yl=s("BlenderbotSmallModel"),qs=l(),xe=o("div"),f(_o.$$.fragment),Tl=l(),go=o("p"),wl=s(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=o("a"),Sl=s("PreTrainedModel"),Bl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl=l(),bo=o("p"),xl=s("This model is also a PyTorch "),ko=o("a"),ql=s("torch.nn.Module"),Fl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$l=l(),be=o("div"),f(vo.$$.fragment),El=l(),gt=o("p"),Ml=s("The "),jn=o("a"),Cl=s("BlenderbotSmallModel"),Pl=s(" forward method, overrides the "),Sa=o("code"),jl=s("__call__"),Ol=s(" special method."),Ll=l(),f(jt.$$.fragment),Nl=l(),Ba=o("p"),Al=s("Example:"),Il=l(),f(yo.$$.fragment),Fs=l(),bt=o("h2"),Ot=o("a"),za=o("span"),f(To.$$.fragment),Dl=l(),xa=o("span"),Gl=s("BlenderbotSmallForConditionalGeneration"),$s=l(),qe=o("div"),f(wo.$$.fragment),Ul=l(),So=o("p"),Wl=s(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=o("a"),Rl=s("PreTrainedModel"),Kl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl=l(),Bo=o("p"),Ql=s("This model is also a PyTorch "),zo=o("a"),Vl=s("torch.nn.Module"),Jl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xl=l(),oe=o("div"),f(xo.$$.fragment),Yl=l(),kt=o("p"),Zl=s("The "),Ln=o("a"),ei=s("BlenderbotSmallForConditionalGeneration"),ti=s(" forward method, overrides the "),qa=o("code"),oi=s("__call__"),ni=s(" special method."),ai=l(),f(Lt.$$.fragment),ri=l(),Fa=o("p"),si=s("Conversation example::"),di=l(),$a=o("blockquote"),Ea=o("blockquote"),Ma=o("blockquote"),Ca=o("p"),li=s(`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ii=l(),Pa=o("blockquote"),ja=o("blockquote"),Oa=o("blockquote"),qo=o("p"),ci=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),La=o("s"),pi=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),ui=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Es=l(),vt=o("h2"),Nt=o("a"),Na=o("span"),f(Fo.$$.fragment),hi=l(),Aa=o("span"),mi=s("BlenderbotSmallForCausalLM"),Ms=l(),yt=o("div"),f($o.$$.fragment),fi=l(),Ve=o("div"),f(Eo.$$.fragment),_i=l(),Ia=o("p"),gi=s("Example:"),bi=l(),f(Mo.$$.fragment),Cs=l(),Tt=o("h2"),At=o("a"),Da=o("span"),f(Co.$$.fragment),ki=l(),Ga=o("span"),vi=s("TFBlenderbotSmallModel"),Ps=l(),he=o("div"),f(Po.$$.fragment),yi=l(),jo=o("p"),Ti=s(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=o("a"),wi=s("TFPreTrainedModel"),Si=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bi=l(),Oo=o("p"),zi=s("This model is also a "),Lo=o("a"),xi=s("tf.keras.Model"),qi=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fi=l(),f(It.$$.fragment),$i=l(),ke=o("div"),f(No.$$.fragment),Ei=l(),wt=o("p"),Mi=s("The "),An=o("a"),Ci=s("TFBlenderbotSmallModel"),Pi=s(" forward method, overrides the "),Ua=o("code"),ji=s("__call__"),Oi=s(" special method."),Li=l(),f(Dt.$$.fragment),Ni=l(),Wa=o("p"),Ai=s("Example:"),Ii=l(),f(Ao.$$.fragment),js=l(),St=o("h2"),Gt=o("a"),Ra=o("span"),f(Io.$$.fragment),Di=l(),Ka=o("span"),Gi=s("TFBlenderbotSmallForConditionalGeneration"),Os=l(),me=o("div"),f(Do.$$.fragment),Ui=l(),Go=o("p"),Wi=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=o("a"),Ri=s("TFPreTrainedModel"),Ki=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hi=l(),Uo=o("p"),Qi=s("This model is also a "),Wo=o("a"),Vi=s("tf.keras.Model"),Ji=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xi=l(),f(Ut.$$.fragment),Yi=l(),j=o("div"),f(Ro.$$.fragment),Zi=l(),Bt=o("p"),ec=s("The "),Dn=o("a"),tc=s("TFBlenderbotSmallForConditionalGeneration"),oc=s(" forward method, overrides the "),Ha=o("code"),nc=s("__call__"),ac=s(" special method."),rc=l(),f(Wt.$$.fragment),sc=l(),Qa=o("p"),dc=s("Conversation example::"),lc=l(),Va=o("blockquote"),Ja=o("blockquote"),Xa=o("blockquote"),Ya=o("p"),ic=s(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),cc=l(),Za=o("blockquote"),er=o("blockquote"),tr=o("blockquote"),or=o("p"),pc=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),uc=l(),nr=o("blockquote"),ar=o("blockquote"),rr=o("blockquote"),sr=o("p"),hc=s(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),mc=l(),dr=o("blockquote"),lr=o("blockquote"),ir=o("blockquote"),Ko=o("p"),fc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),cr=o("s"),_c=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),gc=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),bc=l(),pr=o("blockquote"),ur=o("blockquote"),hr=o("blockquote"),mr=o("p"),kc=s(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ls=l(),zt=o("h2"),Rt=o("a"),fr=o("span"),f(Ho.$$.fragment),vc=l(),_r=o("span"),yc=s("FlaxBlenderbotSmallModel"),Ns=l(),N=o("div"),f(Qo.$$.fragment),Tc=l(),Vo=o("p"),wc=s(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=o("a"),Sc=s("FlaxPreTrainedModel"),Bc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=l(),Jo=o("p"),xc=s(`This model is also a Flax Linen
`),Xo=o("a"),qc=s("flax.nn.Module"),Fc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$c=l(),gr=o("p"),Ec=s("Finally, this model supports inherent JAX features such as:"),Mc=l(),We=o("ul"),br=o("li"),Yo=o("a"),Cc=s("Just-In-Time (JIT) compilation"),Pc=l(),kr=o("li"),Zo=o("a"),jc=s("Automatic Differentiation"),Oc=l(),vr=o("li"),en=o("a"),Lc=s("Vectorization"),Nc=l(),yr=o("li"),tn=o("a"),Ac=s("Parallelization"),Ic=l(),Je=o("div"),f(on.$$.fragment),Dc=l(),Tr=o("p"),Gc=s("Example:"),Uc=l(),f(nn.$$.fragment),Wc=l(),Xe=o("div"),f(an.$$.fragment),Rc=l(),wr=o("p"),Kc=s("Example:"),Hc=l(),f(rn.$$.fragment),Qc=l(),Ye=o("div"),f(sn.$$.fragment),Vc=l(),Sr=o("p"),Jc=s("Example:"),Xc=l(),f(dn.$$.fragment),As=l(),xt=o("h2"),Kt=o("a"),Br=o("span"),f(ln.$$.fragment),Yc=l(),zr=o("span"),Zc=s("FlaxBlenderbotForConditionalGeneration"),Is=l(),A=o("div"),f(cn.$$.fragment),ep=l(),pn=o("p"),tp=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=o("a"),op=s("FlaxPreTrainedModel"),np=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap=l(),un=o("p"),rp=s(`This model is also a Flax Linen
`),hn=o("a"),sp=s("flax.nn.Module"),dp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lp=l(),xr=o("p"),ip=s("Finally, this model supports inherent JAX features such as:"),cp=l(),Re=o("ul"),qr=o("li"),mn=o("a"),pp=s("Just-In-Time (JIT) compilation"),up=l(),Fr=o("li"),fn=o("a"),hp=s("Automatic Differentiation"),mp=l(),$r=o("li"),_n=o("a"),fp=s("Vectorization"),_p=l(),Er=o("li"),gn=o("a"),gp=s("Parallelization"),bp=l(),$=o("div"),f(bn.$$.fragment),kp=l(),qt=o("p"),vp=s("The "),Mr=o("code"),yp=s("FlaxBlenderbotSmallPreTrainedModel"),Tp=s("forward method, overrides the "),Cr=o("code"),wp=s("__call__"),Sp=s(" special method."),Bp=l(),f(Ht.$$.fragment),zp=l(),Pr=o("p"),xp=s("Summarization example:"),qp=l(),jr=o("blockquote"),Or=o("blockquote"),Lr=o("blockquote"),Nr=o("p"),Fp=s("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),$p=l(),Ar=o("blockquote"),Ir=o("blockquote"),Dr=o("blockquote"),Gr=o("p"),Ep=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Mp=l(),Ur=o("blockquote"),Wr=o("blockquote"),Rr=o("blockquote"),Kr=o("p"),Cp=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Pp=l(),Hr=o("blockquote"),Qr=o("blockquote"),kn=o("blockquote"),Qt=o("h1"),Vt=o("a"),Vr=o("span"),f(vn.$$.fragment),jp=l(),Jr=o("span"),Op=s("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Lp=l(),Xr=o("p"),Np=s("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Ap=l(),Yr=o("p"),Ip=s("Mask filling example:"),Dp=l(),Zr=o("blockquote"),es=o("blockquote"),ts=o("blockquote"),os=o("p"),Gp=s(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Up=l(),ns=o("blockquote"),as=o("blockquote"),rs=o("blockquote"),ss=o("p"),Wp=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Rp=l(),ds=o("blockquote"),ls=o("blockquote"),is=o("blockquote"),cs=o("p"),Kp=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Hp=l(),ps=o("blockquote"),us=o("blockquote"),hs=o("blockquote"),ms=o("p"),Qp=s("tokenizer.decode(predictions).split()"),Vp=l(),Ze=o("div"),f(yn.$$.fragment),Jp=l(),fs=o("p"),Xp=s("Example:"),Yp=l(),f(Tn.$$.fragment),Zp=l(),et=o("div"),f(wn.$$.fragment),eu=l(),_s=o("p"),tu=s("Example:"),ou=l(),f(Sn.$$.fragment),this.h()},l(r){const u=bf('[data-svelte="svelte-1phssyn"]',document.head);h=n(u,"META",{name:!0,content:!0}),u.forEach(t),x=i(r),y=n(r,"H1",{class:!0});var Bn=a(y);T=n(Bn,"A",{id:!0,class:!0,href:!0});var gs=a(T);B=n(gs,"SPAN",{});var bs=a(B);_(S.$$.fragment,bs),bs.forEach(t),gs.forEach(t),w=i(Bn),q=n(Bn,"SPAN",{});var ks=a(q);Pe=d(ks,"Blenderbot Small"),ks.forEach(t),Bn.forEach(t),fe=i(r),z=n(r,"P",{});var ve=a(z);je=d(ve,"Note that "),U=n(ve,"A",{href:!0});var vs=a(U);Oe=d(vs,"BlenderbotSmallModel"),vs.forEach(t),Le=d(ve,` and
`),W=n(ve,"A",{href:!0});var ys=a(W);Ne=d(ys,"BlenderbotSmallForConditionalGeneration"),ys.forEach(t),Ae=d(ve,` are only used in combination with the checkpoint
`),Q=n(ve,"A",{href:!0,rel:!0});var au=a(Q);V=d(au,"facebook/blenderbot-90M"),au.forEach(t),Ie=d(ve,`. Larger Blenderbot checkpoints should
instead be used with `),Z=n(ve,"A",{href:!0});var ru=a(Z);C=d(ru,"BlenderbotModel"),ru.forEach(t),O=d(ve,` and
`),_e=n(ve,"A",{href:!0});var su=a(_e);re=d(su,"BlenderbotForConditionalGeneration"),su.forEach(t),ve.forEach(t),$e=i(r),J=n(r,"H2",{class:!0});var Gs=a(J);I=n(Gs,"A",{id:!0,class:!0,href:!0});var du=a(I);Te=n(du,"SPAN",{});var lu=a(Te);_(se.$$.fragment,lu),lu.forEach(t),du.forEach(t),L=i(Gs),we=n(Gs,"SPAN",{});var iu=a(we);de=d(iu,"Overview"),iu.forEach(t),Gs.forEach(t),Ee=i(r),ee=n(r,"P",{});var Us=a(ee);le=d(Us,"The Blender chatbot model was proposed in "),ie=n(Us,"A",{href:!0,rel:!0});var cu=a(ie);De=d(cu,"Recipes for building an open-domain chatbot"),cu.forEach(t),X=d(Us,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Us.forEach(t),Me=i(r),R=n(r,"P",{});var pu=a(R);Ge=d(pu,"The abstract of the paper is the following:"),pu.forEach(t),m=i(r),F=n(r,"P",{});var uu=a(F);ce=n(uu,"EM",{});var hu=a(ce);st=d(hu,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),hu.forEach(t),uu.forEach(t),Ke=i(r),P=n(r,"P",{});var Wn=a(P);dt=d(Wn,"This model was contributed by "),Se=n(Wn,"A",{href:!0,rel:!0});var mu=a(Se);lt=d(mu,"patrickvonplaten"),mu.forEach(t),Y=d(Wn,`. The authors\u2019 code can be
found `),D=n(Wn,"A",{href:!0,rel:!0});var fu=a(D);it=d(fu,"here"),fu.forEach(t),ct=d(Wn," ."),Wn.forEach(t),te=i(r),pe=n(r,"H2",{class:!0});var Ws=a(pe);ge=n(Ws,"A",{id:!0,class:!0,href:!0});var _u=a(ge);Be=n(_u,"SPAN",{});var gu=a(Be);_(ze.$$.fragment,gu),gu.forEach(t),_u.forEach(t),yd=i(Ws),la=n(Ws,"SPAN",{});var bu=a(la);Td=d(bu,"BlenderbotSmallConfig"),bu.forEach(t),Ws.forEach(t),Ts=i(r),ue=n(r,"DIV",{class:!0});var tt=a(ue);_(eo.$$.fragment,tt),wd=i(tt),pt=n(tt,"P",{});var Rn=a(pt);Sd=d(Rn,"This is the configuration class to store the configuration of a "),xn=n(Rn,"A",{href:!0});var ku=a(xn);Bd=d(ku,"BlenderbotSmallModel"),ku.forEach(t),zd=d(Rn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),to=n(Rn,"A",{href:!0,rel:!0});var vu=a(to);xd=d(vu,"facebook/blenderbot_small-90M"),vu.forEach(t),qd=d(Rn," architecture."),Rn.forEach(t),Fd=i(tt),ut=n(tt,"P",{});var Kn=a(ut);$d=d(Kn,"Configuration objects inherit from "),qn=n(Kn,"A",{href:!0});var yu=a(qn);Ed=d(yu,"PretrainedConfig"),yu.forEach(t),Md=d(Kn,` and can be used to control the model outputs. Read the
documentation from `),Fn=n(Kn,"A",{href:!0});var Tu=a(Fn);Cd=d(Tu,"PretrainedConfig"),Tu.forEach(t),Pd=d(Kn," for more information."),Kn.forEach(t),jd=i(tt),ia=n(tt,"P",{});var wu=a(ia);Od=d(wu,"Example:"),wu.forEach(t),Ld=i(tt),_(oo.$$.fragment,tt),tt.forEach(t),ws=i(r),ht=n(r,"H2",{class:!0});var Rs=a(ht);$t=n(Rs,"A",{id:!0,class:!0,href:!0});var Su=a($t);ca=n(Su,"SPAN",{});var Bu=a(ca);_(no.$$.fragment,Bu),Bu.forEach(t),Su.forEach(t),Nd=i(Rs),pa=n(Rs,"SPAN",{});var zu=a(pa);Ad=d(zu,"BlenderbotSmallTokenizer"),zu.forEach(t),Rs.forEach(t),Ss=i(r),G=n(r,"DIV",{class:!0});var ye=a(G);_(ao.$$.fragment,ye),Id=i(ye),ua=n(ye,"P",{});var xu=a(ua);Dd=d(xu,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),xu.forEach(t),Gd=i(ye),ro=n(ye,"P",{});var Ks=a(ro);Ud=d(Ks,"This tokenizer inherits from "),$n=n(Ks,"A",{href:!0});var qu=a($n);Wd=d(qu,"PreTrainedTokenizer"),qu.forEach(t),Rd=d(Ks,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ks.forEach(t),Kd=i(ye),He=n(ye,"DIV",{class:!0});var Hn=a(He);_(so.$$.fragment,Hn),Hd=i(Hn),ha=n(Hn,"P",{});var Fu=a(ha);Qd=d(Fu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Fu.forEach(t),Vd=i(Hn),ma=n(Hn,"P",{});var $u=a(ma);Jd=d($u,"This implementation does not add special tokens and this method should be overridden in a subclass."),$u.forEach(t),Hn.forEach(t),Xd=i(ye),Et=n(ye,"DIV",{class:!0});var Hs=a(Et);_(lo.$$.fragment,Hs),Yd=i(Hs),mt=n(Hs,"P",{});var Qn=a(mt);Zd=d(Qn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=n(Qn,"CODE",{});var Eu=a(fa);el=d(Eu,"prepare_for_model"),Eu.forEach(t),tl=d(Qn," or "),_a=n(Qn,"CODE",{});var Mu=a(_a);ol=d(Mu,"encode_plus"),Mu.forEach(t),nl=d(Qn," methods."),Qn.forEach(t),Hs.forEach(t),al=i(ye),Qe=n(ye,"DIV",{class:!0});var Vn=a(Qe);_(io.$$.fragment,Vn),rl=i(Vn),En=n(Vn,"P",{});var nu=a(En);sl=d(nu,"Create the token type IDs corresponding to the sequences passed. "),Mn=n(nu,"A",{href:!0});var Cu=a(Mn);dl=d(Cu,`What are token type
IDs?`),Cu.forEach(t),nu.forEach(t),ll=i(Vn),ga=n(Vn,"P",{});var Pu=a(ga);il=d(Pu,"Should be overridden in a subclass if the model has a special way of building those."),Pu.forEach(t),Vn.forEach(t),cl=i(ye),Cn=n(ye,"DIV",{class:!0});var ju=a(Cn);_(co.$$.fragment,ju),ju.forEach(t),ye.forEach(t),Bs=i(r),ft=n(r,"H2",{class:!0});var Qs=a(ft);Mt=n(Qs,"A",{id:!0,class:!0,href:!0});var Ou=a(Mt);ba=n(Ou,"SPAN",{});var Lu=a(ba);_(po.$$.fragment,Lu),Lu.forEach(t),Ou.forEach(t),pl=i(Qs),ka=n(Qs,"SPAN",{});var Nu=a(ka);ul=d(Nu,"BlenderbotSmallTokenizerFast"),Nu.forEach(t),Qs.forEach(t),zs=i(r),Ue=n(r,"DIV",{class:!0});var Jn=a(Ue);_(uo.$$.fragment,Jn),hl=i(Jn),ho=n(Jn,"P",{});var Vs=a(ho);ml=d(Vs,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=n(Vs,"EM",{});var Au=a(va);fl=d(Au,"tokenizers"),Au.forEach(t),_l=d(Vs," library)."),Vs.forEach(t),gl=i(Jn),Ct=n(Jn,"DIV",{class:!0});var Js=a(Ct);_(mo.$$.fragment,Js),bl=i(Js),ya=n(Js,"P",{});var Iu=a(ya);kl=d(Iu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Iu.forEach(t),Js.forEach(t),Jn.forEach(t),xs=i(r),_t=n(r,"H2",{class:!0});var Xs=a(_t);Pt=n(Xs,"A",{id:!0,class:!0,href:!0});var Du=a(Pt);Ta=n(Du,"SPAN",{});var Gu=a(Ta);_(fo.$$.fragment,Gu),Gu.forEach(t),Du.forEach(t),vl=i(Xs),wa=n(Xs,"SPAN",{});var Uu=a(wa);yl=d(Uu,"BlenderbotSmallModel"),Uu.forEach(t),Xs.forEach(t),qs=i(r),xe=n(r,"DIV",{class:!0});var Jt=a(xe);_(_o.$$.fragment,Jt),Tl=i(Jt),go=n(Jt,"P",{});var Ys=a(go);wl=d(Ys,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=n(Ys,"A",{href:!0});var Wu=a(Pn);Sl=d(Wu,"PreTrainedModel"),Wu.forEach(t),Bl=d(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(t),zl=i(Jt),bo=n(Jt,"P",{});var Zs=a(bo);xl=d(Zs,"This model is also a PyTorch "),ko=n(Zs,"A",{href:!0,rel:!0});var Ru=a(ko);ql=d(Ru,"torch.nn.Module"),Ru.forEach(t),Fl=d(Zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zs.forEach(t),$l=i(Jt),be=n(Jt,"DIV",{class:!0});var ot=a(be);_(vo.$$.fragment,ot),El=i(ot),gt=n(ot,"P",{});var Xn=a(gt);Ml=d(Xn,"The "),jn=n(Xn,"A",{href:!0});var Ku=a(jn);Cl=d(Ku,"BlenderbotSmallModel"),Ku.forEach(t),Pl=d(Xn," forward method, overrides the "),Sa=n(Xn,"CODE",{});var Hu=a(Sa);jl=d(Hu,"__call__"),Hu.forEach(t),Ol=d(Xn," special method."),Xn.forEach(t),Ll=i(ot),_(jt.$$.fragment,ot),Nl=i(ot),Ba=n(ot,"P",{});var Qu=a(Ba);Al=d(Qu,"Example:"),Qu.forEach(t),Il=i(ot),_(yo.$$.fragment,ot),ot.forEach(t),Jt.forEach(t),Fs=i(r),bt=n(r,"H2",{class:!0});var ed=a(bt);Ot=n(ed,"A",{id:!0,class:!0,href:!0});var Vu=a(Ot);za=n(Vu,"SPAN",{});var Ju=a(za);_(To.$$.fragment,Ju),Ju.forEach(t),Vu.forEach(t),Dl=i(ed),xa=n(ed,"SPAN",{});var Xu=a(xa);Gl=d(Xu,"BlenderbotSmallForConditionalGeneration"),Xu.forEach(t),ed.forEach(t),$s=i(r),qe=n(r,"DIV",{class:!0});var Xt=a(qe);_(wo.$$.fragment,Xt),Ul=i(Xt),So=n(Xt,"P",{});var td=a(So);Wl=d(td,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=n(td,"A",{href:!0});var Yu=a(On);Rl=d(Yu,"PreTrainedModel"),Yu.forEach(t),Kl=d(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),Hl=i(Xt),Bo=n(Xt,"P",{});var od=a(Bo);Ql=d(od,"This model is also a PyTorch "),zo=n(od,"A",{href:!0,rel:!0});var Zu=a(zo);Vl=d(Zu,"torch.nn.Module"),Zu.forEach(t),Jl=d(od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od.forEach(t),Xl=i(Xt),oe=n(Xt,"DIV",{class:!0});var Ce=a(oe);_(xo.$$.fragment,Ce),Yl=i(Ce),kt=n(Ce,"P",{});var Yn=a(kt);Zl=d(Yn,"The "),Ln=n(Yn,"A",{href:!0});var eh=a(Ln);ei=d(eh,"BlenderbotSmallForConditionalGeneration"),eh.forEach(t),ti=d(Yn," forward method, overrides the "),qa=n(Yn,"CODE",{});var th=a(qa);oi=d(th,"__call__"),th.forEach(t),ni=d(Yn," special method."),Yn.forEach(t),ai=i(Ce),_(Lt.$$.fragment,Ce),ri=i(Ce),Fa=n(Ce,"P",{});var oh=a(Fa);si=d(oh,"Conversation example::"),oh.forEach(t),di=i(Ce),$a=n(Ce,"BLOCKQUOTE",{});var nh=a($a);Ea=n(nh,"BLOCKQUOTE",{});var ah=a(Ea);Ma=n(ah,"BLOCKQUOTE",{});var rh=a(Ma);Ca=n(rh,"P",{});var sh=a(Ca);li=d(sh,`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),sh.forEach(t),rh.forEach(t),ah.forEach(t),nh.forEach(t),ii=i(Ce),Pa=n(Ce,"BLOCKQUOTE",{});var dh=a(Pa);ja=n(dh,"BLOCKQUOTE",{});var lh=a(ja);Oa=n(lh,"BLOCKQUOTE",{});var ih=a(Oa);qo=n(ih,"P",{});var nd=a(qo);ci=d(nd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),La=n(nd,"S",{});var ch=a(La);pi=d(ch,"what kind of carbs do they eat? i don\u2019t know much about carbs."),ch.forEach(t),ui=d(nd,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),nd.forEach(t),ih.forEach(t),lh.forEach(t),dh.forEach(t),Ce.forEach(t),Xt.forEach(t),Es=i(r),vt=n(r,"H2",{class:!0});var ad=a(vt);Nt=n(ad,"A",{id:!0,class:!0,href:!0});var ph=a(Nt);Na=n(ph,"SPAN",{});var uh=a(Na);_(Fo.$$.fragment,uh),uh.forEach(t),ph.forEach(t),hi=i(ad),Aa=n(ad,"SPAN",{});var hh=a(Aa);mi=d(hh,"BlenderbotSmallForCausalLM"),hh.forEach(t),ad.forEach(t),Ms=i(r),yt=n(r,"DIV",{class:!0});var rd=a(yt);_($o.$$.fragment,rd),fi=i(rd),Ve=n(rd,"DIV",{class:!0});var Zn=a(Ve);_(Eo.$$.fragment,Zn),_i=i(Zn),Ia=n(Zn,"P",{});var mh=a(Ia);gi=d(mh,"Example:"),mh.forEach(t),bi=i(Zn),_(Mo.$$.fragment,Zn),Zn.forEach(t),rd.forEach(t),Cs=i(r),Tt=n(r,"H2",{class:!0});var sd=a(Tt);At=n(sd,"A",{id:!0,class:!0,href:!0});var fh=a(At);Da=n(fh,"SPAN",{});var _h=a(Da);_(Co.$$.fragment,_h),_h.forEach(t),fh.forEach(t),ki=i(sd),Ga=n(sd,"SPAN",{});var gh=a(Ga);vi=d(gh,"TFBlenderbotSmallModel"),gh.forEach(t),sd.forEach(t),Ps=i(r),he=n(r,"DIV",{class:!0});var nt=a(he);_(Po.$$.fragment,nt),yi=i(nt),jo=n(nt,"P",{});var dd=a(jo);Ti=d(dd,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n(dd,"A",{href:!0});var bh=a(Nn);wi=d(bh,"TFPreTrainedModel"),bh.forEach(t),Si=d(dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dd.forEach(t),Bi=i(nt),Oo=n(nt,"P",{});var ld=a(Oo);zi=d(ld,"This model is also a "),Lo=n(ld,"A",{href:!0,rel:!0});var kh=a(Lo);xi=d(kh,"tf.keras.Model"),kh.forEach(t),qi=d(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),Fi=i(nt),_(It.$$.fragment,nt),$i=i(nt),ke=n(nt,"DIV",{class:!0});var at=a(ke);_(No.$$.fragment,at),Ei=i(at),wt=n(at,"P",{});var ea=a(wt);Mi=d(ea,"The "),An=n(ea,"A",{href:!0});var vh=a(An);Ci=d(vh,"TFBlenderbotSmallModel"),vh.forEach(t),Pi=d(ea," forward method, overrides the "),Ua=n(ea,"CODE",{});var yh=a(Ua);ji=d(yh,"__call__"),yh.forEach(t),Oi=d(ea," special method."),ea.forEach(t),Li=i(at),_(Dt.$$.fragment,at),Ni=i(at),Wa=n(at,"P",{});var Th=a(Wa);Ai=d(Th,"Example:"),Th.forEach(t),Ii=i(at),_(Ao.$$.fragment,at),at.forEach(t),nt.forEach(t),js=i(r),St=n(r,"H2",{class:!0});var id=a(St);Gt=n(id,"A",{id:!0,class:!0,href:!0});var wh=a(Gt);Ra=n(wh,"SPAN",{});var Sh=a(Ra);_(Io.$$.fragment,Sh),Sh.forEach(t),wh.forEach(t),Di=i(id),Ka=n(id,"SPAN",{});var Bh=a(Ka);Gi=d(Bh,"TFBlenderbotSmallForConditionalGeneration"),Bh.forEach(t),id.forEach(t),Os=i(r),me=n(r,"DIV",{class:!0});var rt=a(me);_(Do.$$.fragment,rt),Ui=i(rt),Go=n(rt,"P",{});var cd=a(Go);Wi=d(cd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=n(cd,"A",{href:!0});var zh=a(In);Ri=d(zh,"TFPreTrainedModel"),zh.forEach(t),Ki=d(cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd.forEach(t),Hi=i(rt),Uo=n(rt,"P",{});var pd=a(Uo);Qi=d(pd,"This model is also a "),Wo=n(pd,"A",{href:!0,rel:!0});var xh=a(Wo);Vi=d(xh,"tf.keras.Model"),xh.forEach(t),Ji=d(pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pd.forEach(t),Xi=i(rt),_(Ut.$$.fragment,rt),Yi=i(rt),j=n(rt,"DIV",{class:!0});var K=a(j);_(Ro.$$.fragment,K),Zi=i(K),Bt=n(K,"P",{});var ta=a(Bt);ec=d(ta,"The "),Dn=n(ta,"A",{href:!0});var qh=a(Dn);tc=d(qh,"TFBlenderbotSmallForConditionalGeneration"),qh.forEach(t),oc=d(ta," forward method, overrides the "),Ha=n(ta,"CODE",{});var Fh=a(Ha);nc=d(Fh,"__call__"),Fh.forEach(t),ac=d(ta," special method."),ta.forEach(t),rc=i(K),_(Wt.$$.fragment,K),sc=i(K),Qa=n(K,"P",{});var $h=a(Qa);dc=d($h,"Conversation example::"),$h.forEach(t),lc=i(K),Va=n(K,"BLOCKQUOTE",{});var Eh=a(Va);Ja=n(Eh,"BLOCKQUOTE",{});var Mh=a(Ja);Xa=n(Mh,"BLOCKQUOTE",{});var Ch=a(Xa);Ya=n(Ch,"P",{});var Ph=a(Ya);ic=d(Ph,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ph.forEach(t),Ch.forEach(t),Mh.forEach(t),Eh.forEach(t),cc=i(K),Za=n(K,"BLOCKQUOTE",{});var jh=a(Za);er=n(jh,"BLOCKQUOTE",{});var Oh=a(er);tr=n(Oh,"BLOCKQUOTE",{});var Lh=a(tr);or=n(Lh,"P",{});var Nh=a(or);pc=d(Nh,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Nh.forEach(t),Lh.forEach(t),Oh.forEach(t),jh.forEach(t),uc=i(K),nr=n(K,"BLOCKQUOTE",{});var Ah=a(nr);ar=n(Ah,"BLOCKQUOTE",{});var Ih=a(ar);rr=n(Ih,"BLOCKQUOTE",{});var Dh=a(rr);sr=n(Dh,"P",{});var Gh=a(sr);hc=d(Gh,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Gh.forEach(t),Dh.forEach(t),Ih.forEach(t),Ah.forEach(t),mc=i(K),dr=n(K,"BLOCKQUOTE",{});var Uh=a(dr);lr=n(Uh,"BLOCKQUOTE",{});var Wh=a(lr);ir=n(Wh,"BLOCKQUOTE",{});var Rh=a(ir);Ko=n(Rh,"P",{});var ud=a(Ko);fc=d(ud,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),cr=n(ud,"S",{});var Kh=a(cr);_c=d(Kh,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Kh.forEach(t),gc=d(ud,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),ud.forEach(t),Rh.forEach(t),Wh.forEach(t),Uh.forEach(t),bc=i(K),pr=n(K,"BLOCKQUOTE",{});var Hh=a(pr);ur=n(Hh,"BLOCKQUOTE",{});var Qh=a(ur);hr=n(Qh,"BLOCKQUOTE",{});var Vh=a(hr);mr=n(Vh,"P",{});var Jh=a(mr);kc=d(Jh,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Jh.forEach(t),Vh.forEach(t),Qh.forEach(t),Hh.forEach(t),K.forEach(t),rt.forEach(t),Ls=i(r),zt=n(r,"H2",{class:!0});var hd=a(zt);Rt=n(hd,"A",{id:!0,class:!0,href:!0});var Xh=a(Rt);fr=n(Xh,"SPAN",{});var Yh=a(fr);_(Ho.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),vc=i(hd),_r=n(hd,"SPAN",{});var Zh=a(_r);yc=d(Zh,"FlaxBlenderbotSmallModel"),Zh.forEach(t),hd.forEach(t),Ns=i(r),N=n(r,"DIV",{class:!0});var ne=a(N);_(Qo.$$.fragment,ne),Tc=i(ne),Vo=n(ne,"P",{});var md=a(Vo);wc=d(md,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n(md,"A",{href:!0});var em=a(Gn);Sc=d(em,"FlaxPreTrainedModel"),em.forEach(t),Bc=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),zc=i(ne),Jo=n(ne,"P",{});var fd=a(Jo);xc=d(fd,`This model is also a Flax Linen
`),Xo=n(fd,"A",{href:!0,rel:!0});var tm=a(Xo);qc=d(tm,"flax.nn.Module"),tm.forEach(t),Fc=d(fd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fd.forEach(t),$c=i(ne),gr=n(ne,"P",{});var om=a(gr);Ec=d(om,"Finally, this model supports inherent JAX features such as:"),om.forEach(t),Mc=i(ne),We=n(ne,"UL",{});var Yt=a(We);br=n(Yt,"LI",{});var nm=a(br);Yo=n(nm,"A",{href:!0,rel:!0});var am=a(Yo);Cc=d(am,"Just-In-Time (JIT) compilation"),am.forEach(t),nm.forEach(t),Pc=i(Yt),kr=n(Yt,"LI",{});var rm=a(kr);Zo=n(rm,"A",{href:!0,rel:!0});var sm=a(Zo);jc=d(sm,"Automatic Differentiation"),sm.forEach(t),rm.forEach(t),Oc=i(Yt),vr=n(Yt,"LI",{});var dm=a(vr);en=n(dm,"A",{href:!0,rel:!0});var lm=a(en);Lc=d(lm,"Vectorization"),lm.forEach(t),dm.forEach(t),Nc=i(Yt),yr=n(Yt,"LI",{});var im=a(yr);tn=n(im,"A",{href:!0,rel:!0});var cm=a(tn);Ac=d(cm,"Parallelization"),cm.forEach(t),im.forEach(t),Yt.forEach(t),Ic=i(ne),Je=n(ne,"DIV",{class:!0});var oa=a(Je);_(on.$$.fragment,oa),Dc=i(oa),Tr=n(oa,"P",{});var pm=a(Tr);Gc=d(pm,"Example:"),pm.forEach(t),Uc=i(oa),_(nn.$$.fragment,oa),oa.forEach(t),Wc=i(ne),Xe=n(ne,"DIV",{class:!0});var na=a(Xe);_(an.$$.fragment,na),Rc=i(na),wr=n(na,"P",{});var um=a(wr);Kc=d(um,"Example:"),um.forEach(t),Hc=i(na),_(rn.$$.fragment,na),na.forEach(t),Qc=i(ne),Ye=n(ne,"DIV",{class:!0});var aa=a(Ye);_(sn.$$.fragment,aa),Vc=i(aa),Sr=n(aa,"P",{});var hm=a(Sr);Jc=d(hm,"Example:"),hm.forEach(t),Xc=i(aa),_(dn.$$.fragment,aa),aa.forEach(t),ne.forEach(t),As=i(r),xt=n(r,"H2",{class:!0});var _d=a(xt);Kt=n(_d,"A",{id:!0,class:!0,href:!0});var mm=a(Kt);Br=n(mm,"SPAN",{});var fm=a(Br);_(ln.$$.fragment,fm),fm.forEach(t),mm.forEach(t),Yc=i(_d),zr=n(_d,"SPAN",{});var _m=a(zr);Zc=d(_m,"FlaxBlenderbotForConditionalGeneration"),_m.forEach(t),_d.forEach(t),Is=i(r),A=n(r,"DIV",{class:!0});var ae=a(A);_(cn.$$.fragment,ae),ep=i(ae),pn=n(ae,"P",{});var gd=a(pn);tp=d(gd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=n(gd,"A",{href:!0});var gm=a(Un);op=d(gm,"FlaxPreTrainedModel"),gm.forEach(t),np=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),ap=i(ae),un=n(ae,"P",{});var bd=a(un);rp=d(bd,`This model is also a Flax Linen
`),hn=n(bd,"A",{href:!0,rel:!0});var bm=a(hn);sp=d(bm,"flax.nn.Module"),bm.forEach(t),dp=d(bd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bd.forEach(t),lp=i(ae),xr=n(ae,"P",{});var km=a(xr);ip=d(km,"Finally, this model supports inherent JAX features such as:"),km.forEach(t),cp=i(ae),Re=n(ae,"UL",{});var Zt=a(Re);qr=n(Zt,"LI",{});var vm=a(qr);mn=n(vm,"A",{href:!0,rel:!0});var ym=a(mn);pp=d(ym,"Just-In-Time (JIT) compilation"),ym.forEach(t),vm.forEach(t),up=i(Zt),Fr=n(Zt,"LI",{});var Tm=a(Fr);fn=n(Tm,"A",{href:!0,rel:!0});var wm=a(fn);hp=d(wm,"Automatic Differentiation"),wm.forEach(t),Tm.forEach(t),mp=i(Zt),$r=n(Zt,"LI",{});var Sm=a($r);_n=n(Sm,"A",{href:!0,rel:!0});var Bm=a(_n);fp=d(Bm,"Vectorization"),Bm.forEach(t),Sm.forEach(t),_p=i(Zt),Er=n(Zt,"LI",{});var zm=a(Er);gn=n(zm,"A",{href:!0,rel:!0});var xm=a(gn);gp=d(xm,"Parallelization"),xm.forEach(t),zm.forEach(t),Zt.forEach(t),bp=i(ae),$=n(ae,"DIV",{class:!0});var E=a($);_(bn.$$.fragment,E),kp=i(E),qt=n(E,"P",{});var ra=a(qt);vp=d(ra,"The "),Mr=n(ra,"CODE",{});var qm=a(Mr);yp=d(qm,"FlaxBlenderbotSmallPreTrainedModel"),qm.forEach(t),Tp=d(ra,"forward method, overrides the "),Cr=n(ra,"CODE",{});var Fm=a(Cr);wp=d(Fm,"__call__"),Fm.forEach(t),Sp=d(ra," special method."),ra.forEach(t),Bp=i(E),_(Ht.$$.fragment,E),zp=i(E),Pr=n(E,"P",{});var $m=a(Pr);xp=d($m,"Summarization example:"),$m.forEach(t),qp=i(E),jr=n(E,"BLOCKQUOTE",{});var Em=a(jr);Or=n(Em,"BLOCKQUOTE",{});var Mm=a(Or);Lr=n(Mm,"BLOCKQUOTE",{});var Cm=a(Lr);Nr=n(Cm,"P",{});var Pm=a(Nr);Fp=d(Pm,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Pm.forEach(t),Cm.forEach(t),Mm.forEach(t),Em.forEach(t),$p=i(E),Ar=n(E,"BLOCKQUOTE",{});var jm=a(Ar);Ir=n(jm,"BLOCKQUOTE",{});var Om=a(Ir);Dr=n(Om,"BLOCKQUOTE",{});var Lm=a(Dr);Gr=n(Lm,"P",{});var Nm=a(Gr);Ep=d(Nm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Nm.forEach(t),Lm.forEach(t),Om.forEach(t),jm.forEach(t),Mp=i(E),Ur=n(E,"BLOCKQUOTE",{});var Am=a(Ur);Wr=n(Am,"BLOCKQUOTE",{});var Im=a(Wr);Rr=n(Im,"BLOCKQUOTE",{});var Dm=a(Rr);Kr=n(Dm,"P",{});var Gm=a(Kr);Cp=d(Gm,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Gm.forEach(t),Dm.forEach(t),Im.forEach(t),Am.forEach(t),Pp=i(E),Hr=n(E,"BLOCKQUOTE",{});var Um=a(Hr);Qr=n(Um,"BLOCKQUOTE",{});var Wm=a(Qr);kn=n(Wm,"BLOCKQUOTE",{});var kd=a(kn);Qt=n(kd,"H1",{class:!0});var vd=a(Qt);Vt=n(vd,"A",{id:!0,class:!0,href:!0});var Rm=a(Vt);Vr=n(Rm,"SPAN",{});var Km=a(Vr);_(vn.$$.fragment,Km),Km.forEach(t),Rm.forEach(t),jp=i(vd),Jr=n(vd,"SPAN",{});var Hm=a(Jr);Op=d(Hm,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Hm.forEach(t),vd.forEach(t),Lp=i(kd),Xr=n(kd,"P",{});var Qm=a(Xr);Np=d(Qm,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Qm.forEach(t),kd.forEach(t),Wm.forEach(t),Um.forEach(t),Ap=i(E),Yr=n(E,"P",{});var Vm=a(Yr);Ip=d(Vm,"Mask filling example:"),Vm.forEach(t),Dp=i(E),Zr=n(E,"BLOCKQUOTE",{});var Jm=a(Zr);es=n(Jm,"BLOCKQUOTE",{});var Xm=a(es);ts=n(Xm,"BLOCKQUOTE",{});var Ym=a(ts);os=n(Ym,"P",{});var Zm=a(os);Gp=d(Zm,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Zm.forEach(t),Ym.forEach(t),Xm.forEach(t),Jm.forEach(t),Up=i(E),ns=n(E,"BLOCKQUOTE",{});var ef=a(ns);as=n(ef,"BLOCKQUOTE",{});var tf=a(as);rs=n(tf,"BLOCKQUOTE",{});var of=a(rs);ss=n(of,"P",{});var nf=a(ss);Wp=d(nf,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),nf.forEach(t),of.forEach(t),tf.forEach(t),ef.forEach(t),Rp=i(E),ds=n(E,"BLOCKQUOTE",{});var af=a(ds);ls=n(af,"BLOCKQUOTE",{});var rf=a(ls);is=n(rf,"BLOCKQUOTE",{});var sf=a(is);cs=n(sf,"P",{});var df=a(cs);Kp=d(df,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),df.forEach(t),sf.forEach(t),rf.forEach(t),af.forEach(t),Hp=i(E),ps=n(E,"BLOCKQUOTE",{});var lf=a(ps);us=n(lf,"BLOCKQUOTE",{});var cf=a(us);hs=n(cf,"BLOCKQUOTE",{});var pf=a(hs);ms=n(pf,"P",{});var uf=a(ms);Qp=d(uf,"tokenizer.decode(predictions).split()"),uf.forEach(t),pf.forEach(t),cf.forEach(t),lf.forEach(t),E.forEach(t),Vp=i(ae),Ze=n(ae,"DIV",{class:!0});var sa=a(Ze);_(yn.$$.fragment,sa),Jp=i(sa),fs=n(sa,"P",{});var hf=a(fs);Xp=d(hf,"Example:"),hf.forEach(t),Yp=i(sa),_(Tn.$$.fragment,sa),sa.forEach(t),Zp=i(ae),et=n(ae,"DIV",{class:!0});var da=a(et);_(wn.$$.fragment,da),eu=i(da),_s=n(da,"P",{});var mf=a(_s);tu=d(mf,"Example:"),mf.forEach(t),ou=i(da),_(Sn.$$.fragment,da),da.forEach(t),ae.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(xf)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(y,"class","relative group"),c(U,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),c(Q,"rel","nofollow"),c(Z,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(I,"id","overview"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#overview"),c(J,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(ie,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(ge,"id","transformers.BlenderbotSmallConfig"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.BlenderbotSmallConfig"),c(pe,"class","relative group"),c(xn,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(to,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(to,"rel","nofollow"),c(qn,"href","/docs/transformers/pr_15750/en/main_classes/configuration#transformers.PretrainedConfig"),c(Fn,"href","/docs/transformers/pr_15750/en/main_classes/configuration#transformers.PretrainedConfig"),c(ue,"class","docstring"),c($t,"id","transformers.BlenderbotSmallTokenizer"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.BlenderbotSmallTokenizer"),c(ht,"class","relative group"),c($n,"href","/docs/transformers/pr_15750/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Et,"class","docstring"),c(Mn,"href","../glossary#token-type-ids"),c(Qe,"class","docstring"),c(Cn,"class","docstring"),c(G,"class","docstring"),c(Mt,"id","transformers.BlenderbotSmallTokenizerFast"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.BlenderbotSmallTokenizerFast"),c(ft,"class","relative group"),c(Ct,"class","docstring"),c(Ue,"class","docstring"),c(Pt,"id","transformers.BlenderbotSmallModel"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.BlenderbotSmallModel"),c(_t,"class","relative group"),c(Pn,"href","/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel"),c(ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ko,"rel","nofollow"),c(jn,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(be,"class","docstring"),c(xe,"class","docstring"),c(Ot,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(bt,"class","relative group"),c(On,"href","/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel"),c(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zo,"rel","nofollow"),c(Ln,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(oe,"class","docstring"),c(qe,"class","docstring"),c(Nt,"id","transformers.BlenderbotSmallForCausalLM"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.BlenderbotSmallForCausalLM"),c(vt,"class","relative group"),c(Ve,"class","docstring"),c(yt,"class","docstring"),c(At,"id","transformers.TFBlenderbotSmallModel"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFBlenderbotSmallModel"),c(Tt,"class","relative group"),c(Nn,"href","/docs/transformers/pr_15750/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Lo,"rel","nofollow"),c(An,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(he,"class","docstring"),c(Gt,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(St,"class","relative group"),c(In,"href","/docs/transformers/pr_15750/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(Dn,"href","/docs/transformers/pr_15750/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(j,"class","docstring"),c(me,"class","docstring"),c(Rt,"id","transformers.FlaxBlenderbotSmallModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.FlaxBlenderbotSmallModel"),c(zt,"class","relative group"),c(Gn,"href","/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Xo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Xo,"rel","nofollow"),c(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Yo,"rel","nofollow"),c(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zo,"rel","nofollow"),c(en,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(en,"rel","nofollow"),c(tn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(tn,"rel","nofollow"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(Ye,"class","docstring"),c(N,"class","docstring"),c(Kt,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(xt,"class","relative group"),c(Un,"href","/docs/transformers/pr_15750/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(hn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(hn,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(Vt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Qt,"class","relative group"),c($,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(A,"class","docstring")},m(r,u){e(document.head,h),p(r,x,u),p(r,y,u),e(y,T),e(T,B),g(S,B,null),e(y,w),e(y,q),e(q,Pe),p(r,fe,u),p(r,z,u),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),e(z,Q),e(Q,V),e(z,Ie),e(z,Z),e(Z,C),e(z,O),e(z,_e),e(_e,re),p(r,$e,u),p(r,J,u),e(J,I),e(I,Te),g(se,Te,null),e(J,L),e(J,we),e(we,de),p(r,Ee,u),p(r,ee,u),e(ee,le),e(ee,ie),e(ie,De),e(ee,X),p(r,Me,u),p(r,R,u),e(R,Ge),p(r,m,u),p(r,F,u),e(F,ce),e(ce,st),p(r,Ke,u),p(r,P,u),e(P,dt),e(P,Se),e(Se,lt),e(P,Y),e(P,D),e(D,it),e(P,ct),p(r,te,u),p(r,pe,u),e(pe,ge),e(ge,Be),g(ze,Be,null),e(pe,yd),e(pe,la),e(la,Td),p(r,Ts,u),p(r,ue,u),g(eo,ue,null),e(ue,wd),e(ue,pt),e(pt,Sd),e(pt,xn),e(xn,Bd),e(pt,zd),e(pt,to),e(to,xd),e(pt,qd),e(ue,Fd),e(ue,ut),e(ut,$d),e(ut,qn),e(qn,Ed),e(ut,Md),e(ut,Fn),e(Fn,Cd),e(ut,Pd),e(ue,jd),e(ue,ia),e(ia,Od),e(ue,Ld),g(oo,ue,null),p(r,ws,u),p(r,ht,u),e(ht,$t),e($t,ca),g(no,ca,null),e(ht,Nd),e(ht,pa),e(pa,Ad),p(r,Ss,u),p(r,G,u),g(ao,G,null),e(G,Id),e(G,ua),e(ua,Dd),e(G,Gd),e(G,ro),e(ro,Ud),e(ro,$n),e($n,Wd),e(ro,Rd),e(G,Kd),e(G,He),g(so,He,null),e(He,Hd),e(He,ha),e(ha,Qd),e(He,Vd),e(He,ma),e(ma,Jd),e(G,Xd),e(G,Et),g(lo,Et,null),e(Et,Yd),e(Et,mt),e(mt,Zd),e(mt,fa),e(fa,el),e(mt,tl),e(mt,_a),e(_a,ol),e(mt,nl),e(G,al),e(G,Qe),g(io,Qe,null),e(Qe,rl),e(Qe,En),e(En,sl),e(En,Mn),e(Mn,dl),e(Qe,ll),e(Qe,ga),e(ga,il),e(G,cl),e(G,Cn),g(co,Cn,null),p(r,Bs,u),p(r,ft,u),e(ft,Mt),e(Mt,ba),g(po,ba,null),e(ft,pl),e(ft,ka),e(ka,ul),p(r,zs,u),p(r,Ue,u),g(uo,Ue,null),e(Ue,hl),e(Ue,ho),e(ho,ml),e(ho,va),e(va,fl),e(ho,_l),e(Ue,gl),e(Ue,Ct),g(mo,Ct,null),e(Ct,bl),e(Ct,ya),e(ya,kl),p(r,xs,u),p(r,_t,u),e(_t,Pt),e(Pt,Ta),g(fo,Ta,null),e(_t,vl),e(_t,wa),e(wa,yl),p(r,qs,u),p(r,xe,u),g(_o,xe,null),e(xe,Tl),e(xe,go),e(go,wl),e(go,Pn),e(Pn,Sl),e(go,Bl),e(xe,zl),e(xe,bo),e(bo,xl),e(bo,ko),e(ko,ql),e(bo,Fl),e(xe,$l),e(xe,be),g(vo,be,null),e(be,El),e(be,gt),e(gt,Ml),e(gt,jn),e(jn,Cl),e(gt,Pl),e(gt,Sa),e(Sa,jl),e(gt,Ol),e(be,Ll),g(jt,be,null),e(be,Nl),e(be,Ba),e(Ba,Al),e(be,Il),g(yo,be,null),p(r,Fs,u),p(r,bt,u),e(bt,Ot),e(Ot,za),g(To,za,null),e(bt,Dl),e(bt,xa),e(xa,Gl),p(r,$s,u),p(r,qe,u),g(wo,qe,null),e(qe,Ul),e(qe,So),e(So,Wl),e(So,On),e(On,Rl),e(So,Kl),e(qe,Hl),e(qe,Bo),e(Bo,Ql),e(Bo,zo),e(zo,Vl),e(Bo,Jl),e(qe,Xl),e(qe,oe),g(xo,oe,null),e(oe,Yl),e(oe,kt),e(kt,Zl),e(kt,Ln),e(Ln,ei),e(kt,ti),e(kt,qa),e(qa,oi),e(kt,ni),e(oe,ai),g(Lt,oe,null),e(oe,ri),e(oe,Fa),e(Fa,si),e(oe,di),e(oe,$a),e($a,Ea),e(Ea,Ma),e(Ma,Ca),e(Ca,li),e(oe,ii),e(oe,Pa),e(Pa,ja),e(ja,Oa),e(Oa,qo),e(qo,ci),e(qo,La),e(La,pi),e(qo,ui),p(r,Es,u),p(r,vt,u),e(vt,Nt),e(Nt,Na),g(Fo,Na,null),e(vt,hi),e(vt,Aa),e(Aa,mi),p(r,Ms,u),p(r,yt,u),g($o,yt,null),e(yt,fi),e(yt,Ve),g(Eo,Ve,null),e(Ve,_i),e(Ve,Ia),e(Ia,gi),e(Ve,bi),g(Mo,Ve,null),p(r,Cs,u),p(r,Tt,u),e(Tt,At),e(At,Da),g(Co,Da,null),e(Tt,ki),e(Tt,Ga),e(Ga,vi),p(r,Ps,u),p(r,he,u),g(Po,he,null),e(he,yi),e(he,jo),e(jo,Ti),e(jo,Nn),e(Nn,wi),e(jo,Si),e(he,Bi),e(he,Oo),e(Oo,zi),e(Oo,Lo),e(Lo,xi),e(Oo,qi),e(he,Fi),g(It,he,null),e(he,$i),e(he,ke),g(No,ke,null),e(ke,Ei),e(ke,wt),e(wt,Mi),e(wt,An),e(An,Ci),e(wt,Pi),e(wt,Ua),e(Ua,ji),e(wt,Oi),e(ke,Li),g(Dt,ke,null),e(ke,Ni),e(ke,Wa),e(Wa,Ai),e(ke,Ii),g(Ao,ke,null),p(r,js,u),p(r,St,u),e(St,Gt),e(Gt,Ra),g(Io,Ra,null),e(St,Di),e(St,Ka),e(Ka,Gi),p(r,Os,u),p(r,me,u),g(Do,me,null),e(me,Ui),e(me,Go),e(Go,Wi),e(Go,In),e(In,Ri),e(Go,Ki),e(me,Hi),e(me,Uo),e(Uo,Qi),e(Uo,Wo),e(Wo,Vi),e(Uo,Ji),e(me,Xi),g(Ut,me,null),e(me,Yi),e(me,j),g(Ro,j,null),e(j,Zi),e(j,Bt),e(Bt,ec),e(Bt,Dn),e(Dn,tc),e(Bt,oc),e(Bt,Ha),e(Ha,nc),e(Bt,ac),e(j,rc),g(Wt,j,null),e(j,sc),e(j,Qa),e(Qa,dc),e(j,lc),e(j,Va),e(Va,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,ic),e(j,cc),e(j,Za),e(Za,er),e(er,tr),e(tr,or),e(or,pc),e(j,uc),e(j,nr),e(nr,ar),e(ar,rr),e(rr,sr),e(sr,hc),e(j,mc),e(j,dr),e(dr,lr),e(lr,ir),e(ir,Ko),e(Ko,fc),e(Ko,cr),e(cr,_c),e(Ko,gc),e(j,bc),e(j,pr),e(pr,ur),e(ur,hr),e(hr,mr),e(mr,kc),p(r,Ls,u),p(r,zt,u),e(zt,Rt),e(Rt,fr),g(Ho,fr,null),e(zt,vc),e(zt,_r),e(_r,yc),p(r,Ns,u),p(r,N,u),g(Qo,N,null),e(N,Tc),e(N,Vo),e(Vo,wc),e(Vo,Gn),e(Gn,Sc),e(Vo,Bc),e(N,zc),e(N,Jo),e(Jo,xc),e(Jo,Xo),e(Xo,qc),e(Jo,Fc),e(N,$c),e(N,gr),e(gr,Ec),e(N,Mc),e(N,We),e(We,br),e(br,Yo),e(Yo,Cc),e(We,Pc),e(We,kr),e(kr,Zo),e(Zo,jc),e(We,Oc),e(We,vr),e(vr,en),e(en,Lc),e(We,Nc),e(We,yr),e(yr,tn),e(tn,Ac),e(N,Ic),e(N,Je),g(on,Je,null),e(Je,Dc),e(Je,Tr),e(Tr,Gc),e(Je,Uc),g(nn,Je,null),e(N,Wc),e(N,Xe),g(an,Xe,null),e(Xe,Rc),e(Xe,wr),e(wr,Kc),e(Xe,Hc),g(rn,Xe,null),e(N,Qc),e(N,Ye),g(sn,Ye,null),e(Ye,Vc),e(Ye,Sr),e(Sr,Jc),e(Ye,Xc),g(dn,Ye,null),p(r,As,u),p(r,xt,u),e(xt,Kt),e(Kt,Br),g(ln,Br,null),e(xt,Yc),e(xt,zr),e(zr,Zc),p(r,Is,u),p(r,A,u),g(cn,A,null),e(A,ep),e(A,pn),e(pn,tp),e(pn,Un),e(Un,op),e(pn,np),e(A,ap),e(A,un),e(un,rp),e(un,hn),e(hn,sp),e(un,dp),e(A,lp),e(A,xr),e(xr,ip),e(A,cp),e(A,Re),e(Re,qr),e(qr,mn),e(mn,pp),e(Re,up),e(Re,Fr),e(Fr,fn),e(fn,hp),e(Re,mp),e(Re,$r),e($r,_n),e(_n,fp),e(Re,_p),e(Re,Er),e(Er,gn),e(gn,gp),e(A,bp),e(A,$),g(bn,$,null),e($,kp),e($,qt),e(qt,vp),e(qt,Mr),e(Mr,yp),e(qt,Tp),e(qt,Cr),e(Cr,wp),e(qt,Sp),e($,Bp),g(Ht,$,null),e($,zp),e($,Pr),e(Pr,xp),e($,qp),e($,jr),e(jr,Or),e(Or,Lr),e(Lr,Nr),e(Nr,Fp),e($,$p),e($,Ar),e(Ar,Ir),e(Ir,Dr),e(Dr,Gr),e(Gr,Ep),e($,Mp),e($,Ur),e(Ur,Wr),e(Wr,Rr),e(Rr,Kr),e(Kr,Cp),e($,Pp),e($,Hr),e(Hr,Qr),e(Qr,kn),e(kn,Qt),e(Qt,Vt),e(Vt,Vr),g(vn,Vr,null),e(Qt,jp),e(Qt,Jr),e(Jr,Op),e(kn,Lp),e(kn,Xr),e(Xr,Np),e($,Ap),e($,Yr),e(Yr,Ip),e($,Dp),e($,Zr),e(Zr,es),e(es,ts),e(ts,os),e(os,Gp),e($,Up),e($,ns),e(ns,as),e(as,rs),e(rs,ss),e(ss,Wp),e($,Rp),e($,ds),e(ds,ls),e(ls,is),e(is,cs),e(cs,Kp),e($,Hp),e($,ps),e(ps,us),e(us,hs),e(hs,ms),e(ms,Qp),e(A,Vp),e(A,Ze),g(yn,Ze,null),e(Ze,Jp),e(Ze,fs),e(fs,Xp),e(Ze,Yp),g(Tn,Ze,null),e(A,Zp),e(A,et),g(wn,et,null),e(et,eu),e(et,_s),e(_s,tu),e(et,ou),g(Sn,et,null),Ds=!0},p(r,[u]){const Bn={};u&2&&(Bn.$$scope={dirty:u,ctx:r}),jt.$set(Bn);const gs={};u&2&&(gs.$$scope={dirty:u,ctx:r}),Lt.$set(gs);const bs={};u&2&&(bs.$$scope={dirty:u,ctx:r}),It.$set(bs);const ks={};u&2&&(ks.$$scope={dirty:u,ctx:r}),Dt.$set(ks);const ve={};u&2&&(ve.$$scope={dirty:u,ctx:r}),Ut.$set(ve);const vs={};u&2&&(vs.$$scope={dirty:u,ctx:r}),Wt.$set(vs);const ys={};u&2&&(ys.$$scope={dirty:u,ctx:r}),Ht.$set(ys)},i(r){Ds||(b(S.$$.fragment,r),b(se.$$.fragment,r),b(ze.$$.fragment,r),b(eo.$$.fragment,r),b(oo.$$.fragment,r),b(no.$$.fragment,r),b(ao.$$.fragment,r),b(so.$$.fragment,r),b(lo.$$.fragment,r),b(io.$$.fragment,r),b(co.$$.fragment,r),b(po.$$.fragment,r),b(uo.$$.fragment,r),b(mo.$$.fragment,r),b(fo.$$.fragment,r),b(_o.$$.fragment,r),b(vo.$$.fragment,r),b(jt.$$.fragment,r),b(yo.$$.fragment,r),b(To.$$.fragment,r),b(wo.$$.fragment,r),b(xo.$$.fragment,r),b(Lt.$$.fragment,r),b(Fo.$$.fragment,r),b($o.$$.fragment,r),b(Eo.$$.fragment,r),b(Mo.$$.fragment,r),b(Co.$$.fragment,r),b(Po.$$.fragment,r),b(It.$$.fragment,r),b(No.$$.fragment,r),b(Dt.$$.fragment,r),b(Ao.$$.fragment,r),b(Io.$$.fragment,r),b(Do.$$.fragment,r),b(Ut.$$.fragment,r),b(Ro.$$.fragment,r),b(Wt.$$.fragment,r),b(Ho.$$.fragment,r),b(Qo.$$.fragment,r),b(on.$$.fragment,r),b(nn.$$.fragment,r),b(an.$$.fragment,r),b(rn.$$.fragment,r),b(sn.$$.fragment,r),b(dn.$$.fragment,r),b(ln.$$.fragment,r),b(cn.$$.fragment,r),b(bn.$$.fragment,r),b(Ht.$$.fragment,r),b(vn.$$.fragment,r),b(yn.$$.fragment,r),b(Tn.$$.fragment,r),b(wn.$$.fragment,r),b(Sn.$$.fragment,r),Ds=!0)},o(r){k(S.$$.fragment,r),k(se.$$.fragment,r),k(ze.$$.fragment,r),k(eo.$$.fragment,r),k(oo.$$.fragment,r),k(no.$$.fragment,r),k(ao.$$.fragment,r),k(so.$$.fragment,r),k(lo.$$.fragment,r),k(io.$$.fragment,r),k(co.$$.fragment,r),k(po.$$.fragment,r),k(uo.$$.fragment,r),k(mo.$$.fragment,r),k(fo.$$.fragment,r),k(_o.$$.fragment,r),k(vo.$$.fragment,r),k(jt.$$.fragment,r),k(yo.$$.fragment,r),k(To.$$.fragment,r),k(wo.$$.fragment,r),k(xo.$$.fragment,r),k(Lt.$$.fragment,r),k(Fo.$$.fragment,r),k($o.$$.fragment,r),k(Eo.$$.fragment,r),k(Mo.$$.fragment,r),k(Co.$$.fragment,r),k(Po.$$.fragment,r),k(It.$$.fragment,r),k(No.$$.fragment,r),k(Dt.$$.fragment,r),k(Ao.$$.fragment,r),k(Io.$$.fragment,r),k(Do.$$.fragment,r),k(Ut.$$.fragment,r),k(Ro.$$.fragment,r),k(Wt.$$.fragment,r),k(Ho.$$.fragment,r),k(Qo.$$.fragment,r),k(on.$$.fragment,r),k(nn.$$.fragment,r),k(an.$$.fragment,r),k(rn.$$.fragment,r),k(sn.$$.fragment,r),k(dn.$$.fragment,r),k(ln.$$.fragment,r),k(cn.$$.fragment,r),k(bn.$$.fragment,r),k(Ht.$$.fragment,r),k(vn.$$.fragment,r),k(yn.$$.fragment,r),k(Tn.$$.fragment,r),k(wn.$$.fragment,r),k(Sn.$$.fragment,r),Ds=!1},d(r){t(h),r&&t(x),r&&t(y),v(S),r&&t(fe),r&&t(z),r&&t($e),r&&t(J),v(se),r&&t(Ee),r&&t(ee),r&&t(Me),r&&t(R),r&&t(m),r&&t(F),r&&t(Ke),r&&t(P),r&&t(te),r&&t(pe),v(ze),r&&t(Ts),r&&t(ue),v(eo),v(oo),r&&t(ws),r&&t(ht),v(no),r&&t(Ss),r&&t(G),v(ao),v(so),v(lo),v(io),v(co),r&&t(Bs),r&&t(ft),v(po),r&&t(zs),r&&t(Ue),v(uo),v(mo),r&&t(xs),r&&t(_t),v(fo),r&&t(qs),r&&t(xe),v(_o),v(vo),v(jt),v(yo),r&&t(Fs),r&&t(bt),v(To),r&&t($s),r&&t(qe),v(wo),v(xo),v(Lt),r&&t(Es),r&&t(vt),v(Fo),r&&t(Ms),r&&t(yt),v($o),v(Eo),v(Mo),r&&t(Cs),r&&t(Tt),v(Co),r&&t(Ps),r&&t(he),v(Po),v(It),v(No),v(Dt),v(Ao),r&&t(js),r&&t(St),v(Io),r&&t(Os),r&&t(me),v(Do),v(Ut),v(Ro),v(Wt),r&&t(Ls),r&&t(zt),v(Ho),r&&t(Ns),r&&t(N),v(Qo),v(on),v(nn),v(an),v(rn),v(sn),v(dn),r&&t(As),r&&t(xt),v(ln),r&&t(Is),r&&t(A),v(cn),v(bn),v(Ht),v(vn),v(yn),v(Tn),v(wn),v(Sn)}}}const xf={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function qf(H,h,x){let{fw:y}=h;return H.$$set=T=>{"fw"in T&&x(0,y=T.fw)},[y]}class jf extends ff{constructor(h){super();_f(this,h,qf,zf,gf,{fw:0})}}export{jf as default,xf as metadata};
