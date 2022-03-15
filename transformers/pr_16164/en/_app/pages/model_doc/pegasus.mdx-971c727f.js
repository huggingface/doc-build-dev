import{S as Ck,i as Sk,s as Ok,e as n,k as d,w as m,t as r,M as Ak,c as s,d as t,m as l,a,x as g,h as i,b as c,F as e,g as p,y as f,q as _,o as k,B as v}from"../../chunks/vendor-4833417e.js";import{T as qo}from"../../chunks/Tip-fffd6df1.js";import{D as M}from"../../chunks/Docstring-4f315ed9.js";import{C as Se}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Z}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Ik(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){p(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Lk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){p(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Nk(G){let h,z,b,T,x,w,P,$,Oe,me,F,we,ae,Ae,re,ie,Ie,Me,D,O,xe,K,C,S,Le,Y,ee,Ne,U,Ge,De,A,ge,de,je,te,V,Ue,Be,B,We,oe,H;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),T=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),$=n("li"),Oe=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=d(),F=n("p"),we=r("This second option is useful when using "),ae=n("code"),Ae=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Ie=r("model(inputs)"),Me=r("."),D=d(),O=n("p"),xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=d(),C=n("ul"),S=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ne=r(" only and nothing else: "),U=n("code"),Ge=r("model(input_ids)"),De=d(),A=n("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),je=r("model([input_ids, attention_mask])"),te=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),Be=d(),B=n("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){h=s(y,"P",{});var q=a(h);z=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(y),T=s(y,"UL",{});var ze=a(T);x=s(ze,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l(ze),$=s(ze,"LI",{});var $e=a($);Oe=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),ze.forEach(t),me=l(y),F=s(y,"P",{});var Q=a(F);we=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var gt=a(ae);Ae=i(gt,"tf.keras.Model.fit"),gt.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Ve=a(ie);Ie=i(Ve,"model(inputs)"),Ve.forEach(t),Me=i(Q,"."),Q.forEach(t),D=l(y),O=s(y,"P",{});var le=a(O);xe=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),K=l(y),C=s(y,"UL",{});var I=a(C);S=s(I,"LI",{});var J=a(S);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var qe=a(Y);ee=i(qe,"input_ids"),qe.forEach(t),Ne=i(J," only and nothing else: "),U=s(J,"CODE",{});var ft=a(U);Ge=i(ft,"model(input_ids)"),ft.forEach(t),J.forEach(t),De=l(I),A=s(I,"LI",{});var X=a(A);ge=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var _t=a(de);je=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),te=i(X," or "),V=s(X,"CODE",{});var Qe=a(V);Ue=i(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),X.forEach(t),Be=l(I),B=s(I,"LI",{});var R=a(B);We=i(R,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(R,"CODE",{});var kt=a(oe);H=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),R.forEach(t),I.forEach(t)},m(y,q){p(y,h,q),e(h,z),p(y,b,q),p(y,T,q),e(T,x),e(x,w),e(T,P),e(T,$),e($,Oe),p(y,me,q),p(y,F,q),e(F,we),e(F,ae),e(ae,Ae),e(F,re),e(F,ie),e(ie,Ie),e(F,Me),p(y,D,q),p(y,O,q),e(O,xe),p(y,K,q),p(y,C,q),e(C,S),e(S,Le),e(S,Y),e(Y,ee),e(S,Ne),e(S,U),e(U,Ge),e(C,De),e(C,A),e(A,ge),e(A,de),e(de,je),e(A,te),e(A,V),e(V,Ue),e(C,Be),e(C,B),e(B,We),e(B,oe),e(oe,H)},d(y){y&&t(h),y&&t(b),y&&t(T),y&&t(me),y&&t(F),y&&t(D),y&&t(O),y&&t(K),y&&t(C)}}}function Gk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){p(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Dk(G){let h,z,b,T,x,w,P,$,Oe,me,F,we,ae,Ae,re,ie,Ie,Me,D,O,xe,K,C,S,Le,Y,ee,Ne,U,Ge,De,A,ge,de,je,te,V,Ue,Be,B,We,oe,H;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),T=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),$=n("li"),Oe=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=d(),F=n("p"),we=r("This second option is useful when using "),ae=n("code"),Ae=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Ie=r("model(inputs)"),Me=r("."),D=d(),O=n("p"),xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=d(),C=n("ul"),S=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ne=r(" only and nothing else: "),U=n("code"),Ge=r("model(input_ids)"),De=d(),A=n("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),je=r("model([input_ids, attention_mask])"),te=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),Be=d(),B=n("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){h=s(y,"P",{});var q=a(h);z=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(y),T=s(y,"UL",{});var ze=a(T);x=s(ze,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l(ze),$=s(ze,"LI",{});var $e=a($);Oe=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),ze.forEach(t),me=l(y),F=s(y,"P",{});var Q=a(F);we=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var gt=a(ae);Ae=i(gt,"tf.keras.Model.fit"),gt.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Ve=a(ie);Ie=i(Ve,"model(inputs)"),Ve.forEach(t),Me=i(Q,"."),Q.forEach(t),D=l(y),O=s(y,"P",{});var le=a(O);xe=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),K=l(y),C=s(y,"UL",{});var I=a(C);S=s(I,"LI",{});var J=a(S);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var qe=a(Y);ee=i(qe,"input_ids"),qe.forEach(t),Ne=i(J," only and nothing else: "),U=s(J,"CODE",{});var ft=a(U);Ge=i(ft,"model(input_ids)"),ft.forEach(t),J.forEach(t),De=l(I),A=s(I,"LI",{});var X=a(A);ge=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var _t=a(de);je=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),te=i(X," or "),V=s(X,"CODE",{});var Qe=a(V);Ue=i(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),X.forEach(t),Be=l(I),B=s(I,"LI",{});var R=a(B);We=i(R,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(R,"CODE",{});var kt=a(oe);H=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),R.forEach(t),I.forEach(t)},m(y,q){p(y,h,q),e(h,z),p(y,b,q),p(y,T,q),e(T,x),e(x,w),e(T,P),e(T,$),e($,Oe),p(y,me,q),p(y,F,q),e(F,we),e(F,ae),e(ae,Ae),e(F,re),e(F,ie),e(ie,Ie),e(F,Me),p(y,D,q),p(y,O,q),e(O,xe),p(y,K,q),p(y,C,q),e(C,S),e(S,Le),e(S,Y),e(Y,ee),e(S,Ne),e(S,U),e(U,Ge),e(C,De),e(C,A),e(A,ge),e(A,de),e(de,je),e(A,te),e(A,V),e(V,Ue),e(C,Be),e(C,B),e(B,We),e(B,oe),e(oe,H)},d(y){y&&t(h),y&&t(b),y&&t(T),y&&t(me),y&&t(F),y&&t(D),y&&t(O),y&&t(K),y&&t(C)}}}function Uk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){p(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Bk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){p(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Wk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){p(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Hk(G){let h,z,b,T,x,w,P,$,Oe,me,F,we,ae,Ae,re,ie,Ie,Me,D,O,xe,K,C,S,Le,Y,ee,Ne,U,Ge,De,A,ge,de,je,te,V,Ue,Be,B,We,oe,H,y,q,ze,mt,$e,Q,gt,Ve,le,I,J,qe,ft,X,_t,Qe,R,kt,Fo,Yd,el,ca,tl,ol,Mi,fe,pa,nl,sl,ua,al,rl,ha,il,dl,Eo,ll,Mo,cl,pl,ul,Wt,jo,hl,ml,Co,gl,fl,ji,vt,Ht,ma,So,_l,ga,kl,Ci,Je,Rt,Oo,vl,yl,Ao,bl,Tl,Pl,fa,wl,xl,_a,zl,Si,yt,Kt,ka,Io,$l,va,ql,Oi,_e,ya,ba,Fl,El,Ta,xs,Ml,zs,jl,Cl,Lo,Pa,Sl,Ol,bt,wa,Al,Il,xa,Ll,Nl,No,Gl,za,Dl,Ul,Bl,$a,He,Wl,qa,Hl,Rl,Fa,Kl,Vl,Ea,Ql,Jl,Xl,Ma,Tt,Zl,Go,Yl,ec,ja,tc,oc,Ai,Pt,Vt,Ca,Do,nc,Sa,sc,Ii,Uo,Li,wt,Qt,Oa,Bo,ac,Aa,rc,Ni,ce,Wo,ic,xt,dc,$s,lc,cc,Ho,pc,uc,hc,zt,mc,qs,gc,fc,Fs,_c,kc,vc,Ia,yc,bc,Ro,Gi,$t,Jt,La,Ko,Tc,Na,Pc,Di,Xt,wc,Ga,xc,zc,Ui,W,Vo,$c,Qo,qc,Jo,Fc,Ec,Mc,Xo,jc,Es,Cc,Sc,Oc,Ce,Zo,Ac,Yo,Ic,Da,Lc,Nc,Gc,en,Ms,Dc,Ua,Uc,Bc,tn,Wc,Ba,Hc,Rc,Kc,Wa,Vc,Qc,Zt,on,Jc,Ha,Xc,Zc,Yt,nn,Yc,Ra,ep,tp,eo,sn,op,Ka,np,Bi,qt,to,Va,an,sp,Qa,ap,Wi,pe,rn,rp,Ft,ip,Ja,dp,lp,dn,cp,pp,up,ln,hp,js,mp,gp,fp,Xe,cn,_p,Xa,kp,vp,pn,Cs,yp,Za,bp,Tp,un,Pp,Ya,wp,xp,zp,oo,hn,$p,er,qp,Hi,Et,no,tr,mn,Fp,or,Ep,Ri,Fe,gn,Mp,fn,jp,Ss,Cp,Sp,Op,_n,Ap,kn,Ip,Lp,Np,ke,vn,Gp,Mt,Dp,Os,Up,Bp,nr,Wp,Hp,Rp,so,Kp,sr,Vp,Qp,yn,Ki,jt,ao,ar,bn,Jp,rr,Xp,Vi,Ee,Tn,Zp,Pn,Yp,As,eu,tu,ou,wn,nu,xn,su,au,ru,ve,zn,iu,Ct,du,Is,lu,cu,ir,pu,uu,hu,ro,mu,dr,gu,fu,$n,Qi,St,io,lr,qn,_u,cr,ku,Ji,Ot,Fn,vu,Ze,En,yu,pr,bu,Tu,Mn,Xi,At,lo,ur,jn,Pu,hr,wu,Zi,ue,Cn,xu,Sn,zu,Ls,$u,qu,Fu,On,Eu,An,Mu,ju,Cu,co,Su,ye,In,Ou,It,Au,Ns,Iu,Lu,mr,Nu,Gu,Du,po,Uu,gr,Bu,Wu,Ln,Yi,Lt,uo,fr,Nn,Hu,_r,Ru,ed,he,Gn,Ku,Dn,Vu,Gs,Qu,Ju,Xu,Un,Zu,Bn,Yu,eh,th,ho,oh,be,Wn,nh,Nt,sh,Ds,ah,rh,kr,ih,dh,lh,mo,ch,vr,ph,uh,Hn,td,Gt,go,yr,Rn,hh,br,mh,od,L,Kn,gh,Vn,fh,Us,_h,kh,vh,Qn,yh,Jn,bh,Th,Ph,Tr,wh,xh,Re,Pr,Xn,zh,$h,wr,Zn,qh,Fh,xr,Yn,Eh,Mh,zr,es,jh,Ch,Te,ts,Sh,Dt,Oh,$r,Ah,Ih,qr,Lh,Nh,Gh,fo,Dh,Fr,Uh,Bh,os,Wh,Ye,ns,Hh,Er,Rh,Kh,ss,Vh,et,as,Qh,Mr,Jh,Xh,rs,nd,Ut,_o,jr,is,Zh,Cr,Yh,sd,N,ds,em,ls,tm,Bs,om,nm,sm,cs,am,ps,rm,im,dm,Sr,lm,cm,Ke,Or,us,pm,um,Ar,hs,hm,mm,Ir,ms,gm,fm,Lr,gs,_m,km,E,fs,vm,Bt,ym,Nr,bm,Tm,Gr,Pm,wm,xm,ko,zm,Dr,$m,qm,Ur,Br,Wr,Hr,Fm,Em,Rr,Kr,Vr,Qr,Mm,jm,Jr,Xr,Zr,Yr,Cm,Sm,ei,ti,_s,vo,yo,oi,ks,Om,ni,Am,Im,si,Lm,Nm,ai,Gm,Dm,ri,ii,di,li,Um,Bm,ci,pi,ui,hi,Wm,Hm,mi,gi,fi,_i,Rm,Km,ki,vi,yi,bi,Vm,Qm,tt,vs,Jm,Ti,Xm,Zm,ys,Ym,ot,bs,eg,Pi,tg,og,Ts,ad;return w=new Z({}),K=new Z({}),qe=new Z({}),So=new Z({}),Io=new Z({}),Do=new Z({}),Uo=new Se({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import torch

src_text = [
    """ PG&E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."""
]

model_name = "google/pegasus-xsum"
device = "cuda" if torch.cuda.is_available() else "cpu"
tokenizer = PegasusTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
batch = tokenizer(src_text, truncation=True, padding="longest", return_tensors="pt").to(device)
translated = model.generate(**batch)
tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)
assert (
    tgt_text[0]
    == "California's largest electricity provider has turned off power to hundreds of thousands of customers."
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusForConditionalGeneration, PegasusTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&quot;&quot; PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;&quot;&quot;</span>
<span class="hljs-meta">... </span>]

<span class="hljs-meta">... </span>model_name = <span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>
<span class="hljs-meta">... </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>
<span class="hljs-meta">... </span>tokenizer = PegasusTokenizer.from_pretrained(model_name)
<span class="hljs-meta">... </span>model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
<span class="hljs-meta">... </span>batch = tokenizer(src_text, truncation=<span class="hljs-literal">True</span>, padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device)
<span class="hljs-meta">... </span>translated = model.generate(**batch)
<span class="hljs-meta">... </span>tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span><span class="hljs-keyword">assert</span> (
<span class="hljs-meta">... </span>    tgt_text[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    == <span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>
<span class="hljs-meta">... </span>)`}}),Bo=new Z({}),Wo=new M({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/configuration_pegasus.py#L29",parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PegasusConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PegasusConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PegasusConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PegasusConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PegasusConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PegasusConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PegasusConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PegasusConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PegasusConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PegasusConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PegasusConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.PegasusConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PegasusConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ro=new Se({props:{code:`from transformers import PegasusModel, PegasusConfig

# Initializing a PEGASUS google/pegasus-large style configuration
configuration = PegasusConfig()

# Initializing a model from the google/pegasus-large style configuration
model = PegasusModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusModel, PegasusConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PEGASUS google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PegasusConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ko=new Z({}),Vo=new M({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus.py#L41",parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizer.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"},{anchor:"transformers.PegasusTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Zo=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus.py#L255",parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),on=new M({props:{name:"convert_tokens_to_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus.py#L229"}}),nn=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus.py#L244"}}),sn=new M({props:{name:"num_special_tokens_to_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus.py#L234"}}),an=new Z({}),rn=new M({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L52",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"}]}}),cn=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L176",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hn=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L165"}}),mn=new Z({}),gn=new M({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_pegasus.py#L1133",parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new M({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_pegasus.py#L1183",parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new qo({props:{$$slots:{default:[Ik]},$$scope:{ctx:G}}}),yn=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1024</span>]`}}),bn=new Z({}),Tn=new M({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_pegasus.py#L1282",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new M({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_pegasus.py#L1350",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new qo({props:{$$slots:{default:[Lk]},$$scope:{ctx:G}}}),$n=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForConditionalGeneration

model = PegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"])
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`}}),qn=new Z({}),Fn=new M({props:{name:"class transformers.PegasusForCausalLM",anchor:"transformers.PegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_pegasus.py#L1489"}}),En=new M({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_pegasus.py#L1542",parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PegasusForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PegasusForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PegasusForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusForCausalLM.from_pretrained("google/pegasus-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),jn=new Z({}),Cn=new M({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1216",parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),co=new qo({props:{$$slots:{default:[Nk]},$$scope:{ctx:G}}}),In=new M({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1228",parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new qo({props:{$$slots:{default:[Gk]},$$scope:{ctx:G}}}),Ln=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
import tensorflow as tf

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = TFPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Nn=new Z({}),Gn=new M({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1323",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new qo({props:{$$slots:{default:[Dk]},$$scope:{ctx:G}}}),Wn=new M({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1356",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new qo({props:{$$slots:{default:[Uk]},$$scope:{ctx:G}}}),Hn=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration

model = TFPegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"])
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Rn=new Z({}),Kn=new M({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1203",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ts=new M({props:{name:"__call__",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1138",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new qo({props:{$$slots:{default:[Bk]},$$scope:{ctx:G}}}),os=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = FlaxPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ns=new M({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L961",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ss=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),as=new M({props:{name:"decode",anchor:"transformers.FlaxPegasusPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1024",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),is=new Z({}),ds=new M({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1290",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),fs=new M({props:{name:"__call__",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1138",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new qo({props:{$$slots:{default:[Wk]},$$scope:{ctx:G}}}),ks=new Z({}),vs=new M({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L961",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ys=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),bs=new M({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16164/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1294",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16164/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16164/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16164/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ts=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("meta"),z=d(),b=n("h1"),T=n("a"),x=n("span"),m(w.$$.fragment),P=d(),$=n("span"),Oe=r("Pegasus"),me=d(),F=n("p"),we=n("strong"),ae=r("DISCLAIMER:"),Ae=r(" If you see something strange, file a "),re=n("a"),ie=r("Github Issue"),Ie=r(`
and assign @patrickvonplaten.`),Me=d(),D=n("h2"),O=n("a"),xe=n("span"),m(K.$$.fragment),C=d(),S=n("span"),Le=r("Overview"),Y=d(),ee=n("p"),Ne=r("The Pegasus model was proposed in "),U=n("a"),Ge=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),De=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),A=d(),ge=n("p"),de=r("According to the abstract,"),je=d(),te=n("ul"),V=n("li"),Ue=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),Be=d(),B=n("li"),We=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),oe=d(),H=n("p"),y=r("This model was contributed by "),q=n("a"),ze=r("sshleifer"),mt=r(". The Authors\u2019 code can be found "),$e=n("a"),Q=r("here"),gt=r("."),Ve=d(),le=n("h2"),I=n("a"),J=n("span"),m(qe.$$.fragment),ft=d(),X=n("span"),_t=r("Checkpoints"),Qe=d(),R=n("p"),kt=r("All the "),Fo=n("a"),Yd=r("checkpoints"),el=r(` are fine-tuned for summarization, besides
`),ca=n("em"),tl=r("pegasus-large"),ol=r(", whence the other checkpoints are fine-tuned:"),Mi=d(),fe=n("ul"),pa=n("li"),nl=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),sl=d(),ua=n("li"),al=r("FP16 is not supported (help/ideas on this appreciated!)."),rl=d(),ha=n("li"),il=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),dl=d(),Eo=n("li"),ll=r("Full replication results and correctly pre-processed data can be found in this "),Mo=n("a"),cl=r("Issue"),pl=r("."),ul=d(),Wt=n("li"),jo=n("a"),hl=r("Distilled checkpoints"),ml=r(" are described in this "),Co=n("a"),gl=r("paper"),fl=r("."),ji=d(),vt=n("h3"),Ht=n("a"),ma=n("span"),m(So.$$.fragment),_l=d(),ga=n("span"),kl=r("Examples"),Ci=d(),Je=n("ul"),Rt=n("li"),Oo=n("a"),vl=r("Script"),yl=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Ao=n("a"),bl=r("examples/pytorch/summarization/"),Tl=r("."),Pl=d(),fa=n("li"),wl=r("FP16 is not supported (help/ideas on this appreciated!)."),xl=d(),_a=n("li"),zl=r("The adafactor optimizer is recommended for pegasus fine-tuning."),Si=d(),yt=n("h2"),Kt=n("a"),ka=n("span"),m(Io.$$.fragment),$l=d(),va=n("span"),ql=r("Implementation Notes"),Oi=d(),_e=n("ul"),ya=n("li"),ba=n("p"),Fl=r("All models are transformer encoder-decoders with 16 layers in each component."),El=d(),Ta=n("li"),xs=n("p"),Ml=r("The implementation is completely inherited from "),zs=n("a"),jl=r("BartForConditionalGeneration"),Cl=d(),Lo=n("li"),Pa=n("p"),Sl=r("Some key configuration differences:"),Ol=d(),bt=n("ul"),wa=n("li"),Al=r("static, sinusoidal position embeddings"),Il=d(),xa=n("li"),Ll=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Nl=d(),No=n("li"),Gl=r("more beams are used ("),za=n("code"),Dl=r("num_beams=8"),Ul=r(")"),Bl=d(),$a=n("li"),He=n("p"),Wl=r("All pretrained pegasus checkpoints are the same besides three attributes: "),qa=n("code"),Hl=r("tokenizer.model_max_length"),Rl=r(` (maximum
input size), `),Fa=n("code"),Kl=r("max_length"),Vl=r(" (the maximum number of tokens to generate) and "),Ea=n("code"),Ql=r("length_penalty"),Jl=r("."),Xl=d(),Ma=n("li"),Tt=n("p"),Zl=r("The code to convert checkpoints trained in the author\u2019s "),Go=n("a"),Yl=r("repo"),ec=r(` can be
found in `),ja=n("code"),tc=r("convert_pegasus_tf_to_pytorch.py"),oc=r("."),Ai=d(),Pt=n("h2"),Vt=n("a"),Ca=n("span"),m(Do.$$.fragment),nc=d(),Sa=n("span"),sc=r("Usage Example"),Ii=d(),m(Uo.$$.fragment),Li=d(),wt=n("h2"),Qt=n("a"),Oa=n("span"),m(Bo.$$.fragment),ac=d(),Aa=n("span"),rc=r("PegasusConfig"),Ni=d(),ce=n("div"),m(Wo.$$.fragment),ic=d(),xt=n("p"),dc=r("This is the configuration class to store the configuration of a "),$s=n("a"),lc=r("PegasusModel"),cc=r(`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Ho=n("a"),pc=r("google/pegasus-large"),uc=r(" architecture."),hc=d(),zt=n("p"),mc=r("Configuration objects inherit from "),qs=n("a"),gc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),Fs=n("a"),_c=r("PretrainedConfig"),kc=r(" for more information."),vc=d(),Ia=n("p"),yc=r("Example:"),bc=d(),m(Ro.$$.fragment),Gi=d(),$t=n("h2"),Jt=n("a"),La=n("span"),m(Ko.$$.fragment),Tc=d(),Na=n("span"),Pc=r("PegasusTokenizer"),Di=d(),Xt=n("p"),wc=r("warning: "),Ga=n("code"),xc=r("add_tokens"),zc=r(" does not work at the moment."),Ui=d(),W=n("div"),m(Vo.$$.fragment),$c=d(),Qo=n("p"),qc=r("Construct a PEGASUS tokenizer. Based on "),Jo=n("a"),Fc=r("SentencePiece"),Ec=r("."),Mc=d(),Xo=n("p"),jc=r("This tokenizer inherits from "),Es=n("a"),Cc=r("PreTrainedTokenizer"),Sc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Oc=d(),Ce=n("div"),m(Zo.$$.fragment),Ac=d(),Yo=n("p"),Ic=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Da=n("code"),Lc=r("X"),Nc=r(" represents the sequence:"),Gc=d(),en=n("ul"),Ms=n("li"),Dc=r("single sequence: "),Ua=n("code"),Uc=r("X </s>"),Bc=d(),tn=n("li"),Wc=r("pair of sequences: "),Ba=n("code"),Hc=r("A B </s>"),Rc=r(" (not intended use)"),Kc=d(),Wa=n("p"),Vc=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Qc=d(),Zt=n("div"),m(on.$$.fragment),Jc=d(),Ha=n("p"),Xc=r("Converts a sequence of tokens (string) in a single string."),Zc=d(),Yt=n("div"),m(nn.$$.fragment),Yc=d(),Ra=n("p"),ep=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),tp=d(),eo=n("div"),m(sn.$$.fragment),op=d(),Ka=n("p"),np=r("Just EOS"),Bi=d(),qt=n("h2"),to=n("a"),Va=n("span"),m(an.$$.fragment),sp=d(),Qa=n("span"),ap=r("PegasusTokenizerFast"),Wi=d(),pe=n("div"),m(rn.$$.fragment),rp=d(),Ft=n("p"),ip=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Ja=n("em"),dp=r("tokenizers"),lp=r(` library). Based on
`),dn=n("a"),cp=r("Unigram"),pp=r("."),up=d(),ln=n("p"),hp=r("This tokenizer inherits from "),js=n("a"),mp=r("PreTrainedTokenizerFast"),gp=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fp=d(),Xe=n("div"),m(cn.$$.fragment),_p=d(),Xa=n("p"),kp=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),vp=d(),pn=n("ul"),Cs=n("li"),yp=r("single sequence: "),Za=n("code"),bp=r("X </s>"),Tp=d(),un=n("li"),Pp=r("pair of sequences: "),Ya=n("code"),wp=r("A B </s>"),xp=r(" (not intended use)"),zp=d(),oo=n("div"),m(hn.$$.fragment),$p=d(),er=n("p"),qp=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Hi=d(),Et=n("h2"),no=n("a"),tr=n("span"),m(mn.$$.fragment),Fp=d(),or=n("span"),Ep=r("PegasusModel"),Ri=d(),Fe=n("div"),m(gn.$$.fragment),Mp=d(),fn=n("p"),jp=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=n("a"),Cp=r("PreTrainedModel"),Sp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op=d(),_n=n("p"),Ap=r("This model is also a PyTorch "),kn=n("a"),Ip=r("torch.nn.Module"),Lp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Np=d(),ke=n("div"),m(vn.$$.fragment),Gp=d(),Mt=n("p"),Dp=r("The "),Os=n("a"),Up=r("PegasusModel"),Bp=r(" forward method, overrides the "),nr=n("code"),Wp=r("__call__"),Hp=r(" special method."),Rp=d(),m(so.$$.fragment),Kp=d(),sr=n("p"),Vp=r("Example:"),Qp=d(),m(yn.$$.fragment),Ki=d(),jt=n("h2"),ao=n("a"),ar=n("span"),m(bn.$$.fragment),Jp=d(),rr=n("span"),Xp=r("PegasusForConditionalGeneration"),Vi=d(),Ee=n("div"),m(Tn.$$.fragment),Zp=d(),Pn=n("p"),Yp=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),As=n("a"),eu=r("PreTrainedModel"),tu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ou=d(),wn=n("p"),nu=r("This model is also a PyTorch "),xn=n("a"),su=r("torch.nn.Module"),au=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ru=d(),ve=n("div"),m(zn.$$.fragment),iu=d(),Ct=n("p"),du=r("The "),Is=n("a"),lu=r("PegasusForConditionalGeneration"),cu=r(" forward method, overrides the "),ir=n("code"),pu=r("__call__"),uu=r(" special method."),hu=d(),m(ro.$$.fragment),mu=d(),dr=n("p"),gu=r("Summarization example:"),fu=d(),m($n.$$.fragment),Qi=d(),St=n("h2"),io=n("a"),lr=n("span"),m(qn.$$.fragment),_u=d(),cr=n("span"),ku=r("PegasusForCausalLM"),Ji=d(),Ot=n("div"),m(Fn.$$.fragment),vu=d(),Ze=n("div"),m(En.$$.fragment),yu=d(),pr=n("p"),bu=r("Example:"),Tu=d(),m(Mn.$$.fragment),Xi=d(),At=n("h2"),lo=n("a"),ur=n("span"),m(jn.$$.fragment),Pu=d(),hr=n("span"),wu=r("TFPegasusModel"),Zi=d(),ue=n("div"),m(Cn.$$.fragment),xu=d(),Sn=n("p"),zu=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ls=n("a"),$u=r("TFPreTrainedModel"),qu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu=d(),On=n("p"),Eu=r("This model is also a "),An=n("a"),Mu=r("tf.keras.Model"),ju=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cu=d(),m(co.$$.fragment),Su=d(),ye=n("div"),m(In.$$.fragment),Ou=d(),It=n("p"),Au=r("The "),Ns=n("a"),Iu=r("TFPegasusModel"),Lu=r(" forward method, overrides the "),mr=n("code"),Nu=r("__call__"),Gu=r(" special method."),Du=d(),m(po.$$.fragment),Uu=d(),gr=n("p"),Bu=r("Example:"),Wu=d(),m(Ln.$$.fragment),Yi=d(),Lt=n("h2"),uo=n("a"),fr=n("span"),m(Nn.$$.fragment),Hu=d(),_r=n("span"),Ru=r("TFPegasusForConditionalGeneration"),ed=d(),he=n("div"),m(Gn.$$.fragment),Ku=d(),Dn=n("p"),Vu=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gs=n("a"),Qu=r("TFPreTrainedModel"),Ju=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu=d(),Un=n("p"),Zu=r("This model is also a "),Bn=n("a"),Yu=r("tf.keras.Model"),eh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),th=d(),m(ho.$$.fragment),oh=d(),be=n("div"),m(Wn.$$.fragment),nh=d(),Nt=n("p"),sh=r("The "),Ds=n("a"),ah=r("TFPegasusForConditionalGeneration"),rh=r(" forward method, overrides the "),kr=n("code"),ih=r("__call__"),dh=r(" special method."),lh=d(),m(mo.$$.fragment),ch=d(),vr=n("p"),ph=r("Summarization example:"),uh=d(),m(Hn.$$.fragment),td=d(),Gt=n("h2"),go=n("a"),yr=n("span"),m(Rn.$$.fragment),hh=d(),br=n("span"),mh=r("FlaxPegasusModel"),od=d(),L=n("div"),m(Kn.$$.fragment),gh=d(),Vn=n("p"),fh=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Us=n("a"),_h=r("FlaxPreTrainedModel"),kh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh=d(),Qn=n("p"),yh=r(`This model is also a Flax Linen
`),Jn=n("a"),bh=r("flax.nn.Module"),Th=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ph=d(),Tr=n("p"),wh=r("Finally, this model supports inherent JAX features such as:"),xh=d(),Re=n("ul"),Pr=n("li"),Xn=n("a"),zh=r("Just-In-Time (JIT) compilation"),$h=d(),wr=n("li"),Zn=n("a"),qh=r("Automatic Differentiation"),Fh=d(),xr=n("li"),Yn=n("a"),Eh=r("Vectorization"),Mh=d(),zr=n("li"),es=n("a"),jh=r("Parallelization"),Ch=d(),Te=n("div"),m(ts.$$.fragment),Sh=d(),Dt=n("p"),Oh=r("The "),$r=n("code"),Ah=r("FlaxPegasusPreTrainedModel"),Ih=r("forward method, overrides the "),qr=n("code"),Lh=r("__call__"),Nh=r(" special method."),Gh=d(),m(fo.$$.fragment),Dh=d(),Fr=n("p"),Uh=r("Example:"),Bh=d(),m(os.$$.fragment),Wh=d(),Ye=n("div"),m(ns.$$.fragment),Hh=d(),Er=n("p"),Rh=r("Example:"),Kh=d(),m(ss.$$.fragment),Vh=d(),et=n("div"),m(as.$$.fragment),Qh=d(),Mr=n("p"),Jh=r("Example:"),Xh=d(),m(rs.$$.fragment),nd=d(),Ut=n("h2"),_o=n("a"),jr=n("span"),m(is.$$.fragment),Zh=d(),Cr=n("span"),Yh=r("FlaxPegasusForConditionalGeneration"),sd=d(),N=n("div"),m(ds.$$.fragment),em=d(),ls=n("p"),tm=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bs=n("a"),om=r("FlaxPreTrainedModel"),nm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=d(),cs=n("p"),am=r(`This model is also a Flax Linen
`),ps=n("a"),rm=r("flax.nn.Module"),im=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),dm=d(),Sr=n("p"),lm=r("Finally, this model supports inherent JAX features such as:"),cm=d(),Ke=n("ul"),Or=n("li"),us=n("a"),pm=r("Just-In-Time (JIT) compilation"),um=d(),Ar=n("li"),hs=n("a"),hm=r("Automatic Differentiation"),mm=d(),Ir=n("li"),ms=n("a"),gm=r("Vectorization"),fm=d(),Lr=n("li"),gs=n("a"),_m=r("Parallelization"),km=d(),E=n("div"),m(fs.$$.fragment),vm=d(),Bt=n("p"),ym=r("The "),Nr=n("code"),bm=r("FlaxPegasusPreTrainedModel"),Tm=r("forward method, overrides the "),Gr=n("code"),Pm=r("__call__"),wm=r(" special method."),xm=d(),m(ko.$$.fragment),zm=d(),Dr=n("p"),$m=r("Summarization example:"),qm=d(),Ur=n("blockquote"),Br=n("blockquote"),Wr=n("blockquote"),Hr=n("p"),Fm=r("from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),Em=d(),Rr=n("blockquote"),Kr=n("blockquote"),Vr=n("blockquote"),Qr=n("p"),Mm=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),jm=d(),Jr=n("blockquote"),Xr=n("blockquote"),Zr=n("blockquote"),Yr=n("p"),Cm=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Sm=d(),ei=n("blockquote"),ti=n("blockquote"),_s=n("blockquote"),vo=n("h1"),yo=n("a"),oi=n("span"),m(ks.$$.fragment),Om=d(),ni=n("span"),Am=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Im=d(),si=n("p"),Lm=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Nm=d(),ai=n("p"),Gm=r("Mask filling example:"),Dm=d(),ri=n("blockquote"),ii=n("blockquote"),di=n("blockquote"),li=n("p"),Um=r(`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),Bm=d(),ci=n("blockquote"),pi=n("blockquote"),ui=n("blockquote"),hi=n("p"),Wm=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Hm=d(),mi=n("blockquote"),gi=n("blockquote"),fi=n("blockquote"),_i=n("p"),Rm=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Km=d(),ki=n("blockquote"),vi=n("blockquote"),yi=n("blockquote"),bi=n("p"),Vm=r("tokenizer.decode(predictions).split()"),Qm=d(),tt=n("div"),m(vs.$$.fragment),Jm=d(),Ti=n("p"),Xm=r("Example:"),Zm=d(),m(ys.$$.fragment),Ym=d(),ot=n("div"),m(bs.$$.fragment),eg=d(),Pi=n("p"),tg=r("Example:"),og=d(),m(Ts.$$.fragment),this.h()},l(o){const u=Ak('[data-svelte="svelte-1phssyn"]',document.head);h=s(u,"META",{name:!0,content:!0}),u.forEach(t),z=l(o),b=s(o,"H1",{class:!0});var Ps=a(b);T=s(Ps,"A",{id:!0,class:!0,href:!0});var wi=a(T);x=s(wi,"SPAN",{});var xi=a(x);g(w.$$.fragment,xi),xi.forEach(t),wi.forEach(t),P=l(Ps),$=s(Ps,"SPAN",{});var zi=a($);Oe=i(zi,"Pegasus"),zi.forEach(t),Ps.forEach(t),me=l(o),F=s(o,"P",{});var bo=a(F);we=s(bo,"STRONG",{});var $i=a(we);ae=i($i,"DISCLAIMER:"),$i.forEach(t),Ae=i(bo," If you see something strange, file a "),re=s(bo,"A",{href:!0,rel:!0});var qi=a(re);ie=i(qi,"Github Issue"),qi.forEach(t),Ie=i(bo,`
and assign @patrickvonplaten.`),bo.forEach(t),Me=l(o),D=s(o,"H2",{class:!0});var ws=a(D);O=s(ws,"A",{id:!0,class:!0,href:!0});var rg=a(O);xe=s(rg,"SPAN",{});var ig=a(xe);g(K.$$.fragment,ig),ig.forEach(t),rg.forEach(t),C=l(ws),S=s(ws,"SPAN",{});var dg=a(S);Le=i(dg,"Overview"),dg.forEach(t),ws.forEach(t),Y=l(o),ee=s(o,"P",{});var rd=a(ee);Ne=i(rd,"The Pegasus model was proposed in "),U=s(rd,"A",{href:!0,rel:!0});var lg=a(U);Ge=i(lg,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),lg.forEach(t),De=i(rd," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),rd.forEach(t),A=l(o),ge=s(o,"P",{});var cg=a(ge);de=i(cg,"According to the abstract,"),cg.forEach(t),je=l(o),te=s(o,"UL",{});var id=a(te);V=s(id,"LI",{});var pg=a(V);Ue=i(pg,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),pg.forEach(t),Be=l(id),B=s(id,"LI",{});var ug=a(B);We=i(ug,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),ug.forEach(t),id.forEach(t),oe=l(o),H=s(o,"P",{});var Ws=a(H);y=i(Ws,"This model was contributed by "),q=s(Ws,"A",{href:!0,rel:!0});var hg=a(q);ze=i(hg,"sshleifer"),hg.forEach(t),mt=i(Ws,". The Authors\u2019 code can be found "),$e=s(Ws,"A",{href:!0,rel:!0});var mg=a($e);Q=i(mg,"here"),mg.forEach(t),gt=i(Ws,"."),Ws.forEach(t),Ve=l(o),le=s(o,"H2",{class:!0});var dd=a(le);I=s(dd,"A",{id:!0,class:!0,href:!0});var gg=a(I);J=s(gg,"SPAN",{});var fg=a(J);g(qe.$$.fragment,fg),fg.forEach(t),gg.forEach(t),ft=l(dd),X=s(dd,"SPAN",{});var _g=a(X);_t=i(_g,"Checkpoints"),_g.forEach(t),dd.forEach(t),Qe=l(o),R=s(o,"P",{});var Hs=a(R);kt=i(Hs,"All the "),Fo=s(Hs,"A",{href:!0,rel:!0});var kg=a(Fo);Yd=i(kg,"checkpoints"),kg.forEach(t),el=i(Hs,` are fine-tuned for summarization, besides
`),ca=s(Hs,"EM",{});var vg=a(ca);tl=i(vg,"pegasus-large"),vg.forEach(t),ol=i(Hs,", whence the other checkpoints are fine-tuned:"),Hs.forEach(t),Mi=l(o),fe=s(o,"UL",{});var nt=a(fe);pa=s(nt,"LI",{});var yg=a(pa);nl=i(yg,"Each checkpoint is 2.2 GB on disk and 568M parameters."),yg.forEach(t),sl=l(nt),ua=s(nt,"LI",{});var bg=a(ua);al=i(bg,"FP16 is not supported (help/ideas on this appreciated!)."),bg.forEach(t),rl=l(nt),ha=s(nt,"LI",{});var Tg=a(ha);il=i(Tg,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Tg.forEach(t),dl=l(nt),Eo=s(nt,"LI",{});var ld=a(Eo);ll=i(ld,"Full replication results and correctly pre-processed data can be found in this "),Mo=s(ld,"A",{href:!0,rel:!0});var Pg=a(Mo);cl=i(Pg,"Issue"),Pg.forEach(t),pl=i(ld,"."),ld.forEach(t),ul=l(nt),Wt=s(nt,"LI",{});var Fi=a(Wt);jo=s(Fi,"A",{href:!0,rel:!0});var wg=a(jo);hl=i(wg,"Distilled checkpoints"),wg.forEach(t),ml=i(Fi," are described in this "),Co=s(Fi,"A",{href:!0,rel:!0});var xg=a(Co);gl=i(xg,"paper"),xg.forEach(t),fl=i(Fi,"."),Fi.forEach(t),nt.forEach(t),ji=l(o),vt=s(o,"H3",{class:!0});var cd=a(vt);Ht=s(cd,"A",{id:!0,class:!0,href:!0});var zg=a(Ht);ma=s(zg,"SPAN",{});var $g=a(ma);g(So.$$.fragment,$g),$g.forEach(t),zg.forEach(t),_l=l(cd),ga=s(cd,"SPAN",{});var qg=a(ga);kl=i(qg,"Examples"),qg.forEach(t),cd.forEach(t),Ci=l(o),Je=s(o,"UL",{});var Rs=a(Je);Rt=s(Rs,"LI",{});var Ei=a(Rt);Oo=s(Ei,"A",{href:!0,rel:!0});var Fg=a(Oo);vl=i(Fg,"Script"),Fg.forEach(t),yl=i(Ei,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Ao=s(Ei,"A",{href:!0,rel:!0});var Eg=a(Ao);bl=i(Eg,"examples/pytorch/summarization/"),Eg.forEach(t),Tl=i(Ei,"."),Ei.forEach(t),Pl=l(Rs),fa=s(Rs,"LI",{});var Mg=a(fa);wl=i(Mg,"FP16 is not supported (help/ideas on this appreciated!)."),Mg.forEach(t),xl=l(Rs),_a=s(Rs,"LI",{});var jg=a(_a);zl=i(jg,"The adafactor optimizer is recommended for pegasus fine-tuning."),jg.forEach(t),Rs.forEach(t),Si=l(o),yt=s(o,"H2",{class:!0});var pd=a(yt);Kt=s(pd,"A",{id:!0,class:!0,href:!0});var Cg=a(Kt);ka=s(Cg,"SPAN",{});var Sg=a(ka);g(Io.$$.fragment,Sg),Sg.forEach(t),Cg.forEach(t),$l=l(pd),va=s(pd,"SPAN",{});var Og=a(va);ql=i(Og,"Implementation Notes"),Og.forEach(t),pd.forEach(t),Oi=l(o),_e=s(o,"UL",{});var st=a(_e);ya=s(st,"LI",{});var Ag=a(ya);ba=s(Ag,"P",{});var Ig=a(ba);Fl=i(Ig,"All models are transformer encoder-decoders with 16 layers in each component."),Ig.forEach(t),Ag.forEach(t),El=l(st),Ta=s(st,"LI",{});var Lg=a(Ta);xs=s(Lg,"P",{});var ng=a(xs);Ml=i(ng,"The implementation is completely inherited from "),zs=s(ng,"A",{href:!0});var Ng=a(zs);jl=i(Ng,"BartForConditionalGeneration"),Ng.forEach(t),ng.forEach(t),Lg.forEach(t),Cl=l(st),Lo=s(st,"LI",{});var ud=a(Lo);Pa=s(ud,"P",{});var Gg=a(Pa);Sl=i(Gg,"Some key configuration differences:"),Gg.forEach(t),Ol=l(ud),bt=s(ud,"UL",{});var Ks=a(bt);wa=s(Ks,"LI",{});var Dg=a(wa);Al=i(Dg,"static, sinusoidal position embeddings"),Dg.forEach(t),Il=l(Ks),xa=s(Ks,"LI",{});var Ug=a(xa);Ll=i(Ug,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Ug.forEach(t),Nl=l(Ks),No=s(Ks,"LI",{});var hd=a(No);Gl=i(hd,"more beams are used ("),za=s(hd,"CODE",{});var Bg=a(za);Dl=i(Bg,"num_beams=8"),Bg.forEach(t),Ul=i(hd,")"),hd.forEach(t),Ks.forEach(t),ud.forEach(t),Bl=l(st),$a=s(st,"LI",{});var Wg=a($a);He=s(Wg,"P",{});var To=a(He);Wl=i(To,"All pretrained pegasus checkpoints are the same besides three attributes: "),qa=s(To,"CODE",{});var Hg=a(qa);Hl=i(Hg,"tokenizer.model_max_length"),Hg.forEach(t),Rl=i(To,` (maximum
input size), `),Fa=s(To,"CODE",{});var Rg=a(Fa);Kl=i(Rg,"max_length"),Rg.forEach(t),Vl=i(To," (the maximum number of tokens to generate) and "),Ea=s(To,"CODE",{});var Kg=a(Ea);Ql=i(Kg,"length_penalty"),Kg.forEach(t),Jl=i(To,"."),To.forEach(t),Wg.forEach(t),Xl=l(st),Ma=s(st,"LI",{});var Vg=a(Ma);Tt=s(Vg,"P",{});var Vs=a(Tt);Zl=i(Vs,"The code to convert checkpoints trained in the author\u2019s "),Go=s(Vs,"A",{href:!0,rel:!0});var Qg=a(Go);Yl=i(Qg,"repo"),Qg.forEach(t),ec=i(Vs,` can be
found in `),ja=s(Vs,"CODE",{});var Jg=a(ja);tc=i(Jg,"convert_pegasus_tf_to_pytorch.py"),Jg.forEach(t),oc=i(Vs,"."),Vs.forEach(t),Vg.forEach(t),st.forEach(t),Ai=l(o),Pt=s(o,"H2",{class:!0});var md=a(Pt);Vt=s(md,"A",{id:!0,class:!0,href:!0});var Xg=a(Vt);Ca=s(Xg,"SPAN",{});var Zg=a(Ca);g(Do.$$.fragment,Zg),Zg.forEach(t),Xg.forEach(t),nc=l(md),Sa=s(md,"SPAN",{});var Yg=a(Sa);sc=i(Yg,"Usage Example"),Yg.forEach(t),md.forEach(t),Ii=l(o),g(Uo.$$.fragment,o),Li=l(o),wt=s(o,"H2",{class:!0});var gd=a(wt);Qt=s(gd,"A",{id:!0,class:!0,href:!0});var ef=a(Qt);Oa=s(ef,"SPAN",{});var tf=a(Oa);g(Bo.$$.fragment,tf),tf.forEach(t),ef.forEach(t),ac=l(gd),Aa=s(gd,"SPAN",{});var of=a(Aa);rc=i(of,"PegasusConfig"),of.forEach(t),gd.forEach(t),Ni=l(o),ce=s(o,"DIV",{class:!0});var at=a(ce);g(Wo.$$.fragment,at),ic=l(at),xt=s(at,"P",{});var Qs=a(xt);dc=i(Qs,"This is the configuration class to store the configuration of a "),$s=s(Qs,"A",{href:!0});var nf=a($s);lc=i(nf,"PegasusModel"),nf.forEach(t),cc=i(Qs,`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Ho=s(Qs,"A",{href:!0,rel:!0});var sf=a(Ho);pc=i(sf,"google/pegasus-large"),sf.forEach(t),uc=i(Qs," architecture."),Qs.forEach(t),hc=l(at),zt=s(at,"P",{});var Js=a(zt);mc=i(Js,"Configuration objects inherit from "),qs=s(Js,"A",{href:!0});var af=a(qs);gc=i(af,"PretrainedConfig"),af.forEach(t),fc=i(Js,` and can be used to control the model outputs. Read the
documentation from `),Fs=s(Js,"A",{href:!0});var rf=a(Fs);_c=i(rf,"PretrainedConfig"),rf.forEach(t),kc=i(Js," for more information."),Js.forEach(t),vc=l(at),Ia=s(at,"P",{});var df=a(Ia);yc=i(df,"Example:"),df.forEach(t),bc=l(at),g(Ro.$$.fragment,at),at.forEach(t),Gi=l(o),$t=s(o,"H2",{class:!0});var fd=a($t);Jt=s(fd,"A",{id:!0,class:!0,href:!0});var lf=a(Jt);La=s(lf,"SPAN",{});var cf=a(La);g(Ko.$$.fragment,cf),cf.forEach(t),lf.forEach(t),Tc=l(fd),Na=s(fd,"SPAN",{});var pf=a(Na);Pc=i(pf,"PegasusTokenizer"),pf.forEach(t),fd.forEach(t),Di=l(o),Xt=s(o,"P",{});var _d=a(Xt);wc=i(_d,"warning: "),Ga=s(_d,"CODE",{});var uf=a(Ga);xc=i(uf,"add_tokens"),uf.forEach(t),zc=i(_d," does not work at the moment."),_d.forEach(t),Ui=l(o),W=s(o,"DIV",{class:!0});var Pe=a(W);g(Vo.$$.fragment,Pe),$c=l(Pe),Qo=s(Pe,"P",{});var kd=a(Qo);qc=i(kd,"Construct a PEGASUS tokenizer. Based on "),Jo=s(kd,"A",{href:!0,rel:!0});var hf=a(Jo);Fc=i(hf,"SentencePiece"),hf.forEach(t),Ec=i(kd,"."),kd.forEach(t),Mc=l(Pe),Xo=s(Pe,"P",{});var vd=a(Xo);jc=i(vd,"This tokenizer inherits from "),Es=s(vd,"A",{href:!0});var mf=a(Es);Cc=i(mf,"PreTrainedTokenizer"),mf.forEach(t),Sc=i(vd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vd.forEach(t),Oc=l(Pe),Ce=s(Pe,"DIV",{class:!0});var Po=a(Ce);g(Zo.$$.fragment,Po),Ac=l(Po),Yo=s(Po,"P",{});var yd=a(Yo);Ic=i(yd,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Da=s(yd,"CODE",{});var gf=a(Da);Lc=i(gf,"X"),gf.forEach(t),Nc=i(yd," represents the sequence:"),yd.forEach(t),Gc=l(Po),en=s(Po,"UL",{});var bd=a(en);Ms=s(bd,"LI",{});var sg=a(Ms);Dc=i(sg,"single sequence: "),Ua=s(sg,"CODE",{});var ff=a(Ua);Uc=i(ff,"X </s>"),ff.forEach(t),sg.forEach(t),Bc=l(bd),tn=s(bd,"LI",{});var Td=a(tn);Wc=i(Td,"pair of sequences: "),Ba=s(Td,"CODE",{});var _f=a(Ba);Hc=i(_f,"A B </s>"),_f.forEach(t),Rc=i(Td," (not intended use)"),Td.forEach(t),bd.forEach(t),Kc=l(Po),Wa=s(Po,"P",{});var kf=a(Wa);Vc=i(kf,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),kf.forEach(t),Po.forEach(t),Qc=l(Pe),Zt=s(Pe,"DIV",{class:!0});var Pd=a(Zt);g(on.$$.fragment,Pd),Jc=l(Pd),Ha=s(Pd,"P",{});var vf=a(Ha);Xc=i(vf,"Converts a sequence of tokens (string) in a single string."),vf.forEach(t),Pd.forEach(t),Zc=l(Pe),Yt=s(Pe,"DIV",{class:!0});var wd=a(Yt);g(nn.$$.fragment,wd),Yc=l(wd),Ra=s(wd,"P",{});var yf=a(Ra);ep=i(yf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),yf.forEach(t),wd.forEach(t),tp=l(Pe),eo=s(Pe,"DIV",{class:!0});var xd=a(eo);g(sn.$$.fragment,xd),op=l(xd),Ka=s(xd,"P",{});var bf=a(Ka);np=i(bf,"Just EOS"),bf.forEach(t),xd.forEach(t),Pe.forEach(t),Bi=l(o),qt=s(o,"H2",{class:!0});var zd=a(qt);to=s(zd,"A",{id:!0,class:!0,href:!0});var Tf=a(to);Va=s(Tf,"SPAN",{});var Pf=a(Va);g(an.$$.fragment,Pf),Pf.forEach(t),Tf.forEach(t),sp=l(zd),Qa=s(zd,"SPAN",{});var wf=a(Qa);ap=i(wf,"PegasusTokenizerFast"),wf.forEach(t),zd.forEach(t),Wi=l(o),pe=s(o,"DIV",{class:!0});var rt=a(pe);g(rn.$$.fragment,rt),rp=l(rt),Ft=s(rt,"P",{});var Xs=a(Ft);ip=i(Xs,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Ja=s(Xs,"EM",{});var xf=a(Ja);dp=i(xf,"tokenizers"),xf.forEach(t),lp=i(Xs,` library). Based on
`),dn=s(Xs,"A",{href:!0,rel:!0});var zf=a(dn);cp=i(zf,"Unigram"),zf.forEach(t),pp=i(Xs,"."),Xs.forEach(t),up=l(rt),ln=s(rt,"P",{});var $d=a(ln);hp=i($d,"This tokenizer inherits from "),js=s($d,"A",{href:!0});var $f=a(js);mp=i($f,"PreTrainedTokenizerFast"),$f.forEach(t),gp=i($d,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),$d.forEach(t),fp=l(rt),Xe=s(rt,"DIV",{class:!0});var Zs=a(Xe);g(cn.$$.fragment,Zs),_p=l(Zs),Xa=s(Zs,"P",{});var qf=a(Xa);kp=i(qf,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),qf.forEach(t),vp=l(Zs),pn=s(Zs,"UL",{});var qd=a(pn);Cs=s(qd,"LI",{});var ag=a(Cs);yp=i(ag,"single sequence: "),Za=s(ag,"CODE",{});var Ff=a(Za);bp=i(Ff,"X </s>"),Ff.forEach(t),ag.forEach(t),Tp=l(qd),un=s(qd,"LI",{});var Fd=a(un);Pp=i(Fd,"pair of sequences: "),Ya=s(Fd,"CODE",{});var Ef=a(Ya);wp=i(Ef,"A B </s>"),Ef.forEach(t),xp=i(Fd," (not intended use)"),Fd.forEach(t),qd.forEach(t),Zs.forEach(t),zp=l(rt),oo=s(rt,"DIV",{class:!0});var Ed=a(oo);g(hn.$$.fragment,Ed),$p=l(Ed),er=s(Ed,"P",{});var Mf=a(er);qp=i(Mf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Mf.forEach(t),Ed.forEach(t),rt.forEach(t),Hi=l(o),Et=s(o,"H2",{class:!0});var Md=a(Et);no=s(Md,"A",{id:!0,class:!0,href:!0});var jf=a(no);tr=s(jf,"SPAN",{});var Cf=a(tr);g(mn.$$.fragment,Cf),Cf.forEach(t),jf.forEach(t),Fp=l(Md),or=s(Md,"SPAN",{});var Sf=a(or);Ep=i(Sf,"PegasusModel"),Sf.forEach(t),Md.forEach(t),Ri=l(o),Fe=s(o,"DIV",{class:!0});var wo=a(Fe);g(gn.$$.fragment,wo),Mp=l(wo),fn=s(wo,"P",{});var jd=a(fn);jp=i(jd,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=s(jd,"A",{href:!0});var Of=a(Ss);Cp=i(Of,"PreTrainedModel"),Of.forEach(t),Sp=i(jd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd.forEach(t),Op=l(wo),_n=s(wo,"P",{});var Cd=a(_n);Ap=i(Cd,"This model is also a PyTorch "),kn=s(Cd,"A",{href:!0,rel:!0});var Af=a(kn);Ip=i(Af,"torch.nn.Module"),Af.forEach(t),Lp=i(Cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cd.forEach(t),Np=l(wo),ke=s(wo,"DIV",{class:!0});var it=a(ke);g(vn.$$.fragment,it),Gp=l(it),Mt=s(it,"P",{});var Ys=a(Mt);Dp=i(Ys,"The "),Os=s(Ys,"A",{href:!0});var If=a(Os);Up=i(If,"PegasusModel"),If.forEach(t),Bp=i(Ys," forward method, overrides the "),nr=s(Ys,"CODE",{});var Lf=a(nr);Wp=i(Lf,"__call__"),Lf.forEach(t),Hp=i(Ys," special method."),Ys.forEach(t),Rp=l(it),g(so.$$.fragment,it),Kp=l(it),sr=s(it,"P",{});var Nf=a(sr);Vp=i(Nf,"Example:"),Nf.forEach(t),Qp=l(it),g(yn.$$.fragment,it),it.forEach(t),wo.forEach(t),Ki=l(o),jt=s(o,"H2",{class:!0});var Sd=a(jt);ao=s(Sd,"A",{id:!0,class:!0,href:!0});var Gf=a(ao);ar=s(Gf,"SPAN",{});var Df=a(ar);g(bn.$$.fragment,Df),Df.forEach(t),Gf.forEach(t),Jp=l(Sd),rr=s(Sd,"SPAN",{});var Uf=a(rr);Xp=i(Uf,"PegasusForConditionalGeneration"),Uf.forEach(t),Sd.forEach(t),Vi=l(o),Ee=s(o,"DIV",{class:!0});var xo=a(Ee);g(Tn.$$.fragment,xo),Zp=l(xo),Pn=s(xo,"P",{});var Od=a(Pn);Yp=i(Od,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),As=s(Od,"A",{href:!0});var Bf=a(As);eu=i(Bf,"PreTrainedModel"),Bf.forEach(t),tu=i(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od.forEach(t),ou=l(xo),wn=s(xo,"P",{});var Ad=a(wn);nu=i(Ad,"This model is also a PyTorch "),xn=s(Ad,"A",{href:!0,rel:!0});var Wf=a(xn);su=i(Wf,"torch.nn.Module"),Wf.forEach(t),au=i(Ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad.forEach(t),ru=l(xo),ve=s(xo,"DIV",{class:!0});var dt=a(ve);g(zn.$$.fragment,dt),iu=l(dt),Ct=s(dt,"P",{});var ea=a(Ct);du=i(ea,"The "),Is=s(ea,"A",{href:!0});var Hf=a(Is);lu=i(Hf,"PegasusForConditionalGeneration"),Hf.forEach(t),cu=i(ea," forward method, overrides the "),ir=s(ea,"CODE",{});var Rf=a(ir);pu=i(Rf,"__call__"),Rf.forEach(t),uu=i(ea," special method."),ea.forEach(t),hu=l(dt),g(ro.$$.fragment,dt),mu=l(dt),dr=s(dt,"P",{});var Kf=a(dr);gu=i(Kf,"Summarization example:"),Kf.forEach(t),fu=l(dt),g($n.$$.fragment,dt),dt.forEach(t),xo.forEach(t),Qi=l(o),St=s(o,"H2",{class:!0});var Id=a(St);io=s(Id,"A",{id:!0,class:!0,href:!0});var Vf=a(io);lr=s(Vf,"SPAN",{});var Qf=a(lr);g(qn.$$.fragment,Qf),Qf.forEach(t),Vf.forEach(t),_u=l(Id),cr=s(Id,"SPAN",{});var Jf=a(cr);ku=i(Jf,"PegasusForCausalLM"),Jf.forEach(t),Id.forEach(t),Ji=l(o),Ot=s(o,"DIV",{class:!0});var Ld=a(Ot);g(Fn.$$.fragment,Ld),vu=l(Ld),Ze=s(Ld,"DIV",{class:!0});var ta=a(Ze);g(En.$$.fragment,ta),yu=l(ta),pr=s(ta,"P",{});var Xf=a(pr);bu=i(Xf,"Example:"),Xf.forEach(t),Tu=l(ta),g(Mn.$$.fragment,ta),ta.forEach(t),Ld.forEach(t),Xi=l(o),At=s(o,"H2",{class:!0});var Nd=a(At);lo=s(Nd,"A",{id:!0,class:!0,href:!0});var Zf=a(lo);ur=s(Zf,"SPAN",{});var Yf=a(ur);g(jn.$$.fragment,Yf),Yf.forEach(t),Zf.forEach(t),Pu=l(Nd),hr=s(Nd,"SPAN",{});var e_=a(hr);wu=i(e_,"TFPegasusModel"),e_.forEach(t),Nd.forEach(t),Zi=l(o),ue=s(o,"DIV",{class:!0});var lt=a(ue);g(Cn.$$.fragment,lt),xu=l(lt),Sn=s(lt,"P",{});var Gd=a(Sn);zu=i(Gd,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ls=s(Gd,"A",{href:!0});var t_=a(Ls);$u=i(t_,"TFPreTrainedModel"),t_.forEach(t),qu=i(Gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gd.forEach(t),Fu=l(lt),On=s(lt,"P",{});var Dd=a(On);Eu=i(Dd,"This model is also a "),An=s(Dd,"A",{href:!0,rel:!0});var o_=a(An);Mu=i(o_,"tf.keras.Model"),o_.forEach(t),ju=i(Dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dd.forEach(t),Cu=l(lt),g(co.$$.fragment,lt),Su=l(lt),ye=s(lt,"DIV",{class:!0});var ct=a(ye);g(In.$$.fragment,ct),Ou=l(ct),It=s(ct,"P",{});var oa=a(It);Au=i(oa,"The "),Ns=s(oa,"A",{href:!0});var n_=a(Ns);Iu=i(n_,"TFPegasusModel"),n_.forEach(t),Lu=i(oa," forward method, overrides the "),mr=s(oa,"CODE",{});var s_=a(mr);Nu=i(s_,"__call__"),s_.forEach(t),Gu=i(oa," special method."),oa.forEach(t),Du=l(ct),g(po.$$.fragment,ct),Uu=l(ct),gr=s(ct,"P",{});var a_=a(gr);Bu=i(a_,"Example:"),a_.forEach(t),Wu=l(ct),g(Ln.$$.fragment,ct),ct.forEach(t),lt.forEach(t),Yi=l(o),Lt=s(o,"H2",{class:!0});var Ud=a(Lt);uo=s(Ud,"A",{id:!0,class:!0,href:!0});var r_=a(uo);fr=s(r_,"SPAN",{});var i_=a(fr);g(Nn.$$.fragment,i_),i_.forEach(t),r_.forEach(t),Hu=l(Ud),_r=s(Ud,"SPAN",{});var d_=a(_r);Ru=i(d_,"TFPegasusForConditionalGeneration"),d_.forEach(t),Ud.forEach(t),ed=l(o),he=s(o,"DIV",{class:!0});var pt=a(he);g(Gn.$$.fragment,pt),Ku=l(pt),Dn=s(pt,"P",{});var Bd=a(Dn);Vu=i(Bd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gs=s(Bd,"A",{href:!0});var l_=a(Gs);Qu=i(l_,"TFPreTrainedModel"),l_.forEach(t),Ju=i(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Xu=l(pt),Un=s(pt,"P",{});var Wd=a(Un);Zu=i(Wd,"This model is also a "),Bn=s(Wd,"A",{href:!0,rel:!0});var c_=a(Bn);Yu=i(c_,"tf.keras.Model"),c_.forEach(t),eh=i(Wd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wd.forEach(t),th=l(pt),g(ho.$$.fragment,pt),oh=l(pt),be=s(pt,"DIV",{class:!0});var ut=a(be);g(Wn.$$.fragment,ut),nh=l(ut),Nt=s(ut,"P",{});var na=a(Nt);sh=i(na,"The "),Ds=s(na,"A",{href:!0});var p_=a(Ds);ah=i(p_,"TFPegasusForConditionalGeneration"),p_.forEach(t),rh=i(na," forward method, overrides the "),kr=s(na,"CODE",{});var u_=a(kr);ih=i(u_,"__call__"),u_.forEach(t),dh=i(na," special method."),na.forEach(t),lh=l(ut),g(mo.$$.fragment,ut),ch=l(ut),vr=s(ut,"P",{});var h_=a(vr);ph=i(h_,"Summarization example:"),h_.forEach(t),uh=l(ut),g(Hn.$$.fragment,ut),ut.forEach(t),pt.forEach(t),td=l(o),Gt=s(o,"H2",{class:!0});var Hd=a(Gt);go=s(Hd,"A",{id:!0,class:!0,href:!0});var m_=a(go);yr=s(m_,"SPAN",{});var g_=a(yr);g(Rn.$$.fragment,g_),g_.forEach(t),m_.forEach(t),hh=l(Hd),br=s(Hd,"SPAN",{});var f_=a(br);mh=i(f_,"FlaxPegasusModel"),f_.forEach(t),Hd.forEach(t),od=l(o),L=s(o,"DIV",{class:!0});var ne=a(L);g(Kn.$$.fragment,ne),gh=l(ne),Vn=s(ne,"P",{});var Rd=a(Vn);fh=i(Rd,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Us=s(Rd,"A",{href:!0});var __=a(Us);_h=i(__,"FlaxPreTrainedModel"),__.forEach(t),kh=i(Rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rd.forEach(t),vh=l(ne),Qn=s(ne,"P",{});var Kd=a(Qn);yh=i(Kd,`This model is also a Flax Linen
`),Jn=s(Kd,"A",{href:!0,rel:!0});var k_=a(Jn);bh=i(k_,"flax.nn.Module"),k_.forEach(t),Th=i(Kd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kd.forEach(t),Ph=l(ne),Tr=s(ne,"P",{});var v_=a(Tr);wh=i(v_,"Finally, this model supports inherent JAX features such as:"),v_.forEach(t),xh=l(ne),Re=s(ne,"UL",{});var zo=a(Re);Pr=s(zo,"LI",{});var y_=a(Pr);Xn=s(y_,"A",{href:!0,rel:!0});var b_=a(Xn);zh=i(b_,"Just-In-Time (JIT) compilation"),b_.forEach(t),y_.forEach(t),$h=l(zo),wr=s(zo,"LI",{});var T_=a(wr);Zn=s(T_,"A",{href:!0,rel:!0});var P_=a(Zn);qh=i(P_,"Automatic Differentiation"),P_.forEach(t),T_.forEach(t),Fh=l(zo),xr=s(zo,"LI",{});var w_=a(xr);Yn=s(w_,"A",{href:!0,rel:!0});var x_=a(Yn);Eh=i(x_,"Vectorization"),x_.forEach(t),w_.forEach(t),Mh=l(zo),zr=s(zo,"LI",{});var z_=a(zr);es=s(z_,"A",{href:!0,rel:!0});var $_=a(es);jh=i($_,"Parallelization"),$_.forEach(t),z_.forEach(t),zo.forEach(t),Ch=l(ne),Te=s(ne,"DIV",{class:!0});var ht=a(Te);g(ts.$$.fragment,ht),Sh=l(ht),Dt=s(ht,"P",{});var sa=a(Dt);Oh=i(sa,"The "),$r=s(sa,"CODE",{});var q_=a($r);Ah=i(q_,"FlaxPegasusPreTrainedModel"),q_.forEach(t),Ih=i(sa,"forward method, overrides the "),qr=s(sa,"CODE",{});var F_=a(qr);Lh=i(F_,"__call__"),F_.forEach(t),Nh=i(sa," special method."),sa.forEach(t),Gh=l(ht),g(fo.$$.fragment,ht),Dh=l(ht),Fr=s(ht,"P",{});var E_=a(Fr);Uh=i(E_,"Example:"),E_.forEach(t),Bh=l(ht),g(os.$$.fragment,ht),ht.forEach(t),Wh=l(ne),Ye=s(ne,"DIV",{class:!0});var aa=a(Ye);g(ns.$$.fragment,aa),Hh=l(aa),Er=s(aa,"P",{});var M_=a(Er);Rh=i(M_,"Example:"),M_.forEach(t),Kh=l(aa),g(ss.$$.fragment,aa),aa.forEach(t),Vh=l(ne),et=s(ne,"DIV",{class:!0});var ra=a(et);g(as.$$.fragment,ra),Qh=l(ra),Mr=s(ra,"P",{});var j_=a(Mr);Jh=i(j_,"Example:"),j_.forEach(t),Xh=l(ra),g(rs.$$.fragment,ra),ra.forEach(t),ne.forEach(t),nd=l(o),Ut=s(o,"H2",{class:!0});var Vd=a(Ut);_o=s(Vd,"A",{id:!0,class:!0,href:!0});var C_=a(_o);jr=s(C_,"SPAN",{});var S_=a(jr);g(is.$$.fragment,S_),S_.forEach(t),C_.forEach(t),Zh=l(Vd),Cr=s(Vd,"SPAN",{});var O_=a(Cr);Yh=i(O_,"FlaxPegasusForConditionalGeneration"),O_.forEach(t),Vd.forEach(t),sd=l(o),N=s(o,"DIV",{class:!0});var se=a(N);g(ds.$$.fragment,se),em=l(se),ls=s(se,"P",{});var Qd=a(ls);tm=i(Qd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bs=s(Qd,"A",{href:!0});var A_=a(Bs);om=i(A_,"FlaxPreTrainedModel"),A_.forEach(t),nm=i(Qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd.forEach(t),sm=l(se),cs=s(se,"P",{});var Jd=a(cs);am=i(Jd,`This model is also a Flax Linen
`),ps=s(Jd,"A",{href:!0,rel:!0});var I_=a(ps);rm=i(I_,"flax.nn.Module"),I_.forEach(t),im=i(Jd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jd.forEach(t),dm=l(se),Sr=s(se,"P",{});var L_=a(Sr);lm=i(L_,"Finally, this model supports inherent JAX features such as:"),L_.forEach(t),cm=l(se),Ke=s(se,"UL",{});var $o=a(Ke);Or=s($o,"LI",{});var N_=a(Or);us=s(N_,"A",{href:!0,rel:!0});var G_=a(us);pm=i(G_,"Just-In-Time (JIT) compilation"),G_.forEach(t),N_.forEach(t),um=l($o),Ar=s($o,"LI",{});var D_=a(Ar);hs=s(D_,"A",{href:!0,rel:!0});var U_=a(hs);hm=i(U_,"Automatic Differentiation"),U_.forEach(t),D_.forEach(t),mm=l($o),Ir=s($o,"LI",{});var B_=a(Ir);ms=s(B_,"A",{href:!0,rel:!0});var W_=a(ms);gm=i(W_,"Vectorization"),W_.forEach(t),B_.forEach(t),fm=l($o),Lr=s($o,"LI",{});var H_=a(Lr);gs=s(H_,"A",{href:!0,rel:!0});var R_=a(gs);_m=i(R_,"Parallelization"),R_.forEach(t),H_.forEach(t),$o.forEach(t),km=l(se),E=s(se,"DIV",{class:!0});var j=a(E);g(fs.$$.fragment,j),vm=l(j),Bt=s(j,"P",{});var ia=a(Bt);ym=i(ia,"The "),Nr=s(ia,"CODE",{});var K_=a(Nr);bm=i(K_,"FlaxPegasusPreTrainedModel"),K_.forEach(t),Tm=i(ia,"forward method, overrides the "),Gr=s(ia,"CODE",{});var V_=a(Gr);Pm=i(V_,"__call__"),V_.forEach(t),wm=i(ia," special method."),ia.forEach(t),xm=l(j),g(ko.$$.fragment,j),zm=l(j),Dr=s(j,"P",{});var Q_=a(Dr);$m=i(Q_,"Summarization example:"),Q_.forEach(t),qm=l(j),Ur=s(j,"BLOCKQUOTE",{});var J_=a(Ur);Br=s(J_,"BLOCKQUOTE",{});var X_=a(Br);Wr=s(X_,"BLOCKQUOTE",{});var Z_=a(Wr);Hr=s(Z_,"P",{});var Y_=a(Hr);Fm=i(Y_,"from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),Y_.forEach(t),Z_.forEach(t),X_.forEach(t),J_.forEach(t),Em=l(j),Rr=s(j,"BLOCKQUOTE",{});var ek=a(Rr);Kr=s(ek,"BLOCKQUOTE",{});var tk=a(Kr);Vr=s(tk,"BLOCKQUOTE",{});var ok=a(Vr);Qr=s(ok,"P",{});var nk=a(Qr);Mm=i(nk,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),nk.forEach(t),ok.forEach(t),tk.forEach(t),ek.forEach(t),jm=l(j),Jr=s(j,"BLOCKQUOTE",{});var sk=a(Jr);Xr=s(sk,"BLOCKQUOTE",{});var ak=a(Xr);Zr=s(ak,"BLOCKQUOTE",{});var rk=a(Zr);Yr=s(rk,"P",{});var ik=a(Yr);Cm=i(ik,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ik.forEach(t),rk.forEach(t),ak.forEach(t),sk.forEach(t),Sm=l(j),ei=s(j,"BLOCKQUOTE",{});var dk=a(ei);ti=s(dk,"BLOCKQUOTE",{});var lk=a(ti);_s=s(lk,"BLOCKQUOTE",{});var Xd=a(_s);vo=s(Xd,"H1",{class:!0});var Zd=a(vo);yo=s(Zd,"A",{id:!0,class:!0,href:!0});var ck=a(yo);oi=s(ck,"SPAN",{});var pk=a(oi);g(ks.$$.fragment,pk),pk.forEach(t),ck.forEach(t),Om=l(Zd),ni=s(Zd,"SPAN",{});var uk=a(ni);Am=i(uk,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),uk.forEach(t),Zd.forEach(t),Im=l(Xd),si=s(Xd,"P",{});var hk=a(si);Lm=i(hk,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),hk.forEach(t),Xd.forEach(t),lk.forEach(t),dk.forEach(t),Nm=l(j),ai=s(j,"P",{});var mk=a(ai);Gm=i(mk,"Mask filling example:"),mk.forEach(t),Dm=l(j),ri=s(j,"BLOCKQUOTE",{});var gk=a(ri);ii=s(gk,"BLOCKQUOTE",{});var fk=a(ii);di=s(fk,"BLOCKQUOTE",{});var _k=a(di);li=s(_k,"P",{});var kk=a(li);Um=i(kk,`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),kk.forEach(t),_k.forEach(t),fk.forEach(t),gk.forEach(t),Bm=l(j),ci=s(j,"BLOCKQUOTE",{});var vk=a(ci);pi=s(vk,"BLOCKQUOTE",{});var yk=a(pi);ui=s(yk,"BLOCKQUOTE",{});var bk=a(ui);hi=s(bk,"P",{});var Tk=a(hi);Wm=i(Tk,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Tk.forEach(t),bk.forEach(t),yk.forEach(t),vk.forEach(t),Hm=l(j),mi=s(j,"BLOCKQUOTE",{});var Pk=a(mi);gi=s(Pk,"BLOCKQUOTE",{});var wk=a(gi);fi=s(wk,"BLOCKQUOTE",{});var xk=a(fi);_i=s(xk,"P",{});var zk=a(_i);Rm=i(zk,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),zk.forEach(t),xk.forEach(t),wk.forEach(t),Pk.forEach(t),Km=l(j),ki=s(j,"BLOCKQUOTE",{});var $k=a(ki);vi=s($k,"BLOCKQUOTE",{});var qk=a(vi);yi=s(qk,"BLOCKQUOTE",{});var Fk=a(yi);bi=s(Fk,"P",{});var Ek=a(bi);Vm=i(Ek,"tokenizer.decode(predictions).split()"),Ek.forEach(t),Fk.forEach(t),qk.forEach(t),$k.forEach(t),j.forEach(t),Qm=l(se),tt=s(se,"DIV",{class:!0});var da=a(tt);g(vs.$$.fragment,da),Jm=l(da),Ti=s(da,"P",{});var Mk=a(Ti);Xm=i(Mk,"Example:"),Mk.forEach(t),Zm=l(da),g(ys.$$.fragment,da),da.forEach(t),Ym=l(se),ot=s(se,"DIV",{class:!0});var la=a(ot);g(bs.$$.fragment,la),eg=l(la),Pi=s(la,"P",{});var jk=a(Pi);tg=i(jk,"Example:"),jk.forEach(t),og=l(la),g(Ts.$$.fragment,la),la.forEach(t),se.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Rk)),c(T,"id","pegasus"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#pegasus"),c(b,"class","relative group"),c(re,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(re,"rel","nofollow"),c(O,"id","overview"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview"),c(D,"class","relative group"),c(U,"href","https://arxiv.org/pdf/1912.08777.pdf"),c(U,"rel","nofollow"),c(q,"href","https://huggingface.co/sshleifer"),c(q,"rel","nofollow"),c($e,"href","https://github.com/google-research/pegasus"),c($e,"rel","nofollow"),c(I,"id","checkpoints"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#checkpoints"),c(le,"class","relative group"),c(Fo,"href","https://huggingface.co/models?search=pegasus"),c(Fo,"rel","nofollow"),c(Mo,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),c(Mo,"rel","nofollow"),c(jo,"href","https://huggingface.co/models?search=distill-pegasus"),c(jo,"rel","nofollow"),c(Co,"href","https://arxiv.org/abs/2010.13002"),c(Co,"rel","nofollow"),c(Ht,"id","examples"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#examples"),c(vt,"class","relative group"),c(Oo,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),c(Oo,"rel","nofollow"),c(Ao,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(Ao,"rel","nofollow"),c(Kt,"id","implementation-notes"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#implementation-notes"),c(yt,"class","relative group"),c(zs,"href","/docs/transformers/pr_16164/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Go,"href","https://github.com/google-research/pegasus"),c(Go,"rel","nofollow"),c(Vt,"id","usage-example"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#usage-example"),c(Pt,"class","relative group"),c(Qt,"id","transformers.PegasusConfig"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.PegasusConfig"),c(wt,"class","relative group"),c($s,"href","/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusModel"),c(Ho,"href","https://huggingface.co/google/pegasus-large"),c(Ho,"rel","nofollow"),c(qs,"href","/docs/transformers/pr_16164/en/main_classes/configuration#transformers.PretrainedConfig"),c(Fs,"href","/docs/transformers/pr_16164/en/main_classes/configuration#transformers.PretrainedConfig"),c(ce,"class","docstring"),c(Jt,"id","transformers.PegasusTokenizer"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.PegasusTokenizer"),c($t,"class","relative group"),c(Jo,"href","https://github.com/google/sentencepiece"),c(Jo,"rel","nofollow"),c(Es,"href","/docs/transformers/pr_16164/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Ce,"class","docstring"),c(Zt,"class","docstring"),c(Yt,"class","docstring"),c(eo,"class","docstring"),c(W,"class","docstring"),c(to,"id","transformers.PegasusTokenizerFast"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.PegasusTokenizerFast"),c(qt,"class","relative group"),c(dn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(dn,"rel","nofollow"),c(js,"href","/docs/transformers/pr_16164/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Xe,"class","docstring"),c(oo,"class","docstring"),c(pe,"class","docstring"),c(no,"id","transformers.PegasusModel"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.PegasusModel"),c(Et,"class","relative group"),c(Ss,"href","/docs/transformers/pr_16164/en/main_classes/model#transformers.PreTrainedModel"),c(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(kn,"rel","nofollow"),c(Os,"href","/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusModel"),c(ke,"class","docstring"),c(Fe,"class","docstring"),c(ao,"id","transformers.PegasusForConditionalGeneration"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.PegasusForConditionalGeneration"),c(jt,"class","relative group"),c(As,"href","/docs/transformers/pr_16164/en/main_classes/model#transformers.PreTrainedModel"),c(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xn,"rel","nofollow"),c(Is,"href","/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),c(ve,"class","docstring"),c(Ee,"class","docstring"),c(io,"id","transformers.PegasusForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.PegasusForCausalLM"),c(St,"class","relative group"),c(Ze,"class","docstring"),c(Ot,"class","docstring"),c(lo,"id","transformers.TFPegasusModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.TFPegasusModel"),c(At,"class","relative group"),c(Ls,"href","/docs/transformers/pr_16164/en/main_classes/model#transformers.TFPreTrainedModel"),c(An,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(An,"rel","nofollow"),c(Ns,"href","/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.TFPegasusModel"),c(ye,"class","docstring"),c(ue,"class","docstring"),c(uo,"id","transformers.TFPegasusForConditionalGeneration"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFPegasusForConditionalGeneration"),c(Lt,"class","relative group"),c(Gs,"href","/docs/transformers/pr_16164/en/main_classes/model#transformers.TFPreTrainedModel"),c(Bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bn,"rel","nofollow"),c(Ds,"href","/docs/transformers/pr_16164/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),c(be,"class","docstring"),c(he,"class","docstring"),c(go,"id","transformers.FlaxPegasusModel"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.FlaxPegasusModel"),c(Gt,"class","relative group"),c(Us,"href","/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Jn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Jn,"rel","nofollow"),c(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xn,"rel","nofollow"),c(Zn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zn,"rel","nofollow"),c(Yn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Yn,"rel","nofollow"),c(es,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(es,"rel","nofollow"),c(Te,"class","docstring"),c(Ye,"class","docstring"),c(et,"class","docstring"),c(L,"class","docstring"),c(_o,"id","transformers.FlaxPegasusForConditionalGeneration"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.FlaxPegasusForConditionalGeneration"),c(Ut,"class","relative group"),c(Bs,"href","/docs/transformers/pr_16164/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ps,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ps,"rel","nofollow"),c(us,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(us,"rel","nofollow"),c(hs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(hs,"rel","nofollow"),c(ms,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ms,"rel","nofollow"),c(gs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gs,"rel","nofollow"),c(yo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(vo,"class","relative group"),c(E,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(N,"class","docstring")},m(o,u){e(document.head,h),p(o,z,u),p(o,b,u),e(b,T),e(T,x),f(w,x,null),e(b,P),e(b,$),e($,Oe),p(o,me,u),p(o,F,u),e(F,we),e(we,ae),e(F,Ae),e(F,re),e(re,ie),e(F,Ie),p(o,Me,u),p(o,D,u),e(D,O),e(O,xe),f(K,xe,null),e(D,C),e(D,S),e(S,Le),p(o,Y,u),p(o,ee,u),e(ee,Ne),e(ee,U),e(U,Ge),e(ee,De),p(o,A,u),p(o,ge,u),e(ge,de),p(o,je,u),p(o,te,u),e(te,V),e(V,Ue),e(te,Be),e(te,B),e(B,We),p(o,oe,u),p(o,H,u),e(H,y),e(H,q),e(q,ze),e(H,mt),e(H,$e),e($e,Q),e(H,gt),p(o,Ve,u),p(o,le,u),e(le,I),e(I,J),f(qe,J,null),e(le,ft),e(le,X),e(X,_t),p(o,Qe,u),p(o,R,u),e(R,kt),e(R,Fo),e(Fo,Yd),e(R,el),e(R,ca),e(ca,tl),e(R,ol),p(o,Mi,u),p(o,fe,u),e(fe,pa),e(pa,nl),e(fe,sl),e(fe,ua),e(ua,al),e(fe,rl),e(fe,ha),e(ha,il),e(fe,dl),e(fe,Eo),e(Eo,ll),e(Eo,Mo),e(Mo,cl),e(Eo,pl),e(fe,ul),e(fe,Wt),e(Wt,jo),e(jo,hl),e(Wt,ml),e(Wt,Co),e(Co,gl),e(Wt,fl),p(o,ji,u),p(o,vt,u),e(vt,Ht),e(Ht,ma),f(So,ma,null),e(vt,_l),e(vt,ga),e(ga,kl),p(o,Ci,u),p(o,Je,u),e(Je,Rt),e(Rt,Oo),e(Oo,vl),e(Rt,yl),e(Rt,Ao),e(Ao,bl),e(Rt,Tl),e(Je,Pl),e(Je,fa),e(fa,wl),e(Je,xl),e(Je,_a),e(_a,zl),p(o,Si,u),p(o,yt,u),e(yt,Kt),e(Kt,ka),f(Io,ka,null),e(yt,$l),e(yt,va),e(va,ql),p(o,Oi,u),p(o,_e,u),e(_e,ya),e(ya,ba),e(ba,Fl),e(_e,El),e(_e,Ta),e(Ta,xs),e(xs,Ml),e(xs,zs),e(zs,jl),e(_e,Cl),e(_e,Lo),e(Lo,Pa),e(Pa,Sl),e(Lo,Ol),e(Lo,bt),e(bt,wa),e(wa,Al),e(bt,Il),e(bt,xa),e(xa,Ll),e(bt,Nl),e(bt,No),e(No,Gl),e(No,za),e(za,Dl),e(No,Ul),e(_e,Bl),e(_e,$a),e($a,He),e(He,Wl),e(He,qa),e(qa,Hl),e(He,Rl),e(He,Fa),e(Fa,Kl),e(He,Vl),e(He,Ea),e(Ea,Ql),e(He,Jl),e(_e,Xl),e(_e,Ma),e(Ma,Tt),e(Tt,Zl),e(Tt,Go),e(Go,Yl),e(Tt,ec),e(Tt,ja),e(ja,tc),e(Tt,oc),p(o,Ai,u),p(o,Pt,u),e(Pt,Vt),e(Vt,Ca),f(Do,Ca,null),e(Pt,nc),e(Pt,Sa),e(Sa,sc),p(o,Ii,u),f(Uo,o,u),p(o,Li,u),p(o,wt,u),e(wt,Qt),e(Qt,Oa),f(Bo,Oa,null),e(wt,ac),e(wt,Aa),e(Aa,rc),p(o,Ni,u),p(o,ce,u),f(Wo,ce,null),e(ce,ic),e(ce,xt),e(xt,dc),e(xt,$s),e($s,lc),e(xt,cc),e(xt,Ho),e(Ho,pc),e(xt,uc),e(ce,hc),e(ce,zt),e(zt,mc),e(zt,qs),e(qs,gc),e(zt,fc),e(zt,Fs),e(Fs,_c),e(zt,kc),e(ce,vc),e(ce,Ia),e(Ia,yc),e(ce,bc),f(Ro,ce,null),p(o,Gi,u),p(o,$t,u),e($t,Jt),e(Jt,La),f(Ko,La,null),e($t,Tc),e($t,Na),e(Na,Pc),p(o,Di,u),p(o,Xt,u),e(Xt,wc),e(Xt,Ga),e(Ga,xc),e(Xt,zc),p(o,Ui,u),p(o,W,u),f(Vo,W,null),e(W,$c),e(W,Qo),e(Qo,qc),e(Qo,Jo),e(Jo,Fc),e(Qo,Ec),e(W,Mc),e(W,Xo),e(Xo,jc),e(Xo,Es),e(Es,Cc),e(Xo,Sc),e(W,Oc),e(W,Ce),f(Zo,Ce,null),e(Ce,Ac),e(Ce,Yo),e(Yo,Ic),e(Yo,Da),e(Da,Lc),e(Yo,Nc),e(Ce,Gc),e(Ce,en),e(en,Ms),e(Ms,Dc),e(Ms,Ua),e(Ua,Uc),e(en,Bc),e(en,tn),e(tn,Wc),e(tn,Ba),e(Ba,Hc),e(tn,Rc),e(Ce,Kc),e(Ce,Wa),e(Wa,Vc),e(W,Qc),e(W,Zt),f(on,Zt,null),e(Zt,Jc),e(Zt,Ha),e(Ha,Xc),e(W,Zc),e(W,Yt),f(nn,Yt,null),e(Yt,Yc),e(Yt,Ra),e(Ra,ep),e(W,tp),e(W,eo),f(sn,eo,null),e(eo,op),e(eo,Ka),e(Ka,np),p(o,Bi,u),p(o,qt,u),e(qt,to),e(to,Va),f(an,Va,null),e(qt,sp),e(qt,Qa),e(Qa,ap),p(o,Wi,u),p(o,pe,u),f(rn,pe,null),e(pe,rp),e(pe,Ft),e(Ft,ip),e(Ft,Ja),e(Ja,dp),e(Ft,lp),e(Ft,dn),e(dn,cp),e(Ft,pp),e(pe,up),e(pe,ln),e(ln,hp),e(ln,js),e(js,mp),e(ln,gp),e(pe,fp),e(pe,Xe),f(cn,Xe,null),e(Xe,_p),e(Xe,Xa),e(Xa,kp),e(Xe,vp),e(Xe,pn),e(pn,Cs),e(Cs,yp),e(Cs,Za),e(Za,bp),e(pn,Tp),e(pn,un),e(un,Pp),e(un,Ya),e(Ya,wp),e(un,xp),e(pe,zp),e(pe,oo),f(hn,oo,null),e(oo,$p),e(oo,er),e(er,qp),p(o,Hi,u),p(o,Et,u),e(Et,no),e(no,tr),f(mn,tr,null),e(Et,Fp),e(Et,or),e(or,Ep),p(o,Ri,u),p(o,Fe,u),f(gn,Fe,null),e(Fe,Mp),e(Fe,fn),e(fn,jp),e(fn,Ss),e(Ss,Cp),e(fn,Sp),e(Fe,Op),e(Fe,_n),e(_n,Ap),e(_n,kn),e(kn,Ip),e(_n,Lp),e(Fe,Np),e(Fe,ke),f(vn,ke,null),e(ke,Gp),e(ke,Mt),e(Mt,Dp),e(Mt,Os),e(Os,Up),e(Mt,Bp),e(Mt,nr),e(nr,Wp),e(Mt,Hp),e(ke,Rp),f(so,ke,null),e(ke,Kp),e(ke,sr),e(sr,Vp),e(ke,Qp),f(yn,ke,null),p(o,Ki,u),p(o,jt,u),e(jt,ao),e(ao,ar),f(bn,ar,null),e(jt,Jp),e(jt,rr),e(rr,Xp),p(o,Vi,u),p(o,Ee,u),f(Tn,Ee,null),e(Ee,Zp),e(Ee,Pn),e(Pn,Yp),e(Pn,As),e(As,eu),e(Pn,tu),e(Ee,ou),e(Ee,wn),e(wn,nu),e(wn,xn),e(xn,su),e(wn,au),e(Ee,ru),e(Ee,ve),f(zn,ve,null),e(ve,iu),e(ve,Ct),e(Ct,du),e(Ct,Is),e(Is,lu),e(Ct,cu),e(Ct,ir),e(ir,pu),e(Ct,uu),e(ve,hu),f(ro,ve,null),e(ve,mu),e(ve,dr),e(dr,gu),e(ve,fu),f($n,ve,null),p(o,Qi,u),p(o,St,u),e(St,io),e(io,lr),f(qn,lr,null),e(St,_u),e(St,cr),e(cr,ku),p(o,Ji,u),p(o,Ot,u),f(Fn,Ot,null),e(Ot,vu),e(Ot,Ze),f(En,Ze,null),e(Ze,yu),e(Ze,pr),e(pr,bu),e(Ze,Tu),f(Mn,Ze,null),p(o,Xi,u),p(o,At,u),e(At,lo),e(lo,ur),f(jn,ur,null),e(At,Pu),e(At,hr),e(hr,wu),p(o,Zi,u),p(o,ue,u),f(Cn,ue,null),e(ue,xu),e(ue,Sn),e(Sn,zu),e(Sn,Ls),e(Ls,$u),e(Sn,qu),e(ue,Fu),e(ue,On),e(On,Eu),e(On,An),e(An,Mu),e(On,ju),e(ue,Cu),f(co,ue,null),e(ue,Su),e(ue,ye),f(In,ye,null),e(ye,Ou),e(ye,It),e(It,Au),e(It,Ns),e(Ns,Iu),e(It,Lu),e(It,mr),e(mr,Nu),e(It,Gu),e(ye,Du),f(po,ye,null),e(ye,Uu),e(ye,gr),e(gr,Bu),e(ye,Wu),f(Ln,ye,null),p(o,Yi,u),p(o,Lt,u),e(Lt,uo),e(uo,fr),f(Nn,fr,null),e(Lt,Hu),e(Lt,_r),e(_r,Ru),p(o,ed,u),p(o,he,u),f(Gn,he,null),e(he,Ku),e(he,Dn),e(Dn,Vu),e(Dn,Gs),e(Gs,Qu),e(Dn,Ju),e(he,Xu),e(he,Un),e(Un,Zu),e(Un,Bn),e(Bn,Yu),e(Un,eh),e(he,th),f(ho,he,null),e(he,oh),e(he,be),f(Wn,be,null),e(be,nh),e(be,Nt),e(Nt,sh),e(Nt,Ds),e(Ds,ah),e(Nt,rh),e(Nt,kr),e(kr,ih),e(Nt,dh),e(be,lh),f(mo,be,null),e(be,ch),e(be,vr),e(vr,ph),e(be,uh),f(Hn,be,null),p(o,td,u),p(o,Gt,u),e(Gt,go),e(go,yr),f(Rn,yr,null),e(Gt,hh),e(Gt,br),e(br,mh),p(o,od,u),p(o,L,u),f(Kn,L,null),e(L,gh),e(L,Vn),e(Vn,fh),e(Vn,Us),e(Us,_h),e(Vn,kh),e(L,vh),e(L,Qn),e(Qn,yh),e(Qn,Jn),e(Jn,bh),e(Qn,Th),e(L,Ph),e(L,Tr),e(Tr,wh),e(L,xh),e(L,Re),e(Re,Pr),e(Pr,Xn),e(Xn,zh),e(Re,$h),e(Re,wr),e(wr,Zn),e(Zn,qh),e(Re,Fh),e(Re,xr),e(xr,Yn),e(Yn,Eh),e(Re,Mh),e(Re,zr),e(zr,es),e(es,jh),e(L,Ch),e(L,Te),f(ts,Te,null),e(Te,Sh),e(Te,Dt),e(Dt,Oh),e(Dt,$r),e($r,Ah),e(Dt,Ih),e(Dt,qr),e(qr,Lh),e(Dt,Nh),e(Te,Gh),f(fo,Te,null),e(Te,Dh),e(Te,Fr),e(Fr,Uh),e(Te,Bh),f(os,Te,null),e(L,Wh),e(L,Ye),f(ns,Ye,null),e(Ye,Hh),e(Ye,Er),e(Er,Rh),e(Ye,Kh),f(ss,Ye,null),e(L,Vh),e(L,et),f(as,et,null),e(et,Qh),e(et,Mr),e(Mr,Jh),e(et,Xh),f(rs,et,null),p(o,nd,u),p(o,Ut,u),e(Ut,_o),e(_o,jr),f(is,jr,null),e(Ut,Zh),e(Ut,Cr),e(Cr,Yh),p(o,sd,u),p(o,N,u),f(ds,N,null),e(N,em),e(N,ls),e(ls,tm),e(ls,Bs),e(Bs,om),e(ls,nm),e(N,sm),e(N,cs),e(cs,am),e(cs,ps),e(ps,rm),e(cs,im),e(N,dm),e(N,Sr),e(Sr,lm),e(N,cm),e(N,Ke),e(Ke,Or),e(Or,us),e(us,pm),e(Ke,um),e(Ke,Ar),e(Ar,hs),e(hs,hm),e(Ke,mm),e(Ke,Ir),e(Ir,ms),e(ms,gm),e(Ke,fm),e(Ke,Lr),e(Lr,gs),e(gs,_m),e(N,km),e(N,E),f(fs,E,null),e(E,vm),e(E,Bt),e(Bt,ym),e(Bt,Nr),e(Nr,bm),e(Bt,Tm),e(Bt,Gr),e(Gr,Pm),e(Bt,wm),e(E,xm),f(ko,E,null),e(E,zm),e(E,Dr),e(Dr,$m),e(E,qm),e(E,Ur),e(Ur,Br),e(Br,Wr),e(Wr,Hr),e(Hr,Fm),e(E,Em),e(E,Rr),e(Rr,Kr),e(Kr,Vr),e(Vr,Qr),e(Qr,Mm),e(E,jm),e(E,Jr),e(Jr,Xr),e(Xr,Zr),e(Zr,Yr),e(Yr,Cm),e(E,Sm),e(E,ei),e(ei,ti),e(ti,_s),e(_s,vo),e(vo,yo),e(yo,oi),f(ks,oi,null),e(vo,Om),e(vo,ni),e(ni,Am),e(_s,Im),e(_s,si),e(si,Lm),e(E,Nm),e(E,ai),e(ai,Gm),e(E,Dm),e(E,ri),e(ri,ii),e(ii,di),e(di,li),e(li,Um),e(E,Bm),e(E,ci),e(ci,pi),e(pi,ui),e(ui,hi),e(hi,Wm),e(E,Hm),e(E,mi),e(mi,gi),e(gi,fi),e(fi,_i),e(_i,Rm),e(E,Km),e(E,ki),e(ki,vi),e(vi,yi),e(yi,bi),e(bi,Vm),e(N,Qm),e(N,tt),f(vs,tt,null),e(tt,Jm),e(tt,Ti),e(Ti,Xm),e(tt,Zm),f(ys,tt,null),e(N,Ym),e(N,ot),f(bs,ot,null),e(ot,eg),e(ot,Pi),e(Pi,tg),e(ot,og),f(Ts,ot,null),ad=!0},p(o,[u]){const Ps={};u&2&&(Ps.$$scope={dirty:u,ctx:o}),so.$set(Ps);const wi={};u&2&&(wi.$$scope={dirty:u,ctx:o}),ro.$set(wi);const xi={};u&2&&(xi.$$scope={dirty:u,ctx:o}),co.$set(xi);const zi={};u&2&&(zi.$$scope={dirty:u,ctx:o}),po.$set(zi);const bo={};u&2&&(bo.$$scope={dirty:u,ctx:o}),ho.$set(bo);const $i={};u&2&&($i.$$scope={dirty:u,ctx:o}),mo.$set($i);const qi={};u&2&&(qi.$$scope={dirty:u,ctx:o}),fo.$set(qi);const ws={};u&2&&(ws.$$scope={dirty:u,ctx:o}),ko.$set(ws)},i(o){ad||(_(w.$$.fragment,o),_(K.$$.fragment,o),_(qe.$$.fragment,o),_(So.$$.fragment,o),_(Io.$$.fragment,o),_(Do.$$.fragment,o),_(Uo.$$.fragment,o),_(Bo.$$.fragment,o),_(Wo.$$.fragment,o),_(Ro.$$.fragment,o),_(Ko.$$.fragment,o),_(Vo.$$.fragment,o),_(Zo.$$.fragment,o),_(on.$$.fragment,o),_(nn.$$.fragment,o),_(sn.$$.fragment,o),_(an.$$.fragment,o),_(rn.$$.fragment,o),_(cn.$$.fragment,o),_(hn.$$.fragment,o),_(mn.$$.fragment,o),_(gn.$$.fragment,o),_(vn.$$.fragment,o),_(so.$$.fragment,o),_(yn.$$.fragment,o),_(bn.$$.fragment,o),_(Tn.$$.fragment,o),_(zn.$$.fragment,o),_(ro.$$.fragment,o),_($n.$$.fragment,o),_(qn.$$.fragment,o),_(Fn.$$.fragment,o),_(En.$$.fragment,o),_(Mn.$$.fragment,o),_(jn.$$.fragment,o),_(Cn.$$.fragment,o),_(co.$$.fragment,o),_(In.$$.fragment,o),_(po.$$.fragment,o),_(Ln.$$.fragment,o),_(Nn.$$.fragment,o),_(Gn.$$.fragment,o),_(ho.$$.fragment,o),_(Wn.$$.fragment,o),_(mo.$$.fragment,o),_(Hn.$$.fragment,o),_(Rn.$$.fragment,o),_(Kn.$$.fragment,o),_(ts.$$.fragment,o),_(fo.$$.fragment,o),_(os.$$.fragment,o),_(ns.$$.fragment,o),_(ss.$$.fragment,o),_(as.$$.fragment,o),_(rs.$$.fragment,o),_(is.$$.fragment,o),_(ds.$$.fragment,o),_(fs.$$.fragment,o),_(ko.$$.fragment,o),_(ks.$$.fragment,o),_(vs.$$.fragment,o),_(ys.$$.fragment,o),_(bs.$$.fragment,o),_(Ts.$$.fragment,o),ad=!0)},o(o){k(w.$$.fragment,o),k(K.$$.fragment,o),k(qe.$$.fragment,o),k(So.$$.fragment,o),k(Io.$$.fragment,o),k(Do.$$.fragment,o),k(Uo.$$.fragment,o),k(Bo.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Zo.$$.fragment,o),k(on.$$.fragment,o),k(nn.$$.fragment,o),k(sn.$$.fragment,o),k(an.$$.fragment,o),k(rn.$$.fragment,o),k(cn.$$.fragment,o),k(hn.$$.fragment,o),k(mn.$$.fragment,o),k(gn.$$.fragment,o),k(vn.$$.fragment,o),k(so.$$.fragment,o),k(yn.$$.fragment,o),k(bn.$$.fragment,o),k(Tn.$$.fragment,o),k(zn.$$.fragment,o),k(ro.$$.fragment,o),k($n.$$.fragment,o),k(qn.$$.fragment,o),k(Fn.$$.fragment,o),k(En.$$.fragment,o),k(Mn.$$.fragment,o),k(jn.$$.fragment,o),k(Cn.$$.fragment,o),k(co.$$.fragment,o),k(In.$$.fragment,o),k(po.$$.fragment,o),k(Ln.$$.fragment,o),k(Nn.$$.fragment,o),k(Gn.$$.fragment,o),k(ho.$$.fragment,o),k(Wn.$$.fragment,o),k(mo.$$.fragment,o),k(Hn.$$.fragment,o),k(Rn.$$.fragment,o),k(Kn.$$.fragment,o),k(ts.$$.fragment,o),k(fo.$$.fragment,o),k(os.$$.fragment,o),k(ns.$$.fragment,o),k(ss.$$.fragment,o),k(as.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ds.$$.fragment,o),k(fs.$$.fragment,o),k(ko.$$.fragment,o),k(ks.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(bs.$$.fragment,o),k(Ts.$$.fragment,o),ad=!1},d(o){t(h),o&&t(z),o&&t(b),v(w),o&&t(me),o&&t(F),o&&t(Me),o&&t(D),v(K),o&&t(Y),o&&t(ee),o&&t(A),o&&t(ge),o&&t(je),o&&t(te),o&&t(oe),o&&t(H),o&&t(Ve),o&&t(le),v(qe),o&&t(Qe),o&&t(R),o&&t(Mi),o&&t(fe),o&&t(ji),o&&t(vt),v(So),o&&t(Ci),o&&t(Je),o&&t(Si),o&&t(yt),v(Io),o&&t(Oi),o&&t(_e),o&&t(Ai),o&&t(Pt),v(Do),o&&t(Ii),v(Uo,o),o&&t(Li),o&&t(wt),v(Bo),o&&t(Ni),o&&t(ce),v(Wo),v(Ro),o&&t(Gi),o&&t($t),v(Ko),o&&t(Di),o&&t(Xt),o&&t(Ui),o&&t(W),v(Vo),v(Zo),v(on),v(nn),v(sn),o&&t(Bi),o&&t(qt),v(an),o&&t(Wi),o&&t(pe),v(rn),v(cn),v(hn),o&&t(Hi),o&&t(Et),v(mn),o&&t(Ri),o&&t(Fe),v(gn),v(vn),v(so),v(yn),o&&t(Ki),o&&t(jt),v(bn),o&&t(Vi),o&&t(Ee),v(Tn),v(zn),v(ro),v($n),o&&t(Qi),o&&t(St),v(qn),o&&t(Ji),o&&t(Ot),v(Fn),v(En),v(Mn),o&&t(Xi),o&&t(At),v(jn),o&&t(Zi),o&&t(ue),v(Cn),v(co),v(In),v(po),v(Ln),o&&t(Yi),o&&t(Lt),v(Nn),o&&t(ed),o&&t(he),v(Gn),v(ho),v(Wn),v(mo),v(Hn),o&&t(td),o&&t(Gt),v(Rn),o&&t(od),o&&t(L),v(Kn),v(ts),v(fo),v(os),v(ns),v(ss),v(as),v(rs),o&&t(nd),o&&t(Ut),v(is),o&&t(sd),o&&t(N),v(ds),v(fs),v(ko),v(ks),v(vs),v(ys),v(bs),v(Ts)}}}const Rk={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function Kk(G,h,z){let{fw:b}=h;return G.$$set=T=>{"fw"in T&&z(0,b=T.fw)},[b]}class e1 extends Ck{constructor(h){super();Sk(this,h,Kk,Hk,Ok,{fw:0})}}export{e1 as default,Rk as metadata};
