import{S as TP,i as CP,s as bP,e as n,k as l,w as g,t as a,M as yP,c as s,d as o,m as d,a as r,x as _,h as i,b as c,F as e,g as m,y as v,q as P,o as I,B as T}from"../../chunks/vendor-4833417e.js";import{T as ce}from"../../chunks/Tip-fffd6df1.js";import{D as $}from"../../chunks/Docstring-7b52c3d4.js";import{C as N}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as D}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function LP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function kP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function $P(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function wP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function xP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function EP(x){let p,L,u,b,y,C,f,k,Go,at,j,ue,be,ye,Jo,Le,Xo,Zt,pe,Me,ke,Qt,H,he,Fe,it,Yt,qe,$e,Zo,eo,A,ge,we,xe,Qo,Ee,Yo,to,me,en,De,_e;return{c(){p=n("p"),L=a("TF 2.0 models accepts two formats as inputs:"),u=l(),b=n("ul"),y=n("li"),C=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),k=n("li"),Go=a("having all inputs as a list, tuple or dict in the first positional arguments."),at=l(),j=n("p"),ue=a("This second option is useful when using "),be=n("code"),ye=a("tf.keras.Model.fit"),Jo=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Le=n("code"),Xo=a("model(inputs)"),Zt=a("."),pe=l(),Me=n("p"),ke=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Qt=l(),H=n("ul"),he=n("li"),Fe=a("a single Tensor with "),it=n("code"),Yt=a("input_ids"),qe=a(" only and nothing else: "),$e=n("code"),Zo=a("model(input_ids)"),eo=l(),A=n("li"),ge=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n("code"),xe=a("model([input_ids, attention_mask])"),Qo=a(" or "),Ee=n("code"),Yo=a("model([input_ids, attention_mask, token_type_ids])"),to=l(),me=n("li"),en=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),De=n("code"),_e=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){p=s(w,"P",{});var M=r(p);L=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(o),u=d(w),b=s(w,"UL",{});var oo=r(b);y=s(oo,"LI",{});var tr=r(y);C=i(tr,"having all inputs as keyword arguments (like PyTorch models), or"),tr.forEach(o),f=d(oo),k=s(oo,"LI",{});var tn=r(k);Go=i(tn,"having all inputs as a list, tuple or dict in the first positional arguments."),tn.forEach(o),oo.forEach(o),at=d(w),j=s(w,"P",{});var E=r(j);ue=i(E,"This second option is useful when using "),be=s(E,"CODE",{});var or=r(be);ye=i(or,"tf.keras.Model.fit"),or.forEach(o),Jo=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),Le=s(E,"CODE",{});var lt=r(Le);Xo=i(lt,"model(inputs)"),lt.forEach(o),Zt=i(E,"."),E.forEach(o),pe=d(w),Me=s(w,"P",{});var nr=r(Me);ke=i(nr,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),nr.forEach(o),Qt=d(w),H=s(w,"UL",{});var Ae=r(H);he=s(Ae,"LI",{});var ve=r(he);Fe=i(ve,"a single Tensor with "),it=s(ve,"CODE",{});var sr=r(it);Yt=i(sr,"input_ids"),sr.forEach(o),qe=i(ve," only and nothing else: "),$e=s(ve,"CODE",{});var rr=r($e);Zo=i(rr,"model(input_ids)"),rr.forEach(o),ve.forEach(o),eo=d(Ae),A=s(Ae,"LI",{});var Pe=r(A);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s(Pe,"CODE",{});var ar=r(we);xe=i(ar,"model([input_ids, attention_mask])"),ar.forEach(o),Qo=i(Pe," or "),Ee=s(Pe,"CODE",{});var ir=r(Ee);Yo=i(ir,"model([input_ids, attention_mask, token_type_ids])"),ir.forEach(o),Pe.forEach(o),to=d(Ae),me=s(Ae,"LI",{});var Ne=r(me);en=i(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),De=s(Ne,"CODE",{});var lr=r(De);_e=i(lr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),lr.forEach(o),Ne.forEach(o),Ae.forEach(o)},m(w,M){m(w,p,M),e(p,L),m(w,u,M),m(w,b,M),e(b,y),e(y,C),e(b,f),e(b,k),e(k,Go),m(w,at,M),m(w,j,M),e(j,ue),e(j,be),e(be,ye),e(j,Jo),e(j,Le),e(Le,Xo),e(j,Zt),m(w,pe,M),m(w,Me,M),e(Me,ke),m(w,Qt,M),m(w,H,M),e(H,he),e(he,Fe),e(he,it),e(it,Yt),e(he,qe),e(he,$e),e($e,Zo),e(H,eo),e(H,A),e(A,ge),e(A,we),e(we,xe),e(A,Qo),e(A,Ee),e(Ee,Yo),e(H,to),e(H,me),e(me,en),e(me,De),e(De,_e)},d(w){w&&o(p),w&&o(u),w&&o(b),w&&o(at),w&&o(j),w&&o(pe),w&&o(Me),w&&o(Qt),w&&o(H)}}}function zP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function jP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function MP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function FP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function qP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function DP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function AP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function NP(x){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function VP(x){let p,L,u,b,y,C,f,k,Go,at,j,ue,be,ye,Jo,Le,Xo,Zt,pe,Me,ke,Qt,H,he,Fe,it,Yt,qe,$e,Zo,eo,A,ge,we,xe,Qo,Ee,Yo,to,me,en,De,_e,w,M,oo,tr,tn,E,or,lt,nr,Ae,ve,sr,rr,Pe,ar,ir,Ne,lr,Dd,dr,Ad,Nd,cr,Vd,Od,dl,on,cl,Ve,Sd,nn,Wd,Bd,sn,Ud,Rd,pl,dt,no,ua,rn,Hd,ga,Kd,hl,fe,an,Gd,so,pr,Jd,Xd,hr,Zd,Qd,Yd,ct,ec,mr,tc,oc,fr,nc,sc,rc,ro,ln,ac,dn,ic,ur,lc,dc,ml,pt,ao,_a,cn,cc,va,pc,fl,S,pn,hc,ht,mc,gr,fc,uc,hn,gc,_c,vc,mt,Pc,_r,Ic,Tc,vr,Cc,bc,yc,Pa,Lc,kc,mn,ul,ft,io,Ia,fn,$c,Ta,wc,gl,W,un,xc,ut,Ec,Pr,zc,jc,gn,Mc,Fc,qc,gt,Dc,Ir,Ac,Nc,Tr,Vc,Oc,Sc,Ca,Wc,Bc,_n,_l,_t,lo,ba,vn,Uc,ya,Rc,vl,F,Pn,Hc,La,Kc,Gc,In,Jc,Cr,Xc,Zc,Qc,Ie,Tn,Yc,ka,ep,tp,$a,br,op,wa,np,sp,xa,rp,ap,co,Cn,ip,bn,lp,Ea,dp,cp,pp,po,yn,hp,za,mp,fp,yr,Ln,Pl,vt,ho,ja,kn,up,Ma,gp,Il,B,$n,_p,wn,vp,Fa,Pp,Ip,Tp,xn,Cp,Lr,bp,yp,Lp,Te,En,kp,qa,$p,wp,Da,kr,xp,Aa,Ep,zp,Na,jp,Mp,mo,zn,Fp,Va,qp,Tl,Pt,fo,Oa,jn,Dp,Sa,Ap,Cl,V,Mn,Np,Wa,Vp,Op,Fn,Sp,$r,Wp,Bp,Up,uo,qn,Rp,Dn,Hp,Ba,Kp,Gp,Jp,go,An,Xp,It,Zp,Ua,Qp,Yp,Ra,eh,th,oh,_o,Nn,nh,Tt,sh,Ha,rh,ah,Ka,ih,lh,bl,Ct,vo,Ga,Vn,dh,Ja,ch,yl,U,On,ph,Xa,hh,mh,K,wr,fh,uh,xr,gh,_h,Er,vh,Ph,Za,Ih,Th,zr,Ch,bh,yh,Po,Sn,Lh,Wn,kh,jr,$h,wh,xh,Io,Bn,Eh,Un,zh,Mr,jh,Mh,Ll,bt,To,Qa,Rn,Fh,Ya,qh,kl,R,Hn,Dh,Kn,Ah,Gn,Nh,Vh,Oh,G,Jn,Sh,yt,Wh,Fr,Bh,Uh,ei,Rh,Hh,Kh,Co,Gh,ti,Jh,Xh,Xn,Zh,J,Zn,Qh,Lt,Yh,qr,em,tm,oi,om,nm,sm,bo,rm,ni,am,im,Qn,lm,X,Yn,dm,kt,cm,Dr,pm,hm,si,mm,fm,um,yo,gm,ri,_m,vm,es,$l,$t,Lo,ai,ts,Pm,ii,Im,wl,wt,os,Tm,Z,ns,Cm,xt,bm,Ar,ym,Lm,li,km,$m,wm,ko,xm,di,Em,zm,ss,xl,Et,$o,ci,rs,jm,pi,Mm,El,zt,as,Fm,Q,is,qm,jt,Dm,Nr,Am,Nm,hi,Vm,Om,Sm,wo,Wm,mi,Bm,Um,ls,zl,Mt,xo,fi,ds,Rm,ui,Hm,jl,q,cs,Km,ps,Gm,Vr,Jm,Xm,Zm,hs,Qm,ms,Ym,ef,tf,Eo,of,Y,fs,nf,Ft,sf,Or,rf,af,gi,lf,df,cf,zo,pf,_i,hf,mf,us,ff,ee,gs,uf,qt,gf,Sr,_f,vf,vi,Pf,If,Tf,jo,Cf,Pi,bf,yf,_s,Lf,te,vs,kf,Dt,$f,Wr,wf,xf,Ii,Ef,zf,jf,Mo,Mf,Ti,Ff,qf,Ps,Ml,At,Fo,Ci,Is,Df,bi,Af,Fl,Nt,Ts,Nf,oe,Cs,Vf,Vt,Of,Br,Sf,Wf,yi,Bf,Uf,Rf,qo,Hf,Li,Kf,Gf,bs,ql,Ot,Do,ki,ys,Jf,$i,Xf,Dl,St,Ls,Zf,ne,ks,Qf,Wt,Yf,Ur,eu,tu,wi,ou,nu,su,Ao,ru,xi,au,iu,$s,Al,Bt,No,Ei,ws,lu,zi,du,Nl,z,xs,cu,Es,pu,Rr,hu,mu,fu,zs,uu,js,gu,_u,vu,ji,Pu,Iu,ze,Mi,Ms,Tu,Cu,Fi,Fs,bu,yu,qi,qs,Lu,ku,Di,Ds,$u,wu,se,As,xu,Ut,Eu,Ai,zu,ju,Ni,Mu,Fu,qu,Vo,Du,Vi,Au,Nu,Ns,Vu,Oe,Vs,Ou,Oi,Su,Wu,Os,Bu,Se,Ss,Uu,Si,Ru,Hu,Ws,Vl,Rt,Oo,Wi,Bs,Ku,Bi,Gu,Ol,Ht,Us,Ju,re,Rs,Xu,Kt,Zu,Ui,Qu,Yu,Ri,eg,tg,og,So,ng,Hi,sg,rg,Hs,Sl,Gt,Wo,Ki,Ks,ag,Gi,ig,Wl,Jt,Gs,lg,ae,Js,dg,Xt,cg,Ji,pg,hg,Xi,mg,fg,ug,Bo,gg,Zi,_g,vg,Xs,Bl;return C=new D({}),ye=new D({}),xe=new D({}),on=new N({props:{codee:`from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),rn=new D({}),an=new $({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/configuration_clip.py#L209",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),ln=new $({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/configuration_clip.py#L258",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),cn=new D({}),pn=new $({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/configuration_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),mn=new N({props:{codee:`from transformers import CLIPTextModel, CLIPTextConfig

# Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPTextConfig()

# Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration
model = CLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTextModel, CLIPTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),fn=new D({}),un=new $({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/configuration_clip.py#L122",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),_n=new N({props:{codee:`from transformers import CLIPVisionModel, CLIPVisionConfig

# Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPVisionConfig()

# Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration
model = CLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPVisionModel, CLIPVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),vn=new D({}),Pn=new $({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),Tn=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cn=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yn=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ln=new $({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip.py#L336"}}),kn=new D({}),$n=new $({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),En=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zn=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jn=new D({}),Mn=new $({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"do_convert_rgb",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/feature_extraction_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.CLIPFeatureExtractor.convert_rgb",description:`<strong>convert_rgb</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not to convert <code>PIL.Image.Image</code> into <code>RGB</code> format`,name:"convert_rgb"}]}}),qn=new $({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/feature_extraction_clip.py#L179",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),An=new $({props:{name:"convert_rgb",anchor:"transformers.CLIPFeatureExtractor.convert_rgb",parameters:[{name:"image",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/feature_extraction_clip.py#L165",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.convert_rgb.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to convert.`,name:"image"}]}}),Nn=new $({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/feature_extraction_clip.py#L205",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),Vn=new D({}),On=new $({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),Sn=new $({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/processing_clip.py#L95"}}),Bn=new $({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/processing_clip.py#L102"}}),Rn=new D({}),Hn=new $({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L837",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15886/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new $({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L952",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.
(<code>torch.FloatTensor</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>BaseModelOutputWithPooling</code>)</li>
</ul>
`}}),Co=new ce({props:{$$slots:{default:[LP]},$$scope:{ctx:x}}}),Xn=new N({props:{codee:`from PIL import Image
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
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Zn=new $({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L870",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`}}),bo=new ce({props:{$$slots:{default:[kP]},$$scope:{ctx:x}}}),Qn=new N({props:{codee:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Yn=new $({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L910",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`}}),yo=new ce({props:{$$slots:{default:[$P]},$$scope:{ctx:x}}}),es=new N({props:{codee:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),ts=new D({}),os=new $({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L673"}}),ns=new $({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L688",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15886/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),ko=new ce({props:{$$slots:{default:[wP]},$$scope:{ctx:x}}}),ss=new N({props:{codee:`from transformers import CLIPTokenizer, CLIPTextModel

model = CLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),rs=new D({}),as=new $({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L784"}}),is=new $({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_clip.py#L797",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15886/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),wo=new ce({props:{$$slots:{default:[xP]},$$scope:{ctx:x}}}),ls=new N({props:{codee:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPVisionModel

model = CLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),ds=new D({}),cs=new $({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1287",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15886/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Eo=new ce({props:{$$slots:{default:[EP]},$$scope:{ctx:x}}}),fs=new $({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1440",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.
(<code>tf.Tensor</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>TFBaseModelOutputWithPooling</code>)</li>
</ul>
`}}),zo=new ce({props:{$$slots:{default:[zP]},$$scope:{ctx:x}}}),us=new N({props:{codee:`import tensorflow as tf
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
probs = tf.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),gs=new $({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1333",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`}}),jo=new ce({props:{$$slots:{default:[jP]},$$scope:{ctx:x}}}),_s=new N({props:{codee:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),vs=new $({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1385",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`}}),Mo=new ce({props:{$$slots:{default:[MP]},$$scope:{ctx:x}}}),Ps=new N({props:{codee:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

image_features = model.get_image_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Is=new D({}),Ts=new $({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1102"}}),Cs=new $({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1110",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15886/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
`}}),qo=new ce({props:{$$slots:{default:[FP]},$$scope:{ctx:x}}}),bs=new N({props:{codee:`from transformers import CLIPTokenizer, TFCLIPTextModel

model = TFCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),ys=new D({}),Ls=new $({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1176"}}),ks=new $({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_tf_clip.py#L1217",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15886/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
`}}),Ao=new ce({props:{$$slots:{default:[qP]},$$scope:{ctx:x}}}),$s=new N({props:{codee:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPVisionModel

model = TFCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),ws=new D({}),xs=new $({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L1108",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15886/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15886/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15886/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),As=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L737",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<p>(<code>jnp.ndarray</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
<ul>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>)</li>
</ul>
`}}),Vo=new ce({props:{$$slots:{default:[DP]},$$scope:{ctx:x}}}),Ns=new N({props:{codee:`import jax
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
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Vs=new $({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L782",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`}}),Os=new N({props:{codee:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Ss=new $({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L849",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`}}),Ws=new N({props:{codee:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

image_features = model.get_image_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Bs=new D({}),Us=new $({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L929"}}),Rs=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L604",parametersDescription:[{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15886/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
`}}),So=new ce({props:{$$slots:{default:[AP]},$$scope:{ctx:x}}}),Hs=new N({props:{codee:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

model = FlaxCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled (EOS token) states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Ks=new D({}),Gs=new $({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L982"}}),Js=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15886/src/transformers/models/clip/modeling_flax_clip.py#L673",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15886/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15886/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
`}}),Bo=new ce({props:{$$slots:{default:[NP]},$$scope:{ctx:x}}}),Xs=new N({props:{codee:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPVisionModel

model = FlaxCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled CLS states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("meta"),L=l(),u=n("h1"),b=n("a"),y=n("span"),g(C.$$.fragment),f=l(),k=n("span"),Go=a("CLIP"),at=l(),j=n("h2"),ue=n("a"),be=n("span"),g(ye.$$.fragment),Jo=l(),Le=n("span"),Xo=a("Overview"),Zt=l(),pe=n("p"),Me=a("The CLIP model was proposed in "),ke=n("a"),Qt=a("Learning Transferable Visual Models From Natural Language Supervision"),H=a(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),he=l(),Fe=n("p"),it=a("The abstract from the paper is the following:"),Yt=l(),qe=n("p"),$e=n("em"),Zo=a(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),eo=l(),A=n("h2"),ge=n("a"),we=n("span"),g(xe.$$.fragment),Qo=l(),Ee=n("span"),Yo=a("Usage"),to=l(),me=n("p"),en=a(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),De=l(),_e=n("p"),w=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),M=n("a"),oo=a("CLIPFeatureExtractor"),tr=a(" can be used to resize (or rescale) and normalize images for the model."),tn=l(),E=n("p"),or=a("The "),lt=n("a"),nr=a("CLIPTokenizer"),Ae=a(" is used to encode the text. The "),ve=n("a"),sr=a("CLIPProcessor"),rr=a(` wraps
`),Pe=n("a"),ar=a("CLIPFeatureExtractor"),ir=a(" and "),Ne=n("a"),lr=a("CLIPTokenizer"),Dd=a(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),dr=n("a"),Ad=a("CLIPProcessor"),Nd=a(" and "),cr=n("a"),Vd=a("CLIPModel"),Od=a("."),dl=l(),g(on.$$.fragment),cl=l(),Ve=n("p"),Sd=a("This model was contributed by "),nn=n("a"),Wd=a("valhalla"),Bd=a(". The original code can be found "),sn=n("a"),Ud=a("here"),Rd=a("."),pl=l(),dt=n("h2"),no=n("a"),ua=n("span"),g(rn.$$.fragment),Hd=l(),ga=n("span"),Kd=a("CLIPConfig"),hl=l(),fe=n("div"),g(an.$$.fragment),Gd=l(),so=n("p"),pr=n("a"),Jd=a("CLIPConfig"),Xd=a(" is the configuration class to store the configuration of a "),hr=n("a"),Zd=a("CLIPModel"),Qd=a(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Yd=l(),ct=n("p"),ec=a("Configuration objects inherit from "),mr=n("a"),tc=a("PretrainedConfig"),oc=a(` and can be used to control the model outputs. Read the
documentation from `),fr=n("a"),nc=a("PretrainedConfig"),sc=a(" for more information."),rc=l(),ro=n("div"),g(ln.$$.fragment),ac=l(),dn=n("p"),ic=a("Instantiate a "),ur=n("a"),lc=a("CLIPConfig"),dc=a(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),ml=l(),pt=n("h2"),ao=n("a"),_a=n("span"),g(cn.$$.fragment),cc=l(),va=n("span"),pc=a("CLIPTextConfig"),fl=l(),S=n("div"),g(pn.$$.fragment),hc=l(),ht=n("p"),mc=a("This is the configuration class to store the configuration of a "),gr=n("a"),fc=a("CLIPModel"),uc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),hn=n("a"),gc=a("openai/clip-vit-base-patch32"),_c=a(" architecture."),vc=l(),mt=n("p"),Pc=a("Configuration objects inherit from "),_r=n("a"),Ic=a("PretrainedConfig"),Tc=a(` and can be used to control the model outputs. Read the
documentation from `),vr=n("a"),Cc=a("PretrainedConfig"),bc=a(" for more information."),yc=l(),Pa=n("p"),Lc=a("Example:"),kc=l(),g(mn.$$.fragment),ul=l(),ft=n("h2"),io=n("a"),Ia=n("span"),g(fn.$$.fragment),$c=l(),Ta=n("span"),wc=a("CLIPVisionConfig"),gl=l(),W=n("div"),g(un.$$.fragment),xc=l(),ut=n("p"),Ec=a("This is the configuration class to store the configuration of a "),Pr=n("a"),zc=a("CLIPModel"),jc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),gn=n("a"),Mc=a("openai/clip-vit-base-patch32"),Fc=a(" architecture."),qc=l(),gt=n("p"),Dc=a("Configuration objects inherit from "),Ir=n("a"),Ac=a("PretrainedConfig"),Nc=a(` and can be used to control the model outputs. Read the
documentation from `),Tr=n("a"),Vc=a("PretrainedConfig"),Oc=a(" for more information."),Sc=l(),Ca=n("p"),Wc=a("Example:"),Bc=l(),g(_n.$$.fragment),_l=l(),_t=n("h2"),lo=n("a"),ba=n("span"),g(vn.$$.fragment),Uc=l(),ya=n("span"),Rc=a("CLIPTokenizer"),vl=l(),F=n("div"),g(Pn.$$.fragment),Hc=l(),La=n("p"),Kc=a("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Gc=l(),In=n("p"),Jc=a("This tokenizer inherits from "),Cr=n("a"),Xc=a("PreTrainedTokenizer"),Zc=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qc=l(),Ie=n("div"),g(Tn.$$.fragment),Yc=l(),ka=n("p"),ep=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),tp=l(),$a=n("ul"),br=n("li"),op=a("single sequence: "),wa=n("code"),np=a("<|startoftext|> X <|endoftext|>"),sp=l(),xa=n("p"),rp=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),ap=l(),co=n("div"),g(Cn.$$.fragment),ip=l(),bn=n("p"),lp=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ea=n("code"),dp=a("prepare_for_model"),cp=a(" method."),pp=l(),po=n("div"),g(yn.$$.fragment),hp=l(),za=n("p"),mp=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),fp=l(),yr=n("div"),g(Ln.$$.fragment),Pl=l(),vt=n("h2"),ho=n("a"),ja=n("span"),g(kn.$$.fragment),up=l(),Ma=n("span"),gp=a("CLIPTokenizerFast"),Il=l(),B=n("div"),g($n.$$.fragment),_p=l(),wn=n("p"),vp=a("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Fa=n("em"),Pp=a("tokenizers"),Ip=a(` library). Based on byte-level
Byte-Pair-Encoding.`),Tp=l(),xn=n("p"),Cp=a("This tokenizer inherits from "),Lr=n("a"),bp=a("PreTrainedTokenizerFast"),yp=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Lp=l(),Te=n("div"),g(En.$$.fragment),kp=l(),qa=n("p"),$p=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),wp=l(),Da=n("ul"),kr=n("li"),xp=a("single sequence: "),Aa=n("code"),Ep=a("<|startoftext|> X <|endoftext|>"),zp=l(),Na=n("p"),jp=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Mp=l(),mo=n("div"),g(zn.$$.fragment),Fp=l(),Va=n("p"),qp=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Tl=l(),Pt=n("h2"),fo=n("a"),Oa=n("span"),g(jn.$$.fragment),Dp=l(),Sa=n("span"),Ap=a("CLIPFeatureExtractor"),Cl=l(),V=n("div"),g(Mn.$$.fragment),Np=l(),Wa=n("p"),Vp=a("Constructs a CLIP feature extractor."),Op=l(),Fn=n("p"),Sp=a("This feature extractor inherits from "),$r=n("a"),Wp=a("FeatureExtractionMixin"),Bp=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Up=l(),uo=n("div"),g(qn.$$.fragment),Rp=l(),Dn=n("p"),Hp=a("Crops "),Ba=n("code"),Kp=a("image"),Gp=a(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Jp=l(),go=n("div"),g(An.$$.fragment),Xp=l(),It=n("p"),Zp=a("Converts "),Ua=n("code"),Qp=a("image"),Yp=a(" to RGB format. Note that this will trigger a conversion of "),Ra=n("code"),eh=a("image"),th=a(" to a PIL Image."),oh=l(),_o=n("div"),g(Nn.$$.fragment),nh=l(),Tt=n("p"),sh=a("Resizes "),Ha=n("code"),rh=a("image"),ah=a(". Note that this will trigger a conversion of "),Ka=n("code"),ih=a("image"),lh=a(" to a PIL Image."),bl=l(),Ct=n("h2"),vo=n("a"),Ga=n("span"),g(Vn.$$.fragment),dh=l(),Ja=n("span"),ch=a("CLIPProcessor"),yl=l(),U=n("div"),g(On.$$.fragment),ph=l(),Xa=n("p"),hh=a("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),mh=l(),K=n("p"),wr=n("a"),fh=a("CLIPProcessor"),uh=a(" offers all the functionalities of "),xr=n("a"),gh=a("CLIPFeatureExtractor"),_h=a(" and "),Er=n("a"),vh=a("CLIPTokenizer"),Ph=a(`. See the
`),Za=n("code"),Ih=a("__call__()"),Th=a("and "),zr=n("a"),Ch=a("decode()"),bh=a(" for more information."),yh=l(),Po=n("div"),g(Sn.$$.fragment),Lh=l(),Wn=n("p"),kh=a("This method forwards all its arguments to CLIPTokenizer\u2019s "),jr=n("a"),$h=a("batch_decode()"),wh=a(`. Please refer
to the docstring of this method for more information.`),xh=l(),Io=n("div"),g(Bn.$$.fragment),Eh=l(),Un=n("p"),zh=a("This method forwards all its arguments to CLIPTokenizer\u2019s "),Mr=n("a"),jh=a("decode()"),Mh=a(`. Please refer to the
docstring of this method for more information.`),Ll=l(),bt=n("h2"),To=n("a"),Qa=n("span"),g(Rn.$$.fragment),Fh=l(),Ya=n("span"),qh=a("CLIPModel"),kl=l(),R=n("div"),g(Hn.$$.fragment),Dh=l(),Kn=n("p"),Ah=a("This model is a PyTorch "),Gn=n("a"),Nh=a("torch.nn.Module"),Vh=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oh=l(),G=n("div"),g(Jn.$$.fragment),Sh=l(),yt=n("p"),Wh=a("The "),Fr=n("a"),Bh=a("CLIPModel"),Uh=a(" forward method, overrides the "),ei=n("code"),Rh=a("__call__"),Hh=a(" special method."),Kh=l(),g(Co.$$.fragment),Gh=l(),ti=n("p"),Jh=a("Examples:"),Xh=l(),g(Xn.$$.fragment),Zh=l(),J=n("div"),g(Zn.$$.fragment),Qh=l(),Lt=n("p"),Yh=a("The "),qr=n("a"),em=a("CLIPModel"),tm=a(" forward method, overrides the "),oi=n("code"),om=a("__call__"),nm=a(" special method."),sm=l(),g(bo.$$.fragment),rm=l(),ni=n("p"),am=a("Examples:"),im=l(),g(Qn.$$.fragment),lm=l(),X=n("div"),g(Yn.$$.fragment),dm=l(),kt=n("p"),cm=a("The "),Dr=n("a"),pm=a("CLIPModel"),hm=a(" forward method, overrides the "),si=n("code"),mm=a("__call__"),fm=a(" special method."),um=l(),g(yo.$$.fragment),gm=l(),ri=n("p"),_m=a("Examples:"),vm=l(),g(es.$$.fragment),$l=l(),$t=n("h2"),Lo=n("a"),ai=n("span"),g(ts.$$.fragment),Pm=l(),ii=n("span"),Im=a("CLIPTextModel"),wl=l(),wt=n("div"),g(os.$$.fragment),Tm=l(),Z=n("div"),g(ns.$$.fragment),Cm=l(),xt=n("p"),bm=a("The "),Ar=n("a"),ym=a("CLIPTextModel"),Lm=a(" forward method, overrides the "),li=n("code"),km=a("__call__"),$m=a(" special method."),wm=l(),g(ko.$$.fragment),xm=l(),di=n("p"),Em=a("Examples:"),zm=l(),g(ss.$$.fragment),xl=l(),Et=n("h2"),$o=n("a"),ci=n("span"),g(rs.$$.fragment),jm=l(),pi=n("span"),Mm=a("CLIPVisionModel"),El=l(),zt=n("div"),g(as.$$.fragment),Fm=l(),Q=n("div"),g(is.$$.fragment),qm=l(),jt=n("p"),Dm=a("The "),Nr=n("a"),Am=a("CLIPVisionModel"),Nm=a(" forward method, overrides the "),hi=n("code"),Vm=a("__call__"),Om=a(" special method."),Sm=l(),g(wo.$$.fragment),Wm=l(),mi=n("p"),Bm=a("Examples:"),Um=l(),g(ls.$$.fragment),zl=l(),Mt=n("h2"),xo=n("a"),fi=n("span"),g(ds.$$.fragment),Rm=l(),ui=n("span"),Hm=a("TFCLIPModel"),jl=l(),q=n("div"),g(cs.$$.fragment),Km=l(),ps=n("p"),Gm=a("This model inherits from "),Vr=n("a"),Jm=a("TFPreTrainedModel"),Xm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=l(),hs=n("p"),Qm=a("This model is also a "),ms=n("a"),Ym=a("tf.keras.Model"),ef=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tf=l(),g(Eo.$$.fragment),of=l(),Y=n("div"),g(fs.$$.fragment),nf=l(),Ft=n("p"),sf=a("The "),Or=n("a"),rf=a("TFCLIPModel"),af=a(" forward method, overrides the "),gi=n("code"),lf=a("__call__"),df=a(" special method."),cf=l(),g(zo.$$.fragment),pf=l(),_i=n("p"),hf=a("Examples:"),mf=l(),g(us.$$.fragment),ff=l(),ee=n("div"),g(gs.$$.fragment),uf=l(),qt=n("p"),gf=a("The "),Sr=n("a"),_f=a("TFCLIPModel"),vf=a(" forward method, overrides the "),vi=n("code"),Pf=a("__call__"),If=a(" special method."),Tf=l(),g(jo.$$.fragment),Cf=l(),Pi=n("p"),bf=a("Examples:"),yf=l(),g(_s.$$.fragment),Lf=l(),te=n("div"),g(vs.$$.fragment),kf=l(),Dt=n("p"),$f=a("The "),Wr=n("a"),wf=a("TFCLIPModel"),xf=a(" forward method, overrides the "),Ii=n("code"),Ef=a("__call__"),zf=a(" special method."),jf=l(),g(Mo.$$.fragment),Mf=l(),Ti=n("p"),Ff=a("Examples:"),qf=l(),g(Ps.$$.fragment),Ml=l(),At=n("h2"),Fo=n("a"),Ci=n("span"),g(Is.$$.fragment),Df=l(),bi=n("span"),Af=a("TFCLIPTextModel"),Fl=l(),Nt=n("div"),g(Ts.$$.fragment),Nf=l(),oe=n("div"),g(Cs.$$.fragment),Vf=l(),Vt=n("p"),Of=a("The "),Br=n("a"),Sf=a("TFCLIPTextModel"),Wf=a(" forward method, overrides the "),yi=n("code"),Bf=a("__call__"),Uf=a(" special method."),Rf=l(),g(qo.$$.fragment),Hf=l(),Li=n("p"),Kf=a("Examples:"),Gf=l(),g(bs.$$.fragment),ql=l(),Ot=n("h2"),Do=n("a"),ki=n("span"),g(ys.$$.fragment),Jf=l(),$i=n("span"),Xf=a("TFCLIPVisionModel"),Dl=l(),St=n("div"),g(Ls.$$.fragment),Zf=l(),ne=n("div"),g(ks.$$.fragment),Qf=l(),Wt=n("p"),Yf=a("The "),Ur=n("a"),eu=a("TFCLIPVisionModel"),tu=a(" forward method, overrides the "),wi=n("code"),ou=a("__call__"),nu=a(" special method."),su=l(),g(Ao.$$.fragment),ru=l(),xi=n("p"),au=a("Examples:"),iu=l(),g($s.$$.fragment),Al=l(),Bt=n("h2"),No=n("a"),Ei=n("span"),g(ws.$$.fragment),lu=l(),zi=n("span"),du=a("FlaxCLIPModel"),Nl=l(),z=n("div"),g(xs.$$.fragment),cu=l(),Es=n("p"),pu=a("This model inherits from "),Rr=n("a"),hu=a("FlaxPreTrainedModel"),mu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fu=l(),zs=n("p"),uu=a("This model is also a Flax Linen "),js=n("a"),gu=a("flax.linen.Module"),_u=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vu=l(),ji=n("p"),Pu=a("Finally, this model supports inherent JAX features such as:"),Iu=l(),ze=n("ul"),Mi=n("li"),Ms=n("a"),Tu=a("Just-In-Time (JIT) compilation"),Cu=l(),Fi=n("li"),Fs=n("a"),bu=a("Automatic Differentiation"),yu=l(),qi=n("li"),qs=n("a"),Lu=a("Vectorization"),ku=l(),Di=n("li"),Ds=n("a"),$u=a("Parallelization"),wu=l(),se=n("div"),g(As.$$.fragment),xu=l(),Ut=n("p"),Eu=a("The "),Ai=n("code"),zu=a("FlaxCLIPPreTrainedModel"),ju=a("forward method, overrides the "),Ni=n("code"),Mu=a("__call__"),Fu=a(" special method."),qu=l(),g(Vo.$$.fragment),Du=l(),Vi=n("p"),Au=a("Example:"),Nu=l(),g(Ns.$$.fragment),Vu=l(),Oe=n("div"),g(Vs.$$.fragment),Ou=l(),Oi=n("p"),Su=a("Examples:"),Wu=l(),g(Os.$$.fragment),Bu=l(),Se=n("div"),g(Ss.$$.fragment),Uu=l(),Si=n("p"),Ru=a("Examples:"),Hu=l(),g(Ws.$$.fragment),Vl=l(),Rt=n("h2"),Oo=n("a"),Wi=n("span"),g(Bs.$$.fragment),Ku=l(),Bi=n("span"),Gu=a("FlaxCLIPTextModel"),Ol=l(),Ht=n("div"),g(Us.$$.fragment),Ju=l(),re=n("div"),g(Rs.$$.fragment),Xu=l(),Kt=n("p"),Zu=a("The "),Ui=n("code"),Qu=a("FlaxCLIPTextPreTrainedModel"),Yu=a("forward method, overrides the "),Ri=n("code"),eg=a("__call__"),tg=a(" special method."),og=l(),g(So.$$.fragment),ng=l(),Hi=n("p"),sg=a("Example:"),rg=l(),g(Hs.$$.fragment),Sl=l(),Gt=n("h2"),Wo=n("a"),Ki=n("span"),g(Ks.$$.fragment),ag=l(),Gi=n("span"),ig=a("FlaxCLIPVisionModel"),Wl=l(),Jt=n("div"),g(Gs.$$.fragment),lg=l(),ae=n("div"),g(Js.$$.fragment),dg=l(),Xt=n("p"),cg=a("The "),Ji=n("code"),pg=a("FlaxCLIPVisionPreTrainedModel"),hg=a("forward method, overrides the "),Xi=n("code"),mg=a("__call__"),fg=a(" special method."),ug=l(),g(Bo.$$.fragment),gg=l(),Zi=n("p"),_g=a("Example:"),vg=l(),g(Xs.$$.fragment),this.h()},l(t){const h=yP('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),L=d(t),u=s(t,"H1",{class:!0});var Zs=r(u);b=s(Zs,"A",{id:!0,class:!0,href:!0});var Qi=r(b);y=s(Qi,"SPAN",{});var Yi=r(y);_(C.$$.fragment,Yi),Yi.forEach(o),Qi.forEach(o),f=d(Zs),k=s(Zs,"SPAN",{});var el=r(k);Go=i(el,"CLIP"),el.forEach(o),Zs.forEach(o),at=d(t),j=s(t,"H2",{class:!0});var Qs=r(j);ue=s(Qs,"A",{id:!0,class:!0,href:!0});var tl=r(ue);be=s(tl,"SPAN",{});var ol=r(be);_(ye.$$.fragment,ol),ol.forEach(o),tl.forEach(o),Jo=d(Qs),Le=s(Qs,"SPAN",{});var nl=r(Le);Xo=i(nl,"Overview"),nl.forEach(o),Qs.forEach(o),Zt=d(t),pe=s(t,"P",{});var Ys=r(pe);Me=i(Ys,"The CLIP model was proposed in "),ke=s(Ys,"A",{href:!0,rel:!0});var sl=r(ke);Qt=i(sl,"Learning Transferable Visual Models From Natural Language Supervision"),sl.forEach(o),H=i(Ys,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Ys.forEach(o),he=d(t),Fe=s(t,"P",{});var rl=r(Fe);it=i(rl,"The abstract from the paper is the following:"),rl.forEach(o),Yt=d(t),qe=s(t,"P",{});var al=r(qe);$e=s(al,"EM",{});var il=r($e);Zo=i(il,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),il.forEach(o),al.forEach(o),eo=d(t),A=s(t,"H2",{class:!0});var er=r(A);ge=s(er,"A",{id:!0,class:!0,href:!0});var Tg=r(ge);we=s(Tg,"SPAN",{});var Cg=r(we);_(xe.$$.fragment,Cg),Cg.forEach(o),Tg.forEach(o),Qo=d(er),Ee=s(er,"SPAN",{});var bg=r(Ee);Yo=i(bg,"Usage"),bg.forEach(o),er.forEach(o),to=d(t),me=s(t,"P",{});var yg=r(me);en=i(yg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),yg.forEach(o),De=d(t),_e=s(t,"P",{});var Ul=r(_e);w=i(Ul,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),M=s(Ul,"A",{href:!0});var Lg=r(M);oo=i(Lg,"CLIPFeatureExtractor"),Lg.forEach(o),tr=i(Ul," can be used to resize (or rescale) and normalize images for the model."),Ul.forEach(o),tn=d(t),E=s(t,"P",{});var ie=r(E);or=i(ie,"The "),lt=s(ie,"A",{href:!0});var kg=r(lt);nr=i(kg,"CLIPTokenizer"),kg.forEach(o),Ae=i(ie," is used to encode the text. The "),ve=s(ie,"A",{href:!0});var $g=r(ve);sr=i($g,"CLIPProcessor"),$g.forEach(o),rr=i(ie,` wraps
`),Pe=s(ie,"A",{href:!0});var wg=r(Pe);ar=i(wg,"CLIPFeatureExtractor"),wg.forEach(o),ir=i(ie," and "),Ne=s(ie,"A",{href:!0});var xg=r(Ne);lr=i(xg,"CLIPTokenizer"),xg.forEach(o),Dd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),dr=s(ie,"A",{href:!0});var Eg=r(dr);Ad=i(Eg,"CLIPProcessor"),Eg.forEach(o),Nd=i(ie," and "),cr=s(ie,"A",{href:!0});var zg=r(cr);Vd=i(zg,"CLIPModel"),zg.forEach(o),Od=i(ie,"."),ie.forEach(o),dl=d(t),_(on.$$.fragment,t),cl=d(t),Ve=s(t,"P",{});var Hr=r(Ve);Sd=i(Hr,"This model was contributed by "),nn=s(Hr,"A",{href:!0,rel:!0});var jg=r(nn);Wd=i(jg,"valhalla"),jg.forEach(o),Bd=i(Hr,". The original code can be found "),sn=s(Hr,"A",{href:!0,rel:!0});var Mg=r(sn);Ud=i(Mg,"here"),Mg.forEach(o),Rd=i(Hr,"."),Hr.forEach(o),pl=d(t),dt=s(t,"H2",{class:!0});var Rl=r(dt);no=s(Rl,"A",{id:!0,class:!0,href:!0});var Fg=r(no);ua=s(Fg,"SPAN",{});var qg=r(ua);_(rn.$$.fragment,qg),qg.forEach(o),Fg.forEach(o),Hd=d(Rl),ga=s(Rl,"SPAN",{});var Dg=r(ga);Kd=i(Dg,"CLIPConfig"),Dg.forEach(o),Rl.forEach(o),hl=d(t),fe=s(t,"DIV",{class:!0});var Uo=r(fe);_(an.$$.fragment,Uo),Gd=d(Uo),so=s(Uo,"P",{});var ll=r(so);pr=s(ll,"A",{href:!0});var Ag=r(pr);Jd=i(Ag,"CLIPConfig"),Ag.forEach(o),Xd=i(ll," is the configuration class to store the configuration of a "),hr=s(ll,"A",{href:!0});var Ng=r(hr);Zd=i(Ng,"CLIPModel"),Ng.forEach(o),Qd=i(ll,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ll.forEach(o),Yd=d(Uo),ct=s(Uo,"P",{});var Kr=r(ct);ec=i(Kr,"Configuration objects inherit from "),mr=s(Kr,"A",{href:!0});var Vg=r(mr);tc=i(Vg,"PretrainedConfig"),Vg.forEach(o),oc=i(Kr,` and can be used to control the model outputs. Read the
documentation from `),fr=s(Kr,"A",{href:!0});var Og=r(fr);nc=i(Og,"PretrainedConfig"),Og.forEach(o),sc=i(Kr," for more information."),Kr.forEach(o),rc=d(Uo),ro=s(Uo,"DIV",{class:!0});var Hl=r(ro);_(ln.$$.fragment,Hl),ac=d(Hl),dn=s(Hl,"P",{});var Kl=r(dn);ic=i(Kl,"Instantiate a "),ur=s(Kl,"A",{href:!0});var Sg=r(ur);lc=i(Sg,"CLIPConfig"),Sg.forEach(o),dc=i(Kl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Kl.forEach(o),Hl.forEach(o),Uo.forEach(o),ml=d(t),pt=s(t,"H2",{class:!0});var Gl=r(pt);ao=s(Gl,"A",{id:!0,class:!0,href:!0});var Wg=r(ao);_a=s(Wg,"SPAN",{});var Bg=r(_a);_(cn.$$.fragment,Bg),Bg.forEach(o),Wg.forEach(o),cc=d(Gl),va=s(Gl,"SPAN",{});var Ug=r(va);pc=i(Ug,"CLIPTextConfig"),Ug.forEach(o),Gl.forEach(o),fl=d(t),S=s(t,"DIV",{class:!0});var We=r(S);_(pn.$$.fragment,We),hc=d(We),ht=s(We,"P",{});var Gr=r(ht);mc=i(Gr,"This is the configuration class to store the configuration of a "),gr=s(Gr,"A",{href:!0});var Rg=r(gr);fc=i(Rg,"CLIPModel"),Rg.forEach(o),uc=i(Gr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),hn=s(Gr,"A",{href:!0,rel:!0});var Hg=r(hn);gc=i(Hg,"openai/clip-vit-base-patch32"),Hg.forEach(o),_c=i(Gr," architecture."),Gr.forEach(o),vc=d(We),mt=s(We,"P",{});var Jr=r(mt);Pc=i(Jr,"Configuration objects inherit from "),_r=s(Jr,"A",{href:!0});var Kg=r(_r);Ic=i(Kg,"PretrainedConfig"),Kg.forEach(o),Tc=i(Jr,` and can be used to control the model outputs. Read the
documentation from `),vr=s(Jr,"A",{href:!0});var Gg=r(vr);Cc=i(Gg,"PretrainedConfig"),Gg.forEach(o),bc=i(Jr," for more information."),Jr.forEach(o),yc=d(We),Pa=s(We,"P",{});var Jg=r(Pa);Lc=i(Jg,"Example:"),Jg.forEach(o),kc=d(We),_(mn.$$.fragment,We),We.forEach(o),ul=d(t),ft=s(t,"H2",{class:!0});var Jl=r(ft);io=s(Jl,"A",{id:!0,class:!0,href:!0});var Xg=r(io);Ia=s(Xg,"SPAN",{});var Zg=r(Ia);_(fn.$$.fragment,Zg),Zg.forEach(o),Xg.forEach(o),$c=d(Jl),Ta=s(Jl,"SPAN",{});var Qg=r(Ta);wc=i(Qg,"CLIPVisionConfig"),Qg.forEach(o),Jl.forEach(o),gl=d(t),W=s(t,"DIV",{class:!0});var Be=r(W);_(un.$$.fragment,Be),xc=d(Be),ut=s(Be,"P",{});var Xr=r(ut);Ec=i(Xr,"This is the configuration class to store the configuration of a "),Pr=s(Xr,"A",{href:!0});var Yg=r(Pr);zc=i(Yg,"CLIPModel"),Yg.forEach(o),jc=i(Xr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),gn=s(Xr,"A",{href:!0,rel:!0});var e_=r(gn);Mc=i(e_,"openai/clip-vit-base-patch32"),e_.forEach(o),Fc=i(Xr," architecture."),Xr.forEach(o),qc=d(Be),gt=s(Be,"P",{});var Zr=r(gt);Dc=i(Zr,"Configuration objects inherit from "),Ir=s(Zr,"A",{href:!0});var t_=r(Ir);Ac=i(t_,"PretrainedConfig"),t_.forEach(o),Nc=i(Zr,` and can be used to control the model outputs. Read the
documentation from `),Tr=s(Zr,"A",{href:!0});var o_=r(Tr);Vc=i(o_,"PretrainedConfig"),o_.forEach(o),Oc=i(Zr," for more information."),Zr.forEach(o),Sc=d(Be),Ca=s(Be,"P",{});var n_=r(Ca);Wc=i(n_,"Example:"),n_.forEach(o),Bc=d(Be),_(_n.$$.fragment,Be),Be.forEach(o),_l=d(t),_t=s(t,"H2",{class:!0});var Xl=r(_t);lo=s(Xl,"A",{id:!0,class:!0,href:!0});var s_=r(lo);ba=s(s_,"SPAN",{});var r_=r(ba);_(vn.$$.fragment,r_),r_.forEach(o),s_.forEach(o),Uc=d(Xl),ya=s(Xl,"SPAN",{});var a_=r(ya);Rc=i(a_,"CLIPTokenizer"),a_.forEach(o),Xl.forEach(o),vl=d(t),F=s(t,"DIV",{class:!0});var le=r(F);_(Pn.$$.fragment,le),Hc=d(le),La=s(le,"P",{});var i_=r(La);Kc=i(i_,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),i_.forEach(o),Gc=d(le),In=s(le,"P",{});var Zl=r(In);Jc=i(Zl,"This tokenizer inherits from "),Cr=s(Zl,"A",{href:!0});var l_=r(Cr);Xc=i(l_,"PreTrainedTokenizer"),l_.forEach(o),Zc=i(Zl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Zl.forEach(o),Qc=d(le),Ie=s(le,"DIV",{class:!0});var Ro=r(Ie);_(Tn.$$.fragment,Ro),Yc=d(Ro),ka=s(Ro,"P",{});var d_=r(ka);ep=i(d_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),d_.forEach(o),tp=d(Ro),$a=s(Ro,"UL",{});var c_=r($a);br=s(c_,"LI",{});var Pg=r(br);op=i(Pg,"single sequence: "),wa=s(Pg,"CODE",{});var p_=r(wa);np=i(p_,"<|startoftext|> X <|endoftext|>"),p_.forEach(o),Pg.forEach(o),c_.forEach(o),sp=d(Ro),xa=s(Ro,"P",{});var h_=r(xa);rp=i(h_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),h_.forEach(o),Ro.forEach(o),ap=d(le),co=s(le,"DIV",{class:!0});var Ql=r(co);_(Cn.$$.fragment,Ql),ip=d(Ql),bn=s(Ql,"P",{});var Yl=r(bn);lp=i(Yl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ea=s(Yl,"CODE",{});var m_=r(Ea);dp=i(m_,"prepare_for_model"),m_.forEach(o),cp=i(Yl," method."),Yl.forEach(o),Ql.forEach(o),pp=d(le),po=s(le,"DIV",{class:!0});var ed=r(po);_(yn.$$.fragment,ed),hp=d(ed),za=s(ed,"P",{});var f_=r(za);mp=i(f_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),f_.forEach(o),ed.forEach(o),fp=d(le),yr=s(le,"DIV",{class:!0});var u_=r(yr);_(Ln.$$.fragment,u_),u_.forEach(o),le.forEach(o),Pl=d(t),vt=s(t,"H2",{class:!0});var td=r(vt);ho=s(td,"A",{id:!0,class:!0,href:!0});var g_=r(ho);ja=s(g_,"SPAN",{});var __=r(ja);_(kn.$$.fragment,__),__.forEach(o),g_.forEach(o),up=d(td),Ma=s(td,"SPAN",{});var v_=r(Ma);gp=i(v_,"CLIPTokenizerFast"),v_.forEach(o),td.forEach(o),Il=d(t),B=s(t,"DIV",{class:!0});var Ue=r(B);_($n.$$.fragment,Ue),_p=d(Ue),wn=s(Ue,"P",{});var od=r(wn);vp=i(od,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Fa=s(od,"EM",{});var P_=r(Fa);Pp=i(P_,"tokenizers"),P_.forEach(o),Ip=i(od,` library). Based on byte-level
Byte-Pair-Encoding.`),od.forEach(o),Tp=d(Ue),xn=s(Ue,"P",{});var nd=r(xn);Cp=i(nd,"This tokenizer inherits from "),Lr=s(nd,"A",{href:!0});var I_=r(Lr);bp=i(I_,"PreTrainedTokenizerFast"),I_.forEach(o),yp=i(nd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),nd.forEach(o),Lp=d(Ue),Te=s(Ue,"DIV",{class:!0});var Ho=r(Te);_(En.$$.fragment,Ho),kp=d(Ho),qa=s(Ho,"P",{});var T_=r(qa);$p=i(T_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),T_.forEach(o),wp=d(Ho),Da=s(Ho,"UL",{});var C_=r(Da);kr=s(C_,"LI",{});var Ig=r(kr);xp=i(Ig,"single sequence: "),Aa=s(Ig,"CODE",{});var b_=r(Aa);Ep=i(b_,"<|startoftext|> X <|endoftext|>"),b_.forEach(o),Ig.forEach(o),C_.forEach(o),zp=d(Ho),Na=s(Ho,"P",{});var y_=r(Na);jp=i(y_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),y_.forEach(o),Ho.forEach(o),Mp=d(Ue),mo=s(Ue,"DIV",{class:!0});var sd=r(mo);_(zn.$$.fragment,sd),Fp=d(sd),Va=s(sd,"P",{});var L_=r(Va);qp=i(L_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),L_.forEach(o),sd.forEach(o),Ue.forEach(o),Tl=d(t),Pt=s(t,"H2",{class:!0});var rd=r(Pt);fo=s(rd,"A",{id:!0,class:!0,href:!0});var k_=r(fo);Oa=s(k_,"SPAN",{});var $_=r(Oa);_(jn.$$.fragment,$_),$_.forEach(o),k_.forEach(o),Dp=d(rd),Sa=s(rd,"SPAN",{});var w_=r(Sa);Ap=i(w_,"CLIPFeatureExtractor"),w_.forEach(o),rd.forEach(o),Cl=d(t),V=s(t,"DIV",{class:!0});var Ce=r(V);_(Mn.$$.fragment,Ce),Np=d(Ce),Wa=s(Ce,"P",{});var x_=r(Wa);Vp=i(x_,"Constructs a CLIP feature extractor."),x_.forEach(o),Op=d(Ce),Fn=s(Ce,"P",{});var ad=r(Fn);Sp=i(ad,"This feature extractor inherits from "),$r=s(ad,"A",{href:!0});var E_=r($r);Wp=i(E_,"FeatureExtractionMixin"),E_.forEach(o),Bp=i(ad,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ad.forEach(o),Up=d(Ce),uo=s(Ce,"DIV",{class:!0});var id=r(uo);_(qn.$$.fragment,id),Rp=d(id),Dn=s(id,"P",{});var ld=r(Dn);Hp=i(ld,"Crops "),Ba=s(ld,"CODE",{});var z_=r(Ba);Kp=i(z_,"image"),z_.forEach(o),Gp=i(ld,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),ld.forEach(o),id.forEach(o),Jp=d(Ce),go=s(Ce,"DIV",{class:!0});var dd=r(go);_(An.$$.fragment,dd),Xp=d(dd),It=s(dd,"P",{});var Qr=r(It);Zp=i(Qr,"Converts "),Ua=s(Qr,"CODE",{});var j_=r(Ua);Qp=i(j_,"image"),j_.forEach(o),Yp=i(Qr," to RGB format. Note that this will trigger a conversion of "),Ra=s(Qr,"CODE",{});var M_=r(Ra);eh=i(M_,"image"),M_.forEach(o),th=i(Qr," to a PIL Image."),Qr.forEach(o),dd.forEach(o),oh=d(Ce),_o=s(Ce,"DIV",{class:!0});var cd=r(_o);_(Nn.$$.fragment,cd),nh=d(cd),Tt=s(cd,"P",{});var Yr=r(Tt);sh=i(Yr,"Resizes "),Ha=s(Yr,"CODE",{});var F_=r(Ha);rh=i(F_,"image"),F_.forEach(o),ah=i(Yr,". Note that this will trigger a conversion of "),Ka=s(Yr,"CODE",{});var q_=r(Ka);ih=i(q_,"image"),q_.forEach(o),lh=i(Yr," to a PIL Image."),Yr.forEach(o),cd.forEach(o),Ce.forEach(o),bl=d(t),Ct=s(t,"H2",{class:!0});var pd=r(Ct);vo=s(pd,"A",{id:!0,class:!0,href:!0});var D_=r(vo);Ga=s(D_,"SPAN",{});var A_=r(Ga);_(Vn.$$.fragment,A_),A_.forEach(o),D_.forEach(o),dh=d(pd),Ja=s(pd,"SPAN",{});var N_=r(Ja);ch=i(N_,"CLIPProcessor"),N_.forEach(o),pd.forEach(o),yl=d(t),U=s(t,"DIV",{class:!0});var Re=r(U);_(On.$$.fragment,Re),ph=d(Re),Xa=s(Re,"P",{});var V_=r(Xa);hh=i(V_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),V_.forEach(o),mh=d(Re),K=s(Re,"P",{});var je=r(K);wr=s(je,"A",{href:!0});var O_=r(wr);fh=i(O_,"CLIPProcessor"),O_.forEach(o),uh=i(je," offers all the functionalities of "),xr=s(je,"A",{href:!0});var S_=r(xr);gh=i(S_,"CLIPFeatureExtractor"),S_.forEach(o),_h=i(je," and "),Er=s(je,"A",{href:!0});var W_=r(Er);vh=i(W_,"CLIPTokenizer"),W_.forEach(o),Ph=i(je,`. See the
`),Za=s(je,"CODE",{});var B_=r(Za);Ih=i(B_,"__call__()"),B_.forEach(o),Th=i(je,"and "),zr=s(je,"A",{href:!0});var U_=r(zr);Ch=i(U_,"decode()"),U_.forEach(o),bh=i(je," for more information."),je.forEach(o),yh=d(Re),Po=s(Re,"DIV",{class:!0});var hd=r(Po);_(Sn.$$.fragment,hd),Lh=d(hd),Wn=s(hd,"P",{});var md=r(Wn);kh=i(md,"This method forwards all its arguments to CLIPTokenizer\u2019s "),jr=s(md,"A",{href:!0});var R_=r(jr);$h=i(R_,"batch_decode()"),R_.forEach(o),wh=i(md,`. Please refer
to the docstring of this method for more information.`),md.forEach(o),hd.forEach(o),xh=d(Re),Io=s(Re,"DIV",{class:!0});var fd=r(Io);_(Bn.$$.fragment,fd),Eh=d(fd),Un=s(fd,"P",{});var ud=r(Un);zh=i(ud,"This method forwards all its arguments to CLIPTokenizer\u2019s "),Mr=s(ud,"A",{href:!0});var H_=r(Mr);jh=i(H_,"decode()"),H_.forEach(o),Mh=i(ud,`. Please refer to the
docstring of this method for more information.`),ud.forEach(o),fd.forEach(o),Re.forEach(o),Ll=d(t),bt=s(t,"H2",{class:!0});var gd=r(bt);To=s(gd,"A",{id:!0,class:!0,href:!0});var K_=r(To);Qa=s(K_,"SPAN",{});var G_=r(Qa);_(Rn.$$.fragment,G_),G_.forEach(o),K_.forEach(o),Fh=d(gd),Ya=s(gd,"SPAN",{});var J_=r(Ya);qh=i(J_,"CLIPModel"),J_.forEach(o),gd.forEach(o),kl=d(t),R=s(t,"DIV",{class:!0});var He=r(R);_(Hn.$$.fragment,He),Dh=d(He),Kn=s(He,"P",{});var _d=r(Kn);Ah=i(_d,"This model is a PyTorch "),Gn=s(_d,"A",{href:!0,rel:!0});var X_=r(Gn);Nh=i(X_,"torch.nn.Module"),X_.forEach(o),Vh=i(_d,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Oh=d(He),G=s(He,"DIV",{class:!0});var Ke=r(G);_(Jn.$$.fragment,Ke),Sh=d(Ke),yt=s(Ke,"P",{});var ea=r(yt);Wh=i(ea,"The "),Fr=s(ea,"A",{href:!0});var Z_=r(Fr);Bh=i(Z_,"CLIPModel"),Z_.forEach(o),Uh=i(ea," forward method, overrides the "),ei=s(ea,"CODE",{});var Q_=r(ei);Rh=i(Q_,"__call__"),Q_.forEach(o),Hh=i(ea," special method."),ea.forEach(o),Kh=d(Ke),_(Co.$$.fragment,Ke),Gh=d(Ke),ti=s(Ke,"P",{});var Y_=r(ti);Jh=i(Y_,"Examples:"),Y_.forEach(o),Xh=d(Ke),_(Xn.$$.fragment,Ke),Ke.forEach(o),Zh=d(He),J=s(He,"DIV",{class:!0});var Ge=r(J);_(Zn.$$.fragment,Ge),Qh=d(Ge),Lt=s(Ge,"P",{});var ta=r(Lt);Yh=i(ta,"The "),qr=s(ta,"A",{href:!0});var ev=r(qr);em=i(ev,"CLIPModel"),ev.forEach(o),tm=i(ta," forward method, overrides the "),oi=s(ta,"CODE",{});var tv=r(oi);om=i(tv,"__call__"),tv.forEach(o),nm=i(ta," special method."),ta.forEach(o),sm=d(Ge),_(bo.$$.fragment,Ge),rm=d(Ge),ni=s(Ge,"P",{});var ov=r(ni);am=i(ov,"Examples:"),ov.forEach(o),im=d(Ge),_(Qn.$$.fragment,Ge),Ge.forEach(o),lm=d(He),X=s(He,"DIV",{class:!0});var Je=r(X);_(Yn.$$.fragment,Je),dm=d(Je),kt=s(Je,"P",{});var oa=r(kt);cm=i(oa,"The "),Dr=s(oa,"A",{href:!0});var nv=r(Dr);pm=i(nv,"CLIPModel"),nv.forEach(o),hm=i(oa," forward method, overrides the "),si=s(oa,"CODE",{});var sv=r(si);mm=i(sv,"__call__"),sv.forEach(o),fm=i(oa," special method."),oa.forEach(o),um=d(Je),_(yo.$$.fragment,Je),gm=d(Je),ri=s(Je,"P",{});var rv=r(ri);_m=i(rv,"Examples:"),rv.forEach(o),vm=d(Je),_(es.$$.fragment,Je),Je.forEach(o),He.forEach(o),$l=d(t),$t=s(t,"H2",{class:!0});var vd=r($t);Lo=s(vd,"A",{id:!0,class:!0,href:!0});var av=r(Lo);ai=s(av,"SPAN",{});var iv=r(ai);_(ts.$$.fragment,iv),iv.forEach(o),av.forEach(o),Pm=d(vd),ii=s(vd,"SPAN",{});var lv=r(ii);Im=i(lv,"CLIPTextModel"),lv.forEach(o),vd.forEach(o),wl=d(t),wt=s(t,"DIV",{class:!0});var Pd=r(wt);_(os.$$.fragment,Pd),Tm=d(Pd),Z=s(Pd,"DIV",{class:!0});var Xe=r(Z);_(ns.$$.fragment,Xe),Cm=d(Xe),xt=s(Xe,"P",{});var na=r(xt);bm=i(na,"The "),Ar=s(na,"A",{href:!0});var dv=r(Ar);ym=i(dv,"CLIPTextModel"),dv.forEach(o),Lm=i(na," forward method, overrides the "),li=s(na,"CODE",{});var cv=r(li);km=i(cv,"__call__"),cv.forEach(o),$m=i(na," special method."),na.forEach(o),wm=d(Xe),_(ko.$$.fragment,Xe),xm=d(Xe),di=s(Xe,"P",{});var pv=r(di);Em=i(pv,"Examples:"),pv.forEach(o),zm=d(Xe),_(ss.$$.fragment,Xe),Xe.forEach(o),Pd.forEach(o),xl=d(t),Et=s(t,"H2",{class:!0});var Id=r(Et);$o=s(Id,"A",{id:!0,class:!0,href:!0});var hv=r($o);ci=s(hv,"SPAN",{});var mv=r(ci);_(rs.$$.fragment,mv),mv.forEach(o),hv.forEach(o),jm=d(Id),pi=s(Id,"SPAN",{});var fv=r(pi);Mm=i(fv,"CLIPVisionModel"),fv.forEach(o),Id.forEach(o),El=d(t),zt=s(t,"DIV",{class:!0});var Td=r(zt);_(as.$$.fragment,Td),Fm=d(Td),Q=s(Td,"DIV",{class:!0});var Ze=r(Q);_(is.$$.fragment,Ze),qm=d(Ze),jt=s(Ze,"P",{});var sa=r(jt);Dm=i(sa,"The "),Nr=s(sa,"A",{href:!0});var uv=r(Nr);Am=i(uv,"CLIPVisionModel"),uv.forEach(o),Nm=i(sa," forward method, overrides the "),hi=s(sa,"CODE",{});var gv=r(hi);Vm=i(gv,"__call__"),gv.forEach(o),Om=i(sa," special method."),sa.forEach(o),Sm=d(Ze),_(wo.$$.fragment,Ze),Wm=d(Ze),mi=s(Ze,"P",{});var _v=r(mi);Bm=i(_v,"Examples:"),_v.forEach(o),Um=d(Ze),_(ls.$$.fragment,Ze),Ze.forEach(o),Td.forEach(o),zl=d(t),Mt=s(t,"H2",{class:!0});var Cd=r(Mt);xo=s(Cd,"A",{id:!0,class:!0,href:!0});var vv=r(xo);fi=s(vv,"SPAN",{});var Pv=r(fi);_(ds.$$.fragment,Pv),Pv.forEach(o),vv.forEach(o),Rm=d(Cd),ui=s(Cd,"SPAN",{});var Iv=r(ui);Hm=i(Iv,"TFCLIPModel"),Iv.forEach(o),Cd.forEach(o),jl=d(t),q=s(t,"DIV",{class:!0});var de=r(q);_(cs.$$.fragment,de),Km=d(de),ps=s(de,"P",{});var bd=r(ps);Gm=i(bd,"This model inherits from "),Vr=s(bd,"A",{href:!0});var Tv=r(Vr);Jm=i(Tv,"TFPreTrainedModel"),Tv.forEach(o),Xm=i(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd.forEach(o),Zm=d(de),hs=s(de,"P",{});var yd=r(hs);Qm=i(yd,"This model is also a "),ms=s(yd,"A",{href:!0,rel:!0});var Cv=r(ms);Ym=i(Cv,"tf.keras.Model"),Cv.forEach(o),ef=i(yd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yd.forEach(o),tf=d(de),_(Eo.$$.fragment,de),of=d(de),Y=s(de,"DIV",{class:!0});var Qe=r(Y);_(fs.$$.fragment,Qe),nf=d(Qe),Ft=s(Qe,"P",{});var ra=r(Ft);sf=i(ra,"The "),Or=s(ra,"A",{href:!0});var bv=r(Or);rf=i(bv,"TFCLIPModel"),bv.forEach(o),af=i(ra," forward method, overrides the "),gi=s(ra,"CODE",{});var yv=r(gi);lf=i(yv,"__call__"),yv.forEach(o),df=i(ra," special method."),ra.forEach(o),cf=d(Qe),_(zo.$$.fragment,Qe),pf=d(Qe),_i=s(Qe,"P",{});var Lv=r(_i);hf=i(Lv,"Examples:"),Lv.forEach(o),mf=d(Qe),_(us.$$.fragment,Qe),Qe.forEach(o),ff=d(de),ee=s(de,"DIV",{class:!0});var Ye=r(ee);_(gs.$$.fragment,Ye),uf=d(Ye),qt=s(Ye,"P",{});var aa=r(qt);gf=i(aa,"The "),Sr=s(aa,"A",{href:!0});var kv=r(Sr);_f=i(kv,"TFCLIPModel"),kv.forEach(o),vf=i(aa," forward method, overrides the "),vi=s(aa,"CODE",{});var $v=r(vi);Pf=i($v,"__call__"),$v.forEach(o),If=i(aa," special method."),aa.forEach(o),Tf=d(Ye),_(jo.$$.fragment,Ye),Cf=d(Ye),Pi=s(Ye,"P",{});var wv=r(Pi);bf=i(wv,"Examples:"),wv.forEach(o),yf=d(Ye),_(_s.$$.fragment,Ye),Ye.forEach(o),Lf=d(de),te=s(de,"DIV",{class:!0});var et=r(te);_(vs.$$.fragment,et),kf=d(et),Dt=s(et,"P",{});var ia=r(Dt);$f=i(ia,"The "),Wr=s(ia,"A",{href:!0});var xv=r(Wr);wf=i(xv,"TFCLIPModel"),xv.forEach(o),xf=i(ia," forward method, overrides the "),Ii=s(ia,"CODE",{});var Ev=r(Ii);Ef=i(Ev,"__call__"),Ev.forEach(o),zf=i(ia," special method."),ia.forEach(o),jf=d(et),_(Mo.$$.fragment,et),Mf=d(et),Ti=s(et,"P",{});var zv=r(Ti);Ff=i(zv,"Examples:"),zv.forEach(o),qf=d(et),_(Ps.$$.fragment,et),et.forEach(o),de.forEach(o),Ml=d(t),At=s(t,"H2",{class:!0});var Ld=r(At);Fo=s(Ld,"A",{id:!0,class:!0,href:!0});var jv=r(Fo);Ci=s(jv,"SPAN",{});var Mv=r(Ci);_(Is.$$.fragment,Mv),Mv.forEach(o),jv.forEach(o),Df=d(Ld),bi=s(Ld,"SPAN",{});var Fv=r(bi);Af=i(Fv,"TFCLIPTextModel"),Fv.forEach(o),Ld.forEach(o),Fl=d(t),Nt=s(t,"DIV",{class:!0});var kd=r(Nt);_(Ts.$$.fragment,kd),Nf=d(kd),oe=s(kd,"DIV",{class:!0});var tt=r(oe);_(Cs.$$.fragment,tt),Vf=d(tt),Vt=s(tt,"P",{});var la=r(Vt);Of=i(la,"The "),Br=s(la,"A",{href:!0});var qv=r(Br);Sf=i(qv,"TFCLIPTextModel"),qv.forEach(o),Wf=i(la," forward method, overrides the "),yi=s(la,"CODE",{});var Dv=r(yi);Bf=i(Dv,"__call__"),Dv.forEach(o),Uf=i(la," special method."),la.forEach(o),Rf=d(tt),_(qo.$$.fragment,tt),Hf=d(tt),Li=s(tt,"P",{});var Av=r(Li);Kf=i(Av,"Examples:"),Av.forEach(o),Gf=d(tt),_(bs.$$.fragment,tt),tt.forEach(o),kd.forEach(o),ql=d(t),Ot=s(t,"H2",{class:!0});var $d=r(Ot);Do=s($d,"A",{id:!0,class:!0,href:!0});var Nv=r(Do);ki=s(Nv,"SPAN",{});var Vv=r(ki);_(ys.$$.fragment,Vv),Vv.forEach(o),Nv.forEach(o),Jf=d($d),$i=s($d,"SPAN",{});var Ov=r($i);Xf=i(Ov,"TFCLIPVisionModel"),Ov.forEach(o),$d.forEach(o),Dl=d(t),St=s(t,"DIV",{class:!0});var wd=r(St);_(Ls.$$.fragment,wd),Zf=d(wd),ne=s(wd,"DIV",{class:!0});var ot=r(ne);_(ks.$$.fragment,ot),Qf=d(ot),Wt=s(ot,"P",{});var da=r(Wt);Yf=i(da,"The "),Ur=s(da,"A",{href:!0});var Sv=r(Ur);eu=i(Sv,"TFCLIPVisionModel"),Sv.forEach(o),tu=i(da," forward method, overrides the "),wi=s(da,"CODE",{});var Wv=r(wi);ou=i(Wv,"__call__"),Wv.forEach(o),nu=i(da," special method."),da.forEach(o),su=d(ot),_(Ao.$$.fragment,ot),ru=d(ot),xi=s(ot,"P",{});var Bv=r(xi);au=i(Bv,"Examples:"),Bv.forEach(o),iu=d(ot),_($s.$$.fragment,ot),ot.forEach(o),wd.forEach(o),Al=d(t),Bt=s(t,"H2",{class:!0});var xd=r(Bt);No=s(xd,"A",{id:!0,class:!0,href:!0});var Uv=r(No);Ei=s(Uv,"SPAN",{});var Rv=r(Ei);_(ws.$$.fragment,Rv),Rv.forEach(o),Uv.forEach(o),lu=d(xd),zi=s(xd,"SPAN",{});var Hv=r(zi);du=i(Hv,"FlaxCLIPModel"),Hv.forEach(o),xd.forEach(o),Nl=d(t),z=s(t,"DIV",{class:!0});var O=r(z);_(xs.$$.fragment,O),cu=d(O),Es=s(O,"P",{});var Ed=r(Es);pu=i(Ed,"This model inherits from "),Rr=s(Ed,"A",{href:!0});var Kv=r(Rr);hu=i(Kv,"FlaxPreTrainedModel"),Kv.forEach(o),mu=i(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ed.forEach(o),fu=d(O),zs=s(O,"P",{});var zd=r(zs);uu=i(zd,"This model is also a Flax Linen "),js=s(zd,"A",{href:!0,rel:!0});var Gv=r(js);gu=i(Gv,"flax.linen.Module"),Gv.forEach(o),_u=i(zd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zd.forEach(o),vu=d(O),ji=s(O,"P",{});var Jv=r(ji);Pu=i(Jv,"Finally, this model supports inherent JAX features such as:"),Jv.forEach(o),Iu=d(O),ze=s(O,"UL",{});var Ko=r(ze);Mi=s(Ko,"LI",{});var Xv=r(Mi);Ms=s(Xv,"A",{href:!0,rel:!0});var Zv=r(Ms);Tu=i(Zv,"Just-In-Time (JIT) compilation"),Zv.forEach(o),Xv.forEach(o),Cu=d(Ko),Fi=s(Ko,"LI",{});var Qv=r(Fi);Fs=s(Qv,"A",{href:!0,rel:!0});var Yv=r(Fs);bu=i(Yv,"Automatic Differentiation"),Yv.forEach(o),Qv.forEach(o),yu=d(Ko),qi=s(Ko,"LI",{});var eP=r(qi);qs=s(eP,"A",{href:!0,rel:!0});var tP=r(qs);Lu=i(tP,"Vectorization"),tP.forEach(o),eP.forEach(o),ku=d(Ko),Di=s(Ko,"LI",{});var oP=r(Di);Ds=s(oP,"A",{href:!0,rel:!0});var nP=r(Ds);$u=i(nP,"Parallelization"),nP.forEach(o),oP.forEach(o),Ko.forEach(o),wu=d(O),se=s(O,"DIV",{class:!0});var nt=r(se);_(As.$$.fragment,nt),xu=d(nt),Ut=s(nt,"P",{});var ca=r(Ut);Eu=i(ca,"The "),Ai=s(ca,"CODE",{});var sP=r(Ai);zu=i(sP,"FlaxCLIPPreTrainedModel"),sP.forEach(o),ju=i(ca,"forward method, overrides the "),Ni=s(ca,"CODE",{});var rP=r(Ni);Mu=i(rP,"__call__"),rP.forEach(o),Fu=i(ca," special method."),ca.forEach(o),qu=d(nt),_(Vo.$$.fragment,nt),Du=d(nt),Vi=s(nt,"P",{});var aP=r(Vi);Au=i(aP,"Example:"),aP.forEach(o),Nu=d(nt),_(Ns.$$.fragment,nt),nt.forEach(o),Vu=d(O),Oe=s(O,"DIV",{class:!0});var pa=r(Oe);_(Vs.$$.fragment,pa),Ou=d(pa),Oi=s(pa,"P",{});var iP=r(Oi);Su=i(iP,"Examples:"),iP.forEach(o),Wu=d(pa),_(Os.$$.fragment,pa),pa.forEach(o),Bu=d(O),Se=s(O,"DIV",{class:!0});var ha=r(Se);_(Ss.$$.fragment,ha),Uu=d(ha),Si=s(ha,"P",{});var lP=r(Si);Ru=i(lP,"Examples:"),lP.forEach(o),Hu=d(ha),_(Ws.$$.fragment,ha),ha.forEach(o),O.forEach(o),Vl=d(t),Rt=s(t,"H2",{class:!0});var jd=r(Rt);Oo=s(jd,"A",{id:!0,class:!0,href:!0});var dP=r(Oo);Wi=s(dP,"SPAN",{});var cP=r(Wi);_(Bs.$$.fragment,cP),cP.forEach(o),dP.forEach(o),Ku=d(jd),Bi=s(jd,"SPAN",{});var pP=r(Bi);Gu=i(pP,"FlaxCLIPTextModel"),pP.forEach(o),jd.forEach(o),Ol=d(t),Ht=s(t,"DIV",{class:!0});var Md=r(Ht);_(Us.$$.fragment,Md),Ju=d(Md),re=s(Md,"DIV",{class:!0});var st=r(re);_(Rs.$$.fragment,st),Xu=d(st),Kt=s(st,"P",{});var ma=r(Kt);Zu=i(ma,"The "),Ui=s(ma,"CODE",{});var hP=r(Ui);Qu=i(hP,"FlaxCLIPTextPreTrainedModel"),hP.forEach(o),Yu=i(ma,"forward method, overrides the "),Ri=s(ma,"CODE",{});var mP=r(Ri);eg=i(mP,"__call__"),mP.forEach(o),tg=i(ma," special method."),ma.forEach(o),og=d(st),_(So.$$.fragment,st),ng=d(st),Hi=s(st,"P",{});var fP=r(Hi);sg=i(fP,"Example:"),fP.forEach(o),rg=d(st),_(Hs.$$.fragment,st),st.forEach(o),Md.forEach(o),Sl=d(t),Gt=s(t,"H2",{class:!0});var Fd=r(Gt);Wo=s(Fd,"A",{id:!0,class:!0,href:!0});var uP=r(Wo);Ki=s(uP,"SPAN",{});var gP=r(Ki);_(Ks.$$.fragment,gP),gP.forEach(o),uP.forEach(o),ag=d(Fd),Gi=s(Fd,"SPAN",{});var _P=r(Gi);ig=i(_P,"FlaxCLIPVisionModel"),_P.forEach(o),Fd.forEach(o),Wl=d(t),Jt=s(t,"DIV",{class:!0});var qd=r(Jt);_(Gs.$$.fragment,qd),lg=d(qd),ae=s(qd,"DIV",{class:!0});var rt=r(ae);_(Js.$$.fragment,rt),dg=d(rt),Xt=s(rt,"P",{});var fa=r(Xt);cg=i(fa,"The "),Ji=s(fa,"CODE",{});var vP=r(Ji);pg=i(vP,"FlaxCLIPVisionPreTrainedModel"),vP.forEach(o),hg=i(fa,"forward method, overrides the "),Xi=s(fa,"CODE",{});var PP=r(Xi);mg=i(PP,"__call__"),PP.forEach(o),fg=i(fa," special method."),fa.forEach(o),ug=d(rt),_(Bo.$$.fragment,rt),gg=d(rt),Zi=s(rt,"P",{});var IP=r(Zi);_g=i(IP,"Example:"),IP.forEach(o),vg=d(rt),_(Xs.$$.fragment,rt),rt.forEach(o),qd.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(OP)),c(b,"id","clip"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#clip"),c(u,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(j,"class","relative group"),c(ke,"href","https://arxiv.org/abs/2103.00020"),c(ke,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(A,"class","relative group"),c(M,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Ne,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer"),c(dr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPProcessor"),c(cr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel"),c(nn,"href","https://huggingface.co/valhalla"),c(nn,"rel","nofollow"),c(sn,"href","https://github.com/openai/CLIP"),c(sn,"rel","nofollow"),c(no,"id","transformers.CLIPConfig"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(pr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPConfig"),c(hr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel"),c(mr,"href","/docs/transformers/pr_15886/en/main_classes/configuration#transformers.PretrainedConfig"),c(fr,"href","/docs/transformers/pr_15886/en/main_classes/configuration#transformers.PretrainedConfig"),c(ur,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPConfig"),c(ro,"class","docstring"),c(fe,"class","docstring"),c(ao,"id","transformers.CLIPTextConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(gr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel"),c(hn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(hn,"rel","nofollow"),c(_r,"href","/docs/transformers/pr_15886/en/main_classes/configuration#transformers.PretrainedConfig"),c(vr,"href","/docs/transformers/pr_15886/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(io,"id","transformers.CLIPVisionConfig"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(Pr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel"),c(gn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(gn,"rel","nofollow"),c(Ir,"href","/docs/transformers/pr_15886/en/main_classes/configuration#transformers.PretrainedConfig"),c(Tr,"href","/docs/transformers/pr_15886/en/main_classes/configuration#transformers.PretrainedConfig"),c(W,"class","docstring"),c(lo,"id","transformers.CLIPTokenizer"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(Cr,"href","/docs/transformers/pr_15886/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Ie,"class","docstring"),c(co,"class","docstring"),c(po,"class","docstring"),c(yr,"class","docstring"),c(F,"class","docstring"),c(ho,"id","transformers.CLIPTokenizerFast"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(Lr,"href","/docs/transformers/pr_15886/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Te,"class","docstring"),c(mo,"class","docstring"),c(B,"class","docstring"),c(fo,"id","transformers.CLIPFeatureExtractor"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c($r,"href","/docs/transformers/pr_15886/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(uo,"class","docstring"),c(go,"class","docstring"),c(_o,"class","docstring"),c(V,"class","docstring"),c(vo,"id","transformers.CLIPProcessor"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.CLIPProcessor"),c(Ct,"class","relative group"),c(wr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPProcessor"),c(xr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Er,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTokenizer"),c(zr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(jr,"href","/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(Po,"class","docstring"),c(Mr,"href","/docs/transformers/pr_15886/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(Io,"class","docstring"),c(U,"class","docstring"),c(To,"id","transformers.CLIPModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.CLIPModel"),c(bt,"class","relative group"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(Fr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(qr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(Dr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(Lo,"id","transformers.CLIPTextModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPTextModel"),c($t,"class","relative group"),c(Ar,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c(wt,"class","docstring"),c($o,"id","transformers.CLIPVisionModel"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.CLIPVisionModel"),c(Et,"class","relative group"),c(Nr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(zt,"class","docstring"),c(xo,"id","transformers.TFCLIPModel"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFCLIPModel"),c(Mt,"class","relative group"),c(Vr,"href","/docs/transformers/pr_15886/en/main_classes/model#transformers.TFPreTrainedModel"),c(ms,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ms,"rel","nofollow"),c(Or,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Sr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(Wr,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(Fo,"id","transformers.TFCLIPTextModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPTextModel"),c(At,"class","relative group"),c(Br,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(Nt,"class","docstring"),c(Do,"id","transformers.TFCLIPVisionModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFCLIPVisionModel"),c(Ot,"class","relative group"),c(Ur,"href","/docs/transformers/pr_15886/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(ne,"class","docstring"),c(St,"class","docstring"),c(No,"id","transformers.FlaxCLIPModel"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxCLIPModel"),c(Bt,"class","relative group"),c(Rr,"href","/docs/transformers/pr_15886/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(js,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(js,"rel","nofollow"),c(Ms,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ms,"rel","nofollow"),c(Fs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Fs,"rel","nofollow"),c(qs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(qs,"rel","nofollow"),c(Ds,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ds,"rel","nofollow"),c(se,"class","docstring"),c(Oe,"class","docstring"),c(Se,"class","docstring"),c(z,"class","docstring"),c(Oo,"id","transformers.FlaxCLIPTextModel"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxCLIPTextModel"),c(Rt,"class","relative group"),c(re,"class","docstring"),c(Ht,"class","docstring"),c(Wo,"id","transformers.FlaxCLIPVisionModel"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.FlaxCLIPVisionModel"),c(Gt,"class","relative group"),c(ae,"class","docstring"),c(Jt,"class","docstring")},m(t,h){e(document.head,p),m(t,L,h),m(t,u,h),e(u,b),e(b,y),v(C,y,null),e(u,f),e(u,k),e(k,Go),m(t,at,h),m(t,j,h),e(j,ue),e(ue,be),v(ye,be,null),e(j,Jo),e(j,Le),e(Le,Xo),m(t,Zt,h),m(t,pe,h),e(pe,Me),e(pe,ke),e(ke,Qt),e(pe,H),m(t,he,h),m(t,Fe,h),e(Fe,it),m(t,Yt,h),m(t,qe,h),e(qe,$e),e($e,Zo),m(t,eo,h),m(t,A,h),e(A,ge),e(ge,we),v(xe,we,null),e(A,Qo),e(A,Ee),e(Ee,Yo),m(t,to,h),m(t,me,h),e(me,en),m(t,De,h),m(t,_e,h),e(_e,w),e(_e,M),e(M,oo),e(_e,tr),m(t,tn,h),m(t,E,h),e(E,or),e(E,lt),e(lt,nr),e(E,Ae),e(E,ve),e(ve,sr),e(E,rr),e(E,Pe),e(Pe,ar),e(E,ir),e(E,Ne),e(Ne,lr),e(E,Dd),e(E,dr),e(dr,Ad),e(E,Nd),e(E,cr),e(cr,Vd),e(E,Od),m(t,dl,h),v(on,t,h),m(t,cl,h),m(t,Ve,h),e(Ve,Sd),e(Ve,nn),e(nn,Wd),e(Ve,Bd),e(Ve,sn),e(sn,Ud),e(Ve,Rd),m(t,pl,h),m(t,dt,h),e(dt,no),e(no,ua),v(rn,ua,null),e(dt,Hd),e(dt,ga),e(ga,Kd),m(t,hl,h),m(t,fe,h),v(an,fe,null),e(fe,Gd),e(fe,so),e(so,pr),e(pr,Jd),e(so,Xd),e(so,hr),e(hr,Zd),e(so,Qd),e(fe,Yd),e(fe,ct),e(ct,ec),e(ct,mr),e(mr,tc),e(ct,oc),e(ct,fr),e(fr,nc),e(ct,sc),e(fe,rc),e(fe,ro),v(ln,ro,null),e(ro,ac),e(ro,dn),e(dn,ic),e(dn,ur),e(ur,lc),e(dn,dc),m(t,ml,h),m(t,pt,h),e(pt,ao),e(ao,_a),v(cn,_a,null),e(pt,cc),e(pt,va),e(va,pc),m(t,fl,h),m(t,S,h),v(pn,S,null),e(S,hc),e(S,ht),e(ht,mc),e(ht,gr),e(gr,fc),e(ht,uc),e(ht,hn),e(hn,gc),e(ht,_c),e(S,vc),e(S,mt),e(mt,Pc),e(mt,_r),e(_r,Ic),e(mt,Tc),e(mt,vr),e(vr,Cc),e(mt,bc),e(S,yc),e(S,Pa),e(Pa,Lc),e(S,kc),v(mn,S,null),m(t,ul,h),m(t,ft,h),e(ft,io),e(io,Ia),v(fn,Ia,null),e(ft,$c),e(ft,Ta),e(Ta,wc),m(t,gl,h),m(t,W,h),v(un,W,null),e(W,xc),e(W,ut),e(ut,Ec),e(ut,Pr),e(Pr,zc),e(ut,jc),e(ut,gn),e(gn,Mc),e(ut,Fc),e(W,qc),e(W,gt),e(gt,Dc),e(gt,Ir),e(Ir,Ac),e(gt,Nc),e(gt,Tr),e(Tr,Vc),e(gt,Oc),e(W,Sc),e(W,Ca),e(Ca,Wc),e(W,Bc),v(_n,W,null),m(t,_l,h),m(t,_t,h),e(_t,lo),e(lo,ba),v(vn,ba,null),e(_t,Uc),e(_t,ya),e(ya,Rc),m(t,vl,h),m(t,F,h),v(Pn,F,null),e(F,Hc),e(F,La),e(La,Kc),e(F,Gc),e(F,In),e(In,Jc),e(In,Cr),e(Cr,Xc),e(In,Zc),e(F,Qc),e(F,Ie),v(Tn,Ie,null),e(Ie,Yc),e(Ie,ka),e(ka,ep),e(Ie,tp),e(Ie,$a),e($a,br),e(br,op),e(br,wa),e(wa,np),e(Ie,sp),e(Ie,xa),e(xa,rp),e(F,ap),e(F,co),v(Cn,co,null),e(co,ip),e(co,bn),e(bn,lp),e(bn,Ea),e(Ea,dp),e(bn,cp),e(F,pp),e(F,po),v(yn,po,null),e(po,hp),e(po,za),e(za,mp),e(F,fp),e(F,yr),v(Ln,yr,null),m(t,Pl,h),m(t,vt,h),e(vt,ho),e(ho,ja),v(kn,ja,null),e(vt,up),e(vt,Ma),e(Ma,gp),m(t,Il,h),m(t,B,h),v($n,B,null),e(B,_p),e(B,wn),e(wn,vp),e(wn,Fa),e(Fa,Pp),e(wn,Ip),e(B,Tp),e(B,xn),e(xn,Cp),e(xn,Lr),e(Lr,bp),e(xn,yp),e(B,Lp),e(B,Te),v(En,Te,null),e(Te,kp),e(Te,qa),e(qa,$p),e(Te,wp),e(Te,Da),e(Da,kr),e(kr,xp),e(kr,Aa),e(Aa,Ep),e(Te,zp),e(Te,Na),e(Na,jp),e(B,Mp),e(B,mo),v(zn,mo,null),e(mo,Fp),e(mo,Va),e(Va,qp),m(t,Tl,h),m(t,Pt,h),e(Pt,fo),e(fo,Oa),v(jn,Oa,null),e(Pt,Dp),e(Pt,Sa),e(Sa,Ap),m(t,Cl,h),m(t,V,h),v(Mn,V,null),e(V,Np),e(V,Wa),e(Wa,Vp),e(V,Op),e(V,Fn),e(Fn,Sp),e(Fn,$r),e($r,Wp),e(Fn,Bp),e(V,Up),e(V,uo),v(qn,uo,null),e(uo,Rp),e(uo,Dn),e(Dn,Hp),e(Dn,Ba),e(Ba,Kp),e(Dn,Gp),e(V,Jp),e(V,go),v(An,go,null),e(go,Xp),e(go,It),e(It,Zp),e(It,Ua),e(Ua,Qp),e(It,Yp),e(It,Ra),e(Ra,eh),e(It,th),e(V,oh),e(V,_o),v(Nn,_o,null),e(_o,nh),e(_o,Tt),e(Tt,sh),e(Tt,Ha),e(Ha,rh),e(Tt,ah),e(Tt,Ka),e(Ka,ih),e(Tt,lh),m(t,bl,h),m(t,Ct,h),e(Ct,vo),e(vo,Ga),v(Vn,Ga,null),e(Ct,dh),e(Ct,Ja),e(Ja,ch),m(t,yl,h),m(t,U,h),v(On,U,null),e(U,ph),e(U,Xa),e(Xa,hh),e(U,mh),e(U,K),e(K,wr),e(wr,fh),e(K,uh),e(K,xr),e(xr,gh),e(K,_h),e(K,Er),e(Er,vh),e(K,Ph),e(K,Za),e(Za,Ih),e(K,Th),e(K,zr),e(zr,Ch),e(K,bh),e(U,yh),e(U,Po),v(Sn,Po,null),e(Po,Lh),e(Po,Wn),e(Wn,kh),e(Wn,jr),e(jr,$h),e(Wn,wh),e(U,xh),e(U,Io),v(Bn,Io,null),e(Io,Eh),e(Io,Un),e(Un,zh),e(Un,Mr),e(Mr,jh),e(Un,Mh),m(t,Ll,h),m(t,bt,h),e(bt,To),e(To,Qa),v(Rn,Qa,null),e(bt,Fh),e(bt,Ya),e(Ya,qh),m(t,kl,h),m(t,R,h),v(Hn,R,null),e(R,Dh),e(R,Kn),e(Kn,Ah),e(Kn,Gn),e(Gn,Nh),e(Kn,Vh),e(R,Oh),e(R,G),v(Jn,G,null),e(G,Sh),e(G,yt),e(yt,Wh),e(yt,Fr),e(Fr,Bh),e(yt,Uh),e(yt,ei),e(ei,Rh),e(yt,Hh),e(G,Kh),v(Co,G,null),e(G,Gh),e(G,ti),e(ti,Jh),e(G,Xh),v(Xn,G,null),e(R,Zh),e(R,J),v(Zn,J,null),e(J,Qh),e(J,Lt),e(Lt,Yh),e(Lt,qr),e(qr,em),e(Lt,tm),e(Lt,oi),e(oi,om),e(Lt,nm),e(J,sm),v(bo,J,null),e(J,rm),e(J,ni),e(ni,am),e(J,im),v(Qn,J,null),e(R,lm),e(R,X),v(Yn,X,null),e(X,dm),e(X,kt),e(kt,cm),e(kt,Dr),e(Dr,pm),e(kt,hm),e(kt,si),e(si,mm),e(kt,fm),e(X,um),v(yo,X,null),e(X,gm),e(X,ri),e(ri,_m),e(X,vm),v(es,X,null),m(t,$l,h),m(t,$t,h),e($t,Lo),e(Lo,ai),v(ts,ai,null),e($t,Pm),e($t,ii),e(ii,Im),m(t,wl,h),m(t,wt,h),v(os,wt,null),e(wt,Tm),e(wt,Z),v(ns,Z,null),e(Z,Cm),e(Z,xt),e(xt,bm),e(xt,Ar),e(Ar,ym),e(xt,Lm),e(xt,li),e(li,km),e(xt,$m),e(Z,wm),v(ko,Z,null),e(Z,xm),e(Z,di),e(di,Em),e(Z,zm),v(ss,Z,null),m(t,xl,h),m(t,Et,h),e(Et,$o),e($o,ci),v(rs,ci,null),e(Et,jm),e(Et,pi),e(pi,Mm),m(t,El,h),m(t,zt,h),v(as,zt,null),e(zt,Fm),e(zt,Q),v(is,Q,null),e(Q,qm),e(Q,jt),e(jt,Dm),e(jt,Nr),e(Nr,Am),e(jt,Nm),e(jt,hi),e(hi,Vm),e(jt,Om),e(Q,Sm),v(wo,Q,null),e(Q,Wm),e(Q,mi),e(mi,Bm),e(Q,Um),v(ls,Q,null),m(t,zl,h),m(t,Mt,h),e(Mt,xo),e(xo,fi),v(ds,fi,null),e(Mt,Rm),e(Mt,ui),e(ui,Hm),m(t,jl,h),m(t,q,h),v(cs,q,null),e(q,Km),e(q,ps),e(ps,Gm),e(ps,Vr),e(Vr,Jm),e(ps,Xm),e(q,Zm),e(q,hs),e(hs,Qm),e(hs,ms),e(ms,Ym),e(hs,ef),e(q,tf),v(Eo,q,null),e(q,of),e(q,Y),v(fs,Y,null),e(Y,nf),e(Y,Ft),e(Ft,sf),e(Ft,Or),e(Or,rf),e(Ft,af),e(Ft,gi),e(gi,lf),e(Ft,df),e(Y,cf),v(zo,Y,null),e(Y,pf),e(Y,_i),e(_i,hf),e(Y,mf),v(us,Y,null),e(q,ff),e(q,ee),v(gs,ee,null),e(ee,uf),e(ee,qt),e(qt,gf),e(qt,Sr),e(Sr,_f),e(qt,vf),e(qt,vi),e(vi,Pf),e(qt,If),e(ee,Tf),v(jo,ee,null),e(ee,Cf),e(ee,Pi),e(Pi,bf),e(ee,yf),v(_s,ee,null),e(q,Lf),e(q,te),v(vs,te,null),e(te,kf),e(te,Dt),e(Dt,$f),e(Dt,Wr),e(Wr,wf),e(Dt,xf),e(Dt,Ii),e(Ii,Ef),e(Dt,zf),e(te,jf),v(Mo,te,null),e(te,Mf),e(te,Ti),e(Ti,Ff),e(te,qf),v(Ps,te,null),m(t,Ml,h),m(t,At,h),e(At,Fo),e(Fo,Ci),v(Is,Ci,null),e(At,Df),e(At,bi),e(bi,Af),m(t,Fl,h),m(t,Nt,h),v(Ts,Nt,null),e(Nt,Nf),e(Nt,oe),v(Cs,oe,null),e(oe,Vf),e(oe,Vt),e(Vt,Of),e(Vt,Br),e(Br,Sf),e(Vt,Wf),e(Vt,yi),e(yi,Bf),e(Vt,Uf),e(oe,Rf),v(qo,oe,null),e(oe,Hf),e(oe,Li),e(Li,Kf),e(oe,Gf),v(bs,oe,null),m(t,ql,h),m(t,Ot,h),e(Ot,Do),e(Do,ki),v(ys,ki,null),e(Ot,Jf),e(Ot,$i),e($i,Xf),m(t,Dl,h),m(t,St,h),v(Ls,St,null),e(St,Zf),e(St,ne),v(ks,ne,null),e(ne,Qf),e(ne,Wt),e(Wt,Yf),e(Wt,Ur),e(Ur,eu),e(Wt,tu),e(Wt,wi),e(wi,ou),e(Wt,nu),e(ne,su),v(Ao,ne,null),e(ne,ru),e(ne,xi),e(xi,au),e(ne,iu),v($s,ne,null),m(t,Al,h),m(t,Bt,h),e(Bt,No),e(No,Ei),v(ws,Ei,null),e(Bt,lu),e(Bt,zi),e(zi,du),m(t,Nl,h),m(t,z,h),v(xs,z,null),e(z,cu),e(z,Es),e(Es,pu),e(Es,Rr),e(Rr,hu),e(Es,mu),e(z,fu),e(z,zs),e(zs,uu),e(zs,js),e(js,gu),e(zs,_u),e(z,vu),e(z,ji),e(ji,Pu),e(z,Iu),e(z,ze),e(ze,Mi),e(Mi,Ms),e(Ms,Tu),e(ze,Cu),e(ze,Fi),e(Fi,Fs),e(Fs,bu),e(ze,yu),e(ze,qi),e(qi,qs),e(qs,Lu),e(ze,ku),e(ze,Di),e(Di,Ds),e(Ds,$u),e(z,wu),e(z,se),v(As,se,null),e(se,xu),e(se,Ut),e(Ut,Eu),e(Ut,Ai),e(Ai,zu),e(Ut,ju),e(Ut,Ni),e(Ni,Mu),e(Ut,Fu),e(se,qu),v(Vo,se,null),e(se,Du),e(se,Vi),e(Vi,Au),e(se,Nu),v(Ns,se,null),e(z,Vu),e(z,Oe),v(Vs,Oe,null),e(Oe,Ou),e(Oe,Oi),e(Oi,Su),e(Oe,Wu),v(Os,Oe,null),e(z,Bu),e(z,Se),v(Ss,Se,null),e(Se,Uu),e(Se,Si),e(Si,Ru),e(Se,Hu),v(Ws,Se,null),m(t,Vl,h),m(t,Rt,h),e(Rt,Oo),e(Oo,Wi),v(Bs,Wi,null),e(Rt,Ku),e(Rt,Bi),e(Bi,Gu),m(t,Ol,h),m(t,Ht,h),v(Us,Ht,null),e(Ht,Ju),e(Ht,re),v(Rs,re,null),e(re,Xu),e(re,Kt),e(Kt,Zu),e(Kt,Ui),e(Ui,Qu),e(Kt,Yu),e(Kt,Ri),e(Ri,eg),e(Kt,tg),e(re,og),v(So,re,null),e(re,ng),e(re,Hi),e(Hi,sg),e(re,rg),v(Hs,re,null),m(t,Sl,h),m(t,Gt,h),e(Gt,Wo),e(Wo,Ki),v(Ks,Ki,null),e(Gt,ag),e(Gt,Gi),e(Gi,ig),m(t,Wl,h),m(t,Jt,h),v(Gs,Jt,null),e(Jt,lg),e(Jt,ae),v(Js,ae,null),e(ae,dg),e(ae,Xt),e(Xt,cg),e(Xt,Ji),e(Ji,pg),e(Xt,hg),e(Xt,Xi),e(Xi,mg),e(Xt,fg),e(ae,ug),v(Bo,ae,null),e(ae,gg),e(ae,Zi),e(Zi,_g),e(ae,vg),v(Xs,ae,null),Bl=!0},p(t,[h]){const Zs={};h&2&&(Zs.$$scope={dirty:h,ctx:t}),Co.$set(Zs);const Qi={};h&2&&(Qi.$$scope={dirty:h,ctx:t}),bo.$set(Qi);const Yi={};h&2&&(Yi.$$scope={dirty:h,ctx:t}),yo.$set(Yi);const el={};h&2&&(el.$$scope={dirty:h,ctx:t}),ko.$set(el);const Qs={};h&2&&(Qs.$$scope={dirty:h,ctx:t}),wo.$set(Qs);const tl={};h&2&&(tl.$$scope={dirty:h,ctx:t}),Eo.$set(tl);const ol={};h&2&&(ol.$$scope={dirty:h,ctx:t}),zo.$set(ol);const nl={};h&2&&(nl.$$scope={dirty:h,ctx:t}),jo.$set(nl);const Ys={};h&2&&(Ys.$$scope={dirty:h,ctx:t}),Mo.$set(Ys);const sl={};h&2&&(sl.$$scope={dirty:h,ctx:t}),qo.$set(sl);const rl={};h&2&&(rl.$$scope={dirty:h,ctx:t}),Ao.$set(rl);const al={};h&2&&(al.$$scope={dirty:h,ctx:t}),Vo.$set(al);const il={};h&2&&(il.$$scope={dirty:h,ctx:t}),So.$set(il);const er={};h&2&&(er.$$scope={dirty:h,ctx:t}),Bo.$set(er)},i(t){Bl||(P(C.$$.fragment,t),P(ye.$$.fragment,t),P(xe.$$.fragment,t),P(on.$$.fragment,t),P(rn.$$.fragment,t),P(an.$$.fragment,t),P(ln.$$.fragment,t),P(cn.$$.fragment,t),P(pn.$$.fragment,t),P(mn.$$.fragment,t),P(fn.$$.fragment,t),P(un.$$.fragment,t),P(_n.$$.fragment,t),P(vn.$$.fragment,t),P(Pn.$$.fragment,t),P(Tn.$$.fragment,t),P(Cn.$$.fragment,t),P(yn.$$.fragment,t),P(Ln.$$.fragment,t),P(kn.$$.fragment,t),P($n.$$.fragment,t),P(En.$$.fragment,t),P(zn.$$.fragment,t),P(jn.$$.fragment,t),P(Mn.$$.fragment,t),P(qn.$$.fragment,t),P(An.$$.fragment,t),P(Nn.$$.fragment,t),P(Vn.$$.fragment,t),P(On.$$.fragment,t),P(Sn.$$.fragment,t),P(Bn.$$.fragment,t),P(Rn.$$.fragment,t),P(Hn.$$.fragment,t),P(Jn.$$.fragment,t),P(Co.$$.fragment,t),P(Xn.$$.fragment,t),P(Zn.$$.fragment,t),P(bo.$$.fragment,t),P(Qn.$$.fragment,t),P(Yn.$$.fragment,t),P(yo.$$.fragment,t),P(es.$$.fragment,t),P(ts.$$.fragment,t),P(os.$$.fragment,t),P(ns.$$.fragment,t),P(ko.$$.fragment,t),P(ss.$$.fragment,t),P(rs.$$.fragment,t),P(as.$$.fragment,t),P(is.$$.fragment,t),P(wo.$$.fragment,t),P(ls.$$.fragment,t),P(ds.$$.fragment,t),P(cs.$$.fragment,t),P(Eo.$$.fragment,t),P(fs.$$.fragment,t),P(zo.$$.fragment,t),P(us.$$.fragment,t),P(gs.$$.fragment,t),P(jo.$$.fragment,t),P(_s.$$.fragment,t),P(vs.$$.fragment,t),P(Mo.$$.fragment,t),P(Ps.$$.fragment,t),P(Is.$$.fragment,t),P(Ts.$$.fragment,t),P(Cs.$$.fragment,t),P(qo.$$.fragment,t),P(bs.$$.fragment,t),P(ys.$$.fragment,t),P(Ls.$$.fragment,t),P(ks.$$.fragment,t),P(Ao.$$.fragment,t),P($s.$$.fragment,t),P(ws.$$.fragment,t),P(xs.$$.fragment,t),P(As.$$.fragment,t),P(Vo.$$.fragment,t),P(Ns.$$.fragment,t),P(Vs.$$.fragment,t),P(Os.$$.fragment,t),P(Ss.$$.fragment,t),P(Ws.$$.fragment,t),P(Bs.$$.fragment,t),P(Us.$$.fragment,t),P(Rs.$$.fragment,t),P(So.$$.fragment,t),P(Hs.$$.fragment,t),P(Ks.$$.fragment,t),P(Gs.$$.fragment,t),P(Js.$$.fragment,t),P(Bo.$$.fragment,t),P(Xs.$$.fragment,t),Bl=!0)},o(t){I(C.$$.fragment,t),I(ye.$$.fragment,t),I(xe.$$.fragment,t),I(on.$$.fragment,t),I(rn.$$.fragment,t),I(an.$$.fragment,t),I(ln.$$.fragment,t),I(cn.$$.fragment,t),I(pn.$$.fragment,t),I(mn.$$.fragment,t),I(fn.$$.fragment,t),I(un.$$.fragment,t),I(_n.$$.fragment,t),I(vn.$$.fragment,t),I(Pn.$$.fragment,t),I(Tn.$$.fragment,t),I(Cn.$$.fragment,t),I(yn.$$.fragment,t),I(Ln.$$.fragment,t),I(kn.$$.fragment,t),I($n.$$.fragment,t),I(En.$$.fragment,t),I(zn.$$.fragment,t),I(jn.$$.fragment,t),I(Mn.$$.fragment,t),I(qn.$$.fragment,t),I(An.$$.fragment,t),I(Nn.$$.fragment,t),I(Vn.$$.fragment,t),I(On.$$.fragment,t),I(Sn.$$.fragment,t),I(Bn.$$.fragment,t),I(Rn.$$.fragment,t),I(Hn.$$.fragment,t),I(Jn.$$.fragment,t),I(Co.$$.fragment,t),I(Xn.$$.fragment,t),I(Zn.$$.fragment,t),I(bo.$$.fragment,t),I(Qn.$$.fragment,t),I(Yn.$$.fragment,t),I(yo.$$.fragment,t),I(es.$$.fragment,t),I(ts.$$.fragment,t),I(os.$$.fragment,t),I(ns.$$.fragment,t),I(ko.$$.fragment,t),I(ss.$$.fragment,t),I(rs.$$.fragment,t),I(as.$$.fragment,t),I(is.$$.fragment,t),I(wo.$$.fragment,t),I(ls.$$.fragment,t),I(ds.$$.fragment,t),I(cs.$$.fragment,t),I(Eo.$$.fragment,t),I(fs.$$.fragment,t),I(zo.$$.fragment,t),I(us.$$.fragment,t),I(gs.$$.fragment,t),I(jo.$$.fragment,t),I(_s.$$.fragment,t),I(vs.$$.fragment,t),I(Mo.$$.fragment,t),I(Ps.$$.fragment,t),I(Is.$$.fragment,t),I(Ts.$$.fragment,t),I(Cs.$$.fragment,t),I(qo.$$.fragment,t),I(bs.$$.fragment,t),I(ys.$$.fragment,t),I(Ls.$$.fragment,t),I(ks.$$.fragment,t),I(Ao.$$.fragment,t),I($s.$$.fragment,t),I(ws.$$.fragment,t),I(xs.$$.fragment,t),I(As.$$.fragment,t),I(Vo.$$.fragment,t),I(Ns.$$.fragment,t),I(Vs.$$.fragment,t),I(Os.$$.fragment,t),I(Ss.$$.fragment,t),I(Ws.$$.fragment,t),I(Bs.$$.fragment,t),I(Us.$$.fragment,t),I(Rs.$$.fragment,t),I(So.$$.fragment,t),I(Hs.$$.fragment,t),I(Ks.$$.fragment,t),I(Gs.$$.fragment,t),I(Js.$$.fragment,t),I(Bo.$$.fragment,t),I(Xs.$$.fragment,t),Bl=!1},d(t){o(p),t&&o(L),t&&o(u),T(C),t&&o(at),t&&o(j),T(ye),t&&o(Zt),t&&o(pe),t&&o(he),t&&o(Fe),t&&o(Yt),t&&o(qe),t&&o(eo),t&&o(A),T(xe),t&&o(to),t&&o(me),t&&o(De),t&&o(_e),t&&o(tn),t&&o(E),t&&o(dl),T(on,t),t&&o(cl),t&&o(Ve),t&&o(pl),t&&o(dt),T(rn),t&&o(hl),t&&o(fe),T(an),T(ln),t&&o(ml),t&&o(pt),T(cn),t&&o(fl),t&&o(S),T(pn),T(mn),t&&o(ul),t&&o(ft),T(fn),t&&o(gl),t&&o(W),T(un),T(_n),t&&o(_l),t&&o(_t),T(vn),t&&o(vl),t&&o(F),T(Pn),T(Tn),T(Cn),T(yn),T(Ln),t&&o(Pl),t&&o(vt),T(kn),t&&o(Il),t&&o(B),T($n),T(En),T(zn),t&&o(Tl),t&&o(Pt),T(jn),t&&o(Cl),t&&o(V),T(Mn),T(qn),T(An),T(Nn),t&&o(bl),t&&o(Ct),T(Vn),t&&o(yl),t&&o(U),T(On),T(Sn),T(Bn),t&&o(Ll),t&&o(bt),T(Rn),t&&o(kl),t&&o(R),T(Hn),T(Jn),T(Co),T(Xn),T(Zn),T(bo),T(Qn),T(Yn),T(yo),T(es),t&&o($l),t&&o($t),T(ts),t&&o(wl),t&&o(wt),T(os),T(ns),T(ko),T(ss),t&&o(xl),t&&o(Et),T(rs),t&&o(El),t&&o(zt),T(as),T(is),T(wo),T(ls),t&&o(zl),t&&o(Mt),T(ds),t&&o(jl),t&&o(q),T(cs),T(Eo),T(fs),T(zo),T(us),T(gs),T(jo),T(_s),T(vs),T(Mo),T(Ps),t&&o(Ml),t&&o(At),T(Is),t&&o(Fl),t&&o(Nt),T(Ts),T(Cs),T(qo),T(bs),t&&o(ql),t&&o(Ot),T(ys),t&&o(Dl),t&&o(St),T(Ls),T(ks),T(Ao),T($s),t&&o(Al),t&&o(Bt),T(ws),t&&o(Nl),t&&o(z),T(xs),T(As),T(Vo),T(Ns),T(Vs),T(Os),T(Ss),T(Ws),t&&o(Vl),t&&o(Rt),T(Bs),t&&o(Ol),t&&o(Ht),T(Us),T(Rs),T(So),T(Hs),t&&o(Sl),t&&o(Gt),T(Ks),t&&o(Wl),t&&o(Jt),T(Gs),T(Js),T(Bo),T(Xs)}}}const OP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function SP(x,p,L){let{fw:u}=p;return x.$$set=b=>{"fw"in b&&L(0,u=b.fw)},[u]}class GP extends TP{constructor(p){super();CP(this,p,SP,VP,bP,{fw:0})}}export{GP as default,OP as metadata};
