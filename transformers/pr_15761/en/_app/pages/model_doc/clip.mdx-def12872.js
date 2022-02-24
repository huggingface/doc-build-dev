import{S as Rv,i as Hv,s as Kv,e as n,k as l,w as _,t as a,L as Gv,c as s,d as o,m as d,a as r,x as v,h as i,b as c,J as e,g as m,y as P,q as T,o as I,B as C}from"../../chunks/vendor-9e2b328e.js";import{T as ce}from"../../chunks/Tip-76f97a76.js";import{D as w}from"../../chunks/Docstring-50fd6873.js";import{C as N}from"../../chunks/CodeBlock-88e23343.js";import{I as D}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function Jv($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Xv($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Zv($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Qv($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Yv($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function e1($){let p,L,u,b,y,g,f,k,Vo,at,M,ue,Ce,be,So,ye,Wo,Ut,pe,Me,Le,Rt,H,he,je,it,Ht,Fe,ke,Bo,Kt,A,ge,we,xe,Uo,$e,Ro,Gt,me,Ho,qe,_e;return{c(){p=n("p"),L=a("TF 2.0 models accepts two formats as inputs:"),u=l(),b=n("ul"),y=n("li"),g=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),k=n("li"),Vo=a("having all inputs as a list, tuple or dict in the first positional arguments."),at=l(),M=n("p"),ue=a("This second option is useful when using "),Ce=n("code"),be=a("tf.keras.Model.fit"),So=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),Wo=a("model(inputs)"),Ut=a("."),pe=l(),Me=n("p"),Le=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Rt=l(),H=n("ul"),he=n("li"),je=a("a single Tensor with "),it=n("code"),Ht=a("input_ids"),Fe=a(" only and nothing else: "),ke=n("code"),Bo=a("model(input_ids)"),Kt=l(),A=n("li"),ge=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n("code"),xe=a("model([input_ids, attention_mask])"),Uo=a(" or "),$e=n("code"),Ro=a("model([input_ids, attention_mask, token_type_ids])"),Gt=l(),me=n("li"),Ho=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n("code"),_e=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=s(x,"P",{});var j=r(p);L=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),u=d(x),b=s(x,"UL",{});var Jt=r(b);y=s(Jt,"LI",{});var Rs=r(y);g=i(Rs,"having all inputs as keyword arguments (like PyTorch models), or"),Rs.forEach(o),f=d(Jt),k=s(Jt,"LI",{});var Ko=r(k);Vo=i(Ko,"having all inputs as a list, tuple or dict in the first positional arguments."),Ko.forEach(o),Jt.forEach(o),at=d(x),M=s(x,"P",{});var E=r(M);ue=i(E,"This second option is useful when using "),Ce=s(E,"CODE",{});var Hs=r(Ce);be=i(Hs,"tf.keras.Model.fit"),Hs.forEach(o),So=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=s(E,"CODE",{});var lt=r(ye);Wo=i(lt,"model(inputs)"),lt.forEach(o),Ut=i(E,"."),E.forEach(o),pe=d(x),Me=s(x,"P",{});var Ks=r(Me);Le=i(Ks,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ks.forEach(o),Rt=d(x),H=s(x,"UL",{});var De=r(H);he=s(De,"LI",{});var ve=r(he);je=i(ve,"a single Tensor with "),it=s(ve,"CODE",{});var Gs=r(it);Ht=i(Gs,"input_ids"),Gs.forEach(o),Fe=i(ve," only and nothing else: "),ke=s(ve,"CODE",{});var Js=r(ke);Bo=i(Js,"model(input_ids)"),Js.forEach(o),ve.forEach(o),Kt=d(De),A=s(De,"LI",{});var Pe=r(A);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s(Pe,"CODE",{});var Xs=r(we);xe=i(Xs,"model([input_ids, attention_mask])"),Xs.forEach(o),Uo=i(Pe," or "),$e=s(Pe,"CODE",{});var Zs=r($e);Ro=i(Zs,"model([input_ids, attention_mask, token_type_ids])"),Zs.forEach(o),Pe.forEach(o),Gt=d(De),me=s(De,"LI",{});var Ae=r(me);Ho=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s(Ae,"CODE",{});var Qs=r(qe);_e=i(Qs,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qs.forEach(o),Ae.forEach(o),De.forEach(o)},m(x,j){m(x,p,j),e(p,L),m(x,u,j),m(x,b,j),e(b,y),e(y,g),e(b,f),e(b,k),e(k,Vo),m(x,at,j),m(x,M,j),e(M,ue),e(M,Ce),e(Ce,be),e(M,So),e(M,ye),e(ye,Wo),e(M,Ut),m(x,pe,j),m(x,Me,j),e(Me,Le),m(x,Rt,j),m(x,H,j),e(H,he),e(he,je),e(he,it),e(it,Ht),e(he,Fe),e(he,ke),e(ke,Bo),e(H,Kt),e(H,A),e(A,ge),e(A,we),e(we,xe),e(A,Uo),e(A,$e),e($e,Ro),e(H,Gt),e(H,me),e(me,Ho),e(me,qe),e(qe,_e)},d(x){x&&o(p),x&&o(u),x&&o(b),x&&o(at),x&&o(M),x&&o(pe),x&&o(Me),x&&o(Rt),x&&o(H)}}}function t1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function o1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function n1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function s1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function r1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function a1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function i1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function l1($){let p,L,u,b,y;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){m(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function d1($){let p,L,u,b,y,g,f,k,Vo,at,M,ue,Ce,be,So,ye,Wo,Ut,pe,Me,Le,Rt,H,he,je,it,Ht,Fe,ke,Bo,Kt,A,ge,we,xe,Uo,$e,Ro,Gt,me,Ho,qe,_e,x,j,Jt,Rs,Ko,E,Hs,lt,Ks,De,ve,Gs,Js,Pe,Xs,Zs,Ae,Qs,gd,Ys,_d,vd,er,Pd,Td,Xi,Go,Zi,Ne,Id,Jo,Cd,bd,Xo,yd,Ld,Qi,dt,Xt,na,Zo,kd,sa,wd,Yi,fe,Qo,xd,Zt,tr,$d,Ed,or,zd,Md,jd,ct,Fd,nr,qd,Dd,sr,Ad,Nd,Od,Qt,Yo,Vd,en,Sd,rr,Wd,Bd,el,pt,Yt,ra,tn,Ud,aa,Rd,tl,V,on,Hd,ht,Kd,ar,Gd,Jd,nn,Xd,Zd,Qd,mt,Yd,ir,ec,tc,lr,oc,nc,sc,ia,rc,ac,sn,ol,ft,eo,la,rn,ic,da,lc,nl,S,an,dc,ut,cc,dr,pc,hc,ln,mc,fc,uc,gt,gc,cr,_c,vc,pr,Pc,Tc,Ic,ca,Cc,bc,dn,sl,_t,to,pa,cn,yc,ha,Lc,rl,F,pn,kc,ma,wc,xc,hn,$c,hr,Ec,zc,Mc,Te,mn,jc,fa,Fc,qc,ua,mr,Dc,ga,Ac,Nc,_a,Oc,Vc,oo,fn,Sc,un,Wc,va,Bc,Uc,Rc,no,gn,Hc,Pa,Kc,Gc,Ta,al,vt,so,Ia,_n,Jc,Ca,Xc,il,W,vn,Zc,Pn,Qc,ba,Yc,ep,tp,Tn,op,fr,np,sp,rp,Ie,In,ap,ya,ip,lp,La,ur,dp,ka,cp,pp,wa,hp,mp,ro,Cn,fp,xa,up,ll,Pt,ao,$a,bn,gp,Ea,_p,dl,B,yn,vp,za,Pp,Tp,Ln,Ip,gr,Cp,bp,yp,io,kn,Lp,wn,kp,Ma,wp,xp,$p,lo,xn,Ep,Tt,zp,ja,Mp,jp,Fa,Fp,qp,cl,It,co,qa,$n,Dp,Da,Ap,pl,U,En,Np,Aa,Op,Vp,K,_r,Sp,Wp,vr,Bp,Up,Pr,Rp,Hp,Na,Kp,Gp,Tr,Jp,Xp,Zp,po,zn,Qp,Mn,Yp,Ir,eh,th,oh,ho,jn,nh,Fn,sh,Cr,rh,ah,hl,Ct,mo,Oa,qn,ih,Va,lh,ml,R,Dn,dh,An,ch,Nn,ph,hh,mh,G,On,fh,bt,uh,br,gh,_h,Sa,vh,Ph,Th,fo,Ih,Wa,Ch,bh,Vn,yh,J,Sn,Lh,yt,kh,yr,wh,xh,Ba,$h,Eh,zh,uo,Mh,Ua,jh,Fh,Wn,qh,X,Bn,Dh,Lt,Ah,Lr,Nh,Oh,Ra,Vh,Sh,Wh,go,Bh,Ha,Uh,Rh,Un,fl,kt,_o,Ka,Rn,Hh,Ga,Kh,ul,Hn,Z,Kn,Gh,wt,Jh,kr,Xh,Zh,Ja,Qh,Yh,em,vo,tm,Xa,om,nm,Gn,gl,xt,Po,Za,Jn,sm,Qa,rm,_l,Xn,Q,Zn,am,$t,im,wr,lm,dm,Ya,cm,pm,hm,To,mm,ei,fm,um,Qn,vl,Et,Io,ti,Yn,gm,oi,_m,Pl,q,es,vm,ts,Pm,xr,Tm,Im,Cm,os,bm,ns,ym,Lm,km,Co,wm,Y,ss,xm,zt,$m,$r,Em,zm,ni,Mm,jm,Fm,bo,qm,si,Dm,Am,rs,Nm,ee,as,Om,Mt,Vm,Er,Sm,Wm,ri,Bm,Um,Rm,yo,Hm,ai,Km,Gm,is,Jm,te,ls,Xm,jt,Zm,zr,Qm,Ym,ii,ef,tf,of,Lo,nf,li,sf,rf,ds,Tl,Ft,ko,di,cs,af,ci,lf,Il,ps,oe,hs,df,qt,cf,Mr,pf,hf,pi,mf,ff,uf,wo,gf,hi,_f,vf,ms,Cl,Dt,xo,mi,fs,Pf,fi,Tf,bl,us,ne,gs,If,At,Cf,jr,bf,yf,ui,Lf,kf,wf,$o,xf,gi,$f,Ef,_s,yl,Nt,Eo,_i,vs,zf,vi,Mf,Ll,z,Ps,jf,Ts,Ff,Fr,qf,Df,Af,Is,Nf,Cs,Of,Vf,Sf,Pi,Wf,Bf,Ee,Ti,bs,Uf,Rf,Ii,ys,Hf,Kf,Ci,Ls,Gf,Jf,bi,ks,Xf,Zf,se,ws,Qf,Ot,Yf,yi,eu,tu,Li,ou,nu,su,zo,ru,ki,au,iu,xs,lu,Oe,$s,du,wi,cu,pu,Es,hu,Ve,zs,mu,xi,fu,uu,Ms,kl,Vt,Mo,$i,js,gu,Ei,_u,wl,Fs,re,qs,vu,St,Pu,zi,Tu,Iu,Mi,Cu,bu,yu,jo,Lu,ji,ku,wu,Ds,xl,Wt,Fo,Fi,As,xu,qi,$u,$l,Ns,ae,Os,Eu,Bt,zu,Di,Mu,ju,Ai,Fu,qu,Du,qo,Au,Ni,Nu,Ou,Vs,El;return g=new D({}),be=new D({}),xe=new D({}),Go=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Zo=new D({}),Qo=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/configuration_clip.py#L209",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),Yo=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/configuration_clip.py#L258",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),tn=new D({}),on=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/configuration_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),sn=new N({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new D({}),an=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/configuration_clip.py#L122",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),dn=new N({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),cn=new D({}),pn=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),mn=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fn=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_n=new D({}),vn=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),In=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bn=new D({}),yn=new w({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/feature_extraction_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),kn=new w({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/feature_extraction_clip.py#L159",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),xn=new w({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/feature_extraction_clip.py#L185",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),$n=new D({}),En=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),zn=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/processing_clip.py#L95"}}),jn=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/processing_clip.py#L102"}}),qn=new D({}),Dn=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_clip.py#L837",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),On=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_clip.py#L952",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new ce({props:{$$slots:{default:[Jv]},$$scope:{ctx:$}}}),Vn=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Sn=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_clip.py#L870",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),uo=new ce({props:{$$slots:{default:[Xv]},$$scope:{ctx:$}}}),Wn=new N({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Bn=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_clip.py#L910",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),go=new ce({props:{$$slots:{default:[Zv]},$$scope:{ctx:$}}}),Un=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Rn=new D({}),Kn=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_clip.py#L688",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
`,returnType:`
<p><a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new ce({props:{$$slots:{default:[Qv]},$$scope:{ctx:$}}}),Gn=new N({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Jn=new D({}),Zn=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_clip.py#L797",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
`,returnType:`
<p><a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ce({props:{$$slots:{default:[Yv]},$$scope:{ctx:$}}}),Qn=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Yn=new D({}),es=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_tf_clip.py#L1287",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new ce({props:{$$slots:{default:[e1]},$$scope:{ctx:$}}}),ss=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_tf_clip.py#L1440",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>tf.Tensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code>or <code>tuple(tf.Tensor)</code></p>
`}}),bo=new ce({props:{$$slots:{default:[t1]},$$scope:{ctx:$}}}),rs=new N({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),as=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_tf_clip.py#L1333",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),yo=new ce({props:{$$slots:{default:[o1]},$$scope:{ctx:$}}}),is=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),ls=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_tf_clip.py#L1385",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Lo=new ce({props:{$$slots:{default:[n1]},$$scope:{ctx:$}}}),ds=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),cs=new D({}),hs=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_tf_clip.py#L1110",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new ce({props:{$$slots:{default:[s1]},$$scope:{ctx:$}}}),ms=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),fs=new D({}),gs=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_tf_clip.py#L1217",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new ce({props:{$$slots:{default:[r1]},$$scope:{ctx:$}}}),_s=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),vs=new D({}),Ps=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_flax_clip.py#L1108",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ws=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_flax_clip.py#L737",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new ce({props:{$$slots:{default:[a1]},$$scope:{ctx:$}}}),xs=new N({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),$s=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_flax_clip.py#L782",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Es=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),zs=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_flax_clip.py#L849",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ms=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),js=new D({}),qs=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_flax_clip.py#L604",parametersDescription:[{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new ce({props:{$$slots:{default:[i1]},$$scope:{ctx:$}}}),Ds=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),As=new D({}),Os=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15761/src/transformers/models/clip/modeling_flax_clip.py#L673",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15761/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_15761/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new ce({props:{$$slots:{default:[l1]},$$scope:{ctx:$}}}),Vs=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("meta"),L=l(),u=n("h1"),b=n("a"),y=n("span"),_(g.$$.fragment),f=l(),k=n("span"),Vo=a("CLIP"),at=l(),M=n("h2"),ue=n("a"),Ce=n("span"),_(be.$$.fragment),So=l(),ye=n("span"),Wo=a("Overview"),Ut=l(),pe=n("p"),Me=a("The CLIP model was proposed in "),Le=n("a"),Rt=a("Learning Transferable Visual Models From Natural Language Supervision"),H=a(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),he=l(),je=n("p"),it=a("The abstract from the paper is the following:"),Ht=l(),Fe=n("p"),ke=n("em"),Bo=a(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Kt=l(),A=n("h2"),ge=n("a"),we=n("span"),_(xe.$$.fragment),Uo=l(),$e=n("span"),Ro=a("Usage"),Gt=l(),me=n("p"),Ho=a(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=n("p"),x=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=n("a"),Jt=a("CLIPFeatureExtractor"),Rs=a(" can be used to resize (or rescale) and normalize images for the model."),Ko=l(),E=n("p"),Hs=a("The "),lt=n("a"),Ks=a("CLIPTokenizer"),De=a(" is used to encode the text. The "),ve=n("a"),Gs=a("CLIPProcessor"),Js=a(` wraps
`),Pe=n("a"),Xs=a("CLIPFeatureExtractor"),Zs=a(" and "),Ae=n("a"),Qs=a("CLIPTokenizer"),gd=a(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Ys=n("a"),_d=a("CLIPProcessor"),vd=a(" and "),er=n("a"),Pd=a("CLIPModel"),Td=a("."),Xi=l(),_(Go.$$.fragment),Zi=l(),Ne=n("p"),Id=a("This model was contributed by "),Jo=n("a"),Cd=a("valhalla"),bd=a(". The original code can be found "),Xo=n("a"),yd=a("here"),Ld=a("."),Qi=l(),dt=n("h2"),Xt=n("a"),na=n("span"),_(Zo.$$.fragment),kd=l(),sa=n("span"),wd=a("CLIPConfig"),Yi=l(),fe=n("div"),_(Qo.$$.fragment),xd=l(),Zt=n("p"),tr=n("a"),$d=a("CLIPConfig"),Ed=a(" is the configuration class to store the configuration of a "),or=n("a"),zd=a("CLIPModel"),Md=a(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),jd=l(),ct=n("p"),Fd=a("Configuration objects inherit from "),nr=n("a"),qd=a("PretrainedConfig"),Dd=a(` and can be used to control the model outputs. Read the
documentation from `),sr=n("a"),Ad=a("PretrainedConfig"),Nd=a(" for more information."),Od=l(),Qt=n("div"),_(Yo.$$.fragment),Vd=l(),en=n("p"),Sd=a("Instantiate a "),rr=n("a"),Wd=a("CLIPConfig"),Bd=a(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),el=l(),pt=n("h2"),Yt=n("a"),ra=n("span"),_(tn.$$.fragment),Ud=l(),aa=n("span"),Rd=a("CLIPTextConfig"),tl=l(),V=n("div"),_(on.$$.fragment),Hd=l(),ht=n("p"),Kd=a("This is the configuration class to store the configuration of a "),ar=n("a"),Gd=a("CLIPModel"),Jd=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),nn=n("a"),Xd=a("openai/clip-vit-base-patch32"),Zd=a(" architecture."),Qd=l(),mt=n("p"),Yd=a("Configuration objects inherit from "),ir=n("a"),ec=a("PretrainedConfig"),tc=a(` and can be used to control the model outputs. Read the
documentation from `),lr=n("a"),oc=a("PretrainedConfig"),nc=a(" for more information."),sc=l(),ia=n("p"),rc=a("Example:"),ac=l(),_(sn.$$.fragment),ol=l(),ft=n("h2"),eo=n("a"),la=n("span"),_(rn.$$.fragment),ic=l(),da=n("span"),lc=a("CLIPVisionConfig"),nl=l(),S=n("div"),_(an.$$.fragment),dc=l(),ut=n("p"),cc=a("This is the configuration class to store the configuration of a "),dr=n("a"),pc=a("CLIPModel"),hc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ln=n("a"),mc=a("openai/clip-vit-base-patch32"),fc=a(" architecture."),uc=l(),gt=n("p"),gc=a("Configuration objects inherit from "),cr=n("a"),_c=a("PretrainedConfig"),vc=a(` and can be used to control the model outputs. Read the
documentation from `),pr=n("a"),Pc=a("PretrainedConfig"),Tc=a(" for more information."),Ic=l(),ca=n("p"),Cc=a("Example:"),bc=l(),_(dn.$$.fragment),sl=l(),_t=n("h2"),to=n("a"),pa=n("span"),_(cn.$$.fragment),yc=l(),ha=n("span"),Lc=a("CLIPTokenizer"),rl=l(),F=n("div"),_(pn.$$.fragment),kc=l(),ma=n("p"),wc=a("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),xc=l(),hn=n("p"),$c=a("This tokenizer inherits from "),hr=n("a"),Ec=a("PreTrainedTokenizer"),zc=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mc=l(),Te=n("div"),_(mn.$$.fragment),jc=l(),fa=n("p"),Fc=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),qc=l(),ua=n("ul"),mr=n("li"),Dc=a("single sequence: "),ga=n("code"),Ac=a("<|startoftext|> X <|endoftext|>"),Nc=l(),_a=n("p"),Oc=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Vc=l(),oo=n("div"),_(fn.$$.fragment),Sc=l(),un=n("p"),Wc=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),va=n("code"),Bc=a("prepare_for_model"),Uc=a(" method."),Rc=l(),no=n("div"),_(gn.$$.fragment),Hc=l(),Pa=n("p"),Kc=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Gc=l(),Ta=n("div"),al=l(),vt=n("h2"),so=n("a"),Ia=n("span"),_(_n.$$.fragment),Jc=l(),Ca=n("span"),Xc=a("CLIPTokenizerFast"),il=l(),W=n("div"),_(vn.$$.fragment),Zc=l(),Pn=n("p"),Qc=a("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),ba=n("em"),Yc=a("tokenizers"),ep=a(` library). Based on byte-level
Byte-Pair-Encoding.`),tp=l(),Tn=n("p"),op=a("This tokenizer inherits from "),fr=n("a"),np=a("PreTrainedTokenizerFast"),sp=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),rp=l(),Ie=n("div"),_(In.$$.fragment),ap=l(),ya=n("p"),ip=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),lp=l(),La=n("ul"),ur=n("li"),dp=a("single sequence: "),ka=n("code"),cp=a("<|startoftext|> X <|endoftext|>"),pp=l(),wa=n("p"),hp=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),mp=l(),ro=n("div"),_(Cn.$$.fragment),fp=l(),xa=n("p"),up=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ll=l(),Pt=n("h2"),ao=n("a"),$a=n("span"),_(bn.$$.fragment),gp=l(),Ea=n("span"),_p=a("CLIPFeatureExtractor"),dl=l(),B=n("div"),_(yn.$$.fragment),vp=l(),za=n("p"),Pp=a("Constructs a CLIP feature extractor."),Tp=l(),Ln=n("p"),Ip=a("This feature extractor inherits from "),gr=n("a"),Cp=a("FeatureExtractionMixin"),bp=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),yp=l(),io=n("div"),_(kn.$$.fragment),Lp=l(),wn=n("p"),kp=a("Crops "),Ma=n("code"),wp=a("image"),xp=a(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),$p=l(),lo=n("div"),_(xn.$$.fragment),Ep=l(),Tt=n("p"),zp=a("Resizes "),ja=n("code"),Mp=a("image"),jp=a(". Note that this will trigger a conversion of "),Fa=n("code"),Fp=a("image"),qp=a(" to a PIL Image."),cl=l(),It=n("h2"),co=n("a"),qa=n("span"),_($n.$$.fragment),Dp=l(),Da=n("span"),Ap=a("CLIPProcessor"),pl=l(),U=n("div"),_(En.$$.fragment),Np=l(),Aa=n("p"),Op=a("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Vp=l(),K=n("p"),_r=n("a"),Sp=a("CLIPProcessor"),Wp=a(" offers all the functionalities of "),vr=n("a"),Bp=a("CLIPFeatureExtractor"),Up=a(" and "),Pr=n("a"),Rp=a("CLIPTokenizer"),Hp=a(`. See the
`),Na=n("code"),Kp=a("__call__()"),Gp=a("and "),Tr=n("a"),Jp=a("decode()"),Xp=a(" for more information."),Zp=l(),po=n("div"),_(zn.$$.fragment),Qp=l(),Mn=n("p"),Yp=a("This method forwards all its arguments to CLIPTokenizer\u2019s "),Ir=n("a"),eh=a("batch_decode()"),th=a(`. Please refer
to the docstring of this method for more information.`),oh=l(),ho=n("div"),_(jn.$$.fragment),nh=l(),Fn=n("p"),sh=a("This method forwards all its arguments to CLIPTokenizer\u2019s "),Cr=n("a"),rh=a("decode()"),ah=a(`. Please refer to the
docstring of this method for more information.`),hl=l(),Ct=n("h2"),mo=n("a"),Oa=n("span"),_(qn.$$.fragment),ih=l(),Va=n("span"),lh=a("CLIPModel"),ml=l(),R=n("div"),_(Dn.$$.fragment),dh=l(),An=n("p"),ch=a("This model is a PyTorch "),Nn=n("a"),ph=a("torch.nn.Module"),hh=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mh=l(),G=n("div"),_(On.$$.fragment),fh=l(),bt=n("p"),uh=a("The "),br=n("a"),gh=a("CLIPModel"),_h=a(" forward method, overrides the "),Sa=n("code"),vh=a("__call__"),Ph=a(" special method."),Th=l(),_(fo.$$.fragment),Ih=l(),Wa=n("p"),Ch=a("Examples:"),bh=l(),_(Vn.$$.fragment),yh=l(),J=n("div"),_(Sn.$$.fragment),Lh=l(),yt=n("p"),kh=a("The "),yr=n("a"),wh=a("CLIPModel"),xh=a(" forward method, overrides the "),Ba=n("code"),$h=a("__call__"),Eh=a(" special method."),zh=l(),_(uo.$$.fragment),Mh=l(),Ua=n("p"),jh=a("Examples:"),Fh=l(),_(Wn.$$.fragment),qh=l(),X=n("div"),_(Bn.$$.fragment),Dh=l(),Lt=n("p"),Ah=a("The "),Lr=n("a"),Nh=a("CLIPModel"),Oh=a(" forward method, overrides the "),Ra=n("code"),Vh=a("__call__"),Sh=a(" special method."),Wh=l(),_(go.$$.fragment),Bh=l(),Ha=n("p"),Uh=a("Examples:"),Rh=l(),_(Un.$$.fragment),fl=l(),kt=n("h2"),_o=n("a"),Ka=n("span"),_(Rn.$$.fragment),Hh=l(),Ga=n("span"),Kh=a("CLIPTextModel"),ul=l(),Hn=n("div"),Z=n("div"),_(Kn.$$.fragment),Gh=l(),wt=n("p"),Jh=a("The "),kr=n("a"),Xh=a("CLIPTextModel"),Zh=a(" forward method, overrides the "),Ja=n("code"),Qh=a("__call__"),Yh=a(" special method."),em=l(),_(vo.$$.fragment),tm=l(),Xa=n("p"),om=a("Examples:"),nm=l(),_(Gn.$$.fragment),gl=l(),xt=n("h2"),Po=n("a"),Za=n("span"),_(Jn.$$.fragment),sm=l(),Qa=n("span"),rm=a("CLIPVisionModel"),_l=l(),Xn=n("div"),Q=n("div"),_(Zn.$$.fragment),am=l(),$t=n("p"),im=a("The "),wr=n("a"),lm=a("CLIPVisionModel"),dm=a(" forward method, overrides the "),Ya=n("code"),cm=a("__call__"),pm=a(" special method."),hm=l(),_(To.$$.fragment),mm=l(),ei=n("p"),fm=a("Examples:"),um=l(),_(Qn.$$.fragment),vl=l(),Et=n("h2"),Io=n("a"),ti=n("span"),_(Yn.$$.fragment),gm=l(),oi=n("span"),_m=a("TFCLIPModel"),Pl=l(),q=n("div"),_(es.$$.fragment),vm=l(),ts=n("p"),Pm=a("This model inherits from "),xr=n("a"),Tm=a("TFPreTrainedModel"),Im=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cm=l(),os=n("p"),bm=a("This model is also a "),ns=n("a"),ym=a("tf.keras.Model"),Lm=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),km=l(),_(Co.$$.fragment),wm=l(),Y=n("div"),_(ss.$$.fragment),xm=l(),zt=n("p"),$m=a("The "),$r=n("a"),Em=a("TFCLIPModel"),zm=a(" forward method, overrides the "),ni=n("code"),Mm=a("__call__"),jm=a(" special method."),Fm=l(),_(bo.$$.fragment),qm=l(),si=n("p"),Dm=a("Examples:"),Am=l(),_(rs.$$.fragment),Nm=l(),ee=n("div"),_(as.$$.fragment),Om=l(),Mt=n("p"),Vm=a("The "),Er=n("a"),Sm=a("TFCLIPModel"),Wm=a(" forward method, overrides the "),ri=n("code"),Bm=a("__call__"),Um=a(" special method."),Rm=l(),_(yo.$$.fragment),Hm=l(),ai=n("p"),Km=a("Examples:"),Gm=l(),_(is.$$.fragment),Jm=l(),te=n("div"),_(ls.$$.fragment),Xm=l(),jt=n("p"),Zm=a("The "),zr=n("a"),Qm=a("TFCLIPModel"),Ym=a(" forward method, overrides the "),ii=n("code"),ef=a("__call__"),tf=a(" special method."),of=l(),_(Lo.$$.fragment),nf=l(),li=n("p"),sf=a("Examples:"),rf=l(),_(ds.$$.fragment),Tl=l(),Ft=n("h2"),ko=n("a"),di=n("span"),_(cs.$$.fragment),af=l(),ci=n("span"),lf=a("TFCLIPTextModel"),Il=l(),ps=n("div"),oe=n("div"),_(hs.$$.fragment),df=l(),qt=n("p"),cf=a("The "),Mr=n("a"),pf=a("TFCLIPTextModel"),hf=a(" forward method, overrides the "),pi=n("code"),mf=a("__call__"),ff=a(" special method."),uf=l(),_(wo.$$.fragment),gf=l(),hi=n("p"),_f=a("Examples:"),vf=l(),_(ms.$$.fragment),Cl=l(),Dt=n("h2"),xo=n("a"),mi=n("span"),_(fs.$$.fragment),Pf=l(),fi=n("span"),Tf=a("TFCLIPVisionModel"),bl=l(),us=n("div"),ne=n("div"),_(gs.$$.fragment),If=l(),At=n("p"),Cf=a("The "),jr=n("a"),bf=a("TFCLIPVisionModel"),yf=a(" forward method, overrides the "),ui=n("code"),Lf=a("__call__"),kf=a(" special method."),wf=l(),_($o.$$.fragment),xf=l(),gi=n("p"),$f=a("Examples:"),Ef=l(),_(_s.$$.fragment),yl=l(),Nt=n("h2"),Eo=n("a"),_i=n("span"),_(vs.$$.fragment),zf=l(),vi=n("span"),Mf=a("FlaxCLIPModel"),Ll=l(),z=n("div"),_(Ps.$$.fragment),jf=l(),Ts=n("p"),Ff=a("This model inherits from "),Fr=n("a"),qf=a("FlaxPreTrainedModel"),Df=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Af=l(),Is=n("p"),Nf=a("This model is also a Flax Linen "),Cs=n("a"),Of=a("flax.linen.Module"),Vf=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sf=l(),Pi=n("p"),Wf=a("Finally, this model supports inherent JAX features such as:"),Bf=l(),Ee=n("ul"),Ti=n("li"),bs=n("a"),Uf=a("Just-In-Time (JIT) compilation"),Rf=l(),Ii=n("li"),ys=n("a"),Hf=a("Automatic Differentiation"),Kf=l(),Ci=n("li"),Ls=n("a"),Gf=a("Vectorization"),Jf=l(),bi=n("li"),ks=n("a"),Xf=a("Parallelization"),Zf=l(),se=n("div"),_(ws.$$.fragment),Qf=l(),Ot=n("p"),Yf=a("The "),yi=n("code"),eu=a("FlaxCLIPPreTrainedModel"),tu=a("forward method, overrides the "),Li=n("code"),ou=a("__call__"),nu=a(" special method."),su=l(),_(zo.$$.fragment),ru=l(),ki=n("p"),au=a("Example:"),iu=l(),_(xs.$$.fragment),lu=l(),Oe=n("div"),_($s.$$.fragment),du=l(),wi=n("p"),cu=a("Examples:"),pu=l(),_(Es.$$.fragment),hu=l(),Ve=n("div"),_(zs.$$.fragment),mu=l(),xi=n("p"),fu=a("Examples:"),uu=l(),_(Ms.$$.fragment),kl=l(),Vt=n("h2"),Mo=n("a"),$i=n("span"),_(js.$$.fragment),gu=l(),Ei=n("span"),_u=a("FlaxCLIPTextModel"),wl=l(),Fs=n("div"),re=n("div"),_(qs.$$.fragment),vu=l(),St=n("p"),Pu=a("The "),zi=n("code"),Tu=a("FlaxCLIPTextPreTrainedModel"),Iu=a("forward method, overrides the "),Mi=n("code"),Cu=a("__call__"),bu=a(" special method."),yu=l(),_(jo.$$.fragment),Lu=l(),ji=n("p"),ku=a("Example:"),wu=l(),_(Ds.$$.fragment),xl=l(),Wt=n("h2"),Fo=n("a"),Fi=n("span"),_(As.$$.fragment),xu=l(),qi=n("span"),$u=a("FlaxCLIPVisionModel"),$l=l(),Ns=n("div"),ae=n("div"),_(Os.$$.fragment),Eu=l(),Bt=n("p"),zu=a("The "),Di=n("code"),Mu=a("FlaxCLIPVisionPreTrainedModel"),ju=a("forward method, overrides the "),Ai=n("code"),Fu=a("__call__"),qu=a(" special method."),Du=l(),_(qo.$$.fragment),Au=l(),Ni=n("p"),Nu=a("Example:"),Ou=l(),_(Vs.$$.fragment),this.h()},l(t){const h=Gv('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),L=d(t),u=s(t,"H1",{class:!0});var Ss=r(u);b=s(Ss,"A",{id:!0,class:!0,href:!0});var Oi=r(b);y=s(Oi,"SPAN",{});var Vi=r(y);v(g.$$.fragment,Vi),Vi.forEach(o),Oi.forEach(o),f=d(Ss),k=s(Ss,"SPAN",{});var Si=r(k);Vo=i(Si,"CLIP"),Si.forEach(o),Ss.forEach(o),at=d(t),M=s(t,"H2",{class:!0});var Ws=r(M);ue=s(Ws,"A",{id:!0,class:!0,href:!0});var Wi=r(ue);Ce=s(Wi,"SPAN",{});var Bi=r(Ce);v(be.$$.fragment,Bi),Bi.forEach(o),Wi.forEach(o),So=d(Ws),ye=s(Ws,"SPAN",{});var Ui=r(ye);Wo=i(Ui,"Overview"),Ui.forEach(o),Ws.forEach(o),Ut=d(t),pe=s(t,"P",{});var Bs=r(pe);Me=i(Bs,"The CLIP model was proposed in "),Le=s(Bs,"A",{href:!0,rel:!0});var Ri=r(Le);Rt=i(Ri,"Learning Transferable Visual Models From Natural Language Supervision"),Ri.forEach(o),H=i(Bs,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Bs.forEach(o),he=d(t),je=s(t,"P",{});var Hi=r(je);it=i(Hi,"The abstract from the paper is the following:"),Hi.forEach(o),Ht=d(t),Fe=s(t,"P",{});var Ki=r(Fe);ke=s(Ki,"EM",{});var Gi=r(ke);Bo=i(Gi,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Gi.forEach(o),Ki.forEach(o),Kt=d(t),A=s(t,"H2",{class:!0});var Us=r(A);ge=s(Us,"A",{id:!0,class:!0,href:!0});var Wu=r(ge);we=s(Wu,"SPAN",{});var Bu=r(we);v(xe.$$.fragment,Bu),Bu.forEach(o),Wu.forEach(o),Uo=d(Us),$e=s(Us,"SPAN",{});var Uu=r($e);Ro=i(Uu,"Usage"),Uu.forEach(o),Us.forEach(o),Gt=d(t),me=s(t,"P",{});var Ru=r(me);Ho=i(Ru,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Ru.forEach(o),qe=d(t),_e=s(t,"P",{});var zl=r(_e);x=i(zl,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s(zl,"A",{href:!0});var Hu=r(j);Jt=i(Hu,"CLIPFeatureExtractor"),Hu.forEach(o),Rs=i(zl," can be used to resize (or rescale) and normalize images for the model."),zl.forEach(o),Ko=d(t),E=s(t,"P",{});var ie=r(E);Hs=i(ie,"The "),lt=s(ie,"A",{href:!0});var Ku=r(lt);Ks=i(Ku,"CLIPTokenizer"),Ku.forEach(o),De=i(ie," is used to encode the text. The "),ve=s(ie,"A",{href:!0});var Gu=r(ve);Gs=i(Gu,"CLIPProcessor"),Gu.forEach(o),Js=i(ie,` wraps
`),Pe=s(ie,"A",{href:!0});var Ju=r(Pe);Xs=i(Ju,"CLIPFeatureExtractor"),Ju.forEach(o),Zs=i(ie," and "),Ae=s(ie,"A",{href:!0});var Xu=r(Ae);Qs=i(Xu,"CLIPTokenizer"),Xu.forEach(o),gd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Ys=s(ie,"A",{href:!0});var Zu=r(Ys);_d=i(Zu,"CLIPProcessor"),Zu.forEach(o),vd=i(ie," and "),er=s(ie,"A",{href:!0});var Qu=r(er);Pd=i(Qu,"CLIPModel"),Qu.forEach(o),Td=i(ie,"."),ie.forEach(o),Xi=d(t),v(Go.$$.fragment,t),Zi=d(t),Ne=s(t,"P",{});var qr=r(Ne);Id=i(qr,"This model was contributed by "),Jo=s(qr,"A",{href:!0,rel:!0});var Yu=r(Jo);Cd=i(Yu,"valhalla"),Yu.forEach(o),bd=i(qr,". The original code can be found "),Xo=s(qr,"A",{href:!0,rel:!0});var eg=r(Xo);yd=i(eg,"here"),eg.forEach(o),Ld=i(qr,"."),qr.forEach(o),Qi=d(t),dt=s(t,"H2",{class:!0});var Ml=r(dt);Xt=s(Ml,"A",{id:!0,class:!0,href:!0});var tg=r(Xt);na=s(tg,"SPAN",{});var og=r(na);v(Zo.$$.fragment,og),og.forEach(o),tg.forEach(o),kd=d(Ml),sa=s(Ml,"SPAN",{});var ng=r(sa);wd=i(ng,"CLIPConfig"),ng.forEach(o),Ml.forEach(o),Yi=d(t),fe=s(t,"DIV",{class:!0});var Do=r(fe);v(Qo.$$.fragment,Do),xd=d(Do),Zt=s(Do,"P",{});var Ji=r(Zt);tr=s(Ji,"A",{href:!0});var sg=r(tr);$d=i(sg,"CLIPConfig"),sg.forEach(o),Ed=i(Ji," is the configuration class to store the configuration of a "),or=s(Ji,"A",{href:!0});var rg=r(or);zd=i(rg,"CLIPModel"),rg.forEach(o),Md=i(Ji,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Ji.forEach(o),jd=d(Do),ct=s(Do,"P",{});var Dr=r(ct);Fd=i(Dr,"Configuration objects inherit from "),nr=s(Dr,"A",{href:!0});var ag=r(nr);qd=i(ag,"PretrainedConfig"),ag.forEach(o),Dd=i(Dr,` and can be used to control the model outputs. Read the
documentation from `),sr=s(Dr,"A",{href:!0});var ig=r(sr);Ad=i(ig,"PretrainedConfig"),ig.forEach(o),Nd=i(Dr," for more information."),Dr.forEach(o),Od=d(Do),Qt=s(Do,"DIV",{class:!0});var jl=r(Qt);v(Yo.$$.fragment,jl),Vd=d(jl),en=s(jl,"P",{});var Fl=r(en);Sd=i(Fl,"Instantiate a "),rr=s(Fl,"A",{href:!0});var lg=r(rr);Wd=i(lg,"CLIPConfig"),lg.forEach(o),Bd=i(Fl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Fl.forEach(o),jl.forEach(o),Do.forEach(o),el=d(t),pt=s(t,"H2",{class:!0});var ql=r(pt);Yt=s(ql,"A",{id:!0,class:!0,href:!0});var dg=r(Yt);ra=s(dg,"SPAN",{});var cg=r(ra);v(tn.$$.fragment,cg),cg.forEach(o),dg.forEach(o),Ud=d(ql),aa=s(ql,"SPAN",{});var pg=r(aa);Rd=i(pg,"CLIPTextConfig"),pg.forEach(o),ql.forEach(o),tl=d(t),V=s(t,"DIV",{class:!0});var Se=r(V);v(on.$$.fragment,Se),Hd=d(Se),ht=s(Se,"P",{});var Ar=r(ht);Kd=i(Ar,"This is the configuration class to store the configuration of a "),ar=s(Ar,"A",{href:!0});var hg=r(ar);Gd=i(hg,"CLIPModel"),hg.forEach(o),Jd=i(Ar,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),nn=s(Ar,"A",{href:!0,rel:!0});var mg=r(nn);Xd=i(mg,"openai/clip-vit-base-patch32"),mg.forEach(o),Zd=i(Ar," architecture."),Ar.forEach(o),Qd=d(Se),mt=s(Se,"P",{});var Nr=r(mt);Yd=i(Nr,"Configuration objects inherit from "),ir=s(Nr,"A",{href:!0});var fg=r(ir);ec=i(fg,"PretrainedConfig"),fg.forEach(o),tc=i(Nr,` and can be used to control the model outputs. Read the
documentation from `),lr=s(Nr,"A",{href:!0});var ug=r(lr);oc=i(ug,"PretrainedConfig"),ug.forEach(o),nc=i(Nr," for more information."),Nr.forEach(o),sc=d(Se),ia=s(Se,"P",{});var gg=r(ia);rc=i(gg,"Example:"),gg.forEach(o),ac=d(Se),v(sn.$$.fragment,Se),Se.forEach(o),ol=d(t),ft=s(t,"H2",{class:!0});var Dl=r(ft);eo=s(Dl,"A",{id:!0,class:!0,href:!0});var _g=r(eo);la=s(_g,"SPAN",{});var vg=r(la);v(rn.$$.fragment,vg),vg.forEach(o),_g.forEach(o),ic=d(Dl),da=s(Dl,"SPAN",{});var Pg=r(da);lc=i(Pg,"CLIPVisionConfig"),Pg.forEach(o),Dl.forEach(o),nl=d(t),S=s(t,"DIV",{class:!0});var We=r(S);v(an.$$.fragment,We),dc=d(We),ut=s(We,"P",{});var Or=r(ut);cc=i(Or,"This is the configuration class to store the configuration of a "),dr=s(Or,"A",{href:!0});var Tg=r(dr);pc=i(Tg,"CLIPModel"),Tg.forEach(o),hc=i(Or,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ln=s(Or,"A",{href:!0,rel:!0});var Ig=r(ln);mc=i(Ig,"openai/clip-vit-base-patch32"),Ig.forEach(o),fc=i(Or," architecture."),Or.forEach(o),uc=d(We),gt=s(We,"P",{});var Vr=r(gt);gc=i(Vr,"Configuration objects inherit from "),cr=s(Vr,"A",{href:!0});var Cg=r(cr);_c=i(Cg,"PretrainedConfig"),Cg.forEach(o),vc=i(Vr,` and can be used to control the model outputs. Read the
documentation from `),pr=s(Vr,"A",{href:!0});var bg=r(pr);Pc=i(bg,"PretrainedConfig"),bg.forEach(o),Tc=i(Vr," for more information."),Vr.forEach(o),Ic=d(We),ca=s(We,"P",{});var yg=r(ca);Cc=i(yg,"Example:"),yg.forEach(o),bc=d(We),v(dn.$$.fragment,We),We.forEach(o),sl=d(t),_t=s(t,"H2",{class:!0});var Al=r(_t);to=s(Al,"A",{id:!0,class:!0,href:!0});var Lg=r(to);pa=s(Lg,"SPAN",{});var kg=r(pa);v(cn.$$.fragment,kg),kg.forEach(o),Lg.forEach(o),yc=d(Al),ha=s(Al,"SPAN",{});var wg=r(ha);Lc=i(wg,"CLIPTokenizer"),wg.forEach(o),Al.forEach(o),rl=d(t),F=s(t,"DIV",{class:!0});var le=r(F);v(pn.$$.fragment,le),kc=d(le),ma=s(le,"P",{});var xg=r(ma);wc=i(xg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),xg.forEach(o),xc=d(le),hn=s(le,"P",{});var Nl=r(hn);$c=i(Nl,"This tokenizer inherits from "),hr=s(Nl,"A",{href:!0});var $g=r(hr);Ec=i($g,"PreTrainedTokenizer"),$g.forEach(o),zc=i(Nl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Nl.forEach(o),Mc=d(le),Te=s(le,"DIV",{class:!0});var Ao=r(Te);v(mn.$$.fragment,Ao),jc=d(Ao),fa=s(Ao,"P",{});var Eg=r(fa);Fc=i(Eg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Eg.forEach(o),qc=d(Ao),ua=s(Ao,"UL",{});var zg=r(ua);mr=s(zg,"LI",{});var Vu=r(mr);Dc=i(Vu,"single sequence: "),ga=s(Vu,"CODE",{});var Mg=r(ga);Ac=i(Mg,"<|startoftext|> X <|endoftext|>"),Mg.forEach(o),Vu.forEach(o),zg.forEach(o),Nc=d(Ao),_a=s(Ao,"P",{});var jg=r(_a);Oc=i(jg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),jg.forEach(o),Ao.forEach(o),Vc=d(le),oo=s(le,"DIV",{class:!0});var Ol=r(oo);v(fn.$$.fragment,Ol),Sc=d(Ol),un=s(Ol,"P",{});var Vl=r(un);Wc=i(Vl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),va=s(Vl,"CODE",{});var Fg=r(va);Bc=i(Fg,"prepare_for_model"),Fg.forEach(o),Uc=i(Vl," method."),Vl.forEach(o),Ol.forEach(o),Rc=d(le),no=s(le,"DIV",{class:!0});var Sl=r(no);v(gn.$$.fragment,Sl),Hc=d(Sl),Pa=s(Sl,"P",{});var qg=r(Pa);Kc=i(qg,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),qg.forEach(o),Sl.forEach(o),Gc=d(le),Ta=s(le,"DIV",{class:!0}),r(Ta).forEach(o),le.forEach(o),al=d(t),vt=s(t,"H2",{class:!0});var Wl=r(vt);so=s(Wl,"A",{id:!0,class:!0,href:!0});var Dg=r(so);Ia=s(Dg,"SPAN",{});var Ag=r(Ia);v(_n.$$.fragment,Ag),Ag.forEach(o),Dg.forEach(o),Jc=d(Wl),Ca=s(Wl,"SPAN",{});var Ng=r(Ca);Xc=i(Ng,"CLIPTokenizerFast"),Ng.forEach(o),Wl.forEach(o),il=d(t),W=s(t,"DIV",{class:!0});var Be=r(W);v(vn.$$.fragment,Be),Zc=d(Be),Pn=s(Be,"P",{});var Bl=r(Pn);Qc=i(Bl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),ba=s(Bl,"EM",{});var Og=r(ba);Yc=i(Og,"tokenizers"),Og.forEach(o),ep=i(Bl,` library). Based on byte-level
Byte-Pair-Encoding.`),Bl.forEach(o),tp=d(Be),Tn=s(Be,"P",{});var Ul=r(Tn);op=i(Ul,"This tokenizer inherits from "),fr=s(Ul,"A",{href:!0});var Vg=r(fr);np=i(Vg,"PreTrainedTokenizerFast"),Vg.forEach(o),sp=i(Ul,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ul.forEach(o),rp=d(Be),Ie=s(Be,"DIV",{class:!0});var No=r(Ie);v(In.$$.fragment,No),ap=d(No),ya=s(No,"P",{});var Sg=r(ya);ip=i(Sg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Sg.forEach(o),lp=d(No),La=s(No,"UL",{});var Wg=r(La);ur=s(Wg,"LI",{});var Su=r(ur);dp=i(Su,"single sequence: "),ka=s(Su,"CODE",{});var Bg=r(ka);cp=i(Bg,"<|startoftext|> X <|endoftext|>"),Bg.forEach(o),Su.forEach(o),Wg.forEach(o),pp=d(No),wa=s(No,"P",{});var Ug=r(wa);hp=i(Ug,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Ug.forEach(o),No.forEach(o),mp=d(Be),ro=s(Be,"DIV",{class:!0});var Rl=r(ro);v(Cn.$$.fragment,Rl),fp=d(Rl),xa=s(Rl,"P",{});var Rg=r(xa);up=i(Rg,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Rg.forEach(o),Rl.forEach(o),Be.forEach(o),ll=d(t),Pt=s(t,"H2",{class:!0});var Hl=r(Pt);ao=s(Hl,"A",{id:!0,class:!0,href:!0});var Hg=r(ao);$a=s(Hg,"SPAN",{});var Kg=r($a);v(bn.$$.fragment,Kg),Kg.forEach(o),Hg.forEach(o),gp=d(Hl),Ea=s(Hl,"SPAN",{});var Gg=r(Ea);_p=i(Gg,"CLIPFeatureExtractor"),Gg.forEach(o),Hl.forEach(o),dl=d(t),B=s(t,"DIV",{class:!0});var Ue=r(B);v(yn.$$.fragment,Ue),vp=d(Ue),za=s(Ue,"P",{});var Jg=r(za);Pp=i(Jg,"Constructs a CLIP feature extractor."),Jg.forEach(o),Tp=d(Ue),Ln=s(Ue,"P",{});var Kl=r(Ln);Ip=i(Kl,"This feature extractor inherits from "),gr=s(Kl,"A",{href:!0});var Xg=r(gr);Cp=i(Xg,"FeatureExtractionMixin"),Xg.forEach(o),bp=i(Kl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Kl.forEach(o),yp=d(Ue),io=s(Ue,"DIV",{class:!0});var Gl=r(io);v(kn.$$.fragment,Gl),Lp=d(Gl),wn=s(Gl,"P",{});var Jl=r(wn);kp=i(Jl,"Crops "),Ma=s(Jl,"CODE",{});var Zg=r(Ma);wp=i(Zg,"image"),Zg.forEach(o),xp=i(Jl,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Jl.forEach(o),Gl.forEach(o),$p=d(Ue),lo=s(Ue,"DIV",{class:!0});var Xl=r(lo);v(xn.$$.fragment,Xl),Ep=d(Xl),Tt=s(Xl,"P",{});var Sr=r(Tt);zp=i(Sr,"Resizes "),ja=s(Sr,"CODE",{});var Qg=r(ja);Mp=i(Qg,"image"),Qg.forEach(o),jp=i(Sr,". Note that this will trigger a conversion of "),Fa=s(Sr,"CODE",{});var Yg=r(Fa);Fp=i(Yg,"image"),Yg.forEach(o),qp=i(Sr," to a PIL Image."),Sr.forEach(o),Xl.forEach(o),Ue.forEach(o),cl=d(t),It=s(t,"H2",{class:!0});var Zl=r(It);co=s(Zl,"A",{id:!0,class:!0,href:!0});var e_=r(co);qa=s(e_,"SPAN",{});var t_=r(qa);v($n.$$.fragment,t_),t_.forEach(o),e_.forEach(o),Dp=d(Zl),Da=s(Zl,"SPAN",{});var o_=r(Da);Ap=i(o_,"CLIPProcessor"),o_.forEach(o),Zl.forEach(o),pl=d(t),U=s(t,"DIV",{class:!0});var Re=r(U);v(En.$$.fragment,Re),Np=d(Re),Aa=s(Re,"P",{});var n_=r(Aa);Op=i(n_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),n_.forEach(o),Vp=d(Re),K=s(Re,"P",{});var ze=r(K);_r=s(ze,"A",{href:!0});var s_=r(_r);Sp=i(s_,"CLIPProcessor"),s_.forEach(o),Wp=i(ze," offers all the functionalities of "),vr=s(ze,"A",{href:!0});var r_=r(vr);Bp=i(r_,"CLIPFeatureExtractor"),r_.forEach(o),Up=i(ze," and "),Pr=s(ze,"A",{href:!0});var a_=r(Pr);Rp=i(a_,"CLIPTokenizer"),a_.forEach(o),Hp=i(ze,`. See the
`),Na=s(ze,"CODE",{});var i_=r(Na);Kp=i(i_,"__call__()"),i_.forEach(o),Gp=i(ze,"and "),Tr=s(ze,"A",{href:!0});var l_=r(Tr);Jp=i(l_,"decode()"),l_.forEach(o),Xp=i(ze," for more information."),ze.forEach(o),Zp=d(Re),po=s(Re,"DIV",{class:!0});var Ql=r(po);v(zn.$$.fragment,Ql),Qp=d(Ql),Mn=s(Ql,"P",{});var Yl=r(Mn);Yp=i(Yl,"This method forwards all its arguments to CLIPTokenizer\u2019s "),Ir=s(Yl,"A",{href:!0});var d_=r(Ir);eh=i(d_,"batch_decode()"),d_.forEach(o),th=i(Yl,`. Please refer
to the docstring of this method for more information.`),Yl.forEach(o),Ql.forEach(o),oh=d(Re),ho=s(Re,"DIV",{class:!0});var ed=r(ho);v(jn.$$.fragment,ed),nh=d(ed),Fn=s(ed,"P",{});var td=r(Fn);sh=i(td,"This method forwards all its arguments to CLIPTokenizer\u2019s "),Cr=s(td,"A",{href:!0});var c_=r(Cr);rh=i(c_,"decode()"),c_.forEach(o),ah=i(td,`. Please refer to the
docstring of this method for more information.`),td.forEach(o),ed.forEach(o),Re.forEach(o),hl=d(t),Ct=s(t,"H2",{class:!0});var od=r(Ct);mo=s(od,"A",{id:!0,class:!0,href:!0});var p_=r(mo);Oa=s(p_,"SPAN",{});var h_=r(Oa);v(qn.$$.fragment,h_),h_.forEach(o),p_.forEach(o),ih=d(od),Va=s(od,"SPAN",{});var m_=r(Va);lh=i(m_,"CLIPModel"),m_.forEach(o),od.forEach(o),ml=d(t),R=s(t,"DIV",{class:!0});var He=r(R);v(Dn.$$.fragment,He),dh=d(He),An=s(He,"P",{});var nd=r(An);ch=i(nd,"This model is a PyTorch "),Nn=s(nd,"A",{href:!0,rel:!0});var f_=r(Nn);ph=i(f_,"torch.nn.Module"),f_.forEach(o),hh=i(nd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nd.forEach(o),mh=d(He),G=s(He,"DIV",{class:!0});var Ke=r(G);v(On.$$.fragment,Ke),fh=d(Ke),bt=s(Ke,"P",{});var Wr=r(bt);uh=i(Wr,"The "),br=s(Wr,"A",{href:!0});var u_=r(br);gh=i(u_,"CLIPModel"),u_.forEach(o),_h=i(Wr," forward method, overrides the "),Sa=s(Wr,"CODE",{});var g_=r(Sa);vh=i(g_,"__call__"),g_.forEach(o),Ph=i(Wr," special method."),Wr.forEach(o),Th=d(Ke),v(fo.$$.fragment,Ke),Ih=d(Ke),Wa=s(Ke,"P",{});var __=r(Wa);Ch=i(__,"Examples:"),__.forEach(o),bh=d(Ke),v(Vn.$$.fragment,Ke),Ke.forEach(o),yh=d(He),J=s(He,"DIV",{class:!0});var Ge=r(J);v(Sn.$$.fragment,Ge),Lh=d(Ge),yt=s(Ge,"P",{});var Br=r(yt);kh=i(Br,"The "),yr=s(Br,"A",{href:!0});var v_=r(yr);wh=i(v_,"CLIPModel"),v_.forEach(o),xh=i(Br," forward method, overrides the "),Ba=s(Br,"CODE",{});var P_=r(Ba);$h=i(P_,"__call__"),P_.forEach(o),Eh=i(Br," special method."),Br.forEach(o),zh=d(Ge),v(uo.$$.fragment,Ge),Mh=d(Ge),Ua=s(Ge,"P",{});var T_=r(Ua);jh=i(T_,"Examples:"),T_.forEach(o),Fh=d(Ge),v(Wn.$$.fragment,Ge),Ge.forEach(o),qh=d(He),X=s(He,"DIV",{class:!0});var Je=r(X);v(Bn.$$.fragment,Je),Dh=d(Je),Lt=s(Je,"P",{});var Ur=r(Lt);Ah=i(Ur,"The "),Lr=s(Ur,"A",{href:!0});var I_=r(Lr);Nh=i(I_,"CLIPModel"),I_.forEach(o),Oh=i(Ur," forward method, overrides the "),Ra=s(Ur,"CODE",{});var C_=r(Ra);Vh=i(C_,"__call__"),C_.forEach(o),Sh=i(Ur," special method."),Ur.forEach(o),Wh=d(Je),v(go.$$.fragment,Je),Bh=d(Je),Ha=s(Je,"P",{});var b_=r(Ha);Uh=i(b_,"Examples:"),b_.forEach(o),Rh=d(Je),v(Un.$$.fragment,Je),Je.forEach(o),He.forEach(o),fl=d(t),kt=s(t,"H2",{class:!0});var sd=r(kt);_o=s(sd,"A",{id:!0,class:!0,href:!0});var y_=r(_o);Ka=s(y_,"SPAN",{});var L_=r(Ka);v(Rn.$$.fragment,L_),L_.forEach(o),y_.forEach(o),Hh=d(sd),Ga=s(sd,"SPAN",{});var k_=r(Ga);Kh=i(k_,"CLIPTextModel"),k_.forEach(o),sd.forEach(o),ul=d(t),Hn=s(t,"DIV",{class:!0});var w_=r(Hn);Z=s(w_,"DIV",{class:!0});var Xe=r(Z);v(Kn.$$.fragment,Xe),Gh=d(Xe),wt=s(Xe,"P",{});var Rr=r(wt);Jh=i(Rr,"The "),kr=s(Rr,"A",{href:!0});var x_=r(kr);Xh=i(x_,"CLIPTextModel"),x_.forEach(o),Zh=i(Rr," forward method, overrides the "),Ja=s(Rr,"CODE",{});var $_=r(Ja);Qh=i($_,"__call__"),$_.forEach(o),Yh=i(Rr," special method."),Rr.forEach(o),em=d(Xe),v(vo.$$.fragment,Xe),tm=d(Xe),Xa=s(Xe,"P",{});var E_=r(Xa);om=i(E_,"Examples:"),E_.forEach(o),nm=d(Xe),v(Gn.$$.fragment,Xe),Xe.forEach(o),w_.forEach(o),gl=d(t),xt=s(t,"H2",{class:!0});var rd=r(xt);Po=s(rd,"A",{id:!0,class:!0,href:!0});var z_=r(Po);Za=s(z_,"SPAN",{});var M_=r(Za);v(Jn.$$.fragment,M_),M_.forEach(o),z_.forEach(o),sm=d(rd),Qa=s(rd,"SPAN",{});var j_=r(Qa);rm=i(j_,"CLIPVisionModel"),j_.forEach(o),rd.forEach(o),_l=d(t),Xn=s(t,"DIV",{class:!0});var F_=r(Xn);Q=s(F_,"DIV",{class:!0});var Ze=r(Q);v(Zn.$$.fragment,Ze),am=d(Ze),$t=s(Ze,"P",{});var Hr=r($t);im=i(Hr,"The "),wr=s(Hr,"A",{href:!0});var q_=r(wr);lm=i(q_,"CLIPVisionModel"),q_.forEach(o),dm=i(Hr," forward method, overrides the "),Ya=s(Hr,"CODE",{});var D_=r(Ya);cm=i(D_,"__call__"),D_.forEach(o),pm=i(Hr," special method."),Hr.forEach(o),hm=d(Ze),v(To.$$.fragment,Ze),mm=d(Ze),ei=s(Ze,"P",{});var A_=r(ei);fm=i(A_,"Examples:"),A_.forEach(o),um=d(Ze),v(Qn.$$.fragment,Ze),Ze.forEach(o),F_.forEach(o),vl=d(t),Et=s(t,"H2",{class:!0});var ad=r(Et);Io=s(ad,"A",{id:!0,class:!0,href:!0});var N_=r(Io);ti=s(N_,"SPAN",{});var O_=r(ti);v(Yn.$$.fragment,O_),O_.forEach(o),N_.forEach(o),gm=d(ad),oi=s(ad,"SPAN",{});var V_=r(oi);_m=i(V_,"TFCLIPModel"),V_.forEach(o),ad.forEach(o),Pl=d(t),q=s(t,"DIV",{class:!0});var de=r(q);v(es.$$.fragment,de),vm=d(de),ts=s(de,"P",{});var id=r(ts);Pm=i(id,"This model inherits from "),xr=s(id,"A",{href:!0});var S_=r(xr);Tm=i(S_,"TFPreTrainedModel"),S_.forEach(o),Im=i(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(o),Cm=d(de),os=s(de,"P",{});var ld=r(os);bm=i(ld,"This model is also a "),ns=s(ld,"A",{href:!0,rel:!0});var W_=r(ns);ym=i(W_,"tf.keras.Model"),W_.forEach(o),Lm=i(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(o),km=d(de),v(Co.$$.fragment,de),wm=d(de),Y=s(de,"DIV",{class:!0});var Qe=r(Y);v(ss.$$.fragment,Qe),xm=d(Qe),zt=s(Qe,"P",{});var Kr=r(zt);$m=i(Kr,"The "),$r=s(Kr,"A",{href:!0});var B_=r($r);Em=i(B_,"TFCLIPModel"),B_.forEach(o),zm=i(Kr," forward method, overrides the "),ni=s(Kr,"CODE",{});var U_=r(ni);Mm=i(U_,"__call__"),U_.forEach(o),jm=i(Kr," special method."),Kr.forEach(o),Fm=d(Qe),v(bo.$$.fragment,Qe),qm=d(Qe),si=s(Qe,"P",{});var R_=r(si);Dm=i(R_,"Examples:"),R_.forEach(o),Am=d(Qe),v(rs.$$.fragment,Qe),Qe.forEach(o),Nm=d(de),ee=s(de,"DIV",{class:!0});var Ye=r(ee);v(as.$$.fragment,Ye),Om=d(Ye),Mt=s(Ye,"P",{});var Gr=r(Mt);Vm=i(Gr,"The "),Er=s(Gr,"A",{href:!0});var H_=r(Er);Sm=i(H_,"TFCLIPModel"),H_.forEach(o),Wm=i(Gr," forward method, overrides the "),ri=s(Gr,"CODE",{});var K_=r(ri);Bm=i(K_,"__call__"),K_.forEach(o),Um=i(Gr," special method."),Gr.forEach(o),Rm=d(Ye),v(yo.$$.fragment,Ye),Hm=d(Ye),ai=s(Ye,"P",{});var G_=r(ai);Km=i(G_,"Examples:"),G_.forEach(o),Gm=d(Ye),v(is.$$.fragment,Ye),Ye.forEach(o),Jm=d(de),te=s(de,"DIV",{class:!0});var et=r(te);v(ls.$$.fragment,et),Xm=d(et),jt=s(et,"P",{});var Jr=r(jt);Zm=i(Jr,"The "),zr=s(Jr,"A",{href:!0});var J_=r(zr);Qm=i(J_,"TFCLIPModel"),J_.forEach(o),Ym=i(Jr," forward method, overrides the "),ii=s(Jr,"CODE",{});var X_=r(ii);ef=i(X_,"__call__"),X_.forEach(o),tf=i(Jr," special method."),Jr.forEach(o),of=d(et),v(Lo.$$.fragment,et),nf=d(et),li=s(et,"P",{});var Z_=r(li);sf=i(Z_,"Examples:"),Z_.forEach(o),rf=d(et),v(ds.$$.fragment,et),et.forEach(o),de.forEach(o),Tl=d(t),Ft=s(t,"H2",{class:!0});var dd=r(Ft);ko=s(dd,"A",{id:!0,class:!0,href:!0});var Q_=r(ko);di=s(Q_,"SPAN",{});var Y_=r(di);v(cs.$$.fragment,Y_),Y_.forEach(o),Q_.forEach(o),af=d(dd),ci=s(dd,"SPAN",{});var ev=r(ci);lf=i(ev,"TFCLIPTextModel"),ev.forEach(o),dd.forEach(o),Il=d(t),ps=s(t,"DIV",{class:!0});var tv=r(ps);oe=s(tv,"DIV",{class:!0});var tt=r(oe);v(hs.$$.fragment,tt),df=d(tt),qt=s(tt,"P",{});var Xr=r(qt);cf=i(Xr,"The "),Mr=s(Xr,"A",{href:!0});var ov=r(Mr);pf=i(ov,"TFCLIPTextModel"),ov.forEach(o),hf=i(Xr," forward method, overrides the "),pi=s(Xr,"CODE",{});var nv=r(pi);mf=i(nv,"__call__"),nv.forEach(o),ff=i(Xr," special method."),Xr.forEach(o),uf=d(tt),v(wo.$$.fragment,tt),gf=d(tt),hi=s(tt,"P",{});var sv=r(hi);_f=i(sv,"Examples:"),sv.forEach(o),vf=d(tt),v(ms.$$.fragment,tt),tt.forEach(o),tv.forEach(o),Cl=d(t),Dt=s(t,"H2",{class:!0});var cd=r(Dt);xo=s(cd,"A",{id:!0,class:!0,href:!0});var rv=r(xo);mi=s(rv,"SPAN",{});var av=r(mi);v(fs.$$.fragment,av),av.forEach(o),rv.forEach(o),Pf=d(cd),fi=s(cd,"SPAN",{});var iv=r(fi);Tf=i(iv,"TFCLIPVisionModel"),iv.forEach(o),cd.forEach(o),bl=d(t),us=s(t,"DIV",{class:!0});var lv=r(us);ne=s(lv,"DIV",{class:!0});var ot=r(ne);v(gs.$$.fragment,ot),If=d(ot),At=s(ot,"P",{});var Zr=r(At);Cf=i(Zr,"The "),jr=s(Zr,"A",{href:!0});var dv=r(jr);bf=i(dv,"TFCLIPVisionModel"),dv.forEach(o),yf=i(Zr," forward method, overrides the "),ui=s(Zr,"CODE",{});var cv=r(ui);Lf=i(cv,"__call__"),cv.forEach(o),kf=i(Zr," special method."),Zr.forEach(o),wf=d(ot),v($o.$$.fragment,ot),xf=d(ot),gi=s(ot,"P",{});var pv=r(gi);$f=i(pv,"Examples:"),pv.forEach(o),Ef=d(ot),v(_s.$$.fragment,ot),ot.forEach(o),lv.forEach(o),yl=d(t),Nt=s(t,"H2",{class:!0});var pd=r(Nt);Eo=s(pd,"A",{id:!0,class:!0,href:!0});var hv=r(Eo);_i=s(hv,"SPAN",{});var mv=r(_i);v(vs.$$.fragment,mv),mv.forEach(o),hv.forEach(o),zf=d(pd),vi=s(pd,"SPAN",{});var fv=r(vi);Mf=i(fv,"FlaxCLIPModel"),fv.forEach(o),pd.forEach(o),Ll=d(t),z=s(t,"DIV",{class:!0});var O=r(z);v(Ps.$$.fragment,O),jf=d(O),Ts=s(O,"P",{});var hd=r(Ts);Ff=i(hd,"This model inherits from "),Fr=s(hd,"A",{href:!0});var uv=r(Fr);qf=i(uv,"FlaxPreTrainedModel"),uv.forEach(o),Df=i(hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hd.forEach(o),Af=d(O),Is=s(O,"P",{});var md=r(Is);Nf=i(md,"This model is also a Flax Linen "),Cs=s(md,"A",{href:!0,rel:!0});var gv=r(Cs);Of=i(gv,"flax.linen.Module"),gv.forEach(o),Vf=i(md,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),md.forEach(o),Sf=d(O),Pi=s(O,"P",{});var _v=r(Pi);Wf=i(_v,"Finally, this model supports inherent JAX features such as:"),_v.forEach(o),Bf=d(O),Ee=s(O,"UL",{});var Oo=r(Ee);Ti=s(Oo,"LI",{});var vv=r(Ti);bs=s(vv,"A",{href:!0,rel:!0});var Pv=r(bs);Uf=i(Pv,"Just-In-Time (JIT) compilation"),Pv.forEach(o),vv.forEach(o),Rf=d(Oo),Ii=s(Oo,"LI",{});var Tv=r(Ii);ys=s(Tv,"A",{href:!0,rel:!0});var Iv=r(ys);Hf=i(Iv,"Automatic Differentiation"),Iv.forEach(o),Tv.forEach(o),Kf=d(Oo),Ci=s(Oo,"LI",{});var Cv=r(Ci);Ls=s(Cv,"A",{href:!0,rel:!0});var bv=r(Ls);Gf=i(bv,"Vectorization"),bv.forEach(o),Cv.forEach(o),Jf=d(Oo),bi=s(Oo,"LI",{});var yv=r(bi);ks=s(yv,"A",{href:!0,rel:!0});var Lv=r(ks);Xf=i(Lv,"Parallelization"),Lv.forEach(o),yv.forEach(o),Oo.forEach(o),Zf=d(O),se=s(O,"DIV",{class:!0});var nt=r(se);v(ws.$$.fragment,nt),Qf=d(nt),Ot=s(nt,"P",{});var Qr=r(Ot);Yf=i(Qr,"The "),yi=s(Qr,"CODE",{});var kv=r(yi);eu=i(kv,"FlaxCLIPPreTrainedModel"),kv.forEach(o),tu=i(Qr,"forward method, overrides the "),Li=s(Qr,"CODE",{});var wv=r(Li);ou=i(wv,"__call__"),wv.forEach(o),nu=i(Qr," special method."),Qr.forEach(o),su=d(nt),v(zo.$$.fragment,nt),ru=d(nt),ki=s(nt,"P",{});var xv=r(ki);au=i(xv,"Example:"),xv.forEach(o),iu=d(nt),v(xs.$$.fragment,nt),nt.forEach(o),lu=d(O),Oe=s(O,"DIV",{class:!0});var Yr=r(Oe);v($s.$$.fragment,Yr),du=d(Yr),wi=s(Yr,"P",{});var $v=r(wi);cu=i($v,"Examples:"),$v.forEach(o),pu=d(Yr),v(Es.$$.fragment,Yr),Yr.forEach(o),hu=d(O),Ve=s(O,"DIV",{class:!0});var ea=r(Ve);v(zs.$$.fragment,ea),mu=d(ea),xi=s(ea,"P",{});var Ev=r(xi);fu=i(Ev,"Examples:"),Ev.forEach(o),uu=d(ea),v(Ms.$$.fragment,ea),ea.forEach(o),O.forEach(o),kl=d(t),Vt=s(t,"H2",{class:!0});var fd=r(Vt);Mo=s(fd,"A",{id:!0,class:!0,href:!0});var zv=r(Mo);$i=s(zv,"SPAN",{});var Mv=r($i);v(js.$$.fragment,Mv),Mv.forEach(o),zv.forEach(o),gu=d(fd),Ei=s(fd,"SPAN",{});var jv=r(Ei);_u=i(jv,"FlaxCLIPTextModel"),jv.forEach(o),fd.forEach(o),wl=d(t),Fs=s(t,"DIV",{class:!0});var Fv=r(Fs);re=s(Fv,"DIV",{class:!0});var st=r(re);v(qs.$$.fragment,st),vu=d(st),St=s(st,"P",{});var ta=r(St);Pu=i(ta,"The "),zi=s(ta,"CODE",{});var qv=r(zi);Tu=i(qv,"FlaxCLIPTextPreTrainedModel"),qv.forEach(o),Iu=i(ta,"forward method, overrides the "),Mi=s(ta,"CODE",{});var Dv=r(Mi);Cu=i(Dv,"__call__"),Dv.forEach(o),bu=i(ta," special method."),ta.forEach(o),yu=d(st),v(jo.$$.fragment,st),Lu=d(st),ji=s(st,"P",{});var Av=r(ji);ku=i(Av,"Example:"),Av.forEach(o),wu=d(st),v(Ds.$$.fragment,st),st.forEach(o),Fv.forEach(o),xl=d(t),Wt=s(t,"H2",{class:!0});var ud=r(Wt);Fo=s(ud,"A",{id:!0,class:!0,href:!0});var Nv=r(Fo);Fi=s(Nv,"SPAN",{});var Ov=r(Fi);v(As.$$.fragment,Ov),Ov.forEach(o),Nv.forEach(o),xu=d(ud),qi=s(ud,"SPAN",{});var Vv=r(qi);$u=i(Vv,"FlaxCLIPVisionModel"),Vv.forEach(o),ud.forEach(o),$l=d(t),Ns=s(t,"DIV",{class:!0});var Sv=r(Ns);ae=s(Sv,"DIV",{class:!0});var rt=r(ae);v(Os.$$.fragment,rt),Eu=d(rt),Bt=s(rt,"P",{});var oa=r(Bt);zu=i(oa,"The "),Di=s(oa,"CODE",{});var Wv=r(Di);Mu=i(Wv,"FlaxCLIPVisionPreTrainedModel"),Wv.forEach(o),ju=i(oa,"forward method, overrides the "),Ai=s(oa,"CODE",{});var Bv=r(Ai);Fu=i(Bv,"__call__"),Bv.forEach(o),qu=i(oa," special method."),oa.forEach(o),Du=d(rt),v(qo.$$.fragment,rt),Au=d(rt),Ni=s(rt,"P",{});var Uv=r(Ni);Nu=i(Uv,"Example:"),Uv.forEach(o),Ou=d(rt),v(Vs.$$.fragment,rt),rt.forEach(o),Sv.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(c1)),c(b,"id","clip"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#clip"),c(u,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(M,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(A,"class","relative group"),c(j,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Ae,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer"),c(Ys,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPProcessor"),c(er,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel"),c(Jo,"href","https://huggingface.co/valhalla"),c(Jo,"rel","nofollow"),c(Xo,"href","https://github.com/openai/CLIP"),c(Xo,"rel","nofollow"),c(Xt,"id","transformers.CLIPConfig"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(tr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPConfig"),c(or,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel"),c(nr,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(sr,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(rr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPConfig"),c(Qt,"class","docstring"),c(fe,"class","docstring"),c(Yt,"id","transformers.CLIPTextConfig"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(ar,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel"),c(nn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(nn,"rel","nofollow"),c(ir,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(lr,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring"),c(eo,"id","transformers.CLIPVisionConfig"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(dr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel"),c(ln,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(ln,"rel","nofollow"),c(cr,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(pr,"href","/docs/transformers/pr_15761/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(to,"id","transformers.CLIPTokenizer"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(hr,"href","/docs/transformers/pr_15761/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Te,"class","docstring"),c(oo,"class","docstring"),c(no,"class","docstring"),c(Ta,"class","docstring"),c(F,"class","docstring"),c(so,"id","transformers.CLIPTokenizerFast"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(fr,"href","/docs/transformers/pr_15761/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ie,"class","docstring"),c(ro,"class","docstring"),c(W,"class","docstring"),c(ao,"id","transformers.CLIPFeatureExtractor"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(gr,"href","/docs/transformers/pr_15761/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(io,"class","docstring"),c(lo,"class","docstring"),c(B,"class","docstring"),c(co,"id","transformers.CLIPProcessor"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.CLIPProcessor"),c(It,"class","relative group"),c(_r,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPProcessor"),c(vr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Pr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTokenizer"),c(Tr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(Ir,"href","/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(po,"class","docstring"),c(Cr,"href","/docs/transformers/pr_15761/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(ho,"class","docstring"),c(U,"class","docstring"),c(mo,"id","transformers.CLIPModel"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.CLIPModel"),c(Ct,"class","relative group"),c(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Nn,"rel","nofollow"),c(br,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(yr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(Lr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(_o,"id","transformers.CLIPTextModel"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.CLIPTextModel"),c(kt,"class","relative group"),c(kr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c(Hn,"class","docstring"),c(Po,"id","transformers.CLIPVisionModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(wr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Xn,"class","docstring"),c(Io,"id","transformers.TFCLIPModel"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.TFCLIPModel"),c(Et,"class","relative group"),c(xr,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.TFPreTrainedModel"),c(ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ns,"rel","nofollow"),c($r,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Er,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(zr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(ko,"id","transformers.TFCLIPTextModel"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.TFCLIPTextModel"),c(Ft,"class","relative group"),c(Mr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(ps,"class","docstring"),c(xo,"id","transformers.TFCLIPVisionModel"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFCLIPVisionModel"),c(Dt,"class","relative group"),c(jr,"href","/docs/transformers/pr_15761/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(ne,"class","docstring"),c(us,"class","docstring"),c(Eo,"id","transformers.FlaxCLIPModel"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.FlaxCLIPModel"),c(Nt,"class","relative group"),c(Fr,"href","/docs/transformers/pr_15761/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Cs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Cs,"rel","nofollow"),c(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(bs,"rel","nofollow"),c(ys,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ys,"rel","nofollow"),c(Ls,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ls,"rel","nofollow"),c(ks,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ks,"rel","nofollow"),c(se,"class","docstring"),c(Oe,"class","docstring"),c(Ve,"class","docstring"),c(z,"class","docstring"),c(Mo,"id","transformers.FlaxCLIPTextModel"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.FlaxCLIPTextModel"),c(Vt,"class","relative group"),c(re,"class","docstring"),c(Fs,"class","docstring"),c(Fo,"id","transformers.FlaxCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.FlaxCLIPVisionModel"),c(Wt,"class","relative group"),c(ae,"class","docstring"),c(Ns,"class","docstring")},m(t,h){e(document.head,p),m(t,L,h),m(t,u,h),e(u,b),e(b,y),P(g,y,null),e(u,f),e(u,k),e(k,Vo),m(t,at,h),m(t,M,h),e(M,ue),e(ue,Ce),P(be,Ce,null),e(M,So),e(M,ye),e(ye,Wo),m(t,Ut,h),m(t,pe,h),e(pe,Me),e(pe,Le),e(Le,Rt),e(pe,H),m(t,he,h),m(t,je,h),e(je,it),m(t,Ht,h),m(t,Fe,h),e(Fe,ke),e(ke,Bo),m(t,Kt,h),m(t,A,h),e(A,ge),e(ge,we),P(xe,we,null),e(A,Uo),e(A,$e),e($e,Ro),m(t,Gt,h),m(t,me,h),e(me,Ho),m(t,qe,h),m(t,_e,h),e(_e,x),e(_e,j),e(j,Jt),e(_e,Rs),m(t,Ko,h),m(t,E,h),e(E,Hs),e(E,lt),e(lt,Ks),e(E,De),e(E,ve),e(ve,Gs),e(E,Js),e(E,Pe),e(Pe,Xs),e(E,Zs),e(E,Ae),e(Ae,Qs),e(E,gd),e(E,Ys),e(Ys,_d),e(E,vd),e(E,er),e(er,Pd),e(E,Td),m(t,Xi,h),P(Go,t,h),m(t,Zi,h),m(t,Ne,h),e(Ne,Id),e(Ne,Jo),e(Jo,Cd),e(Ne,bd),e(Ne,Xo),e(Xo,yd),e(Ne,Ld),m(t,Qi,h),m(t,dt,h),e(dt,Xt),e(Xt,na),P(Zo,na,null),e(dt,kd),e(dt,sa),e(sa,wd),m(t,Yi,h),m(t,fe,h),P(Qo,fe,null),e(fe,xd),e(fe,Zt),e(Zt,tr),e(tr,$d),e(Zt,Ed),e(Zt,or),e(or,zd),e(Zt,Md),e(fe,jd),e(fe,ct),e(ct,Fd),e(ct,nr),e(nr,qd),e(ct,Dd),e(ct,sr),e(sr,Ad),e(ct,Nd),e(fe,Od),e(fe,Qt),P(Yo,Qt,null),e(Qt,Vd),e(Qt,en),e(en,Sd),e(en,rr),e(rr,Wd),e(en,Bd),m(t,el,h),m(t,pt,h),e(pt,Yt),e(Yt,ra),P(tn,ra,null),e(pt,Ud),e(pt,aa),e(aa,Rd),m(t,tl,h),m(t,V,h),P(on,V,null),e(V,Hd),e(V,ht),e(ht,Kd),e(ht,ar),e(ar,Gd),e(ht,Jd),e(ht,nn),e(nn,Xd),e(ht,Zd),e(V,Qd),e(V,mt),e(mt,Yd),e(mt,ir),e(ir,ec),e(mt,tc),e(mt,lr),e(lr,oc),e(mt,nc),e(V,sc),e(V,ia),e(ia,rc),e(V,ac),P(sn,V,null),m(t,ol,h),m(t,ft,h),e(ft,eo),e(eo,la),P(rn,la,null),e(ft,ic),e(ft,da),e(da,lc),m(t,nl,h),m(t,S,h),P(an,S,null),e(S,dc),e(S,ut),e(ut,cc),e(ut,dr),e(dr,pc),e(ut,hc),e(ut,ln),e(ln,mc),e(ut,fc),e(S,uc),e(S,gt),e(gt,gc),e(gt,cr),e(cr,_c),e(gt,vc),e(gt,pr),e(pr,Pc),e(gt,Tc),e(S,Ic),e(S,ca),e(ca,Cc),e(S,bc),P(dn,S,null),m(t,sl,h),m(t,_t,h),e(_t,to),e(to,pa),P(cn,pa,null),e(_t,yc),e(_t,ha),e(ha,Lc),m(t,rl,h),m(t,F,h),P(pn,F,null),e(F,kc),e(F,ma),e(ma,wc),e(F,xc),e(F,hn),e(hn,$c),e(hn,hr),e(hr,Ec),e(hn,zc),e(F,Mc),e(F,Te),P(mn,Te,null),e(Te,jc),e(Te,fa),e(fa,Fc),e(Te,qc),e(Te,ua),e(ua,mr),e(mr,Dc),e(mr,ga),e(ga,Ac),e(Te,Nc),e(Te,_a),e(_a,Oc),e(F,Vc),e(F,oo),P(fn,oo,null),e(oo,Sc),e(oo,un),e(un,Wc),e(un,va),e(va,Bc),e(un,Uc),e(F,Rc),e(F,no),P(gn,no,null),e(no,Hc),e(no,Pa),e(Pa,Kc),e(F,Gc),e(F,Ta),m(t,al,h),m(t,vt,h),e(vt,so),e(so,Ia),P(_n,Ia,null),e(vt,Jc),e(vt,Ca),e(Ca,Xc),m(t,il,h),m(t,W,h),P(vn,W,null),e(W,Zc),e(W,Pn),e(Pn,Qc),e(Pn,ba),e(ba,Yc),e(Pn,ep),e(W,tp),e(W,Tn),e(Tn,op),e(Tn,fr),e(fr,np),e(Tn,sp),e(W,rp),e(W,Ie),P(In,Ie,null),e(Ie,ap),e(Ie,ya),e(ya,ip),e(Ie,lp),e(Ie,La),e(La,ur),e(ur,dp),e(ur,ka),e(ka,cp),e(Ie,pp),e(Ie,wa),e(wa,hp),e(W,mp),e(W,ro),P(Cn,ro,null),e(ro,fp),e(ro,xa),e(xa,up),m(t,ll,h),m(t,Pt,h),e(Pt,ao),e(ao,$a),P(bn,$a,null),e(Pt,gp),e(Pt,Ea),e(Ea,_p),m(t,dl,h),m(t,B,h),P(yn,B,null),e(B,vp),e(B,za),e(za,Pp),e(B,Tp),e(B,Ln),e(Ln,Ip),e(Ln,gr),e(gr,Cp),e(Ln,bp),e(B,yp),e(B,io),P(kn,io,null),e(io,Lp),e(io,wn),e(wn,kp),e(wn,Ma),e(Ma,wp),e(wn,xp),e(B,$p),e(B,lo),P(xn,lo,null),e(lo,Ep),e(lo,Tt),e(Tt,zp),e(Tt,ja),e(ja,Mp),e(Tt,jp),e(Tt,Fa),e(Fa,Fp),e(Tt,qp),m(t,cl,h),m(t,It,h),e(It,co),e(co,qa),P($n,qa,null),e(It,Dp),e(It,Da),e(Da,Ap),m(t,pl,h),m(t,U,h),P(En,U,null),e(U,Np),e(U,Aa),e(Aa,Op),e(U,Vp),e(U,K),e(K,_r),e(_r,Sp),e(K,Wp),e(K,vr),e(vr,Bp),e(K,Up),e(K,Pr),e(Pr,Rp),e(K,Hp),e(K,Na),e(Na,Kp),e(K,Gp),e(K,Tr),e(Tr,Jp),e(K,Xp),e(U,Zp),e(U,po),P(zn,po,null),e(po,Qp),e(po,Mn),e(Mn,Yp),e(Mn,Ir),e(Ir,eh),e(Mn,th),e(U,oh),e(U,ho),P(jn,ho,null),e(ho,nh),e(ho,Fn),e(Fn,sh),e(Fn,Cr),e(Cr,rh),e(Fn,ah),m(t,hl,h),m(t,Ct,h),e(Ct,mo),e(mo,Oa),P(qn,Oa,null),e(Ct,ih),e(Ct,Va),e(Va,lh),m(t,ml,h),m(t,R,h),P(Dn,R,null),e(R,dh),e(R,An),e(An,ch),e(An,Nn),e(Nn,ph),e(An,hh),e(R,mh),e(R,G),P(On,G,null),e(G,fh),e(G,bt),e(bt,uh),e(bt,br),e(br,gh),e(bt,_h),e(bt,Sa),e(Sa,vh),e(bt,Ph),e(G,Th),P(fo,G,null),e(G,Ih),e(G,Wa),e(Wa,Ch),e(G,bh),P(Vn,G,null),e(R,yh),e(R,J),P(Sn,J,null),e(J,Lh),e(J,yt),e(yt,kh),e(yt,yr),e(yr,wh),e(yt,xh),e(yt,Ba),e(Ba,$h),e(yt,Eh),e(J,zh),P(uo,J,null),e(J,Mh),e(J,Ua),e(Ua,jh),e(J,Fh),P(Wn,J,null),e(R,qh),e(R,X),P(Bn,X,null),e(X,Dh),e(X,Lt),e(Lt,Ah),e(Lt,Lr),e(Lr,Nh),e(Lt,Oh),e(Lt,Ra),e(Ra,Vh),e(Lt,Sh),e(X,Wh),P(go,X,null),e(X,Bh),e(X,Ha),e(Ha,Uh),e(X,Rh),P(Un,X,null),m(t,fl,h),m(t,kt,h),e(kt,_o),e(_o,Ka),P(Rn,Ka,null),e(kt,Hh),e(kt,Ga),e(Ga,Kh),m(t,ul,h),m(t,Hn,h),e(Hn,Z),P(Kn,Z,null),e(Z,Gh),e(Z,wt),e(wt,Jh),e(wt,kr),e(kr,Xh),e(wt,Zh),e(wt,Ja),e(Ja,Qh),e(wt,Yh),e(Z,em),P(vo,Z,null),e(Z,tm),e(Z,Xa),e(Xa,om),e(Z,nm),P(Gn,Z,null),m(t,gl,h),m(t,xt,h),e(xt,Po),e(Po,Za),P(Jn,Za,null),e(xt,sm),e(xt,Qa),e(Qa,rm),m(t,_l,h),m(t,Xn,h),e(Xn,Q),P(Zn,Q,null),e(Q,am),e(Q,$t),e($t,im),e($t,wr),e(wr,lm),e($t,dm),e($t,Ya),e(Ya,cm),e($t,pm),e(Q,hm),P(To,Q,null),e(Q,mm),e(Q,ei),e(ei,fm),e(Q,um),P(Qn,Q,null),m(t,vl,h),m(t,Et,h),e(Et,Io),e(Io,ti),P(Yn,ti,null),e(Et,gm),e(Et,oi),e(oi,_m),m(t,Pl,h),m(t,q,h),P(es,q,null),e(q,vm),e(q,ts),e(ts,Pm),e(ts,xr),e(xr,Tm),e(ts,Im),e(q,Cm),e(q,os),e(os,bm),e(os,ns),e(ns,ym),e(os,Lm),e(q,km),P(Co,q,null),e(q,wm),e(q,Y),P(ss,Y,null),e(Y,xm),e(Y,zt),e(zt,$m),e(zt,$r),e($r,Em),e(zt,zm),e(zt,ni),e(ni,Mm),e(zt,jm),e(Y,Fm),P(bo,Y,null),e(Y,qm),e(Y,si),e(si,Dm),e(Y,Am),P(rs,Y,null),e(q,Nm),e(q,ee),P(as,ee,null),e(ee,Om),e(ee,Mt),e(Mt,Vm),e(Mt,Er),e(Er,Sm),e(Mt,Wm),e(Mt,ri),e(ri,Bm),e(Mt,Um),e(ee,Rm),P(yo,ee,null),e(ee,Hm),e(ee,ai),e(ai,Km),e(ee,Gm),P(is,ee,null),e(q,Jm),e(q,te),P(ls,te,null),e(te,Xm),e(te,jt),e(jt,Zm),e(jt,zr),e(zr,Qm),e(jt,Ym),e(jt,ii),e(ii,ef),e(jt,tf),e(te,of),P(Lo,te,null),e(te,nf),e(te,li),e(li,sf),e(te,rf),P(ds,te,null),m(t,Tl,h),m(t,Ft,h),e(Ft,ko),e(ko,di),P(cs,di,null),e(Ft,af),e(Ft,ci),e(ci,lf),m(t,Il,h),m(t,ps,h),e(ps,oe),P(hs,oe,null),e(oe,df),e(oe,qt),e(qt,cf),e(qt,Mr),e(Mr,pf),e(qt,hf),e(qt,pi),e(pi,mf),e(qt,ff),e(oe,uf),P(wo,oe,null),e(oe,gf),e(oe,hi),e(hi,_f),e(oe,vf),P(ms,oe,null),m(t,Cl,h),m(t,Dt,h),e(Dt,xo),e(xo,mi),P(fs,mi,null),e(Dt,Pf),e(Dt,fi),e(fi,Tf),m(t,bl,h),m(t,us,h),e(us,ne),P(gs,ne,null),e(ne,If),e(ne,At),e(At,Cf),e(At,jr),e(jr,bf),e(At,yf),e(At,ui),e(ui,Lf),e(At,kf),e(ne,wf),P($o,ne,null),e(ne,xf),e(ne,gi),e(gi,$f),e(ne,Ef),P(_s,ne,null),m(t,yl,h),m(t,Nt,h),e(Nt,Eo),e(Eo,_i),P(vs,_i,null),e(Nt,zf),e(Nt,vi),e(vi,Mf),m(t,Ll,h),m(t,z,h),P(Ps,z,null),e(z,jf),e(z,Ts),e(Ts,Ff),e(Ts,Fr),e(Fr,qf),e(Ts,Df),e(z,Af),e(z,Is),e(Is,Nf),e(Is,Cs),e(Cs,Of),e(Is,Vf),e(z,Sf),e(z,Pi),e(Pi,Wf),e(z,Bf),e(z,Ee),e(Ee,Ti),e(Ti,bs),e(bs,Uf),e(Ee,Rf),e(Ee,Ii),e(Ii,ys),e(ys,Hf),e(Ee,Kf),e(Ee,Ci),e(Ci,Ls),e(Ls,Gf),e(Ee,Jf),e(Ee,bi),e(bi,ks),e(ks,Xf),e(z,Zf),e(z,se),P(ws,se,null),e(se,Qf),e(se,Ot),e(Ot,Yf),e(Ot,yi),e(yi,eu),e(Ot,tu),e(Ot,Li),e(Li,ou),e(Ot,nu),e(se,su),P(zo,se,null),e(se,ru),e(se,ki),e(ki,au),e(se,iu),P(xs,se,null),e(z,lu),e(z,Oe),P($s,Oe,null),e(Oe,du),e(Oe,wi),e(wi,cu),e(Oe,pu),P(Es,Oe,null),e(z,hu),e(z,Ve),P(zs,Ve,null),e(Ve,mu),e(Ve,xi),e(xi,fu),e(Ve,uu),P(Ms,Ve,null),m(t,kl,h),m(t,Vt,h),e(Vt,Mo),e(Mo,$i),P(js,$i,null),e(Vt,gu),e(Vt,Ei),e(Ei,_u),m(t,wl,h),m(t,Fs,h),e(Fs,re),P(qs,re,null),e(re,vu),e(re,St),e(St,Pu),e(St,zi),e(zi,Tu),e(St,Iu),e(St,Mi),e(Mi,Cu),e(St,bu),e(re,yu),P(jo,re,null),e(re,Lu),e(re,ji),e(ji,ku),e(re,wu),P(Ds,re,null),m(t,xl,h),m(t,Wt,h),e(Wt,Fo),e(Fo,Fi),P(As,Fi,null),e(Wt,xu),e(Wt,qi),e(qi,$u),m(t,$l,h),m(t,Ns,h),e(Ns,ae),P(Os,ae,null),e(ae,Eu),e(ae,Bt),e(Bt,zu),e(Bt,Di),e(Di,Mu),e(Bt,ju),e(Bt,Ai),e(Ai,Fu),e(Bt,qu),e(ae,Du),P(qo,ae,null),e(ae,Au),e(ae,Ni),e(Ni,Nu),e(ae,Ou),P(Vs,ae,null),El=!0},p(t,[h]){const Ss={};h&2&&(Ss.$$scope={dirty:h,ctx:t}),fo.$set(Ss);const Oi={};h&2&&(Oi.$$scope={dirty:h,ctx:t}),uo.$set(Oi);const Vi={};h&2&&(Vi.$$scope={dirty:h,ctx:t}),go.$set(Vi);const Si={};h&2&&(Si.$$scope={dirty:h,ctx:t}),vo.$set(Si);const Ws={};h&2&&(Ws.$$scope={dirty:h,ctx:t}),To.$set(Ws);const Wi={};h&2&&(Wi.$$scope={dirty:h,ctx:t}),Co.$set(Wi);const Bi={};h&2&&(Bi.$$scope={dirty:h,ctx:t}),bo.$set(Bi);const Ui={};h&2&&(Ui.$$scope={dirty:h,ctx:t}),yo.$set(Ui);const Bs={};h&2&&(Bs.$$scope={dirty:h,ctx:t}),Lo.$set(Bs);const Ri={};h&2&&(Ri.$$scope={dirty:h,ctx:t}),wo.$set(Ri);const Hi={};h&2&&(Hi.$$scope={dirty:h,ctx:t}),$o.$set(Hi);const Ki={};h&2&&(Ki.$$scope={dirty:h,ctx:t}),zo.$set(Ki);const Gi={};h&2&&(Gi.$$scope={dirty:h,ctx:t}),jo.$set(Gi);const Us={};h&2&&(Us.$$scope={dirty:h,ctx:t}),qo.$set(Us)},i(t){El||(T(g.$$.fragment,t),T(be.$$.fragment,t),T(xe.$$.fragment,t),T(Go.$$.fragment,t),T(Zo.$$.fragment,t),T(Qo.$$.fragment,t),T(Yo.$$.fragment,t),T(tn.$$.fragment,t),T(on.$$.fragment,t),T(sn.$$.fragment,t),T(rn.$$.fragment,t),T(an.$$.fragment,t),T(dn.$$.fragment,t),T(cn.$$.fragment,t),T(pn.$$.fragment,t),T(mn.$$.fragment,t),T(fn.$$.fragment,t),T(gn.$$.fragment,t),T(_n.$$.fragment,t),T(vn.$$.fragment,t),T(In.$$.fragment,t),T(Cn.$$.fragment,t),T(bn.$$.fragment,t),T(yn.$$.fragment,t),T(kn.$$.fragment,t),T(xn.$$.fragment,t),T($n.$$.fragment,t),T(En.$$.fragment,t),T(zn.$$.fragment,t),T(jn.$$.fragment,t),T(qn.$$.fragment,t),T(Dn.$$.fragment,t),T(On.$$.fragment,t),T(fo.$$.fragment,t),T(Vn.$$.fragment,t),T(Sn.$$.fragment,t),T(uo.$$.fragment,t),T(Wn.$$.fragment,t),T(Bn.$$.fragment,t),T(go.$$.fragment,t),T(Un.$$.fragment,t),T(Rn.$$.fragment,t),T(Kn.$$.fragment,t),T(vo.$$.fragment,t),T(Gn.$$.fragment,t),T(Jn.$$.fragment,t),T(Zn.$$.fragment,t),T(To.$$.fragment,t),T(Qn.$$.fragment,t),T(Yn.$$.fragment,t),T(es.$$.fragment,t),T(Co.$$.fragment,t),T(ss.$$.fragment,t),T(bo.$$.fragment,t),T(rs.$$.fragment,t),T(as.$$.fragment,t),T(yo.$$.fragment,t),T(is.$$.fragment,t),T(ls.$$.fragment,t),T(Lo.$$.fragment,t),T(ds.$$.fragment,t),T(cs.$$.fragment,t),T(hs.$$.fragment,t),T(wo.$$.fragment,t),T(ms.$$.fragment,t),T(fs.$$.fragment,t),T(gs.$$.fragment,t),T($o.$$.fragment,t),T(_s.$$.fragment,t),T(vs.$$.fragment,t),T(Ps.$$.fragment,t),T(ws.$$.fragment,t),T(zo.$$.fragment,t),T(xs.$$.fragment,t),T($s.$$.fragment,t),T(Es.$$.fragment,t),T(zs.$$.fragment,t),T(Ms.$$.fragment,t),T(js.$$.fragment,t),T(qs.$$.fragment,t),T(jo.$$.fragment,t),T(Ds.$$.fragment,t),T(As.$$.fragment,t),T(Os.$$.fragment,t),T(qo.$$.fragment,t),T(Vs.$$.fragment,t),El=!0)},o(t){I(g.$$.fragment,t),I(be.$$.fragment,t),I(xe.$$.fragment,t),I(Go.$$.fragment,t),I(Zo.$$.fragment,t),I(Qo.$$.fragment,t),I(Yo.$$.fragment,t),I(tn.$$.fragment,t),I(on.$$.fragment,t),I(sn.$$.fragment,t),I(rn.$$.fragment,t),I(an.$$.fragment,t),I(dn.$$.fragment,t),I(cn.$$.fragment,t),I(pn.$$.fragment,t),I(mn.$$.fragment,t),I(fn.$$.fragment,t),I(gn.$$.fragment,t),I(_n.$$.fragment,t),I(vn.$$.fragment,t),I(In.$$.fragment,t),I(Cn.$$.fragment,t),I(bn.$$.fragment,t),I(yn.$$.fragment,t),I(kn.$$.fragment,t),I(xn.$$.fragment,t),I($n.$$.fragment,t),I(En.$$.fragment,t),I(zn.$$.fragment,t),I(jn.$$.fragment,t),I(qn.$$.fragment,t),I(Dn.$$.fragment,t),I(On.$$.fragment,t),I(fo.$$.fragment,t),I(Vn.$$.fragment,t),I(Sn.$$.fragment,t),I(uo.$$.fragment,t),I(Wn.$$.fragment,t),I(Bn.$$.fragment,t),I(go.$$.fragment,t),I(Un.$$.fragment,t),I(Rn.$$.fragment,t),I(Kn.$$.fragment,t),I(vo.$$.fragment,t),I(Gn.$$.fragment,t),I(Jn.$$.fragment,t),I(Zn.$$.fragment,t),I(To.$$.fragment,t),I(Qn.$$.fragment,t),I(Yn.$$.fragment,t),I(es.$$.fragment,t),I(Co.$$.fragment,t),I(ss.$$.fragment,t),I(bo.$$.fragment,t),I(rs.$$.fragment,t),I(as.$$.fragment,t),I(yo.$$.fragment,t),I(is.$$.fragment,t),I(ls.$$.fragment,t),I(Lo.$$.fragment,t),I(ds.$$.fragment,t),I(cs.$$.fragment,t),I(hs.$$.fragment,t),I(wo.$$.fragment,t),I(ms.$$.fragment,t),I(fs.$$.fragment,t),I(gs.$$.fragment,t),I($o.$$.fragment,t),I(_s.$$.fragment,t),I(vs.$$.fragment,t),I(Ps.$$.fragment,t),I(ws.$$.fragment,t),I(zo.$$.fragment,t),I(xs.$$.fragment,t),I($s.$$.fragment,t),I(Es.$$.fragment,t),I(zs.$$.fragment,t),I(Ms.$$.fragment,t),I(js.$$.fragment,t),I(qs.$$.fragment,t),I(jo.$$.fragment,t),I(Ds.$$.fragment,t),I(As.$$.fragment,t),I(Os.$$.fragment,t),I(qo.$$.fragment,t),I(Vs.$$.fragment,t),El=!1},d(t){o(p),t&&o(L),t&&o(u),C(g),t&&o(at),t&&o(M),C(be),t&&o(Ut),t&&o(pe),t&&o(he),t&&o(je),t&&o(Ht),t&&o(Fe),t&&o(Kt),t&&o(A),C(xe),t&&o(Gt),t&&o(me),t&&o(qe),t&&o(_e),t&&o(Ko),t&&o(E),t&&o(Xi),C(Go,t),t&&o(Zi),t&&o(Ne),t&&o(Qi),t&&o(dt),C(Zo),t&&o(Yi),t&&o(fe),C(Qo),C(Yo),t&&o(el),t&&o(pt),C(tn),t&&o(tl),t&&o(V),C(on),C(sn),t&&o(ol),t&&o(ft),C(rn),t&&o(nl),t&&o(S),C(an),C(dn),t&&o(sl),t&&o(_t),C(cn),t&&o(rl),t&&o(F),C(pn),C(mn),C(fn),C(gn),t&&o(al),t&&o(vt),C(_n),t&&o(il),t&&o(W),C(vn),C(In),C(Cn),t&&o(ll),t&&o(Pt),C(bn),t&&o(dl),t&&o(B),C(yn),C(kn),C(xn),t&&o(cl),t&&o(It),C($n),t&&o(pl),t&&o(U),C(En),C(zn),C(jn),t&&o(hl),t&&o(Ct),C(qn),t&&o(ml),t&&o(R),C(Dn),C(On),C(fo),C(Vn),C(Sn),C(uo),C(Wn),C(Bn),C(go),C(Un),t&&o(fl),t&&o(kt),C(Rn),t&&o(ul),t&&o(Hn),C(Kn),C(vo),C(Gn),t&&o(gl),t&&o(xt),C(Jn),t&&o(_l),t&&o(Xn),C(Zn),C(To),C(Qn),t&&o(vl),t&&o(Et),C(Yn),t&&o(Pl),t&&o(q),C(es),C(Co),C(ss),C(bo),C(rs),C(as),C(yo),C(is),C(ls),C(Lo),C(ds),t&&o(Tl),t&&o(Ft),C(cs),t&&o(Il),t&&o(ps),C(hs),C(wo),C(ms),t&&o(Cl),t&&o(Dt),C(fs),t&&o(bl),t&&o(us),C(gs),C($o),C(_s),t&&o(yl),t&&o(Nt),C(vs),t&&o(Ll),t&&o(z),C(Ps),C(ws),C(zo),C(xs),C($s),C(Es),C(zs),C(Ms),t&&o(kl),t&&o(Vt),C(js),t&&o(wl),t&&o(Fs),C(qs),C(jo),C(Ds),t&&o(xl),t&&o(Wt),C(As),t&&o($l),t&&o(Ns),C(Os),C(qo),C(Vs)}}}const c1={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function p1($,p,L){let{fw:u}=p;return $.$$set=b=>{"fw"in b&&L(0,u=b.fw)},[u]}class v1 extends Rv{constructor(p){super();Hv(this,p,p1,d1,Kv,{fw:0})}}export{v1 as default,c1 as metadata};
