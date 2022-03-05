import{S as ff,i as _f,s as gf,e as t,k as l,w as f,t as s,M as bf,c as n,d as o,m as i,a,x as _,h as d,b as c,F as e,g as p,y as g,q as b,o as k,B as v}from"../../chunks/vendor-4833417e.js";import{T as zn}from"../../chunks/Tip-fffd6df1.js";import{D as M}from"../../chunks/Docstring-7b52c3d4.js";import{C as Fo}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as $e}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function kf(H){let u,x,y,T,B;return{c(){u=t("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(o),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&o(u)}}}function vf(H){let u,x,y,T,B;return{c(){u=t("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(o),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&o(u)}}}function yf(H){let u,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ie,Q,V,Ae,Z,C,O,_e,re,Fe,J,A,Te,se,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge;return{c(){u=t("p"),x=s("TF 2.0 models accepts two formats as inputs:"),y=l(),T=t("ul"),B=t("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=t("li"),Pe=s("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=t("p"),je=s("This second option is useful when using "),U=t("code"),Oe=s("tf.keras.Model.fit"),Le=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=t("code"),Ne=s("model(inputs)"),Ie=s("."),Q=l(),V=t("p"),Ae=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=t("ul"),O=t("li"),_e=s("a single Tensor with "),re=t("code"),Fe=s("input_ids"),J=s(" only and nothing else: "),A=t("code"),Te=s("model(input_ids)"),se=l(),L=t("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=t("code"),Ee=s("model([input_ids, attention_mask])"),ee=s(" or "),le=t("code"),ie=s("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=t("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=t("code"),Ge=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=n(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(o),y=i(m),T=n(m,"UL",{});var ce=a(T);B=n(ce,"LI",{});var so=a(B);S=d(so,"having all inputs as keyword arguments (like PyTorch models), or"),so.forEach(o),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(o),ce.forEach(o),fe=i(m),z=n(m,"P",{});var P=a(z);je=d(P,"This second option is useful when using "),U=n(P,"CODE",{});var lo=a(U);Oe=d(lo,"tf.keras.Model.fit"),lo.forEach(o),Le=d(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(P,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(o),Ie=d(P,"."),P.forEach(o),Q=i(m),V=n(m,"P",{});var io=a(V);Ae=d(io,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),io.forEach(o),Z=i(m),C=n(m,"UL",{});var Y=a(C);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),re=n(D,"CODE",{});var co=a(re);Fe=d(co,"input_ids"),co.forEach(o),J=d(D," only and nothing else: "),A=n(D,"CODE",{});var po=a(A);Te=d(po,"model(input_ids)"),po.forEach(o),D.forEach(o),se=i(Y),L=n(Y,"LI",{});var oe=a(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(oe,"CODE",{});var pe=a(de);Ee=d(pe,"model([input_ids, attention_mask])"),pe.forEach(o),ee=d(oe," or "),le=n(oe,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(o),oe.forEach(o),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(o),Be.forEach(o),Y.forEach(o)},m(m,$){p(m,u,$),e(u,x),p(m,y,$),p(m,T,$),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(m,fe,$),p(m,z,$),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ie),p(m,Q,$),p(m,V,$),e(V,Ae),p(m,Z,$),p(m,C,$),e(C,O),e(O,_e),e(O,re),e(re,Fe),e(O,J),e(O,A),e(A,Te),e(C,se),e(C,L),e(L,we),e(L,de),e(de,Ee),e(L,ee),e(L,le),e(le,ie),e(C,De),e(C,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&o(u),m&&o(y),m&&o(T),m&&o(fe),m&&o(z),m&&o(Q),m&&o(V),m&&o(Z),m&&o(C)}}}function Tf(H){let u,x,y,T,B;return{c(){u=t("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(o),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&o(u)}}}function wf(H){let u,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ie,Q,V,Ae,Z,C,O,_e,re,Fe,J,A,Te,se,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge;return{c(){u=t("p"),x=s("TF 2.0 models accepts two formats as inputs:"),y=l(),T=t("ul"),B=t("li"),S=s("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=t("li"),Pe=s("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=t("p"),je=s("This second option is useful when using "),U=t("code"),Oe=s("tf.keras.Model.fit"),Le=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=t("code"),Ne=s("model(inputs)"),Ie=s("."),Q=l(),V=t("p"),Ae=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=t("ul"),O=t("li"),_e=s("a single Tensor with "),re=t("code"),Fe=s("input_ids"),J=s(" only and nothing else: "),A=t("code"),Te=s("model(input_ids)"),se=l(),L=t("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=t("code"),Ee=s("model([input_ids, attention_mask])"),ee=s(" or "),le=t("code"),ie=s("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=t("li"),Me=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=t("code"),Ge=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=n(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(o),y=i(m),T=n(m,"UL",{});var ce=a(T);B=n(ce,"LI",{});var so=a(B);S=d(so,"having all inputs as keyword arguments (like PyTorch models), or"),so.forEach(o),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(o),ce.forEach(o),fe=i(m),z=n(m,"P",{});var P=a(z);je=d(P,"This second option is useful when using "),U=n(P,"CODE",{});var lo=a(U);Oe=d(lo,"tf.keras.Model.fit"),lo.forEach(o),Le=d(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(P,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(o),Ie=d(P,"."),P.forEach(o),Q=i(m),V=n(m,"P",{});var io=a(V);Ae=d(io,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),io.forEach(o),Z=i(m),C=n(m,"UL",{});var Y=a(C);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),re=n(D,"CODE",{});var co=a(re);Fe=d(co,"input_ids"),co.forEach(o),J=d(D," only and nothing else: "),A=n(D,"CODE",{});var po=a(A);Te=d(po,"model(input_ids)"),po.forEach(o),D.forEach(o),se=i(Y),L=n(Y,"LI",{});var oe=a(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(oe,"CODE",{});var pe=a(de);Ee=d(pe,"model([input_ids, attention_mask])"),pe.forEach(o),ee=d(oe," or "),le=n(oe,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(o),oe.forEach(o),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(o),Be.forEach(o),Y.forEach(o)},m(m,$){p(m,u,$),e(u,x),p(m,y,$),p(m,T,$),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(m,fe,$),p(m,z,$),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ie),p(m,Q,$),p(m,V,$),e(V,Ae),p(m,Z,$),p(m,C,$),e(C,O),e(O,_e),e(O,re),e(re,Fe),e(O,J),e(O,A),e(A,Te),e(C,se),e(C,L),e(L,we),e(L,de),e(de,Ee),e(L,ee),e(L,le),e(le,ie),e(C,De),e(C,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&o(u),m&&o(y),m&&o(T),m&&o(fe),m&&o(z),m&&o(Q),m&&o(V),m&&o(Z),m&&o(C)}}}function Sf(H){let u,x,y,T,B;return{c(){u=t("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(o),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&o(u)}}}function Bf(H){let u,x,y,T,B;return{c(){u=t("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(o),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&o(u)}}}function zf(H){let u,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ie,Q,V,Ae,Z,C,O,_e,re,Fe,J,A,Te,se,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge,m,$,ce,so,Ke,P,lo,Se,io,Y,D,co,po,oe,pe,ge,Be,ze,yd,la,Td,Ts,he,ot,wd,ho,Sd,xn,Bd,zd,tt,xd,qd,$d,uo,Fd,qn,Ed,Md,$n,Cd,Pd,jd,ia,Od,Ld,nt,ws,mo,Eo,ca,at,Nd,pa,Id,Ss,G,rt,Ad,ha,Dd,Gd,st,Ud,Fn,Wd,Rd,Kd,He,dt,Hd,ua,Qd,Vd,ma,Jd,Xd,Mo,lt,Yd,fo,Zd,fa,el,ol,_a,tl,nl,al,Qe,it,rl,En,sl,Mn,dl,ll,ga,il,cl,Cn,ct,Bs,_o,Co,ba,pt,pl,ka,hl,zs,Ue,ht,ul,ut,ml,va,fl,_l,gl,Po,mt,bl,ya,kl,xs,go,jo,Ta,ft,vl,wa,yl,qs,xe,_t,Tl,gt,wl,Pn,Sl,Bl,zl,bt,xl,kt,ql,$l,Fl,be,vt,El,bo,Ml,jn,Cl,Pl,Sa,jl,Ol,Ll,Oo,Nl,Ba,Il,Al,yt,$s,ko,Lo,za,Tt,Dl,xa,Gl,Fs,qe,wt,Ul,St,Wl,On,Rl,Kl,Hl,Bt,Ql,zt,Vl,Jl,Xl,te,xt,Yl,vo,Zl,Ln,ei,oi,qa,ti,ni,ai,No,ri,$a,si,di,Fa,Ea,Ma,Ca,li,ii,Pa,ja,Oa,qt,ci,La,pi,hi,Es,yo,Io,Na,$t,ui,Ia,mi,Ms,To,Ft,fi,Ve,Et,_i,Aa,gi,bi,Mt,Cs,wo,Ao,Da,Ct,ki,Ga,vi,Ps,ue,Pt,yi,jt,Ti,Nn,wi,Si,Bi,Ot,zi,Lt,xi,qi,$i,Do,Fi,ke,Nt,Ei,So,Mi,In,Ci,Pi,Ua,ji,Oi,Li,Go,Ni,Wa,Ii,Ai,It,js,Bo,Uo,Ra,At,Di,Ka,Gi,Os,me,Dt,Ui,Gt,Wi,An,Ri,Ki,Hi,Ut,Qi,Wt,Vi,Ji,Xi,Wo,Yi,j,Rt,Zi,zo,ec,Dn,oc,tc,Ha,nc,ac,rc,Ro,sc,Qa,dc,lc,Va,Ja,Xa,Ya,ic,cc,Za,er,or,tr,pc,hc,nr,ar,rr,sr,uc,mc,dr,lr,ir,Kt,fc,cr,_c,gc,bc,pr,hr,ur,mr,kc,Ls,xo,Ko,fr,Ht,vc,_r,yc,Ns,N,Qt,Tc,Vt,wc,Gn,Sc,Bc,zc,Jt,xc,Xt,qc,$c,Fc,gr,Ec,Mc,We,br,Yt,Cc,Pc,kr,Zt,jc,Oc,vr,en,Lc,Nc,yr,on,Ic,Ac,Je,tn,Dc,Tr,Gc,Uc,nn,Wc,Xe,an,Rc,wr,Kc,Hc,rn,Qc,Ye,sn,Vc,Sr,Jc,Xc,dn,Is,qo,Ho,Br,ln,Yc,zr,Zc,As,I,cn,ep,pn,op,Un,tp,np,ap,hn,rp,un,sp,dp,lp,xr,ip,cp,Re,qr,mn,pp,hp,$r,fn,up,mp,Fr,_n,fp,_p,Er,gn,gp,bp,F,bn,kp,$o,vp,Mr,yp,Tp,Cr,wp,Sp,Bp,Qo,zp,Pr,xp,qp,jr,Or,Lr,Nr,$p,Fp,Ir,Ar,Dr,Gr,Ep,Mp,Ur,Wr,Rr,Kr,Cp,Pp,Hr,Qr,kn,Vo,Jo,Vr,vn,jp,Jr,Op,Lp,Xr,Np,Ip,Yr,Ap,Dp,Zr,es,os,ts,Gp,Up,ns,as,rs,ss,Wp,Rp,ds,ls,is,cs,Kp,Hp,ps,hs,us,ms,Qp,Vp,Ze,yn,Jp,fs,Xp,Yp,Tn,Zp,eo,wn,eh,_s,oh,th,Sn,Ds;return S=new $e({}),se=new $e({}),ze=new $e({}),ot=new M({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),nt=new Fo({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),at=new $e({}),rt=new M({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_15953/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),dt=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/tokenization_utils_base.py#L2884",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lt=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/tokenization_utils.py#L843",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),it=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ct=new M({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),pt=new $e({}),ht=new M({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),mt=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new $e({}),_t=new M({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1058",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vt=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1085",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Oo=new zn({props:{$$slots:{default:[kf]},$$scope:{ctx:H}}}),yt=new Fo({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Tt=new $e({}),wt=new M({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1184",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xt=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1228",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),No=new zn({props:{$$slots:{default:[vf]},$$scope:{ctx:H}}}),$t=new $e({}),Ft=new M({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1364"}}),Et=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1395",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Mt=new Fo({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = BlenderbotSmallForCausalLM.from_pretrained(
    "facebook/blenderbot_small-90M", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ct=new $e({}),Pt=new M({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1168",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new zn({props:{$$slots:{default:[yf]},$$scope:{ctx:H}}}),Nt=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1180",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Go=new zn({props:{$$slots:{default:[Tf]},$$scope:{ctx:H}}}),It=new Fo({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),At=new $e({}),Dt=new M({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1275",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wo=new zn({props:{$$slots:{default:[wf]},$$scope:{ctx:H}}}),Rt=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1308",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Ro=new zn({props:{$$slots:{default:[Sf]},$$scope:{ctx:H}}}),Ht=new $e({}),Qt=new M({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1218",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),tn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),nn=new Fo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),rn=new Fo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),sn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1038",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
`}}),dn=new Fo({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ln=new $e({}),cn=new M({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1306",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),bn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Qo=new zn({props:{$$slots:{default:[Bf]},$$scope:{ctx:H}}}),vn=new $e({}),yn=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),Tn=new Fo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),wn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15953/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1310",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15953/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15953/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15953/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
`}}),Sn=new Fo({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=t("meta"),x=l(),y=t("h1"),T=t("a"),B=t("span"),f(S.$$.fragment),w=l(),q=t("span"),Pe=s("Blenderbot Small"),fe=l(),z=t("p"),je=s("Note that "),U=t("a"),Oe=s("BlenderbotSmallModel"),Le=s(` and
`),W=t("a"),Ne=s("BlenderbotSmallForConditionalGeneration"),Ie=s(` are only used in combination with the checkpoint
`),Q=t("a"),V=s("facebook/blenderbot-90M"),Ae=s(`. Larger Blenderbot checkpoints should
instead be used with `),Z=t("a"),C=s("BlenderbotModel"),O=s(` and
`),_e=t("a"),re=s("BlenderbotForConditionalGeneration"),Fe=l(),J=t("h2"),A=t("a"),Te=t("span"),f(se.$$.fragment),L=l(),we=t("span"),de=s("Overview"),Ee=l(),ee=t("p"),le=s("The Blender chatbot model was proposed in "),ie=t("a"),De=s("Recipes for building an open-domain chatbot"),X=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=t("p"),Ge=s("The abstract of the paper is the following:"),m=l(),$=t("p"),ce=t("em"),so=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ke=l(),P=t("p"),lo=s("This model was contributed by "),Se=t("a"),io=s("patrickvonplaten"),Y=s(`. The authors\u2019 code can be
found `),D=t("a"),co=s("here"),po=s(" ."),oe=l(),pe=t("h2"),ge=t("a"),Be=t("span"),f(ze.$$.fragment),yd=l(),la=t("span"),Td=s("BlenderbotSmallConfig"),Ts=l(),he=t("div"),f(ot.$$.fragment),wd=l(),ho=t("p"),Sd=s("This is the configuration class to store the configuration of a "),xn=t("a"),Bd=s("BlenderbotSmallModel"),zd=s(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),tt=t("a"),xd=s("facebook/blenderbot_small-90M"),qd=s(" architecture."),$d=l(),uo=t("p"),Fd=s("Configuration objects inherit from "),qn=t("a"),Ed=s("PretrainedConfig"),Md=s(` and can be used to control the model outputs. Read the
documentation from `),$n=t("a"),Cd=s("PretrainedConfig"),Pd=s(" for more information."),jd=l(),ia=t("p"),Od=s("Example:"),Ld=l(),f(nt.$$.fragment),ws=l(),mo=t("h2"),Eo=t("a"),ca=t("span"),f(at.$$.fragment),Nd=l(),pa=t("span"),Id=s("BlenderbotSmallTokenizer"),Ss=l(),G=t("div"),f(rt.$$.fragment),Ad=l(),ha=t("p"),Dd=s("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Gd=l(),st=t("p"),Ud=s("This tokenizer inherits from "),Fn=t("a"),Wd=s("PreTrainedTokenizer"),Rd=s(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Kd=l(),He=t("div"),f(dt.$$.fragment),Hd=l(),ua=t("p"),Qd=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Vd=l(),ma=t("p"),Jd=s("This implementation does not add special tokens and this method should be overridden in a subclass."),Xd=l(),Mo=t("div"),f(lt.$$.fragment),Yd=l(),fo=t("p"),Zd=s(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=t("code"),el=s("prepare_for_model"),ol=s(" or "),_a=t("code"),tl=s("encode_plus"),nl=s(" methods."),al=l(),Qe=t("div"),f(it.$$.fragment),rl=l(),En=t("p"),sl=s("Create the token type IDs corresponding to the sequences passed. "),Mn=t("a"),dl=s(`What are token type
IDs?`),ll=l(),ga=t("p"),il=s("Should be overridden in a subclass if the model has a special way of building those."),cl=l(),Cn=t("div"),f(ct.$$.fragment),Bs=l(),_o=t("h2"),Co=t("a"),ba=t("span"),f(pt.$$.fragment),pl=l(),ka=t("span"),hl=s("BlenderbotSmallTokenizerFast"),zs=l(),Ue=t("div"),f(ht.$$.fragment),ul=l(),ut=t("p"),ml=s("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=t("em"),fl=s("tokenizers"),_l=s(" library)."),gl=l(),Po=t("div"),f(mt.$$.fragment),bl=l(),ya=t("p"),kl=s(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),xs=l(),go=t("h2"),jo=t("a"),Ta=t("span"),f(ft.$$.fragment),vl=l(),wa=t("span"),yl=s("BlenderbotSmallModel"),qs=l(),xe=t("div"),f(_t.$$.fragment),Tl=l(),gt=t("p"),wl=s(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=t("a"),Sl=s("PreTrainedModel"),Bl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl=l(),bt=t("p"),xl=s("This model is also a PyTorch "),kt=t("a"),ql=s("torch.nn.Module"),$l=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl=l(),be=t("div"),f(vt.$$.fragment),El=l(),bo=t("p"),Ml=s("The "),jn=t("a"),Cl=s("BlenderbotSmallModel"),Pl=s(" forward method, overrides the "),Sa=t("code"),jl=s("__call__"),Ol=s(" special method."),Ll=l(),f(Oo.$$.fragment),Nl=l(),Ba=t("p"),Il=s("Example:"),Al=l(),f(yt.$$.fragment),$s=l(),ko=t("h2"),Lo=t("a"),za=t("span"),f(Tt.$$.fragment),Dl=l(),xa=t("span"),Gl=s("BlenderbotSmallForConditionalGeneration"),Fs=l(),qe=t("div"),f(wt.$$.fragment),Ul=l(),St=t("p"),Wl=s(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=t("a"),Rl=s("PreTrainedModel"),Kl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl=l(),Bt=t("p"),Ql=s("This model is also a PyTorch "),zt=t("a"),Vl=s("torch.nn.Module"),Jl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xl=l(),te=t("div"),f(xt.$$.fragment),Yl=l(),vo=t("p"),Zl=s("The "),Ln=t("a"),ei=s("BlenderbotSmallForConditionalGeneration"),oi=s(" forward method, overrides the "),qa=t("code"),ti=s("__call__"),ni=s(" special method."),ai=l(),f(No.$$.fragment),ri=l(),$a=t("p"),si=s("Conversation example::"),di=l(),Fa=t("blockquote"),Ea=t("blockquote"),Ma=t("blockquote"),Ca=t("p"),li=s(`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ii=l(),Pa=t("blockquote"),ja=t("blockquote"),Oa=t("blockquote"),qt=t("p"),ci=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),La=t("s"),pi=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),hi=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Es=l(),yo=t("h2"),Io=t("a"),Na=t("span"),f($t.$$.fragment),ui=l(),Ia=t("span"),mi=s("BlenderbotSmallForCausalLM"),Ms=l(),To=t("div"),f(Ft.$$.fragment),fi=l(),Ve=t("div"),f(Et.$$.fragment),_i=l(),Aa=t("p"),gi=s("Example:"),bi=l(),f(Mt.$$.fragment),Cs=l(),wo=t("h2"),Ao=t("a"),Da=t("span"),f(Ct.$$.fragment),ki=l(),Ga=t("span"),vi=s("TFBlenderbotSmallModel"),Ps=l(),ue=t("div"),f(Pt.$$.fragment),yi=l(),jt=t("p"),Ti=s(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=t("a"),wi=s("TFPreTrainedModel"),Si=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bi=l(),Ot=t("p"),zi=s("This model is also a "),Lt=t("a"),xi=s("tf.keras.Model"),qi=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$i=l(),f(Do.$$.fragment),Fi=l(),ke=t("div"),f(Nt.$$.fragment),Ei=l(),So=t("p"),Mi=s("The "),In=t("a"),Ci=s("TFBlenderbotSmallModel"),Pi=s(" forward method, overrides the "),Ua=t("code"),ji=s("__call__"),Oi=s(" special method."),Li=l(),f(Go.$$.fragment),Ni=l(),Wa=t("p"),Ii=s("Example:"),Ai=l(),f(It.$$.fragment),js=l(),Bo=t("h2"),Uo=t("a"),Ra=t("span"),f(At.$$.fragment),Di=l(),Ka=t("span"),Gi=s("TFBlenderbotSmallForConditionalGeneration"),Os=l(),me=t("div"),f(Dt.$$.fragment),Ui=l(),Gt=t("p"),Wi=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=t("a"),Ri=s("TFPreTrainedModel"),Ki=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hi=l(),Ut=t("p"),Qi=s("This model is also a "),Wt=t("a"),Vi=s("tf.keras.Model"),Ji=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xi=l(),f(Wo.$$.fragment),Yi=l(),j=t("div"),f(Rt.$$.fragment),Zi=l(),zo=t("p"),ec=s("The "),Dn=t("a"),oc=s("TFBlenderbotSmallForConditionalGeneration"),tc=s(" forward method, overrides the "),Ha=t("code"),nc=s("__call__"),ac=s(" special method."),rc=l(),f(Ro.$$.fragment),sc=l(),Qa=t("p"),dc=s("Conversation example::"),lc=l(),Va=t("blockquote"),Ja=t("blockquote"),Xa=t("blockquote"),Ya=t("p"),ic=s(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),cc=l(),Za=t("blockquote"),er=t("blockquote"),or=t("blockquote"),tr=t("p"),pc=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),hc=l(),nr=t("blockquote"),ar=t("blockquote"),rr=t("blockquote"),sr=t("p"),uc=s(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),mc=l(),dr=t("blockquote"),lr=t("blockquote"),ir=t("blockquote"),Kt=t("p"),fc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),cr=t("s"),_c=s("what kind of carbs do they eat? i don\u2019t know much about carbs."),gc=s(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),bc=l(),pr=t("blockquote"),hr=t("blockquote"),ur=t("blockquote"),mr=t("p"),kc=s(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ls=l(),xo=t("h2"),Ko=t("a"),fr=t("span"),f(Ht.$$.fragment),vc=l(),_r=t("span"),yc=s("FlaxBlenderbotSmallModel"),Ns=l(),N=t("div"),f(Qt.$$.fragment),Tc=l(),Vt=t("p"),wc=s(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=t("a"),Sc=s("FlaxPreTrainedModel"),Bc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=l(),Jt=t("p"),xc=s(`This model is also a Flax Linen
`),Xt=t("a"),qc=s("flax.nn.Module"),$c=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fc=l(),gr=t("p"),Ec=s("Finally, this model supports inherent JAX features such as:"),Mc=l(),We=t("ul"),br=t("li"),Yt=t("a"),Cc=s("Just-In-Time (JIT) compilation"),Pc=l(),kr=t("li"),Zt=t("a"),jc=s("Automatic Differentiation"),Oc=l(),vr=t("li"),en=t("a"),Lc=s("Vectorization"),Nc=l(),yr=t("li"),on=t("a"),Ic=s("Parallelization"),Ac=l(),Je=t("div"),f(tn.$$.fragment),Dc=l(),Tr=t("p"),Gc=s("Example:"),Uc=l(),f(nn.$$.fragment),Wc=l(),Xe=t("div"),f(an.$$.fragment),Rc=l(),wr=t("p"),Kc=s("Example:"),Hc=l(),f(rn.$$.fragment),Qc=l(),Ye=t("div"),f(sn.$$.fragment),Vc=l(),Sr=t("p"),Jc=s("Example:"),Xc=l(),f(dn.$$.fragment),Is=l(),qo=t("h2"),Ho=t("a"),Br=t("span"),f(ln.$$.fragment),Yc=l(),zr=t("span"),Zc=s("FlaxBlenderbotForConditionalGeneration"),As=l(),I=t("div"),f(cn.$$.fragment),ep=l(),pn=t("p"),op=s(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=t("a"),tp=s("FlaxPreTrainedModel"),np=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap=l(),hn=t("p"),rp=s(`This model is also a Flax Linen
`),un=t("a"),sp=s("flax.nn.Module"),dp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lp=l(),xr=t("p"),ip=s("Finally, this model supports inherent JAX features such as:"),cp=l(),Re=t("ul"),qr=t("li"),mn=t("a"),pp=s("Just-In-Time (JIT) compilation"),hp=l(),$r=t("li"),fn=t("a"),up=s("Automatic Differentiation"),mp=l(),Fr=t("li"),_n=t("a"),fp=s("Vectorization"),_p=l(),Er=t("li"),gn=t("a"),gp=s("Parallelization"),bp=l(),F=t("div"),f(bn.$$.fragment),kp=l(),$o=t("p"),vp=s("The "),Mr=t("code"),yp=s("FlaxBlenderbotSmallPreTrainedModel"),Tp=s("forward method, overrides the "),Cr=t("code"),wp=s("__call__"),Sp=s(" special method."),Bp=l(),f(Qo.$$.fragment),zp=l(),Pr=t("p"),xp=s("Summarization example:"),qp=l(),jr=t("blockquote"),Or=t("blockquote"),Lr=t("blockquote"),Nr=t("p"),$p=s("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Fp=l(),Ir=t("blockquote"),Ar=t("blockquote"),Dr=t("blockquote"),Gr=t("p"),Ep=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Mp=l(),Ur=t("blockquote"),Wr=t("blockquote"),Rr=t("blockquote"),Kr=t("p"),Cp=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Pp=l(),Hr=t("blockquote"),Qr=t("blockquote"),kn=t("blockquote"),Vo=t("h1"),Jo=t("a"),Vr=t("span"),f(vn.$$.fragment),jp=l(),Jr=t("span"),Op=s("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Lp=l(),Xr=t("p"),Np=s("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Ip=l(),Yr=t("p"),Ap=s("Mask filling example:"),Dp=l(),Zr=t("blockquote"),es=t("blockquote"),os=t("blockquote"),ts=t("p"),Gp=s(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Up=l(),ns=t("blockquote"),as=t("blockquote"),rs=t("blockquote"),ss=t("p"),Wp=s(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Rp=l(),ds=t("blockquote"),ls=t("blockquote"),is=t("blockquote"),cs=t("p"),Kp=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Hp=l(),ps=t("blockquote"),hs=t("blockquote"),us=t("blockquote"),ms=t("p"),Qp=s("tokenizer.decode(predictions).split()"),Vp=l(),Ze=t("div"),f(yn.$$.fragment),Jp=l(),fs=t("p"),Xp=s("Example:"),Yp=l(),f(Tn.$$.fragment),Zp=l(),eo=t("div"),f(wn.$$.fragment),eh=l(),_s=t("p"),oh=s("Example:"),th=l(),f(Sn.$$.fragment),this.h()},l(r){const h=bf('[data-svelte="svelte-1phssyn"]',document.head);u=n(h,"META",{name:!0,content:!0}),h.forEach(o),x=i(r),y=n(r,"H1",{class:!0});var Bn=a(y);T=n(Bn,"A",{id:!0,class:!0,href:!0});var gs=a(T);B=n(gs,"SPAN",{});var bs=a(B);_(S.$$.fragment,bs),bs.forEach(o),gs.forEach(o),w=i(Bn),q=n(Bn,"SPAN",{});var ks=a(q);Pe=d(ks,"Blenderbot Small"),ks.forEach(o),Bn.forEach(o),fe=i(r),z=n(r,"P",{});var ve=a(z);je=d(ve,"Note that "),U=n(ve,"A",{href:!0});var vs=a(U);Oe=d(vs,"BlenderbotSmallModel"),vs.forEach(o),Le=d(ve,` and
`),W=n(ve,"A",{href:!0});var ys=a(W);Ne=d(ys,"BlenderbotSmallForConditionalGeneration"),ys.forEach(o),Ie=d(ve,` are only used in combination with the checkpoint
`),Q=n(ve,"A",{href:!0,rel:!0});var ah=a(Q);V=d(ah,"facebook/blenderbot-90M"),ah.forEach(o),Ae=d(ve,`. Larger Blenderbot checkpoints should
instead be used with `),Z=n(ve,"A",{href:!0});var rh=a(Z);C=d(rh,"BlenderbotModel"),rh.forEach(o),O=d(ve,` and
`),_e=n(ve,"A",{href:!0});var sh=a(_e);re=d(sh,"BlenderbotForConditionalGeneration"),sh.forEach(o),ve.forEach(o),Fe=i(r),J=n(r,"H2",{class:!0});var Gs=a(J);A=n(Gs,"A",{id:!0,class:!0,href:!0});var dh=a(A);Te=n(dh,"SPAN",{});var lh=a(Te);_(se.$$.fragment,lh),lh.forEach(o),dh.forEach(o),L=i(Gs),we=n(Gs,"SPAN",{});var ih=a(we);de=d(ih,"Overview"),ih.forEach(o),Gs.forEach(o),Ee=i(r),ee=n(r,"P",{});var Us=a(ee);le=d(Us,"The Blender chatbot model was proposed in "),ie=n(Us,"A",{href:!0,rel:!0});var ch=a(ie);De=d(ch,"Recipes for building an open-domain chatbot"),ch.forEach(o),X=d(Us,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Us.forEach(o),Me=i(r),R=n(r,"P",{});var ph=a(R);Ge=d(ph,"The abstract of the paper is the following:"),ph.forEach(o),m=i(r),$=n(r,"P",{});var hh=a($);ce=n(hh,"EM",{});var uh=a(ce);so=d(uh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),uh.forEach(o),hh.forEach(o),Ke=i(r),P=n(r,"P",{});var Wn=a(P);lo=d(Wn,"This model was contributed by "),Se=n(Wn,"A",{href:!0,rel:!0});var mh=a(Se);io=d(mh,"patrickvonplaten"),mh.forEach(o),Y=d(Wn,`. The authors\u2019 code can be
found `),D=n(Wn,"A",{href:!0,rel:!0});var fh=a(D);co=d(fh,"here"),fh.forEach(o),po=d(Wn," ."),Wn.forEach(o),oe=i(r),pe=n(r,"H2",{class:!0});var Ws=a(pe);ge=n(Ws,"A",{id:!0,class:!0,href:!0});var _h=a(ge);Be=n(_h,"SPAN",{});var gh=a(Be);_(ze.$$.fragment,gh),gh.forEach(o),_h.forEach(o),yd=i(Ws),la=n(Ws,"SPAN",{});var bh=a(la);Td=d(bh,"BlenderbotSmallConfig"),bh.forEach(o),Ws.forEach(o),Ts=i(r),he=n(r,"DIV",{class:!0});var oo=a(he);_(ot.$$.fragment,oo),wd=i(oo),ho=n(oo,"P",{});var Rn=a(ho);Sd=d(Rn,"This is the configuration class to store the configuration of a "),xn=n(Rn,"A",{href:!0});var kh=a(xn);Bd=d(kh,"BlenderbotSmallModel"),kh.forEach(o),zd=d(Rn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),tt=n(Rn,"A",{href:!0,rel:!0});var vh=a(tt);xd=d(vh,"facebook/blenderbot_small-90M"),vh.forEach(o),qd=d(Rn," architecture."),Rn.forEach(o),$d=i(oo),uo=n(oo,"P",{});var Kn=a(uo);Fd=d(Kn,"Configuration objects inherit from "),qn=n(Kn,"A",{href:!0});var yh=a(qn);Ed=d(yh,"PretrainedConfig"),yh.forEach(o),Md=d(Kn,` and can be used to control the model outputs. Read the
documentation from `),$n=n(Kn,"A",{href:!0});var Th=a($n);Cd=d(Th,"PretrainedConfig"),Th.forEach(o),Pd=d(Kn," for more information."),Kn.forEach(o),jd=i(oo),ia=n(oo,"P",{});var wh=a(ia);Od=d(wh,"Example:"),wh.forEach(o),Ld=i(oo),_(nt.$$.fragment,oo),oo.forEach(o),ws=i(r),mo=n(r,"H2",{class:!0});var Rs=a(mo);Eo=n(Rs,"A",{id:!0,class:!0,href:!0});var Sh=a(Eo);ca=n(Sh,"SPAN",{});var Bh=a(ca);_(at.$$.fragment,Bh),Bh.forEach(o),Sh.forEach(o),Nd=i(Rs),pa=n(Rs,"SPAN",{});var zh=a(pa);Id=d(zh,"BlenderbotSmallTokenizer"),zh.forEach(o),Rs.forEach(o),Ss=i(r),G=n(r,"DIV",{class:!0});var ye=a(G);_(rt.$$.fragment,ye),Ad=i(ye),ha=n(ye,"P",{});var xh=a(ha);Dd=d(xh,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),xh.forEach(o),Gd=i(ye),st=n(ye,"P",{});var Ks=a(st);Ud=d(Ks,"This tokenizer inherits from "),Fn=n(Ks,"A",{href:!0});var qh=a(Fn);Wd=d(qh,"PreTrainedTokenizer"),qh.forEach(o),Rd=d(Ks,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ks.forEach(o),Kd=i(ye),He=n(ye,"DIV",{class:!0});var Hn=a(He);_(dt.$$.fragment,Hn),Hd=i(Hn),ua=n(Hn,"P",{});var $h=a(ua);Qd=d($h,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),$h.forEach(o),Vd=i(Hn),ma=n(Hn,"P",{});var Fh=a(ma);Jd=d(Fh,"This implementation does not add special tokens and this method should be overridden in a subclass."),Fh.forEach(o),Hn.forEach(o),Xd=i(ye),Mo=n(ye,"DIV",{class:!0});var Hs=a(Mo);_(lt.$$.fragment,Hs),Yd=i(Hs),fo=n(Hs,"P",{});var Qn=a(fo);Zd=d(Qn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=n(Qn,"CODE",{});var Eh=a(fa);el=d(Eh,"prepare_for_model"),Eh.forEach(o),ol=d(Qn," or "),_a=n(Qn,"CODE",{});var Mh=a(_a);tl=d(Mh,"encode_plus"),Mh.forEach(o),nl=d(Qn," methods."),Qn.forEach(o),Hs.forEach(o),al=i(ye),Qe=n(ye,"DIV",{class:!0});var Vn=a(Qe);_(it.$$.fragment,Vn),rl=i(Vn),En=n(Vn,"P",{});var nh=a(En);sl=d(nh,"Create the token type IDs corresponding to the sequences passed. "),Mn=n(nh,"A",{href:!0});var Ch=a(Mn);dl=d(Ch,`What are token type
IDs?`),Ch.forEach(o),nh.forEach(o),ll=i(Vn),ga=n(Vn,"P",{});var Ph=a(ga);il=d(Ph,"Should be overridden in a subclass if the model has a special way of building those."),Ph.forEach(o),Vn.forEach(o),cl=i(ye),Cn=n(ye,"DIV",{class:!0});var jh=a(Cn);_(ct.$$.fragment,jh),jh.forEach(o),ye.forEach(o),Bs=i(r),_o=n(r,"H2",{class:!0});var Qs=a(_o);Co=n(Qs,"A",{id:!0,class:!0,href:!0});var Oh=a(Co);ba=n(Oh,"SPAN",{});var Lh=a(ba);_(pt.$$.fragment,Lh),Lh.forEach(o),Oh.forEach(o),pl=i(Qs),ka=n(Qs,"SPAN",{});var Nh=a(ka);hl=d(Nh,"BlenderbotSmallTokenizerFast"),Nh.forEach(o),Qs.forEach(o),zs=i(r),Ue=n(r,"DIV",{class:!0});var Jn=a(Ue);_(ht.$$.fragment,Jn),ul=i(Jn),ut=n(Jn,"P",{});var Vs=a(ut);ml=d(Vs,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=n(Vs,"EM",{});var Ih=a(va);fl=d(Ih,"tokenizers"),Ih.forEach(o),_l=d(Vs," library)."),Vs.forEach(o),gl=i(Jn),Po=n(Jn,"DIV",{class:!0});var Js=a(Po);_(mt.$$.fragment,Js),bl=i(Js),ya=n(Js,"P",{});var Ah=a(ya);kl=d(Ah,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Ah.forEach(o),Js.forEach(o),Jn.forEach(o),xs=i(r),go=n(r,"H2",{class:!0});var Xs=a(go);jo=n(Xs,"A",{id:!0,class:!0,href:!0});var Dh=a(jo);Ta=n(Dh,"SPAN",{});var Gh=a(Ta);_(ft.$$.fragment,Gh),Gh.forEach(o),Dh.forEach(o),vl=i(Xs),wa=n(Xs,"SPAN",{});var Uh=a(wa);yl=d(Uh,"BlenderbotSmallModel"),Uh.forEach(o),Xs.forEach(o),qs=i(r),xe=n(r,"DIV",{class:!0});var Xo=a(xe);_(_t.$$.fragment,Xo),Tl=i(Xo),gt=n(Xo,"P",{});var Ys=a(gt);wl=d(Ys,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=n(Ys,"A",{href:!0});var Wh=a(Pn);Sl=d(Wh,"PreTrainedModel"),Wh.forEach(o),Bl=d(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(o),zl=i(Xo),bt=n(Xo,"P",{});var Zs=a(bt);xl=d(Zs,"This model is also a PyTorch "),kt=n(Zs,"A",{href:!0,rel:!0});var Rh=a(kt);ql=d(Rh,"torch.nn.Module"),Rh.forEach(o),$l=d(Zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zs.forEach(o),Fl=i(Xo),be=n(Xo,"DIV",{class:!0});var to=a(be);_(vt.$$.fragment,to),El=i(to),bo=n(to,"P",{});var Xn=a(bo);Ml=d(Xn,"The "),jn=n(Xn,"A",{href:!0});var Kh=a(jn);Cl=d(Kh,"BlenderbotSmallModel"),Kh.forEach(o),Pl=d(Xn," forward method, overrides the "),Sa=n(Xn,"CODE",{});var Hh=a(Sa);jl=d(Hh,"__call__"),Hh.forEach(o),Ol=d(Xn," special method."),Xn.forEach(o),Ll=i(to),_(Oo.$$.fragment,to),Nl=i(to),Ba=n(to,"P",{});var Qh=a(Ba);Il=d(Qh,"Example:"),Qh.forEach(o),Al=i(to),_(yt.$$.fragment,to),to.forEach(o),Xo.forEach(o),$s=i(r),ko=n(r,"H2",{class:!0});var ed=a(ko);Lo=n(ed,"A",{id:!0,class:!0,href:!0});var Vh=a(Lo);za=n(Vh,"SPAN",{});var Jh=a(za);_(Tt.$$.fragment,Jh),Jh.forEach(o),Vh.forEach(o),Dl=i(ed),xa=n(ed,"SPAN",{});var Xh=a(xa);Gl=d(Xh,"BlenderbotSmallForConditionalGeneration"),Xh.forEach(o),ed.forEach(o),Fs=i(r),qe=n(r,"DIV",{class:!0});var Yo=a(qe);_(wt.$$.fragment,Yo),Ul=i(Yo),St=n(Yo,"P",{});var od=a(St);Wl=d(od,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=n(od,"A",{href:!0});var Yh=a(On);Rl=d(Yh,"PreTrainedModel"),Yh.forEach(o),Kl=d(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(o),Hl=i(Yo),Bt=n(Yo,"P",{});var td=a(Bt);Ql=d(td,"This model is also a PyTorch "),zt=n(td,"A",{href:!0,rel:!0});var Zh=a(zt);Vl=d(Zh,"torch.nn.Module"),Zh.forEach(o),Jl=d(td,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),td.forEach(o),Xl=i(Yo),te=n(Yo,"DIV",{class:!0});var Ce=a(te);_(xt.$$.fragment,Ce),Yl=i(Ce),vo=n(Ce,"P",{});var Yn=a(vo);Zl=d(Yn,"The "),Ln=n(Yn,"A",{href:!0});var eu=a(Ln);ei=d(eu,"BlenderbotSmallForConditionalGeneration"),eu.forEach(o),oi=d(Yn," forward method, overrides the "),qa=n(Yn,"CODE",{});var ou=a(qa);ti=d(ou,"__call__"),ou.forEach(o),ni=d(Yn," special method."),Yn.forEach(o),ai=i(Ce),_(No.$$.fragment,Ce),ri=i(Ce),$a=n(Ce,"P",{});var tu=a($a);si=d(tu,"Conversation example::"),tu.forEach(o),di=i(Ce),Fa=n(Ce,"BLOCKQUOTE",{});var nu=a(Fa);Ea=n(nu,"BLOCKQUOTE",{});var au=a(Ea);Ma=n(au,"BLOCKQUOTE",{});var ru=a(Ma);Ca=n(ru,"P",{});var su=a(Ca);li=d(su,`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),su.forEach(o),ru.forEach(o),au.forEach(o),nu.forEach(o),ii=i(Ce),Pa=n(Ce,"BLOCKQUOTE",{});var du=a(Pa);ja=n(du,"BLOCKQUOTE",{});var lu=a(ja);Oa=n(lu,"BLOCKQUOTE",{});var iu=a(Oa);qt=n(iu,"P",{});var nd=a(qt);ci=d(nd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),La=n(nd,"S",{});var cu=a(La);pi=d(cu,"what kind of carbs do they eat? i don\u2019t know much about carbs."),cu.forEach(o),hi=d(nd,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),nd.forEach(o),iu.forEach(o),lu.forEach(o),du.forEach(o),Ce.forEach(o),Yo.forEach(o),Es=i(r),yo=n(r,"H2",{class:!0});var ad=a(yo);Io=n(ad,"A",{id:!0,class:!0,href:!0});var pu=a(Io);Na=n(pu,"SPAN",{});var hu=a(Na);_($t.$$.fragment,hu),hu.forEach(o),pu.forEach(o),ui=i(ad),Ia=n(ad,"SPAN",{});var uu=a(Ia);mi=d(uu,"BlenderbotSmallForCausalLM"),uu.forEach(o),ad.forEach(o),Ms=i(r),To=n(r,"DIV",{class:!0});var rd=a(To);_(Ft.$$.fragment,rd),fi=i(rd),Ve=n(rd,"DIV",{class:!0});var Zn=a(Ve);_(Et.$$.fragment,Zn),_i=i(Zn),Aa=n(Zn,"P",{});var mu=a(Aa);gi=d(mu,"Example:"),mu.forEach(o),bi=i(Zn),_(Mt.$$.fragment,Zn),Zn.forEach(o),rd.forEach(o),Cs=i(r),wo=n(r,"H2",{class:!0});var sd=a(wo);Ao=n(sd,"A",{id:!0,class:!0,href:!0});var fu=a(Ao);Da=n(fu,"SPAN",{});var _u=a(Da);_(Ct.$$.fragment,_u),_u.forEach(o),fu.forEach(o),ki=i(sd),Ga=n(sd,"SPAN",{});var gu=a(Ga);vi=d(gu,"TFBlenderbotSmallModel"),gu.forEach(o),sd.forEach(o),Ps=i(r),ue=n(r,"DIV",{class:!0});var no=a(ue);_(Pt.$$.fragment,no),yi=i(no),jt=n(no,"P",{});var dd=a(jt);Ti=d(dd,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n(dd,"A",{href:!0});var bu=a(Nn);wi=d(bu,"TFPreTrainedModel"),bu.forEach(o),Si=d(dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dd.forEach(o),Bi=i(no),Ot=n(no,"P",{});var ld=a(Ot);zi=d(ld,"This model is also a "),Lt=n(ld,"A",{href:!0,rel:!0});var ku=a(Lt);xi=d(ku,"tf.keras.Model"),ku.forEach(o),qi=d(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(o),$i=i(no),_(Do.$$.fragment,no),Fi=i(no),ke=n(no,"DIV",{class:!0});var ao=a(ke);_(Nt.$$.fragment,ao),Ei=i(ao),So=n(ao,"P",{});var ea=a(So);Mi=d(ea,"The "),In=n(ea,"A",{href:!0});var vu=a(In);Ci=d(vu,"TFBlenderbotSmallModel"),vu.forEach(o),Pi=d(ea," forward method, overrides the "),Ua=n(ea,"CODE",{});var yu=a(Ua);ji=d(yu,"__call__"),yu.forEach(o),Oi=d(ea," special method."),ea.forEach(o),Li=i(ao),_(Go.$$.fragment,ao),Ni=i(ao),Wa=n(ao,"P",{});var Tu=a(Wa);Ii=d(Tu,"Example:"),Tu.forEach(o),Ai=i(ao),_(It.$$.fragment,ao),ao.forEach(o),no.forEach(o),js=i(r),Bo=n(r,"H2",{class:!0});var id=a(Bo);Uo=n(id,"A",{id:!0,class:!0,href:!0});var wu=a(Uo);Ra=n(wu,"SPAN",{});var Su=a(Ra);_(At.$$.fragment,Su),Su.forEach(o),wu.forEach(o),Di=i(id),Ka=n(id,"SPAN",{});var Bu=a(Ka);Gi=d(Bu,"TFBlenderbotSmallForConditionalGeneration"),Bu.forEach(o),id.forEach(o),Os=i(r),me=n(r,"DIV",{class:!0});var ro=a(me);_(Dt.$$.fragment,ro),Ui=i(ro),Gt=n(ro,"P",{});var cd=a(Gt);Wi=d(cd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n(cd,"A",{href:!0});var zu=a(An);Ri=d(zu,"TFPreTrainedModel"),zu.forEach(o),Ki=d(cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd.forEach(o),Hi=i(ro),Ut=n(ro,"P",{});var pd=a(Ut);Qi=d(pd,"This model is also a "),Wt=n(pd,"A",{href:!0,rel:!0});var xu=a(Wt);Vi=d(xu,"tf.keras.Model"),xu.forEach(o),Ji=d(pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pd.forEach(o),Xi=i(ro),_(Wo.$$.fragment,ro),Yi=i(ro),j=n(ro,"DIV",{class:!0});var K=a(j);_(Rt.$$.fragment,K),Zi=i(K),zo=n(K,"P",{});var oa=a(zo);ec=d(oa,"The "),Dn=n(oa,"A",{href:!0});var qu=a(Dn);oc=d(qu,"TFBlenderbotSmallForConditionalGeneration"),qu.forEach(o),tc=d(oa," forward method, overrides the "),Ha=n(oa,"CODE",{});var $u=a(Ha);nc=d($u,"__call__"),$u.forEach(o),ac=d(oa," special method."),oa.forEach(o),rc=i(K),_(Ro.$$.fragment,K),sc=i(K),Qa=n(K,"P",{});var Fu=a(Qa);dc=d(Fu,"Conversation example::"),Fu.forEach(o),lc=i(K),Va=n(K,"BLOCKQUOTE",{});var Eu=a(Va);Ja=n(Eu,"BLOCKQUOTE",{});var Mu=a(Ja);Xa=n(Mu,"BLOCKQUOTE",{});var Cu=a(Xa);Ya=n(Cu,"P",{});var Pu=a(Ya);ic=d(Pu,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Pu.forEach(o),Cu.forEach(o),Mu.forEach(o),Eu.forEach(o),cc=i(K),Za=n(K,"BLOCKQUOTE",{});var ju=a(Za);er=n(ju,"BLOCKQUOTE",{});var Ou=a(er);or=n(Ou,"BLOCKQUOTE",{});var Lu=a(or);tr=n(Lu,"P",{});var Nu=a(tr);pc=d(Nu,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Nu.forEach(o),Lu.forEach(o),Ou.forEach(o),ju.forEach(o),hc=i(K),nr=n(K,"BLOCKQUOTE",{});var Iu=a(nr);ar=n(Iu,"BLOCKQUOTE",{});var Au=a(ar);rr=n(Au,"BLOCKQUOTE",{});var Du=a(rr);sr=n(Du,"P",{});var Gu=a(sr);uc=d(Gu,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Gu.forEach(o),Du.forEach(o),Au.forEach(o),Iu.forEach(o),mc=i(K),dr=n(K,"BLOCKQUOTE",{});var Uu=a(dr);lr=n(Uu,"BLOCKQUOTE",{});var Wu=a(lr);ir=n(Wu,"BLOCKQUOTE",{});var Ru=a(ir);Kt=n(Ru,"P",{});var hd=a(Kt);fc=d(hd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),cr=n(hd,"S",{});var Ku=a(cr);_c=d(Ku,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Ku.forEach(o),gc=d(hd,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),hd.forEach(o),Ru.forEach(o),Wu.forEach(o),Uu.forEach(o),bc=i(K),pr=n(K,"BLOCKQUOTE",{});var Hu=a(pr);hr=n(Hu,"BLOCKQUOTE",{});var Qu=a(hr);ur=n(Qu,"BLOCKQUOTE",{});var Vu=a(ur);mr=n(Vu,"P",{});var Ju=a(mr);kc=d(Ju,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ju.forEach(o),Vu.forEach(o),Qu.forEach(o),Hu.forEach(o),K.forEach(o),ro.forEach(o),Ls=i(r),xo=n(r,"H2",{class:!0});var ud=a(xo);Ko=n(ud,"A",{id:!0,class:!0,href:!0});var Xu=a(Ko);fr=n(Xu,"SPAN",{});var Yu=a(fr);_(Ht.$$.fragment,Yu),Yu.forEach(o),Xu.forEach(o),vc=i(ud),_r=n(ud,"SPAN",{});var Zu=a(_r);yc=d(Zu,"FlaxBlenderbotSmallModel"),Zu.forEach(o),ud.forEach(o),Ns=i(r),N=n(r,"DIV",{class:!0});var ne=a(N);_(Qt.$$.fragment,ne),Tc=i(ne),Vt=n(ne,"P",{});var md=a(Vt);wc=d(md,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n(md,"A",{href:!0});var em=a(Gn);Sc=d(em,"FlaxPreTrainedModel"),em.forEach(o),Bc=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(o),zc=i(ne),Jt=n(ne,"P",{});var fd=a(Jt);xc=d(fd,`This model is also a Flax Linen
`),Xt=n(fd,"A",{href:!0,rel:!0});var om=a(Xt);qc=d(om,"flax.nn.Module"),om.forEach(o),$c=d(fd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fd.forEach(o),Fc=i(ne),gr=n(ne,"P",{});var tm=a(gr);Ec=d(tm,"Finally, this model supports inherent JAX features such as:"),tm.forEach(o),Mc=i(ne),We=n(ne,"UL",{});var Zo=a(We);br=n(Zo,"LI",{});var nm=a(br);Yt=n(nm,"A",{href:!0,rel:!0});var am=a(Yt);Cc=d(am,"Just-In-Time (JIT) compilation"),am.forEach(o),nm.forEach(o),Pc=i(Zo),kr=n(Zo,"LI",{});var rm=a(kr);Zt=n(rm,"A",{href:!0,rel:!0});var sm=a(Zt);jc=d(sm,"Automatic Differentiation"),sm.forEach(o),rm.forEach(o),Oc=i(Zo),vr=n(Zo,"LI",{});var dm=a(vr);en=n(dm,"A",{href:!0,rel:!0});var lm=a(en);Lc=d(lm,"Vectorization"),lm.forEach(o),dm.forEach(o),Nc=i(Zo),yr=n(Zo,"LI",{});var im=a(yr);on=n(im,"A",{href:!0,rel:!0});var cm=a(on);Ic=d(cm,"Parallelization"),cm.forEach(o),im.forEach(o),Zo.forEach(o),Ac=i(ne),Je=n(ne,"DIV",{class:!0});var ta=a(Je);_(tn.$$.fragment,ta),Dc=i(ta),Tr=n(ta,"P",{});var pm=a(Tr);Gc=d(pm,"Example:"),pm.forEach(o),Uc=i(ta),_(nn.$$.fragment,ta),ta.forEach(o),Wc=i(ne),Xe=n(ne,"DIV",{class:!0});var na=a(Xe);_(an.$$.fragment,na),Rc=i(na),wr=n(na,"P",{});var hm=a(wr);Kc=d(hm,"Example:"),hm.forEach(o),Hc=i(na),_(rn.$$.fragment,na),na.forEach(o),Qc=i(ne),Ye=n(ne,"DIV",{class:!0});var aa=a(Ye);_(sn.$$.fragment,aa),Vc=i(aa),Sr=n(aa,"P",{});var um=a(Sr);Jc=d(um,"Example:"),um.forEach(o),Xc=i(aa),_(dn.$$.fragment,aa),aa.forEach(o),ne.forEach(o),Is=i(r),qo=n(r,"H2",{class:!0});var _d=a(qo);Ho=n(_d,"A",{id:!0,class:!0,href:!0});var mm=a(Ho);Br=n(mm,"SPAN",{});var fm=a(Br);_(ln.$$.fragment,fm),fm.forEach(o),mm.forEach(o),Yc=i(_d),zr=n(_d,"SPAN",{});var _m=a(zr);Zc=d(_m,"FlaxBlenderbotForConditionalGeneration"),_m.forEach(o),_d.forEach(o),As=i(r),I=n(r,"DIV",{class:!0});var ae=a(I);_(cn.$$.fragment,ae),ep=i(ae),pn=n(ae,"P",{});var gd=a(pn);op=d(gd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=n(gd,"A",{href:!0});var gm=a(Un);tp=d(gm,"FlaxPreTrainedModel"),gm.forEach(o),np=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),ap=i(ae),hn=n(ae,"P",{});var bd=a(hn);rp=d(bd,`This model is also a Flax Linen
`),un=n(bd,"A",{href:!0,rel:!0});var bm=a(un);sp=d(bm,"flax.nn.Module"),bm.forEach(o),dp=d(bd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bd.forEach(o),lp=i(ae),xr=n(ae,"P",{});var km=a(xr);ip=d(km,"Finally, this model supports inherent JAX features such as:"),km.forEach(o),cp=i(ae),Re=n(ae,"UL",{});var et=a(Re);qr=n(et,"LI",{});var vm=a(qr);mn=n(vm,"A",{href:!0,rel:!0});var ym=a(mn);pp=d(ym,"Just-In-Time (JIT) compilation"),ym.forEach(o),vm.forEach(o),hp=i(et),$r=n(et,"LI",{});var Tm=a($r);fn=n(Tm,"A",{href:!0,rel:!0});var wm=a(fn);up=d(wm,"Automatic Differentiation"),wm.forEach(o),Tm.forEach(o),mp=i(et),Fr=n(et,"LI",{});var Sm=a(Fr);_n=n(Sm,"A",{href:!0,rel:!0});var Bm=a(_n);fp=d(Bm,"Vectorization"),Bm.forEach(o),Sm.forEach(o),_p=i(et),Er=n(et,"LI",{});var zm=a(Er);gn=n(zm,"A",{href:!0,rel:!0});var xm=a(gn);gp=d(xm,"Parallelization"),xm.forEach(o),zm.forEach(o),et.forEach(o),bp=i(ae),F=n(ae,"DIV",{class:!0});var E=a(F);_(bn.$$.fragment,E),kp=i(E),$o=n(E,"P",{});var ra=a($o);vp=d(ra,"The "),Mr=n(ra,"CODE",{});var qm=a(Mr);yp=d(qm,"FlaxBlenderbotSmallPreTrainedModel"),qm.forEach(o),Tp=d(ra,"forward method, overrides the "),Cr=n(ra,"CODE",{});var $m=a(Cr);wp=d($m,"__call__"),$m.forEach(o),Sp=d(ra," special method."),ra.forEach(o),Bp=i(E),_(Qo.$$.fragment,E),zp=i(E),Pr=n(E,"P",{});var Fm=a(Pr);xp=d(Fm,"Summarization example:"),Fm.forEach(o),qp=i(E),jr=n(E,"BLOCKQUOTE",{});var Em=a(jr);Or=n(Em,"BLOCKQUOTE",{});var Mm=a(Or);Lr=n(Mm,"BLOCKQUOTE",{});var Cm=a(Lr);Nr=n(Cm,"P",{});var Pm=a(Nr);$p=d(Pm,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Pm.forEach(o),Cm.forEach(o),Mm.forEach(o),Em.forEach(o),Fp=i(E),Ir=n(E,"BLOCKQUOTE",{});var jm=a(Ir);Ar=n(jm,"BLOCKQUOTE",{});var Om=a(Ar);Dr=n(Om,"BLOCKQUOTE",{});var Lm=a(Dr);Gr=n(Lm,"P",{});var Nm=a(Gr);Ep=d(Nm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Nm.forEach(o),Lm.forEach(o),Om.forEach(o),jm.forEach(o),Mp=i(E),Ur=n(E,"BLOCKQUOTE",{});var Im=a(Ur);Wr=n(Im,"BLOCKQUOTE",{});var Am=a(Wr);Rr=n(Am,"BLOCKQUOTE",{});var Dm=a(Rr);Kr=n(Dm,"P",{});var Gm=a(Kr);Cp=d(Gm,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Gm.forEach(o),Dm.forEach(o),Am.forEach(o),Im.forEach(o),Pp=i(E),Hr=n(E,"BLOCKQUOTE",{});var Um=a(Hr);Qr=n(Um,"BLOCKQUOTE",{});var Wm=a(Qr);kn=n(Wm,"BLOCKQUOTE",{});var kd=a(kn);Vo=n(kd,"H1",{class:!0});var vd=a(Vo);Jo=n(vd,"A",{id:!0,class:!0,href:!0});var Rm=a(Jo);Vr=n(Rm,"SPAN",{});var Km=a(Vr);_(vn.$$.fragment,Km),Km.forEach(o),Rm.forEach(o),jp=i(vd),Jr=n(vd,"SPAN",{});var Hm=a(Jr);Op=d(Hm,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Hm.forEach(o),vd.forEach(o),Lp=i(kd),Xr=n(kd,"P",{});var Qm=a(Xr);Np=d(Qm,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Qm.forEach(o),kd.forEach(o),Wm.forEach(o),Um.forEach(o),Ip=i(E),Yr=n(E,"P",{});var Vm=a(Yr);Ap=d(Vm,"Mask filling example:"),Vm.forEach(o),Dp=i(E),Zr=n(E,"BLOCKQUOTE",{});var Jm=a(Zr);es=n(Jm,"BLOCKQUOTE",{});var Xm=a(es);os=n(Xm,"BLOCKQUOTE",{});var Ym=a(os);ts=n(Ym,"P",{});var Zm=a(ts);Gp=d(Zm,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Zm.forEach(o),Ym.forEach(o),Xm.forEach(o),Jm.forEach(o),Up=i(E),ns=n(E,"BLOCKQUOTE",{});var ef=a(ns);as=n(ef,"BLOCKQUOTE",{});var of=a(as);rs=n(of,"BLOCKQUOTE",{});var tf=a(rs);ss=n(tf,"P",{});var nf=a(ss);Wp=d(nf,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),nf.forEach(o),tf.forEach(o),of.forEach(o),ef.forEach(o),Rp=i(E),ds=n(E,"BLOCKQUOTE",{});var af=a(ds);ls=n(af,"BLOCKQUOTE",{});var rf=a(ls);is=n(rf,"BLOCKQUOTE",{});var sf=a(is);cs=n(sf,"P",{});var df=a(cs);Kp=d(df,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),df.forEach(o),sf.forEach(o),rf.forEach(o),af.forEach(o),Hp=i(E),ps=n(E,"BLOCKQUOTE",{});var lf=a(ps);hs=n(lf,"BLOCKQUOTE",{});var cf=a(hs);us=n(cf,"BLOCKQUOTE",{});var pf=a(us);ms=n(pf,"P",{});var hf=a(ms);Qp=d(hf,"tokenizer.decode(predictions).split()"),hf.forEach(o),pf.forEach(o),cf.forEach(o),lf.forEach(o),E.forEach(o),Vp=i(ae),Ze=n(ae,"DIV",{class:!0});var sa=a(Ze);_(yn.$$.fragment,sa),Jp=i(sa),fs=n(sa,"P",{});var uf=a(fs);Xp=d(uf,"Example:"),uf.forEach(o),Yp=i(sa),_(Tn.$$.fragment,sa),sa.forEach(o),Zp=i(ae),eo=n(ae,"DIV",{class:!0});var da=a(eo);_(wn.$$.fragment,da),eh=i(da),_s=n(da,"P",{});var mf=a(_s);oh=d(mf,"Example:"),mf.forEach(o),th=i(da),_(Sn.$$.fragment,da),da.forEach(o),ae.forEach(o),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(xf)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(y,"class","relative group"),c(U,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),c(Q,"rel","nofollow"),c(Z,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(J,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(ie,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(ge,"id","transformers.BlenderbotSmallConfig"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.BlenderbotSmallConfig"),c(pe,"class","relative group"),c(xn,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(tt,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(tt,"rel","nofollow"),c(qn,"href","/docs/transformers/pr_15953/en/main_classes/configuration#transformers.PretrainedConfig"),c($n,"href","/docs/transformers/pr_15953/en/main_classes/configuration#transformers.PretrainedConfig"),c(he,"class","docstring"),c(Eo,"id","transformers.BlenderbotSmallTokenizer"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.BlenderbotSmallTokenizer"),c(mo,"class","relative group"),c(Fn,"href","/docs/transformers/pr_15953/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Mo,"class","docstring"),c(Mn,"href","../glossary#token-type-ids"),c(Qe,"class","docstring"),c(Cn,"class","docstring"),c(G,"class","docstring"),c(Co,"id","transformers.BlenderbotSmallTokenizerFast"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.BlenderbotSmallTokenizerFast"),c(_o,"class","relative group"),c(Po,"class","docstring"),c(Ue,"class","docstring"),c(jo,"id","transformers.BlenderbotSmallModel"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.BlenderbotSmallModel"),c(go,"class","relative group"),c(Pn,"href","/docs/transformers/pr_15953/en/main_classes/model#transformers.PreTrainedModel"),c(kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(kt,"rel","nofollow"),c(jn,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(be,"class","docstring"),c(xe,"class","docstring"),c(Lo,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(ko,"class","relative group"),c(On,"href","/docs/transformers/pr_15953/en/main_classes/model#transformers.PreTrainedModel"),c(zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zt,"rel","nofollow"),c(Ln,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(te,"class","docstring"),c(qe,"class","docstring"),c(Io,"id","transformers.BlenderbotSmallForCausalLM"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.BlenderbotSmallForCausalLM"),c(yo,"class","relative group"),c(Ve,"class","docstring"),c(To,"class","docstring"),c(Ao,"id","transformers.TFBlenderbotSmallModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.TFBlenderbotSmallModel"),c(wo,"class","relative group"),c(Nn,"href","/docs/transformers/pr_15953/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Lt,"rel","nofollow"),c(In,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(ue,"class","docstring"),c(Uo,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(Bo,"class","relative group"),c(An,"href","/docs/transformers/pr_15953/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wt,"rel","nofollow"),c(Dn,"href","/docs/transformers/pr_15953/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(j,"class","docstring"),c(me,"class","docstring"),c(Ko,"id","transformers.FlaxBlenderbotSmallModel"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBlenderbotSmallModel"),c(xo,"class","relative group"),c(Gn,"href","/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Xt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Xt,"rel","nofollow"),c(Yt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Yt,"rel","nofollow"),c(Zt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zt,"rel","nofollow"),c(en,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(en,"rel","nofollow"),c(on,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(on,"rel","nofollow"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(Ye,"class","docstring"),c(N,"class","docstring"),c(Ho,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(qo,"class","relative group"),c(Un,"href","/docs/transformers/pr_15953/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(Jo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Vo,"class","relative group"),c(F,"class","docstring"),c(Ze,"class","docstring"),c(eo,"class","docstring"),c(I,"class","docstring")},m(r,h){e(document.head,u),p(r,x,h),p(r,y,h),e(y,T),e(T,B),g(S,B,null),e(y,w),e(y,q),e(q,Pe),p(r,fe,h),p(r,z,h),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ie),e(z,Q),e(Q,V),e(z,Ae),e(z,Z),e(Z,C),e(z,O),e(z,_e),e(_e,re),p(r,Fe,h),p(r,J,h),e(J,A),e(A,Te),g(se,Te,null),e(J,L),e(J,we),e(we,de),p(r,Ee,h),p(r,ee,h),e(ee,le),e(ee,ie),e(ie,De),e(ee,X),p(r,Me,h),p(r,R,h),e(R,Ge),p(r,m,h),p(r,$,h),e($,ce),e(ce,so),p(r,Ke,h),p(r,P,h),e(P,lo),e(P,Se),e(Se,io),e(P,Y),e(P,D),e(D,co),e(P,po),p(r,oe,h),p(r,pe,h),e(pe,ge),e(ge,Be),g(ze,Be,null),e(pe,yd),e(pe,la),e(la,Td),p(r,Ts,h),p(r,he,h),g(ot,he,null),e(he,wd),e(he,ho),e(ho,Sd),e(ho,xn),e(xn,Bd),e(ho,zd),e(ho,tt),e(tt,xd),e(ho,qd),e(he,$d),e(he,uo),e(uo,Fd),e(uo,qn),e(qn,Ed),e(uo,Md),e(uo,$n),e($n,Cd),e(uo,Pd),e(he,jd),e(he,ia),e(ia,Od),e(he,Ld),g(nt,he,null),p(r,ws,h),p(r,mo,h),e(mo,Eo),e(Eo,ca),g(at,ca,null),e(mo,Nd),e(mo,pa),e(pa,Id),p(r,Ss,h),p(r,G,h),g(rt,G,null),e(G,Ad),e(G,ha),e(ha,Dd),e(G,Gd),e(G,st),e(st,Ud),e(st,Fn),e(Fn,Wd),e(st,Rd),e(G,Kd),e(G,He),g(dt,He,null),e(He,Hd),e(He,ua),e(ua,Qd),e(He,Vd),e(He,ma),e(ma,Jd),e(G,Xd),e(G,Mo),g(lt,Mo,null),e(Mo,Yd),e(Mo,fo),e(fo,Zd),e(fo,fa),e(fa,el),e(fo,ol),e(fo,_a),e(_a,tl),e(fo,nl),e(G,al),e(G,Qe),g(it,Qe,null),e(Qe,rl),e(Qe,En),e(En,sl),e(En,Mn),e(Mn,dl),e(Qe,ll),e(Qe,ga),e(ga,il),e(G,cl),e(G,Cn),g(ct,Cn,null),p(r,Bs,h),p(r,_o,h),e(_o,Co),e(Co,ba),g(pt,ba,null),e(_o,pl),e(_o,ka),e(ka,hl),p(r,zs,h),p(r,Ue,h),g(ht,Ue,null),e(Ue,ul),e(Ue,ut),e(ut,ml),e(ut,va),e(va,fl),e(ut,_l),e(Ue,gl),e(Ue,Po),g(mt,Po,null),e(Po,bl),e(Po,ya),e(ya,kl),p(r,xs,h),p(r,go,h),e(go,jo),e(jo,Ta),g(ft,Ta,null),e(go,vl),e(go,wa),e(wa,yl),p(r,qs,h),p(r,xe,h),g(_t,xe,null),e(xe,Tl),e(xe,gt),e(gt,wl),e(gt,Pn),e(Pn,Sl),e(gt,Bl),e(xe,zl),e(xe,bt),e(bt,xl),e(bt,kt),e(kt,ql),e(bt,$l),e(xe,Fl),e(xe,be),g(vt,be,null),e(be,El),e(be,bo),e(bo,Ml),e(bo,jn),e(jn,Cl),e(bo,Pl),e(bo,Sa),e(Sa,jl),e(bo,Ol),e(be,Ll),g(Oo,be,null),e(be,Nl),e(be,Ba),e(Ba,Il),e(be,Al),g(yt,be,null),p(r,$s,h),p(r,ko,h),e(ko,Lo),e(Lo,za),g(Tt,za,null),e(ko,Dl),e(ko,xa),e(xa,Gl),p(r,Fs,h),p(r,qe,h),g(wt,qe,null),e(qe,Ul),e(qe,St),e(St,Wl),e(St,On),e(On,Rl),e(St,Kl),e(qe,Hl),e(qe,Bt),e(Bt,Ql),e(Bt,zt),e(zt,Vl),e(Bt,Jl),e(qe,Xl),e(qe,te),g(xt,te,null),e(te,Yl),e(te,vo),e(vo,Zl),e(vo,Ln),e(Ln,ei),e(vo,oi),e(vo,qa),e(qa,ti),e(vo,ni),e(te,ai),g(No,te,null),e(te,ri),e(te,$a),e($a,si),e(te,di),e(te,Fa),e(Fa,Ea),e(Ea,Ma),e(Ma,Ca),e(Ca,li),e(te,ii),e(te,Pa),e(Pa,ja),e(ja,Oa),e(Oa,qt),e(qt,ci),e(qt,La),e(La,pi),e(qt,hi),p(r,Es,h),p(r,yo,h),e(yo,Io),e(Io,Na),g($t,Na,null),e(yo,ui),e(yo,Ia),e(Ia,mi),p(r,Ms,h),p(r,To,h),g(Ft,To,null),e(To,fi),e(To,Ve),g(Et,Ve,null),e(Ve,_i),e(Ve,Aa),e(Aa,gi),e(Ve,bi),g(Mt,Ve,null),p(r,Cs,h),p(r,wo,h),e(wo,Ao),e(Ao,Da),g(Ct,Da,null),e(wo,ki),e(wo,Ga),e(Ga,vi),p(r,Ps,h),p(r,ue,h),g(Pt,ue,null),e(ue,yi),e(ue,jt),e(jt,Ti),e(jt,Nn),e(Nn,wi),e(jt,Si),e(ue,Bi),e(ue,Ot),e(Ot,zi),e(Ot,Lt),e(Lt,xi),e(Ot,qi),e(ue,$i),g(Do,ue,null),e(ue,Fi),e(ue,ke),g(Nt,ke,null),e(ke,Ei),e(ke,So),e(So,Mi),e(So,In),e(In,Ci),e(So,Pi),e(So,Ua),e(Ua,ji),e(So,Oi),e(ke,Li),g(Go,ke,null),e(ke,Ni),e(ke,Wa),e(Wa,Ii),e(ke,Ai),g(It,ke,null),p(r,js,h),p(r,Bo,h),e(Bo,Uo),e(Uo,Ra),g(At,Ra,null),e(Bo,Di),e(Bo,Ka),e(Ka,Gi),p(r,Os,h),p(r,me,h),g(Dt,me,null),e(me,Ui),e(me,Gt),e(Gt,Wi),e(Gt,An),e(An,Ri),e(Gt,Ki),e(me,Hi),e(me,Ut),e(Ut,Qi),e(Ut,Wt),e(Wt,Vi),e(Ut,Ji),e(me,Xi),g(Wo,me,null),e(me,Yi),e(me,j),g(Rt,j,null),e(j,Zi),e(j,zo),e(zo,ec),e(zo,Dn),e(Dn,oc),e(zo,tc),e(zo,Ha),e(Ha,nc),e(zo,ac),e(j,rc),g(Ro,j,null),e(j,sc),e(j,Qa),e(Qa,dc),e(j,lc),e(j,Va),e(Va,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,ic),e(j,cc),e(j,Za),e(Za,er),e(er,or),e(or,tr),e(tr,pc),e(j,hc),e(j,nr),e(nr,ar),e(ar,rr),e(rr,sr),e(sr,uc),e(j,mc),e(j,dr),e(dr,lr),e(lr,ir),e(ir,Kt),e(Kt,fc),e(Kt,cr),e(cr,_c),e(Kt,gc),e(j,bc),e(j,pr),e(pr,hr),e(hr,ur),e(ur,mr),e(mr,kc),p(r,Ls,h),p(r,xo,h),e(xo,Ko),e(Ko,fr),g(Ht,fr,null),e(xo,vc),e(xo,_r),e(_r,yc),p(r,Ns,h),p(r,N,h),g(Qt,N,null),e(N,Tc),e(N,Vt),e(Vt,wc),e(Vt,Gn),e(Gn,Sc),e(Vt,Bc),e(N,zc),e(N,Jt),e(Jt,xc),e(Jt,Xt),e(Xt,qc),e(Jt,$c),e(N,Fc),e(N,gr),e(gr,Ec),e(N,Mc),e(N,We),e(We,br),e(br,Yt),e(Yt,Cc),e(We,Pc),e(We,kr),e(kr,Zt),e(Zt,jc),e(We,Oc),e(We,vr),e(vr,en),e(en,Lc),e(We,Nc),e(We,yr),e(yr,on),e(on,Ic),e(N,Ac),e(N,Je),g(tn,Je,null),e(Je,Dc),e(Je,Tr),e(Tr,Gc),e(Je,Uc),g(nn,Je,null),e(N,Wc),e(N,Xe),g(an,Xe,null),e(Xe,Rc),e(Xe,wr),e(wr,Kc),e(Xe,Hc),g(rn,Xe,null),e(N,Qc),e(N,Ye),g(sn,Ye,null),e(Ye,Vc),e(Ye,Sr),e(Sr,Jc),e(Ye,Xc),g(dn,Ye,null),p(r,Is,h),p(r,qo,h),e(qo,Ho),e(Ho,Br),g(ln,Br,null),e(qo,Yc),e(qo,zr),e(zr,Zc),p(r,As,h),p(r,I,h),g(cn,I,null),e(I,ep),e(I,pn),e(pn,op),e(pn,Un),e(Un,tp),e(pn,np),e(I,ap),e(I,hn),e(hn,rp),e(hn,un),e(un,sp),e(hn,dp),e(I,lp),e(I,xr),e(xr,ip),e(I,cp),e(I,Re),e(Re,qr),e(qr,mn),e(mn,pp),e(Re,hp),e(Re,$r),e($r,fn),e(fn,up),e(Re,mp),e(Re,Fr),e(Fr,_n),e(_n,fp),e(Re,_p),e(Re,Er),e(Er,gn),e(gn,gp),e(I,bp),e(I,F),g(bn,F,null),e(F,kp),e(F,$o),e($o,vp),e($o,Mr),e(Mr,yp),e($o,Tp),e($o,Cr),e(Cr,wp),e($o,Sp),e(F,Bp),g(Qo,F,null),e(F,zp),e(F,Pr),e(Pr,xp),e(F,qp),e(F,jr),e(jr,Or),e(Or,Lr),e(Lr,Nr),e(Nr,$p),e(F,Fp),e(F,Ir),e(Ir,Ar),e(Ar,Dr),e(Dr,Gr),e(Gr,Ep),e(F,Mp),e(F,Ur),e(Ur,Wr),e(Wr,Rr),e(Rr,Kr),e(Kr,Cp),e(F,Pp),e(F,Hr),e(Hr,Qr),e(Qr,kn),e(kn,Vo),e(Vo,Jo),e(Jo,Vr),g(vn,Vr,null),e(Vo,jp),e(Vo,Jr),e(Jr,Op),e(kn,Lp),e(kn,Xr),e(Xr,Np),e(F,Ip),e(F,Yr),e(Yr,Ap),e(F,Dp),e(F,Zr),e(Zr,es),e(es,os),e(os,ts),e(ts,Gp),e(F,Up),e(F,ns),e(ns,as),e(as,rs),e(rs,ss),e(ss,Wp),e(F,Rp),e(F,ds),e(ds,ls),e(ls,is),e(is,cs),e(cs,Kp),e(F,Hp),e(F,ps),e(ps,hs),e(hs,us),e(us,ms),e(ms,Qp),e(I,Vp),e(I,Ze),g(yn,Ze,null),e(Ze,Jp),e(Ze,fs),e(fs,Xp),e(Ze,Yp),g(Tn,Ze,null),e(I,Zp),e(I,eo),g(wn,eo,null),e(eo,eh),e(eo,_s),e(_s,oh),e(eo,th),g(Sn,eo,null),Ds=!0},p(r,[h]){const Bn={};h&2&&(Bn.$$scope={dirty:h,ctx:r}),Oo.$set(Bn);const gs={};h&2&&(gs.$$scope={dirty:h,ctx:r}),No.$set(gs);const bs={};h&2&&(bs.$$scope={dirty:h,ctx:r}),Do.$set(bs);const ks={};h&2&&(ks.$$scope={dirty:h,ctx:r}),Go.$set(ks);const ve={};h&2&&(ve.$$scope={dirty:h,ctx:r}),Wo.$set(ve);const vs={};h&2&&(vs.$$scope={dirty:h,ctx:r}),Ro.$set(vs);const ys={};h&2&&(ys.$$scope={dirty:h,ctx:r}),Qo.$set(ys)},i(r){Ds||(b(S.$$.fragment,r),b(se.$$.fragment,r),b(ze.$$.fragment,r),b(ot.$$.fragment,r),b(nt.$$.fragment,r),b(at.$$.fragment,r),b(rt.$$.fragment,r),b(dt.$$.fragment,r),b(lt.$$.fragment,r),b(it.$$.fragment,r),b(ct.$$.fragment,r),b(pt.$$.fragment,r),b(ht.$$.fragment,r),b(mt.$$.fragment,r),b(ft.$$.fragment,r),b(_t.$$.fragment,r),b(vt.$$.fragment,r),b(Oo.$$.fragment,r),b(yt.$$.fragment,r),b(Tt.$$.fragment,r),b(wt.$$.fragment,r),b(xt.$$.fragment,r),b(No.$$.fragment,r),b($t.$$.fragment,r),b(Ft.$$.fragment,r),b(Et.$$.fragment,r),b(Mt.$$.fragment,r),b(Ct.$$.fragment,r),b(Pt.$$.fragment,r),b(Do.$$.fragment,r),b(Nt.$$.fragment,r),b(Go.$$.fragment,r),b(It.$$.fragment,r),b(At.$$.fragment,r),b(Dt.$$.fragment,r),b(Wo.$$.fragment,r),b(Rt.$$.fragment,r),b(Ro.$$.fragment,r),b(Ht.$$.fragment,r),b(Qt.$$.fragment,r),b(tn.$$.fragment,r),b(nn.$$.fragment,r),b(an.$$.fragment,r),b(rn.$$.fragment,r),b(sn.$$.fragment,r),b(dn.$$.fragment,r),b(ln.$$.fragment,r),b(cn.$$.fragment,r),b(bn.$$.fragment,r),b(Qo.$$.fragment,r),b(vn.$$.fragment,r),b(yn.$$.fragment,r),b(Tn.$$.fragment,r),b(wn.$$.fragment,r),b(Sn.$$.fragment,r),Ds=!0)},o(r){k(S.$$.fragment,r),k(se.$$.fragment,r),k(ze.$$.fragment,r),k(ot.$$.fragment,r),k(nt.$$.fragment,r),k(at.$$.fragment,r),k(rt.$$.fragment,r),k(dt.$$.fragment,r),k(lt.$$.fragment,r),k(it.$$.fragment,r),k(ct.$$.fragment,r),k(pt.$$.fragment,r),k(ht.$$.fragment,r),k(mt.$$.fragment,r),k(ft.$$.fragment,r),k(_t.$$.fragment,r),k(vt.$$.fragment,r),k(Oo.$$.fragment,r),k(yt.$$.fragment,r),k(Tt.$$.fragment,r),k(wt.$$.fragment,r),k(xt.$$.fragment,r),k(No.$$.fragment,r),k($t.$$.fragment,r),k(Ft.$$.fragment,r),k(Et.$$.fragment,r),k(Mt.$$.fragment,r),k(Ct.$$.fragment,r),k(Pt.$$.fragment,r),k(Do.$$.fragment,r),k(Nt.$$.fragment,r),k(Go.$$.fragment,r),k(It.$$.fragment,r),k(At.$$.fragment,r),k(Dt.$$.fragment,r),k(Wo.$$.fragment,r),k(Rt.$$.fragment,r),k(Ro.$$.fragment,r),k(Ht.$$.fragment,r),k(Qt.$$.fragment,r),k(tn.$$.fragment,r),k(nn.$$.fragment,r),k(an.$$.fragment,r),k(rn.$$.fragment,r),k(sn.$$.fragment,r),k(dn.$$.fragment,r),k(ln.$$.fragment,r),k(cn.$$.fragment,r),k(bn.$$.fragment,r),k(Qo.$$.fragment,r),k(vn.$$.fragment,r),k(yn.$$.fragment,r),k(Tn.$$.fragment,r),k(wn.$$.fragment,r),k(Sn.$$.fragment,r),Ds=!1},d(r){o(u),r&&o(x),r&&o(y),v(S),r&&o(fe),r&&o(z),r&&o(Fe),r&&o(J),v(se),r&&o(Ee),r&&o(ee),r&&o(Me),r&&o(R),r&&o(m),r&&o($),r&&o(Ke),r&&o(P),r&&o(oe),r&&o(pe),v(ze),r&&o(Ts),r&&o(he),v(ot),v(nt),r&&o(ws),r&&o(mo),v(at),r&&o(Ss),r&&o(G),v(rt),v(dt),v(lt),v(it),v(ct),r&&o(Bs),r&&o(_o),v(pt),r&&o(zs),r&&o(Ue),v(ht),v(mt),r&&o(xs),r&&o(go),v(ft),r&&o(qs),r&&o(xe),v(_t),v(vt),v(Oo),v(yt),r&&o($s),r&&o(ko),v(Tt),r&&o(Fs),r&&o(qe),v(wt),v(xt),v(No),r&&o(Es),r&&o(yo),v($t),r&&o(Ms),r&&o(To),v(Ft),v(Et),v(Mt),r&&o(Cs),r&&o(wo),v(Ct),r&&o(Ps),r&&o(ue),v(Pt),v(Do),v(Nt),v(Go),v(It),r&&o(js),r&&o(Bo),v(At),r&&o(Os),r&&o(me),v(Dt),v(Wo),v(Rt),v(Ro),r&&o(Ls),r&&o(xo),v(Ht),r&&o(Ns),r&&o(N),v(Qt),v(tn),v(nn),v(an),v(rn),v(sn),v(dn),r&&o(Is),r&&o(qo),v(ln),r&&o(As),r&&o(I),v(cn),v(bn),v(Qo),v(vn),v(yn),v(Tn),v(wn),v(Sn)}}}const xf={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function qf(H,u,x){let{fw:y}=u;return H.$$set=T=>{"fw"in T&&x(0,y=T.fw)},[y]}class jf extends ff{constructor(u){super();_f(this,u,qf,zf,gf,{fw:0})}}export{jf as default,xf as metadata};
