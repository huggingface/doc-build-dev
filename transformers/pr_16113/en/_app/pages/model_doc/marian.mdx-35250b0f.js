import{S as Qm,i as ef,s as tf,e as o,k as d,w as v,t as r,M as nf,c as s,d as t,m as l,a,x as k,h as i,b as c,F as e,g as h,y as T,q as M,o as b,B as y}from"../../chunks/vendor-4833417e.js";import{T as pn}from"../../chunks/Tip-fffd6df1.js";import{D as V}from"../../chunks/Docstring-4f315ed9.js";import{C as $e}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as he}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function of(C){let u,z,f,_,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);_=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(x,g){h(x,u,g),e(u,z),e(u,f),e(f,_),e(u,w)},d(x){x&&t(u)}}}function sf(C){let u,z,f,_,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);_=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(x,g){h(x,u,g),e(u,z),e(u,f),e(f,_),e(u,w)},d(x){x&&t(u)}}}function af(C){let u,z,f,_,w,x,g,$,Ae,ue,q,ve,X,Se,Q,ee,Oe,je,G,A,qe,L,E,F,te,ne,ke,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,S,We,O,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),_=o("ul"),w=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),q=o("p"),ve=r("This second option is useful when using "),X=o("code"),Se=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Oe=r("model(inputs)"),je=r("."),G=d(),A=o("p"),qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),L=d(),E=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),S=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),_=s(m,"UL",{});var be=a(_);w=s(be,"LI",{});var nt=a(w);x=i(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),g=l(be),$=s(be,"LI",{});var ye=a($);Ae=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),be.forEach(t),ue=l(m),q=s(m,"P",{});var D=a(q);ve=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var ot=a(X);Se=i(ot,"tf.keras.Model.fit"),ot.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var st=a(ee);Oe=i(st,"model(inputs)"),st.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var Re=a(A);qe=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),L=l(m),E=s(m,"UL",{});var I=a(E);F=s(I,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var at=a(ne);ke=i(at,"input_ids"),at.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Be=a(J);P=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(I),N=s(I,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var rt=a(oe);Me=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var it=a(ae);re=i(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),U.forEach(t),Ue=l(I),S=s(I,"LI",{});var de=a(S);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(de,"CODE",{});var xe=a(O);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),I.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,_,j),e(_,w),e(w,x),e(_,g),e(_,$),e($,Ae),h(m,ue,j),h(m,q,j),e(q,ve),e(q,X),e(X,Se),e(q,Q),e(q,ee),e(ee,Oe),e(q,je),h(m,G,j),h(m,A,j),e(A,qe),h(m,L,j),h(m,E,j),e(E,F),e(F,te),e(F,ne),e(ne,ke),e(F,He),e(F,J),e(J,P),e(E,Te),e(E,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(E,Ue),e(E,S),e(S,We),e(S,O),e(O,H)},d(m){m&&t(u),m&&t(f),m&&t(_),m&&t(ue),m&&t(q),m&&t(G),m&&t(A),m&&t(L),m&&t(E)}}}function rf(C){let u,z,f,_,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);_=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(x,g){h(x,u,g),e(u,z),e(u,f),e(f,_),e(u,w)},d(x){x&&t(u)}}}function df(C){let u,z,f,_,w,x,g,$,Ae,ue,q,ve,X,Se,Q,ee,Oe,je,G,A,qe,L,E,F,te,ne,ke,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,S,We,O,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),_=o("ul"),w=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),q=o("p"),ve=r("This second option is useful when using "),X=o("code"),Se=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Oe=r("model(inputs)"),je=r("."),G=d(),A=o("p"),qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),L=d(),E=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),S=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),_=s(m,"UL",{});var be=a(_);w=s(be,"LI",{});var nt=a(w);x=i(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),g=l(be),$=s(be,"LI",{});var ye=a($);Ae=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),be.forEach(t),ue=l(m),q=s(m,"P",{});var D=a(q);ve=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var ot=a(X);Se=i(ot,"tf.keras.Model.fit"),ot.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var st=a(ee);Oe=i(st,"model(inputs)"),st.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var Re=a(A);qe=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),L=l(m),E=s(m,"UL",{});var I=a(E);F=s(I,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var at=a(ne);ke=i(at,"input_ids"),at.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Be=a(J);P=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(I),N=s(I,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var rt=a(oe);Me=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var it=a(ae);re=i(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),U.forEach(t),Ue=l(I),S=s(I,"LI",{});var de=a(S);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(de,"CODE",{});var xe=a(O);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),I.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,_,j),e(_,w),e(w,x),e(_,g),e(_,$),e($,Ae),h(m,ue,j),h(m,q,j),e(q,ve),e(q,X),e(X,Se),e(q,Q),e(q,ee),e(ee,Oe),e(q,je),h(m,G,j),h(m,A,j),e(A,qe),h(m,L,j),h(m,E,j),e(E,F),e(F,te),e(F,ne),e(ne,ke),e(F,He),e(F,J),e(J,P),e(E,Te),e(E,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(E,Ue),e(E,S),e(S,We),e(S,O),e(O,H)},d(m){m&&t(u),m&&t(f),m&&t(_),m&&t(ue),m&&t(q),m&&t(G),m&&t(A),m&&t(L),m&&t(E)}}}function lf(C){let u,z,f,_,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);_=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(x,g){h(x,u,g),e(u,z),e(u,f),e(f,_),e(u,w)},d(x){x&&t(u)}}}function cf(C){let u,z,f,_,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);_=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(x,g){h(x,u,g),e(u,z),e(u,f),e(f,_),e(u,w)},d(x){x&&t(u)}}}function pf(C){let u,z,f,_,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);_=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(x,g){h(x,u,g),e(u,z),e(u,f),e(f,_),e(u,w)},d(x){x&&t(u)}}}function hf(C){let u,z,f,_,w,x,g,$,Ae,ue,q,ve,X,Se,Q,ee,Oe,je,G,A,qe,L,E,F,te,ne,ke,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,S,We,O,H,m,j,be,nt,ye,D,ot,st,Re,I,ie,at,Be,U,rt,it,de,xe,xi,Zo,wi,zi,$i,dt,hn,ji,Ps,qi,Ei,Pi,un,Fi,Fs,Ni,Ci,Li,lt,Ii,Ns,Ai,Si,Cs,Oi,Hi,Di,Ls,mn,Ui,Is,Wi,Ri,Bi,As,fn,Vi,_n,Gi,Ji,Xa,ct,Nt,Ss,gn,Yi,Os,Ki,Qa,Ee,Xo,Zi,Hs,Xi,Qi,vn,ed,kn,td,nd,od,pt,sd,Ds,ad,rd,Us,id,dd,ld,Ws,cd,er,ht,Ct,Rs,Tn,pd,Bs,hd,tr,Lt,Qo,ud,Mn,md,fd,Vs,es,_d,nr,ut,It,Gs,bn,gd,Js,vd,or,Pe,yn,kd,Ys,Td,Md,bd,xn,yd,Ks,xd,wd,zd,wn,$d,zn,jd,qd,Ed,$n,Pd,Zs,Fd,Nd,sr,At,Cd,jn,Ld,Id,ar,qn,rr,ts,Ad,ir,En,dr,mt,St,Xs,Pn,Sd,Qs,Od,lr,ns,Hd,cr,Fn,pr,os,Dd,hr,Nn,ur,ft,Ot,ea,Cn,Ud,ta,Wd,mr,le,Ln,Rd,_t,Bd,ss,Vd,Gd,In,Jd,Yd,Kd,gt,Zd,as,Xd,Qd,rs,el,tl,nl,na,ol,sl,An,fr,vt,Ht,oa,Sn,al,sa,rl,_r,W,On,il,Hn,dl,Dn,ll,cl,pl,Un,hl,is,ul,ml,fl,aa,_l,gl,Wn,vl,Dt,Rn,kl,ra,Tl,gr,kt,Ut,ia,Bn,Ml,da,bl,vr,we,Vn,yl,Gn,xl,ds,wl,zl,$l,Jn,jl,Yn,ql,El,Pl,me,Kn,Fl,Tt,Nl,ls,Cl,Ll,la,Il,Al,Sl,Wt,Ol,ca,Hl,Dl,Zn,kr,Mt,Rt,pa,Xn,Ul,ha,Wl,Tr,ze,Qn,Rl,eo,Bl,cs,Vl,Gl,Jl,to,Yl,no,Kl,Zl,Xl,Y,oo,Ql,bt,ec,ps,tc,nc,ua,oc,sc,ac,Bt,rc,so,ic,ao,dc,lc,cc,ma,pc,hc,ro,Mr,yt,Vt,fa,io,uc,_a,mc,br,xt,lo,fc,Je,co,_c,ga,gc,vc,po,yr,wt,Gt,va,ho,kc,ka,Tc,xr,ce,uo,Mc,mo,bc,hs,yc,xc,wc,fo,zc,_o,$c,jc,qc,Jt,Ec,fe,go,Pc,zt,Fc,us,Nc,Cc,Ta,Lc,Ic,Ac,Yt,Sc,Ma,Oc,Hc,vo,wr,$t,Kt,ba,ko,Dc,ya,Uc,zr,pe,To,Wc,Mo,Rc,ms,Bc,Vc,Gc,bo,Jc,yo,Yc,Kc,Zc,Zt,Xc,K,xo,Qc,jt,ep,fs,tp,np,xa,op,sp,ap,Xt,rp,wo,ip,zo,dp,lp,cp,wa,pp,hp,$o,$r,qt,Qt,za,jo,up,$a,mp,jr,R,qo,fp,Eo,_p,_s,gp,vp,kp,Po,Tp,Fo,Mp,bp,yp,ja,xp,wp,Ve,qa,No,zp,$p,Ea,Co,jp,qp,Pa,Lo,Ep,Pp,Fa,Io,Fp,Np,_e,Ao,Cp,Et,Lp,Na,Ip,Ap,Ca,Sp,Op,Hp,en,Dp,La,Up,Wp,So,qr,Pt,tn,Ia,Oo,Rp,Aa,Bp,Er,B,Ho,Vp,Do,Gp,gs,Jp,Yp,Kp,Uo,Zp,Wo,Xp,Qp,eh,Sa,th,nh,Ge,Oa,Ro,oh,sh,Ha,Bo,ah,rh,Da,Vo,ih,dh,Ua,Go,lh,ch,ge,Jo,ph,Ft,hh,Wa,uh,mh,Ra,fh,_h,gh,nn,vh,Ba,kh,Th,Yo,Pr;return x=new he({}),te=new he({}),gn=new he({}),Tn=new he({}),bn=new he({}),qn=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fra<< this is a sentence in english that we want to translate to french",
    ">>por<< This should go to portuguese",
    ">>esp<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-roa"
tokenizer = MarianTokenizer.from_pretrained(model_name)
print(tokenizer.supported_language_codes)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
[tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fra&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;por&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;esp&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-roa&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.supported_language_codes)
[<span class="hljs-string">&#x27;&gt;&gt;zlm_Latn&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;mfe&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;hat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;pap&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ast&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;cat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ind&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;glg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;wln&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;spa&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;fra&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ron&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;por&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ita&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;oci&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;arg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;min&lt;&lt;&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>[tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>,
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),En=new $e({props:{code:`from huggingface_hub import list_models

model_list = list_models()
org = "Helsinki-NLP"
model_ids = [x.modelId for x in model_list if x.modelId.startswith(org)]
suffix = [x.split("/")[1] for x in model_ids]
old_style_multi_models = [f"{org}/{s}" for s in suffix if s != s.lower()]`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&quot;/&quot;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&quot;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&quot;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),Pn=new he({}),Fn=new $e({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
 'Helsinki-NLP/opus-mt-ROMANCE-en',
 'Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA',
 'Helsinki-NLP/opus-mt-de-ZH',
 'Helsinki-NLP/opus-mt-en-CELTIC',
 'Helsinki-NLP/opus-mt-en-ROMANCE',
 'Helsinki-NLP/opus-mt-es-NORWAY',
 'Helsinki-NLP/opus-mt-fi-NORWAY',
 'Helsinki-NLP/opus-mt-fi-ZH',
 'Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI',
 'Helsinki-NLP/opus-mt-sv-NORWAY',
 'Helsinki-NLP/opus-mt-sv-ZH']
GROUP_MEMBERS = {
 'ZH': ['cmn', 'cn', 'yue', 'ze_zh', 'zh_cn', 'zh_CN', 'zh_HK', 'zh_tw', 'zh_TW', 'zh_yue', 'zhs', 'zht', 'zh'],
 'ROMANCE': ['fr', 'fr_BE', 'fr_CA', 'fr_FR', 'wa', 'frp', 'oc', 'ca', 'rm', 'lld', 'fur', 'lij', 'lmo', 'es', 'es_AR', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_ES', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PE', 'es_PR', 'es_SV', 'es_UY', 'es_VE', 'pt', 'pt_br', 'pt_BR', 'pt_PT', 'gl', 'lad', 'an', 'mwl', 'it', 'it_IT', 'co', 'nap', 'scn', 'vec', 'sc', 'ro', 'la'],
 'NORTH_EU': ['de', 'nl', 'fy', 'af', 'da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SCANDINAVIA': ['da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SAMI': ['se', 'sma', 'smj', 'smn', 'sms'],
 'NORWAY': ['nb_NO', 'nb', 'nn_NO', 'nn', 'nog', 'no_nb', 'no'],
 'CELTIC': ['ga', 'cy', 'br', 'gd', 'kw', 'gv']
}`,highlighted:`[<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-ROMANCE-en&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-de-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-CELTIC&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-ROMANCE&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-es-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-ZH&#x27;</span>]
GROUP_MEMBERS = {
 <span class="hljs-string">&#x27;ZH&#x27;</span>: [<span class="hljs-string">&#x27;cmn&#x27;</span>, <span class="hljs-string">&#x27;cn&#x27;</span>, <span class="hljs-string">&#x27;yue&#x27;</span>, <span class="hljs-string">&#x27;ze_zh&#x27;</span>, <span class="hljs-string">&#x27;zh_cn&#x27;</span>, <span class="hljs-string">&#x27;zh_CN&#x27;</span>, <span class="hljs-string">&#x27;zh_HK&#x27;</span>, <span class="hljs-string">&#x27;zh_tw&#x27;</span>, <span class="hljs-string">&#x27;zh_TW&#x27;</span>, <span class="hljs-string">&#x27;zh_yue&#x27;</span>, <span class="hljs-string">&#x27;zhs&#x27;</span>, <span class="hljs-string">&#x27;zht&#x27;</span>, <span class="hljs-string">&#x27;zh&#x27;</span>],
 <span class="hljs-string">&#x27;ROMANCE&#x27;</span>: [<span class="hljs-string">&#x27;fr&#x27;</span>, <span class="hljs-string">&#x27;fr_BE&#x27;</span>, <span class="hljs-string">&#x27;fr_CA&#x27;</span>, <span class="hljs-string">&#x27;fr_FR&#x27;</span>, <span class="hljs-string">&#x27;wa&#x27;</span>, <span class="hljs-string">&#x27;frp&#x27;</span>, <span class="hljs-string">&#x27;oc&#x27;</span>, <span class="hljs-string">&#x27;ca&#x27;</span>, <span class="hljs-string">&#x27;rm&#x27;</span>, <span class="hljs-string">&#x27;lld&#x27;</span>, <span class="hljs-string">&#x27;fur&#x27;</span>, <span class="hljs-string">&#x27;lij&#x27;</span>, <span class="hljs-string">&#x27;lmo&#x27;</span>, <span class="hljs-string">&#x27;es&#x27;</span>, <span class="hljs-string">&#x27;es_AR&#x27;</span>, <span class="hljs-string">&#x27;es_CL&#x27;</span>, <span class="hljs-string">&#x27;es_CO&#x27;</span>, <span class="hljs-string">&#x27;es_CR&#x27;</span>, <span class="hljs-string">&#x27;es_DO&#x27;</span>, <span class="hljs-string">&#x27;es_EC&#x27;</span>, <span class="hljs-string">&#x27;es_ES&#x27;</span>, <span class="hljs-string">&#x27;es_GT&#x27;</span>, <span class="hljs-string">&#x27;es_HN&#x27;</span>, <span class="hljs-string">&#x27;es_MX&#x27;</span>, <span class="hljs-string">&#x27;es_NI&#x27;</span>, <span class="hljs-string">&#x27;es_PA&#x27;</span>, <span class="hljs-string">&#x27;es_PE&#x27;</span>, <span class="hljs-string">&#x27;es_PR&#x27;</span>, <span class="hljs-string">&#x27;es_SV&#x27;</span>, <span class="hljs-string">&#x27;es_UY&#x27;</span>, <span class="hljs-string">&#x27;es_VE&#x27;</span>, <span class="hljs-string">&#x27;pt&#x27;</span>, <span class="hljs-string">&#x27;pt_br&#x27;</span>, <span class="hljs-string">&#x27;pt_BR&#x27;</span>, <span class="hljs-string">&#x27;pt_PT&#x27;</span>, <span class="hljs-string">&#x27;gl&#x27;</span>, <span class="hljs-string">&#x27;lad&#x27;</span>, <span class="hljs-string">&#x27;an&#x27;</span>, <span class="hljs-string">&#x27;mwl&#x27;</span>, <span class="hljs-string">&#x27;it&#x27;</span>, <span class="hljs-string">&#x27;it_IT&#x27;</span>, <span class="hljs-string">&#x27;co&#x27;</span>, <span class="hljs-string">&#x27;nap&#x27;</span>, <span class="hljs-string">&#x27;scn&#x27;</span>, <span class="hljs-string">&#x27;vec&#x27;</span>, <span class="hljs-string">&#x27;sc&#x27;</span>, <span class="hljs-string">&#x27;ro&#x27;</span>, <span class="hljs-string">&#x27;la&#x27;</span>],
 <span class="hljs-string">&#x27;NORTH_EU&#x27;</span>: [<span class="hljs-string">&#x27;de&#x27;</span>, <span class="hljs-string">&#x27;nl&#x27;</span>, <span class="hljs-string">&#x27;fy&#x27;</span>, <span class="hljs-string">&#x27;af&#x27;</span>, <span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SCANDINAVIA&#x27;</span>: [<span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SAMI&#x27;</span>: [<span class="hljs-string">&#x27;se&#x27;</span>, <span class="hljs-string">&#x27;sma&#x27;</span>, <span class="hljs-string">&#x27;smj&#x27;</span>, <span class="hljs-string">&#x27;smn&#x27;</span>, <span class="hljs-string">&#x27;sms&#x27;</span>],
 <span class="hljs-string">&#x27;NORWAY&#x27;</span>: [<span class="hljs-string">&#x27;nb_NO&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn_NO&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;nog&#x27;</span>, <span class="hljs-string">&#x27;no_nb&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>],
 <span class="hljs-string">&#x27;CELTIC&#x27;</span>: [<span class="hljs-string">&#x27;ga&#x27;</span>, <span class="hljs-string">&#x27;cy&#x27;</span>, <span class="hljs-string">&#x27;br&#x27;</span>, <span class="hljs-string">&#x27;gd&#x27;</span>, <span class="hljs-string">&#x27;kw&#x27;</span>, <span class="hljs-string">&#x27;gv&#x27;</span>]
}`}}),Nn=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fr<< this is a sentence in english that we want to translate to french",
    ">>pt<< This should go to portuguese",
    ">>es<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-ROMANCE"
tokenizer = MarianTokenizer.from_pretrained(model_name)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
tgt_text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fr&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;pt&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;es&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-ROMANCE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = [tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>, 
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Cn=new he({}),Ln=new V({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"decoder_vocab_size",val:" = None"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"share_encoder_decoder_embeddings",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/configuration_marian.py#L35",parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MarianConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MarianConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MarianConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MarianConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MarianConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MarianConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MarianConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MarianConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MarianConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MarianConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MarianConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),An=new $e({props:{code:`from transformers import MarianModel, MarianConfig

# Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration
configuration = MarianConfig()

# Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration
model = MarianModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianModel, MarianConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MarianConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Sn=new he({}),On=new V({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"vocab",val:""},{name:"target_vocab_file",val:" = None"},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"separate_vocabs",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/tokenization_marian.py#L60",parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the source language.`,name:"source_spm"},{anchor:"transformers.MarianTokenizer.target_spm",description:`<strong>target_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the target language.`,name:"target_spm"},{anchor:"transformers.MarianTokenizer.source_lang",description:`<strong>source_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"source_lang"},{anchor:"transformers.MarianTokenizer.target_lang",description:`<strong>target_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"target_lang"},{anchor:"transformers.MarianTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MarianTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MarianTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MarianTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sentence length the model accepts.`,name:"model_max_length"},{anchor:"transformers.MarianTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.MarianTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),Wn=new $e({props:{code:`from transformers import MarianTokenizer

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
src_texts = ["I am a small frog.", "Tom asked his teacher for advice."]
tgt_texts = ["Ich bin ein kleiner Frosch.", "Tom bat seinen Lehrer um Rat."]  # optional
inputs = tokenizer(src_texts, return_tensors="pt", padding=True)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_texts, return_tensors="pt", padding=True)
inputs["labels"] = labels["input_ids"]

outputs = model(**inputs)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_texts = [<span class="hljs-string">&quot;I am a small frog.&quot;</span>, <span class="hljs-string">&quot;Tom asked his teacher for advice.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_texts = [<span class="hljs-string">&quot;Ich bin ein kleiner Frosch.&quot;</span>, <span class="hljs-string">&quot;Tom bat seinen Lehrer um Rat.&quot;</span>]  <span class="hljs-comment"># optional</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(src_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-comment"># keys  [input_ids, attention_mask, labels].</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`}}),Rn=new V({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/tokenization_marian.py#L282"}}),Bn=new he({}),Vn=new V({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_marian.py#L1088",parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kn=new V({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_marian.py#L1170",parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16113/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new pn({props:{$$slots:{default:[of]},$$scope:{ctx:C}}}),Zn=new $e({props:{code:`from transformers import MarianTokenizer, MarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = MarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer(
    "<pad> Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen",
    return_tensors="pt",
    add_special_tokens=False,
)
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&lt;pad&gt; Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>    add_special_tokens=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">26</span>, <span class="hljs-number">512</span>]`}}),Xn=new he({}),Qn=new V({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_marian.py#L1272",parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oo=new V({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_marian.py#L1398",parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianMTModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianMTModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianMTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16113/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new pn({props:{$$slots:{default:[sf]},$$scope:{ctx:C}}}),ro=new $e({props:{code:`from transformers import MarianTokenizer, MarianMTModel

src = "fr"  # source language
trg = "en"  # target language

model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"
model = MarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)

sample_text = "o\xF9 est l'arr\xEAt de bus ?"
batch = tokenizer([sample_text], return_tensors="pt")

generated_ids = model.generate(**batch)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Where&#x27;s the bus stop?&quot;</span>`}}),io=new he({}),lo=new V({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_marian.py#L1542"}}),co=new V({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_marian.py#L1573",parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MarianForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MarianForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16113/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new $e({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-fr-en")
model = MarianForCausalLM.from_pretrained("Helsinki-NLP/opus-mt-fr-en", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),ho=new he({}),uo=new V({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_tf_marian.py#L1208",parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jt=new pn({props:{$$slots:{default:[af]},$$scope:{ctx:C}}}),go=new V({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_tf_marian.py#L1220",parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16113/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yt=new pn({props:{$$slots:{default:[rf]},$$scope:{ctx:C}}}),vo=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianModel
import tensorflow as tf

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = TFMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ko=new he({}),To=new V({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_tf_marian.py#L1315",parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new pn({props:{$$slots:{default:[df]},$$scope:{ctx:C}}}),xo=new V({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_tf_marian.py#L1348",parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianMTModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianMTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianMTModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianMTModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianMTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianMTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianMTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianMTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianMTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16113/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xt=new pn({props:{$$slots:{default:[lf]},$$scope:{ctx:C}}}),$o=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
from typing import List

src = "fr"  # source language
trg = "en"  # target language
sample_text = "o\xF9 est l'arr\xEAt de bus ?"
model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"

model = TFMarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)
batch = tokenizer([sample_text], return_tensors="tf")
gen = model.generate(**batch)
tokenizer.batch_decode(gen, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),jo=new he({}),qo=new V({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_flax_marian.py#L1196",parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ao=new V({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_flax_marian.py#L1131",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16113/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new pn({props:{$$slots:{default:[cf]},$$scope:{ctx:C}}}),So=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = FlaxMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Oo=new he({}),Ho=new V({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_flax_marian.py#L1282",parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Jo=new V({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16113/src/transformers/models/marian/modeling_flax_marian.py#L1131",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16113/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16113/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16113/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new pn({props:{$$slots:{default:[pf]},$$scope:{ctx:C}}}),Yo=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

model = FlaxMarianMTModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")
tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")

text = "My friends are cool but they eat too many carbs."
input_ids = tokenizer(text, max_length=64, return_tensors="jax").input_ids

sequences = model.generate(input_ids, max_length=64, num_beams=2).sequences

outputs = tokenizer.batch_decode(sequences, skip_special_tokens=True)
# should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianMTModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(text, max_length=<span class="hljs-number">64</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, max_length=<span class="hljs-number">64</span>, num_beams=<span class="hljs-number">2</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`}}),{c(){u=o("meta"),z=d(),f=o("h1"),_=o("a"),w=o("span"),v(x.$$.fragment),g=d(),$=o("span"),Ae=r("MarianMT"),ue=d(),q=o("p"),ve=o("strong"),X=r("Bugs:"),Se=r(" If you see something strange, file a "),Q=o("a"),ee=r("Github Issue"),Oe=r(`
and assign @patrickvonplaten.`),je=d(),G=o("p"),A=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),qe=d(),L=o("h2"),E=o("a"),F=o("span"),v(te.$$.fragment),ne=d(),ke=o("span"),He=r("Implementation Notes"),J=d(),P=o("ul"),Te=o("li"),N=o("p"),De=r("Each model is about 298 MB on disk, there are more than 1,000 models."),oe=d(),Me=o("li"),se=o("p"),ae=r("The list of supported language pairs can be found "),re=o("a"),Ue=r("here"),S=r("."),We=d(),O=o("li"),H=o("p"),m=r("Models were originally trained by "),j=o("a"),be=r("J\xF6rg Tiedemann"),nt=r(" using the "),ye=o("a"),D=r("Marian"),ot=r(" C++ library, which supports fast training and translation."),st=d(),Re=o("li"),I=o("p"),ie=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),at=d(),Be=o("li"),U=o("p"),rt=r("The 80 opus models that require BPE preprocessing are not supported."),it=d(),de=o("li"),xe=o("p"),xi=r("The modeling code is the same as "),Zo=o("a"),wi=r("BartForConditionalGeneration"),zi=r(" with a few minor modifications:"),$i=d(),dt=o("ul"),hn=o("li"),ji=r("static (sinusoid) positional embeddings ("),Ps=o("code"),qi=r("MarianConfig.static_position_embeddings=True"),Ei=r(")"),Pi=d(),un=o("li"),Fi=r("no layernorm_embedding ("),Fs=o("code"),Ni=r("MarianConfig.normalize_embedding=False"),Ci=r(")"),Li=d(),lt=o("li"),Ii=r("the model starts generating with "),Ns=o("code"),Ai=r("pad_token_id"),Si=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Cs=o("code"),Oi=r("<s/>"),Hi=r("),"),Di=d(),Ls=o("li"),mn=o("p"),Ui=r("Code to bulk convert models can be found in "),Is=o("code"),Wi=r("convert_marian_to_pytorch.py"),Ri=r("."),Bi=d(),As=o("li"),fn=o("p"),Vi=r("This model was contributed by "),_n=o("a"),Gi=r("sshleifer"),Ji=r("."),Xa=d(),ct=o("h2"),Nt=o("a"),Ss=o("span"),v(gn.$$.fragment),Yi=d(),Os=o("span"),Ki=r("Naming"),Qa=d(),Ee=o("ul"),Xo=o("li"),Zi=r("All model names use the following format: "),Hs=o("code"),Xi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Qi=d(),vn=o("li"),ed=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),kn=o("a"),td=r("here"),nd=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),od=d(),pt=o("li"),sd=r("Codes formatted like "),Ds=o("code"),ad=r("es_AR"),rd=r(" are usually "),Us=o("code"),id=r("code_{region}"),dd=r(". That one is Spanish from Argentina."),ld=d(),Ws=o("li"),cd=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),er=d(),ht=o("h2"),Ct=o("a"),Rs=o("span"),v(Tn.$$.fragment),pd=d(),Bs=o("span"),hd=r("Examples"),tr=d(),Lt=o("ul"),Qo=o("li"),ud=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.
`),Mn=o("a"),md=r("https://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh"),fd=d(),Vs=o("li"),es=o("a"),_d=r("Fine-tune on GPU"),nr=d(),ut=o("h2"),It=o("a"),Gs=o("span"),v(bn.$$.fragment),gd=d(),Js=o("span"),vd=r("Multilingual Models"),or=d(),Pe=o("ul"),yn=o("li"),kd=r("All model names use the following format: "),Ys=o("code"),Td=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Md=r(":"),bd=d(),xn=o("li"),yd=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Ks=o("code"),xd=r("src_text"),wd=r("."),zd=d(),wn=o("li"),$d=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),zn=o("a"),jd=r("opus-mt-en-roa"),qd=r("."),Ed=d(),$n=o("li"),Pd=r("Note that if a model is only multilingual on the source side, like "),Zs=o("code"),Fd=r("Helsinki-NLP/opus-mt-roa-en"),Nd=r(`, no language
codes are required.`),sr=d(),At=o("p"),Cd=r("New multi-lingual models from the "),jn=o("a"),Ld=r("Tatoeba-Challenge repo"),Id=r(`
require 3 character language codes:`),ar=d(),v(qn.$$.fragment),rr=d(),ts=o("p"),Ad=r("Here is the code to see all available pretrained models on the hub:"),ir=d(),v(En.$$.fragment),dr=d(),mt=o("h2"),St=o("a"),Xs=o("span"),v(Pn.$$.fragment),Sd=d(),Qs=o("span"),Od=r("Old Style Multi-Lingual Models"),lr=d(),ns=o("p"),Hd=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),cr=d(),v(Fn.$$.fragment),pr=d(),os=o("p"),Dd=r("Example of translating english to many romance languages, using old-style 2 character language codes"),hr=d(),v(Nn.$$.fragment),ur=d(),ft=o("h2"),Ot=o("a"),ea=o("span"),v(Cn.$$.fragment),Ud=d(),ta=o("span"),Wd=r("MarianConfig"),mr=d(),le=o("div"),v(Ln.$$.fragment),Rd=d(),_t=o("p"),Bd=r("This is the configuration class to store the configuration of a "),ss=o("a"),Vd=r("MarianModel"),Gd=r(`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),In=o("a"),Jd=r("Helsinki-NLP/opus-mt-en-de"),Yd=r(" architecture."),Kd=d(),gt=o("p"),Zd=r("Configuration objects inherit from "),as=o("a"),Xd=r("PretrainedConfig"),Qd=r(` and can be used to control the model outputs. Read the
documentation from `),rs=o("a"),el=r("PretrainedConfig"),tl=r(" for more information."),nl=d(),na=o("p"),ol=r("Examples:"),sl=d(),v(An.$$.fragment),fr=d(),vt=o("h2"),Ht=o("a"),oa=o("span"),v(Sn.$$.fragment),al=d(),sa=o("span"),rl=r("MarianTokenizer"),_r=d(),W=o("div"),v(On.$$.fragment),il=d(),Hn=o("p"),dl=r("Construct a Marian tokenizer. Based on "),Dn=o("a"),ll=r("SentencePiece"),cl=r("."),pl=d(),Un=o("p"),hl=r("This tokenizer inherits from "),is=o("a"),ul=r("PreTrainedTokenizer"),ml=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fl=d(),aa=o("p"),_l=r("Examples:"),gl=d(),v(Wn.$$.fragment),vl=d(),Dt=o("div"),v(Rn.$$.fragment),kl=d(),ra=o("p"),Tl=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),gr=d(),kt=o("h2"),Ut=o("a"),ia=o("span"),v(Bn.$$.fragment),Ml=d(),da=o("span"),bl=r("MarianModel"),vr=d(),we=o("div"),v(Vn.$$.fragment),yl=d(),Gn=o("p"),xl=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ds=o("a"),wl=r("PreTrainedModel"),zl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$l=d(),Jn=o("p"),jl=r("This model is also a PyTorch "),Yn=o("a"),ql=r("torch.nn.Module"),El=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pl=d(),me=o("div"),v(Kn.$$.fragment),Fl=d(),Tt=o("p"),Nl=r("The "),ls=o("a"),Cl=r("MarianModel"),Ll=r(" forward method, overrides the "),la=o("code"),Il=r("__call__"),Al=r(" special method."),Sl=d(),v(Wt.$$.fragment),Ol=d(),ca=o("p"),Hl=r("Example:"),Dl=d(),v(Zn.$$.fragment),kr=d(),Mt=o("h2"),Rt=o("a"),pa=o("span"),v(Xn.$$.fragment),Ul=d(),ha=o("span"),Wl=r("MarianMTModel"),Tr=d(),ze=o("div"),v(Qn.$$.fragment),Rl=d(),eo=o("p"),Bl=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=o("a"),Vl=r("PreTrainedModel"),Gl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jl=d(),to=o("p"),Yl=r("This model is also a PyTorch "),no=o("a"),Kl=r("torch.nn.Module"),Zl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xl=d(),Y=o("div"),v(oo.$$.fragment),Ql=d(),bt=o("p"),ec=r("The "),ps=o("a"),tc=r("MarianMTModel"),nc=r(" forward method, overrides the "),ua=o("code"),oc=r("__call__"),sc=r(" special method."),ac=d(),v(Bt.$$.fragment),rc=d(),so=o("p"),ic=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),ao=o("a"),dc=r("here"),lc=r("."),cc=d(),ma=o("p"),pc=r("Examples:"),hc=d(),v(ro.$$.fragment),Mr=d(),yt=o("h2"),Vt=o("a"),fa=o("span"),v(io.$$.fragment),uc=d(),_a=o("span"),mc=r("MarianForCausalLM"),br=d(),xt=o("div"),v(lo.$$.fragment),fc=d(),Je=o("div"),v(co.$$.fragment),_c=d(),ga=o("p"),gc=r("Example:"),vc=d(),v(po.$$.fragment),yr=d(),wt=o("h2"),Gt=o("a"),va=o("span"),v(ho.$$.fragment),kc=d(),ka=o("span"),Tc=r("TFMarianModel"),xr=d(),ce=o("div"),v(uo.$$.fragment),Mc=d(),mo=o("p"),bc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hs=o("a"),yc=r("TFPreTrainedModel"),xc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc=d(),fo=o("p"),zc=r("This model is also a "),_o=o("a"),$c=r("tf.keras.Model"),jc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qc=d(),v(Jt.$$.fragment),Ec=d(),fe=o("div"),v(go.$$.fragment),Pc=d(),zt=o("p"),Fc=r("The "),us=o("a"),Nc=r("TFMarianModel"),Cc=r(" forward method, overrides the "),Ta=o("code"),Lc=r("__call__"),Ic=r(" special method."),Ac=d(),v(Yt.$$.fragment),Sc=d(),Ma=o("p"),Oc=r("Example:"),Hc=d(),v(vo.$$.fragment),wr=d(),$t=o("h2"),Kt=o("a"),ba=o("span"),v(ko.$$.fragment),Dc=d(),ya=o("span"),Uc=r("TFMarianMTModel"),zr=d(),pe=o("div"),v(To.$$.fragment),Wc=d(),Mo=o("p"),Rc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),ms=o("a"),Bc=r("TFPreTrainedModel"),Vc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc=d(),bo=o("p"),Jc=r("This model is also a "),yo=o("a"),Yc=r("tf.keras.Model"),Kc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zc=d(),v(Zt.$$.fragment),Xc=d(),K=o("div"),v(xo.$$.fragment),Qc=d(),jt=o("p"),ep=r("The "),fs=o("a"),tp=r("TFMarianMTModel"),np=r(" forward method, overrides the "),xa=o("code"),op=r("__call__"),sp=r(" special method."),ap=d(),v(Xt.$$.fragment),rp=d(),wo=o("p"),ip=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),zo=o("a"),dp=r("here"),lp=r("."),cp=d(),wa=o("p"),pp=r("Examples:"),hp=d(),v($o.$$.fragment),$r=d(),qt=o("h2"),Qt=o("a"),za=o("span"),v(jo.$$.fragment),up=d(),$a=o("span"),mp=r("FlaxMarianModel"),jr=d(),R=o("div"),v(qo.$$.fragment),fp=d(),Eo=o("p"),_p=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),_s=o("a"),gp=r("FlaxPreTrainedModel"),vp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp=d(),Po=o("p"),Tp=r(`This model is also a Flax Linen
`),Fo=o("a"),Mp=r("flax.nn.Module"),bp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yp=d(),ja=o("p"),xp=r("Finally, this model supports inherent JAX features such as:"),wp=d(),Ve=o("ul"),qa=o("li"),No=o("a"),zp=r("Just-In-Time (JIT) compilation"),$p=d(),Ea=o("li"),Co=o("a"),jp=r("Automatic Differentiation"),qp=d(),Pa=o("li"),Lo=o("a"),Ep=r("Vectorization"),Pp=d(),Fa=o("li"),Io=o("a"),Fp=r("Parallelization"),Np=d(),_e=o("div"),v(Ao.$$.fragment),Cp=d(),Et=o("p"),Lp=r("The "),Na=o("code"),Ip=r("FlaxMarianPreTrainedModel"),Ap=r("forward method, overrides the "),Ca=o("code"),Sp=r("__call__"),Op=r(" special method."),Hp=d(),v(en.$$.fragment),Dp=d(),La=o("p"),Up=r("Example:"),Wp=d(),v(So.$$.fragment),qr=d(),Pt=o("h2"),tn=o("a"),Ia=o("span"),v(Oo.$$.fragment),Rp=d(),Aa=o("span"),Bp=r("FlaxMarianMTModel"),Er=d(),B=o("div"),v(Ho.$$.fragment),Vp=d(),Do=o("p"),Gp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),gs=o("a"),Jp=r("FlaxPreTrainedModel"),Yp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kp=d(),Uo=o("p"),Zp=r(`This model is also a Flax Linen
`),Wo=o("a"),Xp=r("flax.nn.Module"),Qp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),eh=d(),Sa=o("p"),th=r("Finally, this model supports inherent JAX features such as:"),nh=d(),Ge=o("ul"),Oa=o("li"),Ro=o("a"),oh=r("Just-In-Time (JIT) compilation"),sh=d(),Ha=o("li"),Bo=o("a"),ah=r("Automatic Differentiation"),rh=d(),Da=o("li"),Vo=o("a"),ih=r("Vectorization"),dh=d(),Ua=o("li"),Go=o("a"),lh=r("Parallelization"),ch=d(),ge=o("div"),v(Jo.$$.fragment),ph=d(),Ft=o("p"),hh=r("The "),Wa=o("code"),uh=r("FlaxMarianPreTrainedModel"),mh=r("forward method, overrides the "),Ra=o("code"),fh=r("__call__"),_h=r(" special method."),gh=d(),v(nn.$$.fragment),vh=d(),Ba=o("p"),kh=r("Example:"),Th=d(),v(Yo.$$.fragment),this.h()},l(n){const p=nf('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),f=s(n,"H1",{class:!0});var Ko=a(f);_=s(Ko,"A",{id:!0,class:!0,href:!0});var Va=a(_);w=s(Va,"SPAN",{});var Ga=a(w);k(x.$$.fragment,Ga),Ga.forEach(t),Va.forEach(t),g=l(Ko),$=s(Ko,"SPAN",{});var Ja=a($);Ae=i(Ja,"MarianMT"),Ja.forEach(t),Ko.forEach(t),ue=l(n),q=s(n,"P",{});var on=a(q);ve=s(on,"STRONG",{});var Ya=a(ve);X=i(Ya,"Bugs:"),Ya.forEach(t),Se=i(on," If you see something strange, file a "),Q=s(on,"A",{href:!0,rel:!0});var Ka=a(Q);ee=i(Ka,"Github Issue"),Ka.forEach(t),Oe=i(on,`
and assign @patrickvonplaten.`),on.forEach(t),je=l(n),G=s(n,"P",{});var Za=a(G);A=i(Za,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Za.forEach(t),qe=l(n),L=s(n,"H2",{class:!0});var Fr=a(L);E=s(Fr,"A",{id:!0,class:!0,href:!0});var yh=a(E);F=s(yh,"SPAN",{});var xh=a(F);k(te.$$.fragment,xh),xh.forEach(t),yh.forEach(t),ne=l(Fr),ke=s(Fr,"SPAN",{});var wh=a(ke);He=i(wh,"Implementation Notes"),wh.forEach(t),Fr.forEach(t),J=l(n),P=s(n,"UL",{});var Z=a(P);Te=s(Z,"LI",{});var zh=a(Te);N=s(zh,"P",{});var $h=a(N);De=i($h,"Each model is about 298 MB on disk, there are more than 1,000 models."),$h.forEach(t),zh.forEach(t),oe=l(Z),Me=s(Z,"LI",{});var jh=a(Me);se=s(jh,"P",{});var Nr=a(se);ae=i(Nr,"The list of supported language pairs can be found "),re=s(Nr,"A",{href:!0,rel:!0});var qh=a(re);Ue=i(qh,"here"),qh.forEach(t),S=i(Nr,"."),Nr.forEach(t),jh.forEach(t),We=l(Z),O=s(Z,"LI",{});var Eh=a(O);H=s(Eh,"P",{});var vs=a(H);m=i(vs,"Models were originally trained by "),j=s(vs,"A",{href:!0,rel:!0});var Ph=a(j);be=i(Ph,"J\xF6rg Tiedemann"),Ph.forEach(t),nt=i(vs," using the "),ye=s(vs,"A",{href:!0,rel:!0});var Fh=a(ye);D=i(Fh,"Marian"),Fh.forEach(t),ot=i(vs," C++ library, which supports fast training and translation."),vs.forEach(t),Eh.forEach(t),st=l(Z),Re=s(Z,"LI",{});var Nh=a(Re);I=s(Nh,"P",{});var Ch=a(I);ie=i(Ch,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),Ch.forEach(t),Nh.forEach(t),at=l(Z),Be=s(Z,"LI",{});var Lh=a(Be);U=s(Lh,"P",{});var Ih=a(U);rt=i(Ih,"The 80 opus models that require BPE preprocessing are not supported."),Ih.forEach(t),Lh.forEach(t),it=l(Z),de=s(Z,"LI",{});var Cr=a(de);xe=s(Cr,"P",{});var Lr=a(xe);xi=i(Lr,"The modeling code is the same as "),Zo=s(Lr,"A",{href:!0});var Ah=a(Zo);wi=i(Ah,"BartForConditionalGeneration"),Ah.forEach(t),zi=i(Lr," with a few minor modifications:"),Lr.forEach(t),$i=l(Cr),dt=s(Cr,"UL",{});var ks=a(dt);hn=s(ks,"LI",{});var Ir=a(hn);ji=i(Ir,"static (sinusoid) positional embeddings ("),Ps=s(Ir,"CODE",{});var Sh=a(Ps);qi=i(Sh,"MarianConfig.static_position_embeddings=True"),Sh.forEach(t),Ei=i(Ir,")"),Ir.forEach(t),Pi=l(ks),un=s(ks,"LI",{});var Ar=a(un);Fi=i(Ar,"no layernorm_embedding ("),Fs=s(Ar,"CODE",{});var Oh=a(Fs);Ni=i(Oh,"MarianConfig.normalize_embedding=False"),Oh.forEach(t),Ci=i(Ar,")"),Ar.forEach(t),Li=l(ks),lt=s(ks,"LI",{});var Ts=a(lt);Ii=i(Ts,"the model starts generating with "),Ns=s(Ts,"CODE",{});var Hh=a(Ns);Ai=i(Hh,"pad_token_id"),Hh.forEach(t),Si=i(Ts,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Cs=s(Ts,"CODE",{});var Dh=a(Cs);Oi=i(Dh,"<s/>"),Dh.forEach(t),Hi=i(Ts,"),"),Ts.forEach(t),ks.forEach(t),Cr.forEach(t),Di=l(Z),Ls=s(Z,"LI",{});var Uh=a(Ls);mn=s(Uh,"P",{});var Sr=a(mn);Ui=i(Sr,"Code to bulk convert models can be found in "),Is=s(Sr,"CODE",{});var Wh=a(Is);Wi=i(Wh,"convert_marian_to_pytorch.py"),Wh.forEach(t),Ri=i(Sr,"."),Sr.forEach(t),Uh.forEach(t),Bi=l(Z),As=s(Z,"LI",{});var Rh=a(As);fn=s(Rh,"P",{});var Or=a(fn);Vi=i(Or,"This model was contributed by "),_n=s(Or,"A",{href:!0,rel:!0});var Bh=a(_n);Gi=i(Bh,"sshleifer"),Bh.forEach(t),Ji=i(Or,"."),Or.forEach(t),Rh.forEach(t),Z.forEach(t),Xa=l(n),ct=s(n,"H2",{class:!0});var Hr=a(ct);Nt=s(Hr,"A",{id:!0,class:!0,href:!0});var Vh=a(Nt);Ss=s(Vh,"SPAN",{});var Gh=a(Ss);k(gn.$$.fragment,Gh),Gh.forEach(t),Vh.forEach(t),Yi=l(Hr),Os=s(Hr,"SPAN",{});var Jh=a(Os);Ki=i(Jh,"Naming"),Jh.forEach(t),Hr.forEach(t),Qa=l(n),Ee=s(n,"UL",{});var sn=a(Ee);Xo=s(sn,"LI",{});var Mh=a(Xo);Zi=i(Mh,"All model names use the following format: "),Hs=s(Mh,"CODE",{});var Yh=a(Hs);Xi=i(Yh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Yh.forEach(t),Mh.forEach(t),Qi=l(sn),vn=s(sn,"LI",{});var Dr=a(vn);ed=i(Dr,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),kn=s(Dr,"A",{href:!0,rel:!0});var Kh=a(kn);td=i(Kh,"here"),Kh.forEach(t),nd=i(Dr,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Dr.forEach(t),od=l(sn),pt=s(sn,"LI",{});var Ms=a(pt);sd=i(Ms,"Codes formatted like "),Ds=s(Ms,"CODE",{});var Zh=a(Ds);ad=i(Zh,"es_AR"),Zh.forEach(t),rd=i(Ms," are usually "),Us=s(Ms,"CODE",{});var Xh=a(Us);id=i(Xh,"code_{region}"),Xh.forEach(t),dd=i(Ms,". That one is Spanish from Argentina."),Ms.forEach(t),ld=l(sn),Ws=s(sn,"LI",{});var Qh=a(Ws);cd=i(Qh,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),Qh.forEach(t),sn.forEach(t),er=l(n),ht=s(n,"H2",{class:!0});var Ur=a(ht);Ct=s(Ur,"A",{id:!0,class:!0,href:!0});var eu=a(Ct);Rs=s(eu,"SPAN",{});var tu=a(Rs);k(Tn.$$.fragment,tu),tu.forEach(t),eu.forEach(t),pd=l(Ur),Bs=s(Ur,"SPAN",{});var nu=a(Bs);hd=i(nu,"Examples"),nu.forEach(t),Ur.forEach(t),tr=l(n),Lt=s(n,"UL",{});var Wr=a(Lt);Qo=s(Wr,"LI",{});var bh=a(Qo);ud=i(bh,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.
`),Mn=s(bh,"A",{href:!0,rel:!0});var ou=a(Mn);md=i(ou,"https://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh"),ou.forEach(t),bh.forEach(t),fd=l(Wr),Vs=s(Wr,"LI",{});var su=a(Vs);es=s(su,"A",{href:!0});var au=a(es);_d=i(au,"Fine-tune on GPU"),au.forEach(t),su.forEach(t),Wr.forEach(t),nr=l(n),ut=s(n,"H2",{class:!0});var Rr=a(ut);It=s(Rr,"A",{id:!0,class:!0,href:!0});var ru=a(It);Gs=s(ru,"SPAN",{});var iu=a(Gs);k(bn.$$.fragment,iu),iu.forEach(t),ru.forEach(t),gd=l(Rr),Js=s(Rr,"SPAN",{});var du=a(Js);vd=i(du,"Multilingual Models"),du.forEach(t),Rr.forEach(t),or=l(n),Pe=s(n,"UL",{});var an=a(Pe);yn=s(an,"LI",{});var Br=a(yn);kd=i(Br,"All model names use the following format: "),Ys=s(Br,"CODE",{});var lu=a(Ys);Td=i(lu,"Helsinki-NLP/opus-mt-{src}-{tgt}"),lu.forEach(t),Md=i(Br,":"),Br.forEach(t),bd=l(an),xn=s(an,"LI",{});var Vr=a(xn);yd=i(Vr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Ks=s(Vr,"CODE",{});var cu=a(Ks);xd=i(cu,"src_text"),cu.forEach(t),wd=i(Vr,"."),Vr.forEach(t),zd=l(an),wn=s(an,"LI",{});var Gr=a(wn);$d=i(Gr,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),zn=s(Gr,"A",{href:!0,rel:!0});var pu=a(zn);jd=i(pu,"opus-mt-en-roa"),pu.forEach(t),qd=i(Gr,"."),Gr.forEach(t),Ed=l(an),$n=s(an,"LI",{});var Jr=a($n);Pd=i(Jr,"Note that if a model is only multilingual on the source side, like "),Zs=s(Jr,"CODE",{});var hu=a(Zs);Fd=i(hu,"Helsinki-NLP/opus-mt-roa-en"),hu.forEach(t),Nd=i(Jr,`, no language
codes are required.`),Jr.forEach(t),an.forEach(t),sr=l(n),At=s(n,"P",{});var Yr=a(At);Cd=i(Yr,"New multi-lingual models from the "),jn=s(Yr,"A",{href:!0,rel:!0});var uu=a(jn);Ld=i(uu,"Tatoeba-Challenge repo"),uu.forEach(t),Id=i(Yr,`
require 3 character language codes:`),Yr.forEach(t),ar=l(n),k(qn.$$.fragment,n),rr=l(n),ts=s(n,"P",{});var mu=a(ts);Ad=i(mu,"Here is the code to see all available pretrained models on the hub:"),mu.forEach(t),ir=l(n),k(En.$$.fragment,n),dr=l(n),mt=s(n,"H2",{class:!0});var Kr=a(mt);St=s(Kr,"A",{id:!0,class:!0,href:!0});var fu=a(St);Xs=s(fu,"SPAN",{});var _u=a(Xs);k(Pn.$$.fragment,_u),_u.forEach(t),fu.forEach(t),Sd=l(Kr),Qs=s(Kr,"SPAN",{});var gu=a(Qs);Od=i(gu,"Old Style Multi-Lingual Models"),gu.forEach(t),Kr.forEach(t),lr=l(n),ns=s(n,"P",{});var vu=a(ns);Hd=i(vu,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),vu.forEach(t),cr=l(n),k(Fn.$$.fragment,n),pr=l(n),os=s(n,"P",{});var ku=a(os);Dd=i(ku,"Example of translating english to many romance languages, using old-style 2 character language codes"),ku.forEach(t),hr=l(n),k(Nn.$$.fragment,n),ur=l(n),ft=s(n,"H2",{class:!0});var Zr=a(ft);Ot=s(Zr,"A",{id:!0,class:!0,href:!0});var Tu=a(Ot);ea=s(Tu,"SPAN",{});var Mu=a(ea);k(Cn.$$.fragment,Mu),Mu.forEach(t),Tu.forEach(t),Ud=l(Zr),ta=s(Zr,"SPAN",{});var bu=a(ta);Wd=i(bu,"MarianConfig"),bu.forEach(t),Zr.forEach(t),mr=l(n),le=s(n,"DIV",{class:!0});var Ye=a(le);k(Ln.$$.fragment,Ye),Rd=l(Ye),_t=s(Ye,"P",{});var bs=a(_t);Bd=i(bs,"This is the configuration class to store the configuration of a "),ss=s(bs,"A",{href:!0});var yu=a(ss);Vd=i(yu,"MarianModel"),yu.forEach(t),Gd=i(bs,`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),In=s(bs,"A",{href:!0,rel:!0});var xu=a(In);Jd=i(xu,"Helsinki-NLP/opus-mt-en-de"),xu.forEach(t),Yd=i(bs," architecture."),bs.forEach(t),Kd=l(Ye),gt=s(Ye,"P",{});var ys=a(gt);Zd=i(ys,"Configuration objects inherit from "),as=s(ys,"A",{href:!0});var wu=a(as);Xd=i(wu,"PretrainedConfig"),wu.forEach(t),Qd=i(ys,` and can be used to control the model outputs. Read the
documentation from `),rs=s(ys,"A",{href:!0});var zu=a(rs);el=i(zu,"PretrainedConfig"),zu.forEach(t),tl=i(ys," for more information."),ys.forEach(t),nl=l(Ye),na=s(Ye,"P",{});var $u=a(na);ol=i($u,"Examples:"),$u.forEach(t),sl=l(Ye),k(An.$$.fragment,Ye),Ye.forEach(t),fr=l(n),vt=s(n,"H2",{class:!0});var Xr=a(vt);Ht=s(Xr,"A",{id:!0,class:!0,href:!0});var ju=a(Ht);oa=s(ju,"SPAN",{});var qu=a(oa);k(Sn.$$.fragment,qu),qu.forEach(t),ju.forEach(t),al=l(Xr),sa=s(Xr,"SPAN",{});var Eu=a(sa);rl=i(Eu,"MarianTokenizer"),Eu.forEach(t),Xr.forEach(t),_r=l(n),W=s(n,"DIV",{class:!0});var Fe=a(W);k(On.$$.fragment,Fe),il=l(Fe),Hn=s(Fe,"P",{});var Qr=a(Hn);dl=i(Qr,"Construct a Marian tokenizer. Based on "),Dn=s(Qr,"A",{href:!0,rel:!0});var Pu=a(Dn);ll=i(Pu,"SentencePiece"),Pu.forEach(t),cl=i(Qr,"."),Qr.forEach(t),pl=l(Fe),Un=s(Fe,"P",{});var ei=a(Un);hl=i(ei,"This tokenizer inherits from "),is=s(ei,"A",{href:!0});var Fu=a(is);ul=i(Fu,"PreTrainedTokenizer"),Fu.forEach(t),ml=i(ei,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ei.forEach(t),fl=l(Fe),aa=s(Fe,"P",{});var Nu=a(aa);_l=i(Nu,"Examples:"),Nu.forEach(t),gl=l(Fe),k(Wn.$$.fragment,Fe),vl=l(Fe),Dt=s(Fe,"DIV",{class:!0});var ti=a(Dt);k(Rn.$$.fragment,ti),kl=l(ti),ra=s(ti,"P",{});var Cu=a(ra);Tl=i(Cu,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Cu.forEach(t),ti.forEach(t),Fe.forEach(t),gr=l(n),kt=s(n,"H2",{class:!0});var ni=a(kt);Ut=s(ni,"A",{id:!0,class:!0,href:!0});var Lu=a(Ut);ia=s(Lu,"SPAN",{});var Iu=a(ia);k(Bn.$$.fragment,Iu),Iu.forEach(t),Lu.forEach(t),Ml=l(ni),da=s(ni,"SPAN",{});var Au=a(da);bl=i(Au,"MarianModel"),Au.forEach(t),ni.forEach(t),vr=l(n),we=s(n,"DIV",{class:!0});var rn=a(we);k(Vn.$$.fragment,rn),yl=l(rn),Gn=s(rn,"P",{});var oi=a(Gn);xl=i(oi,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ds=s(oi,"A",{href:!0});var Su=a(ds);wl=i(Su,"PreTrainedModel"),Su.forEach(t),zl=i(oi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oi.forEach(t),$l=l(rn),Jn=s(rn,"P",{});var si=a(Jn);jl=i(si,"This model is also a PyTorch "),Yn=s(si,"A",{href:!0,rel:!0});var Ou=a(Yn);ql=i(Ou,"torch.nn.Module"),Ou.forEach(t),El=i(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),Pl=l(rn),me=s(rn,"DIV",{class:!0});var Ke=a(me);k(Kn.$$.fragment,Ke),Fl=l(Ke),Tt=s(Ke,"P",{});var xs=a(Tt);Nl=i(xs,"The "),ls=s(xs,"A",{href:!0});var Hu=a(ls);Cl=i(Hu,"MarianModel"),Hu.forEach(t),Ll=i(xs," forward method, overrides the "),la=s(xs,"CODE",{});var Du=a(la);Il=i(Du,"__call__"),Du.forEach(t),Al=i(xs," special method."),xs.forEach(t),Sl=l(Ke),k(Wt.$$.fragment,Ke),Ol=l(Ke),ca=s(Ke,"P",{});var Uu=a(ca);Hl=i(Uu,"Example:"),Uu.forEach(t),Dl=l(Ke),k(Zn.$$.fragment,Ke),Ke.forEach(t),rn.forEach(t),kr=l(n),Mt=s(n,"H2",{class:!0});var ai=a(Mt);Rt=s(ai,"A",{id:!0,class:!0,href:!0});var Wu=a(Rt);pa=s(Wu,"SPAN",{});var Ru=a(pa);k(Xn.$$.fragment,Ru),Ru.forEach(t),Wu.forEach(t),Ul=l(ai),ha=s(ai,"SPAN",{});var Bu=a(ha);Wl=i(Bu,"MarianMTModel"),Bu.forEach(t),ai.forEach(t),Tr=l(n),ze=s(n,"DIV",{class:!0});var dn=a(ze);k(Qn.$$.fragment,dn),Rl=l(dn),eo=s(dn,"P",{});var ri=a(eo);Bl=i(ri,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=s(ri,"A",{href:!0});var Vu=a(cs);Vl=i(Vu,"PreTrainedModel"),Vu.forEach(t),Gl=i(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),Jl=l(dn),to=s(dn,"P",{});var ii=a(to);Yl=i(ii,"This model is also a PyTorch "),no=s(ii,"A",{href:!0,rel:!0});var Gu=a(no);Kl=i(Gu,"torch.nn.Module"),Gu.forEach(t),Zl=i(ii,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ii.forEach(t),Xl=l(dn),Y=s(dn,"DIV",{class:!0});var Ne=a(Y);k(oo.$$.fragment,Ne),Ql=l(Ne),bt=s(Ne,"P",{});var ws=a(bt);ec=i(ws,"The "),ps=s(ws,"A",{href:!0});var Ju=a(ps);tc=i(Ju,"MarianMTModel"),Ju.forEach(t),nc=i(ws," forward method, overrides the "),ua=s(ws,"CODE",{});var Yu=a(ua);oc=i(Yu,"__call__"),Yu.forEach(t),sc=i(ws," special method."),ws.forEach(t),ac=l(Ne),k(Bt.$$.fragment,Ne),rc=l(Ne),so=s(Ne,"P",{});var di=a(so);ic=i(di,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),ao=s(di,"A",{href:!0,rel:!0});var Ku=a(ao);dc=i(Ku,"here"),Ku.forEach(t),lc=i(di,"."),di.forEach(t),cc=l(Ne),ma=s(Ne,"P",{});var Zu=a(ma);pc=i(Zu,"Examples:"),Zu.forEach(t),hc=l(Ne),k(ro.$$.fragment,Ne),Ne.forEach(t),dn.forEach(t),Mr=l(n),yt=s(n,"H2",{class:!0});var li=a(yt);Vt=s(li,"A",{id:!0,class:!0,href:!0});var Xu=a(Vt);fa=s(Xu,"SPAN",{});var Qu=a(fa);k(io.$$.fragment,Qu),Qu.forEach(t),Xu.forEach(t),uc=l(li),_a=s(li,"SPAN",{});var em=a(_a);mc=i(em,"MarianForCausalLM"),em.forEach(t),li.forEach(t),br=l(n),xt=s(n,"DIV",{class:!0});var ci=a(xt);k(lo.$$.fragment,ci),fc=l(ci),Je=s(ci,"DIV",{class:!0});var zs=a(Je);k(co.$$.fragment,zs),_c=l(zs),ga=s(zs,"P",{});var tm=a(ga);gc=i(tm,"Example:"),tm.forEach(t),vc=l(zs),k(po.$$.fragment,zs),zs.forEach(t),ci.forEach(t),yr=l(n),wt=s(n,"H2",{class:!0});var pi=a(wt);Gt=s(pi,"A",{id:!0,class:!0,href:!0});var nm=a(Gt);va=s(nm,"SPAN",{});var om=a(va);k(ho.$$.fragment,om),om.forEach(t),nm.forEach(t),kc=l(pi),ka=s(pi,"SPAN",{});var sm=a(ka);Tc=i(sm,"TFMarianModel"),sm.forEach(t),pi.forEach(t),xr=l(n),ce=s(n,"DIV",{class:!0});var Ze=a(ce);k(uo.$$.fragment,Ze),Mc=l(Ze),mo=s(Ze,"P",{});var hi=a(mo);bc=i(hi,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hs=s(hi,"A",{href:!0});var am=a(hs);yc=i(am,"TFPreTrainedModel"),am.forEach(t),xc=i(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),wc=l(Ze),fo=s(Ze,"P",{});var ui=a(fo);zc=i(ui,"This model is also a "),_o=s(ui,"A",{href:!0,rel:!0});var rm=a(_o);$c=i(rm,"tf.keras.Model"),rm.forEach(t),jc=i(ui,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ui.forEach(t),qc=l(Ze),k(Jt.$$.fragment,Ze),Ec=l(Ze),fe=s(Ze,"DIV",{class:!0});var Xe=a(fe);k(go.$$.fragment,Xe),Pc=l(Xe),zt=s(Xe,"P",{});var $s=a(zt);Fc=i($s,"The "),us=s($s,"A",{href:!0});var im=a(us);Nc=i(im,"TFMarianModel"),im.forEach(t),Cc=i($s," forward method, overrides the "),Ta=s($s,"CODE",{});var dm=a(Ta);Lc=i(dm,"__call__"),dm.forEach(t),Ic=i($s," special method."),$s.forEach(t),Ac=l(Xe),k(Yt.$$.fragment,Xe),Sc=l(Xe),Ma=s(Xe,"P",{});var lm=a(Ma);Oc=i(lm,"Example:"),lm.forEach(t),Hc=l(Xe),k(vo.$$.fragment,Xe),Xe.forEach(t),Ze.forEach(t),wr=l(n),$t=s(n,"H2",{class:!0});var mi=a($t);Kt=s(mi,"A",{id:!0,class:!0,href:!0});var cm=a(Kt);ba=s(cm,"SPAN",{});var pm=a(ba);k(ko.$$.fragment,pm),pm.forEach(t),cm.forEach(t),Dc=l(mi),ya=s(mi,"SPAN",{});var hm=a(ya);Uc=i(hm,"TFMarianMTModel"),hm.forEach(t),mi.forEach(t),zr=l(n),pe=s(n,"DIV",{class:!0});var Qe=a(pe);k(To.$$.fragment,Qe),Wc=l(Qe),Mo=s(Qe,"P",{});var fi=a(Mo);Rc=i(fi,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),ms=s(fi,"A",{href:!0});var um=a(ms);Bc=i(um,"TFPreTrainedModel"),um.forEach(t),Vc=i(fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fi.forEach(t),Gc=l(Qe),bo=s(Qe,"P",{});var _i=a(bo);Jc=i(_i,"This model is also a "),yo=s(_i,"A",{href:!0,rel:!0});var mm=a(yo);Yc=i(mm,"tf.keras.Model"),mm.forEach(t),Kc=i(_i,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_i.forEach(t),Zc=l(Qe),k(Zt.$$.fragment,Qe),Xc=l(Qe),K=s(Qe,"DIV",{class:!0});var Ce=a(K);k(xo.$$.fragment,Ce),Qc=l(Ce),jt=s(Ce,"P",{});var js=a(jt);ep=i(js,"The "),fs=s(js,"A",{href:!0});var fm=a(fs);tp=i(fm,"TFMarianMTModel"),fm.forEach(t),np=i(js," forward method, overrides the "),xa=s(js,"CODE",{});var _m=a(xa);op=i(_m,"__call__"),_m.forEach(t),sp=i(js," special method."),js.forEach(t),ap=l(Ce),k(Xt.$$.fragment,Ce),rp=l(Ce),wo=s(Ce,"P",{});var gi=a(wo);ip=i(gi,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),zo=s(gi,"A",{href:!0,rel:!0});var gm=a(zo);dp=i(gm,"here"),gm.forEach(t),lp=i(gi,"."),gi.forEach(t),cp=l(Ce),wa=s(Ce,"P",{});var vm=a(wa);pp=i(vm,"Examples:"),vm.forEach(t),hp=l(Ce),k($o.$$.fragment,Ce),Ce.forEach(t),Qe.forEach(t),$r=l(n),qt=s(n,"H2",{class:!0});var vi=a(qt);Qt=s(vi,"A",{id:!0,class:!0,href:!0});var km=a(Qt);za=s(km,"SPAN",{});var Tm=a(za);k(jo.$$.fragment,Tm),Tm.forEach(t),km.forEach(t),up=l(vi),$a=s(vi,"SPAN",{});var Mm=a($a);mp=i(Mm,"FlaxMarianModel"),Mm.forEach(t),vi.forEach(t),jr=l(n),R=s(n,"DIV",{class:!0});var Le=a(R);k(qo.$$.fragment,Le),fp=l(Le),Eo=s(Le,"P",{});var ki=a(Eo);_p=i(ki,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),_s=s(ki,"A",{href:!0});var bm=a(_s);gp=i(bm,"FlaxPreTrainedModel"),bm.forEach(t),vp=i(ki,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ki.forEach(t),kp=l(Le),Po=s(Le,"P",{});var Ti=a(Po);Tp=i(Ti,`This model is also a Flax Linen
`),Fo=s(Ti,"A",{href:!0,rel:!0});var ym=a(Fo);Mp=i(ym,"flax.nn.Module"),ym.forEach(t),bp=i(Ti,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ti.forEach(t),yp=l(Le),ja=s(Le,"P",{});var xm=a(ja);xp=i(xm,"Finally, this model supports inherent JAX features such as:"),xm.forEach(t),wp=l(Le),Ve=s(Le,"UL",{});var ln=a(Ve);qa=s(ln,"LI",{});var wm=a(qa);No=s(wm,"A",{href:!0,rel:!0});var zm=a(No);zp=i(zm,"Just-In-Time (JIT) compilation"),zm.forEach(t),wm.forEach(t),$p=l(ln),Ea=s(ln,"LI",{});var $m=a(Ea);Co=s($m,"A",{href:!0,rel:!0});var jm=a(Co);jp=i(jm,"Automatic Differentiation"),jm.forEach(t),$m.forEach(t),qp=l(ln),Pa=s(ln,"LI",{});var qm=a(Pa);Lo=s(qm,"A",{href:!0,rel:!0});var Em=a(Lo);Ep=i(Em,"Vectorization"),Em.forEach(t),qm.forEach(t),Pp=l(ln),Fa=s(ln,"LI",{});var Pm=a(Fa);Io=s(Pm,"A",{href:!0,rel:!0});var Fm=a(Io);Fp=i(Fm,"Parallelization"),Fm.forEach(t),Pm.forEach(t),ln.forEach(t),Np=l(Le),_e=s(Le,"DIV",{class:!0});var et=a(_e);k(Ao.$$.fragment,et),Cp=l(et),Et=s(et,"P",{});var qs=a(Et);Lp=i(qs,"The "),Na=s(qs,"CODE",{});var Nm=a(Na);Ip=i(Nm,"FlaxMarianPreTrainedModel"),Nm.forEach(t),Ap=i(qs,"forward method, overrides the "),Ca=s(qs,"CODE",{});var Cm=a(Ca);Sp=i(Cm,"__call__"),Cm.forEach(t),Op=i(qs," special method."),qs.forEach(t),Hp=l(et),k(en.$$.fragment,et),Dp=l(et),La=s(et,"P",{});var Lm=a(La);Up=i(Lm,"Example:"),Lm.forEach(t),Wp=l(et),k(So.$$.fragment,et),et.forEach(t),Le.forEach(t),qr=l(n),Pt=s(n,"H2",{class:!0});var Mi=a(Pt);tn=s(Mi,"A",{id:!0,class:!0,href:!0});var Im=a(tn);Ia=s(Im,"SPAN",{});var Am=a(Ia);k(Oo.$$.fragment,Am),Am.forEach(t),Im.forEach(t),Rp=l(Mi),Aa=s(Mi,"SPAN",{});var Sm=a(Aa);Bp=i(Sm,"FlaxMarianMTModel"),Sm.forEach(t),Mi.forEach(t),Er=l(n),B=s(n,"DIV",{class:!0});var Ie=a(B);k(Ho.$$.fragment,Ie),Vp=l(Ie),Do=s(Ie,"P",{});var bi=a(Do);Gp=i(bi,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),gs=s(bi,"A",{href:!0});var Om=a(gs);Jp=i(Om,"FlaxPreTrainedModel"),Om.forEach(t),Yp=i(bi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi.forEach(t),Kp=l(Ie),Uo=s(Ie,"P",{});var yi=a(Uo);Zp=i(yi,`This model is also a Flax Linen
`),Wo=s(yi,"A",{href:!0,rel:!0});var Hm=a(Wo);Xp=i(Hm,"flax.nn.Module"),Hm.forEach(t),Qp=i(yi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yi.forEach(t),eh=l(Ie),Sa=s(Ie,"P",{});var Dm=a(Sa);th=i(Dm,"Finally, this model supports inherent JAX features such as:"),Dm.forEach(t),nh=l(Ie),Ge=s(Ie,"UL",{});var cn=a(Ge);Oa=s(cn,"LI",{});var Um=a(Oa);Ro=s(Um,"A",{href:!0,rel:!0});var Wm=a(Ro);oh=i(Wm,"Just-In-Time (JIT) compilation"),Wm.forEach(t),Um.forEach(t),sh=l(cn),Ha=s(cn,"LI",{});var Rm=a(Ha);Bo=s(Rm,"A",{href:!0,rel:!0});var Bm=a(Bo);ah=i(Bm,"Automatic Differentiation"),Bm.forEach(t),Rm.forEach(t),rh=l(cn),Da=s(cn,"LI",{});var Vm=a(Da);Vo=s(Vm,"A",{href:!0,rel:!0});var Gm=a(Vo);ih=i(Gm,"Vectorization"),Gm.forEach(t),Vm.forEach(t),dh=l(cn),Ua=s(cn,"LI",{});var Jm=a(Ua);Go=s(Jm,"A",{href:!0,rel:!0});var Ym=a(Go);lh=i(Ym,"Parallelization"),Ym.forEach(t),Jm.forEach(t),cn.forEach(t),ch=l(Ie),ge=s(Ie,"DIV",{class:!0});var tt=a(ge);k(Jo.$$.fragment,tt),ph=l(tt),Ft=s(tt,"P",{});var Es=a(Ft);hh=i(Es,"The "),Wa=s(Es,"CODE",{});var Km=a(Wa);uh=i(Km,"FlaxMarianPreTrainedModel"),Km.forEach(t),mh=i(Es,"forward method, overrides the "),Ra=s(Es,"CODE",{});var Zm=a(Ra);fh=i(Zm,"__call__"),Zm.forEach(t),_h=i(Es," special method."),Es.forEach(t),gh=l(tt),k(nn.$$.fragment,tt),vh=l(tt),Ba=s(tt,"P",{});var Xm=a(Ba);kh=i(Xm,"Example:"),Xm.forEach(t),Th=l(tt),k(Yo.$$.fragment,tt),tt.forEach(t),Ie.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(uf)),c(_,"id","marianmt"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#marianmt"),c(f,"class","relative group"),c(Q,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(Q,"rel","nofollow"),c(E,"id","implementation-notes"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#implementation-notes"),c(L,"class","relative group"),c(re,"href","https://huggingface.co/Helsinki-NLP"),c(re,"rel","nofollow"),c(j,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),c(j,"rel","nofollow"),c(ye,"href","https://marian-nmt.github.io/"),c(ye,"rel","nofollow"),c(Zo,"href","/docs/transformers/pr_16113/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(_n,"href","https://huggingface.co/sshleifer"),c(_n,"rel","nofollow"),c(Nt,"id","naming"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#naming"),c(ct,"class","relative group"),c(kn,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),c(kn,"rel","nofollow"),c(Ct,"id","examples"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#examples"),c(ht,"class","relative group"),c(Mn,"href","https://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh"),c(Mn,"rel","nofollow"),c(es,"href","thttps://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh"),c(It,"id","multilingual-models"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#multilingual-models"),c(ut,"class","relative group"),c(zn,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),c(zn,"rel","nofollow"),c(jn,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),c(jn,"rel","nofollow"),c(St,"id","old-style-multilingual-models"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#old-style-multilingual-models"),c(mt,"class","relative group"),c(Ot,"id","transformers.MarianConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.MarianConfig"),c(ft,"class","relative group"),c(ss,"href","/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianModel"),c(In,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),c(In,"rel","nofollow"),c(as,"href","/docs/transformers/pr_16113/en/main_classes/configuration#transformers.PretrainedConfig"),c(rs,"href","/docs/transformers/pr_16113/en/main_classes/configuration#transformers.PretrainedConfig"),c(le,"class","docstring"),c(Ht,"id","transformers.MarianTokenizer"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.MarianTokenizer"),c(vt,"class","relative group"),c(Dn,"href","https://github.com/google/sentencepiece"),c(Dn,"rel","nofollow"),c(is,"href","/docs/transformers/pr_16113/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Dt,"class","docstring"),c(W,"class","docstring"),c(Ut,"id","transformers.MarianModel"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.MarianModel"),c(kt,"class","relative group"),c(ds,"href","/docs/transformers/pr_16113/en/main_classes/model#transformers.PreTrainedModel"),c(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yn,"rel","nofollow"),c(ls,"href","/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianModel"),c(me,"class","docstring"),c(we,"class","docstring"),c(Rt,"id","transformers.MarianMTModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.MarianMTModel"),c(Mt,"class","relative group"),c(cs,"href","/docs/transformers/pr_16113/en/main_classes/model#transformers.PreTrainedModel"),c(no,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(no,"rel","nofollow"),c(ps,"href","/docs/transformers/pr_16113/en/model_doc/marian#transformers.MarianMTModel"),c(ao,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(ao,"rel","nofollow"),c(Y,"class","docstring"),c(ze,"class","docstring"),c(Vt,"id","transformers.MarianForCausalLM"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.MarianForCausalLM"),c(yt,"class","relative group"),c(Je,"class","docstring"),c(xt,"class","docstring"),c(Gt,"id","transformers.TFMarianModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFMarianModel"),c(wt,"class","relative group"),c(hs,"href","/docs/transformers/pr_16113/en/main_classes/model#transformers.TFPreTrainedModel"),c(_o,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_o,"rel","nofollow"),c(us,"href","/docs/transformers/pr_16113/en/model_doc/marian#transformers.TFMarianModel"),c(fe,"class","docstring"),c(ce,"class","docstring"),c(Kt,"id","transformers.TFMarianMTModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFMarianMTModel"),c($t,"class","relative group"),c(ms,"href","/docs/transformers/pr_16113/en/main_classes/model#transformers.TFPreTrainedModel"),c(yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(yo,"rel","nofollow"),c(fs,"href","/docs/transformers/pr_16113/en/model_doc/marian#transformers.TFMarianMTModel"),c(zo,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(zo,"rel","nofollow"),c(K,"class","docstring"),c(pe,"class","docstring"),c(Qt,"id","transformers.FlaxMarianModel"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.FlaxMarianModel"),c(qt,"class","relative group"),c(_s,"href","/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Fo,"rel","nofollow"),c(No,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(No,"rel","nofollow"),c(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Co,"rel","nofollow"),c(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Lo,"rel","nofollow"),c(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Io,"rel","nofollow"),c(_e,"class","docstring"),c(R,"class","docstring"),c(tn,"id","transformers.FlaxMarianMTModel"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.FlaxMarianMTModel"),c(Pt,"class","relative group"),c(gs,"href","/docs/transformers/pr_16113/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Wo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Wo,"rel","nofollow"),c(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ro,"rel","nofollow"),c(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Bo,"rel","nofollow"),c(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vo,"rel","nofollow"),c(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Go,"rel","nofollow"),c(ge,"class","docstring"),c(B,"class","docstring")},m(n,p){e(document.head,u),h(n,z,p),h(n,f,p),e(f,_),e(_,w),T(x,w,null),e(f,g),e(f,$),e($,Ae),h(n,ue,p),h(n,q,p),e(q,ve),e(ve,X),e(q,Se),e(q,Q),e(Q,ee),e(q,Oe),h(n,je,p),h(n,G,p),e(G,A),h(n,qe,p),h(n,L,p),e(L,E),e(E,F),T(te,F,null),e(L,ne),e(L,ke),e(ke,He),h(n,J,p),h(n,P,p),e(P,Te),e(Te,N),e(N,De),e(P,oe),e(P,Me),e(Me,se),e(se,ae),e(se,re),e(re,Ue),e(se,S),e(P,We),e(P,O),e(O,H),e(H,m),e(H,j),e(j,be),e(H,nt),e(H,ye),e(ye,D),e(H,ot),e(P,st),e(P,Re),e(Re,I),e(I,ie),e(P,at),e(P,Be),e(Be,U),e(U,rt),e(P,it),e(P,de),e(de,xe),e(xe,xi),e(xe,Zo),e(Zo,wi),e(xe,zi),e(de,$i),e(de,dt),e(dt,hn),e(hn,ji),e(hn,Ps),e(Ps,qi),e(hn,Ei),e(dt,Pi),e(dt,un),e(un,Fi),e(un,Fs),e(Fs,Ni),e(un,Ci),e(dt,Li),e(dt,lt),e(lt,Ii),e(lt,Ns),e(Ns,Ai),e(lt,Si),e(lt,Cs),e(Cs,Oi),e(lt,Hi),e(P,Di),e(P,Ls),e(Ls,mn),e(mn,Ui),e(mn,Is),e(Is,Wi),e(mn,Ri),e(P,Bi),e(P,As),e(As,fn),e(fn,Vi),e(fn,_n),e(_n,Gi),e(fn,Ji),h(n,Xa,p),h(n,ct,p),e(ct,Nt),e(Nt,Ss),T(gn,Ss,null),e(ct,Yi),e(ct,Os),e(Os,Ki),h(n,Qa,p),h(n,Ee,p),e(Ee,Xo),e(Xo,Zi),e(Xo,Hs),e(Hs,Xi),e(Ee,Qi),e(Ee,vn),e(vn,ed),e(vn,kn),e(kn,td),e(vn,nd),e(Ee,od),e(Ee,pt),e(pt,sd),e(pt,Ds),e(Ds,ad),e(pt,rd),e(pt,Us),e(Us,id),e(pt,dd),e(Ee,ld),e(Ee,Ws),e(Ws,cd),h(n,er,p),h(n,ht,p),e(ht,Ct),e(Ct,Rs),T(Tn,Rs,null),e(ht,pd),e(ht,Bs),e(Bs,hd),h(n,tr,p),h(n,Lt,p),e(Lt,Qo),e(Qo,ud),e(Qo,Mn),e(Mn,md),e(Lt,fd),e(Lt,Vs),e(Vs,es),e(es,_d),h(n,nr,p),h(n,ut,p),e(ut,It),e(It,Gs),T(bn,Gs,null),e(ut,gd),e(ut,Js),e(Js,vd),h(n,or,p),h(n,Pe,p),e(Pe,yn),e(yn,kd),e(yn,Ys),e(Ys,Td),e(yn,Md),e(Pe,bd),e(Pe,xn),e(xn,yd),e(xn,Ks),e(Ks,xd),e(xn,wd),e(Pe,zd),e(Pe,wn),e(wn,$d),e(wn,zn),e(zn,jd),e(wn,qd),e(Pe,Ed),e(Pe,$n),e($n,Pd),e($n,Zs),e(Zs,Fd),e($n,Nd),h(n,sr,p),h(n,At,p),e(At,Cd),e(At,jn),e(jn,Ld),e(At,Id),h(n,ar,p),T(qn,n,p),h(n,rr,p),h(n,ts,p),e(ts,Ad),h(n,ir,p),T(En,n,p),h(n,dr,p),h(n,mt,p),e(mt,St),e(St,Xs),T(Pn,Xs,null),e(mt,Sd),e(mt,Qs),e(Qs,Od),h(n,lr,p),h(n,ns,p),e(ns,Hd),h(n,cr,p),T(Fn,n,p),h(n,pr,p),h(n,os,p),e(os,Dd),h(n,hr,p),T(Nn,n,p),h(n,ur,p),h(n,ft,p),e(ft,Ot),e(Ot,ea),T(Cn,ea,null),e(ft,Ud),e(ft,ta),e(ta,Wd),h(n,mr,p),h(n,le,p),T(Ln,le,null),e(le,Rd),e(le,_t),e(_t,Bd),e(_t,ss),e(ss,Vd),e(_t,Gd),e(_t,In),e(In,Jd),e(_t,Yd),e(le,Kd),e(le,gt),e(gt,Zd),e(gt,as),e(as,Xd),e(gt,Qd),e(gt,rs),e(rs,el),e(gt,tl),e(le,nl),e(le,na),e(na,ol),e(le,sl),T(An,le,null),h(n,fr,p),h(n,vt,p),e(vt,Ht),e(Ht,oa),T(Sn,oa,null),e(vt,al),e(vt,sa),e(sa,rl),h(n,_r,p),h(n,W,p),T(On,W,null),e(W,il),e(W,Hn),e(Hn,dl),e(Hn,Dn),e(Dn,ll),e(Hn,cl),e(W,pl),e(W,Un),e(Un,hl),e(Un,is),e(is,ul),e(Un,ml),e(W,fl),e(W,aa),e(aa,_l),e(W,gl),T(Wn,W,null),e(W,vl),e(W,Dt),T(Rn,Dt,null),e(Dt,kl),e(Dt,ra),e(ra,Tl),h(n,gr,p),h(n,kt,p),e(kt,Ut),e(Ut,ia),T(Bn,ia,null),e(kt,Ml),e(kt,da),e(da,bl),h(n,vr,p),h(n,we,p),T(Vn,we,null),e(we,yl),e(we,Gn),e(Gn,xl),e(Gn,ds),e(ds,wl),e(Gn,zl),e(we,$l),e(we,Jn),e(Jn,jl),e(Jn,Yn),e(Yn,ql),e(Jn,El),e(we,Pl),e(we,me),T(Kn,me,null),e(me,Fl),e(me,Tt),e(Tt,Nl),e(Tt,ls),e(ls,Cl),e(Tt,Ll),e(Tt,la),e(la,Il),e(Tt,Al),e(me,Sl),T(Wt,me,null),e(me,Ol),e(me,ca),e(ca,Hl),e(me,Dl),T(Zn,me,null),h(n,kr,p),h(n,Mt,p),e(Mt,Rt),e(Rt,pa),T(Xn,pa,null),e(Mt,Ul),e(Mt,ha),e(ha,Wl),h(n,Tr,p),h(n,ze,p),T(Qn,ze,null),e(ze,Rl),e(ze,eo),e(eo,Bl),e(eo,cs),e(cs,Vl),e(eo,Gl),e(ze,Jl),e(ze,to),e(to,Yl),e(to,no),e(no,Kl),e(to,Zl),e(ze,Xl),e(ze,Y),T(oo,Y,null),e(Y,Ql),e(Y,bt),e(bt,ec),e(bt,ps),e(ps,tc),e(bt,nc),e(bt,ua),e(ua,oc),e(bt,sc),e(Y,ac),T(Bt,Y,null),e(Y,rc),e(Y,so),e(so,ic),e(so,ao),e(ao,dc),e(so,lc),e(Y,cc),e(Y,ma),e(ma,pc),e(Y,hc),T(ro,Y,null),h(n,Mr,p),h(n,yt,p),e(yt,Vt),e(Vt,fa),T(io,fa,null),e(yt,uc),e(yt,_a),e(_a,mc),h(n,br,p),h(n,xt,p),T(lo,xt,null),e(xt,fc),e(xt,Je),T(co,Je,null),e(Je,_c),e(Je,ga),e(ga,gc),e(Je,vc),T(po,Je,null),h(n,yr,p),h(n,wt,p),e(wt,Gt),e(Gt,va),T(ho,va,null),e(wt,kc),e(wt,ka),e(ka,Tc),h(n,xr,p),h(n,ce,p),T(uo,ce,null),e(ce,Mc),e(ce,mo),e(mo,bc),e(mo,hs),e(hs,yc),e(mo,xc),e(ce,wc),e(ce,fo),e(fo,zc),e(fo,_o),e(_o,$c),e(fo,jc),e(ce,qc),T(Jt,ce,null),e(ce,Ec),e(ce,fe),T(go,fe,null),e(fe,Pc),e(fe,zt),e(zt,Fc),e(zt,us),e(us,Nc),e(zt,Cc),e(zt,Ta),e(Ta,Lc),e(zt,Ic),e(fe,Ac),T(Yt,fe,null),e(fe,Sc),e(fe,Ma),e(Ma,Oc),e(fe,Hc),T(vo,fe,null),h(n,wr,p),h(n,$t,p),e($t,Kt),e(Kt,ba),T(ko,ba,null),e($t,Dc),e($t,ya),e(ya,Uc),h(n,zr,p),h(n,pe,p),T(To,pe,null),e(pe,Wc),e(pe,Mo),e(Mo,Rc),e(Mo,ms),e(ms,Bc),e(Mo,Vc),e(pe,Gc),e(pe,bo),e(bo,Jc),e(bo,yo),e(yo,Yc),e(bo,Kc),e(pe,Zc),T(Zt,pe,null),e(pe,Xc),e(pe,K),T(xo,K,null),e(K,Qc),e(K,jt),e(jt,ep),e(jt,fs),e(fs,tp),e(jt,np),e(jt,xa),e(xa,op),e(jt,sp),e(K,ap),T(Xt,K,null),e(K,rp),e(K,wo),e(wo,ip),e(wo,zo),e(zo,dp),e(wo,lp),e(K,cp),e(K,wa),e(wa,pp),e(K,hp),T($o,K,null),h(n,$r,p),h(n,qt,p),e(qt,Qt),e(Qt,za),T(jo,za,null),e(qt,up),e(qt,$a),e($a,mp),h(n,jr,p),h(n,R,p),T(qo,R,null),e(R,fp),e(R,Eo),e(Eo,_p),e(Eo,_s),e(_s,gp),e(Eo,vp),e(R,kp),e(R,Po),e(Po,Tp),e(Po,Fo),e(Fo,Mp),e(Po,bp),e(R,yp),e(R,ja),e(ja,xp),e(R,wp),e(R,Ve),e(Ve,qa),e(qa,No),e(No,zp),e(Ve,$p),e(Ve,Ea),e(Ea,Co),e(Co,jp),e(Ve,qp),e(Ve,Pa),e(Pa,Lo),e(Lo,Ep),e(Ve,Pp),e(Ve,Fa),e(Fa,Io),e(Io,Fp),e(R,Np),e(R,_e),T(Ao,_e,null),e(_e,Cp),e(_e,Et),e(Et,Lp),e(Et,Na),e(Na,Ip),e(Et,Ap),e(Et,Ca),e(Ca,Sp),e(Et,Op),e(_e,Hp),T(en,_e,null),e(_e,Dp),e(_e,La),e(La,Up),e(_e,Wp),T(So,_e,null),h(n,qr,p),h(n,Pt,p),e(Pt,tn),e(tn,Ia),T(Oo,Ia,null),e(Pt,Rp),e(Pt,Aa),e(Aa,Bp),h(n,Er,p),h(n,B,p),T(Ho,B,null),e(B,Vp),e(B,Do),e(Do,Gp),e(Do,gs),e(gs,Jp),e(Do,Yp),e(B,Kp),e(B,Uo),e(Uo,Zp),e(Uo,Wo),e(Wo,Xp),e(Uo,Qp),e(B,eh),e(B,Sa),e(Sa,th),e(B,nh),e(B,Ge),e(Ge,Oa),e(Oa,Ro),e(Ro,oh),e(Ge,sh),e(Ge,Ha),e(Ha,Bo),e(Bo,ah),e(Ge,rh),e(Ge,Da),e(Da,Vo),e(Vo,ih),e(Ge,dh),e(Ge,Ua),e(Ua,Go),e(Go,lh),e(B,ch),e(B,ge),T(Jo,ge,null),e(ge,ph),e(ge,Ft),e(Ft,hh),e(Ft,Wa),e(Wa,uh),e(Ft,mh),e(Ft,Ra),e(Ra,fh),e(Ft,_h),e(ge,gh),T(nn,ge,null),e(ge,vh),e(ge,Ba),e(Ba,kh),e(ge,Th),T(Yo,ge,null),Pr=!0},p(n,[p]){const Ko={};p&2&&(Ko.$$scope={dirty:p,ctx:n}),Wt.$set(Ko);const Va={};p&2&&(Va.$$scope={dirty:p,ctx:n}),Bt.$set(Va);const Ga={};p&2&&(Ga.$$scope={dirty:p,ctx:n}),Jt.$set(Ga);const Ja={};p&2&&(Ja.$$scope={dirty:p,ctx:n}),Yt.$set(Ja);const on={};p&2&&(on.$$scope={dirty:p,ctx:n}),Zt.$set(on);const Ya={};p&2&&(Ya.$$scope={dirty:p,ctx:n}),Xt.$set(Ya);const Ka={};p&2&&(Ka.$$scope={dirty:p,ctx:n}),en.$set(Ka);const Za={};p&2&&(Za.$$scope={dirty:p,ctx:n}),nn.$set(Za)},i(n){Pr||(M(x.$$.fragment,n),M(te.$$.fragment,n),M(gn.$$.fragment,n),M(Tn.$$.fragment,n),M(bn.$$.fragment,n),M(qn.$$.fragment,n),M(En.$$.fragment,n),M(Pn.$$.fragment,n),M(Fn.$$.fragment,n),M(Nn.$$.fragment,n),M(Cn.$$.fragment,n),M(Ln.$$.fragment,n),M(An.$$.fragment,n),M(Sn.$$.fragment,n),M(On.$$.fragment,n),M(Wn.$$.fragment,n),M(Rn.$$.fragment,n),M(Bn.$$.fragment,n),M(Vn.$$.fragment,n),M(Kn.$$.fragment,n),M(Wt.$$.fragment,n),M(Zn.$$.fragment,n),M(Xn.$$.fragment,n),M(Qn.$$.fragment,n),M(oo.$$.fragment,n),M(Bt.$$.fragment,n),M(ro.$$.fragment,n),M(io.$$.fragment,n),M(lo.$$.fragment,n),M(co.$$.fragment,n),M(po.$$.fragment,n),M(ho.$$.fragment,n),M(uo.$$.fragment,n),M(Jt.$$.fragment,n),M(go.$$.fragment,n),M(Yt.$$.fragment,n),M(vo.$$.fragment,n),M(ko.$$.fragment,n),M(To.$$.fragment,n),M(Zt.$$.fragment,n),M(xo.$$.fragment,n),M(Xt.$$.fragment,n),M($o.$$.fragment,n),M(jo.$$.fragment,n),M(qo.$$.fragment,n),M(Ao.$$.fragment,n),M(en.$$.fragment,n),M(So.$$.fragment,n),M(Oo.$$.fragment,n),M(Ho.$$.fragment,n),M(Jo.$$.fragment,n),M(nn.$$.fragment,n),M(Yo.$$.fragment,n),Pr=!0)},o(n){b(x.$$.fragment,n),b(te.$$.fragment,n),b(gn.$$.fragment,n),b(Tn.$$.fragment,n),b(bn.$$.fragment,n),b(qn.$$.fragment,n),b(En.$$.fragment,n),b(Pn.$$.fragment,n),b(Fn.$$.fragment,n),b(Nn.$$.fragment,n),b(Cn.$$.fragment,n),b(Ln.$$.fragment,n),b(An.$$.fragment,n),b(Sn.$$.fragment,n),b(On.$$.fragment,n),b(Wn.$$.fragment,n),b(Rn.$$.fragment,n),b(Bn.$$.fragment,n),b(Vn.$$.fragment,n),b(Kn.$$.fragment,n),b(Wt.$$.fragment,n),b(Zn.$$.fragment,n),b(Xn.$$.fragment,n),b(Qn.$$.fragment,n),b(oo.$$.fragment,n),b(Bt.$$.fragment,n),b(ro.$$.fragment,n),b(io.$$.fragment,n),b(lo.$$.fragment,n),b(co.$$.fragment,n),b(po.$$.fragment,n),b(ho.$$.fragment,n),b(uo.$$.fragment,n),b(Jt.$$.fragment,n),b(go.$$.fragment,n),b(Yt.$$.fragment,n),b(vo.$$.fragment,n),b(ko.$$.fragment,n),b(To.$$.fragment,n),b(Zt.$$.fragment,n),b(xo.$$.fragment,n),b(Xt.$$.fragment,n),b($o.$$.fragment,n),b(jo.$$.fragment,n),b(qo.$$.fragment,n),b(Ao.$$.fragment,n),b(en.$$.fragment,n),b(So.$$.fragment,n),b(Oo.$$.fragment,n),b(Ho.$$.fragment,n),b(Jo.$$.fragment,n),b(nn.$$.fragment,n),b(Yo.$$.fragment,n),Pr=!1},d(n){t(u),n&&t(z),n&&t(f),y(x),n&&t(ue),n&&t(q),n&&t(je),n&&t(G),n&&t(qe),n&&t(L),y(te),n&&t(J),n&&t(P),n&&t(Xa),n&&t(ct),y(gn),n&&t(Qa),n&&t(Ee),n&&t(er),n&&t(ht),y(Tn),n&&t(tr),n&&t(Lt),n&&t(nr),n&&t(ut),y(bn),n&&t(or),n&&t(Pe),n&&t(sr),n&&t(At),n&&t(ar),y(qn,n),n&&t(rr),n&&t(ts),n&&t(ir),y(En,n),n&&t(dr),n&&t(mt),y(Pn),n&&t(lr),n&&t(ns),n&&t(cr),y(Fn,n),n&&t(pr),n&&t(os),n&&t(hr),y(Nn,n),n&&t(ur),n&&t(ft),y(Cn),n&&t(mr),n&&t(le),y(Ln),y(An),n&&t(fr),n&&t(vt),y(Sn),n&&t(_r),n&&t(W),y(On),y(Wn),y(Rn),n&&t(gr),n&&t(kt),y(Bn),n&&t(vr),n&&t(we),y(Vn),y(Kn),y(Wt),y(Zn),n&&t(kr),n&&t(Mt),y(Xn),n&&t(Tr),n&&t(ze),y(Qn),y(oo),y(Bt),y(ro),n&&t(Mr),n&&t(yt),y(io),n&&t(br),n&&t(xt),y(lo),y(co),y(po),n&&t(yr),n&&t(wt),y(ho),n&&t(xr),n&&t(ce),y(uo),y(Jt),y(go),y(Yt),y(vo),n&&t(wr),n&&t($t),y(ko),n&&t(zr),n&&t(pe),y(To),y(Zt),y(xo),y(Xt),y($o),n&&t($r),n&&t(qt),y(jo),n&&t(jr),n&&t(R),y(qo),y(Ao),y(en),y(So),n&&t(qr),n&&t(Pt),y(Oo),n&&t(Er),n&&t(B),y(Ho),y(Jo),y(nn),y(Yo)}}}const uf={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function mf(C,u,z){let{fw:f}=u;return C.$$set=_=>{"fw"in _&&z(0,f=_.fw)},[f]}class Mf extends Qm{constructor(u){super();ef(this,u,mf,hf,tf,{fw:0})}}export{Mf as default,uf as metadata};
