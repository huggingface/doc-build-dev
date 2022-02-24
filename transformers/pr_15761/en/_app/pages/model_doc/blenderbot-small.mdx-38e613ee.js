import{S as c_,i as p_,s as u_,e as o,k as l,w as _,t as s,L as h_,c as n,d as t,m as i,a,x as f,h as d,b as c,J as e,g as p,y as g,q as b,o as k,B as v}from"../../chunks/vendor-9e2b328e.js";import{T as Sn}from"../../chunks/Tip-76f97a76.js";import{D as P}from"../../chunks/Docstring-50fd6873.js";import{C as qt}from"../../chunks/CodeBlock-88e23343.js";import{I as Fe}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function m_(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function __(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function f_(H){let h,x,y,T,B,S,w,q,Pe,_e,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,fe,re,Ee,J,I,Te,se,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge;return{c(){h=o("p"),x=s("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=s("having all inputs as a list, tuple or dict in the first positional arguments."),_e=l(),z=o("p"),je=s("This second option is useful when using "),U=o("code"),Oe=s("tf.keras.Model.fit"),Le=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=s("model(inputs)"),Ae=s("."),Q=l(),V=o("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=o("ul"),O=o("li"),fe=s("a single Tensor with "),re=o("code"),Ee=s("input_ids"),J=s(" only and nothing else: "),I=o("code"),Te=s("model(input_ids)"),se=l(),L=o("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),$e=s("model([input_ids, attention_mask])"),ee=s(" or "),le=o("code"),ie=s("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=n(m,"P",{});var F=a(h);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(m),T=n(m,"UL",{});var ce=a(T);B=n(ce,"LI",{});var st=a(B);S=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),_e=i(m),z=n(m,"P",{});var C=a(z);je=d(C,"This second option is useful when using "),U=n(C,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(C,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ae=d(C,"."),C.forEach(t),Q=i(m),V=n(m,"P",{});var lt=a(V);Ie=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(m),M=n(m,"UL",{});var Y=a(M);O=n(Y,"LI",{});var D=a(O);fe=d(D,"a single Tensor with "),re=n(D,"CODE",{});var it=a(re);Ee=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var ct=a(I);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),se=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);$e=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(m,F){p(m,h,F),e(h,x),p(m,y,F),p(m,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(m,_e,F),p(m,z,F),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),p(m,Q,F),p(m,V,F),e(V,Ie),p(m,Z,F),p(m,M,F),e(M,O),e(O,fe),e(O,re),e(re,Ee),e(O,J),e(O,I),e(I,Te),e(M,se),e(M,L),e(L,we),e(L,de),e(de,$e),e(L,ee),e(L,le),e(le,ie),e(M,De),e(M,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&t(h),m&&t(y),m&&t(T),m&&t(_e),m&&t(z),m&&t(Q),m&&t(V),m&&t(Z),m&&t(M)}}}function g_(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function b_(H){let h,x,y,T,B,S,w,q,Pe,_e,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,fe,re,Ee,J,I,Te,se,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge;return{c(){h=o("p"),x=s("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=s("having all inputs as a list, tuple or dict in the first positional arguments."),_e=l(),z=o("p"),je=s("This second option is useful when using "),U=o("code"),Oe=s("tf.keras.Model.fit"),Le=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=s("model(inputs)"),Ae=s("."),Q=l(),V=o("p"),Ie=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=o("ul"),O=o("li"),fe=s("a single Tensor with "),re=o("code"),Ee=s("input_ids"),J=s(" only and nothing else: "),I=o("code"),Te=s("model(input_ids)"),se=l(),L=o("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),$e=s("model([input_ids, attention_mask])"),ee=s(" or "),le=o("code"),ie=s("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=n(m,"P",{});var F=a(h);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(m),T=n(m,"UL",{});var ce=a(T);B=n(ce,"LI",{});var st=a(B);S=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),_e=i(m),z=n(m,"P",{});var C=a(z);je=d(C,"This second option is useful when using "),U=n(C,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(C,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ae=d(C,"."),C.forEach(t),Q=i(m),V=n(m,"P",{});var lt=a(V);Ie=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(m),M=n(m,"UL",{});var Y=a(M);O=n(Y,"LI",{});var D=a(O);fe=d(D,"a single Tensor with "),re=n(D,"CODE",{});var it=a(re);Ee=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var ct=a(I);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),se=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);$e=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(m,F){p(m,h,F),e(h,x),p(m,y,F),p(m,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(m,_e,F),p(m,z,F),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),p(m,Q,F),p(m,V,F),e(V,Ie),p(m,Z,F),p(m,M,F),e(M,O),e(O,fe),e(O,re),e(re,Ee),e(O,J),e(O,I),e(I,Te),e(M,se),e(M,L),e(L,we),e(L,de),e(de,$e),e(L,ee),e(L,le),e(le,ie),e(M,De),e(M,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&t(h),m&&t(y),m&&t(T),m&&t(_e),m&&t(z),m&&t(Q),m&&t(V),m&&t(Z),m&&t(M)}}}function k_(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function v_(H){let h,x,y,T,B;return{c(){h=o("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function y_(H){let h,x,y,T,B,S,w,q,Pe,_e,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,fe,re,Ee,J,I,Te,se,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge,m,F,ce,st,Ke,C,dt,Se,lt,Y,D,it,ct,te,pe,ge,Be,ze,bd,ra,kd,vs,ue,Zt,vd,pt,yd,Bn,Td,wd,eo,Sd,Bd,zd,ut,xd,zn,qd,Fd,xn,Ed,$d,Md,sa,Cd,Pd,to,ys,ht,Ft,da,oo,jd,la,Od,Ts,G,no,Ld,ia,Nd,Ad,ao,Id,qn,Dd,Gd,Ud,He,ro,Wd,ca,Rd,Kd,pa,Hd,Qd,Et,so,Vd,mt,Jd,ua,Xd,Yd,ha,Zd,el,tl,Qe,lo,ol,Fn,nl,En,al,rl,ma,sl,dl,_a,ws,_t,$t,fa,io,ll,ga,il,Ss,Ue,co,cl,po,pl,ba,ul,hl,ml,Mt,uo,_l,ka,fl,Bs,ft,Ct,va,ho,gl,ya,bl,zs,xe,mo,kl,_o,vl,$n,yl,Tl,wl,fo,Sl,go,Bl,zl,xl,be,bo,ql,gt,Fl,Mn,El,$l,Ta,Ml,Cl,Pl,Pt,jl,wa,Ol,Ll,ko,xs,bt,jt,Sa,vo,Nl,Ba,Al,qs,qe,yo,Il,To,Dl,Cn,Gl,Ul,Wl,wo,Rl,So,Kl,Hl,Ql,oe,Bo,Vl,kt,Jl,Pn,Xl,Yl,za,Zl,ei,ti,Ot,oi,xa,ni,ai,qa,Fa,Ea,$a,ri,si,Ma,Ca,Pa,zo,di,ja,li,ii,Fs,vt,Lt,Oa,xo,ci,La,pi,Es,qo,Ve,Fo,ui,Na,hi,mi,Eo,$s,yt,Nt,Aa,$o,_i,Ia,fi,Ms,he,Mo,gi,Co,bi,jn,ki,vi,yi,Po,Ti,jo,wi,Si,Bi,At,zi,ke,Oo,xi,Tt,qi,On,Fi,Ei,Da,$i,Mi,Ci,It,Pi,Ga,ji,Oi,Lo,Cs,wt,Dt,Ua,No,Li,Wa,Ni,Ps,me,Ao,Ai,Io,Ii,Ln,Di,Gi,Ui,Do,Wi,Go,Ri,Ki,Hi,Gt,Qi,j,Uo,Vi,St,Ji,Nn,Xi,Yi,Ra,Zi,ec,tc,Ut,oc,Ka,nc,ac,Ha,Qa,Va,Ja,rc,sc,Xa,Ya,Za,er,dc,lc,tr,or,nr,ar,ic,cc,rr,sr,dr,Wo,pc,lr,uc,hc,mc,ir,cr,pr,ur,_c,js,Bt,Wt,hr,Ro,fc,mr,gc,Os,N,Ko,bc,Ho,kc,An,vc,yc,Tc,Qo,wc,Vo,Sc,Bc,zc,_r,xc,qc,We,fr,Jo,Fc,Ec,gr,Xo,$c,Mc,br,Yo,Cc,Pc,kr,Zo,jc,Oc,Je,en,Lc,vr,Nc,Ac,tn,Ic,Xe,on,Dc,yr,Gc,Uc,nn,Wc,Ye,an,Rc,Tr,Kc,Hc,rn,Ls,zt,Rt,wr,sn,Qc,Sr,Vc,Ns,A,dn,Jc,ln,Xc,In,Yc,Zc,ep,cn,tp,pn,op,np,ap,Br,rp,sp,Re,zr,un,dp,lp,xr,hn,ip,cp,qr,mn,pp,up,Fr,_n,hp,mp,E,fn,_p,xt,fp,Er,gp,bp,$r,kp,vp,yp,Kt,Tp,Mr,wp,Sp,Cr,Pr,jr,Or,Bp,zp,Lr,Nr,Ar,Ir,xp,qp,Dr,Gr,Ur,Wr,Fp,Ep,Rr,Kr,gn,Ht,Qt,Hr,bn,$p,Qr,Mp,Cp,Vr,Pp,jp,Jr,Op,Lp,Xr,Yr,Zr,es,Np,Ap,ts,os,ns,as,Ip,Dp,rs,ss,ds,ls,Gp,Up,is,cs,ps,us,Wp,Rp,Ze,kn,Kp,hs,Hp,Qp,vn,Vp,et,yn,Jp,ms,Xp,Yp,Tn,As;return S=new Fe({}),se=new Fe({}),ze=new Fe({}),Zt=new P({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),to=new qt({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),oo=new Fe({}),no=new P({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_15761/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),ro=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/tokenization_utils_base.py#L2884",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),so=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/tokenization_utils.py#L843",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),lo=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),io=new Fe({}),co=new P({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),uo=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ho=new Fe({}),mo=new P({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1058",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bo=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1085",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pt=new Sn({props:{$$slots:{default:[m_]},$$scope:{ctx:H}}}),ko=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vo=new Fe({}),yo=new P({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1184",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1228",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Sn({props:{$$slots:{default:[__]},$$scope:{ctx:H}}}),xo=new Fe({}),Fo=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1395",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$o=new Fe({}),Mo=new P({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1174",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),At=new Sn({props:{$$slots:{default:[f_]},$$scope:{ctx:H}}}),Oo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1186",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),It=new Sn({props:{$$slots:{default:[g_]},$$scope:{ctx:H}}}),Lo=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),No=new Fe({}),Ao=new P({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1281",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gt=new Sn({props:{$$slots:{default:[b_]},$$scope:{ctx:H}}}),Uo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1314",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ut=new Sn({props:{$$slots:{default:[k_]},$$scope:{ctx:H}}}),Ro=new Fe({}),Ko=new P({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1218",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),en=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),on=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),an=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1038",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new qt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),sn=new Fe({}),dn=new P({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1306",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),fn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Sn({props:{$$slots:{default:[v_]},$$scope:{ctx:H}}}),bn=new Fe({}),kn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),yn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1310",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new qt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=o("meta"),x=l(),y=o("h1"),T=o("a"),B=o("span"),_(S.$$.fragment),w=l(),q=o("span"),Pe=s("Blenderbot Small"),_e=l(),z=o("p"),je=s("Note that "),U=o("a"),Oe=s("BlenderbotSmallModel"),Le=s(` and
`),W=o("a"),Ne=s("BlenderbotSmallForConditionalGeneration"),Ae=s(` are only used in combination with the checkpoint
`),Q=o("a"),V=s("facebook/blenderbot-90M"),Ie=s(`. Larger Blenderbot checkpoints should
instead be used with `),Z=o("a"),M=s("BlenderbotModel"),O=s(` and
`),fe=o("a"),re=s("BlenderbotForConditionalGeneration"),Ee=l(),J=o("h2"),I=o("a"),Te=o("span"),_(se.$$.fragment),L=l(),we=o("span"),de=s("Overview"),$e=l(),ee=o("p"),le=s("The Blender chatbot model was proposed in "),ie=o("a"),De=s("Recipes for building an open-domain chatbot"),X=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=o("p"),Ge=s("The abstract of the paper is the following:"),m=l(),F=o("p"),ce=o("em"),st=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ke=l(),C=o("p"),dt=s("This model was contributed by "),Se=o("a"),lt=s("patrickvonplaten"),Y=s(`. The authors\u2019 code can be
found `),D=o("a"),it=s("here"),ct=s(" ."),te=l(),pe=o("h2"),ge=o("a"),Be=o("span"),_(ze.$$.fragment),bd=l(),ra=o("span"),kd=s("BlenderbotSmallConfig"),vs=l(),ue=o("div"),_(Zt.$$.fragment),vd=l(),pt=o("p"),yd=s("This is the configuration class to store the configuration of a "),Bn=o("a"),Td=s("BlenderbotSmallModel"),wd=s(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),eo=o("a"),Sd=s("facebook/blenderbot_small-90M"),Bd=s(" architecture."),zd=l(),ut=o("p"),xd=s("Configuration objects inherit from "),zn=o("a"),qd=s("PretrainedConfig"),Fd=s(` and can be used to control the model outputs. Read the
documentation from `),xn=o("a"),Ed=s("PretrainedConfig"),$d=s(" for more information."),Md=l(),sa=o("p"),Cd=s("Example:"),Pd=l(),_(to.$$.fragment),ys=l(),ht=o("h2"),Ft=o("a"),da=o("span"),_(oo.$$.fragment),jd=l(),la=o("span"),Od=s("BlenderbotSmallTokenizer"),Ts=l(),G=o("div"),_(no.$$.fragment),Ld=l(),ia=o("p"),Nd=s("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Ad=l(),ao=o("p"),Id=s("This tokenizer inherits from "),qn=o("a"),Dd=s("PreTrainedTokenizer"),Gd=s(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ud=l(),He=o("div"),_(ro.$$.fragment),Wd=l(),ca=o("p"),Rd=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Kd=l(),pa=o("p"),Hd=s("This implementation does not add special tokens and this method should be overridden in a subclass."),Qd=l(),Et=o("div"),_(so.$$.fragment),Vd=l(),mt=o("p"),Jd=s(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ua=o("code"),Xd=s("prepare_for_model"),Yd=s(" or "),ha=o("code"),Zd=s("encode_plus"),el=s(" methods."),tl=l(),Qe=o("div"),_(lo.$$.fragment),ol=l(),Fn=o("p"),nl=s("Create the token type IDs corresponding to the sequences passed. "),En=o("a"),al=s(`What are token type
IDs?`),rl=l(),ma=o("p"),sl=s("Should be overridden in a subclass if the model has a special way of building those."),dl=l(),_a=o("div"),ws=l(),_t=o("h2"),$t=o("a"),fa=o("span"),_(io.$$.fragment),ll=l(),ga=o("span"),il=s("BlenderbotSmallTokenizerFast"),Ss=l(),Ue=o("div"),_(co.$$.fragment),cl=l(),po=o("p"),pl=s("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ba=o("em"),ul=s("tokenizers"),hl=s(" library)."),ml=l(),Mt=o("div"),_(uo.$$.fragment),_l=l(),ka=o("p"),fl=s(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Bs=l(),ft=o("h2"),Ct=o("a"),va=o("span"),_(ho.$$.fragment),gl=l(),ya=o("span"),bl=s("BlenderbotSmallModel"),zs=l(),xe=o("div"),_(mo.$$.fragment),kl=l(),_o=o("p"),vl=s(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=o("a"),yl=s("PreTrainedModel"),Tl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl=l(),fo=o("p"),Sl=s("This model is also a PyTorch "),go=o("a"),Bl=s("torch.nn.Module"),zl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xl=l(),be=o("div"),_(bo.$$.fragment),ql=l(),gt=o("p"),Fl=s("The "),Mn=o("a"),El=s("BlenderbotSmallModel"),$l=s(" forward method, overrides the "),Ta=o("code"),Ml=s("__call__"),Cl=s(" special method."),Pl=l(),_(Pt.$$.fragment),jl=l(),wa=o("p"),Ol=s("Example:"),Ll=l(),_(ko.$$.fragment),xs=l(),bt=o("h2"),jt=o("a"),Sa=o("span"),_(vo.$$.fragment),Nl=l(),Ba=o("span"),Al=s("BlenderbotSmallForConditionalGeneration"),qs=l(),qe=o("div"),_(yo.$$.fragment),Il=l(),To=o("p"),Dl=s(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=o("a"),Gl=s("PreTrainedModel"),Ul=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wl=l(),wo=o("p"),Rl=s("This model is also a PyTorch "),So=o("a"),Kl=s("torch.nn.Module"),Hl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ql=l(),oe=o("div"),_(Bo.$$.fragment),Vl=l(),kt=o("p"),Jl=s("The "),Pn=o("a"),Xl=s("BlenderbotSmallForConditionalGeneration"),Yl=s(" forward method, overrides the "),za=o("code"),Zl=s("__call__"),ei=s(" special method."),ti=l(),_(Ot.$$.fragment),oi=l(),xa=o("p"),ni=s("Conversation example::"),ai=l(),qa=o("blockquote"),Fa=o("blockquote"),Ea=o("blockquote"),$a=o("p"),ri=s(`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),si=l(),Ma=o("blockquote"),Ca=o("blockquote"),Pa=o("blockquote"),zo=o("p"),di=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ja=o("s"),li=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),ii=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Fs=l(),vt=o("h2"),Lt=o("a"),Oa=o("span"),_(xo.$$.fragment),ci=l(),La=o("span"),pi=s("BlenderbotSmallForCausalLM"),Es=l(),qo=o("div"),Ve=o("div"),_(Fo.$$.fragment),ui=l(),Na=o("p"),hi=s("Example:"),mi=l(),_(Eo.$$.fragment),$s=l(),yt=o("h2"),Nt=o("a"),Aa=o("span"),_($o.$$.fragment),_i=l(),Ia=o("span"),fi=s("TFBlenderbotSmallModel"),Ms=l(),he=o("div"),_(Mo.$$.fragment),gi=l(),Co=o("p"),bi=s(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=o("a"),ki=s("TFPreTrainedModel"),vi=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi=l(),Po=o("p"),Ti=s("This model is also a "),jo=o("a"),wi=s("tf.keras.Model"),Si=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bi=l(),_(At.$$.fragment),zi=l(),ke=o("div"),_(Oo.$$.fragment),xi=l(),Tt=o("p"),qi=s("The "),On=o("a"),Fi=s("TFBlenderbotSmallModel"),Ei=s(" forward method, overrides the "),Da=o("code"),$i=s("__call__"),Mi=s(" special method."),Ci=l(),_(It.$$.fragment),Pi=l(),Ga=o("p"),ji=s("Example:"),Oi=l(),_(Lo.$$.fragment),Cs=l(),wt=o("h2"),Dt=o("a"),Ua=o("span"),_(No.$$.fragment),Li=l(),Wa=o("span"),Ni=s("TFBlenderbotSmallForConditionalGeneration"),Ps=l(),me=o("div"),_(Ao.$$.fragment),Ai=l(),Io=o("p"),Ii=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ln=o("a"),Di=s("TFPreTrainedModel"),Gi=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ui=l(),Do=o("p"),Wi=s("This model is also a "),Go=o("a"),Ri=s("tf.keras.Model"),Ki=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hi=l(),_(Gt.$$.fragment),Qi=l(),j=o("div"),_(Uo.$$.fragment),Vi=l(),St=o("p"),Ji=s("The "),Nn=o("a"),Xi=s("TFBlenderbotSmallForConditionalGeneration"),Yi=s(" forward method, overrides the "),Ra=o("code"),Zi=s("__call__"),ec=s(" special method."),tc=l(),_(Ut.$$.fragment),oc=l(),Ka=o("p"),nc=s("Conversation example::"),ac=l(),Ha=o("blockquote"),Qa=o("blockquote"),Va=o("blockquote"),Ja=o("p"),rc=s(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),sc=l(),Xa=o("blockquote"),Ya=o("blockquote"),Za=o("blockquote"),er=o("p"),dc=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),lc=l(),tr=o("blockquote"),or=o("blockquote"),nr=o("blockquote"),ar=o("p"),ic=s(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),cc=l(),rr=o("blockquote"),sr=o("blockquote"),dr=o("blockquote"),Wo=o("p"),pc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),lr=o("s"),uc=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),hc=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),mc=l(),ir=o("blockquote"),cr=o("blockquote"),pr=o("blockquote"),ur=o("p"),_c=s(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),js=l(),Bt=o("h2"),Wt=o("a"),hr=o("span"),_(Ro.$$.fragment),fc=l(),mr=o("span"),gc=s("FlaxBlenderbotSmallModel"),Os=l(),N=o("div"),_(Ko.$$.fragment),bc=l(),Ho=o("p"),kc=s(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=o("a"),vc=s("FlaxPreTrainedModel"),yc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tc=l(),Qo=o("p"),wc=s(`This model is also a Flax Linen
`),Vo=o("a"),Sc=s("flax.nn.Module"),Bc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zc=l(),_r=o("p"),xc=s("Finally, this model supports inherent JAX features such as:"),qc=l(),We=o("ul"),fr=o("li"),Jo=o("a"),Fc=s("Just-In-Time (JIT) compilation"),Ec=l(),gr=o("li"),Xo=o("a"),$c=s("Automatic Differentiation"),Mc=l(),br=o("li"),Yo=o("a"),Cc=s("Vectorization"),Pc=l(),kr=o("li"),Zo=o("a"),jc=s("Parallelization"),Oc=l(),Je=o("div"),_(en.$$.fragment),Lc=l(),vr=o("p"),Nc=s("Example:"),Ac=l(),_(tn.$$.fragment),Ic=l(),Xe=o("div"),_(on.$$.fragment),Dc=l(),yr=o("p"),Gc=s("Example:"),Uc=l(),_(nn.$$.fragment),Wc=l(),Ye=o("div"),_(an.$$.fragment),Rc=l(),Tr=o("p"),Kc=s("Example:"),Hc=l(),_(rn.$$.fragment),Ls=l(),zt=o("h2"),Rt=o("a"),wr=o("span"),_(sn.$$.fragment),Qc=l(),Sr=o("span"),Vc=s("FlaxBlenderbotForConditionalGeneration"),Ns=l(),A=o("div"),_(dn.$$.fragment),Jc=l(),ln=o("p"),Xc=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=o("a"),Yc=s("FlaxPreTrainedModel"),Zc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=l(),cn=o("p"),tp=s(`This model is also a Flax Linen
`),pn=o("a"),op=s("flax.nn.Module"),np=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ap=l(),Br=o("p"),rp=s("Finally, this model supports inherent JAX features such as:"),sp=l(),Re=o("ul"),zr=o("li"),un=o("a"),dp=s("Just-In-Time (JIT) compilation"),lp=l(),xr=o("li"),hn=o("a"),ip=s("Automatic Differentiation"),cp=l(),qr=o("li"),mn=o("a"),pp=s("Vectorization"),up=l(),Fr=o("li"),_n=o("a"),hp=s("Parallelization"),mp=l(),E=o("div"),_(fn.$$.fragment),_p=l(),xt=o("p"),fp=s("The "),Er=o("code"),gp=s("FlaxBlenderbotSmallPreTrainedModel"),bp=s("forward method, overrides the "),$r=o("code"),kp=s("__call__"),vp=s(" special method."),yp=l(),_(Kt.$$.fragment),Tp=l(),Mr=o("p"),wp=s("Summarization example:"),Sp=l(),Cr=o("blockquote"),Pr=o("blockquote"),jr=o("blockquote"),Or=o("p"),Bp=s("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),zp=l(),Lr=o("blockquote"),Nr=o("blockquote"),Ar=o("blockquote"),Ir=o("p"),xp=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),qp=l(),Dr=o("blockquote"),Gr=o("blockquote"),Ur=o("blockquote"),Wr=o("p"),Fp=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Ep=l(),Rr=o("blockquote"),Kr=o("blockquote"),gn=o("blockquote"),Ht=o("h1"),Qt=o("a"),Hr=o("span"),_(bn.$$.fragment),$p=l(),Qr=o("span"),Mp=s("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Cp=l(),Vr=o("p"),Pp=s("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),jp=l(),Jr=o("p"),Op=s("Mask filling example:"),Lp=l(),Xr=o("blockquote"),Yr=o("blockquote"),Zr=o("blockquote"),es=o("p"),Np=s(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Ap=l(),ts=o("blockquote"),os=o("blockquote"),ns=o("blockquote"),as=o("p"),Ip=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Dp=l(),rs=o("blockquote"),ss=o("blockquote"),ds=o("blockquote"),ls=o("p"),Gp=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Up=l(),is=o("blockquote"),cs=o("blockquote"),ps=o("blockquote"),us=o("p"),Wp=s("tokenizer.decode(predictions).split()"),Rp=l(),Ze=o("div"),_(kn.$$.fragment),Kp=l(),hs=o("p"),Hp=s("Example:"),Qp=l(),_(vn.$$.fragment),Vp=l(),et=o("div"),_(yn.$$.fragment),Jp=l(),ms=o("p"),Xp=s("Example:"),Yp=l(),_(Tn.$$.fragment),this.h()},l(r){const u=h_('[data-svelte="svelte-1phssyn"]',document.head);h=n(u,"META",{name:!0,content:!0}),u.forEach(t),x=i(r),y=n(r,"H1",{class:!0});var wn=a(y);T=n(wn,"A",{id:!0,class:!0,href:!0});var _s=a(T);B=n(_s,"SPAN",{});var fs=a(B);f(S.$$.fragment,fs),fs.forEach(t),_s.forEach(t),w=i(wn),q=n(wn,"SPAN",{});var gs=a(q);Pe=d(gs,"Blenderbot Small"),gs.forEach(t),wn.forEach(t),_e=i(r),z=n(r,"P",{});var ve=a(z);je=d(ve,"Note that "),U=n(ve,"A",{href:!0});var bs=a(U);Oe=d(bs,"BlenderbotSmallModel"),bs.forEach(t),Le=d(ve,` and
`),W=n(ve,"A",{href:!0});var ks=a(W);Ne=d(ks,"BlenderbotSmallForConditionalGeneration"),ks.forEach(t),Ae=d(ve,` are only used in combination with the checkpoint
`),Q=n(ve,"A",{href:!0,rel:!0});var eu=a(Q);V=d(eu,"facebook/blenderbot-90M"),eu.forEach(t),Ie=d(ve,`. Larger Blenderbot checkpoints should
instead be used with `),Z=n(ve,"A",{href:!0});var tu=a(Z);M=d(tu,"BlenderbotModel"),tu.forEach(t),O=d(ve,` and
`),fe=n(ve,"A",{href:!0});var ou=a(fe);re=d(ou,"BlenderbotForConditionalGeneration"),ou.forEach(t),ve.forEach(t),Ee=i(r),J=n(r,"H2",{class:!0});var Is=a(J);I=n(Is,"A",{id:!0,class:!0,href:!0});var nu=a(I);Te=n(nu,"SPAN",{});var au=a(Te);f(se.$$.fragment,au),au.forEach(t),nu.forEach(t),L=i(Is),we=n(Is,"SPAN",{});var ru=a(we);de=d(ru,"Overview"),ru.forEach(t),Is.forEach(t),$e=i(r),ee=n(r,"P",{});var Ds=a(ee);le=d(Ds,"The Blender chatbot model was proposed in "),ie=n(Ds,"A",{href:!0,rel:!0});var su=a(ie);De=d(su,"Recipes for building an open-domain chatbot"),su.forEach(t),X=d(Ds,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Ds.forEach(t),Me=i(r),R=n(r,"P",{});var du=a(R);Ge=d(du,"The abstract of the paper is the following:"),du.forEach(t),m=i(r),F=n(r,"P",{});var lu=a(F);ce=n(lu,"EM",{});var iu=a(ce);st=d(iu,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),iu.forEach(t),lu.forEach(t),Ke=i(r),C=n(r,"P",{});var Dn=a(C);dt=d(Dn,"This model was contributed by "),Se=n(Dn,"A",{href:!0,rel:!0});var cu=a(Se);lt=d(cu,"patrickvonplaten"),cu.forEach(t),Y=d(Dn,`. The authors\u2019 code can be
found `),D=n(Dn,"A",{href:!0,rel:!0});var pu=a(D);it=d(pu,"here"),pu.forEach(t),ct=d(Dn," ."),Dn.forEach(t),te=i(r),pe=n(r,"H2",{class:!0});var Gs=a(pe);ge=n(Gs,"A",{id:!0,class:!0,href:!0});var uu=a(ge);Be=n(uu,"SPAN",{});var hu=a(Be);f(ze.$$.fragment,hu),hu.forEach(t),uu.forEach(t),bd=i(Gs),ra=n(Gs,"SPAN",{});var mu=a(ra);kd=d(mu,"BlenderbotSmallConfig"),mu.forEach(t),Gs.forEach(t),vs=i(r),ue=n(r,"DIV",{class:!0});var tt=a(ue);f(Zt.$$.fragment,tt),vd=i(tt),pt=n(tt,"P",{});var Gn=a(pt);yd=d(Gn,"This is the configuration class to store the configuration of a "),Bn=n(Gn,"A",{href:!0});var _u=a(Bn);Td=d(_u,"BlenderbotSmallModel"),_u.forEach(t),wd=d(Gn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),eo=n(Gn,"A",{href:!0,rel:!0});var fu=a(eo);Sd=d(fu,"facebook/blenderbot_small-90M"),fu.forEach(t),Bd=d(Gn," architecture."),Gn.forEach(t),zd=i(tt),ut=n(tt,"P",{});var Un=a(ut);xd=d(Un,"Configuration objects inherit from "),zn=n(Un,"A",{href:!0});var gu=a(zn);qd=d(gu,"PretrainedConfig"),gu.forEach(t),Fd=d(Un,` and can be used to control the model outputs. Read the
documentation from `),xn=n(Un,"A",{href:!0});var bu=a(xn);Ed=d(bu,"PretrainedConfig"),bu.forEach(t),$d=d(Un," for more information."),Un.forEach(t),Md=i(tt),sa=n(tt,"P",{});var ku=a(sa);Cd=d(ku,"Example:"),ku.forEach(t),Pd=i(tt),f(to.$$.fragment,tt),tt.forEach(t),ys=i(r),ht=n(r,"H2",{class:!0});var Us=a(ht);Ft=n(Us,"A",{id:!0,class:!0,href:!0});var vu=a(Ft);da=n(vu,"SPAN",{});var yu=a(da);f(oo.$$.fragment,yu),yu.forEach(t),vu.forEach(t),jd=i(Us),la=n(Us,"SPAN",{});var Tu=a(la);Od=d(Tu,"BlenderbotSmallTokenizer"),Tu.forEach(t),Us.forEach(t),Ts=i(r),G=n(r,"DIV",{class:!0});var ye=a(G);f(no.$$.fragment,ye),Ld=i(ye),ia=n(ye,"P",{});var wu=a(ia);Nd=d(wu,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),wu.forEach(t),Ad=i(ye),ao=n(ye,"P",{});var Ws=a(ao);Id=d(Ws,"This tokenizer inherits from "),qn=n(Ws,"A",{href:!0});var Su=a(qn);Dd=d(Su,"PreTrainedTokenizer"),Su.forEach(t),Gd=d(Ws,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ws.forEach(t),Ud=i(ye),He=n(ye,"DIV",{class:!0});var Wn=a(He);f(ro.$$.fragment,Wn),Wd=i(Wn),ca=n(Wn,"P",{});var Bu=a(ca);Rd=d(Bu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Bu.forEach(t),Kd=i(Wn),pa=n(Wn,"P",{});var zu=a(pa);Hd=d(zu,"This implementation does not add special tokens and this method should be overridden in a subclass."),zu.forEach(t),Wn.forEach(t),Qd=i(ye),Et=n(ye,"DIV",{class:!0});var Rs=a(Et);f(so.$$.fragment,Rs),Vd=i(Rs),mt=n(Rs,"P",{});var Rn=a(mt);Jd=d(Rn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ua=n(Rn,"CODE",{});var xu=a(ua);Xd=d(xu,"prepare_for_model"),xu.forEach(t),Yd=d(Rn," or "),ha=n(Rn,"CODE",{});var qu=a(ha);Zd=d(qu,"encode_plus"),qu.forEach(t),el=d(Rn," methods."),Rn.forEach(t),Rs.forEach(t),tl=i(ye),Qe=n(ye,"DIV",{class:!0});var Kn=a(Qe);f(lo.$$.fragment,Kn),ol=i(Kn),Fn=n(Kn,"P",{});var Zp=a(Fn);nl=d(Zp,"Create the token type IDs corresponding to the sequences passed. "),En=n(Zp,"A",{href:!0});var Fu=a(En);al=d(Fu,`What are token type
IDs?`),Fu.forEach(t),Zp.forEach(t),rl=i(Kn),ma=n(Kn,"P",{});var Eu=a(ma);sl=d(Eu,"Should be overridden in a subclass if the model has a special way of building those."),Eu.forEach(t),Kn.forEach(t),dl=i(ye),_a=n(ye,"DIV",{class:!0}),a(_a).forEach(t),ye.forEach(t),ws=i(r),_t=n(r,"H2",{class:!0});var Ks=a(_t);$t=n(Ks,"A",{id:!0,class:!0,href:!0});var $u=a($t);fa=n($u,"SPAN",{});var Mu=a(fa);f(io.$$.fragment,Mu),Mu.forEach(t),$u.forEach(t),ll=i(Ks),ga=n(Ks,"SPAN",{});var Cu=a(ga);il=d(Cu,"BlenderbotSmallTokenizerFast"),Cu.forEach(t),Ks.forEach(t),Ss=i(r),Ue=n(r,"DIV",{class:!0});var Hn=a(Ue);f(co.$$.fragment,Hn),cl=i(Hn),po=n(Hn,"P",{});var Hs=a(po);pl=d(Hs,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ba=n(Hs,"EM",{});var Pu=a(ba);ul=d(Pu,"tokenizers"),Pu.forEach(t),hl=d(Hs," library)."),Hs.forEach(t),ml=i(Hn),Mt=n(Hn,"DIV",{class:!0});var Qs=a(Mt);f(uo.$$.fragment,Qs),_l=i(Qs),ka=n(Qs,"P",{});var ju=a(ka);fl=d(ju,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),ju.forEach(t),Qs.forEach(t),Hn.forEach(t),Bs=i(r),ft=n(r,"H2",{class:!0});var Vs=a(ft);Ct=n(Vs,"A",{id:!0,class:!0,href:!0});var Ou=a(Ct);va=n(Ou,"SPAN",{});var Lu=a(va);f(ho.$$.fragment,Lu),Lu.forEach(t),Ou.forEach(t),gl=i(Vs),ya=n(Vs,"SPAN",{});var Nu=a(ya);bl=d(Nu,"BlenderbotSmallModel"),Nu.forEach(t),Vs.forEach(t),zs=i(r),xe=n(r,"DIV",{class:!0});var Vt=a(xe);f(mo.$$.fragment,Vt),kl=i(Vt),_o=n(Vt,"P",{});var Js=a(_o);vl=d(Js,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=n(Js,"A",{href:!0});var Au=a($n);yl=d(Au,"PreTrainedModel"),Au.forEach(t),Tl=d(Js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Js.forEach(t),wl=i(Vt),fo=n(Vt,"P",{});var Xs=a(fo);Sl=d(Xs,"This model is also a PyTorch "),go=n(Xs,"A",{href:!0,rel:!0});var Iu=a(go);Bl=d(Iu,"torch.nn.Module"),Iu.forEach(t),zl=d(Xs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xs.forEach(t),xl=i(Vt),be=n(Vt,"DIV",{class:!0});var ot=a(be);f(bo.$$.fragment,ot),ql=i(ot),gt=n(ot,"P",{});var Qn=a(gt);Fl=d(Qn,"The "),Mn=n(Qn,"A",{href:!0});var Du=a(Mn);El=d(Du,"BlenderbotSmallModel"),Du.forEach(t),$l=d(Qn," forward method, overrides the "),Ta=n(Qn,"CODE",{});var Gu=a(Ta);Ml=d(Gu,"__call__"),Gu.forEach(t),Cl=d(Qn," special method."),Qn.forEach(t),Pl=i(ot),f(Pt.$$.fragment,ot),jl=i(ot),wa=n(ot,"P",{});var Uu=a(wa);Ol=d(Uu,"Example:"),Uu.forEach(t),Ll=i(ot),f(ko.$$.fragment,ot),ot.forEach(t),Vt.forEach(t),xs=i(r),bt=n(r,"H2",{class:!0});var Ys=a(bt);jt=n(Ys,"A",{id:!0,class:!0,href:!0});var Wu=a(jt);Sa=n(Wu,"SPAN",{});var Ru=a(Sa);f(vo.$$.fragment,Ru),Ru.forEach(t),Wu.forEach(t),Nl=i(Ys),Ba=n(Ys,"SPAN",{});var Ku=a(Ba);Al=d(Ku,"BlenderbotSmallForConditionalGeneration"),Ku.forEach(t),Ys.forEach(t),qs=i(r),qe=n(r,"DIV",{class:!0});var Jt=a(qe);f(yo.$$.fragment,Jt),Il=i(Jt),To=n(Jt,"P",{});var Zs=a(To);Dl=d(Zs,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=n(Zs,"A",{href:!0});var Hu=a(Cn);Gl=d(Hu,"PreTrainedModel"),Hu.forEach(t),Ul=d(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs.forEach(t),Wl=i(Jt),wo=n(Jt,"P",{});var ed=a(wo);Rl=d(ed,"This model is also a PyTorch "),So=n(ed,"A",{href:!0,rel:!0});var Qu=a(So);Kl=d(Qu,"torch.nn.Module"),Qu.forEach(t),Hl=d(ed,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ed.forEach(t),Ql=i(Jt),oe=n(Jt,"DIV",{class:!0});var Ce=a(oe);f(Bo.$$.fragment,Ce),Vl=i(Ce),kt=n(Ce,"P",{});var Vn=a(kt);Jl=d(Vn,"The "),Pn=n(Vn,"A",{href:!0});var Vu=a(Pn);Xl=d(Vu,"BlenderbotSmallForConditionalGeneration"),Vu.forEach(t),Yl=d(Vn," forward method, overrides the "),za=n(Vn,"CODE",{});var Ju=a(za);Zl=d(Ju,"__call__"),Ju.forEach(t),ei=d(Vn," special method."),Vn.forEach(t),ti=i(Ce),f(Ot.$$.fragment,Ce),oi=i(Ce),xa=n(Ce,"P",{});var Xu=a(xa);ni=d(Xu,"Conversation example::"),Xu.forEach(t),ai=i(Ce),qa=n(Ce,"BLOCKQUOTE",{});var Yu=a(qa);Fa=n(Yu,"BLOCKQUOTE",{});var Zu=a(Fa);Ea=n(Zu,"BLOCKQUOTE",{});var eh=a(Ea);$a=n(eh,"P",{});var th=a($a);ri=d(th,`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),th.forEach(t),eh.forEach(t),Zu.forEach(t),Yu.forEach(t),si=i(Ce),Ma=n(Ce,"BLOCKQUOTE",{});var oh=a(Ma);Ca=n(oh,"BLOCKQUOTE",{});var nh=a(Ca);Pa=n(nh,"BLOCKQUOTE",{});var ah=a(Pa);zo=n(ah,"P",{});var td=a(zo);di=d(td,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ja=n(td,"S",{});var rh=a(ja);li=d(rh,"what kind of carbs do they eat? i don\u2019t know much about carbs."),rh.forEach(t),ii=d(td,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),td.forEach(t),ah.forEach(t),nh.forEach(t),oh.forEach(t),Ce.forEach(t),Jt.forEach(t),Fs=i(r),vt=n(r,"H2",{class:!0});var od=a(vt);Lt=n(od,"A",{id:!0,class:!0,href:!0});var sh=a(Lt);Oa=n(sh,"SPAN",{});var dh=a(Oa);f(xo.$$.fragment,dh),dh.forEach(t),sh.forEach(t),ci=i(od),La=n(od,"SPAN",{});var lh=a(La);pi=d(lh,"BlenderbotSmallForCausalLM"),lh.forEach(t),od.forEach(t),Es=i(r),qo=n(r,"DIV",{class:!0});var ih=a(qo);Ve=n(ih,"DIV",{class:!0});var Jn=a(Ve);f(Fo.$$.fragment,Jn),ui=i(Jn),Na=n(Jn,"P",{});var ch=a(Na);hi=d(ch,"Example:"),ch.forEach(t),mi=i(Jn),f(Eo.$$.fragment,Jn),Jn.forEach(t),ih.forEach(t),$s=i(r),yt=n(r,"H2",{class:!0});var nd=a(yt);Nt=n(nd,"A",{id:!0,class:!0,href:!0});var ph=a(Nt);Aa=n(ph,"SPAN",{});var uh=a(Aa);f($o.$$.fragment,uh),uh.forEach(t),ph.forEach(t),_i=i(nd),Ia=n(nd,"SPAN",{});var hh=a(Ia);fi=d(hh,"TFBlenderbotSmallModel"),hh.forEach(t),nd.forEach(t),Ms=i(r),he=n(r,"DIV",{class:!0});var nt=a(he);f(Mo.$$.fragment,nt),gi=i(nt),Co=n(nt,"P",{});var ad=a(Co);bi=d(ad,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=n(ad,"A",{href:!0});var mh=a(jn);ki=d(mh,"TFPreTrainedModel"),mh.forEach(t),vi=d(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),yi=i(nt),Po=n(nt,"P",{});var rd=a(Po);Ti=d(rd,"This model is also a "),jo=n(rd,"A",{href:!0,rel:!0});var _h=a(jo);wi=d(_h,"tf.keras.Model"),_h.forEach(t),Si=d(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),Bi=i(nt),f(At.$$.fragment,nt),zi=i(nt),ke=n(nt,"DIV",{class:!0});var at=a(ke);f(Oo.$$.fragment,at),xi=i(at),Tt=n(at,"P",{});var Xn=a(Tt);qi=d(Xn,"The "),On=n(Xn,"A",{href:!0});var fh=a(On);Fi=d(fh,"TFBlenderbotSmallModel"),fh.forEach(t),Ei=d(Xn," forward method, overrides the "),Da=n(Xn,"CODE",{});var gh=a(Da);$i=d(gh,"__call__"),gh.forEach(t),Mi=d(Xn," special method."),Xn.forEach(t),Ci=i(at),f(It.$$.fragment,at),Pi=i(at),Ga=n(at,"P",{});var bh=a(Ga);ji=d(bh,"Example:"),bh.forEach(t),Oi=i(at),f(Lo.$$.fragment,at),at.forEach(t),nt.forEach(t),Cs=i(r),wt=n(r,"H2",{class:!0});var sd=a(wt);Dt=n(sd,"A",{id:!0,class:!0,href:!0});var kh=a(Dt);Ua=n(kh,"SPAN",{});var vh=a(Ua);f(No.$$.fragment,vh),vh.forEach(t),kh.forEach(t),Li=i(sd),Wa=n(sd,"SPAN",{});var yh=a(Wa);Ni=d(yh,"TFBlenderbotSmallForConditionalGeneration"),yh.forEach(t),sd.forEach(t),Ps=i(r),me=n(r,"DIV",{class:!0});var rt=a(me);f(Ao.$$.fragment,rt),Ai=i(rt),Io=n(rt,"P",{});var dd=a(Io);Ii=d(dd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ln=n(dd,"A",{href:!0});var Th=a(Ln);Di=d(Th,"TFPreTrainedModel"),Th.forEach(t),Gi=d(dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dd.forEach(t),Ui=i(rt),Do=n(rt,"P",{});var ld=a(Do);Wi=d(ld,"This model is also a "),Go=n(ld,"A",{href:!0,rel:!0});var wh=a(Go);Ri=d(wh,"tf.keras.Model"),wh.forEach(t),Ki=d(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),Hi=i(rt),f(Gt.$$.fragment,rt),Qi=i(rt),j=n(rt,"DIV",{class:!0});var K=a(j);f(Uo.$$.fragment,K),Vi=i(K),St=n(K,"P",{});var Yn=a(St);Ji=d(Yn,"The "),Nn=n(Yn,"A",{href:!0});var Sh=a(Nn);Xi=d(Sh,"TFBlenderbotSmallForConditionalGeneration"),Sh.forEach(t),Yi=d(Yn," forward method, overrides the "),Ra=n(Yn,"CODE",{});var Bh=a(Ra);Zi=d(Bh,"__call__"),Bh.forEach(t),ec=d(Yn," special method."),Yn.forEach(t),tc=i(K),f(Ut.$$.fragment,K),oc=i(K),Ka=n(K,"P",{});var zh=a(Ka);nc=d(zh,"Conversation example::"),zh.forEach(t),ac=i(K),Ha=n(K,"BLOCKQUOTE",{});var xh=a(Ha);Qa=n(xh,"BLOCKQUOTE",{});var qh=a(Qa);Va=n(qh,"BLOCKQUOTE",{});var Fh=a(Va);Ja=n(Fh,"P",{});var Eh=a(Ja);rc=d(Eh,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Eh.forEach(t),Fh.forEach(t),qh.forEach(t),xh.forEach(t),sc=i(K),Xa=n(K,"BLOCKQUOTE",{});var $h=a(Xa);Ya=n($h,"BLOCKQUOTE",{});var Mh=a(Ya);Za=n(Mh,"BLOCKQUOTE",{});var Ch=a(Za);er=n(Ch,"P",{});var Ph=a(er);dc=d(Ph,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Ph.forEach(t),Ch.forEach(t),Mh.forEach(t),$h.forEach(t),lc=i(K),tr=n(K,"BLOCKQUOTE",{});var jh=a(tr);or=n(jh,"BLOCKQUOTE",{});var Oh=a(or);nr=n(Oh,"BLOCKQUOTE",{});var Lh=a(nr);ar=n(Lh,"P",{});var Nh=a(ar);ic=d(Nh,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Nh.forEach(t),Lh.forEach(t),Oh.forEach(t),jh.forEach(t),cc=i(K),rr=n(K,"BLOCKQUOTE",{});var Ah=a(rr);sr=n(Ah,"BLOCKQUOTE",{});var Ih=a(sr);dr=n(Ih,"BLOCKQUOTE",{});var Dh=a(dr);Wo=n(Dh,"P",{});var id=a(Wo);pc=d(id,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),lr=n(id,"S",{});var Gh=a(lr);uc=d(Gh,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Gh.forEach(t),hc=d(id,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),id.forEach(t),Dh.forEach(t),Ih.forEach(t),Ah.forEach(t),mc=i(K),ir=n(K,"BLOCKQUOTE",{});var Uh=a(ir);cr=n(Uh,"BLOCKQUOTE",{});var Wh=a(cr);pr=n(Wh,"BLOCKQUOTE",{});var Rh=a(pr);ur=n(Rh,"P",{});var Kh=a(ur);_c=d(Kh,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Kh.forEach(t),Rh.forEach(t),Wh.forEach(t),Uh.forEach(t),K.forEach(t),rt.forEach(t),js=i(r),Bt=n(r,"H2",{class:!0});var cd=a(Bt);Wt=n(cd,"A",{id:!0,class:!0,href:!0});var Hh=a(Wt);hr=n(Hh,"SPAN",{});var Qh=a(hr);f(Ro.$$.fragment,Qh),Qh.forEach(t),Hh.forEach(t),fc=i(cd),mr=n(cd,"SPAN",{});var Vh=a(mr);gc=d(Vh,"FlaxBlenderbotSmallModel"),Vh.forEach(t),cd.forEach(t),Os=i(r),N=n(r,"DIV",{class:!0});var ne=a(N);f(Ko.$$.fragment,ne),bc=i(ne),Ho=n(ne,"P",{});var pd=a(Ho);kc=d(pd,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=n(pd,"A",{href:!0});var Jh=a(An);vc=d(Jh,"FlaxPreTrainedModel"),Jh.forEach(t),yc=d(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(t),Tc=i(ne),Qo=n(ne,"P",{});var ud=a(Qo);wc=d(ud,`This model is also a Flax Linen
`),Vo=n(ud,"A",{href:!0,rel:!0});var Xh=a(Vo);Sc=d(Xh,"flax.nn.Module"),Xh.forEach(t),Bc=d(ud,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ud.forEach(t),zc=i(ne),_r=n(ne,"P",{});var Yh=a(_r);xc=d(Yh,"Finally, this model supports inherent JAX features such as:"),Yh.forEach(t),qc=i(ne),We=n(ne,"UL",{});var Xt=a(We);fr=n(Xt,"LI",{});var Zh=a(fr);Jo=n(Zh,"A",{href:!0,rel:!0});var em=a(Jo);Fc=d(em,"Just-In-Time (JIT) compilation"),em.forEach(t),Zh.forEach(t),Ec=i(Xt),gr=n(Xt,"LI",{});var tm=a(gr);Xo=n(tm,"A",{href:!0,rel:!0});var om=a(Xo);$c=d(om,"Automatic Differentiation"),om.forEach(t),tm.forEach(t),Mc=i(Xt),br=n(Xt,"LI",{});var nm=a(br);Yo=n(nm,"A",{href:!0,rel:!0});var am=a(Yo);Cc=d(am,"Vectorization"),am.forEach(t),nm.forEach(t),Pc=i(Xt),kr=n(Xt,"LI",{});var rm=a(kr);Zo=n(rm,"A",{href:!0,rel:!0});var sm=a(Zo);jc=d(sm,"Parallelization"),sm.forEach(t),rm.forEach(t),Xt.forEach(t),Oc=i(ne),Je=n(ne,"DIV",{class:!0});var Zn=a(Je);f(en.$$.fragment,Zn),Lc=i(Zn),vr=n(Zn,"P",{});var dm=a(vr);Nc=d(dm,"Example:"),dm.forEach(t),Ac=i(Zn),f(tn.$$.fragment,Zn),Zn.forEach(t),Ic=i(ne),Xe=n(ne,"DIV",{class:!0});var ea=a(Xe);f(on.$$.fragment,ea),Dc=i(ea),yr=n(ea,"P",{});var lm=a(yr);Gc=d(lm,"Example:"),lm.forEach(t),Uc=i(ea),f(nn.$$.fragment,ea),ea.forEach(t),Wc=i(ne),Ye=n(ne,"DIV",{class:!0});var ta=a(Ye);f(an.$$.fragment,ta),Rc=i(ta),Tr=n(ta,"P",{});var im=a(Tr);Kc=d(im,"Example:"),im.forEach(t),Hc=i(ta),f(rn.$$.fragment,ta),ta.forEach(t),ne.forEach(t),Ls=i(r),zt=n(r,"H2",{class:!0});var hd=a(zt);Rt=n(hd,"A",{id:!0,class:!0,href:!0});var cm=a(Rt);wr=n(cm,"SPAN",{});var pm=a(wr);f(sn.$$.fragment,pm),pm.forEach(t),cm.forEach(t),Qc=i(hd),Sr=n(hd,"SPAN",{});var um=a(Sr);Vc=d(um,"FlaxBlenderbotForConditionalGeneration"),um.forEach(t),hd.forEach(t),Ns=i(r),A=n(r,"DIV",{class:!0});var ae=a(A);f(dn.$$.fragment,ae),Jc=i(ae),ln=n(ae,"P",{});var md=a(ln);Xc=d(md,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=n(md,"A",{href:!0});var hm=a(In);Yc=d(hm,"FlaxPreTrainedModel"),hm.forEach(t),Zc=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),ep=i(ae),cn=n(ae,"P",{});var _d=a(cn);tp=d(_d,`This model is also a Flax Linen
`),pn=n(_d,"A",{href:!0,rel:!0});var mm=a(pn);op=d(mm,"flax.nn.Module"),mm.forEach(t),np=d(_d,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_d.forEach(t),ap=i(ae),Br=n(ae,"P",{});var _m=a(Br);rp=d(_m,"Finally, this model supports inherent JAX features such as:"),_m.forEach(t),sp=i(ae),Re=n(ae,"UL",{});var Yt=a(Re);zr=n(Yt,"LI",{});var fm=a(zr);un=n(fm,"A",{href:!0,rel:!0});var gm=a(un);dp=d(gm,"Just-In-Time (JIT) compilation"),gm.forEach(t),fm.forEach(t),lp=i(Yt),xr=n(Yt,"LI",{});var bm=a(xr);hn=n(bm,"A",{href:!0,rel:!0});var km=a(hn);ip=d(km,"Automatic Differentiation"),km.forEach(t),bm.forEach(t),cp=i(Yt),qr=n(Yt,"LI",{});var vm=a(qr);mn=n(vm,"A",{href:!0,rel:!0});var ym=a(mn);pp=d(ym,"Vectorization"),ym.forEach(t),vm.forEach(t),up=i(Yt),Fr=n(Yt,"LI",{});var Tm=a(Fr);_n=n(Tm,"A",{href:!0,rel:!0});var wm=a(_n);hp=d(wm,"Parallelization"),wm.forEach(t),Tm.forEach(t),Yt.forEach(t),mp=i(ae),E=n(ae,"DIV",{class:!0});var $=a(E);f(fn.$$.fragment,$),_p=i($),xt=n($,"P",{});var oa=a(xt);fp=d(oa,"The "),Er=n(oa,"CODE",{});var Sm=a(Er);gp=d(Sm,"FlaxBlenderbotSmallPreTrainedModel"),Sm.forEach(t),bp=d(oa,"forward method, overrides the "),$r=n(oa,"CODE",{});var Bm=a($r);kp=d(Bm,"__call__"),Bm.forEach(t),vp=d(oa," special method."),oa.forEach(t),yp=i($),f(Kt.$$.fragment,$),Tp=i($),Mr=n($,"P",{});var zm=a(Mr);wp=d(zm,"Summarization example:"),zm.forEach(t),Sp=i($),Cr=n($,"BLOCKQUOTE",{});var xm=a(Cr);Pr=n(xm,"BLOCKQUOTE",{});var qm=a(Pr);jr=n(qm,"BLOCKQUOTE",{});var Fm=a(jr);Or=n(Fm,"P",{});var Em=a(Or);Bp=d(Em,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Em.forEach(t),Fm.forEach(t),qm.forEach(t),xm.forEach(t),zp=i($),Lr=n($,"BLOCKQUOTE",{});var $m=a(Lr);Nr=n($m,"BLOCKQUOTE",{});var Mm=a(Nr);Ar=n(Mm,"BLOCKQUOTE",{});var Cm=a(Ar);Ir=n(Cm,"P",{});var Pm=a(Ir);xp=d(Pm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Pm.forEach(t),Cm.forEach(t),Mm.forEach(t),$m.forEach(t),qp=i($),Dr=n($,"BLOCKQUOTE",{});var jm=a(Dr);Gr=n(jm,"BLOCKQUOTE",{});var Om=a(Gr);Ur=n(Om,"BLOCKQUOTE",{});var Lm=a(Ur);Wr=n(Lm,"P",{});var Nm=a(Wr);Fp=d(Nm,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nm.forEach(t),Lm.forEach(t),Om.forEach(t),jm.forEach(t),Ep=i($),Rr=n($,"BLOCKQUOTE",{});var Am=a(Rr);Kr=n(Am,"BLOCKQUOTE",{});var Im=a(Kr);gn=n(Im,"BLOCKQUOTE",{});var fd=a(gn);Ht=n(fd,"H1",{class:!0});var gd=a(Ht);Qt=n(gd,"A",{id:!0,class:!0,href:!0});var Dm=a(Qt);Hr=n(Dm,"SPAN",{});var Gm=a(Hr);f(bn.$$.fragment,Gm),Gm.forEach(t),Dm.forEach(t),$p=i(gd),Qr=n(gd,"SPAN",{});var Um=a(Qr);Mp=d(Um,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Um.forEach(t),gd.forEach(t),Cp=i(fd),Vr=n(fd,"P",{});var Wm=a(Vr);Pp=d(Wm,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wm.forEach(t),fd.forEach(t),Im.forEach(t),Am.forEach(t),jp=i($),Jr=n($,"P",{});var Rm=a(Jr);Op=d(Rm,"Mask filling example:"),Rm.forEach(t),Lp=i($),Xr=n($,"BLOCKQUOTE",{});var Km=a(Xr);Yr=n(Km,"BLOCKQUOTE",{});var Hm=a(Yr);Zr=n(Hm,"BLOCKQUOTE",{});var Qm=a(Zr);es=n(Qm,"P",{});var Vm=a(es);Np=d(Vm,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Vm.forEach(t),Qm.forEach(t),Hm.forEach(t),Km.forEach(t),Ap=i($),ts=n($,"BLOCKQUOTE",{});var Jm=a(ts);os=n(Jm,"BLOCKQUOTE",{});var Xm=a(os);ns=n(Xm,"BLOCKQUOTE",{});var Ym=a(ns);as=n(Ym,"P",{});var Zm=a(as);Ip=d(Zm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zm.forEach(t),Ym.forEach(t),Xm.forEach(t),Jm.forEach(t),Dp=i($),rs=n($,"BLOCKQUOTE",{});var e_=a(rs);ss=n(e_,"BLOCKQUOTE",{});var t_=a(ss);ds=n(t_,"BLOCKQUOTE",{});var o_=a(ds);ls=n(o_,"P",{});var n_=a(ls);Gp=d(n_,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),n_.forEach(t),o_.forEach(t),t_.forEach(t),e_.forEach(t),Up=i($),is=n($,"BLOCKQUOTE",{});var a_=a(is);cs=n(a_,"BLOCKQUOTE",{});var r_=a(cs);ps=n(r_,"BLOCKQUOTE",{});var s_=a(ps);us=n(s_,"P",{});var d_=a(us);Wp=d(d_,"tokenizer.decode(predictions).split()"),d_.forEach(t),s_.forEach(t),r_.forEach(t),a_.forEach(t),$.forEach(t),Rp=i(ae),Ze=n(ae,"DIV",{class:!0});var na=a(Ze);f(kn.$$.fragment,na),Kp=i(na),hs=n(na,"P",{});var l_=a(hs);Hp=d(l_,"Example:"),l_.forEach(t),Qp=i(na),f(vn.$$.fragment,na),na.forEach(t),Vp=i(ae),et=n(ae,"DIV",{class:!0});var aa=a(et);f(yn.$$.fragment,aa),Jp=i(aa),ms=n(aa,"P",{});var i_=a(ms);Xp=d(i_,"Example:"),i_.forEach(t),Yp=i(aa),f(Tn.$$.fragment,aa),aa.forEach(t),ae.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(T_)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(y,"class","relative group"),c(U,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),c(Q,"rel","nofollow"),c(Z,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(fe,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(I,"id","overview"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#overview"),c(J,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(ie,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(ge,"id","transformers.BlenderbotSmallConfig"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.BlenderbotSmallConfig"),c(pe,"class","relative group"),c(Bn,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(eo,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(eo,"rel","nofollow"),c(zn,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(xn,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(ue,"class","docstring"),c(Ft,"id","transformers.BlenderbotSmallTokenizer"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.BlenderbotSmallTokenizer"),c(ht,"class","relative group"),c(qn,"href","/docs/transformers/pr_15761/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Et,"class","docstring"),c(En,"href","../glossary#token-type-ids"),c(Qe,"class","docstring"),c(_a,"class","docstring"),c(G,"class","docstring"),c($t,"id","transformers.BlenderbotSmallTokenizerFast"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.BlenderbotSmallTokenizerFast"),c(_t,"class","relative group"),c(Mt,"class","docstring"),c(Ue,"class","docstring"),c(Ct,"id","transformers.BlenderbotSmallModel"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#transformers.BlenderbotSmallModel"),c(ft,"class","relative group"),c($n,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.PreTrainedModel"),c(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(go,"rel","nofollow"),c(Mn,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(be,"class","docstring"),c(xe,"class","docstring"),c(jt,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(bt,"class","relative group"),c(Cn,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.PreTrainedModel"),c(So,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(So,"rel","nofollow"),c(Pn,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(oe,"class","docstring"),c(qe,"class","docstring"),c(Lt,"id","transformers.BlenderbotSmallForCausalLM"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.BlenderbotSmallForCausalLM"),c(vt,"class","relative group"),c(Ve,"class","docstring"),c(qo,"class","docstring"),c(Nt,"id","transformers.TFBlenderbotSmallModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.TFBlenderbotSmallModel"),c(yt,"class","relative group"),c(jn,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.TFPreTrainedModel"),c(jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(jo,"rel","nofollow"),c(On,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(he,"class","docstring"),c(Dt,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(wt,"class","relative group"),c(Ln,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.TFPreTrainedModel"),c(Go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Go,"rel","nofollow"),c(Nn,"href","/docs/transformers/pr_15761/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(j,"class","docstring"),c(me,"class","docstring"),c(Wt,"id","transformers.FlaxBlenderbotSmallModel"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.FlaxBlenderbotSmallModel"),c(Bt,"class","relative group"),c(An,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vo,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jo,"rel","nofollow"),c(Xo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xo,"rel","nofollow"),c(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Yo,"rel","nofollow"),c(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zo,"rel","nofollow"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(Ye,"class","docstring"),c(N,"class","docstring"),c(Rt,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(zt,"class","relative group"),c(In,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(pn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(pn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(un,"rel","nofollow"),c(hn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(hn,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(mn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_n,"rel","nofollow"),c(Qt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Ht,"class","relative group"),c(E,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(A,"class","docstring")},m(r,u){e(document.head,h),p(r,x,u),p(r,y,u),e(y,T),e(T,B),g(S,B,null),e(y,w),e(y,q),e(q,Pe),p(r,_e,u),p(r,z,u),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),e(z,Q),e(Q,V),e(z,Ie),e(z,Z),e(Z,M),e(z,O),e(z,fe),e(fe,re),p(r,Ee,u),p(r,J,u),e(J,I),e(I,Te),g(se,Te,null),e(J,L),e(J,we),e(we,de),p(r,$e,u),p(r,ee,u),e(ee,le),e(ee,ie),e(ie,De),e(ee,X),p(r,Me,u),p(r,R,u),e(R,Ge),p(r,m,u),p(r,F,u),e(F,ce),e(ce,st),p(r,Ke,u),p(r,C,u),e(C,dt),e(C,Se),e(Se,lt),e(C,Y),e(C,D),e(D,it),e(C,ct),p(r,te,u),p(r,pe,u),e(pe,ge),e(ge,Be),g(ze,Be,null),e(pe,bd),e(pe,ra),e(ra,kd),p(r,vs,u),p(r,ue,u),g(Zt,ue,null),e(ue,vd),e(ue,pt),e(pt,yd),e(pt,Bn),e(Bn,Td),e(pt,wd),e(pt,eo),e(eo,Sd),e(pt,Bd),e(ue,zd),e(ue,ut),e(ut,xd),e(ut,zn),e(zn,qd),e(ut,Fd),e(ut,xn),e(xn,Ed),e(ut,$d),e(ue,Md),e(ue,sa),e(sa,Cd),e(ue,Pd),g(to,ue,null),p(r,ys,u),p(r,ht,u),e(ht,Ft),e(Ft,da),g(oo,da,null),e(ht,jd),e(ht,la),e(la,Od),p(r,Ts,u),p(r,G,u),g(no,G,null),e(G,Ld),e(G,ia),e(ia,Nd),e(G,Ad),e(G,ao),e(ao,Id),e(ao,qn),e(qn,Dd),e(ao,Gd),e(G,Ud),e(G,He),g(ro,He,null),e(He,Wd),e(He,ca),e(ca,Rd),e(He,Kd),e(He,pa),e(pa,Hd),e(G,Qd),e(G,Et),g(so,Et,null),e(Et,Vd),e(Et,mt),e(mt,Jd),e(mt,ua),e(ua,Xd),e(mt,Yd),e(mt,ha),e(ha,Zd),e(mt,el),e(G,tl),e(G,Qe),g(lo,Qe,null),e(Qe,ol),e(Qe,Fn),e(Fn,nl),e(Fn,En),e(En,al),e(Qe,rl),e(Qe,ma),e(ma,sl),e(G,dl),e(G,_a),p(r,ws,u),p(r,_t,u),e(_t,$t),e($t,fa),g(io,fa,null),e(_t,ll),e(_t,ga),e(ga,il),p(r,Ss,u),p(r,Ue,u),g(co,Ue,null),e(Ue,cl),e(Ue,po),e(po,pl),e(po,ba),e(ba,ul),e(po,hl),e(Ue,ml),e(Ue,Mt),g(uo,Mt,null),e(Mt,_l),e(Mt,ka),e(ka,fl),p(r,Bs,u),p(r,ft,u),e(ft,Ct),e(Ct,va),g(ho,va,null),e(ft,gl),e(ft,ya),e(ya,bl),p(r,zs,u),p(r,xe,u),g(mo,xe,null),e(xe,kl),e(xe,_o),e(_o,vl),e(_o,$n),e($n,yl),e(_o,Tl),e(xe,wl),e(xe,fo),e(fo,Sl),e(fo,go),e(go,Bl),e(fo,zl),e(xe,xl),e(xe,be),g(bo,be,null),e(be,ql),e(be,gt),e(gt,Fl),e(gt,Mn),e(Mn,El),e(gt,$l),e(gt,Ta),e(Ta,Ml),e(gt,Cl),e(be,Pl),g(Pt,be,null),e(be,jl),e(be,wa),e(wa,Ol),e(be,Ll),g(ko,be,null),p(r,xs,u),p(r,bt,u),e(bt,jt),e(jt,Sa),g(vo,Sa,null),e(bt,Nl),e(bt,Ba),e(Ba,Al),p(r,qs,u),p(r,qe,u),g(yo,qe,null),e(qe,Il),e(qe,To),e(To,Dl),e(To,Cn),e(Cn,Gl),e(To,Ul),e(qe,Wl),e(qe,wo),e(wo,Rl),e(wo,So),e(So,Kl),e(wo,Hl),e(qe,Ql),e(qe,oe),g(Bo,oe,null),e(oe,Vl),e(oe,kt),e(kt,Jl),e(kt,Pn),e(Pn,Xl),e(kt,Yl),e(kt,za),e(za,Zl),e(kt,ei),e(oe,ti),g(Ot,oe,null),e(oe,oi),e(oe,xa),e(xa,ni),e(oe,ai),e(oe,qa),e(qa,Fa),e(Fa,Ea),e(Ea,$a),e($a,ri),e(oe,si),e(oe,Ma),e(Ma,Ca),e(Ca,Pa),e(Pa,zo),e(zo,di),e(zo,ja),e(ja,li),e(zo,ii),p(r,Fs,u),p(r,vt,u),e(vt,Lt),e(Lt,Oa),g(xo,Oa,null),e(vt,ci),e(vt,La),e(La,pi),p(r,Es,u),p(r,qo,u),e(qo,Ve),g(Fo,Ve,null),e(Ve,ui),e(Ve,Na),e(Na,hi),e(Ve,mi),g(Eo,Ve,null),p(r,$s,u),p(r,yt,u),e(yt,Nt),e(Nt,Aa),g($o,Aa,null),e(yt,_i),e(yt,Ia),e(Ia,fi),p(r,Ms,u),p(r,he,u),g(Mo,he,null),e(he,gi),e(he,Co),e(Co,bi),e(Co,jn),e(jn,ki),e(Co,vi),e(he,yi),e(he,Po),e(Po,Ti),e(Po,jo),e(jo,wi),e(Po,Si),e(he,Bi),g(At,he,null),e(he,zi),e(he,ke),g(Oo,ke,null),e(ke,xi),e(ke,Tt),e(Tt,qi),e(Tt,On),e(On,Fi),e(Tt,Ei),e(Tt,Da),e(Da,$i),e(Tt,Mi),e(ke,Ci),g(It,ke,null),e(ke,Pi),e(ke,Ga),e(Ga,ji),e(ke,Oi),g(Lo,ke,null),p(r,Cs,u),p(r,wt,u),e(wt,Dt),e(Dt,Ua),g(No,Ua,null),e(wt,Li),e(wt,Wa),e(Wa,Ni),p(r,Ps,u),p(r,me,u),g(Ao,me,null),e(me,Ai),e(me,Io),e(Io,Ii),e(Io,Ln),e(Ln,Di),e(Io,Gi),e(me,Ui),e(me,Do),e(Do,Wi),e(Do,Go),e(Go,Ri),e(Do,Ki),e(me,Hi),g(Gt,me,null),e(me,Qi),e(me,j),g(Uo,j,null),e(j,Vi),e(j,St),e(St,Ji),e(St,Nn),e(Nn,Xi),e(St,Yi),e(St,Ra),e(Ra,Zi),e(St,ec),e(j,tc),g(Ut,j,null),e(j,oc),e(j,Ka),e(Ka,nc),e(j,ac),e(j,Ha),e(Ha,Qa),e(Qa,Va),e(Va,Ja),e(Ja,rc),e(j,sc),e(j,Xa),e(Xa,Ya),e(Ya,Za),e(Za,er),e(er,dc),e(j,lc),e(j,tr),e(tr,or),e(or,nr),e(nr,ar),e(ar,ic),e(j,cc),e(j,rr),e(rr,sr),e(sr,dr),e(dr,Wo),e(Wo,pc),e(Wo,lr),e(lr,uc),e(Wo,hc),e(j,mc),e(j,ir),e(ir,cr),e(cr,pr),e(pr,ur),e(ur,_c),p(r,js,u),p(r,Bt,u),e(Bt,Wt),e(Wt,hr),g(Ro,hr,null),e(Bt,fc),e(Bt,mr),e(mr,gc),p(r,Os,u),p(r,N,u),g(Ko,N,null),e(N,bc),e(N,Ho),e(Ho,kc),e(Ho,An),e(An,vc),e(Ho,yc),e(N,Tc),e(N,Qo),e(Qo,wc),e(Qo,Vo),e(Vo,Sc),e(Qo,Bc),e(N,zc),e(N,_r),e(_r,xc),e(N,qc),e(N,We),e(We,fr),e(fr,Jo),e(Jo,Fc),e(We,Ec),e(We,gr),e(gr,Xo),e(Xo,$c),e(We,Mc),e(We,br),e(br,Yo),e(Yo,Cc),e(We,Pc),e(We,kr),e(kr,Zo),e(Zo,jc),e(N,Oc),e(N,Je),g(en,Je,null),e(Je,Lc),e(Je,vr),e(vr,Nc),e(Je,Ac),g(tn,Je,null),e(N,Ic),e(N,Xe),g(on,Xe,null),e(Xe,Dc),e(Xe,yr),e(yr,Gc),e(Xe,Uc),g(nn,Xe,null),e(N,Wc),e(N,Ye),g(an,Ye,null),e(Ye,Rc),e(Ye,Tr),e(Tr,Kc),e(Ye,Hc),g(rn,Ye,null),p(r,Ls,u),p(r,zt,u),e(zt,Rt),e(Rt,wr),g(sn,wr,null),e(zt,Qc),e(zt,Sr),e(Sr,Vc),p(r,Ns,u),p(r,A,u),g(dn,A,null),e(A,Jc),e(A,ln),e(ln,Xc),e(ln,In),e(In,Yc),e(ln,Zc),e(A,ep),e(A,cn),e(cn,tp),e(cn,pn),e(pn,op),e(cn,np),e(A,ap),e(A,Br),e(Br,rp),e(A,sp),e(A,Re),e(Re,zr),e(zr,un),e(un,dp),e(Re,lp),e(Re,xr),e(xr,hn),e(hn,ip),e(Re,cp),e(Re,qr),e(qr,mn),e(mn,pp),e(Re,up),e(Re,Fr),e(Fr,_n),e(_n,hp),e(A,mp),e(A,E),g(fn,E,null),e(E,_p),e(E,xt),e(xt,fp),e(xt,Er),e(Er,gp),e(xt,bp),e(xt,$r),e($r,kp),e(xt,vp),e(E,yp),g(Kt,E,null),e(E,Tp),e(E,Mr),e(Mr,wp),e(E,Sp),e(E,Cr),e(Cr,Pr),e(Pr,jr),e(jr,Or),e(Or,Bp),e(E,zp),e(E,Lr),e(Lr,Nr),e(Nr,Ar),e(Ar,Ir),e(Ir,xp),e(E,qp),e(E,Dr),e(Dr,Gr),e(Gr,Ur),e(Ur,Wr),e(Wr,Fp),e(E,Ep),e(E,Rr),e(Rr,Kr),e(Kr,gn),e(gn,Ht),e(Ht,Qt),e(Qt,Hr),g(bn,Hr,null),e(Ht,$p),e(Ht,Qr),e(Qr,Mp),e(gn,Cp),e(gn,Vr),e(Vr,Pp),e(E,jp),e(E,Jr),e(Jr,Op),e(E,Lp),e(E,Xr),e(Xr,Yr),e(Yr,Zr),e(Zr,es),e(es,Np),e(E,Ap),e(E,ts),e(ts,os),e(os,ns),e(ns,as),e(as,Ip),e(E,Dp),e(E,rs),e(rs,ss),e(ss,ds),e(ds,ls),e(ls,Gp),e(E,Up),e(E,is),e(is,cs),e(cs,ps),e(ps,us),e(us,Wp),e(A,Rp),e(A,Ze),g(kn,Ze,null),e(Ze,Kp),e(Ze,hs),e(hs,Hp),e(Ze,Qp),g(vn,Ze,null),e(A,Vp),e(A,et),g(yn,et,null),e(et,Jp),e(et,ms),e(ms,Xp),e(et,Yp),g(Tn,et,null),As=!0},p(r,[u]){const wn={};u&2&&(wn.$$scope={dirty:u,ctx:r}),Pt.$set(wn);const _s={};u&2&&(_s.$$scope={dirty:u,ctx:r}),Ot.$set(_s);const fs={};u&2&&(fs.$$scope={dirty:u,ctx:r}),At.$set(fs);const gs={};u&2&&(gs.$$scope={dirty:u,ctx:r}),It.$set(gs);const ve={};u&2&&(ve.$$scope={dirty:u,ctx:r}),Gt.$set(ve);const bs={};u&2&&(bs.$$scope={dirty:u,ctx:r}),Ut.$set(bs);const ks={};u&2&&(ks.$$scope={dirty:u,ctx:r}),Kt.$set(ks)},i(r){As||(b(S.$$.fragment,r),b(se.$$.fragment,r),b(ze.$$.fragment,r),b(Zt.$$.fragment,r),b(to.$$.fragment,r),b(oo.$$.fragment,r),b(no.$$.fragment,r),b(ro.$$.fragment,r),b(so.$$.fragment,r),b(lo.$$.fragment,r),b(io.$$.fragment,r),b(co.$$.fragment,r),b(uo.$$.fragment,r),b(ho.$$.fragment,r),b(mo.$$.fragment,r),b(bo.$$.fragment,r),b(Pt.$$.fragment,r),b(ko.$$.fragment,r),b(vo.$$.fragment,r),b(yo.$$.fragment,r),b(Bo.$$.fragment,r),b(Ot.$$.fragment,r),b(xo.$$.fragment,r),b(Fo.$$.fragment,r),b(Eo.$$.fragment,r),b($o.$$.fragment,r),b(Mo.$$.fragment,r),b(At.$$.fragment,r),b(Oo.$$.fragment,r),b(It.$$.fragment,r),b(Lo.$$.fragment,r),b(No.$$.fragment,r),b(Ao.$$.fragment,r),b(Gt.$$.fragment,r),b(Uo.$$.fragment,r),b(Ut.$$.fragment,r),b(Ro.$$.fragment,r),b(Ko.$$.fragment,r),b(en.$$.fragment,r),b(tn.$$.fragment,r),b(on.$$.fragment,r),b(nn.$$.fragment,r),b(an.$$.fragment,r),b(rn.$$.fragment,r),b(sn.$$.fragment,r),b(dn.$$.fragment,r),b(fn.$$.fragment,r),b(Kt.$$.fragment,r),b(bn.$$.fragment,r),b(kn.$$.fragment,r),b(vn.$$.fragment,r),b(yn.$$.fragment,r),b(Tn.$$.fragment,r),As=!0)},o(r){k(S.$$.fragment,r),k(se.$$.fragment,r),k(ze.$$.fragment,r),k(Zt.$$.fragment,r),k(to.$$.fragment,r),k(oo.$$.fragment,r),k(no.$$.fragment,r),k(ro.$$.fragment,r),k(so.$$.fragment,r),k(lo.$$.fragment,r),k(io.$$.fragment,r),k(co.$$.fragment,r),k(uo.$$.fragment,r),k(ho.$$.fragment,r),k(mo.$$.fragment,r),k(bo.$$.fragment,r),k(Pt.$$.fragment,r),k(ko.$$.fragment,r),k(vo.$$.fragment,r),k(yo.$$.fragment,r),k(Bo.$$.fragment,r),k(Ot.$$.fragment,r),k(xo.$$.fragment,r),k(Fo.$$.fragment,r),k(Eo.$$.fragment,r),k($o.$$.fragment,r),k(Mo.$$.fragment,r),k(At.$$.fragment,r),k(Oo.$$.fragment,r),k(It.$$.fragment,r),k(Lo.$$.fragment,r),k(No.$$.fragment,r),k(Ao.$$.fragment,r),k(Gt.$$.fragment,r),k(Uo.$$.fragment,r),k(Ut.$$.fragment,r),k(Ro.$$.fragment,r),k(Ko.$$.fragment,r),k(en.$$.fragment,r),k(tn.$$.fragment,r),k(on.$$.fragment,r),k(nn.$$.fragment,r),k(an.$$.fragment,r),k(rn.$$.fragment,r),k(sn.$$.fragment,r),k(dn.$$.fragment,r),k(fn.$$.fragment,r),k(Kt.$$.fragment,r),k(bn.$$.fragment,r),k(kn.$$.fragment,r),k(vn.$$.fragment,r),k(yn.$$.fragment,r),k(Tn.$$.fragment,r),As=!1},d(r){t(h),r&&t(x),r&&t(y),v(S),r&&t(_e),r&&t(z),r&&t(Ee),r&&t(J),v(se),r&&t($e),r&&t(ee),r&&t(Me),r&&t(R),r&&t(m),r&&t(F),r&&t(Ke),r&&t(C),r&&t(te),r&&t(pe),v(ze),r&&t(vs),r&&t(ue),v(Zt),v(to),r&&t(ys),r&&t(ht),v(oo),r&&t(Ts),r&&t(G),v(no),v(ro),v(so),v(lo),r&&t(ws),r&&t(_t),v(io),r&&t(Ss),r&&t(Ue),v(co),v(uo),r&&t(Bs),r&&t(ft),v(ho),r&&t(zs),r&&t(xe),v(mo),v(bo),v(Pt),v(ko),r&&t(xs),r&&t(bt),v(vo),r&&t(qs),r&&t(qe),v(yo),v(Bo),v(Ot),r&&t(Fs),r&&t(vt),v(xo),r&&t(Es),r&&t(qo),v(Fo),v(Eo),r&&t($s),r&&t(yt),v($o),r&&t(Ms),r&&t(he),v(Mo),v(At),v(Oo),v(It),v(Lo),r&&t(Cs),r&&t(wt),v(No),r&&t(Ps),r&&t(me),v(Ao),v(Gt),v(Uo),v(Ut),r&&t(js),r&&t(Bt),v(Ro),r&&t(Os),r&&t(N),v(Ko),v(en),v(tn),v(on),v(nn),v(an),v(rn),r&&t(Ls),r&&t(zt),v(sn),r&&t(Ns),r&&t(A),v(dn),v(fn),v(Kt),v(bn),v(kn),v(vn),v(yn),v(Tn)}}}const T_={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function w_(H,h,x){let{fw:y}=h;return H.$$set=T=>{"fw"in T&&x(0,y=T.fw)},[y]}class E_ extends c_{constructor(h){super();p_(this,h,w_,y_,u_,{fw:0})}}export{E_ as default,T_ as metadata};
