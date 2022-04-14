import{S as zf,i as Bf,s as Ff,e as n,k as i,w as f,t as a,M as xf,c as s,d as t,m as l,a as r,x as _,h as d,b as c,F as e,g as p,y as g,q as b,o as k,B as v,v as $f}from"../../chunks/vendor-6b77c823.js";import{T as ho}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-90e3aa51.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as pe}from"../../chunks/IconCopyLink-7a11ce68.js";function qf(U){let u,F,y,z,B;return{c(){u=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),z=a("Module"),B=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=s(w,"P",{});var T=r(u);F=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var x=r(y);z=d(x,"Module"),x.forEach(t),B=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,F),e(u,y),e(y,z),e(u,B)},d(w){w&&t(u)}}}function Ef(U){let u,F,y,z,B;return{c(){u=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),z=a("Module"),B=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=s(w,"P",{});var T=r(u);F=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var x=r(y);z=d(x,"Module"),x.forEach(t),B=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,F),e(u,y),e(y,z),e(u,B)},d(w){w&&t(u)}}}function Mf(U){let u,F,y,z,B,w,T,x,Me,he,q,ve,te,Ce,oe,ne,je,xe,D,P,ye,R,E,C,Oe,J,Q,Pe,G,Ne,Ae,N,ue,se,$e,me,H,Ie,qe,M,Le,W,Se;return{c(){u=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),y=i(),z=n("ul"),B=n("li"),w=a("having all inputs as keyword arguments (like PyTorch models), or"),T=i(),x=n("li"),Me=a("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ve=a("This second option is useful when using "),te=n("code"),Ce=a("tf.keras.Model.fit"),oe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=a("model(inputs)"),xe=a("."),D=i(),P=n("p"),ye=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Oe=a("a single Tensor with "),J=n("code"),Q=a("input_ids"),Pe=a(" only and nothing else: "),G=n("code"),Ne=a("model(input_ids)"),Ae=i(),N=n("li"),ue=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),$e=a("model([input_ids, attention_mask])"),me=a(" or "),H=n("code"),Ie=a("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Se=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=r(u);F=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),y=l(m),z=s(m,"UL",{});var Te=r(z);B=s(Te,"LI",{});var ht=r(B);w=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),T=l(Te),x=s(Te,"LI",{});var Ke=r(x);Me=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),Te.forEach(t),he=l(m),q=s(m,"P",{});var j=r(q);ve=d(j,"This second option is useful when using "),te=s(j,"CODE",{});var fe=r(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=s(j,"CODE",{});var De=r(ne);je=d(De,"model(inputs)"),De.forEach(t),xe=d(j,"."),j.forEach(t),D=l(m),P=s(m,"P",{});var we=r(P);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=s(m,"UL",{});var V=r(E);C=s(V,"LI",{});var K=r(C);Oe=d(K,"a single Tensor with "),J=s(K,"CODE",{});var ut=r(J);Q=d(ut,"input_ids"),ut.forEach(t),Pe=d(K," only and nothing else: "),G=s(K,"CODE",{});var Je=r(G);Ne=d(Je,"model(input_ids)"),Je.forEach(t),K.forEach(t),Ae=l(V),N=s(V,"LI",{});var A=r(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=s(A,"CODE",{});var ze=r(se);$e=d(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=d(A," or "),H=s(A,"CODE",{});var mt=r(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(V),M=s(V,"LI",{});var re=r(M);Le=d(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(re,"CODE",{});var ft=r(W);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),re.forEach(t),V.forEach(t)},m(m,$){p(m,u,$),e(u,F),p(m,y,$),p(m,z,$),e(z,B),e(B,w),e(z,T),e(z,x),e(x,Me),p(m,he,$),p(m,q,$),e(q,ve),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,xe),p(m,D,$),p(m,P,$),e(P,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Oe),e(C,J),e(J,Q),e(C,Pe),e(C,G),e(G,Ne),e(E,Ae),e(E,N),e(N,ue),e(N,se),e(se,$e),e(N,me),e(N,H),e(H,Ie),e(E,qe),e(E,M),e(M,Le),e(M,W),e(W,Se)},d(m){m&&t(u),m&&t(y),m&&t(z),m&&t(he),m&&t(q),m&&t(D),m&&t(P),m&&t(R),m&&t(E)}}}function Cf(U){let u,F,y,z,B;return{c(){u=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),z=a("Module"),B=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=s(w,"P",{});var T=r(u);F=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var x=r(y);z=d(x,"Module"),x.forEach(t),B=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,F),e(u,y),e(y,z),e(u,B)},d(w){w&&t(u)}}}function jf(U){let u,F,y,z,B,w,T,x,Me,he,q,ve,te,Ce,oe,ne,je,xe,D,P,ye,R,E,C,Oe,J,Q,Pe,G,Ne,Ae,N,ue,se,$e,me,H,Ie,qe,M,Le,W,Se;return{c(){u=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),y=i(),z=n("ul"),B=n("li"),w=a("having all inputs as keyword arguments (like PyTorch models), or"),T=i(),x=n("li"),Me=a("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ve=a("This second option is useful when using "),te=n("code"),Ce=a("tf.keras.Model.fit"),oe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=a("model(inputs)"),xe=a("."),D=i(),P=n("p"),ye=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Oe=a("a single Tensor with "),J=n("code"),Q=a("input_ids"),Pe=a(" only and nothing else: "),G=n("code"),Ne=a("model(input_ids)"),Ae=i(),N=n("li"),ue=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),$e=a("model([input_ids, attention_mask])"),me=a(" or "),H=n("code"),Ie=a("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Se=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=r(u);F=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),y=l(m),z=s(m,"UL",{});var Te=r(z);B=s(Te,"LI",{});var ht=r(B);w=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),T=l(Te),x=s(Te,"LI",{});var Ke=r(x);Me=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),Te.forEach(t),he=l(m),q=s(m,"P",{});var j=r(q);ve=d(j,"This second option is useful when using "),te=s(j,"CODE",{});var fe=r(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=s(j,"CODE",{});var De=r(ne);je=d(De,"model(inputs)"),De.forEach(t),xe=d(j,"."),j.forEach(t),D=l(m),P=s(m,"P",{});var we=r(P);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=s(m,"UL",{});var V=r(E);C=s(V,"LI",{});var K=r(C);Oe=d(K,"a single Tensor with "),J=s(K,"CODE",{});var ut=r(J);Q=d(ut,"input_ids"),ut.forEach(t),Pe=d(K," only and nothing else: "),G=s(K,"CODE",{});var Je=r(G);Ne=d(Je,"model(input_ids)"),Je.forEach(t),K.forEach(t),Ae=l(V),N=s(V,"LI",{});var A=r(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=s(A,"CODE",{});var ze=r(se);$e=d(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=d(A," or "),H=s(A,"CODE",{});var mt=r(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(V),M=s(V,"LI",{});var re=r(M);Le=d(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(re,"CODE",{});var ft=r(W);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),re.forEach(t),V.forEach(t)},m(m,$){p(m,u,$),e(u,F),p(m,y,$),p(m,z,$),e(z,B),e(B,w),e(z,T),e(z,x),e(x,Me),p(m,he,$),p(m,q,$),e(q,ve),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,xe),p(m,D,$),p(m,P,$),e(P,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Oe),e(C,J),e(J,Q),e(C,Pe),e(C,G),e(G,Ne),e(E,Ae),e(E,N),e(N,ue),e(N,se),e(se,$e),e(N,me),e(N,H),e(H,Ie),e(E,qe),e(E,M),e(M,Le),e(M,W),e(W,Se)},d(m){m&&t(u),m&&t(y),m&&t(z),m&&t(he),m&&t(q),m&&t(D),m&&t(P),m&&t(R),m&&t(E)}}}function Of(U){let u,F,y,z,B;return{c(){u=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),z=a("Module"),B=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=s(w,"P",{});var T=r(u);F=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var x=r(y);z=d(x,"Module"),x.forEach(t),B=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,F),e(u,y),e(y,z),e(u,B)},d(w){w&&t(u)}}}function Pf(U){let u,F,y,z,B;return{c(){u=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),z=a("Module"),B=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=s(w,"P",{});var T=r(u);F=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var x=r(y);z=d(x,"Module"),x.forEach(t),B=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,F),e(u,y),e(y,z),e(u,B)},d(w){w&&t(u)}}}function Nf(U){let u,F,y,z,B;return{c(){u=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),z=a("Module"),B=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=s(w,"P",{});var T=r(u);F=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var x=r(y);z=d(x,"Module"),x.forEach(t),B=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,F),e(u,y),e(y,z),e(u,B)},d(w){w&&t(u)}}}function Af(U){let u,F,y,z,B,w,T,x,Me,he,q,ve,te,Ce,oe,ne,je,xe,D,P,ye,R,E,C,Oe,J,Q,Pe,G,Ne,Ae,N,ue,se,$e,me,H,Ie,qe,M,Le,W,Se,m,$,Te,ht,Ke,j,fe,De,we,V,K,ut,Je,A,ze,mt,re,ft,$d,qd,uo,Ed,mo,Md,Cd,jd,Ge,Od,qs,Pd,Nd,Es,Ad,Id,Un,Ld,Sd,Ta,_t,Nt,Ms,fo,Dd,Cs,Gd,wa,Rn,Wd,za,_o,Ba,gt,At,js,go,Ud,Os,Rd,Fa,ae,bo,Hd,bt,Vd,Hn,Kd,Jd,ko,Qd,Xd,Yd,kt,Zd,Vn,ei,ti,Kn,oi,ni,si,Ps,ri,ai,vo,xa,vt,It,Ns,yo,di,As,ii,$a,de,To,li,Is,ci,pi,Lt,Ls,hi,ui,Jn,mi,fi,_i,wo,gi,Qn,bi,ki,vi,Qe,zo,yi,Ss,Ti,wi,Ds,Xn,zi,Gs,Bi,qa,yt,St,Ws,Bo,Fi,Us,xi,Ea,ie,Fo,$i,xo,qi,Rs,Ei,Mi,Ci,Dt,Hs,ji,Oi,Yn,Pi,Ni,Ai,$o,Ii,Zn,Li,Si,Di,Xe,qo,Gi,Vs,Wi,Ui,Ks,es,Ri,Js,Hi,Ma,Tt,Gt,Qs,Eo,Vi,Xs,Ki,Ca,We,Ji,Ys,Qi,Xi,Zs,Yi,Zi,er,el,ja,Be,Mo,tl,Co,ol,ts,nl,sl,rl,jo,al,Oo,dl,il,ll,_e,Po,cl,wt,pl,os,hl,ul,tr,ml,fl,_l,Wt,gl,or,bl,kl,No,Oa,zt,Ut,nr,Ao,vl,sr,yl,Pa,Ue,Tl,ns,wl,zl,rr,Bl,Fl,ar,xl,Na,Fe,Io,$l,Lo,ql,ss,El,Ml,Cl,So,jl,Do,Ol,Pl,Nl,ge,Go,Al,Bt,Il,rs,Ll,Sl,dr,Dl,Gl,Wl,Rt,Ul,ir,Rl,Hl,Wo,Aa,Ft,Ht,lr,Uo,Vl,cr,Kl,Ia,xt,Ro,Jl,Ye,Ho,Ql,pr,Xl,Yl,Vo,La,$t,Vt,hr,Ko,Zl,ur,ec,Sa,le,Jo,tc,Qo,oc,as,nc,sc,rc,Xo,ac,Yo,dc,ic,lc,Kt,cc,be,Zo,pc,qt,hc,ds,uc,mc,mr,fc,_c,gc,Jt,bc,fr,kc,vc,en,Da,Et,Qt,_r,tn,yc,gr,Tc,Ga,ce,on,wc,nn,zc,is,Bc,Fc,xc,sn,$c,rn,qc,Ec,Mc,Xt,Cc,X,an,jc,Mt,Oc,ls,Pc,Nc,br,Ac,Ic,Lc,Yt,Sc,kr,Dc,Gc,vr,yr,Tr,wr,Wc,Uc,zr,Br,Fr,dn,Rc,xr,Hc,Vc,Wa,Ct,Zt,$r,ln,Kc,qr,Jc,Ua,I,cn,Qc,pn,Xc,cs,Yc,Zc,ep,hn,tp,un,op,np,sp,Er,rp,ap,Re,Mr,mn,dp,ip,Cr,fn,lp,cp,jr,_n,pp,hp,Or,gn,up,mp,ke,bn,fp,jt,_p,Pr,gp,bp,Nr,kp,vp,yp,eo,Tp,Ar,wp,zp,kn,Bp,Ze,vn,Fp,Ir,xp,$p,yn,qp,et,Tn,Ep,Lr,Mp,Cp,wn,Ra,Ot,to,Sr,zn,jp,Dr,Op,Ha,L,Bn,Pp,Fn,Np,ps,Ap,Ip,Lp,xn,Sp,$n,Dp,Gp,Wp,Gr,Up,Rp,He,Wr,qn,Hp,Vp,Ur,En,Kp,Jp,Rr,Mn,Qp,Xp,Hr,Cn,Yp,Zp,S,jn,eh,Pt,th,Vr,oh,nh,Kr,sh,rh,ah,oo,dh,Jr,ih,lh,Qr,Xr,Yr,Zr,ch,ph,ea,ta,oa,na,hh,uh,sa,ra,aa,da,mh,fh,ia,la,On,no,so,ca,Pn,_h,pa,gh,bh,ha,kh,vh,tt,Nn,yh,ua,Th,wh,An,zh,ot,In,Bh,ma,Fh,xh,Ln,Va;return w=new pe({}),R=new pe({}),we=new pe({}),fo=new pe({}),_o=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),go=new pe({}),bo=new O({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),vo=new Ve({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

# Initializing a Blenderbot facebook/blenderbot-3B style configuration
configuration = BlenderbotConfig()

# Initializing a model from the facebook/blenderbot-3B style configuration
model = BlenderbotModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotModel, BlenderbotConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Blenderbot facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),yo=new pe({}),To=new O({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),zo=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new pe({}),Fo=new O({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),qo=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Eo=new pe({}),Mo=new O({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16781/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_blenderbot.py#L1082"}}),Po=new O({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_blenderbot.py#L1120",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new ho({props:{$$slots:{default:[qf]},$$scope:{ctx:U}}}),No=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),Ao=new pe({}),Io=new O({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16781/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_blenderbot.py#L1218"}}),Go=new O({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_blenderbot.py#L1275",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new ho({props:{$$slots:{default:[Ef]},$$scope:{ctx:U}}}),Wo=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)

inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)

NEXT_UTTERANCE = (
    "My friends are cool but they eat too many carbs.</s> <s>That's unfortunate. "
    "Are they trying to lose weight or are they just trying to be healthier?</s> "
    "<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors="pt")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot: That<span class="hljs-string">&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;That<span class="hljs-string">&#x27;s unfortunate. &quot;
...     &quot;Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt; &quot;
...     &quot;&lt;s&gt; I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),Uo=new pe({}),Ro=new O({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_blenderbot.py#L1411"}}),Ho=new O({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_blenderbot.py#L1442",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = BlenderbotForCausalLM.from_pretrained(
    "facebook/blenderbot-400M-distill", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),Ko=new pe({}),Jo=new O({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16781/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1109"}}),Kt=new ho({props:{$$slots:{default:[Mf]},$$scope:{ctx:U}}}),Zo=new O({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1134",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jt=new ho({props:{$$slots:{default:[Cf]},$$scope:{ctx:U}}}),en=new Ve({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = TFBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new pe({}),on=new O({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16781/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1208"}}),Xt=new ho({props:{$$slots:{default:[jf]},$$scope:{ctx:U}}}),an=new O({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1254",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yt=new ho({props:{$$slots:{default:[Of]},$$scope:{ctx:U}}}),ln=new pe({}),cn=new O({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16781/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1206"}}),bn=new O({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1141",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new ho({props:{$$slots:{default:[Pf]},$$scope:{ctx:U}}}),kn=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new O({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L962",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Tn=new O({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1025",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wn=new Ve({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),zn=new pe({}),Bn=new O({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16781/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1293"}}),jn=new O({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1141",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new ho({props:{$$slots:{default:[Nf]},$$scope:{ctx:U}}}),Pn=new pe({}),Nn=new O({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L962",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),In=new O({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/pr_16781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16781/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16781/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1297",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new Ve({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),F=i(),y=n("h1"),z=n("a"),B=n("span"),f(w.$$.fragment),T=i(),x=n("span"),Me=a("Blenderbot"),he=i(),q=n("p"),ve=n("strong"),te=a("DISCLAIMER:"),Ce=a(" If you see something strange, file a "),oe=n("a"),ne=a("Github Issue"),je=a(" ."),xe=i(),D=n("h2"),P=n("a"),ye=n("span"),f(R.$$.fragment),E=i(),C=n("span"),Oe=a("Overview"),J=i(),Q=n("p"),Pe=a("The Blender chatbot model was proposed in "),G=n("a"),Ne=a("Recipes for building an open-domain chatbot"),Ae=a(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),ue=n("p"),se=a("The abstract of the paper is the following:"),$e=i(),me=n("p"),H=n("em"),Ie=a(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),M=n("p"),Le=a("This model was contributed by "),W=n("a"),Se=a("sshleifer"),m=a(". The authors\u2019 code can be found "),$=n("a"),Te=a("here"),ht=a(" ."),Ke=i(),j=n("h2"),fe=n("a"),De=n("span"),f(we.$$.fragment),V=i(),K=n("span"),ut=a("Implementation Notes"),Je=i(),A=n("ul"),ze=n("li"),mt=a("Blenderbot uses a standard "),re=n("a"),ft=a("seq2seq model transformer"),$d=a(" based architecture."),qd=i(),uo=n("li"),Ed=a("Available checkpoints can be found in the "),mo=n("a"),Md=a("model hub"),Cd=a("."),jd=i(),Ge=n("li"),Od=a("This is the "),qs=n("em"),Pd=a("default"),Nd=a(` Blenderbot model class. However, some smaller checkpoints, such as
`),Es=n("code"),Ad=a("facebook/blenderbot_small_90M"),Id=a(`, have a different architecture and consequently should be used with
`),Un=n("a"),Ld=a("BlenderbotSmall"),Sd=a("."),Ta=i(),_t=n("h2"),Nt=n("a"),Ms=n("span"),f(fo.$$.fragment),Dd=i(),Cs=n("span"),Gd=a("Usage"),wa=i(),Rn=n("p"),Wd=a("Here is an example of model usage:"),za=i(),f(_o.$$.fragment),Ba=i(),gt=n("h2"),At=n("a"),js=n("span"),f(go.$$.fragment),Ud=i(),Os=n("span"),Rd=a("BlenderbotConfig"),Fa=i(),ae=n("div"),f(bo.$$.fragment),Hd=i(),bt=n("p"),Vd=a("This is the configuration class to store the configuration of a "),Hn=n("a"),Kd=a("BlenderbotModel"),Jd=a(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=n("a"),Qd=a("facebook/blenderbot-3B"),Xd=a(" architecture."),Yd=i(),kt=n("p"),Zd=a("Configuration objects inherit from "),Vn=n("a"),ei=a("PretrainedConfig"),ti=a(` and can be used to control the model outputs. Read the
documentation from `),Kn=n("a"),oi=a("PretrainedConfig"),ni=a(" for more information."),si=i(),Ps=n("p"),ri=a("Example:"),ai=i(),f(vo.$$.fragment),xa=i(),vt=n("h2"),It=n("a"),Ns=n("span"),f(yo.$$.fragment),di=i(),As=n("span"),ii=a("BlenderbotTokenizer"),$a=i(),de=n("div"),f(To.$$.fragment),li=i(),Is=n("p"),ci=a("Construct a Blenderbot tokenizer."),pi=i(),Lt=n("p"),Ls=n("code"),hi=a("Blenderbot"),ui=a(" is nearly identical to "),Jn=n("a"),mi=a("RobertaTokenizer"),fi=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),_i=i(),wo=n("p"),gi=a("Refer to superclass "),Qn=n("a"),bi=a("RobertaTokenizer"),ki=a(" for usage examples and documentation concerning parameters."),vi=i(),Qe=n("div"),f(zo.$$.fragment),yi=i(),Ss=n("p"),Ti=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wi=i(),Ds=n("ul"),Xn=n("li"),zi=a("single sequence: "),Gs=n("code"),Bi=a("X </s>"),qa=i(),yt=n("h2"),St=n("a"),Ws=n("span"),f(Bo.$$.fragment),Fi=i(),Us=n("span"),xi=a("BlenderbotTokenizerFast"),Ea=i(),ie=n("div"),f(Fo.$$.fragment),$i=i(),xo=n("p"),qi=a("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Rs=n("em"),Ei=a("tokenizers"),Mi=a(" library)."),Ci=i(),Dt=n("p"),Hs=n("code"),ji=a("BlenderbotFast"),Oi=a(" is nearly identical to "),Yn=n("a"),Pi=a("RobertaTokenizerFast"),Ni=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ai=i(),$o=n("p"),Ii=a("Refer to superclass "),Zn=n("a"),Li=a("RobertaTokenizerFast"),Si=a(" for usage examples and documentation concerning parameters."),Di=i(),Xe=n("div"),f(qo.$$.fragment),Gi=i(),Vs=n("p"),Wi=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ui=i(),Ks=n("ul"),es=n("li"),Ri=a("single sequence: "),Js=n("code"),Hi=a("X </s>"),Ma=i(),Tt=n("h2"),Gt=n("a"),Qs=n("span"),f(Eo.$$.fragment),Vi=i(),Xs=n("span"),Ki=a("BlenderbotModel"),Ca=i(),We=n("p"),Ji=a("See "),Ys=n("code"),Qi=a("transformers.BartModel"),Xi=a(" for arguments to "),Zs=n("em"),Yi=a("forward"),Zi=a(" and "),er=n("em"),el=a("generate"),ja=i(),Be=n("div"),f(Mo.$$.fragment),tl=i(),Co=n("p"),ol=a(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ts=n("a"),nl=a("PreTrainedModel"),sl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl=i(),jo=n("p"),al=a("This model is also a PyTorch "),Oo=n("a"),dl=a("torch.nn.Module"),il=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ll=i(),_e=n("div"),f(Po.$$.fragment),cl=i(),wt=n("p"),pl=a("The "),os=n("a"),hl=a("BlenderbotModel"),ul=a(" forward method, overrides the "),tr=n("code"),ml=a("__call__"),fl=a(" special method."),_l=i(),f(Wt.$$.fragment),gl=i(),or=n("p"),bl=a("Example:"),kl=i(),f(No.$$.fragment),Oa=i(),zt=n("h2"),Ut=n("a"),nr=n("span"),f(Ao.$$.fragment),vl=i(),sr=n("span"),yl=a("BlenderbotForConditionalGeneration"),Pa=i(),Ue=n("p"),Tl=a("See "),ns=n("a"),wl=a("BartForConditionalGeneration"),zl=a(" for arguments to "),rr=n("em"),Bl=a("forward"),Fl=a(" and "),ar=n("em"),xl=a("generate"),Na=i(),Fe=n("div"),f(Io.$$.fragment),$l=i(),Lo=n("p"),ql=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ss=n("a"),El=a("PreTrainedModel"),Ml=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl=i(),So=n("p"),jl=a("This model is also a PyTorch "),Do=n("a"),Ol=a("torch.nn.Module"),Pl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl=i(),ge=n("div"),f(Go.$$.fragment),Al=i(),Bt=n("p"),Il=a("The "),rs=n("a"),Ll=a("BlenderbotForConditionalGeneration"),Sl=a(" forward method, overrides the "),dr=n("code"),Dl=a("__call__"),Gl=a(" special method."),Wl=i(),f(Rt.$$.fragment),Ul=i(),ir=n("p"),Rl=a("Conversation example:"),Hl=i(),f(Wo.$$.fragment),Aa=i(),Ft=n("h2"),Ht=n("a"),lr=n("span"),f(Uo.$$.fragment),Vl=i(),cr=n("span"),Kl=a("BlenderbotForCausalLM"),Ia=i(),xt=n("div"),f(Ro.$$.fragment),Jl=i(),Ye=n("div"),f(Ho.$$.fragment),Ql=i(),pr=n("p"),Xl=a("Example:"),Yl=i(),f(Vo.$$.fragment),La=i(),$t=n("h2"),Vt=n("a"),hr=n("span"),f(Ko.$$.fragment),Zl=i(),ur=n("span"),ec=a("TFBlenderbotModel"),Sa=i(),le=n("div"),f(Jo.$$.fragment),tc=i(),Qo=n("p"),oc=a(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),as=n("a"),nc=a("TFPreTrainedModel"),sc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc=i(),Xo=n("p"),ac=a("This model is also a "),Yo=n("a"),dc=a("tf.keras.Model"),ic=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lc=i(),f(Kt.$$.fragment),cc=i(),be=n("div"),f(Zo.$$.fragment),pc=i(),qt=n("p"),hc=a("The "),ds=n("a"),uc=a("TFBlenderbotModel"),mc=a(" forward method, overrides the "),mr=n("code"),fc=a("__call__"),_c=a(" special method."),gc=i(),f(Jt.$$.fragment),bc=i(),fr=n("p"),kc=a("Example:"),vc=i(),f(en.$$.fragment),Da=i(),Et=n("h2"),Qt=n("a"),_r=n("span"),f(tn.$$.fragment),yc=i(),gr=n("span"),Tc=a("TFBlenderbotForConditionalGeneration"),Ga=i(),ce=n("div"),f(on.$$.fragment),wc=i(),nn=n("p"),zc=a(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),is=n("a"),Bc=a("TFPreTrainedModel"),Fc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc=i(),sn=n("p"),$c=a("This model is also a "),rn=n("a"),qc=a("tf.keras.Model"),Ec=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mc=i(),f(Xt.$$.fragment),Cc=i(),X=n("div"),f(an.$$.fragment),jc=i(),Mt=n("p"),Oc=a("The "),ls=n("a"),Pc=a("TFBlenderbotForConditionalGeneration"),Nc=a(" forward method, overrides the "),br=n("code"),Ac=a("__call__"),Ic=a(" special method."),Lc=i(),f(Yt.$$.fragment),Sc=i(),kr=n("p"),Dc=a("Conversation example::"),Gc=i(),vr=n("blockquote"),yr=n("blockquote"),Tr=n("blockquote"),wr=n("p"),Wc=a(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Uc=i(),zr=n("blockquote"),Br=n("blockquote"),Fr=n("blockquote"),dn=n("p"),Rc=a(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),xr=n("s"),Hc=a(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Vc=a(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Wa=i(),Ct=n("h2"),Zt=n("a"),$r=n("span"),f(ln.$$.fragment),Kc=i(),qr=n("span"),Jc=a("FlaxBlenderbotModel"),Ua=i(),I=n("div"),f(cn.$$.fragment),Qc=i(),pn=n("p"),Xc=a(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=n("a"),Yc=a("FlaxPreTrainedModel"),Zc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=i(),hn=n("p"),tp=a(`This model is also a Flax Linen
`),un=n("a"),op=a("flax.nn.Module"),np=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sp=i(),Er=n("p"),rp=a("Finally, this model supports inherent JAX features such as:"),ap=i(),Re=n("ul"),Mr=n("li"),mn=n("a"),dp=a("Just-In-Time (JIT) compilation"),ip=i(),Cr=n("li"),fn=n("a"),lp=a("Automatic Differentiation"),cp=i(),jr=n("li"),_n=n("a"),pp=a("Vectorization"),hp=i(),Or=n("li"),gn=n("a"),up=a("Parallelization"),mp=i(),ke=n("div"),f(bn.$$.fragment),fp=i(),jt=n("p"),_p=a("The "),Pr=n("code"),gp=a("FlaxBlenderbotPreTrainedModel"),bp=a(" forward method, overrides the "),Nr=n("code"),kp=a("__call__"),vp=a(" special method."),yp=i(),f(eo.$$.fragment),Tp=i(),Ar=n("p"),wp=a("Example:"),zp=i(),f(kn.$$.fragment),Bp=i(),Ze=n("div"),f(vn.$$.fragment),Fp=i(),Ir=n("p"),xp=a("Example:"),$p=i(),f(yn.$$.fragment),qp=i(),et=n("div"),f(Tn.$$.fragment),Ep=i(),Lr=n("p"),Mp=a("Example:"),Cp=i(),f(wn.$$.fragment),Ra=i(),Ot=n("h2"),to=n("a"),Sr=n("span"),f(zn.$$.fragment),jp=i(),Dr=n("span"),Op=a("FlaxBlenderbotForConditionalGeneration"),Ha=i(),L=n("div"),f(Bn.$$.fragment),Pp=i(),Fn=n("p"),Np=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ps=n("a"),Ap=a("FlaxPreTrainedModel"),Ip=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp=i(),xn=n("p"),Sp=a(`This model is also a Flax Linen
`),$n=n("a"),Dp=a("flax.nn.Module"),Gp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wp=i(),Gr=n("p"),Up=a("Finally, this model supports inherent JAX features such as:"),Rp=i(),He=n("ul"),Wr=n("li"),qn=n("a"),Hp=a("Just-In-Time (JIT) compilation"),Vp=i(),Ur=n("li"),En=n("a"),Kp=a("Automatic Differentiation"),Jp=i(),Rr=n("li"),Mn=n("a"),Qp=a("Vectorization"),Xp=i(),Hr=n("li"),Cn=n("a"),Yp=a("Parallelization"),Zp=i(),S=n("div"),f(jn.$$.fragment),eh=i(),Pt=n("p"),th=a("The "),Vr=n("code"),oh=a("FlaxBlenderbotPreTrainedModel"),nh=a(" forward method, overrides the "),Kr=n("code"),sh=a("__call__"),rh=a(" special method."),ah=i(),f(oo.$$.fragment),dh=i(),Jr=n("p"),ih=a("Conversation example::"),lh=i(),Qr=n("blockquote"),Xr=n("blockquote"),Yr=n("blockquote"),Zr=n("p"),ch=a("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),ph=i(),ea=n("blockquote"),ta=n("blockquote"),oa=n("blockquote"),na=n("p"),hh=a(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),uh=i(),sa=n("blockquote"),ra=n("blockquote"),aa=n("blockquote"),da=n("p"),mh=a(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),fh=i(),ia=n("blockquote"),la=n("blockquote"),On=n("blockquote"),no=n("h1"),so=n("a"),ca=n("span"),f(Pn.$$.fragment),_h=i(),pa=n("span"),gh=a("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),bh=i(),ha=n("p"),kh=a(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),vh=i(),tt=n("div"),f(Nn.$$.fragment),yh=i(),ua=n("p"),Th=a("Example:"),wh=i(),f(An.$$.fragment),zh=i(),ot=n("div"),f(In.$$.fragment),Bh=i(),ma=n("p"),Fh=a("Example:"),xh=i(),f(Ln.$$.fragment),this.h()},l(o){const h=xf('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),F=l(o),y=s(o,"H1",{class:!0});var Sn=r(y);z=s(Sn,"A",{id:!0,class:!0,href:!0});var fa=r(z);B=s(fa,"SPAN",{});var _a=r(B);_(w.$$.fragment,_a),_a.forEach(t),fa.forEach(t),T=l(Sn),x=s(Sn,"SPAN",{});var ga=r(x);Me=d(ga,"Blenderbot"),ga.forEach(t),Sn.forEach(t),he=l(o),q=s(o,"P",{});var ro=r(q);ve=s(ro,"STRONG",{});var ba=r(ve);te=d(ba,"DISCLAIMER:"),ba.forEach(t),Ce=d(ro," If you see something strange, file a "),oe=s(ro,"A",{href:!0,rel:!0});var ka=r(oe);ne=d(ka,"Github Issue"),ka.forEach(t),je=d(ro," ."),ro.forEach(t),xe=l(o),D=s(o,"H2",{class:!0});var Dn=r(D);P=s(Dn,"A",{id:!0,class:!0,href:!0});var Eh=r(P);ye=s(Eh,"SPAN",{});var Mh=r(ye);_(R.$$.fragment,Mh),Mh.forEach(t),Eh.forEach(t),E=l(Dn),C=s(Dn,"SPAN",{});var Ch=r(C);Oe=d(Ch,"Overview"),Ch.forEach(t),Dn.forEach(t),J=l(o),Q=s(o,"P",{});var Ka=r(Q);Pe=d(Ka,"The Blender chatbot model was proposed in "),G=s(Ka,"A",{href:!0,rel:!0});var jh=r(G);Ne=d(jh,"Recipes for building an open-domain chatbot"),jh.forEach(t),Ae=d(Ka,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Ka.forEach(t),N=l(o),ue=s(o,"P",{});var Oh=r(ue);se=d(Oh,"The abstract of the paper is the following:"),Oh.forEach(t),$e=l(o),me=s(o,"P",{});var Ph=r(me);H=s(Ph,"EM",{});var Nh=r(H);Ie=d(Nh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Nh.forEach(t),Ph.forEach(t),qe=l(o),M=s(o,"P",{});var hs=r(M);Le=d(hs,"This model was contributed by "),W=s(hs,"A",{href:!0,rel:!0});var Ah=r(W);Se=d(Ah,"sshleifer"),Ah.forEach(t),m=d(hs,". The authors\u2019 code can be found "),$=s(hs,"A",{href:!0,rel:!0});var Ih=r($);Te=d(Ih,"here"),Ih.forEach(t),ht=d(hs," ."),hs.forEach(t),Ke=l(o),j=s(o,"H2",{class:!0});var Ja=r(j);fe=s(Ja,"A",{id:!0,class:!0,href:!0});var Lh=r(fe);De=s(Lh,"SPAN",{});var Sh=r(De);_(we.$$.fragment,Sh),Sh.forEach(t),Lh.forEach(t),V=l(Ja),K=s(Ja,"SPAN",{});var Dh=r(K);ut=d(Dh,"Implementation Notes"),Dh.forEach(t),Ja.forEach(t),Je=l(o),A=s(o,"UL",{});var us=r(A);ze=s(us,"LI",{});var Qa=r(ze);mt=d(Qa,"Blenderbot uses a standard "),re=s(Qa,"A",{href:!0,rel:!0});var Gh=r(re);ft=d(Gh,"seq2seq model transformer"),Gh.forEach(t),$d=d(Qa," based architecture."),Qa.forEach(t),qd=l(us),uo=s(us,"LI",{});var Xa=r(uo);Ed=d(Xa,"Available checkpoints can be found in the "),mo=s(Xa,"A",{href:!0,rel:!0});var Wh=r(mo);Md=d(Wh,"model hub"),Wh.forEach(t),Cd=d(Xa,"."),Xa.forEach(t),jd=l(us),Ge=s(us,"LI",{});var ao=r(Ge);Od=d(ao,"This is the "),qs=s(ao,"EM",{});var Uh=r(qs);Pd=d(Uh,"default"),Uh.forEach(t),Nd=d(ao,` Blenderbot model class. However, some smaller checkpoints, such as
`),Es=s(ao,"CODE",{});var Rh=r(Es);Ad=d(Rh,"facebook/blenderbot_small_90M"),Rh.forEach(t),Id=d(ao,`, have a different architecture and consequently should be used with
`),Un=s(ao,"A",{href:!0});var Hh=r(Un);Ld=d(Hh,"BlenderbotSmall"),Hh.forEach(t),Sd=d(ao,"."),ao.forEach(t),us.forEach(t),Ta=l(o),_t=s(o,"H2",{class:!0});var Ya=r(_t);Nt=s(Ya,"A",{id:!0,class:!0,href:!0});var Vh=r(Nt);Ms=s(Vh,"SPAN",{});var Kh=r(Ms);_(fo.$$.fragment,Kh),Kh.forEach(t),Vh.forEach(t),Dd=l(Ya),Cs=s(Ya,"SPAN",{});var Jh=r(Cs);Gd=d(Jh,"Usage"),Jh.forEach(t),Ya.forEach(t),wa=l(o),Rn=s(o,"P",{});var Qh=r(Rn);Wd=d(Qh,"Here is an example of model usage:"),Qh.forEach(t),za=l(o),_(_o.$$.fragment,o),Ba=l(o),gt=s(o,"H2",{class:!0});var Za=r(gt);At=s(Za,"A",{id:!0,class:!0,href:!0});var Xh=r(At);js=s(Xh,"SPAN",{});var Yh=r(js);_(go.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),Ud=l(Za),Os=s(Za,"SPAN",{});var Zh=r(Os);Rd=d(Zh,"BlenderbotConfig"),Zh.forEach(t),Za.forEach(t),Fa=l(o),ae=s(o,"DIV",{class:!0});var nt=r(ae);_(bo.$$.fragment,nt),Hd=l(nt),bt=s(nt,"P",{});var ms=r(bt);Vd=d(ms,"This is the configuration class to store the configuration of a "),Hn=s(ms,"A",{href:!0});var eu=r(Hn);Kd=d(eu,"BlenderbotModel"),eu.forEach(t),Jd=d(ms,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=s(ms,"A",{href:!0,rel:!0});var tu=r(ko);Qd=d(tu,"facebook/blenderbot-3B"),tu.forEach(t),Xd=d(ms," architecture."),ms.forEach(t),Yd=l(nt),kt=s(nt,"P",{});var fs=r(kt);Zd=d(fs,"Configuration objects inherit from "),Vn=s(fs,"A",{href:!0});var ou=r(Vn);ei=d(ou,"PretrainedConfig"),ou.forEach(t),ti=d(fs,` and can be used to control the model outputs. Read the
documentation from `),Kn=s(fs,"A",{href:!0});var nu=r(Kn);oi=d(nu,"PretrainedConfig"),nu.forEach(t),ni=d(fs," for more information."),fs.forEach(t),si=l(nt),Ps=s(nt,"P",{});var su=r(Ps);ri=d(su,"Example:"),su.forEach(t),ai=l(nt),_(vo.$$.fragment,nt),nt.forEach(t),xa=l(o),vt=s(o,"H2",{class:!0});var ed=r(vt);It=s(ed,"A",{id:!0,class:!0,href:!0});var ru=r(It);Ns=s(ru,"SPAN",{});var au=r(Ns);_(yo.$$.fragment,au),au.forEach(t),ru.forEach(t),di=l(ed),As=s(ed,"SPAN",{});var du=r(As);ii=d(du,"BlenderbotTokenizer"),du.forEach(t),ed.forEach(t),$a=l(o),de=s(o,"DIV",{class:!0});var st=r(de);_(To.$$.fragment,st),li=l(st),Is=s(st,"P",{});var iu=r(Is);ci=d(iu,"Construct a Blenderbot tokenizer."),iu.forEach(t),pi=l(st),Lt=s(st,"P",{});var va=r(Lt);Ls=s(va,"CODE",{});var lu=r(Ls);hi=d(lu,"Blenderbot"),lu.forEach(t),ui=d(va," is nearly identical to "),Jn=s(va,"A",{href:!0});var cu=r(Jn);mi=d(cu,"RobertaTokenizer"),cu.forEach(t),fi=d(va,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),va.forEach(t),_i=l(st),wo=s(st,"P",{});var td=r(wo);gi=d(td,"Refer to superclass "),Qn=s(td,"A",{href:!0});var pu=r(Qn);bi=d(pu,"RobertaTokenizer"),pu.forEach(t),ki=d(td," for usage examples and documentation concerning parameters."),td.forEach(t),vi=l(st),Qe=s(st,"DIV",{class:!0});var _s=r(Qe);_(zo.$$.fragment,_s),yi=l(_s),Ss=s(_s,"P",{});var hu=r(Ss);Ti=d(hu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),hu.forEach(t),wi=l(_s),Ds=s(_s,"UL",{});var uu=r(Ds);Xn=s(uu,"LI",{});var $h=r(Xn);zi=d($h,"single sequence: "),Gs=s($h,"CODE",{});var mu=r(Gs);Bi=d(mu,"X </s>"),mu.forEach(t),$h.forEach(t),uu.forEach(t),_s.forEach(t),st.forEach(t),qa=l(o),yt=s(o,"H2",{class:!0});var od=r(yt);St=s(od,"A",{id:!0,class:!0,href:!0});var fu=r(St);Ws=s(fu,"SPAN",{});var _u=r(Ws);_(Bo.$$.fragment,_u),_u.forEach(t),fu.forEach(t),Fi=l(od),Us=s(od,"SPAN",{});var gu=r(Us);xi=d(gu,"BlenderbotTokenizerFast"),gu.forEach(t),od.forEach(t),Ea=l(o),ie=s(o,"DIV",{class:!0});var rt=r(ie);_(Fo.$$.fragment,rt),$i=l(rt),xo=s(rt,"P",{});var nd=r(xo);qi=d(nd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Rs=s(nd,"EM",{});var bu=r(Rs);Ei=d(bu,"tokenizers"),bu.forEach(t),Mi=d(nd," library)."),nd.forEach(t),Ci=l(rt),Dt=s(rt,"P",{});var ya=r(Dt);Hs=s(ya,"CODE",{});var ku=r(Hs);ji=d(ku,"BlenderbotFast"),ku.forEach(t),Oi=d(ya," is nearly identical to "),Yn=s(ya,"A",{href:!0});var vu=r(Yn);Pi=d(vu,"RobertaTokenizerFast"),vu.forEach(t),Ni=d(ya,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),ya.forEach(t),Ai=l(rt),$o=s(rt,"P",{});var sd=r($o);Ii=d(sd,"Refer to superclass "),Zn=s(sd,"A",{href:!0});var yu=r(Zn);Li=d(yu,"RobertaTokenizerFast"),yu.forEach(t),Si=d(sd," for usage examples and documentation concerning parameters."),sd.forEach(t),Di=l(rt),Xe=s(rt,"DIV",{class:!0});var gs=r(Xe);_(qo.$$.fragment,gs),Gi=l(gs),Vs=s(gs,"P",{});var Tu=r(Vs);Wi=d(Tu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Tu.forEach(t),Ui=l(gs),Ks=s(gs,"UL",{});var wu=r(Ks);es=s(wu,"LI",{});var qh=r(es);Ri=d(qh,"single sequence: "),Js=s(qh,"CODE",{});var zu=r(Js);Hi=d(zu,"X </s>"),zu.forEach(t),qh.forEach(t),wu.forEach(t),gs.forEach(t),rt.forEach(t),Ma=l(o),Tt=s(o,"H2",{class:!0});var rd=r(Tt);Gt=s(rd,"A",{id:!0,class:!0,href:!0});var Bu=r(Gt);Qs=s(Bu,"SPAN",{});var Fu=r(Qs);_(Eo.$$.fragment,Fu),Fu.forEach(t),Bu.forEach(t),Vi=l(rd),Xs=s(rd,"SPAN",{});var xu=r(Xs);Ki=d(xu,"BlenderbotModel"),xu.forEach(t),rd.forEach(t),Ca=l(o),We=s(o,"P",{});var Gn=r(We);Ji=d(Gn,"See "),Ys=s(Gn,"CODE",{});var $u=r(Ys);Qi=d($u,"transformers.BartModel"),$u.forEach(t),Xi=d(Gn," for arguments to "),Zs=s(Gn,"EM",{});var qu=r(Zs);Yi=d(qu,"forward"),qu.forEach(t),Zi=d(Gn," and "),er=s(Gn,"EM",{});var Eu=r(er);el=d(Eu,"generate"),Eu.forEach(t),Gn.forEach(t),ja=l(o),Be=s(o,"DIV",{class:!0});var io=r(Be);_(Mo.$$.fragment,io),tl=l(io),Co=s(io,"P",{});var ad=r(Co);ol=d(ad,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ts=s(ad,"A",{href:!0});var Mu=r(ts);nl=d(Mu,"PreTrainedModel"),Mu.forEach(t),sl=d(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),rl=l(io),jo=s(io,"P",{});var dd=r(jo);al=d(dd,"This model is also a PyTorch "),Oo=s(dd,"A",{href:!0,rel:!0});var Cu=r(Oo);dl=d(Cu,"torch.nn.Module"),Cu.forEach(t),il=d(dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dd.forEach(t),ll=l(io),_e=s(io,"DIV",{class:!0});var at=r(_e);_(Po.$$.fragment,at),cl=l(at),wt=s(at,"P",{});var bs=r(wt);pl=d(bs,"The "),os=s(bs,"A",{href:!0});var ju=r(os);hl=d(ju,"BlenderbotModel"),ju.forEach(t),ul=d(bs," forward method, overrides the "),tr=s(bs,"CODE",{});var Ou=r(tr);ml=d(Ou,"__call__"),Ou.forEach(t),fl=d(bs," special method."),bs.forEach(t),_l=l(at),_(Wt.$$.fragment,at),gl=l(at),or=s(at,"P",{});var Pu=r(or);bl=d(Pu,"Example:"),Pu.forEach(t),kl=l(at),_(No.$$.fragment,at),at.forEach(t),io.forEach(t),Oa=l(o),zt=s(o,"H2",{class:!0});var id=r(zt);Ut=s(id,"A",{id:!0,class:!0,href:!0});var Nu=r(Ut);nr=s(Nu,"SPAN",{});var Au=r(nr);_(Ao.$$.fragment,Au),Au.forEach(t),Nu.forEach(t),vl=l(id),sr=s(id,"SPAN",{});var Iu=r(sr);yl=d(Iu,"BlenderbotForConditionalGeneration"),Iu.forEach(t),id.forEach(t),Pa=l(o),Ue=s(o,"P",{});var Wn=r(Ue);Tl=d(Wn,"See "),ns=s(Wn,"A",{href:!0});var Lu=r(ns);wl=d(Lu,"BartForConditionalGeneration"),Lu.forEach(t),zl=d(Wn," for arguments to "),rr=s(Wn,"EM",{});var Su=r(rr);Bl=d(Su,"forward"),Su.forEach(t),Fl=d(Wn," and "),ar=s(Wn,"EM",{});var Du=r(ar);xl=d(Du,"generate"),Du.forEach(t),Wn.forEach(t),Na=l(o),Fe=s(o,"DIV",{class:!0});var lo=r(Fe);_(Io.$$.fragment,lo),$l=l(lo),Lo=s(lo,"P",{});var ld=r(Lo);ql=d(ld,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ss=s(ld,"A",{href:!0});var Gu=r(ss);El=d(Gu,"PreTrainedModel"),Gu.forEach(t),Ml=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),Cl=l(lo),So=s(lo,"P",{});var cd=r(So);jl=d(cd,"This model is also a PyTorch "),Do=s(cd,"A",{href:!0,rel:!0});var Wu=r(Do);Ol=d(Wu,"torch.nn.Module"),Wu.forEach(t),Pl=d(cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cd.forEach(t),Nl=l(lo),ge=s(lo,"DIV",{class:!0});var dt=r(ge);_(Go.$$.fragment,dt),Al=l(dt),Bt=s(dt,"P",{});var ks=r(Bt);Il=d(ks,"The "),rs=s(ks,"A",{href:!0});var Uu=r(rs);Ll=d(Uu,"BlenderbotForConditionalGeneration"),Uu.forEach(t),Sl=d(ks," forward method, overrides the "),dr=s(ks,"CODE",{});var Ru=r(dr);Dl=d(Ru,"__call__"),Ru.forEach(t),Gl=d(ks," special method."),ks.forEach(t),Wl=l(dt),_(Rt.$$.fragment,dt),Ul=l(dt),ir=s(dt,"P",{});var Hu=r(ir);Rl=d(Hu,"Conversation example:"),Hu.forEach(t),Hl=l(dt),_(Wo.$$.fragment,dt),dt.forEach(t),lo.forEach(t),Aa=l(o),Ft=s(o,"H2",{class:!0});var pd=r(Ft);Ht=s(pd,"A",{id:!0,class:!0,href:!0});var Vu=r(Ht);lr=s(Vu,"SPAN",{});var Ku=r(lr);_(Uo.$$.fragment,Ku),Ku.forEach(t),Vu.forEach(t),Vl=l(pd),cr=s(pd,"SPAN",{});var Ju=r(cr);Kl=d(Ju,"BlenderbotForCausalLM"),Ju.forEach(t),pd.forEach(t),Ia=l(o),xt=s(o,"DIV",{class:!0});var hd=r(xt);_(Ro.$$.fragment,hd),Jl=l(hd),Ye=s(hd,"DIV",{class:!0});var vs=r(Ye);_(Ho.$$.fragment,vs),Ql=l(vs),pr=s(vs,"P",{});var Qu=r(pr);Xl=d(Qu,"Example:"),Qu.forEach(t),Yl=l(vs),_(Vo.$$.fragment,vs),vs.forEach(t),hd.forEach(t),La=l(o),$t=s(o,"H2",{class:!0});var ud=r($t);Vt=s(ud,"A",{id:!0,class:!0,href:!0});var Xu=r(Vt);hr=s(Xu,"SPAN",{});var Yu=r(hr);_(Ko.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Zl=l(ud),ur=s(ud,"SPAN",{});var Zu=r(ur);ec=d(Zu,"TFBlenderbotModel"),Zu.forEach(t),ud.forEach(t),Sa=l(o),le=s(o,"DIV",{class:!0});var it=r(le);_(Jo.$$.fragment,it),tc=l(it),Qo=s(it,"P",{});var md=r(Qo);oc=d(md,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),as=s(md,"A",{href:!0});var em=r(as);nc=d(em,"TFPreTrainedModel"),em.forEach(t),sc=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),rc=l(it),Xo=s(it,"P",{});var fd=r(Xo);ac=d(fd,"This model is also a "),Yo=s(fd,"A",{href:!0,rel:!0});var tm=r(Yo);dc=d(tm,"tf.keras.Model"),tm.forEach(t),ic=d(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),lc=l(it),_(Kt.$$.fragment,it),cc=l(it),be=s(it,"DIV",{class:!0});var lt=r(be);_(Zo.$$.fragment,lt),pc=l(lt),qt=s(lt,"P",{});var ys=r(qt);hc=d(ys,"The "),ds=s(ys,"A",{href:!0});var om=r(ds);uc=d(om,"TFBlenderbotModel"),om.forEach(t),mc=d(ys," forward method, overrides the "),mr=s(ys,"CODE",{});var nm=r(mr);fc=d(nm,"__call__"),nm.forEach(t),_c=d(ys," special method."),ys.forEach(t),gc=l(lt),_(Jt.$$.fragment,lt),bc=l(lt),fr=s(lt,"P",{});var sm=r(fr);kc=d(sm,"Example:"),sm.forEach(t),vc=l(lt),_(en.$$.fragment,lt),lt.forEach(t),it.forEach(t),Da=l(o),Et=s(o,"H2",{class:!0});var _d=r(Et);Qt=s(_d,"A",{id:!0,class:!0,href:!0});var rm=r(Qt);_r=s(rm,"SPAN",{});var am=r(_r);_(tn.$$.fragment,am),am.forEach(t),rm.forEach(t),yc=l(_d),gr=s(_d,"SPAN",{});var dm=r(gr);Tc=d(dm,"TFBlenderbotForConditionalGeneration"),dm.forEach(t),_d.forEach(t),Ga=l(o),ce=s(o,"DIV",{class:!0});var ct=r(ce);_(on.$$.fragment,ct),wc=l(ct),nn=s(ct,"P",{});var gd=r(nn);zc=d(gd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),is=s(gd,"A",{href:!0});var im=r(is);Bc=d(im,"TFPreTrainedModel"),im.forEach(t),Fc=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),xc=l(ct),sn=s(ct,"P",{});var bd=r(sn);$c=d(bd,"This model is also a "),rn=s(bd,"A",{href:!0,rel:!0});var lm=r(rn);qc=d(lm,"tf.keras.Model"),lm.forEach(t),Ec=d(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Mc=l(ct),_(Xt.$$.fragment,ct),Cc=l(ct),X=s(ct,"DIV",{class:!0});var Ee=r(X);_(an.$$.fragment,Ee),jc=l(Ee),Mt=s(Ee,"P",{});var Ts=r(Mt);Oc=d(Ts,"The "),ls=s(Ts,"A",{href:!0});var cm=r(ls);Pc=d(cm,"TFBlenderbotForConditionalGeneration"),cm.forEach(t),Nc=d(Ts," forward method, overrides the "),br=s(Ts,"CODE",{});var pm=r(br);Ac=d(pm,"__call__"),pm.forEach(t),Ic=d(Ts," special method."),Ts.forEach(t),Lc=l(Ee),_(Yt.$$.fragment,Ee),Sc=l(Ee),kr=s(Ee,"P",{});var hm=r(kr);Dc=d(hm,"Conversation example::"),hm.forEach(t),Gc=l(Ee),vr=s(Ee,"BLOCKQUOTE",{});var um=r(vr);yr=s(um,"BLOCKQUOTE",{});var mm=r(yr);Tr=s(mm,"BLOCKQUOTE",{});var fm=r(Tr);wr=s(fm,"P",{});var _m=r(wr);Wc=d(_m,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),_m.forEach(t),fm.forEach(t),mm.forEach(t),um.forEach(t),Uc=l(Ee),zr=s(Ee,"BLOCKQUOTE",{});var gm=r(zr);Br=s(gm,"BLOCKQUOTE",{});var bm=r(Br);Fr=s(bm,"BLOCKQUOTE",{});var km=r(Fr);dn=s(km,"P",{});var kd=r(dn);Rc=d(kd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),xr=s(kd,"S",{});var vm=r(xr);Hc=d(vm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),vm.forEach(t),Vc=d(kd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),kd.forEach(t),km.forEach(t),bm.forEach(t),gm.forEach(t),Ee.forEach(t),ct.forEach(t),Wa=l(o),Ct=s(o,"H2",{class:!0});var vd=r(Ct);Zt=s(vd,"A",{id:!0,class:!0,href:!0});var ym=r(Zt);$r=s(ym,"SPAN",{});var Tm=r($r);_(ln.$$.fragment,Tm),Tm.forEach(t),ym.forEach(t),Kc=l(vd),qr=s(vd,"SPAN",{});var wm=r(qr);Jc=d(wm,"FlaxBlenderbotModel"),wm.forEach(t),vd.forEach(t),Ua=l(o),I=s(o,"DIV",{class:!0});var Y=r(I);_(cn.$$.fragment,Y),Qc=l(Y),pn=s(Y,"P",{});var yd=r(pn);Xc=d(yd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=s(yd,"A",{href:!0});var zm=r(cs);Yc=d(zm,"FlaxPreTrainedModel"),zm.forEach(t),Zc=d(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd.forEach(t),ep=l(Y),hn=s(Y,"P",{});var Td=r(hn);tp=d(Td,`This model is also a Flax Linen
`),un=s(Td,"A",{href:!0,rel:!0});var Bm=r(un);op=d(Bm,"flax.nn.Module"),Bm.forEach(t),np=d(Td,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Td.forEach(t),sp=l(Y),Er=s(Y,"P",{});var Fm=r(Er);rp=d(Fm,"Finally, this model supports inherent JAX features such as:"),Fm.forEach(t),ap=l(Y),Re=s(Y,"UL",{});var co=r(Re);Mr=s(co,"LI",{});var xm=r(Mr);mn=s(xm,"A",{href:!0,rel:!0});var $m=r(mn);dp=d($m,"Just-In-Time (JIT) compilation"),$m.forEach(t),xm.forEach(t),ip=l(co),Cr=s(co,"LI",{});var qm=r(Cr);fn=s(qm,"A",{href:!0,rel:!0});var Em=r(fn);lp=d(Em,"Automatic Differentiation"),Em.forEach(t),qm.forEach(t),cp=l(co),jr=s(co,"LI",{});var Mm=r(jr);_n=s(Mm,"A",{href:!0,rel:!0});var Cm=r(_n);pp=d(Cm,"Vectorization"),Cm.forEach(t),Mm.forEach(t),hp=l(co),Or=s(co,"LI",{});var jm=r(Or);gn=s(jm,"A",{href:!0,rel:!0});var Om=r(gn);up=d(Om,"Parallelization"),Om.forEach(t),jm.forEach(t),co.forEach(t),mp=l(Y),ke=s(Y,"DIV",{class:!0});var pt=r(ke);_(bn.$$.fragment,pt),fp=l(pt),jt=s(pt,"P",{});var ws=r(jt);_p=d(ws,"The "),Pr=s(ws,"CODE",{});var Pm=r(Pr);gp=d(Pm,"FlaxBlenderbotPreTrainedModel"),Pm.forEach(t),bp=d(ws," forward method, overrides the "),Nr=s(ws,"CODE",{});var Nm=r(Nr);kp=d(Nm,"__call__"),Nm.forEach(t),vp=d(ws," special method."),ws.forEach(t),yp=l(pt),_(eo.$$.fragment,pt),Tp=l(pt),Ar=s(pt,"P",{});var Am=r(Ar);wp=d(Am,"Example:"),Am.forEach(t),zp=l(pt),_(kn.$$.fragment,pt),pt.forEach(t),Bp=l(Y),Ze=s(Y,"DIV",{class:!0});var zs=r(Ze);_(vn.$$.fragment,zs),Fp=l(zs),Ir=s(zs,"P",{});var Im=r(Ir);xp=d(Im,"Example:"),Im.forEach(t),$p=l(zs),_(yn.$$.fragment,zs),zs.forEach(t),qp=l(Y),et=s(Y,"DIV",{class:!0});var Bs=r(et);_(Tn.$$.fragment,Bs),Ep=l(Bs),Lr=s(Bs,"P",{});var Lm=r(Lr);Mp=d(Lm,"Example:"),Lm.forEach(t),Cp=l(Bs),_(wn.$$.fragment,Bs),Bs.forEach(t),Y.forEach(t),Ra=l(o),Ot=s(o,"H2",{class:!0});var wd=r(Ot);to=s(wd,"A",{id:!0,class:!0,href:!0});var Sm=r(to);Sr=s(Sm,"SPAN",{});var Dm=r(Sr);_(zn.$$.fragment,Dm),Dm.forEach(t),Sm.forEach(t),jp=l(wd),Dr=s(wd,"SPAN",{});var Gm=r(Dr);Op=d(Gm,"FlaxBlenderbotForConditionalGeneration"),Gm.forEach(t),wd.forEach(t),Ha=l(o),L=s(o,"DIV",{class:!0});var Z=r(L);_(Bn.$$.fragment,Z),Pp=l(Z),Fn=s(Z,"P",{});var zd=r(Fn);Np=d(zd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ps=s(zd,"A",{href:!0});var Wm=r(ps);Ap=d(Wm,"FlaxPreTrainedModel"),Wm.forEach(t),Ip=d(zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd.forEach(t),Lp=l(Z),xn=s(Z,"P",{});var Bd=r(xn);Sp=d(Bd,`This model is also a Flax Linen
`),$n=s(Bd,"A",{href:!0,rel:!0});var Um=r($n);Dp=d(Um,"flax.nn.Module"),Um.forEach(t),Gp=d(Bd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bd.forEach(t),Wp=l(Z),Gr=s(Z,"P",{});var Rm=r(Gr);Up=d(Rm,"Finally, this model supports inherent JAX features such as:"),Rm.forEach(t),Rp=l(Z),He=s(Z,"UL",{});var po=r(He);Wr=s(po,"LI",{});var Hm=r(Wr);qn=s(Hm,"A",{href:!0,rel:!0});var Vm=r(qn);Hp=d(Vm,"Just-In-Time (JIT) compilation"),Vm.forEach(t),Hm.forEach(t),Vp=l(po),Ur=s(po,"LI",{});var Km=r(Ur);En=s(Km,"A",{href:!0,rel:!0});var Jm=r(En);Kp=d(Jm,"Automatic Differentiation"),Jm.forEach(t),Km.forEach(t),Jp=l(po),Rr=s(po,"LI",{});var Qm=r(Rr);Mn=s(Qm,"A",{href:!0,rel:!0});var Xm=r(Mn);Qp=d(Xm,"Vectorization"),Xm.forEach(t),Qm.forEach(t),Xp=l(po),Hr=s(po,"LI",{});var Ym=r(Hr);Cn=s(Ym,"A",{href:!0,rel:!0});var Zm=r(Cn);Yp=d(Zm,"Parallelization"),Zm.forEach(t),Ym.forEach(t),po.forEach(t),Zp=l(Z),S=s(Z,"DIV",{class:!0});var ee=r(S);_(jn.$$.fragment,ee),eh=l(ee),Pt=s(ee,"P",{});var Fs=r(Pt);th=d(Fs,"The "),Vr=s(Fs,"CODE",{});var ef=r(Vr);oh=d(ef,"FlaxBlenderbotPreTrainedModel"),ef.forEach(t),nh=d(Fs," forward method, overrides the "),Kr=s(Fs,"CODE",{});var tf=r(Kr);sh=d(tf,"__call__"),tf.forEach(t),rh=d(Fs," special method."),Fs.forEach(t),ah=l(ee),_(oo.$$.fragment,ee),dh=l(ee),Jr=s(ee,"P",{});var of=r(Jr);ih=d(of,"Conversation example::"),of.forEach(t),lh=l(ee),Qr=s(ee,"BLOCKQUOTE",{});var nf=r(Qr);Xr=s(nf,"BLOCKQUOTE",{});var sf=r(Xr);Yr=s(sf,"BLOCKQUOTE",{});var rf=r(Yr);Zr=s(rf,"P",{});var af=r(Zr);ch=d(af,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),af.forEach(t),rf.forEach(t),sf.forEach(t),nf.forEach(t),ph=l(ee),ea=s(ee,"BLOCKQUOTE",{});var df=r(ea);ta=s(df,"BLOCKQUOTE",{});var lf=r(ta);oa=s(lf,"BLOCKQUOTE",{});var cf=r(oa);na=s(cf,"P",{});var pf=r(na);hh=d(pf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),pf.forEach(t),cf.forEach(t),lf.forEach(t),df.forEach(t),uh=l(ee),sa=s(ee,"BLOCKQUOTE",{});var hf=r(sa);ra=s(hf,"BLOCKQUOTE",{});var uf=r(ra);aa=s(uf,"BLOCKQUOTE",{});var mf=r(aa);da=s(mf,"P",{});var ff=r(da);mh=d(ff,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),ff.forEach(t),mf.forEach(t),uf.forEach(t),hf.forEach(t),fh=l(ee),ia=s(ee,"BLOCKQUOTE",{});var _f=r(ia);la=s(_f,"BLOCKQUOTE",{});var gf=r(la);On=s(gf,"BLOCKQUOTE",{});var Fd=r(On);no=s(Fd,"H1",{class:!0});var xd=r(no);so=s(xd,"A",{id:!0,class:!0,href:!0});var bf=r(so);ca=s(bf,"SPAN",{});var kf=r(ca);_(Pn.$$.fragment,kf),kf.forEach(t),bf.forEach(t),_h=l(xd),pa=s(xd,"SPAN",{});var vf=r(pa);gh=d(vf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),vf.forEach(t),xd.forEach(t),bh=l(Fd),ha=s(Fd,"P",{});var yf=r(ha);kh=d(yf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),yf.forEach(t),Fd.forEach(t),gf.forEach(t),_f.forEach(t),ee.forEach(t),vh=l(Z),tt=s(Z,"DIV",{class:!0});var xs=r(tt);_(Nn.$$.fragment,xs),yh=l(xs),ua=s(xs,"P",{});var Tf=r(ua);Th=d(Tf,"Example:"),Tf.forEach(t),wh=l(xs),_(An.$$.fragment,xs),xs.forEach(t),zh=l(Z),ot=s(Z,"DIV",{class:!0});var $s=r(ot);_(In.$$.fragment,$s),Bh=l($s),ma=s($s,"P",{});var wf=r(ma);Fh=d(wf,"Example:"),wf.forEach(t),xh=l($s),_(Ln.$$.fragment,$s),$s.forEach(t),Z.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(If)),c(z,"id","blenderbot"),c(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(z,"href","#blenderbot"),c(y,"class","relative group"),c(oe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(oe,"rel","nofollow"),c(P,"id","overview"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#overview"),c(D,"class","relative group"),c(G,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(G,"rel","nofollow"),c(W,"href","https://huggingface.co/sshleifer"),c(W,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(fe,"id","implementation-notes"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#implementation-notes"),c(j,"class","relative group"),c(re,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(re,"rel","nofollow"),c(mo,"href","https://huggingface.co/models?search=blenderbot"),c(mo,"rel","nofollow"),c(Un,"href","blenderbot-small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(At,"id","transformers.BlenderbotConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Hn,"href","/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ko,"href","https://huggingface.co/facebook/blenderbot-3B"),c(ko,"rel","nofollow"),c(Vn,"href","/docs/transformers/pr_16781/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kn,"href","/docs/transformers/pr_16781/en/main_classes/configuration#transformers.PretrainedConfig"),c(ae,"class","docstring"),c(It,"id","transformers.BlenderbotTokenizer"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotTokenizer"),c(vt,"class","relative group"),c(Jn,"href","/docs/transformers/pr_16781/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/pr_16781/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qe,"class","docstring"),c(de,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Yn,"href","/docs/transformers/pr_16781/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Zn,"href","/docs/transformers/pr_16781/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(ie,"class","docstring"),c(Gt,"id","transformers.BlenderbotModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(ts,"href","/docs/transformers/pr_16781/en/main_classes/model#transformers.PreTrainedModel"),c(Oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Oo,"rel","nofollow"),c(os,"href","/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"class","docstring"),c(Be,"class","docstring"),c(Ut,"id","transformers.BlenderbotForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.BlenderbotForConditionalGeneration"),c(zt,"class","relative group"),c(ns,"href","/docs/transformers/pr_16781/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(ss,"href","/docs/transformers/pr_16781/en/main_classes/model#transformers.PreTrainedModel"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(rs,"href","/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(ge,"class","docstring"),c(Fe,"class","docstring"),c(Ht,"id","transformers.BlenderbotForCausalLM"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.BlenderbotForCausalLM"),c(Ft,"class","relative group"),c(Ye,"class","docstring"),c(xt,"class","docstring"),c(Vt,"id","transformers.TFBlenderbotModel"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.TFBlenderbotModel"),c($t,"class","relative group"),c(as,"href","/docs/transformers/pr_16781/en/main_classes/model#transformers.TFPreTrainedModel"),c(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Yo,"rel","nofollow"),c(ds,"href","/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(le,"class","docstring"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Et,"class","relative group"),c(is,"href","/docs/transformers/pr_16781/en/main_classes/model#transformers.TFPreTrainedModel"),c(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(rn,"rel","nofollow"),c(ls,"href","/docs/transformers/pr_16781/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(ce,"class","docstring"),c(Zt,"id","transformers.FlaxBlenderbotModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxBlenderbotModel"),c(Ct,"class","relative group"),c(cs,"href","/docs/transformers/pr_16781/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(ke,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(to,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Ot,"class","relative group"),c(ps,"href","/docs/transformers/pr_16781/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($n,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(En,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Mn,"rel","nofollow"),c(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cn,"rel","nofollow"),c(so,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","relative group"),c(S,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(L,"class","docstring")},m(o,h){e(document.head,u),p(o,F,h),p(o,y,h),e(y,z),e(z,B),g(w,B,null),e(y,T),e(y,x),e(x,Me),p(o,he,h),p(o,q,h),e(q,ve),e(ve,te),e(q,Ce),e(q,oe),e(oe,ne),e(q,je),p(o,xe,h),p(o,D,h),e(D,P),e(P,ye),g(R,ye,null),e(D,E),e(D,C),e(C,Oe),p(o,J,h),p(o,Q,h),e(Q,Pe),e(Q,G),e(G,Ne),e(Q,Ae),p(o,N,h),p(o,ue,h),e(ue,se),p(o,$e,h),p(o,me,h),e(me,H),e(H,Ie),p(o,qe,h),p(o,M,h),e(M,Le),e(M,W),e(W,Se),e(M,m),e(M,$),e($,Te),e(M,ht),p(o,Ke,h),p(o,j,h),e(j,fe),e(fe,De),g(we,De,null),e(j,V),e(j,K),e(K,ut),p(o,Je,h),p(o,A,h),e(A,ze),e(ze,mt),e(ze,re),e(re,ft),e(ze,$d),e(A,qd),e(A,uo),e(uo,Ed),e(uo,mo),e(mo,Md),e(uo,Cd),e(A,jd),e(A,Ge),e(Ge,Od),e(Ge,qs),e(qs,Pd),e(Ge,Nd),e(Ge,Es),e(Es,Ad),e(Ge,Id),e(Ge,Un),e(Un,Ld),e(Ge,Sd),p(o,Ta,h),p(o,_t,h),e(_t,Nt),e(Nt,Ms),g(fo,Ms,null),e(_t,Dd),e(_t,Cs),e(Cs,Gd),p(o,wa,h),p(o,Rn,h),e(Rn,Wd),p(o,za,h),g(_o,o,h),p(o,Ba,h),p(o,gt,h),e(gt,At),e(At,js),g(go,js,null),e(gt,Ud),e(gt,Os),e(Os,Rd),p(o,Fa,h),p(o,ae,h),g(bo,ae,null),e(ae,Hd),e(ae,bt),e(bt,Vd),e(bt,Hn),e(Hn,Kd),e(bt,Jd),e(bt,ko),e(ko,Qd),e(bt,Xd),e(ae,Yd),e(ae,kt),e(kt,Zd),e(kt,Vn),e(Vn,ei),e(kt,ti),e(kt,Kn),e(Kn,oi),e(kt,ni),e(ae,si),e(ae,Ps),e(Ps,ri),e(ae,ai),g(vo,ae,null),p(o,xa,h),p(o,vt,h),e(vt,It),e(It,Ns),g(yo,Ns,null),e(vt,di),e(vt,As),e(As,ii),p(o,$a,h),p(o,de,h),g(To,de,null),e(de,li),e(de,Is),e(Is,ci),e(de,pi),e(de,Lt),e(Lt,Ls),e(Ls,hi),e(Lt,ui),e(Lt,Jn),e(Jn,mi),e(Lt,fi),e(de,_i),e(de,wo),e(wo,gi),e(wo,Qn),e(Qn,bi),e(wo,ki),e(de,vi),e(de,Qe),g(zo,Qe,null),e(Qe,yi),e(Qe,Ss),e(Ss,Ti),e(Qe,wi),e(Qe,Ds),e(Ds,Xn),e(Xn,zi),e(Xn,Gs),e(Gs,Bi),p(o,qa,h),p(o,yt,h),e(yt,St),e(St,Ws),g(Bo,Ws,null),e(yt,Fi),e(yt,Us),e(Us,xi),p(o,Ea,h),p(o,ie,h),g(Fo,ie,null),e(ie,$i),e(ie,xo),e(xo,qi),e(xo,Rs),e(Rs,Ei),e(xo,Mi),e(ie,Ci),e(ie,Dt),e(Dt,Hs),e(Hs,ji),e(Dt,Oi),e(Dt,Yn),e(Yn,Pi),e(Dt,Ni),e(ie,Ai),e(ie,$o),e($o,Ii),e($o,Zn),e(Zn,Li),e($o,Si),e(ie,Di),e(ie,Xe),g(qo,Xe,null),e(Xe,Gi),e(Xe,Vs),e(Vs,Wi),e(Xe,Ui),e(Xe,Ks),e(Ks,es),e(es,Ri),e(es,Js),e(Js,Hi),p(o,Ma,h),p(o,Tt,h),e(Tt,Gt),e(Gt,Qs),g(Eo,Qs,null),e(Tt,Vi),e(Tt,Xs),e(Xs,Ki),p(o,Ca,h),p(o,We,h),e(We,Ji),e(We,Ys),e(Ys,Qi),e(We,Xi),e(We,Zs),e(Zs,Yi),e(We,Zi),e(We,er),e(er,el),p(o,ja,h),p(o,Be,h),g(Mo,Be,null),e(Be,tl),e(Be,Co),e(Co,ol),e(Co,ts),e(ts,nl),e(Co,sl),e(Be,rl),e(Be,jo),e(jo,al),e(jo,Oo),e(Oo,dl),e(jo,il),e(Be,ll),e(Be,_e),g(Po,_e,null),e(_e,cl),e(_e,wt),e(wt,pl),e(wt,os),e(os,hl),e(wt,ul),e(wt,tr),e(tr,ml),e(wt,fl),e(_e,_l),g(Wt,_e,null),e(_e,gl),e(_e,or),e(or,bl),e(_e,kl),g(No,_e,null),p(o,Oa,h),p(o,zt,h),e(zt,Ut),e(Ut,nr),g(Ao,nr,null),e(zt,vl),e(zt,sr),e(sr,yl),p(o,Pa,h),p(o,Ue,h),e(Ue,Tl),e(Ue,ns),e(ns,wl),e(Ue,zl),e(Ue,rr),e(rr,Bl),e(Ue,Fl),e(Ue,ar),e(ar,xl),p(o,Na,h),p(o,Fe,h),g(Io,Fe,null),e(Fe,$l),e(Fe,Lo),e(Lo,ql),e(Lo,ss),e(ss,El),e(Lo,Ml),e(Fe,Cl),e(Fe,So),e(So,jl),e(So,Do),e(Do,Ol),e(So,Pl),e(Fe,Nl),e(Fe,ge),g(Go,ge,null),e(ge,Al),e(ge,Bt),e(Bt,Il),e(Bt,rs),e(rs,Ll),e(Bt,Sl),e(Bt,dr),e(dr,Dl),e(Bt,Gl),e(ge,Wl),g(Rt,ge,null),e(ge,Ul),e(ge,ir),e(ir,Rl),e(ge,Hl),g(Wo,ge,null),p(o,Aa,h),p(o,Ft,h),e(Ft,Ht),e(Ht,lr),g(Uo,lr,null),e(Ft,Vl),e(Ft,cr),e(cr,Kl),p(o,Ia,h),p(o,xt,h),g(Ro,xt,null),e(xt,Jl),e(xt,Ye),g(Ho,Ye,null),e(Ye,Ql),e(Ye,pr),e(pr,Xl),e(Ye,Yl),g(Vo,Ye,null),p(o,La,h),p(o,$t,h),e($t,Vt),e(Vt,hr),g(Ko,hr,null),e($t,Zl),e($t,ur),e(ur,ec),p(o,Sa,h),p(o,le,h),g(Jo,le,null),e(le,tc),e(le,Qo),e(Qo,oc),e(Qo,as),e(as,nc),e(Qo,sc),e(le,rc),e(le,Xo),e(Xo,ac),e(Xo,Yo),e(Yo,dc),e(Xo,ic),e(le,lc),g(Kt,le,null),e(le,cc),e(le,be),g(Zo,be,null),e(be,pc),e(be,qt),e(qt,hc),e(qt,ds),e(ds,uc),e(qt,mc),e(qt,mr),e(mr,fc),e(qt,_c),e(be,gc),g(Jt,be,null),e(be,bc),e(be,fr),e(fr,kc),e(be,vc),g(en,be,null),p(o,Da,h),p(o,Et,h),e(Et,Qt),e(Qt,_r),g(tn,_r,null),e(Et,yc),e(Et,gr),e(gr,Tc),p(o,Ga,h),p(o,ce,h),g(on,ce,null),e(ce,wc),e(ce,nn),e(nn,zc),e(nn,is),e(is,Bc),e(nn,Fc),e(ce,xc),e(ce,sn),e(sn,$c),e(sn,rn),e(rn,qc),e(sn,Ec),e(ce,Mc),g(Xt,ce,null),e(ce,Cc),e(ce,X),g(an,X,null),e(X,jc),e(X,Mt),e(Mt,Oc),e(Mt,ls),e(ls,Pc),e(Mt,Nc),e(Mt,br),e(br,Ac),e(Mt,Ic),e(X,Lc),g(Yt,X,null),e(X,Sc),e(X,kr),e(kr,Dc),e(X,Gc),e(X,vr),e(vr,yr),e(yr,Tr),e(Tr,wr),e(wr,Wc),e(X,Uc),e(X,zr),e(zr,Br),e(Br,Fr),e(Fr,dn),e(dn,Rc),e(dn,xr),e(xr,Hc),e(dn,Vc),p(o,Wa,h),p(o,Ct,h),e(Ct,Zt),e(Zt,$r),g(ln,$r,null),e(Ct,Kc),e(Ct,qr),e(qr,Jc),p(o,Ua,h),p(o,I,h),g(cn,I,null),e(I,Qc),e(I,pn),e(pn,Xc),e(pn,cs),e(cs,Yc),e(pn,Zc),e(I,ep),e(I,hn),e(hn,tp),e(hn,un),e(un,op),e(hn,np),e(I,sp),e(I,Er),e(Er,rp),e(I,ap),e(I,Re),e(Re,Mr),e(Mr,mn),e(mn,dp),e(Re,ip),e(Re,Cr),e(Cr,fn),e(fn,lp),e(Re,cp),e(Re,jr),e(jr,_n),e(_n,pp),e(Re,hp),e(Re,Or),e(Or,gn),e(gn,up),e(I,mp),e(I,ke),g(bn,ke,null),e(ke,fp),e(ke,jt),e(jt,_p),e(jt,Pr),e(Pr,gp),e(jt,bp),e(jt,Nr),e(Nr,kp),e(jt,vp),e(ke,yp),g(eo,ke,null),e(ke,Tp),e(ke,Ar),e(Ar,wp),e(ke,zp),g(kn,ke,null),e(I,Bp),e(I,Ze),g(vn,Ze,null),e(Ze,Fp),e(Ze,Ir),e(Ir,xp),e(Ze,$p),g(yn,Ze,null),e(I,qp),e(I,et),g(Tn,et,null),e(et,Ep),e(et,Lr),e(Lr,Mp),e(et,Cp),g(wn,et,null),p(o,Ra,h),p(o,Ot,h),e(Ot,to),e(to,Sr),g(zn,Sr,null),e(Ot,jp),e(Ot,Dr),e(Dr,Op),p(o,Ha,h),p(o,L,h),g(Bn,L,null),e(L,Pp),e(L,Fn),e(Fn,Np),e(Fn,ps),e(ps,Ap),e(Fn,Ip),e(L,Lp),e(L,xn),e(xn,Sp),e(xn,$n),e($n,Dp),e(xn,Gp),e(L,Wp),e(L,Gr),e(Gr,Up),e(L,Rp),e(L,He),e(He,Wr),e(Wr,qn),e(qn,Hp),e(He,Vp),e(He,Ur),e(Ur,En),e(En,Kp),e(He,Jp),e(He,Rr),e(Rr,Mn),e(Mn,Qp),e(He,Xp),e(He,Hr),e(Hr,Cn),e(Cn,Yp),e(L,Zp),e(L,S),g(jn,S,null),e(S,eh),e(S,Pt),e(Pt,th),e(Pt,Vr),e(Vr,oh),e(Pt,nh),e(Pt,Kr),e(Kr,sh),e(Pt,rh),e(S,ah),g(oo,S,null),e(S,dh),e(S,Jr),e(Jr,ih),e(S,lh),e(S,Qr),e(Qr,Xr),e(Xr,Yr),e(Yr,Zr),e(Zr,ch),e(S,ph),e(S,ea),e(ea,ta),e(ta,oa),e(oa,na),e(na,hh),e(S,uh),e(S,sa),e(sa,ra),e(ra,aa),e(aa,da),e(da,mh),e(S,fh),e(S,ia),e(ia,la),e(la,On),e(On,no),e(no,so),e(so,ca),g(Pn,ca,null),e(no,_h),e(no,pa),e(pa,gh),e(On,bh),e(On,ha),e(ha,kh),e(L,vh),e(L,tt),g(Nn,tt,null),e(tt,yh),e(tt,ua),e(ua,Th),e(tt,wh),g(An,tt,null),e(L,zh),e(L,ot),g(In,ot,null),e(ot,Bh),e(ot,ma),e(ma,Fh),e(ot,xh),g(Ln,ot,null),Va=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Wt.$set(Sn);const fa={};h&2&&(fa.$$scope={dirty:h,ctx:o}),Rt.$set(fa);const _a={};h&2&&(_a.$$scope={dirty:h,ctx:o}),Kt.$set(_a);const ga={};h&2&&(ga.$$scope={dirty:h,ctx:o}),Jt.$set(ga);const ro={};h&2&&(ro.$$scope={dirty:h,ctx:o}),Xt.$set(ro);const ba={};h&2&&(ba.$$scope={dirty:h,ctx:o}),Yt.$set(ba);const ka={};h&2&&(ka.$$scope={dirty:h,ctx:o}),eo.$set(ka);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:o}),oo.$set(Dn)},i(o){Va||(b(w.$$.fragment,o),b(R.$$.fragment,o),b(we.$$.fragment,o),b(fo.$$.fragment,o),b(_o.$$.fragment,o),b(go.$$.fragment,o),b(bo.$$.fragment,o),b(vo.$$.fragment,o),b(yo.$$.fragment,o),b(To.$$.fragment,o),b(zo.$$.fragment,o),b(Bo.$$.fragment,o),b(Fo.$$.fragment,o),b(qo.$$.fragment,o),b(Eo.$$.fragment,o),b(Mo.$$.fragment,o),b(Po.$$.fragment,o),b(Wt.$$.fragment,o),b(No.$$.fragment,o),b(Ao.$$.fragment,o),b(Io.$$.fragment,o),b(Go.$$.fragment,o),b(Rt.$$.fragment,o),b(Wo.$$.fragment,o),b(Uo.$$.fragment,o),b(Ro.$$.fragment,o),b(Ho.$$.fragment,o),b(Vo.$$.fragment,o),b(Ko.$$.fragment,o),b(Jo.$$.fragment,o),b(Kt.$$.fragment,o),b(Zo.$$.fragment,o),b(Jt.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(on.$$.fragment,o),b(Xt.$$.fragment,o),b(an.$$.fragment,o),b(Yt.$$.fragment,o),b(ln.$$.fragment,o),b(cn.$$.fragment,o),b(bn.$$.fragment,o),b(eo.$$.fragment,o),b(kn.$$.fragment,o),b(vn.$$.fragment,o),b(yn.$$.fragment,o),b(Tn.$$.fragment,o),b(wn.$$.fragment,o),b(zn.$$.fragment,o),b(Bn.$$.fragment,o),b(jn.$$.fragment,o),b(oo.$$.fragment,o),b(Pn.$$.fragment,o),b(Nn.$$.fragment,o),b(An.$$.fragment,o),b(In.$$.fragment,o),b(Ln.$$.fragment,o),Va=!0)},o(o){k(w.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(vo.$$.fragment,o),k(yo.$$.fragment,o),k(To.$$.fragment,o),k(zo.$$.fragment,o),k(Bo.$$.fragment,o),k(Fo.$$.fragment,o),k(qo.$$.fragment,o),k(Eo.$$.fragment,o),k(Mo.$$.fragment,o),k(Po.$$.fragment,o),k(Wt.$$.fragment,o),k(No.$$.fragment,o),k(Ao.$$.fragment,o),k(Io.$$.fragment,o),k(Go.$$.fragment,o),k(Rt.$$.fragment,o),k(Wo.$$.fragment,o),k(Uo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Vo.$$.fragment,o),k(Ko.$$.fragment,o),k(Jo.$$.fragment,o),k(Kt.$$.fragment,o),k(Zo.$$.fragment,o),k(Jt.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(Xt.$$.fragment,o),k(an.$$.fragment,o),k(Yt.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(bn.$$.fragment,o),k(eo.$$.fragment,o),k(kn.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(zn.$$.fragment,o),k(Bn.$$.fragment,o),k(jn.$$.fragment,o),k(oo.$$.fragment,o),k(Pn.$$.fragment,o),k(Nn.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),k(Ln.$$.fragment,o),Va=!1},d(o){t(u),o&&t(F),o&&t(y),v(w),o&&t(he),o&&t(q),o&&t(xe),o&&t(D),v(R),o&&t(J),o&&t(Q),o&&t(N),o&&t(ue),o&&t($e),o&&t(me),o&&t(qe),o&&t(M),o&&t(Ke),o&&t(j),v(we),o&&t(Je),o&&t(A),o&&t(Ta),o&&t(_t),v(fo),o&&t(wa),o&&t(Rn),o&&t(za),v(_o,o),o&&t(Ba),o&&t(gt),v(go),o&&t(Fa),o&&t(ae),v(bo),v(vo),o&&t(xa),o&&t(vt),v(yo),o&&t($a),o&&t(de),v(To),v(zo),o&&t(qa),o&&t(yt),v(Bo),o&&t(Ea),o&&t(ie),v(Fo),v(qo),o&&t(Ma),o&&t(Tt),v(Eo),o&&t(Ca),o&&t(We),o&&t(ja),o&&t(Be),v(Mo),v(Po),v(Wt),v(No),o&&t(Oa),o&&t(zt),v(Ao),o&&t(Pa),o&&t(Ue),o&&t(Na),o&&t(Fe),v(Io),v(Go),v(Rt),v(Wo),o&&t(Aa),o&&t(Ft),v(Uo),o&&t(Ia),o&&t(xt),v(Ro),v(Ho),v(Vo),o&&t(La),o&&t($t),v(Ko),o&&t(Sa),o&&t(le),v(Jo),v(Kt),v(Zo),v(Jt),v(en),o&&t(Da),o&&t(Et),v(tn),o&&t(Ga),o&&t(ce),v(on),v(Xt),v(an),v(Yt),o&&t(Wa),o&&t(Ct),v(ln),o&&t(Ua),o&&t(I),v(cn),v(bn),v(eo),v(kn),v(vn),v(yn),v(Tn),v(wn),o&&t(Ra),o&&t(Ot),v(zn),o&&t(Ha),o&&t(L),v(Bn),v(jn),v(oo),v(Pn),v(Nn),v(An),v(In),v(Ln)}}}const If={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function Lf(U){return $f(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rf extends zf{constructor(u){super();Bf(this,u,Lf,Af,Ff,{})}}export{Rf as default,If as metadata};
