import{S as r1,i as a1,s as i1,e as n,k as l,w as u,t as a,M as l1,c as s,d as o,m as d,a as r,x as g,h as i,b as c,F as e,g as m,y as _,q as v,o as P,B as T,v as d1}from"../../chunks/vendor-6b77c823.js";import{T as ce}from"../../chunks/Tip-39098574.js";import{D as $}from"../../chunks/Docstring-af1d0ae0.js";import{C as A}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as D}from"../../chunks/IconCopyLink-7a11ce68.js";function c1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function p1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function h1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function m1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function f1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function u1(x){let p,L,I,y,b,C,f,w,Ho,at,z,ue,Ce,ye,Ko,be,Go,Xt,pe,ze,Le,Zt,H,he,je,it,Qt,Fe,we,Jo,Yt,O,ge,$e,ke,Xo,xe,Zo,eo,me,Qo,qe,_e;return{c(){p=n("p"),L=a("TF 2.0 models accepts two formats as inputs:"),I=l(),y=n("ul"),b=n("li"),C=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),w=n("li"),Ho=a("having all inputs as a list, tuple or dict in the first positional arguments."),at=l(),z=n("p"),ue=a("This second option is useful when using "),Ce=n("code"),ye=a("tf.keras.Model.fit"),Ko=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=n("code"),Go=a("model(inputs)"),Xt=a("."),pe=l(),ze=n("p"),Le=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Zt=l(),H=n("ul"),he=n("li"),je=a("a single Tensor with "),it=n("code"),Qt=a("input_ids"),Fe=a(" only and nothing else: "),we=n("code"),Jo=a("model(input_ids)"),Yt=l(),O=n("li"),ge=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),$e=n("code"),ke=a("model([input_ids, attention_mask])"),Xo=a(" or "),xe=n("code"),Zo=a("model([input_ids, attention_mask, token_type_ids])"),eo=l(),me=n("li"),Qo=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n("code"),_e=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){p=s(k,"P",{});var j=r(p);L=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),I=d(k),y=s(k,"UL",{});var to=r(y);b=s(to,"LI",{});var Qs=r(b);C=i(Qs,"having all inputs as keyword arguments (like PyTorch models), or"),Qs.forEach(o),f=d(to),w=s(to,"LI",{});var Yo=r(w);Ho=i(Yo,"having all inputs as a list, tuple or dict in the first positional arguments."),Yo.forEach(o),to.forEach(o),at=d(k),z=s(k,"P",{});var E=r(z);ue=i(E,"This second option is useful when using "),Ce=s(E,"CODE",{});var Ys=r(Ce);ye=i(Ys,"tf.keras.Model.fit"),Ys.forEach(o),Ko=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(E,"CODE",{});var lt=r(be);Go=i(lt,"model(inputs)"),lt.forEach(o),Xt=i(E,"."),E.forEach(o),pe=d(k),ze=s(k,"P",{});var er=r(ze);Le=i(er,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),er.forEach(o),Zt=d(k),H=s(k,"UL",{});var De=r(H);he=s(De,"LI",{});var ve=r(he);je=i(ve,"a single Tensor with "),it=s(ve,"CODE",{});var tr=r(it);Qt=i(tr,"input_ids"),tr.forEach(o),Fe=i(ve," only and nothing else: "),we=s(ve,"CODE",{});var or=r(we);Jo=i(or,"model(input_ids)"),or.forEach(o),ve.forEach(o),Yt=d(De),O=s(De,"LI",{});var Pe=r(O);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),$e=s(Pe,"CODE",{});var nr=r($e);ke=i(nr,"model([input_ids, attention_mask])"),nr.forEach(o),Xo=i(Pe," or "),xe=s(Pe,"CODE",{});var sr=r(xe);Zo=i(sr,"model([input_ids, attention_mask, token_type_ids])"),sr.forEach(o),Pe.forEach(o),eo=d(De),me=s(De,"LI",{});var Oe=r(me);Qo=i(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s(Oe,"CODE",{});var rr=r(qe);_e=i(rr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),rr.forEach(o),Oe.forEach(o),De.forEach(o)},m(k,j){m(k,p,j),e(p,L),m(k,I,j),m(k,y,j),e(y,b),e(b,C),e(y,f),e(y,w),e(w,Ho),m(k,at,j),m(k,z,j),e(z,ue),e(z,Ce),e(Ce,ye),e(z,Ko),e(z,be),e(be,Go),e(z,Xt),m(k,pe,j),m(k,ze,j),e(ze,Le),m(k,Zt,j),m(k,H,j),e(H,he),e(he,je),e(he,it),e(it,Qt),e(he,Fe),e(he,we),e(we,Jo),e(H,Yt),e(H,O),e(O,ge),e(O,$e),e($e,ke),e(O,Xo),e(O,xe),e(xe,Zo),e(H,eo),e(H,me),e(me,Qo),e(me,qe),e(qe,_e)},d(k){k&&o(p),k&&o(I),k&&o(y),k&&o(at),k&&o(z),k&&o(pe),k&&o(ze),k&&o(Zt),k&&o(H)}}}function g1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function _1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function v1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function P1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function T1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function I1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function C1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function y1(x){let p,L,I,y,b;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=r(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function b1(x){let p,L,I,y,b,C,f,w,Ho,at,z,ue,Ce,ye,Ko,be,Go,Xt,pe,ze,Le,Zt,H,he,je,it,Qt,Fe,we,Jo,Yt,O,ge,$e,ke,Xo,xe,Zo,eo,me,Qo,qe,_e,k,j,to,Qs,Yo,E,Ys,lt,er,De,ve,tr,or,Pe,nr,sr,Oe,rr,xd,ar,Ed,Md,ir,zd,jd,nl,en,sl,Ae,Fd,tn,qd,Dd,on,Od,Ad,rl,dt,oo,pa,nn,Nd,ha,Vd,al,fe,sn,Sd,no,lr,Wd,Bd,dr,Ud,Rd,Hd,ct,Kd,cr,Gd,Jd,pr,Xd,Zd,Qd,so,rn,Yd,an,ec,hr,tc,oc,il,pt,ro,ma,ln,nc,fa,sc,ll,V,dn,rc,ht,ac,mr,ic,lc,cn,dc,cc,pc,mt,hc,fr,mc,fc,ur,uc,gc,_c,ua,vc,Pc,pn,dl,ft,ao,ga,hn,Tc,_a,Ic,cl,S,mn,Cc,ut,yc,gr,bc,Lc,fn,wc,$c,kc,gt,xc,_r,Ec,Mc,vr,zc,jc,Fc,va,qc,Dc,un,pl,_t,io,Pa,gn,Oc,Ta,Ac,hl,F,_n,Nc,Ia,Vc,Sc,vn,Wc,Pr,Bc,Uc,Rc,Te,Pn,Hc,Ca,Kc,Gc,ya,Tr,Jc,ba,Xc,Zc,La,Qc,Yc,lo,Tn,ep,In,tp,wa,op,np,sp,co,Cn,rp,$a,ap,ip,Ir,yn,ml,vt,po,ka,bn,lp,xa,dp,fl,W,Ln,cp,wn,pp,Ea,hp,mp,fp,$n,up,Cr,gp,_p,vp,Ie,kn,Pp,Ma,Tp,Ip,za,yr,Cp,ja,yp,bp,Fa,Lp,wp,ho,xn,$p,qa,kp,ul,Pt,mo,Da,En,xp,Oa,Ep,gl,B,Mn,Mp,Aa,zp,jp,zn,Fp,br,qp,Dp,Op,fo,jn,Ap,Fn,Np,Na,Vp,Sp,Wp,uo,qn,Bp,Tt,Up,Va,Rp,Hp,Sa,Kp,Gp,_l,It,go,Wa,Dn,Jp,Ba,Xp,vl,U,On,Zp,Ua,Qp,Yp,K,Lr,eh,th,wr,oh,nh,$r,sh,rh,Ra,ah,ih,kr,lh,dh,ch,_o,An,ph,Nn,hh,xr,mh,fh,uh,vo,Vn,gh,Sn,_h,Er,vh,Ph,Pl,Ct,Po,Ha,Wn,Th,Ka,Ih,Tl,R,Bn,Ch,Un,yh,Rn,bh,Lh,wh,G,Hn,$h,yt,kh,Mr,xh,Eh,Ga,Mh,zh,jh,To,Fh,Ja,qh,Dh,Kn,Oh,J,Gn,Ah,bt,Nh,zr,Vh,Sh,Xa,Wh,Bh,Uh,Io,Rh,Za,Hh,Kh,Jn,Gh,X,Xn,Jh,Lt,Xh,jr,Zh,Qh,Qa,Yh,em,tm,Co,om,Ya,nm,sm,Zn,Il,wt,yo,ei,Qn,rm,ti,am,Cl,$t,Yn,im,Z,es,lm,kt,dm,Fr,cm,pm,oi,hm,mm,fm,bo,um,ni,gm,_m,ts,yl,xt,Lo,si,os,vm,ri,Pm,bl,Et,ns,Tm,Q,ss,Im,Mt,Cm,qr,ym,bm,ai,Lm,wm,$m,wo,km,ii,xm,Em,rs,Ll,zt,$o,li,as,Mm,di,zm,wl,q,is,jm,ls,Fm,Dr,qm,Dm,Om,ds,Am,cs,Nm,Vm,Sm,ko,Wm,Y,ps,Bm,jt,Um,Or,Rm,Hm,ci,Km,Gm,Jm,xo,Xm,pi,Zm,Qm,hs,Ym,ee,ms,ef,Ft,tf,Ar,of,nf,hi,sf,rf,af,Eo,lf,mi,df,cf,fs,pf,te,us,hf,qt,mf,Nr,ff,uf,fi,gf,_f,vf,Mo,Pf,ui,Tf,If,gs,$l,Dt,zo,gi,_s,Cf,_i,yf,kl,Ot,vs,bf,oe,Ps,Lf,At,wf,Vr,$f,kf,vi,xf,Ef,Mf,jo,zf,Pi,jf,Ff,Ts,xl,Nt,Fo,Ti,Is,qf,Ii,Df,El,Vt,Cs,Of,ne,ys,Af,St,Nf,Sr,Vf,Sf,Ci,Wf,Bf,Uf,qo,Rf,yi,Hf,Kf,bs,Ml,Wt,Do,bi,Ls,Gf,Li,Jf,zl,M,ws,Xf,$s,Zf,Wr,Qf,Yf,eu,ks,tu,xs,ou,nu,su,wi,ru,au,Ee,$i,Es,iu,lu,ki,Ms,du,cu,xi,zs,pu,hu,Ei,js,mu,fu,se,Fs,uu,Bt,gu,Mi,_u,vu,zi,Pu,Tu,Iu,Oo,Cu,ji,yu,bu,qs,Lu,Ne,Ds,wu,Fi,$u,ku,Os,xu,Ve,As,Eu,qi,Mu,zu,Ns,jl,Ut,Ao,Di,Vs,ju,Oi,Fu,Fl,Rt,Ss,qu,re,Ws,Du,Ht,Ou,Ai,Au,Nu,Ni,Vu,Su,Wu,No,Bu,Vi,Uu,Ru,Bs,ql,Kt,Vo,Si,Us,Hu,Wi,Ku,Dl,Gt,Rs,Gu,ae,Hs,Ju,Jt,Xu,Bi,Zu,Qu,Ui,Yu,eg,tg,So,og,Ri,ng,sg,Ks,Ol;return C=new D({}),ye=new D({}),ke=new D({}),en=new A({props:{code:`from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),nn=new D({}),sn=new $({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/configuration_clip.py#L245",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),rn=new $({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),ln=new D({}),dn=new $({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/configuration_clip.py#L33",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.CLIPTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}]}}),pn=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

# Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPTextConfig()

# Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration
model = CLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTextModel, CLIPTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),hn=new D({}),mn=new $({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/configuration_clip.py#L141",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.CLIPVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.CLIPVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}]}}),un=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

# Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPVisionConfig()

# Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration
model = CLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPVisionModel, CLIPVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),gn=new D({}),_n=new $({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),Pn=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Tn=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cn=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yn=new $({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip.py#L336"}}),bn=new D({}),Ln=new $({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),kn=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),En=new D({}),Mn=new $({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/feature_extraction_clip.py#L30",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.CLIPFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.CLIPFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.CLIPFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.CLIPFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.CLIPFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.CLIPFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),jn=new $({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/feature_extraction_clip.py#L158",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),qn=new $({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = <Resampling.BICUBIC: 3>"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/feature_extraction_clip.py#L184",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),Dn=new D({}),On=new $({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),An=new $({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/processing_clip.py#L95"}}),Vn=new $({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/processing_clip.py#L102"}}),Wn=new D({}),Bn=new $({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L842",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16715/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Hn=new $({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L971",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ce({props:{$$slots:{default:[c1]},$$scope:{ctx:x}}}),Kn=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Gn=new $({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L875",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Io=new ce({props:{$$slots:{default:[p1]},$$scope:{ctx:x}}}),Jn=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Xn=new $({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L922",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Co=new ce({props:{$$slots:{default:[h1]},$$scope:{ctx:x}}}),Zn=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Qn=new D({}),Yn=new $({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L678"}}),es=new $({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L693",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new ce({props:{$$slots:{default:[m1]},$$scope:{ctx:x}}}),ts=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

model = CLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),os=new D({}),ns=new $({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L789"}}),ss=new $({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_clip.py#L802",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new ce({props:{$$slots:{default:[f1]},$$scope:{ctx:x}}}),rs=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPVisionModel

model = CLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),as=new D({}),is=new $({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1195",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16715/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ko=new ce({props:{$$slots:{default:[u1]},$$scope:{ctx:x}}}),ps=new $({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1323",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.call.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.TFCLIPModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>tf.Tensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ce({props:{$$slots:{default:[g1]},$$scope:{ctx:x}}}),hs=new A({props:{code:`import tensorflow as tf
from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="tf", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = tf.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),ms=new $({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1241",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Eo=new ce({props:{$$slots:{default:[_1]},$$scope:{ctx:x}}}),fs=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),us=new $({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1281",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Mo=new ce({props:{$$slots:{default:[v1]},$$scope:{ctx:x}}}),gs=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),_s=new D({}),vs=new $({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1034"}}),Ps=new $({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1042",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPTextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPTextModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPTextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPTextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPTextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new ce({props:{$$slots:{default:[P1]},$$scope:{ctx:x}}}),Ts=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

model = TFCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Is=new D({}),Cs=new $({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1097"}}),ys=new $({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_tf_clip.py#L1138",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qo=new ce({props:{$$slots:{default:[T1]},$$scope:{ctx:x}}}),bs=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPVisionModel

model = TFCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Ls=new D({}),ws=new $({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L1107",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16715/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16715/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16715/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fs=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L736",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new ce({props:{$$slots:{default:[I1]},$$scope:{ctx:x}}}),qs=new A({props:{code:`import jax
from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="np", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Ds=new $({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L781",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Os=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),As=new $({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L848",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ns=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Vs=new D({}),Ss=new $({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L928"}}),Ws=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L603",parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16715/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPTextModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPTextModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new ce({props:{$$slots:{default:[C1]},$$scope:{ctx:x}}}),Bs=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

model = FlaxCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Us=new D({}),Rs=new $({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L981"}}),Hs=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16715/src/transformers/models/clip/modeling_flax_clip.py#L672",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16715/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16715/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new ce({props:{$$slots:{default:[y1]},$$scope:{ctx:x}}}),Ks=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPVisionModel

model = FlaxCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("meta"),L=l(),I=n("h1"),y=n("a"),b=n("span"),u(C.$$.fragment),f=l(),w=n("span"),Ho=a("CLIP"),at=l(),z=n("h2"),ue=n("a"),Ce=n("span"),u(ye.$$.fragment),Ko=l(),be=n("span"),Go=a("Overview"),Xt=l(),pe=n("p"),ze=a("The CLIP model was proposed in "),Le=n("a"),Zt=a("Learning Transferable Visual Models From Natural Language Supervision"),H=a(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),he=l(),je=n("p"),it=a("The abstract from the paper is the following:"),Qt=l(),Fe=n("p"),we=n("em"),Jo=a(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),Yt=l(),O=n("h2"),ge=n("a"),$e=n("span"),u(ke.$$.fragment),Xo=l(),xe=n("span"),Zo=a("Usage"),eo=l(),me=n("p"),Qo=a(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=n("p"),k=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=n("a"),to=a("CLIPFeatureExtractor"),Qs=a(" can be used to resize (or rescale) and normalize images for the model."),Yo=l(),E=n("p"),Ys=a("The "),lt=n("a"),er=a("CLIPTokenizer"),De=a(" is used to encode the text. The "),ve=n("a"),tr=a("CLIPProcessor"),or=a(` wraps
`),Pe=n("a"),nr=a("CLIPFeatureExtractor"),sr=a(" and "),Oe=n("a"),rr=a("CLIPTokenizer"),xd=a(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ar=n("a"),Ed=a("CLIPProcessor"),Md=a(" and "),ir=n("a"),zd=a("CLIPModel"),jd=a("."),nl=l(),u(en.$$.fragment),sl=l(),Ae=n("p"),Fd=a("This model was contributed by "),tn=n("a"),qd=a("valhalla"),Dd=a(". The original code can be found "),on=n("a"),Od=a("here"),Ad=a("."),rl=l(),dt=n("h2"),oo=n("a"),pa=n("span"),u(nn.$$.fragment),Nd=l(),ha=n("span"),Vd=a("CLIPConfig"),al=l(),fe=n("div"),u(sn.$$.fragment),Sd=l(),no=n("p"),lr=n("a"),Wd=a("CLIPConfig"),Bd=a(" is the configuration class to store the configuration of a "),dr=n("a"),Ud=a("CLIPModel"),Rd=a(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Hd=l(),ct=n("p"),Kd=a("Configuration objects inherit from "),cr=n("a"),Gd=a("PretrainedConfig"),Jd=a(` and can be used to control the model outputs. Read the
documentation from `),pr=n("a"),Xd=a("PretrainedConfig"),Zd=a(" for more information."),Qd=l(),so=n("div"),u(rn.$$.fragment),Yd=l(),an=n("p"),ec=a("Instantiate a "),hr=n("a"),tc=a("CLIPConfig"),oc=a(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=l(),pt=n("h2"),ro=n("a"),ma=n("span"),u(ln.$$.fragment),nc=l(),fa=n("span"),sc=a("CLIPTextConfig"),ll=l(),V=n("div"),u(dn.$$.fragment),rc=l(),ht=n("p"),ac=a("This is the configuration class to store the configuration of a "),mr=n("a"),ic=a("CLIPModel"),lc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=n("a"),dc=a("openai/clip-vit-base-patch32"),cc=a(" architecture."),pc=l(),mt=n("p"),hc=a("Configuration objects inherit from "),fr=n("a"),mc=a("PretrainedConfig"),fc=a(` and can be used to control the model outputs. Read the
documentation from `),ur=n("a"),uc=a("PretrainedConfig"),gc=a(" for more information."),_c=l(),ua=n("p"),vc=a("Example:"),Pc=l(),u(pn.$$.fragment),dl=l(),ft=n("h2"),ao=n("a"),ga=n("span"),u(hn.$$.fragment),Tc=l(),_a=n("span"),Ic=a("CLIPVisionConfig"),cl=l(),S=n("div"),u(mn.$$.fragment),Cc=l(),ut=n("p"),yc=a("This is the configuration class to store the configuration of a "),gr=n("a"),bc=a("CLIPModel"),Lc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=n("a"),wc=a("openai/clip-vit-base-patch32"),$c=a(" architecture."),kc=l(),gt=n("p"),xc=a("Configuration objects inherit from "),_r=n("a"),Ec=a("PretrainedConfig"),Mc=a(` and can be used to control the model outputs. Read the
documentation from `),vr=n("a"),zc=a("PretrainedConfig"),jc=a(" for more information."),Fc=l(),va=n("p"),qc=a("Example:"),Dc=l(),u(un.$$.fragment),pl=l(),_t=n("h2"),io=n("a"),Pa=n("span"),u(gn.$$.fragment),Oc=l(),Ta=n("span"),Ac=a("CLIPTokenizer"),hl=l(),F=n("div"),u(_n.$$.fragment),Nc=l(),Ia=n("p"),Vc=a("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Sc=l(),vn=n("p"),Wc=a("This tokenizer inherits from "),Pr=n("a"),Bc=a("PreTrainedTokenizer"),Uc=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rc=l(),Te=n("div"),u(Pn.$$.fragment),Hc=l(),Ca=n("p"),Kc=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Gc=l(),ya=n("ul"),Tr=n("li"),Jc=a("single sequence: "),ba=n("code"),Xc=a("<|startoftext|> X <|endoftext|>"),Zc=l(),La=n("p"),Qc=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Yc=l(),lo=n("div"),u(Tn.$$.fragment),ep=l(),In=n("p"),tp=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wa=n("code"),op=a("prepare_for_model"),np=a(" method."),sp=l(),co=n("div"),u(Cn.$$.fragment),rp=l(),$a=n("p"),ap=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ip=l(),Ir=n("div"),u(yn.$$.fragment),ml=l(),vt=n("h2"),po=n("a"),ka=n("span"),u(bn.$$.fragment),lp=l(),xa=n("span"),dp=a("CLIPTokenizerFast"),fl=l(),W=n("div"),u(Ln.$$.fragment),cp=l(),wn=n("p"),pp=a("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ea=n("em"),hp=a("tokenizers"),mp=a(` library). Based on byte-level
Byte-Pair-Encoding.`),fp=l(),$n=n("p"),up=a("This tokenizer inherits from "),Cr=n("a"),gp=a("PreTrainedTokenizerFast"),_p=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp=l(),Ie=n("div"),u(kn.$$.fragment),Pp=l(),Ma=n("p"),Tp=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ip=l(),za=n("ul"),yr=n("li"),Cp=a("single sequence: "),ja=n("code"),yp=a("<|startoftext|> X <|endoftext|>"),bp=l(),Fa=n("p"),Lp=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),wp=l(),ho=n("div"),u(xn.$$.fragment),$p=l(),qa=n("p"),kp=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=l(),Pt=n("h2"),mo=n("a"),Da=n("span"),u(En.$$.fragment),xp=l(),Oa=n("span"),Ep=a("CLIPFeatureExtractor"),gl=l(),B=n("div"),u(Mn.$$.fragment),Mp=l(),Aa=n("p"),zp=a("Constructs a CLIP feature extractor."),jp=l(),zn=n("p"),Fp=a("This feature extractor inherits from "),br=n("a"),qp=a("FeatureExtractionMixin"),Dp=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Op=l(),fo=n("div"),u(jn.$$.fragment),Ap=l(),Fn=n("p"),Np=a("Crops "),Na=n("code"),Vp=a("image"),Sp=a(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Wp=l(),uo=n("div"),u(qn.$$.fragment),Bp=l(),Tt=n("p"),Up=a("Resizes "),Va=n("code"),Rp=a("image"),Hp=a(". Note that this will trigger a conversion of "),Sa=n("code"),Kp=a("image"),Gp=a(" to a PIL Image."),_l=l(),It=n("h2"),go=n("a"),Wa=n("span"),u(Dn.$$.fragment),Jp=l(),Ba=n("span"),Xp=a("CLIPProcessor"),vl=l(),U=n("div"),u(On.$$.fragment),Zp=l(),Ua=n("p"),Qp=a("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Yp=l(),K=n("p"),Lr=n("a"),eh=a("CLIPProcessor"),th=a(" offers all the functionalities of "),wr=n("a"),oh=a("CLIPFeatureExtractor"),nh=a(" and "),$r=n("a"),sh=a("CLIPTokenizerFast"),rh=a(`. See the
`),Ra=n("code"),ah=a("__call__()"),ih=a(" and "),kr=n("a"),lh=a("decode()"),dh=a(" for more information."),ch=l(),_o=n("div"),u(An.$$.fragment),ph=l(),Nn=n("p"),hh=a("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xr=n("a"),mh=a("batch_decode()"),fh=a(`. Please
refer to the docstring of this method for more information.`),uh=l(),vo=n("div"),u(Vn.$$.fragment),gh=l(),Sn=n("p"),_h=a("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Er=n("a"),vh=a("decode()"),Ph=a(`. Please refer to
the docstring of this method for more information.`),Pl=l(),Ct=n("h2"),Po=n("a"),Ha=n("span"),u(Wn.$$.fragment),Th=l(),Ka=n("span"),Ih=a("CLIPModel"),Tl=l(),R=n("div"),u(Bn.$$.fragment),Ch=l(),Un=n("p"),yh=a("This model is a PyTorch "),Rn=n("a"),bh=a("torch.nn.Module"),Lh=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wh=l(),G=n("div"),u(Hn.$$.fragment),$h=l(),yt=n("p"),kh=a("The "),Mr=n("a"),xh=a("CLIPModel"),Eh=a(" forward method, overrides the "),Ga=n("code"),Mh=a("__call__"),zh=a(" special method."),jh=l(),u(To.$$.fragment),Fh=l(),Ja=n("p"),qh=a("Examples:"),Dh=l(),u(Kn.$$.fragment),Oh=l(),J=n("div"),u(Gn.$$.fragment),Ah=l(),bt=n("p"),Nh=a("The "),zr=n("a"),Vh=a("CLIPModel"),Sh=a(" forward method, overrides the "),Xa=n("code"),Wh=a("__call__"),Bh=a(" special method."),Uh=l(),u(Io.$$.fragment),Rh=l(),Za=n("p"),Hh=a("Examples:"),Kh=l(),u(Jn.$$.fragment),Gh=l(),X=n("div"),u(Xn.$$.fragment),Jh=l(),Lt=n("p"),Xh=a("The "),jr=n("a"),Zh=a("CLIPModel"),Qh=a(" forward method, overrides the "),Qa=n("code"),Yh=a("__call__"),em=a(" special method."),tm=l(),u(Co.$$.fragment),om=l(),Ya=n("p"),nm=a("Examples:"),sm=l(),u(Zn.$$.fragment),Il=l(),wt=n("h2"),yo=n("a"),ei=n("span"),u(Qn.$$.fragment),rm=l(),ti=n("span"),am=a("CLIPTextModel"),Cl=l(),$t=n("div"),u(Yn.$$.fragment),im=l(),Z=n("div"),u(es.$$.fragment),lm=l(),kt=n("p"),dm=a("The "),Fr=n("a"),cm=a("CLIPTextModel"),pm=a(" forward method, overrides the "),oi=n("code"),hm=a("__call__"),mm=a(" special method."),fm=l(),u(bo.$$.fragment),um=l(),ni=n("p"),gm=a("Examples:"),_m=l(),u(ts.$$.fragment),yl=l(),xt=n("h2"),Lo=n("a"),si=n("span"),u(os.$$.fragment),vm=l(),ri=n("span"),Pm=a("CLIPVisionModel"),bl=l(),Et=n("div"),u(ns.$$.fragment),Tm=l(),Q=n("div"),u(ss.$$.fragment),Im=l(),Mt=n("p"),Cm=a("The "),qr=n("a"),ym=a("CLIPVisionModel"),bm=a(" forward method, overrides the "),ai=n("code"),Lm=a("__call__"),wm=a(" special method."),$m=l(),u(wo.$$.fragment),km=l(),ii=n("p"),xm=a("Examples:"),Em=l(),u(rs.$$.fragment),Ll=l(),zt=n("h2"),$o=n("a"),li=n("span"),u(as.$$.fragment),Mm=l(),di=n("span"),zm=a("TFCLIPModel"),wl=l(),q=n("div"),u(is.$$.fragment),jm=l(),ls=n("p"),Fm=a("This model inherits from "),Dr=n("a"),qm=a("TFPreTrainedModel"),Dm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om=l(),ds=n("p"),Am=a("This model is also a "),cs=n("a"),Nm=a("tf.keras.Model"),Vm=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sm=l(),u(ko.$$.fragment),Wm=l(),Y=n("div"),u(ps.$$.fragment),Bm=l(),jt=n("p"),Um=a("The "),Or=n("a"),Rm=a("TFCLIPModel"),Hm=a(" forward method, overrides the "),ci=n("code"),Km=a("__call__"),Gm=a(" special method."),Jm=l(),u(xo.$$.fragment),Xm=l(),pi=n("p"),Zm=a("Examples:"),Qm=l(),u(hs.$$.fragment),Ym=l(),ee=n("div"),u(ms.$$.fragment),ef=l(),Ft=n("p"),tf=a("The "),Ar=n("a"),of=a("TFCLIPModel"),nf=a(" forward method, overrides the "),hi=n("code"),sf=a("__call__"),rf=a(" special method."),af=l(),u(Eo.$$.fragment),lf=l(),mi=n("p"),df=a("Examples:"),cf=l(),u(fs.$$.fragment),pf=l(),te=n("div"),u(us.$$.fragment),hf=l(),qt=n("p"),mf=a("The "),Nr=n("a"),ff=a("TFCLIPModel"),uf=a(" forward method, overrides the "),fi=n("code"),gf=a("__call__"),_f=a(" special method."),vf=l(),u(Mo.$$.fragment),Pf=l(),ui=n("p"),Tf=a("Examples:"),If=l(),u(gs.$$.fragment),$l=l(),Dt=n("h2"),zo=n("a"),gi=n("span"),u(_s.$$.fragment),Cf=l(),_i=n("span"),yf=a("TFCLIPTextModel"),kl=l(),Ot=n("div"),u(vs.$$.fragment),bf=l(),oe=n("div"),u(Ps.$$.fragment),Lf=l(),At=n("p"),wf=a("The "),Vr=n("a"),$f=a("TFCLIPTextModel"),kf=a(" forward method, overrides the "),vi=n("code"),xf=a("__call__"),Ef=a(" special method."),Mf=l(),u(jo.$$.fragment),zf=l(),Pi=n("p"),jf=a("Examples:"),Ff=l(),u(Ts.$$.fragment),xl=l(),Nt=n("h2"),Fo=n("a"),Ti=n("span"),u(Is.$$.fragment),qf=l(),Ii=n("span"),Df=a("TFCLIPVisionModel"),El=l(),Vt=n("div"),u(Cs.$$.fragment),Of=l(),ne=n("div"),u(ys.$$.fragment),Af=l(),St=n("p"),Nf=a("The "),Sr=n("a"),Vf=a("TFCLIPVisionModel"),Sf=a(" forward method, overrides the "),Ci=n("code"),Wf=a("__call__"),Bf=a(" special method."),Uf=l(),u(qo.$$.fragment),Rf=l(),yi=n("p"),Hf=a("Examples:"),Kf=l(),u(bs.$$.fragment),Ml=l(),Wt=n("h2"),Do=n("a"),bi=n("span"),u(Ls.$$.fragment),Gf=l(),Li=n("span"),Jf=a("FlaxCLIPModel"),zl=l(),M=n("div"),u(ws.$$.fragment),Xf=l(),$s=n("p"),Zf=a("This model inherits from "),Wr=n("a"),Qf=a("FlaxPreTrainedModel"),Yf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eu=l(),ks=n("p"),tu=a("This model is also a Flax Linen "),xs=n("a"),ou=a("flax.linen.Module"),nu=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su=l(),wi=n("p"),ru=a("Finally, this model supports inherent JAX features such as:"),au=l(),Ee=n("ul"),$i=n("li"),Es=n("a"),iu=a("Just-In-Time (JIT) compilation"),lu=l(),ki=n("li"),Ms=n("a"),du=a("Automatic Differentiation"),cu=l(),xi=n("li"),zs=n("a"),pu=a("Vectorization"),hu=l(),Ei=n("li"),js=n("a"),mu=a("Parallelization"),fu=l(),se=n("div"),u(Fs.$$.fragment),uu=l(),Bt=n("p"),gu=a("The "),Mi=n("code"),_u=a("FlaxCLIPPreTrainedModel"),vu=a(" forward method, overrides the "),zi=n("code"),Pu=a("__call__"),Tu=a(" special method."),Iu=l(),u(Oo.$$.fragment),Cu=l(),ji=n("p"),yu=a("Example:"),bu=l(),u(qs.$$.fragment),Lu=l(),Ne=n("div"),u(Ds.$$.fragment),wu=l(),Fi=n("p"),$u=a("Examples:"),ku=l(),u(Os.$$.fragment),xu=l(),Ve=n("div"),u(As.$$.fragment),Eu=l(),qi=n("p"),Mu=a("Examples:"),zu=l(),u(Ns.$$.fragment),jl=l(),Ut=n("h2"),Ao=n("a"),Di=n("span"),u(Vs.$$.fragment),ju=l(),Oi=n("span"),Fu=a("FlaxCLIPTextModel"),Fl=l(),Rt=n("div"),u(Ss.$$.fragment),qu=l(),re=n("div"),u(Ws.$$.fragment),Du=l(),Ht=n("p"),Ou=a("The "),Ai=n("code"),Au=a("FlaxCLIPTextPreTrainedModel"),Nu=a(" forward method, overrides the "),Ni=n("code"),Vu=a("__call__"),Su=a(" special method."),Wu=l(),u(No.$$.fragment),Bu=l(),Vi=n("p"),Uu=a("Example:"),Ru=l(),u(Bs.$$.fragment),ql=l(),Kt=n("h2"),Vo=n("a"),Si=n("span"),u(Us.$$.fragment),Hu=l(),Wi=n("span"),Ku=a("FlaxCLIPVisionModel"),Dl=l(),Gt=n("div"),u(Rs.$$.fragment),Gu=l(),ae=n("div"),u(Hs.$$.fragment),Ju=l(),Jt=n("p"),Xu=a("The "),Bi=n("code"),Zu=a("FlaxCLIPVisionPreTrainedModel"),Qu=a(" forward method, overrides the "),Ui=n("code"),Yu=a("__call__"),eg=a(" special method."),tg=l(),u(So.$$.fragment),og=l(),Ri=n("p"),ng=a("Example:"),sg=l(),u(Ks.$$.fragment),this.h()},l(t){const h=l1('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),L=d(t),I=s(t,"H1",{class:!0});var Gs=r(I);y=s(Gs,"A",{id:!0,class:!0,href:!0});var Hi=r(y);b=s(Hi,"SPAN",{});var Ki=r(b);g(C.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),f=d(Gs),w=s(Gs,"SPAN",{});var Gi=r(w);Ho=i(Gi,"CLIP"),Gi.forEach(o),Gs.forEach(o),at=d(t),z=s(t,"H2",{class:!0});var Js=r(z);ue=s(Js,"A",{id:!0,class:!0,href:!0});var Ji=r(ue);Ce=s(Ji,"SPAN",{});var Xi=r(Ce);g(ye.$$.fragment,Xi),Xi.forEach(o),Ji.forEach(o),Ko=d(Js),be=s(Js,"SPAN",{});var Zi=r(be);Go=i(Zi,"Overview"),Zi.forEach(o),Js.forEach(o),Xt=d(t),pe=s(t,"P",{});var Xs=r(pe);ze=i(Xs,"The CLIP model was proposed in "),Le=s(Xs,"A",{href:!0,rel:!0});var Qi=r(Le);Zt=i(Qi,"Learning Transferable Visual Models From Natural Language Supervision"),Qi.forEach(o),H=i(Xs,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Xs.forEach(o),he=d(t),je=s(t,"P",{});var Yi=r(je);it=i(Yi,"The abstract from the paper is the following:"),Yi.forEach(o),Qt=d(t),Fe=s(t,"P",{});var el=r(Fe);we=s(el,"EM",{});var tl=r(we);Jo=i(tl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),tl.forEach(o),el.forEach(o),Yt=d(t),O=s(t,"H2",{class:!0});var Zs=r(O);ge=s(Zs,"A",{id:!0,class:!0,href:!0});var ig=r(ge);$e=s(ig,"SPAN",{});var lg=r($e);g(ke.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Xo=d(Zs),xe=s(Zs,"SPAN",{});var dg=r(xe);Zo=i(dg,"Usage"),dg.forEach(o),Zs.forEach(o),eo=d(t),me=s(t,"P",{});var cg=r(me);Qo=i(cg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cg.forEach(o),qe=d(t),_e=s(t,"P",{});var Al=r(_e);k=i(Al,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s(Al,"A",{href:!0});var pg=r(j);to=i(pg,"CLIPFeatureExtractor"),pg.forEach(o),Qs=i(Al," can be used to resize (or rescale) and normalize images for the model."),Al.forEach(o),Yo=d(t),E=s(t,"P",{});var ie=r(E);Ys=i(ie,"The "),lt=s(ie,"A",{href:!0});var hg=r(lt);er=i(hg,"CLIPTokenizer"),hg.forEach(o),De=i(ie," is used to encode the text. The "),ve=s(ie,"A",{href:!0});var mg=r(ve);tr=i(mg,"CLIPProcessor"),mg.forEach(o),or=i(ie,` wraps
`),Pe=s(ie,"A",{href:!0});var fg=r(Pe);nr=i(fg,"CLIPFeatureExtractor"),fg.forEach(o),sr=i(ie," and "),Oe=s(ie,"A",{href:!0});var ug=r(Oe);rr=i(ug,"CLIPTokenizer"),ug.forEach(o),xd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ar=s(ie,"A",{href:!0});var gg=r(ar);Ed=i(gg,"CLIPProcessor"),gg.forEach(o),Md=i(ie," and "),ir=s(ie,"A",{href:!0});var _g=r(ir);zd=i(_g,"CLIPModel"),_g.forEach(o),jd=i(ie,"."),ie.forEach(o),nl=d(t),g(en.$$.fragment,t),sl=d(t),Ae=s(t,"P",{});var Br=r(Ae);Fd=i(Br,"This model was contributed by "),tn=s(Br,"A",{href:!0,rel:!0});var vg=r(tn);qd=i(vg,"valhalla"),vg.forEach(o),Dd=i(Br,". The original code can be found "),on=s(Br,"A",{href:!0,rel:!0});var Pg=r(on);Od=i(Pg,"here"),Pg.forEach(o),Ad=i(Br,"."),Br.forEach(o),rl=d(t),dt=s(t,"H2",{class:!0});var Nl=r(dt);oo=s(Nl,"A",{id:!0,class:!0,href:!0});var Tg=r(oo);pa=s(Tg,"SPAN",{});var Ig=r(pa);g(nn.$$.fragment,Ig),Ig.forEach(o),Tg.forEach(o),Nd=d(Nl),ha=s(Nl,"SPAN",{});var Cg=r(ha);Vd=i(Cg,"CLIPConfig"),Cg.forEach(o),Nl.forEach(o),al=d(t),fe=s(t,"DIV",{class:!0});var Wo=r(fe);g(sn.$$.fragment,Wo),Sd=d(Wo),no=s(Wo,"P",{});var ol=r(no);lr=s(ol,"A",{href:!0});var yg=r(lr);Wd=i(yg,"CLIPConfig"),yg.forEach(o),Bd=i(ol," is the configuration class to store the configuration of a "),dr=s(ol,"A",{href:!0});var bg=r(dr);Ud=i(bg,"CLIPModel"),bg.forEach(o),Rd=i(ol,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ol.forEach(o),Hd=d(Wo),ct=s(Wo,"P",{});var Ur=r(ct);Kd=i(Ur,"Configuration objects inherit from "),cr=s(Ur,"A",{href:!0});var Lg=r(cr);Gd=i(Lg,"PretrainedConfig"),Lg.forEach(o),Jd=i(Ur,` and can be used to control the model outputs. Read the
documentation from `),pr=s(Ur,"A",{href:!0});var wg=r(pr);Xd=i(wg,"PretrainedConfig"),wg.forEach(o),Zd=i(Ur," for more information."),Ur.forEach(o),Qd=d(Wo),so=s(Wo,"DIV",{class:!0});var Vl=r(so);g(rn.$$.fragment,Vl),Yd=d(Vl),an=s(Vl,"P",{});var Sl=r(an);ec=i(Sl,"Instantiate a "),hr=s(Sl,"A",{href:!0});var $g=r(hr);tc=i($g,"CLIPConfig"),$g.forEach(o),oc=i(Sl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Sl.forEach(o),Vl.forEach(o),Wo.forEach(o),il=d(t),pt=s(t,"H2",{class:!0});var Wl=r(pt);ro=s(Wl,"A",{id:!0,class:!0,href:!0});var kg=r(ro);ma=s(kg,"SPAN",{});var xg=r(ma);g(ln.$$.fragment,xg),xg.forEach(o),kg.forEach(o),nc=d(Wl),fa=s(Wl,"SPAN",{});var Eg=r(fa);sc=i(Eg,"CLIPTextConfig"),Eg.forEach(o),Wl.forEach(o),ll=d(t),V=s(t,"DIV",{class:!0});var Se=r(V);g(dn.$$.fragment,Se),rc=d(Se),ht=s(Se,"P",{});var Rr=r(ht);ac=i(Rr,"This is the configuration class to store the configuration of a "),mr=s(Rr,"A",{href:!0});var Mg=r(mr);ic=i(Mg,"CLIPModel"),Mg.forEach(o),lc=i(Rr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=s(Rr,"A",{href:!0,rel:!0});var zg=r(cn);dc=i(zg,"openai/clip-vit-base-patch32"),zg.forEach(o),cc=i(Rr," architecture."),Rr.forEach(o),pc=d(Se),mt=s(Se,"P",{});var Hr=r(mt);hc=i(Hr,"Configuration objects inherit from "),fr=s(Hr,"A",{href:!0});var jg=r(fr);mc=i(jg,"PretrainedConfig"),jg.forEach(o),fc=i(Hr,` and can be used to control the model outputs. Read the
documentation from `),ur=s(Hr,"A",{href:!0});var Fg=r(ur);uc=i(Fg,"PretrainedConfig"),Fg.forEach(o),gc=i(Hr," for more information."),Hr.forEach(o),_c=d(Se),ua=s(Se,"P",{});var qg=r(ua);vc=i(qg,"Example:"),qg.forEach(o),Pc=d(Se),g(pn.$$.fragment,Se),Se.forEach(o),dl=d(t),ft=s(t,"H2",{class:!0});var Bl=r(ft);ao=s(Bl,"A",{id:!0,class:!0,href:!0});var Dg=r(ao);ga=s(Dg,"SPAN",{});var Og=r(ga);g(hn.$$.fragment,Og),Og.forEach(o),Dg.forEach(o),Tc=d(Bl),_a=s(Bl,"SPAN",{});var Ag=r(_a);Ic=i(Ag,"CLIPVisionConfig"),Ag.forEach(o),Bl.forEach(o),cl=d(t),S=s(t,"DIV",{class:!0});var We=r(S);g(mn.$$.fragment,We),Cc=d(We),ut=s(We,"P",{});var Kr=r(ut);yc=i(Kr,"This is the configuration class to store the configuration of a "),gr=s(Kr,"A",{href:!0});var Ng=r(gr);bc=i(Ng,"CLIPModel"),Ng.forEach(o),Lc=i(Kr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=s(Kr,"A",{href:!0,rel:!0});var Vg=r(fn);wc=i(Vg,"openai/clip-vit-base-patch32"),Vg.forEach(o),$c=i(Kr," architecture."),Kr.forEach(o),kc=d(We),gt=s(We,"P",{});var Gr=r(gt);xc=i(Gr,"Configuration objects inherit from "),_r=s(Gr,"A",{href:!0});var Sg=r(_r);Ec=i(Sg,"PretrainedConfig"),Sg.forEach(o),Mc=i(Gr,` and can be used to control the model outputs. Read the
documentation from `),vr=s(Gr,"A",{href:!0});var Wg=r(vr);zc=i(Wg,"PretrainedConfig"),Wg.forEach(o),jc=i(Gr," for more information."),Gr.forEach(o),Fc=d(We),va=s(We,"P",{});var Bg=r(va);qc=i(Bg,"Example:"),Bg.forEach(o),Dc=d(We),g(un.$$.fragment,We),We.forEach(o),pl=d(t),_t=s(t,"H2",{class:!0});var Ul=r(_t);io=s(Ul,"A",{id:!0,class:!0,href:!0});var Ug=r(io);Pa=s(Ug,"SPAN",{});var Rg=r(Pa);g(gn.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Oc=d(Ul),Ta=s(Ul,"SPAN",{});var Hg=r(Ta);Ac=i(Hg,"CLIPTokenizer"),Hg.forEach(o),Ul.forEach(o),hl=d(t),F=s(t,"DIV",{class:!0});var le=r(F);g(_n.$$.fragment,le),Nc=d(le),Ia=s(le,"P",{});var Kg=r(Ia);Vc=i(Kg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Kg.forEach(o),Sc=d(le),vn=s(le,"P",{});var Rl=r(vn);Wc=i(Rl,"This tokenizer inherits from "),Pr=s(Rl,"A",{href:!0});var Gg=r(Pr);Bc=i(Gg,"PreTrainedTokenizer"),Gg.forEach(o),Uc=i(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(o),Rc=d(le),Te=s(le,"DIV",{class:!0});var Bo=r(Te);g(Pn.$$.fragment,Bo),Hc=d(Bo),Ca=s(Bo,"P",{});var Jg=r(Ca);Kc=i(Jg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jg.forEach(o),Gc=d(Bo),ya=s(Bo,"UL",{});var Xg=r(ya);Tr=s(Xg,"LI",{});var rg=r(Tr);Jc=i(rg,"single sequence: "),ba=s(rg,"CODE",{});var Zg=r(ba);Xc=i(Zg,"<|startoftext|> X <|endoftext|>"),Zg.forEach(o),rg.forEach(o),Xg.forEach(o),Zc=d(Bo),La=s(Bo,"P",{});var Qg=r(La);Qc=i(Qg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Qg.forEach(o),Bo.forEach(o),Yc=d(le),lo=s(le,"DIV",{class:!0});var Hl=r(lo);g(Tn.$$.fragment,Hl),ep=d(Hl),In=s(Hl,"P",{});var Kl=r(In);tp=i(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wa=s(Kl,"CODE",{});var Yg=r(wa);op=i(Yg,"prepare_for_model"),Yg.forEach(o),np=i(Kl," method."),Kl.forEach(o),Hl.forEach(o),sp=d(le),co=s(le,"DIV",{class:!0});var Gl=r(co);g(Cn.$$.fragment,Gl),rp=d(Gl),$a=s(Gl,"P",{});var e_=r($a);ap=i(e_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),e_.forEach(o),Gl.forEach(o),ip=d(le),Ir=s(le,"DIV",{class:!0});var t_=r(Ir);g(yn.$$.fragment,t_),t_.forEach(o),le.forEach(o),ml=d(t),vt=s(t,"H2",{class:!0});var Jl=r(vt);po=s(Jl,"A",{id:!0,class:!0,href:!0});var o_=r(po);ka=s(o_,"SPAN",{});var n_=r(ka);g(bn.$$.fragment,n_),n_.forEach(o),o_.forEach(o),lp=d(Jl),xa=s(Jl,"SPAN",{});var s_=r(xa);dp=i(s_,"CLIPTokenizerFast"),s_.forEach(o),Jl.forEach(o),fl=d(t),W=s(t,"DIV",{class:!0});var Be=r(W);g(Ln.$$.fragment,Be),cp=d(Be),wn=s(Be,"P",{});var Xl=r(wn);pp=i(Xl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ea=s(Xl,"EM",{});var r_=r(Ea);hp=i(r_,"tokenizers"),r_.forEach(o),mp=i(Xl,` library). Based on byte-level
Byte-Pair-Encoding.`),Xl.forEach(o),fp=d(Be),$n=s(Be,"P",{});var Zl=r($n);up=i(Zl,"This tokenizer inherits from "),Cr=s(Zl,"A",{href:!0});var a_=r(Cr);gp=i(a_,"PreTrainedTokenizerFast"),a_.forEach(o),_p=i(Zl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zl.forEach(o),vp=d(Be),Ie=s(Be,"DIV",{class:!0});var Uo=r(Ie);g(kn.$$.fragment,Uo),Pp=d(Uo),Ma=s(Uo,"P",{});var i_=r(Ma);Tp=i(i_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),i_.forEach(o),Ip=d(Uo),za=s(Uo,"UL",{});var l_=r(za);yr=s(l_,"LI",{});var ag=r(yr);Cp=i(ag,"single sequence: "),ja=s(ag,"CODE",{});var d_=r(ja);yp=i(d_,"<|startoftext|> X <|endoftext|>"),d_.forEach(o),ag.forEach(o),l_.forEach(o),bp=d(Uo),Fa=s(Uo,"P",{});var c_=r(Fa);Lp=i(c_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),c_.forEach(o),Uo.forEach(o),wp=d(Be),ho=s(Be,"DIV",{class:!0});var Ql=r(ho);g(xn.$$.fragment,Ql),$p=d(Ql),qa=s(Ql,"P",{});var p_=r(qa);kp=i(p_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),p_.forEach(o),Ql.forEach(o),Be.forEach(o),ul=d(t),Pt=s(t,"H2",{class:!0});var Yl=r(Pt);mo=s(Yl,"A",{id:!0,class:!0,href:!0});var h_=r(mo);Da=s(h_,"SPAN",{});var m_=r(Da);g(En.$$.fragment,m_),m_.forEach(o),h_.forEach(o),xp=d(Yl),Oa=s(Yl,"SPAN",{});var f_=r(Oa);Ep=i(f_,"CLIPFeatureExtractor"),f_.forEach(o),Yl.forEach(o),gl=d(t),B=s(t,"DIV",{class:!0});var Ue=r(B);g(Mn.$$.fragment,Ue),Mp=d(Ue),Aa=s(Ue,"P",{});var u_=r(Aa);zp=i(u_,"Constructs a CLIP feature extractor."),u_.forEach(o),jp=d(Ue),zn=s(Ue,"P",{});var ed=r(zn);Fp=i(ed,"This feature extractor inherits from "),br=s(ed,"A",{href:!0});var g_=r(br);qp=i(g_,"FeatureExtractionMixin"),g_.forEach(o),Dp=i(ed,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ed.forEach(o),Op=d(Ue),fo=s(Ue,"DIV",{class:!0});var td=r(fo);g(jn.$$.fragment,td),Ap=d(td),Fn=s(td,"P",{});var od=r(Fn);Np=i(od,"Crops "),Na=s(od,"CODE",{});var __=r(Na);Vp=i(__,"image"),__.forEach(o),Sp=i(od,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),od.forEach(o),td.forEach(o),Wp=d(Ue),uo=s(Ue,"DIV",{class:!0});var nd=r(uo);g(qn.$$.fragment,nd),Bp=d(nd),Tt=s(nd,"P",{});var Jr=r(Tt);Up=i(Jr,"Resizes "),Va=s(Jr,"CODE",{});var v_=r(Va);Rp=i(v_,"image"),v_.forEach(o),Hp=i(Jr,". Note that this will trigger a conversion of "),Sa=s(Jr,"CODE",{});var P_=r(Sa);Kp=i(P_,"image"),P_.forEach(o),Gp=i(Jr," to a PIL Image."),Jr.forEach(o),nd.forEach(o),Ue.forEach(o),_l=d(t),It=s(t,"H2",{class:!0});var sd=r(It);go=s(sd,"A",{id:!0,class:!0,href:!0});var T_=r(go);Wa=s(T_,"SPAN",{});var I_=r(Wa);g(Dn.$$.fragment,I_),I_.forEach(o),T_.forEach(o),Jp=d(sd),Ba=s(sd,"SPAN",{});var C_=r(Ba);Xp=i(C_,"CLIPProcessor"),C_.forEach(o),sd.forEach(o),vl=d(t),U=s(t,"DIV",{class:!0});var Re=r(U);g(On.$$.fragment,Re),Zp=d(Re),Ua=s(Re,"P",{});var y_=r(Ua);Qp=i(y_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),y_.forEach(o),Yp=d(Re),K=s(Re,"P",{});var Me=r(K);Lr=s(Me,"A",{href:!0});var b_=r(Lr);eh=i(b_,"CLIPProcessor"),b_.forEach(o),th=i(Me," offers all the functionalities of "),wr=s(Me,"A",{href:!0});var L_=r(wr);oh=i(L_,"CLIPFeatureExtractor"),L_.forEach(o),nh=i(Me," and "),$r=s(Me,"A",{href:!0});var w_=r($r);sh=i(w_,"CLIPTokenizerFast"),w_.forEach(o),rh=i(Me,`. See the
`),Ra=s(Me,"CODE",{});var $_=r(Ra);ah=i($_,"__call__()"),$_.forEach(o),ih=i(Me," and "),kr=s(Me,"A",{href:!0});var k_=r(kr);lh=i(k_,"decode()"),k_.forEach(o),dh=i(Me," for more information."),Me.forEach(o),ch=d(Re),_o=s(Re,"DIV",{class:!0});var rd=r(_o);g(An.$$.fragment,rd),ph=d(rd),Nn=s(rd,"P",{});var ad=r(Nn);hh=i(ad,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xr=s(ad,"A",{href:!0});var x_=r(xr);mh=i(x_,"batch_decode()"),x_.forEach(o),fh=i(ad,`. Please
refer to the docstring of this method for more information.`),ad.forEach(o),rd.forEach(o),uh=d(Re),vo=s(Re,"DIV",{class:!0});var id=r(vo);g(Vn.$$.fragment,id),gh=d(id),Sn=s(id,"P",{});var ld=r(Sn);_h=i(ld,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Er=s(ld,"A",{href:!0});var E_=r(Er);vh=i(E_,"decode()"),E_.forEach(o),Ph=i(ld,`. Please refer to
the docstring of this method for more information.`),ld.forEach(o),id.forEach(o),Re.forEach(o),Pl=d(t),Ct=s(t,"H2",{class:!0});var dd=r(Ct);Po=s(dd,"A",{id:!0,class:!0,href:!0});var M_=r(Po);Ha=s(M_,"SPAN",{});var z_=r(Ha);g(Wn.$$.fragment,z_),z_.forEach(o),M_.forEach(o),Th=d(dd),Ka=s(dd,"SPAN",{});var j_=r(Ka);Ih=i(j_,"CLIPModel"),j_.forEach(o),dd.forEach(o),Tl=d(t),R=s(t,"DIV",{class:!0});var He=r(R);g(Bn.$$.fragment,He),Ch=d(He),Un=s(He,"P",{});var cd=r(Un);yh=i(cd,"This model is a PyTorch "),Rn=s(cd,"A",{href:!0,rel:!0});var F_=r(Rn);bh=i(F_,"torch.nn.Module"),F_.forEach(o),Lh=i(cd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd.forEach(o),wh=d(He),G=s(He,"DIV",{class:!0});var Ke=r(G);g(Hn.$$.fragment,Ke),$h=d(Ke),yt=s(Ke,"P",{});var Xr=r(yt);kh=i(Xr,"The "),Mr=s(Xr,"A",{href:!0});var q_=r(Mr);xh=i(q_,"CLIPModel"),q_.forEach(o),Eh=i(Xr," forward method, overrides the "),Ga=s(Xr,"CODE",{});var D_=r(Ga);Mh=i(D_,"__call__"),D_.forEach(o),zh=i(Xr," special method."),Xr.forEach(o),jh=d(Ke),g(To.$$.fragment,Ke),Fh=d(Ke),Ja=s(Ke,"P",{});var O_=r(Ja);qh=i(O_,"Examples:"),O_.forEach(o),Dh=d(Ke),g(Kn.$$.fragment,Ke),Ke.forEach(o),Oh=d(He),J=s(He,"DIV",{class:!0});var Ge=r(J);g(Gn.$$.fragment,Ge),Ah=d(Ge),bt=s(Ge,"P",{});var Zr=r(bt);Nh=i(Zr,"The "),zr=s(Zr,"A",{href:!0});var A_=r(zr);Vh=i(A_,"CLIPModel"),A_.forEach(o),Sh=i(Zr," forward method, overrides the "),Xa=s(Zr,"CODE",{});var N_=r(Xa);Wh=i(N_,"__call__"),N_.forEach(o),Bh=i(Zr," special method."),Zr.forEach(o),Uh=d(Ge),g(Io.$$.fragment,Ge),Rh=d(Ge),Za=s(Ge,"P",{});var V_=r(Za);Hh=i(V_,"Examples:"),V_.forEach(o),Kh=d(Ge),g(Jn.$$.fragment,Ge),Ge.forEach(o),Gh=d(He),X=s(He,"DIV",{class:!0});var Je=r(X);g(Xn.$$.fragment,Je),Jh=d(Je),Lt=s(Je,"P",{});var Qr=r(Lt);Xh=i(Qr,"The "),jr=s(Qr,"A",{href:!0});var S_=r(jr);Zh=i(S_,"CLIPModel"),S_.forEach(o),Qh=i(Qr," forward method, overrides the "),Qa=s(Qr,"CODE",{});var W_=r(Qa);Yh=i(W_,"__call__"),W_.forEach(o),em=i(Qr," special method."),Qr.forEach(o),tm=d(Je),g(Co.$$.fragment,Je),om=d(Je),Ya=s(Je,"P",{});var B_=r(Ya);nm=i(B_,"Examples:"),B_.forEach(o),sm=d(Je),g(Zn.$$.fragment,Je),Je.forEach(o),He.forEach(o),Il=d(t),wt=s(t,"H2",{class:!0});var pd=r(wt);yo=s(pd,"A",{id:!0,class:!0,href:!0});var U_=r(yo);ei=s(U_,"SPAN",{});var R_=r(ei);g(Qn.$$.fragment,R_),R_.forEach(o),U_.forEach(o),rm=d(pd),ti=s(pd,"SPAN",{});var H_=r(ti);am=i(H_,"CLIPTextModel"),H_.forEach(o),pd.forEach(o),Cl=d(t),$t=s(t,"DIV",{class:!0});var hd=r($t);g(Yn.$$.fragment,hd),im=d(hd),Z=s(hd,"DIV",{class:!0});var Xe=r(Z);g(es.$$.fragment,Xe),lm=d(Xe),kt=s(Xe,"P",{});var Yr=r(kt);dm=i(Yr,"The "),Fr=s(Yr,"A",{href:!0});var K_=r(Fr);cm=i(K_,"CLIPTextModel"),K_.forEach(o),pm=i(Yr," forward method, overrides the "),oi=s(Yr,"CODE",{});var G_=r(oi);hm=i(G_,"__call__"),G_.forEach(o),mm=i(Yr," special method."),Yr.forEach(o),fm=d(Xe),g(bo.$$.fragment,Xe),um=d(Xe),ni=s(Xe,"P",{});var J_=r(ni);gm=i(J_,"Examples:"),J_.forEach(o),_m=d(Xe),g(ts.$$.fragment,Xe),Xe.forEach(o),hd.forEach(o),yl=d(t),xt=s(t,"H2",{class:!0});var md=r(xt);Lo=s(md,"A",{id:!0,class:!0,href:!0});var X_=r(Lo);si=s(X_,"SPAN",{});var Z_=r(si);g(os.$$.fragment,Z_),Z_.forEach(o),X_.forEach(o),vm=d(md),ri=s(md,"SPAN",{});var Q_=r(ri);Pm=i(Q_,"CLIPVisionModel"),Q_.forEach(o),md.forEach(o),bl=d(t),Et=s(t,"DIV",{class:!0});var fd=r(Et);g(ns.$$.fragment,fd),Tm=d(fd),Q=s(fd,"DIV",{class:!0});var Ze=r(Q);g(ss.$$.fragment,Ze),Im=d(Ze),Mt=s(Ze,"P",{});var ea=r(Mt);Cm=i(ea,"The "),qr=s(ea,"A",{href:!0});var Y_=r(qr);ym=i(Y_,"CLIPVisionModel"),Y_.forEach(o),bm=i(ea," forward method, overrides the "),ai=s(ea,"CODE",{});var ev=r(ai);Lm=i(ev,"__call__"),ev.forEach(o),wm=i(ea," special method."),ea.forEach(o),$m=d(Ze),g(wo.$$.fragment,Ze),km=d(Ze),ii=s(Ze,"P",{});var tv=r(ii);xm=i(tv,"Examples:"),tv.forEach(o),Em=d(Ze),g(rs.$$.fragment,Ze),Ze.forEach(o),fd.forEach(o),Ll=d(t),zt=s(t,"H2",{class:!0});var ud=r(zt);$o=s(ud,"A",{id:!0,class:!0,href:!0});var ov=r($o);li=s(ov,"SPAN",{});var nv=r(li);g(as.$$.fragment,nv),nv.forEach(o),ov.forEach(o),Mm=d(ud),di=s(ud,"SPAN",{});var sv=r(di);zm=i(sv,"TFCLIPModel"),sv.forEach(o),ud.forEach(o),wl=d(t),q=s(t,"DIV",{class:!0});var de=r(q);g(is.$$.fragment,de),jm=d(de),ls=s(de,"P",{});var gd=r(ls);Fm=i(gd,"This model inherits from "),Dr=s(gd,"A",{href:!0});var rv=r(Dr);qm=i(rv,"TFPreTrainedModel"),rv.forEach(o),Dm=i(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),Om=d(de),ds=s(de,"P",{});var _d=r(ds);Am=i(_d,"This model is also a "),cs=s(_d,"A",{href:!0,rel:!0});var av=r(cs);Nm=i(av,"tf.keras.Model"),av.forEach(o),Vm=i(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Sm=d(de),g(ko.$$.fragment,de),Wm=d(de),Y=s(de,"DIV",{class:!0});var Qe=r(Y);g(ps.$$.fragment,Qe),Bm=d(Qe),jt=s(Qe,"P",{});var ta=r(jt);Um=i(ta,"The "),Or=s(ta,"A",{href:!0});var iv=r(Or);Rm=i(iv,"TFCLIPModel"),iv.forEach(o),Hm=i(ta," forward method, overrides the "),ci=s(ta,"CODE",{});var lv=r(ci);Km=i(lv,"__call__"),lv.forEach(o),Gm=i(ta," special method."),ta.forEach(o),Jm=d(Qe),g(xo.$$.fragment,Qe),Xm=d(Qe),pi=s(Qe,"P",{});var dv=r(pi);Zm=i(dv,"Examples:"),dv.forEach(o),Qm=d(Qe),g(hs.$$.fragment,Qe),Qe.forEach(o),Ym=d(de),ee=s(de,"DIV",{class:!0});var Ye=r(ee);g(ms.$$.fragment,Ye),ef=d(Ye),Ft=s(Ye,"P",{});var oa=r(Ft);tf=i(oa,"The "),Ar=s(oa,"A",{href:!0});var cv=r(Ar);of=i(cv,"TFCLIPModel"),cv.forEach(o),nf=i(oa," forward method, overrides the "),hi=s(oa,"CODE",{});var pv=r(hi);sf=i(pv,"__call__"),pv.forEach(o),rf=i(oa," special method."),oa.forEach(o),af=d(Ye),g(Eo.$$.fragment,Ye),lf=d(Ye),mi=s(Ye,"P",{});var hv=r(mi);df=i(hv,"Examples:"),hv.forEach(o),cf=d(Ye),g(fs.$$.fragment,Ye),Ye.forEach(o),pf=d(de),te=s(de,"DIV",{class:!0});var et=r(te);g(us.$$.fragment,et),hf=d(et),qt=s(et,"P",{});var na=r(qt);mf=i(na,"The "),Nr=s(na,"A",{href:!0});var mv=r(Nr);ff=i(mv,"TFCLIPModel"),mv.forEach(o),uf=i(na," forward method, overrides the "),fi=s(na,"CODE",{});var fv=r(fi);gf=i(fv,"__call__"),fv.forEach(o),_f=i(na," special method."),na.forEach(o),vf=d(et),g(Mo.$$.fragment,et),Pf=d(et),ui=s(et,"P",{});var uv=r(ui);Tf=i(uv,"Examples:"),uv.forEach(o),If=d(et),g(gs.$$.fragment,et),et.forEach(o),de.forEach(o),$l=d(t),Dt=s(t,"H2",{class:!0});var vd=r(Dt);zo=s(vd,"A",{id:!0,class:!0,href:!0});var gv=r(zo);gi=s(gv,"SPAN",{});var _v=r(gi);g(_s.$$.fragment,_v),_v.forEach(o),gv.forEach(o),Cf=d(vd),_i=s(vd,"SPAN",{});var vv=r(_i);yf=i(vv,"TFCLIPTextModel"),vv.forEach(o),vd.forEach(o),kl=d(t),Ot=s(t,"DIV",{class:!0});var Pd=r(Ot);g(vs.$$.fragment,Pd),bf=d(Pd),oe=s(Pd,"DIV",{class:!0});var tt=r(oe);g(Ps.$$.fragment,tt),Lf=d(tt),At=s(tt,"P",{});var sa=r(At);wf=i(sa,"The "),Vr=s(sa,"A",{href:!0});var Pv=r(Vr);$f=i(Pv,"TFCLIPTextModel"),Pv.forEach(o),kf=i(sa," forward method, overrides the "),vi=s(sa,"CODE",{});var Tv=r(vi);xf=i(Tv,"__call__"),Tv.forEach(o),Ef=i(sa," special method."),sa.forEach(o),Mf=d(tt),g(jo.$$.fragment,tt),zf=d(tt),Pi=s(tt,"P",{});var Iv=r(Pi);jf=i(Iv,"Examples:"),Iv.forEach(o),Ff=d(tt),g(Ts.$$.fragment,tt),tt.forEach(o),Pd.forEach(o),xl=d(t),Nt=s(t,"H2",{class:!0});var Td=r(Nt);Fo=s(Td,"A",{id:!0,class:!0,href:!0});var Cv=r(Fo);Ti=s(Cv,"SPAN",{});var yv=r(Ti);g(Is.$$.fragment,yv),yv.forEach(o),Cv.forEach(o),qf=d(Td),Ii=s(Td,"SPAN",{});var bv=r(Ii);Df=i(bv,"TFCLIPVisionModel"),bv.forEach(o),Td.forEach(o),El=d(t),Vt=s(t,"DIV",{class:!0});var Id=r(Vt);g(Cs.$$.fragment,Id),Of=d(Id),ne=s(Id,"DIV",{class:!0});var ot=r(ne);g(ys.$$.fragment,ot),Af=d(ot),St=s(ot,"P",{});var ra=r(St);Nf=i(ra,"The "),Sr=s(ra,"A",{href:!0});var Lv=r(Sr);Vf=i(Lv,"TFCLIPVisionModel"),Lv.forEach(o),Sf=i(ra," forward method, overrides the "),Ci=s(ra,"CODE",{});var wv=r(Ci);Wf=i(wv,"__call__"),wv.forEach(o),Bf=i(ra," special method."),ra.forEach(o),Uf=d(ot),g(qo.$$.fragment,ot),Rf=d(ot),yi=s(ot,"P",{});var $v=r(yi);Hf=i($v,"Examples:"),$v.forEach(o),Kf=d(ot),g(bs.$$.fragment,ot),ot.forEach(o),Id.forEach(o),Ml=d(t),Wt=s(t,"H2",{class:!0});var Cd=r(Wt);Do=s(Cd,"A",{id:!0,class:!0,href:!0});var kv=r(Do);bi=s(kv,"SPAN",{});var xv=r(bi);g(Ls.$$.fragment,xv),xv.forEach(o),kv.forEach(o),Gf=d(Cd),Li=s(Cd,"SPAN",{});var Ev=r(Li);Jf=i(Ev,"FlaxCLIPModel"),Ev.forEach(o),Cd.forEach(o),zl=d(t),M=s(t,"DIV",{class:!0});var N=r(M);g(ws.$$.fragment,N),Xf=d(N),$s=s(N,"P",{});var yd=r($s);Zf=i(yd,"This model inherits from "),Wr=s(yd,"A",{href:!0});var Mv=r(Wr);Qf=i(Mv,"FlaxPreTrainedModel"),Mv.forEach(o),Yf=i(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yd.forEach(o),eu=d(N),ks=s(N,"P",{});var bd=r(ks);tu=i(bd,"This model is also a Flax Linen "),xs=s(bd,"A",{href:!0,rel:!0});var zv=r(xs);ou=i(zv,"flax.linen.Module"),zv.forEach(o),nu=i(bd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bd.forEach(o),su=d(N),wi=s(N,"P",{});var jv=r(wi);ru=i(jv,"Finally, this model supports inherent JAX features such as:"),jv.forEach(o),au=d(N),Ee=s(N,"UL",{});var Ro=r(Ee);$i=s(Ro,"LI",{});var Fv=r($i);Es=s(Fv,"A",{href:!0,rel:!0});var qv=r(Es);iu=i(qv,"Just-In-Time (JIT) compilation"),qv.forEach(o),Fv.forEach(o),lu=d(Ro),ki=s(Ro,"LI",{});var Dv=r(ki);Ms=s(Dv,"A",{href:!0,rel:!0});var Ov=r(Ms);du=i(Ov,"Automatic Differentiation"),Ov.forEach(o),Dv.forEach(o),cu=d(Ro),xi=s(Ro,"LI",{});var Av=r(xi);zs=s(Av,"A",{href:!0,rel:!0});var Nv=r(zs);pu=i(Nv,"Vectorization"),Nv.forEach(o),Av.forEach(o),hu=d(Ro),Ei=s(Ro,"LI",{});var Vv=r(Ei);js=s(Vv,"A",{href:!0,rel:!0});var Sv=r(js);mu=i(Sv,"Parallelization"),Sv.forEach(o),Vv.forEach(o),Ro.forEach(o),fu=d(N),se=s(N,"DIV",{class:!0});var nt=r(se);g(Fs.$$.fragment,nt),uu=d(nt),Bt=s(nt,"P",{});var aa=r(Bt);gu=i(aa,"The "),Mi=s(aa,"CODE",{});var Wv=r(Mi);_u=i(Wv,"FlaxCLIPPreTrainedModel"),Wv.forEach(o),vu=i(aa," forward method, overrides the "),zi=s(aa,"CODE",{});var Bv=r(zi);Pu=i(Bv,"__call__"),Bv.forEach(o),Tu=i(aa," special method."),aa.forEach(o),Iu=d(nt),g(Oo.$$.fragment,nt),Cu=d(nt),ji=s(nt,"P",{});var Uv=r(ji);yu=i(Uv,"Example:"),Uv.forEach(o),bu=d(nt),g(qs.$$.fragment,nt),nt.forEach(o),Lu=d(N),Ne=s(N,"DIV",{class:!0});var ia=r(Ne);g(Ds.$$.fragment,ia),wu=d(ia),Fi=s(ia,"P",{});var Rv=r(Fi);$u=i(Rv,"Examples:"),Rv.forEach(o),ku=d(ia),g(Os.$$.fragment,ia),ia.forEach(o),xu=d(N),Ve=s(N,"DIV",{class:!0});var la=r(Ve);g(As.$$.fragment,la),Eu=d(la),qi=s(la,"P",{});var Hv=r(qi);Mu=i(Hv,"Examples:"),Hv.forEach(o),zu=d(la),g(Ns.$$.fragment,la),la.forEach(o),N.forEach(o),jl=d(t),Ut=s(t,"H2",{class:!0});var Ld=r(Ut);Ao=s(Ld,"A",{id:!0,class:!0,href:!0});var Kv=r(Ao);Di=s(Kv,"SPAN",{});var Gv=r(Di);g(Vs.$$.fragment,Gv),Gv.forEach(o),Kv.forEach(o),ju=d(Ld),Oi=s(Ld,"SPAN",{});var Jv=r(Oi);Fu=i(Jv,"FlaxCLIPTextModel"),Jv.forEach(o),Ld.forEach(o),Fl=d(t),Rt=s(t,"DIV",{class:!0});var wd=r(Rt);g(Ss.$$.fragment,wd),qu=d(wd),re=s(wd,"DIV",{class:!0});var st=r(re);g(Ws.$$.fragment,st),Du=d(st),Ht=s(st,"P",{});var da=r(Ht);Ou=i(da,"The "),Ai=s(da,"CODE",{});var Xv=r(Ai);Au=i(Xv,"FlaxCLIPTextPreTrainedModel"),Xv.forEach(o),Nu=i(da," forward method, overrides the "),Ni=s(da,"CODE",{});var Zv=r(Ni);Vu=i(Zv,"__call__"),Zv.forEach(o),Su=i(da," special method."),da.forEach(o),Wu=d(st),g(No.$$.fragment,st),Bu=d(st),Vi=s(st,"P",{});var Qv=r(Vi);Uu=i(Qv,"Example:"),Qv.forEach(o),Ru=d(st),g(Bs.$$.fragment,st),st.forEach(o),wd.forEach(o),ql=d(t),Kt=s(t,"H2",{class:!0});var $d=r(Kt);Vo=s($d,"A",{id:!0,class:!0,href:!0});var Yv=r(Vo);Si=s(Yv,"SPAN",{});var e1=r(Si);g(Us.$$.fragment,e1),e1.forEach(o),Yv.forEach(o),Hu=d($d),Wi=s($d,"SPAN",{});var t1=r(Wi);Ku=i(t1,"FlaxCLIPVisionModel"),t1.forEach(o),$d.forEach(o),Dl=d(t),Gt=s(t,"DIV",{class:!0});var kd=r(Gt);g(Rs.$$.fragment,kd),Gu=d(kd),ae=s(kd,"DIV",{class:!0});var rt=r(ae);g(Hs.$$.fragment,rt),Ju=d(rt),Jt=s(rt,"P",{});var ca=r(Jt);Xu=i(ca,"The "),Bi=s(ca,"CODE",{});var o1=r(Bi);Zu=i(o1,"FlaxCLIPVisionPreTrainedModel"),o1.forEach(o),Qu=i(ca," forward method, overrides the "),Ui=s(ca,"CODE",{});var n1=r(Ui);Yu=i(n1,"__call__"),n1.forEach(o),eg=i(ca," special method."),ca.forEach(o),tg=d(rt),g(So.$$.fragment,rt),og=d(rt),Ri=s(rt,"P",{});var s1=r(Ri);ng=i(s1,"Example:"),s1.forEach(o),sg=d(rt),g(Ks.$$.fragment,rt),rt.forEach(o),kd.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(L1)),c(y,"id","clip"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#clip"),c(I,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(z,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(O,"class","relative group"),c(j,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Oe,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizer"),c(ar,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPProcessor"),c(ir,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel"),c(tn,"href","https://huggingface.co/valhalla"),c(tn,"rel","nofollow"),c(on,"href","https://github.com/openai/CLIP"),c(on,"rel","nofollow"),c(oo,"id","transformers.CLIPConfig"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(lr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPConfig"),c(dr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel"),c(cr,"href","/docs/transformers/pr_16715/en/main_classes/configuration#transformers.PretrainedConfig"),c(pr,"href","/docs/transformers/pr_16715/en/main_classes/configuration#transformers.PretrainedConfig"),c(hr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPConfig"),c(so,"class","docstring"),c(fe,"class","docstring"),c(ro,"id","transformers.CLIPTextConfig"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(mr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel"),c(cn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(cn,"rel","nofollow"),c(fr,"href","/docs/transformers/pr_16715/en/main_classes/configuration#transformers.PretrainedConfig"),c(ur,"href","/docs/transformers/pr_16715/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring"),c(ao,"id","transformers.CLIPVisionConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(gr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel"),c(fn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(fn,"rel","nofollow"),c(_r,"href","/docs/transformers/pr_16715/en/main_classes/configuration#transformers.PretrainedConfig"),c(vr,"href","/docs/transformers/pr_16715/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(io,"id","transformers.CLIPTokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(Pr,"href","/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Te,"class","docstring"),c(lo,"class","docstring"),c(co,"class","docstring"),c(Ir,"class","docstring"),c(F,"class","docstring"),c(po,"id","transformers.CLIPTokenizerFast"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(Cr,"href","/docs/transformers/pr_16715/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ie,"class","docstring"),c(ho,"class","docstring"),c(W,"class","docstring"),c(mo,"id","transformers.CLIPFeatureExtractor"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(br,"href","/docs/transformers/pr_16715/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(fo,"class","docstring"),c(uo,"class","docstring"),c(B,"class","docstring"),c(go,"id","transformers.CLIPProcessor"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.CLIPProcessor"),c(It,"class","relative group"),c(Lr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPProcessor"),c(wr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c($r,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTokenizerFast"),c(kr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(xr,"href","/docs/transformers/pr_16715/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),c(_o,"class","docstring"),c(Er,"href","/docs/transformers/pr_16715/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),c(vo,"class","docstring"),c(U,"class","docstring"),c(Po,"id","transformers.CLIPModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPModel"),c(Ct,"class","relative group"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(Mr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(zr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(jr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(yo,"id","transformers.CLIPTextModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.CLIPTextModel"),c(wt,"class","relative group"),c(Fr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c($t,"class","docstring"),c(Lo,"id","transformers.CLIPVisionModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(qr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Et,"class","docstring"),c($o,"id","transformers.TFCLIPModel"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFCLIPModel"),c(zt,"class","relative group"),c(Dr,"href","/docs/transformers/pr_16715/en/main_classes/model#transformers.TFPreTrainedModel"),c(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cs,"rel","nofollow"),c(Or,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Ar,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(Nr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(zo,"id","transformers.TFCLIPTextModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.TFCLIPTextModel"),c(Dt,"class","relative group"),c(Vr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(Ot,"class","docstring"),c(Fo,"id","transformers.TFCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPVisionModel"),c(Nt,"class","relative group"),c(Sr,"href","/docs/transformers/pr_16715/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(ne,"class","docstring"),c(Vt,"class","docstring"),c(Do,"id","transformers.FlaxCLIPModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxCLIPModel"),c(Wt,"class","relative group"),c(Wr,"href","/docs/transformers/pr_16715/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xs,"rel","nofollow"),c(Es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Es,"rel","nofollow"),c(Ms,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ms,"rel","nofollow"),c(zs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zs,"rel","nofollow"),c(js,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(js,"rel","nofollow"),c(se,"class","docstring"),c(Ne,"class","docstring"),c(Ve,"class","docstring"),c(M,"class","docstring"),c(Ao,"id","transformers.FlaxCLIPTextModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxCLIPTextModel"),c(Ut,"class","relative group"),c(re,"class","docstring"),c(Rt,"class","docstring"),c(Vo,"id","transformers.FlaxCLIPVisionModel"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxCLIPVisionModel"),c(Kt,"class","relative group"),c(ae,"class","docstring"),c(Gt,"class","docstring")},m(t,h){e(document.head,p),m(t,L,h),m(t,I,h),e(I,y),e(y,b),_(C,b,null),e(I,f),e(I,w),e(w,Ho),m(t,at,h),m(t,z,h),e(z,ue),e(ue,Ce),_(ye,Ce,null),e(z,Ko),e(z,be),e(be,Go),m(t,Xt,h),m(t,pe,h),e(pe,ze),e(pe,Le),e(Le,Zt),e(pe,H),m(t,he,h),m(t,je,h),e(je,it),m(t,Qt,h),m(t,Fe,h),e(Fe,we),e(we,Jo),m(t,Yt,h),m(t,O,h),e(O,ge),e(ge,$e),_(ke,$e,null),e(O,Xo),e(O,xe),e(xe,Zo),m(t,eo,h),m(t,me,h),e(me,Qo),m(t,qe,h),m(t,_e,h),e(_e,k),e(_e,j),e(j,to),e(_e,Qs),m(t,Yo,h),m(t,E,h),e(E,Ys),e(E,lt),e(lt,er),e(E,De),e(E,ve),e(ve,tr),e(E,or),e(E,Pe),e(Pe,nr),e(E,sr),e(E,Oe),e(Oe,rr),e(E,xd),e(E,ar),e(ar,Ed),e(E,Md),e(E,ir),e(ir,zd),e(E,jd),m(t,nl,h),_(en,t,h),m(t,sl,h),m(t,Ae,h),e(Ae,Fd),e(Ae,tn),e(tn,qd),e(Ae,Dd),e(Ae,on),e(on,Od),e(Ae,Ad),m(t,rl,h),m(t,dt,h),e(dt,oo),e(oo,pa),_(nn,pa,null),e(dt,Nd),e(dt,ha),e(ha,Vd),m(t,al,h),m(t,fe,h),_(sn,fe,null),e(fe,Sd),e(fe,no),e(no,lr),e(lr,Wd),e(no,Bd),e(no,dr),e(dr,Ud),e(no,Rd),e(fe,Hd),e(fe,ct),e(ct,Kd),e(ct,cr),e(cr,Gd),e(ct,Jd),e(ct,pr),e(pr,Xd),e(ct,Zd),e(fe,Qd),e(fe,so),_(rn,so,null),e(so,Yd),e(so,an),e(an,ec),e(an,hr),e(hr,tc),e(an,oc),m(t,il,h),m(t,pt,h),e(pt,ro),e(ro,ma),_(ln,ma,null),e(pt,nc),e(pt,fa),e(fa,sc),m(t,ll,h),m(t,V,h),_(dn,V,null),e(V,rc),e(V,ht),e(ht,ac),e(ht,mr),e(mr,ic),e(ht,lc),e(ht,cn),e(cn,dc),e(ht,cc),e(V,pc),e(V,mt),e(mt,hc),e(mt,fr),e(fr,mc),e(mt,fc),e(mt,ur),e(ur,uc),e(mt,gc),e(V,_c),e(V,ua),e(ua,vc),e(V,Pc),_(pn,V,null),m(t,dl,h),m(t,ft,h),e(ft,ao),e(ao,ga),_(hn,ga,null),e(ft,Tc),e(ft,_a),e(_a,Ic),m(t,cl,h),m(t,S,h),_(mn,S,null),e(S,Cc),e(S,ut),e(ut,yc),e(ut,gr),e(gr,bc),e(ut,Lc),e(ut,fn),e(fn,wc),e(ut,$c),e(S,kc),e(S,gt),e(gt,xc),e(gt,_r),e(_r,Ec),e(gt,Mc),e(gt,vr),e(vr,zc),e(gt,jc),e(S,Fc),e(S,va),e(va,qc),e(S,Dc),_(un,S,null),m(t,pl,h),m(t,_t,h),e(_t,io),e(io,Pa),_(gn,Pa,null),e(_t,Oc),e(_t,Ta),e(Ta,Ac),m(t,hl,h),m(t,F,h),_(_n,F,null),e(F,Nc),e(F,Ia),e(Ia,Vc),e(F,Sc),e(F,vn),e(vn,Wc),e(vn,Pr),e(Pr,Bc),e(vn,Uc),e(F,Rc),e(F,Te),_(Pn,Te,null),e(Te,Hc),e(Te,Ca),e(Ca,Kc),e(Te,Gc),e(Te,ya),e(ya,Tr),e(Tr,Jc),e(Tr,ba),e(ba,Xc),e(Te,Zc),e(Te,La),e(La,Qc),e(F,Yc),e(F,lo),_(Tn,lo,null),e(lo,ep),e(lo,In),e(In,tp),e(In,wa),e(wa,op),e(In,np),e(F,sp),e(F,co),_(Cn,co,null),e(co,rp),e(co,$a),e($a,ap),e(F,ip),e(F,Ir),_(yn,Ir,null),m(t,ml,h),m(t,vt,h),e(vt,po),e(po,ka),_(bn,ka,null),e(vt,lp),e(vt,xa),e(xa,dp),m(t,fl,h),m(t,W,h),_(Ln,W,null),e(W,cp),e(W,wn),e(wn,pp),e(wn,Ea),e(Ea,hp),e(wn,mp),e(W,fp),e(W,$n),e($n,up),e($n,Cr),e(Cr,gp),e($n,_p),e(W,vp),e(W,Ie),_(kn,Ie,null),e(Ie,Pp),e(Ie,Ma),e(Ma,Tp),e(Ie,Ip),e(Ie,za),e(za,yr),e(yr,Cp),e(yr,ja),e(ja,yp),e(Ie,bp),e(Ie,Fa),e(Fa,Lp),e(W,wp),e(W,ho),_(xn,ho,null),e(ho,$p),e(ho,qa),e(qa,kp),m(t,ul,h),m(t,Pt,h),e(Pt,mo),e(mo,Da),_(En,Da,null),e(Pt,xp),e(Pt,Oa),e(Oa,Ep),m(t,gl,h),m(t,B,h),_(Mn,B,null),e(B,Mp),e(B,Aa),e(Aa,zp),e(B,jp),e(B,zn),e(zn,Fp),e(zn,br),e(br,qp),e(zn,Dp),e(B,Op),e(B,fo),_(jn,fo,null),e(fo,Ap),e(fo,Fn),e(Fn,Np),e(Fn,Na),e(Na,Vp),e(Fn,Sp),e(B,Wp),e(B,uo),_(qn,uo,null),e(uo,Bp),e(uo,Tt),e(Tt,Up),e(Tt,Va),e(Va,Rp),e(Tt,Hp),e(Tt,Sa),e(Sa,Kp),e(Tt,Gp),m(t,_l,h),m(t,It,h),e(It,go),e(go,Wa),_(Dn,Wa,null),e(It,Jp),e(It,Ba),e(Ba,Xp),m(t,vl,h),m(t,U,h),_(On,U,null),e(U,Zp),e(U,Ua),e(Ua,Qp),e(U,Yp),e(U,K),e(K,Lr),e(Lr,eh),e(K,th),e(K,wr),e(wr,oh),e(K,nh),e(K,$r),e($r,sh),e(K,rh),e(K,Ra),e(Ra,ah),e(K,ih),e(K,kr),e(kr,lh),e(K,dh),e(U,ch),e(U,_o),_(An,_o,null),e(_o,ph),e(_o,Nn),e(Nn,hh),e(Nn,xr),e(xr,mh),e(Nn,fh),e(U,uh),e(U,vo),_(Vn,vo,null),e(vo,gh),e(vo,Sn),e(Sn,_h),e(Sn,Er),e(Er,vh),e(Sn,Ph),m(t,Pl,h),m(t,Ct,h),e(Ct,Po),e(Po,Ha),_(Wn,Ha,null),e(Ct,Th),e(Ct,Ka),e(Ka,Ih),m(t,Tl,h),m(t,R,h),_(Bn,R,null),e(R,Ch),e(R,Un),e(Un,yh),e(Un,Rn),e(Rn,bh),e(Un,Lh),e(R,wh),e(R,G),_(Hn,G,null),e(G,$h),e(G,yt),e(yt,kh),e(yt,Mr),e(Mr,xh),e(yt,Eh),e(yt,Ga),e(Ga,Mh),e(yt,zh),e(G,jh),_(To,G,null),e(G,Fh),e(G,Ja),e(Ja,qh),e(G,Dh),_(Kn,G,null),e(R,Oh),e(R,J),_(Gn,J,null),e(J,Ah),e(J,bt),e(bt,Nh),e(bt,zr),e(zr,Vh),e(bt,Sh),e(bt,Xa),e(Xa,Wh),e(bt,Bh),e(J,Uh),_(Io,J,null),e(J,Rh),e(J,Za),e(Za,Hh),e(J,Kh),_(Jn,J,null),e(R,Gh),e(R,X),_(Xn,X,null),e(X,Jh),e(X,Lt),e(Lt,Xh),e(Lt,jr),e(jr,Zh),e(Lt,Qh),e(Lt,Qa),e(Qa,Yh),e(Lt,em),e(X,tm),_(Co,X,null),e(X,om),e(X,Ya),e(Ya,nm),e(X,sm),_(Zn,X,null),m(t,Il,h),m(t,wt,h),e(wt,yo),e(yo,ei),_(Qn,ei,null),e(wt,rm),e(wt,ti),e(ti,am),m(t,Cl,h),m(t,$t,h),_(Yn,$t,null),e($t,im),e($t,Z),_(es,Z,null),e(Z,lm),e(Z,kt),e(kt,dm),e(kt,Fr),e(Fr,cm),e(kt,pm),e(kt,oi),e(oi,hm),e(kt,mm),e(Z,fm),_(bo,Z,null),e(Z,um),e(Z,ni),e(ni,gm),e(Z,_m),_(ts,Z,null),m(t,yl,h),m(t,xt,h),e(xt,Lo),e(Lo,si),_(os,si,null),e(xt,vm),e(xt,ri),e(ri,Pm),m(t,bl,h),m(t,Et,h),_(ns,Et,null),e(Et,Tm),e(Et,Q),_(ss,Q,null),e(Q,Im),e(Q,Mt),e(Mt,Cm),e(Mt,qr),e(qr,ym),e(Mt,bm),e(Mt,ai),e(ai,Lm),e(Mt,wm),e(Q,$m),_(wo,Q,null),e(Q,km),e(Q,ii),e(ii,xm),e(Q,Em),_(rs,Q,null),m(t,Ll,h),m(t,zt,h),e(zt,$o),e($o,li),_(as,li,null),e(zt,Mm),e(zt,di),e(di,zm),m(t,wl,h),m(t,q,h),_(is,q,null),e(q,jm),e(q,ls),e(ls,Fm),e(ls,Dr),e(Dr,qm),e(ls,Dm),e(q,Om),e(q,ds),e(ds,Am),e(ds,cs),e(cs,Nm),e(ds,Vm),e(q,Sm),_(ko,q,null),e(q,Wm),e(q,Y),_(ps,Y,null),e(Y,Bm),e(Y,jt),e(jt,Um),e(jt,Or),e(Or,Rm),e(jt,Hm),e(jt,ci),e(ci,Km),e(jt,Gm),e(Y,Jm),_(xo,Y,null),e(Y,Xm),e(Y,pi),e(pi,Zm),e(Y,Qm),_(hs,Y,null),e(q,Ym),e(q,ee),_(ms,ee,null),e(ee,ef),e(ee,Ft),e(Ft,tf),e(Ft,Ar),e(Ar,of),e(Ft,nf),e(Ft,hi),e(hi,sf),e(Ft,rf),e(ee,af),_(Eo,ee,null),e(ee,lf),e(ee,mi),e(mi,df),e(ee,cf),_(fs,ee,null),e(q,pf),e(q,te),_(us,te,null),e(te,hf),e(te,qt),e(qt,mf),e(qt,Nr),e(Nr,ff),e(qt,uf),e(qt,fi),e(fi,gf),e(qt,_f),e(te,vf),_(Mo,te,null),e(te,Pf),e(te,ui),e(ui,Tf),e(te,If),_(gs,te,null),m(t,$l,h),m(t,Dt,h),e(Dt,zo),e(zo,gi),_(_s,gi,null),e(Dt,Cf),e(Dt,_i),e(_i,yf),m(t,kl,h),m(t,Ot,h),_(vs,Ot,null),e(Ot,bf),e(Ot,oe),_(Ps,oe,null),e(oe,Lf),e(oe,At),e(At,wf),e(At,Vr),e(Vr,$f),e(At,kf),e(At,vi),e(vi,xf),e(At,Ef),e(oe,Mf),_(jo,oe,null),e(oe,zf),e(oe,Pi),e(Pi,jf),e(oe,Ff),_(Ts,oe,null),m(t,xl,h),m(t,Nt,h),e(Nt,Fo),e(Fo,Ti),_(Is,Ti,null),e(Nt,qf),e(Nt,Ii),e(Ii,Df),m(t,El,h),m(t,Vt,h),_(Cs,Vt,null),e(Vt,Of),e(Vt,ne),_(ys,ne,null),e(ne,Af),e(ne,St),e(St,Nf),e(St,Sr),e(Sr,Vf),e(St,Sf),e(St,Ci),e(Ci,Wf),e(St,Bf),e(ne,Uf),_(qo,ne,null),e(ne,Rf),e(ne,yi),e(yi,Hf),e(ne,Kf),_(bs,ne,null),m(t,Ml,h),m(t,Wt,h),e(Wt,Do),e(Do,bi),_(Ls,bi,null),e(Wt,Gf),e(Wt,Li),e(Li,Jf),m(t,zl,h),m(t,M,h),_(ws,M,null),e(M,Xf),e(M,$s),e($s,Zf),e($s,Wr),e(Wr,Qf),e($s,Yf),e(M,eu),e(M,ks),e(ks,tu),e(ks,xs),e(xs,ou),e(ks,nu),e(M,su),e(M,wi),e(wi,ru),e(M,au),e(M,Ee),e(Ee,$i),e($i,Es),e(Es,iu),e(Ee,lu),e(Ee,ki),e(ki,Ms),e(Ms,du),e(Ee,cu),e(Ee,xi),e(xi,zs),e(zs,pu),e(Ee,hu),e(Ee,Ei),e(Ei,js),e(js,mu),e(M,fu),e(M,se),_(Fs,se,null),e(se,uu),e(se,Bt),e(Bt,gu),e(Bt,Mi),e(Mi,_u),e(Bt,vu),e(Bt,zi),e(zi,Pu),e(Bt,Tu),e(se,Iu),_(Oo,se,null),e(se,Cu),e(se,ji),e(ji,yu),e(se,bu),_(qs,se,null),e(M,Lu),e(M,Ne),_(Ds,Ne,null),e(Ne,wu),e(Ne,Fi),e(Fi,$u),e(Ne,ku),_(Os,Ne,null),e(M,xu),e(M,Ve),_(As,Ve,null),e(Ve,Eu),e(Ve,qi),e(qi,Mu),e(Ve,zu),_(Ns,Ve,null),m(t,jl,h),m(t,Ut,h),e(Ut,Ao),e(Ao,Di),_(Vs,Di,null),e(Ut,ju),e(Ut,Oi),e(Oi,Fu),m(t,Fl,h),m(t,Rt,h),_(Ss,Rt,null),e(Rt,qu),e(Rt,re),_(Ws,re,null),e(re,Du),e(re,Ht),e(Ht,Ou),e(Ht,Ai),e(Ai,Au),e(Ht,Nu),e(Ht,Ni),e(Ni,Vu),e(Ht,Su),e(re,Wu),_(No,re,null),e(re,Bu),e(re,Vi),e(Vi,Uu),e(re,Ru),_(Bs,re,null),m(t,ql,h),m(t,Kt,h),e(Kt,Vo),e(Vo,Si),_(Us,Si,null),e(Kt,Hu),e(Kt,Wi),e(Wi,Ku),m(t,Dl,h),m(t,Gt,h),_(Rs,Gt,null),e(Gt,Gu),e(Gt,ae),_(Hs,ae,null),e(ae,Ju),e(ae,Jt),e(Jt,Xu),e(Jt,Bi),e(Bi,Zu),e(Jt,Qu),e(Jt,Ui),e(Ui,Yu),e(Jt,eg),e(ae,tg),_(So,ae,null),e(ae,og),e(ae,Ri),e(Ri,ng),e(ae,sg),_(Ks,ae,null),Ol=!0},p(t,[h]){const Gs={};h&2&&(Gs.$$scope={dirty:h,ctx:t}),To.$set(Gs);const Hi={};h&2&&(Hi.$$scope={dirty:h,ctx:t}),Io.$set(Hi);const Ki={};h&2&&(Ki.$$scope={dirty:h,ctx:t}),Co.$set(Ki);const Gi={};h&2&&(Gi.$$scope={dirty:h,ctx:t}),bo.$set(Gi);const Js={};h&2&&(Js.$$scope={dirty:h,ctx:t}),wo.$set(Js);const Ji={};h&2&&(Ji.$$scope={dirty:h,ctx:t}),ko.$set(Ji);const Xi={};h&2&&(Xi.$$scope={dirty:h,ctx:t}),xo.$set(Xi);const Zi={};h&2&&(Zi.$$scope={dirty:h,ctx:t}),Eo.$set(Zi);const Xs={};h&2&&(Xs.$$scope={dirty:h,ctx:t}),Mo.$set(Xs);const Qi={};h&2&&(Qi.$$scope={dirty:h,ctx:t}),jo.$set(Qi);const Yi={};h&2&&(Yi.$$scope={dirty:h,ctx:t}),qo.$set(Yi);const el={};h&2&&(el.$$scope={dirty:h,ctx:t}),Oo.$set(el);const tl={};h&2&&(tl.$$scope={dirty:h,ctx:t}),No.$set(tl);const Zs={};h&2&&(Zs.$$scope={dirty:h,ctx:t}),So.$set(Zs)},i(t){Ol||(v(C.$$.fragment,t),v(ye.$$.fragment,t),v(ke.$$.fragment,t),v(en.$$.fragment,t),v(nn.$$.fragment,t),v(sn.$$.fragment,t),v(rn.$$.fragment,t),v(ln.$$.fragment,t),v(dn.$$.fragment,t),v(pn.$$.fragment,t),v(hn.$$.fragment,t),v(mn.$$.fragment,t),v(un.$$.fragment,t),v(gn.$$.fragment,t),v(_n.$$.fragment,t),v(Pn.$$.fragment,t),v(Tn.$$.fragment,t),v(Cn.$$.fragment,t),v(yn.$$.fragment,t),v(bn.$$.fragment,t),v(Ln.$$.fragment,t),v(kn.$$.fragment,t),v(xn.$$.fragment,t),v(En.$$.fragment,t),v(Mn.$$.fragment,t),v(jn.$$.fragment,t),v(qn.$$.fragment,t),v(Dn.$$.fragment,t),v(On.$$.fragment,t),v(An.$$.fragment,t),v(Vn.$$.fragment,t),v(Wn.$$.fragment,t),v(Bn.$$.fragment,t),v(Hn.$$.fragment,t),v(To.$$.fragment,t),v(Kn.$$.fragment,t),v(Gn.$$.fragment,t),v(Io.$$.fragment,t),v(Jn.$$.fragment,t),v(Xn.$$.fragment,t),v(Co.$$.fragment,t),v(Zn.$$.fragment,t),v(Qn.$$.fragment,t),v(Yn.$$.fragment,t),v(es.$$.fragment,t),v(bo.$$.fragment,t),v(ts.$$.fragment,t),v(os.$$.fragment,t),v(ns.$$.fragment,t),v(ss.$$.fragment,t),v(wo.$$.fragment,t),v(rs.$$.fragment,t),v(as.$$.fragment,t),v(is.$$.fragment,t),v(ko.$$.fragment,t),v(ps.$$.fragment,t),v(xo.$$.fragment,t),v(hs.$$.fragment,t),v(ms.$$.fragment,t),v(Eo.$$.fragment,t),v(fs.$$.fragment,t),v(us.$$.fragment,t),v(Mo.$$.fragment,t),v(gs.$$.fragment,t),v(_s.$$.fragment,t),v(vs.$$.fragment,t),v(Ps.$$.fragment,t),v(jo.$$.fragment,t),v(Ts.$$.fragment,t),v(Is.$$.fragment,t),v(Cs.$$.fragment,t),v(ys.$$.fragment,t),v(qo.$$.fragment,t),v(bs.$$.fragment,t),v(Ls.$$.fragment,t),v(ws.$$.fragment,t),v(Fs.$$.fragment,t),v(Oo.$$.fragment,t),v(qs.$$.fragment,t),v(Ds.$$.fragment,t),v(Os.$$.fragment,t),v(As.$$.fragment,t),v(Ns.$$.fragment,t),v(Vs.$$.fragment,t),v(Ss.$$.fragment,t),v(Ws.$$.fragment,t),v(No.$$.fragment,t),v(Bs.$$.fragment,t),v(Us.$$.fragment,t),v(Rs.$$.fragment,t),v(Hs.$$.fragment,t),v(So.$$.fragment,t),v(Ks.$$.fragment,t),Ol=!0)},o(t){P(C.$$.fragment,t),P(ye.$$.fragment,t),P(ke.$$.fragment,t),P(en.$$.fragment,t),P(nn.$$.fragment,t),P(sn.$$.fragment,t),P(rn.$$.fragment,t),P(ln.$$.fragment,t),P(dn.$$.fragment,t),P(pn.$$.fragment,t),P(hn.$$.fragment,t),P(mn.$$.fragment,t),P(un.$$.fragment,t),P(gn.$$.fragment,t),P(_n.$$.fragment,t),P(Pn.$$.fragment,t),P(Tn.$$.fragment,t),P(Cn.$$.fragment,t),P(yn.$$.fragment,t),P(bn.$$.fragment,t),P(Ln.$$.fragment,t),P(kn.$$.fragment,t),P(xn.$$.fragment,t),P(En.$$.fragment,t),P(Mn.$$.fragment,t),P(jn.$$.fragment,t),P(qn.$$.fragment,t),P(Dn.$$.fragment,t),P(On.$$.fragment,t),P(An.$$.fragment,t),P(Vn.$$.fragment,t),P(Wn.$$.fragment,t),P(Bn.$$.fragment,t),P(Hn.$$.fragment,t),P(To.$$.fragment,t),P(Kn.$$.fragment,t),P(Gn.$$.fragment,t),P(Io.$$.fragment,t),P(Jn.$$.fragment,t),P(Xn.$$.fragment,t),P(Co.$$.fragment,t),P(Zn.$$.fragment,t),P(Qn.$$.fragment,t),P(Yn.$$.fragment,t),P(es.$$.fragment,t),P(bo.$$.fragment,t),P(ts.$$.fragment,t),P(os.$$.fragment,t),P(ns.$$.fragment,t),P(ss.$$.fragment,t),P(wo.$$.fragment,t),P(rs.$$.fragment,t),P(as.$$.fragment,t),P(is.$$.fragment,t),P(ko.$$.fragment,t),P(ps.$$.fragment,t),P(xo.$$.fragment,t),P(hs.$$.fragment,t),P(ms.$$.fragment,t),P(Eo.$$.fragment,t),P(fs.$$.fragment,t),P(us.$$.fragment,t),P(Mo.$$.fragment,t),P(gs.$$.fragment,t),P(_s.$$.fragment,t),P(vs.$$.fragment,t),P(Ps.$$.fragment,t),P(jo.$$.fragment,t),P(Ts.$$.fragment,t),P(Is.$$.fragment,t),P(Cs.$$.fragment,t),P(ys.$$.fragment,t),P(qo.$$.fragment,t),P(bs.$$.fragment,t),P(Ls.$$.fragment,t),P(ws.$$.fragment,t),P(Fs.$$.fragment,t),P(Oo.$$.fragment,t),P(qs.$$.fragment,t),P(Ds.$$.fragment,t),P(Os.$$.fragment,t),P(As.$$.fragment,t),P(Ns.$$.fragment,t),P(Vs.$$.fragment,t),P(Ss.$$.fragment,t),P(Ws.$$.fragment,t),P(No.$$.fragment,t),P(Bs.$$.fragment,t),P(Us.$$.fragment,t),P(Rs.$$.fragment,t),P(Hs.$$.fragment,t),P(So.$$.fragment,t),P(Ks.$$.fragment,t),Ol=!1},d(t){o(p),t&&o(L),t&&o(I),T(C),t&&o(at),t&&o(z),T(ye),t&&o(Xt),t&&o(pe),t&&o(he),t&&o(je),t&&o(Qt),t&&o(Fe),t&&o(Yt),t&&o(O),T(ke),t&&o(eo),t&&o(me),t&&o(qe),t&&o(_e),t&&o(Yo),t&&o(E),t&&o(nl),T(en,t),t&&o(sl),t&&o(Ae),t&&o(rl),t&&o(dt),T(nn),t&&o(al),t&&o(fe),T(sn),T(rn),t&&o(il),t&&o(pt),T(ln),t&&o(ll),t&&o(V),T(dn),T(pn),t&&o(dl),t&&o(ft),T(hn),t&&o(cl),t&&o(S),T(mn),T(un),t&&o(pl),t&&o(_t),T(gn),t&&o(hl),t&&o(F),T(_n),T(Pn),T(Tn),T(Cn),T(yn),t&&o(ml),t&&o(vt),T(bn),t&&o(fl),t&&o(W),T(Ln),T(kn),T(xn),t&&o(ul),t&&o(Pt),T(En),t&&o(gl),t&&o(B),T(Mn),T(jn),T(qn),t&&o(_l),t&&o(It),T(Dn),t&&o(vl),t&&o(U),T(On),T(An),T(Vn),t&&o(Pl),t&&o(Ct),T(Wn),t&&o(Tl),t&&o(R),T(Bn),T(Hn),T(To),T(Kn),T(Gn),T(Io),T(Jn),T(Xn),T(Co),T(Zn),t&&o(Il),t&&o(wt),T(Qn),t&&o(Cl),t&&o($t),T(Yn),T(es),T(bo),T(ts),t&&o(yl),t&&o(xt),T(os),t&&o(bl),t&&o(Et),T(ns),T(ss),T(wo),T(rs),t&&o(Ll),t&&o(zt),T(as),t&&o(wl),t&&o(q),T(is),T(ko),T(ps),T(xo),T(hs),T(ms),T(Eo),T(fs),T(us),T(Mo),T(gs),t&&o($l),t&&o(Dt),T(_s),t&&o(kl),t&&o(Ot),T(vs),T(Ps),T(jo),T(Ts),t&&o(xl),t&&o(Nt),T(Is),t&&o(El),t&&o(Vt),T(Cs),T(ys),T(qo),T(bs),t&&o(Ml),t&&o(Wt),T(Ls),t&&o(zl),t&&o(M),T(ws),T(Fs),T(Oo),T(qs),T(Ds),T(Os),T(As),T(Ns),t&&o(jl),t&&o(Ut),T(Vs),t&&o(Fl),t&&o(Rt),T(Ss),T(Ws),T(No),T(Bs),t&&o(ql),t&&o(Kt),T(Us),t&&o(Dl),t&&o(Gt),T(Rs),T(Hs),T(So),T(Ks)}}}const L1={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function w1(x){return d1(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class z1 extends r1{constructor(p){super();a1(this,p,w1,b1,i1,{})}}export{z1 as default,L1 as metadata};
