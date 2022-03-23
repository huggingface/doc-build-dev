import{S as Mm,i as Sm,s as Cm,e as n,k as i,w as m,t as r,M as Om,c as s,d as t,m as l,a,x as _,h as d,b as c,F as e,g as h,y as g,q as v,o as T,B as k,v as Pm}from"../../chunks/vendor-6b77c823.js";import{T as go}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-abef54e3.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _e}from"../../chunks/IconCopyLink-7a11ce68.js";function Am(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Nm(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function jm(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Im(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Bm(B){let u,L,b,E,q,y,w,D,Ne,ge,z,Z,U,ne,je,R,Ie,Me,G,V,se,Le,S,P,ve,ae,Se,Te,K,Be,Ce,C,Ge,Y,x,M,Q,Qe,He,N,We,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),D=n("li"),Ne=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=i(),z=n("p"),Z=r("This second option is useful when using "),U=n("code"),ne=r("tf.keras.Model.fit"),je=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Ie=r("model(inputs)"),Me=r("."),G=i(),V=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),P=n("li"),ve=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),Te=r(" only and nothing else: "),K=n("code"),Be=r("model(input_ids)"),Ce=i(),C=n("li"),Ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),Qe=r("model([input_ids, attention_mask, token_type_ids])"),He=i(),N=n("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=s(f,"P",{});var $=a(u);L=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),b=l(f),E=s(f,"UL",{});var de=a(E);q=s(de,"LI",{});var st=a(q);y=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(de),D=s(de,"LI",{});var at=a(D);Ne=d(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),de.forEach(t),ge=l(f),z=s(f,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),U=s(I,"CODE",{});var rt=a(U);ne=d(rt,"tf.keras.Model.fit"),rt.forEach(t),je=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var dt=a(R);Ie=d(dt,"model(inputs)"),dt.forEach(t),Me=d(I,"."),I.forEach(t),G=l(f),V=s(f,"P",{});var Oe=a(V);se=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(f),S=s(f,"UL",{});var X=a(S);P=s(X,"LI",{});var ie=a(P);ve=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Pe=a(ae);Se=d(Pe,"input_ids"),Pe.forEach(t),Te=d(ie," only and nothing else: "),K=s(ie,"CODE",{});var it=a(K);Be=d(it,"model(input_ids)"),it.forEach(t),ie.forEach(t),Ce=l(X),C=s(X,"LI",{});var le=a(C);Ge=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(le,"CODE",{});var lt=a(Y);x=d(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=d(le," or "),Q=s(le,"CODE",{});var ce=a(Q);Qe=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),He=l(X),N=s(X,"LI",{});var Ue=a(N);We=d(Ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ue,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ue.forEach(t),X.forEach(t)},m(f,$){h(f,u,$),e(u,L),h(f,b,$),h(f,E,$),e(E,q),e(q,y),e(E,w),e(E,D),e(D,Ne),h(f,ge,$),h(f,z,$),e(z,Z),e(z,U),e(U,ne),e(z,je),e(z,R),e(R,Ie),e(z,Me),h(f,G,$),h(f,V,$),e(V,se),h(f,Le,$),h(f,S,$),e(S,P),e(P,ve),e(P,ae),e(ae,Se),e(P,Te),e(P,K),e(K,Be),e(S,Ce),e(S,C),e(C,Ge),e(C,Y),e(Y,x),e(C,M),e(C,Q),e(Q,Qe),e(S,He),e(S,N),e(N,We),e(N,re),e(re,De)},d(f){f&&t(u),f&&t(b),f&&t(E),f&&t(ge),f&&t(z),f&&t(G),f&&t(V),f&&t(Le),f&&t(S)}}}function Gm(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Qm(B){let u,L,b,E,q,y,w,D,Ne,ge,z,Z,U,ne,je,R,Ie,Me,G,V,se,Le,S,P,ve,ae,Se,Te,K,Be,Ce,C,Ge,Y,x,M,Q,Qe,He,N,We,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),D=n("li"),Ne=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=i(),z=n("p"),Z=r("This second option is useful when using "),U=n("code"),ne=r("tf.keras.Model.fit"),je=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Ie=r("model(inputs)"),Me=r("."),G=i(),V=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),P=n("li"),ve=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),Te=r(" only and nothing else: "),K=n("code"),Be=r("model(input_ids)"),Ce=i(),C=n("li"),Ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),Qe=r("model([input_ids, attention_mask, token_type_ids])"),He=i(),N=n("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=s(f,"P",{});var $=a(u);L=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),b=l(f),E=s(f,"UL",{});var de=a(E);q=s(de,"LI",{});var st=a(q);y=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(de),D=s(de,"LI",{});var at=a(D);Ne=d(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),de.forEach(t),ge=l(f),z=s(f,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),U=s(I,"CODE",{});var rt=a(U);ne=d(rt,"tf.keras.Model.fit"),rt.forEach(t),je=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var dt=a(R);Ie=d(dt,"model(inputs)"),dt.forEach(t),Me=d(I,"."),I.forEach(t),G=l(f),V=s(f,"P",{});var Oe=a(V);se=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(f),S=s(f,"UL",{});var X=a(S);P=s(X,"LI",{});var ie=a(P);ve=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Pe=a(ae);Se=d(Pe,"input_ids"),Pe.forEach(t),Te=d(ie," only and nothing else: "),K=s(ie,"CODE",{});var it=a(K);Be=d(it,"model(input_ids)"),it.forEach(t),ie.forEach(t),Ce=l(X),C=s(X,"LI",{});var le=a(C);Ge=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(le,"CODE",{});var lt=a(Y);x=d(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=d(le," or "),Q=s(le,"CODE",{});var ce=a(Q);Qe=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),He=l(X),N=s(X,"LI",{});var Ue=a(N);We=d(Ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ue,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ue.forEach(t),X.forEach(t)},m(f,$){h(f,u,$),e(u,L),h(f,b,$),h(f,E,$),e(E,q),e(q,y),e(E,w),e(E,D),e(D,Ne),h(f,ge,$),h(f,z,$),e(z,Z),e(z,U),e(U,ne),e(z,je),e(z,R),e(R,Ie),e(z,Me),h(f,G,$),h(f,V,$),e(V,se),h(f,Le,$),h(f,S,$),e(S,P),e(P,ve),e(P,ae),e(ae,Se),e(P,Te),e(P,K),e(K,Be),e(S,Ce),e(S,C),e(C,Ge),e(C,Y),e(Y,x),e(C,M),e(C,Q),e(Q,Qe),e(S,He),e(S,N),e(N,We),e(N,re),e(re,De)},d(f){f&&t(u),f&&t(b),f&&t(E),f&&t(ge),f&&t(z),f&&t(G),f&&t(V),f&&t(Le),f&&t(S)}}}function Hm(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Wm(B){let u,L,b,E,q,y,w,D,Ne,ge,z,Z,U,ne,je,R,Ie,Me,G,V,se,Le,S,P,ve,ae,Se,Te,K,Be,Ce,C,Ge,Y,x,M,Q,Qe,He,N,We,re,De,f,$,de,st,at,I,rt,dt,Oe,X,ie,Pe,it,le,lt,ce,Ue,Re,Od,Pd,Ms,Ad,Nd,jd,ze,Id,Ss,Bd,Gd,Cs,Qd,Hd,Vn,Wd,Ud,Os,Rd,Vd,Kd,J,Xd,Ps,Jd,Zd,As,Yd,ei,Kn,ti,oi,Ns,ni,si,js,ai,ri,Is,di,ii,li,ct,ci,Bs,hi,pi,Gs,ui,fi,mi,vo,_i,To,gi,vi,Ti,ko,ki,bo,bi,wi,mr,Nt,yi,wo,Ei,qi,_r,ht,jt,Qs,yo,Li,Hs,Di,gr,O,Eo,zi,pt,$i,Xn,Fi,xi,qo,Mi,Si,Ci,ut,Oi,Jn,Pi,Ai,Zn,Ni,ji,Ii,Ws,Bi,Gi,Lo,Qi,Us,Rs,Vs,Ks,Hi,Wi,Xs,Js,Zs,It,Bt,Ys,Do,Ui,ea,Ri,Vi,ta,oa,zo,Gt,Qt,na,$o,Ki,sa,Xi,Ji,aa,Zi,Yi,ra,da,ia,Ht,Wt,la,Fo,el,ca,tl,vr,ft,Ut,ha,xo,ol,pa,nl,Tr,A,Mo,sl,ua,al,rl,Rt,Yn,dl,il,es,ll,cl,hl,So,pl,ts,ul,fl,ml,Ke,Co,_l,fa,gl,vl,Oo,os,Tl,ma,kl,bl,ns,wl,_a,yl,El,Vt,Po,ql,Ao,Ll,ga,Dl,zl,$l,Kt,No,Fl,va,xl,Ml,ss,jo,kr,mt,Xt,Ta,Io,Sl,ka,Cl,br,$e,Bo,Ol,Go,Pl,ba,Al,Nl,jl,Jt,as,Il,Bl,rs,Gl,Ql,Hl,Qo,Wl,ds,Ul,Rl,wr,_t,Zt,wa,Ho,Vl,ya,Kl,yr,gt,Wo,Xl,Ea,Jl,Er,vt,Uo,Zl,qa,Yl,qr,Tt,Ro,ec,La,tc,Lr,kt,Vo,oc,Da,nc,Dr,bt,Ko,sc,za,ac,zr,wt,Xo,rc,$a,dc,$r,yt,Jo,ic,Fa,lc,Fr,Et,Zo,cc,xa,hc,xr,qt,Yt,Ma,Yo,pc,Sa,uc,Mr,Fe,en,fc,tn,mc,is,_c,gc,vc,on,Tc,nn,kc,bc,wc,ke,sn,yc,Lt,Ec,ls,qc,Lc,Ca,Dc,zc,$c,eo,Fc,Oa,xc,Mc,an,Sr,Dt,to,Pa,rn,Sc,Aa,Cc,Cr,xe,dn,Oc,ln,Pc,cs,Ac,Nc,jc,cn,Ic,hn,Bc,Gc,Qc,H,pn,Hc,zt,Wc,hs,Uc,Rc,Na,Vc,Kc,Xc,oo,Jc,ja,Zc,Yc,un,eh,Ia,th,oh,fn,Or,$t,no,Ba,mn,nh,Ga,sh,Pr,he,_n,ah,Qa,rh,dh,gn,ih,ps,lh,ch,hh,vn,ph,Tn,uh,fh,mh,j,kn,_h,Ft,gh,us,vh,Th,Ha,kh,bh,wh,so,yh,Wa,Eh,qh,bn,Lh,wn,Dh,Ua,zh,$h,yn,Ar,xt,ao,Ra,En,Fh,Va,xh,Nr,pe,qn,Mh,Mt,Sh,Ka,Ch,Oh,Xa,Ph,Ah,Nh,Ln,jh,fs,Ih,Bh,Gh,Dn,Qh,zn,Hh,Wh,Uh,ee,$n,Rh,St,Vh,ms,Kh,Xh,Ja,Jh,Zh,Yh,ro,ep,Za,tp,op,Fn,np,xn,jr,Ct,io,Ya,Mn,sp,er,ap,Ir,ue,Sn,rp,Cn,dp,_s,ip,lp,cp,On,hp,Pn,pp,up,fp,lo,mp,be,An,_p,Ot,gp,gs,vp,Tp,tr,kp,bp,wp,co,yp,or,Ep,qp,Nn,Br,Pt,ho,nr,jn,Lp,sr,Dp,Gr,fe,In,zp,Bn,$p,vs,Fp,xp,Mp,Gn,Sp,Qn,Cp,Op,Pp,po,Ap,we,Hn,Np,At,jp,Ts,Ip,Bp,ar,Gp,Qp,Hp,uo,Wp,rr,Up,Rp,Wn,Qr;return y=new _e({}),ne=new _e({}),yo=new _e({}),Eo=new F({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LEDConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.LEDConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.LEDConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.LEDConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.LEDConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.LEDConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.LEDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.LEDConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.LEDConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.LEDConfig.max_encoder_position_embeddings",description:`<strong>max_encoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the encoder might ever be used with.`,name:"max_encoder_position_embeddings"},{anchor:"transformers.LEDConfig.max_decoder_position_embeddings",description:`<strong>max_decoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the decoder might ever be used with.`,name:"max_decoder_position_embeddings"},{anchor:"transformers.LEDConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}]}}),Lo=new Ve({props:{code:"",highlighted:""}}),Do=new _e({}),$o=new _e({}),Fo=new _e({}),xo=new _e({}),Mo=new F({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/tokenization_led.py#L43"}}),Co=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Po=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new F({props:{name:"save_vocabulary",anchor:"transformers.BartTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/bart/tokenization_bart.py#L309"}}),Io=new _e({}),Bo=new F({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/tokenization_led_fast.py#L44"}}),Ho=new _e({}),Wo=new F({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L1126",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Uo=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L1169",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Ro=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L1237",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Vo=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L1304",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Ko=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L1371",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Xo=new F({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_tf_led.py#L1330",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Jo=new F({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_tf_led.py#L1373",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Zo=new F({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_tf_led.py#L1441",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Yo=new _e({}),en=new F({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2154",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new F({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2181",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new go({props:{$$slots:{default:[Am]},$$scope:{ctx:B}}}),an=new Ve({props:{code:`from transformers import LEDTokenizer, LEDModel
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),rn=new _e({}),dn=new F({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2277",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pn=new F({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2321",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new go({props:{$$slots:{default:[Nm]},$$scope:{ctx:B}}}),un=new Ve({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
TXT = "My friends are <mask> but they eat too many carbs."

model = LEDForConditionalGeneration.from_pretrained("allenai/led-base-16384")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]

prediction = model.generate(input_ids)[0]
print(tokenizer.decode(prediction, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),fn=new Ve({props:{code:`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration

model = LEDForConditionalGeneration.from_pretrained("allenai/led-large-16384-arxiv")
tokenizer = LEDTokenizer.from_pretrained("allenai/led-large-16384-arxiv")

ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
    results in a wide range of natural language tasks including generative language modeling
    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
    This success is partly due to the self-attention component which enables the network to capture contextual
    information from the entire sequence. While powerful, the memory and computational requirements of
    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
    process long sequences. To address this limitation, we present Longformer, a modified Transformer
    architecture with a self-attention operation that scales linearly with the sequence length, making it
    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
    long document classification, question answering (QA), and coreference resolution, where existing approaches
    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
    cross-partition information, and to mitigate this problem, existing methods often rely on complex
    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
    contextual representations of the entire context using multiple layers of attention, reducing the need for
    task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors="pt")

# Global attention on the first token (cf. Beltagy et al. 2020)
global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1

# Generate Summary
summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=3, max_length=32)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&#x27;&#x27;&#x27;Transformers (Vaswani et al., 2017) have achieved state-of-the-art
<span class="hljs-meta">... </span>    results in a wide range of natural language tasks including generative language modeling
<span class="hljs-meta">... </span>    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
<span class="hljs-meta">... </span>    This success is partly due to the self-attention component which enables the network to capture contextual
<span class="hljs-meta">... </span>    information from the entire sequence. While powerful, the memory and computational requirements of
<span class="hljs-meta">... </span>    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
<span class="hljs-meta">... </span>    process long sequences. To address this limitation, we present Longformer, a modified Transformer
<span class="hljs-meta">... </span>    architecture with a self-attention operation that scales linearly with the sequence length, making it
<span class="hljs-meta">... </span>    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
<span class="hljs-meta">... </span>    long document classification, question answering (QA), and coreference resolution, where existing approaches
<span class="hljs-meta">... </span>    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
<span class="hljs-meta">... </span>    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
<span class="hljs-meta">... </span>    cross-partition information, and to mitigate this problem, existing methods often rely on complex
<span class="hljs-meta">... </span>    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
<span class="hljs-meta">... </span>    contextual representations of the entire context using multiple layers of attention, reducing the need for
<span class="hljs-meta">... </span>    task-specific architectures.&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Global attention on the first token (cf. Beltagy et al. 2020)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros_like(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[:, <span class="hljs-number">0</span>] = <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=<span class="hljs-number">3</span>, max_length=<span class="hljs-number">32</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),mn=new _e({}),_n=new F({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2468",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),kn=new F({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2481",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new go({props:{$$slots:{default:[jm]},$$scope:{ctx:B}}}),bn=new Ve({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),wn=new Ve({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),yn=new Ve({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]


num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]


<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),En=new _e({}),qn=new F({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2596",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$n=new F({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_led.py#L2608",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new go({props:{$$slots:{default:[Im]},$$scope:{ctx:B}}}),Fn=new Ve({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForQuestionAnswering.from_pretrained("allenai/led-base-16384")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),xn=new Ve({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Mn=new _e({}),Sn=new F({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_tf_led.py#L2256",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new go({props:{$$slots:{default:[Bm]},$$scope:{ctx:B}}}),An=new F({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_tf_led.py#L2268",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new go({props:{$$slots:{default:[Gm]},$$scope:{ctx:B}}}),Nn=new Ve({props:{code:`from transformers import LEDTokenizer, TFLEDModel
import tensorflow as tf

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = TFLEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),jn=new _e({}),In=new F({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_tf_led.py#L2363",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),po=new go({props:{$$slots:{default:[Qm]},$$scope:{ctx:B}}}),Hn=new F({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/led/modeling_tf_led.py#L2396",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new go({props:{$$slots:{default:[Hm]},$$scope:{ctx:B}}}),Wn=new Ve({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
import tensorflow as tf

mname = "allenai/led-base-16384"
tokenizer = LEDTokenizer.from_pretrained(mname)
TXT = "My friends are <mask> but they eat too many carbs."
model = TFLEDForConditionalGeneration.from_pretrained(mname)
batch = tokenizer([TXT], return_tensors="tf")
logits = model(inputs=batch.input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){u=n("meta"),L=i(),b=n("h1"),E=n("a"),q=n("span"),m(y.$$.fragment),w=i(),D=n("span"),Ne=r("LED"),ge=i(),z=n("h2"),Z=n("a"),U=n("span"),m(ne.$$.fragment),je=i(),R=n("span"),Ie=r("Overview"),Me=i(),G=n("p"),V=r("The LED model was proposed in "),se=n("a"),Le=r("Longformer: The Long-Document Transformer"),S=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),P=i(),ve=n("p"),ae=r("The abstract from the paper is the following:"),Se=i(),Te=n("p"),K=n("em"),Be=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Ce=i(),C=n("p"),Ge=r("Tips:"),Y=i(),x=n("ul"),M=n("li"),Q=n("a"),Qe=r("LEDForConditionalGeneration"),He=r(` is an extension of
`),N=n("a"),We=r("BartForConditionalGeneration"),re=r(" exchanging the traditional "),De=n("em"),f=r("self-attention"),$=r(` layer with
`),de=n("em"),st=r("Longformer"),at=r("\u2019s "),I=n("em"),rt=r("chunked self-attention"),dt=r(" layer. "),Oe=n("a"),X=r("LEDTokenizer"),ie=r(` is an alias of
`),Pe=n("a"),it=r("BartTokenizer"),le=r("."),lt=i(),ce=n("li"),Ue=r("LED works very well on long-range "),Re=n("em"),Od=r("sequence-to-sequence"),Pd=r(" tasks where the "),Ms=n("code"),Ad=r("input_ids"),Nd=r(` largely exceed a length of
1024 tokens.`),jd=i(),ze=n("li"),Id=r("LED pads the "),Ss=n("code"),Bd=r("input_ids"),Gd=r(" to be a multiple of "),Cs=n("code"),Qd=r("config.attention_window"),Hd=r(` if required. Therefore a small speed-up is
gained, when `),Vn=n("a"),Wd=r("LEDTokenizer"),Ud=r(" is used with the "),Os=n("code"),Rd=r("pad_to_multiple_of"),Vd=r(" argument."),Kd=i(),J=n("li"),Xd=r("LED makes use of "),Ps=n("em"),Jd=r("global attention"),Zd=r(" by means of the "),As=n("code"),Yd=r("global_attention_mask"),ei=r(` (see
`),Kn=n("a"),ti=r("LongformerModel"),oi=r("). For summarization, it is advised to put "),Ns=n("em"),ni=r("global attention"),si=r(` only on the first
`),js=n("code"),ai=r("<s>"),ri=r(" token. For question answering, it is advised to put "),Is=n("em"),di=r("global attention"),ii=r(" on all tokens of the question."),li=i(),ct=n("li"),ci=r("To fine-tune LED on all 16384, it is necessary to enable "),Bs=n("em"),hi=r("gradient checkpointing"),pi=r(` by executing
`),Gs=n("code"),ui=r("model.gradient_checkpointing_enable()"),fi=r("."),mi=i(),vo=n("li"),_i=r("A notebook showing how to evaluate LED, can be accessed "),To=n("a"),gi=r("here"),vi=r("."),Ti=i(),ko=n("li"),ki=r("A notebook showing how to fine-tune LED, can be accessed "),bo=n("a"),bi=r("here"),wi=r("."),mr=i(),Nt=n("p"),yi=r("This model was contributed by "),wo=n("a"),Ei=r("patrickvonplaten"),qi=r("."),_r=i(),ht=n("h2"),jt=n("a"),Qs=n("span"),m(yo.$$.fragment),Li=i(),Hs=n("span"),Di=r("LEDConfig"),gr=i(),O=n("div"),m(Eo.$$.fragment),zi=i(),pt=n("p"),$i=r("This is the configuration class to store the configuration of a "),Xn=n("a"),Fi=r("LEDModel"),xi=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=n("a"),Mi=r("allenai/led-base-16384"),Si=r(" architecture."),Ci=i(),ut=n("p"),Oi=r("Configuration objects inherit from "),Jn=n("a"),Pi=r("PretrainedConfig"),Ai=r(` and can be used to control the model outputs. Read the
documentation from `),Zn=n("a"),Ni=r("PretrainedConfig"),ji=r(" for more information."),Ii=i(),Ws=n("p"),Bi=r("Example:"),Gi=i(),m(Lo.$$.fragment),Qi=i(),Us=n("blockquote"),Rs=n("blockquote"),Vs=n("blockquote"),Ks=n("p"),Hi=r("from transformers import LEDModel, LEDConfig"),Wi=i(),Xs=n("blockquote"),Js=n("blockquote"),Zs=n("blockquote"),It=n("h1"),Bt=n("a"),Ys=n("span"),m(Do.$$.fragment),Ui=i(),ea=n("span"),Ri=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Vi=i(),ta=n("blockquote"),oa=n("blockquote"),zo=n("blockquote"),Gt=n("h1"),Qt=n("a"),na=n("span"),m($o.$$.fragment),Ki=i(),sa=n("span"),Xi=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Ji=i(),aa=n("p"),Zi=r("LEDModel(configuration)"),Yi=i(),ra=n("blockquote"),da=n("blockquote"),ia=n("blockquote"),Ht=n("h1"),Wt=n("a"),la=n("span"),m(Fo.$$.fragment),el=i(),ca=n("span"),tl=r("Accessing the model configuration >>> configuration = model.config"),vr=i(),ft=n("h2"),Ut=n("a"),ha=n("span"),m(xo.$$.fragment),ol=i(),pa=n("span"),nl=r("LEDTokenizer"),Tr=i(),A=n("div"),m(Mo.$$.fragment),sl=i(),ua=n("p"),al=r("Construct a LED tokenizer."),rl=i(),Rt=n("p"),Yn=n("a"),dl=r("LEDTokenizer"),il=r(" is identical to "),es=n("a"),ll=r("BartTokenizer"),cl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),hl=i(),So=n("p"),pl=r("Refer to superclass "),ts=n("a"),ul=r("BartTokenizer"),fl=r(" for usage examples and documentation concerning parameters."),ml=i(),Ke=n("div"),m(Co.$$.fragment),_l=i(),fa=n("p"),gl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),vl=i(),Oo=n("ul"),os=n("li"),Tl=r("single sequence: "),ma=n("code"),kl=r("<s> X </s>"),bl=i(),ns=n("li"),wl=r("pair of sequences: "),_a=n("code"),yl=r("<s> A </s></s> B </s>"),El=i(),Vt=n("div"),m(Po.$$.fragment),ql=i(),Ao=n("p"),Ll=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ga=n("code"),Dl=r("prepare_for_model"),zl=r(" method."),$l=i(),Kt=n("div"),m(No.$$.fragment),Fl=i(),va=n("p"),xl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Ml=i(),ss=n("div"),m(jo.$$.fragment),kr=i(),mt=n("h2"),Xt=n("a"),Ta=n("span"),m(Io.$$.fragment),Sl=i(),ka=n("span"),Cl=r("LEDTokenizerFast"),br=i(),$e=n("div"),m(Bo.$$.fragment),Ol=i(),Go=n("p"),Pl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ba=n("em"),Al=r("tokenizers"),Nl=r(" library)."),jl=i(),Jt=n("p"),as=n("a"),Il=r("LEDTokenizerFast"),Bl=r(" is identical to "),rs=n("a"),Gl=r("BartTokenizerFast"),Ql=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Hl=i(),Qo=n("p"),Wl=r("Refer to superclass "),ds=n("a"),Ul=r("BartTokenizerFast"),Rl=r(" for usage examples and documentation concerning parameters."),wr=i(),_t=n("h2"),Zt=n("a"),wa=n("span"),m(Ho.$$.fragment),Vl=i(),ya=n("span"),Kl=r("LED specific outputs"),yr=i(),gt=n("div"),m(Wo.$$.fragment),Xl=i(),Ea=n("p"),Jl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Er=i(),vt=n("div"),m(Uo.$$.fragment),Zl=i(),qa=n("p"),Yl=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),qr=i(),Tt=n("div"),m(Ro.$$.fragment),ec=i(),La=n("p"),tc=r("Base class for sequence-to-sequence language models outputs."),Lr=i(),kt=n("div"),m(Vo.$$.fragment),oc=i(),Da=n("p"),nc=r("Base class for outputs of sequence-to-sequence sentence classification models."),Dr=i(),bt=n("div"),m(Ko.$$.fragment),sc=i(),za=n("p"),ac=r("Base class for outputs of sequence-to-sequence question answering models."),zr=i(),wt=n("div"),m(Xo.$$.fragment),rc=i(),$a=n("p"),dc=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),$r=i(),yt=n("div"),m(Jo.$$.fragment),ic=i(),Fa=n("p"),lc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Fr=i(),Et=n("div"),m(Zo.$$.fragment),cc=i(),xa=n("p"),hc=r("Base class for sequence-to-sequence language models outputs."),xr=i(),qt=n("h2"),Yt=n("a"),Ma=n("span"),m(Yo.$$.fragment),pc=i(),Sa=n("span"),uc=r("LEDModel"),Mr=i(),Fe=n("div"),m(en.$$.fragment),fc=i(),tn=n("p"),mc=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),is=n("a"),_c=r("PreTrainedModel"),gc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=i(),on=n("p"),Tc=r("This model is also a PyTorch "),nn=n("a"),kc=r("torch.nn.Module"),bc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wc=i(),ke=n("div"),m(sn.$$.fragment),yc=i(),Lt=n("p"),Ec=r("The "),ls=n("a"),qc=r("LEDModel"),Lc=r(" forward method, overrides the "),Ca=n("code"),Dc=r("__call__"),zc=r(" special method."),$c=i(),m(eo.$$.fragment),Fc=i(),Oa=n("p"),xc=r("Example:"),Mc=i(),m(an.$$.fragment),Sr=i(),Dt=n("h2"),to=n("a"),Pa=n("span"),m(rn.$$.fragment),Sc=i(),Aa=n("span"),Cc=r("LEDForConditionalGeneration"),Cr=i(),xe=n("div"),m(dn.$$.fragment),Oc=i(),ln=n("p"),Pc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=n("a"),Ac=r("PreTrainedModel"),Nc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jc=i(),cn=n("p"),Ic=r("This model is also a PyTorch "),hn=n("a"),Bc=r("torch.nn.Module"),Gc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc=i(),H=n("div"),m(pn.$$.fragment),Hc=i(),zt=n("p"),Wc=r("The "),hs=n("a"),Uc=r("LEDForConditionalGeneration"),Rc=r(" forward method, overrides the "),Na=n("code"),Vc=r("__call__"),Kc=r(" special method."),Xc=i(),m(oo.$$.fragment),Jc=i(),ja=n("p"),Zc=r("Conditional generation example:"),Yc=i(),m(un.$$.fragment),eh=i(),Ia=n("p"),th=r("Summarization example:"),oh=i(),m(fn.$$.fragment),Or=i(),$t=n("h2"),no=n("a"),Ba=n("span"),m(mn.$$.fragment),nh=i(),Ga=n("span"),sh=r("LEDForSequenceClassification"),Pr=i(),he=n("div"),m(_n.$$.fragment),ah=i(),Qa=n("p"),rh=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),dh=i(),gn=n("p"),ih=r("This model inherits from "),ps=n("a"),lh=r("PreTrainedModel"),ch=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh=i(),vn=n("p"),ph=r("This model is also a PyTorch "),Tn=n("a"),uh=r("torch.nn.Module"),fh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mh=i(),j=n("div"),m(kn.$$.fragment),_h=i(),Ft=n("p"),gh=r("The "),us=n("a"),vh=r("LEDForSequenceClassification"),Th=r(" forward method, overrides the "),Ha=n("code"),kh=r("__call__"),bh=r(" special method."),wh=i(),m(so.$$.fragment),yh=i(),Wa=n("p"),Eh=r("Example of single-label classification:"),qh=i(),m(bn.$$.fragment),Lh=i(),m(wn.$$.fragment),Dh=i(),Ua=n("p"),zh=r("Example of multi-label classification:"),$h=i(),m(yn.$$.fragment),Ar=i(),xt=n("h2"),ao=n("a"),Ra=n("span"),m(En.$$.fragment),Fh=i(),Va=n("span"),xh=r("LEDForQuestionAnswering"),Nr=i(),pe=n("div"),m(qn.$$.fragment),Mh=i(),Mt=n("p"),Sh=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ka=n("code"),Ch=r("span start logits"),Oh=r(" and "),Xa=n("code"),Ph=r("span end logits"),Ah=r(")."),Nh=i(),Ln=n("p"),jh=r("This model inherits from "),fs=n("a"),Ih=r("PreTrainedModel"),Bh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh=i(),Dn=n("p"),Qh=r("This model is also a PyTorch "),zn=n("a"),Hh=r("torch.nn.Module"),Wh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uh=i(),ee=n("div"),m($n.$$.fragment),Rh=i(),St=n("p"),Vh=r("The "),ms=n("a"),Kh=r("LEDForQuestionAnswering"),Xh=r(" forward method, overrides the "),Ja=n("code"),Jh=r("__call__"),Zh=r(" special method."),Yh=i(),m(ro.$$.fragment),ep=i(),Za=n("p"),tp=r("Example:"),op=i(),m(Fn.$$.fragment),np=i(),m(xn.$$.fragment),jr=i(),Ct=n("h2"),io=n("a"),Ya=n("span"),m(Mn.$$.fragment),sp=i(),er=n("span"),ap=r("TFLEDModel"),Ir=i(),ue=n("div"),m(Sn.$$.fragment),rp=i(),Cn=n("p"),dp=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_s=n("a"),ip=r("TFPreTrainedModel"),lp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp=i(),On=n("p"),hp=r("This model is also a "),Pn=n("a"),pp=r("tf.keras.Model"),up=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fp=i(),m(lo.$$.fragment),mp=i(),be=n("div"),m(An.$$.fragment),_p=i(),Ot=n("p"),gp=r("The "),gs=n("a"),vp=r("TFLEDModel"),Tp=r(" forward method, overrides the "),tr=n("code"),kp=r("__call__"),bp=r(" special method."),wp=i(),m(co.$$.fragment),yp=i(),or=n("p"),Ep=r("Example:"),qp=i(),m(Nn.$$.fragment),Br=i(),Pt=n("h2"),ho=n("a"),nr=n("span"),m(jn.$$.fragment),Lp=i(),sr=n("span"),Dp=r("TFLEDForConditionalGeneration"),Gr=i(),fe=n("div"),m(In.$$.fragment),zp=i(),Bn=n("p"),$p=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),vs=n("a"),Fp=r("TFPreTrainedModel"),xp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp=i(),Gn=n("p"),Sp=r("This model is also a "),Qn=n("a"),Cp=r("tf.keras.Model"),Op=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp=i(),m(po.$$.fragment),Ap=i(),we=n("div"),m(Hn.$$.fragment),Np=i(),At=n("p"),jp=r("The "),Ts=n("a"),Ip=r("TFLEDForConditionalGeneration"),Bp=r(" forward method, overrides the "),ar=n("code"),Gp=r("__call__"),Qp=r(" special method."),Hp=i(),m(uo.$$.fragment),Wp=i(),rr=n("p"),Up=r("Examples:"),Rp=i(),m(Wn.$$.fragment),this.h()},l(o){const p=Om('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),L=l(o),b=s(o,"H1",{class:!0});var Un=a(b);E=s(Un,"A",{id:!0,class:!0,href:!0});var dr=a(E);q=s(dr,"SPAN",{});var ir=a(q);_(y.$$.fragment,ir),ir.forEach(t),dr.forEach(t),w=l(Un),D=s(Un,"SPAN",{});var lr=a(D);Ne=d(lr,"LED"),lr.forEach(t),Un.forEach(t),ge=l(o),z=s(o,"H2",{class:!0});var Rn=a(z);Z=s(Rn,"A",{id:!0,class:!0,href:!0});var cr=a(Z);U=s(cr,"SPAN",{});var hr=a(U);_(ne.$$.fragment,hr),hr.forEach(t),cr.forEach(t),je=l(Rn),R=s(Rn,"SPAN",{});var pr=a(R);Ie=d(pr,"Overview"),pr.forEach(t),Rn.forEach(t),Me=l(o),G=s(o,"P",{});var Hr=a(G);V=d(Hr,"The LED model was proposed in "),se=s(Hr,"A",{href:!0,rel:!0});var Xp=a(se);Le=d(Xp,"Longformer: The Long-Document Transformer"),Xp.forEach(t),S=d(Hr,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Hr.forEach(t),P=l(o),ve=s(o,"P",{});var Jp=a(ve);ae=d(Jp,"The abstract from the paper is the following:"),Jp.forEach(t),Se=l(o),Te=s(o,"P",{});var Zp=a(Te);K=s(Zp,"EM",{});var Yp=a(K);Be=d(Yp,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Yp.forEach(t),Zp.forEach(t),Ce=l(o),C=s(o,"P",{});var eu=a(C);Ge=d(eu,"Tips:"),eu.forEach(t),Y=l(o),x=s(o,"UL",{});var ye=a(x);M=s(ye,"LI",{});var me=a(M);Q=s(me,"A",{href:!0});var tu=a(Q);Qe=d(tu,"LEDForConditionalGeneration"),tu.forEach(t),He=d(me,` is an extension of
`),N=s(me,"A",{href:!0});var ou=a(N);We=d(ou,"BartForConditionalGeneration"),ou.forEach(t),re=d(me," exchanging the traditional "),De=s(me,"EM",{});var nu=a(De);f=d(nu,"self-attention"),nu.forEach(t),$=d(me,` layer with
`),de=s(me,"EM",{});var su=a(de);st=d(su,"Longformer"),su.forEach(t),at=d(me,"\u2019s "),I=s(me,"EM",{});var au=a(I);rt=d(au,"chunked self-attention"),au.forEach(t),dt=d(me," layer. "),Oe=s(me,"A",{href:!0});var ru=a(Oe);X=d(ru,"LEDTokenizer"),ru.forEach(t),ie=d(me,` is an alias of
`),Pe=s(me,"A",{href:!0});var du=a(Pe);it=d(du,"BartTokenizer"),du.forEach(t),le=d(me,"."),me.forEach(t),lt=l(ye),ce=s(ye,"LI",{});var ks=a(ce);Ue=d(ks,"LED works very well on long-range "),Re=s(ks,"EM",{});var iu=a(Re);Od=d(iu,"sequence-to-sequence"),iu.forEach(t),Pd=d(ks," tasks where the "),Ms=s(ks,"CODE",{});var lu=a(Ms);Ad=d(lu,"input_ids"),lu.forEach(t),Nd=d(ks,` largely exceed a length of
1024 tokens.`),ks.forEach(t),jd=l(ye),ze=s(ye,"LI",{});var Xe=a(ze);Id=d(Xe,"LED pads the "),Ss=s(Xe,"CODE",{});var cu=a(Ss);Bd=d(cu,"input_ids"),cu.forEach(t),Gd=d(Xe," to be a multiple of "),Cs=s(Xe,"CODE",{});var hu=a(Cs);Qd=d(hu,"config.attention_window"),hu.forEach(t),Hd=d(Xe,` if required. Therefore a small speed-up is
gained, when `),Vn=s(Xe,"A",{href:!0});var pu=a(Vn);Wd=d(pu,"LEDTokenizer"),pu.forEach(t),Ud=d(Xe," is used with the "),Os=s(Xe,"CODE",{});var uu=a(Os);Rd=d(uu,"pad_to_multiple_of"),uu.forEach(t),Vd=d(Xe," argument."),Xe.forEach(t),Kd=l(ye),J=s(ye,"LI",{});var Ee=a(J);Xd=d(Ee,"LED makes use of "),Ps=s(Ee,"EM",{});var fu=a(Ps);Jd=d(fu,"global attention"),fu.forEach(t),Zd=d(Ee," by means of the "),As=s(Ee,"CODE",{});var mu=a(As);Yd=d(mu,"global_attention_mask"),mu.forEach(t),ei=d(Ee,` (see
`),Kn=s(Ee,"A",{href:!0});var _u=a(Kn);ti=d(_u,"LongformerModel"),_u.forEach(t),oi=d(Ee,"). For summarization, it is advised to put "),Ns=s(Ee,"EM",{});var gu=a(Ns);ni=d(gu,"global attention"),gu.forEach(t),si=d(Ee,` only on the first
`),js=s(Ee,"CODE",{});var vu=a(js);ai=d(vu,"<s>"),vu.forEach(t),ri=d(Ee," token. For question answering, it is advised to put "),Is=s(Ee,"EM",{});var Tu=a(Is);di=d(Tu,"global attention"),Tu.forEach(t),ii=d(Ee," on all tokens of the question."),Ee.forEach(t),li=l(ye),ct=s(ye,"LI",{});var bs=a(ct);ci=d(bs,"To fine-tune LED on all 16384, it is necessary to enable "),Bs=s(bs,"EM",{});var ku=a(Bs);hi=d(ku,"gradient checkpointing"),ku.forEach(t),pi=d(bs,` by executing
`),Gs=s(bs,"CODE",{});var bu=a(Gs);ui=d(bu,"model.gradient_checkpointing_enable()"),bu.forEach(t),fi=d(bs,"."),bs.forEach(t),mi=l(ye),vo=s(ye,"LI",{});var Wr=a(vo);_i=d(Wr,"A notebook showing how to evaluate LED, can be accessed "),To=s(Wr,"A",{href:!0,rel:!0});var wu=a(To);gi=d(wu,"here"),wu.forEach(t),vi=d(Wr,"."),Wr.forEach(t),Ti=l(ye),ko=s(ye,"LI",{});var Ur=a(ko);ki=d(Ur,"A notebook showing how to fine-tune LED, can be accessed "),bo=s(Ur,"A",{href:!0,rel:!0});var yu=a(bo);bi=d(yu,"here"),yu.forEach(t),wi=d(Ur,"."),Ur.forEach(t),ye.forEach(t),mr=l(o),Nt=s(o,"P",{});var Rr=a(Nt);yi=d(Rr,"This model was contributed by "),wo=s(Rr,"A",{href:!0,rel:!0});var Eu=a(wo);Ei=d(Eu,"patrickvonplaten"),Eu.forEach(t),qi=d(Rr,"."),Rr.forEach(t),_r=l(o),ht=s(o,"H2",{class:!0});var Vr=a(ht);jt=s(Vr,"A",{id:!0,class:!0,href:!0});var qu=a(jt);Qs=s(qu,"SPAN",{});var Lu=a(Qs);_(yo.$$.fragment,Lu),Lu.forEach(t),qu.forEach(t),Li=l(Vr),Hs=s(Vr,"SPAN",{});var Du=a(Hs);Di=d(Du,"LEDConfig"),Du.forEach(t),Vr.forEach(t),gr=l(o),O=s(o,"DIV",{class:!0});var W=a(O);_(Eo.$$.fragment,W),zi=l(W),pt=s(W,"P",{});var ws=a(pt);$i=d(ws,"This is the configuration class to store the configuration of a "),Xn=s(ws,"A",{href:!0});var zu=a(Xn);Fi=d(zu,"LEDModel"),zu.forEach(t),xi=d(ws,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=s(ws,"A",{href:!0,rel:!0});var $u=a(qo);Mi=d($u,"allenai/led-base-16384"),$u.forEach(t),Si=d(ws," architecture."),ws.forEach(t),Ci=l(W),ut=s(W,"P",{});var ys=a(ut);Oi=d(ys,"Configuration objects inherit from "),Jn=s(ys,"A",{href:!0});var Fu=a(Jn);Pi=d(Fu,"PretrainedConfig"),Fu.forEach(t),Ai=d(ys,` and can be used to control the model outputs. Read the
documentation from `),Zn=s(ys,"A",{href:!0});var xu=a(Zn);Ni=d(xu,"PretrainedConfig"),xu.forEach(t),ji=d(ys," for more information."),ys.forEach(t),Ii=l(W),Ws=s(W,"P",{});var Mu=a(Ws);Bi=d(Mu,"Example:"),Mu.forEach(t),Gi=l(W),_(Lo.$$.fragment,W),Qi=l(W),Us=s(W,"BLOCKQUOTE",{});var Su=a(Us);Rs=s(Su,"BLOCKQUOTE",{});var Cu=a(Rs);Vs=s(Cu,"BLOCKQUOTE",{});var Ou=a(Vs);Ks=s(Ou,"P",{});var Pu=a(Ks);Hi=d(Pu,"from transformers import LEDModel, LEDConfig"),Pu.forEach(t),Ou.forEach(t),Cu.forEach(t),Su.forEach(t),Wi=l(W),Xs=s(W,"BLOCKQUOTE",{});var Au=a(Xs);Js=s(Au,"BLOCKQUOTE",{});var Nu=a(Js);Zs=s(Nu,"BLOCKQUOTE",{});var ju=a(Zs);It=s(ju,"H1",{class:!0});var Kr=a(It);Bt=s(Kr,"A",{id:!0,class:!0,href:!0});var Iu=a(Bt);Ys=s(Iu,"SPAN",{});var Bu=a(Ys);_(Do.$$.fragment,Bu),Bu.forEach(t),Iu.forEach(t),Ui=l(Kr),ea=s(Kr,"SPAN",{});var Gu=a(ea);Ri=d(Gu,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Gu.forEach(t),Kr.forEach(t),ju.forEach(t),Nu.forEach(t),Au.forEach(t),Vi=l(W),ta=s(W,"BLOCKQUOTE",{});var Qu=a(ta);oa=s(Qu,"BLOCKQUOTE",{});var Hu=a(oa);zo=s(Hu,"BLOCKQUOTE",{});var Xr=a(zo);Gt=s(Xr,"H1",{class:!0});var Jr=a(Gt);Qt=s(Jr,"A",{id:!0,class:!0,href:!0});var Wu=a(Qt);na=s(Wu,"SPAN",{});var Uu=a(na);_($o.$$.fragment,Uu),Uu.forEach(t),Wu.forEach(t),Ki=l(Jr),sa=s(Jr,"SPAN",{});var Ru=a(sa);Xi=d(Ru,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Ru.forEach(t),Jr.forEach(t),Ji=l(Xr),aa=s(Xr,"P",{});var Vu=a(aa);Zi=d(Vu,"LEDModel(configuration)"),Vu.forEach(t),Xr.forEach(t),Hu.forEach(t),Qu.forEach(t),Yi=l(W),ra=s(W,"BLOCKQUOTE",{});var Ku=a(ra);da=s(Ku,"BLOCKQUOTE",{});var Xu=a(da);ia=s(Xu,"BLOCKQUOTE",{});var Ju=a(ia);Ht=s(Ju,"H1",{class:!0});var Zr=a(Ht);Wt=s(Zr,"A",{id:!0,class:!0,href:!0});var Zu=a(Wt);la=s(Zu,"SPAN",{});var Yu=a(la);_(Fo.$$.fragment,Yu),Yu.forEach(t),Zu.forEach(t),el=l(Zr),ca=s(Zr,"SPAN",{});var ef=a(ca);tl=d(ef,"Accessing the model configuration >>> configuration = model.config"),ef.forEach(t),Zr.forEach(t),Ju.forEach(t),Xu.forEach(t),Ku.forEach(t),W.forEach(t),vr=l(o),ft=s(o,"H2",{class:!0});var Yr=a(ft);Ut=s(Yr,"A",{id:!0,class:!0,href:!0});var tf=a(Ut);ha=s(tf,"SPAN",{});var of=a(ha);_(xo.$$.fragment,of),of.forEach(t),tf.forEach(t),ol=l(Yr),pa=s(Yr,"SPAN",{});var nf=a(pa);nl=d(nf,"LEDTokenizer"),nf.forEach(t),Yr.forEach(t),Tr=l(o),A=s(o,"DIV",{class:!0});var te=a(A);_(Mo.$$.fragment,te),sl=l(te),ua=s(te,"P",{});var sf=a(ua);al=d(sf,"Construct a LED tokenizer."),sf.forEach(t),rl=l(te),Rt=s(te,"P",{});var ur=a(Rt);Yn=s(ur,"A",{href:!0});var af=a(Yn);dl=d(af,"LEDTokenizer"),af.forEach(t),il=d(ur," is identical to "),es=s(ur,"A",{href:!0});var rf=a(es);ll=d(rf,"BartTokenizer"),rf.forEach(t),cl=d(ur,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),ur.forEach(t),hl=l(te),So=s(te,"P",{});var ed=a(So);pl=d(ed,"Refer to superclass "),ts=s(ed,"A",{href:!0});var df=a(ts);ul=d(df,"BartTokenizer"),df.forEach(t),fl=d(ed," for usage examples and documentation concerning parameters."),ed.forEach(t),ml=l(te),Ke=s(te,"DIV",{class:!0});var Es=a(Ke);_(Co.$$.fragment,Es),_l=l(Es),fa=s(Es,"P",{});var lf=a(fa);gl=d(lf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),lf.forEach(t),vl=l(Es),Oo=s(Es,"UL",{});var td=a(Oo);os=s(td,"LI",{});var Vp=a(os);Tl=d(Vp,"single sequence: "),ma=s(Vp,"CODE",{});var cf=a(ma);kl=d(cf,"<s> X </s>"),cf.forEach(t),Vp.forEach(t),bl=l(td),ns=s(td,"LI",{});var Kp=a(ns);wl=d(Kp,"pair of sequences: "),_a=s(Kp,"CODE",{});var hf=a(_a);yl=d(hf,"<s> A </s></s> B </s>"),hf.forEach(t),Kp.forEach(t),td.forEach(t),Es.forEach(t),El=l(te),Vt=s(te,"DIV",{class:!0});var od=a(Vt);_(Po.$$.fragment,od),ql=l(od),Ao=s(od,"P",{});var nd=a(Ao);Ll=d(nd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ga=s(nd,"CODE",{});var pf=a(ga);Dl=d(pf,"prepare_for_model"),pf.forEach(t),zl=d(nd," method."),nd.forEach(t),od.forEach(t),$l=l(te),Kt=s(te,"DIV",{class:!0});var sd=a(Kt);_(No.$$.fragment,sd),Fl=l(sd),va=s(sd,"P",{});var uf=a(va);xl=d(uf,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),uf.forEach(t),sd.forEach(t),Ml=l(te),ss=s(te,"DIV",{class:!0});var ff=a(ss);_(jo.$$.fragment,ff),ff.forEach(t),te.forEach(t),kr=l(o),mt=s(o,"H2",{class:!0});var ad=a(mt);Xt=s(ad,"A",{id:!0,class:!0,href:!0});var mf=a(Xt);Ta=s(mf,"SPAN",{});var _f=a(Ta);_(Io.$$.fragment,_f),_f.forEach(t),mf.forEach(t),Sl=l(ad),ka=s(ad,"SPAN",{});var gf=a(ka);Cl=d(gf,"LEDTokenizerFast"),gf.forEach(t),ad.forEach(t),br=l(o),$e=s(o,"DIV",{class:!0});var fo=a($e);_(Bo.$$.fragment,fo),Ol=l(fo),Go=s(fo,"P",{});var rd=a(Go);Pl=d(rd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ba=s(rd,"EM",{});var vf=a(ba);Al=d(vf,"tokenizers"),vf.forEach(t),Nl=d(rd," library)."),rd.forEach(t),jl=l(fo),Jt=s(fo,"P",{});var fr=a(Jt);as=s(fr,"A",{href:!0});var Tf=a(as);Il=d(Tf,"LEDTokenizerFast"),Tf.forEach(t),Bl=d(fr," is identical to "),rs=s(fr,"A",{href:!0});var kf=a(rs);Gl=d(kf,"BartTokenizerFast"),kf.forEach(t),Ql=d(fr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),fr.forEach(t),Hl=l(fo),Qo=s(fo,"P",{});var dd=a(Qo);Wl=d(dd,"Refer to superclass "),ds=s(dd,"A",{href:!0});var bf=a(ds);Ul=d(bf,"BartTokenizerFast"),bf.forEach(t),Rl=d(dd," for usage examples and documentation concerning parameters."),dd.forEach(t),fo.forEach(t),wr=l(o),_t=s(o,"H2",{class:!0});var id=a(_t);Zt=s(id,"A",{id:!0,class:!0,href:!0});var wf=a(Zt);wa=s(wf,"SPAN",{});var yf=a(wa);_(Ho.$$.fragment,yf),yf.forEach(t),wf.forEach(t),Vl=l(id),ya=s(id,"SPAN",{});var Ef=a(ya);Kl=d(Ef,"LED specific outputs"),Ef.forEach(t),id.forEach(t),yr=l(o),gt=s(o,"DIV",{class:!0});var ld=a(gt);_(Wo.$$.fragment,ld),Xl=l(ld),Ea=s(ld,"P",{});var qf=a(Ea);Jl=d(qf,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),qf.forEach(t),ld.forEach(t),Er=l(o),vt=s(o,"DIV",{class:!0});var cd=a(vt);_(Uo.$$.fragment,cd),Zl=l(cd),qa=s(cd,"P",{});var Lf=a(qa);Yl=d(Lf,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Lf.forEach(t),cd.forEach(t),qr=l(o),Tt=s(o,"DIV",{class:!0});var hd=a(Tt);_(Ro.$$.fragment,hd),ec=l(hd),La=s(hd,"P",{});var Df=a(La);tc=d(Df,"Base class for sequence-to-sequence language models outputs."),Df.forEach(t),hd.forEach(t),Lr=l(o),kt=s(o,"DIV",{class:!0});var pd=a(kt);_(Vo.$$.fragment,pd),oc=l(pd),Da=s(pd,"P",{});var zf=a(Da);nc=d(zf,"Base class for outputs of sequence-to-sequence sentence classification models."),zf.forEach(t),pd.forEach(t),Dr=l(o),bt=s(o,"DIV",{class:!0});var ud=a(bt);_(Ko.$$.fragment,ud),sc=l(ud),za=s(ud,"P",{});var $f=a(za);ac=d($f,"Base class for outputs of sequence-to-sequence question answering models."),$f.forEach(t),ud.forEach(t),zr=l(o),wt=s(o,"DIV",{class:!0});var fd=a(wt);_(Xo.$$.fragment,fd),rc=l(fd),$a=s(fd,"P",{});var Ff=a($a);dc=d(Ff,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Ff.forEach(t),fd.forEach(t),$r=l(o),yt=s(o,"DIV",{class:!0});var md=a(yt);_(Jo.$$.fragment,md),ic=l(md),Fa=s(md,"P",{});var xf=a(Fa);lc=d(xf,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),xf.forEach(t),md.forEach(t),Fr=l(o),Et=s(o,"DIV",{class:!0});var _d=a(Et);_(Zo.$$.fragment,_d),cc=l(_d),xa=s(_d,"P",{});var Mf=a(xa);hc=d(Mf,"Base class for sequence-to-sequence language models outputs."),Mf.forEach(t),_d.forEach(t),xr=l(o),qt=s(o,"H2",{class:!0});var gd=a(qt);Yt=s(gd,"A",{id:!0,class:!0,href:!0});var Sf=a(Yt);Ma=s(Sf,"SPAN",{});var Cf=a(Ma);_(Yo.$$.fragment,Cf),Cf.forEach(t),Sf.forEach(t),pc=l(gd),Sa=s(gd,"SPAN",{});var Of=a(Sa);uc=d(Of,"LEDModel"),Of.forEach(t),gd.forEach(t),Mr=l(o),Fe=s(o,"DIV",{class:!0});var mo=a(Fe);_(en.$$.fragment,mo),fc=l(mo),tn=s(mo,"P",{});var vd=a(tn);mc=d(vd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),is=s(vd,"A",{href:!0});var Pf=a(is);_c=d(Pf,"PreTrainedModel"),Pf.forEach(t),gc=d(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),vc=l(mo),on=s(mo,"P",{});var Td=a(on);Tc=d(Td,"This model is also a PyTorch "),nn=s(Td,"A",{href:!0,rel:!0});var Af=a(nn);kc=d(Af,"torch.nn.Module"),Af.forEach(t),bc=d(Td,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Td.forEach(t),wc=l(mo),ke=s(mo,"DIV",{class:!0});var Je=a(ke);_(sn.$$.fragment,Je),yc=l(Je),Lt=s(Je,"P",{});var qs=a(Lt);Ec=d(qs,"The "),ls=s(qs,"A",{href:!0});var Nf=a(ls);qc=d(Nf,"LEDModel"),Nf.forEach(t),Lc=d(qs," forward method, overrides the "),Ca=s(qs,"CODE",{});var jf=a(Ca);Dc=d(jf,"__call__"),jf.forEach(t),zc=d(qs," special method."),qs.forEach(t),$c=l(Je),_(eo.$$.fragment,Je),Fc=l(Je),Oa=s(Je,"P",{});var If=a(Oa);xc=d(If,"Example:"),If.forEach(t),Mc=l(Je),_(an.$$.fragment,Je),Je.forEach(t),mo.forEach(t),Sr=l(o),Dt=s(o,"H2",{class:!0});var kd=a(Dt);to=s(kd,"A",{id:!0,class:!0,href:!0});var Bf=a(to);Pa=s(Bf,"SPAN",{});var Gf=a(Pa);_(rn.$$.fragment,Gf),Gf.forEach(t),Bf.forEach(t),Sc=l(kd),Aa=s(kd,"SPAN",{});var Qf=a(Aa);Cc=d(Qf,"LEDForConditionalGeneration"),Qf.forEach(t),kd.forEach(t),Cr=l(o),xe=s(o,"DIV",{class:!0});var _o=a(xe);_(dn.$$.fragment,_o),Oc=l(_o),ln=s(_o,"P",{});var bd=a(ln);Pc=d(bd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=s(bd,"A",{href:!0});var Hf=a(cs);Ac=d(Hf,"PreTrainedModel"),Hf.forEach(t),Nc=d(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd.forEach(t),jc=l(_o),cn=s(_o,"P",{});var wd=a(cn);Ic=d(wd,"This model is also a PyTorch "),hn=s(wd,"A",{href:!0,rel:!0});var Wf=a(hn);Bc=d(Wf,"torch.nn.Module"),Wf.forEach(t),Gc=d(wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wd.forEach(t),Qc=l(_o),H=s(_o,"DIV",{class:!0});var qe=a(H);_(pn.$$.fragment,qe),Hc=l(qe),zt=s(qe,"P",{});var Ls=a(zt);Wc=d(Ls,"The "),hs=s(Ls,"A",{href:!0});var Uf=a(hs);Uc=d(Uf,"LEDForConditionalGeneration"),Uf.forEach(t),Rc=d(Ls," forward method, overrides the "),Na=s(Ls,"CODE",{});var Rf=a(Na);Vc=d(Rf,"__call__"),Rf.forEach(t),Kc=d(Ls," special method."),Ls.forEach(t),Xc=l(qe),_(oo.$$.fragment,qe),Jc=l(qe),ja=s(qe,"P",{});var Vf=a(ja);Zc=d(Vf,"Conditional generation example:"),Vf.forEach(t),Yc=l(qe),_(un.$$.fragment,qe),eh=l(qe),Ia=s(qe,"P",{});var Kf=a(Ia);th=d(Kf,"Summarization example:"),Kf.forEach(t),oh=l(qe),_(fn.$$.fragment,qe),qe.forEach(t),_o.forEach(t),Or=l(o),$t=s(o,"H2",{class:!0});var yd=a($t);no=s(yd,"A",{id:!0,class:!0,href:!0});var Xf=a(no);Ba=s(Xf,"SPAN",{});var Jf=a(Ba);_(mn.$$.fragment,Jf),Jf.forEach(t),Xf.forEach(t),nh=l(yd),Ga=s(yd,"SPAN",{});var Zf=a(Ga);sh=d(Zf,"LEDForSequenceClassification"),Zf.forEach(t),yd.forEach(t),Pr=l(o),he=s(o,"DIV",{class:!0});var Ze=a(he);_(_n.$$.fragment,Ze),ah=l(Ze),Qa=s(Ze,"P",{});var Yf=a(Qa);rh=d(Yf,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Yf.forEach(t),dh=l(Ze),gn=s(Ze,"P",{});var Ed=a(gn);ih=d(Ed,"This model inherits from "),ps=s(Ed,"A",{href:!0});var em=a(ps);lh=d(em,"PreTrainedModel"),em.forEach(t),ch=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),hh=l(Ze),vn=s(Ze,"P",{});var qd=a(vn);ph=d(qd,"This model is also a PyTorch "),Tn=s(qd,"A",{href:!0,rel:!0});var tm=a(Tn);uh=d(tm,"torch.nn.Module"),tm.forEach(t),fh=d(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),mh=l(Ze),j=s(Ze,"DIV",{class:!0});var oe=a(j);_(kn.$$.fragment,oe),_h=l(oe),Ft=s(oe,"P",{});var Ds=a(Ft);gh=d(Ds,"The "),us=s(Ds,"A",{href:!0});var om=a(us);vh=d(om,"LEDForSequenceClassification"),om.forEach(t),Th=d(Ds," forward method, overrides the "),Ha=s(Ds,"CODE",{});var nm=a(Ha);kh=d(nm,"__call__"),nm.forEach(t),bh=d(Ds," special method."),Ds.forEach(t),wh=l(oe),_(so.$$.fragment,oe),yh=l(oe),Wa=s(oe,"P",{});var sm=a(Wa);Eh=d(sm,"Example of single-label classification:"),sm.forEach(t),qh=l(oe),_(bn.$$.fragment,oe),Lh=l(oe),_(wn.$$.fragment,oe),Dh=l(oe),Ua=s(oe,"P",{});var am=a(Ua);zh=d(am,"Example of multi-label classification:"),am.forEach(t),$h=l(oe),_(yn.$$.fragment,oe),oe.forEach(t),Ze.forEach(t),Ar=l(o),xt=s(o,"H2",{class:!0});var Ld=a(xt);ao=s(Ld,"A",{id:!0,class:!0,href:!0});var rm=a(ao);Ra=s(rm,"SPAN",{});var dm=a(Ra);_(En.$$.fragment,dm),dm.forEach(t),rm.forEach(t),Fh=l(Ld),Va=s(Ld,"SPAN",{});var im=a(Va);xh=d(im,"LEDForQuestionAnswering"),im.forEach(t),Ld.forEach(t),Nr=l(o),pe=s(o,"DIV",{class:!0});var Ye=a(pe);_(qn.$$.fragment,Ye),Mh=l(Ye),Mt=s(Ye,"P",{});var zs=a(Mt);Sh=d(zs,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ka=s(zs,"CODE",{});var lm=a(Ka);Ch=d(lm,"span start logits"),lm.forEach(t),Oh=d(zs," and "),Xa=s(zs,"CODE",{});var cm=a(Xa);Ph=d(cm,"span end logits"),cm.forEach(t),Ah=d(zs,")."),zs.forEach(t),Nh=l(Ye),Ln=s(Ye,"P",{});var Dd=a(Ln);jh=d(Dd,"This model inherits from "),fs=s(Dd,"A",{href:!0});var hm=a(fs);Ih=d(hm,"PreTrainedModel"),hm.forEach(t),Bh=d(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),Gh=l(Ye),Dn=s(Ye,"P",{});var zd=a(Dn);Qh=d(zd,"This model is also a PyTorch "),zn=s(zd,"A",{href:!0,rel:!0});var pm=a(zn);Hh=d(pm,"torch.nn.Module"),pm.forEach(t),Wh=d(zd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zd.forEach(t),Uh=l(Ye),ee=s(Ye,"DIV",{class:!0});var Ae=a(ee);_($n.$$.fragment,Ae),Rh=l(Ae),St=s(Ae,"P",{});var $s=a(St);Vh=d($s,"The "),ms=s($s,"A",{href:!0});var um=a(ms);Kh=d(um,"LEDForQuestionAnswering"),um.forEach(t),Xh=d($s," forward method, overrides the "),Ja=s($s,"CODE",{});var fm=a(Ja);Jh=d(fm,"__call__"),fm.forEach(t),Zh=d($s," special method."),$s.forEach(t),Yh=l(Ae),_(ro.$$.fragment,Ae),ep=l(Ae),Za=s(Ae,"P",{});var mm=a(Za);tp=d(mm,"Example:"),mm.forEach(t),op=l(Ae),_(Fn.$$.fragment,Ae),np=l(Ae),_(xn.$$.fragment,Ae),Ae.forEach(t),Ye.forEach(t),jr=l(o),Ct=s(o,"H2",{class:!0});var $d=a(Ct);io=s($d,"A",{id:!0,class:!0,href:!0});var _m=a(io);Ya=s(_m,"SPAN",{});var gm=a(Ya);_(Mn.$$.fragment,gm),gm.forEach(t),_m.forEach(t),sp=l($d),er=s($d,"SPAN",{});var vm=a(er);ap=d(vm,"TFLEDModel"),vm.forEach(t),$d.forEach(t),Ir=l(o),ue=s(o,"DIV",{class:!0});var et=a(ue);_(Sn.$$.fragment,et),rp=l(et),Cn=s(et,"P",{});var Fd=a(Cn);dp=d(Fd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_s=s(Fd,"A",{href:!0});var Tm=a(_s);ip=d(Tm,"TFPreTrainedModel"),Tm.forEach(t),lp=d(Fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd.forEach(t),cp=l(et),On=s(et,"P",{});var xd=a(On);hp=d(xd,"This model is also a "),Pn=s(xd,"A",{href:!0,rel:!0});var km=a(Pn);pp=d(km,"tf.keras.Model"),km.forEach(t),up=d(xd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xd.forEach(t),fp=l(et),_(lo.$$.fragment,et),mp=l(et),be=s(et,"DIV",{class:!0});var tt=a(be);_(An.$$.fragment,tt),_p=l(tt),Ot=s(tt,"P",{});var Fs=a(Ot);gp=d(Fs,"The "),gs=s(Fs,"A",{href:!0});var bm=a(gs);vp=d(bm,"TFLEDModel"),bm.forEach(t),Tp=d(Fs," forward method, overrides the "),tr=s(Fs,"CODE",{});var wm=a(tr);kp=d(wm,"__call__"),wm.forEach(t),bp=d(Fs," special method."),Fs.forEach(t),wp=l(tt),_(co.$$.fragment,tt),yp=l(tt),or=s(tt,"P",{});var ym=a(or);Ep=d(ym,"Example:"),ym.forEach(t),qp=l(tt),_(Nn.$$.fragment,tt),tt.forEach(t),et.forEach(t),Br=l(o),Pt=s(o,"H2",{class:!0});var Md=a(Pt);ho=s(Md,"A",{id:!0,class:!0,href:!0});var Em=a(ho);nr=s(Em,"SPAN",{});var qm=a(nr);_(jn.$$.fragment,qm),qm.forEach(t),Em.forEach(t),Lp=l(Md),sr=s(Md,"SPAN",{});var Lm=a(sr);Dp=d(Lm,"TFLEDForConditionalGeneration"),Lm.forEach(t),Md.forEach(t),Gr=l(o),fe=s(o,"DIV",{class:!0});var ot=a(fe);_(In.$$.fragment,ot),zp=l(ot),Bn=s(ot,"P",{});var Sd=a(Bn);$p=d(Sd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),vs=s(Sd,"A",{href:!0});var Dm=a(vs);Fp=d(Dm,"TFPreTrainedModel"),Dm.forEach(t),xp=d(Sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd.forEach(t),Mp=l(ot),Gn=s(ot,"P",{});var Cd=a(Gn);Sp=d(Cd,"This model is also a "),Qn=s(Cd,"A",{href:!0,rel:!0});var zm=a(Qn);Cp=d(zm,"tf.keras.Model"),zm.forEach(t),Op=d(Cd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cd.forEach(t),Pp=l(ot),_(po.$$.fragment,ot),Ap=l(ot),we=s(ot,"DIV",{class:!0});var nt=a(we);_(Hn.$$.fragment,nt),Np=l(nt),At=s(nt,"P",{});var xs=a(At);jp=d(xs,"The "),Ts=s(xs,"A",{href:!0});var $m=a(Ts);Ip=d($m,"TFLEDForConditionalGeneration"),$m.forEach(t),Bp=d(xs," forward method, overrides the "),ar=s(xs,"CODE",{});var Fm=a(ar);Gp=d(Fm,"__call__"),Fm.forEach(t),Qp=d(xs," special method."),xs.forEach(t),Hp=l(nt),_(uo.$$.fragment,nt),Wp=l(nt),rr=s(nt,"P",{});var xm=a(rr);Up=d(xm,"Examples:"),xm.forEach(t),Rp=l(nt),_(Wn.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Um)),c(E,"id","led"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#led"),c(b,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(z,"class","relative group"),c(se,"href","https://arxiv.org/abs/2004.05150"),c(se,"rel","nofollow"),c(Q,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(N,"href","/docs/transformers/pr_16363/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Oe,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizer"),c(Pe,"href","/docs/transformers/pr_16363/en/model_doc/bart#transformers.BartTokenizer"),c(Vn,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizer"),c(Kn,"href","/docs/transformers/pr_16363/en/model_doc/longformer#transformers.LongformerModel"),c(To,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(To,"rel","nofollow"),c(bo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(bo,"rel","nofollow"),c(wo,"href","https://huggingface.co/patrickvonplaten"),c(wo,"rel","nofollow"),c(jt,"id","transformers.LEDConfig"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.LEDConfig"),c(ht,"class","relative group"),c(Xn,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDModel"),c(qo,"href","https://huggingface.co/allenai/led-base-16384"),c(qo,"rel","nofollow"),c(Jn,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Zn,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Bt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(It,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Gt,"class","relative group"),c(Wt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(O,"class","docstring"),c(Ut,"id","transformers.LEDTokenizer"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDTokenizer"),c(ft,"class","relative group"),c(Yn,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizer"),c(es,"href","/docs/transformers/pr_16363/en/model_doc/bart#transformers.BartTokenizer"),c(ts,"href","/docs/transformers/pr_16363/en/model_doc/bart#transformers.BartTokenizer"),c(Ke,"class","docstring"),c(Vt,"class","docstring"),c(Kt,"class","docstring"),c(ss,"class","docstring"),c(A,"class","docstring"),c(Xt,"id","transformers.LEDTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDTokenizerFast"),c(mt,"class","relative group"),c(as,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDTokenizerFast"),c(rs,"href","/docs/transformers/pr_16363/en/model_doc/bart#transformers.BartTokenizerFast"),c(ds,"href","/docs/transformers/pr_16363/en/model_doc/bart#transformers.BartTokenizerFast"),c($e,"class","docstring"),c(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(_t,"class","relative group"),c(gt,"class","docstring"),c(vt,"class","docstring"),c(Tt,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(wt,"class","docstring"),c(yt,"class","docstring"),c(Et,"class","docstring"),c(Yt,"id","transformers.LEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LEDModel"),c(qt,"class","relative group"),c(is,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(ls,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDModel"),c(ke,"class","docstring"),c(Fe,"class","docstring"),c(to,"id","transformers.LEDForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.LEDForConditionalGeneration"),c(Dt,"class","relative group"),c(cs,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(hs,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(H,"class","docstring"),c(xe,"class","docstring"),c(no,"id","transformers.LEDForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.LEDForSequenceClassification"),c($t,"class","relative group"),c(ps,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Tn,"rel","nofollow"),c(us,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDForSequenceClassification"),c(j,"class","docstring"),c(he,"class","docstring"),c(ao,"id","transformers.LEDForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.LEDForQuestionAnswering"),c(xt,"class","relative group"),c(fs,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zn,"rel","nofollow"),c(ms,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(ee,"class","docstring"),c(pe,"class","docstring"),c(io,"id","transformers.TFLEDModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLEDModel"),c(Ct,"class","relative group"),c(_s,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pn,"rel","nofollow"),c(gs,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.TFLEDModel"),c(be,"class","docstring"),c(ue,"class","docstring"),c(ho,"id","transformers.TFLEDForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDForConditionalGeneration"),c(Pt,"class","relative group"),c(vs,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Qn,"rel","nofollow"),c(Ts,"href","/docs/transformers/pr_16363/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(we,"class","docstring"),c(fe,"class","docstring")},m(o,p){e(document.head,u),h(o,L,p),h(o,b,p),e(b,E),e(E,q),g(y,q,null),e(b,w),e(b,D),e(D,Ne),h(o,ge,p),h(o,z,p),e(z,Z),e(Z,U),g(ne,U,null),e(z,je),e(z,R),e(R,Ie),h(o,Me,p),h(o,G,p),e(G,V),e(G,se),e(se,Le),e(G,S),h(o,P,p),h(o,ve,p),e(ve,ae),h(o,Se,p),h(o,Te,p),e(Te,K),e(K,Be),h(o,Ce,p),h(o,C,p),e(C,Ge),h(o,Y,p),h(o,x,p),e(x,M),e(M,Q),e(Q,Qe),e(M,He),e(M,N),e(N,We),e(M,re),e(M,De),e(De,f),e(M,$),e(M,de),e(de,st),e(M,at),e(M,I),e(I,rt),e(M,dt),e(M,Oe),e(Oe,X),e(M,ie),e(M,Pe),e(Pe,it),e(M,le),e(x,lt),e(x,ce),e(ce,Ue),e(ce,Re),e(Re,Od),e(ce,Pd),e(ce,Ms),e(Ms,Ad),e(ce,Nd),e(x,jd),e(x,ze),e(ze,Id),e(ze,Ss),e(Ss,Bd),e(ze,Gd),e(ze,Cs),e(Cs,Qd),e(ze,Hd),e(ze,Vn),e(Vn,Wd),e(ze,Ud),e(ze,Os),e(Os,Rd),e(ze,Vd),e(x,Kd),e(x,J),e(J,Xd),e(J,Ps),e(Ps,Jd),e(J,Zd),e(J,As),e(As,Yd),e(J,ei),e(J,Kn),e(Kn,ti),e(J,oi),e(J,Ns),e(Ns,ni),e(J,si),e(J,js),e(js,ai),e(J,ri),e(J,Is),e(Is,di),e(J,ii),e(x,li),e(x,ct),e(ct,ci),e(ct,Bs),e(Bs,hi),e(ct,pi),e(ct,Gs),e(Gs,ui),e(ct,fi),e(x,mi),e(x,vo),e(vo,_i),e(vo,To),e(To,gi),e(vo,vi),e(x,Ti),e(x,ko),e(ko,ki),e(ko,bo),e(bo,bi),e(ko,wi),h(o,mr,p),h(o,Nt,p),e(Nt,yi),e(Nt,wo),e(wo,Ei),e(Nt,qi),h(o,_r,p),h(o,ht,p),e(ht,jt),e(jt,Qs),g(yo,Qs,null),e(ht,Li),e(ht,Hs),e(Hs,Di),h(o,gr,p),h(o,O,p),g(Eo,O,null),e(O,zi),e(O,pt),e(pt,$i),e(pt,Xn),e(Xn,Fi),e(pt,xi),e(pt,qo),e(qo,Mi),e(pt,Si),e(O,Ci),e(O,ut),e(ut,Oi),e(ut,Jn),e(Jn,Pi),e(ut,Ai),e(ut,Zn),e(Zn,Ni),e(ut,ji),e(O,Ii),e(O,Ws),e(Ws,Bi),e(O,Gi),g(Lo,O,null),e(O,Qi),e(O,Us),e(Us,Rs),e(Rs,Vs),e(Vs,Ks),e(Ks,Hi),e(O,Wi),e(O,Xs),e(Xs,Js),e(Js,Zs),e(Zs,It),e(It,Bt),e(Bt,Ys),g(Do,Ys,null),e(It,Ui),e(It,ea),e(ea,Ri),e(O,Vi),e(O,ta),e(ta,oa),e(oa,zo),e(zo,Gt),e(Gt,Qt),e(Qt,na),g($o,na,null),e(Gt,Ki),e(Gt,sa),e(sa,Xi),e(zo,Ji),e(zo,aa),e(aa,Zi),e(O,Yi),e(O,ra),e(ra,da),e(da,ia),e(ia,Ht),e(Ht,Wt),e(Wt,la),g(Fo,la,null),e(Ht,el),e(Ht,ca),e(ca,tl),h(o,vr,p),h(o,ft,p),e(ft,Ut),e(Ut,ha),g(xo,ha,null),e(ft,ol),e(ft,pa),e(pa,nl),h(o,Tr,p),h(o,A,p),g(Mo,A,null),e(A,sl),e(A,ua),e(ua,al),e(A,rl),e(A,Rt),e(Rt,Yn),e(Yn,dl),e(Rt,il),e(Rt,es),e(es,ll),e(Rt,cl),e(A,hl),e(A,So),e(So,pl),e(So,ts),e(ts,ul),e(So,fl),e(A,ml),e(A,Ke),g(Co,Ke,null),e(Ke,_l),e(Ke,fa),e(fa,gl),e(Ke,vl),e(Ke,Oo),e(Oo,os),e(os,Tl),e(os,ma),e(ma,kl),e(Oo,bl),e(Oo,ns),e(ns,wl),e(ns,_a),e(_a,yl),e(A,El),e(A,Vt),g(Po,Vt,null),e(Vt,ql),e(Vt,Ao),e(Ao,Ll),e(Ao,ga),e(ga,Dl),e(Ao,zl),e(A,$l),e(A,Kt),g(No,Kt,null),e(Kt,Fl),e(Kt,va),e(va,xl),e(A,Ml),e(A,ss),g(jo,ss,null),h(o,kr,p),h(o,mt,p),e(mt,Xt),e(Xt,Ta),g(Io,Ta,null),e(mt,Sl),e(mt,ka),e(ka,Cl),h(o,br,p),h(o,$e,p),g(Bo,$e,null),e($e,Ol),e($e,Go),e(Go,Pl),e(Go,ba),e(ba,Al),e(Go,Nl),e($e,jl),e($e,Jt),e(Jt,as),e(as,Il),e(Jt,Bl),e(Jt,rs),e(rs,Gl),e(Jt,Ql),e($e,Hl),e($e,Qo),e(Qo,Wl),e(Qo,ds),e(ds,Ul),e(Qo,Rl),h(o,wr,p),h(o,_t,p),e(_t,Zt),e(Zt,wa),g(Ho,wa,null),e(_t,Vl),e(_t,ya),e(ya,Kl),h(o,yr,p),h(o,gt,p),g(Wo,gt,null),e(gt,Xl),e(gt,Ea),e(Ea,Jl),h(o,Er,p),h(o,vt,p),g(Uo,vt,null),e(vt,Zl),e(vt,qa),e(qa,Yl),h(o,qr,p),h(o,Tt,p),g(Ro,Tt,null),e(Tt,ec),e(Tt,La),e(La,tc),h(o,Lr,p),h(o,kt,p),g(Vo,kt,null),e(kt,oc),e(kt,Da),e(Da,nc),h(o,Dr,p),h(o,bt,p),g(Ko,bt,null),e(bt,sc),e(bt,za),e(za,ac),h(o,zr,p),h(o,wt,p),g(Xo,wt,null),e(wt,rc),e(wt,$a),e($a,dc),h(o,$r,p),h(o,yt,p),g(Jo,yt,null),e(yt,ic),e(yt,Fa),e(Fa,lc),h(o,Fr,p),h(o,Et,p),g(Zo,Et,null),e(Et,cc),e(Et,xa),e(xa,hc),h(o,xr,p),h(o,qt,p),e(qt,Yt),e(Yt,Ma),g(Yo,Ma,null),e(qt,pc),e(qt,Sa),e(Sa,uc),h(o,Mr,p),h(o,Fe,p),g(en,Fe,null),e(Fe,fc),e(Fe,tn),e(tn,mc),e(tn,is),e(is,_c),e(tn,gc),e(Fe,vc),e(Fe,on),e(on,Tc),e(on,nn),e(nn,kc),e(on,bc),e(Fe,wc),e(Fe,ke),g(sn,ke,null),e(ke,yc),e(ke,Lt),e(Lt,Ec),e(Lt,ls),e(ls,qc),e(Lt,Lc),e(Lt,Ca),e(Ca,Dc),e(Lt,zc),e(ke,$c),g(eo,ke,null),e(ke,Fc),e(ke,Oa),e(Oa,xc),e(ke,Mc),g(an,ke,null),h(o,Sr,p),h(o,Dt,p),e(Dt,to),e(to,Pa),g(rn,Pa,null),e(Dt,Sc),e(Dt,Aa),e(Aa,Cc),h(o,Cr,p),h(o,xe,p),g(dn,xe,null),e(xe,Oc),e(xe,ln),e(ln,Pc),e(ln,cs),e(cs,Ac),e(ln,Nc),e(xe,jc),e(xe,cn),e(cn,Ic),e(cn,hn),e(hn,Bc),e(cn,Gc),e(xe,Qc),e(xe,H),g(pn,H,null),e(H,Hc),e(H,zt),e(zt,Wc),e(zt,hs),e(hs,Uc),e(zt,Rc),e(zt,Na),e(Na,Vc),e(zt,Kc),e(H,Xc),g(oo,H,null),e(H,Jc),e(H,ja),e(ja,Zc),e(H,Yc),g(un,H,null),e(H,eh),e(H,Ia),e(Ia,th),e(H,oh),g(fn,H,null),h(o,Or,p),h(o,$t,p),e($t,no),e(no,Ba),g(mn,Ba,null),e($t,nh),e($t,Ga),e(Ga,sh),h(o,Pr,p),h(o,he,p),g(_n,he,null),e(he,ah),e(he,Qa),e(Qa,rh),e(he,dh),e(he,gn),e(gn,ih),e(gn,ps),e(ps,lh),e(gn,ch),e(he,hh),e(he,vn),e(vn,ph),e(vn,Tn),e(Tn,uh),e(vn,fh),e(he,mh),e(he,j),g(kn,j,null),e(j,_h),e(j,Ft),e(Ft,gh),e(Ft,us),e(us,vh),e(Ft,Th),e(Ft,Ha),e(Ha,kh),e(Ft,bh),e(j,wh),g(so,j,null),e(j,yh),e(j,Wa),e(Wa,Eh),e(j,qh),g(bn,j,null),e(j,Lh),g(wn,j,null),e(j,Dh),e(j,Ua),e(Ua,zh),e(j,$h),g(yn,j,null),h(o,Ar,p),h(o,xt,p),e(xt,ao),e(ao,Ra),g(En,Ra,null),e(xt,Fh),e(xt,Va),e(Va,xh),h(o,Nr,p),h(o,pe,p),g(qn,pe,null),e(pe,Mh),e(pe,Mt),e(Mt,Sh),e(Mt,Ka),e(Ka,Ch),e(Mt,Oh),e(Mt,Xa),e(Xa,Ph),e(Mt,Ah),e(pe,Nh),e(pe,Ln),e(Ln,jh),e(Ln,fs),e(fs,Ih),e(Ln,Bh),e(pe,Gh),e(pe,Dn),e(Dn,Qh),e(Dn,zn),e(zn,Hh),e(Dn,Wh),e(pe,Uh),e(pe,ee),g($n,ee,null),e(ee,Rh),e(ee,St),e(St,Vh),e(St,ms),e(ms,Kh),e(St,Xh),e(St,Ja),e(Ja,Jh),e(St,Zh),e(ee,Yh),g(ro,ee,null),e(ee,ep),e(ee,Za),e(Za,tp),e(ee,op),g(Fn,ee,null),e(ee,np),g(xn,ee,null),h(o,jr,p),h(o,Ct,p),e(Ct,io),e(io,Ya),g(Mn,Ya,null),e(Ct,sp),e(Ct,er),e(er,ap),h(o,Ir,p),h(o,ue,p),g(Sn,ue,null),e(ue,rp),e(ue,Cn),e(Cn,dp),e(Cn,_s),e(_s,ip),e(Cn,lp),e(ue,cp),e(ue,On),e(On,hp),e(On,Pn),e(Pn,pp),e(On,up),e(ue,fp),g(lo,ue,null),e(ue,mp),e(ue,be),g(An,be,null),e(be,_p),e(be,Ot),e(Ot,gp),e(Ot,gs),e(gs,vp),e(Ot,Tp),e(Ot,tr),e(tr,kp),e(Ot,bp),e(be,wp),g(co,be,null),e(be,yp),e(be,or),e(or,Ep),e(be,qp),g(Nn,be,null),h(o,Br,p),h(o,Pt,p),e(Pt,ho),e(ho,nr),g(jn,nr,null),e(Pt,Lp),e(Pt,sr),e(sr,Dp),h(o,Gr,p),h(o,fe,p),g(In,fe,null),e(fe,zp),e(fe,Bn),e(Bn,$p),e(Bn,vs),e(vs,Fp),e(Bn,xp),e(fe,Mp),e(fe,Gn),e(Gn,Sp),e(Gn,Qn),e(Qn,Cp),e(Gn,Op),e(fe,Pp),g(po,fe,null),e(fe,Ap),e(fe,we),g(Hn,we,null),e(we,Np),e(we,At),e(At,jp),e(At,Ts),e(Ts,Ip),e(At,Bp),e(At,ar),e(ar,Gp),e(At,Qp),e(we,Hp),g(uo,we,null),e(we,Wp),e(we,rr),e(rr,Up),e(we,Rp),g(Wn,we,null),Qr=!0},p(o,[p]){const Un={};p&2&&(Un.$$scope={dirty:p,ctx:o}),eo.$set(Un);const dr={};p&2&&(dr.$$scope={dirty:p,ctx:o}),oo.$set(dr);const ir={};p&2&&(ir.$$scope={dirty:p,ctx:o}),so.$set(ir);const lr={};p&2&&(lr.$$scope={dirty:p,ctx:o}),ro.$set(lr);const Rn={};p&2&&(Rn.$$scope={dirty:p,ctx:o}),lo.$set(Rn);const cr={};p&2&&(cr.$$scope={dirty:p,ctx:o}),co.$set(cr);const hr={};p&2&&(hr.$$scope={dirty:p,ctx:o}),po.$set(hr);const pr={};p&2&&(pr.$$scope={dirty:p,ctx:o}),uo.$set(pr)},i(o){Qr||(v(y.$$.fragment,o),v(ne.$$.fragment,o),v(yo.$$.fragment,o),v(Eo.$$.fragment,o),v(Lo.$$.fragment,o),v(Do.$$.fragment,o),v($o.$$.fragment,o),v(Fo.$$.fragment,o),v(xo.$$.fragment,o),v(Mo.$$.fragment,o),v(Co.$$.fragment,o),v(Po.$$.fragment,o),v(No.$$.fragment,o),v(jo.$$.fragment,o),v(Io.$$.fragment,o),v(Bo.$$.fragment,o),v(Ho.$$.fragment,o),v(Wo.$$.fragment,o),v(Uo.$$.fragment,o),v(Ro.$$.fragment,o),v(Vo.$$.fragment,o),v(Ko.$$.fragment,o),v(Xo.$$.fragment,o),v(Jo.$$.fragment,o),v(Zo.$$.fragment,o),v(Yo.$$.fragment,o),v(en.$$.fragment,o),v(sn.$$.fragment,o),v(eo.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(dn.$$.fragment,o),v(pn.$$.fragment,o),v(oo.$$.fragment,o),v(un.$$.fragment,o),v(fn.$$.fragment,o),v(mn.$$.fragment,o),v(_n.$$.fragment,o),v(kn.$$.fragment,o),v(so.$$.fragment,o),v(bn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(En.$$.fragment,o),v(qn.$$.fragment,o),v($n.$$.fragment,o),v(ro.$$.fragment,o),v(Fn.$$.fragment,o),v(xn.$$.fragment,o),v(Mn.$$.fragment,o),v(Sn.$$.fragment,o),v(lo.$$.fragment,o),v(An.$$.fragment,o),v(co.$$.fragment,o),v(Nn.$$.fragment,o),v(jn.$$.fragment,o),v(In.$$.fragment,o),v(po.$$.fragment,o),v(Hn.$$.fragment,o),v(uo.$$.fragment,o),v(Wn.$$.fragment,o),Qr=!0)},o(o){T(y.$$.fragment,o),T(ne.$$.fragment,o),T(yo.$$.fragment,o),T(Eo.$$.fragment,o),T(Lo.$$.fragment,o),T(Do.$$.fragment,o),T($o.$$.fragment,o),T(Fo.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Co.$$.fragment,o),T(Po.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Bo.$$.fragment,o),T(Ho.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Ro.$$.fragment,o),T(Vo.$$.fragment,o),T(Ko.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(en.$$.fragment,o),T(sn.$$.fragment,o),T(eo.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(dn.$$.fragment,o),T(pn.$$.fragment,o),T(oo.$$.fragment,o),T(un.$$.fragment,o),T(fn.$$.fragment,o),T(mn.$$.fragment,o),T(_n.$$.fragment,o),T(kn.$$.fragment,o),T(so.$$.fragment,o),T(bn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(En.$$.fragment,o),T(qn.$$.fragment,o),T($n.$$.fragment,o),T(ro.$$.fragment,o),T(Fn.$$.fragment,o),T(xn.$$.fragment,o),T(Mn.$$.fragment,o),T(Sn.$$.fragment,o),T(lo.$$.fragment,o),T(An.$$.fragment,o),T(co.$$.fragment,o),T(Nn.$$.fragment,o),T(jn.$$.fragment,o),T(In.$$.fragment,o),T(po.$$.fragment,o),T(Hn.$$.fragment,o),T(uo.$$.fragment,o),T(Wn.$$.fragment,o),Qr=!1},d(o){t(u),o&&t(L),o&&t(b),k(y),o&&t(ge),o&&t(z),k(ne),o&&t(Me),o&&t(G),o&&t(P),o&&t(ve),o&&t(Se),o&&t(Te),o&&t(Ce),o&&t(C),o&&t(Y),o&&t(x),o&&t(mr),o&&t(Nt),o&&t(_r),o&&t(ht),k(yo),o&&t(gr),o&&t(O),k(Eo),k(Lo),k(Do),k($o),k(Fo),o&&t(vr),o&&t(ft),k(xo),o&&t(Tr),o&&t(A),k(Mo),k(Co),k(Po),k(No),k(jo),o&&t(kr),o&&t(mt),k(Io),o&&t(br),o&&t($e),k(Bo),o&&t(wr),o&&t(_t),k(Ho),o&&t(yr),o&&t(gt),k(Wo),o&&t(Er),o&&t(vt),k(Uo),o&&t(qr),o&&t(Tt),k(Ro),o&&t(Lr),o&&t(kt),k(Vo),o&&t(Dr),o&&t(bt),k(Ko),o&&t(zr),o&&t(wt),k(Xo),o&&t($r),o&&t(yt),k(Jo),o&&t(Fr),o&&t(Et),k(Zo),o&&t(xr),o&&t(qt),k(Yo),o&&t(Mr),o&&t(Fe),k(en),k(sn),k(eo),k(an),o&&t(Sr),o&&t(Dt),k(rn),o&&t(Cr),o&&t(xe),k(dn),k(pn),k(oo),k(un),k(fn),o&&t(Or),o&&t($t),k(mn),o&&t(Pr),o&&t(he),k(_n),k(kn),k(so),k(bn),k(wn),k(yn),o&&t(Ar),o&&t(xt),k(En),o&&t(Nr),o&&t(pe),k(qn),k($n),k(ro),k(Fn),k(xn),o&&t(jr),o&&t(Ct),k(Mn),o&&t(Ir),o&&t(ue),k(Sn),k(lo),k(An),k(co),k(Nn),o&&t(Br),o&&t(Pt),k(jn),o&&t(Gr),o&&t(fe),k(In),k(po),k(Hn),k(uo),k(Wn)}}}const Um={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Rm(B){return Pm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ym extends Mm{constructor(u){super();Sm(this,u,Rm,Wm,Cm,{})}}export{Ym as default,Um as metadata};
